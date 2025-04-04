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
    "4skenRAw4yp779E1J1Vg3MaQVaaisP1iibCDqfPQooVDYT5nQ7dcR79rwt2dYYaKzKtApS7u9QBBmE2ria5xUqLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cjtUzFZLTnan7uBLYDB4caVFquDWDWQhhGtdGNboUe8g7y5doVj6aT9GR55U9WVKUBZGw4Zo9wFjtWxZFRwt4WJ",
  "key1": "2jQXTX6mQ8TyaMrUW9XD1MqAs5Qf394Kee7APfsh9nLM4mwxP1arQT3SeSFoYv6gZNwnJe2kAggjWVTQpS4cMLGQ",
  "key2": "4ZjfQmUna3EKGyrqdrHbBaQjC1jf5HiUEkPeVGSzK9Nxi3wsmhj9LAREsuo7jUpSwK4JnWWAXHyv6Ni5hty9F2tx",
  "key3": "Q9rnC245Gyzx8e6eWBZcEmMV9EqFkJsgcT8qPdvFSxzXiPDhJLvXj2bTr7gtEnTiQRGza9Cubd34fuPwNdqho2o",
  "key4": "tfDY3FxaYU3Phxn97kQL8hJcM7VForX1vL3z6BAiCjExtVwv9rmVvDAAXhDUFfvFJBHVSSFSDixx5F6A39MPh8n",
  "key5": "3VmdnRegNF4qRHxRAnHy9Axy5n6kEVLy94ViN1HYiTMWu2Fi1q2hqMmimLVomdxDUupKVGLF9iTLtEAM1xaYnatx",
  "key6": "4CKTtCNbJ3GfuvAbKLCfHQpCZq1D64YXw3Ao5WBtsB3Skb9jLRZZja56xEzCbDVt6tgpCw3q6aNh8YQ9szakN6LC",
  "key7": "3kCRUzRT6QGF27N98TD1jnEkzfz9FEyNzmzgJJqePQEvBtoh8qaMTGuH4pW1qPvy9bFQPuuTtJZZyncm7gM1TT7w",
  "key8": "TDho59HLrU5QF7Gyong6TLscqBRBa6n7naUih4c6vR6cjAjfDxr8t7gwFJrda6fxrHxctzUx8Gpyj34dvrAQ9VR",
  "key9": "4PKEJkYxPrmejupPDysjVAVnBSuZda5CjyXNE4Ef7XYxTxmHqm1AAx73TazujQAAJQ1ifqynrVyKkZns5F1jF7mG",
  "key10": "5mDWXUEBD3KknvmwW4rkPFSxamzbzzsunuGAB9C3NNdApAtd6qT1ppELS14u9pZ1WR4w7SSFFUYPAMt8pFx4Szo",
  "key11": "5yVo5L7asLrvWZw7KcRwRAthQeR9SiCtgZSJZGkuFj5yHrKRvLdQJ8A3sBrn95ZeoeUh7KAPw1mST34dF2snTDX2",
  "key12": "4vT7vzBHYhMmdvirvHkqW94x6MZmiJtkfiwsCdPTG8PJwFWirWgdjrQBjzhwdtgH1HJ6AMvnxm8KJyXdiC7fxP7i",
  "key13": "47cXbaxJDMuoYPrawPPVs1b8ovo7FG4njoBihRuWu2fSUGefAn7CLipFL8fyDHUzgdwZ5gayK7Qkme12nfoTYXgs",
  "key14": "3ScfxL3AZHnV635rDQDExszn38RUCGSgMfc31yCft7794QuC7CbZTCCDuQ7EWG1vgPE8tdSBiiztD8EioADY4qK5",
  "key15": "4iVu8rBhWALXUkVJnajKiEY1CuPq9NPNWE6XwHJBFSaF7VAogphjzF4FUE2zLGvda4XcBVX9WzgZ8E4uFG5yoC1U",
  "key16": "15pqDLMgSw2r3qNV7MFrWCmY1Sfu6V5267xqvf8McuztTiU9zzf1Pu36ECy7Dew1DgdDTymoqBrLumQsh28N4xM",
  "key17": "28qrLME16KQ4Ma8SYQqs8nprMSQKSSSLsqYy8qbrs69bv1wBcwnnwR5tHVsGygZqhawStjZjLHemPaefadrwrtzx",
  "key18": "5W3JGSFG6h4LRbN7VZEdbiJqtsir9f8jLJ47izp5MraNpvdNBTiXsp9AeePfCqraER7crBLui7sEzW9cy9fFoeTn",
  "key19": "4D7vq9LXCReyRd28DZRbVhPqHha9R5VNZaosXqVgYbHYjqJHax19RoFmCbMi2ifcqXTwdrnzy8XcKZXtUcqz4mZC",
  "key20": "3oLa4oWWWPanwJ1pNTmwChyQpMKmxikNEa8wd7oyx62dwyqskaheHLH2ZuhWiWUL66xvNzY4PRYaXLJmxGnSN9ke",
  "key21": "bUV488amSXjuAvU9TaxhZqJr48sgGG8SySA6DFC9oxigxK9DzhiBRwcjGtWY2EQnSd4Cat2oTsafQRy3LwizVJm",
  "key22": "26BxrYJfaDY7zwmsYRVkckTYHpY5GHjU5mtkFb7veMBrAa57EF9JDyoe9WbMdrnehUUSq1xWpnLAXFPtdsWnkou9",
  "key23": "25Fn4PXbEsVh7BsCcXZfgBab1Hi3u47WVxzdpCUDr5Ysb1XSRXGikZNnrakD2wRKi8cpyHGc5JDii9gpxSnZNaP3",
  "key24": "5bFthdppMHNggH2ZXiiQGHryL3kEEZercZqo75J1uroPBPPeFhGoV8yFFpKWtnqrzCW7rZdt6aNdAaoq8cVu8W6k",
  "key25": "4dgV4xDSmLWBrFBsQgQ5cVfbQWUj9kX48sppr6Nf5kT9mSXvn1un6KavmCGa6LKbTPuEvvtjg2nGoykCBiLmAbZN",
  "key26": "5jQTbKvxFkPWdWsdCaBeSCJwFkrntgHj4deJLn1YjxSCWjdp22ueh9iUsyDjWqRy66n5yk6kawPCtRGGwai5uGK3",
  "key27": "2vhWtEeQHM1dFdW9oGV4oRxkhrX3vPvgThLQT4TKD2w65NsFpmRET9FUoQAikDqUYPm1SQ5xLWcFPrFvi1Gp1Fxs",
  "key28": "5ES7FDYS26FidEmHBM4QAcpSookH7fsYmoJxaVoT844gJdbszV7jkn6fPyMsr46mxddUgUwamN6dnpsd7ZCnZid5",
  "key29": "3UXszTk4tZsdNJt4BErMsBN1rvUSdKpRJN1g5wTkbfpQce8bsjtZrseK9Ym4MDBSLdfHKwBNi29TiUTFU2aAXXTm",
  "key30": "4JPWz3NFPo6931ERpySqQwG5CZevUdxsANXuWJ8Yd3dGQR94x4o5YvkYgukh6z3qk5FgBxMbHvH5v7ioaqL8uNFX",
  "key31": "Fa33Y7QjZT1WWwwdMvrmvw9DpDysbz6xqUJta9BvYA162hsyixQqUVetZjv4iYEGbJ81CBjUiYov1oxn2wMFEfQ",
  "key32": "5QtDkfoBQvH6SNJjWb4jKhWHfgNzsHVeKguR88GFaD9RwpmeqFznypU9PW8pdZQwVWsknkGWzdWFmcuqogJVVk8c",
  "key33": "4JMDtFkf88EPwFwbiqsjQaT7ApcEhccHkMQQM8epku94Lbvc7MAezZijtKVWSdzTeePrWUHcZcPRghFCQdqEyBsR",
  "key34": "28KTmUM4nxSnnFJz3PtpMMxbUQmRB5Ev5YWnbzMUexkipMo9HKH9WMpasvPd8xSMeJNLzFYSHM7Nr3Ykphv8HJju",
  "key35": "FZjSxK3SzoBaaUBnZ8xSYNLxLco7SZ5fbEnbHLhoMqpJg3U9JbYPLBWQzwn8QoiYR6hJGJactVHy9ht8DuJUa6C",
  "key36": "4YrjXjCqxKTTNM4CsSc8KrKgamGAzrDmQ1EJeMMfvsmi7WujP5YZGaHDUAuHHL8dCgycHZbRqF6ZRrQMv7HVQi97",
  "key37": "4FRfy6qqoDBskT7FC1NkVsoNARFyMnbWs3Qx8UpyBQFQCQTVAgy6ptJAwkhRwhGhFnmrkwXhnr7poMUWfgA9GQsb",
  "key38": "C9ULGaKkavxu4A4qJJNASriuftmg8jyX9mEiMyEwnkJVEhcGARjq3MR3wY3xznYmZCBf5jRm2v2bj3ogvgPyvAe",
  "key39": "59EpdjC21GNKxnQRWemnHMZFkDQkT74pjZraR9pWyNMr5hYM3gwTfwdcE3aVExH6irgMHhKey8HBGrP8zJSGdcsK",
  "key40": "2eHR2ZXzvCPKSvWSB7SvsM34ADQdgdpGeNqhQgLj5QnwXXTfgFaWah1neYrdMjECexmumYq2zeETwSJTB23Rry17"
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
