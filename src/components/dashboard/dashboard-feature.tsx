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
    "4diALv9s8DcZaDV5qqLMXtXVb2wSryfvRMSVBjg7224ewC9e9YS8ELMRQz4tp44V1tbWZ52PUqeqREmuWwF39tDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27v6VSGgwZwKwoxVwBqffBVAM7pwjaZNep9B3qkSnai8sXtuTjLz6h36JAXaRDma6YU8CVH8V7LZauXRSYnxT1dx",
  "key1": "5fYTgRUoDfzVkgRv7vx7yHoB6qfzLucCtMDVn241zqtyvm738ULLPGrZEu6LqEFpCLoiqSWH4AxLHE3P4tyrVXTz",
  "key2": "FLEzFZy71Qh17D5m7zeMSjjCbwoBqAfGNo3TAczbrcCJreqGfm7K33LZ7NdcbjN5fFRp9Vw6GRNFBsZDx7hxLy8",
  "key3": "v82mq51MdqJeCquUmjgFmve2tCv3AkNyLpPChn3qDCdLU4hocDfq4dDixZrcrBHYGNNcyzPqSFQbxmDPF13d9HT",
  "key4": "5XWssufRG426PNAyf42rjcrchHfwapUe4tn2MR6J6fMxJcEXXVSh5w6iZyPHmg8gYqqqRNkn4FPDBwJxKqB1Yo7r",
  "key5": "XBVUbtRWCdcG4PmfS2DaKJWbj2deA5AE2vruy8LwyMSFvNkYgPEVeXZJR2M7yNNL7wATpmMPXFCFY6SyiLWf7XX",
  "key6": "43Hk9ny4ssgduBUa27iLZwLxLFT5fKNpAf5TCWAD7rrga5humEseV47eYMJf8GNVmttW8pp7C5175VdqFib4yikt",
  "key7": "LYwK8JEjXSLVxhSy7T9uzRCso4TM6gd44P8HYUnSvqs2hQdzESLNB78VzEQxEjdKzcjF23Sjs6Ma4koWZg9z7AF",
  "key8": "5tkosiw3dRXJbjCtPBkv6JhpvcKWKVzWzCDqoJuDrJULzfwvprBshJoCqiVesHdcwCXdPoK79zKdcmuqcqdHQr2Y",
  "key9": "21HGsC5DGecxSgxfBKT7cdmoRza27cpjEeywAtn1hHgUXRhRwYrPnEqNAfXnsuHD3GtfmLAE5Jf3AdQ4Q8ussP73",
  "key10": "G7FnzmxBNCS5MdyXbrN2N4EL1qT6kxCWERJiNpB1ASt9WuM3fzXABg9G9r5UqLyQui3TNKmRrgACBewhjfQERrz",
  "key11": "3eE2qzhmq8WvA68ovqtzS6tUb61Biq89grigZsRp25B114dC5XSYM5VCkvK1tgWH7Vk1F6KSHSH9Z4AVS5SWtEyA",
  "key12": "33PhYzEeJ9YLwcAQf5eqTqSWWXBUx6LCC471DW9AjUQ3iwrzbxCk8U8Er1WDEDn6nWExAisP8LN6dek1PNLhzKcM",
  "key13": "5zaZMCE9krZ3vJaySYeZJwwvPvemwEsrvCM3kgRPBqGwn551fMbt8XYMdYRYzEf6Q2VSpnW5vNBB81Bybys6vkPv",
  "key14": "22V8MDqkqSkBDTAVejr1fctfhDJarruu8RqRekAg8sqML3MHMPMWbT1PZfRS1w7WUNKvqaccnASn4LXWRW2aSJj4",
  "key15": "9HbFKw1qx51nUmWVYM8XVSKNEgJpoYJTtVJyMLgWVNsgVM1rjo7ngcVERmiacT4biP1xboNrP3HoErVt5FTvMQh",
  "key16": "9o5xJZBL6a5TYNCcwxn6ox8tvbR3pMtzLii4EyzxnsvNdtTvndtvxDrvzNPodyoQ2zdVj5wkbt61qEzKGQg1mht",
  "key17": "hKHvs4MFFvDzASTuS7PpUx7gpuJ9HpCzSDPdkWaYCowTvHfFsaF68LjgcvtjMPrcdqQ1J8ydbhAqK5v1zUhMqcX",
  "key18": "22JLh5LDCNYHSDT2tYyYmeKcSMwtZjqJ359V1uDxE81XQ6ry1fg7QXhQ2pRpiCVmkSyTUYMF3zjtZCYaPz1cUKEc",
  "key19": "2toRewj9tUrrc1ATV8ySUbdaKA4jsJ4P7vMF4MD52HnZ7yFgqS6orEGYCoamSPywegXTmQrVWNTJNfTv5uFx6Ei",
  "key20": "2JMFEgDKv9QWaFD6ZZEKPLwv4E1NRXZLc5okGSKPNy4gc8rtgEFCMpQ57b32UsHjnS9yqXPw6K55KTygnSoBTje1",
  "key21": "5h4juhTc87WRNbSWhH9cEAdGPFbSzqanABa9DJDQFTSsZaDKpNWQ8DiqYatTL1uN8Lz9LgixEECBeW2JrRcGYv8i",
  "key22": "2WPXJiVxmGkGfC4ZXhwJKbwn7mbKf2HshcFcm27o4qt2WiVC2nBDnNsuAWqph16HpkLhaGKJP54SgfUYWMe5gNbi",
  "key23": "2JZoMKf2oQGzXi5cNtRqZPV5e97cXg3o1YuHqrMoRwM1unB7F5aSEUrVXK3ggSdkJsA4eVZSJqUvBN3aHVnH4yuG",
  "key24": "2LbcoBt7v6WoShfT4JB25d8hUaPYvRPNaA1Kkhp1jaQnabWgYpgwNTAyCB6qCLZqzo8sVDXrU77hGhWo3igEq8xS",
  "key25": "5WSs6NgWjGoSxtUXosUz52sC4eRe1uXk7RgCf2mWrB7SDoDeDJFZ7TRvWtmmTCqSdYDFHTDoKATkxnecVtLXibTZ",
  "key26": "2nJtcoRxAFhhWLqiVT9YjTNULTDVefwEnbEE6eZCAPdNU66eDLxVVBWrhPvveBPGaj82VtMxstUa74GMCL3bshxC",
  "key27": "2rtNWNrFP8bUDzTq4TDRmyKRrroZkXfZSVzdKcHJMsbz9LrFgPpH8NXJemftbZ91DKCTEDZMLeseAEoy1Jt9Lbq2",
  "key28": "2yUVPtVxwJDEMLMp2tvCrxwknLrMsqcbmSu3mdn4kEsfiuM3BS7EwCvxmro2EiStQRhLCV4RPqRipXorix4XJLEZ",
  "key29": "285tB1x5oYJqcmBMcG6yXuLjVfyTFZ9karGGHHCySQQ1DiN1uxH6C2gF9WwWzB8NxHnNNcjWfX91P3QauTVsTnyh",
  "key30": "2enJ7xga8vr1VdSRTRm8Gt413dGMY7deUK9cyomQWHwn1fashUVfFH7mWgTo5pCd7B8wBdCCmCapfijFHMmCF3jX",
  "key31": "2tXb44LvYb3zdwuxAByR3j5PoTGBqLjb5qeyUsRWkfLtS4VdwawRRdiACjcA4qcLUxdFa8eAt3vWq8cwKP1Qzqaz",
  "key32": "3xpnWKBtkwm9FYk55MHkN6b7qP9pPf6rxm8uFXC62VJWAARdxtYG3sXyhCckb9oVTnhScQVK5pFXry3po45dstVq",
  "key33": "5Z8PxD7cToTu66nkEZxwz9k2duw5ya7PxqSi66tNHWD3wHvQ35ikefz9y91gCkQAg7myHCu63mW2PTaxnRGVjtZJ",
  "key34": "4XS5bL7GqEEd9mhj2LEfnuhPZrT568QwDRtgwRvKHo6y1PDGtYQxEMfwktyE1jLrzkXJkXUGQpgSuxyLqxYhzwJB"
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
