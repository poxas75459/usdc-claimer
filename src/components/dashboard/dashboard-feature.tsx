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
    "2auBTw6XdMHhgh7i54dfAn5oouE9VubPbnQiAQ2FYtKrPxUvNcQ9LhGmSFAqCcncuyd3fm3ceocmxqWYSXyYpX5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Et5Kdko9iB9HRnbcqok2xzWBWE9JPSnyY4T5bcnAtevxoqxvFZ2JRUTRjjFHrazAnzNrkS2MwHtR7kCxzPFUzNL",
  "key1": "5bd7LXDvxAPQD2vFcwtvoRWRwg65eNj82vHzavKB51g62xxwqoSqYYKNGYbNhiJTGkKkZzdo3n2tPxHrsHp7Nvbk",
  "key2": "4huLwpW2VtABaJBYWmZNQtX5iGH6W7q7hTvR6J48JyEVPjPkNh174r2bjNer4eFacnxYGBCS2ScG1xt5vAgHZZDa",
  "key3": "47z7cpTwTeV4EimDuepnqqzP921WJRTWP74eN8jFAjqGAzmm5jR5cqdYZ96DS48QTLqMmXHYxDqnHAHMH8cJuLxu",
  "key4": "2EBvTZptysVHwiQE7F1esuefWAibGARZjocHwRoF2LjtaMsRbtXzThhkQ1Ue9FhFot8jseZ9siqCt8F5wnPHduYD",
  "key5": "zDKcv7mqDcMQU5u68MLrdGpdtqV9suV627xEKtWuwWN7ekp1vWJpUDmkq3sTgixsGUXgraM9efR7tgvLWof5zEV",
  "key6": "DfcmGHdBPbpX7TJXT7opEboFedQdyBJqbd1528DwV3jwJDX24rj91ZR5KgUABufw9PS8Rv6DHUJYN6EVnnYW52W",
  "key7": "3V5QHDGbQ7Z7asbZkn7SkEFocV2Cs6FoCAwqNGpqn4SUGmPxMxW3A2i3w6efXhiusJTcQkVNnjsX2C4DKuziou76",
  "key8": "2P9ar67WPL76oMPyJcN8vRX6u45t9SKit3bPCynQB12pTBAhLjbAP6ii9fE3H7DHSarqo1phhwyvHrPzbVrnR9Q9",
  "key9": "TP8itxX18Vivw95qUtSn56gHtkPCsm7w5EnABmWooG65AwgzWjiJhUAu2iBvnZ2SQrKFkb3sSZU29uQYwyEL8Jr",
  "key10": "3DnX2KmMniyyxk48RpxiS35z3CJ3e4xhXiKPhtMDPDDUhTX5eG7JjFCAMk1qnQRmA88v3SNDLL5sT7iduG3Cpu2R",
  "key11": "4p1eUGwJrLeEnXQmKxr8rUTBif29GPhLcCq4RTUNXrgCeTnkDziXskuzeyWGK2DZqvaUjR5nePF9p4PRew9GkU2y",
  "key12": "3yFwaLJsHhdFy4WBhfkuKtTPykVb8EHF6LMXwS4FuhiUKtFaxPSrrVdt3xZiRJC2XowSZB6YSepdU2UBFPqY3GAu",
  "key13": "4iNCLNgzxu9bVqvZQiPEfuhMtCcc1VHdMVYPhpN36RyAcvmmwpys8RQTM5AGeEt8Tc4JhLLv9AY4Xaz8wKuiqKGW",
  "key14": "3r55LF5dDEvz86ecH2sGEueR8sSZcr8R2eG1Ht8tmJ8zEFYNKPnFm7y1zEbqMuUL9VEECNrTMSDPzLaeBbC8UwL8",
  "key15": "BNXXmCpsVreB6k5fgPZZxjbmeQAkHFvh6mqnyV9TpH7yQrvkJZjUm8Gm4kdqC296a8iqhqdiXD3m5KZWDRqLb8X",
  "key16": "yxnzLVdyTQBXH8scTSTFyrNhRrkEenucXyaDRTod9ui9zuW1nHkbmH2S3W2MTD617JCcDekMCpQPRXeG6xSb3Xw",
  "key17": "5cMCSUSGb196bUFscuxKKQDSQbHWRFj5SvggXebwq5C3sfthRquKXDmqMVbhnJmUnANQSiXgVvw6nzTXwf1BtyMW",
  "key18": "43CsAnC54PqQcHfdug5AsDnbX1M8RVYBGL4gAeRzYxzcYJv1t7kTEsEtXzZMAX8oD3Cp3NPs7CcWojGm41oJwQYt",
  "key19": "2YVPKf63gkxd7Gxg3DA6nibNqDtNU4NF1ZZZWVhDrKGLm4MastqXWS9uy3tkCbtXZqM48FsT3nrQYD765Rb85Xrb",
  "key20": "dqHGsSvUU4894vBvHSEs5UbQKJ1ZTYcrWZB9kd1Xi1ZuXHCVoEiJWZ2x4B4inG1PodTAPhknB6fKBNTptgx3yyA",
  "key21": "3rYXtHwCuErvsmv4ZGANKwdk8QymaA9N3FWW6c5hANYMo8HWsfYFJANyPVMTVPGwJtNSyA7dy1LsWXtuFyBmqXLr",
  "key22": "5Q2Fu1YdGDg9hXacK33WFQdwN9haPz51hCex5VBCzuVPX1oFeoZdmJay12sD8X9PENN52XG3yTB4KsMp7ixta8B1",
  "key23": "3qYSswMpjnm7FQ2QNAvcaN3Ynq9eCYvwFKB8ssDKyR6dZtX3pVJAbiSUVd9yJ3BiY2pf7fGYnoypZCqZQYV8wMcf",
  "key24": "5A68WbqA2fvaidHH9uekE9Bx6cnfCA7d6Yg6bXH8YGGqL6Dv9RD3C4EQoPrQWBmReA2wEQzF2Mhzx2J5NJwH2zEa",
  "key25": "5NyBF215kRWydLMczq3beGB7XsS6zhL6KpoNW5XbqKkWDZVLLFVRdkKzZEXRBW4FYLS6apDnLc93g76Hp6A4TWXd",
  "key26": "3J1PJPCeSi32sQHREszvbNxyspMcfWfcepiWmWYpFzeZb1bxgCFdXyrtbmo3BVkdtEdPdvNS1i2W5FGdJbiNna2w",
  "key27": "BY2tHxSeU1sA537yx5bzGmxymvnvmpPKz6xtArmA89FEuXhhnERzn4JMoMdnLnd4PqnZtNPXscFRJyygVaQW9P3",
  "key28": "5oUnk5i76hGrXKWBU2fpFYAKtbHUs6x3QGkXCZuWsUFH3fKJfi4Jm2aM3bD6JrpWtcQz8hFvfdkJUHjr61RrLzPG",
  "key29": "3a8VTUWKfQy7RghkfMX8V8y3mKD6ZhAXhcAphaCvafbUN5aqajkY8jKwjhaYwMA5ctF7M1gPDFrwZb3ouXWeCrxs",
  "key30": "3JXZisU5KnNgoAsywGW9Aedmdekc6piMLyEjc8woBpUzbFkFcSaKUYfsejVmU2Coa4LV1GkN8d6cYrkLo6f5mGrh",
  "key31": "3xh7ueSx2gfsUsVspQeCpgG8sjPQ3fJzNVdYH17RmPBLTWTCULs9azQyMJBSoxoSKKkbUCTJNSgcZQastkvQKBWt",
  "key32": "52n3y6dYP4JH7HmuMqA3N86tLeaTcymzyb55vaPZLQ6qBX1gPv8mwvy3XP3ShvB7NNQZ2MCPP3xpGaSnPq7gQVtU"
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
