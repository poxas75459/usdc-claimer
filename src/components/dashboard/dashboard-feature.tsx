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
    "3n4JMWbxUhwhinbrJo7oxGzFAuKRjGZnMM8qPHvZmVtfRnpA8ZAgSUrx3DQZkoyED7t12vWsXJJ2uMCrCWhJhA6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hc7ufeY1NBzMvgLPDJu85QM3tnDBzujMYNFxMq18uTjQFxpfYdyEFBrm9KZS5H6z15VbD5JJj1EEk3NNvfnfFyq",
  "key1": "47nQYLnVXCQsgNsX1kGGeYjd9jBJaerfzB5GTvN4GVwg35bUWDtZfrn7ki5bQv4Njyx3uvCkKtvAySfzhEpHVQEJ",
  "key2": "4sWv4aRWz41rneA5mfsmDCSqbNmBbUDb4AjPp2CAQ165cAYfPjNY7666vrSGxqSn8rK2a8WEjwCCBVSSPYY2264c",
  "key3": "hBrqxgmXvNmX77ZSA9CMyZg93omRho3tnkNj98cMeeMfkoTTSfPbjixzY5CFmEKoE2GoD1JuKE7QbtieJonH8A9",
  "key4": "2VZURK8PTmktHTA8E84iWb4ydyoPxfFcrqxsMVeQ7JcU4FwVafW5VLwMJg8fJ4LBnWPoJDJn8Yd5pU2xaUerzs6V",
  "key5": "63MW4CfEfwVtVpL4QFvbU6ENWERfvNNf8Cqx5Br47feDgTRCFTCJkWtuY7CaWPuuruk8sV6kTDWw6F9r4WWmZtNr",
  "key6": "2meMcYR18vdgxbqD5kR9gmKjBV7HYngt4mvcJqwGSb44uPzgSXG8viUNdt86dkraR39LHcNoRmPAd4ZNTRkQ7TQu",
  "key7": "2vqVDEtCMSLnhPtUDBZdcqJzPTvErqzKepJVqVWbVZVkBygorgtoetSVNbakDtiXUkxmHEmHpaUhfqWZbtVdxnnE",
  "key8": "5YKquo66RC8kQFNXNbCN7FZ6qQqGG9kLzLVZnCB1Tfn5dxnipKHDzBpjCVzNdTfk3opqqaeo4nSyxPDm4fZXHsBg",
  "key9": "kVSkEkFn5EVbzweakHpdsg2sAknnvFwj4jdm4TyK1ViXtwYNvT5pMhiNB5HMBwqwFSZ3RjTnrv6f25a7mS1yecZ",
  "key10": "2rk3BoTvLi32szrhvfDjbmrK4HsuqQxhLpW39cgdqqzjVruJsTLn6nYHYYMozgHqvvzfUMYQzeqMHKhJA9TgWans",
  "key11": "WDbTYqYZxQFB2ReaSWvxo6oJM3iMtLQJ8G7TYn2UdiGEj43o49TGaqpVZuoGXxZPmokttgGxjp5KmZCP3AcufTy",
  "key12": "NyBLhaKYLB19oZ5dzbCF42CQP1zFZFmzg1XeTE7G14LfjPTmWm5Cw59m6j9FLxMYSPGeLq6TsV61KnJ6rppvGx2",
  "key13": "2BjLuiZtif8au8VG389wXHBzRJz7KzeGiATSzGQMNwe9YyRNW8V3qYEHUwRYfqvdHsdLmEEXZAb8VfyrKmiu4RWM",
  "key14": "3ngaQBMvPk2LyPxFfb8KbFE5ruLdsAvrU8WT5vmJt14nV7NFQYSuF5WNR3zK93YdzvKzWa3dt8N4VrKUHftg4i1j",
  "key15": "4XCc5VQcTdP6zoXYULJvo991rAtqQy5PgZVHCF636bmwhzoKKPD5mtyTKstRWuGUwuGkiAftmR83XndeV6iczm5b",
  "key16": "4VpzVoJKeoGbVwY7aYHgLdvtBDGKMbCzqtBEK5FzL5GY8wENWHBbZ5m1nPUCZ9GjMQNvGox4wryfVtAEL8DKcN2y",
  "key17": "23SGpJAZnBZt3rqpFvXuZZ77dMn4Rocx7MMoiqPUDZdrywHfuF1zHyUhxr7UxXLS4vqgGDx5c42n4rthBvm16jQM",
  "key18": "61JQQ3miACV8uoxRFAXniLCU7ZNVTLVynswpL5Sx7WJ4bBxLCo1whT9kUv5BQibH7zP2dvbUVthaQf9EK8UZAgbb",
  "key19": "2a4G8j1PAqSyvGBhPm5n45RTAAr88HgwqFpxNG6qMAZE82c6XupFYqWjjXm8ix71zahXs6mQWLNCe6wmp1Nt1UXh",
  "key20": "2xnMqJ2Xjz9X5MX5EH5Sxsks9DLyQgzHKj8CbZMZeDeWuGE9yEX1KwAjztSKWJuAf95dFf7ZmCmf3HbqiSJkZPJi",
  "key21": "2ZXTJ7e2MU7jquz9KYR74kWVhSJvdgLL8wraeqFfR7LssSR4dRG2LF1koKh6mKLGBNR2UF71rTzsCM9JJDeLneox",
  "key22": "GbFA2wMyhPg7DCxsggcBzXu62253Qy9nEJipsUzrd4QddajtYuFttGtdYCmnLLZbWTu6xJaeXqkUWeUQtBTSz6v",
  "key23": "4ms8WHtT1TqdEuouVQKLDHPjsqkcon2MmJoseTarFrEm4wRFYrAqZ5rrQV6AzdCABtu6zpkdkh3stnoJw5c2u5oZ",
  "key24": "4byJg9eNfQjAnZFZt28WWWfKSKHWqbdt3dqM5ihMm2EwLNNcFjngWCFf1kw9o7yDEyaxSEnm66cKQRpoCJ8bkY92",
  "key25": "3jq8dwNaY1G4uVnHzaNVn1YKkLPk5gW1jqfWjg7Yhua7KPg2sugumfKXcFHADFdoG21UK1KXoBcfrUkLdBQnAXzd",
  "key26": "3dmPzRTbqyFAqTtJUYMG4BsYmLc3SKddothvvT2fQh9tP7X9hPQ2rBWPnPuip8wHKxYWTusRLnvhRZBvbBQY4DJz",
  "key27": "4r7H37dxE2yrobGqwhJ1HmtaFdxxJg2bYmn2B1mX6w7P9Vi57dSq9muinm1FnEAEh3qHXGzRFA1qZ2KM16mrfgUr",
  "key28": "FpEmiJe6Pqx9iUnuzfaeVRfgJbdL94ATZ2F9myxLbAxDWAnbBbu5L5rVycCXcpwmohEudx268qyKdiKFzyVERDg",
  "key29": "5MMEDdWwy43qgUKJhKYcaxsfabnGyzkfP1Zh5HEFL1GWtZebjfL28Ez7VXErAGn4sEoyrS4JfohXHRhXxZNe5ScQ",
  "key30": "4xZQe4fbMKpScW6gozprJdaqu11TXfoo9FBY2R9ty6Es5HrGpCA1GZE8tcq8cAp1FKjJac9UtqkdJ2eLc98eTeMh"
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
