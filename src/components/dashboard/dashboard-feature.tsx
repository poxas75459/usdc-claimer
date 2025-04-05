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
    "2zx9Z1h1tpD3sAJTq1ChVYzs4KQ7NYq6FfLYtpivKgu2nMx7Zg3kMEcML8iXc8y7zL88159518ZmBeNbD7DqyxwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggQrz9R4rse3eWjfqze5PmyG8prQ2MejqPvmzVXVVTcAqzjqHhixNtV86YsEtYQGAWqrsk3xEXXAYN1iR7C6dpU",
  "key1": "4LcdZvnWDErVEgHaKiLaabBkjTFNXJvaeXCC5pGi2fJknuV48DScFVdMhkyFYyWvnQHci5csPExpDztwHmJBVWVh",
  "key2": "2vL6B2kkajBAfcBgbRszJTtGK6J3SJNdz7RTUiCxmsmfjw8ebSJbXv9W6WAMkAk9ZPynMbv87oNgWywHJCLj4jof",
  "key3": "4DzrZAMjiJ36TJ1b8N8yvjhxWuMZUAht9ci1TMVTcTphbZ86dXAKYXCGn3YfV7UhT6DYRJkbJczyEzMxoW2qFPWT",
  "key4": "3egzujX6Gf9GaUTVTSEpptuXRMWxa5fEHf4LhYQZxE8FfGM6mmEFBAcXWVouc2jjWdKrsJXcCHSwXqbYbXHLXRXB",
  "key5": "3JRZdoKXNZS7E1d1VhQCDQCqTCwrykn9tZbrsBUb8PaCHN97WmGHCesiDGXXe1PGSYvLVLbCj1EMdAig2b4NEz9v",
  "key6": "5xm8qvupkudYfAv8hJNWWpZ51TeFnqcC1e77ytey3Qh94hR2NYNDjCw6rZxQatpHJ9VRpr35tsNcgcNsx7XcU87f",
  "key7": "3qgxtnGmzXvL1ceJoxNWWU6EymiCUfPnW9h1iJTMLFvkn6jsyM1wNeQRCnnW28FRYSr4vxAqAMN3NUHzBBBqypeV",
  "key8": "5sduMZE8oyjYRJ6UjE1u1HELAsGoVnbzFYd7d2MqwZgGR8XfuxcHe55HoKJUiY8WjcyYvhKN4FVTsZEWNNJUmcNb",
  "key9": "AszBgQKv6KkkGL75xmT9wbPJKCVACbfRk6h2SUcmgWqcuWgtWVT8tHheTa8g9f4ZQJ2489sBJmwekCD6d4t1xCC",
  "key10": "4h42WT16u44uLuZobQZ7za8uckY9rLgY6XVycKDdNA8zz4hhi1mxiFYCqhzDgEPgR7MAoXyJ3sJhxNw8NP1mWzyc",
  "key11": "3B7zCyeYhqYoXP7np9z2zwnbFS6UcPLxgR3kTaAjoPukSr9ZciJBux3JGACkmcbN36FYhE5HYd3ZnaRZ4sjzbaS1",
  "key12": "575QjvLMGzf8CPFU8t6ETqeFm6hf6RdHe9JBxYKdxXS6F9Ydpd6SbCcqkgqbDvoZrp69aNxen1ZFmQpZDS2KW6JT",
  "key13": "2AVDHVrEHxr3Y8DXEQprtPUKnmPeVNWnfypN3hsiN6DMpzoAAYdZa78hFhFuVGPeZKCj5aS6kaNqM7Km3YqmsX7X",
  "key14": "4ZGEDkA9jdnxXaGP5ykHXm715XVWEhvRZbzVH6chHMompEGhsP4DtRyBruBbjmDN1ddPgMpqQiNFmSswLnsuihHg",
  "key15": "28KVZQDyXM7htd2nQwem8vszbs7vBBwopvaF7QigCp7nuKPXHra4M4i4K2QSH6xjT3rUu65rrSkpKn35VgELMNVX",
  "key16": "31eDXyWjYov6oZ6qwjVrF3JczKzNZ7N1jq23ek6z2eunJwZR9XMRcMX5s5D9pcGTLhWmqHV1cxc6BfkakvuufVRa",
  "key17": "zEWwKLkJoUN4zeh3DyPP8zfYvjhe2yytNJ2AhLuFrhsuBoVQ3AsJmd4intBc92K1jkmUYTRs636EAia8k9DNF9C",
  "key18": "5jvrvL5twoCN7hS1wpDrqSXFcEKr8axGAFCYrZSgqUBDUPNYkW2sJZHbtvUVKGbgDZNptaNbn73GCwD7HiP9yfPU",
  "key19": "4p4n5roM75mCySumGV5j1Dc2YzvfVn7r41AxfvwoRx7pSXeGSS8vmT5itMFhxrGXnLrRGujf6qLUv2LuheYY4ULo",
  "key20": "5ztsHcLv4NHAfZMtTGc2BEzTGih1kByDHQfGgG7J8sxSetcLcQuzaUNwwU3wJWDUtLjLpeEVAZZfEG2csKySQWNg",
  "key21": "jPZB1ZCL8M8kQWCjiUmSxye25h8zVfL7ZFfkyBBpEyTts7sD1mPxuq7z3VMBBJ5p7A6vjYx3je7FneXtm4gst3r",
  "key22": "5xY9EyqXc3Dwn5abujJFnpo5xJHjhhwxrhXipbzxix1tBzwW2NC3RCqdc8X2bgw1VNqjqToCaUtUENW6ieRUNuXy",
  "key23": "4BU47ybbNR4HhNHWEPCzCDXEytsEC3adhU6vprMjBcNmkmUv8TRMAwZyJQfaNPtFAra8uewpgsSUzwEMSdHEw5qF",
  "key24": "44eM9Njh3823p5cyPu86W89giWcbtbMBqj8z5LCUAsyaV7qjSkaTVaQiV7RCi73B6ScHU7zNTMoetB754Yuyfr6a",
  "key25": "4P4UTFzarKk2cfLaxGMyQXLVB3zwoJpmufX8VmUApy8fGer23awk7y1C2Kx2cK8hD82CjZC2hWwm2VyxRZ6tRPah",
  "key26": "4pGnPriZR8G2SeHB6gqUdPBaXbNmzKYC898ieUnDnC9zoW6TPKWRUj4hfBX6ogCSMSbACBNhZK4jW4xxXmF2hvhv",
  "key27": "3i11WNag7pKgVVAbVy1rPhy1LNmzyuaoDG21dqxKbLejKbQn9nHvwFuLv9FpdAgxecqKjKbRVUBJMSAUTyz8aast",
  "key28": "HFYKeJhkmjrDxKcmZhvLNeUgqadvhtA6eDVAVakFowmSnp6y8mCKvwyZdsJxRJ2urZruAm4bjePA4VEVepbV231",
  "key29": "5pw2BRS8ZXKpMtMZ7NzSdv383m8MaRnJr5Gk8Sugv2XsrhtxibzkyRPshe4Ep8d7eSgZQjHobDaAD8oTnNw38hhB"
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
