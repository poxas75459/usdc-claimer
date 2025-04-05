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
    "39LVy7iiJxYQk82mF4T1ZfKSboZeiW5fUJjry8AijHZxoP4bVhLzmXXHLNC5hUQBGq8zyEcW22PtnbwAtartrac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZrxik6sN9u9hBsJGu4ZbnJaZoNDFhjqTh1YAHxPPCaEWQ9kXgFwYXxN9No95hjnM2NM78rjdfP8YrH95eykXMm",
  "key1": "4z55cbwuDMBXjd5s2aSxyUNueAGfo4WC6psT3tF5bc7e9Sz3XF22dGbW1aLrFQFirdDvvEQJjCMHDKx2L7JKDnN7",
  "key2": "4wiGU7fM1S5wPZjdWRbQdbK5dTEvsRf5fNjmE5DipXKHbDajwW8bMgkzKdTzkhktmr4mLBxTruGDLr7aomaSC6Hx",
  "key3": "2Hm7QdeT45uKT6UCDDLTrkuZdwzK3xVqAUnb7roahArAgRP8xXKv7UXYTFKYBV9PnmsqYzLoLRQAefLsNNPUcotA",
  "key4": "34T9SRFnWZXo1bUaNoVXgRRLumQgr1MSFNUvpzx8oN3Ae2PRzWuzhv4Baav24yY9JrtDUxeuDnR2Cys5WquqvZGF",
  "key5": "4HPQp5nYmK1BJs5iXPxAfbicrpPxDdSjUHwok8YRkLqEXGk745HRbxztCXXLW9KumJVdqWfgHx5mf5bxXA5FHZCk",
  "key6": "3hAY6oRN6CMA5vyfev5YbDABo8wmytaB4QKfCJVP9eAwc7wcxepYyqN1PHHsGYkRYeqE3n5EiW2w5Hr4TtuZdh37",
  "key7": "5CkbiPhP5pbcdnibuBa3ZRw4y3Dw8DdeRHphqMum9iNdxcbfFvzcXDxHZKFX4kzwETHZLJG6hprD1rjQCMkJNC1A",
  "key8": "KFSouc9wRt94y71FCnNDD2H9x2uVNDqVKpKvDkVVSYj2H8paEUPTZ2z3tv5RzgNXPWrcYfggdyFzwf34fqk41f4",
  "key9": "4czDrhUr9qfphc9UDoJEPkojDatgZ1zuRkniNhgvHNaHj99kYfAD2PggStpUFxQ93bQjVWqpdApnEGiGgMacM9e8",
  "key10": "63AT23QUqoFijfHZh6VNKHG9vDjiAyFLfZugMvSuxXxMWfd55etsaQpm9eoQXqWKqcewANcYV4Gf15nud6h19wQj",
  "key11": "2fegBkUrHeK4bFHCr77B6BwM4DUFJJt5a5ej9y6aJWgMg9j6uuzAH7n7CtiBQ6QYKgRsmbtBiANvGF3vxXWGQH1D",
  "key12": "4a4N2zsFf2HLa1uAdV9V7kvryrPgc4yyiYt8RUYK35syoAx9zDmz54f2L5EmHGMRJeFXdvsAXXg5pJRkeiJP8HRW",
  "key13": "5uwg3SUGU7mioKUMAuT29y7mDK7qXbgkiiqB3pxenQJsyM9VhGen7Q4qATSfhux6xopqMV6zxCqUJu7QGPciEJSU",
  "key14": "4WRrJYQMqXSsizfQbaVaqoY7J4B4jYMgStKHp1DUq81qpfWVFocPx3voYDszB9fUU5PrzDiMLUbu8qce6bGmoKT2",
  "key15": "5GiiGjCURH1JUcPNHJUCYQaRnjxepAUN21N2DgB8HSNS6GeNcdZsVyuUwG3yExAvNnCAF1WT8sh4UpjXm4BPZZEx",
  "key16": "4bxo65DJScncCQz3Nmfme6EH7U3fxES7RX1fTRLU7iMPCff7zcd7iPxWAwjDAEd11hMq2pFEU558ugpt76EfrkPU",
  "key17": "ro2Q5r9vvnSAgRUPSfAhqRxT1mxxXYMCr19snLgPLa76chYcJ1TrX2DFoUHnpr4scKzovEp7N9XKwBMu5QrZyH3",
  "key18": "No52vpWGdEZzW8Y8Jzutm9TauqDucCqa22GPnbdgYf39koStxkGsZnqyVPVfytVj1NcTSdXzxwxWD91ATNAUSDc",
  "key19": "3HyPkZzx5q77tPoszpZitEodfzNrWWeQmu3DdkmihZGCU2FnzBd8SSQtKCzdVgq4Gtp7fmZUXPKFbtRR7bT9bbJz",
  "key20": "3AeQwtSYPD3oY2pqZqcEukX3Arfc3U8RpJ2LhiZRg9k2ASW97ZknptH5jK5P1KTdeaRgFrZTPw8D6aGLrU8u25aw",
  "key21": "2K7dzWD9tbd5saPaiF1tp1B8WAX2ZGjgV5PJEcvjVVPWzBKjG9whnS7Hp3JEH1paGK4uVn1XWMSsmimqHwJityih",
  "key22": "krtR8wFAAr2NZTVZVDqxFNxQ6Aii44Q1zTzC6MY5sfrANAHRxNLm9oCRmNWgNpGjbZyBtVZzkgoS6q53fQZAMyo",
  "key23": "2L3KAo7Pm4ThNdZwR1VWZ67xJE6fH12z4d3dGg3ww8VP9Q7YjhQmTgogze81DyzN5QVMNKrkSaauMm5AfdB3VqFi",
  "key24": "2tH3KeZg3rwYxiNk4BxaLSMVMh2Ko9v6ZeAGQYXF3RuvA47b8NyV4d6hwNGnzz1bFCwTHdqJG9jf9eKE7gVuRPnf",
  "key25": "25bEta9RZMQSotixhWRMotV1tpWTBUW2qqsWFjtAk8uj4N8M47MB1nM3xPWvzz4N165doi3Sy5MBGFTCy8t2ejk4",
  "key26": "4cG6U4BTyit4MMUF68afAu668JP9iMZ4yzH5M6vQgCZwJa3g4rFrdumRSdNZbXYJoKh3zi7PG8egh6cPgyWLDnUk",
  "key27": "3nYio7wPZuCq8MLFicYncupQ8kQAdsHzQvuMsiVYdmQXunnGDSc9eTynvQWNKBBGuReY4fpGKNzqAewmDDrkm5VR",
  "key28": "3wMHirZqr2deEyD97qa7TSzp4QLnuWHt93mH8imtDVnDKWJdySvCo17sFfirLLLLCXzQhSf22HDet7xfDwtXo5kb",
  "key29": "5PPvH8kfxn1b5UB75pFGffixXriW2trqPnsZvoTAfJAte6VL8D6fy5yuMAvyMmcD5F4wbm67CfMFSg75xisk6Ckk",
  "key30": "5tUmGGCWUtpgrsMVQVq5eGUxHkvZkJEAcgFPHvbntuCrmqFBPicSCyys3TegtvyUMA5mLqdd9nEtfiPiKdQNXKKE",
  "key31": "3D6V1mUSgWqu8tKurxf5zeeoBaTBRFfU8Pa3HZs6hvMkw54xLE8z1XBx6iaVqnGYfAAU2Hy3BUfoPeTUtAjzhZCW",
  "key32": "4Bg4Sh5es9sPVoKdfm59SN2ZkprtfKBC6xxmk22d8sCDxao1XpSvp4bDu2zWJ7YbgD34ZyBV4yQXq1eCzvJyhVpj",
  "key33": "3B3ggyPPhdj7ETDQuFZMuHYq8EqjugWfBATvXGvuKaS4gb25NfDfururHenyw1ueZDax89UadQjukXJpnUTvjwK6",
  "key34": "65Z5DggWYrWeGCEiceJ7rXTUeuVVde9AWwbffEAFu6RnYz32faY2RbLiheKv3xWXTdyw4do9EuXAoZJWqd3K4YzY",
  "key35": "3auUAqkUhAtUxyfD2fQAyMGBmYmX897vx4qDoDYi3sLwRaMhXpC4zXKjMQrMyZC2nVWFFCovaX96MTHvY5TfP5gj",
  "key36": "2GY445Mwss8UsJAYVUQPmmttcb9kXx8cYc4pjK7VUNqDdArDd3hP7GQKQneTmZgtniFPqyetVHZKBpQJxLm4H127",
  "key37": "5nDtq9VRbmBxxRDyThQXZLdbCYPrZf2V23MtPeVdunLQV3t9iDgQceqn2DbshrEmQY9SCkMKbMq8NqE58Y7CvSvc",
  "key38": "3rFo3BK12X7AUNDeU4hGsv6VgXhmgGvsj82yR1b4Gt7fXMkDPT5HZjgTkYAYUY9wbVuktw4jzASFUns3Kh3B1mB3",
  "key39": "3vGk1VP2w16SxTLxakirTwspgUgBxD6Q5GM2o6bkv9QpmmAickCVwYXS1ADE16r57Ba3JcvYVju1CdmKyuXTk1Pj",
  "key40": "54ZEbFkT1pUSFJZcfcfFTKvpwrdCpLHXQPXQ3MsYscyNTjzNrxkAayBbXWpD2M4sVQpxSP7KRarRwh4QyJA19ZDh",
  "key41": "5XXR86Lq7hAeQZF1gF5xS8npXywbatKc9VNjTKVR8DMAnQbzJux1YmQX2yytEHdtN2jNGTx8sfGY3Koi1aHdohcz",
  "key42": "5RqKWoRgwB6Pv8a6tQ7RS6KcG89RGCLB2QuzRpP1aAK2dbopymKkMzsdPAEDyL92dusDWa9o457kvp37bDPRNSkU",
  "key43": "5XqbJWLURDMQbdVZR1BytCXyx6JBinVZqCwzB95kMKbLz4CkBVN2kpsNoW48dYwv4c9wgVwSYCJZJCYpmGBdALLC",
  "key44": "JLirWQT8DK4EQnBfPcAnyXA776VXTNCzKG5iDP4C2VjFQogKYJ8nEKsuA8SCvWeesefqJUeH7MdycPJENDDAZZF"
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
