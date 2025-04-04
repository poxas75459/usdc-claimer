/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "ceXkjUX7HP82QQmWGCYTs4EDzoGmmcLdNBtXzyRpAMt2eqYSL2WDYQWrPW4YfyHYK968EjwfvJhfNL47tFk1E5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Db2WKMJFniuHWPHw6ApNZJ4Bp6mudHe89h4zFo95VUj6yZHmq8FvFFnE5VV6sg28tnLKkeYuF1itbC3x6k2cUDU",
  "key1": "48SNqrZNsztsEYjajjEVh8ydVCEHydWNFgayykWiDxjLWQbSbbNijU9ZbcHWVTGmxJuHWiQVYcofH4AJmhi2jWCM",
  "key2": "52ZX13VXDVZ7bPkLK2NyPKxXGK9mzC64ohV837FZuoAJCeHSZArqL1EStRKyTqe3eQjPJ2aYSmrTBnT9A7r1ms5Z",
  "key3": "5iFQ1aZuqyFBV4Zt74k9kJWkcnkMweoAEu2QrggodpAEQqwif5nBwTPXM2133uCyuNviSsnWnh3cmdDfCXTnhFNk",
  "key4": "2z6Z9ej4CDzvQZ799REmJz3LGu4NXPN5fsRnfrPyyHDDASP93BQBpNJnpFTew7jGUcLfquaKjh2P65mVLSBET3or",
  "key5": "3rixptFe1XPcLm1hzjtTEgt73iL39X7cq86Ci38h6wGskAsSTTen9jqfSGRg7ArUoceX6HRP1TBrTP9nptWoZHDS",
  "key6": "3huhwszDKYZm9Zvt2dkPMbekvtpYkVZToMSdY51ccNUhgWV1qKf7CDusNTW8AWXZmZ3ynN5a6nvsnVeWAmbsLbwx",
  "key7": "yRmi5nsDBn81ErtqrbCaRwR8Noehny19pzN7zb34jJF2biNMDQZ4aUHGWQkCDBYndq3PB13rzuXgfPaMeo2KkjM",
  "key8": "2jJp586ntDdWDLxRGWNMXW6krqmz4EkFNPZz6eDHEuiTQ4xZrAHYAnmTeRUjSPr3jLPmXTFeSzPZUgdj5rrWYkPT",
  "key9": "UVW3nEnhctn4xoNVVMgxy3P2ug369R5xsUkpivKLkrMmDDanDpRHm4hiNZmcbb4xBLTU9nVabijvKsYfLdQ1EL7",
  "key10": "4hi1qSGY4erYw8HvNFmZdC4DUK3A6BU8cDNv1iw1xBtYwf9GVCPPMwbZLb5jPRX3H77WY8dwETJ14r37iShgLMxK",
  "key11": "496vb8Qb9di5tTZQ6oMb8wfEzeY7zRMw8FzEMCPtyp67h5zVTz2BMgqNpjK4AiA1fdaJ7fNwGEvk4UHNYktEihPT",
  "key12": "LpQEN3SxRhtc5RcAoP736QgotU5zFCdJJErWDdKkozpSs4WiP1sTvLq6cguZAsumTnEoQLqR9m6TpjoigefuqPY",
  "key13": "3GuGiv3r5CVsxvEQgFMHZRPmMbipvS3b4L1uETwSqyfX2KCzKsCHkMRuf25yyvznJM2DxA1KPiJ5kh6rCbj5rJTM",
  "key14": "3Pdc5s77DUiSX2VdAhsipgDBa4RuXcdsZFmnrefuU3YYLZLsddgeAT4WNj3duANvFjgZe7MpEk2V3bKo3TUkJxoo",
  "key15": "52sM9eZXB4qEEZ1zgBS7MChKcVxkMfFsq8qsMAAMpmqKM3nuwBDooSzXm42kyA9iFB7tYVHxJqoDuRmpRnrAkvPA",
  "key16": "inEvTb4Bru7uRQ8fc25B3ENciZfvqjhL26RN5ToKjR4DrUJ33f2HUAFix6r89gD2UnG418wt4EYKA3ate1iKgkC",
  "key17": "8h8bLLWZdaiNVjWmb6U29qx81ijrUiG3pqyGMpxUc8P8q7U2hx3SPaygLUrmrBt2ttVeeC3ZC93QVo2mJ1gKFDZ",
  "key18": "3RALGRho4NW338EwneLAdApRvG7ufGxcrt83VykPYGQfXNuzANZwhbBgWCi3UpQ96BqwqoRAcNc8zZb7McgKq1sJ",
  "key19": "29bMTsHEi8Zyr8F9hw91csbSUn7fHuLLko7G1FPBqrgRkCmR4P3JdVfYZKSAAZLxinWKtNu6SKPcJK4MxkLS2nit",
  "key20": "KaXF1h183ggW8T8fYgo8yTpKsk6hLUY6ydvDgGddM9o9YxLCAZXiaBfSdv96t9rsMz2jysMjp1So4zYRoh14oQN",
  "key21": "2arq61NdsZHuXv3HCyD79isTreyafYQJbj1XiUATrhbuqvg5UDbxjL2ZE24BYG91sjbhZyqhA65UUuCi7AjTraTy",
  "key22": "3rTpwDpzpd7q38Rd8P4Xgg6HV9or1h1pKEwoP5LEjGvLLHdQrngrykVZB9iN5nfKgEg8H6nT5HxXJnTi51SCgFHc",
  "key23": "4KzH9hsw5nUrQBWUGeVyJ61YB4Wbx58zvNKJMcJBAck7PTTHtu2nRrmTKVMhjZQVrXHfUHfCpp5a8ZbZoYGkHf23",
  "key24": "63WV1vXXXoNqzZKzJYchCQzw5uLw5pTLCMzJ235Zw6uab3KdAGWJ2qELcWmhaXyc1QRbM8MNYL23LGV8ZQuXu86n",
  "key25": "2NCpwr6Te4swJyxXST9mXmZnzjLj1QrWjXxonS42iHZsWqeEri1iEr4tSE3RPdPHekDKmMtLH6fTwjkaWu66uAhm",
  "key26": "3c4BsYjNG24DCSugp8FdVgXbnXfTvyMBiK2VTzS4vvkeTjAWqEh7EpD9rSDvFvv4noeLWP7TnW45APrdeeBY9gU3",
  "key27": "hfYftT2GXVKopUXKZorLuC9qGq2sYfw9WFJwv2p1yEbgtmNQAqQXriBre7Hfbdgj8xbKN1UByZrqvUi88hSWHqL",
  "key28": "58xfG2QRqjYz9uhWaAE4fxFhqtjUeSgZfLRYJdbSQufgVYNtrT9xZxoVFbTUTWnkMVnMcv71CzKFUTAueGMVNgZU",
  "key29": "2uwukVbAPgrnUTTt4KiiJSTLdTFi2RZfq1XzQNERx6kAG2MpTk4igk9MdBZE8NZCMFPMrdKByPsoGE6XFLpc1SMh"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
