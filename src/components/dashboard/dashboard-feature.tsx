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
    "muZDtjMXYYi4urq9Z6nr3PvMGpr9W937eFokiAqQByGKhGpP9ZFcHEz25B9KzzVWCsF4oVhisQe5fHaVYYZNAYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYpZJKrvX8UPPEfEyKKH9MPrAPZrEG6ZJKtyLbqGuPWtmKGnxkr1eWuAxkDRgxipjkqGoYJAYrnphTHb3JHVXoZ",
  "key1": "5JKmpTnW4pkUAykVT9NXhM8NSgcujWtCirwu87ZPtC1s6f9dWm4kM86M5e4SZebXsFns4NgwLsvEFjiqAK5qg9im",
  "key2": "3YRbLv1eVsWhsY73fhjqFy5L59QaHv2uBr4mY4dcf6qnidi1MPwCD6bYaEQhhnvx7iA7xbYutXWxGsju4LRqRD8D",
  "key3": "2QKqR1BcNsvw9pqxxg9YpV4RGpDFVXhU4VwSGP7tKog6ZFqE4bGneBj2aJin1tsYtFiBUuAzRHuvdovqLuCoGg8K",
  "key4": "sHN7sqt3NDkpHDaevcgDQQjxfNk4qjJRBzgFPsjpZdzYjcsxZdwTWMxuoPD6mpbTi6L1MpDjfZxGJh9VzLpar2h",
  "key5": "5jmzGXmPDmuihvFZDuuCspUQVtqSVcoPwJRMQVEPmzuZbe5dC4oh3o3DAko3Psz3DNBVmmaLpjDesG496aakMFfS",
  "key6": "5b8PYMqfJcGKFRQwHQLtJjBHzfLrYWq4CHtbusTuwh3mW6stKdCUZmMjnfHAoNeTwSL8aov2699TUTHimD58gnsw",
  "key7": "3BeNmHKpV6Awivh3XxGi9jSTSerU8nJg4Mb8xpTRS5ykFkxH9U6d12Uf4NrtU6Dwn6onngJ3NKyGNrFTWsCrHL4Q",
  "key8": "4b7YLodu3gNYNg2rUYXs1cd4Sy8UYJFuQ82wypGwrjB8imhZt26DxGXbeDEHaK154De4nRkUpAJmd6bTjp1vFCUH",
  "key9": "5AzfdYth67tN1RDjGS4D93zedLYcEinGBhUGnivjBZUepNJ6oNUKUshvygxv6XaY2f9yrM884HHAFBLNDWN9ZPmF",
  "key10": "5qc2QA5DZXzTanqTLeVs2shRURtk3AK8YbJ9JtursFEKpUReZEy92ox2CybWvf93D7knPL15qYBnhiKqvrxQZE9X",
  "key11": "3aYr4kCxMg7VjK4jrVY3JtFgk2qPZpPas5AsJh26dLc9F5hcWTjDJP9okwShs7dsgU1jwyhnyEWLRompSCkg7EKt",
  "key12": "5Pczz5mEbsfgxSZi3gcXWH8iQvBMFaeZpERfZH7TL6BsWb9uWzByrbkyGK67LsPiJfAxbDWA7eBPk1eejMtEA4T9",
  "key13": "4PaTHwxH3G3HoMf6rtftqLPRpGfeLSGiUxShu7jJAeBN84ZSGGTkKJjL7VUXN6gq4nKF1CJ8TnAfZMtuekDwvSjh",
  "key14": "4QosnLjZ4pzHmufvK6FMfrkPmhiK9rhXQ9Gmk4wdAEpBzyYUZQoyzjcY8TBE9R8x9oZ7yo5JLmqfeDbHEMu5Pdbx",
  "key15": "3aek2YR3aycA9MN5hX1VL3uzVfF8jKk9JSZhSdaKJkUn5a5KrDnLsBZcPt72SSP27YG4WP8nHmWB2xZh8SFcxZeS",
  "key16": "4EFv4SfutSjFtsaT8e4GE9jRkb7931oyzQWm46L6W5QVysiEXsQwx87HCNeitB9KaxBeueXAmMn35Ba5Wy4AE4tw",
  "key17": "5afqKx5Qpfs3SYFSqMiZopFvTuYRJEGutZKMiRthuiyoqcCA1rRUuCLHwj32Noes2DJBe8noe6n39n5YszruyTB7",
  "key18": "5E4kUiNuXvowZaZwAjCyN9m5MgYY1eX6sQBMC7WGJo3xJLhrpk37XBVL17PX5rPmbkXVMNuhit8YJXGXfC7EB822",
  "key19": "4R9dEcta8oVYfKDeYftdYVGpnYqGN5ES881HjHge6hVoCovHR7qbiFadBn4cbN5xcW7fDE8DuUL8J5aVWPLVvKqh",
  "key20": "5Gd9TLjx3EG76J4jXMBgr4UxCRHQvfrASXmhNPiszeyWptxTUbwf6qtuxb78urfY164LBifExaPSfD9cYQKgrcHv",
  "key21": "5fvbdYRjkaio7k3U4h3dDS91peeiU3rnHqVrh9wWrT1pfebW1opKBnoyaLmyEtVsvyDdaE1r7D1kauCMeV6xWTdy",
  "key22": "4gaez2o28oMAWTSvRJnhV6Mye6BtTpsE5gVrGd5JsDVtGkdutWutXk42QJhtWQbFxmbUhHQPz2KqcyVdnfShJPNn",
  "key23": "NFjaojBVX8HxxLryCxXjtwbaHWxpShrMot3fwSYEehW1uwq7t89Q78BjdW8PiTz7iwcPUWj4TC5g47C6v1yr9S8",
  "key24": "2AVuB4qsPN3sD6j28DnCJPfT7cytcjxex3t4CDoEr6yQPBdrrJ969YmNBVh8pRTUanKZABHPkPNDigESF9se4ptf",
  "key25": "24sfH4Np1e65yMasviREU4zvLJSLPFASRg7swZRKJBb9NSge8w93SL5NANmdJSME45qPV9SzE2MeroA92jrR7com",
  "key26": "5DdwipyPaFZYTZnJ1gyYDfRmR12h57Tq4VZtY7hjYMRrmBENPrp5kD6Q1dkQ9sodWSRpoqNvv3CUX67sjXULMTDJ",
  "key27": "G3UGu9uGMJpdQyWBppx4rqX73cm5teGZGLxLUHCLLxyG2L94MADQJU6oc8ZQHUNsCra8UbtF46SbWfBxRLaNGSC",
  "key28": "5S7gyxMdyWVNszmQfcKkGM5BkB4KrDDLJafXcXdB2r4xvHiwzKphCQ2D8emWRSsSH8cfeMefDA4Ek4pXAHWHsWBb",
  "key29": "3oL9U5Z712kQ6K1TTVvSfJsy1iAiK9TavAmtw3a6cxTtvMTpwNDVUBzwo7G3YgxbMXtH4ej5ktjCR1z452yjqom6",
  "key30": "2rFbaG8VpdH4RxMBDtWV9CKcYYNQMrHNEHPHtzzK2gsV39sKDnTnCauH8yfDYLjw2NssZ52Q4edieo3k9AhLLvrV",
  "key31": "5xkduAqcbYE3fbRzFyFYTp7zK7ozkEZ74AZ6jFXzRKpXHKFmB7wHgwdSbr9HvjAXByP78SeqrtT8HbmSJEsy8hyr",
  "key32": "5mTGvHyKYL699769t3t5zbff96aR2eEwjcApkttZotgDTTe9LcKNP12KaHa5VFUAMuaivuDVU41JtwaetEnmKzGm",
  "key33": "XXTtB3zvRngiuojftmRra1Ch6wCsE7jsyoLiRbBezsvDpnshFTwbpf8ALRPFvqT6jdfEqiXZdcn64fPWANU25TW",
  "key34": "3U4CMCDxdrfuw23rmPGZM2GS5aM2BikNohu2D73B1cvSb6m2BDCZesbWReX8vAtrx1rsT5heVnEvkJH9sKBMcEa2",
  "key35": "2hmEiTf68ksacpqgY6EsbTbhqe9oe2AoWf8j4GBNirH3Cqwwcm5L3KRPacD54v7vtq89URLY3GHbZkoDkSBQGjxi",
  "key36": "5mfjXzm6U5oTrRebC5o4ZFM2yu1aTyWuLwGnZYAYYqnZaJ1D5kpZt68zC4Ket1KTNktx4zVR7fkZpgdbujfeN1iN",
  "key37": "4paWmuqpGNZzvSQxuBTbTsNFym3MHd9AgamzDXoUxPuWqAjDDnbJTrCyauVuLUfgvouv4Z1V5QWmkcJMtfysKiii",
  "key38": "2WHv1mMeAy3hDTb28SMrgtawr74X8vEeQ91CcW7PagS4czdDGHtCRxzVFuSQiYfxcor8u3GrBHydVnve4s6kKYdY",
  "key39": "2N25iRT65BSuW9xHcWczUjnxUWJG6STs9Y3t1QA5EZitLNAAmNBsGyjCdhEJNftxAG6rivmEyMwzQhcKsoGCJXtE",
  "key40": "4Dx3Jb8cQJVFRMo5TqRHYSK62C5WR7XQNpbfuJbhVesobUjro5E1ubcYi2iMooyzbzeT5tZRJF3vntbyRqWhUwVM"
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
