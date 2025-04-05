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
    "5YV4nr6DkwwtZJVDUzBfHaP3rdKCym6jY4NissprTVMT4MoxxYgBzC6zxp5eCuqMHWEKnaCDnqL8rgmE8oYQdYga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MBW16NzWCb3M2fKGiesUCyqYeJXmmA4yqsLZmfBQVeH32cHb5cPE5P1X8bSbUFPhiqjsAef5noCNCZpRCj5pyQF",
  "key1": "2TbLTHSwFKGzsqkt2kMaeAjgZijUcgzYE28iXr1tVAWQQ3vkDfY7RjEcGFHKVVFqgLZL6y2bzwtRAKeGAMzZqKzK",
  "key2": "61nayuqSuBQ6t2Td3ZvDR4VGY9L4awSyqJfFn9dkwYArkE8ZrgPWWN5WKQVDb9T4xDWtHSXP8uECsdPst8dfyMCQ",
  "key3": "49A8fC8RBmho67h8QtayD4kVqL9bptVcgmMjW9Qk2kqSD5286FawbJ5w9WBTyZFoUJxyvuLCvpRvKTnRTYRWL6Sr",
  "key4": "3NGbZbhKG6Y2eCtJNzDu79oBYcbRb1EmXm5u51cDEbcMFsBTSYGtv55f3GQ5PDSJ5M8wXQEv6BnyCkuVPAZv5ifa",
  "key5": "2u2t8ZxNFb73dp1PZE5qf7Amd3aYohANeh4TwNCmxoRYh7Sr4AR9fP9Wvr7fGg6wHNWxs4myNEWshTmRLbGY87Dq",
  "key6": "3Uqx7skXcwqfZeTXdCTgXxLzgmLjx5Fpo9JSgm7e3HJpQQe7fEKEe2FCufz5qAHiLZ39eEjFB5SHDfxBMLrt4P6M",
  "key7": "5bh4jXdwGRtiWS4wHKSNcMRuhfH8sxSs9aHVBgbiPfjs2CvVy3wFUXJPyk58g82yKfkpKvrFJYudJqA9ym15wZ15",
  "key8": "2ASpr2F9QFf33s8tnP8z5UTK7fo4p7LsBjbtaAPjZUQBXKnoAV1KbSpSQ5Rg1kbwQhZ1PhtEjJotyQ1s2JE9BAJi",
  "key9": "21MepRy6qCCr8DMefBSrwz1e2FGELC1fAKKPTHsNVhkh2pP5CAJnCkGU91JLSGmpLStVgfUq6oRvX6ZNAVMiRMus",
  "key10": "3txi7no8SqsPZCj1QWKQLCebTBbYCZxufpa8wjwYb5yeBLYogJkxDKeVmtPCoaJevEUvqkgW6bmWctQcxtspyRxe",
  "key11": "2mATd81WGzuhG18VQk7TeiTyrpPLWMxsoYvM7YaXAprL2ATZYnq9ixxyinFcLsEhdWaPxUSvyuSQ4wSUCzT12Yv7",
  "key12": "4vL9vS1cyXc2yE5bFvbrfwHPWwcReP6DRFHT8N957QriQcWe99XaX7P7T9MSuyWWgSRgShKgvf5aK8TrwgYMHqLE",
  "key13": "6ysPBTaFSwzVH3MoM6JrHE1XxmStKpZGFnBgDgo751FMc25eHmx9rQVhJg8McH1hqkVwTbwZ2zzr4LLdMn1Fd1w",
  "key14": "3BBPaapLoDgbykZWxA7zupfpr3L4yTLvJDuUGVLdwUJdVQ8zxfvCEEDZC9JQxgDQqWd9uJwnuwosXb2vvVyaGVAW",
  "key15": "2UNczNaMKJpxVkNRWXo8zasHstJ5dxxQU3L3qzQn9bxwbVE5G6g2od9HA6xGEPQnV6VXQNatu8d8mmMnquwSykVA",
  "key16": "5ZaneuiobDgBiH3eR8ZNkcYiuXhgEGAvwCrARdu4hwC2zu3JFAUKQFiSNDQ8s4v5CwHyn6s1W6PkxubyBUXkQufK",
  "key17": "3wVS5EFLzz8UzVE7R9jjb1oxsmLnBXxVsQeKr7rnJe7jLdRAHTnpgSxQZtBUJENtXYULrWaQE4FKtqh7b8AHip6j",
  "key18": "G9UUaCUQzMaSeYkUDn7otd4hrPbUXGFGhkwsyZgRTphhtp7mokEQawa2NMhWST2wqFCz3XpRC7EZodHPauqNkJk",
  "key19": "59Sb3mmubyfsipEArer8Mb5UscKjHNb6jqq8dnTzP4EHaaTocSQHVyZL8oo7z372j3SvoqHjzrmrZVBLxqSmLMYc",
  "key20": "LVgF1yeyYR869Sy5yMbfZUGmRLiXhyAjk7bsvbwsrn98HAcMGMRU2ZUsE5exi3qs2ovQHsyQ3kbn48sTxaUmw2y",
  "key21": "2YcSSfnokb22udd63cJTCbAjGKXbWs3k957baKwCo7cY6JEfgxSNGDuxEcchSeZewQ4waiFjipVYBLEB21c89o4w",
  "key22": "5mKCyuj4YsaPoxT94uao13GX1dyi7qAnHkfZyZeysRrKJCMKot2Ww9Unn9x5RQy9c2jUKnRAJ7pMog8FEgYfi82V",
  "key23": "3NBZnKn4UhSiHM26M9WmqJRguuMF1Tgod9XDkjF77k3vFzKYa1Z1zQ5VMTJeeeujSY3dq9YrVN7UZjhjTP2PPDBh",
  "key24": "SqHRyqdWJwsPcMbNwLVy1wkYh987GE8NR59uhxr8MgYoLvzXNNwRrrCGAoXUVLH4THA7izEd4fQUkKibV9qWKwp",
  "key25": "473P8LabbXbJpGVvHzE4BMD9yQphxNRZcXRirEvZ8LwwPQn8zQaCqFsWA8NAi18ffnEFr7K37Rrjr5jsSbSAL8ha",
  "key26": "2gKvYsC5vEGH43AoyC4MgdHqLJCjWuh2g8Y7GyLFQHy6hADiPqTTCs6H5FmGjGqjwLfQQZYJ7YQndx8vme8gKr2g",
  "key27": "5GAS5mtrc3WwkMdAK38wj5J1aR3PTctGCZuPJDavJHarPSfxYwJJuNBG37RzHC371ZQNVX4CeCgx6gsBkbLB5qNH",
  "key28": "3M43BdnKF1sUuV59BQVFwFDHYEw6AzduTB3Dgak22UDKbKoJ5NNgu7sEbReafn6eA2uV2QBBB9xAMmTbFmMj76i5",
  "key29": "5CqgBWCWe9qkP8ozfDDRxiHivDmh1gN2DU2YtiLvGU8BNFcw2ae9EuHpBmwFC9aVPCVQ2Y97g8fWKT4pYrbAtLwt",
  "key30": "nGDDNBLZ5MMdKmUm2ZW1b8MFXZDDsy7FHGVLNo3593B9KPT84xsNk2zYe1aPiEaqkzmvTd3g3SoF4v3AFTMRy24",
  "key31": "SGL4AEH7ZWDej5YfwXGz8beNbqzxdwZHDycyjeoDk6ofBgRL5jVRasjXvmDMmkbhEY7bViTj7xfThgD9KZqSkiq",
  "key32": "5g3po23RpqfnqeYsVk4rv2oSJx69SNWKyHpoaZ74fE6UthGNQ8DWmJr8V1zxcv7dYx9qiutPfEDHgboSG1euDwo1",
  "key33": "2eMXN2XyoRnJLfMJe3yXnNCdXg6PvqTHMF3ajT8y87b8tGfQC73YVpRgeJYw7pxXZiVEeAnDFUMMg4LBimQ9btkH",
  "key34": "2cg9LhorHTGXDZmsfyfZf3VchA6SFkYrwLzNhUmSZx5GDMgBAdZQrLujAbNYw8GZTDi4RKMyQ7UkZxFNcUVcqzRw"
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
