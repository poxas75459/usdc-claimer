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
    "5ucKPb4QX8v4KpgSbKXERZTEqG8XyByGMRWzR4n2yyXZQ9XR7cUEmE8z4FK7r5qjGzHynHKrHizPpGDyLPiRi5yb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqt5wc4Jm9hFgmJj1YBU6SGud82txoM2J68YfuYXYX9vtSuhfncMYi92bXQqXgbXFM1fkNqgfr4KQhgYiXRYS7F",
  "key1": "2S2Wxsk2MZ9BuoaHmaPBEJnrerwaP4YzhLw4ycBymcUfBQu3U2qdzCgbxdH7xb9JbixyuP1nrQtnEjwffKGyzsgR",
  "key2": "44dG4vYZ4oBQXEEZz37Taut3U27m5CqMroJr9xpPstzcja1ANbCpxrEaXoYaBri8ztPti3WTTgQZdCwJCbNjzBUN",
  "key3": "iASk1yW4ay4tbsSH85h65mR1QB3LkVPwUwK37g99pwoLAmQ8PvpsZqym8fnuS6mr4XDcksthiB3ygS6ccugChVs",
  "key4": "5HFRszqH2CJSEDrqX3TXejbqUGzA5DAGj6StbryJXKdBwmJCM9GqovvFh4vZsD9NQM32UpyJtXavsAGHXM54TQm9",
  "key5": "57EpMQZbrHMUqJbHBcLt6cN2mo64dcFUYCjHyRyLFPmEw6znGrnhLtYdKj1Jc1rYaVWwiK9tdPkoBYLcnj6hWwdm",
  "key6": "5fgvwNEM5oEGeojYRr9AXMiNWzgbdT9L98ggAi3kTasEPDPqfGLcpFxnzFpx2AYt2xJ5g5VhYSuHeVE6Yg7V7pBg",
  "key7": "4W6vuV2zDsfeqf9FJiufFgZg3FYTSTbsoNVGeD4EhrKdYxTPbLhiodsL6Up1qVAKYDA1eah6hy44TMSCfcdxKbL7",
  "key8": "cA3CKrRVSpkfXiN2T6bnqMumz9xsMgje5TjbVBY8GLmkD129Ha2nBPSHgLF9aW43x6WSaftHVYgxVV4cfzD4Wpk",
  "key9": "44JQCSUwaPUSi5owxJtocT2S8LMptkugBcwHz84h1mupfPXUa3wV7CMcxCbxUUiCWaEnYupVpx5YUh5fWv8fLQi8",
  "key10": "3MAfzbJ4Bmr4CFH7K48pD4jL8mLVPySxyvtX67xPFmDiXgb2RQEmNG98vaTpZqLbHYWQy63chkUcA98uRnzM8hRG",
  "key11": "X4Jui6t4siAVmBNdBvPhJt18CZevtEUmS7aawdRrB3k2TU6oYgVvarYm7wGvaRVKv7TkBtwXJirPWfsRJeLE1UY",
  "key12": "2ixjXpE8fFqy7Jh9s3TcdjLDqZ3LrBb1JwDtp2Vt2EpsjkFtKLJ2hQ313rK6g5LReo9c1feb86FYsGnzicEQSniw",
  "key13": "KdkMdSY8Nv1ZpoGkUUcgdxD3CfxboMsDkrQxCJtg2d1NyLLzxMs5BX785owkREvox7rYXAfXACLmFsCNBFDsPxW",
  "key14": "3QhX6mATeG61j3fWTzC7eWxo3uw87uGaSPNx9bUrtBgR6mc6yT3CMUUMcwdxwT8QWEv5gMfgNEMPuwSZXZ8NqYjx",
  "key15": "ardGLGRKz84sgdZttmpWFDYwcgYDZe3yeivYSqcZeyfkeCBWxTZu9G5iUh1WPKouk7MX33o6j21neMoFLFKyGoF",
  "key16": "2Rp3hTz2FYtQWYS6P4czEWTfmEjNjNRmABbyQTR1wxDNbUcfAA1kUsnz7J7DRSU7XMFRjy1T4C7JKkfZuXfFGsAR",
  "key17": "5Qdk8g9gnPkfkRceBdageRM8zVD7x116hwFTjGvwk7LjaifC5B6c4pyeYLcyykVVoG89uu2YfR4Y7MgDdfpCu616",
  "key18": "54ovGpERjZ2DMsbJwfcbSBk8M96HcX5RNCKHVrfRirYtEMsv7jiypGdzrtAATL1rPb59Xvib1T9XJhv5DbYiHEeN",
  "key19": "49CGYFuo39ayCRmXr1uhPWPZqkXVTiwnZSaWjMq96WDiQ5tMJ55MGExckH5FufGjXANY22WKdWHt9xye1BbKX6cY",
  "key20": "57zNveKKt8rXy5T3eZkNyTfo7qcXNfu87Kr2uChaCC4CvCuou6amxeV556VR3avGXzShvfpp7XedbFy8YHwB83Re",
  "key21": "Md6Wh2oL9by458TDcfTRT4sipBtgPom1pySQXCwxKnudfxnQL38BtLptFW3AxfauPeg3HcfahKFBnoQqMjiBRvS",
  "key22": "24bUC5gxzZMqTMZ2EdKogqqNTBcmmsfTaBLiXGtukj67xpwZ7EU2CGMZzhjL7Rc7aSJf1VJnqTLYPB83PMkx3LjQ",
  "key23": "3tj3ErQVwDkdAasK4qWfz1woxCdY2tRZ23P1TYN3XSZkDnC2Jw9vixhZ1Xs4Kv32uN8q7FjmXcNwrtAPaFAxAu8B",
  "key24": "2f8Jm7djp1Ga6cYR6TJYve1LFVa7cudJ4dHPJ5qD3bswtg872jVjSWrm2KQV8y1fRNw8F7Robmiddyayje1P1uUv",
  "key25": "2BR97Jp9HpXrozs5F6iDSNUixZBVPytoVufhDE25AWaw6DuJ37GwwrYG9gEXKEMZEoYUmod5C3DCH1Ph6GN5Kvho",
  "key26": "5bsMHawiiN8iCAXEHzmVg3nkrk5aPakYgGp8A9GDRX2bETfuW5tFW7RdsUKnhZRmTa2RevKWmt6CjynbatBBP5vH",
  "key27": "ZRibiCN17hmvVXYpAdbXUVuNp1yXe4ZRYQ45PUfZbpPPUQJvLX2JULfM2AVZKihfem8enfzCwEeaouqLqb23H98",
  "key28": "oDHuwexihfjzf2zA8SDnyJrDVnZPqVmBPGEHc5twf88EPFs5Dd5HB1iYeVkWXDTPkQAYKH8seiLqLyKup57imbc",
  "key29": "3wEymRJCV7Li2ar4VDRpVqL2aSBM6ECkxsntcb6J2ThEkhLUnDDbzZUvRtZ7ti2qxVLdZrm2t6vbptRzWDtTG3bo",
  "key30": "65DnwcnY4bJQRvSd4sNtMBqvfVVcGSHa6XtGPtD5AjKTidWpbi7uXywmVh1nty7LXboeAr8SycerHKx8GzGy4oRz",
  "key31": "u49k78FZEQR1fH32tYSAF6wyXWZwbgJyJjaVxsrUFqbtjPo6mGkSVT1atUFQxkKY5DdiprTNPPxmnea9sVyEUHT",
  "key32": "4CPLbQTcmFLSEUPaNpTWeqhnSHr7jUTYV39wrhfoWBvNmY6gn4tv23o9xnR6xFRcNsbM8pDMRcA2p9gvEUjzBLan",
  "key33": "6BT6mJqydEnAEeF28yswMLqXMXiSv2Tp1Q7qmpRgeytUE7TkTe9ce3fp2J1g4gw9NJnHcwVseABRXKmZubHJafz",
  "key34": "52AmJ4FssdqW61xiUwuovPpYpzJQjHx9fxt65JtAwBFq7o91aBHXWewa6kUpYQbb7JV9wF9mvb2Skddvj4f9ZKAw",
  "key35": "2E4S1Zj3nYwrXXeupjujdxBRd4h35zBDAnZKsbZuPZciGX32nwsN77fKN1ZpyXQjFY5vJZMuhDewuxmxayGXJu8S",
  "key36": "2gtYPQpTZDvtuBPge8knTwDft5gMgwLHuktqmyKS256biFe99MW1Ad4f5jVEb2H6gYgCbcLX4UVmPevYEjcCtc8",
  "key37": "4Pz9BCZB7o9vvhUe3HCZcanSGtpV5L5KdQyjgPMhK51R9rrxvsrsU5bwfB9NjhBW2AVRSLRm7oqLcqEFqM77doUx",
  "key38": "5N7wK4gHdJe5jiHgHieUcHBtF6m2K3qEoG7NP5c1WTAMDKAJXRw1EWWXGgkTZMntkPwRoPNrU2tj3F5yBi5Pgyqg"
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
