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
    "bM6kpj4Gde7S1mPJDRBbSbTFuth6Srvsd4dZuftLGWB83XUaE27d22j2QRXPUSL7HxoLTn14wtMEtLK3mPkarai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S4S53TF4GtD6X2uAWtph6b9d8oaHPD7D9PEf9wh7mRPwEZ2LXGZjdZMtUgZRv4zXbecCcymdziq5GRH6t2psdYu",
  "key1": "32UDDs4YDcXPp4RNvmhQTSpx35QWg1CAVBTbcnKRXtzphx6gqA6jWBCkEQdpM2ZjXpHPgSXJkPW8PyyhZ7bhT9Aq",
  "key2": "5F37MveGh1ihdKTJAbn7a9u9pbALQKkTWBAPs11g9AM3V4CGZdEBXfjDHD1DpqfsiXQxPRXaFfDupnfrXcpwhHzE",
  "key3": "55qBSQTXoZdxt5LJKBnz4epR5b6QxU725imV1MuwFgzfufyG2u3TVqnvRc3bp48CyWxqVckpkAGwFfwwgBg3jGdc",
  "key4": "36vmr6oN2JJEerRYC3ZyHM7hAYLPrc4fFrXwqa89CKhiDsxmwXV46p8Gh6dSiLYSJw3hEyiWRzMShuvYByS8aXse",
  "key5": "2qvvFMb25K1mPBTkdwpTN16kYvkUduaX9ry7k4uHM2zmbjEYYkJWMsmAU8BVDK64QYAJwxtUhjFpRnnPALHDRtDR",
  "key6": "2Tu2k3ZhLRkfrz4L6GjdyYBEvQfNGxdpWP5VVHvw9Xku7Z9g7wcQRWx5ETWCvtPhoYGxJaGNeWuE9FzU9eAfme2G",
  "key7": "468afmW73mFFhnoZr1mCcwPmWgKhVHv7X532mkESAWRMguQC685qPLaDH9tn19gyqhVQrYVtHDe931ZBccM8mWSB",
  "key8": "4nbb3GhzCW7Kuf3dxso3D3tgu28ZcgMv7j9NmXz4bB6cieodNWzP3J9nd8Ggtr3Wnrxs1YVsnYdDkvJzqvnNCN74",
  "key9": "2pfEVLLfpzvCzE1Y19278uY8oGk666GfG59Bq5ehTPKUT7YMP37wS7c7zw3zBrgcjZ4Fx1jXo281wUFAzs7kiJYb",
  "key10": "9JckTRiKZAA1XH3uhjL2gURUpPDrUgMwFQwzrA3mtvJ7mcw656BacA6E742KdpT53dPyMMwPdK4kqZLz47QQhdJ",
  "key11": "2rU9KpYf8SBQ9v8vRLXx3VhA7qnpsBjdQEDb4X5MbJGKNQzJ3XHA4quhdu8rjCFcFGE7TNANkmT7g5sDadD3CRMV",
  "key12": "64scX5yc4ewQmja9vQXam6orR9Ga7hZ5jkNsyMLXfSvFe2ySnCGkAduynqc8Nctw69PvpgewJakziSpiAPbKy7G1",
  "key13": "3CMVTkUxdGefFNXsmKkLaU8i2R58vkxp8WQ7XmEP4NQ9hc7QuM4J82f22NWyc4qFyPrSuT5sN9mWdQ15WLN7WzUM",
  "key14": "AngyZHxDxHkVK4szcumPoxUnbeVsDh6gyxaWEuvtPwuYiWfNWDfsQsP6QgmuEbpZSpyx1LnTq7qhPDYSaB28eXU",
  "key15": "3M9FJ9FhypXCKgMfxkZMh6RXRtW8B9ihocn9HBrwp9TR6zFo6TDmthJXDTcG3GLaChK2UF9BqVZ74iZxaQQzhQxM",
  "key16": "67p8vc5KCi3CcGq2NT4QpGm9rtMawpegjV82xtZHXhLy6aB77Xuwd5YvFGrvD234ZAZgZtfp7JKTdiJke9RCs5wH",
  "key17": "CCrUEbtqabuP11wEpBRu7fgX6uQTPKyq9HK7Li6JkuYXmAZzWL8VgnzLZFGbv4Ch3EoLDpDaXwB1YRTSRTfpBXX",
  "key18": "3erCCQ6BoGX2ZYLTrUZ6BJLYJBEbLobsHqnKQbyQSZwD8QckfXjVJEm5g9QzVDf3ydi2mFkJvsWnHa9Lj43fKsF4",
  "key19": "SCSG2Daoo5BQiVUKBdK2JpBBpVksLk8Z8uuNMSq1X9ZgfYznqLZP2D9RWYmLR1ktfRzqAxWSUDeBBfDtrn7yKKF",
  "key20": "4cYXM1K99Q7KxsG5HR4xSbMYAQn65n98E5vcjzYyDmob2r3MkNgrCnmPrazjvJfNHnfGVxq1tJKBC1aBivHpWbiW",
  "key21": "2TookQUCgHHsc6au8nDvDpvHpU5FrX5q1LqhzAVK3oGytCzCHRG53VhkgQbdDiWo2mNy1AgRLwXCxF57q41XHTqB",
  "key22": "4cpEgnb1UxoWrAEckGK4SpNiwPoXwscUjTttEE9SFDXd7qnKvpM9vm44rDAzaG3NVEpKMWv23BKWfYeffzb8oYZy",
  "key23": "4sfC82CJCz6hoZ3uefpkVz4biwKdQKPkLeL9YY151csSeoyzxYrmrUoreZAcGUGvs3UCYBZSPVGrwY9tMJ9z7Fn1",
  "key24": "3Q1zWVTjDGSWfmLePhYcAW9HFkSg5pdRHnRvgCsgCu7p8ywFFDAx6wbBvWbsxd3Ug46zCon1kQEfa23zNPMsTxp6",
  "key25": "3AiD8hCt1eQ7effQ3NTMQeVMiEUF8ueQrkF6fCAkNNU5QwhkbPiHkmUf8Rie4wYYQavsmCpzwQvz48eN9AhmxsJm",
  "key26": "4CEZem5i8KJZiXVQeHaCZ2vvHBwgvv9bQ8iE1SmJH5yuQd5ZR1CL9WusJydVYUnMqNetuqLqGKHiMvpJjL7Tosed",
  "key27": "3vd8AHFeTujxspFZSHWPiDHCkb4Hg96cUtj3Ly4EpVWDaGNUCKjuea9nyRtzdsHv1tw8CwfKjnpJznF2XjbxfjQh",
  "key28": "24XgLt3JiMqCrvusg6vKgsWAvC7ooZnWACJULFVccNEiEFaJHwitszWDcp2gpqkERcmxu9yhtXNQLUuoXRyJ7BMS",
  "key29": "4Pfr5bSLqVf1fB2425eAhyaL137MarahwxsSNLxn2Edw3KCCWbREV9AE8nzJif3jinyJHBwDAuHtyjbkpZib68yY",
  "key30": "sZingkpLNqCesy7ECFkYKQZc63araQt4XWtmf4zNpH3f4f8eAhQBdpY3Mjr9ZFJEf4xfBD1aN45SZKGfKuPfEf9",
  "key31": "32Cu35eeL8zAxX9xUKD6GqY4CAUH4J947r7MWLxK59L1sa8v6RiCeEFeVDeJU6jE2wrh4LhpMiA8JmxXEGLKb1vf"
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
