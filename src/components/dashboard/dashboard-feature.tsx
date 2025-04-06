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
    "5bpSxXzbtM7uNZtyhMaKuzcgvG6ZRrrKt91qmxRWFh2ipnRdQGnuVbfbHEgLJoeoQJQB9VbSaXbkCWrzPaSzEvGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dmcQG9GMDKEtbuf2qUNjdhLckWTzWDCwwY9cXYa5fkHpBYYgeBHKnhvtRjkmyudELW1JbeP3jLb1eKHbZgXyz2v",
  "key1": "3DXin73qfS2UdRJxaTUZWPpZAfZpbWVj42QMfCLTxG4T2hYzNWnZaqAXJ53mKvBM7MBPyJvHLsd2KZUjQPZphuM9",
  "key2": "5WNWKVFUBBR4V1uhfJDtWQtd73ADEpZZWMZXsNNLRK1UbXgwdNvuNPH15KfRjEFEhbgAENBAMYFkjfBkwpXaet5M",
  "key3": "FbGPu6KbzTpoVhcD2PBmXcXfp5sb4QQqXSTDpJmHeQMWs8iqYCZxpQD5RQaJcdFG6AFpodHHnHrva37SCdVuknk",
  "key4": "2v6qtT86VRM1T5uTAPK2pxtQBQMgE2qaoJoEqqgS7pECfNwgt3C54XBfE7EJu7F96PWWV8nsXeSGrWg1F3oViDLZ",
  "key5": "3aNimVyT5jksaKsvfVYRBC4xPNNt3cFY7gJApDKPY3WAw6FKiLesgWWS92BFxt5QAEwaYmo2Y7ryDiTs4BG5DrTS",
  "key6": "5r3ray2iHvMxeQQCREMENSuWJDxPuUUzJCKYZLnMJp8aURjxP8RZfcwXMHSLpoxxBTS3U8rQZ2mBHpEFHjYGSvNg",
  "key7": "5xQeQp63kY8h32C4HoiNHxkuRHB7eSwqJn8GRtTvfNG5k346uetoF4iABgUgeTCNE4aBC3bnG1nBFG6Yw5qDX3Zr",
  "key8": "3v1Jj1WusAU7sdn98YEwP8UxLZ2jPUZFmcaFaz1HdDwB1yrEgyoSLfTF2wqgZz4zGSurmdbnZYHPSRytXstMhy6e",
  "key9": "PGQk5JuG6j8mW21QBznjvuURPyGuNPnafMKoTu2sPxG2DmhXSbLB9tybuYyUXuXgCsgAzStwcB2MPrL4c5616Re",
  "key10": "2q4CUq2nirpUSJxNBjTgofKk55MNmpDLQRvEMbxqKVHNQZBnkESWejSvpAv4eyvRCks3QRRYPiH6Fbk5gi2XeGt6",
  "key11": "66yg5hFzzNkao72jN5G6YCVLHJnP5iogwvQ6okzdwuFgQ6zff4MDSkmucsBwdgw6DFmTJxWaSYAU4aKojyHfSHHJ",
  "key12": "3PmmBjjg5qTisH3Mu6CcxRpNEKXGeyX4SU8g8rRgXTugHQQKN3iLuAVBt27rRggpTce8bRrvAT8c5p5FnbyAtoA9",
  "key13": "3etTnHkhKz966LW5aQvjLVeG8TgosYHKcv1G35WkjgtEb2AZF9Pxm2J3bqdFDuBrFD48udKe9dSiAb1tVW4k3JoX",
  "key14": "ZQu5J1DazQ4fkK67JjPUEMH7SXEBNc8vPPPYvAdFnmSkrntjFuVgJbRB1tWZuV8TXc4u1TX4RPHpn2Y59sL6RnT",
  "key15": "4MsyQDrxoYnRgmDSUBJKyMrUiNoVaKBd5xzZ9gsvNpAtzasGCZh9pK5MvCCcchGckzuJxAJExua35e73aygiFW4t",
  "key16": "4B8NqdMrFmUKYh2ksyqkzwaQaWKKtd7hMagagqBmiouuffVJsgmFcTCntM1qHPRPNQxdi6VaFj6aoC1gg3EbLDkt",
  "key17": "2HHfcy3Fpq2nEpYxCQ7ANz9sCwdbZQPj5riGib39Za4RhVoDNfgc51aHGSNrDA4nnqQfGR27WAh7uwL9Mx5AzBPU",
  "key18": "5UCxkRv3Sy2WZ2ngTHrMJ8tVpfykF5CzyUkWi8vaZ3eC8p7YhKTRyUeufWEFhmXTj3Hxr1Rzw9RbxhpmXfNQu6Sp",
  "key19": "3pqBbEUWG6S9449VUUbtYRGZuS3jUbKTJ1d25vr2B6Zw8hYPfRQbLZJ15ht1GJjTmNtANiRsuvKvDAnrkiJAjsMt",
  "key20": "2uKQmK9NQnudg24N8DHHbpZfDXjJFq6rzbiHc3n7DDH68mZiHEwtpZ1W8rdAjrMCG2of9E413gWLGA6q1gFhc2BT",
  "key21": "5uEFUDB7kDSVVLG874kpgug7VmnbLc3XguHrjdmGU5rCkSGHWU6yZDokHs9rccTco9LxPsREAgUPuYU3sHETzymG",
  "key22": "3eRY2VYHFKvwMJqkumGjCX1sPu1XPABwDTbmimxVxyKwWJnyWStFPcGq2WYWxUji2Ud4dwLeu3ZEE3TMmyxuvAvy",
  "key23": "5rJL1z8KAavRxtVvgfPJuheqxp88AFpELgp5qXGBKYS6QhQvoLnfg35MW7mgNNVgewp74VEp2BDa6uVwTj4qQdmD",
  "key24": "5ZuYYvfafGtazwQE8GAG7v7WueLxLCAgkVAN7mCinRRgoz9Qq3E7pYsj8epQjpyNBpNwarCb53tS3ha6884GBhLR",
  "key25": "21KxgFJjQ1JAeuvRhMoLnCeMAd1MVWYQd7uq4fj4TpR1CyTA5HBbHtgSzjXeuom85ocpVbx87qz5r8Y2dbUMjeNL",
  "key26": "3QB6SQjvyRaS3MusFeCAv8NJWs5EC1u78b1YmvWUnfpyaZFvSNUjGu7QKFfQ57msRAJLQxj2eAFhFomf7m7JFz5Y",
  "key27": "4EXD6zzVhmWZzdCU7xuAwHNKp11VXnXmdoxpVk7ixaB25CGZo1LuHm3jQ1tcbpCrDsJrcb1cPf7p95BpXy93XjHs",
  "key28": "sXn5uj75kXnLhZNh7dU5BQ7qWKYW9febR5bygU98bfXZyBtSsK5CncAXghw4CcbvPVwx93JPi6eo9mbVpbm1LqD",
  "key29": "2aDSK4uafDTZkxNMYp46VMAaRA8ZdFv25VjBe33vGNfw9ujSUTJQwTfftg9HXV3pWDgY8srpX7jki2YMRoF2Gdq4",
  "key30": "5AhPnfgRL1xYaGU5oj6cjc1Sdhz8zWm6QAi227uPUzDmopcAXTuXRxyHzi7K5ZhqNefFQjq43Vir2vGcwLKZpeTd",
  "key31": "wHAjEx5UfLHpBe6Hn5fvoJEnL8PCttrqR517yJmsis9kAid4Mbi819SJsysBB1aUbJvraLhke8amWy7K7mubWby",
  "key32": "3yiagnJGrEaVqS9YPSBjbRTe6iTZ8geZCHGwN7TjN6xvA9kgYmS3V4zTERy5JZv7EYXjjZNiN8d1CZANRey1CESt",
  "key33": "4XakYjWLbbMoAzYbBNgzp2KzbGZcPbVYcwLCmZDgcW7NpbhpAfzpuMbZ3cc33Hu6puLeRxDd4XashyZ2UGtAfczu",
  "key34": "4ooXh6qx2McnDgodvx1YK1dVYgkEYSKKXKANa3TENGRpysNvmMKrdfA7H2EcmigUai11zWTTqSBzbfrdx5LGWqJK",
  "key35": "61yrfLonVUdZ8xQQtXjjM3g5DjkrQuEuK7aL5XKWUfRTEP3pjRJdEmQHW8RQGEVR7HtW45yai3dkxZZ9tAeFjZ9q",
  "key36": "63PtuW5KVfprqMavjPvPvNNYrVJZMARWedpoJuCmbZ71yGJVNXFitUtViz1Qn71WmR269qubks6pmJ6Q4FuEtngG",
  "key37": "2uUsNLPr5UF765YYmmZUSXzmNJTMLjAnVN8tWsHmnuVxdpK9hUhKzbegBCvd9CS4nzsJcFRqbP4XCF125tWYFG1F",
  "key38": "xQFnVEtW7SCKoeisJo5i5q2RXWaFNzZazGWeCSXwJjmE2DbEdQSYNuehkjG3Gqr6uLPeBS7umPuecTRKZd2YakQ",
  "key39": "2AcACnhUC4ipKhMAmRWv469sZ9JMdugt46DzHrvLtsJMTz9SPqD2rFRXMBWP2aWixjYCAbjn6EChUt5XDBwp7huY",
  "key40": "BkN5c5uFNkev7uLVPRDACP1nsiEF3BK4pLmFHPjxUyK3sb65jTmcvKyffuAmxpVStMsKGt8jqg4oCKiuvURXRVh"
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
