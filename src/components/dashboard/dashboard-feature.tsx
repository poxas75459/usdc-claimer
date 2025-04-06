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
    "5L7hGMkKXZcTFkyeW2iiWEeWqfowg15vARQ18eYVCHc9dSTYx4iG1Uhao6PujZH7CrWZ9MADAs15r2EiSwf2xGfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5piSPw3TFxUbwuEtZoGeseeVRBpcto8WJhcqEFxTNJk5tx4Gg8Vf6FbepQGiS3UVRYvk9ExRDZXUiVFvME1DpjA4",
  "key1": "5Vm8rpkLsjQMNbKDBbRbgn6foDvweVkCY7pVVUjF2ZaTsHCTqvrH4QDq3MPrMy2EorKeRnB85MA1FQkagHi7nENx",
  "key2": "52i3soinRQ1J8VKPSvCTFdLe52fBcFzSMeyuMX4ewH5RZw8u4EFk5eooEAk5XNg5qi3o3kmezdXYAYVNTs3sqerV",
  "key3": "4jvjVRQVBC6Z9aqh8CNNiiNFBsSHDMmP6Q7xXn5Y9vUfMLuX9JjgRbF1kpbbNKB47WWFvVEsE5e9qczRoVhqsNG2",
  "key4": "2g7145pXWD7ULfGHzmvMAqHy1Kc5PCbSipUhncaHLdPT3b8qe2DM9ZhCzAQJtdDerqZNS3FdKi4vK12X3Xyxev1s",
  "key5": "bcsiBmSDnvV6mwrxTgg84Yx4kKkvBUrY1WHX7DX48f1FEQ1CCz68jYB2WjP8Mz5gDc17hHFcAuUHwd33TTHh4TR",
  "key6": "4dvxVzP8Q2EFfT9xBRUR5QzpepqXQEH9W5nWziER4gzpqqWohdzpFutxFDWSCaXtTnpmMqXFNWezRSRz33CYX25y",
  "key7": "2uGBELzZ972RegdMWPke8mEz2fGmGdyd7eCQ5RG4CRKjA8j1ziyifr41BMsVfCC9FhzqZ9t245gJ3DnjDodUp799",
  "key8": "5hqAxi1hgLNkTZwWGzbbBTvnQh1YxYp7iRsmJcr51MEviU4DDRVmkb9nUYXsviu81W2qUtGGLp3jgDxBFfa24PJZ",
  "key9": "3QAZXPh6J6wpmMM467NZjXGofa1qgh3EuKBAEzrBs5LfLrk9NENdzdnEfL9umCuks9xQLX7sLjgu3yxonAACCGyc",
  "key10": "5XXRxw4pfqwPfK7z7YU1vQ461FUtowvGT1aoSKbARXVQBcmeByThVFdF7ziyDzeiJ2xm2QzskgTipn4E8H23eS3N",
  "key11": "Qge1m4ccbBLtsNFrgPHWu5uJuweAgG6Bp1yPiUg4L6vkzgRsAqKohajHjFYNWVDgNVfPqBaRYEj7tQc6DdqxyPG",
  "key12": "5QhEtpzQYS8wXNRjPWMR3RpPRCwER5gW3LdMCBSHuhGDyBwNt6Yo45pStgjB71eCVodXRk8BBHpea7EPz15dp2Qs",
  "key13": "4XzDRMnGnizExRhDXEuez3oPE76m2J3UJbUux55oMo1qjaktBy6ph418G4rTzHfAPq86VVpH24Y8hMAc6h4WVXVu",
  "key14": "4c2cVAEJSUex7xKkt1cLgqQ9svtvqVrkQaVcZpV7MUmaiaR95V2EsfqEuA1ctq58dLeFWzpvq2HhxHFwEGwFzQgJ",
  "key15": "5tPzf5oFLGGFVCdGnVkV1S563WPEW63VftmR875KAWGUkSwccnQLx1qfKfQHehxU3csWxcG18R2LCgEZz3jKxygv",
  "key16": "3YQmqrYANKN7eRDPWZTjvwcgw7WKrQgXGKzW9eS7HMZZWvbPtbkXD4PXHX9bj7HQogKSQE83i6ESPMFRWWwqSJkm",
  "key17": "4tu2XEP5haKr2cSHf1dKR1gUrkoGAkz9ybetZTNCwUqDFPVNaCpLfofvBij67oYMPLqgta7uiH8PBERHbHPgykFN",
  "key18": "j4zbPmExZATVgVFjpkwHzxf7FVkCTrVGrLNxR5YfBu3uCpnuLErojF4KD58tUGzAtZqpLnmcSLeFLa2Xo6V1GAA",
  "key19": "2tVdUsFyWbPRjmftmB1Kv56rTMVUvf7ybBsvojK92YnnMM7WgESWhQEXWfbxCS7auy8v7QpCSBsREgcoriQZoKk7",
  "key20": "5L1XrRZtuCyLoNhUzhQgrw3t9TPfuMBGFt2TB1dnVa7mFGQZC7iVEbr8N76sXVafEiJ2kQgCYr3nHsuLLSAV2NmL",
  "key21": "mZGiV9HgBDx5umPQiBRhKP5AV5CDZ5rUXEEtt7zxaWWkL8qaw4UuYZHhkxan21NGuMvHbeJeUsBT992U9cmL9z8",
  "key22": "4PvFvfz1X8PSqpucULBuhZUHeEXiUHV3xJ4o5G1x9mY3AxFkQh7BR8UnR88mfbnwvkTNSiZvjDSyWxbPiNuMvbbE",
  "key23": "2ANo2mCaWMmLKzmp9X1jRpAofDR2ADqBpQuyze6oxZBSWwmW6Uht4LF36QMw47HDngpsfqbRRLf89zZE88NXnEMt",
  "key24": "3wFHwurjid5DVJn7A7twmwNtij4GS4wVTTrcSCenaiDRstheACPTG6faVCsChufjKcy4KGx1UAJdhRJ9kdyq161E"
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
