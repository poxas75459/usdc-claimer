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
    "4uypwt9vFAUTFWvZANAjxUg996p6k3LUCoQAkaXEXDZg9M8RsxGvc2J8P6wJxJ4o9tE3LT38wR37rhbfgMEXUqjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9WgzLhMzHGP5wZfE3q2pgMUxBMKuZBEtbz9ttWDuXNt8GwondaS9nhMXyrEmYpsBEazyuwZbNV6UkfptoRCk82",
  "key1": "37u2GC7UBPCN9UUWQQo2nQgEKbCd5z79GSDppmXfvQbaC5KktNFRFsB5hw8ATMwdmu2z8wcwPPYkEvPtm7RnxJdE",
  "key2": "5r45Ud4nw9pssZo7peCLTQoi8X3QNGs8g7M5Xom5miMvC1KoGMguNKzRsw2GDjMSooe4yHzZ1MPQCtfqf27ikC4r",
  "key3": "4gsyoxEcL3jyXJrvcu15H3QT7dwzq9WLWip1wCy8jDs4QrCBnM2CL4Ka7dnLsVjooLMPK1pGGhGwwd6ZW2emQ67W",
  "key4": "2MNhjbNxiMJdcq75RYDy6d18EsLvaezL7yAzxdoimQuQfVhTTJ8fEFXFb6drB7wDSWmSE97Yuf2YkruRyNbSMM8d",
  "key5": "3rg7gmdKTchJtGHeb65rBJx6anYoJVcV9jw3nKj6XJMNTowggfqwEXjmauxVWsa2Hhb1aRQovswtsts4wvMQorVw",
  "key6": "eqtyyuvCeXxQf3hCL6a2XqtvXdNdc2MVfgRCuCY6kDAkrjg3Cn8xsXyFnu48MbBwkxc2djYDWXomZqLKL9xZh5F",
  "key7": "4ayDrb3nXPpzY9HSJE3cKF2kmB1orcko5wcHVjKovQ6sDJ1WioYQL3TY2Li5FaAXKNFw84JBjkxMDWQ4XoBsjDvm",
  "key8": "21xNSGmNw429rEhspmUfnv3wgEjxcyN8eqiUEpW4Z2fh9d6zYLbQzpdU2JMadAornxHeyDYiYvJPTdGV84hJQfVZ",
  "key9": "4BeetJMzVSwJhiYJvgSPgLeuBmQGT4FoQu5K6WHNxpznyUuJo8ViA8CgFLuqLq1d46iHpE85HUVmGBjweb34GN7G",
  "key10": "k6WYP9AK4HNKZfq2z5VZUY53NKW5sUTa5LG1awL1Ldb766kDVx2Nhx8DkvEFfGbD9MLSDDmUuEzEi5C2byxa6LS",
  "key11": "3VEMSiKMxu33PnN6bHpDnzMN4GGWLcf8K3jQhiZkoRHVatxcbmDgXDgR6cybwLsQTHwPiLxjVveeXDoar1aA1G1C",
  "key12": "3yuSSfqzGMfLVJa5SnfRX4peLqxeNn1LLqxPXzJaUTL63ii4JSqcApk4mW9T366xP8CN8dEgbiiCcLoLfVKPN36A",
  "key13": "44JfPzz62bFQrS13pjPfUMMoC2XdfwdvE51VvHFvLZcxG4mr18h8eNWqTfSGAaMT4fgJdja53d935iPPLNurRQ2H",
  "key14": "4bUkavAL5yQmkRxP2e6FWkxMnQBCToH2A6ck6cXBCFUcmJrnJRySqyhW4YTijixNfMQGMXF2ayaxtm4TbozbESzB",
  "key15": "4U2KhtD33jU5bYEv7pijFryKjEKsryE1zm1yFiiCa8fAuDHAPv2jW77PqJeMpqUo3pDxWC7pZKUfJE2JzNGejSvX",
  "key16": "56bXwiP5ng4CnhcQKaaKUf4zoDvJKc6B88RZHd7g73y9B9ZznkYmHEjoKnZhXN5YZDET1TgdXrg3EJyaeF6vZyD",
  "key17": "641TtDKScvJ8XdfG2euwFJuf21jdDF8FMjH9zyPV2hHXST3wD7pXgpLPVggjw2N5P3F9nBpUd9DdksDXYN1XwvD4",
  "key18": "wLuYmt5J1P7LSyakkAXszK3CWaQPDv2Rrkw7eyot5f2fGV5xVahwXYssZHBoYUqmXWTc9Nc8QeZL9gQ2M3UCtnt",
  "key19": "2RqGPZsyQMx6LNi7eHf9hwCLk7HJGu5bcjfTqwMaw4TAddjUmfSYtiCZVu7BL2SaxS8SmBr4sk1txNeRBC8DFLkz",
  "key20": "25HepbhZjkHDQEQKcvcnnb4ahA4pqFU63ZjGrQpQJc2UPwhqaXW9J2n39rELWLoegEPTejQ5DpK94KLJxoVr9PXo",
  "key21": "31LroGggPrxCc2UYMWSXqv4Yeu8wEEXCp3qospMZ9m5MvPExUTBGKaxGsCAweRVx3qtn7aSzwSo2X9VY4DzA5RBy",
  "key22": "3gDLwFDDWxfkMaDonETRQ4udtDRJSC9pz6bUnUJCRGQ4sfWZ7YMNpFPKNfJnkskv6sEiUy13B572yPkTf1X14a7B",
  "key23": "9AyjcmDpntnZPEEYg1aEbocxvfdLUjehrZQcXAztLDL6DT2cYMZbDYCF7SPXRgrB8SxANnJpCsJW9XhLxxd8jJd",
  "key24": "5mH42QFuKeF1ukhFqMaATW9kH8Qgh116wejaaFutxYFWH6gs7e9AAcbxW5rqUsxHGHmCSZLovtp6UGm4W4scm5C9",
  "key25": "2zyaTm2JtCezG6Kh1ba22xZNdaYjFHcLSL8zkvkLUApDbNHfYiKSQUwpT6BmcAQKUNWUDxfmgw6TQBQsGzhzqox",
  "key26": "4UQroeEmfWjUZytyFPGAT3in9SJFWVCUMC3CSYKzigZsxSbnun7R1dntDCL5tdSMS6D5aLR5D4Wj7UDovuDme7Rd",
  "key27": "3hRYpnXgDcSLUVHwHSjYmw1tU1iYmsyuAroKVpTkw1hXr9VSPZ9ofhHSgpgQK6QQTmKwSr9cRX11yY7BS1KHDvAc",
  "key28": "dDitsLkEJp8Xy6ydC2pX5NuR2weyBEpbWBSRb7QFeXrrFHofnnsZe4mUBw1uD84zdDFWX3qGYZVt9JYykD7bsHa",
  "key29": "YRyyTq6r2qd285UttuqwKE89dbjtDZWtWnQGjqXm2vUQqbcabjhZK9Y4VJBeopS4TP9EcR3bVAGuXYDBDg8YxuW",
  "key30": "4ArrNogdYJJrP12GmoALLW1Baeqeewy5v42R5zsb2GJGv7X7uzJL6RuwCeMScuwirew7VYvPGw36jtbRaKhZNDzi",
  "key31": "3SSCmRA5TWFRD6CKA3bqx9h4Qhwdmm9TsCyHDorj1ofQuxfjhGi1A4wS82de5o6p3UUQk5AjbTP9yZJhQvFnmgTt",
  "key32": "2oGNkD7TAktKmAbdqt5vGrUheid6cP8R6dVoJUoP5eeiiAXdufCPuSB6CsXnBvdtaRA1H52W4ZMc9EtLrKPwHuge",
  "key33": "fJUjRYs1SSufcpiBNfcUruKohjnFT1cL8hTxjTaBDrv6BTAd43AFab3EE3vs2tfiRRYooaUKVBvKtHGutctqoTj",
  "key34": "4WReadzoMSFfDhDkTndgkx4sSyYuNtvPSkV3vct97mLhJzhyN1PJMPX8JMKetrRehrDL3Ra2zKSuWHtLd9tNpa8n",
  "key35": "3ZqSGwS6sXFkSxKwF6BnrnKGkSdPuSDQmQcbCJ6GcTzUxauSLWLXamBCSwqq27xmqQjv1rFNJs4LH6jr255ts8qF",
  "key36": "3Zj9nryJLuwhYgja9qovFqpqtkPdyef6grk3SWxzXMVoPG7JUMXMnH9gfdg2iCaHrBwS9FNDmk7eShVLq1T9rJv",
  "key37": "3kSPRzeFnnTor7CkWKBywQ6dH43W7CJhUZoLDfJi4Kq1LqdDcSjCrvzjyvJq147kfmRfChrLUxnjSgh96YRXNiTG",
  "key38": "46z1q781sB5bFLZyB5UFE5GRUX91aXj11TErohBrwWMQzfAEeLf4UUcakoTUCMBMWPcUJknBRqYNsQSXNUBckx1T",
  "key39": "49DpFfbPYTQfjrpZJYeTuEwsi3Y3STSYEgySDs6Si2zSGoa83qSQ4RAXWhRXY3wXmGuqB2wqvrmisQNZhGy3wV5a",
  "key40": "4tTAjkvKXBiuFHfgDQkEUYXKe6w4mDM2AFdyFVm1V5DQmnyi611qsYhcgvLABDFxcuAh7WqyN6FLyanf5kiJDMA3",
  "key41": "53mvdq4SehtkZ27v6Awx3gMBdJHHEcbvigGduTN68iwXiwVYH9ugRq1yYJtKxX7jug8SXUNpn9eWVxqjUKSt9Wu4",
  "key42": "55VbhbHgdib4iT1YgAY4kzVe5pdFwTXfSAiBFmKuqQiqaDZYqTHVi64V6GHAuYM2SyRdVHsvM9MQrS5QdX1pyavV",
  "key43": "5mSyRD3QLapPCzd82gWG6V7DXr8SdZapfacTExtvba9CgoAv9X8GuKvH8TY2uYFg65RoojJj7NcmiH83xtZodcmG",
  "key44": "3g2hBXegGTevvsZPd8nwpwnSSd9HktR9gYLSipti2174utFuo2aGqsWa7SRDxGdg9iM3nMiTJ5ZLA3crD9FdwuCN",
  "key45": "2CU42tXEam9RfUgN2qaokcS5Qvm8xTXmzLDZtxP1yFdvYEfHZSzntWvzakeCQ3aqsLM3RH6XJCwRo111eB9z9qr8",
  "key46": "2kBXtoS6z3nu8zZj5dzFU8BkvSZiEMFE2sBxY8wsPbwMSMSijYQSz1EAEAm3Xuo3dLVpdsbhRYqLKJv8F9zF3WGT"
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
