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
    "4Y3VP5f4NYLyWPU9Ntc1SniSCRdiGaR7oiPFdDq4LWeQgByYHZyR3HNoJqUYF39EmHEXs8Ebd2SHpVHvg891pT6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sB2mFrnFB7E4ayPGWTrJ7CPVPVB3AE8e1TjSAktoriLamtGosKrnP88AAV2EaKc5WciAa9nY1cDWUSk7bG4fzWV",
  "key1": "2st2Ebu2h7BXDVKkspGm3V4x6xbnuHosGpX75pYyeX9zJGSY1CZNeVddEwDNUNNXXhufaASZz4oWEsGoWQ8E2WFt",
  "key2": "4bVqP4CwruhhP6kznfDvtTJCkw75ruL9qaNkq6qDPBmLQCaY8EQ4qgDpao5A1r9GPCexNcMCwcqbeyTzReCxPQ97",
  "key3": "3VAqqmpGWyyxb56ghvTt7emDRwzqNxTtf3yBep7m2uk1zMzF54YJrnNPJsTXzRFsxD3V9RZ8dVjwbE8CArGazB8S",
  "key4": "4amS5MJB4aCEkq9WBcLk8fhxsAsV66hT7NpKWtfbs6JbsYVz7pYSGYkjk61BrfXa8z7hS7kTRnhPMJKBhtZne8Uu",
  "key5": "3epDhEsZDZfiHwhMkpZwDgQg9FZxD45NKVRQDnthv1DN5bfE21FQtp5F7GaBfHbnaDoDKsFptjHLnv1txy2C3i93",
  "key6": "5TJUFTjeBVbXhcFaaGNMcSpsKLrFfVDzxirfbu9TBntDCLAjXubWC3GYBdzJ69NxqQWjWKfd4YpTJ28VkehrA521",
  "key7": "23zz1uFAp2uetLZZ1fqKKcRdBNSS2xh58yvfGbNKema99Mw93uWx7ottfWoQjTMM3bfYD9RYMVW4yMVDz6wYKzK7",
  "key8": "7bzrWeVP3brtSZFATjeQ8sncgEK9zFqaVLDd5xMfyffAiL6FEscgWB9QDzrfFUYxofHAeUhF3j75KpfFt9JawBn",
  "key9": "3VU3oUvQ2j1P75Xj1NEetNbhyhotgqu1gbXHhmTYWMFV72kBzKWb6pz4LXTJr5ZYCVV2veGxrzhYuGFtZEDMEg19",
  "key10": "2q9NqUBgrvXQesoJ7ue9QGKo3fpNDiA9rG8KmsTqCgNXiJrVLiwRYmCuvL3triRdxLBAS6H8d1WsSomhiUtp6Gwj",
  "key11": "2i6VUSSHzwcfBvgB4UWACyCjuGewzm9EkkCvLnBhmKuBURCPEJGzeZz9oCRdgQZNd5w8XGpQmzPAzgPPBu53Mwye",
  "key12": "64aHn1hZps8Y9jxWtwoZuqK7gNbKmZxL3yDCxHYRytwwxs139hKetvzcEFipXeHaPVuDcpd1c8eeqKiJ8zYjXHEL",
  "key13": "3TLxAChyZNBnD3JVKgptyvqJ5RrFF3Um9PUxpppmRxJnsBULp3JSvZqpcc1QsKNehQ5yjRDGYTkX48n3RmRzoXd1",
  "key14": "agNqKi8BqtwcafL4HV4gUDgLQY46bkqALxEysLA93ey7HUaJ8qkv8jSsQEhyen1W51F2NLtwv2pSLfexacxb7Ss",
  "key15": "NGZE4sHgiL72cNbcC3T3hZehZto1kgjx5Az7JQpRAPYc3ocp8XzD6fQjG17pPrkHPLNEjk2BmEgbY4eUztR1ByK",
  "key16": "2DuaGf3wSKcf3gse5wgLsiGvN68yTASTceNoGN6mijXPESbVE6Gu2numcVT913aDtWHVwbz32CsJ2w6ifKR7u3tP",
  "key17": "2Gkksx73mhJbafKhMViSJwewFKK6J8HAjsKJWmNL6zuz1kHxCR7vSTYd45d1wnBreKJ5bBFeL2kaYxZiseystPUy",
  "key18": "3CVeMWuB1VJ3KZ4dJk7mFSSd4GA9h3prL7HCMdkHFhjJCLP7xrSt4eUS7CnEKoUUkfdXZehpicc1ghH2nrUtmWje",
  "key19": "2oZtct7sSbfE4t6TA7D48sMnw423o56iZii6BE4ZaeBUq3FmQaCH7rGt4aKgcGFTAUxAAjphrMqzv9eVxUm9aQQG",
  "key20": "2VqrErAERSkQhzGWXDhnVzTeszwNBfpFD3qdwjo3mN5dZrUNUiXSfXXoB1RuHqLrcciNk3GsZBaLtHtAYJkjp5Kr",
  "key21": "394pq6vJD9LgUX7CfUdvbvmAnHygzwJzmtu2SWryhDFWWqFkvHZc9j2b76XBQuh4PF7vgyyaWdwanKCAuaYqakiJ",
  "key22": "5fYWMve7uETDgBMaa4jfRnPNLdcULao7q3fR5JvVGtZPf3ummbg6mHNXnTPQjEpGS2EURdEW81QRMFhLGRF7qxJv",
  "key23": "4eZLCKyoub47DYtcWs1hV9L2FkoSkjn2iLrDFHtSuDSqm7NhT8CgHQYchqdUPFgR7V58QWQFGJoRVJVrjpXcxJwi",
  "key24": "3JvbKLdzMHiDUbM73ytxfLbXCZ92YHG9U8fYS791HcnvJLD8B4UbRsPpMLjsY9u7CDs1oM1GopPmKv56LgGNSGkH",
  "key25": "5KSFNAxex27W2EX3Q7aC7DmT5gpwb3xZpVnesTV2mzo1K7EuRVkiiBBUBPGtYQzeJNksxDKxW9mg5EX6FyJzRFb3",
  "key26": "2gV6wGLhccFpHWzYx7bvKeApZLbFw2Kgtx5x61WdtrS2Diimbuc3UT7V1Jmu2qZxVyPXSQtxLhQa6cY8m1jiDwZh",
  "key27": "47ZDJYT2YWAwEbT8FabDUWToKvd9zLdXq25JtXvn8FccK9XaKNG5n7qsorXNC4ms5pLKcJ99cGJMBvxjK9zjNrR3",
  "key28": "4hEQ1NoVMonWsYXPywGLP2USY1QsZVFspU4nwo7KcBQXXLf2GFBEn5CgcAcmVCMqHCfGG1MVHDVXpqHDy7xr6BKv",
  "key29": "4yPbyj8GSPKHRXZDJSF3KwB2xuEt1AkjJ1Q7b7MPWVv3EXn9FfF1SAFTwoERatDvgEkP3qmvcpGmCjir4s41rK9h",
  "key30": "4KFfWuUqrx8zcA4QEJRxbigbtDdEp75dFofp8aBuaSNJsifDWov4nmsGws2NXJsoL7oiPN833d3KPdWLYiKCXQxr",
  "key31": "3padiRnmJd9rgakKrU7AiPUFayPTnespcskRDyKMJatXWTy9qsaNQw3na4HipPck2uQBKu3wmYLnFVH14o4SQm8Y",
  "key32": "3tztDuM9FNJrPDPv8gbWx3LvYEgmuwQGbq6ye2EgA1Zydyur5BLno38piJkYfSAZkuy4hVNmbSgZirgyKCe7CgZ1",
  "key33": "2uRu65Q1St41bofp4tRTzFMmC5XkGyTPEpAhCeR6LMf5JPrzsX9HiqvTCtjkVT9YPgvmcBMHze7fHyHYzUNjLnqS",
  "key34": "5UCcyHdf83bm49YWH6n79THLCXWQ9eAxWDjiePYAqxBZyahXLYZkHTyT5HFW3UNvg4d2XgqRP67VoeTFxLouXWR4",
  "key35": "4ZcwpgzRWD2S4PNGUdoeKmMGdPCW3Nc34Ce8LCQnY1fjRZ3pVNrQBzMi5E2VZHNDrjKoyvzz5Dwk5gdaFLMDN68D",
  "key36": "65xsTAEBN92CgVeMYLbr18vP7vjGLHP6GYaJbCHtGgsKGbaHrkMG81WZf1Qyvjtor7zDfmuJryygjcRSxnx277s3",
  "key37": "4XwDvFopVCme9as71XMipzrbbdekFr7aF263zra2xep5E3YoDjMaPyPB27iLSZmJXBeeFNKVQeGQ8fVUxTFh9mSv",
  "key38": "3W65eDMry9xWz2jGsDzoRGVewFSmAwwvuyeL7SRNPJgTnHwWbd1Dr5h1Yphn9An7m3MxTUKq9v71obQCcm4XBhDJ",
  "key39": "46rPcBk8fcFv7XpDFrD5BiobAiXA1fH2SPkMiu8unGZK5gsA18hPcKwc6WiMHz45Xip46degmYaF7hq2yRTREjoC",
  "key40": "3RkaW23CdrLgmh6DiAWrZcxaUzquEbLE7BcZ3LVSBPiW99uP9rsVHQcy4tbDRwQ2e849nhbbB7cLpwFC1XUW9KVf",
  "key41": "5aCG3uGD7TA7pjHCiDj88UWQ35CJjGZGzg8oVR4KxRBfEvHYZr42Rre9HChUZqUK48VXcG1axCcU1Ate1sdMRNWf",
  "key42": "cDcMiNXaj1d8bTb2BLkvvpZNhSJfPa1uGA6R995eY2ApdfSXxvsvPrB5cppaH6ochSgGWCFrLjJswXjmfvEUjFe",
  "key43": "2r3oXQpdxReSrRMaMcQTMKSTo6Z6HiW1xkUwX9opxVkRft7DkDFJ6j8VzEyDnGecUULtxQPTZyPrCMGByHA3AHNu",
  "key44": "231CAnEX7wCikZ8Sgyr9oVtrXdK5DgrQjj4Xb2rSqUB4K5Kxp2ykZtfx9f5vZ7aTmSigXyhCG37Y2uwB37tX3MsR",
  "key45": "2KoCiQuDcVsNpMqEE6M3e39DGL6Q15WuMFAVZfrhbeQPtqE3JM2YB6ijUPPcPxyNKMa2AgSpViiSqD18dmGgC5FR",
  "key46": "jjLpERonhPq8wawUyh93HUUAKTA5pgc2Kpct3ceht9bnNJCSv1PsBVqHWLV2wVtDdEbh81NFjRM2hHABNkJZp3D",
  "key47": "2cZs4e3yY3aZi62wn9w56wnLTCR6mBKr3fbzLd7TQALFY8FUhaCbQTFSgASQszeyVQR5ag1d7TMakQtwGb9RRRmq",
  "key48": "28jDzuK2yeQrZYDZ7pkQwWhnJRK76EELKPihBAmDJAqYBbXRq9CkXrrkqmMtqbqTH2Run7P7no3wTDuZyBMxX2Uv"
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
