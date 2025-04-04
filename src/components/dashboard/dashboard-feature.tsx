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
    "3Miw1FHA8sWktHqx7y2ZZ3tnxY8RGAxEmraSqNMdSRftniHLsmHvsJdrM6xV3GfTEoybYKdbJmUC8Fpi1MshWpDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kd9qD2qRZ5RNyFmuuKFCauyUHJxi41yKjB46UVeKmHGgJ33FzHGRQAmLUbbt22ykjfhYHMWSc6KbdApECsfyYxo",
  "key1": "37L4VY6E2XtXwQEPMhsmhH2K9PsRrgkp9k23jTXY1Ev9gxPzVw5ncmoCmrxREEQF4xTKM28TSf8uqVpVXCtZbRCd",
  "key2": "2KHQNmMDvZJrdfc8HTDQ2e6ytv7Z8fZ8fAQtkLYLbG2iyCRmEUVRW11oy9L9VAAyBFAFN4XQcg4bEwuHtnHThVqH",
  "key3": "4BvPaTXWndkAKAf3khYTt1mSCJjMGPKHPkVXt7cuULWoVTLJydPxEyNMdjHE7AuBCinw7L6F2F4WnPrdeWkyBt85",
  "key4": "2KdE9wueVjzv9HQevtxqMe2F3F6rUi9W5QRmLPsJQqE9EvB79JRbh94pVV8c8fSLMg6DBVJTpt1MUWgWWKWzL9u3",
  "key5": "5k3FWk8HZJRF2onXxkXqcckLvtnhXq14WCqSz4HP3LoddtCBek7GeH6NqgkFaVekyC26fsP3nXuY89YYiL8cMKDQ",
  "key6": "2eLYF1iFqRMvex8CQoz4jrQCvuvyjXtKx2gqX4KAzFkKTnfeePuN5wKapbxQsq3CBgw9bnPo2dL6DhkbSXDDZYZN",
  "key7": "5TXeb26TaYJ5QpvfhRBxeLjXtoenfdV94ygtXtAHwVUcT78XRGqDU3ycajp9mLwNZFWAXhFkHVYkkCrQrnLYe7wU",
  "key8": "2BoFhv83BJpRgn5o8jRbZfTroLJrmhCwAvvjVfGzqGrDWiLK2WSjGJRe4r5kswjBjmfAAzA7eeg11FoZGA4b4ef6",
  "key9": "237VTnHQkReNzZeDQPtpgc8h5EbFPjs6RgdDpUHCdh1s3peYRsbjF43q4F5x7TyRhAXHHhehUcQCBGn9SSoNvJVy",
  "key10": "3sVtyfefZHUu5eRPJRiThusRCAGnjMK4cfMm8paPThMAcQWUrGA965t4YcExkPyJsK3aoczCn7rQYvp65xQ8Rqn8",
  "key11": "TDJWHevh967SJK8gpz88y2eV5RHWjSP98qZ1Xj5NFpvjvxiE7ugdvHQU6NsM446RSwynCnZtbkzxu7hzcom1Wow",
  "key12": "2ZNgBSogBQiA5vp12xTdriKGy8biEwaXgGVvpFgU1tdZ77HHdaKQpyya4JHJLE3Gjxrnd7VvFxC4ya8oPAjVnETu",
  "key13": "SNbRh4AjR79wNaQszuVeGjYy3LYpQzTfK9ksGGrUAnXkrRCkyoxrUvgBP5QikuoiEQuZUPRAgQD2MfjESaqfXvb",
  "key14": "5vPRW7c6BVomYNzk7QyrKB5n3Y7y6WUmK61cPmtVYa19WyQs51vFFs1adNdDSXneRgfxha9hSXbURqFuABS6fEoE",
  "key15": "3GA78TxVFhwyz3FdACTq14DaTWSKNM2qQZA4FBDEhzEeLoLPrUDenqZ4qJxKgfUyDZRSsEQ834LH2TXQURYH7c2t",
  "key16": "nQzaeGAtU1S25jkTF4cxCgyU1bMP3Zu5z4utb6nbwUGet5AkciR3VntqisCxg3gu5fb3rsSEVfKpu9UgqPR2moK",
  "key17": "2VaJDhzUtwkAhn5pkcYkXjdrVMhvcMmho8pMAE1NjmXZx6Aq8cAhHSWhhfAfEpqVzFcgaBhZy2vrcxoGA9zrzkkd",
  "key18": "5QSa5R8QiiaujZvmkWe6tVmdWCWiz2yBXqv91HCgMnxedtNCLUFiMkbgJVXJKuARfCTYMSAZCA9mq4hwzQeMTbvB",
  "key19": "2N8KHYtvCF8JQxYWKgXLeS1bEZpz55RmmwjkUuw3624ZVo1DyRtWANSqA45kqRMtnnPyV12a5erbWTHoxPaJfzH3",
  "key20": "CVWSwPFQTVLVnLskJuT62h6Z34SULdry41qBfzdKfbHY9QS1jpgQrthDfvvUQwZFeUiM8FspGLDk5z3c1JPQCwL",
  "key21": "4wQgHoTx1P1maneAz27M9sRkPdfmWKfBmyffY8rWajBgxGdF3TxWbyjfhFQEnkSa66AzaqSbTjvvRUinZ3i65zcs",
  "key22": "5tEGTMe8JUQn6nnHhgGu5J8sdVjEgLTmr1EQ9oQV3KHcLZCiNhqb2VnRHsbfDbWQdbx73VcoxBBEEiT5DggY4nss",
  "key23": "CeDGd6FdLPVSW3hmdtTJ6rXxDYNw3Q4VsL3x1jtmnHmRLVn4qoYzWvcz897NjZTYEyYbPw8ZUETw6JTkD7KamJr",
  "key24": "2K8gQWknXeUpTYWUUFbZphSGAEQRjriZJP4ZknfkSxP6fx3RKgkVzvkeB2TVs7U8C6w7xNsDRh21VJAg7sreGaRs",
  "key25": "57dg9ZkfHJncy7PMEdPT7Q5Yq85R7aBVw266j8V4kKUh4rSh8D3VjVm8nWM3JwX6z4ENtdGLzKgoPsSB4kWgpZgx",
  "key26": "3ooJ1hLibk2CEsRqvXcnb6HmT6va8PH4EGHtjLH3BBBFiG3girY4uyFBCJqmDE5haedsT3nuz7kyyznCL1VJ6RGH",
  "key27": "4Up5UypL7BNQuk52zSiRQUYmwUi9R58YUpQSKs9qr9YtMoapp8f2kzKUyFgmsPdYks1tYc4s8rYEsESfGfQ2SiSy"
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
