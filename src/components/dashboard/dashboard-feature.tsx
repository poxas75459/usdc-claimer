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
    "38nRPorD1uMFoREzKAM97MoHey8ZRHLFs6FuY6e2KnmHQccBk3RtdN4MiupjyxkP1wrZW5DuEh4BeKYHgktFK9pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C2Sm7Vxc6gW48giy8x2rwGkGCqAG97epiSR6PRcGjS6BAqmdhPoCWVGn4Kk7QKrHe9Qu24ic4WxUbX6WBvzmjZT",
  "key1": "25hZcPCUfYEn7EjnwPPrAD2FsPnnH6dALPciD3RHn6NyufZigmRZv4vqhupTqJkRQnJG7jnagw8FseUETrwK8u6A",
  "key2": "32QGV6j7fhLFg8i99GHxxgPjwvCaCZWkfQf3bgPFC8qUGMzbQ6qiBBaPCwknyaZS9JPB7NpNj2kuJHoiDY1z5cxc",
  "key3": "45crszXPzJXFgKa8TeZp3eJDrnkhTGgVmssUcMqmKbJCBCUX9NZjkb67F2LdY9xYzoYq8a4XNiTHvy4LNGc5YjWy",
  "key4": "49fNSDjijoVeZeZj78H9nzyrU4sFbWctFYqtkRrR3voSkGgrp6S5oPfwTRGFGA3GEbvvffu6bZPnznvk9ZdYG3BJ",
  "key5": "2w3FRgKrQjZqLRYEbSihMbqPjnVep4hVy3txrnQQFoQu9jPJh5uPxrZi81JVG2X7kbzv9NTCmLSfqAToUArQb8jy",
  "key6": "62ojrg3uTpFdTKsR48L7TASFQadSqLq6ak4SN25bTykt3J16rvkHhZ8BQCTxASvTQzfbEgUqy9annDxK2dC6VnpM",
  "key7": "2wmQu3CVNSMipWrQCyrhTPenacf2ppggqAVfZ46jYTWLTLKUBbf2ojc92DPEWjX913fZsUNFNzNxNaCSZJu4NJ2T",
  "key8": "3hceXooM3qqSCArNyPdaeuixax6YvTMkKrCuoqLJf8ue2hMxcJj5NHYY4xmLZYakqpaNCBNqyCFbvJRfFxTAGwcH",
  "key9": "2boo7H58ZDGmgBnafadBeXf7RqW2GVPtPv9cXvFvbeVqDY5FvLAPuRS6cR7HDrh5dU757g6yQq6wXCMmxY2iJJiY",
  "key10": "31r4v4W24KhGTDmYKyGyzsAL5AVgDXbauExB4WnhLeCVQzibSGLDUzcEmgdpo5mpdrpExYEv6qKnHBtc1bmFK3LM",
  "key11": "62B5CXbdkj8d4yaTZ8nQMB9A7GNTgZrFTPuQx9zDLAEBtmF5HFhh3kv9pUWQwhhy4hoFX2skGb7JLZS4BrGxebje",
  "key12": "tzqX7f5U1QbgyNFBX91ePNWLDhLRXxtUHne9VkwrWQLLbGfyj6cmXW3f8Lmz5KqBN3iYjacmz8txekkmEUnoqnw",
  "key13": "3E6NzRukPBMvH38uAcyY9iiFnMR9K6yYgfej54fxQuU9E2yoNv9SaRknmUWiuJMRAez19ocnJQ3d7b2vxjGETrTP",
  "key14": "5ggvQv6KV5mgXW9cWA9sUYze4W7u9guhGcLCGNZg8UrZf7AQwpEYSWWGcFu27XLWJ76dgnRkiySV1ALJLmeije7",
  "key15": "2jvsYF2Sz4xwC3RaghZ9QGRmr556kKY5BcCAPkg6yL2eMdG9jUhWjx4hdiRqBYQHnQJhF7rFsqYfXg8KgAf4Tx8o",
  "key16": "2zaRqJRaU3SeGiPHLvRNybqibpYB4h3pimXuQKoFZ6aki3cDkEinGmwaZKnGRGQXjSnnpwLkLnnj4zcNCUw2sgv",
  "key17": "5z5GA6cVSDBuYSyuiPZuYmsNzmebDLnqPURStFuaiUahsdfBrU5aQWCDThimokKtae8fiTtWgHHR2HXV8srq9yBA",
  "key18": "3428WyCicrCQJwZ5EedWgq6ZnSsgLjtMFHmm8ee3Wv8s9Qh7zk6Yicem89gZXveyDPSvwBej24mt54vgBDwRrg46",
  "key19": "3PzksMajRh56CVRXMLh9yEgc2842Vi53cGYyCRFS8yWoc1TypQY97xCK4YWK5BE9pakSKkRmSi5PZEYHzbPzR86m",
  "key20": "44h8rb9RUBMrnQbfCcn6noDUZE9udE8G3W7rzEqPP6S6nATyK3kpEMCTJiJDCiU2xLzgRPrfwseDJAVpZpQwJnnF",
  "key21": "3PMLZP3FF4joYsoXzRzGxtXCriCDDs7touDsyRidcYMioHt4XTBkBQbQ7kSR49TosjnPuRZ6jdSYJcswAEbRS6Kf",
  "key22": "4LojQvPrUsRuMmvqWNchaTHfGp8j4y1jmT6yfW4XbwJHytouaTopY5jCHyVyjWyTNvuG726WAwdMg8fHu1VWVqqU",
  "key23": "4mzUFe7DL8xR3miXq3s4pZm47RN4Pji3BVrwWWMoVmYSmVxuEV43yFuvczEdNKLmanNWAP64aCVu7aKdQvFcVsH4",
  "key24": "2VvVcWARdYb6Eskbd9NzFv27SRt7NXWu46wyeC5cWCr5i88X8XGdrMCAhQ2VGXYRv4vfHVs5ARL24B65pBPAyyUv",
  "key25": "VhfwLaMA6YYozH4MAnFJCobLESxu6f4DwsdGL4d9gV7EyfBfBcBA4yXDomsDWDnboMDTvjjtUdBUW3eveC9jQuc",
  "key26": "3dg73kPfy8ryvtfiDYbSvmhjZ3hGCJpXinXHof4vFhnwUaREo9PaZVnMEmqJXg9zNmR3NxeFPqKMb7q84EWcEgM6"
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
