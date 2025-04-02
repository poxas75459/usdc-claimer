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
    "5E53VnviXmyD5tc4qZ854rbcKrvsdJB8bxXBtxYFM67rXbh6zTeRbr3RL8EHSxXA7fwGxE19Unkck8vf5HzDA4uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZCRf1XdeFiDNbwReR2YuUPdMuqUSKtqUCxek2BJgyRKJj8jLPJU2FMUD619VL7oPzb7mRuB7iLkDaQPgX99Pzaf",
  "key1": "2EksWUUfpZY7gNZqh1G5djC4GmM5UaGoxDr7XkBkmuV8sGsDfAB8oojNhou9prc2zsGkQyMdi9ZPg2EnAixjH4a",
  "key2": "5Gyp1MSg2fkr7wwAazrmuPQDJttDLQTfMrHVqPo7zoZbvZ8sveU9dC5BmhjDjiZn1pyAsAZPXMgPtnpGo3A4jRBV",
  "key3": "21MFNTERDB1oxjw2gyPPec1qER3wtitiQcCFPFvwXvVwPobM9pMn8HD4HBr4XcvAGZFf65ShN1WhjCRD2ZfAe6hr",
  "key4": "5YwGNTsKWPrFMNELBJZ4ioaxkmJ4hK4nivgz8wicAqbzsCzLmaaVGwEHJABRZZCTCZ2Eo5AUzG9MUmsiZxADXvd2",
  "key5": "Mhm8jhUomLFPoFqQE2hZSM9woraS8NW8tZDMq1opmuLxt6z87AJSQAFNWQ2CFG6ZtKRGKoEkhZUK1ezZmncFN1G",
  "key6": "44EacSoDwks2sgqw21mRAx5iremKy1R4ZcTfLBbuFdrbe8Mn9z5QXdM1gDWDwEZQeFxV1oV3X9mXhppM1B6hrmT8",
  "key7": "32a3qHjb8zxPex52xkgg8pB89opRcKqVSg8FDGNLyPAVTXgqJ7SnH8YgxN784Mj1aFsgqGgsNgX5xNvrFvL7VFtJ",
  "key8": "57FRRzuFzVUdWqCtCZPzvJcaGEE5VzwNxPRAUq9j8oyviErUQgzKZFgD78zBLXz8iV68X5FEC4rkqQAXfGMnhSWY",
  "key9": "4Td4o3JQXe7gc3XwFNBfZwnZFm6odBwH9DgyYWixwYpErPEt4tWmgWowRieqrm3BvT6mW9RfhpKz32b3XZM6RWmD",
  "key10": "ABfLxJwnqwSDoEjH39vLxKgx7Qw61Rdq1hLHo6bjWHh25BkHBfihW4K6KdunKgXS8PhDNRSadpmYDPSMQufDiAb",
  "key11": "2UzMMconboBNepxVtEXscLAaV9ASaS6NvRXyfevtaz3BEYDDKzbuZXu2Cj1Jxeon6UsTMzBSEq8tnRsudJWFC9mb",
  "key12": "4AymZ9dPMeCrCajF5CnPftzBunwrCjxtGN1Z6txLZKkr5c95zu9R1V7AbnjFCwxZzmGjqaFw4793Uin6tFKDo4Vf",
  "key13": "SL2g1je1HYpqLnLBizAqU8cYhgaaLsDttqcwxtD4kDyhBbqEBnosAEz6gcKjeNy8cQ4CbGUUBSWapZvZMHVecA2",
  "key14": "3yTJC1iYT8228bwLb5TJuTKsEyQh83HEsKYQ1U7muzbxwNyeyHVZnjHfHuPHv1MukXm91t3K5ojokBgmXoboSh84",
  "key15": "WPLLAzeRXgYYDmEUGVqWKudgb4ruzH9RoZ1QQAYLNd9SLgaY7Ezs34MhVy4pgvh99qUmvfQh1QLeSofT1xY8heW",
  "key16": "51mmFYDrZzX48Fpjw2nP8VtSrGqeXoWoKMhNTy6W4ZcRBYn5WCARr1nypuAbweUwEhEUkPJwY1V3PnPfhDLz4nbQ",
  "key17": "4GPjGcEundXiBTV8s3X4FKKHAVGHQPirQ5sWJGnBCe3JrPTY57mGetemDHp9fWk5pJ52MyXHJQEh7NyzqgeB28TM",
  "key18": "4BCLZrPfz8aLVWoULk59rfFSwCDZkgJKTjWvSCfSLcEhEsyw4TSoDuo1Ue88UvcXhQ6qznAWUrcyQndpqu7sTEdN",
  "key19": "3ea2T1unUSeGWzGWyWaypisVosxCFNg8FuZdDeoVzJsjLCqr1PgEkfTpDg83vfANFEmMPnRniQyZ12UD6N5HR9Uy",
  "key20": "smcp7k4oxy91vtZAg3kaXmCLak5Uu6L5VUUihVHjsr4E9HsA8FmF7V3WQJKAezqRpTriPMNtLpvxQAKT7Yw786p",
  "key21": "3xocVQ3vzrpbG3M2M7rehszFgHENWSUqzyWTmDXzxY1KMgydvCHsrx527fE9N5iJhj2ehgBAZD8aw1aLymgmFzzo",
  "key22": "29CbgwVG1v2tNXes5GVSuDYGnsUYK8NUs54Mub1SQHXkJhqJM5ZAyKGTZRjvg7MxMVjJn2rK7n2qjwNr1JLEgVD8",
  "key23": "2TfFeAt7XXgz1FXfyiXDCcfEk2uTgc6Ur3ZSzcu7mzkf7VbsLh65p8PXFeBqgtziZXP1o9XDkKon7L4RQzfoc3RT",
  "key24": "2i8oyYiiHRGw5Baq4vdkL7Ap9NpdNiQCYS9UhVptJvwDUsPNiBfBL7GBhTyYetqnr1BuVpGRFe9cBFqeAnZYtHGD",
  "key25": "nDj9w96LuUuGjfkM2X1cSDhUUP6Bnre4cShgmqYRNfEgj62uxEU5HizqdTneUagt6XMtuiYNnYYTWNSqYEJNY7o",
  "key26": "58MWRzjrkoL9Gh66hoVD3g5U49nRkaiKV2SHdHAfKR3gVNNQKux8Wtz2ftJmcGsWfXrJJ3kt2UHpuKrzPg8BV3Wp",
  "key27": "4AYJLKyDWrYiMTBQbHBDne4Smcu9kmJUBz6vq9QvgJw7ah9aSwbJHTKudqSjHXF3GTftkEPLkAqeqFeFnVzN7w66",
  "key28": "665V9QGi5Sejib1AEwx62iW4T9GC4arQpVEgK8jrJDP4b1uSeSMez4xHWbh4suRRZMBbKeJEYLLiBKYCk5unYaWm",
  "key29": "4hhuAmKdavn15y3reofGk9U45wgpPh7EwwJ94fVbdn5ZTyrE6w53moDLhBSTJG5Eaexu9wb1weNHhjcvL8SY1X1y",
  "key30": "3Nx4RR7JH49TNz4CDMP6CgbEbVqXVJxiqnagwetr7Fq5sMtdguAbi2jeA4dcJCdTL5D9mvbSqtA3zskjpjESKU23",
  "key31": "67TdhynSAFD9QD1k3Cqxp4ETQu9WaDdjydYmNLndyRRsA1RnGUkVTmHkEbziF1CfiDwauiRz1ihG3Con7NZSKA2u",
  "key32": "2AdKTtV9CNudz9HJ3AD4u7x98egg4x89SDyBgNWDFi9s7EF2kig8nKRE4wAo3HUdJwfZg4QmWtpzZsWuzouQHcZN",
  "key33": "2LeSM83XVvCgF6P6kuK1jxgD7MHWnxgYmnHB5ifX9X8gGdhkojuTmjTw2RRnNspdsFKhXFTubbhad7WhqQECwjfk",
  "key34": "3ZjDuPdvcuh8xidyumqt7BqtWj2bYzJRWz5TUVaGPfSuRescdoLuGUQxMKHyincKfYpLKn1qLtRTahekeKYTfzjJ",
  "key35": "2N6jhdrrJ7As1ccGG2Wh9DbCzvuT4LjpUsFSsrFUxsabtcpAYE6yzYhT8Syd7dBouZe1WdUn46zQBWpa7YshHkPL",
  "key36": "4DFCbgAq6ws1NwbJ4jw6YzUhwDBEFsbex7C8PqrCnLVGf8Q4hx9FcbrSZJnPjrDxnYXHoQzF25CupjPK2DZ2FSti",
  "key37": "9NrdhH8LLotMQSxPJfhCtYv8wsvarCHGfLJrh43kZXzjs9bWpZBBsoq7b5tkwZPbCuUt88FMx3LNhthabjACstU",
  "key38": "39wdtW1zAcRzWi1due5dSwNFwfSW45CuJEE7wHFr59gy7bA8rHpw2nKZPkTZURUup6eNx9MHqWmouNj11oumCrXH",
  "key39": "J7rXGxwYuG8aoaiNixudFFnRge4GGpsbgbMUf8hoUXgct8grr5yDFCAb3ntyRCYSdC84uGjmMfcaiv2Ct47vcCD",
  "key40": "28SVvjiTk5fv4zRYCEWFtz7jye62AHGwx1FgUoF7Wn4XpmYBAP1qUrJ12TTA4jbrVjYKRhkCq9XkaXxXDrk9abs4",
  "key41": "5T8kYDQUt6RWNNzea9tMFuDZtDW6NUfns5YXmY7kPzodEjtu1PmCYWsw3RRcVH9iHQDpGrMu695KmyA2XAVzYM1v",
  "key42": "5jm5RkP5JfUxmTgkSMBpLYxUH84kov4v2xw5espzjmzBcGAswMKvz5XvRnqYf25r14XdevMRyKZRFbP9jctRdT3U"
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
