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
    "2RCBetFMczfb9EaQQmZFkQc3NRBZhgQ5BkGUBhaN5JudXX2WyMjZsKUo6QnGULmicjHeLCNGeiBqaV3a2oLDkA3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K1RLCnaiNgcpJ7KhZm7unh3EgD2QYM8YpC9WgwAuXEF8WzHrwrEjFibUWe9cKVsjsFQLKsBjFdRzYsWM8RujVLJ",
  "key1": "Wdo7tJc5S1szW7A9LpUtS2TkjW4drwXHPTPaW7raLez2RGc8h3HpPM6bE2PMNVoQQMBuZWP4vZ5HXtMv9CFnNB7",
  "key2": "4ixgq99coxaRiH1GzMNwWA23Nbn1GZhFbNa3FYDr2TZtmpcHvj2SLHo6KVXdnvB8a8HEz9bgckGwEjpPqQWUDqa5",
  "key3": "2kgL7SeshbBUQK73wEWWtbakzC6YxEoBVUcjjAUfdtjPQXZE4iUq1ptyZNiFkoYkRQVYj2m2TWD61YCDRXPsaZVA",
  "key4": "njYNj33AiLtUE2qppbDn9xoRvyxsCewVZq682wAsPMzaPqayHMws7fEoitmRzqTcYQGu8xDhSoAfeppu7fJ8tVK",
  "key5": "5HWXnjSeRGWkgHVS47XDrFxvY9Via16cBTrcG5RHLDcVmF4xfbkMTf1aWUm5LwiUDJYR8Spb8eiam5WXQjSmmQqH",
  "key6": "22PfXrfDNGX5VVHx4FGcwf3UxHDcAL5VMkWan2HnzsTFPAmD1WshCAWXLnCCsPBqx84k7FC3Ft779VCxcFqGEHwV",
  "key7": "46sYovjbZvsnLduXHptfdSyPwdwHxzuNCcugjjENXLPnWpHVMwm5HYcfV3GRazjrA5GHbKWoA5dkweVmiavvSLNW",
  "key8": "2rjSvn8P3hAd9B2tqG9DGnyjUZB6okm45GcxLtVvJpR27ynqBMEZj4Nc6e6C2JJZQYX4H2AxJ28ZhDSucwUPAGv",
  "key9": "2ER6QVB49iFc5XS7x8nLn1ybsL2DqzxaqgXmis7mp1ssBpDsS6RXny3RGPXUByHdR8nxZ6vJeDpjmA3bxXa84BaS",
  "key10": "2SJWSh88MqF12QYgfQYyzwNiGpeZwu9FGzJRLuZbCEW6Fj5YkF8c1txLjGXRTUEpdg1agN7CG8iqLNByhJPUoa9L",
  "key11": "5CQfYcHTNTAns4ERNP4Yh8TNZgJ45Tpo5XvzRALpT88xxTrVpxZRzSo5kq4p6xZpBD4ytKUee79TUi1t63WSzjaL",
  "key12": "cFsAj3Ln7TLKiQGhzEqcehrU4cBb5jhEETS8QNjT8iUHFtfjmrSb9UDwBxUpzCVNNb6k21BTTr3r7TH75bimW46",
  "key13": "5sTEUWaeNaWW3L7niYoduUxAGn2ukTxC3Ezq9da545QvskGSnN61PSeuZD9ZvX4WqLrKgjmfdjX6vZzqSbAStNPa",
  "key14": "5KbjMsJU2fEmWq5L4PuQo2tPgxYWF4H9GTUN67jfyZ5d8TmbX7fD5WDXZWtNjR7qucVtZSgxWGSiaKQtnxh6t96n",
  "key15": "VkyxUihZ1C5PFVRjETvrCZC6VjteiePwBpyCjMM3SwCYhdrd7cPFuvfDhYXjw7RqLWx8RFR9AEYHuQSWLcFD5TC",
  "key16": "2LAueydihCsNGPqcA3SE1Q4UCdopPRTTbf1r6R78mbD9XNoeZrYqBLUXPWxLuvmfJwB9r9ev3ngqkBPaVfVBa3jx",
  "key17": "43nwg7kJc79zm8ZpkUZzj9hjN7qpbYf8NpG5WRpSBDeDaNi7CWAvQLFpPmJNz7GhQ9R1mkDyBvFnMrzgde2MBaaG",
  "key18": "3gjzM82CJXqpvtnXNmx5RsDsQd1ef9do2Je2ubCBDpiiyNaqaNsNaU5dXC4ZkrJvu9VAH2D5uCvwctbbugakKCmS",
  "key19": "2uNfVVvoEUpiaLcNQRBaiRY6nja6Bt8KLuDnCLKQDM3HUzwUkFoYquuj2JgxoerykvaNvBkjQNwnNYbRLtGe7bqv",
  "key20": "3UGFBv76vX4EoBBr28JaobrGNioQh5j7phYJjHQ9io3NT9PmpvPkvYBUBUq3F3s64TX9kyZ7oRh6cTWriiDdBeKK",
  "key21": "2AhXsevZCGHfhnfKw6Aq3obwMLav4gui1tUYNQjA3SC7Yow48NkLv53xpW9agbzFFMmSQiGbeffDsyrYjKEmu8Q",
  "key22": "3WUh5uLiXkb1oQrhoVMawRCtCmr2watcBRau214R9gDG1GNDxmaBS1YpKgczP2gHguMMHeRmoCU9wAuYT5gZguNb",
  "key23": "Rb9riqsPoLxP8yjbecWaky4aqwDdbHB5j1vuxGJdQQSL5JRAcEMTu2eMj7NYCm7eHDivwbMhT34jf8hvXHKBYS3",
  "key24": "3a9UhWWLzH8Qs6PuMt1rB9YgLv3W2EGJGm4Q1CtKQJ6ARffQZizEwAY891YdVkWPedvvUCvUSZV3sPFpDBTmUUNh",
  "key25": "5xKMTW54RNy22WTjTMgVntZFyxJTaSQ9WTUzvPtuPUPTLP9DVUJJWSAm9u8k7MM3hkojAVgH8dGgPJHyg8gySmsB",
  "key26": "59SZYHwmvkWJN2UhMfVK4aZCdJV8Qu8DSn43L5rhETN89SFQ7qgyhatrjBskbnFENFVmysfFZSGNom2nmxjEk3Dc",
  "key27": "FpdNhmLXk7R2ZPYx3LYkEbT11LZNkrViZAsoUXZpSLQoYMdL5GuLJMXbLmfrtgy8XkMFeDubXaWRX5UtHkcJmpw",
  "key28": "48mFbt4ZaFj9kW7BTbSQvLsNBUZFF14eeZPDapLQEDT4ZctKeEM4ZMykBcxno3V392GFyQ3YXTpE9YLf2JZc9Y9X",
  "key29": "5PmitijxH94AkJGW1cpJkCqX8URK9vnY6BrBDnc9D57WadygekRBAEoTiWrWH8kPGAppKdsgzhqbtwrwGho3k6Rx",
  "key30": "4zm8EEwbGTgyXYdE9CfEKvYKeUKypWnnoWVMgyUzYn6DqUvwK66nu9d6n3bB4daznP1nVD2fpoR6aNYdTsXtpGPE",
  "key31": "Eb3GbxtchtidSanD2mhfgK9F67epgewtXsAx1X22GQo7iwqAvConJmPhFSX1KMoMdk98M1Jx8ix3nwGthbUNoeC",
  "key32": "5NFxQ3mbzoLmR9HbBaTfFRLJXvZyHf6zVfUCfvRPbCbmwbQasD5ecFLwY4QmdxWWfucpTug5uxQTHitimS4aiQxW",
  "key33": "39C5UjX79bwM4ihAzjP6v58RDRKMJdxr6KKTnpcUA4NpLMYErsuTpiQj7aucYDP1s9HVydBGsLjwYirm6wbPjYv4",
  "key34": "4mt4YrWSEDCovcSJLDK4PDYSksTaX7YPU6kwbvQ5FBPmhTgfcWjUyZGG2q16mu6EAEf9gFekRTV3M5YVcuL6znde",
  "key35": "gdWGWrBG3ib4wHxGsVGhVSbYRCgCCbqhKNftc1kUC7cdGET4XukoGrvijoFDodMw49Gg9nV6BgQZpYg1gJaYouj"
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
