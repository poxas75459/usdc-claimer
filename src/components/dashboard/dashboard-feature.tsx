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
    "39DT8v4mWd3tCtztpoV3eoSAMPxvRpcrHAoF7PZzQWoDqXFWdshN4ESQDpkssPputwUMsQr3CmA5G8nuqtrX12MA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTeXuPGhQJyUajfEN2D313keWpANbVzSsYKb8NpeUnU7ewVbGutaQXYFWtQT3HoKbUao4H36tHoncjFNhaStoGQ",
  "key1": "1nmngQwU2DBhiYbxs5X5UHYfTmLQiQdtsi1BrEehg8KmLxWcUZ3XNFFaVEFp1n6qpHcA6nTnY1o6YUYX226pH5M",
  "key2": "d5qYutGt9c9dmqFaqc2adsFo6d7DuDi9xZvNvQUy9CgCcjefAoMz3UfHo1NV4sgKnhJeTMR7UozWMTDK4Vy7iG7",
  "key3": "2AUVtzFa1BnMkTsN4r2k9WaMb5WQZ8FyAtVyHcPfVBu3eZkPgrWSxMhpNT7dDHFa5daPPZ3N2hU1oAdQLbuYCKUu",
  "key4": "31W4GJ8RSeCqqTA7Xrit9UmjvV3gqY6UPbZeDw4giig5nM3SxJ1g2ioHy15reB4R91F2xihG8oKiXNx6YNCdEhe9",
  "key5": "677N1VJnAkCsjifrsS3mZSZAMerSHfbro2ywZDQURc5Ptc1wDGToANGYksxSU2hVmAES8FNukEVqKUPv6ZoM116c",
  "key6": "TwnUayaXZYiuyQnoi4CqeW4YXJMHN9mYXvmwU8Vi4axnSoAiknWr87xUvHxRJ1VKraVtHyyPY2XDri7TonMUqwi",
  "key7": "4N9N5uvVMkUQkkw6AS2oyF2KJ5Q94mJHDkcyfBoJNuSq4ud8pUMoiUqy8tF7yRZfS4jU7MTFPB3AwdfH4fMm5L3f",
  "key8": "21yP4zsV8hHWHH2QYv6QtWbDQ4nzU3Q8AHQdj9MoLdarnzDaHGsrNKZ8ZhqrpwFgKj5QYt1vkE7zvwmBpXjeMNEr",
  "key9": "43dKJRA1ewDtzJm1M88mvwyskXNswBWQVsMtbLEKpd5aFU1WS3scsY3AtcJWt9HEpVAPNkM95cUio2BFi6TZvtdF",
  "key10": "23mEUdojknGnvvw7uXFUxQ2TLrCKpLooFQpxxuWbjsufBcTKd1Ja5fG7gDz1VHxcLc2ouxaNFSPnJfBhdUQufCh2",
  "key11": "5X4CfB52zJhF2ZgXdQYgmefV8TX7NuvLTmMZD5UXX2ckqkyW626h8wyRePXBLHb44WxSDi3MauXoJKwAGXbexr8M",
  "key12": "9gdkfCKKitr5KFdhJCkvrba7Fz76mZtWGLbDSckZZA3ajvqszDNwY55DGin7oKy1oL77TxfKSyD2RdrCRnm5b5K",
  "key13": "2epHfTsDtbCxsgzwHSBRCUDf59wrBuLV7PWyKrBFjUX3U3fdZZazh3gJw4hNpatHGaNU8JCbUqV4ZUGtU1oQaPXC",
  "key14": "2DEAez3hkDbXUC1M6415Bs2HjfXSizjBHxSmf9u7KekpBkUxJMnxhvMnxhuTX8kV6UmNJfXxLa3jMEevm4BFspDh",
  "key15": "5tnQ13YaPXKDCZSathCVsfdGcaBdksEqyvVCrdhPE6HZ4wUcPTS1yy1BCKnjRCSWu9g7BDSSLS2T3jvfDSaPa6Yd",
  "key16": "4FWEm3wEB8Xv8KnV1tQza6VznSUEBRP1hz8AugRMJQcr4oaZhy9vJvTbtaRbHmfvoqxEU4iYia1xkXhzi5bYEb2Z",
  "key17": "2X3fA7Agn5wEAqf5xX2fDiXWTFoX8CyN4RQSWqbYR1squh5fqnLRLEmK4cTfhpgg8ak5gNxMzSJ1vECHDKWxDqTJ",
  "key18": "3yBWAi2hgsr7rPArhxS5xqgYTW1YsA4zxBW7NzuU1f4QS8WRmcgUTASJkrfPT2h6F2N7BcBKVRirAJUoSCZybwED",
  "key19": "51b23cYXspdP7snotAxiRUHkbaNQvWVsye2uhbHADxmdmNz33HQ89bG5vLUWWSe6YpzfFKvArCNxrjG2MQZm9LsK",
  "key20": "2gPp72uXdhvyXzmvJocww56uZi3pb2faqvLEj9fQBmR2PTtiEw6ACT2HvqRew88zMF6tN8LUo47Ghcz5Db3HMyB2",
  "key21": "3Q9dBPhRQZkwh2Nf5JgU6rkSj1ukp4ZygF3JUGiW2MVZWaHyAEufSEbvvRyup4zxpGPqYPc6GQzTp5yyyvTiAkAr",
  "key22": "5AFbcCbs2zvVfnufBGn44Ni2hmXwwZFEb3GDGc74Yje1DPj3rnXWh3g6BgJQcdu26qY1GKcjDMN89P5gpp44JzfS",
  "key23": "4Wg2qRjZDydoi5iy53YZJEZz3ajyhzo2soJvcRPL6D2nAgF2UYthNBFwVZ1ESD4WFG56u9sLEp9WBAFhvTdv2Xvg",
  "key24": "5g91ia7Lhrd3EK3sWfs8M9mH5qanTyYC7UKxv3AU1MFx1DFEfZYjHUoQWbVKwWGgt8MnS9nGxfBpwNcGmPESsTxm",
  "key25": "5kCCZqb4hCcMHA5U9EwhdXMM1cp88W6KQ38NHMKwLQmtxg8U6fhVfd6A2yjhtPHDdNKh5gDiBSvM68zwPLwQadtw",
  "key26": "3mgdGnWFuWAjZgx1Qzt1sqpqdaYLgqxgA6g2BPm2WGXmqTTMBmhKnhqdHS3gzyi4oCzSNYgtw6R3ZTWD2MwsfQaj",
  "key27": "5mLT3YNycj7KXLjNkvrveCGu3KYgV9TYxGQqer7L65b6eVGsYgAAmV8iVP9mdnSAmznijn4syHuK65fDXojqmNbC",
  "key28": "4Myv57Tftr2aektzYejPQHhNpFmscUBkMGs98Mg8ANfdrCt3B8GqQdLm8v5uu5N7yeerWmkkqHkqXMZD3M5KFJVk",
  "key29": "5qvhLs7AYEUrqHTVvBWsQZ8uU5fTD4eaZafGJuu7ehGym2UK2JCa1h6y5Yqz7yukSoepaK5qiqejJXKh9dzcHXLR",
  "key30": "JakqVznaYgHSeut3nQh7wdwZnMQ9KcD4jd193edBuBdqHE32NcwbYYVpYYH5PvLRcjWjtdgy1LRzmtxah4JRHGN",
  "key31": "4szPeowfDfA6kGAQXbkYsZJX7HkFLuuewgfrMaQ2rHsybf2zSka1qtz4aN2TUCXxP9a6Ss2C5fwjefTZVJbawS6S",
  "key32": "5Rhjhds4tvP5dkNSYCrAVQ3LBQvYzpoh5Pgy9kDGbeVUFJkEjWEGGhYpTbZ4y9HHKCCCRN9CksCx41T2HK9GhupQ",
  "key33": "4nTU42G5NdD7JUmJAgQ5qt1dziZ1R1iShwPCFQPN6nHuLbujaa7HbepRRzGyi6qTrqVKMnnhA2u2Pg2Zv9xNb3HX",
  "key34": "53hum93nfp2ciFVqvEwi5TZZCBcS8EU3E49df87HnV3TcQe33YTqcEmJKoydQrnjN1F3NsUAxKY6auzD79FFAKsc",
  "key35": "3PEqsGAotAZKEQW98QmNc7wzrLK2VyAd6GJdWFF4xqMH9RjopMzwR3pNh5T513nbk9K52FsbgKDgDnuGZdTcSbyw",
  "key36": "uEd2juWbMoitLGqzhiuxjoxH5rFdxSzXKqAYDWzBcWEtx3VRhiK28HmCdSEavnRmq56CMeKKZEHsmaYA5W3x5Hg",
  "key37": "5SrqLZZrV9t8HJyA9BK4cWyWzP4Z4FawyG1s2uv9qFfYmi63RyohEw5PAxsUmqFsuVSK7vKWGMeqadoDqYPgn363",
  "key38": "KRqqvkpY85gQmejS6FjJR7dccmAXBaHkpNrYZ2ju5RLUNF5KeGWiHbh8EWFYLsFdtCWM9UNSuyfsbF3xZfKpdRa",
  "key39": "2EVSKNEt1Gon4XQj5oNYH9vgWsNNs7NKNn3fFvEjnUtjjdG8DLXH6JS2SGvLYwozHXHCEFdhawDWqi3WDNvcnFHd",
  "key40": "3xfyMogBDC2WezfHZvBkXhe5YTLhJW1uXcJa7Fpc2owCSdNKHsginHKwdweJ7ViiPD6nMdS4HoZgbfZga95PmwyL",
  "key41": "4gocjXMrv8nHZoXyeLDjtRna3mzFqZkhduxnM9BgJBEW5DCaFcN8UEfzGYRJxheSYbT48PQDe5AC2DdQ9cba25U",
  "key42": "4fKymJ2oPZptbmrmSAFgD8YzL8Bs5Ss1Ja31ur2aVvMH8nZb1PwJa99ukHgnSePUDYDyFpzQMNiyczPHWyr5uTfs",
  "key43": "5eLH5Jqsy7x8hgmVfN79SKPZqJS3MJaHiEcChgNaA3j8vcYhE2faQFbZXCn256Y7vVmn1F7n6uFjzuEot7Fg6LPR",
  "key44": "5rdPg7j6KRrPmQb3vuERrdRbDvUm1ptXXAULNMijWh6trVDx3zXaW7LUdqoWCqyxpekArHttxpMxKwczTcb55CNq",
  "key45": "4g7JLyWowEMW7CyJMSNMB2g7jDKTNzePKNcENnFhj5KTv1VgPXzV3EfjPU2zhZjnKdPzYsXMjU1C3ijiDfRzXJ9H",
  "key46": "aecoCLE6AdkGjhBtEj5CFXS49qBR7PRBZgYG6FFtfr2EbgLCtHq1bGMq4Jbw8BqCBmGPswWUz4DaEjFtZYy3qBN",
  "key47": "4rS1wo4usKP6VPWDGZZap4Hz4dQ84TQKEBAHNucLwZArQaxAhFCynTQkD25UBtV4yWLkqWtwDbcvUopE6yPhu8hC",
  "key48": "fGeZintiEsUfosXipdRwLe41ug85D7gFXCtZkzMy3posSGZzh69xqoE1mEaqMP9uHEWGy8QdUc3xxsnSFEP4x3D"
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
