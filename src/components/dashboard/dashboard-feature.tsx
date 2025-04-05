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
    "2qYrPuVF5Wm3NyKyStUa5F7e9zGFozuJJLmxKgpLomYcLWWwH99SgHirQR7Qu6pycTH5gxAprtaxdupbvyrfWyBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBrDejoQJzo8UETeifwX4ctTeeqqgkUxPT6AqaDbkrT3BWfVPveRNVEKWU4bfAzzCHnUtZ2GNcW84G9Vt8Gpb4n",
  "key1": "5otsXYeQZtFT1UigZCSPP2xcFbB93nKjMaa2yAzyWNfciYq2fUwj7wvAFcwqoMm2MpsXQhGQuH79WafY5v7c4a8A",
  "key2": "3Uatw2nLbGPEBj6AgVcviVeWdhWDWX31c5xy2VdEHQXUDT7YZ9LQRsjHuu2G3zWzgbvkCJyy7HSZ2BX3TH2vE9AQ",
  "key3": "33K9wQcj7B2SnQ8jnZibzPYFj9FeehmSsGXuQEjTEPPsgtmiSg9GMjSY5HWujDHun2hikmRxAQzX6kp2Y4xrh2D4",
  "key4": "3c2sPxizrz96ajVr84tiKRUZLNq8q6UTzQXM4ogUEFQKSfyMKrmsqpZXySKi59o1dd1drBMpnqQMUTHf7UsWEnxE",
  "key5": "9N44iBseQ8i1GHMzkdAXhTJSPzJr4NpJcU56Lb2NyxzwF43acWu4oTJNzCoKhZkEwXFRADsJ4yUz2fRVzSswHEL",
  "key6": "5mZSXZ1PM8i6g8oEgJYMxHFhCasU2u2smbiRSyX2qnw3LoghmokJucYrz76c5u1rhXyYG8Rfk7KrDe3PnqD27zHm",
  "key7": "22iJ4DJJ22f1hL1aZuoyHb5v7GrS24vwLeFFBStDDi9jgSoFaSaagcp7oMTVdwZ4XWrvDPo7i7uDH3ahQbckzBNQ",
  "key8": "3QMbDCkGf2sLP9Monnm1jAN3Vn8a1eNvgVCh7sjpR41aFB1SnR28TAFtGLQFdEpTbNTSGz7bpqpe5yVAeL9d3bMm",
  "key9": "5F8ie6ohZtmZSDC8bZ2RPcAJPFEyZwVqZyPc4M771GqaWDSXrfts3SjYCyk6wbNNCXTKJkpwKS5aPKm3ex8Mn35X",
  "key10": "4FyXYSfu6X6QtiTssj6WS9BtVp9rVcwaPLcy1nqAQ1wzafGULBCenVLwKQCiRxiVE1w7NJUTno6cbRYa6Pfrf6Vy",
  "key11": "2cMPtLxhwbAujKQNCCbmeWZwoGPZHoREjVwY2tscWisuNPgvDCdFxgueyN7KE4R5NtfeqBmKEvz1qdgjrGDByV4U",
  "key12": "4vr7q4fbsYNdANcLoA9Ayg4yvqeX9o7gykU7qZTKtXbjqxqmFe9vnUh6Xifurvq2tYeNCDHNGmHxPDnGNwCZ26tt",
  "key13": "5hXrQjoY1WukJ61AbvYu7JxLE1tvqrLFkLEcgz4NgeDTNdVREKHbteWjQ5RRJ1mr95n9wGihD5vVDUYp1tyyMzw5",
  "key14": "2EYzEJhEjFmp86wdLrCvmEvvYwtN1u8HMVUJQSy4CNDebnh8dhcAi4LLgVYAvJZEeo1Lsz34ywQ1qUeFd1MtjrTV",
  "key15": "39dpEA1gSFPNw94q1FT8GEYx5R2quPJPMqe95KeFA9D7bHPZuupDNeX76LCXa5wsAG5XhZhhokYQyZRdqeSx7iiW",
  "key16": "3rBBog94yABcL3uenvsfHTDL1uLnaAwvDNAyvyzQAwyCLCDv5uidE4nansgq18H35NjbJw3KAvU7ecQX836zX95J",
  "key17": "5qqYy6g92CSmHf5qktm5Kcov1jcbXxPKFYQyfJNnnJuZjvobZX7B6T4kZwAvtE8HiW8QEdDzYKiw9yyo1K9vWSFe",
  "key18": "2KincE75t37DZaDQXrs23dtLKBLdgY2SGXruFFKoF8aBQ7sBkyxSCtafZVXncd7s7uLAhHufWu2hX1Yzm8ornjYb",
  "key19": "4nG2aHSHSiSym9P6tw8ge5DYZmcNy9WTjjwKHMUE1jDQrUjPyQSZStWqcqdB3t41416mR4axR2j7BY6RqiuYCvxC",
  "key20": "2xN3Xh4AkRT2ScoRMTVm4WZb2sapjV1XKs727dWerT5saQrGidd9wvA4Kp8qxBAgW29vPR5yYQ3trHbigBGvaNAU",
  "key21": "ksHsHvajZfNV6MqAGmcBBTFtgJh3Tnva6dAjb6i4i1At4ykjrtjGrA48fyUgxw1rmzGWWpqMPpc9UxyNvgUHbrR",
  "key22": "4wQgLBYenXeYg4M9eVZwQ4t5ucuwxMMmXXRf9gRSFJDJiYtGDcrb3Hjc6LVTNXoyZ9zDgPyZ1aLoRjH4WXWW1UtD",
  "key23": "57gXvpjzW13hAA1eysW9H3pP2ub4eC1VM4UsyaDfgQE6JNSm9fmbF2YGqPp2brvudmcJT8yZwaxn1YHdHWJqcjua",
  "key24": "E5wsKEmLu9USiE2bcdbRaRsowy3qKs5YA67JWqF2gkTeDM3PM69s6F653uJehX4ktTmzYTEb1g1NRAcfutyLrQP",
  "key25": "4edyWbZj6nvLaQPAkb18RUQ6aoCs5TULz1qwBsmaVLQDzoqfL32yaUxcxZxKbKLuSYyF53nu6DE9XKfxBFxP8MXj",
  "key26": "3h4YDqH2qR3nTGBtBeqTdBVNW3HN9ByCYAqPpp7E4cgWHvdTDrvQSay2A2DrdRLxn8DBb5p7cpxzWiooj222j6wP",
  "key27": "2N6vRFazMVQke6i1ihPSwQR2BEGcQZTtMgzz3wPwA6hrAHQ8MFxxgefU3aGHvL8QxNgRh3nVgwRq5v2kpyD1htsn",
  "key28": "5Tk7aXo9BBEvCrNcx3B2v98J4yjqJdpu3zk7DrjoPQpVPR1UaCe3cQC66Cfj9JoYbmTTGkSeLkSyrU1uditzkVYL",
  "key29": "5MJpAFYven5FkCGpBKf8YGv1vN4sVB3VRSChJkUQGSGEwQS1gVRwpajhwTspgAKUaVr5K8yYmZC3ooFRa1uVvTB5",
  "key30": "fcp2V1qrZyMvK1cckyq2qWedddU1Cy3iy6HVMJqZS58QHpahFhCJfM97sjdab4TT7DXEkKo2tBHNeZSfudQMLrQ",
  "key31": "53UQbVxMCbemveK2b1Q96wqwDaTZ9p1Q1NH25bkusL2FRx9Mz8J2YDU8gfMjyZfFZ92aLoQrvxgz6AgURnjekzav",
  "key32": "15ELASw49d9VfF1qn1SiYVpVHwvwjpujGcExSpdegmGD9wJgj7BRWAFzLx5bMbz5egEi6Rih4QQy1qhbQrzRkwM",
  "key33": "2ssAZFgpWEjsByUsDBUfKpKKH4a1oVkY44tbjN1dNCT1JtHVUdwsKmPUwPJWe4f19eQFGHpzkJFyaTVg8qMJ9K2d",
  "key34": "52VXs3CKPpuB3Sn6xCBpppWtLsZKcde4cTSDFEvit1p4B4UHn7UJ44nL8F7agy72CQT9ZhRF3do8Md3Vznr4em5w",
  "key35": "3tyBP6tCdkGAdRGdXAnaJx7xLRngwFKDsqGS3kpwkoB5BBLYzEjETT7fK4rabJ3UfSnPsdS6uECESfEJbtahCNti",
  "key36": "5ztBREqFhsRREV8PiMUEArPwcu4rMtdkFd6eQA4Z1BUzi1UxSyM4KojXCC3uMcVVZFmhznXx4sqgtTsw4uTnUCuQ",
  "key37": "3VcYG3XiWc1RcvHcteiymwPXbHrLikDo9WnE7P1R2HEEfrqH7BKePKjENhEEnuy9ZcfYWJUy7HAxibhU4gsn7BMg",
  "key38": "5XWqcbhohho8pDcmHejvUj1rUgT2kaAakKSLJ5ZokAnVTdNmpvLgQLaNrZuDNtWiQZnM37eCykqK27ZMUjdT1Wkr",
  "key39": "5fqheubi9DUMdUqDy8qTSWYYCpFY65315X4W1SnBAjqrwHixgad9FwJEnn6APCM4BCGLkCr3ov5G9YvWagwAqDk9",
  "key40": "SVqF1CcVnPgmnbR2wd8ANivYB2HnZ9xdZfg7rs4XJSbaimM3kN4stGFQPWiYrfBbagzUWdNDyd9MVNZtRtZxZ7A",
  "key41": "VVQCx5B3st3VWrfHGS7axQv44BZrzhY8xKakqsiZhxCtaDdMZUccmACqCQsUzAbSdQM6iRwAwQ2WBnB9faAhWMr",
  "key42": "2fFJzT6KEXkYZvRa12rmDEUotQJ3Jr61R4eTAQ4oyuqdZ1cxFpeeEK2G8QLAwEzHhu2PvcRSBY3MqcBJtbaauxQd",
  "key43": "5ndFJxiVU5iQ8uDLqjui1QFRF26b6CZ1GYLkadcBYgrjfZCHrfXpWsg6mTyu6zoarqB6Q6JzZyYoMJh4irAerfLK",
  "key44": "4gwG6FQS6g7W2aRtnYTX5GnnSSTiUShSgui6fnwJk3fCaSikdPux3tEuQqpNQxDQUncwcJ6NHtiprJsnufs96AV4"
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
