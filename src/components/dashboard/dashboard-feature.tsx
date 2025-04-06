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
    "5HAqnmxsXWhYSsQ6hrufy3jP4MdnaenwTuNTAdY6i5yxCVw7nQcT4WEZqCvwNScRZ4pfLRsvH2MU3xzVBpfE5qpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aCJrY6YHa9jDciSk4vtpogQeUpv3kFesrtuhQ1pj1MaDCHsCyzRjWyoG78q6NH9FWvkRARjPwhb2YTQwg9oDjiv",
  "key1": "4r1v4SwroaCZhL9PDUuadsFnW8YAfzK8FJ11qZXEg5hHQnGX6c7T414vTKXz5fQQsH3Dg5AmzTDHpRyiPJvR4ehw",
  "key2": "3drz33jJvLm1DvE7mszddg2XcvyPrXki9h4y9YS7u6SLySFFLdxG88gDyjww9UL7AwxLz7ds4yQayE4TvCGxa374",
  "key3": "2tn3xN4Z1tbAPSVUdekrk9fSKYuDcQSJJFk1uGjBN2RGxPpnstfgm84S2QMRyCJ5vdeFj5L8ZYqLEUaBCi9y2knw",
  "key4": "GLL5NZSpHMWStsbWfJcHc5QwwGY4ghtB8JntzTco8Yejsin6dBUzCLSRHKTdWsD5uRzrubqMh3G4UpfEobprDnu",
  "key5": "XxS6qjhsqkCRTCPSFZw6KP86Z7HaMzUY5C41LpY2xrRfaokXkkspRihuv33zkaaokubP9DLKu48FAVuFEKjC99M",
  "key6": "3mcjL8H142YL6LMcmYdEfymxQ3CH7inD7R2N18Aou3PtiQ2ZKLgdCAsx6GpvmyjoRuYzbNLbSkXBu9HoQVg89JBC",
  "key7": "EpgJjKzVDN2VYDjrA5TziHyyLFgRVjLJBPfSc8Hbch3NnBqS4dryHZQZuhT3VFPV24CfQD6NuebmWeFyQijiEcH",
  "key8": "rCdZYCfXCT9h36tWaf3Ni6fV3Lnkq5rVFTpnuM15TDwhsvfe6nGnoBwKrS6Tjq53Zrfqgb5hr8kBRcJv8Ft5B4o",
  "key9": "3BPbTZbMBaTN8kYSbmAnKjRAJDvAzLu5C8UeHQsVa9NZ6iiydo98iH2vYaCmtybaNFtaf1jAvnRoxE13HXEFu3ei",
  "key10": "2RyiTMfrHgFcpMDY16LS9Eh6WKfSTNCmywSE1eud2hp79sFgQxCqPhiEWingh3wXXRLe5BXGetZfCCVR8akUNZcL",
  "key11": "ZbWk6DfD1yhbxqKwozefMiHmaKF87xBjV9CpkLJYndeeMJQrfJRBsbVW4PUZBhHCkJ2BCR69EF45oMwt2C5xGVP",
  "key12": "4Vj9j6B5AZWstJrDGGGwCuNYjc6QMwrLwF9DKqhPDTMQunpRkrjTS2sFDEGsg1pQgVCNfxQ8j7C4ZW99CVpB5xG8",
  "key13": "4TqP4M8jEpwNFGpRQUittJ2UVf7FPu1hX2mM7PVoi3Fh7EnpvFuNyZbaKKgPePZmYzsfyKrH5fUXSSZGXLsuNtKx",
  "key14": "4yAx4JHw78jm4PF4yx8DMghrSqEinjzhpnK9JsirbcMjQWip3HA6jKYBDisRBiiyuzMsjqeMykocGuUdkj58bdSb",
  "key15": "YJw4eZh5bjH3EHGTt86Z27t5ffuuDWuSvcQK8BnFbGL8mJrDzQURoNf9uJooKSb5g8eRgV3EamG2dcZTnguvdLv",
  "key16": "3LzDGy34FUXxWB7uUiZ2D6vYRmQoSLQ9xseLtWxtV7d68t8wShBpzKjFSXtiXbdCNwNtcZpP1WuBnnr8J76fuPsq",
  "key17": "4JVZqmEQpYyJwkqxdSV6HBY5LPGjjMk9eAajPFM2eQgbRhVfKA3UmVpVA9d88787s4YRBRJFSGBWLLYiCpdWUJo9",
  "key18": "5qqhTNjLtY63PLacjQbtkJ8aAncS4hGhC4VimgigJoQubHurdCrpG47Rd9aV2qrhvKVUEEoZn7bAktdR3PXUugCX",
  "key19": "2ZYZJeU5A5P5QwbayNaiUTctFF3gzCKCHmHki27spARWZe8vw7drh784g4eLTS16GxzppQgcrdZ6npWg2QmuqD2m",
  "key20": "3GRfmZe29Cce8VT5e1BhiLsLe5FXSZ61CyCm6vcpQjXuifJfmWDzKHS3vDjXX8CHY4nLHnvswJcjNF4oM7M3HB18",
  "key21": "og1do5uJpiRmB9TTUYCAJU8ckmZ5ERkqefz8emV2cGdgVccbdsvWndvqxuEMK84ENqvxGffjsiLhS9qydQcPbLS",
  "key22": "656NTWgw5cReFiDDVWbMeS2LBb6fMX7ReUxGLfjknh7V3bLDzi1Ptto9f4qXUu4xvoorZQ5JpjqbATi7GgzvMftb",
  "key23": "61cg6KbTWFSoutQTPD4B3D95j838nn2BFtit8hVmN19TyswutcNbt1CZQ5BoMdeCkLijuYJXyRc3VTG3s3uc6Cuh",
  "key24": "31ieHCYyEc3xxj6AMkVPQwKDp9mpLEYsQvxZnkDkEHV1sZ4LmXPouvB3EZvdfqrnfqFK21k5fhFYd3iPzUtCU47V",
  "key25": "mirakXMG5fnj5pvbsD4HWUuGTRTa6aKp4XrQC9gD1zM3zd7D3Dgw2exVXL5U5KsNEUbrhkmudH52FrNvy8wvsMF",
  "key26": "5JV6C8pxSvxU1X5BHNE7jCwpsxJxrNzo6WyY1YrFDffY4zy7gctcQy7ad4L4v97BP4hdcBT9LHRfZPoNW6d7Y3ji",
  "key27": "4XA2Gvmzm75hQVPbVxhm6wEHBRTsvcP43ofGvvLhguNL22E7y9fXKHtbEhgwYSv83eRmrMMfyTiddhA3MugS6zEM",
  "key28": "5yUr6G7USV5DMUS9Eq34bioJg6mFGge4NKzpaKHwFdDWiU8ynMywYyx2UFXcyH4zJPxWZJMmBxg3sKQ7LBLU8Byk"
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
