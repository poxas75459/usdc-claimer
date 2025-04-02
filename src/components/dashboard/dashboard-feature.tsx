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
    "5iJmtrq6Skk4nthdMJ33RjM6Bus58beUUVigB7nYZWzwvSqDe9wpop9UbQnGXZ4V3Sq3bA4jP5hv5ByMHqxhiYRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8JinszTQksSYmeEUPuqqS4nKAodzsY3Zy9Y5P21fZwQDMcr6keQcZ95UaK72PvxpbnHBQG65215dNzJPMKorQN",
  "key1": "TjwaNWDSvv8UzoMSqwJHscbJSFP68JesXUW5QRPupvLyVE1EbBwHWgeDsudxycjAyUm2JnD3Q8eyvTCyYj3VSZB",
  "key2": "4AZAF5vHGTj1VmY2PWdkvwZwfz5eQTW14YikygqfyeqsHoZfG2trLQe4e6iotm8aGN1ja4sFqBcVEHboz3highGs",
  "key3": "5LxK4HxRYSMTD6JQRzGfFN9n4yYeJTW3NwFZ6fYozSbVxCACRXhnC1tKpAMW6DXx4nApwJnBNnRdt44YUCuCBEMq",
  "key4": "cBTN6Wfb8V3sP6Ywyka7imesrWTc4MNtBgKkQ8KCcDG7YZZzv4SLvMerp7pdqHFyMri9o3got3mBFUNQsKwppaA",
  "key5": "2rKLhPYcjYauV1Q1pHR7oXsoAJMnYtCk9XbHow2cttJScwikS1iYnjrsoUc4Mf8ipffkfUf1R8seaLqmmpXzQU1N",
  "key6": "2djVeKKkc6C9a1vZGzNudYsLumrwXtj5hYK6D1m8Srux9XhUUAGVNP2AcD5ttpBbqtUHMgUor4nvFECKfyXSc7P7",
  "key7": "38HLvDKR1bYyfZmZcnudv7QBASi3Xzo9jwTSNEqwcHpkEfQhq5hG6K15Vvkp5MopibQ6f1pDhNvTYbjKAXjZoD4e",
  "key8": "5L22NfhLAdv7L5T5Ln1CiD4zFgKGuhqpicdvqQjgxP8DydJdo6esLBXj4oUKrGaC3MmssQGNmBzxoQz4ZoDLFu74",
  "key9": "3VjR3ZNNpUR5jef8q97tFsCpXt3j9pisCUHhUUasCCCYDceTgQxjYu2TStkCm5rrMZyB1QSBhJcb75dFiE28fcBb",
  "key10": "7YgMpapL3j2qwv7fixfheM2S781VXUjEZCGjNh18BQ9BftwAchsMoAN1XoE4nJ6dkWRdQFSne4a1iyxvNtaxg6k",
  "key11": "4Vt5TcPfMMKVej4mBuRbcUG1SjYeRMt7kkRn1PfEH5bQ28qadtfETP7SSZr1UULzRkctwLWYg4iGS6ufG2X6TTSP",
  "key12": "5ZRXBmJ7pZfoD1sxb2RJSvcZZyH6Hc8Fjqm5mPH3rWAuPuxkdvkrYJUo38tLrvW8MzyYwNBqairYqZ6zuFrKJ9Hd",
  "key13": "SG9s6pJTeZGnFphDx4VKnaC4pmJtkU9e3xSnb5jo2VvDaLbxJx77LGSiKayCLVHQrJ1ENA64gMnRxc1QAE6ghWR",
  "key14": "LFcW9Yem1Zg7Fa4gPqu9tUEHKdW3G2voepfeCyNthdPbPsAYiRyscZUtoRFcgn25DmfNfLqB6kcTqznTd47w8yh",
  "key15": "3swo4B8KNPGsmhfnu9hT2YXYitoiekgf9adXR4YGRvyJGPX5saW4Qq9fpK8ULtyDy7RxMbyhwJ1xcSfWoWbwDom1",
  "key16": "4iVPM1oCRjTDswuJCVpBvaxiW6As8NhxtMknyHGTN9Yv4fhPeJW5zVY7PUe184tzw9HiEZ5SnS5vziJm8rgmcjhK",
  "key17": "3euvWNzsE2rpV6UbyPhprsa6dXMShUAsXdtQ9SURohZC17PD6PfLQxj9qbBzx3DoGPRfzSVnEtPT1WqxCcn7TeZW",
  "key18": "4hcg4pAWRCcdF8DyFwFTpECwu9ZQVmnWFLCJpYHHjpgTUuqEq7hB4Wo67UV6Ez4afJmAi3t61jEh3kTYz3VaYArL",
  "key19": "4kErYxWX3hDu8dQGUSDoFPB9PGoYLJpwtWRELMrMqLrAJLK9WPAswXwrkd7WcDdJwY44LQm7U7GsifoSFdtqt2dR",
  "key20": "esmSZ9Yb1WZHgtyPDdYKS5GuMURJLxvDyaJ4f8Y3CMDnpeFtxW8Sx3LZPY3AFQSFRor4N544EwL58hWacHGKB51",
  "key21": "3D2jqkLpsHFhZt9BmAhw9wvfhetURsxYFdsidczzWuuYFNGzk25qFuH1Xo9Y19pfEK3Z3n8vJfq8x49whxeANLGx",
  "key22": "3tuyyxaNEf36WiM7Dg5KgRHP135MNTdVSMDw56WhXxt8WXr3znKJCK9CmCdysy4d3crVUE3ouN1TdgVeptZYgaEv",
  "key23": "44bFe4b6t1V4k2hcpzZfJwAV5LN5qvwjiNXvBxZ3bxfsMsK7peW1iFym2sDz7Evtff8MRgUpz8kUoM4tLcvUQdGe",
  "key24": "XCBVqwNjaPLAQAdMnEczQ5CszcWjjqA4vMUqgmaBWC2u7nxQ3SRUCE4rJ3RuTATPqHjin7WcrxniBcm4r8wBUaP",
  "key25": "3vygCNFYmj2QXQao4SHSYGx3BAvgy3ap8RBCj1i96tQL9Z5tZ3qbVnRUjUUPYq1LBGvMVyx3q4x2Yr7nGpdKEgZH",
  "key26": "3Db7wj3kD71o3EzTXgwKe7cD6rAHfdJrBnRA8m6mDH7qsYn32HzujUWnKgwLmYBC447ZoXvfnJHnoXrbXZLzn3ZQ",
  "key27": "4BGZbnowSqEkg55ERdz2iHEVYZouAiCsNnLMfMLFXLJer9Aie5b2JcU6yzBXXaDNfxGu2b7nDayECKgqEQEUA9Mx",
  "key28": "5NgDHFDscv2wq7QKqd1ETSqNrkXo4hBr5rSt9W15396zvdSkeig1sEy8vhPugQXCtq7YDXHvRiMom7rh2atrzrpW",
  "key29": "2wiMh9PBM8aGfdwD3UXE2HoH3c8Dmt1ChDy1uNomdsaiK5qtaJ98e2xFG6c4NvMvGooLWvLqPS9YChqwHZ2J61aC",
  "key30": "5hYk4HLLnrZD2SrcARF3d2rZ8Vrg3X6FqgYHR2r4Xvap7y9QYi8S7ffRnQsQK1UGozpk2VfBRFr4vnACvUc4BbeA",
  "key31": "z1z2dfDZj6ZW3ofF2kCnsVUqMFMCWwdW6ZWgnz2hfnr7UsRjNEXvzhoLpTEpRP9e9vD3jk46AfCxkewgaYKWY6x",
  "key32": "CDgRJh9k1yDcEikV69n5xNrLFRSUGSzqynJidv7gjzVewEGKyjwwj1jzquq5AL8HyEDbQDCLJ6TDmrh52LF3ChY",
  "key33": "4xFyXAzh4K1819iRYTGA35KawUmWj6naukjFy8bzC9ABEdtDbCWysDwZsJzyAe2VmGJ6ogXK6D424BCb7UWCvAMQ",
  "key34": "64i31F96fSwnBMH5zGb9FkHsXmkHnfBgEETb9Ywn9KoxVTUW5Xui3YNKGvGkia2Rpz33BV5zk2V3DnWYDb4NCTCJ",
  "key35": "2zvNnK3SpzefikfRfJFvq8W3riT2Thb6tNN11zH4gtRST4B2yBVQZH3vGSN38xHHVjBoooQDxicLaBntK7ahch14",
  "key36": "57uVeTL4nHfnL3MNeg2ckvewuEKmBWGRHQX3zvm8c4te9kSSPcz4eby5g5H4WXs1XzqsSXGenWAvM5P629zPvjLs",
  "key37": "jCHKqjNZEUPPQNGr6FZQ6fskArFvT2BMTzSfDYPhdohxH3X7m7RBv6pKVRZQK8KyW5bGzHimWqYHGjYe3sZm6pn",
  "key38": "59rp3KiaE4jATbJaV9GiYA8dm2xsTS7j6D4WKsJY1Zd41tfcch7UB8VnGFiCUD1vi6YAovgwXwRtMWCE53K34KB4"
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
