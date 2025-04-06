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
    "PjAmMX9Y6Fyhy9SWRR6K5pRKf647VdvJu8JpqH6FdE2pVXFA2wXhJwjsmfcNxrYmaR1Ln4Jsn3bjLpNazciQEDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhKfmWfKS1B9XBYHpPnixNbtEk9sPnvFMk8J4B2aVDz1Jq6MKikkf4VyFxMtGd7tfxVtd8vm3t1nRw2LQX9pxpm",
  "key1": "38Tcy7XVh1dE4tQPbNn5ZzGD1tpVvUNmHAe5hMCNE77Bm2T8bcSuVfY2HttVwPL9n1FskSQiCBE4J6ErhiA7Joub",
  "key2": "4UZEX26yUhGBSY33pLgzrMdGSCShFFjG4L6GUFUWh8PR8czzDZfUL1qnAct7FxBSJQ6CdWakPpScdzv92fTHFati",
  "key3": "S4NeEQQJHvXGAwCiCU9jXGuXTSwJKanKQnxbJ9Tqt4tLYms6V4X3yEpx2NzzesskP6oeQJLf2mBucCTi364zwpC",
  "key4": "5eBnA5rQBvvEK3kiw8kgSUAjhDndf6P2e5cYYQnD37SHqByBPeFhXARuA37hfLNVMirGKG6xnXKWsGCrDKQjADGv",
  "key5": "3nsZMKD7JYFzL1ERDk3vEFUmcsjSWWW7GvexG9RatfLyz64wGti2rq9svU4FgDMKeyLy38wWPsZ4uJ1GHD6r1QWa",
  "key6": "5PZAAmAj2fUXFb9CQRSidMAjUvxnbuhZxUQAK9snfD27dEpPDuFXGuTQRgJ5msqofAjrgoMMbKtKq3iHGohvNsdR",
  "key7": "tLX4GkuuUTUTR8Ss1QaX64LtvcVqy6KeP6FR7VausSy1dnjLb72CoGaavu9eatQkMBJS4L5kqzUKqhCdRx4R6Su",
  "key8": "5DxwpxXoFbVYW5Vh16AJpWeXrfeMRKbs2D1dasbVbnAWRvktpCDBkWRZga7iBehqgScvWn4x2TEQHhDWt2iFRM8P",
  "key9": "3jjCv5oEP4w2chFcsGdwC4mjenxuLsobESy8WhJtfzL4THTeNHCuJy5Pqkf4qKStLV9WPNyqrYX3kBdGAhXgp3G1",
  "key10": "4xEFnyPHfDSJqZqtdjPGydWon4ijVwxpWrvBeorvZyfGn2YAgXYsTzDhp8LZG3M6kcJqv5wNCX9iwjB5LWwJS2GL",
  "key11": "3SwtwD5RkspRfDTLLDrHGFFV2vd2wLup56GVnkwb6HNhNj3oZZS8bSZ9SKqWxtSzRSk8AKTAVsKKAzcHTK8SBPyg",
  "key12": "3WgtSdLDz4KcMgwsQ2qkKVqsifZbf4skH9mjze6jEuz19t3jWHpYWUewoP2YLfJj9YTGEswrvj1DBhSLYgCx3qaQ",
  "key13": "5LmNQnDWcxwsYeco6dUctyyaWCCA4nLHJakRyis6QtWFnxBHdZU6JFLGeKV1RggyUUHC3uyU7j3PF6pEJabJipCg",
  "key14": "2vABQ6ecVWL4wdCDzF31EpdeqVSYWSVWt5KSZEC3u2KzGSmufvqsZEJ1fUgD1DdTp7jtBdUF5dvxmk6SPm7yr6TB",
  "key15": "3qahdBSxFW4xvb4KhnZH3Ab6wsqvgQtxWiWXGDUpmsYe4V6Cw3jDkugKwaTQQnasVoAZEBhWv45hDyrt2uWXM4Go",
  "key16": "5bRCbNcjeMD1B1TiFdMWcwHsajhn1iCmmddFSmLvxivA2tGXAyE5iL8NjdaMCxki3Zih6pPN1wwJY67Xaf74wsV5",
  "key17": "4bFQCR79K2q4GdugeLL9HMo5BXH94xZ2AcAEW94LTTYQjGXa3tXALdP5GzWJnAN4b5G8dsM9AgW4vAWemrfhJ8wT",
  "key18": "5vvaimY9tgwUzXYcXD8rQQo2Q3MzkoQ4Pfe9MkBhQw54u1JtNEYYUYvQaXG3JzvRBr6KEynJcPNSqiYeQ2P3CsdY",
  "key19": "3vXrL8vK9SypHaYWYnqSLsed8YWZTSbfPboNieqzmLwcxPjBTAZZARFufAxN9V4RiASjwhkhyZo7UJ52ZByBpM8V",
  "key20": "T4pnGUDdq2XFFrj7RkP6ywLKGPouvyqbk69GpLU6e8AtXgD3KEeStNnXcLB8ZeujWQQdQ4D1wyoeDxd9SZeMHdN",
  "key21": "4N3LGY1dyK5E3CXWTZBehwPqRo7AWzdS8LU7jbDRsuEL4bfxQVJMscDX3wzusHYKcr7qkdq1GdSe25nxUV1GQGqb",
  "key22": "2iSLBkQfEAW6qRsWE8rkLryXVELvh996ywS1o1T3raTCPUhq4f6DBbRMJpyUMzQL8aVcwE3G2mWQre7vL259tgVw",
  "key23": "51ovws1TCjd3whZ7AyX2D5wpZXVmYKpBoaWr5SiNzzbMSfMZoKUPbhtF1jJMTgewFWS7FDSzMUdgjXdFk57uCpGr",
  "key24": "SM3QXULaoqiNjBrSUgY2jhyuJBTfPARzMmiA2naMfGpZBnWtwJbMy1KXMrNh4QrXtufhEBj5bDe9h2bjKge7VX1",
  "key25": "EKRTfTEPKHY22Pv4BGeNFVBUp327VhahHBnFFXqEkPzfwRERCtzsZcjee5rr1NkvusqX2sbS9ndVCUphYg7C1cQ",
  "key26": "2zpaEnfP1tpipirdZWQy9cYbkmueDhU8gosXzRstg9Fec36xPH8ecxW4Azksd25rnPX9ZYtvoyqAQWTDBjEfWWyb",
  "key27": "5ypdZ7wMp8UzkP9jmv721CChKELyuM3ehNtbLXktQ8aie7L3t77bAr6qBCUSDftWtsHma9PaExccE4fvwwPwXPwJ",
  "key28": "2smUsb5F2VvXfj3Z9rBT8ugbEjVmda12doLUi2r7F9WcE1Q3UsaVtY6Kn9rKh8RCNSYJZZVqeNZnwJtazqWCorQ8",
  "key29": "M1oTdZkS2dgzWdwLSjSFgpyJwoTmr5jtMVr47zzPh7DSexjRwgKJwNdJabqDAwzBNwABSu1jkZMxZRbJAo675Vj",
  "key30": "49PQvW43rVtUCpGvj2oTCn1o3JimioMAVAJvVbM3GRzrrMd9cxJpnx31JGyKApw4YP4suqpnaUgiXYbPxyC9PEZ9",
  "key31": "5VN2TD6EMU84ZrxnJwEVWM52Evdkviair3Gy3ZC4txnZAr54dm523vjKtm9dFQyk1y6as8bLf9zHK47XBCGaGSLN",
  "key32": "65WXRVZSTJmbV8VsM1qCJt8QpE9e9xXPrkTKRFAt3wVtTLyWg2MtRs6noF4uszm7Hdc9e15cw1hKb2AcBGM4KzAQ",
  "key33": "aJJpoFwHYYj9BMu7sCk4XPfAeoZfQdyVKXF1DKBaDWFdk9MmwcMGhtxGD8pqbvwK7T748YF82DvUuXAyFq3hj3G",
  "key34": "sPLFzgivusRR9dpTTTqfNYSwBerYxbu5jq81DJaquA47CfgyAXekNoTw2okcjy3CCjJ38teSve5xJ2pFW5vDMrb",
  "key35": "4EzbzB3SKCsyFhmWx6nkkSmsPCzQNg6hTd1yUrCsdymrxK2YsH3FUgkRG2tQwejwnCxH6zFLcvuJ8YfriJEyDfTW",
  "key36": "29UNweaf59uNgpeqG3B2SMjqjQDeMGPQ5b2gsQw3pxsurJ47jGMvSNJk8kTAm6vf6sbd24dDmYoNkWYnzwKA2Bfp",
  "key37": "4mmU6xY5gmb7Q9e98mKxSZKKcWoub2XC9rsCRrq28ZbcpUYJ6VAompW8XpNJHkRULgichdsFGAZZp956ANSEkPJ5",
  "key38": "5Ba81Cb1WSctjEQVJeSKueuJVCojmrfEVgXLAU8rYSTbqbErkkor3Ys91mURksZs2U49w9E5wGU5J3i9VhNP921u",
  "key39": "2PFwjiMifnZoLLhxKuV1izkPS1zGfyKP5vMkYhTZQqziV9Gnr5WR2LyQ6mdMJyc8HaDYja6SFQvvv3N8te9Ed4Y8",
  "key40": "2jSEgBN35JgFZtLmVCKvKn8MMSon8ViPVchQBVqUcYo2GqCNytmWCdRedYBSsxRBxcwaMDbTNWXT6o9CKraRkt7X",
  "key41": "22Vpn1FBkGUKd5TJ76a7qjNUKQu6rsKNZtCHcajmkJHizfQszjJvRHbP9E9eEw9y9VkaXGWnvNZw32JowrniNbGF",
  "key42": "5864BsjyoYJRrPy6SXtMBHdVnj2hJoQpkjKSp2eZKHjRkdrMRep1TaWHra5Lhy8Wj8u5Fz4TAa9A7tq1jAt525dL",
  "key43": "59NQAc1JyryJJ7rucnpMALKRtD7TzXG1FWkDTDixWqN2MMxANbnmqMJBmnYu5FFA6ooAd5rG92xWpZ3DHCgV93SL",
  "key44": "5HLxaMLd3wxrrMk2UYFuc1w48QFuamTmZi5csvgvXoJDzoRrrGUMk9CJ68qEu1T2dbjgJWbLHTUTzkgheUVhPT9v",
  "key45": "2mQqV2Mbu3FZUgNzNbPX5TzwkNHjgAGawKGrgHwpudq2FmCgz1S2K64cbgqsqEu2gBTFLjBfsFZ1g6Jfn5jFx8t3",
  "key46": "4oeEdMvTR5vEVhSp8ZCyx6H471ax7NyfyjyjqvBJhF8iKzmSd6YxHNcjxKRT4b4HPrh89tuRyk3x9wsG9pBSNkhn",
  "key47": "uGDRLANmptSRybVoFiznze94zkPVc96CGQmH6HZnBBUKSAJBJiSDShFeMFxppdVpZdtSBhz4pWRtnbpDMzYbWrV",
  "key48": "54AAZpP2p771dNSvmDYpo4qzzTuaTpy5PxrqWhvGiELasvWXFu4ErmGzcrE89ySsVsaZiBh11UdXVcPWUQFRtJKH"
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
