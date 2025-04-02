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
    "3xN2LdrvN4eB2MsxQSESkRnv1wVwcFNJEi2X3JXXmNGtJGq8Y1X8adDn2AXz6QtDptjATqRbfrpDjBUtJFRhTXzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HzJWxJLwzwTVFCKmPeYBBUpPMBdNixuzpyshKc8TUyjPsDSftfQS5pxVfuCxpyPKEqePXNYeJt3if6xMdjDUmuW",
  "key1": "3t4hd6un4agzPruv8qvxtsWikfHeXw6d23cqUiL7cauMG9fn6GYWgVZ98h3rv5Re3nqjLgi5uohr84AeozsgQJY7",
  "key2": "2GF4JTPBWwduSC8BP3Q2hUvmXbN4VqG7hEZG7b9jTbfGzWLbDMyNcJK2i9yLWHUPbvw8ZvskVPBhoAtS8TDjZnxC",
  "key3": "2oEpqyMzSR8YAaZkPq4WLfwvkwBLZCgMb6MYYe3X8CcvDmVbFamvKVaCNrp6PexppomGmv9o97aHgoBU2jQFhVZj",
  "key4": "3ShHnnR2KgPC1xaHWNuYq29jUjUTXP19ic6nFjCRG4BP4ip6eFzfZJ2ZwSQm7X9n383bvPbq96WJZXFhBp1ag1yb",
  "key5": "4vmkCa3Eob1ANnZcdu3q9B4HYWJyFEjbnUc9hShfc8iGay4aiJMXxNraS9iMS7cjZNoAz7mx8gMK3HuTR3eENuYe",
  "key6": "3k3n6MtLpUhLS9kcnL5jd92sJyUrQBHArrx5B4Xtai5m5jWCwzEA1dtH27bgV4dXZmgAtjrAKC45xwciyZ94DzrP",
  "key7": "51KzgAip36VmJUmmyS2A8evBZYiHfSfGiyA5bozsN2cP6ikcr3NyPhTv6ardDbFxPgGqMWcaeHdaJsV4Rkjzhr9N",
  "key8": "2L3h5BWCwm9p9ooEw68YfhXgV2GhGLMwj5b7qztf9BYFjBfn1z4c9ZaQokLSSz7bX9QvojVRZzzd89fTcgdwXHhF",
  "key9": "4krcbhBCSQFiDzuwurFErsXXCEJRhTecuMP8DbGmncfKhGvR7HgxBRFdnu6ds4nUjFZmhCGPYVUE3wvTTSAV63ot",
  "key10": "3E13E6uedbD3FYfmVqJ1BDfrdGMS7gzAKSuPWGsL9pvNgBE7kKbkmgfPNckr7qTzfBaKrHUV1VafhAMNRprHJV26",
  "key11": "4JF7Pv3qG3rAeP94827QkBHjdmueWiX8De6thUS3mmUcAmPd8Agz46thz16Z3ub9GRXVbKCRZjjrwBnpbhYjXQw7",
  "key12": "5R5izW9hYg8ApPXCMRiZrzSukd8CzviJm3XG7QeUAJPjpzstsvkxYBt5qf9VYchiKMLYC5bSp5nukj6mdsinHmdh",
  "key13": "4ZSvxavKRAHV3LFvWg5AVzENiEGVM5uUF8C51v87HWttEtcPKnqVhnTZviQZxsQYWZATPPG5djEcYb5oyEXVWyKZ",
  "key14": "47BspziYVkfFS4SU6HBRtHPduyZonytRoCKS7KTKeWXQiskzRnrjJTzpsWF5ikDRV6BpJHDAGYBGR5Yp4fHwgVWC",
  "key15": "3vC3fgSb7QAyZkqvAQ6vAwDWZwfkD9G1SShGQFvxJ46eqBMB2x5DZcemd1PGXKiKWdx8USwUWRnkPPKCgwq2oBFK",
  "key16": "4GuGCtwQYJQCMC2DPfrh4QeKtyigNXx8tt9sfCnjCudYMKf3huUdXrXYbmCw1rcYzGXvMU41VgLb3QMv4it92Qrz",
  "key17": "F6TyxYDqYgKLkAcMQupcqEukgwf1bcpVQgBVg6Kcy9EDzNN4cRcJqFTdbR1huNTWbSvSPzBNnrh6WCg6wNceTwJ",
  "key18": "53owN4KdSGcvJQWjBD4Qegt8EWw3q11sfLAWmnrRs6naA2yaJvG4qdRUZ1zwotwoYqtTqGacoWcRFqHTXP4vhQ1F",
  "key19": "5fogJYhXLG6qmJRr35ZDG4SAn8qXifwJutWn1GtiEjKJeAWZUGK6AgQyvJhaPECnrzckQkT43rH7goEYq3DykT1P",
  "key20": "5kQhYzuL8QKiB8gfPxvqsmJ2Mr8kcV36t9tcJEEeQWxF2DogukoqHVj86zkXknxVNkZszpE6WZ1PTpVX7pwxb9Xp",
  "key21": "4H1ZLwqsJxeN5gxeChzMjkhXoWrNx2xiLm5PfFyar2T919rpV5RUcr5Cd5zrLihT8qPJuVTuHrFwRXkBZNKcGT9W",
  "key22": "4GbqGaXh9sr69arTagpD8qjubj1SUPTyKcm1woyni1PheMxt2Uw5X9FF3frrY6LtMgY2HYsKearpQPrGT8W9oUMV",
  "key23": "5B164F5FuFRwBMDQXHe1CRP8iPP7sgVrY7Rgiq4TDc1EYbcRuskBnuwGgneVk1vUnaYShtFuDJirikezTjTkbN3u",
  "key24": "4dZeVZemYF5cPVJ82Pxpxu8TKCkQHJfNYpj1HNFqxhBjVqrVMdC63roxrN1FYp7askgo4XNCjezXBZeeiVH5grKh",
  "key25": "3yQ51xmffxmqNQdf1ZGRAB5iXUtv5xEpLqmwrfuJaNWQRJFSLEhYFcWZLua53p83NoyE5d2enRFMkQnbkPHUvaD4",
  "key26": "47w35DkupreK8CkayfbhJVttiL36Nr5waEZTtkSfb4YB56PXrY9TSweMm4Dv2XSVtNe3429tREmz3Eo54MML7SC7",
  "key27": "SoJzChLdo5DiPi9bWKb9r7KCuzrJXPKa8Gph82dSTAVRwcgHfZ2DHHeqJUBhhyniGBhmiWtvQhSG6WdGU8onxSc",
  "key28": "3UJrYZ4TZCVrCQikdgTdMVLhrZsSiJxzrr2REA5zJkkGkGNCHeDQ3t67pLnP4FMacpxtLWCZgxN3Woqq7dAcVbg1"
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
