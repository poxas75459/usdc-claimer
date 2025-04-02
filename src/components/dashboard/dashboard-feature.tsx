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
    "24gBYVeDTxVPWrwowF45fXZon16bfXSD5QrCeYPgT7DfRvemCSQUKvdCCyaNojKLdjK3hGjnBTwgkxrBvyXZkgBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ta716vbtewUg8BA7uD3bVhPVo1mvFHQBUBSdG48CrK3JumeDYfgreUUizvhkqCfWtAEtrBKkcPj7oDWh27AEuo6",
  "key1": "32dkQt3qWtZNVBYerfXUULff33bYxzGQQkAbwkHMSUWt5UnSE6WNHkgYJcb1vjyJxrgmhS5HzuYsyN8QGmC6ugkN",
  "key2": "3eUMNgrXRJGJTAzwtnLpemt7VHx8AJn4vDrdatCwGffVKD5mcVHEhTVJLgSunbvhhPEDDhEmMJcgwL7gSh8GgvTE",
  "key3": "sDzknkrQThLv9JoayaYuDGL47TH7aAU4y8imaBMaVoF99iu8eezVNt6NMWtfCesoHvGiCF2F5q5QP58pRtadnAG",
  "key4": "2S9EuY39HwqX9q4ticfB1NWLfyNhKKkGZ22hxxHvvw3gfYyihe7sht2ivUQ1PFTrd6WSqmZtiPe268fimDr68hb",
  "key5": "WCoCMdZHMsFo1FmPFyvvDnM7GLMLkApUmwH7kfaNaLsTSfwX1KsBxBSsGiX2f33a5awfn3n5E39fWNTTdF3n6wB",
  "key6": "NZgBf5H9suxN3Fu3GQHBJB3mjAd5ALMXVhy3rykaasnS4PvuKHPVr7Ud4G4B99nAqEXp8kM9tytUAucM6uLFHwQ",
  "key7": "3MqEswgvRG1nL26sewrTZzs3MnZEoAJZGpHJE6ukKMXLJvZkRrsX8CZFHQ26AD9qQu9J1F4Y5xLvynJEJ49Pv7Jn",
  "key8": "2EpjbgKFY3PAvyRYksyvpERpXMVry2yzmaDgoVY637BbigmwDQm7kxeGmvf8q6yQJcifjdKKMAQYi9CdeGjeQo6A",
  "key9": "5y4aXGS2cyR9coGMpYr16vAdHg3SYzihH8j2hmVJzU26bzwSLZA8AiqDpgTaeHXL4EkhNMLZDS4GoYMxoS4AYVy4",
  "key10": "36pGZixVUe1AjF184exeAH8QyjVHtPeeshKhBEkJJgoabnc2E2Gm4obUeKBC1mUaWvN8Mfgf8r3u4ut21ePZcaq2",
  "key11": "291WSZgHzgskSyZhM3BjQ9q9xbeEfBxGY592neXtr5VprzL3QAj6TzyjWPxbYunrwqBpwhkCHHPpQDBNAWEHdD4y",
  "key12": "5VHPifaCUua9qSRfZFgQGki3pSFNmAzZekWSD9isWVr1Zxdo8BB9E834bDwGYV34ccHp8JZ9P6zMnn8D1UnauuZC",
  "key13": "4j1epMkRSNbP4jkzLcSARz7mZFymkuww9d7nFxbFksfWMZ1HgfaDeD5cXw4uzC7U4buLWBpSLoU2NPd7NB3sB7a3",
  "key14": "5fipyddp8qLii6PVguHjbo8mjo9iCPLQEVryES8w97xUr1UiCLQSQpQ6sSndjhgXMTjR1uedz47W3TNzMqC3Ehm1",
  "key15": "rZkwpoUmnSyG4VqqakfX8a2RtAEhPh6PVSpo1AGjBCX469Zf7doyncn3P6FZudJoCvFKNyEA3rvsaPLV7yMNEQe",
  "key16": "5XaJb47Gvbnr7tvyR5CDjNJKHC4EkE2fC8UvGRNnThnrNLgsMHQjvPpNg3XT6WfzpAHVWz24bjr2Y8nVubae2VoL",
  "key17": "h3wNyhj3qqZksF4oYaNAa9NPLsDUHTzkxj8ETyeKrjHaL6i1P5ZXGMz6zMw3TVn3sgZ2CbhS7Jcfk1mdSwYPrXS",
  "key18": "4gYSFLRkhzsk8XhMFf7FkxkPbbbPFKVPXy1H1K4wtX2FYro6d7YU58jzkvs6QjoZtKwKfvwVCeamEH6ygDoRbowV",
  "key19": "64NfTQQrxvp5qz8CSVw8hrqQRB8aS1oYYnfYvoDSdgXvvfnkhUoHsLxdMnzzrTcqGwQzGge2Mx4Ea8P7TaZwMC75",
  "key20": "46QdKExbkt9AA3j7iMMCu3Qu8BoLe3oo4r7V756XnnpiUHBafGG9SvX1WSAWsBkiEzsGGWDB1cPwiDoAiNPpb7f2",
  "key21": "4QA5Nk9dqav2HVWgkzCoaStcazwHMiJneNS4a2D4yQ8FgZX2bJe3Sb3csgRmj68nzKYjdy2zb43mYofFkzEUsyQE",
  "key22": "4bLo82bpNq4ReKLrSTtEFPU4BGzanzKjFWb8ANN6ThMCQ6YgEifeN7muVYGWJgoKkFTgWv5sJczqmGfytABRvQCm",
  "key23": "3LWaGY6ZLMhdAYucykt53MvhMkSTDdkkTK3Zu4o1kwjr1m8Cg3XBYv2SCjyhjRReAHk6je8Po2Y5T94vepaW3RDc",
  "key24": "53juEDyWVEHNm347JEgaWoBnPGV7J3W2K7bpq5zuHY9FdLS7o81aQNrgM1nvKCbYdsRyjeUrWwwNiDMJ7XDxizXT",
  "key25": "2SJSjVcdxwejFkT7yTBPMRVKwYvgsvBJsjh1aPao3FF5qL9TjzVFG6PQ5HxDde6QvpGTv8zncDdT2oMNx17ZzsCB",
  "key26": "3h2p5fRqHoKvgrCrUqyBiTrks8JRoG2rPknJYsU8xUGHJeMj3vyvBrWW5oqCRLzXohjsWHDTCLetFPLSj1TXPUwZ",
  "key27": "38g7LwhiZsyPibgRMKphPuzDgPWm1JXLffHKC1d3S7aaszwBFdmUYKhkAX4CLduTiVfJmRU4dtQVzuofLNTRg5wV",
  "key28": "4C8ypmyP9iHeDo5g1rWBiPsJB1bzf5tj2CvukQmy7f7aF7ZKFhhpqcJJENUvFkNSNUFfthbiYN1dSxtKMvmtgVA8",
  "key29": "4LjKDApY3pzV4a9MvJTGeHVDU8SewNX1qprC6DBs3tdd9B7YMZVf4nXwBXcoWpCXBbZjT2Wk5bkanujs4RE4e7Fq",
  "key30": "2NqMXGKssWhSLDV15P5c8PoTv2WgWvwK2xykkqVnQWUM7CXW9cboN6W9S2yxuznFhdaSmvfXbYLo5zR4eR59nPnb",
  "key31": "2BQGPsqtJgDNnFnwaQF8VerropAEVkZ3a3NNPpD2jM2msbzEpm7LeyxBYgtBwAXJ9QfJejKiTrj9FQCYXff7cXF7",
  "key32": "hD9iEukGrsSGhrK5PyYCZsP2wbKdH7hZ83U7n482exNB5m4jpRGdYHFZuGXLVk7yJrN9PFFdxovVHjw7PSHV6zp",
  "key33": "4TdLNTxYQLiuVudNSEXKPMvJ7isFwjPG9Js3P1pR8wEcKHrHWJj7XFcm19qdwqXAn3gKcgQ5cUZRSKfEQfegUHty",
  "key34": "4z8AKQJJLgESFx1cwnGALMoRoAoH9d9Jxe8tE644oqKJPE5ZDJhyVB4RZuBmn8dicwZbSBw7iCvrayrGzRb3zz4A",
  "key35": "3k9oE5utrx9MxksadaYxmsszU9usy9VoP8DT3QWCqRqgVZ9A11e6THR7y1aspbSHPymTSnHLGjq1mE8Ldo5LMzAV",
  "key36": "3kW4kjbtwcaDXTC2xctdCjuZzpe2PNpWQSpF4THc3D7PYWYKiX5nf1i7RgRUDjkqBvpuAzzfDQaBg7ogmBYHwu9A",
  "key37": "C8b2nWba5emnT7EMS4Z3A6kPNwKVJFBNp755xPsb9ceJQSPpH33FLWdLvhdjpBiHvk8aMVkgYH5wkm7QFPMoifV",
  "key38": "23pNGKsHZtAabvrBRM94xPYZdxAcEtvvU8QnB5b4z5vFLMdWxWp24AMfapbKSa1PnBNak7PvUWydruKM8GoN7ZHh",
  "key39": "2MGUXiR1QaTrH8KBoyCC4tjUb1wJ2jDVREatWZon3WT3svNtphRmEg8rkaqc2syTczVfcQfx2WqHR1qvcQQbLpMq",
  "key40": "2bhKt3R2FsbujkEjTn6UZTabPff3ADMgQpYFV79km4ChZMg9JybaTdVX4njpDy7W2MDd4dfDnzYF6JZKzundiQAv",
  "key41": "3sT94LcBpCggoQiWMNs97MFqyFN1oByLzKBGbGGiS1azvXh83as2xK2FA1939ybkb53GAbKq5tAmfJSXCbMXsy5A",
  "key42": "3rN4DrTv3twf7hmjerMd4p5uaK5kaZ2PWEP2p6Q7W2XvVpR3gyJ88mZTwG3DMRV1eGpHtMocVGQQAGpr1nqr5Yge",
  "key43": "4L57K3dYPrp3WY5HYuZbcc1a1puofrfa69aawYbgvtLRKNDkmaPe7dcXGj3D39EZXAsnLuzQ2BPznHo2FrCk2W7i",
  "key44": "5Sy2HTTDanPPvgS8jRfuyBLc7gjgwTa5dwxFcqmPihWwzHFfSSR1vgkM4PBnnYUNLf2JgB3YB5Hvs6Ezgoca6EJt",
  "key45": "2xY3igHnokbXGuPtawy5QUmK8LLqEQZCAYtMrSeHTq9sbNXuTEHrbCwPgmbeobjJLYpsYrg51qcj7SoWT8eSc1fX",
  "key46": "38dtMdCX9yX6d3FeCFTNaVdn4MLNDv3Z3AxJwHsKcEvUQoJcvKkmGvD3PeP5E2MjacUixCSoewmA6VjRWCGToTP8",
  "key47": "2hwva5DYAb9o5HDhCnEbKaNb6vHoRRwLjttt9udv1xmFGcm2T6twX1a6xH8TrqhiYYuViQeEqbxZ72G47oLEzEkT"
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
