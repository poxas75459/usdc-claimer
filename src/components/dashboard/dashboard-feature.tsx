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
    "RJ1XRmbtgS3kmTYGC5m24nzJEEkJW6uYEUP8nLBk7wyKZ7jsA5pSeU7smpJLhSqFg4C87B2v4ku8kXVhFvEUGKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42GiRTgyPyGUtw6tZ2j2RB3CDWjr3m1CctrCDypyMpKc69aejp9X9T6GsM5JsAPJb2AYEs7sKKq2zkjg7ZedA1xE",
  "key1": "3xGUJ3A3sAsDYbpw3h8BPLZpp3rH8YmfXPuWE4LybgDQ6qJzyEC9wTKTHNrVe2JDg3byRzyY4SddEjye5R8AAGN7",
  "key2": "22gVpmurC3JxHgCcv26uyCi8wReKSKSvyiye7MmawXRrTUry6D278SqxaL1EJMHdqE2zFxE5W3NwdXbsnTXtBAFF",
  "key3": "2UvKvttEyAktbZmHv31T5sZjkYZjhHX8WFYNZ4z6yDiHynTgmwvnUHNiJw1F76UkHSYahfdMrVT3b8fhgGJBp4kG",
  "key4": "4Swpto5QsZuMthPw9CAYPqLdpMwsifBX7xMT7rVHDF2g4HvUWyXSpj7Adk3riPqKQEdWijJAarUiy7vA8MTjtxbL",
  "key5": "2rnLbF9wd86chHvevRgGDnLk9UhoWeCsGDay12qGi2kXh5TTeWrNCSFJnStcJp1dy4jUounjYfm8Jv6SJphfXq4t",
  "key6": "2DAFi6Bnd5W5nFmev3DtACt6G6V1NwMerHYnigTUgMQgwuNSAMUvCFepKno3NZYZvFJ3d9nwkkh3UzeUaYW15aC5",
  "key7": "28h5cAU6ZMGF2jruNuwbZoBtoxLEET6JBY542oE8gKV2LjwtRuNMEw734kChJ7NPJofHCX8Zhghr5Smkfb5dXpGL",
  "key8": "4YjCVmLynX6U4pX4e5eRUz1bKnrtXaD4JVVunL1xrs57LwkSh7zGXLtX3un2w1SZKuJuzbYUE814s9GH6xARGtxV",
  "key9": "aLTjjPBx236Lrb2VBKEAezAzfMiP4tDJrHDRAghgGh2TGRpRxXFGyE9qCG324TtvzwqY9ZHtWPFvz1iTPVJX4HE",
  "key10": "4FBkTH2BvkCqKyaT14Pk3fwcXqrkuRCsQEkus4x3rr8wrKUoUoTVu2hTqWTQRYdURuoqAtTH6t5VWVoxk7uCKrud",
  "key11": "3hyGkKEyiRfVJzR2n5MBzqbfwnQJh6ZrrCuPHnkBcGtW5fnArqzBoUtTF6dXcvWDB1RGCmhLvt3RkmwLGEKGa6GD",
  "key12": "2DfXAeD13WBiaPBn9t2TKZKYMhM1XkH2EzDCTY7Kx8mp7Ed8YG6vvvrYx7qd3Qgazs4fyJ1ZbqwuwSu852D9n6HZ",
  "key13": "3Z7Kfd3QZzHCaZyePyrWqw9jWffkdE41yFCz8Mm9MWBzSp9WP3DGxU3mHgMe7aHCsWxnFMXjZrLkGWmCxkRqNnn2",
  "key14": "61t1TT5SRMP6UZYy8U6YoJaTo4Jzya8BKPSxqb8ZM3PFtFK8CjqYxCC7RGT31TrFVVJNQyxbksiHfgZHYaKCwzgF",
  "key15": "5N1Auydeywrz3H3hCKhgwYmzLn9w9uFDQiZDFVjEGmN2ASyeRNvBFcUZAoRHWE7KGn3SWvdkAPPDqavFt32E8yM4",
  "key16": "5Ey9pqxjTnjUi6733MSrxwSHhPLAxUqgBYXFsL5W17arDWdumeNdHrsDEXtvtUgpRDEFM1nRiT99n3Ze2DbzNxfT",
  "key17": "5KHvupR1VyzkPNSwWZJ6cnZMSgLA2sTooyYortmCTexZPo87xSHuoBLoTLoBmWJaGNmBvnwqUAtzdXP8WKjZJQt9",
  "key18": "35TfdmMC2tRCEbofpz2chUHFBp74EgmVPLvFVePReeYqyRzB2xfju9aQyNp5pD1An9EpJCVgsJY6NP3np1MDJWQA",
  "key19": "2KyhQGzyJrBGfsochwUZp2WPWCDbEQEkUdfdTKJEFdj787Qp6A7DSNEzMnmiJiz3yX7ngD1EKxC3P1xi9XK9meLT",
  "key20": "2oBQQssieCp8aSFSpqy7MQ93sANPeCXk5btH3TDxTpbcVVrSF5DNkpdaBa8Cx897KFJS4uJGpL88U4o84kGXVMfy",
  "key21": "YqQt81863HvZfq4K1R7hLC6cWxt1BrgirasKKEuQuB67Fx14zbEiNAUWWB7hP2eCwsa9d2gfSMco2qjf9Yr7UZw",
  "key22": "4ADUnmwvSTtdc2cz8aNmvocY9iAydF2bH6AmvQph8VA2X9v42VXpqL2NS3YhxtBxxpaeaD9UW6TQABx4ctQk1aGs",
  "key23": "2wmomoxk3hxpaJdnnNWQ7bHZF3DGeAszFoXxtS44DQKmncx6CVNZY2ft72PofXoWU5Dse7zNN7gkZxm9yNHSXHkX",
  "key24": "3brLrvp8DcWcyJtAHBd9GqTsSPY4mwrbY6oxqrY1dBSQixBoz8dBFXp2xmaki2djBBcQWvqdHSw3jcUAdKjfktzd",
  "key25": "5xEiqTBJdbcSfZG4ftSxb9LY8Sv75ZpwVC7cUnbyhJcuhf3eXjAmueMqfytFrR3qdSv6UCE6RHBZg991574R8nA5",
  "key26": "3HArVLu8ZWA7L3J3eVTDStbQDJXysQiX7oKXZisZhw3aa3iz14sVGWjXdt3zWTCnbGU1J3aFZQsJjd2ntW3fVe1k",
  "key27": "3ZU6HQSEQLbUnp6pU3X975jfieN9eJFvZqwRsNYptMBqNz71UqNN21Yxv8rYzYrRRunNuZ9VEUYYzipbQkswGtq7",
  "key28": "4Gdav2Z6JwnqMM9PZg3bEMotauwxLtPUr3CbVb42CeAA3bhwb4MkXv4usqo2owVcBunU4wwmsRQfwPKcBaeTJpDz",
  "key29": "3ojtoKzNjzAcSu61ttZBE21aMuqfC7GS68AnhNT9bvGeJiubcCmkz8ZvvwYd89M6mjjyfAbbrrATt9dd6uXAoHvz",
  "key30": "3E8i8UjhDQToLiJacB9R15jV3adm3h5btPaJC5Pxfwq8uKk1eeNVFxJ5XFUcREYGatuoXELvRAw3qsdq2MBF4tLB",
  "key31": "2FXk6mNdVom6q74HQhX2bqfP11EwEeQo6oqm8SNA1QRBjUbXgtUtaFq1Y6MxtPvCQUB1Zkks5SLNsYnKd51yNsKK",
  "key32": "2X24hWx4o34aFWHbaEsouQcJgHZVf9eKXJFqueD28kLdXPxxw2X1xWsNUdffgavnWLBZUmnQMK49XLBYr3STGMHf"
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
