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
    "49vKS31Vn7hq5aNFhgFJFx6CivcuzGnTVeQGedjXjRQKwgdMVdXFQJtnDi2TsFE1d4Ws4TM8xkmaxG8kJBS8aTUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fRFqx6r6AD1KA7JKoytek3uWAwH2xeo148BfZpjbtarqWywFjWcmGdCy2HLFrHoMqiomZW35uVzdbfreLqQbvS3",
  "key1": "Vqmz8fT5j7jUHUHLJLqJmknefFf4P3SnriSYnTojf61xtD21d3kLwMAUQDEkgcqKaJeht3ymcZmFxYXEq7qnkAP",
  "key2": "3EUginU9CdQBWgPMqnKWHkHpbQ6U97GUSyN3h1QKJ6JB33cNdcWgwqLXXdMtscEu6PyC6P6QBJwmJgohHMfC8EmG",
  "key3": "28XTRAmJvbi4D6RGcKaypg4kLdCkJo5dyHwWkxbb1mFnwFL1JtT1zbWsRHuYFWZdKhG8vkR2teqpqYL3U6Uoc2tH",
  "key4": "5iaNRdzq7woZN3vKMJp1PwzGFw2cEUQ9rKSBUY69TMS7gG8HNaoCijLUKmq4eMiFM4pK3SUjoMyNgDvpCnhWeJGJ",
  "key5": "3Vt25s1qFbQGUVYizoyPw6C3jyPnH6fetVNgyPNxGASBXeoWDEuWRFRKJpRFVJxuytihYHcqEP7Ymt7nmm8o3ysd",
  "key6": "g6r7bexkEUNZEFWdAXVtSLaF2f6ej5K9xeeokht5EYnGJ8L77k2YcYk12ALMkP4boTJSkj2yDqZLvycCu5DswLS",
  "key7": "3BkfDaJEyJeXUmg7VJeDVgQAPi7pou6X2Phne7AqBAUXJwFc6hkx8RtCEhMBJwvHLetjwBs2J343hDDq2b8gTr1U",
  "key8": "36kAqxWhqxE8zTkYGYrVpGnDaJtxRdTHavtepu8iUGRdh2N1zGGKDt5Y2f9iYyHRjPBtKHQfXfzwfUvpiUPshL8n",
  "key9": "26XeGGtePn9obTbuGE86gHFbks5UJZzpU3cGPwX4EKjaihhw9HLW5vmg3QJZ2S7pzpgPxoMhsyUv4i3zjzFhBXu7",
  "key10": "mbQp5dfTGdHm69Zd49CVZfidMySVKaUZCccE5HNh9MYj7k32mYwefHZiyXLRXWVajnkTdNdCwCVV8RAhsrF6DBJ",
  "key11": "4Zmf8ZoZb4uK1ikkmHXVufdH6CEevDv8LJ6GAQwepHWL6BRS3224bvKvU4RXnKitvncmpPn7EE49StDP5hULeouW",
  "key12": "5L7vBzbT15NhBUn14k1rgzUgwzgk5Aken7G4GyMHA1FZdTjMJeceMww9u853FLdkMNnDKaVye5SGUy7Qy9WQojc3",
  "key13": "3bz6LHknm36JpYf4dD1FVMdVYPtRZEszs6RoZrm5xaRnfygpyYiGkDZH2xR62nHoH96kmQ6YHRGJchnTtbnM1bTs",
  "key14": "21NvJ6aGFeD6vxX68tizH7tro9aUNkDWdw2o6UCDRbmUGvo4bBqttY67C3m4BVNwtiNafUoQ9pyN7mPV6RG3N9Ev",
  "key15": "qbBFLrcjBxRa3UCobt9kXQvmgzbgP3v4SV2brLATBt6x7Um7CtqBYULLz78zP7Cy8HXcLkWCfAdmoM328yUYWB8",
  "key16": "2FNt6BAhWzaubkHttoTxAqKvkGt1ZBhags3frTahekfpx1jvB97ADJZdvVbbBxEbDgAhMo7RmRB4ziUNthpk8wR1",
  "key17": "5NvNugFfexgQxu2GNBYKB73KcxFWWkz4SbvtEYZe4L1c5tm6zhMSrFHfCNoJtWzxR5q9pAzz5ccJpzR1DRSWHkWm",
  "key18": "5F2jRZ53Xmq6c5tBpK4iz5CWdHPXRcABTUAAXwLfiVEzf3CXEF3BgAzE7QfpuHVvvbWUqYaoU1HPzhrub7ivh2pC",
  "key19": "3nR1JvR9dTcnPJAekKW1d3FqXAH2FTK67JeXudPfaMonLNE7xpwhYEQwGGyNMevb7Apsd1UYdCcGBFGaVmLrEp6R",
  "key20": "5C3ix9ons7CmY1Anhwb5f9CFLVSpuVZjjFqd8QtsrioAGyPZLQ77zzeSn4xn6RApDfCyQVvEDhsYnzYZq1JAkgV8",
  "key21": "48xHsQvgX2JLp3UjXahnuicYQxXposhmS1VoYQXK3JgPRJn4nSiQv1daarFRB44aKjtGtnzLpJFxKe6qtjX2EXXb",
  "key22": "3zcGTBCmaQ3kzkjCvrhbktzCg2Uxz1oaL8Bbw443moVVocSAtkxRaxLjiWZe5xi1eT8Y3SB5tVsdxZGwWkJ786dq",
  "key23": "2bqdd2gf3NwyZ7JPtPsCyrPuhM57mhfwPXwdfhbNmFhfz6gmrEM8pGFFgSma8s6x8885tB7kGXEySPkDALbmU2mN",
  "key24": "4eBhwqR2t4TCcp3u3CF8JzYd54GbDASnxfz57UimyCqynmc7LHhd1qNTcDRy42Sek5ERpqZVzLj1tGC7nAMyNcrH",
  "key25": "5jLwP9yNid3aSvcE13n9CUJuqNtxkhBDvB1BjqpUjkJnCnXWAdtjZcXDaLdVW6qBH95UkAS8CdZ86oBgdt79g8i9",
  "key26": "yWnr7dNmU8MCnqxs8CjkcM3ZiMzqZHAadtAMHnaEz28USypLk1vsQxyFfR28sCoV6kwC3KeUGCLhfZP89Ey97ZE",
  "key27": "vKX6Gf1VNc5YfoMfFn9XCTmRHTz1qwkBzx928CJARy8ixLL9aD5RsYKSCMkuViukFbga4Hsb7EQdAUjDKfZnJyH",
  "key28": "jW926koPZfdv5CewZpvcZjaAXCbBsaHTdyDmjCmbq76jUMJQpFm4h1Rf1omtLY61j5wVewHJdFjwY4VcdAnABLf"
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
