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
    "5UFHNpPbAeSKiZULvAyVesFU93nUYK8kZeKGo8y6X3m3ttSqXxAWWd5XpoyKjwvErtq5qtryPRCVUSC4dTSzKrRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A8bpN9fwcyZjYwhfpjVHayY86FBDetcDEdbSHEypqoQBa3eEEJtCCTPd7G48ZkB3A15Q4QMAZFjmzejxZ2LLEgv",
  "key1": "4fHMiLXM1kYhyA3VWz6fYC2z5w34WwQAWz6W9vd8TVJjmwj96uY9UBX2ntXCP6jaNTtMmwLpFtgtx6JK7KFSoULr",
  "key2": "4Hy22ZgJaHy63HpDJWZgjLEiD35VA8SZHK5rmMqUiBNVwSoEnAuhwfRpxAnbm2C5iFBqQSTuZTjHcbca6FLevt4Z",
  "key3": "5eByZapvu1n6b15qnhtmz1dztfqvECWDttx3ME5PhNn335wqsyGWe7zyJJbRUBA7d3Z1xQdHmYAATLcZVd7sBwNK",
  "key4": "2rRrqFa8XZYtw3GkcXcz4tVL6FRbnq3auzmxjj8rnz8U2M7tSK2etMxXLXkUbhCfGqHNeVGR4pFifyxfUzuB1zT6",
  "key5": "3sKoKieBK8idCy8zLsXfB9NZY9cTFqHxeYFEZ2W8pwZoVZjaqr7ZdRJbMcu4pt6mxBmaPyJyobzhJmJ5PX1CR7BH",
  "key6": "2tLFnCn9FRAL7UCBdnruWFJUdhVZoYGxbrq1UexwB6zM9YjxJEFFpnUGnuDBxRWHdagHeE9agA9r7zJPehjTEtDZ",
  "key7": "3mZGjT4oJe8uYPrckLs19PHU5wq517SurT7iiBpdRe9TVj2QtJbgbK1YKqk3gDY7VJrPa7SozTDJE5PPpurwu7Jc",
  "key8": "2CiuFA3KT7UHq5QtSurshv6J9TzsXxHJAC1Yz8ZTjA47GpALSesKK4eaRWzub3DP3LF9VAbRdu78JRpNaThG9DoG",
  "key9": "4ZZDnZSQbUPjVrc3rUPuhFpLqTWjMF5PBqpWWwNpY9QvjwZkMivNXSM4kwDySX7QKamxKuhUgbeCoGLw524LXHd9",
  "key10": "3PbMUo55FX4MccTHTnumuqCoNCYtWy2Hx5QKrZB4D1NF36HEn2zwx4xuq3WC8gyXkL9JFEPvcGaGqiM4QxJSsSSv",
  "key11": "3c1MnxYxz8TgD4H8cBcpZ8GQhaKyJEfGeAfyFF5ByZQYNSnUmKZ7L9dG11i2UFyQJFjPfQCeZxgGH8eS5YBLXh95",
  "key12": "9Y3M1XbX9XjZD1ZJoaM2aU9VaE8YrGRmC84QioqJR66zB6i3Ej9EWeG5hR92qAbHXdXqZeJwLsNboCnPX7EntuA",
  "key13": "2s9rUVA6yTR8zJHwGsubnraMcmH9XMyp88ZyPHRQwoxM77g9PbHi3H6fvQ3hSuuSE51x2TBm2cnPNYDAPWa9Rufe",
  "key14": "25odP9rgXVPY9xNnWdT5wq4vEQN9xnPSmcPx2wAbk6KxAYYysunoYFKoqKvqcviXxotdWXYNKUnALPtE8zzFuV7E",
  "key15": "3mMyQsALGCLQ4DMLMWrFGPuYggnbdU4q9HFdTpnudPxPW8NiYBj6y158AWBYUjhVypiDwbGvM6HUy8Q9RA5X3axc",
  "key16": "3qGBUpSo8kQLJ4CkrpgSzysUrwiJY53eRwHaSFG5DCArHvE5d597QTrEt8GufnEVRMztDBakhWsrawN8GYgEZFGg",
  "key17": "5vJSjwZPTnPjqWU5gogNHyEHUQXAN81XiMmhV5F6mG5UPrLfpdt4ssndojEKptXub9DSTLo6REhaXihqGRRb1b8J",
  "key18": "2RLJnB6NXH38qU44fbVHeooGokyqEYJHurgzhBTpt2ahN9NYuJxpU5MNb8tLaDYSfjvw2xA7CEvVxui32xpbzutZ",
  "key19": "2p613B1hmMHqnuCzfkQkKUckpQFhcKquDvrzgSFi6U9pgTJNavBQc8xfy4e7CeBPGWqVHVVraEj3UGQerzbKvNp9",
  "key20": "22pYuaq68uiqRs2j17DzNAg7Z451SomxXeFdU4yMjUQ9iP7eqJUtfXZFEsytvS1DaQoMV9BxecozAKBnnSsBiFi7",
  "key21": "4ENo5DZh8WjYFNUJSeFRwJXUjs1iZzY2eXYiAEK9y51cN1ME9ziqGG2FHaQbeqW7VPjmzRGCDFL1kqLpb742q5qf",
  "key22": "gc6Jpx3agJeTNvub5G5PGdd3fdbcGjMtsdqz2HNM26PVFCNVARwowr3WRntTfUuC1JKXx97C4zaskWqVK3gSzgF",
  "key23": "46YbSt6TcMCW3fcue1sjuZYvp4kqo7X1eGMarLXvtSomcLExiz4rGEuwYEimWFaqBLfwb7yzzdd985FasNViHJvM",
  "key24": "5jCYccJA2ZQKvs1F7E5hHv86nvnYuNoSYvLEhyVKCkwPkh2Pb9K6zj1dFLUFpajjt12KhUFEWGPRJqWTjGRD4VAh",
  "key25": "4vUYeHK2dGPkbGAfsx9oBNucgQUfeUvGRRmGgLeNdYDtsRYBwsVBELFC6LmFDd7LmJDtm36yyFevp9nHxMdXAA6c",
  "key26": "5zdYTBC3Gos7zPhLTUB5B1Z6vr7BtRBCrJck9DkKeFKQWNW8VfroVKiebayCBskvffKURk9vgHFRkYXyrXDDZu1B",
  "key27": "5DRQAAgeUtYTbGeVtezAxSTFLXz4TbtRxGG5MtgszTFrGYJyD5RFtjjurRzXhVFhx37jN8TpRPm1DdbB9ELS1SXo",
  "key28": "4eYc2HEPu3bMHmRJ5BCfxBb6j8i7gXZsqsG1jNGUdLCQonoxYsuGevw2KPRNvNELHXjQYR9e8X147Scs45UPhVZj",
  "key29": "5TihJTiT9EEWZt5avtWbTM7XNH8njc2KQKAE4aqtY5BC2pb8K69fPCowVpZnLZvrniz41BL5yyg4pPTFUxfH4oRt",
  "key30": "3R69z7aDAihVST4LRbFXyXLjs7SzgXg27cLp2tobdf87fmJMtQiMCDV9n42mFby9PvVy8nrvcUZyyh85zWjC7AyJ",
  "key31": "3xhsdhA4J2nvSayiHUii7bLyFV1ou9kTLyxySHvSTUEEnVxRgPsZneYdDY6tWFEqYGHxUmK24NFrr6XwYaiSBmVi",
  "key32": "4y3k7dboqbTkphfsvbEpvei6zRSpPnxgSonHAwLw7wmjQuZzRMRrXz4243NRrJ6Km3EBz8TxwNn6KFLCNW4PUZXk",
  "key33": "5CGTEZKtkBhCiQcK4EpLfn8ApQaY2pHs6VcrhRv638yBUaGFR1zJQiwwb45gWxi5g52zyv8LPrTDzwDbfjbZ4yCz",
  "key34": "GRpLEs8j9DWLYjunN7Uu5D12euhPnYGgyaYwYKAWDRKKQ9nFySPBSTStFz7ef9ps3aEjchUPWiRUQd2YKsyJmGM",
  "key35": "65Y4bt1KvW3XTA3hHAQeKDDuZcapHjXGH8ZrFGBLqNPs2UiHVWuDwps6tBpV5xZEJPT2uibCJXuUjh6BzCsJ3GxP",
  "key36": "3vksmWajsAfShXVpQcL6YYeZBLNBnTEbfBdfGGK496SrvKFj7rbY43LmJrekR568R2Y9MxizeyEBcPq8SGZ5AEeP",
  "key37": "qTz7M4f9hpYEiaBPshtn9bsbmvvWxFfUwkrF2ziT7CXu9pH139TLF55ewsrfVvQx6Ybb7XPSEzxMzJmxzEF49Dv",
  "key38": "3ArNnLinom5UdMwnhHj9bvAiziqVybRcHg8MSjFWL4H3XahnbigyW2H6QSru1DLDpETZkVRwHjLWJFYQFT7YKrrm",
  "key39": "2m5zcEx4ePazFukv752BxHMgmJ5Np7c3VZsXQyFk134ZUo2iZXPZGGvXuFNBBGMSLbMYbAyxH2KrG264VS8BCHKH",
  "key40": "2fRwH9rkF83mtxPfgHcvGmzR4rCLvoB9XWVXXGrB186uWd2KCBSBjJ56mrjYdBzU3RGNURn5Mj9JuTfj7XuVaKQT",
  "key41": "3kKNn2RK7WmdSJKwcZN7DFBytgyZooUqx7dGByJExA2A1Rhpe3QEiL953yKP1aCyVSCJS1a3dVKBqy9n2oNvD6J",
  "key42": "559BUeeRoQSoiVUGTzqjRvtrsmZ9XeFczKDpSenqLXDwabZU7xXDXgmgticRKKdaq16PFFYchdRGdhAJAmRL8rbs",
  "key43": "5AxedLvaBdEUmttXGZDNMJsjGZ1rMWGaxs8KM9rCik97q7BykQ7K2Lk4pdq5PxrRJEn6L4tqearA5ch4nfpkxnbM",
  "key44": "2nvCNNwGcT5AfA9uGcDLPwPiCFVbbdubVcSXX3ugX91LLdGHtAdVmYHi5yM9D2mHeytetz35mg3NT21AULThPoks",
  "key45": "4kbhgyqrk9miYr2hV161m11rMHAR53zUVUzVYWmvzQouqJWMeqSv6jrXcBd49FjXs5sBVTZakMfDVbT8bWmjFJBn",
  "key46": "3ozQrrSC3Mci67S8ABJWc14KQiYSqYEy9C1GqWAxLZ9fQTHcRf52tJ4Sk8MonMStHYscS6aaCwUtSrc4EqnFHLF6",
  "key47": "4MUPSQZFYfFcVkAoCGRfRfbN3eHx3TaaBRD8v6FQ1BAb1idwjZbtgwp69o463t5K8XuyocAqRmh5BR2k9QvAHUnX"
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
