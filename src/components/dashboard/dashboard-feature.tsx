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
    "4DbguUiQ7WXhsQgnGT7PaJPa3htz2waCuS2RzMEaTXSFPETBzb6z6fAReG9ZjRN3T8G8nFZXGi1fP1sTbHZm4Pjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Vjrm2La6LfYk8j4fVXj9ASSzmYwTdb58ZE6nHkTwMgMRaQWsvHDTzZKw5dyAeotqoAZqzUxjNtvHw5hcJLP2EK",
  "key1": "4VkbozH9fEGrxnVPU7wQqTtEDFYMaZLHWtsNsTz352V7rssyoFAR7tsJM1pMpsoRC9X9Vz1yrFZ2mJRah6b23N2n",
  "key2": "hDdQrWhuP9vMNk3T1duMvrzYqiQQ7pYC6knSpFdSQDrch785EZRHW3hgGQvDftfcH6iv8Btg2VFkFQkpUo1mbwW",
  "key3": "4HvGeCiAB3pjh3HKtz69qT5eWT1REqE5iDg5KPhRL3k4EAD9Q4bQgSHgJRkzno5nAU7AyFGi8h18cTd3ePemXB7U",
  "key4": "3icr7zt3b8BxchCpXQjgwL2EGUX2Etg9P9oXnazSJ9ujYxGNETgDABcfrq9Y1oevBKtzczpc4g1kEwu1Hm6bPXLM",
  "key5": "544r6gvzY6fv3hirTdovSAfUZViC8wGsCXV58ZMfVTtxivY9JvhXqUqXcuXBbpv2FfrYG14i2bee4qhbetwr2msp",
  "key6": "5PQcodVvJNw3uqpJHyXCxdhpFxKueMjvNCW4eVeQbxT9FJY9mrvV9bc9iMwUcTRXa9QaNyLpYyjnhUeFcJWDDYJi",
  "key7": "XTzu2d2dr6wrKpp8L97ZzgNTftrbqu4gtKFPwXdE1dVmPiUFYu3kSTdf4iq4si1x9NSG7vx1GsgGMG6oDypKDS4",
  "key8": "8bTPiwGLfSFbMBUvd3b6m24YpFzSoteiz6CnCm7t4D4wgxgvmv1yRnhytZ2jdEWSHAVX2UCa11Niz5iwW1HCvsq",
  "key9": "4ftdpW6JGS2MnFrumfAToarUufSs9aa6xr9AsguAQxAaRTA7VpVMPKFNecAzF7B3BxWcsTxRVGAGGzTndrt3zUo5",
  "key10": "5kgay6CoWpop5mFPrrkEFHj4UbE7aNKCzw3kSoxL9P2NfAYgr5hHVkSPURa2RzDX7rAuTizDS83qTxrsEdUDrTJ9",
  "key11": "YCnJ2fmpMoYVLDjt9UmkFQcuTc6f97jy3gqT3s6sVXDKQQX3Lfy3tm368RcSUyNqKy1Px122Qg9ygXzYZShYNNM",
  "key12": "5a33FJ7prMgy8pUD7gEeLdu1Y5czB5pyoxVJmHvH89Ks1516Bci6VfoHzYQBe4SmaVQPaGncTcEFyzK2Tm2ioxor",
  "key13": "2sG1AijetkSaj9tQ4L4pSrnjGyEmf6sYPnA6mctHGWrNL2tfqWm9xjjVn4e9PJmy978TXFqZHR9is1TXbwRW3wpa",
  "key14": "5d8RhxTa4F3Smhok4rUc2Tz8uvkEmbFefHetMu2iiiRvjtukqsybHM6uJkVVPL5i3WUoNGhbRPWDUdmM8XeBNTzF",
  "key15": "4GYEvC9dNQ6opsZPw1kt4tZizmYvYd42T19FWFDvrXqwNmFYFFBgS8bWEGNc3apHANsW1vmAtq5UaAVAZZkjGPqA",
  "key16": "wN1sAPw5tpztH1TU9ECfPQLj3SvKf8MqLjf2nHNTXu2cd46WYupBoR3ks5sd42dFS3tsMxF7Xpc2fBpst4e3E83",
  "key17": "4GCHxPN46PXQmW5MziFdbGwP1FPFZRP4r7rPCvzYEe4Dxvubyid2QPWBWaD4eu83nriimxEadSPGvSjv6Q7FzF29",
  "key18": "5wgHR4iEgH4iZ6Fgr4xHyKjLSGAMN9khkAjijHHuqfGoGFiXmbwJExZasPuMgkc5Vvc1shmj9TF9bqjB4CuBpX7R",
  "key19": "2X3nCR63W4mNmjHpUgr4Njch7ZyMYqvsAvjteYwDqggZUULDEzqXRJtJvcuMposXE8ZBohGkFhdfe4UM67hhzt4j",
  "key20": "r7zMdATqh2ViUseWgUzEFTSoKiY2szFZ6hmBMyHNTNhQ2NoS5t3j24BUoAXRmvi8porHkCbGGQBjs4zpnG32e1y",
  "key21": "5WPUMASfgJCdhZ99UQq1vQoGh5qB4meAchW1PRi9Du2N6dYURmdYwdEJv9bY7KmJGJuW8sFNEqgKcCQrhxHex3cM",
  "key22": "2irJdmmfT1NxhNq7B5TzdzYV92fHfwebxdKWWsJS8BvtYf4jbpwPi3g5EffBGncTD1KGfgFaSayW6L9iUyQo7Kpv",
  "key23": "351htpMppQXvZg6zddhxmfA5AyB3EmzuY5MG3gjgwSoNW7E7RiMPcSqgsBgdYDXQw7Atg3PEeiRWttimL9SPUaE7",
  "key24": "5ghEUdvzH6vuyYV1euyDvv2TMjFjngN42ZSixq4QpHa8MNqVmzKuGm58e36b1Z6orj2tyJAbsCVtpQArbu3dG7Jx",
  "key25": "2LQQWHHuzg3v2dSH6SinkCQx29UAsYt9JfdUTUDBLGTmGHUXBP4mgGZPVufQDXJ4z43UwhuBHhS7UH22NGTpDtD3",
  "key26": "2HikY3B4C7v2Bz7VRPGwmFcGY2qLhmTas8tVPa68vFEY7jDkTSFcXBBo5QesKmjqWcSpbgYRHZSxsLT5BUymM8fV",
  "key27": "zKTovuY5v8NS6FE94vKAzxpgXebJ2uDqFKWs1tgbKEKfcCGVM45E1xSvyTBAHtcNMqujU3rw3wYjWWFSJzrRKS4",
  "key28": "62a1Tq7XxH3bcTLjZQ7gfg9DXFqoEg1EH3T85EYvB9ozbNVGoAq4RxpKKhjuWTeY6pAz7e6HpH1nTs1XgqvAPMMG",
  "key29": "21BuyegMnnW2uWb3PYU4j7TvM3oVHNWAj2i9AQzjnQf37fwoz8qYpLt6brErfzPmA3oyeDHosup559Ef6uiKGCDN",
  "key30": "3VAzZpqpJLjt5B2gNTdpDwp6PAcnqcmhy9FAzZczTrCMbKzdomojUMTBAwRScerbp5EMRBMKVBrcRCEMhqCSpb1o",
  "key31": "5sQsb25A1DbPq7MBLMDGAYp3jZQM543WaEMMHtFMJFfLkze1mhfgxPZLy2tMJHYVm8kHUYCJGDVzVLpAQx51vJiK",
  "key32": "4ySbs4rxEfQKAnVicnb49hNdnQBQcjb73j3cZyPxCHEjN1ZNssR58662pbE4jF4RDqTYZJitpby2ou2wcvZ3tWYi",
  "key33": "5c1h3czLTwF61F2yctZtjn8epVR4GsiHKe4Pste8dGLt26vMeGH9uBKiFPu7VVWCMSoQc4VWdRVir1GCfKaPo1Eo",
  "key34": "539CRvwB5JjPW6QSoHd36fbKTwaAHZi2c3oxat6yNBsfeXc7vbjTx8XeAaZpyaFzBRp3GMgE9tHVrMrdzPyyvy8d",
  "key35": "5gDyWJZd5oY8stMchjRdqUopX1oasKmRvc1wNNMTPcXR3Cs2Hw6BXNRqW45XjHVFAyzvQqCFNtycuaqoG23BimH6",
  "key36": "5gwvnqx5xYMZfT8yWJzTK5mPWS81DxGaUHGHog2zved8YAVEyfeD8Sae3T8bv9DJFUPBhxVqRbS7NiccAzGjrn5d",
  "key37": "4jUM8Uak4JFkcWVfR2ys1M5vVH4SyRvQutqn24pN7Jxy15BRooRFo4VqLmVdEk5yUrGUJsrnrLr4hszZXpbuHL27",
  "key38": "61nXAyfsEWRR5KkSLtVWnNqwooFKLzkrBV9r6o2t8mVWUzMMiXV9w3bnNTak2SmzGCP7VW5rJ3VvPNttvBYFzqM6",
  "key39": "4ReAQZXJqrR6XU84hhD7RKNKTvLEfGWwQBWR9MAJQ5WbeLdGBGrUP3BHRf6bh4qWsGmgrsiMdbZWSbAnpADZF6Qd"
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
