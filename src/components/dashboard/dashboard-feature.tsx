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
    "48ZM76ZnjmsyU7ULbiksdc2RgdPEPZw3sfHKa7R1nuqYZ8xLpDDShtwuLPfCs7JLsaKxCxd8xprMjwrQLidrKByh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HScWKGNoqnuRM772gSEzRR2jvhJhn1A9SonLAwKJZ9AJ25STj2JV9Rbg6ReAJTMGFjfJgUgrjTfHjVhz2N7iSt6",
  "key1": "2uHpHFXmA52MWP5DmQ62T2AxMMy4UJUxGYbRmLfRmKTqQ6wsEHy5Y1BXFHKPtt284GTR3Nivufz9PQoa69XsNB55",
  "key2": "4HAdySgFijvMrGc6YPurJaLdisxMcd13jBZVk7d6s1bofeyWc3Mjn9veQuQxHM9ctxnxRnfY193EaUJxPZb5ZMV6",
  "key3": "5Mj64JXuQMfwTphJTqKcahtEXWnoMN9zUAivvP1xbQjY2UMjvRDqYkATZZLznj15GkP8TRShkmXAmuRsgPKBuqVY",
  "key4": "3LCESsqipCT3ZFrZfAribswmDWfUvofMBQe8Uts6gU9sJ9oL181bFR1E4ekBq8oVz3wkZaSGUGSUnKJXdzHRCsWs",
  "key5": "5DuFPoyz7SmgMTMZGt7e7Fv81gAtqXg768aRQfsMz5cjf1KWE3eZkEAZcwZTRGiZJVBi2c1qbbd96jWbXAudSoo9",
  "key6": "3jG6NSFj2yop4wLrBVw1qn4KHztPDzRwCzc5fDHf1fzyVex3muTScBLyqWqEVG6LLkR3PWAfovxh8nH2Zvr28t6U",
  "key7": "54xeYwmtmbdC8cwa6z7M9YLsDtHUMUa1ttPtvTZdmf2GpwzLrAkSWcwCcHjqVCaqLi6uHcDPKukLh8f8WvsCnnvT",
  "key8": "2dpPN3RRuFAqz3p91AFg1RQk51jkpvrE1X1cMRojWmAcLHHAum2TBDryMuvHdXrvJowmZiBZHvxZRpUJNTisXkdc",
  "key9": "o2Q2VD6Ko1LLHHzU1Zvn3ZneorABS51CBzqKpu9WVgMnSJ9cSKzRznYoeTkmWhxb1P9ftkke9xeoyG8RWAs7B2J",
  "key10": "4Dygyn9UoorCLjm7BLNqSkXtGAar562c1GWdMtUCG6eZmoox9xe58TZFZ8Rxj76oTSo1a6PUZmKwDZUNrkzqEzvP",
  "key11": "2YKd41aJsfPRu3hQNbc7L4uUWAoYMmee5Hejh5TN6XDraFbuZQhQwyPYkG2R2Fp2DNWRmxrPuT68CLjT74qCGzs9",
  "key12": "KfFMBs2pa8rUQ9SL2SLtaoAeqJXD37cWGoGCh3USAPb7oqHVndGbWd8icLqLPxqPwB49aME9T5YE7G6voFaTve4",
  "key13": "mFDxLsi5g2V4CgB51dJFeg3uDk6HhmpgGSkAAkUQDPQfvYX6eKZFyQPAj8jmzmjwA15yL8wX2s7ZrQnqnkBGsUR",
  "key14": "3iS1KCGrYSpZiN3tGfMyKiCRmB9RfsQeu2k9AqfWoSMU2Y8GkAB2dbpsRTKjQpziEiAnc883cUQtNi3jKjJhjDEZ",
  "key15": "4QeYzBBbs3R27ZN6PRCxSQPa1cPzBc8mKfPuuGKG8RSF79is56ZtjWjtJ3a3FHWjygwksdLW12DtHnw3fiQ85o4M",
  "key16": "4qkyyvCSfLvnTJAr8UL5xgw3FRh4kvvTE6rLZeQ2qWYw78m9iCDiEPJkVG1QpXUzKAn4VxB7f2VMqWCY7NxWSMuZ",
  "key17": "3fH9ZvkZEH5ycWtPoSKJCLjxHp5LjmtAwpk3eG8gwrSnQRfDZJb1vbsxA3qVTbKFxSPj5A5Zx8F1anqLmCvoKA7K",
  "key18": "4gBjPNDgYftaLTTTCDyv8cogCJ33PiH9wUJzgodELBUmgXkbtq9GaqdzDLes33d3iSEMkFiysKVbMoJUXCWbMpph",
  "key19": "4aZvzuhhpd74pQRFPkk3SJCj2J8LugRaP4g87DaGqM2JmutVAxVaMqP9nqx3JEPFw6471qFoXNRPYidZvSDSenG1",
  "key20": "5R4ewS6og2HrtwadKpWBFHLvjdSjnHPnTMzXjoHofYURz49QsC3wrVfs6A4u4HME53824BUheGbQjZunZ13QVLHg",
  "key21": "Nb8cPeGEKpNcG6NCJ1hT3u2XiG8rHf1WozAaKpPPhbpMC8syj89XU7qFiPJzhRxV4amX65ZqRD7zmBMrU6ePp1D",
  "key22": "3Rf9uYx2QEwK1cbtyTFXPpC29rXuNYwvSh4pd6aJ7p9V8gKr4q1redgBcvM7HD5BD3oF8UhnH2G9AZrqnxxtZ3cu",
  "key23": "4ToAbneZyW2w9v6tytpiEcB67MhE1C3uqBBNGRYzxc5nww6YXRuTKZ4QQB2FvVsCAYQAXicoYutBimGKpppPjHAr",
  "key24": "2V7eDw2ZqCWR6RRvTt5NswLz6U4t6BdLUTTZxUh9Wbx8n2mkTf8MGctrTfuEWuum2ZtkJUVDzzJDxAdWk1hq5yLG",
  "key25": "3FRkKfRZLUzjJvDTGrWLPJXyx7o2zXBx5AMcRgNs2SrTwayiVFrYRmMKHiMWANMmsN5dce2RDEMkDV1VVpyFpm3v",
  "key26": "3rH7vtJi2HACJZMsPCMDRwoAdZPDgMwyTnX9spNXsy1zm5LbMoqZa7N6Mm5FDm3GodbDrsu1JP9zYBSirUhb1Zcc",
  "key27": "2cyygSkWr1ZmVvPULgWMRa9Ga7UtQFof5XJ2wWiiW1pBWeVMB9iWRMAaP5VXQHQjocBfaJ2BUUk3QCn7zJWwMWsP",
  "key28": "3phkhpQeCZiYba5V5Nk2mcudcE7pca9jj5sSXbsimvbBNDQ5znmrghr47vk3jFEq5hxuWRJaBUpFAL4bxeRWnPbt",
  "key29": "516iqh2BqCu7iw3maARsmzXRm5DEiT9p3HKM2XG7p6nxBgCq9jwgf7WdVyRhjHrkNHRHxPuLZb5iw9imgDorUkuC",
  "key30": "N6VEcbhvXZVMTSkTjz8yEuZiisLv3LdLiQiuAdF41J9Q3HCbP8kAzXDiT2WnT4Cd56bvBeCkjB1xXj6fypXSNkg",
  "key31": "4P7iW4BZJoYG2KEehNJv7dezC3eVeam8p8dfq3gSZ3B5K8Tj8ru9j6ZQHKRQuhn4U9Wcyy1vN2B3rg3yi7Z3NY8F",
  "key32": "4KqJsih2xeJwpFg1oeMrKwakEAb6JBqHS4m9MkCuR3c8of6HKCKZeTa7DTKGSdq8sgSiktzwmjFHAdcYvY8GVH5c",
  "key33": "vP5vgxbk4uGtpiHq8gP1tV8wXMmfWtECvrTKScpBH53bBMkCjMb5DVrPhFHycfU4prmF4G8uuUnT4PgZUQjRJZh",
  "key34": "5JAutkiCbw1Kk1u8UXvrEzGVdnxxvTBozaxyaJjBXGzvCAo64yq9BrsxGKQYxYNZdBXSB4KodExawDzubAg4hN8P",
  "key35": "5CbwWCsGNdLZCXMSdWoBCiW7kh768rnHDxzRxJbvFwEAoYnYWSHqdWHsqaHuVm7Py2MNXvaPVnZHUxGQ2iy5zS4N",
  "key36": "2GK3mTrtoa9KNvNVTbb1mnHNsQyP3CBY6xEM6RyZrLYGp5qeMwGvh8k3CZMJeF9J92hWymN6Kh1w6tgWcNLjETx1"
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
