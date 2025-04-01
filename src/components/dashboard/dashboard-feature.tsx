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
    "3xuLZpSyiBaeGaogfynfXZjTTRHhtEgcx3wdUBfhY58mqMDnYAFiTWGwL533YLSNLqjP9ipVATFh1qjdM4cCaJr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n3YEqHxK3qTHenYmY6QprdpzWBWqd5juc5q8vNEQEHAXJ73Q7qtyorhAe46bbMpXosXJdGgboAPKzCn1gxV33WX",
  "key1": "tA3pnPiRE8M5gWiZ3v8MtFMYKyPD9dmJ6B1QuxVZdh2dtAag3VUVX8Mk3PDgpGE7FZ3MnP7WaTWPZR7puGwtg9L",
  "key2": "3KwHe4keTvB5oKNjti7JVBTJ3FZhoBPktPQtf6Fpsk7WN8wpc4aAakJDyn8Q1wqc3xAdGpWsdTWKGqZxezi68cDM",
  "key3": "4FWzLtMvnG9D9vWVGouX8FkyJ67fz6aRcLCQR95fk8GShyMzqAg7BaVG1rTMGwxsSTHrczrG2goPoFtbaW2GCmTK",
  "key4": "52o6Nz6Yv7LgiJpbmLuB3fjNfbgYnQbYbocC56Gb9AuhiqQr2feEzfY68PY34i8i2fxMq7L1kLkFQWinKWzj2pY6",
  "key5": "TRSFF1eyTD5B7VuVCgXgfd4Gyz1tVL3M65HY5q2ny2pGQgGMWmjnW6HdpEYRTK4UTKWEd4p8mH2uZkJyxFTrihq",
  "key6": "5vpLRBvJPgMVm3SNsoJkz6ueDMy4eu7CCefWQ4ZiCLfgSzbJAXToLQfug5E8WdqzEzM5iyMRodegVCW9YUDfwkQK",
  "key7": "5nWTyj6D7JkYsBWoM9vqDQ8atdhp67XXTyihG38o7gGQYzrUMyu9C3YxN7epQJKrwSyYrEKHtt1QVHBiDWCFtDiG",
  "key8": "3weYzPgLfzbNAYN5p8qZ7HDLrCVJuL7ADFTF12QNnTn85s3niBzXm9JUa5av8a2JfcVLK4PuBrbsk2zbnkPzxTeo",
  "key9": "45Ty1agP87xvWaMHp7AyDYUTZQ4bU8fny6re7W3BN6g4oLUcTuf3w5P4TSCTdenXxnmPnW7v49MPys1zYcQhBtS8",
  "key10": "2nPMtvunNGQbdSc57XX1fq83B58Ft8rBRzY6g129ya45azAmmikm3ndARJ5Ypqgb5Lh2Fz81zHDTTM3wCCqbE132",
  "key11": "3mTqabHnpV7fXeoVsfgnrzu3GDEkcaY9KuNoCo6tJmyWAsX1eNtciowai6t51jCSZtsPuDmafwA7mCz3RoCT2Qr3",
  "key12": "3e91v7hc2uSNXcYxmHwPXm2wVunds9ViyJhf2yVw3wbZd1DZVhvV3ba6M6wujA2ziwcVXq9z1jWfB2ax3XdD5HJV",
  "key13": "3TJQTg3UFwPHcWLQqHaVCpj4hyvdaqfsCzgqy24djXUmZNbQEtgR3t8jBamwrifcqaVWykvu2G3AgAhgtjkNHmNu",
  "key14": "4iZCWi2rR5ykuaXh6a3u9HnaPsoLfqKcVitYV3r4NNmYDGBLeiKRT6uTeuEyRVJafmHeExdakjsyskAw7B8cm2EH",
  "key15": "5LLEVbCLdiFcp2ahuc8YtEAhQzm36XXGnF71UEujjZ8pHZ2ZgovJt8Z2CvqFh71cmUXBFH71i8CkhKRccaKGpzCh",
  "key16": "4g54o4qHTJXazEh9MJCeyLwbG96MHQS8NJoZLkNLdPAjxub9AxWZ8yuX7LhwuJDGchg2nz9VYQSAo5XQmKdYy79p",
  "key17": "3ACTC8H4vZoMEM5N9qxBF1cyKdG9eUjYyRpFCezr1zQpdpNQQhQg97BBtKwKTFzaPho8XjLt2KxvqVfJ9zDDBS4U",
  "key18": "5TsSvUXxKrzACcy4aqwmK7p39dRoi6LSjyXLDiahXWwebeMGsfx6Ar9QKJi5WsAvmDFF58taDoMWuwPizVWhFaGu",
  "key19": "4tZsi4wdhghqCShcMWrtV6bZ5NQWgtQgNmBqkM1b19hBcjBkSsrQ4bYX5mtp1yPsBtKYvNrUSCXtDvjriLKf2wdU",
  "key20": "4NeHMjp8vNVXa5yw2x1WrqRnnK2LnUR7aWPePsVmFqCeorJgYu9grpJPU5B6N2Rnn4Yj6BQZiTqJ5G4FdR53uSCN",
  "key21": "3XsJL67XsWAe9D7HbxRCVusUVcRf1hHsPNQiRnmaVGaanrecS1hrtyzubvRhwGc85H9JpgFdQC3W9HxGTBFTdK6",
  "key22": "4rMxKW7ojPrrpFwQCWHPDRnpe5NE1Vr6RuA78Rgp3Be5t5qegpDDwxQkamuq25MXNkiqPy34iPGhTKDWf8ufAUYH",
  "key23": "2bVehcV6VFAbDiYJmZXpaCDvNXJJ9YwydXNatE1acfSFs2tgZxiGvf6zXXZ3y5FcyEzcQj9e5rD6gJqU9bJ3p9CG",
  "key24": "4QsLmCG9mXqUVyvWo4ERQMMac4iDAxAwUo9mw6J3aYtJRiGnAwnnN6eMytAeeY5sAiScJqf6eL3d1uLbrwWNDpm3",
  "key25": "562RSe6JT8L8Q8uDTaZAjqhnBKMzUSnAywru6cUGo7nFvLhtyzkoGn5nuEzPPtAfR1ubgecKWCK7VzvbtZDGRzm1",
  "key26": "2QckJJUaYaYLp5bkyCRRbztSEJvVjhBcYLMnmczpsvSDbyLaKaDxfBJYnt3RguDezJZX6REpoGa7Ts572cWmmGn",
  "key27": "naAHeWTKCwLtnZ1XvYHTmzNUbLnLiQd1U3vSBqN4YXESN5VjLSu2LnASwqFtosYZFYnsm7prxe87QWTh6w9ZKvQ",
  "key28": "w5uTsGtUcaEAz3KyX77rWHs6go83xfKzVgLsjx2q9hUyRMar9fbAcmnLbdmn4TWkobT9Z96QVTZc2KEGpQVgXQW",
  "key29": "26fZz5FZSXzUS4peZLFmz34DoPHk3ERZ59fFsSfNZGRKkFsvdRyAqKSamu4eVSmxAG371jE7fPskMTuk14RGYbiu",
  "key30": "5QStBFaMmduxb5v2zJvEF6ChwEsBxKMEWuLzFmDhRVWuK7VMbeaprZ23e3Y9fDm7rM8K9thNuqD2Tt7rk6HGKEgJ",
  "key31": "2BuctfBxtXMPcaRc2vHbuQU7BhsH7DSpE78H5VwSHGWFTEuky9PjtRn9BN6a2RZ7cbiqsiPxGoJUQVnwDMF1Umsp",
  "key32": "2meoFKaeWCgdT1bUHsfFE8LkEaCusLins1cd61vrXYYnVYko6c9KTDntAYu15zrfvtietzMnDxMZwfpCmpZF7FUq",
  "key33": "3DspBQoRUbQNqSR2M2JBahTA9JpB4U8cPPL49ziF6bGvZDXs6mjAonUyxhD1vQKQC9qRJcAxkrPDnqPpRXHQmPmt",
  "key34": "KeDFw4TDMeziT4ggbgqZNxz85ddiaFuxAhbc4VssMhNUbd2t9dSDoY9VZKPkGNujjVmxf1HUAMHkYVj2vffg4Ra",
  "key35": "3aXfGSeEhD3M3K66ZURcr9TvAVjxAY5uPsySmNZpf33C8zGNeH3VUgFXQKNNSCeVMZmfAxT37tn5R8L5nTubwp1g",
  "key36": "4dKRrquq8rcqD3DHibmiZHcNuYMyW56Bmjfz4DdyY86yDgdhN9JDvMff1WJpGoQv9oBQ2yHEBaEbZyLnduxcGPzP",
  "key37": "2bQDasyv2uVwRMwmSHX4TGRiGt1YZw3w4jLezZmQK4gAhw2YTqrgrbNCQhCw4esfFHKRwUkRG8zbamsHMJ2t5YD4",
  "key38": "2hM8Nydw9menH5aZ4GxRKNEDSK1UP6t35oa3stczgmRdVHTtZEERRDGigP6H6dCNCceXwf6bFkJ6P8VVjBhAEGNt"
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
