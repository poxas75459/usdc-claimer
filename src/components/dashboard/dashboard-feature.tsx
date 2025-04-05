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
    "5gpMaKp6ViaMqUsMNToz1UGaVssE3Cww3xau67hmBTASvjsLH9NBJoJVEWJifRiGtiXy7A9pEE4syU4FU3EiTDZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFPSdehW5mXYnZYS6Wze8nPSxkNjdhoKb8q5Jtucsuh22nKFP2aLbz9Ys2ttxEHCczEU1yEkfKoXFoaw1wRX5yZ",
  "key1": "KNXvKQt3GPNAW9NV7sP8JA2CJ5dMYmZtQmz6qbgLeBucjfGnvV8myMvqZqW7814LYcgR4NHvT9ap82hjoa7hwcK",
  "key2": "3KJXVSYVk344mAp6qgf4YM3aG9nkKiWrseKohtpMNHEtMVr6XXLxYUGW7CLTxEq4RZcngwd1QpN5DygyPCm6LniE",
  "key3": "hDrL9PJ1GE5rMt3D4FYFrVTN7JU1KJMp9DpLU2SJ3zca8Kwgc3KGEURtr795Tvg7cgmwAESdUKFNLarNdv71WYj",
  "key4": "5tN6xogRzbeeHYfjekrDBZPqbhuiVxyhf7iKsy3A6wmLz4JovuVEhCYKhRw4Poe9QxpVVNdy1QfUctSMZVRArWkp",
  "key5": "Nf1riQwVLtCsXupduCGw9t6VZzjhCZ1hFGhe91SEJMfFq9eiR3HqCoAm5GtrqcDnnd3jub2ZEHh7RnxGZtNYrYC",
  "key6": "3WBBicPZ8HTrdR4ktkQCr3CbijxzBFbLbvZ4KndMsno41HEY6o7ppf96hCJ6cAiz3RakUnGPXTJLkmronC79hYcb",
  "key7": "2xJ7jNuzD2HZdJLgzWyPm45bfjgDahM9tvR4N3tPAKbC4UWDU5KEqnGXsnDRS4HV74exe8b4QSgFjYjBo4uuh6ae",
  "key8": "ezS1vKvdG8zGDiPbdjR2SNHuy2dFpv1ZocWjhWcrzuuopTLg7dnVY3swYPxgB6ueQtqsNSvh2gzzAHAwMaqREZB",
  "key9": "4SfGNjo47W34PZzZtKF5PB61uUdi4eY5Rj6JuFJzKV7fTcsGwFo1jakVFskxSWys62dhNeXWj84xxZAEBqa25Fi7",
  "key10": "4Q1XtDcqN5ty54Qvfz99aLyEcwD41wJq2zoY6neP39wZ1T5EWqP7wZ5Qwdx63Be3dTLhp1n6u3k7XbYGKDgJeR8C",
  "key11": "4217xbjfU5WCWiqX4mDW1Dwh1M9VzRyCyxm9hgRKE5Lk5EFpBwxpKkmLRwDrJExAs8P95c68xwUE4nkA4LfYnibR",
  "key12": "56mc9LUFXQkXeZvR4FjuSWeyJy3oGXpcrqJ3kGFbdrT6isUuz73b7BwzhcTD7vSNpXGzPRdJXpgVdGT6YP3UP75r",
  "key13": "3MdhM8LMSD4ahfZPDEFMtKCJ7Jhj2S6fRaerC5Qwh8MCiba5jMocDuJFeYrSCncS9Z6r7udNDVXSHdVRRMuCjcLS",
  "key14": "3uY3ngzVXXqLR2P1t55RdAPisPbkyybBbFdbFXehqqrhpttw65E5qfja2eRACNv3izXhKZ3McebcjiyjfdVxeCSm",
  "key15": "47THEPP8NJdxnhikwkB87XP7o9iXTz2GHvtAq9Swh4yJjk8oJowYfEuG7BjSs4GqXi6GYzEmKr8VAYHdr623WrhH",
  "key16": "2VhQTMvmiTouACyvxfB9JoEE22Bf5cMSMnwyWgqe9j8vkRdjPcUT8jEee1eXjUaeQ1T39yeufLUyN6TEi26RhMcF",
  "key17": "56bmL9E3S7DHqNgLGkYLBttwhfopsqGG3H3nodXqKdYCxKSBEqft7vA6akikSigFgZXg6XXQk9fjz8X8QTWMGPdW",
  "key18": "ZmeXTpjP3ZeWxqcDLBjZxtXGCGMhf2N7REPaFbFpzPS87K9tYkviUvtjwZXH45zrxsSehQRu1nQ88cqnegA2wUF",
  "key19": "48mm1ekXmMYfM7P6YpDb6eNTB3T2cj91j52TQiP6SwxhDaQwSVu52g9w7iQ7Q9FSRFJoeaJi1rjehMg69htC4yg5",
  "key20": "39H8H339zqz4LZxKxwvDe4LFuD4KtGPgA7WgbHSLCo5tD3AzQpjKKunafWwQQtcEcHkfYbdXKyfEyfcyTTrdKKxQ",
  "key21": "5QP5BapnFPBhhKaD4Dbdn95Bm4kkPE49kJ4n9ZDKkUcppJYAuVsLALL2yUg7ZkaaWx53tZhMnWNhdBKR1QeGnvjB",
  "key22": "2LSv2xEtQQSf6r9K1vvRHXmxJAbJg5ixLJnsKDEaVJd2g4zVoGiDb27r28PaZSQZRaTjM1WhXLXxavAn1A141p2j",
  "key23": "5rAnh23ucxRsZ1vhwzkiZxZyJC7mVQyMA817WeKRMt2VkkaXp3QphBDxX1ECk7CaVeZYofgsQ4Yxgq41hZ9YJLRG",
  "key24": "3BQGuZE7WmDynRFHQFxnig43a4DwTW21MgJGyiuBct1BAhtbnd1aRasqvz8YmsX2WuDUZgGQDB8iE8CzHxXx5ZPM",
  "key25": "4UJrKSvXzBFs4T5GurTWVYkAjXFY81Ls3hKkTsEiARrmXm25fQ4HPvHNYB9fkBffKG5ACEHKRoAVw7VxPFnYDpeG",
  "key26": "3cDsjCg93rJa6vpjU3Fit1Dq5xninpK8MdWP66yFuUJvkByivhFjsnkfEp312zYUStMvCJYZRMRaCqP2T7Mx24Q9",
  "key27": "51aAL1opB4s1mb61tqNuma3foSvUzR2JThgbWEXqkDUGN2nqhhnRdt7dxvQRwEKxWTHXB1rWZHw2kuLZQ2Tx56U1",
  "key28": "BMFotwqkHMMFXLvmM4roWbdiksu7hnxg4z448xwVBr27T8PZpk1Kfi25fL5TCyNA4KCgmURrXg3oNmHypAXpJAV",
  "key29": "5UBvnVTkbiyREqyoq34rmDQHU5LMo7vmwNoCZvsEf8vkakXoVUe3e5DgEohQNBPXeKgri9dgDRG6h1QBTzYRPH2u",
  "key30": "5wU8iJ8JPHmmSSmBtMVutShp5ziN94idr3a2SUbnJugoSj3cmFFGMBHfPVUWKdcuUy72vXUGHfU8jcYEzTkiWBVp",
  "key31": "3SqzhAdeQQ2tBRtXmAerdVta7cUJ33SWZ1c7jncbUHSHDdSwDgyvaEXRQQjgP9Lk6hzHnhqaehThHtoMR9bEG38k",
  "key32": "42UGg55dEdj9rYEmJyWKPcQM9W4P2vZKpjE3pDvcUeSG2gbw5ELHsP6hJiYz8WnjjE9q7uadZPjk3FFFypmo46L8",
  "key33": "Mhs8J2voyqJXbSgzffhuRGRKvWkGij2dAxFPxM42EJePCCNPUviEXxAzyRAmwUrhNqUzA2ek8ZgNH6uikyBwffv",
  "key34": "4ZShf3Zu4Sec7cPszn6SJgLsPKU5AqCt7YLgZxUEgBY3RvYycLdnCLiVojjj19fLShnXkjTQ24XKiLTwr4uZ7Xef",
  "key35": "2WLXPFkE24JXauYKraaP7VeqJ5DJVsQ4mmY8AFnkKX7UCpaVY1s9vk5SM4jTA6RtWZ3nEe8Zx3PvkEZXC25puz6C",
  "key36": "3H8w3qXfBz41PGM19CBf3v4kBLEk4qcJJvHqj3A8UFXyCg6SXrv7jo7xKC442Lh7ciHTkQB8TEKcSeBEJuMH825f",
  "key37": "4URE7qTLiSQyqbeQorKofrWYUN34DmgtpzUqUtMDyc6Yt31ZQAAto4ATMUcLHM7FnEmzK9kg8guyPSDU89c7HDi2",
  "key38": "4mm8eASqk1p1YgbFQsmhsB6eZw8zsFrbvK2n56KyzHLsAiF6KA5niBjG5by339QSKLWuCfUL9bjH9hC6Pma2siUK",
  "key39": "4MqwkdoTQbfyRDwAYLxipbAB7PDRagw8SjwxF4Ta55rHrxEVgk6L2ogDXfKzDxXUeAsrufaZk8hPYa6TXJrxECry",
  "key40": "5SYFfgLuGXzHAe4UnHwiJKQt98chNxKTjUKa3vNQSuKYgzcW5ci658g8BNLT61hEuV6hAHhKN6mpaoEmgxvwGUCe"
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
