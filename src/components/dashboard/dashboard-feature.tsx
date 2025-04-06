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
    "2FvPMB1pyU3gGdr5oKmwkjGYTWeKtpLHPZupCQ1xu2qLoyrs1iZ2E25Lyw4VuZqgkTqbA755vU2LnmBgwRcefz6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wejrJgVNpuULuCJxNXL5eYEjvxjekk3HCdEyCL1UEJ3nikDx2nC8snVYdeGNwT1GRR8bDKvLYUib3WBcb2GoEz3",
  "key1": "5MuUcsR58JteVMQTccndYYecHZJhjkiwsBLtNQMcoA3tinyeUfMPPYS9sQrYyVo6s7rojYbnUQRsN9dpS1Mdmmv1",
  "key2": "3VhNuB2UVvK4JAv2XAueJutcsWb1WqnaT6tFw2EfQT1U3JHHWFG1aMW1NTBkpr1JimMVLdNV6MtL8uaHfYJfANKp",
  "key3": "3d76dswAKnJBrHfpoFSW1WhNhiZM1z4kUHgzHE2wmQRunX8mBpGcmx1cnwPbDuAwwRracqHukL5y4tFCZU21sizX",
  "key4": "5MCgF8TAJsppDQVNGMHUsiEj3dxPPYgcCuxkvTocyBMxzfyi3oPf4U8JsS1RvnDhedNfEEunneJedAYwznbhZuDB",
  "key5": "ry4WyFxnHKTWwwp4w2Ybs6gm7eTuFNCvfuoHcMsb7R3dS2Szp16qXK8ocJYSdjWrTELQmn48twFfoBh7R9E5yQf",
  "key6": "5W8xTZ4Q62qPuvGWR92q7vTh8wsk6gwjXuayW5p7Vi8N5cQRTxnjKCMPt1A4b3x3bYohNVsEoqWhCyn4CryVYCqM",
  "key7": "2vp2vYKnTrrKAbhKU6hvn9Qzztue4PkibU4mzQvDmZcFnKesL8dEnhdSP6Dc1Am4eGTRrBTwE91Qw23EoM2Q2N3Y",
  "key8": "E72GGXFpViT4tG8jzyHfhW2W1JrQ8hgGBTmQHjWh2zPQmd6rLoBd2FSwfPSn6WemDaQY1GZBko61MLC8DJfEVk1",
  "key9": "2uFDd5wAe8y4A3xQgDoDiVdfXxxvc7RuHBFHkL6KiKeERoFoFbE7rgcjqigwnWTu4QHaXKEYCAvhj3h1cjVcdhPF",
  "key10": "VixG3khRXz2YLoS1aVhXELcJPrQDz85AAJbEQLZfqMfq3cpSxBZZpXTbWanXTrEfhZ2BJk8zyficzKvzgVuaDuY",
  "key11": "2v2q3hBfPe3bCh9Ly2FC9XwNkewwEDJinUEFQD1DT6wNVaKbYyox5UELzkwtP6WL2Sz2iigj5Mj1gmFgwJXXYC8f",
  "key12": "2MfsgCJYqgXCvfmvRrss3xCSc4vXEJE79kSmcC5oy5drgC1qT26Ex5Hrwh3AVaZ623Y3GS31HyQtugjWENbQ4jq3",
  "key13": "5sQyKQjyYFpVMsCd74AgCMUZGQTtZoLtHhh7VYiv7B83XGYLAxuiaSUif1EcK29pzmuupUbewzeev51i6p4pLrdd",
  "key14": "66XsS1yTqqFTGjmw5DCxuXoAMrtgvcP5c5QWVtexg2BerotSq33EVC14iVQM3uFJBRDH5CBjh7iSe4iNKitZ1oJX",
  "key15": "5cvMc7LSDAvAHHW2CHgYss1LyouFycLrFKSjTisKCHYJFGrygXeTVQRvVYE23Z4ydauTzYk89Jau9YB5rHGdoJHx",
  "key16": "4yrmcJC2ZMSDUGr4ShuQhqFVQKoBtHZ1m1XEzW3P7YUZjb61q5f9U2Erc4WvhUXG3eqdrJAuwXdzA4wsz7Loww29",
  "key17": "4mfQE57tgF2fDZpwVttT2RR75Dgcu1bfWzxYubKTGLd5xFKTfjXaBpXbeyRvMiWZWFvsGZkxucx3gdNr4oMM4K5g",
  "key18": "2rhwoKQzQDjTpMxEhFTbANWFPnqwpoN9zsgA6dxxnbBkHKV1ZksPZQo8o8qxx1rcK944LSXqvqkAh7ygGeXUwgya",
  "key19": "5SwqNwvwy3khR8cGmBg3rsEsLppbFBbDqMNMrbfKunLuofXqvaJsUP7yFKNtXAvgnUu7vdvyoWrYATRuPJbn2TQu",
  "key20": "GdvWMGiBQEfg8yg7EGUaTnz9rw5R994dnBak3iRXYFEE2uAiektx6dNogQhgmKnvUc967sJqTGm6wA4onKweYVo",
  "key21": "36eEDcy2Gte8tyxfB5tzCxvvx5G7HNnJEfp3AJAHa85YdPbKDCdwpJLAqyvrFpmrtqRnMFbq1uPzyfaM1msLFJ9z",
  "key22": "3oBaLhBJpEHtMgss51dofKRnqWD8g7MnFpCyE6fedJeU7a2krqh5XBYhsHFtwAZhBe7NL2oq1cfxcsUxFr1ki3S9",
  "key23": "4BHMAZKQWQDcKTAjTMoSGszax8DbiC4mADWMLYuY39t7kMQaK7S3CxEAGW5GGJN1HAFogwQ4CEph3AVut1rcofbj",
  "key24": "3HmhEBj2HAgF5FuQ1yKUbBDkM1raSx8XgXqG88gAa4CY8sEuWwzUYo3HQu1pE6Se17nNTmawmGwi8MyZNzyrUFLD",
  "key25": "4PA47YSYj8Gj87odkk5Kdh3xewcN8MvKBS84VJhUevVbA6S5BeeVcnf2WKQctUcq32X6azR7igSZP6R5iPjzYnk1",
  "key26": "5neF51XsCYo6Vnix6bGDb5TFHHNJrTNqgMXQi7JE8aCDx65XtdcG4tdAUunMf7TC8C7xJ7X5YthZPdMuRunQ72St",
  "key27": "5N1Anfx6iNsV5s5Twnw9givahBPVLSPsE7h1QDEqCw4wpfpEQE2HLU3yXbgHU6LXAeqXFMRHBKfptedn7SJr6VdV",
  "key28": "641uDc796ZCK5A1Q45H4SXhhpYY7uve4q84ZvmKVJFTdemCr9DsHFrhRvK1oCCy3SKbf3zjTSFvzoHjLkMShR1AW",
  "key29": "4WL4QcvaM4Zvdj11i91EAhG9b62LZWYiSwYQAjCFmBzcz2bbnV3pVBU3YiihrjwAajE5QGSoXfEEcREgHbGjzsrY",
  "key30": "5tnH3GGnvTwXNgCfZWM5h6xJmcAcbfxQXAygCPb4MRCdrKWpxGScqWSgtWLYpuskSKjXBFY6N5bbW9LJS5cL5UJZ",
  "key31": "4Gee6b9FNAEX7469XZgFNPXqRduD6JgMeEuPUijXHUxpRzQuTsHPpaHS7n9JrbbDx1MsLGPhfqGdZEzZXMBVNZ83",
  "key32": "4ERKvS4PbxiyeNAMt5oyCSaMQZoA3fqk72rBGFzuW8KpoKcku7h1NJeKK1G2kVjxYTdhvspRu21UeKtcEjsngQPo",
  "key33": "4dczFoJ6UazwM13R4TGwdv24ErBRvTtAfLnKr8xbbjRSg534MR6RvGzfHi9UmWyBhZpE5yPHKYzeqMAuzrX7KuVg",
  "key34": "5k57veLyEebUhNBy6pfFgvcGNKaPtjBZ7km7qGXPtyVhVBqtHai3Pcf3GRMJScvsN25g5m4nXVw47ppDQJKRan5J",
  "key35": "YzdHVzTQDun29Pjgi3abZNWbmcF14jjQx9nEFTcAxhufMxU7bLfeDk7YrpqWasJnkHygcvApf9sPhwqPAdGTqzn",
  "key36": "5j9TAvEjgRuhweSPiawHXfBbcVU8rAx9AGaRDdrqBVoSDUcDKY9C8QdCtHtGjQrM2fnqbLth9tzUVKrmBnpq2L6S",
  "key37": "2ZR7m7aS5ZLe19hhjn6eWxy5NnRuvar2gtCtNWTg7ctCaySp5Zz4LkEGDvAnpjxH6CBpar8BhM4nS5uGvrRneG6o",
  "key38": "pgVdsAYHbyD4DcXWKGj3CHK4fFXzZQ8YfaU4C13cZombCbAS2z9kdQWqb6CdKihn1B3zwNn32FnzRukAbS4rkHS",
  "key39": "VpHL4WmE4pQqdyFszoudZdYgiD4CDNbwfNKugCs1Sunago6ZGtaA8NEg4hGtuCviKv6mVWySiiuu4RZwSQoYR5C",
  "key40": "2LLWTkhnZPx3b59eGGnWPA3ihPEGGqXVs5mZKpLAGRHhUEKgDApMe1GLQaA7UF17ZZAhH3pDW6cfaeJ4aKe1Ngia"
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
