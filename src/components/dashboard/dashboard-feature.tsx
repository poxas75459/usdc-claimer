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
    "mHtdrKuBbDEcG1KcjpHrdsVj9eT1NuYw6VwZ19ZUnNNiLQ9VUJG1DcQYadniWcWBhCEQQtNgdHEKL5Nhe15stbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnHQ9FoNoTmkVmdp3Jw59Gqzwxh5sUaPjTfZLCsYvV8sC8jmZ1ZBwjpLx5XW63AYVBLgyasDc35zWPZpcwKtkVk",
  "key1": "5UXVDZZovHpSLN6GWXTnLrptWSj5ugz569G7G6jibyUoC3JrSPNfqM7gzJmzMDj7PgoQgokKs7R8dej6pByLPzEr",
  "key2": "4qerdFAzSsX3cEcvZ4oMwq8jFSxq33UdmHhh1fme6etADnPtMWkQ86BmyPYdmRfUrYnZQ93dqWiTEmFrq2i98zqE",
  "key3": "2dBVtRiECXySxRHJKaN8Gtt2fMtfqVUBb1YZzb1WP6xysNjxmoSnDWdrsKBY91tJGmKSzS55GUFnFYZ6usVNgqRW",
  "key4": "3axZgf7BCwDVEaHEqP97spzCo7fBdAsNqPkm14EhpLGiRQmH6jktuCx4pL1p1H9y8GDH7eoeKGxrVbWubGe4Yt3g",
  "key5": "4SB7oVNtC88BoC8E32vnoVCftpjuTLSCGYj7fnxwDPcM5iLE8hTXTpyJ4PVmjuUyACFJCfn1QEwuVXhUrA4r83ae",
  "key6": "2Mf62kmV6pDHkhF5gY6XAHBbwAQjx7iM7qu47jfrPzMCZXVk56FpxdzgSXYJec9zbqnV8kjyWuVhRHV8F3D8YiUQ",
  "key7": "rDjKNGE9PrcYysEw2GiiVMeYrzK5PnaKHHE5kfHGyzsZE8AxZnWxqF34AtyRJUX8QBh9wx3Sr9HyPU6cySp3mi4",
  "key8": "4sDBJ6NA6mVaM6MWXLcEXBwk2QAHHcFhuuhkjiPdyt74NbTW1yZowbjwX7U6Tdt2yDfHGYgnvpjP8snWF7sHePZ9",
  "key9": "2EhRHmeeNKMPjRCxcMK5F7eYKB3EHnJisZJ1JBKdRCgcc7byxnnntVA5apqbjsWM1iXtbAhY5uC1LzFBBpeuzSeP",
  "key10": "4PRJ1a9ZCiUAbhnkMQXAVHwEGKDf1Natv4ACgd8exEfnUb2tMFfCySnLo3CMLuywNTv8vWsP6f2YBxPWA64HXRnU",
  "key11": "3yMZ7VBj1in6aCuvhJttEfXkvaTHpThFij1LSySGfZEjGKkuXP2Jiavr6ABq1eTzCo72bqnCTDkXj3uYbTYJfbB1",
  "key12": "NX13hKKD4TPVBRMh71xVfTP9KvFQ56v2w8Uuky4G1i1DukMaa6iLmMvHVocdqQLZBCLXyQsWJRg9RtAXYxUtGyA",
  "key13": "3qq7jNDQqo6sGJAnaXoEuYYnvG9cw2CQkEcrmfT5YZnAKqoKHcMaEZFGVYU93XrwV6LWUkW2DmVYy2GWscDQyHnB",
  "key14": "2RNrV5Ujw6VjgkBwumDjBZ89suer2XG8w7g9rqVFLFTpfTnd3VaofdzfUD2ya9G1wqy9VAuHQaaSnsbKohZjk53a",
  "key15": "4pX8kgRf94xif32KwPjNBvoXT345y2Ukzw3GBPXYGP689W7YVJUpZPrpcXvBEaZpWfMpjqrFJt2X3HKp85G6DKFT",
  "key16": "4nV2TfCLYRV6rof5GZVZVwep3poPJhMYYcCq4tWhqS2f679XSPTEL2wNqJdqcBcgemypf5gm1TjdhiVDfMe1tx6m",
  "key17": "5kt2UDn674Kj926GDASnQffPcTbRVrP52QatKeLK8CrgcMRobGseNyLkudCmbpBBao6wdQLiHF7F6j5proh9h9qk",
  "key18": "66QxycvUzd7v5PFzNUsmx9b7Aw4rBeB4qDHZvDvY3QK2QKSquCGnvn82p4dHnwMaqJs38daGVUxUpMbKJLCsUFEW",
  "key19": "42CacuU8kHCTYHUKgGxGRGH8C5WWmMVtHdVpppwFQ85Rrfk7HQUZUTKZJLgReFybSvHoQRyeuuxc5hL9RgzxfM1a",
  "key20": "3MeMEKw7mU3rjveVmU3gnR3awRaJ8EK4ma6rPvPJtRkHtFv6XpH4yjeeTbgmdJTSvm579amywDPiYo8YnxWZe8Px",
  "key21": "2kWu46sPQRUNWD4PWR1TzxzE5Tb9eJKqFijNygLb7g1sfkWB7v4WQFFmdWCBwTjsvKunDUDQwcSqX38gSvAd1vqL",
  "key22": "3GRLD29e9kgfeHXHysYrVv6eWTXnDcpTCizureDniRGtwXMkcrwRzARH6XBNdV7Luju1ELPwX7RjmmMrTWzHreh2",
  "key23": "4U3sFrXB8mtmahdYhq4QgmzGa1Q2Aj4cY1YV6eeFKgmPxRzJ8r5nTZEefkCn8FynBmni9Lyk9PV5nt3Si1v5dfiY",
  "key24": "hbNKN67jwej7QC5FRNy57SGk6AmKTqyf4noTqkyMMvTMo6Xafv8VbTUeL5HMYEzXK1qnydSAGi9fDwRkXVq6xnP",
  "key25": "3rDtNadgQyhjEQqNgKeh6f6KfaUgFJGDz8cxjBxKtTXba4oTymgWksBrV9vgMjAXrMVCR1XveVA3vsSYnnCUQhnF",
  "key26": "4jGEDsj7zcX3hQLmixFg7kbKXWYieKVPs4B48xA1LVZSDKbqBTfzeRHqpWzc1ubJAMZdg4gxV9biPhcbFCVj6TKG",
  "key27": "35TwY57dTvQD5y2JJ88C7tBeizsCZZtpyZbSut6aK7TBSEFithpri4dmHrndTZrt1NPtZDzCPkGCduvaJDN82idm",
  "key28": "2A6sE5gMCQTjtn2ehjeH7hVAjSegVKzFxreHckvhLGeY5SQRwc1d9ZNvY3oMrQmCZmd7uX3S7jTrmHb9U7pZ5wE1",
  "key29": "2Bqn4DjbsNfsPRA8yLV9hi6E65CqhZA5ETxAyt72kCCWAYHjsisbS9sgoAVbuwkKjosYhqUNrTcndLQzdJpjDQxo",
  "key30": "33dTHuL4DcUMbXKbW64d74WZNVoMrtMrirvB3iM5MboK4TdbNt1CVZPfqgxV2G1N3SFg5BfmDz6a8LJqZxstHJpW",
  "key31": "29GdFevuakpN7cQ436fcDX55Kum8mrqaTT7oemSMz23DXDSz2jaXiJsn2ZuggVjf5rigzt7qKS7ZWLKGdWwGkVek",
  "key32": "2njrB6GYut6BiT8NSaiHMoaYUht3Ea4K7AaTPVDpzfshmxYvNyQdac8sJTBaf7iwjRqz3Muiwo8pzAA9xo86LTA3",
  "key33": "5b6HuAauEixWD2Don5P8eqMMzWfDhX2QqV48vGPpvHswehX4K4r1QHLis5t8DgpYZAeUBMcKFP1cVkN35SAx4Jda",
  "key34": "52DmqMwTTcYnyGW8m6Vz9cfLh21YkiPx9qCdteqFdoLURjWhXURKHPhuWErc67mTacdkKFbFZLCm3iNnUe8dZniX",
  "key35": "GPaKakGM9bnmHFESxC77S7M2aHLHsFq3EXpGdPZp5UKS3R6xLeoQ3eeAmVpmQNUYxqG8WuX3AaXxvL8S4J5ZDN7",
  "key36": "45pru63FVjRcgZxCqYM4wuyMKbpoZEK4dpCv7pgv4ds4uDysTDcCGzj1EL2u8DvrAgZ1tGX8LWtDYpoWUGZmnTC3",
  "key37": "rU9qFAHCJN2n6yBiFt5W7QnkWTcMcbfqUyq9Y5E69eLzrmaUXbuqLGCNFsdZ62eQKE1gnWRfvWUMcj9tNuxYvvy",
  "key38": "4VwSkp4zh5c7R4yx8jN91eA8FLt7gavSbSwFjMuzacDFKGbf3P2BSnGpVTqQfZy43WBfrokKJQyApckjFgbjBadS",
  "key39": "3pFXkUarD1ndYpwDhKQob5UNyzSkNCkYgTpR9r5oGhjVsPLn6Nm2eweTB2F8WJfHEBLuKR5miGyEuT3eTXDW2SBN",
  "key40": "42LYyxx9dqPgqCMRYq2VdFF3XHoFhkEqeFzRi6tXxfzL1d9N5fppK7pMiSb8H52Xngtg9AdG2xtBFaEm9uzHQvKr",
  "key41": "3bfFWhKiDJL43SKahLKhLorKfwuMHnd4KJeKdgJbiF8yiwNJ7vssCibUgU3zuWK2CVvDbcA6Gn7eDf3BrBQWxxAy",
  "key42": "ejb8X5tWLhC8bXp183Y8MGQ6ZQ27c1289fHm2fBMxfzbP4cwfruXNX8XSm9EaDuCLJrdXPxsoa1UUcMpFc6MpDN",
  "key43": "5SUQ6w22eKaSmapuZPs9aarS8hwaqanfG5hbRoZ8GB3DozwickaXicF62YKPr2qBPRs6tSXc27EWTWvkkM3Ubi2s",
  "key44": "26B1VKWcwJeQ41LqKcarmAcCXrJpqf9qEKjLdQghY2RahkCNzgzy3FHBaWPce3CtvDMVMMsdQdb42saGmKxSjXPP"
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
