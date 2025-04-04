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
    "6gus9YqjFpJy3hQY5gf8zZe2o8WLzaKALKwn27ncXGWBpGH5BZZaxR54VnzSre3ohNAGWxmLEbJqxgokeNUwh4R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kPGAsDVKtZzWoaaqvQAGb5XBYiT7bgXzxXbgyLkbExZ6YnFkizaLrNS5BspSBFqzyBHXRLZaKJEXvQxffYE3iuX",
  "key1": "2S9VA6VjfhBbri4b4eXKF9dCkm7Enef12ojirD9ACaqQVLsZZMMNnH8jSSDR3GGxhK6NeAQyKRcPtiYA7YAhcgnY",
  "key2": "55BFFZrGTeYXB6dyJkkmnnaFBGnv9KBkpfLaHwm5pkQybPPxjqPWc5jh7QLWnKsX1rpfcooF7T8K19Qt4E1z4eFi",
  "key3": "5r21gXwi5TW7iJ7hc3q7o7wbDiDQZaSKb3ZrP8Ug21yVi7wjdW2iXhr2yzezvqPKuHyAFNEA2eiLFoN7bxWDgmux",
  "key4": "BaKmVAYYMkpv3wxQ94uW3e3HrB82bzYSQ6uFJkwaD5g8gAdsdKnziq1DmZ8GyEFY8EnWTaAjSZf3eyQGNUqZ2Am",
  "key5": "31Fd3Biqy1iTfekfGMDPsY9kjmoPYK9AkTJAD7xLVcB3adcmg9yJ2fG3j4dCiXera5e29oSLCZRUhapQ7xGPksTN",
  "key6": "4vMMF8jQmQzztWZ6k9uDFCVq5k9Bo32YmDPDLd5xzfMr2TkseuetVnDPazSdntBHgnqBB1Ns6LBRVnj9LX8bnQxh",
  "key7": "37uiREZd9mqw2zTiDaWRogHhaXVKaix2bpST3eHRmdpCSLj7PetAn1wJYK7Ainu51kErGgg3UXZgiQHZAcyBVdUM",
  "key8": "5mQTy44J9YrWQg8MxRt4LcmhiK85aQccQH9bVWSzonW3vXKh32wxcNDARczDMDStNr1xWNBU5W1hAEP18XiJYt2V",
  "key9": "39oqyZAJ6pSypLXmCSZiRxHvszoLCWYYGWAzr55cqBYKDghwxcQ3CLkA4MCzTzGypaj1jw9CiUNA74McwCC2AjPD",
  "key10": "31v6wXLJaeFeBug2SjvxeuiRb3V17sXtARepbGERYpWKRQdVayxhuYxTfgBP6SMysgQMNLVMTCaMMwGWKiWzikM2",
  "key11": "4n5vuyaFWgvkL39PThRvtWoHGmqAPCbP3H722gFBkR4XNpuZ25mDV9YffvN6ouj1UN8xEhBg8BUJzw41LMeGhK1A",
  "key12": "zGJfvo8RSbMZPCfnDTpDswjTkNGrLzcSC5T3oP5YBz8ecsfEJE2zL7WG4HSQ1sYba7F9kuMqwLQhSTYN1YUjiwn",
  "key13": "3peMqhK7rwqUq8NJkKGapVoBcJAT29yF9fFnzzkWpmj1wKXYxHooPVPGtFwF1H38vPg7CSJyQd7vYEpRdsay94ie",
  "key14": "JYQg53VaqtAuvFzKnseegHnWcCc4H9xh9utce96UbRzpHY8u4YK4fgo6z1nuzx5DemZjCd9db26w4ttP6j3pma9",
  "key15": "QKAvVJCKdgA9ZQNzaQfds7cvotv7sZ6NCumLKoF8hwdS9cQd8nwgWTXoJKizBsE8AGDmUcALdox2rr61grn7Him",
  "key16": "4P6niERkfcq962iwj6CCwYKSgXB6zsb14pdyUhPHCAgRTcuok3Px3qvazyKkTJ9LB5SZv5yQyBuH2isJhXdGPCEi",
  "key17": "4Ty2D9KQR83NmzVEyLF9tavbjJE3GtvzHLtAm6Js9ZSTQegvzKVbuvMjWUWQAZo1MpLwjxi5XYywAs86G5PdJ6fM",
  "key18": "5wAX2fNcsFF3fd5ZdwNwbaTGpHjzeDnjt1QpnW7xSgKZWG51hGPvXh9oU6MWdPg55MbCjYrC7c4KX7BmkAKWEA8s",
  "key19": "5Qr9nSsNYKFr419sTGb3hGYs4X7ZAy2em329avnRdAwHsJRKa2FmAsERgM1wNtrGXiS4sgxzpZ6nKFwRvLHiuzpc",
  "key20": "qub3tX5MtHMGit4Au6gS91m3oFYepK6GdorbsmVoV8HjoWbLKyYkAHqT6keSti1MF9rT9BK5CgvaaHi3YcRi4Ha",
  "key21": "3Ck7k9zprW6mUyZ6kmACA2xM3C5YFTneHxJwyRA8XbNA5pLVMUe47XKLVk5DfD2nWwMjBsGnkru4f8FgoKruoquf",
  "key22": "235dsiZVo7tCsmn6WqhiuVyUAR1VZ5Z8MJqvBdT9VCUKd3Uqv1iJoW5FyX8mrBw4RonSTnpzumTEoCbsX2rTpsef",
  "key23": "4oWaH9dyD8rBpNFaeA5GiPXnTF2SDw5o2uguHKjsJaqtcfqjFczxcD7PcLsPjJ78HdjZqXbAUjQRx9ymH2haVgay",
  "key24": "4z4yJNs51aVSbQnTtqiJA6r6b6PUS628zqnMDRbZHDg2gfdWYFCnVpVbhxgzAYUpCsPXyKdWdSkfULTXMms3dxKm",
  "key25": "2fHtdostrQZPvhQUQtuZZc2DmJMQzN7eguPuwbR13uLgZnEAcyavmcvHmmhrbfFgoeQmGi8ayCNfRHaVsKUSbAcU",
  "key26": "3a3Zt4QsCHzA1X9BbeGPpkPQ9EhL6k66NgwpCDn8hb8PfJnddfpFBnmpS6aTT9KD7z6gECJrd8gwEHNLvjkcSPhR",
  "key27": "5P63NW8ZVBmFZepT5UxA2UuBfXytouJHYi7MSnzCRd9AntmitgYiz2MZ6kWLnmGpxKbsZMesxc35iAiWFh2jfqdh",
  "key28": "2USeSMJ43sx74sneweFZJRooF34RBHDSQkByuWVXFRuS6tuBjKex5eFxNCbZ7uzmADARgZPRFW8nPazK293vnDSx",
  "key29": "3r7jhYgDuzDuhwn4iaLpMijbBjq86L4L3sMMiCjr1hEcC16c9zjJPxmug89oekgR7ieQmbmvYsEsgniYamCc9qob",
  "key30": "5PCcAw8axckQPSSma9CDEipv6UUxGZro9TLgewQfoRmxgP4SW1tTy6ymqiHDKtszo8KvCTQQAtNmDiB1aWj6iZAZ",
  "key31": "451R7R2jGQAcrLsenubTdVLFcB1TCijtscy9nuB5ZtGAKxkmUtLxACxMuR3KzPFy1EEg66ZhUpvdVY1UiF5QADLr",
  "key32": "5dfGyuVuk2o2SjtyLYefbPw5sj3wHdwfFNHSaDETccJgHoScDEckPe7DujvHeJqZwWoYEDXSuKoUqa2tHPMfMKid",
  "key33": "31ZZXvCh5qMeJFEjb8i2BCFoWiEnvkYitB7FXr1P3RuHniY96CfVZ11YadvvMmtoRYNiJNuGrH6CCQ44ycmQpwPU",
  "key34": "4K3gMTqQEkYeu2JRRQzf2B7CcEmCT1rZgfM19n5YRWx8Uyvkmuo14xkivBG9GfrbknjYF7VwJfj5e4ZKK69SYkUE",
  "key35": "32Dufgwt8Kb9FFD8B44HsdDRu6HzXPBsvMjgQAAFZzcnQR5ausvbC7T3veFWEdmx9mckdisB1BgN7DUa9z35L1VR",
  "key36": "25CprncCbCq5ZTP918v7xjYEbLkSr2MeanjUF3n8qS6UXJf1Pn6zkzsEHiJHMY6Scut8FoymQ4HCzeXysxYJbwzr",
  "key37": "4As22n5eaiG2GfQ4ZJdZ7VB7jjUPb4pHRfotEUobNTokmqpbJyJXtnqivKbcPPxTojZc9mscn3smGFDLAKDyjc2V",
  "key38": "2ofAfaqKYRLv6SbuQEZHuAETKkp4eFc3cPsZDE8XHCdqA9yrMJ6BQqtKkt26TY4CKQEVXtDgnQ4itshqv4gVpiWh",
  "key39": "4ceWboWCLieCG3uan5AdnjrumUrge4vzCeWzjq88Q1KiG4fRvUdJw2SFfLXUGHdcVcMiHMvgofuauCynLzkMPDNz",
  "key40": "Xa4HAFDMdPas1xP5AtCEMo84g92z5BGGyDZvLtCEahhQfKwKdn6BeCM5DhjwK2grM4BYuvxPgo75Nct7g3fSgQX",
  "key41": "4u8qGBSFZfUe1Kki3zik2WkC86MMrEiYF75ygFbABJU18SLgciQJW5azcJpGTQ8ZoGFdKMzgiy55YT7CUoTfaHN1",
  "key42": "3BAtyoFYyNbrsTMxwvnTw2Niot3DqMkmEMXfWREUB3tAvN85szWHtqA1MGuhQfyep16KUDaYQryUfysKZ1vhpf1N",
  "key43": "5iyh7cvxpycj6bgi3PKz4i4KLryg1K6apW2qdDbmyYfNmmDvtGkXsS3hZ6aUiV1SyTqyHiog6sZjJ2jG7FF5bmc9",
  "key44": "3hwo4B2qBwHFdTNoKxU91KXBcECDHcaorYCaStbovyvFYyoYYkuUr6HGr1hbVFJSpigWqKqfcWBexhNMzVpghWom",
  "key45": "5AdocoM72aAm3Jka3Gh9Zgsmb7emsdqDccNm6QngrGJRiDue4TpFcgWrLKhq4siHWkHtpUCfhaGbWDZZx9gWj7vd",
  "key46": "4jXjzRg2VAHbiKoupBfgtvKcCAXR7uoENnwYczHi9Tfs7VNFfGwhpJDvJoius8XERtkJ8aA5zzAv3FzAzZRxP86k",
  "key47": "4Yx8FKvigabPLf8q2CinMrFHyPAHCBj4x4kXWSBLJZ8nNJV3U1y7JfBPUjgJ3t4PCT9bjWKQw3PuUwfFPv8ATFhW",
  "key48": "59nxAWvcoYA4TRdcNabXGy48nXF23D1NW8HPfYzGZmLd6arjA5NuA7Tummnx64aKa3ZcEE4CLzRHhJaUtNwmqELz"
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
