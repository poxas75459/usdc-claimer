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
    "gL8fgFkdcG85gGsvstbYHat2tWaVEwfCE4JXyF62eYXCghUh5ubfZgNf8gTxC3gg8mebJQrLNiur6AWEBTwWkNW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDd5zenY7Rwx3KtDmbnEXxsmBaqrUXoXrQkuDPahQEZXKHbDB5oaU9BYqYYSMANtVHRHFWywkQCgJiAWx8PhxF5",
  "key1": "2UFsioSGunoBS355tvQSurN5MDtv95YAFDXh8KmdywdSkAKuzEezdgn7RdWdN11HyUKYCnavy3z1aCaPNKsYKt9S",
  "key2": "4rt4pN8yEp73ppiXkN4e5YyG5t1kDhd8xtS2zwWCbb9KgVajAZdX3QzGT2pewPme1emZ29GkhV2Z2fhtf5VBUXgo",
  "key3": "2PLLtSa6SyywvA8Zuhqk1Uw7SCGYTw3zqSCkZDtsA4fVYV62BRHjzffw7EkJTzrUg9mQRi6vNCn2fseoCuDG7ofw",
  "key4": "4eRpo4wdDvyWDEfzq6AoGYauEbbEnmA4KgA8BrBQAF3dvcumNPkEU3UMijrsPGFjYC73N3XxhmRfpX3Kq9G1XtcY",
  "key5": "AA4XweCcjsNjo31cAYCQHGBmdo5LoN2A2DneGAj9jGKGHwpTTjzMgJgv9royPgDyJu4jJ9acpLTurPpV9tXZ5jR",
  "key6": "5RuS42wiGy81DdJY7QENY3b3LF9kuxB9Jq7DaKAdTeUXqjLHBD9VRvPPPBNJNxCAzm4irEBNy4ntBeo6An2BGFrk",
  "key7": "3PWMCgHDo51Gfvggg4gWyx9K3TtbiMRVs329u2wL4fabyvwMgx76jzwC7bGphbciT2iE4hKN3TPKcGBZbkx6r7mW",
  "key8": "5ETmmxkwjS1efKL9aPcerLGXiE1Nz4DEyfL2yx8qwjaJNmpRoWjGd8BfJoAb797A8khXHw8g7Fs9EYD7i2dzG8gq",
  "key9": "2X8LKGzyiESgA87YHujLv91qyGwk2cq6SD5oRgNm55xTzzfWQyyh1LWMSbbdn9E7GSfvD8i42CoFKFZV4mH8u4UF",
  "key10": "vBvNz9uVW8fKMYMu85P4DKca9TpjzCxBgTHKxxVoD7oRAKWcuU6my5suXYKHRSjgDZRysTehjszBPGRcFwNr6GZ",
  "key11": "2ssxxpvh1jFtLq2d8NhfibD1WEw9agWXBLqcLakbvuzUK7YuDmnZCJHQuJS7rrS9Nr4MAkrfQV6HyNscLvAombHz",
  "key12": "2Bk5EoeyRhCP11WXMHsXL2JFcLfo5exiWvp5wwefCUQ83anMXQCVrLmyFHrMewJcLz3sEJXdghpooPFBMwcdmVpy",
  "key13": "TuUAwyKVxaUXDMr7ofhksNR7tw1tn388oQ5TTtjXQWXjRFffk4CyQeu4RUGh3eKgLCz99kdRuYQtTu6A2Wkbuyo",
  "key14": "25Bf1sgSLGtPfWoZ8j3G8bY121HQAehT4c3uxRGo9GzrpyhAfTcctwkyNw8VtN6rpDU39xxrCGHj6bYMjuJEbGr2",
  "key15": "3c5E8tvgss6khQ8QxZRjFxRXTaD14LowVzxsYurfYQPdM5CQTG8t7rcHPxhzMaLxP9m5QqMqtRLZ2SoeSJSyWJX3",
  "key16": "25vTweZQDLgoYvUUvcLenyHc3RXEXHwfV66Smw6XtryL2yBcEuZRKUiM1fRuvFMrHPFcVJYiDDeZa5wJgVTpSmP4",
  "key17": "3YpYrBjQhSF7wUXo7u8Z28rnAMuAcoUT4vRgMALvFCjsNWPcU3QbmN4urF3Q3NoEY3pPtvb5F8QRLZoqaKLf1bvj",
  "key18": "5bAtJhVFbSqTStd7AV47ZytaR1pd13qSJkgykViUj5d46EA7kAJfwBWp2HsficxYRT8FDRmCbNhyXhWp8gQTK1yR",
  "key19": "49aDivJ9nERka6vrzZUevGinWGez74ki3yu1rc49RM959R6jPsQkHVzaXZgvC9AJjVqeYGTHHxW8VpMnpxkzKsTp",
  "key20": "3dcWQUHqRBcnMux9CQsDY7JhagHa9epxU5MNRkcXfaTd4aa56DbPzSiZ7qBn7yRuAzgvvD6Sr13a3uwPHA61effi",
  "key21": "3FNvyiw5p7ruC3GaZagMTMdGeyZDLNhAkdyTwgYd8zzGziegPmFhgWyRVb3yARLKtpfWQKMced4tjavZUa3pd7rp",
  "key22": "2S1LJ4zKkVPimVbZ3JZXoW22Zhm8GvYV9nMK9eK9yS4CCKc9wZiD17KCU4ffgFo8WuYL8fGizJnynWVMYpdV4xMW",
  "key23": "5anij2Jsza7G1NefNNeZaRM1y1pUrCDdPn71wu7yqZbu5eBPczDeHbrDXfFDNCCFRwzPmGQG79ECSaeXDaubahii",
  "key24": "2Du5v8BAKgN4neybc4GCS6z6iHts4hMU4DfBBxs21Xksf2biKUmpPzqHi7iMyYoTNho7mTFM3Vkg3Hyha259L6S8",
  "key25": "2Fx7zYaX1d1SG8jJrZn1Gqm6ju6ZKTK6NXjwh3UpwwKdanxg21pEm2NuDi5R47metsGQbuvN33uGVnmVbWz8Q93D",
  "key26": "3q1fcz9k535xYeBoCFCzEF4tUrPv5FPZqxnqkpb24gkq8nnVw9SUbFAVWGSWKGpqzyD5SWDADmopWkSC1CDtVr7D",
  "key27": "27xKoxSE2wwTqtCWC7XWS39Gxi2os226sqaJmZLubGwFahZSA3jgi3i7nq82dd6uESTPHFuidPhApQ1Wf3RviMWd",
  "key28": "5eK8AKa8RxUMznuftJ7Jdz7G838qUkpR6DcKmSGZs8LbJYqVY61aDoUVk8szz9UgvajExFoxW9AiD2udoybqfqpx",
  "key29": "LkibpCFZFNvPgkXhqSWZffmsp8pnLmC95aCDGwAUZWTszNHRk3wJoujpSyEFG6p53hSCS1s8JuT2QYN1q9PMy95",
  "key30": "23jiSpM7RyoFVi5WVAeB37MkfJmnSkCmbCjSKwnAwNR4oUJjBrSY5FMVHW1mLpZ1iwpSX6jT35kcEcr6YHtdVRth",
  "key31": "2zpwR3dXgu2eHTCTqVvBujzJZRFrbrj2UinHuvtcG2fpgEKNyjop9vvYyEGcGm85FH3LBrEng4XCbFBLvHTBcvdz",
  "key32": "2ndq99oaY7Z7H5Pw5kGURDn9Lr45UZY6VmGBTtQWaS6SUsQACrKB1yh8JWtfE641yWsUA3acnTBmuJEhHEVYJZxY",
  "key33": "5HJ2V8HTM8Yg1QmeaEUKZDLD49MHkb6QXgGfpE2rWdgNwthgPaE82kNjR8EHAxhd6ZiWMWPEULivpFSCqSsUYoFc",
  "key34": "2nMtaFHmdL1uBrZ495i5crEBQVtnsAqj9tLDxTdci5fDT57ZpgejeQFKP4qGftn2T7D55y4G6ozrbmanY9GQkWYj",
  "key35": "3Sojjw16n9hy6QSmW9QvCAJBnABw7XN8BMXG4s2hsnuhexG2WCqPwTLBR5PCTmsitBySL8N3Dr128jDAtMsVz5ur",
  "key36": "4vk2vcK4RoxSiQcjGKWJVtayV5a2CeCJan9HGPiqXbRgfcVGioBRGM9qPBuHTroNPxoVf3DraZwncucuR3oYZfA9",
  "key37": "5AakEyRvGrDqBAGXoSFTiNMbfiyEjQPQpJ8yjCsNquFBJk1vAJniJEgnpUz4T4LkpKY8PLGoZCC8abEiUAnGN7Bh"
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
