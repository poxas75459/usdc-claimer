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
    "3F5xMfkKcHTyDKD6ne2nAiCSz26uUViJgonD698JYyev2PbNNmcTPFLFoJWUhhWKJDxQWii974KGuBcFiGzwGdQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fG68ybAeH3JB6aQyxgg9b6i7cLJRXQf5HPHeRihhMnhZt4pCXCuXUaBmuFXszEttXXUdK1ziFbse4zGkAQ3VaTB",
  "key1": "XmiXxFDizenmaUHPKCmUTgcqE6NSParJQqqesSHhUYncCz4zH2E76QZZTHpQUxhPf7FUTS1mcPnSn3qtsnPRu1F",
  "key2": "51koGdqgVK6FcYhtTnh8SQybZrwK77KRcgGaCFk3v895pApY6ASHd6iQ7239gX9i6ozDZg7dXKiZY9sWMEDNd78U",
  "key3": "7RN8aS9mhmh7gCJzfT5UQdHvsTVGvLFHKnJp4kX91Uy8CAyYCPYwkZtFgdS3fVFy3poUzB3PKQjFaEj9NxS6i5o",
  "key4": "62RJMcKbe3xhr7hNhWXrvnHEcRWRAmiVC3cZRohntTT5bYUVQdArNfTovYkZr3r4qFQrWhTjnbGQR3CLXRiUhytt",
  "key5": "2wuv7LkWizV41bFm6gpotut9VraqMTbdvw7YTHBeYQXtV7Cd3x9AMb8sYRpAqrniY6KhACXm9iGeB6umJSdMdzjG",
  "key6": "2qd6x4jbYMCMyvxDeQdVBKWaEHJhHKbGR6gHsknyjVomrGas6aeYxfoF5qwr6TS4vH93aNmxBhpjjPQZLocD5aZi",
  "key7": "63RRVQX9do76w1E1f4giFoXPBePGPYr8X5Yd3TyQHYFYCqLhw1x1rzyf2LamoCKU2RmHQExXBkirj1rDwoyJKBWu",
  "key8": "4k57HFEMUvB2TWpEXSzquvuDyxuS3Lj2nUPyZFNuD1RhMZSDigVcco3AoNKhNmFaoq6xeByvbA4bwv7CC1YfhPSZ",
  "key9": "2Beumd66Lje9sqEuLNQjGX2DRaZxpFV8HLmt8mnRPJ8X4QPb8wHSBJ1LMVMad2RuEkCFrASKLdMJrzhfsc3d83ry",
  "key10": "qjX3CiKjhJqZx9YmHPRZJomNrTKgxrbu3EjPgycEx7XY3mbu6w5dxDXGAcUEfFLXyWkHiGc7EWvQxRug4ZnYe4c",
  "key11": "65DzkKD49gU8AKrP5wRfNHjGcoeiXAYogQDzZL9esaWyAMW6GYfqHAx5CQAcBAtpQ2W7BpTuz6emSB6zrYyWnfit",
  "key12": "2VekfbSov8AGBLGfAHoVvaL6KEdFgHQDnT12G6o1Ls2FzL8H5w6PXks1qoGrYxKngZAGjgrDVpRbvpeGWEsuPdEd",
  "key13": "N1THfpdqaQLJCApWvvKagKUs5chSADDD2JwGWEumycMjj6pZVQTmqfMXj82fUystxUKmhKG2UGZ75UsPp42a9Tt",
  "key14": "65hugErze2GKkkCAUnQybuHzkF5Ve3rVizum9tQweZRhYfduo3xszYzxyYJg5Pg52uyp55nzurbjA7R6HyUExWt2",
  "key15": "4L6miL2vd7S31qjJPh74mZCmxgZddRvGa1y3XdNEJzXY4KgwgDC7hjxxXS8duNEt7uCk1NgcTVdKpTF4XVEjn5yy",
  "key16": "3xu43AWwc4CRWn67ShT4V7L4ttUK8f7Xs1v8dqbf1F7AQeJApjHNu9WiDXAUZnXMZvWP5RrptZeEVYma84Lf4nyx",
  "key17": "7EJQbd9Py8D57GnGbuTWBn6eMtCj8EkU4xUdogirYxLGhqxUTZoJNoRkqQfobcXPFj7e6qtA3nZN3gNB8uPYkr2",
  "key18": "3W4znmpopexso68cjdhUwWinZDJs17ToyTHx6gcFPQ9PMEe5dR8vDtZqrRB9e3WePREGMED5ABwcpiK8rcj8LPna",
  "key19": "4Uj54PLHGLNfgjpgLKn5NkoaRRkb4ovZ4GmctcsXNyq2qanLy3uKTaWN7wzFyWjfbon4LDngMXzfPCF6Ycvye1L1",
  "key20": "4C7ZkGkXc9BeBGMyurpJffRHrjwcBDkSiXFgVp9coKzH4Kc9rY6ZRqGaQXMGM3uzMCpis7X8s32h3VPWd4PgEm4H",
  "key21": "yn5WiMUips1UW3fKz6PJhT9rZr1DU2DXCsDwV7itdGp64BzSHHmv7zKYX2F1rkPdx7Cwn8T8Qm1z1wopff4YGpp",
  "key22": "4e5sf13M8aw8fDbv5bgvMeNJuLfpPs52PbWSHnsgddcKZwW5D7UkKcZNHNP3MQH86YoR6wDoCwFJds1FeqgGJofg",
  "key23": "3kP71HPAgBwnK1svLfSgiQbHjG12yZ9K23q4q4m15uC8SpqEjvLbnoLMMPWBmkrBQxdnV2N3GcSJ9Akjs4yw1vMk",
  "key24": "2bdgGXgR7mFwEKwQ7eziaXzXngRCuxUgX7cJ5BLt56fpSBvGVCgK6aGyymchMeZCdcRB4zckqg1gAtr8xWkyoTRa",
  "key25": "3adtL35g8VW15Gq7B5AXEbV981NuWvau8GcmTEVAibQUZACPDyPQuMb5qrEsAfAkZ3J9xqLenF5Me64sUx25tRHF",
  "key26": "4L2JC24qYpmGPRpArf4qTMAFSzZUtZtscbQ4RfdafYNdye9QMGV4ffyYYpbqTThBbhsGbMLEYPbQJeUuNHyQ4i8M",
  "key27": "5xzFQN6b8wuHdvLMxfpnQc4yAkmpxRQDMjv7UK6WeDEA5Cmj7Zr1ZnhXSpA6arCgWgg2cVJFv7pU6sruozV4DZpK",
  "key28": "3WpxBGKXvTAzgS784jbqfSBtSJkw9tgHARcAnZ47zWk2NY8vynspiXKaWPbP5QAPhsiV5nxGZnz2au3uYa6bCh5Y",
  "key29": "5iimm2ryxCD6Ca23wrpeFPmgVZnmiYCSuhsJ3N7Qe1c5ap8inbWKgCdMUzYEL2eN6RGBeqvCR51hTmUpTaPJezDW"
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
