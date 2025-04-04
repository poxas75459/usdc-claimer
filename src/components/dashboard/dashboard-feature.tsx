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
    "3LEmye9ydg5DRMDiV7D5X5zXReTkW2GpUFw6uDZkYMzYfMPgLMifauvNaNXp3MH4cam642rh7pTspP8DG3fqUKud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hF6jHBYktEz6eKUGN6pBQANWB8vwXbwBMTqa6tpLofHbR1WbLkkUs4MB3QChUsDYJQe2EhXqEzxtEwTciWU4EoY",
  "key1": "4MmgvbcedhPBfxP8euWgTwARQ3Rn4xAmMjVE8P9vriYa9HnGHyFTsV9Fyc1YGFgQnxyC5SqK5HyQYEFTAwv7fKY",
  "key2": "2NWTGJoMqTc81HA1GBrL5G6uipB1wtoUfR9xmGMJ9ZoaiUA42UpiQGJHNeLsccBySvmad4fWAccL1orLxxuE27uU",
  "key3": "5cciS5cdZR5dUHtvRiSiBPdJMpVLNFMwovdc3ML4ovxJKukEmrpELiUUCiFLqk3vE8XRBYaNkwnsUJrJRRKr5ADs",
  "key4": "2FmsPTrQEmfmfHbDK1DbQ8UXRsxe6v14aFdD7TqqmLR1KM71AMx2uub8yw6Qx3dwFNnhgzfwRdmyX7YVY3ihBnXX",
  "key5": "2p6ZXhhJqcdyV9pjhCriwpssMQLouqxsF62nNwEU4c3EtUWohDbafcv9jPi8kBN7wu2t15cHBX3AYabvQQkYwHJ6",
  "key6": "2okT3hFyqNHqnAoFYCzrRJsVeBmbAS5vDmwDuo1mnadmtbMLJX2sNRrdKUoUMHMhciCpTVGjg4xsEcNSeBqdTpun",
  "key7": "3ZW6Cv8fM8SBdr88V7D6k8ujAB46UozKQcahDubtvB1mBvPDG28QRV5qfrewko1y2DQ4navabC45kKcCZscUZP9W",
  "key8": "XGyALd9qjVn1Lw8ieNJLpYEJU5LAvjWc9zZr4SyduL8bbnbfJGjF46c97up3nPWgc22nbzqHiTQqLndUxt8CtS8",
  "key9": "3oP57pjRgEKvN3CZ39wJrBMu1xyfiWLribDavgoW2jYAKsTd7E4vLekurbtXmyiN49uQ4AMA2rc9AjrE5quLa9AG",
  "key10": "27CCV8sfrY9gfSFxLsAyWd5xeATP2nfaTfBUNYMYLismiRotQSZGoAvRoCzs5zssksvUR1Nt1gTGpus5HcRdhQxJ",
  "key11": "4uNCBVh8Zj8TPMvo63eUY9FVHy9UMD9ATkf3JFF1Y7BnJWFXDuABAJvRvRjFCVCBXC8m57dauzwHXhiTxZVUzXrN",
  "key12": "4LgRHyTDrWHaiCMSYgAu5PgvqGmx3UEJLGYSALHsYnvPtUC351DmnT2dmJx19fLjeceDX5gzYUzhPBaemGBLUNjb",
  "key13": "3jxSyKYX338Y5PiS3wcNhLyqY8TPu35Dgmmo6bnytNHu5s1hL1RQcVCiK4iGhTFN7NysuT9CRZPRepWiW42ZEvU2",
  "key14": "5TBLfV1WVMVUzjpX8Wa8akec83EnVJuo3rVeWD46eGQad9P11LxdSJ5gwutSDSTtGbjxXuZzxfR3TGoFRndViCfZ",
  "key15": "WxYroL14afQxKv2jTWjx1asfb1eoAp1T6hZq4GTznTFRGKAY1AjLGyxVYLrkL5zwu2m7sZpfC253CyRfMMRGYKP",
  "key16": "3hUGmAjZxgAJkMB2UWaKBcjEfx3XiE38wNKoUggaz3MR62JXzM89Cv77PqmrfrUFrDEey2wtEqDyQe65ixKLKy3e",
  "key17": "5Fi1WK6iXcei8XaZ3asvCBR9DdaeB4j5pk6ir68m8kNvSyv1caVvksEqoocYTZBq2xiADUZvp3uLZnbRNxbTLBdc",
  "key18": "5Z3B9SK2daB55wKurG67n9iLJpsVU1NE4WFr3SiTi52Bi4urKZnSVcx3AmsPwbXaEHeNhY5ZeC4vHsHf1uVS3fPu",
  "key19": "4UKKwAwuEs2eJoCExZRmKb7fM1b11oticd3YGKkS2G1ZqzK8HG7d4ty3vEHQJfjzr3UKVDV7ME8yAuiqeA84YzJt",
  "key20": "3yYgMCe5dyWmwbag222xM4y2cetVBDQmWCt2MwibyyVbUCCeKbqLtDmXdHvJV3oatqLJfGfi9xxJYdSMqJkfV14a",
  "key21": "5NsBx5tXYvc4MfyPDQchav17mTRH8kAUxRvExPT8ZBijnao9qbpx7mRzUU2H6c1pzYvwVZk6wTXnP6Sc42RQpWRx",
  "key22": "2FQjBwmV8Zz8gmEhSKQeWiy7cHhHEg5KHQQR5KSabUDQJhWvVmykHVX7N3kftJe4BvJzcYVwx3b1b5pZZidn4h37",
  "key23": "5cdJLymjFgcdErvqJi6BDy1F3o6BFAcY4ZBKBv5kqBXzJprMjTpupC2PJifX7zL7HZLVGUXifjE4ExdzNmxoDYWX",
  "key24": "38JBXiGJBBAZa6G6JGeVdVezjSgwVTRK8wQLUR5nsphtAEkwWHejFgUhRWpdzwh7suayiPfTYwktowy5F11wRoHk",
  "key25": "5sk4GZN9ThN7mjrqgfdLrCq1XJZXvEDEN9PVuCWQETizCUMwwvtuQ2GocZ84qUuBzC3Ub4RQTZ96jYTjZ9aztS8r",
  "key26": "U7ApsjKFSqjL5Gbu5M8E6QusBcNLiQZK3CNLWPTggFDtCFEiFwGhiFfksgRjezbGoRfwAaUTtBC2Yi9iTVCV62a",
  "key27": "Pkk1G4VzUA9UuEaSFeQNejit3eyE8Ls56133824UYRGxJd34MtZXG6deji18hV5cGEnk4JEnbbAeJYbaDumPqy1",
  "key28": "5inwgPS8EaagNnAgm5iRcxb9fyiG6iHZ1Ti6nKWEDR8cN5ZS5wvaGuuTkxuTuGYZNUgdeSGkThi66r6WHzfpi6BF",
  "key29": "32YoiBhZsDjari3ZJ7aFUck6zcyPVbGWYtGGBVnJ3CGjAesFvi9ad1ECGTC5nmdgDk9p9tfng4kSeg2Dni2LyJfj",
  "key30": "4JfCr8FRyydKvRM1ZUKG4AJkTaRx68bQGq8XQDaXbf8zuz1e7G2V6dqYS3sUra8RqGgPZhbCV96oW7J9geawDwhw",
  "key31": "49pF82HH8cTT8Jcq3hdZWV8WNiyJwh7HppUfecRLJRfxt22FLQvuxEVJkkLrC6z6yMXeY33QpnuUAAMskVfULpxp",
  "key32": "3Xnsd4PWnJwNkMWxj3hiYeMaqdgAFMMq9u6RdVjXXFTQr2CnszHU1RXr572x2qgdxQ95zYjxveukCX5DcyVGKWDz",
  "key33": "4dnSkvHWBrhnpdxS6bQqFKf4WA9BdxBLdLCPBHk3sXYQ27PSVVKNzKtgrNTVTFAmtVwT3rXdxjbruBsRWtxv7kGf",
  "key34": "64XDVNvtNwTAND87jv9iy8qD83PgWt5pxPJm2ppD34iRrvTeEfgaxPWJ9o4oPHL3MHcDFLsrQhbZu7RG2P2jCAni",
  "key35": "Mrr9H8jY1JER6uFnyPiX9UH3GXD7HWt8bAinV9K3i2UTkAzGVKzJ6p9zu2Z9J3TkoP3CmwXVT7H3MhKRyxFjwW1",
  "key36": "4Fa9xU321kw78QUWLW8ZKFAUYUuBZKnd4x9TXHwBdN6bnYNFWcnadMp7cuZhFB26nqpcberwRtzD8etNLNcdVpoR",
  "key37": "nChNSY3GnkeDLzS4skejKxQaxWGXUNHGrR8sFPg5aMhUBBXmioMViWf6RHfrpRbuj2e2sEzhryR9sZhzdCT2PBn",
  "key38": "3hniAXPQsVxBscGNZ5mZqdLbMbTWrR13yQ8AEkmiH9FPVeAWuR4E6mMYiZpoauYX5bYZ9PWPmbBBwYS29RtE839N",
  "key39": "23RUCkd358vjvB6dSUySYMs3WUL6fmu29HKrn4dgzLVori1DGPyCqi4KH47Leb1jUTnWEGKfvhmV9Um4KvxYJYqi",
  "key40": "5X9v4n22SrXQd6XwZfh4UokEGK3JEMNxyiWfF7jnsmtaLYETaqjFjJSLM7GFhRY5JXkKVi5Ej2arUxDbBfLJDCMr"
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
