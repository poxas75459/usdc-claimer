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
    "bNKyw2cbbGi5ZVNXs7gcCbNfYfjE9AJLcxneBvx8MzDxkeqwYA97Q5TzfskFbxDh1priVgRhzyLX9vYf1cFMaGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppTJZ8DLBWvK2S1ZiWL5qvtu9WESqt2HjmXvHdNPXjtEVJW84BTAecgEYBAobpJFHwtp5SWyuaERZztASiyzZYc",
  "key1": "37wtTfM2sJSqhj36Z8g8Bk2ajW65YHMSo4WrnGGycTfmoX6DukPNonK1NTApzEKqxMm4vipxyipTH5wbPRcLrLpU",
  "key2": "66v48Qy3ZaXyZpJhF2ufQjXggQXgBbanE8MhDkXUqt9nLke9Hj4xKP9GS6YXd2QwMaGNQXpfw5S71jvQYdWt8RGX",
  "key3": "4x2UUTJGtwVgp5NajsPKezmheTuNkw9m5L2ohLDpq6y4NNnYCFP75fxcZEgwfDiU2A1rVoURbJuXxAFubKGKu4E4",
  "key4": "EKmJFDFy3CKEGBjov7dSxjDr2xaoy8Uw8vwVWiNYbxPM1Un4VamDAQon5eU5Nma8917TKuCdo4NcDr2y1oQsbHu",
  "key5": "5pbBAuGTAuRr6apX2bgGX4qShK6vMyUoXJ3oq6V6sMvFxFLVphWpxqXB1YfkRxQft2P7bhSdntpamRADGJaSfgws",
  "key6": "4PAW5oP6ZjdTUNdG87kbjhUh3uk1D2p1k94y5NrxbfYFZhdYkDr8yAZ9B7QHbmPv3FVcNJSGAgErv2omrQ5XX7th",
  "key7": "5xSxNjEYUfz6uKWo9W5cU3yjqkkpsSehWJivsogQXH9EtRGhAPjMsgFCKQg1BSBdDc8s2Wx1dsb8jZL6Z2gABRzE",
  "key8": "4DkHSnq8jgCcMm9Lu5zsoBeAqBDZiJayQ7SdH6Q5woW6ZS6q3Y9vCPJ9GamrXKpCbikAWhaoY9CYYYKTS8oqLoAm",
  "key9": "3L1mkydjcyJy6W29Xwk6Vcr7WPaVAfisL1SSy3YiMg5Ps4NeN3HB2pgdp3knArZDWfhzLHWGFtwGCQoq3eRdkFw1",
  "key10": "4BXPsUZG2F511hS98rXYQ8okCUhsd1FYPXVTR4Ma5gQeKEfHtiBe8BdPMCdAENFhWTzT6F9PXc8VLcHVagubRvQ6",
  "key11": "2H1NUpwNxBjBWY7PUPb3fr9uGSTcrBkaauLyBi8pqSZ6bBLh4JyBm83juTp1kFBcW87KRx7LNz8Su6yhzKqcTzzL",
  "key12": "FXUrHv4D7LZQ7DaSGBcXfLw6AW2jw7VHC3THfWeSSkm3TJzzMA9UBdGZZdC7bGYf659WFCsxec3XEitDY41kdk2",
  "key13": "4HzMvzU329LGtrYvSJycQaLVx8gqqcDgDMZvnp5wKe39QpDBZr4TPLKUq8MVFZHENqw156MuM3d7W3LzeaQA8iGV",
  "key14": "NzYspLuPtnSoT2oHYwXHyiAQQQs5kCr3zLQeStmYnS3n1HCnw9wYCRUH7HeLSxcfbPvaTTnzq1zpeXbMecj84V8",
  "key15": "2v8ux7AbmLVxBuh8yPojQ1RzHyT61JRJWay9VFoSYxdzyhUnQqaa2ofj7akCeSJ3DPUibASqtP7rxnQeb53cLtqB",
  "key16": "4b3XuZ8Z1RRP61g6HyQngUnFdUsKQRmufhWHi1D4sjP9F388xtM1pZy64jX2gKChbVSYbKVfrQMB7vTA8puwbUWt",
  "key17": "2VJ9KfSYDww7xbfWBtKAk3SPvT5tocaxEYQaQpBKPnSBZgX5RikBEFUZPv29Ran7mWZ5KRHdd7xiFVvWuUV3n7Vb",
  "key18": "48dn4LTwoFhTUTKJESL4trevVHftfMhrkpQHq7KvpjHKDJ8crSYi4z6a7uroiA6x5bMiqjpQZJPR83KJZMrNFBi2",
  "key19": "bMgFXb9jhrRQJWLgkvGWwoMJAkpgZUT9rZ4gEDv1wg4xJcKk37KhgC98qRBuwUNfBLfr43R5dqN16qjHhYw6jbN",
  "key20": "66YkEDGGs477WLB5eRnizvtAsHuV51boVgVtcUdaVkGHfG3PF8VroijUppHhygtmSfr85CAkR4FBkJp73yg6KJgX",
  "key21": "5Besz5LiRoQo76BUFwGxBsqUYTh8isEVsRutUYBmYtZBugQ3QsqDdb56kBx5iwseNZypEf1UhxBfGVHAnxnsPWT6",
  "key22": "312hmu4LT4C9M6AeS8RkeuvAq2KT8YYoPcApXTTNVXqZ1SyHxFdKTXaZLeRwpmF1bz2ua75JJdRy3Sjc52kFKsER",
  "key23": "4fTGUcFJPVtaBprM8wsv9b8b9ZmNTjYJSsaEzBNrAPQXUz7mYeAU7druKcb5w2eMrTW6o2a4aoMd4fd4MvZ6dm6u",
  "key24": "9JPiLGUgmQifcTYdnMZvvZC4uFoyg3YCppVcSXJEY6Dhms3bGryqbvEqnBRkgyxFMQ3Hw6tLb7o5ACWJeBdimGy",
  "key25": "4G221eRh8m74VTFJQK9DP7u5qDGZPtDtnYym1x12KckbohqYbyKAEb8DpTUNcHX1aKQFePWvNNNdVaFvx5WKUNwo",
  "key26": "2ZUj6q4CQVFfHDWbr6LeCVH1XkHmnDgjsBLHN5FyNE4xUgWzH54WJUXYr6b5BGwawQqtemDXe9eCs9nV6umm5iCp",
  "key27": "55L84CtEYhGms2ENdGe2TQWJTzVEWreGK3qngBkWf42REc7XUQJ7RH54gT5DzkPv4Sva669GSefbbf7ADh4zzmf8",
  "key28": "5U6n3ERb1JDchKMai31Pdb6yXff5bnUBNcWy2hCjieavtDxaGStyTv32WDCwfvssb2XpggMFYGvP55ty4M8wdzmE",
  "key29": "4NmicFaYRQbQUiZb4t3hDn9AbvQPAYuGD7R2wxLBWd7C51J5QTSHCRxadysdqhyRoEryfGcMkFxo3szE5pngcstc",
  "key30": "5GyxN6ypVZxN45BFnp6XNkzYgMxgRhQd4diRHaYGHo2ppAwkHGqKzerSVhPgsRtXa7ZrcuYmuHEcikB6w1yZsVR4",
  "key31": "M2cPcGsFmAWkwpH3bjThQv3T4GN8q8qK1BkQW2WGMAHonAqr1TFMJxD6PbCH4a3NL8q72RQRfmc4y7Z52BC2Y8z",
  "key32": "2LVeygBfwNoo7MwpKZficnoJa7BZRBstMQZucY9P13ZdtxYfMwMJJttBLKedfkUAeo7URbEgJZxEHTeceCADDz42",
  "key33": "2P2HwiwkWVnssdkErGPm7GS35hm4awPFU6MhNSwtWgGcmfJ8tEJEsPu3rRQ8Qo83ohX6bDYwYQtj2Xvz11TQixyB"
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
