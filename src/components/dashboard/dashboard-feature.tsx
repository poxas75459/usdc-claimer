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
    "5ri1hx2tmLV5qKbutRrrGMVsBQf42o6YPnyVrySEdcUzDJ1zPVmEzBmMDDFXt3rczii2WiLR59tRzCsGN9L5WmKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAZUXCFrN6zYBP96hqtejTvzt8CdFRoxGqazGKDxihFeixSdsBnyJ75T4zex2rGVyui3Lmeoac3bRuNuQ2baYMs",
  "key1": "4M3SPXPWQXaV9xvCmjeeHNAVrh2gpRsYAAr1rqhKD26WJm1CAe9B317hmndnVYjbsCSXRJAUAQTgR95NYfLD9oFe",
  "key2": "4c1DAf6eEZskZFZC1j6jK6ihxG2E21rH4Ln9vCThrb63kX47SUrfoao1FaxyhTc9jKahk4hQa7TJLe46VA5sFv2W",
  "key3": "5rKNpLerVjP4bC2UyvTMF1xh4uHvugr7KWFLWQhGohdLi1oaKKBPTPeb62jVcrsTXMrgiCTDSQaBo4R9VWG4xKsj",
  "key4": "4rKk8uRp8ngx2jxbomkZ8SdRnSEYkTPyMx3EX5EhUpNViry93MvmLZUegaQgAUiszY9TQxfh3uuYNL4HVU4Q6pDr",
  "key5": "5A6iPBZuhmxWDet2gVQC9JGBtACMWSTASaaLtZbFdH1JW1KryDFEuFAKfask9nJj2UpoCPUvJVmDiRBJ3metiQQh",
  "key6": "ZzcwyFpZwdB3nbrQDspqFu9hfD6GcP2okV5Vww2AtRuVVjYxRdNXj1zoUJ3K1DVwkF3ky2HkCxcPz8gCr93kFfd",
  "key7": "5UFg2gpcbmFhrLyDJEzXcGJJjWAgSb7PAnRh5PTecwxjupZqCoFdojfLpbptNh4WJcY2efh6nujYym5rhy7LjHvH",
  "key8": "3SYn58ycvwc1Rit9gnKDXx8rt53wJfJj1KGzmJHFoLP8MzEHHyrcvaev7PSNQAbNzJWBtXxP3s8w4FhkaiaTYiUo",
  "key9": "4wAmHUFL4rLs9idbJ5nZNzmqgyVrscARCjjrfxu3V5JbQXVxiG33DTQYHmGxCytUbJDESTSpY5dhBrpp6vEK92PX",
  "key10": "2UtjeypMxvLVp1SfjwgBE6uR5QbZJ8JHWXBbdMpPGuHpjvi8iLmchE1jXrT1yWER68iD81UbTu8Zjrfr4B51Ytdz",
  "key11": "DPsW7ga7t3LiN3BxdCYmMNq6TPHCJj53y8VAPJXMLJftCmRU5ZsScegSiEbgYsYrVQG3n56PFJjtLV8WjaTkTYP",
  "key12": "3rMtEW9N6oDhf9N9KhmLrCK1ajzD4KfKc5TedTHrWdzipSUBh421WnQDkjfka9jxzqVBwyQ4vggWR1io71T5vnB6",
  "key13": "2opww9qDoJooLa6JeNpvNmSsoyApKAP8LwbfdPL4DUg9QdU75iDzWeU5HdR42kBLzAcTETvdCNjMCAduxSrDuTTm",
  "key14": "37LpdVn7P6QjFQVUz8wgxFbs2wzPqyPi2yM9RfYtXqRe79BX5WNnr6sDeheDZHAx4DLBNwdabgbPWxF4sJU6xVnG",
  "key15": "2wWpugqKcYVhHdLBV1VBTZ4gBWL9BW9yCvamMmExVAArdgHtmhNRWRwCJWhNnqzCd3CJHe9yxZfJKw7K8LpWc3Dt",
  "key16": "2ek2ph5NuAyhXJwWZ7q1FRdkQ7p8cAKhnMReFKoBVGtgQLPzDgkeNnsdqSyNevgaTXmTxFsPdEyjGLtyZtp2XAeP",
  "key17": "GXDpC9NvxLAuqGsvAWCgsVcCgZQ2dektR7xPp69gvMKrg1NtcuquxeoSxe3rMytKw4VWtnkmNXLUXaVKAn9Tcba",
  "key18": "4P7UpvkkwUwtpb9rSSu99qw9sJ3VtVCgcjwHpyRXPLa3oEhZ9Az83yH2fMb8pag8fZ9NrHBSDttVeyU6ehp4zUN2",
  "key19": "2vzF3oJNwh45DJt1H8SxYKrEMs4AUMCJE3kc9rJu3YSs9XnwTCdjn9PZvJGumu1uWzYcP82sUqPrs5KLEsufDX3v",
  "key20": "42iERmNUD4e2ZxvJqt8LidD82WbGbSjhJ5JevDq1DSVRf1nYLHPB4fzPbCvVywuw6CR2HR2S81p1gybf5fzvDsWu",
  "key21": "3NivaHDYYgR61qifFQBMLXHnmZLNNeboNPqMo3PfZKn6GJ5YLXFB5mzF8RVcy87JdBCagXaY9H246yVLTHaKR5zH",
  "key22": "qwPV7fQibTRYbKomCXWMUoizspUgBtu6cLtR45ZdzNKfgPaYWvgJEPxF6TQeR9yxgUauLzsnS1BaNnkTY7s2CDD",
  "key23": "4Z5NiKrRowVkjjsMYwanTLK4k2XQXpkqh4ER1WLZyZfEyCKsCocQU96U3gJxyv7sYfqChTckiH3RBoFh7fYjBgFn",
  "key24": "67Lu83W993VxPvyrFHiB1B1NXvW6Bne9EmEEyoNadQ44ttLRSexckak9yMDGLPZPijiLhnQU53FjJGHDSpARrfdg",
  "key25": "1Nuw7RGsBMsG2UtiBmW6zhg8Gx7muvJ2E8aWd5Wq95SAPYCjjQn9yzq6HhNWo6koimkrZ5sz8awm45YduGbijDe",
  "key26": "Za851Suk3Lbdq9pdZQ6ZnsUUqwABhsYxBPP6fosViob6vZYbxR1yNLTvy2ZxwsaLaBQm293pkRY56fVgS4Pta9X",
  "key27": "42dLDczPtVMME1wZUMqLydu4xWahG8ZMqRgJjTBLzrq1EKZqHEaqpA9EenwQRrGPGwTKaZVHDSohqKi9ys9XBTt5",
  "key28": "3TY7hotzQ8PKsDGPZPDsGBvrDbFiet1p72EJwZ7wgwWhJQjfHd9ZoJUYKXvcroh1hfiWVxa85Ku2wMRiPNDZpTnx",
  "key29": "3XRVnxmLS7g2T7DVmnqMBUG4FfcyLoHp1aP6RwxVLef1kxDphYtJUF5cCaN6AQdEkXh8A2DA2dDsBBHMqHBfmdM6",
  "key30": "3nwSqioUnWEsMozTtq7WZtsjtQXa5Zbw86ctyCbsR5zcoUyy58HUsFWu6m7exq1yg68eaoz8wjmAnDmuJLy6uaFk",
  "key31": "4ZjwQYAJHgg3A2Gwzq1DkcxxCzvvyhtjTpPYiQQsfdx4qsiJ3fyK8rnzE9qp6XAvBK6gqPEz3CNrWageEBmFmHag",
  "key32": "4hAuJjn59MPSTXezZQKB3tMKcsLr8ZF5FQxJN7ngKEEF3RHB3RtDMzZYgLgWVbFNKgWDAur1xk7G5LMbKoRpCcQE",
  "key33": "2WhPHsFu1F4UMJWZaWHDcNAyFqFeVrsTjAUQqQRhKAiC882zKZY6xdKBrrTB2HhWhBfDCe91hjVXFHnYQh2kL4yD",
  "key34": "4eNpxxH728Zm1Yk8oNeJAr5rJWAiMgZCP2YRLGbu2VTboTSLPPGdv3kB7Mc1XqCRbrhygmpiXp5ie5arCGBW6jhy"
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
