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
    "5Wth8hAxD3A32rJ1QdidP6ZxRFwc3kgXEHPNEJ3P2pZgkLXSQywhP8iGYzyQiLHxYx9FpdkcTnwy8tJdVprae7Ur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JE2wL4DyQb1TgJ2EeX2mP1mVUs7zZLBqsc8uKpdNQiBufE6JCDthFmp3LKU4Jphb5R8HCrcPuu9JLowGimUKiP4",
  "key1": "2X2LxCLFSNz2zN2AGda4Ko4zpyH4BopPurv1Mv9xq6z262ekyQMSmiXR3sm3RpoCWwDFvi7ff7kts9gGq3uYW9Gj",
  "key2": "5ciWQ1mFChx1wsU6FwZYuL71S34o42tpv9Jfxnc6tQYRB29Zd9cjkhWAUyFhsXhhESiWE5dB3HLnYwEgz419Bs4y",
  "key3": "3HwyPQyZzdw7srNTwnS63H4p4o9vMSquH7VEcbgsmB3U2JaJuDdqcHA3zkmXp11frV9hHSLKUmmiXrKjNaQdYyaY",
  "key4": "5KemPhWUjeudTMLPeybyyk51dHWPwZMkrE7VnRn76pf1qSjBxFnbhVTHYqhuSTkR4sx9hJvUSdKXoHBHWGWao7f",
  "key5": "2WiF58kHiQjjA8eUSBwXgB4NLEKzbWjLkNbfCyFVuJhFJqiaipgpe7nJnkH5vzusdGpxxAgyGj2NQQoV6jcMkG3Y",
  "key6": "AWwGptNUPg5oBYjQ5X2KP2WDGiHmWP3EnjVjxpqnsbcFeMKH9TWMN5cZsbqt6EVpCnTnsBTgFDeGYXkcDfU9aBT",
  "key7": "GyJX739uLE5B8BAycTcZGVSGgFGjkDrLpPydz37z8sK7CV3jNsRiSUxMFjSfaSzcEPQX52jWTtm2ArpDiradY43",
  "key8": "34wLRmCqVoXfEcPnYKQ2z1ZjUA3L8YoW1rYj3HHzbhkvgkFbDGHW6j1ojLNJPYsK7eUj8HUZNtNAU1twpvHuMCfw",
  "key9": "d3xj6abta8yazajKbeUKUqqM3CFEmm3mnzEtmtkXtga3XAYgoJs3fankkfUNphiksLTNQTtzrgoLNg4JoDx3Gr8",
  "key10": "59KQ9ynEZHptfjAua62VEzUBhjw5jwqFBLZ3dVej7oCXjaqzcSSYN5bG1b2itbfoh15eN3y95xVVRcK47SLxHnpi",
  "key11": "5Kpy9v8gv1duMZM1fCqsZuAYGBhoj1XpMKA1tHiPnLFhkx5KUiEM5gSZ1msB289Dx2vfR4bYU5xn31ahNub6wWVo",
  "key12": "2SC2iYnVBVykD6fekM3BSemYG8ErgofSv1rmp9Fey2Ba75MnUVKiSPWnNEwxndN9XUk7XC521vsrgUfVkojWc9fR",
  "key13": "2Ub1VXT5y4vfcLsRxicaRtTwdYhRoAP1zD45vBMY4mZfBcUVUaXy1VUocsPJ8XgocKvtENHAKCmfTgeo4vxJoALs",
  "key14": "3EubqB5FNrZnPVaCrPoEuD7VK5mUGACp4zhYZFdhvVoAFMm9rinhVkMeMHPSWMrowWLKUvkTrgfjmnLiQYHj1fed",
  "key15": "3RhtGw3oMfsazHpNy2sQ7Nr4pCMVFGchb7pcRiQ5Uy7R6ptW5nHNzwsuKgoLQr1yFkqbqVKMwRQEfjAU3T5X1h55",
  "key16": "depUV5ncsVw1yWroBpJ9uBPp6E5b7emfxvS8BpfZBD4XM1mGW6DNozNgEHVptmV97jCxZmTn164L4q6Pwy7Du3o",
  "key17": "2Xuj3BzLDeVN4FWCuaghU4ecNSnApgrWaiJbge5niPTrD2w1Mi3WeJc2gVjQjm5PpS7aE32arLWymfr5zkNzVEuT",
  "key18": "3tivLNcdahUQv32EszaK25tphPn6PqhLwoX8C5oMM2TDxUpNL6U2ir7apAKm6jgNPbi1Q5xWxJhoHSjtv7izcjKc",
  "key19": "5g2qsrgWUnGgAixgxsswfu1fZhqJzWHwd1F7Vkt6HJQsTU5c6JuTDnjuE9EMtu5YTsLYcqg5WrK8DkeQVHcq6QPr",
  "key20": "FY1prMWG1xufgKqgGqFvm7Q6M57h5xPc3abhF9jijwdXbN8cadNqpdo9az4Di68auZP7VoR7N2ciFJdiSNKU4iX",
  "key21": "XVYDJAQdhBLvsX8VNyYQZo9UrHD7q9TdYW2ssx4eb2CbQeNRkQRA9uHznwxM7vUR44KuGpXBzs3WpZ9ujxGp7Dy",
  "key22": "22TBjxcBHPczH2tZN2zTwWzdqGVNYLTt85S4N2Gjpb4W8HfqpFPSd4QwWqcNdfXYLFGmBGbxLTV3aQfd4u4zG6PT",
  "key23": "5Eev2q65cif9jYbJZ7gye67dw8aiyWWKwPgWScucdchebPNNSGiECesuudWKVofQoURcYBfEiVDEJCk83QNtPHBR",
  "key24": "4ChRVnqy1mekazshV8QjBQZCqcACRZPLm5E5oTYPNo1ZVtpvDNcoZnjpbQhXWZqK7tAG8qpftx1K9d7RKig1HK47",
  "key25": "2i57eU33wFehEx8KqxcCzCPsykiwZx3eaiP3Tn63AEiAdjTgwpyaHPyjDFbHQnCoKAxdkt8geNAFWFB9L4Yw9wFA",
  "key26": "5TsCPkgwqjhhq8KwZQnA1MNjABp31G9KJyZ2jc7hjAGUQDro1NzoBNgPh8doEcbpV5fd8eLyHqNoqSeo6oPhEkzR",
  "key27": "472yG4NDp53fMXxtgdkazJNo2tf3guRLKrtZDrC637t8bjwSzaxqwjzU4mLcaJsDy6ki9imyJLz9hwwtr6sofypU",
  "key28": "5C9Cuj1jyaG45KgnF7nGyWykbT2dtzKGL19UUNocYZgf2y8V7DrhnZGgugua1v3uim5D2n94Sbyw77DC3uVxyCUJ",
  "key29": "55WBSzgkqcLeUDqX1SjA8mxXRBCSrVQefCQMG33ddUTR2xHk9EgpabD9AQ9sRQ3GxAPH3AJZeSQLM72vcdie7rvu",
  "key30": "exGs7jfBjrHyGuJ54DbTX29uumHfgsxsjeXEA3yUmyGpyG5nZKYyXysFEDtmoaUgy89MfitEFZR5ihHow9xxgio",
  "key31": "4NKHLbovrkhW9qWHiLaFsoVoWdtCv5cq9gBgaNod1PLgUMj2ZNnLPYjpgaufZRHMPabpgzxCeh1uwGjALe14gPbk",
  "key32": "2pQD4pMRCdkK6nr9Bp6dNBPPw8GHwPFTXFfUEzCEci8D6cifg1PU1xbPSiURny7aucSnfBEbTkJf8BqfMMxxazpy",
  "key33": "2JuhTx2BJ9QxmNqAkQY6k3anbVNLWeVKSMFThUhYxHJz8TnDQ2h7iASn8HyWYixrL6PCwjrJHPbdTu65KCfiHhCS",
  "key34": "4RdTvSCHxTTw4cwq22zkDtcWphSZwn7jrnHQ35uTJw68kSP4BLJyFyeUpqPyNFioWxM1rA3X5yAcCrhT4dLJ3Pda",
  "key35": "k6AEQ9c5GZhCArtrN3hd9WDKQEMGwZbyDRC2V8zdphen1Dkmh9Gfz3LdphvjxHRBn8jLyMmGcxVf5ygQBZKWjtE",
  "key36": "5jEsgGngbB89SGfiDAZATeauFUTuaZVi8UaCmizRurpiZqMHkW4jA9dh2W4pjDVTCEB5CYt3hXv7VUT5U8HCfpG4",
  "key37": "5n1hduHNBrFyCfP6DQscSiVRBqga5XUAchTeuiBjgzB8DVW9fxQRYvZGcaDucmMc4Ta999qzhxCBxVjTSZXahQvt",
  "key38": "58BUg1VtwcfkWVat9YesX5ju9vEyT81BFZpJkHg7Wac1EqUm5U3ptt5XsP19XLwkdM4jNjkuw11s1gGKydY3dBmr",
  "key39": "3Eobd1y6NCCVdtojBwKATvx8LteqBHgxmSbC677hzqmNJ7uhs8FcuKrgiWpsWtBVHmh8D2URy21UwiPGHXd1VzWs",
  "key40": "627M8cU6mQTQHj5C74xYcXyMG3FgkbrkvXwQ4a2gRSiYKJtewj46etVXVciXpmLfxm7fzE4PoDKCMGHPsrmZeYfV",
  "key41": "429YQ9y6FC3MN5K7kEjNdP7ptSA9zZWuU5DgqJFEBXiHDsb3cSEQVPvu3FC4VPBzLUdZqk85HwdyJoRSEVFkS8Rq",
  "key42": "4obYY2dHfmqz3ePQBGpoKFcsp5EewXEqQkbqHhiPYfVVzy75ATk7N9Nk6HTPnMB9bzZZMjEqd2sYYx7W36f1F6iG",
  "key43": "3APUBqagfE91wZSjqMai2W5owdSREd3qHCj2jBid6snmXMrk3VSyhv7K9P7irqbDkQ5xdWVbPEaW9n2ZvCjWqiYt",
  "key44": "5BqfZfRDC2pT8wkxXMEmNU8JjbC6tBe6TzxqMeEGEoiTG7yACPDYEQMTMdfjXgzMpHgKRjqAmxsfCVio9Cn95gKs",
  "key45": "dP9ofXg31P9849JvPKBUC8xnHR6m8zyxzPr4PvfKNtHMQGqEvqpwzX2nk3f3gsqEtF87PAxLGNpgUYnGHnCvWxM",
  "key46": "4ULRvaxBAEu7fJzMRASR33uxnz6tm5f6kUsPqnNz2VupJZwTRLemgTbQN7mEgLe9RbzGNreGWaU3z5UgZbrbaTDn",
  "key47": "edXLGK1LX9a7B3MGVffKAwDtWgtqjX9rMzdYzWtTGsJfrsy27hyL8cnEd5U2M6tdqHwEvJYRPU19HMRtmn9NjKX",
  "key48": "3qUvXBukRsmgU5xoWNuM4MjabhrUk1GPiKU8Z2Bfg5urqZ5Z1EXwPApcGtsqnw2TgXj8zVPgzFGLgM1g8pnzndoy",
  "key49": "hUnTdNUfV1YN2u6LscNB5foJQU5PEfMc8u3cbDi5piqu1nCrhnfRumf4FZ5JPAHew4UWMzfuk3i6TTM5AHuEZAp"
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
