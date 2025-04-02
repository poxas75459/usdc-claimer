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
    "48PYiyY8B3mnSS5Hspd93PH59oKhzHwBRfEoXTgPiFUxtN2nS6a9zkJoVx5rGPzRi3Jg9xGWxtBWc1wMZCDwgDtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56D9mo5BGX1DyDduBmEEih9mGFn6qGFGEm6yebr6p2zZfcj2Xgcd3qzuF9VVNHpeUEtSX1v7EbMP1z7qZ1XKrXq5",
  "key1": "3Zj52rvptvmrSJZmqVXNmedRGqppKYRT3tVKxceMNQx8GVbLZC2ZXcPzc1obu4tBdFcdY5863QuQmiLmTawnjXFh",
  "key2": "3WzGf634Koho2C3oCaQ5fmYGqSU2VAHytCLt7n3V7CxcjAYwq3vpZAz22AAfFxZtXX9rs93mDRbdQ1fsShY5ohRh",
  "key3": "2iKwX7bxVj17dwS3HkPEhNc3wbWGRkVN54K7dSPRD2UyTj7Tvqm3L7GNJNd1wsVmXPd8hLLxQNHBBUXPBaDjT9dM",
  "key4": "3JhE5vgWWXtcgFmRQjTZ3cfxEsUXSorFemhfQ9eyPAiF2YU24rVgueoCc9WGGJaiXhdLK2x9U3vW17R8oNCaj8Ek",
  "key5": "2jzckAVNJTE9wAM7YARikyrBiGdvHHFw4FXrh3r63X3a38d3XKbyUGUhPWY4hSuUgnC4jvjzUdkTdtsUaJHu1t22",
  "key6": "ojewUKHd4hESnaPv8KK16w6B3TLiesQnef9zrSAi5YLAaPB2f754ACn9b74kTzuQEqkkQbFRXUS9W48ckDh73DF",
  "key7": "3CcC5wu9EJvxMnQRtJURp8cNz2x2rDXZqioM21GxDMCRSBwbhvjmW9Q3VrwBQCLgq7yg9bB16ZAwmgcnuNypYWTv",
  "key8": "2NnbxYTZXBc8c4wBeTRvAK932b5QqWCgMNoQTGaBq19hUsgdvsMdySKrjPuAsX8pyvLnfdzv3qNV3NFKjmT4gDs8",
  "key9": "533vC2oBoHpzQyYp6urRtYfu7fuvwYiiwzprCBok1hQQFYNZQ1eVuupQWmN47EFP7WjRzUCU6QV9QyDf8ybuYJuq",
  "key10": "5KhfjLqADjNYutz56J3FKLTjEj3ry3bNCMyvToehuhHJjueadfH74J1ygyus9bqQsRcUUt9naiTg7GaZAvmPxVNV",
  "key11": "4vXqGTEUDH6ruLTM3sNWUWfwkhZtxhCZzTHrXh5KQ1f7AHQkJ1TCHtoevGRxudDKEt4oi9tsefV3gq8Tmi9GhSwx",
  "key12": "5qAADpgdchEBwozjswb3aBjShwqWpqyhbGhysLLLdQ8MeCvApF9mdP38XTNZHUUgmv46oPaMSy5ioDdPpPeHdZFJ",
  "key13": "2z3GpEqF57GociX2UUQ13H1YSKBgSkyPwTC2dBFDWaAJGjcsXpiqeSuiV69TK5o86pWsiYuRuY5rRqBu3scU8B9z",
  "key14": "591knrEvhg3ph9JfpCcnR54RfgyGCT4tDqfGiQDpCdptzAEYDVtcvH4mFFP1DbqYcTrztC18pEGyGmcGbp1W4jLV",
  "key15": "KHeJULVANyU6spC8TNDe45ZPNaQNjFSFx6bEwvy9RvsML8S9ogwLyk9AP3PiVHxBXgMYrGiijyUAy5fgapgz86q",
  "key16": "39iZcXtfPeMRW1WigF1gSCCW7aXLkBkYWBQM2CeabHD9VCM36yJHDok1JjAEBiHjD69HZQ2raFDML2a9bhFTcjLJ",
  "key17": "5puunMdVMxeKx86e3dCwQgbyNKgiAQyi5fp1dt491QN52UTw5XoXmCQto9HwgQXMhWJsxvc5wMN4MaawBwFQHeGZ",
  "key18": "5PSvyqEMXqez684uWWmGey43BTQh4Nt7PeZXjzgV9GktZqsfh1M3Tw1asqssBqrfkJop7Km93evacdPsSASzNUmG",
  "key19": "5JWof6gDZ2jvGgwyKaYAzvkPuXEKAS67ZzjqSugXdPScUr3r26CPN3k4LANXA7DgPsJka4vK6Ur3Sre76a4zLEYP",
  "key20": "3X5cTQiNtpwFVnVE4WwRUiJn92ks6bm18BruRH8hkxQTaHMqBjB2rwhtkTgUC2PAXj2ZanEoRKaqqC2TZRSi38XW",
  "key21": "6pXamsAau9N5TEeWJ8LTrUq8mSYqpvDJ2cwqvgR9NpYCeV9yEnnHFMYugVueszB2JcxNSF4ccKNMhGDTP9fS5aG",
  "key22": "YBRNzUYsSarNHAFn2Xy7vpCgpXCZNricRpJ9oUbXxts3nsP6FeQPDwxtK1iGnYpofceJjCNwsC81JRPvv6ynkev",
  "key23": "5UecyYkryaTWCVEqkDBBsd4ZqDXPJ1gKmE5wELNbENgxmttxNn9ptP6FKQmHGqFHPQavckEzt7kUy6XkbVwTn9Qe",
  "key24": "5yt8sYdxdgfzyeR5WCsinErYDMh7pT2LXhHkwKKXhxZ3YXqDFq3WeDFqrs8Uo6h8WZtmqhBMWbBAwW5wCLv3dbvP",
  "key25": "4xXDcCqf3BBSjQNbqJRsEB6gvMjjZQ6KJSQyRfHxUFLAAM3WSc4nr2i6PiFgWze4xrseXm51HeFVMPDQiqmicpZy",
  "key26": "2hHKCNgk2NqSySkDZKj2pRf55v3ep3HX5pis1LgNRtbLikHm1fUutCxdPrnvAnt1txgNpYpfdRpMcRuip4fR6rd6",
  "key27": "2d1LSzcxo7RojEcQWyKb9pizVEWkAC1aooUFjGA7WEn5qEo7Vt2m9y6GM1RZDs8xXNnLFYn3yeTnXpHdiUV2CRsJ",
  "key28": "5FsjofVCroXEBwYzT3TSsPTaNfQSCPFVGQhWaUWC4TRjY6w258x4ae8Eps6h2eu69oJVeTcLqo2kaw22Rb5jP4Xb",
  "key29": "5oJGZYHuXp6g3VrnJPFMXfUzAej1oE6ySo9iLY9TcjBGhw2pTbCJd51FKoFgLK8QiZiwJWxm3YKoxTT5Q7d6RYfY",
  "key30": "2BQmF1N2iQktJH5Pp3TighKkFLs8TifXnsKADWkaEJetrum1ruiHqV3rLEkp6zc8ssgusD2wARrmyzV7fsFo97mp",
  "key31": "5cEjKuy4Xu8PzHbiz3gZCpuS7hhDCEN3oSMH3F6bFyEcTBt519pTwZp5zhTGcZ7tJJEpNMUAYfKgucy15nD8KGeY",
  "key32": "2fdTATzZYnS5BatJDmxSsJ4Z5w6QYT9HNj2rjN9h6BzW7y4mBWyRFGf3SXJTyxUdJLRw5XVgr7kA9G2w8ZbpiYMV",
  "key33": "3PeRqsmKzbDXJkEPXd2zwbzEJ6Nm5hN6X1nFw5eYiToXFJjDMkVVmrpi1Bn1ekTo2XVc7vueiyFTuaNgAKSbz54U",
  "key34": "4CcSPsVYBbftmb2ni6nhB34rN9U9ywybC9hNCPsndoh12bRG2jL5UmQ3j2dqo3AMoYiDDenyQdhuWSivtTgExU2h",
  "key35": "2sTVUv6UjBqjTpNdgXsVvbwAxKbEvVEKypTLuGcRQxkXLkjjWd36f6dtVd5ZRv5RkABptL526ToxvSVHj9bxsJ6i",
  "key36": "3xoXTaeGdU4vf7a1VyPrz9XzqMCTDzzXtgByD8UAMqM6awbxWkoKTNjqupcHAEJ5wftmDuc3d1ZmNofGvV99mNNW",
  "key37": "4gpU9TZJUuYm3JB5waZSUyYgTKVPtt2NxygtG4A2SGHm8NjejNgYrTvTsFxaXKR7H6dzVaehM78KP1sxcwtLRbVe",
  "key38": "2AK7TBBLho1r8BBzNkqFd33JGKt9KhJzRsvU6bKEcCGJnZKc2nUJPfxMVpSDp6vna75sXS5gdzRchxM5eTjWGHBJ"
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
