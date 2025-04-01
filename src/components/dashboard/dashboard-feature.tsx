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
    "46TyNasVQYTptrXkTWwAfcxtdWnS2raukdQvLiVUEcArFbRLWE4TjqnYkpfhN6aYKuqsBxfX1aQY2Nnf6WPvTN5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U9mZHAos4UinJLdbJdcgbhEhvaVMtK9S8gsrrAT9XwPF1MJLJWhm2yAeqkgBr4JETMZUFd3AbN3attFTUy9e5yx",
  "key1": "3LpjbrNuwrUBMyHyy3GvXTzmJjPmS6UtwKaJMpsjhYb7DtkGkbdzd2FAVFPYnkxXjnNXmAtbEotXUEbuKNWJbhy1",
  "key2": "3U8psyUFD4YeWPYj1riogeJkVKSK1FxndJHvWvVKxxAJBahF2ijCsaz6towjFGS1buUaSqtc4DgZtfEUzMptimPr",
  "key3": "3ePs1jkRdTtqD5e6HfaA3hywjbDtWgWaWXjhBvn8E7PDpeagr8USVe4HKJfBrzrdGcQZGVaRs67jrpz1op8YBH35",
  "key4": "gdjnCH4dc3xeWKPetuNNyq2Y98gtp4u8xYiyY3iK4FP75xZVF2NbAsJrqytbDsGXDNLftR9MJTzmK7o7uwyptF3",
  "key5": "5yVg7ui3Rp6wdS3TGMzBbsTb2wQB6SJgTSqVUxUBEZfhYBfC41UJPyS5voye7yeYLxbxR8wczUmR1fnqLUsLv16F",
  "key6": "5w27X5TGWL2shkCKkz4YUQWPRqn9NcZPYtb51FVDwkntghAF4Nw6PWQDd4zUKjUrEAxXKT9rFsUXeuzYt4LsCvmB",
  "key7": "36wJv2rjuBAfcvhPeZ1WgHaoY5ZHNbZVShPuKum9NSoKqnMQDR7VWvZ7MwnWydJoAvhE4ckKaLR4gSgdP7vSJZq3",
  "key8": "3QJrB8E3pD9mkGKaD35KhFS2rCp8qQFnFFXADSRQwRtZkwK9qbywCe24xkEqwBngCjuAcJZRrdmJiLhKiFUm1UdA",
  "key9": "2qfZJLGSHoS3V9CVWyv2VmzEBwWU4f5w9BSRnQCCkPtmhkyJFTpDxbm5eNEL4LaeEmeHriTKEXUE2eGrYoHDioT6",
  "key10": "3YUwbEF1Ppjwxateum9Kyqc78tKAkc54h7RRLBDwCg6iDJy74Bw5xoVwnjDzQ3sNTHe4YoKj7pvjjgARrUiYPgFs",
  "key11": "4ddu5EjwSFXH3WoXY6UJpvKV3sXMFwdRwFRHZAQCNY1hFBG8Rrs61RXQSkSbsuHhtqEC5adGWLnsRLjrDRKnRCzf",
  "key12": "5mwDTYVT2vHH7mYFrsJjjCMuXMjdScDymteuhR5i2XZBoxdDwv4yRuWG8PVyoy51yvEgB9WWDXLaxkXqsRjnt5Qm",
  "key13": "3Drhjvitatrobtjgymob2ofLC7KT1mUR6zXFzucRjWQjuSJZPChM984sEKa424MmRDXJvMomLtJXFVMaamRyJhYY",
  "key14": "2sanpX9thi1Ap63b9v9ZAyR6XutBELKosC6QNAweSLXiFCQ7qkVCXDMY6k1KhLq4vBZwnhuNAnd1tzLhPVgHoTU5",
  "key15": "3u3cwRztfpoEArRPoggQUJv6qqenpwDCr2ZszWoGcySaHV6sqRK4Adqawf2uhi4LZan6sx74N12DQHPbSXKsaDzH",
  "key16": "485k2NE3Ch9ZWrbkmHqAGNtRUPtFYN3ELiGLPAv3KZVHDpGZXVp9trBzM1WM1Mx5m7dFiWVS1v6t3nJUX5aG27uR",
  "key17": "wwghvMKdcfqRs5PKxGzVr6i1pHz9yQ1jfpUwr8DAbGkgDwTnUrbfGyPHwRDsNvGL1fC9o8ni4Q1Ek8wRnLUZP9B",
  "key18": "31Rds5DsuhhvRiiHwzJbc7XpQGhjXBbHD5rJrsYfEDgpUb8xTfDnnaGWC8LX3aPHi9i1eGr9FNLY8zkPqc85oZYw",
  "key19": "4qJA9F53nTXZeyFnMBEkYQRjfexK2JAMrciBjb9y2wpSdBjCZJycSJPw77xXjm3ud5wm1SJKvt63SfL7QQcsXGxS",
  "key20": "2SzWx4WSKoAoPMRUrhPgPokbujNaNtrLCi1ACt4LyxAedGKjFSXD1rvYpVSxSLp2yQAn8fQjLYUSPtQGkeYkVx2r",
  "key21": "2ifnSk1ETf2dPKkB5CVsjpnpGknnSeHCmX914Cok6KP2Fr4Z8vDG9RGqhc8gsqLMST8Mc4Awgd6MmjkENCVebo4e",
  "key22": "4eKYK5xcr4MzRj7KoZ2cSjRQ2jaypL9vJkYrPeyeoW9vfAxZj7xsSy1mnNzFfLr1FAkDcrnbE9Vd3SCpkSSo9XbQ",
  "key23": "2isQoNUcJAAZSnT9q8BpB7RJUfVa4esPYyVUTdF275EK6fn3wBgSpnCgVuxgD5eSCPoJBCx6XinrMsb5VnHbCFJT",
  "key24": "5keDZqL2g8SB49Z65FhHccjiQHEiiiW3BsK46o9V9ebGctdZ4Ka9LneiAp3XkaG7cbExYxu6mqU5nvaRN6vzQghA",
  "key25": "51xoraVXQ6G2r5txFenL8oeRKwfoyop5hw3yb6Ra2rpDrBYJGSSqtoaHuQsT9Vd1gfS9qXFg5zQFgkBWnJqef7Vz",
  "key26": "g71CyCjxDexRd7nB8Sic7qkvRY9NgWV72tvVDuRraCqBdBhAGnpyFbph8BNVtjD9toSomEQKafdLhedYzUjhne5",
  "key27": "2MkAkbEsiwZkJd1H6KaV1mVGXQKWE9Z1pFhBBk1AM8JptWUewFbXUAuKD8MDxpFTheNdEhrhXWP7wZSYGrf5UXku",
  "key28": "2EPxHGwHVHZVgf5SQgUcriN9YvcqAdQFDPj7PXqrMHBSpvGfyV9Gjgc1BVChhKNzds8dsHRVd5bytAFLEMfPEQ1i",
  "key29": "4gEjqaPzyqfZK42NEkSzjq5umFofLgAjpATWtzz6LVU59FGArkjSEPQYojYea9NGAXkaATcFuoMcedu74GaPa7K1",
  "key30": "4dZsEQdUcQCrwvFEcrt7pcKCLWSsSRQ8wgXWwNdN4VQ7oUsUWTjSUXwTrhMx73iBo5aEj4DC6r1iKz3JSvfrxLkC",
  "key31": "3w3Cc3VqBF51xv7ceJSBt5DSYhJcr83R5FPsPDoGVbJ1xp4EY3s7Zwxxdkcm2vPjqABvdLFXEDayKCHTudVH2uCZ",
  "key32": "epyJhTcNMCrRArmcy1u7NdQGUHMrZCUUbwswTd2yMHB4fgnxAsaVSd9Bsmq1pj4rZ1tE7M2y8Pii7cykc16Egwm"
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
