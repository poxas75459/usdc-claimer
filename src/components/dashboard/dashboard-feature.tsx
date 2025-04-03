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
    "4jE1U3Y6VTb22SWgdXnssWtxyyS9nnP2EVCMpKSuHZzTooaF2Unpc5JDQ2kH24PxNDLEHcqApKRkjJTvkoEKRv6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52H4LwsPV2nBK75m11tgnWfrB2JRKNw1AaFdsVrbNkiaenumTGhyX6koeYV1Wr2AQk1a8Yr4Kmq2wgeYLHWj92Mf",
  "key1": "4pcpzuQCPiHXvBj7Pd3Fahjutnd3TwL2FWGXb2wYNkxkSTekcydEaVYSja8AwWa5pSBvrQzcmezEAm6NC5C1Ayf9",
  "key2": "5ywZF9tyhCD3q1FgbrLvVrnrhTu2oNrS4V844SuFvLunoNQ3KFfxN1rQ62qERsz2Rrx43EQ4uWg7dyk6aXDjfNpR",
  "key3": "4FjEBQpsr2vpUtdiMh4xJmeE85GwdAeFTK3RUELPC18nwP9bbwWpXVuqeVRf7kf5D4xvEVEd4dvrVy8JWzUE2Yho",
  "key4": "4wnMaa2pYdjWWPLTf4phuRdLSpQ9WTdarWRkQX2cBGCEvhy5vvZiaCFUXQru3Fru7fGL8mLU5TiAby4K2Pr1jpy8",
  "key5": "669JMuUbw8yE8kxNXW3UAXD9KSRk9tGMzHM7eAv7Q37YzETzrxvbNvYA9CsB1wn46UYPkHqpTH15ms51hgS41G1Y",
  "key6": "4cQoSmrfrcpfu4yzAETCzXet7J467qt1nD3ZLkBJgvqk3cxgTdZCajQM7TFfvzK2jPHaU24oMgCAJ1ZZk3QRrEEp",
  "key7": "5eGgXtWPgxWXuoSEA2rSN229PpDgKRbSJRQPz5ZdCxVDQpK7fD7uiU16kUk22eMW6WSWmc3441thRzqSNS8bx5nC",
  "key8": "4LLBVueDBGmjHSrmMDYZL4tPnyAYjP8yEh7x3LFKHaRKzVxm84Foir4ZDjgCUVqx9NzpxG5h1ghpFJHS4Q1Karoh",
  "key9": "46rEHgwBNN8aduxc6W9y8a56gN54qaukSt3dTuszwGypAgFE5YHAq4rRgEyyQX1VR7mFikHCnPnGhoMKk1nvo4RD",
  "key10": "5ZfJBnqG8RztNzsfCmd1g2LsimjX5W71Ftwx292nyZHdFkpb3cuCz9NUdCxwZAEEmKD1sA57bDsLDDiwoittJU9t",
  "key11": "4PWUBtBus393D4NZ6umPzPkEcd4uiyWTKx1XupoWoin358fgu1fsWN7Q9fR1MPyNMmQk3QF36kBVLcuuSpJ6i2tz",
  "key12": "5oMdibxLCk5XCGoANgJ3ojKn4TaMQ5eXbH1248HACkLmJFCLDUxs9D8LBXnWwKdiitD7uZY6B6psUizvYrqy9xNH",
  "key13": "5Xr1iR1LiRM8z5j1Em5Ts2SdZXr5uNWpeAbsDg7ZAEPjCRhbcyuHseSXy6Ueq5ca7S949QTzB5UybmS9RsHusSMa",
  "key14": "3dhKSCe6KvkadtqaKZa8AUn2ZVRqVafJM3TgZJCHEVCsxVz7iFS8oB81AGSutLZa2tJZQvQzi8tLE3wv3yb84D7G",
  "key15": "5R72PzAKSEd5Qmtxrp8bZ8XTTBzDXCYdganCUrLiCTdLavFtjozdWmXbjc4HZ3TtMt529zPV6XGSYxtvdRE5rHMn",
  "key16": "3CXggCfT2Emvy8yJSKPicfWejattybyXkAUDYJssXQnweWHGWcytUGUq55UWwiRuFryNBkhoDPrhkC6sHPYmyH8X",
  "key17": "41ozhunogdEPPPRXBZ6wUywwR2VZFJXsYY66fCctJssC8mpwYSYFp7bHCEbiNFWkQaNoBvJ3S9X78cFbPZkLAwgM",
  "key18": "XRZ8octLje1sN1F9AQNfp2XFn21AXqBY6ZoMGbZbNqWYNfHBkS7tFyAq5jRj7qGy6MLrCFyBqEB1ffCL2xB6KPi",
  "key19": "2toSEYE4doQZ79jTjvJHW1Mang8YWT7s4A6hfqXbY4hs2NuwqJd5T2HJzMeGBjoEwMbGUDdUTG46G6LQwoqf8EqQ",
  "key20": "2AZ1osgpshgLq94qC83qX91kokdSSeYn7Tm9jCSputCtePDXDXhouBEGWRUSPZaJpg5fxGuy17bxEkw7ajts9soU",
  "key21": "4zFRBoohQ6NBJ5TP68wDk6JaUHXi3UUWJGM8uKx9z3Dmd1ExtYsSTGv6S4zxT63FpHiWHQTV6poEbGktEYY9sKFU",
  "key22": "5drwo4BW1JUapnQk3UAE2fM9Lvq8WjRqtmJxbjZR11a46zJekzvTskRYRqyxieBQpt1reEuAJZceMWsHTj2u7CUm",
  "key23": "2n3QVwXxX8jr4UVG4w4Cbsxed8QbkqLRCEenrVhK1iUAQtmdvjfaxyB51KW9jhzSGetAa3miyRtjJE5dphM6U51L",
  "key24": "3bdgnokQwRsXz6F3yhfzeUqes3LCqW5bC5sgWm1GW3kcj8EpSTEceqWaeGRc611miH9nejvj3WdBh3ko1jPzoaKN",
  "key25": "2f1NQVxQv7Hya32qmSZK1HSbfNEmqMqGNp5fi7gkqxitS9ZnB1jeKwWWpTYfhinBt9dsecRNsDmNg5qqmTELvSbY",
  "key26": "2q5E4hZxij2cGKiVhF8LThC6MGSW7HzcgU9NvHVx778S3Zhbv4NzDyZhiYjNG6nSzuqBhHdkVGdu1cE5dMDPoBYa",
  "key27": "4CEeuV3JLpVx3HUQEzcTEvkcxCcZXSmBsucjVdyWAcSGr8Aew7nswmR166Dm9q2L9EorrjfsGhKsjQTdgUQB5rHC",
  "key28": "4nuvMCQkvs3nqfdyNimFpy7G6fSCcRTtYen4vbeiRVwLMsEqiUDasCv7q761LRa4VieqBze51XpAGSr9MdmNe8ad",
  "key29": "2EVSg9KVsduZLffzG4H8HLJcb23RdDdZXFkTzB7wRFM43RFcvALLMvyYrAJhWXxePHFX8Rep97LwhMEJgD13Ny6h",
  "key30": "4GAf7xm89VjGNssT17N1GJrhX8rafy2f2T8uR5CUWkxCXzCJCwUrFs6d8ejRZvzRAQiRNMtjJN9fyo9exZVP4BVQ",
  "key31": "4xNqmunisWGv6FAGjEjfiJZcFemdj5F4Adcgt8vGp7BEVsCrQ1tNjxL3fhQhWN3CtTMyqStEiDoPBHKfVQZGbaRN",
  "key32": "2SaiBddPXogFdjG8s6q12vmBWyDo4gDmdvdesm1KP3NJ3VLqWTTKJSYAp5tpdASnxjwAE9Kp5m7kMWj8uY3znKB",
  "key33": "5wwJkrwYVqZUenNBwj69HcCesaapGYcqPrd5VLgNdXcZHsmghFsvrBey9cyXE8ic99Z8EpQb9UeCS25zZkGgD7Tj"
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
