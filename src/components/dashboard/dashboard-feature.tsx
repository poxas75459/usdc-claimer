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
    "uzL6dV8by4njcNCcDgV9g34urAUGhxLwd6ysnrarQg3rF5Qaaxy2G5kJQBt6Jdoy3jAdcG2jVeyfCmp6TS3QMdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBy2jyfo884G5MsVKkQEu56zRuBqjbrV4nYnWeyTWXUd1aeokQYJFCk6u3R2JwWDtuNude2mAJjTUUhbeMkJyjP",
  "key1": "4k6QH4WSvJv7xQhB53Y3rCCEAzt69fyQQsKqk8eeAyQuJthvhNFQoUhtviCZ8uDvX8YqdTjYupmqtS89MDC91Pbu",
  "key2": "4PFAY3nSXXjCfoSrz9FMAP2xfCjymBeQ1C832AbodAxi4i9qgYTgXaMNrByzFVrqr7xzyvuAHxmmz1GnxEj8YMmv",
  "key3": "5qzr3PGgNmg1CAcYaYeWEDp1DXgucEvUpAPuBGbXh1GR6JWqb2Bf8VTjwRKKD3mGg6n2teZ2DrukDTjHgVAArBUB",
  "key4": "5Y8zaT7HxqpmPuvxjGCZDxg7pKBJAXUx1uDHZLGuA2dfGyogxwgp2yTzLJkmkJSceS9uaVogyWYBEPC2W1sESbuW",
  "key5": "5JM3uJewLN7B7rR7vwJBk4DsbZrWrfgyadf3gkfXfFKfbR9xr6C4oJ3qmBovyqx9xmieXWwiK1GQLJyNxCZQ2rLQ",
  "key6": "26XSZAEM36zYER1kA9MCuMTpNAimjgPofQ8ydtXMhvC6FS5XBpGkEYHanTzLVY9gD6bapgkrTFaZRBdFHvGAngu6",
  "key7": "2aify183y893C2yXeTbVRuGQF4jg5cTxbBmKRFxarxBStBob6KEPU5NkVdP41Eua3smZiD5YMDeq8YxamDtzm7NJ",
  "key8": "3Z9EgXXvZJyVTsMLEzRc4Vh4SraEFZ9JGZXG2gcByNA8DBKpebY8Hz9RgsJFTj1tbrL7oiSNaVmSvytnZ38EK12W",
  "key9": "oKvjbGXk6vKZZaY1yZmNCfm9W19zyZnUdZ1sdhoYKPLZA9534kmqScLLUfcvjAU56K3ocgt4uvE6k3oAbKg1gRE",
  "key10": "5XaFJqBb4a6xFxeeDDXeFMrryw8RFc436ZGfXYQPoVScELBxv8hDCYbYSxCunap6sVQgxGtAgZrd822zxZstH3SS",
  "key11": "3mo78D5CmCJw2zr7YgAvzaot8Q7i5vGsP9DSFt4Cj9DPVAyybp2dTXgpMp8KBsfxa7MdhdiwFXJzuFocL7BXvjoX",
  "key12": "5DUnND1EpiPoctFfCtv3ToYfkquW84xCh38gfjjpaxsds5n5Er5qzHW1dk4KdyELhev6CzenPUuZXAkgqsJ84FEu",
  "key13": "4K77nggkWmGyzE41pSUSV9EZZy97MP5oGEvasTZfSyzjPPZJh69GRvzG47EoSSEmxHA7jNtr661nQkv15w4w5rP2",
  "key14": "4ZuMK11sp37tUomvjePaPyEuwHyiQxCpn9ued21T9SMgsiDawub9WGwPPtiMHkycD88rE4c1YD2xbvPY7ZXCJApQ",
  "key15": "4cb5B1c3LHVdZpo5TM4z92uL8XeNSi6Ge3bcdEBYnP34SNXiN8w7KohhnWanrkkhRYZ3cnteixmaf2v8VJX69VPm",
  "key16": "4TGr17SyzMqo2HgXKmTbkNxeRVz3xyyyj4UsMHagoNszrFbyju9QuyKcVmUzMsfn89Zd8FwPPRQdzeUNKTvtSSbq",
  "key17": "4KQVxbncQVebkr9BK3sMZxxvqqkEMUMuVE2NtZ459mBXk3hWbeB9dLSNGJy3FsZW5QA6WgVFZAVthNXSFB2ntRfM",
  "key18": "57HyZcNPtNqP9SXfSmUVA8yGqoySRjTkwBwyPmVrH5a5cFezxhYZ1xc8WXiUQjf1i5uuNvovAbg6ZrjYWx4ModrS",
  "key19": "3VvHn18UJMmCpXekeLxF8tNGEeHgEtVFwRqXtHkL13iJM4jg29CYsdUaa9CFjLndk6iAX9XvDutKCAmhM5Pzb8zf",
  "key20": "2wTVopKMvPyDG5XpGWwznmJmV5oUF8gUaAiDKPQPmWEb59nuDadzc4ssmY8Fe8uyWdFEJJjkU7xZ9RadiYzEqyU9",
  "key21": "3heWSBUPksjr2QUrrxJpJaqZ2NTT5Nwhv76KGdGXFmSdsHpAY973DpdNK5EQR1jDmddJwUSPmMrjPPaFCgWDABD8",
  "key22": "59kazctoVU98dhc1h2RyH7tuVBhvbtrBsqurdgxaKAbrhpGktQZhmgSBQ43fJjK8TzEHgBb4Z8Tqggz33mSeRMn8",
  "key23": "2EM6XKDC9exHjhMEV7uGoNnVWGJXGS7cvj75DSmnSeQp13iNs6Ygt6jXczP9Fun67hmjZMzS49hTLdz6JkHBDqch",
  "key24": "4FxVPLd4pmXACoZrQBvCtfUXCnM6TinALbJaaf4Q66PMsMUqQUngCyxvbtWkNviVVPzzPw8fiffhTAgcDCyRwdhN",
  "key25": "23c8MrPwZpy1sE3A1Zs2q5XqAS6dhwrUjendk3pWqsKpUyq3FDJxhnqRYTthC87hJsTx6r5gnoAwygB4rqtqoMTN"
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
