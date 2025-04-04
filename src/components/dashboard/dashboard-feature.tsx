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
    "54HeUZ3BvWqbT95PQrDKJm4AXU8xi1PsmsWoLQYg2NkW86S2eybL3DjVw2CGdLjjP5iDhWGDnEoK8hKTeTbXv529"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZe6xY3bjoKRkPMk1mkXzayC2Ryn6NZEXkFeBRRqovd1WkiBHondmXfoPAZ2MzUsjZ2Pz5GFyNaxZNTaMZnTMM2",
  "key1": "JvzzaT8d7rEr5enCEZPGESgkE9CV7dasphSpY1ZTCBrpH9eYCYdEsJgtUUJ6NnFJbiWBbWn1KjphW4p3F1VPaTp",
  "key2": "5CJFXZdkXvx8jkujBMNq2xtHxGAzkBqcVS17fFf7xCepnzwTyeLH7SH4rugFphSiuAuEtuFT8efrEaUTCRLRWjRn",
  "key3": "2j6f1NJanCDp8ppLbTD1X3n8HFJSiN9ha4HLAdD5x7K5NSAMh6mkK9SKWV5BgmZ2NX5UuvCy8Nj1B33HcpPRvaE3",
  "key4": "41FTkUa9aAqC9mzcKa1Y1odLsHP6MP3FW5ra5ML1NTNzjm9se8bThLXtVVCkz5PRSXJ4hcSeh1ms6vRp7bKfoStg",
  "key5": "29LTnPNkHy5F6pxubjBP4DqdKEiFy6WQtV2HKnsPH5Jtr3pBc2UCNJExLXPu7oF4EiG1yyQbuokpw3JFu8ZiyHph",
  "key6": "6785weaLWKisgTPioNJ2j5jRpYhmW9sxkud6qB7HvZWRdiPoLnnkiEbZQVNaHaUrFdJXCLkmErowJwvbSE4uyTjR",
  "key7": "2oqSzv91yU1zuo6Hwk5iF9GNi3qyYj6PwmiJwuiosMh9SxFZJo8nEd6Z75qfHx7CiY86PQ3MttfqUM54YtKtPef2",
  "key8": "5JhvXYqreq1Qu9HqYCKqVfpWYPd66DuSuc67Bua3wXko4FrFLE9A5WQ9WxtLQwi3f9TKxqB1e2Lh9LPtxZAHYpDy",
  "key9": "4WobQbLNyR2iSYztqbyrXxncCdmaDNPK1cT2GtFmyg7d6Z87K9373eRf1scZ6UpA8jbD47mKb37UsjEFSrFHkXiE",
  "key10": "5yyAxkPwtX39o4wBP96KPZFgsEaKacVnt5QfzSUuofFum1kZoi9N7oAnAtHqYfbjiKdEPJrz1ZXugKNYJoqpPnPn",
  "key11": "d3KqC51rm3uuf13abjP84hVhjLKzaip7Ma4GtTysyWbroAbKVuf2GRHndz9XMqSFFw4qCBUvF4htsJbH1qmHkyN",
  "key12": "4mm7CR6nw6y3P6EpoTT4MznzfL7tmYg16s6gqfzfxm32NGastTB69X6DvS6r1Mjkvr7f6gVvUGr7bmqpRG8h7g2c",
  "key13": "3U7txGtS2691dsK9af79wwTiLVT6ukVCePGMrbGudHrXbpmLha1742rTwSfQFH4Ypq57A7qKWgrrA2FxtKP8gQf7",
  "key14": "3tq3zJBUgAELFbA1mKPr6ghUiD3E73LAKTFe7wDpZBs7zsE95Z7VXCS77fUtB4AYgV6pA8zpAbQQhmTXXUjjsZwx",
  "key15": "53zKk7dqSj3BgoAbtSLGuH2rizvPHwD2LCTpSz2ZD5CuzdsC1mfW1w3sbSARCzaViG268EPN2KH4RYRdFrN5sX6A",
  "key16": "5fHGv69tfeQjRbyYgJpCHFG4xhmdaVQnHJcRnvEumpew381binrhYghi6ApeikNWsk7XSXscYqGVJChuprYBrZCJ",
  "key17": "3gNrrnqN1tk33mKs8iGefDGu5pYuGv8VHFCs47Bgn4AGUResPpMzBNLqZneANVGB2L7LiDdFxqniueLoDxqpFsjb",
  "key18": "NeWLenZxKyRSWDdHiEhFtgqTvQasFt5DMAvi7RBWfdnLLWoTDZLiJCZXHsvmUPE8uFswnu7oH7rSvwMCg8QQpa9",
  "key19": "4pDWArWATN1dvHvWQqyaA4f5uTzeTVpcxzSGri9Rys3ZuT5Jg9f78r8vrTk9qwebM1NudaTUqXJgoqqiCpvFnmac",
  "key20": "5rgZim6QhFaTV2L9eRye6Z5uehHrfPiCMRgssM1WAa8TnY6brB99kXoaWvytv2hp8obySrVV3vJ9afrEcGtFTipd",
  "key21": "31pfxQW3VXrQsTgJW5M9n99EYHvJLxaHY7CBFwBgjNemJFvNuyHj8WD8ANKPZdAtMPbok5RA6n4oqHxUbNWr9Jub",
  "key22": "5pDiyF2pQ2ba7kW3jjbbNhfD8JECB9WntpGJN6sVLRqdx43htnSB1FvFQRcbUMW1Vvaeyg5yX5zr5PrCXwnkitEx",
  "key23": "5HUiGg1H8EQf9FcZEBD4FHcQpenckSxMzvuipdWk5xsRq1ReMr9AaVSyCoSs3FsaTi4SSm3FAzE5HNDR7DSzhayW",
  "key24": "cXzhkFyZJsinqeoDeDT8o9di4mhakV3A9tj2UEnB71XSVmg8rTxz43GkLhiEjkfDzmCmcpFSGwGxn81UVKHn2Wp",
  "key25": "5c7Zxxiv9Jm8FLV8zYiuAvKeLcdJyPhhLtTUyLSkJNPxguspT7ejg2iJVKJap5t7EsVm48yq9yEM4DEmUWLMpbNy",
  "key26": "66MCaXEdPdJgR2woVzpCvCZfyYArbeYniybc14yvG3pNpU7H853YKpaA3egbNUMGURSKXSfx9DPGMiXv4SP1umaJ",
  "key27": "5bRxrTnTgB9tscAJde4HnnSqFMQpuhWuCHHLG3EDXdLqVrfZF6e8YyaGXpev7f1KDnA5Z2LJqWcRpCKreAu5NE3A",
  "key28": "4reDE7iny4D5q7PiKcAwvgUd3WzaSxApoDWFNw1gSmUHqYZgVxf8cYK4MGx3ouivp5moojQ9ojD8zc5DqsitqZQz",
  "key29": "2qviNqCKbV5MYjZEVpVGPfLaZdaXvcQ8nFd1xV6Mewth4RiTK8bhyHsJEe3WUxeFSgQXsmxzTk9P7MqwhbrzxWWX",
  "key30": "3NMRKJ4mkNor2xhmkvbth2bCmf2asxkpQ2Q5bJvtfigpJ9xPj1Lbzx3VuLDPJYosGsnymbVPAxxT7DTqh1Z1bjJ2",
  "key31": "51R6gJZd9MfKybrJZEFCdFCUdyCcHZ9jk7ME5wrVP28q8CB9coNu6cCCUT8ZG34LWPnTA7rbhJuAvgELMF9kTF7C",
  "key32": "2gn5B4hjpiyVapf5uaZmy9w4gspJWnqsLgh9tXfy4Npu9Ti65ESW8nrtEWFJFvakHQuidXnSjG7z158NqQtT5Kt5",
  "key33": "29F3W6t9Ph5CFT5RipPBQB5R5hz8nUSZcu3Vnw1g2KTMQ9YGH7ynyMZZkSU3qEkThubWZH2HMm53cDBufW5JyPeg",
  "key34": "4tk9ZJt4ZWafkMcLk6co3WcMRXzDQon8KfJcXU84qjveGzBkhbLJ1UGSeg1HbSEXLs4M27gQh71Zsz4VUq1fQoqC",
  "key35": "645ffwkGLo4i4ThfGT2LS1BBQBdmNXhbNGhzn4qbdDEjRoZyz9ABi74CLMxiY5283TX6DBNFLmutWt8a6ifP1bme",
  "key36": "5GHvNhsXmR319phwGXgcTMDYcLPWmejC25ANqygeimkMaVJa6cD5rupoj8dgcopn4dLiBAa2SUm1XjHbxz1euSB6",
  "key37": "3Nk2sHe1grsaDCLVPR3haKYNwJtF3izMDSLydgJTGrYDo9KsLP6AaZ3dvfvCbv8ZdXbiK5xtsM8L8XdErrVqs8eR",
  "key38": "61Eyia3DnYP4mHxMnWb2zSdjL75fBwUbJKqQMdem9uhqhi3irdrShN1qWcCG83u8qP4DJKxhEJ9nr6snuCPu3yMt",
  "key39": "3aKBxLECpLWFFJ6xY69BmvXJW6BKn5ZHHA9jaStrG5gw5TgiBJR7DXK9vYvWi9KBjiWsVmZmgh5CdDRFHNka62xT",
  "key40": "5uCjrmHjsrrLhtjaVm8UUVsxZVxegBpUujdKWNHaG5XAjqVmDxw3zLMC6HXh5ynjoMUAS5AsUuHkueDdzuvMWzoX",
  "key41": "4q3F8DZWq68vp7vQxD5Mi1HdtBX64PfBSzJpBw1HZisCkVhXwADNWCB4K7twf6aGabzExCUsHqnWxfbAqFt8cxfL",
  "key42": "39fcug3v6cLeodhhnDYsYRY6QM78sDGqYsVSi6SxeDAtA8UdBSurihmHFUgmyeorBYmSWCYyPjkNwF4xDGH6cjXq",
  "key43": "2xNYxSL6iYGQdZwSwu4oiJPxSFuLamyJyqBe3jP2cSYpmQ2PPQQaxVTNdfY1vABr6Wn8AHRonfHgYmwtkhKxmisk",
  "key44": "4zjLuDsLYfE8qizQY7ioimQyRQfEb949uiDAvqy4QnPoYvsE1mpNH4ACgTw3DYdnZ9tPAoSqziW9xu625j3vBV6k",
  "key45": "4GciMUJzNKFo2ouy1a3tftChEZ9brtSQVX82qySSyy9kYCzAMnMvY13r9MdwXkeNqp8c1yvidLBkpsic4bftRz3E",
  "key46": "3vJQQjQtoSbwZnUK9X9CAFcNHHXx1JF5MNEhH5LWXAtcRcWFV8Du85hxwdrwz8hZ44iLLYbmoimC9NkuA57CXqH7",
  "key47": "5kfgUsMDPmRZhTkdLpPUjLnZYiGz3RydvghugnPtkL6iZEtPG1Y2eUYVeBJqHSxbBEaeqxWHAYmbjxEpzhwqcS1h"
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
