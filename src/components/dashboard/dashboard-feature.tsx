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
    "5yPED1q6D6XNVCnK5bun3W6Sn7FjfvquX6eH2nFDPrYi1pY2JQds6uenPJzK1DAPHrDhizk9eph3gq8dQCzVKt8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ju3XSEooHUGLafH3ZAf2aoGqA4HUL6kvmCdTJjCBvU6VAgi4CUkGqzAYthngHdNBzTr3AQC38GRbSDmoNc3V5z4",
  "key1": "36PqHUCKCGn8ce64oxjLW8nexkBmjXV3uTJa2A1iVESuYFZy3XjrSN3p5dpmuVZ2nv1N6ezrQuX3gEYdmNPXcgA3",
  "key2": "5jQ62vswtJYAJXyiDx6QDG1RhvC793rVQpxEHuqG6sGoR8Aji1has9z2m7GvgHdbvKJC48G4GzVQ4EgMWBec9cW2",
  "key3": "64J5e5yy7cfEFripofX2YVExzSJMz2eKbfmPdLwtPa8ygJvxPFFNifwPrdfmg3r8hY8GJRyJq2mCCyeA65gpPUeX",
  "key4": "25Qhrr7dpBwHhEdhFNm6Q4SrXFCYnAz21JB9Z79QVmvW2xwk39BY1KxeesxGcoEqEWotFVQxWyjyUqFqnT4T6Cc2",
  "key5": "4RpMt3zPuBsMkyv8WvM7P4NtJ9ZGdHw2fk9Ewj414fuhfi5ShwJK182V3hGcAbkJTqb9tWU8LuwHysPyDrZZk28B",
  "key6": "3DMZg1fa6kdrsTZ82u4wpaC9SP51sT4ahaKxjqC2vkwMmQPUPBekQ7u9wVUqdZvrG9uTY4fuDiit175xPvNhyTUf",
  "key7": "2UGqBdPuSnJT5WuQDHEvoXprGRb8PdVAjdPsBS4XM81mawB2dYUR3PyZNAWzfRieGXzjyFjJeyzDgg1nK8tQdf5v",
  "key8": "UGYUuTYoJHirsKbBh7Z8he7fGG8bjJRHfT9DGgQTCy1Am4bbPtYJ91H3LPscyyxdKAyN7hJ5kbCcZdGWh77YpR7",
  "key9": "5eof9cu94Ch1b4WbcfK3VUAcCWUDiJZEaFAKhnDz1gw6nd8YNxsBSfPuzXikarWCd6rdULvurw5GGfHhJ7nBmfgj",
  "key10": "LhMUy4B3f9ozwzPxf6TV7BjdVqhVHT9CN6uohQ4GoSF814xcV2TmmBdoYHqBQtS7MKzmA1Mqj8EGqw9xMY63iZA",
  "key11": "2xxxR68E9fXSN86nDZnRyABtGWqBgHgBJ7S8W5tM24NRHw4XzjHZba5EE31TyVdhzrL2YG9yTwCbBCAADCpNbGtH",
  "key12": "uXZ2723a3VjcjRHdGS9HaRNujtS9GFSNTUD8TkgecRE8eYtU3rtCsumC6G3Sw7F5wb2xHLkVhafZBhkjM3uCn6E",
  "key13": "54RLUa9N4k2ZSu915gXWoFtZ7767yTptm8qBVrF1gmRaPfxgDmapqjcNeWLZrcK9DiMwBsWSHF1Y2rW49eswjkuF",
  "key14": "4DdC1Xbc6eFk5PNq1kZgDhTgQAmHMkCyWEwf9mHD62Fo4a41VhYWravg2v17g1HueiEgbZNadqJ5uPXsPQTgQjFs",
  "key15": "3icyMu2ACStbJtzsfaGNtJjd4MgurY9DDDgV4A2ssP319VAQoFNTD8RxNFuikwVTkBZDdot3VoapV21UqYVKyfrM",
  "key16": "5GffeS3yfWqcPaQK46vA76weTgGep7Kr6yudzTofChJ74KNiktFGHCXWGnopBHzBG2USuc4hX9PxmCCWjb1bRTc1",
  "key17": "4NMPG7kNxGScRDEbTr6VTZBhoFRMZFdS9XoxheySFxkafwHxpgoxiUvXom5qWaVFkipZrN2WufHwyoHS3B4J3qhu",
  "key18": "4B3VD2z2AFxaj8meWBsAcxiGHwfTzwa1bEo6BrVs7yCsNhxNanEyjwSyuMk9xZwdaHVGzFBfrtRdvkvrj84JS31D",
  "key19": "3GJ9Ucyj1UXMtKdXLHN5WkCnaErCzDViyAXfu9Wpwo3adspi75E9mazuzupU4FNBERTJSxpWu8Vj8nVHA9VZv7Dm",
  "key20": "2JgGR36RSuq31z6vDG6q14FEJ1F2mc6dHu5r9auFBkXWCDMAgJtQSnvR49CVTfUwdwmKAmZYxxChtQdyiqv6fCnm",
  "key21": "55VWbu7FSNgmHfrARpRXdCwUPhGGjE64Z3Z8chh6Pc86zYi4h3HU5NPeWo7YotXWT9eLsqkEg3hfqnf5h9e5z4Ue",
  "key22": "242UXJbigUAPPDmZTs5dvXN2P13rZqNuMR8w5istB9Jk1A2UZ6TjwJFoLzwEVNLH8Eme7CQKmVXvFj4qxBS5ewVi",
  "key23": "5t91iftKiZ7v7Pdy3WqfhgxLHVLMhxPSGoB4G2bsZyAbkmVj2vu89EWc1KunV2ihFZ9UNRqiTBpFmKiogWYSk43V",
  "key24": "65BEMsQ2HKqVrE4Ta4QuPYeKycWTJLSwohnKsyRKvRRDoDE75TNHK1d1x3GsooTgiJDzuzBnWwVExhyo8PyzB8BX",
  "key25": "4spKCKpbjCzDKZXo2CxqCZFZYkYcBwrrVmmdid6pVLbbz6xFK7cXEvuHZFS9LwX6uVH1HKsNrm4FvBEc6z2SsFKR",
  "key26": "4N7mBDnLnSVh6doiCLpwEy3FZ8adkmD57yuY8bEAYff2QHt2sg2q7hqUSJKxyXnMMgytdd6FEjZjidmdT9jU6p49",
  "key27": "5Fx425wwvZHtLx6PgyNxbwRUawBLRsh55UhsW8s9udJLjW17yHo4Q2aSsFvzWAo6gDivJZjZG2tLQHv83dRr2uQR",
  "key28": "26EJ2UyUr1jpdDzhSTxLYUgYKBfdij9dh5RDQmnUrZtoqyTK5VVhfnEWpkUtWsUj7pnRSVDMC2KneS9pQt8owVdh",
  "key29": "pLSvyYATpUnVcfeq6dCMzKUpxiyysrPoEeWJLPqkaLmwmiQnLVgTGtipSePypkYCLzc4nY5SDiJ111DcTLdLs4q",
  "key30": "3WmkEyyJXpcXw16khETduWeBrM4TTu289hXphC8HnR5yWomegsqDFYm83fSBCL17m6z92uwuEP6wqbt1bUm7z1js",
  "key31": "X7HKmdUREV5wtPenBvNSW5237sAuQSvmYDBTXxa1tkXfpdmLvsMczBzaVCQyzp8X2c6FQXJ6SBZJj7AFjGTgoje",
  "key32": "2CXGj5JEHAdBf7nPWe3p9s2szWSyzUEC8eKP8EJo6xMprQFdWAom8wu5yvE83e7QHAwyK7qjSBcwbdtVdiZK7oWv",
  "key33": "4wkJGK4WWcDPo53FsuVZjCqmnnunWMpC5usC3xSjrfF74i1vtN6dEwExWG6aUu12Jwv2LmT5Mt4SLUC3qeridq5m",
  "key34": "592jm4NjYWvowMsdHaUfm4dWpu64Eoq19LMWMrqSpYpYegM88U2zSgNDS45PN7JKBkkTGaysdTGH5Zw57E9wcNkk",
  "key35": "5CS5bV9b2KmiFX3aueFZVToaw6Kv2LSdDhMsV6TjAKRWvqu19jN84svBNNauBJ9ZKrRuMZucnUuLYuuKj1ZpSKmt",
  "key36": "4b39up8DDne668Qo6jrA5otHbNoKy8J1S1RdduYVR8EDQi2SxEUWRLUsqfUjDiLwyVeijd5E5c6y5v1u4rhguQJL",
  "key37": "4AeyHEN9Cj569fv6iYW3sipnsyr9LxR6cd8nf3QnUHbdGBWtFLuWyzxF2djhb6eyAig4nS4gCjAfU3ySDndrYp1e",
  "key38": "5BNQ4d6NkKPzJ8SR2SALKy5tgqTN8F78C5WEU9ANriwtL862nQustDR78HRrQ2rbkn4X3apQhm4nJ8rXyfZHFGwY",
  "key39": "3P8u4XqTEBTYcDGyixHtXKUhudJT5Y15pke5CkmfVUCBeE3bEZZX2YyM3mr92SH2VMfmEMRe1HsEnjYjhQXxWLVw",
  "key40": "5gaTQBpfxntNm8aQPET2YJs2a1KFYGFLvj36nGVyVSJ2Edmqghri1CbbZuWWQ2anUrw1PZsHZJQQ6DRBFBjweW3s",
  "key41": "25De959wDdaBqQBsfL5DMNoHb7Y85wCJunZiDMig9S6K94YoAkE6dKMJvJ5MHBXQ1QUf6sKCpfcxqEj7oLY9ujW4",
  "key42": "2XLcPNAw8YeSKNro2pTqywjqm5ea6FrciKhhG21hNvvXHn4ipb6y8UrCLci81PQ2YGY45pY93X7zWHWpubKMZUK1",
  "key43": "63TAuLSWXrGJBbkAEW3mUBCGpAuzLXHueigHwrtS5aLkDJNTj5nu54X5fGwux2tWhyFu13KdaxvEktUW6YwTPsHZ",
  "key44": "2fsSMJyahGJW1g52soDPvwPHGWYrg9VMwNke6QoB4CJ3XRp3KvJZmJQVbRmnqzcuMrw4noSyZtGwgWyXXBjhHUdY",
  "key45": "54pY5bT1225eDoftezYiTSZoQSCXRDMk2Px5HMCiwfB6AGyReBK7wsmFGZsGtKxB2NApsfwCxiewiYnEWFW4iXwv",
  "key46": "5AtfZwnPUoMTD2SeuKVuFdbEH5YGFoQgXff4YW4Qh7Zg2xK343abnNYSGS6X8Mv5w2sUnc9YrqLJDkrowcFWrQaz"
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
