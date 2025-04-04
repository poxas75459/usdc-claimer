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
    "4ZCHHSqr7xnWsujQZpu1PGRYrn1d4qeUgLoggGtwnV5uwmhh7TPRMrbin1EAKwVbSxsTfyKD8c9FzWCWmm4ndKNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YL1o8RcYxHcYdp1X6Rtvhg7CSaMbZffMsSFYe2hJamoAJFsHqynWRBvxpGZQAHHh4pQfBuzopCrozVY2qNrjc5m",
  "key1": "jNehaqpZavfdDR6AcPA1LDt7GUBH4HnRnRUg4Qj3sEGSMktw4L88ksaVRKc88d1j8euD9c4auHi5bMPwfVapMQQ",
  "key2": "2Y5USykA8hGVPuXfnmYrrsh2sZk5uLxsf5FY29boD8JoVjAhsdRH6TFcVKtF53UV6yBka6vpNJLT2hccoMMwrHiQ",
  "key3": "3eRZduiMUavQXizGjecig9GTuhXh9aBnDQbtdgqvtAn5h9odCQMix6PxfqbupiVZs5tkJd7AM8xYmkNYhiEUhwBq",
  "key4": "4a1o2DaLcVGDkXPpcXaTppBLNd5ZFfRCH6rBG4kLMUmZmKkdnuJqUiapPVLSsDpmvAF1dqPatihK6ehYQjeni1RC",
  "key5": "5JvCMRRW8mtnDKW1HFt13DJCUQp2rSkHBxvSyyFedQsZX4NLoK4uiZF7NZ1mZHfi9Sty6KnqoDMny9sQkb9wmfWc",
  "key6": "3XqJFM7Mz9q4Xx68p1dPyZNcse1V6Vkcuo64FhvH2DvzXM1UUwh1R4zc9KQmsGLYxPT22JwEtdL3JUfKLAZg1SAv",
  "key7": "3nbrVprXBf9nGHs5niSkQMTTpyP9b31DU4shPpmkkwpFoZyfWFg33e8YMYHHsBMfok8KAVYzVJCR2ooXJTNHj65",
  "key8": "5ggTapbY1y92SW3wVgdfMFNSPoxgBszZJYpLcW58HAkvVkoXsEzZw1CZ8TuqwArExJSVyiB5oAUAAKjoBzGP5QYk",
  "key9": "YFiJJ35WtphrRsDhrzXmCFdoCT5pNEUr3gnmfw8FiddHoQi7CytpbNU7H6tPwt5MiB8f1cNfZxHTJPL9HeBtUmT",
  "key10": "3kqVxiKjdk3WeXeRpEYeFxf6cravh8rDMMTHuGf4femLTzqoMDurFCcCtmfD86B7jmYN4sgHwf9UoYk7Wcvu9xSw",
  "key11": "3E1FrPDgp44S26SuFuDg1sT9qUDUFAhYamGSppbur7CqhZ7nCk9yasnUJhxp6SBFDudtT7M5YxWjiaG892JShWjk",
  "key12": "5WmGeiCwac1fYDM4qNhdE67n35VmW7h7yGcfoWR2EbAiuESKbEtCJs1G4ZAxBKBRUSeKqVba3b3V2At8Bm8spjeq",
  "key13": "bRumrCfGimaZ9fxSTJHg6wN5QGhMf6WvAkSZ6pfqor2mkARfAwsfEtaY46SZm3Fmt8YBjfXNjqNvkGmvJB3QnsS",
  "key14": "49GHQAdzXPKCN6cRR8zsXfTsBjDELKJGDc9E9fWHjrBzUtrNgrdeytPzXHZDY4ps8oDdsCKSCktA83y5E51qQyYH",
  "key15": "4VY6Jq7a62hizKiT3T51iG6MdWetoVxFsApWEPLLPsBUsbUqWQyrQuQg6KCZpNb5Vd9YPjwGnLs7EeXBQ5mSH47P",
  "key16": "b47Dra3ygfjwWGTF4XGxgzVW7XyQWFDo4z8ogNNhRwrmTZqXrLzfVvd13VHz8FbkrXvWrSyDctBxxk1qrpXaHUn",
  "key17": "4fiTFMDykGZX2TUCC3Mam2iYu6XopsJT1gZDVzxZBxYsnHDm5XDcEYUzdtDjqfZbV5cPQ4fWgvrsCrHSVKBYMBLt",
  "key18": "2U8PALUr2sWrFEnSDtggFHrNhmnAJAWRNE2FAnLZwjbo3Qorb8JcjqS2EC6Fdnm1BYGNh1vkcgJU7qQ5rPaZgyjF",
  "key19": "2647p3CkPwBxL4iFo5Ev5XoZYfAXaV5qoY6Q9XUvmbYUUbiBNiJdZptffWU58AUeSoMaKi6cS8WEuxRLWQxzEcnw",
  "key20": "5J8KobV4YjojfvN5JbYuvfK1Fac3ieFZscGZHw6koUM8wB1PLTP1g4MhbebkVFvLcwxuDbgo9BZwDhnGDqaCAztM",
  "key21": "ftKjLc5D3tH79ndnRGnAeExxm6TUQQ7mD4F7VBwLsSj2ea96kX9YyRPqa4cAXVYabyShZkbQqJhHC7Nd7ydg5W5",
  "key22": "5HDc394vCQsmxNGpSADEhEmK61bjDHWR5YXUnahw86491ktZ12F7sdjk6SdGDgNVTrBr5dCsbaQpBpq7MpuiBzZC",
  "key23": "3prKFMroCqtK8eoKT9fbh2QsAYUCtHBoaBKUHu5LeWa4M2v45kcSzYdC71JnapgHVfEz1nXZRsCBh7dahW3NyfRK",
  "key24": "3Z9S9vKHxGKv7rpXArQkZesX6qmEVq28mUiAbsz8mDtC3zs7BSFSfARvzRGE7pq613Qto4HthqMc1va3TgopFrTz",
  "key25": "3pFPz2TjFvS3QRgX6mLDrPk2t4CS8J41BK1hErf6wUeYdKVXWPmQi7grtmQaoySYtu5TPp2DBfpPZKcg58qG3bNG"
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
