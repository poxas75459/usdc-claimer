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
    "mCv3jVWFX5JbdtqbwXnSLGrsagXPz8KVScZWJhnywci7FwyAD2xuj2FxGJrKKhaYLfMDtUJWvTR61r5qxjc5Gaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2XQEWdKteHCYKW2KHUE58T1tdXFuoHm7aqhU3ux24apbRjRPSv3fZHaVJLQsFbicsuPQAkUeb9J8htuiRRSLVL",
  "key1": "3qH3hhW5iJ9vTcKfE1AyvYFfT3xoV3dMnSYSXq9q74cWZZEsfddtEZWLDBT5Tzwjc5CX3rP7R736gDG9JgoWxbGg",
  "key2": "56r79cqZmsem4cucQ6GS3eMcHdJFCAhjKHifuZgT73Aiak1KZ747jzTKYjuu1umXti9zCgjSQnFU5BV8WQxnDTMH",
  "key3": "4CiTrqPpZ2uGjEVKthZ7B7De9tethsCBQ39epPv2Tgh64Bdz4WFvjAwq7eP3Yv2ryD7UGbHBdKi2jPeUSPwEZvhU",
  "key4": "kkRTmknNwgG2oq4ugJfySLEPZRDM8zBr2ZaTnNvYPUQXQCptrR31i9AfhGGjgeH6mtrbfM76uWfcZyB7Qezk7WX",
  "key5": "5aZFnty6k4uhmYYaUjfgF2JTD7hYPxnNhLP9kCrNSW8xwd5GazySR1SXZ9Pso7tZp8juZm3ookvVbBhtWLA38gsY",
  "key6": "3rcp25wNgx8BzcgzSEsSXXXpsDcTDfx2KDf2SA3BjYFxz7R4CH9BJQ8E8jicG1fQQADa9nW4m73SM3dqLQjViihE",
  "key7": "5gqYFnAk7JcyxgNENiWUai4cX8jLQY5fYDUemy5cN1p4oFiic6PvtA6nEQc8HGhiJAM1Yk7SCrJ5ovQFXwCTAXq8",
  "key8": "2TQ5y7giXXg17k4DrxWSfbk4iig8xscEtRLFh5CuG8d4WDi7V3HhtTjEoQNKzWLAZcSEViRnMPi1ZTZFDshniMdo",
  "key9": "4HNKLYrbCpCEduRgbkEAHrywKEyGPGuJhfuz6MpxdQSxtJ362HSmnZ5voKd2ZcwhjEPcdDAaoPRUpH5bjwxdXAHm",
  "key10": "5JdGFBD3MWjYERt93tdEFx5MuTHFpwHsHznFN2iJVUipcd9uoP3DZ9ZpTf4x9MuYeWSBG9P8cDJqzjrP31939zsp",
  "key11": "2MLfTLBkkocxVA5XpMGkv4B6f7XyUokUSiNiuisZkwPL7U1Cbj9ya7GKq1tbR1riBm3pEQsuBNjMExsP8bNYNNPM",
  "key12": "3KcYEGMJKWgJbNfF3zHSboCogmseamRjQUzN92boKiPopZVgXXHDH9AhkAXX5gQKWEMvfKJZYR9hr91Y3Vh1Q8uc",
  "key13": "2Bf7QRaho6ErLDW4LPe9Dr5hGidSsmZEmsJuCUis5F3omxugLs7xAUm6w9EucKuaLFYt9tJAvCXVYg7aToqG3Gqr",
  "key14": "5SFquNZwWDw1qgsxqmGmh338kwDeqcSUGvoZdhb7GtdVuEaRAcUD7uMFgVuM7naKoXmqmHB5gke3XgTTKrs1RK5H",
  "key15": "5jEHF2m4rXghehLwP89MLShXNkMDQAxYL5k7XaFP6R7L5f136H4eJdzYYdAdkmJvfpzxxzX9zfgR7f46Jdd89iXe",
  "key16": "5XrstRQTTtXXgs8GdVxMLv6p23hyZxSunktSPuNUNmcpRZdXknr3bPFgG7tXjLDpiY2SUoLhigD3CVyEEnphQ3ga",
  "key17": "8NQxyMeaUui8TpTK5qgLBamq8PX9VoD121A6wFSK5n2T9DHq2bzBYCnFUKEHKrEi2WVC12SQJegeBMYNgD9C7Gi",
  "key18": "5txBgVJ3aRh7uqpLiTmpKopc7L1JJqG8zsWBh5JPUp4UnMc7PmzgqzMwAGBHvo3DFAUtRsEZ2apSzpzph7xAvKcA",
  "key19": "4gFSedLY7YNxnQ2PAqGLoy5ZhFVA9dxs8SQ24QJfHuHCexcqz8nNEZCCP13ugq5tKNsqjS4uDTcsUys8q4bG6uhL",
  "key20": "34eEUJUoH7gxeecBW6YLucyZ11VQSD53B2hSFoTPuRVZuZHg72BLcLTZjNF2oNX5zeL3EThFvVvTf2Fzx1Zyznhj",
  "key21": "5uait3ebpWsqEsmYagstezYfjE9m6Wf6vrc4e9WvFXBmLw1C1NWbGKwFiSfG1ndVQVamjQuoEA5Gyadveoq8Pu9Q",
  "key22": "3CKiZvooPac9KDep6zJDt7S664qou6creQGdJyd41ZZJjbvZsktADdR5tWahh3Kt9TsvMvaJ84eFJyfkNt9aoGHf",
  "key23": "TzjKWMatY6DNj7vhTSkRBLBxt1WGWuVWZF1d8MFN7vNMqTRbu8hQxZb85DYqHaKcuK6qnnRmgEGBTByUfE4dqau",
  "key24": "3r4Jm8E7zf3vF9fFMtKnB1gXxJKPRr8Qx9KPGHSaX5SyaLCej2rDauNNgRHXQQ3acpNNL4BzTzGHykUE33c5P2pK",
  "key25": "BrNywxYi1wECG3rV3n2VktpoxhgdxTfi1gcrrK7t3pJAQm7pJ85s8uSbZ8Fk2dZAAi1RUqJzSPmBWFiavfxhn7z",
  "key26": "2LkqTb5dAhJqW6eoW7rTn1t8F2PFZ1B7jmCFSAbR6ns75XQdU5LVcBo16bCCvqFCRb8FZ4nnHihE1AeLGANa5cmc",
  "key27": "wCVEBJJ8shLBQ2b3a7eBCSM5B3BdKyaRimMmxcNvyKmXqphiEbuPsc6f1Hm9bxLukSVZDiQo4o21UVdLbnEZTcW",
  "key28": "5MpgsrwezNPdYkBmN4sRpEKG4T5hUHszEFXUTADwuNTjjcJRpJMP9hEsC8hfQVNMErtAicX7qHovTFKxJo9T9k7T",
  "key29": "4brgyKv1AzefyPC4FDJkaFPKSV7r5pudbgwkpbgYiT2qPHRT4fhkRSMfKvgfqUmNfudRMimK1a5yfbZjKQTxxqYv",
  "key30": "5MuHZbKzhVm8xseUk6nS5v8tymejG6gHK51kwmnUa5rKQX3jWU2KQBhCR2RP8Bpj7fYfm3PQS5vuwZq4i8avDQyq",
  "key31": "2tAG48v6CWBgUqWJknZvL3kBzeJPSjw1EMdFLG8r8MvKAoEHk3zfLSJrgxPvxw96qZ67dk48yMWKztZkhsPrgpSA",
  "key32": "5YnHy9ZcguShcyDv7tL3Xk4LQf3j44yKQCziJrcFmZBDUccfGFMgFyUEYhEZ63SSukGQN23jvzs4sUBfUceHXPTG",
  "key33": "4iPK4QqcmsUkFzKMYwmpvZjeeWAtbZ8dypc1bJ1fxYX4CueGKNahfak2TsxJoR8kU5A4nHJ1x6HTbiRSPopHWpFz",
  "key34": "nXgdkFc2hGEg5Sjw9zWpokVqrHEJuzmig5hTXWJ5FHzWRBNx2EgtaeuZN2mReAw5msxnMeRYEpEWTLtX7vyiA55"
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
