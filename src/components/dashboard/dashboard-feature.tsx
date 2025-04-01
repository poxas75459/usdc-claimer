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
    "61DuSc4YV7zJPtigdkPsdsSqZiRVnDUdGnUa1BCYhsaDvJYsyi45ZquwiKZYU3aMa8znxKNe4Q1X2FX2hYjPBanB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kdy4mjvs9zts2HHTpkdmmziR3EQoyzsqrvvrEEg2Ce8wjCr2Xq27aqe9BArt3Cx8WmE7gPKfsKybAXW1A1Tt9Tu",
  "key1": "RYNjnZEtyihTTiL6VYf3VjxSGUUqUcbwn11Pb3e5oR3zAvdFr1qqppDEvzEd8CdsygWFWxKNnyd31BBD4gYe7wg",
  "key2": "6k9m9K6dsNcr49zKYRYMmC17u18u5tpbu9fJKQTq1hjfbjKCRnBKHsXcuYhsXnVJbKPce6kDmBVYfKAw7GU6b9F",
  "key3": "3oLoqQUAv3goGMusyQ5uL12ztbgVBd281VUGkDFtDqCBAxRfpRejNBhyk2VKHRsFtfFjAEjVWs4jrYrc3E8rchgU",
  "key4": "3n3BqQu3xLMskKDtNuRoXZirkchWm5g6vnhT8yRHrpgHLSz6iBkwqrjyD8T4YCSEKZuvn2qf4wULFAwWDvDiFWq7",
  "key5": "QiAefmPD3Brk2n9y8wotEhB52hCzdvbzCKnbqZ8yg9MKaE1pE17xjM1u6CgshKrW9mWtcF7X1fic4raNraFcZRH",
  "key6": "4DqodfmPDNJJGNiRnTok2jCdaw2ibRGf3XfETbQvnDnGec1yNfq2eBg1jY5mDMcFvJ9M8FHNJU7uV6U49mWUSiLs",
  "key7": "3rDydb1FA1uK3X9MWSWQBAJjVFcFU3qTyb3aMGEwKCse1uhVdbsLmhstHzMWDD9g847AVUoyY3WAUBW7b1UDZER5",
  "key8": "BCGnXrWkALvQEhsZtSzT7kfPsZMviqmzHPx114Jk7ZeU14Fv32WgvArRH5eHbzLbHz5n2qxD44w7DLhvdAGCPFu",
  "key9": "45RfLTq9r4RHCko3CXG5ahPouHfNzo1kbiHs3q8JRY1bTUWxDzNrd1FFCc6AAy8VNTTSy6MiyCmPDgQ2iLccs9KD",
  "key10": "4JMexyu6J1Pz64B8mUQDfJjxkRpfiynRrzqbDN3YSw59A9S9Va73mqVFr3rVkRn9Wjcj54Kkcpym3BPtkpARfpoZ",
  "key11": "aPmFDjcnHgiCDM55QdsREUPiT8gCfJSQjsxCqEbtmNnuNzsNZ6U8pnHw8Gt2qR8KsbZMMnKaXRWgS6xgcnhiVof",
  "key12": "38vZSCg9KBwrRbQa5XrrU6EcPqDpFshtikzZE3xtSEvq7vz8sGXVbo6rMj26UZzZjgmXryg4HTKk2a9ybs7DYvjs",
  "key13": "32fNKr75YpMEeFC3gZicG985tBEA4idYazva5ofmy1tincc4dJWaZTtCNDTWSeLPNxK92twXYhFXjsJ553ekgz5c",
  "key14": "3hMPj5DvXZWwpEBUThjNSogPUVrHt3cV6W6y6dvmPCwJbEsGHzxhSa9WPFNY918Th74uaPJxvGB1FBkD7KDKrYAK",
  "key15": "567RJbXyG8Dt5rTQbyNvQEXwq6gVNf6jB7Km1F8AAWnxFuGc6AE7kgDekZqZrzJwBqCUigkKqWJ8DLywqURyAG3c",
  "key16": "2L5UFaVeLvMLxJktZChJovGvcfo54rUuH1MSL4fnTV9aEDzuFuncvVEPP6iVyRNDeQYmsoJ36FszPZDmy849TC1N",
  "key17": "3ZESZ75UnhXkfdW4g5uRyCJ8DL4b2mTf3rUM15VM9VDxW26z9ZtLYHepGV7JjjSx7DAJAhZVG8bCi5PHBJ7u2xhN",
  "key18": "241GYamBTwkAy5KcJruFfmmAy7UUdxRiGEg3akwERjfXusWuV82TiKq199A3T7uzEB5xz6UjUseVoAUyD8WfG6Zf",
  "key19": "xmqn9Ko5u9nw8FjMgFoqzoLFfwZmjnqjPrAEX7UkDCF6P1k3r6BHtvDFs7vV7kbNxMfSdcmhDQ3hHuxVimZtdKL",
  "key20": "62GDMNEagaCX3sXiVfCEz2bmHeG8zi8dEnBTHVyidJVZf3UEYcw1QmuvpvsZoDJLLNxSKtyHd3copjk6CA6k9Vtw",
  "key21": "4RiLym3evUC7eWti1pHL6WPPamYZmg1qRy2F8kxnYsBc51ds3WRzr7Rzt5kWouCedyswqw4h678uWm76m18kA4A6",
  "key22": "rkFSqUskzR2TFxVBynxK9MrzN9iEUuG9WChBTtHeezTjQhucb58iwtKMs9pqTjSrdArqwmmmUPwhx1bM7anZRXs",
  "key23": "3aGewt7R5f3CmLUxkot55RiMEB4rUjJj4nTtcegaUUpPURv6opCJYjA57rT9Tz8LmDvDL775QQiGcHo1yxAxxTvn",
  "key24": "yRo3meRN8scPhiuF341sCVuBhcBVb9GvefMGHXhyNWSWfNFtKqtc1w85wWUtDMa2o276psBHXF9anvQ2LdrGMdw",
  "key25": "44CxYbBu9ypsrSK5v9S9LcJW44yNNLswzyUdvN9q42UePuGV8BJqYhq2UWL18iu7uh46xFPRCrQGbAZuqKgGVzUk",
  "key26": "tbishqfUxP3W3rGz6LXeiKft2weYCbXTpLU1nVCgtXWoULswhcGZrFTtnUPQRKw9YAUrY839k762pkACXb3wyYW",
  "key27": "5yVNDeUnhEa9td4RWbDNe9LUY3t4KLSeMgVDLnGwLYNnRT7i6owr7wZpTzSKH4YxkD2TMkm2p6UNeVpqw74971zz",
  "key28": "66G5L5CRm4ZujDBqKNAqRZuen1FAgWQ5W9WAxfM4BGYMtjXKNCoges8ZTpC5UYBf8Bfw28PxfT8jz1wG4PvBTvjd",
  "key29": "61sr5EofJpwNAPSyYUR2a1Fv3WtoBsvcvVK2o2Gu4BMonWwYjUfgGKeNQRPq6SCWvQSBbTgqKQHPQkCSD6x7ok4K",
  "key30": "3JJYQbNGWoak7dKJUwUKYrm4FnCqXC5acpZB2Nxb4rHEF9Zydi8w6Q14UnkuWpV4kUscjXsBQk1tV9WFLehR79v2",
  "key31": "4s4hANVi1w9a8Df1HqW3W4iPpeKzEkAxKPEypQaG6mU5rREHVQhmhjCftzLrVMGKLutdRh3xp7mTw9wzoowz8yjb",
  "key32": "3QkEKZamRNzpy1vXV4H23ejTqAvTZPac6TCZs9dsTgSnsD3gE43Nmwaw35EBtfgZvbYjbxcMLfXT9K879rXVv2F7",
  "key33": "5udL3W1GTwRVTF2L8eYJqUth8rikU3eWdHXCEWcZHSEtVgWEY7DfskgibTn2YqUzt24iHEd2fAbNXfbD53co8yWy"
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
