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
    "ikVm5ryuxCEG7XkMaDo4cyW1hzByxWuEddWztAHKFyKrLP4HSu3GWcMxYpkVFtMxSp8bGq3kQMejZJiMkGGrJmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSztBdkGHpfVnAUPyoU3T1a2XHpA66duFqSr1xMrpohVvtfGK5fRG4BVXo8S6RgpVtGuzi7DsbyGtu7Muiby4MV",
  "key1": "4eXtmG35YRKweBczgHJAuWvaYtn8JVmBcT1hfhuSaBQTkJsoiQ6MuGH9s2SisfAhjhDfAkhbQ8XBaR8LJnbMViGG",
  "key2": "4UGgVu78BfVhXiDVx13Xi9w6W5iGkTauU6VYoXR8qVgZg7TJVw7b12iSN8TrC1xLTpPMuYCXAhDsaw2f3Qs2CEHH",
  "key3": "2rcqkorucjZJPdgbXYoHZvkdwY56kC5XXYqm7zkcvQVeis7oKHFPvKxGR8A1qiaJsJZpq1wZs9qvS9K9aQWYTjVY",
  "key4": "2epGbvpUeJ9WgkqbsJWiXj1YyAYx7nANmnLvxLy3sRX7azkmozVK5qzzEQyc6PDU4zfmT6Rr6SsWoX8g3KLmc89d",
  "key5": "nb7dkC7kUmsU1Bb3bKDprg3fR5haR6GDZMBqFVvYfM426F3F4j27XTUwrSs17AnnFrfCmLs3ep4mEDpBat24V7S",
  "key6": "AEPfzzK1HxoiQzTjgFA3gMiuoKnpnmN2XqJYmHEJ2zAB49j1SwLTGp9vmzMjVFEhQTTsm2jaZcH8fS3NdYBP8Eq",
  "key7": "24rqVqySmxww4x8jshwJpTWVUb3TT1tY749kFqG46AQkbZLJiN2puwZYAR67vQwiijWebZJcqppwbKoTvUR3nzS8",
  "key8": "4m8GXyE3YHEFeZaA4nf6VBqtmAKh8TNB5n9k62rNk7AydTphdnskyw6XKAmpFn1rd6CKHNCy25fcKMa63RCViQPT",
  "key9": "5uCc1kHPbPP5URpDEFK7QQLxJFq7GPKFfnG8x7dKzHULEyMXxLMF2Qy8GcpPqahC827SJKLUDBhdYrP8VGcPvRDe",
  "key10": "4xGXdVtvx3kB7tKCQmExoiDf9WgVCUdMK8CbeF3XhaLB4vt3GTrkHmc9f1rw1e213RsZ4RdAhzNjXXzbHSXernaN",
  "key11": "5JTcTp21GQgWBr1NDxx3VP5yhDcgjG2RKBCb8vGEkY8XvtJLQPdryr26t9A5Frt6sVzWppjXbEKTbpv5a2XcP2y2",
  "key12": "4Wtrew8MCb8jFHFfCgX3DpaDwLDrsoQrNe4zydmFd1f8NGXRM7V8NiRQ3r62qmqsATREbiNbpCNcuFUtSzEtbRYD",
  "key13": "nmpjxMQt42Dr9W2L8W6KHry6fPqrdK4LjWzRzd2FHYj8KpVaJ16XbYo9uVRiEUdGDU2mTNPdjMMaJFTNxtXxmgT",
  "key14": "5Tao4wBbhbVuYYpWwiEDrZ7b4kT2fxrb64dWciUdSjZi3guJrfLfCeTcPM8fVNyjj9LHc7FCvTFxwSgC6rpNpNE9",
  "key15": "3bu83ecQXr3LLk2ZdhZY9NgYZTMXxUWpiGPRZfvKQVkgcS6vJYrTH9j9gHdoxTioX5rFMV1tHG85dAerS9yxPKpE",
  "key16": "3L5yqwPFRagQnaW7ifnwVkAXWwypanSurYjPkPDzwwvDoqwUGvJKGvToVgqzZPogU83uaUkUHss8HsDrpQ6pfZUH",
  "key17": "544yAEFPU76bkp73sKKsmDc78zhffqKBdceDLW6Bv6d9W4TcVMZ7mpMwZHu2HY2HW9v5yxwFfcs6ZnR4ibKUBD2N",
  "key18": "5UrhdPfjV8bMAtr7FSbkzksy6huDPzQ4cd2nk1KkE9CXdnQNVafoPBPhVjexdgb3gLq6YjqrffDQva2Q64YEPwTL",
  "key19": "3VUpGnoTqK3S8z85Pvf1KmXy1Rxa6ehPgisUsCXk7efgp7KYhphXM4gaFnSj7THxc7AsSaJ1EzdatPJP6GeeEtLC",
  "key20": "2rPUoi9kCEChe2TAru6xr9Raoi6TGNBhr9yxL6Uom33KZJAaGwoqWoeaWfM1KQoQx8MCQENHM1CnnxaXqmTWdxPJ",
  "key21": "3dWgvEr194sqEaSK9z57MQTzSNv5u8RFpe1uk67xBtKeyFAnEJHkpGfC7nkUQTNiWohPQefrPzNZXMYgExKTFdXt",
  "key22": "4usTJZTWfQcHnRmDUF4tGSArRx3kvZAGjy7xHdGAUbDcbsz5YmQ1gWePFqZTFj74KPTyurwa9FgcXfknyk23YgNZ",
  "key23": "5s64uskMs9SQX7EjUDihJQFUnDcv6sA2p6TBGUnXau2PnhCnjUmTH42mVnza9ekUAfeWJk1ntLzRvQsM44gvWQXu",
  "key24": "5qsXP2YbqufcopjAF1GekmHFMHhgwjFMNJnw3VpdsLPueBcGkQTbYFeTRKnMg6CmssdDsEEa8vQLngNDEFfWEdW3",
  "key25": "5LRYBksGxaaSEdkxSf4eBnVc8W2zkYcFsyYMrDkQnyS8zijxK2GbdnfBNaRyahPNmkVNEits1oMVY2hH9N1HxpCx",
  "key26": "Bo19i4FQ4k8Rvhaunc1ATjRtVmdH7rDYR6LdUvrYKpSCnFaLxg8rqv1wsLiRCwXpotKhezL7hGZjTZgguvNm2LM",
  "key27": "5bKPtn79t3AfnFCEpjTkS8qXmgJU1jye4QGp4RCtpea5cSctHjASqABNwiTMMMMtBNGaaSBaKNE4U29WzAM2mLmE",
  "key28": "4an2FBYUjNSSYL68sWw3pvSEim1XD196nfZZAiyKgYUsJNqXDu41Rwf46JymLQLt153zhZMwRDQtB6svzwCM7KAv",
  "key29": "nHyTe1dHpdQvjK5aFfQ9DMc6PihF1ThtYywt5FSQgiPmsHPtHuF1yhdJMrwWiyBLjXfeqBdzZqHGNJTNUZbNsE5",
  "key30": "YkjhX7Jzsxpcs9MtkLoEbEES6hq6qEgpyJKiQhkGx6CezfipFUhi68wJXSNSm8PYGWzLbePWfPDZ8TExQZHTxRo",
  "key31": "4nnemwytEwy3uhyT6wYU5r862AeZ1a68vVw8KWtMadVULz3AE5Jev4J7y6T35e5oEMjWCeLaw6Kkud3NZvDK2i5U",
  "key32": "dj8D833iy76p34X8MQVrKssny9sbwRD2wKF387nZE6Y9tYqkxSJ36BKLXU9hjRkCr5nFStxGN51o1e87WLpbiwA",
  "key33": "3K9QFSocpeepKXgejeqpHAvtkLhetH7vbvFkbpgdjT5nrqJBkxcDC37LErJcSf4UBqJDEnvGyqomLUNGGUYdnZGh"
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
