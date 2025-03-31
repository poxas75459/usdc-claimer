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
    "4E2Zzsvk9LZV9LkhNLv8PJNZ7Fn8in7iE3LcNJF2Vad9MXorUbsBiTgRqT34ya7rZnvgc2YyYMf9d88CVZuensnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZA1tVC1rLKF1ZNazAL4VmAUPG3dvZmnihEZuCwgKoPbofWHVCeT2d2uw2WvRtyKZTx6zgV9btLfk34iGC67hWoh",
  "key1": "39GAYFyqCGkH3f9zk6ez75o9JsZ3T24dE7218YfEzreZb8ZuEW5dTjxEjyiYXEUjeB9FZThKC46EvPza2E2BM5ZP",
  "key2": "43dcUaaLdWofzknA4m7zuULVa2QneDjsxkW2kKjqNmXS9bei19Qnw7yUyjbQqHfzdPa9nAwGURQ2EMmXDwjvFJLb",
  "key3": "5Ctzs1gWZ6DgNsPcUUURJ69Jh9vGeJYDwnFuAaXpu2Sq9joA4E3jwpNM3vQshnfbBzvP9Vynmp5yyYBB718d6ao",
  "key4": "67L3BhkG8xSkYATtbL7vpKExhMuYCsgGVupwRo5dy3tkaQ6cVTt3EcqbZcFRWEuUqRbzM5hoE4KZcZw4BwxAp1c1",
  "key5": "4HwM2VU3YZt7NGuEGyQcDAQ46ELHKjwN3pg6hMEGUieq3cgeXQ5c1tPq9s2GpsQPd54Gs4uX3JCkAZZLEBPJ3w1a",
  "key6": "2RVsPLyZmbCdnabAimcaV7R3achio8RvYx52VpWzRjCSLU2ukxZTexeaw32VvBdirpiLhPkxphcyRsVHaWCT2YXq",
  "key7": "321wDGnEdat7J3kVgTf4Xbx8w2Rs6C8N1ZhoKFwoRvHgqGqbBcHrRJkUDGSCRfocyqahpcCXzGxRrFi8pD6o5Hqh",
  "key8": "5wjx9JX6o4YAEqX4bybGyCLn27o6pK6dpZEvmNbXjng2QRXBA1aKy7EJEn5dNTyiaL4mwvvEq7ezGeAQaXX3TBRD",
  "key9": "2e5A5UGyNv9hz4mwazpDmEtbwKwZNukJqmRPaiR22ujHcK6ZEfZC9aLPdE2wzMX1RGsUiQDDbybWTULb3MWmG5cM",
  "key10": "76wRR7Dpn3zBe4uSWDwvSHgnp2MHPZ1bfwWAQ8BRotP4sVSXWhibL63ANaUrhwkesZ73Hjgq244tgUoFohNnjFv",
  "key11": "DmgeMfJSNETw2XSRoNt68vJRA1Ua1pehSJXeXDJc3gCsiVczB1Y1K8K2XNW2EnWnNDdJgnY6YdxTkRxJUbtmnyA",
  "key12": "3Ccnrx1M3MW4XKWHFX8z5BQntB9QXZVJSwPiRdVf6PunRd281RKigbRWdELzgR6vJZnWDUq2miRKGme3mNxNcHg9",
  "key13": "4TJNUscwhRFNY9MCEayQUhgnyBzxTzqaTjSMKsTxpxgEzgZ5ruPbKTnqNvLsKvXTwJn3wCqt5L6WN6y7zcgHMYFB",
  "key14": "44cPodCBQKXPu11q6pxDjcAxUuG2d8uCqnUSUQdwiu7FDuyrH3XJttt1psiH5jdbL2kTAwRepEHg1dR4j8ob6DaN",
  "key15": "kMYXrC8aJ78GViScsJPt9TdszXgocvEpEmt8fTfVidxCiWa4hVG27qBVffJYm8DcCT7UsucDouD84KSagHr328U",
  "key16": "4DdAgjRfwRi1UBbzUu4Qk7c7Cp18WZoskNLDniXtHq8uufwvhurTnf9FrtueVr9e8kTvdyZAMAqtN2KfjE2mn4ww",
  "key17": "4JKwAwsKMHKLxpNKnztpKtwMskVHGk7zComNqKVTKT5LqA1SrzSb3kmCutamQdLHdPZ2ex2HLP7QjAZvnCmgevJN",
  "key18": "3dHwPUGkYHGT5uWtvcfTcqMrj55kU4E2jey59iLcgAxPRWFsdgLjNqBHu6ggydwUJWz7KYzc2EzwHYVmCwd37a4K",
  "key19": "3H7Ms3xyz8kNDRoUYxdjMVSY9JxYAsvFVYrxhjSqNCXivjGmnbwYd3UUdPAYUmSicBGMiLLckcx9dszKKkdBzUbQ",
  "key20": "2igNax7L7hDsmxuhU9jvvThJNfMAQHGkWvmyXVjJ2w6dFT4YNwBN2ViQDUHCbJWqhwDWek8yL8TKFgtCtcejqASz",
  "key21": "5syPDThegLGXozu6NFCPTfqvwGxsMdqK8ashay6m3YZHP6zA8vV5W1bptR5uc8ZZHEtq84ZzYjSS32Xq9pBj1Sc8",
  "key22": "REdiz3F8QqiSzWKr8VSymjqqxy2oVQKk5eUnh8nTfansAnBdnRApmcTU3HZHcP1dxYqSicqrjfizEBktoMpmmMS",
  "key23": "3XRvVsRJasBVkyab6WQaTK6ivPtA1bEWrK82hp6EuEUPvA44iMScufSC9LRMhbjoXCzJuNNLZ2DPmfHAtPoesNBF",
  "key24": "4LHGH1SjnXZi7PRaXhMrdF7AQCiWzij4p7wQXtubDy8wSVqPzJ8iPBK46nDGaPGiPwouEd59vhh1yw1P3QDnb1X9",
  "key25": "WVr5ghw1PTuzhLGZJCVZc6Uej9wMDj5tHvFFfqTXrxfPHTHQTwe7gThz9BN9UxW6ShZr7wFXvXYYEgpENE4gDmr",
  "key26": "4RcaFQEqGnbHkyUtHCz4rfV4aUzqYpFuNesYwuZpCbLdPYJyTeXPgQZBgRNBjc8gFeWih7DfsvrdHS6GS1376wHf"
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
