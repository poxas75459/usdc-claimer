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
    "5nfqec6mk1mwaE7m5V7aLCgksRvuUquNcT7c87HfKoxQXxcPtxr86KxXx6SHVYBrT144Qub4g25gBYCq7ZopsdzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W4Wqp535XMRZzw62FDyqrUJUMwgrfavFFFtNBNPLsxUZmVUAQWcbUxpGggwGWUcQHhgmGmE2gPDda5eUco4d4CR",
  "key1": "2sfhxcjvr6soAsLxwsHCio3yNUcTodRABvXbUbhm2gNKzJKoPvT1fijHDjWtfKAQpjbLmHX9mY4aNHbBR1m7kvvV",
  "key2": "45yJtyqxrR7F1KdkncZpUgiXttWLnRAofEcKPQgTsGYaou6F9X2wdyaP43EwDmqyEGaMBKtCN33vS8ZmSaawsZ18",
  "key3": "4utnQziE4TaaPEsGuNyjknTbAmJhvMZypANARjGbHkZcZqMYx6f3SAXUQk2y9HTfDdyTMFWxX3YmD4razust4hab",
  "key4": "5i9TXeZDgWU9FTUygra9ZJKyq2u4G6BNMyr9jeQXyH8seC9vt1FEE58ojHEyYYP1Gv3WqZn1TMgs7vLM89BwdkwQ",
  "key5": "2XLTgk99jkg7MxozkjKi4GdZ6CocMow7o4yLk9DWjmoU5585ejbsJ4mh95DBj3vagPLQcDETVjeBpXXQF2T7Tcsv",
  "key6": "3xRzev3A4WrFgvuTGCnADwDdmA6B4C5uBPspdVBgwMcA7Xh1p8zGGTX81uajK7TA1ZBcLU3BPSBpDwkTJha82AgN",
  "key7": "ePgBZYZJFmaemzeqUJ5PcMwETY95F79obhn9YXaFPdxVfLKu3uNiwMaEGwZUYMuBeW64a1x8ysKde3KwQCZnK7e",
  "key8": "3nUg81R3Rcsa9gFNqDBdKN2waDnjNrFZtAGscjshH5RxZ67VJiTU9utwVK6kR1npFz9nWLG7314wuTQqm6z89CPT",
  "key9": "2HGHkZoYknLm1mHBcShYjUKfctm7nQQUo9CHiBMdbXDhp1RBUB1311BmuHvgLv2gYYGNDVd8TT17xqX7BcPPjnrg",
  "key10": "5GqVjvsxP2LZsz6tc748HPaGp16rRknnKiMY3d2xcxZ64iFghxvwuhBZL4XKg72k81axMFLTVgqgka1RfQyDGmb9",
  "key11": "3i2rNEJgfE8CojiP9Yob66x9T4Bc2smp7NVdwuC4ndoKP423vHXMjyBhUeyyBFQExntUS2EwFw6VsSgdP3MbdfCJ",
  "key12": "NYAGKJ45Yhv5xsJhDf9z6c1F79vKs8ykpVro5KHdbesEENrwcQy3bkWM59bXXhb74JvW9zDvnKKAVAGvfgEpDsJ",
  "key13": "whH91UhEb1Z1NarfrC4rzFKEGMcFTVi9Z9eTX6P62skgwAusLYanVoKnVJuYBuHbEZEKE72q9Dehf8uiQ3rNZeX",
  "key14": "4uJv7WZ6bPNR3kxYAQDCqQ2pGHF16driAhmJ1oYndhjPRzPehQdMLgSvfEm44KWGyp4JJzwDgjcejRpy9f2fRjoX",
  "key15": "225gEoL5bC9LacFRgV1wghCPqfMA6DBPk34qXKKFjWSM4cf61kNZJ2X3huZpKhtrv5ANBYco9wpFY7uimWNFp9K4",
  "key16": "2FUELNYCdVWrmVmaQcS7A1Suau8tupzACEmyhkv2kWbV2kdSXZNFVNwrhLmbqSBEW2zqdD3FZaChZZZ283C4qV9o",
  "key17": "2wQtP1afCmj3EvXQgis3AtzWkMXqa1Az98a7ZxxMivkkLeXMhyuJAZXR9LezbjJ1BK4gKi6sa5sdtjwKjDTrRRfZ",
  "key18": "2xJH6sJ2yf4RzgCteh84zKndntwLVst6MMkagiFGGs1Dec4wo6kKcYRvSW4ydrt7rE9RUDzkwbmskzH6435XgG2q",
  "key19": "5zuMx13drxkKpB3HBr5EMKXc8vXn4AjCDeS48RbPfnPAySNfiA7xZrh432AGHykYc5gy4FShNUCDRLWySKZDVE52",
  "key20": "4umoHNypDavk7JjBCaL4AZ1Dvo97gMGiZtQgW47RVPEQ7wQ2vp7nPrFZuehVBwTMoJAMwQmJX6xMWoTLcCXKoadU",
  "key21": "VVy4rg5fATD96bmbWMDahAYm7DqdoU6mqJhcsSLhga4h3rEy1kyL8cNqeUnzPw8tKZt5kpPjuC2wCT7cX1DRe9C",
  "key22": "5APCUtWRaGFevv1dtN1xVVp7DWL9DFZxrwKmPWKQKLLxWoaMpYxYoaZJrJ4bE3gnrRUXuQpxcvsRYqhASMnvmsqi",
  "key23": "4yUkLvX2JbLTfJTHfYsSnqoPTKgdAhCGG4Ym3j9kBnpDbFVczN1LNAWAZTcR7ZQDwqHLScQQEBjjBeS6eKpYVu89",
  "key24": "5r8BxCp6JfPetqZkzi4xkW6ZaVRBpGdVsq7si6ZaomvdsYgMmXyyQpaveGVnN8uw9umE9Sh6gWpnfwDhhnvMm9td",
  "key25": "4iqyyvMU5Nnvmad5NMYHXx6syjLUzNrFJZpxsZ9Q2WtLXDntDzRPciM9d7B2MoCe2TpqAeAYG2CVsMHDRVP5KKev",
  "key26": "4Qvf14QT37Na9g2Q1VTTkHb8DMnGYCJDh76VzuiB5JHBzctgY2sbe5hqGFHDo8rZu1j2oEbuRfo429Gn5aWnLdR",
  "key27": "28mGadFyd3FGxsK4JBqqxgDCBJuFiSnc5obR9xvqT8gceo7NxQoTvvTmEJVFVbRqFBJ26neqz3fVtYxntfNDMCgt",
  "key28": "3ee7EcdQ2h5T43TwC4PQtoKyThTf3MyvbY2irGD5ao4rtYEuen4zJub8JmdEkNXkC3Ef5bpFMEEZcL3VwHuPavRV",
  "key29": "3BvBR1D4pqMkjwJ7m3ZtididVw2bxboNpLmJDqKFWFemNQqZMhVLCrY5yzQ76a6zziGCcQL45FYoYzWhR9KMLoS3",
  "key30": "djQCmx5kEY5pqsvxP43tK7FCAAsFyucK1oiYBfUrdTSqpBTnoWnbcmPybW7Dfdk5uszKGbcg5uYJYYa3j3oSLmo",
  "key31": "58sWJhseKUTnfjpiVzY3mb5wCE3bGhtnBpKTAQXSCxjaP8WWiiwdZ9zcuuqxZ2Lio8bXP7LEdjHEcMECPiJGZ42A",
  "key32": "2GPvBFxSSTC21cx1exmjsMQcWbJVPs1vBiqNmwaVgWfUSsiDU6BP7zdkbAMdVAG7JSZfHxzdC4px1smPFABd9qVd",
  "key33": "4Y2F2A6WgaEUL1BmGhM225KjA7VJQtZ8M5b9hG24YsPA1n7QpctWGyZQ51iMotbStoHmZWYDJ5s111UuYqqzeMQF",
  "key34": "4VpoDKP5D5TmBAEEoHB2iZMxn1gQ2PigWsZzsVuFeb33nBvHELwmKgH3ar64YQyqMLBxLBCXyNintzezR6oUcpPE",
  "key35": "3zHciCyWEKJdnRAhRwcZ27Bh4bRh1aJ4z64vEJDnHvBnAVbiKHWfeJFHqQn2i8EPoyi6dUG7g3aeSc7ctzR16nos",
  "key36": "2RqxTZ3Mj9rVKR7ZbEeYnMjeNWKfExGPeZmTkAXvpe1DLU9jZFqpNkhEhCZNHAerXt583inyTXZywLuzVrb1F7Y8",
  "key37": "3MDGGs9Ds5eDXSFqZGeKMECjDRQE4FAketQ9psDTqoSW8sxWk9FHhJL9oBvqq6FyxBPbfsN4VxxNyQFdSbXvKHPB",
  "key38": "3VxML4e5rwPG8tZurZcbHGpi6qxQbTqYrvcq7WtQC6mLBd6fp6q6d42VkbGmvt1f7sEyJC3Qqbeu1MnSBoWTPg31",
  "key39": "aXia3dwxrTQVDbS6XPWbpaqj2NiUiJE2Du6ksAFnjhvg15ZT7YvD1P5GQnmomT8sB821oGt2k59W9RpQwr1qPmk",
  "key40": "2EVzKebe3t65Dkotoak5ro8XjocnVtZxywYA3WP2i5h1MVdGFoo2LpiPnDZaZBdPS6YoGzMggwXmzFDiYL47Gqv2",
  "key41": "a6KTdW4pK5wChVytw722zRD8ZwLcqSsD7YdYNqNxcV69wAg8pd1wQutFpkJutRt5t5iNBLD84xngnDUGAtZdEQt",
  "key42": "5J13M5GJ6kY6JbXcyRZqsTsbXtooKuZ5jRaqNFcHZTVW4z1RrucbPxkcKksvcELNFDhq9xLLydeK21fpBSPybAUU",
  "key43": "5GBqDWECX9k5SpSs1jomeTvV1F5bDYEWVY2vzR8faFEaX8Mbk9mF3HrgnUyhuBPNPpHCiePB1iojw6HE6FuVSyfS",
  "key44": "2Baeb4gEcK7VSwLAwzhzEWxjs4Vq94rwxqcMgYbvBDU6Lx57vVWuVqJBh6zwt1pKU2fPikcdJ1zoDnuYtMsmJz6W"
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
