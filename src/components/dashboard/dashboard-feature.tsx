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
    "BGWcU8xBEz2jjvHQAo7yhv4VgPxesre4PXSnkzFc7REMt8rNgsqCndEFF2tdPM5ntbn8bHVqesCoseEabPenJSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dL9mG5vWB543LkcXaZmwmCTsGc8gHkerBL7pvYhgnXGCDRTreKWAXygGqWdX4h8XpFc6Hr67xztHJKNDacWTa5H",
  "key1": "3u2FLuuk6a8V7UNpPL5jhd8dMqPRij7gKS544GS4TMWdtnoxVAcVKGFYBNWS6rtrshzSPwhmB1ciSvAScGSdYnPX",
  "key2": "xt1ryHt9xwCbSiRPUrqiM1Bb21WxVZDLPExQzeqb6CXhPy4ov4A6hnLmxHwAo1XBRs3wopmNvxfkK77XWNrpnFi",
  "key3": "4Fabqx824RMVwS2GiN56m1m9AZ24jJ1rWCN1NSJZr6YUta7RenY97qWGdMeiLoFVfJbyR9ZMgErUpQ1n2b1Kn3pq",
  "key4": "3zmMVyDMvcpLhdwrGdvQ4sM1DEYwr338pX9f62mKVLFhqc4AceY4TTNxqyVVqHbuW3Z4XiaBjBp5M9d69mCyae6K",
  "key5": "5FNdWGQBT4orBSDncuuWyyKz2r1JHUrZS6svbuEMHFLXJKYHxXZmE8zptRarhyzAYCXyXXpX3BgWcs2fTtiLRLHc",
  "key6": "49r9AGNsEZvAWddGxgTvN9RCWtg1gBBbqHdKfZWnrRcCFYv55B4qVW3mHgKeRHSrbSbsgQ3srucQoeT5XJnbzWxm",
  "key7": "3bCwMZJAZrTQZzUgRmxWT6FYALQ512L7kLr5zoHSoRNoxRvVaGsnGWkGZhYcN3QEvAHq7da2FADbgD4CHfZCsWNP",
  "key8": "4VSzjTM9RMxygnHQVuQr4fKe46k5pYvQr8yeCJSmyMEdqtAgW26JyMEg2SDMUiUyXyZF91NUHZByr1EhMBi8yY98",
  "key9": "UKbVHx1wBhE6rFpbDYdBZKsdEh2xPnQEcj1HmyJa3abb6PKRyUxSpxmN2hbC4uhGocpHRvHQnf5cmGS3m96cgyG",
  "key10": "sUrXhp5X8644kRnyYJRK7WU885AaGjQ8UGUjezMx1fw2nh6JzwEY61zWsPJPSxmxbjbFJmkCQSwZjBUFhDyPApg",
  "key11": "56anTLtaD6QMviDj9ZwqMLCBvNjQeZJLGVqsYpViGyQYqMpuvZUVhRobXQorX8o6sMgpH3UwXu2mAEMwqLkgH6ZE",
  "key12": "2mugemP7D8C9p2qAigAmjK8B828imJD9fbzRgi3nHa3mVF58MREBDsQVfAUwqbpur95rqBJKGVLQR3m7fjDnT5Hz",
  "key13": "3r2pXNqAboadQGad6UC43t9jm4qCp466vGuqn9wBMCENpBBhoAJ6miy8hCeYDhsSwSd8xF8YtsLh6ia8FTf5Mu8M",
  "key14": "3VL8PhJ4i5dipa1Nwt7s9WYih8feqJ8vZBszjJfZVcvnV7JVfYncmeTrtygKUyr96FSXH8ssTbp5wjebS3XT5rAb",
  "key15": "2FZ9GmD4gxetx9pmXyNfe9EdrC4rJJWZZtSRsYdS5zpCK5TqDspN35rWJRgNEvAzHRZuqo4CBRaowepXSqyG4D7S",
  "key16": "2b4nDSyfdudQzsUtq4CXwtv9hYZhksrXWtLC3b18GkHSzXEtiXRv34UuyJxir8PWzKnHsBj3BD3awPbH3iUbBTMQ",
  "key17": "HxHgAkg7MrWyUaDzb8cZb3PhJtCHehm8rBb8Lmwo7wPRVGCdQjrPrtw8btyuDeHhTgHe1iNHSiRKXKw3eCEkmFA",
  "key18": "3AedKPnDm87MdRC4SVcCZpQ3Yer6yzzbu5TnAyH4T7tvswwTrdffUrNKa8KjuCsk2FF4GGA927HWV4N3wa3h8nF6",
  "key19": "5taDneEVdQ4nfSxo4cjNvzFEQys5TS46nfXyjxuwKbUwfSoJWszbBEPNWwQuwWt7LtBwXDXyrAT6oHBAJ6ZW5FJ8",
  "key20": "ecAuzsccKKb2c5229Kg6XkbJDNzgP1oG8xYNGPFDguWkYjzRrTcvPUWx6WU5bDSVsFZGJkY2WPbTnnjrDKZ4K3v",
  "key21": "3q4Pt4rSqaRneFsBwJRZp1GQGJoQvNubcyiMvhLko8oAZAQ2L6xnSdf1K27cwtbADSq8vnHwEDti9DNVbBbS8uRk",
  "key22": "2Pnh3Pmysua2foXsWYAEfV9HgtRNB5MzZMJMkkysSj3BaAFMujN4FNnZU1Qk3GRzuUYUJCRjD144QJxgyRqniXZT",
  "key23": "ikbpKrZ3NQ4CyoQqSuxSNQrnGUDaTjUC4KDrf86AwXBS4QzUuNhRMc7kdWDbyjVUxVk57TGqGHjjsJjNxHA1S2y",
  "key24": "4P9yik7HZ3gC2zBN8yz66rFv9esCsdc7XYVScfHcdAChReYJAjpV36X1ePHfGHXWFeUEkkRoCpoB8xcmqNidMeK3",
  "key25": "5r7GZPNyK1tjLstDEkoe7PjfDpL7MSubPUP3sFJLZNqzLfPiYVPsPpAgPijJfMPgSszfAuWuvEDQ1w5Lnbvxwfym",
  "key26": "xNqsxjeRnjhyEahUgQ7AzdpmzphFqNZdqvLwoMfCFKa15Qj6Fcs49iLyEKTW2PbPEEBQ5SQQALSmoGWnyZJ4C7n",
  "key27": "xCt5D3ndpsAkD22F2hRsUfdEgGqEtBg8wuQqdbqhnmBcsZzDVhsg3KZBDBd8Fxmbxfjz7v5dwPPiRhUgGCx3YuX",
  "key28": "4onowMzg7GMGtcK3ULfnwLyycYVEKE4HFSF6WcYaG5bo5wxV215yTBrXKnXHGpTW5VoRmeursS2uP8wBQ2VGK8fZ",
  "key29": "5J5MQo4c4EW4WgNTuiohwGX72xpARfMEsuuh2YYRK7dMepwwR51wTSfLwAp5TYAXnvBtoKoc4xRt5zeghzEXxaFe",
  "key30": "66oVEt7CDRYvEj1rq47FGqHzWoHtBBvgS87hSBZD4bXsLxYW8a4fmHB8Px9hFHcyuA4PqXX5fNeaLAjA4XbnPg7S",
  "key31": "4NZmQrwn3KdVVrfji7JsQv1UEYKDiYGazbfXHeUxp2pWhXGRxouxEyTuFUPMRni458aspZMGNqWJhvvg1suYkRkE",
  "key32": "5bPAjsRvA4B4M87BY3aSWobgLnj8UAVU6bZa9R2PctFMBhNygcvWjCQodbhdZTKmUGjoxZbbnZKbRsq4By2Jzusr",
  "key33": "2vqeUvoZkHETWfrToKphHZmNt2XXtHE9XnGsWB8Emr7UhMGxjRhigfvsMam2Hu6DFTv7eckdw5RjmXtwHxXKzwJk",
  "key34": "46wNAb5ko4PPC8Uir6byX6rTfRNjTXss7ChdbiHywyBk1ibXqg6LGh8TnnLN1hLzBHZNgHCKEj21mTb7x2sTpeZP",
  "key35": "Vxj9NjNWrjGfGfUDkT1tJh1yZwuWx9FJakWqtWFAdMbevi9dje8eWs4nURZWyg7RJe4EZx1jiQHz9NF9GJQrmso",
  "key36": "46qm3zbF6CZcb7jtXdvStsSSfkX2pqptR2YXr5bWUStP9BdZ31iZpWphJysYvY6pFtRKPRgjBk1Diid3WEMQG535",
  "key37": "2L7sDQPVDTNKhu2PhwaJmy9TmgXHnTtSpiqhA3f58yPXrjq5R5DvhU4vciLb6WQg9tuJ88guPA4hUF1A1xXA2rks",
  "key38": "66zq3fLKoVz1iK2i8j1NqbrwShN6Eyz1XeUYbKeReX2okwmkQibDKtwRp8j7uu54iWejZXDUN25PoFoSjTZ1BbXd",
  "key39": "5HSkGvruQYCeeyAwc88GfWjjgCzEWFnvCnDQDBM9P2ZF4d2qopwUywV7pjBrRVnRJW7yLDh3xJukVvPxdTkoib5T",
  "key40": "4JWSV6T7rgU1Tb2Vq75bD42JbeedCF9Xkfj9MpCyW2PBGZfHEirCbtT2THCdiBsFRoLcP1GccssjvwMZ8ebeeR4G",
  "key41": "2WoTzYcJDjQRn9jEbTEyfRVqZCEEaSyNMguY5o4JnJajLACJJ1jJZtRR9PnsnLYNuYg6gYiF2uQf1baQo2RBAS14",
  "key42": "5g6T9oEe8Q2Dw4J2B8EiD8cRZmWdhNGKLjKCG8RxC43fBpMt241GQeXZWfkkeTAv1Wr6AS29NCU339QoTaKhK7Hr"
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
