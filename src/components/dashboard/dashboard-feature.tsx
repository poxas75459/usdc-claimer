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
    "5CaxqNmRqcuRZQrZZW2B7kWFy3eDh1cXxCSMHZm8V4wDVWprc8ZVN3k1VRbqnLM7k4hTC73A3FbQx2XU9RqUdrwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTJJdVGfH5Bwvfj34TJztCggABA2Q7AogiBVpiyAMZ9wMog1Aktethe7zAA2hzYmvkXyCuwS5U5ZJ6NPMPDHTwR",
  "key1": "2aw9nzM2VZrMdwHRU31LKyxYqeNGqA9BuTyxrRaNGq66JVYrSJSUQsMUQyBEH4HgnP5JZBtFtCqLxqxVZrzfAWXY",
  "key2": "4ge5UPH6UnFT3yMMG9rRCFdUMgCtQ9PSiin94K8RqyfJuLE5NNsK5msbdgNJbFpEPfn8hYmiquWdZzMmoVEcFhu3",
  "key3": "363kpMGPNr7askRo9PhH6GBqrhZ3BrdbZbaLPdSHWC45mAcDezFehGzt7rGz5JrXjPjM9wZAQF8bCLnr1gcfFuc2",
  "key4": "4sx8MYh9mEx9xBqo5Xt4sP9oY3c3uEPMZVB6o4XBM9Hak7nXAAeLqXEcvoc6LnpnyV343exnbLNfQrobYMFN8gFz",
  "key5": "3Pysp7RAjf4mUjTpCkUWhidnqb4iEx93Lj8266QUnV66dwxUL4HGeFMJ9SWptYhVDSuVA13dn6HGZRgS2itGtD9g",
  "key6": "2wHbWucJCcCkzFY52YXTKnwvxZGTDZc9mrThasghBh2ygT3UBRD9Srzdi7zpaDB7nrFCb7oXdDh2jpM1HGkwTKSG",
  "key7": "4nZ21g82jmDYRmRxZntYJ5xcw42VvBdhyPRsPRFa4MS6qMViLDeNxAuUDBkhwcShSShYySiRmKDM9b1Q9g5Lj1KK",
  "key8": "2s3EkiY97UUtfuaBP1FFPkBDT4fCLfff75zXNR91UbMc1h9DsLySs7NzycjHpQm1eS9vQjxVFBSKqx6mvcrMV8mr",
  "key9": "3oz4tJzuMDtZBfCGMGjGccFXitPv2dwyu5GEiYxqsiZ5HdPo7H4sT7YgYdeSX6rbqJGj4LXcMcZP9JNfzXsrsegb",
  "key10": "HtXgsJvUGbTpTE6YcGeuywgqaaFx7pSU4XWmAjDjj54mL9Te66PBexE1dL2Hjenmm91AusUtBSsH95mTXTEs3XR",
  "key11": "3eDJ3JSfbqSNsC5q98JGAocC8SKHbcznFQPdtcYUuB3fJTBpyJPzHTni5ryeU5WM1gjRfsuyXors8iYi5hC9odPU",
  "key12": "4AVdKxcgLxSTVRjdYRcCdTvqV4gfYmnNca8TEgsPJuFt2szdGPXmzaU1u6FdUHH5eD7Rr6TkeGkB3myiwgdQrZKe",
  "key13": "4kZiR6QADstTeqAC1ZAVrNDXRApdJwpYsPiZQpdXdR4Zy98A4VvwRGBpfqtjSjugrLnqaob2NNAhbUDFjW5g4HVW",
  "key14": "p9MpSo1NUEyj3NDYVdtJiXZYbvTeBrcWqDYpRgZWd49ZT6aLiPozZj6a81oGg9ickSyepHFXBwaN7G7PjRmScuA",
  "key15": "3XDVGCLQJtPDUc1R9DFpMxmjaChrMVVpqeZ3sm3JKBu9BHQv8pLztmHkjatYSSkvgLEDn963RrRjHLoRsYBKi3sM",
  "key16": "2WwYVLtxJjAG1QLSsvngfjMjoN9XcijY4Hqm5X8CQasTR7Ek3Vzv71xVeEhGvJJhSTuqWKxk2V3FmXgPwMVYrc8S",
  "key17": "5wsSmh5a3ApdAWutsZMemLncFm9CHw8dSeBwvvMtagbELp2r88FqFxbZNHda416Pt7KVN71G9Kw3hiNB21tySCwW",
  "key18": "5Ew6BVtppfYpUMRasxgmaFvthnw3K6ta2nqzQ2ddMCgtzyAsvviUqzbkzhTXMqj1sJDGp3tG9CcjtXohDkFVwUwE",
  "key19": "66WkDWve28D3RxvamhFPoEcwG9BU7tswsKUPhKSsBA75aytPpB7AM2PL7XvSURQzncNkFGEtL7w59AFNPLRo4CGC",
  "key20": "crfmAPJcsCu3bbZnrsFQM3mvmueFvrDtvz5tLjvJfG7FS4jVpFxv459tJvSbBbwrXNNmt3gyVyPnr4kC11gd65A",
  "key21": "jXcq7RmsRraStPYKjJxtGkhv2B3tcXu84oLBZy6qHhba3ocnsf89sSrjDDafkeJdNYKjwHKuN743SDwq52UcrNX",
  "key22": "EhP7wTMS5KZpzb18hE4k4qQ8WP713JE1GAQm78K6FSnADihXLPbz1n93AGkfQ4BwvmV7iMnaeyXFAhTr1zxtM37",
  "key23": "3SqWgs86TmjBdcn7acnZeSz3dxuLethjHkS8ycWmfPvUJPEWhfCqG3cw2VDLWa4imeMvmTP7PJscJn5eXpF1y1k2",
  "key24": "2rbqz1NkVX7uHoXBQQgoZgnofEuMezvreQ9gbDjMez6rLg86g4uXeY63CedjBkAZyctXVcEiQp4pZ5FV6zwbEDUr",
  "key25": "5A4HJDnQdYUqwdH2Wjd1JBADekyN3TqWirayuW5ZsuqT8xva4PuWVe2iqmJRbnBwfZmZzdjXuBdduhisz8Fe9xgB",
  "key26": "QT53Ut2zPiyciBPdYAjWCfXLT4mCfYqjQSRakmWVYLzQzXTUw9Exfauk8g1VhUMk1PRB5EJiYgJiTZmy4nsoBoe",
  "key27": "NjsspiMQaupfUKmoNmyoUu2kdjkkUiXfZjMHqpqf2Mqovf2932u9x1r3T38u6m9yVfsoSsShMRBsZLe6qRFxUhL",
  "key28": "4j2iwqcYfy1uiFPqSGTgL9hKMWKuAZPX3RnnKP7tb6X3Hidr6n4XBjzyMtx7v7FThLsEGxZXXjYTZHmtVLzyNvJo",
  "key29": "58EptGvBUiTnb4qHzhyRUqr5tEuuSUiVpwpa19HMqrabrw3yTziUuGECq9Hqa4mzQxM38RgvHmdKaT19gSUU7BDN",
  "key30": "3J3BdWkdoKcfSFqzHT3XJSezPH3pBYbSjasvaiZBMcwnkBoNdifa3j9X7WXfEWudMzKHSShyZuh4ChpSTEHQKzaz",
  "key31": "4Fqou283S3cBkFVazwjUPkVCxAKE9NCNzZtqGiFUC2v9Vhy2giDuFgvEg4kNhTD2eFCxvZNVuisT2jW7yBV2uQVh",
  "key32": "2vju91Zk2c9kBb9mZevyqVmMLKtQLZ7BrWuD3H5EVQfCSFVbasycoZDwRPhuDYmaKtDf7ZJARNku1JfsHrauKBEc",
  "key33": "24W8UFSZtWm7uEgtiePxf2aVuKLix4bJJQCH1mF7X2V2fZstwhyzuNPn8iRGNQfxPWQhC6HRw5CxxDkDwKceYWAn",
  "key34": "5jVW1RChBYb7YGpYKBJdrQuJkjfHFvTTUUY9YA743qLGsrpG74pA67cut2MQXLBYcteZ8i94xJ4jXjNV1qTLEqZn",
  "key35": "5LyhDZEUipzXLi3PmTcYyPAbqExaK3wMEB9XeokVZ3ecanF8aKXwNVTvBPGrSyWnrQoJ3XtSmZnpogxrJUV7EZGe",
  "key36": "2NffyqzS2cD1Kw3qVu4Paxng8hjuoomQfcnHLKyUmjPfPtG4XuQNYttdgzNZgApUgg6JRsbSiQbvveKKqTeChsvB",
  "key37": "4ppLkjpH7Fu3vx3EKc7L8B2yvH9KpZXpcFDy2kGSqqEkcrLw8hMpQUshRm21n9RzbmWUb2j7wX3ZcF7YjVUbcjSF"
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
