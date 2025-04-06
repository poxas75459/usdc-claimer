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
    "1NtRAFHsfvAuU3fBVU5rHoZ1WeJuTLCAt2NW6nkXzUFKf5KUWu1DF1ovRMJP2PRZV9M112rEa6wBJXZrCq4Ppuj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nwv3yE2roqiBYVzEMNPZSAuZHATGsYrWNWX76Dop6HtQZP1KPKeqRCQK93Tg19h8zCXGXBPJSR1nWTad1kuoLQC",
  "key1": "2Uoe3CX1XAvxSgfwDDRtymGGQWNpWyhrK2KVFqtMwPAsYF5qSwaoyJft43nxBZZHoEswMVSoWm5RGMj2AxRQ6vaB",
  "key2": "2cgKtxMjZausoyu6xRXKh4eBg7WYrWNRoMXpG4TRtnwMdM3tNHZ6N8twLfVn4w7AuANjXd1re2KDnYgdjzXFvQ2Z",
  "key3": "4UMHfYZUNoZWkF35corBnohq6SBxVVvxHTtUntoBmZt8HSc1ZaDg7r9QCT1z3V9EqaagiLec9Y3iXRpbLfaEFYQ",
  "key4": "4KRB6KYA4mahms839QehvH9BwDeKKh4LwEQPUBCSuA7p91jwNHbnY3SLtqeBmKvMuYYKAzWAbUHT15RoYh1dyKFZ",
  "key5": "57GqpCMcWjFQygaBwaubrfzauadRMjM2AoMRtFo4qG5c829irBe7jUHdAWTRvG4BYrMhDF4WpQ9ZHYApzdvDv6Mb",
  "key6": "4kzUx6c9iMjVpNZDWZ3qQGSiPfHy9oFSqdT2iDMPvRWW6F6a6Y81n7GuDVQBU1PRAjFsB3pAxEa7sbbB1hkAkyc",
  "key7": "4pp2scYyPwur7vmoy3VHJ5EXFav39NzDW6TJ67AQPvb1DgGMfkMBnM57eK3AfHWk3MusbWDAaMk4PN7FgWboZFXz",
  "key8": "8kwtzzpzMXmQKTZyTqVGLiQG9wh9v5dAajNwqpp2fnDsvtq7DdCQUcVtsJDQUG1bbXzofzLxf8vPRGeoedH6Mj5",
  "key9": "VsEAJkuwcLURx2r9UBZKFGgkBhMdzUw94pZ5fYNBwRStq1EijgoEuqYnBvDgJ4YkXL4gY1tVCLuSyB4JuD5DsJ7",
  "key10": "3mUsKDvqyMnyjobVVG24J4XGYqkk2uBwXQY7Xoqdu5UMo2vjjLfMAcLwpTExVZTTrhX5KqYL4v3sYHgjUxi9mZX7",
  "key11": "KZcsPEmWQDNXVMF5P3H6N8uZkbcLJxm8cTPQnGTSqo7XxNR44uimp2QGAyGksLfxVjkrK5NXdVMrgNcv7ESnK9a",
  "key12": "2ByWNibVcQdgCTjtF26hLuCjGYBemhzDiWvAsXZaMKhhZM9QVjuG3GuxDAPMZnwr639wL8xmKv7Jo7mR8o7XjUK2",
  "key13": "4zBgMU6trVnHNmqRuDTKNNQMiyDZ9VVRJ1Wx1Jcd6D5VbHcLkA75uoBpzmYmBrALWYMoF15T9fxjvvyGDY92EXFz",
  "key14": "2t5yDcqt3Her8fvuJaj5QWytsLiAi52aN2NtUAH9nhVxvaAEhZHyGmU7B62pXLqsJBTrHHfR2XC3va3cvLvkNREo",
  "key15": "2k5ta5B3kcL86M7gGzcVFcgrikgYPxtTwt3fJWpHJ7mjQHAHwNqHUwFTFkFuu4kpEU8X5mzYWVu1dhQQnHenv2Gz",
  "key16": "3THfW5hJa5DnsaLcnDtBtySN2fvELeBg1rxC3hV4nBgfRX9XXjvzCAdztko2xH4rhCkpySzdZW7TxFWGY2aw2FBF",
  "key17": "eJwiYZtYWLG1RhPcpBSoLnhbfqhBedCDEe2vM7MYPQ1BBjJR39SkzFGCem2F2R5YzjaYVcg8XHUzyDtCfTXJTZb",
  "key18": "svLMxy1qow8gZ2TMeorggRa51ccF5TxKffdA23ydvdVe1REMWTdLpUiCcKLgbXSHbLaA8biCGoNgFpgGuvzFLLg",
  "key19": "32s7eJ9kHV3CmGbmHgJJvQXPo9NvkBSMdEssp9P3tNxKT6C7tnfHzWFxDCAXU7vCAVdjt1e1cjprwDyRCfxxey2S",
  "key20": "3M4HNy1yUssAuoBXn4m8qGcUsJt851s72PkEBJ8E1F32Vd5qbmfJyKNu4nNRnebdbiLNhL2EpjhYKMga6xohZNdL",
  "key21": "3Z8W2QdzAsi8Uy4rTdoejCxFWjCuLBHPPbJJpGYegTrpoQv2tHZLu5TpXUBgsPDMTimB4viW72fJbQecpkGCjcDM",
  "key22": "5mUCvXtBDi1yv6HKyDPf1W62jSCzohZjB1vgPzP3BUEuz1F4cA6p4df9Kvs4L2T5vERqaqcsE1Jq69qq6Rw42TmY",
  "key23": "4VqnvS4B5mWHfQwcys8ShPkVwKC3ficKErvmVWa8YLExndHrUxQd3kAa9BJ1RSmtiD1KhpAKupNjsW8JdWzr2vBx",
  "key24": "3mZXHS64H1qZS99iz5qEGWLcXjEaDKyMfJoanY9z6rfa2hBikMiLpqFmzvxWgnaA2o61MX9TdDhQ2U49AdnfzKcP",
  "key25": "3daFw8yRD6cpHdkRXpEer66mKo1uwUEADr4ocU6ZJEEjSHea8uhE9U5WKByNgFHPBQYii9VLsBcv6jGuHMkWY9Ga",
  "key26": "4xxD2TgkwyYUj8aTZ4Xtbpf6MrZMB17qsLZnmvf5pCD8dxqN8pLsyZFTb4k6hyhf4ybRboR5kZGgj4KFGhi5GMbe",
  "key27": "a9pBSNJHRiPrA9chF795UAK3B3xCc5Ae1ez9kggWGCHeoyQzWfw3oeXjo2jWX3HBQyH6CHpcK7kxgPm2d6fMp11",
  "key28": "YzkvRBXvjegf3T5gDKsLFFSokr3h2NxNhRYcQ4GAZqVGjfonpRhcbdah2D95L6dMfDyqvjZ7NdbF69iQ97cYTvK",
  "key29": "6tdGzjbf2MxcBXHPmZS5cAPqyVcQT2e4T6dLbd8FXGf2H36ZafFgQPTqvqwXtE2CM3esNhCRtZowwFYU3ob36Lj",
  "key30": "34mYkmgU4FK13GQWn6PVmMg3iiPNab3X2LWS1ZWyY8MnkoUR6JyJAMS6N16M9YNEWT85Yz1PdGiS7CKMfoKXTdeo",
  "key31": "2zYDzJXGfSKpTwepikEJCPiDpVHorv4ysmEd2bcXmsTZLofYhjcCc7AxUeCkmi77BnX2JFiudsM11FGdL8HjL94e",
  "key32": "3edP5SA2WbTxbz3ELsFgs1BgorWfQDikcQqRsvN8VtAmKfvP9Z3yRiVvzEkiJaWKDzxEBVCGYyJXWjpix9N1HmQV",
  "key33": "KXAvnkUH6st28DQjAqZ8CjZuHG8YM98jcMsFFWUHFSpXn5q1W7fnnCseAX2rcA2ksQMtvcs3jPqZRcRhNao874X",
  "key34": "46W13mbjkb72JEo6WMkaTFB3dPjxTSWedrxVpqqQdqUh3eRhfy5d6gwYDZ89WVJs9FucVv99SyL69XPFRtitrvmV",
  "key35": "RNfvWh9EpwN128VfqBNvi9me4yMikp3F5ub2yqt9yt6NHSvpADVyX2zLKuEm3siwz7JCYkvjXF43QgF33VG3Jup",
  "key36": "4XPdHh7evZ8LVKzEqM1eHnq2pdBUcZqmTWbUXpdN7Rh9sxPjJeqJizteiKyX97vZAeJdMju2SEvfpQ6xSFQgjnis",
  "key37": "2wLs8y4EYNbymD8YJ4w4WNWViWjEfunBizTaGh9ajvHEE7ctCc68LpoxQLvGEKr6H1HsJEGpN23QVoYDcijs7RVw",
  "key38": "3qummCbwFgFozeXwVmDBDA3akwU81x1hMUdgVxZScka9mweEGnKmAaxr88RXQB5dqnAc9mVRzvYnLo7HgYNrSzPs",
  "key39": "5hwpuhd9L7bXpd1MKuobhEVvrKCCZTpZs2QKxNhvmjnh5qQHj1JQVyEMD49qAwxdGc2PfH2xcNb843JBF5tM7BKA"
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
