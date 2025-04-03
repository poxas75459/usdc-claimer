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
    "QHG53PqVG1zwgqC5LTDyYFwtjzmi1CMvByB9QkXhKyT4dE2NGQ1jH9MYc6G8rhXS4CyR3NJEbi47XfcZwzBUsvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DFUu4wTCnnjqmBFU94GJQPjhVx35KL8mU9HeLDpZj4rkqyUmb6jYWpwNSpBfsnWqdYa1YGL3HYgKYwKKBRtL7bj",
  "key1": "2DGsg5pJmKPcptGiivN5s8tvisY79XUhJ15vaHQZM3PpAoENvrLNdKCge2yq4hdLWNFSmvHqUpRT1FPXfbvVm5rb",
  "key2": "4biXtaaoYMMdJQrgLht89zmNncNxXNFuu1UGHXLuLn7b9cAp5kxc4upLRFCW45DK5AntHXG8zmxEE9vZNt3otHf7",
  "key3": "2GTSqtf9qkDiidRbyiKCc87K9csmfQxH3UB4LH1oGrQPmJJTLjdYpJshYj9mmEXQhNx3DZRdwMf7ZrwGyG7FJdFN",
  "key4": "zf4Rj2WpeHPKFZs1iZtGVa65Liu17fZQvPcrhvPdefCfzubZXAxPpTu9VtoRMth733E6hEPLDsYGVCSivbusYzS",
  "key5": "5u4EmCzHYih25Pf4nEuzCdPzJs2cSSp6NbEQxxEjHR1Aa7iKS7DYYEMDXrxtjnNSC4LPmeALxG9x8noQgVaygNgN",
  "key6": "3ZrLDkYFiWU6qF4fRLbtoHv7sbdcXkFG73jtRwqFByFBP1RHnSjbYz1j4gnbA6VfAM1DBJmHfV2KcMBicqujmGqC",
  "key7": "5PVk2uVTCejAkJW6EhwpAQmLr1X1mPfhKBZYyuXTSf7bxziF5AwnkXyqCEMvMhC1HdGwHsSAtaWp7dwWxX5yfyJ6",
  "key8": "yRqRnnSUnKUFoz5b6nepNJSEz53KyZygFnhzrAEhAhQWQ3X6dhoBjuHZZsgTjPa9mtwq6iC42sJNQGTrvXV97GJ",
  "key9": "2iAYNyW5cjwDnmv1gpVzgUJ6FGQ3jjevbFtmahGBqTneGy6yByM7ZzvYMrh1VvitJzJK7Bh2NjBWD44UCJbTXxQg",
  "key10": "5pxMFgSCRis1kvNtA7GyNzwp9UjHXV4i1pUDZtLgjWL3NCc7cdjsgR9MbHn7Z85GVGWfSqDXiysnUkhY3h55AZgG",
  "key11": "4vuzFU1HN1MgcqLa4TUCypgjXvDKhdtwXorqhpd2f54ckm6gDVK5VMjnRQdxebd2h9Gjo68TLdUcLommqyh6pUJX",
  "key12": "2cV1RrZgKtsu4GaVNenCV564hxW8dboLvZNvi9iMU5ti7kHpDU1KsN2B5XnGhHKH2a4vZMzedCzTSPQuN6U4Uc5M",
  "key13": "2H3LvwcgPCuJB1u2BiMTca6PJ7wbrzon6eXfEWGCfhg8M2u9nXcMxmgEoXVoCLd4uox9SUjM7NfZ2bA9W3NZALNo",
  "key14": "7gF4qpSA9RdT5746DNyXcR7QzLWTsQomceyohFfaoP5GPQW7TSeuWDKFFrWuJy9WtMip7qJbBf2oLAiB8yPw1jy",
  "key15": "yMyKjw2UgSfSSTBaSqBkiw1TFwsNVTscuxQubZzUmkbwj2kH6C2htgGBXQPVnzdbZLM8hZxphMy3Dt2WYCpyM8V",
  "key16": "66bsfskYQCSQwzQGkeu9iqichgpEQUmDKCfjCoTwr5WBTZ6bwdk8xXXrhU5W3BgFVvndVDZfxqQcDMBAHAieoveg",
  "key17": "2p49aBEhNHWJcTut56cdqXQEpwmAGYhZPWQ7qYSdtUAqqW4i4QHk1Zksw5Qi3j6dC3f6pAe1fotYDfKULYPnwmpZ",
  "key18": "64bwevwDPAMYeqnDQx7nDuKwJwTWf6SGE1kvgJXGwycNir4JtSQDGo9iw1oGH91dHycbCmZGyUgKc1nrfuMJZRLV",
  "key19": "3Ffb3V3iLZCH1HbJLpHvNj9btZ2prjeccGZKbGfkimqJ8gQ52dzi5kxoPhnB9uVGKJEekGDjbaSVBKLLswkYP3YD",
  "key20": "6442dV3BS6MeK6rHQGxj6pKY5JZvxmA3SxYaHMGjXPcTefsM97cctxhkGfCQXympt5f5gmZ9wWB6rdNJDMUeomZe",
  "key21": "CynmsQ3GbdiUM6whFrGUnAZ5iYLtEfgBEaFCZNDe9wWMF4dfraxPbGSem4peaNDQmT3F5jWRx2JUguiKs3NYwBj",
  "key22": "3Pn3ZuKhnn8o3no6Xhy3xsDopwbe5fUydoUu42H48bkBmhjkrVNeeaNVLE3pC3NayNcnm4jzC6PVK957VgZNdmPL",
  "key23": "2kxEMeis5fTeaqQvCC8oJdMJhkLGCR2hMFxkzw4GzQn7GscwXjrkPNm9UdcYSNN94aoceiaF4bUiGR6QW3prsyL8",
  "key24": "vM1cgrgiMD8ciSos8RTr3VcUPHETfehC1NAXRYjCBgg8Ek5mACE4mf6r49ZRpFmKH6i7Ud9prLoa1SBejqNYXd4",
  "key25": "UCHmGWufP88mRoVkMv26Mb2jQ3PKvaYpcPjM35jwGAAhvwqQ9Z5hwFQV6DBZpduBZrqtCocD3DWqFpALatQPjVa",
  "key26": "31nxQGuT7xZcN6uK7rj3xwZNq2B55Ea8qJLbMQ1vouBD54BoZzBicvbjTzVKcL3oeypZ1nDenay3pxLXPMjAr7aa",
  "key27": "4PWikQiqyey5uCL5oKFXKp1zFwZtgfVFNxyDdtCi2FVxJuTfrWr8GWtgEqxB1oAfbbA2qjFSdDdPHhFWpFFTeZBT",
  "key28": "23bk3nwiYcapNpCwKk8PaPvLMxMYutM9xvrs6cznYryJqnxqaUxB65RUNLBAZwLwerUmwK6f5qtLDhiiMyj5U3if",
  "key29": "3mi9GMcwC5qbpewTQYTgA9YDjy7sb88wqRvZfPx5CsQmEUeFAvgGgbQkB5b5ZQLt9gU2V1uT22tiCfzPHbmcgHxX",
  "key30": "3UCTi3bhc7zMm2KkeeW74h3yJtHyRJthKbTaipAtxpja3uwpJSkYQwTB1winW3J2oP7j8Kxb8Ji8jGY8S7Fd2ikn",
  "key31": "4mvjrbCQy8BeL8oE757aiaaKrZBMTjAxkanMfQRoq9j75LKVtKYcPUe7rQ9ev1miLpx8wHC9ZDRNAMiLrKeSejGU",
  "key32": "2PemoK5kmAvfuWdBScMKciz3yGJyZ6WkqupREf4TVhYnMCgdVpWFBPvUFCCNtWQ1bp9tqsz2mzGKathCEAMCuH8g",
  "key33": "668yRzLjfGeDBhDzge3fzGuz6xzGXLynpiYiw83bG6AH5VBzK4eN1eF5LFQkPv67ywKojvdHhfJJY96qsjQEa797",
  "key34": "4F7Uta5CphAxeYVZQWRacFUJRyGjnoVpJPuPvxyD1dXZ3N9tBdSUcMttbXyVTXoELknk99tnUeucQE2qemwvuG4E",
  "key35": "3eWrVJryRih9VEQqN8tb2iLY2ivjyYmuqfBXWgndXJtPFkqZ16T2HiqGrnbqMGU6gyfcdfzRMsJU7sVmJABgnMBX",
  "key36": "22Yk9zHKomzrGuSz4srYU6D9hJp8g3enHJ1JtGkms5Y5kygY96psddorNfNRn1ZVSvQS6yCnupFwc8qqT4AB8DrT",
  "key37": "2Nh5pFiGtWXJckBBzTQEj4gTYF6Z24H9MX4V28yVfgqGUY2PTSmGYtr1mrwZgig2q6rV1xMzMEY81wPa5vSf1oLs",
  "key38": "3MP1P745k7TbSKL3qkAv1Zo2jcHQjZLpMyKWbDxHfZVzkEakQzkibfoSzQywXA5JZMnRQqXHPa6iSYjr2eDR4h7k",
  "key39": "4r1oeSNJ91S34ivex71W4aTF3qsEoA3dTnQKodWZUy2hSCyBpa1r8HfeQPBsA93BQchW9qzyWawkwHaozonQ4HwK",
  "key40": "4eBRLxYBiPFr9CEY8jkvnBFK2trcEEZFfxj4WPCZba8MBJici9ayTeFPgrHMTUu3UhBpvKLsVsGDjrf9wQfgGNw1",
  "key41": "53hokqx8mwweA4TQzkob92TGjrWHDjRHnZaARtjzfbHoKkBqe8cXxuTpsUQPVVQAkw66q1yjuTVNjUezoRLNL9m7"
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
