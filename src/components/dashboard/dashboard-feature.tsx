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
    "5CUmXREA9P4YTjNrMbFhngg8iLwdWi9sJ2V9xdGnVzUzQsEWCx1ER4UZZW6t1vMfSCp6YQgVngU2zSMaUJ8vSFxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1j6MCg61tPWcBESQtdUYcGNsEoFTfmXUGfZEEQXQrdZNxTceWfWyvUNHmAxVyrdrjHTs8c4VcESuXe5BHQxbasa",
  "key1": "3a62br3Vc344SLc7j9bAPRTXBedR8riLmkABqXS8Gts7N9ez9GRFHJkyVMvqBq7BqS89DXviThAAe8p1sjscPq1B",
  "key2": "3yC2H9oudYowurH4N89QHVGZ8ba8cbnZYPQMoouqbchwTio2fRbqkNPbhe7iKP25hAD1Jb1C3M1ivmKQ81TeuUja",
  "key3": "5yoxSo6xwdbauft1WRXe1m3mLwcrvrQ6HV2h5ETNX5CXLCZA5Mp2DYvJQFMxX4eE3uE4rVy4972MeUm3Zri3WE5P",
  "key4": "X182ZiQLp82YpXh43GxV8k1TaKnYJ9Zz85nCRz6NLBS65Cj2NC4EEg4J4N4HTKwSVRWhdakyt7Sn92CmHa1eEMg",
  "key5": "qsb219M9pNg1LYot8e4EJnYFzXhWTrP5Bbk4DFHwtUSuXo4gpXtTP1WeAP7VWTHBx4yQQsoebXC4LSg6e6pRjyz",
  "key6": "4qazeuaa6y24fZvfNQdLqfSQHcd3HBJSauuePpjk73vEgAngcp8VGNFr1yot1vgyNYaK6VNVZi3yE7xppNKBjh7K",
  "key7": "3wvPfJHSezk5GcmbsThCSzhQu7pP7jux1n5vt6aTPLSYp3LfnxLrnxTeYSpU1iqoeo4bFiZjwpfM5bfwHSsAep8r",
  "key8": "24ahu5cb7kLyj9YADb41YraFu6ZxXLLUTZUsvRfEmBUMpBY4e4zbRAVZsVn31hbm1JLindQAgJsd8PwdJEp43j3c",
  "key9": "58PQsfGXjakxbJQfDD5cLaNanTz65F2Toep8FyJy5mZf3jwsGPc74ZUaZw1t2pzVBEk2UHdFnk3zpYApwkuxzbz9",
  "key10": "2V9MBoH6UeGa24RCFbfjB2xSVHDfP6NnCRUWEy1UoqT1Zzs8DvnE675iPMbGbpCn6V4bxtYQ1HZ4WSTRX94qSSW2",
  "key11": "4EF1cT3usoHRBk9mtHMsyj7BCmbMvJ3mmp3XiyWs8KAMwyX8h4MXqY2sykmNX5WzTKim48WUjBTzAtzKu8VkTVG6",
  "key12": "3BahhXRFXM2bNwci4HTyDbSyoLetRbpfk7WDoUUmQMsKJbrvkuzsU8Sy6CJwBqRJYtko5Zq9Y3hvoed2CRB3UahQ",
  "key13": "5Km7XYWgHTKaFNydPMTZM2NdzhYFSQuEabuLij9d7ogLMTzJKySuTW3qW2SZKRNvw7Xss8g2UKNhBeZHx7Hq4bSJ",
  "key14": "r8XhBmChxdzVKz4nQVntWQXsihD5EvSYWqNQvHTenwiKFgQq7wsAZ6LZdKEkSjvjkTumwCoixLG53nJgkTeKCNq",
  "key15": "2X7d7kEJVVGnweKa7Kk4cPYmLosnEtr4B7p2EBc2m7hdfLM8rZ3uNLrnb3dxLtZtujJxSkGftjsT3Vbf6MJCQ4bv",
  "key16": "39yiKKspRf1tyGLNf8QMvgctNm5WYdjEw8GnCf2zZRb3ipbaBjxiCUBYRuYS3dh1JxpAymtELgAfnuvni8MRYppE",
  "key17": "292Gm7eh7bdkMYPL4bHfGLo4EcjmCa2jfhwfYg2XgSTZiXmdwKEA4i8bb7ShW9sbQZAAVmiXYKRRtGLXAk1Mb5cE",
  "key18": "sLfYJVks6DDw6RXLZeuuaGjhe9aLv5MSw79Nzea6cUjKZ4yq3zqRvkHpcD1gpQYFEQTXhpU33jsMmUGW9LWXpCw",
  "key19": "5SpdF8MHNXnNV3K4x7Hh4v1Jg9F7hP7NqA9s6zvKawgV6FxnGYwrmdHZJsPEC6mYszLN5jxyXTKtKNabGA9uyzTm",
  "key20": "2st4t3QUDVzWwG16gfQZnQAu2JS4bvoP5btoGxz9T2eeaoPph4BBCCNcSYJyPSBRcaLTnHRTjc8QNuNfUaBQvGHx",
  "key21": "33edrTbVnSmfdUZpe91iKbXt4NVghARWZ876Ga1rcVGUmbjmggnGJeejZz8kPWCs9ucaqLGYZ53Ni1GD64LXLciW",
  "key22": "33G4pudgNxbgVHbse347B8R135t3nuH9XkydvrC8VBdkfiN1Sc5t22EPraxTzcaDeqX1yNac1kaWPz5aPYpXWuZB",
  "key23": "4ZacrPUTsYnbGNbsQViCBGsYzQ74rWJdfUiQRM3NLAShAK3qpRBn6bMFJtYejSPZ598DxtZ9DDR8pHdu837XJt1j",
  "key24": "4cPrr5Lbz9f9rgLgq17bqgcgfLtW7VnsZbvgYG7PUVDFiotPBURhjkvBqEv7z8wNbVF3mj8Jrr7JhHvRqwBm8VFK",
  "key25": "57T7A8dWqibutJ9Hc8tGNnusPUdSb9B9aCXei5TVzgUizc6heKkUXSSqDSt6NpHFcC7W6gEwjXcF238QXTWf9xvG",
  "key26": "4Fva7TNG1fESEPMMrUUBNndi8j15dofZjxwXnNmCWuAA3oFEWe5r7JHGkzqQEQJP1kuGqfBGxFUonyRfTsPQs2pr",
  "key27": "sc2oA8bVjaqXdJuVdmwtNNwHGDZCuxyuWdTLPtEvRetnvEGPxC3SqcPnYLHcCLN2uuUEa6BhHo4JuMeyVF6uZTg",
  "key28": "27LupFSZ2HNJSS3V2pKjgWPwCaP2aScNdLm1KbYUQo4hKjuSJNNPtTw135bACEmUTgRuiz7nao2DZgUjeevQTrCb",
  "key29": "3XN8nLTSEru5SwpA2ih47YbXpNPtHYMsMMzzYxcX23ecLSJXPPgCHyWxFrGc3u7vuse9bNAozCVSfP3HrKhxsWbo",
  "key30": "oumFaVQn3GTCm73tU3D1DF8qznPQnK8uWPZVeNcFQ2tzR8W2TBUhznUQHoVkZiT7LCWSibEiog4J17UdSRjwcPp",
  "key31": "4nZmSPSLuZrkNaYHhbC3944yqJRPnoe6sTTVS6Tw7HsPBToEK42p1uCXnf2jS2mCjDhiN5H77jzMkP8jAoVbepsx",
  "key32": "5qLgFq6KDyZAR2qwhRWTSgb4cr5dw1WMrMossBxgKXXzBnAwxo9FxdvwQgvMW8WWaWTtC1NxnMhnzx9rCbHfNM6v",
  "key33": "4S7bFTjC2mUA3uqxZgAiPuxy2oigP5um9mgksEM8fY4PukWdQxwFhZoPRpghjNBTMsB1cTFXqtQdaReArJZ8RCe7",
  "key34": "J52XepdRcNyHu1haL4u5ZFTCLi2zKKhABaCnT5ZBcdjqWnQji7XFrNrpnV79teaTrn2qQiCPpWGSNd21c1DsJHf",
  "key35": "2byjWQD3wF26pMQd8a4GoFNjVbpDW5QzZJtg7ifywrNrJDqvXGLbyCV4eCjx1wKDguhMB33AayXfLkujgF21goDw",
  "key36": "4LGqvcHt1jDeBwM8YWmVP8gd4c7z93BDM2HppwDBtK9yBq2GkQVeaabukcKVp8PcrkGHb5DNbswCbXVRETrYsdex",
  "key37": "3w8cdQJG682Px2hk7AHfLWbooGnrx1K7Z65C2xyVY2mEXp1vD44DnwMj4vCoXWUX1qkhdNcCw2ZmUhNvh1yqDsvF",
  "key38": "5u1vC74yd4KGbioGWU7zdPWuSuoBXgXfd55SR9E3CrUbvzvrYQdYqs5pJziH52jLTFudJbD8hgy6Cu1LBh5AGhpR",
  "key39": "3P854B8xSmpYio9VUYQBS31VQ5y82NktuLcAsNZm9GZmbk9cZKUsc3uRCuxij3PcCS9jyzZLNKGduQpyceyd7TLn",
  "key40": "6S5UYrWpqRnWXdBiEMQWeXfNQZr4FsTTbjnFj87zGN5SmMLjrciK9az2Ssdf76YzuFfcUrDLF9RMUm2N5Hjdtwz",
  "key41": "kf5UgEFbjpjk6StHox4hNT6qsryfhEniejqKw8H8V7sGyLtWQafQQ1dqTJ2ngXH7473Zns1vP36Z2RiybkgiR8P",
  "key42": "2wWkqYGyPQDqFMyj87VNU1AjGX47B8diw7PNQEsR1s3CmatTmXAJRjvBspmhS4uh1zU85BKX1fRkQt9NA9EPH3jr",
  "key43": "2EXMLgbdMdHqF39Yzp9NazVVGvNfrdWdBMQydpLgQSAPNsPRGQvwszY8SZYUpqWRRcT8hUZ1CrqNqYFWwyKwwiPW"
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
