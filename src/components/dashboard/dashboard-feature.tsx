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
    "2wW2Bc7W12XUqMHJdv7K4smuGddVakcbj3cz49dwEJatGxsRquSXuAMKbwRfXUoiosPu1suPAjEQFmYoRpSfe3vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AttkH9vquY6aTywrUZC8C4VnWZAeBBGb7DsGbSf9aYGWJNwmHV4Ct9nJdcgvjoLGa3BACmdFhuPafRCrjDBGx4A",
  "key1": "3Eghio3aT1p58wwFchc2UyeFMY7N5xBDW9HNMRfeh6UTbjVvdPc6aHLmNTEr1xP36TW5xgqXYV8ZZkhAU6gefiZC",
  "key2": "3tqJzm6ymLXFfLdy3bJQe4FxTc3hnQ94e4E2PrMinEu7FpfAp7FMFCv6sjWhQKgmejhdSj8NEhoj6MKapxhgSKXZ",
  "key3": "3AEMuLzEcqDj4hiPvuvsZkBygP5RyeY833gcZ46SqV9e1Pe4e9ofzhhyMjQQvYBPKdie54GeESLbcC33Bdv9yULb",
  "key4": "5T9gxzsRLfZoVP2bAgW8yLUYzFG6i2Cqu19rmMD1KBwNimX2PVNkUMuVxYtbrvfBQJnG84792PEyXVGHjTUTmzSG",
  "key5": "4omjrB9ZZzbMQsab33zpx2RDpg1h4mxGowvSYwmTpCrG5wsNCQE17oJE1hsNNd8b6S8NAEYgm1eAFWnJmKrmrHHQ",
  "key6": "5cxn1wWDF9D8qXhJnFQpCdc9r8PJoUBWYyS95BoYoZbvptBPvNheE9vroAL97UYcstkKCPF9iC8fmysxstAocjDc",
  "key7": "3G953GdvkL9Ynw69sMoyYLMHf7n2zce2EuVGL7rUCZABSuZ6TahtPXFp91PBUWfsvVidSChAnWT4fNpWfngNGZCn",
  "key8": "5gqV4PyihFye49pwVvJzWFLrHjvKnE2YJ6eb19bZiZRphYAb5nSHYvwUacwAT5BmCw1NGbKUVHBqwyotQJSmuAxu",
  "key9": "r2fpnw7noGuDbeZeDVmKhux7XDG4tHRJFVJ5gnn6wJs7R8jC4qDv2SUKr3BKjQzRQL2fvKFUs77jCbEpc6jCxBX",
  "key10": "4NRp7dxkfLYmi4EWBN8piLnsQjv9ZiFfWA756immL2BXZzr4WAa7N3cNWuXBs85SrQsnHo9Q5FRPx6gokuZunLN",
  "key11": "2KV7dgiwVGhjwEzkL5jSXSYwE8t5eo6rWF4K7YWKoMZwpxYtmshLAHh2HjUkuZnekezrxb1TwW1iiPYm9CkcWig",
  "key12": "5SruD89GwfSo8GGAy4UtwwGTL4KfJfwQJ8zoWb35NGtKoDRiBHvNVjiW7MrYnX9FGFiykz1suhui4oAytmPMSBXc",
  "key13": "3qe5vUi9EdLWywwVNHyhb3AG5h5zWWpKhtdq8oAiFGhbGm64PYCwb4vyqKNp6Vgv73BgikWoGtvKy3rtmcRACGva",
  "key14": "w5pJna5DBfeT3w5qCaKaVkDMpmFLMU35ZrSFaCB5idTq6GKV2a8hqQwkVZiEUNeE2gqNLRsCcwENv17QHRaSnz8",
  "key15": "2wK3ygKAHmVeFWvdLLtRDUSiuZRvmeV59h82u9TTP6a3pQmF4frYWXqEBnYYFNbqvwQjncuttz8Zg3CHk6PYZHPr",
  "key16": "5JxVpNBwaN83T8t7dHy4YhYWHwuMuMiyZoWmxCiL25M4qk4G74VAqjBVvsvNNj62rG3ooYYJ2K4kk1iNJAitwrum",
  "key17": "sqVYWkxkYNUZw749NXncQrHoSheb2j8e6Yp1PcaGC3cw3BJPf3Apa9B1DWeYcs5Ampmos2JmwiyPgdX27JKbKdm",
  "key18": "jC6BR9e5QQkryyZMfUcXMfPdFHQA9tAL2KdkzicvPbTZk48i2yndoWY9VkcJsT4EsT5LiHyQB3Shvr6qZADMyNp",
  "key19": "5CsvJ9y49XHZ61QwRSP7PKkzJmtpFkFXHxLPZcUPoiUc9wc7P95GNZcuAsZf8hZjADXTbtSRCeJQuVbBFa25rPmg",
  "key20": "23yH5yVK7nsiXuWR5BwMwKAVqfPQbUaaZMRKLDd4MvX6LcPiNwBff7ovsxucHsXnW26fb4NgKDaRZCurarSWoERt",
  "key21": "45XMCCtv2PHMgqg9tT7vq6AxWWtzkiDsjRuXCufp6iug2dVooAo7EyfztPyCd52AWAQsptd278Uyh7QZ8fxymqLE",
  "key22": "4UNoMCadc8gX5nEyNtHn7C3C1DxATZ5GaeVKJtQhNnVKkZe5Z9So5X8tk7t2ZAKZwPNL2fqwp4eMjSgHaMKHk4pm",
  "key23": "4S7UvYP3YKrmu9PbihXJvArb8Y3RyEKEaBcYEPVD55SLJu2UvHnbUZ3TnXAdu4YmPPoWUBdeipGMZDRh6nJczA3Y",
  "key24": "4SKPx5kVa4h4NsLMY2BV3Jji5FqUHN4RAW3sSCVjw6y8ZovZN2yNG5bNba3mcwDu52nmCiWm581xpXFa1RRJRqeq",
  "key25": "54dNSpf6VATVY5j7EcCrnzAVMeojYunzSGa4Hv7hxgM35tTH3kAk8HavRFPKZfrWfzTxhLCxEcRNGQxsGT2MVjYg",
  "key26": "5geUvsrvCA8UM4QkVtdFZks2rK7Y5LwbDH7MZwmCUQf8J7E78fBAJHPqVP4vS4S9gHB7j7kEcuxoEcqFhSQzMmhu",
  "key27": "3jWgkepnub6Uq4TE7r8od8fha3Q1NDXpRbgwHZS8etnZ8e5SxBGAuipgo6hCzNotsLhU1pDG8m3uk5RPAFnuWzuy"
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
