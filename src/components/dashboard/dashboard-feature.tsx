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
    "2ApetifgkcU6xHTvEvsSBUz68x8P4QbiJNycaqnM2Pyabayy93WZKA1CQ1TRHvx8YpNbed8TKAoxj4bPuSWZRfWZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXeE7tAKazCg8PGmix6LH76dUMQ2hTK7nbMzGtiv7S5LKPakQ7t8dx3GmKnXe7a2NTDD5c4TaMqh8eHcCLCuuZ7",
  "key1": "q5BFXF98FFChQDddyjgcJ2nSShCnRdLHEKwSKWKwdgT6H2o6YpcTnNhHkav34YzQLPGjri4LgUHQ7NtSdKPFnmT",
  "key2": "cgA6xLhzptMwoffQcqMNchcbPahKqmukB2excZKMhpa9StfKHthycrM6NoSkhZksNZkxeXCmRPSQovUiiBrf2e7",
  "key3": "2q2WUqWc1yzhLVLzSFmdVdXT9FgTCZa3vdgNsjpQ8YTmGjuAm4s9SemF8ktZK7BZ5bCu7P8PDhN6zzscF3JqUKzw",
  "key4": "41phhvRzTLvYiAZ4P8nV6m7rnWw1iKVkoZkp5jB8R6Zk6Jeftg2hsU1jLSfmfvUCupVkcJ1qoZFkmxq2iU4uxxMk",
  "key5": "42cSnb9QGckxK3HfnMASCULmAoHbP5aRrRWrPPZWPCXsiXx3qzbcvcHRuYvBTvUwtH1mDM1LtVpY16xzyJK2otyq",
  "key6": "4AsbZxyBunJPD8tLX1zayoDmNvDbzEzfMChoJgD2MebQLLEgM2PdJZ1DSdKPjcDC8XJqrGDwV3NJav9jZtdDPcpV",
  "key7": "5W4REqqcTHfp1NVC9ks3THjo16Fa2igcsosPkdfaN2RJYVgm1GxrRg3oysV2s6Ui5z7xRGznpU3Hp5ZUaxBzwPw",
  "key8": "2aQkMUM71sGBvtoBmGZ5GMAAZc9xaCk2wTRpmwyqWRyabC2j16Fr9S3Ei8RV7kBGk4R9mdxzjJr5aDzYjtUxGaBH",
  "key9": "4YCKxBwsMXUTHrVprjt1vy5Ku21F3hQe1VkSvXxz7yNnxdTvt5KbubD2nradfnEMDNAGH1uys5Wo2SdA3t5JBipn",
  "key10": "bNp5YEYNW56chwEgKmbA8sh7V6HwSVHDbvR8CriGtGcJeeTEStM1FhpiTdoB15Yyj2c3gkksJ4BQyHGExYn1HLh",
  "key11": "3HX8Lbiuo3cfyXCvABUQvAnHZky7SATCJ6fJU9ZHr6saPTPmNHvCyRA2r6wkEeyF4F33zbQs4Gr4Y9HcJ6yx56uj",
  "key12": "ic6cNGsFCPZVBnDpWghu2Hvx5Tv4e3iK34U32R9RptXFVepqdLtZfmo6ZoYFCB43gmXvCsPoZhFJwNaA5pnVbiP",
  "key13": "2kgSwCuUAV2caeqoGuswcj7W4NN2GcgZx9qLf966w3oQbzUwFUKisgy1bKaBmXbmyhpvYdKCKH6z7c9DUUiGGngJ",
  "key14": "2DdHfxFK9kTv28QEYY5oY4TmZdZueqE4fstYxGL4hsq58Mu8vVvzR6ctp2ZZ5u39qfMs926WkaBZHHJRh5K6WSwr",
  "key15": "xZGPVdiRqPP1i3dQuxnzkP2ttuUa3Wj3irdiPHnF1xznjAiFczxXBMqRFQuHGRaTgoRvqBu4CafNDZiAeA6P1vX",
  "key16": "3k6hLUrNMKM5f2dCDye2RBuDtUAJoFVYd1aNXNNHG9JQgbMVTPQaEb2ZFMyThDBM9Zg4LF65rucDd7sW1y5wFKQP",
  "key17": "2Tr7w2S1eBMVkBAbQfVFGchALPweJSuC8jzMboxR2nv7D96ttCaRwk146CwU58bT4DzkULsWSGVHB3qy3F2Qi99",
  "key18": "5oJBcVSEC6MbTHfjtw1d4gGixz7N9Wc9DBMa24rrG5QCiCoP5v6jCnL6J1JJj337qdpgooyQ9g1nkTit7DnBTAvD",
  "key19": "2cYLnCcaFvH6rzC9QVXRhvxb443nvXpPNxrSuXoF4JYWAS6bTNCMBexpUx5FUTUAVqjHrqozWHCF927oqJzeCS8s",
  "key20": "eccwNCqnG18CMfWeWaWEXM1L5UAApsiYnq8qyee4b2LXiujQZG9DsDdazacsrktkcBxvsAFxRGQvYvvGqVMVyht",
  "key21": "5TiYxENXzRKYH5zB6uJXLa2ubmD6P8A34YbnUUemvAWZcDejrNVBf421gsGS5sRWMjeoXLMjdAvScb2tn9Z59Yqm",
  "key22": "QiQWwkAk5yXTK1ejVrNVZMVCThQBppuX8T3aR8S2UuRtFcq623iBtJPhZkEFFiH6F3mTdvHHUpTxjcLNK6t1UXh",
  "key23": "5wyCJsrMJ97bsJrrh436DKCXUTqfxgK8ndYimtpKFkqSThPMQ718MYc9V1itJZwaw665cR3HGbXA3yfaeQMdfHcR",
  "key24": "49dZpki1M5WF4P7PkA3X9hJDiKaXkxUJy6fGaKEbYa6driz9DU9fB2PK3gFoHn3DJHazU2m9U5xoq777qizAK4xc",
  "key25": "3EjSeAacGaW358FEvSGAS9PZgCXDAtubgbE33msq4fqkEtCPUUcA3LFtuaB54W5aX62tQX5a3tqGGQcfCp5NJcbs",
  "key26": "PnfVL47tRLkwjHFBMVemB3ifwK4LsxT9cpbXXMsQ72zj5EHTHzYaKJS9VR23Dq9y2ApfReVGbjnTGQ6x1tCGuTk",
  "key27": "4aJLU9RzFvG3TCiJWFsXeeg5CGCraF5fj1FPfEaY5D34iG56ZsmYkYhTg1NF5WCPMvHW2oC5Qx6Ev8iPKNKpWbct",
  "key28": "3uXjYH4itQW77bZXQZ9SP86cALoe3zWJp2ncDVu1LP1GmkRPWJgHmpsit2KHQuwtC6F4b3kubMHNtHh4UVbC7GPZ",
  "key29": "2ftCMCMqqRSjhSXbncGY2nSGRkGoo3nBmpGTV28L5Cazmjk4VAwfWunTtCj7x2kK72jut6ZMhm6fxnNUctmAirpq",
  "key30": "38a6veEWqMB2HphEQb1dc1JXxzpJsZ9qwX8n4u76NwiG3vjGrK83669Z57XiF36jHzRyLbA7TU9SfLrQS7mFakaW",
  "key31": "3ME8fXhx7tX2brgWXNhVTBTSFKeXsSkQLciaFjoLYLY7zBk74LsBLpWZWWC2UyMPkNVmXnctRv1g4CWjMH8zGmnZ",
  "key32": "2ATnrepVCxJKpNxBvktndQxGW7CaFfRH9jAN4so5V4pCin6rna6HQgAPBWHH4HzATG1bQZrdXiYdFJGgpCcZ8Sr2",
  "key33": "34QTrjjq2SwGRsRmged5k5yhBbCQ1FSuR92MfFLnfdfiFoYCgfe2N9tPK81RtwFapx1BRK9zNqTmy9VDQq6pD66t",
  "key34": "4sgPYnGRpZpLciEG8jxV6BtJdTiPHELfp68ssMtpvSGVjphRwBiEv8WdRymqR7LJL1kuwtawV1RgHjhK7dNvt1sj",
  "key35": "WhEG5eAeVsgX79UXRhF3dH2KiCjHuqkyxzmWhXCDnUJ4iWapNRqYkErLPQ6r27mP9RjDZVf75Co1bVj1g6fTbuN",
  "key36": "EJXDsGnypkC3X6gLxd2EbNNnD1F4z26xE987hyFTCWTNdhKns18eWGbG2NjVwaVmhpzgNeR9aHaQykB7EDE4v5k",
  "key37": "dPKd4MCeta2qT58iR1jgdYjqckQGF5KKMGxTmuT6ADZeJnANinH2cmqaAMjyGihSpjbvq28CLUVGKhKbiJapzXn",
  "key38": "7kXYgdUB32eMXUBmpJgUoHfV86ehiynrZgyGd53E9VcbpdrAVJ9eAkppLx9Ecd9mfE6KnsG2GFcdu2cGJX2AQoe",
  "key39": "2yGXvTdsPToyfnzBGUnMUYuWmYicEQBBWSHxXK4bgRwyS42X8hWccwtxXCck57EG9wQywfvZ4psoNFj1h2N7xR2f"
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
