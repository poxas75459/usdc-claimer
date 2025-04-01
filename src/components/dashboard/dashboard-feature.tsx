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
    "HZKxANYx6hmQgCaN8gYK2jgmVFKJZPTMrcfpDJ7czD1RyrmX2KhuWYekpb96zkpFWV9pzTQMDNYt47BnuJAW2GW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qozq6da6vqvxnvGCBSXSwXDAWZYLCmS4ZhqX4rj78P8LMTEachWtMvjD8TjWN4ZXAFtLZdjMvG6jQTqPGiLU8Sk",
  "key1": "44FfkF2fhFKmCuLwjd8SGEHuZVNNbpNhvWvXHq2cTmNE4jQkjfWta6aRB1qjSWRidqD3MiZfxTijMHsjiqfxnB8G",
  "key2": "3bH2J5WddWYzgiiZ4oxXWUv4os7w9QUwkN1ctkyyb6axHDgZNcUUwL5fuMWC1Yf81KZuLif3KTwvZFa7MvgqrNFF",
  "key3": "2jmQ6w62gmhMrFWhs958QdocYRaFGx9UvXgZrFr8ZPdo8eKEh3RQmA1gkix471PfBi6KghWdNmcrtfK9dAPkwxqw",
  "key4": "NCwhtfzcqWQZo2QSWdkASQtSRt76byFnTBnkFKjPF1zR6ck1rAsgHY9Xcf87P4hyjhKzRZan5FkFdM2mW56BkLL",
  "key5": "3DJJroEK3SHD5fSnt4d25itJi32ybc4o2udAXyeEvWjqLnmVe6DRS4irmspox9ty5knNbNh9XqFNt1HEDR8FnGyS",
  "key6": "3r9XPDJrVeW7yYXtm9su42Lp3TNGNZzFfKPtDK8mdzSm7wXPTgvsdDGja78Rq6jqBbcM9NfCkPpNvTFauxHcsfRC",
  "key7": "4WYdp4PnMWQobyiuBDT3eKFWifxgVCQ3uCkuc9jY3T8NjG7VPAqU2y1ShGMjjohDio3k9d573e9XYQbnX9Y13Byf",
  "key8": "63VfonK5WTa5CsGxcKrskjhPy2G7okqb2TPJnb1p7M9dDNVf2RSULDxByaCp5uCXZHgV1WAJQyam4StGYGpFKU5X",
  "key9": "3XsNEAziEDF2HtvJMdgSACeoUJZouWmhrt3qqgZbFJsHG6GUAj7xqRtk9o6U1uHZXJwG5oY6cZhtKH8NcZfiowEh",
  "key10": "5nDQM7tp87PNd22BNSi9yKEsaMTxaTGaBkiRNezQtMfv6t1vLfNB45BCUKswKJzR1yHyBwjPnd1ErW2z36j6ozXv",
  "key11": "bXdsKHdcVc9iFzRovF6P9VQFT23w4BNenAohYvkbetUxFF2E84QDwYMpDsSJtMfUS4Cxqq4rzNTTmzowSEpwnTT",
  "key12": "3HA9rMecW9KCxnB91uu8L9haeaJbRfDVcSTLVuBtQZkiaMY3nPwiy96zM2iXjKJRVodikbMcrwwHDKU98YuoYz65",
  "key13": "qkc3zu2DLwnXZK2e7Gov6Sm3GQoabXWm3AJwZMv3HFHDVnjhFv9sQNxEyN8tHQbzHeTrJqcq8B8MY1nMA82ra7V",
  "key14": "4MgrZZ523Di3sp9xZ72kEgA3i8b5pbtJZc1LtN563871tLYi21b5YTtc7UkiHhNhQFXrsmtELsiZayCkwDwbyYhN",
  "key15": "3BhLfRpcfWggF6iXp5kCzpXBFYDGC3nNsDPGgQgmzTuMGfEtPGcxe2ZfUGoMGD8qdLVcVRUPx3dZTcFk6KVYLfZf",
  "key16": "4n9TBXGFYj5fW5c3SfikLnxDDEyAi2njKjtwvGJbJV7ou3YDiy2JSR1EchGqgB3meMbeHk2GTyoUjGsoTBVmtPJP",
  "key17": "2MCFFqWaCAvbWJh3DDrXyAG3WM8LSEtmPPcCr2Y1SLdZtk6sW3BEiHfQSX2N9sw1PtCiwWdUH1ZvXMFzzVXEdj8r",
  "key18": "3VbuEpZ82EkykMDPGu3V5ti3soWEDSaAGYuQ6PiS9DqkMH7U3KYbDYJRfMmkepqhwmWvQUGKapmFKzmmWvxqzPJq",
  "key19": "RH5tvX1bsM5cq2XnoPNKrECpBMXweSj8HzK21wEtydR85XtkxPB8x6bf52w43uP279G9ZPBckh4M58fUmsnLH5A",
  "key20": "dzRM8SEUR8A7RS6De7U4emgKyaYNYQL4XmYnPNQ4HC5amubLxZmBrW5EX9gJiSxotj6pvdmjpbGYrYMZEj3Eihp",
  "key21": "5qfH46MqmqYSiNm3skgQooFi5ShQWrPLc7kNp2XQVUQKwFmxsYKx8WwUdXyXd7dJ8Pvnvqm2YCemTmDnAnaSrQAL",
  "key22": "3tjjJZvcCQYXVH2Ly1sAwJk7q9W6pi91AAtPLy69Mf61MEK8ZZ1Ydb3Dd2TLsBB93ufNTbph4PjUEsctZdb1LmKD",
  "key23": "XZdHeyqevhLovrwYrMkdrr4frjoR6eBpjMavV7QiNkxjPNbd6Bpm67nDdYWnPMKvS6aX6ZuqkW2vCpRvj76GJWZ",
  "key24": "4F85bw5WnR6ECjLiA9GzrZ8WPxu6nnWvHYnbM6F7YNF1KVgeWQtYB4mmogiimNGKv9AqCW4uxNuTHH817cotXyG8",
  "key25": "2s21pdwBLpn1MBNRrbDJ4D6UuAUUkLQri7UgmRpy7JACYHvwUKfbpHWYQ2HFkskaspHBxtsndN3wyaG7m2K9F8CD",
  "key26": "24PX7YELFmdgTSzfXL9kDX7PyETo7fLBhTUP1LmwZ9PrUafo9XYqcYmg57Gx5zamFmCujMd95HgK5B2DUum4PDQY",
  "key27": "5oQ3Z75HwCummM9vZPTup4Wgsz7mr3un8cEdmbHDHwRzJVfs77via8kxWMm8UgNcHz6ZBdUN6sf9aqGWHs12cVxH",
  "key28": "62zsCzwqcwpBQunTpH8XJ6Yu9bhrYwWoY4aRcdS3GtQsegoR417j8vv77bkaezQRfqscLjopM3xb9Uoy99Dg4rqx",
  "key29": "2fs2k4Up3WTM94zFjhVRhwRTyjA95i5wxDiSeo4HaSbV1ABWBp8Q3eLYERnDvK4Za9jx5ykekpyGhj1s4Tk3WBR4",
  "key30": "59Eu3kAADXcQrSETqUrLn2C6rmvn2AG3sPBLUJc3VcEdeQMZ3zqiMujdXCtGqCK9P54Mq5AeW15dTozWo9M41UFj",
  "key31": "4zAQFtAvE1X42igbuW5tSdC2Zn2hBWrnprMdmguKywySf6SY6Tp6iqevgtGfyqqubAtJ7xnbpqCav69fbD3qfxAN",
  "key32": "3gXBv2rbZi5Fzadb7k12m1jD7i5z8wb93nkZ3pcazeVvq2hqckGhnvBgu9h4zASDmbXbXtN8nBZBVKLwFHQWLUG6",
  "key33": "3EQhovE9MV2bw4dRKrQi14xt4auwPvrm3Cgjn3a3yQ4QA7MerhifjWD4ynpMjgvdHzw6e7ft13U2AGJ1XdoWoQ9b",
  "key34": "2FrhVzZAoCP8WexqgJY1xhx7oxuyQUVRakwtUUZvDm3LcF1w1R31Q23QiAdp88qFf8JDtKpbXNpBCpMSqspbcUij",
  "key35": "5aHxwwhF8yvFzXyVMqfh3PgjhkEPmxzESJ3Rc8aGdbeA1BmQpSLTQoAjQ5LsnQPFWhmEffj8rJcpyXeT9sqhZMA3",
  "key36": "HRJ3q68tCSyfNfe1yi42CuD8tdHFu4i3eBLTn9NbBf4aiPwXzE7J9VrGV1srS8g1vTVFpvjnnrokWaMjTQHJJrR",
  "key37": "5azh6Z2uTH8hZwHXWDkemVovKgD9kFW1YabXvoTEPFQ2HPfLGi5LHviq4YVjsTk9N5vRxzkWuY3k1VLDF9ZkAEaB",
  "key38": "fnNP7LcPV2EauinM3DCmo23erzQDp5B1g9vjwxtFxUwkRdCoRy29qx6F9aUAuaM3HbpsQq96cbVHA2fhssGw8Va",
  "key39": "8PJ8q74hq5k5JXsh8TFKvTo4XH8HESmmpPzpM9edMGu7wABbhRk8qkzsS1meM7A5jg5GwnWemJ8a3hrJYVLZ6Xy",
  "key40": "5Boijq8TDD44E2ruJpwaAAGLXdEq47TZ24Nmr8ARfub1YZrQ5TE42ndhPWt5U2y9vYaRenpapMJ38Yuvs2XUCzgQ",
  "key41": "39pYLyH2peFYis6HqKyKWTuSJAdUv1BXtpM1iN7uJGsqyaq3TpLW4ZvwP4Jpb9T3e89C9rmFvLpyyiY7TnPdCuYK",
  "key42": "53XaXoAU7RskEi2VhfPxiJ1KYSyP8Zhs4srUJqasaBbBV2QRrc5WX1zF9aPkaH4kBc1qKcsrJLKShpbT6Z8qxCY3",
  "key43": "jZefcDffUcobFSHhv5NddWRBAbCGiC5bwxMuZxjzFu2p3AvFxoCme2Fuat8vZF1DpfaKthGVdNRAPgjALvJg24y",
  "key44": "3PAvjTHFRtj84nfkt8eSvDwxrTuDv99EshdXQePS5o1TvcWQsB8SwTUpn3zJttc7MzSMNc2ogW2PDqU7SjroRk37",
  "key45": "48VEpDxJUtSTkKa9ANJRr8ZdR19Wm8qNfNpV1Pwhd44M3h4HwcyiJt78PnDuLVMzcWAC7sZovAbeCb2nb4ptxJwa",
  "key46": "2nyhzNNdHXhXyZhv7R8gn5BaVprXFXjedAqZKiAurfowEgDtpN7LUGSgyzEurhxfs5yN127JbG3g8weFdeZPS7Mq"
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
