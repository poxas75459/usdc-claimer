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
    "395jRYiV49VtV6dNfnDFMeokz3Z5WmyK6uTmk2xL3GgyVpbUZ1TCHkokRHgCf1BB94wRX1ieVLiZhRQNKKyFDu4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzvrjUVYvy3NqhK5HuLGDZUFEKddJDQzQzd3Epq1YFcCuMnz5nHXvNnz6tZbLYmgpEP66ABCPKv2ES7ECC3LuZK",
  "key1": "GS1ebXtWkChHTUv4bH2ZpPhGnooVa6rXAfMpNGAs15BuuPpoF7DbX4Skxtp4sXuQ2HC2EK9WDFi54uWVb7r9nuT",
  "key2": "27iZAKDovrpHRqh6cdLyLT52GX1ZhoAcpH4regL9hNBhSndkEtLUmPYvovKYjCT6fBmf1WPRzmJgpKMEoi6sX3Qn",
  "key3": "5tgfJeATQPspynxyHbpKdk1XjZT2UzcJtCSbKfFFF1dfuo8mrrN8ZdK9D88GHyAnJ1vU1H6cUTcVoGBsPHCN3CfA",
  "key4": "2y7J3BKxJi7PHvuEJNnLu2jhSmxwbY2cBdTEmfHUr4L7SEhBdTQ8dZWdJpsnxkyGcxG34fv3AJFonmqiLaZg7Qfr",
  "key5": "LByjA1uaaFTB9b6sPZz9Gg5SPPyDWLTWTWB2dq7ThDndf3TyzJ5XnWAwbxPssx4b7xZCXQdgq4RbToa7WTADJgZ",
  "key6": "5nnTJuDCDRccuvnCh21PeQqXuqnWoBBUqUp3YYcunngPxutGvYiD1B2t1mRajNNNMiq6TyBkE1PqkDHPAu9bsED1",
  "key7": "4zB3ASaRcoWyAGSBWYJ5JC8ErjCRWn3aktCDLkFKYaJCZcdMfeUbjEaGHDer1kA3uzrSmRFLXunAqJAmaevWmARj",
  "key8": "2PY7KJEEXFU2n6RTPZHNYwmFiozWhATXkx6xbZsNyZ4RHrFGnakqbZydHbFmMxvshNhrMyAG2NU6oQu26oKtkrjw",
  "key9": "s8X1QsgifLEdrMJckXDLTvH9PCdFijbkNrPKYbpSTr2rnxKfvh7ExjcWKqsB7h547bp4T3vZ3HxPKFCMwu7GdSJ",
  "key10": "2qyESDNi85Hxn4WWV4Uz8zAtQWSWBx5i52gdFHWBbKbLoF6FxDCyz7B7TaTd9rbUGQyfhsVQwzXdEBSSnDkz2pyB",
  "key11": "39eBWy3ZXPNcwzxUKQAQP1rkuajwdouwZ2PyxqA7YZpxbMfqDaYKwJzBCGjKPJRD8rXPaNLzq3V5zU477cRxyjQN",
  "key12": "57T49kRgsCLd4rfmW78bytczWoV4Grvt5wjgzWb4oD852Eunh5htwusPaQsBx9TEc4pebXXtGhgXpCgdKDFB6W6n",
  "key13": "5F57LKJrMcnY7nM2Hc74vckDLys22UFz5PSRKy4mi5BSmFJbQAQR53orLqn6GUnUSWRN1pHESta9o6WUYnEFvtjp",
  "key14": "26mV8eCR6tDntFBogozVy3vG48Bw8UQkGD4PH6HoFkvvaXgKSrTgfmyqoqn9Keff7tLjLJonC72AhWy9U1rUJACE",
  "key15": "4pHGJht8ATFthAk8p7Jyxq17mZGGkyYkoxvjYdHan85zYmHnBX8pSNXuzcoehwPPK5iHCX8nKBdbNuQQ5ZafZ92W",
  "key16": "3DY3aGmUBCU4cA783BMouxXR4vAeNEqWbmPDgBA4dWXw5yENEacrJrxgZEbDziJgX8zAnKF7P4Uost896VMGxLrF",
  "key17": "56BVPgiajPfEsDF51jnLvxHgAnz9xmTcx6cTnr1WYEPSLh2roTYfNqFf9CB938a2dYVzEvbyAe1om6qe3kWypaZ2",
  "key18": "5JgetXanakbZSX8oSXBQkYL1ZHVYktk3SGckDP3pYiHwqbmuE7hz9aQ3YxYrnP4XDqTg2FHMFt7UU2yk22kRCfW2",
  "key19": "4pzXM18NTvGVd4pCH5TUYbxRzCPXdr6nf9TehdCf9rAQJpvzAmxyynqxREPyNPJGTgyH1rSjL7pKWnj62BhtdQTm",
  "key20": "2w5UVXf9o99kPhnc5B9FfX37rWejznQHYWLZwDzSkmgsyWE2FizXrukRrtD6kaTwPwkw4jgwzCr6v2dFZizpH7Qf",
  "key21": "62YKqCfYMqptqAi6irBoNs3ygcKZWt7AEZNTZS2unki7eDuidZubrQs24XmVfuhzD6YogteZV3no3Gs61UZ9SDoV",
  "key22": "sxHZSDVTYwJVn3TXqqi5JALnKRD7e1N2w87DBqQ1wCYLMn4RdvC2BfVBcMyZK33SdwBeEEDNBjMfvA8ehQUKZYD",
  "key23": "2zUGyDXX1nVAA7qCwxWgv6XCEbGA9GexRZCqfX3HpwMCiagKhP2cEnYo2AxmxS8vzhdcCfSx4TdL37Xm322WEeht",
  "key24": "59iZnLjwnAqQgu6gWtzCz75KbuwzfQ42vxxUBbbFA5cYWH7jppVCbQmGdjh3VStpKEMQ9DbREbTmXzZB7v3jJb3U",
  "key25": "5wfzmuvGmddpfFdsucjFTBmRHW1FXa1cTdAvD3M4QEo99hPEm2Eq1ocEjUy8bbpQDqShB41FEXSFGKRuoeXfwkR3",
  "key26": "3oE4KS6z5fxoncFBqziMMHW5xH3vjM7TQm6iWQ2EsRgRb7M2fEiDwswECsTLKEK4JFCBSZEv84uFrPx8sttWKWBN",
  "key27": "2QWsVGGXkBkRRRk13YCrzWz7nFAAfAD5NxLoXJWgCjY9NwCK2Dz3rP7uSWcjBc3RfeKeP1jC1S2nco3nN3nLUePg",
  "key28": "5SE5jo8vV89QvWJU9botcn84ypmsvtitTyHULAykQyaGCJoGKzLow95mqyYHSDGXqZ5zzQrJGLdSrsqpPhuh9HEv",
  "key29": "66UcmhXoau6N1Pwpy1bAVLCJ4AfZq8hDDsTPrTRDQZCJzZQjZgWzmS8gPZSsoTb34uapDYzgyUS4jk3Ry7bYrJM1",
  "key30": "czRtsZtdxHV5T7ca4eP6vzwrzQwWHwyKvMgtXaxVJsSX58QaJKxJcde1PQrcC7yB8rFXC7zTZ7AMu24Ukuh5CSB",
  "key31": "5GU5N6j5ThpU8d4Fj8H3HghSZcQ4wxkSxGJ6ToG78WesJSAeYFau9E3D8GY5SRE1a9h86KwH8h6bvtemQWU7axJq",
  "key32": "2GGZeTSDLT8i5JZa1Q3ZAi25prEVPrWy5cu6CwyJX62X55ZbZK6dCxUL4iZTagwDy68K3fFZysGWdMmvVQasWiQb",
  "key33": "4uNcmEviSDkNHEfGM9Yi1yLbifG94xNfF6MWTRoQFjb59MB6B8CB2x2Q6eLoF6qa7Kd1t7JaGQyEaKFR6RNDwUm5"
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
