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
    "2j3UUQuXYDpGWjtPEdq7aXnp9toAWe3mC1AjGS56ARkDgZCBZce8VYU2an1zbQURnZfCPpYLe2bFZ9oU7nGxfsaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PuLyQjLb6e6qcSmo8dXhrvPYacixTjnJc128dyHbyANSKsd8wYk5jUeut1jKSvp8mFpPCVWhttef4jkYrPxfUbE",
  "key1": "2PdHUa3fr3A1o3RLYmTNvFkQcg9f8JCpRHGkiMsnC1TzNPXxrJZWstBfmnxabZyidaUaLpYhzD9xreBzZvD8425p",
  "key2": "5xWasRUeqxNseguR4s6Jx2oAaHiQ5qm3fGwd7UVg4oJLKLQcWwDqFEHb55EwfDtKhUrDFBWxtc6UXCfVphN77n8W",
  "key3": "5WSnsqVG5qPvtnqAKyF9J7hGoRqBp8x4NfyPYkycwxb3FoV9vR2kAusHc8eVaDvPHUzi4Gkh8YekeCBcswSRuhNV",
  "key4": "399thamxpULLAuuhfcE3L4TnMYut7ky71tfAMn5zvDKMA4AvWUPPigdAZttRFaFZZQDyCGNLhX2eNYgA8hRYLTjL",
  "key5": "iqayH1CXs7kRDBvwR54YQwHaEMPXopeXvWiZfDwwnwm7vR7z7hkvYTBui6rdaeGYDrjSzT4RbaMqivL9EPMXuUw",
  "key6": "5fa6mVWWHZhmTAuK9WGhgfegtui2R6GATHVhuuauGJAKe1rs77Ns7Bapr6t4ou6PqtmBpvbND3r9bpBFtY6rW4s2",
  "key7": "3Nw8wgm5Gzno8pCaU8WMDJEvoZJNzZZx8UaPMqBvD4pszrg1L1ubwBjwJfYcs78NeAVcxRRtkoRJDm4A2gyKHpsw",
  "key8": "4fG1WKm6bHyZwgTKUqjvA8RB6srKQQ1MQCDdnTUVVhbhEjdvh8R8Ruzd6THXtRzWELGvoUoLWyERprq7ANsiCgsb",
  "key9": "FnP4heNS6mXxM7vosi9KwigmvMGTkhzhrcRM7yqXi778AYiFtdAhZco9uVfsf2w5DkFYWTTJcSLweRcz58TXx8i",
  "key10": "43s871gHnUfRytpceZsWHU3NF4RxKnyDkvvfw2faPoRt4gNNT7TEptdvFSDPPj4WEXPSGB6JjxRiED8iZg5X3rwX",
  "key11": "QdoCSSQLaEBMNxmh2LX3dg8yx9DDdn1JozrxCwWoFgMCAm5UNjgdu9dbbxT4Cw4nW1TXpPxvow54o8CRUnh5MSa",
  "key12": "2mn3UkPqsv4FmhMci7yvc4AFxwPzh3Zbp5t2GFvrzFcw1Kw9gAfVhft7KvXEZoi3Jd2GmeTx8A71ztDHtEm5Ffem",
  "key13": "4YVL6Zb7dg5dFcG2g5pW1djTZEbrGMyhyqwfAfFzHzZ7kDkQD7f3sNQkUdD5CJZt6V7ecxGy8tyt4bDKqvL8tdfo",
  "key14": "2K8KnnUtYtzSWQoniR6XtCrJMmMiXibdnac3UWNRoxqfr2QeL37RD19KEeCUj4qrnAjZVDCePFNpkHjbfTRUPAZE",
  "key15": "N7f2EAZRLYN4bh58HdNNe39su4Ft9krp5XSZ2Rnz2Ruh354649LRnW9iqjo6E4HjTRgeoqj1FwvskV8Lc9kH91V",
  "key16": "4YvqZ8ApJztZeTU5UUaLdkCbDVYdFYxe3nZQHqCRWBvQY57ouegfGkg2V5mM4Gx8whfAGAzMQknENbSXNxPC4Pz8",
  "key17": "3aLyZyH39RnHwnpEapf9HkY9xf7ojbU4jqisxMhzyViFqkef6TVGHBozHwUU2othtxDb5GGS8JEf8T5TL4Yvcidc",
  "key18": "3sdMkpmtLSKekUABKgjzYNaWw4FvxwN33Kz6hFmH93hamQ1QWvmiEEuSLUQwXog5a4R9apXADp16QJiCrJJF9WJC",
  "key19": "273oGZtu8pJURr46ztBFbwaQNVgi1PzjhNAwUvvtJZef6Su6CRmEpjYBhHDhBPPAj2rckFU9bQMWTMXjVtSTBceN",
  "key20": "tLtcUByvJwX1Bo8nMaQjdkEiVLd19ZBFEvE1Fp4utvJSGf9Nbw7ehf4Mu4hJ9mzCSSJ3RjfVSJopJ2tk1QgHCgB",
  "key21": "2yC24hjTSzNkKpUBGzg7yMzspTPofFZNA4SGcWiEbm7tmRvFoMoVbbwR9ak8bD6cU1wqwjiJ4hSN7ZzZGhodFqTs",
  "key22": "36zwbVy17shodNgWbYvg3UPwuo3gav8dLTb27jAz2STJfVMV2a4EpELPyugv9vV5ViSC2xsxnz2sarGDgHecA98f",
  "key23": "4EVchN5xLHpKw4SNqT7csJvL71SPt7NyqVbN6NSVsVT3pUtgmUaKCxnBcEXxKc11FFRip5iNH1ouMjiPC5mWF91M",
  "key24": "qd7Kj8KRLG4f6bmH9EtF4NKRpeSgykGLqrc4fezFyocC3HurTcTY1p8obzn9vAAYW2Q4vWrP39AjV3raQQ2o37B",
  "key25": "4dkREG1UCBcqv9o2YQn3TiC9oYMnqFnimdsq3UsKyBHHpFun95WWnBL6P6Fu23hQJBeHi7aVQCm69GYEVPFzFFXi",
  "key26": "4sN4Nd7Q65coxdoBuVPJCD9MvZ49QmTroJ9VSmcc4uarFq7c4oVsvv4L9frSemXWWtnhHXkezc3uPKVKsxC1KNj1",
  "key27": "3qX1hCbWmqsSYbfaUCUqFt649k8pnJJNhF67UFZXsQPyBtMSWR2CeE6D1gcUMdtkgKr4a68iJ5ZzeLKPuWNfwZTG",
  "key28": "EtwZfpZBEsohX3RF84RRqjud4jMeSNbJczkqaBweqnAQaG1L9EXCiLNjnPyt5tVH3cUC1KqYmkvu4yg6o6X2bTQ",
  "key29": "2s8CVCzrxHUPHPuM7T6rsDdkbLxZ25s9TUn12fxEWrSprH2EDWDkiqR68vajn6yDF1WCjcWfaxyho5VNE9DrVPBV",
  "key30": "4wUqzbK71xmXRSNjVJ6u4R6rLv8xshGWLLsCFiScVS2VJfu42zSSMDHoaRW8qzRrxWdUh5xVh9QwxnV7Su33k5Bz",
  "key31": "4S7xyJueKHN3p4bLrGa6uDwscrjREdTtyKBNKRAcWBJT1naKvbq3f1zCVz8RVVeStbnKeuZGUS1tnzwYCfGfxuaw",
  "key32": "5LLF2BvSEt1WVJ84ynwFhe8b7MKenqTNxkh81Wo9YoiNPJXzHoY26VspD6FqY9mG7gZeuyEozZ6L2CP3XkSw1WeZ",
  "key33": "4AkXRd57PBS1sP56yvHBQbRdiUFoejaDU6ckftUcGHsedd3JxD3uJD2RmfYJWyPjw5kCs7cpgrqmZcxiQ9yHd5m8",
  "key34": "jbqCs1QC4r9JPsfuh4aotPfc99HdE3ytz2ARKAtAd3zZBfZhDvmrV1keJrD2CbhZ7A5VAbmdP1aknrQoeiGJgMC",
  "key35": "56TjQvXpJfzPeGAga11LKh2V3DNitJnSKdq6KpHyYDcGS6MjzDwkcgGU6rZHJp4iUbuRBvSrrBg2JZEruxSBLWCu",
  "key36": "4NMnFZf6cNoTGc4Lh7F8gXA6mgdsDCZsJGWnVDGH27DzqnuH6xqzgTTLqoB7x2RAq6jYunH6F3g6fXLZfH8Uz8Nt",
  "key37": "4qDBBCQnL2fmkp8YPvyy8rR9YPPkDjfCFf7fPhdamH4phsC3hY7ZNjstQz1YNGJ6MvKptvx1Vqd3VgYS555mvAHd",
  "key38": "3KwjC3PbqwBXyhQGudSJ8dumTSh3zhcvgGT7ujGs1u5u6nAXjaascmR41h17kNQxwxP7WPJ1DLK3cmhRctLumXGG",
  "key39": "3rvwubnAjcPXBgZccLQKKLGRty2Ebe1bGQvFzMsSizMzCAbzNaGvDetWRSaqEtqiCuekzz9mqgTQGiXgkjEfDkDh",
  "key40": "Hagc1hJE7ToMoRfg7AdJpsccV4AnM7wJqfKNV9wyAiRwazJ4ibf4GcbSdShPsqSJBkKaLnyXGP4HLbwzexpcq8S",
  "key41": "448ZE6sTqLba3zzZGUKqZvJC2V9emoxh8YJFLe3idgx9ysXcToDrKWZpRcgyoAYtWJAeCvE5mDd3karSWMsYxpd4",
  "key42": "3kVK2itt5Gd4yhpLFXRUr6btMBt2F8QmBSHjykMudM6voJnRogMy74LPSzpbpbjJz2LBgJqvtHXdcnGPc6SPWkMM",
  "key43": "59UMg3WomuSADwZYajFSYZYtBrtxk1A7UQCgMzGMofW5VDkBqryJf4fzThrs86BQmUks6KSsuqfyEB3z4PAQP1fW"
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
