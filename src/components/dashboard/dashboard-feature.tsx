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
    "47pcywNKxD9mAucfCm7euximCgU8bkpscRohPNAz25TLXjJM3VBoSwibWvGxo3cVTfSEX8T6KALuEAS2SYCCZM5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XU42K7GFNTnxTqUUUheECgs22QYBWrk3Q2rBR8PHfsRqhzd3BBCrR4rxXQqGQjAX5N1QNchM4BqDScjvdefbUfp",
  "key1": "25Xzvx3DUb3GCyP1JJaWvRypHY57H7Eit9jYxnh5GC16ZnKd4dD66ttXy6YmKN8AnVCAZnMA9VEWBAABksRWid14",
  "key2": "4BxWceVJhNtXS2NRtVGaqMaazMKCGAsPpbCgczu2bfTU3bJnieC8QDyixMrCwb3yVyV46SUiHKQoD5oYww95orpA",
  "key3": "S1ka4cRoXUL8kXTvYUnTJ2rqiqk5owFzvBoTdZesb4atz3FMHCTBiCnnpwFgjxxr3TmSpsiNZCeNgFLbigjJo4C",
  "key4": "Dpa8bheAywK1cDQEW6V46L78Xcjt18z7xGEeDQzTfk6hgbhkJAmfjBgF6iZLsc9jYjQ17qo5uvrxNoHXPonjvjt",
  "key5": "3W6croPsjwCSWApEYdE3NeRm44vH1kb9kAxvwWb46Trh1d4xYUcDqFyeZ78m6pP9BVFUbUxnnF3qQEz94CmPc1GG",
  "key6": "56MZtbkhkKaKiAR7eQYP5mnLQ41i1LD8muZJXaya4mRLnaUjpv4HKUKBMKN6Z2PDQGTtqAtfSq53Z5E1m9rACHts",
  "key7": "2hF9KSWWBMPWJhDK4G6ynmbEY4Cy9NWbc453qdp3nQS28Q3henvN7dABVp4Uec6Gw6w3QJgjtjHvtXojkLqMRfQG",
  "key8": "49mg8ehjBhvN5qLiEvSk6qnNZjLH7ZEPpquKdUPA7AqK3YjLQiMF73CHqV7JSnKkCihGfa2xfHhVpZqQxLWFb8DA",
  "key9": "4gAxG8tdbLgxcRoEXiM1NnteKFqt5k16eYJisdr1VvzfY2tbvrWX87ogxC7865jS2ZBPL6DNu1wuUe5P54nrkXYz",
  "key10": "22CrPQvV4EhpNVPz7HPKYVRPeNvSWusgq8HyxeyDgBL1N9XtM6MHojG1zs36aXhShRyVjtZTtRhNAXdRrPAWCRjs",
  "key11": "5uzJi57wJhMtyYhKZmoFfW1XLeAMtYoyVofhvxEaG41Z8BZ3KpohQPrdXFUN6BEWwemm6KsWqNDizAY1HqToy44K",
  "key12": "4i9XDceCrgPXGemSpoLH6D4g9TTEwnH2MiWRT9TN8u8xf6xSVG2fSq7iSRBJo5zC8ZdtW9cArhybAoeVG4h4vCxz",
  "key13": "4qoewRhFz5z11Pn4ob3jbugSBxG9uZvN3gz2hS2VMjU6Mk8tQromtzPbYPZhm2FsJjFKiXZbizHGcVrMQeFvkRch",
  "key14": "5bVfiusZH7m9i6Hji56MJb3P3gkhQ5oRbZbMKJHYopLeaZLiXi5rq4SzvyHRfqb1rZ4boDFaoWFe9MHCWX7shves",
  "key15": "2nAoQFNnmkjeQQnEmdnFaMZifU81Ayxyj9wYjb5f4kXhdzHeDrSGzqGzvktrqqTapuEEVbumvUYnnKnavKJrE8NM",
  "key16": "33eqmC1DRLeaX5BxTFKgvkyZ19q1P9MLfudcUs2bkmvms4gEKyLiJuj4U6KFMS1B85PieJbDkaQaJ1RQw1AmJ4s8",
  "key17": "4N8QDv4yAe5oDqtrAz4GYtTs7Fi6Dv8YhgVtrbsiZ4s8owXrrdmRt6PxDfkKnSEXp9gyKrfomKVAkp9xo58GoXM",
  "key18": "MNYawZwTJEL2CRYmKhfzbrCnki1ts4LLEBQhZmW5qJQgmBrYrCDoMp3kTr3ese4U73vYM724hrYLraSgjKjvo2Q",
  "key19": "V39D6rZtswPuCT1D6aSP3btqxaZ7HL5WuzorAysTsEUE2eNjn4LFkMx4cfM9jbFuGryUBWYcX9GMgbFzDW78nsr",
  "key20": "2JGJJ17cpyv8YLmme6fe5cwTFw9xFSC3CquvFFXxERGj1xj6drGcXgAtExEaW49U9XYDDkQHrTkBUXVLzWrAUuLF",
  "key21": "56nZnf9fvUJmTbvPCjQMXTJEQdJQuZfSyuorbA1QgKr7NhQUskg7HKnQFd813rBZcmdSFCGdoeBTkVKUnBrdfP2z",
  "key22": "2rndmp6Mfz3pgMTcWb64uF49vF9Tf5DvLM3fYNRbr2ovHgPMHsUc7jNTxHaHRNaUA6BXS3tBCb3oxKPT2YZzr4Yu",
  "key23": "2u2J4t5g1Lr8Df813cvUjbgpb6D3uhNb8j8CXLpdGXSGERJszhojddLX4Jr8SiTzXFWnrr5zDtLiR84o1bBMWhkR",
  "key24": "oe9tsbYmzyrHdcn5UGsY7mf2jwUvvuAhWX9yRdBAh9YS4QErwN1FCcYrdXKNxdpMkZHUvBn33AGC9NL5bHj9iZa",
  "key25": "3MYUFGxTqq1zN1kFPYDcV37cDLqH4WHxbwCJahCxyWBXtvK6d3kWhNqi9HsHUgk13Fagz3vGyAWqwVo955ec2oiA",
  "key26": "4qYQsWQcKFSxA8KbzeQDNFFJuoCvZRG7EBfSQs4iVfgHDrmVMipz6d6UEzgBFtyorof1auex2nFTR6Nmf6sXGkgG",
  "key27": "4SHbhqDUnRXGdRscmWNjgSi1V6rWp87ZrawRL4toBXDUcR2tC7CtSTAtYNYTWtz9yuQv2V1a6vtZhETCftAWDQcp",
  "key28": "35w8DaHeGAVoQdgadWztpuoQWVLyo5dmAEAm7FwnW2wT9kRrYagFu2KHGQByWWPeL7HFYfeYChGxb4QHs1v4KJyA",
  "key29": "5AcyD9Vatmo1mTZG5MnmjjtuzAHMUkLdR5KBkdXpHNaeGZLAQ1ZMZUaWgDqL4oatBkSAtbZBoJs3cbduN47XgHrA",
  "key30": "45yKmWMgdTczSiQesCWJ5RnLpa1rGwCNiBEWqVJUXM9iNXWhx3HvKpujbDUCGFsVWc74WMReNnW3q9XbkR4RdF4a",
  "key31": "2xabxBK1n21xGYCx3LfarrqRESNaFEzhkPNjZ6Z6oCX8TFMwpxnvFuW2PnNvyX5Tk3GHGpCShpCXXcm9itbjvCso",
  "key32": "46U22xKaE8Jxbn7KAikJbLK9eU3vpSuYmQCtCMciunu9UvjrGG2KsrABFKyGwTPyFWZwZRKdNxypFm7vSDCVyJH8",
  "key33": "3L4Ymigd8DVYAxy88borbAY9btXh3PxAs3P6HEKzF9GP2Ag43k89NPrskfn1JCabzbjdszgi12E1D8JKxAUPeMwo",
  "key34": "WWEhphu2wVep6btnAgHNL2MXpGwSTCw1CkyS6UNE6rroeDvQVJrMsMjfHfEyt535J6ZfseV4nSfLPrcWNbuuPBP",
  "key35": "3CzpZXmaoThx2cwoVxxCXeZbYg1iSkZ4qhcFkeR2vW3Jdxizt6XcHYQfLvHLdT2PEbKzY3oYQFyoEkR55KvtMix7",
  "key36": "2qLJRL9Z2uqwjuLwSahrs5bmkUN7BmpiRze3vsT1nrwygHa8mEXH6RUiMoczkQdXroNtynHBZHrfNYxSgdmYW9Cf",
  "key37": "23u8yRneFyyrKHJafZJq2ifjcXQkJcBv6DArprRzKa33PKCM1HxSZoqL6ECFNTuu6pqnuGAA9XUhUPrjwixbsXf3",
  "key38": "SK6rR86m25j24VKUgZ9oCR3xfbqenPPJwwYbc2BabM8D245vVRGwCtKTznrwDifotkAiMWZwQzbfSce4XRWhLSV",
  "key39": "5yY8ubrM1GMgGYXTZL9Htj5saSytR7GsewokReHaVnb9z4ybgFUp1fZrwLK5WAn37QNyuDJL4GLjnSiLTkB7qirs",
  "key40": "2caSvF8TD2s51z8MJrE18Zc4T7xBUMiQXij71wgVKeETTxwdtjAit6ngCQJufB8A3xpCikFWX7fcsMxqgwBLwEUN",
  "key41": "5Q1k6HFDkYioXRYYBzDpfkPPCAbStVf8QzDMqeg3t1uhw7FAd6U3EYkKY7dybzmibEiCwq5o3vARuuqm6PpYUuHW",
  "key42": "2V781trYMRu1BahQGLW7RPJZRDnnjkBFZwVQ32GzpNbvNg7qJa3jwUyHWXCtbXmVRf46zf3CDPf4dLn2RE3tCs82",
  "key43": "5vyJoUuF2nPjWRYC4i3fej5bsCvyWWZc1MhSzRfQAfLmdSTAnucqAcDu74hXPCv3VeZKrUxhNH83cUPSNRndaY4F",
  "key44": "4FRKBrxkZThnVLB56iw9ZJSC7xu2YW3ND39b55mgmSfQBYdYtKVg4cn3Dvsmc5bhVJ4Ma6pCXPKwE7FdCxA8ye8X",
  "key45": "5yWcjtn1iFJVNT2g2YAaoVAmebiPg3zHcqhqb1BossQXQ1yoeAjnYfD281usV8PUCEGiMz3w439KkuVejP7fZiDv",
  "key46": "48YTWJsWptKjS9GBeYDBDtTYJLBRwmtU4y1Qzf7XW4gSmST6dniwCqbq4oSqErxiP99RPUdCd5sdeFhXRu5bfHup"
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
