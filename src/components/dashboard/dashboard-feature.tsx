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
    "v4s7htrDVNLvT2jBwmk8zmkbcVedMbMUStgm6TTpUNK9obYrFL6ZGHaUrATVXof21oRBvr8BEC3vU1w7hB82VKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qeNxEGRQFT4BLr9UcHKBz2638Boo3C9vHbYxDrt5PZgUnyESFEt9mdcLruLhxgtfa9cS2En4uNQ6nDw4SNScAjh",
  "key1": "3EdpUCc24ECbhKeH54ozPq1ogqaMfSomAVx7dP15VLuwE5Q3MBunCdVLCjfAPy4LySVUQr4fqwNLvFytHEPwaxwa",
  "key2": "5wY2EuJEZgjpUoza7omnPM8i7qNUbPpCZUx7cftBwkWcgc3ASQuW6yNsd3nZDYxe4BWTv1jugUtG1rC2YvvAcG78",
  "key3": "2Gaw6Cd73LcTDauZUDAPyVU9iW3LTUZGdLtQB2Rbo4f81yams9hRshRWHQFQm8ko6ovG2YnCUUGQSwJ2Xy235ozS",
  "key4": "5T1G7uH6LvYdDortNiwWoJ8jCpWLrPb9TMSncSvbPjAQRJUr3i888jq1uhfeJ2e3G4RKo6f3ufjytW7e78SJYbVt",
  "key5": "ckEyvDs7Vi8PManP1cm51yTzX8KPoeQ5K23A6ZXrjkhnnnKfhN47MLM2D1kHnaV6f58o3mhsGvUBVzWg2Sdhe1U",
  "key6": "3iR9XMd94jDZdhvW1u8uNnK4db7uHmVSTd9PJju6sYQaNkpsSaCxcoi8jARY8aWGvPLNFsJyhcUadupBiNeQDtyN",
  "key7": "4pinsWp8vK6oi7Aa7WSN1mG6Gg5Gbx7Jwj9cXt3xACNwMrzhMw84iiMeY7SC1U3A5hN3Pi6YZ9Le5yKMkggN3Wnm",
  "key8": "q4i4mLvPEEjCC7LgTDLrPL7DEuVgi1Yb3B7ZnE7N9T5Fb6xBt5hPHtnuhBzvh8zbr3GwPthiwFPpSJvJABFVgDG",
  "key9": "2JYNCQ7CFLoMWnKurTnC74d2ES4JxoszwzvrXMGA56XsdV2iX7V8LAScZXDgJXNM4CxSpG3FLNFtD9d7CWcvumrg",
  "key10": "2uqDWFRjKaFyktRfd493GkSGcKkm8BWwrNzncF9GF1t99ipm9qZ5961s9PRyvujpyiMHDk1aRefqppES1qacL4ic",
  "key11": "5gaDqTQk47ZGM3f4QeuChurCr53GyJGU3xxkAMQvxzdKhRHRALPfp1xX2jN6GnA88kTnF8GQPjQKAmLbDVoa8A3M",
  "key12": "3sWeofgyJD5TreECGGukYGEoZQKDtny8iPjDKD2UjdvsmcJ8awZR8eFjqZmTRBWZTkstVpSh2XJq9JHZyLA3GxZa",
  "key13": "4BgziL7hnzBg6628XAq9xtcHxE7cSMSnLh5WzDGKpxaFc9CECyfU4SywS4jRAgd8s2gtX3jDU4qfW46jjqF1kYtA",
  "key14": "3PurAQHmFbz3QZF3mmap2cPaf1JWbsNjJJtg6Bo8VbjcN3zpWDEtT7jRNG5yujRRrdtf748kYZNMidJ5B4KFPWRG",
  "key15": "2pVSTvFj5FYfz6JcuCodVjRLmN3KZ6cCHzNaeVpnFtdR69Y9rgobPw2U9eVYSV4KTxtjmrPwffwHAE5WGgUcEbHr",
  "key16": "qnqtqjBYeGKi26hwyPLXVZDxmGR9rnJcFifqPQCbuyJ9Yxh2d235CSKv4GsNEHuCVMyzZt3b5LFYWFwNXs5sJoW",
  "key17": "3NhN5GXu5iavaXfekGdz97yNkt4Sp4MQXpfjvn5e5i3tkiYiTA8V4G41QxbKJUQrFsRnGWTExG5XM9PvMxoe3cnT",
  "key18": "2UroCwKS11z6zGygXYRyvUjRcTHP9x8CxtCnPoLCqi96hrwn4YihKGib5djq6JtkDWiNogVcwXxRWbdsfjo97GCG",
  "key19": "2F1uPxDsq8ZeHBGvqRoRgQFJESdJCgU58jJ2ho9BFfR82xG3vSgjMT6PR8CfNqrxKxfu12BLJ99doGmeRQMNYr2H",
  "key20": "36kzNnVTTeGZpYj2MKBvPgnTHDQoVu6StLWtadLXBFMTWTHmo4pdGPThSnykryAgcTQBX9owGMtx99fAbrHwMLHV",
  "key21": "43GrAri4YayyizzGVGaX3X9WJcvU18GxXGYqnCvSy5QXPyqsULZQa9kxjXm17Rnb5wRk6Y1aEtQ7vib4RMgf62Ki",
  "key22": "5neDnu42mHPY74qq2Dnekz7KxurhbUXykxWoRJxJSJUbfk7cELNyfQMA936AknWB1pDBk35kUd7iqu5ABtNNWeTS",
  "key23": "4Kr2TtbTpnFqEZGUFKjBuGSz3BNEenkATCcpX2fxiyutq3hCJLyGW5MbFZe89ekBo7iY8NrN8r6374A1BBcXP3e9",
  "key24": "4LPUKGWJhHnfhHgJtC5BZ3dadNRjX9rpRXxNFAz8qbBKNuydcvzVweLoYP4KvsSr2dC8SqfZYqfReGYacMc3zNYL",
  "key25": "297HZWLvS5omp5Tn1DEGvWAr8xkXdbNGevc825B6c48DXp2Szfi6KAFD5d9sACZiXnUYP6yvSufce74DppSF2gJE",
  "key26": "4rZBccoLNXEL7gU9N1mRpCghAN7HzDFsV1z9S1jFYnyKNtJFmWscwH39ZtX2FLZoL6QbN7B6WjHREvDsJTYV5ddw",
  "key27": "BfMbmiHro48xdyzNGCizL96csCQHUdM6TZ7tsMejaRFJrSdbR7BHPuNr6g8QnhkzAtYtZQMQ2n8jxXMpsq7gKiA",
  "key28": "22qSgQNhWRkRV1v2X5jBKpvDYQVe5AeRBpujdkzuZ73ZYHGwzgC26aZSesbLi5y7FFELQnKoapWuxMqthXuQAwjF",
  "key29": "5g6jrVwnnp7Qv5eNB8iKMsumcijuwPsTpmzqFUkcxCm6Bumyre5rCgCRmrTm2FaGw42BRyVk3mrcoEsrUXV3W6DX",
  "key30": "3k8xwNQQmtVRWX2tfdUR2FuoGquFVAXLTV9TrBztwCDwXwj9MUG1D4ETKRL62XcScwZAeb4poG3PFbdf3ESGTkDi",
  "key31": "2rhSCHZXXTit5A2iWp3jfNxkNQ6QWwueUXmDGdaLzgAXyqD6dphaj7qWN8LwYZv15kSBGYZS1RAonK9foBqGhamy",
  "key32": "5hVVRuF1kS7pPezbaUaypGEfECnpb4bWGerBSoYnnEr7juGvHo5kC1DiDGfSbE22WmbrFwhx2DvRSouDAayayvQV",
  "key33": "57AwzkwNhmaVFcuvaU1wJoQJnqhoHonMJxQ7QseYpguN8NLYFQtL3pthbJ3ygGCtrJMePhk4gK2US6vXHY6JGsJx",
  "key34": "4cEXcTm5YoHCg47jYRMAMxTNiDvWEtNEH94KckCo2wyzNDzyQsRSSvuVyuVrjG6M64qQebUhNcjccqEuYEcGeDJg",
  "key35": "2Xh3TCZhkyVmS5gEbL5LKe5ki1TzsyG8VWHNbYttdsPSXstcvcQu53rV4pqXnPbpmCDm4F8PfUBZWyL2X1ngnaUW",
  "key36": "3K6dAinXPe6p62eHRW3Lx6k9Cm71uPs49xrRD6JD23qDUwkbuk2kUuGcdL2c9BvJgqUSiTDjfdfa6ZYmWGGtGFDM",
  "key37": "5DUtWdUmgqC8cPx9xbjd8y3CKAxBdFiP8To6pbAyKxXjZAeFeeqgRhhVbiTXJ7HKYm1E22hUBKqp5w8NEEBFZLeH",
  "key38": "5CpYC1DSKnN7mpVBmG5zHQfyWbaUe7YJ959xAaZDtAKoGaE2f2VhVv171w4eJVQEAypwxeFHPp7w4WuHcB3cXd9t",
  "key39": "2SFDPwfhARWgGBe1EeuW2qgKs35KFoHznYx3d8XTDDz3KHS8ktJ13dXK2njJcZJ5m5vizdhF6XHr8zny6Z94Vsxy"
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
