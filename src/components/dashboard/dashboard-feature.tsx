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
    "5JyYSbqWMg3wjBGuwsiK8mdyxgDghoyCjcJnUCmKsAECCahzwTcJVKbKUvvy4sgseQTqRupTkWzFRtNtJXnwpuVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceBCfuyr8DHh4RhWAQpQmNwWxdR4Zt6ba3HaKbAiMzxe7XkEnB6Uy22aw7GysAZvyW6ucKpiN9H18PqRxDceuwc",
  "key1": "5UPpNBfaRwFAfuSAKy4zPtsx4GyaGYHXgQmC5rgGWfB5t1Fbw52WpoHQvsyxV9XsPkFp4MeAwFahmCVjK5LeGyDj",
  "key2": "5DgRirQdZoNDbxqbL76coSuzEeQZ59qaYedRfFiZoLNA2SeTfuB2Kuzi5CeHvuMeQ6JaCj8UDyk3Et8Bd5sAE9TQ",
  "key3": "4T2qpYqoenM7kMxPo3gYaJZ34GH3kF14djnGon8xnKyioy3pL6kzZa7FNV3Q9qMp3nn86gHe1hdAEXvp5kBzRkhZ",
  "key4": "3ZeNP9KHtEa92vajetHFPUBLWk4qNTRjBnZqAq5hBaEwrmKoxvHEJj9tgFrGTwdS3dBSMxc6qDmMQbQU6mCQY8h1",
  "key5": "3oGeVKnKwfmodB7wnNSgxdLaYCCp9tR4vzhs5zPRp9QiDkX9wkxoozCC7B4Zg1HQNV33doLNu7USyR9nNHYyQRyz",
  "key6": "4jhtsdHxYbu5NG83o5hQkHAaZXPVQH8YZdVQP8KSF4NAFEpAD6Mxx1jRhdN9Mk3FRqLRScCHUjpQFpuCApXGJ5Lx",
  "key7": "2TATkcnbvD53ZMPfYHh687pPt3zRnwvKVjaj73zRXoGtSfh6xuiB8xCLVi9ZBL8BZ931xXEH7cpdszbsUC2sBjZF",
  "key8": "4orzxgsNUM8n2HTE1fZu3LHxaeJbx2PnuCEFokV1eiqjHDttwuVp7VD9burPq1cQfDuELFLzgJNtivAaPtdZTk5K",
  "key9": "2rFXi1CXgJPB3yEmcozshU4PF4LbWE6UW1qoAfjvBfZjQWW9cQnagC47ktiMHcrDARBQTCEmKzY8GYeGtUmLEfv4",
  "key10": "3mbDMCzVyMatMJP6xSa8bBH8QfFvxZbD3eWdE2CsR3ye3RgjVDXJqpQ4ubpSP1YivwUZnJToFe82o9QJroyAXNSk",
  "key11": "4eDKYJPXj7nZP9TeQYz4f92HygoSk2wACGG7xRWacZfBAbaYk3vHU3g89mUqpRpbK2uwnvW6ZFxmQToC9DkG1hU3",
  "key12": "b6hRXX4VLqi3fMz7KBMqwqp8H5zyhRgRinHsCTDByLxrcxCRcVmuqBx9Suqe9A52S8b12o1C4G95ok3TCo933mR",
  "key13": "2wDaxvopDwFpdLTuknX4jkkCQCEXom3qktQSW8Nv8pb1ntnHtNKiNKCnqp4rRra7FhAADJ1bpo69TBLnqEYngsLs",
  "key14": "5eC4bZgwCre5nh5JYFFSoRYuswfD1pVQPV3nRAyfctvME4t5iA6tM3gzjdvueEKHxLayXaK82oDujnEm9UmX2Vss",
  "key15": "3L84Ng4wGrE6WE7Lvtu7i1zYQTukvRottemT7dN7ZGDZ9yvd6qy1PX4M4Sgn3EMwUueNZGaKicPTjwzrXTu5a3GN",
  "key16": "816r6jXSqLcG3hSQKmsuG4EESaX7UUC3TxT2Vgy6Az86nVJJSBqDwDMVtNYsXKSfs8XXg7NwNfMoaTre28zAGtx",
  "key17": "5cwn9rT3tTFQ386urH7cPsgYoWpmybLMXMZPUQd3vuuvPz5RWUV55C1LJbDtF9qGzYk5Tr3h64sMB1jgJimYxznA",
  "key18": "S1983kiwyZ46ukUb5YsyNgEQSzF9ptnm5iXyJ1L8ZTGdPfjRgivLzDtur4QmiN98rj8praYPWSsvMTgD1mqvNrS",
  "key19": "xLVA9Ya4U8CWhExb8GJsNuiwL4mY6E48kmsVsyrLgjd3DzpVpJtDRyb2nG4D4QoE4SZJXu5TL4H468rSXMwJSWj",
  "key20": "2sCRaYSiYfGMJDrt27KHZXcrYbz5dw3GeaRkF6pxDnS5MYDr6z36Abdamyvfwf8tfwcZa5WK5NpZBDV6ntMpbf6x",
  "key21": "4obF78XE9fZFZReRWsovjV18jxJk77KczMW5FKR71D1y9Wx7B6G3pKRUbUv1YtojfW1VhSRF3XFDXaw7H4P4cje2",
  "key22": "3CsSVJTak4t7Nqv2DR9iJWm7yRxGQFzegwmN9zzpw1ahbEYKXyuubhMvNiX1onnL4rnpKEf9hESNS4Kt5p6zSRE6",
  "key23": "2PHYzghbM83yc2X1pYncsC3dY4Z8QqdfsdRWwRPqnPknwFtA1QCyhQprLZ67kvmNTptjVP4MYhVCU4ksPBeYxMmm",
  "key24": "3g4WrVCwj6GxrUqs5zy3Lwu18dp1JCe8AZKtx7XNj81bkPQGF9gYaj282QTMB2KicUN8JZTvKk2Xhpnm2JgZ59v3",
  "key25": "5ST7M5C2WiUzAFLstyiC3j6K3xBbwNBUm9dG4b2uaU8oJpCEN2Jri5mpXykJ5MfQoX4HoJU2YbBjGqva8bDxwtMR",
  "key26": "4Mkr2pgCMx8coqQVefyuD7Rv7o4aw9Uh3yTy8NqV8P2zACzzZAtSVmSKP27QLnMzk6WtVE2T44ZXZScRgtP5Ey2E"
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
