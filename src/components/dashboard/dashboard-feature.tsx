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
    "2qCX1KB6GqURbUXVSHjcy8zY446xUymfUdiS89qjquQgUJTuk7br6A21HnXhKQwTsTfpPrSBRReBFoCRFSyCSEcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TsZakDqExTjDGfPqHpKwgbY8uqgk5HKDsRpyCSfBaf5dLurt91E1eq4e4QzW7sMUoCobjbSXZWWfjKqUgJHr2P5",
  "key1": "58kFeZLZpcEdkpJXRLQwbAJKjPWziUPsRzTUGmwh7qtaq2Rh5sMH3exQLcpztgC9DKfAuyQ3kP52zqDhkwNmnKiN",
  "key2": "4MfJobKkKdSrL2TgfGWrXyDM1TxZNBXid2iDvbWpU1sxsJzCk1JmTEknXz3ZXQUPogqxhhxmcep4qR9JWMDxAmBt",
  "key3": "2hjwWT72QQBd9ADzxCsMuin1Yc2ngyEqqgfYG85EPWfyfK3CXV3QgGU45k3TxgFAsPshgvTMUhESmM58dGt3qsxK",
  "key4": "35WPam9rMP1dTEjB7GgaLMR3N2mo4V29BDwVn7itjzG58VYXRv6xjdUdviV2DinogGcToRe9UfFCrBQZXwv55Why",
  "key5": "M5arVRxXzHnXvL3NgQH3HCQaAfjoUTbyCdZs3ZrHTAbaGwDowkv7EbJNygXTnvEb2Hy85rqB9qV99Htn3VGuByf",
  "key6": "4UQnkLwnbqdE8PDWW5dPHbq5tVKn9kuX8MJZkSVyGY5j1quX4GxKcCE6Uu5XhXxr2FTHPxuPbih91mJaWP6AkEAJ",
  "key7": "4xVCgKLFDytzVs18aouonKak7qNTLoGVFUee2PVe3FmPqDd4Fwe1YyGVDURtvsNvXxsSq6JzWzAzGAutKj3TUWNa",
  "key8": "5M38QpZvnWZZBhTZJWk6cBrmrd7Q9Q8hCu32EHEMZxZrXCbfmQxJADp4TDB9CBjD6BEXnajak3dspAW9DAVRoWfB",
  "key9": "26WRNAVwYcdzDDfXMjiTVcFy1Tzon9u2ios5yXXhBa4PDmvSfwkJKj6yDHZCmLq14Q9bjqjQMDM4b7wzHAn2BVQh",
  "key10": "5sFxajLDTNfypc2W428N2fb4ciBksrbquMuUM3vdtEmRuDnuiVPctdRr6ZdHre3NfeevPkyFxKgT5dLACpq4vp3Z",
  "key11": "3MK3DuXaXxJjkf66Yfia8Zj5fuzQvAKv6Eb3G4qhDpp9m2jsfR7bXLexS736ibFBMXcweyfdmmJjCnZ99TgCwVxp",
  "key12": "4ktw82W7iiX5wygV7gUW6ezuh3Ds5r3Yn6gNrD7c9wPa8Z3afzN8WBdMpCkrv7xEdhtLoeexNiwSMyA5ESF6WdXZ",
  "key13": "5d1eAsNAA8u4pZnVzzvcKHPuKhBLkdeXURhW4yiKeWsUTmKZuCFRt1MVKTXDSEPx1CTD7gCsHPxToBSjW151Z2Ti",
  "key14": "4Uzqa3Rddu3WVo763dXrWeoUEH73NPh5CUGPuRJ1n2siE12n9YHmE4df6df6fw8VEAjudoALxBLe9BrfymrcmDne",
  "key15": "27Y134aKkX7usmnCCowm5Fzk8GJnEvY1rARFooZJAeUk3JLPhYu6Pj9r13qePyrTVfNTzuqiX9qJJ1gC8VFxxcD7",
  "key16": "5qzJzSgdkoN4AKxzAuEhP8kDymHgb6o3n9jQs4wWs2qN8w16hqFMEe5bD9cuh8HvSvmoKeyZJ5UcvB7Gn7JXhGtt",
  "key17": "2pTkkRcNw2iz6MNhrbS3suui5BS9xiVu6gCwM9nioXn28ahYrYuwKc2bURSwc4EjhfvabUY2ysQGY3NdqWmtCN5S",
  "key18": "kHgM4V7fNBJWXEtT9gnNvxAj63jSHYRFEygPe2nZUzNKxMdJ89mGhqmefoUzagg1ygx7aniEX4v9V3yBMEfjQUp",
  "key19": "4qVBwY4vUMFySzvWKwyuJHZxEtphqek8Bk4ELE3gRwnAoCDfdfkZoeAMUYxmm9KRmuWxraQMmW6Q3YHJM56RNT9c",
  "key20": "5pBdfDNkARE5FK9duavZ52tbqacYKandrM6zMFVAYtFMQaLkwnmB9zHyQGJBMdHa2tTtp8VXg1h1b3pyUqohpLrT",
  "key21": "4GEvvg7hgEtXAWqSDBfpaxgp9q98QZTig7ieckjZLi4jsapLHHMZDUfV8jJums1nTZfME7NnQKQc2eDwMYtbgyT3",
  "key22": "4SHGsoGjvjuziYz5knonSeQakcpDBToGJEPh2CbhUNKcrejw6u1zPmtF8KzGn4HmWNqU5VxcXSr71rgWymrAxsq1",
  "key23": "4bdP6gEs7zTW91ffPT3Dk7t3Zog6aiqtXc6sEkakWeEU6WhyTTBNCCELSa1hMZGhhkS8pvXXArYCbMwowzHcGxk2",
  "key24": "UQuKgobPYM8D4Mmwnxdko5Cc1SzAumEhAFFREw6VDPxNs1s9VVtvUKkVAs17eodygH9RisVGYPDkbgwZjsb4o9H",
  "key25": "5qt1UBHe4eBRgVyXZ3hy4w9f8C458bUgJrR7Kg6WwVFcTHig5XLTcqF6gQ73VX8kd5yxSfH1W4ri9ua3QzgSTyA1",
  "key26": "9BqU7sCG6tjx5TQEpec3p8ENsdsB1tQYLxYvU8pCo5whujv4zM1Rzd18bqnLysPhQ73iZD6fqYHGSAjx4g6ABKu",
  "key27": "E4GN63QKmXQBuNeJqfQ8cPhdpzzxqR18o4CzwX2zLU3yQ1tcqke8b3AV9Tyauj7UBaR4w1eXDjewy2NxFmmWGSR",
  "key28": "5xse1guRvEWh9mu6vDUU6QFj6tmt9XGcFKDdK4jpeGec7MxWu1gaquY2GsW1AWoNyh7SY8BXvEUfj6tzB9rG7VLx",
  "key29": "5eTTYgS9GFgc73xWg9rkdQaAST9C2UhcyBTgEGtthNSfH8HPGPAUoAxdrqqNAjM5r48LqQcfzDY8AAkDZHECsPiH",
  "key30": "3au7ckBeYVXpZXWpVZ8Xmm3DTPMMb5pUZ4h5CdSsNGJkSNL5PyzUrDEB4fxRezL3La4wu4N9YAmZMdXFRTvxXTur",
  "key31": "5DzdcGKD8cpqxPqaB5oxQT5i6JQHa9Dfcz9uATB81HTQyhaTzF1ZNuq5dexnKTBrAE1vvjT6smN5swLDUe9cuVb9",
  "key32": "7CTfUhMQ7JiSL5nah8XvZxgKxCfk4xUjcreVKY8z3sszTzW2H6qkLDLVzxFqGZwxLXJkBsofP5NFBHCUyTNdbux",
  "key33": "4UVkfkmerQ2PbkpSUmVWhPatEQqyLXNoBsZ92r3zN1BF2oa16Z8Bw3cJrwEkvCVwhr1Z4MfmXrPqvfooAsmvRfen",
  "key34": "3Q8cu4dZaS5xBntthF9HLjKSkRCyaJbtEB4EuvgSNBmsG6qSuacnQrGRi32zt4yuGjrxbVHgojAXiSxwwx35Zyqf",
  "key35": "4vwJyrST3xyam4ckkPgVGEXrTdMkXTEtsV28J9g9csorhGTWPBR5pvUp3t4qK25FB6XQEpbMqkHnATcQLyogyqFf",
  "key36": "KD6kTmm9PaeUTVK5hdkoiSMpV8kkxi7NVrZEvTHoptZo4PzKByX4PxNLfGqHJo3BLEeiGC1s7Wggq8duBqXbByD",
  "key37": "33W44biU6LASCnhJydfv27Cetodq1phYab5nadT3D7ckc5FrXgTUoHBjuZ2aFBVkcUMH8NuGL6pfGTDNTpGCrYFK",
  "key38": "4YeuvzvizfnBx1QGVthLZCzyXipuxsxi67ivjmfEDDo7Q156CtPTM3dk5uZCToprN4Kh8Bpbpa2nt8hZDUscRtYt",
  "key39": "3VR16fVi9ZHhmbZz3LHXy2WFGkyBAhCexj9CN2k3PGTFEQ8RJUUvVvYr9JZfMjhFXFsQb3SZgxpoT9wAwWN45uxP",
  "key40": "5NiGSsFMbvpRH4hmEb1WHSvR1TTRBAzUzguQr5jXLVaXHVNwv2f4Hk4hPpnSCGRHWxH1w7SMudE3nbGo4656TrdC",
  "key41": "4CWdPHNyrJcyHJCDGNMLyqphhK279iu1ybxfUkY8K9EqGzLpVb5gBPL9WUbkFAM3phdnCCubeXn1BiCawR4wzgEz",
  "key42": "uCceXFPoKTEmJZStduMoqxRsTMqVc1mGaYWMNkFWy4Q5MRbobHv6DXmamBCWGrZk6oNGdQfG4LPouVZTExnNjkf",
  "key43": "3UuBiZVjULVZJX3Ed9GyvuJVkoMs7XnnQ8ktshQJJFpx7B3SUzyd4Z6b7QNWXfCHGh5J3DdeWJ2L6qSjjAXaho9F",
  "key44": "5F5SWbgBFh7gqueGerr41PFg7PU7hiq7LEn8UJ19tmz5YZ6C2Byc8xhiU1sQ9XZd93YmVTY8UAuCHzXmVe7oXAU8",
  "key45": "9H5DReqbESkY7ce5UkFqZbiZeZbA4X8YTKYQ6EZhvfSTK1jPqyPhRgNqm2bcwsvQUFqnXgXU8CGsvAriWkHGrfm"
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
