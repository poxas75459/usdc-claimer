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
    "3dE7JLpDbgcUqJBKQ7VqKEBBCPiq24W2vQHukNnA3iB6KhF4CiKTaevxGU58zPpKGwvBSXGoEBq7tAR6oJX1J2Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPBCypxghg69qVBEV2Sac1BriDpaqL92xYXbhPM7nhPGYrxvvKx2J1EdsGPY8rp4hBMPmDGV1Fq5qdSXRrprGwz",
  "key1": "i5DFctsujGzjtUCpkh5LUYih26sbqCzR7DsCNakZZtpZr7oRUmj3hah1yTJtL3mBoEgNnxmJkFX1doB67wEA7QC",
  "key2": "3UFi7XU37gmMr4hVfVLjSLkJXUAq7wcMB6f7ySnURb5Jp8J3mQFM6dyBKCee3fwERPTDV4toUm1mGVnw54ezqHL1",
  "key3": "2ryUNY9YQBsf9hF8f5RgofXUw11RyohapsQzwXbr93DLYhjUMakUvPYdi7ULPofkb4wFzNpVaHo1QPopemBX7wRJ",
  "key4": "zM8H2dnCS9zLm4rHhLGjbFGVq8Vj4GXjE12fAHGEnL6DP9wtnMjG5fPpd7jWeSjuaLZxnFaA7qy8EpsoZ5bxnoa",
  "key5": "55a4aSGZDCovUQdgv7FAWnF3aCwBQ1PMC9DFwWjsk3pegEfjp6T3xJwsQKiBuEHKSYD8HgidhorZZFuAAd7besf",
  "key6": "pHZqHunDrPQL644jWeJW8d3Tk99yoAy3XtzjrEDPUdD3Xv3VNXgne81BXJCuKyDZAz2HT7ADCmqDvNr8pcZA5dP",
  "key7": "3y1Po41uZFRWwFGqmfMzJHNEheaspcKUedhVoTdH7fUCQodKeMqsUMP4wBPgUqtU7LPgwtPeMWd2cFdLxMsuJYEw",
  "key8": "4Pfsa6mRvmip1pTdZJeHykaapNt2jhYhWmkY5UEUPjG3nFkRZiJoUF9uWuecaQwM7MGCLvswr4BZAqvenbyK4y3T",
  "key9": "38P2SwRuKyJLdN6ZyUkXJLPqc3mzDnQtcsh4HA4dcTZuGFBHJwLA5x19TXiqdUY31rL4ixroRR8J6s4R7cAu2AV2",
  "key10": "EbKug5hvmdiSNVDKTCF8LwgkdHXyvqEAjZsiJBPoehYmFLKFTDYsKt4DX7jQ43h5pZ79fxDWjRXBxteGbJmQyaU",
  "key11": "3ixh8QUKN1AQGeKnYipG3NgR5fECbqnZnHvXxePYAa2uwJNJ5oMEW9FWDHKy3mNwCT8cPyE2u4niMft8nqP4Ai97",
  "key12": "5UPgxySXGNrorbCt1Biw8Geas6LuZP8R3aBCU4fKCjhyqWZdPzSbUBvxyR8FvcDTXHZnh2N33GREkEQjFC1P4iHc",
  "key13": "38fCoqUVAyau8z7gQrT19xywDMh7cVu8FssMLoiSQ7rUNspuJHSDsk9yhEjz3sBgd7FtrwT4KMoJruE8JQ2kg2tm",
  "key14": "2hFPXmx4tW39HvggRqoEA9C2zPNcZSwFjKjxGViCCBHcSwgTtcTUAvUj5Bz5eMt87jrBZ9vopr1TEFEDwV4R44AM",
  "key15": "3jku57njaeoxxFWvz9ULhdfeth1qpbyvMYvkNfMJ5sMgk6UYmHZ1MCCekY6MnDswVhXuiGAyzuADVebtPk5EHvph",
  "key16": "55Uztfz6PgkFNQWfwYpW7wEucDVABp2Ff7oK7J2oB4xEFsgjEEUYYDMwuNY5VjpcNqpJMAvpZF4egtn448gFRxRJ",
  "key17": "2bebc5qMWyDT7sBCDAQJmAGZG7NPx3y54TM6RwrLKtdrtYAchWMAtc8sgYN3QYscP8BnYVfghi1STriBVsRzEofo",
  "key18": "53it4NCz9tCLjjvRhaiC8EpjwQEkEjzFmWai9vKTR9VgrydnUkwaVpLXBBKQ74VzwcPoykkBDhqpovzbXTvZ2Jbf",
  "key19": "59BZMrKELF7XTP8hRA2447V31UUGTvFYVMCMbdMFQe1kBnto9unz4iDnfBbPU1wR21sDaXArTMqoeqoG7NpyMmMk",
  "key20": "3CDA17DLkxAMVsXx2X6todNqCvpLtkC3CS2Gcu5eH1z8iAiHF2Xzd7ronaDTZaKouuhTqMii8BDYuPRxC2WqJQAu",
  "key21": "4R2ytVwYjKAPg7k3b7Yu5ULTBhs15Gd8gkRXWMJ7749j5E7WsTSViUaMmEDaBZd7ChCNE4CqtS9X8BYd1Ytawisk",
  "key22": "337BzXG2y63LjbquqozqdtMi2p7k9t51JKpjTHAZkSDBnFETwi4eh5QXxwk7j1N4KqembKkyD3hDmTEhn3ZZoCb9",
  "key23": "5LckXtQeynZBwscqRasaKPYXqsfsYSs6kKtRVsmitoweGLHrVHJBbwvXKzVJi5b1gbwSy5SYrqBN43hD2gKr1duY",
  "key24": "5Wmt42fRRaXxL2xbNHoFBqeCQ4QFUYJEWsbkpGQ2hwwaKYCib47gTw1Wdd4s17utJj2di8ewTz5AoXEE2BteeUe5",
  "key25": "5DS4yvX4Buogs5degjK47dcWMwquiCejVs77MdEM1Rerv5wbFXzeEmTaaFAjLzEmGNFnmAECdtpAqrEg6u1Y2EDG",
  "key26": "49keSCqkrZRfQs6rapgKG7RsjKKUWSY5p1FzfNg39Ynom942L9KhjYs3FnAsKkbdW9Tt2mwFps5vm7cHhp3aqPWw",
  "key27": "4R4TzE2j3C6VEJGyibC64kaMLQBU2RB1tziqrdaAP3cbFz6mHCYm7WGkhrsuQ9U4KeyfFshgzp6k1AgT9Xf7xoHs",
  "key28": "2E2YVSta42TbQ2AkS4bQAmRTadqsM5rC13BbJmWFTDJy9wjfEzLSCPPHnCgTzZnmVviytHWhViULDQtRSTEPqE2A",
  "key29": "3L5z69r6U3LzYLQ1YYvpsPeKaixWscWjQLSEBhUXKwM68zz3nX8KqnPehV3QPw2CpQBdQ7JcNgh5GEhLPX6G3WQx",
  "key30": "3daP7ns7XFP5s9fNPuXEkY2D4Av28pFYdKCw2GzDgue3FRQsnihmCnPV5Z35ueeQRCh7U19SB8DWqnGvmmoL9t87",
  "key31": "5gaq7n4FyYstJnJXaVTdu13dCse9uLkpoNDAr1sdSyLaqUrj37t5R3i8XULA9SXn4nPgR4dYHwbD4WjZuBHK5p3c",
  "key32": "3vGwDyUbgf1kjud3m8oa7boyBmpUYdvisxSkByZhbnxgzU9rA1xJd6Y7PQGazFcQGDT3puY4yiSwkuLWE28QxNVS",
  "key33": "4jP8fF5WDJEtwRQ8LQAtGLrkmkQbSRvvGLcVhcpU1NKf3YpTe75dr9TW8pQhDcxWsqnE7VDRm1hjEJF5iz9s8oP1",
  "key34": "3GXXp1sACc2pJMG7U8g2J1PzREKxCR6kXQdwELX3BUc7YXoK7qjyFxCkQefD67ETrcz7kqkuSTAC3VoRjyrDteHy",
  "key35": "4cRbDcJkqvtgNuSV7vE1inqGq65vdBN4DFhCQzcaCEeZbSpyoj8ZJroKPtPTtZTqx89NNv72EMpuJtMX5sdxeSTi",
  "key36": "3dL9DSAEumTNuvuYyv7Ln6t93DYuKE8bWXeuo3YTt8p1VcuAukjFT3NA64kkrrWsBbZyLrPJSQAanswL2GmhM2Q9",
  "key37": "3brPC3x2FgkgzVzf6oDL15pj3tynh2hczT2hFNjuFF3cWCrEzJ1kiG97RPKNMTbGD3ZYv3HkWhF2dp8rA1VgXRmt",
  "key38": "5kCaNPtigeWUYTnpWqeA3C4SfmoJcCSx27LSEYhc2E6YN4htxJWQ2zBAmCwBK2SQoXjPcWTuNtgddbUYzn33jT9L",
  "key39": "66KYfmMkNjAsjAb6U75xPGsx7wkjUezGp1EoCtKBnXPTGpJUSAijX7ysGWyDpUcAeRsZCddPjkoLw4g4jUuUQR3g"
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
