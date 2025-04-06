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
    "4hTUCp9UdnqM6PAHgxoDvVPHi7qXBspy9N67r6nCxAaCpDneq33hkn3G7d5gFwmBW6bKrv5e6FYrEf7tr3Mo22ZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JB1fCuwNhem5gVxuKSAezq9LiZYxEHLDJ5WhGjndozMp2rG9pjAzru67PMyMonZdi3uLmrjmzCr3N9rD4LmkFjo",
  "key1": "5YfHQHhUvtMyrm3KvxLtp5k7JLNQCH3RANxznkF48ymFYs8P9tLqdELU1SYnt96Xnc5XMFBM3ypeLeJfrJLBXnp1",
  "key2": "3Rhn4et6Sbpxc5NaBdo54F1GN89YDrwoNoLwL8qD3urktjkn4cDjKpQvjLu5e867Wgun3vDJV3gzkYP64YTAZckh",
  "key3": "2YEpJpbJuaNHtpnxwAi9zjbBGuFTsKc5AxnT6LKh8ygXMwAyzXHGrKVxi185twa1YX1kLbtAvwrcduQnzd3gg5ak",
  "key4": "213eNs6zjccfV2KgtVRfyWPsX4xv4Jhs4tCpTfbQL7iTx7FTeh7LizPeFtRWf6QPCVJzTN4CR3D7S6co2cBhiQm1",
  "key5": "5hf3kGRvDWC3oaZ1kb6PaUsK3Xy5FGaTbGe2mZgWAyBQHXeMi6ynbQRyYAm14mFuD8XGUn5UeGerTfqpGgXePQZ9",
  "key6": "gA6bnTNFSscTi2T5mWtw1vjxv8fKfCBeBXbLqApjQ16vxr3PzrSuMX5CPLnrr7vfzucUgWP8YQAv1vhx1nCX9f1",
  "key7": "4yTfhjkAWB661dhadwzNn4KReENheoroBhvMkmxnDCfRqbYAqoZ7dpRAuLKes8GXUoxzr2N8Z9tCKQDuy2nnhaxq",
  "key8": "q1fe3rVwhrZ3Tx4A4DFAsdwwU2aNwDdepKnhsejsj8ms41ycDhS6ShbQCQfLvkJMRaCNdbNvKvwqyCsyvf6ndpX",
  "key9": "3ZWun11MZKqjtfHp8FF4GkBawL4fQph2DskZiR2qVgQniiLo5Pm2J8J2hcb1JFvEkmE4cZEWCWijJkae8rwTAUUT",
  "key10": "3vWCqjG2cbisFLVC3xCGXoznkwebP1FZBY9NMWhdiCaoydh4BT2XqCXwEwkmyurJdhHNUozKid22cdyQ1P9oZYcj",
  "key11": "4Q1HSkph3Ld8RhT27HKXR1UXnQVBKzRAviuQYqL3k2g5LiutX4kBgoJ97hYrBsAVRSWP4m7CAsmweokUsJpvErFQ",
  "key12": "38iaZcUhEDKzt4wQH3ANPG7Hv2S4HBkqGswhpq1Xv1o8pZTw4hSLzjzeJ8tcvZiZYFHCBuVfKSEgfmP2Yf6m8cRg",
  "key13": "3ePA6Ejt1YrJ2S1PdfU7GtJ6DWBvPn1kzmEeMXE4UZsnCMwpY4WCLssE8dypksUwRP7tFUgyYwTyWYo9kYWktChL",
  "key14": "21C6i3Hz8nhCwX6G4CMLecixiHkLhbpxzycAHcWRrZyjzkWNJksZfNyn2rgcYYqM8XyQm2i6y4w5v8BtZ7oaERJD",
  "key15": "2jLtWSSCczEqD5HEt9Z7U9D9A8oHZhn21ChsMghqFoBHZcVfLwjcPT4dyuo5C4tjgGYwJbCqyXGfP2mhhEYTrSjY",
  "key16": "3uGrNK9Eb3UgaWLMor5SECreF5odV5JEVyJYyXu1i3JUQ8S1bDQzaurRpQ9krEN113zMKfVcBZ1ZyKVC1pkVdFCS",
  "key17": "2W9a9q7JaSk65B7E41VoW8j3exPzzY6CEJpkzMKs94SBTtnAM6iJ2RbkEBLnSQNeNR6Yda7pBi3hAtw2AZBwmNqM",
  "key18": "vx7VvU5LgSwnx5PxpGT1qLWcCA544Ln5znx2cXbHQd4NihGu55BSr7Gv9KWnX36p7daM4XYWczTHv4kAP3d2bxp",
  "key19": "AnnryU2Pdd8Nx1RrYsb9RaQHFLX64wVVtWRNbHx9VRMN9tBv1TgsvnETktGfdsnNpgn8SrcYjUr7245JqpwPbbG",
  "key20": "5uyz4PLS1gzEpWzYWPs9LaBTTm8meLBgX5e1csHRherWdHeDLt4MvmWqYF81ZCCqgyUKX99x8iLsFXT4cpCib2B1",
  "key21": "2AtGPCJ8Nro27FbYmUfUERwaicCHDhiAznYtGr6FwFnSJGw7v3FM9mbBr3i3mTy7C88AbE8PDpp8jW7qZMgLn6gL",
  "key22": "JBoktKf2UqP6jXLr83X5EE64CPgVxVwdmuYC9cpp2kYdgMsmk5qLmvrmbHgfNQJayBA8tygdYGn42DbhKMCq97L",
  "key23": "3oMTr3hdVrLZvDJ1caX6A2Zgr8heX4XsYtXoi5YmZkhmDJ2LNTBnHYRA1LCQPmzmcxH479NqnW6AzYz5nwVZCFbB",
  "key24": "2QmxYWtWsEbyM4dnuS9wBnNAYDkmH4m7s5Y5CMjTNu42b713XTspr59qtE3E8vifWG7WRMP73FvuoQ9dXE1rDT4e",
  "key25": "2biieBjqQJeUJU9UgQFFgGbmeQx6f8tMKSgXcHY9JngZVsJTxNgZLn7zdxkGs7uGbgf67fagzCkrc2HjxE5QeW6",
  "key26": "5AX5omNvsz9MpbpsvFaK6YPr972vYYpNHcLzdC8wWsqYdY3oqQLe62v6PEByCzhiVPpM9K9rU5kSPo47wrhKkivJ",
  "key27": "46dU3PFNnv9KjYbVVQu25Csaay4vPmYRUhxiypSHmhqQZCBR4ALeo9x95E5CPgwwD6tQLLpXXsFaqiafUEXRrSjn",
  "key28": "4NqEEqYiyfh8AMQuhb8KRpNjPAyUs9PmGZ3KBv8tfU6CUcBQcxYCcBsbFk2fXA1tggmhohQSLjVjuQmrQvtbR6wy",
  "key29": "3n4dfU4BoKsLuxxuJiEFohmDGPmyhiSVDjT43J69HUKvkwUjY7WeX7fpEmFFAHmQPT8Hhs1mAFfwK76xZ94pxjxU",
  "key30": "UGqrkaECSpVyqbkiRch3zD11chXQCexNwHGJoniK6X6K9b3vz9wkKvVWfdJtpxPp7X1yLhp8D5zzYHjTySTx2si",
  "key31": "qsFrNmKLVJbWKzjNcFcxqdX47Xth2yBiWBdEZg4i36DKTwrxWtTcVenZs6TYwXTebFbKnRFDJA9VUazniXVi5yr",
  "key32": "2ZEDQuxocty67RQ8uSp5HiFEeGMmar8YYakBP62pbDr7MSWh1fZjYcEMTqTVgq1wBcfZLL4cvUNhe9Y4PnSXZsbV",
  "key33": "53u11cpUeQXbbu2ig2yvipVumMBx7D6UcJEBa9ZjEDkxLhv43VdLUCwdPRH9htpBGXE6hNc6Dt3rV4zheKGeCuMu",
  "key34": "5YUgqNub1wQtHNkTtYUG7dxRPqzhRJmyujUv4Dbeyrfn48VhCVrX3sdxgQmK3qxg8NwHKKENEnQVo488gtDL4GTt",
  "key35": "5He1FJwJHfKjuKt8G3DvzdRj92Y3PiCrdaAZT3FDAU3hB2s7XfU8doXoYphFxJu4uxbYNQJ3QnyeGPBTQKdr63nn",
  "key36": "62a3cnAefg3LJXMfv6DWppSemUyUuHi9ZXmiPfYvAnaqCNEd7k8uMDc15SSvSfzMQrDGWumEGKBfFQ9cj4B3JTti",
  "key37": "2cvBrE5FYcD9LeX94rxBkXZuuj1L4bmrp1VNcaKoamXtt246rf7dktH3xzpmcKAUsemH1D6HMHYsi3BDoLQXCEjG",
  "key38": "2BUY15LLiPdEnPnc2u8TNEYqnEeAsGpKE6b4qBSRiNwMaULy4d1BwpgXJUK8VNv46QDhHB3LMENADyG4RuwT2nUk",
  "key39": "3CqyYBaYrBXxLZZNHtXpf3QP378bBKPTshmYgQd5nFSzktGrNv6cXYa2DWRFRFFxHBa4cQbYNaGAexsE3KgKcGJZ"
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
