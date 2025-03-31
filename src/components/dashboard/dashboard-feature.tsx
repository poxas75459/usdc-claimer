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
    "Hssyjig6t3GKPJ1Mv73M6f6aBe6sitNAfx1Gq9Vya8mvQpvKbvvEzvbrFpqPQntpgQS56M99z14RawEKdaq2u7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P89dkR4nsuRaSXUtFEmNuejwQiKQRBLseBHAwrL6rYKLb9qCd6owLin8PcTyAehAw8dTd7d3pZ4TSVPq42ow5dK",
  "key1": "44FF4gRvELygS9RFWF9udBKtumWaCWihcHLWj95U8xfmigvBD5zX8j8m4ecd1QF3EQnavqUf5whmyqkyAxXCoDpH",
  "key2": "44W2vtRTzJMkXvcJN2LjJSuS7i45PJwpUwryWSY435HhBx24RacK8dmpFg9fQ72T2TKx1E9AaUGutiphH6HfgYwP",
  "key3": "3ZrFjSz45K7dydB5L8M8TKL2uRdX9JNSCUuazR4MxiBrs5eT7pGP999YYm7S75XuRC3UAGkZxarxR3agEf3KTtx6",
  "key4": "2mHv1xSbqqge18ii65mkGz7x8A2KGa8YNWTMHrRSmJzGTYMAqNSA8BqpmcuAx89K4dWZveuHnU9e3tRpgrXVjnae",
  "key5": "2m3gGuxAnbw1UBQTm7Dq5J3Lbhhu7dvuGSuoknBp5mptPxP63TqCz5i8L1LUk8Hw3kJKUHwyibCzzf5jc4ZnmNhB",
  "key6": "2mECjRqETJ9aAQhmJxZxARw5WRt3yYtf3ds2LvmL36t5hTMTdkmhA9Ur2EogonfAmbviQ79ugAgDfD2i9hJdzQyJ",
  "key7": "2SRpdYkVtr2vzSftaUhEQQAzywvXjq6mTqZErQ28e2dGALBDASBtxKZymArjHVnfas4wq7NetLsVEo8P36EnzhKH",
  "key8": "4cWVqnv643xr2Z7y4PEEgn9aGcqxGVtRW53KQHWoc8K5LASuSWipDeLYX2DbzTL3UxfDQWDfTkuULSMQRJRHbifP",
  "key9": "3ywNUJZZZk1pZ8BptGpPFRXZFQGhq6ekh7tcGmoxDb8Y2BuoQoYbcxcBFAWstkteahZFMrZxEtFr8wdaqUe8xnjB",
  "key10": "2RXxbfAnHsGLL3sEnHr4BMX4Rxn74Hr69MsxxEfzNTjn5EhK36w2isDWJHhLot8KfmHnz2yBBhQkbwhGe1zbJFzX",
  "key11": "27Bi6q1aWNXm9c6EHuDeNmDXDy8W86rMp7bNNE7AugXvaqtG3U6iE3yctm4ZuM23VMKRCqDvaDYZqTcrbQnvUM2k",
  "key12": "3svK1eNM8WFNpvF6RFc9JKjK8tG4d4tJWRazjmDDrq899ioeYNrTqhYVKVspgFfnzESqcHWJHGzcRGGwqV1d5aU",
  "key13": "3ahAiXkvF6WKKZwCxVaffvPfcJSxt9332yCmQGZyhAYzqjhreEFxrajLSmamPDU5GqksaXb5a8GYZxEUqvZXXaff",
  "key14": "4gXxgyX1M5KLjnN2z35taAhCV1v37XB4jQJsMD77WM9byxgME2wE8WBfu1UnmU8qXH7uPwPfGRgS46ivDrHyXxcc",
  "key15": "LBgLDp6gpz9P48Gc1ctaM8EpgAoiBZGDMWZKpY6MJWD5jRVYyD7My79KCBGUfwKYKxkZH2ftLqs9HSiq5iSkzpi",
  "key16": "4CnzLsURBdKHx4c9L8zHGbHhoqJ4tgYmPh5AcHhVEexf87vmCmCfzF5SFv36ZwuTWCq3twXsrpmcPWk97tWjHrcy",
  "key17": "3EZJQ7zuetZ6Ya2S4HgF3rhtA8bXHUTcKiza6A9v6f81VGnViFtGwc1dADmfzZGoo5nLkQoaoC2JAawsiumtoN8B",
  "key18": "35Lzz9YH2gFZCAEv63YPTDp3EMDzxYgjKAjjBDpF83wZdYgR3m5MCCXb6UhbcM28PZ91APDrJ18oCRgWN1aaBUSt",
  "key19": "2paC9aN6UYo6NFcR2n6yWtptWozi8abnLXhuiQ4vYebRaE1eLQout3hGesnfC2XGJZLtD8kAwGRxNkHzpajfg9Ey",
  "key20": "2WJYSD1ELDuhBkeQmpXYf2Kx3jK72Uer6ohxm29WjbkVBQCYxWPrdshZsuJUfUvn4DvJWAngcp5G1GFQuLtQvx8q",
  "key21": "4y27x3FENABogPBvcXeRkKPthXDy3K4FqRQBrrhnZycfLagQUUzLXV7oWHzDQBHGE7FAxtfTccRQVL1GYzasRZWa",
  "key22": "4NZyKt2Msc3UZdUZhH4BFzR3jrVcMy4yvqrcChQQJe4ghAXvDhoPnyAZYUgqcSnBkd5K3oRxSepbJZ2Euzaob8LE",
  "key23": "4KRN2YtmC41YKevEtcyAUTDn68t6qMrMTAPWVykTd2MZQs3VQzSYVq3v2Eod3RYzLpckTuCnWCfr3GXo7VbfoHtv",
  "key24": "xheZ1buEo2raM1wUBpCRzD55DZqYzwQCdQv8yY1c7xQrVwQnYbz1g2G4K7EWMW4r5dngWo5ZNhFm8JRCottfo1V",
  "key25": "2GnKjdnDBrTenpBAHtxAgghzSqNFeBgyKBsSzc37CZmRh4M8D5Wn78aBT14gVD3tEL2SHuTe4UNFxmVvNs4bJvrS",
  "key26": "2WGZkMP94Cwa8XdpVGvVUhQoS1FctRFh2P9yWmYMajLHVTpD3jX3TJfjC97CYyxiR5GnZyZxeHatgexZP8D1GinU",
  "key27": "2g87i7LWGyUvhbUHst1YAoXqgemFB9UqKEzSA1umYt1UaVETTeBdJD1HswepB3Ww852nLWLtvHUYu9Mni1G8hgy5",
  "key28": "oMVqPAZgBDYH4nGQqx6XoRPuWk7RUaDJ13AFL9k15wqBFTgX8qMWKPGF2vrhUFkzvwkMyQMmaMa7kajh5B2MkYt",
  "key29": "48u36EJUx8AWVQ3FWryqPA6ob4FGNKdtcDAko7XQpMLWj2Lfa4pPbGG1xMHBPHt7dj2T1skaEZxCwMhfDfd7x2GQ",
  "key30": "2enea51wYkqk8do5SKfjtHm2iqomCPAvfKpXRLjoMPoi75JyS8LrmeHAcrkgrSewxtWfRaftiiTVbgZ3xHiFptJv",
  "key31": "3aDhEYEUsv9rj5Rf17dLu19RePqDTejTMDbqG9JUxY8Y3TKbsUdde2nKqrd3JwT7VZ68CeT8M4nHGxrFBbB4JAsx",
  "key32": "4tsoqT5LfdutWqM2UsxPvv8G4ULXYGo9vfxiW6yc3GqrCKfZx8mx9SEqnYzuPQFsGHCwMekQbuX4JUHUAFPKVkcj",
  "key33": "55ft2R74VxKdVEAoU6Bz3rfkv6URT3xzLxfkaMc6TvPYpHKVqjG3TzWqvYRiAFtELPR4M9DcZn6UEWAVLKKysMCn",
  "key34": "4awZKbLZwkz2RmCnQ4USvNEVnZx3w978UxinVwUcgd8HnS3W4B4sGKYaRZrcP76HYYJDrnMiu5STm5EgFPbQDhCH",
  "key35": "31HhCoBTta8devAzwLHkmuJSS3ogdThEoVWvV86Crpp2hCK52tsGJ5aPdU9YRrXko1LKwmQoLxHDeeaHtAKwfgoX",
  "key36": "5RuJ2t7vb8ifNtmHzuxy7ufZ6qUC3SU8X61Q8AjEBnJZofei9jVQSP9zQ19ExPBPvK9c1c2fNWzpBuYU5co75UXE",
  "key37": "3Hk2eLmZB5TW2eLSHcCLsnJgobDMJvu6pose5DBYPoEH4AJkZ1tnsqFVDSwyfWQhG3QK4ywjqAd2XewMaH7eFS8W",
  "key38": "MeAHVJ5HTkptXm3KrvgGam1bPSL5jY9e28ZDoZa55t3CFw67tiheAcJJS42qWTWuGDeRe1gLye8MDhNWS1xkRby",
  "key39": "3KTNdiZn3ULt2VwpJGUdM9vytK1yoAGgkt7FEkpqhEofbmHUBKtTnt75tkdWK3tiUxjxaWMmMC33H1wnYSrotvbL",
  "key40": "3eukhgzzgHb86VuT25fwrnZMAVk7wLczyJ3Th4NwkS22yo2uTSibEjxeaqTyqNNYA9yN5LoFfdu5SjrqMm3W3EUa",
  "key41": "5iX5aSPgwzcR7kD3JeSF87P83dgjJ5K6Fw8igw4UadCrUJLAesurFkipq7kUnZtxWRNcNGSKQ7ra1HKu9ShXwKo4",
  "key42": "4r3GQxCmUcBXEtq9wgWasJQVT7Et4hp9raTDmMYLGEhdXnogw8WNUcFUtXbiHhCsoWwmMD5gCaptzEZceuZKnkn4",
  "key43": "2XaUb3aiawnjQRqpCSkir9c5z1oL4rCEqyXjGx9zy7s8rWA6iKRnWzRB7KGcDMYtpSWMPLEHraNzLByXUXtQA4H5",
  "key44": "3mW6fub9ATbPJkTG6BqvZbXVUUkALYzatzy1CGpapFBtQPhNnBubVyhruu2xqsowz5rp31npttMVYPVLssnBSuhE",
  "key45": "4KsyHwrzG9aWhS2j2uN2bLPwNF1yETWrQzxyFHwiHbynqDn8vag9m7paQxM5efqguSN7ybtDTCaw1RTefeTjvuGT",
  "key46": "4RQT6fxw21Ls5RuCrXUfULLuqsMGfhNFC8dUViAm89zFbQzVNSaTMNLFgUbvwtbvM4di8QiRDMA5RP5Q4axJRiZk"
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
