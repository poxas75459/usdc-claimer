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
    "zYTXc8AwoywWZPfKLgwQovzEhjoF25kngYo6XXi54BDjWDNST8JHa5i8utjnCuVrh9f5zPJF3S38kjhzgj4B3uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfWscaDTwtQtf5zCCDjCxVCkjndtcVYX6sLEaqgXBrezLnU5UfxWxG4vsoYMH2rV9sgJM5BX2RRwdWJbgQ2NheT",
  "key1": "2uCftq4fvfoodex6XBdy3Jx3BxdX4no8nRDFjTcc3aZJvo4tEfWbhfJX8vDsJ9os8L2GAQ3EpS46Y8C1h4hnLy2G",
  "key2": "4zcX9r72QTrcThwfDa8wCLAs5kKwGx6WptXje8UWAHcwRYqjKdBkFPGLHsKC7s3b7SRPKbGEp6e41Ry9ur6aLhp6",
  "key3": "g3DSeT9yDhKkZBd64rcjdXLs4TDMLQqm6TqBQox63We81HuEvJZmqMgrntJFVXD7KV6iqVDe8LFWDV11Acre2Vz",
  "key4": "4yxdMU1FP5cPhhZnCwaSS2dds2fQCcjiQcuppnmQ1PAYGWPNA6iACeD7S2JDsaBwYmRFUMqBW3617kgcSpa1N5DG",
  "key5": "53tojKz8Y4Mgz9kuqJfz9rj2ymo9tQ8b76h4GtwjW9dMD1NCSvpPsCRomWjhAYcFi58xBNTMUZgfLZAGdVCVgiZs",
  "key6": "2LwhLdpjnSS9QQY75cSa49yL1cXi7zT2oEYa5Vj3hz3AV6Ra2tK9qv3J1N9SH3fA9fCGBxwKvRRhUFNCTLjEr9Se",
  "key7": "4UedrLqHVNTguDnqMXT9ZfrNTLdpdQ38KwPeq6ZpKjzp9wXMbMxTdwukpvmAjBVqCBtYC2nr8CnBkWUa3bwbNmCU",
  "key8": "5RdEYWbJySwRhKoSmj7S31ai4XTyCXptzGxacvqvEwb55DNap9cUv9gPwDzMtGBx4UP5qJSqa9snYtmRZU7EdHnd",
  "key9": "qDZaQdK8vTfDde4gojBN2KBF95GH5S8Li3ZnW15g2dxAS5vQHXeoowYAFvoDhM3T8aSFj7j9ZXNRakYVFhdzCVn",
  "key10": "Z8cmBQdWkA2QNgfwX2XCgFVWRej8ofKXscdvh2vT5GBteQPGvchTWLshrkwA5pLr4YKwMW48EqK9zyEcZcN2rkC",
  "key11": "3kQWyw6oMgpj4t7v3L5Qu5PhkFUoAZzn6Ev8Cxj9QK4PvZYpBVH69vH9PYKmzjN7AR1MsJPcPvt3TdYJRnenKfF6",
  "key12": "2KF1yHHpCGyrujdioBqDDZwNkM8grBTWqsY59DhDuzVjkvDaXyDUbGweDfquCAAu65AE7TvRS7j6pvaYmSGs93vX",
  "key13": "2xFWzo2yb7QUfZyYtcHUn6e7xAF88PgM2VucXm9L1ncsWqxJpqbvCwmb9HTY4NLgfahRxNXqa88kNcF6wvvofaa6",
  "key14": "5j9tiHxCfUS8PkH9M2fmvP1pR5CECBSqnL2nmUr3cEyU9E16pTKsS9fFKuf4VPNSxACwQnUxBQDUrb1xus8LpwnJ",
  "key15": "2QjwrdPPXPh4givyus2s69NCZ74Yn9oUXxWakY69cBHM7uZ3ZSwumy39xKqMGy5PQgDvHoFdsY9493zZ4p3VVkqK",
  "key16": "5ptc5fjfK99Tyi7vaoa2awveLKe2EBZY7TYDm7iZpjg1fsSkBSma1M6f5ocsxsCAKo5xHAyU4Xox9cahXueWLerP",
  "key17": "37MTXRCvjAk1LPjiAU8N5mYtn3rLxcPCnaMfdnvz7n92qM2jegCLnEperzJUgJAKkVvmmqLhnzmu32yyvK7Fmjw2",
  "key18": "hS81LcZ8v8zwVt4N3sZHEw6DQBMHvDDPW79vA53AdsooYogUR7hNb4dyHoyRpBq3Qm7sGYhMFyzgezZDp3oF7cG",
  "key19": "8eKjm2B6ye83dAJY2ejSvVR8cRh64228TpKSzKBQh7yaYfS2dapqBjcTtukw3jtAYvwEFHnGmzvzFLFhxwSC7di",
  "key20": "4LMVUX3MWHBv5HAhVKkobN31Fjqe4b32ar7ogxPJ3TFa1mXKJ1nWpqRM6MTdoQ8GuPV1jGTRNktBiLXHfXaQdswC",
  "key21": "4ngfGGb6WNGPZYPvPX8VuXKvB5oBknZdwwoGaehAv95mMpgGNxxTDVVcBf2QAFgnLBLzpHgEbceTFkD4YuVwwsEp",
  "key22": "dn7LcQEH1Qu2j8aENn8sh14cq2nTMkJ4V3GKXuP8VkCKHYuCWFnn54HWQFiiPe9t31US5nZCqbzCCU1DFyhrdvu",
  "key23": "3yuLXqjASUq7nhKRdUHLxeGicdj7B6UZ3tZuhfJsMRejD4Hx3YErjLwbf9yGZXDVngJxN9dezg1beZnnC2GSkaKF",
  "key24": "2ZZKWkBjcbhEytAygzFxHSW9esFcfinxe18S65Lq7hQw1b6k6sBCF6ydawpydhVUKuwMy47TvvpxZhMwLAz4s6Wo",
  "key25": "5Gvr8MMFRyADSH3UpXT5ZxoD8PtwMmaKLAyRCZL14SdHvtE2jUhPgSkHZnpmmtYGtY5sr9CuLgQD4UXaGbZRZeTM",
  "key26": "5i8yHdSzC2JB9ZQtwm4jtXnTbUPqsLeXeCd17DkXvUyB3kKnoDNTLkAgqLQDg2y4NsVPZjFuULXRavaKmBb4BerN",
  "key27": "2ZW7PG3KHi5KzLaXmPEVuMgN6t3NxU73ZshbtgmtyVkzD6HvqVhJXPYZaFuCB2gesXRs5mhe2wnKuh4P7pMSpukZ",
  "key28": "3ajwa5efaUSXomZdpm4PJGsRopAuAEuBCa4JVTnqLjhiPFkSoyNhDqsthq7KFy3UsqFBWYProxbaBUwWwxUHxncW",
  "key29": "43QMS2BkKrS46rmHb9Hp9BRjjWpttnp5GK7qLwbZWnXePZ5pbs52tUdWcFrHwUTtGsFFSdBWrgieAAXYTX1FVThW",
  "key30": "2eK1JDBs19i4vXKk9ayyrzJQJ9GQoQv6tBpDoJr4psyBMmJmk1AEfaifP1mihJanJ5vFW1zvhVe2kguHaVAUBf7v",
  "key31": "pzmTiQoMDqqv62HndYWdwdLYLCUXCGtH56NcASktbFsFj2d6rDTBHDEXrVFWwTmnrQMBb6LwuWYZoXAPMmSuELb",
  "key32": "5hFNgsiA4AWC8t34M9DrWNAS5RM6ut7BzqAfGmGHYfjbnYJGjG4N6HH484sdfNSYSJP5HswAbm2sUid2xQf6PGaw",
  "key33": "5UojpPGy4DytdPkhFCcyc6kVBvYbQb1By9j6aTSHoTcJYgKkvGrNG27ACfNjs57eak4FnnJkmzTiRAFJF6cYvhx6",
  "key34": "4rVJJLZQjxVGSRqdDGuTB9uHCi2JGSCzjFxF2ALGP9AMu37MtxuAKrwzndCg3JU6QVwz5ihkt6QStXPHvvJBua9e",
  "key35": "32X7jWQjsbW8fiwY9weuEvmxPAbq11e98PTHB8bSqaJNYqufuJ2CgQ8pJBr1bTkHhC1iuNxkDCm8wDqRB9dzM7oX",
  "key36": "2iQtBawzLJtBuDZ1DXnWUqFf7EikkKbPuJsq2EYLPAB8CnETnJdpSrEH66pRpD7rKGYxJATxa6rogfbejeNk8hef",
  "key37": "2piarikG1zfeRUkreJqNkpeZsWJrvAn4Ux3Gk3wQkxjzt2XhBizoULwHmFSdpGnDcnLeSSesxE5N614iNF9TsWDp",
  "key38": "3CeiHUvbpJryTRPNHUoC7wQxndLBMLax7iZv5U9izx9LSHkTLNdD6kSk57GZAZahRaAKDLpxB7HKgPjBw2nbaiDy",
  "key39": "3MfvK5e7oNgeHQibk5nkCu1ucAajE2yectZdcBZJbvfFQZ8DZPFW1fSvamxoCEcBnF222dptkxXgoFBQFZugsS43",
  "key40": "5GrhSqoYzq1tcPErT9Rx76a4makEDLNBre3uDQ7QXtSgFBzxaV8KfQqdDks1P5xFjQFjTN6bJbzHG8HBh8j5bWBT",
  "key41": "4EcVwzbciDsQXXC6xpvvNj96GhHeJuHHqjqPdrP2RUhYDDK9qRDNCGPpN6opgjCGW3ZAoFs1Zxxf7mbZFLVpB1La",
  "key42": "46QrezMPnS43X5aQh2pMzc9j8zMUS4qobYe6zHa7P5b9MJ5X2uKWeWAek5QCVj1pnkNTpXQzXm9yu9Qbbk8EU6xf",
  "key43": "4nbM36A4WZ3Lhj3L6QfkZ8V9y8nWQYikNrE14ESHgZVH7rwJKHnaMHFL6QDaVMoFX2C67hsXwboMv4hGR17MPuYy",
  "key44": "2nJaRZvPLbHT2XmNS9Gs269bULrsDMomdcCKJt1hkSzVJVc7tHyvpGrt75cw6ziCAedQz1ddLzpoUVr4Fu1jhoPc",
  "key45": "65YjFGf6zkrUb4em9fTa8A12qiywLe3hXQ6hMsbN5QaLnLge6UfAfREh3wy5KKxirxm5TNJsyLRjrTFWADi8S8mU",
  "key46": "3t2K85eEjsM5d8SMmFVB9mSBFjAaf4CahcP9s7sqGziy6pBHFQZJjV12weB65jck9nW4JjBvBQZEBnSwWkEBsCaV",
  "key47": "2ZBGstV4QEzCCatNMroGqTE3nqxh5UHTYZrQRfae7ewPg6y2mJmw9FKjkQdJmQ2etdrTumd1VPLnt9TwLWPNi44z",
  "key48": "oas2fY7kMTuQQpGY5d5Wwk21tSf1KdwjEcoNLV6oMjeNhxF8o5Szs8zt1s1aWXW1QxF1owxLkX3kXAcQeqwwH9a"
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
