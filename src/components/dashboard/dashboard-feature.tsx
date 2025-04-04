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
    "31Q1TcCCWw7e9aYjT4d6eoHeDbzCcNjmV5sx5PmEc6mGjSscGSByJ3sWyry5H79gxVWQvFduMa2N8pL9rnCsV2vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rk9EpMpFESuVupfZvq9ZHxqDGrCCZnNvW55jFSHsbvzaUkWK6UFyZFXRvdearQ1TXFywgzfDr51vsXMVmeHStjk",
  "key1": "iZjnPXMUZZg7GL4EbT9q8aYzNDxFUUCjb9uaCV3J96dkivfb1WjS2SbqdZLeyGQd72A33MGzZRK8JGAf7x95zWf",
  "key2": "n88wcwkdV6QPU4J7uTZTnUmxZkEdeAA6VJ218AMKC9TxpyHhVbLhp7HgRhzUzWwLYLGrL6Mcu3Rh6AjP84oHsiP",
  "key3": "3Gs2fPzRuQvTBPqkyWrSPzkVHjb6kNy7BQdKasmgV9xvCY5PS5DKXaMuiy2D7c3cBkL7GsjBwfxcmgvLgusHxScq",
  "key4": "g9CykhbNKGosMY38WL1AaBKqUyZBtjAtXGrZVuHxLdtcWdxRCxUJRSsj5NZywzQaVATeh1jiAAqxbnJQE7JfMSJ",
  "key5": "3uTzcU9qEM8tsELPNKn7paCX9q8jG8g2sbUUJupDBtT1MEQxQnL8GmTod3sHnJ8NMAhbPPBpeJeXMnLiGdfKDNjc",
  "key6": "VhwQM8rAhjuV6Agt6Nm27iKvfqfvP26yg7p7NpTUtqSHPoPS15aNmReWorAy7j9ZNWcgNSpRE1tukueANW18AFV",
  "key7": "3eWTZzsXHHRf9zuStsE2c6yhu3u5aBLMcj6PaPVeME8XwZNwRqHN6Q47D5djkcW4U2nTmfScvC1xU1a4QE72FCNU",
  "key8": "51aJvKzNhfhWfkF4rtfsBfZwPNcFv67FJwZxWL8KGZbYibf6SU8KvMyMChi4wsv7yiGzM2k63uaan9KDRoc7as3p",
  "key9": "3oZwo4wWjCoRwME9xficPiao5xb5a9A2WYxqVREP1y5hxSHuyCNz1imFdn34D4hG37eHjtKuqX5CUZm7xMEdEyjR",
  "key10": "2CF3jpVKCAGkNFytwq6uqa2LJzKrT3kZbjn8jExcWrZdmtxwRk3xRdXue22HkEcwCzmsZpGfekoGdKWYwQWwhrBb",
  "key11": "fvC5NGjU2R2uYeJTXm3rhiJZ1m5Hq4jNhmo4jRUsJYR6wbjbKXanP9Uk8sdi1VA7rWhdx7R9nqwuXrAuy474nY5",
  "key12": "5TamjJeP4RSAjCPA7J9RJwTCDQw485guXdZXPfhiWPqBUiVyWC6E34dSS3UxzVEJVMw8gC5QqAiTcwL7TQppceyC",
  "key13": "2MJeup9Gbver9DdymUZXEaPB8G8vAc97tMiyfur5cMULv3Nc2WXGF9eH2SN4NcAsPooyCqDb5tvJCUGCf5bvLAdg",
  "key14": "5yCucvScYhfecdWho67q7pEddnd2982Fggs4LZBQcoXp1LY1PfbZX1MtBURwhCgFHdPt1htePNEVbwPkNwgCxEyM",
  "key15": "5WGPPoiRbvAweLwV85EHbPEvFFBJszzUSa1eGoPCMJPSrK5ucMvjVpDB2GsqU7wSVmiA2wKdpJpKTQio6Mid9yVT",
  "key16": "35rBzPV3Rx4CwPw5Ma1JFbjUrfwqviHqjbZzLQJvMmfM8rRBF2FCtXqSpuFiaLv63Y1P7KZfWmbpCpfbRV87crMf",
  "key17": "2Ui4R4CWN4j34DUcgFmLKqskBxUx3oM9CPFqVPqbR62JKFgVUGKY93R2XSivxjauq7dE9XGHRhidEsNfATSB8cKm",
  "key18": "4Qf5dfcuMrAsiCCLjyunmtMPnyUXa7QpPJtVZYMiSJE75ZfsCFPAFwsA9P7iFoP9F1e9wcRspbqed7jKtUUFbCD5",
  "key19": "3ZJhYeyy3smZdcNpizSYYuQt49hsr51p9L1D1B75ZqXcWZDmwAJ5zkrJMWYckxASwDPEvWwoxa2mRBjhZ7uwdEGW",
  "key20": "3GbrTrYhoY7Qn2HUPeMdaN2YH3r3YuhDq4dbqt4FAiv55JP4fX3wVdMzHfV1P81WuFgAnsjrCiJLFPk24xd72JmK",
  "key21": "4Bt5oXSKYMUDj5Niumk8ivmQVh8vgRGWFdjP6XhVpm8aTQgg5atmEfmUwnEJ8zE5k5iatggEdNYYmrFw8hS7N5S7",
  "key22": "dasgYQuTHb2ugTq3AT4ToFw6pkvQq9GRu6hLTok2gDbeYMsWxKiwvfcaD3zRh2N28ci18EEqzjfcdq3ERCQFKXr",
  "key23": "5ZFJBhYCcfyWFmDy2Qh9J22iW1AJTAewnMYuQDoZ7kkFTWxLrxiZzLYKH6CnZN9k61RYtbCxq8ZoEH3pyT5GFqt",
  "key24": "53dPAJqfdDEUUx1hZJurQ4Rp79erEsujRyJvjP6EbCWfYg1uTJJbYTHLcPdrP9g4dSfJC3UuQMBVssfAnugPDLWk",
  "key25": "TsMeUsMVKA4hQZsKB6MubuDDP16g58u4pMtHvyhBZyyCBZmL724ttudQRE1zgf4eNPrxNtn2Ph4c5oC8uEyDB5Y",
  "key26": "5aebRmv8ZJ7VrqBmzgHmXuoGRgfigxH5ibLTMHKZdBmy8hYHVL67oaQkYzq9zhP3JxzhbTn6WCgR91gAaPAmuVUB",
  "key27": "3QsDFKSdVES4r9s2d5h4jEjhaNr6vSTQFu2DKcBF3pG85BmcW25zWNGF58rRWWsoqBf3AqUHJ1f3eygHYkKVTEzi"
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
