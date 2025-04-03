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
    "4f3WQBvMTPnLJgd65v9uMa8aXxZptdhgLZCicP4ggkS9zwovRU6ciBfZd5wFjixuRLFKAbmLN5VW3vvuNWkX7iGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfg89hbrWrxqbe1YcBTDQpkNaaHoAEDbXKM6FQZGr9mqG6MrSVgnbLyFBikR5BQnNeF5iEyeffQW7iu1e7i4ypv",
  "key1": "rtaghLnW7v7SanphLuEfcKYBbQXNLGp3A9SeofvHgjSdisAevNj3xLUUyFhzym6smjCXsRNrLbjf9Ci9SuKuVFq",
  "key2": "3wxvkRNmKcfpDupuARRWthxw9sYQNzMtFD2pBXNJfFosKeAvE3L1dvndTN3vvjHT9KvJJQWwvCG8HJDqwctjXnN8",
  "key3": "5vTb4jauz8tcv7mo8623kaBf21hU5rwQWrrUYnrwbizZqYn5VirqjLtuCYiTCtsu1JqSmAxuf5W9uXjAwMC6iZMg",
  "key4": "1paEoCmY5k6x5xoHmQp5nNnFZoK1QKWqQKY6n3WzZa6AjJbPaTtvNxhrTXbo2p7Tmae34PRPGpsRJKwkiXBSPyh",
  "key5": "3g84BmvFejfUV8U4bW2PL45AXbzZ6q9aK7oz5Lk5PYfGyAL2LqnKAiK54yh4uzk7uYArWAv4JKwY7rjb8KjNZmam",
  "key6": "77qdi8js1sjN55LvrSBYfo1uBvcTpDjyq5aDsnYfgZyFvywHtJdnZv79L2bPzi3qDGUv8CHMoGkbKhRBAZX6R29",
  "key7": "4jC2YhXm7LbpewSEZxLAt97cnPR7szXuKnLUeEQ1UFSUSioN2zer6NCxUS8dt1j7hPr6axn8jHhfsRpLjXWSpcdT",
  "key8": "WznSy877sebhyBfmtojfo1NLLj7ECzZm713bToCspEppTnpYXiDRuSyMrJvFRbe4UpJbLPdDJrxiV8PkNbQdYnX",
  "key9": "tgjj3z5SmUw2MoewCrESr4Cpo52wjWwwtSpsEhS9DjvbvD55a2YN8JyZq4zJ8wRtJRCr7FJFMMcBquhQK7mC2yx",
  "key10": "2J82nV1vKHBkkeHzDhg9Dzmvm4s5dqxUjtEjXNtxpMjwBD4PJUJjPhroTvqXatbifWvahRbCkotBVU4hntLTkgMq",
  "key11": "Ey7uQwG5WUjUkYzLP2VSpTUZQSgxtNE7gkPJVmdpqDPpeHU7sVzT7sWuJRBb9HNHW5vmnjp2vRuJ5HBGR3vGoB3",
  "key12": "59o2EqSFdoYckyffVu1zUjix7fj7yVDKNaAXLBUoavRNobs92xrZofEF5kLE1bTVGx8UEYpzDhfUrwNpzsnSbsKy",
  "key13": "2V53JCvV8kG92nRj7SGVQq1rz1VhS521KSyqpMujPXMaYQos4o1UnGXP76oikUX5YFFMvoXqp3ZwsS59pcfygr4c",
  "key14": "4wkixJUcZ4oWqFqdvKrzb9CpeCLe6LE81FqaNSSzFoCRftamBm6HAPFNWpm39gYKFYngue6TLzvkwR8hgPCf6VLw",
  "key15": "5yozKfiGCmBj5G9Ns59sVidN1VEPxLY6D8AxBuvSizPQmXqhykQg3Jgn5xMVRhr5HZxXoxhXzhJzsdYtreQJPw9r",
  "key16": "2s7tacXfw4Y7FpUAebor6mKP1LCDWKHgeP4rL19H4r1F8gh1yBsPV631Aq6Ph7kJsYtSx5W2FtFWaimWeESDpaHE",
  "key17": "3XsE6eq1AnyySxwWLY4UVB1fEPCo6y5ocSWscrbxKMKLDhdrzKoYCfmtkDgTgvf1uEPHb3sJn62MSJUnbWBueMLN",
  "key18": "3wiXFMVAU6FKKAFFT3HEqwAU2LGyRwMESq1yVQx4QE5HzrmH4Xt9YuuiNMrQdXZNeqU5x6NoCgjeqKsTzJTVbxtC",
  "key19": "4yyawgB4SXqRk3bC3bV9eMP2o2S3MK36GamvNtTQe1iTgwtDMP9GacUdpWppUMeVZnuUN6fDjNbnCBobxHQzB511",
  "key20": "2pzaUquHr6RbwcNx6EaY7oSL6NGBzJgDqbzEkj2rdNng6FFsAiJUamfqkisfVjLqMgLyZJUmaazNiZRsfVYJf1FJ",
  "key21": "yHTYEb59ew2ApaW8v3WzCWy5eX3NLK6QjRn9AAkbPRJfmdQ3x2FEptoxYd9SNdGyqN2JYchfwninaaTqSChqzA7",
  "key22": "673zULiWmUY31PZx3roc9w7NMxEFGUhtn9jG5jfPujnYZ3jqY8mhmEBehnBwc7CRHmru4wPP72NsTjPiqU7jTyiU",
  "key23": "2pM9H9okvHRuTF3x13ZQKyimkFvUa2uLdxU6AMXgWQsSYMtnq1zrC32YGxX48K5Zetp5V2ELQFmxiFgMwgjT1s5",
  "key24": "2UQpuqkfQJwVmdqAFGKLKRq4xoYQjitbKFT53egPrRLb3KPEWiTD5KsicPuXHHcPHG5eiHbuB4WQU15TK3r6oUxF",
  "key25": "VTP3LHTuxgPxwH3qssg41qNfsiVDTQDVC8Gg8p7Uof19vDJdAAYQd3ZdzzDNhp1pNGG6FLaiPfzv7HHYdehxTwg",
  "key26": "4HK4Ps39AErrnBvYttzdNWhU1EYKxos6RHcQemPwmUPsyRkkKDWpwPuU6XQF7mUfc4xNo97dP2a9rxA9fMan58cy",
  "key27": "227EyT9TH9pauVEdoDzCkrNqnUtnyPZr1GuFVRMQZv1fBWX1EMK2nwLJWw4krrrqZi26tipb4ymRb7mizma4e7Mc",
  "key28": "XEAhjSJuNxHxYDDAoUwSix85rfkHWWwSLBvcyeUzqHL5XKPj4jRpuhqwtAvaknJEvY5mWcmLFwMcf5nuwRLhG1b",
  "key29": "3Y2wAe3SX4V53UGrTGCKJuYuz7UGz8WfpajRNgnLQKnrHbjczB65LCcsEpAZ5VG21foK4WsX5EK83CC1VM7YP54U",
  "key30": "48BBUK9BqSHXDsaCPQ3uxTxfW2nc3uWBBbha6X989DFyPgst3BRsKrECMuYCEvkmuo88b6TMhfuSzpmMNDW5ywRc",
  "key31": "4StooXGCSarXpEqvHKbhEXuCSkb6RAdfpRSPgHaFYJVepenhaAA1HEPoLPHUuuC4LJ1pAZ7LTEQJA6J19FuKVda5",
  "key32": "4QCTcKxgyKG1ieLsy3sm282TXs9ZXNJDHrFUqxLe6siScmZHwAqPZKvTJwj5EfCP5h8exwYwG8uqo61LkedQ9SkE",
  "key33": "5fXooGNygARhJy4jf3qWkjm3fr9jX76pjryZLR6cGxqgMpE8ofVve45WnUC9JSwxGxoxZ3iZfwY8DWeQC7VngWGP",
  "key34": "3cAGHuscytmo21y46CkD3tyeHhcQUasQEeTcbjB1EFes9j6i4WjZMiZW7GDNcBDQ3hPem1YiDA6kaHW9v3KTDjvx",
  "key35": "39nChYtXxXPo5bnrb8RnhMaynLi2FxE4yNMb2WpUyAC5yA3rsj7ghs4B5JKBPeDUWMRyyLiY1krku1nb4V8adjpf",
  "key36": "3YUweqZrYLn7k8ug7CV9QoJko4hZmiN48EAytt9TnU9Cn3STXdHR4Ghn1iLZqLKcbzHPKVUJMn2SjMEgzkF1JhAn"
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
