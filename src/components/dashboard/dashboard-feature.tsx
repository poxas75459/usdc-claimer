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
    "2BrLpyYCgJpyuCKuKxcWshLZSjC2N5CNRWLkmWqpsiPLDmdhebX67bB2h6mzonJMtZiCHnqBRQRks59QGDyumfgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCzLC1DxtpMUzLg8REAXeCpTMK94t25PJy1DDGkX5evroBTKhELz932sjUdevH99NUJL4fuQTDKsrRj2Hga44Kq",
  "key1": "44EuG8Gcx4KnTwZ7cjGoo646Uv35qErboKj3ZyDnf9iRVp4DMSuV3qX5GMWaEqG4dDTER3ui7T2HxKtjYiK2hYLW",
  "key2": "58JEgNpn8QqdhYQ6jTUhyU1DFLyeaJURb3XXN6wbrjaX8X8upMeGY7o7pN4zBo2CS47MmV68WUf5gWdAretNfuZD",
  "key3": "4rnU32svKY8kXXTSCm1Di2X5jykMPgDJYaUCQpAjCAbRBCitifSR8fDxiQYN73ahPWowELc8QgLxJhgquG3gFehw",
  "key4": "3P7AaqA3493LAejAPGoPuSV3LF8gQNmxd7pprgt6fzNmWc5wUWLLVmmappfT3gNooceJpaBE7AY8d52fVy5bHR6u",
  "key5": "2NNhJuKsHdNnVeWjGCCfuVxEv6LeowhFkBXBCHhmKDmidGPyqPNwG9vwfthGYtCz7XNNJ1AA3fsTEx53Xpwa3LHo",
  "key6": "HuMLiEooMHBe3DKKDdQRAjUe3TxZNkzGEpTi1BrGRQEsfff2V9FDWQ7dPi7x2n6j1b3Qx6avLKcptVWBWeKJxzK",
  "key7": "3drYXiPRyuJVz8NhZgQSun78UEGkSDYKnDWGuFeRUWscRLCCxvtYWoYJQShp7zQ1fv5Nb5Vqnvi8zxStTmBGVRot",
  "key8": "5TyMYRqE6RWRbHF5hAQn4YsxMX1rcif9zordcPmTaBu4EUejDArEzpheAn6TmKBC7h6S8KUScb4a5ckJtSN9sGqn",
  "key9": "55erpMounGDCGqhd425wdX1ASuY3GXciexWxBV1jkfqXnTN4Fou4NzA3DnLfpdiqGVb5Q2QRxUVCvuGrr6Z3xkXZ",
  "key10": "4Py8TGsJgcrFjqxXx9nhnYwGFUJJn8wkdtZb5bmegCVmDZex6DmkF5w7zXt4tpqdRqgHVDZpnLyS5JG6R5q1v6it",
  "key11": "ozcSjZW6sJr3sQTfRCBEhPqzXnPxWPoaNQrz2WDEAk3iwCYSMzXYJzKR5qAd6RiQzt5iDNf6wH9MLGNub6KDuy3",
  "key12": "52AnXqvVqQ6nZ7SPnnatu5RR9sQEcypgHgLJtXnse8HKiG7wwj7Fp5dB72E8y6fX9HjimqSp4saEUEyon2NUDozN",
  "key13": "3x8Vxh5PJyQ4aFPcgwCzJPpGDUbHA3x5wM4Vo5LyArny1fhWJpBj3FFF7MyyHQVSo2hfwF4feCbsjAsTVyVT3LFB",
  "key14": "53Eo5FCqqanVVkmZ1bxKBGh4Eu8yw1wN4Xd16hYr29aJpCo33dWu2zA3A9wdnBZ6uFQNzY4Eu3m3ifcEyi4JyxKq",
  "key15": "Ntp1EK7xc3mqSb6zfiJtLHCCpctnYV6V512wKR1UsfG7y989r6UvtvGysyBkPigAghXBimnuKbVJdWRtpiNsZsf",
  "key16": "5oJmFQGja28pgivzC18E6mFrwXohDJHk1JvXu1dyGjfXyu6j8uQy7kxiAZcWMgcB7cSbxSgeLWtCum6bc5s9yUoT",
  "key17": "vvtj1YGBWqe7UVgWUvZMFpMKDAimb2Xu9vosY3o62PW2tSEQrR3wMHfTsyegGnWMmt9CUkecYqT8geKrCBFPNEc",
  "key18": "5Hpi6CHrBTkufbwrTSLntgsbavfWisE46DfxR9b98H8g9Svi1U5kVZAmwdQi29sMr3pyD9VgP3DVZUK5YnB89njk",
  "key19": "2dZj9S1NYpDQ1qnfh8CAgTfLNfpzEfqotBxZP68wPSfDoDEy7JdxDMKguAtqiA7VoPy7z2q7Ymo1PdsUS5uEK2yE",
  "key20": "2ukdUHhsdabaBywmqEVBBpa9m6Rg5AQCPyfdqAG31trg2xbAQXhw546gkDgjJdiJciscWZCeQnLos5LUoiCkJkjK",
  "key21": "5oUGm6Z5tv6Qkh5wFiuzB7dBF5nDgvQTirN1iCfQeyXUTvJ2tro6pCif2AMC3Zh2cmLNvGWm5MReHLN8Z2oWZwRB",
  "key22": "5oe6NNha1A5R3Z2ZQkS57eJzEBqtMVyzRHR3ZyhhqaHHpjwSskoiQZcZ4CYuzoCWMu8RLRBLZtix8X87k4U9q9Xr",
  "key23": "4H67ZpAVmBsGDtcUD9eHAqZcVrd2mc81rdLB7PSzN6jqQ8Q17FxGGa62vYiV86dxmC1Yo5WGhZYtWqe41vSMTTBY",
  "key24": "2A64qkjFQC894KaEv7ctGREgVkNg734jRkePszB2oceP4yvCuvnJJVefDUshtK5gLUPJ3UUAxhxSqZF8F9sjJago",
  "key25": "3SX52bdYbbNJxGCeR4o2hCU5CSLRDfspw39CMYjW1moikUZXdxcJKHLETWGbMtcvaMQteuzRRqyxxtcP6WqdFEqp",
  "key26": "2tJrM1jW7eaSMUEWkTg5ckcuicLUSAW6n75jsxWjUv9gzx86ruN3sF9x1xDsBc3aGyxtnYu3tmcP3QVkDERZGa4R",
  "key27": "3k3NbBWbmLaZeFp2kfhnXzWyxgE9ciSxfC1NgC3byUqWPV1M39ZKRu3kR961L6isQW9qj25LKaZeJGytzUxg2ZT7",
  "key28": "3qgAD9Yha7oURwEwUrTM23yGS7mgKH8p2JdTBEYBjxfUFzEX6mLHdBn5s7gGk4KHcCXzUcpExzsFMr5TYodAiYCD",
  "key29": "3hwDeB4Rhaw3dKjYWDSevUAmqBqkFQQwmTDMgEb9nZkV3gyUnbGb1Sr2Vg8LX81eNSVrVzXdVWMhqX3fWS3AUwG1",
  "key30": "5webWZx7Q51QAwVm8oK6tFLEnPkJVAuxxsPUQFYF47HYyXn5P1gshD8Gyk5havmYwZy4hBQDoYBLFonCCjPpM36P",
  "key31": "66rK6BbtFENYm1upZNRuhh7uir2vQEH9FRhoqFKMWfFVwZSK1oijcuQ2sHyH4fEyJVtSuGToLqeaBmLMMg16JZp7",
  "key32": "jSMF2cUTxtpavetYxki2N5RofiVMVrKfJCSHQArbRQLE1rb814aZGUdSSWMJGa6XsgZtJiEyMEpM7A2ozsF9DZB",
  "key33": "3ps9aEpE8CtEeTijYH9gRwb7zNEjQFUBzhdhEPtWmLSDfRZtHjY4QaFSW2mSEfNXxnkSNDdkd83CdoMyvXJf88zb",
  "key34": "4zkXHnJRSysYscDZ2Du1WXyskhwXjoPZXS5bZMzCKTP3Emuw28rcq4LFNmiQr9oAcDjHBwbUoTAxwibSEMoeQpGo",
  "key35": "56xgsqhwiydeypwAb3ZNLbMq89tcnRSoqoByHaMhmKm9vAqLcCmWQdMcMC6MYivoqe5y113sM1FBK9DntMmrifkx",
  "key36": "ofW1887EpmEL7HC4T3Rj52w1s8yFSXnTS1iJNL5GYjBBeCNJwxAAtBMX85cVdxgyJunFBncikpA93cPnwDoJ8Xz",
  "key37": "5bRJ4pz2NSYRqm1J8ZY1ywg99wYDtzL9btPfivRV894i4c6qtLsuMqcg4gPBfSp7zPGecodXXMyeAf4njwcsz6To",
  "key38": "2zh3uNjUk6MYswymWdZoPzNHYX5bhZ8gzkqT8M2urBFAo1K32d5BpTicSRNxtmmqeBwqbRybNU5NqwwiSwWRMeBB",
  "key39": "3KGpowcR26bSwzw866h7bPafS5S7xiGNzb24m8PeDvEVhzrcCQvb55KPvDZpxRuT87PDFeNCNP97r1SzCtQcEaMs",
  "key40": "57iNpTZx7oGi5WhMKwNrWvg4mLZ3Nbomk8GHrx7xkVjhgf83etrX64qrH7tZ2FrFvhaXgjHHfvjECAAVGPccMMTH",
  "key41": "2ozyEVTKf2sC7tvLktA7FNEY7VutFsndKU1iFAjVBNFxVtGjsgCfNevBVtRtWJdQD2KCqtjtSFW6NT55288n8JHN",
  "key42": "48663b229oDPt61Rc9929jJfr96PLmd25ro4AtGS1SMcmK2CrH7Nzjo2TKQ8yFmSQiqMsCMCfoFWa7Cyi551GtMQ",
  "key43": "5Y8FGpHqjQn41Xiy5Ppf5B1MtmLDZGwsdfMSAD5JENNeGTj27mQvDFoUCC7XMEGEcbR6zKDH62J6rSgUt74EkyBY",
  "key44": "Nqt7bkkUhMaQs5mJ7h99NyCN7J68cvL9FPoEQ2Hixtejd8Fy9x7EshLo3fgYJDtqDYuQf8pwrSbH6eF6tZpdvCU",
  "key45": "rxGTrY46qRJjtz2KjxkBiqU2X5381bnf8MHTHUTgBaPmNC1B6CpRBTpJ2avsnkXvyzsmK6Zqv4pAkcx2uDbGVQt",
  "key46": "3K6fCMcByHkvk1VVQ9KbQWPj4YJXBjVpTmfF7ymzMCZ9yUMNbx3RUvWJWHWapp89TW6HsLQnDD6sJHgfP7dRicvh",
  "key47": "4tj6J9Qb7M1NtrgwBH9NCGnjQKZDHbbyqd6fsRb31Ua3iDuQhJroCPxN5mPUVXZ8YVhryDCvRrLcEFgBVVURqPvv",
  "key48": "2umqXbHdSbfQHT6B1F6BomwBuwCjm8r8ffpjv77BHpQiJyAWMTdijjTmrynVctLmdd8wpqiDAURp8R8zURZrRqch",
  "key49": "2p5QXwgTsyheruU2fu6HSQDn7iCG3Jem7HADfhJjQELRSPWhoAZk6urFGZu1HkDY2dzjcx54y4vKbbh2X2Ys1YQs"
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
