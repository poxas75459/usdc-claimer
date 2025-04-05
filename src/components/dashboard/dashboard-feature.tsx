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
    "5o7JWezPJ94bGsv5PJ2dqV3iBtEzCfCKESrrCh17vjbZfSf9iHQvfWvhmqzheBSw9gzk3eaJ45GdPonnpEcGmNwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wxTN77J3VDKn2jrhJAReyqL368boiE9EomAwP6zBoGib9UJdZMzhn1FpE1GXX9Udta9p3A3T49f8oYjgZ8DyzDB",
  "key1": "Tg7QRiu9VBrPjFH6UbRGYVuQapLjCtmpgjUd8LM3dqhwHX9DsbhSyGeTgVpAx2pt3h1B8bD5nfNFH1fNGWiV2ZT",
  "key2": "2ou4NeFGL7wic3tpiyHFBsRay9aVWmVMsB7m4ixAkxEizSTSwdzCnGFFqANkCR75v9uJAtJ15jcwdy4eTSJAUs9A",
  "key3": "w5viELHuCmcD4mCKVB45psKuiTfRaCmYuUrXVj4BBqZ1P7QCHieXoCTJ2BGQk8VKw4aQ563SXTuJCb5twPwg4ZK",
  "key4": "4o1smKieupJgYPKQ6SC2wrsW6jYSckT6SojrD7FyJnDcX8jaHyyewLoFY1EpcUgb7UaVhkA8HNnxRkzZSigwDCAu",
  "key5": "3UzZwPF4Sd7sAb47vFrwb7E4FSDjNwCjzxZmUQxj1VZnPFCiYUJgkjZcqszwLZUMC478tJmd328izP1ZF6858yo2",
  "key6": "5yoDsbqTbaiP16vvuYV1NGYp2dj7sWZVTox8NSUiwaxciBEhQp79n6oRaTz6Rqk9RsHGW3w9TYHPqvPYRiF4RB9U",
  "key7": "5eDx9nYRYd2xAJtL3ACn5vExNcKNYWk2yfdg2ahr2QPb9Awgwh4uRAz5ST8TTk8v5R2pKUuFHY8wbLcBJzGcfED9",
  "key8": "44Hcf5fEc4BzP9rhXdbKv3ymVLrXRaVbdDk1U55R2BvnvuimcrWMQew4ha7LT2JZoxYtz9ArGqAwRJhHLnvVFL3m",
  "key9": "5Pibdi7C1t65Fs2tDuhmXaeJ2c2Xu6dEEinXNHSmU76D79a9tcwaM4PKzdVDyA4kaKbyRpCrmHzZBkoRzgAuMopX",
  "key10": "3LK8fnYk3GDGuvedib6seUSQNCuNfL7fg1bVS7GKzzSMVvd4YrzdSGnD4UeRd8nYb94n162PBWAPrAw7PxcY8VAa",
  "key11": "51NWjWSVH1NSPgqbCrjajrcyCuHx8Gewyzi2DH34tKiKhLiuViE5i7RGnc469Z4N3LFjj4oXAw76d17d3ffPwmEX",
  "key12": "4fn5mixzhmJvQvahdfep4uW4foUq44FF4xUKh2g3hx4FSWytAy9VvjWVxzUkWVzoBy1QGunXNMJnRkvMqMBvtR3",
  "key13": "2NNBxxPms1ES4gsc4vCWujFWiHWqcHVQa1n1wqQ9VqwcEEhWAdBuwr62PRo48BeMQd5qdKNxh9i6fXNwhzjWU4RV",
  "key14": "3UzCWPupgUJALx2PAHY5eKwzBa5zC9rMDCKP7jyuVewzFgiR5B64oT658rqQKeT1cFomyCs5V3eEkpPhC6Rcovg",
  "key15": "2Vnt7XE2qnSX5iZdQAsE6u1nCgutNx3iwbTU2KcViSa3x9fcwoSuvfzkSN5FCE3RpxWY8JDg9QGrhqTGfpAhbkMu",
  "key16": "2rbE9nsbKHxP6dxqNBAXubGJ58p2zLyY1gjF5KGEtnaCvmvRcwuLQxfXxe1FKK5WDjHfjSMGhAsQzGcTDX6xx7ZJ",
  "key17": "4aTyQ82HhvKNoqM4Cx73PNSATjho3uwJhHj8odgiPmJoQvCGxhVwmssAPx1siBAtN85i96AHeAJg9nhxfnQSvkgg",
  "key18": "4Fqks9Nqn3KoGTZfZEvfv73nc3K5KhqcQa8FX7jQ1s9Ax1nGBEZcMvZP92ACv3LMeid5gepvEqLrS37Msc8d8rD",
  "key19": "2BMAwge85wxRQ6VHHAyuqzh1FpEhWpFAqtKxwPbBpPMf8W1z654g4x8sTqwigCwUyWG91mNkh9fZ2XTAMzRA4VRT",
  "key20": "4mTdT345knhZEGeFHexh85ZFVzgG7b2gSEikg2PvschvDbEbRZ4Wzz2zRLAF9NPMggHBXjJBjNQcUG2T5Qjrq5HM",
  "key21": "31oJdp6FqNgXhHiiVxCUXuKPFghcSm43j8aeAGjh1ehjJErhPMxwG9WwJBr4zdtsUULQaMyj1Aez64k7HhhXDmnZ",
  "key22": "4uXu4Vzw6gpg5GZSf9EKJbHjQB2VhjLPEWykrH5PkGxeKFMkPsyvZ4jGbKGJD2yhBivK6GqociyFshaTLh1FFZYG",
  "key23": "2NR9ZTAhn57xgGw2hQjLMReZrxfRchiYBEVug9CBsK8DUqtGNuRuKBmB4cdNAm4nJe5kqVS1bmibmzCc98t3HpZf",
  "key24": "2Re6KHeSPs5Dd8aGA5zevHTABtjhEsLoDXscNDiNrxPx36UEqefyD2hiKzj4AThvWgeQ74EQa1SZTbCFB6r3KQYH",
  "key25": "yEfD4tXisNn3kqwVkf2TQE3ADC1biJnJ6rAGhq4T2wqzgs2nx2rW3xyziKMuHjDP5ae61VDp1FGBU2yaWsUTERz",
  "key26": "5iXSVa2ERUjPTmDu47a9d8mEfATq9GG1YnUKitkdAd8Mwvcf9ETT59pVBHFFLJWeqRDfzR6zr5sHEhH1gKThCVuu",
  "key27": "2De2HExakC27yajgQJnByXRdEUL3ZC6VDauX5cgbBEZfsvPEZsxtZvWgQmFpYRm5hLKkwPgC3L7Q57Qp6zq7X56E",
  "key28": "5QWg2fDAkbbnr3axcPMir2sLTQqis7BaufomuZqPsy58P1wRg44ii2T2YoPebvP3S7tM4xhSDEqxRCnpgCoCovhc",
  "key29": "4iegg286wQTBWfCiLmUAkWRAvwnLp6zQwu6tqHFjz6wTcUsxddgTgm4wU4MLLeMXxbVDdusseQmFos6gfpMLKRov",
  "key30": "5SZUUnVBmLNHGmF6Gc9KkkG998LW14nPq2GguvEXqoTuiyUP6xtku7UUfwBDzBmVS9KNXAz1Y6ZckBihSens1RAQ",
  "key31": "4PoZCeHk1qvPpvTYuWDnbMqqkVf2c4QH9nM21ae1ad9tXWpBVLkJfHEnGPrmEQ7aeFUrC8iGhtPqqWUH47B6cLUX",
  "key32": "2WW28DYeVGfrunUH8XkcGNUAkccXP9cHM4xDr85FqGSjvfpKnzLsJKhQTEt7WetUBJBUJzdfFDvpeuenwNPo95iY",
  "key33": "2z17Y7dt5sUReEoakeTC1FmeinbUYKBcsts2ZtvT2CHGM1M7uu6eTRfWux2qcTYEgTo4JjJXCQSmPEhQKV9P85tK",
  "key34": "3PFXyiqZMxWkhu5G1BCpEzfsGuvNmzTCAPQEjcDR6z285PC3YG7SbgY8fAkHPCabjjpvoVQMvXgt6csSb4xAd3ui",
  "key35": "2PugfPBoqM8QqswXwh1XtAMAQXM62xuD8tUG244szSkDfDvVsCpiEQG2k52sEHQNYMKWB9YxEGhe7nxDBzAUqYmZ",
  "key36": "3wAppG6RR4X3ghurD6Xh6awKP1Rj8qo8wSHpC2NnG79hPUyqwpdUCsqo8w6atA2nLAm3VEXgccQkYfM4wZoJZ3PZ",
  "key37": "5V1nEXn68taT3vbrUQ5Ae4WUdah8vRRQFpC11cZ8FvSPh1xKa3T83vJEWAiz2tREkeneCTENYhptUtp9o7BSr9ux",
  "key38": "JuykoiqDonNby5LT8nwCVEfAbYbfr6AresLJPAvevgxoZCA2uHkYBSQrJqPXrn2WjiqLa4eawDrV1QixxMghQBa",
  "key39": "5HxTY2CwhUDtKGZnAFQoFtf54StqgkLxVfZEtq7q5bp9DzPFgZ3HGgvVPamLTjv63Xz4Uq2rCWK2gqQY6dxTpHeP",
  "key40": "2rnt8yuBMW6F3WVMTdHUXR61JZgqeujuimUfC7tUr9cpvFbeYceSZt5TvyB3J3fr11oqFhEHZ5xwrtvh6HW7NUZD",
  "key41": "4d2sZYZE6MWMR6GFGTznVEmv66mwwRtysbKHTKZpnqzPdiwp3XiMfw8YumMf9gKhQ3sb1Ws7LR3JkhspVockNwa3",
  "key42": "2LYtEEMjPqnSZNGpPPbxJf5uTitA2UTVKAzFNXEY5tgJsxVuaAAeC4u8oY9m5zDz7rWvCvjsDPxG9EbBtq7h9QMb",
  "key43": "5SKzw6W7Xw8NtVKkwytnoDaQkJeVj13nuU5ug6nNsd9NghULuZZshHzqanJDc58n4rWyhoSAva8J7oeHdPMePWa4",
  "key44": "5gdfGV1GEwU4zea3yfMqCHZzxyByjmjpFxih14QAcipPrrJ3tv8mXu2p31esow5sv8qytU4kMaPPkUkjJ8SZTBHY",
  "key45": "wtQqxXN8fKATJKgZ31dUwCXK4DTw9hVKLkQiB6mmyMt4xoJEP2EhRKgCDgWajWGJGsGyoRuVpAmBiMJe194SRdm",
  "key46": "4Wh9cgpyEDm3rZVfDkxdfS3cwHpxW1uMnqjAGRmkp6FWNz7V6uvEdCgc8WPd7TdNjNdpFhTvMkiZoNwRhkkdovek"
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
