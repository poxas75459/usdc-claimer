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
    "58kqzHtGUpGAkRhCoWCBnm9JcNu28dusKudxsC4d2H3hRZMGViP6o8pv36F2q3RdN1ktAUDmkfGWXNaiDisgNTBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XKSWCWJ9N3dpENifsykEMMDnU8KipzV7PyKv14J7muABhkXCK9QvVxgNDVCXW2Ys2efhMDLdL76m1uxMgwWEhb4",
  "key1": "4XbfFhKyVuSFqRmvWJmxmh899uM4BFL4geQinfJ4fN47eQmvUB8xeGdc3aaSy5UGQjX7qqCoG2a1ZhUp2gfHqtt",
  "key2": "LLmq5TnkCDe1yjB8cpVBvTBswbNyiHTKTLzcCtUfoTv1NefenLxgtvAmFtRWGGrGfXQWYNqfe21wYJ8wWd4RsNh",
  "key3": "viFewjkgWhVmaYsbr5NYNKZZY2XRn7EEHbJR3568xu4qpyAqAKnqZALonkJSuCo9FkoyTWzmcbLsVhooDv1ZUiG",
  "key4": "4Gewk3L1e3LtLGPJWAkhQhxAYbxpzujFGJuzkEsfgZj8RW18grtMtofcSkCe24LGZpk5ZqFgUNyvdFEtcSXaniti",
  "key5": "36Fh4uhtp7gJnTH6Fns3s5GgdRhD9Ndc3WiDJJQoKgZy9QchQTVqWa8sVYhEEJuYS8xX8iYN5LTPyNe7YuY3izHU",
  "key6": "5HuJq6a9FJupyFHAm7eBsuiPKBtkmTiVd4KuMma5jZow5K9JKFdnJsLAKEMowriHyMYRpiJgkBVFHPPL1hwoykZ6",
  "key7": "4zVqUkcyehSYQTP1Z2FfgsS1YtTE8HBcBb4f1aksJneDJp9T1igXBotNB7yNJdZ2vRa2YtewDzXfpPihbRS6rQKy",
  "key8": "LduKEwTcV6WRb85RodAcM63YuJbS9hZHvAxxgVdVxmHpF7apm9WrWW9kr7Jto3qfuvUSaYG2tmACtL8SDoymFrN",
  "key9": "4XEUxKVSKJp48VU2LrZoxx437ZwyhMFUVkTND3c8SkAivrGwxBwKGwwdX3mZ8qGbkwUMmJF3zofq6R7W1cD8m36M",
  "key10": "5bugbg6UQ9n5RcktRfqqdqgAKEumYpB6YYKaVkmVcbQ7tnXdyrtVKQDZbtRNBAyRoJ4jQ2CLAd9U4koFrBiq4Vc6",
  "key11": "4Ar5198SPS2VBPAeRuf7s74kUCd92CJFf4MJZfXrBTmD9Kr1PB35vQU2gLvCxX5iM39A4oSrmUuu8Mq1LEiCfUaz",
  "key12": "23tqPjFzGzDiBfbz5hzLmRKKneLipYYuFtwQjFMjhkUPofCMp46X1t43rQ5sQQrFPZXTF2Q45T1tpi3RTVuN4znH",
  "key13": "61QAMsuMPhvowmEsajYG6N5Txvb5xrq3GNQHdDKfKd8F91wBmVJXE74D7bvaMoN8RuGou1STSTYYuUENaQyu2LRW",
  "key14": "fqQpMzWAQMFAv1QYFNvsNpaBqPdQHv2squCSm6J7GkhiHqbyGMRYREtKxnJJHfJco4sbjYYfmwiR7uXmtFTvW1V",
  "key15": "5wxhjnEifTEgZJDjjCBJF4kNj4ywxFBkdzmMKcNdWZkP7tx2uLT1vvpiBrsz89y9Fcvh7UFzaHnoFy284S6yde45",
  "key16": "GDc6qXmyxAo6pLZTmcaf6ksYBecb3Tv8PNKqgV3XpW5LHAdYe8V3GKA5JuoEsPkMsS5dXr199BKTLqD6FwzaGAw",
  "key17": "3NkQCDzzXQProjbEh94Ks2cYuPgtUx12CUeEWq49DUWgxcKmmx4xY3tDVsKs1zztGNjoeJHWSAsXqY6xwxHT5SUU",
  "key18": "4dk7tvhvytzYv353eLJKCcqGVDLkv34pSQbJJvDWYZzSCixV9WUy73ce6gvy9Nxmu41esxbgk1Lr9ihvKoowUHmo",
  "key19": "3MZFoLj3tiNx6JAgdvJpzzwmSgwk5k1qE5Jxa9fff5oHjHZowwy1UF6uN8gX1q3bUjZhBjZD6UnAmJFHehwoEoPq",
  "key20": "2Sj6yqcj3nUp41zMPN2xtNyHgZpmPZgtAiqexMjh3LYSrLZcfpintbVmW5te4kXUy2MQCG3dckPi88jFc9y41QaV",
  "key21": "2s2Xb5a8UqgRMjw3GHXU8Wnn1ap7LLGDMyFUUhMygWruR9FyMPTaZKWeWPSPP9dfZLwtc2zmBhFSg1fJ15oW8QnA",
  "key22": "4bSHyrsC4iRLvwZQY9MXm9uWnRAzckSu1HTyPdBcMMsAko2p54jUaWW2uJcVYdEEQRict7QreZ4CHWcgqe9yyddL",
  "key23": "31ncWGSRq42Ty9ddnzm4sr3iQ3a3pPAaNNJ5zwz6YYKjgpMPnDHSDQSFDPcTsczXRH6aYGhgxXdSqto8rhRVkYww",
  "key24": "381BP3uLb8XpRnRz4wcF58GspWxuMrxRCYtM3tiQGzqvJkibkHPHAxfaiBag6ScvFdbagzqTmEajyP38p2mWDTT1",
  "key25": "5iao9Gx89R88GMszooTQJaQS6AF51BRgp6XATXvkjMkzm2Hz6DtFmDFPbwomZUsDnnjGv29xzRobx6N8AxxeXSDk",
  "key26": "5J6pUvQT8BRg92ZnQoABqngRAipPqycKjEx2dYG9cHs8ZehLHscQrprN3QmouCjDjaVmg1JPoJ8aPJzi4rCkUS6a",
  "key27": "5TSjVqD1YNeiymbLEDGWjenZrVH3QdWTPYBqowKj2r7ikRZZbxn19uj3Y2oHs1ucTJKkSmfFLSVDj85gVm35TgyY",
  "key28": "eieP4nHy8d1eZw5EwJiEn7MFudM5uk2AvHpB5Tp646ifjvGmfH9RiNmQL9yoTEhZcsY6zTckRx8bUUw4Nb9LTuL",
  "key29": "23p1VQJqJrJtR5WmLHxJhYuSWLwTXpo79qZ8UKb2tgYZ2CCzApCm1FQL53z93dvPobQenChzBFqKWn5psGAFyNQf",
  "key30": "4cvZdc62UNjiTMWi3vwuX8725hdxFqsy2dqVdbHWGa2t75x6JtgXAFqZFt4rR5g8WkWpo2LrF72yFYZRzVG2dHXs",
  "key31": "QePUhaf9z77QJe1tprqHMmFnLkdUG3djQF7zByZQcSWqa7Ff8poRUhjoDN6pZh1AyLUFJfidEt7dFuMxaXhKkf6",
  "key32": "2qc4Jy6UHEFr2sgs948cUCGNfnPDDXmxCyyKvnKxJsgnaMUHZyJVWPTA6xZCds4wemf3Qkwx1shGZUeRsNPowPBS",
  "key33": "5jBfJFXXPRnP6FdRJ93cWLLgAgrjAQNCbSgiHmB4adUDFJ2Sdue5tUBjU3sNYwLzcupd74ihNJ6czZzzcF2dCz8U",
  "key34": "Q663tacsr5tY795fVFPPitpHFTyZLKRMtd2x45R3nfdG2gFQyKYRFyJ4eZkPg2WxY6wu5pqBpf3gddDGg2JsLyF",
  "key35": "rX6SXEhi1i2Rt7hS7TXMGZ51VMhMQUimThjWpcbUGHH9Qx5CTLPCS5XEEdZRJbpJ1XrYXjZTFxtNS9h62SK1X6j",
  "key36": "3wwGuNxmGXDLCArS2xGgS5tYLkWef2Nj4eNjEKfkiE5w6dpgajERbfcMyZgynC6ucVsEhdMHa2HaYezCdH6ks2Ld",
  "key37": "2UhKP9ZsZuue7yzr2y5LqhoT1HvQrZgWpqPTbEyF7MnLMbz6t3XGJZi3MP8LWdeMTwcCmQA7yLdciPZFroPsQRWz",
  "key38": "2migAY7UBQgey6wfk1T9Le5fn16teSbHsDCqSsiyj4v89tQ1g4djdJFYzS4oNBhoN42wGmgbbRcvpC4kJ5qa6kPf",
  "key39": "2oF8rfrXu3T4x13TPuXKXRNuazR1FJ5WKtQZrUJMvSMhpn7N9tX9eK61qbJUDsnU1dNm8z3M8q2EF58ykJMtj4e1",
  "key40": "4bVB2mqyh6ivfugqov6VSMaYZs7DtU3o2r5CmrW72HYP9ktcR5rfkqJoNuJ694ZGDmzQyvYY3iZNAD3qRMbWB7Y9",
  "key41": "3WUJw67oBwieHukUesCRYktEjdyEWmTKLFfJefkVoJkqg7oAv9riGZzq4uTmNAmJeeTMKbEoXvoqMJeWVbrJUboJ",
  "key42": "2VDs84wvwHYPNLravxzYfUbcHm3yKrXdh4n7oY969Cj9S2uWUSAYXLXAw4uYWBHSSJT3CgHP211onoo2iRqwgpeS",
  "key43": "5Hpmd5NhqJG9kN1zr68LXpbjfoDM99Zm57vPPja4UTE3SxpMGvPMipWKnju57e5bUs4JEm4VdRfATDzQrqdvJsMA"
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
