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
    "43ttphJR4M3wsRUvkg9V74HrZp6nx9CJycZLYzkQKu41Sr7a7mm32Pr2yVFDcWG9AC6jyemhkYcf6d4p9qnfQ5Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mgNpud3s1wDc78KP9MEtR8UWznmqhQqWrnTC5Qqyk7N2jBbtFB9ShKqgQCmo39g7gAYStRJAYcjUrpXaM8k9xkj",
  "key1": "4YzD9Ftj6rshrWxqtAtGQWXcfntNMZhfyCrGmYY7yEGHKVZVZ6Ts51yeEZJnZ1yUi2crjyUZWP6HS43HA9sg1cTx",
  "key2": "3Gbm8XJq8RJGQDz6ZD9qycuxmZKDDCzcnnGvBabe1YG49rS3ykxDeFbrNAmwXtRty2Mbuq7UiJAhnUkduafiWubK",
  "key3": "de1BzpJrpSp1kzqfbB9YaH6yGKeZeo5sQYQaEuqdBViETfe2A6PwCqXSEf3HFCxau96ibDRweYzWYErA6ndm7an",
  "key4": "uTp8CepB4yPwj14xGSxU4vANf4cwTBqfcJACPM5RDzTB9Qi4cNyZNXSZMn2EgzAWHLQkbjtW29DxyM7hqe7AabS",
  "key5": "3i8Z9pAYb9px6WqgDq4qrdksfPn7ZKDgdsLmC4E8CEp9wsxPL521Noo4qRJtuAHE1aGo4gn2rzaj1JZRfQz44Zeb",
  "key6": "GpsHeNS2We8qdxiDVykDLTvbyMB3T4kuYxa29A2DKfiZoBhnc8XhWwgakFcRTfJDH1o1DCdSkmQxG51JqRAWVoJ",
  "key7": "5WuWY5MGtokjHRtSgWM3z4cz5CbGShaLg9wiQXPbRYhdbcTgfNVvYSPtwuDQvi3dQ4KyCrWMBEiY8gXEvBFfM8rD",
  "key8": "bPNDFqU6Kbrh5vHo5Bscn9czTyAsjQNAoU1Ur33JZ2WRiSbR1Am1xrFk5nbmUejYaZZDhVyGxdTHge1TYNr42gY",
  "key9": "3XCoztV94Crsug8foNETURwdTcHihqrcHRoypUJXFrbPvkM1gCusvnmUxs9EHEcqPgc6XMKFpDDnRWKjG18Qo3VX",
  "key10": "58D4H6ZkU1BXvXyV3EaqYbg3vYUg2GcZqxYT7xQa9QZTU5UkEa9pyXeUz7WJ67qRyz94xL1WWcowPhNQzSBpv5Fv",
  "key11": "3twLjQLzpED99USjYHEbg2nCMScbp7fnTbD5NhPB1ZgvHotqx8jPRyUUsYx3CF2ubjEFBq643uvSCBXmuy8QXkx9",
  "key12": "4c17VQc6AEC1nKr7m9uav7SKqpvBGNTmR26hTHMyeHB9Fv6ExAzSrJVHHPDAb3kpWEjvRhVM46MBwN5KbisKMsLk",
  "key13": "4Jf4pSvA64NBwcp8qgB5SgPXmCntmV7rKUG37YTn7diAwVBmMFC9Cge2v5BwPRPvsG41Md6aryeYy8KxPUhfW6AP",
  "key14": "22AKLTKmdmFrZrMu71GZJv9wv1MQwfrW6HWhE5ZkZiJSYSqwvFpchWjtk7TjDw76Myn3WPFTCGWz4SMsC9GcJFkw",
  "key15": "53tamKFmdXHhZmFybGPyHYcEEXi4QBcAfnRNziDx5i5tJigavcgb99vcuWrQ3myPgLUXoYpTtMLrJT62awe66TFt",
  "key16": "2T4bFSpw2aAnU7GsjAWex78rj9LdTtPvjtTaaRZs2PJQP3qABCTiTF2ZTAVUzfNXeFykHPdjAosVExYhhqKcCY38",
  "key17": "5VybjaZCuhjq3WTrpLSg8oNCozZgQ7kdWNb931E5tfYkBUewEeHLbR7oKce9ALpQkS8FT54uGxFw3hDC3B8u7Lkb",
  "key18": "5yXvLqvzyJZZJquEPABcKtFRnTK6amD2o32yxPrMQJ9p1Dw3iAnrR5Ebs9QQMbrVHDREsAbF6A3SsmYN9w5dHix2",
  "key19": "AuQRiEabzUmhhJXzWBB3EFkVH4Lup1bVF65iqmFspUuKdDgqfZmv6m26ACPzHyaLGwcHM9UnyALB9Ksm6YdvSMv",
  "key20": "4p6L371KLCzBuY7xU9gw1ntb2tYZ5TdH1j5PCjBo3vJJ9GLpZbvk38HHwd3b14S9VypFerTBv14FGgn2V8nJ2w49",
  "key21": "3VYvZtkLdS7kRAK9nktEJ9grATr8CzBLuBzkeCy37JjnVArMcFXSxHFdVNjwqHhPSCBysBUmCjPC8KVTcAdZNAq",
  "key22": "27uK2mXoSbwfop8v4s797cPasX3N4RHukuzstDUfrhRRxLt6mAue6ZX53xy99WmfB4mEpwjaWcjCf8EBR4R4S83H",
  "key23": "3agv7Aud7H4tfMau5qpmVYnAohF3PfsdAVrpXPmE3Y3mDbpEFCs5rfm7WcrbHWTySgkyDEb2U53D6V7qLeuudcJk",
  "key24": "5RgWqpxHgPRvgNnQveNCf1zhkrmv8tM83eWgiXXmBT5zNCBTwLHPHrDoVi2hPWgPWYokUKjbKajXH7ZxoDMTiVh4",
  "key25": "2QMC9ZHeHNeg6dd62LkWpkrgZAZVgSJGMcw6TJZuWkkdMgAZCvbfDpWtbgtFJecex1KjSed35nVT2E3bfGcSqLRo",
  "key26": "4DdcjTRakLDCusugaMxWKTuHFTYjNUsTTcZVByJt8P444AiJR8tCoqb45tfPZL2YNLd2JNcVHRfrNdpHP4kecUcx",
  "key27": "3zntKxLQdzUhzBghFXBKTUxTYSNxAJX1eLZCMYkqHDRQXj46MT7j7rjD1GY3tjuzwGjoCWpLAXd72rXsZqhf21A3",
  "key28": "46m6SvvLqE8KTFzDyLTJr4aEGjieTHHfgv5pAD4GY7APpkeEY22pqpWueh2jqyaen2xun8WB9txwD6cwCEfkJieK",
  "key29": "2kCKJqtD3YDXBknMkTHVTtcxnvErJNmZTydfZhQFCMNFHrmbUHR11ocwBm3UxxLt65QL2vHcbjsiLxK5vQB14t9t",
  "key30": "5hJ5XuihjQyGJCNdCW31HqjPspcbyKknPTkCgoTMpxJJThRhKM2ZTBT6pJZhjDm64GU1zHLSUMzuLidaWC5xhb8W",
  "key31": "452xLFht2vzRUEtAXc9NFGunTo4trXbqBG3y2dDYQHC8o7RNAeFTe4hSUbQ5gmL8F7SQ1zzabt6L6fbHmDrRu2PQ",
  "key32": "4vBVNjt8dn34US8WYNevbAkNB1wDJ99UhYjFV6YMewyoSF7ZuXraEUtTV88VXpRoe2wWuiv7ubiEEZ7LRnzMgJJX",
  "key33": "3vhRYysnE6xwzerPWG9SkFEmHHNAz8usRBH3bAN1iGaRFxA9WUzGoReSvihnGfGAZgya3tvRjpxYvxLmEwvZqvGE",
  "key34": "2Az6W1NKumQPaHArZkAwj7YzZHEzfMfDmRoixBVjZz4LTVrhffBdYB8eQQ6XMMwqxaGDEjMfnQjtUL3Fn3AQCAZi",
  "key35": "3TbYYovCtcaiNRyn9Jh9qFkZAAwDM6qsTf2vWY7LCwEKHzG9sMreCo988vVVETyf6up259GUtC8ZFSrsXZjt5yXK",
  "key36": "66ciUQCDFRxznnz9VEKoDmdBoExi3ticjzuPVUEtY3ZBTyNrbgqmC9VERm35kW8x4us2VsTbUZHsxFUKViz8VT6y",
  "key37": "2SFfyPVvukGgBDJnN67ePXpf622JVbZy84vup126krLq3B2BZ9YGAcWSJ5v6eSBFEzW36AJhdo7Vnh1Cj6vNsip5",
  "key38": "3VfuRZrHMkcqWRWPY6xVbrtyAzacUUb6aptUUtjZgLjr3uwr1wrEfTAa8uaJPEy2JNsNJgahBWTTByhc8Qqsm4sy",
  "key39": "4N9UJYbxCHzygYo2YyVVBJyvQ8xvMxpGVXq16ArASqB66KAaa5AYcNCULCuTt86SriE1GEqjJzLq4eHrR2PszL21",
  "key40": "5cVjy6RZ4QHtDDJ7Uu2QuoNtkkjmd3WMtoNAoaKuMYmcpexRZSRN9eP88Kezqyt9fLoRRcg4pJcJ11UBXtthsi1i",
  "key41": "5c7UczA8xm9rNaZnaqtKbnDaD2JzBGbWtoaxHKW46G7tZG9ZTf3FMxEfiSFgQ1qNwk79PFD1CxVgCQBRN9Y9hADs",
  "key42": "2qbKxvwcwr6HqtmNguy8PnirCHb86bUwZ7EW6K61jkSqFnsoNALjTpXw2kCevwsKdufJmPEXJJrs4BNo2SuHghm3",
  "key43": "37uSxYpdfvR5MZzGhDuenf4MGEdoYvKD3JTXBPaoENnRgQkxa2TvDL5dQf3akzueJiD8LT2bawWMTnUxmeVChuGy",
  "key44": "4SWkKSgwxZrxhXKMgB2JY737PzBw4nFAH1UzD9pjdSQpmwSN7YN1cuGLfngHaQ5QTPFHsgEghteRAk7qUdEYkYqE",
  "key45": "3rt1g9PMDZqdRFUTQLgmr6jDG7eXMKPhWYFpoEJR2aiNjPm56m2TvKZxVrgLbomWgADxFGUaNvXf4PzTJLkQ8wyr"
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
