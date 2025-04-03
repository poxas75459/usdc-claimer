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
    "sjGqhG3BnmkCVTQdyu2Qs9PcpZdJu5o7Fnv5xmFy6fDknuG3fhxt7JJ5AncN1zHPEQrLRWqcqTFQqFCAtbRGkKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DKLthGH3ss1BFTxX1VNKGy8QPr42dJ8m55nD2qKefi99gwgZgnzDprv1t3ffsWRdUc4kjhjCTp8CDHknB3ypEkV",
  "key1": "26PrRHAG7UW5YQtT9w58JioyUb3h6XfHP1zGrGyVfvBYnfUvGsUwkem7xxDGBLVuW9rg16w9UwKdCC2Tb8id7i6R",
  "key2": "398KRkDYQPNNxHbAhYELdNnQ5pMwaUqfJHFTPHRwYP3WgNZf83qTvjjZXJQfs27tijdy5CHcV9GDtPbFiY7Mepiw",
  "key3": "4KMFtGoDTLNPVMbTaheBsgkehvY6JK3PnmsvDkTLN75haXLnnFLgPE3y5LjCgDw2Vyr2iCTAqJec5WvPZ9RGciru",
  "key4": "4nfp78LG9J9D3PoHQVZCtwcrTthGzQbzSGKabDhqK272qpdGnGzoFNWPwWa2cdpmPzyVVEnoMQVmn7Wp4k1MpyT6",
  "key5": "5vGdjFLDhsF4q58reSUyKqgaBioxAhQotQEjMk5gqwNcTrjmZ6EujBav5Mgv2Fb21NsxZrjvSnMYNueHp5cVwXov",
  "key6": "ab9Dn23E1uQTGPRMpm5wEkURz2EDCYivaE2LdHYm8Nno8o9RCf3HwwAtSZEvxovqXtRSWyPfMgBZHjUcdFwThr3",
  "key7": "4fT6TAvJvRnahsYVZyaCa5r3DhyhF97Up2nbWjsmXb3HwnH7MaxEoGurwEGdBig3NNUYAVX8nFCPgQHX597LmWfm",
  "key8": "p5SRcxfk8iquznjsNmqbHdiRUp4jbTPv4x7mkYgxKgaDBv3FQsBW65BmwGBpVpeAa1uK7fhg3LomwdajLhEx9Ky",
  "key9": "3agyz7r5unro9PEf7id6ReJqupQozHiDSXmVUAYvGU6eAvNCf9ZSqWCAT13HMJfrjTnc9YUqYdoeMidEa27pD9kD",
  "key10": "2KxMdq4XyJhRXjs8WTHbhWA15Tfzzhfcyw71p4vEVAhdmYAo51FDKNsbDg8p5pc28sMeTFxvmCJrf31sTbupfVK5",
  "key11": "3zk6rTkstqbkxt9srNnG3P3Kt9MhegpN7gn4cmftV77Q7Ju2DXfQq2LufZYegYjWgfmFZQXvrSzpqrmmqoRbbdVt",
  "key12": "2wUUoXdZRYuu4faJQEfYPwjpjSA1K1ZuVkmQPUKGxoqFyLC4tFd82ea58z8wtMpkwK1ik3dhXtHLVwsCta4yTiCR",
  "key13": "4h1fxhTrrjQXj5yuxQr2qig2aScJjG4AgV3fD1JkdDCjUndpjBQoguqzJKnC8HXnY9yZKppf2n9VTDwm7bSzXAjv",
  "key14": "3xHPJV3toAtvZ4zEghJ36vAMkwBhbk1KkRqBccYR6AshzyKEQmW5EZzWscL2arh92YHfsHB53PcbMvoDoCJ5PbWW",
  "key15": "dRCPNs58VVydxA1DSaro2r3HVBaJe7Ep8o6eXVZQQmRVgbg86nhhimNvDWHAWis83yVWKoKQuN1HLxr4fP1qaDt",
  "key16": "4MM813rm8w4XwJt9BawGkXiMfGJ5RbCqUvCMksDAx5rAjP5eFtqD9wHm4xc9WJ6N6p9gaw3Hp2H87m4f2RF3XQWw",
  "key17": "5CKBtta4rG46p5rdSGSgkPR16E9dhRM1VKEL9C3QqWPZVfFvVXakhoYkJDhRassbTH1tDygDbQi48djnBea9QY9G",
  "key18": "5apMXZmKBTcXQRwqZNrzmWGumg8EvAsCMy4rEqvG5HXzsh4HciHcBJzf88HkAzGUS5HpzuDkSRkHJFQ5WWCDyqpq",
  "key19": "2fpzpXL8kQ77uq1sMN6kKTV3x6poR3A6dBZUKpzZbx91LUkHoG6dLmGWkZJDzxVBXR8JJeeYV7m4Lqv5eKdbC4Qu",
  "key20": "5YC6nR4rxXDKvCaQZ87xR95NvjX7B9mZJnxhoHo8LbA2NAH5PAdSFwDRiVx7Ywy5SiufxSc4CrLrDPmZm8JMo6aN",
  "key21": "26XzqjqSh14cmsmJcHtmiqYqvBhmVZBwz2bNWQAFEdmQj9xzU9audj9Zo9pBaFnMrrUXPVvnQ3rNLCoGRtKEp5SE",
  "key22": "2bR7ETUnwSoo8NCBJCGL6kiCGApPRzh4JDQa8Q3kujjeuSAj6eGZVPvCzMyP4ZKUb9zv5MjWvDatbbXDznSnWCgv",
  "key23": "5zmrbKh9y9HLubSS3T3M7mPrCuiLJXg4f9kHzBZR931F8vbv1es919y39UnTzmUuwf4cGZtWReLuTLZJcvyYBiBV",
  "key24": "4yNvGgSUrKcJzWniiX6TpeNJtxcYp6nuZo2xWeANyP1RLyWEVqfZ7Uys9s7hMjF9Xt7bZGJNoh5byByx5vnoA296",
  "key25": "XPGptrHCsVLX79ocKmELbAPjxQCJNU9GXUyq9nmK4m4GHkKURN8sdMdTFWitDyYdxwEcJKzfkyoByXt2cnhc7m4"
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
