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
    "5n4fdHUn8tdF2ipZCuvsssGVGZwe4BwTgoEPNisq8pA2p1R3ZGJmTBHtm2KhtqcqZj29osc7hCSCJ8edho7QHTPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XuA4PSP6DyUaNuVaS5bqxEwBan3vHaW8SUqDy8W6suWNAh9M2bSeuwbyZMWtf4sEu4Ww1VuBGpWmuuQRrny5bBg",
  "key1": "5oM4tRHqSxXGNVLADxFnwxbFRcNf1exKDxDdbwxyAnWVyUkgnWNxNyP7Hj1uhWMNaTDpWSe9itjqULeW8w6Ysgey",
  "key2": "8PSC29XD5HwwP1JiiHDXuNd3sTcs4D66C2AowbpHLfSgBBeK8oZRESUfVtpZQ4UpTL4L5FPaGmvjcpjaadd6DWN",
  "key3": "2GWQUkcw8PTdxADvAJtxeKfx9ADjfpiPVoyPedRvk81YLYBy5Hbgum4GbsFangnUPzCmtJhTLg9UywTnM52U5KF9",
  "key4": "5k5KHoSyYBQRx9tDaZ9dLAFQV2CWo7cXKwRojfW6DivbKeqpMxC3ruUFtRi8WgiHwT1CTwugyf66UzTGrZADc1xy",
  "key5": "3wbRoBcjqwcJhNhtDx3exog9oXL2zCGHu9KwKTwa3B548QMPoMVopNGzwV5unaGsweenfVGbubsFK2i1um7e8hEC",
  "key6": "4NRN1dgdoKoXf4ZTqob1M7mqpHeDHNouHw8uiCeuWoPvgZW6C6KNnNwCCAN6GJz6gXzGw4a67mYEew4KdeyUCVEK",
  "key7": "3kyDacwS1hHY4ndEMbdg4MNNrPapWK59uMXovFCPNU31Lgh4SB8HSBgyB1qjf9N96Pdr7VjRtuemadKs9H8ZJRQV",
  "key8": "2eMDMsMtPHUewwv69eHTvVy4Cm1i3aCqXFfsZ3i7DRuQKFoUy5EEYvTQTW8AagLk2zHvWjaTRfhsymjJ4yUrNk4k",
  "key9": "3KktWWRE8znyLV5TtYsmMXNGgSMnGqjWXdf3t5evSb7hXgDgGNzbUPsV5RsfazSwzTW6eUNyGMsdPm6xzrLrk8zQ",
  "key10": "4G5KjP4jdgFXsHLMmxxaqb33iDcYJeqnzPuff1vykLznrPk8nYvtyhJ637rpPTbNRP5ScWp6i9H3bGoeeGmQMiM7",
  "key11": "55rF2wsuZ3ua1Xveg9N5ZCDHqB2NFi5rnJRdnuYyKk1oDVrqQQ85GMHptmZfdBAr58vW8ZJXLbgoC4YdpChgKWYk",
  "key12": "So9WECkyqnF8CyRwzYjnBvZ2r344ewK1TJos7gNwraiSnAvTud7XzpKJGyXcJuUURFeymMKBqhXBRuCWrSbdxnT",
  "key13": "5t8btrj8jWJdUM1hBzExApGeU2Qdqrtk47Pq6btWA6UQTRyChzE2bqZk3YNnuW4X6HqHDEoNqHTEWDMcqbP5jaSh",
  "key14": "t3nbWpm4hKZD8wegc927eJUiNZi2S1rZB4eWJsFwhZb4tq2rLVvy5a9yWbyuGMCvzeKfQpUbnCtdYzxnjSE76ow",
  "key15": "23SmBdJD8cGFnFW2x6RfMB6ttVjUPpgoXdMtuQV6nx8LNtQgPbQ7eL9whkVbjiKsXrqThjW7JCfaDBJ5sfkQzh55",
  "key16": "33W8rKqesGqEsvgtHB6yKLiGg3VP1ir37T2wHoTVwfnWA6kLVDpvct9k5NTGQ7jk2Yxr3Jirw7TBcD4U9EtBUzmz",
  "key17": "2iCsViZ2EMnaDyGv8BM8VvpFC2qoTTXihJGgcttXypho42UFqfLruq7MwNvDvKHFecbnXUY2MvNWgtopqUDvWmGT",
  "key18": "3vDnMveKxQonLFhMT4fZxQF3xXn3gqzHcbsc2tQ6ZdYVNVa2WYcu6JyhQMKLmpYtWRSHCFByAojbUdbu94E3ThLr",
  "key19": "3vPR7Xr5g1ppeF8Y5742ybq6bBwY1zX2YJPxMh1QYTZYikFN2vmqgeYgvsufP8DZes2aiz6MTQ8gUcvJfAPwD9qg",
  "key20": "47yWN3DjDrVk3z1d9PR189qCgEx8n25j7LswpaUBDRWswp8XVVKq5ceACG6L2W7cYdsKog8NQbQxhxJyFj4a2DTn",
  "key21": "VVPtkpEPKc8e5MSkZrP4peHpevBrEqhicYQSifTYFMvuvUcttP2gZx3aXWXFrnoC7HVYuUqTwL4VqPEaoC1SfM4",
  "key22": "31sPZdVGgwnqN3N5PPFzsFJwPbAfNhgL9Mgb3C1BxTaP5W8qwqQQK536MLARXbzoNAjuQWYmevxjFqBzzUsCwnfr",
  "key23": "4HtmvXwep99U9r6ZbXH6ACrJZPNfLxrFQtujLKSW2TwbVgWtQr6aFKT9YzDg4kcTp5uy9NxtiT5dva5HCkwUYXHM",
  "key24": "5NCk74CQDMh1SqFkzv5vRLG6btRS3d4XkuYGCPMRSdwSz47RkDT6iGwYTJ5V8mwa1CabFL9bnHf7ZdmQ4ZBqypg3",
  "key25": "55znKyMX2ZUQMJA3TmK4P4V8cd1Y3xYHSXxF34HJKtFs1YS5eGphwCRBourZsmy4r6Ha9ig2AYNFsCjDg7jSKt6o",
  "key26": "5nyc4Gg2KgMngfkEWz9yVkigcz9SCo4e3bkmVJUxPvNEqeErNKgqYBn83LQogCRzTG8LDNSw8jP8STvzTkbhDRf3",
  "key27": "5MtdND2LWeFuz28KGVy8pJDsSEEHUAFzaaTXRmJ3rUYE64TBEA9h7onFAQcVGa5XnDiwGNUdmj6JCyZ5bowR5Egr",
  "key28": "2tA714iJ6PesctKwbqdVwNZGErtCHDSVYDKYcqNrMfbyj7iTm7L3WzQk8DdyoUtgkDU8g1J2N2bAptKGho9YECSV",
  "key29": "stbAxThuVGF5vmiMtRV6AcG1w8spzuYnMzQoLAN3C52wD3NDDc1svh89jbEDCtP4s4CgPvVerx1QzTA2edrZgHP",
  "key30": "5CtXrQQvqTwPqHtPMnjcn8gVx6tdi5SX6DLQVYzAYF4DJhRXz22te4vPdkEcZuPYbLX9yKCY4ChcjB6ojeDG4yFP",
  "key31": "BiNqJfDKP6p86dcmvoKjYBffBxPmT3mRfGYoUe2S4uiazExkxgrW8R17LC9xfG5R85kkvGrm1TpZ6KkDGwWQVyz",
  "key32": "5DQgk3tbmBjshkZCEXjhYD2iowEaAK3D8ms3bP2Y6Rq2uW7KC1DDXsWTz1ZPkFk5WBZYUviCxCScgfndV8jRpX9r",
  "key33": "42QhUo6xknKrFYGUSeGHLPfHCvP3pZBVdWQdA6mGpNgPbx28J4e8SxG759dGHX5xE87L57tfbBCdDJZ7Xa7UXwoz",
  "key34": "4rv8fwvyB475YnXEH6X3Xp9cWZmukKh1QwPARJKrFMXah5HMBJekqHPt9K6438GwiVjxtZcR1Lxa1AMB7Y92do3w",
  "key35": "3fG6rUpVeS7PcupTFxGBPnMiKGZSRrAcGVs1Lusp97YT9ikzTBzgHWsmZ8gpd98acN3F6aaqsFGL4T6ws2jM4Rkq",
  "key36": "4N12Qbd8Nop8bmXYF2Wct1UKb9b4B9QSE5fXQZSums7B6fyqJ6pxyR8E6ET2HcnFSxYBnhLiDBf74XvB1rrznxsB"
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
