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
    "3KXTyRvDjjCRK2GWpbaHq1N9Dp9Ct2Wc1Dum1ci6h8u5LPZ4UyqViR78jd4XRSvnXFEMRzF9NuYKG73DhtLCJTRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jnmuUVdMNtdGXKyhhhbkYEhKjRn27R2Qxhdb1yQiq797wfx734ZwR4t4DFTXKeLFcWQ2kwUHXyFoNB6LvBV9oRs",
  "key1": "55c6apjo7twxv4HVcHrz1QVN8gmwhnpnyr4jZCdhetZubm1AcPjffLtc79Wsh2dqJ4EqGWtpXmQngN5fcbHvaDqo",
  "key2": "4bAnRLjWHdfo3BjCRp5QRgsTuJz8gHNveopNrzFUh5G4AMtmSaikKi1SYbCrby7Yg4316YtXxZQX4JMZpD3wmt4w",
  "key3": "2pgNV5eYjUPYF2x2qhG4pm9L3Sb5h8tY4bK8wRmKZWTYgqK2PhySFrizQqYnNinvox3wroHtNKQvxJjfSTNMKB6q",
  "key4": "2uWhqJNnZgrSbfBRMUFcFkeo3x8oU7BTj9kxW8fVgkRC6Wi1AcRgtaX8feAJHH4H79R1ReCv48HFJXSMuJfn76Ga",
  "key5": "2bWa78FPxJPhbsMJjZqZBxT4JKWmXXXfr9GTcH3nWERs3TMk1U9mY4u2WhNMRDM8nVs97qSujfbeFCPaTE2fQGfk",
  "key6": "3ntxjMFpYMBiUKrBV1BnVqKtyvou6Zh5LnoR3MhLviLvRsB7kLverE5SVtZQMHXNYg11bRcii8C8VsqkDT3TANet",
  "key7": "5orDNFEzQJJyeQKohqCZZGyQckTZvGDZiZSmo7N2M4gi3KBx8WUnuQ5PaBK2H1K2VAG72xK7wJfVpVtbnCxJCFrN",
  "key8": "54uU4e395fSiXJZ2ivUXmK4UAs3s4gFMG4Uze3yT8Mg8rLPXqRzG4uAr5m1ALUW4HTMiVUpdGc8XsEnod9CPWnfj",
  "key9": "4V1TThPHfGhhGBUcgEoJ9Axu5Jjdrc7Xev2Jx8BXzD6DvBdoVWZponpGRApcu6vGNk7aegGq55KbF7LaAQo2tReV",
  "key10": "4jidHkZKftB3mr7h1deeUPdDh44Y2gatrtkvUoRavEnnkLoqMwnxTwAYdRxGFNwKYanKNd3Hdspv2Y3qftuH3Dj4",
  "key11": "f4HGDRDFxm6pzofGDHzioscmiuw4ichz3rvCNW55qaNV2xDLR1K4gVMHyx5bHMgSjRLRGCjZspdpzFCmTytGfyC",
  "key12": "47kNoyLRsHVZc9ZNjQufkxec4hoaNCZnSqtz6fyZiTTDUQTWtnn3VhhCPYpVzMZKHYrG7YDsk6WKs6CqDZckAiZi",
  "key13": "4BShuk1ervGyqp4CqDbddwysb6CEZdPeGt1t97p5YhzQa7vBxdXPEotdWFu4EvSDUnQMcHea6vRnf34tb1PdGMme",
  "key14": "5jP9gCaWe74ZdXwaLM1PhdCNBJSquCdDhxi7jDMnE5yPFCuPSybg1ubw5HkMfuEfWKzWhTcHoWyU4ivukB3a29BG",
  "key15": "MEySaubtmZJZJwTkzAk6PJTCyRNdXDovn7kAcXnSdYu1pZUkmk6c9ecehX8pL8RCbq9VqBz9qhhrHtSnbn62v5Z",
  "key16": "215TP85FPBcdnVvzUkv5L1ViGmWNDT5BCBSYbfGKHWyoxt2Jt9mX49BWi9h7AmVgZrDtNdTHqrd9FqV4obMpsbA5",
  "key17": "2DuYpyDkEPaQyzCTMxEiRKjePAzWKdJA7nUhvVz5vwQDT7isNqs2U3M4vy3MZur8XDhqEyMRrJSh8VLCi674z4KX",
  "key18": "31teWheF1v7qpYQY3SJQHnNtsvjErrLSSfu4TsBaNy1gvQBP9iwRpvCrQ9YZcFg2RuDofk83zSAXbUSgApTgfe3k",
  "key19": "5Vz8jmUSQQ2HzJ9PknC1T4eSTmy6gdTg3kUBDLfuibzNcndT34Wyr7duiS7ZsvZSwiRCBqmENJZznG9Jn9DuzGFn",
  "key20": "4WKuDCPTEwGdvoojgsjYHm6aPCcPwrVhurwzXWsNZgVfUnkmbi1E4eY7YzBMMLxQJKMkW7etaGfXGZAfrA2MQZWS",
  "key21": "3qpZjDAcAiW18LSxu6hpZso9MQwz81xBDucDZwG8bgUuoP1HsuBQYzzTWwuh8V7E4h3389bnXuEMmsUYNwgkYair",
  "key22": "5NLgXozBK1eoR5mfJUjqPymD2MPxNsLKWzFSbxoaYfM3dZgnajNXJJnMJgzmN7cnKbvewjEtJnbHW6QRbs93NgJL",
  "key23": "UW1dN15iEvjiPeAPRyESy5svAW8jbyb1KedJBRGNS23PakMLqvfRtAYonADd7v8VDAn94kZR56YC4RoBJ2EySUH",
  "key24": "qLtFRbktC3D4LZ67S9UTSgqKRWzLXe4f7wJoPucEVnV5w46GNguwaaTJLaNSuWk2KkRSM8ATCwTXZWtaNfBK1Vx",
  "key25": "3A1jCekvfMPHjnLpezLtpd5skSQhhhaRpAcj6jxHYveYTfBqvrn3KaRyWrTofsDKvVZXA1V7TX51f5UXGSVw9Na9",
  "key26": "3oX6469H6wnAiGdS1UEuodZuMqinivkRdGsLZUeACw3kixVtta7oTXWbMW6URMcqg2YgBayC5J8xsHtKtnDZM9ch",
  "key27": "2yA3Yf4ixX78FNbjNn3F7vdCAAeH86X5aN9KmLdZiytD4iL1csLZWDV57PybVWrL47z54y51KUnAobcFPEzMsGv4"
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
