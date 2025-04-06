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
    "5VTVcUNHWri6SUENw8xR4mP8bSfazheMmR3DhzdpEJzbspXrvD8Gf8sCnEjA947ekR2ZTcTwf1Zbx7FNGZmhYdUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ch4mZSf6G5KEGyT2wf1StYjrsoFMch6RS9L6BMt7BJjMiPVMpDMJDnYrQZDssE2nohJcDZzjHEGqBmPuwoVNv8c",
  "key1": "82SzfXNQxVEevaVRQDMqkyxCR9VZtotLoaX6Z3wgPA8e9jRqCPNQcx6MNoqKKvskUQHWqfXS9FMjdwY3iDQpdz7",
  "key2": "8huqbdcUz7ngqukrG2z9M7UejnabJixsWpKN3bUiQneRrUr2DcmHrGrPEqbhvTnqeEc32VzhgvY6WFiEr24xxjU",
  "key3": "2iTRQhBYY7HgxuMX6QDHCgvg8A86YnPAckS9GmdWL3uCrUphds8ssu91jDgxQJZvVxVL6QuvRbndyNXiZ6gJ92RT",
  "key4": "2zb3CVBSbHzR9xxeGs11uBkpnYhKTE2z935fNUgnxpTzxcAPQ59wXJxtwq7DBegVUgSYM6TDf8SkxYcfabYYgyVX",
  "key5": "KVLEuohMFhBNUp1GPiEhaYc6xQGoQWTcziJnMwVXpVSSPn1nKfhUnbVp2y8gWN6Hp4Fg6xmTC7yE82VBMAj3DYE",
  "key6": "5vV817YeBf8fXoak4yMMw386FgmJA1rwfnAJMEhSW1cevwPgHNBv9wqKMpgcoQ8nA8rs8Go22naCvnp8tzZuv8Ci",
  "key7": "ASb46RFY8zshNZQNGgLXjGjgBR2oWqih1oCK1C9GMzzi1yqDmBz9h6NEQZYpFwAVM2i4DtvSTQgpcZLhPuCBKgS",
  "key8": "57LwMjyPSsfERDnv41wkm8cWo4KUzJNWV2rGWqWwpXv6t9uAQs3W6yjBdJnsssbdwTZqikveMVj8X2MtHHGzrZoN",
  "key9": "3JHxmyfzikFmQh7s6Yy8TLbuGhyfLQQtzSiYCD1XVdCNC8neDJ8T7663VrgrLDxfvihbazT18noWhBHzh4Jic5yJ",
  "key10": "4yxkgUhhXD4pB1uyJMwghUV5Re8tW4DJPFfT7QWrf1EEhwk9ZJ89rhc2yyvvJnaMdrsgr4TErtUA5vinRKQDxT1M",
  "key11": "5hfCyjSChG3ggnkENDyeZN6Xu34ZJSuHaWRnyaCUWCbPrXT3Q9azMbMwHF4Z7JxLdS1BUhgCHzXRfWGAauApPoEj",
  "key12": "4YLWU5axVT78iLKQV5odyeoHbmDpex2YA54QKn5mYKpRKCzQaibba1eEi5RoZJh1QCi4qcq12o423L9kyCheYnpx",
  "key13": "5PMFKmS1diEgtWLGKkjCWG3V18f5owSrJmaNXKf5EjLNkjz8ku3YK4NoFyyFSoMQwvBVWEn8yD5N7w62YrGXxTG3",
  "key14": "2i7j62N48WC5NBY3ktQX77KNKFdbgwAGVg6h4oFphHCeAi4c95zi4m9mY6AGZZGHCeFCRpbwXnPryXH2rCx7uwtW",
  "key15": "4W2gudKQMMVPyAJfyKAREKVnDyB45mXxXwkWBPK4eX5L2pNPJdfZsuqgh8mEtgH8wzudBEaPeEMouDnVNsjdSGhc",
  "key16": "KXJXgAN77ggmGUQLwsWuEP5HBPmLxc7KDzPmzDDFx9kUg2EPavwvCWHBtoRmNMdqdKUL47WoNvxNSFbZskrRAbj",
  "key17": "58xNm4ibDf5gLL5xF36ugNNLfrQguN8NJxEASjtgzG9m3d4PdrgSUMKh7eLr1dBXB2xp25aZKFDm8nWGEdVhE6SP",
  "key18": "66Gpzbo9fpn2B4azUFfuHRVbnZyu1yrwWk2msSBLyswBYVoAcMrj6W6hapA6tTndeZk57VkNjU9PgFaYkjt8ax21",
  "key19": "3b45bKPshVp3YqxSwNfGyun46hzHCJ7uLVojvUiEYEY2VkyMN2wLMm7PEgM2bs4CDGjWGkrUME3WMTkcFwkimtuA",
  "key20": "561ApGgjQyKmHveL5xRZP2ZXkZsfDdV64kPi4Hfy3FwjVJ2fgLdgzjx89YxtfpqReWCp5cmLDC8KJ38dUW9yxLko",
  "key21": "3ta2WyWTYNv1SwxKY1ykEFZcdTzHRy5Rjq6dUAne7mVkme8vvDQktL5fk2wa92JuhvxiJxLofCQNGdXQSAUoY8EP",
  "key22": "3qu65DMCA8XmejptMQ8qkcg6xvR5kRbuQpamsCJng9UtQc2vrD4BiEPRPZEozi8ZQZaUcdMux7r1CZ3yogXTcGHP",
  "key23": "3nFxsL1TpXvAG6dxVuT2w1GCbTm1HJzk4uV2e1bfVCmQYR3xGHPe3QGo8oy8h7q2o1a2Ukx3VCZLp2bVxpHBVj4m",
  "key24": "47GQ2aesXLKwCfmMxmmFnETnkt8rLxjKCodK6bRujHNn82wW2EmFqzX4SsrpruTJbjmjBHnVfGCzxLb1NpLEcAAM",
  "key25": "3JXCVuqjTMm6CfxYwsN2kNhwdLtifaTYEM7CfWb7FGCZTboKR16Lk9PXSQiPQv4ZsvZU5g4AMwKhMdnTYX63gWTJ",
  "key26": "3VDVwBNd6cBmraHjkQcYGEDvns4V2ftZezYgKWuabLEDkRLCJai5ddK5TVtG72ckjAi3jAC6mgn6yrz7BLQEfuQ7",
  "key27": "5HaH4G3wsvHDmofmrH1YZHbN61kjt8E1gRwfcvKe53YFuz8ivYus1PxFvJgnMs7ifSJdtw1tvP4i3a8CUCN1M4Wf",
  "key28": "4EkLECUDUzwoMPRmyE4q6RbsXxK5bWRNMRDirC2TXQoLDHCSNxrt7jLHPhb1sHHGQ9PgP6k9XLhM7V4c355PBY1J",
  "key29": "3FqQrLQFLsb7ewJ4P6duy3eRvKBJzsSBeKgcGLBMe8a6wFQqqZgqbLyAEjnQxL7fFfv2aoXv9x7AmCYH7VeBH3s3",
  "key30": "5KPKqA6yRhaoaCHqxbPtJ77tXjpT95s5PYhjrqx9ViEhtn7CEi52mh3o17ZwwxWUpXZcSGzHBhR83crWw48H9k1G",
  "key31": "5BkEPXNJkWNyhc7u7DTxzXoFZ6H9Hn3R5kJDiWq9NbXEB3Z7uaboZRUC5NkL2hW3xJ5icTfQ1trvtx2iLAfaVzbp",
  "key32": "DkGb5AXkT5Nz53BSjniTGrUSDZraSuC4prWq47R58M1hsDRJJHYKUvwVTqo43ayV42DvEetdmzXLcz8NPSqFZex",
  "key33": "41mJM74C2Fn4NQhPELTvDGbnrDxfrN3NfAbyEUfGuzkrADk8ofEnRCNZF3rxSDRPyFLrbjhtD1YDcDAiS67RdtVp",
  "key34": "55uGAYcMDEoxppUao7VtPWmhVc4hoKsqJTsq3CxbYdwwLY6acMMhjFBy3QRVa2MULm9GVNiHYRL13srGGhtGdcaN",
  "key35": "5jEDYaeu7a8gvRGQ1HnPeHBiJ5xHPjd8bZRHCUBeHYypLwqGEzmHPyPQouyovefSh8kDAwK6BYpievHR6mKVHt3Y",
  "key36": "5Bvbs6KFRJsjXXR488hVVgKobi3ajCM1YuKGbAPNz4gnKMU1DTTf19bFEdHpUUFKXwRUp4j4Nm1mvtR1zSARMsgr",
  "key37": "AmU2zm8zHrwGugwfZoVXEvzk6cpgX3QapwEaCdWQgV5rZqp4D7Bc2AXsCRmfHJv9rPWpz8xW4vzqJBZrauzeeYD",
  "key38": "EpRQNzFPyZYKNUAHzY7SPVQcxXC2d9dv7yBZKMn98QjbgvF5dSqb6Yiyh9X35R5HzbZTUe7F6fEwxzzDTLjjnqb",
  "key39": "y4qosNZxcYbSbCwQ6TRieN2sgf2JdE4wj2H6TFdqLjMZSto8wJni83kx2PRqb2sWVbU8aZNPwzAEh6CW2v9kvC2",
  "key40": "5eT71m4QtzGzWDK1CS7abRdjEkVyucUo25JbK6qJe18zfWxXXNTjYiBH5cfrj5bUH1zbbgaQ6d9fj9K4TKRyDmNn",
  "key41": "3c6bFgiuk9BjtMJ8GwZDto4ud72Tb9D7mPPDzp7ta2gE3oU4xfMFob55g7umViyQjrd2MVV8mNrMwmqYf6n8gEY4"
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
