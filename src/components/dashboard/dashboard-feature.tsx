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
    "2t8ZanHNdK5EUSJVoWPc6uAzbamfDzywLbNt7RsQhk2LG2veXz9P1nZv4sUKBcKVw62n7UHSzCRw2nUjfvQBKJjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e8cMpZM2q4Jkcs3gK3JooyafsNHDExmSZH4e6DVyxJAb1YT9sJmmu1kiVEqqJzxSsm5YSfDb3ecbE5xdMhZE72y",
  "key1": "419g4PXjrqRj4vFd2ovYeZZwcC8bR5aJf8QYrGkbX5x19DkudkzsCMyG28QAb7HaXMmVv2GJZhLwtBBMm24ExN93",
  "key2": "4xqUJYSWwJskqC1hgN8x99xV6CWeDNWPTtBt8uST5rvfUv5JdwfjbwkHKdoijyf76rmY8bhJ6NHBap5M4UoLrr5Y",
  "key3": "5iswSpW6reGJ1kBribXEnNoNSVjmZ4P8HsLcMBmLm2eaiTaNATcBVyzEWAAWpA1Tpq1bCFWCr9Nba1KmpGnfRY9r",
  "key4": "24cv7uLSQYGrtAkdZH2YC5Y4cEJCgjPMvVNbkrfFF6rg8ohVks2sXmE26emHFzF31AFb8Z9N4ZfUP2pTcLr17kWr",
  "key5": "27z8UR5qgPqS98z9eSLKd1PLaPQLpPSQ8ojQ4aUFQa5mDGp3FahTLU2M6qqes9ZyKgk7KBYzpDV26PqZ7cEJ75Bu",
  "key6": "2gF88Hy5pEtQy7yXxij5rznhzWBusNEFD1iea1MW2cxdVvwXQPotqP8U94SniUEonaAreMHkD8zei7A5k6SHimi7",
  "key7": "3efcFsAzDCtjLtsXH3Juxhq7dyaLN3aBShGe3Rie8NDU35JnxXQoNvaGxwSwNw4J4uTvsSq1cigwJZyfsz3uTFg3",
  "key8": "d8NQbwwczH7ZbTx65e26cae6xhovt7Nc5P7hGg6XwbQTYRnGB994fAKHN1eG6YeUyW5pvUT5Ezk9hsioZ6xaHBG",
  "key9": "5EThiDtYaaqihK9NM97tY8CM65U7jGrorEZJC1wbo5nWZqK5QNgdqHdJUtmDPzv1WJGyz8eCw289x4CDMYbikVqN",
  "key10": "5dsqjAtzEgzCeL7vQtsS87GP1Gp1auw3LEcTgjE9i8UyNkRucQjoUaHJJwpk9aBr1YYh5TcB8MXAxywhsQy5oHBb",
  "key11": "2y84U6KajstvxV1ASxkRK6SxtUgyw5jYqF8KgwczjqUDdWa9haMb86mk7hdLk8wzA7CiLdJ4Yc28nN11xfexjkbS",
  "key12": "3os1rJkuFD1zqrpV3zmcK58zd6qa8aFizmMkQmMJj7VrjoaGEjvRk843Wn4D4oTkMu4eQiSikapcSNjGspJF5QHY",
  "key13": "27JJXcVNqvnDNm4UvjkBPnf3r1VJFu8BQ7p2nVcjEuNovsyJ1ogpMqc5UEP8g53tQzPtWp3mTbcvK3jwM7n5aS8t",
  "key14": "4sYzqNKbQPEjmJsAdX2zSH2g8oSBpF9XcpCPPcpj3UqUHd9qRibMa9HTfTDFY9CbLJP4gnFzDszzk9U4ju4EE1wq",
  "key15": "3zZ7zdntBg435FnEG7cB2h16UvaSMx7LeMRk7BKygzi3CKamB8fJjLfoSbHcHstEYVAAs9YgVDwFcyyj19mq8rfw",
  "key16": "3cUb2szv3k4fCKAyozEQqCuaRpWMNg4vKbSpGgxcHRxbKmgAaaWp3177brNhGVMvhn7XgvkH5Zhtze2ZArRtvScu",
  "key17": "Wue2Lxvz34mhc4kNsA3yPpS2TEeMM6WyuhxakzmJYYhpyya1qiPvYVmPXtnYUhH9Lp9QbSRUYRUAE13pEtUARru",
  "key18": "5AQNDHmavH7528DXzU9sKY89arA6vVofgVxa8tUWwWEKsJgTSpGfmKV4AquhgtHihKSn2khemKda4ALWdCj3HxRk",
  "key19": "3xnerCf3nSY6T9xKebGM6YF4X467S5pHR82uwEBi6dPBVUMFPDsVRBYPP6vwQRaDoGBRj31pvndRP7CoWeie77mS",
  "key20": "4PpGcggv55dinPFcMm1Bf1Q9mzBAmM9GEEgrNhPXMQLz9WR2iwqa6pnf8SzQu2o96Faj8MnULWY8cxYJ1mwRE1Qu",
  "key21": "4knTZHN2fFiyGMcz3y5ynZEuKRYDrUYjq7WQQg15W1rf2LjE2RCBrbY9wC6GJfncPWuGZgHd4CExqz91KTUS25RX",
  "key22": "4rrfu7eyvGEePH1GkMoMG1DqGA8cCxdWNVejuqNfkgNsVkEHmspCvSrapyyGymq97Zf96Y9HmZeFwmjB22BJY57P",
  "key23": "qkAJ47MdEPdDwA3aWbtrmN1F4fg5NAUtUfLiViqosVGRzqF2Tqmx276y2GBBiMJYmipDvuXe3jKHcb8mY92cFgF",
  "key24": "jNa8p49iE93LvDUznhkKcmjvqPkKoobcEZvc7ZPWBuhm1z7HicZuP5Ez4DgkFAp7NHgRDpXoWpCS4fGo25d4G1o",
  "key25": "269ZX9Z4NACBQxBfztkzuMioHRmmxAR8jHAQCTRXi1eZhL7X5ACEpEYJqXo7rCF5ZqfwUpuCx8UbTXxpaLeZ8D8m",
  "key26": "4TivJ5rwkgtr81zUxNQoWVje9iFg8rzYNrwn8GhsPAi4GnQJQngy5dqTwg2r1A5FrvrZ7Djz86roAVre3UfNugQh",
  "key27": "4jvGp8hn9Km9TbBErCV4oYDsMZARpmLM3TZG9b7tZyWf3tgyNXNbdypMWztaqC7pcowVRpXWnLiotRFa5G4SBDjy",
  "key28": "4dmsh2QNc5jredGDDxDWhgCS7k8piWTDcfo6Li9iTLvD6uGL24cD3uCuH3qJ3ygb612zZTjRnbAvs9rJBA3QLb7u"
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
