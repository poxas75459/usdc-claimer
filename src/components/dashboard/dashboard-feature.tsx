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
    "4q518Jt5UNgw5SRWuQ811UTU3ZydAD8SErpuvAaucKwgqtbA63qWVR8aqwk4Fak65fZ9Fuir3FtCdtwTpKJE8SfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pzCPemV1wChGKL6LNnHvcNYXuYJo53WXCtichmhoN5ES7wfPXst5kiiDCHybKfwUAnKRD6a8737kcNdjpReAuND",
  "key1": "24DCPqtzbFd9aftpEXCGKid8nWYN1SYPBK6edxcDpFXxiDjqdLksrHapveiyQ3BDngjz2vjWBebhvmAZBh9qrsYs",
  "key2": "3KfZTLzn6CaCASy5gVdE1tjUyZ8s3L4RKYf23GcJg3P2GGwnKDuc5riuiLJKjBwpjn5zT23QKbiha8JyH1LJuXtV",
  "key3": "aKqzdK2xVH7cFng2QFPFzhmY8wB5PEvPy315E4WbarUCP5MSX4uygzRBAwVDweAjnd69Py3HG776jjaqe8wiaXt",
  "key4": "59Wk3DePXSQLupeK5Y9YXZEJNJEtuELyRz2oZArj2uTixtjRuYwAHxchfVmAXqeuUqaGm8X4tgkpGMuPYmMuSkb2",
  "key5": "2mPGnadZtwpNbaKC6hPudoPtLUhEwgsNHKs9GKzrQDNSrnhCe1M6oRdEHjHxv4YBuXA5UR3fHyQSguoecrPYmoGq",
  "key6": "5Knpon8fAVz2GT4BhvDLR1gjq52F74Wm7Zz5wH18VeqR4YX7Bad9AbjRsn9a1tgErGgLuotoTDLy5VpyDRpKWo4a",
  "key7": "jaWvDm9awZvpbqSu73kkWnSGUZCrpsAqMKU3umWRZcEJPCYpWbyCsAM3NrSamR7RSPyU5PyXrBBdhX43VW8dunc",
  "key8": "AxeQi5CcbxDhmWFMgPsWAqG6i4B35jYoMrzSe3XeLDfUZ9Zx5tg18WpwHpkdf4jesRnodhMXqB9hPqGM3uVyBP2",
  "key9": "5HR58jV2fXBjmgVQLsc4svP6WxDetspt3RqbuzdUvi7XdbfnbsoRcQUgwnyhuREcitHSZjRbE9WjcHJ6BP982dWL",
  "key10": "5h6KNuG1P1kSzRshdbTRRtQ6TosatAXpciyEWsMard1xNzWbrgZF457opVjEb1Y8QtFjcRB2UGGG1ySvfFbqpNM4",
  "key11": "4Lqmxn51EAQH8n7WcgSKBrhNv2x4WXjYX1U5KosfWqoPisQkT1kN7BzgVAxagPefgpNqWDoi4TuuzCXSiZ3xiD4M",
  "key12": "3KXwiSaqn3VSxBXv96eqPkBcoSWEqSjAvCwQU2GHnxstYHzMBS21WQnMiWbfq6WLDJ9gXNjSe1JpTq9HsP5EsW6a",
  "key13": "4juAUMuBzuTBFYGkAeBmLirYDQ7F9YKR2WVZ8hekFPJ4XmGeWVMMRxEJh7LUDXMk78h9AWdALrz1pQrbTuJE8gYq",
  "key14": "3AdMzu6hVz4XwFf3kH7WPaskhNnKyyfnhuV4c1PK5a9YJPFDp6TtA5p19ePnqfztYrAD8gQqhL5CmbQnL3hPj2hM",
  "key15": "2YLFdVLkxJ6fvSPejRWRw5tPX8zdqjTR6e6Jjv6aohkt4J6j7Df4SVjsJWnBJtHaJZRvgyJJyjdYcuHyyG3zen4T",
  "key16": "3ai65vdU83VMBDowS4uvfHtYo4Xb9j7guSKJtWuPva5hne84ZyuCwydML7WZcZx889vHT7vZC7SQ4WtUuhA1WGo3",
  "key17": "47uZPgaDotYqYcWk5zr8i5FDgLsps88CiRgFyt4ugR4tNuzkSJGyDiVb2YMruwz7pmTFAu9QBc9FyqQdQsxcMfN2",
  "key18": "4Tjeyz8DpvgxB5g86qnUGxX2kEEQR1odfbMxwSBcEo2L15RRSCGMBBNGxbPF4hPwNzvrLB7c4VTDd3iY9scZnde8",
  "key19": "56RMVPgJkbhcAwbfFiKcBcUqqBjd2PTsyePvgLrpGo1sKM7pWjDipNDmzCdXqGVXutFn5r2xEZMMGxfX62RQGnhb",
  "key20": "2MT9ytdHv1AHGrLudroWa8oGe8cYGP3mDMct6QiFk1ZwNMqYQrNnpPBPiucu1Fa9bkvjzKpz9YgBsu2ByEDT4mR6",
  "key21": "29VvZqbpcdfTUJgFy6fdNf9b9mGFZyTnd9guNqo1oZmLGpTNC4RyjyorMVHS1poKD7ouibNnjVgSdTdD7HPSyWCQ",
  "key22": "3wF3oPmK3CzZcc19cbmWabQJ4HNcDrxzehbKCmtBdAUwL9s8f621SivXeecrsWg83LTsBhWZn1S4vW4kuQ6FaFC",
  "key23": "FWU76o1tVfsYu3hNBbfUBchdz5aywMgUCh6txB3WVRB7FTBhEvpweFiYzMzJVEbDBwUVDNrDUiNYraJPobDrxhx",
  "key24": "3Jqbs6yA8XtZDJbaAty1iTh17v3bN3apBXgs4jnGR469RcbjLAaixyW7ixg692WUVCZKBsYzFMUwDVYSNv1biFSR",
  "key25": "624MxfP8wqpqwB3tJhYwYznfs6tnwMwQPpAnCTnefmzNtUJvJW6aHAiJEiADi6vTNHTrYC7zixwBbfKtxD5Y2HUG",
  "key26": "4H3oF47Vr2x2WZMpqw7d9AifUFpb8snYtwFUCxFxuNzyTgqJynpmGJ6Kpx54csZ1TPePa28QhdhPhwogskQzyibg",
  "key27": "3fyRGVvnfQBg6ChHEzgXtEDKWjV7ztJfUvFsW4aHcv8g7N6BhXzBfyouKZ2BHPfDqMBB9R8VX7tYyGXJ9uwxRiBw",
  "key28": "3PYQk9YsJhsxuQfgvYnQrHtJRqtxkiuMH76zZMwjm4NFDCRzoCTnMwHhuE86iZDSht1Ejjw3o7XYQDKHDT8QL8U8",
  "key29": "5CuhG53gKNQtetUPddZtQgSaXzSuLkdQ3p7TvwjY8Z7ZpZ2kfJpSjZW2rgA8Q457wZCT5EgMCWRygiJGWvsC6npe",
  "key30": "3hiMB7KLrWrc85YftsiNfr2gGf4EEsoaT8XX1TJEQ21jMLkyPmLXpBBGhvU7ZpCetup52ffp8F52u8geWrYBn15W",
  "key31": "3kicfVfmr1f2WKtxcHp7ryxYyuP4318mvnjorvQ4XxodaWHRRhExwSSc91FvXpPDEtzsiosaDKxkrbyrUBjmLerx"
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
