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
    "3226KCZP2jmrCTWCTD3eLGnfyPmqGm4AvyPtVCtnjBgMGXwxbTuw1m2Gv17n6fX1miLajvMLegjzKwKN3FEZHPht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VPcTdjuXcJ7n2Ki9uevHUEdBUTw2qEBE8Heu57vRRmirhLAC746pwpuEKJqcVRHP5KWVh3cRZQaE25HtV5cKyb6",
  "key1": "Mf9AyBAncQHEVyewhh8SZjBAp95SwKu9GtMv2XGpjXQyWZTgLGrSFrFyRzzqTwkYTr7hQKtUw4AZDywj7C1J1Xp",
  "key2": "5ZHpSPytLhKywn4ScfXKThqjUv5fQYbE23bpcWBCDgHGZun7HCzdqiLk1UhipFv5fyckTJdXzmdLqHAyVU9b89HW",
  "key3": "4yBWf9RkWAWaCQpMeyPuarA8VyCtNhoaxYo5Po6NPRbNzy7QLwrgGhx6L6hh2F8v9cSauhLiM4UmcLdHubjpxew",
  "key4": "ofZSRChNNdfmounpEZTxcUWLpzaCk6ANujgQKHioi4nfjeXdwbxcovsfBHrkrJGMS37WeoP6KgogGpJtL5zPBkk",
  "key5": "5fcucVuXXnnQbHGRXLokQoVf9n43fuu4HK1C22PivcVJx2mRo97odZDDbEkrxqiLTVXcHBAyoqfGitmZg62B41YY",
  "key6": "21hHFWGRhuK6JkKjk9Jx9ZJX5nASHyE1D2cTTEXXsxHfDHis7ggJZ3naJtTpndUrfnGtFVhAAA4m1LPNSvD3pKWU",
  "key7": "3hkvGPxZbhkNZLbtaF5e5X3XLp5RDTvJeSx3Uia44jiqh4tWD8VnzJtMPCfzjcpzonv8HfoRuxaj3iakCW31UUBq",
  "key8": "4e98RzNMP1FxnHYso23ac7UCMUBjL4YdcGZ9AVPFgnVsQ2tHeCeRbULw2oTH53FVwDS7beW9RjBgHfv1dL7KmtNK",
  "key9": "5ZrQSmkTDWbceKbe9fRPLrtBqTMm339cRxPnbBfFxPFpewgkCpE4Jk5uHsrf92WeLVYdYP9sfSGSagQAofSzVFZH",
  "key10": "61yJsjnBM9BVkqotw83GPAVCu1MRpDhzje7aXrBvte55mkxzgKg8kLj2ybSWxs7Dd1AChJZfSbYWZf14GgJLJg3p",
  "key11": "3VoU6eaiPr1oTm95XBojy9HdHzexN4CmiwJzkkuKz21afCJsFz4oToLHVxtj92SpCHJUBDg7JpU7Wsw4DzGoYsYN",
  "key12": "3phLjhVrQSP81yv8s3mwmdaaDwBs2JEFkDqgW5NK7DZD95WysMMrMdaf3MXSYAKBjC9bjzEBtw8XVSHDWFfj6oEj",
  "key13": "63jXi95afNcp6AziTv7KWfxuZ7kxGTTcvH1nqDWs3aMPcsNFRdBowFcoHpWKDEWftj769tHAK6q3mLQPXgWVQWWX",
  "key14": "67qmBgB5w5CbS9xV7zCagECsNxq3LB9YA86htxWKbJpiKsxRdph6wRGL2ANMPQQn2oiv6bQkntbnWrtt3jm7Pnpb",
  "key15": "2sZSz4PaVKrsdb452DXomsv6AbX9aCmS5SfZJRvZ7cQxy1PT6ytYANCw1NcoUBgi6neMKEnKGeLV51kA9d3bg9oi",
  "key16": "45b8W9iG6CEjTuuczruDenQPCCm7ruTonkrfy4DrmSXZ13XWu6q1ZMmANFLRjotpLzpdYgt1vWsqj5QeUs7TX5LN",
  "key17": "3EQD2KtR6UYWfxj3H1z6ec3C46naouPfdpE5C6kfistRBpSrzG1aP9AW2dBXpfGB31BKgYtvmUcFBRGzyhgVuVfe",
  "key18": "2GcBxKDVECgxcVhn93niC2KTanXzLsurbeiM9JoAMJJDghEAYi72HK7DsgFJo7GXVQ4fDhnSmbUojhXoH97GfTvd",
  "key19": "2XiA4txFRvq7hv1PgcvyVV1gFUwusbkPzMR3BxqFzgXjbJ6w36wMEPyi7dVC7WiaQ2GuqizvekfTPvLdLoMB74TP",
  "key20": "3vRGD3TwjdUiKr134btBsaZLHE5LFfuTHytidFwNzHswtDLEdcbaJhFBcrRFPA4tmgTnyxwfWAvaC5AiHa2A7iKn",
  "key21": "bjXXC9UMm9a9DEZwBXLiV6zo5pH5wewsLpJKPVqbAndaTkTvR8xxBFCT2pSGcD7Dd6LvXgSZdbrNgTfhwvprgJD",
  "key22": "3Rj6R42EC24xda62GVGfH9TNicT3NxS6skXCg1bTA5GxE6TjuEwTxHxZka5Na5wTa2aTrLqFLNdMyBfzVgbH6iQ8",
  "key23": "3mvRgqFE9YKLkVzNZ4HFLpN89fFtnSrmjseWjEGT18mRnPyctRRTBo5UrHzXDQhRmqkYs8bwRR5T61bGh6tKEZZJ",
  "key24": "5kBVq9JNtKPFdSFse6h6sVjiuU3vHCcSvUafy9bm44UzscjL1Yz25cZHbw2yydQydx1XksZF6dAcJ5Xuu7xa6GeL",
  "key25": "5t6Lkt987kXDsQ6VW4euUQPVqNfgSGM32Csi8hPmbrgs7zPrhg2ki9tDySB8aSBDZZmckpVQzsfQysy64qwaAmmW",
  "key26": "5V8UdH5kBAN58QizdraTeJWXutrWnYNuMxAYgsNZhn1bVw1HPwwZPCmZU1mxygXokyPUM6QrisW6fdgLdPovsj3G",
  "key27": "3ghXNBrVqgtNtM7MSimUvyYEAdNBGn3CZt1uonP5Nbe48nGLwoDHqbtFz4G3aiPAu9gDZJoob99kcqNB3o9GutDc",
  "key28": "3PfV2WYwVE8GAUksWY6iYHUUjf86yCerVqTRE68gAZSZqghEu5WgvW5Xp4Xe2QnWEEKu3zAa4pYSaFfREuuTnXzK",
  "key29": "57YWXemqLWSL7EiEPLWAWA8PM8DtsCvuWcHttgiW2txts9KuzVYApo28zea2qjZrcQoid7smxRJgZACF2xi5q715",
  "key30": "5xbxLoiFBgbYQ29jhU7Lce8q7zPRrv7of2CH8j8SE1GnkpEmLmuokH5ERmNR8tFzxzobpo1L6uFmGcqXkH3a56M1",
  "key31": "5qbsW2g1EtyDr5zDGgQ4xtS2QVi45Rx2Fb46x6xCasxJciMwxd2Bz7mMGW1vL9dYpyQP3PBVoxVtSdyKY3oG3HaC",
  "key32": "bdk1sNbHKutVapL6U9BmFbuqp6gwk2LkYXcQyYrJgiPWbCPKJBgH8yjiqGvwHkXekNFuZsvFv6AkgZxW9iHxSDd",
  "key33": "3uVs37DLx8cKXgM27R3R4WhwfRPFULeUgVHh3Pi9uvRU6LtFysfrfWXTLQFiNPFGKZ1by9EG6vAuE8rRCXYtGMhK",
  "key34": "2snmsbmA3ThsN5WdTqUNgLH28c1JyTUqzNKVVMYMzEhEiP7Zg6Xsvg2zcLi6ApMHqppefe9KhXHja4HHpbMnJdtK",
  "key35": "5XgoTTfYJdCi3HE9tncKkwMQCNZsURsnEUQ6FfScKnQSXHNt1hdB5bgE4ViqEyLAqFbVazDEwisR215bZcUJEdnh",
  "key36": "5Zq9TrvL1AMBEfnCDwhFeXNmwF8ETBqSyoua3xsYKreL4Toy1n9TdwRWF7LnRwkdzrsBWqh5HF13hydzBDs9f6xW",
  "key37": "4EL3LLCEJhHnSVVhytJLZU3RfQ1hsYM8Z72rGGMNQMugZv7Pc7MWCfaX82FXzh3VSYyQ8LAwLhsVYFLJYneQNGrq",
  "key38": "63YqpbDq9ridKmAfFTy1DsMFL5weCBRHuHypUaknPSE9x6zroMh4rvhzTCNq1XgSJWzdLT5M2hXwMdJP1MYAxEUi",
  "key39": "3wkPy27d72xkwkf3kGHseeWmCdpsmfhm9p3cdwMPnBXUTbsLGEmxUHzwqbDzNtrZvSJy5XQXSbUQcgQ5KYReSb5j",
  "key40": "3TU8q2kvUcPGarttX7B6FzWXVAkm4FKDnzCYanaSL1QnNq9umAxVCiZTUb2f7oRbPkbh9T4RTTPdkBd5KVEFztep"
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
