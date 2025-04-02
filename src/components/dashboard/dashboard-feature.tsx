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
    "RZAqiG3d6snPSWzMKsYxcQsJyi2QLbePsYNAcqvPPrgcHV7zytukxtXrBD7Umdwg2ZbBU6BxUjYaKunS56tWQf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k3pSWuExJk2sXvRj65cu4VLp2qHKGToKFQRbRNTUuYLai422zxYu7PgSoWzxS7fAM8C23ZuBg2KPtzTqUsvhp3V",
  "key1": "4XApsbo56KDhZvJKKvanud63RWwgEES9tkKKsiMSTvWYKcL6MSnRXGvhA5jEwbsyqNHVjXrcbRmV3DAWJYU7cQgF",
  "key2": "NZinT43CLhpAdDkQ6fqxYXmxNg8q2k219VAHe6h6MKu3XmhsKx9x23apvuFRDsJ9EGgxNQyxWawr7GzSdKzJTHd",
  "key3": "3pFkCB9Tbt8HWx98yYdBtJy1UjqtFUVXT7Uc4DJu26WJk2qbSzWdjXPfvJAE7MBJAC2Umwa4aSk25YDhQegghGSp",
  "key4": "4HDbc36PHdYN8EKnygN1WChNrp8cPXGqAVHfYnW6kc8NCs94e9V2vBkqGGCPhBCmaVbC9KoMf3zem39XvFFvFJyG",
  "key5": "2gCPGtG1PTjxGkCbUDGetLZym7bewiFn3Mv6mbsoFmvB9tDYXbSeRv6VccDSzpQEMtqFq7zzh27kGnBy5oaHyx5m",
  "key6": "4bZ484JVF9db9UxsfBYAf79QtE6wwTWnpBj6CzwrpxwJ2SwweVdnApgEzq7Ms3fopvZrb8ztwRZ8DAZ6wh4iaYxJ",
  "key7": "2PSQ8qfoe7VXNjXMt3dsbx8SwGbrVJzQa9jvsRS5J7ZrXE5fzduXEENnL9MTPbAp5HFzz6xkNLzSRNhDynu17xaY",
  "key8": "37vpGPz4z5U51qQjXzMosiAps9kJkowugJnBFtqjiu7KxzB6LoXbxVb5L6B52ocwWk84Cp27zj6VhtMSCLXnzm44",
  "key9": "5t6CwWKrFf1xW6FXvXCvt9xL6wDGHKscbiFaiiSxKMq6YE5YKNUY1zca4TMGc7kuWTv6NHioodt28JSpbcweL33d",
  "key10": "4q6zPhhAs4URt875LMWaZYUTkGxpXyVndajK2vredAepYteoDEFwwmqM41ao6iKsYEjDGBjDf6pwEj73HgRZZ5tk",
  "key11": "2PLoZ5KxpavaYGWSddX9KXMUaAM8SJuAwbZRSgnjcKPzaxavxmaPx1uwgu5Kwq1iqqPgV1kqKuKtVZb3oe1TEoPK",
  "key12": "Rc1cz97euLcWmASzgX33cmg5eY9M2aQUCsS6HciBBNntZMefM2nfoSK4yP4gB5V3xsnbxso7hveeWHuxpem1kvm",
  "key13": "42xwz3XmeCwRTAhCmAwtcnP53uWp5jowh2YyFsPYBjorCrpVC5cdVqcJLQQuyox7mm3ceExMoCyoaS66RqPwTugV",
  "key14": "4xG155RHfCFpnMock2KNGV7cx5KmbYcH4kZRTtJgzBmRteghkSYvnaMpKNo5acxbmt9XmerGviMDUBTTFAaJeSqF",
  "key15": "4kV49sYw2PxF8kpYSX12ahR9UDHmoHtRTA6vPmftP8KEHhAqC5AwRr1ESA6ETGCfRjcGx6tMUfqpYD9AsZJGTQAs",
  "key16": "3hQ52s5JvnEPZjTuiVyLX8cbhxpWktQzv61qpFkd5K6ZvZq1w8s7M9AjrwYjp7V78omML4Qm7TU1L33XFHigX6gi",
  "key17": "4FK2U53Cd41p9q9aMQR1cR4pnh1yq98ViMKxh1cb5ZxiMKGtpMpuap8mAwPzQWmAKxVw57GwzHwbZ6Xqyp64DDt3",
  "key18": "2i8jwDTNq6k5i17rzSEirdAYsSDB3T8tNx57VHDKpDmmk98od27SXXBK2qckmZz7jJmc8hjQk9ddHxZztk8jP1iC",
  "key19": "5mHs7htqNB2LeyWmumrUP4hn1bsf4TvjPqiLaCKXMBH78utPhpunjZAGrockjP6ZvTcR5tLzmLuVyKdFgvvMqqH2",
  "key20": "3vUEkCgpdBF2FQwPWCKJKCzj8JWpt3WZJY5cNxVJTSvPMBYMdGSLkhaZ2r1afcCnttxhnoLV5refK4HtbSE7LKuo",
  "key21": "3MNunNZChtUm3GtBocFcCYssLG5CWwi37FCHSeVgBTk4y1rgWGbvNXqtspmyU5na2KNQ33Di6LuX7y1UQsDKWHzu",
  "key22": "cwyh1LBarcGW1izReoj4KEejoWS5Bhhqq9v3pD5irwfGFh1V7788ZEQYz4aAoUojxQ4sS8STU636pNKeC7upk5Q",
  "key23": "3zGtL18QZRkvfmYHDxuKcJN52EtQpGcBUqNRBhfoSAssLuzRneDwXwGWVTNbWTQqvL5aEX1Kb7X4DyyZHogh3YY4",
  "key24": "5AgeWxBqPz2NBKHoZsQrJ6WEDseieqvrejytgE6UUN7bXcswRdnstS894wU1B1LmfcuUZQotChU422PZuGw6FSFC",
  "key25": "4adQjJYEKg4MpQqMbiM3kzYPFoyc86omdxkKpMo7i5ERrDxeyBNHbfLYD6f7Rc2GvFNPx83rcRMXMdQVmJMP2rvd",
  "key26": "33TGCmsByVoFYERpLJf4dNNC2FfWArK8fCXRK4evL2aNNsRYHsMbchaL5zwTZrJaTGnWnrbgJYWZUdffULmqyEqj",
  "key27": "3z38zKSqmRssoDizT4MKDN1bAQpPspMUA6sb6HSHsTDoMG8Zvqisrtma2AXwVmesxyLaHUVXhpkKXnmPyn1v5Yqw",
  "key28": "4HGPok7FNhfLJi6uoU2JbL1bG4Cxz2yEYSqZA5h26HByvzfCeMUHrhea7S6Sb5Vitv8qy555FKsTcbSKVSJ3uQbX",
  "key29": "29JfNEeTyAD1qek4PvvxpVE7ro7xYdsjSKdZkwKR6ChDryDtXr19tjAQBDron6A6ds4HLGt96645cR1GyQ61Rvjw",
  "key30": "2MhgZcKZ2J2TZ59khNGALJSV6Vp8XnmXhQbSNQa9SNF41MNeCtEmKYF8PTaLV5mUz526Jqy4Gi73egMPRo97D8uZ",
  "key31": "2b8h6ZiLasBDsuoCUbM89DZwQ35pmpmPTnmXuFdQm8qdKfdpnXncmrbLANGe9XVYkbqxEq78PaS9ZUcoBtNXqdWV",
  "key32": "4N8eaZFikKVG4w4TP9yEEP6jvStAxUT2DJpB8DnLrQLBWwpRw2zHtwLqf3oQcxH4E2MaPYuZQU98XNpydThepwZm",
  "key33": "3dhbYwXJrSoE1WtJrfMC4vEUwRBmeDYfS1K3cn2uLkdS6z8gA16J6sousvHoZN1C3Qu3nmkcP4K4pnCtem73Fnrn",
  "key34": "3JkUn2ohYMK1esLtW65AWxnx8USM13L9HbQFMLacj5FGbrRapYVJ6mHcJGd9CxeiTkw5bv3E8fzDxxLNkeBRGaYZ",
  "key35": "4BpK2B519vv3jVCbUBFCJehcT3ig21yPw4qRYZKqMycFmVmoRput8r5i8qEbQvQg8V8HozU6nQjKTZqvYgsubtoY",
  "key36": "3wjPDwp3DkGorUsbXgZyEVc9j2yeoVvWJCb8niPtHsWCdemw7uPDWQ1VsYhLxkyzEcJvy6FJh1MzER8sxzLT8YEJ",
  "key37": "2fajqSt4jK1BBa5HZ17VHqRYDhDsDeYHrHtnaayLxzUaUwr3jjBrWo4uwwyDR6Kr9kCWLHL4q3HFJqXYYTeNTUiD",
  "key38": "4pN6QwmE8nS4nbhsDwiatPpNpZ8LXvSZMVW1XdSSMhRdTJcmE4rB8javmVNUcBoFuqQNPmFJmVEZ9agewmikCd7W",
  "key39": "2AbFooEmG11J45Z1MGVk4YQq4QMTmSaYFasmvkoo7LxUmyFS3kCt4amHGDRcK2oU2jVb83D7bN8iT6bEFF28Kj5c",
  "key40": "3UK73Ht1UnKrmret4PKoRrFFdA6VNQjfCc4BqxtX6jF5XJWyo3nghxbK2asSYHHsQWGhKcfn7SMtVQSM6QHNNJBj",
  "key41": "EsgBbZMsMe84cJLfhAd769u6YmfLgUDrnp2XayBPJEaaUpV8bb1rP9YRFXBQ27VWEWFwXM5Topd72AMWgSbDdpc",
  "key42": "59AyEGr15dpoyFYYSA5X2vJ51pb6EyJeSDEugF5to5zZzXXymxxEB33wc6KXnh5cSLwjY2s1TgAKB7a91Li3Gb6B",
  "key43": "3j4MWv62Xsmu7JSyLpkqHqdLtmuTjpawXWd2aPEUsSJMZVTozt1oT1qJPvhgmkMrqFoq4rQ5z7yywajevdjjgiSf",
  "key44": "5hPdoDyiZV2iRwA2wCNXcnbqV9sSBnhht2tji62EokvqbmDoGvYnRGcAsKpvxVKK5EmiiRzap8XndvucaeixCes9",
  "key45": "2tKBKrV181G3X2HAKoijkr3isjz5w4kUGegUiYG5j6oTneWU1YWtuPAzT7d7xMkRFBPpNisSgENm6Arxrt1yfhPT",
  "key46": "5U2xusoGxyF9xJ44vcLqwbpExWcJ7tA6C4z6xJY89m9MYvQoGhsX9pKvcRCUxFLarnKaUgcRoZRaoBF2euWtbdWo"
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
