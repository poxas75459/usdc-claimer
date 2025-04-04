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
    "ivjSWPDacQiUN2yLV2Rux9qWK3j4Dms1WeLCHLLksyNWYmFun56Q7B1MZ7ZWRsJr2N8uE9A3TyGhi25tBYGZQH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cfp7fcJz2Ni8AWvkxryDQ9PaAdJDtudbJkWk5gJjc2pz6LThy8mKkjLFE3PySeFPshvvLpfdGSjkUgXLwMJdgAJ",
  "key1": "5wStkZhyKQKxBGDLsrEr5vJCPc4aZYZzqUZvX3EyoDNShA1csrrXNqFrbeHygkCyJYMQFQHt3NihjDiWotoHU28h",
  "key2": "5QCaLb5jQX8tYrqVBLMaQfABKhSfkmNRxcimXXsMAz6pETeCFdAz1HoyDxh7EagfvPjMXNyGtV75nEnw5AwXzGrw",
  "key3": "33txh4aZeYqgLAAbBk4c2TTdZHtViHhGfz4TfTiHAf4ZmvdgqsZ8v1PLPg9XhcawbBihKLjYBzmmDZtBZs6LucJq",
  "key4": "2fw3T9qniuQGfrMrw2tKD4zRkbpsanUGLvZT7WBiszumoNnXYnT3sv5c5mjkxRPLLWPKWcYmdtPGGEViYUYsk5sg",
  "key5": "4JHnUxz7Q4wQDu73G4ssTTbQzS1Jqa4oJZnNtHP98jtkVAirLz5FSSrLmM86JAY58QygMoQpWziXjq5HgrMUqBtz",
  "key6": "3fifrPqht69NPpRz9yDnc7c4fz5TcdWMtHz3bZM9JfpgqrnLogzBUwKawpV4tKCyQYpTSGtM89HHgsLHfg1yJWiM",
  "key7": "3DSGCJjpWd7q3kz485qxhVs9HYUENiBM125ARX6cBHmNi75KKKTaraHZMaHDu6KnXwVcZJZHgUo85pVERjo5RM1P",
  "key8": "59uP97M8qtcCfijscuVqcRMvV1H8G9j9Vqdwj2b27qRZ42asisqrALnoToDaiveX8iZvnVjBMucHmvRGbX4Qobwh",
  "key9": "5B6So7pgoa74qSXpFRrtkvTM4Jm8f5JKnw2AM1MsbKrAaRYTptKN3mbFkeYd2WPSg675T9D928u2Kicyw97JMhnD",
  "key10": "2fYF2NuodoZAnzvJu39RaX2bvznjNwtBWCBmbDdkD1cTvakUTBgEpzgY5vWTtShw54d8magLEhr3LwwGFW98NXuC",
  "key11": "3Te2dbJBQK9wjU3WbgRDpn7oNw3NDsJvjBr6jcgYxTND7M43KXWxM14y4AFixWEbNui4YByu4nvEATHqcntsmQ9H",
  "key12": "5VXGH2DXYnrpTNaYiUkmCWKNxiM9BJQVj4wyEXkBn7k4mbqcExDucCxdbkArNNkPudVYsEptMeneDtyWFFvzQzVm",
  "key13": "5bVP8qpiZjh4cdjK6wxKpDczGHEg8b941EMNfErFe8Gnb4uoZwyA99z9Ro9iJJ5Rfif9jN4oRvKiyuNCHXXNLfci",
  "key14": "2QyVXc3MKRAYyUDyei9iu3cSwm7YiMNAQyhGxwBBQ6U1TWUabdGZznsgGgufNcndpMBty2RiX8avUVfgfKsPxebh",
  "key15": "2uWF8LWVSAm3VbSw29ibXn9FWbuvW2QYJ1uGBEKC5UMgs3uCpH6z3knhCnx5oJdiw4SwT1ECR8bg9j7reHiPPcE4",
  "key16": "55xb2Pcp441pvSMgepexuXVmhsXu9RqABk3KaFpER2F9X1vRWjzqWG27BuMpzZZ2efrTtnkGtDBstUcpbQgSt7uY",
  "key17": "4KUpxSMr4aFMwhjeu21iefY8u9DxoFSAoStXA9gwqsnVDn5jJF44MVKtxfxKpgcerKnYediSkGLArUPnBwgmkdzZ",
  "key18": "3d6Jk11qvhthbAZ7ZCG7H98FyoNQyQTVHecnBTWEVpxAkYBePpb6tQMWcby21tEYCvve8Au7ydyVRJfsK9doBoaK",
  "key19": "TfuMDG6EGjVyDXATnd23tiA5iL2q1ijqXiixLbqxpPZk9MZBBnmjXnjTKSchQZJ4RekmkTao4N4LawkisHjmhC2",
  "key20": "4R8SXTmSjcNtAwmCnjw88Dm3HBEk8BVJdTees6se9YgGf73FR8GV3UErDF2LhcNgU9Kmfefat1yCypwqD2Bajzrs",
  "key21": "4AbmN123f5ruMozN63YRxxhfpn1iNhWbUrPvATfiL8BA5MZX7U2dNATijdMR7NSFfzm3rVCqxeXWVA7p9Vgb8xRD",
  "key22": "MzxGKomUTRrfKtJ9SmZcaitadnyXbdd55GNe1T7sGyAVHgUWj1n9ePbWHL5KrfcEQTaCY5Ti3uySU252fTr6kpj",
  "key23": "2YwU2vcS8sXHZMgwQEbAtogWo73jbApe3yNwsXdvQwhzKaDrArp59QomYjj6PdPnvmMbpQYdS1gXvDdLNzT3mix2",
  "key24": "4gejABtEcDDKAtMvmXu44wiNSXzcPKmfja8X8iR1Qz7utWdiNFAoZHRPiSj7cHZXoNHjS5GExZB65o2UZEmF8u95",
  "key25": "HESWeygxpQQy1TgK8FGU8tU6B86pdZVhhekjBxKhg4ReFiQUs8HAGTabKsRf98qrCTwJK9zLqUuGr8uubnCqnBu",
  "key26": "3BGCyMnSJRFygyA56yAxkB5CVxpWKFhktnuzVrZPLiKsHcS8p3o6RabF5VagvLoyfJoUdSX2Xvn4yvtqXP569s9D",
  "key27": "5hzNy9aLNPBPUAS5EvUaoj9A68x1F8kefxFYmAauNb7yqmdjAPDGyQB17QWWSmPe88zQqXsy1fHK5BrxMEhUJiXs",
  "key28": "2QjbK4Ap7ZVfa6is5zV87sMopajdywAWr85gWASBnJmnRnw2eBkoqyXZaCMuVrnPiDkNeYXuyYEG4yJMdtMdkHqo",
  "key29": "2F2eioZiFrZ4GYBk2nM4yQPCHK1XRaDTjyRgrHMtfZwQvd4JjCVAecRK3QZ19pUkKTgEBYyoQgKmbpsqxW5xzBZe",
  "key30": "2NkZXCg81h3FymXMY8w35PP6RPv7CZ7E4YVDSy4bcoUaKDujcZTubHM4jMApJrGr7EDedJXNntJrg1fxxrMzCx5q",
  "key31": "31Vo31c5o6ufGGGmjbD7UfdshKqjxNMmw4wq1YadZn6raKgUDKnc7Emxqn1C4vFAY22tBfBi9cRmSXC8gTfRsXyn",
  "key32": "MaR3X42mGjtsoYBRgY8pKqoeTV1XEohHqVjqG6oz6k4wa7ckVk5YHp1vLk5pt6DDA22BGpYYMy9YusMzHUUcrwc",
  "key33": "4PwXLz1ociyp3FSmr7GuJQdVijmdjDWhAJ22CmnT8Pvad3HXRZo6jqUFRF8T8pUQf9aqFSdrY1qZo6oFoAyscRnf",
  "key34": "53Y6z9FF2TyZpiA2RfHmJeswMRN6VAp7xZJJbLRJdDgRB9FdrjNoxjDoA3EHFB2rNH5rBnCHtLTLJ5fBXv549yL5"
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
