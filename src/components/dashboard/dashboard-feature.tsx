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
    "5uaihYCKy7MLhAPqgfDMzzxSJCURSqv86ZFnGoqrMKHHrgijEFKXSXbJw9rBsnjcRMARDz1dHvCTjiWi7hEG5e1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qKa8GvJYnv9xcVkUwPh7bdML933gBMqJrdirys3qj7wb9RUrSUD2PuSTexGC4xTQ1MdJS1NukH9agWLLfzLYh9h",
  "key1": "28Csf4Vs8j7PUmGkjSsFoLcgHJmsMVb2HtuVCpqi9sRioG4CeP1JxsTUHRzqnRKFJcEsUDE9YPA4tpjQYzGRq1Cg",
  "key2": "34B86196hMBpS2sT89qaLXMStE8ZZWisBBGgGhbkeszUjynnTEAsiEG7rmxEzSQwf1kv5AUu6zJpZtb3kX5XDdUr",
  "key3": "54stQQDRGHjbSuxoj6x2wunWhnSSxgyLZ4Ct8REgHvSJSmQrJMPybvatsUZBByTnd5SAz4A3T2i3tUnWwBSqhhDw",
  "key4": "4dqSY86zCHJK7zTFM4eZvTVTSPe2nBV3GQgNHjxk2BG2V8DHhfSXFJMUDHcW6rKSwAzayGGW4VS8UgeCsMaWXJLH",
  "key5": "xV3W4PkGAXkwVE76n8dmjoJi4K21PgcFYJdVttAHUp9pHcmkR7KWkrN2EaRTbzweaYXxePKhtDnyUgBzPF7jQPi",
  "key6": "2ujueY55BGxDDyfPPb5cacYAfGGEunZSdvLjkNozrzTxmBVi5fS1aCnytoisHVRuUmXBMBAC1mFcQtR7mKeysy7f",
  "key7": "5zZzeTD1JUu86FfDkBT9pCqivbbHGgZ1JSHgMde9JXzT2PhuqwVuViBBdeskYBdfmMEbBCH6wfcUzniYvPAUHAd5",
  "key8": "564j7TAwacZvisL2LfrvNXgEvKMkSWrriohrx2E93ru2ePNux4Vs9GFTBcvKRzZcN721KqeFBXWyP91Mq19um69C",
  "key9": "2VhwXPvTWTpvMGxjrkKkgJsL6kDDh7UxAxwAB9bBpyExv65DDDn5WioP8CxzDGnkDyQaMpt5aaSE2NXvkNGPNqYs",
  "key10": "59rQDUGSfE5Q9qpBLYn8PZJoFDHA3CZQeFSmdDNDu6aXCbAjXBJZ7xg41tWbYFR2nnkqgcm6SRmA2pHrJFVrgQHc",
  "key11": "nxREoEpnrjsfe3hsu774DTD1CttTb9GxYXW87CznTeZDtumfxjg142JyyZFTKDtAwPWWDPyqFsyue6ZS2ruT5CM",
  "key12": "28nP6yJgAYFw8BGQcxKAxZbT3Dc1XsbNqN47U4KvFxdeiL4zjTpDQUdKUMg9o5B56m3pDcgrUN3x1WpbqYMemLf7",
  "key13": "5gRcN5Zv5boA8FUU2wrA3beqYz8MTDYJQVuT64FZwHhaSmbCFpR9amHSsMXtQMpEXCPJGgbmmfHHXmgLd3mg3Gk6",
  "key14": "2xfLfk4UhyxQ7sMcwdUTzYE1Zdct4qBdcF6Szk6RKvZHG8Cq4naXNNJSUZBkLcscoU9j75xnetBRsWHnBfq42mkK",
  "key15": "3RgwVJhQo8fBDk3u7a9L5UwLgkF8YVVaiaNtP2bkPZ113uStVm22K1ZogFVfYPd44WxAcyopVNPEQXZZoo1BLT6J",
  "key16": "2LFnPiSG4qBRK3fjSsUVxnX359sT98YRZhfE4yBSYYq64jwUCyi6Fp2A1XWaAsBoi9YerHayNGj5hgQomD72HVsa",
  "key17": "pYVhrDNYPHacYZdndXAz16fstExTtWxpzea9KPfjnUYBdJGUM6Y4RyCRtLDUT669HSPK6rLsNUdwmNftz7rfhaJ",
  "key18": "5CGJmafmKfWY8XtFqvU7iwupKD16t6gYRKVh7nuiMXXmGhqp5WBhQ5cvHbBbTLrFt8e21SNt2WqZnxizXP1aYK8D",
  "key19": "kfcTiWjNFJ5cRPp6bwjDPixy3nyLcLt1KHzUPj2MqaG1dAiHnon99SR8WU5gkXv3WFHbr7431cEsy4bPpdV7p9R",
  "key20": "5u9N7k1uZyfzx6DuGaeF9TLCAJbXG1d6BMbGcYY6t7EX4ywPyvozU8cyeyYhMQMYXEeG6D5CDrfqckNzHWxPQ7Lv",
  "key21": "4ZCcueQr2V5jyLgAFcq7YwVD278i8GZsHbCYQeUczmSyasoKa4RQcm9QSu3CnZuYDsTvDSxzQ5AYHWnp522PrLAR",
  "key22": "4tHnDRT58rgEe2nmidzNZns6ieqeBYtXJCDLSgB28qGtuSdJqjKpozmRpaSoXSpGPcXP9LcDSguQQjtEJB7cmQGo",
  "key23": "3qkzpheJAgFaQYRGDniqtNoturYSBowjLfCbPHM4Dt4bwnSLNbrF83hBwLu2Y51GWardcP8SfER9WbrPtVU4wMGW",
  "key24": "48WBvXgCgyiTaVH6Cx5CkPTrA1vKVRrBMdKzeWoyweqNmYvyjQ4a3xrz9cjKxVnA4HSmqmGthxK8GJX1xkjipPa3",
  "key25": "3xYq6GFFPfqZn15SLxs3i6YVfUa3jMMArHkwUCio1qPS2aPvEn4n8a72Ww8BiR5Je5wZnLSzw7gGYZHkR3XSHXta",
  "key26": "4k1mEYPJLYSfQ1ydj8THWqVgcjJFSxZGEXSsjbDEZbCSvVEzPmvfBeArGJv7PXvPGyBezAeaNfc6tYZsAGDVJpYA",
  "key27": "4Eax5M7h2XDJhgMbPdsZZqT7j8bEZCjbBW1kEgFxVtNzjNZayYRcngLXUWNhiScLn58JYS1Zr7mTJHdRmwT3Nw1L",
  "key28": "4eUM6raBokWckFvtR1TBnDtT693GkqoMK1UGKkrzPDoHv5euqJgj9p2cZreaN5aH7ipmDpTKNArhXTLABG8YyTVT",
  "key29": "5dXrk4zh2MLZiawsezMzsECZ8eqsKVHFzmDYD4iwTftS3XT6VQ1BcH6fTJRLa5bJJsTuLMoGNCeHsZW8KmuZh2QJ",
  "key30": "3uArwKW8fPrxhWuYQDWYWnXCkfL3zN7KszsWrf6zAr3QNmgczchn19rWUKV5oEg6qxkF3KmQsF2XN5pyaZ9BMg3o",
  "key31": "5NazMSGqDb9r47fZnRAder9SRdB4eyiAW6FRn12XZ587u2cLMbg77TtGVmGZfkXJaVWddjMhaTDX6vNAXUnWvFB3"
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
