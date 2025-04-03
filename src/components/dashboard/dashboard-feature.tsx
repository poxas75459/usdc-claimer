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
    "U48eJ9STWpWRaYiTFofKREN1cEC4fAtoYPE34HjEWy2AhVg7dg9k5ac6zMq8DwWayRCyQbsyzFTcDKkNpt8kszb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DQAa23csq3Bv7NhkQR27uMigtBWih2qGDmzrDFjhHd8VHuikts1s8VZVYkdjekr43f2JRetEq7Z23mHzZMyC9oQ",
  "key1": "4jeiBdPiaoYYbFmHDLFANmKUBBLzb4NfyRCLJvje9NHKL2dUAsfxyUbbE7dvHYT3ohZ6QtqMqXfjUrjNwLYBeGNK",
  "key2": "5bc6FpP4qF6cTJRZUeuoP1mTVX1u63kUaMdfFUZ1iPTh5VDFCELfy9eUoABwTGiXnTtWfue6dnB4tgWwLLUSgfNf",
  "key3": "5VLL4BN6V7UWAU8ghZr2CtottdH5UgHG7BpwYs9TZn5TX9xuaao73tKp3faJoRBKM54i4RpTASB2DV1kwXq6paQq",
  "key4": "39kpCb9P69AyfBQ6nKSjmhy8iRpSLQ6D1f9SzrpGMpEu8NszGuwEgmiAuxUoBCc2SEbL2nCnFBTR957nsWcTWJC1",
  "key5": "3H35GdXZYtnvYZFaiYfEncoULvFAPg5KLJ3Xp7UACT2BsDP2YfbrVbez5T2pb9qJULDkRiPYkX7niEVbHDEU3rkp",
  "key6": "3Y957UXcMbsafJGc3DJHVPa1v7sebRttw3oHEcQHSVi6bmk6SXPbFmDVqvcvDy8BnWjvQSEaZPDuBWzkwYzuGZKB",
  "key7": "3YTHR7JGiuMU9suGdwy4488FUp7wsFqibhc9ZFRQTBz1kKTK1XHcWWxRfW79GzNfGTs2S6WfaGcpRqPcHzPyMUKL",
  "key8": "57KW6vS6PnubjuMTNbtUUZwt57KBrZUcRsQfrfbXuT1ZULFAoUyaEfgTWW6kkpsWZXXe19B2GhKEDQehc1kqJFYr",
  "key9": "29KcuAa5CjvnNekouM3bjrvTYU36JpnZGrod13dGZ4gwmpQSsLVNTFjFinrAwPfuAtxo1KgVErHpJSrv4rVZSu7m",
  "key10": "ZzU4GJWQP8kZ34CjN9U7eNLpG4fxWY6dhm1FpvsyB4Y5EZtvBWEp9gWfFWpULcprrUddVEVQLqNoj6Q8EXGUymH",
  "key11": "3tz8mzwH3PijrMPGmcdeAhRvqcWe6ujVEzMQEJYqk8p2QUUbREzVLqGPihdNQV4jhNBstoP2kRimBxdMDwfRobyv",
  "key12": "5HAaFbZnV4kf4RGXaerc3rKb3TidmSnhZ7NsYXNQRGX3izHiENjzGS5YzHSobR9vLwC9yz2uDe3hZoYozY5k7UzD",
  "key13": "3ZzmHnpPMf1P1euMLGBgC2zWp6couEQvqS7Bg89GUjyfBurkJtqvq3xHQ5wzwmygCMeZ8vnGtGPoUnch4yPr5C36",
  "key14": "CTCvwmNFgcd8T9QfTTUMb3o9T29sktAUWThChexcBxYQX5ZdGEdYHeep9L42biVRJSp5nyb8eP5GEHeMYNz7iuh",
  "key15": "5CxeriWuYM5Hqj3vzJLuPQw8af9iAAqHN2X3qfRJcKaEfesKM3tFnR29SJ35YJ7XKYzjXeQD7x2tDQjfW3Pp1iUo",
  "key16": "4DZLGcpgjW5wN7cECDs2VLrsWtzEwU9gxYWku8xuvaFA43HzTwYDjWZ2DDhh9qmrzs3wTkHrwq925fuVpp7hksi2",
  "key17": "2wmeBjv8VWa7QsavKumo2xaxebVb784ASDbGTMG9zdrar5rddCddxeA1WnCsQT7cEXvsFbqvgyytWmzn7T5VTx95",
  "key18": "4sxFDg1F9DiA5MK3uxBsFoZ2Qw2EbA25UPXXdFENkUK3xGKK1JXqTj1HNceNnwfFY4bzPdUK12GYHCGaFMHWEVvS",
  "key19": "2H7MppS3UQzB9uwkLecv4qTFHM5bM2WDiRzqLap3h4rLGMezfGoRNeBe6hbDaNWqF66fYHeJrN9yYbHw5EhbdGu7",
  "key20": "S7tFAHKCW118YZ8p3TZtT2JC9wmNCRvVsAQx6TscNKUvkELtP1mHBYPYDgArRtT64VEVgsqLVyp2Z9cgfxwdurZ",
  "key21": "5TnZ3GQhU3wEsYeWgzjR5XwUt73qPyLgHyJL2LoVjmsi11CNEpFnJT6MMkk9V59x9pZPFKtwCJdky1PytUSiBNqm",
  "key22": "4yBPktEq2NW1zda2oxYPMsNr5hSPGRWQyFQX54riwB9xYL5TEDDJg2n2agNmnvwcxFgySoNvWmwk515wryjbhGj1",
  "key23": "PnnZ1HWrXJSBsnQ4tDnXniMBjAGtPkSKeyJojVgh1SgxrVjRc8Ru8ThnhJLSC9qsVaHu3pmivsu4brQTKQCAMf8",
  "key24": "u2gCQ452RTuZBfSwMYxYrdUsf3toqxFgCW9Kxeb12Qrz1zpciZK6Rgir7Bb7ATV9GuWPKUZM3xRnV7vbcqoE8aw"
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
