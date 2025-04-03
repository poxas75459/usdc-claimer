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
    "H8eBR6u3FBwny452krUrfsnwof4R8XsFGJJDg6UWWyYn68Get8U7dJNwvum4sTyA85tszpqEK6eurV1N7hqzLwZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QRyj1LNoLm7QDvbm4jJuZ6tad1a1686pNgcmLoQYy5EXtemLqUfuPjWpHpP3FaTXWTfbgvoBfxm3sQeUBnMQ7ka",
  "key1": "2Xr8eDfAcmySywPx2Bh77DByAYe7zk2kPFHngV9XiUUrLuNnRC9sT5Hew2W2tPhpdULapDyP1DXZfjkmnMor5akN",
  "key2": "cJ2okzYvZXAaConA37e3drCMk4KHX8C58Vhxdi5CNBeZy7UZtQ2TwvreE2c4YNirYacVomvcMyi4fxZW4rVZPTp",
  "key3": "4CjcXHs6XwLvocNxJEua2md6X6PrFVvqARUYbSvsEaT2bDBHrd7GUP5QStUvU8cT8jxfa368uT3cLc54QJykwyVV",
  "key4": "679b8qY7sheFuE1ngn734TyFTrWrNp9G4g2ErAHhL8ohuGHYYJr9pvFBNmgwcbu17jJGzBwXwy1htXpM1XqcAJwi",
  "key5": "5GUEtN7NzY4zZfA7GPJLzizRnnvP83QLbgH1xUzgHEZfa7iznNfKxCTatcPArf5VtCNsLYjF5rbPCz6TCkLVamu3",
  "key6": "sqDcsXPZwGw1JCU6xCoBvz2ZTP11xD8LrdxaPZosgH1soNArud7DWKs5WfxKxq97jkT8Np1cxqLgbqFDAEUHpKd",
  "key7": "3uzegGasLtJqawyMbS276WCv1Bg6waNPEaToY6jeccJkcuNeeYeoiKGd1fyh2KQivW9VHMRjxgZVoLTZfUFXZ7u7",
  "key8": "3AW4BBWrTTSuvizDpswm7F7ntdgVoZw3rnqWHLu1bnpa4WrWUoHxCsSx1GzmibgnpRthS6JDdwNCJ3194VisxFxL",
  "key9": "2sppZ7kvQPcxfkRA3uhbVDkhUU1AyuNZQ3UAnkhPJFPGrkmNHk1xnPWQDgE5MbRhpZiLfQvEtHJFarXAQAGfyXCC",
  "key10": "2CbSSXpc24bV3qrWpTdY419xsG3Q6Dr2JL9obHWtQhAsLZNwk6CZabbSyMx2Ao8XGMnjpwni5T3YRf2LYt5rY83V",
  "key11": "62WFJ15sjYS11y2rmnD7PWsdeYWy4sredzwJkHxJTx9381V2zRsBrGRXey634yNPN2Pqocw3rcTrwnckZcQKnSxM",
  "key12": "25sv1LZELBPZw6jkgoKkvsFphmNf9VXD3hWSXnQo3CLj4t4PMUjTJ7TY5pq3uxWRHJAcMuWuTYZjdGXGDg5ZPwCs",
  "key13": "5j39heHDur8E18MRdUk1mKVZCjaxNXd5gWxv2CMwwXjdivkJXhYmCz1BMrG5XELHzu5nnk84ud1Y2LS7sFEaDPEW",
  "key14": "47WHnEgJUuhv8i9dEsjuDQJmtpwXdPDDgxvr2p1pnjte1f7gjkBCkdWMjxLP5uzcRWZ5pvH2pRrzTziuELCedJhQ",
  "key15": "2XZNzW4xg2jjYu8AYjexVCbesySjzyvscZpjECq81Na5esrsor6GBti6KkeDNUipvjzGGSPRDYHscrVKTXtYoyik",
  "key16": "4UMaNVCX5SR3QXkW4UYEJS3tUj4oLMrN3oGVRf3A3nNMCRzndZXQCrkGWstPob2EcUWwRuXyVmMaeWoxdSjtdBD5",
  "key17": "63ojTFW4Nu9pMAMrqfdgcHFMVoosGYVPNiKuVzTSZ3wvbaXXthg2zHqHAuK4KwiTZ7dSPFWFjtzxKY5mzxUDZDap",
  "key18": "3KjbuRXUfKVESSg1WLrKpqEqGKwkmAgp9MvHh9v9GCq1R7x8fvCtMqn8pRUAUPh7bMJYPPSotQa3yrBYqJ53D2ib",
  "key19": "4M9JFCrBbJCp1sFCSzeRgmkTe2F2FQhhLhV3KJxpEzKLAg5RhLMsTnWyb2gTvNuHGjXrKvaFCsVr9nqFe5ARuD63",
  "key20": "2ywuS8VV2FvvZ7f3MaHm1U9u3k2CFLE7yx95HNYJt2o9nsUgtym1zmVBwDyGcjv9F6VnUg5rwdbMnFt2VpjABHLJ",
  "key21": "3s6xDwxcGNC442aDkr1yzjnunqhX8vbmppudrV7c8QCWNzu4ErjDo49R4tJPpuSgwJkFa1va2T2Y3Fh7F2oj5nEX",
  "key22": "5qMcQjQqrco42w7z23qX2ZvAuDUYyzJBNM6x8eZjXiRGZWgmpfJC3aFtTCmEYy5nhFDD6VyhJrYZumM3Sjb5Tth2",
  "key23": "39K21KTH5eMZWuoCyBkmyx1ApLCiX5w8NTp4B35q1w8hCqJzW8vQk4YpCx7X6gjgXTGHDCFw7yWMQMReK7ccqQXK",
  "key24": "3u9brdnG3DCQJHbCTWEZNefTK4Ta92hdxa4ALPhnAE5rnGXFqoffVjyisk4FTWizpuqMuU6h3E71uspPE1rKxaUQ",
  "key25": "45fTQkiHWZD7dKbjaQYLsekMr4YrRo82Byn3Vvf4VroiTGv79acZDspnvN5aNGyYWhQJKTJrZL66CFVkPdbGcgdR",
  "key26": "3LsKyAdKam687RAHwvsjQgZWb1pRcFzoGaNYEdcfe5LuE5b7EHtPdBXfd9TTACmfP2Q12SxyisBqp1SdpC6P48jP",
  "key27": "5zNFLppHNNdQxF2VstK9Hgv81GeyJ6jycP8HiptGiCwckpUM6zUUC6bKdkhaAxbBaqmAhQVkpz2D6GPbgEgyY4UT",
  "key28": "9drFX9qgTkWh5JX84vwBo4LKVsZZbnPzy2cp66UeFQ8ZJMjUwzLyyV7QoqBpu3r1Mxp1Z6hqtybpew6zARU5on7",
  "key29": "57XFNgtRkhDGdV1kqPwjBqUpJp2Dj9rHX3sfRffysR7tWq4bdpWTpeTvC14rttm6nPKfhWJw29xVLjK1SxejYHfL",
  "key30": "4Qo7KswmiMGm9MACcfrqvGtcb7MkW9k4srPYfhEQc1Eaa4S44UPzTsnKSdWeQAP44t1B4zuTxsCdHt4kRVL9naM3",
  "key31": "whwwKJA1RjsWn1C1n3DFUuDNW3KyGx7MdQ8cyQs6a3jowKDQaAnSWhAgcmM6T2cdnD2oAax3pCFoSJnkTfqC96r",
  "key32": "2sSfv96wWTWe1HHbd5MUSfifgU4vJBfBx6giGBuAsmNQuLJmK8sAHn6UQiQbmGY4wPtuDaWX5hRjED3zBdAvYi6K",
  "key33": "4EqH9iZmHhJeiBCxKCt38gzCRKWZn14m3dVoNv6hXDmHYaWM6HsmKGebVT5zDpXmAuHZt9w6SfqUwEk4R1mZCB5q",
  "key34": "znw4vtQq8gbiaMV1pQJgrCsaT8wWFtsS8h6331pwz1yk1hgMonXqSheq4dChyyRLeeLjirbxkhARuuZ5GAF3UmS",
  "key35": "5xbwATf4EeQMnstpHYwqLyNCaKLMS9PgbeZrdWZGtC4CL1xJetTZMQPS1P74iTE7ymysCRS8cESNa6TbzDBSyNr1",
  "key36": "5a9uJYWgbGwL97b5tbXWrZfAbqAdjimpJbd1MJyofTJ7G8y9VcspFz2YMuohYtPBVX3o11zey1VTM9RRy58vr7H9",
  "key37": "3vzK6rht3p6Epcwh2SEqTkaUtaFiEc1cyRtd18Mpt4ici2C9gC3oK9zV1GbGBDHv3VY8Dy7CvdEYQUukKoP77wLq",
  "key38": "3bqTvxsPEoFNVyr3oG9zUZuk9pEtDwJ1FWqHFJgWks1zcekSY3K9d5A9b1gG7joHq5BXRiwEBrGmir1pqCwhuav9",
  "key39": "3GX9NkC2j5ZbYzwweuoqXTaN8EtB2XUy3vAacbf3bc5sx1kJAMcYHNP6SXrGtSF73G7r2PUEXcGQjTPeJGvWtnXj",
  "key40": "4pt4Rd9j2NdYx6PQw8HWwy9XbZNDyxWhMsJuPC294RgFJrPckcShkJz8ooQKj5qNZpJANm7L7NCthb78HzusGi42",
  "key41": "ioSSHVLCGKT7kseqeHG79Vkc2zKQ8MtNZrtAYZb1oQQLJRuHpCuwpujEnKjc6Ew1BWG3KCTcfYZiqT982CWwRk7",
  "key42": "4jGdHkc2WuNgwPnnoD1RPyAW1kZ37vnsvXgzrqgZVnTuMWU4WSjndyjEpk6e43cGpoDYj5P5rG89X3vymTAAHdHr",
  "key43": "2XL8kVY43wZWH3nwqUhLRYk7RRNh7R5xLMJSXgNUmcHXEEfYVtAbyW8hKgu2yg6BJCugv38Ezpt7NPtSmjC15DPG",
  "key44": "2KM44aZVCmiNp7FD7w9o4spigpNj4hpgUqp2kWTdqB7Pn6YjD4FXrPjkeH8cLVceH6YLv2cjPjMNXYJHBFmUfwM6",
  "key45": "4UHeEgFW6dr9n85rCNYwyYSmuNaPCZgnbkhDCvGCYyjnDxPn4CJaezizHqUxwd1m3eassDPoD9Afvun5hUshzmCE",
  "key46": "m5Mu79cfNvVz2isxykQacMeyNmDA575f7t5F9faHL5QjqHEWVEKWu1K6BHjYGayUT2cmYbwdKFXWNv4LJK42N4v",
  "key47": "3TsxVyZhEnJRbkcSB9wwPJmLQVBQyYqCjfZKtqeFVKfLkA9WALZ3WyDmieBaLpxj9xsqHutxrSwoHLoNHrZi5cMz",
  "key48": "5WWxk2tYCd3MwrPmM3AaaTxToQ461p5tLAPchK3sXsnuLQmFzLbBWEudDfz5d4tayHj4VBa6aaBpKxqzynLWTzq7"
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
