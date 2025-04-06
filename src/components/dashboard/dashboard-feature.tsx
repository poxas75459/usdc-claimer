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
    "4Ro9FEs7RRbSH9Yby9r8DeC1DnmPF1R3Nm8GcAXivkF8FFy8EGdamofdjbZAfQ8Ptsu7CpRnHhsMrqG8atH9SuG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkABVAwwcgcs9gfxqQRupNQMQfkenmbA1kULw5bbAStrKyxb73LDPwCss3k4SF8te3TnEAaiW9y49xM1tAJJdDQ",
  "key1": "5Xy6z6EMJgSDvZLEKpsRJr32x9ZRQDbJp99JA3Bji2G24MNNguFyYk7Tw4x3LPiiWkgC3MLN8hoU7xE6d3hAUZF7",
  "key2": "4QLSAaKpZZPL2NPyroBZnmWAAcTuQZtJoCpgjLTfaD68UoxmXT92vnPXFvpsWn8vVnNh5hB27PUQxHKeG3w82awC",
  "key3": "2o8d2ZHVNpuQJDxL6wiNZo6s2Qdds4ew9iRDK2zNtnnJSXzhYgHZzbMvUewTWVoJbeCs3Z5Xbi6pCWoME8o6sfJX",
  "key4": "5pSabm2jq6oDQWU4fxBbDQWFANA5NeQhDhQiCobVNPTPsiB8hq8R8qNefXEzNdHF1oyPePGNNkJTty15wYVrsxv",
  "key5": "4vNaYTGEznCQmWWzHwwwTycte495ULyE2zev2XtPBxvE47T8yQefztDEp7i2CbfQJzYhrqNd3dguDW9pJv1Z9zy1",
  "key6": "2Ngq2DRrGVywF4R6HLHUaWoe8Wn9Mg469H2h1p81LDF2ug7JASiYjbBLEt3HE4yNdvGd9mrweRj1WdLDWA1nJBwh",
  "key7": "WBkwG5jsAdKt64ovxt1vyFNU3xXp7TusFNjve925xyL62PXSWNpQqeBwrSHtnT83rmSuHdoPHV82GrQQFb3qfsM",
  "key8": "5nnuWpQBu3nHQGaua7kGd7ciuUGJamMSLHizixsT92gmEzH7U1DwAd3ogdDFSsLpRsrDGFnRgRR5JjszJ3zgsn1v",
  "key9": "5L7psix82VeZMMwBWGNfRHebvhZsZgmwpsJqedzDtQjVt8BLeJHZRBwNUrRAa3wu7GJBuEwv4PxWUCkXzAMwESbJ",
  "key10": "2gH47GSVCD9cKtMs9i8pMJEmmtQrg2e2hv2HH8YTxU8rx752VQW9BHPBayxJRy67ukdN9fyyexETyaBhssFbbtZx",
  "key11": "42wEVyPtKQLJG9L3SJcid47fK4yofRzvjNdBNKnPU1Xbx9BTRZQihEu4KcLGGdwoDNa5RRvFqxGLTogiMFH3h6m8",
  "key12": "3CbZptau7DCaZgjaNNfxt42dJF4b4Ch4FphhUivv7gqdfJFU2Trk13UaDvr9NkZHpVvY2RX76KVyxuk8uvFu69EX",
  "key13": "5sua86NeCj3H2kMyvQqiekjSpRFRhvBgsGwRjUMTPgX2XJ1DmHAaC5HU1o6Gqef8YjJrhTrtKbbUVNpMZmFzGz9d",
  "key14": "5ToqG8UmoPXDLXFKot4zosSgNF2PxZL5vKEYpr3MuUZVGuEJSDCbNn2RDRiWgN1qxuh8LSXi8gYF9vkxptYLpuxs",
  "key15": "2GSXyw9oeiTwNGi6PqftCsbECyBqS76DpBGCtkFHN51xsZVZUju9jYjbVR9ddTnwJiPiqzMNR2qPFv6pH3VZNQ8X",
  "key16": "57nMo7CJess9nR2mYdoZFRgG4M3DACR4KYZ2bDrQXXcsNuFRDN326aRbUFR4FcWUxvSibCmw9tt4Mdka7W2V192T",
  "key17": "4czfKw9eTjbd5utN9NdLKt1SN54gCAWfWDS8DcN87pJQREVFfxN1KCbcEuvAKe3xipyGSJJTkQVTySLD6NWC4wXG",
  "key18": "4XQUthXjE1sP3ZHAnEZ6nG7nv9kkH7mW2EgppippsTYnSVfeacX5EsjuEp9gUEte46Xy7cnhiH4jUrrdpxwQVNdM",
  "key19": "5ULjQi59Zbc8B54Q54KgJ3ByBMcUPXZprttdZBcfrPxVesuk28bKnXvUUBujMnZn8ErvBwibUz7nh5HyqYcDL41T",
  "key20": "386VcpsKqaYyHz68RTyacznaZaz2UccDRP7e17SGe5mAoCv1sxQeStCLZ1hgULHCLpM65WKVqUDkBNZRN5dQMyBf",
  "key21": "4gjEFQwZ1oW7QaDPJpYzfqjQvb3xK1aZPuWBTj63hDGR1h1MvmPJkJ9BUMQ2MZYxpJCyL1PUYbK3vpwAwLGT9Skz",
  "key22": "4KYkwfwYNe5NUAq1VmUae31d2ARE9GQ9tCip34CgaMqRQYe8tjJt817prPW6soykxGfKvyKccx3qVd183pgGPoj",
  "key23": "Tc1UKy7RhxqwKteVn2Pa9796Yk77nSR6r5oE3iyNG52WbGAkWT5DdvwZ8RFtuUK4di67ff76vZqFARfjmi4bDvo",
  "key24": "2zD6xdkNVkX6i1ar29Qmuk8RZvyDJ9qCsn7vfNmCpoVpnBRu4mGPdEStodhb3gFL5Yq3a34e9r9DMgadKcQ9fSMK",
  "key25": "4rKLJDMznhkMZWrj4VChLqGAHo2vMtTE1QSLV6LERdNfxxG3x59zVopQhWaFo16SKkcConWUiYSjm5RW4iR4nnBY",
  "key26": "3SwKzq62WW8RntJzrF9apJT7bJhzvEG9GPSyyjYRuFyoLGgR1UedGQoGnDwgZgeEGbsG9eU4obGzDu51rANT8KwP",
  "key27": "4pSBDhTMBZEHSFeMNJJqcauaTmS6FNeBnLUAgiqMoTNeRatLdV48uZCeE6dkYZPTkwCZm8WSZoAqS7UPW1TGWUfm",
  "key28": "52WVX4yYo4iCNjmjtBxiHiBGAM2ZT2pSZSE38qCamhmR92MpP2H4P8CwKPt3xzctJEMZSXSwQWBZSDfXFXtQuQVs",
  "key29": "3PsDDkgvnqv2SYJsihpLVqKr8jg8UKo9KG1feX7848cHguKDh8LbCVUufsEpVyg8a8iQsQ3krfTGtX5uvLpUDwLp",
  "key30": "2LvYSiWukLdRCeT3KUDdy1dJ5fV5Z47zepRcV9SSTTZgXSgrqvabgL1b4WYUB21tUjJZhZHbw7qw88T6rUkbEotA",
  "key31": "49VTyNYsNUQQxeejDWz7PyyzZLCNiWph19enxUY8imm1J6FynTVeupqLyCtvNmNhbCgB27J9Bc3kYiu3NbxAxnDt",
  "key32": "4nUJkbzGtnX2VaFLJafwVs7Zkv3JVpRBQ3osxmXGBVeQB57sCVKgi5jbFQ4mTK8Hq8CphhQ7cYeVNBiMfqa6o33F",
  "key33": "yuQybVKTRmLHSnCJMnhWeGn8CS6Y4KkD3GC76UREVe1uLXCY3zvo62usodMM3L3ZF9vWrCjbrqCkdZgvNMbxjLm",
  "key34": "2ZoKZyRtGHvs1A23fFRBTECg859YEimfU1xmdua4f2kF4xwaqZ3Bp4xsZBoeTMeKLxQczmivSYCtCFPgHQTRWbB2",
  "key35": "3PLfhBu8QyTmxKZNZK2o7G1fTVuSVgFa6bMWx1R6rB9BkjvVFVHYYhbCvmbAZqAvPexk6En2RXkiU7uyBM4GryzU",
  "key36": "mStGx9FNahq3VXmdnG47aQcdK8cTADpzRd16HEuYJiXycWrfpeHZPgnzvXC31Jr8ZaG12pK2kKjfFthdNq9zqHR",
  "key37": "3rfw6SKUeJdq4g2Z257GhbSHAVRQegQWxeG36M34xP1kbiUXBohP9xKa4toSR8nVHtfJLZxEkDXz6LmiAtGjLrKd"
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
