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
    "41zLHswvUWgbnWcjeeqC1BTxDDeajJg7hKgrLXz6qYyGTYXbQEeDpEiXiRCidhAiqGJz6RavKYzbvk4bB643amsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NcSu7B3pWGHayaJHjrcrAaJEWqYwXFpKWCa21MY5JNvUP4vA76tKfEFPYk48NicGSMxrhaVbYHigQomniajRKC",
  "key1": "49VYeZus6ei8FwcqjhgPeFnxs3BCV3vkAxhZvjXKQFqA8rYuxXPiErB7sLuSnmE4jcWM1Neuhv1t7xfPdmk2aLBW",
  "key2": "XWa9jM6gScR9bRF6Y28xHYkZ8xSwBdXhdfcuS9KuDHPivnu8MjMqj17siFkJMNJaHYZSQCfxWkKYXjQZZy7sjje",
  "key3": "3CYwkAREPDWdGrpnp8zL7tiZC648gMeYUQwbQVe1rw6E32YpqMu4qQgXzwztoC1HrZKf8GrApAJ24VoWevgpBZ6D",
  "key4": "4r2QQ2jjzaTNoWUkecCg1MTNpW6zbU2BGpvzwUKE4DtkpxXUyHQ9shru2jeDnizE8ESALxVom9F9axHnXBmXmwQM",
  "key5": "4TtvEYnm4ioZMPBJDWNWU3yRwgYETzpFcgCsFwAocMYnGgvMT7ziZDUypp7nfauEuZSZH5YHs43FXaoERoBWRw4h",
  "key6": "2ytpX8ueUxuEQi5jtLibiNzbT398mhjBZ1KiS2gAjbmf97YZCSv4M6GkLSb1LmfKuHc8GniccXDEYVWCEFRAnLqa",
  "key7": "3K5YPVyw92ix7MvaYtfHPkYvxCi9T44rr6Zp4Y6SLgBTtj1HNRxL4pCjYC7m2VXAXH8bGeyJVMUDx3ZL8CZuivU1",
  "key8": "4x4d2X52p8wDnYinn2z5BxzFP7tcd8FpP1tnuHyRWN2fcS3stDghYD5GaJowz4iMCGKkrJXgs3WmbNeGGp8DgyiR",
  "key9": "5iRw2E8CAS6vXx2dNfb4vZno38de9MXxwM84XcQDwjd1tgAGyKrJvC51AJ7phnDwwXhcEj1G99Ac46zrABqQtaHz",
  "key10": "XkVp4RHLNQvdife2BVDyTbN8ULUMFzZLqmnY1Vqc48D3j5UhkfmDcpu2vv19reMrnDzJPsqz2JXtAAMHdUE1Yg8",
  "key11": "5rgTVtu41Ei36snm43gZkEghref1MSXP8iTEoAfcf6yM6jca9L8zuAWezR78mUkjcPE6YDKRhA84Ek5eZ55NNiqN",
  "key12": "3EyaHfnGysaPN7cY9HZJZdMUFzWvH4spAkPV5F8WUAUxqcnYA8eaNMk1rh678XwyaGHuRcAS8RZpyKpjqsMeSftt",
  "key13": "5Dc1ktnL17n4iQkPLnm1aCEJv2ezQxcqWVVpEjeRhBDEi9EVJ8sLezmdPrHDeGrJ7KmBZBwHhU9KCdH1qivysHGo",
  "key14": "5fWwiTboojeLt8P6vRYbEw98pULDsaCHrGgvbfm1JwXmYkUmiYEkvsvdKJ99QtiTFoWoTGpygVhtREm6uqo6h58e",
  "key15": "4MyHxbc6iJydjGqnSvEfFmeofv9xWKeQuacRWMknT1oMRSDqZ8Rgz94G62bvv9mutW79vTLjZpHDUQJsZFuv4qhN",
  "key16": "4iodiZXg7E9qBjVpzCR9hBgWnreGcNLHxrb4o315b8PFhGYRDc3S6nSbndetGgV6248nFnvtabAEKZY9QuehVR5J",
  "key17": "5Tep8Go3ARpZM1o1sqohMcZpEHxyhj8qVpQnxjCBVxf31JbzeNHUBG7SWiBbcKRHLM96oQvwQpnuqAshce2SWfhh",
  "key18": "38nVpLrS9u56E1CwS7ukgcXG8sf3wL3SSwsixhyvHK54ZnkhfnFcvGehspCuWHkJNRg4ZGWzRcTaZqqqgiNrohuw",
  "key19": "5sF4ZiBMitpb79TMB4drdic9frhJ7EsafkgaFF2SdxKMJNw3cnHEtsNDY2f3VUjfGqdvbVZLRup8RXqWU5jUraBb",
  "key20": "47ieDVm93ZNpU9rChj4YCT8JwLdp8aKaHQbuBY36TB9yMQ4RNuqJrjF35uXb494wWZ5eLLSg4kk5RE3Ns3vtxMkU",
  "key21": "SZQ1fuuG3J9mETWTGxuvJY8gP8zer8psBSenxbMjqsqxJJ1bQZr5QpJtE5YK6LHZh3kKLtrncgjHoBnh6kd1q7t",
  "key22": "MvVPzQ6PX7a4AQa2ovy1iM8JF5oDTfbDd47vcGGZj9MDiLux9yyDUayLRACTVb9QnoC68L94fiXmaXLpaUmaAMN",
  "key23": "3cv9cJJoVQWU9bD8iH9s1mVL7G8GombfefQYp47mHC5LQsqurU6T5LEW6FQ79seLL6Zcwji6miYaWaavYbC8Ftzi",
  "key24": "2Nri2DQjCxYUxt4eRBdPQERevZXPWsT552jYwBpnGYVHDQTzvg3HNnKpT5SJXFV3vwEWB5LfAesCcLPUMJXZBWzM",
  "key25": "tcBQ2Uwp6RSYPbASZta51erhsD9bvMUCFF79qw78fuEjM8S9VKd4D9s6WRcFPrndJY2mG3xabYnbBbrbbhgaJPJ",
  "key26": "XqumVmtHGhdFTvbgaULobdR19SGZKtXsm1abYJtmkjr3WNT5ettLSbr32fgpX9ZRVW64qsPFsg4sFrW1umveL8a",
  "key27": "669CPFfBFdwrnjDip3UTpUWAQCuvjT67Cf3SJzsKbKz4DYVTzCQvSaX2WfzhFXLgCTLkTn4AniJPKBZQ7CwiKgFR",
  "key28": "54xuTcHEf75fqHB8MpxPDRL4237WLYizMPRSZTSfczXLG2JsQTHw3bYT4Fczh83fwygHihwjAUzYkXhttedwBK8a",
  "key29": "2araJQvDycfCkEgogfTkjbAuyLGbbkyDP6LHKXrB9evyo3dx7uHzSwoi8qKoUe5ztNmN2iL7AkPheX3poHPx8Lz8",
  "key30": "45koG8nCjWAEecLYcjRVir6w6SVjGD3S4qnTxhBJ2WugaD3qjFn9Fy97KhgwFm2d4WBArD7nHkomBbyNm53mCXqQ",
  "key31": "2xc9ybcPDvEfhvJCiFznG39mNCrvBVsH5RibhT9VWHsfNW3vkvbt3ddw52gpjGdBhdFS3h1i77inHAWeeJ2eTshc",
  "key32": "dxkc7Fj2WQ9sAkrFFLcoG9NfTz72KiMQHLGs2YD7AniFTHzD2Nj3SMgnDC9kkhmLmDRXdZNH1QqxrurSFxR4WDy",
  "key33": "5GRA2vGkTXK4jWhaJMfbXJU67vd4vUXTppSDV2MAFVmNt7jM2wrCWLNJvCod6yVjPgSRsZ8UERUC4c24ruvQ2ftz",
  "key34": "54vuvn3gEw4e9BiTPzJKAwhyDWR7hmndBs9di4roM9d28tdLQrfHTgd7ZLcyRP9HYfgRjAa1M6EoSMQ21Sbmc5dh",
  "key35": "dRpY59FKySngNyvqmTCJMJmAoaRUYSbR433yf47c6MRMRSaoBwM1qfJrtuCS1kGHoPgjzzfuptmG8zfs9MLziYn",
  "key36": "5qpWqwjKU7C7QsXzA8xASK3E2e89mmN1qbFJT88jQQRryR6rBk8CFKR8QVHD8CS57giKwgLY8MQDXDKc7wtgaNYD",
  "key37": "2xHxSYYLuPubaz7kDJJPVDq4xLaSVdiyNQAtVxtAWfbt9iQJQJJ3FUxMesFoeqZePBiVkE6xRpJjoEmuLpCCgiv1",
  "key38": "2qPhSm7DrHRuh25e4gAcVr2SEmVfrZ1fejKNX35wi7b8Nsjs9EKdEkXHvNpR7x4aWCGYPKBeBw7VqhkhhBkZc3ei",
  "key39": "3YAsaiKxKbwr1ThPMqkN1Rv87Nxf3gKVwotJKzYF6prF8y6QZ6cPoyAzBSi2vVKZysgH9fpSnxXq7N8Y8YNvd5wn",
  "key40": "3wnccNkcM89Z1CpHafHibokCmYxbt18RrhRoqCZwfgUiX3D2q9Jy3DWjbByjWnnh3V2SWuL7y7TFKBUPDbzxuAQj",
  "key41": "2DFLGeC8PCCc7nMsCpbV9psfxza3eNPVZEuRotLS84SrdvBv2hF2GaWqMVjAu4LA4F3ao2LVAf9Bqq14RkK7XGZ3"
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
