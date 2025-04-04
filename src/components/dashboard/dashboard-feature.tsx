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
    "3rAaohiSQh7H7P4ACU957jdsQMpmLuYkCgKQMXcXK4JVakMKqxfhLM1YHgKBR8ZQpnt4UKe1duQXfHek1Y9tAvvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WkC73EXuCsk7RhFjt24i2JEJD1uJZjQmTgqxLemrhASNEHcdjxvDxxHK1nvcYVjPARaqXAYCFE7TN2GhBSw3MdU",
  "key1": "2FaHo9upNDraDPbAJyprtVZN56hnpUAAw25Aq5HatMweLHF2cK83CzP8V9u8VA4BEqNZvVxnT2deq5qwFkHdrt83",
  "key2": "4Br54WenHL1x9LdHhUGhiBCaJQQ5gJGQENqAb68FdDe6PvU4yEouEG5gt1LQ2sGjNQkKcBZ52Bc3b3j7931eYsoN",
  "key3": "uom9F3TiQnzJdgDs1v4yr4vLUSfm1JwZ44SNHcDR29wUzDW7NVnwquxQaa8yHvdrYYTShTA9MChiA4CxvJQqGP1",
  "key4": "3vBpzHsAbuey56KG1YLpmzjgWPhojvknQeNqivr2tLHeTzE5RJAKi2HdkNQVpi6JUc51mcihR88ofi5D68gaTK2b",
  "key5": "24itcMh4WJy232AdJkvaYRr23RmYtfa9myiu2QNsmxsKwBBcpbb8gmjLCC3coxbfFvWdnAMyJsBBUaMod569PGUo",
  "key6": "2MbLacvW6koSzkWtNaKJzzkqV37oqDkN8RqyKu5B8TjPGBpfgfkxKKXbcF6hkQ66fvvuZmidR2CoQMVzP2zm4Woo",
  "key7": "4FPm5syLrCBUzYDuhoXUcAjmwLMaUKhctJ9ziV38e5mU4kAD7uJkhNncnWA5vuAbNFSGxgKeF1adamZ3t1wzudGF",
  "key8": "5bP5ViLibbJDHUUgNe3jUZQUwP9VyFUvr9zN1v6Ru3NDqdCv49bFyBU2Hpu3ZeZYE1HaCpCYRKZY3Ub5zzrXJbek",
  "key9": "5v7uQ4CZafZ95tysmUNNczriCEqba7ddhPQ9fF5ooeUHueiY1vj2pNXHNuBRkq4B4oZU4D86eW9XHMbdCKXNoA7J",
  "key10": "2Q1VSGmSz6VS4ACB2DT6EYtEsAfVFpjFqDv6ND8iFDEixPmBwZP4fqXc9f7hNirkuXn5gAWo9nnLR6dzpNXcKRo7",
  "key11": "74Yu9HmQmDaqC8TawWoiknTW9YZbCXrHqDP4sXJXPqtTcAJs4JD67iw2v8XJUEDHUHhPURbXjNhUPeoSqgTwKFb",
  "key12": "4tRogg1hsJyp5MLXNqwxoLUYRtEwGPJZXKFh2VbvgaCHLR31r42QrFVGHk6DwakzpUdnjzkcMwPu1CRU4xxxpg1y",
  "key13": "4Auk9oB7yLgiCzMmyabjxENcX7r6MHH3xzDEYNQPyZg3Tj6wpiH5XEWeKQuspvERoU6J9TwEGjz782exEmoVDEVe",
  "key14": "4qnv8TCTwFX8p5Cg7jnP9kNC5JYfyCH2AKT6ffg6uEv1SPQE9wyGTkJSeetZv4QufE9BGg3H53BEz7rkuH7vFJL9",
  "key15": "2EtLmvgwroThSSTbRWLpe3EDeH54WGmPkALLZgosfo7E3X7qBJ9XBWgCqx7jmQ494eF6XygycZmSLxp6gMbV8S7T",
  "key16": "5La699AGQyoFEHVcXf22nWhyRJvcza9zH8fgn4Ds789Pz87pGnV9GLFVN5TgNRH49skDPGCNfjRLpsPcuxcthr3u",
  "key17": "4ZJpFBVS854JChpa6rij1Wp96frQpVnJ2zihKsxBkbuRjcohXzjR2CbNUxyYn6wSBu5k3wG2Gd5KUE75GdcwQRhV",
  "key18": "5A6ZC2gQLeHcKpdQ2wXcnvDUpBLsDZY6W7uj9KqFqTftQYjQUh84P9eq8RZZVfSfD7mjBkS1rsUEeUmv2YkQ2qxn",
  "key19": "4yvpRHcbjU29XDp9f5PEYQBXcNbq63fGBJV7Qi2GFUqx9MvMj46mbGz7nabTjRyBH4Gw8jFDrbUeNoFX78rdeFhW",
  "key20": "4gU195j8faazPZE9UppYEMMoTV55gdysE4vXwg2WUQf8YT7M9xNFFFsLD2DHRZMXat1mNjJK4uDT8kzxxSNmKvGD",
  "key21": "2TscJuUfDBjutHx5Z6Gm2F4RUDpDtnn6xni88mVEfRu3xghhyVqaEvBnyGjEEkv632mpwQHf9tqNJomKgE1BhPNM",
  "key22": "5qs43Loedm5T4Wbfosni8ejKqL7Ge9oFvnPA2FSBVYkcPux5Zph52AvYYKgewA6rqHfmvQNFH8JyYa68dWF6dy8b",
  "key23": "2hX9tfafKk659vWe4kgLcdTgjqruRoD8jeiqEij8rxXMh2ggbzuLVYBeTnA4WTGCmw27iqQxwGkmnc6rV7cQ4j62",
  "key24": "67Kp7ebWHdkFkRQJo8E6TRHbxbNcFxBn6HLUftc5GAkGC911pQwZd727AgcNJEMfZbv1ey7fAQnQL9Q6ZGCjnm4F",
  "key25": "32gHye467cHFoPQmxqxBB2SXce1STP4KCUC12puCz1YLjPzYpaSQ7gFZG2HRNjAmdNEDZcu3YqkYsyunyQbZsSp6",
  "key26": "3wXWNyPxvR5Yaire4ULe4z6R8dyFMNEwM4Qv6hvn2jdEwaw8SuTqNEwaaepyW77uCLSbecAV9NBrMp4sK3QXoy5W",
  "key27": "2cvX74VzheRtFTSGfEGubaweD6H2NUaXeJMuJ3bLPA9ZCt3DT2ZLcfUYMwjboQ73xVTredx5gkYbkRJ9NcHj8fgh",
  "key28": "2j2psj16gMTasDEjdjV5irAMgHyvMmRBYzXYRRRtKWA95Cvi2E5GYTuUeDH4NZ87mjEmzDxtuDM98DzywkmjuKpi",
  "key29": "Wb1xbW6SiabYmQLRNqfXAzcVnkhcC3HJaMBhYbSLQhoLZM4EQGy3AMqxCoZwtaw7McBHARNm12AeixncrA1vDkk",
  "key30": "2h8CihxNgSG9DCTZpnwXBcLLmVFC44At1S7Jc93TxyeEE5A5kQCFfNjeCXURBxq6BQSV715j5yQhbnY63RUztaib",
  "key31": "t7pDDR1k8p7HLjMH9jujM6LR3Tcya84ZnxiURYfvCxUXBX2oH91CbNLQ4qKYXafG5FbRXjBZQptmQEYp8MQEyP9",
  "key32": "5W8nLbFvPBUSdPP2jaUjZ8qVweYDh47gq4dTxJNaRv52e2Gc8ZZG7BoDZhcVX39w8HGqJY7PhUQrsFaD6wiXvEUA",
  "key33": "2DeAmL1PsWGJqiYFRWVBEgn7dQzkY6ihTVt8GeULMTUJt7YAy1GFm8U1ttvfrtyg4ueaDiQ9x1ra6rkufwwNLLjt",
  "key34": "4uEjKvYmp8UvtLp8QAX3ZH2qDHZUmyjNCyyspGaQvtDdB9hJhCgwXiHDQRZrXyHgm5qwsFMfGGM9CjY1ivJEmqwH",
  "key35": "Uh6ACwZQPvD5Y9Gu8ZSifUatiezfaYBSCFGG9m729rNY8GvkfspWjGRDfZiXVA9gNV3q44RZZwxVLuz3n2aKg56",
  "key36": "ibfxXyN2RFtJmx59stRfKvvDiYqpfY48Z2hHZG3VWcfxVQpsTZee71vPs6Q67K4zDk26xnUDZBeZuFW8vXs42nM",
  "key37": "5G9jJFCFVwrFHn3cMPajhgpWYnTVzdBVJRLoDLvHeJ91swY1kgXzxUsQDgKuHtEPdCxdFoUC2Hx2sBudjigWQNcr"
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
