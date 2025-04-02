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
    "3PDEe8AT9PmFDx4nH2sxQb5bKj7o6fUQ4j2gPjBEHUhcQYPKZwKEfZPf5jrdibqLy3XRMxq53Nkc9coXctCQfz1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WNe5RckUthbKtEmpHcYaByqpcP6i7XUNs95TQqbRvRDmkEv3HCK24tN7ytfMHkS9hwCg6bHcoeFfmHe3GQQNpJ6",
  "key1": "j7wknqkPK6mvxfVScBByGb6NaBh6LDHBkg8dB948JEKqDTE34BDgeinUhWaGtTMFqu9ZD1RX9WAY9srbtVPXk8q",
  "key2": "2ZvqWbUFz6En1oD9HC4LXA5mnY9GsvRXaEq4ocXrpV6dzuJ4q2vzstVsYgH31hSwhP62dC6daNZ8v8EauESL3KPH",
  "key3": "3x63dzsLNexMZAW7aT37PP8Yu6P9MtdWrBiPd9Q34St1Kmh6eTFNRLG8Jb8NqoGAdKrApGgCH2JF482LggfwyURF",
  "key4": "5mEhWz68tf8skiaxc26UYPuuLVZaj8NdvopzVaskXfK8jsHEq6YciKaRZ7reVtsTaQz9JPMdk6edCcy2EQwyksRE",
  "key5": "49K1C4DvSC8pdEdDiFbX9ba5xQKa3YnqmAyfRXKsZ6LiRpSAbJTvkjWfskJ1iLCgF6Q5HBzgnAyVqGyNWouQk9LH",
  "key6": "2voaXcsQuaycg5FS3EAkVsc876H22hFBvoPJK6shNs9Jd6aENscP1R2CXQF5Swvgvap8ZJyh7xiTHupKpCqKf4kx",
  "key7": "3ALSSh7diKeHkN1N1mHQDjwXHfF6CbSYAfCEUz1AfjdyQ3UyPyYpCZu5XTD68CBsspZ3LXKu6M56v5MBsEc1yZxY",
  "key8": "2zoWvPFVFutMR8gFYXpYjwNWzcPYZR8VTcbuxh9SqrLJ3da1wUs8YnruUUHqVny7jUXdeBzMPbMmSwayHZT2D4vU",
  "key9": "5rUodtZhEYpqMR9635G4JKT7q1jq5BjLo3jLyYiieqf1QiPij6GWgPV54nEnofNw4LwxQKgPU5AykgsN1dMCfKyY",
  "key10": "38CM8crMiYcTc2L4mkX4Mu7CLBnyCBpaQ47SrPbtXv5JuctR7wZwq6BXifve2ecEstAvwaFVExUZnu5GRS26hzyF",
  "key11": "3JuAQWetemwBHJEhUBhwBgbMXLyRDJeAkp1PydEemWrTbF934nWmPFW6Yob6yWiyytEgRBsrGNKT8fruZZds5CqQ",
  "key12": "5mcnW3tCnSYYMt8ukgcoFaHTVsj9K99u77RvJ6ZHsriDNhgg9tE7ppRaTPkqRkhmuAHbjdARvgKtoTvMnvDbcgmv",
  "key13": "5JuRW47r48nvmH6uYUSHd6Gf6oz5QnLnLPVwWJgor22rFo3sWCkZGkc56bhJjxY3YfAekpvjBAAcYFssKSXk3qqz",
  "key14": "3RwTyrvZL9tJcvju9EGz3o6E8UAfYGB8aVKkSC5rQ4JoEXDNXZ4DicPPDqjtR8sgS716KkYTvkowFxi51rgKCN41",
  "key15": "3xPVScT7iQ1UiyTpoYncjnY5MzUghBTwwC99ENVUMXMZMgYX6M1daJziKguKvipWEKMrvGopKLP2t33cZrr8M6Ht",
  "key16": "3zraLoo8cJqU6wVbC3so2rtVYDnn3zdwhCxJWmCyp9AZhx9jMr8iuUsgHRjiHc9kjHJcJ96zz16drhnXZSiS4A6n",
  "key17": "4brLjmR2yQaBFsFd6SD37RVeG66YBM1oGfRFoE6o2TCL9aSAiMiese5BxYcr3SFpHFfyHDHj77ZGGwnkYERjpfKe",
  "key18": "4RjgzFYY3jBTE7gkBURRC8E9n3usA25f3znv62vfABR7zfCs1owSGXxCfKfaLK2uSVXMrZtKZjJ5y6KW2XmCC6N",
  "key19": "R1bwvQqvHay7q4mg6TQonkPwXWWNvnyTFB5VS633CNJYNrb9g73C2NZixw8d1Ap1UnY4q7tSd75wZryajynqKnC",
  "key20": "2sE9i2zWnhtjpXoG9oqFpqeVWUr7doMYMNtKtbCTdYncEbPp29FNJdtkN1zY9xeg4cseN4imfMF6insxQGSFCQTx",
  "key21": "4oZ2MSvg9JYMTdtVyLHZeH4cnHYHocYJ8nqSNuCtrTgY9XNsaWECCP3jBA7ZLuzpXpZ9ghAoUpLQoT8sBMqzhimL",
  "key22": "5iND9Rr9GVeUq1eociR312wCvFoa5zXRjZPx5FEBrseXBtm9ipsRUS8mM7o2uK127xtAJbKsXpBLUiGZQyBSNUNd",
  "key23": "2zttZQod5qEygdjcPWShVEKd2fMB2BxsuNAwiAzdjYxRUV2HeLitRocj2nR2L8M2az3KePT5Senbh6xFekLYeW5w",
  "key24": "4zT7LUwwWygEeZJwnSVVuhNfY8TN3MLpFZpD22BJSknajY19mmUayG91WZ17d3oM8uzsKjxJ5PttezaYhDedNiV8",
  "key25": "4d2UzZqgS8ajHVK4HK2hJc7wqE9nxreCpPrQY5P1pnC5aExjhFNqDuStjNqFbwdxgAsC99VdKSF1vZpmsKdUmQ3",
  "key26": "47wmqxaAdK8uL8gHbkQQGaEGncP1paXtkU1S5Y7V69afR53AFhsncD5wJBmobLnsMtnMJzzneriKQyrjYqMJbuz",
  "key27": "2Nzch4oDXis88wsNehAZqu28QjDgzFXHyqBFNjhgoJLDHnoa9L84hphcUbYxDAhWYphzPA2A77qRAzETSNStUBNu",
  "key28": "2bu7iptU7CEeAuAZeVYftrdpfRFAFpWjf8BubydBqMj9zpNtyjHC4Rtvme8eozeSaeoyRwbsM7GdCMFXv2r9gFdU",
  "key29": "CTA61j3jf3d91biCGMG2xqBKAyxhdm9YfFDaAVnBndsJa4SvBahMS4Y7yWXrGa4fqEW6mujBPLQUjQcA6Nq7tUv"
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
