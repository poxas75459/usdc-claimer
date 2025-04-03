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
    "4hzpoKuFDDo7BEmYrd4JPBwvCVwz6WxVxwT3WnNKRnn4Tx1tuJLhRGNZrY4YeMPSaPVpF1UCnQmeo3JsUzQqdipn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nWWvaire5XHfF9JYH5ddhxqEmvARKsC8zoBEUygSEoRq9p4BVpwGQneJdjhbPk6JAMtgJRWijDWRyNwgQJAJWni",
  "key1": "2LjtnqgF33D5mdWMRgJXiUfRakpKcipLNNUeakQAU39rFS7Y4h7knAX1coYnnNX4HxJ3LK6DvWnytNpuyv5A322q",
  "key2": "24hJZ8FbSt2sJhH5eNc8873gTjfQ7gELcrutiYVXzF156qerkw8S75f1iCZNpYStmbBJ8yQ1sKmEFRkhQEQjC3ot",
  "key3": "4mcB9V4AXxDuLKp4Jp3oFP5zeUYVLtMmtjEmgnxWGgyEcqoRTy5wqcCAF8wLa29cG4MnZgJ4kECp2zxUbHhwGZjA",
  "key4": "3roomonYCgH3xwWqwhUGQTsXCcCVvh2jr8egQcptx2A1B1pLhrAWJAQ4tonzDqLDGMjxtWArkriqD7zkdPP3if5G",
  "key5": "4ZXdp87YDthRDZfroGnTU2WbUG7ibV5NsRRc1VHvTGaocGNd9Aos5grxT7VFvh5U2EvYAf2Pt2b7Wv58Ff5Nyzin",
  "key6": "JMGWL7WJD7axvVikJ6WFGguvEHCqsBLb4fxifosdUq46XLjaMJi4e47Ck41APpJFCHhubz7B2Pa3RVBQQYNJQ18",
  "key7": "KAx9ne9BuCWUgXCpLJw7BjcmrwRPBB89PgYbWZbH7iDnJ7vj7sZ2FgAP4oeyMYqnZsYob3KAyigU12nQvmkFwSv",
  "key8": "UeaWDpaDpQXHRkN99BKCydcQUrDbYsXJjBy2vmWXpLGztaMXx35CeiRZ87EeUai8kFmoqp1WcQg1KY44MEvd6Pz",
  "key9": "E26jR3w7gghXm2epsejrk7khuzkp11KGv6fjbQjT68kY8jvXL8dHqgbJzobJPrSWXcaF2aTbDz965h1UEz4imeu",
  "key10": "3gCvQYb67P4hbpikP1gjVDx9CPiDh75BRLSQKZbycp4ZxsxNB2X5wZyZAVcyBgCQen6acgsb5LRyQnJ9MpBuZ1Az",
  "key11": "5RqF1c6FacPCuckkhR3S4kdtkdtfcCoJdzCe8iXzwckxSVuddfdadq5SqJQBNVHhm68W9gwZ1zQwWokPhcqanXVA",
  "key12": "2eDbkQe5u5B3wNzq8mxZxohzL8PcZwGBCs6yaFn59P8FA86mMJjFMs1pCtXGL4qVvsvqxExeHnCeykJqVKtJwree",
  "key13": "3ucruMjVUQnzus6yPnzxKGKwZi5CwtJTfVYYvPQfs9ryavAdUkNnzS8JzqZSRcYtYzQVcp5RoVceEWGtodicBzMB",
  "key14": "cSvBBj38KpAurFEYwSoZYpFAayGEUFRWzWpEvBxgsjnAf6EGYbLThV6NWEg9mZMMRqBvpKzvDfre4ALGkTHUBPX",
  "key15": "4TUU4PsJmtJSwkU9KEaSxYCivQsTDZpgVrJ4kvCK3xKdJ5NqAb171k7hz3rKhKSCBLP6yELxvvKnDkbZRUYvZtE6",
  "key16": "45XhbyBZJtzXWHJYt58T7wMRcmbbVb9pL9C89uyN2iLyvUPeriFd8p4TuwDCNyAT4pcHhULqhqXQRc9HxRhzRQcY",
  "key17": "2fKZUW5HMvwq2mvAifp2ECzTFX9Y1xf7ipyMpBixaeKsER87ou6MUWJbBdxknNLkmqVCXvqTga8ckVVPSh3TTNvZ",
  "key18": "2tYYRprQcxqPWniQpYJDWRHcQjxNC1VoErJLMuvqJyXcC3Nb7iifwZBtsv7gUX9VAXYorkBQQDB1mvT9rzNKKhWT",
  "key19": "2JDM4gxKpvzVCa8tMmUVTqEKDiPugDEXS2HpVtd1EiU5kvPL5MEx9gvZdz8k7h6qdrUj3Hn8irqg3KUPF1XtdL83",
  "key20": "4VYoBTzjNixriPZfCdjy4BFZfqqC7RUJq4rctunZbtxvamdsZKg9rdsjKpFZoWuVtAVfE492D7iJg1nLMGybSJvp",
  "key21": "mmc7R1mhaMgkHL54BJDiw1CkyWubQ7SJ89odtJLhAc5rxkg21LjgisBYQLHNKC1f2NopWvEt7riqhK4peuLaWf6",
  "key22": "2GvtkhoPLdtNbdx9LdAMmQhBRu1VQzLqQv4SekH6BXahZmn6VbFaFHsDW93YRJ4ZAyyr2iheS4yLH1KoZQrcnjBD",
  "key23": "2gzwNQipJgrsmWJqMchmK8hmJgjzbrSnRBaE1vCyBixr34uQ4fWdpJQK7rBafgvn98T7e76EZCtY2xnuHqWiad1K",
  "key24": "37etbU1vBVRW24QfXnp2gutLTgGucmH75GDXJdprGQ3eZQwK3J2SyK5EGnxY1Wew3jPvhiCPwAZMzRgVsKFxj92Y",
  "key25": "2FSvy4Hc2AGoAM8GbdvL7gGyNTKpzTzXzwX58puwNGg68bgTFHnXuMAmrkRdQQWgSyWRxs2tMjiVXkMJmp5LHccF",
  "key26": "HydhtsRspEmQW1FQUENbsUWHdMgwZU8jbqAmGpCL1QQ4x8FKnupovQkLg7riSCtC5aUSCKxvqtzz9cSuFvfxZqG",
  "key27": "2L6PWNYzJ6wTLWSKgM4i74QdTrBieAsCU87xqPF9bvhkv9nZiUeGRGCoTseHKrFsZhDKip6QKAMt2d6e7UCTvABy",
  "key28": "2egNx1ed82jHAqZC5ug9eMuRjETESnZYgNFjV4BF9U86mvX1UucXKFt6tcLy24n1AhC63CQfcxVU8zLGmppiKPQJ",
  "key29": "38ZYUEuZKfUVTCF1djcTHzjMPT7fip22j79TJzvwvvjnGnDoRZRjAwcqhFCjBMM9gE1nq2cZViTfzPA9kfVzCSRL",
  "key30": "o3Ptb9oWw6SE3x1oxwJ7ogkQvTmJu6n8fSkUSvtKrENGSCmPQinrzEgSW5R1Ypjm5RAYx8TEi2daoXgCEm86a44",
  "key31": "29kgCk9j3ocbEJF7JMVfcYEcTFVZyKW5rUxD1bNp17hrTjvviQDQut9Z6wBBDmZkDpxeCVZrsfUNHQW2dL7UN7zW",
  "key32": "4CHSREGS4DKYVEmSPjNDrjyS27UwgR8acStHoKMpfAhH2hGygfwu8fzL2KV743JMAvkUvZ7dhEDkzzmtJD8xqJNH"
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
