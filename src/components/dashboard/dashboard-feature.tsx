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
    "4arDLU8H4YX3Gni6XwioAe4oYwkmiF3oSmzxf2ymf7tz8D4VDiFo1Gsn8L78tQmdTq1w5HScw5z4wbxHRVp222Mi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7jfWdTWks5SM9TzjU83DiYzY2ChWt2EbEYJVAhQ6ZNHSJfTC2QYw2Vqb8q8zYHUr6QBj1rr9JDw7cR1qHuTzjj",
  "key1": "2a6i5Su3CJoHde4V7Gya6my7eWcjCvxEV5joy363V3TcZwEwcT3i3nSKDQ9ueHYBX34j4ifKQK6cY96WD4Uz6MFX",
  "key2": "3RfxeGcAxxevdJZ914ur5dtMFxc9mJ7eTXgnuZwoW4zLGEw3wLgNjiqPoLfAA4nWeVSg9ktqmTuZWKSqzQm8R9kV",
  "key3": "3QDpoYNT4KKk9irugArrwiVqA2A3HGpLrkALPPvEVD4Sboq7ZnwvkhftRBcFm36rApkw5VMQgNuqq7jFtRNk5K7T",
  "key4": "JZMHeSz2adtk61QSuHqRqswcnqDztrTgWCZYaupBtERBwH4ccKz2U1vhqVRNkJ4xkvRxFF4LUY2L5aRgMAGQpQg",
  "key5": "5V7PoNiB7AKE11qL1ArmfFHeRUspAStcPpqqnjwWD4vbRcrHbEghRCxg6EPn1Mw8yez3Fanz8tXJzyZq6L2iCrgp",
  "key6": "3Ap1C23HrrNYwxHa4dwLzpmBEKaQT5fYfKHgjopQTmUvnuyhnxwWTNmqqzc9Eh9VZKKL1R5LbcA1naPm6nFTfBZu",
  "key7": "5UgBJhwkVMMiAy2H29hdSKCEaAYfGqBP3G7gaLL1mYmcdGzd3CVJXxNcRUqBc6bKssXbnNGeY5eNPZAj34p9D5vu",
  "key8": "5pqUEDnHYW1uXptwz8ZGkM2DL4wjsA2AzZcHUNvnRNgUqVxTn2paGnhK35Z7SsoA1j3o3VQmVsmxj7KV3PCGhpQj",
  "key9": "22PHeggxyfGgSzVUyizJyeyAaimYpFvCwWc67i8YLnh2gTUKBQfdkDnKJHCmDuzV82eagUCjCdB1WAuSDNkTnPcx",
  "key10": "3vFThHhQboTC1Qf8YDJE5pSQTJN6s8xuHTG63djjb4Xwd5LuZQGtsY1zG6gKCz7fAeBReDdx2qLBh2DKLfojMEgx",
  "key11": "2pKrXBLDgW52gi9onMd1mJEfp8E7TKKEJ619bEQQPpnqSY4AvpdGSn28f3aoBTsnyp1tzBgGmfFzDakePDiW9JB8",
  "key12": "3f7gxGUdbMnzjETBa6bRMVB3WjSbsqRLzx58eNSXC9fM4mLEdfPmchqh64HxUeog7hGGF552faFrMgDb28J1Efkw",
  "key13": "4EqFsvejfHj1VfdLC1EAXqZmNxS48vq2TQ6sQFj7yhBscgV7bDrTFKKvj1akPyVYKxW3CAG5j7KtUxRML7yeXAu7",
  "key14": "w8QYYV692iV9DBuHM2GEbERi5hvDNsdJUesKsoRYa715ojhcsXFVy1vFcjsKPzqZgMLyzA4fnS9jPFD1jjXVnv8",
  "key15": "3HJRkbapEZX8hEo4bpJVp5eaV5YLbspFY7NnHeX3cYCF54etLcanZcGc6qAs4C4FD47pitoJzEjfFXs2Z8zd2s7b",
  "key16": "2Q1kEsCNF4P9FPbeVU7sKcDZq3sUhaEqQPsEkXoYDRvtMkMfJkBqncUM8PKC7M1PxRVQz7qjZ21sEXKBNjrELFP2",
  "key17": "3RG2Ny3BXM7VFRNvm6oVoR3ksFq8th5vxiwroZe93KnZnzt1DfQQbofjF7oYTJdaT6LGTrqU8poZqbVALDgU7w6F",
  "key18": "xqw5YcZBGxXrviekq2V5duXUKhwqdKurRE5b1MXbD7ZkwccXJgYekSvEu393AtFRfLZtb1cUaZj1LoFhzghZo28",
  "key19": "53VWSV2Bynr3e5UWp1bfgpSgNPrd2RxrPgkNsdKbUetoS6Bhj6tPFd5Pe87bbd2g6dTjcFHwDg5o2zM3MZXWmrDE",
  "key20": "4ECe1gD7xGRxjAGqQBLgobdMPpNx7YDgWdt9kNXH38w3DVj4gbuFzBR5vm56updTVzP2zfGiAseLDpVDB3z4h74X",
  "key21": "2Hqa5F7Zhh1LAhrEYnb7SnKQvviMnz2obrwGSVya4na3BkSRvTFaBWjK1tTct3gPn9C1ZY1j1h9dxqAXmsBaWbCY",
  "key22": "4X1DYrs2JQ3hL2WPyQd8s7TxnQMCVZpcCKGpXc2iMdYN8Y5FowfU37ZXkLhSnt8i4mjmxV4AaBLUsYvrtyj4mZCZ",
  "key23": "5sVX5qPXkUw5wCUTQrWhv86yPhK6XyctihqkZZFrP97ZiNpZWraSJaZ7MrouCK8q1X4PeD98bqbfRFD1WYLBhvst",
  "key24": "6511RHS7dhurZB3YaxCqtko2YHsvEsG5gLVYQBUe3jPw3iMM2cALHTaCixZoq2JH91yrrXZtveBMMHQ3j54vn99y",
  "key25": "4hTe2UynsBo8ys8Dq1rkPZCx3GZodzAuByPjRVDRuySYpZWv61Su244V9bVrvNqXCNHuST9hf9xNHPhFusYQ1TH3",
  "key26": "5YJDbkhWP84dJiJhj5Q4zUULDDTMJ7uHDYfgXVJjqo8jTaiBD1b5a28ExJRxvhcK8qGtFMMzscHnYWwytRXLF9jC",
  "key27": "5uTq75mPApAGAATxN3FqteyvFEnYAADirG5FVZ3FheEyhxWP6WGDdD7u51zn16LVUUQPG6SCu1sTTosWJpqfNp3k",
  "key28": "5d8JwRUqQwEhf2yUUPKYsmKDz7RFijL93hMsgt3cQtMfnno3CHbJLrwMGFgNVqDwJhuTu44emhktwXrGLo8a8vvD",
  "key29": "2nXdvhAJP6mcUZ9Ch1vqWCTZtKVJPKV9whCYLYgiDmb3Gsmx8Fn2AMSGPR8MSrfLWvdorFxBjnkbFAe5F46H6xbW",
  "key30": "5sq35yswRvWqYH2mnLFiY5HeMTDDnCwEktPjDokapWn6dEvtHarhxg4XreyDSoPCzeq6SWwyRYZWKkTaZBxewQxu",
  "key31": "4NUD8fBYVSLtGjP8wkNVvoJ48dQh8Hk8RGmWmPtuvYhbY77W5nZoocpcZ8ERuNC3XSAxee17tD7etce2LNuDkLBw",
  "key32": "9BryDsEXc8hkNoA1i6mRbCyf28TiFKbhVCnZmv4QPea5zVCfG8xUmYL9wAueFBtRtKrQWF2MA6RqUbT2F6kGXHY",
  "key33": "3uU87STWqPzuoVmpGPghNWdtVZFix6zCMdmTDyQT6LZsmMqKbtSG7YN3ggYEfUhCSC9prsrcsVF732mihi263noJ",
  "key34": "5qHRoMqg47JS8V5iL1KrzY2NHtFZtsrAr42s32xBCe1j8jmCkXo7kHCYhYVMfaAEKAZ5McagfEoRJv41Zt4wcjha",
  "key35": "3eL2NKfYtpyUofhscMkYpfSehQV7CCAEaSR8NLPLWLAR7Rd9pHCQHuuDYVsKBYwJg4XyCD6wVt3wPY4ZJyoaDhQU",
  "key36": "iE5KkiPkHZKbzh6SAroEQQwMDZn37pYFx1kA3WqQaztY5KGgezVe1U4VRpgWuLCHoqhfzK6NhkQP72AKKwLG3b9",
  "key37": "2Kqdfxpnkmh4aGexmsrQafTPosYDGc95i4jryyGyFnuLp6VZGgstJvnz9Uyx6NK4WLeurATJQT3gmfEKMPWdsSxB",
  "key38": "627xVwJTeZ2BswRLN34rd1CLcmBR7wPHVYuotshZ4zZMJ8W2H4fy3Wbje7jpQaugUUSuxq6EWxGhxmAPbep8GJQn",
  "key39": "51P9QcgMyByoCy4iUH99enHfJk9Ey8WZGBGbrVZdXrCfaG8PUph1vtea1KbADH4zf5t56Np4ZT6vBmvCV4cfNo1u",
  "key40": "2mnZuSHQzYTL1jmR1isTwnR3Zsiob1vQPEhw6TJ9YtjvuvYgmEDjsybd6MK6fTqHExWiHzMZJLUJowKwR45JSbvp",
  "key41": "NXxiQL6kpgWmD1vWY9Euc7t12m9h1sM6gP8jhL2iUrdjPpxFXXPDoyKoPvSW1mC8A6Bvh3CRKnhzzNB8ZayDSuG",
  "key42": "5m7EGP94qDHfxFQp8Re2AHk7W2oebjAZru3vx5ti1SmxPD5VereVEGMRtma8Jno8odna77twiFQ367fyh2H94YtL"
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
