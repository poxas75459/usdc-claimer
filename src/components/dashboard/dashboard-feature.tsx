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
    "4Z5A5vAHLw53Z6VAekbkbd7ALjegjmHXWan3p38Zv7gJioTgDgEwMgRH57m3bZFgFZtXbMAXZwEVzDeS1H3p8BZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5nusN9EugM9Vj9bR73Yrg154qDLTT8K2DRhoJUtkmZTE5GeN8E8fhg65g2SjgC8N6RZdTLzJJ3c95XmV2jbEQ4",
  "key1": "58yDew86nPZXbsL4ZDAhTU172GoBRdpuAjnTYki9xGbTGvMYbFPdmJupzhLhjkAAid9FC7oF7wxg1xc37uHfgKDe",
  "key2": "3PRykyZy4zXfDpUftFwYGtoz3x2vJGTxVKkte7hQg7LVjyjekbBCdPc5t3ynuye1qBbQhQRSGy53fXjSgLJJ9wdQ",
  "key3": "mtgatChLxa5xtBhs1cHgi8d2oFFUWzVJphdDJPLs7NgRpQbxA67Y6EoYTR8g1YnZZzf9g9kwTbfSY1BPVkUxem9",
  "key4": "59xbdPjbAX3iYnZTtpZ6g51aqT5PxQMkibDeXcCJbqj1NDoXkbMaNFhhACcYAEd3FP752kgvHefaUDFkdqQzHuGp",
  "key5": "zASt4yLbkbddAC6r3zojFP4vQdJMPJSkj4Ac3yEyDqy2HYKr9YGRHPCS33C3urbD2jMh4m891E14JMgj7hLG7ov",
  "key6": "4YYznZqRCotio4xBSVfSJuQzPmUgxM9tYNi3Wbxz82jHtsF3JmGd6pL8XBUUAefi8N8m7pEpVd299JEBdBZypbBf",
  "key7": "5px78QZiZ3k5wpJMUAZTiCCNKR2attkt8cRjJjZg7ieANNuT9NusMYLjpqWokxVt1d1aawy5MagcWY8FGymgtRci",
  "key8": "xFeaH37Bm7yezxEsixkLX6Y1vfPfS2mTbqBjSxLqgRC1sL3JXjwkF2afBW7Z1eDgckgxYiznB9wAHju2dcWcp7q",
  "key9": "3kNBDjYidfmpCB8Y8oGKRVtSHA999JobFVH4XjFsGZktAYyrJvCuiAxpp4whdHCfzB1apLadN9ftUfLweAEUxTFM",
  "key10": "3T8MUDmr1pQ5MUrvsLBQX3oqaEykQRgyQHXXs245C9wPGe2NRYEDu76pvMPpHbrVW2gb5anpti6oXiPXYYtESey6",
  "key11": "4Rjigs4nBJJe1nXrD9UC1Ywddp3ZLfZfwnZLEhxCF9z5JDitv9NHnuS64ZfcwN7se384bR2uXMZJDsTyJAkGAyJ8",
  "key12": "AJ7ZNB4ZuzBtxo2T7qvoUYKTAVtSyqdjzfHavQ1XzaEptjRcTN6yv5JfTHKXVmCoXX7u5LnE8LpzLAcwmwU1W5V",
  "key13": "5e8yJ73tVrKwWXtLiDTrk99AT6c77Dn4ai2PPrif9gDbw38QcovW8Qd8gauZVZLDYQcUSm6EG7siRNmxJZsDTZTp",
  "key14": "3b5ALTR5iMewNFTYrZjbtCRqXGVSmweEgQaJ79Q8gvtbHYxir2ZZqjzdLFbpnFQtghHSXVVA6TbnMmJGpr1h9hmj",
  "key15": "2bfoVYCrWe6WaZDUt38QPfe8npwHaNhzmeWT4XsaWn3uREzorJq5WdkArg1vLqJduSwjtfcHcdagseYKRwrUnD7R",
  "key16": "3uLCng2SXF9uAcwBo4STS7VcZ7qFUFZuD8aUVxBkWFPbYhoffqMYB8doBj4oYZn3Z6LTADZPjrj9jEWGnwLaYi9j",
  "key17": "2R5QdZDPbcbxkrPUfxQ6h3QV6Ati6nspauJRD6XnbehiEfpfoH876UQiJhHndNYhnCdXovnaZuzLSec1NJ1j1Ddh",
  "key18": "4MvEStem6o8fauBUYgBMzYBVkUKe3tHmSUPSAmEXZZrsP7NBMPsvD4Um6EqmPN7HNzEAYpLxcFAJc6r3hR37zNts",
  "key19": "mPmJWefTTZgNX8FhtHX28fxmuKqFiQrMFEVvGNsAZfDSny1At1NHFg8eivTXqBy1NP5ic1GmudyWUXCzX8fZkSR",
  "key20": "5mAFLsZ1WCjxBgTbe7Mkxtt5ATkgaNYVpKpy7eSYqiguaeJJCpnguKmAgykTCExRrn5TBtxyUsBWqix72UwSe685",
  "key21": "67gZo7Cb2GnYfAGe9zeRAAvcaqVLXCoWNkx6PbD6aq9RD9MnqHbr5VBZm9m94NJi2i8KG9ZP4B345r7rStgsb7uL",
  "key22": "5eX2qUBn5ikkA7fr4qb2mfPzE4Fpy5hvXcZVFDdVSrmQ9o6AkXH2i4NJ1ha4Sp9e2bgKezBXPAuh9TKVp8bRWQd4",
  "key23": "hNdQBDWWXTox3QY5jTh4vBsasFJy99gC2FPgrWp7GH3LHVyF1mQ2BbwCxRLCpkhakDcECgypxWBvLdxUNqxiD7G",
  "key24": "J3NuAepjfEFNvmsZ8gc8W7imBUecfB2artpAz1SePPY7UUyoh4MpS9Q5DfNbK93i9gDYVg48DkhUkaKg9NnAc14",
  "key25": "2Z2rFLnX6o5hgwRiPvLeXQ3ABA5nhe232NWuPcoC69YEJxTPtz2iRBVmdJVN6YzVae6Xrpb1QPHo5RrbnUPm73UW",
  "key26": "5hztQmMsGwFY8yhQ2NNz7wq2pDT3GmEno7Y8ZZAJikAL2qpn4LnnwgjdnuZe4kUFussYJV4Ughp5TBYvwhWWvtzu",
  "key27": "3RbbVRErtydYwbMHmin6nK8dFCkvZxT3dDUqfD1TFcP1B2X8mMmus2qYCaotr4PQ7VCJ4stj2Ui1pnrpRkFT2Uhd",
  "key28": "4RMGff4T8VaPcqE2GQ2hho7MrxGNDPB2XhC14gQ3ruxeDq5nGGEdAPEFbviaGfDVDLZ2mE9Znd9UZh5bBtYHdAsV",
  "key29": "2fZBig16jTDqydJ3Ziryw4u3jhoBvc8DJuiLNqwyf9na7W3iKgvdBrV1hysnRwU1FtAKfZjd3Hz1P2pkjmXb6bPa"
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
