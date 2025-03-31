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
    "21Lc2cJ3FsrshA6XXiHDBsxvNbqQfwV5aYhBgj8297T8SrmqADBbk8gmBt7M8eWmeHETZh5CndEP8fqpvjxFUNVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nw2xbb4TofwLqqHskNoiWSyzHUALL5Gf7CCEU2PSMbdvpXLoXgWSAjB9QdJjDYe7At2h13ee2r5VAbMZkkRdsxK",
  "key1": "5CUhu3Zy8dqxwANkhhtzc8r8QXxRKpZKA8MPFe2F4Y2rNQN3mCcASByAoRP51vXjoueZrEH2mQVZHSk1ok1mrbvK",
  "key2": "389Nbq4SYoRF2hUZxRHNp8U6wAzvFMwzTGjiAYJVqtAi2pjfZj6pKfL479aNsjkgZRjS49ZP5694RN4iYMS1bhRU",
  "key3": "28bv5gr7bbhLHWzQCvTDc9vLqrowKZ2UHZHWT9eUpTTKK9Y1kUPD3zZiz4G9qscMcaCy7HS95SYo1CCZXzCV56ZB",
  "key4": "4aKzdRqXGxxLKskxV75tLAWXGL1L926ZAZbSznXo4sqC9ze34cAPDPk2xrCxj31HvWM4jJnTuppGzteaqGLBAoki",
  "key5": "2JY7SPu63DbZFuUN9mqPNHBPdF6GnjQ3a1PzxLRK5xq4xQzjz8ucorTzBqGxxaC4irC12CQZmRf1Ei3mpVrUFj5D",
  "key6": "4GqbwrUCz4z9cZoyrwA7vL9hFoa1aUbcenKnNstZpwqqYt6aH9umgDDgKNuVFjAa9Gd3tHYK2BGiJqnEEbfxbrYp",
  "key7": "47PC3CQ86k31Gn5vP23XEQsxMLtYkkNGxcsq2g7Ef4Xem43w1sGpmnTyaj7s3VDywSjhK3CBEEaosVVavxvjer1g",
  "key8": "3ZMxK6EA1Cvr8xKQiKGPEqYsxYX7tSaeFmzTZ37phLLbADpJW1bEehYJfi4UrZwD84xFpVkbUU2Mydr8u3pDayMd",
  "key9": "3qtvDNQETyaV4uuDzStgmQewm8qBkALCEMSBbdzeMEkTaw5VvLYLRnmRHeDU7F3DhgvuAQ9GyZUKf3oeSXyU4YcV",
  "key10": "sQspKjb7h788bYtguZRhJD8cbLsGUkT8xahDbXMPJSDjaxiD8fwcUiVn2EUTuPDmiUckSH4FkBJqaKP2CHq8UeQ",
  "key11": "4MQQ2LvkkCkhRjvrLXzyJZ4LzYsQQCm1kxMCL49ecArZoQtMhwFeHhVsQr8BZfoje4vVepVPsKKgw5Tar7sD9V7Z",
  "key12": "4bURUdwbvh51zx4CCcUBxp37nhQYh9RWGpw6esi2dVASJSXZxhGKUY1ud77dy5ewZWQG7nJAtQwXjUosgqdi161i",
  "key13": "4yPMoTYBxExgbqkoXGjSTxo35CDn75J8prWSJdGGDGD7EdEe5T54NyZ1zD9Qd2vzeWvZD6JCEZif9zECWZMmNPxs",
  "key14": "4iZEUKk6YXSfv4M2PSXHbTvxkaA98wqw6NksRHv8jE35ZZfWCjfBRQ2ahDpQbWv3D1JotrYUDBUfqGZDcvGPSAwH",
  "key15": "62hMYEhVsAFCzHDjYDaz7G4yVm1kHER4meYDjfuaGVFp58uFHB7r4eo63R1toFNWR8MmGnewKnmWeNsrnGHUkdHS",
  "key16": "2fhENwuDN3HNDmWHLtj1WvEtjAiWjuhD9n7PN9Lnr6WYNiWsSumEKTj965VzvYcsh3jxif9ub6ppx8wHa6rv1X6T",
  "key17": "2pn7eKUNPXnSNRxJg5iNUpraYJRrKaGeSGRSeTuTUhW3wqa9RvUeW5KMgHQ8k6E7smKL7VyMW1y5XTxnt6grqQAB",
  "key18": "2tsZFMRxazdSQPUqW3jZ6q1wdGQ9UbLNot8z6dDxyXrnfhfqDJfFAg9AnRCkCxHHBvbgjbGCHwaW4FqbGq1FkJYj",
  "key19": "2rQBfmKgUb1c3tbQh34Jf8MVDQngjbgnmvcm4oWkipUdorXCRcw6jGstv8rFYznpxgyKtmWLa9YBzYAWvmhXs9uP",
  "key20": "3QMXzEWpE9chZjBXEZwfQWR5CGPQpcnrFh2syKGhu7PrLnq7avp9tGwTM5YHphFF5dMhwN9rmsg3UVVL7h5KXxbx",
  "key21": "3mo4s9iUtBKeWqRTv1KwLX8hdpBWhwgqvAbgn24pivMwFLxotS4GeUM44CJXrQxoQNu7EZmVHuSa1zHcMC7U8A6m",
  "key22": "A2ZRCtzVpoCVWjLW9Aqun7uz5GKZhQrr54BSev9VtoZeEfrfjqb6JeS88K7UKp6Y8GhfNq49Ww46X18KU18Ec2U",
  "key23": "61Z378JfAVWdMcxqHGpv8JUBLXVLYdpcrAcZ4Hu5bAioEfk5vnY44togtKPJNSatycNHwpkX3pppdreUJisSg5JC",
  "key24": "4aoeqj54NFffjFo4QRPS7eALoecmN8zdS3p2wR1nTZBmWAtuPVEjytpaD34ULVLe4zvtkjKCVSx8GFgZAQpHiBfo",
  "key25": "Gehe2TxMxQZMpUtEjXfKoSahWMJtJgbr61P1C9m6fKXnZjC5reeMhJDbi7j9axbLiTsWZYxaYv2k3jbcVJLxp6z",
  "key26": "5yNMxAhrtDPcPrC4JkMPiGB1nzrNBYHUY6wNAR9k6tHFXS36ZD23yWYr3sVYVVzETG1hHDuGMfMZAZ2YEXQrcqM6",
  "key27": "WKUPdXGJ2uy5DANEdKVuCWmApy6j4J8TSFV8nezPybWwcoEeRcAEAhrLvkccWMsVDQGsYkJPygHaUczVpSJrYjx",
  "key28": "izMgDeJva92TEyP2uzBtgsp7zhhgfofGnrU6YaRwBELZbYqSDTHf72e2jfSiSXDSCHQSxdki53fYtvXgsZGuFc2",
  "key29": "2PpdcZhqXjBUEyU5DnQZWeihJW6dvWSuDaYvWhWMpiGGY8Ltb4Wz1MsuwWHHpj6LMDP4mTMbgbY1RxhvHhC22RpG",
  "key30": "63Ab9KceUZd1aUKrKNM24K26UhtkCU8vCFu6nvL3JQABnvfhF1Y8MXMX7GRZp9QUxzyutNKmeGAVnVW6VYQ5dMwF",
  "key31": "2y1bsCKUnsYn4GzZRQNyCwTq3GDP63CesG17a4dQKmZ4uPdidygxveAmFmEzS4JxfiQPRDFN96k8urnLbavYAdU4",
  "key32": "4joJMRTzt2Q64WQGsj2RfxW6RVTHLLTseVJTvBPFNA2WBzoufroggtsggCXGd3aFBgWsk67twDvQrzc8TUdBDA4E",
  "key33": "3czoWkCF8Ka7bJoLz72XfST1Qg7V9jwJhoxPHDaiNpvLrmzDVW12rBFKy648XvVPfwjhQSXWW4uvf125efWAfgT2"
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
