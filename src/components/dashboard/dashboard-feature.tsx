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
    "2Qrs1uypjKgBFU9yA7bTSBJi3MxqMi7hiwZj5Q3LXgvN99dvbQn5QwsYmHNnE3Arvc9wVpNfFgSwMzprZJXgfHPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8ZQrxfb2cokGyj7i2MrQem46LFsNgDbEQp3CbpGgW6cFLWf9mmHcEhUH9yYzoGkk13VSyDoJ1JpnWAFAqsbShi",
  "key1": "2gyjC9caJ9vEQgmeBz7vmD9ySiFj2qkJ796TrrLUGxwEvrUZthMuKxagnhTRXbF6fds1X9jxg3d627KDgary78Rh",
  "key2": "5aoeisGuoVdaqATGmnL5FdJFMuz36QAHdsvrE1srRDZw5QKpHj6C6gJx62KVUS5Hpd2ikbjfTe3gX1J6x8myKdD4",
  "key3": "5FRS7BS2wK7MATGitm9nQ3kJmSB5JrBQotKuikfFy2FwJn8BZas8oBDyTjA4n3X9Y25G2mEHmbMh7u7wUbHnN1og",
  "key4": "2MsHWq8gvAJny3zRWkrFALc5GesgmDu8ALoRN8iq3fAKiMWUnGHw6QeVR1P1NrbRW4svqkGdxW79H1hW9BjehRbU",
  "key5": "2wAKurmGMRSevqZrg1uJpeqvCMSW95jTvWEeqJZjWgnqL6e5rHbouoyLcaWDAQRGkuLEiZoFenYq9snhKjz8bixC",
  "key6": "d9QfVdcnm6Zzn6z4SoJhqGVaQnqhi6NGtjHeXD2iRTdk7HxmA4i5E51bYyVmkC8tfZw4SfsJKULCWpAdgyu4F2v",
  "key7": "517AewYjmNQRx3HkAVxEqJej2Vyvp82bc9DwTCDA1hhYRU9HcFMjkWniCg6YbxKm1rwZbwfHmUaeSA1LrhuPxW6L",
  "key8": "2epFn2eCZCpazFnCRZVQQY746B6uKA5BjTHwsJKErriuvwX2Pbg9FGQredoHQ4GkhvoSR4Ya8hF7HaWgqo3Beyt",
  "key9": "4R1CUjNQFQdKS4eWuj1spJdG6pz4EuqSgRncWh137zrvBL7nZh3Wruq5ovgfrBBwEcYh118uMMM7tZ7kdHoLApgN",
  "key10": "51dPaYLQVPoZhVJ1ms3L3qbvY52gBEHWBVMj4qJRjbAGUKfnVoJsU3X4Ki4GhanMPZV1uFMAyHWKiQE4oX4s8N8W",
  "key11": "46HPqH4kP4eZLY1ECjVxDz682sjeYeG16s4yPg5DFFBwJUK2Qievxee8JZzamXMRwYgqPayDNRQ2MswyyCZPB2x",
  "key12": "3BgQvjMc6KioFtgWV7TV5Adsww5YasYXbZdBwZuiQY8KZA1srp7CbcVmdf6jdUWuSf5dM3zD4yngC5MxNMFEHjRJ",
  "key13": "3e7eVXQhZeu1Lg41mm1QttiZ8h7MhxqpPQgpQY479pkWWy8E3s65icd75Y7gVjh9DNcS9HvckVqR2A94zHjJp6XV",
  "key14": "NG2CVJSgj5Up7ATuPH3DqghhgjvNdFgqoEvTdkjs7WPrqU2iYpp7NSvwgeBFswVCPahLyKkqQurexDwWxezg27f",
  "key15": "443t2ttcexpVQieC3r5mgh8aUDqw4GjfCxoEFkrWEypVu1ZpFWSmA6enrXMSpYypa5qUpmY5GtvFKVYvgYyuAAAJ",
  "key16": "5eU89iZ15YnFKVmNcGPPaeVu7bqdhV7vsbBs4oCUkFsjBfu5HRhG2vEoRVX6AmHPwaDyUMLEuzynMXeZTEfwbr6S",
  "key17": "2hyxhtKyy6Cmiz4QrGpCJn5cq4C5VKEGjwLGtqZpETLKuwUy8w9m4ScQg6zniCjVu3DibpaDPB2w7rf8eCCNevGt",
  "key18": "3nfvZACxnu9gDDcgeDpXVDzDrJMHmQLVWyw3ydQFbxKgtf7ks4YuvtufMgpyYnsT75qmfGWnYympGfBuW2rzrCFa",
  "key19": "2wsNctEyon8K4JEcPByCPyJcCjxRib8JZZqTfsD7WM6dnum5Z8h2EwC4e9LAp8fF8rcoa8K3nRNnXVwWpEnUfoCu",
  "key20": "2s4bMpMf7SWpsvWBn9Beb2MvB4v188vgfnfDZ6GnZYkBks1k8T48CP7X4YBqrdRqRnm52TSfcrB6WkvGMzEz44Wa",
  "key21": "3JmSjXbePMf9w23Juu6AMgyo2dBwmkRKZerdCA8n4DTGgboVjt2v9FiffuW6Yddokpaya94s949G5iSAmrQu32Pw",
  "key22": "5TPy2xJgJ9iaepYKuZioeJfR27PyoDP5Ab3yeCTTYgBGDRAmvxUv5b5LDspJpzgyjQwvyoQiLKgCG9ekVcm6SoFC",
  "key23": "62mFyxJqQbLK764DRWfrU6rixcekUXhKvy6ofxT8mWMuKt8k4Zvc8NQqxns7Q94FDscTfiW8qqrC3ukEgpfk44ud",
  "key24": "pHymX9Agh8Ntgrbqh9ohLwMCj6NDr46HicofBd2gACUa9fT6s48H7CaaXm28CwTSB78SjiTu53piHw4HVqshSW2",
  "key25": "4sEXLMbj3bCDCzAynfvFMNiLfPhRCRPeP1fBRKJnoG9E3BbR3gcnR79hQoVsBUVwv35qqNZ4HRLEqDG1Dm3Vu55j",
  "key26": "2WqKtibEDTj5VipzXku7g4j2R5VmBKJ9Z7Xte8xvNbFdd9YEFsznc2r2gEjSL5moY6V3Cz8mMcn8xatNeS3vELmF",
  "key27": "XFE5GwhzmXY7pLhAc39aJmb352v148ZhWveqvLVHm99bdPwEu8xsBkVZsW2sf8N46XMSpsVvycVxESqbBLT8KQi",
  "key28": "4G6zpXfn37KoQ9BeciWkNLSvQECRuACYKX1J2EwYJDMgVZbG9W5m3V6y2KDddovRZjhFpKDiZfvrLCvyRsxzfvrA",
  "key29": "51FkqkkX6uhVE4xJ9s82ad5bdhkrcehKcCLzVskV2wgPCsY1ZKjWyxjvu81R2P1ixoDMnbgTptotZaXsAJa2Tjyv",
  "key30": "4VgHyY3VxZWzSfKmwRAb7bWYCnhsmgPXBnQqUEanzPY5JJHcwR6DaC5b1APMEvydbC6EXZd5VcUYRFA9C2ZiemcA",
  "key31": "xboCYJk3F2zkTw2k6qHqb4tkr1TeKttjkrVUfKbhXoM2Bxjebjs7QRygHfdNjLXxC9yip4zZgUQFK3MF2DzKokt",
  "key32": "4FU23qDRtTmuUS8p7KYfZkcom52FupfwTsSxXURBTagGK6jVaW3mijWG1bFcVp5Tr8AvJYaYL1XjDWTpMQWAJyPX",
  "key33": "3B8gwuWP5iqXfcnCsCTA5zuAbQ1ET7tHbon6Q6YqJQDpftexSuvWvexwNg2hquGXAJRk758YygVvTSGh7us5w5Sh",
  "key34": "4f4qNZVBHEmSG8Fiv2prdXrJZQTDayJE6TVXWFT7aUM74EgqR7tnss88ibARCiAgLPLkTg83jqqaAU4duTij9df8",
  "key35": "3r3dSiDe2err1fj1u1KrNWJ4Bx7eFqHn3Fm2wQYp2tPVonbiCsW7Q2id77p1mSxvAtaR9ccgctzyB2X4wDLQkSNG",
  "key36": "5WCvboMjobvbtMjRTGe26ajDCypiwkDbdkkCXV7tPRcDKczfMYgbTN6PDsrGeWnzUi3Rqboi9jZE1zv6Jhu5XzjT",
  "key37": "2pcfKjUhX3cfNndbUB9irTpfgx6JJtzNEvvJHsKmrgJr1kdUSdwGQsipTaPY5F2q6TGsSnrFqSEEt6P6WXHboesC",
  "key38": "2gCW8fBaA432CAZsWaByC5w2RyHVVG1X2yL2LKQHhSUuMRCuCzqa6TrE2TUsFvV56UKBzqBouva8HGBoie7LLkWN",
  "key39": "5DVJtyxWnewSz8PVTweVM8k4LKpZYzJ7J1pXcZf3RCZzuzfRFuV5pYwWdUZPjBL1A4wyn99BiANg9TmgQXhPnAir",
  "key40": "wBVyo8ifMfg5sbMW3bpDFSvLovJ3PY2vE6QwDG3wCDacVMpwegRy7HJqgJGiTRtwYbos58v92ke3EJHDa6CYPc6",
  "key41": "3VUxjsQxgeXSF4HEhfWZzLfsRtF1r6N4vMnkunwy248C5FrcJCFaYXjs4WX9trWYqSW4aCe1ypSzVyebHtfcUXmN",
  "key42": "i5YPSmR2ziNzTCx3c9E3pRwAKLUSUESMge4tZQpfGLkY2CTcn3woGqvVCLgPfLoLYCTRsXTSQV7SRCQyoYX4kgs",
  "key43": "HnHWBrdJkQvVk8UsHsvQWafEZRuQ8VQx2q49Ld8moPBdKKEM6NJprmBe1QZYe8Skm7n46srmxuki6XudorRQcxJ",
  "key44": "5pypKxoaks7T7q34dQZuAXMvAwHXBwmpWnELtKUBrRFYCLuXs1sgqA9Lzk7bEEcz4bphZfenyvDvn2wNMHQU3oWo",
  "key45": "GEpwKdm7vo1vvUcp8zbADqFgerzhrmGCFj5wS83gj7gM8KEzPTHUq2JXV4R4Z6sWbAMRuR7pYU8p8ydyDCF4C2C",
  "key46": "3FVbpSYYNqnnGfqCTefEANGGvLkSd76dbibEJZAWoFu2pb4M6DpkAg5zxZzVFZk7eJsGRcMqGae5XxEqKACbxTgc"
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
