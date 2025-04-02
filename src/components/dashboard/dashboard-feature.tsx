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
    "4nZjSHKPsFBCPTVk5LQxmYLg5X4yFXAfZpPLakx7qssRf9DxAytErn9FhgYrchDq5B4ZbHqpuk7iDGVPTLVqJSQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4962xEWAeuApcno93ZymHDVMtELQMueZyMeAimiGvW6VACvokQxXFR8sWwFcF9ASsPEH1ECrhDkef5jBvC9nMe7D",
  "key1": "4gtEUbwVRXaunjRa1GHbeia5Sj4zznHxHVyqp1RyDZKmyxbHFZ6Wiw5WpCYz4VcoDQEpwxMhCczaMpGtmfL7vTDU",
  "key2": "4HhHijjkGsm9UJXdFqwqvy7vqq2hMUd1EHMabBa138Xsgud5m9MPcc85wo88iA6BjNRJLtskbUPvfpJRKojfxh5Q",
  "key3": "2uGJqrnmmQwXydK8Kvqh6kFyLe6WpjASt8WEVFYcvLqEhdctKtxdvPAqKQtYMk8zi6jfDPGZSFT8WYPheAzLp1ZL",
  "key4": "3u4CGWTLqPmRZCHF58Ai4CPt3YUK2syuzn19XhVCJ6bEnoBtvJ1j3z2vZNDWvwsDDyKCFDBGrVEPT1K3CGdRQXdj",
  "key5": "D2xP6LM32QyatL4d87A5hkdY892sK61Wu2pzSvZ1phdsM69sX1q3qLACLq3iKjbWQ12biayZbBknnV4tWsUpMfz",
  "key6": "4bSTkDxNY6kyRTfgBmiBVtVYBfZmWeGgbq7ZweY1obwjDYwwidv2Em9HBhpwKbLprDWLCcB7CzmhHa1zsr813W22",
  "key7": "2HbZhvwj5mH7Ab9UB86BgPvohLoocXqZGnxLKUEWMrPU6h4mX3nSjrjz9kkmqw3rS49WduNyMoHKhAmmPXDZ3jWp",
  "key8": "3Lczoe4wKafeWhKEmLr9muPu4s22JfkyMdrGgF9xVXwmKZaTwhJY8Fd37tDHzFYZcr1pgakPkXg4DWv133oPSbuM",
  "key9": "51u3Suuefx2rjC7QZpw2ieJpF4wiUn4BrNKS9g1gMZzp6AZMt46e7DBtYPJHLrTyQMycy5KC12skahD16jKp3iBB",
  "key10": "2rdnEJPc7PURX4rWtLLkizRr56s4iEVyxpC5jyJa5Loa2iaMPwBEMSS9ArQFYLUscV2W6pJUsfftxznMyx9RnkNT",
  "key11": "LC84wSfKMD546reXcUFAexS7Ucxzx5PXS81VUVwCTFxoQtShAr298yY5sJ54L6fM57w8vbaUfaYD438qhJzRBy1",
  "key12": "5iN5iYyrcuxsSUduy7yAx9zsnQhqou933d232XngTCPazK87dxqJSPedQUaiUxoypfSFp7zZZToqxRW5txd62h1Q",
  "key13": "yN3RA3hBKYyswaQGeFL6wLc1J2W55wnCNL3ciGw9XFdVDwdyAKppyWo5BNJsmWoGPw3CWvAK2ANx5sbaZ8tKvUz",
  "key14": "ZZde35hUVVo31r7n5WpoDb6nr3fnKGaSykKmwNaC1RKCBeTduDmgLgP6XnLES8xPwTajJCyBL52iAqRUwT5sTAX",
  "key15": "441HnLsAa85L5CNq3kEmzPrKuC3e2aZDu9YKz4ERMEoMrZRKGqf6t5qsxBcjoRY4ESLGS4ndntq7uya6N1XANGDT",
  "key16": "37a517ovt6FyAGkXbiJ6C2csoxmJcvvXzYeWDVjnhm8R7wLAJa86Q5ACmjnCwC2Z9qQJbVcP6XvaK9hjaRXyr6a1",
  "key17": "4pSkWrnjrqPvmUojHLaCW6DRYyVBEA7hb5DxU8jKc1CFYxJ2CZQAjREWFWqfKg9Z1152HWSx1d1pFVsMMGedtqx",
  "key18": "uhefNphX4R1v6paZqLxCfs4L3CVty8TzPrNyz5E8p3uNRi5LFiCkYyW5BuspbZQC4PUemUg2TZ6Bssytwuv6wrQ",
  "key19": "1VQvfZxoRYBtWgTdXPd1FFT9ELR5EfhKoigUt7coUf1yvpWcbYDmghwjRQWkRxVPYf8VewSdQCChLu7iseV7aXS",
  "key20": "4zMNJFz5Xs2gkm9LJEYMdryRvVxVP2ckHofLYhZYa9tZS9KN5ZzJfmL7h7pgRcrBdTEC5xx5KUmf9GMk9ow9zgAQ",
  "key21": "5QT4GghMfsHjrwXmringnaDHaQECh27rcxVZsy8gkeGj8LBh2ySPkJWAiS5JKissdHrtGwV8L8jUVsre53XnXxRH",
  "key22": "4r6q266LQ7v2gV7DWsGrTv3Xmk1XFFnrZe1Y54VTcEBfd5WzqDnQdv4BHSkDpLyXKTA4ZxJUdEV7FHs9fg4FmsQ1",
  "key23": "5Pder3nY27aqwPQoadnPiaUYeecLrYKrLQytUnbZmKMXWy4LDKsgdxAGF5FvCmDd72QkDEYdvfqC3UbTvafxHjdu",
  "key24": "npjQw6REukVYVBBSew5YFAUUbcV12jQZKL4fSTMXdUSSL926mWUioSxWDbn5w2yXSPpDY9ibbokeKqDQv3yMgRg",
  "key25": "4o9FHExPeTmmXSVrcDbMB3ptJcGSwQgHXh8fsZEWTv7dMaSPkTFVS2H3qcFwvevXH2eUFHE5h8HRKvXbN6EJVybi",
  "key26": "4uvtDdmUy68CdQNhorXSYx4baEmpW4KRuGieZPc1Dykgnx9FbnVaGkpQfXRsd3V6vdxEemLkKbKoxLZ57BJs5u9Z",
  "key27": "2hPfMvpz3gQHNVsQoSL92fk5x4w44ajcxrCFEyZw3dm36arZa7B4j9bWs7vVDbwLvbCAhmJMBjJmrXRswhLgeqBQ",
  "key28": "5fNB8MWwzuwHoqnfmWQCDmDLemvvQkCodzapwk4rtTCkuvdWJKoepTMd2FbgU56KBHAQyQEimC7yx1VRsMRi5PTh",
  "key29": "61Nio317AqpYWToMXc2JPmZWbVLFs3qwHDpajWH6hFQdhQPPnRnQy74rEdkemKni7VctfxgK4zPtSRfmXDGYawWS",
  "key30": "4zocSzZnH7GUj6vxkEQDNzWAeL9STKPAsQEjP7VjyRd1euyidey2XwWBEGjv2CUVRrb6boi6ScsXPagbGmwKjXXn",
  "key31": "53pC8pT3DPbLLmQojQUVbmdbWfRLasndztEZo7ULVrHwrj6xXVopF86gcUhDSCCb6NSVsUx1G8RB7U6N7CuJGNcs",
  "key32": "5QkY22kB7Ka62SvrXP7cA9Qx3eaFR4gaPeYm6fL1fF4Advix6rHke3DTGdmBysZyugYbQj8wvxVFp6Q8o9m5Xj2j",
  "key33": "5FGUKdwQDd4ZPb75QiiNo79ZnEai1LUoZ7cvCUjhK3Gyw5MCaqdnTkXX69PHjXLPgDupZQztnTPEZWihUfbabt6r",
  "key34": "5i4xWNy79YEtFZm9WyZCgnCiz6MiK48bYyNTte1bbaVi2QSZjeXAbugsEkbFGrFbQxx5CSEU4X3RaY4es9EP8Shw",
  "key35": "4fJoJVQ9QaRRhcPB6gZ6vTfpmkbnm5feyRqFUG3AWKxqFh3nij6jC9rCeLtzRh5fzPv41xHKjZNNTEDiKV9ojPbM"
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
