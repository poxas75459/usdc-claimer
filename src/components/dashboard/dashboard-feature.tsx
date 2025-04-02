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
    "2ESLp9kmJNmSKW4BHNAXC191RJwMGJUTGBZhvd8VDgDdX3qwQm8bvw1nX1aCmsEXJWGW91tgMAScehy5p4DedJns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wevWNCrau5k9fb8TApqQh5wTbw6byqMMwYpKY7szUjJmyVnyhMB4GHBTEekwupz4XzVaQZaPjMmYkXaYFPhdqcD",
  "key1": "4feHUH4akg9UjiCMaMdan7oWDzRye6s8BvpJA4GP3EhnwCBWhhYGtXBLQD8mpyCV7NRWpMW37Q5XC37nJLWUGapn",
  "key2": "55CfJCNyzm45VD1W19CnjwWidPMxVCEbVQ3tqwHfjskto9aTazjZwdAoFWLN3ZTVXc7uKcbFeL2EWaMNMan9JNu4",
  "key3": "4mGRqJx2ystjV6VsF6565kHPCdQhKvMpsKbSGP3HSyiFeJ7wquiX7x1688rdUQ9UKCAjgr6pDVNED4UNsur74Z3t",
  "key4": "261HHhSmVARxt4PfV8Nvmurz1mj9p1oG8dUgSVz9kDuwsJgp3nXVHKNRALn3gjXhFUtQyNB86mFUKdJR6d4hqLAo",
  "key5": "3gRWsqksD2ptksKP5JUYhVuAjnAsTKcdhwX9SRPbAB9B35ZWEHf4vkTNchjpXgikjegn6ee27vXjW5JJGnbvgJpE",
  "key6": "4QEYy6HT4ffxsjW5espU6qw5vjjZJW4MBsCJQz5iQptm8F5SNfjM9PunpXu9uY7Qe73HwDPgP3eKDB1QVftpK7zX",
  "key7": "32VkzHApFzK5AkAaLFBbRbUo3MEYGnYZBoHadA6nQvje6uZe9AqmboXWXqEWqdPnUz2PdWDEsVnothAsVFgyFgys",
  "key8": "5TLZzjGQCn5n6kagE5VsW9Aun7grctVs98wWtn44rAFurA7PvCTZnR6eQBYKCGMZXv6qbbt1YyJ7DNBKDan9LYnr",
  "key9": "2YjRqahQJPhym1wdjg5BCYF2iXBuGeeBU8crfDUTvCwFVQYabW4x7kWv66522btY7ruambcF82ZMFg6drfm4Nu3N",
  "key10": "2i5JeEMbsPjCSFiM92QWo9p3akUswqZhBZ4vaAMzLq5Wo4yTLt8odgrptBJb979hdtq5zcSchP4cjJPDAuBJqcJj",
  "key11": "3wVULrSnVuttehRqeMTFjT3R1JA6gQ4JGCnzLYfejEKsYKJiFMH5g2PmE6oRTv1yXTya8p3vXgDBBcE6HJjE1EvL",
  "key12": "2CCTaz715CRXJ8auZXvHZiPxwfmxCmPE2inmBCwNNPvtg6LDuPjStkfehZJU48zBRK4An3fsmB46iCv7zY154j39",
  "key13": "2wQBdU2kfWbMTeDMMAbr7XvxbqXcb8uGMWMz4nZSg8sMFPUvVHqaMZf3TygrXhPp1h9ocf6JjMCMfQiQh4d5tKuq",
  "key14": "3N74YMcJ38eNwNrqgWKWE9oiBAxJsZWMz6bPR5Ghx3KV8mYN1WMsebSELCM9TMuqFDgzGiEg8YsriSgKUJP274Df",
  "key15": "61ZRyJH1VpHByGBNaRPBLkaLWKyiM8JpaFGbMByttaG2GfCx46ErTmwPpz8D2ovRrNgJ9BcCeTp56mMniiyZdVN9",
  "key16": "2ZhPqtcT95RqzHv11VihXyJxbXtCKU9MUQvEsaVV8bD6bEnkYK6JisDNETSS56ReFMfVqTethzWxb3cB6AMzbtYh",
  "key17": "4MNYZKQvcfPsbam3WhX6ootpLXJphGKJVrCMVmcdzutoNy6ZVag3oofQPBwXeGa8bPhUL1BwinT27WgEXqEq1xH4",
  "key18": "5gknMXNPm7mtGEbwP3ej4ARGuZZ9pM5Lfx2xHxU4StgEopyzQJGtuwxPSYiXu3TYrASJ2EUP8sqAAmkBvmfFpJKz",
  "key19": "5ytyb3778RBg7c48evbgdM5ySEvAHrc1kN44WKuuXxfmdAJ8igiDdXvuPfmDTip5LbPEqdMzxMwFY8Fd6HNB1Hux",
  "key20": "4JuujXqdybJGWHysGgFC2ULAn6nDTR8Ntbw2aA54coeAMaiaZzhRU8Cj8t3M1kag9dG1kw5zaMPSJ3yJZmv4Ksu3",
  "key21": "2CrDMCdBoMU8wT5Ux371wbA3R6Vu9dTkMGPLJPR1ZwUfQBkrDdwVYmDU69GfV3A3Rsd3pZM9KBVvVaSfSMEw4yKn",
  "key22": "3nFcasqvc2YF3HBD6Fzpd8wEaVfww45QFF9K85bMRc3JxNQhsU91wfp6VZ5fY7fWAh2J4TLi9QUsvvqkkTWRrd9Q",
  "key23": "26ioY15Tbyvict66LA5LAHZqUp4efixMHh7Ttr6ZDYJd9NegxbnQyNwyQKJSAjuuEF4fkpWtHatALRRWkTfDGcXn",
  "key24": "2wcE9uZMJrzQxxZZ6hrykoM6YkMNRv3x8LBBcopZK6Ny5XtpXxgDuqXM4kRJBHaLJ584D2YPpbj8cbCGh4j4Nk6p",
  "key25": "3VcDyaAsK2yvRdsF8GXHWzFXtZNcSqjpkGKKaMDauDQ2WhJKRm2w1fJZwKM9zYUUKjYxLGamN7UGBszM89joAnsb",
  "key26": "2jU3p3QMbqGDD6zzTEmQhtexJPsHCYuGKCxuReLQRtdqsK8C3Wk3FsmsUZKMTMJNFuxUXsF4KornMW5uAWGaJJEe",
  "key27": "31DZRRw5RmwhQPUcHTab13r12T8TqZdXWi353xHZUxXP5mxF93WntX5uviSxaTuWJU9gp3VTyewPadw8rQC9qwhW",
  "key28": "4ygZuBZNeyV6pxuDUoANrod9nLzYcWFbz6ygG4YLaUTUPcqpSqGZLptYfqKUccSD9VvnssYcAvZMszLuSE8jkKHK",
  "key29": "WdSGpEyLR9sNaN3pfGgsjpL1m9D2Si4YRbktQRHAS7pavVwDobQjt2Z7H9KPVMZoqy2MkDxHCNLRqVSVs5dT8wz",
  "key30": "2RqE1GhdJGRGqCby4Y9wSGY8imTJyvCGo9Vjjo1dgn6YaJgnjEj8f48sKQ5WEQ2x81NfdRkZxxJ9ek3HKEbypzFo",
  "key31": "3jmWdYJX4puUbfETnpEKETuKzghxg4dN9dUcBR76Y5rXn3c7R5D87vwhrxoG5Ksxik8q66pCPEEJvN52AF8Jaycd",
  "key32": "5CXrudw9p9kGA5rMBijwCW9M26faiEu4Jx3YuSJ6zWDfjoW6JnbJCgd6YG3ZqpyUnEU6bNPhrtheUsujMYeb1dtq",
  "key33": "353D8HYqyJxjXdCAC1FdTuvu6MG19YDysgrqtUc7VyyBN6VKBHeaLpbtbS2ErMbCmCUct7fB7u8QLczzRZeb2eJh",
  "key34": "5kLDKBDxSN4QDWVYFGfBz1rD2fddEdELC2ehsLYvnfC1cSySD6ndgLQ3Mw13BDmbJTDgCq1wNxY5hqNVo9T1RB7N",
  "key35": "32HJ3Srdak3x3zC9f7euMq2NNRD2gGd3SWa57G4Rqp6un5q171e2asYfc7d7bKMTnq9Sr6vbh3RWDCyG5MU4VAqj",
  "key36": "TWcPn4bQtvtbumyJbNXSXGJ99Lz5HHwoVFgRfbesvzMHmBipgCKYyUzkEbGQcfYMBhN3M7UK9CtugZsvGGG1MuM"
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
