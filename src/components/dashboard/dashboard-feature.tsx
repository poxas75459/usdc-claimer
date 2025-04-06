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
    "vTrJS5bmCaGr6Tfd53tqNL93HtPcBEZc4TrQPnvgS9DxF7k2yuqQ2fj5rEeyirgLvW4aEnsW9wFFbLgkwc48mcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzCr8cLy8T5N3X5sTMr7o2A5A5127ZxMWvcm5D8hnaUtgxtjte6izZMemfNAVhR4ertXpkPk1ARcwqUxfUevUCb",
  "key1": "2NU5aV8gckR5SCfbqSfsddsZtoGudvsQRx6zUEwV2nEoxy1GBQF2Lx4uwjsP3ceK2QvzEZJTasW9TF7Xm4yc2Gq7",
  "key2": "2Yfk59Lw9ZoTjzG5nGMjZgbQMbsX2JPq3wZMaTj8fVkbpSe8H7nEq42BohTUwqX4667uF2SA9qCYQcrgQy8vb7Eo",
  "key3": "u6hpkh6nRTNpG2PRs9Y4L1dzUhgwzzpk7jtcyJh6boKVG7KNo6aqhM4dRNdb3Dp7ARpnH4WMLV7wqLSYHPaEgh7",
  "key4": "5mxbFY9n9av4T9zKFwSp4xX7ym556ZjpFUS68FroHSXCZ2Nqhz3GCvnvupSdcJrm6czWiveqecmGVHfzAabVHFWv",
  "key5": "24rY22y7ct9H3HQ1gkXvSm7wHNxCr6t8vg7Tz4Zt9nV2m5taBiK1WRGeSDm3Ck2zD2ddnAoVgoTABtmDr6cKYPtr",
  "key6": "3Y2vMkB3djm2xoPUj3yekhxwKUCM6wEDWkggugLB6fCJVbQPa2VY1L8putYB4smQifZZ86UMdUJnRw8PCdwH6jQV",
  "key7": "26RVDwChhFNuDYX9mK82KwqyL3Lr3xdkxvtBY5iqsvXk5fisYMn5y9gXeDzB3mnY2gKhG1nPkVzChdmamX2fTCuM",
  "key8": "4vQCG8J3FZDtvusnourR9dpddA4K4jwWdFbF8Ah19Nc46MBPDtpqp1RAZCNVdrvkTHDVtTQrENZBpRQVxAR9MVUB",
  "key9": "3LbwEXygN1kH9VCfrpA7W9Z7szKJY3grDRGweGC46Tp6hNQLwfCdZm6WNVxFrV2chdReB5jh57SoGhTnS4uRHBKM",
  "key10": "2UWaYWMXM3hXjvYqHsF4U2Uxqc275bnYstfdYsE9kXuoVSNJv9R6x3R455E1AvU7GRDKFCbqaAhmkiCugPm2z7D",
  "key11": "HkyqCfwUraa32NHEefhGkVhEzYivimXBUoTGjDgtdxyjHePsG83q2xFdiRxxxichJ9yunTN2CnwsezSeQRLvcBy",
  "key12": "2s4hNcNUYu6W1nX1ax3PPzDJRmCVN7S7RJn7UqtntNM17cGespkPdLVuGin5BKK4sUbduG4wxx1CFkurwDk2Vo7D",
  "key13": "ruNs5bXq2B5QLfwFCboFxTJVn1uPbhYJmCxTC3SKR8wHPxnSzvWEXyKtwvigX8LDY3WkfnzBMm8mGUK2Hx6zLhR",
  "key14": "4zcHmkUNA2EiPXfhFL17txr6S7BtnJ3KZdPyy862HvrG6RNMkwDCBkCZ96VfF8ZA817ffZKZxWjFVdGDbtmNn3qN",
  "key15": "2ceSzd8L2byRMxT96ZafgDdPzqLES9YVUbytMxnAdLA3XdHU2mmFb1WGMGPPA8bqUoWa8dB88MPR9GsF4zt4rXQN",
  "key16": "4dCmQ93YGvKFw7eoTPWrPi5vGLU4NqSfoEPeBC4rCMtL1ABVtkmvvqNPAKKULjjCAr8VpCQAQUPUxQrnaMPvGgh3",
  "key17": "5Kr3c8nvTnQSWXG9ft197i1z1A4ngqPzo2HeCg9Re7TDtp9pbWVvKq77gk15V3d2NCrchxPS6QnxF3WzKberjZvt",
  "key18": "3kumaVTxTKoqdxCUbsAup7zXQUZikhxwp3aSCmnXsuEinqrixq46WxFHvuypNfKyvcFHwVZfBMZSqYyqso5PMKcQ",
  "key19": "2ANCtW7x2xmnHw6Gq7ghTRmzGzzpT6A1XQasH7Seejsc9rQD4HrM1ahoynZSGFhriooU9hbKndPHTc9dqJeB4tjk",
  "key20": "2RMv3iqbd1hRnLXyGa6KgEMjfQwTV5BCLRnh5dLYShY2iPB3fGLUL4ymL2nyTxuj9rkSZDfKmPXSSY5L7DoLn6Rd",
  "key21": "3kzgBBzSib6fzDMt7WcXDwPppM4HKiAfELPGLjDporDw63gZitR33ctTLQsVMCHPoJzvAE38LMoNBv68ouyAqttC",
  "key22": "39QqvzC1K2vEGVuiy6PJ4r1bEp3miBNiZwFPwDrbot5FRHksJu2HgzfHLRMiTBSyXahj9khy7m6TBx7BSGqYqdL1",
  "key23": "2TGS7kEJJUWJDdGPTcT34fdV97kKZLCp8efmkvcEZCJpqaEccEpVkQd35Lz7xCzec8NhLVYFnFgXBzYCzXwbFiko",
  "key24": "2wW5X3F8Xgi55Zf3FTipsuFU1x8Q6ia7PryCtBUwMaxqKtgrP8MkE3aUsHqQoXgFeb5LpCdG2JRmBwDnaj8h5FgG",
  "key25": "2znrDYUiNfAZ8FoSb8cfTJVUVg11Lmq565oU7fLwXXJHUFjto8ayD4SGjCQY3MzQj5mL1t5wSLRqp95Wv1RCZ1cW",
  "key26": "2q5e5HaMJPb8b35SyY5JD4vwb5RZ31DKubHzFX92vrBoCasnKAVJK6bg4yjTDHT3r3HausZkZ5HdwkzYAWH6whD4",
  "key27": "Dted8LiCaUczEHNieuyenwmhvrS4gKLzLx6iCuVLhR7RNSCZEfsf252fXKSE3r5EguaT72C8FCWVnczLeXnvzj6",
  "key28": "3Wchcdpox9Miteuq7RdWB5bmmvuMJ2SVTV557JJruw5bdF57nGmGG1Nzi1KpdiXtWszyikfkXwkQnrGieoYFJJgn",
  "key29": "23phFqsZsC5i8Wk7Potf3J4FBwfbKNaQbSeD81kuNcC6VeQD1ARi6rNYaGT4DLYnHVbDYf66jfSRVi4iHHQM5Krg",
  "key30": "2qBXbVd1jHebDrrRfSJ4VLcr1Hfr7pYGiG4SzrJMRtYEaYdZYkd3xob7V6EpFjyYjM6jZKhgW1PTVunzUrtcxps4",
  "key31": "3Hw8NHJVBgCQ3WSQhtQQSoGEkeNibNiiY2A4xveSdavAsUvEpuZNRvcHcVbGayQZBWpFScxAoAJSr7rV1zG4CpZr",
  "key32": "55LgYKEPuhGJgTQ5X7szf9Wg6JHibPG63scjgWxADfhXJAZtRqFn4wqteoVKYvJhCCuuN6kMvCKDx7Z3dSgo84QK",
  "key33": "2WnxL2BocaGwbhb3rhreXDhA5PQzrep5dfwHNxBufX3gVd8wqPTZSkvqM5b6oed8RFpbucmhNCHA42DHNFTz5kjd",
  "key34": "5M5RkqYcMaiJh5XmNNmK1RQEiefV4ZD6gfXAqCKM52mph3Gt82uZRBjbCWLeZsrEFn4RzYzPnTc7qvHiKArZv9AS",
  "key35": "ZAcK6ZV24wqBpTXXFbiz7CeZaDUwCcAZpuAqCtLs7mGyfNA1hNLB581BKTaVAPPfWBW43PkJTDLEkFNzby8rfNc",
  "key36": "PuMZyvW7YbDR3XbCxe7GD8eXv3LrAT6S4AS4U94xwxfVfKMhbcRDMatLoRzKxn4vTexwcsW9aHxcb95AxX2xBWt",
  "key37": "3pgzAPSynUwyDrmvtTUB71BxMB2ZRsubwwtrf5ahdw4Au41PdLUNJXgwAzBtDE5rKgnrwCSE99JhHmUaV1KHknfp",
  "key38": "3HpAB3PYL1ZoudG6ABTRVwKGEwFoQUvS4kMpThmBEsZENYRdp24FeoC28jnYM7h9SFTqBmKaCksANVbj47uKESMp",
  "key39": "2myE3aFsnVB85W7mffSdvnPCMrUWBREWQbyKPChAF2jorqqttZofwyTdPE52t2CBqxmbBsRy4CUsjo3jLiyT5q5a",
  "key40": "2GjWjTGtCa4mQXty6TTfgY8cnw4PCNQy2FrVVyPLpSFCWY95mYh7HMRgc24PAU51KseXbXzsGpzHMvCL7PDtpPkP",
  "key41": "KZJZeEjeHhRro6ErxBbQahqbdTQBDJoxPwDy3C6sjxDEc5YLDGjfz8NfT16pDRDCFk8nuXFiCLoA4LEffSUAQ4L"
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
