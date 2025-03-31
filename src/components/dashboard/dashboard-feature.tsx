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
    "67hq2V8CSfZwsYSZcHvAzca6uUf67YBursQ1YTrxw9d3ognz6o17Gjszitd4huLyUDWZ8adX3Xhu2xnXcfTFf6zV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fUNtRhj1AQx9u57Jyu2Ptg5xsMZUEoYaeJo2Mhp81WheNs1BmV1Va2CyQqSSfMDmodSAM6Ycg534Bbk15uuBPAq",
  "key1": "3T5r87NHbkuwEXJpBBMDCBeXGTDeFu5CjKAvqaWdYczRk1BjNvcv6Yck13EXu8dc1tHTafignftLSW3foUq3fJzg",
  "key2": "2w2Z4VxdML76Hac9i77tbL3b1LezbUBSWA4Mcq6qBXu3ES7yFQqJevEoq4qLUxaCLHPeVg5JEQBuWEdH1rMEMbsN",
  "key3": "4Yh8yjvwcYSwdtKk1ZUY8ESkKifAQpqGbgFH7BbVo8wR12mDYqiQZ3xZzoaUpaZJHV9S5p6wSfkyiAnmdrEPmqgR",
  "key4": "5w614atjYqqcwWxi71LgMWYE4TgEpEgDvu9L7PtFj8Zov1xdb4Htcfiz9xFAiQG1emUsfeWJ9AAVhjSnuckrb2ze",
  "key5": "64hKt4hgkoN3ARxSXXcJixFAG7d36z9sMuRxBpxycpfLbnx8RCeufuU8VZ8JxGvZdumRiFaEVSXT1JcAbvf3swDa",
  "key6": "4gUzpzxf5fXjVhtbsx8WYuhF55wabFoWkHAEp6UcVmNyEtoXEuyQGJ5Ed1KHB6LjoeSNmcSKLeZhPqXzi8S7uK96",
  "key7": "5HjjY9xXzyKm6CjoESyGE3t65RDLGPrUz6hAYe6etxoG89pi8jkqimt35BUUcDenSHEcdHys9ykTDUZeYjUr8cUs",
  "key8": "2gvxUmbU2mZTL2xhmoFBHfRXvUL9rvGKLvS68obyKM6BuxYXhEbAWvCPbxzCZmqPeerr2kssdE6wKFJE89H4XwaE",
  "key9": "21npzeEakehqoXyfjELqjcd5YhgMFmuU3j3nSmv5N2Fni9ThM5R4CfhSrNPbgGvZSNfHwBhpcKaDoyQ7P3zkgfQ5",
  "key10": "2yoy2DTb7M7m99Vs55VUBDQZ1izAraqMaiGg2snRorKmB6EH9fLoLPb94uKE8LnyfM1vu7p3kYa93yBezmx2oNrq",
  "key11": "5c7NGzbTbz3fXpVRe321YJcgCCU7qeawD3iGWy1W3tu8Pi5f2EUo9uLh1fH3ibwAfA7kZqpLqtesxYt6AEXLa24N",
  "key12": "3oda9p9BEYorTk8Drmo82ze1nEnPJ39TBhp7Azp4bH7JysXogeTrfApfB3cb6BkA5PqG4uKxMUP3VMQffZZBqNne",
  "key13": "2G9wLf3ThB8XBVfhX8HXrroqPF5dBSZJDjAuZRCmtdCR26wjQVCzSzRidPhjMK6XqP8pVfTFrnff6a5JRpb4TkBA",
  "key14": "577inyJJPGsXDNfa3MoH6FvTzf1diVPkV5yP9u8hCdSLGqBjdtoxSfdRgSQHxEwxknYQReEK8Gn58jycs1cv9PsM",
  "key15": "Ei2xYP2NF34asiq2TmqZahqNk91oNpjmaB3EiAaiuxCvpD3hb5YB3qTTqvBxiacduJn3SNZ8NRBQJysiCcgpE3T",
  "key16": "3YJBRE47ppKdnX94v85eWYuu3993cYnizwL582Tg87qM7tRnyvt4KyskKzLA1treVq39pY85zG8s4eAZ7tXMRva9",
  "key17": "rkP8mW5VRGhU17xb6fDCQRik4PttJGMR326Md8fRRjswW6QxV1jChsqkXPqMVtArG6ztUEJZSpRz8tRFd9pJddS",
  "key18": "2pK12UFmzziKwmAtfP4kDwYCqucG3ZP8dKkQ9cxK9EshZGqqxxdWkt3kaLFHfmb9XR4knPaL1697E9FmkWNGX9BF",
  "key19": "3S6wxLKHkKFj79WEfP7hjeVEiwMKvmt8Zqt3RV6vD16Gk4L7nP1Ujd7MdTGwt1gWVB7AyuUd32mLgHZX9BVGxiFk",
  "key20": "2iGKyruWWKe8XBGR32E65eQMvNWx9cJzc1Z954HZQUfJU7LbgweFBpMEchW8qHseRsgRBYczxhfMAFjv4RMd14Qz",
  "key21": "2zRnAzG4Z1N1nC9RTYnQB4Fn3NH5rN86qex7fNdRrK3hMCz5751srpfRN8v9LPdXAu7ULsutn1ZujFNhAZdk6tFs",
  "key22": "2RZZoxyNUHdqGvBrw9xFzEZ9FM9P4qdww1erKMf5pAcrvDEB2BDG8SuZaKvwwGGe316EykVeqUz3uAwHkA8hNQ4M",
  "key23": "52D6vK94RzQdYwbxoE8m7paSMiiEeLxbh1VGxxAqD3NwALCrDLugtqynZz5iwg678bLHsNZTeAxpAPg64GvtBxHv",
  "key24": "45bsobw2sdb557yhTmdpB7kbbq4cSuEe7gyywVmYCcb9bWoSjvCawmpMNc3r1FdpU7kyHcB2Rnkxw6YehP8d5VbP",
  "key25": "3iX78hQTG4hZ84HrdVz6K4VRdwgbCYbkkW83RWXkSpaRYW4atanc3FroxZ89brMwm9VKV2KNPoFn76959kMtBSZA",
  "key26": "4zstPuFFiW6cyFTp8turAZtKzm3Jv5pQ7e33nCnsKVhDWdZP29AdiDYJiXMex7kgs2hABvvkii7wJtzREV8rqkJS",
  "key27": "2XhJi2SiBRvhcT4aXbJdbjYw1gS4A5HyX6uVA5Zpriu2PQNWKTFAaPWcwHoo1YJ6oseBwECWE7r9imUV5bq4h9kw",
  "key28": "4tVHvEVvk5Vj2BB6mznKBebqejHrQRwhipzEENZDVp9WBtu6GBNGwKqZTvLGnaNsptxyKVbB9UZUo7yaYM3zeZFD",
  "key29": "3M7JMsPqRdHw5NUM4RuZBQaWyRwog2XhwsPenixWU82xTUDEQ4SPt5hjgpiGxM8bzHb2bcCAXCLmBVXF6hZ1M1Nc",
  "key30": "2VzttGWVBtCjokG81LTnZJZNsSJb9LCr8PHdFXc68scr8XWfVmZfCzarBkBXv6xjS1RHmbR6XUAW8nfgzbnoitTo",
  "key31": "4u3pgVRtxBW9cUxXQjc1aaTYEYUC4qkurFvCCUH1zzPfZq9WcDrMsSrXJmLveTHkRKFqpdtZY3W8oFrwEyyFFfuw",
  "key32": "5QLvXPuUfZkNgK6cxxC1iSxdMKGxzEfggG9aFoypCbEquEa6rDzLibaNMT4ekswHw1b81QB3a8HKtiuanLjxneUS",
  "key33": "43iLVmpRvscFFMbwgjNFUJXG1V9TRrhVupWqVcE5dhmN1yDZbbWzCJ9NC6qgSiyRRp5AzwBrFGp3KQnVNfU1quan",
  "key34": "2Y6r9KCeqt3xmHpNgT898epnp2NsfErWyxWi8YTyUoFszv8fWiwUHMwkRnGWMZsYw6sk3hBqMcxAzcnVuSXE3NG6",
  "key35": "43npLYJWmFP2k31X6s429KiPc2FwESAkhMSBjEBVrzti1zNT1kP29Sd55y7TQmfKtdHzcqidQiKrdRiVdFS72jAh",
  "key36": "5ZVXqMKUADtHKZhLXWH8Fcnf2wrnsntFSKVDWU9PEcLBTtcKQEEaAbDnj2j5Bceym8z9cWrmocYBrVRGCYoQ97vb",
  "key37": "39ZihEMHSckyNTvDWSrSCnxKGTLG4xfbtukMeKN5RexAZRKXC4fgW6kMnkXrZCjcbhZu5AEkXe3TLT4JNhpjabzv",
  "key38": "2h9xpxGtrTn9FCEQR9Nyv226BgGJpdNe8LzmmYR3SbR6WKBbN2eQ6B9WBMEzX5SpiZV5NSmt8JewjDecipNfsT7j",
  "key39": "49xayqb7ZfHLYMnKDC676CLbzrJEEan8fFgGPWQs2dLGqYEEuwCWF4cEryy1tNXH8T4BVkmSHxQUGFd4Yrb59TiZ",
  "key40": "5rA2dPcekk1mNcuyhyX8Uvoi2Rg37Y3YkWo1oznJn1mzEWLDSYbowR5tVEeacKvyCmhpT9FqNgTnd3wWhqZS6gw6"
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
