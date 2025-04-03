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
    "5XSLS1JSn92RWheozBuyYJEjNATiPJWrmMxP3heaVDc1W7ZsQptiKbqf8dcTWqEUASMcVMHGm9iNMzRVyFPQtqz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmTZiJtvgECu3aDC3XiNox4wL4C5jaKW2n2zJuxKkPvWkMkuMqaTxfxAg8WDpkFrdFTJdpbKzNYn5frMdx4UjW8",
  "key1": "4ifZGtvV48ZBGi1KTHNXi9X3K3qVSL3Ys1zj9WfpT5YVo5QfkUnjPJpjNHjnXNFZHwikD3iL1JB7wfT6jVHJQLoq",
  "key2": "4tsMaFbLTbBeWrvHphjJpoQfEdswH1Q7vJW9CVzvsp594HExvdh2p2opt36cqzw9ojK48UP5VqnbR8MhhQmp8BdY",
  "key3": "fixLt7qdXWP9gQx5UrPx66V5c7CbVCG7GkCsEbjNFC3A7jK9eH76VtgWFhQzq7P3tvKA86RYfUGhrqCoa3R2w8a",
  "key4": "3dUaEfdcP1c3CSymHT4Yj2116ieRYY6uUz55si5iPVRRc6425CBPniSYAGSKCK8kimtEsUAXh9csudYXbtQFGpea",
  "key5": "du36t9hcH9YjFPsusSo2ZNiBfReasHCUEC6A2ojt8mqXhVDL2qEhaCyjz7ZDJrNVRUfTnNMcpUNYac8DXXXoWGH",
  "key6": "3zRSEZiuvrnaSeKDYr3vU6j5CmemNA7xDBybmh2urdY1AfNz4YPeQXeBFLvBD6RZs6bpZjxwZ4N2wMSDWo3CDDK7",
  "key7": "38R9bdDe3a73rUrnMdJuyuMyeoFwE9jevN2RH6siULT8rCv8HEZ27JMdEWXexNQa6Mi4W2zFNxGQe5WFFG7pXiVi",
  "key8": "5X2QRvfbjvABUoQUW6aETBgceHzUxZFUacjhJoC8oHGisM13EMBjFDG19XLDwoN32nXGsRbK6mhzkt7nL4gBtvFv",
  "key9": "5rMfqeYdvb18dksMGLRREu66Ci7fiZKjk4x6vWqfpKqg9j6ikqm44XcUrcE6hDZG7TtjMCJPCpJ8byvAwDAr8yzF",
  "key10": "ahT5jtVrjpZTXpyqjZGaKYznpKd3MWrMVgZr2pFfzhozWzxMsHvJo2h63dre6jejKRSD47LwsbVFma4aW7N2C3Q",
  "key11": "o3CSpE8etVj4jQtk8eQCbAyGW4MRJqZo5LpU13wAcKuTLbiX4hXBuU9gB2nVRRhYXFadwG6dN8tAE1eJuLCYQru",
  "key12": "CZEUyRXQvLpxrEu9NmrtX9QYPPZUu62x1NSJmkhFmuZrZz9yCHiDn9J4U366uama2iZcybqQzt6j24iUhmHV2PH",
  "key13": "4KCYebQDWA5iPgbmL9LZs3gP7v49WVnByD9LLZkqWMwxFHteQLQ6rrVbwdrUw2gmo9VrcnUxfUncNKXPi67xtjuX",
  "key14": "4W8zteQw5RCH5Ccgm2qN4EKPFN5hQYWhPjRKyLRrRbwTCXqXM7monAcsXnVNfnQbnETbtGyrnaSb5VE3yBYSTS7g",
  "key15": "Uh2i8hWP2znoVnUCUzB2ZfMC6ZZt73djniQo33uXHCTHcc6NMBuZrdnrUKqHRWEV5WBvYCgFozMZZB63tP89GL1",
  "key16": "3dEPgMKadbp3oMWnq8QMt2yyZdLkRZ92AXZEZfxNPGWEJDYT3QiJWRxWfay8JnncZmq5WbGyttD1fDg4XjVbTNGN",
  "key17": "3Udv2KWLKe9hpsxMMkXSBP4AjKHXU1rkSw8M1y3ENcHvzyTEkWFkU9gZxYYB8fSAug4Sp7jQMuD19hA937GVrQGm",
  "key18": "5hR1iBcTGeVM8GoBzXTVwbdBVzTca1WJLH4Jsq2SWXoLjHHH89s1PTMQNc5KnC7PgA6GT1nwnqiR515PpUnNdgft",
  "key19": "tfwKTd58csc8SkvSFyMikGSQ7GFQH2Kmxe1Y9dxtpKg9yaFPpBqZZ5ZsDPppDfgZvXXDrHzmyNkGmUD82ySaT2f",
  "key20": "4Yc3WUseeM74KHebrJae3fTRtV1v17NwLogRJ8oUK3ayyszXxA7y3QAB6QK4RcE9Z46uD8T7GYa4GzPscdB2mpN6",
  "key21": "2WhZNpjMVRho3xf1epxtuE3XVv5rgSUwEYiHxqR4F6CCP3e5CqhPeSAfvyv2nS66S4nhehvkfyyVAqxsoDG9btVj",
  "key22": "4cxFDsi2hSaGTAF6LdcxAdS1iSypEgAuW4Zzino8dKaRi8wTwBWbuCfPE48rKibY4co1G4KXVGLHaubmNJvPHKUt",
  "key23": "5ofDsSqoCLh225R4X3Xdg2N9Ekjo87QNTr5xdWHcMPVHD7PdF6yEwnwz5DWD2Wne54ZWCLBTRdwoyZHzKF2AGzuU",
  "key24": "5nDFz7r8fS3jZkXEVo4JwDf8tLRtZMyy6S58j27Q5WcjNaCPrMa68h3DLvjcKwgZrV44XPgvw11xAfWeB3YTtcK3",
  "key25": "2uwT51efgxLzbcmNo51v266U9jm6bLKWEFc4K1xbjPystFeowQXg7qKpyh17cHbdEHisrssA13rxYnHyXoEkbEq3",
  "key26": "3FcXHfF6pX9NmaMBz9vH3HwFxkPfZc2df1XDPTYyLawMr2w5YCXHfMoTrzwfDG8cUq7Jb8CKNBhg9gyBTiNWSCPR",
  "key27": "2CvvdaaB879iBhHjhXx6GCd2rzfrwaw2CBBs5Ew62dWpfv6wW3dhApBjBVNmfNbyyeCyR7PzFPD6RmAGsQywTgeq",
  "key28": "321S6g7ibn4EQkkrATLhsKjfr5knB7af1rJPHmXKuTB3DqNuqeB3cnwEQkA1JefhuWGVVwjUcRXL1rHqRhXsgrBc",
  "key29": "2gHPjoPzPedj8S9hJxP3gozLbiQVQc7HncracxoiqdmL537JLfQ8bqgSmY8KSfDepUYpbYp87yYV7sKWEJ7Z7YoJ",
  "key30": "31WvmZjqJzCinvVeCzffRLgKxe5nR71WazeGh2hh2LkTkTnLX9ddWqeuCG6ozrAUeBqBTTsM1xA2JruYh4r6GeR4",
  "key31": "4FykznPxJ8J4KNtMdhnP8hh2SqSWUtdeGqPS1QoAEQRGgwpGRsuPtkdiFhGCmAVv8Y823fMPLGg8oG4Aqoa63NaW",
  "key32": "5UGuLPeBZUpvTWpQgR149C9KjwBUjM5TCAc1nieuR4fkpwGREymcEnS6AZffkw79HPhXq3tdoErAzouqZbhzqUwN"
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
