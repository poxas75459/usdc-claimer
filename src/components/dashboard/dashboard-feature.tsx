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
    "52SAxQ3Zg7cxsCx9RVYxmSg5R2vfY3xdNJNr2SsXi1dSrVatB9dnGBwivMiz1sSzZw8cB77JghCcKmjD5EJtswoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FgR4GfvhRTU4sbypgnViri3o4R9jQaoZSjXZPgJDvjCaiHtxy254jek9e3K4PJ7W25N7kRJjvgW1Wvxte5ZSqNz",
  "key1": "4vu5PRH41sJf3SQi8ZCtmSYrWofDRzP94EoQcsn9TkEsyhyS2CsS3azdKVHT3qHds4Cxbg1U4iisE7FrP4Vbhh8s",
  "key2": "1Bb84CdxfqaCuxHVgCFtRf2Z5PLFC1ttyskXYdTj1RRgAG7Zw2SSRigBbh33Y3rbVZ3MHNK4AGnFB5GmYNsdPGr",
  "key3": "3mLHfdp1xAttsmFWuiXAacU36VdTciGin86cGSzSyYtdQJWjJzPo2Xk4EXgJkTBF42h3F5AnQzmmiEEy9LTyAmsk",
  "key4": "2ARvS3hbbYLx7oeJPgrUcdhUbFP2aEMSBBQePkcxJKnGzt1RzHkCspFY4cZXBb44JL4eNVGUTFPtX2ADiFTXaAj2",
  "key5": "ekV1n6Yk5WihgepEBouwBb4UrnWBn2fyViJFXCi3LhjnzAwrWAaC7X1JgjHLByKC4xXwnLoRTTFVj22ta1hDhiX",
  "key6": "bMGKx3Wb4e6mKRHZfw9p7FCAggF1s85rrqoKfxiWzPHv1zwKgxbxYp8MzyuidH1Q7ASeB7ALKKUMuxAmz3312ap",
  "key7": "5eXzv6EqaZjeyMUSfsdUEEWdrtiW6anF11t4TGPYj3mYVLpytPp5R3zVByy4zB53HNKJzGucb7e8MrKJXXHAbBcK",
  "key8": "5nDDTNUWjYQUMFQ2GGgtTmdRyD65zQ6NDEyi5mDq5jBoyE7FdvujhjJhChULUXb4UQYEtLHKRUR2RFjejmJrbP5A",
  "key9": "4cPsq63EwWiSM9HcqMCtZW5P2AE4NsigiFowAhTXWqk4kwDAvXPoorA5psvC4bUU5XPKhBaohgdesLXkWRuuefdo",
  "key10": "4A9w9Bb1jmkC2Ket9eFmGSVUM6JpSpSHEW7iMcmjRavQBJVf3iN3Lsof5zL9Rgq4yHHz79ph98H6Sg3pXbdMBrE",
  "key11": "3CDqJmzNQySwAnqP5kS6t6ywhRWHgVGqukG6rrDqU1j6LDh3kWUaREtn2vNwb166jJ71PHKbhxc6DxA5mWtmyQ6",
  "key12": "5J4qadEt9AA5bMqyWRKxYpvtXBDC7BWNm86ygtm13NS7K1rpBxL3kqNz1QnrinmGaMhc2Sc1RedasM4EZuYSYxxE",
  "key13": "EA4KqupTckUQDj5B8DERE1usnsjrXPi4i34BzPzK6Hu3PJRvuDdigjHQrAVcoL5mYTk3RSN1R54CAb2fuqy8aiE",
  "key14": "4tPiScAFR5jzZDenKv99DDCDJWMsS9DGsKhmKLqw5y1jpWbpzCrAp1gKFQtqTEpqoqT4s4fQ3nCLNEKjMaWBCPNh",
  "key15": "3tZT8bxgBcSF55DqxcP1ZKsyNXWda9aPZw1LspsxTcsTBgstsBMULZAGhb6T9kKTRtE2KAPPkbesw3N8tjsiBN6f",
  "key16": "35AGawArxBGjzQJaHRgjFhcFEdfeo2eEuZQvorutKABjV2pmtAskbCJLShz1SXmewrN7ZiYZHpsDR2PcgnvPanfK",
  "key17": "4zXFNvdF3oeqxR1mCsiBUjbRop4mNcz5t5uCufVbKY5C9BzfkJtydQiabHkLYSSViKQH9aa8baKZH8K1ZgfUN3Kg",
  "key18": "3oHEYPGnfE7GoWME8apNroLqVn7UwsbETxyegaKsXMd9LQUkjKjFZaGjvZMN88bXS2v8iNsS9pmPAjCYeXof9TPs",
  "key19": "3eMbmGs2btBDVT7cypS5YeRCRyWCNAjWT4ckiUPRJ7dcQdhqFAeRotdygaJMGfQQYbT2JiBZJFuYsowtjzqdR8Cx",
  "key20": "tEaxKsPHDohahvcgKRe9P2oDNWXKCBfksTJKmzTLv2Z4Hdq5MSYaQ15YGxMKsMKdLNPanKBfCTmqwueRCC55JGz",
  "key21": "2oX1qDhFxDyX16CeHksz4mGZY4rGSccv2PtQgCqnWHnPvxHMdZwmY7yY26hHgcbW5MTc8wpsgv4jL7fb1yZb7E81",
  "key22": "5KJVsTqfnq73eV8B5gj5RgJHBXxogzqf6C9XK7q8jWZRFP9RwbyrMpmCp7UCQK5G6dDdtWb6kK62G36pCuDXLFQa",
  "key23": "3gbPrWU7y8NXmXvF3kwsnGvSaTsi9fyDR27XwFLu8kET7yVcGfBXRaJqWm84Vd3K9kV7SerAQUkD7g5Zr7LouyZC",
  "key24": "n8ApC4ci3jxXMZP9RrcTnJTRhkjJkq1pXBS55mELCD2J41jokVFhuoDK2NRn66X3jQQESEJiJ2QFY3D6NjSqgXq",
  "key25": "5FAGoKGkZjhHd4Q1NteSe6Eg8knQFKwH4Do5cQdZa5rexPdf3gcvoqLLtUUW4kqtAUBU5i961riMXgP5Y5DmJGAa",
  "key26": "EkNxgwPeQUB1uoQivxEVswbAzE3GH47zD4DZtR9V1G8eb2DBnwqasuqtahyii1E9aJnEVABBwq7E3tuYnAWc1bq",
  "key27": "3dwsQcnscGfRKoXVb5zAgN3SMBdVcNwxHKvzoJxqMRqSUT3ivC8RKJcAunG56kKo9rNPPBhc33UpknjswwVQ8bQL",
  "key28": "3vtpMcbq8txbXJm2QHscesZfbA7QtkgrJrAA2iEg3kgaBEGuNvz14BZmzPWpPHHWQhkCDhT9jvSuAjfwRxKfGasp",
  "key29": "kuVKB6ruPK1DYtxcbtUg59Kwp6DKRwsPaU1vaafRg2RDnKRj32GXj8br9kyK5ueadJVAXQnPoBvsiwV2s52kwD6",
  "key30": "3b7SgRNiDRFn8DzpUytcaAgLXNuLe48Rj7XumJSFJZzKuZVoZiv2HGLXkfwpPhi5SugY1y2NQMecViXJ9Mpk9HP3",
  "key31": "4LZXvB5aVQhNuykL1u46iqq6iFr23xZAHGUUP2haNNiF4W8BapxT8oxKqWEX2Pygq9UDsQ5uDHjSfxHopMUU2ZHF",
  "key32": "2KjZMwGacuKUZSzVhXCWmvRv8jxcuM2S5TwgvMNzFjUL2WqeKiogk55BDsaQUt5WHn15ynCMqsd4E71aWU2VHwiB",
  "key33": "4Zr3Jt7Kk4BqSHq3Pq2FryjGnho4hSXcA1cy5XpTNwBqarRw7cfhsMXzECbEURKWYvk9hKv6o8WhdekJexScHxQV",
  "key34": "5k5nH59XRd5Q1ah5aynkare35DYbGDLMai2iYNWtiUAVzF7Ps6kntuKGnAzUpHTY32hY3BEuTicF5wcgVFmSYkdD",
  "key35": "49oNLeFEyQQS3azvucg7y37LaJJd2zMYVyYtJ79m1pBZX5yFZiNoWtRgEeJ3gEtxSpRpwDB2Hf1hQXw7CdJobSaL",
  "key36": "64hAHLqEUt7dtL2XhdNSmzsQHfukbM7stvceitA1apoLKYbejuAPEMAzDv1YYBDqj3uSewhgF7i2Agpiu4uxf2bm",
  "key37": "2SWgEQfdGKmT9XHWuZjFxuehSZXwcYrdXtbGETQUFPpogH4BrK8KPn9nhC8th98cTyjdZ7t2Ddgba6mxhh1wfJaC",
  "key38": "zr7zAG35kBmcVgALqJwcGEojAx3o5d9PWqa2jGjTLoWybPhN91EvRD6XiukNQvzZW3QKmbX6xFtWCKHNJU62j1Z",
  "key39": "3RS8zrgtnWvdrpQS25GS5DQxJTAmmE1NQPGhGkevbqLyhUhQJh6d3TZ5M3UYkRP9nUekAVT3hD9VKGMCGhWBs1e6",
  "key40": "XGZ2THBKg5N52Shs3CFubvygrS9xrKWZ3Br6WazC4XMzuUigu4fikGZhXmSgp5DfVjQxiQ9rvWjirrXuYJhk2mx",
  "key41": "3UGgTpPbj6zwLyoRFwPr8gdmEgsavDggC8EhunwER829rGmbSQGjrwS2Sk824zvrEecVF6XgdeydaSRjX2z8bv7a",
  "key42": "T4oShj8HdkYNamjB9XKvsdx16F9vqVrosXsHEGxxJiw2cR9prGjnhJJ43U4CN2KPUw4U1RAWWciYcDgWcEt5atA",
  "key43": "594gGeYBfXiWieNxPQpx884NbNi5V2zf71PY5sk4JaGe2DCwWCCTgSVSvu2mAvb8SLrTPo1D9kfyL8Qc5xQyRAem",
  "key44": "5DRkRD4vyd1RFEixikfbGqnWjHEoBX8DKpNw6zPK1JVDt1pS6SMofdPDfnPhgigKQHJbhCGfTCwmHwoSs5aDjhp8",
  "key45": "Cd3C7hAQAtPggCQZwf2CJ2ELCxCLCUpLuPhwMnQUHbkyo9oLk4z5R9ndbikXFwCrTLGmY51XzyJ2CMAitYV4n2k",
  "key46": "rv8SU57kMR7rSaVJTbu3CmeciwVJTXqGRvtXAn5BfArW1a7qk3j2R3vzAnQ973ZBB8ZRvAKwEbkVaXNdtpmcd4f",
  "key47": "33iCt2q6YpAs8ND9EomR99QVcrqLy9jDguvKPBSxdrNLprbgeGfcoAtKEab3VwTc7dXHNiD7PLEgKMXL6mRcqLpF",
  "key48": "4s8dTMyUW4zrJjWMkh9bhgagNcyo7D2nT1YpFhAvcjMnkBnnVbnKuKcSZb9Y97P2V4e7z9MP9EM9QMpWx3GX7mvf"
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
