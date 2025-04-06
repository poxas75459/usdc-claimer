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
    "5A3HgyFM1xmJs9EQ6PwY8f1jGuznjWAHD3NffqhVLKkNfhwAkDZZN1nSS6RBKx5N7CwZkGNNiTTK1Nwmj5gFDbe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v4XEAq7oRHVXNZDX5egznjbhn3JiaKHxtJbRMeWfPHEs4jKTyi4epLNLYqSWnQfho44S7r3mBLrKGJ4WpE5RXa9",
  "key1": "2RRt2CBsc9tYZiJJiCkJhUF6NJdgqiZTkMhqQhaQeZmV5EKf1Gxr3wNcnEGjcLHMTuTaTPzt5Xrx3agxVBbb6Qsx",
  "key2": "4q8rawayLAgQ9B9mQCatdgYxfyqrxH4JPEbGszSWMGnFk9EEGVUKTTn1aPmdMk9DqM5pKTCMD8hqZKfNLz8DYdU2",
  "key3": "5UTDMRwY15uTrhXhNdvfz8bvR7chRP4YQFKKrRDnvZKjojn4DiVUFDA2WYMPEQFNdUk3LnALZcZAifTsDNHdtvwp",
  "key4": "5Xgk1Hfba86PK3sH3o1Yc9vkLvmVoXszNeACV9Yn3ieYDruBWhryCfGyZDhwbNYsUZFk7981Nyzd1KszoXdDAwmm",
  "key5": "32G9jTDRvfqQrWxSD6PVfh61qP7iUBdVxmrqaw9KotuAUPSf14LXbWn3TuTTpCaQirCmokvoSfSLxg4tm653qP1w",
  "key6": "3XK4GxeLrbbQx1eDWQDvMk9kb5ShXrwdeViKcRYVL9UpmoHG29fnsLjQK8BdseTEesjA6eBh4nnM4rAoJMrvixNM",
  "key7": "5TvNAVjtS6j3qszqfq3zCxQ93NriYtuJPN7KWhEArwdNpKSVyMNWiFu6Vt3vTSwygwSxJRCjMEJYyJt2gdUqXmAa",
  "key8": "tBbmDSf8eAxVpXh8DJZCHsEPm8mQgRZRA4KmrA5SWoQQXDHH3Ztfe25sCCbzh3H2fwz2GF1FmXgSTEYWBroagN9",
  "key9": "Ec83cCx7jqTpTynp8BDThXD1ozS1dinAL17Kzx8U8ySvD4CaFJoqk3EBXTkAREbXL1oBuBRuDxBKhjTvXXRppq1",
  "key10": "46iZvBmv7xvysauD71LDNo4xy5xeyH3kFjTu7t8C2hzhoEj837mu1xoH1bEaVqrsyMcCcBJmsjnfkBh2yy1ea8kr",
  "key11": "36PAejxSwmc4h1wUF3RNMZJeBqBWu8iWhDWdeRycVjFsFegpRSJb1Z2TGfpzfgSGr4gKuHwCJgY583rBJ7Hkj3ce",
  "key12": "3ji9Bg7Gb5aAH4nmzgdANRssGt4YUj3oT3ZruNMoGXc3Xiz5qs2wpDmNf4qzBNFMSEPDh5DycctMDutVqvDLPYT6",
  "key13": "5DJPSb8oUqqKxq2dXCNXz4AHMRvaJhEmcaoNDWvpggoAVQ4wpWiq5zzKB3Wyu8nNWtp74L9BKDgVDJ4UYUqj1wGo",
  "key14": "3jA18gpk3HV5r2CzicrpKpk4CepNcCd2AyNMGaUAL5fnJHuKW24tusN6oKWjtRY3tktQ5aKKAcWq9BsBEnQvWri7",
  "key15": "JRXNarJCc4CZfVBB8AKdzvdhZkXSQWbvTdSEnT4cPLvNq4Xkt66DHwNayfKw1ntzxeGefjgeJ2cDPHdFNrCm5jX",
  "key16": "4JZZ2CERjuZ995q84A81aeikoKX8r9Sn5dFn1MLDke6uYbzgbKXWiU8oGtt7yDjW2CYncMW92pVeoy98CVufbB6J",
  "key17": "4AiFiYBKnX7FMntL6wvdLBe8b4jsbtPkNTry54vi4PBJRof3oeLNK14NiQnionqRESrqQWmdpKMU4A4vxMDsuEmw",
  "key18": "5ZxwuMfW9dAtjJJ1Zn9wiu8DQSzcjZTaqN9Y2fm4rpshdz5ms62jQQwFsnDAMBdZMFmXH1ChqK5nejWk8o93KBCg",
  "key19": "2sE7gq5f9zL3jc6ABTEW2sHn7H2dnbTU66ucr3nkbxUupJjy93RykkEtuPxT6m3zWUJ2n6kDqj6m6K8DijrRUPjA",
  "key20": "2FBnNJ2ZYaYSoBCZGaMfMKFiDoJwCMtjrGGqEthq3Lfi29EQFKUzrE4f9od8E7Jdu1H94SsWmgpeNYJobLunSgEu",
  "key21": "2Sqjw6bmUVXkJ8PQtDPa8DXjWJCr7PD6YW8PHyagMbtUdtG5mrkt3GgE7YisPfgftHnC5CEmwxo4P1PWtpvQBrJ7",
  "key22": "aTcL7TdNsazAJ4e5JRrDRKZGyj3LeRb3ATuq7G2Aj84U6dCh2Vu83bjn2U7JvtYqxMh9XXYBkHR9KAKBk6SYtRD",
  "key23": "5coyGZY9VDqfdF8fcY9M5P5BT8eurmwWZL7CJYX2jXWxir22cDLWVTiFVqQtYxJ5QEhwqpcCwbL7Fx99AQzUnCow",
  "key24": "4R7eG2wM3rAKRU9tzPydvXAuK5VJDTuyFqFXMQPUDErhWe6LggCLfCBWiRk4dnB3zi5qFzMWsspjLG8ZomDFDuh2",
  "key25": "5ULaVCCFXG34hZa7ozv6BcrbtKYnhMFny98ANdmAQw43HTEwLPKMkf9MqL8UoEeab6MCoNy9mEdarRyXkNFLxevv",
  "key26": "5dDG3u1JnnmoVnECJiNsKK36gJhRYaZQqeCMDrWom51mUcwv2i7HhGkyonEaeDMT5r9ELsA6TKe67y8A2RWwCKbC",
  "key27": "2vCU2AE6sa6bxh1gwuBbKuQo7vb5oTMsB2JPVBanrFw9ZsuZSLAeKfx2Wp3sNhwWM4bZCdTkJrRwi2kDnpzwz9pC",
  "key28": "5Bs5eY22YqjEJorr76syyqi4WtJ75znHpG2poRR52UcnRUPoFTEoWamXZwwKhk1H8gQvcuqQXUPDb5i5sKbJGqjU",
  "key29": "5NTNGRT7Qc4nSnmHr7sfR19opbU8hMizwaUvd9wqR73yW8Jr8tFseoCn1wyU7sGXBfZh7CnABr2EHhaWLeeYTTgU",
  "key30": "4SmLDhdAkzEbdRxPTgbQ1bTw7WpbGuYXyhjMUqHLJHW67AEphnE6xfAWeqjh2dJiLU28d2udqNBgeFYJJu51s2AA",
  "key31": "3qewcq5fdWwXjntbkP2ea3CAjroCUcsiMdu85EoErr2ZPptWMQ1XypsaMC6fMKsMR7T7HWJUWMxgSNozXASrYwnP",
  "key32": "2xdhdiS1FaqvxpqUmA22kWTtUy16K3PJs4B5oRXCwgFsDexXT7qGjB8ThVTNMnVNqGdPhv8Xw9ujPMeFghroeycC",
  "key33": "3GYxiXKDfFpd8JGDeNDJKhYhBfMXjW2XuEYRvadAroeugtLJ2YBT6DVamvNdccV5JtY3Ufesa6adjZktQTjWRNnH"
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
