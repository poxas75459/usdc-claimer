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
    "2u2BADjJiA3RJofgy8VR92EhVLZS9xcZ6zHRdpzVVmFHvS12rJk3GmvcnBFNcC6zJnYGEf6cN11TPVNJPxMuDQPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mimK2f6bFbDPztGqGhGhzmpEMvUKQ4TvKBMjZqfJ7jBNYaHmct2proH6aBmcquBXgbNQuBhdpoiHE57zxwufR5",
  "key1": "4SqNGHQbDS92M3a61Suzrhgidq5iXqWhJ4RtfimFuQYuevRedM11wd8YTEidAY4AuZvWkdY1u3Lrzjs4iwnV9uDQ",
  "key2": "3aJXgDXBsq5xXP4zBDyiLfAYWjV6DBSx5mJNvd9kpeSHoVVZNFsLwnzEQNQnZDm3wfKzSndF4VBdkG6HFMZhMAFa",
  "key3": "4ceBCJrLiyadUx8iDa9UiKD8Nt5r6uJHnvMfZDnC2RjSAWgCjVQUb3TB5N8QZ5vXScYracxMbWeEL6KjphUp3gsZ",
  "key4": "66yXtUfWXJTxvu1nuR3ZhBqKWP9rETCn5xSnHe3U3HothFPC5MuGnDq46VWAHDFopHVMPWWM6kBS82FZSqxCwzvf",
  "key5": "3rRHXcg5XmV2L4CeUnz5vgRYCiyArhB9W9i9wKZvTjjDM4sAvqaXTPx5yDASJ627v7B5uwHVDRbCu6YRMU41uQZa",
  "key6": "2KcrGT91uppHU96jrWFdHHAMeL7jEuxMLHagpGo32gx8sKrJoM7VB5i2sYxVGwEdhsY2CozgSn2z5bfwHzwSezSp",
  "key7": "3MJBjk2mjcb8GS9jRsh4vkGuceMdGNuaLb9SSaSdvWo9HeLJpBYZtGXQVtr3crVYYpuUzuTFPYHhk8cBnnDg12cG",
  "key8": "inJMeoJXAGbRcSxRbrPa7CyfeBFYH8nXjANxR3WFSCnD1JnJVWEUx1kJVJuZ3MigA7Hqh84PzWENj26vsKhYnFB",
  "key9": "3wS7ehoHuEmZNTdBdSUPDaBFMe9Ss893aTuBLqCKPGtCeYvU4AhToBVMTL1tkWgfNCtWzHodxN4j61Y58jJYWskp",
  "key10": "5ehQMqKhsXEarCxMe7xT3MJ2CVZQdYU6yQ8MoQSe1PVDG8d4MyCm2b6b47R84sZQqdC9qUBf9CsezYYHKuyRumqs",
  "key11": "x5jU22sFQvHPAwQkZixDr8dqM395MxY4LabiivAdL2o9eH495eRiiSbMik5MrjMbd9YPmDzqV4iUVyPrWR1PzdA",
  "key12": "5VompcNKezgHfuPFdvxVZ1wUFZNXFp3YVLJ585uVQzSQgjd7jKL7C4faAiHSfBdKBPDDZWxXBXqXHvkzjr6MfrS3",
  "key13": "3ztgXCjDwrwsX8eb32Cyk6PrTrW6gC9ygN9URyfLVQfWHHkYVxa2dN8aK4N1dEV6Ea3DA1Sj1HNwd4JRJTdDc5BZ",
  "key14": "5D2nWJdWAuJuxKH1aZ6WYpgGQsLNGvCRcDg9ohLBzg4SeGxnRsqMYaXU6FSZ83kMaBDAjkMeFTuaBLSYEtydKFka",
  "key15": "5bqGM7UWiUKRYQUS7PTyybT1oyrYLq1YX8nHtPJyxeqpYd6XqnD4zFqhdJH4Su2SdnX5eebfYMysvFbX3vMuRgyQ",
  "key16": "3i4rXCXGmUwLuc3H4TRnuUQGq5Ao2babkbU5ZVRyWjUHVr3Q1CZi49brfnPiytVcoww4rjPktYwkSJFJ5FjSEJVT",
  "key17": "49eRM2RNseudm8Xm6Wi6Q9hJFghr53VHUn7bD12ciacaGWt5WtvNRkiG6iKVCmRTzpebB97VrvU7AF3NS14VugJU",
  "key18": "4US4WPysfkyYxT1S1wbAc6YRFkxaZMK69ue6dqAGFtiX5ihiyYPUjdnjdofa4tmr43XJ3hG1rKngyGngAZ8Vg9av",
  "key19": "2P4fcggK4etoLy1A5xQr1YpbqvAMLUj5xnG7wisMAnZY67S4XvSndSqTUd356nykdUrPfJYehe2Vc2cuxFVuTrdT",
  "key20": "5KCU63xLxpTf8frWuAo26Kcok2nbq3RX8AfLw6u2eC3nu7iD9g5HQcd5Bi7zc6pTzSBgUuZBhDeZk3fTq1GxqmsC",
  "key21": "5McEhmGLgfkMaWznZMoK85CybHHZKuWhieJU6ZQJYJ6ZPEchJXbs96HQYh6DiXaDbAnT2CCLvCLzBGUY8w7Bdgcg",
  "key22": "5styNzbJx9TUdy3oro6Q6iDxkFr4y3D7MLDLJaCf8FwaRjLvz3JL94Vo5YDvybgD2MPff9MTZZVhJBXmDdeehDDh",
  "key23": "3r86GNWcrMcc8AVPfEygprdrRav9BpQs6ERc3GNX3nszBM1o3GfMFfy5DPQ7WzH2WmU2jqkuH6btvSwV22waWs1M",
  "key24": "2gnF4CQnwBw7FRCuVfNKApFhYkSiHwCDu83vpEziJtTJ1SQKKC6WKJ1RqSYZcqsuCp5GCu8nf21pxEgT5so6fRr",
  "key25": "qNHEnHvx4tbuytwdqtjdRJkYUGV6zhxEtnLgEK68itRpafoEzMsWH111iStXFWiCbwNyhaRGbPaLftBfCQJH1Wj",
  "key26": "3wFK6vACErV6CxqLkfCbVc9codMuNirkQmxbXeZb36iiNHk225QxVQTtMAw8YD8F9xm43L2B3kckpMMUN412Lc9u",
  "key27": "44QiXCxuBhsBm9hpB7Pyzec4j1pT42sNKo1JfaRVkgepZNUodn7AWoL2TQUrDLdw82jcF9wKc4F5mw2oJS6nU4gn",
  "key28": "5ux2yAvGXaYvN54iv1Z3neshQvJqZjxuWuXiRavHRam2QieeHVtaKucs8ARJhAiSHUvaNYwhXsAaBPT8PM36GXxy"
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
