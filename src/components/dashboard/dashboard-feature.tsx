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
    "5kNbjWUC3bEqnWzFeJhXRhv297PqNuzgjLaW9bKvYW1BuLGp7a7vcnPChj9gK3o5nXMqp8JfpXqqeK8bAXf2QMat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWZQpLSEnKnvg9qiK8QHBeY15jo39eKT8uK1B6BBV1vwWKQgWekLDUWQejDR2zd6L39xwU5psGjTb14c5MA8GMJ",
  "key1": "2YWiekWsjbpwGhuethWatyZosVDjdxe2qqTefyZ6D2omPtafciADTyHJfg8m4ZjteverqXdzCfG1p7ADRTgS4ELZ",
  "key2": "2vKCzKkCxc4ZJvaFUyFe5994YFe63aXvL9N4b7rVxM4Q3UM4gV9kUZqVJKrGy1CvKws61WdonJJpuXPCasUb9a7s",
  "key3": "2TVTvaGwZrqXxUfM3kdHSMfo5o2EgeYYsspdyEkashjMH51mmBv4xMVc22QqFyihNGMQKbSv8GB52a7EqLhR1Vju",
  "key4": "RkVGZWga2D16q4ijEiRR7FRrLSvyesUe3fYPchbyhKByKpmP6EAarFdhDNtsKYfa7fAUhzXMLvrhaSFJcLYsPiC",
  "key5": "5H6RBB3vjmswu4Lyv1XY1nExAoK8Pwbc2Mf3FTVwiS3Ev9PdMYAGZZt6X9ZYuLMFYnWHYzggf41oB3awrsTygNp8",
  "key6": "4JPVxG4cqYaUBYh6Abm3bRjmAwsC5u5gDBiPt2W7D7MyufnKeA5aF6n5enrudV6dMBcd1pZPKuRwyuYjscfPLUSC",
  "key7": "4BNbGV5ptHfTk1F8KXK5VYTVtGPf4a8V2sqC9zusEcUXjqVLUGemb6ddWsPtXNB2uq4yzePJyrVBq5QHVJ5vw6tS",
  "key8": "2fxgAhZx616JzoxKLkrrX2NfLp7885MNmkkEdrhPe1dz3cVaSNfivWSHn4FUafyLZk9MQMRw6S9GdzxQYHZfeFoX",
  "key9": "e1ZCxDBm1aWqCMGWPmZKCHa66UE1JpNEfCwmc3x8Hko2ojFfiMS72bdAm89LubSmzpBmLro5JXhywxGybC2utYL",
  "key10": "37wtirVwTKK6JF7ycadvXfCdGBxFWwWCy3QHp5cVWLhRchsUffA9RrJ1DFVSCwbiM3EToaFe3sWzLApZiD18yPiX",
  "key11": "AH5AQnxMJVRPV2W4AdAtqYYoSHCD9cFLLAF8Q1ZejfLN3Ub1qFiBFzqgqDjFYjduCSGFvySQnPsFvx4F3W7BxRE",
  "key12": "66WaECjpcjyqYhrgHHYWxry2ioWW7pBwoudXcEZedQ25ADm3jLpDauoc8uZ1ENt72QV3mYfyVNE6SLmpYcFCzoa9",
  "key13": "3VpDpQJt7nr1cQ9mVXWjxtdjuLE6AioEh6RJapT9mwLWWG1e1f83YvJGvA21DcuE64NYEJQadUNEW79FjcnF52mc",
  "key14": "3gdRUsJ1ar9szuQLs6jSZvgG2DNjdj6hU3dNGvB7k2oeCA7UNp7vsnMozNiCbkNGrDS4aNYBDdTYfTwxWDus31sT",
  "key15": "4BGUztXLZNnahxQrhwcbENFT7F2oTd9hbyZyxYREDvQMMjJBGahJofrzT5ZKzoV23hXrHjU61WktwbnpEbhTDsnz",
  "key16": "5n4j44DZNk5aGw1EQ4MWMfEaPv5FKZoa6REWBh2aGnQqvYzJ6a6rBGgrsKr3DAJ7Z7SCjHBExL8V2myCXPa2Tvey",
  "key17": "AV1BfLwvGXWMkMDJ1MaaYUA3wNjCeDnbDKXk1A7rAy6p3anUaSA9CArxBPwDwNbf5x6fBCXBTZfyH7tuhAZygwY",
  "key18": "4i1yRQZaDt9xNEEoM9HmmZmWJv9eSsgezov8td1gHEmAqZgbH6hHygVGGJZyGVFdtn9NG2SWYMaAg751prEdQ6q7",
  "key19": "48Wf46tosZDp2FkV3ADAUnnAjy2kVQogNuQKJMaLZj1QeCj4E5KnBbtHZLxmaro3NziWooFfQBN2Q74uAwahhRDs",
  "key20": "3PbtSaopx65k6Wo5y3TDc5kCbsRLiJ4NAyeUWVxG1SiMpdU67DZ14U97PhniRHB9hTBEoCHhfA4Ex5zFuoP5DMtV",
  "key21": "5vxy1K4B7tYegcc5E4VdfjEGwqpVZzuEQ7pd6UcxVeCMKLcbEYQDtx2Mkfi62ex3rq5oTMbPk91MUKDK3dyJgM6z",
  "key22": "5K18cJ5YiZKdn9VZEWbyGBB5eLwodNcuHwUrxnbdSDG2ehBCFAa86nhmxK5pQNp3aHoUSb5HUXihXjzKoYk1GxyL",
  "key23": "2qxhDCX9te1Xn5McgNXGQ9gNSwTKbUMuTbpN51uo3z9icaKCTm1m4LC16HKYZLHyPmdaiwR1aAuqDqyqk2U2fmMx",
  "key24": "2Pqk4kUQWcubAAxJRMCu8dpdaNjGuHTqLvzzyCHB4on5aq5TWYk46oDig4R4xg8MiBZtrVgVeAEmDLsYMcVXjLfU",
  "key25": "hhgJPxk4p28FKvfNJ1HTnM1TkLGN4KcKn2timAuM2ETioxnhybnnLEkHb43BAKyZgowGExHuafnskXVp6VDVDts",
  "key26": "5zHXjNfm1FRcAtofEHy4qVE1sAVsR3Hv8WatjNQ2myRRSju3RoGNXWrvFrFhgJi1iUk7biGpDEXBbrqS4tpVcDkj",
  "key27": "2Pg84z9E74qJ7RwcxLKdjGMqVm17W4bou3wLxtwmyny4oqbLV5RdiSpJfLKvFqUXPzPYcuZoDX3ni5C3mhAY1doz",
  "key28": "3F7Hzh2sEbncofbhQze2gr1r63zLD4qFJKfrS4mGdU4ZQHrPc5ik9cs2Rhxs1sB3DrewzTFJsa4Tz8gyvekLErhg",
  "key29": "2x2hwvWnmAA9wgHzKUpi4Xa76AnGDrfdBqLLBur3mPJyTfLAbo5tC1CWWyvVV6jKkNV9qnGkH1CSstfGBhVfmwNp",
  "key30": "5pqfFkCRDyuxeQqrqj68s9LPCsr5uhrJXaivWiwFTShx8xUWG8ss4XBCstbzpQAdv2Ksk9QPBJUHygspnadibgmV",
  "key31": "5MA8PTnKEhoBd1YMLKrJgA1ZLrJagYqBgVcYARz4nT8HfwmCFeqJkQR9NtXnjdED7c4zgLVDDksK9JqXrSj6BLi2",
  "key32": "2tuUaRqjToCdd8K2YtFPFvMMcR2MYkQv8zvmuja4gkRwUrWkVYfqkAA4SFgh2SijHkSe1XvtxJhUJ6oLP5qTFuDE",
  "key33": "mKLByG4xoYxoKfiZagaUZGCpyKniZGyYNVfWx6MXLE2QqPNg55XFj822ub2dSzrt4VcLtuh26XMTg8hWApDBSY3",
  "key34": "kjSBPvb9JPp5XtwWXi12GLFYYYqyVUBnaaFrjAwoBUHVZMiot7N8d47o1wKGhv8RqCtwRkspnB5s9wt2X8MtTbD",
  "key35": "3RH7bEkzEK5VFS3ZruHDiPpEeiLg5UqbjqVYMwGmWdFPm3DgdHVwnw6MACtruwHQo1DCP8YNzuiWH67ECFufGVmE"
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
