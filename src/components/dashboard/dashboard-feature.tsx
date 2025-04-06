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
    "477fKW4WQuSbPLCVPENf7adfVHTLfRTCvis7G5JTNPtaSQRDKsP6hQkLoV3R9USGrvvApjJHdJtT4jQe7GHFdM9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4351RaFXBgPKeuLXAi2VJ9LfMAy1N4LWPKiHk2qSH2wt82Q4Hmjfq6toBdqrS6yxnHx4FNRLYqjxnmL2g7TULi",
  "key1": "3xCXZmqjGXw52iXLegUR3WH3bofVWXeQ8hecKATWecYz5hM6EopAV3JBL44opcnAUH5sjRZqr9NoAGfiSirxFDqv",
  "key2": "3qbEAB257s3ykWiCnGj9N6gzKCBpjBfbxHZFooMsKXt4cMBgafR2kvm8zK6YLuBwWWvui1u5H5GBjZETu9YcmFAE",
  "key3": "4SPg6WtSN3ziHF1VamcDyn89J7xddiHC4p5jj8QTLzRpoGwtUw8J3qTJkEe8xppB56MNPNNVpVNf3oug2ZDkzhLC",
  "key4": "2Cg4ZyKRiujwC9dE5xmCpQ3NrLirVNp4g2cyRL7ymeBUZPKTWB1KwDMNCAVKvuNSWCJs1XMsCQdpNwdgdgekvLAb",
  "key5": "21rS9zfBKFcqMPRatTFLUoqdFd3YjZpwu3atTh3TRDpxZFqZ9RTgorRs7hxME1WMDMgCTSQCUdxfd9hpaRjG1GpP",
  "key6": "3x3UjjcTLxWWvxoNmbScVzL2zmp7qTS1nPPiFiKKpGBct4xWRHCd9dNgHn2TYBEhdjQaBJPetFyhFWzDukRDyce8",
  "key7": "3v3rermYA2GyWzfwPS1ktierAB9rbeqpgpdX9erRN76FR9rrMQ1EupuRvkXnynBGPxPTr5CVmydU3whq6LRMvrzh",
  "key8": "4WYgbCMGN5C2QdMFUbaLuDYJ7thGonirj3LCVpyKEZkAzUE8vR2ofCZw7ViuWQiDUPCJBc1yaCRpFSRh3W7u8brZ",
  "key9": "5GR3KZDDHHJSrd11oXQpstqWcwoiL9xbFPxzwgeEPBLjuRMTXtk1DbxweVNoKZPX1HxiR1tK7GxXTTzNxKKhKsBg",
  "key10": "2zJUfRoFHZoKJvRGWsHKVqHiU2ceTfFLVJkfezFfhYmjoxnA7GrmfTgjtBf5Hgud3Nu21CxKVe9SyAs99r3UMyQt",
  "key11": "62fJM8XNRPLjoGHbJg5opvgS9zoPxd4aBWodp1Szcqn8nYRfoMTnQp8SHER3JixbeF4mNkC52ACusJm3A7hJvv8f",
  "key12": "5QkjxRazYUZMxcaREs5U3Lx2XsuKMbSSzCn5C2hERM8nDZviyx29jemWvRrz64pHKz7VMx2G1imUVyDpKNHhQo55",
  "key13": "2BksLPM1yXm8BCgGS3yFs6wbDcxNCYKWr5mVPsceUg3Fz9Q1od5ZnHEhx7vWYrYGTJbAohbezDUDwvcuxN837cMP",
  "key14": "4fXg2XB5oxMgKuuHH81aNpGay27MYDvS1o4RDykg7vxnnwjRSVLzqNhZ4fcyDGamN8caLVxptRh1cJGXSkSPAK6k",
  "key15": "QBhQuu3eEdc1Dnhz5D5nheNVYzwatRaGqjGW82PdE5yCRRm62LJ7f2jfzFScp16b6o6m9FNQPh5Jgja4AA621fB",
  "key16": "33SHJHu6fnFxxqFBe2HENLQYGCVD7RB1jwgz1e9ehztwM13AQNtRvpGH9LSkbsZ697uH4aphZC2iNrqdE7d3sWpz",
  "key17": "2xtAJL5D3GS97uMhoF224mpZKCsw2ih4eKDfqu2tmUrMpxGjAB2Nyr4V9SPPb84gewdRt63uFVARFQgiYqwQiSwa",
  "key18": "3W5q9ZAPnAa1ySCVEChgix2zCgh1LnigjWB2rGJh1hmKtB1t3NbgcZ31fqE2nw6GRuKc8JxsfpGhAsDvbibZz4EB",
  "key19": "3mV6wpDPwXxpn8gELfSQBTyu7F5uQbGkV1wdpEDVkwSha6pFv9jCmZUQuqhbheyBc2aCHfmsrGcFLNi99n1bfcit",
  "key20": "48vHsqpDyVKkFfEems2gWUp8WGVUvNCWqxJNi5KXr3hbEomAoNKEfbc84zK9Z6zbbeziPTCeL93yJrs7WFdAxRTS",
  "key21": "3z29vbRBaCtBP5aCSYw9RrChT28hA17GTX5zpAz2WVVdVWGZyzfh3zvdmkBCeg95sW3N7VtVWqBZoQi9ihUofLNm",
  "key22": "2n46Hh6TrUTBszH8kLgrztywpTXfdyS8ii6PrA4NP1AhXfeXrGP3Qz8TxH1irtXex9TwqghH9mhjW5dHkCFQfmNK",
  "key23": "5eT2uZbEXDqFB28TMwQ8WVWzrF2YH5uQB8Qufq6UHndYqUtzfLPV6YRejY5FDtWSZcUxPBZP8Q3U1rnSXRN7Qgmp",
  "key24": "RXATnZHvoXzDhr9RnvnBf2unqViSnrH1vLRnfs7hm4CLL44kwsbWdm1CcRmphJwqgrJVPwgZfZWm3NCLvv96Wfn",
  "key25": "4TYHNt78RSVTYAWxfCEHSD8wywvJNFiiqvUdXFRPGvKGXymuWXqdKmMNvEgLGLBiRsrqMjLnU1KSHRAdNbq79mVs",
  "key26": "5hGMPkXtTNLHRVoksdWu6RCjYExnLqUWTEqfBFoAdj34cy5DBg4wqDVuRAfnShEaGeAG8KZh67wg2c6u8k5Bs636",
  "key27": "XDDpTuHkh6W77bkTtuYyWQ6BEWRHYjgmZgMYYjaPZuZAgR8xEpycwtRxBENXYnWUyTdUVAQuRXXmYs3BtvtJE9Y",
  "key28": "5vBu6aripXnPZ5BH8cnjTJzURm97DdXaGCr1bcZWHqXRv6eynom99UnVAnfVVnUVhe8xmjbJzuRy4g1RcmJdiJXg",
  "key29": "61iaCmCeeCBLwg6iHXuphmjnGLCttTNnzXfcW3wFDjAyzCwdFXB21RMgCozRdXYjeMitfGSPnNv7TFqqXwVqnt9r",
  "key30": "waDxK1bCnxw6XVuGJgrYHCraxdCcnb9Gj9hu5oE1oCsxPybEVmEuMdQoma3KhG32eRPT5Qt4XC9jUugA2qWaTvF",
  "key31": "3xSk72iuUznp9hdP55f5AXNjNPfFFYzv6T4BMzVdRGKzKW6MCuWNb81ZF3UjYuaXsAhMXVWKjQbRFnSjtNsr9suz",
  "key32": "5W7BduFUBdj3kPsG85e4Wwkh9UW3THqP8WY1nnYkLUGoSog57gVM4PJwMDf8RUXgHACcCx7kXE1ETFfGXzn5TBwx",
  "key33": "CW35shB9JNByb4osbZD5935N9wQdbTxyvDMyu9JSFkdyi2eCmHsrWwDW7Yqcc5y6afibcuQkvHLfvX8eHmCnEN7",
  "key34": "597qcUMsycxFkg1RxBCKNB37UpRKi3RuAzKKycnN2igcXxVMGuqByPVofYwcXZbHEZQZQgi3VnvVkUGsUfrTYD9r",
  "key35": "29cSDZrAWaTA86KD94bN1qX9x4pmmA39WNj8bwdguL33VJLgnLyamhaxTXhpputhLJnqSLJRDZRqSJW2n1LMPfM3",
  "key36": "5Wco1zXwcP2h8URvSB1DY4cbejtSDZy4GBGqbyVf7HTLREmrtgvFAwgu2haLQwNpZ9Yt5m2UzHRT7WQjUtrQsbRg",
  "key37": "3524ME8qMfTqEJiUdx2askUwHiZpu96uY4qAwzvLMbBQrfJPm3NrzNW5wtn6FfgaKyAYjdFkq8TQNz1KWNJQu1U2",
  "key38": "3Gh3WoqpyM9VGi8NahPBFYFymyL8z4L3g3UZUS2GAz6GgJTSkXFPM7nMK1SK2aasDUAmGGAcFn1n7XBnoGUNDP1K",
  "key39": "35QnbcRNxUyhEEC524ajqB9hGrtJw8cyBwf6cW6cCX7qbLRoWfHWCyD5RUTSeAiZfNMMXxqEGofzwceiWeuVSx2m",
  "key40": "5y7MTdycEePjR9WgGoZXpnM7bvfL6FAzpHuwe9qG2pxVLA7ho7LdrdkqwtwWbD5uv8ku7CDQCNncEuGn26G2QLcM",
  "key41": "51dV2RFxeMjF1VqgRb7wRvBGTk1UHy8g5ViBSjuZAb82HjCQvCKZp6UijhCNhtkK3ZMbTMe9LmqQ4uBAwqmqKLBD",
  "key42": "vhxuYCKT4diUbgyxzkaLpxXExbQjJraBCHqgCD9wsmtFetLzEqaf49rXrQVQR4ztAUGG3PuEKHpPnJjQJnVbe9G",
  "key43": "48CR9p4DLRg3UgdcLDuEcjmhKCxjGqZdy9GJowvnjtggMxWab94CxJi5st5oBjD1SrxoV578KNTNhyrfuEdS7k1c",
  "key44": "2X38mnVzZpXMEdQYepL4TezmWiSwC93xL5tVhs3V8JjVWytJHsdz5eBLZWPg3pDiSe1sHdijHAT5UpwM3dVC1eE7",
  "key45": "5PX5vX2wn2cYQSnRyoKTT9hWFRBjB1nmDhM8KtsN4Qv3SQG8SWPwV46naDGM86Ryrt7K4zMbNaod3nZyJLeU9CUS",
  "key46": "HXjDNg2ScB6vyzKfn848b9Pz5Sv147JhGsnzvhpq65xfEJwVdP2ojgc2jJzTHTbwTVxKPSfjE5T5nVZ1GTTdtGr"
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
