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
    "5nLHEbgaBbncuXduPBqfo6L9nZpFJTdnoH3sDZYdQQJhgtUpTg3iLDriqRuhkgBNEF5ggNqTw2pGowWMCnqbdLfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "554jdjL9wgjmtnM9UDgYRLtxsH6ovJpH18qYHocooRQFMRhPDJWZjo9g62Bc1jKpYvgxpXKRDhvqvmjk1PUeYHto",
  "key1": "5KPBwmJpPdGnFncyBcBieLU9HXxa8d29cSEHNPvpiotUwGub6BUsPTaSALJk39sFcSU7z9XZqL8o8FaGXcycHkoW",
  "key2": "48HywNdRFpK14zzmEdfG5Ee6mXyiKis4QE1J3gHcbcoGEf1fv35dfmhZoA5vbzhPUNrpqSBvauCZLYBUkPGGS6ye",
  "key3": "4MCs1yvAaHkh4UQfUCgv6FU1eL97wpSFMWGzeRocrLiWnVpNw9UCLvhDvoSVJh6DeundGe86wyd6RvyCfmgYax1m",
  "key4": "2ytH3WhQnGmvqQxLi6PbQnD7WRXDh8VvwrsoPyxSw9LBKyfSj7BBo4DYj2UarukG6KNEQcdSy4HC2Lu47TxDfaRi",
  "key5": "qLDEH51di3Uohcs4Yvfc1DM5koFnRrCFvmsSPWfspdUeHNwvBdRfs7MuZuNFJawh2cLtytfKrEFA2XDP9B1ma2P",
  "key6": "5tjfifggA352FPqoVALCtFUrvoNaoodFijSJSkfQi8Zic7ZHa3wLm85tFufgHuFmyS2Mywx8GuEw1oYowiaNMpFX",
  "key7": "2V32NQWKEDZDPTkxNsttTNgteYsPEmh254fSwn5SRFwwzAHanGkJgcPKvBNJddy7mBsz3tyWmR9ZT5ginmwfqjhG",
  "key8": "51kH61vG7HD3uYf9q3uwsiuTa9jsyEG2TPaKAyUAqspPmzf64mjH4FbNRgmVcRNdkuizNRSuJmTkrzHx85Bb9Hbj",
  "key9": "3PCUk8gLHFp5LDZNxPhFfuHb51MFAx6nDwWDEtMBeAFJ1b94FHkGrSSDTheuqVAAsGzKP5FLwMyXgu5Lde8X8diF",
  "key10": "4MxLHDeX6TmRpMCo3JUQTmpz5rtqqadz7HwnPEFPjZnzxUVbtLh8rX7GJBn5Ao54hdmcwgjA1UaMJ8XJsUXWeh9Z",
  "key11": "3iJWZqv13hXomTRax7YB95ffW1dRxEfpNGmzWQPdPcswmq54JbyvNUvcaCH7fzp4JzL8WTsdznCqrFba2pqfQT11",
  "key12": "kHaNHTScXeiEpLbKmY3a3dvaNkzYd54Ydw2RthzdkSkSrWu45ceoRxZndjDJpE2oEnvd8iUStRGWq1XoCin1P1L",
  "key13": "33LL1EXrLN2tDgqnftsjo64dMUMoGUtUETikLXAwXYNeqRi2odspqENPWoosXDNZeyx23LXW9mNAmHGMqMNYmhxU",
  "key14": "2AUktwjwptKwDuyHgVmnDEEpZAM5mjGvHWhZoZyjnhnYiCFb7djN4pxyZXYyyx5wMvy6B5J69V5nt1jUKMtKzwd7",
  "key15": "3EspR725EcG8UeK8MjxAWCMaYoKRoqCBNktJED32QY8Qodzaywwo2wyPqG9QA5MmXjLU6iaY546Tej12tEX5T1Gh",
  "key16": "5Z2o247VijdrQ8d3YZhQ2aFuZthK2k235f8tyS3WhCyytCznNsX3qLbCw1p2BuLvMvPoAyAwe6TXS84Q8BxymhHq",
  "key17": "4BtuXciKvKwUUPSqHuHBsz6sWqJ1q8fTueN8WM339nCB9i43o4MwotkoSUqznsYhrXmAxQM2DFAbbgvkATnqSCn9",
  "key18": "HFiiawvkdsEaLrNPBP6hxsgG2azqhrMTt3fG61ME2y3qqGNCSfqZNeJgMXjTfH3GNjYUZxUmjYF2FZpXqC7VMZ3",
  "key19": "5hFsNrbN58GN84Vgo5cxV51Qggg98C3enxKfKfSGQ1BEGC7NVyt1GG2SuoZcvEr24RkQvhYpf96bgjz31Gi1CShr",
  "key20": "4CfnmuFTV7ghPsY5R1V9eHDVwmtZDpyhDZjYZwQpDHxbehbRso8mPtvTosoyv7qkypSMbRU5f7pjFbK6f6UdU9CA",
  "key21": "CdQMqcP4G6cJUxMRQcdhfzccUvspRrfCQZfTbDNagYWvsbiL2Yv9BckjR1czeAcuksFYHQwoF4YxTKJVevX4R67",
  "key22": "5cEgeAbt6uc1k4mY62JZGEhTYbSNnwxoKjt2DGppJ7K9PrF3wBCAEJTNbMrXyBADhZVwkx4XvsHhkL76efJcVam3",
  "key23": "5J3Qj4jSaojjssX5ZLp9g4QhaSFtt7mt54L1aqRb4q2kq572f7JT4xbqV6MDcXWYvM5XnuVbHkufc1rp6nq9QhVL",
  "key24": "3S7J2APgu1QkacmPV7pq71J7JfsR5rtfDb5DHKi8aQfmGKyDq4BRLjprB4bGzukS6tmiefVSejGVgWGZWVE2Crc4",
  "key25": "32LdfAa6u8JcdB1588Mg1i96Z1MutKFAoeZwm6WU835mTafuQ3K91zmqHXpAEvrq5soi6sB2fE5yZuCmDsZ2uiz7",
  "key26": "3Nq6JS4HtzMyg2QiFk4jjMFHfhsrHpiLFbaacD34UVHno3ZFmc31bKcQVgGLGTkJGVVVWLbvCNoBsmx3BmyBUSQb",
  "key27": "5qwK4CBMWVoZdB33QLfU5zccB9gWdhuitQbBr5BESZ6GZXbRW7ySdANgcwpQwUZ9MhhSeftmggk48PtRqhaqivWW",
  "key28": "3tg41B7199cQvWizS7uy52KSwudf543tzBPCBM6NCHwEex7DAihLViA6Sm6p2ujwBvp86KUDayUmyqRbjJF29bZd",
  "key29": "5b4nAvPZhMgYMm7iVtSoWY4WkW5gpqHieNSyhFHQMeFWJX89bzWKCDstjoxXF9C13WTzNkA3EMX9JXHuy4ucGdsD",
  "key30": "3NvdpKTdWjMkNQayKddYG1RCuFRRTGGmqRXCuvorjECZo6LrcoFGic25UK3vDE9WLHso9pzy87Y2RTZWZ3WhVGAY",
  "key31": "mqUnwh1vwHbW1yyPYEotHzJngMpTm1B9FQpSQqkBE5b9i5KZHjDkq2oUM877xjeWmNg3Vdaam11rc7NH9dzBxnA",
  "key32": "4478sBkNy1rrKi1te3grkHpF8vmpygznxamLcVYbYAgtosaFeh6DqEywvntvuLxC6cRJ7eedxSojhh8KwTxbEQyW",
  "key33": "4jvPs7b5oME4p9Ne8sMrMUBTMPhTT2WT99k1pU9qRTFFohBDxk6iRWyjzgr9DSn2F6ZswaoDbBNupyPThaxwKtmP",
  "key34": "2Pwk1t4ktaMTcrh9N9kTrRKCPWVt4f88xokAgBFj3LYdMyUwhTA3MquX9eCpEgNTQenTFqjFwPMz9wsJBMbQNgU8",
  "key35": "5JfbMjHraouaGA1Jw5e3mikZaNkDLgH9xvvanSCpZLDuAgEXxBQNGJGhHFVw3PKup72ddXL4djysqpEZQpvhZFEK",
  "key36": "5DJeB7vaLG8dzikWNpJFZNLNkTukjVbSBc14fEPFYA97AXWXSXyFsmejxB9yjF2Y4egxrZaL9xk8pLeTwPP2fEdz",
  "key37": "22su83x46Kz3dZrjeGJA84tX5XwKi8oBnFrMn4q7bueSB5Exz6TBsVnPjka475WxQAuhqia63EtsLM2givzRxnsr",
  "key38": "3QgyctyqSv7mdinHaVzAg1ydmdm78UZuH46SWUATpGN1BhzhAehfGFisKHTUPwJTSNYRbmSR3rtdjyhiMXzpDgas",
  "key39": "2vrXoRhUBnkbia1FGTJmhFwunaFLNfNi4pViTttyK1zDrsQzQ4qiasrYivzFuvZCdsMA2fiMfGn12ETeZugowi2w",
  "key40": "3p41DMttHCu7ahFwziz8j8Ddbn4wR3GqeL7Ef1S8BSf7Ey2XiaayPonPnsaghhpJdsJYRUnDib1XGjqAiksDeh3c",
  "key41": "4cTQkNnadBR36hJyoX4QRkNbQxUX2ofPPwKN6JXBU1rNZx3SjNQ1tRVCEnRnb6kUrfrmU3BYedYKNhN9juFXMEL3"
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
