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
    "43mmBn9FKwAmS6jS8hcrRUaX8jPb889whYE92rrDFyaKbjjawUU7FoMMQFeaso7CivVD3YuWVV9gpFeVmwRzNJUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28EH74PtkQNHVjyR81cXZkAAazxWM9VfaL4iRqipyNXLbrPSHMDUjebygkCutXtq3jedJV478cPjc1px72EJnFVL",
  "key1": "47ePrw2nwDLfC2z4oD3MH7VWCxzT6WUxEfVEz71v7FBeJdDccpZRcZg1PeKz4gJ7srdXEGwyQd8M74hrQGjCknQR",
  "key2": "QZ7MtTLnt9tarrDge9wPqZ2ggu2gi7MNxt8Uf5Yq93n9v7ps2qxY1oBhdRAUKeZwR9EgaAZZBwNXR3KHqKPJ1zC",
  "key3": "4r7weR25PVTrnPHExKosySZe6Qi9Bi6SV4BvHpqnm7UGBa8YCEsiXZsBc8yqkeFXHo5A7w26khbrgV62dazXzvn1",
  "key4": "5thRNYiRSyCDdsp3LjYjT1jhEuWWZztcKQ9hvBUmkeAt4xEsVGmYBLG8ftJCRt1xzYWQx7wFnB5NVYS393DsRnBB",
  "key5": "3zUfKpEPjqEWWHxniFjJnugGup7P5EKMHTN4yaZLeQ3iE1RwADyVqyUYHaNSviPzFYCSPbJ1qVEbdKWNNjddCbaD",
  "key6": "413SksgNtKhf7PEmvb1GoUHTM3fSx2xm4JiuPxbUhRL7jPEV2jNwUSthyGWfqcF6adK5vkvuMM4MjFG5kbKcCcEw",
  "key7": "2ZHFZ33PXVYicFTXj5BBmLwgLCQEG7LqD3s8yRyfh75h9H8wwSBJKnC5ZwogwvdHRMwbCgQeoZtqSkkHZRkzz95m",
  "key8": "4wFpsnvb3P8aJjJwgVnx1mpVorphEK2kJbswkSRbW5vGVDGefxyCJqkTVwsAaZz6tY3ttgJH1xsWL4z5knhKwac2",
  "key9": "Se42Mx7NRA5ZwfFTpuxUWVTUJybkh9qYjkpRftpuGecnJcLmHgqTycC3KFaH3EwGHbG1XuLojJNBYKsUqDmkvVF",
  "key10": "2vdzokff5ZwhhsSixMRyvDkpBjwEM8cHEBkaigQfn2sWQzCU3SigRfGinFBx4hg93CX4ZG8d8yBvUf9AwZKTJJqQ",
  "key11": "2VGLMyyLMYmaUaDhqeuLTB2dp7ZGLDNNANFjEsMTB2Z231iyi7kWCh1TzCGW5qroEFg7GUN1KYzxWVfVVVA3x3cW",
  "key12": "3DvjV7CRafLcmMC1SSSLigCyhiFXbTsZ2XmJW1qwtYkm87ZjASV3wwYxLEr6fCmgaopBQcgWXf8Jn2vE5C2AmLZP",
  "key13": "3PYAjv2pCTbBSvwKbeDWrh7rEeKWV5o3kgr1iMeJzqjFNmAZCawjvSYp9NCBt2R6X115m5XD565XkwfxvsCKG7k2",
  "key14": "3j5ouWSNBubt69MP88xhqwTbYqHcMSJDpkcfSUTf8nZSboDaYGEnUAHBknAooL9AuMsyrx5gjwNPssyic3bZr1Q4",
  "key15": "3c7zVe6fecz6qU1V1jDvrAsUrn9yi71CTRDbELGMHaRgfthsQALfbUcpJfCYHZYr5efebp3hSyqu1XCyLkbnF2qf",
  "key16": "47hT6YSVE3mHLygcgDyDCpcshjFuGSaaYfDaJPmXZNfYJqFzEJJRi6Rq3irLp96WNEpuSUfXr6SDTR5SGbVHmpFc",
  "key17": "5YhDRj7f8BFsaCqZBQZ5aVZuTXSf9XVek2Rau8WXujoZVFGgwk8HFh2vnCiaubqufosFYfgZmGJBny1mczYBU3ua",
  "key18": "5RmC29PU6wRnTMFMBuTmBGAv33QMafgN4T3cp3rsQH9a1savAJraiJTNmPwNhpLM9JSP12LdFEXQN9tPovmA9q8N",
  "key19": "YJwD1Xf1y8G652vQoPnCErgMwE2uDTRWDVQgAeHUVZGYWLwWhs4zMUH2EhSLZ998VNo8CfrV7tPVku4pzjtuadQ",
  "key20": "4WS7XK7twWFH2xe9EPhtpSH4keMQAxdzfAMbR19pZBn9uW6jvDje2GESeAMtmjezKauaDwyTGXGSyEDmdWu9w94v",
  "key21": "2FewxF4MqiVV5a6M3sXnar1q3jQ8yg6qh3c32Z2SpCLH4AyjtCs8HiXp6XVd63UZUEDGV4sBwCt2CGQp1AagAEwU",
  "key22": "58qRe9Kzi6rYWZSf2t3fDGfEdayazqxno7u8Si4ZiR3BHykM8qKUSPiVMb9YJgDsWsWAd4c2HUj7nLvUce4NRH8i",
  "key23": "5hYNsyRrwBERhMRJeHXtcKi231d7Dv9htKmPHan6gFBqWhCbopAF73FhFFPK9RKD7Djk339bGxHNLw2XfbdswWCb",
  "key24": "41SXbqiRBDJ8ZpPL6cKXrmZzKocpqqYRUMuasRopj8VbAyYNiXcjHt1ehSKsMp6ufMQCRjsDRg2HvtKajhthBMRb",
  "key25": "2meKP55eaPxKZttSkuiPwchEowC7N44Jn2ude8SzQJ5L7xdz5RrjBjT9KKNGyBEYGoKPYvuyP9fwXPLoaKRnd6YQ",
  "key26": "4FsX7XxoevK3AxPpDZmrMMd3oNfuQ9wUN3vH7aJenGYEivPSocWzq2hif7kxjRtfi4JUEwSpkP9DRJt4uBPMcuaY",
  "key27": "2rkTHxGcn6EmLgHbHk3auoggR1xoDRxMnNp67Voj1qq1LfYZcmmmjZNANUy1p6jKqZG3j37KEjjiG3dMf2XT8kCe",
  "key28": "RSE7UYosa1mfJdfEapMh4WDFjpUF1VRPUAiMBr21hBYjVFrB6QZbZdoxU2pyXVyFftETpGg4qmg6XvYyA4ry3JQ",
  "key29": "2tct3fC5Aqnsvj2ZBktHudwmqKTbG5YUfM5pdEJEhLBBBbyprKSj4jY5Tg4NKr4dTovPrYWuuhwXJs45eisGWEMR",
  "key30": "4KxuiboDTm5b8jD9Vn4w74tDaNf9Ubtvpp71Sc1BgFhC2xgCouzraSG6mj2tLQH7q74s6V3TkAqjxBLVYw1pp2yW",
  "key31": "3ueaCnSb6mEM1CNxsQGPC8zahzrVnRGm4Uv7CysaGv6HWpLdGrzqfWwBJ1i1CUbpEp84Ne5DevS5f7gJv5WvdPmF",
  "key32": "5cpa9spdqgGTSivsDCRvn6A49EnsA2ZV6Q8H4UihKV2K1CFHqZtLJUx6PhpZEympJFN5kc3RoukLVYe2GLfRgUJC",
  "key33": "3btXM6QgAX1LeLqzqmuBRq1M83e91jEfVgHRgV7k5X6Q4FCbNocW3VXwSFm3vR6dp5EiKEC9E185fe5WuhoiGrpf",
  "key34": "3XwEKidtQLLoEcXAc2NEmJrNmDPJiVe64jLg9p894mzMfsxEDyjYaVUHbGYnyTmzAHwNhSEd5ogGqgK7Bi6kLFcs",
  "key35": "2vaTgyEr7XdHjgogVAknKrHWqiSyA24X6Kpa8P1DHKyRbmaLNtKzHFTZGCWQrhPrVEeoc7apAMpEKbGh7Azcrav8",
  "key36": "DrCB4bQBizCsUmJH8vsfcdkcSarew3VWJCYgjtWtuKbUpGVqDqewMY7c5RBRyUfjzA4MHjWaEy5WxpbqBhD9Jp1",
  "key37": "524btg2NNjpLLwCtNxcLxzr4sen9VH3MxJTsLktAEfXhKgchNpJ5exmfw9Kvxm7Nk6DXgAJm3YLwBh9rrEfHB2oS",
  "key38": "3xmd32TuNQZcdDt6cQhwCDq3rd4M3Gubv99ebQAptfdGswqtFX7UPJDnXJJ8NsvduBVyMUBfyLcdHxene6A82M6E",
  "key39": "5ReohYyiSxpvq3hHb1vdvFwUQAwqobQkdijNvoTiGBfnWsn6CkZ82uSaCutbxpChhSdE81xqdMoEusaQp6Vwf8V9",
  "key40": "57qrQDnL111hW1w4E9CCF8aBung2N92wbwcMUCnHvs8XAbJXnoXdqbUmfcvMSQcvLQdfK1fLx6PUmKLHP8LW2GCT",
  "key41": "59wNqR8XQRXoufc9gabfyX5VKZv7d4ksCiy7rzdgFpDazoUqx9MQr1FS9zHC3tUEHkkfU6hKMcfpb8gshnnXabRS",
  "key42": "4TU1vnPW6Ssay1suqAwwqgguwyh4FSBobSE42qjy6WwqyTrjXagFu2vNzzSWjj77eeNZyB2boziaXvPBkq4MJYQD",
  "key43": "5U777M3dmAQ9dop2t8WXqWxn8m1zZ62admgxiBYF3gvfAhk2hMfsiKky4GtcSD864Ss8oCXLT998RCMRdtuKnqHL",
  "key44": "3tNnGq5v18iYqK5H2ZA8S95miUiNMFrp81ofe79nFsBSzJxss9jFUUo4eU3K8pfsitwMCCN9DRoPqBZ7e31stGN2"
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
