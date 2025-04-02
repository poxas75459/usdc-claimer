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
    "4xDHdgmd8we1iQutFGshPBxLkTFxqf2A6kASrMiaPuM5uJwuMPRj7LPzatFLGtZbcMmP6tvJvyqgUjPx9A8Pe8dy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29uP9bisfi6rLyJy5rjxkaHHPWckLYUe6jA6jfg2JMZnwTUzcTuFY9xvnEdBh2ZvSuULWDoqVkubtnnFDm9qcAyY",
  "key1": "5Hr9bPTZqp3nWCcXyrXpe1Q4cmnXs6889zpCjVj9zmoj2kgtzLYGvgCtP3gkqoyNYyM2L7k12VVnYb2e2t2hxKrZ",
  "key2": "2mB3T6rKNm37MoWQKB7LdDdrpHkYYh5UHv5F15CaapgiG5pPi2MEPb1rMvTGiqzZFwFa9WMhmRXVXMiUg4od9ZSj",
  "key3": "4ePnyzwRp7KyqqpnaGhg8vfHMWGKcdoYxZxiY2vo9RbBVPJWVGzpN5EAgEja9TuPxJq2Gt6fHx5Fnacusxbc5Gtg",
  "key4": "4scVDAcs9eNQs1BJXPqRKbEwsv7UUG4rstsP3gvmbpKLcBRvjCCxftpHMxHYZgoxk2EFi5kVmocQTaMK2sD3YbHU",
  "key5": "5bMLYyCixYNVwjo1FBigSkiTRkhmzRzFgwHbaGBkUrWDKqLMMVy3oPk2k2BFAQkDjukHYzUmeuvgwQGJi567fBTs",
  "key6": "36wNLMMsXUiS9bjT47ojUKDhvLQ3gAaXSztnNwyRaiPqUHthXr9HN8wtce6wnvWmnhwQUo6xwag1A6DuBzGMwBcm",
  "key7": "265MWicNnqCLYBh1ZbzvnQV92yovVhoP3EXNn6drMamtjrHMhrCv9qZiw33CcX5kQ8kaujKZLUVhr6XPDagVqTuX",
  "key8": "46PGR9BbMMxbDkTnmh7BRPgFbzTTbQnCeEmn2nhb3QK29Quz468Eq5Nhh92Qymanc95aSvYVCzmCP3EmkuCDjr28",
  "key9": "3Wi51iVTxkXrHrjQPh72mGGpZDShNERmvUWGaxpa8gZYRsSaXgXfjNRjy6jgXYRrEkwcwGypPmR4NZB6HgQYfepT",
  "key10": "q9G7BvbUpcho6ZrBMqDKUuqAcm876EPfLkU3vtaXcknsj66yZBKeFfrGJLeNeRbZPvbUnrZ7rZjkbkn2oX4nHFd",
  "key11": "iM1g6csHizNq38LKu3spuJBL83M2jYhkn6mcxisnb3nxi4wwsP6NSBZ5re9EBAtgeuqCqhMproHPgv3KaEoKsFH",
  "key12": "4WiYw9xkYi3GK23LwXF7vPX9o5kDsA2nFfFFeD2vzqZ1rP6DL8f8ueQ9dpMs4vRrLb2XTZ9ztxA96uxXbFDMZbSP",
  "key13": "3vdzEr9Dd4ncBcD5Ux4WLQb1savG6t3qKcTxtTYCa4dCXJe3ScprPuHEo5AJYjMKyKXPT5C2D5MogKMHnnBrgYZv",
  "key14": "4iUPtXUWntb7EozaXXJpCepVj61qZjf5YsnfjqrJv9qbkctL6GJbAiXcmDcPAVrhGtymxxkUYHtgvLU7ccS47A7a",
  "key15": "4KKBbpzjhNSdok9t5REzPUZwEctq1Lt3nJ1JZSWywPuAe3c3rjFSyGYmg8mRQhnSJG9XBqTxhScVARzfPo2zjBc",
  "key16": "3n7GSH72mK8SECy3WWnFEW6zRA3Xab9CZxuwB7kM3jywGtRh2CzmdVjWbignaY8M26HBacTCKekPfdszzX16gSJg",
  "key17": "3hBkQUj9LPFsXJGUJnokbHfsSojfz53LG96XGwoAAkLbBgeJZetb3fY5KuWFTWPgsrChLQBnsuvc7P2JkhgHh5Sb",
  "key18": "5xEkGaDbrZcvihkV7dCjhckHXtgqGZkZLwW74mUcZxzqWAyCE7HVzWFfzpDMfgqWUvNBNRzRbVEcnyWScYrjAKR3",
  "key19": "4sU2uo6MoyvVHeZzzEgFAWXdiYb3Q8ZQk7fUZCzZUQbTRt5BTb4R1EWDdU5n2RjamV29rJQCAmMRwm6yWnZkEtsF",
  "key20": "3G8vMNYumMyBTnqw2kKFvqcKKyotV1P5FVoagQiNernJdQQ6Vmq4ZvtG8Agm1qPDtgR1383xGwR7DaGaaebhSmpb",
  "key21": "5YEwNYwQ6CMKyNqnA6JBE7FXnhsWeSmfgDycVuJYyxY15LHDpcoRS7u12zchycRWDQ6mkFc2nvPYnRGZbDDjfdWs",
  "key22": "3RraGMM4xYnL6UhFeNZVi7PhcnKt9ARYsJcukKCgppMw5VyQgBwKLaZQP8x2bHDJuoVmq7ZaUsvkJBQQ4jETRzLn",
  "key23": "25N3a6uQSR6C5RddPXXoQ1fA3fyzEHKcTY8S2AqkyFkLEZwoBaLqKyYcJJQbBGPtMH95q3CD9XEscMDhF24f3RWb",
  "key24": "3PQdMQz5e63Q1F9zhdvmH7StYfDCzTfb2t1R6JGBiVt87w8NPWfc5QfT1Kk4FKTEG9nJkoE15w6XgGSiBwRM9KEf",
  "key25": "5bes6yEhrHGRW5uFoLkocsFFQToKf4nD4kLFRu7JNkrsJNC2SeZYEX9vupTSuh6QH3UYrCjJ9jkgMD8FaCMaUTb4"
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
