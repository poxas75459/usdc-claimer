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
    "zpkHvKcfPu3hAjD9UoTDanE2f58reoJbRJEpVhP8hxqssUNYDEATkK7afQLmaNqBaMbuj7gNsLVctJRJnQtnx4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f71gQBqB2byqXyTWub5xkwkkEdxzVyQC8XQrAvZb9bGMdADTDhpVJVRUMJqAWPzC7ohzhjvfgHZr44DQFxPoQPW",
  "key1": "4DEKKQC25hfzcdQFE34XKEm7JUvf9UgsgMS5XjSoAh9L6GFEqdytKxYVuBe3FDm6MomF9WJoQTC6LmyfMvkNVcKS",
  "key2": "2VutrLdYbfq5SahiTW6eunj5o7w7tnJGFJKczNGp1GjHrLWskRySJ7GPKSbGYk1zWdKiEft7yUCDq9tUYsXi3rCE",
  "key3": "Nh5HdjcVmuddBGjpiVodP4fAqv9pqz6Rea7Lbd9vpSLyzSPtbgKSdR9HaoiiGY9wVpVbMuEWEsfVZGR3w3fqrju",
  "key4": "3aiwbZBuQVUawoGhuxCLYjew2brUBK4btXyjPQ1b9o3q5XKBc2dLmSFB3m7y2KL3hSyJxHwG1hPU1pQ7eRscncgZ",
  "key5": "5kF9yyYKwbN7uaLi8YnNNVLiQGhN5jbdQgoHFsVvaaSeA8wp78iEVVcjYzWqKLwukHpnE2d1LM5PZRmyLwShbWRd",
  "key6": "8MXvNyffkK8fD8i9Kvf8RTNmN9BSGokUgpo3c3NHh71zQQUDKhh4RKdc2rbwYQ3bCgk1vV1MYpPT8J7KF7mxWdb",
  "key7": "3rVWxa6bkErGkBj5yeQRFSZFMgBMtVKab8Y2ELoBenWsgdSTjor23uN1GLmaqB3rwt1AsUM4GUJNokW3msJZRp6G",
  "key8": "2SNpiHDkMWdp5jfbUjiSiWjm9J1u3qEa4z7XqkAAnZYW1o3VFLJB84YxeUndcX2uqQdBeFqd4rqazWqchYU6Mtg",
  "key9": "3MvRci1YPGWYeHw5HtGyDV4VRe4CFgYwrBS66wqcHuYxem2QyNsZFkssBrVy3Nymvf5qH6z98L46vfWap8UdkGxg",
  "key10": "4cv8u3n5hcC8ruhRVxQfDVSn7S3yzAiuBs9Qde1TT9BdkZ4EMb6hrf8e7PiZo3ojhT1pmrr8eqzDQPBjFpzqYpja",
  "key11": "2b2tbfAoaA8TbyfdjtgD7R8SLLb3PELjdsW7PXbFCBNVD8JouSeNoivgsLVxyEfnVWn42xTZXy8Rj4bWejnuGV6M",
  "key12": "4Ne2rC8L3xuCw83tnJnHGcyDkUbomaeuH5Z66SEVgZtDqLWaD8FSWyetF51e5pqXV2snRzSUGc25FmUZMaDNLdKP",
  "key13": "2MeAYViqo18YzFim7deSntSt6JaDfoHBDns6nfUV7sUGsx4gfMDfN8G1pofx5sy2U7G9hYitmwcdv4yiwj6T9uoL",
  "key14": "2xg41ywDdAErBpXZt6sp1Q5BUZyW9u8FDzA6BLK8wECkqcFBkFg4sfAbzYknhQGYmfYj4LDFmZRtNTxDsh9VUxFG",
  "key15": "3ezosfFUgiQJekBUNzT4pDWMrGq1w58uLR8p5mezAn1kNhdhPzAfCb65jD4Cm657YuEdAQdNynT6mT42AH4fTJxL",
  "key16": "5o9HoVNZstH7THhLfsoaypEwzpXSPsmD3GVRuLpSxBCDS4VC6svZ7NeCrxTHyo6Ng2bgz811xPM69HudLLXUCNZ3",
  "key17": "2WeY3rPypeqZw78w917q3tP6yG4pbWwLM5vh1XmHabqR6bLdSX2b2m1XRxJ4uLRqUJUT6tScv5pA62jAH4GRBwEA",
  "key18": "5EpZq7zZ7EWrnfSktYNHFtLFvN5CPz4SZhkzV9HBDv2JgYSWpqFESuYHDHRcXCih3yYmhRLn31CzSy9yVGYrnigC",
  "key19": "2RnMdXQ7rbXRQy6zyKgoeoMETtbzn8GEMMxHgv3W2tHZ17jk8K3E3fdz7MmNWwyjotJ33cMVYiCpMbndJ3hTyRie",
  "key20": "2CbCnfy4vsbQ59jmC8QGqrbHVymEmLYcr3WsE7W9Dvah5rAQLJshEfy9GyEBetpFuf4N7mekD6Rd6M6K3cm8hWGJ",
  "key21": "2bSF1wrvPdLY4YvbTTksBpuvtRyP1z23AXU1PWJJvcbnRe3vE9KGXha3UVYARKtKH9qhV4SNjE31mprbkjkDYKry",
  "key22": "YGoEEJDhvri5c1AYA8PniF193oyXhFwZRe81ofbwbcuonT88CYbAFdYCfPsGyccYrD2vmfsWNUUcqNDmr3g2gfY",
  "key23": "3zg2NihVZzWaZwRZQNArgYFZ7qeX4eGd9gHQiNQhgbx7Lbxr522kJMg4W95jjjrWhxAHM49u3j66LPm1Ti2KNeRf",
  "key24": "53RokF5iFfLDjHtMzUt2raWgsy8HQgGpv91XwBAFKY58LJmrzGHP4st5gmvynfPCFc3co9fpfm3mtY2ZDRiCUSDC",
  "key25": "2PkoLRagXTvv2EbyfDrPGmmhGUxx8CMSt58u9HByMvQL1NwxjjAmwssX4BXpeEuMNshaT34ASrnp6kopsTj6ta7U",
  "key26": "3aDSGNMqtyp8v4xYD8XZdw23QFs1be3U3cyxap76Ad6TmGW8THbHzykvcJBuh6YbgKy1oBPQwYfwK4UkvixjrC5D",
  "key27": "rXMXwmcfVyLtLK3FMFMBckKZnTKAW7YvZdNQPSJvABQLCCJ7VjupMwJMpS5uKmpPEhGrCWkaz2JDEBdHXFgRRsB",
  "key28": "31ZhZqcdSeqDv9DkPrvuuEsm8kTvLpU9zyqafteZLTnXf5RFHf15rxfxP54LebdZrfk39BBCPnXZq7YdufPwwzkc",
  "key29": "34zykwETnFUyYsy4xF7wLGxkVGzCHjGk2otYk2Hixg6w9GzmSjERdWHEq6kwJ2gPVaD72MEbC4yY3apk9fVEJcCb",
  "key30": "2s4gMDW27vkMkRxoUruBA1zdMXicSwLfL53veEqinuuSBkj8jBR73StoZntJ1pKh3gjZvPwRgwCjMzHzXNyRQXGs",
  "key31": "34giuWrRiv53m7z4LGogYoWZv14A87HHU11HiE6khvUvtR2iDdoPNVt7q8FfKJup338qcfBr6gEsekqkLCuiMAFn",
  "key32": "4RrMxevpmmsdhTkiC2TSQbyznq8w4bodrdrHvAi8PfVjPVSDz1fvsgfa8cpTJFvV1eoWkphLaoPyv7nk68YHHtsK",
  "key33": "3jMC5qDuN8xULW5d2MRFxB3smbuMk3dVuswpnfJuE3BqqNCZWqaDq5TesD1JWTZ75BB4yj8wf91W2cVHvhPGRLjL",
  "key34": "4kJcTZ8nm1oeNq72ruN988WqcUB4aoixegfxv88RfwCmKCjRf16HnbVrCUgKsvWRCofnsrAmexAsPysPyaeFKdsN",
  "key35": "3BzwPRVW5D4CfqcR5GNWKTwd3to47Czt73A3JKwk8nH9ZixL88neZ4mDRhqQEttGENcpLjQ6GX9qW4HdssiThrGD",
  "key36": "CiLthxmMFc5XKP4FxoipKuRsBoVyXZwyajwb5HrK3ntHFe959bAhSxUPupiHFk3mrNVRfMrRV5h1WWkXUDzDJPj",
  "key37": "4boxJmjdREguucq7336QGHzR7iQppBy3jSZMes6ZZJkYksQpcbnCh7ZA7sjfMxm6S5oAf51dLau1Q14pTy1YuMAP",
  "key38": "4Z1NQjD4Rkwteus2kbCQXoZoLS4MSwfUkFuWDcEwW5yHVUkBoBTmUokFYm5bV27jpjNas1EiKP9prqTVw9t74sqa",
  "key39": "2Z8hCjpLqHvwdDVBQstN4zdRq68bAWv8uNqLcVcEMa6A8r718xBsvJhkEGRtdRmZD3U6YmQsqWjk21a8REqmkPe",
  "key40": "5zQtz9wLoWvxXHA3TLMVmuLEZ4nXwnT4dTqBrP7KvsqidJ2s7A1szrTNKYfU2D9pXDcpmZyS9bGVhg1EXUW4wfVj",
  "key41": "35Rmfir4FZwRQ8XNswBYE68UNtmQxNPS3kCF78EDez5cCCpnjCuxqtBVU7SERp5aJcVoD5myui1g5PurHE9Htdgh",
  "key42": "4GFrcDdecjL4xAD7ZCudTEydueJhYtqPnremUAt4RoqvB1G7Q9AwNiTw9x8MXp87gVh2ck4eH93wptSnnkb6FcNN",
  "key43": "28kQP1JSiEZcNgh6STAUSqnxuPeFZM2EyeRYBcoqJaF68TgM5MVfFGvGDmuFU8UqGxeN6yAPariFrMF5wvLTwYTC",
  "key44": "268L3NhrYSHVeAcHsh36Xn9tkzZvjNzBRFspK1gz62fCDtN6pwndTMnkMyByFjwKSJKe2xDF7iz7m9C4LFmcpcdC",
  "key45": "4STnRcQpEBjbPzwdRbeXTJAnZtF8W5tSbNMrz9D6cEErkZf4pDUTcQxjnGDP4qnbuVfMjweWJd7w1Zgxq55w4oUE",
  "key46": "3mX9jqibPR8dzamZqnqdSEtpExG45goipTrk4TeThm1G6GCvUfTimcq12qWajbTYgeKS6X72hE8WKsbWQWdJRfgr",
  "key47": "4a3owyYQ5ky1Ap5thhe59wBdJht7wtcXjQGzK4hCaKyU5oBH2QUt4iigusBEVBHCXjXkBaxZSBzdjnYWmMF5DJdx",
  "key48": "3VMikkjhatYNkSQUytAkWrqecB458wLsv9LrMxgsfaXsRPuAQeXe7o436n8mtdCE6cogZtzm2xnzgGZPYYCwbE5e",
  "key49": "UcLFHXeMax6dgHUhyhTwtrd9JKTK7ttNccLSKT9gdkcDRweLGtAGV43xtCXj9SaTg1taf3gT2G8g1HiSoBvvJJN"
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
