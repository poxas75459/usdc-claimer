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
    "5JifDMrpqohAenqYStHLu2UJiyMfYdGSoD9bABZ7VTbf72qGcJTBneNF6g1B69oiSWXkHb3uCK3nuBZ8YdJSQXSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftYW44GGRzAU7biYhXPfSuqQ5TzoBfxgJbqKVuTYDb6k6JAYEhqKwnmuGQ3Mo6MvazojGHUv76n7CXugv9brjH9",
  "key1": "3J1P45XHC8tDAV1RxpSUBYRAzjiXvoj47W2E7nWJwir8jwNkq4AMzqSPQ4v2eBuhKqjzPkRjpuDX2typSyura9Ue",
  "key2": "5Exb2Uqw7jdqY4pPFX5PT4efwFnRErJZq5sFSKm82pCw9V7PANAKr6djuXiyidCHZfshkifg5JF6SSjhxsdbLbHJ",
  "key3": "4W5xcs2Zf7VE8Qx9apNDUkrB3oJTZrksRnqG9PaS4BYa29rpfJ6Ls4NFy5ZBindtFLbfqZszP5oTiehpKaGcECss",
  "key4": "3GdQm7DAL9QoEudNPQWdYCYFFmeXsm4LmucaeMdFhbyHrv8KDLUMZS4tjiB529YVDzKcKhWxG6RoDFP7XBcs75we",
  "key5": "5xiNXBzdd2ZK27qTdnStLnfWVGqXs2jZtNfaT91ubqFrsNnXKqWDaw6JBgjTGBHV9VfC3wg47jQZXBDszxYgPEwQ",
  "key6": "5rq1Sp6u5EG7wXMwgnchKoQnu3nEycQ9NNaKn2cPuJHP4ZiBPUEoCrksguzFB7PchsK7cchnkVCsNaA2EdKgB93Y",
  "key7": "4EEQkBKh3skEQxLzqF11KUSRTzkcG71Y3VdkyT9LZ6tWiF17nDNUMBdYczDYbZ3fwoXdsko3MFqUcw3AAiG4NJ3y",
  "key8": "5BCkqBreQjnpuYApfWEoWiYoqogh5xdk4Hc1tKtYD422egKLk7LuFiuh1sE5bs5pGp4hasN7LyE9VoyYxytaYX8S",
  "key9": "39LNmYoyqoSjfFo2Hu9ppFAu3yRseX8j4QzG4TzuqwSerzmeRsKiRUgUihLf1G2h8MyMTzEMvqTocH19Y3mbfuhy",
  "key10": "3DWSS55UEkxnDsJwcdzJobDAgBF4oEP53YyDxuxhogXHMY5ECvFhH4r1Mk4cePAgBQ8hGvA7EJCrhsUWW7vtnNM8",
  "key11": "2215Js4SfeNt5R5n2hDZ9eW4xkCT7JUEfJ8ZTuZyMpndMSVBxrVzcq63jB6H2kELbBH3n7F6WaBZDjzqxbHNM5Yy",
  "key12": "ecJZrXVN7DRHzBvERZNDCVNyKQCDanZXt9raenX8pt8sBzB2PARBJ2E2579VJsrjZgcniwjTjpfgm7TtMKUzgqU",
  "key13": "PAQ4GfEA1NRmBcG9A8dAc4rwiy6cnkHeGpk8K9D8bnTzmwhE4LgSoRDr3u6Js7YcrbaG6MMTPYK9k6KHTAasdwq",
  "key14": "2hPTDkE8c1mvgugFCDbFzQWt2jxKegiCw544M3T6BDp78TXpsoKoVnHU5nByMeBGM2jS3bZLooujWeTKgbYBbY6N",
  "key15": "5XgsAaZGJyjUQDNEmJvn5uFMh7P45cHRc7LYs1VE9GfJ4rZKy5kvhNpV4k6PRiKF3Tsg7fdKaVLVoCkBeiTDp5Z6",
  "key16": "4YoK5rrggDtqercvZBQfXvBQ6k4vVLNFCknta6bEKysjcSu3KiSMYr5boZtWQeyz7HASRAbUkavUcXK2djCbesqg",
  "key17": "5mSHbt3fVH276WPKnACje88LAruoJUnT8hSFWy9cnGE7TwpvieR7JMZuG66DXo5pk4Z9y96dthDH8Bz5muF6nX8n",
  "key18": "64iirDKYdXrPkdXRs7FeH5i7rbmQ4kHPvV8Qab5zsNaX4KzZLwuPFJ5u3y6GyLqVUBNqi2aKL7ivMYDkjrnQczfZ",
  "key19": "3xh2tqNBjPWqsrpydGasxYWsce3hcXDZCxFS1iU3n6apzaYEBDsDJC75BUmMD2x4SduQyPkYx7oURKY4jFYkBM1b",
  "key20": "424LBYfFiinyat5AybfCNfx2EtCWhUSXFdzxbnX4EmW6sUPm4zcvbmPnZH7z2c8PtTCY41Bt7mNZqmUyEMSPmXDc",
  "key21": "2W1vKyGY62ke81BwbMMgQBtwo5CaQtjswKxLuqF1EvKLGZzwZYi3Q5xfVV9sjdvdoKrKJZQfpAbyqxSTB9Dx9Qwt",
  "key22": "3yP3h8TDgDS1fU1Ps9A5vdRabPJmyMYA26KBgpeRKYtUuTJkU4AmLNy6wdEHW5TKmogVp6XvtxywLGrq1u1VELLt",
  "key23": "38tdJmcHQJA8hWEs4Qya2FzFGRm1qLWB86dL43h1WLSM5tnaQkh7hfR7WVJKSaWgbSr8uoAjnVujU73xrWXcZDp5",
  "key24": "45NxDC3HnhNbApDPLjXPyDZXcat8hApnoE4AcDFWx4QaaqYAnVkyQ8E4dn21hKqvCWbQzJPmdmTrAMkDoTtM83gs",
  "key25": "5sYcC8VxREZXjou8xQXrqDC1WDJxsHXAFEEcfMx4hqfPMRRG4RExtzWoLKGKDy76obh2eaUWEtAujtaUkWUBkZFC"
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
