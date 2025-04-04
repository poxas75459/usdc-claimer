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
    "5APaFCQhtVNCAHfwemhr1VcEmdsVjd32peeW1zUnfvHfYda7vy34jiddrZdhnsXUmaVwsybzXXMuMwQdT5ddVuKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cRr3rYHjpn7c22K7BDeA2R4FFqFQ2hU7orELozZUe7V8bvGQE2z3c4uJ5nXEVDHWVLuD1y6gsAX8PtEkj6TkW92",
  "key1": "35NNTGdxWxYS5ykvzFF6Nu6qQRw1pikfd7YY9tTJuk2TBuipLLJnfbnfKBDfikP74JKeeidHGEuPzHYttJoVKPhe",
  "key2": "Touy65Y8XzF71jLTUxAMkGmdVo3yDaacVmz3dAFhDBDKkFpUFjneT9uyg3S3z2yKSefSVw6jgiH3ryrEq1xdomZ",
  "key3": "46d1jPftZxasUubpmoR84DvmWYc62bLg9byb9LHc6VpMgPufTHy5zjqbBcJz72qv9EEp6Sp8g7Skb8jovCcVc2x5",
  "key4": "3YmHnyxzpRh6PnHepyVprVzwAH4jbtfjQRUhqghzRnkYvLsChvud6QUeGBeyRuifiej2XepU8FCZuxsG86YCqFqQ",
  "key5": "2U9kBL5u6EhRRE2V3dxfvi9Wu6MWWqYAiWZuxNioP117HMdd3gsGhgVPXPfeqt3GriqieGHXUyJdM6zzoYKhFoFU",
  "key6": "nqR98QnF3Bdjd2qvBhpuymJbXyTfjpPXfysLMm75KxK3NYj6U9Q9zWs9s1ZSV7euRwRBokaLzGwG7z7GgygoU5z",
  "key7": "u8PwKc283hWrLaYSXqAzJVGMc2dq1xKj1JnbNPRSjzkaqV3J5f9uxKWoWYcyur1FPJY6nHnaQSRNoNjf4bSYL2y",
  "key8": "33F4YsihZShVYDw1vuNuAa9Z8HH8QhF4Skji3vUJs89TaPLHnR4Ezc6UAdAK4bFQ2zVXePvtE7fYCJ9KtrEZVWHk",
  "key9": "45dWWg8HfVTDEjNiSRdCWomdeY1ZE3xt6VMDtuiyVqqVYGWjnUm2qHaPuDhypH6T94oq6V6ZVZat4yTuozBgJgeF",
  "key10": "4pCUiYyVdqwhqXSqFHx5byufpTSm7Rz71yN88uWCiQ4jnmRLvRCnWpr1R9JZg4eXZR6o95AXqEXzTodZcBAVXJpD",
  "key11": "2Dyc39LsmQZwZ3VakSPJLAWEwxmUpvHY3RanZnfqr5QgtM4jtareATS2cUaeHUHBkd64aKMteeLCN2zNdkjpyUKt",
  "key12": "2pVgFMNcxihBd4594fdgTW968vxEH8rb7PUDhXefptzJQbhse5tBj3YSp4fhDLA5odP4XuMvvTT3e8i7hHFKS3ad",
  "key13": "2Cnt1GPw3tBiUEQAQSGjc6guFFzYkCvhKgyK6HDkWYTt2VSwaTuoEnvvpxVExrdrMFeaGMkkMFB8ph3XttqVPwqJ",
  "key14": "4TFi8UKVUMqavCQLw7REASomNi8MiDRvHWTiGVRrNn1eqgbZeX6UtygBaDcrkie8VGd3vu18ifcRbhX1U2pjXFtW",
  "key15": "3oogbwtoSzpxDMMh12LBLEk4GRAs3XY5UPpk6gNmSzApQvf8fLUWqFGUWSxu7aixuYjv36ix3aTUjdXdwZXEM3c9",
  "key16": "4edFkeBY2QDfKDAkjxUqimLw6wz1Af9sjnkowJXezjLHxfG2wySifR7DBxD4Ba4LQ755edexqMudzhKVxubaR8iK",
  "key17": "5A4Wgk73Xd772BBRL37PNNTP2e2vfN3Rh7CXtrtrCpq9MLxwaN6YkQXtY71Dtsmpq4SNizvNgJeknXqRwr1jmVCX",
  "key18": "4aZizom7xgocjjCBQ4KC1GUYhRN1H53z7saMZhhjiaUJ8Ss1Jp7SF2UDWB8fYcBHziaiG5MDS3JSVVe11YKNF9Rd",
  "key19": "pVwMiKL7wT1CqQFT6h1E47qz8tQ25sDrC6nyPjkdfiDgzdVBmZt7a7rCi9X56BYKxqZ8ZHVkief1VNeGgyKvVi2",
  "key20": "4yWQytV9mzH5gAXCbByznD8eTVbATY6vKytXke8XoLkfzjidtUHoD6xam5Zd8YHcdRLC8jG8PT2TsdE2oe74oUQ6",
  "key21": "37UyY8dJPcaH18rPdXhZqdV4YsL9A5r3p646hMiBqU8UTcpjhPvkfVAfydiXB6JNWemRjDfqQUVU1ti8VG9e15dy",
  "key22": "2E37JAXzwY6aEbbcvsqGcVipukkuABbtBMDyqMVXfTu2jDbKnrNB22grKkhEkNSkPg5ZcF1G2QKjwXQCYVDGjQx9",
  "key23": "5qjeJxGUUqCwvBnYpVft5XRyLHYxWufQanJbBiKgiqWUWoihqxQMLMNJyYugyGQj6feLuLbQtD2wuSyRPbcWRe5B",
  "key24": "2EWZsJHwsgNxhaLD5PtRAVYEQvPjVZkXRHrr1UbS8g9mtA45F4sNLedTxp1c5c2vqgjuMkhaNqVNCRiBXNaBGavt",
  "key25": "hwjuAYvnCGcgH1yV3wEaF3DY9413MVXc4FcTdDpYGvCtjoeM1vwbd6UFrvyu9jGrpyHNpUn5Y3kBXixoz3LiM7t",
  "key26": "dKH1NRoFzsRuAmNW4ySsfc9KiKFeYP45e6N5UDjJ9B4QZdkVFw2mbLtk5bEJq7ts5ngkiU64NW2s52tmjCQAGq5",
  "key27": "4c2SDMrkMAJZhD9Tqz8ZRbtn9R1zZn3XPy3Ut3H5aJJK1FzhAAyKcMpvMsYFrhra1Jr8xdgFmhpYw8j8AosJS4YT",
  "key28": "2KyEFjNPSmWsA6GxQJgYLES9mH8avyfenNwnmCJrAAsqXDWeSyR7XRaXVNQFk6WcazepFxPAzCYojmxukpJf4WmF",
  "key29": "37WWJc73nNxba7eeHZadeMhHMzkATZi6jm7BMMfj5rVW1hxwmecPt94UT6cpJoJbHBRCPUne17TDATYWAeHwJj9U",
  "key30": "47zV9w9DUw9xm6y4j9CL6PWuUo5Tj3odavq7YfhEa2JbwpHT6UtotNz9T3Fd75ghZmTfjaHnQ587utiF7z1qQuS4",
  "key31": "5CKCpT7QP6Jk8mXfaR3y3ugFwGfUt7io437kmpTiQepCMREAMz7YLejR4LVCvR1gtX3HPNEfue9bijgj6nuKwvnu",
  "key32": "cscGjZLS7XGk3dumAnvgSMM9LLWUu5Z7XN2DXUzDoRWCPisZtLzXAhjn2W9Y1feMxwCM8mgRn1SG6gnwXjX2yGK",
  "key33": "4rYTrmZ9QJ7cVqvbVPpL7UmJunDFh6uvWERtiU2wfENBtjk2irZEwCnY17MXbfPAMNKyuBZFxoAuhYrzWcekHEe8",
  "key34": "2iaTUuEM6dtw524Qa5qmu7fxL2HUxmUW6m9cvDrRwpdKHGxqZUrVd1yKJqvq84sXcCMTw9W1pDQSmpXCBM8vSU8d",
  "key35": "5BMQiTVyNPNr3zyfTRmBg5cqw6CVvAxte6LxjT6BzFCfWyY2rzeLYbXafAgC8cw5UWwhDN9tx7KAUbYuzpTY3eCg",
  "key36": "5N1PrAL2jiSM6rUfLN8FryyWqkmiE5nWnyZPpEorhHc1E7ySj3hR8QXQ2xtzJ9jYGMN96RB5n7GDCZSxWLAAdGGG",
  "key37": "2bEUesvtmKtKkbswrbgJrYf628Zgp7XFVhjpaBXPhPQeXroPwMCgtxNdyALcKD86JGjUvuUiZA2zYMy4cPBnTUAj"
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
