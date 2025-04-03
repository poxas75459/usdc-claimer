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
    "NMXtZhRGct63qFsNRk5LBWBXbPuQxFrLiiHnAiNS35ubBiauc4Esni33joPgDELqx1oEpUbVRCMyEA2KPVs3Rxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28pCP3dmGydd8sU8118QqHcozP6oPcXCbSbH9Fn9oVQR8v62hgKHjCToSR4o4gSyaZvZryGLBouX74fn8QPT5Gag",
  "key1": "4vCYWfqQnm8BFPiuupVjkkpLa7n8KS8Kpm73AJEtUNBbxFHqQgbyMujeukcomevEeqanAgEBne4srqu3h6Bnefj6",
  "key2": "45zhpAWNrFLqBzmdPAqUXv5uvMx9BB5KquEoDg44bcm4wDpuPx99ZWUbKZefwN69Sj85gcBtq4tgAreA8Uvq7cFK",
  "key3": "ZzgntyzQ8r4iZ86mcoVQP6qgeyWeJeVXLvnpRs2NJXeAC9jHcRHphje2iktucfMcMNvQS3PNpyAg2WqQaEKV65W",
  "key4": "297kcf6ovpGnV8VXpyfcLYrCaLqv3k4a6pYoXEwrWt6JPWHgXGuKFaxQiBYcLaNHoQ796tdpyyazNYBirGcm52jo",
  "key5": "6XZEyVvCCTZ3ZmoRUQF3tsYKuBAZbgkeRfb7DvXct43dTgRWPaSs7RhvHp5yEhkvQz5wtV3fLU7kYTg7QBrvk2q",
  "key6": "41KkaZvxcECemeqg8PYmQ8AZDLZVNCdbgzvUZiXZRKJQZVFPvGoo6keRBmR4UMykhxFuxzh5PJMTtpjPQZTjse4e",
  "key7": "563DPjxdmRqqiarLam53VUueA2xVdDxWUjw9G682QS1MjA4r8Xo13MTDGXox9YGrXAWLLBMhWZQj265pjP4RuuHE",
  "key8": "3b78iB4YZWTj6SDCMigAVeS7kFck17wYbpzdFemu8Bo1oKGgEkkFwozyLEBmx93WqqCL541BZaiUsuNnF26zY8UE",
  "key9": "rTeFj2sZBe2fqnPdYuVDkfFXVsZKjMncQLfXNrcE18FFgDCjw2ZpYqqf7KYY54oiWRyJcggPNonNW9tMBNkTMBC",
  "key10": "QZi6fjvMtsPaq638CJsrYLZqEKgaSPHkKJc9H82jvbDZsPmAPeSMjko7yvPcsD1Rwq49D7cwJx7YfDDP9RfdTt3",
  "key11": "2SoorB6MpascZLmEHLjZvVibjwaCZrGadpAo17D71xbMuYNPCGe7YrX92a6Sc7iAFPWf1M1EYcjPSFmWCiQtNiDJ",
  "key12": "372hSgZTMSoJjaB3PxuAQZXzCrm4ag5C3pcTERLTq4wNA7MY3Gk65tq9V2RwKRc4GoSpjBFAZ9Y9mc5JHobpeu7S",
  "key13": "3fiqRkobZ79czYAZTDS7kzkuWes74SVQgtuVbKVZE3PtR18ni3urZewWyqCGj9qpbkHmdi1JNAyvB5ja4ivMMea7",
  "key14": "47hZnHMqmkbYp6A8nK1nuQVHWzSRuWu8cYyCir8cvwiLZ7XvGYdVwSiXMXwPs3ewG5qhrLFeqyY4P8mDs5TnQK9Q",
  "key15": "2ATpbQR3zS4QYMCGPRLrmWkZQpC9oAHB9WnX1wn4JaQWA3pYt11zpxfVoXQMUVAjP2WAA8tH57bXpiWsm6aXj3X8",
  "key16": "31SVpCT6sm9nCHhfnifYX9ZFAfhpEGYxEcey3ZRKvephmRGAFf6oYrvRJE8JpLDxUZupmunxnCHBojpbB4mxVefU",
  "key17": "4aHv4sjVeHkTFiAKnyxNBHcUeJUKVzvYJqw2VNCaoBMtwhebU8QRY2BXrvwAcYawnYyLfR9uJS2Y85ijgiaF1iXh",
  "key18": "ThawqeBojsvPP5tz6ZQfKJF7yaYC8dqVvkxAhaH9jvjW1UZEQ1eBn2KwXnE661w7QrcfeCZ5irfibuyxFzPMiXr",
  "key19": "4sA98bdndpwRgLbbAn7UqUJQ753Jmogishz4qEXKiGcoEK2w1wCqGxVY2gFtv7wrxBEC5u4GkdMbFrKyQX7dJaxR",
  "key20": "4fya6zA1XktvYRnqCY78r8zrfkjkJjf5EVKYXSDeeDu8kXU4Cy4FycgVZg7NqYWwHXi7kMV9u6agx33M8MpsmPYs",
  "key21": "2esccYtYmTQg26UBAkpHPqHPAtMBDH5xswK789UL8EbDu8ffTyicFaCQJCjUTQnAx4BJAabiDDszgbUniqKTSzdi",
  "key22": "28oEGypWdnd3wG1vdNCG4X9H4dcTWoRwHMzF74ifMdqv29ApwoxWeZqdtLEy4NsysTfRy7PrDr3iNepM6ZLWHizw",
  "key23": "3YsD19izZkHmCiPNLLaSB9LGc3G4wADJ3sLK3ZnEy2QwTB8FYJsNS1F7MkcPGJJFgS1KMMcXvRs8TeDmGKZZr5ev",
  "key24": "2nksKwdXZXpzJygXSkNxMEG496QWBDRuTuRs5GFfyZkLUeWDyLWrnyR91NzPbNBG6ueUhhbH2gKKVBKwrA4UgoYE",
  "key25": "5vnxgR8ie5RL91gpCBTq7AJTij6tLbpcDf4TfdJ2SQtU79VUCdMdGQjfTfAV7Uxp5kC4aoXCyZQSdReb5vuhJQPL",
  "key26": "2Vyz9qi2m77GMeTQQCKkUSb9dHfoS8t7XAAgPYJiyDav6XmzFX4czpe8spXqSizqZZGBhzFqPpN6ro4wvHsPsx82",
  "key27": "58ZvNq3nPSSTRDyycb8pT8mCHaYtbUwhh7bM9PEXADPwgbLPCsW12tRVbfiuEooV4cT8QGB5vPADzo9atcbVQscY",
  "key28": "5Ce7Lcr4gBtzeUaUCxfwUC9UkFCQN2bvcHuW3bMUHds1HjZChZD4stBEUg9c6DrepZnngAuCzXD5xJVuoEdxHxun",
  "key29": "54Na671H9LcsiurBdXWNxeoHAAn2VVSN3vF4N3ALh6MNXt2jNq5C5miwU9qYSfyWawHE7MxfncgQv5wxZJCPvBu6",
  "key30": "3VfXDDqwEoaMo85tXSFgEERCgqoDuFdnoMYQXC3NVe2xdyuMLPxi1XKxQVmvCcECTEyTrnDaXDibkyYrjaTpBkTM",
  "key31": "4WPH2wJWi5pESfMPeXg6Wq1yQTK6MKEsUHg9vCy1N2eeLmkdyq9X8TMnKYbc9vuUCqC2bHV5NgVip7bHvjYhXYyv",
  "key32": "4KK1CmZ7KxzMQgfV3evdtvEuHWRgEBQph7B345CzxMiuJJPfphCKm3qjvY9KLhwg61bCZBZ6RxspiTTdtL2UDemt",
  "key33": "4x5fdBWDGX1FDhAuMbVVZ2fqena3Q1Jiu7U9BPo3xUMqTX4t9ZvmD4Xr8Yt3aD7nLHSpjCqgHPYVsTBy2yadTkcx",
  "key34": "qikgq17qX13c4JRLk4MWdTU3QrD1NFZSYx9eTh2gEqQkPZ3YcQjvsrKtHsRRGbdz73zY9NhtXfNJpzfHgZGrCNk",
  "key35": "4sT6myyc8NYjm4VuzZZkYqAy5s7mMDtyLJCM8Yzu7eCSY7L4JivNa15iC2bqzjmQFcMjGLoNBET97jztEqo5bXYb",
  "key36": "P1X2KKvZW85Evagpc4BNCmhj2eDm55VCMufghppKbpipyzkcvpRaFXAXDzoCfE54d8HDS3pppgJhhF2Kn7Esxf8",
  "key37": "iGfwJNSNCYAEdmFyK17XhMPCWyofbGbBF1Q2jZ579fqrmVSS3caj3LyaJ9wBTGfRLHs5JHrbKDPixzRbEExGeLF",
  "key38": "4KUjHjPtxmbimcooT3asyfP54oe4i9iXwNBymYNVBoq95DpoEziJaqRhfQaGxuoe6o4QCRBLCq1E3noLMt71g9MH",
  "key39": "2AzCzZk5Rtei6GZy2MjbHzKAZ9hjfnfVBqumRt2eVuKCcqdPHCtqEGyK1Z8j1s5JQ9GrSv8PGwrWvMZir33nXC7H",
  "key40": "4dDMxjcREtDhuQYTnbNJ6EkjSCjBx1LiiqomEu8bWYqKMPSrgFmG4biGdQaNvrXgKJLQUofub4PbA18tTFHojikb",
  "key41": "vNowR93kAy1UjaE8Ak4tpeMijT6eMG5zKw8zuZnvwxo3pQ56nNfHhE8kxU7KxruiQExCjQpcT9CSAUMJFq82dGU",
  "key42": "Lnq3TGJRhkSh3yU7d7oqdk4WxeB3CawdmzPm9eJZEqxwyZBFPcpeB3pA9GaHuQUJgyfy2GdTLEqNj42QnanEsue",
  "key43": "EnsB58NkUTfwBMqwcQhWcFTdYQUGurUMb8BQxiAT7ZTQ5BPRwEzLyx3o6mVLuEJBfNNmZaiNX9C7Tm3hBmmmvLM",
  "key44": "4zG7Npq7mRc7hzCDJqHCzC8GfhHZBqsV3tkU2LYNobKtxzdcGGR6oD93cY8Bc9zzPhm4h5R8VRWn9HmM1F9RachS",
  "key45": "2ECBCkGMA5qwRhR4FxYafCStAN9UbvewRW9bUr2tuyUK66XFdcq9oLwqw2b71xsoXRnFKUyDD1v3DdWJ1yBnrhA9",
  "key46": "3wpQcYKGVaQRL7HkP9ebaxHG3TZiSiTJurXG9cWzmdQu96dJ8yRL6Rptm15d471kbktbNtJsv3UVHMtJG3j8JChV",
  "key47": "5SesJQs5pE16PwxnQrW8gtLp4wrgpNVpbZMXdbHrMDbb2xFP8TnBpT8dM9B8PA3c8cKuwWs8EBrxi7FjT7qrBWph",
  "key48": "4tg6BWfnsvCbePAh7aHtrUuuMPpyVKabMzasFP7WHG5rYXbXBprr7FK2bhPWTxenTwbwAgEVeuNgnbmMWFhxvYev"
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
