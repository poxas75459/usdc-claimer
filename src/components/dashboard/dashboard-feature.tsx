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
    "5Cpc1FrfmicothtMp2FgKBQWcqKaitiZGMqueY1R8FTjCjdHJ2vqncVJezs8Gpr2xidPjRhPR1NMHXcpfiEyxu9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46pXzpgs2V2fvmnmgQmACpfEHiGavrESxSGeknjULNgBQ8LEADPzAg6MmzjotTZ2U8QH4MR2ZAwDEuuFC9cowgKD",
  "key1": "3HyngedLUYKaA7ta5dSEakPFnUuWG3TfpJSSnML7S2hLB13U46hG76v9FSUTUqXi5Dyb5cuFp7QcQMFYm2yBgUEr",
  "key2": "5oY9HkoPXNYYRXrBStKiyUwxiocxJZ5naAvu52dbCJ9SGrMqi6harpentG9opDiv1QGYLFVg21DfBKftgZT3AehG",
  "key3": "4eR9xagCFiscw3KV5gohND5eX7Jv61Wv74oRWQ625uwh2TuoKXnRLeJafPhNeaqszk7MQcYWWAoJHw4PqZoKveTh",
  "key4": "4urKNuCtzgb6mGnkSpBceerwbXQq9dJBZKNvfwSk3qkunsBivckoR5fq25iJ8e8eHUS36Z9jxMGTZjxrhWossp5c",
  "key5": "5ueDEyDMFQt9GXR54PacasgRtSXhuffmy9rSEJo5R24T7sVNMN39itJg8HwcQCBGUzv9v2eVsA5jt43kCfpfgYfs",
  "key6": "nj6jXJjFFYz7HoV2G5xEDLGAkC3cxfeyaG1HxuNxbkGmxUahU3oydDxmZNibj6CUrfQDAyoyiHMZ1RG3C1uiQTg",
  "key7": "37JbMpLXoLhzkYmCwJg47r3Ydt8repR1mJTaLGZWPnqobu8uJHcViF7Dw2a35cUEGSo8Dy9tRRe8bLGiwkPg2qa5",
  "key8": "4emcbkUSjiA35vdGnnKihw86A5GQRoDCknkxuAVx7dEUCQnYsY8oVDLr8reArXSCqFMniPWiRhBYSj5EfnFSGwyu",
  "key9": "pinUpdmVzBVU2HKwzqfN4BxC32WDki7fhBf8VocwwgjjmevgKmj4v2M83xugowFuhfy6dz6T8HKVnUuQndRWynA",
  "key10": "4dDSsbhKpcHrdL65Bf9ahirnka9WCpyd76ANcb93PWnxVuUT8iLi72zEANfLT99sfpTVSdGLgSJxGrEqYE8TYDNv",
  "key11": "5Jh4vF63PvBsQEqMv5JUw9GsvWV6yXSUsBKM6b7GhZV3SuY6XGDsteWKBaAua7E3a4mH3bMVrRReyof2dSjUvjM8",
  "key12": "4yXnDkY8z3t8jniFNR7N9Q6Dc9AV5CvkuxfFRDGugqLojj3vW1wHSimpKAKn7E4XGsfTC75Ehei2oTYJXKfDy8B2",
  "key13": "nmbCUGMz3Nu11wzb8QctZgQp1uwFZt2i1YczEvpaAsZ2rgM6bkJUyFteUjbQs8q7LXdiysVEonifAy33Gtc5Kfs",
  "key14": "4PbzAose9EZnzRPPwuMQ3sKiDui483ct6VLVPgwtexsaGcPUxzrvsLewyLuwBtqZEVrGznJsKaGuFRQW5hgJ36LK",
  "key15": "3RxePq83in61D35JGxsWrVt8tWYBbRi49oZ3gwvACsFrMS6k8figmysGtPzdHhYpZKa75Zs59smXLhAXCwhwbdFY",
  "key16": "2J84HhGpW94WdmkZLkbC1ub641wmWiYtdLvbeizz6N7r8Qhg3gjSDpzura95diZjCGzGM5CNuXf8DyRP93rJtgWU",
  "key17": "4mJ7BD9CSNry4eKHQFVSMtigAV7BpF1yP1F9B7beBTRR28GZvhveuizQB1VRK2UA7qVKN6cCTZSXzdssRKQXuvmB",
  "key18": "5Wbxn5kvvaNnU3XJgwHANCtnFX9v4LaDjrvoREcwxRSdbCLE1ysrchgJ4qLoWTw65ThYTsaYiF44ZGgMnPk79JB5",
  "key19": "25e6CdTUWvZH2D4d2mC9rrKsXV945sfS2NeuBM61d4hkdU86eLA5QA356xaTrmrpHLJWcWXcZVZ6oeav7iyfpywz",
  "key20": "39anY6iwv6tSYAFpy5PVhTWpd5ABvZsNWzhUoRbRMvGPRcPKDZvd9xUKjdoQFM63TkXnGB5uASYXqT8F3YTbgzbG",
  "key21": "4DnDakt8TwR2r7MebsJTGmLHB51GKjQMksyk6GCeQ2bsZgvZe5PSPMDBUB8uxwFhiiGvHv4uVj8rWHMEQkc8YEUR",
  "key22": "3CZg66EKZKiBHZezY2eH9r1dAwMSQT3pvV6rVzG8S43PBxjEkHzQLqHhzdLkPqaDKZSEWRR9omrzYmWHZz9kXVes",
  "key23": "5DdR1QSNsbBAYaLRQYPmVSbDgTSJJVdPY4RdQNA42KVN7rWsAgJZfAPwCtXNEvZidZc5cGGjCKXeBsYAixhKmk3o",
  "key24": "2qNWeBMtpvS7jAPWVhDMrMHg15chKSKzHqzMxLwgrg1i5fqnFPsYjzQeRG5zjjmuyicqH3pEye4RzccFESagzPHF",
  "key25": "3NLZaWH9Z9uogi6kF34pP4jpJ8NZUZ8voeusxoRwAKZ8cjkGx2U6wL3fhrxrhrzTWjF2XTeAXDdaZomVWgpDehKZ",
  "key26": "2YFA8rHRgqpP9cPX9DFR9wgVpjZAsZPjb5AaDMp3s7uYtULBHeustmEn8TbAqDiwyUcMvhtAiiWBtfppc2rn8RCg",
  "key27": "45Ku4Tq3EYZ75gLvBdDYSGYPm2EoHGiPStdjE7r7x3ng4PCQWpDW9dPjBNMkKo5RswUntLxggVTDnvHDJaAwmaw9",
  "key28": "No9g9hRh29C8E6QpZgynp6YAvp1eqshNjSZerHpHKBPVXS3oWM2gsuc2Vx7UCJEP6RavZKmpLHkggFyP5sJhXxr",
  "key29": "2B3AMvfds34WH2uAp4ksdfCdHbi8cNgzLu298urKtrxKTJi1PfbtnbynR2pduGDJPNM4WUdgrszss1noXhncMzye"
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
