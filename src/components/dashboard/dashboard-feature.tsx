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
    "4NxUuU5ocpfma53FEU5Kk5Ae4Tzx8VRVydWZNJ2jjN3ECgRgCTySKGnX7HUN9TCixMubdLeb8Uo429nSqaAsp2Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UdGkvHU97exBWRbNqd1PDYZgqHPVbWXM9dFoZRi74eZ4kbhSCNYXNtKnG1oMAcM9xtdQ4xkapBHvHPsKwZCmd2p",
  "key1": "5H3m2CA2HyTBVHjMVPVs3GUyELsBpT6CjGhgibRjRgsKUbyP3bcW6uVsLKpcBmnZrPkV5N3TNfWcmeXaLiWFWJs",
  "key2": "Z3qewfabLYBKYRoqRTSwVpcqHfkzaesqRk4tSh7iSEz7cqvFMyu3FywvTfMbNHZizo4oLycqm1WLfw9eY7f4d2Q",
  "key3": "3FxzgVvF54Nv4JHZBckEjFtaExKjB9YXA7eo4N6oh37qaqHEuTK53EX31RhWRLuiHxpSu2N9z5fxQKBmqFJEcaPe",
  "key4": "DErcJ4UmgibqpkyJ3iqnGmq2A9NvB1RoW2DqWm5JC2jR9gEvYsPuNKJDpdQeVZGbBfYYn3KAkomqpRWKMC4stP2",
  "key5": "Vm2XBKVeMuwKR16YscqvYbDhvr6YG45dxuBusx9454PaZbat7fdo5WPW54S7T6tH6AqYT6EJmMgfjCzqEspTV1m",
  "key6": "3LRzC1C5w77x4A9zvod4qN7hC158i2csrYSvDeCvr4VkMHnfTrKSSTSvwPRGHnPnZfUnKP4wsEnXwqexDsrr9mPN",
  "key7": "664dwNaKTCJJP5NbvFospdgoroMWy8kHdmYcsumg2Fkpw3U1rSaM4ETy7bfFGuNHV4corswUKWHUwtiem6e9cfRh",
  "key8": "2rvwuvf4jtLPMELD21ZvCtEnutdxMn39ooFamsYiRmDY5v8kiZpAUWxLbAsp5uobJg818viYSTvs5X5SSsSFKCzM",
  "key9": "4arkf5NSpuSSGmEtt2L1R5HD9EpfsG7Recy95Ap7ykyxMJtNnBCziY5xQR7mNxFLduzhdBgSSjfA1sf82UPN2p2q",
  "key10": "2w4Rwh7MPCHXAkhfua3nHK1Ffey6jgqEeXdLvBKhrLLmJyDmegbxpsYQwphDoUr9pfvHLFtFjBZhTantyLSMCw9X",
  "key11": "MavhSxZjiSkhX4Aj41Rj7KHTgUspoX1W8r3hp1AHNKrn3BXPUaGjgku1xiTFNrWMwidgHzHocV1HCyVbZzvbW43",
  "key12": "4bkCoaN8YuDJeR2zNaoSzMw6VX6D1t5zwD936kEd1yvB4cFfvkyXDxcGg1vNumTKspxZQ3jie3utic21PHd2xp2n",
  "key13": "nFiVEzDdfADAFi3tNYvb1qFc2FyXhzyfXn8gw6Lvt6Z1BVneSPLHx5SuoBrQYKGfHmAXSTKwpi4QYiZZnoQgdJk",
  "key14": "43UDvvqMM1BquydWmso95xQQyHFTD4wW1er6cqowrDiE6s88EQLv7JKwhrazrLE3wXNWxncyeBuYES5FXazt18sU",
  "key15": "5zWcdC1N36NSdSZhF3dDEcdTYVgs6uPLjA7DTP152AZbFT5cZQ2f1HZuV7Jy7nhPaQoNrq5bPh57NaaRii5md6vg",
  "key16": "3Ht7kqpnm8pJeuMmYWnwU3yBerTCT4ovhDzMbMvGdF622CmHXUs3zhpZdtWEzdtSCqwpnt4t3My9EwN5kRSrZmY8",
  "key17": "5ntd6y7vYGMVm7aDbCaGNTPC4xx2ANbTvCXAeL6ZKoLXwLjz3aWyY9YFv5oR2qvpsrdQJt4yhZDruk48vUfxFTqb",
  "key18": "3Xhhspk8mzEthDg4N1vUn82F7JBi6gX3u3BnEpMTh73CS9kPntqF19gJqmozt6F9GBunXqy1kEG2Pu9arSrjjJtJ",
  "key19": "4VEdmRbykm59qapMK9qxrYUqdo73eFuWyqAFPvcqCmRp7rq88g18XoGAWNPG9t67zweeNYFBNm5rKLggSKLQq2sm",
  "key20": "BZa9czwqWGErJC9kicPJVmWscTbuAWmHx4a4gqs4YbgYXk8inKGQeYqVpNK6FqxsHxbGBQifh2H1sb2fTREkPMm",
  "key21": "2G48Cs7dcJnr1xfYP4bmtg9vY3SG8CA5914o62DphhuwiwD3jF6JfMmH8g2exfAzPCH9jzEGHfPe6egUoycPyWmS",
  "key22": "5u5DkNUpyeSnQjSbN62ZMstf1jfp5TGSMyYcdw5T7uLGNnWyVrUZmEDWAk6zrjVbVdLitBJSP9DmmN8WDeLJmRRB",
  "key23": "4ibYWVxZVoLh1H9cQCRXUUispNpywocxSjBJKcTezEP9SL3NmZNKSJJsyvxLzbH7Emr5kYL9XoRFmYaPb9xA8FD9",
  "key24": "i35zYuBdeq4goNhzJ5eEG9nJnREYaRFJBDbWcmgt2D3vpwgy3Jau6mhmHNjm4ocuKmKSE3r1XxMEQvzHzAQ2Cm6",
  "key25": "eSgiroifyKugafqgeN1Mi7BMf7X3AWhqQt4rfLcnGD6u1mqXyAukB667vv35AkW2U7i6QMypwbibPEq5KvAhmgX",
  "key26": "KSrtRAeBAHsFKYqy1xtPJze2jVzWERxAKorknJskzmjjqNwxDMgYwQzsQNdMXK1DqmKxSLRyie9zo2fe1mXvKDE",
  "key27": "3j372iDyhgY4gw8mPUYHBLvtMovUbi3HuFkg8CirbHxhXMXfVKPpfXhtmDN3LmBEFPcqMgzG2YiL1znxZUwUX4Lv",
  "key28": "AFM8uudBXoFuQtMHM9msZQXThtd5FmYGbp1oRUY1Gpwuxa1WEvQmZFC3HCxec4jA7H1Loq3NWr4iywujmwtGu1i",
  "key29": "5aK8T5R1fZsatGpEis9up6iVMEDuLxkXxrPDUEPxwNVmgiLneUihi4KdA5zEiE81aKHzvy3vQTEVeqYcGtxbRdJ",
  "key30": "3xwa1jTkn28Gs16Hpw8BDq8maUwrmbemhCcC9iLq8qNk8nSVAXGfZg78DC6XitWhaxQDHDGQ4WRNFg33TAUTTPsA",
  "key31": "3KoxavRYbxKiDJquzUz5tBwfhsLPYSB2qFCGjAqWENSAnB3ZkJvKRwZnyXMb5w83cYmtmVhAAJYGmEakXmxwcqCV",
  "key32": "3h1g9HQigDuHxaL2xrwtkEQbfjkpxi2mGDUAbTKYp1ry9LPt3HFeS9EjjUJdqMREQs8CmVvGdhoHn4aeXsYCR16Y",
  "key33": "zagwkrhKMETv1H2vUKpBXGudYkM2p3CaCsSKHyxyVjXfbrWULeMPjhywngZVJKHLD3cyEampximizhpELAwKSCT",
  "key34": "2zPwxGhnA5UFnaayAF4FjQ3suLRHbEYxGpeqVJV6bHuJNpK7SkL2jDKUyoBiZ6ozbTa2RXTWBcf6PkbNHRn4g567",
  "key35": "5NXMyamevyfAjRrUBvZkMcPNwZtoYJRnV9SQAu925XG9qXGNKExWfZ1BHkZ8R67tMfr7YZBQWW5xWx8hi6VpncvK",
  "key36": "S6nbCPirngPHaBQNXzWtHLuYeo9DRvRvf72D6p2R5hdZQeipkK7mkYDsVKzTyPk312b2j2LatNmuPUVi67UeKBx",
  "key37": "2XxRYKAjx17P9oY5TM32ZWZpwySP8rHbFaJJfV7yhVoEnU2rcJW9EvanhortQ36oMhbcpDj3HjqQBT9Dzs5pEKKV",
  "key38": "3ohTKUu3AQBDN9wrKNnxF2Wsnj9cEoGthx5xDncCu3wpdUhLtSMhxfqLR9S6aYVJedcPLR6aJBMxpttzGH8B1gKx",
  "key39": "3cFWVfzCNdSt3zXjLzhVVGzjWeVmUry9M2G43TZFvQKwqCx9T2trU1EDkycqcmVSrMeiAGmMEpem9DmaQ7D3QQt5",
  "key40": "2y7tQ4ZLNzRuBKni5zjoaEFnL9muwa2yeYL3w56HRbzzrXkpHYgrnGvzr6mLmdHo4VuuQ1gD9MBUUq7Xn9r9iLrY",
  "key41": "4KxMPLLMS54Wqw68dZ8GPZ5YXV9iTApwmTDbemyxcVpK48UrQdHVFGnLoBjYiTyGp6a1MiPFHjhaKXEqVhVT6azG",
  "key42": "5DkMUJFoKDx8N77FF9zTeuskFZn1WbexQaU7hDPSgy68bHFfjNngw2NTJwZbjfV6dp5NyjjafYBNSZTxbwxwhd5",
  "key43": "5hJSi9kb42RDGJNsBByy3wQF3rYPTZzHs9K3jwVQNaSCMhtkDEZUAV33AynuJkbJJkDnTampc76thYhNP3TAVXrY",
  "key44": "43puS4JqtogSKogWCDmZ4REawQr6Ct4GFfWeqiGhWDBVKGXjTJ25MbBYo4naYQ617ESPtQnbdT1GFKb9KWuEYH6N",
  "key45": "455vLveBjYU8k53SWJtMmFH1vFFMKAZxH2HmKg8oXBdsceiHmv69zY5hi3K12Kb2d6LsvdyRJd6GEwKY3PRh1hKM",
  "key46": "4qJG2VZMddC3u5Jja6R87B8sGBWpQTDaoxsNZMNFSPY2LH2dhr7JsytGGJKNDQATpRE4RAddw44wLnYDrPv7SR4a"
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
