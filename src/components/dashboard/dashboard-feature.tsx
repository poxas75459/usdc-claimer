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
    "4AeydrayaBnArC6qU2FAttyorwihwdh7mjmX9LUarDUK7bgmuGUwRLn4FcBBtKwg39xW6xx39raBJz3EkwCR5Kbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQHGP2UG1YSjQQj52tYN2gKx1mivm8bADW5G3ivkTXPL2YZAuyHRQjV4kakDfMQbEVCzLTc7XWRS8Q4Te6zb64N",
  "key1": "tiYtd1TcLL1wrSnYWFXZqWzA5pKm7cK2grXmEqpBq24kry2vp78E1PP1sQSmWnUk4TbhcVGcbAEDVmApjHmwe3d",
  "key2": "XEgdTMPt27XGpx6DhYFarAAJ9MPM6V3oWx8MmW9z6qHH4r1iwrMSgL62iAn9Fptae46N4XPxXQzVdffu3VSHsTL",
  "key3": "3Xh8qu5UmGqNqZhU3JXEPXkbhALoic2VDTPpvsmxhyvY2ine2Qu1qBujmfFKRjoB3i8y2vNzZ7XEa9p3DQAHE3Fm",
  "key4": "Ygryp3zvoNydfyuhjc9w8wu3bRCGjBJJT3SiHLynXoAeYB2WgTduqsRHiibyYrKNL969ZeJrgJ9vgRCbqQVGqDS",
  "key5": "4SkMHFKzQDxnFst7e1h3XJfpD1dPKg7MkvEefoJJwJgaDSxs2ube3rgTFBGWgkGxno4MZmXSJmqSrGFLFGbohknt",
  "key6": "FXs5jwWxh4CyRNKhbZvLw1eGHVd1cJsjEx2RRXAnnkHGc7LHEzJkbQYc5qE2a9kisfbWvtMHhLphYV1aiSgU2TL",
  "key7": "64AfQxMX8dKTZc6LW5pA58DN5Gf4EWRVX1j7S3xho12BVz3oP2RHvtxuYFs4HAass6gVo7mFpndVrFQQMzU6quEg",
  "key8": "33B74ArLVBQuvWhBcMFP2oCTgJ8FG4x423YsPn8Fkp25P8JPN89u84EcNfJkMMnZuynVAvgeZ9MdWuGwkbXX5vq5",
  "key9": "5PWSFhZrBYDi7RpF88FjRUTREJ93w1ruzo9esEt8BqMzDcmiUtmi5Qr7L96Px3FTocM5vGGGSVq8pjrAf9E8uFuf",
  "key10": "3D6A5tndR4jWdMJGncbhf1UUoNkLYYHy3LNjVHauWAwj3naPpEa1qQMRp7jhwYPoZG2vkycjPCr9V3qD86Ejtzuc",
  "key11": "5zKWpvLbsxLKSQEbYkh8MmyBYibgSa3S1h69WTXSfMWF1JCDV8Lqq7aqPbEc3AmuKJvBgP8bngNTkoUdQg6gw1Zw",
  "key12": "i7M4NDNht6ejhDqE1UFprJKcbMN5ptQhncVzsujTGdQSaYv3WVw5dDacaF37eGA5foBAa1MKxoraUdJEPctNQe7",
  "key13": "j9mv2YMERjvFQa8fF6LyNkHeMTzcSbsawjucTztnrvAZhoEY7JhP7Hxk3mViFfq8Vf2rxGwJPXKrY4y6scG9irc",
  "key14": "5KSK3SMiu1eav9yMuBH7cD8cTqm2XhapMpZ3vBEz6XZFTvJ5k6qKKbwcAmfJfxUoDPjXN3XxKK2Xcs4xEq8bgoTc",
  "key15": "5tWid2LyMvYToGHj3YPstxy1ccxy4N2iFLLqAcPVXnodAPGKt3CPSV4QRY7xpJp811UoqNbMQVtCUnMU9TCx3pUB",
  "key16": "5j46jz6vczyVGACGQf7aPQrv2bvvYsLRG8xnVgCbjFAFvqsv5u8ZGdweSuiGvcPxLTzLfHEVfkvV6MeoL2cq6n3e",
  "key17": "prEW8g8zL7Sfo3ycndWzaVJP7VRR44kqqBjLpJ6ap13jdsNiG5TdxPatSZLXELgzpvyxxvzAZCjV4oE2QDqpc9E",
  "key18": "4zLvQBmkeGNWgbCY96LF8Ue8jvTC175CsCPRKGDjamEU4nicabvbBithP5qiQ2SX8XkSqm8MoqG1bayWX2fRXpto",
  "key19": "4d8QUXpfQS9ZhtpbAKQHjezgzh1GVbinSBBtEdHcqG5PZ5Aqubmx2HkRW5Aaizq24EZPh17RPw9aixaG5uJK2SiF",
  "key20": "65Df8BD9ZYfgDkdekuv5ZriBotd81oMhEFNjFnjHHUuFKPa46NiwqUkjcuUGmMrcLRbhtj6RFYDA7ncfQMN53gQw",
  "key21": "5NfiVuDnVfp4LVFKAryhkCUZmagzNNe6UepspXnS3zbqQp6n1GZLBq5ZDM9C4vgBHSEadSAa6J9Sih2tEtUBHECD",
  "key22": "3GQmFtKv27pGuuQxGMtNieu77i98tveCwoMWgkfYddJTR4Bnku6W9nM55z58MPrAzYEtNQ2QMMTCk6abLbqR4iAb",
  "key23": "aVJi3tvBrKxE4CnJyPBARCKKzThqsyNgC4hVZJqmqDkdcKtHJWEtCszhDSrkkFX1uowDmF1VrqvhHx7SYQ9iqZw",
  "key24": "3TEiJ3PwjK85KX8FisEmc1DwnhD5CwQACvg4G5vFRCtgjQvAEPj2v4vtGfuj8g72VxjkJu18aVb6yQVidySF267B"
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
