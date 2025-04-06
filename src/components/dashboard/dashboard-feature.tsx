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
    "21mdG48Rj1uko6sSgRW4ThESK9vdCj7QFxdyTxsTsZav4Tyt15uiLFv2spyTZx77rEoHs4o8YUtcFbjBF1mwbebh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtYUFTUz1X17qZRvt1ohGv9qPk9tYc5LU7NcFFVQekfdKZeJ9FKkL9DQNjQo96U3sTC8a4pxcFUGn4nGeXGewqo",
  "key1": "33Nh8VibJmbm3xNupHkTHTVw28VFqxvG3dNqJgCT1m7ctzcQNPDmkD8PULApwVnoJstFKX9uaZHmVZMaH516B5Yv",
  "key2": "5kmunTSeD12xDBpDMZtSj8icPxXtpHmbmVHzTQCxMb4MvUKXFJHPMtYGyQDi381ahyBAjJnAcXKihZGEpfRbtBkb",
  "key3": "3TyC8x3txL23T9QAvLVCrkMhkXmXTQDcpPb8dm6XSZ8KubDP5jFWCbYtio8G5ZrW4QLXzRXhWRJr8L5YVRnksRbz",
  "key4": "BuzumpVhpFPTwSLVjCApHkgN77xpANvRisVnhz6TR6onPSvaUw9XBHaFyrQ19DuwCL81exo9M4waNAZkQMbyuf3",
  "key5": "35ZH7ZpdYek3V5KmiWdXJYjfbuEkjE3u81FwrfseEQyr3P9VDdYYkxLfTMmwh1PJxHR1whgQTTdnvJp2WCcJJktz",
  "key6": "3ArmjxFKEp3HxjMqVpfeXWh3fEDVZTepoks4BNz9WXZUi6aG288MKpuuQB54EpWFVXUGcCZnue4oS39MT1TmEfhA",
  "key7": "4ciWGABMLQzJk2BmEnGjU5XrwXnzjFbUqFdiHniKc4Ay8sANCPHHQRKK1kvmZHAg7AtQ9LTMAkFhmjhavPNKt2VA",
  "key8": "2xnHm8ke1F7fKVUezQT4HN1fhdhyQfPNRfH8C3t7Mt9k5ekntVEpLenBiSspQYbj5CjJ8ifV6MVW9wAyBLfN7hGF",
  "key9": "4NdS2nutdB4zpRqfSRjrFtzEQiJfW8y4f9BhuBNjD2ZtqxShRcYr6g5UD9u1KQe4ujTka8Uanhao9spJee6LJF4k",
  "key10": "XuMf9jHGZSXFD1rWydw9NT9ALyqSruFh3g5nJR89AFftebAyu2D2Cru4ew6pjQjgKWstgrEW1Kxymr2NC1qdCKM",
  "key11": "51HktyfzzgP6z5nBio5QUdp6EC6JNRNarAsnv3m1ryWrW2f6ZKzgu7kcsDGSeEQm87G9WQKM1dir7McrnFDjPuCy",
  "key12": "2s6fqQjnxCXiNS9Q7gbimDaai1cgBS6CgaaSyytSuUbw7u4BVhB3DbC5Z6xCnAwJbDsWGn3o1njSaR9yLqgZo5Pt",
  "key13": "4QsbL7RYiCV9mDr33xhJXZTkBqmVLVe53TqwtR6WY9h1bKqJn2Ey6Moc3NduW8XL5Jx3hEFWti2LAYbN7adChc2f",
  "key14": "3HAivpM5hkmo2tzaytZyPNXZtmbStLHEjQC7vcrmRcUytvttjDQirWkjmi52eSFUWSPY3qwV3GUc54zwB18vwLSQ",
  "key15": "4de8wYt43xwPNiSPyvJ4PxpBa9wX7QT7ySYPtm23RQ3iw19d5dLwJQa2KHBZnPhbhNrYQoB7f5DDLXv37pR8ZQXZ",
  "key16": "5FjpZtgoJKKqJNn5nPg3y5sJNonT8npDMGwuoWddv8yLaPZMbXPi3GHYgijDZewfa8gCHun9ZKR4vUa74gueDwG3",
  "key17": "4fuvHM5mDnxp4cSGVzcHRUoMpto2C2s6wbotHm82TvVfF4uB5PJ4264qufbgtVACgQoBkkWzEeZaPaeg7nwQMEUg",
  "key18": "3BsN6KtpthcBtM7KuCzgQTxKMFE5qgZHr3tm9LNCkkcu45PYLhCdAhjU1HmBwWKRAzrVdZfZ3axGLeq7WqLhuyT7",
  "key19": "TzXJUFwzr8sxmC4E5spAvvrHrs8pQshssuG8YaeQgKCtz3QKy8fLYb5iaTe22F9sM4aM2RhykVDpr7e2TXQ75nP",
  "key20": "4VoX15VGPqgpfAjQpyjPqgYdVmSt9Qott6yUn9C8PbfPPsMUDAHsH3kaxeVjCmvpvSfsb1bsALJG6WpP2RV1U7q3",
  "key21": "24vrQZDxp2u6sEXM3QyhkiuPWZodnEeWiPUh5p5KghW6z9wBEbJLtykt5cXhinksfg3Pde5cubG6xKAAHtCfUC7p",
  "key22": "5kqZJqhSmPXChazmMnHdvKMhBvXfvGVD8ohJXuRkEavqKei7VtC2qcgM2NNmscATXF4Q55H1tKJ8k4P9wdgcZNVe",
  "key23": "2PyjhmuvvkXYy1Qi6rDrCC5sjR7JfEyP1oxEm14dxFeHFAaFjctr6A2CUoHhwbNKQvj22RSTVK6toBGHF71jLFdV",
  "key24": "2ywkinfSARhJ5r5NEAyxKiQ2wVMmfGEmskj4KaSa9231K2GCTqndddiYRFtateopeAkTnmmsLAry1eDXoktXuEY9",
  "key25": "3iX4WfRTDSftur2GUFJPU7AVFRGsUqnEdCSkc12N6n2aAgx8DCKzUDYKUR4pQDK43XL8yLcgdBmkcKJ7UsShKEqq",
  "key26": "2MyDqXZeXwxYa9adetUUU41R1pbMGG6sE4sbkV4thoAtKGxpg3YDYPA8bYpfab2BiXTq9HrQzifkJQa2J1x8HtoZ",
  "key27": "4776L7nCdZmV86PDRQYbri2Kdn78Yh3qyktRMrGuKMVRRmaXPt4hxX4gfZNLw2EzyRoukcXFSGisFy9kxaz4uweg",
  "key28": "57XAGg6P6XMTQPRqsd2db47WYgCRJD5V7LFVsCpH7wrLg1sjGmnn1Uh3BZVU7M7cvp4XdBbVXbjVcDruLJgC7mrp",
  "key29": "13dGYWoSnDTyaRoQtCaSzKfYuHt2ruqVHQfV3AvZukzYbGmdGrB4XwFeUq2hrsLLSCAHPQoo7ibx8dW1ypdtg2U",
  "key30": "5Weqh91VSEXeDCk9jVipeSyULSvXcJWWiN9jPrPCXZ6TJ9VUCXYxVpEn8q2RfC5t85qJ3EPHbBd6rmtCKwtKipem",
  "key31": "51CnjGTWAipvX2NxhWNdm7UUh5rpeQEYPXZJNHmbXpys4KdAxSzUoVuGqxcFYwZXC7eXVHE3kvBwMrLZSuGiiCjs",
  "key32": "1TMqbS7c5tC97h42gvGpUQCg55kppugdYEBkUyHg47vU9djZ7bem8ZwbWnuLQZeYKDMZ3QE8JZkynMQved8AFpD",
  "key33": "65xPJ33H1UieDk9t8BFxEV6wV66eFf5z8kC1vAFenknjkA4zsYd5RK9kjfGnCzne8ef3WEpUrbHSaygnU2NDPTZE",
  "key34": "4o4JTvrV9WQmcmUoDaeAAEpwYudp3NtkrJXqTDbHD1UiGmMS15Yg96WQAR6E5UxJzTTLaVwfqTAiARGPappy8CYA",
  "key35": "2c6m1VeE6hQf8YSwHhWp7Ef6QhiBq31QGq1JP136H19qfTgcVSDmy7s6QouG5p3nkTnpKvHwHhghGPcvih8LyvQT",
  "key36": "5yjVCVosveJ58yvmVYYNFsdpnAmWJpAyJENNqbq8hwjRD5H23ECz6BtVN3gms2J5rDnr47HexPvjaqCqmMCFeqCJ",
  "key37": "38gXciQprqq33FiCtkRHteboR6GUzPFSfDGBxCiMAmdrkqjvZfEmcGJ5ssU7gBsGYGzjbKZhhYGaFT2HTo7ip899",
  "key38": "22r4qYQWgndgjkJMzxWuzHgo9NrBqX8sdmHN9cq6F3q5tnP451RWy2zoHxo6kvwmfSprGn26N8mFjTjLvxnwLk9c",
  "key39": "48qDFgCitA1a2Z8cbnCAQi8Jo8W6o19fsyrsv74KSfhHy4wVNdRdR5QocAEWXu4WSx3mG382rXwaevRf7igcM2Vj",
  "key40": "V2W2QJNw6pBqQ2m5EtNEEHz67McwagHDqhvcGuyL1CNxEzyn4AJN9WkuTXd5SePeTKT9o15CxrFHMsQfBXJiMCW",
  "key41": "51pvMhhXyF2DPpxZjbQ24hn5Gbhvwsv4MFX6pkVtnPJh1N1HgPvDyT5c57KMzg5nCJ8JujFRSdHBMzKqUVULuGFH",
  "key42": "3dcus2M4Z4h8ispjqR4ezb5ZbrxcUxXVJEL4LFJzPUtEhNwFDZvf3emXLGpQmYtUVckr4Dghc9xSby9yH1hepNk5",
  "key43": "39HQ38b4pk8XJ4pU4fAALb8oEgGTfpnBWKQLaBv25rd2tRQTKJDwdJdp9VFaZBjjfRF6sc9rdPuPSot8d7yShTdW",
  "key44": "4eaViLYeGa5m3e8vTRGfVbhSDrSAaMwH8H1rMFc8u7qatjoLRmCVttMXZjzZUddjRL34PjUuUqgJWaGvVYAQurjf",
  "key45": "2mAuWxzrpcZAAwc7o9uTQe9GU4QKSMnXoAsQ2p98YQ5jHeg8kfuCFgRe1GWyZ3zdrSoAY9SPfqX7AN51NY6kpjNm",
  "key46": "524fTYxPX11DnhohjU8E5AfprUtEfQcs939gKtonP7Ni11Xx84NGQahJKoR1TK1j7mWHEUmQdMJ9KqrKRkJKocDF",
  "key47": "3jx1v86xPXMpWdMr8T2F39xsTjpvgpcZUpYDXa7DGkdHoxuwmG7MWcM1aKAQNcgQjgZF8vH9n7q2VzuqGdsWbHMi",
  "key48": "27QnWpifzsUypXKYdK5y2yVU3XNdabBZmPBjxx4XqhLcaGRwzunWpHgztdyUtdtYMCTF11xG2H3Ni1UrhSywVXoW"
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
