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
    "5QNTuqK8Yx7tWKgntX36PjMky17Ro4DBfKidQZSMyc1JPACJmG2gee5vAo7Z3mjvxjRc7VqyFWVJfBwFz9mfpsie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zwUNncRfpj3RYzGKf6ZGaBS2Lcfbr9UMhKuVCpaVvcHEvxrZK5uH6TpF41YLyDGn9zeSb6kQbEfDfPwbitY5UWF",
  "key1": "BYx3jYaDCtUodXFj2Vs4pYXEkW53WoACWnF2aGDauhesRVGtDDrHEy7QnZzhyxfVJRdR6RCjwrwgU8BkoLZXCX5",
  "key2": "b1DhfJVGkknfr3zWsVyL1yF22WJrmAKHvJ3CEQKnarY2mqmb3bEAEdACmwcD4GFtD4tRy4MLj179J592uxXYDq2",
  "key3": "2JGDnEgr7gpuUqT3ifWPsoGdG92brZHSjhBATcCvXxx2y4TmS2LDLvixNBhoKqP5oHvtJiyVuZedvnEGdTEj1Ge1",
  "key4": "5XENnmDtNBoWM5HH3Pt5nkDACBPLA6V2sJF7GYXhahcUAdeNkKbs2tacYpXRmSLs1hgYKVEy6xRUd2jzTqxdreEA",
  "key5": "2b4VUpTLLuxV521PkFWMJBoGG9nAsP7QQDBEcdyTE8NFiidMaQjvEw63Fd89FmYiZX79jdELwmpJRcWqpbjnjwLV",
  "key6": "2tf4ExJCNXgjZzj93JfBGS6PCjhxMriCfyh9psJEUCUG7Reg3uLmbKATdPpJYq6LUQrBVL1NPhRDjMbZL9e4XFoi",
  "key7": "4uwYHgvvyQPR8nQNcBGvvv9e6bA9yzwa5ZXAYxaMtLcvvF5JTDxV22Z3vYcFuNcgAU4kBjD6yWUArcX4HqqTedtL",
  "key8": "5NaBxbq3eSLToyDv1Kc2UWvtsPS2ssKuYkq9fv3PVE5xNSSX8zKBtdLaswTQcxe5BfzPbLcTU5m33s8o3wYAz4Dg",
  "key9": "25VzXLDaWZoF1gP4DWNtYp1J5HAuBgJpZgQi8Jn4mpR3HPxZRa4LBFiLQUFiUkYbM8ucCXC6F3KwJNng6HFDj1eU",
  "key10": "63A5mASxUE2rEXHQ6pRNVodGHubfYxZQtPkC5oajS4AcgLHBHuLMRviH82KiaviZskc8Vh2kPdCnLXZT8KEfCa12",
  "key11": "v8Uck49ojtqaoNRTTyHiixS16jonvKYbY6nSQVR6eiEr3miiUmqMnrh6MrMGvQYZdBFRYDdwTddX1zExX8Ujkty",
  "key12": "5aa6KkxwMTvDuB4S3XXBEmX9rbNgJca4oa2ccaWSd46KDnFMwqZaYpmJwdFM7Gdhx9WHdYejq5QfTvQBPFrK5kup",
  "key13": "25HGp5eSTmaSABhLPD9aRNXAPfrMCPJLXB4Hq9zSgqHbLR9T743UP19TcyMebjq7sukfNNpBQ4eKz9ZGrerkzQpx",
  "key14": "2BgARDWRxaRm7KsfsXSpWUe7g5W3xmK2FFJMEBqZ5FVSNhiXto2bzgG2m5HtczMNCFbc27fcZuLeos44io1BeWq2",
  "key15": "b65b7ZFFoJTK1tvMEQfpSHAvQApf2SUwRMCf9mrBjSHMvoaNyjvYFZm4KJXV6sv1zcTeHz1ZTRisCoosV42uQg6",
  "key16": "5ZjEqR2H8mKx2qu84MGJRmuEQwAv52UXjSiUKduWK4pBf42WEsFjUQNv89aiFeyetoEUtNHeVsFzF96Wug74GBN5",
  "key17": "3WSt5UgSBJRFUMNsKt8UXnDiekzJ6BGnHDqLKs9KfHUTxKCQ1ksSpLapkMdckxURmhHWX7TN93zZ44NBm5kVZN2y",
  "key18": "41sxfi6rBacCRvAiaXBwszP8tudY6E7Vqo5rmTNkZXZoemUwXQK6haeNa9YijQBaYkrsAvUTR24QdtaDMZg5KkLa",
  "key19": "5dMbzCJPYaDHBgXTGfkzowjwZsNA2gHgZuVywSLbgDsfmmCvyzkWjfSWVsica5Lumv8NGzb4jzFx1NBAkWqD2i77",
  "key20": "3769YigVYxUSP8Necp6h8VewpFVH99dPBfCNe969P9W54FomAcPo479vF4Na6b7t3rLW8edrUAev2LbaFhwjQ5Uy",
  "key21": "m4r4riwZcQQ9kZy3tLUw9SSULT8xPBas2gzhrF9rUPQ7zqLNJNopTvAeBpD9SMBdoAyyGN5XiMeZ8SzxQ4f1jht",
  "key22": "2wg8KdMBjkvWP3sw2wbuhoUiYHSyRxsLTc4EdzbcBRX6yaNcFDyMtUe26LQoWBKC2ne8K7TMexHUZVg5qhrFJzX3",
  "key23": "57ndM5yC26wUkiUWtvMKxQMBCiiB2Hv59uak1rhoEsW1CqJT41m6ZBY3eEWcRjw6m4e2ZSqHdjS6KssGgn7nTDHP",
  "key24": "4n8iC6XMFvdeqmoNjGBiSi69BaAzzr7TAm9mhWHCxJKDSFQPQRHB9D9ETh3nWfw4JssDVGb8dp5YVBo6P6tqTYKz",
  "key25": "53SJPEvCgfswqqd5LUXtrYb3uvAuVBjL4Q7MyTKQhGbFUAD6z8K12mkpamcxE2o8Z65atZN9TVgQ7zxHo8rmoQLT",
  "key26": "P84g82Qh2XaP5HduyVLYNX3rJ9wn1tBs8fb9ndX4TVBxWUV8Xnp7knGkGUABjz28qkHChqRToujzuge78YZr7ih",
  "key27": "49vK6YCWBgujMoBGyu46BgonxKzL5bbDsssHZKpyBR74kMWXb17KQb3zjQTB81okX3hWdc8XtNBhZR3Lz6u4JKLC",
  "key28": "fSWoC8vrgF4EJ9x66sHupDycNZGEoWkurcmcE9pC1nnuYkeTLUrmuVuZbs6qdEctjYakgyaHiBz7RfjbPwjtfaZ",
  "key29": "5ascyax6U7Wttk6dpcgS2r3i8pWB5bzbiLqDRNfrKqxWzSy7MES6NCNEdZJvuYNp9jhMi4tLYbvDiiPbgcz68CVr",
  "key30": "5eUGPKvaBwaybmMjS7mU6fPw6gCmd1oRhG8B94AvUmAsH2aPqADC6PRPLvnd1jgEWVD1qVDG9wtevpzfbKGvnDXQ",
  "key31": "FQeRbcS828TWMJVpatLnSbMhvfPwVxb8FNt9yvUUAUyArvnPoZok8j4oJZiUpBbC9DYSKFFbCYpNgXUNjEmm8Qg",
  "key32": "4NFzCGfvT59dovwMpa3V6myzdn3z8gZ8VvH19bcXJqfuGmCst7x3EXECff1jjeQoWHC39HybbwZUipCmPtQyWb7p",
  "key33": "TMLrrm8XWucwUAB1ep19mWUzQEqU2mybHKjtZSSUBs8hxa1wcDhq8cnw7jtx5pPzVRHPH2oUg2bZGEDdMszYc3R",
  "key34": "5anokRw1EkJppPdPov1eD55kDDCDWDZT89sT1KHpKRDuoH3QVUwAGfn1uWrN8RW9bVbLfjSfNjqQdi4QXGWHgMWC",
  "key35": "24AzkMNRSvh4SitARdMSesUD4M8Yxmuwsdkt1s7R9wS3JxP12Vt28J4ejrr9Cbz1vhnx1NCQZ9F3i95AcfuAKDh4",
  "key36": "g2MLMFHzces5ZfZ1Tt9AZpGvePbVJk6r15n4TnTQTGM1yhTAdaCHbC9hVxZvWmVD2DQVTTxZzPZuyFk64hoEojN",
  "key37": "2jiaqEzi2WemiBCvUhQNgaghtrEzq1gBjcD6u88hF6cWfSJxhFqHFD84iine5pPNFT65WdTUNgy3fMrfTwsW9qtc",
  "key38": "3UBXEJ1ZNzzRtwrJvQ3j55tRfFUdfkdzm5K6NomxaAvymzW1UzkR65ksiJ2E1M161Ad938uL3kCBBucjAB3jRbAE",
  "key39": "48GP3GxmT5qixRuG3KpQ8sQJzwoQXZskoTsQZff3Q4h1KK4vxa6bL8mw6BY8pgkfx5bx71jDygHseAW2mfX17ajW",
  "key40": "26vRRsmvWtYP7Xv3sZE6f1wgt5Pqgc8PLtZLpSA7ttt3gkCQoZXD3CBdLMW3e9VDLwofGuVFvf49cNKssPP6SYpA",
  "key41": "39e56o4Yqnq47bMRnqcFUCsCGuYjXW2BDRpdwRDts2JaKEMJLjijxUNgnUqWSKVy28DVcLZ5SjzeDTKqXncuirbw",
  "key42": "5KPn8Ub4HZX14jAjMRrjDCUPYRf157GJKajaZa4p8v42qzVXSsgPykGrSAw8XmHHQKRkM7b66u7k6nuxZHac3z2L",
  "key43": "58ybtJMH1ydbWVWSDc56VgcfFqygSCj54qWwN3wDAzGKwXYSaYsCuUm1XCrws3UxRyGt4QVH6mN1rhfqyS9mdDP5",
  "key44": "58PhDcMSZTVYgwiyvgrRextugRicRKHPiwaMkMPYVZmhYkiEZmJFiijfWfVAPM78BZtf5CVe2YENwdSQSHzVJz3K",
  "key45": "3euFCm7YEvhFgFfU6As1WC2gkb227dsiFs38r7wdjjStTxYy2XvTUr2rTRZSgpoFBHFL1QK8Ba35ddvekNXC6trs",
  "key46": "4igt6B8SPfsQf2X2mn5aFpbeiquJqP5S8ZSShighxY9AQM6TDP7JV2fV4bxP9wUYk1mjeXz8dRT8NPpcDLzKkJQN"
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
