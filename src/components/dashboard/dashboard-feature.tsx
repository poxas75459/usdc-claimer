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
    "3WfydbkAHkdkmUnYspvBRz96wMNs6U4KvbLmhAfLCnL8NJf3EGZxP7M2adDzSdooss9nbRuHon5wVRxnaBDcba1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awcAySpD4wPFPTsgTGiGAdWZ2F2dWENqXtY8wvzKAKoZWSVpf8UkT6DrGy4WhyZVm8MtZutqXkmfB2WWa5fBj1D",
  "key1": "YoXeEa3tq4MDRAaEyucbtCjpobebD3B8zQryRjtsVurkLMXiaGYbL4gr6bseVLRZSFjUdzMeF1mjx9awGPdfvE5",
  "key2": "4oWNHUoigr4Umkb5QtX9f2Tj2sp3pXXPB6YGJ43aCE43YptX9BNvHhMJgErdZJYyNdq3YFMtUxvKcfP3kjbJFZJm",
  "key3": "3qfor4CNQ6SktXGCYdxbYgAP62rZzKabjRXQnVHAwJTExwKsFBxpXQfBL3oWDtfqAnhL9WLaDQ3aCqDHc781CLGY",
  "key4": "izQR8XT3Ept81vxHBdgeKTU6yMDM37XmvanG6DaYwUydV6pajWxTxAV8vTvp7fnCiYvJDvcM47n1ax4fkMnVeCu",
  "key5": "bQLVBhK616kxa9YXPyzkNaQBAhhfUSkbY4Hw3zGnxiSzPbqo6UxrReadVtZdHKqHm6jS6M5zhHFcSRuPoLwezr9",
  "key6": "5HGCZASJitPzAkTXiuCNVfY6sXisKbn5LYqMN5SFLmLMDWNVzHULDfFyC3NCE4YNoD1xYmM4XAvGvyjEpCy5Fomp",
  "key7": "5WStAb7wB1VPZDYv98mrYEQ9qcA5BR6k6h4X6S3cc2RD7bRrCUYE6afjpprLsxP55Q6qfb7t4YZYDuhbwUVvRcCU",
  "key8": "AxEud3eAiVRSvAsbD7wXUv4t2rXxw5XHy7jE5cA4aNFjnEFHkKwhoSvfTJUSrWmoGJZ5t8Csdrf1RUZ8BYGpsGY",
  "key9": "4ZfH4FitYeNJF6xUeJTot1SppTqxM4n641zRzuL3ULetnhrE3dtDxNW4CTjjJBQGGJbEbjcndmKWiDjeEbTRADgi",
  "key10": "2LRHpUUjZ3eakm2Y8Yrbmd1th6aZcoNC7hJhYfiuBAiWRuqPVcXbErGJNqDsq6SbYrr2oYS8KykrkBTVXwMxFwcB",
  "key11": "J8JyQ62hhghoXiP5qh3WCSPy1jX2TSBAYhsKxqqf8qh4v5merdQZhEzkpkhBUh9Lf34kNaSJ4fKZisDHcgB1PJK",
  "key12": "4r5sy2BCV1rjdSvspvBgNdMNT3scowgoiavK5jihdQtNfzZW4i2GHFXHcVet5mp8pSXnasy9SqeubM7UUzguxRYp",
  "key13": "2ksJiiuhytfwBT7tBF8rceRkFXWmjBUzHQU1uyjfSiq8BwDsXZXKFRP2QBpYUT79BybXgypuaFfJ5QwgmT3cBEpm",
  "key14": "5dmknRkkwroDa51F7nZeFjtvG5yt7xsVRJBYUMgmWDrysVPFyvS3eJkAMdhkiniGowdhSkAywvveQfjrnbLiZdD8",
  "key15": "2tWkrBGdQ6HJaTWDdZ5py7XjkRZXwQdsrB8H2oamyGp77K6jyoSSKPW6xkuxiVSUgp8ni7Q5iGcfG3qr7ejS8CSu",
  "key16": "5ptE35AvgFm6K2NNuDTb4gErsGcyZejK79TAdaMEPgg8wvCmKi2fkJgHkfV36k2EraFSDk7AXdoC3ZbGWU65Rm8B",
  "key17": "4cMKStuA9CvPqo2h2Mq48mk17Se6BSc54e87t7SGR6obkXTKuW2FbjFbZafmr2mYyUpqsuaeUB3wZwTZ5162PKdq",
  "key18": "3nFU2AXvWtKgYpscBtqPJQYwWDWJ1WjhHis4q9KjSJPb1tXReSYxMbE79Q1RWfVEWoy6SJRGwD3XNDjr9xrRHUSr",
  "key19": "67MHu63B4iBduBnQpCbX1j3dMMa5mVogLRGtLMk8HkMQCnwJz83BquT3TpwBeuUxXakHq8N4hVvS9cPCQcfZiAhA",
  "key20": "5jkT8g4gt8P9dEwNFENnTTpJt2CdfRvywDiH2FaRDhWKg1w29RqLgJJTdDatqmYjzrVSFQcSKWpKmU4rxVQY3H2H",
  "key21": "5B25oFawxwRZ9FR6eteFoEJvvEouBYekPTecS41m7J6mFfZxDszpvNRiYLZ74xco8CFQtUP3JLcoAmTAJU7U5E8t",
  "key22": "5SzwbMVo3sDUL9tnhzU6SeM56KQwG5H1WbNK9tQVaf9Vz5ytemgURfY85Y33yWR1dHByZJV47BgjMNTP1JJKwVae",
  "key23": "5hTxvLbKPFuBXQiGPrRc3pLDKoNqH4sVFhKzHe48h6oFUpAQtoo61NoxtRDtPcTyYnkkutjMq2pmBHdHWKBLTurF",
  "key24": "4Ve2fkCjY2aUBAfB2H9kKJvQcYd2op7hFbZqcLSjX6J7ydzm23aP4aWhAAKRm6ZqFmPJj1SmhUoE6omJ97dmitkz",
  "key25": "5HZPqnV9kYSoAZjWjAqG2gDg3rKkoS6PKF4q7PDtcjHSyZKiugVVW9uW7oAqRgmBHb29QdAgQEMqWEL9PvCEtMQP",
  "key26": "K6PG9Cj1WZxPC5wpSZbjgK416nnhqsHPX7nWpkGeUaDydWEYqUJrYAFEESerbP6Yz13Hh1tcGvoMPTcPBGQMX5z",
  "key27": "XZQxdABbiCU7bKxiTXBrhRLfZ1SiJQeQGQMXea3vVznyGp1QL1t8Y2tAxCtokeG2HGsmT3PifZP4ary4vgxdpWR",
  "key28": "4CzfUeXYXsJkP5dfdLP1UpP8DbxvBCg9YesB9XU9mx2se6EZM7Npw8NirEjjm5Vncuz8Yjtv62EnyJFaXoyCwzdu",
  "key29": "3eBW2kSfoeY4y2xF5QcJGqR96sdrQmUmup4tQi39gAcb8LaFXreHq12xZzYNJuwESz6dh8kRnN8ZiHQRVahMFTyb",
  "key30": "5bvJd5cnBLNoLuZG7gsEvgRG8TRPd8rYGYfkwU6imA2ihzNsZUFHkP98y78ZRh3xu3R7oKzTr3A6zNkAWCuP58nP",
  "key31": "2PebS2ENet8c8VWJ2mjwFoVRfuWcennsifKwEj7MdEEvYYJbrciJQFSBMqjqMerDKSKLREY3sLYRhtNPJMkvv6vu",
  "key32": "iM6JKmbin1GMZE2ZPtyRph3ihVJ2VK5zRY9965ifa8C7FvxTKfAs4upQFtqmcdm6kDYU7e657QNmLRRFN7Txb8C",
  "key33": "53JvTaEEVw5vpEDvzRbcv1dVGosrnAv3iyq3Vtddyof2ic43z1cznMMaGWSHhy9DaDSX68wyhHBL8x7yq2ZKFeta",
  "key34": "3wzQD88VohVpo2q4fq1X4B5NLASPE7jt5xdG156fHwLBpgcEn8X6g5uM6JEVP27Pz2Ht7753JM73gcEivzv9YVJe",
  "key35": "Z8vuXahfxwCCttMTLkfET6EDRo2PnHJpWNdgJ7DvmTyg91WhtwkTY4y5nkeed3QedZ3oRjXNr9Xu8XxTB976ST5",
  "key36": "TKKhW44xjnLsphY6vMbGBhQD9pusbuXnEFzuBZXCcm7wD31wCgNknHG59JrRMFqsQJ86TPCBBU3qiVg8F6Zb5RZ",
  "key37": "3gB2neSHzBWsYvcpVEtjC4X9K6orUfkiRyVLq1UWmCmdwE6UimfuJLww6eK4fLHK1VHPMvsCCCGKBwqA193weiQU"
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
