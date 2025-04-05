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
    "57nb1feoQdGzL8kQRSL7zgHa4Pe7qT6hcuXChj3Bwt8sAFTEQYagyvPM7bgY7fLGh3SvB3t2VZEygrpZHeUb6ebD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9RCHxWd7wL2z15TPm4w6xHj8FaphoT5Tt9JYTNYvbxsuCuhZq3YzM3p1DSpzSVSGUv9ac2KyfpiHfXEeRLLVWX5",
  "key1": "5to9pdCUkmMKtiCUmhQmXT5yp3umjuz6VAthskXhTz7Pt5zo46iDoRvq4GEk9BTNhouchceDx7HufLRW7a1Rg1wF",
  "key2": "3NbPQ3SzApS1K9FxsXZXBsJcHDuYMYcNb6PBsmMutMqFDx3Vv5pqyyx1W6iTZoB4qUvH5Ay3CUNR93nib5wPyqq7",
  "key3": "64UarYwB29CJSq8zsKNM2E8HMPL4PCo2QGbtatJLZo4kWFaZUT5uh5e7sgCtsEAjLGequMrAA4kASgoFb46VXRs6",
  "key4": "63eaXW47b1aYKNzrLjfe4JWaYeZckowpQR3BXdasCJaFfhSkPUtUdVK5nwDnrJQGtVAvxTnt3LnNKj6X2hGhw5Ps",
  "key5": "5GkUv17LaNwrHQTvtGfejKGRFBNEvzZCc9tq7nxbRAHw3stQ7VxxvH63ZRWuQAZLJxg3Td7kZCs3bdVtezZj6jWC",
  "key6": "d5CkZt8dotxm43sXEMW6zq9TE35JaR6bMYsCNek7TvsMJ9sU3UeZX5ArgtPtZ6widVYzZEkiewguNCDsERtvUkH",
  "key7": "iSRsZQhEiaPP5WYrfmiUNMb25rjArHj8bQzmYC6bxqEAM1XjL6ybuZ86wE8av2eXxiRFCdPhAyGHa7My3f9hgMF",
  "key8": "2Q19SKPJfqATiYGwxhdAFHAxvKMyefQbS1REvoUrfBJDaQQj1h7Xzcasc4xFti6WN4HQVXQAZ6VifULFbVSvRNsZ",
  "key9": "tV8f9i8xJDKKxkcXaLh5PUhUZw295324o51wBQmscTTjki7oUet448wakE9NQ9FxmNH1VSuKAhA65EUVMjWyjFM",
  "key10": "cySTo8XHzdFpHm32H8K56cEkc92fnLBXwJdQqzuukNrUUGUv91AGSnZkmGKV6DWR76czxy9YcCunYf6JMCToMrS",
  "key11": "hwA2AnCoyWrkFjcXsHc2XQyVGpg1gwi2WK6JrNXq6RuswEjgtAoxJKGYnzLGLDELX3Z525wfniYk9gR7r7JKTAV",
  "key12": "S5T2mXf6uEXBQGBa2xz2Bfzp99p8nc8SfL5xQMF6psGUnij8xnX7WnNzU4zsUSywmb5qGHLzfCJQT4iFkckaKka",
  "key13": "3hrgvgwmq9mf5HwH77bJEpYCUw8cxw3G6wu73b97tpHYkGXwxtzLrnAHpGcBHk3xBGArmxPWxFzfJhc6yaNDu8Cu",
  "key14": "2JEZwegmc3Gpw74TALiX93yJ58fPLpg453MN9FVuaERDbCF7fD22soYCsMd8jNkj4R2n2nkMsDwAWqKLR4jZpBJs",
  "key15": "71DDPjZbeaTEw4qXdZnTZ9YY4ruprMZmXEbHRLG568Tyn62rc9jmdY9dY9zXcmRe6N4HYLovRfHejt3z7qvh5AQ",
  "key16": "4bPwJRy5WB3yU3ZbF9BgoUtw4mmpH7VDZTBqfqkYdEiJmemPnHsMBB9AhnRP3eKzKRnVxoVTzgHR4Mcts4HVrk8o",
  "key17": "5CQg2jmmRvJjugN6x1hNhQrPQ9c3hDn5FBLbbKzXfw124b6Skf9vP4XJED5vBr5Xni3YgcMrVqaHLqSceucAE4ze",
  "key18": "2wFS98fNTi1ZfEqRuc3Fa61f1b3UpqTiePM4xn6isUJM9Kggjw15dVNh4ygqsRAMsihwAcYwjthPr52PG8aPMX5L",
  "key19": "4cqyGhBJ3YfnAsqSKeumWgK81QAnfbSfyyHBVi6Md2iXJ5QsBtgpCVho9ovUE9XbRrTom4dQHS7B2hfe4Z3s1jKe",
  "key20": "31FCNYdQWbSMLaqZkUpUfrq5hijmTWmnbNFZDo47SNV4g9NNj6Eve91hsu5BX3RqA61UDTYUDj9rGRo7Bez6u8vE",
  "key21": "4e6DbU7MKreUxXLobJ8Wg4JsEHvAZut3Uw1QZwEHH9yDeMNrRC6hgH966PcGfSzhNae3rk7vsN9oF5CSeFzgcC9z",
  "key22": "3MMr7mydQg7ND5pemZrFAojf79hEKMdD4aonCdiX2rjmwesfqoWF4RR3GS2k4LV9EoYik1pLKapqnb5zGJMoSPoT",
  "key23": "31xkM3PGUDUGw44KLKkQ8W22nQsBWtZ2Diwr2Qnv6ExnJG2wboJWCKddRZbkrXczeCVCNUvhf9t9uNGd9BHffpkb",
  "key24": "FT5YZdXT7knmfPxy3JGe4dudpj9o4qNH7zTtGHvCVmXYJkNNzZGqzqopZEhHWNUpUCzWVJJHt7qMXC4zA7im9fS",
  "key25": "5qCV3meH9aQtKj7MZgMDUTHjYUpsHerCJSDQEr58LHKhnBDecCkCmCVFtFYd8NJELm2yvUTNyaUFBzqxpsCXnguB",
  "key26": "5Du5crTLouXzwoAHDLNhc2UE8kqRaoyd3ie6CnCwobYWJyvboyPgkyKYRMGdxvRsvkf383SfKHyYnjtLzTziEYYU",
  "key27": "5apWR7NyTnRD5gfm3J88w5vD5DawusVSpc2xfT4D5a6agdk98Tud4PmH2TA692ZMGbgANAQBwBD4pNRrB2Z3GsVF",
  "key28": "AiAJHsNVwpoyzCe1hKtKjxEW774i9GErxWNVie7VKWLrmw4MG2kcvfm8Ndst5gV38RwGzYLJDu7h8LyJS2HLCLQ",
  "key29": "5va5VJ9hHsHSNhPyZA2tWEzSVm5Ur5JVRbLUFnuEzXet8KRZNhGqnqzj4RhUS9zweRF1fZaGRni6RZjTNJvUzgHA"
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
