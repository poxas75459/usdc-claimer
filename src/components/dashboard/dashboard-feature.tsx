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
    "5q1kYSiwdpXBRmHmMuN5L12mhuRoqZmCqNtwTJ3GXoj6XaCTo9bXVHygKi1TfRcwVt14k541Q5QPB3SL4cDBZ7Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qGJfFDQrNUj5Di7TPSN36iiycBQuCQriGEyZek1JEPcoDZu2gB9rEfsdxGjUuDcd2Fw4wJnVFJnmPsA2vyV8oNV",
  "key1": "vKJiQsq4xWKxa8YTm8Fkq6oonv2E9CpQ2khMfG72ofWwr4SN8mHCBEkmJKSdXJsrWKWnt2CSQBAPWu5eJwXzBE9",
  "key2": "3LkvQncyjEhWfxvVAqQnfAtaV6dmjCKDhknsHUueM1gZbrqivTG2U7fTBgnh6fuZUZuHyPnE2VB18BxtiqYMy11F",
  "key3": "64zifjPjn9bpcYsXNL1foznybwEuDe8ca2vmPRXuRX3pv6VkmdQp4RJXLaojyT2jnGk9oyvY8hfWJu3bRNbx1aGG",
  "key4": "5AvhyGCNj6oyDbobdXg4UvKwbDB4ouSXjbkKCQXM3vVxUAAJTppNdT4BY5o3tKTHg4WWbcpKBczjMTUyZJJ5T56Z",
  "key5": "4F4h6ob3eYQHbw7KYkUhwzYtdqwZj5Ka4D4uxVeGoZfeMXCpYCyxzMM4gf1jVBEfgF4RXX7jVmR9Rci876itZkRg",
  "key6": "2j7yoYd8WMwEJNfaEHXkz368BZJRmqssegqmDuRfwUZJaFmJA7gKPY7DptDZTAPEVfqthakGfw3WCTahRcTpvtKX",
  "key7": "3UU3R7ciypYTr67PrMNLz7snzoUHakiw33xuzXxipLLAhyZH3J2Qg3GNjE5yRcPB49XrH9SsHjWkw1pkRt4UUhEL",
  "key8": "4V5e1vBP8zt8uMJBq6kXNEgWf7sETkqbC7yyWBgZocu4M6u9NPzqwBvh8ir372iF9TARCGo51UB9BPXYSR492aDp",
  "key9": "5QWfZiTw76QFBuAgEmZXAgZpG9FEUiy9EvaJMKvShoPYyUjwHzLGUzrYbdRQv2PpBqd4rUKhfH3Xgb229e1HxiAZ",
  "key10": "3kMfzFffMaHJD31g4ykDfcVB3ip3XPGk2nNM3vvdi82sDr7jKEnM7d25mbDUkn8V1K5cYN1F4ZS8ELq57dEs4AHc",
  "key11": "5vGGCZHWYoQnrVjcQcSPCAy9AT91Kt9qF5X1PeGb5WM8Fg5MrR2uR2DzM5UDkSRfVsRgj2t37LK36bwm3C4tV5kR",
  "key12": "4UBzFmNP1gdXEAyHNRSxVPRyy47QZKGsxRxUNvhqvWPwFQAqSpgPBUk4FrxJYpqRcaSVPXFhuCWVggyTrsQ1tic4",
  "key13": "JQiaCpJty633GhpHrEqRG6BG5a2Gtc4GQhoPcKbbpnUPaZWZDVR1yBMLBgADj59urFs2vVXXKrRfm6DR7gbsUVs",
  "key14": "3YAQ6gqB89SfVxMx3933n61V85QGc7r74Swds2LrNnQWNDPSJ8RCzARfAzqtEmUN4ab7bTyif9sGb9KUTbiTejHS",
  "key15": "2FMA32nHP2gyPhEoRGHF98PsTkL24FsnFAmktpojt1yAt3Km4EHMLoqdv8akEPZweee4ue7W8AT9w7BH71cztYTJ",
  "key16": "3GJkFXDsvta9bWkH7Lw5ntrziffJda6Jh83pCpdVF2v1P6p9LjPLoVgGqPvwtGUBsG1WA8JfQW89ezPeuamJDRKN",
  "key17": "4heVU3h8j7bScjEMERbvoXdmVX7b8XaPDrjJFcFi5JctP7WSPnGeMD6vqBCvMfe9CNQjxnqWewFGdJdbTf8z8JtR",
  "key18": "5FJ9HkjEiCMrdrEP5EGY1F5YPSVh9QLM9gnCu98t39tQWxUn4tsx54kxcw6DsPisvQCZBuhzX9Mk4k7dB1nM87Y4",
  "key19": "3Twr2iSeeU3gA3ygdUfKFerc6gqtSjnHQBeiUUdSeX9xobgvQon2P6bfLGYUctNhMz2mEfHLxsBwCu1Ycepkt3wM",
  "key20": "5DHnrUR127YyU19C6KLMrCj3MuKao5JrV9Cg8vcCongch7kBD3w1X1x3SC1HGV28hWUQjVgjsMLDpNd5uqWgzXn7",
  "key21": "HZnNif6cU2TJpNLE1GGLF8rzm62NDkGgMWPoMsXbM69xBbp3eiRJva6wZ45kAk9hArqSSbSUenECkW3JZ1rWbiK",
  "key22": "4bPqY1gtSUmbfDJXNaUbmX2dSZoLZKMTyBK7eec6v3cD5Jtrip1KujKYpyBsJgTM3mjgknvRtDMtKcFha9V9q6ML",
  "key23": "3UMaRgzzrczme9pLkK5TMwq9pbWN6wWMZeYQFr6t3TUnEMoSDpHooXvJDkLtrSf4GA7ET6aVAZUMmVtkvzAo2be3",
  "key24": "33XsVsmaixnZYL5E2XgUXbtK9rJEUNdVT8wuxVWfRyu2Y3tzqiq9noJgk395QSFA6tBr3peh9Lsc5yJVLTtCsNcF",
  "key25": "5n65L46TrmEJbZ6JRV4mjwqKrxpHbJ8oYEECXE49UpxQpA7Y8viPg9Vm7k1748Rb2NUVz1UZCHoevMGUbc5fn4rx",
  "key26": "22fyncrEkSKf69WjyVKv3V8fSqqUN5p6fn7p9RXgrAjVGSxB7j2ykXFfDFiodrqmtejb16c9ddtW2GhK8kMUNhED",
  "key27": "3UD91b9Wx3LFuRs7tyuPzVNmf6CyvBJ4VmYNoF2jC5bBr77aVkN7gqkpiMwqPX5KJcjvtuzFZRQX51kXFJD2pxCA",
  "key28": "2qMsiQGGEE3vQWx6veBKe1yFRfYkARiKCX3FZ4PFNMKd5dGFrxTkXTH1hcqDx2oFZDeMgoefuDKZJ1igsr2iJQgz"
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
