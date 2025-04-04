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
    "53X5gc1v7noiaPHVAz3twDQ9kYYEaNZAxewZqQJWAHR4rSYvMrqBdLa22AYNngmLz2Tn1CvLbow75iGQZ1SqBmrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Srx1Q1AFaRQ5vfiaJxCDEQEP1cYyd5e7BSzD6NoU4R4UqnvZAL4pTpNeo6oUWCj9KjWoHRT4RsZZr45BRHrWat3",
  "key1": "3XFEo7gypYwQKdADMWdZuAg9fUgjizKikjdTtCPA6qmMGkvJFsEjrd6DV9buVWYzZ61rytAP3zMHLVwFqQiCHkpb",
  "key2": "2rKKmBaUWY5TtGTegrSyPedbC1yVwuaZGEGRLUQPtLHtwUopADjBaUFx6z8NSPUjhXD8AecAygThXomNTw6y77ri",
  "key3": "3yvzF3RxApkFEbK9bE1vfjW1PQxf5cxBAAuz8UyjEXZ3P1GuzYQocj3HZhPMKAzQiUqwGJQ5djCGESXfpMJngRv9",
  "key4": "4fqoeYTtfBxU9XbLFkAqE3EPGa3qZR2hAbySjFBWNvaJ1Mj8izueerTnBDWN6CQReyM9WtedqPNtWNffv8KXJ4Gq",
  "key5": "RhiZ2LfX4CAZjabVEiowWBBJdjWSGV6bMEGBj6Zmg9iPxxNbmPBDQekeidFFhxnKix2oKrEMWJTXGnaWykzyY1K",
  "key6": "5TJWcLCEPoXYwkMSTGXzZerHmspa6gvtJ1Av3fcRMYjXPeKbQdKCkXWG7HiohoCFgiUXHLn9FHRJzuQmYaA8iLS9",
  "key7": "44PLDN9Ue9jMSgmVXayq2dwtvVTotUV9VWbbqz5eq4mD4nwbj9JV7qa9wfZKwwPii2yZY1ZkGWkk9b9f1J9jQ2qh",
  "key8": "3x28w5iAcsWAh62vqvQWBXkELaGeVXAhYnymYCsPNm1szZRQfvKK7JSgVszH9YnGfWnApvAGz4pHoQ5UgfQtWPQr",
  "key9": "3PGJzys5ZPEnzL2vExcsYijBqQmA7mYtH7SSCyChjY2WyaZybtvuQTBYN5jsY4x3oHBQCHMJesTyGNGboMuffv8E",
  "key10": "4eqRgpb6rxjLeMmh8Apwd37GRTcP2BPMFAQQjwvBUMWTr9rC6kLTDEE9aB9Xc5jGZsowX7EzfgZyMQSYza45PLXG",
  "key11": "47iepTMVLiYjBP62iwEB2gamfks9b4NdSxvzkgLx4FAFad5kpZnQvSN8g7F8oYctQztuNNf3G7mMbiSHKdXk5ac9",
  "key12": "4aukdyTU5YWspXGCUBRPTEtKQ4GfydvoUzeCRRAjQLjXRbYxiDB6MTFFt8XkkSNhJG7hRXPGNJVK9KjJpmAUtJas",
  "key13": "4ethJC9wiMq9WfJJqWNLKMzqHRX6fNMhPittcoWaxdTxrRsopHSU5Z2MbdznBaX3uMdKERAfTt2aMNhyLaXtqyLa",
  "key14": "4ZfywFJ2qxt68eeoBPUt5SAxD3FLoz3qVdCZeivHtGbnH7m6r3HQ6MF2ZzfU64pzTQFjWkCCjjmw9mafjj5jwXLM",
  "key15": "427SAHuibkX4NvHz3Y5NvZDpZ3NDKWANSwmufBg8y53iX34qVEfu1a3bvYfu4w8Bvb6QdHf7dFDVSauMuSVQ5yTr",
  "key16": "4snu8qb2oKeYQ6CHTZFt92fv3i3N6qizEeQQBPY88WrUSXx3Bvi1GJDgH7WhEHSyy9vu2UTLU5DGj9BpGnhR36YG",
  "key17": "4DLSLmUbfhrYCEf6JbvmgbNYs3bZ2QgDq541AaWjBUoEBmjYBVGw4Tvh34vn15jHzUKfufuzyCEazVnL9dNvtKxc",
  "key18": "4r81vcr566kjiBEsW5tMR6SL3ydDC8JDHHYfcrCxeesEP7dEPxrmthFqh4op3HKZoZZ9fMzF6KqZjGqADpjttE9d",
  "key19": "3Pc7tv5imuonASHcXfvmEvGxcThp1e9SMtTcxNsWyq5Xw4VkSeu8znm2sPcon4SpqoHkNHMCzMiwc1oSx8hwDiwB",
  "key20": "5McCNdrmwgBWBFFujm5xuHjzbpwr4iWUdeFJkiArAhV9P1QzTPedpcKEisyGjVgz5iuP62ECPTeYGU8qBaNWVjhS",
  "key21": "53YH9A8PN4XYYpnAytdDt378r3SkVFRemqFxum3FGPMNKfZyi4UGoPuCQ8q2iXKouW9G4gCzeeYdyddwv7et2xtz",
  "key22": "51psBhk5aS4vK8h1vVeM7ZME2JSbB8aFRH5uevZ98CSGUQ84iHkfT3ETNt9U5nJQv4ZTCZC3BSU3pNkt2p4WCNnW",
  "key23": "4BW9usXhgWK7jg3FFXrjvfx5trCccq4AMrf97UkHQE7UYT5tiP1SmqcEfzvtpmWLhySkiae9faNqiZJxrY7Z8BYe",
  "key24": "BdorSE9GVj3WZc2dm6VoWQofdLjKoV7p5M4TwnBn9oX75UzyBpUe2BLjnJc5o12XXSc1dBFbE4MtJDe8WLygZLk",
  "key25": "5X5tManaucScx7ubvKnLp4k1sHroKsjbtoX6avh6qvbZpW9Yjn5r3VkpoA9K1vWGMkHuBhEyZPnoiDDSYgB8YzPS",
  "key26": "3H6bCs2dcTzsKPoxWHyq5v5P2LEybib3XAr4kufjRqhxi4FqgPas7pGhhWs2SLD7V8RCJVYopLKodHschf65RZcf",
  "key27": "5digfWE97bBSNP9vrzswbLx7RUCnxztQN9bv2EyE9Tm4sa74LMPjcGasnXTeKzbjh31CccX8BKQnzQDo4gfBBoW2",
  "key28": "3q1Mi8YxWyyNY8q1REvTEc7CbjVGtY7sC1Px7LtnLibi7DzKDjV5G9ue1m4B4GWeZk5Jj7cPusEVqQksVRouqL7T",
  "key29": "v4QAGwKKBgmebeVcR26ZzaZgcExkcEsbkQ8Bbqs34Hme7pj1RXLsAQTHZeVkLn9uUSijsDLgYpLiQWbYboswTRF",
  "key30": "37jDLrXew1yQmXRTbwDJKUiBZCLtWWtgAyfJ55dRiW5mgyxCiwbLeYaeMtBNJBBaM5U6JV7UdyguZebb8WBZ9cG9",
  "key31": "41NSwSxopEnAj3C24D9tTmLKwvyFNPZ2hPXQvs3wbmMPgk8nP8j3zh1rgpJ5EKfEWfW61Vrnwc5M2hiAHsXLCALC",
  "key32": "2DYtLxLmv4369fA5Tmmj8mzPahP82mq7TG2Uzo88VryCwmGi5QJW13SiRbiWvtnoevAiuLZ3gqXNg9U8RZmTF9x9",
  "key33": "3pos7NcLE5Y7qHyKoLDyfh4dKQXReuUUHBmrPzca9JoJ99K6rTWBjgidVgkRZCcCvCJ5FeBnhp2ndqNorg2VbpWL",
  "key34": "4tzAUGGfkWRjSiWVGg9ZrbnaacJnDpqfX3tfx14ReceuQKuhzpbSTY6RuN8kcfabh38LS33Lq3WCK2ZgzpKCJ6v2",
  "key35": "5NAQGQjHrGH5cwLaohMCsEPb31gpWctcteMspT9ENXk8dGqnntj88TGKGB2Ec9dqZeuWG5fS9kXDzZmfsjzMJRnA"
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
