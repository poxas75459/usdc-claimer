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
    "21CFK1DLJXcXRK83ZmHGV35fxQ9L4x9UzWEkr625kt3SjPmKNdiAtoGXiJq8DxBxT4ZgAUQEebbELAUZUzvXPSnm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Kd5eQzSoeyVW9qi8Z9e7spMq6SqshRh8W4q186yLJypviaPB37TkkA7VKa4uww1cTxdqFZGDgEpZdpEVUUoywq",
  "key1": "2q3x1AnJxDcUNLgTsod4XgdwuUL5u1mBpAqhgectRDLdAQjycHYTux8ik617obXLqNj52jfR9FLgt9rS2UKTWpjK",
  "key2": "3tgLDVFVSbMmV4vusbvcLBaBtosQFBPGvJxwcnC5zWkD8e3Bt2Je8k1JzhXFXfR4e8YoCtPTJnNhCZJJVidZmzwx",
  "key3": "3JXcDt9AkoKk92ncyygqiyWUnfTm2RXT6XGtbBFpuRgy6nU1EDQzwTgweqE4iG5dgo6eNQU3rX9HMdTsmFSXWozB",
  "key4": "4m5FZWh2XGo6pW4FhQ5Pb7oX5w26yhoo8bEfaZi3xVvHBdJ1okdkV9Dsh55zz3bficwvp6cMYBoDA9MZjLhkDHUC",
  "key5": "3xhtCFwkemgH7TS5XSKN7hyAy8aLQay5gVXpKP786RpzutZAK5Zn79uAHQwvEhsGWK1kj3RrmweFFjGCqXf7VXuZ",
  "key6": "4E9CwaqB95Wmoef951MPYKoKp9oW15uqMYqGaF2vx9uXW1GrBVhXcgh4QG9MdzT7pdFjzWLpiAoPGpB1RhSq7Nbq",
  "key7": "4FmzqU7hFkysAxUAZBTRw1LrcpwiXndGjwq9hWYzKBKQ65advusTmWXnnt1c2XQYZizqr5QePdy3RPHFonn3BMZV",
  "key8": "5df7hBTcGy7T1skb8Jvn9gB3cjijDeUEzVHnAf5SyafNvvpG9FTjDMpBkjB8eYwQA4vzeQHThWcScZVEFsrHXB5L",
  "key9": "5oJZBTLupXYM5PeVjGx8B9f3cMVzm58NiRBPGJ1YJaagNoB7xMivLsie7v9WRCjhowRYS8ovraFSgz7yYwhUXX93",
  "key10": "31fvwz6XyvSQQk1JBoqkX85GKD2d1WjSKgwZFak5SrqwjdKYiJ7fQmNjtsGYkPXtZv3eVrvof8DYC9udHExfiCDo",
  "key11": "3wHXeMdhgkAv6CGm3X2r2srfK2Q6vQWoQgJQtBJg4hTzHJszB3zyLEvpP352gTjVe8rDwjw53awpCzcbPdy9sRUM",
  "key12": "5YSe77W23ghQPABxcJVe5P4rNH21wTWvZJ1HysvGuMiMggXACvusxjkgT1pWRMW7SBwbK2rCW1EmMiv1JyRmoCCJ",
  "key13": "281R3XwtnRkaqY9rcA49pHFM2YpzGAyd6YaYHoVU9b1BXotUTxWXRzPiuKYdJTNr79kPLdD7ic5SySgTADZJTG5y",
  "key14": "41PwTJjKQPsYkEU7P42QyQxea1nSf5LSaVZrT3mh354pTURandX1Dbb3Be9PvqqLeyum6eYXrY1xR1FtiTtiS46h",
  "key15": "28Mfya4inRCHw46bRzVhN5UWK1nQpV4xppWLqKRjbpFQ5i9p1g3pzjH7TKSBBMNm5DMiW8RwCJfR1JewRoikEL4r",
  "key16": "4ZfECVAHHF2JK5kcBdM3FbM1qPMkgqZEn2FEgRfdwbhAyEeLskUyuMSPs63MZfoRFDzC73dLBghDnwYUG4orug3H",
  "key17": "3pfnJ78QjRYPjqwuPbx3C2Gi1DgrwN3iy5BcLr8j2xARxf2G36XhHFtBWEZawvtXLUXuNRcSrhYWv1rAKiC2LFPf",
  "key18": "nVRbLx5CtUxZ1H9bSX8WoPeu2kn9Y4YWbeM1b3P16d6ARTuuLgevqvcbiZDjK7sLJGChgRYigzqW5FTvjrzP2nw",
  "key19": "49KeGHgadozx1W4chWsKFVwkt9zKYQVtxNi3RpnFvSLyXdfS1Py7STxjT5o6Nxcg3aSEdgySuGzgna96qwtqMJAG",
  "key20": "5m5jzCnTNQmaFWcRwVMTsegQ9p4HvHdiyTAR3ezDoX4wKxKzZxG6qKz4t4iLVbxfwi7UBZ7KMoXTbUsh1DVi7Tkf",
  "key21": "2J9otnM3Q9rjfCCRcfjN7JJRGPwXUb92VetCbfnKbh9qcpcPreFAZ4p7bWfydBZCvLzrmcHXfKYUQk7d35oJQqk3",
  "key22": "UiAJgdF9xi4JNFqbJQbsJuHQXkxu2WRmxEi26HQHN5DfA1kRjLRT9x14ddvPw6m9nmXdfgdAz4iEB2XLRLBHfwt",
  "key23": "4uyNwqGi89Te2QuzFAMKZB8kX9kgKTTLjiHcYes4qAVUFxtXzAJeMS8w4CuE4GcNib1NNoqCx2eRMvVXiosDXPp8",
  "key24": "5bu9BoeETMpVKNT789fp6ba85HojMmm2dRgCiSGJ1hcwS5fpwy1JyD4x2fyQ6nmnSpKYj6dUAqP68qAZq9tXri7u",
  "key25": "5uR4qLJiQcyKAjir2YviXJSEQGQrqEkc9gevmwsZJJwXrLAtRaBHivcJBpeDFdaGB2gJcLYfmRpw9Fhun5xUdZr4",
  "key26": "4Zz76AQ4bv87gGUEEtfd9A5PvCb1Mnfg6EYUwZV8CgUa6oKskHDdXnZc1JiVCDv7w7YLSDBrcnLDGNvR8LY8ksDf",
  "key27": "5R85zV2ad5AQ2idWYE1zmK3xnqAzVC16pcnER6MavRa36zaitK9hzn3NUXrhSiUZD8AubdGtv7ud5rfKesTWtjGs",
  "key28": "s85QoN9VSazLXQGPZpzSS6PGBMbRjr6b6b3fWjdc1yUyYbSBpJZM8wv4CxATYtsJZszeJiYfvmD8ByLJoy8k6K9",
  "key29": "4ALzne2AzkPPhpoRXwFRtpr33ZbCFotrtVJVYRbPG13UmpTt4DVaQjqho7yJg8sauYpixFjY8nbFxgwqq7H8ZsUj",
  "key30": "3ne68BL5Qr1687k6Qb3okNwxRDhRN3kE5FBm9YnXnMx21Dh4CML52msiyss3uzhAgK4zJKEPkGC6DPKnnqJ8M6AD",
  "key31": "4Rq3HFnf54yFER85eM9rbP96A3zbw64jxH7woiNixuMGDZ6D1nMKCWKT4yBS5Pqf9Gc2G9KrZ2tiU6Le9RninFXi",
  "key32": "Vqe14WZmEYUhrZ58srvbcBFwBdcQoppcXiWtDDrYYNGz4GJcEX36fUHbz15RQCSCMeEbn7Ue6pm3aPp6DuMigNz",
  "key33": "5Jh8kNZh3N2pXXBVSYMygCD9UNMpNymh6VpNjHAggw4nV2ZZ4gshPGJYi9yhPmvAMEDxDpTXCoEbgYb974XCr4Bg",
  "key34": "58yqu52VS6nQgoADpV1bX5LzocD8bKLrELZ6o6hFDLQ6Q5f1vQEXxW77R1LrGt6FdRYDqqdZKUh9BHKg9oba6DrC",
  "key35": "3pWGHUP5h3ATqqdLxv74FAffWkHc4HNGAUCzHj5R66UMyw5e2QZh4xGx4G9GQ913RiKBPxkWS2Sh1oEUY8UdiC14",
  "key36": "47tfRK499JkQTeta2CNDHRw2YVu57wBAiAgZ3LE5ksKbjh3dpFKc3L1mqwUkxsecr3mpzto4jde7YVD3j1XHjoqH",
  "key37": "1nDCiYmDm6QD91SDNG1SsA9UD8SGzmeUFtv84ookvHwVDnNoAL1oqACyuoBFWQ749LiLZQ3SYFoFczfqvMTyKDM",
  "key38": "aHCYGitAc847bkTeZhFDchbpjBLTFQMBpQYuXNffvsCQotVYnZGqzMyV2ZLntgiVYwi7Cy75KGr4brJtwsZgcVv",
  "key39": "53U4kAkToAkjGyNG6gnPV13nRhN4BgvstayaYSPiogSGE19MaSawcqE5B5EQ9wnqB9ngMsU9GdAdxhzAKDH811qq",
  "key40": "2niKDLQcfW4r4Qmm3DCV1eJ28oSEqdoZpJNrQ8tefZpXkEtfQtzrV34N5yi2dVZZco6gjvUdRqgxxRgkNUapD8jQ",
  "key41": "5PdMMo4DLuGBoLiMTCWu1Ka6kn7vN6Cdgxunf9AHVpZmshDCFWwsZeMnttRTXNs4Rk28gWRitWPKNajrH9DWwp4c",
  "key42": "8M4vZfKy9SDtW6F1HDBPns8DdNQciXQtAvpxs3Ti5m52nsjQA86SteLnu7t8g9KUJYe6eu4YyNYt9XhmeZWdSwz",
  "key43": "38WfxS56cXsmNW8xfswxKq4dKpjvDaFnY49LayXrm2UfoRoQG5XdomDGvJCR4SJueX7bc1tmCVGdbrPXu2HPtXMY",
  "key44": "2pQkgEYDyWRc63cvWqHdvGvjUMU24yr7mu9VU4KSbzd1EsNLqaoV1EsWCgMqUSJSWKPRZo2d9cjjZ8F1ann5XdJN",
  "key45": "42hsRkRXjzTqQHGbDW6zZydAyyYpbP3zNXNUGCm2ZWqTCFHmM6dp5go7s4ffnYrSNdAE8N1eNk9UAMGGEwkS3wC8",
  "key46": "5H1yZ1FRy7rG4NbAMmF8T5PCj3DBqnfNwHK6YGKCa1m3bp8ZFSwznvci8FYJPiqXbSsW5MsGM69896fN2XYFS7Mi",
  "key47": "5ouxmxUHyLRk8d3qeaXrJCaCZGsupVf6yYpjFgsP9hsaEFrvjUqWAjtBSSoBK1t3FZ7kyej5Rp8b9Vepdcn3387n"
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
