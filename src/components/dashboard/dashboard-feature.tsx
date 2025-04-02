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
    "5bkzmbJRYFqybqc9ogQqgasXpYq9GpF7HAhfF6HY1t46uWYiHvvPsnYN9ZN7gup5i4u2CeykSLEdJYco1Sk5ECDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b1qvY3sQUXZtWdZEamAQrQvNbp9pxhsYsHGcqNy7JMBxkKSFmPch2nerrZVrgqjSfCMBFRWLHAuApYJ6mueZ9aC",
  "key1": "46jDLdzeoBsbho34syBZoGS6Ln1LpMt6fszwzHFT8YB6kGeRB8oibC6DFByExgGQYrvRa2WdJeKs2Guz76cB2hSV",
  "key2": "2TukP3uXDDyu7bwiPYr8ZfVWzWnQNAxKvZAEMr15hzYhTeeuAgopnj2rjFrrqep7bZJXtgiNLy3VLNzk7LTtsDHe",
  "key3": "5pdxacy2haKeDxwBvYMkW5fWAXbSVoUZD4ZkmLNGsyuMZTgApQw9hd6ZrDzUvDHgqQsKzt6piyPatkJF47NFTsTX",
  "key4": "3cMS9hbAhBBLtqJvxLCQz7E2r9AP3eZov2vj2LbsB93Ma6aMfEt2hEr9tkK5ojapsxwJbgcsxqUGcHPQXwgUT9U8",
  "key5": "29U54gjorMNY9RDNv5n91B8dKsso9Hja528kKtJ5W2H7aiJJHp8n4GHYQcAzt5tbFcA8sAEUDtsqneCNbfUoUbgB",
  "key6": "y3XTBrnHcP3dvo8PjCW3rBLSrPiuHkBpjz8y3NaFsgCBnx7JHpsud15CgLusRKkd5kv3bWLYWYXXYrHkiWiZCr6",
  "key7": "5nQqeCA5WnyJBLAaK3VRVwtQn8phRW2pgampRcdKDpwNNCAjxrwNJiXivWXdjyHa9Q7T9VFhtK2mVwKXrx5UZuS2",
  "key8": "3bTZLkRC3H5kCw6hXoxg3rUjv71xbGqnYbJ8ooFND8Zk5cM1rkfPWRj7gxeurnZe6P6hZHCmGv2XvSnwiKiN856b",
  "key9": "SSdWYrcTc87JvvVb8iWssNkt4tbA5iHBC8qHKajqsRqNCSroFKeze1QaXheTXoQfo9VtXUJhF7RvZMDCn8nrEmP",
  "key10": "4p6tZkex4PgF7fYxhCkLcbBdBLAAhosWrPme9jA3EchL59nCZ51BmxLPcfdKWxyXf7RwMy5m8Wp2EEQep5AcG3BZ",
  "key11": "hfQUnqW8VXQbKUJAkiHDjGCjDsP2KnyEvec4voGGtcLBuaqrxXHDM2wvkmTKRRs8bmjuRHkP8oWv8NfwtTfrPYY",
  "key12": "4aVCe5JppUFKY9gCktgrn13gskFxBMoBJiqC5VQCVYom1UUVc7ohLwScTBhxhi2amRe17Q9zNfA1LF1PdohBY6tU",
  "key13": "4icmT3nbLbFgWRrLuWhNDtjaHzayHPHkaqtZXcLFUmycCXvyu5u2t2igkMo3PHhDFDfpbmoVVzcqBvLQ75tmHSwK",
  "key14": "3bnaugdfWxTjvahKcgZGuL2TsKQAZa3ANZYBGogpXsdqaU1gqZbvXnRhgTVBGS9owGtkq4NyJoELU1xB62WRKcRT",
  "key15": "5dATXDSuAUH6sS7WTX5223Drr6ERCgwypmuV3xtjYF6Gt7dzb1R4PuAUnfvz3RwUPZiisQfnY8MW22fP5R8wyB5i",
  "key16": "PNNL17D3m38QSLG8jeNkbHMwBorYHcGq9tmsaYnvYBqFBmRyxfedP8iKeJXxMPHseEYv2mLZEJyyd4aDDVJcTEQ",
  "key17": "5cCdPjYNXQj8pHGougobP86sXhWNhH1gjJtSZNkkjEDLGQJbmGvk9cSknJitdDS1FqNJLw5E4MizS18aiUokxVd1",
  "key18": "cxiiz44aEknvYWsY7rmRWt121fNUfgkwktvqN98EfTkDkB2kWHd4SBuvHR2VeZukbYVtEhNozdyJNYhMLBz9YMg",
  "key19": "5ZpwSsVGU1S52N4Jph79yqPq1VwBzB7GrJhguQBEoen31rVjP4jxcvyaoRKPqaUGxj8Rxv9SdhbqR2KNtBXHMjk7",
  "key20": "5dXUjfAKkah3Whaz8phBz7HkXWwPqvDhxTLgXMHSiTyC8kcUTbvHRtVRoUBiD5GXidgXqbovpPtqVd8WCzUzi3Jj",
  "key21": "5VN9TnDhkAvTLH7M1JKrdwinQnY9B4hYkTWff5f4RczETavCSvPmmVqrHPbn3GjSNcyihLF6WQ7oKFAHcBmXAKwr",
  "key22": "66aXxmdaN8UdyJcXimU2TT65SG94sgnVBFBLCMU8SnS9mQL3AhRacfQHYvtni5xpRFnAx1UnMVA86qDYdS6BR5aY",
  "key23": "HEm6t1yNiyTi53BhhE9CwetBHJwESiJ2Jiw9seM9aZhdHFae7fQV5pMQo4Ljt4STXWcgWqzEAvB7e6vorEoBHKx",
  "key24": "4AQDgQ2CpUdPcxh3E9kbSC6kEeCz2SqnCosSWYPJJBi6H7MPonD8zBKkwxanLjxu4SKJcBxMJvkAkvSEBfr5VVo1",
  "key25": "45eZeZbo4Aac63cAy1QScMa66phsDRcy3JnP24yANVF3k2LU9ocXLqjurh7wE7tZKhhgw7PW8hFkwfrmKgNBNqwK",
  "key26": "5hhij9GL1k5oEJhqktwuZfYNotiX1qU6okkJQCibFwzsrgZ8d487Rh7s3LRxsQXbw39BrrVE1gLzVh8H9AV8Xm3v",
  "key27": "4daPU81KyqL2RaE45EdbDegcmqRXMpkVZobL44tGJEfmaA5ywLWifouzVSpX3s72cgJx3yvNScm53PXHQEJYK93B",
  "key28": "4ipMyQVHfusxA3diyVmsrMMoQuGGV4TJGxnCsRodiYZQsbcVkgNMPVLeTJdNVwCEvydJYUNqNH6dxZdSBcD5nffv"
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
