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
    "3TvpfRNmp8phuoFEDtVHD9PzeVd1wujr5TDUnuUmZECVQ21xhkBuKyerHBeNfji4F8uG3MBjWnfcasHoqLQ3UFXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFD6uAtKscJPiAWzAFTe9S9AzdEKYLw7TCMQWYTwG3vbaQ5EVMdetU2L3XPVDpjLmgyRybyNPPYzUJizHDa2FjC",
  "key1": "2g6AQ6m2dwBNib5wkSMc1cTqtbMwa9QTRis1zdtsw88Tub3SoQFCjwmvm3gGB6QP251WQb3HbFTbUhzKFsXMksdX",
  "key2": "5urWjQaUYeLhRSkXDYcth96xm1mQq1JdENmTJ3eydSE7bpge39K6DaZA32Z9ryZ4UWJW1cqMDRuAgyrE8eFUBy5j",
  "key3": "4L2Un3EnqL68PvfsrnzdXENbiKN6oqGsekk93GFpavJ7ZuVLvb6eypx3wCxjLHuGfeHBzYR5NjuWdmppwGHZTHQU",
  "key4": "D5kajQWickPhLQ2caFw9BtPVcH7aRpVdPTp8Skgt3D3zDNQ7qSy71UeA8xE7V9u4x9rnS21c4jek8FoP2Zby1cw",
  "key5": "5N4HgowPGc1JAU5zn8Fq6jJMrW2RT8wXaHjBKhoNSwFjKxpkYTVF8z5sS4GpB8cjrzSyWtw8y3o9sihQN3pmFuTV",
  "key6": "ns8VtAky8G8AZWBSJHdm41W9XU1EZXb8SNP3QifioSBUq1fErKarpvQJAmKh2oCHw6NAapbutwMN5n9KAQTXYfp",
  "key7": "3ewqDm8DXjzbC5of1ZqsM54Fu92DdVAvUAPpGPqK4FcegCarcTdmn68egwiTD978We17sGzoCkziwk68Ga8D9jtV",
  "key8": "4L2YiwYQCRyc5eG1hjv5qMdeDdLKEFGpeF2gyMbJDfhY1eL3TrwkrHyqbfhSQNCCkUvwQPrGTHABhAehF2AKZZDU",
  "key9": "mZksViDoQrLc2JLxcjAA7fW8J4sL5ig6iCSsBxZfpWDzxiSwNGkiudUzmwn1P179YoT8AAdADhMa1isM1Qvx9CY",
  "key10": "2h6oBCae7AcsVhfuapnedLTrL4HqUny4yk7P54YU73BcDYKiZpdChEPaFnpqn5r6yA7jZenStpyzFWEqnCrf78xM",
  "key11": "57aMDZq4wJLGe2VtFQDFzVKfG5tY7L4Xsk6grBNcHyKSW7F4xQp63Rn5sSGffeF7ZiHkz9rMPppLGTZs7XfMAiyc",
  "key12": "2aEQVdQVVHLMuxmNDW1jPsbH9gNS3sK9QjsacacWtXfPWduWpgoZ6g73guYxYfDzyaxxzXB3yDSES5XHA6FKrVLK",
  "key13": "sbnLxAPcE4Nc6DzgapM24Wxnx5PEx9o2eZw9grrTFXcqWHwaNabDyMPbVwdb7G37kkb76J5RRf6KSmKWXSNAbjZ",
  "key14": "4GPfjx69UExEYmWRsvsiEH6S93zH5kqBHfg2dz5xVdJfWwGXrtMVvSdGtQwodY4LwBZRyVdYYhNpP1WWkJRzFqrQ",
  "key15": "4WDoKE3tWZjtHMCL7Mn4XvFW2rVu3WeGMbMQrbuFRSSxwWG8D7upfkgtHjUrBstx1pAzbNtc3BpebgaUsMpSQkuo",
  "key16": "3vf6KobissMVgHCxDuVHjR2j1DnwNiPv7hdyPFBXnaW9LF3rSAQcWjize76iLD3krUmpQis5GTuGTSDqL4ADYyeB",
  "key17": "2cVQux6CtGXX25Tz3CVdiiJCRmypeUbHCD2Cdx8bcUmzrGrBRiZHsndQwkAHpoVaAQrreSnYZRoVBgRm4NP5npKn",
  "key18": "2tce9wXMkgeLA9cKj2CCvKa3PUmwNQMFvZdSbeYn8PhCciJVWcX4qsTdEfDhbPN3n8ZkasSDsxg2SSS6yJVPZJXg",
  "key19": "4F9hQdvTabtBLkzaRB4T6eDzz5gPp1LjWEdkLbHS6LhnPiGaqdZdi2F4y8XL6kz9aXJgEntjSh4u1uNG9njwwkcw",
  "key20": "54uSeHEDiGDpvw3dMgqyUMwq26CfyKD2qdzTBCEQji7cc4Qh1BpCSarwfdKfoahJunUgdstrGRyzi7pMcTDejEgt",
  "key21": "3QzGX1X7HErC6dRHmwcw7DuYa18vqR9ShoXHqcT5FVjScCPuEM3VmNYsnTKutBBDtXz6RqeyWy6dNDUD4LK1DmK",
  "key22": "4N7wAbPKgdpNaTocaLvQPi76ocfK5hvwHKPGEKiJGVouCzSWtdw7JUZbQoUSEvFMeArogGxo1cw6Jb8XVdAYevKS",
  "key23": "2eV5RHPkuZPXyRUVL8BFMXp8m2UY7TDPqom8v6QcEbZeNiC4q92bBgazRzVcGBCZZHDCmKuZ24j4aXxP3DhQZrSv",
  "key24": "2JP7L3CMtjpRUCqc8AdFLh9sktqbDXCUZ7XhK8CNnjRySbYxGc5Sqgyfgbh5atwBVBV6RJPdLFAKvvtJhCyaCSCt",
  "key25": "3JqsYNHCvQnJYaisoLcQMNmmct7jVFRNNYoUDFNnJjTZCJdWNxeCqTF1AQZLYrjadTTVgKofnCzLAeZMMsy5Ts2S",
  "key26": "65NNjpEKz8LnGwnTVuE2M3MTeAcvRJPzngiYiAHDAbhN6qiv7rviszSY7MnRR9wbjRQp68tn2q3mETUpWx28K7Gq",
  "key27": "dL4qJdVcXej7tGwgVCJFwayQFCFB3SywBcvmcXX3V9WRG4BJ6W9RJQwp8DVsNpwkkbzpxH9EYJAVHUyAM4GZBor",
  "key28": "2uoYUk9kPCx4iryAfRC454wxwA8PhUD5PSDtzRa5nTwuJAiuBxPGo6FAmzGiXYRmGjy2yG51R1x72R4gXuPbin1F",
  "key29": "df3JV9AkkvmRgaSkTCzpawJMK3w6rUgJATs3YjLWEwbVvn8J57HTyrzYhp1eKXeZLF8vqGa3MDqQyXctqWu2TyQ",
  "key30": "VQng8oJ9RLx6nDJztZEpMDn9eaA427Tprmjr61Ndmf1nNb8DLYy5PXZ8BCaR6UdNzLWjCEZkQsHVLtJ11y7PsvQ",
  "key31": "5tSq5Jfs1DGf28SoBxyUS44NxdH28tZb1f5NR33fbCjDGdp6KQAbaLb3TwTKe3jStWzkhHrYf7qiyfFSpvTsa52X",
  "key32": "4R9F8PR6nswmL9a7CFVMsXqj5mBVwQbVDbqvWfFqTsKUpi391edBD4U3744AJ74egCpArq7j2hNQQrjsQXepiSpW",
  "key33": "3RLUGGkWTM7gqzTvEaYXPHiiyjsi9QVSd5N9rHFNAvPa5wgXBjfaxA52vD6NHSmNPaDTD5vmPQghLcAyz9DXcuo",
  "key34": "8mQn41zrCGPpMMx4fX8D3utWNYZ4xHiGNgU1tqzyeJns4TRdGF9yb1RFWw2tRM79KiYNrHpnGXsnWDfZ6uBjbkZ",
  "key35": "fBuzc6swNottkfohxQWU2fBTX3FFHj5iky3rw3wT9mFayacgbqv4E5ExtjUdqVmfn1LRtEkxxURT4R6oqfwbkEv",
  "key36": "61gin2ufWJEsyBBQCTjvL1PHkyjjrozfy9rF3Ewn6hLBqe6oVXshHoGtqJeoSuUUuLvcF3KiHEPJum8xhevQHUDA",
  "key37": "4GGf8CraR1StEz13Z1UqZ3YTCSeUKXPf9Ro8zeQDbQWCVsvMutnVuXmD46MMcaFgu62VsiBwTtSzx9gYaYDqDmR4",
  "key38": "2zUA4v2WacAzuWngX3mfGMP9FFuzy3iG1qK8FvT7yuWNo5AbEZAYZ9hmcUAVNgBwxni6i1YkEfUmikdZ4wRtTMrV",
  "key39": "2ymMLRwjcY5PGwk6MZTJe5AgsQ8pdxeKPcMDiCVymmtgWj1HCn7ZzwVcHZ3AJZGbPTkh8cRBtF5MXHvqjr1tVC97",
  "key40": "4TiQMkbAN3AsdTh2p3u29bzTtkehu6Y1GZdFQkdTqQerUgVwTcupic6G8enjGqKyKzSvtzVzU1SBKZvZMkCyQLcj",
  "key41": "2S3gZumskfHYqYcwQWjLWPe8ACf5WzTQPww7MqY7oJ7oZVvHmVYijZFAt7ar9EYFL4QsgsfvP5KDSrWMprkgJezX"
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
