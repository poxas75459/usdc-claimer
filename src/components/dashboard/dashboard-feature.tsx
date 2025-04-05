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
    "2HtkLA3BH8h7sp9ti8W5Fx7MUxesE3qAeEGPTmU8K8anxrKzZTgtBKmMCshttSgJwQbss8iEzn6xdCVYhcz7i8VH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RoYk7YyKmUK8fhWzsiAzrSzEz649pQPc7z16GXyeU7VGfYsj6Bv9eWQR3uredptb43xtdButtziHD5mMqscA2He",
  "key1": "4V9bZzzHQuFJfLw3qZFrpkbpCj6snrx57eP5PSc5hWmxKcYqHLT1UxGLEoeEL7izQXwjPhcGBAt89G37UKwAvgo",
  "key2": "2ia6eTnzttBdmEYgpHQA3JYRACTk4tMgwbsGoHv6yxgbVaLK4D6LDitmrhmZ385XzZMEPDA9kTvTddTZ1Qh3WKwa",
  "key3": "2q5yDWvTLGNYNXBn1B6LkZAepKEd1Jxih9p3mhnsYx99vGBX6pi7Gf9NRFXisvvzpycvxTdHwjGibUSrogZGgpW9",
  "key4": "2UC1zAXmCYEdhCSJ6jnEVQsLEhJHZ9SvVQpy2omxgCmMCgiptHUtJwCYm3AYcChoDXvnxdWk4FcKKixyBk7AGjGd",
  "key5": "3hbmi3yakiHoUsCbYDP5gC9LfLnmHxrdjN8X3zc9Dvd9Zo5XnqZ6KnXK8h4UpuwZoPCwpjBGmZ2F9DUthonMQBzz",
  "key6": "5U1tR4CmTCQsv7UpKkyy9fvP5p87ag2ax1Q61PeyZiUiwViNjug9BnhiNd1hzy82B5oabiS28anDA1UKj7wYMfBH",
  "key7": "PtCjdRMaHqgNC7j3UmyG4t3hs49FM6K2REaBfm2ukmRmEQsXeygbkJesriWRJYYjF8rYRRFMmwQVkaB9JTjqZWg",
  "key8": "Fcfxs4tUpd9YQqNxS7F29xmNJZZv6GAFXTaF3HEFufLhdo6QEEBt1aNuqHWmLnMqPRoRBEAhVqn6HRbHJdXhrK4",
  "key9": "3vwmnJeRbu6AqU8hNCryFzFqiSRmfifyMJ7jjexA2JHwqHyf9r7vbreJqmZiVBQeBeXw1g7d2sx5GenTLU3nk4Q6",
  "key10": "4v6ZCGLt1JupQmh9Zx6rwaca7cDHYQYjs2QQFcYZxnK3FB1ERtq257HCYAU6arPYhKQomK6M5y6rYRzkkzFK6Uso",
  "key11": "4maGPCuR7JT5nHZwNUr6De8uCBMpbzu19zJdRaorRa2FsypvFnoknsjA4Un6SHPjB2krqNkWu9P3GJRX4qmqj5TQ",
  "key12": "M8pLyjP5Qwco2pKvZiMLTMC7kXN79CdQxgHLS8RvGro1sHxweMgLTGv7NaKExoRpc3RHePFTBSHNwwHMi186c78",
  "key13": "3nTFSUuEc3Vbi9ZiBwLwPf6HWXXuTgiAcU2tHsVD4xHf1pphayhPh2hG3Af6PhxGKWdtDctPhhnjmhYPhQt4j9s6",
  "key14": "5QiETGY9aAdVncBBNHLuEA45TyK74yRTpF4NBFfS1UG1swTobMMnGn4CkZyYeaZ5VMcAikATiFVroWiNaamZWE7G",
  "key15": "4RBvnjYhp7LKAzdRf3PxVTwFtbtqrCYZezromcDeHvQXE5nMKjyDBYYDrLpaazbK6rCdVD5MKP8DMJf38A1V1Z7p",
  "key16": "4494Kzdi9NPyGWBVcNgiY6oMHNpiHqwhCv4CZDrHAmRp722Pn6dmK1p8T6JGr5hxjoAxYwKZS3QuZQHbbffFu7c",
  "key17": "veD6DoxhnMaojgUXCU1T7GEULoeoD8Zbt8BRadi8BKUFvfUApQPnZYGV4onGwyui9CajxbryhMYzcpyxmCQpudQ",
  "key18": "52YarVQZUaN244pWbREgBq3rqnyVtehcB8FsawTkTwrd3DLysKKd6jgnynTyp5Rs5fbm59oi3i56ecoxWyniod4R",
  "key19": "5SuQUCjHuyzB7wVp3ZR7WWKj4dKyFGgicALuHuBKn1gMJeQ4nskfQ62Cz5ig6SUWGbFre4HK1VRid28DLZbDG4cL",
  "key20": "KgRGY2v4bBrTyxBXk8kRDtVqPBcyecQPDCnM2B3EKYgB7RucZF2PqfZamC8LkW6C2nXqt2mYAYxbTHQtqaqk3oC",
  "key21": "2cRSAq2a5c26XNcQPm96Ssq5hPJGLGnx2g92na7AFywCv69o9hjQ7dh5gsuUJ5dnpm36yMDSAiWESRxhi68RiEzS",
  "key22": "QU66asbheWcZ94TW6vfxBp3ZgUnENdwz8D4W1rcUaidnReHjDmPmAszpF4tuNDMxYh2SkNpHuCWdmy625wWkE5w",
  "key23": "3fb1Bm2BJmvarX5pqCoqAqfWiJRVHyMbNM6MkSbttUjLm7c9KrC65ETeMMQdquN2m9g54rT4tp9cx2AttreY1NjU",
  "key24": "441uAxZAogY9yoKXKfLrLed4M5HwNBE8yQNMA532Ya3EjDmijNsMD3mLFZm1xV7ydQeYCF19bH6dsWbV6D4gY2Uv",
  "key25": "5gwYYkKzUUUSfNGa92qndAXmaSSEh2ZviqTAF6LbZS3ZmxEfXPKy6KXKbyCDs5hnEDRNwWiTT3gziDTbFfcN64Qs",
  "key26": "4oFYYPbfwUEvLdAmosMk1Ax5REx1cS24bmnf6uFFcKUBDg5Xr2mwEZNnidSK2NSdwwdC3nsaj4FqUfiJKijGRfkp",
  "key27": "4errCV6qGyLvLuHKp9XshBFvEfBobbqZDaNWrKt5w5ydSuvP7DETWSrh3q6ZiverArQwV8wjqKCZ6DE5KB3J4VVN",
  "key28": "2mxhTuLBwMvvmGGdTtrAypZch5ipz8mJGtJpmmWLFgQzYqNHZfsox4y63ACaN6pBvbrzBu5FewYK7oi9eDN8HYrc",
  "key29": "NRP73yYRK9uZKtsDRXMv5tx6asfcVztkLsjAUH3ftpPvnAUR59XZfmo8h1ERqFtsorHUn6jfH2tB5L9iLeS4fT3",
  "key30": "41bnznT1Kdat77Q2o7Chrj3ETgEjt2KDQRTHruQ1j9aYW5rmjy4VQ5H5i3vXk2iXphZsPQzAjsF6CTbTRZLAxgHc",
  "key31": "4EHZHymYZprEmrLPwQRvtwtt7vXKXm3epJ5g4dpCnXCYBygXpxtQEqoNgqJnyL1jVd93NLx27AEBiEN7E2MPrjbM",
  "key32": "xMSPvhqrYXX4Ek2qisQaasK11EZUkucXiFVZJJVJaDaWjLznki4nGVAwbzww5kLGyXUPa3ivAsGbxk6eoN584dC",
  "key33": "3GjTcJRBtyJphnppqNSE2MdBKNaGTopkfF85BZfhv321cZP3zBf25Ey7Q1NVncZ6UhHUirFj9y3648PBsZDcWiRE",
  "key34": "5AoF4q3XgFTbejccJ8cPUmMwXWfYLwRm6eM5XzfZb92e9wGwsQ85N5EmSgQrjCbCf8otd4M33yrAm4nBwsDkjDbF",
  "key35": "5PkwuSnNkxZufWfSWcamm1XFHA7vRUXe4Bsy2ebHZBCUMWy2Q1pejXpvg3cjwpWWCa1mrxsuPMgviGtee378H5hd",
  "key36": "5cJ75vqBgV7FfVUbekKhmwcrY56FMfpZhCfknuLCgtcCy5Hamtrd7z9SUymEqBEhStCdDCmUXFMhSw7CJghSUZm7",
  "key37": "4hsYm7vkeoqGp4bdfSAdb1qCKbU5aoKZVuQ3PQCrtx6buBv9twTqoQmTrcbKoMurNCAGdRL7fjA6P4wz5C5K3e9T",
  "key38": "qxSBzs12mCZLQg9S19wsUkR8uUW22zMDXbB6oAzJMgRRNuUU8KHNRa5QQFx4odkFVkLYHnxnYCFfrAGpUcpnwna",
  "key39": "4wk3nXghUy4Su4vpJuTudTXo3TKiDPfRjMXUcmdUdnJdAUqdUUkqjA1tZYkWFxZqb2jqENeEYHmiXByTTqKcSwwF",
  "key40": "5ad9P5UDAMKe4jgD6FRapAmp8tfLJouCBavPyUvuMjJtGzVLx84GBQdPnzjxAyqYctZx6wvSUK47eiox1AB6dpD4",
  "key41": "3tpMqcvS9QwiFYC82of9mDLXnHYS4Ah6H7JH4L3biyvhRb1mDzu4ZzG12StKrxTydVaY2qjtxarcJp8MFVpwhxRX",
  "key42": "NnDGvDB5CbFs7KzkqUp9Dbnrk4URuR8DMUTgZ6gxh5mGHWpbCCjK1iStqZZA6Q54Q394YCUgEjW6ddaPcTaWyDx",
  "key43": "suGGnk8RpRB5TM3vnV6qWwEBuiAXscmfZ8ph4kM8p2wZmhPH8i1Cm9EmnCFyiyfzViRCud7VS1ARA8iuYXq7SAm",
  "key44": "2i3qBr6P7LPwN4zmZuA3CKNoNptgL5tcUFsKPVdBrzJLB5SHMerzvVg5RfUEYe5TNfcLwbc7GynA8LDDhebESYsS",
  "key45": "ZuyMxjDKbp43LfDDSfYn6x9dz3qnSntahaLtHeLctLeEvSFKmL36qkE6QKq5VGP2XFU4TBUAg5W8ZLsAgBUTjbY",
  "key46": "5Su9FQobcZ1iVqmhUM1Qa1EQbvbrDCsyEXypmhXsJg4zrHztWzywCLhaWVFab9LZYDBnVeHXg3TF5FGp4KPH6jgu",
  "key47": "uK7CMnjKroy73Fa7PM1cBS6U3Xen4HVK2ZNNTHLXoQ9UwUS6kaRYnXo2SEdryjR8BjzkssqDu7KkTuWRTNG7hvq"
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
