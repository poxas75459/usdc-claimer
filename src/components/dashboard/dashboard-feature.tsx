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
    "3hJ5MkTEBZid3zMWKFomZX3umHWEzHRtBMC3DGfL7JhgBmMMSimcDHbYbrpjQXhvinEFnGncoxvMZuosJxHG88dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qj2xcCKX3PKHaikYrEMr9vQrciuQY3JW3xsCGvWQJJPpgGLXSouiPru131SttRU1qwSwNF1U9oDQLhh3RZQz7sW",
  "key1": "5qELmNbC3Z2CuyRRgGwZv8fE1EKHqhFJ144foFVhoGkoEvYgzFBS2PMqir3e8S3KFK9tW2yNZcWLkuA6ceQrj52x",
  "key2": "P6z1qxF2YABsKyLizyNE5W3wZQSZjcchkjBAcAoQ5q6xHb6jadYbCnkfSwEB1bgKJ5EHdDmjfEg8tjy5DPpfc9W",
  "key3": "46ggRPP21aCqRjZvB3HUdv1akpXWQqXwbTra9bqQavWLN3cCbh6qMEG2vvx7vG9DefNKKTFi3q7wDhWNaMK2fbCc",
  "key4": "5YzRMf89bjTW1718gW4hPE34seKHGQKAJpBopYBQSQxGew6y1KMuP28Jv6v74ZWExbJvHQdL8M5UeMrbMRvN7cgG",
  "key5": "2ggKp5TgEgpThgSjwBQJWNi4F5tLn9Rfu6PiFYdNAzuUL6e2U1RxvGisaR8N75hETb2bBoiQGKdr9Gtw9kW3r3kp",
  "key6": "4ZiYk9rrRNq8bqoqR166jq78gvWmhWLGTUtpLRuHQzyax9PcCrhhdcemXGa1grYPDjUR7MF3mMvwQAsodsnZYMMC",
  "key7": "43pWmkN9mtxiD45AoXys4zuNmy8xcXrpXaedqv74VfpDoHw5j9YD8pAGGpirvHUSySmfSdkz3oEMbdxuWZqzFBBG",
  "key8": "44PY4EWoq4vcaTBedJdACHhVMoLiPv4fTJNzqG9gSjK3jECMkMiU6voqfpToiSkPD5TGD4xHHs6PYvzocavSyGYq",
  "key9": "3ViisABJHo3NPPGj43rhM8tMZeJPrhVZzS11LhEMEXFhU2pMdnzSWSbetMrQKvjGd2LZkuuWkCMJiKGWUFfij43L",
  "key10": "3ZXh1ptp9qqCZc1vfCiDB34TuAJZV3uQP2LSVDy8ocpAVhvTTRRtafzYUmnbtcdwzD87tV5FpFQBzznrd2YMcEeb",
  "key11": "4DJVUJH8CicJFnhVAEnmfBrMftYb8qtZMHySbAqEotKaAgic38qnFzKUzHSxA3GRBmgrT3sNprM6jAGo8rq8DrXv",
  "key12": "66AdvikjaUTCf8VAEDf1muBbcokzr4zpdH9CBqNpQiPG3SGLUnUg7ukBrGo2W8ycApjZpBgimp2exw4KyZpGkHJ4",
  "key13": "pJGT3UBBghPx39WgB16LUYws5mfUWe4mqCFG26aLoFQ3buvrRD1UGTqUcvoAhsPPTdL8tvHeGiwJHjGK4bknz89",
  "key14": "3F23x53htgkqYXSjZAapDLjBY9wwnnazi2V3JXiQBdU9XyANS9VDwZKbH3smNaVHKkmRKA6YvDvxeZCp1aJroh6F",
  "key15": "2yCBwtRrxP1JDkeBiKH95c6F2uR6wK2NBAGPmGhJPbz9oZVPVi5Qr4RbnegFaZCNvG1jY4HA3sbP4Wh9Btiwi2yP",
  "key16": "2uQz5vj4HYTmD7m6xZS2UiwcmiNtQZzEnC6mDQoCUzJnRKPB21jDYXEwUNoBGUH8vSxvmJQaBBNbKM7Hv6hfcYq5",
  "key17": "3tcddnGhEUWKBKBKXMS1uv56zpNTZwL56beb94QwV7HRakKV8QWZ4qRmUL4JL8WmoioA6qVugzNtZYDSrrkgNwht",
  "key18": "4YLDbwBjkN3HrUHh5EevHJgDo6nxLSZrWgLKZwMn2CzwxZzqZZp9sezhG8gDV3ihBz5B867J8wopafK74PLX2U64",
  "key19": "HnkeSi5apTA2PKyWp4cjxDS9jP3RmoQgkRWLzZVbyGrbAVDRq97VfzQgkMvPkyfVnTjdHX97U3D9SsBpTNEMbNZ",
  "key20": "2MKFfzdf596y9YyQciA49ZG9KEWVCQCASy6HEmiSk3PcNVs9EvgZioitCZZry4v7F8SJ6KK4CzR5ARjX2JMX8yTy",
  "key21": "3vT9abHEUh3MeF2UtA8YTuypEPx64HyFGDBcmxx5ADrNx6kQmjqdbL7mYhcjTAYhFWuWJ1KfVxggoeX6S6NcfsMu",
  "key22": "osMQSdqXofNEDUnWFMYg3ToJKWJMNeC7snUC4BwCvwxnB9onQcQsx2CM5LjYD7uqe4QZKDXREizgntxXGcfCv6E",
  "key23": "2EpjdxZxEPhMPtKdDHutAp5PiSkc5uAKQkz3XfbRcDdyMGVknJV6aFTDSxF4VnGPgKazyWKptCsMh75sYC5Zns7n",
  "key24": "5f26zGzon3qHT4QQY9RTRF8aj6vXuVDi3opGY5yxP57FC9hx9sQo4F9N57655DJ7QRhW6PbF1jV7PQRgZ8VRBrsC",
  "key25": "5oPu8YaCJFnmJycfG6gJ92k69g2kJN9NrNrBCUTyNEFb5MpicfY3yAti5XdmMPdJQd7VAg3LhoDBWJ2H3uSbsVZ6",
  "key26": "4BXtPoCppWPdurT4HaSgej7KyJRSeF2o3pSBDtmmVdT9grQ7JVH7hyZD4jTW4685etSECc367jHxDk88KxxZuQrQ",
  "key27": "3HpGaPs3eYcL3i8GFPNv5fqbkJCP9zKwKBeXYR2CBWnQc2SWQX3xvthTsWwTKdkWYJ6yMbAgPjpJgJ9B1cr3SHZ",
  "key28": "5DPihhjTqdaXWDXUKRvfDecr88kpAK2vkjog9ahymY6Mc7Xsfb2LiRQqby55f8upSoE51UQfZqtKB27fkhfAnZjf",
  "key29": "4imeucegpSLP8bzpQ95THuTrMtzfi17FzkHzzqhcLhdYLr7C1RAneqEmgEBjM6xgjbLXri2uXYNrsx89nNYdt3dy",
  "key30": "2wUsFFRudWZkSBi5in4oMk9rKdBs6oCgf4xkoAMQFbQra4zh9anHNzPdUKbkXuSym93H2vWjaHiCfdRRNsJoAYY8",
  "key31": "XjAw1LAgz6EkvLcWNozj3ceVGdqDZaUPKLt4V2nTDfh9ufwDwkauEt9wNAeRCBr7ozmAdMRJ1kC9qoCGjP4evyC",
  "key32": "2nBULBiYYBBFZayQcp7WvjrScGhH4BEr8JiFkTf7wHijd6zkyE5wpFQTYUq37XvpPvyKFRTzvtfxnz1eDU9xRUSa",
  "key33": "5JCRxHDyjqDF4DkMkqM8Pj7e24cduh8gi9FXjNPZMHAQzAYggGmy1qhZF9oDNUKKxZFp4nbTxM5G3N6Hsf1wbK9g",
  "key34": "3Qi8VajjWaKdjoXis5MooFrvKy77eqt79RPZ77fbst9PpeWm75fkrNNPwWEM9rMnhV8Akbmv5KbpRY5VRRQbAuR8",
  "key35": "4PjjkWMsik9xFV1bHzu9D9iuwefzxAEDz4QcxXQapmtHDahFmETMw1fLu88gVW64ZoSdpSPN8ihcgjx5W3WS9XqZ",
  "key36": "29E5VnYUR57XE4DdHHtZyoahNtXP1w2YxAFdXgg17AVqsBrinHJNxaPmpTTmXxhBv6hn8C4DY2uURF19EwTA7FUp",
  "key37": "2B2xTbxz25X5a9FXw1LoYdYo8fahzWikE84t8SfmbqKjRPv4UPPaPEHcfJ7wFoA2arpaAdmZH5mAc4UwgBrzpnGK",
  "key38": "4874Sb9svpWjU4KcXYTwMpuKWoGEW8XkNhM1m9a2vyf7BvqRXqP58wXVDTT4v1HHXz67aUR7fZcYRpbnuNuknSZv",
  "key39": "5rxVZzKpeRTJWnuTd8dYEGZVBe1rERT5WUQEnacYLaGUaPEJxCQRn17CUbdcvq4CRuHVmao1AuphiLTvUW5pykX6",
  "key40": "dhsaSqCoa6z1q99CsNLZWKhaVtdFmEJFuMvSFtYoerDjxTEk6vqqRpFyYBX31X7zobWB9ebd2FRAkFwmuakF9Q9",
  "key41": "38TL6BEMPMG9Y84zQYyq1GXDUcYbU6BKbKe4Y9QTG3TVpyoZg3sbHT6dh69hNHtYYANNBN54cXK21nCkSwbrF8c4",
  "key42": "59NYHT3mxUvTmM6oNhG2emZdFbkkEwjyfuFgBVDGk8aUcQZsAiqrhLLZ3kqHhFGKnCbzpKxMCzAm1qNphuFoscvE",
  "key43": "2XoWzmkGYmm4kcioSiDTPZudig24tFfQVJkJc4UDs6L4aaWXppQa3dL5NazYGxHafW9xq16TCfrMC2zykAtk4HW4",
  "key44": "MKbgpiZ1vLkCACmjdQEWsoiozsDPq5HkJ5Km1XA29nAnFFMVYitn8wTMuUP3Ut58rRPyrSkVe54MEdpfuMy5VRQ",
  "key45": "H7YsH9ZF5XU3Da1UjuCo98ynb9VTeiSneafxPtrffvas72PLisRuKQJHBqPhMv2bwfwTBWNXesvEF8vUHi7vMzE",
  "key46": "4pVZcEV1Q6Qp1X7G3AY2nHJQAmX7KMDfz3u5pj6h7sJRA3TJS1M1rRpcvyJZixexut6K25nSPW3vdwXHu1LGRdKH",
  "key47": "5kE86E27uc9UW9M7WA2YYo4W53aHVg6jpabPGLjf8JUYVWvWML488J54p5winsw7XmFRBPoJviRfdKExxZtgisE9",
  "key48": "39YzyRida3pyiAqyEpEuocUFaEw9Y6Y7RDSPhNMcUKmbsgP4Vn2fx3zP9MfwsQS9DQJzvCJNuqW9Q2WdEajLX7XB",
  "key49": "3DzciyieC27zfb8Dn3nni4zRiHKpkFaBE7pyCUHAf52RZzeqbZ4uja3tuqH61sLZGGbMgFfm2KRi6n4oCK8SWmEF"
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
