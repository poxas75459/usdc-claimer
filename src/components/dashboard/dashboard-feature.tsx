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
    "vux7Vr4sdX5C5tQewdoexvW8t4isJBPtSsDyKbA71wNEFMbG9exHAeA1NUHdLVBiGoMoqek5LtXuwjmqd2WZNQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KGj1SHJmhpPxDzhJMXPnvxQvRYykvn2cHzfs9Sj9LBdDpDyZP3DDgC2HpLbEjvK9e6vb9WQS42rakao9rRfbScr",
  "key1": "2tXdwqAQZmpt6RcnxBiwb27pg637Jg9MpTXLoZ6HWgHMijCc2qC7tRph2AyRDzRsFZNYcp8qNmzXgNooqvmFYeTv",
  "key2": "4xeNzbFLoJwUCVt2rVu78YnDwfvmCPHPKfYHrcBkkEGtLbvMBacauS69hjV3qqAA1MD5Mkd9w7MxDh3S7oS5V4Do",
  "key3": "3nWkCtRGmmYXnhjeqF13vEX81xzpVGXNahabQRnsHfHckJC4xE3MyDkkBexohR7ZNqVxPtJbpfpAbwsRyDAAttgM",
  "key4": "3Gv18vkDxeaZMyMybXjXeNw83XvPgWLbTTbT1QN6m4bQU6Nvd4Q2VBfnd221JLKFCKRAmW1LneAu5hceC3VrmWv7",
  "key5": "2HaiFHrCPJ9Trt9B5hDv76dXhQwseh4i5oWBYKBroxi1bwEa7r6hKgeYDcSR6eRbTaTRAWwj34NNNPK76hbyf4FU",
  "key6": "2CfXKLXYbYwH9KCU7XioadshMR9pGv9DXCAStAUt9absyYa9bL2yRQUSQJpMKGBgPG1KS6nkipiFkuBny4Cy3zv9",
  "key7": "2iQ1n1dChGBUzRvxmsnmczmTGMRqgvQY3gn72yKJ7YuqaMDTkFWG4MYDpKCMxJghpxE7oUfGkGd8kdrGfa4oNASV",
  "key8": "3Kz7TQCU2qWeRhWUHSFqoPCc4mcKSVC9FJtWBiFqniWDysb9amQLbxyspzLJYk8EjtMGGHHJjNzwKvg9jawMYtdT",
  "key9": "5ZAfxpHWMAWqWWNNDkLouEApwafQXSqjEb3ebSDgXwGS741euN8bZc22s7GWLtEynJYErsFF39mBxSE8MRQ2thVV",
  "key10": "2dkJfNgEpF5jVyWkhnWqGDa7NHE8Zg3cXJtdCconRt3pF88jUa9g8kxT3xi1yeDaVhUE58AepJUaTEuL8K5z7fm8",
  "key11": "23Tjakm9y9E5JvPcxxpLdJEZ9L6nk8cpGgcEdx631kuES263z3YnQJ5LdLGfn5vetkFoPbtjMNp1uMUa9ZJzMgXh",
  "key12": "39zgZUmF8zQhRu2e1xh3jT8kDCEWzcDxTSarejX69TQSSPhT7PP1KPx252GuaSmbibaSG1v2swZudUuo8D8HaYwQ",
  "key13": "3KkRMVCmzjT7ieHZX1RSBjmb4Wiktds94xdB26BYEmpziRGSDgWQUzUvTW7Ddu8sVTC9YhJ9zNVQFM5QYdcyCAX4",
  "key14": "4kbdqr76PxLE9FTpPvTzjZxfMsgKeSt8Wr6cNobjCS7UvpzaP6ANVRM5zC3qvRBraH2vvcTQga1x1RqL1EvDEU6u",
  "key15": "2qZn9CimqGG1JMhmESzkD5NWkbAmM7CCiesK6jW7sfYHWGrvKLi8ttiKaFMbg6xCYBkQ4CoQjLy2sC2eJuCo8eaQ",
  "key16": "5kzqfNn5e18BxJLLQhNvR271jJH77CzHHaCKgsfJK8Lrtg2rMR6jGZbz56DsWXHGC3ku4a6mhXo4ivj84QfjKUjk",
  "key17": "5C6f84UuueEAGby2YCDBSY84cNorkBGRi2GhqJt2bJw1EWAFTRR8rreMmwhN8MBkufmtoBrH4jApkEqvNvrFcdsp",
  "key18": "Ncsvkni67CmH4Fwy7WiKmGnCmW3yfF6CTncLxm7K8NJ2AuDc6Jjx3RNkMN2dFuKqVwX4pt8QWQVXSKXuEx8pjtY",
  "key19": "3sSzvkH59LwaG9DtV9PgjQ8WusH9Gs6RgcycEpb27w6Eq7n2gSJbaGvh7YQvF64oGSxwwxnUi1GGRKLSXz7zZgKF",
  "key20": "3uX4TUCTxMAu62ZbSYZhUVWUvwtUwNuiDUzfU74xfG3zbDNusCUFGvkFvMgAYEAWVc1J35eb4nPSRQVFxJ1phh26",
  "key21": "51NkPF1Sm8hSesrLjr4YUSL3Zb43UJJLKLc36jmq13msko1Yus8o79BcM6QQE5i9JYdCY77hZ5Sg9uBvKRvdHrur",
  "key22": "2KsT9KYmTCdiZEoVVF2iEnFkwHdHoEj2apSNbwu8KjgDJH7KJk3eYgJWse5dczedKdDzP6qkZFEiuJXzYinVcPUn",
  "key23": "3WWhDaak4dQb7SaK6ubYgXPcozu1xcG81ihD3PaJYCFqKngDGzMdctuCq8SUNpr1Eun79XfbpoXwoL2A2tzT45HT",
  "key24": "Dz7HQQ2fjm3GNoHzLTMJVsV71iRPnmGtQ1rayNa2sduzWNwSLonu6PksLniziLwUZ4XCpDpUtrnVeoecFsTajTw",
  "key25": "4tXq6dNxZFSfxKoYRsB1A6EDYaNpZ5tJmm1LSgUKzNcj2m5kHiyqr7vKPgZdqeENCXFCp1mFaJKSMbcfHbjtvPB1",
  "key26": "UUKPyubTcZg3T3PWqizY2UpTHfQxM8yBNKzmte447Qz5M2tLjuvsvopiF5HNhhszyYd226VZJ2jVtxXTvexEgQF",
  "key27": "53qdCvHC4nSbsarx7AEgQVJ8kHQsZrKVCRguYdeEgR8FByX9VrQsSphVEd5tFVSeffquibxz61SffbxAZWmb6Kbw",
  "key28": "3oPKKJX56iEUVyd3rXb8AX9rytVYSi2RFL27uQoNKdZa8N4itCm9doDQBdxgHXjGdWWUQtHe5KMRywmtYPJKrZGP",
  "key29": "47ZUQ1FTzTAUh4upYve2xFz1aDw9EbNt2yhfz9RcSmLL6wibwWX1oTZFpCEKVC53Ybrfbqt9fRwbRkwDeHJBe6Wr",
  "key30": "2EgLaG8gpDtfypDeyg3WrPs34hSUkzqiGpNoDPK9eCehuPacvM73xXWb4RXFfCB919cARZnhH6Je9oxWCRCqBwsM",
  "key31": "4dt9uvP5kcQyS1uTiYeDAwsntbdccuL8akk3m7RiAj85GsDJVJDgqD7jysesMhtKTTHzEAgpNknEzeRPYtL8yYVu",
  "key32": "4x5KrxNkxtLAcanhTwrvGYYgiomPzzBMUz3AYSJZhUnoCdXGhhhLvL1Bv4ihZDg93xr2wKbutYS9rrRtgpnkoFg5",
  "key33": "4Bmj2hpBgQRRyvtj8PrrVQVMNsjt6HTqyfoRBPH4dabc5E2EUkCeoW6U4Kqdf5btjtF8JyXgDkbia1bBAgNrkRkB",
  "key34": "5um1KkNU1pmgP7So1dmyTd13mje74eb1sU1rxHdKYoaNTAtDSzeVQmvAnd3dp8Q28wwYGEpVzP2qKco5t5kTGSwt",
  "key35": "3eizoj3t6ZRBwxbBwx3AbRwarNT5FKezFdkziMReV7Bi6p8SQ9NkQVfDJpa3HXP95LVfLyD3nTkjTYTh5UkhCUXR",
  "key36": "4fcNvDZtLhMVmXzooEqkSbdA5pSV9oFdHP2NmgXarcXjVUawUJQZSb6dLMvMQ1iAbwgrSrbS18VKzncXePC4hZsq",
  "key37": "gWm1jpEUfbaSRbpsKvLZ2hcmNgDosD5qR4tKk3Wmo4BzKZSnRHpoiG6gUDVC3ZfUcwHfoveEpkeLQe4SFvMHGD7",
  "key38": "5JZ89NXfbRRDNixAmin2KPTqG6Pqo6WDtQq5EdPHicDK6mFzTTeXZQNLApinKPUmim6Atm9GjfdAe51nbJukbCUi",
  "key39": "YsYG2zVXZPDpDXMj6ziUvWucu76bZTsx1n7LQEWfEDWSCuXto1wxhm7W38CSp8sTxuWMyxHypYxtfhX9NtjujZv",
  "key40": "5AXFwR9wQ6yqiEc5S26nDXB9g6YVBRB9fzJsZEhNADn65985gBij8em89vx5GcAtQAjjckMQX8nNRTJcW1G9QvUP",
  "key41": "4dyFrSU2H9At3bUrXVmfhkCwet9FdNAnkY3YQAaHg7auQDE7pnEYmAkJDTUy8kqCtykZYsXQfwgyhpSvmxuzaB7U",
  "key42": "5NkqgfaJYwhxogXwGKMf1xLAQztWZYDzz4h4WLQJxff25jy6YSsnzMTayMZQHqDhNifgokRkUGxbmcbZSXQE9hQH",
  "key43": "2PPYtoFKx3AehbbUBCrBLYUo4sENerxVKfbhAW5a1sctB1ZP5GXUcK62bwtA2qyKU3mTRttuzePxNuCuRXH2zjCS",
  "key44": "ruaJ7UCaWmZ1ji3TiMyPoZi5Jy6Nh6qgvQgtdaw7TUzeTQqaYq2FgpvzwEUt4CoPQkZHY7WNDcDKn7KgdYuN2fz",
  "key45": "5LLpfsoJsGTjsSZJaoBCb4PvqzfwjtMRF1pubt8mGNNQXnJNEK3L6DEEYEfCut2GX6VKTpoUxoTK2v2PcZ6okzhP",
  "key46": "5egQ9H9xyBpAbTiYadDqEiVnpjjpr4cJa2gErEbCryykcg9hvTecz6yKqUgU6yNy9YHdFdU6Q7Spnrj5FZ5W4cKS",
  "key47": "VmLqi3wvvDSB2GNrtp69UvCKvquueZzhCxEASbS3AT6AX2QJ8GG6SiJHzdfRKRhMm6qMxMo5GxkAqyqLorH3vE5",
  "key48": "JqkuWuVmncitaY7mnmBpZzihRx8rgUkdWdFkMveaPaGvGZqfpvpTZykLcRoejTkmKG7Z7azBk8NyW8oW3hKkaVB"
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
