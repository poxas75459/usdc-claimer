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
    "2FcAHWaYunSGCnYxpC2giASF51jjuLTKNtTu4JssuVLTaA8SVBBwdtmZNwtAmbSsDmXCaUGbmb2GVVULwn81sMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SGhUAvhgNfATD9AQTeMT9LZfxyv39YS7PnbeQWqYn1JbYbvpWAok8MDEyaA1gXrxKRJoJLKsJLtfBzFy1nuGuYz",
  "key1": "61dQhwou8pGcdgJyUh2CHFAuDEFG1LXREHyXWy85rppTbZHcgDeebwk661gAJUdFuGuayrQHDEqnQEfJpjoGp1dw",
  "key2": "gEoxAnpyxUYKedJo58EhyJq7x3kbMJFbUsdsEWbnuNfNiZ5JiLHW4JvRe9et9Kgc2w7SvEEcvZF9UVXgWQkmVsB",
  "key3": "3c5Bt8CuJ4rzhooKHsmyJDJELcosB9royNJbQTjp8xhHTrTcRhbnBGA2V86Bop3CdLQ45bk214cnn5yecK1tdEwW",
  "key4": "2E68R8YYEKE8FmpM5ZkMeGP7cMd8bPR283HwjPQGKRKghuLwDcBm31mGXCcMXd1dAqA6YftEVKPcc64JxgqXhUyF",
  "key5": "41NG55qNNEkCwvFkuyq6soT22b3biEMcFTjHgYaqRPHUr2Tysa1cftBNqbGLUjmGJCuU2ghz2hgZ1v1vqhJMzSnx",
  "key6": "394pCgdL59TXqD1Gyd335GfEhvFLLsLac7t3qEhfBy85Aq8XZWt69aoAno5tDbPyQz1XV2A12DVuGhuzp7xah6Rv",
  "key7": "2QTDsYCc19LDqCJFo67TU7Cheap8msLpnhSMaAAWKWf1w1tu5SMq4BdPpeh9g6q1q2RmdrdjLdLxNR53ogs6qzeu",
  "key8": "3ppJ5T36x1uEtgFctKDyWznv1szHynXTdkytJyJwLxmJzFRcFH8uaqBgLp4yNZe591ZKUS7NAJfDrVpUU5KeryE1",
  "key9": "5iBEcDA62ob3evMEiiHB8fJBABTQVsVvqBM2EN68RwMhBx2xCS3kDGy8FWAW587KGofQRtr3bHoUhEnJppXThHpp",
  "key10": "3dAZKGdJkViZk8XSSZknqMdoUz7BKkjMfE9pUY2Sw3ry5HUJqqgHAcDYvaHXf8zJeiuUmn2GF38BF9C6MNiqGLL5",
  "key11": "4cWpCRppgxr4ezCyQpaNUBmSzxzJdkuhYRPTB54FPDJDT8bTNKF7RVRbmCgq3BiB1HDAJy2ap9BgCHYqrLbmGgNm",
  "key12": "2LdMCZ9ZNWkvm7uFqPCwqnhUrXjP7soGbjjsc768B2kaBMS3UkL1JqsuXMGgzR8nX1BvohtJR1MCh2kKqsmVGTfi",
  "key13": "3836gtwTN5xGbNP4yvuGHT232avTBCV9os4AftkxbQFkGQcto8FNXiHbrS8GY6BWk2262ybVaBbYXPQoKEydZW9J",
  "key14": "F1hb8Rin95hmhQ4TxcpSwP3MBQxUPTJMnYMyw39EHSyyQUpTkpfEJjvsy4eqW4UmWs5Naki1cgQkDt9xMJcwzMz",
  "key15": "2R9HdDNjgFSyJoHomWUeL7sCBWF7xJXxUYA5HLCYEkbLWWe6piWGYaJqGppUWvyXdLYGdFUwMVfkAjjv6r1wQ9r4",
  "key16": "3UNwntEaANhVLS8aiukkQU5q11NZ1X1QGLyJ7hnUDtwv44KjbLRb5x5aGKQ1XhpKH26eFfRDjDZsN2MHmNbhbDFy",
  "key17": "Bi4URmUgpRtuS3JMMCNpCk4tLstnBqsV1y8cfxXAGf5s4t574vpjyBL8t4wLY8GTuhJC882rLWnYJj5VDqUEUYE",
  "key18": "5vz28ew1gNV6ApFjbZjZczVZBKZyXZD4H7Rm25d9CmtexrbqrpX6cLJbZrfvxVriNrW6ft7byADj3ELAXSPdqpq3",
  "key19": "5Yz1WesxWSazGWQEQtPtLiP3AJCtGCeLLZXBjgBQodUbnuKh6LUZRHQVW2uhfn59srJFCGxxdAEoMe6QgDPpELgX",
  "key20": "4aHtoV1QJeBUbRnkrrE7JPk2b95qXnReYbcyEJZu2bjpnimDwcemzBqd4Qqy6ATGBxjgLopuWUJEZeM27aovBWNc",
  "key21": "4WCtU43kkzx1JJLEmTVzLdKwMAdLNrLFSntofi2dEHv7Z4uqPfg6EFdZLZTw9fB3UshwXXifLj7Jy1hBg7bGdfSY",
  "key22": "4sEY59wAh7L193s8ECY5VrEzfXUYE37wJ2yi19ELhgEErzBB2guJM5cRvW4rBjiyj6NJaQzQVA2XQdm8RBEzbF7F",
  "key23": "3EU1rkkiXqXJg45gxBM8KaZxactPmJ1pPJzQy98YmgBFHVSgTmNxbxK3WxLqmRSKAQRpahtudyeS3udjLXYt3rqE",
  "key24": "5FcnVPUub4ghFAC51nR7CvuFXN5M1CwGG6NyFUfGhgM56P3QyHxTx1y7CPeSXGzt1m4qDcmoeyNTrD2ht2WmLbyu",
  "key25": "4xscYu6Eh4XBApvjRrcBKM4RQxagX8PfU1dcLYAZXW4DNpNJFs7FKEZ9h4WzK82DZQUUTYibhf7EfTeBZfLDk54a",
  "key26": "NMziafED9TBMv1euD69ZazyDo329momUNv1aeyxRqnkUmGm7TqroLnppE5wWzaF1TGG1bERcWdLo3nTCv5X6wvv",
  "key27": "K8T7FAqeAnQ2xi4BcQrj5LBgzCnBAfCnTBJbQB9VPjhc5JLmqHmxYSLnGHqw4ZzJ82VqvyZ1Fy27CR4E32cdwfG"
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
