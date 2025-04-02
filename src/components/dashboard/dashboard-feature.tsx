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
    "Q6KGNA7vuAR6HvkAEt8wiY5q5eFuhRxQMKcDaCQ6FbLNC65cqcwfDoynwoCsGq5RtoUcMRpGm7FU8PdYExJdtNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YgTq1rVgLDH7gK2phqmZ7bb9R7epyGn4qKtXJj8TBwop7qqKK5UayKH3zGmhQjocHqjLD54rL9bAyZ9sF2Hc9Bp",
  "key1": "5YZeVEE3ozvB4fxBgvZR1YP68xtHV2jGsPu3g5ddvXem5DM2VSVUB5sW9GYsB6bM2rsqnyWVbCSbZpiY9otMemX4",
  "key2": "473eQ4YQPFhLzXHnkUGjNWXjmws2XL7WJBHXAkFDQaUuw8gxGJsjVsYVCfeFWDfHDpMaa2fGYD1zX2sLUwXTniZY",
  "key3": "4EdCsrRqLDVAU2rHAt6PTwPLnPuMcQEc6gJtoPHN6qcpQYYjeag6mxWPYuHnqdFUxHK6KeXfD8WjHXqCgibcgnLQ",
  "key4": "5skGTjfX31DnayKy6SojoN9DFBAB7hVeYgjswbRhUbNyYjk6pHLXX8D1YG4QwEGjASFtSc7t5kbEa881qi1qvXwT",
  "key5": "4dVcQDrzvKtt2KWE6Mo9a3ZQFWYsMAMVjRfjRF3YHWkd9SYz3VBpuw5aAhvAZyw4EaQCeqCj1UmCHFYLBoK8xiK5",
  "key6": "5bcnNhp7vLUxR2aZKu81HSfQKqs8Sz8NPP69hgcJ22smEwTyqEhHAW3BjuYCsZ246HhqWZcURQmQmzjAajnRiUhh",
  "key7": "49Ka98nTnEKeDNTmUGgUmqMKehbc8M2fSyiE8BPssU3rLNS6KfjbYe7AdGB5bhzeXgcwCT3sE8gBdYqfG6NynJqf",
  "key8": "aLwDzfcxWUuzuLW3h2CYV3w4KqPmqnAMrqSoHcUerfid4tdvLHhUG3poF6rzNheVTcCvRHQfNGTCekUkGTJ828t",
  "key9": "2o4DBEDg3YhLSUbord5y9zgJvmUKFSiAKnvwqPSGm6ryGSW5o99a9heELVGWqzVKQeiXCYnTKZUicumGe8iwR3ws",
  "key10": "2mUQtemfYkta6dvGTmy2z7y1LZHFQGazXzxm5M2ua6x8DtWkYXDH6fx58vxRSQBHwd8S3qzoBrGFxKVzbgTVaxz3",
  "key11": "sooiEaFF7qchAoSF14Df9PHZgtFSjLyKwneNUCAT5kewrDWnFijBK48AEv9kRK4oBReQFLFWNzREZG9rxJWHUMG",
  "key12": "RPbKeG168PUDm1VbmxZ1xeaX1L668JqPc8LALRHiM5fXdVVekmWEnu7xJeEri5iBndGmwHXZ9nWBo7JQo5mfx4q",
  "key13": "65RTLCNZ9MKVXsqibGLr5cDNiNuMNcTowvzUvt3BKZGKFJ3Neyf9TuSM6fUFMeLZSz3241EaN4t2MHKnEANr45Lh",
  "key14": "5Q8TZn8MQYhhbGpVZgTvsZPz91Rc6dyzkx8qLEyRLWAaNJ4AofysjMhB5PRPYJ4EKTsjDCHi9bTMm414rdZEQzGc",
  "key15": "eyishFCdABGAds5AabHEnm4XnRNyF4Lnxx7m7MsFunfYJ931yrQi5DjPVjzBJaTzHEat966sFT9uBEaSad4WZzA",
  "key16": "NFfNLiFL53fgy7nMd7yia9LFfKJbFGGnnnxFE59BqGvuD6hAMTwXL12gE5iu2KStfN6JRgdoEsAkvV6BiVWZ3bh",
  "key17": "2d63fcdeafnTjyXACmUaozZUcEx6RfrQWZ8B6XdCWKfsFrkBKMi51oCzBDyKQsjLa9saXN8dcKoawPK2AEygiUXP",
  "key18": "2HGXvFW5hG47XpjuktrGCUDLTrRBexkWYcKyuksM3AsgU6iizEoBNSXBFPgHWrpnZj7XoAL7Qke6PL9Sa7XW8rKG",
  "key19": "2RBhaPy1rPgVjBSkqfqdfQ1RstWP2P6XUKRSsDjfmPkWSRRiWP46C7YjkKbcLFqBSgqg8MwXCvYFSBKo9kDDUJfF",
  "key20": "4hWUvVKGV6gSXifrqfq2oyvYWJioW5sTFNcshd4Q4edW76smYT4nJ5E7dvEboeWv7vttBUvfBYPbAWUYvRAoJhZQ",
  "key21": "2saSBfRUnCXvzsgctAy1C2aNoy9dwRWknweUfgviynzwCWbenLb4TjMQNikLw38Gt2wZDetLv54eZd2YpvfKTjiE",
  "key22": "4U2saQpyE2sHi654sTAc2LjAoBYdfuNg1K38ymsTTcHmfL5WQw1eS8CAzFQw1kVrS5rr2aTiaKxnJWj9eyDS8yet",
  "key23": "3kQebx6gRS181AikABCooKxnWncewXpxEtbB3m4kdEqyVawnCkHng3GWSbYG7de3HXezwbLDtC98pFEPr8JU71at",
  "key24": "5V6natF6gquARUY7f646p7tibHHASnFFqrrNx3tuJEzkUdmACaqmgwsp9YXtzKcYJMzqhu9BnDhq9fWQbY7bVcLe",
  "key25": "VhsjQny5TKEm51usc4exe9DxTNzqFuNh2egKKhAU7CBNQNkv8LzHJkdyCvRGa3AAoPnR8R8gU1pTN98nGMpqAvc",
  "key26": "dFvNw762drBT8hKNF7GcpzpRJiGxGXhacv1wpLd2dZQPeqH5j7C7pjGp326ouAdZ9T21nnFVB9edy428GR9pJKM",
  "key27": "2L3ZdUNyjxeEFsxmSdXeZ4qfKvXgzqZ6xzbMUoD6DSEW9HoceoMm8XBSD3yZa1hWCTv8e7M1vzkqkQSvyecRfsxD",
  "key28": "5KrctmbS7hzeboNApwb2aDtnLv6y3PBhdomgJ5eqkNcVK6Tm3HYc7AU7s1xDiiTmazeSJPkBn6Ws9MJzT4Sk5Lrz",
  "key29": "Qt5nykyrgT4Deka3g71wQSWRSsfqbGMLewcgRcWYSQP9TjYFy5xe41n6s2HhYyX5y1k9ZAAsANFeWreZWycc32c",
  "key30": "4dMJoYPGV1WE2SsqXMNeBoNoPJAU9cYkU6ZYKZBPYNVk5wdUHkDqKM3CtNMy72YFQHmLwJeDmiYfHo4hBEGEAShf",
  "key31": "5TyRkFTfG6ZkFXGoziX2ski6d8xuMnpXcg3DjsLu99oA8yc2CMax4mpL2driTjsjxe8i6HCPiuBKJ2tmmeedK3de",
  "key32": "uAZXuq8y9iFZ9aaF9zEFDxqfsCbWtEAmYv7KKdypFu7bEd8ezSYr2qN8VmDa4VXqTR2aP1na4LRjaTMk7q4sTmr",
  "key33": "2BqQY8tCsVKgcDBbmMpcwhhXts6quXw12mcS8KoFBRzpFxSUCCdV1SdmSuT8sNWHcn6Wq73AgTrLVjFr1Zqk1jHV",
  "key34": "3kktbCneJ1QvSPRha7tfN6oBHvm825gYmEdpE96NWPpHapotXJicbWq8t8jNvfRqCYFDkWbVYaBVyGvXV1h8Bbwi",
  "key35": "36pNsbjmyU7EQbBYRHNqNr1YGTajeD4HAbbBQGkaMHpGDiicxLWnsXKwTSsasyC3yqrTiYDeh9ppGV7rYT86QW4v",
  "key36": "Wo29HohG7G5Vv8T3B1aP4jLUpaT513dR3uFu3LFRTsoitqNAtbAbR2zQ6jJdQ9jEewRdcLD1TMB3QzP1JJiBibR",
  "key37": "2q26W3j1kxMVcwhHagMM7tn32QkVcKjvVYvWdpyMbjcEEyyLjfDhs2BSst5veYCdJxSkdK7NhExk5oePSCZUFsVd",
  "key38": "BEs3jzGDw2NJy4XCXte9sQPetAQK4ACTdsTcqKF2CSueFtMmnfQrPbdvs8p8G8Si5ocZkty6QeF33UzaHEAayTv",
  "key39": "2rTVtWL6GkoENUS11CA4qhcRCmDh9emVkjTojfZV4brpD158qsrYwcTzSrmerS3rGiwQuPKgKD8ie5i639JoWzUs",
  "key40": "5YRi1KggLpXHcHdodsDJWWGtVopnrrPyVMpLNvvsMRRwQq2GCmh6LuKi75abs7UXdFcCowYXK2R4TdbXNAxLvsbC",
  "key41": "4ZwYxYf25BzgazcQrbsFyP6Qk3U8BqBabrJaTSPDxcdrXcQkR22FSQF4Ch7pDGZx8xz4Lt2PTXxfpDswtm7ujZPA"
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
