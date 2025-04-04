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
    "2ZtmDUeyNH6hq8i98hJpjrQEpzhHAEe9iFSSiJA8gynriZZFYL3VjuS2Mc8e9nsCNFJMzpLG5iUU4Jo5CdQvK8kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "123wQ4eYFpopyu75AtFEA452DGhsMgMgdnfJhAxBsHek87qarvp4yaMjsuqeDq6oMgkzMJohRWk8iXndTq5b1BeE",
  "key1": "622aQVB6MeZ8sWJVewVpoGXAdC56uiHPtDrouPbiaNEhNuiCKWJVtZGhZcWMjbc2Phb5gGHx8AQEggjsQNCiNCfm",
  "key2": "4NjUbbCUUx6ELVQwDW8zMfVEctPvE818TbXjwSfc3TAvsWTBvoahcp6GEGpa64jLhheDeEndGeeEab62er53G72Q",
  "key3": "i6D6Hm8tH2fCqrP2ojbJNquAQfC7YNS9QV6DniPs3MGA1fM65TMQoZ67dWeAuEK2EbXLKnH4QS7HVw1HJ4MV3ZN",
  "key4": "5dWwFXA9fA11RpoUKUFUrftCWUcBNAhJx4WWtbU6ihwwCddoZAxKNx5iN1Cvx8CKC7gRFs3t7EYsXfLdUHHvXD76",
  "key5": "2jYVN5JhSqWM3LrNwqZfRR3cw6Vw2y9ij2pYxzwmRbxBLSJXyk66UwWRcbD5vqs94mLWoHSq7jQBZgWcQcD1g7P4",
  "key6": "3Ldv1Gg9Gk63CBy5itKhrNmHmaHgifKrD2p6w7MqsU9x42ZG8VFHywrpmCmdby64jvyEbiaTmpErQ6LC9rkgk7vq",
  "key7": "4hWBR3V8DY9gcH3sgECJ5GgBSNzQ8JiqkEKnfYegBhb7Lxqd8gsCkNQjnYrKTYBJGZV3J1PS6RQeHEA3Q6M9WoRT",
  "key8": "5XGTfyxmVTRDKJwM8Bm8puQi6uhNfJYMNEgiMNuZJeJFJmCj8hbBB2en4gLnLcTYhGPAnP4cS4Tdy3xAhjaMBJJN",
  "key9": "5etiu9ne8SVKjNi4HSac2CJpiEt8xK8CBg2s62ZM1LrbH9DsZpYQXbb94kL2uMsmzBxkS93rmCAL9R8zH1wzJADT",
  "key10": "R7JLKfWLVLJMU5gTUwAhUL9J33pyByN9LZXxchyaEoeSztbZXxEpoRQ5p1r7DjJJH8prbjaTEBJN47k1eYbhyZA",
  "key11": "4btMDPm66JxLzz5VQsxrpqewFecy3r5WoCCTD7TDPZxws9DcPYEfLBVjtycF9DfSgqUTxkF3csULNkAy4uuqUJ6L",
  "key12": "4TeaSjkjBD7xMDExAdibBmcMrppdeLKqXsyM44W1x5pdMzCru95eH8dCsCXPvSezbLcCbLoQHxsCy9omnpkMVpdF",
  "key13": "ssJhTSX74HVyxfVZ6eoiySfpF3HyvpRUKPT7EZnvR1C2orrayaudQcfuixMQteXfuAdVBfBN5RhQmT4HmUp19Ma",
  "key14": "2va19YkbBWbdnzjhnDNafBYGSAu5fCx9xEmyvg9UpSCdYcvzeMc3pJcqRXWztms1ue8mJNrSrFg7BQqSwGn86oTt",
  "key15": "5mVsLyJdZjYvGzxjTCDmbFPwKpbq7k4TdF9mZUaPhuikYxjmGVFwD4Lkztwiyr3ARu3LqZ8VWe5bpBjZBtU5wLhY",
  "key16": "5MvxDXVpRcv2d86xeFFBnZYCebAS4oqdBwMAPVWRVHSi7kuXmmqa2BvSvFdCcfMynN6x2sJSWCoe5x39s3Neu4hN",
  "key17": "4SJJFu7Sr4MMab33HJtYB5yFLKDR9Sw1a9XXQpwpPtRwu7XJUhbJjBtSKPs1DL9vtGBhUyRm82U57PAVPdBAHucE",
  "key18": "23itYiYgArVSz826AMUqrhPKzw4ZJPMArApsETWDe8bZ1QZiKkDtoXAo2bmJwoma978v3vQTq8EvPRkAB7ryq7BZ",
  "key19": "3F6xssjZAyV7k9cyxyqh5zU5d5vugc9oAoZ84WdVuwTcZy1pPz2tXJmLASvxsBPDkuZpZhREb8ZNCCb1WLiEa4Kk",
  "key20": "51Cp7GJRyX2LwYk66rQv6P86aULC1RRzMi9N6NhYgGxaQKij2TwqxSeteR2EeDE5QSHt8Fa1qava7fNrUxHqZ8J8",
  "key21": "52dFYk5KAoZdQWCuCtH4wDoHPCMJbV7XYKMbur3DebGP1rFQ7LBNPtKmzkyPoDz2yuDbApqjHTpEbv6Zg5tPYdxS",
  "key22": "2gnihz2uDGmYjyAGCpt6C2JxcA1NFeHfjbt4BbXHPr9foapaw1XsSGwr52t8qzp2c2SfBAkKjoYRqjQBWLHYfgeW",
  "key23": "5HkKnEt2BRs2YKuifhc6K7Lm96QUqSNAz5zcGJfMQLv2aJafXvFp3nwo6TKbi27vGH3fKd5XSnw4qCUhcU1dmMwu",
  "key24": "5QQQnM3bfVse46htP4zre5iZtxTy1kSVfPYZ5zfLBNbBwq5oA9CMcsBzV5ueKJ8jDYkHDynvobmgRGn7McRaVXoj",
  "key25": "22L4tXvqM4BZdnbaouW5Fdu78bdMgVxiCTQJDjk85Z29Asj3K18NSnJYut1PVoEx2MYuAM3LspPCmx9Miip7ksKc",
  "key26": "5ZAdYNSNwedF7shDNn3LXFxRd5ijjar2PLb4FDHmjQkDR7nsDjynhswqC4UwPDr11bXaNxWTPm8Tv1s8YJjbmqVm"
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
