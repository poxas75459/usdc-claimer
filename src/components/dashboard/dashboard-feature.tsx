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
    "54ARB3mbkPp81VoYXdi2D29nuniGZciyTubg15RZJE67yGhbz47SAJzuchcM2UZQhmSAzDWBYSEtRjUds9z94Wug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FL7AuqAuXtDgKR9KGsSYaz8XE8hCYydw8MuQjeH3XtBuJ4gVRiSsRMQAz1guPXkXgKBJWFRTBXkDYBRusSgx8Ef",
  "key1": "66kmnNPSra28CKihrHGf1nod98x5t9QsgfFCsmUrV8wEgiEd5trDejR9nYEqAQ5xBU6WcBuNiatrGUa1BnGuw21e",
  "key2": "44d1or7CCi5YttHW5nm2nKRjr6ssmDFiD9qXkPkct2xJPCJZkyaDqfEnqW55BEqE7M2k93ZM4f2R42NqBkmUsomG",
  "key3": "2xawEQohsRESoTLmgdzJqrgC8j9zX4XMzUpSRZjrxokxpGbzHZL9pMRYYGb99XtMtcFsjsgkWcMdymg3Z8Di6Fs9",
  "key4": "4Yt5uwouuSDkdvp4QQ7CkdqUL3fLuvarBWHSnQTSvmRBvcsFpPFXWhittEszyHdxTZdvEF5UXgDJGTUQ7w3rTdDb",
  "key5": "2N6yT9dHFTGg23dvgJJzah5vQSD5bM79kL741hcYWbKuNE5D9yjVGaUEqBUkjrNFNgwacwDiEe3HEmwU1Bau12W3",
  "key6": "3gn2Xgadf4LQCnPioJvfG1vVVfxLy9eCCvD329kXRe85GNUvdkXj2yi7k3V2iBn27vAx6s9wcD5mBT8JMsLoFJRa",
  "key7": "3zfLyA133e9CGJLNnea99i4xNmTzKqgtYbaxP3246TumhvSXqMkrtH2SnktYyX5UU8q2efgDkqBVKgw4x3WYwsKv",
  "key8": "5hdBNQdaeyXGRYyEDL9B5MjN8VjFhuuWLaSf4aq5KJ6DJKoiNH4WfNbRfWTVc7uQn5U1qLoLTmEyYWVJLzQaLzUX",
  "key9": "58fg6WxQDAubgvfrjgFSdGXtNCy3t3UY662BfU98wJTUjHW3BjH7bZ7KppCmg5YcUVV77tUWa8bZZ179xjZETL4Y",
  "key10": "5BmwwjwL7xMvHtVcCda532NAMybYLHdUyQFM1Zi5phDfTzGiZcki4pNesTzj3Tx7raRcfMukS3F1jn1xp2qTQhtP",
  "key11": "27UgTMeLLzECRivhikRn6BYmbNj9owQdWgtUiaq81AkvczCd4XwLj7ZJAREnN8LhPmdqewojYPmRrz4pQrzbmmzR",
  "key12": "2R9pvzj5jjQR3XNSyDQk2Z3EC74A2DT2ftRAZ1cNpjrfBATZwes1VbKHXgo5ZVnh4XSB55t6hQGzRFNwiBYkm6hL",
  "key13": "5u1Aa7vuRTV2ZsgYmYyqdHLr9BD6GaSqKnTLd6x5BSiQQd3JVGeZ2o7LZs3Px4cAs5MCzySPeKFW4P4TUWGzt4tB",
  "key14": "GEu8JarwgpyLABxh4mphwfTeg1zZvztE1NkJhNcWHWNdY9pSo8nzXrpfFnf9nNc3MNYggDZMMwjQLZtierMnh5Q",
  "key15": "ot2cGY4KK9urGui16YW81mKQNWhEGkdJJG1ejqmhJmUdbRB4ocFYjnWts4xrn8YfcE41hv45rwPKtbaDJzRtKXD",
  "key16": "4A4JZe3459aZhGkvVtfTNSVQrShKJkaUpasaR466V7JE5mbaijN3nZ2TxEYCeaKUutJ6pn9gHUCEVD6uenzhQ2mK",
  "key17": "4Rkxq6e1uaLtAhigGB5SBFVbnMRNmuQAx9BjQP8qRuRT9p8WLpvvTmy6PBXBkrLhgopqW6NMDgBDsgNJvE1uHM8e",
  "key18": "3EuFhjJfPXvLFCPSrABJZS6Ey8JBYVLr6PRE6p2CDMqB3ii175k8n72NEyjUjLNqCReZtc3horwfaTfjc6MktSMH",
  "key19": "3JbCTCx1SCR5rbPcbNojMBcqSJJTonu4831KpLPE3iHqMHa49CX7tJRSHtEnGFJMPMN3uMqBzAKQXGVvfpqbU9m3",
  "key20": "nRQ7gxbp82KQiJMWyxiFkM541AjtT48VhicmzfwDWnXYp4p18vmtnADJgy3z2JVdAXDmmb9RxDofw3dKB65UKNp",
  "key21": "3h1XYMg8u99QH5bxkQNWKLpJbXHuoFuSD8GJf7XbQ6nkKGZXRcKohwRaMcdHcizCMujsi1or3fHDjjg13KDr9FjC",
  "key22": "3duZUMfF8YzokF518hWW2r42Ux3bfJfxzp1VLr8ATJpcF3RHqBhYdnRdMHiUSfbCyFZ6tJbcohhXRDqyoZzVTquJ",
  "key23": "n6pHVNj8wXBYuFBsFSi5RSu6DGd2dHuW4KdbznUNwUPjmPpimtq66Ci9RNvEwhVxrfzdZc4g7PAeCbbeRnjdD9S",
  "key24": "2x41fshDCfRXo5t9eyFRitT1N1Twn6Yi5ZDfsAdJmZWCLVaLMB3amQg7VTCJLuLhhpBqVKUoESyKzYrf5x1wT1fe",
  "key25": "BnXXbQDBeanUqntKCv2ord7Y4EbunjKgkZGLfHBk3ffoeej5p5jft2535dwXAwE7ebN2pAD5tSMMh6ddRvbb7b7",
  "key26": "wbE595xNQBTBA6RHjHBFJMGpXvVBfo2jQpAHwhAevgabE4dEM4hYMmwUcrVWwFvyHi8FYJyBUu5mBDZrSDnH6A2",
  "key27": "5qkSE19kv6WBXNcs3gKQADM2qWwtjSDoUNZyQPDEZMx8yVBqPYTC77gohroQ9YBcaqpHA5KDGv2qA53pTP5wQKdn",
  "key28": "3oqUocpXC9Up4s4TJWCyQqEcVasdC2RRJwmJqB7LY9bEveQEKPAJywoDYzXUQtrEkuPW1mWGYBMujEnp1c2TiYHQ",
  "key29": "4NB64BaJVPXNGAMJyaeXG63jHd4cTb8AoRvXJJJiSVp2qgw3u3qBJCXD8FbSuGZ64rk8kNr9ykDN6PALaFhZmR4v",
  "key30": "57y3ScRKGrtNvt6RhSyothQZXB1QVtrreELEzrFa1Gf7V13xx53wumWeZS9WMKmuLRSVbZL1WApTDbHUvhUvs5ni",
  "key31": "2tuLjbeV1dX8uvcyRLUnSKns6K5nfpW7oysW8CdCgRgRvAq4mfFG6GpPsd3c7V22rTyVe5XoaPnBME979jEcYSQ8",
  "key32": "vvfyPGQR2b6HTUX4scVeT82MoQTmjC9zj3ZaStRLUKEJujnNGkZ2hfM5aFPUra3eNrXSdb9pPBN2ZJsLtuYnoXM",
  "key33": "3cZx8xXftVULLdhJxfabYBm1AnPPDgdfzzC7JjVvHcHek8P3ordNmeQBuRHBfMzgrZavSwetBhy7BauvWRats4aQ",
  "key34": "2BS6fwEaHgfBTWaiFbJmTr25rwENf3U3iMePnAnyEEXUFHJELFpBsNQ5g3vJqnQzKpB53R1fnmGWQANFWntsC3hu",
  "key35": "4pPnEVQ4PXWN1woM4huDQvKUE8mVabfowGAd19Vwu3JYQekZAKxVFrj86BvahgEotnqSVs3rsYJ2roMmjkqc6oCL",
  "key36": "5LLWUAvYibFRkHeXxfeAvE5E2bFhAQqg3nLwRVaeBLhgF1Yvs8GR1enDfJonKnptezu7P4URBvZwyEtbcmrA2rXH",
  "key37": "2ZhFSuLA4uLBTpPQbtvbb56z1x5auBhGAteCK9BidT3mXeTYvFF3F8pfX6GmJoTMTZKnLYGSU5MY7R55UkGEgzj5",
  "key38": "VvstMyrcFZVx5Atk2NCiNzj9PZZ7MornKsMpyoQuByw5um9MyfPeiyzpQxzsgZWh16SDjYt16BSVRvezmwRcLhh",
  "key39": "2E127qHdu8YmtxRtYzNQ6ZMrMzX6uYmufGQHs5KBuZ2Y4ZsACmfg4vYQQg3GF6DQC48PBjLN5tzDa7us2AqZUjAc",
  "key40": "2oGF8vjXgUydCW9NENk9g4gzJKfGLDoGrpSMn2TCb4LjT97tkqjb9FA1s8mTwsh8LkDPPU8Hd7zgatYKPPxuRuwS",
  "key41": "49okpQCLL6i93dunEAYMKCAKXKahBAUwqnrLdCoRU1RSXbuC8EPPvLz4tiwKZGLnajsxfVdwazdGFUNNvMCGZUy4",
  "key42": "65SB3SaK5YLnBjttuRysfnqhMvM8MDAmppoSWHoDwWuVgbv1dsncYS3nLXEZiAtXNuGz5QvLbxRFkDGwNZEK9JL7"
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
