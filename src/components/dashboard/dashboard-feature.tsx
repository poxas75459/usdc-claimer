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
    "55LZVF3utmQLDGKnUTbozEyKJFuc5DVoFAfZsJTE537ERFqgjtwbtW7r7GXvyfA1fVgSeH9xP9hMNgGj3bRgUBsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25aQnsvTBQ9NU1Gow165wybLucaeqwtQmvcPnqMVbob6AZyTxkz8AX6artJ9H6n2G25RUQtNmh7H354fC91qBkfy",
  "key1": "3GeacUETh1iiLLP5sdKwHwkVyBceKa4xw9pFzyjqZVx6qEikKT6s4LCkHKKjEUArVzZDgs4ToeGkbZfqHzK9qbeq",
  "key2": "G9EjemQupxKVDxn71kCr1vrKNMpdUZ7S84K4qMYRxJkNTWaqiLzP5yLeY3UCdx1pdTovMbnZBcVdJEFShrHpvEM",
  "key3": "3FG4gkMqHmnRiv8chTmFM9ZfY4p42LCumHSFvuvd6VJ1RGKuxNaavzAV9ufN3G3hZBwKVNsr8Nv8YpKNNEKoV3Pf",
  "key4": "4GeYTct5FivUCH8RNLWqPcvVjbjrgtKpZFeNkEtfdDjTbkQCoUCCJ9gre3mdh3UWKyuGCcj5ihYGvv2j55FUSxQX",
  "key5": "VgrLs3CQRxdJfUkvvjCLioibNyxuDSeFMumFDcRYHJ8TLxUY3sbVjzfJhKPoVopj2zu5tfsMpxVyHyPJFgjuJTc",
  "key6": "2vipLdrpvVQbTXN6TH7rexNUCz4QvvHrCua7rcxmygYbEQ9zY2m21SrZv8WEcY6wXJVTkqMprP9d2nZTyozAeRvF",
  "key7": "5XXuY16e6nzW5SqhpwAsTLzvgdbyAwMBnqhSSgwoji3GrP5Mt68BK8KfaTxkzzGKGdqvjcTrfNghwskJKDa7ehMi",
  "key8": "4YAjC1mpgntYHQaDFV1cUwpn52Ru3HhLATMwnAFiPXe8CfuPgw9iztDgHYHgW3g9VuwXtzw4j5Vz4u6iUGy1GSwR",
  "key9": "5RxfSrcrj3bawyyzPqGFscMeZopxBPsEmFijDsw4rj4KQjQkwit4K2yTuwT12iW9n9SkUmQEB6VDPYECHb5CVhmL",
  "key10": "5iDDDLopPNMefvMxYuYoxqExrUiaWbnNKNt9GLHfV2cJFDUEtKVnDSqfBZ3KM3P2ZwieHpdsvM4ScGMvH3uw7ffG",
  "key11": "5Y2dmGJEeJ5jFC6Kuxdb9GsCzv8uTF5z7xvuEXwNPEbeVEAPGAcjsCXJvbqdgniVDbw64BST15CZXuLEuBXJu1AR",
  "key12": "M9PEb7xLJj3iexSQRQiiX6o4Vfk98pKTTEDAD7UqteR6TqtyrBtqzb6oxgCAjSdoqEySz4LdddMz5QwvkaMH5kF",
  "key13": "y8Ym88gY8bZLEevjtHYm4XwD2TAqcHFgLUvtnY4JtMHjmcCNHRRbHD29k3ArqseTpRNXJtpsLnHi5cPzULEGn7B",
  "key14": "5P4VdJ3bCGvEeb4jgM5ntTaTXrK4E6M6ECuscQrsyupyS4bGvq4si3VvEuZ9FWFwDmEFbT9cKfL2Lr87PypnsxaK",
  "key15": "DFCGyAhuXuLjYtFDqNxYaFJCZq5cLwe3P5yY7jcUCjHX16QqYyfMk9kBGQDpd3rr2jR8fJhRewb9tWZj6FiC4os",
  "key16": "2dyDNVcVEp2B3LeQgffhGVUkD2nkSw6uJgLU5krNjixno9D4QqUyfi2BAEr4ifQi3Le8gW1gvusCS64GP5kxnmL7",
  "key17": "2SGwPsz5Ebegt4ySMDazUP483Gbpe3yGTCsPR5gVsL3xSwVdWCAu6ksK35zUjLV45ecMu918ra8PvETdAtznYezx",
  "key18": "5sZtBRs3dYrMjJQi7ePEoKi5bYKmBJ89rp7wFN9yw8EzLDk8zM1xg6n3kRCvE9Siz33RbDKRS142kwVJRfe9GqsX",
  "key19": "5zLQNebdUN76U8KvTJVwoq7vS8bPKWXKNVg2vFKztKnt13G6vCWXGPRCzpwjh7evgFkpXU1PmZEnHwvNJwNuCuWM",
  "key20": "5gemXU5WNScMPEZRYdmnjGvNbsjadMqAi74BysRrzPZhN64Un3k6eEDm2u6BfWMrrL1BzkMnWHkHTSmMbCT3AUtg",
  "key21": "4kcpi1Ci1UepsDc7tcrAmqedv5kdzVvdNVNvW2pmgt9w4uWxi2efFh4qDbtcrgpPWEpummRB6gwhzpm1LsyUrQjU",
  "key22": "V8fRjzABWacf3kiop6oKaXjuD88EfWakFVCmmC5LDY5qXejvEqVC3QihmTKC7YJz5AL7waypQCESmd11fz5cTz9",
  "key23": "4iHZQUBY5aStE5JGuz7LEpu2Qj8rf3M9JMkspV4e5G6FZHqX3n9puBTLtYMbJBmfiTJyKM4JTtc6cReRjvmSFuUW",
  "key24": "3z3AyVka4kXqRjWn2AJeC7xoAJwQtdkjed6BEmWzYyzmTJ2rZTiKujzekasPZeK5AKRCvSoxy5FapnYQeBN8eWZY",
  "key25": "KHkgdoeBUA3GFa78aoPw7pkmRHu1KNGkdAdu9Z2QUwKcdaLebx1ju8FoDWYS4h5TRbwE4ycpByFtuHweW1DbZVa",
  "key26": "38Dpa79qvouaguV7cXgvRN4Pj2U5g2zW1Qy8LumvXEJRYPHvam2tJ4HcgCmCQ2aprw4MaPqRCA7NzrYnMgGhNLn3",
  "key27": "5N9wGXqA2n4vQ2arYELop9Vwk6D9CrynbbvEvUwhLhc9HsRquKHDH9Tb1F4XhetDQvFotWJFXPvjWDCkSEnKeXkU",
  "key28": "E7GgeZmnYDCtknKMTwHReuR9Hceryr6cMnxxy4KW1gRvPnBzyd4ZLsowm2XaHM9XUtGZGCqTTvnDN7zP8npG5SS",
  "key29": "5KPvct8aqkzeGyhE6MhNqdrN4fCmJ4HXJB1AW6TEShma8FfCUGhU2eGSzr471aV6KWzhhexVp79mbq3NCL7XKp7L",
  "key30": "4Z2BVQwPSBWDL9xAC1fLJpEQrH49W4DqQz4kBjYyGSXNN82r2TurxqLjRrocRvjknsSvp5Y6Y3goz3DgMuY3M3MA",
  "key31": "5davGEZKL8joH96YCdMXehGePm9U9m9xQN5nSjLQcRgf6xZ5uTv5tvRZdPYcyRJr1rzAopWpHgLBQnUjnj668wGV",
  "key32": "46xK6vsSqr6QSWkJchDAdprWD8SPWeWoSV46XnKGyrPhKZfxnyQFvELXwxg1RomZJjHcZF5zsoPVEGpzhWzPf25L",
  "key33": "35uwPyPTp9BHvhEC95SCXQCUJGqTEBeWY6nvt9MmJdPZoQQuPpDuZKhu4wuBgyNnd51hkv2KhcReCpVaZXqsie6T",
  "key34": "32c1UW7vGHLdsmbsSNPcpbpEj1evuKAEjrGvNYvLHamSpYopd93A9tvjz3NtQStHAbDZJAzmLjUd2xYcNRdBtwfd"
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
