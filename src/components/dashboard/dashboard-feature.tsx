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
    "5cbiMdtpYcB8uAGf3RJF66ohGJAyqLDytzbt1AN7N5qgAayXfJuP9NMqvAm6tKiRiMMriCReRVY6PAQcjDr9X8jB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TAWrGz6KUEZwJ5Zou5Vt3MCrUv8mcxjagy2x2QUm8umCthdyAhiPouHxH3DuAMBVZ2vvDwC2Sbt2RGDwQmLRon2",
  "key1": "Jk7aFZtcwaAMoWx1wiYKZbwJee5Vh9GRkTx88fPxd6vHAeTnMbwFuEkt7JDXY9g9LuvPWcsXvgLYM7tLMinXSf9",
  "key2": "s6hzeafrawWWwkhdHZwsfMBdFByjzL711Kaio9WeG74qEhUYW285Vs5FzEhgD8Mzqu5SkMEWFQDCmiojGpqr1GG",
  "key3": "4oeLCRVNjMwuFDiqQUMkDN83CWksunuWviTH9K16rcG5EV1q7ib14W8vyFyVeoG8Mnu2RVpLVVhiH731wkfEtNha",
  "key4": "3zGaa1DonaxXpf9rtipFYFdD52hNruR6cLt4SB7x6kEA6otxc9moWRXugvH3Cv77aDY7Bo512MMjjEkvqn91StMq",
  "key5": "5Hh8ZzXBcGfyR5TfwkTt224RbUx5E5ko221aC6PnBYKxo2XUSANv2q8pk8w9TBniZuGT1huYYhVPL9YaX33KgqDB",
  "key6": "3SQ8qFdKUiSHvdrm9rRw6AysB5Q2M7jrz91fTjY4Skhy2AXz9qvYYhvjgJrH9soQ4YTBRwqAbLsUH7fkFxzvd5UN",
  "key7": "3LR3dAdMQ9b9uXckm2TK2i7iq5BNyCYtrN22RN3BqQ9x2h7Y8qQLH4jrLw1zyo9LV48eHPCgsRXoX2hkuseKkHWh",
  "key8": "YSPCBvKk8AgeAGYjY16kwVqSbRUxCJJ61kJq414wz3TEm2iQmSTu6Lx4NXa4RsEN3yKkmNycAibFaZCzEVfwLpc",
  "key9": "3CYxvnY8PXwrkj7VuzregiiU9Mq9VbgJXFbZ2nf9JmzsQ3wVAnBfo2TGEBeYzRv2zZEaW18U5TVnuqMBMfeMVPNH",
  "key10": "4wh9ERapw2gTUnJcVJhvbuSwURKpDrZYAwF4hs5PjBJSEBQcCPTfCcQmrMV4FkVKEeS8gHs8uyRk799E4cB36b3X",
  "key11": "QcyzXVDE2VY1rkRhX79yxLuDb8LAWijDaGCZPCcnwcmBYRHunfsLYza2jNxmD3NA58pnSRwfxTtVQmpQMjCgJfN",
  "key12": "2EBL285HDmyPQe1HsvaCMtgMFayix8NnqVvZiE7NogTnZqUvxbjAd4CStzw7fCzbnMX6LSzwUnqBD1wD6dUzrTfa",
  "key13": "61X1bmiujgTto8MGRwNwhkKH6dcPz7sM3D1e4JPBBnAc7hA9isodsYMGKbZq3UQ92KX4Xp2nXgoFL3MiEYpFWADm",
  "key14": "4ov2tad8vNW3ctGsAEVUZ2jAtKKvzbJsvcrMe682yJWWwg8dQaTsTgD4moLQLz25f5ZBFETjtBDSHWjd2PN22w5b",
  "key15": "2Dpbfm8cyctmKeXGXHfknktUf7bbZvsxZarM4WQ52bASBo2T5d6eW532mwjaKt8VWdgnfXkC1bZXbGaS1giAZudw",
  "key16": "5ocsapeNQBfkPKQokxDTzNWBgNz4wnRiJCC82KNDc9MBDmkLfjpTEQmF4tYz9hswE6TFd1dzR1Cnxrw6QXSCcUSe",
  "key17": "5Kgq5s3MfPtiFVWCASicm8ALR3fDTRPmUirS9SCsax9P97Gzq3JtqYEmc8WxyaXPe7tSRPZWNt7BKEKL2MgLU9Uk",
  "key18": "4Q5xxriqJVmvPehZHYov4grAG1nvvgLHg9VWpFSHi8WSLmvPZKj5MQxmnizqcYxkn3c2snpo7KkvrzdLMfSonq3",
  "key19": "61EKrwnoNWr8xj5bVreWfBidDSod2qMDeckLSv73PfXDNhWRXfhJX5EPXju4qVCu93W6J2do7jJqMWmocALhrzMR",
  "key20": "2G4eiU4QLjUpoXJQJerzy8TBKJ3a3iDuxdgxhifNeAGWivAvYkEAjPfWV97CjpzBnpdifRjDfnM22fwGvhJsP8V8",
  "key21": "3y2eg13RHhKCxh6bwYtjrMDc4dvr2qqi1GYynWrQPSvByhHcRBoTA66FdQg4g2BDALbdhMPMvZQiWRJVnxnuCywE",
  "key22": "5GV54vAdFPAtkfhTjsL1sQVgqMyvpx4thxLbUzHL2nDMm2ongeg78r8UUX9SZgVQF66MC1H5oimXQmJsTdX9XYJS",
  "key23": "22RZJ5wx7WvRWRA756ZTRsyfBsdrvriAhQCCpBi4Luqp1Q1cANxHwUv7MtcY7B5vtmvNfpPYaczfMth5uHyiDHVK",
  "key24": "2xRobHpJWaRLh2YEgBYkMvXQ1bm5zS3cK9EED5Xdsb4V6R7cJeM2je8ubbcs9Jcworv3oYwaKKM2Ba2YNJTzFbzS",
  "key25": "H5nrfus13qK7A4CQc5j5JDmVirao4VCfvBuYkVRVEwcb2t23can7reDn6p7o4SkFMxXe5rky5gbPjv7d7FMHuF5",
  "key26": "2mzzTrQVFkcH7QMyzXMy7CaZ6FmVXEapr4b6WrJqbTY8wRFgUmepjjN5dYpihWpKJmd9F1ejTazMzSPzrKEx9Rx2",
  "key27": "3Lgfzx7SUjgwo63saAy2Wc3kD1V2JxmgPco1GSDimpgQNm9h6WxK9Ms762RTHZn2tEbt9Bypay3MXemoNzRhEjbp",
  "key28": "5wsc3R6moo69NaxeuqiyMWA15CzASSeLthsNJrgXgSEuB7QFjvrtYdYXZn3HUemrWyErhKTLgmXeQPhnAa59q6ZD",
  "key29": "WGQ4Tv9eyp1SEq1EfYzJ3KneZFg5vBZ8JhmWaDWdfrFGKqYXsCWxEwdFbX8pbpzwgnmXy8vGyKB3qAvQKNH3mHi",
  "key30": "2FbR7TnbVouFdRWdunTAV7LeMH1d3YVbVzdfo69NjB4CHtwvQCJ1b1jnL1Vw22bCkttV4bKM8Zxg1MFzY8qnH7XF",
  "key31": "37tsJFkiAdbsDvTfc4jD8ehTZWCZ3xsppVHA7bp9Bh7QxqKFmE551c4gopHaekVyNo5KLDDYCXEXhTmVRLoDCYWJ",
  "key32": "4kvkWoJ5ZF6QFdjSxhNJ4kfyNUFbYkTL7yBHGdPEU8jGQGoKyw1tiCY2TbgYsGN58awbCBkbc9aZq17Qi8yHukBk",
  "key33": "4vDnxQNfWSbHf52wmDMG7Xj6E5oCMkStQWN4ydh4Fzk2dt6FkrkAJzYD6dkTLvUEfkLjFjAEMmiHZpys8cAZ8hLT",
  "key34": "3saqHmRh5HBHDUdgApKfxZvEpWfux8XmBxtHABxMM8ETW9Tacbvyf7R7erchTEzvgQgHJ8bN4hrhKRz74TkzUUJr",
  "key35": "44sBXQZ6rajxfwpRmi6fuq43WMxjJdLFJqM5p2Q4EwakhbdHqRxiqjM1mTEnTHwfL5gqvK72puTtaaABG6psdvn4",
  "key36": "2GGPxVR5MAQMLrCuBeooYdivxNuaz4a8k7mFi82KVqNQnkiwQBbdRq7FGjC4W7Jad8ZVeLfFz6ttB45NHMJ58AQH",
  "key37": "5GCWGsNPeHj94Vou3VEHZYR7aV9krr4drodpesRbg7sEVhxxaQZJqwbzN9z7nghyTyZUneVCKXjsePzQAi2hJzkE",
  "key38": "25GqoFQiVFDN8pvwy2xwA8EHd1bTiKyaLK4boFVBonGNoFqXenfDVUXnNhsgpexauaHiYu8Yfuo7k4USi19ipcGa",
  "key39": "45ywLjKjnReDkNqwpw6HnPavEuwvu4kwN7Ng5vvogXeBdEEnMPvom2F3XJiYjYC5JNaB9YdBf2vBVjupjJ3V3CnH",
  "key40": "2bND9ezS1URnvC39VdGRUXvbg4Vcp6ksTtuQeyAkn3VRneHx9pHpniVwLAKyBY9rnYBMdkM7neqFqbtt692QjqV6",
  "key41": "49sCGqx21QeMsQEKo4q2qesp1AY1768J9w8dsysLJuSKGDhBr9fhUiAMxWMsDxBwXXe36E7u1DUjT11kAVf2KfF",
  "key42": "pWGbWyShaCLgQgMZWCoS5L1jGMChXNwqikrrqUKDhJtowpWE1Rtd5NDBXEFZE6Q11gGNJGgLgRD756Bam3J2okE",
  "key43": "26jwWdYtwTb8Q9gSTS7SCLSwhA5CvoqCraKkTZhD2q4TcTmKoqm9omTEBa7bvvvxBvQTCb3BCGQoC1ixF9Y4oSHG"
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
