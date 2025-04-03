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
    "2z7a2YngyKm1yHHqoH2zojb657qpSYBomV779Zx2CZjiLPw65vkdgwbuAJ6FKySRTqLzkej5xLh85yjJrNCZgcL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMCQY4JkCvv9CLRDf6eZmE489jRKPGFnSyGKGL576sgCESas6A1XciBeZdEC3VZWEQ5BqQJLN8rtjQYHHPyd59F",
  "key1": "wdqv7Auc9ben6Frtp2cNwgxujR8SRwZzTaG2PUKCMwMUBpCWoaexAbhDLgftTq8Yuh9gcBaaMfP9F8DmTwZogdh",
  "key2": "4sfTJCkhGD4fVBeQaX7XcPymmkv1HkQ4aXh7XtSGkdfke6t8riAFpc6vo7dropM6mJ68XHmw4w9h43eZuMdi39NT",
  "key3": "4A9svFCuNhhas8WgQJJ9oWGLQejTUpZdR4PJpDiP7rywrz5k3sTpnjmDw9azYUdSn8Zc4Fw4XjsEvgALD2ino8qJ",
  "key4": "2bGYYXsNjhccFzXvmZuJvGoqGGrt145syEUNWFQ11WS3FpQm2uTQ8WFtreHUVCYGL7bxEcEimVFpNWmAKSz6awXC",
  "key5": "3th4NmWeQDqvL28BD8Sy5ZMnLwMrezzcGxStTNYix6kR9azXjwpK2imNpTDjDRyAQSFXiy2JViko8N89ChTkerKS",
  "key6": "5k3hhw29aGimRB3fGNUwPjR2XqT9gZBC1hwzEt5MookKS8QDZM2WqLDTiW7TCX2WoEUV11NUV7ZThX6cp2mz4hKv",
  "key7": "5gMKF9K5qSScbkeGZdLGu54d7kMFAtnYHjfRdCZuGYDccgL87R6Q3wdUq74ZJ58vsW2xo8F4zwQz4KbMoT6T3LsK",
  "key8": "4Vacj3Z6tg8nRihAr2fRxCbTvLqXB62wUu19JG3kM3aK2LnWhfNZm4yq2BQjrhiAp3XRXnsp329Yn5ApLuTC8YMJ",
  "key9": "62TskzRFWHF4peFkxCF6PfrgxqYCiUE8QtGHEWL8CPLtba4LtwGf3Xieen52v7Psw382biaKBnXqHUGdbAgoKrWx",
  "key10": "2AoPuxHGpTEZgKYbEaPJ1TmxnPYWT7phmeztuK7X9272MvaxDfHZJjf562dTgCGrgVrDeKBWRsHkjK5uEBqzjQbr",
  "key11": "yDeqvquXfLJR8kLrqTNrk3DRzMsQ33CMZuFDU5MNYBBM3LGZhXXJ548uzxTGAUTymAc9UYAVnV5oruaTQrkNC8t",
  "key12": "3HQzKRZyNDKVqTHVTeBFBWpqhkKVRLZ6rKMSmUrM7Mt29aY6SG3upLiR6FJppuB4GJRcDekJWRduTbKRajQULCbR",
  "key13": "sQcTxkniqBgGJnKMKaUeFjtz5Kx7imd9Y24xDXMXpaa5PgZHgqG886MvSNSmEXukD3Vevdg3j6PKi59ipBPcZX5",
  "key14": "3BSMrWDunH68KqzsNvPRLp3PuVpkCNd6bYJ1Lw2pXf64eNKXnJpzNRwzMn87jsZnR93oQ2Ztd2FurffiCWuoP8zB",
  "key15": "4GzUc9p7nPLxYFWDMUV8FvCtusmdagX9neS4Tu9obzyt1T4PLX9k2mE3FGW2KwbTBziCKE4YdUsmJYG3wTrZeJWd",
  "key16": "4vwFjLrBVKEaw1RJJn6EMtDagTcUK8upvtj6eGkQFs9h4CTimpRVmq8LhYGTEkCCPK7JP8scCP2brwsJSqsNQAwZ",
  "key17": "5oY2yo5FXz2vpmxHGPNVHfDjg8FSz9kpNk31SZ2WgW4VmAJpZQr6QVQy1ZUtu1mXwLPB9WoFf6CkXks2VThCyzrC",
  "key18": "4Xdt6YWTXtrWH69X3CAQwyDtvmbcd9agGBKjcJe2Xc6aVZyQgGoiJnbjoJ4q7j3AEQstmB11uUF3w5gDbrBhbDnq",
  "key19": "4C7bnMg3wdFAiQDFBEQicz2YJPokx3o7ZuxVe26ZnwxqYR9m6cGwVwxgLV5rrU8CoGn7WUfjPS8HNtFjUBAutGSN",
  "key20": "62ikp2NEvcB3waxKgBcbExmrs3yGXaNHMoLkRJiVbgpHThiF44dASsc4QGrrMgJHS9njasMJLggDQmw6X1vNYEVx",
  "key21": "5WnEoRaeLy2su3UaZesHSS8S4hBwFc6uJ9p2ri4y9hndSeQDmuatQK4tqZZtR4DhpCV4XwmDzPxEwAMaucpMceBJ",
  "key22": "27oJFrZDGLzUC4EmrgBNLAo8FZT8HA6KGr4t15zepRrK1Fwxg92p7YEHK9EKzS4NMVxoH8FLnzaDh7AAn6FqrvuT",
  "key23": "2F6Vd25K1JgDk3nDXtCM7zF7sCjU4dJKG1sEnVF4ZpAU2rLGKGCFrcLywGowpepwUQC7k6FvtTmLwNLhbSQXfzdo",
  "key24": "2c7m5HgUq1bwWSfyCJfiG3YkXTu3e2f44iRWb8kCusJrCqUF7PFW6JQkcpnVpWHEyjfpUMbZu3Ymr22N2MjHoDhS",
  "key25": "5HvGau44zt3BRReeGhrHVvaTdJzA1XusrfEgBTRz7o7VR6v1eMANMSyoadEqkuPUUNjkyiubV4y71JTLMmdtW8tp",
  "key26": "2SorGGFn8GCvFwiDfSjNBXgDreGkvsuyELTS6AutZJA2wEk6hdfCcy4BkUvPFiuJNh3mVEAu8CY4e5FEojjn2gqW",
  "key27": "4SvsWNifPN1vgiszEfWoWz18qMS36nsXJ5YFcKrzTVtJiHDXjH9iUzZTRvj3gwipYt2kYpSJ22zV8eKWnr1oH5nm",
  "key28": "2uRxBQ7QLmDoVL9z6GdonS2kssRdMRV8PZdqrLGC82P2QW1kxj2hLbdLk9GsJnUf43zJtt63fZ5PdMND6deSNo1s",
  "key29": "XajivKkwuZpqsp7n9Xcq2Rdbkv493VYzooXHxjYcMnyd4zYwtYry6JnoT29pSjsYZUHi9YsNHpuHsrt9HTkjfTP",
  "key30": "GxsBo8F3qP2kRAUJBsamfXE29v98dU1Wn7pCeaxhKGgHbVqtiNoH18GQd9nWGSMNWwQk39B6d5WWoqmHKgxtDNY",
  "key31": "64dmPC8tTt2LnxuU77QxyQoS7sPAdfBASgr5D3Lvf2LiaUiECQeKeNt6JoRN7U3mU6wGPnYBfTMzb7xDNGwHosLe",
  "key32": "4h2BucrCbHcG8cynAU94JA8LzgJqeyYmNwRqxAa4mnXVA5QQwMrXVsdduv6KVjektiAqGAjPhLTLkfRHpC3H9wQb",
  "key33": "563YwjJWTdrtVUU9CL6jTHpw6mMW98Datao99ipHR2LvG1RKAn1VH34tGs91D2KqHgwku7HZmKohZTmdmUqfSpxk",
  "key34": "Xch2GPF3e7YuNwkdQURNHmuecgi3QoowhMh6KCmxeNYeTVSMBFtJXjbFC6Kh2PTNovNakmkKrtMV8sNYtSHbG1u",
  "key35": "4pAkGQVCoKnmxfq1qp5yC9DwhtHVtHZzgvA2m1SdmirZPeBjK7e3EAzQySzsSNF3htPnDaQVoW1GDp8cgJ5pAW7w",
  "key36": "4HUwzviDsAPnNtafz6neS25UKPJEN8cxXJ6a2pYm74JCLYaghHcrSevWq28nDvKjbNjMDR4vwbKRWdEz1Tpf26gM",
  "key37": "5g3TswkpBh4CaLfnj21wkXsJeK4nfxNC8gjywCGcdhRpgdTe9h68wd2GUFq5vvexJ93k67KAn4kPxUKPdcyEf3me",
  "key38": "f6SpTtPDs1CbVjYXRZ8DqoVUmenD9529TEWj9hfQVL7D81FNU4UqQ2wN4surGvTVxeXaCGNr46t5FFPdxt4ekRR",
  "key39": "4JdMjEquKwRXshXXVNvXxtjuibnDA1oPCPKXfd5iH1mRo1HV6GT4bhig1ny3p6EWC1c3mUX37kmHG1YQq5c3AY8i",
  "key40": "2ebiJH18XLdsJD23b2eF7cs15xxpB7r5rkmHddSKrCyd65MFYFJ2WBZkU8vdgnJyXekbBRMazz8vg3yVESPE2Yuu",
  "key41": "5LFYWUPNCcEFoLpsxC9Zww5fwoBQxSx8biwPXU41WvWYAvNiuXGqRuvc72ZJPFQBFeuxYy3ytto3ZbyzYQo9dVCn",
  "key42": "2jGgvznJSBtpTUCuR3wnCZyPicjqBdq4uTuDxToNVf1NpstE8t942C3zX9Lz5MsRvM47Qappb4itAanDZeFhawPx",
  "key43": "Hm2TkNmckE87nZJUqFYVQTkwrBevGxeBVpiMP6ZJfGDi3jeDx6YnkqFLp5mos8DEo9vfG1a3D3kskHyYX4UnpPG",
  "key44": "3gL4mGijeUUBmLFNpadxekV9u4ast4fUwKCuaGeFVHAqxcbNBLcq2dCaTscSAsQZNJeRoUZE5MvWM1yXvo9v7MHj",
  "key45": "UeJXRVeYKBDcaNaWu5jznyRV7Msjas899hohf36amD9uudU5L9XokakXc9CGzeaPJNhCxpmA8waKZ8DDSBTdQmv",
  "key46": "23yVfjCvVBv9VygL9bjUabGx7tc59xZxPdD6Y76iH4vVsJ3qCMRGycGnwgoghJDR47xvonDis2HEatQUx6qv2yFH"
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
