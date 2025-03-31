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
    "26Q7juksZkZQ61yt3SuH3bURpWqWUzSkpFoevtbAT5TG4RXRNzC9mMfiUXiR1YTToytUnJGhY64EagGNpafZKWDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mw8Ln3X4gz96zsjVUhK7dhXpiVdBguHDdFew1kRqUxwUTCmB7oxsKGruMtuhb8FBGXi7pRAzC5tCbQeVxgZJbT",
  "key1": "2tZiPvQvTABhozhcKGnv79ACBxp1CHZMkyqt6oN5bommtPFib5MMBCe36vaUq8oyBxTT68jCPUJDXStkqNcHDFLL",
  "key2": "4uK8MTx3xnEFv6qfYBqyp9k7ef9YiZoG7eiu9Ao9CZojBaFn6iECm5vpZgbDwiabvqJsqfcgVCpuSFNdPv4V6imy",
  "key3": "5EjDAmeG1Wrb7JtsHsDYuDNxDryUonHXzxxFEvGzimA7mCvMJgiK7AhCqRBid3sPPwEDRjMBocH1PTp63ySyo84n",
  "key4": "2Pz23FgCTE8LCyHpyhGoVCD94qNNHMkno8tPJTKDPfWMhofbo8f8nFE22NXhVRiMrwW5rhdVxXbj9BCPKyJLsggT",
  "key5": "3Y3tPeCerjZjVuyarA7Hr9FdUjESU4ViEtCX8PER3i9vrYCK9dAzvnGrRq7V44dgr2UFSgwcyZAvSYVHSFHHAPLd",
  "key6": "5cGvgDtVzvfDbP1Nens2m3L9Cqy61jDaMQzZ1XV4GXb5B6LUU8NPD3NUFNFGYw5pMhUsUdsgNeSQxuDC5AueDZAe",
  "key7": "4V5Ufd8jJ1gJc91UWat9JXA2H4ZE47Y1HrQhL5mjc8XPtsBHZGJLfzQBvPDvN1wRnwHhdGSwChTWTAqmAr2KnGMh",
  "key8": "MkfYRWcrmF7Px9Cvj9aGQo4z5eBBgT22wWcc4usoAYW7uqAkAB2LwbdSabMG846jHsBxRVDNoYq1QtbSTSX9eeT",
  "key9": "B2tnhp53CoK2Z2BWUGA4vjUJgvwbeoTqGG4nYTXm9A5QMm2MJc5XCZfyVwjzxhrdVFvb2XjQjhTJUWJ9kEUMgGc",
  "key10": "4mk7nrXLE24EaWAFYnvSUkWF9vCVyrtsnZ1uihFE7WckNHqCaoauvmZmAF8QBci2tkxQyCRgfMJgJy28b5NexjpG",
  "key11": "LtHSgj4KwMfwTR7uQsbBezUcWhFU7Que2NmXau6C5NZMGpB4SejNrG3U29xRCR5cJhjwwEvz4KCbq7ttZca5YMi",
  "key12": "76UrcLCtATPCDCNFPSNC93ZGvXNMQDMwmpg1qYcncyW138XS6ZFRaL4gQ9Rxjc5ySUkSg9iis5z2SAFfea1wTjm",
  "key13": "2zj1XCgKBDugh1vfmGGE6aoSbfjqfFnWiCVsiH5ZY2xLiFXTEcFRgzpSjhesUGCsUBVGEcdNybpQ9UeV3n9iF3Rd",
  "key14": "2aDRUTdwpxfxChkw8ovDu1QxGkJd7HYBvwSUFbtJtCeUtifCGfggrfRnAGBUA44SG8N9jh7RwmhM82iZ1Ui5cg6p",
  "key15": "23Fy3V9QSQ4bGpSpa4e19DDKcJ761SFaYVBrV5PpniihRyvuCpFv1L33VHdRGuQ9Xbx9PA2SDAnvbeNfjyua63dK",
  "key16": "21LkyexyvJDLBxerxydrCAXtxGUGTQYPRKLL4SPvNusueNcinWYaruAFaFYV6ZdpsqGhLZoirj4SjTmVBQrfBJc1",
  "key17": "2GXVSbpiXssL5Nn9aBr6fNw2LzTdYhrYoqMHG4dXhBMc9F8kF2aUihjfaxNw1reFSuBSMzhtncqJux8F3WG9wPce",
  "key18": "4voHHjAMn6SBAJpkFYYCt6aafqz78jumc5eDynSLV8fPeA5RdLfzFHMX7qCjJtiZrVpcZyJRRY4cTZJKeEs12vS6",
  "key19": "3GdKS6qh3Z1ATqy4BKbQWVWYWx51pRkN8y5fZ5NzMB8JiugLAV3TL7Lc5p3V4a8MnzQY4iq2qi16sBV1RbzLZUsW",
  "key20": "3Ftz353PbQeSF8zJFWBPc4gg43xgdqnhP6bm4fEscFzj2Ct4R7uKEScyx2NDy7JaXU8Zu2AWSEp5WQHwquxtKtmV",
  "key21": "3EWiWs7NGzFsYo3sPgn48Vmoy4cBwWP8XJGQMH9txPq7NVroHXZwz6tdN2XkkcMHum5mNaDgrWyP7rzb2fSAVZkc",
  "key22": "3D4jJJVqY1oFFN5zRnpZNWg1yo5A9Jj4FHAWbxff7CkNEDF8gcU7VxRZzGbYyJYw2enYBq6yVwTYkC4MKPoNfD21",
  "key23": "3neUPoVWAwGXWHQd8DAEdgXQ9NTXDvCFGyLHn96kqxqjVWU9mdRVEFrrQ6Vu9CkoYh2vGBWCxJqZ8iAZgJyTkQU2",
  "key24": "54XJNogtY4Ntn7Dx7yiKPCoiCK6DNM3HrodERRDeV6SMUesqpPpHVoPKk5mXdVTW5NazqTerMVU2WxsKHXE1vsjJ",
  "key25": "J81csd1tqtTfFCnWKZUCWb7sKubf3zYGvATPNww8wVzt5omYGQPaukTQQM9QK5e2UfUc1VAtmfncxuaysKcJUBn",
  "key26": "4saWWtBMTsLp6x1Pa8MyfEmM9gu5Uux8BnpxS3tG8Kg2mpX6H7u3z5RT1XJJmBTKJXETceW1RxbWusgUk8LZizg",
  "key27": "3Q5P7DPYf8ZndEEFf9H26kQUTwV9d6bAw6pS35rEBm1t36ooF72neBMaPLcp667qAPtkatj4uFWs6dhVENqw72m6",
  "key28": "3h1XnrQbuKn2rBDNMt55bUMGJ4jd9pFtuApoWvFKWXVjc8JTXM3vEAETsZorg6ts5BcrcpskvvQttsuvo4mPHEGM",
  "key29": "5qzxCb9idUrhFCbTwUnd7M9cEi9voCp6AJ3iLnRKiaYFZfQ2pmGwjV1rUk9ecinB1HpXabmcuW3gjMpMBmqzqCjK",
  "key30": "4RNh9Jsdrne1EtFQ4jeKd4Ymy7GZBMMp5UqaitC6ojccGnutPbd7xUVWu1qzzRdM7dAYkZLWMNBte3mmSau3hr8A",
  "key31": "56YPgBsDuTKkohVkTUdDtpvS46sTTvnjHS19sV2WePaCPeEDLpWaSzZnMYUdJvB7msSqBtThmePv4r2zeTzEYEUX",
  "key32": "FGbrcAbR7Bgw1cvYktxYRyQ7rEvDpCGHSwQGb1PoHJ9x7JrcWq1bhhd5rZGP1S3ER1aszHDZJbAjuwh2AAWZnEe"
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
