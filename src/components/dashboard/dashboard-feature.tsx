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
    "5vc9dA6P643PYFNEaaZ1MQj7NB9siMW61xTjCJTQ6AJpYHXDsgvn5FG87gDf7fHihjsfb8ykjKHvGAfPU7Aa4Vea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26pMYeMUjX2u2QqrQpv7bY9xdjJYHbM3e9nSGyVs8gX5TXG9xu67gFUNKs2FSY93Zxv7CnyrxaadSYkbgL6VtSvQ",
  "key1": "297NwFEJnvLqVbq6HAxqRvLC7bQbWVahm94fqpr1jTNQyKnvtNFykKW6EvgwR1vs6TJtJ2ysHBocueJ6xNdQw9EM",
  "key2": "3sRmzW597xy2zztGRNdWJWTUgmndrx92hZcckeC4BCEbQRQH3KrothY27SPXMfvALERsJFqDwLbmSFtXAhotVr9",
  "key3": "4RZNd4kFQD12fokkGpKtD7pT3vCpymYBjWJuW267xXHBMyHJ73ca2EAGRF47jitoGrS6X5gUQcb1bsQWR8bCizXV",
  "key4": "GdmxdR7KUaypbnhXDbJyuQQmQjorjVdHN9o7SF3WoC5mamcjJ9gZCpjsM9hziTLb6oULogZ3HX6pQXKn7QTJxaB",
  "key5": "pe9iA7CgLJuUBZFyf81ZfQe49xt39Hziw2zgcgfnNfPJQXdoU3f63Q1T5Tuj1NGgkesivibXvstkuJTQ7tv8GGF",
  "key6": "3D2qz88jMQCjaGLYT6XJwJVq5UYb5HgojeqLAwpCTxZCCsRxyTbDyU77i2L9n4rB9QiEmkKdPfnY32gFoswsHZEc",
  "key7": "52AfA2M7FNRCSbqVVVXUWy9nE1YwC9GYS2RDeUsE4vXGCwCcV3D4WK5Lunwof7yZudvtzG234Bkw5BgZe4oJgjSZ",
  "key8": "4YTeVdgD6erGMBvc5EkniWrkqa63A4CqphFFAyGG6ah8UPn4ZZ1tq6JfLpkjLYP53i1wkECWM4YEWMwAnECY7uT",
  "key9": "41k2W4s35B3yddQctWEXsuGeNER6Xgwp6BH2o1EDrMk1THCtzGh2qBiehPqyXRrpBjQ3wo32cG6F2TAGELVFJ3mu",
  "key10": "2ZY5SMzV2dYaEXdftCFDguurwY38bvAkDws52ithfirBuin14HMGsDjtJzpFc8shJfFDjokYHGqSTRJQDjQUatfn",
  "key11": "45WYAJqT7NbuKf9HWc1TJqro4xhpmZnUGWfLBj96APS6hUZgGDghEpJ6ug2biVZACiUBop1u8AU9GphdPDqmHtSy",
  "key12": "4E92G5b5jUg3bN5nr9gZTdt9bgdq5vtbfGYhYeXAmxD86LpVrdca13PBiQNVV3tudmeFX4o9rW3wbbmoDrmqviNL",
  "key13": "4wVXW9pGfnzqnDVEJNHXEC4AviTD9M1jJQGU9EFPLbMJhKwvKNxQpueDBUCWtcZdXDkGj6753M3nwTgNg2z8ZWMi",
  "key14": "2v6LyhokicTtXFD3r8x8nAqAzk6hS85n7QYqV37tLCoySvAuPDrzAEYHzNJbzpPBeShxyi33zh4AQp7PdT12MPmP",
  "key15": "4h9izitRNjtupP3jSSAKWU3rN67mNxrKQoTB1aS6MoFbbLPU1bnsXxg8gBbFhDDND5HF8zwXjX3jgPRx4XG7WsqV",
  "key16": "5WyYojoYASfED3VEuGjxoRQUwntTZFqpVjutAtECXswJQTb8YkiqFXb9dBfQUDVLJA17PXwoQV5KdPve7cj986oW",
  "key17": "3nUi9wYWXdcnHkpeeiH3xEDC6wseRYEN8LtMp3sm9P7o35vh2KzThg1JdMdbfAgGgXLDsEv6Vifg2iaFFpXEEkaM",
  "key18": "4zL7aXsncZ3Cc6QunW7A7PwJqnjLqkz48q7HCvFKGsqXGxxEqhAVmuD9RffW8eo33KRC2FPKjBLUcQJJ5cdb4q65",
  "key19": "3cDnLwx5n6Y75Q4Zx8bWabZtcQFnWGeCPkZUkbMkruvLsqyYSd6xci6iNtJczed7nD9pkHz4TT2dwhUjGYHd9xd",
  "key20": "5MwZYHkhmwKxBx2imPHVaqVGtsTdVQ8u33hML9SurMgGLQz65UvPWQgKMtDbATmygk2uMn3HwFqj6JLkLMBGJML",
  "key21": "5ykRjSCjwZhHn8LDw4ZTZpcxGixf7Sf5kMg3Twm1RLFBZH3r1vQBaMGx58PP4dxsjZYqmJSuUGQocjeJEoVN4x4q",
  "key22": "2wU3bCvQZALg3HUjUafSHUdKGcAaXhDrEhyjGEsAPmMwoJ1NCoX7t8ofMKqqN28LmUhssu9fBKNwhqkcCCHqspWd",
  "key23": "5SbnGjWjcCvoEVV5DQmtnJ1pu7aWYsmzk5ZPmo9xNLk6ev8qkXuzJHXhaV3jvHX5rHm3i6SWKGpp9Vcw3EN3zq2X",
  "key24": "Zt9dTXSmyPArHyFJ2VNrS7chhmptumN1uQAu2TVub4UExZZtiFu7LgG7t4LEmBixJA4jwYqsrpbrHQM1UHAngc9",
  "key25": "3y4Z3MhcAcHQbTWvFZ2DmpKEDB57BHpfXS6xgsinwh7aihHwtae2in3LSYLJMJ3divtkaSVVtoGHW8cZCm9GW3ZL",
  "key26": "446A1NbGmFmMZ1TE7GQcjijWX6CeqgfuqCYsy6t1wRehQ9r4tZQq9n6oYmN8VbixyA1nvbVgd6CPy2WkcKvLM9yj",
  "key27": "3a2QRPtzTsEuULEUMhx8NHYksqWUyJXpQgbhDbWSVwjqZxT5tARLRWwz2qHLLRfPYkpQLMvwutgX9PGBM2mRDfhY",
  "key28": "2rEkj8sSkSnc8rGRb6CLx26TGAxxbF7T1PW6UEQPYrqeWgfSEshGLsrDFQvuppUxrkCncUtYDRfnVrC7jwiFpRfU"
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
