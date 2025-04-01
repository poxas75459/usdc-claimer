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
    "2VvKDeBjTM24jxWabFKJ7RqZvB5beBFGdph76c4U45c6CBPhoQDxWYqoNvWuZRDH1x5Hfim5ccQffcGNZyRvJgHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o7vtfJszUzHAj4tsTfB3DrELotG6HmH5zqh8nwwWvyy6EmX5GqF3x7pN1vWv9xuXXXFmCN6XFL9rZhs5nFG2C1k",
  "key1": "3NxwiUkUXUwcZ2MjeRwU8dYJ7g4uDG7iVb7f6SL8ZNHBBynShRKzPMtJ94Gt8E9mBzzqzKDCc2eJwig1GaBXxZ3i",
  "key2": "57Bqgoex2uyvMrqVZP1GxBGLKQxDX86ev4XxrjBirDYnVuLvKiV1tNYo3sxYg7WPHUYNpxoG1ASwwR8GaDkTVEWt",
  "key3": "3qScPFaCsgQtUX39xWiFaRAuiTGcFNRtjBXLyBYEJBEKuVpHVYJ3LstxuFivLfhGmGSbqsB6ujegFPhd2fGzXpyv",
  "key4": "4pDRMQrqbiDyKbNPyCB78HJeM8qnymS2S93GjkYCLzZjYXzXze4sNE7y3ffn1wGtZbTVET57b87TBAuoqPc4nCuh",
  "key5": "YPTstX8r1wpf1LzY6jaCNAiX2Xd1k67Dd9HzmPY2q8umEk7jM7e9EbJDTvsZkRqS3LTqFLReTjsPsycvGMmu4Dv",
  "key6": "2JcEY74aWv95cPAR6TJ4PKaSS66KdkAiLM98g6HHRx1dpyMtUdnuTQtnEF1EaJexfSWSqxdYLCXfFdb9rvRpQJtd",
  "key7": "4eLCAKXs1qaZXHx68sZktBG6xHK8WjjU8KhqQHLoLZ4urnez6x3YM9wQcw33AH9optFsAYKd2ZqC9TLo2R76E6ej",
  "key8": "4ZaxLweZcR65NDkjiPwu2WD7WkKPyBGUFcCkCBdJg57uSSP6uhm351EzrFa3in5jEKrbJRRwXYRwRv7EGJH4xhHf",
  "key9": "2m3gPmZrwkvn2NL4MaMR4bHiYrdDs77N27xN66mTNZBGBNd8Uu6dXn3XZ8Cq7bGDwXsYLqRpJoz8Rs51Gw7UXixg",
  "key10": "3tFkDGPPjpAAUEtW6p6ejzgGVprPaKjUsHVK3iJxV9RK4Ytv9r5UcesCRnDBiFjDoTokGCpyvRJ8o6bwtxaLPHxS",
  "key11": "4mc1K7Lnnd2HEUdhkndHEYxSXa5ou1QhMEh4CXoHrjyHfp37ws2j4SLQkDAoa3FkSQnwov4JogphnwUJ8dhgSBr5",
  "key12": "5b9vx96nARWRzQLqWjrAKY5vtTXkWu5pGH4DWospCuqVibEy3k8VKhNFUpML3GGT59ZRkzK1cJbZPvs4LAKjh43L",
  "key13": "fpwogNCYDRXVRcoq9X2cDoogSvDpdvFdkExLyoN9iVreE9eumuAbdmHMt1qFwsDd2nsyW46P6Xh9ryPmsnYQ9T3",
  "key14": "5tHQzcZ7JrQs2mxRr4EQViBC1KvVrvpazHGhytp9Rkq1VAk65qeAMcvUaJsbMAvE64f9NaRqTBVB5BdzshPF6kq8",
  "key15": "3cYMUPWZRbFDmVZdBmqwXK7uANnMsPoCqQvu5H3FN8ogLJ4mXtU3XJAQycH1wNbHDo99ShQQqFiyBxG12oeBBtWs",
  "key16": "5uHX2nrGGeFwKSU32aPT8Lx68ZEKpdiTheSKT6qJyBLMtQjQdAmWq1atj1DZCf4YXz8Vnu2Z3g7RSRcmPG9gze8c",
  "key17": "2RLueiDYCH6BMwAYkj22kXbnUeaQraj1gGp4yZTzGDgeUcqt1DJGgCtTLhHE9hx6kYcd6AmUxKdn7MWdg88qEd2H",
  "key18": "36WGk7RvGzVXCCr7NSkRoBGowHjEvDUReFSvsE5WM1T3zfnxkJdq6BDwFwyPX37t4NbiYPFMeqdw7zTpATRmyNQG",
  "key19": "3usXXWVfvJ6jtFdJMSYH38s5WHvLtVhDXsJC5TYSBsjnHgr4qjQcRerjanNpzg6pPCqNNfC912F4bRfcrLpi66pw",
  "key20": "34WWsp4Y7fCy5wbtpGZPs63HPXW6uXhg17AYyrJSdFAQ8sSuCZquEvX2piKMo1pWnyi7C8HZrKHXB6hdnQmLa2xq",
  "key21": "5VUsoaptxa3sXAweys1sVVjhdsvwqCreGq3TJMAg8t9BpptqPghYPi3efxPuvAnXCK1PhbCv9Z1xSMfjjvwuHk2L",
  "key22": "4sVP2PSYtd2LTx54r6scEPECAH1BL3npiYurM8wdxueesDQCEeuoEWTAmBQUGqixDkP7y5mxbjGPNLR2QMduyGAk",
  "key23": "62K1DWN9MPVVZiaoCtUfjhcJapwGu7UpaLtDLJk6iQt6h5n9q8ZkQytgsuRcTzzCebyyL4J4PSgAjKK4SzTo89NQ",
  "key24": "3XzdHvbr9KoM6uCJzyHUhnQzsf1NVWP4AzZa6DF3s6tseJToHS2nzSozYY7VsRP12pWMiAAGnkXfPU3zFgsZe4w2",
  "key25": "wRiDMcRzard64kapej1qGB3gYUzAYpQ71nzWRbMrVWeiQ1ZnoYYkMSfdfZTvRctKo55udg1ivfBEv8jbhbRsnN2",
  "key26": "2eZDrZ2DvCnjHJ9q9pJqfzwyPgoeXu6Q1uDJ4LeVGDcMURNsB8xYXj6dpkvNnC2pRQvyX6JdekM8rm1YPJzYhsKz",
  "key27": "sMgTvsgRuesJ4xNhiDnf5RGqaiGTzx2buNje71mTTmNnfy72LkC1n8K1r4WQu8qv2Wvqvx2Dyhz2Rn4sBKF1ghd",
  "key28": "3K5QqsS5gq4vtB89TVL358QurZCdrRmgzF6bmjTk31RwDQauYchywHtE3jLYEfqjQyXyigtbj3pw6hKbnhscXeb",
  "key29": "26BFMNddF5BLkGTRrg9R7JPF9AXbDNAU4AGL2xFYJETVvSjGMJPNqZjHx88XqKwzHUym5QkeEqsP83kvEdWyCZFy",
  "key30": "31xcb3FjLoymgr9z4B7gFP4Bnav5Q6TrSjMR9gewYZBz3bDjUZcnLYtrwwYBnNcNuUPjZiaKuwsuAkYzM5jkGe8W",
  "key31": "2uJ2wzx8kya9QPcU6N2HyQKPL9A8ZXvLrZwLKCAyXYR1ExH2d6xZP5jWXoTphRyTLMa9BVkWsgBqxjVN4cQaxqQv",
  "key32": "3HT4ZjGtfBDLQwBaKJDajCRBwo6rNpEimsvnkThPC6EFvkQPiTtGwoagE9gGK1o8sXmfUVH3VrtWeNUmY3Z2jEUY",
  "key33": "55pWVesJ9mwoMrANsLYsyKPb8V2vMYWWtmgfz8uotihtfYgySGHtuosJ1r2UoLoewEqScHHogjL5T96FpJr9bWhp",
  "key34": "4Z7mpPJ1349s8RUSVrVwhC14RA4nNp9UKB7NLUaCbmi4x9Z8uSz3y2MytTmbJAzKsgDmfyPXSy6FsgEtKr3XrDaJ"
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
