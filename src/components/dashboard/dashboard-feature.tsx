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
    "5aG5X32PheU2bQekXoQnKyncfN3M4LCkKMRMW2zM9qXVJf6HZLZQahbUnjKVndPgHnmAuyeEuDi5nZUjwK1shbSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcANxvnca5fJtwjPu7w2jKp6SKhN4rViPUHfdQ5ctwibGDA1z72ktnr4HStKJtfYV2dyT8msB6tnKaJYwQC9Eh5",
  "key1": "5VHngyoovkR4UQ6LSKnGEDoNyPwXE55nB1CZtBsZ5JkSoafA9dnTrzFqSvx31v9ZUdB2XD99oPgB36okoJjYfgUL",
  "key2": "3GbRJoRbqj4p7cbNDk28PZWosPFcvwL6RUE1Bv5xtraywbD4DptB7V2cHJYJGKsZMzehms5WZ2YES2bL9A2m4SJ1",
  "key3": "3ZDKyM1fbiwGymmdnGYCmWt1eeKQovwjunxqRGEviQ37EDrASUWHv3nDp1Hj9Hwvn3s5HMCj7SXhihAA6Y3qQyBm",
  "key4": "2HwgDVDRD8DiFrDUNVgvf9S9gJmupWkjs2BMM6bL7kKvRXo4boD41aJ153zuoZEjmHX1zM9YYjKReAdaSYDora3w",
  "key5": "42aWVEWJGFxFWL3RSuoa9StoKdW67dmPcbz6egE9huYC5z49fCifCWy2Q3KvZTtXNobrKGLjvwK1tLXkUx2Xd6Yj",
  "key6": "4buH4GFzhnq4fNfKRfNvypSg3K99VCcnpbaVVNk7hbchmW3ZLVWeYUDyN5Q8Y1Z1zk9CGwz3uhvZmRzY3pkwg4dR",
  "key7": "9R3ssR4n5vdvoSvrayPmRnrNRPK1E6jvbFFN4rW25d89XT7MRnhJhABhyReiTm3RZDSb3BwZmQC6hDF9MSy9s7N",
  "key8": "4Q4v8Emq35powUTtruxg3tHFeNUiJP4BWeectH2pWwigGHQcPuLvrvp7aMnct9X5BfYQg4hG32XK59B2FXuhgnR9",
  "key9": "4VX8sNWQJP8fb1R75o1rAgvkwgAA6bCMRXsTrZUJLTgzmpZ8afsDXtecypUdqNjgJE4JjWp4ZmEvrcJMLnFRQPbr",
  "key10": "3jKguXfFJp1DMs9MK8gCZG18ND626UVg1qA4n1drzp2Y1X45qFBFzF2XKAKABgwtHHvKKPqULvUnKZHGBkg3sArG",
  "key11": "EHDSD6MB9Aoh6UdPQ1r4Xn5hm8PqWjMxszcTxQidVkd5VRSx8Y7WbtbsGS3r8gt7TAmzuBvDrKyVCSn5BBCCRQy",
  "key12": "f3DQ8aUUCqVWYGeAv9EyFrZv5G57BXY6MxfrUjWSSghyxoPybsiXppq8uSojcGP2Fhqp3oT4VhQg6d66LTg4Fzm",
  "key13": "4imtrx7PedDgGu7nG5XA3F7uH9AHEAwmjHUWQzTs1JbjoAXTtTmkEu3cAYUMoaZCWNk1vMcMQ48bbrGK19CM9NYo",
  "key14": "4AaVzH6k2vXzDw66vX8SP43TgdudHrtjT5Cr82DvaZjF6X7qaUUS2oqYFngpbJCAMytsBbefrm7DagL9dYnsNGpn",
  "key15": "5GD8L7C9LCtPCiAAGZJcK156QBJYjoSsLKx2yFH6GjdNPEihkLKK6tuvxgPGqZUL7EoN5cQdM7TdCjeTPtQi4T1Y",
  "key16": "TSbGHo6J7s7wdZQvWKKoFGSjqjYzDMeu2kCJdwFKupvwWrsfyRTpqxA5uDg4naUovMWXUrpiDbRAy8hwr1q68PG",
  "key17": "3zDXYoXbhhfSFhJeiN2mPtr73eD7nGGNDZPBN2kpqctnTbxUaiEBWnpu1hCDqRdkzwS1be5qLhent3QLsDFEkZpB",
  "key18": "gm3YRApx9MRgVajsxCUk1BcUVuZAEHyXBADddPzgCSwA6vtZTAkz69DzdGhWxVwuxXkL2fxbq22YseyfBZFfdsF",
  "key19": "4YLyF5gi6QSoQixCW8Liq2sEwS7U84kAucrykDGi89jzwCJbd45i1GNJkQAgjrNAJ8qYkY4hLgEzAXdHpwUAFAT1",
  "key20": "kbzUebKw1NYnUxsFi2d7EeNoM1TMXfHNb8MNDYoBknnB68AagyiAbvUZPcQSAzW8PjjUuvTNcWsKgeENjwuSz8E",
  "key21": "4qpsbRkY1UmQ5TdJDP2RGeQK5jBUD7caxENLaVSwU61dVr1huwzbqH1eo6T2QAuhMSGJLWS2Zy41qvcYUxPYgUrj",
  "key22": "3CDsAFzxPn2UMqzqBTsWEgU82Q2etUG5qkVHVFoMQbYAkfPzGFTYvkLHWsdZXTbZ4U1x1uwAstagQW5dnDASfF3j",
  "key23": "5xsRgQkVTbtdGqTRE23YNDoxMdRXztoWSSPb3fbF7rmPdG1Ezhdsxt93zpF9pbs8d6Djdh7DJiqz1UubDQFzcvnH",
  "key24": "2xBZwVPz7CWYPTyVmGpKM8xE2Wuxpyx8nN461HRtjGsJEtiyxyK5hQqpgU77e1GcgRSkLR22vPVLyzA5raRC3FcT",
  "key25": "5bG9XpVGnNzXExVx7DN2UTR9Se9eH3wVd96GZpjdWanz7YEDnXnVvjY6EjLa8AcbKji2qjNS6ePRTAGTz49q7tL6",
  "key26": "3XHg4b2RbXgW5rspM7KjdPGkYUU8HPUHhS8TggMjjBFGSV14SC3WdL851K2HCo3FgQ1dS2xEEE2CxmrE5yD6EGGy",
  "key27": "5ydR5maxpWqvXZpTD73RZtzsN57vT6ihdRVKJxYV26mQR5hnfGNBbDLLYsR74rgVyhAAVQykmdDP3PLpL3xHtT8m",
  "key28": "Vq3JpJsMAzBviQjok1wFxVcGoTC88q7bA7aeamawNzPWqWY5W3TyZYzYVsLPHhtCRME6TZNx3aFiJzMQ4a5nHDu",
  "key29": "3YviL2BUtmJJc4kj8sUusYLKUA39JK1tRwaLsp8p6aYhTvyirVQLza44FHS2VYQhriPTpYa6aUfHAV9ahQzBygBF",
  "key30": "4jCDwaySUfZRRZ7e5pmDEshxg1vqPMRdu17qRZFwkYtw6XTmP3jaKnyNcZKiBJa5ALr2yx8nGTqvjCqH9yvSXu1y",
  "key31": "5uCPsjJVoMSm11xdMEQTg8CQVP7ck313Bg3TTXhQCBvNhiuK5Hzv9Da6jiKUTChKT9aXWesezn3MdxNtjien6QAb",
  "key32": "4Tpnxw2wXkyTE3VuaGnbfBDvg1ozEPN4F5jxwjB7WxhWWpggDyYgubnyzCFyibvo88v3v3hDUSBF5fzxWWqawnWx",
  "key33": "2jkZPRwp1ZP4g58sBLBrRGfuz2zdQHVaomCFhB8HutyzQXmsoUJyE4HJQFFSN5ywTSYHsevDyc9vnYS47sTGS9Hr",
  "key34": "4XCse9jH95XAw4VyiiN4LS8kTH3Vbk5kqqXyKrN6nihuPeUBxeTJGUWD6F5ZJZRazVkmTcZpAG5T1CBdLFpp3vMe",
  "key35": "2NcP7HxLG4My4AtLdFKryo4XGUcGYq2c2hM5EZiXSFfhRVQjA6oXVbsyfs2qXd2BsWUREDXX8c8oeV1y1nbcPJFq",
  "key36": "57cbFRPsYo5yXr8P6vE5iUtDepCBR7FY8D3S8vwBCDCPWfRahfeYmvLCRTdvtspj5fKGdqGN8C3PC73vTL79fW68",
  "key37": "565BEW3m2qp3jbcN6mvah4pz1WSSfDAbHTojkq6XBBYoczPZktbyQH7WwibiPphEGBscQhVCpfdFaUbs9uUWpx6u",
  "key38": "5BdzBqgNLNDZDJ1Fgs6G3mDAgVJPQwbVPocqRZENxXH9YqdVKFEqeEV9ot1AiYAw6MHyqp17acgaDvi4TLJiFHB2",
  "key39": "2LpRJe7rQXMpsaSp5sZfAPpXxxp4CcFeEoU76AB1A8P2Vo6AjSEx5ntKY8fypjyPhvB5LmKr9zWtByPBkhrk7nNd",
  "key40": "h9vQbsLaBjuv2R2BDNKoYR6ZGVdkiJmURCLQJcEbVKd9VsqoehNyGzAF9Hj87RuHhQDjikkXvFBvkpts7X7UYDH"
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
