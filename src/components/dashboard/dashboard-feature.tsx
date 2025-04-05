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
    "5234buCydQ8bPd4cvvC2PfrYdydLiqAXE1WhGSifL51EysgUbMZJCLM3mVDVkeENGKJYbembUfjZZXA1kQeAdmZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjj7Nt9NQ7ggw6YnXqsg4m6SxNvqATjEN3e57KVGREKEu7WtjEvzMaoyVEYQaJUo1j67VoesvfQkWxM3ast9s35",
  "key1": "2rdWtRUhSxriV4XWjPj6Q8NZBLmcfz3Veje8meTzMhs7PGaZd6hgjsgwuyUcaEvZa9Tb1eyuF5ami4HQCyAkKboL",
  "key2": "3aXPiSjrtgapjfTwLCHE8fUxVM8nXYjBvHXvrc74utTtuoM6Tm25pxeJzYRNYbMjXiZq3bq61SGkAiPHrVPpQgK3",
  "key3": "3RD5BLbdhFpsvvZJaoUmmzNiLWBGkcFpKkRnJqd9aaK2HULzsB1ntk8js2D2yWRxpAKVWfSigoU3UZ8ZPv8Wbodn",
  "key4": "3Zf5w67LjY3UEEa3N6Xh52cWVxqmWp6vUHv8y5gnyj4uuSJ532D18MFR2qvtBbM61Y5kXs914uqycDWohvDiGbpt",
  "key5": "2rao3Fz9SPQfsTDRvigMNMummUkU4XwjnKcpva5JzVnK2hw8CUmbzVRdmZL9RzDNDXNysNR8WHYcE6uicz8tQHCr",
  "key6": "627yB6C3kWPQHuRf5Zk27ZGWfLGR74gkvesonisdKjSYxTTVroapjer9VBFdyZwURiCJAMW1f8DsQNZtZ9esjXCN",
  "key7": "3pXSpisef4Svtg2hBeC2brUW7biryudvaYyL7r8Pan42rddXnJXZg2H8onsZKxWhoo5go5MWj1TRFjdK2i5AADjP",
  "key8": "2jB7cHGaEFtdt2upmnfT7nbJ3rACG4G2asXgek4XVUZMJhJqw34G7CL4SSkkCu82fRKF1a6DBE7wv3krbPFLEhes",
  "key9": "5GEZ59EcXDHbJHrtS9UTUTHeqDyuWkiXj9AxahhYw9MHCM8ZxoAHhup6jLsw616vdH3eEJH2VxoHCdoBhiAQomS8",
  "key10": "5eg3HjRQyGWPSg73fauyQFE94k2NEAbxzeRSfReZb6mb3M3MxCsMXtpANENLRaswJHEjB1QucfkYA3GNz1W6x3Lm",
  "key11": "53tr34TDNe8zBFgNrZLVAHAPBP5vGmA2z1tFhPfPaRy6YuhV1bbfdWVZaBRSHhuPbR2cm8ovUueMoex1cupACKP",
  "key12": "4bD9EMh4WYX2RXV1UTeQhs11CEZDo27JszrZmj8QxpEGm1G7zSArKcAkT3AiSnVYRKF8VZAVwYMf81UnhVAF7Krp",
  "key13": "2oz4pyGbcmkiRYt5V8pXExfmWnzP8rNuBQ4sFB8MRXwG8jjF2d9igLFCoB5ZCHdDcxv8fcrW3ETKxtahV6Z7S7yA",
  "key14": "31txyWMSJ7qDVQ6RFUHNd1vfA5S3WQ7i4BuJkKr8o7apuaWSFjeUe6u8ymqKum8TK4PQUHH9qYPGrWbTbyk2dVEE",
  "key15": "5JsNjeguqqNmW6zDEkyCRR5s8EpUCtCkrZogesk9SZYFcsxsgKoNRhd4F9ykV2Dt66L6fXG3Xp4PNjGid5MUT2is",
  "key16": "2rNfe6MBKFa9UEgJNJMCdgeDF7s44d8245QPFEuoY5RMU4JXAaXm3Yyu2krxBrGQe56apVFjnFvvyiq5mQ1Xz3UL",
  "key17": "22Si3wFQ8AKFgrBeP43WDo8ohGGWrmZt5mv4C8oPfn2gaj4F9xkxJKSKKQ88L22KfgnxutGUyGahSvKhqNnPfPEc",
  "key18": "5QTvMh2Husi6PtiE3C9JAr5CVscHgC1ZSSaz5zu7dvEhpzhPcMBiDs8u3fyp9ECsZiq1m5fSP68PArd66WpFAqh4",
  "key19": "3n96Cs6JqEgCkbWKzdsae3nnaXUyVX9GHP6DCBVUz7WYoUBPXayTjHX4tC8LJxWvDPPTJHcqrbKgzJVuwGUEoSA5",
  "key20": "3bR4Fm8sq7BReT1rMqfvvVShN3ZkZ9KKxqr86pa8sy4d4Zww1sdtomJENbKJjmwqDHdvRZMxSh2GiQdN9YGgXNYK",
  "key21": "2c7MW8ZFK6DJZ22LrSaJhaQARz4tbs9wgL7dnr4hJtxCjerA3wbbRvUcm482umgGfbMbGur6axLAgopnbb3Xwxh2",
  "key22": "5RSEjJKxhxcqNgzzk9awU5UcmejtxaVgR7dpByUpTaksocQKYjMU9Jm9k6ezk4Axp2zbkdveG82VoYAGdmTxAPrn",
  "key23": "5QzPRorFzvzxVhRp9FaExCNqJbneVC6zhdnwDdTCWrPKJP3dCSYfEPqL8wugmGsuhK1nYU66J7SuNYyVThQ7vtE9",
  "key24": "2eLZLqTfYsCwwHFNXbWYwTCo7F8xcX8C1CL5mBD3gAb9dz7sjR9tpdePcpfyWzKdiV7J2PCNfVEs6b7eCwmdHeT1",
  "key25": "j915TyvVXWhPc8fSz4stSdA4Bq3KUVMtvTWLivbb9MnY1zUY1wv6WtLXa3pazaEwU46gtu8y5Rkh6ydD6WuoYR6",
  "key26": "3uYSpjVbCFQGfGdNW1zmwUqd9TSxJ3GYA5j9utsNAmtQ5dP2fJUMjzqR83Hn5WJrzcmxvoghwoHvYsucyN85g1HA",
  "key27": "2ueMmhDHWTJrc9kmxN4XopRhVMXxGNPg9un5L6kEvtRfatrJ7kgQ3qvYuD4Xsx4PoFhvFuBtgWg4wk2TGAh6GQZs",
  "key28": "2QKL6fYg7gqhWnGmpa7RGzf2PaEkqYWhSLQGmh8GxkZdAHAMpKLmSzpLmD3RvK1FQvUor9VH6HgxsWFtbhbuEVQK",
  "key29": "5U3vSraFhcWjxn5qVeKRQ9QdMosf6dRm3mTSY6zWX5D3ik38h9FWnbjEbhd9jyDgpnLMXYy77JGPM77kM3VTQLsD",
  "key30": "3VeEPHdbqWPUiMD9jVUka1zKXStE2VAMarP2SX8Qb8zmzm5SrX3uVYkW4cMCBPKoUQtgC1in1kvfVnfN5KiioKyJ",
  "key31": "KQmSu7Y2Me3fmaeAWdWAk4ZjuSakVcZtG5aes6nxsyqyhxtpEdjWzqUkPxxctQKamJ5kSP5CLkhbojgH9R3yQeF",
  "key32": "3Qoy56HMGU1Fwez6PZmGzyg36AbVKe97JhTzZ6NbHJobqK1v5UTnPCLdgtNECxPqZx7UqkUMQByvrDcYCrWGN5vY",
  "key33": "3YbsBMLmGhsRzybDm76WSoM4usiaZAZGeuA4wVFhrmk1smDsMJJQT54mg3HqTYTQayABYJjz6zcAQjVAtypmudrk",
  "key34": "5dYhSnsDPXhYNy3nT4MhSNExpea8goSQbsANXg7g7xLVs7YuJqskZ85gFuq21JX1p8k8yyThgphdecUxnQPxzNFf",
  "key35": "3EXbWV2LjkNab34rEBradafWRHDz1wsvYMfMRrpPJD69YkgyCgKJF5b6fFUBr7W7VGMoTtq7q14cd3UvEtQepsJh"
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
