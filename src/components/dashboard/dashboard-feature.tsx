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
    "3TmccABNKggBEkTsfN2To6ZHHg7Ckr1FgLxVXGdrtQ193qRNGunY5L2JpMWUwnuWQtG7sByZMKQyfVMiLzGN9ChW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DzgzZLz3eDAL7gthUuEuxL6wvi16hp5gag1QS8nAn5CurDT6JVmob3wyLFKEqdnVXFghotRNVQ72LRXS4ykQGjh",
  "key1": "5MLKQESZtoU2t5vv4NFq87HvrdCz6zdWKVwmWjKQB6UKWjqA83LHjcArkmUYZaFczFt4gXGKjYQZHRjn3oVeGgYc",
  "key2": "35he4VWeaSnepW5ztZ6xPfDB7meqwrvMGuLjacLZB6tYFST2fURXEkeQR5XHSqxGpkDZzX85AbxoqZKQhJXAtLLx",
  "key3": "2vZFx5mWQHZyuU2A8QNeTX6SCaMgFpvGstVRBUeLJdZ8uWeqMx1QSt2EDcfY1EaHiahM9hEhprYzAQGpkypHVLzT",
  "key4": "MkXUQir8tqKdEqujTY8ZYmZHJKR9djGLYtxK4yaNEi7LTSd5A9mGqSANYkH2WK3Lbpsc8WPW4ZCARQPRzm4GAmF",
  "key5": "2Zx5apjFwh9u9xxUP69UHMAhbWBbz5eogSEk8VF4ERmmWusEnxKPCWZyRT3j6TZiwgjmZtiLzUJH2cJVFzHojTCg",
  "key6": "WHZDQ2hZwRtsCmMp98frjGWU1isCVsQ1KjCfjhzgFTdUTet1dqDNBLEbFn7QUkCMV5ACGde7g7d7zRBdQxqyZMT",
  "key7": "4RsToE8kZ9ENS9zWLaWHUZfAKjRYzRr9RVp9kwX155DcR9ZrsZ5Xcy2WXzt7jbQ5mDT7cx84pvw5AsVwn3rX8k7F",
  "key8": "rqk1BbjxFhHk9U9FFBLpq4oVubDXoHhhpBvVX35s3j6V1Bw3S4vZP7FdiBHYDtW7uWuBXvs7wkkWYiDfwUoYGeo",
  "key9": "2uiaJrUTH71CG5n3yR87YitNuRXHnVCXT2zSxC3T6vEE2dB9TwGufrTuoSq5o8j1ATS2HopRtMjHXvfjNx7jx9GA",
  "key10": "3ZAXc9mtWHLfvU8CFHqcyCqaqMgaWWK31Mt9UPzsWbYx487tXHJ1bRdk4Jdkg9DutSk6og2gDSshXKsZwCmDiFaN",
  "key11": "4copJMLDQYUYpcYA9bvgSYpkn7upECrTZs6pRhxQQvg7ZQGxNPsxE8xKUWVU6s31HyWCC1yMuwWjU1PmTzJcUazu",
  "key12": "22dJFKJkPKeARCimRuqfWheWg9ZMXEAEjvGsnogH85KFw5jwVohhJ6zxSKCZXPHpXHohi187fwn7ZCjNKLQaPdaa",
  "key13": "51rxvGn2VJVPmtsiQXxYqkPTSr9wnnLX7MPiG6ZFok8fZGoutuKs54EVyh6CLHRZ5712ShPmbU6SUGE2ZSQRzEsj",
  "key14": "3p1AXFMmsM61TbNxUwpyzQk9CKTZbKWkdF4VkgRnxgUJBQMvwEMp4UqkAReE2GwBi4tbBzNkvjvpARDDtXWKy3Jd",
  "key15": "639NfNwze6DGiDddEX1it3FA2ohK6Pim7ZR9u6kfUv2G4tAPBtyVEt2UYbc7Fmyp18aoVgKbTkpJNmMWc2NDPCVS",
  "key16": "62ns8fWF9SfJt5MyS9VXdp5XzZLhnXY9rri8nNZuByGQdXGWJ8ierd8oiJduj2jBxzS5BFE4nDgCxi9q45ZGmZc3",
  "key17": "exXnpT5FnJFc84CYkXE3DpXtwW1HPBrT6BCujHLM7QjDvnVd8bGeJHT7tZVgzToUkfLp7qnz86TMq3oy8xkofJi",
  "key18": "8hD8ZdeUk9zYzsd5xR6cJLCCd8DMj94BnGvxW4w3EVaJJkz72TuSe1Axuop8AiPAakk1z97nA5WW6on4v4SttSo",
  "key19": "du5S3UQuDNuXaBogToe1SfeRHy5udehYSUTtFQzD2sU3WTNudJynkbSvQxSVkW9KT7JLVg8wUE2QEmU91wxgReZ",
  "key20": "3eWQ3E5ni6XYwwRkmTAFVbkzPtTRL8oHrzukXNkTR7iMRU6rTitXn9gvZ8BV7yxaCvd28v1DYA8MjZjfs4s19ZZD",
  "key21": "55TS3A9fjpxG7hDMYFpA2kpa5t3i43KAzqmkHDtrTmL3jYdXaw829Lh44YptaVFJL7C7RXFH6ZFRW6p591BGnv6L",
  "key22": "xCU7NLztMF3fs92ePKjjT7SJ7SRWsvfSrZSobrJ7vos1xC96qz8VWVuenKpLLviecn7MD84756vC2TEZGDT6cwY",
  "key23": "3HpyYKpfTsM4zTkzkhszBRjmdcCEKG6C8xMbZjrWkeWMZUYG7eE7K9GjtjkVs6RZARVEYvnf4goS2uFSZCK6gB2X",
  "key24": "4wZDvWiwvqaLX4N3ba5NUDmZVXnKfmRsh3bZ68i38W1xzzDBoDD8b9d4pz7rHdH2ij9H865vyMUynB39UpP3abcc",
  "key25": "59eXmPr3SXRQkGpFPTq1YG9WFJzSjdc73C4qxqkEwSuwQmbd2jsvVaYjsAp3KieSoU9eD4nTLtk9fQ7d1Q7Dk5Mp",
  "key26": "64ff9WnxeXAD5CoSitZNiEBaHaPrEs75GxgEf4HY6wxomKSG8YrtkWPujQ6ZbUvDC3ETMihBtsjavFXaDhq22tCA",
  "key27": "3GB1oBiUQjHuJKNaY1QcKrmBQ1uMz6ZycZwU8zEi5cbuCcTPgWMTUy4NJuuY4QcF6pJWKP8RsH7t1uhUChTVt6PV",
  "key28": "2uv5xtBVDNwrcKsoPqBuByyxw5Mi63KRYYKiW56kA645taVC4DPHs1q8CZ2GL9oJDcnQGrQXuaowJkhENfEp8Dj2"
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
