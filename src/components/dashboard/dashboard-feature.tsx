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
    "2CmNxrhaWX9KpSfGqfbrBuCkxiE6S6BHx6qojLtgohKH7F69ztTispZJQzzbnU3y4gSz5CQMdNS47UvmsRbvPBLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BX5mHqaUvQ5BxCo2JGU4NXAv64eJnUhrZG5drcbCx6wXjCjkqqXUyC22yeU44KNz6B5qiL67CgH7KkVfpyom7MB",
  "key1": "4LDDEz4Yg6kpMSi9XxuTVNktufMK3fjJMnxPgDsxBRRYhks7EwVKVkffYUQyc7yanHLQchpJqPRmyJjtiqJF99G8",
  "key2": "3G3vPUWCgZowcwWvn8TQN2ibSLYsLsuoZsg7gkqdVAjNrXszFaixdDncWTAp4KV28BRQNziFHxyS46sMMCCUu79i",
  "key3": "57C5q3dEp5QyPyVhYBxPXRCBby6u9JrG2DCVZS9bLLSSkxh2n36i1gv8ksAhYhmPsFgybhUDCeeyEKd2LY5Ce6Xc",
  "key4": "c1PNuqGFatVrdxDTZWuPS3E6a6fW9yPXuq9ZJYaMNiRKDVWwB2u2Ux2bFwF2tJT9tWiqi4uiArmiWJ68ZChwpfq",
  "key5": "9ZZQdJ6UjCFY2yK4HhRaJKeAe8zfe4XzkgZWUWemxDjqrXowaw6rGtprBiPoupHAZaZNGZgFcxKpdCeUkJ1uAL8",
  "key6": "3FZjF6gbjSaGAD2BiaWJFF8j4aJx2v7jxXidNyhH7Cg9kwheG1k2zs9RvEd1whk5RdtpJVoWK1qpeAoZ9n7aYzxs",
  "key7": "3jcabx3hVUuo29PZpZc2LXRXnzezJXvJ7bqFn7ti1ALrXnSdFxejzF99Q1so2HXejJYyYuEns28nz6Qpeb1jmTXm",
  "key8": "5yguUmfzKPZxX9doYQFA2rgZTWwTR662PUa37Rsy6n7gYU9RE6LTeUe7MyGJxcv3gbsizFxRRxRCKzHyTmGL3H8s",
  "key9": "2R5hE8ALG4J8dDHMB6hVhFJ4oWNxkNxFiZ7QFqWGZUfeZuDpSASK3GC5ZfEzuruZbK2xhkLHYxiQtHJ2rsfNHoG7",
  "key10": "4XqHUhec5BKZo1bV3t6hAbLy9jt6zwdCm4onLkjrhuGMH6Zs48nFdhx6htndtgFrz6aNQH73y7m5zLcF5s3vRFx9",
  "key11": "5eeDoEyb9QxdvKTFcVHnHLzT7ALSrWBkm4k1N6sLvqpvMosxFGikm6B764J9PaPgPvYwt2YEJA1MpdvdUVAMzzy",
  "key12": "26H9oqFY2STVCWA27EuzaA2y9hiNRZcGQbSn6T717HxHL52pKqwaKtgjR2mjWJvKHUVdkE3i7sxhC9F6yUSh3BUq",
  "key13": "49nFZETgV8AGt31HReSAG3WMFZQ8eXxmrGrukbC1vpzazxmwzMyt227GWsLBpwpZpXW9Hety9QUiiGPGoXRb1TKQ",
  "key14": "5E1GpBSjFxgLWfEa9ZmCz2L7pfL2qeKPK83HMMdfzm58sFrJzEst5u4ZqtQ1sSBu7UxxBnkod9pG1TpZmB5bkcPC",
  "key15": "4VuamHDjZNfiKwQAckpd7ZAHgdf8VGXEaCEic9P7mM1zPWWXSXoubJsdH222sppzaMsewvdBCx7yehPCrdjyw38x",
  "key16": "4cQ1xuP2AF4yamXqznru1AN26guUyyH2xB9qs6fpbumTnU8rKmjj8aCFc3M3yqpBZ4YsGYCdbUDxUs8srJmTzTq8",
  "key17": "FRB3fuPH9VJ7VeJzEVFQ6MZqvZYhZpLTc7osADYJ6CEwFL1tetJtFCVV1JB9v42XDJAneCHYMP4H7WyYJmunJxX",
  "key18": "9w5BbzsNM9WScSGvsx1Xws9CDnc2Q6dE951a8WWAkg24zrYh6eQbGhm4Y3UsyWtEHx6yABpPKPrGTzT3jTJuc8e",
  "key19": "2Pv2iwyLYCSEDGPZgmPZrXxHav4ZSxLLCeBUMPmty56LpBgpm5Me9dwUWcDCfZy4SfS7MGpmgZJeeCdY7LcWGt3a",
  "key20": "5Z6mJ6fnbtiHQMYKYoPw4xgbc1AHyNggN7FRw3WVoFEjdvWRajyQmmCtL2EVSq4shQCER95Cs6Mpin8qibF9VEmx",
  "key21": "3YukiREbDeaFg863Jb4pbZXFNngk97ziwt7a4QGbyTe1ZUXetrsUiS2aMynpo44ZbagrXZfdxeNZb65pqNibpaJP",
  "key22": "ubNUeuFMiDi9Rkmy8xQ2LaX64wQmTurmgN8RZff4mweXrhYcWuc7RuxDTspM4tFMEfRQ8UDRRp4LuCbK8P2jsuV",
  "key23": "3hYxzrgpwcUm46Pqa65G6xprPxDtp38TcHtMmLgnPvYGvNRvsZfKD46BE1N83NBPgLoiqNQG8fYKSd17pbFQ8pPV",
  "key24": "5z21xFqWdnNg3HNrb7HaDRTiFxgNCp8tgxvWAnydAPDsPSCG2gqHEEG4EZ6mGxvmJySvqcqkfGzHpMrRTWCXe8Nw",
  "key25": "3r9dq1dGZoEZNKjkyXyPV9SVN2irReL1UygEAEi3SZnf4JmeJynGbQd6gampcvyEhKtmmBH1JLLHAtHGTJsEGf1P",
  "key26": "4vx2J6H6icHAcjASKWUmBrMmoZD4hnTQ7EnBwvwp7dMzb89bjngHYqRsYHsasH9E1xQN96a5TfrHsRdgyVTvLngK",
  "key27": "3xci358mUjqQ4ZSfXQB4JinKXYCE1A1mHnJgQ3mVHuVzJH6Ww2QMXjXy4aeZ4AcuHjjsNMXvCtvGLrrgkXajztKJ",
  "key28": "3JkdoXFhQSp8VExZkhjshcF1bb6WHm89WXdG75peBuHtWv3pvErhpLakxKeFVjTv4WE5cerxkiaZEsoTzQCWmVft",
  "key29": "31V4CEmUu7g1c2QPtfbMNQo75JXbJ9GmWN7CTDqyLBhspj6g5YNMUaydcEFyxye3ZWFvkaVqJ9cA3sTTtLLMHr2i",
  "key30": "sg2qy2BCva1FRuh7ef3CRNHTmegCEWyLAgY6Y6cUGPg7uhbmYTARgYpQEyBb3FhXqpu5mHkvTBXnzEJvzFurTBf",
  "key31": "3aMaYyDhbnTAxwCBaR5onWXM28UgXo1uYBZHmUGdkgcQ5YxHMQBo3BmNcCMebRyNNUXngzRcUTN14LAiUGEyiY3w",
  "key32": "4QjYCHVAmwkhSQhriRjcktbMvdCcnsjDZDMKPbzPxDQsnQNin8CjdNrxu53iYKZP9xVvBGH3nM15UhTLnxHybnuh",
  "key33": "27CW8YaRgtRetsLvK3uAaoLauC6UVE9K2xgRNT8CM8xz5HNampZXGqizkKkd4PEeZY773F3WF5fkPBxAzKF27FuK",
  "key34": "5tJYkd3ZWb6fBRTZK8XQiytdeG5KMNDiXHKxhBhCRoJMabdB6y9dNoyQt8PG3vWggxpqesG7TZQ7KKb6dNhfS3Px",
  "key35": "wk7x5U5a4LWaGcQ85jj6xtQjUUUj8VCCAm5yDwewthGTGZeZ3QMEPknxJJFYRJLhXp2bs1SSTvSiYJW8qZbkHrK",
  "key36": "2XQDkiic5F9pKXeiBJq88o3iBrA8LDWgftT7FJRPyQ7LVVtRNwrmHNxTynPSyUQf4cBzVPcngzyxNBG1uWV9ZPWy",
  "key37": "4JmEKwDoxfoDcTvtPnR2YAeqPb8zWDPhaLWXq4LBwKAVHPtbbtZAjPenEtT9V1kUWQt92FgibhSbw87MfdHCAhTF",
  "key38": "2VEW9dnidYQyUnjmpvTECcvddEfPsc8vAXbckQJfhtSe1MjHXvwFbhQXPkmN18tWnWvKDcbaMNphBUBGg6c5YqxK"
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
