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
    "3GrmXPw4uCvDQVoCCFXGPTR8gzmtimUZJf8AQCLvDzzd64yewWWzJP5iM1yV3QRqH6H6MZwbJx7Sq9k1z88Ecam3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xgCxpdCa1nHnPJmvjTMeDooSWQ9QaTjn9B1z3ApC9ciTb47FiryN4JF9HHo8sFCRCZ3N7gJBg1TqD6spKHHCsM3",
  "key1": "543hrcP7eENZWbUtTBzt8kBGG1o8CecdTioqWa1xx3zuquQArsdChHG6s9GjSkBurc2EowhpPXoMwWoeTvdnE5LD",
  "key2": "eiewfjUj5mTPw3akmgqYUo55kJKsfxBYK5eKJQhPSbvRyPfT7Gd3RJBsadu8EkkyXYsHpdKfVEJhrUuZM5SdF2x",
  "key3": "24o8oFQeHagbU69ZokbtheFAUU4r6kmPh54eBN8onwCpsdvddEqMBp6NvpcTvdbHFpF75YczK7hV2nEz3NN2GQxC",
  "key4": "3DDPAU6EZvD1sNKnAqBrYquMnktcmtPnLqy4pseciqBXgVkmJgDLGQdA7LgNeinf5pcT8xbUMnjDuXw6yywg5Qn4",
  "key5": "5aXrhrx2XngyaPo8YS739dTR4APZ48tue6ZKVwURV4FmG7PFCbhVjTbPrAUj7MGm7dWxSofZBszNTbNcYSVHWT7v",
  "key6": "3mvVJp1hTgLKAcdnLz5aTdUGA3cdp1iZ4dWoGAHitPNnucDz3LKW4CaXC9iHzHjck38jhT75PA5iFyWqsX1Qo2Pf",
  "key7": "664RQYNqs9vFqnv8ybhGRQibLpuw2sTVAiAt9CgbHxu18V13Yzw8SrRPchjX7YKD1WkNBXckNQy4jVRhDJse7dgd",
  "key8": "sd7riQJce2TKxR7JU5JSGTyxPHCDCX7rjEor8xsP34RVd9Bd9DjKRX8mdEFyM2Eb2Qyej4prc69ody4fMRN54pY",
  "key9": "3zbKLJUZfkczoM4oQCRjrHTx495rzTuqKLmw71jgy6Dys7WZjExAYV94U9BJ8FQwgnkkhudBT46qc8Bg13FcjWFA",
  "key10": "4fcLCwTnnN2WycFiZPL3zp2QYPTDZfDqdBwYY4tkhspssfzs2uuXKeSUkVt1rXaTuovAtc9rsWygJv3rjmi3vtvL",
  "key11": "ZuBpydwVQPSxktTvZhuMsyMCAKHvxdFQVQUGaGRt7xAeQMDWFY7nAqes1GtNs1WrgWRvvGGCRHpgiMDJW4QeEn3",
  "key12": "3RsXXraP7aBhfKAx87C9rzgge2w3G7VB45Z5ErR2XsZchr2gVUZNi4fn4aAszVsNfYR9o5R1VZjwx2G4QsW4Tfmn",
  "key13": "2SrKNDnu6YmEBkQk45QQaWBvzuH3w3KnxkMbmeMshk1dq3DfazPWiWxLn1vfJ9XFj8h3CpJNkvHXtthexcKcDPVp",
  "key14": "3ByLqKcF2szUfYU9bDjPMpihZfxS2Q4ZCcqgtUYmW9Eq1eGdHju1d7QJ7vdVqAdXQnHE21cNzE6CNEw6D7roaNDr",
  "key15": "3ubhyazmAebBBC8iPCg2RXwx16SGaeQoVJwMNEZcPisVqCqGK1FkUvRrroJEwVeFXnfSdWusQ6S72646vzHQuvNV",
  "key16": "tBi6EriKsK5W9dF8LnvKHwatyfm4kRUnqJeSBPjgSPZn7YkrbkWzZ9vvNpC7uEt9rp15L7MBZ7wY4LBr83BycGB",
  "key17": "3iqMP1ETcd1FCQVfwwMPaP3iThNY1cRDV1bdKooRNayACnVpxoAtjthadu8vxQU1x5YKNmMFor7RsoEmDSSmG42R",
  "key18": "5AGgBJrEWRw39jVgL54yvWNkvi7xyddADtgwJEHJR5mcbWRj8DNRMx6z9sWbtHQHFbvkR2shgerfe63TFoXo4Xug",
  "key19": "4LAU92n7terDWPa79JuUPXt2h7P6k8WkEddYPP68ua7qSa5N6e5MNB4dSnrjNateDtK9VZHmavKVi9iSWQyEr5RM",
  "key20": "4GmvwZLHnXs3xvFaycTDVbfn7BE4utHGTefwA6Crbzgpwh8fhtcE13p1heKmQUQtxuu5cqjKgFYxsaDbZ8JuCuhD",
  "key21": "2hThASaphKWALcthRNXGtiKrfDqFAMEfUKLy9GZ5zdKG7LNPBKLqGL6YLCMRfWcMoaBpHv9CKJzP4VtnDA2WmxfZ",
  "key22": "51AD4K7Fhy86idEaRLukVHPH2NAaCodvNgtuUPR6J6Vk7gwZRZzGBzVR3rGzdM573utW4QB11ekrJj52GVD9uWcZ",
  "key23": "4vLHrUU7vhRHk1w1e3Wx8HeUCzrVwThF4pw5gi3t7XeJCjTRFnyHh5CpUXA9JVQPU4wyEe5cpfkp9HpmQbRofx1h",
  "key24": "5ND7tCGoKU2uNv7dGfWXQyTjRpZT1F4BocDrQUx3eEZUmfqCMYTJb1NRtmY3egTSB4WBELAboUjdm2LJSMjhWt28",
  "key25": "4sd9wV9g8Qx8H1Xo8inDQsvpXWstTBvLbc3h68sBqdvXV5a7f4h8E7FCgLzrhzAez7rT3gMWpMhy6eYmYFM3Jhkp",
  "key26": "4Z454AeSzgdq52HSJYYewYv9F73Xm8VSvxHZsa6wmk2ELgQfhD3nFGmXKbiaD9ce4j9fZjZYKUuf7yfizyN14PhS",
  "key27": "DeG1gcC1KhPMnUv2tN9bRDyY84aodEcf2x8VrF1t1Grz2hWPRrTYJhbYLc9NLZZaRReqe6eUoDfFM7Ho4WWN4ef",
  "key28": "4kGs7yxg86aaYrH72hrDHxsgJ7UesgM2irKZiZa6shxoffBwiEs8k42fZttxECLFABPC9xCGGLvbbqBHgC2Taftf",
  "key29": "4cvvQaWtaHkmi8myBnMMDE5zWkYwNJKa9nxWM2GoNPoHci8QoephZi7uqPLWEskjScuWUXmQTWiviKJ1qXMJSm6d",
  "key30": "5YiydxHEdHUV1FM1wVek9SSbhHRrmoBYdGfeURwW68cm88qxMx4DKB54LVajuWf2sshxFtQkQSbewE4sGxDccRAG",
  "key31": "2LsUpwFGozmJd5E7gn1mdz1ay7d9WhWUQWCqTV4He5VCYe2XwmG2Y4zjg5uuDMwsYmeyLkUGGXu62fcAKnJUbv75",
  "key32": "4j7d9rERojvJtgajB4DNNRH4VDmbpo3QFLXWPKh4fFgJN8HfX735NZQFANJ4RixGD6kai64Mcrpuq9GoLFt4Ewad",
  "key33": "3mq4Cpoy7djxsYzY7X1c8yRD4NvKqfgq9e5bfo72s1oYkHxfN25GFg124mopBoSD3FGsCzigAJx4Mq8RfwEbGGuL",
  "key34": "ycFwFDe6QovooGavTtuqspFTxNL5eN96EToLpLhLP1gvTH8NvFMDaYkQPXRpeKe1ssLzXg51nj8f6ZFJ1ayafp4",
  "key35": "5UVE8gkNgquvspAmB2JvpBDAbjwK7bBQpm56TdhmNG8YKA2EMwaPm2teDCaPb4qUuhxj2LjMK9JcPSCrQpnFYeP4",
  "key36": "3izptNmh3zuwKWBpcfBRQy4jgcgckXkqsGmkiqTJyeRCw6jhQYo7z6eWwWr3Df9omaF1TNpfMHtchTyT3wbhgEQX",
  "key37": "sYGJc8Nxr6WBHg94Rox3YYoN1o9LS4BCFhmy6V8EEWPHr11HWD4yiCdzJHLYkG8FehhdPFRZ4pJ3fYtKAJbuowB",
  "key38": "26PL7cbrJAWieaQWsCGtzGN9ubyecfrk5x9uWukQs8eQ9AJCpr8R6G7fhcjfBULHi2TGRQv8new7QMCNtU8Wvzjb",
  "key39": "2YBEFvCNmg9ivofYDYJTjK8U2Y3STqR55xx2HoTr7h7oa2PrDwKRd8m9WrjLYE2skdBKrt6GYFCfzrkwCRNtERvF",
  "key40": "3Mgd1u4Anj1pC1Qw8iGnfA7p7uNawJEiRx8ZmGVtCRj17WqG64vTCQavRRZ6X4UA4U29YXgEXAYXqoyaLowiX7p7",
  "key41": "3aPAGiJTd5cqMeNyfbArxnx8iHwwRcKwBKQDJsRRGUqHQ35NzRMAk6a83WfkGPf9tfjq2xM1h6HY1xET1WeLmieo",
  "key42": "4N5kZC3GiXu63E8jnVqkyM6FpUhB57DLhEYonRArX9kEpH7GWunjwUYSFhvURHLsQzLhjAa44jX9yNMuPmtFu8wB",
  "key43": "4xdUpwcow3B7ZSQLEorps5RVn8k2YfCzsKoWhhHzDZ66w1V8i74meg7vuoQnfws1hAptjfQbmLXcpg2qT7QEvu7h",
  "key44": "3HGKTfh4kNmmdzfmLW17Sq89eizmPFKfEoEpKrUwYUwsSFTSNy7fkAaBzoxmNsnYCtTwLePBg4B81cTzGjFa8Ktr",
  "key45": "2kf7e8Fx68TdMkeFt9bYQZQviv6t61cFZZcDHZyATrAS7tdV2a8u8YooPFQhH4mMMqwGsSf7Kk4Xzmh2Leots79Y",
  "key46": "5QM9VWjGYVarHushonVvshfkKjxe4geSLwMmDPQpE4ErKjPcponqYTEgRDaeQUFxbQLvpved2um3RJavXdYKXboh"
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
