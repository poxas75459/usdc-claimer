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
    "r92VJaXMZfdNB2mayV45ftoi932eqDvsLBFoHVUCNQaQrX1WcbPasPKBQBLAmJ5SV2YEkjbPvzHPzE3NAGsFvxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtCZKoYwPyHAMoEaAWXrxo2zSkpUFoR2M9a6gTDTJAbjqJXCaev6zeZHnvWcy7YHV9XoAD1cH93utNxTVCwJ5iA",
  "key1": "2y55xYbTC5gwqTQS2WsVoseSQE5cam1RtMABtzkkJbdCYGchfG5MiUfyVwSVeCCed7NbKPm82hUj5o879ciPX3av",
  "key2": "Ne3GWrrWAVVea5yZ9yhsjW2279YvXYw6c2T6VpPYhsU28mABe8a7mbuAdpqvC9vkF1Rw1Z1nYkg7K4Amq2jLoA4",
  "key3": "3itUcVeXW8AE76ya3qMkv6XLEqgyvSm3YzptSmSaejo6PhvaPGGpcRWuguCH2AdF1JRRwP8uUjLQG6YeEbSWJr2a",
  "key4": "jiTfpMDR4EPsM4ypYRfmHzaGah2WLqkQrcBxc57B1CfgepYsdoa9gJKdkGA41GTG3hxCMqQS8cTg72oGqgG86jq",
  "key5": "44T4rkxfzTDSpmyaz5wea2kcoNj9nycHJfPCM6c8xzGam52hnBUcfc2TsRNHKuWG7dSt65jwZ3AsFdmkRwsSqcr6",
  "key6": "4E5Xdi5d96dGvjyiU7ivUHMyW94Tr9FFUYGXBsxzxnieuVxsyu2DPA5toYwbhNeuk8eiD51giHjY7sRtJQewoJyx",
  "key7": "pHoVKQpXyS2gGeyfj5SEEqhwk5Gxm5uLbeL8nrgaNJt3fxt3MAHKJPamoBqGF1XNwGkHfsN72gfPk828oepJCDv",
  "key8": "5LoYa2Bgvi5WvQBnsemguFnoLRhLKa6EgmqYENhpK6hjfazjbtYeirN9ehkBcXN6wFAoVjgqYHMYsQKPBMunQ92F",
  "key9": "4y2kYqRNGXLg8GNJu2q65kdDbNTeKPhu9KXiiLRs7i8VcVoaG8ag3n8HAiqc7VedFZhxBG2MgDE3quvWddX5nLTP",
  "key10": "5UeQidnWeWF4fu83a2vtFTAi5qkXo1pm1dQe12XEfGL7RLKNzzFxBSxspZQtFRwFeQd7mHgd6159oXi3pXVnPtKm",
  "key11": "4smjf2jYwN6hRG5FLmiz6phRDbsjLcW3AJcRothUbzBVmCw7vwnKoMMeGaREeNfkQjefV9v6PVrxuAivknViVNdm",
  "key12": "3hcCDqHbG4X29TjEwBMPhG7Zc9bv799dQ9j2M77chA3FWuvjQjvDNsbY6oHu9aU7oumUmLXrCATAxm8VeFmZNZ8F",
  "key13": "8Qwnmc4g5BdQE8b3aMe3nNZVX7XK1sdS1SbSwMs7MZSXXkh1f8y5JJ5ArNBE6yHje3yyFq4v748r4Su26L3JmiE",
  "key14": "7Yk3h64ZPyEa3CyAKqmPZHww2egUDviw5yHuhuYszssLx6aXQSee7YtxbsNznP58KPQnvahyk8G9sc6MWXAsvDD",
  "key15": "5Zifm4yErsna38wzHicJW5TvDoZvy8tndVvPuGyYiocb3ZK3qemtKhUgisHEVSa3GbiRnXinUR47fL1LqaHhxiW2",
  "key16": "48UBQrTFiUc3ch7FndVPZJppK1x6fKhSfyadWt6xc8phnUSbGUyKLZTmtb9tPn6b76jEq4ii9YESduUGQ9fWw3Uk",
  "key17": "49jVPyoAXXqFQyVM7p2jnX2ADdVNdjHNkwV6H78aXYFk9SJhH1JJBitcQren6Rdro6v6XWWmH6rNweE9fXfhhBy8",
  "key18": "HWZCtJCGFtFNrmEp4rPfhtDn2E2Y9YpUsXC43QUMKNDc5nesprrP28FbAzkU2mG9vEd9SnsKxsmyeva51YQHYph",
  "key19": "Ryagy7tsqyWRXAfrqL7hy8523LWdE8wEB8UfWu8pULYnrL6HzbtYGCvw9H4eEmNfsQtzweSbFF8j7htRyd6NDaS",
  "key20": "5VAsrqiNoCccA2sHx97KRTNYGYRX2hsinUZMLraFkTzgfV5QCiW8JJrKEY8yvpPmdx1g5mgK3wjVuD6jVeRgvL8h",
  "key21": "34qa647wA7uHy1Gd6jZEDzv2FVKYTGtiKPtRtE8N8fUKF6vStssrRYpzUKNZRKf9SgDSDs998KQ3w2xbz3adR4En",
  "key22": "4eEFbdUsy6EwFqHDNaSv1z5nrAbWDKMCfTcLRhYFrGq1YmuVyESB1h9z7iipZKvGJG2po3EFBVVM1vBEaoFiHhG2",
  "key23": "3JLb5xwSZ3cQWtvvCHzN87uVnFVPAMXKMnHT3TzewoQ66E4r5pHmcCmALTbCvFsvvXaQmhcdrdGNQ7Ynake3d6of",
  "key24": "3pBKeVG5fNmwLmaYicyjyzXxXrRxXE8RWWvh2JhAAWBSZKAhH9YgvD96dfj1VEYrK3B8zJLWaeGVQf1KRex1eS46",
  "key25": "41AvtnHiY99iiwnjZzDPszRKUbAxdjwvRfJjMWgTq7yoEqqsfAxmTsg9puMSK3hdhmJh6Bwhi9LZE73ke5rbS57P",
  "key26": "3eZDDEEcqFRpE32aC4F7jFBsYwnz7GYhERHAGngavArZeu2GDgzG7KVn7DGPq85KpJFfz1bnsePB8qbLJGYATkZs",
  "key27": "5oeUTP3gnjoS1X7CsGkZNhUSFAP8SDueUUepav2GoKTaufDGjAcUuAQBg1NZEG6iw7ea2JXfiXfVwUTX85U8CDUT",
  "key28": "3MshoYCsBE64ewnB7hF2fopVtAD9T8zpEuNCvyEmLk7VyRryfrfL6DXJXkg9uthFVFKvouz2UxvAtg2BDkFmLaTM",
  "key29": "3j5dk6WF4pHX4q1WSkWN1nHa39bhYkb2wGbLMMTXQnp4bSJEKFmMXGe4nENrQnpFb5fuGiMSpMS4QnaoWSidTGiQ",
  "key30": "56qy9NqG6phk9Qq2nVbhLg3MQAaim3yM694x2aYbnTr7CJda1WZqYuvVzdN9YKobbHjixWudDLBofKhGQJGWMSyr",
  "key31": "5Fub8z2T5Jwfd2fDFj8iC1F6CCscnoLcF5DdtG4dVRTYgtK4xFaGKT4MnS54XzkvN9pf9bcNoXVsDNQWeHT34wHY",
  "key32": "2ktoXEx1SBv7QfCCa5jHva3MdKANmF1R6eYFUPpEBtFbjqJhBZKMLGYugCnefMSorBXoBtGrBUarqJy2Lb6raoFm",
  "key33": "3mDyPC8RHThmRg5WvduPskSH2My2DFGESR4H3VKebXg2FBUzcEp25sSBKoEcsS8xpAuq9pnJVr6g15DW98ZwdS5p",
  "key34": "2zVviZxHuEniAGuKCPZcmBMuaWPoiZoFKkZu98958CePFt6ungvz8YvQ7FnL22EbfGMkXKGBwtwsZrWWzZDHRYDp",
  "key35": "4HGTLdg5JyMw31wMGUdii1JjXnGUmmFs4iC7n4CA4PQNKqxMzFGHSoYxabC56tUa8fEKgq9SNZrByVetKoCJ5CzA",
  "key36": "3rRU1mJiVLQGeRWyUEVh1MReh8WdiQ9DHci331jTRUEkT4j9FJxXhEK5AovxsRM6dKNJuXUnCobjXjxgj2gzpgit",
  "key37": "4Gha9S5EJUg3tLUZysh832Yx9SVWoYXvLWWH44YwvV5EyJeGr4ufkkkjHLdLWsR1vCr7r1fCLdCfY81ZtA6q6vRU"
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
