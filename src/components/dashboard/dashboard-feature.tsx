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
    "5fYYw79xQdjfczGPND66Y39p4shv5mrNsD8e5gUbLRWS6zBVvnQENH2ny5U7qzv2Dg8J3NQ28J7UxfRdbTnjzZ85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZG9uHqfVmwSwugpS7E5rLR3CwSTxVt3PJLRjEJgfFRuCcmTYbZRFzjVeVra4GXjrXMNBQe9oY1XLQR3Av8jxdR",
  "key1": "jBkWgRagArQEKtxBYxGDUrtBena37Zs6AeEYDc9ScjskKg34GWvTGZhAYjwhg6YQF2SH7AWYaBuaJMUWfwrCWXB",
  "key2": "5HCKNn9eYC8Eyfud8641WkkeT857Ki1iY7rtEMvpNXm8fyvyA33KJNasEkDuNoCKCk3Zyvc4TSgzqBowtgikyqP9",
  "key3": "2TYACmeAiCTtc4KV7977hcHMhFcUZYC4qfsHduRRHn3w7MBZSnZmVrWGt5UbnbeDnv4XjBZQT7uK5bz6pQprE3nK",
  "key4": "5ypYKHy4FstnwZpqkZqZrewLnWw36Eh1j7d1rSNq5L9QZo2aNnqcTVkcqzA7aKf5my9Hf4bScCFZ9UCd26aEsEdj",
  "key5": "2RStBFSCSt1jXo1R4my8Df4BpL1KA7cMXNNfctaxUi1vjHcB1dZMKXCFb1sQ5VBfXX8i5Tr5Cz9jxqN9DxqTmVoC",
  "key6": "4iQ2QnsRGj785SgqKadw7y6Trk6MTwg9c53LACt13WM5q76xgYFfKeLq3gwTbabujr57j2n4szQxcAwLKnAzgfjc",
  "key7": "2VZH3kDGK9tRXTuxVhhCevHijbZ7FMbN9YknrHsV5mpmQPvxJicxaRF7H6zg8Woop37Az3G9Ba1k3dRrcuZdwDBw",
  "key8": "3yLL5vgmTJyiqC5fFLAobtyRFMCAhQ2AKZ3zUuKxnSKyPDsEzCa5E66JMtutxg1yGmGx31yUCuqqitRJKxXNnX4F",
  "key9": "5tstrqNsCyfbYaQhamHtfzxVcdGXtnJEUt39Ampqfi57F436T7iLDer9WDLEhtSLak8fGaz3QDE83VfTHUmrcvxA",
  "key10": "3xCr9BdBKfhodPWdwwJjEbeMTR7r4nACtRcJzLmvxjXrHeNf2o4kwdQ2L8YWACJMYHV1Umrn6FqRjaFGTKLPGARL",
  "key11": "2Ri3p85MRXiSTVY1WkKzJJ4N7dAKaDATvdcGtNF9h4e2roQP5T3wtb8z2AdEnR3p4kj3HLHrKQfBz9ibaN9W5YUZ",
  "key12": "4K8qfD5FXm32Furhbza1asweAdgCUnGNLi1ExJAEZf4NefLXjnJdq3RFP3YcSqYuMA9aMqtNLxV5EZWAGLW1oZDd",
  "key13": "4rw6LpotGqk18UtfVbZhGwnD7cJ9sYF1jrf2Ljyfvn4cAkZiExvTqX9AbPxUt82RTnxXiBrGKfS4jq1TmQse2Hxr",
  "key14": "2Gdfbcnh1WCmyJWt1zCM5v7gdAAZg1B3J9qQswmrnqZBx9N8e5z2LLu5KJt8EUYQF5g8FTW4ZMds35547qMTpirx",
  "key15": "4c2iTD2MkbhwwG5bEQB6sE2GprSnh4ayg9mhok5DaiJzRE7FVwcB4y6N7Ruezdcqov8gphN64mqVGFGb44y5QntS",
  "key16": "4oe8ZYNVVD6xxR81CLxis3VhL7GCc9JGxTFzn76yPWJAxB3WT7tLFn9i65sxG3ZC4hiwEwKVjmrwwsGVVfLTuPYm",
  "key17": "4RB2PeuC3pJSfRQAkrx1MvZ3c3QmjxSJVGRPudJgJRcxv47wz9KRiswekwfiTyPR6RphzfCSakpD8q2UjgA3ywva",
  "key18": "q7FMynzrH3x2koFHPE8EwsqfJNXBXN3Rub1cGBEwavL3Af1B1mdaCF1PvpdGGZ6uwuzxtuuobXwmYWB68LbzY2h",
  "key19": "2RBxgve84KjDYvsD6hgBdbbK7T3YyESmj5AJ68k3WRBSafgefhEEfB6b6BJdvf15LNuXFopkzcPAzo6RB4qxbyXz",
  "key20": "3J8afLTgKVXxfbm6SnjBQFQzk3SxDZdgUiNLPL8Mbv52M2fcbtXrWWSpJogmRNYhQHMHPJufENWWP1UeywpPXAcN",
  "key21": "1wjZWMFUqooHzSS2fbWCPqeP6j6ZzypeTovHcDWj31hLaZgrX43Kbq4pjkAnnW9ZCNEFbi4sUgLKipgiEeYJozG",
  "key22": "35JUM4ZkjipiZAFe2cDeNLr7vkLuR3rUdcMBgwk6vYGEhRGohnLpdB1tEA2qXop7T5aMBWoZNQ982eEkDFU1EcoG",
  "key23": "3NgS1A1KvhmPDHaGyzZaeQXE7gQJBYPYwPJdepukvpnawtqE9i4dPmWac1xpfHbM3uRLzrFbzXYGAEBz3Af68qYt",
  "key24": "654ar2ypWy8ZPqHFvneFKNpZJ2EmDB23arXdUQ3LtUMJnQVwMzUTYDHvryqBNS8nnNFGXmXbCzUsL5d8Uiu7DHtS"
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
