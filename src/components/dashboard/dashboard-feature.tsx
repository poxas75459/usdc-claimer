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
    "t1dg2MavsvDtVcDv12N9UnCCh32Q4H1mFT3WFsZFwU7BfhyLi4C9k1arQiezQZsGg3kNcTxn85ouuwo6cDTRYya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gRoMfaBm7ZchBCPs1R5F3fL3XGwPJRyWt61RhRbQHZfiRmtFAPc5H2QGbrVKjHjGE2NEozgefRsFT73LJXPK1fY",
  "key1": "34uFP1m53WMK1a9sWgzYbo7JiznezJozfd3N9sdkiPg1HD3grHgxLZih8MnciCaCwbHGqTt1G8o3xiCu6ErLk9hH",
  "key2": "5inQyhwKkY3GC16AgYKQLtnwTumKjbBvGFAWTigAGhA7QTh5tyUArUiZ5kn83nuPUcwz25zmaerNZtEyaZTxp4Cb",
  "key3": "tAj5ZuL97GtK5fDg6u6xTsXBVh7daAmFJwu8iPWBaU9d2SJyUNkpw4sxp7T8XBDpMbvnSTWCoz4MwSzGLHWYTDy",
  "key4": "nogf3S6Yjs4Z6JWWEUEwmwn3DA8jUD6v6inq6BsVYAHpXHwyUUBon54fa1CEAyMqbiVCfaHyTzBMXzPPWG139B5",
  "key5": "5kX71q6XpPuy8iM6297YFkHrFmNiZgaM8JJaKYa9pYNkthzsUDmFQA4bctb46JtHcCq2awvbr1Z7ST8RaU6okDp5",
  "key6": "2bQTyNrnYH47mSe9QyZjDdiZbj4sDPmWbH8RNNEKmaCSzHLMN12rKh44oxtt36yDG688qYgde844L3twqPyoyPxP",
  "key7": "5iVrvH97JhqbeeKUjNkcZG3aU85MV1JzHhdW3CgP8Y27uFCaNvDscEGh5D7kABc3NRyzdK5T5tjasFaQDDJBT6JL",
  "key8": "4QxCuqtasV478M7U3uwqXxYR8zYDQA7LGqdAeqM8Nx834W9P9HDrMKia5nURTortgJzCEz1xPz1yu3zw1uT4Ciuw",
  "key9": "3FUghECuV8yQtjGbPab1CJ7w7ExweMZAcrcD77PdQs6E3o1MoDbaaew8SZMUviaCqsd6MnvnzqbHG8W8NnJ2iDiM",
  "key10": "4SW8haETxGEeuaT7yEhSFb6fgWgjf38WvmjzZ3XmoTzstbukqWLJADK6L3mwrkyr7eE1aYMCFoASMcoVHBZD1oqZ",
  "key11": "3h6CMWKYJYHjS6yGr9vvTTzZcRSVgYty3cMRB8WPDwyNbgDs95HAfGTUdD8fL3m5Go7KuMeuEsQpauoR2uRPjBSp",
  "key12": "2EcjRkUryD38iqpB92SfpfodNyCSKLGdREq7PKrknh6zEib9bMYcpaodM882NgN1uWeP85BE21i2A2Beza1mwUez",
  "key13": "4GtDekCbpJm55K2Zn3V5w5PWjaDed3jZEx1vhvgZYEBiqeWZWFcTeAZ2YwMsJypZqcVAMfUxD4acdsonqoewj36u",
  "key14": "5xscaofposb1dWD2wy4Mp3sAvXPUPWk2oH1RF1gbXrx9N1H9h7u6ogppt7Ngv4QHMku9C942j8yoi74uXz8QvtRo",
  "key15": "52zwb9eBLoJ3WYHCckNgB6EpjQLmauRk44t19khffNHMzbLqrRTGVPTi3HnygwhAW2FovCiguYmgCXag8M3CRBaT",
  "key16": "2VcSDaRGDP2bZNqfyMSV6D4tkaj6ZFt7ZSJ9cuztcAe32efKiDx77mZyuwEvWZnfJiwwMmUYMS3JyD1uBiMRXPQ2",
  "key17": "3fZL4eFMEwD379Zzv5PsKTwkGTDLxGLSnRDzndy8eBBEFsikVwoD3zwAKG94f4Nr1iKfL8ZY9syQMkNPqiB2kb7o",
  "key18": "3aDLckXMRNpCeFRBsurippcEoKfFEuLYACxkVVXJKVeEMCE3Tf8Y715tJAqAn4eKxfojKqng7cvVm2bhn7oLb1zP",
  "key19": "2YN2rPU2Xd6so6nCms5U3BNnRtY2vp9TT28kZ8J4VKtsBjpG2849waXJkp6wCEAGaFrPrF21ipMy5G3WzkLw6jGU",
  "key20": "5athhQY9VN86ht3K8RY6E4amyLHh11s5MTRnxLVh39VAJE8haPcS54gwa7nuSsyJPKDCgapz4W957kLHSpmPAhnx",
  "key21": "4BjnDhh8u8QGHvZebnud6DA8tAb6Ye5YYVYD4LNQExVWHutQrN2xFBtiJScRyPeAo385EFPP3AoZjwZshX2ZSqi7",
  "key22": "u6xCQ6twC4LRsHkBfR7qK2RwqaeffBmMBVWv5q7FJhh3i3adTzyvF8Ar2WVvVFkKxika49UwojpvmAUyXymTrDM",
  "key23": "Vsr441hwbHKBSoXuqyb8VX5Aexf9armX3b3c7fPkVrYRVazMJRApkDa7E54nF6XrfgfnT1RPbTzaApm9qmDzzai",
  "key24": "2na1eUZ7iRHYGWPcaf9y513cNufcWcr9zHxxdXnQPggNPS9W7g5gCB6rWhxG2dLgYKGwneJ7NqoyvKpBbSG5Bnwb",
  "key25": "5o714MQwLVd4aoNFmqMvCCMyknFUxhZ7amc3pLUrNuLiqzsapPtNMUXHrJPbNebL9nkmx5f2mBMPmLKFFSMLPtkf",
  "key26": "2Jki249ny7moEjXF6UFNAyJmuhPdiXfXQtzSJbfeNJxXp9oXhbVSuvqK5KvQXwp1L5FvNT1GKepDkoxMTexBVHVT",
  "key27": "2kMcbvJf7v1NVTUC5Rq3G2RfAZ4jFwAYUay3NrMZFctTiCgGuBtgacSdVNaTze61XVac6UJLH2ridVFfzPt21xGt",
  "key28": "3S6kCQfnUxttavV18NrcPDib7Auk8vTHseU3syaYKwQ7aX447qyPanNNCB7XZh5VZTvHmPn9PmK2hudD92RaMbyp",
  "key29": "5ujmQ8oQBwyu2dwtgvgiiz3EAgiUuSzSi78TSh4mFCVk27PWAYz4W4hfwv4qpQHRKHpAFEDp1Q2ERz4pWT4JaKhi",
  "key30": "2N22CMUuitABgELMmgWcR3fBFHvLwYE4XnNCKXpoy2Buf2H9pK6W2UaN1HhcYTG5AF5EL1xQKXuD6t5ioxx1ENY8",
  "key31": "P7UbYF4UTxXmjd1zBTapXscpWAHZrsVbnhFWDea4rNmGjRUX91Vy8VSQPnrJFUgN8ifbPHBwHxq5vXfZPjVXsun",
  "key32": "2wPnf5ARak8ojhSbc2sNkvQSFMJdrvpZBDpGjmwaaXcbu5t3MGoa2mV2Jd7NUDaAYKCnRPHHFL3V5WdVnSUkmXNP",
  "key33": "3VLTa99Mg93BXfjD9VPkMHRJ7kiR6pgTWcF3QkG1n8KXhXnmsiY6DSaj6H5dJtxZhBxyF88ekfA5ypVgeSttuRYv",
  "key34": "4nW283jMokigs9BxUh5NUkATvvfHYCacFZ5aQ4dUmxfLcvN6XV9yJh4wM3L9U9YK7ibeVB84P5qsT2PtK2nxZ2j6",
  "key35": "4CXHWDKaQfp5gZYLqNngy1Q6igtrP6zv7Uyfwubdg4z5BZMfiC4At1Ydz2zeUxkEnwz4pFh1QXN5okx9gZc2yp3Z",
  "key36": "2AmZ9whYpJPjdtKvPzQSXgYjngPi9joF9ZWrmJgDpKdhvJH7ysNbSfXX5RiUQqcLKgVLw9eTbENwSzKzVcEBcrqW",
  "key37": "oaDwSnskwJ7wQsuCwqWg36wxQngUwqVeqd1PqtFWabzFUzvUqVmdPFsPCuEpk7HJbeocg9A1Fb2mG3GYsvrQyqs"
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
