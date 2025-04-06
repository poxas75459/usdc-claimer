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
    "5peMjGJsB1haDerhEC68PMSzXbJNoeyR22FBcSpwvNPWQuNWYJWUGsAMnSYpdLALx9touYeZsBHKC4yk6tN9XfgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nWRKiQ82n4PBXG7AWxdWo7qQ6K5sBDtk77NBxVTR6VJWkfnx2WrfC8rxuJk74Fm3VzihvbMdLzWm3bsfv9U67R5",
  "key1": "8E6uAvi9HTSvHaNv3MLQh4TLaWk1662AXr5kMFgffshpJV1B7hCdJkWux18zQDtmoR5sW9hPj8jCfC4uQDuvzqU",
  "key2": "5KJe7pqCxMr1JFVRnew2W6GL7NQEEP2Q67iJzsWbQ3iuPrRezCopVJvJ3hizsZ6Ld3XBG1UfPkKepfoDtFDXByqS",
  "key3": "32fkCBES3F5ktSggRDSxNPZNiLbFMSiigY6rum5Bfbwin1uT2aWw1jhVSUjCkudAvWsD9vso9rCizGZ3VdRTpJSN",
  "key4": "xEJHb9mdmUU6t5wFgKSaNfp7dpeCJC63yfCWrVEcJbZtZUgM6nxZNEP5A83q43Y7FVZyWVTx8KzVWAekKwvmFak",
  "key5": "25FdCA5oAzeUcABa26h8zwLkSiijx42wPmNwwmVpwQm8zARGn8VgwV6HH7mqHVAqdazRvWoqC2ncjLqN6uCxZwtH",
  "key6": "4fu4Hx8E9UeHYGUisxi3sFGPFmH759SwhkjHu69SbUtimThYMB9Se1wXybtfrTuYMaddPMWStppm9SG1NmfYAaa3",
  "key7": "8qxy7bBfpQZtjsSghUcH7sRZtxwiBSem37KbyXgsjo2Ntsri8xArgngSEXEaHm5CU6yCEceaV1DYX7fWw9Psmu3",
  "key8": "4izARHtDenoCN3U8YFiBCpj3M7NPx9zDJPDDAWRoJqWgzuo3JeSwxQZG2TSosuUGr9sY6m5CMMHguTKfTPmD6UZj",
  "key9": "2giZtcKwMNhnJK1gUvWNp436PJiHxwrvkE6jEFK3sW4ShDodEFBk4mccKqVXnPYWPpptG7XyycdABAPjHS2y1kiD",
  "key10": "5Y5StKDJCd7h8YFeK85qULYnEj1VkLGiL1urJ6KSJ89FR3jFiLEGRNeqs5oW8cZYXawtSr5YsSgSQ73XBiTPfPWm",
  "key11": "2ResNBEJsM68Ynseh9P1EUDMt7LahckBmoKG686nwVz1myEbPfLyTes2oUTuHseEA67mDPj3bU1acZUGT2TsoDqz",
  "key12": "4dwmHs8mmYQdQkQptYHVxTckXqiaTqifKrxFK5jGaLrfF3jP9eHWgsQeGEAfT65JecQ5Z8wzNPoRuLZ12VwBVJAk",
  "key13": "3z9mWZ9piVqEvKTwnUzr2PsuBasjNEW2hQ3Hcbne2MsMUxqPnQ1HGHnBd99SebKJSQedotSC6q5iSVjuY96khnii",
  "key14": "2bq1js3wkaTBHBUKWXq28PeDPHU2QsaYnJBso13BsMLfXGYcAfn4G2rCMpfeE8GMQmughW4a4fbdcr6aF2nYMoBR",
  "key15": "26pQX4Qh25hy9DenTRt7dn67eWu2wCLFTrZxwyhXk7DJ6631z36Nb9Z53zvimLzsTL38W1bxpnNuhghrKFEWknck",
  "key16": "imwzr2xWWUEUJWnTXxgrHCrsaoQ4h66hLyEQnHbBvFKioRNa74H5gkd1Qbdk7DercxYFeBiAfydZdRTzc6n7a8e",
  "key17": "5Wyj9cwJHfsfryrgMo3km99fQtyoYhEqSadYLreudwMjAZUkiJUs6Gdv4b9893uPMHzbNHFMe2zJMCfiqq1SXkNt",
  "key18": "3pwWaJfw1ZtfFVuZZni519M6WyokqNq8pHmMicUY6a1bFiVaSM9cwXNoH2K4Yf3vGkw83ffZVpshL5UaJr3WavMC",
  "key19": "5CQ4He1yaPueGCPiditz1Zv7Qoe5TUpjPyLTg5ar4esWwenU83V3XNJuGuQ6To1xiudcLjHax1q4TFFRnRyJ8yXK",
  "key20": "3rMHTZP2q1CkcqFXwCZhphPdSR3rxv85NoK2FkmS7V55ieC22hAzppmNT31MshEMi5kbWLSjkrLGrKU452DKtarb",
  "key21": "5ftmrTvkoFa8UPQGHm2Z6LNg3zqQeBZ6CEBp2qxEWvhi1AQL3eBW7tQWawXTFJxE8QKHMocQRkj2y2bFvb4SwmVk",
  "key22": "3kNEDTzDBXf37sgHWXvFoSGiYh83gESvzun13Kb6T5Y4H6srPCaUNWsStFukdhVLd6nvJSWA6oyoXG4JQ6237u23",
  "key23": "2GExrdR5jjTRX8unfs4RgKUsrihjUU6UQu9LHqTDrfJhxU1UUtQQcyDjswFzpEXpemo53UNU7dYHJ9AVuKGUuU4z",
  "key24": "5E2v2e542fJ5nAA14BCPaxmtebTMJE8saGMXquBRDr9MqfmYokUF7THHkzYsfcjZ6BArJufTkzQUUkPRuBeJX2VA",
  "key25": "2cejM3iLMW7vmBUsdKyGtEdN3dL2mrzujZwA8Dja4KnxfiXxyXUo8kFhKzcTxAuzEtxAgXCG8eaNyPMRtaCPC5wH",
  "key26": "2kK3YyFZxc8FFfhVyhpiSEmf11KUNb8vpCBYHWV1wtADMgZuC2C71vCZRhSuoktNRB3kngSgsR8buRD99csJ98QV",
  "key27": "4rEhGLPpmycyDPoBaLCAoLU41M63SUUs2W9TEf9Ei9Fef2knLuwbjvFdZtzjaNcSD4DMr9nVNF5yhn8q3HW5zggW",
  "key28": "53vHVMSzCCWhCDQZ9AWo8YcYazrwgfFnAnubZo8ca5qaWvVBZ2pG2VHikBxG86xa6sZRFmUzQQE8G5g6smCXvXPs"
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
