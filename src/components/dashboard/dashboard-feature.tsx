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
    "2r9tThcTSbu1YrrRRkQxZK4YDswZjRhMbC1B2sgKNiQc6yqamZ6qKpzJqvUsi8vvL55fRdFcPoNrJVHGHFoZhRCJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w78XxrC9N4GWF9PE48DQ12GieDbh2TX1NQj8Vk4tnnfQbv2mHHNSGvEK6QceBvvuq2QUknrrifVwUXYz87gp6rF",
  "key1": "2Mv5hR17ZBn5TWGfXZFsyMktEVHeCVfsHZr7x6YuupQY4kTC5oQgCc7TU2Lm9CrwBay6vdD87CWsjzgiLtTv3P1m",
  "key2": "2FgDFTvv4WQ4AhybdMdDoHdbbnYjJLJf3PoxYoQ9uTgmLzJ8fvDf9VWK5qj6daba5zqikNTdfdnUzMdFs9QKKgok",
  "key3": "4Skx418kQF9t8UNBhRTHboNHmi9wi8vXvUsLbmZrxpfjoCGPGWHz3Auzruf53LuZGLH58vXTit6UgNPxyDMonWC7",
  "key4": "2xoH7mvdHWrXvSbpJDsx7EXzZw2Q4QzebErKMNBMg44grB6VNEcFYJSrkz6ETv76xuSepmdBzqnZhUhk9YYcv4im",
  "key5": "U1d8VDwG18Uoj9CaUimfAbTxZU9NMLzFhx6CEmamGd3bU3Sn1zUo7VyqzVMLdGwDGxd31cCpYD5rLDBnWPbStKe",
  "key6": "29FSnJx47y5brLz5zoqEuiQ6QTFcmtK1TZd5MysmjEDCvbvBtDT3MgLvqL3rHNJucy3VUjyrQaRdhDhGmsEKpLon",
  "key7": "R5RbrHxCS88t57Ma9dnsQ1Jvrmvcp2zCpJgzt8swwJfohSuEcSABPQSfsTzGdesuYqcH1eBH16sG8qaWgPHRQxa",
  "key8": "67M5sz6ym96EqL3jQRkQxRCdqpgGCz7HSMR99YsYHdmMYmYAoPL76Fy9cyshHdCmGViQbfZyAcmCp4AXmywfi38x",
  "key9": "38ED1t4AntahsqTMXAkM6cAYX8yMSAS7N76hEP5nzzjHPs1aJtaWmJFsURhPMhSB5ijb63QqrnUSLsWHpA1PJHV5",
  "key10": "4NehazDZDBbCP4ZgENxiVo252XbYF7Wby9ZsVdgWUCdTxhgHcfmv24HVSmvd6WosrbkUgciBDaPbXW1xVgmL6koh",
  "key11": "47rAj7tWbtqZNh3KVSVN3cFx5wsRdCRKMijJ8jb36A8BGMn4ZhDgmiHnfSmwg7K2CR3osDMqK7PBSACxVW7wq58n",
  "key12": "3CuMtG2P2mJtPae4AF1VsK23LnWL1LyizUiKGrGTcdGQFS4grdbjBffyztYC8NnHi7ThV2p3ysoPCVYHoi2s6xjr",
  "key13": "5PvSzqaJABvaQUs8AwrGFgjr255zYEk7NWJfrE56qu4JmQ4bnqqne3z2pAKqcWX7KVxaNNyoWHeuREMJwovtQky9",
  "key14": "3iNuJ3JcJzeb1XgwHMwR7cuEZN4ZmwKANjRy4NCQG1aCbc9KaYzb7Ci4wjpyqhK8Cq7GnmN3BZ2AfnMCvMCc3pXo",
  "key15": "3aiAPTJrkuyJJY8n6FJHmXCVLq5Vo8Dk1hY5udP1dZaFKxR91WmCaKsiDELREX81mzePto1BxFHVDaZkPq8NnsWv",
  "key16": "5X5eCTWKa4rCCJbECj2vX39ZMxeCgsxfjMALeygWkxQsAMSmPtvGW7adFYkkqqv7Ag85FF5GTZLwUKkujvnKbAfu",
  "key17": "2dyQr98KQGqg2ifeHVyqp3yQsLsdRhmpXKjHbGcPDFGMtrAcDVUdHcp4KTKnx1DeSb7gYoaQr4xXxpMzwXkt7iyx",
  "key18": "iUbiEzxqXYHPNCauhFwyhxsvSJVQC6ByKkANGg28AMpWnVpu8fafdBQbWqSb41JtQgVEgV7k72ZgLQz1jKCFbpy",
  "key19": "27k21mUMoXX9e3Xr25iMVkG6Gf5ZGk7qradQahTtCoYnKRaHMVmpTkR5N91pa9WZcsLzpNHWaxfcZVt2SfQ2g1zt",
  "key20": "27rwqW6GKXXXTgs4vjkL4AkJCUGZhdMEnwmvgXHJqVWwivkuMxC3bepuMCxP71ttT4E1wQr5paHZxwHxQxpkiRTJ",
  "key21": "5JZyqxvYYU6JVFrgE8NGSUYAvnuF6zGfRKeHv5BTSqnKzeTdc2QCYoxCEVavUCEzMK9ETfDh9cHJ8u4jqbmRDEj4",
  "key22": "2yJCAfaq2UaURG6dEZhqvNpvSE3e9pCzJpyi8fw9KdrW56vonnm4QmeNeUoCp8r6eKSnQncNQZDKEYvNRT18uwMq",
  "key23": "4C1jo2WnZLfRmht5HfdmbWtNG1tSfz5FfDoNN85g3fBGkJzUQLeMYh4M7qdrp4ELj1UhHefgMS1CWsyWdRfnUM9y",
  "key24": "38EikLPGEkt5RgnzdR54v1YgojWG6mdwpbuFqMeB8TdQERyXWyVFwzMkoxi7WskMzZggQfzV5X9SR92E6EBomjcq",
  "key25": "5xdt8qsin1y9NywK2JPwLaCbCiKNi4QHqhedf2WsiZVj2f4ZM4aMiXL8VXEhJEGknmCtCRPsVfjjtmBLqbKc578p",
  "key26": "5mgcChBCJrmopbVcKsdEBqU7XBHqGjETwGKWnuakHDfiZE2be54mJmnTM4QBnKzkiKrUeWftXAcErgecKxvXcG7M",
  "key27": "Wuxy16VG3SAU9YzJdQuBRAwYt5t8qnZGXXKQrLuwxF9AR2Cjgaxws2ABhJWFxvHTVkhRdpUPupRXdhJddVTH5UD",
  "key28": "2KkX2kZbbij6X94chssiVymvERDCtsd3xN6rBVqH2ihTZ58WtnBEotrDeDbhDgmz83xrVB4p2yrwpJmcDyNJ826t",
  "key29": "55MWTkoVWgao8HwuusuQZ94k3vvFc4F5WVE7evdQY12dtydK787PQXJWjzUvBvJQAXgNii3WUryPwoHVyjXJGfpb",
  "key30": "5ZoMMJqYjPMnEkfik48vUDgsCfX5tyQi5RKkFEKsnGJedyPVMFtsbbEME3pMMEBiaGJ1vNauKAwCMjoh722WTSBb",
  "key31": "4WkCGRVqEUdPUTtoicb4Xu3vRF4BhwWgcdm75nS5kGEgkCctjCdJ2tseZ7Ku1ki71FUH8z23zZhfXEgZ1dv6EmxU",
  "key32": "5it1P4wz4GNKJVpRcH3pgpbY5AfDAzMg8qyVDaWWfkPx84krWCVvxR41dxggEwJDMok7DxzR5MgmEuLSme4HHXzg",
  "key33": "ujmA7d19jkBsuZNQMPbDiJiGf6DkRNCko3BKaA3orWpnncK1eYEo9dDvX5H8oFkb9QFS3DWFkSJiZtqid8C9Zyo",
  "key34": "4ZHyiue3U9838YiT7SXYLMgkqC9h8R4YeeCpv1Hk4ETVxAv6VkoKEvGHguVNRA1cPgwGjZ3kcMzj1fYSh32Yrzhv",
  "key35": "2rskCf3BWPGdCMxnDczyki6wUQbdTVRea348sDv7nWf1tsQfxBh7yaFfqCwfuMPjhyBXvSEnMXxn8TfUTnd7P9dC",
  "key36": "4GLBNZoerYkb82duRgA6PDN9hu2wsnMnmrNe7n3Gh4CRADSTdzSCdy4Zbqo5xrtkHEgSpE2m8rPqyG9xtBGi8G1M",
  "key37": "3hqEuFHh1mTEFajjwXNJKQZoDUK8osgqUYPZywJ3aHuo8P6CEtKdnbM5ovn7LyUsw1fRUBtDQnJPW94Z8V4DbW7J",
  "key38": "5j7Y4kYQS7BKjazpwNFfYR3pFCQeRsvzqx6upzye8knpKuxjVLu1BEyCtJahT1Csw89UGyAFckokShBieCNDjJVY",
  "key39": "4E3WE1X19b9kHqng7M95ZKXFYi7BQ2pg7XALxfFWDhmABrvfa6SkPTTH7FgR6ReB3NT1LfpND4pMjgGUYDCo6Cp4",
  "key40": "4cQjgoexAxz6gP4eFuhVNC8W8eTqnfnMZkMv1Tgpf7fiGmTDrpQi2cHVkUCkegwQte5ErcAuJJaDM7dTdoPs9u4E",
  "key41": "5WkLri7BrHnwa95hdK6aATnxArQTi97Khc3kQBz9zM55qegpwsP8ERcKB2WgkVKgpgbHnDZGynHPHh8S9q4Repqu",
  "key42": "3sLGy7qwuzk36AMSA4KYZUix37FV8sBGpwjSjfBtnnUdvwJ4TvMx7vR23te86bnPLdmP8p5qd8fRJdbyQHH8qL55",
  "key43": "25zsueH5o26ykZ33JseK7ZZcMBWkSc2ihT7Fsg2xrWYcfYJiUvCCXFJEM61coMmyeCJecGev7kHpCGVvvv3JU1av",
  "key44": "2pf1EuzUaQ3wooPWB76dVD6cnSpeaEfuejHBbNAG5uktjdE9Wq4UGhvqHbVBsnDGbUKqVR8Lm2LfWfdbJuh6Us5y",
  "key45": "xJ11HkVs8tpSkLC9ghbvwDW6gSQBUuLotudPjiW5Cd7q5FkKLbWtzHvrCPU2geRxttK5oGnCUSJC5iG9v6SSZta",
  "key46": "Cwrjyv5NXSfL8wVb3gDUWKsjmAWW9UrJ4obgj7373vXMVf4qYLpRoT42U4LeNk5VB75Wk9A5jDLUyQbpkSgd2D5",
  "key47": "5JWbLnt6nogbxVajo4JrQoU6J51yu8mZetmoTq9V2N12GqyboXGuz9m2A4tEWPhyFeGiMUiDn3xpADrhXnYj9E5T"
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
