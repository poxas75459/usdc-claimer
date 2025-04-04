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
    "js4J59YMcPEp9C87qzi8EKq1wetrCmtzcUcugyFUtVqv7XDAffJpVfRF51S9EWsbLGb23Lncg42xXoqQ8gNEVr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgQLyU3f47iAM5nxMzQgZ7FiWVJk8Lw7EkLpGjPswnGceUx7LF4YB9iA5vGTKfboZF3o1VdSnQqhgjEKZ2R4Rtu",
  "key1": "4cqQjybZvFRGG3Tzyu7Raqjq52NLJ7hTjjMnW9boNzzdkgC7JxychEReLkX3cs7mKr2GXeN5Qhhw39zFwBK8UFgd",
  "key2": "3wTGLKKkPMGfMoMZBNNrQxLnRD39hz7i9T39E61WHbcSHd2yRGKFDEh8gWyhjtmcnxKyMCygXxjyxJoh1np4ABTE",
  "key3": "4yXndNLCN2UUZSKwif5Fn1DKBMTYrnxJUhSGkgzHpWdA6ThfhnShioKp68ZZFN7FkACVdQVYWgx26iNJfN1bm2uz",
  "key4": "5qcCU4AzC7NHNoQoYrbj1ccvZRcAaLFNNKoAtsHmcrDEBUXJHvpnMp4ZuJwFBms58d6Fw112PKhgAxXDfWsZUSCR",
  "key5": "54tiZYA6j8Hj38Y9Vo6hNsJJgVGMHYkKavSQx5EuUADC7hzyaj5MEy33LwM7H9JXoef78ovxkrnBpuXybxaNnByH",
  "key6": "3F8UzgBNZZHHyVCka9skeCetUYNi8vcXs79kaUxqYbc785Aq8dTNipkDtnk3KRucpePoWuED31Fuf7fJho13AfiX",
  "key7": "4dcNJ39LbEatZ9cyg8Por8mEGChkx8TDTrL8TJS2aNwh9owbpEwUuGU1QiUwTNzNJPHRtZu9nsBQ1PsAkGfBXwVh",
  "key8": "mUavduSUVyLk5ku5ewN47EvwKZ4XHSGVgjLfAfixB9jFdU4ZSnyXFxYUE9ULU3GvYWpAA7qkh7EM3SsX3UmS4kc",
  "key9": "CdVYYXUif5c3z6jq6t6Sca64unPRoW7Mh2Ye7ZZcL5veTD27tX8JuCrUyPaWZLFpA7KCwJWoX9TTKqJDYqDu1qX",
  "key10": "3NCXuG1ozUAesrU6A1kHvPSjG7r5b5PcuHzSKJg9bA9fcxF5NF29tTNcoXS9R2SzieTwSJd9hDgEtLyqJNCSH8Kj",
  "key11": "2Kp2A7ohXRJQKCAH4HXKg7KrXETAD9qq8q25jvfsLw1KvveutsmExAu8MVf1BFRtMAqoS5GcP6uEnzBs4kco1soG",
  "key12": "5PJqnCsZgB733ne6BbgArSiCPvxSx1xkS9Znyn1NeQigN4uHMgL3wsing2pAHRpD4Kmw7bfJmKS5yfbLTzjb77Tx",
  "key13": "32hx2QYnDD2PBytNaFkR5LPFeatJaHCfTfyrz77ajDqykCZHy9y8ShQHgWpETEb97LeF8Waz4h7T8umFZDKByeHA",
  "key14": "67nEnBMtPNmiVpzZGquYkHL2PCY7ebSHaVyALpCEs5dP916VdqeG34YznowLQGxxLubYUkwCTYjACkcqXjMsfE5j",
  "key15": "4giCtdoGKYUv1iNzkrQH3Hanugu9S6AKwYZvpZMkAKqmVgjiuoFtsMorxjyagoNtstcZXknSLCcFtdckkFPwtLKe",
  "key16": "2HBhDc1rZnQCbaBDKEBzSbZTjim1MGsWtSv8dJC3TyRqX2Q34SpWvRKLNYaSuzKoKW7rU2ospRpx5sGDpami6zuH",
  "key17": "3gkcGBKMD5H8MW26LRYD2HXJZ8tBp7GBjBZnjnoESGRJyGgGnzQRzXWqSGHPXbAsQDfubspt7K9wPUfsoWFsBNUv",
  "key18": "4g2TRCpp1cEWLD7zLJUb9eia8KNeYfPecsZW36gc6yk5o4ghe5HZHACs4Rkr6k7afoieMcBoukubWi49DUgMH5RS",
  "key19": "5Gc4aC4EmnPXMYH5KN85HpVcTzpw36RH9PLoRdRT8Zsv8HSgytQiiBGnxRq1JRmXYHCmWoYyS756hniAxEoRrRDR",
  "key20": "3zBXBtcD7MonaCjC6pjWqyujhTxaQtgCGDJPGno2tMHcgBFqNWoUohWRtVFvqfSNEgcm8SW4docrJXhemXjnE1xd",
  "key21": "4QAkEq4PyuKbRbQ8DVs3bwJS8L4bGxWoucQJ9iXfv1sA1XSNjv2o3gQidBBYNGF5b37B7pbPLBYcA5ksAUgQi8Ay",
  "key22": "54FD8TEe7czKKD8HKqiPU93du598omH7jWjA9h8Kgd1DyY7Lq3PjNQSGax5kqmbJEbA6kJDEHNMA9GXMmqvDoTzV",
  "key23": "2fD7urwJxXfMzicExBwzFyQE5EvgCN6jhoDfzy9RvFYgnA1xkZkY3W1yVmDgCFgBRUx5gUvsKL3K9tUNb47uFRfY",
  "key24": "4n55CoWvcnqoSsswomXzQQ5jV5g4aQWDdKP8QkFTAKWAGxZHTMQ9CStBY5Kf752XrtLauCvmC5sSyaCBaLiywGFh",
  "key25": "65gRoY6G5hymHPZVbZ1gWLJeU3MFnxnXyYgfEMPPyHDyqizUCK3ogCdLGvmVsYzp8dDLf3fCmEb2svsqHm9txaVP",
  "key26": "3dzkstKa5b76fjzg8rX6xTtP8JV5JgxnXgp3VzSbfjPjmAp9byfWQKaAF4BGmffB9hPBCeb1ejQS66WZ4mDMpHdd",
  "key27": "43MHwL8b6ygNp2mzpGb3rvwKXvr7ydJf8GPoghpu4tR2yb4L2bKdFS3zo4ZyLL2dVqbDhw6KbVzBZ2ZPy1znFfjz",
  "key28": "5Eo1mN2xW77nRUHqUyVEf6rdfZCU2qAu7DoHo4CiDA7GcbJDdvRzPdrK8VLoBcW82uJ9jqUpjvqLaGvSosDcaXDG",
  "key29": "5H24TssX2K2KNCLL44r7GJHkhoDFacb46FtoTiCDnNZZMsvpVFQjMWhLKGXLfP7AYypkhyq9AxLNJWuDqvS6AkQP",
  "key30": "ToPuxdcbnnDq8GAaff6V6YCCKJM6FU4CSb3neeG2vv774JpLJXkLxx4esqVwHRFUJ4GGjsWT4V4288i9fFLKWRd",
  "key31": "5ZAcazCAmQZtQ97PRUqfuMDNP45fKfQE2UYgF4as2CArVcCyuCKxQDepBVtgWbeSZ38pjX4RHaR91tkZFsfsfjTg",
  "key32": "5sxe7voUaUyBLnSJEf8dUDQ7A4HN4WBEiioS58gh9bkrjzKTyDKeYTi5gky7VVsGJvFLKiCP95YfXFJ8w4AertT",
  "key33": "3VCKxFuB2bcqBYjLYdkux1E8oHSdiRPcWw2LfYjxNp79bxNkCSHfBk6hndhfz4sRVhsSL4RyRRh1f5KfE86czpp8",
  "key34": "3YKgvcXxk9dG4XtadP6zG74XfQKqf5U1k2uxm34dXUg9cjTwGVbBpWdzC8bsDZqV7agD2Z1oNvMx3CpxkYdqDAYN",
  "key35": "5mSAt5XXtwNaaYKLjf8zg4dVZERQnDyhRBy5xiioSEcc4k4JYQL7rH8KoEzr4hUNaJ97ttgp5CfsW2EsjtFSmnpY",
  "key36": "PGKvuv76CsnWqZnKi3BDVKwS7CsiRatF6L1cFSezwHXVqzoNNx5Lnnqp1ZBzjATmCe1RmwpoZV7X97Xa6d89cdp",
  "key37": "2eV9UeL8wJ6GWY8Jujin8Gw6Z6hhcNU1mdFCPm7n8YaaAyPVBRGMijkoaoqL2aBEzfB2HBcSoQMPxPNmcSf9as68",
  "key38": "3gM1748nQ57yJFY5hrebJ8R5gQFa165aovtR9n3BQGgEAMmwPFpfFaKhJWHpS7VNu3F1Qm8P7bqe4iCXqsvcTB3U"
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
