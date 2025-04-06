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
    "5d8A9xsfv4LZ1pTtL4PPKBwciaTBGq3bRJu4ZmPeCxAm7T5D9NSzGxNb6S4HhbSMWn71caR9YAqQYEfasYvnx7mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eNnbRauBB5RP4fZFSibbXTQedZrtWYLPr2SGmD28GMvQ7TGkmenghHtAHpACPWL7SL5cboyTdUjYnDDFwyf2Rob",
  "key1": "4YP5QLwfrx3WLCmze8o1k8kjQ6P31kaEHHWeGmvGPmvGfxqcK6L1RvoeuZw7fa9YidSc9o4nrGWtjYw4yAF58cKu",
  "key2": "4jxRKgC61i4MyWcX5Vx9hY2PdCrauyz2WV8zkDhmExas3wk3fPTyNhN6BTrJthz3ywsE6Mwm6Sb7f9m66nwGgqTU",
  "key3": "3RVQyMJ9mJjDZhXqzoMNR6Ff5ggYbXmWaJJT7XWwU87WioeuAYRhGzgALPAhNvNDuo8WxZuxoDmUQreZ5TKK56y4",
  "key4": "5qLMa1x8FCqZ6aiqwB6KnNeWorBJrjuKEj6x56ZQQETrveRbuXBit86rs2KmNBvWEJmCEwS58NxG9q1fGnf8BgfK",
  "key5": "UvVXqWPKJWg4aPYWwh7WLzbD19hy48kexV7c6CJStLPY95NTwEvhaLbsctFB5M8gkNexXm7eFhPdzmCr1DitbbS",
  "key6": "4yKxxLu3PGFddaXpnK6rC2Pb7pDP3dMAjLsN4YfiP3777xzfUTdxZd62cXqFiRz5qNvDEnfRmsadjN6HDfoNbw7B",
  "key7": "34BB1tZvmakg5NojRBLExa2r8QmEVm2DXHUu8ABCoVff6UArvWjgxQs4LzkyV9g8B4JSCS9jdvmS7xQ5PMV2fatf",
  "key8": "4ahwKTpK2Q6gaW2VCmTyLvXtf1gRqXAcXd1S6XXrmYBdVedP7y62Y3jjN6xyujL2kR33HD9j3wgfDmxusH55KNCi",
  "key9": "52pFifELh4JbhFnXB8C13HWoaq5icH2rwN3afn9ACTUzmmhyXvj4CjGaxuvYY3RuaZYfWNwSrVA7wJmRh2GQ9Tjn",
  "key10": "2yZ3Bh5pusNwHPwZdoKM1GVSADYJi1hXVN5fyeat8N8zJqZiaqwXYPEUrwjRf4n2yymuQxyvrDFwxVByrrrTER3Q",
  "key11": "52KaSX4zgDzx9He98fAqDsXk5EzpkhvypyLcKNSeemyhnfUuqB2G7P78kYrReCS6HMo1dZrqmL1KW4C8bS9TDvj",
  "key12": "5WNQJp8zjzu3UzTc3M6WwbPfJHrHSWGzDsfFemkk6RvqdRqM4ZJ5WE4jfUXjAUyjdBLurUh8bkmaVHSQYiPJjtBA",
  "key13": "HKzwaHf3mgmETZFrVG59SYYMgMBUp1TfhCnUg1XxSbRiXHYu9wKn3K8aPjBrkg2iN3y6kNCWqraMvF9n5KYzvsA",
  "key14": "2Eb43acdTuMCXYoRxVKeZhkpz9yHsfyCxPgnSw14kiUThyabUmNaEgtA1AfxtBD7aiJf2wdYEnUDNmd1GahNmGNv",
  "key15": "5pQRegtY2vLSb6XKa7zvPWxYmzpoiJq2owmwEfUMLFAJRVkFAGorN31vpP1k3ZP6HHGLNN6S9GvL8iCGZ38jPL44",
  "key16": "wBsKohuxeSLBNGdfL8mnYf2DgEGtC96dXpDucLni1o8tmXcvtLphyNwHqKTLF1bWks9wN6uDAdSZjuBy7VnkUvZ",
  "key17": "C393guDWpKL3q6EiRVtVBDSJXkc7BuoSDoBmd3JKwjQKp2qaagtPdFbrETBYCPKojshrqy2LCmb79wwPWdYBRvj",
  "key18": "3SafGLR1UF97fEGaW2VKU68X564yGNiez4SXYvkbbUmYatDcSzn5BsRgH7evzKqs1s6oj9MqceNa81kmkgR11CmN",
  "key19": "3j91FeC6PZKjexMwWZpSk8qib15yXC9kmVgXj6SwKHXqq1N7Hn97skJA785Qk5u9oo1n69WySzbTxvW2uvtMiR6S",
  "key20": "hmUggsXK1LWitxNjzg9uro92MR58cN5yqmC7U7ni692ySQj9HmXe53Pi8onLoi6f1NAuJdhnB3qqTGYuhtVYJSF",
  "key21": "3p1GYWdGDjqAodJPstHG3BJd2CKiyWyRvWiVeP225eRGCQ48xhYPnNKLQc2seoPG8pDZxSbGv1GeHLwGiHs8TsmU",
  "key22": "5X52SqXaDzHUmJm2vbfxGSvz9ELjoYccVErtxj219y9fimXoRYcVxLnmbVJ9zb9wL7KL6dziqVRQ6KoESu9G2fS1",
  "key23": "2fKwLif8mS6pW5qP7kf848Nd6MhL9dYAG9FacYiaT8r2eV1BoXDHLZFCDdQiSnk6v3VjDkucwzM8fM92GcyQS8Ht",
  "key24": "9VSwvYCqzSHEKoGSbEbhvc9mdUE1AN2eEPNCT3MXcXuPj7LfQWahc3UgZRpPa9EdGPn5nhNokbSGwDWRtYFf7mL",
  "key25": "2iyKFbxRYAjFJDkc2mCnb3t5nG9JP8VfZnAnX34GDXYVbmPGQpxRivx1zWzVnUai5FMTRsTreiFCU3AuCuDZEuYT",
  "key26": "2jKRwgGbR5qu2Fy2Tew9sNDBnXWdBUhJVdVMgSFPHtbQ27b19p66yGHBJX8Pj8tk8z7bTeMhxKbgy8vLd7XXK3mT",
  "key27": "2f2gPoUnwrUhopJcbM5sfJmcsoajzVBnnkbFuwGinjqGvgckLC8N64JBwbr57bNSSJCBHwfHY9WiPnkkBmxiAvUL",
  "key28": "2vyiDjof5tF8i9qNVdtZdxKcd75GtUexx8rsVju5Az97Tu1d98BET9jcJJiE81FLLZnLv6DA9o5DPYppQ7uLy1gb",
  "key29": "4PwFYcxJ2nwr4kS5Ds5mth4tkSed1AsVG98TmzDo2S9Hnhg9ESCWhYAfgs9d8f9NEMtekWX4bBAgZY2WwQiiLaoo",
  "key30": "5E9bbUzbYDzoifSTuvWUXi2szZKSoZuRXJq8dHRnhG9t8DHR7hDzhdxFrHADGSnafJEGeDFzQSdQptwgV6tJpFsB",
  "key31": "2ZRWiVPM6zkqKRxf43zKqEBNmgs999ZSG3yNdiWDa7hAR2tAnUx3TqeUQiBJWGnGJTYTwhqawKhQw7poS7p1vorV",
  "key32": "2sUN55K88nhoL6hAAAvYypLKNf9iK5X4DVCosx7HfYpi44dCwjKHuuCnjisbLrGAZ8soZ26vobT13MvQyRRqMaoh",
  "key33": "4VnBZudB8V2m7oupdGzpM8ZhX4Q86fn9ibdjqoAvT9t29LCjxKz67sihfgaY6VXSC423g6dyYSRvfK55jwvNvQHb",
  "key34": "2zW4b4W6NSdzuo8nEHc4T1ZLdXKbiWpb6qtjgU2NK89pz1dcQKW3CvZ9LZhawj3RtmWWTfaFLmnYGSHejnimAFU2",
  "key35": "3iW3CCu1Z9HvbxmoMCjdc2kV31q8czLAawtJUBW8TyCvrDjaSnnGvNQSZTQtktRBCwJfXr82Ux3vKwXKjPkzJnvZ",
  "key36": "2T97W5AAqSo57AMYGtskK5E3MTfUZqUkRuFb6U3ziSYgBhfmWN3UMwuSGaT4r3eU6Cg9ndmBiXRjPgC2EK5ZJqqG",
  "key37": "5Kr6w1DCYNz7H9QsPxy3WB8Jy27vVLMm3iEpYgJJCY9w1Vaw4mexr9XHY3z51ACeRaZy7gxWoKPApxybpkfr8qBa",
  "key38": "3CEvnn8jW7QrmTm7sq3VQnbZGQDdUzA7YmS2fP98pXAL2LwqUJksuEAoV8KEPgNkQj4UwJvoASHiY42iZpBjhFu5",
  "key39": "4uNaGFVnpAst9BZyACgWLYyvkV42QuaPsBARbbonVDaAD7ZJtDUTLarg1HotrRQS91Vr29mPjdCjfuVsK78GsmcZ",
  "key40": "5dZM13wCPEp6Ksx37vtj9pM4tUabBRwN8DPscrvPe2Vj3wbaF7nGddacScuVvvdRnirThZ3gsCA7U9NBHPqdwCLw",
  "key41": "BXvrghmcouDn8VEQq68vsy2umJyG5zyeyX8nLxuH375MLWGdeijmFYuRxL1hXpsszEuEibTxVQPLmLwMUWet65V"
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
