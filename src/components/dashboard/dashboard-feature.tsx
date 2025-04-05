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
    "3oMxKVkMMPVtKVyuESYa1BCk6346NicubvqRjdpKRjJaK5JxSJeb2Hzjx7BVFy1XEBJehNsqCF3VUaw9Pj3Ck2aH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6yP7pa5dTrkwZPeQ8Q6w4J3XXdMvuz2R8asFXY6A9jDUfafnafDWBMYzJcib6V9Neg8egsZaGQ53PswBjV1XPN",
  "key1": "2rzARrihjMuNkHnVyLCBRMZyx8RAWnnws1LVUao8sTJ7kUCWahwypo2ebNtenhnNFV5x77mUbPq86qR7ZE7xPb6n",
  "key2": "4cd2pVtW4u4r65ea5B1NDXqxUKBAemreEEdKA3mXM8UpSVKRSxMNkLZRdTsbjqHbFvhmHvruG2zVZhJJRLs7MQkH",
  "key3": "5sozeqdXTVL9H9zsGnHbmanYPK7Kz8PdgSiEJPHqHVWVRZCEjaQVkb3sWv83RndVZxmGxEkxJsirqF2nPUVR3qSR",
  "key4": "3GwuUfANK3kLdKpNVyAJyb9nKTLA4wDgU6p8uTt2ijRGDiWtAE1opokydqaDZSc9X2zboNSzH7pRU7UywMoEnBzb",
  "key5": "5wYmCbsyQwGamQ4u72fBN9RBEDHTGZBZiKymyXye87s9vTAWxjWCHbsgyFxrBdWqhiUWC3cScsFoWy7Er6zNWogH",
  "key6": "5yTSBWTfcn5PWL62chFjtQ6H15o9NfDeHfJ89HkCT4ETBbFresgSwiwc7bM4jfNrDVA1wapvFq4gF5YYCbfob8xp",
  "key7": "4m2QPfuNEYE8ZUnMbe5f6pMvtpGsvwwjGKABV9QSaMj3F27Yif8zNF1PPhib5Afd55AjuJ8s4WFpHPqq4VY4kDwX",
  "key8": "qqgtBoAXPaAhTt7iXdQBsQ5nz72F8LE19n5MkZqVLBC2jPxiZ4Mh11DsALyvsRZDFNKtPh8VXtpixo2obTbZqs4",
  "key9": "AsYngyb5YmUrUxc7KhTBGzZ74E8czpb712ktyMWwGUtV8jctN5zwmvM9RfhxEPnieFY9H2jdz255Nn5FhjkFf6f",
  "key10": "2HYKhkBgDp8iTMjKh1t7vQznsaLJRs3zq95Szp23jG1b1vB9yGhiXtm1yVC42hmHuNkXFAqLQRor4DNakP27fWQZ",
  "key11": "3UvHcvKAAE4yiBDTrPHwhTcWPHaW7K7da1YpzWcK8uXtLBCVRzGteq2taCAsoA5w5ipfsvEvSgx5gE3nBUw2CRw7",
  "key12": "C2Bgg9CRWHsEBwYPnKwdQzTRzjDo1anJKjzzPk6byBtN7GNEtDf8SH6SBGSwBhkwdxGbRjyCw3BFScbwfVckffP",
  "key13": "2J6jgVZS2YZSoSZLjDT3dSHA6DgrxG8pAx6Hwu6f2Ug45w4gB4XuZdexup5mNQAqTGdWWrYL873FDxtVemfpedaA",
  "key14": "jhzmrLSipueGq5Gv5BurM2AaZD5r7iYfdrojYV9CA6xxdXu5yPE389xxuNRPX8vs74MHaVq3QffuNX4nHXCYHe7",
  "key15": "59oEsyHaAXgfRxJoLJE3EZQoCgWYZ3nXxSpeozQ6FRJaPAn6LGRNooyWAoLpbn9Ukt1H18v3Lxu4t9KMHVzTyogV",
  "key16": "54DJtpp96Fm2LwjamAJWCACRWaRBHYs6HttkP7VrkXnTuuSDBzqCwqohQhDZ2Q4DFNAHcsnB3XFnHqTtEQUSeqna",
  "key17": "4hNLEiDfKZdLFLa9F6xKKQyEDyBo7omxn2a8BGME6Fedi5cmg6nMTELTGezDbHQAd2r4kKBBR1RWUqUqo1Tc5dQv",
  "key18": "iFhFLEd3QjsR47dvDX5QWcezKNN1YBvQPpZM3fhMV2gyA6V7tAaXxK3qg6nvtC9kx2jA3QjKMaNwMoRCErBgVDW",
  "key19": "5ug6kPFShPUipjyFnPoi5yVrzennutU2ezScujoiamyqQztQ9oLNoJVHWFieg4Bmpe1nioXVTGTv97FdAKcLW1tx",
  "key20": "3hpBEPmkph8WiEkSQwSUYSz85BWbfd4wP34UhGRGmYSTQL4uMU1f8f3VwZjZnhN6k7tjcFGy217BGywHALeTTQu3",
  "key21": "4FJb2BnfxUMwQu9JAWkrNdML5HLib21vvMyLuZ1WkL9Fcff6vLetg4M7uxVxrwzWEsUibpFr8xwH2z92LLTo4vmc",
  "key22": "5YcuNZPecd2WQh2X91TeSUUSwCmsBrCwFGYFpcvyq96kq5cfz9aSbEyNgtwDBCHTZ1gVbuAWMtKuZEfG9U4xcuvu",
  "key23": "5BmEma7Wdgn6maEK5evkswfjQQDuFn2CKA3DsAB6pBLReHboZL2tRmAQs6dynUySnu8wuCZxvxhy5pHoYvxVkPze",
  "key24": "3ZtXhAd1PDUaPTbpoQWWyvRBQnr3o2RE8B2bXhk2gCwqa1ZqpyykurjEhhnxuAwn9pE2YsmvcGRhg6jt9nwPa7k3",
  "key25": "3DoF4oUncvSg2zsNYEdeiVvtko6qJXnAXp6RJjrn77qFR4zTxwESg5dgKHtrGCsFSskZcroMcd9vnrVdzGrJ5hbB",
  "key26": "4JrgyugDF23vaoUa43sZP3uGPqxg7JYdCfXCtpp3D58kHMAqWw1SRPPVo24tsCH749S3UERdd7LPKnRFcoc6oioL",
  "key27": "61Yi9aj4dkcxG25ACvLPVRFhf2FH8WsLneZUCn11eu6h3Jd5gyCME7CKhxkkXoM7xL1MHCNMgjvQogXU8xmnRXBj",
  "key28": "2mTKPFnGdrrJ9imcR2EvjLLXAxaaPF7D9TsMSWGLUpkM1a7a5Vx6kNDBcQiL6dAUJUPXPi52fD9C8URsqyJLSkZa",
  "key29": "3z4mqDYEeuHiuEF3pdKTBTXzfKt5Y3DKgid7Qdaw2fvhBUzFXuPAsZBoH9PQdbDWt1xE4fDiPsxNRxrFMNh9X8np",
  "key30": "se2VkaiDWEAkhntUtU6gp6ufRe5cDXS1xkdEML6MnAEbNyoBVKNM3NvjKK8jefZcSRCa6xMs9ERoyVdgMUHzufc",
  "key31": "2QjAS6JYPD7mesJycXQBn9E9Di42HhCC1KQAbptsTFXwjN3hUAfEshb2WNccUJrTGayqcCTk6x2trYjbFXwkwjcZ",
  "key32": "56dEertGzAQzNXVZMnfQsF9g8xcUqGn145BCrS7K6d9kkXFUV7KfxVLes89wsJPVNboiJcpTaFLJEdZ3BT9XpemC",
  "key33": "5m6B1LqXPa6ae6TSVxY6UT46dWreEaVf8s65sNmviXqDTLWg547M61vDxVqT4vVzoKyhbCWVhECvai8ncbBLLyP2",
  "key34": "4XTWBXAEakHwXS9EvSu8fVXp4Msafn6UxL1jEN88CRv7eBNwrJtKZQBVGzZvRahWDAQsaa36WK81YaeaKc5tWxBb",
  "key35": "3pHieKr36zyiafyV2nAx7uprNPG5ZeBXcstL6Z3kj6MCF3bMBu2GqQkmojL3pAmFLqwak6tSDy4PGPt73tHSLLe3",
  "key36": "5NKuq36oVQrDgSDfctmrMDfkz1kfPNGvTNo9yuBKeuv3FyWENNesbwXQK6LZgZHwUpzotTSVbK7CA1fe6mWnyH6o",
  "key37": "2FpRwTvUQefnpXAhftohbC1yBPSQAy7QPhS4MNzkN13iQNtrom3A8gAgWKZUGr3Ho59hdDy7mo1nNf7BwDnzwzG4",
  "key38": "2WQbjGxChqLbwy4Uf1RdsG1hnK8W5pn4S6T9ZYi21m6EaSBBWddVPB4rSBrvY95tEbA9phT732Y9k5Wiz4cAZFcP",
  "key39": "S1zrYSJhJUHMh75kPWA3XEopX7HhBwN25CCdej8ghpPrsRsPJ6t89bQYPWEqikeHsLLLhy3hDmCphf8H7UFkqrc",
  "key40": "4u5qykUtVykNswwfDTPgt3zg5iMHAt8tL3YJ2GQCpxsYFYCeVnVTKrNGR8gk23kuD3511uSwtNcD7HfhiYcbE5MN",
  "key41": "qDVwU2eoXFsD4MBB233rQQk5upGQCH6a7W5hew4qEQmTGhuqcEVrXFBH7LNtcvzCnu9Ty5CszwRHSX34YrscCFy",
  "key42": "4gLs7ntH3f2ZNZwNxykUTd6tubzvVTY3NMYoWC4dMUFb9YDHTvPvrtqPg2eRyqE97dvYisbCWn4SyhrCWncSmfV4",
  "key43": "5vBYjGLxHxPV9rdetiHXA4v9xrQp9uQC6jpK7m4T5fHeGXJKFHvTDbDgCDBt24XpqfpRmKSzfq4S1MnhsgBBRKoH",
  "key44": "41yd8Wptw26FHDqNXdsKDTBwXMgpv3h15qEuuTa1PqEbi1TSsqDpHfNTNQKSsTGPzRnyeNBfmpcCWrF7ymu4da93"
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
