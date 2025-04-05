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
    "4LgusXS1TENacmDS1nHCUp13qbv97C4PxcgSbFVtPadWGmZbMg9UdoM2iNwBSbCSYMtqSxJXYw1i1hJn9voRpKb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUT791jngPg6TyrpGSEqwyZMDMHqajKCyWCr2Ksiz412c48Pzwy2huFzUoTLRwcws5Prkg3HM1tbLiNtZwkt6b3",
  "key1": "38arje47UPJFgHRAXasmPh3du2rc8HHMui5cQee4SZ2j2vuvJnBQ8wQufv7RkByabf43pmTtX2gm2BSWqeSZgKTJ",
  "key2": "4YoA5gbXo1vQoSyycu45UZpvmxYPzpTQJG5u57cnWw8LH4hGt6uYaQcgDQG9WNa7F3Vnivage6oAVFxPFgNJ5j7y",
  "key3": "54fK3v5BJR3LCkfbNonRvWCeah4SRNvzo4VtZV5QiNHhkkmJWiSBqwM8PWiTG4GeDwaAMy5jLKaNRwqSLnvAt45G",
  "key4": "n3vxu6m4DwTXqSf3g82sBwbvdt3MXxgz7hMfT6aQBdT4HDtnkxCw7sMEzRgHzw3wmhoWmkqDYbTPGd5AWYNEBK7",
  "key5": "5KUkeaSd3XDPoRfsYabv2R5WrsAENUY5bFiNNpji1nZPUXEsYfdz8TzqygawFDgWDMr8bMWsoM4rN6XwNcJzjNoh",
  "key6": "43kiYaRfBbkyy1LWhakBXnxauyHVickQxEAGmyjkqKa6MpMxLCN3zZ6RXeKK6fyDofgzjvcUi29dstQFSvNm92GD",
  "key7": "aWdEtYGj5tgz7QN5W6pnHS8EkxwfbXsxcnexc1sP3FHr3RNBRYt814aDEjSsMdxF2bPhuDmo6GFHu8a57W4eJEi",
  "key8": "64CnVCmFReirJGCoRbgEX7AYEUjw2sTCweJcZAEvzQKtYxsL1KjsDmbAc2m7KkqgHTf3cQyMY7fT9PcLgvTCPyjs",
  "key9": "42iHzniHBhLYhmufn2pNF7paVABHweY6Qb6KfNeDmiiVs55iTi2Zi5Fx9Xz381DVTRtvoaVq7grs6EpqsG8J5MM",
  "key10": "3hzGh62njbcUZjjuuYRiHNvGtizgo5pFs4PqkvSBGhYRn6smRncsFTr1GY1JvKdViBu4eVT8bNdpVvBYQjTLoQBB",
  "key11": "3acpBBejZeFm5N5JHAnmfYeAsw67HHPS1vx66818RsK9QAiaiqmkGaTng9czZKFwETc9Fzdf35H41MH4xEVfMq2S",
  "key12": "2josTcC8q6RnQaNafwpCd4BLjZuMSttraDUThPkTzZaPLKcmXJhs4aqFUX9iTLmLVaBs1syoEFPakZnwyvcuey12",
  "key13": "5oLzM3cdxB4oiXWviqZrsRPzS5RCwNBc74bYzJC3oUAMSLXzkNFHzxdrztSVFnhZcYnFNFw3Aso5xeACtPjnidcw",
  "key14": "rrvXxrQtzVdg1xGfQYhvPFtgXYQzGkd2RoAbJH5WwNbPB9tXEkgzsr8XaaStBd3R9VMNY7F1VqnQPPXbKXN9RA3",
  "key15": "2hEu8H7DuVsN63dVbGkQBRmieLYebhuxKVLVQX5cYMDovagtx6UbYwEDspYU7oyhcoRZVndbhc4KQQRzFLbzmdTv",
  "key16": "5nytZsumxQRe4vxWm2oh9b4kHw7jDAFgDM5t5LpNyJ2WAgJJU4WcjokdQeaAJMtqTENAkhsn4PBa2ucu4yjmyRfz",
  "key17": "4YHqEEHukLTq5ktXumNEAou3opGut4tT1myEtxYcVXg739M9cseEB1L28oXHKdtKxFn4qPcjLkmMJA2RZXVknULs",
  "key18": "4Xb4RBhgPQAF3QqLzc6V8X9MUSUtLk3u6EzrQe1oqLxmjrPByfoqPLqfgnqoJZq41aPo8fgv7yzboGeiHZCb1UqZ",
  "key19": "3vLsfEQfCyziEQUaNCn7tfz7LSt3gq1VMzonrTuqAJpuBTNZoWDrpbfdgGNfrZFH3yhoLfsNxQy1T7rRrUkNYXcD",
  "key20": "L9fDGBtsEvXkXueEAmFUmxx527SkFnpZgGDxVzGUtcjFcU24WxuqdjeodtFAXJKGipudA3Q2dUs2pt9iusLnrw9",
  "key21": "32dcHhd2ovEn7H43LT6YFnYSStAAxn9AtT48p7gBWpzQH6zutSKqAgJDDbCWqcxd8totBZ5R56rx4cfehWBAtU8C",
  "key22": "9hnenu1RLYWSVoGuRB6aq3fvjyjHX1p4nQbZYL4jYNPNkFjn4gu5M7jLuY5SAGQXU3b4496vMt1Vf8nD9Fz199T",
  "key23": "5c2CaBnCKNWs298HKUemLQZ2ADaKeNSrJ9VKJLaadQAWNQ4tPRRAxxmQFLc8kZA4QvVE43z2X7Hs2frU8kqZpAn8",
  "key24": "2BpC9GoToYHtfjxyowiWKkdUMWRhXaEc14ZK8WMB93SJpVkxRsEW5u2oGtLi7LoNdbEZdPcQ38qu3aShPpGrKW4A",
  "key25": "49vtLgRbTdNEFTZZPAMuJ7s9FPJFsakyShPAYqKFmPPkbrCxbhFQMmdCZ6vfrCZV8xYbEr9s84oTQNTo7XEPfQ6B",
  "key26": "4S4spCWDiv2F9nHW3Wda1SqjQ5EkiaNyW2oHZUFZNhXPNCJJTcFvNAQdppZWfeuUH1CCWnrESv163CwDcPxjq9rd",
  "key27": "31wcf8tS9Eda8a9Tv1zPz9QEBSb6VKtnq8WubMomuPHEtBqwgWmHGP7vzLaKy6n95M9R3bSFgfPbWLwTxMGaLYst",
  "key28": "4Wd499EaWYnyTZECx8krZ5428dh8jumdvs7RA1kbaFmpM293JXuPDUx3U55Bn291kEoZH8JhNDnj9MhG8DiQhdjA",
  "key29": "2ksdcLivRWkmmMEBMd9e1xAS5Ea3AiduMSpE8yBUjymJjR5ADzeDqoEDRSrtrDMprrnAsUC4qvXZjoT56YzRpGve",
  "key30": "3fivr1g9twJ4rWANgfCmBd5AE5X6QXArNSXdMF8C7nKeB2NT73xFbdAoGb3gUxfCFEkZ1knRFDNkdzqrFWz5VynW",
  "key31": "34h33Zu2nJZhBxeg1MiJ3FgiUSZQ81wpjvdPiaRzqe3wMMjjLQRXxde2arbVXpZx3jgt5YoDHwRSDE13JqK6tqdq",
  "key32": "4Nm9GzQJWTcBu2NVphXXKgjE2R8bFZ7yJwwW4tXBU1dcynJYNwcPXRs4jg1CuxcuhCiNujY9xC5x66t3gMcezi56",
  "key33": "36kQzYH8oWMbyXbaff7zsLb2izKMaBHt9V2XTf1vVr4gdC429U5vqi3jwLWf8Eg73mhxwuYYjvwe1v7PyThHgu48",
  "key34": "5piku8PhSN7sx4CVGaWfKP5w4tqYi6gZBwq6ZUUCe5MyELAREjszCgkvwCFcTp9baZzwx99gvQDt9tpme6a2St7e",
  "key35": "263nsuodM8cA1guegcGfo76oa6CbXG38ybkrjBk7onCMXM6hu8z8EKxU3KYrbSKwFtW54rkiV261YKVdtU4QqsFw",
  "key36": "6PLjv8GeF4EisNSxqj1J1U6Gfi6pNByiY4ywqdz71YpsCQP2mq7tCH2dR2WmKAXueXrbAPYcrj7tC3bo5R8i4eo",
  "key37": "4m9cP2GTvzRb3aCbpwDgT3MDmniZQuhFPcDb4gSAdYzqCUmXJNQ5Sqw99xtroLeieF97s6cJup6Z7bQMrYJkk7fs",
  "key38": "2au3mDbVGKu6RckzFHxzdkW4cbeboxpwSfQDvJrieEEq92UzkRg2YsDn34bdh1qL5LCcXgqSXh1Y3nWeJdtKAcQj",
  "key39": "5hbjPwDcbLAH5w3yDd7xzd1x2WNWzzYt539NTieQ5HGFJBVshL5VGxNk48LDcy2SXEBFJGh2fiWqSp2gL6KEuRHK",
  "key40": "VtH3r3aw9Mj8z8YMkPxBnY6NZWWPzwuuEC3tH2ZUNFqFMXsTmtBRsoUWuVUeKyxp4KJgk6mVebQJ9gJuf5aQJ4f",
  "key41": "Nah6pENqyjgC4YrHXhLzvb9dR9y9YME9bAMo6LnDDgQrEyB9QPG6KLAzePx8aASeaEKXzbNyJR9gN3UuWLDLXST",
  "key42": "61pMk214J4Z5fDkFqHxnLVJTetqtgnXajjmENysatKsHeaugxih9XNg5d5oBmsfHTicz8qPxdCAzA5xB6Cok3pYC",
  "key43": "TmAHt7Sn9REW1L6EAF4khMNJUKabWZ771ur4c262fyoW7ntQf79BXHVB1E8iqPwdW4nBwtNHJ2sCHqbkbmvQytE",
  "key44": "4qCDBEvyowqTBNxj4NpbF6wRka8UF8WXGhtKZBPQHruwzAFtc2HnFV34ga6J4WPkxdWcHuc5yvk9SMvX37dhmL8W",
  "key45": "4YFhBiDm9EHB2EvjxFMu6GQBzinHJ97f6fnzKJk88ombsD67jezEsPKvZ41dtF6HFV4L9CyBUAHSNGVYULCxjnjA",
  "key46": "5BCbsi73RpfLvRCHKTn7SdKqkBdkSf5BDGQNMphsyDVy4TZWcUdcAXon9A8aK3oRq1y6QgL5c53bfR2Lt8UNSwAg",
  "key47": "mu7mSVNN5qcYJp4nCmLuwumv8XK6ADrkdD8Jpaso4Pyc2bjHDTQK1oMqtJtQaq7GRPRxoyBCjZwhKPySizg8yaE",
  "key48": "2CpBHYh9pCbsAHtKWtNacMUb5TF1NhmCQvFMGUyjWCaVg9xERmb1cLJx2ZKCZdYNydMG3gJAQwiqPk3GQg8kmYiH"
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
