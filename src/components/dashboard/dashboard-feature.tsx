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
    "42q6rrwzTXqLMTJZU6U5buwkw8ePAzqTpL6AXYUmL9QD7XdkCGBLnFWb7k7v5doy4PAp9fgjJUiDKQSJrk5KayuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ApyyHQ63BgqYECzpjBZeW6otiosT5gaJ42pF3xZD6Vcr3ZtSdLwnwDANbrfacB13gtBa6G6mJgioHeWMtWzwMzk",
  "key1": "3KA7PopAiAft5FzTvTJfa4cP4BWuKTVWERhjUEjmf3xwRGbiNt8EFSpgXn7SKU723U92tsQdB1W9JAKEpYh7mRiL",
  "key2": "4W8cGGw83QkijfCvNGJ6uiRFgAEJg5E71nVg4NH8i3j6UCduQbEp1is89M5BLbTBUBS2TAgE2aGJbWtd4JRZGNqT",
  "key3": "5LAyEpWA41HCniMUiK6X713yrhPyV8PKFP2AS1tvT4pume4xmyeCMeYRT1LZDpiXfb8TGQstiUBfogAARRJDxVZi",
  "key4": "58qVYt59ZkfoUmTqpDYJ6JgRptrBuK19YGbTvL2kjbJmh54zvc7eEBhH8AyZgZmZjYCGKkmKcL8NDcRnFFobDrG2",
  "key5": "3KFbk4Xz5gc2irQWpzAax4EU6WRmsmXryno6jKoaicn7XRXaPAhDny2U1Xm79ZBHQk7msJPpvdVQ9bBYjUUt1PBx",
  "key6": "2wGDBDMGu1WTYMncTak2uGWCNnFm84oyfajvQxbXmCvTYmcjiCqbRGdYjKe3XtgD1xqMQtZEjP1gd8gfMzxgUR1d",
  "key7": "2prWv1LwoBxaBXU6fnSqD4B1Xopqk57cXgZH4PCyWqj874iDBt2BZZz8PLNJJbfRZENbwNUfMVKy7G4RVGrGfzVn",
  "key8": "47b2iK3fRN1b4CpY4nfS6i3vQZVV7FNgweAtkxeTKkkiJX22JaEbsUsi2ZsmVQ7anuGxG6xLNYg8ZkoJdM99giTR",
  "key9": "3dMgnagD6xC56LCBUfSds6HsWCARTfcMJgRvfyBgijJyqg3eWDqQoLCCCJ6BVaTan1fABwnJfhmknJZYSDkvD1qZ",
  "key10": "2JUoBfenS35kx3rjAoALnHvRCfVAfWmuNuZeSpRY3ScRafcqyksKLDcVRwQ7oD8482CxmtdpJA8Kxqii1zCjjxZP",
  "key11": "35syNtFfn4b5HhpEPHHSQnTtb8r2dh7oDrRN6DujRKTcyHPrtjaW3YJZVgyihJsjXccb1THNA2THeHVtfbn5oSGf",
  "key12": "54NkCKaFrZRJpDHRRRfFYvKyZzNE87zzTuwNCBtdQqbVPhgTjAkqFWX7gsis9N2JoZgFtjwmQgM5L3wprqyiBhJQ",
  "key13": "3J6cPdjDuao5LzdorBZfh1Htob9YpPRRr4iapqv3EYm5bErJqjiKXUQoTCgNpXYdjruUdC28WMhRRuz64cYMQyMg",
  "key14": "4XVHZDVqmf5ukN2jKHYS4a8A2xQ7x2dA8u51QbM6QEkCHaR9a2KauA6nMRBFswC4MLLhBFiRqxSSitUWQAZARUjV",
  "key15": "41RCHaZnB9BwAZp7ZbfGDzZgiyzy1umuGBWYCYH68dN9d2cRS6cU8BbFMv6KumDQndjDqSFGBsjP24jecYLnTQia",
  "key16": "3bDQvFkxWHpTrMMRorn5tpkkgeJuqAB8aSW2FX4dPYzaJd5ZF8LfcB4BW9U9Xqj9Rb9yMXz3D9yyvuSHj8jwj9R6",
  "key17": "2BojmA4JAChgeAeLbgp2VJ88zyw2B9g6gJXbaTwFz279ecB4mLX3SMHids6aDDutJLa4QkpUTDbRUffri6MEgfts",
  "key18": "67k5aGwcb82hZLg31whsVxnF5tF5HuUMnmGPyttcPAuiT14cjeMGehpEwQZNAjL7ckucGWeboo9gDv4tzZzChoGG",
  "key19": "nF6DWeDTbV62UTNc6DQucK1cQpRGcRReXhuHMxZJcFUpveJZghAUJgEGdcFwDG8gHzrKkq8iTTKtGvtVtztrCRs",
  "key20": "2nsnfRFTc5oEA4rpQTGtFoH1yrk5p7WyHgCQrnmQtVYhPAuKCrjwqTdZToVHAQzZeFKZWEhjv1ieUkJn594QkkiY",
  "key21": "3a5NTykuepaTqWhzQXySWKsVJPNCQEagRtzmCkgwMWontSNUjbZZRNggnaeb3DcBBCew8iJ3H1gRcRWCore34o8H",
  "key22": "8ZtJzszhLAWmamKPkDFxb6serLFgFrec49r2LjVE7jeC5vCUGYfcimnAdfxrDzDdXTkjoFQRC1P7ZVM5wnHSHDU",
  "key23": "5vD7D65EypwURahxDoYczuoxaMNEf8u8ekGkPPyTXUZQpmrUL8fYNAgoKtAFhSuv2PmTo9Qib3xFdWhRGHLAP8HN",
  "key24": "37SNeagaEvZWoDKSVEBvAQ6vDPgXnHqtcrjGXbnRfB4N8sKojKR97JxH2mbqEm24rRh6VqMWUHiZ39BBp6AapCtg",
  "key25": "5oambPmSJ5Bs3JuuFKUgauv28Dh1T6FzZMoSe5QtVteiUaf8gUKaHpuLNyqGWrgJJS1eVuXLiQHiGTJPhGGMTbk",
  "key26": "56Dj9Zx7Vp1WUhQPwQfSE1R5hWZtWUYdSwdK8W7bz9x73Cp1vftuN5PMjiA2HuMcAU63ALYB6JyhwnxvxMEJMLif",
  "key27": "4f2KVbavDYY2kEEATtFsvp5Vn4HawfjUkHXWWdtZzRCFqLtq6GrCD6jCFfqtcQS9DnuFVXQJC5yKonxbABceon5E",
  "key28": "2J1UQvPF3wmSd9mNqfMQZQARGCMchWiwCyy5y6WpqGB9vFJusjyER9PRQ89VQxt5RZhdsFwX2xLWnvB9BCbSp7AX",
  "key29": "42H3CMxEx9DG7DzHv2gZ4GzVticds8c3ygaVWppsUYr2R5u27EMER7gQsuGkfty2YSZzmDgpLdTHsV2mXoz49zW5",
  "key30": "5HSEttBZHSuhYqCVspaCp4f15enVJMX1iD4tK6wifBpCx4exZr51jBxZsLQfRMs4o9JHBXdEihjmuekQLR5u6sa5",
  "key31": "4gCkPr2hibLEazQ5Nxsz2KeruvZawh5ug9uGLG5LQGRKxFhhoC9ZZDPp7ya3tEbAuBtyMHfZafLz25uB71ey9DU4",
  "key32": "2bMiVWTWxH8A5jgAxhgaQSYAwnQ7Sa8vCEELH7RGfn6xUo7iw444o5uopkZ7Mc2b5uWLK1bZehXGZQ7APwuYZeUu",
  "key33": "66mEz9bycXExHbDNt7Jvg4tgAN9wUwfnXxhtBTk3Qc5EcD9rfnkf7NtvYXda9JBypsfkrE9JUcX9nBQ8mDGTt1L",
  "key34": "5kkNwJD9oVcvvkxbQPA1bQ3fs3QXXfXsTKyyjrEcmgbgtgJjNiMTiqwUwozbycbiTXgiM1fpG2kTrvkrzHzZNUF3",
  "key35": "2u5KPPb8LVs3oen9JmAXGTP67o67SXDyGnFCPa4fdqvyVeqiHtLBPaXo4Th7Qehw1Veaigyt6geML8gnzDicizsD",
  "key36": "3KfvqKX4Ar6UBTTCqjjxp8k1oZzdH5Cbmn91DqqbCnmTxoeNWqmfmyPfG5SVqHAhL3ymfpyEZWaRnkjUbX7CffKd",
  "key37": "4qkM9Hh83C8yPVPmDBtNHVWwyAwT9e46CWacjUPfbNYy64aAMterDEdGWBdQy6fgUrktZRAd8jXkH9enT1L3nSeg"
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
