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
    "4Q3Dh5fF8qyVXjpHTgPzUDiD61BqZam1aGb5GDKeP7Wc3NV5xMQF5zkPJxvLJAmwMRyTyso4mQJak6pcCrhAfQvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rEH7XHLCcnpSWNnELdtPaYW4mVa1wi2RviftMPmSqqCRWhTBeB25q7UNsLAGTg3Ai8za5niNwfHQZcmtm373H3x",
  "key1": "54tCUjU4vD2BZSzbHQibexJjHXos2kkuTqYeif6N7eQo5XEoxverTBUqSKWatsXioZbcVHppCbFzWydogDrwwzsP",
  "key2": "CNdrfpwXVfydBvZjPcWtekerkJxr18WKhLbNfsch6JhTN9BhUdAB28bWp5uTsqDCeRMm4RuNZ1rUY3kHcRemYXM",
  "key3": "5HnaMm2VWpmZDnov7C2JoXufxaZf9b8cFW3fjZv9i5jq3xBEnDQKS5FuAcctKRhdNfV5RdYy5Cahmn39DBQufu8p",
  "key4": "2eJUEyXJmXy7zkyuvtjX3yybMiRgGCuvtYuqftdQutfWnZAUMMLBuq9meCHqhuwLKUNgsAmC6XBYBwuKDJETkFLg",
  "key5": "2qhQjB4GwY835EZyqxjDgF2YJaQyay8D4quFmWdnnfKD9JAUj9th1NihsRSruUMCdEB4w42qe6vxdDxVo8FtUSVj",
  "key6": "zo6tfyPXW2GFRZrgbZ18wd6u25FB4LFgoitoqqcW1MbPge4wbCRZS86uDRDX4wHZpkAE3Gbd7NXC79Tg6E42D2c",
  "key7": "3NsAz1xM4z3sHLVz6Guo4a4T2KgBBA3fEP5ddanjtySeud28LSgRbFNQNmqekFqNoJfnrVhVSxm7doP9Gk738DFj",
  "key8": "2LMADFTGnivFBCF8JQ6GRQZumdpUWEnmpC1ryvYrcpkbD1QMswajq8b6iQFN8jP53gJE64goQtSqnXFLaczZBDfN",
  "key9": "NN3edXB8MLCHVZV9zeHbbu3AvMgAwik3ia8MB8CfwzDcainqTDqVThHpKrL4mKUCCrYW6cNT1gCQ1A7oHrHg2vq",
  "key10": "3n9V6QZovvL9QxCU4vaUGJDiarinjkB3pHsRTgTrFJfgqrSZFh2AoqqpTsM25dDJQ4E87cKDgfpeHFfeVuu2gB2n",
  "key11": "4FkTATHgNmQu6AC5BSgdmH42kCJakW3yC8DMycgpetuSxfuWvfBTL4Bn7tACPVeiwahRDadmA3irBCECMyiwm7ua",
  "key12": "EsJhZ4hteNcXtDr5hxzza1VAmbQFMon2boTAPKQyKxFZkwFHvCPHEYc7NE9xu6XWugJg3RiAjJx5NtnVtrie4yR",
  "key13": "5R55MQq7TydcYaw8XBN31j2qxdFFuQRqP4NWPCQ2nLQs8viRyuvUqAq8gnCwNWPWh2FwjwjcuckSLS7YDkSpLkFs",
  "key14": "285QumB4KxtKMqZNYQ7RSqU2Cgsk5qpAzyoZ6tAp9eFdn1kMWstiJ84pQK553G5cmRSCxVbJ7c8eJ7HEFwZrbiH1",
  "key15": "2HXa5ssL52LKwCYf7sNZVyJScbpk2rpWgEK7xxNDEnGQ4wNT6gtKDejvpE6Ew4EUaiymE6haqqoA5rD3bTV6S4fT",
  "key16": "DD3UPDgs6g8Ec9rpvC7woL1G4mWh8AddDhPzhxHTWib38saDg2VsP9bVBU9wFnYpMDJNNQzhBbK5MF9y7aGZY8U",
  "key17": "3xQoGFNCyvd4e8yPmkjN52uJAZhn6FB7zG1HX4N4c3JL1NW2533CSYdMmeKPKEzBK7fG5MFEsoBN26Q4PvvwrTRX",
  "key18": "2pUqtcUyXNWiXEQtckA7A4WRxioZuvSwQShxuAuYEJThgkNQEZ6kUTfJUkCjyjuyQqLru1mV9YzWNCWekCoHEvmY",
  "key19": "5dzMFQeVZ7HcNd4pXs42o8vfepDVsMqBVuGdmLa6eKufXhvnGicbi7fx5iZfKG5RezQPSXVaX8zeaxgtBMxyVuos",
  "key20": "2iBJk6TJfb5kd8Fy5vUhvDZTNtv8NpHHAmC3XpZYgaUyAzRjvNR2jdhwhHr9YSzSeXNLyHbHUMrvdZSbPQ2hKrVn",
  "key21": "TCD6kXkU3huVaPLS1Auk6j2GrVmZPMgx9sRXVe99ouc56DKN3ghEABoD94eGYJBe2LRSSnffVhWGnD2c6ARdGx4",
  "key22": "43SigFq5J744zTa8vUDLtH5Pmaytsq7YghuPzDNee4qiFqJa5snVVqNQA3RXWZryWQAAShwy2gADATWLaiGxtNpV",
  "key23": "5SZUaBgJ4qNNFpCBMDgyYKCdbQWHB7ACULBaebWRcvnPcoqa3hhcQSiv54WT8kGMgC5mMPXmWFRu9Pa4eQc9CmDg",
  "key24": "4bicvmgpc5A2MrRswnhjfDyqE2pu8kQaMJg7qnBm5DQAqfi14NLQpEDRDJhiF4McFJagqFJpzBhTEGJAgQnETWz",
  "key25": "3LgHjDoMoX8kK3ChF4Z9d3S45MD1dCFnQa4UXB9noR1QoVeFMgD3bTx28ae9PyzBjWwT7foJqkmMbHNzAsDEM42o",
  "key26": "3VwVX8CqmELAETnHaHLSwSyj4ASxeLFfygNLdABmcLcPY1jBVwddu7ky3EckqJeynCyqRwv7htU2HfLpBJ13htgK",
  "key27": "NV1ptumiWSNzfhMZMomAFBVXBXyUXgU3rA2eAGudG1XRHTykKynLkLjvJbz3xUuArrqVPXKXbu8Zgc5uoe9xnYB",
  "key28": "4rexKs7Gr4gBTGbH5xZdnwGg78o6HFk5Qze782sGKGbDPXXJKBZV2jJVBWbqJnBXEq2EGvyLrqkMh4YeuwJ4q9Gn",
  "key29": "5hkNCw29xY3YRBvpnjZ4s55aDYV9xRERrq7B91b5gzgzZoQrFnyhP5y9ww3fiEmYtVoG61X64Cp7BkmHW81mbs76",
  "key30": "5QVsxYu2som144a4rGPjKeuTQHzFgFA5fYrkSu4LUCbVmX4QdNXAAj8ZDgybHYAHExMecg3k1TMCBKRGHa8DZwTc",
  "key31": "mXZky1BBcdEhiXXDp8NhRxspWDDnivqA5QQtkSj5cJwMuusJAoFyozeqWdfn1BA2UvqUsVTzGg6ARC6Q9xpLvja",
  "key32": "4TdvczPHqneerP2mUjhzMVzSzd6fUyxFrZwQNGCVBZYp8g9f8S5UpdLgkNZF1AkP4s6xKSnRq7dEF2j272mafjqb",
  "key33": "272bgjhZP48tJiG7HygbjwE2UwWEGUfVaaRCV3thDZTTTjD7xtBwEqsfXJKwxGV21NJwpLVJe5q62k1RNwgCR4YM",
  "key34": "4Cd4kiZaGNJMNgg966Va7RvkujkbfVeX8pQzyswJu4wsCv7TQBv7KK5xbmKP7JbThfSuRrPELz258sqQ2H2NRykW",
  "key35": "M5j1nXSsqnzFWo6Qn6NhDrb44etnEyrxE76ho4oNdoNkEVJtjvSZ75hnBisa2GRaAkVyLP4x8nryJn3ZsyxuF92",
  "key36": "5Xv3qU8biZw6Uhpa1h7wz7k9L9gYjHqeZrW2JZUHwSu2CT4yvrYLCBnoAeFYdsLStAeAfHfcMM8UKtME9hQoQ92S",
  "key37": "4Kws5zdop5CsbjMtwNuirngPsQYXS2A1FDrZDCxjpW57yWu8jWu9R4At7atJ61opXEXeRxzMognQDACQsSPEkT6x",
  "key38": "WoLqaVuLjgyJUDyWbFEVJibZm6F3EaU747qwJMsDwFfXmsmJdLg5fNyoexbqfwyU2yH3c2iW6yvhbE6ogvDbZZc",
  "key39": "2ffMjheaoXJW6RRaScgVv9K16EaqdTiZLioVAjUx62uc951qg8iviSfzBDhV1ZfVbgox3BYfyzLfEJ1AjWfsphi1",
  "key40": "3DkjZpTSgiXgV4BgyHm5sfotki6LUQsHnCzEry2B51FzTYxXjznwciTk86Gne22YP3haWMybrApzfqQYRddFkTma",
  "key41": "4spJvr7P7BZh5BB8VEuDPgWFdHLgK1EYurNZrxxJ4ee9sF1CnLYzihj95F1gWPRf3PZUBiZQNBKmDn5n8ky9xxEk"
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
