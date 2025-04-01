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
    "5G1aBFCVCC1cpjT7Zy2111oVZzTEdhrN1zCjcX6DXvAUkmrcqyDEhFMmwQVKsZmudvXZVU32B9nZwefdxMwGZAD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wd9FTLUSeh5PQr1ZHCQk8ErC3jyQSi6pbw7GsPPGryMB5YvaafxxYYYf6ZE8xD3Bqpry4ino2pRiFb2jU73Kwie",
  "key1": "3NA41hoZoxyJrN5gEyL8UNdrZ1efjsyggmBaWzSHXFBss1RMusy4tmcyQV2vYxu8Hmqgu3rekrF46Tn3wcV2HqQr",
  "key2": "3bGceDPADKNV86GfFw9Ljv5vioLmG9dvpUkNo91dPYaG14i1H7t2stYTafTf4aAxi8udo37ZdZTxkUG4F6PBF7Dh",
  "key3": "613LhxqsVoTuKSheEtJQ1p3ytDv9b2p3bZRAwGXB2yqgDNzqyxJG9RNB9TP4JjCTZW3SbSjk9AAiPNvPSMDfyoS2",
  "key4": "3GgjDZW7XLQQ8UJJSNwEQtZATAduu6rDrFM6eLbViWqbtDLPr4hzguiJGCek1NRMEAAYTSGWNoEmTVe86GwR4PSm",
  "key5": "33Gcp74GvApsuPQjB8y4K59wwjSfUTgKJAw8XB7AUTSM7zNCxxcwWQKeTZTA46iuzNkYstmbp4xhHRZPvkzBcHJY",
  "key6": "GKjgtiWv4BRcXrPh8BxeurQczmq7RQs5AqwfbTBcm4cXXvFnQGdJWWUqnp9FJU9891qBL6cxGdFWCVHeA2zE9UT",
  "key7": "2EBoNYws8PaEHgJdG2q7j4iHgZH2M1RXmFhebr3XbEaTyyorFEYta1anqQ1gJb6EaM1anThxbZfWy1MRcfDAFDQt",
  "key8": "54mmiaA7FKQGxT4U9swXoBRXrJtmVWv3HsX9nF5heFfPmrDWisnXhjvmcRNnp4JJB61X4EVkcE7FSkr1WzpHnKMW",
  "key9": "3nkCkEqYHE8kiJBpyWq1u2iTAyYUPsyoZ1ihNHERUzT4urRRUTVZHja1d7AUMviCbPZ6AQ8yzP5jwwV7phCFTNo5",
  "key10": "4Jg1n6WxMvGETjcfero2UsJAJiECSKWo95v6sbkcJDwExBBHi5U6nhLjDMqfmV1AaWXBA8EPEzmCKRrkueCLMeuz",
  "key11": "2oXdUa38kDJwuujTtw9SAdeCAnejqjTPXp1mD3wvYBhB5xotyWZhmp4ximXeLFDwtgrbkukYeaS4hJSPqMaxXgfy",
  "key12": "2nQVtLsp1gUww5NcQg2HjDxYGs25PtPDynviqs4dNDHpGpYora1h3EaKJ126cBX466yPpmjw9FYT71u5PxWiJW4",
  "key13": "x4X1QMhxuhmaGFhKbdLUYU3pidyYS1bAKHHYWb1kW9521H6hsa9yTbpKCap5L6hBqQR4sQT9ryZUV2Uy9bX7FNq",
  "key14": "65i2hu9tFhppiygZ2oym4qcRdaHC2hKC82JZM8kW1bJGPTvWGe7wK8Lod3WfZGYH6NcPXMjRitDFDhdK3MUTzpiL",
  "key15": "3xH9ptcrR6iS3N9unP5wiTqecG1owGhXP8h8AZQKRgEjMsZCF1JL4TQxDaQdCMRtuwS9r4HebTxr87QoW5GmV8da",
  "key16": "4KGAsj3FgYN1PdXaUShgGP3T2E9FNkakVWtTbbJnKujo5PZyPpTxxYfeLsvYVg9rATaR9m52GhJ1N4tg7utjbi9w",
  "key17": "5apt9hjMuEW2ryfU3FypyDpcw3CQ9zKSjeBZsRCwEJe8o1jLKVoWGcur9bxBMPX5LDqJunDgiYybFHU26YCfKpLF",
  "key18": "28XZ9Nzu6fn8CcVLECzognXnL2JoFrZ7jVJnuZMhoNiJafeg3dTEXQYwKbw4gSBEsZee4pF6fJtNx4BVjBuvNkjr",
  "key19": "5w7rHn6uDZeeYqtQNvaKT1BtbB6wzptJo95k54nQp6kemdeTRPv4irJhdYgGtSjSToBLrMXWyBWk6H9MML9M5KbK",
  "key20": "37G3Ck34RxFJZF82WJvvt6fVymfojoKiB2qQCWQmY17YvTnV6s4M2HuogDXfe2LHiow5UmCturn72ukDtzJHmFNX",
  "key21": "43K49N6ppmiZLFWLR4srno8gEebifwPGrbqhLfRJunJU8D13RGFGyCuoehfEmVm2Tu4LQ9yci4NeEq5AJZW9sFqK",
  "key22": "4piU6eE3LuDAXnqQVi4Kre4WJyBDwucFqEhPbqQ4Cu3jgCRwhdg3tTv53D6h3nxGP1QKUYbmarDfXiLQZJi7CtAY",
  "key23": "2yeUePXowQCQ4LohdJCzHET1MTJtZYKbb7TqGgMzGLCKn3G98xeMCPCLAZsC2XKTNkqKQEChATFtKgXT8BHTdnUD",
  "key24": "4nzneueBcPxBo5RPDoMtnTq1MyYBKcTR45sjpaWsF3CehjbikyRPmJhpJ2Bbd1P7U75tU6Qj6WggajcxJzt35qKS",
  "key25": "2XbrWH1jCmm2jrcwtLcRWPCxBgL1oy5zogN331mVmb2k6fVhbiK4UXpk6Uot1WnPUwW2NFXqz5PPZD6J48hSyPDk",
  "key26": "3aqA5FCcvNStqpmP4p9HMsdq8tCCJ1dfonPFHL5Ukcg7uCpxJYxBRcoPQ7a1JAcUGYYTgAbaVpXT8bwvLJ2T2Foz",
  "key27": "4uTBgippYtx4FDhCbvg239W2k9uXt69HiFHQAfu3Foz1rcsjwvUcKnrqD3fs29aiTKrv38LFgGnopQWTakMyhtRL",
  "key28": "51q75gEvPdUUkMcxJrs92HMYSfFDBTRqs7fkuHgYfRFDJAmfPHjxhbnXEJcmegiQDbURpLPcPyf9uEFA48jaxT56",
  "key29": "2869FWVNKM4svw72JNtAgJG1VdQR1DRYnmoWMMEjWGWFiwmDyYP87QHW5tD2UFCp98Nt7gfrprqidvX2k732jtjZ",
  "key30": "5G1mZ6iyiecpw9z5Bg3tA1vpuuQDjofdVMvawUmCvaV7nHFaduM3voC5TFc5fAzR7QCyM2NJrTUSfXHDCFVewiqg",
  "key31": "4mLKFPk84CSwecnreR1Fu4iT79j2zoDCRSqdA4yVcZknHR5JcfydakvB22xPZp7td6m4mNvZ9uqDAcqJ3BNa7u3X",
  "key32": "KezViDNjHXkfLjeaVVbTFHCVps6uW2ga6UVYJDXmoXDK6t7rg59crR6x81R6u191XXkybPhXCzdybmHCbMoTseo",
  "key33": "4hEZnQvmffiHt4Fenmhm9jo7qAW3UpFS3PaakYZXDhnx2XwsyNfhDvp8nN6Gs8RA8oGesjF6aJWn5NispPBJTJRm",
  "key34": "XzWasyjcB5Ln6CUdoQx2qfXHbXaKHN4oJbTKYCLWLCPuC48SRD9rdV5aPM8SkDw2QAZizthi5hGLbidSAATRQFb",
  "key35": "3yER5yDSUWbtVG4zJymnQWbS3bJTkTBTeB8w9TXWpJFgqDnPAiHxLsiYoBPDSdwqvbhypus9XEHL8psgAthYLH9X",
  "key36": "5kCQEJ27Z1ZZdGham2w4EZkrxdEKPKRtK4r21vfUPPrw4Uy1tMLBoDQbb9tWei4he5Fp1kKx7ATepBxthCbvAijY",
  "key37": "2v2NN661i16RKYqXY6k2xMMkGE8U1oymCEAc45YDzxY4LDfGbdzB7t6CHr1Q4Wq8XkcLTQyhgLLTL6GDM2dvARPX",
  "key38": "2cAAVKdkyPXzdonrGfCktCJgCVcPpWjKHgcapUmJGvFnG92pTuNVukh7wwFrjuAVgxaeKJtX82J1oia6VqtkYK5G",
  "key39": "Zt2XPDTwrNRKEBZAJYfDB5kvEzGwZ9C5D1Z5GuFT7d1RTCADQZcPsMkHWNRBRaRrVFjHmtPNVVgVGiCYSQTNBTw",
  "key40": "4WdgJDzpsFm65KGcPrxAxcrt8MokdrhZ3TZ4FuyZ9ChQroTWG4yxewcCRWdR7D4Pp6oq5CstqLCYzKbAXWZ6Xooa",
  "key41": "4VoFd5rvafQmALsPPc9c3v9tUW6s7PRdS2GPBnERZLA4vKkQzEUQXZS3u9GKzZBNR9H6hrmkCzKkAdjgEqPVmyTY"
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
