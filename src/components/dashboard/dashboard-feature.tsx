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
    "57rU1VnY4W9n5PKGz4Bi1NbTQc7jabFsCVkXWJiLWcqNqXvFbhz1XUAgc9C8uL5xJk3tRNru3zwGRh1KLQRgoAuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HhLbxegJ2StGQvFDK1J6KmkWCFbtegSdif95dtNVkhx3hVe7UzhPnDPda7SoJuHBiZbEK1Q2Sh3ryphmUW6aNwi",
  "key1": "4ZmHVCjSMTBxdoK1cX3tFdBn56xJm5PBjxFLihJfXTFuqa8T6ZLEaHq5ZquiDE8Yif4NTUZxKv1K95xabpQYFzUc",
  "key2": "5ewY1f2DAxNeN9aqKqRLGwfyJ8aSFBXg89HoY6XqW7yLsUxAdFWFwixGCgVfsU2AL2NZ8qe3b5hBbD1ZLtLb2Jr1",
  "key3": "4NgzFYuUBR2bs4B4SDsNmPEv1hh2ZysLm9xhMEwFpSH5PCNpK8Tas1znr8F7zcrhoLhJBJskCoEPKSoRD1w3kJfX",
  "key4": "5vxcEAivLuq3sxegPLo2XUELckjsueMxHnnYLxiVuBpSAvbZxpwAtibyuTAhArrCZY4YqXnwvo6j1bS68pbRUcRj",
  "key5": "5ob67mxVmCbkn8RA9HouHh3cb6ydxwZrayWEJaEyKAc7ETwAxzKfAm7B8Uq2WXh6zSzZ7tQi41GzR5Fo8aMPYP3u",
  "key6": "2i9nwL4JB5eK5YV8avJ472MBiNUgZ9gBxzZKwgkcKA3ptN6voTepkFweRnRXqCi6Gy9JhqaHronUqQef1usSoQPu",
  "key7": "2QJTRgNLU3gkTjbPP8RAXx21BQFxJy1p5V7y3uBuGXoKbWSKKC2LMLxAFAMfdeBMTCwkoW18zfpMD41UXBKj5Lyk",
  "key8": "5WqbaQBZF616isTStHGZ5ZwUNbMGqJ6HgD9kqsEKPxS3Rs91UngnZ8EDhB2aYhRbJfbn46aYkjZtiwbyVJCyEVLS",
  "key9": "2SR5JQyRch2nBYbPHyRtJwJaQRZ3peuZJvBEEMxBwfY1TfBkatDnDEbdLs6vDorf2QU7tH3UMpvyTtEPFt5vGqGi",
  "key10": "29AQBktUUFrqmK77vkGmAiinNBgkXUsbn47zcH7Tah7d1jmCq2coGPp36o4GruBocUYV9HLszJTWNBddJagBkrxp",
  "key11": "PKRfCmk7HftmgeDiYg7UZoXcmrv6MuhZjSNEQbFQjUkzHJVhemHMfkn9XoXc5acy2WTPG4z2NFW3SbrckXsT9g3",
  "key12": "2CqW3U2cW8UmQYJekDtoasDrFHQQtwgSCrE4xPrZppRuJx2DeRF5udeaxLZFCabC6EMurh8r9jPR9XYkJsTRG3PT",
  "key13": "3VpXitGMCLSJ2kmYs4qriR29TzrvPnPAXh7uHbCnQ3fyU4JAiSif9UaHHUBFAejV4gLwDz21p9cej6qJpNuHmWWE",
  "key14": "4HYoWcPi4a3Lytx9XYfPddo5xP3BdCeMnz1jqjDeZKAYw7okPXwEXVNM8Q7jPjC56Y6Bm4MERk9zNc7JvQ8g693K",
  "key15": "4MHSJeqDLZXGnwhsrus63XE2Uor83TWdYNbyKYtzqnSjjRJwSLYHAX5sbrmAGdpNTdts3QkiK8tZxcpXHcQHZy2U",
  "key16": "3vMiECXqdGdWecrY2eXRw1dkU1PkFchVsx29ictN6ZaYqVNaioUgjhLkzXTS4eq3zRM4Yx1hgLyg8ooo8E4m31Q8",
  "key17": "jxc3oAtLJGBdT9ifuwGxwrtSSjyPy5Sasj6Krb5bAJCSWwEDdHdziBW6pKETJkZ6qhyofhkcumgMbUPHqnYkabN",
  "key18": "yXAZKGdNigT4rou53uJ4w67cQaW2aAURTZsB73sLJTLvfnNsW5Wcf2aRBfdoLSwWqJ4rbcehQ4RQfJ3ziYBuADh",
  "key19": "2DnLG5GWPBbtuEELKSYWPLTbSop66eW4YJ5i5xC97GawiLEwrhftRg1FpAwUXFc8Cq6LxdZKBRqRggPAya3t1p9t",
  "key20": "5PAFg2iyGU7WzFe5Zq19SYajjTDVH6Azvy4YUtsk8j6AjaqtMzmbXGnEoeW1qFGzyjYuWsqDUcZGUXzepLvmqRHm",
  "key21": "2N6tZWt8cVwjRhkwE7QCotzrFTEyEfQFTDxqAueDQNrLHD8SMLEb7QPqK6JYZFzy8MQBSswYG2ZzZuk3okGgSRGi",
  "key22": "3BJ4MhEfwCy5kQNzXor4SrM88NQjFgZacAGg7ayVvqabhpCgGrCa3Rh9pPSgqTciiwHshDnaq9HU9dEZCfvaX6ZN",
  "key23": "5Cu3Z6Q8Ux2q4fe7NyB3otcmyo2oYiDGuzZ36DArAooVXkQycVJCA2cZ42iqrAR4evnMtPKpVPHgcRAtsCLDrucL",
  "key24": "cdUr1vtmGWBBMYbVzDtYbPCvpgSNXcAutUnuvdtL6txZwTf38HVp6BYituqNUYVqQJ693yCLpYKecBDWT2UdXcL",
  "key25": "4aMhsNn25SLTrhcYrs9fiarMedNCfou2ASG6EVKUiSvHkqR45KMkLQEZL5RenpkG2bftpL8MqvjyFRvfS69b6cVH",
  "key26": "2U6Rnvum5j9JSpn1NGMKhdTcaDcQ99sBAfVqmHgVdPVwJmt1UcwcvaKmMCt9VtnoUQX5oZYPueEameNoMbyTA9To",
  "key27": "4iMm7raTafzmZSWGZuW7nWXy4FRXjbjEjqN1uUFZ7uus14qWaq3ZyeRJxb5D8tPKKpQkQ2M5UiZWrTfqzzfHetpZ",
  "key28": "Cma9rmeAMomw3frA5CMx5wz7dsFVE976ttqTC9m3yXNwxJpKbJKPBsvf7fQZqb5UoHh8MAR72doh6S5FykDPpJf"
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
