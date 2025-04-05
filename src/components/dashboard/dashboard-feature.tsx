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
    "3BcnQaLEWirsJ5qDzgvbo4rBKXmNRrt8TdRCKCZozZWJZXKkkLCV2BEJEWnNYv5irRaGn1ktE5p3k6tmTCexRabi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "chteAEi6AFPwMBY3pR2WxPrcAsghXRAyF9svyfSPWSnAiLryfiYoZuDpQ4tyFZkwW9Q7N6GiNbkwZ4R8gAx5bWc",
  "key1": "5os7DkHHFKZHSLEpGVd6GwKrS8WBQoDMT9w38cewyxHK4fSNoD1hwVqH53PsZ2Mo8ccKWnwXoZcUBWtFm2h7iATa",
  "key2": "3PmD1Waq5jNUP3ZEQqW1VJiYUumx95LHXEQxiXGpKMEuJxaLKyJ7Z9PiCc6CNw6uesM7B8NdC7HYa2rcaXkJD49n",
  "key3": "65RfPLwGYBndanvfCEsnovRorRa7yDyCAXrpYZXfL9vyGKjJcyqHPDyaE59w23KYKzXfP44mi58qgx5MfWLXC9as",
  "key4": "kxfVcYLnXBU3RXeCnSE2K8qF9yqcjfpiB33iZGHZewiWrnrvcfCkJ5e3AQpmEmtUk7owPEhTX8U7t271UJzDsUA",
  "key5": "3KgPmQqjsXDjhJoUCdvWn53JhAgAcjBdf1yDpZgUbbvZ8LjNQhRp3q7gc8SiX95V1WAn9rnVSTPks6VqiRQJHP9p",
  "key6": "4LKvPFNE1e7Ni71PDKQAQGPLRdnikBMtVn5JiPNECAMami3ZizM5UwtQC2Bifg8g6VrPznknyPPHhjuNobokDAxr",
  "key7": "4qHrthRRnKjdHinyLD7dscFDtoC1ayv1xNyEnJLtuAkQNxjYRM32ZR2jQkxTN1TT135KxhZzAscqY6E4FDVSunGm",
  "key8": "56Q3hyyc1TkmC1m3kvkrobspKqfbgZhPYJQUmn2dfjmJw3qnqcWze24LEaG3TPE9seM5AxqrMBTDWLxwag8sWasp",
  "key9": "3v2oGKWm89XmcpHhQMBHzeESX9Qu2RWcARBKfqhdTa5Bf8ypGh6UgiAmjHCkoeW8EoFVZGuvsDpcxAq2xz1GXqcE",
  "key10": "2brkGiqU7iceLXHNjDf9MBMkMUsx4dm7xmboKcqZy6dvGnbtMVc2Y5VQLaBj2Q5KCEvwQrATz7DhSdBWk7NMpC3P",
  "key11": "5Tk1usUdhdZ23RuZ1EN6kZRfWs8wnz3ZgyxSG11VqxYcmsLUttuxdeXk2UAzUtTugKGGjpe8G5hn3ekWjDajNTKr",
  "key12": "4hmz9uNtQdgYunonMfU1SYsFinXio95F6Gp8gGpvNEZTCknzX9Z6EZK3oFqd45p4f5Mbc2T7KDJrV4DqM9k22VcD",
  "key13": "4c3s25aNMtPP2p2BchyLoeWa6LP4k4Ch1mNZmShsZAF8S5ks6DkS4WUK93XgyFEG2uxsPusPqD1cBKSQ7Ao3YAFm",
  "key14": "4RBgdqT5bR8P9M5oLMmh3ztZFTgW7k9c8K1bzd4BAHpZDVtRXc8JVKrJrDesgPk3XtPb42h3JL5NwAaWWGM94nLe",
  "key15": "3h6VZTwDUtPXn6ZMd8gJqNpCdjTJsFohvnTBRp3stBBj9N2GVeEMdtPgVPxHLDgvwFWzMXJrP1eCgtWtggPYDxNo",
  "key16": "34zxKnaCydyZtnXNphMHKPzXMVNqf1P3i1RzvgkXMvMyFGmZvvoUZUiFX7TTFhGBtJh7ZcuwFsSV19sLsS6wfW2S",
  "key17": "3iE5cR1quyAhqdxFR4Ma1YT1yN995q7cZt8tdvy8k1DvXxrujs1uvBweYRJ58vXsVg17JYGmVN577ZcZmBgbgV19",
  "key18": "5xRBzrwANGnukf2PgoUDRVpDzNRnUPj5WaWJjGCnRQJBaq41m82iEbEGmauDnqmZzZZzaFt8jj3tq2G5uu2RqU79",
  "key19": "5bzRmNLfHfLaX5qysEUJKktBzvcKkkVn3PFJaeXc9icfE5t2bnL7zR793FHyhETgS25exEvbcmgyBUjupe5HptsS",
  "key20": "GurR49CePmMfzW6C3rB7thuLiMs4CKcF4ExErRugKP5RRJottVPufjXfbjCeXHDqgEhjKxELzzFtYRfU2MnVouL",
  "key21": "erYdjqHrkcqG8QZGWDCKhXchQg2uN47gzaafkc7H5e3D3g49sygppMJLeXqGDkjUAqxax5WZJQKZTMUbTAfG3uf",
  "key22": "RZXqNoqwSBS2A5JYgQiZqUFZM7R3MUwmhN8YPj1txiP3sKvTSdc1rYHcmXbLixNyo4XeesJEk4yFzwmGymuukoD",
  "key23": "DNqT9MbzyVMXXp6KCfou8jXFzqgYp5Jy3btwb8EmvTwvkYuVV8SevcKiAQWjTwuf3jEVjKtQrDQrJBczTRYAb7D",
  "key24": "3y65JjxzaPLuerBuZDGRvEUfVV9Zp1CsCgNwQ17YfgAA61TpaVxwkT2R1mDGeMFcJ2msEEBKWDh19gqVhHSJobzp",
  "key25": "3tAN9BBt8tkNqNccQR6CiKcEsPdihB4uSdbyof81xjF6BXHEUhKxSyAdXh6VNMnmBuSgRQjqbDMoQwUHyAfNByfw",
  "key26": "4obmxn3ZvGycuLuBKU7CLxFF5XgRj5phzEZWmmWHvQsEgof5nVBvvBUUfbSh4adFiy8BV7dC5Pc8s7xhuLXHqpJC",
  "key27": "61xckD2T5PiHgjEhhQk9TXDG3faTRxXhwxt4fkqzMnd7XSseigedeMtvfNiDwep25SLw3tXT9uJyVb17LFoFTxnA",
  "key28": "ES8RTVb5F7Fmjt8B6zwPJ41nQtRRz1BMm8wRCqCPWXeyiUmy4YvyZ13pwmAcZes9kpWGxqs5QMebaPkpidj4fxS",
  "key29": "2YqPc54vbAakiZzCUpyRtUweyHLtDu7e5WUsFBm3r4bWbC23Gp8f7ZxezjyXPGMtz6wpPKcZ52GGiWxXVEd5DDog",
  "key30": "4B2pdpCkgGUatrz9oLW412Rbr77qEdmAdk3G5GeDS9Bse4ftRC8FQZ3JXozrTNEffqzhuNzGSZxdKcni3ybKqqTQ",
  "key31": "3EkkwTK7Lu5eMe7JnuCxQRCiVarVhLfrmZpT89JJWG3S6VnaHUY1VuSotUfKWkxFRvfhC48FoCjGTVP9KVoGmqp5",
  "key32": "2JBff9B3B16tg13pJMtWmrPgZ931aqKjpgt4j8yPWpRZUD8LQEQis7Lz3a6gXhhbk6T3nu6jdsXyQ8yabu4SwZNo",
  "key33": "31xj9xv698jaWBPJQSR2wSLLgSRRide7SjVpubq7V4xLdon4ZxPgBWXbAdpRGrFAAfNi85PiHUntK7rPW1ajGheJ",
  "key34": "2qLz2cfPX8VTxg6Ydqa9xAqe9bpznTxgMiKwFpeXHVvEpNsg8a5ScWrPzL59Fq6hkBuThFjTQWNwvh1CWsSeLJnP",
  "key35": "esdrDMCFLrBHiSjV1p9eTmPYS3JSEPWw5rsnqGHyVYv3k68a3rRvmexUTvAwC6CFLyKQVmBoX6LrkqiEuWhGQF5"
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
