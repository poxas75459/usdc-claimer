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
    "5WfCjbAsh78eKP7ia7ZXzsNzVHUpcD9oT1cF6fA8u4bFKk1MG6Jrfad2t1pCMkD5Ls8aMZuuqXgDtZUqH81MxN6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29fy1oRhKokrM6FagwetLXkxhN8JJCU8hMjT7rfzbG1VCEJB4Lr3QxwCJHScCPBvnL1PcJUthXQ21TYE3tU2xtoY",
  "key1": "5uBa9aepJTW6EFKHU1LZvn6qoqSJxFSudyjqj7gUWgvcL8cymAQAbV5sH4iHo7efxiMMUKdEtMKUQsRS2rKLb3YX",
  "key2": "3wq96kR86XxAQa5jS68sRh3k6cMbK2fcCcj1VMThHbh5sDRD5rc44ZeZPo3kGBfmHW9Cnrj2LETUFLsUjDcSJBus",
  "key3": "2THw624fSBVKfoVUACAdedzA2R28GJrygoLGdkvgXZhc4RxscDty7xmyqKt2f2FVPSjAWMQ5s3y4qNHAPSqJcKxH",
  "key4": "4qhs59UAsEiK142t1x3vLHLxVazctA2XnsVCJeTPvvTPQaY7A23JqqBW7PCqEsTLUc8mvvX5j2uXcm5uF9yqsFu2",
  "key5": "2fvvAZdUekq6eBRiMZ6fjGgVN6kx8qRS6Ajmj5zSYQFQHvdxSJMsF3kvXiWaWD7dYTKfH7b2jn7AahvBrzW1UrWT",
  "key6": "5JA47X9CSR4WvS7ZbMDLkvy7YGk55g2g18GKbzogw4KjHUjyRo5TcbkjngPNqB42Di3cfZDHd1SXdWtN4SfGPJ18",
  "key7": "3AY6kwrdAWxk3WeUppG94GPNMM1sqe2GNnZq1UaGc5DfNrdVjGaYNCdXMJqaJ9m9dEyVeCfr4j6rLNpRnoYZj6oS",
  "key8": "3JtbFAhzsBgRCntT3mWYyiTYSwDYZ8scHJLd6KxPS8Yhf6pjVPTcVErjjfW3NxVH5n23j55Whtmieb3aypctwfi1",
  "key9": "yYiuNNy4AmQSgNKeZBXNQNp5VyxAoZUaDGcZjRe4rEcExQYH7XLbmGDeQTwsXJK7Qc17iL9NqBjz6cWjk7fUF9Q",
  "key10": "29G8io2efaCinzADNSspXKw5fDUMQuzz8praSkajHk5N3VWy285FL5WdnFJu7E4AcL9ArsWpewLb43MhRuRbKpQe",
  "key11": "24jgq31oR4ZqKfNZWR5R6wtPr7cSNHaXvdCsmBxSnbVybPQbVP4QMzjwMLKahNE4ZcKTz2uqFxLbK8uMrVbmebUG",
  "key12": "471Z64wRNRj9j2GD4mzoYMRrKjhaPKprUsTMn1F2KV4jzDF6mN5UgyGoPDxB3rrZaa1fKqVzVJrP8LFuzUj4zVjA",
  "key13": "3wYGi9itbJ7EXR6qo8rfmtcbxPY3wPgDLcW5pcjsC9Qc2DBLiuuzXAJ8NnCLt3PEweFG6mkbiQXio93LT7xz2QBs",
  "key14": "39pMFgKxFBDajTrHEt3bK2nY1cYVtYDe9hrPEY24RGoahRY4ZvYyMFTcpV6GfcU52F7EVmGCRYKJ1C3mKjxNUiEP",
  "key15": "GR1vHHX96PaHUnJczo1YPTTivKmE3TruS29K2owg4e36bskNXFd9VymtrZ2ZSJoENfwmXdXi7y41hMgv6ncRurW",
  "key16": "4HYfR6PttGeWZhCu3oJaXqhjxZRx9a8s2DU6f3XVruyBmvACt1PZQSryM11xQeMicHLQGMNwgS6HG7Nbf7JBA74L",
  "key17": "JF9UWvFz6re1GVeVgdvxpgMog6doWFTVkPuUFKUc7uV9ACc4Z4w6C8GAjvRKCaSwsdg8prKoDsi49cBBZTEcrC1",
  "key18": "31aYT4iKCaQFceQtxfjUZQjWa3hfnYqr4rRxW2sf6Mq8aTjMTTG6FaEPEayqujUMHN6bT21fmEnCcNiyoJvxYLYY",
  "key19": "3WyNKS5nCno8J82KrqZ3D283NYQxdkg4pgQMCaUvcWUgGg6LCmGrrCzLh72wUXiecbCjHFW4cJzDvPADR3aN5EkS",
  "key20": "5hkEoTYe87CjzFppEGZxhVMjDgtuNo2oBWQfkE5c3qxdqm75uwyTD6nt6RiykYNPAHdHrWEJk2Za5Pw4cSwCWhpZ",
  "key21": "5RWKQii3nCS8hNZpnAdGvYWgnPvR6nwQmyWtpH6w3TN8bbwLC5ZKBDXpYvLz2vMVsTpUgHw2WbDkQoVtvo5pY8tb",
  "key22": "3H5CKKz5aV7QWERjiADuAYMGMpAjbruSZrLzZhPQLF1H9mSGucu9Q2GiRetNYT7fhZjn4qbLNNNVwX1kkiPEReaL",
  "key23": "P92khNpu4MeM8rCzq8npVkMEiQ1Y6rK8M9pzVzJhDGuZcS4e2yfpp95Dg1q56PpScJJoCFfXud4s24Cwzapf9tY",
  "key24": "5vLLTB3MDQwAhxBV4YziZQKC7wFfyEyba6dw4bt7RQvikxnaziT7jaecKrLkv1wp1SQB6rdR8ajXBAyjLJfcVFrB",
  "key25": "2TrCNtAu3DJECsdj9nL5LETUSxzKnEko1Qt2Em7qYeQVjxiUW5XSZ3bPP5pfi4hKYdu2LxmahN5HHLD8D4a6fgvS",
  "key26": "2uM1Xs8AvaVjqr9zna8EXHwDAkuTeNzhsUxS9a7nNHviMTG6PHJjh5eR4NuzFeFwibHdZR1mYLk1tgwwfKZWY5qQ",
  "key27": "4CfuAcGb64QZDfWv5zaavXr8nk4TnNEeDYuqDgK5zG7ubrKTMFyeyggfeGvTjrVSopcnqAMCaJWqGwi4JLdRJbEW",
  "key28": "b49LDX1n79QVh6jrjcA4851xqEBe8ME2TVhmDXzadbvU8K1uNzzaeRWfwTrTGvJfhx1v36dy3wPgC4NfFf2FHCH",
  "key29": "5V5knpYHeavhd2KDxDNg86xDNG4D17ms3iR8e5EZuwaT8TSG7gSw5Hz7w5xj75rvAWrYUFSvHuTc2T2TdFKuU8Sh",
  "key30": "4NBksRg9LGaBnDModX89raG8QDJcDgm7gxKyw2CW5xcsgh1DVaDBEsaZ9ZkLyckaUzQsM1d6jKxCAiEiew4JnkRu",
  "key31": "2yAvfACPq9oLx2GQLCTZpMyJtWt4DDWJ4w86755h8sKqsXbrN69JDgiPUZEzVmwKRAdeGyW83TYR5cLea2VMrFF",
  "key32": "TD9aH62g2a6RdKo8bwuVJaGuAFs9s41efbwWhuFYVXtFzn45uASqebvLUDYtg8WCp8y6GEerdmTqDPVNY7W1Lt2",
  "key33": "2H8tYqUWUKkQsNMXLT5nFH55aGixa3NeL8ESpGKPqdxbD145FVUShsCveeMev95aFyFmirJpurDrG3tU3ebxECyj",
  "key34": "4Y5s3yJ4wL4DHcYoaPLrS2oe5GPcSPaQe1fWErip27s69wMdz2Sv65d8qnaLJYoBaNroGByxqKcd3P1zytaQRXSP",
  "key35": "5yP251gZ3SFtor9Z7iqzmK63pJK6VDNLsSUmHiUdL4s61cSBDx7HXB395TkenmtpZVHYWAYEU7XuveX5JUnbkt9m",
  "key36": "32snt2x89epjH7LxFL4khbFfQ9atwbjHus7xAtFH8iKub9tWChvFTWUiCGTG57hFToW7qiXhp5Go856SjCHvXBnQ",
  "key37": "2GTfyCHsz6mXDgkwpUqs5xY4MJtTk6P8a5bgCHSYZjV7gbkaopWtQotZLwpaZB2u9eHLs4AQFESsfuA74p5yUcqP",
  "key38": "42zUAign1pQxftFsLG8DnfVWCvhXj8q3a3YdW2sQPw4A5FP9y8Tcj2vPsv527dQwsjnYBGJv6Yx5VVQ7UQVAeRRk",
  "key39": "HGn7voG3R9c984vEoFEsQQbjjGiKX7iAUC6XbrENpAUbzFZ4KUsz2UpLsG4YihRM13uBtPxg6NmXsp3WsH8usxn",
  "key40": "2n6UbM1Y3RFsZdGFbuMX5yfVLW3nSpDs7z2NfP6s5qJXu9ZTpnZe4CZptAp8JiRWxihyw5yKDJUwWK8M9Zm55xyB",
  "key41": "4DK96kJhp737tqvU9LBiCKFfv8THx198g8qWHJqXpmnUPYYZkp34ix5KxaaSJSrZb1LCofnZHohjCBZSRM2qb2ro"
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
