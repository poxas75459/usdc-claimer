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
    "2GxmFVpD95y18kradYCWUBBeBmxyp2eH5T4f8wPQryX6tEW2Nh9BAqqXwc1t9yXm914bK8Wc6C2yEqMp1Q49aC3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397jDXpmBG7hrTmMURUFZtBY2Reb9uyU62cc8tSk5MA5VicRiMfBPzoR9fzT5Hko5gojEqCWRnafXxjS1eGo2rY9",
  "key1": "3yMx5yvBGHbypX8eqgY8T6EWN5xmveRsXK3zMQsirLZub4wEimJR6gv8jTw3fEv6qwd6ijUecKjECwd3HNQxTk3g",
  "key2": "4eGUNfqvQb6NnojYejhg9ovR91hJzAESc4Ujz8a4GtTN31SshjRRwQaCmeVrarX9kEv8J1C7XUkWkQBKSpJbi4Hx",
  "key3": "3QdFpZdFxLJozY1shgM4ypRneknDx2EycbFM9fNZkqpbi42VGzg6CgHWrerJ6mWwBK3BiDQmz4Uy9UyMeCsPzmzb",
  "key4": "V4BPQRm5Papwq2dUyYLxNupZS5jM5fchSbJzyCL88HjVN57GNoFZCf3NAAgrHUmH6DDTWZ3Ukgda5Vzx6UUYVbW",
  "key5": "4okdUb6HGv2xZ757ddnuFNC4Ygc1pu1KUTw61ZLbM6jtKipwXtWmtABdm4T9xhVgLLunULerLLw7CeGdz94kwera",
  "key6": "3YDwhazZtZT21RFSnA5ddppHoEuB6htBntE7N4fWAHLATFjMPg1GYPXnX14xe5BGDypjMPWs7r12pR9skD93EHoM",
  "key7": "gWfZcGuFXbWPeDaMvWZwt4MUERmGHGz4nWUCfeizRPt1Hg5CXw22bZ33qCpWxWnsXQjrbK6TQ6tYEsfNZcJExd1",
  "key8": "3Ao78WLHgHufb5vyxaj8X2U6HxiQdRWGGeLrGEmauPb5revQtFW5pN85RPArwRmMqkyXztehvshWbD9RHaR74EoD",
  "key9": "4pkfhZ8h6c9fD2ARjH2UQxywbcDnAZpfurmFtCNJoEZAHEzirSEf3Mx91HCUHmx8Qtd5r35eJVtTWj4JhYLMKvSx",
  "key10": "4ZTUrjvis8cXdWtMiWfQNvNFejtxDNQicL7b3RPA8KuRHxq3ZLFcQ9YHwv3SbnFmkVbi2mwJndCQiBZjLDXSHSvf",
  "key11": "7HoCbwwHFGkUtZEQMr7S57WMR7YxUpQRRfoWUq3xbs1V5Jy6tGyqucof74irKpQW3fTvSDSprDPwsQmgMt2EDpS",
  "key12": "3A7cgC4mzfCPttXKfJx3YvUFB7NNjxbWmeSCfxTXKsrQWuyGePH4tEMh1Mgkda3EYxuKny7GmBXd7ZR6sJuUd4a7",
  "key13": "33yDwgBXZKy64bwgsoR6V1H3YfvCfk3xDQKpEgMKH6Nva1XNbTN2HoW95HXqrsodm5xPxU8dRBE4gLyVXUbviPDD",
  "key14": "56XnMCHBP81eoqWL5Q1Fccj6oMFLkt8JofbJv1sMEHcMmJU5J9ptdz5vZmQ6Y6nnwmmypyJF7EwDBmS4CWjpe4nW",
  "key15": "2ZVXQYotQAZ1uBukPUzpXbxRTip9Wb183AdLxAZ4Mzrzqa9QBBQtM29NFn6V1drWGbeGFdWGZ9NYe7d4cgi1NAhy",
  "key16": "3hFjiWDfwux1WCTsqaZwkQL9RGJDSuJvtbed3CN22PVg59CSb4UKNAWSzx6pjAHjsdzPNE79ZWedEHsmsMK12ixx",
  "key17": "6pmk7EmMRXxKDZmAVuZMQQ1WhNqf9KD49xDbYEXowjJr8thajuUzv2UjyjrBMJ7iH7Bxaj9gKRfkBTXvF37t55n",
  "key18": "2DUrfAn9STjgZqwTfXe2w4WiUtuboPhmcLnmV85o7vNxCAuJDiAriCeMDmvB1PchBov1VeqtLGnPugoMiGu559Rm",
  "key19": "4RjwiHufAQ3BgLF5dF6PsuhuHXBxAQFcjZ2YJgqApnDRCGreHzV6LL1d2gfDccLJtaEcPh4AsP2uq7j15JH3gUg",
  "key20": "4x8rV7NNFvHRcMt3btBnRZwG2aQENSXbFu7Dw4q4JxsUTyKwFs7VgpSgeN22sTuwzcB3BDofkMTwH1iUS8q5yNFj",
  "key21": "2LdQYBH5jYv83RgeZonwQ4nkCPs2bLKatWuT3gZMj8ayheantzV5UWUfbqTRL8MkuUxUZcM7KXjJoCayDuCKoHSw",
  "key22": "3n6upbWXvEpkSYRJP4p23zH8QXhSxRaAkbmPM7DfzVcFiD3sY4fLDf6MsQP3x1a5w2YqgncpxCdXAT8GNFv3nwc6",
  "key23": "2z85GqQa9imBsU4EkX5HM8MBtfQPDoykbspsHgj9B4nkKWLGzHbEJhvtpCreRcdL5MXDuQjCeJuwNc81Aku7deo9",
  "key24": "2AsKkZfDxqhwPLpGEQFuwoq6b2HdN1URS1tw996o4CXYTKyRDT4joSKP3PPGKk57QYz5axPmbvhP7Ch3wa1PcaDP",
  "key25": "2DiLHu2HUXT3YuNptrmB54uEEEBh5cWuBVHezniTpYYULYPnqmyainZb1HCaY5CLCMUhWmApuzVJPeHFFgDWEXpa",
  "key26": "NwCAKd1QEbgFF7EuDvgt3vbMgEqo6pA96b6jNdE4zN6icAVoHPPbo48ECw3HwqM8RinGUgiXMfCtsedAameM1QJ",
  "key27": "2hZ1jCKSHsHuSW4sKkrRZBqQa5UsbUAfqf2thGpJBW1fxE8qBPz7x4ihLVJVAv4sxCaGKetKNjWkLUBWun5AYfji",
  "key28": "Xn7CqDjLQ2bXQFGprir4R9TE6ZYa4D5NGnTv5ggxCTyc2h3hDk2g9HdMBkE8zEi9jRVWq8UPZKbLa1cyDs99p5w",
  "key29": "5hYU2yUgymhResXgHGb2eTTArx5EPzNwNbMgXPQLHsaBFNPrZ1V222LDz3K652Yhsn1nVxnwemzrmxyAucjwNKJp",
  "key30": "4pQeEUKv8KC8yGQsYVQ49AGdEDtBa1yKChor1uJ9YrGuK7vGcq71Kwz3Xt2GJiE8VBCvVrn9aLqa8TJCa7EsYrXF",
  "key31": "xJVXBtMsJLTt3hkrqr1AuPuqYiz9KMk63jEB6wre7q4KFwnzYfMJyx4hatxGTfrfT57kxwCbubYftruXArgGk9h",
  "key32": "5QGud9dRe9utGFvQ3Tbs678ZDtZ6MvDKAKpEYhkjZPDcdakhm1yNihnwJkB8qtNVzaf7cdKVuaSnsyRqsE99NxRy",
  "key33": "2R86MbwZQNdBtcwtbk7PjdLemxGcEZovqm6fvMEAmqLvztmg9XPNGcNsVst6mfB2oj7VYkaXdasYMw2n5Fr3we3j",
  "key34": "vo6punYvaAbcfFJSVSddW97sKuiZdSZtqXML69B1rVSrfh65uiBz8BPXKAXfsUj19F9fCRYEhY7UxDBg9wDYKL1",
  "key35": "4KNatNJzY3Ee63ZJAGpfRuW5PhFRuqoXyDnvcGZFiQTDxZdEbkgQ8HYY9TJCGyLnj8qiTXJygtHcsT85VVfxEDS7",
  "key36": "5C1wpkir94f8dEfqhqUkEz1bpuwde445QUGkN848yZMyNu7EWmRpZp3eLZuJjTDQEdmgEVtsgiMzvvrbuA1wsHgF",
  "key37": "QVUwHkGMEETS4t9YziSDtHTrdwyM4EPv1yu5YNACanV2Y6uTbCRLjujrLArgBHrJqWNiytDXFhTfVJoHqarYUuv",
  "key38": "37KpdPrhJbHdyzqEyNTtvsP3Zcs7mFV5txXdtT6sZmMQogtZRUNsHVaBVVMjKhd8w8c83fY5sNE9Hu6wCL9swdzC",
  "key39": "5XcdA2quzJdJKBYBQfUMgAyDSrKZDGPG73uYZ2PfpAMoZ5mJJWD2WzBoATruMwpUdwXyX7xuQgXpEpw5A64xoyTy",
  "key40": "aSV5wcN173mrkSqVwMmtgQ1M6j7PZ1XZf1tQdErZrRVL4E25dhDzWN6CagY4WKQGSkBe4ZVUh2weYqtkKHAn88n",
  "key41": "2Svvi8JrvZf8zWSFpjgQ85aEZwPBcmdX5JiMzzWeyRr9hPLAcQiZreeN5M9z6xwTuM9erDEuZBvD2sGQNop7pBCJ",
  "key42": "2kkybR4zSkTxysU4JkmU9tHas7zZVTHuiJ6zuj6yAVhbJDMQUC177Fru5CMm1xJETdNMpt3h2ErA4XzqASNfFQ4U",
  "key43": "2Cbht3eV2EmLJjsmJiLQkC1MyBB5U6142t4oEUJwyhJPbWaRXo2QZ3YR5WWPxaMx4GWEpu76Kea8NcbvpsdJ4Mqa",
  "key44": "m9Cyug5dQuL1Q88WEZBDEUkoUoZo3EVhpee9SiNyT4TsgodNCX4h6dxJt9dNQMbCnjyvJsnM9aX45JmYKeqryax",
  "key45": "4hpjnU7V6zwv7hyYzJtF4nTicMNKmWF76h7nRt9H9S2ZM4t9mfdAnGMgkXSQ7ptDtd3yRfr43rP9SVpWf495wHj6"
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
