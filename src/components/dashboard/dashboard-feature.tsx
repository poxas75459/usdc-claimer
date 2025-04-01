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
    "3CS2cQU3B73thVLRBaSwfQgAJ9onXM9VqQB6915g6cijMxmWDKcfe9fc5biX578reJbaDxTA16c9VdJB3Yw5xqYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sF1bUEDX3C1N3F9zKruoP4Ca34atgtyCDAufNesAUNvTKqqYfF7qYzBRFqFvLJWshL7TsmV3fRh5aHKJNnUD959",
  "key1": "5ci9AGT2Z5RfRHgHqtu3ZTdgYYBi5PuqLYPqV2YDhGGZDMD2ETwW1KHidzYsStZAFhLqRQgwDbWbEwdmrfwQuNuP",
  "key2": "3rUgvkw85mz1XdVqURDaemUaMKqANQDSKmzAQxk1tB5wF4tWstNock2v1cyTBPdYn6uLzjHkQwiWzeinPNXu3c7M",
  "key3": "5T5EVvJXFXnb7hZUmuCiCgaE4tDDwKeQ7isQ23TgCm4f8mNQBC9CGXXjor5eRvfH9vt7doiGi2HM5pUZh1xNyEvr",
  "key4": "37DYNPFyVeBr8Viy7GzvuwT8q3mybpJ7eSD6nSM8GRmAFQMvE2YySrAJjoHp9HNfRuvsiBD2BXcVTmyBtgC1EnbD",
  "key5": "3qxFXxuPboAYZRFSKytvMKw4ko84fk5WzaRT2Gom22wiwqak6RuygBMYWjctp8DHEYxDZD5mmykh6r3RBKpc1rqS",
  "key6": "63zeyrPEbqmBgNo14EjdDoWcccYjYc3w56f1CS3q5owsXFPrPCwzaMbWBzFBWUgobrtkEwFsTJAhVoKG924myhdd",
  "key7": "5yeCN5nCNW9LzmjmUjXoHtB25FbohJsDAidweFfoqJRTW4XzWv5MWG2gz1UjSKe5F9yQQxCaSUAxS2nvnRurXNgg",
  "key8": "34yCGBT2t2M245AZaAZpSLXc2yLjdoi4sSrUZNsMRNxe9WGqLsgvH3UpTQw3r1ym9uakBg1hzgYmCbswRb6JxviN",
  "key9": "4323zTR73ZBsZ5b3xbWs6BmMcE9Bw6garJgdmpdMAqm6UwEKTo7aqZQXLayaVMAC1XGcoYoWkfQYQAU7Y3wGzPdD",
  "key10": "5EcQBw9rjgpALDjryHk3KMwBwex3J3tnjvP4o2VKkHyW9is8z4GF6mvnytKUNjW9TZpFujLvuQS3EMu58RYZuNyr",
  "key11": "31JAmufbMw2R2toTr3QFL2jDyybHMPa21rAh7dhierDxXr48AxereQR5yCKGQwe38c3m2VB1hiavR1hZUtUoF2cp",
  "key12": "2y5327TAe9TVqL7qDhYrbeXtPA81ZrxkR1owfL6mvPX5SjFkaDKXha95EZSimarDDjHbScsKGzd2YMwUzMB68Rt7",
  "key13": "5vpD8S5LacyvZKEJHiioMYCkYx4XPm1mSiUCPUBSWdgdp9ct2YBuov1qwUGgmMHTaVcEkx64RWkwvyDzfspfhXWG",
  "key14": "25rFHhsTU4yVi2P9pMdUEtuX9rLrayodtCk7fry6FJCp7KppBa6VEWWG927mgeFjT4FHeJnoaiQem3Ma5Vz1G96P",
  "key15": "3X5mRivrRQRQV3dy5GQ1usSAtzDcfNR4PahsxKcguUK3RwMNPqepxuPH7Mj3hUTGQisiH6YWtHCYQGdQmy3HBT1c",
  "key16": "2Fd7rGUHPfjweMMCpZFJ9C8Ebaifv1Sfuxw6fyb4E4gXL4k54kgJQpDpEyd9GVgUyWPTyuMoYKDZ1MPE7JfEcLGN",
  "key17": "2WJ6b6gzPgCxJ7ns3byifefFhTrt6RbKxkpAK5ofUJwqhdF5uWrH8WjGUJkaAp6yYS8YXq75a5zLf3HZpB7wykKd",
  "key18": "jPDW2XQbdC36TYeuzG4ndEoTurjmZDgu3zRVTeLnkq98yTcX4FpkwvWVH3BguzGTmWQmpDVAvjuv4AqkaFQNzu5",
  "key19": "62h49Ldj9ifvfejUo5ycnaANuYLHtaPGUpURBFJyxdrXDYvEnQvprRyDq1RRPnWGCWpADBUrjD5fsbp3gLC1Bh7i",
  "key20": "4Ji1jvAxWDB86QxEr1JFWk6BJomKxAwBGQMWQ1z1C9659LVwk1M6YQit6rzTEiVVj4Fz6XyAeBvhFEHu1m4ee1t8",
  "key21": "357Ky4rkYxoghFn4bZ9NDSG5ExaiQciJkTzKdyankqwrS8U7KkXbt8TrgkmzzLGmNvpXYtZQ14dV2Kdxx5bZUExE",
  "key22": "3abR9jzPAoFDjVees7NJJTne8jYKdnDSkEVVy9mdPEiQVpMuvitEQQw25S9eEaCca47VeNK6fhL8ubkA2ZKMHpKH",
  "key23": "LAaBKZe8tRsHZrJW7ovoM6dKHcYQ9fU5R2S3vXVieVpFsWrYANyzfXXBMhLXyuzNvH7BGgARKCDZYLcWagzDBzR",
  "key24": "5zXM4rpmYFEDnDZhqCPtyZiz5H3xKkznu1nF9J7YV7vwNmbHtFbH8imf7e5TwkYASgDMxVo2Lby79qqpExrocrJC",
  "key25": "2CepdhecsKwm2xx7DngaKBusKZW3se7SggnhR24wV52cwGT6byunf3DCz8WFbQkwNNZ1ExE6cx1JtEyH49KbJMEr",
  "key26": "2FsKeLqfHodRCrGqetki8VSLK9oAbSc46umrFo3dsBRrYRPEv8eX2WZ4jBWRXXFGDtPSesbrafQ3UAJJKCM8C6Ha",
  "key27": "3oF6nQtyqqt7QA5fiKYS4zH72f7QRsDhbAEWwL86377hTgWqfiXMk4efcpEni4Dg5mGrDpvBFHRKvaTQHFnohvDg",
  "key28": "3KQfcCRmChQqjhBobqKCcE6ru5fqv2kstRtcQwSvAvffuMTJN6wxiJpoZdhaojx31EjzRj2HqAqE5t4sHncY6yTj",
  "key29": "BSy7EPq7TDPyhTtbLLAyRuDFumUADw8LwybYGZUFBJcUbarzkHzRpV5MtbrJd9TQRr3J1qgeRxy46yq994zvZJB",
  "key30": "3PQ5oi3UZXWpHSKmCvTf3yTr4mjZTWXvnodUmpZkyqnn9WArmH9h1oUyXq3Tp4c87uYf2VoxbiQzq7dgXPsEZFad",
  "key31": "Xp8qRxDwkwta5dVHFF23ssAgbTA7toETEp67f3jqpJTXujFsZMiJjrcsn5ZQcU9cow9VRygqCJnRbPfdH6B4Svf",
  "key32": "2hA82u79QptfL6FDmZ4AoMhW1DnTouGkws9QwgSTEEwQj9z1Bse8Dfa3ndWkpyeShdYQAMLifuiJytdehPfkGuVR",
  "key33": "z64F3B31mUt9NKNarqXDQRoY5M7KBpMJsK7wxi7tU9992ct1EijXbYYTKgtDnQJpwdNwPYGf3z2Bu3kmQfDfJWD"
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
