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
    "4ou1pWha83KycZXD2m6KHUxHLUV7tk9VFnLtWHY4bBWXknRLQTAyJFYcHA45XKc4jhdnxeWxxdSMy63HbEfqiW7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HxkKJDbsg2NPsdPJPe8Z9aWKyrf9WjDDw98ip7DjFtqbfd2toek4XcBK2JN9iW2YWiP1fDXbANKHgutktrQKNeP",
  "key1": "3Vyaz6qnzG5pKBGM6WtLVFQ9uRh6QCKBnb85nU8EzXgvietjZCTmLKcnt5FjKc2KxyLhsnh4QAhgt2KkEfheKHi1",
  "key2": "4tXHVsvFEPz7mLAmnh7Npa6aKiMXYfEYD3dYTWxovfBfjJvTDAbCYez9d3XfbxE3UpDqDuryhUB2rXmw1qHJ9dLg",
  "key3": "3URfqEhEJHvhF6PEofuCNbB2x3EYvv3Rof1K4isZ95HTRRyUMGtoxMrmcGRRBPAHHATTeXJD1zxZuQwzEkxFGpic",
  "key4": "61f9nK6ojQgsB9hJL6dCVRawJ7nFGEqYWC7dF6dRSnFYkgdYdxaosJc2oj2ekJTtdyw3XARxSgxR4tVF55HDZXLJ",
  "key5": "WbydytJ1TcfD92YvHPNDdV3y5y1nc58jCA9VkSTdgD5FbHkVj5BJr7VZqGB82vvaojoHHQieU5SLdwWHzrVVwwy",
  "key6": "4s2rDjFhvUMCf3wnir3Zu3Mxt58VozfJwXjzWkZT6zNCU6mLbhgp9pmPZv8Ha2emSvBtx5QPEHTriKT8L9k8MTvv",
  "key7": "2f4JchBxAVrqRtYhs5hozbaqZKq4UJCQQPjKQRLPsogdcJrAzRAsNgifayffgAyqXKSjzrVVDMAo3Rg3EyXdQyoy",
  "key8": "2baBvriwdHfHosKDY6B34uqy6RTQ6n1uBKjEqSDCz8pDYdZQUK5PEUZg2gS6ZovXP1Mw3WEkLyFaPptPv1wW93PQ",
  "key9": "3jZpLFWPBoVV81X9JPe7AFHN1UfNgfVw7rBjsCv8STJpjYWw5B3TJjrJVB5VkdC21NVkwts5dAcRcBGvoc6AJXHz",
  "key10": "5DpMKntdTfT84ZKi3k2MthPkWiLZ51hpdhm1AaFd55aNyBwMm1Rrn2HoAzMxHSxztWTqEUCW1oEAVQWPzoZH6oaq",
  "key11": "u9RjEyGUpDEfgw3dgaxtCYMrTg7By9hRavX3v1ZBsNeRcYXNDpvvq5EUztxP4wbVbwnJBADMS7uaSPpWHYekYx4",
  "key12": "5q4fqdFgatdy9SQBe2DRPp9NeTJAeuscHH2Bw61Kx8xDUSmxVq3wDD6uGnctTcbkAdMnycM8KNFHbwJsUAiPVNAA",
  "key13": "54bwJcEozyxwFWk7PMDcvZsZMgzu4robiyyf43TvNNjaj97fXGv1G3gVFVPZfh5KZybYmaXxz8f7CTTYNWYFbtjb",
  "key14": "4QNdBmC8jE5ueHVSqUSurM1WJKWLM2sBLJf7on8e7Mr589TeWKse9yYwuJpY7a9taGMZf2qcbPM1ETBJS9qz1UCG",
  "key15": "3ju1mNn6Y7SRjpv6v5SqBZcFXRnn11WSkzMahaTbs6vZCrpHoUex1PPSqzqTLtmcv3LuTJU6np9pJ3weyuHV6JUH",
  "key16": "5WYYJKJrSHurAuUfaTamTHpB4z27fqheurx7mjv7j1Yy5NW37mU5mn6NNhMbYMMuPuCjGPDj2YaHP7CUtLi3dbvf",
  "key17": "4F5m4p8iyFzLTfkLhPrGf1JQii9h2hLioVsJMnFBF6nJtfJW8RspvKo3KzG8hyw2Eyt6jdxaEqGyvgk9EPPm2FQE",
  "key18": "2ymcCjaXRAB26JHbmUvk88q5HRhymW33qu7sXX8Cab3EaLJaPYPYGuMVUC9y5nZhvsgMv9Mt67PQqCnivQWw2xug",
  "key19": "38QX4qe67WrgySsge4r9n9fSbYXArPK1KxVu9XDuTxktUuf9GhXMLYwQ6BtHvxQTXJLTjK76PanYEes7SD4WoWbD",
  "key20": "NbHzkU75rzucCZZjx2coWtS3q1EgpEqigsZXRwq9V1HS3VkfyVdEGyfaeFNDtHmNe8C9XKTFHj7HDNNS4HNkZDm",
  "key21": "44VYLoKVFLZogiF64GL1ewcaQ58m8hY4j19TZeHe82KxFm8fXbVgPhmK3CKAEXARJGVfo8UCyFXaszw2Z4FJH1Q8",
  "key22": "2pUAN4RKpNQ283tVVds6PRGf6RFuW5vioBxiedK4WGua6dRzkVkD7aCPNw1DgXqQVpNFjGLSPizn3MnKh78eT24c",
  "key23": "HK7XEJkf4FcZ5GXx3AcMoLvxpPeqyPBbDqeaQUkCELtA2oCbYqMf1F5Hf2wbnwk1XSRHnReMkiKfZngpRJRw87A",
  "key24": "2Yod3pKTAvgAAwuyHQsiGF9YRX3cqBL2RdRNG8FFAkF2Ackf6zTYHKQopsziMZBR69dpL7suvTbPps1tkvvt7Rat",
  "key25": "4mg9YDsBE1rqm79pwADEdVU2grP9CZoJzhcDaXD2UnPB5bSV619F9o2yUZxhXs4k7hS5f5ZjjLHUs2kMmNt7e97b",
  "key26": "3SxztRkm6K7eX6AGrzgmNKxXiwa23aaAsAJh5YvjgUY3DqwgZhUDdqmHDTm61Tu6LXWuLbv6pZbTLDwu3sWAmhxn",
  "key27": "5T2cK7qMdpU12UJRhB34H4SfSRz6RZ1GVifqZ32gpkPnWCnwwKKPYjs3uwqhH3qzzFa5P3kGvUtjLYgmeGFT6hXt",
  "key28": "DvRTabJKjtRUsQ9ZRx6cGsDdA4vT5TdfRWq4ENPqAaLyKQEkYoT3NKW3rBppoHQ22GPBWPrJCZc1tNK2nJmKp6r",
  "key29": "2fN6jqNpqBdHZpu9Gj8HQjA49Nnm5sjUzsnCD9rrfvsMdXN4ty2AxFsg51uTtXqvRezxg1rq3vRjEwUfBWUoP5WG",
  "key30": "jk4hnR4sgmr22CX47tr1cFdvCsMfE3yRwaixa6Hv5QS7bSbdd513aae8ykAasFDPv4jJWLDRHEZKghAikZ9a2L2",
  "key31": "5Rtzje5XuMBHyR1eUwNyYzpCAEFQib5XeSQfnwb9ZkzVSifC5P27GrZoMdx5paxC9nNr6Pr4RnbkZLj8BLYzHmno",
  "key32": "3yxfpZRnY6EZVvRK1rQU7DYENsp2seFMp27nEPipaQREHrS4cZgLGxN96PnACVWkywUC7GK1jDP7t47bnYWbaKmJ",
  "key33": "4NkodM9H7EZQT8DXMwYxmEnQWwT8LKp5rjXaDKtgH9hwTTjkTvqizgQhQxKt4eb7so3KysN5P9uQACHEzyAZdgi1",
  "key34": "4dtb1NiVcKiRvZTku1WnMDa4xQAsR8nHGnAqyihvC4tP7Q87dzCtBsoAnE9hc8eXq8pCvVMhjj37gVSfrLPJzmGW",
  "key35": "64Arc5D79EWE8g3fR2qsow1QNXLmgYC3bU9tPffpFLtmQyT5S44PsCm24fRfJZyPP4QJDJ9eJ3Z7qJFuAda1A6ad",
  "key36": "Diwz5d9Sd6N6bpAti9KCUmuxXgGzsrrMHw8R6fd5qRD1xAEPFzixEVkse3jAee8iqTtxG4MBB9KkEaBxFfTYT3w",
  "key37": "5UyjGRXw3agB9UWuCnKLQQyEVjBkFiLX5RxK9bmnLqonwhNdEwL15Go71tj8NFnPfS4ZTGS9jz6KtnM81YduBYRL",
  "key38": "21AEnQdHDLLiUvT9BuKZi3orphoFT1DfHw2qLoT4eT9wCxYPyMW8hhFjjWgpVRyRP4Rq6Lx3op2UuMG9HYF4tndb",
  "key39": "4ay53vtbvs6nPeCNGDJDVzzPc7pVCo78ghgsu8htJpVp8Y6xy15AavZt3EhUJdCyvpPDNrRYwGEaQTTKBP8TePGw",
  "key40": "2EptBQqiCFv8uboY2JmNRHdHnDU4MCDXMn3QJu8XUZhbVANTebwvsuXTf9APjLPotoHzj8B3RgvYEMDuu3QtAntD",
  "key41": "4Nb4HMxp7bLXGgCxYwDVCzMUAsmmm1rCZFZRFoCoBzp2YGrmhjijg7KFz2iqxLEXkWM3g8jv8hGFRBACJeTcUFzH",
  "key42": "67hBefwKcmw6Uv9B9AgCrssXGVTNoPg2xiuofkk7WL19VDoN9ZpPa1ND4zu2Ya7rbJhX7jehnFFKjNE2fti6yi3H",
  "key43": "2aRsuW1qH6DCJaJnG2KsASWhuMYpBHPmhyayjErMQermhWDmjv9wE8T8zBsPP3uXUe1qj4ebfZYRMC6YnrsLb8rg",
  "key44": "2Hptgn58Gf5suFQSSTguRdcmWJX8QW9SmhPhN7U3HESpa5NRJAfM6B5JQSgf5kx7a4ZWzUMzs95ADjVj9nwiaZGu",
  "key45": "2g24RPwQpi4ib3Nnm4fUKc3p3QE1cKtxdUSoPAeWdGfQcLoefeiggFA1PVJxVMny9zceK5Bh7fjAn3f5oQuXoe9D",
  "key46": "45ysGhDrYCDUZ9uPHmm9t78R9dFWDTxvS8jL24JDj5EcB3fPUMGUh2JEdPoEnVokJ49pi7L9kAgrzvTt9GXnsWB7",
  "key47": "5HKPcCpchfbWj5uZdTXn5QJkQKibsTh6hiZk1afYJE2mNAYtWKi8qw3AJbGm8m94eYBRVuJ7J2DXjxKEEKfcL3AD",
  "key48": "4L4fpRzxHr3r4Abp7BJh5MLm6pXzvB3FC88pW6MfLSmXstbBS8tvkm7wE46xPbchC5k54UG69e3mVCEduYn3mNmf"
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
