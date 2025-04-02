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
    "jbLTVaNPzp4isdNS7ojMr1gdGVgvMuZ7kA8GGvUrswckjwC81FQHpBgv2Rcx2J6Jdoxq3JUso1DY373TogTvJLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4csYMt8T5gXzHnv6tUj5gi5NyvusVNoTGWv1DX8zHuqX16UFUGiHnddDt9VQ3niZXFeuXquT7RPbssXMn17dkQXa",
  "key1": "3Du4ofH8cRJTf9hw3344JEv5Mj1CMaAyjpz56JVipRvRY4PSuEY7MvWcXb3hRVCPEL8napS8TxoqRBkmyKeCTX5Z",
  "key2": "2FCx5hAUcpP3oyJonVhzoGay5dcWDuxbirMNv36zG6K12oJRhKvyG5oB7KqEi3odhz1vJ5kKz4XDqBzcdi4VbAo",
  "key3": "28JcXL1bKQc9chyDnjfbBWQ7oRMdyXJ7PRwn1aXfRWhbjpDAx9buRm14gWydLHjxdzHW4JtzhBoN2mKPjwj84Bhf",
  "key4": "3H2m5NrWqSFc5DUaZumjv5cDXAcKwQ1EaWE2MVNzQCXcP9sHh2sBfMkKpk6YWRRbEWQt8MkSpRg5RdEYG9SQrWDM",
  "key5": "8kqvzjPYK3bFv5H4gh3CNQFgdfsrWZ26qD4aAK3hWwnbzE8KrY1eMP1coKEJJci44bu8G8tcz28VvHL2i2h2QGN",
  "key6": "TNrc9ofkmMPvdXfKdrL81VgqkzfwhpkyViRSHZLDTFs9qrAaizgwpR6HsgR49kKt6mue8RCjzPvKe9SJCUCrXXZ",
  "key7": "5cLJkdrE5JL1WaPn8brUDJdtkZD9rBA71NPVS3Dye1LoZbsz9tvHuQDarsbNoK1SJb1Mymg4WzyTDi8s7fDTk4m1",
  "key8": "2BCVKE4CSBdrDwmxQffub7ccXZfHB55sSfgggpMbbFidAvBqXK9RVq2khm6znkbdD7nFP38MQVucW8YRmEuGSpA8",
  "key9": "4fauaDNfzALjwg4bs45yFZLWK7tGgWEebMzZ1PMxdzfNPhm8VfLB2vUfriA5KZjGNPz4CxiWFCPGueKtX3P4cRxv",
  "key10": "5tDpfBmzePYdbvZb3aoUJdFVXwP5k2prjNqw16SANTduk29azsNPsmfT4AbL9jqeKkcS3bCBx8Jnp1o98knmQm2t",
  "key11": "5vCaLi5J3wd8fAugwz4DiGokckA3KxGUve81Amiq73AfCzNJd1JQooKGGdbYCo3wVEvEmpPvrez9FJYCUoTLkfuz",
  "key12": "3rt7EAvNGBzehh6xfXMoHJwM53qmKD5rspYhx2dqKNgHZaYy7Tzk8mqTYPvw9v4maQRQdyY3i9wVkwSg9PWURemr",
  "key13": "2g749Wmy8NdRUjZbjRRauye4mpWgyaBrXPcjVpspaL6FeJeRDtFHySRYeqgFQNXvX5FXqCFVpHKqUuJQiK58beqE",
  "key14": "46HRSpk47oPySd9VQciYm35huGueQqjUWF467qFur4gkcpZRBTrcuQKvScqh2oSakpNE8NLpEWQ1248H1yELYNev",
  "key15": "5EavqVa9aapbpZMHBFaWeZntgBTWBU2ZBcMfPNCF5jf7huGbwz35bMnoWH8V2b28PbQT5da1adPUPneeUn2VNtXp",
  "key16": "5vFMZQzPxYPbvJXSoGfQtF5r7ShbuadMnuaAgi1AegXQCTfPfWCDu8SfqjW2LuUw2a6VkQDjwHqf7E7hGvMZKMSa",
  "key17": "cgBaWoybe1bZ1AiQaLdTSARXsT6EP5zMwUwDFmhRxoVvGNJrKTuFwEqZmcTdb3yPHydGkCHj1mpJsRJxqccQwGh",
  "key18": "4UAiqeMMirczmNoVk1N6aySGNPsKQmj9BYjcrv45WaJC383Rpmd5up7qqBh73tgHFfapi7fmyJmy14btFEcpM2Cj",
  "key19": "3wpiEYjzQPdVw2u6CLETWvUGxJDshdiqgrRPriZKAzXBgXoMHeiKtZu6n5LnoNzBxrfexKZZ52CV2JtB4Y1r9u9Y",
  "key20": "4Yk3S1jrLLJWn711M8m4bmrVcKTaMzX1um8taBpiE8KBN7VAYZUrFNmouAkZjQPbLXsJmQYgGBx3M72of26VxCup",
  "key21": "2ZnbDTnFw4JQPWS1JoySGszD1sGPtsex1BiqCJcmFZysBR8ZnMeophRWkUuGnwHcyh5AsBiG63eDZtkktBMi1T8C",
  "key22": "2Le9ReyeDgJ8aj9ZXjs4pYdjZiMJRschpWDNwMz9kH4fUrJ1Qj1gh4Qx1h3Hw6RnGdHsSkiPXeE4SbAwnJHfmAV3",
  "key23": "2UgyFJroKnEHp3jfKmhS2Hot8g9M8UwbZRWJWcXZKhk3mGCc2h9dS1nRKYbgSek1Fwsd8Ffu1on6jz42bLKkbEqC",
  "key24": "VNRF9pk1UEVJej3XNNem5e7NN67sc1YVSp4nbLF3Tq5xYH6WYVjbmpK8FSM8jgtK5VWxKzfzzEK8uFA3qDAN6Vd",
  "key25": "5qCQCypwDMJTHABrL3PqHeTXTgAgQVEYRi2VyikbHyFR8Mq1y1X8i2gB3spkUFF5bDAYA1U6pPPdBvZ8BkZie1qF",
  "key26": "4jKDZRb1MnTUvXm7T9g9wsJgHPM6fL9XqxJKk2MYSdidbSjzcqmv1Ensb3VT4D8AXFUjrLwpxZWKhYqAP8YdPQJF",
  "key27": "5SvecVTnak8Xnf3Jp9djfcT2XLULBLTNLNiefjnuAzYuZxfBHkVi4fZXP3A51uXPQiVhmgmDZPX4jUvZTpPfK7U2",
  "key28": "2XbJkcf547WBLzaDErEcyVcEg1VNHc1rc9ZtLYpBF4BdGo8i5vrgcpXPqLidK47Wam3UFBtKkXYJUudeXjBtBWvb",
  "key29": "3tuXUeUSX8qi95wsfZdph4djku1soHuZnB2QRhckdxkxWeRG5tT9jDFS2GQ8Rqx5vi2wVhir14EChanvsJZw1yrF",
  "key30": "3TP9DuWSUeZHat3mitARvxz79Nq3py2NFi3FiSpz6QXdbSDXt9c6LpNby1ERkBymEKiomnfinrgYnnK9kUiatkSg",
  "key31": "3ruXUJm87RijY7SyQQk7yzymxTsGYdpVMUmECtu6XqHvNhx91jWB7X1PnXBNYvx5dUwvCpohXcHdnMsBdUgbdStk",
  "key32": "fC6MtV1wF7nNYcnBZbV7JQzkz5pPQCdGbRKixoEgBv31NpbmRjvziuMK6YPNDorijG8TJFZcV2tNPHW4oNRpmzg",
  "key33": "3XdR8P1gCaB417fDsNECZb9k2K551qoY4WHyajvcDqMhenGDyqVbTPdPjNcfKdVnAvoptpMQjBELTtWegFAaygL9",
  "key34": "5qyd9nKr7AAP54yn4xXaT9tapctvKi86P3xw1iwpV3Twjj1NFkV8Jd8uE7qrEs7XCouw7T9cEgNe7ANCf2sUZ98j",
  "key35": "5Tg479Rk8k9iwmhBYoxN31RT68NqazGN2DYcGpJ4hExVQmAR5nN1q3zYX8BgUeG2rBiYcxabfLH53xf2efwNDxbt",
  "key36": "5JFNUcRXsCWDsy3r1nV5vgU16XxoVu6ZtFDCsJwE3uBcZbswv4gefFczMDXEpyU3rtvNX2rk3M4a2TjbLjMbErR2",
  "key37": "3DmwngbUbsdM99MH61UQEBm3fT4dhH3ueoXb7HyRxicMc9TLHH7UtNBSWAtwkgukaSnDbBKea9vCuN21GiBT53ud",
  "key38": "2cke4A4ot98JDZ1yvmPNbVthRj7RjGnMChVZiiKfcazmbTeBUuznFTZ9qrMjknDoxePN2B5t4JrJhDXTChW9TRKv",
  "key39": "3s7U6x78ch13j7cXMuD5ymYM5omeSu35YJKKsVBUAYgBmkNn1kEvcPMM8bwLKQ6rRUz5S4JKTzpgsPfMZQefizrk",
  "key40": "3amP5aSKVjxJfDxKGwBK8z98RQiujVUE43aBNbDghMzQdJLFC4HaFFyvUG2ZNFw3mecbJrELPVosVau4KJTB2RxR",
  "key41": "3p5xK5Vu2UrkbJgfnCfwaM9sGdRi8nBbuQnGo6gxACHWq7D1a6oE4PEstqG8VC3fKru33zeaKBDGQZkwv865L6gb",
  "key42": "2dzPgG2jWVruBCtqAMhAaJHnaJH2FwcGkfwVBnrV3DEgaKUqeB9iBRSTVKusAr7EXo5bihBZnUDRwo1twtaNChPT",
  "key43": "24RM8R7CaoSjKwZAs11o13D1MoYVYSWLd72rrxJmCQmMzph9AN5GxyJp2sUtjsfyAp1feu7tHepZxwMncoKtJxC9",
  "key44": "D89TCtUcjwAdtpqLWouNaZ9TYmjFM7bCzpkJXZSqZenyFwuEYS3UCYhgvUpFbvVJ4yszDuLf22bA4c1a2hCJnev"
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
