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
    "2dTaqrKEXAGfAu21Q7PrcYMbGNKMw8XuEmUHCk8fcvgy5it4Lqj7Pk3PjvMvCexSvjzgEoy3j97ScJ5DdHeyyHVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pj4N9TWKuwA2uLc2pMgVhFitmqFuFkik9YSPKYg9yHJPYLSuKmJ1iLEPksPsEcAimct3kKazwjX5S52yH358Dz6",
  "key1": "eQ5ZV8rQbX1c2wxzG18uCKJs8kfKCaqEU1XsnzLRWAbHLJc73uNGh4s9SL4w1c4wbNKxLYw76HJzSKLCkw5R12Q",
  "key2": "44bEjmKwpDNLbcXtK1ZWSu7ZffoQc8ntPJDw2Q9L5CVFpNeXVp3q6WactjTBYTPurHqVgp6oBakstEqM5LzJGq5G",
  "key3": "5yUogRSQCdGLHrLu8dM1G9fZs85YmjHmnJMqGJHnp2moGGDfb7GF5SSVMLdDCLyvQZ5ej3qFrp4zvTHmhHCdYkFM",
  "key4": "5mJhjaLZcMAzXAd2fXh3cnVtRUARs5GFKxcp1mH2BL6KMP2nWsN6Zg4wwowWtAdVBsj71zn6cmDB3oZ7sDYas5wT",
  "key5": "hgkc1bCpvFNr89smse7xtLV4jv7SLktMBYRfGprhaB2Ut4h7aYqUinPmbzDCDB43NpDWBBaoGcSMP7Uaf4FNhpZ",
  "key6": "47UwVkQi7dPz3d6LJc6ivSfofCdbWDmYh2FKyHY9K9MGbxNMtqsvPjMf3TmTwuFTupK24Riwh49vgsWWU3CKEWh5",
  "key7": "2foPVosWX7n1aF1YMQ4GqWhpyeRnPDPkUTvCpfiW5vDQL6GJ6DCGdFtNBTkiZhrHDiyLANPFXdKXKFMFbZgrcvxL",
  "key8": "4E2rQaY2s1f7AXMi7ndFzH9JWfkdQViHn8UPnke7TgTKyadb7313dxLKNvfMdhjvJSBCgyngPaLv61q5wu6ErGHg",
  "key9": "25DsDSAZFAQRxgiuApjXXCcASbBNiisLYBaUpd2tWehi6obC2scG2TrZxHLw4BhjsEKjCZ7zZgTgsTYkbMjVR5aS",
  "key10": "4MS1ts5GiKCDGMrDnVQ7ZA9mLDGa9hkQihngzesAZXw2LuCQtTQB3xDKPiCFZ41ufwXVkUQgvFYHXucc9gzDh5ad",
  "key11": "ZTGAofF3avrXDgK2Pt84pDDQqDiGzWgQkJESMDqJhEdkMfiCz8tzcuFCSrNfKZJp1L3Bvfsz8C26FztmvjA6M8J",
  "key12": "2JfNH5UZHDqRCDqdhVAGvEKmXkY1JHSG52g9j9pN5MNbtw4AwHJHTkZLmPhftLTWa9YmrwbdDkLtqK6Q27BWfYk",
  "key13": "4HoVPQRZ8pohAgK4c8Tjvff7JenR7ZzGDbQjYs6n4HjptKjmt7bJKNZPML2qqjndnQNRN62CNrF6GYCqtKMQb7jz",
  "key14": "2pTGwQdxCANuq5ZYoukrer3EWiXaAUrRKmFYPdFzsrn6KnXhB4Luw6J2kNnShbDw2bmkrpqnHrj6Zo1QqMKF8r5U",
  "key15": "4kUjpEaN499EULDPkpyT6P981rndaLmcVV3NArXmnuVK5R1f7YxuSr4S7GSz6dCcNEXCeJGwxGsjSNPbjytmgv8V",
  "key16": "2LyFFnAmTajNceGaNWbGSwgReBd584CJS8hoLzQZN4cdYdJ8NW1ii85VmFBHhWsoYrfUh5U1GukEhvjQU7Kj9dQB",
  "key17": "234mCmyBr1w32tHSBnUqq3XKQWskBGjR7rvkcRvBCKGmqGdN4CAtC8GHFr2uHjkv6NLsbJjjWpC9wuoerEN56ebP",
  "key18": "4zyj8SaTYBTVdAkmVsxDczFBysczex9G6NLL6BKimGcmghK97rJYVkDq4MQcTaEWEWeRx9Mz6WDcGyySSBGfvEAX",
  "key19": "5dy6GPrYTXck3Kijp49ayiThTmmJgpC54nK58joWu64bKY8aMEKGB5hd1okFMdYCwZfjetffXtw2Qz6AGkCdWdcE",
  "key20": "4Mn6GRhzQJBizLta3fKGVNa2VGBsE8N6myXBL4Fkm3NRCg1hZjFcoWjeVz8um5SufKqmmaXEFYh7EKJJJh7u58Yx",
  "key21": "2YGmWG5YnCdHBMYyQpjJJQhRNUREiSo51sdx3jXjBpqSVSdk8gVpUtxLLriZoao5U1VyoYnEaQPkESFUr9REtF7v",
  "key22": "24yHJ66wfqKzcyh7kXDZKETCAyPMzyt9yk6MBD8JAJqZhiYCQxQiZkUfELYg9TG17hta5sZ1cQtMSmwNSsK7zXg9",
  "key23": "3rRoz37XTkfPYB4R7vom739vd4gkrDZtH43XajHd3zwssYyjJK2VUhnE1kGd81CSb8xiqJeMLbBQ8XM3iwSVEZLQ",
  "key24": "5PFrVbJHHW9ymkHbxDSutQuwGGSjAm1u4zqrt8tQVoeUwHUCmBF53P74ypGAY6BW5BEp9fFU8N7kYuTbZAm2rUAd",
  "key25": "3RFFrY3XBVQrBRPbZikgEWvbMNBo1cwBENDDwqhTF5n44YE3Ne5jvezWHtSeer9VSUuA6Y6LYKqAJSZ1jpFS6Sff",
  "key26": "5FZ1kxW31jxPRbZTBNKJHdeZzDyE2mYVUk1SmZ55Cp9ku4KCmrd6W1yn4GTvzknPW7MoPhkjQQ47qxqkhXe4MS6g",
  "key27": "56d8Lem7Cnd8GePXxXz5nJzzox3afvdEAq8VCi9WpEWP9zf3kjx3GXG7zyMDZpLSbKACc9iHnzAL6L9ykCCMpdZf",
  "key28": "5bNqqgfgUa7mQTd8WapYtwEyuX8U3RvZLr9dV5vaHK8UD2ZBtnVVeMojbsW4K6NHQ97GiuQnPFSzRYfL39uMGBkg",
  "key29": "SeqcB9wLvK7LQqmJxCYg2vicwQNvktWXyeRvEcJaghSJbqnB5EupH5QpYkF5qT2d4Y8UdHmkT9UzYmusbh7spih",
  "key30": "5MFifR4NQu1KeqsWDg7php6NyfAMUnzMrgLakGniHer3pKyfkvVFiFsYFBMyZs7eQsUCRLdLa6kvuBoSf7sraxTu",
  "key31": "2PSU7CBYjiaGMRK5tr7YRkH3U4asSVgMyxseBTFP6ZYMPECY5mEaZB87ARbKM1zwzQaPYvZXYhi3ThbwEzaPHKvt",
  "key32": "5fVEk8Av4uwVaWJoRYBQKcYAJy9SwLQtCdneWZPiVwdyYmXyjX3gUyN1kmbVjEDg7Cvn1KkiGT7JrWDHAMWtHAgX",
  "key33": "4jcQ6P4rpL7Ts9d7wCpjgTSbnikfQRS2K4j4FsHxeB3xNzYtnDG93T7F5V7BQXKG8Nirjsq4bz4Vc1mvwL6Bjk7C",
  "key34": "2iKBcEk3ETxMM39kodtDqKpUsHYPRwnbnaYeY2dw8MxyCwwKs8mv19futGeHcaVc3BQ8ri9dMEiwD9GRqMXisyBD"
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
