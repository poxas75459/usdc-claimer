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
    "kq8AAVDTSe2286CEmyXYYCC3Qwhz2sJ9A5QcL1PmJNa46CWtgt3eHYUiU5S4yhGkv5JEi9ps3tLGtP3994YVUkc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UaeNuDeHoH5KHmBmE6SQp13hcSL8qVFUxx9NzQcVuhjZdbyNgBLkp4UC9aehJE2zxQ3GcXoffvHdLD2L4iuovgy",
  "key1": "eWBTovKSNShqcjcxepGyLvZNokD8qhZFj9QPrt2ZCHE8bgZMnbfpRndPXZ6ST4dNzr9hgecRKj1AnvsjSSdpCdK",
  "key2": "3JkRBuWtxGE2MDoznjhwRYRhBmAPgN7UhhpsattjJWpGhrS72dZzxbMGXZmUgtkFTfDrRCdqhzwWHV1Qb338nvd5",
  "key3": "3X6H2CPzYhYoveJ99CoJTjYP4u4z7mN1cuheMQwQseFMB4MhSm7KgjRV4mNzQ91ZT8JmJPJLmTj2YPN8UzKqH3Nm",
  "key4": "5YJp5qr5nD2V4kRW4ofP2fEJxWrbEggUxDLhDnPziA9rqzrK48UtP5iYKEbe5VmP8PGmwcG1CMS7P37gG3Bje8RG",
  "key5": "2GExC8Tz5GNuDeAH47F3ci1DBAxCWnMbiFwuS3aay5jum9PfKvzNT7h77rh9HAaSU5socUvbScKhQB8Ti1NUWu3E",
  "key6": "x3knaQ6vy4gKxT8VWHcYnQt58tFfXAr9htrPX5KjMstZAtKY7Jr2mZRuFS8ZxB3uRzmkiu2WCCpSi9CMkaqwHKQ",
  "key7": "3Jwj1PV664Dj3YyhewsHsnc4EKeaVioHJBD4guTK5gKEEShYp3A82fq7RpaCkYG9vgKqkPVZUD1q95uiNdCivwS",
  "key8": "2avZr2pU96ZwBNZgdf324xoSscVRNy6LhzX8vFWmUSJS8GkKydJjkEk1FqeJbzUrhBRYd9T7Qp1puvzdmFedKqGQ",
  "key9": "SwxzdpT54besEemadEr3RY2WUZGNZYqHvdaorE39AyB3VcrLfS8sGLLQnUcQiewUTXiUp4ZuWzVeXuhJsdwqxir",
  "key10": "2rEx1pjEMYXxjttbfHfUwqXQKx7fDuAyWmHjhn3uQCytSnUdTFTbASTvVfYfof85kwBe96cmnUnL9GRFsCAcu7pr",
  "key11": "4qxWk1Z9QLMsdaHPVHmYf3bYcUW1oZeWkHfFZxumTrwfvAJ5QLTbECpq6b34QZehua9crYrWKNzq5GURFFVqhBcf",
  "key12": "54AnTZJEh4VwqSdfewLR4SBmwWbRT8eKX27qbFeE17w5EZyYf8eCbQwKR8etPirzd9Lx8bKvDhSzyZVHpvCxA1CE",
  "key13": "5Hn3PPoSQQEVzVniT8xqjniFtZ6qLrjLvFMdcKSs3DPrU1UEf7m7WS7CMDLRwNhzxwoANtMC44u9xTbKipiBbU8m",
  "key14": "2hPpgDU5EerhroQ3LG8mguEgwTq4wCaPV8S33mLY6XnjajXuv32umCzHGTss3xDiCaWUeHhjJC1WdqQ4hhMFNERT",
  "key15": "2pqdoZjW9v9twekW5ihpzMMoWmEHktD987bBtQCfrUYsCcq2dH7x7ADhnN6PDcxoS8MBTCuHJvi5kEQZSKioowHk",
  "key16": "4CX6gBG2W42Vg6D9WQBoHdfR45iNpiQ4YbwZ4WipqEjtQFNngxqLNKkHJiE2NohSJcyLjDUR4UQeoPoVyk9EFhdd",
  "key17": "p1CgUz6zwFY4MCRVwXSoqQaSThUecsDLXCNAWBogJ3Gq48Hua8Vnq63FqQrVc51J7Xi7SkWYewkPDN4Hj3seDdz",
  "key18": "BFStbMTvmrpJwzbBdGXo67dwXn975tAa12DKsjpkAx6qBfjAHUcZF26DomJK8fDaFCMi7pVguJJrGGZWXWowLg5",
  "key19": "GskStCacpXfChT4M3ECAFtCxzGLQ6aiNDwCjNa8LsfXVJ8Xw4SHVGXGRm2eJ1gwVG5ASw3QNtHYarFti4BNULt9",
  "key20": "4Tpp1QhtNPh31hRsKpuwmCR5444AAzAJGioH7QawBY2J8C1NFkUkxm5Mih1qy6nWb8pVAi1GF2Tb4aBv96mwm6Xo",
  "key21": "3fnotw6CE8vVTiRefnMcsUtsphCvDJBhiZexfaqKkF4gbRFs2XzVv7q8BraUKVp3T7aQGZDGm4KqEKCs8UHL8Jmq",
  "key22": "Pssy7YAGqEjpiiiPbV527yTCC14po4fWCaom8A9fT6yT6dVScnbV4uP8uemu8KaGrZmDjeNUSyrxafSCgPofAND",
  "key23": "3SKmF4sEAJUaAmVodUB8REXueCp2P1hYfri78Y56qKPoUnzEgGL4zGGv4TmBvy7XEezdoCLasyUYA5XwZDUWGDHJ",
  "key24": "5djjqSAVkULY8fEGht9QfNEE2cGjBCgMgFhaX6zQBBWayoikoh87R6xYAtVeKEG7ZFAX8tiY35YmCAZr8iPkpRE3",
  "key25": "46TuMxrSvYXGWkHYXBq9V8MAEHM9viTxiSnSXds5rRqnqv1GmgJseTfaGiWYMfcEUDzPRduxWqMRxaSz5CdPfYga",
  "key26": "3RPLQVc9VnXwnixnq9GMnz4LYHo6mppPn6fUwtcokKuaB98iVDzioriHuu6amrRtrMZRdEqAwVqZuE4zrnyg1jvf",
  "key27": "eXFBJYUVKA4w9YTpH8pvaGHQ17Ni9jCdQrjChDwip3T6fLCrcr9pyGMBib5txpgctTN5iJzB5BxwGBtRb3QVJpv",
  "key28": "4vo21gGGyq6zqgQK4gCxyX9mhfjubD4HYA3fzXH8WEi7yeKT8kqojuqpDervFUMp5bnzrA8B9TXAshnJnwKhfg63",
  "key29": "2WDBvQ136QEf9vJThz2m2iEH6jNQHtgaBoa4jhKM9ahscvR3v7Gg1fAmVmbbTGvuLZav3kyMARYbsBKeAf781Tqe",
  "key30": "qaGeHG4QcgTHbr7n2xVW1poCtDJwgcskBh3Kzyphg57Lyxpa5tbtT6EvZ3YrQRGhg4ZKZ4napzPEXHLZwQZK1Hy",
  "key31": "2afaRehKJYhEAdHWQ88TDDMwUoC79K4RgHz5PcbM5A6KdTV5j46PZvwXc2p952g7T87AmiX9M8DLVPw3WsQBjuie",
  "key32": "cNrN1rJaFW114x1KAknToL18WiwKX1aS1Q5fXjJtiR71gXMsBVC3hJYMX5Qif6YYna8ywS6Zu6g8AywB1EXanFh",
  "key33": "2vs96gwhsYpkhioPX1JHvM6br9YmiB8iimbZ5NMu141xkh37GN6pGUKPoUedRGS5rutyt2Zwo12KvJJmLXRwxqFu",
  "key34": "413TrneBCH2R57RXV22K8wEopzF7W16whAfgnhrseUVnk1MFQ4vQCVwb5gC5HJWAVqNPkDbFki4AVJyTCjzUvN2U",
  "key35": "5C7LUiHgkrKio7rYSn7suKz5HumKF5L3zZA3jjqzzYks82R97dfdiQ5wrbRYx6pwB2hy8hH6drZRawFRofL394iB",
  "key36": "29gVQEUqsfyhFiTKyFLE4gqE3VTb7k2zCxVCCqsACSK6PhYiiAUuZbfChzTEg3Z9GYbwQJTYKLbohBUqnUN6duu3",
  "key37": "4df1zpcnjUjhtvn8J8qLdQncit2hEToPRUt8DLzSLvWFMat181KHKC6QeQnuWvykykQEpRGXBXCP2mzUrY5RFgtU",
  "key38": "DoTvAdiNekZwSTAPeLW9iWiCeoUNaeGdnNeqCu4sWBZD3Niz87enrk6AhUfPVLUrUdRrKbutVEQpKPCNXe8ACij",
  "key39": "4oTsAEkP6w64TP9A3knsDKu5JwD5xTm51b5gwXA5V9Hc1RycmCM6Ad1UpW1ynq2mwdZUGptZa37qpjYZwFHaH3hM",
  "key40": "5UqMuH2UPifyxP9pLiZHKg8fMEFwBJkEsnN23t8BrFqFqon3LJQSQg7AzXAXZ4zuKLPg5ZLYj4gTz5fr5TpgdGbC",
  "key41": "5dvoDP3nfowXuRg5CPpGmaACgamCQS3MM1cHiuKQBDvgJ3SF79m5YCb74LuGwYrWwaAF52Pj4bBkBKrNLpBajP2J",
  "key42": "eSqbdFwqsNAqRMWsp34YME98Tp5VF33NMVJzi4qtVe9T8t7g89XrH4whLDs2rtpHJqfZ27gKaJoRJ1iVfPdjzUu",
  "key43": "5GdiLWHGDZnVxjnPbj2L9mr5gUTdbWX1RzbxBosuyhqTBrhHzeFdDhGpFjsmsfxStLSt572Kpi887tf5JwTus4rk",
  "key44": "5VFj9gvULnoqaBiYJAMfrzcTHyB3uN1jZAAz5GvDp3XjozG1wc4Zc3eq1AupbqE3MtGPM8k4ErkL8bHgMeGkJUJ5",
  "key45": "5uZL7gmDn2SWxLPzeeywwbBU86V9XJH4o4oefwv2saoW4J5p2zGbpT9Hs8BNeRkBaJbgsPAHSwCMpWnWDiUQpaz1",
  "key46": "2KgvCsLNiwsyw4Wa8EFgWGKUpJcmZkBQERkFNydTgwhCLpExFaybbaPbeDMnxTqQK7Q2SSa8NGFcFcoxRsWj9Fp1",
  "key47": "2J8woQ4NdJeUMiNRviv2Bc7ZtieSU1ysHFnxwEhN6oHJzuGQbGTo8ZmRpu8WZzis6eHKsuNG4epiS6sUz9mS6i27",
  "key48": "3NAEsUtN8FN91fTr8dh7g1joVo9Tx6VAWNqwQqoo7xhJY9TLwwcGadqgiBhkYtcMsMKMvRK8Q2pvT6bi4kNqtduz",
  "key49": "2w1HxyzdRSS2VTXrskjCHPzYCQCBv4EFumtKTJvYUULQdAyJ26r5C6C7NfARTthArcgMtN46STwk3ov5oFPyx5FX"
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
