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
    "4GznVtHy1aFW9nd48Nh9gd1qE64R9qsihvBfYGu444wqoMMgHxtgzno4Sem7FQK3xzt2cA8JBNd5CZiQ9TYvibXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xfn8hn3M9UoE63rEMTnCJavFG5hSmamkT5zXtMbfbd1KmUasyH3Z54d8URGZWFpNVbYLyv3iNxqb7d9en9pAT7P",
  "key1": "k1npk7cuG4pTYeokVgbWYM32s9RBex76AbmextrtWvX4ytrM3KDqy1UiRR9ASG8d1Y33BPUBHerPYXhHWDi92Gj",
  "key2": "58UnL6hkKNjW3F8cmsp3jH61np6HfcAjQwF5pDKq7jDyi4rnh5DibThMNNYCLFeLAACzzDGLJSELhdbeAtngRPnp",
  "key3": "33mXimbHQgX7hmVnoBPc5EV3TaP9wcVoT1ejnx9EE2YcWKtuuDk4uvwbCvfcgqJY5sETziuCtnKX83afGazRqVHC",
  "key4": "4uyXQf9FaFQvfVNiW8gRa2m4dgusax6Pz2d99sZ5DDPWEXgX8my6o1A4NSDLjr5qJsctyufEPgzyqSH5yJGx4MqV",
  "key5": "5RGT7y9UdqLLDWx7rvYTnGSL9E7QoqPZ7BfHYnx4KMxpS3zPGvpg1vyqMNiUqN7i9LyKv63QcuA2tKiMtZs9ms2v",
  "key6": "5aTT2Bt5JWHbNd9CVZ9yiXuLctGYLgyRCCRRqCa3gHKuNbEoKriEMAvMqvkXP5NZe3F5HNXp8HvtbDUjViNWCdn8",
  "key7": "2fzqRq5GFU51mtzBiG9SGtjzAnZpWLyzgNErSxP3poX8DQ9PQbKQHDHumqHxjLCNcJys75GiwmWTYzXHFLb5irQX",
  "key8": "4eU9Ds4rFfJzQJTaTDpnf873zhAPwMixi67mqibugmfdVCWcWN4tFUZFBgTAPQ7VJvSCTtAAR7wPdeGoZrnJdEPn",
  "key9": "2YVVuQCRaGNiS8aYz7UgE4DMBHjjUX9vvfTRoWZfMWdHGnPE72cgb1iCizNvW1NGTzu5eiLYS1UMBqCZfi56bqet",
  "key10": "2WGgitPk2g4nmsZKZpSwZHD53KGeEzWaQixiD1dWYdbmkU6m965wh9MCW7Ua4bQUP9gZ9GJjD71eNi1CnNPMMff3",
  "key11": "3sHT8C5H47HfzEnoHTHZPUj7fzGW4La9coc1feD3ZMDgRWrju6TH7yDZDZDC6LPiwXMdSoLqAUUxvcNX9FexavCj",
  "key12": "2oSPqnb2gyxaK7nhX1QPaWB4vo2tgnyxUq5UAB8yVTFp9JmchMiBGgkeEVSnigfDuSCvcaBGfaMc4vwTEUc7eJTz",
  "key13": "2eGXL73cPTUHT4dZMdgXgZDHLJgpjEGGYzazqQFZ68dpLvJcN1QHAANGdxDeao3rgV4d3JiWQC2TQk7bsyCwL9nQ",
  "key14": "4mHq6P9pcQwx5NxwD4VBWc98KSJzQd6XH9KQbD5AJnWTBVobAuGhX16y473wPHALvSNGYgCPWZnTrWbYcHFph4du",
  "key15": "5kUyPPygrzcpejWE2pXULKiEh4XYCqvtk1SN9PqvZ6G9hFSoTtCZGCGyCDm2qm5m2kFQq1NDHUsbReqn3E1C7Msh",
  "key16": "4ky2uY7BN2FrAkCXgUm64sCvHTP7fDQvkySpEEbtWKDutqcuHBY8f4Z2EMrnMCQ7Qm87Gt9fqHRrsn4iL4ti2P9t",
  "key17": "2q1gNb2mJMsxs5DgRVk5p13Vyk5UpAbRQZrCHCCcNqx8WELrb6PMozSZoorqda88UFeeAo2dg52UmHZtaVXMvCgn",
  "key18": "3UczEZGdQqRqg5P8qjiyGNpTuq4QQbpJvbN6G4sfsdpZvkuUUtTwPbj4Azt5Husnr8yQYWTXaY8yy7qHYr2AwTMY",
  "key19": "5QLFeAibykCqnv6rS5CzRowAAB7u3y2w41RhTp3aVCVfVdbdeT3qSQZwKZUgULZ1fY7JPo8hHGzQsfLezsYqdDeC",
  "key20": "tu4fJVY5mds9ck2gwdorf6musJGNPB9RvHAULexDqw4NA2XFVQtXpj7oz7GAcs4H7Cip8gSXnfLLxjL6gJg8jgS",
  "key21": "fAW7sjyb8CwdTW3hXgchBXPxd8SzE1ynPaf6DoW1pug6Kwe6KtTryBjua2h89K1SKPQGdLGJx2S4W4oaARwsxkM",
  "key22": "2Vh5zSBWB7k9t1FhjwW1pStuEL74qt3q5vd6DMm6jbWjBvACGzvxR9fJsWsnNMsXRghS48ZU62Eh1Z3PuNPfMLJK",
  "key23": "4SJBXVis1JrM25sgc7PjZ5KYdNfUvXk5ULxXMZmSnuHgQvMDjXXJpumvqjt2c2MGzefq7urdxMUBMzD8HkhbKZfF",
  "key24": "49CNoZuoFYHrE1BZRWCiNhKrRhYCChBJjqkQuHfqZ1SpXfTZivc3Rh26jtbLufMM3UWS4WFMJqwETNeezD5Gv5Wr",
  "key25": "2uRJrYL3NrYhexhJNEGRAoyHNGdbt4s8GTTCQQfscZFV1Azh3BdPL5E1QyqSyhoLJA5fhYSDd2xmuTSmSRGU3McN",
  "key26": "5YiRE1JMromNjDQ8MFQ5vE5JX9SmxReM1cacZPE9tXf5aK7uy6WPQuUWYcM2KK63peSAVPZT44HZgWM3cma5TJVW",
  "key27": "5JkcmDckGDnW2z3swnpMbBtQ1aBLmRgJSPLvUCHyxLhWUL51oUAXMwwSdeNsYDdUR14voXeLXfajuiAAZNsfHhkW",
  "key28": "3eNgNEY1wUcwgZyEYVnkyTb8RUbvZsZhtgjRMnhdZGExTp9usNuprKav9TneD5rzMDLmi7VMP2G1A7L5usdUEJDP",
  "key29": "387Psn15e9qzKRhtPkBdQf5U86jektjWrSfR21d5jm9uTBKqq1KYxhKsVd2SQQpxXTjfhGwiup7o61rZTZVYrsHi",
  "key30": "XEYp64jkKJJbveUDAwpuLSY1qJxk5UQ9mEPnxFBfsvKNAYHmnSZTDiowYoGHZWYJCpssJPJyMDtoP2NcAMFneYJ",
  "key31": "4uwVZavBqNBhZuyFf2UR5zhTzrQGv3RZK3FwBZwHntKsSP9et7smrMWUWQjjqdufh1PVBJJQvWLu9K4bBQmYrwMn",
  "key32": "3YYcZbvoE3GTgbYkNT32Afm8W5Vo7YBX6roE213cuiSCReUHox4mawfxhQDiydSPbTuhMUHwgdyS4Zy85MCiHspE",
  "key33": "j5inTvpFGUcvnJ6yhbi9ZANFvirQVeG9BB46qApz7CCidXEsiUzqjK7dh2LizXdMZ8z1osBUyQiH4o5DTW3Z3dU",
  "key34": "4aeyZQnd4jXvtCScSLkdAQEXW9dg13UgZ8d3AwgxBaqgvWYXNR1QuDYcyzBr1W8tRUHz5A4HSh7xGV4pZv3SnzQJ",
  "key35": "MGjXz1VEKQxpYL2WDEP2H35vbKLhx6kxbJhBChqCjaS9jGDTJn9VA8wX3tLugY6y2vbKdRguboRVSmkEPc94DGf",
  "key36": "2wxyqCKTPCCMbas6FrCZJjb3AhLSei4LRCVhC9hDX1eAUSvXs1K5AmcEtvVWV4cXJo95nKZwu6bBoGdwzFFpEewX"
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
