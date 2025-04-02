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
    "3YLbar4FNLtxQrs3nZqGkJVC6R84Us2QRbbij5Yv41hWSMv61snQ9sdypd6Qjh2YaUCnRWCtPbdkoKsnE4d739pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NprGN4Bc9A65i2G9xKmENrm6ZtBbNFNRcqHiiSScWqeR5zyvGEZT4CcXVeYxskyAEUzu2AqxcuYDAYm5rcZz3jY",
  "key1": "xZBRm1SZuDsY6F3n5v3w3peGHvMjuMKC12NuozBMgbwVW3fCeXoPEWBscfr5zJZ748N51yVRgS3H3UFcpsgGVEZ",
  "key2": "2div2QuLY5EyeemXwFW53RYJaaYUDjatQCB7CSiEwUkPywSQDkikS6kWdvN8mWGHG6A5eYq72Z6myEPrhPAUc2Mf",
  "key3": "2Wox8cJeJJ7A8BkjwcF3wBi9LU6YuybFU1ipWkdVSVvBUU4NtvmJEF9gXtfJCTY3HEtDBScH8EKVszVfrY2HCdVs",
  "key4": "5tHbwaX1NXyGSrouQvzfw156MRHX8vr3Q1iHCvy7QPMww1dpp29GDVUh6DMP2PHruL56oU11xBA6r86dMS1MN2iA",
  "key5": "2r7fYLcWfRJzDDxxgc4w2qGysY5cJsy4ptREb9yHKHKdkdWb5apJdMcLVaQjv4PksBgA4WQwg7QbMXGFCQ61RadH",
  "key6": "21TryqmzazTi6fbh9KkvF3QGyNM4mSi7K5fSFHhDbucKDtVDx42YrnEaugNGWPPiTc2tz27ZYuJMeLcu8GYJcQWx",
  "key7": "5yA29e1rp49GuHS93drk5bCNJoFjxYzmHrBR2eUqVwuVRkvJCJga9nPZNYMoj5LNrPE5Goks29E9tW5qkCWTC5yG",
  "key8": "4pb1KJKeVpnMJSxaBmo5wYbfEfEPEsxE1sJZQB6DEHFStjaqmKyX6rYyD655uqFRNogA7TBzS7uomSrUijd8A6Qk",
  "key9": "5uXC2AkQs5SMU9D46mH2mR6smwkH5qg9GgBdzjZoQk7fincinqL3q5UbA3Z6SE3Zp6xYTyjPkVUSJxyuuoc16AYc",
  "key10": "5vk6Ua1sT7XxpRLuGZWYDQUwKZJoqPTgKQdkSRCBKpxtVBqDvDoHQNR2MoEaDVu54LyW5VGBHPa2RyB5qLAWrSkN",
  "key11": "3ruKGxmhqh32kbiqee3gs23swKgHDSoSaQRsJdViitp2LxrKgFYxmA328okQtxWBvKsP52uwEEXS7e3jxr3s7pfu",
  "key12": "2A2QUyXSGD8QJiRq3nrLneLYpdrbeQ8hBCTrgpxQr9JK7Qxutq7eKhyT8MpFSyqZ8hzJUJSEQN5UUiM98YAaeTjn",
  "key13": "aY2stfoTV8EpBvuLkiCqxsmTvYBznPo3aszSMSPa7FLnsnXtB3e599fgmKQSp4Jzh2CQTzWQmxkAXbeavyTFb5F",
  "key14": "5GdMGNhZBe9MqqsggkALQrDZciUJPzLM4V4m2WKZWY176y1sjqjzTYko2cNXxjw9C9QYd4ZUqh28BcDYUz3py4bR",
  "key15": "2XdTi3E8CkRjAQiBjygG5LJ6YeLKT72TgyvVY8dCxSVTZGndfgbDF6YWbFYPWjh7Y2HM41RuBf8nSNJU9ayF34pR",
  "key16": "3RtZdR3XyJVD3ZVG5NrgqcNBSFocZyP3mtTheee1EWKvqudFrEjCNJ2xgAEQiAGsabxqe9sG3LqusfMbgU2Jcimv",
  "key17": "3QNCa1oJSBDQiQjtQ3GNLJgj5fksoBmgbzPWBoTb8SvyhgHD5tTyTgqoBKL97AzF8Y5dYd9WEptG7rAMcDfZWctc",
  "key18": "3R2eu3PghrbHES3FbZygATcSWHGq8tcfPmoMjES5PBWBGjjvFnv5rNWg2ktfTeMGNAB6NdSGt4fTgdWZh2cKGrUZ",
  "key19": "fnun2QV3YGLr2yvrTYrr9LWxnd8awZk6FTpw2JHFNgbPyLemjmqhe4mzcnMrNrgdgT51T4MeySFJHp9MR7vgsXh",
  "key20": "3jgcSkVnhZTpzZERZPUhD5zeGUZghFuSpFt9UTqnE3n3WigPdxC8FVNs7FTTE6mRenjsEVn1u9Fx5dZgAyP6RS3v",
  "key21": "5qPQF82W8WmyYFkYASUAEo24yro22omedcR1fk9CBUx3ReQFKxYzhactT4uBFBzKTgjTadQHcDRfw7KML5XVkGA3",
  "key22": "5xf1xoFSvefvimAV3CWXjfZTvWgfWWbj17Y3FjpTS9tbSofH2TRyL1DtxmVsuSZBrif2CGnRLrRb4AuzWrsv96Zz",
  "key23": "5f9xhc3sVSoj3YySEY46WpphMTQzuUfLimFJAW8ppuD6HQzkKqucxVNWUMnrZyW4ptaD1rHmfJDLyRZxPTaHwzXL",
  "key24": "2TmzWYXpeNDBQ73keZW5wZJbdVFL7vmqLSpsvLAUYKjHQjQBVLPYvNTiT9QjAfv5M8aWjxscnd5bFwpyW9m6Eefc",
  "key25": "5xWnsj7vqMUmQnM7dF18puEVRc7yTt9UdekoGEAf9AueL45qJB4QkaMFnB4qcM4hHZJaAPF6t5XRSVPttnFBhrC9",
  "key26": "3AkjtLKJCMKkQHWe1Ywaak6N9nffTbUt1b1TVG5FF7S1F1qkRx2JZv9xAgCNr3xudwevi3uUktEUkFWs1pcjY8x4",
  "key27": "5F4uqLsdBns6BAMt38Fn9iGdDWjXrChoTiJkbBqtVF2epd3ZcbfQ5yKeMoYXva2c24Sk8VL3Kx6R8Sx6REEZgYMm",
  "key28": "5oMNSpLmLPPvoUCynoUpj5VAKbeznL2WWPxnQQYi51HQhnYA6M46yA4grx5m4iSiLX8i5jj4nFydxLGFu7EvbawF",
  "key29": "3W55EnuEjkKPpZ5SVreyTYLrsEuiM3Cr7N6BjbNEC3a67miwgRK5BjPdSZRV7TQDVM7crWfEe743NA6hQiUathgo"
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
