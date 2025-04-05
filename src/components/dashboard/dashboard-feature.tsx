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
    "2mYiMiBMQ4LVw6JHDnbeL3pQ68YBDJDsMwwB4k8YBAVLLgVHbpaAau8TZa94hCwNaXsfyRUbKZdaXuJfFnmJ7aK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aMDMeL3yXtKbvzoCgeQKD6HqAe6yVStMS2DZFnL4XGkuQ3ET4wHXUU8vrhHzY2iaL1owHjax92YSm2A6v2GPtb4",
  "key1": "3hc1ZJjCoFfJWm6QMCDEiS8g8KASbkxH6sJS7SAakSW1nkN7pakwnaAcqfw6ARkzC9jCnyee315Tk2bAZbzFXm5t",
  "key2": "4pAULxsmqZ45RVLkryf6kQoGm3hqG8DYmQKiDwAFkUe7KWTCT9YesgDT6zUVjSLN2pQAF7hPauzx4uB1gmLJcJWG",
  "key3": "55mQpiHTLNTLkPdV9XnsYCUTNKFUfC8ZnSAuDeadEpJRXcSeCTQag85453kzqNhpDSE7aNyTu4gRi4LZXERVLW4s",
  "key4": "KavM2MgBdsfMLaReQ83UAW5JxmyzNenAXUW6RUctHwGx8UF8KuzgkUo9JD7QCELvf3W5XnrwRwNTfv5dCq3MftS",
  "key5": "2BvHgqM9WpiFT4XLtmJPeXRgohtFPi5H93iuVVYQsx3M5pML1WUQPy2tJzjRmcpC7DJZsahr7S6EXmWFx7UHiiN9",
  "key6": "nVkaGePZBBTVoEWsy1Q3kkr8QZpc39yuapuCbUU9udVA4ikDrrDMs42AR8jQTfjM7hDU3keYXoA8DLywWzM354K",
  "key7": "3k6vJPSFfZ67LmVdwks9H7FGJJGgVfnWGrfoi2yT9vJ5mqLMxrX859drfSpFdSRu3UXXBdgEJvfbGMcHUSjjksSb",
  "key8": "2squdaLwhsLndMZcbBGkPGTTVzD7tpCZBvyAgSPGuwPafstmbGb8XTrACf9tNXNwpxWQKiwq1kXyrMFAQBzr5WTG",
  "key9": "4e6n4LANEsh19Cq62QyURAbxJ6mRZNrZfPDLF4pzvt3ngZpsH9i6pSTvVRV3wVjxmvWwFZFGi3tHwdWnVFADwMT8",
  "key10": "4KnDen2KDUvXaP4obtG3XAs1ktv8N3jwK7nCazSjh7vsioAkoVbb4tAqmmjB17eR6HDhzMCqDoz1Pqm1soNfH57x",
  "key11": "27SuJyQxrb1GsTLu2jqCHtoYNDwwEGvmUpd34kwxc5wEgGYkfxniQ5LSgY7pzi7cbc2RMBBKmALDUAW7sNint2sJ",
  "key12": "2Tj7oKk2rJzC3upzY8JR9aYwBGXNCMq4krpUnctgXmsVEh4Z3qS4eMAJ5XL8u8HGJzQmunxRW89RsYrP1mGnAWgw",
  "key13": "Yb3bQ9UPisjpMsa9zHCjz5F715EhivCyr2faw4hRHLa25aWv2EzNHgzsuXz4kqPRGEQ6hZVLwZtwgLN5S8u8cAw",
  "key14": "2M23fkVecht97sC5cfPt6UB7tyASEBQ3TKfrivXXsA8KgFqfqmTMUCNAWpwBZed3NzM3uXjuxSSBvX7xrU1voPzF",
  "key15": "4edZ2ZWD97h3hhBFFjjHxXmcrvfTJmy85UuZdmbWCbrmSGyoFi9KnwF18tiNfv7c7MGq6gzfBAnizyVckLAw5jm3",
  "key16": "2SS2QAtiFjES9Li3QC8vZX65DytCRjut7VjHJx2SMEewukhypj9MqnfCKrvj2eDwK5dwwArmSFKPAGEmcK2qVjUw",
  "key17": "5MYuxBWqRP2hzAaRLDLyWvkqhVeuYkkAV4UwQs8P58Hn6SDMJEZcPQvoZeXyxSkcKQX6JEYBXNGqn1A3PyXjBXH3",
  "key18": "QCJruRKMin7yadw1z69dygt8CZUfofGRePKsXf12s5kbVJvnuDdSDrsLP3u125iRx9zwnn8R4RJDwXhrmiqTheX",
  "key19": "38XJKySbHbFLRANH2hvkRucDgXjWwkjhQCY2njUYifbufmcueeanCqZXhvVsc9iYmv4rDixeZCdJi3Ko4n7qKstK",
  "key20": "48fX6SpsXRVeGSvE54CLTicnRqxedyWinjDxESk3hzaoi5XGcaxTn3SPCR4BpfRhHyxp7mk9qAyajoAtEfBtT3oL",
  "key21": "4YjdA6mJUCMsUq416hLydNYwSjNWLPmsLk4NQgc64qb7xdg7vAnompdAkJwN4aqvwHyd6BrM6A4skvDnp4FLJB7X",
  "key22": "YaM73JrAxnS9Bm2LKxnUkyZAYMTKdjqRSth7tVKpufvRRXnPQaVpm4ZQnWFDTsoRTPeP5PvekMcZvTkNKb22Gcz",
  "key23": "5SZPtm7sk5TUpNoSkSXh8QK5ohWAW6Vu4EFVKAvV3f8K465WhdNcAGCovm6JRXpCMrb3FRm6vaNugkvx1WMaNzWN",
  "key24": "B9148bL4S4wY7w8jFELdJ4zpmFQyzR4gZt2ZW8XZUD2wecoWzaqe5RotS4rYWCbs8qfV3DhXf4Qg4JfYqfHnTLy",
  "key25": "BnE8Jne43nfKZDcsV4RqfPgeYomjWGytVU4YAfcgLwzoHQnUYEuKpPZbj1tFEHgQLcFGUHyxwTLwN75ujRCWhGS",
  "key26": "eJAmzvYzQjC9iA5AXD5v4wyZnk5Ad3pWVhiTVB8ZzvH5HBfFqaBXQyz2efTyhzZG1wi4xLYtgmA9KLn2UqUKfKz",
  "key27": "3QfYBrW7n28sD33iPK87rYcVTKm7qnNptkKyVAZpZJ25LheYLCDZMjn9zVdH6fFamoh6hXkCMan6F4bJua6GsrHF",
  "key28": "2rBBbuNbsA7jhRAZCnay3M8Cq46MSmKojyyzMgbuxQR6dQHGdFgi7jzEt38zTUHmHMxSxUxy3x6CuM8pKkzCeK4M",
  "key29": "2pd5h8kxhrNoy9tyB7cWAQgXGLWa8AQmx3QbU3hCBu1m7oa81f6qXTZWWJ8skjdcYCp7NDbN2yi2Qiv8kBDcUJqC",
  "key30": "4z17YVSSEm1W9W2cSFFwrNLgr2fXNsH4KPBrwk4zNGXoNdeo4m54YPwdSUwsPZyt696fYsMnb3gFcfJjoWMjGSDY",
  "key31": "2FH8DrwBUUTVrcaNhJ4CTQwbpunHcbmh5A4SDviJttNSxCNkwjX7AtMzhaYrR4SVcJrxyPyvn5q1cJwVVD5vWgm6",
  "key32": "57SE8PTwBhkGciNuYSq6PsWjviay7UnDGq9f1DAbwr87i3mS595ZWytnmycA7dgDm3SvCeBRohjbGAVt8DKomEyF",
  "key33": "58apePzkZLS9i2ogogdBdxZ3DW4LYmuNB6h8VkNYy1Q1p6c8MYd2BnEAHJY4Z3SvyPd3jeAKbqrVQ7kKrsUo8Pys",
  "key34": "3nXbDL1Cgy6dczhu6NVqa9WSmUV6ZV4AnBn5PuKHeVMKjyDYcNWEWVmXxYoitwrKETUsLt7cYayLS7kL9ZVtFNCq",
  "key35": "4MLMbt4DRVEXL13oMntSKPTmd23pRvhqKYj9QNQEkqSNKCup8A2nSaW37yW1aUxdMJBfEqhdUswWX1JC9z6m45gv",
  "key36": "4kUwTrXHbJeaNawfnQ7La7gdPE56etkFMfngHHsZmctM6ifAss2fCevZvZouStp5cHWKsdhg84Lsu9t4aiZbd4TM"
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
