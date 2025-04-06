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
    "P8yEEVRh6tef5cNHRoBbbkDq9Hcz7ukd9xGRcMhtSmBxxPg4yt8C2TAuS5qfzbXjo8e15J1Ep8NELHn3d9PWKVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZkNSgK8fQ7J4maBw3i5G3brTWAkQD7n4H3sCXmtsdW84XmU9LFAWgwmUaYzVtHJgUzfec2McY5F8EDnDe9Xde8q",
  "key1": "4XRHsef2NGvrN1tsvmVh6n2CN4GBVL7enVheSeAPDAsCrtsz3PeiSaryeXHUviXzPSWGgkoKwVnYczZL6g1qPtoS",
  "key2": "D5h2vC4q1SYtAeGjZLComDkPxzHpXBjvc2XrdXCRWZK6A5qB7iNtbU4JWJsNNX9eQ6mWnmpKgJKFfD9ZmpEdMzW",
  "key3": "2RUFkLyZtVAdNx1oaSNSMXXy1STptKZwdfPRDBzMavT9WZeAbppVEx7FzbKeVF8Np5gPWSbkpPSQF8NPG5Wb2pyd",
  "key4": "5N1zuMhqxFVSxDvv7kQ8vKYd3B5K78e4xbPuzraD3jhGviKZ2QMVvKvBoi4sRRqYQrYNj8Zmykjr22fEtu759pkX",
  "key5": "4obK3QoPVYb7cVdPGASsx4UwosLt1BTR1da63siK8KPiJZ3Z5ihJa5FghfNmngAFarJ5hDuJSE6c8jkGWcVyC5EF",
  "key6": "4biDDvYTGbBFsW5GYqbqscy4Kze9av35yfDtavZrDqw6k94NfBHvi62rRDT4pjT63Z3ERxF38HRT1B1UzAjv3kWo",
  "key7": "2DTmVp7AsT4nsbsqgLoTvwd4AEv3mqbhBHYxssujgxBXV8y6oRV72SuVivUPZtQifY1p3kdpuR99iwMfBnNbozyj",
  "key8": "2VBsUqtwrGbtXymPqt9Gq4uWCq2XGG7SfiU4qPsCvPAAt4UY2utNR9bDgHXmsHxd24JHVX13jJ7jxrPyLX34xAHF",
  "key9": "4cevF13wiqkfSWS3eTCq14jKsGBwkzTtaj725rigCqfMNSFrE6bLEpT78AaLufigptW2y7gSPh3LWUpVGzmYxXXQ",
  "key10": "4szoNpXJxK2nvtHzuZKMTrW6p4RErqUqRhvS8rSftHGusgfu6riekPSvydiWZrHi432WYvvD7ZfZPnkE41eXsRKw",
  "key11": "4TAqf96iBdCcjF1Su8o2GTfxyaJXC99pActkBXBYr8ds8BDzubRaPUKQmfpLtNmxz5ET19pGF6EYAvgBVwL2jEyX",
  "key12": "56XmfNyHvA91rmb4fVqgpX7vvjVUiM4Eiabs83RD8DCjbh2PiVwN4n8uWQkGdkLErzD5HBGk6fSis9bmpU6pqf2p",
  "key13": "dhPXygpL55j1FBtUvvNLbre4dPG3d13Mk9J2Lsz1MrkB3uzwHfrzTd2qCVtuDNWXHbpbHoV1fkzgYTFpfLusCUN",
  "key14": "2CWoSGPVbhUfhrcz4urRTv2G9tDVmivb8uERqbv5KFw8dsxPFGJ23NRa5KXy1ptS1LAq7t24mR7rwdQrc2j9oK9o",
  "key15": "43wWvyx74Z2fhBWEVcWh54TQdz8n34WUc2yTvMRarBt1RaAT6DfAakbwdi3uZPYjz1BUkpMLLcUgSN5gUjruwJdG",
  "key16": "9Ft9frgtqeWzpeGxzrhTREMNFcjg6nk667zxrEAfMfUfBb69B2fy3Kdzajo6aXW79n8iuE6zN9tQF6z9j3uJLw4",
  "key17": "5HwpPmKpUKXbgQg6KunQjNZXQKWz45Uerr7huLZYkbnJSFXJyLtTXBfcHe8zQ1Ytj6Wdvi28pR45hq48BceZoMiN",
  "key18": "42eZpZzyZugRiHaB8kSow2UGRAcoCCekWrjRVq59e7nPeTeUNn3DYNyvKa2yo1o6PiEbsJCHSixy4TowLsGQg3xW",
  "key19": "rfoPYQPLmyfpP94TFnuZK5mUP3f55a61ywaExEkgGfRrgqSTEMSfHYCyzRWFrcg6oawP1hx4BZATMvYebVXvmPv",
  "key20": "2wvnT3ZwYqkEK5eRoww7jsNuVFHGBdYgb1fuJM1rTDdnQBnWuwNQgV9TsnGraorNevJfFAjqu7VrVGSuW8uRy7SH",
  "key21": "vYQt82hCnai2sVuV76WL9EJ5J11Bx63YVuLG43J9emEpdUFG8Zwv4Vy1NCErF8YDxqdThvvoYGRoPrtiNqbSDjj",
  "key22": "4pGjuYXsWkwbzhrxpijCrHzaookWMqruKdqaG3w3pryMTJgHXUqZgnwhUYDwz8p7xBjm2e7twKpD39FqrYgMNHoY",
  "key23": "5iPR4SVT3XPdGH7d1SEJWLvND8BCXBxFgU6XnKUCk7MVLWXBLYuFDxh2XVae46tDdMyeMjNfJ5ymJH7qtCc1Mjz2",
  "key24": "GkTmjbPS2AYjF7gJuhWSxmNsxx4Fy5NZE5PyhzpgrVdMpQx7LeoEVAR15R9t9J4bKJGPC3ioyW2eyp6uz73ur8e",
  "key25": "VHw3Bd2bk4DfURLXeMaLrMD7JP4pNSbcguMUE9MTt7RZBfPtxCbmhpEEhZpQ6MzwCWDDA6T8vbbmH3mHgmzs6yU",
  "key26": "PGmW8JZyiz62QHrmL1Z3XcRMTwhMKR7GuZWxr46P54XVjnFaxm4fmHyZAMdNvL14ZGU4kNByyphu6xLcTVCepFG",
  "key27": "2NxUotx6NePuFsCCJshy8yiGE14867ARVE2mU79g4exTpHEJb4ixeS3ik9VvxTGVTTgCZthaUxRSrbfiEVrJgNki",
  "key28": "yNYFKYgRnUDZwVeZmQrTit81VsokCSr3bDb6DrLuAbGNK3hMCsamcMCnjq7xDZn34qMGhaJqLMJAeGfkgyHKcvj",
  "key29": "2uSQ1AFY7VfrVdzULqepg6DTeJ4Tzrh98mk9QEXsq8HH8e7A4yLkXpccbPj7pxVXq7AwAAmRBPbikeZEU5QdUizs",
  "key30": "RFdArXMPS2maiuzwY9u1kFciwKkaiTc5tZPqa1BiW46cVA4z3dYRd6odXb9cP1uC1uMdxYNGQuCXvLgKTiLLChz",
  "key31": "8u8HXwGi7Kx1fvYcRZfR39NUsfLu7ynJHT93JdvPNUGkJLiYpZCF4kQqU85pj3iAFabA5KSJeu56nYGxzq8YzJq",
  "key32": "5epoVoEr9p5gmRtCbTZcTnzEAR4s5Fostg7Egureaz5vgfqQZZmqQEp1Ed9p1HkW4QzLtbAVuNroMibkdMXE54LK",
  "key33": "3t8NB16P64vycSZDd8Jjunap456aX6PRyw6RhSofkFiPpforGF6Jy4S5tEBQKPwjv85CsXFWeV3t6k4gVbvUBcnV",
  "key34": "5s1SbR5vmXthoAkE2immD2PPNskvtu2JgvtSdpovfzxXnJkNqWpLbaCeSoaBeSwuUoWeSwKvJZXr5BeYxHkQnEH",
  "key35": "3Hhio8eQfPz7qdpMLQ16GyzLTc8YiG2JXBQXP6BgHMfXjVxx1NLB72kmDhqQk2zEVmXpuqmeH2sPLLGsLS2Ckmg7",
  "key36": "3qv5CcUjvQx5Zvx8cRDQWqtU2SBvbM2k31yJdNhAYQRBeGX4PQmnTxPb9LHV6cx3Yd1KSnyAtcmWKWV35nwNJCr8",
  "key37": "R5nGyKn5pUpLQSwXHKmbBeEK2FpkZuzxwpS54UUixshYHD3aXMcd8ktyYeQSi7JiWMLax7du7UhhUau1isyvsSo",
  "key38": "3BpBZd652LzwUr7GKn2CD9n2LquXXTQdKY3JbxccWtFnC9DSi1PGf7duYYdkjnXTE3zzmXTQZHyDV6U7z9xbru1P",
  "key39": "5myxQAiew6QPztb2wy8jj4zMukm1tkddAuVshjbNcu1y9EDjyiB9SKFveXG2iwkf3R3QcuASzoDSq2MZeR777t1b",
  "key40": "3ZXAR5cMbfQM1AjsJHvUn53giTq8tXasxoFw4kM2fopTAUhtgs4bdFRFAVmfaGm8dmHeq8Guwr3P1hCnJjYYokEV",
  "key41": "315ABcirhPXNtmh1UTr5Hs348HfqaBmz6tQ69vre4bV7wuW7U2YUwjQAuzhjPJigmRPmEoDpAioKhdoMRmiVmqgu",
  "key42": "4PE7rCguVAswSxsLkayxphALs6ADSPst177ZDWS6sSwrtrmpCzR4qfkyM5HbsAkCtVveGA5bCioyZdtrmqzuwYAX"
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
