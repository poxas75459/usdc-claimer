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
    "5jFr6hKA9ujY3qtDp1ZFoeyT7va994XAqqWZd6tZUqCGQ866Coh6zDU5NJBVGW2DwHPDiEyiigri1Wc3D2L2FyEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sYTZCQfDa6kWgzf83iXdMEE1kX3Hib1RbHMjgoPPw3pcnkuTzWGGneN2G7UwkX8GoQsThku1Ynq7FJPth8J5Sir",
  "key1": "3z5Sm8hjn8rVFWsynWBEptLqyhB1nAZVFQL7tFdqfBk5rNFcUBEHQL1D6QJixczNyHeHQpo7mv3CAkU51HgBCixM",
  "key2": "2wSxoTKEk4xm67FUrn8dH56tsfVkQUC6xsZ5otb1aFSSC4QTwRy2JcE3K87P53fzs6Vp2f3svRvmT5ZMKjxyqdDe",
  "key3": "jhEGwqScYmJddeqvrjRyLvHrzkgTPDrYhzjXYK8MD3h6jEhEJkYTvwchb3PN4SymSN25syXRw7ycczbxSLQcZTR",
  "key4": "2AtoRGYwTywniKVh8nxNFEWSKwP2PzM6252CWtEXrgWqTgj77673DNcm4ejhuSmKwLWxiSd1qrNiA22r4VfD6DwC",
  "key5": "Tbt4zqTpx8Lew4Ec1QJ6sReeGrbPmhLnyr7CVfszMWZwtQKFv9Rza1RxW1NcLLe1Bno25fcjcTZSNREpXhnWBe6",
  "key6": "Nu7UgvPoDWJZ33vKtztqNvDpsKmtpcz9u53vJ3m2ddY5upt3Nh4AGA2MWPJAsP5ZRDzySJUHrDXpes3h7yHrZgy",
  "key7": "Apnc3qpg68eeqzoHQDmWkrbbVUZtBaPXLUk9hYM6cvcSYnd6P2m929UE1ir8vCv1gTmTgDbpdCodbM15kfXP1kK",
  "key8": "566VX1wRCXS9ecurg7RRzT2gsCiX3gw2f5w7THjpZr9gnVXmuc4xxsqKAgGXYbmqowFjTYEGm8Ka4gvkakp59zEa",
  "key9": "5RMu672vLCewJGsdECDT1moWhqrbhZPXNuVy49GKrNE9nn7SG6AJNKp3mRk7WmPyV91ftWq6KMGy1yvQgyqkHKbt",
  "key10": "2xoP1RTLH9mV5rgLt9HNCpznHS7RfGnwbwaBP7Q7KCDxcY67Zp1XLaSMDCj7xhSvw9irs8mBgGz1SFBGz1ZE6o8v",
  "key11": "49Wh4Bcx1NuufQTtD5UZ6wuqvbCfLBV5Kh7W1v1FRCMQUHwERs7xzRXrMSkjiJ9JsZKLi1AVA8PA723VNqK7zYyY",
  "key12": "2Ad7p7wMeNcLh6nyUJyNe5pZtJ62Vue8oJRPPEgJcUMtwhwDr685CWZffkEkxPjj4j8kYATJv1dSC3RCAQ3SQRiu",
  "key13": "gn9EY9HLyx26woFawE2MmYEBSXZwai2wqanmNEkbXKxcDFZsfd9g3msbLv5CBrUBjKT1mLMBXceHk7ehmU3MP7F",
  "key14": "2qWjAjJgt1oiFiLgxrCM5DUr3fYSXFWAR5iL11KPotz28vhH1nR4g4MWSvGTJRk1gNYdMLgxcAhdJjHeyVf1rA7A",
  "key15": "L1jJnrZNsjgv1Uex6EbSPDsUivoeofgFanfnQobXQZnoy7U4XGif1FguhA5YpfsRyfUHKHJWg5EBJxmmBXzxDxK",
  "key16": "5NbSgRzDhTQZGQiLhUP9g5DwdGuLqZ5M3czY1Q5znfC9raUg6sXs26dpqTPiYbJ4U4NUPhGwTUKyCAjaTzVLqjtT",
  "key17": "2UpBazpBLgS9JNAPAdam2BAwz7Tsi1wZtRyM2Frg3dKi5b1uk4qSfyitk7VaWWFk1MNfkStNacsEymE8kdEWH2ss",
  "key18": "5PkpnQtdGev5RTBkz8xJp8VqyEWZsPTDubqbz4FZanmyHtSCjjXuaSS6VTzmQU4MNzKu8yiCZeU7xkH7NCADxRJF",
  "key19": "36pchPkSVhnj4oLJBAWJrd383Zc7KbvEv4k49JnfXtiggypc1dyjdJ9FLr6fWGcYPHgqVpHd1rU1dVFhqjniJuEa",
  "key20": "4AvfKou9FWuBMLst7Bznt99oaqDVBeicokeG5ro6ANkpdXQXWhMYJPRTNZXyJGHxnsMrpumqjEHYBDsDF7N1wHRi",
  "key21": "4KRLgSUXsr3nd4cSYYyDhaJhViyjTk7sGcvstftZfrf785dZXA11cXA5e7mwDriMsfuDfdvdRdLkHanXs8BguyjE",
  "key22": "2NskrxigWQwoxtFSH8drxhKwLpTDVgK27hqWmEpkT4G4jH3KZ8RCbG2n1giHGTT8w4NHfqdPxWJMk6gJrQhF9Bbm",
  "key23": "571eSu89tma7PbHGMSXPvor3Df6dhrX37ecZLy28Y1QWFnRg4CB1Sd82yC91NEoTj9qB248qmrTK9M9X3peifQFm",
  "key24": "pMjo9c6kWAwGEWPjvKNG6bRXzmLjUL44Zo3HhQxdPy5Ha6LD4Qu3u8GA7P1WKDZfCRpcn3HqCFgj8L5MSTmivAs",
  "key25": "2PfkLr6RKeXiE9wLHoRZGVR1nfuvxdgBQFTzqij7w9o8foCkYwXNry3i7M4tHLwy4ijiQVmCtubWXdHDvfcFDfUt",
  "key26": "Y6JbEwNzoBdc2W53k22j286CNnPi9rn3F3u7Py2HWDh2DiR7iUj5z4UV94KmHYDq8pPVixQdXCkBcC2VXAnt4LK",
  "key27": "5Ka5GG3W7y43TNKheyB8EpH4LW6qFdiVU4iDaqep6rCQcV23nUTNPV8D9GLY4Yip4aeb4Qi682nbfgetE9psaMsN",
  "key28": "4uZW3vZrkJgLcp7X1Gxm1w4Q1dioA4UvhsJmTk77YeiwFg1GK6Fp7mTY7gcjfXk3xefprZuk4Q567aQUoydtimWT",
  "key29": "2txkDTRrhoncAD5eLSDoAe6ikAo8yH5XHKBJ4unqoxoDxMwGsZu5yUzCSbQ1f5uUH1yC7zDh2ojQnZobTUaV6MiP",
  "key30": "ywLkVeMw5Tq3oBuMddTKcjAc8znBXDaLj5VKmoFyP5xXaFMUxURsxVSKWhFL3DVATbuMWK4gS92vwRS1vKGjG45"
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
