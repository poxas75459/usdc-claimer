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
    "KmCBNAtXPnXxxphng6ZxyubQ28MHUvSiFqnsF46jXcGTsuhthFTDWXbHeAWnoRLBpc6rXE3T8nSdhZc8uBT6MiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQHhFTbdiJ51BoPDXKPHAssTBGchB3djw4fTBPdyfcscRo2RDPRM6SpVamTWb5zToTNWWEQS19bEhFwmEdBmhZi",
  "key1": "5VvRADupGWbrgLtTbNCgQJadimZZ4b1z9EGtDQAuLjgEaSv1R8yGvV7vAvQQYpUwYC97R9hazujA53AEjJXpLRr8",
  "key2": "5HXMc7kT3CvQwkYBTpPiznznJeCAi6qYd7ZAxTqBSEDZKmfH1ZzcMyVRbR5CdrjJUUtdsL22nfvUQFe8iXNDdBMT",
  "key3": "61UveaVyszH6pUYU8wgcFJnBvZccSJu54EaxYapi8NHfd7az1YUTTTDJiRgLsTLwDa2AqqeHBDaoGPrxHr4mhpQh",
  "key4": "fKgBtEzNtAhzJdn7Fytzk2vUMeuqheHNK2s3bEbmCBJ6msG9khyFbHsTDwERMGsM7hNbhCjAyahc72Pg9VxKtYp",
  "key5": "5ghyfCsxYhzXGB2L14aMfidjREDuJ5brucfgTenWb5fuHcSLLWKB2yewJfDbAGBaLih5a1KcRriV3Xbz9w71J7in",
  "key6": "2CRkAnpPyXxdCige8EYHQDyWxVN12RFXsnV88siQX6nSQP4DNXHtoZPu4wBFWxwS7VbAjbukRfPY4VZn6FGwLT64",
  "key7": "5u8K6mUhv598rztCdNyB5SuaM9FJtDGvwDjYHxLKNHDqerToBJAf4TA5744NBVY44FZ8t8vsDggf6TVDwseSpUwC",
  "key8": "AgafB13oTXzMQVZtU3jGSvRa1FaSMzJP1uc5h3dKBYGVgkBPMHxNhfLkbzLqM6hGXPSUxW5r9qQhZYiQFhEvPqt",
  "key9": "4zsM3CSuh5Y7HkfoFgXRntsAu5qgCP8eQu8KT715sTJWm7X8j5CEvaPjeyohaugVKSfRi4R4XZ8ZdTnKK3cz38GG",
  "key10": "2SGqueeQgQ81uPccmDjzm5YruRkCb3rr4t6yVKNKu3MUb4tEmPng3VKfwtmmYk2hMSdhM9Tth7Um72M7JyzUgGhX",
  "key11": "38p3eiPz9ihjGF2v9Ft1oT1ZpXxnUfkzLAZxwTv6V4X1rteMgZ4ofk6bdqQTsrzMsJEmQumkg9QWu5zRgCfBumCz",
  "key12": "2QErSZv5mALi2aiZ14NzKeKNMDXs8uJvCwsZ2saZodQT515KXWcrpZ2hpBgQD7ePFT48BDMpsKnf9ULidZgdAbQr",
  "key13": "4kyuyxRDdfmbbxmP7zZA7sEgAcxGtWAWrtf9c7QZWBfFYsQQukQrCJmAwKKLxk85DWAWkwMugc6kzYE64tDsYy47",
  "key14": "4je52G6ooyPPH95KqMhfupYYqeEzpgEKzG4881oEHjr5XU5npsQb9TZXqCcLSEMd3duGYfU6xx7CTPzPN4xqqMxc",
  "key15": "2q6PpLg7pr7HxvVctQHWMyuhqEP3V11yk4wy85xW3FELUcR3cHxMf57Crc95hDP3cuuGJ5ji5gN9hJmnW9Uy6nsy",
  "key16": "4epb16sx9bBRewr7ztv6hdUYJayGdw11U7H1tyA4uYndmafrXcouDhLnKRQiPmTnaYpwLf2rU82qHRQekDnSZ1fF",
  "key17": "4XdGAQfy3uUinuPffT5WhHHzNriyRczd6NV3v16rXZhbgshpYy5qyM6tRtx6QkBwvbGUoUBL97knnks9CHtCJ7mu",
  "key18": "3ntKpGLndggGCFTK1BbXGaDJnB652zB9KCRozkFQongoXr4zDj77JJQ9bZoMCnSpBqnvykb9QMPy6yJr9Te2MBcv",
  "key19": "3s2YkkNsAujxMsujLi9rMcMR4JSEQ7cwgQq9M7BpySRNBzUCQcuiExm4aWmDbwTkVKSHJ4fugqEvNBRVeurGUaRZ",
  "key20": "61UwEux95r8j9yC8ubfnKyb2vuYvyirBXaBosKLzfAQT9wLM4ScjrRZnXZjw6HTTtHPZhUdHjDd7VKgeH8YwgZbS",
  "key21": "53RSGGqMuQmgu1piyZSy8JW2gsFv6whb9goZxx2Zs8EPSqYHX97ieVmavuMn23sYoEzh8oQ1GN4wUgjVsy9jD3um",
  "key22": "4BndPqXb2qjmf5EAx7J9b2vZNwmGyEEDcC8JPn1Wtrspmou1Du94pc3Zz3huNfJZkcrGkdE9EbPDqmcVrEduf5ay",
  "key23": "2YtjJ4LjhK7ycG2TP3krqXv3dsPzhJrQcr7HX1KUEQeFRyCu12LvQCqo2okjmt7vivUPdZe9WFrNMnN9iqpsE3q3",
  "key24": "SK6LoVs5vDx4CDqZM9UK1VEtZJodgG4ST7MQwiWHVv3Liji1v85fpifwWsvyXXw4rWUm8EtjMnNqGTpjk1t78uk",
  "key25": "4RxdS3Bjqw2TbHEU8DZTHce52JWZWF1pjqL3ksGE3JVHDN7oHD2FDGDqj1ioUM4Mw8c9zXkheD3rCkZWkdTk28no",
  "key26": "YwXmWh12pyUHF17KzFHidkR2K8iwGNV1Lg6MKRy2kytweba1pqgPWX6QcyeD1gWqze6Qz1CanrSkhnkQRpPbPcq",
  "key27": "33EwrMxGPJ4e1NKcDBWzvNAE7wq3DdefU3PbCwGCe9mw3rqe2TtrJ33gto2wXeWEqMFRMQMHq2NehAYpBvYS6rW6",
  "key28": "64Q1U3DS7U4s1a4BNBBf77sMtQvHDusb95RcTUkGVMijrcZNKpDVWpqnfs3eDsjhaG55TxiTvU5sq8YpQx5AcFWt",
  "key29": "Th6hA6wvQXBr7L8YckT4CVaYGMVRy5yACTR44WnvqFuKenRkZ7pwuRijQUVeV3a6VM3FtL1v961XznfCTiNPaFy",
  "key30": "4wCo9PWKGMzbjgiCmz6f4C5jZUaBduipahpxs1jHTWCfgdkgJGGWTQ2mgPJfbunuM8tZcdmx7agJESTLw1c6CViH",
  "key31": "5ANsUGhAzto41h2MdZ9Zyu7HxFoDSNg5RWc4Fz7hynNBj7tpWaojgE4RP9sp4FvWqVdEZqJJiJgHQHQySChTvwDL",
  "key32": "4oPdLRvfwhCZLFdCpZDz2y99rWJ3z2MmZMycn6RFZ5JBdoV5N6aAjDHKTcXEm6smK7HDMFm4TPRiXTyJ3Zp53s8G",
  "key33": "5icTrBL1HbYneoHhJ34EZ1KBg3uW5ZCHFJiDNCZvUWQedP4nwuQKY1u1bjPU5VVLkRyfWx2JjtZaroZWm7P5SyMZ",
  "key34": "nQSwexAA16neJoS9yKb2dhQegyZXnLdybEnsudFk36b779zwQNse18vkRxQwi4RmXxSr8n6zsMBhUKBnDVW4K9X",
  "key35": "2yULkehMsPvSqF9tUbiJB5c3Sd9URPWuM31QPpp6ZznJ8VRHC4bs3VJPeGdhRvGFdHNExSYT9pQSWrHU2Q4xhcfd",
  "key36": "2DH63A1yahTuxyiXzJu5mtNW5UpwJXiypq8GK7rCLtu5CbkRrqrNQhyYpKkBt3HYTV7HNvNTPyLyZykV8EnUpBiV",
  "key37": "ag762rNmPSyU9f4LTG8hnG5tbtCP5rXAhq7kQUJm2upehUCdWCNWh99ycDzxXVdB149is5aeZyrVmfv2FMqQEKp",
  "key38": "PwdMVHgPye4EACgoiy2ngx8fX46Au3DHrMkbDDyjWdP2YV9enJXNdtc6PX96ZeSiRWwDndiau6ddnrm6JJhfAYq",
  "key39": "HaFLf2QbFMaUgAoipn5XwnSWPEMKpVPkgXeWe1jmxP4EJuhah3KhWe5kcK8c9cT9rdEaA3rUjeSFZS2tZZ4ZCrw",
  "key40": "2qHV2iMd4TrdwCMm6sJqL8zQCjR8mQb8pjK2mJNGuiMF74QeDN6sgC1LKm9ZW3h1MZLuSmj5Ri2gY4FNRnUcYaCr",
  "key41": "2eTzHWJaPhsuJsQDyF9EAoStubMnE9s46XZvoRFFuLunhes8TJQfasUw5Zz2SPmyRDYz711Xi7qtAJc4rFtNM2zp"
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
