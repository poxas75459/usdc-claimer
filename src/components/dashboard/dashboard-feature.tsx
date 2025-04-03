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
    "3vBNY1pUmnu2e5DPFbz9o1cnRhfPGh8ok4niH1nyEv5fVteddTAN3aFLKj5jb7XLTWLLDS4FfUsojSZeoJqUD38F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tT8GaomwgwP5mBVHogUYPhPut42P67qDJUNBspzR5XaipGyXx2EiE2pSjdDAWisbDsEwpa9X3N66dNBAjd9ZHR9",
  "key1": "5zRtA6nfxcgqLRDJ7arV2N9LWptxDELUBJKQ6DasbrUgUu6sgfGKZvttm31msfkYXqRxu8knqD62pbXHJJzsdtpq",
  "key2": "63aFCathW43vJwDkR21FU8MTz2YQ7DtLkaJ7F3eJsC3Ha1QcKaGFet6PiSA3acNt9dYaTGSfUvgKMJzFZiiJahf8",
  "key3": "2QxbGnMeAnzNtGZMK6ViZVPE69xJxA3VsYPJbsHb4a7QfEhFHLgqWMurexCdnXu68z37ESEiqkQEvn4pt8ftwZCF",
  "key4": "3SNTHC29J2F2CqUboatRKY8Zs8Xfn2L7PFe8TaVCQYxHxadq7zm6WPvJVLKz5EiywZq4y2wc5zu55JzCK2pqyD93",
  "key5": "AzTPpFrXgw3idcZa5bnY81jKxJthypkp6ddUTmvCjLD6CgxP7Nq8pZsLjiXN2ZvvwN7VtwKruBpkMgrG3uS6Xex",
  "key6": "2wj4A9GyxVBiPQowHs9hyQNvCjCNYBQUgB7DyTJWGzTGcWDvAL8WzG8N2hp8qLHwyE6Cp3GaKhDgGBb4uwS4gj5R",
  "key7": "623qcTuQVUGpDNhghYmvtqRSf9Ha95yxfuZQNwRRWhokaUWB4vR9YJBUmtG9wxtrCQLQeYBm5q7WyfGZWUM5kE1c",
  "key8": "44JGQwS5E6Zrte8do8SCmHCoyStZsKZMU4w3UZebfn2j8RxH3FHRPLffPRucpNQSjUrL6ZxRZio8bteDJTMvsq7p",
  "key9": "QDuCuMXP6nF8LHuCfeybUAnWZQeD9hY52ZpvdU1i6sNWaSYxM4wJ7NzQzijXLzQMMKqRQ96RA91TC7ZaXecXcwg",
  "key10": "3HvUhHec5NVuQSJjV3ULpfYNtW6hYSDwjkffEJ4YTmDfeUgPdedkCxRCTrJqkMV59BdhjYqKq4Ta1143F8dFTzK1",
  "key11": "3iSjTmHAVFivzTVpVf3NfDNy8wGmLbam3XKrpNvwqV1sgm9jUGRLS9VAKWryN1GekRfqoufsBFZCD15bu5hALRHD",
  "key12": "5xu2qNZKyjK4PX7rubbPnyKA74mwhY5vGCXPGAZKhVCFMY4Y89nUsXn9ZoTTkgQH9dJZYVD1MnjuLoKZEEa6Y4QK",
  "key13": "4b87UmRKZxu9GX4KwUJSYB1Gw8rvfbEEi4tgAaZKJmVKkgP9dBeb5C2i4Z5mJLecCSPQpMymBZ1zzM9ReJQPjo9A",
  "key14": "4jfUkwphgnW1eJnPWcjMsRiyLYpf2Bj6VFGiFhFZXJrn6EqXk25yJoKZFzCowYo8SZZfDU1Tng2JtoTc4NCeugLV",
  "key15": "NsNKrHd6FE3rGoKjUwFHCtB5iHZZNKTqoUPJht6KADL5aA1ndZqYH8WFDrSRBgTWGJRRXoNKpkRWqwdCw2fdj1a",
  "key16": "5GK8pG5hZfyKk8KGhaNAS91pAe7wZpkHaX2wWtsSugzL337gkMKQ8vGaG1psxzhKMt2dpcAvMcuNXktr4p32KTn",
  "key17": "28uc1oF5B3v9FGdH5B9YXxP23nGXoH5Ej8xhGZGvLbA56Q5b7CPbU69c9mrfijjPFXb4G4qGb5PCDn9rVY5GwqKp",
  "key18": "3ojtJGvFbEJcDDTiGKTdt4TqFboozoARY2VHLF63vTQB4a6LAdCLC3vz9WGCyw9r5jPZnxpHLKwkmn1dKkccbrqM",
  "key19": "o481ouStQEJQpkcgcbfxMAK4NdrVWaQdRsd9nTncf8FapfTGbE4eQee7MGJErvGNqA4pDJB49Z9KeG1yQhqxuz5",
  "key20": "49h9trCE6eJMaQt2FiJpJ9cFodLcKc8udWvtNKzaTMh7oYTfwHYb25hgQJyCjkLUdqqJLofMxbw7HjiqeLXzPXct",
  "key21": "2wSWFMdkBcSXDAXiCRZvGxk2tf61j8bAsosivwcD7L4prFXNr7hKiCzcP3LS7unsHhaHCYeAjz43eZvHpyDbLe15",
  "key22": "3NgcmxoURJC5BvT1WxmGq4RPjxtreCph19gawchhYDsfJi6R6gW8uFNDW7AzASLid8UZLjFZHtkEXkPChman3LoJ",
  "key23": "TXhYbLKHz43bGM2Dgwz1UjXWzhxcwdAQiYXvgihtxTWAh68t9DgMJe9LTvyzCFChQXMgFxWYkQ5dmDv8aetmYc6",
  "key24": "G1UQdYehMDEmLvyhgzwzotiGrvwmhzTvBimsgecYTku9tcxuGYFTLPucJnD8D43dRvGb79c9HYPRgmVx2sKYgWc",
  "key25": "2eNfcYd6r869sFmjfd8YXAe3x6hUdCBXQmfX9Jk1BL8AT78Yza46FMMhWZVcb8ipfp9AgodR5F27r7UnJXUh9nss",
  "key26": "bXueJ2G5UE1Pn8Sec2ozJNZAijpoJNoMgPojhEbhPhE7U2iW69yasVJeUNW9mpWneneczLdApUabnKKVNzuAnwp",
  "key27": "5Wz3XfXAHxzTeN1LuybG3gQFXHoGAanLXmWmq3naoy3sCfNv3XniyDt3zJrxwvfgPPfL6euueY5WtnevhmhWDfK9",
  "key28": "3obespX6b6Mx63tksTE8FrCGntvxyVb4LEckVskvqF256B4ZepcZGoTGHnAoupeYbRXroSLbeY1sA6idmAq29HeS",
  "key29": "4YrNYTsbiEJhfo2k1ZKiBmNyr4Czyvpqz3LzH7JwuriVWDaHpLnTHkHygdWzCGoZtkKbZd3PT1m8DdpgzMF9JPwG",
  "key30": "5WCo5QSN18uDmYbhJcWtrqHDpZWuFeTf7jspDwWegh5oSsLuuh4gAo2uG6C917dnMZqEY42QCegLZDv4WPiD8f38",
  "key31": "43pxuvWpNC1T1ByYMgJwpquXvmQUd1HibWBk6ZXFgGL2z5kvFsgfaqttAQo3pktozWFJ4FJsdR9H2ZdD6NA5MKRT",
  "key32": "2xJcXUF3XYFxNkCL87KQc8iqvYKHHdXhFKM2hzThghRXRKK4VvGtPbNJBrjZ6EqKk5abvUo1ssSf42p6ACDg4oPD",
  "key33": "4gBVVGbdZUHV3yLQNXSvUn2KDaNqgZYVAfuSkhozB2z8wHNd5YLDUibvPZ5qvXBTaU3S9HNhYw9hfSiqAph9EDxg",
  "key34": "4oAzsVUVd2DyDkGv4gGepUEEgiwSaTaGRqKHRQdSX89cYV9hLmuAy7naDowXMvnULMhVdKQu6zfw6AuyPRfoCUpb",
  "key35": "7WVawNx4YeQ5XkJMikYdYQu5CAWFkY5TZZMXyejpGeaKkEyTGEe8sN17EZzdnrzmkAkAMCsgYn6J1drj6sjZDci",
  "key36": "AszFDxgHDgx44P7gpnGiGQ6MZ8ciwVE146JRknbScrYcTPwWKmCkLHsWUvWbRqj7XcPc9cg9N4czF5pspjcmwsv",
  "key37": "3Nh2JVSv6BBmoeyw4DQkYNwzoDH7ePetoSHEUN3jFH5yPmqRGDxE2WTVowdWNQRhqf7s3FJUW8hS3iY4iiN2iv7r",
  "key38": "2UKCduTL3FGU1fGXkt4TbyRHPVoR8jxrNSjZRhKXuCF9rBYwjffv49yYvww3q48yphZcUFRb8873HQg1undxPLNG",
  "key39": "5JBEhbwEYkxgacSGfyGtfrPRzDj9AT4Cpqu3sFHyCoBYgzmmNJKC4YiRQda86fpXyRBPXbvedw7Vnyqkz8AoTNaY",
  "key40": "4QwXn9nQbGbDnvfBkCGpMEMWUVxyrRc5CTtZkd1HdTFhCmvviGVPJa9iH5uRZTHyVecSdvuc6ygyCSrvc16jNNcw",
  "key41": "4fSVkZmV4MELiZ2j1RoxBh364QJA24f4bSdC86npHDUq581rhJeZoktGZDhXLXxZYMEPtzQ4ExRgDryhpnzGt8wc",
  "key42": "5AXJYxwgWmheWdmws4E3fnjZATNWPg4kbMipegm25kXfG4Ajg28Kcx5arMd3AJVcuvwPGwMj2W6roKctaH8UUbvV",
  "key43": "2SnH24zbph3CUCdEi8nCvfRtFeb95HSsYauqhkVcxQ7rZyL6g4Y4nhDSo4vU5GyXRz1uWxzNMWyuZm88wDwZEhXS",
  "key44": "4EfHKt8uRzHEdS56DxbmEZQmKpwQqGnvLWpv85JJnCwsFbYMCFjqLjBPZjCeN7s6frc6dqLqurq2UUgNnMf2ccQE",
  "key45": "5EKNprXQWBKZby659yn8yCB2B75WQkpjfQQLaN6R57naujUsrCtUH9icf6CJbAmT36ahjk72A73TW2T5zNoXPRpz",
  "key46": "5JZxAEJE1HwNCn3KXaAxVBcEv1rsxVJpnwkP2sRKgZUoQHwtMYUPtB5FGbciF1bSFxYh9oTjsnEoJQMqrxzYdQp9",
  "key47": "2XbNeFtxuBWFDYqTayTFjBw1KXDUwRjGDf89N8ymTRwK1LvL4cq8q66UdXB17LxHzc7hTcfVgP6GumK4PXvBxSMj"
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
