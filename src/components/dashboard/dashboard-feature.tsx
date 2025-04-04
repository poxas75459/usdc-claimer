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
    "3BqrEzXTRneTmbAQa68AwYcRMyEFYyuCyNXXm3JKVxPiUyyPVXfjksCtpD6yoGbmyh9yjiSUNtJcJeGCCHzQ9kM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hyL7QnkT6fqaZxuys1RQEm7yEb6aAKPiXB6gJ99Fi2Zy8wgwSNasL8yvvjbWPvwN9HekC2wf25cTikVJjbDizg",
  "key1": "2x9aowixJvAniALJUYDxv52ywjhBKdvesJBqSNkysRbMcWmKcopXPBb7sjGxPhTtwG5b3wn4y5GoQW5JKWuEWyyf",
  "key2": "2fmvYUn7WJACZ2xKdxbcqYDWp7iPuuK2aqi7LPuknwK9c16DxbbD6CAu7yKxNRKJ6fV6mz2qRzr4NWoBQCeXicdG",
  "key3": "32yAbV88WWzpnCCihNfE3k53pznWN8Hzp4feBKLuj4HgkRXkdyU63y5aBBNhGvhEXhKnvaRMNcZWn2QC5CyW8pdF",
  "key4": "2iPQ3cTmmSwLd1Zk8Xr1HyBxTAheV1dgwkZKYwujrWhU2JNHMpZtkX998QPxpHKvD4FSgSPYtoHh5Wn12w3MYD2Z",
  "key5": "4njvhJYGCjuWF9DuRsRFX46bF5SmjZ5xN1DmNctyxXubQwT7QDJUg9H1wd6bcP1PfbcUxVGNseT9qmuX8NqAegj3",
  "key6": "du4rxoJgkQVuxWN9ps7gsXi2zWkZgT9nDgP7swSKqrfDsrajjivcw5NZKB6etxio25oGwjdTG9tMHHXkvD5LXBs",
  "key7": "3SNhxqTMHWWQ46gyez5ofoBGUAS51kRSL2q7qmeW2g1UH1K57qBxzLJhzZeP8Xwn24cYkocAUfthe9MyeBsxMoUp",
  "key8": "2sJNNCuDNcuWtTFrCdStNDTyxbB6zvQ4d4kC89zz7LRHmwsGzR9pqQpy9Wk2qYUa2ZuRRiRxPiMGTfgixxb1wnGB",
  "key9": "FQG65Uy3czRSiLK7veSNPGSiqor7zUQwxJjaKzagFqhYFL6AThKxqfzdwWQZVvkpPBMZXdJooyayaJQfKB8sTFw",
  "key10": "pui5QG1RCzFZoNubLyopVYTN4XcLqaZ75x3SaryuJRs8nFudfVAGkRK3SUvXt1QvjENSThTXToTGz1cAzQ84YYR",
  "key11": "4MEvYkB14a6vZzgnQEYRd2YGm5st3LRzvNkLkbbQgWxpeyqsYPFy4qWMb2kEDGAyeVzTyc6dsR6hDADshTEEa7jK",
  "key12": "5ynQLWJL6GtTAkfNxVxchWbqRBTS7AvWRZkWPGGr6As5tA5aNCLgLtqqWDieAP9nrDWNgPdWgmKJFDF4gdxJ5e7T",
  "key13": "2R3Z3e7P9JMz4bf4wEKFEPc2cEwJ2A17yfDpcM2KpD19YmJek2KdztNaWM9VzJzKFypmdFkyimPB6RbPH9vxaj9Z",
  "key14": "PYhkd77Wu3LUvfYbqvyvxntcmzpW9cE7wUpSmr9JXnC2ykvzn3mBXvMHYocGG9hXA5KJrdG58pMvnvaRaULBjvX",
  "key15": "WwWp8M1Q5ANBwfhuxSiMipZ51eCPsz9a78DnSYxAJbxi8PgVHsZBXg5x3Bg3qSFvS3rTq3kNCrfaTazXsFmijDi",
  "key16": "2yntC11TwDVKdJYFDvsrNUHStQyEYhD7sRro8zKrXkAinMBf7gCU2rXJFuX7rHASitNhkJzQ3M3XG9ikgu4ad7af",
  "key17": "3BQvDRXLGzwEcfs94MpDHXjwSxLzQgu4yydUFyymdV5GSHH2hyeh7T5Uu6ykv7LDN6nLVcdgqqZ4y33YHc6npeqV",
  "key18": "4tfVS6X7y8CpyVFBes6pSuFcLp27zeUYzZfBb9SEZ1HytEjwbHt4P7XpWb2tRCNkhRAzgL1wwN8sPRPukzD6EuW7",
  "key19": "1GS4tf27x4aupiWWcCmGGxitkhiLqsXxbBCYK6UAzNL2JvT9fZsxnrduAhJGXPQ9bKvorAAfMfxe2RqDAyg3tm1",
  "key20": "Am2XvMPUGJMEWqJqH2kww1ENTm76RWtPGvnuz86gtxhzLxQdATm8JbVUkk6aXHEhXoaTcqo3fbPWBGGAJAYK2Mq",
  "key21": "2mRTSMnKDNp1UhNwckENiTGmcYK8Qr8noWG7tz58qFrfM49kFwsCY1ThprSNUCuoMVo1rPaKbkTEypFbmeMxzxVH",
  "key22": "3PfgWUQArYxqTETToYntji6tLH8BeX64t9CoyyU8ndm4E2CH5z97516Cvh7C3mmVddrUpwJ4xJUAxoMurfxL51j9",
  "key23": "3PUkhj5Gas8o34QCZe74eqpMzkZRuomXhvdE3chdZS24Yaw5CRQyv54AjeCkHaJY2pqybX6DuJUJ2vZfn22qyMoW",
  "key24": "2c92aYEdx7Zo4AzDGta3NoQck65SP4a1behseh8tECtjzFkjMWpcJFAdoKAQ1LsnY3f6D3wSV8nPFXcCpSRWXf14",
  "key25": "5L4Nj1Wr5LFS9Q3R94V9tY1nPeRujkzvXwYQXxnSKPRnYM22bCrpTqG7hgqH1h3EkYrQwmimPHEqNJA6dysnLZ7L",
  "key26": "kofzWQG3RtRgifyBUAXkkJGjLnY1C84Mq9EhnCDp1CcM4zK6WSqSex597PEiERsWFZvBJU8D1xL8CrMYK8s1TW8",
  "key27": "3EmhyBzTzg6NS8YpppRedeFkUaJSBpcmbFiCejsapjSVBLtSY6XQcCEj8KwcvmHjmVLqEdTXC6RNtpHDnyszXx4n"
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
