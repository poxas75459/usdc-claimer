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
    "4X7rbS1kyUhBr4c7vE65k1o5M6MixfeQ9PWCsQRSvGQ2yvbqbcP3Gwj6arif6RGy81W8vDcX4Cd1SGRUgBN1crR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDke2xkTy89ZiFAMySaS4tBcWL9vpNxf8MrbB1aj9hNjqb1o6Ym4ckDHfLLrgLMs3dYTbaf7DeaKEGGi5Z7358p",
  "key1": "4y3XaQPnDCfEDp43jHkF1yW4pXdeU8icmWJHVorxFdEa3vj7GLVE4gdcp8aKUFxc85RSYDqMTVQ7hd3R5x3M3nK",
  "key2": "WT1Xz4pmTHNQ2Wcu2J2BHdbCcpVtYMDTWkQZu2NKBiTxyNDPv2eHTGiVhk4gFTgGHX35xatLt5rdcSyzMwWXczm",
  "key3": "5Lds5KGHMaNXiY5qbM2gw6a54tddPYJ6ypQsXfLQx6y93g5AZuLALz1Gd1phYQBvwzd3AtsLeCvjZER652cN6J7q",
  "key4": "4QhE39U1XBveiN6gaW7LsjPB7bHN8ZDJHNvzL9QHcLsqBY2nwJjktWjUeLq3rMinHDDkJxUnX5jgVbF1EaDTtC1E",
  "key5": "wtHPrRLWTsxvjVaVu2JjoqcE9qiyADkVYvpLXAUacTZmBV993dVs8Y6DBDopCd2JDL5nxZvFHUKh7B2NXVVGhSF",
  "key6": "3ppKAP45fjogDrentVev73JdNZJMQkMib4BUF1GUV28mxT7RQ9cHdbhs5GLpmZ9rsjxgFFpMMoSqn5yCBVBEFmg1",
  "key7": "3UnYiQ33uCijVWcX7MrQRTtcjZqLNZHEij3xm99MtEu9tMGTSPtuqom6rKEcFagrVCk7Sf18cApz66jU5cfbEK56",
  "key8": "3Rn7ebc8ufGBCN59PUvn6cPHi15iWFkg9i9Nc9L5NStyAdyzbicPtC8RNQ6Ro4y2b36H6xzcy2UmmXzikMGqpXHr",
  "key9": "3zCYpz9XUaSYuGovEAw37n1XRei3RFoiEqWxWRrpZvLYkPe63YWfp2rMYm94Hqv4YtRfqh9xHM1dzLJbZRpj3Qt1",
  "key10": "23fgkLAVwXGBRZxYgFznDyqdLF7fFf1wSpEV8ZhfXGcS5g53o2Cd2dWfJwKX8eNk65oVNWcWKJbt6d8xuu2ktfZU",
  "key11": "bVYJe7cLo5upQzt546rGSBhSaJrAGYtpsvgodUr9KgRY1yKVZSyS6UiVBgX3NVhtY6NekNZmYMjMCMZxLFwnKpJ",
  "key12": "28nkGzF94fVkdEsuzHDbumv7a2RVrc5kZFAq6qzoRX3xix8gim2Eq3RJZmTaJ9TArD5tpLa1tErnkC1Wqu4e5zYt",
  "key13": "5PE4h5eQQw2ijuKnNVbNjgG2nELmTv4VFLUUas4GTEzdkRM451JF8fxyzQmitrMYTRihvC4nXXE8uGdpWLM4TNCV",
  "key14": "5wt4CnKxC1MjV4oRkbgp5724hEvcBrnmXzKTXrnF3aNsTfDyoLauSVStHNpGeCC6Mo9xJums1aNAsJdPF5KDM2AR",
  "key15": "4MzqXESSBgkzRdpACXgWhGaHYiJKgpRfFAEpuy6EpQ6yxz7Q3zBXWf6xFH4MFxX7Cu5ygLqX89mWTjnzgeEyyftr",
  "key16": "5mK6UFUo7fQVT9PPgDF6cNxkFL8KByLmdNKe8CSKMBCJqpgzsXsBNxELxGsTU2gQcB9rxqALGPtAsHZw2hRr2uga",
  "key17": "QzN77VYtSpAdYNkP6jgV2psQwr4FJPwPfDYnaZJ2cfZB2XZHAXFGm4UDvL4pDQUrAYVB1ftdWNAw4RCa8RyYJF1",
  "key18": "5rCVYNW2ckBX7RpWrc5iD64Qi1LX5ZQbjMDaEPBeL88NtwmorE6ghBo3f8FVrCwwfXWjy4D6MZvXVhBBKZQyPxfB",
  "key19": "2AejUjZhcHYoNqz2tbrEgcs7d7PgQkqWgFCauxAAeDYqR2dof8DHhyRZPWo2S2GH6qhYEd9afqCewBYLYm6Zs3nA",
  "key20": "5rs4fpfQqY5jv4G5Hb9aAiNkPLGdfmyfmQrnN2SmUR62U6QbCVfFCjf9VyFo4CnvRcSKhR8aLtZG95Cgbt32BKDs",
  "key21": "53pVpbi1jM1xmXdKqQWTE4xKVQwkqQm7Kt1a5Dp6L263wgfn7eqLrMWQwpvA7YSJRqJUVC52c8WaKf8uAmUmikji",
  "key22": "3dYepxmDYQAb5PZqwU1v3PfqseU6baEYXn5A9wWHrbrdVQz6my8AhABSyEA5YaKKyjfzAkBk1EJbuf6Dheargkbf",
  "key23": "2QCxV5sb5f6fQvX3k8CbMmMmSNzZodTN1gWTC3Dhu5Np9YLe4qDxqdr4C9sAqWbPzVJgamAyrcbLHQvP2ZALCFUN",
  "key24": "3GtYaCKckrrihtL8zTbK7niKxNEEmBD25npBXGfiLvfm2y8wb416S7ZKYAvqEyxMPndJMJABE6QThTK6GcZsbzNa",
  "key25": "2uvKHFMCyKahx8uQ2fSjwer1EZWnuV6ynJbHmotM8nEh6ES3YJ8tPSGjKPnAA1TVpzScC1B6HWkiVHafASqQznfD",
  "key26": "3FJ7m9DSjo7iuLoycayS1RQFWSJQduBg2FETTqLtwhUBAG38trMoxxPyFBzGkxRXa4WEo7sPYhiRiiuRZupuC6X3",
  "key27": "5r2ZrpeKCVdew6KZrR7rSSzL9CSFj2KZws5Rdp9zYtbL6xNP7CF3deVfzuyLoSnJZBEu4sx2PtmwEmqZkuvq1K8j",
  "key28": "4Xng64YdGfSUfzQuJBbrbZMU4X8UbnvuaX25gRopeoyfHBwWNoMj4Qsc9gFWjuv8T6kCBfuuUR8hHLGBuLjnrX58",
  "key29": "5FDGAEF6AYZr4TNHVTbVCLjUQvZTppoQLBjBchk2oWZiUZJCU3AY7WsX2tBQzfTTYDgEhTbMRbxmDjoFPie7pCod",
  "key30": "2QP5rrAdQCXgbdeLyngFJWKhGZU9dvAtQZTSsZZn7xDMa5cLzphziugwse48S1w9wQqFQCcGqthNKGJzQdXHkxFo",
  "key31": "3U5svgKVLoKmWLKP8JgjRbDjuMm2VRs5s7tSDy2ERZ4Ux4pRjx3A2B8WXPvvaD6iWBH6ceLshi2oeduCEkaG1vtZ",
  "key32": "375dfAuM7ujaMDve9mgf7kfjrtAmsTxLNAJyU7t88F66eCHSATxULYoMBtVJ5ka3qmvx26mDpdgjJHJKJRbu8Vqc",
  "key33": "5734y1xuexm8MVukmXY7WVnym85SXnM1c6BPgtEDMKQjk3rCEz6qF6YnXmydLoi9AtU2qiW1FcBg8PEsVQC6R2f5",
  "key34": "397ecbojWHk2EdRQgGBVLf4aTR2Q58LV55dU4JVoJ2wMu7upKYvonvSMfxoWpZXGhwF6H5GwdDVgZbbwHaBoNZWz",
  "key35": "4fECJmDEBVmVjDET8kY91G7BH3UTFFPBKbyh5zhVxoNL6pQdGLsZYxCvjs3XoMC5UmWAg55AhArs37dis3cphwzs",
  "key36": "kSQSdrYsEDL5DXbRMkzkgjYir6ShyWdKSDp2thWrcbdVoTy87M9c5j5nELYxQdeJPkKfduuzCpWnuGb3NU69ia9",
  "key37": "5GWuJTRy9yJvu1tA3MCWSvfqw5VjT7FXTLjhWXRYwuzFudcsHTttYzTy7orZappRZbZcjvvdSPDQsapKSU9KGAjG",
  "key38": "3V9RkghZ8SSDdyWtiY76DgnDtRprswKi7zjj8HTSbgxnMdtGeH1dkHBjQzVpHxfvJJBZAnUKPB3iP95WfvAhnCrF",
  "key39": "67ikWFy2JVukPqccXKQJhGegxL8pavmzTuBojEw45NGZdQcVUvPTncsqBtvZdqk9ZxkFxknWh5zTZPKhCvFnJHPS",
  "key40": "5mQ4XhMpU2G7G3bfB82nBfaHGqfrdhc264CT7wPzKX7i7TnSrp67VCiP6wQxMJ7geetVj8YfGi5QmVHXRrf5HZ6t",
  "key41": "36dKSi12QbFecwHVxWy2sEHgACFJPqAk4ANmh68GgPSxC8etf85zSwiPLkawFBMkmMLiJemVRk8qUZSQft78mKLJ",
  "key42": "2kBb4TvpgYaxkHPyKndLGogBAwG58RG85YkdTcx59q2KZbo64qS2sUrMynBpnQMhK1ZFrZdEiZVTZ88M5yKZD9zG",
  "key43": "4rVEmGZquUkwW6dvEZS4fWU4L1ZT62UYkaNVxPQTnaEv5Ctjs9HwWc4BwmpcKYuKW8B4ReoTYYKSsFCPfMwvYCPF",
  "key44": "52QnAt2tTRrx98r2HKyj8d3Qfh5zFALEQDn79PG63WCYR8kVpb5k1VUZfiN9DANNHWoAKvH5PrRWtUXz9krG4kSQ",
  "key45": "KWB3Q5egGVGuzgepVR9yoRpG5u8eWrAHkUvaxongKznnCQbvd4eZNYM2iJWTkGjpXipSHJix1mRHboAoa9wdZha",
  "key46": "36YsHEJQArPSQhPcbtRzCBKfZqBfmGHC7Pw2UZegJiZ7ge1P7Wo6Rh5t5qRoqa9mJYquYJL3eRrKU3m7VDBUfins"
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
