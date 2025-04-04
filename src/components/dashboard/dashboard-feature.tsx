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
    "2DzqEo9xXSnsGu18wEMwdG4qLDraeALQh58oAvaZgEi2hi92AJNhDpfiAnoYinsTg1VXmzZWJ792XsMqizheQqHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cMNhWLLm53kZWHmhYoneXvjAqpvrqjKBnk7nQGZYBbLsdDvY6RF6eL7DbjFSG3QuLTWmCwfXGbakc2XfZvb45me",
  "key1": "2YKvpevTWnUvjZRwUAGcMLqEHT6RoKB5T5bkPDGBTU1qDnWiKS55vZ2uh9qLmHpevNfdeLJL8LKxdjoNyEPgeHHe",
  "key2": "DRrVv8fj84vN1kDr3XivCNHJg3R4eUAcRtVYizyYSzRSszB1Cn4TjtCxiJe92BVvzjmtxxPPxsQqn8mLZJQJdzZ",
  "key3": "5aRti5bDH6P8zZ81DPeeRM2LCN1mmRM6gQoZpBbCnSmVoMhezKaPL6rUcW91BXGbCJipJ9u4zyMK4dnotAzBbRmb",
  "key4": "4xcBvDTBY8Xb2XNnVXxvK6GvEPaYuVMBFUM6ScFS3DcbsxccXxLzHiM1umZ7DNSsdrGRAzyTYG7j7UgCBA5kWfq8",
  "key5": "FYeV1pUBHUNxSAMS516ZRApLYo7srtcsWZ7JHA8EDFYLYgB4SEsHn4kzmxTTeHdVJaFNgV1MvJpVPh4VvnsyXoG",
  "key6": "38wFCHfxoF4oFfmuHhJAiurffNvxyJnP7Tg5E1K5WKbVJoZ7cfxUqadd9Y7tbwMkEvj9fVSq5MDRNYu9KPu29dNH",
  "key7": "3C55xk9g6n3gzYSejNdARpShronoJFBQpBsqR9siYbbMHF8ptXpAJdaqiYNXQLtii9SPZmThn2aUEGzmsy9qe1AG",
  "key8": "4bXHofCx31yRhggxLqxdiDi4wNeiecxELUCY5RmUqWLCBPH8GEqrB9iaR7bJfqKayZxCCHKY18LgvR2wjEa5mnF5",
  "key9": "54XuWqYbcyxT3SdNwikvM2xBEbgCNKb1ueCTMYQYEkay7kAnw1Lvvhkc2S8pjwQbhX4E8x5fynmZB3yDCLULNcUh",
  "key10": "qHMMhPZHTFT8THYV827hmbtZx1SvvVMna2S6FGRjfFqHBejHTPrd6vF7bunocJjf13fsgzcAey6vMsuURZ4QEq3",
  "key11": "28GNZbhtaVZzvsQQLiL592sGBUvmnKbZP5gj47gVwHnQgKRTiEvkPtiumUu2unsAM5ZFnKDvfoFwBUXREF3Gry2n",
  "key12": "5sn3jfw59V6zTqrzeUEiNv2MBZnSYWM6HCZh3sH3BpkwKXaRoyBm62oTgz7Vsdfcy7WhzEf1zV7jMpp72kWuEigt",
  "key13": "3bje4V4NPLjHpNeQgvG9GwFPjMcxWMLRaHpHrZ8ASSdjSsxLA22E2pRgbrmcSWvvo7iG6RUMfKFJMDg1iJdKKvi",
  "key14": "rtsDNPsqVFAwJKEsjsX9ZoAFXEvX9yiUmLrB3be6s7sWFq7ArakvMc2HC8MdUrpxdwSqTX8BP28Sz5zmowggsBE",
  "key15": "3Tv5RVLEaADCHvcJJTK4M98iKWPrdMvmvrfLRBeSN2bwmxHX4k84gvT8pYA31k2UMLuc69wQn8MsGoMjoTySwAbk",
  "key16": "4z33iAMRMvhix1rkTwTy53oQiKJu6Tu6iY4Cccmdd9jM8zJwMYEXrzNeTo3Zdeh6chQ8tU9acvRdjo8FhCFcHRTL",
  "key17": "2HRqYrN68UsTpczPnUCw7duyUtT1APA3gw2Vb16fyvbyCAYcwz4rcpooGmoJhpyzFaiiMf8sADhtzq8yTWT5Y1os",
  "key18": "4CvHxE1pBoB8N59cP7TwyvLCHfZdF1QML7FUMavoQeyucH1MSWoPrJchP1msjBrJZubKy25ieJ8YTNL2aSdyYJ8Y",
  "key19": "3VPp8kgX3AcY9wyUdYVsLFfyqKtGD6KW38gyKsGrtzE24C8poNKhT7rVMfvYeKgUejn7dWp4mbZY2NGcdWjKpCEg",
  "key20": "3CzmaxvzQfASiyz333RcAZvP6YF3agyjwTv4wRZKjFJyaFyyzNyhkj8pTtraaW68XjoUM3z28F6ce5nVdN4k9Tth",
  "key21": "5DMv79q7y1CZeiHHbWyfZT6qiQg8oj2hmFbsPACvc8CXbyj3uv52W81kGph2Kp35TLZNu2QE2VCRUeg6ZkPQnWX6",
  "key22": "ZfU3MMuESQQjj7gLo1Nn779cCn4gTHkKXWXNeHk8hn54zVybHshoQkbo4mYW7r3zQDobwqmMpDh95yBZai74CTZ",
  "key23": "3xwHFB73FoLCH3GTdDtSNJi5YKNXjsh69nBDZ68d2834i18Vs1KoJRu1opNmczWMoVBQSqe84sWdpGvx88j495HD",
  "key24": "J6tx9P7qoeH95DE9zTopxt7gfsFAowaTyG4e7Kh9LE5JuGFzSgDMZU6gDgPFR2ZA3bvZdGBVgbBpA5pvKTS3Ln8",
  "key25": "4Y8VkbBr1oZqSpxk6Uj9WTdN1MqtHXvJrgXzuvRugV8QMdWr9FKYKB8Y9pHZPBd37B7HEanmrSLQHew18nJkmEbn",
  "key26": "Xdd8z47Km3YByWUdAaJhngtH1mU2nwZ643CwyxeCjkwCpHMXMNzRfKooQgh32Z5QMQGZL5RD9QqfcPBD9vwARWt",
  "key27": "2E5D3QD4HMQAvTjpG74r15Quged3m6sqqXjCG99hdGaQ5o2q4mbYodxGayUkKrQpDHDbaZX2uSYR1XKNUCHVKcaY",
  "key28": "35zTmPxJ1dfCkxSCyeVrCjJBPLDCh3BKEQVmUQpdfhbUs7VxDNWUe3CLPbiBeyq5BSZt1R62AYVqQ9Kikjeye9Mj",
  "key29": "3H1wzj7ev7uXffQ6S9EdB123T8atU5hHrcFoDPZLpV6pW6FdcBhA6GqB7vs4WFY93b6WMTg1aCDXPQRDMq2rcBtK",
  "key30": "5hbn7Kv51jpTY2UabAJSv5MK555JJ4djMifut49pZi2A6NHJx6oY31L2G8y3duhBEGGzpjnTcqsZusXGrUCj6hsk",
  "key31": "5VWrfxYMFodmQLBpMXJ9ENqgrYWaU35d5pN6ceezCBTqXrVvrfkwS8WeHYRZVfabzC83qS5PAQJYdhooWJoogEVT",
  "key32": "ZsC1jbu9tkyfTPgk1Xr4nKeo9zThMw2Dxzwz6fZYpmZG4ofinvenGg9GmRibvF2kL76PPVKACKtayKfHrXLzyc8",
  "key33": "X1SLPoTQ8WCQKvt5zAx4QheYmxgh5LEAiWNgw4kyUMJjV57J34CfTQgicq4JzgY9jNZSAbPYJFYrALZ25rDnStR",
  "key34": "5Ssn2iVxSccRUmtAC7ckhnsNtc8vugjFvp7zwGa2YWZY85xy9f7GB9hKt7SCUBosqMkuLhMffUTdEGj78VAviiMj",
  "key35": "qDjFJZnqqFetntJeHWS9vHjR3sphtDgYkLvGGUUWsrGe6En2qtWVCZYQbE879NjkT18Z28zo3Kq3B7JbiGAKy5a",
  "key36": "qVDqurQXJvpqmKicrT4foT7f3Sn3z6Sv65FKUDMH6R9Qb96xh1BUsEvKgqnUVAXRmWvBt8V6s7dLMu6aWGXbWyn",
  "key37": "ADK4Q5uU5wKYNxwmN2Y5YjKFSfnUNAqcomgGMS4JqCdkuum4fY7kLtLC7ibamF3h93eu5bmMfXMh1pNMoCnzkVX",
  "key38": "2vACaFWDR7aGZtkgL8xc1FNfRdvZPn4u7vL3VwHjx881XG6FmNxM9dqzQq8pqD2MSwjmH6t618JAQxt92fG6mPXZ",
  "key39": "5keafh1r7B3EVc9ik3d81qe2rbXdFx1wGa5sLvevcbCkg3Pcjbt8cQm9tdCvantLudZCuqkeJ8oouuDG7qLfopky",
  "key40": "58U1fXcYqo1ifYwvDZ4zW5UMJRz53TUEhn8e8rB7ZzhChPMx5yYisdW27hDr5UEVJenQziTdd2rrKcCvLUyJ6yT7",
  "key41": "hDjLo9FLHd6id5thnAyA8kqyGwVpMHRfdy4ezfZmwUxmhYq3fW1AYn7ARTWLuHTCRLdHdBKMx9ySTmp5Qj2osXR",
  "key42": "rBAWU7Z9ui33jESmAjEuqahpN7ujMbTd1dtLDpHTGLjx6N2x1xv6B4SDmeAwTGdieK9HG9yk6yMGTJdW1BxsdpV",
  "key43": "34p6UVoxgekzU3GTGmobrwK9Q6wg2hNdGgmoRb6eCk1traqwgZLtFNeSsqd2CcK9FU4TxiYkNcY73mRpMYBRJK7H",
  "key44": "w917xcGaPPqJeBZsfP6z5hz6o1XpgP4fDDkcbEUWQ8yUGJX3t4vh1EkMjYNJRgXyv3kTTYiwmxhyTiDzKZpHpnb",
  "key45": "4benTHNsCGJaYnc4c2B7NFmitecZXE8BNEw5vvBLhpq483GT3V6Npewi2K9XjJeaPu9LEgs99uauJMjiD1AT2u2S",
  "key46": "5tD27EeqKXtiXqqYWVG51HU1PeENreZ5kTVm2qVm4vKFYCM84tvZZWBwpnovAQnmfekuD3YmRsDiqR4yju5Qatvf",
  "key47": "2U2xVydNPnMVzjbxgr9Gy4GgTn7JEeTN61a1VQR3q8fKGhgvhhHz6P7Gb2hCxweP2n8EdrKQk1aHnBAvJhkcBMDG"
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
