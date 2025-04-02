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
    "DLTantsMVb4YJEANVUMefHvMy9Zc6fFgJEw9STPBEduF9kA6xfTRyXpcrvDyDCS53vqZEQ8XEPiUaAxz1BR3gpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V2UrVd4rZXqgF8UcT31StRSKFoBhvvzapz9BHR2b8QEvNXo3tCAi8ADJB61qZ9D38KDRbSf7inS7FRsLcXSbGi5",
  "key1": "22qpq6eG6m46qvdJzzRx54rP35CmLsChZzE1MpBsbW33nsV476MP4fguYsriECXfEBBGm7YRhwsPopPwqorKGPxd",
  "key2": "3wtDedhLr6GQNHMYfPVSwyuVNZHC7pdufUnbeUKuU5zk4vPJJu8yybq12doBxYrC18rsNRHkDJd7iXti7BFLZhZF",
  "key3": "4m6PjXPU5hxbf53dM1HAmJWEwHgQcSY67aX5wba9RqNZ6zHp77CnUwfqo9EKGyvMXXVB5VfuqGVZwhEe3bLtUfrq",
  "key4": "3rr41cCA4gyvqHcNCJQeXp87QWXxGAh8ZdbCfao3GMZUScpKqFdKaW9rChmMFLNFkxzjrSFvG9r43J3MMKQ83yWX",
  "key5": "61DqiAvs7NLmtkXM3iR8QQLgRuTdJ2Pnxx8jcsGLy4s2cMxdnG5ywS1U24rV3GBAiAM5HUrqj9cKdHceiPmudPHo",
  "key6": "2JSmNCQms7qGng5FQFBUCrjXr2DXYcKexhYaR4ZS9NrUQLixZJar4Jr6FtGmqYiwgDkJAXn3GYTAPEFSJNEvbgDc",
  "key7": "22M1UiZLfaBT5g7f55fsJsyziXsUygb6VMMJTtBWE3t6jCa1C74F6FKoqviixyt29mt9Dxh2nqfLsdxfzHNdjScw",
  "key8": "4Rs62dRVrK8P9MnwWw1xHaU6P2XfgtJ24DGAZCp4TbGa62ix5NHg2TqfjDQdv1Ni6QAGjeaZYFzfs6UUB8gdEA9b",
  "key9": "5HK8S4kCrRDqxniYN5kNgdLLBBSLqwPb9Lt8j9XJoyuP2X1a7UQvnKdBBVfsmMr56RchJA3sjc9fsugCVuCCGpjw",
  "key10": "3wzwMLTZNbuArwpDYF9HGWHuYhxsBaCdK3C5V5AkBN9XRihFVdd72ZtEL9Y2GEnZHiTaHuobB1Y9wfd71TiHVGoh",
  "key11": "2oBWBW4cPqeEAQKp9qdR54PjdjmmQmZUZiUhhLa2kjbqsmwAJJKkyd9gnGGbj3EGkr2SUWBEUTFBtivrMjhktqbz",
  "key12": "5oFj4w7trCgcuFP4p5wMmojXe8XTuHY5xRWV2WTSSkCPs3jzaiNFPAa5jvMvqL2fs6UCXTNTmT3sLZjpsvoVcdvF",
  "key13": "3Gi6NSafbxZ6ieB3pz17yNQFTwHwStC2ZCKpGs7NofDckGrAwfEcX5wZarfWPANqn7C7P1QcU4xUZuon16BjzXWV",
  "key14": "2i6fcb3nJAFiVdzd1WLb8ivss8UiSzJnSiecjm8qUPqZmRgwwRfdcWudnQ5fsKPXu3wzAm92urPakYMdiBMFpGwq",
  "key15": "tH5kaa9sWhe7y5wefBL4Y299YMRs3vB4Pz2vdBAdHWPYFCjjWaoM2kbU5qiCf5DciUQ1PLM8RpBLniaEefNoHzQ",
  "key16": "5LMnStdkn1A1XoJxgmNSQbFb3fXQtdBRbWo5ayKnH2FP72nfSfyP7i4Td8vHUrWcz6x7cUWeS1HCUYTWTMLwYk8q",
  "key17": "5rmXyUeCa3iTRcvbwupFCZfnZKPhJumsiURBvSye6qZ9ApAnj7uQHdaknKhQ2eAwZsPnMU1DuSgfy4L9hPTDK2GM",
  "key18": "5SeFH5NiRXYG8oxeDEJUu5e789gy2asBQ1Qm2P2aASJKdLBxR46c91LZCk6pR3weqPtfHNuBXPMALtrbn4yZ6Mbo",
  "key19": "P359vvkw5EUk8Tr41Ygz9WNZPRN5zhizvdM3GmcR7RXhVCeGKxsWwvxRciBHxbz3YccXTYCbJTX4KUk9wmDYiVc",
  "key20": "47CWdiqZXzBCbyQwAKPENf7N1fuRvzz9QcoxhKLq8TCxeU9eGfmyfXnmiWJzxfNmGcgjmG2CLTzLcYgjWjJZsrS2",
  "key21": "4bJ8hrtKW3441FA3xNLRp2rucQY7Hy5zDDMot7UTsbf9WMYB1GHswU6U9VTMduJkFi2VgpeSHNj1khwMagnbGEcn",
  "key22": "4SzJhFmKFy1oPCtH1j7cagotCHBPyNoTvMNXCM37vLgYewTCFevmAfyEo5xxkbQywfScTf93hinaZDb7qYJtsQdM",
  "key23": "5DXQwKaLrA8a8tE26CWQWXYbs6pZG51cuMP1mw3saQPRGMLP1A8TCznXHd82rMbcrtQPQ7Xcnj9aJqoTJNK8qZhV",
  "key24": "BbG5fJYCW6SSssFkFyTQK97mH51ec9NjQzihNWs4wJz3JAq1ZuxyPTaVfdcEeLFtivytvzxgWiNUqvwqvznM7KK",
  "key25": "Wu3uAsKEV166MDGvdcNQTa4SQYkjjGXrtQeyL5Gqp1VSGv6wpJHzFLK8mZCbAfLCTehVZYiBqiHttXeaUrSeVpS",
  "key26": "57958JBjTbd326iziFNevibSAwHqQSvoiSxr8c6S5rpzJVFmMmcRERYkogSvPH6RuW6ytVuihFZxCc4EHnMAPXC",
  "key27": "251QrrTwzBndAeiwt69Pguek8qjUY9AttTvcx6UTPmtDhwkFDm5ii7Ac1Xy8oE7W4M2FkgwLnbfD1dBj33NFvZ35",
  "key28": "3BNzWVqzHTaQim3V2kT63NxCVTZrJA4cdnCZRbzKefqvpoEc1utDMMsY6vjGChoDvPfoj5bZvt6X6mhnBaYpJTyM",
  "key29": "4VYEGT1y7f7QUeRY4c5r5wUhxx9GfJFARJqRXDXrzXs4e6CYXRStRSA76pSNjxo2pRWqCsPJ65VuVDDkyUUkzEwh",
  "key30": "3vbCjw7Yn7v198Wahb2nEjrR2tXkmbQeWVP3GNbk3oxhfWpupPDFMK8Ac5K3yE8ystMb3dijhbdJxTuTZ1r29i9C",
  "key31": "35qdcAfF9zy5UcL8KzHWSPKxCQ4ruauWrW8PYdc4rn3Bhae8SfNteeYiUvcrh8DasEvAkHfLngdz7kcMKT6PSEmd",
  "key32": "2SgjYQbE22Us55SDnknSabZJAsiT4nZRRkFnESnf6vVviCwXpdsvNcfXUYsVHu38Yo6oHyfAiGGnjomsLyHVZxos",
  "key33": "F8excKuRGNC52zCHm9xDNrosc668fhTwUJh1dkowjPzUvHRC1jYwHfw25zRvC7YKDFdz3kYRAr5Q4PVwCXutvwa",
  "key34": "4GYvGfi9d5qvPQWxQHm3z6wKzW8Q63fdEkxcww3zsiV8Y4rBywPy1bsuBjSQgWeTETc6nQCxv4Lp7RrbJxB2hGcd",
  "key35": "4q6nsLR5TPmB3FL9czXGByUEtZHt8BpPrWvQ68Qof6ZzTu2gjiXVNs2d3QsgE8xNF4xk8Lr2g9q2sJXu6gwabdaC",
  "key36": "3nuYjozm3TUhNhy5TzvdP3cjSgDQQyvzPT4dy8Yky9VhaQFdatbdfFSgByQf9GFmADoFubpE5sMVh4yTCBEmTf81",
  "key37": "3z1LHeESqX4efH8UjgWGr7YPQzfHUh82Yz7JouupoMVAay2UrFgLi966RsaHbEyXBxJw1V2oYsjJeoYTKoki4a1w",
  "key38": "4Ltbi3XbkHXvswsYPSBPuQ4qkEwQPMzpJuYp74h1Yu7Dbfd3b4q4nRG6e96WYSSvJVXpBWFE1aZYW5jKttmBafxH"
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
