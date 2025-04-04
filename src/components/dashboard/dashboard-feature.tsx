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
    "3FJoa6AqSHB7wsJpVcyx2Y2H8oFA9YyJowAZUSxyx1F5Benf7rXcuTyPJAuug3E5atYuboEERJmzL7KtA7NmyGrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46aKNUJVnEPnXu9ZvLZcg34BZUcyvpoVA6gTFMFcqaXxk8HsYehWp5WYprs8bUHZymYBfKhyKFyZx7xh654c5yaf",
  "key1": "dnx8Rpc5HkykV11de4sC2hQzxRF2RYrPyBFmvYZ2XwFidcFTLUA4LisWBnbkMABWbkk5KVYpdtYm9i7DYnF8GvA",
  "key2": "4ShPifoKqx1EnzedsjWaWtBHSAfPcpEGy3esQ1ivZczud84FRZco1TU4dZrUSvhWaS3UeNupXgzwPDYhL3x5CQzK",
  "key3": "4RBbSzE5ZK4ph5yesbZjs4aaVAy8iG2ZHZRHrBvD1p813R74zfxf1FYsKCRsAozGM1p1pP6sAcMvJ5xK4NLeyL4Y",
  "key4": "49sLZW57GfyqFShinSCg7CPj9oovLjZzNRn6bBu1kuTS8XYmCkWL45TRpBrJfFWGP71TRGyCbMaEJxN7JFAsmbqk",
  "key5": "2DWLesDngGywmTSDYCbJjZDyy2dy29ifeNK8UESLvQxB4Ua4s58pXXKmgwLsGZZLnB7AA4nHFbU2Gqj5oCU8sUmb",
  "key6": "2h43MJFyGpm7yH7T1j3YqxV8cavtkR2DkrpCDoxePok6i6dJie52SQU8t4FVfe9AgroVjgqDpZR6R1EHSM8dDH4T",
  "key7": "46HhsxS9W99aPfKsLfYPXo6x6QUXvz2DWmftXwevxzr5AZtfC1DxwsYRnGVSYK8ZdyWmZtnfQLa1GtGWTo7tdn68",
  "key8": "5VoWcuiPjjasE4DYYSB1q6DBbqy3AdMc323qsjN1awjednHXdUDA5K4EV7RWj74xyqVYw7pDLYbEEawJLRsxkBqi",
  "key9": "5gWh2sUomvn1XgZFzEeDqrYHhLs2VAyKdSGGqxHxbsbcXCZRcSNx2WniZiQxDiycgeyHKBmVp4LZyBzC2hLFYUgy",
  "key10": "3Hkkwsq1yLwn4Jhcu7okG8EufEJJHa5B7xuTWWQqvfpGg71UMeWvVg2KTbiT4jtgV8S2DAVzH4z4cMzDoVR4BVWx",
  "key11": "N4cEL3Dqgpf8FNG6V7kniVfPyMzbNMTh8JgBXmJ3vpoDZUDRkZowtYdbqP7jQKbkVvn5FBMwV2gyTfihJzSxcnh",
  "key12": "48xirUbnrNfy4MzTWKH3tuNB4a3xBJz45Mppm5E4rC4jqyuo8xtPfQVHcWz7Jn1S6zCbYFSVnhPLEe1cbkZumhvz",
  "key13": "2s5WetWNv71NDEjKc1cnSTLayTAohCmbnkjTLmmYuRcQaMLcqLAd49EHrHKUT9MN9UUyZkLaWQFvbPbKMidf4nxJ",
  "key14": "2TjJEbwAjgyNtF7PUYFVRBmBy9ce98GNrz2au2mXUcLs2V1QUvv9yneJhfifc6vp5Savb1QWJbDsLYJS7G47Yx9i",
  "key15": "2zWjwJArwiiPuCuvg94CZFinJGRr6Ncca7tookMim3yVax9z5kidQsp8XdHc5uTnDNRvnYeYfjTMfQq3C5RJAkxV",
  "key16": "247t7WtubLxurLUSpzemRvvXQn2gZYfoKsFxCREkYNsB7E61GHN2fLn4fNDHZ4pGdomx5eHWaAXwGTmNSgBUmiyc",
  "key17": "2mKAkCmmKWuVshuSgVjDJ2tSQv829up7Md3wd62SqiYG5VNcFD1t39vypQHE21qLry9vsjSgh8rdGhcakTLU7g9h",
  "key18": "26w5xDJsun3FvrHMRpo6wCG5xoDxWcW1j8hQ7oDBoT6hd571cUN9enU85KvswBmmY49eNWbtPpwTyNrRXMujsQKn",
  "key19": "27ppbT8qHJ5bHgjYfSwSrezNQbMhXqtEPv4fqVAkdsqqPthppyf87rjpRTP9tDWsVu3RQm78NeEMhjMYTMMWGpbD",
  "key20": "2T1aL6QoZsbT46yvvz59bxfRxxk5hLtHfKnXsuceia7WWkZECaxV48zYeP9tE7ExEPSFoKHu9y7LGbYegppMEEor",
  "key21": "2V8BVwwKao8aFZSFtFGWtSFBFLTRMpWj5uMjMKjw7p65ZH9t9oqpu9AVE9UKBBgztxxQ46YpwHtQfgwdY5KJZsMR",
  "key22": "3StVx1m3S3GBZCBbPkU8s6jpfwnwKV2m7d38mUKUjv8dkErWSA9EDpX4FMYb1gLaWUGWpf2rnTnbvwNeStTbZSpJ",
  "key23": "5EoGZ4Y4yt1BztEKRbfutXCk78EXbW5aJxBXkMSis5HQSsF26XJd2VqCuKeUdcX7SL71BJSyFfSFMzTXTd5RiE8y",
  "key24": "J6Z234maTba15TQF1WekrcvayrgnTgRz6zDFoKgRsn4Qzang3Aw378cG7PcHKVdkjpk6HC9PHbGhjm39JrBNWov",
  "key25": "cQ7jjhBTaTZL3ACiYoWMDVxqDngtPAKtanF9GxY17rUPi9VPNSDKRRiYSukBgypyUkgLQt33zZdC9hc9CNezwgj",
  "key26": "565sdyTbza66u8aFS32iNp8skdQQANDdh9EJvJJcuaPKepQzgzvJB8hfBUjYwjaMhJLFKdAQxu9fEidLTyaNEWfK",
  "key27": "47jU1EaSHdKiWmg9M8mnQW544VNTx77KE4Jq9mWhsbAsotCfDLGGFUYBni32qkySwCQjoEUxzU9JGFMcEcQJTvRb",
  "key28": "4RRwT8hKxA472ALcjEtJb7fQz32ZD3x5DjDSHnjfVU3rxH8NpBf5MpQympBc8pBHsXf3AJbSqK5JjYaMevjuShvS",
  "key29": "4mextLDnWqiv12RXUF7iKHJVXScUfGKjcvHU5nf5729wyNDfp79qw9foCVVAHH9hYekio88R2xv2dEbi8qXhYMxu",
  "key30": "4nLJhN1HsieaQfSjMqLayjLXwgvFTGVagfDeuwAnP2NQ2s5K7kWDDaz8fBtTEjxeSa4r5WQcuAJNTMzHVSNmNahT",
  "key31": "4xquSf18po4AeAJ34anXbTjQLxPXrfxejdouegjDMMXBVY14cswtAPcpyM5jm7CHpLru8dsnLVNwH4JkMs9DoNkz",
  "key32": "4ccqLqNR6wMRxapucKjecWzpKjNJKhP4MGZAShegrsq3UYWjuhBpgBZXXLqQ6s5LRfTLxLNhSLY9Y6jNGE12c18f",
  "key33": "3puHaCAUtriYNKyn5Y3GVt9WoTD9JvfShqp4BLUCeC1RAgLcCm4CYLPgYxR4p8b7oXvJz7tkp8c1SdwF3dtgwBky"
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
