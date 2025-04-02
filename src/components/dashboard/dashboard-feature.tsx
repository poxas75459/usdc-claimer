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
    "2dsj2Vu8rueauztP2Eywcjkm8b4dS5ayUpz2Rob5DEodH7oC7qCF5KWRy2vBDXkGqKcQnX89ZhmAF6jAEbobfpgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GPzm4btVrk1iwyN8F9ESTBLCEk6AbgH4UTYYx9emdJcV3Qd9YgppgPQgxmD3WPTL5ZJ1UGS6hSMKhkjQEbmVMBD",
  "key1": "WMCbkaB6yZG3QGiJZgkeUzhNfAWqZoBX5rHQgtecDCzZG9w1mPvdmBvpALo4wW1zCC6adceXdKae1y1B68sx8cK",
  "key2": "4W3bqcsDgHMnMwV9QMwPcvzqQQ8QYxW3ACT22YkmFVsyEAUyixkhHuzdrUfkFqfHEM72bwWCjvDr2empoFSTfyR3",
  "key3": "zMiPH314JFz8HNZQTmGzaS66J5vZpzb76p2t6twMkxK3NGxd5XpFAPAxm4sHaxze9rGTWQfpQBBVJ7RjT4TDN9w",
  "key4": "4rpP6qjAM5qGBcr8QaXjgvGeen1tpvyDvMs6hX1JrhS8ZJgctVYmpa6uxn1s1czW6PgQqb51Q1wBz3SeCXjMiPpr",
  "key5": "3jy59SVfFWE5hFTyo7c9o4qfBWCA3Tq85mpCp5z2SLi5YKBxttudjWktEUJ1VC1vMwsghatSsUc166QP8iygJRZi",
  "key6": "4MQnpWoNsJCTUA75RAaZiXWGBG2nVzy2gqPJzk31dAHXtVTExT2x3AidcbgJUQm5Zvj65wN4HELYm4HT7hMmYQ9u",
  "key7": "25XzCsbtj9KyWYne1BeEMNiYsReznAjZ79ZqsCNvVEAKxBn27joHjhASyuQk29HUhpZsEHz2DZkG8ddPFB2bK7QC",
  "key8": "5WQKthMFdFouyggiyWUzjiQAUFM4PJEPP2SeiPp1Q4D6XHbELgJAoeD9XBUh9PRmxUSwPn3efJof7Pc14sVUzJGZ",
  "key9": "4hBkJuJx1FQ6x648iMTB5PBQPGk5FtMsgx2jvWNeV69UZVkU98Eois81fYEJhJPMzmf4AkvxTbXALWkrk29LqFbG",
  "key10": "5RdMGqRKhdMYz9PJKzKLziLDv3TkgpaJa3bdWAMtBewk1h8eTogUpQHPmtajyLKZizjzz1jbJ5hPayf3LmGMWkJo",
  "key11": "3C3Q8EZMetETt4xXXMd9CJ1E4R4R4wqFtUhRD6Si7D8aojgk9Q9ifktDiCyTwjaSyMbcQXqDNQYY73D5uFvyFP69",
  "key12": "3GVPyeCM2ZsmTHfkMMcRuipP4teGf4Xxc7Adi42faZsFr1YJPLneVokJfqWvkp8bZVY7J2YH58saYS2Y673iWdcN",
  "key13": "5dieRrxWm3q4YnVTEBXvehWq8qgeABPZZR8ShahPsj2ixQzP72efdYY9TVzt4jCy4YGC8o2sdkvQCnJ7WnCDkrnV",
  "key14": "2mXc5xJ67amCTm63efG7cSvmEbvJkrk2sdxY9PweTzRuCKqPCy1D2wXGMmftcntCECXq1xTWBk6vUBh2D2HD3DkR",
  "key15": "9sfLcsCNsEFTsHnYx47a2Zjcbf2UWxPd5pa4YNs4g198UumBp3pe4JUDcz8zY6cRNrDsUcFhHkPrAuhCMnZRRPC",
  "key16": "5uaGHuzqp6CnfQyvhbm1SH2zC1yLnkJ3tgwtwmi5S9aCaXbKyqvPJZjXWsXkSJKz4uTYEaFJEz37CokeEjFhKKcA",
  "key17": "5Ve3cPnSR3QVkc9RQ2dy4sPPZSSuAsouAvYNgn1v9j7EPdgiPJGxBSKnkubXuQwHafoQPtL71p2N16ejBNLE9BQW",
  "key18": "48cDHQa5txfYWxw8q14XGDpkUryuAe3DxdwqDynXHu4uDvc5VsF68rLXS9DN4cDegJJeGozPXAuwemVvByixsP2V",
  "key19": "QL3zZeqigHxsHHJu65cnnzNdbT6APAKXfMxVUDAgq9aC5KAQ4ycV9K8HhQWUJdzidZGDSbrxA8h6KpeTeCXj4DK",
  "key20": "2BoTVt4m9BDynNARU1w9sj442iRJE8teUMYn61W5uDG8sF5sxGWGouf6EaLve1xU6zV5YG1zrENXooa5h5RQTdGR",
  "key21": "3LRzfCKAR55hLmKEghYHqKtsXt9PMFDNYPpgzQuaWCCXkKW3CLgY5wLAt6PxywoeBbuokwUu1ZvvQKMvNWKgtQh2",
  "key22": "5YDcgWKtBtjUoQXqErPtZC7vkvuQfHzuSvcwjmMBotpR962Jtc6M1uabbjCBbaH594TjnLaekuD8ErwhKgBS1j5e",
  "key23": "2kZG93CgncRp7o4rsC74rAmmb24NTDXwKp4phNvL1H68vN98MdwpZj1qYfG6j5CRBqB9scjiiSg5qbevhnnkCncK",
  "key24": "44fsNyp47K8upKKwx3u1yTNi73vWvaVVetohm2ZoFMCg7X4nV14H3fwKQ979sDd9RHB1dZU86yXjUJBr7e5bkd32",
  "key25": "RK6yUREH4xinzX8R3w4NMVwhbt4TPoXry14sDLoast2wYBvtqrgBTSAGcRYBugo1YjiYxirB2g6uterkcPXVVBH",
  "key26": "3okjZLxJtKG3KnfpKzUEtpcDMfPfwNXQKqpQhAjYYxG3YMc5gcRAqSdWus2R2Zysr6MZMrRqQFS2obNBEbvxKepo",
  "key27": "2jEh8bE4v4qQJfNWe4zwAiYZEKSapb5wPqDirYhj7RFQinhknrdnc8Gmi1mx9MV8nyCucKgJuVFSK3qnch8KUeQu",
  "key28": "xqNiupf8T8G1s61GKeZa7e5ZjirbTCBqnwZJfb3C6wX8MM41DdgdafBdEhznLLK61VBJqnuULQhLB6NDMpp7uxC",
  "key29": "48xQAgnTDFn5qx1r8Sa49sWinWqaL2MRupSWdF8F1nuHwvnzfNPeEt64PHG4ieCgKJDu8qDGnQtbfA5YmrHvYJJ1",
  "key30": "2jyFnVA4dKrjsnatHoNYn78RAmETUt57thLkR19548a88QRL2cEvKnz6W9yPbLCAr4RB1WsxTeLYHgDv1MdsJWdd",
  "key31": "5g5u7wiJTbq3iQtP2aK2gZdbsjXVnGHzqBE1azCfittPKqoMFzX9pPZGvXUodhLGu3hrNAJKYBynMjkJqHtsmmhy",
  "key32": "2HDWJdHHMrB3eQhhbDL7rUzhfEMPpyWBaJXZczjEsb5LjF3hZx5kp1rJSt4wytVNtYddVZUMmdRA13QjzmV4RXdJ",
  "key33": "3WUUvKDX1KHDnhrGdy383dN1jvq2B3YxRHWMZCZptUKWGPK7kx67LbPQmDa5raHjeVRV2Ag3HEk2KXmp9hrx7RLo",
  "key34": "5FvqJQs9fmD1jpWXKjM8q6sMihXy6fEPfhVTAnpDDbznFmaUKJqPSm7suwLG8PnGpfRuWNqeW8XgMaAq8ynEKaee",
  "key35": "4w9SzTfC3zNbvnsfVbkMm7QdiNXz13FxgLDgZ58yJtqcC8pHRLuLBs8XizwN3RrUYFP5XGqXZC6GehuYSuqSpTaP",
  "key36": "5PiFJbcur8AsVUQ6XdM5BKhqnSzR682XdxP5d6yJifYUjU7HMm3suY4UCJS4HnKWJ7EWraLCv99MXTTg3E1s716Y",
  "key37": "2fvdHK8azYkhJgSdz2vthTUUbiRWRWZkGR4RxDJQRWyJRVtzLX2iuK6dtneyzpwoUzqZ2ghXMPT9ftDddfDhQedz",
  "key38": "2EgHRrnoZ6mmRLF867FLThNwT4LbixdQdxYv6ZaBkxCXCX3oDhvuc5La5828PVXcyUn52TqDyuEzNJ8tSH3g1QmH",
  "key39": "4ncykWWc8hgHEvszKa69nGjaHFfC9NgPmsYuFF7rC8sTjstRUbYsBVjhADWFQXCWjraQLk9nxFgFBGgMmgH6M7D9",
  "key40": "4XMbEMa2tX5iF9c484N2joEkF9X3gyVGnejAkJ6MWhFkTa5CYbqgzDNj4K4xHXoYciJ2cZSVqzYbKYfa6iRRt2we",
  "key41": "21vepqDdKciGUBG648bRJa5zzcALXMo7savsTv5bnRznRutJTmBhmqwJxw5wB3WMfqfeDpbkaksiJF84VYeaF8tc",
  "key42": "34VnrD7PCz4RWpKw1fabfmD1p1gMJGxRdnRN54Rs6e9t53BvWyNzUtgmm4QCt9iqrPrxn7WVAsryQDoLg7Hpv5ya"
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
