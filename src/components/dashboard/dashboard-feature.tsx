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
    "2977UwHpaHtVVAHErcYcURLHhHtnycehgeuekTx8ofkzfnJNGT6iKZnotzhmPkYxheESm8ocYJBBRcNo79GSYANh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zEM3L5Uki3yW3kH2Xbngf3CdpA66NK4kGpFPmxk2egHrvuEYgFdNXtQt91k7RLhXBzj4XxjSvuD4F1Sxxy2Qr2j",
  "key1": "BNuY7SoFEX4TC6nMKEYKDMxENNumCqhVX12v7Z5RrZtgZViwKU6asCYJJSMSR4HwhbCjUsd7HcKzcdZZgcPnAtQ",
  "key2": "2XHBrfD22kAB9eZRScdU7A29Pn5Vhyh8v1M46rU96q36MVyzu8MSYmdT41jHzBr2Educab8anFoP5Kn7HHbsKBPQ",
  "key3": "34Q6Jn5WEA3VXTR3xvqD9k9g41UZH8fe1aC1S4KbPPz56LvZMEa57F8v3Qifa7oX66VmVuQTLyGSMd31AtkDireg",
  "key4": "hzE7CZ6TUK6YhSmLXKhN9xm3JUQqUYhMF9qvxFiyQoBKAyd1tauCFceXeMjaETsJAGhdk3QNiwGLrW5j4SEnHKv",
  "key5": "5bb1eu6JjRhRp7rAoxnZu2CA9mYiZHDeDgG495EU1d83si3kV4AsXBCcLMFDbmpfTusg7dbV64Y1714H5BeN4wN1",
  "key6": "kcEtBRPQbNA6GzXQw1L8jL3LAKZeCk5rjLPdioSsZaaK2otszbGAkm7cwdkJRDwVfiSv6x2sxP1SjaVfZ1CiaYZ",
  "key7": "2KVEnv2k8rt7Qn5TPCGiy1igDHHs7FJ3kNB7HREyGZLSyRcNfMXRShciLhnScmBXJj73mSDPpbJKMsFH3MY6jNCw",
  "key8": "2yuSH8UsKX6Xz5Dbo4Nu9tqfCci1fyzTzMJiGRaqZLvF6JFtqwRuacAVMrhtWB9Dja6oRy8VaN1Tsbz6HMrxAkzN",
  "key9": "3Mb1E7uQ4iUT9NodyfUWgS89aBUhLo4Aq1BYyCzt381E2KUUKQ7V1GA3RvBGUUtXNzchmepxJsHpJp7EJPu66Vmk",
  "key10": "3Cb8epQeWcFEAHGtsFrqCB1m7RU1XTnKjNtbpsTcf44PuCRxcZCNQbSpxaTc7Mb2HJ9pexcKbNppogyTa7AE1tpk",
  "key11": "4uWgHpsdUPwSHf8idNpgvUsXnEA7fosuRJ13bp3cqkH7Ub4Lbm6E38W6YWsZGhkmVNm3FKFgxU8fvkeRcUE9xsuA",
  "key12": "qQh4kpLXfGQ68HMokhGNabCV4zfAKS2LX7gksMVgAp48vbw8JRwHyGjmFNxmhX1JtBMBtytVwzv7TdcW7H9vSmK",
  "key13": "xZ3wouhHt1JoCpoBVkxMguDPCok9i9ZAv6MBgmWU2EoYEMPQV2zvVNH6CAJPUCeTiMfMuod6FgL5tNabjMAXQXE",
  "key14": "5Q1n9FVTCmgrk5MoN5c6WaKVNAiQ447SRa4uxdPD6gj88wynfXMr2QYQpy5U6xvt8b5HzFPFoGWYbB9e5aDsWD2N",
  "key15": "4gJuvxzyoFuS7RMj88WX6Gz41xzG6GEcVxanzojCuBehVXg26MA5jG8cDivEb51DcrPeWPdfUQB6SjshrjVnJYx4",
  "key16": "4GxxEq3jx1LpoeEKRiiwF8WWa2vdvz2Yn8A3cEr9Rq6CGZVPXpGmGpkCstfa2vnfRZAWDtpnphbw9ETKR94GbeyQ",
  "key17": "5xfg7MFb18QiJkUGQVS3pzS48DBioE68Egke48YcLszX8FbiaFL8WZkCPtazjKeZinSQX1m8yXd3qbhPg2UftGrc",
  "key18": "3CYA2nhosegRwkzrkSA5ptF7qtT4LfWyEbsqS1nNAUXoBymTubYsBNrmAYZEdaDZj6FQrCdUzQRESon6PgHDzwGA",
  "key19": "4p7mw745to4b7wey6W25LdZEnhkQzpzJi45KfEhm5NZauN5srTs4NpVmcPS29d7ZLN2dUsqk3PGSCh3n2417TKvy",
  "key20": "4jQ8jUQJfR3meQJtpHxjgL8cQYGnu21qG8PQh4pcvniCpemyRMW1D1oDvzSgnNcPuNZZymJsPxiZARvj3RwaKgAi",
  "key21": "4GQ6DaXhpxDv2D95sEsFStqYssVUrZP9FdiNEGVyjczveQceVMpG3uA17XvNojsdQwUKKzUSmRRPjpi6qSMmBZZL",
  "key22": "3Mi9y1wC8WJdSiRcRGo8RW7Ju1UZrUuawjgKZpSZPPYM6b6NaxNpvZcMXGG6m28HRyZXNCBr1s9ACWCEDU2yfSop",
  "key23": "3aMVCccH1j7DJTFJj31ynTHAkXjNwpmVp74oEKjDzqKD3XqJTy4VzDNnqu9L92TE7zadfKqaGriZc5v7XHk5adrz",
  "key24": "2mQSRkC56F1hec6c8tD9SoaA7Xno9yf7d4WYFSXimGAhdTdgE3oEYnrhajXHwcY4p9MGJK3c2cKXynhc7vMssGd7",
  "key25": "2w5YPm2jWG2ZLadJ9NPv8ZqFPYCFmP1dWFcevRNrZoXzwLBvvAZZAQJvwuZq9bJoD1m3ZQQSA8izNrVNg4GjkUPf",
  "key26": "k6FbfANcQPfc6zuAaJCTsXR2wkb2Rt6hoCa7gShdGgHu7fmA96EDK3t75HS3FVe28BCtkifoK4pYhVvEnTLCkNu",
  "key27": "2YszLo9ynpbcovss2fu7ZsncHYkWvTxAKbFYupTfExWiHd9QZARipQMCMPdvT4686Tjii8Fr16T3GodfaH35kK7q",
  "key28": "4g5BnA9pFWRuB6JkWy4Guk7sisVvK1J8XHYcBCb2pifP1GXzW42jdJvz4xeRhPuScES2cACba7FeyiAPb6xtArVt",
  "key29": "2b1gnTqE4QfNoWxnXUgzmV8pRTh4YHPHE9uo84WYp1b6NeFD2V9NPTXv6fmYxeXbNeoiqbvs2C3mMADmcCTmmxUF",
  "key30": "3MJkREmyRLE277N2SJ8b4AFDnd1XEUpUPh9CUfpfLUCVqAHhYoauKggo67qaGfgosppntnj66tFLNAMFQR2XpDLB",
  "key31": "3G4BWz19PBbaDR8EgRU6BiVexo58Q7SQsW3SYaHLtb6yaBMULar6RqeUtkExFbwMqdvvWSMfarxFurYNSnm9pyrC",
  "key32": "3aZs8JVWREqGN6ZjJKLrA9rGkTrertVu7guKRsrc87U2JTxa4N3PSu8zqHDzvkpbAihrDueco38DaQ29zLbduGpA",
  "key33": "4Z4YwZyDYqR47K98BiZg5UaYeSf7Ros9DZNGtgnE6HhL8oCz6SgqaHXxMYuSAVUAj1YgDHQnfShNR7xaEfKRWExA",
  "key34": "5dAWByoHCm2ggqNfZvrm3Mr896BfG2kxsjuZCSyxnPtCAWK7u4yLzWDE4oJ1phuX2VEP9gjKtFPv8cweaMZKRnQ6",
  "key35": "5P9Kh13kfdAgfxsCiJMKJZYhw3Wk5QotN121j23bVACKXsobiB4Pq2EKPft6qAciC8yvavSsXqvH8NDVwLKdZ7ja",
  "key36": "3TDFpREo6CdKBBLBfKdNELpYG6VuyiK99uF54sVRGhFFNPYpKCRciQPyN4FvQRf4MPZ14gokGWe7Bf8qrwnXBRMi",
  "key37": "5wNByJvp7sXNUQN5n2bnwR47gDLRRXxiouHrhrvV5oEu1Hm8g69xy6X7pY3SRpcLG1zp34HJmTWiuCuAmoGU7sYp",
  "key38": "23o5MacTao3BuEeBxeBN2do3tSM6us6DfH4aAYxhxiKBM2XceS9a3UuE1SuK3gHcxVJLxZiA8N7kQAG8wDMr3pXt",
  "key39": "2Ba75YLGtCPPkHZQA1u43ZMASHDPeRjekek6jJUHLFqAYYbbXxq2UFraM9QWhZjL7hYnPqbR9TKeFhRyUMsYHok1"
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
