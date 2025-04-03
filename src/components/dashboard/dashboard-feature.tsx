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
    "4isxM18sXPYdcYECArkoTgGLWd4SeBnTB95J31p39epqd6pL7y9Fs1SspgewKUs2TBuKTQUs7rgtco11qgc1pumn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pjxuEevyTk6SJx3Jd4y6R2bpy5iCqVRXdpa4XkCh1PcS34sArkQWDLZxVeLYGfmVECSFZfQbxbH9wHRb8ZhpZWK",
  "key1": "4PMFEHwCEwu5YRuwvf5wcy6gsk7yv3JngTvQFJF1rHx7dmXgyS6FTiMxgvMmwbeKYVRyVVNXJRiRrAhyV7TFBGDg",
  "key2": "uqx4B9XjriaZtBuAMCoHc3oRGWdRLqtFcG5RqS1TPB4HBaf4LXGd9m7JhdzBM7s3ipmxU5m6AZ9XMYci8YA1xeN",
  "key3": "NDzEzjpshijkbozC9BcsYpwdkirJVQ3vFKxr2FJAQHic2pE562XTbmTyk1qDxBDstGJd29miQLmvEBEQErAQQ5L",
  "key4": "qUPcrc4BAnvFmCJWKf5PUSNTKP99ZPxCRLtoYogCy3CWMd8ShLyVs6kKRouctMxWkFkP5nNgqvcNpWVYnBxKfkJ",
  "key5": "2rXkBvcySfdqwzvUqLpUyytpJvPkkXmNBh486pcGYJqHrvfu1LYQwsUmcwqugASFW56LNLLDZt7HHyjhkDyKkUri",
  "key6": "5y3ztFi3ZBRooRrAfp3dX5nCaU8u6DoicSnJrXYGxq5kRsg2a3ewQXSEGifgzczCSN9jz2joNW2unJ2xser2v2Lk",
  "key7": "49rWLors8YdgjF6ksjHaPQxUF3XLTzDA1dry9Eb2CNAXqN7w8Q2FoDtzXPXnw62TcY9Xv1QkU2P19wzW7ft4HGyJ",
  "key8": "4XyErBRsYaP6rNbb8eRrvZ94yT7Xwz4dnRG2afhi6oHKnMLkmRkNwwvdCYpcmxmPKcXKjRaxNGL8EpzihFr6dc5m",
  "key9": "4VshLTL8N1znqHHTAoHQ9BwUiXzHiuAGLpJVwtPoAwhNF9tunBGR7fCqwgX1BGg3BdpnwM715Ur965tmwr1zC7ZZ",
  "key10": "2mqMNjjDuaDU2bDf5dShbiUXh8weGdHZKd58CipSL3gyM88H2dxQN2tY5EbB3h1sZwJuNGwzYRbNzPs2VsSCS4Yk",
  "key11": "5f1yk5PMA2GgocwazhHWFgi9sM4yf85c6j6y2cKeASkFdLFgwBWEeWfykTRBWXVTnQne8tufRdj5wTDwtUkpSDWX",
  "key12": "39QDpAUsXftaaQQTpox73A32zFwe4YHj1c3QLKQ9eRwmZyTpShxuet829mTNnSuDok8DBbhHYiRCiM4nW4G8ZSdG",
  "key13": "4T48EFtX6gZaNaHQe5mryWP711iPdWkTmVjzGA2sCbfqpzMczn7nbBpUZDneytttPYvXyGdepajitrNxi8erFfBs",
  "key14": "2N6jZ2TN7jeQCpQmog9iF84pm5jnEqHx8Jois5FN6Wr7DHecoF1AA7LQ9e3VuP7zAcwsJnyVBr2UaKKmM77LWuGt",
  "key15": "5uZRVHv6zyQyDGa4stCEa5wL1iHix2nsyQtYT3w4CUxXZmHQzDMF7SQ7aPRADq6W4yrqc93y2i3o611nHdgqSrbB",
  "key16": "5PN2LiyNhVXCEDxAN5EFjtEEAB1kArJjxPzthaWRzNSZsKJDKZXdSSudg7uK5rbJEjwknuhXAM29KFpsrbeZjhUL",
  "key17": "PeKPWX2rkC5ReFyC6u3ZKPJio29iFDrTzexVr5CoQy9vDQLHt9rKfeXcsSQH483sK6QsUW3PDaie3YozP8CLqJo",
  "key18": "4S1S362J9SXvdH1Z1NhwqmAnELgKbABexz35rbXETjJwW6b5UAwHCB13gsknnJLD4LExEmifWcoKQ6DQu8cp1ViT",
  "key19": "5op2qAJLdeM4GwbHGxfxKjrbyMWpamdo6XtgqSFbt9Q3pE138ykq48iMBfTtkD8wpD5emB23FDnWNfUkkJ9Zc6S1",
  "key20": "2KYEf8z4eC9Lk3e2HmHhcizXARHhs5sUDg2eWwFTbHDa1JbE1pWRSBautbmvhKgVkWcDjJgDEaTNYS7yrQZQ9c4a",
  "key21": "5e2WWsaJgaP9yS9FWRKerLUHMaaQw42RPsc18oRzG42V7MwAYbxu9mAQbaiAnsCT3q7Gpq8S4NSqn7Xuk1HJKHTz",
  "key22": "5rGbqaFDcEdHtosyUh6MvGaUC2qoSQDGQng2z3PcUt55E9yBUeFpeNdUAM1RRExM7soA5mR3ud7PGV6tH6xatBit",
  "key23": "4cErQwt9mKKy8ZLSZj7gkBrDapyEyRM3u35PSLPQSM2Jvkq6HdEASfbQQMpcavNxBFtLBkrCBV5JWTYhoqxTarcs",
  "key24": "Y6SxZcRhE13GBZNVFxcjYx6eZppr5cXQB7DBqwiRdd63ewkHzHJ6k4i2jbRrMzEdzarx54ZLwPVaECJGamdofKh",
  "key25": "2LSrfMc7ZCzxEb4T5sFCv8yydJc1PXLT6oEYYt972xt3xBnB2Jcus7i8MiL3PutzpAGFuU7BKmxGWCd6U4w7bz8x",
  "key26": "3eZ9cdLA6qGWaSepW2drKmYLJVXiUo23Yi3UFN8xtNzuqf3CYK2DFLgsmwy5Pii6Pyczen2zbFh3SB3tar3r3nkY",
  "key27": "TAcBLGVCucEvgpHVU8YT2B5Jc554xnPuQnKa77zjsFGTpJbb9ynrVTo7zRJb3sc8QuZAYRyjn9HJ2AKcPfzUwDq",
  "key28": "2jJ1x6PRUWxiRKfNJQdVW6wXXkNUZm7FdxiaS1BRQ3Ff8U3U6MvzXsATgjvToNzg3PFQAWqfCC4aRq1y7naG99Mf",
  "key29": "2vyaCGpTNRNoPa7qNyAZeqac5HfCrVs5VzrYAFscwmmZHpwsFThVzQQBXisevEjziYD9znD97cXc9xQ6Lr6ySzEb",
  "key30": "4JwyZEcxBLhT6N4wfJpDrLRscQkDuat9Rv32RKzqVjDtXdzVisQtLktDeLYX9QLeKS1kU25uCu3duTgGNtGfVpt7",
  "key31": "4a9aZ87vyP4PzTwdQ1Eox4DAYCCVQmeeP9ZQecXfVhSfoduKEaLRkRvbA5qZRq59HqNLEuCGQZUT55asxXG4MCfv",
  "key32": "2qgADVKTFVcrxe1NvW6x8HEU7xWuukz5TBPp2D3fgFAz8WyvUrRP6xhoqMdZT8SHibt9Gyb33DENqqKUUJ3SCdKM",
  "key33": "2wTnmDtS1kJhfM2WqSRyVpLnavE1gd8hDM6ZJ7E3SJRMADLtHnHpRaYjV9b3d3r2qq6havxHKhtyTqVn7nqdKYzK",
  "key34": "3YjBdEY8fgeTYpH4umWBuee2UKRd24XXhpGMiJZPEgD7Z7wC7ecowqM9CBZKYpqnU5QdLCPje5gN6HhWT28fBUaZ",
  "key35": "NCp1T53fEr1JHdLgXprcNj1QyA8zT7EmYjCYExqpM8B3kQHxWvfU2wa8iMQAWsQ4Nx442EQK9CFHt2DHA15Giib",
  "key36": "i8VGdiaNTH7NhyedtsRvycrpSn8WBj6gGiJP6KbZqqLES8gHWx3cTeruPiv2s8qFpZ1UiyN2VfHBUW7gBKaaD4X",
  "key37": "48kR6EdetAHUnxeJhXrdFDTNA85UmLAcNrJ95vC5ra7Ms3KSkEdQ7J53fxsQg4bAPHDLmeTmEjn1EVGTMvnrcu3g",
  "key38": "3ZCxgid3nzxmb4JDEWBZ4BTMArivFsjBKLA4iBXjPAC2CT2kdHHj2GvvWC95Nb6VKYPoUJ4odyZquCgv7aNH7DWW",
  "key39": "4yjH6rg4ZKuwNKfBgb2bhbe4sDUi3AqWiTvSfa779GmNyiNtzq91kfg3Yw3xxN9gkZkcDKWWmP56DxFmnJdgZird",
  "key40": "4AbyyDxP4bM3VTyhDkMovwTGkJiMxNKydGj7rxxLUWt7vfWwjnuELjm2mmKBCVjmQiJoYKixXC7KbwypZY6nbBsi",
  "key41": "2TaGJQ5r9UTCEu4vf3bu6ALmbQDAGvqmkjJdVZnA5QExck25QVXCoMbxKuTWGFhoBLjidNG9dyVt7JAuZJJZzYdj",
  "key42": "2ixXzf2XSMNVmu2GKyYMpAEkJBRKRBhR66CYBt99eokbwLJRpyf9omagJVnTn3brq2rRUn9CjSGC7jxh1tPewvpY",
  "key43": "5mqsavfqknq8xQYK3wnjav8ezkoiEp4FE6sTpXmNhGyByjpxFAkYCJSv8cwJWhT6e8SV83BZRzpX4apcmhA4v79M",
  "key44": "2FzC5ArgwnqQzwpHDC22R4o3wyenGsm32pUDfEMpD9EqS1ngZixHkiqNU8BjE4DJoS1rWA1qdLfZYMGjRM6KVL8U",
  "key45": "67QXVLRxs7k8PmPfFScjqGMatM6MFSsp85khXFHCMhzNBmEFMcjMu11syLqgu1pJrPgSEbyCQWcVCkcNRjG9FxUa",
  "key46": "41yTDXJbEhze8Ptzj6qpEWPZUgL7R3EjJwe5k4GS9RC96dALNuvFvqX3aNJtR1UtcuUvLHxKceaxoPgTB4xByurE",
  "key47": "5AhQrv9BGap3UddGVniSBA43QqLq8rhx8bTuyXRgHVaEkfjU947LtqZ7MP3Ht5oHkJNVfpth8gHJoJdTKt29qBqj"
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
