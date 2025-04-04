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
    "5Cf6RGcwmjwyLjDLHdrXd7BWtgnYL3t5fV4A9koVtxV27hZHam9kaT7mfqJJwB6PPFCPTEqFkhTvza9hPaC1GsNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmMevUzauQed9HsnTrnCKfhHEWHHH1GbQcHBs7RFEncYUijGRUjRCTe7vjAwvB5uZCCx5TXhUuGBx2E9terTEaf",
  "key1": "QLcoYKedwfoHxvfmgySRc2v1jEom6uw9LmYrTpSub1yPECABPc1cvCRR1mLhfHyjpGrHKX92qispqVZFjwpwBay",
  "key2": "4FvP6E3rph16a9hCHmH2wPTpS7b3HBC9utr2EFjGgd7fXjPvdyHBgrhWKS6b5EwAGLWpdrRbN7tWEhXSseVKL4fB",
  "key3": "64qP8VM566fzMqjE6c1g9MbEhQfdsvPZKputU3rp9Nb3pdA9ctTvBkDcxC7Ryh5skjacKunxvYARroRXdEiXU6Pf",
  "key4": "2Ed6LafSxaF9gBxtHAm4SSt3h1Q7fmaU79HNUfqezLXNZQTsioEe7Bcv2CEBbTpWqhutgi7VzarwzFmvL2TyPQx8",
  "key5": "jG5JMAYcttmUe447EFN3MLkvaNbbQKwXunBvu9prDwbH9D2yVrQdAqRHysWbvZpujVoFGGPXxqAYdEmttGEJ8jP",
  "key6": "2cPjcmHoi86Z3qh8B7uU76J5kD5gWQXZCk9vXdPMHnR95GXzd5wZ63DkX442sarYqhkcRyvqUF9iXooaLWgbv4BJ",
  "key7": "Xp2UH964gDZUcaZV7qHCu3KgRY7cs4W68GYqc1exvRAuKNhEJo2Wa4tQVqhaggn8nv6iNikSXpMqswWwA5BoA4R",
  "key8": "9sACK2NiE557ggtTh7kjWjmhpCQ2pcVf4U1L2iM1BV62yTDZHzoJSaZtEiaHGUpYrAT4T6wyq5wUPtF39oh2QyY",
  "key9": "3Mn2f33NEji9CvHTU82nUF9egKJTbfAUcCpqw86z83sveDRLZKd9AWqt7kkjtbGYTgg3of4T2UnjEBDAiTevnna",
  "key10": "4q9w8Cc1h8nh12m2MbedJcKUvMsjHQWKmFArfH9rzRK8TbxQP7fJ9cJdNaXNyxs6LXVAHnyR6NhndZjJrmrSaXsE",
  "key11": "2jFR2XTv8bVCKNXo8b7jDS1Qewom7fHi1tWFjAkNXHzAskX68pBJ7o5uwQj1pCqE6cxtyfBSpVob3Dz7d8jtjjnW",
  "key12": "5dPiy619v3JPgYDxoDGziwZvVRoeNcnrvJaqVWHu19hcHcLYzLLHMofvWSrya7RCx86GpM4YoPLCcqxskDbSvTna",
  "key13": "Sch4HzF8HGjvGWgsw1tYAa996z5fgSUyFHgp4WBEY8r9njbDW1BvcJakDhZa6L2hjf6CErJMDWxnGX9snW1scKJ",
  "key14": "26r4m38jMFreAWLFEeT7vnBv7vF1gxoKM5uvCxaG8tdN3uxS6pB8vAtYvJwGTvFgMCRAT9vrsz3wNuhpE7SrpJ5h",
  "key15": "2szEabBwj4VY6Wjk4qDNTZ8HVxcXCU4TA6RGJHPobyCrG4tAKCUH5bopasYd3K1JLVp1PijLsg6MoBpq37utFYgx",
  "key16": "2oUq4G6Qq4FWchRVDB6r5tw2GKjUdJe7NSZAGucj77NqBgLcTLon5Q5v8Uu8Wq91vt25NxvtHrKEYRdg2GBsAqKK",
  "key17": "3jvpRJVWusz8iTfRmE5nUtrTdQfFZbb3wimg8Cqo2drYuGRgKdGcbTFVXBSFZAaYJNGjzUHpZvbBHP49J7YsbB4A",
  "key18": "3TdJNqEy3jjy8e2ayujcfH5WhwjrgtgQLXsnwtuvcHdkysCc5Whea6PUcZ89p2uW8c1LcugHjNFbnVwKURnStyys",
  "key19": "2EXyiPm6bxmTgZEWmrFkGbNGGiUZ2tC25VYWJxtHk9AHiqrc1bXvGUGPDDKW9e5AUWA8SpQSDAAsGZccyenerQBN",
  "key20": "4L1TXX2UnReiWVoW3ZrNjEyCVdJG3RhYw15CXyG6Dx9kYQWQ3im3bgiv6jgj9D3LuuLXizYTp9V9rvQSUXjhXyT3",
  "key21": "4cYDuCL6GuVxBwAf999LQW7rtcjjo4z8Li1SZoi4qwY3dEaHExULH7JFA328BhpmeAww3CQErpWKqeQcgJCTsWdg",
  "key22": "4PYrqsDV4Ha7jiCRsxHbZj4fhy6E4815remhDPXpDanWkrPeGQ1P6UcFBQPcpS3CRiWY9WDdZCaK6mxjcDAPo7D",
  "key23": "2wyjwpiNe2Hv3cizRQmx51yR2FArJ4ZeXmHAAaM1YqDQg9RwxaUmTjpksUJYze2ubeGrxPW8ntoRKboYg4ySt65q",
  "key24": "3NTcsdFJsWrkyK3ePnR3zF6CEyw3fKNxZ7xd9HdGVwBpwNRAh9sGHNF3ZzQbCkFdixo7HYfCJi67yxqrhZgnsbq",
  "key25": "xL2dFbv2MzfKPE3WJh1tCdkMBbbj5end4wtfXKj3ka7f46ZoPBoGPM2goVFqErWgPAg3SZADzyAvQFNibfnzqe8",
  "key26": "4kbsY3RgroCDkQAaXFM9dDvnZiMbiReCscrKzXVNGdntRXMPh94Y22FhVRQSzTiZRPAD2Q4osAB3TZ3W7HdSUCDS",
  "key27": "3XcCLsNDPvc6yJ7WifpF4Hcismmeh6PU4hkRuqPQdet8epyewKsoQRm23ePVeKSXD1hfie89PmHtR21nMTcKyTAi",
  "key28": "2qzHHfyJEqiW8Bc2bgA6ni9DcD6Y9a84hPn4LEYjpsBJ88nsvRD888KdZRvzfdX4jCDh5japy78fwX3dTkyn49aw",
  "key29": "2T8j174mw1euvQGtzB5HFh3J2VqTHkwBjQUoDjEfMMKMY4D6VycSXhkHMbEgJk2W36beZnfetUs2f7F7dAYufjHq",
  "key30": "4BspRx2oB1ZEz7MF938MFSdYXjUcfTVtnHpAi1hHJoxnPaPwasRST5wVXf1B8Qxq1kN13upxJRk6o7mrHqRYbVbY",
  "key31": "5MpVfiRrda33uhX7H3PnTxLTxeDupjKczqeAWxBe4KV5ZoJNYNGJ3kGjqeAijJnytb9a32exjmZoGZJ9k6CRd3yH",
  "key32": "4y1HH5o2tbzes5SvN5BBWVq6kk3vu3imoeCDDomBqtaqLGjoXTD9VHtAJyENvyNKY7MJcBPeQVZrJ6T1ZoCjrX5M",
  "key33": "4Xw7PoxryKFEezebkPeDCTddqGZfSp975swVeAEFCpXqM1aoh93kPWbNFH5j2vgvsS7XJRWRsix1LhzenqaStUY7",
  "key34": "5q4tbjh78nV2MvQsbmqWKJuXTvAasNLquVbSKQf3N7LtsbpqmGpp11agmVX2YhhULeBD3Cvtc1UbydecDhyqc1hu",
  "key35": "27T8PJK9TdTvSSVPrf9LYLt5pHmdGP8C7sRKPbxYqeafXoSaM2DnBjanbFHynx6dKg4fTwHEpAFjLtPV8uti5RNN",
  "key36": "4mdoUqLt8SHAqDcvpn3uJbLcmwb2qFWAhhR7wAqshTTT8kjoCNGDF9aN8Q5E3i59TKkU84RwTTZKdEfBGkKWWpy3",
  "key37": "2u8hNvReAuRWMULDMHkXWMtLNrKjBngSpU6SdFA7ZmAPT3g4RxucQxZ9iVcNu8xidxspNzK5tMqcMPzkh4j4J7ko",
  "key38": "4G8umAxKDgPwefsWaNW24pd2buBottTU7qQXk1g8LrsErBvDYgd9FwfnCCNuUBkoR47ZCouNgFieEX5bxRqt3fek",
  "key39": "2HrU3EpCxYCXQFdQbx3DYfpQms95AmQm1k5JFkwHgiA6KkhSp4VFU6j77oZXseYBqkxdf5s3AQYs2q9ZYTK8DwZi"
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
