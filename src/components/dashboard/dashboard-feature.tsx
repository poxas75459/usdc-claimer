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
    "5Lhy1giUaP5kpSAsnoJfWrJ5MFgc4rAGDvKaXdEKzJwy2eCr1qpiF9kmXd17fu991wCSnZuA9tVSV9DdqApSzWgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xMyRQksLPPJQV1LpHCy9ovEmYxAVvsu5ym2sbd4wNUmboysaXVBeQ9m6f5AGSVb7CEasJr54Chv3xM4yQZcfiUY",
  "key1": "2WAUSSgFQAQWtKTen7mDeyTPKxCLrQKNp6EfDDtcPQEtMNfNt4geC47bMjXtHUjZ6ULxELQppWz48cgNo9MqWMmy",
  "key2": "5zwdNEbuMwd2JKX2myTfC6BXgw2p99EqgQQDkhNFe6AVbNmits9AJy8nLmrqGpGWywt4LragjuDp7xHqWDegh1b6",
  "key3": "5ehkpbAb4tFCGgFMq4EJFvxBzPKT6dkr4k9jSzNVgKxvahHvsZWQ4n5WWQZ8hkyu1NZu61QtYDWCeVxKYKgmqn3x",
  "key4": "3yzYB8ZUHa94H7dgtau7msfWJSQUAFGDAWAxkFntDhkkTTHMJvKF7uMBZnjWonuyzrj84b4u7D1ZXQ8YE85v86BJ",
  "key5": "2Z1jZDzCYJ7VAtbL1NmBzP6VGTjF46bhJqUczN3H3rzpHSyizLswSKwrwvQXpC3bjL2N6dLbQAmnC1Ck4y5eEiLx",
  "key6": "25g4dzwSZcADHjVmCyz8zZY3CMcRN13ojvjxFJJb8jm1vGycc6M2TbScDKKFQCYjwgXsAvQjAE6Gj5cV4jdjkGz8",
  "key7": "5XkgTy9xaKNdpX1EMaQN7oy5dddERnt5wwJ3EkW8UKQvVvbdFe1wcDqzFRpnphdYsisQwaK7raKAYZNmAN7Vkeca",
  "key8": "5CjhNJRWPsPhpnWBAtCyqSXDGmMKkWAQZV4cibjdSA6XSAfF6acMGgZsoySQXe83xvZjcAq54hceV86DKAue8E7y",
  "key9": "4SBjzxruZ489u7jUdeYw7gUYvf8vDQQQ21rrDorMABvNjVJZoHuD5EkpDPBdEXrXoqmzvUFsN4DC3gRaVByZHkb6",
  "key10": "2TG28GExgqftvLyGsrjJna3pkDnjJ9UVpAHz5v6ayH5RzXJVkYj7tckkogLerHzmbqdDuYdbfL7yTRJYkbJrYgug",
  "key11": "3vJDjkd8n59aKLDH84EBdT7CJgpxBss65iy6GhCxQdzB4wBoYkNMnKxDaV6ST4ckJk6dKuYjnBLs1u5h77miJGGV",
  "key12": "p5xwXUThPGkzs2ybQWkaX8ueVAtYW2gZMGNvP8sNHLy8NrxgRjrTLGBHa5NfuzjhZNTAdyweg6eunZVcHZXGm44",
  "key13": "2vSHuN9543BjqCNRrcmWtwR5hyrdmXgHkcBthWz97AKDg4yx5arw2bsf1JaHUtSyAe52M5AzDaJGJAtXVpUm1B4u",
  "key14": "3ju5C1RSf7K4aj3S6tcoRn8hA9WdXTZuPpRXDDnLnbfdYuCNnwdxZdd6cULp4ivneSgeLjAbfMmhSFC6W6s4AQde",
  "key15": "31PViZfCrSkrwzqLivWCAvSqDrvw7EVfCi7dhScirabcVeqzkh3PVaNGWxkzf7okNHoaqW8dCJ4FHAzYnUCbVu3A",
  "key16": "3WQTHLXrkpkD7ENZZ3ciZcbPgpdCaA6jqH19BKGkcLDaQ4rURXkobuoLNioCK2ANBYBbEjWjGuEwzzauqQ2SYP9s",
  "key17": "5U65fbqgaZ8xMZ7vFFk7pzQVBzCWexJwATmUnKgxYAf97bqYVANEp1Q1Q88AQpxiNYgptPv4X4iJozjCT6irLYmz",
  "key18": "5tvuZdeK7MFBhU7bWjQMNFJxgTrnupe6cpGuHLh3rdn4yY5tj1555cTJsMmm6FvqK3rLtMw31ScJQYTa5oq1mzUe",
  "key19": "5aehJrXDAv3pw4b7Dz5VYSAnqCdVnrukx2eoGmtxUR7sPwYW77WDZNLWxsa2zC9JxDXBQw8Tbve3m1inbbvKPRKz",
  "key20": "QRq1qL2NSrvFD6DgCoPtiRFZvXjBLSzTNqCBe2T9oBEHxipvCS8FRb4ooFrkazScMWo3M9UCDsRvpCxVMEhi5fm",
  "key21": "DvAp5qtiTHWqx4rbppB7VHKcDGM9RyHqfdQEL6pgXvCmTC2oP7o7i8UXBnXkao3Ld5L6RvQuLLmihuZXjjZJL6P",
  "key22": "2MdpZqUs91EGADuBy8FbZfTzNNQQKXUrX4J8nLma1broM1hfAVXesfrVWEoCuVqCrwBUhNUdazysBWED7f8PpK9x",
  "key23": "4NtNZQgqd4oDpYe9cky1A9zqEvNJDd3uVLzcTCp4Dyugedcw2cD3W5FptPLPpcq5Bb8hPQu6MjG6m28z1WpTtZvE",
  "key24": "3TTgBkZHJHtCak37ho7rXrptuyknm9iPisaczBeUMNDoTqyVKz1z5Q9y4WXDqePVzB7dVUNpuVPeJqvTQrLwpGzg",
  "key25": "NGJxtdcYYucnFKmq9GoTf9u1RzXXRYuGyvacjn46V9SqNYSk2ddpwjh3tsS2KEgJePbm7VhYte7wL4Ad4QJecsS",
  "key26": "TFJFiP1PZfrjmLWxPz12mXG51KUdFz6QSaXqjxxF1YpmZyar1qLvHaeizKkQuGWcJqx38PidddASys952B2wbQv",
  "key27": "4bX1aVdRoZ6qeS7cCDuXCCQN8sr8CXma5K5tVhaqcZDHNekiUoXbPv29szqs7jE4yfQ5LfrkfLMezhtjYaUKwDV4",
  "key28": "cjNgbzmYvP3eb7gv8hrisZGUrSHAzNp56C9C4bwateUfDbjesTHg17Ae5HpxmHneUBeyFLq21R5bdBj35ybmYVw",
  "key29": "29ccb37ajj78K4A23SMdNXpRCXsrSf73wYTPm3Z44ErWYwBw6MTQGzJ35mXk53UnxuTA1osQfyckgS7PJPU2Daqu",
  "key30": "31SxuoNfCRLAA1vC35ymyCBSY4rmnxbVa2Ep66H2RdAxHpwYwHiBSQfn7FV8TCQx2iFSJZQv9M8waxoe3xTo3ZfL",
  "key31": "5npfqjgW3x2hLASFS3nG5BxPjWjiBoV5wbQu8epSqV1XcQ9rxdJaWPyVECfPuy8wjLASKbcbtmZBB8ZavXcvtyg1",
  "key32": "21wptB6tjb4yrWfvhyY2UJdXkMH35SxRcW2t1EA2d7RKTmkMBag7ASjq8yiYi7nKBB97T3wnQhTBUWbobaSfEhr6",
  "key33": "3tPJBdPpk5tjGA1CT3pDGZsR1bKcUoyFgHQdLMLTvULMdsjAAV57MadZL4gQj7nM8YvcT8ZeATgCb7MMyrxDDTmV"
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
