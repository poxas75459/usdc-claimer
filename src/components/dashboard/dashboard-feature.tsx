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
    "3DRg2TitTfzMaLrMuwJRPSYWcvmt4kzPeSfxvJ7iGs7nWaA1KJ2yq7gHDfLoJCNqMY3HXjuKVtLXJR25YUiL5p9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j78yTZZSxnbbvRV394mTgRL8my3LdcBLKWdyUBGSKszQPY92tA6ydFDX6TzUBCDq5RGJ3fQSxZQLBXSwNKt54sa",
  "key1": "55TfBkpvTX7bJXi3vtBPdf23sfj9qyu7zgxUHRSatYuNvVEvaxrGdWQbkHLSb8Rxy9a3ci1qX38E81tJeVsagwuE",
  "key2": "5prejH68F5cQbaniqAXnkVJdTaJE84X3YLApsGwQBgaQEdWs1KpboJUhk6PNuHjhxMGSTX84NnEy8snviQGdFoDC",
  "key3": "YLiHrJfmDyaWEjY4mJgBijwGK9LVDpAUWexJCKByNJpHteY3rLgtgnScNiMMKY1iHk9YJrYATCczsWVidgMwvbo",
  "key4": "3V4Ek3g2qYq4D1w6E2UeJhwx5rL3sqzzgCkETpxeUCGLpd7iUADKuFZ19nj41qeT6M4zxTE3r9ASyoi8DCo7crfz",
  "key5": "mStgqoL6qQdFZDTW2RHh62q7SfJatcvb8UQT4KBTZi43eg1hCNNS5utMjX9efUg74vD1M7FZsLipFu1YYEhdnTu",
  "key6": "fWQVFeqjghN46onP6KMK4K7NdNZdkC27mSUtSQNtzVzFvtgdyBAPfpKc7Tsv44JFiJ5VvW6QZENcgrfi65iALkt",
  "key7": "2MRL3Z8afwbnMHgfnqJAjRddQbSgczY6CZdM4a7fC4SBrKwz1Hqnh7nduHCGQNhKsDrMF3gKyyk4aEVBQNmMAoGQ",
  "key8": "4sNx4yhYCJVo1bBYCM4GA1kBstg689TgURjHc1Bo4xo7F6avLn878zDHxggAQwb5oAa3BiQnqDHxRYrtcMjfrD3L",
  "key9": "ktY8NLsFuJDWxqtPvZhy998Rvcu5Z3NaHGLSYuj7X2zKCjVXwQtsEnw9eecJzTXZCmqs2bpvUWLybumCuSb9t8L",
  "key10": "5eF6ZLoaFuC17zTEYVitqFNBaV229S2CT4vgKQ5bi2BtJAsbiSq1RiCuyEMSwgTH9wwhfsB7G9AGkd45TwcfzCyy",
  "key11": "sLvYpiAhySmSubGBg8brzH7iX25GTVNjfVvLXtvn79h9wLmrGVVkvJKAX2gSZZ32fKX19PFn2bydsxCJmdFzM6b",
  "key12": "8ePJLdA5ePgxBA6v5BbpcfPL8QnxKQLQwPgTVWT37jh4d2skH5Y8yAmYDiQPcux8xWdXmcRkPQfMtJ8qnSsvB5i",
  "key13": "2V9GBAcEcXP5MPMfTsfwCA4Uh4fxxg9sozyeQKFNC2vV9Lyk9Ys8qRunsEMqS5Hs2niMth87X9qzMEVEFRvAasGX",
  "key14": "5ouZH1JkwaapLtXNEa1QfC6e7bEpY2oTK4gZbYmNk9rYXeEEfMZEeqxY4c1eZeKj2nfcu7trrkWzzm1TftwxMYqM",
  "key15": "56fdtvoe94uBtmjU8xYzNTPGnYpfx4srqu5UZKEDsVpoKWFUkYk73Zi57GuXbRLNJWqmdmjLSh4GS8qKoxfXaNxn",
  "key16": "49pZipGc54XNR3kkCeMZe8VzdCNmRR7GBL9BB6TYx11G2schMza499VsqjHZ5y5Wok8vCPz5PZzHaLnpQPnYsK8K",
  "key17": "5r79ix1bcJDvohkgCCxvYTcB9iHmFGvDgfd4m9vvdr6c5FeQqusNkqfBLEwzUvHrLDtCdTU8zDpdrwcfTNWrCJri",
  "key18": "dQsKPsQP6NBDc6nhe7yhXLa5torx2wrGYd1mb2xVGNGCE9W1LDjgEYpSVzbSGT3nQ2YVpEa3pQxG4FR4tsYuG4o",
  "key19": "4bAo2VsNoHj46Cmag3DV6EgRVwHCKjYMJgCcisyxLYvX9UAQLvQJB4H434YsTEFYJv7R6A4WkzuqtRaofsWpN2mM",
  "key20": "22dgi33HNSuL1dbeGs1Yae3LRLzJ8CkYRXthENwd2kkcj1K8z2sQ4Xy3QpA4sQXNbA5VZVqNosXjpMJ91XjXqAHP",
  "key21": "4SaH8Z9bo2NnJLhumFb5uG6aFEWfmQfuhPayJymYmJA4hK6HjTbancaavEaR1mGtupWJn6nE1tcG35NtPkWZeZDi",
  "key22": "4naVRVUVjFXNSvTLQFZzzvSriZjDQXGKvpLSXywPY5dLu1CR6JpHJyBepiSu9FMof4VHTCW1Wu6nHQwCiwXo62QV",
  "key23": "4v5vrT7BU1LnYSRPTckAtqTWZE7AQqrtActxSye6BNq8H5f3F2xKmW5aaph3V8qhmw6TAopxzvi4QQeWFvZDbwzM",
  "key24": "2ZAAKedcyRHzGHeJqDwfzHbDvuVJt1M87pPmbPNqMa7zBZ2XwCxxtEeAJ7vAfET9ntGaDqZSrMwZvNTuiddY55jL",
  "key25": "4MEUGN6ooNvc9fj6Wk19Wzr8cTDb8WpNuayPDzdv1HZBGmAJ6YLXVHJGoxJgu3ZaVghruE4p5S3pWGFDnuP1MnTB",
  "key26": "5hCKkNW2YDQR3ePbj6mLwC6VXHh3AfuxRwRqeETUCB7AdETuhSywtC94ZG7AFyP5sicnjeyiW8W34STCyFEeu9Qx"
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
