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
    "52oN6RqwHmEQYzPcdY9PvKPUiXDF7Y6GBhSJB2geA2xxU2Ej2ZTLpiZkH8XC2eAQvBwLKQGMNTDWD82pCgN6cCru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ooobzuZqrY4uYz3RU5diZiQvKLGjAAcvPkBfLUCk1LERSNG5qCHmMMHjuSXjpE1KEH7dmQddDQpom1LbWN6MVkf",
  "key1": "PYYHswx4T1hjVf6q34CiYgCxZy2BVVkpGJxwSuQNptQamgCSMqmAq2bFQzzmWFtXbTn3GPDk5LunaSwrwyJ19fN",
  "key2": "5nFwhPHjDTb4GuP6bKERRwdzHGwvWEbqLR5pF4oRFzvREZxzPRGPcwNDtgnNUqD9ZnbGATJmsL8Cv4JtfSfDNgeS",
  "key3": "47EGHYxepgzQ9N1pxvyhrnd79ubznRcgPWnGyeujcP63pYQofzuvKiYU4DoxRB2N7uwcaTgbvQqwkoLE5gPMTizb",
  "key4": "3FDMWDd1mSgk2G4FBQGF59ygUXJvUiswGAaJ9zFjk5ovTPpGsj6HLtxY6ELZ5nXKZWRzjo589eYTstrdk15SUnTh",
  "key5": "2NC7FAyUogTr1B5dWPHcxY4n7F95SDXdcUKR1Fzqz3aY1thZYT3D2mu77LjEDsznvrHi4faFQ1p1HcCa2SouGVML",
  "key6": "5fBmnJ6fcMiY3F2j2NBXY24fJNtomPK9G5MMDNad8bYQE7m9J9cbdBk1dnSFMP4BqzjigobjwxBXL1NtULv6Zkzd",
  "key7": "PpXBUGn9mR9wdVpJnGVJPqKa5YQpuB5UJuoUvteMxupG6VCgSbtH2ULVbaZnERTnAe1wWHzSP7JyHzAnXM7RLbd",
  "key8": "3Q4GqUSaTdwCkBZfPmR4Gmqin4Hj5GmGM5M3oEajAbmCoVPt7Pb54vyinWKxzVjznhRowkcFM2VGtpf8PFMQjVCu",
  "key9": "KXxVgDFoMRhsbtkQwkXfe3kTt1CvmrKqMQxLNK4jvpvQgz17HQ5K4PTRA3zmpycz4MoHRr745gNUQzC19FTRiEY",
  "key10": "pmVg7zp9HPb9KRvhUw6KNcagf5qb4TqCeeCbawmam5j45MFWczUKXm7hgpiq2UtXYru1xp4cA1JN3qYcX6CciWd",
  "key11": "3cWyjJ5EUQJHxhAgRkct1PqNKTbeMCGzDUVUjSBsWMZWZEm2z3Aokk7nqcZ4acnjqW4nBgPZVU9Tq3DC4nh987SN",
  "key12": "3ATsWajqTfUgqMBXcEfdfGya633FsPZ4FJ8xncWYRCVLhS9h7WrV6THyPREYR4xhxpS5LWFTMcnd3KpS8HuNMtbp",
  "key13": "4ARVj9VauWnbtP49Tq7FCiuW6K4zbFjdBWhvBzuV9sgtKYmpJMDK2XUhHahBD3JTLo2jziqTQE3AQQbjKXbvvPX4",
  "key14": "5Fs9NGf294guLAPjheVV1JkQUpjaQeRixhGVNUqwKz4ureGfBTiPTRwVMg6uufnQ3GpudwZWRdb8x5AMo6Rh1c9x",
  "key15": "5hNxecdaCXqhwW2aDsh3CS6ucZkdMH9y3ZfPiuWVLSrtzDdRbT57wsfz8n1iJzcpJerJ2bZUGUqMHsf3WY6aHB6Q",
  "key16": "56wLYSiAwwJsXCtqh7Wr5EmkjymzbKrMGafSYtjKUUs6ZopA77CuPUbewgkzNrmfgNaduu3CBaBaAoRF6K265eM6",
  "key17": "5xzyvvgoAWiiA3TdMWxiEkPKAkygbHuPpS3snvmenjCuU3WuCdGjC7AKsjQRQUDtE4uHrsSs98HymmYggmPQAFAC",
  "key18": "1z1H2gjkoTszj73W3f3dSYTkwTLCoooZsFdgSL36nbMmu6BGzxnkVow8DD1UfLGNpXGL78gqJptU57Rg3nY5oAG",
  "key19": "3njTjKuoxQxh71WSWg7KJ5gEt1VtRaJQLN3SMYzpd2SLy5uPxCG9FUCrH496nZbZdbKR7xfQ4N9ASyR1LGw6Jsiy",
  "key20": "zF9ju7YwqDH4iqxryBsMLjur9bWJYKugfVedzhnFKeacZZxqwkoH6A5UR1SgSWozjgf3BZdLi3BXVUWjdJNuUgv",
  "key21": "N7zaSqrxqwKuCuAyGK8UHAGxmhQiBJ6x4phrjg96qkgPQg3WyFu5FuMLkZ8nyJSDCytG5sZavaPGyYfnWpsU8fk",
  "key22": "2eLPiL3pGQ4egWxNZLEnPvPK5J3GmdmSbZf8a8iSeNXKya9iwnp9aQPjYL9piUs7BLw616Z63Y5Aav4SnXSsPXWW",
  "key23": "34C8d7gDfbsL8gAxsj9MMqTAr3szZAfmSfkEn59r9X2EKCjhR2Ah8cY5B5nzTYxskN5KN98KivnSponGiV9f7QfE",
  "key24": "4ekLPJC6mXHLutcZQTsb4WfS38ZyVLFhA736MNr5cQKgicLhmpSfHR77sDDc6mziRpB6EQWPwNovMUjhFv8uDN1y",
  "key25": "2m1xg3yVPhgFWckfWL2VE61JPHa9HBgprG3XdsWfxixpA4X3WJ85tLJq96Kes8qebg6PqfZ99Qfuk3nX9aJBACgY",
  "key26": "NGutVjNoGnmFsUYs8XTQKEChY8aZVqj8ZGU7zunvmVN1cDT8Au3GQD2w3LcX12thBqStWuasWskgRv5cWtgwqeN",
  "key27": "2tjhBSFNNrzqcDibKzQQrzEywpNDqCjKNgN6HaRx46hTRCTmSWphcWzFAnsa9c4fTYt8CvjatWATep83tsvpJh3U",
  "key28": "62Mm4mBktkq9fN6x4fYDom3tny2EeL5xB6ipmz689mZG3e7jzCPUBwV7aQfwM9itcgoiU1HSRSJfGGfJy7dowhXG",
  "key29": "37Cd65pnU7HUF9gZZXaKefJzQG9WyjUXEDZLNSx87yPuQ6YNwwAoUEvxSA8Le5JdSiHoLN3SeJNqHdEZt8v5grVz",
  "key30": "RW82TiU5w16bd55PRCCZuDoyvHhzLWDZ2BYwoZDEG1ijbspBkTcrtXyxQGHg6W79ctJ3EBbcFh2BNC3vbPr45bH",
  "key31": "52fR6A7uAvGyXrPqDUhfjTToxecfjJE5Kg689RYujBoKq1xPV9tnU3x2CYYobsyNxk2LTaKBWWUKCGG2mGHUwvg2",
  "key32": "5CGxTYcy9GinVxdip39DXMuR9dhk9z1p4x9M2Zq2deWFg26mAepBk1ycKG1oZiaX8hC9LFnAZx9GUzm2MFV3Va1x",
  "key33": "cyLRie5QvRmYSM5vKDrh9xKE2JGrULUUBpvXRervajRe4X8GHnXrwRE38h7c7QYv9X3bzyVmsdAEJZyrQYgnSbc",
  "key34": "5ygKoS7mzQKfWHgKcXJ5TtaBV7UUCmHZ29yYyv8CxYCX6hmFFz3JSRkognUoFTnP8hJzv8oSKk6VeZbopKWg7RoU",
  "key35": "46w7Y26XsR9X76wb7twgRxzfUvRNruQBMi2S8UBdbr8dtWLEx6edkYocS1Lv1XLWCosTqV2Fj1jxqQGFgFbomt69",
  "key36": "3Mxs9C6QRz3s8Q4yMRHByXpnezRoh3g9JXUekh5CUyaYYmcRJRmpGtWwo1drrxQvCqjrDwdi6PVgxt6x6PTfs8CN",
  "key37": "5zejNSX9rzjzr9y2jUZHFnbw8BBtGqPnxxa8hedac9LfHfb1woDtTtYWrBBqQ2xGCg42ePpi8vgoLsmYaxH9eyt8",
  "key38": "4PZr7AhXkTNejdtwmgifAWJXVW4zuaJ9zTcrhnxUxRrjWyVkpj3iMwtP4VeM3m6Cn4gpNuU6B2vAHEH3mTt6p2mZ",
  "key39": "3sDs4KEBz7t7NuxoiJMrNKysHNisXhQAqQRyfFuLEKnRSAxkYdfjN7Xhaf15VKPZY59M5mMVNCSu7f8wQ6xsTQDt",
  "key40": "JGATWpwh51HznvqZDZk4JLFygXC7V4he2DFfEWPbPysb1JjND1qN9x8sntyHJ7enqsUBjqtfdds8JBJcH2xLEuR",
  "key41": "2wkBrYki446tFvPH5739VzsVtfhPRNa3nxdD9DFmRQH98taV9N61WuhGJDfHbZy2u98Z6H1stpp8GLQpdRX2wEWD",
  "key42": "2hhPL7cuHgKmYpq6ZvkJbhDiUaNTBnpYGdJFXtwCRc6B6CeBPWz3Rtsbezh1vfC3QD7johgRc8MnPtEigvZ5V99y",
  "key43": "44SvUnn5vdry3uE6csSCXvz1TKNFBc1eCSoGymr3HjuyQnuA9wcox1R1gfXjWWPpnScdUWovWdv37ZfvxhsYSrBa",
  "key44": "JWsBJpkTyn4Mbwqgj64aNcjzT37XJifAZzLrbZXXxdJ2UjHs4q3vrd4tYvKBegG5v6SjaSqWbdsBipg8f9vh6sG",
  "key45": "44xVqBsuaEUgSYYF51yekhRPgReWKdaTT7aezhxZ6JSD2oXdVbnRrGhivBzz8QfZLFkU3WvWsbdyreEHjFHDMwWu",
  "key46": "2T9RiZpLRUC7cf2KcLB1YWhFwTriEpRu6KLnkNirAgFQmzykTC15EXxA7jaD24a5GHgW8EpjozMLSQRe1gipH1Kg"
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
