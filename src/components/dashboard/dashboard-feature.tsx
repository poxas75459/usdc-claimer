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
    "KA4o3V5wY7B2u79Za9CtS2kTUt8VgSDgcCgD7Zr21ZNZzqc1oCj2V7y1NM82rc7B2v8jSb7Lb3ooKkez7o2Hgwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJ2e5pDmdZHUAyXDgiW1X9QBGgC8cuatDbi8P5GcCo5Bde3o1cupjUorUfkc61mfB7LgMbfBhULHM5YoyycJZmM",
  "key1": "398MVSuEP7cSsUq5FerW8PUwrRv12ZfrzZzrHsXyrTux9JCTumeRhghQWa4NWKKiYLCiZY16MzWTPoYd5r36wayT",
  "key2": "5giKFizwngNus2KPt1ue9mLmqg3Pq4UoDW8voe8NGr9WDdJDyC4TBkV6Xj8gncNqXHBrf9UoGTzxseu548EmB9vk",
  "key3": "3f8yFfUnukdmBCPu4HwRmeKCkY2QavzV1L1whKGgzWSbANLvjiU5455izW8cYne4LgkKYFLcxUnhpLf4zk7QWF1N",
  "key4": "21jTwqDKc7wAaMD9aKADVxL27ChYRUawCbCJdpkWsUcodWLSw9eKyE9UpLMsG94uusY6rhhco7WLQNP9M6MNZfpA",
  "key5": "256iKuzrkH37hjjeXJBgqt7sT6MfkENhZsohF5fpHRmWVJyKXvjo3knmNugfQMiNEzjUo24PCYwZHWxGrNnKKzER",
  "key6": "ApxPRitYX5orc8FVbUGB6JHKHDzt68WKPjw9LZ8m4RAJbC8dkSwExro8TNJwrUkJ5t41qt9SirMVHWEr14338wj",
  "key7": "2mP66dyn5YU2Fwh5jS1ucwSVikHQifcfpeHfbXh9Nf15ihK84AEK9DY2S7pfVSrjz2qkMTbdVCDvcn5wWsTA9VuS",
  "key8": "3fyL9jrXrvJBXvfRAbzHqjAt8bM6MYPwjzgcQh2ZJKaV7uAHwpsPsusK57G7NVcmNpcqiE1F9Z2taXsr3h6TEmMZ",
  "key9": "3XYyKFEupcxs4amAXxVjGKfmarDwPcndSZXtvR8hNBgxrMfGcTtJoaKcCe6Xwr3sa5JpAwa8nxVijVCtH2JnGo3T",
  "key10": "5mSnaLYin3yByJCT7WNcgd7GfHr2QeHjBzdGNrrhRifgpJjBqNaQs9quhe8c9kBEGWmRgzwkrb3ojU9wfRZ9NtRA",
  "key11": "7zdZf7SdWRbcYqcJy9SwYY7wQoMtDLf4evkgmZvvY4CR6LYEsZs7VGa87ZsdTFaGrCDxL6tskgyk46G7S6jgLq9",
  "key12": "5qYsgao9aAsPwqWeEMGdBXVNucbfU3oJXGBM2ySF9x5MJ9iff537RAaWSbx84iXV6tfeP9NAEn2qpt7bxo8Dy4MU",
  "key13": "5v23vEKbrSvDVGcw8mkdrq1M2YUAAWcqERrsZV23cTGviRHb4p97PkgFKbQYjoew9FMXfHQw42MQcMq6ErrFjowE",
  "key14": "4dFc26pW6zvqcVvVQBZSkWT7A4DpMbwbMctXs8ZcF6QfojTwAz2urdmrE3NhMrbZS1VQHx2FyAfWM2KxagUTTJXG",
  "key15": "2792VHDCkGLbYFhhth3UEVa3ZoCFULgXFXuJVXD3mJbKRrsLWLYEwy4apuLKxLgRmnEngqwomVXauxNDAhp5bdt2",
  "key16": "3VhMA4UoDDtysHA1aZrz9GCopJJMMjoTu5dyyXDSb1Ax6htNphsTAeQSybm34Rp6mHxquJF7cmo1DihvZxpEJrgq",
  "key17": "qHdLdHbSevcJNS4p888URKueLz6rAnWQPXJ3aPwzCHJgZ47gcXtfhFFhnTK4mKDZerpZS4ZPgHQe6LnhzJpLVXc",
  "key18": "4PLVWzrLJAN1r2bzhpys777AEs2PmJ96zfTsw87FV7jqsuukMrVU5PwRaPs4CD48UbcbukKwBgEjHsaY1HUNXwFv",
  "key19": "3o5DrUp25gCy4qcQ7ApnZCJRh9CDLakawhTKjYxWhuAsQ8BkkDn5YQueqiKbb3ZiSRgTfgdeMzSPgfikjkQSBPGL",
  "key20": "5dZT16dxaC5BXP7VnkbkMaHtfmqdoz8pPEgYf8jiSYuZ1Fgvg81NZescWtNCvrLD9euGGimHPWhWd8SPdo24Que5",
  "key21": "4PXvND2Z4iHdrH9ReSb87EcDKwzrgqF6u3ZY1vwVhYFom15GMD5Fa8QqiUKnJdnYxUHTBZ385tmbuscKym27bFp9",
  "key22": "aZYfecQziFzFtqdcdDc7HKT7GuMJfpmv58q22QgMXZgreKMG3UDFqmWHzbphjueJ7pzABQq7EeBNQdaR5ZNKoD2",
  "key23": "54uMi2AAQ4JMEAKsYJcC545meYo8dT4CaL5vBAaTjCMYFFtwPwKFbAkCkBHA9afGxDDWWkvck2A6PMNp4gUCqMw4",
  "key24": "4dMCAcDyKhm5Hghn12PEJy1mN3kgX3SW8W4F99KnL4FwkMpy17JjSgkuJr2hBPrVHvP6eZbtDdcLTboAg2yssFjK",
  "key25": "65KpkYqTFvFC8VYUQHPbMqm1btgWyaHnuTucrqyzgupowcryrwUbdwomcPSFKWmoNJqXakxxXuXx8E3mkmY8mzUr",
  "key26": "3Te1pAjJDuwzVParYpoakjNQiXRAE1VYh27Vaw1vZYL1CThSCeLdmjRY7AHpqFqfSwgz2StA6Cp3211NMBuVGgMZ",
  "key27": "6132XZoA4iYiFScdMWZ1GW6NfHhgDvmtetsnbwvb7DGux86WD8agvMTV3sAV7ws9ZsrXi5iVDhG9u73CJA3eFjBi",
  "key28": "4hr5hCoSGauDPnYTjGEzaQGwTqFqoczYV43b6JoFgLdx446FXLqd8hZauoNdQBX9QC3SCJhCiu3bqXKQptPyZT94",
  "key29": "41SHZJd3gYJEbzuCUkfXjSiXws13vz4oVDEbtZnd3P7epM2yWvtS2TiPaJUUtrFZHDxmjuCDDjvwDsNiRaKcinfh",
  "key30": "4u12BH6xzHgGQ1mBqeKGoSg1mS6fzPCJQ7sXX1LdAJU3Z9yntb4et9mokRWVmi8pu6RxAQbPXNhDVQWyyNXR1w8W",
  "key31": "5sMvqVUyheFR54Es2vCDKAMVK1SUk31i3DsQr1VnGrNpAoioJ5Mnf2zbF473NisNp5cAZ6ms3SoJHxbqn9v7HypH",
  "key32": "4ZXCSVnJwzL6bcbURrXXjowoaq67nSzen45nbt8gTmLV6MPnDGrxuKQHSvreVj3TBhqAgRUdQ5vxeZGHDGm7pVXG",
  "key33": "2ctKpJDE3pj1kvhK7ANnbs7J8gYeMcQ2ySoQ1mFrccAWBHmDcuL7pV5cTZf1ytAKLHtKPA79rgBwLJ2b3eYRJtnp",
  "key34": "6w8VEL97xexwVFCTQsnpBEL3dffKuc1zmsNt7vE8T6ok7kYuVwxGbTKq8bGx6d74w5QRfYFfso84bnTgB9sE7zg",
  "key35": "5dMnvmLzZeGw2zASobJCtqzEbvGjuCjSCPRfsyq6vcHFM2ChFchaHttGvwQdPcNASbrQDQp3LQBjT7hTDUWACxhP",
  "key36": "ML7YMcZtFNv1E9S1NR36iSx3FTqy6NjQGP4SZhNFSud9wb5KdTbbkGSY4civTRtZKnaGREz48waERuQCpCZLuvU",
  "key37": "3rDH9sFTabDarxbaMnX7F7CNj8j5DMZRxoS2jQtyhm2XgcTix526712xZD2nKzYEaWEZvQyYJp7fhKTMcmj2sw2u",
  "key38": "5Nt7CHEQ7rF9sXs9Zq7kNpb2ivgnrMHK94Dy6QdKQdr12rNEZpeSRRA3VnKDQsb3m9MQrtWQYwBs366tDao8xFpa",
  "key39": "4HJxL8guHBaTwNZnTvzpm6N855mKrFCJ8wvErm5sYzRywx5UkAGLo9y1AFZqKvaHh1iX8XJDAPNPBqnhb7SMoujp",
  "key40": "5ro7nNuRywFpBY7ohbTwL9DiyzM9FxyHdJYboKDUqWJpNWaYCUdsvdpH3BtLLfg6HorqMLYTtbdu9MHJXM576GbA"
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
