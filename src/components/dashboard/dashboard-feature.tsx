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
    "4ZQyGaWnfzeJwQ8jekFxgQSh3kH4QTHkkH1HRQqkir6p3TDNxuY4a8ssj9nH8U2fwRwYBJN9VFoKsiEHpvPRVHZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLkC18fhpDxTvdeAGTsJD74H6LarBTNJ3WmfXn3emZ6JM8LJytGABRubDAQjzAtXirAuEn2tCiJKAAtrqWBNduX",
  "key1": "3XxfZ3wep4TKxmvgULgJf7YfUYgFZMjY7v6ybj166EEPEoepPciJ9RZTNhDd85gx5y6PVvDNEukZ6HWZQ59Piz4e",
  "key2": "2arzm5wiRgzCGfHaXafUZtf91LMaKkw6aqKjbXAb5kVKoy1oq2NDWUrPSnhodPSLqSqSJKfVBZEwboUVnMxRKYRK",
  "key3": "2tx2xzWu9wwfRbBKpGqKVF1GLdoVFSpdNyCDeTsPv5tPM8R9FixSoemtMJYbwKHdAZWTAWYz4XHbGHzFKFHE6UVQ",
  "key4": "3kw4Su2jAXP5KjgJyogYtqFkSUfxVnHLbQm3S3d8xi4uvpKxtW65aDgEokNHUZDPcCgqxaYdHTuuWHLR8avyJBa9",
  "key5": "wV6N8VbaTqPsDqJocHXutoshsDsjR2DGPUo8oxDEzV1r4CrmHkQfVotcUe3G7ocK9yLyKM6QaZmb78PeXwLVy5Z",
  "key6": "2DqCcuPtxW1bS51SMGvpxam3wNRTLqpdVufr7H1EcBWByQ7QiMxJckw4D77tLF7VFxC6GGoFFbcN9WBmM33YfzSQ",
  "key7": "2RAqXxzTubQjeuLCoYxTeHi1vgE4zZWSkwXX4juAzDuCbdzTJNXCzKZEvYY1uxo5dTFjSiTbYxzo3jSTUR6YbVxz",
  "key8": "5HJJCo6gPRCHesEsrcAXEwzGh3sZiyAHjLMEp1dqYybkYTMCHQicAPi6LHpJSJEQb6G37iZiEjiJj62AmLfeMxHR",
  "key9": "md5JVEWHNhTc63YjoiUDcUFtX5R1C4AtMoxSN6Nu5oFPLH9bD7J5ztwjBgk18vEJpb3maW4t54Ye5121pLAhXwt",
  "key10": "2urFjDBVT1GQMS426Lq36x3S2NUyw4Uhn5r4U8v5iMR7gDfVzS2RmX7YVERn4RuFqdqJWZkonSEpsi5kWCyzAsGp",
  "key11": "4xCg3JXS5JHD7k67YpUyqSxtmxyN5ud2Le2pjKMsCHtQTBGjajzvZ29WXAZxaHA6ejsW1UsroHjfzPTUue3o4xdH",
  "key12": "2RsTKSiaAyRYENiENRZquUmHsX1jXLbPfgQmqrzEoPsfuEVPczyFUcvJACKeygporWsDqtBWtYE87ForKVmqpriG",
  "key13": "P9Yj9Qn3urTQWqzhCLx9pjeLggDW2Y3JWs9NJ7sjSk3qU1wqYVW6HHENmBT7YvMaBdShnTQnPq5MNEpFD1hiR5y",
  "key14": "4UtLvQsaDBqeZiRa7MfqUpEcndF7r18YTptx7Y8EtyMuDXU6fXAAqqq6VecTHzUUMpu4VyRYYsD3Zd5KL9mETQ9A",
  "key15": "48NWhdiFDLcYB3ui8jXf8kUqN1JD2svFpVRQARXWGdbtS1EmHHCP58GuihVvRafW1TX5nN1BUKrHP1F3AzLefJfP",
  "key16": "4iPANT66JQARZLf7kSQrSj5qK5jNtvy6B3uhiE19961G6MWkYaCAp9HfKg9b7T9ZCBBMiQuDDXJeLA4EcK3bKZZZ",
  "key17": "2o1nNfARbtB2ddqqVgj4YjbcERNXAcuSzNqT5e1xfAwQkQeFVdqUU8zsCK2ciMyUpwP7uHByjVrFqX9NpChcDVwa",
  "key18": "65ADRPfH5kQc7LCMDyAcNUghudTR6PhyV4Dz3XM6aeik5tNLawNjpcjUpqkcwZRSwcJ6EZyt3PW3BMstCnSSEHK3",
  "key19": "5Wrfi8LZdKeHpmVG9ecEgdVrGSX2Ps8JUoHFTvKZF72Jyy8CANoycqPBRHu6KsTGuQ14MX8qpc4jwp9VmTVZUZAt",
  "key20": "4F1SByXV3jZVuB1a4Hk3wTBMzFAs5YkMvGb4fkXxycCKk8EhQFB1BTRxqvCuVkRDMmnxBeCYifomUKiYXdMjDimg",
  "key21": "51ZAVMxvM7etKLqYZfWDGWHnxDCke1gKtez4Hw61qjZeU6q5GJxBs5vV5Lz4EAhdGXhKAxZVwv9nXLW89F2VgBYR",
  "key22": "2mZ4oydEEHswdbNXcktC6p2jq2PF5FtZgjqokh2Fv6rEkFDW5ekoAgHUpBaxtJBfoBNLZEHSesRH5RgFwniC9vcf",
  "key23": "2kRtAE3wX1V297AbwAnZ4WqdMJtaekK688nnyTENZvwb5tskbaD7L83wQJU48thUQeVqWbJox2u4R2WyTARFTynj",
  "key24": "4Rxgsuna54Q5FLqAs4FihtVkg7eab8apqffeNtewqix3Pt8AXpULcbVtgy7DtQ2Twm6xyCnR9hyx8edikyiPJQGF",
  "key25": "31eQipKiSPuXHTeGheD49hzQViPRjo1v3XvLdrXwUi3DiQqoJU1dw3kzhzN3fMZbuWsswAh8sfd1YMirRGC2Ekcd",
  "key26": "4hVAb8WWfThe73TqgzsPEwSma4mJoPPuHRaEMyQ4V4xHAJokNNHJ1xbrBpdZy2xXjaqnBnRLJQEQ1B3y4iFjbLm5",
  "key27": "rLMhaQTHzpb4Nbgy1EAdbiKKM3VhfmeUg1YgmtqsqusomR82yUm3w3zSrYo3AZfbdYw6WHqnQTdotUZYFroNQAE",
  "key28": "5YVTkpBdyaixC5AE79np3cjk12DFFTR8HZexY56GDUN8fn2KT5zHjjjnBPtunZRumDz8w9ecA5aTq722SJgn1do2"
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
