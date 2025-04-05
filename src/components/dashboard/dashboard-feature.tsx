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
    "38ZR19s6zJCm7F6k6u9aZXurJb8tFDC2JRHD7pxHqqQNGMAThu5bmnRVVr2TF5amkbmimrTDgmzjdDWdUNrevmLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57akwxogVaodbfWkgs3KeHFesrkrUTZxRCwmrcm15S7szfBSkrejkGWkJn2t4ESBfnzhfez6gMTL42592PXE4F4C",
  "key1": "47pAxX3wmWMEU6fwPMdRBGcSbGynkzaeurq6nxmaqzwoe4XawjML2kqTGkDsquKzLvkLKhWJFGZ6AvBcewKXqvFk",
  "key2": "N7GArdCGA24QtqVzKD9Zbg18HkGQJ9JELwcQouMeMTJh6CFziahGZF4J8yiv8fAuUiEnB5k3hR8MTteypoX9HfX",
  "key3": "AqcVeFP4kj2UZQ6VL7w3ZgtN8UkNBjvXQbEgAqwLEHif6kX5pgqujAbTArcaCpsoJRx98GNucUJJt2xvonG6JYq",
  "key4": "28dcaYpef9STshepPfS1rFk9XLKpMRHhcHoyExcYj5J2RrrpSFzD2SdtDfhu6yz6R3fzfBnreWmDfVPQ2r1pwPR1",
  "key5": "599NZWigEdthLpn6RczF7tXewmqLLDncQcSDJXKhaxjxa7cLbx6oqAifZ3HpKr2gwhkSpqHXGtM66Va7SNyRSkpU",
  "key6": "47VqzYq7gmhZiJWx9MQFit9b5nqdg4xkyTpQLzSWA91fM4uctcFw4AywNvzSa2tsakSYCXkWJTcbKgssZkCRonfJ",
  "key7": "5bauK6pdMxMaNMuvDqQK9eiu8XXSWHbn8fZBneuYVk5sDEtq3tY5FgL11UBEf2CuhTBJHAYrPzQmrrbjbiJLiLLx",
  "key8": "2g6Ftj5qVLwFfVSkThBMiAHeSqXL9npn5u66SV4LQa68ZvtpuLyW546eSnXnxyG3mnMn7hGiaqaoi9a1wQyx64cn",
  "key9": "2pLJB3ZKTiEgU3NQGMHVq1Vu8JTuBYKx9Sv4fnzbmr9PYHg2MLadKVPnBX29abHooKRDoZVrgs4uqjWzfzFB4jdW",
  "key10": "46VbqzrDdGTxFSmdmTwyS4M1M1ao3UzeEvgGN2iiM3Y5MHAc9oiVPPMTokLPcEZawe81NtUDbdaJ5yguksG4f6cE",
  "key11": "WVsm9B5KmY21Noo55xRKxUZnQz56NkMYzMaj6K5kJGQRjxqDWfUjTvz8WpqouNaadeKraxtVUWUA2BXXGJVTKRo",
  "key12": "4Gm7yKxuR5BakyA6EMXxUEC7nBEuGEcC1XP4KLkmKZwamw4rSNYuqeUN1bg2xuR1GxzRUUxHvrCvrGxSpjboenSK",
  "key13": "5kn7f3SCuiMbmbLQJ45xCxP53hxtU8EFsXtpVdeQrVcssX5uJEuhoYhuzR23ncVc2GKsXC4jsctnRGabWQJMZHus",
  "key14": "3MnVHQf2h37F5LeGfWfVRVt2TX65vW7BpF8d3U4xwbeooxEmgSLTEC6EbfKo6pxC9djy4T2414dYBqhYQck52f2Z",
  "key15": "25Tij2wV2ciqUAApdk3n1iGBuUFKj8nLdtaoYJ8FUiEDhkd4HvBBnn3ViZtdkmcpfwaoLFHnprTostQmV5ciiJT4",
  "key16": "2J48Np8ziszyEJyzJiuTwZKgAy1LBZjamSHtVmAt2JEzDvj9ZZqTdsejLRZRV2u5m88AS6aZhpeYHvNC1ArtQnH1",
  "key17": "4kNDCPntmy2NeqEh5KgnfeedSx8cgg3ekRdhLSnc82Pfm6tcu86zgo7mPa5NBhP8SJWqWEtAvqjKFbjpGn6CKmDa",
  "key18": "2YFYRcykcqTJJDzjhEgp6uQNqKRTTsGz94kQfub5TR4bteAsu5d6xPtzbCvuRp45uc3mMre55oQRdwGyVy42Y9kN",
  "key19": "2ZXVxpASoT1S9mh7aCJPjez7iJShfFkoDDc6ApwNQgB5h5ZdXPoAwn13W59KJpzVvhrw4wW4EBXZ3R6PkkaYMiK8",
  "key20": "2QXAFrXHqRPjuBuNABtAn8twG5ginydWqQC5if9UVtheXaw7Y45PTLwkMuSG7SUxYb216f1GJ5MMx7x2AiDmFdM1",
  "key21": "4nQvYAyr6gCGwYNiETib2BbGp5TvwwpzMmZgtAGQuhK6Vxuh22WibB6kcg8LrQ7RqYU8yGCnEdnsnxdayBmiqKcs",
  "key22": "4c5D2pNhPP4jpMDWjqLw8jcvxeVBvxpNn9JD5bMvgvHAnEebT7PMTnTbk6kkDzbU3TVcQYd98Xa6j2oDnszxM24b",
  "key23": "5HjzBGFUCUsZxRhK3XGE9xNms6eJ21Rb1CkusQnSds4PvxY4LtYo2ga4hStXUPnQkFUEi4qNR4vQgfKyry69CMGx",
  "key24": "5XB6gjt8Wm8JAK3Hx3sKwwQnEkHSR1pq3bwFYivbkn5f54hNuUrq6e1yWYQ9dMPhHRfmszTEB3i9vTzY3MmBe29",
  "key25": "aLc2JFm8xGS1n3NQDtkdwp7vHp26mfZ6Fp9vcKPbRhdzj8sFLVas9Zgfq4ZZ2gerVhCbfmSVfvhe6bFZhAAnpCL"
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
