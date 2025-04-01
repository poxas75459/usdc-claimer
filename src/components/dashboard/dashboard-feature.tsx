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
    "2GBkBVqC3e5nePufindKX9yVgTEUWL4g8xxNdbMBDMqr2TvDT5VmyNWYqsXciBTgm9wD3ZJF9AkVjw2gmpWJ5dMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "639JjJUiGQ3rkCSnokWuDEdzyLUkEdR4ULT2s5bpQeCseHgnsLtSMaFjELZ1XEn9jpPzyU7V6Lw9Ckex74Ln9czU",
  "key1": "4AorPjoPybn7oVy8dHX8C5oF9omm1aCy68GGBp825NigULo5sNJHF3V8DuScyE3TbkvhKX5T7Qy1c3DYkyBoDkj8",
  "key2": "4XYFVAGZk7wfE9raPfCq7zdqhwCACYuCBgi417WSg87rMeVsE12TWW3aNhe9UqnkJScaFyrBieaBEyZCMbcUhs82",
  "key3": "4pJDdVBi1sWndATM98GhRDnZjCCyEfAgKmCnfNm9hV5xYDyevJEvhGyecexpJGTqTZvrRcJc36QRoaQsJn52RJ6J",
  "key4": "46zYcVnbGGEV1Tir2fMjM3gNAn8nifBAkGZxF2HNXJNWt6NiVF1LfZMeaafN73yoEMwps1uTvY3NgvT29DuBS4Vb",
  "key5": "4FajrPePNtSDQRGm4NTof4jeAwjqtK7syD7cpzqxdUKSWxvVWNawrpNPeJy4sdiNenT6aifZqd56nUsftMVqHWWY",
  "key6": "iEsNp4UUK8Ya51ESe8p2NxwryvNP6e8mP3V4gss3d1GAHuWVVjC4v3DzgAcpcZZaqR8acjhGkiZ9h9baR3RsTcL",
  "key7": "Jzi3GYUGa9P5djUjiXHbQ6ar1w6DGdX881fivgaH8ka2oBosmQ5PvBoimKS4uTqJy8Wxn9Nd7rrXW9nm3E22DHi",
  "key8": "5eMoJLE4LcxkC7NzJrziGZDiAKQp8b9JEpgV4uHFTcCFKiX924PMcVGAxkV2G7EKx248XyGyMeFinTgJ9STGxJ4e",
  "key9": "2zEpbAEaReoRtojA9ueLNZoJgSStx6myQxaNpC6fMM4jvB2ng9aefYzTrKvHk1xTNKBV9cM89xxxXWgtXrrLkJHN",
  "key10": "4GGQvAYKRTmHREHCaQ5yhzFG5aZVumzNguHhxb5xysVDjKBKWxgegLD7Mi5qaqpXhkUydFYNuJi3vSxEmFoUZnm6",
  "key11": "DNouGwdkUqVv5kNVZmzJ5HK91eJdCSGLCuuCYc1oKDyfnvacN9jTpitSYCjxiJmi7HLUMxpXgqWoXXmn4THgZu4",
  "key12": "4ikxHvi1AnUnCFsZkKRJ35pV8WrWmcVPAa9wTJoQA6swU9z2ntfSowMVa9BeCdoe7aQJAwmeZ1P4Fo6598c4ez5e",
  "key13": "LHidnVijaw3JACtySYwjhLwj3JgTwTYWUGP19WNRHswFaLmA3U3z8uUxZyVvbrqqmg1qaZ8AMk4scSobbEoKGhH",
  "key14": "653GJNKMaWAHnJ7Ux5YWFjjgjJCtLvhWCD7tkJw8teoykFkAcigqQzt4k7Ff33Tm4TpXBkssFrwbns9RjcoAtP87",
  "key15": "5HLGKW7ctfKspttUnJtM6UK3c9qx8qVp6TBzCFYFVHVAhnBVg8sVqmPkZkPDGwBrEZqgq86XmqeDTKVDPVpi4ojM",
  "key16": "wSDnBmaxH8JqGCnL5WFHgXRSSLnpWFNE3psCPcM7AcKwjRVM1oWZd79ATGnzXWvcdMw5XMjN1o6FLUvxfnCfyfH",
  "key17": "4kpLnWDHz8EG8mCU6MTdtckovahhgicF1nHSMTD9UaJFU41RShpsBvmp71gVsV3qDiUxeRPVApxFvbP98Ls37TGB",
  "key18": "3axr9CsPS4j6KvHDnYHixKKoYG8joBJJj1nR4iTFP9sbJn2HQcCV8HXjtMN2tpU4V7197V9GiTEHPG6ag7CDAAQX",
  "key19": "54xvSRFyLgcW849sUg6jdWaTvPBsuGRbkLzA3NmeteLn72Qx4UjDBH19i94QGfSxJGcwmixzcozzwyp1ic3E2zgR",
  "key20": "5ZBYBn83oYFTWoHVuCMp7vGHQ1jJo9Cq25ZotvVWpaKqvowgh2APuTcLZxCUZp9Xoh2v8EDfrvWAsYS8cWmZSz3C",
  "key21": "2g8WxPxrcPh7T76juywEAJRGaztyWBbUnnj4RB9D54eJuBeopqXBDfoW7PDQtmp9aCx56Es3CA8N5jzk632jzAyu",
  "key22": "3JX9Njcm5ZJnWX7ZHrQDH1PaWGbY4cvQnDYRJ8ecsBLriU877uETQbaiF7tnzLDuis5bvPoMcYskXCWdca8kSud2",
  "key23": "2FtLkgmKoFwP6Vsp6KKpGkYTjApXckDBV73p7A4nJSYxcZGgRQaC6XYeVq7bHuVHgz24826mHU7W85w38xWqubxg",
  "key24": "26SFcQHbd1JAagiE4ziUpxAbd77y8tDRahjrnDH2Fdf2y7X1L8fw15FD6yC6xFXbBsmKVczUpZoPf8Z3FzVTQfBn",
  "key25": "3JK8YTdjeg7sh95nDdkGoGFup4Lyx5SqvpQoPhr95VxoKKYN1vmDMMGuG97C4WoPUjxDS4ddGCu4V9GDeMPjSbLE",
  "key26": "oPLJ5p2D8A8JRMuHoFdHcKennmSN7BYRNQePmDDtP4bidtNJhYCw7q8ke1Hg2P8zhmicKVVNyD93pxeMaMVs4wH",
  "key27": "5Bmg2FezUNVyC5C2S2nCBEevf8e2YGHRkSVgiXEZD6b4Y1TRo46B5BW89y1KNJpQN6HzYYAahEeBUCVNz9ySfBrK",
  "key28": "3Xzy5NfrTmSV9x8jfCsiYQUi96zmR9iDbiBCZZb3MFRSH1VZT6GLqV79SwtBH7Zz9Hu6kDgZTYoHAGmVUwJxE9hD",
  "key29": "4PsjFXJ19D5NeuMma1yyp3GZE2dWs2h3waE66UPzpCE7GzRFe3DSJGBzr1uYUXmuvi2wyyxiyzqzbEN5D6i3hRjX",
  "key30": "4AtAQstoe3BPvXTTiJan415WUNcj18zC59Lb9avAXw7Cz21VDmfrivEMyXcunANxykj9YzoDytDVoVFSa1A8tuoJ",
  "key31": "2JU4o6ZEnu1S6xwmV7Rz3tnkq48XVK7Rc5GyyzHP5CjY83YfDYoXkxxudKdYTwuZuhZ8bjTw6zj2B1GYq84bL3w8",
  "key32": "52tZScomwBRWymotGK5L9dpeGbCPtYEydqAYksPfPxG9rzjpoEcUgVgV3FHaFXH6139NFVrw5mjJmY9nW8pb2SHW",
  "key33": "SMeWqwcnGeYenTeYVGPktaQzHy2i1uWmNjxNLcdhmfKj1HztXMSUe6wJqJMT6Hz1pMgvqpAve8cfS7fRaYQ8ro2"
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
