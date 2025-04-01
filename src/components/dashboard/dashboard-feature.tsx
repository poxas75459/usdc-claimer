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
    "4Ubki1ffPmGak64XacCVghYMY6FAUPSAWWTEVVEFBNoRQEZ9NtfgPu6Ln6YUg7vFtwjJfLYYkvCGPzuC3DDCDyUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arNBkfpA18XzrNzvMwrtawyr7wdyAxauVKxhr6qLz87d6ZvYkFRrKFPXmobxaD3jYwBsv951ZFRqhPPn7ExQd9t",
  "key1": "3hEdaHWA2bLLWLptQQ4YbC1hg5YRAgK9viXHcrGLU2htujsWNpo97ERxy46sKap1zPBRwBoAdZA8uudVkKFwHJTu",
  "key2": "5S7PCB5xL8VvuNiHrME74ddbaSxjSX3Es9ws8VfwGbWTYouAHmjoZ1SSzVMc4ZxsE4o4JJtqR2ZgkrYEy233HFSn",
  "key3": "3dEryCBf3sv1zqFSTc6EcPXFLqEvFDRG4JXBoXgTHprWZz8wmRBARjzRQy4JJ9zD2nPhPxajTrgHoif9VPJRLi3S",
  "key4": "41K57jX5mNMjMqot4kQC7R5Ubmr59JoajYjPFvdHgswkuL1MPd3cMhnQnrhL7AB5fdH54LWbFAyFYqwxn7sefifi",
  "key5": "4RdLGokbmkSR872nMSkQrmNZcBFShGEfzk8HcwDQ18oJpgHP4r2UNUVBCRoERQ2d4uky4qC3hEByBGbDRVx24ZVU",
  "key6": "RPTPFJToE7PGp6n9Jp9yg5EJeQvcFxwGU4tz4f8XSp2v6b4CJnZLx8PdfEmdnMTnUVN18PDeWX3ZQXi9vH4aZ7G",
  "key7": "4HwZmbpFauGiYTL8SkU6CBjpmuLLECz8ppx3mtDKKdswJZSXqH8F8rw8shmv1iVgSUXPHdnNaa65XJhZh1AfC5dJ",
  "key8": "4FHEyeZ1vjYd5EgpLncAkkTvgDZMMC32CjMRjXF9C6wxgyGTN2ha6mchPovcMMVkuUVJqt8QXDbjQaGDKd7R5Vq2",
  "key9": "32ivcNJSp1KrkUT6YQtqjVP8sZSrCaFu997i3X2pDCDc8xNxhi65MXLtV8GLvUjSLoDEb8VG11BdLnjttHABp5HB",
  "key10": "2mU88ESFsj452ZnXWDTiA5DmfhMU7wDwyhYkWc6NxA5YpcnbnD5JfvpCqbJ8FMHdnUyKW5Js12J43gpZi4xeYtcx",
  "key11": "5P6tNq6sRKao5qrRUeL94L6gch2HdFcHXNxk6Fa74USzPgXGs9yq1yGRsmuuiZgYrodT59muwk3wsydvdnQw1xa3",
  "key12": "G6jWNUy9qSx8G1bbzCbAAGMDGwTNB2fqojqTpdwjbJzC5DtCHBD4jhJtXuDpgtBwtCwKkjaEdjAgLqHFY2tdSdk",
  "key13": "56Gvaw6RZ4wGixSWuRkxEoVJKeifL5H42SQRPiV5CLHDzYiFDpyApo6szHwTwyBEaVtBBkVci8BBonVUJTM8t7ZC",
  "key14": "5r2VAn5Cpj6fAWT54Q8ZURdDU9ZXH4wgiaSPFt2oXPMtzQeec3svEeYzoQpKRPei3DKTAB6FKKFZSrRuBojgCbzm",
  "key15": "4hMqtTq3Z3SS2jvzsuTJW5L8iAbbjTgumjEjuaekZPB7n8i651NZp8qtZu3VU3chGAaRTbNXNcLgbjgymjizNjCX",
  "key16": "2Ag4SgJoNTKaVfJm1vQPh1tYrfrSHxr3rKrFU1HFncGAJMm3meUqcbHojxHxynmCWM8MjgT9ukD62CyuJiddyyz4",
  "key17": "5jWcrEaCQs7pznYn2NxjRVhimBBPvF9StUbe4VJQdT8qfXtKC2HoGVgPW7LZLfa4upNZQV3BnxdeQyJeS2DY3wyp",
  "key18": "67Ra3sjJvjm78J8Bf4DuZX9RcSGRK89uK17NXN65EBzyiKzmfMciyNN6u4VCDBiBgLHRwY9HS1RyZ1xyoSR2q6y8",
  "key19": "4dmTEiZhmNS6SvVg1qYWaF47d22Ne3FwsxfaCTN2RxN2rjoxibyjyQT5xGjDjNWEowzYGNJdzsquYVzZYLGdUx79",
  "key20": "8FkHtSsrZYthwWJ8qQLdPsnUxh3mGhLpz354C56akLuXyatDENcVVvL8DnhURGSLjfWFGTUSsez94U6qArTS5Jq",
  "key21": "37i8mBHNAX7nBSRygn9XC7sXSCZTwxXMpUBWRdiTQqmzy5KWkpSpGkfQkSea2Ny9RfcKMvP5tuDbdTkeNdNn7MTC",
  "key22": "3d57P3GAVrXU49aKHrahDbxZCi7ay1YuRR9wUnq2Lnve9Fvs9y68dBYAag6tZw2TZDvZFi3s5f66X5xDHBG3Tbf3",
  "key23": "64G6tffCEFNHzJK4RSczuMdJgucFmR4GMRGwU2f3NxW1s88adRnnud18yMBNRFE8A6rPo8BVuKwD7uTPonxwuFnc",
  "key24": "F1NzBDLdojmBY4GefGvKChKDBgStsSrV6Ynd333pkrRVuWynfk3d2ktDzS2arPCSfjkWev6Tns5uMWAUpgxXHKo",
  "key25": "2rJ8WuRmJRg59NHBmP1vULhNKdimq4BVG3fqhFgWw7t7Nu39r48pchdbEYQxxDgbjKyLojKKndnu2trSD6PT6BTP",
  "key26": "4E1AvfqoeCyWyeyLwAtEezqWWSVQmMuvgdmmVypUzi761fAqjaxBkQTdN2CNxawcDWqqY8ubTaaXUZL48TfkwDxu",
  "key27": "47xL6LTmriXb2pQACnmQxp1RbYRrPxePAeArsULSvZ3LRy6ncG5pzrvVy5PMyj7CqctJgR5iyjzpmN15BmzoyxWZ",
  "key28": "2qYrNMAATDFazEGXxcTXGjgsdfypWp9uq9Zkd42BRJ9Xid1SyVQLmcoUG2zMBVU1nWKsDZVoMHdHfsuhfWrcwLTW",
  "key29": "3o6mRHPoALUoDqKKzdrdNGcAPRb6zBkk1CYaGnrqNyiUgB2u4sKgiP7mNzmzMifjdpF1yQJDCRPQAPXyEwNANqrh",
  "key30": "5m6BWKkDjxEUieJV69zVXPmwiy1LQ9BTZL5au1Vc4D79JCTQiNQ6frAC6Y71dE6XrrFg89gnNmfGBfrB1C1SbvMj"
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
