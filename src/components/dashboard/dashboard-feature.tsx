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
    "XLcD371n4Q1avnz32dBdWsTKjsXEWUJW7BB2qZS1ub7otrvK919Kmt9NjQ4VcincyMy9Ma6UsnqzpQYavC7xmg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jmk9Yv5MX6PuYyBMQ3yswF9mG5PpLRycqpujTZ8YU77hoRvKECqvfRr8Y2PDgQXRC2oC1ssFjea3bNM1fTrfBB3",
  "key1": "2ZvZ7xRbbF3qkmpY4nmAciAbx6NsMGqPoGkTcPw46Nb89TZjsoKKzBPfL4uhzXc8qukx2KyogAzCgmVi3paff5gc",
  "key2": "UT61377NHpYWXugi4nA2tRsaywsdq2xTogZQUzamFCQ6cbdMsNshpvdMChr1Ajqadg32HqF2d6tttTCQGJsKkfm",
  "key3": "5avVAW4HD8L7uXCqk91S9NYbRZSfhG5fhRM6MuQpRrdpT8dcWJDXkGYcP4cJeZJjXbiZWGK7LLjHcZacGEdoboK9",
  "key4": "Un3arTw1pJuf2jsXZMt9e7fsLvTJTDEHSrJSzDBKxoNUPvgBmscUHbG81MsZhD2mXTjNSnTEgeVLuToGruZcJpt",
  "key5": "r6ZpDtndtZpLB7YFrnjbhCA4X1khzTMFZDoocS59ykgTNdHhezvjqZFjVJE8URxVmBELw8RBTK6tJhnuziXjpQE",
  "key6": "5ezSe73eDH2ZPHcPmp3cJUiNv4kdv8BzBkj5UCEWwVUcDDB9bRWBtGrbsik2B6Hdxq69J3hktASZnWrRMDovMQQx",
  "key7": "2HiT62USAwh42fCzqTi1Gj5e8RRL6vhtKftzQydyCae5edX4Mz2vCjvFzF1BN4TfzffxGYrJVD9m1BYompQsUtmX",
  "key8": "3H8acY2LUvQpWwykH2U3S46s3puUvB8LrNUa85N1XdGgPEd5ErxGGQ6fzdUgeHkrvGo2yjLf4fU9uTwhWh6KLppd",
  "key9": "4j619XmKLpLN7zoi36zQXssT4HA714P45NLzpweNyCcPfGNgMF6uxAsCFNxSo4ZhbiZqVXCpxPLRGCSM5dvo8ivM",
  "key10": "4KQabwwW6JWRr9sHYrjNoZugp1Xj9QnUGUEtwKZxycgPocjJC49p3LQmTMZ5wXJRZ8BmMKJPAFfC4WzdH64biUm6",
  "key11": "2F9DSfo9ZHNULvaWnvtzkbiPzkKR9rc2bJJ1xehJg2rxPSVc9zWgmdTBLEUQi7KZ14kMRF4gUuotqBYfBnMUdVAi",
  "key12": "26HL49oKdo8JuF2c2och3JAQT5y69p2Xy8RMzqeuxKt7VTBb3fjYArMUNscepQh1ZYisZtJCLxLwHemSHHTt9mFZ",
  "key13": "YFE4K69evZ2YKPbYH4iTxUJhKizLhEaG1utwES1yfgfB9Dkt4D6bLE9jpWC9x5dxdHDBo9fA72Q9esXLNqPHEtd",
  "key14": "28PiDn6EYGfaJAjEYy1nB34ZJgksvYtTc7Eek6VWfGmJNix3HmV6VUQULJnasciubtD24pYJ7neG6u4LuigoT5xx",
  "key15": "3e9PMnaLD12HpvzQoTpN16TunJsdD1b54uQwRCxbgjMr7Qm5LWpC1hmJFoXfRwKmE7Qf3yjGdUJBkdKgArrLHArb",
  "key16": "pmV6RM3xFHVgm8nbPcwVY1g1iYmo8gidMLQKgHk6LpbZvfM1xTdF1AaK7CWedSyxG93ifx2HyfSqmNmiZWGUfrW",
  "key17": "HLa3PZ8CuKh8AWwXKbQaXhNVi16vVgtBFVSjHd15PZT5Z8ZfT4rPVZFiHSqg318mzo3AvNsJ5dfr2xryr8927dF",
  "key18": "5TGX3hvKkZLt4jsuvWmzLvasMDNm9SEJj5aWmhr9tLXHYy49VSrsVE9wUhf7vGRuFARJ8Y6ih46HrtewRwNTVQnQ",
  "key19": "3FFwDQjBGvkhAuRe1cpevEMypMC8YvEqNjoignYrH7MZeRSAFwQiN4xWDkk3Dj3CkeKrshA8wENQ1AJ3MfTwkcU1",
  "key20": "5DAzWDKUBp5ZMxhmUKhdtXR8SLyXvFSfdYLafT2E8SRK4MxA9h66XzMMM9YxJpjTeEo5YJXq5nM3Y55oKLgzFuhJ",
  "key21": "3nWn3PBrojB2ZupgCgX3HRFhe8Ff3StHoWdAuRvhD9EvURU4yieg7uHQSQ6G2gw5TdKgJYEcRXB3iiU22e8cDuG7",
  "key22": "66LgHi8S6JLqorSpLpNK4QuSx7otKQn9VWRPXRGCbn5trt6xBRMvCVUHQqbWfL23TQqGcULnvhGjyZBgCTJX4PX1",
  "key23": "3hZ2YyYUYbG3KpTYZMGa2Pf6JBdS2hrcTAEsx6RpRD9VT6FqxoGpMFBCvUvu5fLwHbn9Exue2q8kW28WeBw3R8gx",
  "key24": "DqxCtXc2ZV3yuDGwYH81Se8SKsRxfcMNmqGokDMo8tjrJycVVqoU7q8GcCw2zSRQfnh1XZpNEmMRw73X5kxHrBh",
  "key25": "3qKVS82RGPTK7pWLxiWXETvKhBFdJKxY8KsSNH7CfP1PtnUZSom5pJH9K48j1MjphcdZyiKV63nPJqeEya4BXCoH",
  "key26": "2bRAUDNmAZPDF375uzEBzpNZhpMTGFb22T5jwLAMw5M2khKmRrePWCRhj5SPcv8kJvnRWBg6kttqxsCKyQmXA2y8",
  "key27": "45k1gagsJaevV54Due6zcRE18qgJBqMRCBg2TGoK4Zv23ny4rLN2qF6YhaApu9FWXt2YNr5kXQ13aUVkRJMWrqJd",
  "key28": "65S8bZAUztJduxFWkETNa3NZEhLgzWFTDNdCEVPcfuR7q2mCjdGgj55XHuDQvWx8iuJVrzKFMdL1JEJCYSJcRzLC",
  "key29": "tCZCL3oj93tVumJjXi95KiqMi4etTVdeGnA6yXnVfbkie63u962zhTDEvDE5YnoFy3MxTKt6ggZeSrFCZ7u75g4",
  "key30": "4aHeqRpZDcn8uFUvUPGjcupN3WZ53g5eoXT8M723MB2cdrJEpkctF5h4CGokMq8WYJyvAFpbPkPPmJFUkpE2NFLG",
  "key31": "4TfN4fr5hXNt9PituMAYjTzQ8KNmCDBVWGU8mHfLkzQCagknarxP3DkuEKG5edzq9Biw7ntqfMFmNnXEdqT1aFJa",
  "key32": "23D7M9h5skxdnYDFjx29HsRd4pyhiVWpJyNXG4dZKmtA72s5NNUc6dur7RP3Wb5EoyiWRPigecuPtec98uJakgz3",
  "key33": "2cq99vrtWSjikApgRmWeVHBFTBSkaHp8k6iho3JyEhJW9e2SRjVRdrgg8yoq71AKe8xvjEuUvWkmPJz3j7UkLTxD",
  "key34": "55RQ651xmeJLPdeRrTp7t2etmgnM2amVwky6mZj8cpWUqhMW8Q8h6mMEyhrCfNUhTpjNeQaYGqsDz3KGiWamWVDN",
  "key35": "5Q53rF5zq9VjmyY3RN1hsPYkBzHVMQ4c8QSVWBnufYxLq24Fo1tsLbiUTE89MjMTqH4kHV1ETMqyKvqujvc9QZhe",
  "key36": "dYWiYonD2kmWNhc2XMxDy7NYtQw4UehvxqrSdEATP5M1FVXgtLoifq3qeking6pArCTq6LNGR9uG6joJuxhDxVH",
  "key37": "2jqrUYcR96o82oLxzX8CbJ8jyEGPYSREbgafYBioqmtpKe1ExXUu53kdTaKQVe1SMTCmJrQjYbfNxPJY4QqyADEV",
  "key38": "3Xgc15BBTBee5pShCybaq454Zu3Lxtx25Q26e3B65W31hdWyFnoLjbDv9iKUajZTWyPGqW6A4UsFrHoK1ghEEPgQ",
  "key39": "5dSASMLH4d5QmD9KGwbB6ZAeQTL5EVRSGXkySKtBSzh66aD43mN8cNkuU5AFL4iyPwJCnRc7itieQPbXNYbpcamb",
  "key40": "3gk9Ye6Ux1F2F3FnDCFr6K4H4d5mdH3Spu5bwNjco4sypTY4V2BRi6nE7a2c6uDMRxykNwAXcbWK9fHbBBEDg9x6",
  "key41": "Qohdwu2csNLc9ViyDNZrD9VFiXEomVS56EycHzG5cQ4pPuQY6LHbtYXY5ottZk4Ks4aP6EQoiWMvX4qouFfRf5H",
  "key42": "52AsqaQydQqyoDqPFfkUBRjnzWwFKvDoxag7YUwBTKJ3jhxHbgcfxGes6dobUyvQ5trGbu9n2NVjsxWYo3tLroUo",
  "key43": "5qQa7bGEKH9GcvuPeHXQBtMQub1B3NWyMMdKMeQMS7TeLCvRnarAAGC54RMpQpo9fDov82azMLjeSzYKaPP5i1n5",
  "key44": "2DCJ8a44SBX8A8zyZxuMTAdj1gCPXM7KbsJFMH4tkUHyG6GQeFyaYE4CFvRQHjpPraSf1KercyWF2B1RnkR1Bx4R",
  "key45": "got2cQusqRednTnfHmQEovh79phPSJagS8qWPjm7CgvQK39Y2wCnoBE67KpLSkydixFwb1acCmWVesCm9Uvdtue"
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
