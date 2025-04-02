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
    "2L4779t3rNCPD1kG1BcFePtU1xRkSrDuHCks3eQxVjv7kHQadKQgGRVDvjhQ5HWBEirh53mXmCRtMugkwaVBKc9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47KHQJzTVN3We7Kpxm2DNVJcof3jBGKKXUbWsfQHBQUCTZYdXtAHax5WXrkfP52v6titDcSLvxZ5oosJnNhiahKq",
  "key1": "r4uWt5BAwUuL9RQoCkHTeWm8oM9kLbmy9pyvfmSdGB6sV5tLRFnMbkdd4vTTngffWK5w3fMVL8XrMDriFZBSLY2",
  "key2": "LjFYrMqn55PNewECzWX5SxVZKC2G79RFtLETfSYfwZpjWXMTmCrLNXe6odt3oBLwen2E1u5ksu4QaG9affbomgk",
  "key3": "3PfSTSz9AcTdquBMFikgE7bLs8K2M1t5G5buGZN7coASdFxmYEDerVzTvrHhrAvCbwK85VWTZqG9Fp7Bo6usonTR",
  "key4": "3vPnqBC4HCRnnc9f8TCT7rkmUCs8Y5mH6hEsQHMXhvoMXd3soypAb4CGK8EGSNCUuc9zQZmGquc9RJn3nm85aniJ",
  "key5": "3sStcFgbuZk2ZRGazNN3b4duVP6Uar1rQP6dds1jB6zHNXwHnjXCs2hPUB7kKpJn2WwvVAzsX23V7gY9AKLLW17B",
  "key6": "5zBKyDnniurp3CHW8manL6tdMjBqMu3WjbmWr62AQwJa6JHwfzhH4xEXihXZ81FuHbb4ayou3KbrXiAYsYw2adMW",
  "key7": "oVgpTnUTMvNUR2MPwmhvGLCDkTGpkh8LQoREd3KivhABju5LhXYPwhqkgdTmkAvbUfgQdb6XiKUBmTtpYRqGapJ",
  "key8": "ijP4HNqbK5ZJUJxqmcpd3CWZYJ16K5W74ixmwMmGbqeamc468s6MeoR3rERyaTxyGx7sBRHrBvGEPUdHSxb2ac6",
  "key9": "36DjrpvsiPD76w2GRCYVWXr8xS5GjCjmuaeZyywVjn1u8GL3mU9VEBi5bZ7gDSfG6QumFfNTya6vrsmWsh2QdLrj",
  "key10": "3yjgUGRGTgoi91EsfWhp4ntMDsxUJ9xQN5gD4H2AXEoQLUwEWdBbTQpnvJMKMdQ7Y3KTGtYdDbQLUMgwgizMZyHV",
  "key11": "4CVqvCdVLjeB8tK8sk3LZD27qhhiyMW2vH3ADVrEttFxu8jJgQnGfWrhfRLpwA9qgztER97bhP9zNgm2cfHSWmCi",
  "key12": "57cH4S1uYwvRkxjsaM9JcDMEWANk5EyRLN4NCHYshS89YUo5rsGwssuRttWtcQJisWSW1UsBpW1PorN6BnKQnWaf",
  "key13": "4PMZStNwSpyvTEUexjATnzR95u57QuwWJYg6WSMPvVYPCJcMqU6THJoykQqVdRaq2UXyoRY1En633MzCSJV3tCwe",
  "key14": "hWEqNNxw9axX2L2sJARUwTXU6i5u6Uy9mZTgphhXuDTF5aUHrcA5KtHT5oeGUjJo5gkUUWSZKiEuJFQZXwjnVNc",
  "key15": "2kcELkcwCKprNXjJ28MrQitkZELaM7aKAsjDRUiU8Mn45LN7MU5XjFgWEr4n8YuGVaVaHibYMDxH43dTWYCubRdf",
  "key16": "4p8vuxeen7F5thvjdSQQBKMiZWHVuxtiwH996p7Y4cZBvPiPwM9vAmGRXkYqmFnHUcVdw67vcqDQkczrhRi86PrU",
  "key17": "5RHWkZzE69nY915Emz7ZTTCxLWtgay1o4ZaYuhACci1VKrXZQnuz5d4eUUvM43WRCLfuhQb1JG431Ew5qP8z3uFd",
  "key18": "4WL7qGCbMFPqWPgFsp3ZStEyfnGnubJSRKCHCHjNT7VbNeDvURvGQ7MywxBSKCLjZ34SakPdXCf7QCFqUZLscDjW",
  "key19": "5P1romvFKWDSGijWkbDmgqYJMZxpy8qkUtiNRPw1vs9VoMk8CcKos67a4zcmdQUn1t12GhbEwTTZvtBcHEUYfgPV",
  "key20": "2zhLrpk1KvRLPUFvb5nqQzRV3SNqWVdjeM6mgga1ma7Jg4gwdi2pWk41CFriZBbB3RgVaajtUmvmNBD6k9bGqxVP",
  "key21": "3wPqS2yp3Zphz5t864qs1ykr3VzGXCRqajXomEztpz1RcMJk4tAE22KUz8g3jkrR6gxzcZ8E2yosnmP3chVLeqBt",
  "key22": "3oXz9JfzSkKZS99KNjzopBMoYaxURwKVr3ukJ85HD24kebWtpagm5rtqr6fCzDLd5Vqu2AT9HjC1BCE7J6BXX2nr",
  "key23": "7c1tsEx2pZRg9mUFj4FrSyAVMJ7kEGodGqCSvdarApRW4xYTDW6wLrD3hdC1kNFu8HMGhuD4iudRENjDiK8Vpsu",
  "key24": "3SJ9Gth8YSkdrMUfu9x3kFpQYn3qUSqUK8UWsjfSRwDyYBNr7h443U2ZdzJrJWEQ3b3WuFLrDi6YTGa3mUzmywCJ",
  "key25": "5tATQV32sRL6LmPWvqt9XnNSuTtMaWXfdUC528Ac9pw8r8YoPAYGZamWn28iTiohje5b8dxFKGuea58PnvTCsLYs"
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
