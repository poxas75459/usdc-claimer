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
    "KN8CtDpRo76XWydUbXWNGwQF5DckpcbAhqUpPDQTPhmfCoepApXRkC5nCbMfTSMXAWA2VDYb4ZDPr1Nw93jzuQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LV1cejmovDkeiM3xzxk4Xv8aiNDkWfFs5PkegDNCqbVbnALrq6w8tDU8UGxdckjvKogxUbPUJbsY8b7hRjGfa3",
  "key1": "3XiH7a6TF9YfYGhtzJgoUaFKiWvazfUVygoxW1qJNpA2wM1DpFCgeT218wWuZdc2Ld9UCkxRmmsaJfYNk2eJ47KF",
  "key2": "32AJmioRcTEz9oEt3HTskkQRF9ZE7n4cjuDw57WdPHuVzSX5uBJ7xKW18tsCtvj4hBoccSzM6FBV6HB5sM2QtDjy",
  "key3": "4QfpQD844cdvAnKhpQhcvyB6M15DFYiHZtFaYagWCfjDSQHWMfpPNaCJczgq8dfyo1URftchUf7eFb5FkQc7ZPue",
  "key4": "5aJuZX5BTxBA6VNMjg197HdG1wyJ6WbqkXgeC4PPAg2UMugzxMPsWZjTYm2yD152ghmdUB46eLwfGUi5PW3Uk3y1",
  "key5": "5w4dj6DQmYAwYubyArNcykwT9VqJjUXmDpjtaBwcqGUb5Fs4sxRKdjfqFbY25HD2z52rDgLvK7Hb542YDZjFHuSe",
  "key6": "3GEKCBq828SLb8RbXpKE9pEqkoRMujttgMmaXS8iV4JZcL5n5X8RzoDqY1XofoBBBP2aPXTs2w3HrbGvBmQ8RK7M",
  "key7": "4LeeSGhDqWvq5FcDmEE5iV46SRF7wfS1MRQiXAoTsn5SAyQiEFCR4K5GC6y46Bh49f4UqK5s9MKe3VSX9WhjikHR",
  "key8": "4WUZ5QSHcqbQMfP95d2VUoUJM18r6ggosZhKepzWFSkmR8dWBDECy6VvnT7uAqAEBBpwVYYM7YfJwbmNPvNvB3g9",
  "key9": "2FTA7R7wTunt9SorcG1ajan6bbcjVniT6ADTziSExBivuxoPoCdsVhtVi2ZUfb63YJftHXutRtr6rySVLkN6a1Uo",
  "key10": "5gXsZPqtFnryayfRyp4sd2zHVQMmyPBMgJQLrV9La7pq3udhfPboKhnAAYM5L2VrEKX4FBnHqgFot6s3X1QfK5cd",
  "key11": "3u5winjTSWPD3iniFKV58w7q1Hb1KVyE3qLksBLSmMZojk1hqmXypwHkBejQzsgY1wbEEzTDwkcNJTANvn24dNcQ",
  "key12": "uyVw3RuwaWSYgk2PVWEDaVGZP7hFeqXbDZM8cumsaAAu9gT7FsS5ABmyNcxpKYgiUEAeTC1R5mEwF9E9VbNuQCe",
  "key13": "4myU4qwVgnaAAoe3hxjPNvyZ5msS2UGf8MxYAgNBNSDCqTkYbNhmzePaBtvX1iidZBhyhPnDVbZpme8r2fv1msdQ",
  "key14": "MSXpQ32Z3cHrKVMXT1UPpLF7kCDpkWhQJjUwoNkRdhHEwvyFgoYrZST8SFnDzsLueGxRh1mN7YAPUApi8kxWfPJ",
  "key15": "3BW9Ec4LeTdExgdnAdcR9xZRniCEu72gBZZUQbW7E78siwjEdLTA7xyNRL1rXdS9TN2mxQpMS8q4DYyvpRPB29cz",
  "key16": "4qqCppgPF2Z4qQvqn9AxMA1T4DVnQ9HAAs5Qhq9CJKwmnzmrZmmg6YGwdvnsPxNo5fUFCsAtdWzsdde3kLKAvefE",
  "key17": "MsEy3FNzJdbiTtttCgsPG6cBEZCo2x2himLbtA42c5xPZaDoRoae9Pf3tHqJv9weoKte4cAA6WdAXSviG9ieSgu",
  "key18": "4Uank7trM5H64jRBCYf3ahfkg6zkdptH42xu4pZp718mgvuXtKrk9jKRbQbqYtfNryA8yYm8MT9Bd7aQdnTHLBic",
  "key19": "4fm3LxhcYzFHXUznkBjVA5eLuEd1cE76XGnCb44PCTPLAw8GHwNxGiwVnQKdhXhH5qUf62NwDScnPWEKic3owiZL",
  "key20": "2NHn2iDybbNJjBbd8TjNvSNLndTRqNudjfwXXoL9CDtQzs7pWk3NgAx3tX8f5WZoEZLVqVtw3a3EYA79JR6EuwvR",
  "key21": "2JsvdW6Yh3Ep4ZEkRpZso9YEhKSaeDmJN8pBNm8uR4EeRL6kztdSCW3K5Jf6Cbsp4RPCRrWn49NA4gaf5PCV2gJW",
  "key22": "RKpToVe3rmo1Q8dEThHNqftJitXfhDM5msrkLVGHk8rLArT68fHqFnx86Cpb64on1PwyRuJPppMkn7JKCDGzgrX",
  "key23": "4w2SEJdcrppDoRPsqepsXydcqMXmLxXuDvw4s43cDc94r1rkgRUSDWWoPXN8McdqTwt6j9mRush32D4Aq2exShUy",
  "key24": "59SfP5f8PgDWJPKgNyvt6THyhdLqnBwJVsVjMHWRw4w5HgDdkVYroSYPj4Vwua1zjdR4R5Fg39HKqUUJQXgd4zMh",
  "key25": "37B6sV5A2uiKzK4LMd5s6jBBoAhLemyTFxRK6P85C5T6zedAocn3L9oD9j3KTx3iUyJ6r8tMryxG6zYvm81Xra23",
  "key26": "3QbGrLmCEfFvnFd8vnj2p9XhzBJ41UwoWZUi2qdwRNcJFAeTjRiYB9NGmrpw9jaQ32MpgxrqnRLEwaRfh2gqJA7D",
  "key27": "5n9FEmNsdkkzpF3qEcSuzabz2xvD648yLffHqRKGaTKG7EycqxtbJK6pTh8cM6jgC4xDNu86hX4x17PSxmyJ7ZUE",
  "key28": "4LmMVRHXt37tCmaJywKvHuw5aBQLxLMHcCKnZMEFKsJW5gkrpp4wcGaaWFvo8XgxufKqYfjh9vymeaKbwos5Rd3z",
  "key29": "XoCyjFoUEeQscXAypWZ3aCPmBnZaatms4KwZmxZvxrTBbtBm4CrNDtbY2W51g3jcUNRH89p67EQDJEmyNT8muor",
  "key30": "5XeaGCApViwEH4BKigXSxZ7WXCMDikuUn4sviBGkctLrpfVmRpGNSZD83yaZPL1jF2Rk7X1Vodv8vgtB5R61aQQ5",
  "key31": "2hgx3xHJsL8oT8UkB2Jm7o3zQXoPpHL41kvgXeBqWhPNhxyC6evh8DAovVGDPvRVMXC46o98s5UnxoS1QHAN54X4",
  "key32": "tedfZqoB7dxZkGyoQ1P7Rw3mZBm1EtGkhKCDNqTJJdS9qMZr5e8Bmy4xgFWLz32NqAFA8PuC9bdzygxz3rNVy6A",
  "key33": "mYfW8zXsmsVKHE8vM6of5GWANs53uA9KfVkvsyyetS5gWtZtoJV4nUYTDMnYX3pijH7KyFRixdeW8toLgVyxEyv",
  "key34": "4auF4oAv3bh8Pk6dWruJVWXYoF2n1ooM8hj8Xzzx6w6si3z8pt1zQ2h7eC8XkDYE731NR4UGcYuvgwWFTcbYUiUt",
  "key35": "irMVpKqvwHQCmFrwHabCgX9zQ9uaLxgHtTW9JWjLiahg64u8dXgvW4L8Kr9aJVVjwFjjpSP3ozUTPyWKzsyGGjA",
  "key36": "XgVYijsUoGyaC3ngjJ6U5ymUkMfYCcbCEetaZn2LXfxUqh8Sbr9iBEaMdXdNbFHyDNqsB6AKXxbHJrGtNZpGuiB",
  "key37": "4brXcjkWgkkY3PoXThPZUYAJMTLCbn9cyJsJeyevAj9gNXQTUfdttksS7g4AxAgw6yvhsXbPjcTKQGQFaKxsMrpJ",
  "key38": "yvETxQEQw5nr7P5DrTzxEfadYCotNDvn4dtVNqyxJ6ynuh3AJvD7Nan9PYorK77pf9vtQUxDq33c292fDj3tpo8"
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
