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
    "3HvAYY5YJryNshjj4dPtNEm9mt4oJRAGi522vU8yEq4En96H4ks61tTRXhrVxoE1g442xFCifJgR81pJqzMxhPet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xsziX3vmeZqM4YHU2mpjNUc6xfJW8C5YYEmEDNJGYVVrMycoK19HPFQZ29QCZBuPSatLhtjUPJ5f5ArDZhyWnnd",
  "key1": "2ZhHuNeRmHraU3U2AciXMTu6aEqhm6g2dbC4nZoGCXMBLS7tggkAemjKWHAhpQuD87RGU3CUB7jMua3g9hx3ikgg",
  "key2": "WFiqu3nh3uQiXUsMyGSZpzqHzPsDQuUX81Sx3pTYuR32MoEX5USe2X6obMo9cFVrLZrwapbKUwq7XZUNtdhd6L2",
  "key3": "5SD8cqKF8SLnszLqRpr1mm5NZk1BNgw7796rofZizQfhnYSmGNALiKBcBc6RcBZtomPzvZhqJAQmW29qqm4ZngNn",
  "key4": "3F3DcVm3p5EsKiFgCyR3aPgxrBooux6zL7WacZrQ9sWStN2xwfe9jztrrPVZn7pUKdwXmBc1shZKm6YscoCgpmjk",
  "key5": "4mFAByMBCxHaQm2C6uZuwUJNCwpJLe6YfdBUqnrSb83wFyb5ZRaBntSjjMGDsZVBQTdCbApKj8go72csWNQFr9yc",
  "key6": "HMZfXpk7v5ak12twuH7duFJ3PhC8vSR8M14ufkGHEsK5h18JkhGQskCKLXymzBm2mxmg52nnL9j35pYA7UqZ9uX",
  "key7": "4smHoHHPKLFdiR6jaXsisbMsZKE4jTiK1nepG9oh5JGrVQG31xXaQcu38EBNwe8Y1hW4UPdSQLrJqSfh8xhyW9xF",
  "key8": "2ZbXzATeATHuSDDzKNZSx7i1B19VPiiF2QWKk8NaTkg72Pu1o5ZAVAzaFhFjEWmsgdCmegQDE2FQq3uQdMGW2UXD",
  "key9": "35ZH2vbWBcDPSj5WYtKhhfCpCw9QtenhZ3gHRS4qU7LWwMtoqeedPNHjb4BTSFFHuHP7F57UijzHPydZP1UaddM5",
  "key10": "5BQ82gea3TFNYpwaa1CrAWZGpiFuZWNibeDPebauEiErBdwL9LwZukQ8jAk75umD7br4AFDhMUZju7TnV5YvRwyB",
  "key11": "4a6EengEsajFKf5ubLECL15vHs8Yn34yKNXTHzvErz4hETWxjegNuaZKk14VNuaFcMhbPinfYzVNTAraX2fMpaua",
  "key12": "3wSdjixqqdZ5czhkqa2ARMq9YPetEBUr7Xp7KNrSop4XW5zWtUKwvkXM7wufKfPzHmkdDsNwfFtH6eGKddmFzdo1",
  "key13": "5BnpQmpTwAtLMdrM9FuTcHpvaYmnLvkhJwQfUy8gykGhamUrM3HvDzgBQwCpLFPH4wR7woQRjEVRJcLcjSNdJHCA",
  "key14": "2VqaBcpswW9BQrxNFF5sVoC1a51VKxz4Gz2wi2jvZx8TpAQ1iipHnAh1ZPZ6YDJwNKR7Aufm2VsKLzyGbVuxomvL",
  "key15": "3psQn249gdVKLpGnvLPe5gzTAhZ6Xg3JDBf16RQ5kjYfsLx1H4kswenMf4wB6jegLWtGXMf6NWYYTH2JhLN2bGPb",
  "key16": "3RVUUfcf8awmiG5XrNKKyoutnL7SfCPcR76TMPjhvWmKguamWrFkYZYTRyURbEB5qB3XjC1jFFnJnjZTTtv5UWai",
  "key17": "2wponmTQW8o2HzYfoULPZpp6STSurWroW1sBXcjvrpJUV89fuvZXTW1uMAM9jTFUpZ26cGHBzV5mAFHe39PSWf2f",
  "key18": "5HeY8ovUphpHB1nKsPF44fBFW21k7whwg3JfAw91GyLauqKJGw77e7bxTHtGv2aLWxzJkAGG7LZZNtcrwC46HmY4",
  "key19": "2Emk7u8n8hCGa1C1e6DfyyDxzemqrF1Mt7RzNyw2ERsCFFCMQUtK1xg5MRvJiFhAVVEVkTsYLrETd3C3gUjB4xaw",
  "key20": "25CVkkSVUQ3ffEaFHn9HPk618DmfCkJjLD2wqhKrFEUDZXHaBXQZvNj2BuJvuseJYzswLuZ6FGjsvn5XWy77NDJ9",
  "key21": "W59AqYG9bgWzeAuDHtEkdRHJmCAizExe68MNgErmngqsXHg6PvB1Yw1rHAgzVF3UC4YBNB7kaaUsD9n28wtgk8Q",
  "key22": "MqRE4L3tAhZfTjTn8e63pxhX2xkAjuS6FcTQC5q1cjWCJF98fopuqpgMVu72aEwobhhYTvpS577jk1qo7nfdz7g",
  "key23": "51dJzsGDWPT9DtjQ31EqeZQGvGE3JG6njYX8kw2vHfE1sHU4WCErpkk6JemdVAx24Gxg5DM141XcdcRSAnXsthsN",
  "key24": "4R7Lf9Fcj6JiAtS3tVjfZahoCGfSFatqcUNhgYLkG4i53y3FFgreReXTMcp2RWAEX1W32ZcXpHJPQxUMSQf36H6x",
  "key25": "54csdaYf7PfcHUGpWMCG8sXNPPTiJVfYiMDBzdcLXqUbw4eUW16jwfucojjfN4oMc2PPafwr7mL6Nn4Hs5m9XrEV",
  "key26": "23TdC5CSehyPuEN61xf2zWFjuEwNySAQBfUoKw64TDsidnLRtk8AdR6QXGg7BggwyKtSMktPtgmc64QxaTsw4qf3",
  "key27": "y7s2Pw6Bh1A2Dyaq1hGYUjRE85JbM1nbhyCrKPkZcA2R1SwbUu8wmeGq3JMMHYRTJYUZDLocS9eMCuRRoCV5yqj",
  "key28": "4aqMGcigZSpeW2zk21bebTFV98Vk4Qa91MixkvrG7ng8se9D19jU1WjNeaDmbodYHTwSZyzFH2j6GFAfAMeKJ8QW"
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
