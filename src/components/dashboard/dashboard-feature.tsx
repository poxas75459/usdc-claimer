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
    "j1oQ7EKuMT2hRL1L6B9f8H7vnAWTCLhpgNq8QE6Q9gXtzkZbrBHPrKxfWfZxEYAbwyjiXwSMGyXvJiPZvgyhrQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gx4Kmr2qWVd2ZuN17HN8vRVpqdi4GFPRmMJAMxGMk9UdknKGovcivPnrjPBs4NAChXjAr5cdrq2b6EN4p5XW6vj",
  "key1": "54PejqLXcLXTuLJU6bwAEkf2a669MwSNZo7tdMadSgCQ612nyy6LgKsoox1bVhVww9xZvUSe2zNquEVk377Mg6iv",
  "key2": "2BKhevxzsZy4zEjBxUuDJHQqx1LmFV2bK6YTsmZS8ek9N83szR6YhSWhNqBH5ta3BvjMqjqtJxbaGyYfo5KeZDwy",
  "key3": "57AZEPmjg75qhb6BTqVyGMht6xCSV4nksJB9ZWeZwWCyfCByBSeYfWSsRjyiR5sc3sMWbeRF2h2sGvH2Yazgu5Mg",
  "key4": "25MhjVCfA2KpF92kYLM7XeJyMPPbjMK43EsNFbLmW4Xo2txRaGkiFK7SRPhFBQbBpShfnH7gFPzfZ18QrzgGBrxT",
  "key5": "3uYxTEPjxD26tUYQkFnDXy7JCMgvwM5RqoaQxYixykGqMYEUWLj3kj5qCWCAx46P4yXCfScQuvhS7spN8T9bxBpp",
  "key6": "neLq5QsuRdRyaHjSGYT3PQk74tQhL6pu9Kut6LzQXeR6o6vwoRBfpCGZ8y4fD977fCuRveJjcDgEYQvM63acVYX",
  "key7": "v5QH3BysUxcFDCH9sAKwovkuuGHWNMXtDi7AaZLaUPYWuYmqppiUj1w6YWunGxx4VmLT8MAb4PRb4ejGXZSKxaU",
  "key8": "gMXiPKaS7nmZGKkyLEk8oQcQW8YofffGZ6oQKAvnv5MYzGeVPWQUntwWxzXKMuBfNRMJCGsgxtXxPVLKimYt3fq",
  "key9": "Cw4j5GNouyZ534TptjmVyoQmcNAix3p4QH6PWpNYn5aYNj2wEmL5oB7nEcyWDMKxC5hQpNHu5JRZQm7rwZzxfHE",
  "key10": "3ZZeEtNnCMvRSGWMEGqpqb1S15crbjCMMkwDHm8qUdN47mbRXmQii2k6QTDi2uZNzQnJJUPRHJQTiBfVLwe85toi",
  "key11": "5ZQP4rw9mV7ibZr8D8APUyZ56mXBkujuv5TFXGpGZN2gv1Vc5kdN4BR4SSy6PqTjyJre2tPpRYhW3V3KSG6wnEuT",
  "key12": "3vx8g2cdfy5iHuokMcQPr1NhETkgFV4KU31fw8ELvtbLnjsui6ndiU5G4qj45rxvMQ1eohT23jPfvrksUBeoC7NY",
  "key13": "44VWQxhoDKeCjmtsFUuNeorcfQGPgGbLWVi8CyY4xpSS9gvkwtzoCy8sj97rWybJTb7ojSa7qws8B17EiwDSZCie",
  "key14": "2BKKFmSV3e7hYmSHQCR1qrj1Cu288wghCS3PYaBVuTBnmmZA5HqXEUh4FugLwsWQ2Sghp1LhF2GgjAQbZUP26ng9",
  "key15": "5uFwk24KmzQN8tFsEPWup8fmcnca3nKN9qPjfSL1FNyfTAEtcBk7iy2twwaR46KqiB17JbxE9DzDi5XQB1n4DzS1",
  "key16": "2Ts98L8ZYvf2BFjWj1yv93fFViMpixFm7CmwWNPT8z3GzX5Qvx3pWARMRSUQmZPcz7awxQAtTXMWpYuTZWPR3GBv",
  "key17": "2qFaf2NXiKHPDBSPkvvaS7rZBnzoGDoP8nE1QF7WQJJkXtPJYk6ADbVfBz4WPTxqAkvbBYg2FmvxmFmhv1YnU2YZ",
  "key18": "4RC7fETCFT1q3oeDcMXWpjoheMLshdoimojmiRJNzmgbcrpKzT1ivKNSipPigGJr5jKiwmJPr21D6e1uXVr3BhB4",
  "key19": "5L7BsimCaEiPmmyBrKyFjNhsBGDBw89uGAsLXfgS9W6uC8L313SWYERS5YK6HWcKAVxKFw7BX1MMCdyD9Pfk112g",
  "key20": "3F2qRHaM2jQXZD91NejMFsTHaUApWbCzfh4dRHtg6bxLVMfdD7SqjzYjicKre2cArLXyGggZzBptsifzWcFAX7u9",
  "key21": "5tKBxjBYGNsQZZzgpQ4hzNAw8jemqXofvZGADQxny1K4uzE8EEC7CrkQHLa73oycBfLyKqM9WJZfTLy34zADYRXf",
  "key22": "3pVP16BpGRJmyuMFUE4KpP4CUreQ7bkHzjabtHJwoHbSriwn54cP3nWaobk6PtGZf822ZGvohL1FGeYQgjNzSKS9",
  "key23": "4n9erSKF4Sndpw1QFhcyaATAMkaaTXmJFET3AxiQfB9kyfCf7Cbydb6Wj9mdYnVXQzBkTmYnUHuxegzJdnrMHoYT",
  "key24": "2uzA1xzi8u93VEU8dWUyCbBWf491TkANEpox6ghMY3pE2tvwNzSjJ9MNMfMJg7e9aTXuQ8zWYwhaxozCM2qoiMvZ",
  "key25": "wU6yAD9qR7WthD3GqzHfKWyEE7VdmMZoQGfoWj8zw9xG4nChuJb9B8W1Yu3Z23bbbtLuW5wmEcegHBLvMuA2Ze5",
  "key26": "2X355SZi4m9uu6eTH6HpbPqY8gxGUspwS4dvmdLeDyXW3tV4J55rwNx9SyZkGSUcws7s8nvRcy9GF2k1kXs9t3ty",
  "key27": "TBqTcUVEK9PTnURDv6pNSzcp3yPvx8R4L2YRKNSycCdAG6pcYJCDtQqwwAhBKaJCykAsebvENBVPXWNxZUEC1YR",
  "key28": "3GUY7vLx1igu2JAvubjhotYP3VDwWSkAdfbiuaVrTbdh6n1689ECXU2naw7f29PM6tSNvXy6TxeedEW98hvDBPKp"
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
