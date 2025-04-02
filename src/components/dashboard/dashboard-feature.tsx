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
    "2zitRgxeyGc4RPDaid2NAwnRxEL37QQxn9XiJ2vC8GjgnkL6r4rn5ws6yhNFmbuD9mReFi5SD1qE7xSBU4w4YTo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQr62GDprstZmtRtaX4FYhxRmtT1NjiUTi8E3FBUvu232Q2M4r7nYcQu76ridvZjDCmPXZz4czRCjsX6qLU5gBr",
  "key1": "3G597bnXkDwhUFo6j49XFrdswUBxuRw5qERERanzkULEXyJu1DYfPwU2vfTZobJdCDLMkggdAfuLPphX6fU7EXnR",
  "key2": "42ZwXxSCpp19Wh9bpGuBNwSCC4pHBimezbQMNqMrwyrANa3ehDoMr54A6vsJk6on9JMXtrAqRbNJm9Xof1wDGKaP",
  "key3": "2cTkWX9kQPjKX21GVzzjLpBSuSLQDsKXSt9yQ44ABVDB7jLcuj5XetL4dN2Fo1oyXoFJBUNFdFmEHBvup1uBX5vt",
  "key4": "3Xa86q3oQqt6stu7uzzP7U5KWd8YH4vvrNkY3fQ2Y5HsdTjbkXUx4L9waeMhTsx5bL9HG195VV5nYtLiYRCvkqbN",
  "key5": "21GtFfG9hKuSRxQjgrY3czbx7gbXpNbmPtbLUHiUofiPLeAQvJP6NFSYJEmeLmvhDyfEmB56iXmdffAUY9e8upbv",
  "key6": "4tqMKvmZNRMCbNhE4JS4SKUMiqvx6AddXanFRofi75u5utd2uurhfPWGk39CVXnYURBqStMp3wtUEwMYockeekRa",
  "key7": "2EWFs8P2W1CfdxzUysWwWVMW7XZiBkmyB59aSdSNmfxSZ5PxXkEswDgs7QWMKPETVJkHHXLRPXJdV69KKiLFXXAC",
  "key8": "N2s54FpdHQ2CKe6o5eR4vnNFmgPkZx9TQnNpTepyewS4khWbixX8PqCcA9i7Nyozf3jEfQbLVY2UNExUARX1nV4",
  "key9": "4REHHMU2LhdQ3DbAuyfY3aNYW5eVZkFtT3H2zgUSvdB5ai7t81PgeKQeLJx5XTCXbXt35HG9vKseKaXWWaq7WCsh",
  "key10": "v9DbVqUBcGLShTfZHeddhyYrgcAiDmtEimBys55ibTxiPSRP5EmJpwGBhpmsCbtANLRsXEyke1SXbWeur8PhvGM",
  "key11": "2t9iJ9whDBbsxpZk122uZ9BMUjB6i45nvmfDgBptRN6gUmadtfgMkv1KHTddThccfT2m2Tyd4L1oWgVq5E576zdH",
  "key12": "53hwBanKrGAwhMN4qCa8uZ3EMSav2nzxvkCnZ8MiZfM6oNofmoyYNWSj55aHtBP7jx2jgaj8NLajYtrmayWE6Rjg",
  "key13": "4CegaWBgH7Ltmd7tjUGFoGPbBdJ86dDyoqpAkohNKG6JiLBnsu24LmEdE7xQ3GcKKKcKuy95xBG3vk2LUga3QAe3",
  "key14": "4ocfMC1L78HhvWETeuchSLKSLnBfo2nnKS3uNuEJJG2ZGDFpN8g66VyjrUMbcBGzMJ9owxCstzDeEfan9pRKyQaz",
  "key15": "5qwEkuppr32YPDLWQk1yCRNcJrUYPf9jv1aPFFick6e4xkw6iFFBQRdzkNfoSoKV6DviLiQz2LV461sdYnSPURNE",
  "key16": "485CeqEwZyWZMM2Fk28zc5byDpuxdL622yMdCVaJvTPhgDVrPAaKJGVyVjBhdGffSnkjVejL7E6CizwKw3zAnSkp",
  "key17": "4kFKuQT4SXKJnY3nhxZB1Xf4TfEod5eM5qt1q6HpmTV78PGdPHXWep4kVAHCzmwmZ6eyi5TCpdamFeryAvyJE5Y9",
  "key18": "5Ux3WariDFkJxHARt3XxrHz7uWCAXZGvquoR3M4tGu1dqM7fVaTfBfjLLgxj4cyKgBDw8GsTyK1Ljjxnn8XcS3P2",
  "key19": "5iU9VuqwMMYX1ij6LDWPrKwkwVBt3md9D4GFWJmMDirEomzraHh6HSf7Geddhv6eRydFzwmez5i4BPc6xfXPQYPh",
  "key20": "2xtPGAFWmTocnJ1fEzMCkQgKMM47bDMVFn9Nw3Bw6qeQMpD1KNrAXeYUsH4DN945MzMV3fP5YRH8gd5DJMoLhVFB",
  "key21": "5og2HuPiq16BAFrv7Pk4P9ZoMCewwCWhnV5at2KKg4yBaGFhBbFtjyvvAGa2H88YBd5JeJDKXkzgZ8SVN1Pbnvn3",
  "key22": "4RjV9k66Tc1xHvuij88wi9cZ1SaY8BGKpZDiXE29VfFfT6Pzzp4vdnk8ju7Fga12UkEfqpLb2rC3wVz2Wg1ef2sP",
  "key23": "4H39UYRaiLAHikXd2qafFB6s9FRkRVAq292t8aG4iuBBdBnm8ud8V73CQjFVAPodB6X1zRGAHiJBrt2pTMDroZCi",
  "key24": "4ga7nCxh9eaHA7oSmiNeBSwdizc8gYJ5znu46iKE3pGXwu1pXyytQTwRmSBoZmbpvdJWAoFS44abS7bpmHgMFi7v",
  "key25": "5b5w1yFHuVqGvC61HXfekHc4ripaRUCH7x7MLRctKjK4cexNJSzmDvtspWwrYdji1PFEYVYA26B6EGNdNtEuF5kD",
  "key26": "2N7PfJMzXVzTB7zyKJXYgxLwDenGo6sc11qkhcwW1yo9KJrwkjg5zKfp6cEzrV8341hSm7j7cPSB3bPTjddxwk8R",
  "key27": "gauNwChWRiYgc2KnxgaLiBiGZigCF249Jt1XDK7P5Bh1Kw7e7HtrizACdi29VK9keNNhY7xxsJNkded5TQd9ycZ",
  "key28": "53q97QoUUxk3borWfyVWb2YWeAGZ4MMQfL93e99BKsmtwJhYW6p9G4veCvGdEXQnr4gho5GpTmSLZNHxCDtNiWk1",
  "key29": "4SosqaYPN2Ht6bU1PuMWsAaz1H9tPS2aV5gdseTqJGPUDdCBiEaowmDJwybdinqnkcgpBhHyq2uyfKqbYp9ZADh2",
  "key30": "5tiQ7uz9BQzzbnVRMqKrp7HveGmkG4eQ2J7RFT9FjGTJctDKvwsn8PL6NiB2sCupcxTGDhiJ4KShRq1HYg98Dn3c",
  "key31": "3R5CpoUjwamB8rkcvAVjmSXsETsMm6rPy3JkX96HvqJUHHTucTDQNTkCT1rgwomedvVqtmAuy3hbpXE3TExfkCxt",
  "key32": "3qB4n422EGcVPNJ71ZVrDXJEpm6sMGpx8Tf4zGKPA51V66JNvqMSj2A4LHb6chiuAfZXiSng3tfZiEsaab2isAcK",
  "key33": "4Jnq3Xa6HCLdkMBLfs3yQMBmn2SjfGDFT362onG9P648TUJkP6vFwf5Ncr4ivwjgCtkrQF7UKYJ32KzLaJYaYx7N",
  "key34": "47Z3auZ7h1CMUyKwXWMmUukUPBNn8Xfmp6n1Xq1Uukwk9qN1rrxEvXY7bJWu3EWucyGTeNJq65tsCQeppQ7N8jeH",
  "key35": "3KJxKtCCherNwQhG88hVCRvutKPpT1UUNALfcXyHPL7433MVeQud6V7Ji81a2Kkovdo5neN3MV5F8M7cd274BAnv",
  "key36": "5U5x7psgUffjmxxj4GfQCo5tzaMp2Uv4BUeN987wsZwwxKCyTKZWwBgXFB2F6DKPZa4JAd7VuwgqYDAUojegb8dv",
  "key37": "5GgTG2fbCqPnXFsssi2yfuYBYWcHr8ukD2Qd3H4CugYJ2mMUo9jcmgMRSZuYHUigKEsAeXPrGyFi2KDZt4TNrpSJ",
  "key38": "61JA4qd6J46wgrh7KcyCNNAdLpg99A8w1Mp67ymKC6t4M1KGPDKsvi8UrnWvqYZsSvEJ3CqrzNnnnWg8EP7fSMAT",
  "key39": "2dnAT1vjToyYzSmCYwcdRBh8VZ7oDM59feG4a7E9JTN2voK7YCvbxZgfJv7NcLej8fKukeEE5zWJttdNDTkfn5dr",
  "key40": "dC6WY8kaSzVA7gM5yFMoKL9tkri3Vkjz9T6xCMXG84HA9Prhu4EGgjNgQbQYckGaRE6G9voZagK5DxApTRMZnoh",
  "key41": "5Gu4eeq6kXf3EjerBLQqCTRtJjsk3Z1Ua53jhVtWc1qNonFwbS57vB6xFcoRmRNyT4utDjCKFi3BpGeaikUdKoLQ",
  "key42": "c7y7kvcKxJudZzbZK1AxaJMWiD5BUezbZPLZdMHVFAEkw4rRQoj7zBz2dF6sGjAL8MFPh1qatEBPs6ecgwyN1TL",
  "key43": "qd9ignVzNP1HtEeCPC8K6ELt5WVvZtxusYBtQZC5AZcjJdHHBUr1W55JzR1VYwzzNiMx3dbvf7L7Rrbba7ioSP4",
  "key44": "4ntn5y1MC4b84Ugwf2kX8W3SMVryj32cEGimYLkwyhbCiJzUf7n5SKrqJh4VzjVUxL3cgTZcxKcC7TrTtEmaRk6S",
  "key45": "2nJeMacDQQ6q4B2wi1zPY1bLLhWtSGtjykkRu3oXvGrLuTnJXBtKMBjkUo8HzmEnNedavdVSpt9THZUzbuz5M31",
  "key46": "47CLgyQQ4SQeeC9W86fQ3xzoYeXzyyeC4ssPzm1ZNASD9SiDVv6t1uL7HJzfZSo7aXFUqJrLB61Bt6EjjNDRgR6E",
  "key47": "29KVWP1ipHpUQBjrH7K6dm4dsfTnonEkuXsWC5oYPhED2Q8BPvoJYGhYdSwPtx2dWLzC4STYLcvUSUc3pFNxaRaV"
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
