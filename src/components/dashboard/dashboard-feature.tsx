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
    "3nwtBBoKu8VqbYexK3REySR7CjFbbdbxMkMTfLF7A3UAzmKAjPDBF22LNYopAVDEycPqc18Mwcxfsr9CCAiJTosN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oypDfhZHA3J4K2WGZvQwT6yQMoUcAzNmaYf1U4bSUv6ckB22BqHHoYp8CN7GvFkGcPGTBsbDvXoeREtCK5rTW7H",
  "key1": "qYuSU6HUncVkzegU4hyh9Sk1X8RkrmT1erPPWF3M8pZSLPQFqAXV5nPFbEhjnSvbt6DKu74Rtsd7ASn1NfybWi9",
  "key2": "56hebTJSBjPmHcoeFKXwyV1ryLURfRoPJzrswjLhBXoUBhjw1mNBm9yYPNzMn4tjPNa81J7cd3bgfqAwjVyBiaJB",
  "key3": "4ZyKdUw53v9a8R5yA7YqobAHhaMBVrbaYjZJNNnjufqMYtEWhThAFjQgqbC2Ybsh3LUoyryq2BVCQiV8EiksrXWb",
  "key4": "5TqX2q6jsrtudUrQcqMqWjhVDiLZLhog1ut9q1to6kdfNdA5B4i4geDLV9xQCvRaL8MwV86dK8AaqbC6ccAbxKML",
  "key5": "3BqboTQv7SL6LqYd3q58sNgydVU4vZcspqsayeNF1WYRo77BPdxDXFrRv8LG6t54gDVTs1BrD4u8YULHFjTQktHG",
  "key6": "2vVt4Jssd798LmiDqujUWPCXAHyz7FRLDqQ9MTHz1iK2HqN7mEzcd5T4i1eaayvCeB769wAvyKuHSeh9BAyJoK1A",
  "key7": "4JxpB2gNuFaM8zLPcj596um322Uxq1KPKJ73pHuugvAFvaupZs7dDES9XC81arLadZk2qTyDgsm5VbjffoBDefEk",
  "key8": "2Pz6Y25teevr4U3ZVKi3vXupEhmW5uyv5vrqg5vRmUyY2BWk4U8sWR72TjAXMUBfpmwDFTWRgJg7UX6aBderEiEF",
  "key9": "48GfKw6rh8qyrZWicGa1RA98mCSkqoJekc6DKLwQfQgxzy2T9GgWa9jj5hXCLSddydjkZ8ZzxJepQXqwZDxBwbgp",
  "key10": "5bXDM4DwwTcuSeET8xxibdTXNMTUyCrmHWGYgKdWYpTictWMvBTQnKHb3ALbaLKcnkjkLSMWExiyMN6scVGcmzxC",
  "key11": "2YZfe8DSbUre2fkpv8ZXczHSzAxdbxm8hFcNqkwd1XnunbY6dXtsYw6hyhSxaqGxArzjXhidRKThmnQkeTAyYUSM",
  "key12": "2KADhQNKTwVseokW7FsJDucGEq4DVbj6L4xjtmL4Rhf1SbbcBf1DRGaCqdtX4ADJdMeswQ4DYuZn8Q3XodhuhySN",
  "key13": "42XdZZnDAXFM62zAFsqM3jKgvgR1CcEuv3fgjBcwWzTRdsvGL87Ek2oLUpHR1HUeUJEbDwxGkevwu7MRxBzCdr5c",
  "key14": "2rLVd2D5imMtn7Hno7Jv712267rHJB3cVP8AtpwDEGQXNRAKqVJsgmy2EZtLwPFbLtn7zHhZwqxVyRqChfREZxc9",
  "key15": "4AsbxmQtKvSMhSm4iq8rJZjQmtEwR2ZcS5zCEkgwwTTT1MJPBSYcQ5PgJrp4DTzWfdwr2Aju3FRb7BQy6G3PWo9n",
  "key16": "22Aj3739H1tTPf3uSNtzvCpF9isou2HrgyMvT5UVUHcpHmrqyY7tEHKQtEXh9eKPbdgqEu13qVMm9wv9s1iYrcig",
  "key17": "3YQUKACaTqpv7HZhKZYco8gh3bEYzv1247pPTiEk8gZYqKHExsZsTQGb6kMTNo2fcxgnCe3yLUoata9FUWCP1r5c",
  "key18": "672d2jSiyT9FmNHPUzFTM9VcJsvwJoRUHA4rWKhHnpKSBAAhSdv6b9jMkX333zmwN83UrRw4tCcV3iEHRbgEt27H",
  "key19": "svtno4j1WyvXaHvZFp6hcSkJfBHCTSWaJR4zrk9eJiJyynyjJ9B9dsGkQev5wZwZncUF8FvbWxVUhrcg5ouSNEg",
  "key20": "5DaMSFcppkEEshw76W9VQEsob4K3ZCNYoHZyAuqyZ25r5dauyBYSzCF2s4amXVwxFAshANcb1r8EqLcnYJ4jrddp",
  "key21": "2sscm4x4EP7EtH4P92QZAceZs7dQ3qAiJZDPcNuRZysFUrK3xa8BiMCkirFV9Nzm1oXqQKGYEMjWDQAgjXn1WMnf",
  "key22": "5Hc5yA3dUrYbJxaUcNGarQV3eLDZNWCqoLPM1tfZhBZamQV8UJn5XNND5Y3xmAfZ1EGSuYG5LsVWK6TSLX3wM4xr",
  "key23": "56JHZopcD5Lz4hhaaLWjd5uFLZ5JGjySTcUfFs8X4ymLwgCW3SrceGiMJkNMXspAkSbGJ9BYodYzA9yHCVb1Vr8G",
  "key24": "32bba8PQETnfu41m51HwMbCA36BrbLzG6S8HR3RwkWae5ZvuB2QcSY2qjrPvs22EFy2tHmUJ2pM2k8nUQhTnsMaV"
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
