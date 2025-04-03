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
    "2RxgvXXnrjkbqa98hGa52i4LG3Hn9bwuBbkZqmL2gbGnDKZLoDzDQAJecrFBtnx83bMJ1v6XdwQExgtSAMw59fZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uqch6cqJs3B1JRSzQdfskkbq3Mg1u74jiF5TkUEKSs9x6kQKHPx2QCf5yTKtzedwNuML1SMk1cNvFAGHKfn5i42",
  "key1": "42bbKaXUqFv7d42admno4qBUhkbujnzrtQCRBGWXTsc5EWkb8PxhPYBWTstmyMTYaNAXUMWeoGeiDSqJz5tczpti",
  "key2": "2kBSGhVAnVLrDToeP27dmSzLatwHVHvD8Ud1kPqGccTZqgd9gX3YUbJQSH3GDZgt2xpg35iy6LaNuHYRhEQVnLs4",
  "key3": "3fZkbXrh2CG9yj39yTHrjbrgoAHmE9DGEP2UnpxS3Wjy4ak3K8Doo7VctTL7dtXsNGZa9TMVGtjC2gmmRB3jFX3x",
  "key4": "5cHgcsc7CubsvscQxDwma7R5YMkuUBFiPiRycPabEew9258R9aLg4NopkvUvC2cuWCdo2hpE137ewVuHtf8YDcAZ",
  "key5": "36ny5evb1eMD54z6ZZe4UsNfZG24ViHdYZtk1dEPjKf9hbSf1Q3y4J4jeVEfP5B1qjfL4BC5w8qfupwShGA3Y4gY",
  "key6": "5iFmiN23E1JA3JZ7URS6b3fydtSnyhhTzZfnKuAqBUXE7oamS5aTz9bqjSbhXu3on4ckjwx5eSmFBpuZFyLQG2pX",
  "key7": "RYoiPpCczqpLnZvjWDsMZ1RDDms5an7jXV4kpLm64gposgNivQwe6t3PaX3WJ2BrthZmity99uvuosYFcFtN5y6",
  "key8": "5AbZeByfrpvWcV74Q7AasirthykyPiXXUSBu1pW62jGCL8YhursamuJ9ThxFm7R6UzmKN6gYQXbsEUgNtE6iUANH",
  "key9": "3PVQsu5zx7pzZLADuDAAyyqHLyTQVaq18753tvaXYS2C4UNeohCgLbeb8CiogrZZ5hq1qyEdmZSRDM6a726HatCN",
  "key10": "3a9X5zX56yGJNaXJq5PSywRyKmVCjFnaYPSLTFws5D6Mg64YgZMBUviBQv5bSKTwfJjjub4CMkN4LnuDVPZ38HY8",
  "key11": "S2KKz4DJnruZ7oDh8AhqbkMwWHa3o1gpqPnHqAedeGhKB9KtmiKsmWh7Y7dvXMCqnobGf4U1qjGdFSLZ432nBN7",
  "key12": "3mSSMYPd27wd8SRWTZnK6rwJaDatSwYHZCiwi17pN8zhCh4YHFydazrFWPFNsCNx8uVHiSkHGLD9JjF7rqTqohEz",
  "key13": "tELnZ9YFg2iJot2PiwppMLazrXezrVsogw7RHAUwfZkixeqa6AUVNCwwNyQi9zM1WyuQV19PjAqx9o1xv9mn1Li",
  "key14": "2XKt5TECzoUh3US65X9gQfLSuEduVeM5f4jAu8eAyn4gQUJfePMvmasSDf675b378Z1XsWB9PpMGgLGLVfjDhSnh",
  "key15": "2d8xazsN4JYw43MUJ6F5HMM4L5XizfA52W7LqAx4knWqsuMMKW5WG7WypM3ASCZVmjt6UxgCHXz3EanHURhnndts",
  "key16": "63v9F4fRnzRRx3Ly2hCmnVVzRTgiJwnsc36TUMHVriuVL9wjy8K1hsFqGZpx6GdWyNqZ6bAXo1qrNpXDvibRYrjJ",
  "key17": "3Sv2j2CWroc2RpzU3NQKRmmk2wfMnFhsZ7Vphw8LU3iULGi37TrQbkqpFUNeWjMmZj5D9ZMmnfJUG8oYdomAQp96",
  "key18": "21RAgnRxfBGqHPtSz261KzKHgdq3wVGkXnUjd4UqLvr9zHLVrqWUy6B9oy7EjLyT4effkdMUiEJUrHt2yzmNMoAk",
  "key19": "wv6f728p4eaX99ZZWbQr3YZFVZraENg4uTTHMT3TV5QMY7HVN1bSgWaU7frtY8g8ZqicTTjN7VNVwWLyfPTY6Sy",
  "key20": "2hVSS6erFYG4jG9kzggZEs6ijUYjTdtjxUGV1yqSNYQQW1uD664Zq8whM6KNkkZ6JrTgR9qNdLB4C9wARKdm4HkL",
  "key21": "3a5c9x9RmNWdYp15BEYwekLaWkjLtL9kmrqjoxHDTw6EHEo2ndJG7UusnT3krqNt5va5Um61avRW955sL5VL69V",
  "key22": "5bep893YHeBWCDHGPFhyfJdayF6pMMPbnhXPmuRakrXkacwtQccjRjDedcBhGVD21W4EaFNRGosFFwdjmVfSZkR8",
  "key23": "2obitgwX56SBpCYV1WyJBU3p3gCx91UT441143Fo4FDDFun6tbLW3nKZTHw2F38nh4GkYSqhS4G5nqS2bf3FoGnP",
  "key24": "41iXsgqaptYdiNrVChABiAtZcpBu6F53JrhnHeFsieNpJ57CGduTT4yTVwUcZv8kAjjyoyJJJ8iAcXUgJVdAbHL1",
  "key25": "nyzF4A5jWgpvV7Zdbtqpk3A7vNgAfAughtSkQVbyUBQNyREKSEprTh7HBxEsz3u4JGbaisqKh2Vaskd5752TjYW",
  "key26": "4cXtt7EC1UvkPzMpWCnGFSzaUNbTaoX4FWHrpz4cPc1tLAA7Lt9MmhQKCMcpRFhbcbRADuJAVnoGnu6Jb3q4bYFV",
  "key27": "4ajEJfCnnAynvYBzjnp8WyXo8Yh3sZL49zRFV8nn5G3Yxt4HbQwPdEeEQU7SrXvCHrcdFjCt3ttwhvpaCN2XDDmV",
  "key28": "65RKp5eVFduD2phFSBs96BBqd8MC7KHi1vKET5mgwLQjj269xYeQmjekGVo56WEzHtv3aFB7feg1XM5EjBxtHoyY",
  "key29": "3hck1Bv3GoLh4CcN2h2FkX88T9hUpvf6sw9FrgCWJNjZ1fPMTKxVVQqY8mEyCBBN7e16uGpqjA2gXYymb3Tr6JS5",
  "key30": "KXZfA5ppfhRLqVc3wnHGZ5vXYT3gj88wbimvusrJ9XR7JcXSyAEneGV3GyhYM49Wo37qcmRcNcD6v3aiayXHB7V",
  "key31": "5tdtzcHGEhhtLXJ1yFw6cLYJjNzw1vTnVkR4xCApdTLzyKaaM99gMVLakXMshixYWAafWqL87UiWWZPNFQDVgGtk",
  "key32": "4z3Ts6PxmTLZGSDHMWYeW5MFXMTSV5QY5bCiNWYvo4PKHdqc5ZyyxGBPXy6B24aUfB3VAxaT7eJYeBrpxub2Zcsk",
  "key33": "5AYhpH9Ar6R6fCGYb1YWRLnYJdzmCzTjfGQpgqMHCVg2HkXn1mnyBiGNxRDi7QgXvzFiHYgpVzddMLj4bFfCLUxA",
  "key34": "VzeAWC5n1AdQfxrLyi6UGMeNgmv6iZWTEpDzhX7ZXmB8Tj71qBMDLgK5mYDzriM6W6e3ZCxqDQSj186tJ8i39Cg",
  "key35": "47Ta87Mvh4x4om93gXE6qsmJSAeQ2mAkXDYYKQnPRQkWVwZMAws5CJBgbPDdDhNsXJ1xcuHDQGAm2sxdt5r54S4a",
  "key36": "fszejYE7mri6vroM2wayW35rY8BpSrkgoiF8kBaE1PhoZBnbCmLJ5LoeWma3KHvNUPXcMj4B8G46m9sRqxY6rMn",
  "key37": "4wv1EBemm5jfK2umDkx8pyvUDU3FH3Uko5vXdTrmYXJ6i1odQJ3xXqKbHERayjttW4oktfv2VX7NcYpVWGDEAz8U",
  "key38": "5Xd8P5fJd1YwQWRAMQ5nLdGJtd1kEX8nvWuiC3NBoGu9PhW6Qp5thSbqYdyz5zHAAceGyq38sAwukBA6ynBAJchb",
  "key39": "B761Prr2mf8AJrL4NegMyAkrMHYvrRs1AeB7Ds9E1A9CqVbGrmK1w1hqXahNov2TvDJPnjLq7qQd77S61AyEMAy",
  "key40": "2puiWUt7mwEX1jZaFtfNn4SsqwBPq8KkZJovLYbRmZkk752P1gzdHd7rYgkwqEsde3PSKspiLLtbAGFDwe3XiqUi",
  "key41": "55skQeuHvm9AMtHQvijajZyUNJFdJubssDryhV8Y1VV2QyfnnqrFYL3pFFeG2ToocN7AxQszqTPcTmHy8yH3X94Y",
  "key42": "5LEit9V3HKsyVAuAnmo2u3ZNRVjJiXt7ybguwh6tqxgCQcgsaAX1vcXYcmxGKWWNbDxcQjMv4zPRUWheoaqfTwk9",
  "key43": "ArXpgozLQCzrfNx95sDUpnJz7KqBZHr6TR3v3kyygFAcQHwtp7XdKS4iQP2znLdnoCwtn9nJJ4wYMxoLuAFaUQK",
  "key44": "BYRgDHsx4L2fKAndEqE59qWC2ABRw7AgSGw5jugw7nh51sPh6FvZAtHDB9j259uDjtDFyH17v9xkdnc5ac8275N",
  "key45": "2ahxEieBjDXWCCe2L98t7FeGnPHMmiwyymFE6ycNPYSGPb7jdyXPLLgoezZj9J4ayZCmKt2GMpBWADReW6Z3MmZ",
  "key46": "kjWVmPZaeJmSU58er7TbSsJvLWyVEt244JfVpkpytLK8qQVhtsrVirxyNGCo5tK6inDyJgLyKsNMKykft6391Js",
  "key47": "21BHurkm2vUjkY9s8zKWPT2SHgbZfwpyD5jQcqZVS8Hns8qa83j3KPWsJx5yEJDheF9NVsYAfiq2wvaRTj4N9pmZ",
  "key48": "4LxyxGcga23CDohwRyRVS7UrpxoPfTTUnM8uPMxULYa6dvMKs6CqFB538E49Y5cAa83NBqieXkJE7xJqLkfrQX3v"
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
