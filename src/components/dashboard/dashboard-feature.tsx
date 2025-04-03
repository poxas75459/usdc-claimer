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
    "Hqb8Tc8RKjyB8TSYTT61ZGmHeqrb3EUiSxATGAPHRQwW2QvNnfSx6P2o3bDCdeecGHpqHDWV2Bf7vd79Uu2xPjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YUgphAfazTy3ihaUREcdhvcrSZm9WScNnoduZ7mz5S5HCRK25ZcELEFbwoG4mo7T4NVCiTFk3H6mpwGvvqf2HUW",
  "key1": "3JHr9cJGr9mgZFXoCK8MHyyhyRF3NXVWb7RU4GxtcDdJqoLNGCL5VghdiHmaj43cSZqzirGhahxC62bvB8xxUYNo",
  "key2": "2tEZNZnW2zB6x7DofcycuAENUhbq2ea9KLRHQjxQiRAZ8zxqfQQpRMgjomP4zpmiKyLBN1CtvPwDywVpuX1gsdoQ",
  "key3": "3NJoE6G9qK8kUURWunDLdW7vazTc8nWKkQaZQkx6v12y9FLp4LtnkVpqdRFBZHmpkwXL8u6k5MX4GXF8r9GrTgJ9",
  "key4": "3jGBGH1HP495guBvUenEmmPaQQxKUZYR78qBVUVtcy99no2Dwg6kd9UfYX2psyWpeTCND5nqKfm5maDatEWuCDba",
  "key5": "B3aZHtxW7U3x3w37PnU7ttWBSXp13KFCt4Pvmy1opqZWsorZGfWJH4aYtX46zdeGvZcki8KhXGna3NiddrP3Cts",
  "key6": "2srstj1rwNBwEmtst51dQu7HYMEAAuoFGynZFpZjsWZvpJa4n6pMvbgx8GFTmaRSE63adaA9Evh5Jxnps1D36m2y",
  "key7": "4oKbdsAsb7pztR6TEuhkrsqwT1YWNkPWr1e3BkCHKKGwYEpqJbsMokgkhL8sCWANxKqoFzaLWKFH9uVUfCZznkG9",
  "key8": "3BZ1Nk2ohMG4B7FPTRWJaGzBQSc5BSXEGXZmzF55CVsTbN8ezqWDrrisvJbVb3gKB2N67Mtr2SyNYNa6qoxnWS4x",
  "key9": "PhANHgX4BDXu7v5ow9iUeiYNTdKogMzakBSQvLStr9cofz4pMQyhtsvZ6ra571AyZTD6Nmmr4euDqGYJwcqGEsn",
  "key10": "2kJ4ydbPzyRQqfYqLhMXwEySfC2BsotL8DQppx6XqTDKT1bybJFeRqWdr1CzSkPJqJPziHRisH6ED7aoFSkN12nL",
  "key11": "2vHWxyjBvmFP3sTY1rkRK75Kqbw7cBn72h3f9R84tC2UGoiJLvcURPgB89xTf6std7KksQAKE6BDATmLhT8U6VBJ",
  "key12": "45iSgH4qJ3xB6HeWwbX6xEuAYwJMxZA6EaH3n2jmrjx1mjmdmstny3qEe2F3Jy3fc3CGCD31jPr13Rxz7T9CPt6k",
  "key13": "5TvovcpafcN63BfXJMTVRieqaweMdbsZpTiPvvwWp18U66xQ4JWZJqSUUh1ZttGkr3xxsFCn8UeErtJc6q7S5gFy",
  "key14": "54g8sFFFtzsiU768zZNGqk9pXUudJUwHFNyyKjbPdky3ZSNYTBtCMZ2L7MCfuGUGMRVkfFh8gfDoMZ6ctF225utv",
  "key15": "3kT2bTVLZpxAEkxduPduAvTiPMHEkZLPZDAMpLTHQ7Yph6tTRHqJpHBBwinNcwnoFwGuKyPTdYpVRHiPgLigQSYu",
  "key16": "4dd8bYbRwXDZNWnrW3CAuGV5CVi7JqpyWHVZonFT1rEi2RaXbgjnY5dDU312P1Z39xuP2wy2WZeEzmUAjUMvez2R",
  "key17": "3FtZ292sLA2ESvS3GumYP1SA9uTjdGhoNTLtvqpxQketwBxGALty9EvscujMdLXdopnFst4RKVivvJFxhQYHcRtK",
  "key18": "4CCkKurWNn59L8D1nrfdnkqYVmJphrcPn3huchWQEF9VmmHfsqhsMZ2SPLYMi4aFjzrK1bvi2BdipBrj9CepoYyz",
  "key19": "g4RdHYtXYVfc9kiHUjjPCMQ4TxKeY8NDmgg6v6j9WkRs8CKfE9ZTTYBy68HMAr4ivunGsarU6Mw6GxoZAsyNEuP",
  "key20": "5HNS7FKxKXFS5kcaaqgDLRXbsj7mMmWtMBPUFhdsJtiSVvMdbSkSRDRvQ4hpDDWwP1AGdpDnGkqrVjvHXPERzLsA",
  "key21": "4YQWtsSbtKQtpcD24y7XwtbpGwf4EaYS37t1taqgVMXcdDQNzx7iYgUf9rqdP1L5efSzLYWHaQtQNoMVrRD825b1",
  "key22": "3xkPxvkgoNPmvzXrxFP8axBzyxi9BzB7LJUYoLqRPLuHYio5QpgJr6hRmiVXrtfy8zpdut7qExwvw4yoRRCCUvtu",
  "key23": "4rcuhQpKPP57U4ZVppUsx788gPAMJrfHUobtQXXZzZTYjnpNKzNGozaGZRKcKaBrWgdZoEEdQkq6C9vyTtADyJHW",
  "key24": "2JKW4VPBazFrwwthm5NNWHmRJtzGsfS9ymiC6vCiteUGke4ctxEqWENUZnqpbrKtJs3ndCW1pfLm63hhcWJiMQKS",
  "key25": "R1v8J39H6r3bMxKdsVp9xkjCEfdbU2yYtFi8883PRkf8U5XozZoxNjyJV5jUvx1j7pV2e1Wb3s66vmuSk4wv5CR",
  "key26": "25UwiHr73yUoqW3W51C8AfAnbQSVS9RSXATrFbtgZ8Rb8TAdPPav7G1zZqoEdsw1kYWrRLrnyDWFhrcVwHp99Upq",
  "key27": "3nAe8LPeGMC1wkiuCByLGCv52AvM51VfrudRVuSqndVZXk8ZBbCDYucSPGRPPmoAWKarSkguSSZH2m6VqXJ3fKez",
  "key28": "essBCg8Y1pMzuspHPFtrCyJTKCaJY44PKNvNhQCxpgcRLYQebKTQmNy5QP6rb9HGe83VrWivuT8czW4x61BDbXu",
  "key29": "5aekb3GP3QExL29B9kgvv9iHj2bnEQZLGRGVDBZpfnv8XKhSgxQBqop9wLLTx3LZaTuAZq4pJqzJyo5Cz9dn4vXB",
  "key30": "4UvkD3bDeDgLr8usgksAeoRAKB4ytT8QhZ65bC8mkTaZY4GNwkndyaMqHtMxV4ipmdbjUPQ31ZooAZMtQHT6xzUZ",
  "key31": "27c5rKbgcJc1BuxVT5cPpMsYKz371uuMLQ55XH7PTUbpqrvcee6aaAEPH49cSU6eVN9ZfoKGCKXtWmkdgEBzDCag",
  "key32": "3i8a3sqDKrkAhCK85mPkTySZLM7W1LHqe45tSkg85349Mf6DuGyJZ5zj8umduftix6Kox8AhqgkvHEYk1DzUQDgN"
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
