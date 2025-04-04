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
    "36gHAFJhs5ZvpdS47U2m6sK4jRw5CnTcwUodJNpxjw1jdJvHomHquHV8reeXy1e9UKFh4jEoGNHaMnZ7RF4V9vR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6L4uMBHZ8nD7c9Ds1KR2J5vtbfcE5eqHJ9vDWRfhD6rtnzqAhMqxBbMER8FZ7GNaE9qsefkX7akj1ew3htgeev",
  "key1": "4FsD3YbZTLVKcXHL9kZU7qykHLPGQiwxPi8GFJeyGokckt5UzD4m8SvBmquSJzGNwzmUCE1sioNN93TDenUfxnWd",
  "key2": "3gG8F2GA1NPTNRkhnSq5Kxd9TB7vC1731w4Wryui8B2wVPSBso9z5zEpMuyERfa3DG6Sd4EH31F86NbXTfefY5Q4",
  "key3": "4bMRKCBJEhxu3GDUfc9YqcRjobp8E2Lt4YGcHmt2jtXex1CwRmK2Duz2Rk5dFkc6GxfYQCVYw9zBAdX51myjhZ1P",
  "key4": "3pE4sUbwqu7FUJ1vsBodFUCmq3rqBHXCAhLWJm5sUwj2pSH9n7RqcxPR8ND4YySZ9D3PmE4t65yJof2g1ToCjG3X",
  "key5": "QhXJwG3nfQGP74rPrUbRjtPFGyM3j7bnZnfSyUdggSffCuKeYAKAWgKd1B4ow6DtKUwTn1TA9USF1nhfLPvsB5S",
  "key6": "5rScuc6fwsqJJAxMUsmkCNySaTDsRR9AVGqePAkFoeJ9ev1S3n2Zeqf6S45k2ZDYH2K9FJc76kJWHNi6hTMFpkG5",
  "key7": "2j3MYkLjJw92G7GHUBGJSm5cSVvLVeWcdDFdVCc5u1UZzAbVzQU8raznrMzW8A5856K9GCFtPradYAv2dycrU5cu",
  "key8": "3BbuTnJJHhEGLSWNVy9U6TMmwYoUMgUSM9Sdho2snoRxPxg4cY9p4z4zGi1RUPhh82TGNeDY41B5MMTdT5BLhdiV",
  "key9": "3vPjEeDxq8WLTkRjjtk68LTzNdfFU3k2WxxTFcVQbLaLCt7SDZcxWAa6RBiixJWBynmpuQcAGwefHJ3tN5EdvPZ5",
  "key10": "3yezzQsfC4hgYuzsFqtA5fiLWZ8sL26ywNhJGX3Q9UeQWPvDoqDzHiUpL7BVgXKxkzSg88rtvrWEFZyr9shb2jrQ",
  "key11": "2QAAM6MdKNSpudLk599McysMgRope9pxbsgiv2PwxhmZnz1qwCvEgwvCiFbhpkvdtbN8x4oqmc7aQ596JwM85G5o",
  "key12": "5WvsKxMi335w4Z5wUoEFiim8GsoqMAA5My7EqBCkk5CdsSXwTkr7itb9ZSVyRLRowCwyX3AFcQWehBTZCQmdKHXF",
  "key13": "4hZaoWMjgnJg5cCpfeEiXKkWXXPLJx24UD6erXJYzorz168aPKS1smja5cTMxtGfXmigUWt6996ppsNap7JpD5YQ",
  "key14": "UW2CPb8iaXmUEyqRMBjebR7pGCrZeRpDfae65BmjKKs1aubCGoaMVhVpMVJioM7tbnwE9NXKTxbG1cEoDA3ZKrL",
  "key15": "3NzLiDE6M6bqh7aVerDKQ6t6oppdGLmfatvb9t3y9pib8BVKUiKoGh9k19Czc57oifvWvrRxN35ZsKZdjGVMRhCA",
  "key16": "7b25mweBfumJ6JoKGvgfBLuL2QGUaYdP1mfzeW7kc91wV8rgRVsbHK6fQeQ5jGypXW2asnnGwUqhg8cyvGCZFEU",
  "key17": "2DBJKP7S56KwFeqS43Mp7qQYiBq3oZshUNRD1CHxmt1fhB9w7pckbWHxFZBjvKz5FB1ww7s3x7d5PuHh9i7nGTsQ",
  "key18": "4iCc6UNEedo9a1yGdCS7b39wbFHEufGQKrceCTEC29KbMVH3bPYnFCgGWvTyYHcekyNXTAHanMNzrAURh3sMGEA4",
  "key19": "4Wtesrii39sDWUNfL3A6c7axt3NmBXqprBCGK9kn7BzkZLNZ26jJFBnAY4ju8KMbRYqmjQFquQfD5WB8j6BBMjaJ",
  "key20": "5y3R1S9PbncosFWby8dHApDA9L7WHvVrHtwrYgfW9g57uyeYMq9NoPkxV8VNeXFLBGzE2pCnPhYvHvNQUKrAd9XN",
  "key21": "61PxQTAHtPqy8ECoEpQWHqntLf15SJB4LFrGHeriaeT9daAsakE2atsqYTw7j5c27AjJqd9SBXTWY9eBzPNKvfx7",
  "key22": "R1cRxvCDZtQEng5hvBLzjwmBEz1f5KYgbUh24WP2VN7mgFX9JzP9yAFoNRoGL2cn2aHczy3J8WE3g9jrjmLrogE",
  "key23": "5s8y8w8x325h371eMQeQHBnCHrP2cHjLMif1T6cryLzU2hnQ1pysCf3en6c7xtkXUUUUtyrEeCPZZSQ6mRWNstYT",
  "key24": "5u88t3rFL7Xxm2SVZH8UGxxG7JEr3wFD3yAwborMrWn2ynppK3NhZhAnDjajnMmCNmMH4VKT1N9PqXoK9qqL3AaH",
  "key25": "3yDJr5b5QMDHdEHkFPyrCfiK6kek5BDVsuEhTRhsNM3CabAGia938gHz82tNj5QYTUTJHK1z3x2KaD4h4QwQjEj6",
  "key26": "2M6n9J8koyTdMAXGC6hX4Vc25iB19zMBxS9i6Q1TCrAXrmmKf1pXSC1iEdkaYQhCTpZwFLY9pBfmkmtGusTYzBT3",
  "key27": "5h4SmFrikJvyxBAaiRapmjJbnV3wzjQPfm8BxSjMkfYMn3EegPsdTpy5Xk1u1vfAN8ztxYsdNfdRgufWjmu4TiWa",
  "key28": "2UGc7wHog3mbSZfw3BNMYP6JghfzNNyioNu8JPPg1GGwkPCKaZeLkNN5iZgLG194q58VJfzt9yRWKCEU6szgGbwE",
  "key29": "5mvcjGK3qrNH8Jk97fdguJnfLzRyziZTLEAx1Cfnh9hX7UrRopf1Kqq4VtdyMGdNept4kjcVWvRRS9VqnzaDtse5",
  "key30": "NtAnB7ES2Gs1VMFtfEG8G1NivaNzpnRMztkCG7WsKJc4brX2ukEChLyDzc4g3k8dj6gSwtCTSTyxARBQYNqEWHY",
  "key31": "o35sXFPEpEikE36b4PPoaUKMLwxBZdcEDNQKXddyfwDkUNZWnKQJMTdwcjn65SgQV5rdjpZNxgTRYNb3d5KTCbQ",
  "key32": "44xvyCid4ZhE6NyuiuTsC8q7xwQN8CrB9R4bw5zeZh4z6nzV3MkdmW7t8Km6ErjhBbyjG8HMBrM1MBTzhVuikhj6",
  "key33": "3P6tGqUA3bLhvR1BRdeQKS4ZMpYJY8d2Zkw7LpDtfKS7RzUViAMXsTs1Qd1Lo1XoM3hwquimPYteCeDNkUq11pPh",
  "key34": "4JoxKuKwtwzKBhoktmQ1qdUgf6HuCCvjP9BUNXmMdu4Y6QS312Fh5Rat1B25u3PG4LBWerF59m4Q8jt7j4T3RoGA",
  "key35": "3h1KFc82mWch8KzjPn8GVA6eF81gRo9uDDHqk1iQ3Dpocepim585KfPTaNyRfnSLmTkNrVPvN9rwq2JK1ibBt2gA"
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
