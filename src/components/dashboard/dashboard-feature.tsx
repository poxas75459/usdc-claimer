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
    "3oEKxn2qS8CqBw5idhFJTSPr2TCetkP56UpSMSNUxsFujnreYVRuaqmUMQoRp7GqU2sTPTp2xy19n1wx8wUn1g77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29E4D4brWzYy6RLBCBQteghN2W6ifBDtuot2Bpd9aUDtDEFd5A3FDMMDnWV1Uw9iMfmMMD834ZXZ6SyQRzoCxrr1",
  "key1": "5vwr8XV3NZowCXAh8Q7PwFserpMSxfxTVD5nenf3CitqS5czoDthxTTmbmfe9hZLMswkbZ8LwFbee8PSAmKajkpx",
  "key2": "3fmoivWDkEW5LfTBfbKkLpDjKSxFFS4fCcYy4j3bVtB7uhWs9Ngqy3wtvcuJsp4KU1BUCzBJdc5fDgca8f95DEhC",
  "key3": "5fXvzHsB6Qn36hPWKN29bhMZYqK4a9fSRSXTXXKmFteQDNrd5Ug8uMQJQg2uqdqtQmuEmf11TUG3LLF9AN9vAQUD",
  "key4": "2YbxntwBd9dqEgnQ9Yv9x49ShGYuYSSSe9YzgAgCzJcPJAeCciLWn4udR9D5RvLJTxBj14LWGcALAf8AkwGgrC9X",
  "key5": "2xEMzGa37qdXwLJVp9xFvvgrMUTqizdRpaefyNhrGDtAFKRYTUcYFkDgP5KELfgq6XJvy1HVG1jR4o7zoQHExq6Z",
  "key6": "29vc3C8NxCHcrkb1pnoKNDv3KxXP1YPWgyZFqPSLTRi1gfituuKWBLSZywztdwtuxkdjmZqyJqHfFb517eXYcENu",
  "key7": "4nXKY1RajUvFxsdqMswvCWat6khe1QqBLAfGpprRJb9dZoViSaQN3uiDBw1fwrPppqnrjDnvCi2CMkNem1gXf2Vt",
  "key8": "HjCs3ZGM293TDFyB9CiV44TWJ2D67K95gMgXuCHRypPyRrv5X6WZPrmNWXTsg3eLc16YCHVjzLMLNxMcmowWNSU",
  "key9": "5LEmRxCpZZFUozqgzJLbxzjyebPoehKEJHSLcvD4etaQdN1CMizGKzrE7DBsDwrGf51PxjsjFESw1Tezuq4fa5gQ",
  "key10": "5LVpCD7BVChaqjZJjbB4TMU6sgMaJ32EGJvPuVEUtQ8HBPDDiQQ2QBPYyLG9erJoiKTLnxVxTC4pwoffaS3EMWLR",
  "key11": "66FmrvZqGAW6TgtCfDg9LfPUbCNwCoCxH4GdGQvttqCrMNrbPa89sZMzUpSsDqs5qwd2Q28wfRi7yTsXJ2aSroJE",
  "key12": "5G4wqysCu9nirj3gdUsG1Pr62arcXGkMDPnt8Bygu4tYV8G1LzNLgMbqfm5z36g4tM2AjeL6pWQ6wZTawYKfX15J",
  "key13": "647esSbAqDdJMPmdkU4jq45TjpiUYJZnK7mFDHJx8AoE9PDroT1g6kRSDksAfvhbbB9VezedkAy9RtQfpXAiS1ac",
  "key14": "5u1dzY6t9NunxUNqgWb5TM7uzrrnHYEcWni6hiQ2HHgtR55nUGGVEdVPtXFzVqVMvsmr5RAKMUiF8LJeeEC5TxYi",
  "key15": "a7d9Y8NXE7E1ySmZdXQjtkX83W4PhwYQ9TwWJBXwiWbiHwJ35kArwFvJCW1wV3riDxc3XkfqGusaYKUXrB7aY2r",
  "key16": "4FNY7DmtRgJnrBDJso2rtP6Us5xNkqYkPP5Qko8Cg5jXwDfkKzBEoZmK4jCvFRQYZAhgaagyYT1CF9y6htabh9fr",
  "key17": "33y1eSQeb2stTHuSUEzFSbzbn8cWFtMVDWNUetHsKvMorswYTGCAXLJXgBUhmKUpWgjDoY5AUELGsbWohWbgqgsp",
  "key18": "4SXPS4XB1uXz91X7kEqBA5eQF1Tc88VvSsnS55DCMd7ZqKFz59DsAHELUFDmLr2ZtgVatHgDcaSGG4FQxiqoNhJB",
  "key19": "5gUhxhj2RdoMf6dUY6hmsNnusUT9TjCPT2xEkCnRaHZSreCsFLDCMGsRCCSDCtdLZwB9ZxtM3hhrFCdXtKxWMaZz",
  "key20": "2C2QtETQwNQzjWzjAqBcouzHznzoRxqcQdz2K7mb4zVuzh6mWM9ntJvHuaP77h7FSEnkQ7QFFwcthxbbgGmSiqCi",
  "key21": "4uQZtrQ3fZGSfVYGwLLMtebiqy8xcAtr5nEuwKu3E1nEuyWE2rNCRNEdWXGSSsosuqNUttdJFFNTMjVLw8EHU2N9",
  "key22": "3FQrebQ8ufRHnR2qgeh84g5bxTcadDVhnm2kBb17UZWjiDyb49rzJRcQk2tNsE1L9hfce8M4gMAaU8Dx849JigEv",
  "key23": "4PaHaDGh6ijjaSUYUS5yqpt75fbm7zHGwwNNSuxeMCEuxoPtuSeWAU47wKszq1coLp3N42BQkP3SvvF96e2JrziQ",
  "key24": "3dotdUQccLHtJwSdAWQDpspTXKvRNiGetcdQwEstAnKx1aYDwdUZi6kKK2mQroa3RS8HHc2wTLTATxwthnaEPiA",
  "key25": "4vmQjzQqV49YGErXsprD8vkC7ETwT8YFP2HoerThgvBsaWsqJ8s6twAser98pKPU7Yg7c3MKeFmTKLsZvSuzFMxu",
  "key26": "5agsS2RXyRkjDeWLsigeCH1Lh4ugQyKDF2aiUTg2z79Q5xzugDJwd6oUhVEkZR4f7znfr1JxQcKvfZY9FrMCwT44",
  "key27": "n2iPLs321yztFSWrd4ZnbSF1PkZg8Mir8dGPfW4ktpwQQH8SiZW6KdRU8ZhpYSoSfqyGoJJCYt7Y68p8j8cnkR4",
  "key28": "3NybzU3Ttfs5DL16yhjMayAYtYpNCmb2zdU4sPnLFUvRPrxn6NtLQFYXAqtQYmwN9UioSEdYhRnUU36qnYPNkxbf",
  "key29": "62LAizF6GZti9isD54vsW7own8nEcX1YzMpSVrFyo6d2WjPvFbuvoHX7AWy9oWnpP1vE8Mj3cHhyTCWTfApS2Pi8",
  "key30": "5jGwpJqHwxwH2P4YZJna7h1MkWbEu15zFZNqP2bNxyWbPrFbVruvfdpR4kb72Y19xuokthNCZjtjLXbk8TdxmqUj",
  "key31": "3v6rnLePJ98ktdgXH5GQXWEqxNQaKP56RuhBFb9eFYbrqoQFxR9YHjdJsDcwQPxiWsUFegFQczBme9qvAUg2xMPP",
  "key32": "CcWdhqvs9zox8Fsd9AzZDsRw7pRSMDWeWFTtHsYmMMsBF8xT6uiUcE9SYuG5UjnU2AAc1aSYTYiehjJEhfg8cBn",
  "key33": "QvBQfrBiR2P1D1tNNnePcaTk7mrt8RHceHGarj3vwNria9cQ1XBXQ7oBF32itHXXZc2JALQ7mXG8LTnm8m9W31d",
  "key34": "8d9pocSpp4wz7B2M9oLKAu28fpaykThVmVXFLDK7Vk3vmxyPsNyCoQHPTN3qDFcFdteMD1W3T38jnzDX3ZGTp6W",
  "key35": "37wd2SXQ97iGQVL3Yj8yBpfFSbyFBEe77jFLc9p4iZH9tGW5eJUURXzmpV9ATKiA2sktjU8QVkWmY19WAyssDeXD",
  "key36": "4j71XjJRNd3oHBzzuMtJMPQTSR6nWxGj7ZmoaUNKAtCafzgjXMuntiTV5DpuyhdYndN9HkMygzKBjbHhdGUiahiq",
  "key37": "38gWfwJdsNZYcZCKniatdvQfv2NqgLi79XuQjHyFp1Lt8zTk3kZFcefWJceG9wQtiDqxGFH7Mc2YVCVqdFHXLSNT",
  "key38": "4Qh1zf1cGpsFamq5z6HfD8sZYU2JSVHPFQURh5s1cVwHMuYieSr55bdRgFJSEXFzhyYcJ8kwKWi73X8oYfELuYAw",
  "key39": "3YJENbLwWBSxRWFmvhXLgpymfbgicmxQ4zxeQUh36NCpkrfMkLZDjNpFnPo7UZ8S9Uw4HL9zj88PtJVdxnAYZmV8",
  "key40": "4nJSgGfVTwWxwRKbasWAqAtWEFcoK6YMfbveAK6ptBjCeGUMYUC8u4ABbsP1fp397ZXktuQJZRswJdmoYrL4G8Kt",
  "key41": "58GzXL6c8FkSqQUJ7WAuxu1XarTSgcveqcAEXnjHPjp95VQCRH2DM72Yuqd3S3cbVVTSSKGA9LKPGehkrETDtqqe",
  "key42": "32xAYmxW2EN1Rxb2dhvbFDdKFDSvFgEBG1zVBeS1ag56pnaam9PK6pRJgYA8dGRhz3B7DvxcR5K7zTBCLa3HXUV8",
  "key43": "3De6F2JCDDWN1o3srFggALucj76aLvT3rKioQ8ZGYrLLHzZW8gzAuKyfjDypoFb26rwXxb7C1C59ZYi2xZPfx3xt"
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
