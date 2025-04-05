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
    "4a5G6XzKRaGkvuJDH8EbqsSuCEMLEWPWZr9qVC3AF2z4L2BzhApa5fKPjDa72Voj6bkbShKNAL9xoUMktGY2sC3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MZu3sLXbQgSGbDfZrEpVwVpyJAVXeV1uZfJPq7HL9SoA1WnXxSTNUftRKorAxCuMHX8gW6pyNjizy7NGXgjhy74",
  "key1": "MvG8PAdNvaiq9UqttHvg2Xr7PQLPrz7ts7ekkLopHsqaru2FvW4NJybmzi18ywcY9L6xk8LHAJi2NSXfTTPbeBr",
  "key2": "4oaCnPB4byu7beszmC5vX35Dv2o8BoFhWKuDwtR5KCgnQtqcyWoEHU3nfJvnLqzCRRfa7a1at4d43KKJgoNSh3hb",
  "key3": "5Z4rkiEBGkyBjei7xg1VvyQAtphuqtJWVXrfcgjhEtZhvYnVLRiMdXGfAzv49omLMVoUmARvST1J8adrV3yGBw3F",
  "key4": "3F3KEG2aXtLzgrt8U8oYQrCrx7FeqTE6ZVTRuUBUMD84hBdS7oJkpKziTsGFhuF5DA3jFbPQNxneWjToaU7gTPhY",
  "key5": "pwEGSg6BThWdnjBe6AFgURrxFW3mQcwEcYCqv6CLYWWmGZpvXvjEADrPkc7b8e4pZWR3vke99mTpDGx11diXFgg",
  "key6": "3QffNnj17tLi6YMTVjw9fzqik4KUaj17FMdNEU35mUMrKD5Xpsr6w32vqGy9Wkk4gKJuJCSEVZced6Kueb5DFr5x",
  "key7": "4j6R14Pu4izoCEZFqit3A3B2yYDbeuiqYnjkM728iqsoPLN27r65bTABpiqvPM9QSBJLMocrZ6FDUfUTHPDvy837",
  "key8": "21BX6XxXfC5WENaoRFuqUixzF9UsX4V6axYT3bPkFH6DxssbuvXgmWZ1UrBmGo9t2kfT1jDm4xr1A9e77extmWTP",
  "key9": "2rckoxtEFcXe2JyxPQVBZfMat5Nq3epfaufCPFa9J98fVYMfSTwvQoqZ61hjRAngNRxgWK6UChugCozDfzNQr8AV",
  "key10": "3ATbhfJ9BPtyn1v3GD2AxVANbr1dDmqVDF69YKCgHPvEceiJPvNnjgkqGNUmqer4geQy79TyeeEpK9vL84EEQMzS",
  "key11": "E9Ud7MSnwUEDuA61UFUeveiMxbcjMQQiogzN8u2s7RaovzvAy3t6RSRoFzBKAvHjTGysNJ6sA8wLRQn8KF1Lhpu",
  "key12": "4W8hXgZVvcsXCstWduTMWu8Y26YnMyjDQr4SjAETAqVQMsajiWJ7FSFtUj4uka6u7AF1mNonSgtXcM5fH5r9rddY",
  "key13": "JfQSyqkpNu6J3ZJzbWtn3jUATGJc53bN9YN5hfxohUZp5vCeTjTaoH5iQ7BbUBFweLnBr6gt8Bggz71picPTvNC",
  "key14": "5XuudJpD7UUQKLBYSuSfh3MV6A3uka27VzmVtMG93SFQA6ACWDahMP2z64tGMF9ttfaG9zz4L5fGSTeT8ofWzVRc",
  "key15": "5HeTVmik19hYjbQErSTLMbUAv8AuxyF2sDzRDcbYc4NFwc6hHzjyG8jD372z38wsth1yxBBCdtPc2rNSjA6VLiu3",
  "key16": "5YapsBg4izzNmztqTuniqTpfK8y8kiGrcSSnhtJkik4eGCMNp5NYJL9G1UT2bTfN9UAd56FegZN5Q16fQw6cnwhL",
  "key17": "5asB6syTuM4ggeaN58csfSLU5Z695qzzG9KLrkuhcrmeK5oRoHKuNDXx5mhwxv8ZH1EyUkC5tSwiAkBigym4AN9W",
  "key18": "27tEt6HGwwt3hth8TRdsBqAnaN9NY2qJWZMQqicUE1hnrMF5vxHuhMjpNG4FHVKB6XS242Ui53LfEULrJPoFB1gk",
  "key19": "2yVQxoFyq1gL9VoSGH9Us2ESNH96RyvStGYNztVJLyCn4chXgCtHjXVRyKsM5NMWFt1r52YPtrFc7UEZVQtHBLAR",
  "key20": "3b2Uou3fm6xbYVR5Yqs1zsaMxNTF6BYmvgn9toHP2YuLhG5zw8svFW78sAh8xqjVwcjsgCFhzbThfay2yGnCx4bX",
  "key21": "4nV6PTkUJRKAAkYUSCf7tbPH4qSf7UX38KNHmMBsv7NWypJU2xqmoDnpBTsonmmx2eLGvmLq5gNS7GqfoemogBgk",
  "key22": "3suzPP5TW47UXAheoqbs9rrv4o7RBy2nqgedmLLEUtusePbtmQSKG8uLBPYRrrMUqLjP6iMkjqVv5N2gb8QBBzRn",
  "key23": "2ggQt9rK4S9WJAJoykMa5a8jDibKfEzbQeTKGqmVkBVawc4b46scAYz47VntiEx7ksBNnAaBJSxAwRjrzBg2n4Et",
  "key24": "3mY6AegZNyBhkwJ6MCFKENG9ZvfAqnNh3ZMAovPpqUGQcHVVv8fBQhksbEMTC66VkYmV2W8VV4ohoyCyF7w4DDh7",
  "key25": "3V567dQJcmRursLiNYKmPRBGzN3Wxkrrg7txzxXERomptoZBdNEGFPPZyWcnGednw16ND7crZ8zzHquqfLBWn8kQ",
  "key26": "4wG9ej4rE72rHfy78KzJj6q9yNkoVDNTQkT7CReZSdEC6TCRP9ST1xuPviNibmWbBQF2Eh9xnSSvdjXjSSfXHErK",
  "key27": "3eG9R8TNX9po8MwMVxRMmZeqvbwSF1tSDmt2Fu5Bssnxh4MjLpan59kTHDPE3bmLsLyuGjB6vGdgbTbrmQviQqAs",
  "key28": "2eqNU9Yz82YHHsoMopfy57LPTgkyoDk5HnVa27ggkRFguQgsW2RLaFMDvvMCT2rM8DXMDbut97SaDHjyA5S5pqew",
  "key29": "4j9Xej3kw4CMfPoyKamYQvV8C7GUtYY94ntF9p3LYABS4XvV1G6Zz7p9es7ivX2S5uSGmgcZQphetyua8Xcm8MKV",
  "key30": "doJjNhs1aSizm4U9USUPSK9xR7CrPVudssF4ssEuEsfxVANxkiQbJzk6ADvF4Pwcu5TJP8P7KG226J16wZgfgS7",
  "key31": "xLWTuenjsqS5QJcxjzAc7u2my8PTR3oN15DYEQQDY5vrCqBFXjRbYnNNNoShxuuqLiGj943JaxmCzMqNAZtW6BJ",
  "key32": "3S3ogv1N93KATYejVYZcW44fRQ1rNxwkyTqCR3X72gUK1rsYTXTw6wZZ7Ru3rQfFvDHQ89nX5eRSmLVotFoYpbwM",
  "key33": "JUaFeE19cSbRYXcH46djhdun1zRsaTZ8wmXqwLVcSiPhnNtsvMAJAqK3MXS3YefzmNSqTfEr6hiNPJHtMaRCXSN",
  "key34": "5GrWbvUDnd1UVHUVfyQTrmPouruhWjrCjBd5e7XPSG8uj1iADV7LPQefE22FQprSe1xqMHWhZEKiKWyELeRe589w",
  "key35": "buhebkbQx9BTnsdo2fCRiucQB89pP7jLL4eQyGZ4zXL5piw8BRCaUNCPnNkN7W71192eb5j3A2kZK2rh48Za8cV",
  "key36": "C6weh6ZUP2cRxKWs5R5hGwCSSd3FWZ3zT87G17h8mPCf6p2NnmwNNRsXCkiRRKABJ1UqDrvXWSo3V4B61sPyVrf",
  "key37": "4xQt3sH7Ak9vzoTvgAEUNF5JPKyFdSQfnFDXKhCmPXF3qppAG1RKepNnh21ugx7dadZ63whhXtU9rRuDppUgmZj8",
  "key38": "3XFxcpRNL8cQPh3AfZbrQzg5b2T9HouLrFLVVzX33UPEwCapcUyehcyfNuHHHdqyyaE1XhAwYzxM2k1qGsVLGnz6",
  "key39": "3d1iNmnZ38D4r1F27qHDcgpCUBAfWgXmjg7TPS3jFcCxgX1os7YVXT11yXwwh26Ef3BiPn3DdapxJ9XQzuhzMNmz",
  "key40": "4m5QbRd3Y7X4ihu4Twe5nW937gWwj6xfygPrr4qeihzdSpoPhe7xziSTPdmMpvtF9XW7Zw9H5skNLXoGffx7XKDd",
  "key41": "4mffSKAwKgCP5tTc5koAXZB8bu3biifkDZTaRNsf69k7ufAsCjUfuLoWqXfHg1rcfDtDigscmkS9Wd5cPH63nLpw",
  "key42": "3hVC3YUyCPkFUDKbekb7ZNyZZUiZMYnXqsVNMc6sqpbrr248ZEB7vCN3uMyXWL8RJUooKSbyvykpP9Pm3PKzJmwC",
  "key43": "57jbZrpzqh5LoJKBwajLBSV1ASoeM9y5od4rzY92fXyxBFmc9WTY4c89V3A5zMsH3Tnh6yAEBdKKKRzYudXQrDkB",
  "key44": "5S6jLV7Z1gF4hVynaNbHjc4FcpESLAsZHqL9EEMRYZdqT4vhSA6W3cBdfWRUmHXAwQAArUcJdSzqzwh9kNrbCnMY",
  "key45": "4RXhti9KyyStf2Y6k74dKdMB94GHiPUJMPbGJJBwf2mngYGPLRSe5emH7LCakQjpban41dJPyDtzDzo6JuXmFSE6",
  "key46": "2msSRtAe6cBNMpBJ8QfP4AHY6HWa88ewQXvo3e8mCjq44CWvevhrNK1hGGPCMT1SDyh1YPNYkAZA2xb136EhicWY"
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
