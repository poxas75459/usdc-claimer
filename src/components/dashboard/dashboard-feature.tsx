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
    "35HjwfS3bu3nFU5GJFyq1mgmpM7zX1hnRw5J4r6RsiWwaTxHHYXR29Di8qJboB8M8NafLbTznPcMuaWgreVbqPRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KctBusNQEb7QTzW2qSV1nDNrZNvTi75aeFF2VU5x1x4mTCf9iKs5u8sRzn6GcQki8vAD7NCejNeK2aJNfuBhrRH",
  "key1": "5fd873bMjv42dn9JMoFtyVAzUU4J6LHBVqAwvcT3kehCqAD4g2PvewEpGowY3Bca5J6Cijv6csfriNpbMKQBo9GV",
  "key2": "2YRjdE9aKCgRfvkiu5Nm8DmLC8WURhH7fRBzqhg1xhkFcq4jqk32UsNkScjCsXzQhJ3GeqsvseWEvfretJ3WXf97",
  "key3": "5obmVPeHpSmvkLwWtfAdeThwL8Np7MKCsXigZBcpnWKV3szELDhGcN1FV8n4KBY6BvPaA7PWBAxbLPBGn82ejYJd",
  "key4": "2dH5rc6BXAwLsTa7X8KpBk8YuG6H4hG3V7gTcpR2EqDjotZZ29ZobSCNW1MLBfBDY8V9GfmgXnuyB252sf5ixqLw",
  "key5": "2HXb6pF8MPKihA1i4BtvXkY5e5siWC3XUcMF81c8ADMugV1CjhKK2K2Rnk9Cu9CBnvpKcX6gpYELZ4FqyVpQoS8b",
  "key6": "uJcoVR3oxSTpeQp84hWSu8rVpicEaWmgsroKptQGfgmH8uLNFbPP2GFVjb6ckYDVnryFGtTcELtkafKvWcqYJ4T",
  "key7": "2xkkiydVtj8PbfBTaiaPEdnmDodHSFUJH3wx4KjehzuSqvykR9ScBKbLUYE93KwEprZWMZkYnEufSLo5tN8g4vcd",
  "key8": "4NjJThvr4chfNypvGpaiPKfdJfX3Ru2iUYcobvYL56FTmizFPzdTrCci2ATXyT4JhtWBt4gAR8x8Q5GTb1tVAMA3",
  "key9": "2AnvUkJKHrbSjmgYrbjcSAWGeFoFgGYvEwJgEHequs9hYbNBaNHeoaayxQS1NjA331PjnPpzGdvt9cPzN4CjiWx3",
  "key10": "5yr5ZAxMiqEK2fAWqmEmNeQXTX18uUafWovc7YQtdEN6BGEzbrRcbvCi959FS7ek5MFZ4jRuGgEAdW8Sy4dJMujn",
  "key11": "5Pjtni1tJpArSWpZ9qNMW5UPRMereW2mbKCNqbG1ShQppDFUP4rnfsciKU82HzseUY3mxU8ejwi8L9XTgn38WLGr",
  "key12": "r87PxSVEnuX1Ar34dWdYKjMmeqEnRzKY21hmcnTttA97ctzyPWqJGFhjbg6ddNCudwNtWkpQvAJ7qNWB9XgeeKj",
  "key13": "5qhcWqpGCgRw6b9a1YnR7t5ZTjFen4R6wDXxKeJwNQwbt1PQKPKfUDsoY14VzxEVaGvGDmR7Qy48ESJzwM2FaYTj",
  "key14": "3amz4dvXo9wSVJJxLjuSTeDLwDWVGLJuK6vbtVJvMwRpERDEtooMUKxZFNM33cQU3hzuxhB1iKBuMujEfiuAamrc",
  "key15": "3941jkmJpQzkhM7zV64Vednay7sUudv2uoQzNuapLP4GNSSUQydhSVFMXBPmpxdorWpzeLxB4Hz12d9m1wgg3ScN",
  "key16": "4NqhqRyFPrTYZGhtqteDRYAjX1eo7soiPQDSH1fFLQLdvn1Rr2uoXrB1LDUSRJvUgbRX3shinbKyGjzygYeByTx",
  "key17": "12vYSJFLMTYYyUMqeKitjft8JShiP7nWkvRziDcdFFdEz55g6tLBefLSseisDUVKQw8cx9qx76FpwnYmKRxny8C",
  "key18": "45yPmiuioG4a23XZJHqvqTnVkSwsEUFajwxmFWZh87B2wnJdDqcs3TjPZCALUCPTjh2Bn1WDuAVeje71KbyVzyWs",
  "key19": "5n67vQwxRzMrG4HQzcDNArtpKjmzHHNA9eKLcM83U4Q1E3FnUgoFjS1VRbUDeuk93etNcxVoJbCwBJDYLCZLQ7BQ",
  "key20": "4udXQ6S4rvFTCBZw3pqsKvP76BrDSEQScguwexCQqzUdYNFNmCi9T399HitYAi2VugXwkF9G5Z6rJDE5dUZjbbt9",
  "key21": "2VJTaQuXE7wLJXBurfupmREo2o6hcCAJobfziNYKwZfneuKEXnirtV9QaKs1k92asGjN1FL2gNMsGX4QDjiAGxMV",
  "key22": "4SK5PyFGWvobRU5NHdUawoBQ9wApBDT3FDii8D2fNBgJhJSGf2B3CxDYAC4XhWGZNjsQfcvtu74yc9nFcEpSsC6b",
  "key23": "PAVyHA9HmkQN9miQwUSDPcE6xZoZ67ewaHqDqbc6cm6xU9UBbb6u3mFHWMBECAn7o4cNB8DJrEjHriMuxYQDYkp",
  "key24": "33t1ScYp1EeRpfNyR5dxfQjEmjh5jGiXe6F6cdh9dY1cFXUSBn3cGEpWwUUUWZr8uc2X84TCb8aVbAY4BR5Mg8xP",
  "key25": "3aZ5VkNzAthhLxQhrWTnyVUsLwaG28ARfpPxuC9QC58YATD8C5XsvkMCeDyeGif4AyDFueu9PVxqiPN1ZGz3Y8no",
  "key26": "34nzWtsRbzVACAFmHPDdre7rZNaVaD3WwEo9DJQcgb2PmpA9Z9Bxo8fVuUMjgsRpasrZscoKSbPtxYYTnwj6uKTk",
  "key27": "2WevhUzTA3y4J3LZMN8radjFCYPURec7VrQLegjuSS4NS672ULZozopa2Q7o6afUttAho67AzXTy58AkKBWek4yA",
  "key28": "5F8KRK1v9UCTz5VuCQ67jKmhWhRtvUrbeRRyyKnjUcgXSiRQ9f2quLMHHmy9qt5Ahg9AL2AvvaSiMe9bU4BCXDhV",
  "key29": "ZDff29yLM4J1Gz9E6JW62g8HXJgsBMdrpGbHx5WGNB5HpKmhnTnix6a5zfVTnqZXUAnNczxcDmwifNmfmsd586J",
  "key30": "32X5cU5gitDhBGy126hdufqfZFf4oUhSXh4rZuv6wPYW894xQF6oEn4Sg9ZH8XJWj4mvMotgGHbeWVbgzwuqDyfy",
  "key31": "5GNoyAfFJae2aX4y3LPSuFWD9FRkuo2uhXQZfF94d8BpaTic5NXNx997jsHvBrv14ZWFb2uGoyBXM8nkV9qFm5b3"
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
