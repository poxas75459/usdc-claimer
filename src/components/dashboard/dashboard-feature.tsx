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
    "3rY5zuXnUepGqebNeUAbZDYZjMViZtVgEhNrK1gLrjpvsdVD1CPU2TEe1bDQ1xT532gTedWTyDP8F3TC63ztakzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KAnkYChtJbGRVv84bduFhj63H99uEhvyu7DaZcMJvWYUyqJM8Nbb2NaXp3qejJUTn4d9F6BJNRVvtDtAJDhZ86E",
  "key1": "2EVopVQhqvnTWeecW35G2pjAQNeqAGeGAfBjmh7ZYvGwnc2McEbGyfkU9Wy3nktM15w8i9cQh14LMFr58taaiL5z",
  "key2": "epjymCazrMDrmEA22YLTsz3qDap5yKm2NgRqHoVw2sbY5zoByRwLUjPhmKor5U9vXR897spfccYyTory8ckce5s",
  "key3": "2dcN9gMBFHNH4npfV85qjWLYvHiM8bTQKs3bdGWkgMPpXeaGjGPSuMMWjhS53vef9eiusN2STd6Cu7nCMTMp3Nqe",
  "key4": "59DtbLsJz6fumV6pxn1xvHhYzdWPAzGenvr4fvANYvrMQtqg6SwvFdoqezx6TyW7xFMzg8cAWRPhPXXkoxE4xD8G",
  "key5": "EXFU8tq9ELotFbSdaJwPXvCiPhgYMdqJLWAxd2CwdcW6uR6XkSXnBE5R7ZHDMYGxy6Z5Y1qi2GiHEerQ7CiALkn",
  "key6": "2TqNvrVSNhSV5eF2ZskexDbrYYHPuEyGToK27ew8UGrBMasFjw28ozp9Q7BCqdMRAcHAaXhRs1vRRSbuQq9zsKU8",
  "key7": "57HY26drV2tDPuYqrTZQfTZsAip1ZKVTBRwA8aLaKuQYCCuxoFGfA86KKH8iGTcFynzTckGKCeJcmnPTZZNHhYnk",
  "key8": "3Vi7BneAPvzVnxm5i3gayGFc23fTn2po5MsRuRtoCrZ2LwaSF848uGuSeaqCyNLC1Xhcw1nkZqRavhrcLC4Ccye9",
  "key9": "4C3ffssD2YDMN3khaCfVm8tRrc4PjXALDteUgVHT3EeBKd1n1N4G3oGdQZV4e12icTymcZi8sAQgwhdBGhd5g9mj",
  "key10": "3BFa8g5KuBZxeb89Vck3sJ9KqfVpGMMKYfPm5H2qyxkrux6joQzwDECDtafNkow5opXxZsFYWEkeYkh9JiVj9chM",
  "key11": "4rrRLiZv83pjPyiwjDkAVK38veDZgQpTBCTDPeFHHSrghZSV9WKeGfETu3R7zb2zedvrptFUMUeBNnQhrk775nxh",
  "key12": "1fkyqxhLWFnaCpJaK2akXjiGqBeVHNJ9F6j3mSLwJ6AVrTBoLAKXftn9jAYgLTtv5sU8orM9mXbKQX2U1en2Hax",
  "key13": "3sP9MQB9hGZeRGNPUbBAQ9MxGXrMQcte4kghN7TUCNg9TDWxD3giDV5dXeunsL7ktCMN3uqzc6QUdoyB2cTm1n3W",
  "key14": "3XRBumKfQ4DLkRbiuRUJgfVeAcYSfEmZGoHgzMxnmarQjEQ6mJfcWCjWx9rhSicwe2zmk9NQKowpWWq6SBvYAtJ2",
  "key15": "5gbRotiYoC3FddWs4rK9H7jwTug9SPaTeLkbmkCyLbjqeaHoY4Y3Az3Gwotyq1Umcjd9ofLgoDfzKLmVtXXxZ4Hg",
  "key16": "67XP9pDjAx3YuvcYMvZFxNwBz5HAiqP8JnfiSkNwXDuRrmNBMaEhbyQvtjZ9ypHFzuMq1sAayT1gnT65ztVAsuqK",
  "key17": "3uKRfuDY5RKhkg7fARhzSTPNKhQKdJiwrUswoVK4bqMpBFgn3mFtowvzruTrt9RdtgS11VbrJnEGW9cYExotbweb",
  "key18": "3MsXGQPJvQiMsvqRrvLrkdyn9LrzjDqhVMuYTvtmtArtLKkfi73t5tV1KKcYPvC7XKsik8kh3fLFmmu1cge4phLA",
  "key19": "37NAwa562GXgmwfDXuPd2XqS3iUcoJNgokeWstaq8xqyouBRcWrFPGiy5W7c9JYyz7kCS2RMY5Qz1RWB6WAJgje6",
  "key20": "2ALhVjHuVCTur5Yr1WjgpfnEyssRwnhTtqmWB1UbLDpXthmaAmD2nDMJD3A8XafWvtt9bHvXg5ACP8X4Lyj9wXki",
  "key21": "4bs4LnB16SKAAPhPGbnRLtY8LCoVxfwPP2urcbSRJsFSyNv5TAAQNLkHbDbJe6fCd9egqHEorSEBkZSWgBGcWavj",
  "key22": "2vQNJUYWQ3doXxa19Eu2SPoa4EAG5yxnNrUALnC71aU6GJQmBqsZy17vzwZ97AFAYZjAngJzQyTL3noTdmiwVBur",
  "key23": "xDBfY3W4bEk3kP85xM4ksKwHUaGHpoS9Q1s1AFYq34XU1vWQBr2mZpmtQC5DedZTq3PGiGFg6Df7W6CSX5RTXB2",
  "key24": "5mTpDqBpcXZYj2wXsjpeAXpK79KLjH4SmqG9Sew7edxmnazPEvuJ6qxNgGNZqyPQ1kWfKGfTjw29XbUUcud4JDua",
  "key25": "2zuXhWhES1Daa9mEiFqwYN5gGDbcUtjaTXRciS1oGdrzG5fGLXBFk5hyjpGKbzJBGG8ubj4Cxn4S8c6jW8wTe9z5",
  "key26": "5Ahip4VGn5B5z9k6Zy4p9BNFRYNNLktaktNuSca8quQjgzD15MAvPrM7dtSwwudG6ETaEDdeLccpSYeaWJGhsM8z",
  "key27": "2xbRex92nUg9GiXttmEkCoLpcbD1S3YzH9485ru1PExFBcTANudtCRA1AaXc2TftDvts3SfXgouxThoG1xPHYQDH",
  "key28": "3p6kj9tKhnyPsTAcyxAkEJu9rqBqzudDhpjx8f6FFyJFnXd2uNMH5JZ6sEYaK2RZEn1RbyfuMwhpFQfpCmAodiJN",
  "key29": "3fs8dzZmkKB42koUw4YGbEE3eGdXcRdngSf9vKSxUsJBAcgASayjM2i4jGPBkNNYsCDUrfFZtUutyuwF4Rkk27k8",
  "key30": "2AwtrQVv1AEU2VPxsy2rXThkuJfoxrWjAggMQtnVcND2AbXhFsDMprwK9uosCqikMoKxivaja36gsVHwQNkTv7pL",
  "key31": "5SmrUb1NqrJyCjE9Zy29X3iMxCREy1G9vkY1n3N4oRyHR9BfSj3bhvMzoCcD9rZ3AhxNs3yRzcDANJTNu237sTX2",
  "key32": "CR6nmmjFRNPysa1uwNHQP1UiZqLor14M5cTbtZvvp4jbsSN9d8yL8mC5KiWXMM8AWhdQt6uu3BQagL5wNPvb6Zo",
  "key33": "2iB5ANPEtNxsQQQH5nG3sCYLofQNdjfWinwkRq1t3LPRHbYrzJiWCezJPdSpXhNfnFGRuHrcX3JDENLuL9WWZBHV",
  "key34": "3ibQYa4P1SqQx79f8QSD7J7bnFs5NVcRzGwPNgAXajk1qrX2uDxkWwTzqNSi1Ykh2KFbxuCtPUQPeKXiAaKj94Xq",
  "key35": "3uQYWcwyZKKVvUedypRSjjbAh7744XvfvBsvbt4iqSa6xQMEtLgAAgGwbskpXuWkGxbKRczQgbtLrcFa4u7GaSV9",
  "key36": "5xXmPt1MvVyTNbaaaBc5XbTf5odQBUdAEgqk5t8rNtrK68NdjTFGhyLF3ESSUdPDD9tCC3dLvCtGotf6W5uTKExu",
  "key37": "5kNcBTvDxi4i9SzPtmhbFuec3cgbZwmwoJpDiZG8ydia9Wb7FbYMEjhGJ6BRUniw1DJXEnPK5y4SmcSP4prABHer",
  "key38": "MEa6q2hhRaS8EgCFgnoxm2FWevYk9xjVJ5mJirQBJouEEfutjpngDRbb8WUW8ZmqhxQSoCViCZ8yaNfzZzLjUFS",
  "key39": "ZVbm9w2cQSKuyReqUNgZgshvmQNcfH1dakWcdGxmdxPeUX8i1TuFM71MuWEsK4HXUn1ehCqzFyo12w32Jk9CBBe",
  "key40": "2XjY8m5zCZShABLRzPRAv9QhioNGYVvNEKMqKubXpjq5gfMTnnyBCFukBAUmQNSMUf8MotUSwUs4ARE7HCV4K57p",
  "key41": "4skCkWKUYMFtmUC25LGL1GonHGrLd6LysxLxitP8cRJYb9sToSbTGu4QQvbgTPUtAXposztkX3C9dYRgeWGgwFJi",
  "key42": "M6poMSnBGQBeA9H2D3vWwi4B3NqHT9qq9bKS3naJUdsDbbyGT1dyYjgsSdmyRBfqhuMEWTiE6VREgQzkWJKgn5b",
  "key43": "5RGmwzeY9GCSgRniaLunGqpDmetDzHvV74pB3LcU1hKQmcE119BK3VM7AKPs3Zzi5UJJ8sW3o2SB9sU43FtRVZjn",
  "key44": "4yVgf999WrGpayedWa2gVZrVUiGnPCppWKGFnq9ppvuu1JfPxKgJUZXjWT1Zf7YzYCKgqMLwazaJfXzUYq8XE2rg",
  "key45": "2eNpGmnEbnbWTxpp6Q9EtJeKHVzH6VYdRhcFiWumnWtoxJYfzPWiLbfWFAkpp7ALaW6VoXezNef2Pfqz7VU5JtkL",
  "key46": "4ytXuUnBroW6Fe2noZHTs7phZqzM1zNttF1z6WtUGVx89SpKmYdrGXnA4cM97rbyqaQe6eq9bC18TrAEwkJULpXd",
  "key47": "gCdS1Ueye7EnoHN732cUmd8rxzLwL24Ym4qh8w5UekvQsxrNBxz8Dax2gCkMxamqa8tRAxK76qXMwWbLDUV6FG8"
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
