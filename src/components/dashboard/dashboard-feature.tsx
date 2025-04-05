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
    "2ZgACwxsNb6fn4CfHwYuRPpsvmjM2uaB29bdsfoRtJocRLGSbuBfpfTTozKaQCo5yQCqJyKPwHdNEN7oZBUiNicS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRG5AnAH9yXHUGL7c1yh4znFsDUzNtzB86N3ki1Uwe2HnVqqR5KKZhjgfpySyYx5o5zkodhaVW7dZUgc7FxU9sE",
  "key1": "5DDaFtRE2W8dsMQbgmTHapSCJapE9tbkT9G9p6dywBXyCZPnoJPty9RYqAAxKdmrXzJtgvAs1qcrtg15cE2YYkiF",
  "key2": "LeWv8vQULEQ1YeEiv8mV7Am7qZP8MQ9aq9CPpqpQUeFUft2Yavr1VxQCA7UqWBYf9idHcdorcQWfmNJUo4Hi9tx",
  "key3": "2mbXc2M6FTDZg914LQB1gQgmUzK2UFfqeHNYSp5GPBkotbMcUqVJXjb9FoyhmfaM9GtZvBu1xN8jYG3r2eYai2SF",
  "key4": "5cHfrwnQ13dThXSAfqbLnWW79PBxvkQY4cYbVDrx5vgTgF5z664KfYrbnKQXb2FJRPxXrC1iMxpRSgrNWUtHxwKC",
  "key5": "4yKVsQ5LEBWpC2uXY367xnEzSTPANsLNRP8xhjr3zn56hHCBW8jwEV7Zh9Z9hDC5F2RnRYrWBURN6ZHxXeMdoq4Z",
  "key6": "5HXUShWV6Zh2xY31Gzre6dsePQpkW7SgvR1hshg8GNa4s8KWeTLDdV5KXM5oiJcR4k2AqFLawK756BasykayyQg7",
  "key7": "2rkzwhmWsyBL5MyDjr6KsmBz3x4Wave9PxotQNbUb2By6rkBhMd8kw2QeAFoKMqGwpzcu921gydqYotitWdwwPTE",
  "key8": "4eiWhH3V7buBvQqBhWRyHn5C7h9YTskUSpg3nvM67ABHTR6tQU5Aa6uCL18C7QpFVwA2PSn2N6KHzbHnvmJHjF1c",
  "key9": "3qBxx9RrRYeGS9oWRWFuuUqV2BjW52RZjt3m6RuaD9utUUrhCD87PSM1AyJcGKARTZs5nCUQ15tfEwrxLizXaoqs",
  "key10": "2rRpUEKzt9NvP4f5hEpYEmKn2BU1nfx9A1kiyXAQSacL8LZL3eMcW1YgDwYArjMGNYb2n8dQMaBzbdHcNgD6PSAv",
  "key11": "3AQo1xDpBdW7qgT3yRhbjaKYSrwCF7hU8vsFfiJaEvpNcFkbUrivPwsJUJJy1XfrAAzgdDPtiQEdWK6EZve6YSBn",
  "key12": "3CHFy9N4upfPk4Gz7Aw3hZ2urYfim6Zoy16dV2isVCFjrcwRpUgWvUkAFt8Dd4E8ft3Ba5bNwYEyU4DkxEk2Cmee",
  "key13": "2pUG87RyJW3ScXiC1JkQgqsCfq3K2CKEYNfiYz2N1cqthRL5XviisGs1u4oRZ1bb5UBpCj7GhiDssvk3sL2RebWt",
  "key14": "Dr3uw43uD3YmENoXxL1ugnpqBXb9EDwJJXs9i54JmbqRRA3shfGu5h8CeJVbYNATziWkgDGBwmRKr56Xx8DaeYD",
  "key15": "2xDc8uksSWxscrB61gmTe92byqnTzYcFeW2KYSfQBGGLS28BVSu7m5rHZRXRz5zWdh6wauy2Swg9NqSVf9KBxMgD",
  "key16": "66GdgNh1atULX5iWpRZ2536jDACpwr1AjPBWspgLDVa1Zn1bLUbDMv4f817itFXhUcst28ynpUCXoup9ASVcAiFM",
  "key17": "3ZBdCpPwre4jhofrJE5TijU8f6a21h9fiCXjnRfdtUjaWHm4cEpQveprKKJrbaTATDsJEobfA2f3ynxZrsXw7388",
  "key18": "5z7Xu2bEmhmoVDsiTZXUiY3FMSd35onDjx1mMkYYW4WY3CAJHLHpwjUYCno2GtPbxnzFT7BC7uCcqZ7JKfXExXk1",
  "key19": "66sHEzR3jn8uYiM24zzMv3P1CCScUf6n3Bs5jpgCLs2N1Y9quiXV6STbaxrxKyRsak1hHszjvJ2M7aG2k2dK7BmF",
  "key20": "2CmQvE9nT5HrngJMbZPJdwtyQCpEEEJ4sSqyT2BBrcTj9w2DuV1JkbtaKSuYKNrNbMszHeMHm3Rk5USory8QUsbA",
  "key21": "4shmUgeyRAnWG6WK46eiwfea1JkJ1JQ6sbC7M9rphTBXgpkLXSa9vjBeXxRe226m26xipGmZuB4yjqwY15pwYF9K",
  "key22": "3pAxe7bkUscViDxM4k3hySoBx67ABS7AV9Aab88hNz6HEi11xeQt91AemU5wuoUgTBqxwwtH3BZuZpkMwiYtbXSy",
  "key23": "3EKkagRnKz1rUSznWbSzriyrW4kgE2jDyB9f9ScSEeDCUCne49KTVeQn9ZmEPFAVe9HZh9FDFnAChMpuETDksifn",
  "key24": "3S32Sy889o1pnsf5oUjZyDJpD5ax1352UY7jF6YUw9ejyz4veYVxhTotAL6cEVKXxKA8VtwtRoH988Y6CzFSXXY9",
  "key25": "QcMAKhBvzbjXjJsTwiHuUBMX58zGtph8xLztWJ1aQUHUXX8nWAy5eUVdKWABce5ggDr3Re3SiTfav7x5QpLcenu",
  "key26": "5fgrN3sBTw5JAW216YoG3V1dNgBbnQR5VuRKjtNCjckqsezCdVZT33mU3B7rrnq91gYzz9Dbv21qgYU3vcTpwxCL",
  "key27": "4MBqQZbSxiknq35PngxJY3xoENzdvmUoGspf6mFaK1yt22hCSTSZGvET8CKdCeiwYm8E823pE16cSesrazkdLqY1",
  "key28": "4aQMBQvd2ZZGSV6ZtobWHud7axLgU3LZs8rzFdKqJM1FHy6XnHCfwBqVALj51wDbXmm3My9bx6NYUUs79nqjDsgQ",
  "key29": "5EX2j9NiKBqkusJMGpvdMn5aBLMe4WNKCRV1dCFqAKkTJ7QHhoEfj5wfTQgLAkg94bJzLdPUX8PVqTAwXvVrTWJN",
  "key30": "398DAVMEsBCB4oTSfuJ5Ny77WCwhYJ8QEaaGpX9tzbfn6p1EvH8wy2LSA4J6PCjvozWKQ8iKUz9V93W857sNkpeB",
  "key31": "3wLcMr11KSjGeB2gXfe3txNCxGThvNbGUCwZRC3H7xHB9TiLtArePN2NVCP2Ye98E8MjuaduPE7h6HVN23VM9VGV",
  "key32": "bZyVBm9WmSzrXsVqL6f749Yk7Aq9q5KS3q3TJePYXNvNot1VfvkSVaNkjprDhiSW9pNUEfsZ6qzeSssicJvDnSS",
  "key33": "3W1rsUKftHGrx2j2tZMJdKrjRWGPw8zsRhfCRcZ9Spt7wfk8DFKkWJWoUgzqoCTjLvJarvJ5u49PwXh26bjtakki",
  "key34": "Zb9amHu9c6Mfi7hc6AJSBzidUuSZ5zex9poC7K7pd7AVmFyQHRPfd57PZHS1zEoQQj6bpxUpYMYvsUPdCGHyWww",
  "key35": "2JBnBTSGQuB1hFj9Labu4wdA1BTdJ1DRo3g7pJcc7CxjRMf1k2ePGKYACyCivcjYAXHYNREhFNK4RCtTciuxrXzm",
  "key36": "5ZUbpwudeK8sLMhAgBGvRWrTjUaqi9KZG4FRNKKvSVXTnvhznzmghFQ4ngbaXM9JdMNGBRtHaEtQZ2DkUNz52aGK",
  "key37": "5s2RgLuurJ8rSddcVQJUWmsANNzUwSvkH3HiKGKhKYHjYyYN4CojP78K66BmaVrcrCkMoAvpHwi4GkEoXBU3L66h",
  "key38": "5WUM7kcHga8SAGcqw4C1MX6NBpbh7YRhhGho4vzQAjw1G18pzos81cSSZDEoiEB9PiHe6n7eLNEXfuEAp9MnXYGc",
  "key39": "XPyR2Z667FbZMx3E2qaSM7FLcdDJGUvoWaq9HeyJmuKdF4tDU4WPC5n4YMDMCBTWW4QxoPNczxnuD8auGQqEEbr",
  "key40": "5rPrqwB4dBqtz3uCYmtuYwFucEUV7EuwbsoccfdQkeqXMq9AgRjD3qaWNzzgvBf4sD9zc1Y8R8XW74AbDaPHA4Nk",
  "key41": "vAdQ1CBquF75HcSvp9whX6JyCo75NDfbz2JjPPim4J8z3wQwDLZ17Y2AmnQk34oFKD2dAkiDwz6Gqk4X8gcA1Wb",
  "key42": "3h1unV1TgFVyktCn2BUykfvSj93iMFEhLK8T1A45bSVoBVkZxM5xqFiirn9nhhMbdUPRmnjK4v94cJkYLmkiNtfj"
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
