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
    "kn7jz98bFp2gLWhxkRu59nvkhPA6EuLyeZfGzxRJj9EkEyQ9yGcrWjd45NbFj3hTgJisXmPh2q5rB2tK8fj2MwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqMi1nbFRtPR6z7XtfvfWcn34ezYFrVDibgJrVkGCh5yDM9brz9nUBnVwXtF9pY5XhEFmEJq3UFC9jMXG76gNsH",
  "key1": "5knXFmHSwYQGc3ep34ntYWKpiRp2anbgb6xww8W4EaN9b7wbqGCTYWpN2GuojpAaePAfCVW92rrL3EHgmvULL935",
  "key2": "5mVTFQ3GfCR9thCXFfsYrkL63SG7iHS9cUxLXTStefVicX6XGvMFoUW3Dh5qgXy2mtgdkiQBj4Bjvwv2zKpTLX1i",
  "key3": "pxtLBoXv7ceVLsHPrquFb83zqdW9w2Abh5eFT2PtBbLWc7EPeYpNW6LpgjMTzZopuHFGmnTgJUDKsut1wd8YboZ",
  "key4": "3WPHAJdBTUEMBvNxtovoNgamuYm26SSvs7Ct1yqQdWbqPXrZFqKBt1RDC4cFqyoc5V9pCBUipNkrieMEmMW4X9VJ",
  "key5": "2FFjUuS4bvPneeT3dzRj2o9G2bmtDQVctRsugSgwsWtfTF58iMzttFe5DCPiCBeeLR71c9UH74Vfb7g1B1uCcG65",
  "key6": "541Zj7a5ir8EAnekBdHJqGMUjntqAood1bTJ5AhGWRjgnrdCQhk2JBnLHJmMFHbdS7wnRFa1uuLp8WiCk1PDgFA8",
  "key7": "34E4YTDD5LMbButUadRFX5mU33CXjoLAepQu1xrQaXgXD1GC594w4RG13iJouEx4zsRzNkn73JMqYMWPTKTYrR1Z",
  "key8": "2Z8hN7bLWSrmTFEeSPHqj8iDerz3SxQrYzaxvvtEGyRs21bXyXz7Zd4m2YrXyUfHwbZrT1vaGYywdA37fobYUVRL",
  "key9": "3bHFaCs7WK9RmBrniu5SZn4BxfLLSB9YcoqXTToPdS1mzaT6ZyYMbLsRhCDZxVC3Ey4xFrJAeaC5VKUsMErQg5ee",
  "key10": "vrioRbyWhqBM8NnTiwbaFVJ59nzYamDNfD4WGzipRBQiGCrnYZbFwQFb1kam21UGBcMMBiwarq7iruqT7Cr9guy",
  "key11": "4eKqiHfkzadp2Gtgbn565XWMUGjjuhv57vX5DmCAGasfKSHgnJgxakBcz3VVr5wFCnB4ZVUKSxTdkVLFMrUoYoZf",
  "key12": "2EaNpc7m3vqtQjxRDEJrcHcBW2CpVsv6B9WqgCLAbPi2KyJTJgZ3Nqs1L3aaNSqxpx7yUrAueYKBau7gSfcSQ1kq",
  "key13": "44oZ5QrLzhn6FMqVEqNe5E5Wy7aoKCLwuxiMTaaHAXfPw61BqU6CNRuU3fc8GYswRTZrLGHVRbtt2quVM2DGMq8q",
  "key14": "3nPC7YM8NZxv9uqDfGcKLyZaH9SmyF9nP6u4doHRLxxfvEQQsEnR5TA588kYJFgjX6UVra4ugSJgMBTfRUj6z4Cq",
  "key15": "5MKRq5NwVW2bfPsYsQCN9NqxnpSjfutuy7Q3mxB92GM3bNYgw2Fd9TMFmmQvg7CPx7hZ4BvCE8VH1jz4yd1eBHV6",
  "key16": "2gXQAUhHqxmyf1wRDcxXjyJJMK3sAgNDvid7nTqymc8ijPnpAZ3rEZJyGoGTaxkiStGs9Qh2crzGrMpRnmp27P1y",
  "key17": "5B2aqSyHZfzMjRRzz1eCqEjkXHQAq94Vt2jwXhLBS1kFBsHsyBTv8xX3Ga8z4APn5KqHVtrRyGbnqc4xkdxgWaBr",
  "key18": "2fNyHi3w5kXNXaTFi3mW5WLaT7vheawrbzwHa1fJ2yAsUsEd7CXfQhbCmXkGr2Kgq78Jfwn8f1pahpUVYpjmDZAH",
  "key19": "3DBBTi1UpQ9WyKa3sAhCEMHuVsf1RWgAjJNXprw2b7eubH5oxkXn64bMKBb7aJuamJhrc31Mb5HoCikJP97dNBKC",
  "key20": "5VEkRrESg3JzXekF3oQP7A2AH1tKKKNbyJJxm36kabsS6b6kyNAzjzJJ2DNQDcytgsQaFnp48eYzcEHyC8oFvrPw",
  "key21": "2MxqMJdiNYJtL4VPrwRnyZA2Dw9pBuZAziwUXFB4mbTwCvN3RxUyZG7cnNxbQ5J9JoAcRsPjNAEA3WM68BZtdJVh",
  "key22": "2RxZ2SYa9ADS8oSwUDrRcwWRankDJrLYmguGDtHT4s9f6n2PjJ5BpkifqTkqoZKmaCZQjzbPwiDFZ1eEuTha4Eon",
  "key23": "tSRMHPgjTk1HRQQTNwtjCyEoYqLaPfZTwFP4Lou8fUNvCR3dz3sbwFG8g1KiUd6GPKwdyTLGNrNUq3AuK7vTtPd",
  "key24": "2LfhrrQdCRwHaiDotPiaNXWdqmpdiVdunf2vPdbA2DUotjRAQJsidM4CKtGSRYyxyByk37UnwGNDQg5zVH4moxU5",
  "key25": "3iwVzK2xPxgo16Ebhozs2YGZpVEPGJimiEh4Axut4bJe1ngV72veHzaV8k2KtZJqLTPob2v46VZmjmERUv5QX5np",
  "key26": "2H6H7eEbgPnGiKjjeBDNdLnq467b9zeA59SJvSDdZPkCNvEMtiJF47KGUFsKGLAzgyAvMSnKAXuUB5TT8mTcW6qP",
  "key27": "61YoXYpLgY7BGHtiT3iArdJggvVqbML1m7DCtRk8gqVGjcb9BQkWZTkqyaQeeFucuy9k1rQ4S2hfDg63g6mFWsWh",
  "key28": "2Xc9HvKokBBaRzF7TfYPbtjXKzPAZ7EMWNy4YwyGxKutNeJHHYcVSsu9BaiV2kJ3rwJsir9jsn7RD2RoMXLbP5DK",
  "key29": "BnYhWYg6gqsyYF4uZ6SKCsHurevDBgWF4VBBshWc42Lg2Xn65uPfohdLrpjZUK2AncmnF9cpScAVokygCMmNWML",
  "key30": "3BCXhVoBZvj77kuFjvvBHhenC9iHG46i5UBfxhM7g2Mfd2tbTJvrD5mwbZRSCg7ThXf5VttzVBAGBhjzU5WGJHZu",
  "key31": "5TyiNn3fFVXhLbxnLRg8Ga9gR3n9pXje57ExMABh5cdtygvJkbVxAQt1XcishejVeEZu9YvRQHFfn5w9Zx2TkqhQ",
  "key32": "2Rx7yWqxbrizfdp5CLTwp2Vzi8r6KbC43dZN2RkzxeX8LWCNae9gtBpEuHX6r6KbekxAMachWHhNCaeuuMMrpoTt",
  "key33": "cQpLQvF2TeRds6ykUZtkMwut2caqNSxxFkcm7MRBtPWmqdTbE4y8esyzD5GAshdffeTeT7ntF2EXzvytrJesQ9T",
  "key34": "2QuW8mmH58j98Ug1UZHr21RpktWRXg4Lukua4oK7RAwky1nvBHk4bEnpr7uzNVS8mF4Le6HSS7mLUFinAEDvF5UK",
  "key35": "4qDiEDJgh492cuZrESpqStWYFooQJBbhSQBLiY6KpkG35SNePJhbt46bBJdZe3MR25KYD335ERF9v6DhDVkcvo4V",
  "key36": "5yFjykd3fkuPp2yHvrthDUak9uY1DYeAPEMeQXaiNDZcNQaBS7UCq1vTcQezbMyZsrUk3tSNarcRZGhJ6jXiVkhP",
  "key37": "33xTbahdkjve8UqZcfr3Y77PCbMs7E4s8kNNmLxkM29Quvo3usfdKtaRU4N9YDK9o3LjVsdJ3dp6W1S2Hc1wyeWf",
  "key38": "rxe8hKps9D2fTX34j7VWAD2TdBVc9DzkddATmG5qVTDmPtjZJiGbVt9m3c6dFgmVE3y4wR9pzrxFDLyA3D1JggS",
  "key39": "K76kjvEYoo3YpNqmmzMKZuGkw4Z9yGWa6oGQh3cDtCZPvpocMTdPLKzniD9ncE1Q3rEQ66ZvaxxKTkyfFPZEfRX",
  "key40": "5vKFexeW8ujzsYvpy44ucmqnsJDCqp8TUXgnVD9vE4mCr96qJQgV2cB79Tn9MfbE9dvpD7x8oRPMkpPs513FUUmH",
  "key41": "5mdZaD79DMJ3vGEofcUiBf3E9UHHEYBYeHNGAQdQV2ynkZRix1JjDNikgq6KrpSCfLu6eapFyFEm5PBrQfM9hA1x",
  "key42": "5yoPB9Me8xeDRzdjtwqx3xHp4sfhGG68DU47cWL2i6phpJaivnxivnvVPAAz2sVY1L8m12d1zXnBC9R879xoWUuh"
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
