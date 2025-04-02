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
    "2FwaYczqbZDrV4EE1xh2f9wd8crNUXxm5DQTrn1Tx2i4tEbjwspLg2iruwH94jsvYunMv9vwX9EVmLRKXJmTDDkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYcAXJpM92rRebKTyDj8TZheQ3Cs31K5erKzCb6XgSQYcAhmp9cnGUBZ27MhaCBr51sKAGgT8WAXmy6dyzmZXza",
  "key1": "4BwUFgq6HU2pP8QMsitjqaZTjBoh7smzocN91o66tQo7wGtqJyFjKGFa8xZH34drDhMFXUEHyYzRJ7y69gLnjupN",
  "key2": "5wkxLw3hNepCERBcGfppNC7GB4t5pFaqV7dHYigphcDQsTFBr79scXG2yEUmDzkyvSRy6A7hpiLjuM5iN1W2c2dM",
  "key3": "3ceDeTBKQ5ARUTSicLfWNMLhfMMv4HCp2CFd8BATs1LRWL77a8nCprx2R8PyadwvFpM6PhbGTeMHYn63TUQhjCXD",
  "key4": "5yVQQc4DbeTxDcpqjDQKY55bEKzGRmELnYx32w7YmhcS1pHMKXcsQtn3BpTQ2uqSK4ZRvJyHdpBRrCkw4A7KrEUQ",
  "key5": "4kL6VvjJwdsSv6vDHEvMBRDZvWSoxodVaGQX3LDZD5jGwrGDJyFaQhkatGMRY3uPmFKnijPRupvADDavpBniphag",
  "key6": "7RiMFKHhMJXVyj8FCaVTxARJiiqLpN8PSdf6HCBU6UjsGzobiRE5yEbhe4UY6XmkAcwBw6wsLQLveeK2RLx7My7",
  "key7": "2nVY5KvCeC2egCg96gAZBpM6HJR9168R6XnmL3Vy2rZbLaBjW8qSKjPZjbPNPLtMR8YmQJ3simMfVnHUvm84H9JE",
  "key8": "2JsGBW2y15AS49sh675NBM3M7oY35xuMqUQk9wwBS2tYAdNfFhQiABgHmgNhwWoWFzFBmTXnUEZbhcngLiegmydU",
  "key9": "2gYb5jSx6xhHSiAwJm9oZ819uXma37mgSMx3Tn3RfQi2xX9KBCTwoxE7iM8wGoLUrycUNtemC4qrAuz6rMRvgVxh",
  "key10": "4AwVWDx8VZQuhqZFJmt3zWPiqtbjXDsBrE4RaWrwYEJZqeeQ4DEPs4EM5z3hTEoyDCmraHt6FZu99NEQ44HbMFL",
  "key11": "61XfFGHs1iTBMXorVCfN43bYSXs83zSfwgNMt67HPr7jF72f8XHqprCt6vFHwrMpKKjBpFztjtD781x2HLHvUYiG",
  "key12": "3yBLquGhnFpXo1hbNzFhCqcwoBkz1VXe59Dkmqj755z8jQQWkQyWi3Dw1awPApvEEG9XkSuwCLevmXfcbeJ9r7q3",
  "key13": "29HXVQdnqMetjXmNvkHD7crF5YD2nMJrE5xvQi49dYQhT27cWEdELPSp356uRFSVVgkTgu7s2iiHUKEEuXZbfdbg",
  "key14": "2cosDZiXuAmXo3Uxgv3ib91T62wAFPn4WbyFvXMHFiEswRLz1YEnd3hVSbJm2eRkQ8pSHpHVscXEcALzmmr7oz3F",
  "key15": "26j5oQfP3ATGw2EZWZDitzDfUVVGn6ZhznnWyjuynYcd6iEqqc5t4vkxibUSRKVJe5EG4t7k8Y8SsfuQzxzJhd66",
  "key16": "2KyZMPCM1v5RMgDqGyhig6p8nWCVNdNHZuPQzpfT7S5T3L6qxaubBDGusY8Ez7BBQiv37XmRZPh8NKTgE8hpjRc9",
  "key17": "3ztZaFh838uL2gysPiuPF2BDrnrCHGRvyTnnu9FMLRC3aFofvrCnKzp6ncidoPrdaovEdunBtr9f1HmK97rj7QQB",
  "key18": "4CNXezQQSaSkw63pJUuNqQgPshmE5ht1ajyohTZjrwDAHotf23422nyWnJChrB8wcz4nuFc6KoJtpqdF61xmnogg",
  "key19": "2eXc8YPsUXTJpcQN2euLaJTS1rpebgUp2C3yzXkFFXQj2BkpLyKrM1DUecBRUJXEvY6C5qe28N3f3C7GGxQMev62",
  "key20": "5o24A7oxPgrTYJSwwbiAmF51ZQ4isgiAD7ZadRCAjZU6Nc54Mp3QmKU9eKMW9B3Anqaf8f9Ai4Xmug1XbK9eegXc",
  "key21": "34fYXAiAD9j183p1b1j1eTWDBdpLb4GjkMPrtMKfc4TbbKHZg88XHMmGg2AdU6WoNkSJqLkPzRxNA3TcF6qgiQDW",
  "key22": "5RLHyMSiPk4bzsvR5fZVPH4m3pz5AcG4GEyL44GNewxAGcCwmH67t64HBF5rrRWBs2jtxXX3DQpo2EHWL2PkD81G",
  "key23": "2PBK6CPQNDjfYNaFDzJzGqXmQJs1yDSEki9CaJ4b8MuPjFzXZ8vzebKCiTiEtBzHFkip4Su4w4Fa9tEiecpupxzs",
  "key24": "2AgDmeJuXbN8dQZdrkEmqeWYu4EMAvo6SPQ178ieTGo9u4sLN8L36AC9bpgK6qu9UsQiB6dLpcURMbNz8BWpP4yx",
  "key25": "5Mu49vrd5nLeDXt19SwxSS4DQRPbwi9DXbNDHE7BiCrNVd4nd9p6bvfZ2StE59btrjzcHDoHteBGYxqejXP56w8L",
  "key26": "5uyo8T7Qj7mpBu2tWJAqMTT4E2nyJdSMo892jGH7pdFtc8hAs9ZQgYVeaSEMQukW6z6LcmejQqoMhb9w94WbkUVc",
  "key27": "4gvj8DBN5xFQCCbnjDSp5ysF78edBZBB6zE3fKxFTNsBwgKjQrgeXsaYekrSJrD5Z9wTVYo1S9sMi8aBXWz7eE3P",
  "key28": "GKzUMPoKEVcTkeSYAHrfLzSa3c4T51xroQW1zMk4jx5SZ42nwBgd5Ye84X3AjFy5kY91ZD7zZnRNh2FyvUvwbr6",
  "key29": "3D69nEk1HgiU8pw8eTQkF3Tiw3mPQAZyMbquxmuDqXw8vDvtdLUcSbwVN5HmAAqivacHeZkX8M7ZWeQnX3CqzSi5",
  "key30": "42bqELRMSKzjK9QLzBeCgw8o2rMEZkYp4b3yshiv6uRxzxz7FuaxysRyhxuQ28nJ91MLedr9NC6gZJKVRuJZPp8x",
  "key31": "4tt92LSeHhJbjUyQNmY82xaFuioUm1qGGNbHfXgAvBgmrVjKmkWEAqmfmWDPfc93tr7PWii1qjQzzf1eYyBDJkDC",
  "key32": "3QV88iVBjt8rPBPF5b8zSVgauxsmDn6iMiHGHGPcDQkiGBjvXYZ3eerCn9UT1QCMDyf9B5F5Bj55e52X7GneYJuG",
  "key33": "MtTDvxB3J389pEWrCJYmzNmvejxpvDK1VqrP53wgU9y8YmbNMgk5GRY8Pyxn9Nw2MP1HTre7JqaYd1wysvMXCfo",
  "key34": "2p2pnfBxSgp8CG72r5f9FfEzFqJCgnvRP4vidufrXWHhVRJdAgLCk5de5rwxjoYPK6ewdtfy2qYP1sBUN6mCjvxb"
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
