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
    "3NptxQVJfHkZ3GwW1J4SHYdouCX44QuL1CPGVj8FTBJ9gZDLVTkbvYngWH3pxDD26Yw8NcQChpYaEfdvzFo5M3SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xH8YH1bvVodNYzr9oaxTbyc2xF8mywTyykTmUqo1DPVfCwZL7B3YawxHnfU3421tFN6C6rGskCXDMd7bCUFZYXy",
  "key1": "3u727bVdyGjoD7tWqQrjfdkXiJdaVM1kzqKjBK4P6VMaZPz3N1m1P37CwN4hfNdiafXkXnwiNajeS6jAJHSdANGB",
  "key2": "3eeBVtfjH1bwuYdWgsAoH9528irZcSAWS9k9bAgZi1pmytUdRLG9DRp5MsqMkUuvmVrvqJj2sCQzU3CNTa3rtsdp",
  "key3": "5KGbEoun1aj8MAfbKe14nUnXgu1EXhfspnFjt6uzzNxYCWSHPeHv6dxyS4dqSfhgCJ8Qjj8FERTm8yVD5BRhKXqR",
  "key4": "XNPZium8xG7yqWmRopcgPara93Ku93Hzc6KHd8NfjsyHCZxbPVJr6AQQtVKxSxrzj45tqjUEFykmqv77A9Hsimy",
  "key5": "5Ns7NuVXfmSxoxJmU4Uhd1Dq1oJcVSUND1qmkqqxSoqGtneT6nbF3mUZeHtYh64uR99D9MXGtdF9wcAqjMjqhja",
  "key6": "9D1Uq4GWBcgbcBgXzHKxRqXCDM8JeJva2Eg4zyvBKpCmNMr2upTK4V9YKfvrbyBSggU7zLSGoeqZFDWWj2cXYDE",
  "key7": "5nf9nfGFAjHmbvdLgehinyXfxBy23acwZnn1kwthNsDCUiPjXnxNut3yU5zqdW3a5CK5Hr1Yv9xwVWh3oSs5eBYH",
  "key8": "4sSBupATw1121iATVbGMMEW5nxX97qoZnrhkaacqZTzZS5Z2NqzLJWjzrMDKMiU64sAWVBHNSKLSq9Um6aDs9t1w",
  "key9": "4QnMSgW3q7QLMRUuZF7ihXmKHVHSraDM8uQyn3oL3uzFfLahAVA7ao3C2gAywZSaVGo9eLW7ecBCP1DY1hHVmm44",
  "key10": "3do927NqWJJukbsfCEQ2ALNsDhzqYfLpnRAJ7rJqDLd7NWJXJwZfYtq8BXRgMDF52mQPV65EjLjgqCfT5RCg4xLp",
  "key11": "5uS8LwPGfLC6ks6zKQrQQ9PhnbMmYruCyJ9cxJ2N3wAAqA6WZERbKNjuh3TuCSqRfBRnDQtckZFAdESccZqesbe7",
  "key12": "4QRa7WcYwoqS4tbXgshBk677zT9gxZsjGvDAsX3qXqjyPf8AmacvyCne5DNXsDco9sDpsDNR4iFa3C1SwrYeNzDK",
  "key13": "5uQqH9zxztuCuXJzPaZ35pNDc9HDsFUKRGZzHucGwiVvP7WKdhyoT4xLzuLqXcP5SHxh2WEs36o7ceEej54Qydg4",
  "key14": "4UqYZieBXieQiGyEZAXxKnigEDCNiiqp3Nahcz1RXYBADAc3RZmJEUFkGYq1xD9Zq2XU4XDUZo1LxWw37FVuRUmx",
  "key15": "5mnrWfN49Vk8ZpDq8tM965vZetzdY72hZNTp9bsMYqFMqXZBAPmKWmEub6BrsgBZU1UWWnaxUHQ5exPpXxKsyHnh",
  "key16": "hWvUbKaEPxHSHQd9cjNFNCQoY4SSA26Np2QDpMrXNAm3Tjrpi7YdYaiPA4MXmSJSyz7YVpBgfLgTzhRF3QQAFqQ",
  "key17": "4vZUJ6GRWMeEaKNHHWbKQDd7Ej1EsCTy1YrxmFhHZDZVJCNcxMzHBkK2qMkYpyzSqRRiUAuQ2t6sPJGyFFfU3rbD",
  "key18": "2Kdkdgp5cJrmJnnD3d7ZB9Z4onCnA6nWQMmE1y1HyD6eDzX7V2YGQqqWbnk4cTkChVyZJdgrJ418EMKxGKykQpNe",
  "key19": "4SxHZkMrQ3papVJF8cozKgm9RhsvFVKSqrBHugDZYRTHYxp4zpYFPjmGAiEk4pN5aryrfHRFqwHGX8X1ZHtt5a1v",
  "key20": "8iEeypg3vmDXsu9bNKATr6PLk2MfDvkA2MHvkhtwGWNW68XKdDNcPTUda3RTc33fwbX3XevEkTcGGEBcBALQV9K",
  "key21": "4pHDpPvfQNrcmj6AdUQvsyvHBbvzLpKR9nuF6EbKUp1U8oWbHWJUNmZ5z84ob3QuoV2Vah2FghoXDLKX4o3f4sEv",
  "key22": "4dPGvYD5TPZQjcm6qZ4oj1c9MgRH6mULpNEvhTLvfvexBrqfQoekXg3shd211Zjabmvqc38dkbGVEG5j6MXao5hc",
  "key23": "tjzELreS3TuhuZp2RMgH3WVP4zjKA2T91LTDAheYvwSSHaAndA9V8VrH84DGQUCkrWjyNtFaB33KdmtoFnfUoZW",
  "key24": "4fm4Gt4DTPyRQAvf92djC6pR3FqeErDbyEhZt7UMpPMT8kjEDhDqMBEhUH7hmXcxgCWbPJbY8WxUGxz1CQyqmMwL",
  "key25": "FYSQ5J8Lwutc2ajoh7RXpVmSzjzwyE7TnfHy4nBTthbUAzyx8JEvmgBnb5z2XLpDXuWttSuRFGTzTG7dWf3w5kK",
  "key26": "4uxnoAGdwV9L3152DKtDXhjKCbKJCrB8x6Q3JqwXyeaWj2M4K9cMZMU6wcqkq24wkJQk39XP1PUHinokEgTEZxCY",
  "key27": "pD9afrGchYvDjmrnai9Ybr3N4U6wbHM3JEfq55xEH5J2KSvtSgawC3G4PZCygpabz7zw9bW1M74F9VaZkuvzVwQ",
  "key28": "3v5hj4wEZG2xUWPZHKHDFQutd2YZQDyrJtyhG438pYtStnFXrnxT4GmWZbgRdrwFvGxhe5a9BUeQTkFLm543E2Xy",
  "key29": "42tXbYL8sHi8wJYzzMfCSxex4qrVD79McWfw7hoez9BWfdU1SgVC5jAbBrqAwhVi3QMunq9oQanbEX6MeKJsmG7f",
  "key30": "5SE6oVg2qSD7gGKH96TTEtwoJNFV76efLYXZRQgHb51F4rEU3wnLGfKsBT1PvS7UY5pd9VDwFiYyQ64TNdyzn4N1",
  "key31": "5vFLkBPaYMWpAPNsapmw5T11vr1yo6DGtwBsA7YoQcNsPchLhBkjgxvyh89aPVDJsxHdEN2vWEc5aHHc3mqtf5Hm",
  "key32": "4XpjwvSarViJVnhzpKFbRXc8X2D2kzGxkTXnUwRicMaBZjGHHbUq9nqEmjga2TgCYQabuK6gYBndSwysqFASukQu",
  "key33": "B3Kh842WRthpWjWVs55m7EViwfxdv4Jedvm1FvKCp5NE62Us22Z4B1Q6MLSUaLuJxzV2vcdaTvNLtE6dw4AvQq1",
  "key34": "52RRWCvpTLuXSMDQRPCaRn5v9r9ieX69y7oNANngotX8ci1Y4HKsM25Ts2oDbtxdiuzqvykWpdoARCNfK7feSFsB",
  "key35": "47nmXAzBt859fWs8y9bG7wTcyFYCmXekGdJdDQj6r3HmS19WXc9FzHatMW31zvpVsQw6w3KSy779cgAGgQfR82kz",
  "key36": "4km5j259LJySuATzQ9MqEQ4d1bRZHu7gsoCCnsd28JqFskggg8Y4FnQ6etwAXHUK2u9QgbTiKUnJr76QGVHJBXtD",
  "key37": "5ee7oDGB2Xmf6yMAQyGSH2Dkn89uUSUcJ7exBeEvxpdQNMDK26fc1kKWJMTJYoaqm9b2HFWEBw2XARFyJREXx592",
  "key38": "5yBrnxwJ7xnazjdubLKmz9siaefcWbYedhUD36koc9aNypHNsCLaQUM38y2afZtt2cexhwrBSUqZGcRAY7bu7LkG",
  "key39": "CbSFvSLhKrJN4HZhvNjrAypQ9RseAUBSxh5Azd1Qo4vqP2aY2Dxd4mnZ576XigmZJsGENiaPNTCniwmyXAmh1vK",
  "key40": "2GL6nwk7E5o4WbRyGN7H6WWvhq9Se4Udwh51r5vnPXH2s3djDe1Z3Tnp6fDf7WF44dgcx3gSbw5WbwwmCTuU5PUV"
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
