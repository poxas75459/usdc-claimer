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
    "4uSzRyfXS9zVBvquibu9cRnScxGE93QWZ76mYv7NzgwiEoGqAfe7qrdVekXjD7RNPE7zrmM6t78J5Rix2DkF4LxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7z2LLMUcJgYgzrY6ZFwycpu24fD1mNgpB9A2aS9MjN5WF23jZmKBg5MpRrTLYARWExmkPpCYcgvBzNQzTjzo5x",
  "key1": "55xVXza2Vj5SzVDrHCbTHjgScU1LGcVNeEM9ftXR6MwHqN6snUoqhAShETtz89aSwsLJzPgWwcxrkpUCv8dHSSEA",
  "key2": "xoGT4jX1KT56dnSWXLHqxhM8sKEm8gGhBrJKC1ihtUZGZJTvWmWNUbkAQkpYAhAm5eorPGjxSq7QCQdtAowujdF",
  "key3": "63BPGiqt7ZwF4r2XHGeKYnaPaCCPGbjFPFSzWXCZTnh5u5cJ5vCQuV9hmFQDu61vHVT92u24LzEfHUbEDWPTMdHy",
  "key4": "61VFYQ6CK5tFMjx37wJkhBUYTtyZ8uCWHSWkAh7i2A6a9RwNa8HK5omG856FgRBaGcM8BxYwx6nVtR8RpG6grQ7C",
  "key5": "62NG92YXqmf66mZ5FMnofEhWXd9KEFn3RjPWJJmTjzL9n7f1pk5dDtRNgHKW9gjovNoe5pFKzkpFpAza9p9EV7yS",
  "key6": "65KbF7AFDERjrTDDUKVRN1HqNkcTFn5zurEGoRi3hnzKVzoN6Je5B8zgUAo41cq8S8P1Grur7oc8prrmcgeUZVDf",
  "key7": "2pn9tNQY42CEmfJjFLYQ7oWu49P1jdrbQHUL1Gy3DcCvT2LSufz2i3Fawi659f8c1p9fBu5rBn36vB2KyVwvLFvc",
  "key8": "2YNnX3dBagkLep5KXCTAoJEzogFy4FWdWqqWREyxn9fQ4zpwWVLexMvzujs7ksx9viSWPdh3kcVPcZuRWeJp59Yn",
  "key9": "JcUoWiD7Pma7rprewfrKWAax1N1YS7d854gXSBH14zv8XD3tw8Wj43dQ26cC5ABf9HzUpjPm9s9A6QvAGa3i4XE",
  "key10": "5HufvwHfZUVZLbF6hWSJHHjnwem1Tq5B6QbRyoXo3xb6s4QrDdE5xAfMxncuRTsRMEmtLH45cnnog4E73jC7rP2m",
  "key11": "5P9Z5fCkJYPdQnJzsijvdfgys69qpu9bhWAfruF5RFS2tJc58wxD9PWzf5BnPx4CQcmmQNzxvapTDufSzkrYnAv7",
  "key12": "28mvgiLBqYVnrCggDfsq75kgSE1qbnYwtATRUPf6LcGvL9ZZ5p8JovPgb8FJDGpzB3mSZGfFoyCsX9fE9BLVrHXy",
  "key13": "iWoqknBrTN97S4rs3oGyyGscFKDM7hz3D7s3LhaHShyFUX1wMVFJ5RCC7ciLzfYJPaWt7DibxUPpRjxvJVfqu14",
  "key14": "3fBS8jAkeTqEYSnFvufFXSpQbGuSJeWhZHJpaozLiuR1MczZyczKsfNfKanNnGFzZSrwCDrbfFoexgWMEujh3kRK",
  "key15": "5wWizodPPaFRG5VgyBgGSUJoQ26C2zdtrf9BR4GKQCbKL8xXL3s9Pi6XdB7UHgN4VgYNjCTKmhXcdUUcME7eAiQD",
  "key16": "3TPLstyFYbNdUPqDdSvQeJUmD2gRwXLyc9Vy1Tvzs7W9DKHvxHdS2YpDVuH9Vm2EHh7nfnqZTkAVBKEN5qJGwHve",
  "key17": "Cp9ZyJJ38CzHovjkbeWW8L2YaBrj6Ncnk13jRwLqwTHNDGjGhCdJjRgAdFZDnLo1xSnyVvHVyzBUjYeskaxe9TD",
  "key18": "3cRNTaHJuEgyuUoDcu7uhrWzztBNTS2zwUnExK9MN2cLB6QFt29JBgb7whQnMGsS7SpNxXyz2qfNZUZjy2Mrji6d",
  "key19": "jKHmQvGQ8VJkRxFp3oHm3rgFzQNfGHmGz1W424Skkq6DBcWVfGVf8djpdhK9EWdhNyvyZ3EZnKsFCav2LdMnvi8",
  "key20": "4yhVqcobE4bvK63hnefQbGFhouQonrixYEMyWqa2BTkJprvTAdwQMVDmMnqqJe9tCdCtL5JDzFkeY3gGazu6WeDQ",
  "key21": "4RThj7WXq38xw8k67L4vyd3EKkgJtkPSRA1u67vv81q3zyRwB3TdZk7bVKAXmhRqa65c1FPGp1TPW6FXeSaSA3jh",
  "key22": "5J7bnagZFQkK2fg6nrhP68m7ZwEzfQ9Wft3FAosiqiEEtAcAbHN4JZM5n4Gp4QT9E4XVAntkc4gV6kb1GUQheGSj",
  "key23": "38PNEzh6Aawd7BNKCA5vx7RQZsUmaR6MzXs2ev7iSU4S3J1uK4XXmJRYtLk7aot6gZmNTfaxHa1jjacbqGH56WAY",
  "key24": "59ijjFHe7Yxm2sJPtvXos17amMD21ft5VNM9YwBvKMkkDitzTi7ajZgwcBhXAirZMijr4jcXeRF8ySCyzpZJC9X7"
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
