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
    "4TsYexianyLYsjkej3HrPSnPM31hHxuTu4SeVkJurP43QrUuBx9i7hdhbbUJMJaY4HeManKNexRZJAoK8iFJUsV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oQoSWvPkxjsxUwMFDFdqFHu2Vx6651rzmyBfFP3qe3NWhtSVyQcTGVFqKY9xNvFyoC2a2ifRD5D53x59QegQqU9",
  "key1": "4H2HKKYpbvFGQjzmoGbGCqNha6qDEe2mYd4iPf5ovpcGUE5YKs1YrgadSxHaTynYk5n2gWFnKdghAmsrwYyjFNPt",
  "key2": "5xiHv7sBRAS5YCCcP5SxW2rkEQ9NUtmk424MoZkuDXP1zevRK3Q197RukZ7EjqD3SPxTHcdVbx7zvY3UaMaVAkVL",
  "key3": "4PsM4Ggcj33rDQ5ZD5A14TN2tSfoL46GMzCxoPQKxMp74UpZe9Hprv3EvufrnFYp7Vjr56XrGUss34vGhSw5V6By",
  "key4": "4deMrfhPLUjBSMo9LQFKMeHqNkMeyKpJoyJAXwVEDAgQ2JkajfpbPUowmtS5cNAiQRXQero7Pmu8qc6sn5YW8pRQ",
  "key5": "2pw9qec22yueAiQKgByTKgUn7ayxXwM8ZMKacT5mSKrqrKkFYLcCF9aWyhkZqgMh4BGC1P3jyBBmiLriXWTDmqQU",
  "key6": "5fPw3eeJnAR6aGrBNLmANTCS47uYyoENTMUuDgBwJVkfkdHY4Cdw8cpUzFoGyjaB2vLnrfmT57fXxrSngUuidHV5",
  "key7": "3PeQJ8SnxMrYvtsPyqjSfgZY5aywC9X62zVwP9TdVPdipCxs5i4J2xvAcmZZXuNjikHovWnuaizMFnpZMcvVzqf5",
  "key8": "Ft6eT8Zi8K9o8FKtcgB3RZHTks5Ks8oNH87JN7P9aLHYo7jQb3qZjuVAdq7kM42YAKXrfdWnwZ4hW3unQk3A93J",
  "key9": "2TwVGP8AKtafQZnkuVdL7o5Fe8XQWdgS2gnJaanYrFWg7phWMdxCwecakVKDXoBcPs43k47p5wMWJwYiSEbYGq8z",
  "key10": "2zcruxHTxQSE4BXiHCeHnkmcExcwxVXw5UwvAeigwwY9NeDQ1YYWCoKpuQ2vUy7QS4tLaRnnayHGBEgKe85Rtuoo",
  "key11": "4aK4PSfdLWiZNh47vtWq4B4c3oQnWGYnZQ1zHCfnnP9ZLJ2rj4Z9bPZ3czTwTAywyhYEu4pKafUWHvc9TsavdEfi",
  "key12": "5EPggKvDrsE4RTxZon8YvoAt8E71gjoSeNb7kZYFM49uswU63z8gG76rbGiwoWLwgWQnDsf6Cawnms1yuZSdHFd4",
  "key13": "2t8d5nTxuSUZ3MUnydSgCEFoDZVYWEvGQVh9hVQ5SyZNCUh6YRn1qvMjocmyjXhiFBjFyA6pCjtDqPnWZGi4X7ZP",
  "key14": "3HqLFewHmG5M1rQLwxKuWUy3Gs96grcjYm4G8iHVThZMJkPWgQcRMVA6VrAwiD8kSGiv6bo2t2TnRDbtiYkxvsTQ",
  "key15": "iYzFJdyp4LYZpZGbXNNqTDRYBL4HgSeWGVy6GLb8qM4PLYKKp7Winf9uBY7oZFdLCCQidCCEggXwgZpMLAh9rTd",
  "key16": "2YK7FYcAftzNx3yc3t4MVSqsaiiZ9rzDopBdSeSw2qcqCfZmPFKcCFHRQnd1LMFYusgPcnpbW1KxgJPiog8CALLc",
  "key17": "61cxnfx3U5Fm4Zu9qYpNLdoQd5FSbBHpxa1WahjX4FALqQnjrFUjTyGvkeu8zRUSZKung51ERaiAaE8oVkrMQwbw",
  "key18": "3UAbjXAUS4gY7JHNU89Fjqsr2opf8bkkor7iqdXsFo29mbGh1RyxJdKjNyYddsoYUGLHoPDhXrEDFDF7L1HVdfo",
  "key19": "5C4fpBgv12rj2bMCZ4nmyoUXTx5PCme2YYhfHnbFxcZejmhDrL9o3zohsCuj9uHYNfKfMeMHG6yn31qTbbj1o6m6",
  "key20": "qJ8VZgdNRB3GGcRP1GvUpFR3Yc1mvDoihdPkmc3f4BhHEQuYKfaCjSkcuAbe84Yjy4Dp8WiEYYSBTd3wXx7ieww",
  "key21": "RAEhjo9mip8jCJ6KSCnmkqSeUmQ2m2itrrBZHD2qxvibZJNtW6U9m5EG9MbcDYybMujviACthvsFANVkAmfBT92",
  "key22": "49PHTeFvjihi8Q5oHTwSWUqdHVdMkCAPVfvKfTcHX38HRSNhPcqftAoFnNbxKb9FoKk9VwKbRtcPwdm6Z8C7zkQL",
  "key23": "3P1fAXzoExZaHKvGScT5BZtUKfxhSsXbLaetBCTzDgWijHsm8y6oDAwyTLM35cDAYAzA6t1BeHiEBM2dV4ron5BU",
  "key24": "4L6tTi72fdWWofEBdnXt8a7JTrxJH3iW36nvcLRQgq2ck5pY29e72CojGqCgkqSrxCs58UP3b46XtJ1rjWvrSYWL",
  "key25": "4FEmsXgBGYfRyHbgyCSDmEvoW9GEnruqtzCsEA23QxxQPZh5ejzjqDAJKN2VYg1bMhoRo8TV4u2ACevfZkTZGyUP",
  "key26": "4mMkQvq18V4AD2tKJHQ7UvLiVG4thkxYMTESzFxFRFG1p9mEKeXhZiqaMrU4WkwsPsvhoKmzEJtEYw9hye4LXi8S",
  "key27": "2h9hukUQ947tTKKHfLHpivxb8Gu6mwfSY22bNvnErZ13zuXoNNvz3AQMk8QWvoYfjNkgQWMXw8CmfbsprSiQx65K",
  "key28": "5oCE3dAZzetak9Ay4iqWc8LGQJBTy6HNYDnd9RCzUrgD8HN2EDFkExpTrDfHGR9FYmsfKdUZFdfZCCQGirmTaQT",
  "key29": "yqCAQezEW9LrDxkBjuyyVMcAEM4inSG8Ec9ZVQ94jLPgN888aADS6gA2dhU6CER6KsvvLHgVrbQpbqrpXyGhSbz",
  "key30": "5P9gpzCvqroqjkMcRaimKBiDKg2RrqnSKKWaGvA1pP5Qu6ou6RtqcTCgLciHiy1ifAX28oxFNHdq8EYvm4oHZmbV",
  "key31": "3Dayh9egywUYanMLPUTTCobB9r7nxABtLTXsXtTDJxxQi3QJvdfV9pes2zf9MnmBepiMyWkyFGEPcvpAkqQ6sLy4",
  "key32": "4aacGSZrnEB4Pa84A5AC2kqjvYdApDQ2k6Qmni4Kzyw2uGVSJHUZuPFB1MkNGn3FdT75FstmZucqaGPeC2Rr1gTB",
  "key33": "5Rrgb49QvtZA6Ptn4cF72pcdowznLm5hfnsPNYmpsfuTriMSazNJytvhvU3AUoYRtAwLLkupaAojRgLGRq7PT3XP"
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
