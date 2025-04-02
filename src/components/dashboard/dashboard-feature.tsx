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
    "jCtzYSExZMZga51tML67wiijDS6QC7k1q48cbXMu174wZ1e61cTQGEXSHjZMRdVGs7a6CrHjggStNTc5YxUyhAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmH6DjAspwGMW6tW3ituhcidBvGj5LCcYkePUd62DWZrt4sMiRWosMJyHLhKFqYGt5n2LG6KQbDq6r8ecPhCCPc",
  "key1": "22qT9nRHjQRS8XGFpEMWPebp7f1DNEYoYcN1XVV5cwafEF5SJjX2MYkj5H3C3hpB3TiGf1pVMVxGpxJQarHhvwam",
  "key2": "5g18vY9AybsjYFA6qPeoNGZQincFmwNyQaf48XvVteDYjLQnDpDtaKfgXbvCAZmgUWAWBZryCzHAMRJUo6YKsvs6",
  "key3": "Kw4TmLjU7frZGXX3tLAtpiRUDa4vueLmRzAHYPJLcv22cVXPG6VGRBP1tV9iUPLRgFcvxmutX3AVje4dG5qVRB2",
  "key4": "2GbiCZWCRMBen7f6aonnfjFJYbHQEr5m14sb7EX5WffAJT2Tw9zEhF1yKiQxE6QXsrt9Fvx7FVNUrGrkK7LdN8UM",
  "key5": "4ev1VXPRDGyEA7mT4sx2hKRUFyg9KQrjZeRdQyPfp8XedsULULrgN6JQy4KrRsHD7aJe9Log1pQgiQpA69iGJTrA",
  "key6": "4Pk9wUpfCr1xtx9dsMfDrGfeVJzboDjLUZmmreVWocbRnJ7AT9cDQY3EeDezPhQf5K6eM3oR6EMohjVMrPghaw9m",
  "key7": "5k3eWmA7hU6h91oTULWF9FtPs41D19sbeQBKKXizExFQDpJEtqNxuphMBovj5S9hmNisFmEMrnV8qfpR6eKX6Lrk",
  "key8": "Z5pWeAMRLC8eu8qFGbNC67Hstjtq7nLRuCBhKhU1hSoSTSsqdhU4UiLTbMywau7DYsDjXNqK5xJGtBcc9QVE7Pt",
  "key9": "3sTnPWR3RMNdeYwNXBZytKhz68xqhmi8UwLwv4p7RWHNfLPHmzXQhfYnVajjRN4sj8m5PyXVvrqeb6eyhpYDy5u5",
  "key10": "3i6FTjCQ5XJEbcSRzQHzFnb5HEwchRPadPJg9NjSqGnFCTNkEbESUr1hhhXSPuhDYkmzFvRXMSKqEP7GVpyvzkN7",
  "key11": "kp93pbfUD8FqscBdAGYpp4Mg8DJJRgPnj2aZyR4WmpyZktSuEhvY1ZRZWJUfqpAnXYzdFC9LePoMWkUhoQoXjkq",
  "key12": "3iyjF3K1fGNv1S1ZUu1JK9TbCt5rnaMWxu3K2LK8cenGbAkSmFHrhNkuQNRtzRWnD4E9A2DwT87RBiEDHSVx1KiD",
  "key13": "5ijokSg7wAMe2iSDMkdCRqYUtZSpkygx1AmEpr7uK5anDUj4fUfNRThLHpm6tM7wnTVHvhymyxpA8WHD6nH9bhuZ",
  "key14": "2Xm88FbRYzy2vGKPgdZJ2DXiZdS86tw6BQA7HMHrHAUT3MKX3ykRQ7Uv6BLHhNKL2nztSam4bHRd3TbQrY8MkrDH",
  "key15": "2duVHT8jCuJiRSgVaPxFr4URsJ2f2W32ocHPz6WAJPHsDv6aVQZmGbmTB3LKzJ3id7SSi19aArCJZajV9CFVwdJk",
  "key16": "4oFHZ9PEcrdV2pkpTpbffGeyF89UExbFrTrridYEHzj11nmbmMVWbeTsDhZTBag6vy5iwcU8fPtQmxqbk7DgqxnQ",
  "key17": "5ShHUiHrZXiFR76pgsDU7gvmfK33Dk4A7EjUb6MbtMWdxSUqRkNCAPuM2hMen1BDptQs8xUdYKBqVBb7KKof3sQo",
  "key18": "4HjhjqhyFkrzicpkSbk7YYWxc713kNkxMhoUKsoN1iyGkcjPnWBpagpiPX7iajQj1W5briQb28hd6WCKdWkUbFcz",
  "key19": "5YhEPPGt1RCWEfCwvMJwiYB62t9Lhah76uTpSFvBYZvio5FYJdtjRX4zG4Zjg6gis4S84dftC6MdP8t6HUVrqHxK",
  "key20": "24d2WZBXzF6AKwMYEKzZaBkeZU39R7AY3FTjyqzArxxACug5nq75A3onmcfK5rooUGk3wH6uRskUzuv3AEdNhDkG",
  "key21": "3DVUznT4LgTZ3rgo7qFDmukwwqE2Gb7mDj2EixJKUeaTpP3dDXg8ZETjtBgwxf7GzvZq6bNWS9JhXY89S7D9efeZ",
  "key22": "2EWTGTAK53EHKuo3mnHXwKn2q6QSrENuF1VXmBb9cxBNd9BQWuxWPmRZwsyXiNywFiHtcQpRNvjNq6kndqQ9LEob",
  "key23": "24u9gyBYUhoTgQyjKXwmtwuAsYh4Cva3cUqPeHAxmcJxJxSsQQ8wjj3oSwz6EfgDVDv7g5DbVZvmg2uE8MVMZ1iN",
  "key24": "2UmSCUgCv58SM8oXk2APFobAxoUadASkGFubzqQ4HMiFAtSZ41X5oUw7VWMGV5jYrT5a4PXUmTRMmU7GPZfRADzg",
  "key25": "59bcMVYn3gEyXueX4YfHSKx4BwF54pvRpcuvCJbkBvtBTL23goP9yexxNCohc3yAGfeQQ6YhXqBXeXFte2csrCaf"
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
