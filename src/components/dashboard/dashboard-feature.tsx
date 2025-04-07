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
    "3fjJcCNch3ApE5zAhX15NoxFcMErVuwS8V53KJ7skehtjt4C4cHx43qojMmDSKpm23TBFPgCGvoY9MM1XoQ9doMi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZrwbEGBuDXq7uSx8AHgDeoDPja8Qi84d43rqur5iyVV9SFPtFq4gu1BZb1vZ4S9LisD2dEjntx5yZqYCLkxJikb",
  "key1": "3RUejxrApWpRqaaLgo9vNA5oC2CBrZjAhtUP7oKQMfS4Q8K3ohA9iCC8qqQubo2Fd43B7B2EFYoDBpWVQH91sWYS",
  "key2": "LxxQAuTy48pZft9jE2eWrjGn9tcK9oGCJjsKJF3JWUEy9xwjbnrYzgVjfMEGFeLUVjiBK46xiGebV3heRgP2r4F",
  "key3": "5U4ydCvPa7CYrsdZgk2W9PYTgtA6Txz4Lj1BoUyEM5vp98PvB17K2ZWQjc3XKLxaSKw137oCWPgToN9nr6vNikBP",
  "key4": "4CVv3aGbqURgxJiaJP1C86Fh8KiRw1XASvrA1YpRJyMS3KMyCAmrfUYdxyCwJTjBBhM7X3Sxc9WK7Bv4iZywmeft",
  "key5": "59kXmkEYekPScjP64aJi2LHCp2ro38WbYUPbyP61Q6ovD9D6e6nKfpqPSRmJfY41UR7sctUBTHkKQasqNhJWg5Z9",
  "key6": "4vbPVnvbTsJE35L7gpVtipdTsDWbuXGqMmfAvArysEsxCNiRa7tbUeYVermCmgDhTVggUFmANGsHBhToj117xaSh",
  "key7": "36zVyfNGjjkYrizw9sKkX1gWJcqKnYqvfK5bWYtvobiKPqdRDBhaqTHtySYMFeos7ghhnKeJg6bK467WdRzNk5dr",
  "key8": "hjzRqxV3HtYDa2hmmHVmE6VmDkx7UeRmD52LQjfGiJNJESoULE9JwN3JCoxYVvtKciZkdopuqLXQFSz8aiTtkpP",
  "key9": "3L5kdPGXPWAt8jpbFb11bCTBYeQJrHYFa8xZk9X4pyNuNz896MZYYxaHXgXqKVKaF9xqPysFnwFAKxch7kG7fLXn",
  "key10": "3AYkpNfXNVAfEPLfsQ9kpRyXj4cRVGu7nomu1mvkXKS91gGUKosYb8uPETwjPUaa1Hb2GgHYLZVUiuh1sFohSFrA",
  "key11": "2fKSPkDA7EwLrj58LikBSVmZrsuiyrJngFZbtDotAsTHgFyHudHz3PFeFpzdYJFT1XkuERyAZ2tNDSyvh3CdyggA",
  "key12": "5LsJ5kK3S1gDjLkUJuY6wARbdAn1HweZev1vePFQQNNXqNySJWRhoWPN6zj89iEXNzZg8jYGbKxVZDuUBFwZNLyx",
  "key13": "3s1DXEtbUbcu6tJUEe7L53MCGwRztBXwuZFfvh8tgXF98goj6PjHPix4UgXKhtszojrmhe2FwDuQjyAT6GoAe3jc",
  "key14": "Ctyi3Mv72FanBvDxZD1V72MMgwHHLLuLmaZwZK3xQCPZeg4fqUiVBFnhigYhTYN1QFZ9KNcTJ43B57puiXhJowk",
  "key15": "3hn5mXq1vNEWe9RfQG8bXKdo96p6e79acR8PKcsKpcnRhPdDq1eGdqceaLmTGxznYtbCsv4nupyuBNRmxc4mMfDi",
  "key16": "r9tgbY7e8iv9kvSJFHvpzyHuzJtRowboVkPwFJi3ozaYUBZRxmUcSaL5PQr1E1HhBzF1ccHoqoWZU6xhH3bBYcz",
  "key17": "BwGiFTSCdkgW4fvjBhJuCqQrQb27TRsiF6QXbNUFBVxHF36yqhTwk53CqzM66PHfFTGzRVoPv2nSBkMiNBXK5vb",
  "key18": "PBCcHWBJY1zs9GJJu1naECff2eCxXTijUscAEmuxvtzYQQP8EvfhPnKL4xenwNhbMVG3BhCp4Bn64XXcujcUJct",
  "key19": "2riGAWdBU7NjvhHb4F3sAtUhsKqKMEfg1tGRZdtKUGkFnZxBxpyhXrKZU9rbvxrT7EKZBMnRLHE2i2bNS1piR1gs",
  "key20": "59ayTzaJ2Yh7mqRSTmqN6fC8k2ULXKrJjgBaD9xLDaTR2DmGr3dDAdqzMBX7Y8TakjcTn8FidJeAa5gPdDpyQ6uF",
  "key21": "2ShzonUCEYjTycT6vS2buix238fZFA5Squg7P267dnebDoypE1U1eTBxULY3tnhxPyakU8jKVNo5dZM4SGfBcbBQ",
  "key22": "4wBFXiD7bRSEUYutBwcNZYHjZzMpJ7vNVe3k1Rq39ANxZt972FYJcvD9rZDFToZ6pDoZrGWP698wjmwPiFMBe9Gh",
  "key23": "WAcRPMERX6VmQ8GEWzSArqCqqEp7qA92FUZTvbHVXwe8HPxH53iTbGKCeNEConCkgz3tDm917SZFgE5naHu6rmr",
  "key24": "5R9dnVMt6EM8afHQwxWv6f3AEj6hrjbq3c6qBuLcmRH53kRgkN9ZaafoTMNidMJCszxSKbYYuaaXuhAXG4SgCne",
  "key25": "8kjPaH19HNF5NmZHLcNvFUftcGFs1DK8CFvWUfMK25psmjeWa1VKVM8aQuzB133krXnTW51JAGEb33Y95HDZgx1",
  "key26": "2TwKwXaMAvspBx9bn8BcNfPuW4tpzFSxF8nvAH1DZNXnAfYXYfk1rvTuwvFtDb2DF8MffxYG3F13mpvMkrXL7NY9",
  "key27": "5VtuzJU8x61g8FS6vjb7AwdtrAx88ykzFmF7ecT3d2gq8rsDe7wPequAQhqK4AhCCbfd2jNhyqtAj6yYGjrsahYt",
  "key28": "4MkcnVrZAYED1KPhBjMLbK3SpsR9zi4Rg6AXsAU6kP6d3zciFiZrUZcJLDDoYW2ZEs8F5xvuGXZKx3z927bDShTC",
  "key29": "2NtfwQhVaJ459S4QMNYQrJxW5yrofPTadXnTaTATTbLT2njWPRkX7KcBT7fjvKKa4e82NtAh94EpijRVTgXHaWDU",
  "key30": "4kKKWkp6oFPCPWsBKCbd9EYnuWGpN1avifTfsF5urjF2CEy4xYEgQWPfryWvFEgEZW85Qd5AZWs1NEvJ2rGsqin1",
  "key31": "fWcJJe1AgwBQXNz5VcSjPpGGUz9vhXfgcQUuAowi7JWJA3PSwcRKLAtSEUFn2t6d9PN63PcGXrJNVYpsh26iFob",
  "key32": "mdU3w7gjUuK7qoxESZW3ABy1UiYyi75VLZjzuQqGJjLx1DbxGZwnwyucjaDGQQWAHEjhvAxMuvjYKiPrwS9oAak",
  "key33": "4mGSJLK6xN6z7hkYRNkAqcjvw7oVTJz8wP3KyAMa4F2HB8uBAUqKk51RVVDP9y6gJ1Ywp7BrSjoP271RavH5kPPS",
  "key34": "3FdxPQ3CwdDiBquCrB6hvNAxKiZMxmQuRSqG2fj24xd5qwemqK9xYJUCS1aBMNuezURiBWs9kRUsGCApGijmKz9v"
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
