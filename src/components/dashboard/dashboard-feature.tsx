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
    "64FnCM5pTGNmeDYAy7Ff6xfQe847VqS3zgkdoYYoP5pZ5gmXHckZiijY6E8Yt5B81fj1AR6tvejNDwqpaQXXoFAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tY9chKAytF4mDXpgiyaZyJuZH6YaGRqFEncpf1UA33EZd5ij8E47SRk93H15HgxfJDW8K1AMAXkgX3YfhmdsLjd",
  "key1": "21FGrC6YzYgQ9tknzkL7KGRtZPwVGAWge8fvRz2CfTWno5YHZm82dsjHoyBKFSskvg5FxL4uUKPaGhpwGB6pEZ7y",
  "key2": "3bZ1tCw9CgXsfUJoqKUw1fKvs4r13siFFP4WcwFt9s1nFehY7HWuJ8drQDK5zMfJvenrE6uiTuvLXdQ27beepvBA",
  "key3": "bv1RTKJnMZb9xRRnRtcDVr8igmC63gpD6zwsYTEP7hje6fcnKx6uHMsA5JuE6ccCutxpe47ZK4vjNLCvYTp6daE",
  "key4": "2uUE4cotQh53NMgmapG1P7ongHQSaZmzCrX5DUf7iPGbGXY1RWbmW4LkxM71yNncePweDHywHjiwFqruaDiydJvz",
  "key5": "4cvVvSR9D7S4LhDGPegq9XVeg1P5XKjCv6Jhy5VDrp48RXR12KUMieViM2sLV6Swk2wiDFFWwzftj4fhg9zSL8u2",
  "key6": "3zSja2Dq4haEjtfGJuzE5XiNNQsqmq7T9eiDSyGAvhrxXGh6Fe53TzUB15bfXkYgypiDEuNuwnMLh9ZMJH1LjGUG",
  "key7": "4Gs2NcBZn9PBwiFqG4mKVyR7aHD35bg7tAbMChxWcdJKVKCxW4PZF1DMpkuYrGqGmsmtMQtT4M3pYZaXmjCZctMB",
  "key8": "4UJiTxshuUW9uJkTo9kTM4SaBatqmGyRSbUrDdNjFWZQo8snMiLAWCpJ8A2V9tBoFpP9rwkx9AfKjgAFeCNiMtAj",
  "key9": "5GeUUPgBY4JGcGcGQB74ZCWXM584itiukmAMexozYXUvEMzd2ioa3iw4hfiVcHbFGEi4fyBQy37v9ofpm6oJv8mp",
  "key10": "3KmarCY2udwpaSfQcu7weue2ZP1mEXiTExJLyUd2i8AcgmoTKKvdaShYYnwKbRFNqvUAEdgvpmfE5rDHy2HGDgru",
  "key11": "642BL49QSmqkuXLPQU4rjR7mpr2EYsPAypK3iTiW9hZiRpGMBxds1vcUpNQQpcKfJkzCcfDXzGCBjnD3avgP9f48",
  "key12": "3te9mLE9tFgYzDs29Ab5d6EqhF5SNJs5SESPJtBLaJjHotDrFckm1xUfTHkQab6pgnfvib7sjqSG9cCw7DHVr4G",
  "key13": "2xJkcDppzA3qZomQrdys2ZVgh6fKYtakVvwRPQxC6AFnEGF1TGRSCM7Vuf9r7xY2F17iN9qMy2M1Ym4B9JvPRqQm",
  "key14": "3dDjVMSLE9tkfnHTqP66wt1BEp7mba27u8sotn8VFzuWSiZCHXzbehHqU2FnQNZsugM1U7UmheZXyujK2PXi1PRv",
  "key15": "2de6K22S7zoNzHCY3NfkduLNacvnhrd16M1b8NCucgUYsFGLKEj7nKdaMkjiFh21W7WA5KESfn3KmQ5AHMCzvq4J",
  "key16": "wZhzBJQBHQJuqN9aV7PrbeYYqw7JjMaEE8tapbXNWBLB2aTd66S5wJaDSWe6im57ojwAbNZsxJ6fWyKZci4au5U",
  "key17": "5PVJEe6qqwkYuwghaQjox2yJgJpgkTvBZTAuTgf5fjx17udpFuV8YnGDbyBQHNaKDfwES3SmXyifrx2NP1erA5gs",
  "key18": "5dD5wq7aYJba17o3e8bAajQPe25mehJfbPhJBF5KgzapfjsYDQaWtJGyd2k55fzkBPRDk8WDmfy98zt53eiXjzBM",
  "key19": "xXrF5DyUkogmAqJPjSeVvtz7Z9tvsRJCpfSLbqazP7ZpiT8x8u75oF657MJGvqUsfh5jWD9xSVhfXSzRKZia86m",
  "key20": "vBDhtYKcEX9Pf9rYtQGenMiM4qSz2dVeadTxQEbqZ2pCw8NQ7ks8YfamGZ5jcuqUyyx8gqYQcKt5CRE3VGJxCaF",
  "key21": "3NWz5ddLmgzQ9r1Ukki5uEG4FHvEPAnd1VnChtR7VFrUaz4EeAiPXnZ1KgNWT7nnHjZejdkMppBTCCi1jLwEp82c",
  "key22": "5b6RD8B6NKHd3wiMQ1ZukwNG5YvArSEjoQL1SWKKHjFyGkih9wTqhtJMEcCjsquZ1gRptis6frcpqbKgHzwpJMX9",
  "key23": "DXLoPHaMiQ8Qfu6nxJhhKvUjtTMUSMjwdACNUZ36rJSUu75yVWBXfSLTPAKFv8QrASTEZzG4BqT4rx6FaeWnP8F",
  "key24": "NZ7BftuxC53pYq3S2Xup4ZhHwGGtkQNumeqyoYnKQ4rGXUuXeL4ixM9L9S8GPxDYhZPeWpHVhUkupHJUMirJFYM",
  "key25": "5wu16PRn8TFsnHExnk5F8jtKapeYdPJ8oV1SVaYspqKgeEAB1sFkh8kQJZUJem6S58w3yZoNZhsKqM5iC5uancjk",
  "key26": "2kLpUGLXNC33orWiJUD2jfQ6mp3QTSfZjDzKqntPpaiYidfCmYygrATBzMLTj7AEpogmDTQNhHagoCqTHDYM1Aat",
  "key27": "3NSyiwtTEycYR4qNdLEe3M7uPhub97WvYMuJj3D8mnPtS85fNbYNnaiG7xCrBzGgCinvAoZzM7hVrCwUhmGGXXXD",
  "key28": "23FH1UWtryCoupKUVRctVkJ6RzCM9D8HrgvJmrH6JkZ5qhgRX6YWaPmJ4XgAMetTv9g42qMAinLJgP2CGqQnsMki",
  "key29": "3J3RMGHXCiHd4hp5FspK15TdQT3HVeKtRijusw9e3CtmZcePQiaFh2BEALkPeyp9DwjyMBAC5hJuQRzBgQhpeDWc",
  "key30": "UJ9utwdBt8G5shKsj3r7XyMk8Lp6wPtvEs7dV8JNA4BYfxmToP7pLGLQGKz72iPYG1xWSLmTv9W3T4TziexFf4c",
  "key31": "4uNVT87aZPQiJLGpqfkQWpu8EjyGzanCjXBZ7v5F4JSTN1hrfuNxQXyEvH3fAH8cjEDBghssWQ3AibHXQp1vzSQS",
  "key32": "5ZzkpDG5wn8DLQoxTJmWTSiJwYhBnmRzsyJducRY8LFgDHNzGLP3cXWGMNVySpc2KBu5UziYLYJEzpH7c64FS8c3",
  "key33": "3CGhwfknuRqoSLSo8ULJcqDxEdDx8daSRtSJXG7GBY1vspzxm6jMCyS3vBNz1pyUw72y9gpG3TFH7SvDfwpiiRAK",
  "key34": "CrTCKZsm5eYnBci1sntTzuRam1yePxKuTijpM7Fm896quiBLhLRapJQukBWzFA7r6SPGQ6yBH9ELjaKomKL8Hmz",
  "key35": "c1fbsEfwk6Ms6rLpdhXhL4mDb3uTUcu8kzYytCQWUWUCnAENjFsXhZHVh1CUhPZngCb59XDL4PZ3a67zA3P3GGF",
  "key36": "2PNFA71vm8xygVr3B1dYDKmG52SxYRtkhjaXiTRckRRayaLRped39DiatozkgCe6gi3wZBmUz15fJTP7CoWosPPJ",
  "key37": "3eZCSbs2DGdWZ56jJMr7kLADodMimGmPEHqWFUjfRCScuKarN3XS3mNeM6DS6rzdBtyTeexZGLCNqJPguqxH4yui"
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
