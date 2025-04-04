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
    "2rXV5msMTxMeRVPfQEyzax7Qkx7VT6Y9JAd9A5H33UFpxeuXuethuB69FiaFhbJjSzTpYmK5pSj5Fbk1suRt5eq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Snsh5TXy5ce3UfCLXfZNPDn8TNWNVW2SDU4Xakdo6gPkMBuvqDkVyw54tSmQfwtFXLzZUdz3bLBBC7mfwSHqdTU",
  "key1": "2AgfnpNBqHXF1MH1coKbuW2GLaQqbG7joBYKohfajdzGwEnWpwVHnAKALd4tyo8ZKDd7a6xeKN5wQjcP2FRUKRD2",
  "key2": "59b35PGdRhLHcUHXoaeASQPRCohApxGJeS6A3DFhHj5DrSF81deTo53yRrRrTi3vcR7yoMaeyNMBKpThLDg6GyMA",
  "key3": "5w56Nw7asynofUJMtQmz5c6VAiQs9x25PWBgiyMo4rQuyr5ZuiToEFE2d1KUpjZcrZi31XSTpmB1JyCw4mzeQmtF",
  "key4": "3iuPgT1KKwvFPz1MU3QDVFJSoS1p5diDhSM1yPxEUXzMZLGMEYX63GXBbsNvM7G8NhKBKM7eCE1p5B2bGTe4vvNL",
  "key5": "4QLo1vVxkuzNAij7eEs7qMwZi6qpKUvdeN6sMmjcLxhh8d4Cp3rSjgqMqHA9rPFbuRmuoc7GUT36GRoezU3wqFmp",
  "key6": "4Wgo6o8rdFsU4rEovaysYpXceX5p4ickjHEhiALrkJc5gZw2nroUBBMnodUQ7h3tHZq3pTMvfCktqPs16aeN9Tk9",
  "key7": "3kTAHkYMEFPwTqF3y3Ds72URbjZnsEhj3S4SGojV9f3FTB9KSLUddmBJjh2gGcS24o51kKK9sKhiu9taAuzAwJKr",
  "key8": "ySGxm1tovrX2mcwZ85RkGkugtYjxG4fCSkf1t6VaLZD1m5jQQXUuvJS672euhfSwppHMJTYZBP1M3WV3MroA9X2",
  "key9": "5FKxwQ7Fkdm6q1PFQw535e1p8pG6ASvfwbbYSm9YZ6ehmcqMjApQoPi6LwNwZaQhUEogmeRVXkK1tHUHe1w7NZ8g",
  "key10": "3itbw4w3gDUV2QcUWULBYcTckuvQwLtm9FMex4uudXZmYAq6GHVUj6dJdNhF62Bbs2UnmKpp9TLrMN73DD9EYPqL",
  "key11": "2NJWhj4aRx7YjQ3jboESaynUHkYpHu68DBzh89sbfV2BbjpVLeDQr47jc1WYA4WFDyrHesNcFzhypLaX1NC5cUuo",
  "key12": "5YVB5yUC9w1VebCU5eezoUAidLstBQaQpC2Fo2tnFrzv9Tj892goKwirPK1exFpQutCd3dxfzxm8dVRTQxGy6Bcn",
  "key13": "5Ab6N4vTZZ8D3kBTgNFvC8q1QCGj7kXftCCPYm9sf3ffUBVpSZXTZxVLxnBeP1BBeVjHL72x1dBb4PQT1xno4FKd",
  "key14": "3GYTppnXFtM1Nj46HhTQg1C692JgaepMLhEjMvpTuRBzkhJWuKmMneR4K1YfjKUdVJQkBgVR8cfaHhy2K1SHq5SM",
  "key15": "2cwYQ2Y6A6oU9qSbVYhV5rgwAmj2cCE4RVJSjiMAwRoVAx7qxpATRqoBSSmrFE3iHDgWsWJS2jJiTWBLYCJxYQd1",
  "key16": "35jHPoNXm92BRdmRmHtN9saCLg9BRYKo87NoywmF7UE8HjVmepedbtjrB8P3NrdYodf38vB3xfs64DYbYrke8Xqc",
  "key17": "2bvHto36hmZbRyGWv9PnfRZM4BpswS6YdPtccotLz3fTc3vMFtRDrXjjxv8xC1N7d2eqJypLDSvmJZRMmgWzRGmG",
  "key18": "Pfgas318uxthkxuXKdb1rJh2aq4hRiDeTDhmx31yJEZNRUUm3noUQzmG6Ht3VokqA146PaZW6Ryhcfugkijnhct",
  "key19": "4xXZYLbkJxgWHLmsRcrVCnZCM5Vr2esJRXYFpF2TAWUGZTzcm5eGyKBSiCYxCarWaeziGDemLyFkzjoA8Av3frvx",
  "key20": "5DED4sDBPAwGt2FV3iaa9dF9BERvxZb1N1Cz6TZvcQSB6sPbfnQ6m5kwjShbkX8tFhcv767LD2V142zJYTyDrrVA",
  "key21": "3xHZmTma2AYppeyqXSTXE1RB6oohejndYFuoJaWvrGquqpQihznWDPcEbbe4eMgsCib65aAcZ755S5Pv7T8qU2DF",
  "key22": "HU2jRTkBdw4NcP52SxsB5aqBxZnKmRKDQgVmZ9qcBzn41Y7t8oCLHu5wkKuxro28LxP2dt86XkDqDYMhzXZMiGA",
  "key23": "61x5pNSEfss2YRJTGDfmi4VaYJCYh9C47jPufevucxWmJcGJcH4S89axB9tNwRxAtPp8UEmRg1qtffNn9sX6owmy",
  "key24": "2c6Ykpfi8u4BJq7hRhrAb9bMYF2nYbsSgfzs5VPmcrc3FDwmfT9XknHo9ERW3rHnwVCAMQzTaHvQBxo9rxiFVhbX",
  "key25": "5zv9S3GnefGFAfxka4UbZY297idQLLUpEspLXnuoTmuMsiENm3rxTEgVFJhrXGEemrVzkT8vKVT8eHW9tubThWwq",
  "key26": "3tyNBbhJdTFw3xdBNvg9ZP7wK4NQVAEVKpBtX1FtgaLu6w73z4Wmre8rpwhXPDTo4FG26euXWaYNNsFmFbUL6v6e",
  "key27": "8HkgTPMg7kLHvUw4p4s3z8cfRHqBaMfNdCF3GuiA9voz5yH6xzYLvR66C2xhvdntGJW1JswS3PxQjH5JQVSYgdA",
  "key28": "mxoCw2nsVZipuBHPjqCQyHWjne7gKZcQa5tvnP8gU8tWV2Pzvp5qiUWwsDefzDnh6rk566XZpN8yS42aTmEKcZm",
  "key29": "2yMVHz5BvYmst9pxsx9masan8Ate559f38z3hquLayqf5qM9HgJA9yB7LHMXjYfD5aVL29BdAMSY8FunLSqswR1T"
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
