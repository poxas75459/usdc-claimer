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
    "4HzzmU1vMpbv1VrWaBkH4PzXtJomfSHUYVxxwWoT1kcmHtqqoMjNAC4PNUvJVhEkkLPw1or6FwV5QzthisceskhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "527hzoEeHdL24eHvxFhH6VJnUMD9WyYnq2YwLcPjzVZ14qWem2U6qxEftzW1XjK1ivzGWCQPArfoyfQBi7a1inFp",
  "key1": "5YLJEqkqJwqMrTqgC3STMTGSkcgpu7gmJ5dYUu3vXM95xApxU4kBL6Y5J4kg6gKZSSbE3XuMZPyVzMfrLgGwk7oE",
  "key2": "n9T1bqJvkroJhMZag1MSrbWbgRN9vHHdSm79CrHMf5tzMDvnyBbMmUbqaKPVQjgK8U4XMExjzVs4j1PTyLGSe4q",
  "key3": "3gcYjtj83kW2xRfpUTtsPYg6dPrXhCdn3t3eMEXA98LZsMuKtn9MmEy1nwfGGf4tistvQsAqtdGrJX8d2xnCEf2e",
  "key4": "5swqKBJo8UPCEgSeHqWSCNEPth5Nea1uvk1TVFo2nxxQPzx435QnJB453rNwPvFwm7CavYXsRnBf4QBoTwVG6bZD",
  "key5": "cuX1ouA24TTFbkW3TvJVyvQpunhcD4sbr3WzyuYtYVsgGxrSfyUW9HZwkaNr9D4zZyX4TCXFf6yUctTtEz4VpNU",
  "key6": "21o81PeQe63YyBY9fYoJy9XHMWYEn5BMGfdiH6sA26DZRZTBYZvkWwSPgHzCAcowkJ43sNK2yMTaM1ZJE9ejELsw",
  "key7": "6JYUwP149p7KwqQTPQQHWRJGMS4bm6xFeDstUDqtMWrG6H1vCR2XNzcFpyNHanEocTF4MCwef5rg78BWuXDh1T5",
  "key8": "5Fpc7ag4TP6KyronamihijbpBMqRcmJ9D2Pug5WRhcxMtM4UHG44Zz3oYnfNfLU9azmhAmB1Mk2SLJt1bugG8Ze1",
  "key9": "YYUepXn7gHHuWLYQwtXHrUvk5MVDmdcgcjQvsgdxjaqMeTERFqCYTc5954FLMjtyXxhGNjPhaYmVWfpWhqn5gQf",
  "key10": "41aViAVnLkDgafKHVoHLknhfRFGf7PtdwZ1CvRxfrzAYKA51BcGdw4Yx8N1HviMUFetEXaaQoMJBpxYN6vw5cAdA",
  "key11": "2TLSKcxLupDsMcuXmh3XaHkCScfon3B4gMGLXV4d7etH7o7nxqrXbDbAegabZXC6emx1d1i65n43iGiv9TAyDK9j",
  "key12": "67HrMQt2Ru2jZatoVWEgVYjtwLS7FM2nWgMzbsJN9E5uXZiidebnwmC9LPHzwcXYTttP1sSkJaHxb77E94BUhwuP",
  "key13": "B5fCeYw5CoTNQti14neiC1PvSBoyqruUusVAwoZgSxN7JUKgc3JhWBc4c6UhGiqwbswH6BPGZaUpQHtZVS3fYxq",
  "key14": "64ZZipYvi2skzMtiNGaTVLcJcSHwK6QcviXFKHYuJaXmJmpa24yQnnRwZEz94e7emyXac6NyQv961Ygy2sPcL7xp",
  "key15": "7M22TaJfmQr9nfdZuJ8Z95F7Kihx8dCs115EBgK53gGhWEg8iTFJ3gEuqzj4zL2T8o7QqVYmbNmQkpqQgdL5t5M",
  "key16": "4SDLmEVCG7WfRuorQZ6YAWbx1tH82yBd8vQGS2FajfMrFMnQMJvEKtc2qoTdzQYBBcmwwEY9YFMtt8gYvuCe1jz",
  "key17": "3uEwduy69D3AN2Y8MR2WfMsvkuNcWoWkE6JtSzAMsSWKAAS44xo26C4br2DZg4qDMtj4KsfZUfijsstbXryVSJfZ",
  "key18": "4uzYhzQEvi4RnmQ2AZjmWFT9LP4mdmdQNTrZbQDq6KFEsSactUt2Q167t4EEgL4NpyLa53JJhGVry7Eqph5o179h",
  "key19": "hV5A3k22WyXETM2bWxU3xhZFgAwRtNbcwJvHANQ8sHNegVnjEVD1Zr8HtvaFCEBBxZYhrbpsFuz5dBJBZTw7m9r",
  "key20": "xaEDuy9DNwZx9VLKy9jc91P1eusu2UVvE1ywp9AkvZJCqKp6zkjwSQBrCcubDqfdS6gvKkyjPv5NA4dWjE63M1a",
  "key21": "5Do9Bq6cGniB48jwSBCq5qjZqdZnnwmbBzGJhQJvmYgbucMxDXeMqSR9TqTDHbuEt8ZsTRDySskaQqw3M4wmbtFa",
  "key22": "fUV43sDwXVZtMWNCXrpVyS2bQo6wpge8PmA4mnQ75PpDDkou89Ljkczrk1HkJd2AtxRG7kPZEznAyYmmjjbPGS5",
  "key23": "5TVhjj8SXzUU9CY4KeKa74F7j4oT4mCyS4WJoNNzDiDXfYTB8hFKumdrhKEaYpVXPSGchp8a5AK7zCBV4ocY1GQY",
  "key24": "3gBxG9kURu8WhqW1y3cvzj4cGokXutcAUbykK2JkFVVCNzYyF5QFdntwXBfndsu7L2AYWm5xUQNatrEMk7kGJsAg",
  "key25": "Y39QSm7qkAhHKp3ZFdq8zFMWPg6RzXEygKQnpmMWqYcoLFbPdFUQ9Y7dWjgKwLeaN4pfSMaUTSbwdC6gnPs4UdE",
  "key26": "45k4HkYoGzqRMTJgaZxrmBW3iguxxtbbP2yvh2cARkMnSGYqxZrw2UCPkhooP1dKuUvUkkT24gZBsDdJocHz7XBz",
  "key27": "4p9QNTU1MtEi88CdEQSgtheUKTryYY5AvjLUNbpRBd6eK6fhVy2TgatnW7j8UXfSHa6dktbhq3QJ5VRxJmLXphJ5",
  "key28": "iQRL9NM2fw5MyGXGsq2oS3iTjwktYjnTgyDaCsTsrug8yjXBdAzdpC325x1BfWMBrNqG9c891FP8rK4UhV2zbY7",
  "key29": "27MZyopXhdYJPpixYPrrQk951gqEAxRiHqdP4gBCHqnjpJUxzLMWtWnygd3PL3HVYQZt1PP3aE1REaVZWQwWvrZ1",
  "key30": "2quQc3ersnztC9T9r2FkWv9PhyH3fkeNNJNcjBJtQcebgPTWTTXNHDdnfbr6sZoaR2anRm1Ci4wZ7dMidxtjbK39"
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
