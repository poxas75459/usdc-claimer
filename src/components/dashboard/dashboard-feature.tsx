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
    "3v2DiRwrUG2y6xZRHP3qJC7Tw6jaHgdRSe7RxsTnYKMw4YwBiiZByvGjPMUX5KzgjjovmNrRFd1Nv6e3LnoXhpYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPYM4ecrfvkzTHTfF7wit4ijo4mvvFiTthToGVUcx8Co9j1wsDe4SBL3ZHTPov8c4kn9V2qPfzPV99wJhdBd4U6",
  "key1": "5vtmGA3C1jnyYVFyoXrYKi7Rhzn5KuEw7GjVLmAdUrSsCkof2APK6TEXJZwn5BbL21KjQmsZdYn9SR5a5FxKz3V6",
  "key2": "5nfuBWp2heDGfy235ZAMvmJaGxkVKKLAER952vbWbxHQb68CxqvPSRygwtZovmPMRxw74Xw9AAMtrKGBMQbxDXuE",
  "key3": "2hoHW6HLEcU4UcazLfdrcLNvKRpMMLQhmFPrb2cUc2SpujrZRok28cwjjtYNFVL3oAyhBxTmoWARynZXexRn6ypU",
  "key4": "2dYb71fMmxbgsS61iS3amnZfutSUdGFASDPeHM2ddY2AUr7dPqtSJ918vT2xZ27UGSL2u9LrhpwBVWddVxMHoMe4",
  "key5": "4k6jLpGpw3FAMbN6VDg1cZoqc57VrYaoTXcLnGCkUBKpL7QoBtTFYnZeUn1qdEgaFHTATTb1vVgmJMo1Qhiawy8x",
  "key6": "3zEFsYMnj83gGWaeWoy12PWuzEnnwhJw3Qr6KrWsaDquH633ioJy5HWgVzoUWzAfVd9viAnJvMmggDNAp9Ef2Ea3",
  "key7": "64nUP1bWtgb5gwveik9BbhJTRLfNYLW67kJHqKp74EmC8KMKAcUQWgBWG2JPtRWYHGyvQYefWHGSeTR41RokdfsK",
  "key8": "4qEFe3ZwdkXJXp67J1x7zeJxn3XcULMQFHqNEfsC43SxpnbRj1w3a3NYnW7JEcbn5h8N6NMDpE613r9TASTdv2pp",
  "key9": "4LQCkF8V1EFLVdM13DvQPeAxAeC3MFdHFb4nqpry37cdxyN7Tzbc6bXeKWHBnwwF74BG5GLPkkPkfMH7ngeY5Z5g",
  "key10": "zPaCZTn1GnLzow2n81cedphbNKjpLSQch1sTG1xHChX1s3bDxhFPn68zaejHR2zea6NxAB3g7ivzNUTjQmKXr7X",
  "key11": "39NVSi67gBQSZdAEN8oAKEhNzCGCBXTosx6t54kVG81ht34KhAe6pGweDiqErFASYSa2QmcXBwvW2ygrzU7r4xsm",
  "key12": "27uzWS6oUpJZ6ApY9K1y8KDw8kaGPe5V5LFNNEesD3pENsvZaDXS8nwEzmt6mANnaoLc4cD2qquxJMSBmRunP85V",
  "key13": "51YXMyr7rKGonP27jCJpseG7w4y2amZZukE8UxE7nUSbnbDSdyEn4d4YHngc3u6j35Kxgt7zfH45MwY4T92Npyj8",
  "key14": "2ZYWJ2QdoMDv5Nthp8gUUJiHXidHPcSbYFc8cEHPd1UuBnbyHhiEVxZ7Yf7A74wWPQd5p2yt6ToRUkvurAXVpvUY",
  "key15": "4eUh8gd9NnyF5q4MkVFvcBi41yY42zD9txYSUwhZvDespHSQ3AyB1GzvsyUVzBNE5v7ZSwMZoNYPNENhyAkct9rM",
  "key16": "3hwH4QuEkNcdQZnK6dJvGmA5NxMLB4S8kDmAMxJqD7grXZLiMN77VHasoLo2YRGcFK6N1cW8RrtmgJjCsgiep8KC",
  "key17": "ZMWdxtjsQcZQJFn4iMHesNvhmGgd7hmke5T66H69RDzgzTD7y42A7j8rjLPdE2xxg9L7CHZu1KM2Bjj6FUUBRx9",
  "key18": "9FSriVxNPiR9SuCDuQeZssqVHD1CuAdtfEayvQ7CoH3RUW6qwyHmQm1a5Ma5GhhJAnhzeTQmjnSEndQ59vfPD5z",
  "key19": "3GmmXKQ6LKwP2KiSvKnS1BjP7XQbcHrYeWPbxCXZSiM6PWkLS8cuLrtC68Ay8PYa3P9GugVBMkB6kUKyb2iPCUuw",
  "key20": "5C8NuDsp2pNAMLt3LXKCL391EzU5Ef4Dxi18FZXFu48fTL7TCtPb6838wW7jmF1iBUUqCRyLcEnLK1eUdC2jEscW",
  "key21": "XiA6L8pvVwt55XqFuZNyfyEN233SCJXBwgsBcHjUwkggQXgLfgT7sr9B4tjrorPrWqeC2HBmyxUXnqDfCpwxkGD",
  "key22": "4vWW3HWk22dJcPUMfxmayhm4J4M5Xg5UFAAAgZuAtootgMPZJhhji1BfSK46SbEBUHmxZ5Yu3VwFRuCa3ngHAunh",
  "key23": "3k6Gqq1USs8TECZxMuHv3PFkwGmnbYwt1fwjD4gsyHtUYjKd9Q5uLfCi1vBwnfxKmP2XJsAYApS6PTBEBk2JxrcL",
  "key24": "2ZTmNdgjjrZAw1QtVUA9Wo54qmVvKTeBwcJUL9rVyXsv3LTu9hiWq9SU4HFyKHP5u2NyAvTfrg49b2VmpA55BUdt",
  "key25": "2dm92tDLpKkyHPEMa29bbuB8vgbQnvSfhkbyMRghN62mi5RB4b7dtdApf4xeTpD5dnu2cwDxZFLeshVZHFkHhPXK",
  "key26": "3kWNTLfAJHTZui3B6ScoE9YwREiFdE9skZEaMZgMR5bBoev2MyBV7mAcMp69D3746ZD7uH8KtAyhRgCEros7LGpA",
  "key27": "5bi4HpbLs2h6UvJC1nXFSichjtwfsdh6SufdrqEmzr9XfUVpckvEWLEWNhMQNjWC2FcaxseMrMBKrQJbFrL1MPdY",
  "key28": "a3JQDcz2zXvEgDw6ANXG8pFTqqsRKUtcVbirgQ24PyGdQMn3BusS4v4djxtQDU6UiRvNfZBJPsUej49JDKHHm2K",
  "key29": "5gy3PzvEL1dUXZCbQkY5ZmkReF76jc6bFn96huxRM5dfiR1gAWCuDFyrzfvwtN1GFnGtHtFwYyVMKjhbqvFvqyQi",
  "key30": "5eEDaZPDhWSbia1Px9bBoJCgKP6nmAod4P4xE6kWPuJ9Nm67b2xNUPsoxyeEZpfJxqGaEtLQr8L6n81roNjkNmwi",
  "key31": "5cnndaKJfExfR3sUcV3ZSR64hWg6zDB6X52XUuYHQCU226gVgS6Jq7Y6nVLvgj9XnBSjyfxHgsE4UjMNd9FUB8Mn",
  "key32": "3bKfT4d78Lxr6J2Kmvw7MDTkseAh7s5RskG9ub82XTJCGkknxSZAQcQz774V5hae72Fks41EXyjgU3MLotKgZ8Ji",
  "key33": "4sEhsToDYGu35r7W67rmanWxUb3ngTwV2Kx1cJaMmxz5u9fCPzUKNDBq2Xj19aYPELTbeSHckcX6SYeSvWbGNYnn",
  "key34": "5ajfp7H8W39eUzUpToRFzq2jp5JrQGHPK6PL18J5dtVPnFUMWecXDPqQN2w1JpDTzyavEiR1Go64ZWxK4pidoFLM",
  "key35": "5N5FpcNfySkK7QixTyKwq4fMhM3hfD5en6gfLEsGLQUdz1RasLtfAFxkhiUGDbBBcM31zgfobgjhp9VEZxyc3M3s",
  "key36": "4raYZeHEMXuvCkcwFNZnJjX7uHyz2oJfvw6AUcqx6rmZuZeokMTFjyKw43fesPikJWQFTcuy7obyrYPxrZcYBauX"
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
