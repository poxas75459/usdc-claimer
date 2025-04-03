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
    "3t2yN46ZELQEv1L9gjJAfU5bSmADhpTYYXWwE8KNURoJsJU92iqqXSmtm9P5pGFuoW2MGuv9rwh7pWrLgMYvVbYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMgLaEP1T1xQLxdgtJDHaKSGZDoUx5YCwTZiC7YY7uEmuLSSAm8co1WLqZcJBWqm6NpWUwtFuXz3ytJ39VaHzaV",
  "key1": "3H5c2n6CYALYBqKshXiVPm9Pk2roZx5EshHRLqfPbUPDWCjgWzMpQE2DC6jVATEscmoEdGFJ8A8a5CCLaik3eaWT",
  "key2": "2dwnk6PwAnXtF8QipP8cKDmsfxjSbcnU5vdEjSgAUQ3kWBQdaZFH7mBHwcNUxWZxFwVo6XmVvFsX5UdVE5wSskex",
  "key3": "25zssxxXW74nqNqHhLHiTfDCMxkQFqZ9Bz9sFLTZDCqTYHpoKTteTsXjXdSYthyNWvxHL5sB4Kw5GjZysPdwgsw8",
  "key4": "2UWXSi5M8V7hKd2f27HmZBHB5GHKvqv9KFHRokV8kfmMETvVYiEFhBvm5vnYivch2CFFbkhiq1dCern9PRGzz4rb",
  "key5": "5LNFiGyNgAfrMv3iVvFXmoyqh7nUHsjb4peVQ7HfDSgP8SbAEaJA44DSncyuT1CE76QdTv34Nf5PDbba9XfikmgE",
  "key6": "35PgBEXP36QTMhWSwQf1yRbHKKMkm4N5fG56oWKKUjfnthGWnDv9hkpUNj22on5TLmKEcWGUg6rKgguhSVt4cR7A",
  "key7": "wuxtwEeS6XxoGHj2sTyYQCBD1w8cpXPM5BwKMGUNJncghrCFCt3YhZ8ssucNJvwsgzZwiGnTNYyrYHL3zdSKUL4",
  "key8": "2cXdiZxiBE8954DGwiE7RXQeD8LQDiXz985ZEwx9uaop9nmD419zVvcHHQB7xBnvbPAXhU4QdTRBtSt8Vh2yo4Sz",
  "key9": "2sNQkCMfopc85EnZ3cuSZz7uGPBDRo6VqupBswcTVEwYfSHRRpYwRwCRRMyTBVBSwLj2KbnH7htBCVkz5fbERdxD",
  "key10": "d9wWMb12kvs6ApZYMNtNVwjGxMEXATAdvSgiSjnLEFzASrKrEDpbicSG1k6ndio7tKxA2FNry8jUbdE9whdgK1b",
  "key11": "3ANudcp2NJouTpdSBXqUxVAFt8rp5DzT8RmwGyn9v8Dsp3NsMuRgmNDd4gFkNtnyrBhAr9xYoiSC2wF6WtohhdR",
  "key12": "4eHHhfnnJYa77kbGUkoyKFPaMYqAf9yqYKzF2vVAREEBEUcEZy3mGc9cyiv3CA3icK6bWQ9mNY1FEEpoQVM2V8qp",
  "key13": "qvqrdun9LP72v2KodiACDx5rfYvcnKZjGc3CaqW6gFvj66ob1Lv1hzRrhUAieuDRrhcXgbcMbEApAX28ywjD819",
  "key14": "TKSE24gW3yL3bRDCDEzNGJTjyB6Lpt5C8u8UgPLeXiK5kDAfyAneG3XpXxsQ2H5nChZu22eE1j4NxhpPu6BXevZ",
  "key15": "27V2DpPkGLUtPEkaUm7fm3DVF7SjH7riFrmL9N4kpft9qnTDhRUUjVYmtkCuMofBY2Ks3Ak4d4vrnrVqhgV7RfRA",
  "key16": "3fLt3qjWNZsmekcqnVv24X2PNpj5hcamh6Gwwy5mczWXGhteZBKePQqg19gk83KbYEbK3vJJtNwUT9n9VgWUnEzz",
  "key17": "2ci2tWpxGWKhSviEGtUnjGbxHE6rrkDm9EGqodUo6H5jGVynJWSqPxAfn6SngBXNmVsXPpZfDAmrFUwDsXV1QkXv",
  "key18": "5nNxzzhb2KTnpMPe1pd8khN2TZvT1H1ddzfiHXYF16z4DeYFuSacrcTygxkvxZLszLiQ7PN11qJDMT8F1Ak4y8rM",
  "key19": "2G7m9QrhLVhJJTeuRFzJb5X6nMCvkD8omBvAnET5yiKWeWZqCc6HjPKvNwFkfpJUyN8idMmaMjvZXnn5teKJUAaQ",
  "key20": "2eCdF9SutMwMXVADegMW47ZPz4wYkQ2VtCEdW9gyiMmY5jQmM7Ba5CWLzvt8pdBZAcoNmC8VLt8kpoef4kEa8N7m",
  "key21": "3WwBMdz3medSWCeJbsfLCmBkVdcMudT5uUm4Vf2kngWLso6Wn6AyE9iL1w6zQYpd9a3wvAxbkcp4s7U99oNVccD",
  "key22": "3sSvRJhcn1tXdQcBtXtSpHzFUMEXTXUGyAtdMQsq3ubA7HZPgvMtXXPvbpwZ1H8Dfpq4hRpzhxhPJH8P3YxM4iNW",
  "key23": "5wQzv2QyK6AQqDn1rt8hDab76pV5EHPJcZQG6RVUTPxjcotWAEc9hY1a6FqkK7hTRs8uELiSkxZ69quSsEViDaju",
  "key24": "46xQbiWM6ag2oPQVfuZkBsA2bGicDodkbRd1PVCHBzXnGMvuQJUESPTBmivstniHzZr69bc9mDh9rfr3SX6juc1E",
  "key25": "5XHuCjgcogtbwThRQGESB5jNGptmcHEoJSpFMfS72xjNEQxPtVvYEPvCUB2d7cEGYgkawHvyz2D5qvzyTbCjZkpS",
  "key26": "31ui896RSoxWh8eQ9nYGF3rKSu6akusXgvAzW66Te1ciQEZwVCxQLEN9X1LMrDNNQbTQDZD6GKi37dpfJeVvksYb",
  "key27": "b7EgxG42DVP6oa5Wmxuj8vYzWujgredEpQLqXoxg1v47yNeeeJzZN5eBcwYJohzYbAVjzWfEG9McMf9HcQBo1kx",
  "key28": "62VxP4p1Qv9pVcTvRBtqaw2PGhvaRngdtEa346w7Mtq7M1BeLbzXPgAqh7k7fjjqZ9r8cw5iqqk697ZbzuymAQ15",
  "key29": "xyoHX1kLKvBjnAL3wGbQtcPfUxyEJshRJ88ppVTWK2DFoNWSM3UwkpJDVyCNkUJD2zGNbKvjEG4CTPq2o7F163R",
  "key30": "pWigdtNBNMXUqAdQK3HQMiHcYujNZgZunwk19q6iudBQydK8PFbM2g3hxZWSEpiTLdTE4yDj6kiFNzYfyVrVNNb",
  "key31": "3pzTb2aH52TB3x2EW8DS8qrpCcyZGv5XLrgmE6NTjLSgToKiwnBMe3UoNWBhQk3RUZXwfb8tUyQxwiw5Hr6RxSZE",
  "key32": "2nuZGVw8JybNMaUdQb8GUVSNYA52W9xgrhAxwxCY45v7MXCAhSerr3J9FWxPhNvWiZAEMKEm61EWpHjjd5TG5cEm",
  "key33": "2MuGmbRMEEjBDU6E1vA42iWbnDHwzFazBpAc888hNzQ3UXESLtUjxXV31ceVCWYKpj4pujtmdXxLmSSVsG7EBwEY",
  "key34": "frLtKMp2UmnJdssPSGPTdQkLo8ezUiApNZ1CAVP1A4XmjkAreKuQV83bhgJv3nQq4cVHXkpvN1qpjiZqnDvQ6wA",
  "key35": "MBLcCXqTY2sjR2tLcfV6iyBo9aejhmank5DNYH947ZTwr2BfKGDMx2w6wYEH3XZ9HQvXPwKjVCCET12EVc6wG8L",
  "key36": "3uBdNVwJyrrBNbdNzvkeVwMWJm8cEwu4gKT6e2fVh3ERVifqjWorN8gcBdo7xV4n817H2zrvMWEGnvX5u1iA8fFD",
  "key37": "5rBFYGPEZjgLYrXrsizrkzUksG8VxgY2FGkDMPCqQdyVLqSxdYcKaG2oeGEGVPbKmWGXrz4SG9iZiF3n3zoFiseX",
  "key38": "5oTvG7MNqC85ecdqxegJyVaFsEgzaHxq4WAr4kdQpmu7S8LACL8rQV8nzxJ5LphureQhsBVRvUNytbnfbsd4Qrwf",
  "key39": "4rMwDYJV2Azb6Ng5nrngYAutWAgTMdPHhhtf3vLgjtWHSfWoNDDkSzu66tBN2jrrrcq2Gojzhk9Yu4NMxvFkGYPN",
  "key40": "2ztFVJ5sute9sDPmm8xDcfknBbmTc4gu2J86xF66R1pfEs6T3V1CQhwSKTrQcQPd5Gd8sJjDTr7mwjfERLNDi44S",
  "key41": "544UAmC7d9b5BWVTe9g5SPxhkvmGoX4ByMMCGyZ7EUczUnWQHW8q7dNHri2LTCub2M6ACs9eozPTmvktZEXzUdX3",
  "key42": "ykAjWDG5KvcKFB1ezQmmDVCQdhuFcFmkojwL3VERDCXQr167rbKkk2ee3aEbV9cJVVDq6E8u6KERS2AodiGTDss",
  "key43": "3ysUoPkbVxtX5kJG8Gw7XXDBjN5UEgJpucJo7wfGY2RZFsRtxHrU4PxMDwX8U8yQvEEXs8ooegcoNDDsipfJPqsA",
  "key44": "36rJa2Hu6CLwDHSTbRRdwUFQyZqDqXUEMg5Co8YUAYmgVrnXP5SuSwyBmm8trdTnRh2rj9ePUVU7YAYkymnoeyBa",
  "key45": "1qm1irLXEBGaENvMtrmTKrL1LxMQzMT5BLpS2jQMzkArxaqRWxZ6jHWogxHvBq1E8HmGpVM8QhwwcDceqqZvgZi",
  "key46": "2sJfoPjEiJjEx6ZcD7C6R6BjMxH84vwFx4MYnvjJLaeDXSNmiX9FUzkM23wCEQzM5eRN1mP8GG376nCXHSHhxmXU"
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
