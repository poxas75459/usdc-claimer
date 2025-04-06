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
    "4mTuQdypZAgnVwvvbRXi8UuhE69FpYSe977H3QguUbWkyUSMuT3vKiiSSrKF7qUpP5ETJV474z2BH6wHf6WSepSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Teti3PtSVZpzaAwWA2ugBLfEvrVTacevJiwreBTjSByrxyns4oM5qAjaWV8MkwMsPsfNe7Nd9AHMWYLUhzqJ155",
  "key1": "2Bqh1zyvCL9dXMe4fM7ojrNvhsEK1D9YDc5A9BxEaUyQcZK4Ugzks16opxeYDqcN71HaEciRt3Ftk89MqDVW55f",
  "key2": "2dKZNyWkcn1eUxmX5xBRr8Jj965MwVTc4dVUTov4VuQQrd73hc36puFdK3Xh2CexYgG75wPkfdZ1U4StKo1z5hEb",
  "key3": "677LLpFDz1VdDxvmYKcJAQ3dwzQcNoJ7yvRXFWmt9JY5uf5TAFPMNU5uedbV45ePLjUjxmkJKBn3dArWZkxtbwLk",
  "key4": "96pyVPrGFbDiQcUMsiqKt77TFxqy9ANA1B1U1aK1rpQuYan13ppXEXQUxZigFPEc8GrqLFAbAevxyuPAKk2REuS",
  "key5": "3MtKnRtda8oQwpCeYp11LYYhj88yq35EfLYxK2AFXW5AvxF5RhcGUuhSKrosVb7fjgsyWfr64n3HXft4gWr4nc2F",
  "key6": "5oxYaNKweWfob8NJRRc1qgih9Xzz4pmn53PRXQe3yXvXrejsiouTDm97rsBfLQD6Tkwbej33nvk7Zd2a5DV99jcN",
  "key7": "23DneyYUfYGzkRzhrdRRYMxzGMpKkuJcP4EXMYpjAQ4V3SAHTb3QBpi2LKtZzoCD25tdGdFURMgpUi4JgAS5EVsR",
  "key8": "25ru58QHkNE3wt7MQdMeh81VSzrVuZCgDBrXnnwx4q8LWEwnkarF8GshqsrxgKNe6pg1H1wp7YWpbrMSdvRpcWuP",
  "key9": "32ZFvZa8xxTYMs18vMjWpqfpFsZGNNsDwSUohMagP4JDPz23BuxXgiAfyGPvsQCpG6kdM5NmhFQAxwoqFYyeYCcH",
  "key10": "3VSZ4CQtW72PXSTHoPy1YJbokRi1RfDY7o4XP4uyK9Duhqy5N7r7jFuxiYaRk1oQ6r9FyYb8ikZ4MrJ9N9gqSfTf",
  "key11": "4PLbDF57PGH4UvET3YCrNMnjrSQ6hm2zNjxugRZdhaHjKRsrxxAYa2CGRgbDoD8snMbYuivi5jHUV2PzA44qWhy2",
  "key12": "2JmcztbrtFu3gRkzUb61f7HrH2tGUKUQEbhuXZMaQxBj2uiu2mjj6KvjGVBN4XdeoSBMC8yWQcwnqPjtP2juNKyC",
  "key13": "LHnKeNX9gaTE4EY2Hoe38aeozPd6wM8JjzL5n1JaigxauLxLwSJG9um3oLqCwcGR2BwsydYLFpDPsQZdjgjDqrC",
  "key14": "319NMZBD2LGHrYdyk5iThuz4sGdYKuNVRSDauPVw5FMa92Puj4z2VJTkpTF88jY2kSak5RbbzQvvhAZrq5TFuAuU",
  "key15": "5jN42KUKVTP2xsJe8gwezh5285r9yPefHfThRT43V2xdTj6TJ5jm2Hyt6yn5SYrsuj9gZvmjfPV7oxKHw4EGAH1r",
  "key16": "4wbQxvRg63j15tGBKF3bmWKBJntZveu9DZx9oHdxqU7Q32SCXeVEZYz2rjR48W6dPF69aPThydtpc1bKh7R1TqLF",
  "key17": "4Vp8BuahX7DLveYyooB85tRx3AqTHFUMywz8FUsjWLi2Vu5TKePc5t5jN4hDM5Nw1nQ1zKj3qqfnupiKEYGRHd97",
  "key18": "4KHS2cMbthRLZHbQPTuVSknhKrXTf7DkVJJhtAGRRUECqGsq5DbNFnBzcDt2pAMyPJguHqUJ4epCDtENBAMjZRth",
  "key19": "57bssWw5aswPYPCS6gXZk4EykCFNc3W1LkLFwDWNMvLjdRBAiXvy9brLdgB1G3Q3MtiQV4oApmitVqbv8AJLd5Ww",
  "key20": "4wHfwGPvsCeSUdoweTAH89Fo6dgqwQoM3geVv7Ef9U6MbRpjnoUMyDBfxwx7n83Vq3Vn912u38m9ZkhUTo2iwn6M",
  "key21": "2FszV9j7WneRWFpt8yao3e35CyhJvarthHDkJ1hzBbGwTFzuLG6iBjrpw8fSFXEiLVQoBG9hYjEQMVjQaZZ3s6yV",
  "key22": "4eEaKJqF4UM1R5AqkezpunbrDcbjvrNu9KhgRXMzcDxQNxLFxbbejusqTKFvAaPU5FCWD26vFmE8SAAw3bXJWKor",
  "key23": "5MCuJ2u2zpW1BkYrjoCEgFKxyn4pANGUNhpT92D16WCEkxy9BzjAxR57DnnhCEYzeY8VUheQP768j1a7jo8uLX9a",
  "key24": "4Jc5zPHygRaPRPh4EtsBEX7EmG74oVFLcqPrzy19xzyK9815qiD1z1fdZh1VeKebzLo8otCMgCZdyTin1rHuLKt2",
  "key25": "WeX6MXiQe484Jt3Bc1Q8iic5qNungtbhbk8fL5LMPEoeQdVMZMcQXHpvi6YQNQHwmyKxg7hZ9o31sUx4wbgXeso",
  "key26": "28B4hggqjjUChcK4J6VJRkV271rZ4QcoKxQHWd97VuBmMZKpyzjSR8eGyHTGgbP4fn7Ua3Q5FDRKmv2LCQxeX7Kk",
  "key27": "NjX8wSfmkc7eHJPXTdh8qSXZwS64kaDnUUpiwxesQhzRHz2oEpZdse4YFuCYJf42dMPgNxqCVRoJYU9QUCzwrHg",
  "key28": "6m181nNq9N1X2cZatDSyHBsYSXbCeYax1ivqT8USWEkc4Nbuxp2XP7fugtXQMQZqwoDB9NzV5kC1yngvxBSdoBf",
  "key29": "3yXJD2CosPScWYKZQ5SiNYa8QGxE3Kj8pr3tmZfksZgWVh66fqEHsFJQX7Cy2neMHojK8XCFabvVpTFnuaLZVw4Z",
  "key30": "4ymG5nJkCmPocUZywd1EkUzP4dxVSPULwUZ2ZbfBgQ1hgCoCBRpNoejwUnedfcTB8enLcnH5qPcU5vtW77GhoxTC",
  "key31": "3o2scfhkTJiUex8pPwHGDbtZcESvXXbSJA1Xaeu981z3so1DdF9eTdhxR79WmhYLoSDKx8zdpnvvXBSA5ArFJcjK",
  "key32": "2APC8d8EhExA2K9mxqJq9U6RBFAjvqY8kjzrFjnPTJa81bN1UySgYjrJ4GFihnn1bqvhnY17SZWVQNM8St8HKmV8",
  "key33": "qyUjCmMCq8hH4bsP8gN3Zu2UbxsN2USepzPF6MRaZpHwxgwpL3W7eHH5TSnBFbahyZ8iizsTmWzHV55yrRa9WDH",
  "key34": "3rgSb3UvdzH2WDLuPgzhAjkLPNYeJmTjpFF7wGHCX5AGDHK44tRRqFTJ7YDPxScAbzuZ6zU1t7MUY4mFt6fLyTmc",
  "key35": "5D9cdx7a9XLUbgbimTUEyGMsk62VDeCW5CcT1K1aZn8bKHHZ4Z6v8gnU7sBYvokufG5zb8dtuEXmUWtUu9qz4ioW"
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
