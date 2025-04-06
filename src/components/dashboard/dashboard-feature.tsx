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
    "23RRFm3sYWbvQz1MUxxRTNF4N5KaZzwUuCNh7CPCULkNyUTF876AjANKuDYU2AkKj6Nv3EEe49nxSXEHMhjsbNbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SfAeaPNzvSGkXVgJMNSjRxqAcaQdknND4d4y8Kfc4cAYv5ek73cW2G2mkPW5veKy4fL7HoCbCKVoQfvzdcGoAL",
  "key1": "5bJPFWEensWThUTA2G6CgKDLZW1V2VvuaFQhrmMBttkwWSuRQ2FtLVxRep6XQm1485s5CJYEQZjBYsfSaLJaUKJL",
  "key2": "5bk96uXeCVesLttzQ2Nyst3BUK1i31wv8DnDthxHqi461EDoDq46ymQ98MvzFurFH7Saf964KCsJwFjhyLAHQutP",
  "key3": "7VJjWo8ckbu8ukSfHYBuHMwRRp2p8qeM4b6uQVAywRCQSYpZfXv5o5F4u2yMp13ihtyPFQ2YdoPkBeVYbXsFjy4",
  "key4": "2gHMxZZDPhAVAznKvPjoZwozf9hPMaXr4CScZk97dreA2Fa4cywiJhC2t3LddFedWVVqmG7Jo9j7GMYxk6J3wQHv",
  "key5": "4uSFfMQwfqv7Au4TwhsrfHFaemyUnDBcv8cur1gY7ZK1GFHkfzgs5RFNNkoL7qzrXPTdEGioGQcg1jvbJiKcfVVS",
  "key6": "2ab6HgCXMsaaK928BsFmepjtY9PNWQDeKC7XWqq61feTWKxdbU4XaKCwrzaRXxuB7N8knrq5HoLBSD9msFrsj8HX",
  "key7": "EehLgf2MryNhn6cwA3R4WuoKqWYxewx8suHcioRiKvkVvFFSmPzfMBtsypv11SQxzwvyn7z8pFY4B9EQRP7RtKu",
  "key8": "B4ZGsN2mCoYHFjKA4PwJecHFZwdNswyf7F7bPpNdDyFr5ZCvhJDWmU8j4tVaBrZ62y6aTxPTKjGVqwZt3RsCJ3U",
  "key9": "yTQGcCiNkmbpRWeHeZgZDxuoe5kQFpbgheppShgYEbwxAy32gjf2no3qudFbd65BmCsBfbzepdefyAcYuH3bsvM",
  "key10": "2Hq5uN96Dm1MpVsXvcCiLdwC9X2RV2RGMaE4SCiTPpXcWKNELYpEGadooYgJC1rC2guzYUNP2vonezvqTqwKMM92",
  "key11": "49w8V1cTiwdxh9Tpfjpu6Bx8zUgtRJbaCj7s6kiVAQj7oNNXExJfzLmBEuYWrDRnrPDbKY19KnUyiG4x4DyanEVJ",
  "key12": "64zAziJb1fCJLk2dpVCi51bvsM2AcdMigo2tBvfZkXhL29KMLJ2Pe6bU6FvRr4BE5C4vH4TBzDN1CEsw7oyASBFZ",
  "key13": "4Bige3MbKtbUUV9jQH18dkB9duChcFNhibzM14JVpop3AvVSvYwumPystULhfunJVFCCmF9L4NCbThFqNVBECJAk",
  "key14": "4cJTzLRsgLgTTPDTmYVCayWsPKP5nhTWFLaxWtKYa8bXuNDcKvTy8JQ3D5HpxY3ti19ki6gkavn4f8jfXLReyByK",
  "key15": "2xY92piqKTwA1A37uqEuHksZ9qsMzUy6chtKf8XmdA3KYzF8wKQMoQXu2DcqUcQXDuVXhv2RyrYJ4A6kfMMe9nkM",
  "key16": "64kjD6sSWrmyeyWGfoayZhQBRVxTf4J4E5hmsczgdctKMo2sM5Z6F3V5d5zixkWjoTM9yhZjyxRqwCMsnsgupmuV",
  "key17": "3s1hcKiRRWHvUGCPaDh2RtGK9xW4G8Jy24VLxZjybMpKeQ8ViMWiPBQRcj4nfktLgFBaTvT9aS3699XnqrtiE2J9",
  "key18": "6NkrECYfaqjKdSTJWBE22RsW2y9A5wQsXzLBtPB48Sq1GkqdLv1BUrUzYcxSUjgrApMNMSwm3gjfz6HRF5RGMd7",
  "key19": "2tVMfKrG8MTJ8Jm1uAACTeL7PMP4d2DNRDgEHRvvGXEwsZ9JXBXuwVSxHAZyZM3gVqdegkwDxSrPxSqtdWJGAQ3j",
  "key20": "3rd3ZAwX9LaE9SXEuLoBoSRCqqR7caHVEXRZSX2xVznvFQU7StRtiHBv6nQq5wbSBMiWACa7w2zFbZqq2tAB2q75",
  "key21": "24pjSWTpuS5RTeiqZYKSkcCEkywEkzcvhujNNPkgbj62jm9HNdhSMc4TX7c2BJZHwfYzvUPG4ZjRzn2DxTQCL6Kj",
  "key22": "BnMkCnqnkiJPT89fpaM99voE3eGozy4MDz59iAipYwkxW8sPbTC8asjUdNpgiG7roWGzHckAo1LSNYYuKC8QE2m",
  "key23": "624xaucKrJ7fPPTSJNDzsGCyfoSJBHcwu4JmYtWKHLrLvYz9R5QRyig8BEwV4UxHGeMyMqMK4CG1ekQKzzKY95r8",
  "key24": "N3rhjcorQojkyS8JJviQs7tshV9fTVmfK6PRvd2uzUdk1rsf9LuxcrSQc7KcW1ajjj8g3taYrm4pNhFscnBRx9W",
  "key25": "3U6hYEVzjfxi68YBuH9UnGn7KjQxCR8azmaT7HMoZcQm1iJfDibCt2WsrfRm9Zop8CUEkUE1wne13GLh9x1k6K9C",
  "key26": "2LfEstwgtUvE3X2rPH4tvFkgkcVbDk59VtTZCV86aeYkkTjyxkgAgHovPtsn6j7MAhZv2xbQdWfQb3KxvmkKVgBx",
  "key27": "2w41PtvZyzQGH6Bh5526EaZViJq6EdLt7ghcJ4xfrBhuFQPKVD3yLdjJE3bAmXP5GTU9Le49iDPSa4PwkNkW98W1",
  "key28": "5sL6HUcPk3rqY3JGXnNa7rNM5auFd4VxfFHi9EQVHhCwUqNZs5nQduadbTDnVomEaiSSKyNmanqPjpZbnJGH1n2i",
  "key29": "2RBpA5eSRSeXWKVnBfe99pRbZnVtrex2Sv3PZ6f1nENa7szHTDRjBksmqDj35fn9CiovDkE1zzgKZKcqLeQ6EkZ2",
  "key30": "hMD6EkHESuhg8UpvyXPcmgVUGPtdwEYpfmb3qCwVwc4iJmqBiKrG66xaevgxYboRbKSGjsSEZxq64qxfVtPjVXs",
  "key31": "2wL5TDRjaL4rD2LMnhp9sUQSay3HxrxTXBueyKYsE8sD6fzMQi92GxPmYX12ebnggZvHuHBq1sMBUph4uB8pF6nv",
  "key32": "2BR16FsCMbUPxV3Y77mFS1QSZ1jCxDP5fPMjVKjJ1r4JZru6D5LrnqrjY3BG8dn7n3T9SBj8TrTuxw9J4D71FpEM",
  "key33": "5sFzHaXUyUD8gTZYEpRNpBPrjMTpLMV23sDQ2rGhiaQTDPYK7wvYTCZiYNY9o8GXfe4nwXE9BbiptGbyzqaxJMbe",
  "key34": "3Ss9ozSeVrAwyKSSwu4fD97PHHkwvytyyTEMzTTmCZ1nv31DgprjnPEoHVgLU7XH2Tsqg9FKYLvWC4d8ZJ4oBSCp",
  "key35": "5rXKeJjkqzs3nyYvgMcpcfF8LfX9xBZd1tp3kd5b7hwkrGU9aqsv17NLuuZHHmghXpYc4sHab4Dfd4DW8ijwoW3o",
  "key36": "4nTXLAAXSvw3E8E99fNp9CHpd2o64KrojwM3ttf6LBSH79QWoqwGRxQhqBkxn6HvW7LyKbfWXa94rL4kbsKMu4zw",
  "key37": "bxqAKLSniGwMjhGzxa4gnakG43VdKgcRagB8JUCbPazH9i5PsGKWncQfTxt1AnMjniJSTqsm6REskEb7WF3Y98q",
  "key38": "3Pyp3UgDeAaHPAy4EmgbFQitfgZy2mM5Y4BrxwYLs31c8uvGB1PX1Rvs7hibYJABZ8LCFhW2g2GW6tF8JVrQoSPs",
  "key39": "3BYxA2AHxgiDVGjjThtSJUoitfM1MAj21wQz9h16MFjzPT4KXhACMHHd7Qug4bGyRwEYDFDpBCrCNaAZVjkLy2q8",
  "key40": "2QVeBgN4JdfpmtxseF7Vz7FV6jWggR79DpzFVWosntNrSJkeQTDyqs3pRJJey1gfj7CKtkxaF34zHkdhzBKk3Kj6",
  "key41": "2rvxefUJkJ6a219G7LeJpZy6U83u3C2usqiVhu4bwGrhGEArti82hodNWFMsLsYVrNScS4VBqzDV78bJH3jhiYQV",
  "key42": "qc2iGJHn3AfQHr6eGHaGXZWeTi8zDp5icTzYWRptFao7gyzoZFmyAaraotqpN5ry1Q6X6dffPDhKHaHtX9M9Xo3",
  "key43": "MT6wWgtDz18yaJB71kF7kJqX9kfMWvqokvQEHv9iqzwrYxwznToNBrURja4PVJcRPaCU5oHPWbCXB7S9uHKANN6",
  "key44": "4NexG6fU3buTiMQz395Ns9atFpE8py9gazoB5tuZeFY3hkjiyMHMksWCsBZ5ceQBNEHiUMsNtNXey9ahaZrT7pyN",
  "key45": "2QmzKLJh8W35ihGRpUDTRRB72ePD3arWe6dz5FNh9VVd55WYX8rPVogSHrrS4W4y4pmbapkmwCNt1q5mHwxZh6QE",
  "key46": "5iQWvGvveZB7sFsBgnjk1ZuoVT8s9QfdgqVTtNebhaSYszDU9MUrG3iR5SUjA6QZ518RU2PMZbrkCcA6X9eatMfx"
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
