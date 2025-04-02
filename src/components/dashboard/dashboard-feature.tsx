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
    "Qh2F2YxP597uJLi6tiGWq8BUuFxBMcJkZvK7YP4YbQJ3dsa4quQo1TNotpFx3XFXiAs3jmkekAJBV3mE5KNBrGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gvs14ZQjvBTCgTSPBD6Ns5tGcKqK8xiPHoMkraw31MwZhejSmjAdNKf3RiP5m2gwrmC8dRRQnEmnBwQPXGdHe5R",
  "key1": "KAneZ168odBiEYbMH5k8hi7cSJ45M3Z2VtHkyTiNxpx1dwNtdQWaLPrZzwAf1KEaE94K36FnCRCbvwLyKNbZBrP",
  "key2": "2yK9rPoC3HBtEKXUZvyHnHKYHhsrivK7EG8UqWc6CaUDQbVDqxyqntMMTHcJAQye3vwbMS5bh6bwa1MZFAS4hTbd",
  "key3": "3YJ2bBevzXXpcbxd4cjcGg2F3M22GurD3BLfcwKosjF9N9shnGvRKhZbY7Ut9rnGpMSe4sfZ3ea3Pkz7e3zYf6Ka",
  "key4": "3UHDKmVQBTFYLhJ4y5rfukegPDUDrPhCRwDUWxZ8ZKG2DA7fQ2g8rXDsfWjs5qNbujSCzw6Hb47KA2xKLAkeb33i",
  "key5": "UTGrpsFkLdqtSfi22j44jVHfJfXaQX2UQ8PoJBQmX3XcaGUfrw9gxXJrsxHfbM19wSe2F9yp5DDkNw6rEFXEgJ8",
  "key6": "GC4wCyNZ1MB1XxjoHgPm3Pq414VjHCcSPvwv86rw1hL9r6hEYBMFKdprcXEuUbvr9MESXMGX9cd8PfXdCRJPyu2",
  "key7": "5trzkXKMdxr6gevVZfFmPiRfPXjsnCQEvLU4S8EXQZfCHvaZH6P4oDGMDgrxdccF8jQ9UGkdb14MHawB2R9WCmKb",
  "key8": "5FwCDFLT7RqkvqTHQ6ae7iEfYZvR7bhdYjGg35kewGYrfa6cQFPqJ3XNQ2TM5Di23EoPpL4PfwB6NdxTum9xXECP",
  "key9": "37Th1DG6sCFo7Hp1it7ZanB7YvHMssazGXP5QPigkit1H9NsF2roe5pZPUtswCgeuq4rKzKsvALSuneq6KWWivrR",
  "key10": "2zaLYijBnGB8fAS3zpXoXo451iS4UFQpqbBVzJyuYrgAfKBQ53tfrxXxhsrf2mZaoTHCZ5kTUisJkYqyabs3Y312",
  "key11": "5z7KvKL8mponUR6wUFC8vNEzv5Sb47XCJbPKk8jK3BDuobSNYhpzWmu6YwJ318JeSRRfQKUZLTHsNN6f2ZCpeZK",
  "key12": "5z8pbRetLpP7jAf2nBpJKrY9fvKRgHUXzfCXZh6Ch7hjeDT2GHp6AH8Y7RXTTU6RjAqn7j5fvyysTiP8VxYBaTmb",
  "key13": "2ZxQ2ByStFK8nKqdsFoJGS33XiL2VYzqe8QjbgXS3DazycHKHkpG7WcmbzuLuvnRPF2gsMFWwpNsUmtVNBhL21E9",
  "key14": "5DixfhCQDhqDPFiBvXrTVSVPPT1qy5ieaJuZDNyffqWCvAUHFh9kGffAYcLsLmG691MhkgCP2uQ5cYfMu5xwJ1Yu",
  "key15": "52DWeDzV26naa5wiqEeobimhvhdVLLTkMq4iiwkktc12VqqAHJULRhUrwakf6jQ2x1NRgw15YV2cUEF2dkk6yR9W",
  "key16": "3jDitaNaT8g1EGCTkoZ7ZyhtykzaYqtBt1NstdRidkH7j1zkhC98bwYktV83SNUVYHeS4hCwYTv9gHvmyBrMtM1A",
  "key17": "3ULrZdxWwqemM8PWB65cXy8dm7xoiEgPiUA1kFAcRiwEh37seYwRMrDoSm74ir8pwWRwyG5Jp6wbeA8gagbfwwkC",
  "key18": "2nobHYDUup6hKWEr8J7wdH1VuLfMa9EFEBioahQThNL8wBqZJyw6aBsYCe2HcMiTH8sFCy2ri4tC1vhE2TJk5nBY",
  "key19": "2YjaJ45AjVLeqa5eHPtYMk7xcSFRqJtPnUvwn64wncq2dKLugENdWQTAEcWFBc5B4Y5kjk1JX4U1X7Sk4Q6a6u6p",
  "key20": "2aCyDwKEZ6a8WqHSwPR9rPRAuvZDGeJck1cnKvXSakPMf8v14gog1ssEtCyzXxDED3XWHdqT88CwC6nqLLnLPBpo",
  "key21": "2PRY6kBJm9Cq6zVqn64E6cnsUMVCop6s1wTqjSiQawmv3pLFXBgznpnLQpxfgmpEoDC1e12apRELBHkDrGYc2TE5",
  "key22": "pBr1dTaqSLhcTjvBhgM8d8oarY1y5d4SGyBydqqct89MyjQERC2UMcSPKXKSU9kfeiC3nwWPYXad8vpZv5RtibR",
  "key23": "4q8NeJeFAKW17fvZHCiFpmPXzgfMzpTHTxAEoGxSryRvsMpgQW2Xr9ho1N4H7oiRBKPtHMEt98QcqoG7rFhmew3U",
  "key24": "3PxkMYvs9TNjf8YM6yvBfUFv7f1rUdGDXV1T8fQg4Vaaeot6q3Tks6fXaa8nmfPJR1MWnDeKoFvsxZP8q66P4Syr",
  "key25": "4iAneRPmBE7foG6h5cNX7uorkYBxjfJmgHTP5b6dVqU8EwgDcfbms7SybAdNnmLiXRrekcYmLzdzp2fio7h88po9",
  "key26": "3RUvp1xvzZTfZjoTHrbpYnrzTRt8sXNJW9Ai3Pj6pGeZHHLQywKZszSsiFqmKRveQvmKTHx8xaAR94De6Vj66bMK",
  "key27": "5b9Fi7ajnnZUpHaANK9TTEtWpTTLHP9Jpy7A8DA5kRoEpxrjyFZTMVFveA4CptKtXJBvxwNwRauJrdvTq1TwHUjQ",
  "key28": "58vhB16chSGDE3sfYPXzWJy6Ncfx4TYGcH4gZamfUvCokAvwBWjvks1D9cxGB9K9aCUxKqw7ndXfKSpj9cPgMnHj",
  "key29": "3FyH49CMfyN59jcJR4FhzkRLnXmYfbRAENuWSPWoa1xjspHnCRYvu6wQLqGtwZtzbRGjyBT5GCB5Ce38uo3JVAZP",
  "key30": "449C26Jmi9JRC2dD9oPLiwMQ6RhVLxcvJZyR1kueNQX1kBrvFX3q4dAGkkPHLjqNcPgEPjUP7fsn35nZu6TAj2nR",
  "key31": "3dyHsdVjTngn1K45EmGCPz7WuVWkeqJGbaH5Vf7X7ptnuvhTf1ouMKiDst6wagrP6qWQRLaFk94nFx6mRy95zkRV",
  "key32": "4UZSqbqJZhsbt4ztwGvbc64YU2EMafRt2betqyMojfAYU2fhy5DwANSKtE84XWF7BHD6fGUvheYvppTs9htrovKg",
  "key33": "2o2otSqJvMH9waTenmnpktiuk7eoGpLadKzBGS3TcSvh3g2WE9TQMfQKqRDAPvSDMdvuysnadVtYFaeZzLEAPfUz",
  "key34": "3WTdex3RuLaUBvEaHWfBgH9cfoyPWQVHRXwNvntYwZxFavCELME25WtcJcKorjX9YdAC758KSxGQRR45zdKTwwcs",
  "key35": "4GLdskUhG56pu4sKhYzLjxJSWEUJyVXUkrV9BPvfwYsLsUXcgkpddUDRQwf3NBbkiehs4w3MrxSUcUhXvjxUUMjw",
  "key36": "5CrxvJZsCFjBX9K7rWSNNeR3ZSpnkuNV2k7Cr6hdJNa1WwNoHBpo2tDpoxsrLz4Qf4jKbW5Sz2f6Ag85BV2Uiopx",
  "key37": "2F8bQjQbRStRB9ixhuyZFBKUUs7dm93PgNck3efg7hLtzsGjvvRcz9tN5SpDwAw2yM6zZqGuu8TVBN5aDTXEbxmR"
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
