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
    "24rcX9wSL2NgDGkbdYg4bjxt4qo2PqtZ5zedrpn4scqTXQpSsborDLQL9RaLYUSrNr128LvkZpXikTnseYswrt7F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46HZ8HCXju5AHVXqa29bGvPUwhkgwMGUcAcvRuqriZp5VEnogYu7CgMJTYHSyDgYzp49UQhof3YvtpN4MpKStc5G",
  "key1": "64yodQPLvrnPYDAF7LyqVPUbfK7xd2XMgU3pShZnWKjybUjzbtFwwYJt8pSAJG6CjFDZ7z52EQ2hF7vzU2LaWjZA",
  "key2": "3UoR6rhS9o9wwv5DvdMtDn5nrGvX5WLFpCUMQ13DhidCKuriCYsrGVhPDe82omfBgKrtyH3L8phaRK443DGvXGD3",
  "key3": "gAEPteo78azpupYVgDgG6avQ9vzTAKNpa77Yk1v3W5cpz8WwbZ3mGd2HKQurZvsVyPMyA5UQpjGzxYH7VVsmzaC",
  "key4": "2N8MmiYqTUGEBVj6DjE1c9DmzQaqJEPWjFbADF2foeAYTtYHs8CJiMhkmJk1bXGKEYP7fpyxkdJwgFMSfhfuExHU",
  "key5": "bzrYDSNCwBUCv1QM1S8oeTLdaKCBxjPvqgkHo12N5xYkDtK6DTwBR7aFV9nzqefHGUdSFvJDSZMiVW8ddze3fzX",
  "key6": "QCqa88WdwKJWCRDXmWq5VzvHXvprm5V36HbtUSZxc376hK9XWiX7sWy71c3ZnUou89jGYtFxKs5dd9wh4KBiiqc",
  "key7": "3os27gMaFwcL7AGoH34xoyjsdQMEbsvGsohQ7MrQn1vmdwAvdbVCThCehEmD1wGFrE1hdFbNhUuGqWM9xBVijY9R",
  "key8": "5rctwxaHUNkQTAZt5wSXnA8rtUchsi8URhWKk5vi7Lu36dCtHZFdLUwAvaf7JkRQPZA4D9ByHWYEGxD7BmKMyQ2M",
  "key9": "4519iBypbRjwxDJdUq24wuLSdUq87ipGcFRt254DRfDCrZopLakamdDBy3fCctUZ7xFf1jS1MGqWtagWRemTe26T",
  "key10": "o2fCUe2uF2GmpGCu7r5NPh23DZyHZiVZ2ZhFVjKFfF99gzp4VW8NP4Am3LaD18BhSHwPvDXDW97H7E83mbieREQ",
  "key11": "5MpfHhCaBuxKJTEttZcs2BEnpbzMJxC67uDoaydEHLK9awrCXcDF1Yjq8zzkFfcUh9ED3gxyf9gqNUELewuzU8xJ",
  "key12": "3d2PYNeQ8yp7hU6EHvhJxHo9eTHidTxYQgoxiTgiWNbXKW73FPEJJPAuV6BwXFyRc6mRMMHitaZAYUqeG9XKB7wZ",
  "key13": "3AN3FN7BxMZ7TnUMkHPY9kukisGe2vTCoV5f5trutvNVR1PweRbVeXecMBZ3647gASZcUNncjfbWBajNyrYqdipw",
  "key14": "5UdLfbuE7QcWVqXv7MTbfyi8EFwPJEW82X3fZNFRPkz7oaDAKgkJfBH7nYsktgRjdd73gHAqpRUVtzRhi58dMEPd",
  "key15": "QmhdGXKKFYZoSdr45gniyFMyA67x7EG9CkDdbHsKrWahEWNGe4uqHUCJdjX2B1muWNamoHBHCw36JYScM6o768G",
  "key16": "5is3kriQaLXLAG64LZpeY77R9KbDCabRCfgPC5PN3J7YAS1w4HCCQ4S2FJVup4WYGxGJxcWn9n5Y2qJYTRMEMptf",
  "key17": "37sFj4Zbmrao53beaoLHf3PE3tp2smeFj3JfXXjd33Z8LpZ2f6ADjXDUWQuDbjPGndsKwMYRzStvccgiSuJeQcpq",
  "key18": "3cEwaMBmwUsJx55AmdAqNuYUGNEo5aWXKe5Ls6XzVAWVcohPVy7LPEJJFcdX9Eqj8tBHEv95kUNz6BeQKrzjc8af",
  "key19": "4rFxY2S2WTu8QVYRUGmt8KdsmxhzVY6XgMDmaFGMY6emuHUjrutwgBvq7x8D8esEzrQsieJYJokaeU8LiG9FRXxp",
  "key20": "5tEoaDWx8AaGj5hsQ4V2zz4RAc4Mfxz64AV4ZY5WaDwYRxGR2Rx6cjJy6PjXNcYotTD9oZaCA7iXDG7cpAUAMbgV",
  "key21": "5a9DGCcvmjYQEpt6sLn5zc4NKtfwtAv8qd9d18joGHHyLXKv5zB7dfA1cK6V3bkoDwUWWHuMUr7KQXfSs8FPC26J",
  "key22": "3aaE6oacRgpUdyN82nCDmER3Jn4RNXoukygDm55LYqnhKWVKJMzRhUN9fRg3142J82jNSST8LHoUSB59HYMwqVEx",
  "key23": "5vFkPyd5AKEXDLY8bSUmQqs5hutWpKHvrna7qA4BjkLhHThziohvcJbuKXH4xRgkjhfztU96hog1Fh68CAuCeEZR",
  "key24": "4ussVqrpbBZTpU2jwkrA7VpoM5K1cvCrW7ooPTUDzqV7wXL8kXvLNfxxyCs9fzJ9aSY17SY1pAj3iofDf2VNJsn8",
  "key25": "4kpLogzeCwEhdry8bGBAd7yzPwyM2ASMtArufMFKQTC8ULUxu4vbvpUgQUGBwpihjksMyNsZtgDzaZwia2WX9Jvb",
  "key26": "2K5W6S2d3duNeSd1Pt7zNsiN9kadkeC94QK1wnKB111VJGhmncy57mT1DjLsrmgLt8y7u82fDGUP3kYQHfB9QaBA"
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
