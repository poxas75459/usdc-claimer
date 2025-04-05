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
    "3QvubbRfmyhR7qkVj4cWsQBsRtEGGt8waCHSpd7GThSTXn1mn6LQqFijq9B9hPfAFNdc7jqJejrjYqU2dDCZkjiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnVpdbqw51aFr22qaiBAHzxgZ6grSpxHKNGSskxNTjXQZaHSaAfz5me37eWTZ7YzQrE9JcVRtALEkCBTYLsxVj6",
  "key1": "2gH2dKw5uSq2d9ZzdkuNNy2Re2824Mi4G7GP7Ht8v4aw9TLPKmHmgBYqw2kdMs1LgrtivNMpdobQ16Jb3mVGL7Tv",
  "key2": "2dXxecvNaVhUSBnDNAn1XyQTRoHSZVLMJYNpYRvuzjwu45MbwQNSid9XLpBiohcEW5KcbKNpPfGfvpzNGEJhaN3E",
  "key3": "4vmcdLahwbFfHv9VSaiGid82v55jdhhET2r9n7oHVt4RLWpw4x1Bw4DiQ7nTeaHogAHAU8fLguVkrR5Cfq6vmq1X",
  "key4": "2Dy1R35oBeauFwwi4kf36qxpNftcbTxFNj3TbePgmkWRqhA4ASSFidgYEKYdSo5Bt3yjJCpmBs6p2yRoMZf4jDuC",
  "key5": "3Mh64oXGT65kyL7uo48ETuH1CiLSPEhL9ANa97o6fmKdqdbH6UPmW1mSq2Hd86KgTEQPP8m2odHBHoWNhY1iLynF",
  "key6": "rkVXFhiXyf4iHkUkao6deiH5gUs6qvKFvWjTsVvC6eZ4KBpbw8YJstRxjbFr7FW8kniJ51ENL2wetoC3S3wW4gD",
  "key7": "b6cwhXokVeM9HwqNPcWf8NAx3YQHLuwWQmvH3akk6HWgxD6MXmH2PDXwQYDvktT5YVefR451cKkv71jb7u7Bh6v",
  "key8": "5NUzxk2Tv8SfomQi9KbFUfJZ5CJCXtRuekxtTwWH7MBkkd6HdZWbQiU9CGirxrnQzxe8uXH8692zrYWixp4dH1eF",
  "key9": "31vyR6Tm2b7LkCHvHRzDw31aEMMaGqKcTh1Apsb3NPNz9mB3ZwkoQFbvEGzkUL524CDdCW1kBhm1iL94mRh6fGtY",
  "key10": "4voQqvmPQmQ3de733qZj7Tie7Q8mfdMWTz3Vvn6KdWGtdAfm8STDYte1BJSfMoHhCkiKhrZzpqwKWWz7xpUVzCMK",
  "key11": "2Y4ig7CFzbK591d49qYp5EW77w1CsBMRoqipgCJiuZyc3446SfZ5goMfiLHyYXrmaipYYx9XZfxiA7rrRJ4x1Kfa",
  "key12": "3LcMv12QFFo8C2uAHTCQHjWuq3jdZEWap5kEuvkSoUcVpfY4jegWoYS2TVv4MfPgN8hKahneqSsnpvo1jeQLhP3f",
  "key13": "3ocbPKSMYE5LENwgvQSEuXfScwcXLsNusKn83cj43ZmESVUtuhvgN6NkfaineaXS4L727V9SaUhvzDvafYY7xaZx",
  "key14": "4Cj7gWWuchdcg14DmKRooMwYBsJkpGRWYm6i2337uM9WwGqDeoy1Jwd3KpiQdD6aZBNDKpeWKzkansozRxFHbVwX",
  "key15": "2TEgKSGPVRm9gMdZTBQnoCWu4TGV6hMyzYRnwWHe6Eyt9xqGZxhHP7pXKKpuyNsUSnsGy9bnLTxMydXkyfDepNGw",
  "key16": "4ChTjbhCgnQMYtyXGCyoXiBZRN4Mh5Ua6a6tHjB5HfjgTBFw593JeFEZ87q5Wy1TMFo9bD2MXXhRA5fHRRuzKbm8",
  "key17": "4d69jpQEAdBwCMbdb3fU2XaPJ5CjjuKNJJRYkYrx1eGsjbrebsXufVUT4HA8eijjH1h3AWb19eVPvXiHBQQyKLQp",
  "key18": "327edJS8n2swduQx4p6vYUJqqmRs2suUZEszDSrfcgMgPF8CBiWG47xc91DGtVUchyhCw4nFWYt6NR5XJCahGU55",
  "key19": "5giNMEMRmV5LNjuxssbrtoq2CYsYUExQvwQtAvLUcH8xwfhM6532wJn61CN6swATp1cUM5woCSk3csFLndz9jNmW",
  "key20": "5e6QrkTzR9M65dmn7FwpRz4wDLC8h38pfGJQPrtVifaZDS18wqJwEqY8cF4E75Db1Lr9gJtWSNNev1AuvjpXGKJz",
  "key21": "41r83R2oFQquKMyVKWBLgeXUPLpgogVV3ny55YUB7FKTntaKWWVzNzU11xWMg8ZAoJWRLNk129Yx1q2zzfwyHMtA",
  "key22": "2ESTnyLvpY9BijuFeVpBMq9zSSfN5BpgttbjBSpFXVzn9ADMLZhEageXqn3xdLNpwhnWhaS6ArKJG79iJy3XZbyF",
  "key23": "4kLaWqmSycj4AfDxd16RHLH8UCptYQaeKP3eVCgpr95sDPMDS7M9kKzByxwJkrDsXN6K47AZPp9xQm9pVqrvFF5K",
  "key24": "2GPwpdPWxgU2T7gDPD9gN1ynrtwPgXKgM2LxXhiF17iJvPXN8Xxa91hLRwpb8ZSS24SBaWqvbYfBk4MhrSoHm2fu",
  "key25": "mNKatBqVRU66BPjhAZbtMux25PYz5k5FnAZHtUjVDwC3FZ8BKtKkiaUydyiYdjE4FXRCf475ryCYkGSsh1ibCjT",
  "key26": "4GGCWxUEgd4SYPx17biDe5jomu2wjW8GNdU85VHBnWRUaVj4ucpXcG9RzMBbSRP4vnPTuyQPcnvC8YfSF5mUw1fX",
  "key27": "4QAGhueho4UHFbtHuR5m7PLS4raWmzeG4JxjxiSBSV7cqTSuYtTVR2p5Dyqz8vzuzeb3NMcnAJYdsKscSWo8M2Df",
  "key28": "467KiwWqPTzE32ShAFQWKust4PfEqoTT4tmkMhVNG8WuLBu3ysw9DrkpJBeEhCN5UGX9PbkgMNAMjymKHwoGAaNP",
  "key29": "Ni7syc9YFxZta6EbkM6nGize2g8uG4MJv9ybdVnpGD6jbAENd4fhgkrAQKJwCaz5to6VbeZuHMcu1vWTsdNYWXh",
  "key30": "f4Tnya4uHYqTASNsnHCddPMAKxXpVp8cRbzWTeJaQwAMt8BJt6bzHoUEjjvpPns6F4FMorSkhe64YE4ZwveqBzG",
  "key31": "3r4UZ4b5XbSXfrpopyKsmT54hqkqBm3oGxG9a1koEEJQQUyvFtYASYhwMDPZySSwbZwNWbf2uziteijijofHg8Jp"
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
