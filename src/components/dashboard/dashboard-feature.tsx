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
    "2KNx2xAnFLq3Ycgg9bPi2PFGqmJHqFvYWVnopQgAPxVBpxnxnY7ww9wN3qASEa7SLTi442v83WFmA4nPy5cQC4oR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3L1acURugX2ezRzQrCdYUiGhMfD2tUixiMKCHKrjowMjhzasJfnJ3d9RbUTMCczyCc42dSVBzBvtacj4rZ2rp7",
  "key1": "5DMDg2ayqeN6iYyj5QRiLkLjkC9Bi19fH7LZMxBG7EjSVztDSQhhPJnVZE5G4iRXbJEfjU9jarifJjtbpjXAzPE5",
  "key2": "51Qhj8rivAvHEXBntebCgrtsGErfNWL7Mcz9xPHNk3KqhzF27dYw7K4pLFVqf2i1nGvj3sF35uhcRnGmiRZdz6AP",
  "key3": "3ooaaSfZ3Jzox6xK9vPxtNvx3fHRcyY2X5wNieV24qb5s7Xx78UMtF2W3ibrrKJgMdzxTsHLUWtUZ8WTySRh96Cm",
  "key4": "5tinZk3igWWKdqnfgH8ijZgJiNAZDMqh8AVsdAeJZxV3nyL5YtHWJcPKthLdBwuVn9opATqB3KkB3Cdx8FDxUmsM",
  "key5": "4uL7gBK3Ns8XrcTcqxY1Cef6HLssZtsQ3rafyVyMWTSREjtFRSdg2eahK1s7cLNXEoX2JTibF3ye1wn8avV5KMwo",
  "key6": "5ZWeYmmVahmioVt3kMRCPjKYUwRHGpKhabV5hhndcWuwhf6egx7CMtn5wHLXpxSakdCpv9zvNSZsdehEvnFgDgPa",
  "key7": "4AFZSWfgAQ7LE3g7VhmB7LaB5sbDCozBPNSE42yw6B8cbuhB1QiKtet4QpQUQgsLFiG4YFvB5Pcx8zutDivoW9yU",
  "key8": "5ZjmWLdCDJymPEbJ1CtkhwuWD5BEo9hUht6shTee2LsxxrVTNQppFrgoAZjFCYng12Ro7JxXfMkgT8Qwk4UQ7Z5w",
  "key9": "2HiEXPYGUBznQYdVi5AKJ19oRPc3nFUV4Vu6Zpy1JBQY531yQAtckRjkEMDeEMw8cS1Y3WWPNz88ZtTbeuFAihL9",
  "key10": "5fba9WXJVrZYwTqcrjgqZTg563c5hWhPoC16Ed6zgC6JcqGaYJ8GZ96S2VMYaNZstBqSbvUddRkysDUw5FDNt5ZQ",
  "key11": "4LVFZ8EAvUdeqCYzjt9aAjj52UNq6tCjgvdT5E6fSwGho1HqyiQcxbTRjDxhJ6y6oU2ASTRaFV9iTkGPNEtor4cq",
  "key12": "4cdXUfcvKnX3BALkZ8HB9Y96NQ9BGNdeqJWMJpVQZVrVXCsJck3nhDwWx8ftZAkHWBaVPteDMzaQ2GDqbgQEe2MY",
  "key13": "ZLM7U3UcxDVTRoBx1sT4D8t7nYSojw4z4BxNAteBusGNZoA6YJDV92E3UQSTdHwcZ2hSHD46ViKxPMiPwAyDyJH",
  "key14": "3D8P9FaKUTXKz8TEfcBaYq3nPfUJ3WJcESLsWSQJzC4P1688rqyG1B8nxnAC6gHzVwPsKZ6QzjaxBU3YR62kqfmy",
  "key15": "2k5SF6Jm1zDuPufmyjHhrMRHEv4iqYpkfmmSMM4QZxJv9pa8yfpGL14PTvyj7RPL7ej5PFgsDjrnqqnJQMv4xN5z",
  "key16": "GSadWWCE5Qv32cvzGWCYZ3F4FUf33fJWK8ijMLCBUqgq8KjASWGYhjtnytmdaEaJoMEnV59kZedCxxMACGy3NwH",
  "key17": "4NGuSjj4183CSoXgc5puVvauaHb9WdKS4zU8HsPxf8RGazxThXcgh6cr9w8593b3b8iGfwkTbNYxd7u8nR2RFBN4",
  "key18": "zrGR5Vc3i54o7WT2CtQWDCx9bQoW24nw5JfCKNRifkBWAdS3RY6HEzm1hZRuWfLk99yXsXMn8f62HF5PiL1pJoA",
  "key19": "4pCcfoSWTGqkhv8K9asbRwzurt2jApTugo5CA5fsTYemTWVfN1cH8Wj7qgRQ87mM4dvs4s7E9yu4GsXigEJVjBiA",
  "key20": "2esMW3ek6YEcASpxxgQNyugjfHcPFtBXE5XZ5rXbB1zZi4KCMfB9isxJQcYTSKNp1P8UiZaQzAszuvxyodqtfwfi",
  "key21": "3fVcycixQtbhnmwxmzHi6XosKBaFGhgD6VyiiTemoFom5Fa9RLxfe9kYQ1d8zEMKCuR4yQNGye1ATrd7uVCL3YAL",
  "key22": "4jVne3N5SWN6ApghEhxQ5zeYNoTw1JN7SpG1maDopBxiveeKTiw5gwWw2Nv1RDpAsRCVvP7tgBmqB5pTL2t52soJ",
  "key23": "2P48aKv9uGKjg7efDfXVyDNNW1CALksJYvjVBRWjipJf4wVwwvZJDg1tZ29tUKzmMK3fFVuWAm4ky5jU6bMSX98j",
  "key24": "Pa2vEARumfdwiMbDH4M12p3CvVvYGYgVwMjW4EhDpgyiEhV8ss236sFoBxaaJ4hoTD1GcmXdDqAqLDu5L7GNe1R",
  "key25": "4mCLbTRhqZvqv9jamr6kQarxArsVgqkxFqqAq28S484eaTqszC8PFSNsyqTwnAqFUhvuUtUd4HbVY46XYMXFmjDw",
  "key26": "5hhFsuvJqFAFgqU1QmCLou4yUW8cdzhh8Dru5EqdrQaDcwkwWmSmbFKJCHAYwtwp3PFCVyXGrTScjAsKLXcbguE4",
  "key27": "5yg7NLcuVt8N5ouRPv4oHuuZAr93ihVGxHs7qtJW1TGgKyeSrGcneem6N7bxsJQvDJthCFZzMBhaVBqPu2xEEWqr",
  "key28": "44uS8a2GuiDNsbZkjUPkeSfHxXVeoGm97MSLu2iHDAtCiE7CGyfyATozj4LDed9JUjevjSbAYppXaRgXvsyYNoDD",
  "key29": "23dJziW9BdbEp12XWrbr453vHzCZ9XV1Tgc3Cb7nzzA64zTzG8PYU6E2xHQcQMpRxZiocpTabkC9FcX2qhSXU4wP",
  "key30": "HPj2d9azg4sWZQ8BfYe3UDJWtrZy5c7hmgPXc1p4rWbxVcrBx3AUkRJh1YEEUiZRYx32oFib2iuPx2XAmWUK7Ng",
  "key31": "3oX82zi2RkJGsBrwz3MQ9QDSiJj1V34fPKoczg1BZjEBQgkqtCg18C1NSrviobJHaBAdmZmPEPioANphFDYbaGp5",
  "key32": "RKScedo99KtMWQX7Xsr7zLvzXdcun9DCz4PewJADepzAWXFfbUDbZManJtcmxidBweEFdX5biJw2jF4BS9DaHMi",
  "key33": "5jETt6zHugYGwqHBbeypC6bYr9Q2V8KmCoFpEaUxHoxr2afzJPDtfLH5hAucc54ajtwiRMTQE5HWzivemyiB7CHe",
  "key34": "4U1q31p6a77reb9qskph6tuLx3pRHwENQFfuPUvGhzDFfJVf4FhnBWGMp2WFLMKqUNH3z8eBvSFGEFARcTXKUn2s",
  "key35": "2CuiKwGn3btb1qMu2L2Vz9f61qSvQkWUukoEdgFFsnKwY51oERDoesyFruGAJ3HiLuesfcUVMbUrRsZFremw3SmS"
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
