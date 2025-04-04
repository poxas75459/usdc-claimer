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
    "3DqRh7HcfUZc37iQnWGPTnv1UqZBLVhyQTeTw5e8seqY6LyfbSDXMRd8gSBAaEFa2fCmLfRxnhPYCsMmYEvA298e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBG5MGG6VfQKa4jWMgjNL9qxiML8GUSa53ZVtpPKZ9nthuu46M1fX5yJvgo4y7gttPUM1rujMaGNXEwPv5eHtMj",
  "key1": "2QAF36sCN5dAo4A7XJn6u932DM1LUQhozAJWqPhYPjQM67nG2FqmbzZfKXPJVhzHtqcn5GePuhgWJSsbqjViSL2s",
  "key2": "8g8sLFFyrV5Lzv62Rzxi4phPVMsitt1GGNJoRvFdRVxb7U4XHVZu3RDn6h224erSXCyZckjgjoi3qyZg44pZh5E",
  "key3": "5kFGgxmFfSPCYwSz4yTj3RfFyJpcsR3K9wNgxAE9xTsysijs9E8LZfgowojcKHEQGc2EGtTkVQARLGYN4tqQCjgT",
  "key4": "3GYHfZ6TBxxRJvJ995c4rajebrRrkhtjt6kppFAyMsEuxpodmFmNej3u1qHTpDBwATiVm7NKNf5mghQcJ6QTzTAJ",
  "key5": "2w5479izQ67wUWU6SgypaRVpjbN4gbwSudxfsRrdMAmYVRfLQVQzAo1xyf5zTpkvGBJ435G2QAcNw2AUXQUbqTnr",
  "key6": "Mo86kKKRFq4BX1Tw58HS1SyamHVsDQhY7cmqhYG19F5u6qSs18EGquj7xqoWCj89xxntTeiD2Tt8qgcVoMRx7E4",
  "key7": "4noDVmUSDTv1jmAUoGmoybxUSKFCMJoUsyGyhWPMuopar1ycijUozzbrC4Wm1AcP2S2qJ6abrJ2p6d8z2ewCgTSu",
  "key8": "PoA7rDPJQMDJT6TLNvtQJNbyLBQa9tMCGUXtHKp4aLBXqFcvKJdtorzvy7K2MwYZbCWnbgZSnVDqFwiZRfU8suq",
  "key9": "2a3MZCVnFde3q1GEge9Wt77kp4fS3Wg4YuFWMUXpnSf5MEzTAZ2Rq9cYNawtjJBXCyYUgy5ssBdSv8sMHhcUcZh6",
  "key10": "3DanAwG3kYCcNRvmYqBrnEf5MCphSc8QVQgh2uwNeusnHan7FAtgnnNgzJvWxZZbC5pnM8QPZg96mHWqgwoWqC1x",
  "key11": "iM9skrznkq9HMFBoZqSLuFY5hSQYvxZfzBKgff88kjZcjBp1keZRQuUbVvbX17VQFBJnbpdjRBoWUfwwGzRTmFV",
  "key12": "5yRdn1rzicFPtTyfs1KH19tkjjp5f14gQe9n1AD7V6BvHzP8iMzmUnp8hNZzjqVrBFGNngHZAVrbadw9tXk3kKmr",
  "key13": "2E5Jb3B5ogsrd6L5A8HpEGhwjuB9qmJiuZFby1GsiQJ66F5MkC8Xr8BZdNYVBfkG92UDnmGPGquNfbg6So5EmMFy",
  "key14": "Ww6h15rYeJ1Hr1DzDBbJj6QMQVNavAqVN7rFWyp6aMZnFxboq1beGVcpF4FXepAMUmHThr9mokeNi47z4LgcsCM",
  "key15": "556JHwwaQQyS3iQnA7micFtxCmcK2gYeUKAAvSfrvxii4U3zeUkmQvHv5pocQcq22YQnG7ezNb2orJDsCb87F4Mn",
  "key16": "4wXoDdPgzbG4sv4xKkSPieDrwpDXv4AJt89w2PYmz5916Twk8fzjok7UGuwePjdpzEch1wwY38qwFsKT8JjTEzFn",
  "key17": "5jq1QE1cT7eTprhE7C7snhgd17U7fEKRF5ybJPvJPFajUxLGJaanCWpkv2pP2U3W1ezCpJ9agfwnBzCqGMpK5hoP",
  "key18": "5SSteTz43EEnoZGrUCyfkNvo6psoNwV5AR3GokZ4teQd52saor9jGMHumwxo73e27S2EHjvQ6AaQ8NviHxG2BiSj",
  "key19": "4vrPrwip1D3cWBehvNoXdeMkBkdvnVdXTsSBnAckMwF3bDX4jmi4jtcwYdJoTV1Xw3GyZ6itJy8NMbiCewEPHNcu",
  "key20": "4f91u9W7VATUitqLCaPBgWbvdzbaxPwpofEQc8d56hHS14ByPqxh25nbknuwsS5C7QjGpknLjXZEN8FL5KfgkWBq",
  "key21": "3nYhzE7f6k9xYY7H85NQdvfSDr3if6deqNzszjYAm5TAkrq5nqpVwwwUAMkuPxFDeE3DcqbDCDw8rGjk8j13tQg4",
  "key22": "4vaCU58ggKfEDyBEiY7Kk2s1J8Bo3bEADnJiYT4uTjJB8aLoPBz1qtK1iKkjbvbq5XM2hxxi2xATdygKMQW5uQSM",
  "key23": "2iHnJ9b5DFYWsCKMndfu49wkMLX4xCBMCsTVePKuMgipk9LZiR9T8aAPZiuP2icbto33SffSaznUagXvs8EKYk9W",
  "key24": "3qbaus1greBUz9HcWmPuBDDFvNRyVJQEuh5j3Em4ZnSPua2jkMrXWwLpZ4mdqQYy1YnxePbK2oC4VhoZcg41VxQw",
  "key25": "2Fyt9JpbCftHYdhEStX5bFcwKDT6P7cYmUNKn5fFcQ83bhYMCR6NjeHmXoG3Kk4AtvMyNDYJBhGzDkC7bTQ5Rfim",
  "key26": "tj1TvWuGhmU8PcnRRdCMPXrb6FqVL5zfUL34iVQLiLCQYrRpRvU3nJyxQLRtWCjT7fz3ZUN5yxVQVAZrubTjuNn",
  "key27": "2rsQK9ZUMdDpXoLwYEZzZoE2tgqZKoTLuVJBeRAC6YnuitAssHDgNAoC7bHTUjXresfp9W7LZyALLTzADLWDJayw",
  "key28": "2jq4drxjgDhCDRrqf2tNpLEB6cHXFX1VuwfhntFRv2PHAXbys5i8AT8tgrXuffGHfyhCUDzMQX639phYUXL8J3uW",
  "key29": "57aPiDSynCcq8Z5NUHsjPT2sMazMvbbpoTbxiEu1BYYAaewwp5off81ehhHbvLvRSVbmHb3nCs1PE5pozqgZQjXM",
  "key30": "4e7NZRfHqG2bV87yTvZ6r5TjfhmBd6SHhZAE8siYkYPAvbqQQRBF2W5GTYTrtRGk49qPoMqSAP9uDF4A7Af2RJtT",
  "key31": "56ywe9o2axMJwdcxzjvFw4xRKPeXhR9vsLRGf3LJsrQGypcUSvLt64R6LBqA3ho5s5SZ9LtJkeKMGCpJWfpzU1Qg",
  "key32": "wmnarhiTxPsw8f68C9WuM3T1ZjSeUbVhfjpXyHVXWWrWHFqDhDM6Cf9xtpFp2J72QJaEARGrFTSKdVfykfSVdWA",
  "key33": "5p9BDGfJHJXq3NHqTZDyAMULQk4JcsPL6G1cqSwMetmXfwW41xZG6wxjS6yeHBzUFGkDVi36k91Q2MEdAP5CS2Hz",
  "key34": "AN8vGAzUXwDENMA7HKLaCzoYoEjfidX3sW38tQrLrW7CMY9MLMSJ1fPZMbcm3ZUwu3zybYhHXyjmh6a72h7QXZk",
  "key35": "4QzeFc5z3gJ5nGqPYqkreb1hRrdeVNU3vNssk1ezKmVvj9JYz9Bvz3dZbSLcJk6j3JaSGttNKWVGxkbFdsEYpXdi",
  "key36": "2jVmbvyqTch8qEGKr8JMh9ge7M7zR2VeTyHK1jkRvUrmHCeD7fCBWg2c87b1oDQnb7XXsxwUVvmNqWJtDbqTMmvV",
  "key37": "5xEAeJKL1L3XtKMsoUUYRmq6ig7Saj5rjKpdWeo67WbrYz7RBhp6ray2hD3ePqYeQdWpED2z6WowhoPFNK6QXwND",
  "key38": "4wBMtfrpKCTAhssWrB4DDQkSPv2p5YzXeh9fxNTtjceYsaGsk3AKYgqoZ1pi9JmoTfU6GQRK97qhFPN3JuAgEBrR",
  "key39": "47HNYYuNAGWF8R4F1jpavsF7dpV7j3UQKJYBnFVGfTmNLi2Vo9VWGZhJrVDrMyjXineMXW1BdP7w8So9Vtr29wMr",
  "key40": "5tdvz24x2Ecdh9wPKsREAdJDpnWcxJVyjUSs1dRYFkSXfQzPAaESPtpnLWovFySztDb67uLHTkDC6yy1vpgvpW3A",
  "key41": "kMtmM8Gipvc29fMhAhYJvJewWL8kh8nrDcXQb3ERfAVvdp8BvyeroqDbKLjfPZb3CpfUtKu7d69Vj16izmDNY5p",
  "key42": "2zr8suNFSaKoExkzs6g5pjYZW5Kfj8vT7vG6rUa6UyvSoC5dnFAm3ih7H8KeGV57VJ15Fg3G2swffifBkpKMUTP6",
  "key43": "2pUBNTRsg4jQwbHh9YoXGHJpjKBTrgTTWw183NySgGyawtNjrjBmRXzzqSwGD2m3Q46zWyxuQq3Vwjk5R4sK65Da",
  "key44": "4z4btrQxjywqDHCK8sAc6jkVXpRamgZ3SWrHgZGykrL1Ko6NTUhUWf4WbBfHzbxok2Ysh5CdE91wbDp2EpLU82vg",
  "key45": "5QZSzv4W4g1jjtNZAQMRG2NDtSgHyUzCVisGAXhsiPGRSEYuKVRp76dzuaBKZE42RZpVjiu52vyK8kYCaj5UvfFw",
  "key46": "5pykQtnofV9ReDJeLdJWJCcb4zqstGXekqHpYGvLmLTUSnoRGC4RXn4QiBi7UFUHBb1RGbqfVpL9cX5AP6DZtM9k",
  "key47": "2xmpeFaNJ3U7zCnV3bdPg2esa9SKiFmRmkTvHTaMbP6Jr3h23WFT3R2gHVXka32PEaanyXrC2d8fGZDf96rSWXWR",
  "key48": "2EDtn3NacA2BZowNjhM37Evz89yk8CweNuxPPZsTCMotMnA74p2GuZeRQeGc9H3jWLXTrmbvWFmat3eLGbHaRJ9c"
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
