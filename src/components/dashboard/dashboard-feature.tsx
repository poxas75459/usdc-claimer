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
    "2JvTsgGSz74kp8YMiWK7hMkPXyRT3geUjA2AeWfwFnutRThDXeYUQpWyW8o5hwbrCpkmTEa41C6x75x91zF94Ttg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eqb8z76RjrZrXRA1eyw1eWq4Uvfs8EtU6yqheGW4qAKDG2eswgJBKAjbe3cdNpyuL5fRArSjSaq4h4AZvW22ou8",
  "key1": "5x1ZBzhc7n1MyLKs7iz2nEASTn1X29trMkjTYbT1fgSKFtRnB21hmLVwbUNBXmS2hqrbNbdsXnm2WWLpXa4rZFYb",
  "key2": "4DaeG61fght4LMAajADfvE9EKYZ6tEU9XPzu8SaZpJQNufDdCdHvGFuhKmXttAjv8dyYnnzezHys5pNam7iQ7S5P",
  "key3": "4WSotCiknZYEBjikWat1rE3enfe8kW4M3wb6pMtuJuwuEuoX9DURQYikWak7AyWvGQucPcPhHjSiHUP2yz54V8Hu",
  "key4": "61qAkcbmZ5xXuK7RFHf2eoQCDUqoUEv4R7Ekhbk4x4ja6U5sp9giKjwm3jzqm7BvK3Kb3LuYQTYMfPFukgcymy2a",
  "key5": "44Jqdg5wKpD8LfKqsNeqCcUiefHrYqSYkNhvjeE38gTNDAPaGBRtii9hw7HT5U7DHa1sXUqmjyWTsPLzTMQD4VJG",
  "key6": "4E4EXn9tDTWHyn2zdwNuX4qDFNVtD1MwMHKmhKeaW9JBKgkR3SZBHuvdu2GaVgSofkFzunR2NyuCfKNwvxiaLUpQ",
  "key7": "2LCR4kMrwzmhKJf69dDZ6ZoBtcTvbML5QhvRwPmqmJaWxHkzCPsGyqnrzANaQVhDLYMtFjHnJCkvTyzS2NACP6j3",
  "key8": "2tMByHxPdp1iQJEEMU6bg66iM2bKYm6rUh5sASSvUvnpfYMgWpWGh5XarMTnyzWfW2ma8XDir8ETT359tyu5dKgQ",
  "key9": "5LRSJo1EruAGi8c8w4dbTN9EJZh62oBMvMgQbYG8QRgJV1mmvfEAky8qQnyKGQ84D4eCqk3kNBMDrFpx6prDybeN",
  "key10": "2XSFbmiqd9uePH65ZwVshUYgkL1b3UDxLbvm9vYX4zMecB7JqdrrXX41c4d63oVazJRJaxUnCSbCwax8WFDEfhVf",
  "key11": "3SK3SjF3w2CWZTw7zCWG3zA8HieDGC3tT7MTQe3H1PTwE8FABp8Jy57jSdqxKW7WBDQBpRQvzjEJeFXr3Lc6rNwu",
  "key12": "2G5A1HHst42LenEchUTUBX3s6DF1yhzZ2Don14HpPwjGgcdEMoQnCU5cwYKCaYhQ7Uu5msXvjX9HugHmkSsXk4j6",
  "key13": "FeRDkFuxL3EYA293Ce6jtxqVWjD2aW1RggAoFtE5dcrTa5TqQcThqXocPihVbKTWDRmGVjxP5RaiWS4MDT9py79",
  "key14": "1Jpb5aFrGbbjzF6FNmwYfZHxpFbd2rfr9MwysR1S8jtca3wcajBMw77w42qBjoeMpfnwze7FJ68xactTJguBhGP",
  "key15": "QqfaUac96h8Y4g3N937yVaB8arLasyKJkjidhp7R2cH8FA5i39a1HGiaLgrutYEethRf4yH97xpiiUYXWjpTYcp",
  "key16": "4J26fmBLz5miegoExmsrrWLM7sXPAvJaz77uVT9JAa6ZZgUeRwHeSfnpoxzTncMuiwrUYs9Vg33tZGo8r2mT5g6Y",
  "key17": "2taf7aacZU8iq4diUp14mP15Y9Djrga3kCh2NTvtSKZ8tAed4xr8Srvv871g2cgEyjNCbTWAWarYykPg6mNJ8S7C",
  "key18": "8EEJw9ax4bGKk4jhz3SYmxk4g9PxJEvVeUHqZmUCCxr6xqRXmaa895oJWKuyYyRKAbCb51u4kweCTkJEdBZ3S8c",
  "key19": "9D914mEaZA4zjEXVFmxmQmbWbJGNLtZEsDA6pGVuB7eK8c2f7T3Sp8WcoWvDYEJHnZ2pAGe3N1R83BAeR6sSbQ9",
  "key20": "5NJHjFBdeGZek64AjEkuBXoHb4qnF2E7e4wmhqUC7SX9FUaKH7M7sYF7fwPWkoDoAMf4V64fLYTtZFVkry5nvg8G",
  "key21": "2qwU6m4gfCuQh8Li7KQ427xyM8ysJVQizdmgrC174hGR5yi7YuSwKffJ5mkmfLq5w6DCXr8tEXmabvhhCQrfv5GH",
  "key22": "tYYUMRZu99USzD8CuyTsvEHoH1ovj2wqGSAronESqvQ6PEgt8mQx3kmTaN4xHisW6qU1eVbXL2xm82FEK6PjRzV",
  "key23": "2aUF2kXQEHpMLRnKyYfDgSA6e5wxZZ9NqjCqtQADHGAzbomAqMPKiZHfiwWQDp7du71xztUREfEQphk9mVmCWCr6",
  "key24": "3TARCyVVrxrnvV9xEddQ2aG3APZLwNHq86wDLwQ9fSkC2NEkWq1JntxxafuEMgsJR4YBMmtZoYum1uKo5jNaZ2oF",
  "key25": "2hQBs4w2LVZBzMEqJwrUwUc3qYvwQwA5jTwq2gnMKHSqpL3FvZ2nK91PsQwXL8QonF3wheU8QNhbWzmZEWd7H35E",
  "key26": "2H1aajAPrc6QWPNkvaP6KtdL7AgLumK3bTSApZaRfWJnt5yiaeZupE6H6gbjrjdS6LcQ413Do92obPBTQLycp12k",
  "key27": "4SuCEhxJD5msK4ohHfEGBk3vQgFi5bc6jTbjqofWgWzdHvBXifbyocsr1FCYi5E6DEfMNthx5QYTbQ6NMfHPmGFr",
  "key28": "3ZTREoiQaGjwc6WPBu8MRvBpTUywzreCcKn7N2n1gWfnh2vpaRuNdKWQ3WqY1Ebavy4qb99urbKZDecGSmC6Ei7D",
  "key29": "rcZzZ3VtspsV8gDPa9LvjnTUXLgoY8xwwBEWchHwqwxjTgMyQ6Aa7hpVti6N38TNv7wXaLg5rH9VgA3DhcAzdmi",
  "key30": "4Uk4UAFunV58zH3obG3BawMSFXq9vWvfmURe1gaoDDXVq6YHFhkYMnwWE4rV2KMQnNkzKbwRMXvERJWs94GoDuK2",
  "key31": "V523pYxEbxc1ncwhT1LiTV56HqshfBKNYkLD1hx1gxgicQ95M7s4v3gYkRUjHFC6PjxPbwJmLmt26rbiAsJRscY",
  "key32": "2AosoCHV97X434SNBKsoid91Nxa8N4dMLrHBoUbDiWGDHy9EXdzNS21YmzQcR6Rmv2MJ9GfL8KTmdisdiP8Q26t8",
  "key33": "2wRHWNsR6J4NbohQw6JWKKXoGBJwjGySuDQyBkXzWhVis5sHtCXvwJxLdTvp6jm1YUMFW7qqSC84fFSh5A9HCCeH"
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
