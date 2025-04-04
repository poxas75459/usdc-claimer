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
    "49e8CUbkcc1nmogXzjwZxD3tnNbCdDKJL3u46ZqZMFi9DEeTnu5zcqW3VuEnXF67ZAoBG4cHLruJSrwdZzAKVTYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUhKjRXtLmZzMR7pue7WLVRy1xtY2Ct1qBs9kRZJBTCC712CFcBZ2KQW5qJiDKuqkRQ7uBhHaVBsNSsz6uhfjRV",
  "key1": "3cQaWMwJFz5gsy4sFvb5ppuBdwVDtvtHN21ptEmuXK3pHWDECr1YqhKDKS3fLauzeAFmXUBeLhDVzFXkw1wkRJrh",
  "key2": "E3JkzRW7kaRD6eLNpv316PFZF2QUGyVHFhPpbre53Vs4sPvE2SQYhWgFx5wWuFDh44khmTHjsivnuxRApYWX7sm",
  "key3": "4qfu6VHavUveEVpEPtZsvCUV4EHUysfCChe5hPkQKWJM8AmZksTdvD4AKGEs7u2ciSALHSXvR8NvLaZhtzZVV8F",
  "key4": "2kEnCKU171uzoCtgUJqe773digwxedv4ifKo5xwoMwy37hmoT3Z4AJTLmXeXcsm1fRA6RxNALJobwUHkjdxd2Pam",
  "key5": "4JFHvvBTBtN2ZtkiV3XChQ5bwqpKR37PUpsTEU5DxvMFThfazBiX3bLBzNpGZU4kaSCqQqniUvj6Ljnk31UysHGc",
  "key6": "5hc6V8bVFca4HMQhDe4vz2U8vjqpHRQJwPKt2e9tATni6tha4RkeJem9kFCvK2XbHENQkd2LWJkbsF3CxfCWHLry",
  "key7": "2Uydj79SRrW6qQ7df6nKtC2852ht9wUHDQhxLPVsz7nW5HgBHngxEbpXrVUrFVn3TqrVZ5BBGQiVxqgJDvgpVpFo",
  "key8": "4DgFBYFVtEDUBFYfk3Q1prWezbcHWZe74PfmDk1w4XJTfnVYJWEav5UGED9JAiMcv9eFEheBkL7J26WiYEtJ33gt",
  "key9": "9ijoQb3qz3rbEeM998p1H358fdD54zosKLx5ba3aFThWCwU6sHwjLyRrWiKDFMYf4HvxzGFjNKa59JvkkL2t623",
  "key10": "2p9Cmv1QDNBUE7g3Lhrvf9PVqHy6dpKFe6HEihb5YvUEEQJ6SGQeHwhYYqXFFLfJpJf24crrke6yPAVEBCKNtw5J",
  "key11": "5rDsMkMbTtKUtytzNP5GcPVQQ5kxHHCx37GUBVBXPsY5d1R5i4wWcsbP6taEhJw5fTfVFpJZNTxPKV6KtoHGQvqK",
  "key12": "3VedRnr946SVveiEmHxWXn3LGgeH9MeQc5ti2xeTnk3nsKakZkjVgyqUMZdVAWs8FnuEphEHHpv4rjUw3n86E23w",
  "key13": "3mTBi6dthFRotord64kmVVJFKjfJq2EYh8w5Qin17zKErmNezrG84QQrL7vevzchzziVdS8B9NWyXf8Ny5nJAkSd",
  "key14": "28YFiGqVLLecNFGAyNdYEp1ncifHFU1KdFwzNygC8CpHLByhtpUdF42mf3bMBFDjCAcpG7rrHzwaCmM6fWqer7o3",
  "key15": "5FvrZyeg8do8J6e5ePn7GjQHvpbmGUq1Dv1VYeTqTY5dgM2cmBJFhDXmchxehTyDm1j7BUj8j7VK6oKYmEVArnK4",
  "key16": "3tpxtS4aMw9MKfQ9nUrTsHz4UhsxSJbLLb7Tn2fsAHL3HzRg3XyQPsjJM3pVBznjtxesgRvzcmCLCDpuzwbSdTap",
  "key17": "9zAuuweg1YLxm5VYsvMyndjMtxknziJ5AZFEknH6VPQZHdhMSi2SByeYsD69iBAV2jkVJqwm7etTSdhhrD4Fdyh",
  "key18": "YytLw87FY2jQZ6sPE5ZESYdDAwudSNexsox28JoQGJscPUPXqNxULsfKXDCc93Gfu7bYUY1e4G56BLu7SfcpsEo",
  "key19": "5RWp7wEUKmJjLhmo4T4W3S51FNkbG6w7YbvB4bc1V1VhsavagdaFYDeywHGYr1TQTMzxkcs5FhmqW4DdvJT8xZcp",
  "key20": "5QJD4tnhCUP999nAH1rgggivdy3qjQ3ujqwCKxnQrcRUbYitu5KCREXhrga5gBE89sxGcA8enBReU8BPwU384Sjq",
  "key21": "4dAWoQ2nH7scBi65G2vv6FYpe2BVMWLwt7kF1gGz69kj2tLzT2ShAHekqmbnnrB7uC8Srb8JdSomHRdJygWCDAzW",
  "key22": "pKXgPbNztXNuaCjuqgtYmuxWCVN9wzE569BRa5krwAQnFWW12k9ufP3gj1FKzfsYVTX8idAs596tPrnpXw6QhXP",
  "key23": "bSXEWoQSMesuFhGMoHZFKQZN7psC8KJLdZCWgKZPH2sE6tPeEL8n5CkfcEb6iFSEiSf48aYzhyD2NTTaigwhm19",
  "key24": "KT9dreJbgMpwVdy5jqjLeWZfFsQPjBCgnSs61iLXzxdYZRBuDgpfg3KJcqmi4fUdG6Fzu7GeBqbyeM1CTxifsfo",
  "key25": "CeZXrmPobjhxj4U9EvWr5Mn4r9pNSSw9xFtfAp6EVyQgFSP8MQFJcxep3FcNfmqufjtjtdz3b4sPMEagWgfRiNw",
  "key26": "3wBgvHBdJQs92GPQLXC9V2hLkniSUubTHxvF65uwBVJ9BGNxAxk3cdSp5RSxF2Dqy9AyJzxwsjmvQk9xZM6iL5cd",
  "key27": "665cwo7aVS5ihEfRvUhZjwaFR5Kaq8kGk2Mob6KDrpnistE3cfk2bDesK8JcgKqvkDuHEtCqvzrw7pqguoyVFyL6",
  "key28": "2uUswpw1NgkMFbGq9i1KJr4QcvGKTbzP8qmPuRdLH7fe9EcXX4uPHwJRwtkCJfossE2DurqYzp8vPezGeKSBzbP2",
  "key29": "3xyzXH8wpvmkzLCNRxt3E934WbTTUnr5bCfn3SMTN7jotXw6akG7m1Wv3ARRNvGoddx2JcRABRrABnMREw1SjaB7",
  "key30": "fcTYzJELzsyFncLN4n6Srg1GE6SfUj6G9AHWuFZTBPP7USw5VyMm6RmByczyz38TdYYd6fMKCsWCe3TsvXS8z7e",
  "key31": "4MR8LXEGx9kobe25iBt2MZBKoRVQB3egjnb8xVa2KV11bVp93jGA9bCEgWWSARysm3mXvWipGdE4HJNfb3mN1zML",
  "key32": "4Ufp4guLmDELkDyCqjYEbmVjXuweNC3joyoQrYZZdZYUVvXpxCQPu2vgYe4sfoWheNPfBJ2xc1LzXpohorfBL12Z",
  "key33": "3v4b4Y9zsnqsnyHTa4wuT7Er82PUedA4unKHyTK5HS2yWHWUqcvZhse92spbWqn9h3LdhXgSHgfLoaQvbSYKxxpw",
  "key34": "3bwThEdoNiWY7wJ7YNqzFvjhgppmGhvhcLPosvfmGSu8K2924EMtLKsGFGdQBP4yLJGWyNmVNMaqVFMHNHS4QfuA",
  "key35": "3CFBMYmdVXQwy85fSfimF3qCeyoqtxbe774wGWdnGmhViuGoMuiiB1pu7zJaHd399qyKxCrP54ibTFoPQuvbb8mh",
  "key36": "5FZD4PHQQ7CAAtBEw28JSrA9Dcww5kTqumpsf1YNbxb96ZrGGKdm3qZxihBLLDemP1ygTXdH1xF3JpwNtZo8Qp4U",
  "key37": "5F3QwCMZhYcoQ72RndoANGJ4FN8UfQi4HxhnsmT1NL11GwAgjxCD6K5QVjwkVSQV5Fd4dRhdvfA8ghTZNJi8oDu5",
  "key38": "yG7mkN73K86uE4AnoHaxmprNC22A5fQj7RaANNPXKWF4Z7cv94k8ykvbekwc3n6Rmif13NjMqcHFfbfXaprjMrV",
  "key39": "4MTus1JgHzWKMaSqCQzEuAKSzbbC2wH7n4Yi7HRWLeJnfpTvuvXcF4wF5nNRVd4243TKzdqJJpDE839CzYuSQoWH",
  "key40": "5Hys9EV1kGRodjaBeYdCpX9uwi5qPqE1VR2uPFvMJ18KTH1SzxVXeVQH9TZ1oZ6LiHRqBKG8Gv7miAdkBgJvxgsQ",
  "key41": "2tY76LjVKJP68p1C461jNMXe3bqtW9V7S1dAeuC16BewM8vt8LH2kN8quHN2K8Y43PRspVVdMWEyQmnXSkKBEckH",
  "key42": "31qemCkzLtWc1GQrGMbe3ouG2QYcuRXLYxuz8aZkAdf8nmJFnaYMtXgJogEFVFjmDCG6o6WESmMidqkwpoRdfsXg",
  "key43": "3TazHTcX9pPaifkk9Nk8RipJjfiirNR7qbKAzfFtdxkbGXYtg5iH2aAjdgYoYqw6M8zuEwqhRLiEEyyXZsb7djUT",
  "key44": "qqwR9ke8FiKFGBp1Si73eniE3Pa7k93zkJbc6jbcJCYJxv4PMeirGFuxFJAJEV2zPgHAiDB33VY9AkGirMZTtkv",
  "key45": "41cfjU9Tk6oXCPmj8BoEBZzSVaeD66B139PmVGVSafdVvr1iTDZoDYc6yJGaEZrFrDj6xJgwF3sDShczQaoWxDk6",
  "key46": "4DsMy3iT2AvuD8SvHeDJPt45vewgZY3aZLZtKemfhLf1icCkUiT9cDptrYaKKtHXB73sycPY52fxzKUYRS34BaBc",
  "key47": "586w4zVsJWcyVhfL8sSYVVZihsnRoM5HubFk7XkwFdAoHfnTwtad3BTt5TtUCr8Rfij59HKha6eDtBY7mBnwmotf",
  "key48": "4DK1hLj1VnkhPeDSgF6HQAwCLpKTJgizerDgsKoouWyfU77qvA1s2HMtynd2TF18Yq36FuySsSz3Bm4BmXqwy5NV"
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
