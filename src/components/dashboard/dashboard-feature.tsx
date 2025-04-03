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
    "5m5LAHc5QSpRf96iUvLMLRJmCWzSicFD5PJwpwckJFgzWZv8CmMvxYxHusL2CUK3QpphcyUXEp9qKFE7GouuJsHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "suKEpVAWh1pggFY4WPEGYpPqLR7LCVtTsinRiUK7Ls6gfgxYTYQY72AVrCgrkycaCB4rPjLZo4Tgx7YbspJ7vph",
  "key1": "3Eovg9MLSnA5AkuNuyK2r8M11ZqhGgCzXrGct2x1A5CJJMcWhn1Eh1qHAprLVSPiHSTHgrSQM7suyJ7nmJRpW5mH",
  "key2": "5RZwx9ciL4kdChsqkm4m3DQmrSCxp5ABnkyGg11949Wu8aW4FqDzQVGw3n7pxjFXMUDLXv8gFBr4hYuTH3bWchzA",
  "key3": "52yn2Ej8w812zRgv3T889bNgZnTqh6i9Kt9N3ZzkrQG3TnixPMigN1AUx3UMA7aAGmndoPPjP5Ej6h3XrVboLY5J",
  "key4": "VV1unRgnA1CBBTmomEciK7fCC9BP5GaWg45V4G4QtbRrsRFfPdC3iYTJ6GtMEQdGgo5Nuxd8PvBhVWUoepwCboe",
  "key5": "4BjTZYDZYg5VvmMuwGGFNKb3wbZk4ZNzwMj2AJzMAZkcA1A9CGBHmcYjJUah7YVgDZPaRcRBJcypjr3DhBSfHzCv",
  "key6": "B2DaasCBAwYWstPithn8NmLnab4iQ5cQ3Xddi3yrYmHyuNugtN9gNGogGJoXpbfFxif5EyyFdMthM12iuZfTwxz",
  "key7": "4fG9sDzPGPitPNqSB8f78mmNN18m8ZPkRYo7RcScVTaUiE2UyBButX9eaKuscbor3MYy9ZjJ5tWczdtNn3cNL76",
  "key8": "38Qaq1wYC5JajYDn3xFfQgGc3tkBKPtomA9Z75tnHgXLCExk1ftAVLx6jFHUc5GFD5pytXP2NCSPXsiKxEPxJy45",
  "key9": "3Tv4aja9pd6DakZPnTYE3Uph75GgGKB9YaiEVsoNSBBP3rz8v3LKniMb6T7R6trJfAYxBCH3X7aRpsuGViZ7vafZ",
  "key10": "34JuwriEWzoMAsS9djN61qVsBhvS4XKLyvrPeRgJtenTahBkiTfmaapdG12xrXJkixGJmE1T75enUY4u3xqasuJD",
  "key11": "4kUpuKNKoCj23Djc6zuVXC5XG99XwECydjJ9cxBDkFHUC8veyZxMtd9DNUhL3MQzpSYoTs5DNN1M9d4Chu8BGkkK",
  "key12": "2sg7cmPhr2x2spJvQZRo2JodoYXwDdVfjkGWenKJ9HEHTRtYH2FynQueRL6Q7bSLiv1BujA5ZMxwHNbuQ1M2J6Je",
  "key13": "5PW2vU8MnTncf77HhSwu9YDD81gULBFLTAxHm2T1k23QC7W2vgKhKuZjvr9Xc4VSSLV1N7XkuF62gicqjNvqBfq5",
  "key14": "4oJEvZqoZx3eFr8Qn6CHx4SWDtVqESZcHXSdbe2HKGgedz5vBgQCt15nvMehU2zCRcnNKLJz7rpNsJt4U7F6gycB",
  "key15": "5TPj1phx6mtMTiefYcoux171EEjydMYHb9RSQv1SvcYNEZXv3axCMEo45V411xF6iUvGysnXcbxDJvrEjJ6Ay3L6",
  "key16": "5GWhVamQtGCCB5niXUg3UpvUeGZPfSHpud9avvt5pzTUNV2oApJbT24yFRNtSHn1qAk3MdVsLh77j4vd2MGiEnVX",
  "key17": "63YdxBcZTU4oSMZeY4NnLZXqXzAQdoPpD6aeBwthrFJ9uahnL9KrefZUNDqF24BzKQ1H3bqX6hL1KsuGcxG3M7pd",
  "key18": "4jwT6S3jGgK1PcumKgZfp2KNQh42M1ryQFSvpy8b6Hfa5x5KWK5FpWhLfYkYK4pBsqUTSQSVpxC5V33s969o8DCF",
  "key19": "21vQHYHgxCrCC5G4yrXuCZgh1fehcQQyaxX1Ru7hUa5f3EURWDxz6dkx6ku4B6EECKYkkuoogbpvQVZHVCeqi1Lk",
  "key20": "2Hn8xkdHV8TgXwYz3A5Yz6rR8GLNvxaNX3K8B3NXQpU48EygmmqdA7gSbMRFz4bZ7E7tLr2reriwNErhLEi7H9Dd",
  "key21": "66WKHm3hDK5TfgDMRVM4sgPBf72iR2GXncyFuebh3mHFNWnhwhrPUeB8TuKpS2up54fqS1ZmVBynkQKRUGeAVEo9",
  "key22": "RWCxeFLg9gcieYP4EvACrPvzUyParJbp4NJJXFZvXCEKZy7nk7jisQps5bEnuuktz4SVJWNEzErGYDEXfBt8rre",
  "key23": "rAgvsPqfX1UfzLSBir1i7ekqRdECfxrZvJ4koiJuY71wr79xKeTyymSwtWGBNNCDCd2Yxhq75B2rJcYopumKyUp",
  "key24": "4SmFTYpQScfraLrN5SpMRRFcRadizyYVmDSjV6CHHgFCXL5rhBGzy9W7fPU9KFXvytS7e4S2vFnq23MnsDnFrAqz",
  "key25": "3m8c7WbT3ijPiKG3juAVMMqs8qHV1twuRfUZtGZ5q1WKtQPYTqJZCXqXQqCear8jwrDkHfETNCLPZypLVuQDfZ2",
  "key26": "3XdNHURVvCaBWTDDMNFeWd5KPbEq8fPWTqhn8isKmZ49smE2AhAqViXETeETMS95ZHq4bgVsB1Bfasa9xoyY2QCp",
  "key27": "NmrZXGYgcXA6BmQPDss9cWNja2zY1Nk8G2dDwzDBcuUw6acGqzhtdW1zzRmubFNuzimpZc3VFKx4T7a1DufduAh",
  "key28": "h9URGVJnkkeHBDz1VWhih8p61gnyANAAkrNtGjvFodqSC1sEcJaH4mwhetpRBnHza8eNHKumjsrzfsC5qMs2Rbt",
  "key29": "54kFu5QU6q2q4PQqtqGN4drXZTMt2uKkGUkfaH8Ak91JdCxmuXYVwwXM9Vew1s4taUrLY9vur8fp5dPMjeRGdwzY"
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
