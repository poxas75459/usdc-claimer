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
    "dkePBU5JxtY9VQjcF7ytyptCTVKe4QjP31LxdTmvfgRPMk7tuH8gzFh2XuxYBsf7xAsCW9nZ9RwqknVAarrp7Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fCxHt1KU1oZHSYUfesKGsRTgg8eGP1rzCeBe6dq2QYBe68JCNcaKr3ooyfV412hcU3mk2Fa6NeBm7mhpiMrz9W6",
  "key1": "64fGRwwFstWvhX1K4tp4XzyhX3rnz4GK5X768zdqhLVR7P4ApX5QFg58SMWYZoeULmsEgHwp3hf7ZdTAxcJNi5x2",
  "key2": "UkK1ujuYJK4ggFCwmHZfYiPqfBRtXvFoHdKZWsjzPr6xjtAfTeHYbweeF8EtUFN2LkkafDHM1WUX69BB2DSuzmU",
  "key3": "pAFuYiWLyQ26WSSdw4ZGtCiesErWDLGPbDQRZunvgW1rkGD7su1kyC8W7iLn554Cf3tfRndsetxKLE9v5pf5tuj",
  "key4": "4YR8ufZXupsHQysckotKwh7cifGFU5YZA7mheZ2pg6bNuFpVjRLrqFoeg5D4GeZfZHJvB6LZmHP3PtpWvpQGY4vt",
  "key5": "4Ebkvf5AQ7BYoD2Sw4C9MUHVPudnnkusy2GLeB1q2WCBRaSqMeSGirxFGZDRZxebdXpjs1g3mfvi931HcKbW46Gs",
  "key6": "57yrKDqvJ48MJpUFNW1pm4CiWTYqZTaEpd3XNPTdDYhaXoG8AKakQNcsDM834U8ZrsX7gYnRx1Y4drf4h9LamMJR",
  "key7": "5V4w1eBoSASATM3UQ9RkCTLpjD3UUmousMLwLWdKfYjKzv9FJzi5ds6xC1vTXi2qrCMvwQF5suuGf9odNfrkUn7Q",
  "key8": "56ZhSY18kpBtaN75faYq8k1b97AG3fZUWMAGmay6AAN53Cinq7kLCh69GY97G5Wfbvw6jxW47sFPMtZUio6yfXXT",
  "key9": "4kM8LywQ7UQAorebw4FUrk9uc4ymMSNx9AR292L9goDuRTh6R4pfT32VJfT6PRKQfkDQVtEAgQDefZz1DWqysy6C",
  "key10": "4najVSsUS8syNWNyvuHTTAPuc2gor6XjEUw1rCYAZwmW16bxKSAj9yVq121zVKsTzvJAg7VyLv3jFuqpdSDLM9P4",
  "key11": "3eFX42vZBdD9TAPfVt9uzT55NufkRE7zB8mMZsovVSQYg65DP6mtDZsfH7ADcxjiRpH3uSG5h4pNGaZ2VcQTJvCY",
  "key12": "3KBNncYHYrnb9UJQMvuFgfQBfFJxkHGgwMhAAWEccjkDpHNWyHdBu9eWi5J8vVkkagDxxDNrWReuf3KY8qmHXUP9",
  "key13": "3WvFEZ4zR9iSreoL7YUxxBQJYGQmy5CtYcAjAjBHeB9FhRtTV1PkNQhpya2FG8ecKXEhYHU8FgwdDE9196WZtweM",
  "key14": "2K5Q617ts9A37q743Bb9HNWVbje4hAPzgVNLMUSR26Qc5cP4mJr79PhJ8ndyjxYNTumwsfXmNBt6ETNAdVJhRoDB",
  "key15": "4ZfP6jfRWPvXwieQhesvwWf8PNz5ut97ANtBFmpDuZc2NLhmRRDxRBJ8ZNepu1FC9W99io6apmHdMz87J5YeHDVL",
  "key16": "354d9wCw3K7zXcek2sDdQjG9ry8J7XWhaRTbUyhqVrc58zM8bhPgPkAYevPUJV9LqNtPQxDZ7j6JCVjydfp3uNK3",
  "key17": "58SQizBQ4yh6S8RjhmFchtchXxepnhAZCa8vMbG4VcTpEHaTdnk6sisizaaHJwzEi5tKxX7HAJRH5kmQa8Qy1MxF",
  "key18": "32D2rRxMuAnb7uXmt9THcbrtRWTvFc21ZRehknFXjsCuswm5KFKgEtKD72BYnFcH7sEnCXrJ5q21m6EDJJWvUA5f",
  "key19": "k6jtczW8YG2w7mBAHeeQ9BgjiKDxCrbErmje7bmGPZq2Qvjau9rje5w2wTVRCmKFssze44DcM8Wxqzqzw7xHtiy",
  "key20": "3Sr3zo65V1Y8qybTARBw6LKBu6yHtR74B6g2cXV7W1HmqaVfYHcAavBGNeKFuxw9dZmPxdShaYmc8b5PAvQ7RLrn",
  "key21": "46xWCuJtG6Uzemc9KLE1qWpBBQL2MKjWuQbbtGxhZTwiAB1fBDHsggQUaXu6oiwUN4iDf5YuAnKxRjTjtnghdKwu",
  "key22": "4qmvDVCkNTr7RZBTNgmqgAbYb2pJjDYum5CT1z6qD5Vw9BAGdngxgXPuYCT6n2UT3iQ7kuY8gpAV8JQv5wPadkMY",
  "key23": "3uNMbwprjFMnbmsgKBNewW4jtGACPNZ43zZUY4MCaMFpt3yWo3N8HD1AFs7pFiBM5VAYrayERRLoyQ81wC8qqYFf",
  "key24": "3k3nVSKFc58DJGyi86YvgJii5M5wjWKfWjPmztBZPphcsfnLfyJGaJiofcw5bfgDNSxbH8DFc5hkh3tHxCpe42Gh",
  "key25": "4mdpSjn77Lnv57JLLAiduAyJWMzMqCkwtqZU9MSUgJ5JBiYvhmvnqW5bbhfidGWV5kmMPKZ4UvauGddxC4pC3Ame",
  "key26": "65EWDnmv8CNAPDtmBpb22qUDi5ASbWYHQHU8NnKgipGRdnNu9xJxLgW3BSE8GR46kTvgerefKJMZATe7vgxWrkdB",
  "key27": "4WAdkpfwTBtHXu8eWakCx6WkjaXSskdrXnvC2yW8p5VmQVoyzZ1AdouipNuG4C4RMoMPbU8BasdpJKykQWRrW5h3",
  "key28": "BBrcVcwZyEiqoZzfeJNMzWXb8Un8vtqDNAPnGmXFe8vnybXjHz2SCQsWG6DWZzWMx3FPxXv2SRWZApbefTq71jL",
  "key29": "53DN6DSmTyjaCqfmx5UT8g2PaYbChuNi9AnEgotr7frqUxfyBpoZGUZS8P2nLbbYiQeU3Jv54N7PW9ku9UcJ22tE",
  "key30": "4J6PtiKmH2VExsidJGcSkyD4gtmy81d147yCsJM4k4LjHxd2QHnxpvJEz9TrgLj7YDqPaDisUtWbNine9NAz8hu9",
  "key31": "3Qdw5bUNcamYoUN56wwdboPw4eZRMeZb3RjZA8GMUwdqSRn4BuetuYKWPXaZUMmydnj1TAw1fxxzzEPCuJ6Kpufo",
  "key32": "4kab69nnZb6ymA3XoYH8n3d2xvwwi8dkkZEpTufjQTge5dX5Vi4NGdDjR5YGhubjecPML3j8HTPqtugg4WYtWnjN",
  "key33": "2d9Rod4Tp5EgoprdZkv8iPGKeWfd3jKkX9kjSPftNya37mgzuV76aoQCYYsfgsTxbPJMwpcwRodSs5GJJPH2R9ZX",
  "key34": "5qRspZmLKH5Zbngt1FEjFKHyiVqR8xaNKb7kX36kcV9FpADuqhMGAbBtxPkidS6aJ7JBv4M9FmtsmVJ3sESsdF3E",
  "key35": "63eW1S2bNXPEvohuBqCbWxZCTZQ3T15xbr4Kdr91zr8rr7icg25PhMtcpFCsosDVCVcyT8wkpkCrvQA6LPiCNASy",
  "key36": "5SeBXq2VahNQg9sw1pqA4WCqtJrMxpLadsHpkwUDPvEPxaL3vRHhMqD8SXDfeXjawW3MBT5Dtg2vfCit59qPZezd",
  "key37": "3yqvWNaT2tfwwgaSw84qKJdfiZsxwyaVQdgePPbkxf2maUn5rsib76MartktSW6U5YjPjwNVkZXEkuK2ikH9ysf2",
  "key38": "5L6pHZmae7JpJ2swGhVPSNTbrJvGzrEkrpCv1xYHNbM5r5HLteVW3EF3CjCGYLeQ3y9Fs6pyYkvEo9pmkTXZw1ej",
  "key39": "479v4H3fhrsEW3BwbBjRKguWpdBTS4h8kb1j3S3jkwn15sC33H4MZByEMQQr37uT5Y3vT7Pg9rgiGvh5wDAeKAvx",
  "key40": "3zYURvzgswNtPKpwrvbvQggbSigG8r3pCrVA5t2QvXRSXtFDcYXYRgH32xTmPgx7K3YfoiXt8MF66rGo3uftTGwt",
  "key41": "4P3zppTKZXePMbzn2HDgLyEW4g4k1xGP5RoeaEyw2ApsQBfxqAMYPZ5MWuhqiCCBQZaQjWuCYWWDZCQdcvQ3jASF",
  "key42": "5aFTSydvYJULNpbfuz8E2vA714jMp3dAdwMq1mm4PoVDjUSJvApz2kXpSeJFcVkch8HMwa6g9HQzzLJuzTQbHD6H",
  "key43": "AUXVaB3fnuxsPQybxeHLw3H2EfQKf4BuCkNfJevxmXJU1mfMzxpCJDLvzjRztDjRHgLMWuVSMgBhEBtxN2tuYL1",
  "key44": "3c14hsFY2HyGFrZBL56wUkwxUiCm73bwjMNfceT5jLb5zuatPDAnQPKXPqBHp5WWvPY5kkAiRN7v6q7HQTF46ePa",
  "key45": "27yRfyGdxYNpd6xmZvAdqFtvDFjSfuRJJXpKAUKrHC3qudtKAtWkweAvwc83gkUs4dG4RWv431CRVeDo3YrxZuvR",
  "key46": "3u5Kq7ca5Aioi4rKfmQs8rnNTofqX3Z8Y2ZD8Cn4TGHy2dnvqr69RDCyzTokYwTkPYZAfdc6C1KXPH95xE5fEHrZ",
  "key47": "4AHFkDuitkScFBG6oQTxQp7dPEdmwJgeTDXSHaAuzT4qMUR7dQQ4ftjdp3uvSucuRqqjtnUHyEU6nLboJKkcQVJo",
  "key48": "3ZeeT14rJHZoYhXdrQ2aW4gFgGkhmURW5noFoJw7o5qidj6gtXzGecYrATfmRM28VaZ7TmUgHHdpU7MEtrjo5aA9"
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
