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
    "5Te87ZwjfjwiV6j24nn6mVEEzE4C6Z4c4FARkJD2U74iD6J9H9ejWmGUn6DKUSBDVpXpDDLoWAFxdWi6aTevFCWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nnYruocWJTFniZaGpHCKj2VJuZsjfKnnsE6x1iaASirURcMhW5juowmoJqnnsY8zAtUtH5C7txJwT7uo6cQBYH1",
  "key1": "u3v6cAQjBXKTJYbvhT7MFijyJodXcPJ44h6C5WQJTpLv9wj9CtYhssbWF5aNLRTZScWGdUHQHCZ6zkAmjbG4AYS",
  "key2": "Wo6ycKhZnYX3UcCrjPDdmk9SbowGC1f3dmr8hjPXrSxC9bxEBuLoyF68c94v8HHamdTzHkkDVvUANCDahfJRfRj",
  "key3": "3yw3TvEKBHNrinGbCejo6N5k3mGE27M4gV1BswutewfYr8FN76QKW1iiZKw3nf72mLn3iBuxi9yLWkARrmsETU7Z",
  "key4": "3ChjEvEw3QhiMdGu3wq7SrYurvUfxBiHcKg3KVmKJQkop8HckRkVvv9dV4e6Dmbc9YtMTh6nmQ2FDwHxqdpqqisR",
  "key5": "4w8ufiBpSy8EfpXcca5YwLayqC7FJywrhkrXbE6t2ZBkj1mYppLufAGrx7C9oH8VYJ6j7Wj6wHKTA9DJEqXxKjnw",
  "key6": "3Wd91pNYkCj4kNwf4w3GRmGg8Zv61hWN6Vxuj8cNFmG9Uq2DVyPH953DNz3x1cGmxdUiHmjvstiWbGCr4vtorkdX",
  "key7": "3HX3mVoW2rj9EcX6eZyCbFaKvY7CiAQVRywnx6iaK8n7JgDYkz9uNx664zADUbJ8cHApcypv7Vys5Wve1DwQTEXE",
  "key8": "zRZSinpfLqaxZ1i16pmFiMD3E3JtvHyAXvd1QpDZoU8s3dF6TBCqiNB4nzC1o4Vqkboyan7Np3KebHKcsjbaSTf",
  "key9": "2GfLLbnMDHdXhZPEmF8VVzkr3RhhuuPrDpAMgtrJcQPNWDW7A5JanUk97Qjb14gRan91deoQnLW27ByDyi86aCB3",
  "key10": "t15GCtt6TxcdxQ4FDKh1hqAfm7Vq9MRhDYEmtpmk8oV9Ead9ajYMHaqm8SYvQLqCRHyErC89Bs5WxziCaj54xsq",
  "key11": "4m9apueY7DTy59eSxAoQ5bUsn1k5m4a3AaMMAgWuSQB1De4H5MoFt3YnyvZ7j6eT7oCoyMmcMKk1tL3V19vms7AC",
  "key12": "4Qg6uugUZGtjxCKB1TDXC1VeKPfwGAS6iRbme3MwaQHeZfMdbjqJiwmfAG4dpBXqsUwA92XD7wdXdnAHZjh3oek3",
  "key13": "5T3npMG7KWkuvkDJGQ3N9JKp8hy9PNQh9FpXEe2DQwGpTTQwCaJ2Mu1tfdRzoeBAfUQ71XhBAi9YYD7hEDMUkEUC",
  "key14": "4bazBADLqs6Rz6xBFLpL3V2YdsPQCL13tidk8ihSshPmB4ZPYwWp6otdkTfH9U6G4qyAXuXCeT6woi9Ga38tGoSc",
  "key15": "5ncg8y2D5q3CqYCgpnKLDEvcvHoYy8cDVJuFDurcYJ4QuNxfpqXx2CVcsBMxEycyyhKfSZkjvVDGi7YWWeoBZ2DE",
  "key16": "5b5vhC3tjE2Hu6rA5EoqHR91oMRvZFLbiSAToJnSLN67w4UfiTUE82wzwFg1UiE9wPkEVJWg8FhTXfqz3mWvjG7",
  "key17": "25NU21EYbn7k4fZ8CrSEoVsCiD4Z2WKdhop7N2XEPmFxkq87DFfU9pdcj6tX4XNtoDPP8cWBGaLmz7Vc4W4kPK6b",
  "key18": "2CT2hh6v66G5nhKZGY4UoXDtpwc8FxvWPnY5KuuPuCHUBKY4u2ENL6MTzxWw4oFxe7bXLq9dpDGgw8GkzdVcuDkn",
  "key19": "4MEsnCeYPrtcnDrjwtsk5hB7xXTk8ueApFdQX9cUuxobZycJWkbGoKZLia7Zb8RHBr18Tx3yLGCxgo3PGHgeebno",
  "key20": "4wp4DCyvDbnxEX8NRaBHbh2rgspBaRypZ6Vr6n2QM8q9ve82JBdBrHd5ngVF1QtimpzUcjH4KAx8Xy9tsNM5ameL",
  "key21": "4EGNV9RXdeRugZQUzdr7nW5PUJo8pW2Nf3L5Kb5H283mpRJyPexbtxEWaaMRY657SVcehTQrbkCCJDHZTvR6qnYN",
  "key22": "ZnFYMKvheqNzrR6wHCV5VCGg2XaQWTJd1mvWFcjsRLNE7ig6XkFf7HZeGWgZNB48N9rBskPzVMcYn9zg5UNE6ZV",
  "key23": "4Ns6upXxhkRycWEmNRcKQ3wiNTLsdWhdP4ovLsamecAxPRXpA55em7wXBn3xHXZiKqa8CB3hAK2rvTKpQC1cMjpV",
  "key24": "2R9sKLP1JmGkpV9cB65wMi1dDUyKFVsoYV7ZtvHTvxF6VTTzMoRyGMhjyVdawaz48R714dpchup6aWW6LCUtKvor",
  "key25": "5bN6yWMm3zZS8hsBj3XMENhLiS9hpznBEQ7a1bKbwbmq58e81ixkrh6FFGLwxTr5hDaXkQrhrC1YyXzbHU3L7XW8",
  "key26": "jW53LrzmDx87YZoxsPH8WTaZxPGyi1Xdc23jRRSUrFZLXzXC9rWJPhYj7qh2UbEcufETLyaBkmAJSXoK6sKY21i",
  "key27": "65b5edKyRSF7t8F5R3JQJCrYjjpTGdmDmsD2xmXhvvPEzeJus6szE3xrJ8SgYPZh8u2PFaMQeTLCsoT1hGguBjuW",
  "key28": "3fDHB3ZYG5sPsVgjH7GrBWHJFiXW9f8Yw1LkeHPKNRPRpyd52qfWH3JsE5RhDut81yV6TPppEP1v469TQsa4iBAe"
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
