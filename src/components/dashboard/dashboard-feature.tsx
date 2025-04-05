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
    "3vyFN5x39qYCngRqwcXjoRTQuVDvuooCqTjn3EVTf38cYxkuhjNz4Wi8sN6Z2wCNagZGppnVad2CnYLXv7ySMNqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XyXbar51b2UKdcij5mVhW9qzNLdVrWpUQE6DrmnLLFSA5iPFKhQfgzEHcTN2eexgwvMuVBz9M4jDQQax4tL9tkE",
  "key1": "3yreq2mNvbRsq8khyowztKbdeaYNXTSrSPZvkQWbECifKeWzYzBkNCshvMckNZTgDvqJER92HgzFur1qgegMvEPx",
  "key2": "2FusjAhozUvkNCa1FgCp9rUVfC8Bw9zcZ9NdsvcUoq6Fd8xsSMAm71ZZKyYU1N8pfD4iAbqyrCT98fSQDQ2qtiC8",
  "key3": "2smiMz81bvnqcx3TTiQQw9Tzr7DoQmpLia8p7jgHkGbwsqeN1bwX4xzBUTLkKc9NAxH8TNkBco3fsLjtpQ2kkf8Q",
  "key4": "5NVL7hXCYaoWtmjCFJSa1eAksHia5EMVqvWQm23yRLWeem5YC7ZNz2jch9EShaJTDvdbTz9aXcaLMNvWFnUc1JEC",
  "key5": "5wz64AgqM5xTwhNiAFcR1LTZxraJVo3CGTKc31qkyX9hsVkxDGCqEAQCtdA783vdvd7W6ZgS3avTfL9Kjnsw7JZf",
  "key6": "4PBfkNByWiYLbhuXXhZKmGRhBgKhbhVqodQ8tzVBgC3SxtmD86NuPhdFxyLLk8kJnvoeZSiC5ykBqj46rwAbwq96",
  "key7": "2q8HXiKLD7kKU6s8XM8pst1MAYpcdpbBV5miySrAndcSWTrkPb89bukwoKttnPrqrsQ6GK3xQqKQTFcF213313Fk",
  "key8": "5yNm977enDEso7izVKvza8UbXGQUJMVaZBwV4omPedZLwN6ZBPkupFUa1TLrgPmfYcibWnF71NVT3QPN5R2i6rAq",
  "key9": "3LpRFFR7b46xU7Z9MjY587Pk1MWBTSLbSPtuAAeZ9daSm3niFGsZLPtrMmRwawKHbhFYb243PADmqKTpaZnZbWzo",
  "key10": "2ya8JcDh1iKsvbUGazqoqNUPpManULnRwiQeP8eE3HNhg88uLhVrR5DTEDog8UMtxqXMgy4JVQJzrTWQtKsdWzbT",
  "key11": "33R3B3ww96oVMvwCBfekaVk5pVW1zGfagJjU1Ceiup7naTTcmPSdVrHYBBuBukVyU2xGEo7bkziYgd5kRUaU827q",
  "key12": "3gexy5E1MeZnGwU2bgYsoXkRKac6NMUYov3jBUHoPrYtFH3feZizBRkS1oG4mZPova62HMRrZU839oRdKwbgrog2",
  "key13": "4Etmpe7M1cXBh1AGjW6hGvJmZDRo2bGo56dMAQa1bzkcPC28Egt4GWMSMrFgrGMnnsMHxWmorMzRHYaSFfGNAmm6",
  "key14": "3wy3ux2EdGmBT74ykavQ1Y6gu87f3wEjxqzy1MJUCra53XKAYa8wznw71qxvocsEJQzp9Y6zejccHoV85aSN3wvm",
  "key15": "2rQup1HgRPatHuusLgPH6HUTodqX5Wg2mgUDtdtcrNf17dXTFwywLXc2snQCHax1qq4Ns9mWgKacCBjTKQeXBQLy",
  "key16": "3EDPpweJksmrDv88cSybVhFiVz97gpeDC3vRvLvDT1CKEeDJar57RNoYX2yjaj3iupyjrzYafMkknSxp8ACY6dmQ",
  "key17": "34DvWFdDri8pGjQkf1gJP6UVZbsDhceFEvSmAo5eCG3WvkyiS63oqpT7FQrfLboDfsk28iYFk2y69PMyAkdMSgq4",
  "key18": "3yToCCRyeCer5nrPSCGKgczm7DkvKhn7Ee28iYw7x9EfxRN9jfmHwyVx2wnCvjsoU2mWYVQWN6JtbXXAhvUNvPSe",
  "key19": "4s86gkiJ24e3bu2N1i4BsHUBxgFSpUWyjCA4JXb5LgzrczFL4Wb9bZ1M6aH5TzzBp5cnGGRoQZqMxbsDTJFPGkPv",
  "key20": "2voKb7gvJXNVy3Uk2axXM9WPEXo84T18W66DV3J4Qs7AVXHEnWpYdJkJzAnmcdJuko51VeAMmzCpY72v4GP7Xn4N",
  "key21": "5Jvug9h3jbxbDLC57b6qvb8ywsyv5sSgxuAhFnWQo3oqnBnhvfRFuZU5npe56dj9Zg9fpAedDLpQH2jvdpUUfULY",
  "key22": "4PX7R7FymNXiqvzgAoLGD2iE3weHUUwKT4Q6N5svUsfrEFSgzG97BtjcM6P6n5UiK9HQiZVfoso1YxTQ9K6pWRmi",
  "key23": "3M3bdfEcWeUnPbRS8irYQVVdGS3b5qoatH6mk9v8gmzkBDdg73kt6PSANBkobz1HCpYd3zfgPDpqNzKYtXSvTZKW",
  "key24": "5JwMEbBGY9C3CmxYZmrV4BJXYChHHHtMDmpsxhTdb4JDNG5RhzttbzpQbvZM8DvMH67569hnNCXhgEWSWqqrkBwH",
  "key25": "2mo7oT8iiygd7bZRjd5TwyNV7b3pKhubRRMTvo4C9wuKUaU8KWaXQWW4Y2sRDWyeCmUn5vKEPxGknL1YhKDWssVi",
  "key26": "2sYYydLJpS4WQvqPEFCyBaQJiWfoV8wgPRZFy47BCqw46ff3fSd4qhpc5dP9TZM1bgmbPGLWuD26LdEzN3axKua8",
  "key27": "3x4oLpLyQ1UGqoTwQrb8KsaeRT1nRBQHthtqZ68LrxRqFJmqX1kTomae2Gd2kXhsGW3fNcfCArAbbsKG47QedVsP",
  "key28": "5XcV2zjSFc3gSKdwpBtm9KyzNPcKLxqtoG3xYh9MdSZLVEsyJ81ZHxDTwkQC6fKSjKXpyz7j1m6Sj2ZoSoushUeP"
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
