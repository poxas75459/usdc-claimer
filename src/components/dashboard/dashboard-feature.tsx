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
    "2mWiLaupFnvszdmyq2aJq8jLwii9kN7FtJFY7evDStvmpnbF2PAZQD6bza5Y6VZFU768WfbBkCaafyABkerfe8sf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3po5u9vHCnxWTFu4fWRcSRo9g9Z7CQKx5rgAMaYGtV2gBmrpvaAU9q9hCyG5GWXFaxo4J6ddPBthRutQwCyqSkqP",
  "key1": "4AdfVt66FDscvKEeonkqiadvwkwviCg1L2E1jBoAnZ5iBeQGJoLs8H27dHCWEwkS4mvZ7XrjFVibXNNfm2nJA5Aj",
  "key2": "gzqZFrk1fL2Ub68ZdNzZEsmJM1tFu77hiJBwDZAkWnH1URYBWuFR8pXx6iKfF6TtP6nMEz8qT4DtFXE1rGhseBi",
  "key3": "5rT1rBy21k7ZCSpWaY48L946emQ6WN6f4iGyWZp5Jkwgb3XbkfL3dNCAf87Dk1gnAcoMQEbwhKbbFazxqrqkChsm",
  "key4": "aWyUijhaXYbFVXCZ1oXPAH2T1top6QYW5XuKfwrsmHp3Ma6t7n6J8SJ9bZVSgyyqNgTf9xJuLFix5uPbBq6hRiU",
  "key5": "5jbUmfktnnDSKQcN8aGohSRwghuPws8bFQJiBAFVeV1yAzQSbBo9CGhwsp6ZsYJ6DcUYvt3GvjxDHkTUhBMZUNqD",
  "key6": "4N9osXbEGVhfCkCLsobiZD9rY7RVtb7XFQJ87HaL5xZGxnLKVuCxA3FLB1QipjJEeJGWyb4K6aKuDk9KWp1uhKtt",
  "key7": "5Dr2zSNxrxVeDWJ8tE623cEfuxy4ygohAkEtG5E2L81R6rEmwJQkq8DQFgdiRSvvwDfDCuzQhRTqt1c35j8jYEjq",
  "key8": "258nYh9Rghbe6GQoHwQ9u5jPNdtUvEBraohCwa7tD2FFV98tMUGwzGP5G97Vy8eLoCznL9C4fAgVqeVz4qrZmk94",
  "key9": "G3z1wuBvh6kcPzjBsYGz9vZoQPn1pQnzCFYuay4cjJrnnaNuCYbPaANMg4juXEXL4L23GKR9zuEUV1PajLXnbwH",
  "key10": "32wvZ4Uj9VtNKtkDQVJiaYXQfAwn2ioXUwxU7MFX8bxMjVgQodr7VLJr96SHYBdLjHGQG13XbHbtexXGHBFhG9sq",
  "key11": "4WKRMLnqH6jxJtig78DqVMNzYj1KWyeU9APp2XqgzV23RGvFhQUVD1QcxwT5opH18oRjaBUnavMwEpHjgNxeKKLZ",
  "key12": "3pxCZpwjLL3zcTpc1DAraUB5mg9LboPqUMwAFeVfREYDveFuPVaaz5iYvJfZrhrWc4zQyYwpznd7eL68FW2QGqwV",
  "key13": "51qE2JRNLLKx6bTy9kWvTXPVUDFd3HbeBeGf725tRNsc6RqVtrm2t9WiUnQQgkqLAdpJwG7pYsiGzFPnQtHeanqv",
  "key14": "5U6m7TzGVpzZZsMMTWpJ9SiiMKojLmubvgiVjBCf2a9hHBngPSAJQjKVtwgPhqmbyinA6dwZXKvKg2Ye2btkxUTo",
  "key15": "5Mvaveb67hZcF66km2Gns3Dy2bkoT793uByh39gTxyomPCjabdmZDTBHPWqp3eBFMmP3FTEikMZcXcZxWQGokomg",
  "key16": "2Bq6HW4edXXmt9vXKdMkPkvDyN8tK7fRUnBQM1jrF4mpdWvM1HndTeFNvRodxejb4HhNoq686NQj9nN3epg5GoCL",
  "key17": "2c51fAH25dqWCCedqjvCHchkxz6K3V4zZvtbsQ7CPCcGyah6aVUC4h37AnRTdYVqywU5HP6Ewt4i5XSoAsNJpqr5",
  "key18": "4Y3GbX7wWHYdttr2LjRSbn2BNtenAoPJtRp4Cmrwe1eqZCRRj5JMJroRxHsud9udRjfY9PVShQUy4W3YyvPeuRm4",
  "key19": "4Eyc1YNVazcuJFBxKRBL78qj6M6a3Axse7aen2bjBFA5VTofeJGKcR6w4qewkRB8rEuhRT3XW9hqN5Z5kFbLXhkH",
  "key20": "4B3Kue81DE2MkiJPVkSSbFfNCX6notceRyQUfk9G1EDEkcH8Ywv2rEedMnHbAT7BSqqcQyoa3xeeocV5nrRE6Hyx",
  "key21": "23X4CUuq49W7NofWJMSwhVJeW179eVXu1ZiLhrLusP11k2kRaGqtQwXkMqJ7JJYaHy1iFZFforyBUawP66XJ2tXL",
  "key22": "2KrjcPCtf1rsEqQVaiDygPdfZhb2eV9mf5vxiDyEzd6Xz4ZXfBYpLzvt5nAQckwRJ6oy1voTYptuBprPh7aX431P",
  "key23": "47JpxEdon4A7DNLKkB4e2WhRLFZYQyw2nVae8TwkjUeECHAadBrsUGfMBCEkHZyJtTg9yZHP8EuTXUYeLPMK5Gv8",
  "key24": "3V6WmydD1DvN356KrozN7MTPaG452W34VZvABCYS3NFKNn2PPMMLWAU1phsyWE2dJj4hEeju2N7JLCBtSc1TmbGX",
  "key25": "5sN71izStVa61xeFkGJdvjdhwZTYMVkr82473A6FZ5SaVLqTfAV4bAT9gCDAM3pBQ1JbNk33sUon8H4Y5WRbvMDX",
  "key26": "5ohRKyCUXAQVPFve9qUyXoksG7hAXzGQZ5J9wr9afze3FPWgSWQ5o62e2BKTLU32pLzWXMS4XcFoE6xTXxG9ZFgU",
  "key27": "2UY44v487SDrUicNALjWrnQ3zGcLuYdHtezU5LyMraaKik7JiKdjUvrEYwQzywhRB82pfjh3wTX9Ft5XLa6SqQyP",
  "key28": "t6eR7hyaYwynNWcnFWJfEqWDi8E7txk9vdU4QsXH3hfhYyvZZmTwFXcVku8L5jJFjyEBmNUqEkC2ypdkBccXrDD",
  "key29": "5AXteAsGAZiZ1MrhqW1NjZn9rgAK3rPy3gEpLssJY8t7mws9zmvt6Zn6U9seZqTPFzqrXBVxdqC6pUFW5wkPezGd",
  "key30": "3UaUzRTPxpugYZHNtdhcTvnUHaRsmNig7JHkFE5hZnoBF9cVwT5pP2t4RbWx12xkLA5j76zxhfJiAWB921vGgBzw",
  "key31": "4rE5WtnY4v76U3AxcQ2Tbj8J8bN5P1qeQTN8Y35Yrtu94hn6UB2zvivMQitgXkwZrqsFUzW9FTUkHbTaDJmztFLt",
  "key32": "2g8bUsNRvMtdo83qhVMRf22mgXHKSaDVxTE9gYxhCWSkVPdpkPqXbm8Lv8AAnDdL5gShxay3cuCccH45qmsyBvov",
  "key33": "2wgDPQc6w4vsiSsXQJ2Nv8PvRguLWCXaVh1yR7H1XcStbCJxRbdaQ7MZYBzWk5HtXhSqDqMmrJ4SJhGjEyrEXvEa",
  "key34": "2QoCABdADwp9eu4EewhPki3h16iokue5gi8NMGVmyEtJKSqdomteTRifYDPUAJU6oTUVQxv4wURPg3fXu48RwR8P",
  "key35": "5bbCmPFxL4rTgveZGUKmqints7S665QaHCpz8D4VMEyqGoVZ65gJtUwn4qZrMEqwnTV37VPsJJS9ixGKGKyDdu83",
  "key36": "29B3qtT2dEpVWXAY3gBEEdgnKRnLwpKRg1F4Vk9qrBVq6TD32daX4ua8BgVPM3ANEr3WR5y3mEk9jdXyDf6EeRth",
  "key37": "5Yzpz66eYR7PHyDXNP9n5yCJK2u2PvfSauR7xtmpaXoghNxRgHEU8GkCAE9wu8kGZ6JTRUAPQ6YaH2uaSdn7G7Ay",
  "key38": "2nxFgaFg67RrwCEzPsoS2TyU6bKvyj4R6KrsGnEgZ6MFsrxH9TP3FHLLhFU9bP7sPg6bKvoxPrq5Pw1Ev1aKJqYD",
  "key39": "3j8fY4VuaT7L22JsFU8nb7ER1T7VkkL5aofEZeExWJneHzku5PvvqrVJn2f7inPeVxkUECCGzgk1VPZx1RGwS2jK",
  "key40": "4Xf34uxE4iGezV4YpUTR3B3GLZpiiTALRy3CD8g3QfCrysDqgVy9Wjf3yJpgyDEq4SdFTqbVGtt4B6qWsXebCpEK",
  "key41": "2poS3Y38mE8RMBHSARaNMPTSwjgp6LaoY8GCgP1g2LeXeR8eCE9sUKSegf9fSXrg9hCiWsPUDMsGXBGTxJfpmnpB",
  "key42": "477AmpV2sWP2u2LRX76gAvXViY7JAfLdvRA2oHBpy5mujYQQmHvjFWhJbiTSEVjFSkBhLpyauJDxwCH4ZFxySDUm",
  "key43": "3WcNnhxpbehBZQ9jZccwbEGoCQKxbu5gMGWG3KaGD4kjZvDyZWDUE9H6p3VZmri1GwTpEPfZ6w6FXFx95wXSqdM1",
  "key44": "5M4QestCtxxCt9RABvkWHVqG5i4YMbSRma2XYAnHm7MpyHXnk7nBtMfGEREXrVbHVGq3e1oHuxDzSPgsuLjUdcHn",
  "key45": "66rByHRxzyYkr4di9n9MGrS6ZmTsgY4qU1bfgfKt1hYZfZJKAxn9FKzpyYWzoN9Ehgt61KudiLveLaumrGYBWJTM",
  "key46": "2wjaATkeW15GcfygLxunjs36NeZYf2aCAeG7bRGSHFWzFiovxTiYpWWrmcd6GYzbw7piGF3BDrmkrKnLfb3sU5aK",
  "key47": "rdDv1xzzZvbEDm3KEReT1TURsqe6kQWz9BxC6TKmK6ag8uwYtohG6fwwcGHvL9pEJENZXhjudQ9zLw8SKbaAiyX",
  "key48": "43Shd6QgH5YCFZtwftYxAz7fSBXxvKzAh79n8BXncTFFp6bjNL4rD7DXU32SomCyHfsHvXgpNb2PmkZZLXwPC7FE",
  "key49": "26VKP65VPaoEn8H71tKGL3KCvSygQ7mEn4e9kYXGC6vjuQSa3Dv7ia2aNfiPUZhJeWdXrfKVk3KyKZKwpVAVK1gb"
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
