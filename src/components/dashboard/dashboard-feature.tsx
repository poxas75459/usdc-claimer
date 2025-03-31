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
    "3EMQRgMYYhyeoDKkaXGPeURVrBCUdRTMJXyPzJgBMAnuwYqdH4V3BFsJFTHwYuqUUcHHCJU719NizydnmTcX5vGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RmKNf999RnybJp5zGu6TXDHKqUy1MpohKcnSkrAvs7D84VnjcW8TXrPCZTVDUdXh96Y3kpSb44XV8VGGtXXmzBR",
  "key1": "4vGFoJJbjHEEY1aFTCDjNtw8cUdRM8Ng9YGGYAadqdTRFg2VfXQsXf9k3uhDsFXcnf2HZgiPoXKtiXpfj7wxG3rj",
  "key2": "5aADZoVPehQw7sgp1G8kwYfoCAmhqLSN8yvvEAomRmfwwAy41pR1FbHFGEShxTNXiXsUvvCfr6r4kacYhyAQsZmK",
  "key3": "5ZJwPMpCGCuKPUfU8CfngzmdawtuXAZgGZLLL3e17zqaj2SetuHkaFUxTbxzoL4dxSwq7Ud84JEHixBD391jv9fc",
  "key4": "4P1gS1Eci3BZtpXy67nojcVMt1rZVSHSWPtTofck3pe7KgEBwjsnHCMCFKz3bQcVXkvoEnyjXPLMtRHyJgKie8Uw",
  "key5": "3h6PiUtsyVvuyy6XtpSCiXLThMfykt7SAcw6tMwhyhLfgkrUGndaEZTtM1i63UfztDuMeye7KwBro2woUpdKgL46",
  "key6": "2m2sDu9Fk9y9TMNeDSFW93vWf6m4rwDoejDoBLoeggFu7mmF3HYkjsjWRgNsEuzxc7JioBZ9CMM9pDAgNsCNvQ1p",
  "key7": "43hdBHPvgDD464Wb543BgQAQuAjhH9rbZHPfokCqDjMBZRiK2Exdgc2NPJZ9x3qPJiAoLEuyx2dPK5wKeLagdXwm",
  "key8": "5pNYW7wJ5u6dPkhjRuZ8SC3rZFT19ohuFnUxGC6ZELfSZEXuC6hXF1dRKUx241M9QTU1kyMmpDns4uW7NVJ6exsh",
  "key9": "3WjdALSNarSX5Y2x5rDCwJdmqmPAHvnE4vhFVLbgQo6BDTqsUnP6HTxyD3FkYgKh4udqaQeZNioL2xjJP7bch6Bw",
  "key10": "YfDY2pQ1yTxvPV4JfTKgwgLA9v3rKtqfekVeza6vYmanhgXBqfz4zDjLrSqXN5EGT5L5Ub2n8SD85qt9aU9Ka7g",
  "key11": "5926CN5DQiMCqufF3S8PsjHkgreBX2LBZ6gTVLgE9wKmLXN71MgRfQg5UYajgNJqyhsCvr2QPFY5VCAMdfYopfkL",
  "key12": "3hwuGQp2MBcmPxe7fRiEjBwVLTnGP8BFSDvkeS7Y9RCPnoL25UgzR2A1T4bw1wDTwLbYGawHPvbg22LyWHiD6akh",
  "key13": "62gzVykV2QyNs9LnbmufHRmHmRKgxWbPSQCZzfYLshU6uBPLH12PJP1ihz5jf7U34oyozbksCev49HmAfqLwYg1q",
  "key14": "5a7hETEHpmtggNj48wJ2RsjPJYoVq3DfpJciDWg1Xvny2sxoWVKCos1H3zayN8teVEHtfT2B8u2os1B9xiz1oG5c",
  "key15": "QKheAWszQASomSNZjhnAiKtkbgqWn5N9b4MhSjxcDfuhqTSFkxrK4PdYkacJqwbZjuWAW2mVr5DSGjFcVwY4tGA",
  "key16": "37XV5nJurH19aLu5kcq5a1NdLmzE3Rzc24QXuuVfEJqbyBUhL5F66rt1g2TtP36q3ecN8EuKbuM1UPNa73iJMJTa",
  "key17": "x8xjm5d4Pj9Ee7ZKdtyZn2s4TE43T9WPFyVRf3Y69Y9G8LJPX9WfF2rkEiKcRe9ihyhehE2grmTfEVS5GaMVsNT",
  "key18": "3bADQevkb18KUi4HrbKrCixxT5W7L8ZEcweEbcvwDPsBp1KekSRVmBoTpjPZXcmtRSoD3qzn99HjhdpQkrc47ncf",
  "key19": "4F57RzDn4A9Hb1M4bnRh7jzxnzKhAy5PyREzCzaoyMvmJ7EpGz1kZJWho9NB1f7EgPuxxKGuANAm7mUS8byRiCd4",
  "key20": "2XeVt6vT87enWUF6BNkLx9o8M7qehEf9xwM88Runresm3sVADh8zugG9zY53fFsSx4Fdpm2ejypLBTsTkvr9TbZC",
  "key21": "3ziJc4Exuq56tDhEDgMnJ9YRMTAyvAWANEcpi8dg3acKTgcwS6REZ5yNz6ZM2UdecehRaUVvzvXqpeNWWLqgiX9Z",
  "key22": "3TZyWNpJjcep99B3QVS7oGjzoyRivuVYikjsChhfdiy2WUwZpZpfGs3NXqnbnrqEE4up3PjNiWpfZVn196d6Cubv",
  "key23": "5N3jcpV3WqysVsJcZFCRLdsoCW3WNLymw5UarEYgP9dZLfzBzgirun2j3PWXrYy4aW2kkimGxV6dwhijqDddgroc",
  "key24": "2RZfDZ6xLuZwCxDFRaqXW1xmd1i64rR1kbdQBXrVMjDj8K3633SLRJ9Ea57UR58QrTc1YCE7bYqfM1azwWre2Etq"
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
