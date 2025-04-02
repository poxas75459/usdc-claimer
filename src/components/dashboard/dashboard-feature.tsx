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
    "5AkdwytS5vHXsjAVJhSjsMvEBjKmXQWkCtr9qTSoq6DkffKAf4R7xtkpwAAz3yXV5SARuKdtfvxJW5rx6siAPkuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grhZidE5kDceXgUSLaWp3AjNhpws1pM3DxR6tRu8UU6GYGySVsNcqY8pS8iYBCa9fRDa7KMHHhc5MbxLwqxgMNv",
  "key1": "oYtHTG4g588tQZ9ijzRqy5EaMec5yssJZRH1psk9nQzKcedxcYeCohDGkM3XRPkvSDWNU2Grk58wfXoqRacu3eM",
  "key2": "2X5eak5GXDB8BtEgrp6h2Xd6ipqVnUYL32CXo5StxRHmMUsH75XvUZ5mizyMUArYxVboYowZgxVc6gMpNrK72c9G",
  "key3": "5VXAwQMYb3dyQDYURFRkAef5avReSXTKN2BA3X3Ei1NdrbsxKA9Trr1Q6ssbi45rKktfgXFPgk8YT7d8a7LYteCT",
  "key4": "4zmXpKmUKGh4g4QWHDW9WAjWNGf27xPoUzDBAiWYXAN5R6QGVwmLN2xLbpR9U1duFfvAQhtPWpaZifC6pHbkERFf",
  "key5": "X6J95WLZ8h7XGvdsGtu5mY62kxF1LkVu3Vju4D3ghajqPYrcUPgZ8Xwt3obj8nAMRBkcxtxTxz47TTgzBzpf9p2",
  "key6": "3Koz3frCP13K4RHy7qwdtFFAfdenoJSTXLX3UzYuf4sW6QU5g8Z5z98aDaBGx1pRViofPs3gSHeu8A5mJsaDx37X",
  "key7": "2tjT4gJvV2SictyorVhY3ubphpM4q7bCQQPAqsXYJ2W8DWdqNQmiiUciCViYmWMRuG9c6wvyRd6MKLbTGoGMBvBA",
  "key8": "5hC2DKNayWz29RpWLiirD5ej8h1eHL7UoApRpGTHgrhQ6HoUeVxvaZ8Tup4EofKrXNCysbtLogi1ptp9bSzxyn7d",
  "key9": "4Wv9h6nFMLdJjB4a4SrnUDJn5QhGCKoJaRBubVwQEU4bfnVsGjWA8X2Lr8LpivV3Ba7ugtJUVYBQYJEcG4mNY2Rv",
  "key10": "3xxX27tV4Yk2cmVCHvAgUgGBVhU8815MrpXRKYoYzsp869TwN1qPHPgTpMbdXNUg1uu82XFzCf493sf6Houm6GBS",
  "key11": "5dZFyudkRUYRctuM2HgbVTfTTSvxyg4SvHR3VrAUyhVsAEh7Xmd8UhSBq4NQ7RBvsa4ZDh2n35K7JSq6YHGXLzzY",
  "key12": "3eTQTJgX2t4PLk5tkJSRspvd6nLtC8qYrGKW3RL9LYtP9Hi1PrcnycC7fRLZmvzX5XYBFSAbAviRaUBzi2NmaizA",
  "key13": "4a2hYiQjf723ciURPCRt5jUaTWD4WHGX6yonbNNANj7KZYyv5g7W3rQisKBfvfWeovwm8Fe4VQj3VrJBSgLy65om",
  "key14": "5Bp9SmvQ6X4qyxpJUai1SZju6A6mjVAZzWdLzqawf4jLvnueonf1bNdVnZZhNAjycJWT7v4K6u11wNARZ5ts7mRB",
  "key15": "5rN2e27KKmEc4sgEBgNdMbs8tKaSWgG5noHqPbNdQVCqcuoFHypK63ZaSjanmNSWAdcY941L15QUN9QyC4aoMEw2",
  "key16": "3zzRLULuC2a2aQqNv595LoPHc5KQowQChxbZbjkxvUF7bWUsYLYS8Vp8UNPf1LZUYLGDW9xGyk7dNBwe5JpdHyh3",
  "key17": "4JNYWqL6Yo2w9jni5CtuHK53cY563EJheCJVzLnKis3jxgNAxrnCfcgW1Y2FzZDG7QnUQojJF5po1J7AvXLUafEW",
  "key18": "2DQDGFjPFLChgSL5Aepf5jRescNMDHCg6nuBnhQXZULopJme99ix2UmJD7ouK6pwXnuNsZKbCyDuZRHQZqfjpUz2",
  "key19": "2q7axv1y3Kw576ct9s3B3Yb6hDkmLowzMkoZZoEXpgvW26XHxz23r8zuxsdjxqeoURzSq3zwRCHL5f2vNfpURxkg",
  "key20": "32qzELs9QkekL2ToEQYZqNeHAnAL9WiGkYHBnyVTGqbRt1mMLCAy2UTEUg7zxyY1JnNDSujfKiexXiYg6J56ZrCd",
  "key21": "3tXJsnzS8YA97KVkRPsUtt4fTDEyPUsB4Tei6jVTdFuRxLfzJm4PNWwpbN15xyTnhfuLdNoQKMuLsQrHGnbcXsht",
  "key22": "WEmSwfNNym5m3yrX4VGYydHH198HXzHCwgiaiA4Yto7TxfrrNkHuu5DyZ2tigNNHZKQyj8QXX74KpMfJPngCg6c",
  "key23": "4kSJy4TcejECpyFB3eC6gEU6zVefdEZKdu6k7sY1YHpYb9xmPr4w3esPvxNMK5kZ8fySzZZRqZ5EQ4PmvTv93BWe",
  "key24": "4C9vCBUKTm72KkZDhGBxwSX3o11qq57danjNVKL6B3EwfvuL8kd4bX7iXsm14Y6Lg41Zdt77J65oaYH4NbFAmfD1"
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
