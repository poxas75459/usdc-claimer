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
    "36q61uEqZYDRZLpfHg7jzvfU7T239HWA3tJx1gaswYGAaFrDxGSvgrpWXFzMnFavYakAtFJcgmkBwZwcdxHuHHpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66KcxYEyNScC8pQhv7AQbyjBRsXngG61xU5TP4Yykyv6ui2wV6y62DKYXdpEbRHYvuWrGhoLp133ShC9JbKr9mbD",
  "key1": "3QhTmpDTkzYq1hKtS4MmQo1hzKTbPuYgg7ZKMQgKDNDzQY9DQqk6GoRq1FX7hq38cJij2NBU5ZczcUobkpM5jbpK",
  "key2": "5XBijSGjewZL1pPRwobREnkh4ufwFMfwrrtWMKmHusDCDAX3ZissBrdECCn3dLuYzgqiDQ9t6ZRgdn4axkunS5nY",
  "key3": "5mUS4JDHd1tUyvSdSE7o4WTgmfhw4foHZgULCYb6Cu9T5gFgJ5hmLFexwFdm4CA9FShQQPZMLZdFf1eaKDzC5xHC",
  "key4": "5QuLjntdw9Y5bjaEsYz31R1HQYEUg2m4SStnQZ37PjnP45k8p23ZrLveZUamrCaZJ5B2LQqr3fCW6BzJLSZyapBQ",
  "key5": "kNAic53jbDqyxMRVkFasCb6gmmyUbUfjaHXeg8vK2LgZ3CZ4yoxa7e9z73b5pkbaH25hL6o7YYxMjMYSg3hvyHM",
  "key6": "dVGxNcej6txAYQH6XiVYXMCT9rSUXysXoxThfzsf1Bzd37cS3yZJMHp9MzpkoM111n5dNbZ228EL5rQoaXFX77P",
  "key7": "4WwEkXJ8aBjkFLftF5UBiU3wLSU22i6hASbzDSvBSfRxuUVHTQ9xvMcu6GXvqMJd9uNHCS888BdtDRhAoRLKb8SC",
  "key8": "39XnGFaA8maKfuhrgYPvexruSdkAJLzSK64AnfcrNWcqjcEYeboCVvHB8xXEbJfaycPpLUZYfDaGjyVcGMvWCXNu",
  "key9": "6aJr79KA7ViWBuhQkXpedRpQkXSB1BuHPEAeNunJKucD9R4nHdqAp8jsXAb6GX2sbbk8CJFDptRFijKZP56GHBa",
  "key10": "5WWBjKCedY78nTu2jjSUdGahGzuB1PkoWhB7XECiWqp7Q5QxpyjmggXtGHhRnktYZ3HGxhiAwK5WhBq3J6NJMRvs",
  "key11": "42jxhKewWQQSu2dejPUdnp4fZcLGfZojXFJdXG6uWx2jAvsDp5grjXntUDeBYCRzD4vpAUnXngqUyeRRDJDbAN9B",
  "key12": "8TyYRhHehvBSBb5vnjbMB4NJ5d78EkZEXPD91NrvqeuiiZAJ29pK1D68zHPqVSiE3o4rh2zkqCXTKzr2o3nyH7K",
  "key13": "5YunpJqZ6PNMq9FupjoyvqCtJ7EEzULAJu7aeNpQ8hWUr2xrsS4zRPJ5Hf8HZWLQxR8EDZiUby7aFx5g9Vzw9qo4",
  "key14": "5Ph3bEEqQe815CXPTqCFEnEakgJ2szhiGD2qKLAQ7sT4KAA2nSm8SdgHB3xg4fXe5qP75EmDNbqv4cjspj8mopfW",
  "key15": "V1zHxEK9NYfK6rV8mG2xNBbfsBzboVYJT8nAHZqJAFmbREzEdeKXhcVMWLiGQcsyHo7JfDxd6rAYqgu7eAL9kHD",
  "key16": "4yxSmYtHefEXzRJ29CqvSsmhjFGX1538zkdTQvnLWi6GE5NnM3RNnZFBopegN2aVLpMYXezTDsCcVXvjHot7kqBL",
  "key17": "3QwbjbeNFFzJstozWdWEwrxYAWrt7xnmb2RTVwxK7a2wr7Cjb5jvtsW43Axp4bgW8comKX47HNERouuRbKmcD6ZS",
  "key18": "2Lv7oNRgMgWMm3m7SzHzqQ58QTcbhE19KGnhZCKMhtqSDMSRGx4ZNFUXkhv5ogz7uhDyEMQ463CNxxSMxRET2fVV",
  "key19": "3LMeYh59jV4dkNdvU5DwJBTp6yhhdpZijyiZehyUUEizujmq3Bj1Feve6kfvk8RE8npcVqzUeYKLEjQhq3RLwazG",
  "key20": "3dmjkNvkzkav94ejLjwHbuKwgrD3ujDNhaC3FXfWAvHHJxYFiLxTLpaTS5ALQyAmHbMeiG8vnp2qTQ6nRjk1kDks",
  "key21": "4PFJnZ1dTKrHhdPPMXgGsZpAwkLK8f72ZGv47f86bLX5RctiQ85LkZzYFenGsgW1xXBYA6XkXKDVN8oaQD4kiK2g",
  "key22": "5SFZee48MgA7PT7cCHTnVEFmVnRwXhEWcg5AscrYmmgH2jv6Sw4pTvd72mfZzd9StmPzoEX4mTcNVqGT6x13tvAs",
  "key23": "fHd8MLbPWT258aRY9T1xGKdMsGDYv2jEac4GPoQsDCwwVWeBsZBJQ6t2HS4SgpudbCKGoVUMWXmGQjn9qLChSRt",
  "key24": "5Ls2gNbYkzouRS6mpeEyCxxKU6CoiSyVUhsvzuk4fv3KibMhHFd2cuT5kXaGVCGMdo7uCHf8YCbzKFLCxFXE5v6W",
  "key25": "M5d8gLuSwZ8zPeVttjHEhfgDxLFcaQJU3GGnNAEndAAuUbJH5JNNtdXBpKs7JXYK8tu9g1WfRRhvWpW24GmDUqM",
  "key26": "3kQqJ5aUxTy4y5HMJksjb27eXKkkchJGMRt3817hJH7DU3sqD2W4iLvLZcnBRTeHCcnJER9ihaRceDfCeTDuEQqx",
  "key27": "VzxUFFiC8U4WAB9VA3PQJvzUH7zSdSjh7k6KeSAqJsoQcoAAMrb3NDp9NHQu51nTy5iySmtkruj7miWXdiRjgoV",
  "key28": "3F4ACTiqaimZ5But8bhoEoZLPapEFPHV5tf8of9PGUV7acR6ArX5oUHyitPZG1Huc4qmKmNTwTZzwzyReiqNWX7Q",
  "key29": "cQiRUb3yh3m18jzmpHe2XG2Qnd39a6JfAvMxV3Xbvzk3zZVjFt3hppBgP7VY56vZuch1bSdDCE2LqdvnvVqxA7E",
  "key30": "4bPaJ3eG1E8qYwEPHhWz3hYtGZhkYnVSARN4xM8vgMSma1KjJ4KeYLmZ4T5WrRGDDZbctJoTvz2p9WP1eASsmoCF",
  "key31": "4GHBm73mMdVRZmdDtMGmipzQY8eeiU7BC2pBz459nQDsfKMm7AJufGbumsLy2pg2DseXvSRmLDoPGwAnfeBu94Ld",
  "key32": "5zDBWELPnbaXWXTjKiUA1QcKviJAhUvzYqtUpLy4w9A3UzFusYANiGe7eewWZZuYoo3WVmrKDcJFqgXNZHtiyYBh",
  "key33": "zgfBPZ2KuBCeyW3U1v9Hfm9gB2HfACQUcYaTP6vtQXPVP9U7nDzWo7hbtP9BmhhCtTQpyWa6PNtjUtaeqB1wNsn",
  "key34": "41xjnWKruDB9CUkjtzLL9c8rTz8EBFqnXfVbCafo6ACGq6uSFLJTikMFbusu5guyyGw9UHDeGLGBmBH64zaAy9hz",
  "key35": "45t9DMzZaXFGcSpYuZxwwFRxhTGMQ71jCUoHA8rL5cLVVWoojte7aRTkF3dM37bm7Z55HYxLZVYYS7iCaiQcJthb",
  "key36": "bq3zo128sEWyHwaAevtTRm1pNxAfqrRbG1atwqVpRwRv8j5etinz8dnoXuo123MnTeybnfGeJQMgENNGEK7tN5c",
  "key37": "39bhJKDc695UL1xQqqqwFqR4r9xSGpHoeURtV1zmGER9xhbAMNcxsNQXjqCLoxYGjykwLDpbHuG1FngWdobq41e7",
  "key38": "3TxPpuR1MW2fLob3s6as92tFJ5syMiKEQLDKWzqcnpokLG9U6TpcDx7EQs9hdCgY3EVa7Y4VanWGAvknZeQtkvLv",
  "key39": "5PcyoG5AtZoBHkDgWNAn3UUwLGb7KH2ZMeDHgKxzjyVMPi6Mkozn84CBGPT8A4DQ5hcpvEFuGSdqFRavm4AxpZY9"
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
