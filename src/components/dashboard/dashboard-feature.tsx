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
    "552pKPdHdMDFyNJgZxCX4SqxRCHmMNqubdWLQSSGV6aVeqU29F3qahsVvKzAa5Vgfm468p8V6nQsx1wzBTow8Cuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SRJM9GjgqQhXwm9aQ7KqdmNCKTWguMj1WMASoVL8FGEpsdTLLF5SHGZNUo9adLDJ4MzTN5d7ZLk29VT6KKTfFYc",
  "key1": "59TqbTriZrDsxiFDGacwDBJqtnUhnyoRMkR5YBUTBw9ZMEXKYCA8ex2CzoB96HKVb2s4TYEfEsR35EDp7uDoVYDb",
  "key2": "36DrsyneYMXrcPa7B9LSCsuVTQXERKP2yFZokcWA9WokSyzgQ4CoeC2JL9pS4WnHo5DDkG3qQ4gr8eGxbwZVpWGq",
  "key3": "4tjB6mzvrpEwCWQ4mWpjA4xykKSVSPY5jQmBJjdh3YQFat6g8WF5d8PPdspsAUq3AERMmPF1VhXDn3oERrvdmdKh",
  "key4": "4U4aqYRkbSgNr9P59sR2GjdcnjdXg79NYEKU9dW7RcDAoqbsr8H81CJ9qG3DiwFwqkoWboB6uNbVzWj7DJ5HnHnY",
  "key5": "4aiBEA9R5UuwGZy82SWnazyAR5km2gD86ouZY8hxWWYzfaJEPzGvkQUwW4Sn6QjR3txj6m7Up6Ms6HPfFGxtQQ7A",
  "key6": "21N5GkF9i9buQVjgkZjBZVQVnrf5BuMYmjMGeYkHmaoq2ccJCMVcB7oEg3uVsfLHeMjrQwc3HXG5Sd1cZrDc9eYq",
  "key7": "3JztDkxSGZkaWgrzTsmW6unk1rrY8nAKyjJHYKFPyBxw21WZXxq3ymhRRsCLMvb7Lfjs63eAXhdjSuBXH3gKrRHS",
  "key8": "36CcbXtXk3sUZstSSep4QX5c13ujmMf4Hkd4pxArSVjrvGmxLkY3rGMAaL5ZevxoT4E4NHHgc8KvaPrmPSzVn1v3",
  "key9": "4oY84syMFoLZUoJS8LevGQeX3zvv9uMn8pfEWbaBakKZeqgAQiwHKbPoMZApBM2nnjXtzeWFWhu1hsZ1dFjFvS3b",
  "key10": "J9NnLzj9rgRgYPap9suTj8YNdAwbgJPidgXe86mggBwShVFMTEsuTmVSVUqKAZKHDxm3AGpgDvPHPLrRuP4HjcN",
  "key11": "2kxgk6GjpiD2dmLqPnGZjVMqswk77ua2uopWZyAPJn5iEsXA1GxxQRGDvNbmQLBPRF2e6NTzRoLXdUp6txfTzm5Q",
  "key12": "NgqJwJoEdEv3DxYVcRURAEUEZXtPjGzFMjPfnD3BXL7nwpMr79TUKw8PhzryuK2MecPNh27HwC2TjF1vwy4epmn",
  "key13": "2GdheswSSEvLY5ivTRDLdFcjnJwENEUj2rkwa2tP5vDvUL2hfyBBivRfi8cEqUAohTQrGyEsRwkZx3mfrmN2TkqW",
  "key14": "33dNXaKZ3NFJGCjs3odBJkQobtqPQNBwjmQCeCvUWWgsQRAB2WqTGh2eHukX7o3duh6GypxVCdRSx5A9AC4xGp5u",
  "key15": "yYB7dLJt5uLbfwUnS6KSUuhxCQBsvf68JWiUcucFPFt8oYmTpJc2G9dfazoTMkYSbHD5jcqee1iKs1xPPENVh5n",
  "key16": "3nnAcr2agoKA2K9uXpofDHDsSD2M67z8xXGuCpzkp8E6vA7eahR4vjYd4aeg473eFM31Unr6REYDUqeWtGvTP3qt",
  "key17": "58wYCGZorc5nNrHywwmkzhd3tCLYdduveru7vm3LVqaqkZf2KcRNFZk1jvn5zXswWWjn6Cz1bioBUqebBg98xMPu",
  "key18": "5x9KLVKQit1dTuXFbFXZxeLfrxzgFqadb3FBMK3Sk5T59iAgy8hbWLPmjnbu1qRNFkVXXyxVC6chB5Gk52SxErTB",
  "key19": "mJH2LAm1xjcCtTgTmkam8dcLXG2UsAqwhV1LbqxToV2kZergyPP4SGEx5Ytj7Xcj89gVM9i3SahAWbAKpBqn7ct",
  "key20": "2b4NWQfACpzF2ZNMPFzWoNHZG3qd8kHxoTntG3BKAryyXss8szMYwLv9hbvVZPCPBPnznwdTSEujsukwa9n5raEm",
  "key21": "L9SjHWqZsKFmcYDyGXJBvo3ovWjWPrhCyjWVH95TmdY6BVxzKbxShPmbQnwQSFKSPw73Rfx6ijyd9cP4b7fXoqG",
  "key22": "5iSUUuWo3b5SYcXW99AbC7RYGUeKuoert7NajXAT6ZcdEceUwPn4W27hFYxugiEYHYS5EU8etoVnnJsWv49PEGLJ",
  "key23": "2nMYvVHbfNnrmRkAqfSEGYVC4dNS9AHnnBMBfrJaK3hGhz6zphBe8JCu9Dr8wXkSNcZg4wrBMj4P4UW6386KHLJb",
  "key24": "37dhWg9iq5hwAanQ2uBnYD9FjbwPEg7EK3c2Kvy2fGwfktaufEhWib6Hc54m5Tf6vCHEfpCqB1sAqcbxcXb1xqoS",
  "key25": "WXuBrVWe6v45di3J78L4jcbZfg7zuvNDjzxJp8tf6RqvsSATNXAQWM5W8Uup6xawNvvdZQUnbWgGhtUw9jb57HE",
  "key26": "4u61vQzhSN5D6KjzTojQsCGiK2SFmk6nJkAyRKbe9CnqXhgdUrJGuoDmp2eCtq5nf7xcJpoDanX9S1FNLJq25xmJ",
  "key27": "3WXRpHDSEPD99P6hEvAVZGjCFk5Fj76jcze2LHdQerrZ39gXUuz91VEChPNoK1o9LizrRT6vTZo2SkTPA9QDLXPi",
  "key28": "5NicTYms31EmiCFztdQh8trcdU68QKJdKWoYvCQkUoL9P5hwh6GEeNmjUDtWPYGZCACD8pZFPS2wMVCpzBin6ctN",
  "key29": "cy75chxLkUHjVxWaPqYHoYhJikg4Y1u73MMUm1z9hd7AuMQpnyDAoZD6i6v2i549TfiHH5arQm5bVbXHpt6vZw6",
  "key30": "3xKcLZr8FtGCBgUGsxMV3GrxqVA1jXtb4Lv7H4qsviJWTcBf8TR4ES962t58ruJeiEgSF4otyL6eUoyGb8GTXrCh",
  "key31": "4nr3sCmfdQjWe8LqW4raqrMvuo6ygPMcz4S6NPsxdfkTsmKcbdXjfMbGk4BnXKPFMFkcLRJ1Q4ok53a2v7KXCFPW",
  "key32": "24dziYM1hRNmKXLCaNq21NDESLs2vj2LQPNjAPt5uRAA1jSPJKccSdkWS8MNfwM4BQ6sLiX23BC6X3j9GcoHNcBy",
  "key33": "5R3i4tvmB8vH55jomw2244zgxQnLDSz56gNZvTqrWiQkM4QEAqpf8vRW5VNXmQDHZ5Ys3uKMM6FvRYp5RAm9EsZT",
  "key34": "4vVDttwrXyKh2rvgNrvaKgrzssFfBBTnXkunMXYY3v6hecy4aoF8arQd7FXgR4jFUE2BnH16ugy8CiNqxmuNVCWL",
  "key35": "LD3RcoedRoGdb5ZPb3Ehrw9tJRBvv8DqsVsMv6PwAmGSVGuyZ8vdUqYoqXqW4qgaZkCHoGjPMWV3pWKbXCVLyRX",
  "key36": "EtBEX18EXbyGcipcRpxw3AK3K3FVriEabd5TtLBqKjKqMGE1pgQjbXUxP9tiBUfm9WE3pLKwVFFiAW5UXvBZenK",
  "key37": "2FHFZrgMHXkSX16ATWFgVww5eveiE1HL6ELVCe6Hi6tbJY6zsBBbFGPUhpUQ6gcmV3dANSNmreASANzqJJ8UvyUH",
  "key38": "2zwwXDKtd9eLoKanmxiKseEM5wxP9Cj4ZDcDxGsM8fAhNXMc1mctxBPyeems5AKqwhFLifw6kW9gomdUJLdjjjS5",
  "key39": "4Dke5711uozfYfrPUa4JFG7NDLLAm55VUeGqH34k3KhsNDmtVoXZ2oqiSGBebheBZhtr1dnGYr9t1kfcQGdh61pG",
  "key40": "2Wfc9J9RkGqAmYFpoTRssvFMQBoi3pyj9rkiL6G5gYRtJjL31Q16qzdAouj5kuwUZ8gXGvU5HX2yrMe7JeKR7P48",
  "key41": "4vDe4AibrsBTwoRsGZEQi81XGLGuMirWjNskm8PZCQAVTRjp69jSF9pFJutqTXACRGxBYSeLjZxEWWUnoRMA5NE4",
  "key42": "HaprPHEFfgAGoXysLKpMoJXNE8epMxsodaKjuFvi5gtDNj5iSxphvksTrbaaD1ZWG1agW3fWP8h2Tw78CkekMYy",
  "key43": "EJ5R6v1QJuAhtRrtCvLWx7kH5xfhit44tFQRmTcGDEXMeTocHw8uraZPKYXMFw9aTCULQFByqLqcnBQr29uux5A",
  "key44": "4LJ4aNz45uvXqqKK1wvVuePxJTkWJpn3pKqaWCQBwSV7EZcBa6TFUwmo3GheN7ii5SGhNUwVxvGFin7yPKTFVYqm"
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
