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
    "469xArNDxgkzRPcmE4jT2CpStX1gqikudmLVisW4qECiLUD3QKwk4jV3Q3FZ7u8TP8y1snxZuKQtxPupnvpmnqFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58GGAgc19TdH2kXTfDmmoLoZVT4ASdrE71vdg88jXe1TQAe5RffCZTTHycmL8eoyad9CxgzQLH9mftxTr41UQ2av",
  "key1": "uahg7B2LaZbZZAJx15oyUuEXeYXTd2ZgrDSxYfxV9yE2ELXmpdDh7goQ7RW3uobJyHCkJbijxdfvBFvUHbhLQWL",
  "key2": "2FLA4sj6JQ5GpEVza3kKJVeezNaBgxe9Z1y45RQzbenRbsGGC74RPym68Enu8K5ECFJuWWhGsoHSfWsprPR4aw16",
  "key3": "39X2VuYb3McGrFYcKnVz1463eFMrgjkeUyULvMSitYmtJGVfLyKwHuW5xGPeB8R7rCrHwqeatipTb76hjncMW8gh",
  "key4": "skRHyF6F4MbzXkyM7eETuoVm3zqpWcW9xZSEsoUHULYsWvLsKZFPMbzMPPxhAJTxxZuYZusvFeLWs8e4K9FtCuK",
  "key5": "2Cy6uX6EdH8cHycYgfx3jJB4M5qKTABU6z7U2EXT9532PxfpwTc3AhpJ5kyTcewZVUeySoHEdgbwFKazmKvP9sM7",
  "key6": "5W6yUDMfKD4aRTS31Xg72oLbgR8d6Tgbg1fGKeZ4Z1R3Dp8Kvhi94EmjXuMDsQr2XAFh3rJcNKrHEEQLYWaeCshB",
  "key7": "2Z6ygxaRvMqnwV5gUP3Up5Hwdmty4VrzzAFQ555zGdjcMzuL27k2FaWX5JExvyFQv134YUjyt5fRFifCiJw4CPoJ",
  "key8": "3FjXEc844ZiEB3huPUYsbYiiASRBb4TufEGoXXMsmUEgWkrJDrGoUiQNyp4jk3iXo757XpL8YJcYgEKRY4Wkfxjm",
  "key9": "5QaLWhscuqxS1U7CUz3gii9DBsFEbU6XnRyWU6ZJAAvSAPzNXj5SNdikrZ9NtNAWiYzFRXBGGc1c8ThV7M5KGGN3",
  "key10": "5tTrdPxhhnqTShnYeLACmdKXSS3VjLHn3ruGCh6qLoRDwTzg5oSFuBd9fru2jt1Ef8BJodxoQLN1r3Sdo5i7cAtu",
  "key11": "8kZbA5Bg8LyEYrUAaFinB797qWmMbgBdYDycu2meLfGbK3p3KiBo2Vb7Go5D67ocqBGt3FgDJMQ4MMuv6XNkvHq",
  "key12": "3g4woiQqi7w3eNTBQJFHk7KT6Awj8qoMjYxgM34gGgiAcQw3uXVseb5Rh9ZMPTH8zRdvie7RbpSxwXhCFk2yUJNk",
  "key13": "4jPQzc3GRWK5nPKXkZoZXsrb3sPKXE7xDsofu4Q23Pnf6Uxt2ctAvDZu3frXzzFMsQZBwYjDq8BL434Up5AF2KMH",
  "key14": "3pB12hF1ccgEvgyyhRH1LiR4wQuoErJ2t6vc7ZZ5jXnW3cDmJdB3fgwBd5h4wt8ewUqz29f8QUGZXDeexTRLcz3X",
  "key15": "4EFP2fPEX7uzZsWmkntNpsyYxtgomx1GXPs9AKfLn5mVCjJ1YeLRVRVpWNGSDgbKwb5jw5aN9qrnUhE2pP36UnPD",
  "key16": "2xUKuVf4GSjTtF7koddycpQoLLUBRmYBJa9ifrnPi1qUzEy5gWvnFjgtxZ5LCBJa1tN3ZUwaLsLVXcmJcgznJFX4",
  "key17": "21ePM3JSBSH88a4F4De3dKWSojJophiDGeAAgiSDTZGLYAmi6HwSggBwNZCb13ms475E6PBv1R2zeWJDYJCe29mY",
  "key18": "iUE9GLUnBBf7vXniukdvr4cs7vrMXivs5p2o6zHsGA7idtkPpKdMCQMVmPZrPgm5AxQeiUQV4sMSP86VsqDiK7z",
  "key19": "2TCLkmjX2Qx8MoNDczPiZy5cpFxy9QDzFdMMcf1R3W87sY963SVYrQcTJLVLNzJuLB36BqfiSSbS8qjac4Ujn3ui",
  "key20": "3uLxBQqt4TGQNbXeqdkXeti2JTf6GFsdKKV74mUNNS5bPVKBCCyZHewbcUyiTopAhXq8GUk9RT6bM6Xx9hL1Jg1g",
  "key21": "5DSrB5wdohpH1kAsiGJKwMbkibaWYeGFZ21E18JHSsJen1mmYBcTbX5Y3kdWa1uoH6XddZySxpPBCKJDz5EpEmCi",
  "key22": "2eRcRKuGkZsyyPdL7Vwt8gMj9p5ExKVWFfgtdtJJctdURoNP3VJJEdcC4QuND53Mu27fdP3gyANJ2dSXL3kkuc2T",
  "key23": "59vPxaP1UZpqgSw49sDffJcmvpytBqC59aep55rbE8xU6oFgsWupeDPRcg1MrgmbCocfoeRs46MmZWBHx2SiydN8",
  "key24": "tpxJNRnAFFYtzagNKPYVA4A833maEzWpZLLFre1LUcn9JH3WwymeRbAy9DR7XZRmaNZY9poVF5KV4A8ygS7wJvo",
  "key25": "672VjnbpsgTHD2ZvdiYCkVipX3ZrJgPStyUSmBDgN29wwQcsqfwucBs84YQbkXSDAcN3pbNWEND5cwcRnHqXZDc1",
  "key26": "5mguSRShUHsoLjPFiaYpGV3M8zph2N3RgSwpdHoznC4UEVQBFeoocZ9oNJFyc2AyCYoWfL7zmFqd1atbdyuTJdBy",
  "key27": "EoXE1kMRytcga2BTAaYmcPRems7b8AxLXnJgwkampnx311Qi165XE7p9gMt4nfeeKzBGC5xtEGMNrQebHYvARVD",
  "key28": "2NZDFtjRQJBvucyuYDdB78afTvZMWyAEXmFZUeXuKBYAPiFLAJx1Kg6zCVnspQLTSFpZfMcMcuWJzrLWbYvNbq5J",
  "key29": "5uVDm4mgSn2fJGguUFrjmsf3y4ZRACLC5t8VXvqyo8eGkdhr5ehJANqU2HkJyfxExaW4xxz9FqbXMQ4mLp2mxAZs"
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
