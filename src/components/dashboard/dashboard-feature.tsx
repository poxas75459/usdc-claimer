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
    "2c1niFwqpv3Wkk9TEYNT35PJTANVKNxPn2uqPyLuFEUKzkqzFjgKNVqhyhmuoUzemLr4uQaZ7rhbDJ8SnfTW9CL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jaTuW7L4JcDG8Mij5Mv2o57QgGfKQMyrBrECz8eEVLPB2rF5QnHA1QAnbHHSWXoKNjfcTFDbbjniiEn4QF8PjxP",
  "key1": "XxRFjvqTs8EqmLdEojMUCzYwYfVzB8oYX9gNDVY1kaP2FjmRLXKZJBQYtzvtdggpWec7PNrzy9pfk3KM5GKJR1w",
  "key2": "2Cm3AZ2PXmX2kaySBeEvZfmYWZEUwUwtWzD2eEevxDnxqtSnvrdmooMSStwhYTLm6zBiULmZgLFosZxmhoXmZgrW",
  "key3": "4RWgUFoVzPqhUe6twG78HFrAWbXRpCZZ9mf5NmsEgCVMRqh4x2c2dTqWL8P6rhZ7TxtqU1YeFHNiCFXygLksJBLW",
  "key4": "3wG8C6LQ1TS9ZBXJqTHCgaegkSe61zeVfmRBP6BSAj7ZeSuipFfUHCouYCvqeZPfzeBQmqMe52SNMiQPWkpgBn28",
  "key5": "4knbvzHtiuYYmFT2XauMFrtnei3Hq3gCqkFYiMzp36rUUhtCdGkYdRsPMq3xTiwpJhu5HQPHnAaxaNdwc64KdhcG",
  "key6": "5govjkuRvkf7ZhcAve8G3qy4EkauaX21RGv5jRckER4fZx7BtzZP1teZBi9VkaLi7gf98XniC5FXtK4mejrbM7Ty",
  "key7": "4MbVCqQMX93usMPPAjbpg4v6EquRVVJWtyXYpU35fpNRwRynRrewEtkMHeeaMtGZneKeHSdiUxaQpo8GEETGUn45",
  "key8": "2qVWxpWGzVur2WmHv52KrSpxtbNamXNtjFuBa2vLZq18k372utuUavquZhcZFbwf8YfZsFabccsTEHT3AGNv8ysh",
  "key9": "3QKxcN9CUD6qxSxitTnGAHZNVzkE24Kc1TT1TBkYAkzWcVwrve1xQsF4vcYvhiL18Rj9vkbGG1SttxYBExZ48KjB",
  "key10": "5cJhhikGxL4DxbAKiPNZTkLRFYQK43JYDDP49xTLtXchpLau1evDB4H1V1oYCGJgUnXurpVf3nVXTtAQVbrvmEzo",
  "key11": "2c1D37UqzGue5V5eNsc5W5wH3V5fJhwKQnXdkRgmjimoSeqrVjr4WJpkWyCstuLgX5E9hwvp97rNZwf7zi5be6zo",
  "key12": "2M6CVCaWhooa4fea1WU67L1QcXkZaee6dKxgHev1r8EwQjH3xP43st2j73WXqnfTq8xT3gsjT16YHyvT6ZtpSLoj",
  "key13": "4ZrJ5RucHUSkoeYNoy7fnTWR2H7vnpPUAhewEH8azQ9mnYKzipGDKyQ74ozFnZjLcB5Pzpf5k3BisjZEk5TCxRvC",
  "key14": "rw5zULoWd3kS82ogHDumfdsMfPP7pHcc998uLHSMSqeh3fC6HjL1fYrCrGBFzGzP2DN6wGdW1FKw5eupMFh1Bct",
  "key15": "53fKWJWu2g3en1b3sovqYi6u29esm5RCcUQQomg4NPbm91yLS9T3TCscVF6tFLtsD2kja1WW6wFSMLgACgT3gdjz",
  "key16": "RJxQ2Fgs39jEkJcF6wXS9UDuHC8QhYgY77xD5Vtvv2UKER8XUMcaz86gj2o55kx9iHwzLAA3YDH6T7QsegdTDFJ",
  "key17": "4SSPNdDimzcN2iGiFfHdzaGYeTjt8aPWAc4VfWbtgs8NZHRaRbJdbAVxSWFtRNDMs9yBscPfPnkQsbF9NF7moeF",
  "key18": "wwfSsAGYnLxALtvH5SH1N11XaRVwXnerqJJxiK4xXHNyqziExALDqHjYspedZVrLyVGJcf4YDG9R1yW7hP52qPD",
  "key19": "2VhjT1Y8Wvjr1z7bLiWKTUATGZLT2zHCpukWKyBvAH8VvqGH7k6h1gAvsJfVnms8pHDfkzueevTJdUrN2mvvEdTb",
  "key20": "38yXCCLsTur6nx1JF1dGdyqVbXGomMuV3C838BiXLr6rFFnLhCj2z9e2cDonDN1oABfmrwrdf1GtLPCTooqmpNg3",
  "key21": "2YCWUDymJybE8En2gkBCTWjdhhyQcJefxvMmis741FpM4JPZ2uJcjeTPGLzxzzvRUonm1NQUEimLnzkxDSnfQkzF",
  "key22": "2NzpaEwPdfvCGjiURF4pKcyWT2iUkAbxKaWd2KCXsBLQd3FDEiJvZecN6brqwiUYJDCxjqvGxm89mr78zfAgXiBs",
  "key23": "25SB2MT8HfUd9mee9ZiREvJywPHawC3enByUuYwxJXWYt3mWWoTyp9cLRnPQm3rXWzTSM9iBo2owrLMVH3hEw8rB",
  "key24": "4JA8U1PMGb2hUrvb489K6WdX5mjZFAi5K5sy5KJtcHEjV657wzhDKryPrMcgLRCm9CDDfpiSCzKzDU4p6deufEjY",
  "key25": "2yZWwgj5Y1YKwUS61cET7LFDqrP1ezLLstFDh68dg3D6YWw927EjjkMuGefYDBHVg3cPvMZKjtGWuku311qigT7",
  "key26": "3yhEYYX4gSbD8XcNR9yrLyQRzhBc8joCrFp3KFweRPxrCesB1yffnURcLRQcAdkWpgSg8FPPdDwVtxQPEA9UgJWK",
  "key27": "64aiDZ6DMt5wmDzjiZ3sujVR2ejLC1yUXZZmYTtyH3vzMZkvhZ9tcekLdxt9TjJT9Qx8GrGtTU994yhdZXvg8WC6",
  "key28": "4cNqh9KJwt3KdFV33TT5WuDL82xxq2LBkUbwaYjp2k6pnTYprMic7NCNVoCxmoSiu3dVBZyNCY5ViPgj4Hf7cBeR",
  "key29": "4z918LG9xMMhfZDrZpaWAH1vA9nJZ1hYNMUzyp4Z8YxJQJ8pyhUuDHzpkh775tGNxExqdrMTP9pFEUtaD8YdznzJ",
  "key30": "Mp7SHRXGaAhxWnuEo9b7PYNnu56471j1F3PFa5KUXspUtVpnF9xYTucMoR2ukcGera3Jtrpd9s17yYcQjsumbxJ",
  "key31": "5EaWqJadjzBD6NwARSDkqYBk7Db7DHxiT7dMPYB4HCD3YSFzBhgQURp9iyhA7nVVEqZ52QquTxypGhgsw2YRtjnW",
  "key32": "3UG5syyjfbvJu6B7q2LL17v1LjedWZ46Ktc2hLxQ1Vcp6beGHg88nGbuF5QF8grVawSKjtvYuBVhtEAwPQ3QzgKv",
  "key33": "2oAMFVFaTy2rqTXFYBLaN1qWWW9zEro5xtJ6qVdFPJs2T9QxoQaBAbtsAt8qEsuY3SL388e5a5H89uUB4KSbQGGB",
  "key34": "3AFj9Hdd7wwKyUuoEVEXSNMeQzjRWhC35rjcPSeetDFz2uqvoN6P4VFtUWCKBaSS9Y7HABDR5kXUGPqjmGg1oyEJ",
  "key35": "2LoELugog84tTJERBN5dywiNvFrE1Z8LxdMPdc4FTjY4Zb5eY3PvrtcwwzHDnH38SKaUfS4g4kkDpiejHXqMBU3T"
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
