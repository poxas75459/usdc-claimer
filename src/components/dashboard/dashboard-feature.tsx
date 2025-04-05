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
    "2HfZqWED3e9cyKSkbQ6V4eXa6oZajz5TbrzfFMmdvLPUuvaZhz22oWdvdV3MJxZD1fqLzZupA2RLTi75jCkzheCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39EqfS9ahZ3bo7LoToLUtJ6dySuVNppjiidr2sCZPHQMnefANvfCMP5tBfZFXCXw6Hmy1uTPpLTNNxPneBtTU3Xy",
  "key1": "53jWEEGTeZVXtMshgqPu1QZzxTXrVxJPbdxj87oa8NPqwbzertRoYQocpRUMrE3hdKCiz9rnuv4yufSaDZ1WzBdj",
  "key2": "57vKkhbKqabfQ7uJVoqfmzDpxahHp1ePVdYUtmQ2dmRNrna25PB5iGv7FJQkZHgvkUmxKWRgUMtwoEmqSQpUEHbg",
  "key3": "559gkPKFhdVoqSqjr4pPgNUGF4DJ6pB8qCewMp8tDLPzxUQJQCHvH8npWmcAiyfgrQXGqVHfSQjYdaaph1hnY8ER",
  "key4": "55F8n2S3dmGTt3LakGuRuAkwSpyBwweNbfsVZoCf4EK9KRk47kZkrm9YmyBxepZPc5XLnBaWMUyYVtUhWekXD7K4",
  "key5": "3t7NhqiXwSzdakRWZkj4FYbrb9xAQWN6x2yNnBLRUBB2r6nrCwTyhLCNPgCQZexPbuPjKEkbsbGMxWHE3zsqRuga",
  "key6": "5b79AaLBKWWGt6g4c8X6uungR449Wo2byNk8R9MQoQWEE7yBzCFJXZ3WECXgPqcdSPjU2PBcnrLKecq6cKWmghZN",
  "key7": "fYaaPu2kddf2faUzxBZKYk993EBjhVBmXSV7YKdtGShiE7Z4B4sRK3jGxUU78VcMdzrbS1p8giKdJChn31XiyZv",
  "key8": "3pATfXnmAzhRsHWbDcB4cZ7HzpE8q1hpDLUFzYGWJJ5DghZ2qXuTyoYTqPX353KZZCS2SfCXF84t3kHWzEu1qwdT",
  "key9": "38WZAj9KcqM1Q9jsMwq1B2C1k6oDbJrWXFe7p5Z5ecvtyzdkE13976mB3JZGzEGfGKrPK8agjfx8KtrSr9wMNZqF",
  "key10": "5YzNpV3rtH7C9yhcgQLAdw2fCHeToL4ZXYta88jABQ5VaqcQW4rb5APq2ru8uf3PEEoBa4Jk8rnHrWxSDgnjVqwj",
  "key11": "38WTXS5dGm9UZ8A5ruVRgPjfFjJqzcFiXBE8SWLMU8fVSafiELSjs8D7ZmypMneZpuJvyPUsrvWGpAALNFZqt1FW",
  "key12": "2HGyYpThvy7H7g1wYveDQ2BQxgY5yUawNNbBYhv7YKSRUR1yFq2jucA1cVF4gR2MBwBK7BVtygwG56Hv8x6ETj74",
  "key13": "5WvPvzdYNe6N4rmXv4zDzGQxcCE6jink2HZoccaE7bQZ9UbWJGu5RQ1XuTV1iNG4AUKwUgh6KaEpgiaJZKbMCRZy",
  "key14": "sSEFazwzPjaNoJooRWaz57xBkCcvJPp4ya4X1WfyScacRDHJJ4QKjuLTE65ZG9VLQvReHkNfjNhLephGDDLkvXk",
  "key15": "5semgaCepitSXkuvvzmogVLS9TMLsov1FxYVy46tF3dT3BKtNMd4CDKHHskc7nXkAMGUitxZ5VEb6StRgnXQ5DdU",
  "key16": "28WtYWwssYsJwYiQbhmhBAbEFXCUUocPaWSGLKb73ULAAXgiBm1ekJ1ApFhV8HUSCVrzinHwAS3w2kr4y8WqP6iZ",
  "key17": "mCVBFdWufzZqH9eqesfafNDAXrt9QKc6NS5drdXCfkZt5qAaij7tuEybzqgb7W4igKc72tRjXVSCQha2NjhVMmk",
  "key18": "28MSbQP9Qjb3StJ72Fru8xFX7Kx8G48mJqUShQRh9hag4r718fk4Lm1Bgk6e2oMVwx3gCvZNZ9GbMHibsjk9kHX3",
  "key19": "5Qj3xmagoG8roQc72TFpqZ2rpvVMHN5uS5WWwChSCdVicVF9gdd4n4FjofDK9mbvNDeE9AaqzvmcxVKQAr5ic2XB",
  "key20": "3iPqcoZEEjrYD8mWLm5jAHxsRSrXApnqDvkXM1rWmSQ971F97Sa2sQGmUncvsaiGLkJ9qjKEc6q36BjooWpQ1L4H",
  "key21": "G9a1oUXtY6AA1xHqc59upbcmGPca3cAvNdjJzTCE3v2NEm5XQm4k7CKUvArNtPtMPHgbtKV5q3MWPgjwYe4KEcW",
  "key22": "4RoTUk7An683veLXLqBwXMXRGD6w7tNf1tgxAP3u38vSWvYQzpT89EnFok8vL6N71sfsEnh6vqVhGoWknYTSEH1w",
  "key23": "4Bv6mauyhR2MmNcETGhQHh1UerJ4GYfYVqsEA1drN8ht1qxScJcnCAMi9H7QDpzWkYQ5AkbL6vmMurDXmTGoxjNd",
  "key24": "2XCVh1xmrcPefN4RzuQiq3qbAYneWEn73RswyEYdTwzsLv1yLMh1JDCYbt8eD567k97XXrHvUvVTXkZHbJyfkoWp",
  "key25": "4xnXbDAU4c1v4cW8mKfp98cgwWz8Gx67kCk6KcPk7ggr4P14o1jSvo4ZCNzotCuw5VokrsVrxCKyoRFMgZZJewu",
  "key26": "22PuDFGewWprkyW82Pz9AEcV2tVZxAxZiatW1E6ntESsp22LmXfSVBRJfUgL1Nin5ecrMoBFrAzLaM9T7E3iLnFM",
  "key27": "2HmQ5JAsmGtWi524fq6d9BGD9Hi1gHe4iCCnxEP89n5hdQtEqsaQUn55qi2NqzNkDpLv1owvMt71LuN1wbWTgzYS",
  "key28": "2zCMDT2MrGZQTNirV7yVy4MzRsNE8FcvbZw2RnorWmMxtNQ71MxDzcfWxMbNdjyn8xVBMCecwFrDehhEnYEbs1NZ",
  "key29": "4xb4BEaUJhzSPu2JSmPnEWrmk7C1YeBAdmSdAiwvEQKt6ZiJJvEJnT9eXEWVkXQkN3bgQ5f6WVsQXFASKXSthGDP",
  "key30": "3ztkX79wUTG4BZTzyVm7t7shxqPEFGA1Lp16nL3HysHa7yP4Rry7bpw7KDphNjA53KohhVJfqApbz3KfQexhJPyE",
  "key31": "f3CYDs8rbRP1VBPkSsZZp9S8hW4abdJotJsLceKUzQevrocRRMcnsNv9ptZm8W9isFy4EJmxrpHBMjW3AUV7eP1",
  "key32": "2bb1637e4bkvj4Bhz4Xr7FMXpHmGXRM1PskZwDDzgYZRqtcfKnMEfZiUo3ovXPsyrKuoD2SwD31z7giqXtupwpKG",
  "key33": "52y2MFYZpbvuNRrSWxfZ69sGfwerKxh2Je3VxFx2cBFiZCfwnHmMQKJmk5jQafmhBmHBoRoVDP6QmhAJjo9idVCK",
  "key34": "up2pQcScY8AWw2FrZ3y1swzETh9ihY7HMJGqmZ1Hs2QCNVzeyfE8EbNrPopwb7FBiQmzCF6c24AemcmhiSWxHBb",
  "key35": "TQzy5ZBBh5v6DpagPChQhSZz1HAWF8yPs1tXUhQGYkGMpzwnDAKKnQVYwMXcXZHbVrNS2ptuqMTk2TUeygXyBmt",
  "key36": "2qdqh9p2D5nGfN91rvRFRuFDUdvJXMdQozSDqxHV85b7ireNdqF8C2SYLnFv93gRKUvH6nABUjFhzyZC5TarJJR5",
  "key37": "2U2BwEttMwFhTCXRdM97NVcqsfpF3iPfp7d77vSKFmsUPbnyt2ou4TSxH29hvAZzGbw6F3pSi4WDGhXWtsE7Q1ZX",
  "key38": "5sL7eLRLL412k8pZA34HkkWp4WcGFsLmgAV26fMAGyvCzMFy5NHMRtjTydeNnXyRzrS9bPCJB7id3PCXBk5YcELk",
  "key39": "4LumgEz1GuJFoGpZ3JDE2R4dvVRctponrCJkQSZpx6zSFxsY6oZoTEvUAkmTxrdyhF7mPdGLS2pAeLdiuEjQjfPA",
  "key40": "2pL8KMbAJzij174UevKcD7kuDqxTu5K1tFEyW9taSCK2gNFfPq28mnXPi2ptYTnGXD4oWFRK6GSfPxMFJEqeh8cE",
  "key41": "4PobmguuBMXcNfAomAKT4GMaqW7F8sukYvZWM6yvUoSx9dhD84EUnHhbSf8BcXDEdfLtJbDrocPNQYRzLsYtzYK9",
  "key42": "YUo4BJUqTaRqS417tfuv7qvBAyvaMBK5F7YHSLh6aj5wptudiwHhir4UNJRmXjgT16beypBbhbUFqVDzvDPCwK7",
  "key43": "4k4cvRtqEUK75wHf9pasn4eAeboEK6W2PznogHTJVajkeypHiTTGPUXzvX7Bh8sB1cjbg6HGNu1Qh1XPjWGeS8gp",
  "key44": "4crNu9zBnm44UgrtMLTYJeCrQ5nRYs7Q1bznnnYJjKkYisbN2TKNnFUh4gWafrM1hjH3dj1HHqFYfVq3YZ9ak8wZ",
  "key45": "3giLdQbpWoZ9tNFLYdqGUkuNqgS3riksaeaDrEBq2XpQf2DHmgSd1oMmUJ4rtWWDE26eWSyYzp3F9WNxev8GKC4V"
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
