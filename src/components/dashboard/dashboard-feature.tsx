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
    "fFxk3FkELQHSqX8uR2nFbJdZ9ZbX9uQjmba1Gf54ho7zoQnJET2zuo69pcruH6gKD86BSDX9rPxaG4JFvAE7d16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14yXsobydJB2378EPhTo5q9c4k2CxAbpF5pR7mPQNxepKGHXFpAYBvm6oJRTofUM91siwpZ38yxRPMnrHJgxVWu",
  "key1": "4NP5CCPfaJHUFZVFPfJ9Qa9dZGXAFGtNik6AjykVLG133QzWF2xumsNRKbGhn1ixnu2BYrQYjheyCN4FPpnbP5Ur",
  "key2": "3ihxEe8CvvomVRFFC9Un118X5bdCoLX2pBLJRBQZwfbvtR7Z171THhrzZ1zt6u7WZgAp44zUBk3JsRbRJbA1f2bR",
  "key3": "3rAsQQcPK2AL5zUX7itybdKe8Mhv2KuGTWBKniq8zWjbQeabuTMb3Mgw9vsNBy5L1AMP5HuPiCiXq44bCjVsvBrC",
  "key4": "4sminB1tEkdWwmMwny96k6r7KsAF3r4Ee6EY6iZt8QxPivoSSgmjwi7iwroRQVkbdfZgS196BXwYc1AsURXWq1Qs",
  "key5": "g5eQA2BwnLCX3PCyxybBJmZsvU9qo8ronfcdBvfLPSCLTeSo67LYsaEhKLXw7LnXDPJfwwS8uJRgQ3oq1jWFcDR",
  "key6": "3eHY5RSx1nBkZwiSBWtFVkNBArjjuLgGuFzG66ZrVhcxqFrNhU1zvpiuWadZzCWKya2pFX4VJBTUwQALbb4yPrp9",
  "key7": "5cjCcFf4S2vAkUtpQ47MKoaJMiYqkDgQdBTUbJ95pjtVviAzHVre1mmF4L4feLvAjdc8pK6cQGqnXgaG6N3PPCJ5",
  "key8": "M2bA4fg5vrRirizXrxGSJkqWcjgiJbzDhsDevbaGXfr5M4wjiQKbbLaRHek4VkpKZurS9ZBV7XtBHBbYtrWpVmT",
  "key9": "WN2psq5QzyXJ2uJHrsnjHYJNAJXxHwPRpRsEAmpWfJ8wLzpif7zTBTX3U4ajFdyj2xTAmrZc3GigaEKk2n9vGY5",
  "key10": "3jj1iR8utb8s2ZLE5DVwyycVgKL9t1eamHQ5T5id78LA87rYKcoVQpBLPjAdgQsJyFh2MmFggvcqPP6vo6cTMC3r",
  "key11": "mJY8YUccf2DUfTRcAEbtbCyBnS9irf9CbfXTfXDgimNq5vgXA13piHeRJ9ejMjL8yq6QMyGCpVHeUqtZfUrY3vR",
  "key12": "oRhzUgAsGK6ZWC5YmU91PqiNiXjUL5uycy1rWGnzEuLW94PQnUrfwSTNr2oryXuxWvv3p76T32hDYvrY5NDLSXr",
  "key13": "38FRerZvi48NWaTv4RKzVjtd2Wp4ieukuVheK8gJfpmS8qNqnutQTkxWpjTsiST7tnCEFntvMq7XDA76pRcRPjSL",
  "key14": "2MkaWiP3VzjMgZeuh7c4GFQrKoijuLdhG4opAxwBihMgMgyRau2dMcvF1uGvWYdD8BmqtfCwQVMhs6CNFxrH89F6",
  "key15": "3C7WFCt55izN1YcZnQ1evbfrJS3nd6fGuWsc4fNesKhgHwtVA7Dv8DCEzmaguJSVarew9N3wnv9jq4S47rAmCrf2",
  "key16": "62KCZFbEoUtsBP8VEgTYg8dgNafi8P3vx7YSLUbAoTBx8t656P97QEJmW71xsDUUGMq2PhbsJzAv6uhTTJHYfiPJ",
  "key17": "2v3DeyZbrCWZMHcMMH3PijfNuybP7M8NXTMfvhpkNep9dwyMAJBSDjGVC6Stsvyuo4DyqM1j1ok9QojofWNMkMcQ",
  "key18": "5b1r3NZ1pebLeTpZEUHBwK5R4eGNjsvkKbBeeGW64WoLSZFHo8qGFdUrUdN64j4SXQTAU3Hh5fHWR6VmNuL8Unuh",
  "key19": "3sNq1WfxHPiRdGfFHwsJZ8P3xKWXCn92BXjNtvKb3zQks7ejFKjNFSkseRipNhVUEonzmAWjQ9ScaXKfxjHkWzGr",
  "key20": "3eUwKSu6eBnmgqkeRsWgE6CMm3dArK5wMLbMyuC4JtmBjYL8WZWcczH7shoTDktzrwFjfPUCnphqrtyhxSNUGAz4",
  "key21": "5FNRJgAZYz1bW6J4pJBy27bAFvYBWQwWKcBEHe2KfscEB246FiM5wvRvmqbLSU4JJavwXoUEzmRJfbhi6RgGnNUD",
  "key22": "2zFFdxbm4RBESgZZXtjmsWmFjdKfpFzHXx5yuvPNEnwX5VBkUzTg3eTPBYZqDTzecnyD7nEV3Su7V94SxGguMSb5",
  "key23": "2iqXtRDdH1AHT67QXi28ChdWAhTY3xTdw8dBzte7XwR2UNBkvMKMgH3zYzweS8nX979TAMaEXnSJzcdiLpfdJedt",
  "key24": "5R9TgQgpsLDU2nALgNgPKmSyh2RRWfQRWueJSiQUUtyx1KrZsgXQkv9CcpMio4UMC3j3KuvhVEqM4Dym6hMANb3G",
  "key25": "2oh9aMJnS9TSPD8WMhiq1mDvEvsrgC8rVnJcBtVk4TwoM1cyN842QhZmk3FQi3YQYr2aK77mTNBYLtfSy6ybVNWM",
  "key26": "2bMAaWoQBPS1WCCqp3egaF5BWcktjy954ctjDeewGHLhW3r8SHLXPACdtugCN363FXyhK3sLcysf9EMvd5RsgD3m",
  "key27": "PUgxDLQ8uuZ8XENPaywRHbwJcaRz8H1TQd32rg6wk2AuF8ikbE7ib9NKftPXPdhvMzTLZDBhwe76Hbaj7ZEUApV",
  "key28": "2ESbX2enik9X5A2QCGLF3ukkJ9dcuGPEQnHSNorg8jpYVKiEdzoXkwPZjZVS5dLdZUXBp9YkWUrJRZfB6waqsxkW",
  "key29": "3xxQrFt1XipYfK4NxHywaaqjwGq7KRvNXdUexGoeB4NikZKk2rjTaa1eHFShBQj6oac4XEjGUp1buQU1muG56iZc",
  "key30": "66ahw4ZokmUZogMD9GqcNJrHdWn1ame3nsnVGr2fmhdYdx8VE3WyoodVftbNr2UZrfWmyzKoVsxTPHBxk6evVPYt"
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
