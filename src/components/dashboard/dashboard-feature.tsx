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
    "bRVAkrqpeDjf67PZLiNNq46MKT5hgEA6LTraWWrFhqnZxg3taVqEsYTn8PZhdWuS6jkiuyxnGnYjfUbGfpist3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aWJ1aQmtMtoU8MDuunh6L7nGwEvGrmYsiB2S4pw3vS71hid98edjvcSJyVphWvYPGLSBGbRcogTF9ExX4s6EwSH",
  "key1": "2tMVJ7sv9UAFodguQoPrtrM3ewn9LNAqE7PMgW4PQgqs84ZNthbL2SrRUnUNBQz44tt9hh5PRhug1wh61jRr8vFh",
  "key2": "L7KST1KDPs1aXfo6tv5mn3wbRn4y7YKiEvMZFpDYmAYapmmBp5kyjBjuhw11fTAPaWKBN8hGTm1cPstjqSYh9y8",
  "key3": "3rsP2rD1rRkAbZSDPCpWDBa2agDZok9QoPErBw7vVLXpcPHNWrza4mHF82jhXomHxeg6PLWMJE5GpGfi1QMgw9Zi",
  "key4": "mAok4hyfufUWr782BKkjqYoJS54rctUjjJzafjuyK4Wt4Zyd4HgGtfdKBq5nivk6rgi92Yk3kRxFjnap2Jb5bdH",
  "key5": "ix2uqrScYCdad7GAptKhf1xxNSvVpU7d7me82ULcuKJx4eYTfzhD2yV3Tv7NrXoD6fTrhQ2sAiajAwQgR82izfp",
  "key6": "4yPtQKfaY8vrMgV8VZx3MBzZZArZpstk2YBH9FxMrvhYJqNsf2ARaUULPkiteyZ6bCdcYmqrxZEaCLchUGjkdeq5",
  "key7": "XtZ4VqY387ej5AMEpoi7iwbT6PBEzVQiHwfQs1xsWtN8ZEfdof7hHn2469HzoW5nw3HCLtazA4PTKes8u6o7XSe",
  "key8": "4ZfAAaWK36q5SoxViiZS3DXCmrkQFRY9Anjs9pgNsJPxF1hLcqGMkiHboXZQhrs44vfQAWpv6S7e7ZatYyA5svmP",
  "key9": "4NevtiWWK7NwsQa3JLuyCKewPVSrEtrZatePssmSniPEjTsFcs6mmZBaXWumoiHtjkEVixPTX4k6LDUZ4u3X9Guf",
  "key10": "2D68MBs3XfmHpUAKNxVQVxTT8z75QDnHYFdPP6q12pXFq2XUnDwkmzdgPj8xHCTbd6cwSrA2gksxX8Tf29dGZyek",
  "key11": "aGSE97a6rZbUTmUZMKrmM1LeMtz27uKCzkj7rKA2tkRabcjQuzESvC71Uv4tmCKZEiVq5NruL2TaNeAaNX1Fdhw",
  "key12": "5Nqu9FGN3FYpanQwdGDazCeUpUQvPFwBXKwA3M1wpRgQF77Xbn2HKtrZYPGG5be2T9orJYs4Q6rEQkEb8ryH3hVz",
  "key13": "2myprB518SK3HKJGGPD2JJqn1Pup4FMb434pSnitEpxbcgy9WQnuKPozBgjURZemmhCV3cfQq8NF6Mu8w4eVnTq4",
  "key14": "4LW4FfBoB21qmZ8Qg5RQ4Ht9HdPkttCubKqcH8T8NGGd8WWYq4VNNwCSTNkYqet9vDHtNcge4zyMuB8nLdgXTSGg",
  "key15": "3mrLA1Rvi1e5pKLAy1sPirqukptqm1n5nD5CoU6gbTNLwKYZCx9oDEwv93etmptEAjVKpxuFVy9YEop2fSdVAmq1",
  "key16": "4D4tyLWEh1q9XfgqezGYDqZYAe3WMAuKwzgMRcLow4mt3B3dPeYRswBp9X6DeqkrVkfzDXqLqCUjTY9b2QkUaziZ",
  "key17": "5uQRjKuQxDBMJZDg4XZLNPdEKCK54DT9HbALPYSnNnEp3SSEezR6GsskTyq83WGxRKeK5mMVF4kmcsbNi41QNoBQ",
  "key18": "cjnpfnAgyzpao2DNQBejgpkkMSnvTbGXyVAAAB2Cn7U7mmLM9Zfso53YCmA5DEzxHV2ceXhxBDXKVvp8DPtWYXE",
  "key19": "2wEgdexrygtaCLgKRLEuRaF9vkAkJ6ito3U8jTjmo2jUcvDhNzToKLYbGuBa9KPWiAf1j5qFQzzvmTkn4rftEXy",
  "key20": "2VahjWBBEk8tC94gVSyF357ERu1GY1DAkhwAguznncVDQiArf7b2pQMAgLxbJf9sgp7VfqVm9WXs1e2nH8KQR5X5",
  "key21": "5Gs51KnZJB3DAhLZexdX2mxaSaCAJBffsTYW2otQ7itAWWRjmMaRz82TmhkF4YPkpLwbp9eqvSJWSnoxw8jpDA8A",
  "key22": "59xZBNGwdw5LyU75cACp7cJWWrsULZLnPcAx2vbcWJe4LfiGpVfm37MLYRyHjnRuNkZnUvKKxkVv6kD5veXBUPvG",
  "key23": "567H4517jfzuyLNEu38BZAnzpMWJzKmpgXSXv2rMj7rdyekYQEWbgFf7K9cVCdm8g3d61oZtZBAFzqd8kiKQEUF8",
  "key24": "C8cXzHUfpsNfDf6eHrfZCRW8kmd7Wdntwk2goLr33JZ97YNE4jX51vXaG17bbSuwY8hTRPodr5VgXJ83CgKiFkn",
  "key25": "3LpnKBmaFb8M6rhQ5viY7hPePBcAuF9Rfg473i7DefmLq6hzqypuJg7fKvsGx2tx2CtjGK1VUpCaoz7ijc6y5xZS",
  "key26": "4kvMcfTrVsPdHj4Y3C51p4AF1AEBzEcRT8VKDCM9sHCt1uoQ5F31LkvSNpYRUATEE51dTHdkawcNRQv9A8Z8coKn",
  "key27": "2VryX22fSrZiZw2F1JPfp6wQF51QYbPHMWvVEvmkayxgnewYq1d7qQSVPF5JB3AKy2eUBLGELXXykWZiiigG8SwA",
  "key28": "2WsmNWd47CKS52Dh16mfzZZrcrL7ma4HffwxLRbu9MyFtgCkiLg4MzoTGucQxBmfETNn1XyQ869Z4riV7xtLhWaC",
  "key29": "4s5pwvperYCpGkP39whS1ByiNUVJgMoMpPABNPc3WgAxvAU2RJWnRqn8ofKF5wNPB62zEvVJSYWRNmvYXdQ1tkNz",
  "key30": "3NDkRCMB2LTnn1uJaNNQvQKQQ5ybjiU8qrvKZmVTxhF5o8Qk3HmjnGzvsWifRaCEie2h5a66SYXwsXBKbvu9p9QX",
  "key31": "5qetLnEG4gBqdQmKbW3d1UtPqG72MBpK9FcidruFVWasJ1bLBzMwh5GE4zWKLggU4E6zy2RV21wMiGNBF8rTXksP",
  "key32": "45DpL4VhLUjctm1H5GEDdiJE3wYpeeve5NY4KrtcTWRB5DnmFBUDZ3eevSKnm7PG1kbriEQPCiUtCpNxZBdXM6wj",
  "key33": "3zSWjRkpBw6kijToetaKNn1imNFYyhY2fEc7GKkds5Rv3HyrWwUKDqvGuMSckbaKAyVfvohJM5xdyqJZim6uprGv",
  "key34": "3CzZNUNiRa2hEvVhQxPVnKApHpnVcEWcFyBwYQogYf4vPRxJYB6XSkd5nRdXPH9Xqf32oyk9iDkznA3Hvo4qXV95"
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
