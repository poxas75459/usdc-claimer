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
    "3i2g5GcC66n31hgoYWPhNeAnpsihPc4RCop9sFQsbKfACzt2SMsjWNZ7ipy4K1PmwpzEcRWkoCR9PK8PbZQDffGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42CKAHySrJ9RsuZstijCkxqwkmNzwEdh4X4YaWw1Sk5yd3wE7k1H3j9tkhrNSVNgkLV4zHLJvJoE7SiLHkRVnhxH",
  "key1": "4ahw5H6CwfVd4rstBH8N1KXD2kM35xKRxqwU8VJg12gM7tSE2FpQPMKSf4KMzhhk6w4ACcRf4c85Tup5xXQNBfgo",
  "key2": "59jeC6HM51Xo5CsouoGw5MWzrRi7YJHKzLtJkSRwKnbHW394zkKUDG81AhfZpTXY2PGrg552BPCtzRkeAwGWgHPZ",
  "key3": "21qWqNa4HL9LMeSuWjD5GEZqMDoZ3x76R35dLdvj6R2GY1u96LNHLKDHDyQbxEZ7E5qKP2LGruHaov3J17oLuS7R",
  "key4": "5DbsSvXRHbEWuC9jJxW4kbRDrpymrKQUrrz2CgoZb9JM4bHzU5x5AsB4a54yuqWrSaGFRyCCYrmAJbEgFdQDJUFQ",
  "key5": "5ug6XUQG1hNvPNUMyuDAtFdmWH5ZPkZPLDbjLvfmYTKotJPQYnfpyZ5tqAq2aKRuYFBY6iMPE25WpXwGa9PpgnWG",
  "key6": "2wrzePr4x1mAbkFWypwp8RHF57SRZC6zmMAnUuMf2bM1HNXfWcqUuHUYaVPYxMTcGduoanEyhZxuSfgh7NoB5yzZ",
  "key7": "4QH3mDuVz43RVC3bgM87efc8Mg77GcfYehENcYpECEb4iUmCTMBJPfy2kyfd1xs9vqgqBB5SGcjSoz71x21dqjeX",
  "key8": "weYfyuZk2y4zBKcmGM4mSQvXzPhgJec7HabHAxxQr5mS2akH6RWFWYiev83k5gbbpBU87ew83h51kphBmVc1mU6",
  "key9": "4WHrR8aPK2UTfYfecJn63iyiLWV4LarLps83GpTzjj8qbQhStEpF9Yij3jRZyPF4R1UPoWHnETmkre3gcNAz2UJT",
  "key10": "5nQg9CG9aXgrQ9pQw6AZiEWbTcAkxVTE2n5e8AT5VmscRFxjamM1Nnxmkkn1MKpSpMWLLxAMRZEKge1Ra2R1JgBf",
  "key11": "5CmFAPj1GBXvsZrNJiTjD6mpFT3gCBjVHDaKpBEvr9DFoqJuAsWKtrHxggba1kd221mLV8FtHKGM3pNA3PoZr8T6",
  "key12": "5S4LPAYMFHGjSRHaLD5ftT1Key47GR4Gj36yWeEJEh8PuQWPspPraN1oFMTEjrzmVWrHfB1zNtKXJJybE82MCEdF",
  "key13": "4rCFcjCngXbV6JFBZv8ApjiCChzS8Tw9LL8tWyBNcXjY72hMMH1DXx6qP1dBMQh9tbALEY2aRzdcPXY3cB4hVbs4",
  "key14": "63UQvEe2LQ5pNgx4kNStYecQJCL9B8RRgXaesQWWdE9nMzgJSdV54ymXJk4RmrqgD97LXtZesaAyK8bEXSe9AqyM",
  "key15": "2h3e8t1kLSiqMr5hYGWexAyWuGkoGXSwKBQK22MpxQKgHWcLR7CFaTEFraEnuoc4rwN2jkhFqjmLybiJXm1kAKik",
  "key16": "1HreMp2uvdYJv57KeaQkpeZ6WvvzNuDKRq8LcWDbiUx6U9f3LQsetMLXTHUTzTSTcEz3wJzMxwcD2f1tqWZWZDQ",
  "key17": "2f7H2mbUjnuWPSQXgzhFsaAG2wkmupQBMeHpPcp6HTDyQeVEhG1Y2nRSUX4B4HWdPf3Tw4Hx772QQDJvybABGj1f",
  "key18": "4ujbX8zRfmHAn1sVs2He5NzJxAJ1ggKdyaNMXZScdCFHCJuZkhtzyYKeMi8pSrjNoTPhvFUVmbT76yAHe8C2d5i1",
  "key19": "31cWAqdZdkExY17LXubfFycYLVeMnYQxa8f4Wt3GUSioE4KLHgnZspQEyGigCTCosoCGP29aguEKcouLW7zgzxye",
  "key20": "44KgJH92d29C36RVjMkHV9TACaDtHNftqVynC6xxsaapkXRrHuPkirYeFRBWkJ5Ai2HfpsfrPMpBtzMU7xmXetkp",
  "key21": "28pVPPcjzyizzfELmBtfnuRjW4JUgHbPHRGiym9ir8EnedEQ72uSSEqhcKQYgzAtKUXTsjpvpEyN2Hq1oEtKu7Fi",
  "key22": "MGsnGAcqqrgaLVq3LPEvJqsnZSnT9Z9refbp7nh6GzFAkcUbCH5HVX6P3kN2xaECUV7Xsh1oXyYLdvJ8PVUs1Rn",
  "key23": "4Yqtj8dKDUhEbDbdkVzfV4WZytinPjBDEP2SKKNG7z22gw8bcx1DHZq8jp8si7sFNUMcGDfDM2CtmMixpvPWEAQa",
  "key24": "5CxupzCCw48Pa1EqErg3h59fRcvpNqRdMRgmzDoHuWyaWkPEcb64DGjKq8y8rBhvUkMUREg4zYXbRWhUMjcVVssQ"
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
