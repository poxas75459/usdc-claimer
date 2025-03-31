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
    "4gRMBEE9vLmHiRU8fLoTvsZZwjkajonBeQqFCrAu6u3KAZfrqtUnCLb9DMJmNwUrUzbWQMnSLfLjAnP42kBgW6WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WgbjGueMKcftJx4APEYeduYaVXZgmAxbyiYtKYJzjjPEa2ii9BaVZdY51b72mSiacpAJ1iPQ5sZXhCyWVbKC4on",
  "key1": "3ibByi1UhrH8yrKtrrhRr59SqfAsN1b8VhWL4oxim5YX6bsbPEHZMs9prR3imsJ4dbZcrWt8MU6shGn34X5dwCzd",
  "key2": "4bBXwpkniKpfWGMz7TpgKAivtRmnbxBqYJN3LX2HQfUwAzFghQoFBZUKhoUB6Xw11Y7XeptDJVz6vJ6x6fcLfozk",
  "key3": "5NqzRNx3aAt5yDuAkoMrzr4udaverTDUr9yTbbcYeinRpRJT2qieDkHuD5MScxfdQnQQxhsoH6hiys5Z1wgzVATU",
  "key4": "2mpktNaB37z2icGFKLRxQsX5z8tQdvcsRRWr46ae2bcJyQ2JfQhmkZAeu6MibfieaXF9RF4RMWCxtHM4DevZH9NG",
  "key5": "pW6XYXEotVvFjwf5dTEiXAcmksuq2meR1vnBfPR3jsrmWLu4BLRCNAFTST2DCEmrDwgTGMQPVBhzetYBiJ19CU9",
  "key6": "4L69F3mJaxWw4mwyPubQkMyd3GjZ2oipNdYjvjpUnXbcuFAtH1ETck6QcusZ9ruUs1T1DqHjFMZmhxrw5M5oBFHq",
  "key7": "5kGjUsPg3w4A3V1J4bKGfq8pA7dwFfvvpjRrnyCbx8hjSkTJrJCuwrbix2xKqBEPjmgfw2kkaU37NND1WuqiCdNz",
  "key8": "5HqMQmrmnehamEguboSJhpCDRMbrjqSsCSK7hULLHZerfQWjYByrEqko6z4svQPbPpFbFRsbZNcbyAppuo8XbRBA",
  "key9": "3frdvsHAuuCDrBF9qDE2t99wanJHEFrEWfZTUdyTX3LePPbQyvirH2k5mciozHiiUYRotHJDtjPt6PEA1XXP7XUC",
  "key10": "63LVeAa9YTU425dbubrkDPMqm56fMCYXQyToDjgbQb6Uwsavyw6g4UEfzyJur8yfkGJmJoJXKYawzf3BiQJ9ZRUz",
  "key11": "5G6XTrJ55cK9WJYQxHWXrfDjXj6LYNiU8acypp9okSiq7TshAFnwS5LRieRxGSAAaUAcXGTdWa169need4hXcBHv",
  "key12": "5g8XPWx4GhiJEGpw1AL7eyRVuJaMFF7cAruVjox8oy2aCY291gBLoDFAWhFd7rzfdWgjRLwN9UB6cMjLa7BJgba1",
  "key13": "2JfKHqwzmj6iRjUcDRF4g9Yq47G6KAzpoVDi6GYtwGRV5wSrqj2ZEy2KFt25pCLfZxiBsfEUzEfcTXFFHsiftExi",
  "key14": "5ToLtwtLuzaJztLiZVJB9aYJgj9zCweCJHg5PHAtbL7niPwU91L9SnJt8P9fznNGWHq2XnmDY7KTHxanQbKnL89c",
  "key15": "2tWfMH5d6TuLj1waZZ6t8shx9v55zWAnhnvaxjnsJyHtGs2GnzXg9iPLPAo5xCwqEasr5Vqhhi1Bh7KHpFZhmo8b",
  "key16": "4HyPkM9PYKVv35Cr6d9bNawZX7DLgG1bAv2eZxJGN7LxbkWqttRswpQ3qn37dTwhvgEMx4fa1mkf9fjGeqCzwBKa",
  "key17": "38r7zkYwnhCmXQSzRQBkpQjsZ2YEN3qZ1ma6RU94GHxsyeqpUibEf2ZihgLGLdtbfWCX6cxfLVYdHvKoVBUQGJgF",
  "key18": "4XzUGi3F6vnvnpLXFxEdngGRjjsa1jHxh1QcatP2cnrCvGJFgfCEPDSu6w5HYzkbgm4Jz86gUvBs3TsykLLyNrLB",
  "key19": "2WrEC2DgPd9KCBHPctVUFgWSmABF2Ja6ghgZu2CZMXwmtGSECKhj97fvz2bcaxrbGw69qf5HrSprW5yWkhysYy3w",
  "key20": "4xg2ncvBm54Q15PLs4irFBV5qaHddpGGMdaX4d9b4qJ93bqhxnY5qBi82Pk4qjXhaUos9RLfsx7vAuxFZaC8Sikf",
  "key21": "2FyAgoXMr7JF9buKcfs4SJVvFPor4sam94XnZoYKRdC2WqjUmy4q1MdA53jFWbhS8hkPHXUxK1eAY8jaZbr329Vz",
  "key22": "2JsE4vUwPkpb79eD98tshpDC2raBibCZDsukH9GfKesoBbvk2JYuZLQKWhxahScKXoW5ZrEn76KKdMqd34AKXQrd",
  "key23": "2dV8CTEyhdh369d5EMEEjnqUCYJPXnxY8e5L9Xm4PhbP4RBjPpdR9Kn8SzpTByw6Ao6yycf6JdcsUExLzLbABNN3",
  "key24": "RJvXqEWZNTA4exEVv68tvKALgsA77V2ZnPVwsg4Ug77ftRDkLiGUFGxkfno9Z64fYARgCunEqqAWuKSyZ4HL92o",
  "key25": "54JfyWbm7j3mRjLkDXyg33K9LVjxjpHoXb4uATs8K5XjZ3uPVeoaYK1u1xe4kmZK1KQrutkjcEvt6YeYd4ce5Yrj",
  "key26": "5PtPPTArxvieWuuJCr3wuCAn2dcmWrpzPZe6jaje2AbYVfyhstujZHvdFihpA9oCL3ykiBvyHHhEucL2WjN4PhjG",
  "key27": "pBir5X8N7VZCGYtNbwbS4nqtK4E4zpbpyi7sKsicmY6pMWayxJQ7iLHWykAkZyVjhHLJ4eLcSn5yhh6MYTxA9Av",
  "key28": "4G5MymvawUiZxYZphBNAZyNYouxKQwjzBvYFgJcEwPcef8vGNF2VVVfT8XYVgQcEz8rvXZr8nyA5URPwc1tmyxhw"
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
