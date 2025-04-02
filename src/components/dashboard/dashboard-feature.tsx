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
    "3aUpe1VeyEA8uFKFv5MDHwjtdePrPNCFTh2kykZxZcyMbDQd93aiWWzMB6sBJD9dNRESXkVYnCZ3qGaQ5Ci4djcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsUbyUGcAE5aRxrMp1yCvLkSGpzYGrdhrpLoUmyFwx6ctYAARRS58pujRy4c6K8Hw3xSgpHGr8SKDjprttyUKck",
  "key1": "4PUmbyuyneP3dmM2XTAp2BxE2KzXP7Y2kX8U8RiMULq4ugRDrhjNsZ9SajDTjTxu12fFiRbEqiWkDumN5Pw4Qvcm",
  "key2": "Z9XndYCK5io8zb66bo6YpugxgD1QPjk5WNQAjT5wTvSmNzKvH5mbVJ55TdR2V2kpxsR7LoLL2CFv53kzd7ibb5M",
  "key3": "4rSTtvL89s5iWyi8UMp11uNHKmpLyqaQKtCyXbeYrBen57QZEfWRV8WbwDFcW4aYLdcWYY47Xp2fKuEqk6mHYdg8",
  "key4": "4Nkbz2HZvFVUu1QDMnjMBZLzoqXsurUhbdcBgASna6cG8qDV28GHhcaj2RAbwB6ykn236xmHaDr5X1Zc6gB9dws1",
  "key5": "5zFCU32P3PH79pS3FMmjsMsT8wLuPuScBQwq9fUzqzKkQWf4NCE68fF5WcuohU3N9ZtoQaqPyof4xCwJZr4aPfou",
  "key6": "5zo47UJQyd3WyZMsDbwW8b8HGkwTjk2CCV9u3b8WCTzWmssUHhUWpt6ALUqAsqGZYMXPpCy7qLJ1tAs8zpknWUy5",
  "key7": "rMkjHZhcq1N8GXK7YT77pNErDzeTVNtHmy1Qca8nJiY4KecEaUUfvf2KDVdUwZ7dQpRM1qbJD9kGrUaazY34Utw",
  "key8": "2H8wKKa4MSKYTFUaCasTAzjAm3VEfR9QE1xpDcGztJ7CZLe4sFfgd4ZxUREjyPMCM68M5o552Q3Bdh5bi8EGsDYm",
  "key9": "n33AKGx8u7XCxvx517pzMkLVWArcJZfrkWnB3XoUiijwpGxNW2eBG1WKrMXqdvp4kuuNAUuqFbdmX4U8b2jevmV",
  "key10": "37PqPRQqpxwAz6PBcrv6v3J5k6MxmVMxwkSXQCQ1QFtY7fX7VWZU3LNDrA4TzndufvVEr6HjdTJ4W5fQe5aLeHvK",
  "key11": "4dm1JDEF7Z7nq6rjCytBUjQqnaN3SYJCfqwLJX75cywnj8TnAbDL9gBjR8zywQoozoHhwMg3oh5PtauLMQZEUwhx",
  "key12": "2Gb6uKZpa3jFLMTnymrBL879G6CyyXtUzzEb3nAhRC5BBqdgUrBUTaZ2p6xFtScH66mooyfTSq7EqPTFyrSVPdqj",
  "key13": "5LuPsG5kzqBZ6bLJXBCkxNN8ZvS9fsTcWTvnFck7UTKcjVCeQi7Q6LvmpUhccb8wfBvcNBWZNCePa18mubjvCt2K",
  "key14": "4r9HonNQWmnU1WSTdDijoH6itXJuW7TYBT3qDym2p4ZDERiNw1tqPV3sGNJqwbuaNRZceJdgJGLHjH72qzr47Uo4",
  "key15": "3vJmmZqqnoptqQmoCbK4X9aAR4zw4DhqmYaqNvfjfSFFcahb1NiRfpZPKmkjQZMbUSQVeUxMyPYc4DNnYUjB55rL",
  "key16": "fzCXKSkUVXESc586njTeAEnXV57KYUiEjKfQGWPFNAnfRK4i2iQfmPTMDB467LrArSwGYntyN9g31mxvCvijNot",
  "key17": "3d5afxPptYv3WBLDdiuGsWhMfkhJchnFzd4uSsXn5BJ2TktYgUmwUWoYm7AChJoEDK7zh7mSawHiWs8omzY5KGdv",
  "key18": "4FtYPhTfjjXuFagP6xfWmmCDZvMDd7RecxvZHw7GoEMnN29Dar4sQyepDk8N6oncpTxiK9Yn1cauKiB42wJuZCb5",
  "key19": "5711hNiU7pf9n8o8V3fd7L4REPgUSpWBhgoKiKbUWuYrRFyTqpWL13Bv58AJDwz6exHvZouzBXpsHX6qVcTetVtu",
  "key20": "2hr1PFUC4B41fwvzYD6yLLneE6y1UAjtLwzXo5LMXUwZPe42SCNRPtorBnELPVYzvFz7agGijHaB4FcGgx3i4NNr",
  "key21": "hfGYimeuh5f3eGdrBAxm4k1S7qCjogQWhj8GSMTXJTdCwU7LLtgeNN4A1PKrKX2wypP1FDNx5PRkcdVrt6Q9Zhu",
  "key22": "2ig4Gw3UpgQTWiAKhmqjk8aifhAudYp961YFcwBguNC1i1HaS3DAQzzS3jTomN1zcdtqaFHg6Z2sv4Q3eRVp6mM3",
  "key23": "UNwpYEtZYSJaxRJ8EDW2uwtDv3EPBnsAfDgdZqdQ61cn3zjqksTT8YMosaqJQBQUSb41dvGDV3tkCmbeKSzgir3",
  "key24": "2tiuN1YEcpn361VfAaqSVV12GEqEWP6yLZUZoqVcELzVUsDuHmE3N9rWAwrGA99BNigCHVFWXhzvSWqFp9pGgYR9",
  "key25": "zoBDWFfBrwh6cuUVufFb2PnaXHd8bxJeWkDtBJR2bWfhPkojyU2JhiSGmzFZZe2nRghwU3FgCVsAdBPUGn5JdhJ"
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
