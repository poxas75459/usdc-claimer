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
    "5GZ9iiwtV5Trj2C5UhvwvKt4uS8A9oWxe21Zm19d2VGJqj6nrd2D7jxgkuT8knhqPdpq7RHZK3u5XDhBwwEBqQGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jegsChjACu8VFvp9nJAwBHjgpzikknKowtzyq6xLVfqC4Mw8x53aHiT6x8HwSvbvHdWbQYCcPWjUFihr8XeuyQ5",
  "key1": "3Ntsy5yP9MkwFEUSfWWx5HnZwGKAj5JUxkhS6ASjQ9tJp7r7ga2bqjc9c2LiVuz8q97BT7rWHRLM1ZVQ399JQC7z",
  "key2": "4FRhhq8QtyQGt5X9jVubg4Kk64WnkDMuk67SSWn5RmaFuNpsjbGziL1cKqgMEg6h4MwmeF4XdZjvDF1CaiKrVZ4L",
  "key3": "5NqNEDuP5vmfEBnDuCQcafbCEABsRTe822KgErmRJnr5zWBw4L4SW4bvGGCVBAwE8a5T8bu6tokQYES5Hw1myBJg",
  "key4": "5dHgTupkXsoCZC7hJpGDky7Z8d6FiNixf1xQM4tpqQMqssosqWPHiVvRb1v8teYNQeo8NeGtSKcxXaksyNtjuQBh",
  "key5": "4NFprbGVr7x5krBQN26aeUJVhjQA1YTHZzjHn81J4Cg1kZ8gGaCukakHvbD7sJzm2Gbgu4Q3SQt68AmZH5WU5tmb",
  "key6": "4nHU9zoEmMXzFMeXsHKMmT86oqkrb8JuguviayJG3bgS58Zr2AWeURnk1W7CqupLnsGwZ8WNorkeYRKZmSjwLGZp",
  "key7": "mHV2jvV6hbtDdNN3xtGPLST6A5e7ftXzwpczN85ikEUXrCgRUnxCA4PErBBCwePZG8vnSFuL7tw7GEHXr33quci",
  "key8": "4KowbHJKZkQCo27DPqu5FPZSb6AacpN2oftN8y8k3YimoscRg78ZgzYA5CXQecstJbNiYvn8JTmiJoM4scBUJWqe",
  "key9": "3sjgNdNgxkbE2NUqZ3BBP53oYYbUaes8wiasJnSKpMBBtYhYszVCFs5JTej5Rrcs39LrUBSeqSfT34tihA12ckKq",
  "key10": "5widXwYmpxjZ3aged7yYWjB7yhovrmAVgPKVTW5WbWBaYsv1sLxNZFkohRfJmx82N2wK2EmrijM2GKsgGU4ZuA9n",
  "key11": "4aaTcUk95f2HvhTnN4kHhoQoY2appDrUHKj2AZJ89EVTTKPPns69sojJ6zfUzNYsKTH2X7dH3zEsxcgYYyjBTeAc",
  "key12": "3jy6goUHMnSSMjjHLu1CtGb5yWmJdGs3ukpyuRD75Wh5fkFG7wYSgWHZ8DMh2AwZRSTNA3r2S8GxzramQpq22rc6",
  "key13": "2ry1aDuNK27VwmRcj6JSZtGp5EDMkqgveh9K1qcjwj3YcJ11vVxkNn1WYtH8vBfDqAcvjuosSovf6BZZDhHibdzX",
  "key14": "61JJh43APucUpbYXTVRyFY2seHSLyomzXzk5kL5RRjJo7JdP6phmvLz2BntyRBruPVY4gwwcPY3zWZrcFh9EqVhT",
  "key15": "3Po6U8xXdHRvGwTSyo4KjZ6hxKVthTR9MsHKQyAYQ7S2L9D4t823LKSGQvEqv8iEJYqYysXsQcC5crjNUQ5ed1Hz",
  "key16": "247HWHdYFnRabraFJqEEQ9rWcVYRyZuNr4bKh51Tqy7PWDrGJ3B56j88uK5cRZvJ1NC72GgZAqKXtz4xxPh8jUW6",
  "key17": "3CYDpKmMvJopuyDPiSizd97odYa7vLDiWpCUYkJpYQU62rsJYH4j66pAwTv1JGw3nWDLftneNVcMtScKjpK7X8MC",
  "key18": "4wbU2NyebNG3CHz2HjTGk2qEp2TrHGyLQbPiJnDXKcmxJ36ukCcFTmU6TKosWtdBmFSqo2RgNmZ2VDGfGW1p7sb5",
  "key19": "KKocVBXKmiurq46zSf6RgCfiET9BZXD7KbYq6mvu9oA9Y2Fq7ocbziDYZHAXfwPBRv7TTMKjpqjNKJf6BbTNejv",
  "key20": "yPsyGu4Lqu7XaiVviQVgYTXauX6FVvoc8mu9y4RGrg76GQtPa9fx3mxpyi5DfE4G6fVxaCnH7qXTtzGotbSkUYB",
  "key21": "3jEk6myJBfavSsvSu8UKSeLKx9YzEhuLxxXPeExn59AR83EhheXA1gxSn8JrzpbRp3h9tDbCZ3goMvhx7cxT8961",
  "key22": "2ReM5nFdVtMNxFirs6Dnak5np6jaoKEJ5NccoGxBqGHC48q3GYXFuqnLaka6HM3W3MejvhGSdsdhkFgxdo5MGwn9",
  "key23": "2CaB1hGbQL67Ft6zDDkRFc9eneqWg1VSjZjyFR81irveaaYpx4v3aLZLLDo9q8ekb5dbBELVWbfTAA9m3zXnshfA",
  "key24": "AJyanc5enHBKzR197RyDwwa5yZ8DFS3PdHxmK3HDgbEEgVpEFMT7tQpkHMRoRdbgp8gyQJPdzjmE99FFpdXDnZt",
  "key25": "4Me4f1xAcbUhddYBzVrgwJ6ugAMGLHkvjnMQiNJvZvkFbqq5uosSP1yk7hZrnUVytu18jWMPpKL3pcAebNXNzVZj",
  "key26": "5C39K92RMAbiAvpjg6RGnZBd37k9kF9ehB1gbSHrefkxAJaccFZcG1n7JnCiVeW9FRYczKQoFnxvxRiuXvfdqXtw",
  "key27": "4QWWCDZAHsc7NBCHMcSiBnAaBvLJX6yUR2nEg5xr9NPMYfTEkHGUwyie9L8RAcEYzkLtKN4rjdnVjU1R1S4EvxKi",
  "key28": "2iCyg48Nct4CBQMhNkQkk2kJ6CvUrAJudLBhSckzeGWiqKMiDJzEai92hbsKnuwS2VYS8HZK9pFyLW3C3AKTJeK3"
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
