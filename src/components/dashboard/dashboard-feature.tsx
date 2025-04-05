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
    "4dTii7Rt6RPj7MSRGW11k9VGgcswd84NGcutZ6WU5k2bu6TCgVV51VLatHJDLcMYhexEwRuzCP551BpojXNdnbug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTnGywdU6RsBqfffPF9Xbp8SnHaV1wcaJwwLcNvGzbwNjckVYtonGAPatfi1JLhG87PkWX2cxfakstTSLqAAb63",
  "key1": "4qToFgGangXq6FWjkh34GrHUdHqQpH1L5isfX5cY58VXyuz5unhz1qyB93gLH2GnvR1yZminrQ8LqRfyUu1mceeK",
  "key2": "32SJ5B8trnNeT92ng97jJA1SZGJUqyALCMjpiVW3FyzqJzWXiUHA2qH1eMC7MJLmaQWW9X4DvWMmzRKYKHFs7V4i",
  "key3": "5U5BxurvgDV8wzUfXsFP9CeHHxWBVBhpKJDvj8e2qEF5SFYbAb2tGVnbvtf7rtFsU5wdFPVWgPFdHzpj7bxseQqz",
  "key4": "33tK8YVQoBkMJfF9CLcAbYiwCihrupp4DnNeSwwY8yzNregayZF6pMirwVc48fzuYtYHuAEp1WAm7CaoM31f67Dy",
  "key5": "4k4i2e8yw8A3f8GwvwEkiwDTXivJT32dyUAAt2aZG3B6ehEKcUHcGhiqb1ySY2q7JQnqfvn6QxZZyBWRNWJoPh7E",
  "key6": "5YhH1TPo8ewNkJiN2XxPM5u5iZiuc5SaMQcBioE8LU9Mo9351B5N5xgFby3vtZ4B9do3JdKhuQ7Kq3roBqJ4fRki",
  "key7": "4JuDmZ8Kxf7k3ioAK3kwkkys1XaeW3rh493aTAoXpQgxFv3L3oWz2LvgohnyKMbPWV7k1AEUFN8Y8B52PxxJyTWF",
  "key8": "zSLsBrLuaDfErF7pPuYLuJ74WfNg3tKvTCkEnnM1T8CFUgy4nx2jLbvvNSWNS5mWUWtG7wAhcPRtScz3LDpCjx2",
  "key9": "TgZVxSqrasJczoYTmAFhrbpfxZ2d7bDs2aQdKRUhP25kiWqwteBdk4DE7UvTP3SywERufna4XnrGTyPzcxpDaL3",
  "key10": "5y9RWC6E5wbUqfsv5hsyYRpPW6J3h4KhijFuJb2BHEiBcCzyvnHNLTW6YDTbFVZ2MgYqBtmG39AbsFC7ryyyRJg3",
  "key11": "H4vxvxDEmjHNfoqE8PJVUpX6d41UKonpWtPoveTn9vvosS71on8DgSSgW1CxvmCo6VFcqiuyoh41PebeE4Jxizf",
  "key12": "4K58VRh5qc9qdKojnUTtJTrrgXomeBNFEbtoUy13jvfgwQ5rbvqFgwo7KtMJjjsjVM6kbzRd3HHitzyMiWWqFVZK",
  "key13": "5UxUc83ZzEDPwi9qEaPokGDpAFcrr1Ryfkjvu6jgKEsJbSmxdWcwA2mxH91RPaj27JZrBREfGAoUFYhrhZPu4V22",
  "key14": "64tWq6vcGnLozKGTMNNb1hxnw3sbapqrYhfJTCYhQDvRz2Kbxm8SddLFNdKn52m8meVdFaoMMv68zt5H3SFnBYbL",
  "key15": "4hnxvt6DsdREAzoJmtdp8S9XYeEZvaUUBKMt3Cw28M5TtkS8Ax2qFp76rZQaoYVw5kbPzbgQQWkAypD7tnij9BgA",
  "key16": "2a8T98hyzYgG5J4cq9VHj8AnPqDgUjBhCmTjzGxx2kHYcRipQYdjgjVN1nmVg5vxrT2wXNHXVMNJXAhQYhW2E6t6",
  "key17": "3bnWJmUk4qJ9PwDEWtuEnGXVjF1g3T2f9SKmydhbocgVxWZGXzUpTyvh1RjYW8EiRooYfKbZviVBK3D9qkthcwD8",
  "key18": "57rZjQ6WNYhUezAf9sqaNj5cQy7LRDSD5FVy1m93CVUgBJ9kK7Jtjv1qTvwzVjczzpdPREs5jvU9ZaMXpEzoq6Gs",
  "key19": "4F3BahEuSJhnxLnmv22RWfPojGwK9FqyvqbUAn832icwWmu7ggM2rZarv3ZKmzcoc3Cfw6VYLytrubfuzSABpdE2",
  "key20": "2Un5G1FrXW4SMQa9SaUh1WjbYusCunkrmu8xN3BmL4fDGXLv2sRhSUCoh5EJFVzKHeffdeQWDyRno7xdrVgK3jfZ",
  "key21": "5NoWN517RppCTEGcEPUvaCPLncbWbyVotHGZBCsaFmYsDG4J2HbQwfR5N8NL8mkjzGjTnZ8v1QYtKtqKEmeEAyXh",
  "key22": "4WPyscxnk3DRfruzxpJGcW1UsVei4sQ1F7E3YC1RM6eFt5gxKeuUVBAhEaePHfEbspzB74t3F93g8xDobNTWXgUk",
  "key23": "41eKtVJDVRRmYo6bhfcoHW11bSwaj88FMnCL23Q4zYv9CVX4RpKgDYLFiC3yv8EzRAFb3GA4xD61kJZktKi2YnwF",
  "key24": "2eHioGGSfKuA3vPUaWjVKPr3Y5piYFBrPdaBgndNvi7c4dUf62NBDengBqdNNokk4A8A2wykPZRPrkkBqUfSwrm4",
  "key25": "3u5Ua2Cf2awxwxqaj7FEiP8M5KwD119gUrfiYTx72iy5QN4P4T37oGiwrKGWpVYVtxz3e1RezAfq25AgL3i37GRX",
  "key26": "42fUqVTeSZxatLbPRvy4CjKzeVx8RNTjrMR9VuLpxatjtbygxh2QG4265g1PNaGz947HLSB6DL45RboK1bwomn1s",
  "key27": "5u7ik3mkeG8LBUj4ZwYeQxxSE7cXj2sATH2aBp3a5Hb3eiMAQ4Dz1YhKMnqE428xd49grpNVnTLNQNCvxre7qhGN",
  "key28": "4k88C53PV1pnvTb1mwgoRvUczUBEmtjtYdFYTtSNz2oFyy24XTNMEvcG9i9NBWnT97wwhqJHhqxsuGTeUu59u53N",
  "key29": "52TxousqAJjUzBSHFwEQaw8oikLvFg751pHFnLHCQ3HsA5E1zWhzGdDJJk5SQ1aXyBPfrHw6wKdsEQaNYgLzMrw6",
  "key30": "3ccEPDEqcJ46b9bFc6D8arzgsudL7X5qXQoLLAaMuWJiK8MHovVaaaGGQhvDFwAYxkrNRCkEvCBCJzNWY1cRajVS",
  "key31": "4SbNsaDnUdv8DLZe2XaL8vQmibYmqdNQZPFKFsChBsRddLkiM4atEgaH539YPak6mF3sXzRBGAY6NKro4rtdHLoK",
  "key32": "3UrdGJwSh4a3CtW5LDGhw2ZTEBCWjxPAfk8MzadquMiN4GFTtA2U7yHbWmp3BpszWEMZKYDbwh9T3hiFspFVyJ43",
  "key33": "2GPwEmx157DTpPKfnPTrEyqEXaQcRTNMV4MYPJMYaXEdKqKoWAB9FYzXSJRCzBqzxkJ6bEkcRorLyoiZbxKzCG4V",
  "key34": "2odpoAKrKrpotEWSUb1LzFz9x1cBiD3ifpeQH5fhKQRDxHsuhqMdHHW33yZX6GhD8wp4QzXYEKsx1a3F9PuUcMn6",
  "key35": "5eT8JagvnChVteZogNgWgJPX3Sc3gonLYFsrSYNDBqaE6bhfV4CqDcPaviTW8dgftjmLyFoDcXGoxTM7oHGs6NWR",
  "key36": "52GLKJnNW6xkJNvmsXFtPCeNistYu8TzvwZMpx1mbiY4QKwUA1ymmxRX2j5RpjfGcJXUJiHzWatJwJHYbmJ2jc22",
  "key37": "xXuXQszt7pUsyygx4zwZ8PnQyMQSApcikgK15wkXBXEbWyFAMc6rGXHRo3UJ9BPqxLUmJxufD6xkfNWC7AjpUCV",
  "key38": "4m36dTm8z7SdFfLS1kKmd4bKWqyQpzfeMKLceNngsDYXjgEhN4xpE2fWU144wDf7KjtSpdsNnDEy896oZ3ZRHKhr",
  "key39": "5AJHwdZj2m4whJcPRJiK4BZNDvK2mq6dMzZsuzU8ngsudcEmyQwcmiMcwdUrGW88LKNeFRHHq93kM6y11SD7KahN",
  "key40": "62LGUUa1zkDUompegBPg6AtpNVeKvQS8oBHsrQvZyxRt2g82Cw9voMrVJByQ4uvgYY7HKgQoPTD7tyzgMNQTkSKs",
  "key41": "jvjAAjdFKiq1d6Vk2NaQr1SACzeHDQPJqyDGsTt26FfGVxhFezfxCD8a6xbCYFQSpgcLQovc7nYCgQomBuVXhYb",
  "key42": "38GLF6HXKZPCmDjxnBYieF5fRN5Dx5Th4bp9NMW9MoUWPnkcmANcMKjS7EhjiKxtaSJcXoorPiCWjdjS4ZSxphDH",
  "key43": "41UkABzbgSSPJ9cXaYU3mRB7CTRJAQ6AxpRnvNhyk2T74WGhZ5WxkgLzZ13PEqoHEtHp6A2qbnbjZpWnfZCeieP8",
  "key44": "5hYz5jBJGXavfaZ3As8zwu53r22SfcR8uidFC6JRM8kfxCVWqk6w71b2egLYfSoxZCBEZw7tmJmzZ2eQJXNxdyyy"
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
