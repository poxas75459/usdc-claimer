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
    "2nRqQviE6UPcKnHWTSrPnqba58YqTrZxd6E1UTWAW3AWBX2hjmPg5tYAdN792xEH1mWB8w9Nq5pTWsQSC5aboh21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HyCUdkgtdXxGmxrfR8zj8sSFNT3sGMYFWwCqgb8xUvb5N7HxQ1vTzge4Yka4NDMFQjABNqp7An3N35iVx5Ue8y",
  "key1": "4gpL5Upzjdfn57cGgsybxJgREBMHoCnTs7nnF7foFx7tKAziWbvmCMGKtcQrrAUCsUBJ6KwEwvvQmGQvascMT4S5",
  "key2": "3xXZM7R43zgFcFU5Asqzx29i6C1DCaqecC6uMWDP8JmARk3EPWCYhQPX5pj6szcCEe1DrJewpK4xPSh5DCPEpTdF",
  "key3": "2zNvveesWdgPcHzhdYCDfwUDNWxcRDxGy9a7V2N8c77ueB9Wzd4mHqvQqKTQR2TwGyqxQFzfiFfBGUzhS3872jvp",
  "key4": "2d5mFgmyb9VsEcqUvueGpSs8RGMQSA1n3iJ2qbPuo8Qbt6yE9AvJbJ1egnMhRCzd7AHFmtBtvaz5L4f1UhFDFmC4",
  "key5": "55KSTWmxSWjAGheYquHoQvEtnJG6LbK7Chtdro24iv4onrEj57yKLdEeqC1S7TbZmAWgKbRvySMRYU7MHUkLxfai",
  "key6": "3iWbDdGW46k3RuuJiCuSeWnuQCh2JXc813xoEfCWbZsMpHSAvwyirEtd4xP7e622mCPpVFxzjHmmLjFDjyuvqoZt",
  "key7": "4br5fu3gzPG9a7jW33wgVcCPVoqFkUt7JjLQnz62rzR3ZbvanAymmARCwtDstdCwkhUy7XzsJRkHBo4RyQ7UHZqm",
  "key8": "ERPF9Sj7271n1CXyaz1KYXaw5agYwginS5eB89cMuwpS6FHHSv6hGbKcBvza4kVa2JzTrMyHchkyp1t5dnTZPSV",
  "key9": "31Dx75yGmbYoZ82PuGhRRfQDnUQK7iWDQcZJ7fzcpD4gkpn7HTy1nRh89ju13b59u3bxEjVp5T4fLvgxvPkB4RUw",
  "key10": "4SeD1wHcLFxHVVBZ3Z1nQo9haUB8MeA4ogyvoRjLsXhW5HiDAzQsK83xP9i56dWpsnBDyvfMBtV3mCuZXgG4Lx5r",
  "key11": "49Cm8jbm2i9D5hKY9W4FjCAu91jtA4neMgNhC1hDfihBC1AnxfD1FaHMtakSDfEuN23UGgTG5se3kKQYGB7jX5sR",
  "key12": "5TTwf5Ey7C4UECqyvMzKnAzBbHzsuJYfBF2jDsd32WTkMeydRqJZa4Li5DwtihCYLkFsfnG8DRvLZZmMW5R1WXaN",
  "key13": "4nKZ8VjAhSf2MyK7tqHtgdkNhFziEz3WtJ2fWyRsXLdkgX1RcjtXfJumPTeQ248uJv4i3zMjZQw4rGEFozMXGazM",
  "key14": "jpJHiWPXK2DyrV5UrnLZs2AorCmW5YURzXjh3F4GrkseDQpprCL9tisFgShTnAxDkn9NFVMK16wZmdV3JkxF9cV",
  "key15": "5hk5Mpx5rNzYAbLETi4hDtjRKQsqUeHEr3F6yz6CaSVwAE6jDEhYr8sNNhy8Xn8bC8inKm7RYC3bmkRnMtMQAEok",
  "key16": "3A5x4cW5tGyMW97e4p7SgUgcRFvpwtFP7M5U4DDzQ2YPFyxW4YPFeSXSCoySk878rPzJt3a4os59RJ5KAyUickGL",
  "key17": "5vnSRi9LUk4ohM5UCUyQXY3Rh5C8cXujcjSQC1Y92CZZysQjxB6v4JBWG5tfXai6GHUrsoMEJycaZXJS9nx2bLBW",
  "key18": "4sN7kb16Qk1PxHbXv71yopqMNHerqaGV2nv5Dfzaj9bFMdXVPfzqvcpuzEaJDD6v9xfP4TwnBjahFEvg5VUQHFRV",
  "key19": "2L9a7KioTjsspnAHcuwieJmwsNhjuZZxSkvrxVrKP5qzVBELNM3MAFek8TtTkhXxRJY4zTxiQnLn8ASLif7HSwH4",
  "key20": "3ZffPM6g9b996fTVFkkzG5wjDYSM3aLRuMXhd6igEfFZgjdj6brfg7nekkLs3qf1XpEraVc4aHeHGjY8xcRennpf",
  "key21": "4frDXLk6eTSvV7h2S1uVvcPRVRJxCargWHvxoZTupvNdsb2UJLxbTDDJtVk4Pf48qTKAqQpJMN5vQzn197PLLKqa",
  "key22": "GS2EAEWXdoDPyHZZr7uoXzq5vUk5mH3QwaMwpDd2YRNGhSSJC43z9VqYz9c5y4siYbwBBndL28jkNSHqFTdahXe",
  "key23": "52JJUer97t3v8T9yCn7fsNPEFb8xFtnWuAo6ksGCWadMVndJ5K6qrNFYZnPHsuPgyQSiE2cJ2JHsJKa352rxHwsD",
  "key24": "i7rGqQtBHkv2xUeoTypZfPykM9GXeckNTdKBrMrtC71dfMbBYKsJLTyTZW3xgXTADss6CEybyo9rSQCXEoLp4iU",
  "key25": "3FRxgWt3LSGWRDj4SgPfvvbEX5n6ZH8T8djUCYTCgwyPVRh6Ev1DS9yV5tpDdgHYyxvz9yjQ7akebYNy8R3RkCwr"
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
