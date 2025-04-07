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
    "5MwWfvF64ky4pqTL7ikg5wMGWVgxCUdg3zNGM5VRq7j4riii8JgJCrK2W57sUVWiys6okpw859DrPsq9SZMfzryU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLK4wKgLF7V9b8Bk4QbFPJRyP36m9KeHX8FTdhas8AZR79tKA1fci17mi2FPgy1udve15YVcMG3MWUz9R8M4B34",
  "key1": "3qJSnY5uLUYm76zBMtVLdyqTdvjScGupFZ5W5KEeKHF9CQbYCzdV7qmN2QWF7QC8NSwtNBiz3CM7dQfvbPq7sxRb",
  "key2": "3NLDHsazcgD6pJauKCJZUYVKTBvm8upMrBfJD2hDMeZuMAWHKzkSku9uWRJnEcSXKyUqdTRvLXc2pBWqK2uPXqNL",
  "key3": "CoKtGRRT8ZD9RhtXE5Pt9h9Y7H87fefLVnUtMVts1KP2uywYjqu8C4reNknyMjr9yFMfSTW9cNLQwU6Vtd1NE54",
  "key4": "2qK799jVw3HG1wsEbgBH3n8xFUqPXrYLbkFiJJNXU8tf57kYdetQ7riia2U9wxg88QKH66seNWaEkViq8PYxt2SL",
  "key5": "3Z5dgfBLkP41MEUnfs7dnBtUBFNJP5AFARz81sJz6x9nWzdKFDB9fCLasUo54aafmMaXtLAQtE1dJHZSFMpWWXBk",
  "key6": "2obwKP3cjr6T21o9P2KZ98i9K67MQUYCBda3CNEYWAVC2vfhzG7UkSHsj18TuwJaJzB71HVQcAS3ukGsVSz9DyNJ",
  "key7": "534NWx4iVpjHkeNjtFcskVtsxA97JapGYMurmD3S6RoCqK8rBxv7t6RS6iWdaR2deS5qNnS4Ao88WxMAooqhmr7D",
  "key8": "kf2V3yw3QnToRrDjXCQ4siJCjjvNUXR8nQSM4UimsxdtdH6UXkceZCviDCTLfpNSpshJe8eCB6aNc7pLwN1kBhK",
  "key9": "4CVanKn3oHTZHRwtjgCNNgcWwZgiymEHAKx7qknXa8HHZp8tqXbyALZFdp3u97D4NN2PLn9TTeiiqBNvkxH59CLD",
  "key10": "3UL9FSU73bpBZ1mJbeAfSft9uudzgH3E4SEGohmQjKxFoFF3nJ2VhTfaNxsDkxU6pZv7tMSX8r3ofw6cwVLL3d5X",
  "key11": "5KRtoaRb46QZ15e8bib7GwaKKRMvZtTca2b4PRyugQiGrvcdM545bPasHuycJHmNLMLuCn6P3R9DmJ5UVbGLzdJF",
  "key12": "9trr2KQzsyHYRcMHxQNADeQ6djs9wxN5zVtfQxjhSauRPsUxTbfm52ZRr1tYgAD52aW5s3GggUosfwKu1wRshos",
  "key13": "3PguuPYF6bwzWjxsb9i7Uh7sG3NBi5nZLWxmALuJwKZsT8pwgxGa3Hi5qBKrpP5CpqcRsXCa8igqriyZcD3tHoHD",
  "key14": "3XGCpuSmkoVqokSyzZLYv2PA2Ysp5mFa22e4jh7eCBsDkgL5kqUFG5p4LHgVpfMvo3SkVDcRSVtLbNgMGQze3Fin",
  "key15": "fhdwJaUXgQr6iSz183LM7CFcJq8RWr5wpoWmE5UTy1rztBAGp9QfD1HKXwLUoDUMqPGfvs61h1V4FBjzqP6jfsU",
  "key16": "65Lq6Tnd8VrEj43n2EqNUGMwnYQ4jqFGDQYjgautGPSHJj54VHU2umdQxs7LQHKX9A9DqYbN2xG8MUQUARFsPs8q",
  "key17": "4c7Xk9x2HNWFdbQ8xvDxvSmofPTxjN5NGnUgCXfxJYckCuzS5ds1bwLjoJsF5AEz2dRAxqh9Fm5QSUKbW6FYurjX",
  "key18": "ZhS5Tqs88QEcX6PJZTDhfZ3THLVhA8Xdb2zUMs4BgGMJGqmczj6BNExCERShGCJ4qfrZGxDJNrpdhuaFRjz2NTa",
  "key19": "Svrf3a38XQmvU7aQ3eqbyqXWLQGLeyvMEKxpZiR93nQp6S2kxXBGw86wKFNHbTvkQGhv1QPD3NuVmkifMJZeaE1",
  "key20": "pzu4L8evTV8Qx8SAWgM6Xcie6cw3udjVynb1wQm3JnCaEgbuA1ff854fvRMmPf3H462pxFYLQxf6R2jDZViegpQ",
  "key21": "2bnXHEuftnLwbYTbW5BWG1iJ7x7wjZZXzRjRkFQRUQVPErsCCVK4mcko2ohXNWdAPp2J6jUKDzfawhPSViJdSHdk",
  "key22": "3jPrehbkYRJMgRvxfCtmg57U1A1i7XYQ8zRPpDk7PC7vwdAqUgcYBKHWmSntBPPYaT8BSBpEJi4cxXZYvjcLKGKQ",
  "key23": "24vGEn1vhuDR2WdhmQfR7oyieqZKpHYMV2qHu3a5A9Mb6SUWd4iLeKTuAbF3qRxmUBiDZvHLpLDiRd911odaqC7H",
  "key24": "uVxkp2hS9j7HSnHqwiUnzGjaYUq9seharjHYt3XKPneKW7yv7hfLuQDJeifpxuE6eyEtNgEi6CnwiaeRKmWpBU9",
  "key25": "2HZFeHmTwEgpwTV4z6L4biDmL8RBmNRPN2MNvDHXWZmMXws1HLKjSnsDD46g94QVhAX1ZPBfw5y5bjanfTvcriyt",
  "key26": "2gkM6sCpzG5q5vjqTW4XhhgcTncg6ixkpUT9MZx4U9oahcWKJVqV7udzDscKdVkAZnGwWAftV5UgCzhLXMzVQ147"
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
