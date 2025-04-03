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
    "52VWH7XfKpoQ7BfPFwkPodwqqBLvdF6s27aBU6xLrU5i5cg54XL9wEHrUWvxvhuNgYusHHY83S8hLhtGT7bmKvSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPLkFKcYUMQCJBvoNzz3y2nCxXtEnLobABUQxhwTN7Snyd8D6qhD9qVejJxg9sq1NCi9xRnfnjwmw5zwx1QPBHc",
  "key1": "44Yu2KG4GyP1H2PCSqDr8N7d8nQ6K4SQbFjmBnhJEUjxnVnXb4pTsfVTsy4q1DqREosCw996Pnw9uWrDJSgDv3uR",
  "key2": "gZf135rtmtdZZQKZbkaBpds3sSMDLQQ8x57xbuVLXkXsWirEECs9CJRZ1z5YPM9oSLmk3GDFoVX7jAnQjp4miRZ",
  "key3": "5TJLVDAJEF2RAEiYLzssuYMQvwhQc28bo8aLALey2bZqrhZPd5E64EyS1usfnTUdhncbFMkqwbQNJe1WBgEM4TG",
  "key4": "4u57C5zaKk3K6ryWBrGuGm4QppkQ9StcQePB1n8DbaN7nqjeVKn1Wd3c1KmBtwovJL78ytQZhA9wtQwdtEH4znzM",
  "key5": "2w84w3rUT1Yw1NY8ZsBUP63LpxYa7HAwyUUU2dnXBV2HG2VZHmPpwskZDTeLJumEVgk1fC7DGZfju1wbHkpXkmwc",
  "key6": "AqAEBftbo1saXoWDGGDHX2G7SqT6vvrmuxEB5cEBc9RTnocjCUssugm15cKHCbfTbAc4W41nEcwDkSm5M66zuQ9",
  "key7": "2pdSGKvSAuJeRQG4SwWLzZ9Q8gU98eTCdeu3nAZUu5AYq5eG7FgemRwj33Qh67T3SZKBtsKjBcsapzWWFbdXFXQC",
  "key8": "3iJkiGKM2uJSZsqMJCEe9uwKEpzW3Y7fviWUTdedrEX1c8zs4xvo6yJaqNq3XJkndzD1wi2A1VywfVAiZoZwqFin",
  "key9": "VQwAmB7aqJ2jKAVpmsMXjatzU9bMrQ4ft11PPZsr3q3hbdMqq2KHsdHW5iyN7J6asQeXnyApn59K2mb65iz4Egc",
  "key10": "4fvRKvUAwa5q4tYWwuzbv9RNZkSG6ddxPrQSrDcG35QjE5TyqgMkE5kRNeSkMFWEDztmkz7nxguzp2XpGz5FHKzG",
  "key11": "3WXSRBAbqJYEYwpwaFHkF5AMaP9hn4gmuGSjfEU4rDBTUhh7ZxKon9TSofbnAReintCENstGWEsQ1Nc8PWu1Xq4W",
  "key12": "3iN9pea32H6MfJZhXbPyd9jd6i5X2hwnjrrQTRfJAkjCbk1axTtqnngvazw3GDHP2CvbSdf1ZjdShzPDG8Jt4E4w",
  "key13": "3PF4z7aQyNepD9JWnp5xou1NusrPhVJuJwSH8yPbziLbySHvFoVAcL1DRTUAp421rjpDctN2ztgA2bUrzJ9CZ4XQ",
  "key14": "2yua1VYRP5UYeQx3MzWyddTEiL1AcRCPDaa8Lc4ozzgT8NpmR6WZtLXVzEQT5XbUFMJgirCGS43o1uqggpaee7vh",
  "key15": "5ktqWJ1ts6r3zZYRSGYNu8UagKxMXBfWZaJT22bbEu1uD6YepX2UPY8rA4SuXiYuwEJvBunXfJaoDZEd3R6KJG7Y",
  "key16": "5J6Pk8aPQS9jVawz3SAHjs3PNqwyKY9owXGXj23ob4zzVLKsRSo3vDYzjmjAXxxvMiBMa1fvSxWGQ6hmtn4xPvis",
  "key17": "5DPpQmPw238myXqN4CHbLDBwtyn4yVpMP9ZkCeFGqm89ju8wSvNjVaXGsDw96HMZQFQ5aNirnRt4X5MJ29xuqqAj",
  "key18": "47F9MABxmBeof9gQu5AM24rLtup4wP5cLykjuXE33bdQFoHUtvLdTysFk8cFGubWp9u7tkuunTh3LAmxJE9PHvTs",
  "key19": "3mGMfbYnsTWoPbgupDfzXffUKwL7MGJqUQS887khqgsDofJo3v53UoHnxdSeekCPd7xhekjj5dHJRLBCrJ1yY45b",
  "key20": "3mWbLfxyJ1kh2VFTxGcmPLzpagHrxYHjYjFhkDCZ1SfUgyHwcgiXKHUDueSw2M6Zy8BUQyY3GiBmWzzqBKUFZoMs",
  "key21": "36Aq3YEXP5GrcvD3VABNVws4mVqxqX9V13vkFxVt4vvR94DCk3SfH9vnSikKdfRcQd11KA2iHqTzkj2wBdxDRer3",
  "key22": "3hVYKAPCY4bs91jiddfBr6bvNGJpMom3t7DWPkC8GGqEUWTgpAFFmMfWSrTMGaB2DX3RxaXkeUAodbEdsrbuf1kh",
  "key23": "5A4N6ihyYQqMwhxqABiAnzdsEYPNRbt7BPNpoxkJAQ9GMd9Ca5p2qyBpfE2yzHcZWv1vkyJc3VgRazJET6DfY5Ub",
  "key24": "5VRFe7AgNVGfc4gem1kPerKvBhHxj6TxaGV7DSR7ahNCNRFLVduou5etEtrpypBoFMQqtDoJSg6knY6yBNHwtwBM",
  "key25": "NFfwTspDTjRzfbmnnLqxn9JAzXH7ZgbYBLacgdJRwedPiNpGfCVhrBB14ZMu2sunw9bLnyRNjAYjufvytyiAb7t",
  "key26": "5LoC4UiGZxkSHXzLbzEqj7Mi4KsGpM3q92e46AebUiuHFPvwTYZiqHEG8vB5nR8Sp1Wcydkn3fZzYocD23QtUuTd",
  "key27": "44FX3RDrVd3VLZLahxHJC2jBXwtXMEotsjiyFWspqhncnZCH96j1AJH8MjfWtuH436Hu1gb4kQZ14j5WRdU6fS3Z",
  "key28": "5zEicwYKgWbWucExWvkggCDzqkHN76LgMDGCqaRgVPHScY2vd84UyFaBc8KR7DnRfnVWEuG9JSNNbMZnk9indWea",
  "key29": "2rNamTUXRPmjq1RiyE7MM31nMF8xqGN1g275fqQ4U7gjXzwBAz6gp8YPMYgNJSxGmyTjNocuhA6bzoTNaQ2bdKuu",
  "key30": "3pRddTmo3HoqgjGj8npRtbZXxjrNZwKAvsw4cQeMPzCFf8g4cpDxTF6vZ56QmfXjZLYNptCnmmsG6wZ6kvjVNcJi",
  "key31": "4h3ZobF3m5mQvVHUgN3xrCcwPiaSD5WS4hryAXbhc1xSvUDMbtDfAsFzLb1VW8CW12xevzLo3Xdge2JgN3oZrnD2",
  "key32": "4vG3fyRaWWxCc1rTt2zeEpk353HL6U9tSTB3gRGc58P7EBewKELpa1U2x25dtHVQ6Pt1yzaXohE3USBi7MR9GsmZ",
  "key33": "3n15ABCwf9yE5kHhES2XXmPCMQmHxftKc1KR1hpVRpqHRMvZtygs9vLPiV5t337GoqScEUdAZeEgAorSu3rWMmCH",
  "key34": "JikrKBABnea5Ay66nBUqGZPRQ6x5ehEeHhrTPWG2mDmiGLs1XwtwZNGN6V67uZnM5B1R7JBNT69WTFVb38D9k4B",
  "key35": "2dhhmfYZFjpJV9WKxyzw1YRVLRwUM1BaZqqsza93KZzHPXDv62qoCcrBHM1eUgttpNbzE5mzjUWB6x2ZyQ9kYiaU",
  "key36": "EMxJAu62DAsccq95mewKWhSFke1njPs7ECHUEaqEq3z95ZbY9typBdwECJSPvqSh2kMEVEnSpc9cKzFMydpuwk1",
  "key37": "2rPZQ6EL2nNZ3aALHGTTVK4Ue8NjjVqRqADD9PeC5ys3TFegNWBqwdWSJ6ikMG6vmFvuEviUBvkv4QpMwP5DMEdd",
  "key38": "3PzUR37vsKLBKDusc2WbN9vrFH7cKw3tmeBDXBQYUqZLjiXba4UGw65KFMxxTAKZ1Hp149XfHyGfeMuQaz2dHFL6",
  "key39": "5FVYfLoaTXf3cPYWXGMMzec7sfhTE4cKnL3Py5NU7KZcVmc7Lo3DFYac9EAEih9qTrapGx9kSSLQum7GBCr8pobf",
  "key40": "3GAjHKJ3XZtDX99i1TNLnyvTJpNB7W1TZr6U3At71wEG84kHVJefEU9RyUVkNELFUTWDKp4KjdTijc6CgyEgFTNW",
  "key41": "3eGQx9oYK36BGUkuon8QjryPLtYkhwtaQo1LfaC8zdih9rEDCCti5eL7jwjHHxvgy97ovQPdbFjaTHyGcpvXhALr",
  "key42": "2ioC7QT4iBHRMA1QARzDLTZq787Wb5F7D5auUs4z9FKxCmzRAzgC61PmQ3jrBACmTUZoqub2L1cgM9wzQiABct7D",
  "key43": "c3xhXkAPEss8JxW885qbK39EUR3uLCKDAWhmRBfrXN3kn8ns6KPb44ZQAiQu9VXiPWPR6rbUcCpjTG3TMyTWn6k",
  "key44": "26VhxQirHyeTCPnUkj7kqEuSjtLAZ7VtiGAJGgN6q2KjS4x2vJHmqMnS98Grg6jwLsPeQzQywjNzrQzibXDagKj8",
  "key45": "3aFnYt1DQvuZeV9Hat12FnZdf316L9YZZTRJbwdhxNeogGRfpDHzRqNPwYq6oELJ83k8WxmxEvbCbeDmw7zwSNag",
  "key46": "3yVMpQrrdj2tih8ixBAUBgXiQ8FJFaF6m5u7xC1CJWFJTQf1S1JXBVPdkuE4Qh8MU4szrBprGycEPyibnMVyDjkd",
  "key47": "4tVE85JLL72Gc261myjWZw57uptf9yGd2f49TQFr8foU91eXUXuLVC5ZZEWUMnJkZAdo8KBM8bnBR1zP94qDuGdR",
  "key48": "42WREHAUVwVTA9g6yjkPQ3FwNuoAMJSwVmPdnvkVAQz4prLB5sXYmHMR5WYnFe7yPuTB1STCf39RqrFEUbQ5jUCK"
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
