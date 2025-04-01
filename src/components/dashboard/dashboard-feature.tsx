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
    "3MzbLrdr2SmimkmbmWcPWwpZEifhTZPKyh4Gjg6meXKjf8PfH2obvGqvKwvMU7Fc3KJ2FppgGkNR4wpwGHQSugj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2im8jnhNuaXvSgCtH5zK8Ee8JnH81cEzbZnbX1he1PdGVhSnBiUiDPnG6Vu1S7mWVkrD2XSiYcZ9v5jd9fb6FAiv",
  "key1": "4oZrt4myKQx792oR2d1NawX4LWtP2bGF6Ft8h6nBUfX6swqpz5eVGc9QYuKyNNobhfbKhPogWeYB4YQWQXJpHqzc",
  "key2": "5f3gXSt3oiUvMH3ohhueABg7sEy2ZCfewYMK9rRDN2735bMBqjXuhb7KZKzWCWJMzLcHmyRehe7q65h4xjPcvbvR",
  "key3": "3dtN5pquNPM83qup4p6Z5SFrdKw5HPDo7xUQfSjJG3auxqM6mbCCxyoH7kk2LJS61CuAaNpSYTRymdHwfhxWn2dj",
  "key4": "5Ma5bXcBNGABTvEimczG6kC58QfRGtun6KczYZLMhQXAfWDWkYRuFYARPFDVPorYDpPhLBRNCwLNsuJskrqhLnkS",
  "key5": "4shPeHsyA7VhJoUFNuyDdj4EbuihJU3nS25nQq4KeaBoHRNskJM6282WgqmmXqgt2BJPhpktMmD1Mp8oCtWfgEP2",
  "key6": "32EZ5WDjY45ojfgRzdgyfVsiYnCGwn9xAF5ZJ5b268GmpVjHkbQdEQXhqGJ3wjL9ebx3S7d937UVKWRyCNa8XEXc",
  "key7": "o6ySitZaM4aCaTWGNnvc7BbJVttAnr27TNzCoYgJ6bfEk2sBk5HTX1FcDPB5cdqFW7K3wvWFdhbpNqvWdfbwtSG",
  "key8": "561dPVW5qznMmvo3WkdxoWuFfvu4HURfX4PT3zMGxKMer3ceDxaW6FhvpyR5JWHjfK2j8ktGPvsvLMTwtu1tXkX",
  "key9": "5Av7PbHErFHDi44yFBtyaULGva1NVZWkFDDzQezLo49kHRQYZZ3xzZhcUK844mCGNP2Gz9cMinTt6aM9tZU6j8as",
  "key10": "GiYGxnsGeMu5TKcvJfPfuhBrQz7krnUjS9gRotoK74U4XjC19fYRuykmKU8UWKg1p9QxwLeajMtGYZeNW9Ewpw9",
  "key11": "3AwFu6F6EsQdkPWAsXNbwJerruS1ptieqwB9tkuRVNNWJz7tcYYyJ577JYQbhPQSaVWNH7dn3TaYuZL1Ha6Uptyu",
  "key12": "UcxgB1duRqr8ZGsPJAaTJQUJsAuhDuZZek6G3WoazgSvtrrQy4uYzosTKQP4iq3tJtXDgWEFy4LWNXPFz3rhgCB",
  "key13": "5njg4AmuhvfJ4bzCkgv4XHEpzwSTMaFZWWi9jHYatmqokXQnjXFLNn5K9jtN2UtwoqZRiMKAHKqEXHRRDWj8F8h9",
  "key14": "Zxxpa8MzAR3ki7YwJSzpHWnYxdbrBM6FYQ9hGz4x3qNa5opk7iJ2yxZfsnMBjgLXfHV54mKyMf8YKc1gkf4MyUJ",
  "key15": "4xRKHdT2Cg6QUCU4iWjZo8JbSQGz4zWXrBFDRBWFmhNYpzKTUinDXpqNuk7y8qt7NzdHUS78Asivm9wWbQfvVrX6",
  "key16": "eesjjA8EFhwtJz9SL8hyQDanHDjYEVwfPYzu1M7NqcMPGsJeSBqVgQ1fpvESzZCjT3FuJ9h5bAoo9hME6jJ7VhX",
  "key17": "4XRuYytPxKQawBtCDpB2CTp8mCMCUsQYvz1eXaJo8kgbdYzZW6GhgiXkD8J1YcapiNePtCQb5HfZyUX16y4n6S1b",
  "key18": "26kyFQxwdA5L2bEjDCJabahPZZejU4tniiivsGbHE4oALr3kXUyHSYqwk3FqNL5uw1rLzgxvuHxrMTq9KnuM2M8t",
  "key19": "m7WQJRaBUBaLhjwEMTWieVofJT4Sa61a8HAyNZK8TKjjKG94EGjiDLKBMJoJwjnK665rAj96HjdKJB3zereMAe2",
  "key20": "5aasnfXgHSmdoy61rZfx8w14cchn5MA8A5mUkCNen3SDQa3Jjis9n4Bg4Y1CSckZZMEVTxZRnyaYjg5fDcWJBBHY",
  "key21": "7tCA7TqoUJDn957oz381s8i97CptaGfMJfokMQKhYuEkeHd4knJepbLrp2KfK6zQz8nWm8c5gNeqkFoHZ5GpjgA",
  "key22": "4qv58fTDb5GJfMqoWZ1nUHXXPQKrQLvijBmbHUkWAjXsmvsVFcWG9fWzYfjewqeUgmzASBTzQoFrcAdz8BkntF7S",
  "key23": "5u6pptduByazvPqgbpyVbxFTtK8do8jhm4LXDtvpYHts7MEPyrRFMCLVarKutob9Z3cNoqVFKFA89wDJa2uoTiQT",
  "key24": "4nvYQMHWQbbTfcaDF9GCWxoZJMb918DQbHoRdUQkpXKYQgzyrS7TXtCPdKcXLZnKCKdTtd2y7YP96tSfndW9YTBu",
  "key25": "3AqZw89QBd3VQ52tKKC1gtUKkSbSsdTpHtU7C5G395ocgRtH6VeZdcA6zULVeAttjkHPPAgHkfZiFHBL5cf1zCfu",
  "key26": "qQFmFWNYpxXbxjfigZkh2FcVvx7T9nheJRcvcfMDVBebYqK3HUJfNc5jnjHjLhMCJrBWnP42RL3fTTm81W6nMCp",
  "key27": "583H3b81vxcZgcPfiC9DKWjCevxtj8bJH2hCih4ss45jsHcvAPQEj1cGXtEwR4bLnkCvrpEWkxSrSdeDkCgYAbGu"
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
