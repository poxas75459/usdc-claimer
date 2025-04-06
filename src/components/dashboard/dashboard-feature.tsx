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
    "2oQtGKoTXbP2szWvX53M4MaoyuQQ4G5WQuCyJLAVDAMg6dbFy36KaDt5RVo4sFZXns5pmZrYjsNgTe2N27nueJDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqYv9bvdCiWNinGr5xSgSM2vsaPvsTVLuCmz9FdTeEsSocDUn3xJdCooAwxbShUGcVaypR2NRzDfJD1KFa2CV74",
  "key1": "2JxHt2nChkvmuW8J2gJAasdDddo4f9BZJBDxG18iXqJRhv2VaooaiPYK255jnUsm7ZsGSUkxtZqYLs5hFbHP3E2z",
  "key2": "28ewCJhju3rTiSYpjccavKAhKhYJsFxH3PBReEKUTu4bWsZETZGrSNYJYJJGVLgpFG1pRhpXhfnNTzEn9Gv8CKJW",
  "key3": "27dJwqjPniBExja7keMJvRBW5KmNXuuk1Ezu92BEkRU6zQ4NZvr61iTJBwipk9QTUQPTnTGGNWvmApYcGQMNM29W",
  "key4": "4wXUKP5aR1iTBJBqgCEzGrCPCez2onmj9eVSg5tsLMmK4BapJbdTwdZKVhmyJzGJa9y8t6irvS1qPuzWVURHo8h6",
  "key5": "4VHSoAhpu5K7tGCgDgd7pJhBg7SFt3s3QqfbCDpvJd2q29SHHpoJBtx1BHMBTYyvKVs6GJ9k8AHouJnWLgwPcNdA",
  "key6": "2dFfUVtg6F5KUYHuXE9RVpYaRVjUQk4BGaktEY1BMKnPt731wwJvGvxat22GpjYy7dKHH4TMCeLNKoAi6smLpHPM",
  "key7": "3MkTvxwbo2LCQaEWU1HGuTMVY72mjDaa6KvxjZhQfEngb5b6qTdojkhupdVwYQ4jCYwxPmw92S58CeE8tGzbHDDS",
  "key8": "5T8ZE9c8fSmKWsCfmu66wymn2vfWDJ2WGWWfCn47agrqxnycYFxeBnJkG9VYUkt9SrcKtdKR2LNcoUhZE2ZRF7fD",
  "key9": "5vAPE11EyMDFayHUx86NXyuhMNJWRJcbJbJB7woEqHsyjPbRNuaiUeKBW5dvtwAgiUfUw65AouAtBxKBw3cp4VQU",
  "key10": "MVvVBocoN5VUePhvUgi43si8iN1BRYn1zkHQJCxaw5vZ6q5wfE2F8ybd64kW71q5wrFZTXX6S93UxkURr2dL2ZV",
  "key11": "28JmX2JuLEBGyTEYNn4mTgMw7pAM2yHfqMsHBuhGfDUViy5L7WiKKvFnFVxEfrEh6DnsBdYCzXxdagF6CECXtkrj",
  "key12": "SkZ6dY27o7L4tinnELTABkoLBv7ts18c1hnpWn1mopPFTF68A3PYbRhJ9Ermvw2iKfbhvLKt6QPVCgfSZDHFgkv",
  "key13": "21maGLgrNszi63idKafewqDx11K5QbThibtekGymzg3F7JUz88g4btURhKTiEv5FZ9et9kjAP11hYduV8xJ2G3an",
  "key14": "pBegQQ6uZsYESqfYrGk4hLaxS3EAogof5MrYexsoAvUcRQvqgV3pbns6D3ChfVGcR63TW64sPups2FzAY6UbkYt",
  "key15": "3u4PxoJSHiJmiXrVmNeaR8a9yQDtcpn5TXG77ujckK6HH9D2D2k9a49nBMrczS7UG2G3yggEkXBsXvBNFRNhAeaE",
  "key16": "5PL3ef7hgLXjKNJJLhJS6dsJdyf2oPXtQK6fbwVXv8DRgptHMMgv1dUory4ayoQ3iNLxjWhA6Amc3a4edkmCYjaz",
  "key17": "5672ssMuRtAhVQhwJeJ63KZEwbrxjuXKZrkp5mB7DK7W4GfyyMwQ2MyCogXuwSPchmoS4h2Hv4HWk2SWF8KTKsdJ",
  "key18": "54VrFtDAZTMSAANiKu649vJo6kr4dmMmz5hmVeabjqvcPiptgypqGHhuc8hryd8a9mq231ZH2dzvjmddiwPAnAMC",
  "key19": "4hvaEF4QRtLoCLaGDcRJjFUjoKa1RBndc2WurPt2uyPiFBJp5PZadWfa1LXPNHN9b23AkTy1EAsRNdTeFTSUjbU9",
  "key20": "MSNMC5jvAD8xpFFZTKMuyuXSc1sByyd2u5gsQ1PVP3qw6ZHk6XLaiaAer4F7XXwDkLzVa9XFnaaiDxs3mBzkQ4F",
  "key21": "2oT4dsr9jePjJyxvr9NMYHiamtQ26SsFEtZFZ5RyUnpCsDBsC1e3ptBMk8suayDKHKTEKMtTkkrdV3c94BeUNTSk",
  "key22": "KNVNVPLPFgHj6mvAwip2E2Kprn3U1v73XcAKirSE3Qz2Asu2RMsiyuVJNoD6jfcirgQykiWTE2AnN7GmTAdJwiR",
  "key23": "2bkguYNEiXfC94gdRsaVy87oSsx77GMeURXXMDWg2esDFs5VXgHUFoeAkAPUHFJbknXsbmn16V7SPRm6JSZB6TLk",
  "key24": "2RGgsj26j7Edx1PfSLHqE2EdwRBpmusFHKweuuZrdci1NyFzgwnmMCnrGT6kCEVCao7DQVvYFh6TJLL4Q6zdegNE",
  "key25": "2Ru34FpbZzCvqu3BgzyDSxcLrZZtNsG9WFtqg6kRbcDJxCgQbNWr2nGT91mn57Z8bQ7BVSvjSv1GVvkDmbMrm2Jx",
  "key26": "2ojSLNPhaxzcmjsE733a2bpFGbdLS4xDS2NKXP86qjkZSenY2tUpR5QmefbbEWieaFJK3avD1KLvkPicun9WNbwJ",
  "key27": "4pDs8vfTr1j7yheou8DSciuZgYQ7qT6S6urUY3MrhLCpz36Wwf8AaCfLg9bNZZV3FdxK4VQB2mhE4qMXiMcAMgka",
  "key28": "MG5TLakEpH2ZF5qFzN8FSJazekw6kxgQGGSivfuBM1JmdJe8pyQhMMwuUNBp3jxaEgVn1wjGVcR4uV9NvSF3QTg",
  "key29": "dh1ZLUfEKXXLGiHaAyBeyypBmptTn8eBMsDZv5VxRHVzFRA5TfkNWRgnU4MueG45KpGnEVrVjGaJwv4rmLEqFzu",
  "key30": "2NhEQvePPz8NrSDF4EcH6qrGhnhjfVLGuLy3yreow99rSvengJUPhKLmF3UzEFk2AHm5jXMNyXcdzYMQSdWWihVN",
  "key31": "3XgzTNnejo73vhRNth1QXT2Vas73cAWu93cqKfYMEB54X18yMDHBfshj7c7tLvtddGcCqcQ6YqxeENgddPhY7y8p",
  "key32": "29r9R6hgc8ZVKx1FxPgwPEVVA2bXSWHoCEGocZiUnjx3awRpZe6rzr4hNuwpe3K1nESGbR154TNF59Vd5UpxCeCf",
  "key33": "4T7q6E3ChrJQ1DfQNDTXU6KEjV6qWwrSm32qT5anu7gBaxHdzEoQqWhyrvKTnwDjxgeYQH8jHQh4zcCQUwLA6PzS",
  "key34": "3e9aDmp6e8NdFSSye9Tv1bq8hdsfqDzJL56nKzG3F29oSpH5dcZBA8SevKWrXHbGk7gvgEhznGGxoFL8MbyDMKQT",
  "key35": "AhVrUvqp6BdAqTNRC3BeoNEyP5Zrk5ZfGZE2nQcqKEKonY6QPVdh1uQSc5o36S919kLoVMQy8c7P991ox9otA7F",
  "key36": "2ryjtq3nmEnNUvGMRNcdxwfUREKjKz7miyabPYGWeZx3gcagDSAE9XQikfJJNPA8wE4EP91dgWXK9HSgxuijrour",
  "key37": "3dkej3Rg5ksRgKhnYaP4buQAQ9cTSsW17pVfYjyxDXTJ6rKjbrp9wUv7DTR8ukkBmtFDALjy9K9w5685nWvb3f4G",
  "key38": "2eUJuFKaBWUaYP6UQ6zJpNuR9oipEF5BZZt3acefiFxXPsgLryYaHuNadeWZ3B1rSp1FtNHzEZBCtiYoHgv9McrB",
  "key39": "2LusxTvGqfaDiBBYuz16hjiP1tPqZQMZKq8ckd8x7KqdeB8hSexa4i2EyhrVVh5rn6FwEHCcZc4rQbWy4MmwkwR5",
  "key40": "W3JFZuXaz6dWr5n97xvKRpN52ngvyMwPQwcHE7GfYQTPBtuZhXYiP6DrSwRky1BQDKcU7x9yyu1CWBkenLyptHV",
  "key41": "3o5DxhZ77t1HyXEovGivTuY1W7rMmhzikgWpNDNk1nGUFC9zMqNybaeCek7g5obzLsGy1nuivEjxqfuSEwKAvy3F",
  "key42": "41DLKKmDWUyQUgQpmny22sjs6ZJVo4G5iW4TJUHfMWBSQH89UG3g8YHtAe6c9bbWSKFFFc7CNXPsX4pXtF3napGE",
  "key43": "QnZHuMvgJcjHmf5a6RrLYAZQL7sWZWYwwQj39S7pqBtQaGnzcJMS8F68SebmHTaDmG76tnngZDuSU9oySTXkVDF",
  "key44": "46nX4UJyJE5mh5nYVrjuDBPtfZiLE2TWSh9rGF3pNEPVXUXL3tb8gaHvh8UKF9ocmmywtCRHdfLbokdkWpe6u94s",
  "key45": "4e2cfNe3sU9bhE2yfR2W7tppWsbVXJxVsjj16L7ZtsC1PH8ERpQxZHHRHry2xMzaiU97B83qiJkrk9Y8tUrJSUcw",
  "key46": "3Spe1VfEFSMMdDom7X2SSoJDRKKYRjaQS71zQY8gL5ixjgojkXSRGhp5CsqqLs9j4zqfLEg5NiCbycVaB1Ei9Ue1",
  "key47": "65Qq4vBFWXjPoHvjeTHCzz9oGevtLqoHZvoVmBopLoESHzqanEoadAzDWXcdgaaTQmNAwetHutb7AxwuGvpzxZXt",
  "key48": "4yg7MJNaj8kHzd1fott2giQr1FEezg6ZQ6ctExvBUDhhLaFW3ztXsSn2bySjh9Q5DStJmVV5We8mXvu57nETY4wa",
  "key49": "4mj5nLM3yjip5q5apSWKFXBLyRX5GsL9VCi9h6DpqK9vkMCekFJRWJqLSBYRz2EE7qZP5D2C1752e7Zo1ZDBYVMj"
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
