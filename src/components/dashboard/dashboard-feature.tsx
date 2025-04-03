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
    "3KDyJdb6AEpKXqVfiPoAsFCkkXvcMn33hwN62Skk68ZpDnX2NhiLqiB3WmLR41cqhzXMMNvNP4Lc4sjZyWi4B6zd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ufUbHd8iPBDmtvLJ51ht7iaD5Laaowf7xF2XLHDgsEswH4gn5ufbSL9Yq3Rj7H16McyugsWMDSX1JoMxrsbaba",
  "key1": "57SP8fGtA48PcnYt6F7N9bFfGsQdrDiArMrBMSTLpvLmEfqgDwZ9KdyeGknvqzdoWdtFRfPazeVLKEqLHfjPsPrN",
  "key2": "3vW7XD86cUkd3iEsj1jULUD2CQG1WHG1LRcDiEaMNu2ZoP9t2HWR4yt1bavKP4zxQ5xxQhSjtmN3KTZFzpiNU1Jo",
  "key3": "j7nGwKPF64A6mZVsVFMxsrakEXACbyGwEEqfxb3SkQ8hRTPrE9mk2cMtNdSGLHJe2xrscP6bTEGsLgYejDuZmeN",
  "key4": "4LQH1DVSJmYnt3u5ukaiFFrKFpineBwF8x9qwMMHYqoAWMG51H6ygeCuBmUrUrim9ox7jjm5ugoQQYa59AaMpacn",
  "key5": "5zSD2XRKZudqz5FFyimgRxEvBjbY9cQLvpMF3Nw3KtMmanhTem2TrbaaKe8ehoumJRsd3VQf1Yo27ngMdFk9SWzD",
  "key6": "neF6ihC38EPsqcT95V65vWCB6YH7qbtPuxtL5vp49z3985sCdzeSoCREXhYNqpqZFt2YQE1KgSosdMYb1RrqT9q",
  "key7": "3wgaZfZGmHnScMTSUfGDvTRxjDfctegLCsAd8HqXHVkiVZPocnWavLwD5BTvpyEBkggGKD3rM2RohrYyDtSxs7bc",
  "key8": "4qprTGLDA3YREJX7zGGGgfwv73DDDVAjMnrwTvGGqbht4xkE9kRKFtpCBLzLV32YGj1HQMu3CpkxWkoVZLhQah2Z",
  "key9": "MU8FMyo7ZtyjQcjxP16qDcvCqS7W3BBzhdVND7tkDjpBut6XHU9si8tDENB6DgYNVKucRxJ9QeUQ8HApb91YaKk",
  "key10": "3ge1m7Z9JnNqV6JXZGSmSj59j9H7wFE5s1MSTBAzEFbufJLRMdcfuyGokH6NTptsEa8p4Gf2nvJs1d1H6wLYRqsR",
  "key11": "517eeQDmCPVbW6iWna8yKVKrKy9VM7iGAjiCP7xYD5RTxScofvm3mhamvvAj9Yndi2kaE6PoRfsFzaas8ibAZ3sT",
  "key12": "39v8Dv5a12bR7cXTSVvhE4skxWoajC9zGzFgY4VTTEuvc6w8FoyuYaY1epKDEy2XWRY9mCbjov6tpL6CPNFcEkrj",
  "key13": "4frs3BXHSZ1dg8CAqcB3U5Qgrhby4gsxyWHXknKkJZsHp9oDQLm38PWkT9xYro6RUpeuZUthMWcSYzZJcrrLCmkU",
  "key14": "hF8LtTC6i3U8ZcSMU8fRqJDczVdg5hJgKvKC4JfkwBHRsSaJJ5mMPVUEFTpduFHCn3AUMcXZrCrS73YXBfNUJwg",
  "key15": "3gGbFWmksuWF3S3aLVVrjfR9J4WRnnP8ZCZKM2JbERcVwnQzeUuMfU8GYH13dqTjxRLSPzLtbnNJpoCjhWaHDkGk",
  "key16": "4RxR4GDSLAAfSPYi3vaz3XPTPKr3EZgsf4goVUVX27BLnjFFLjpaQeHB8PNhWWHRMF121o9h8QdB2vic1aKD9C1f",
  "key17": "5ifAFq4qnz9nzCNjHM2eKmAeTYqRj5nXxZzsS4j7tvyXwm9WVBwXyVxsF8M4LSCpSViok1Vh7NYqudKYEA7ZwTmY",
  "key18": "63yTJwwyrW6CvfdQA4X7VKeehUqfHrm47RTeSmQVY4oQ3PUPoQKtAyhM5T9awjxnpLe3YEvZZiZLWXH9GtjWYjrX",
  "key19": "FLuVuscE1JaJXUXuAdyPVJrxCDxCXZ3NSyA2bVyyCZkQ9VEbdSRRSNLwpgb3hC2MBP3ejwCfXxkVFiczPF6dBvg",
  "key20": "QuqU5tbJLFdJGkck8AhFAfToXMghmDs1kJmjkFpZXwAiJLW4MFV7YuvVXrpD2oCCgh8CjR59yoGb6Zhv6SHwsD3",
  "key21": "4TrZFt87zxHRysddC8JzRdQL9qKVtE3JCfMtssXN5DYoUXdZ5aAqHRygg4agFvWtCGtMdHdXx4m5pR4RistTv7G9",
  "key22": "47T1aEswMeAXZoGhJeKYGE3jCiBY1PPQjpQEvF1i4zKY67LGqow6jBBXX8EPzQV3jDGgvmaRKdiHyDP9qdrxnfNE",
  "key23": "5CMwdm28GLHwx7ZVF7rRecwFqBiQ55Yp9cn2E41y8d6iS9TrGqN3AWtS46T4WchTxPj8RBXCbPxqu3eTbjRDkryb",
  "key24": "4EBsN9ocDwsrWDCWCdHZEpfsbBsZsvhZyterdvsWd1ucpxeDHWrWf9Vjap22dXWqt83z8frhxsmGho5stVWVBLLk",
  "key25": "3G6YfQyMTxohsWnvssnXmnU8sdCEWNKeMP2tPxmpQ7WGwavjNHsNvuAYrYgnmJwWjMTvnJYedVEPPpWgawd8heat",
  "key26": "4VzonFKdy3rWniUuKraYkMZqmXFgrgDcMh2yPMarAM9GPdSvNz8wF1q7poaFa7rNg2nemtNwwn7yhrtwrfVWohqu",
  "key27": "56Z7BtRwQTU8715CU8dEpw9hDqqZ5uDyHNYt9HWf3T4kBrsq1U41gVyZLES8QBNnrv17QFjTjPKyetNADdkcevij",
  "key28": "2vnECF93P4HjNf3Bre2dfpPwpzHD2DsDCtkFJSzHRdxUNTzv2mxv9NUaphdBrDWF53W1AZmPaScSot7UMz7tpuUD",
  "key29": "4gXhkzHpxm8BghDjRzE1gshBBQXoZ27p5XcJkydyWC4eCoxM13ebb2WfMJfPLjqcrAr7o7iy385neHjyTFkGWUv4",
  "key30": "4TZ7YLGXwF4UXQppqBGL7Xfy4Jkj2TapmBwfEeirYKG6DqQKAuv3ZGKtu2HRp1EUwoyQEW6htaighbLFzRV2LpS2",
  "key31": "DcpenTRDDyuhYJ9jWfwi9TE5fa6zmuWPLgG1cpmNEQWULQ8Vf8VAthkDJnQPU9mNfAUCRnHxyij2GCt47xf5HEQ",
  "key32": "5cTpz4b9v7Rx64JNpA6EtYi26BjBeG7V3HmpKZrrbCgVRDQC4tYCfgJyXxhP8akVt3jAM3cyq4Np2Eo6qVNcYJhT",
  "key33": "5qMViCXHuGW9kufk3T55zWqwPkyELVmE4AuNPk4Eh81Kqg3gJ9rmr6JLB8JEkpwYeeayww7JvfyQ6RQ9rbC7pP61",
  "key34": "5dgd61wPHCyxFWPuy5jSeJ5y72EcVgVkLW9zC35JXBp26gwMv9sBwNc2AC1nx6VZEooGBdf4EJVAq6HSJd5b2gA2",
  "key35": "2cmajuH9SKv7fWFD22X2Vc6w9ybuKUd3oLgHoLmfH6Chse3GH5mLirkw8So4tM36vwJJnRQ3qjBXwn3jsRgV9Mas"
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
