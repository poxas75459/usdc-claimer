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
    "ujT77gacdoXwSMTYrjd2c4EshZC9N546bMnxir43XHYhWXNVLTb2g9p23kn95nGuPa6rwJf7huAaGuK487hL1N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ygrGSurhY9yqbsXrUSDUE5EHaWAPFE8jn2WmBMiMbGt4HKde2d4QCD6CeW3wbF9MB4mcTkz5a6YecGfTK1V67U",
  "key1": "4ujdBbgY1SqrwZD34uFV5NsprpyS2RDpWDDUMBFRj2iwW9BJea6xr6U4MDFNSpYqfJu3jUCStDjdqcRAKpGSatZq",
  "key2": "2eADwGwBB7XvxShUE3cgQnspN1UGKDEWcQWMmz5XpbXkgcmEMKfdoiVPAUMLR8Pu61mYHAWP24bzXg4C5prwvpgT",
  "key3": "2qswh6yc4KeeNwsj8PPRKB3uJ3WW9S5wRY13fzN26mdGeqTC9KY4bPazPrVEDqfo6Ls92TEHUxsLRgPToUkWjefb",
  "key4": "4KzwGWHWeCDNfypgfQajTdWJnUCAgoAehZi6FDwfPwNpVrScfVonDB7RbofThY2Y5gxKmN8rhhRHV1uZuw8TTmxp",
  "key5": "3gNygtSkgcUdBrnbb9zH6E9wGphw7TbUXHpS8GSgpGsbm3Md4ZYZQfCLb3RHmzASuWVdYwnESRMFDVYJXucPgWjH",
  "key6": "26qeWMBc2XX7KJNGpDHoNUm9Sahm6ztYdy1dkJwJMpS2d5sXx2HT6rSodKuy6X5SiTXggZPB2Nwe5efaHz8ExdvV",
  "key7": "5og3uxe7v2fux8SRafHtrQFD4kDvwi6EVp8kbaT2vvGVSc1WboGTrLGqSqR7Wdo7tz7kj5iF5HX5sajdFYijW9km",
  "key8": "xozEv6B4zAqcPtfHYkJnxaVZRWS25e6adtW8ZDmH1cyF4kJnqkdFwWAMqW3gNtkUHRBbL8hUaeah21roASWF1Nh",
  "key9": "2MqJAcUjughS2ywVsfQVLMJsnPpcWY6nJCXuf969SivPN2QxmKryfoDcccj6Q3447KF5gsP71geSyeCrMYssPg5H",
  "key10": "6VDYsm9LNY7WtkEXBaLUR74RajmupMZtUHhahzqU1pRgkTnYHxuUheiCftP5Cwmp11ovEjPUdJP3EArnUK6aNij",
  "key11": "7rwjH2EW3rxCs2tTd4ACZ4Nb9tfYHLQdf2YDeRXnCvCDbSCQ2JmjwpVdCGYUDo2rKE9kmwuvrwWYp4YthEoJcCL",
  "key12": "4jU4WCUqDA3sjyB6Mwk7VuYcpRDn42M5s5tG3FPby1QSDL6XnR3QB4YvkxtpsnoJtwCpV7VLAE2ZHjxjMeptxEVw",
  "key13": "4HHM8f9GJNJPVrd3dpBLRwXV6TTHogX2GdiYPgfb5UzonxTg5JxLDXZ5pVsGU9hL16rMBvEaM7dTk4k5S3owvXWb",
  "key14": "3vTjabBDSD2DUidY4NJ2vxZkqv1JsUYS9QJwyXJYjfVDnCjNiXuqiiYzGQV9wGabLUBWshCHyf5dQeUbKQ9uqGN4",
  "key15": "3Zxe9XDgN9z6sHp9BT7c2X79Vad1xYFpaLkjFN6YYtD259rXMYjpkmEaqKzUfMMjhnmcuhertEeWiudrudbEnPne",
  "key16": "7UAmmEsrKH6MgbrytvnRHyTR17xUWy9Zorao7g8vjNUCVuwuxKzTD7pYM7YscAb8xk7f4haERt3sstnom65uVVx",
  "key17": "2kXWZKvSAWFrfv86VWWx5Ww39tB6feYycdaW5BjZG31Q2bRRRbB3qM4Wquk6ovoiAd1XGGuyXfBRguX1wcv5rYWq",
  "key18": "2AaKfY8saU5n4QKKbFrwjkEMJHd4hR7bK6EX6MKJdWg5u9tzzGqBYDdWJ533fTW1iBuwbqNzLMnSRXmdzJSHrMtG",
  "key19": "43E4VPXH4qDW6CJgTyZZdar9Mzf8JVLqMnvLDN9mp9DwTj3poMG8KCXEoQbxfcG7urPKTtcoPrBKgye2pnCba1r6",
  "key20": "5gTxkbouDaz9RLCgDdG4qfMKBwADPcGnFtZam6SEvYnEfad4UYkNSd32WXzBASn4XnFMrEwgBkxvzexmRohRGiVy",
  "key21": "5oXzXadrBPFjXycJqHpgmuzaNgXCnjPKsDPXDdE2afJewEVo62DRYps9JbA6VZJeyC616Smn3Ko4i4NeZLP3nsWa",
  "key22": "5cPHdvGtLA3HgqLk8vVi17EE4EBvYwxYszNyHPZ7BoVR6T7SfjzU4nKMix5BeWqiuVXK84RMa99Tb8GMT21mP793",
  "key23": "4rwPnNLidQVkgc6dzdTWaEcMqPKzmwp4pHna431yXxWVuy7Wqp1pfdqUDMeetNigZhmgLtUtMjj5VmTytpLkwwMv",
  "key24": "5Mzr5bPjZa4HUAoAAXRFbMDKsk9t6XeWVS56gqX4CX2HrEbbrjCsKNW5zoDUjw4GBnPxVSJmhgMqWygqjsniwwCM",
  "key25": "2Fd8o3R9p1GMTWnM7rF3pAaakJHBGvfkyuJjMWjM52ecJNPpoie7q5B5Wo6d9gwAsVQN85hg5zS6Qh8V5MXa5muB",
  "key26": "2eAy1HKKnyarfpdAgmXFAso4xt2Nr2GUsd2a1trNGdqp4sdGeJyvKu1wFVKxGLQmAB6wd8HC5Cpu4awapTPjdgKA",
  "key27": "5dU96KT1XQdRN5G4MF74LqNZJm53mcUcCgP1tYyfgoMRGkXApUoGLGBpuCeVGmiGYqap9Q5Uh8e5JSSHLBtTf5rU",
  "key28": "581K2WFgqsND4qBkMcxZnDXffa7DpnAQapddRz42VzEjhqESMkTAsEhTKkrKFBpCMtt9NUPETZnAGp5t6T2gk8nS",
  "key29": "5yU8kazcHtevk7cvu9SxGF9GiFVPghtgRYHduArrFVLBTcBF64DWBU8gamyc58ohpJVtjeeZvbUzdtWXRYhewxNS",
  "key30": "5KnQUm3nz861fSWyqGSVC3A8RvHHkFQT6bEQQuXWntEHFwoYjCmvXbxe1wVmLvnwF6VTwz9JvHNcMeZ3mjrP8bBi",
  "key31": "3UepoLphj3vBzHKDmyhwuRAtn6kaiAeDCZ135o6eMCU8oiSDQQJxJ6d1YysJirq4cQ1FaxDsyy2FgWyTWGTKjbFS",
  "key32": "35wSKutCqKyaLUXBNrt9Yk5JxWj2nxR6DF4U83vGJa8VxRceJZsBS4ixGWtcYT41ywJnzUYCJMxxXFzG1d5DjHgE",
  "key33": "4eC26LJq4W6iSJybotpn6NhPsKRuW1uiSeFZsi46GySrGfGVZAmGxnkseZwBbqC5jBTH4xtDxQxijE5kN2XKix3e",
  "key34": "qPeScdivqAaGekub39pFHRYgBuvSsN7L7drpXdAPMaB2vBBinAMkUmTQcxPmpUuRykNyohYdCVhYjLtURSv9GW3",
  "key35": "2EvRDetyToCbXeP4AawQYEVZZRZkTRK2RV7fFzTERER4YND8i7BcpQcKbomZTCjimmo4NEyHZqjJRBBHUnDeTzLY",
  "key36": "2oSL8q2AkwP3T29CDtcrEvGmVoAsno7BmzZdixW5nW2eFc1H5p9VDXx6jQcWJwQYjAjXxGyUdGsGAwxnBAcqLYPm",
  "key37": "49jK8bYmK8QEb7ewriSW7pZnurS6m8QrwfMnzP945au5sQnYUyipvim1BHRumkoQm5Zsebu8q4sythRhHGweruwJ",
  "key38": "4bY9C81L1qSkEUJMY91oddQ9hVGqijpTpnZYoqipaMkKu3B7oFdouDXjzBVkxEk6pzTqSLkF63RA8wqaugYcbRxb",
  "key39": "5pZY7ApfYJDKs6sah3SYNNYcGAfBgkqoXR9SP8nARov2gBbfKfmRP8umEH75G85EGsvn1PDG6rWFGh5ZXZvqhhDr",
  "key40": "4DYUdqNbz4EwM1AKdbjLa6mnsAhD3MKSFpxj94GkUwzUU8LrkXGcSv6F4fhYyKrp7sHE9KVXhEJNDo65rYgkWsbb",
  "key41": "2KNu93AAVSBB9AiJYAQNMwAgbgYfNrX7vZJdKCF9QutDBxXUfyudun67sF1PmbpPtDLRpZjJdPPrTrAboa4QYY3P",
  "key42": "5xDEaEo5icMXDBFQCdGZRAJLJLcFtknbuXR1C89n9TkFDBjzMqdhWdAFhXPN7H7nriVJ7bZCEchtXTbw6DXMJ6rA",
  "key43": "4DqaFC1r4NWYL8bwvadYfKuHuSk8cTUViToVQ8bqdmUDEZSpj4dCyZdnbc8u2EBUEn2qtqYxw4PQy1dnn9XELryX",
  "key44": "5jEasMCafszd9fZeszHDET87XsTtvxUaxBCkgDb2PZJJNEN4keJABB5cBPf489AkRay5ErdNQh3mRc5d5hKLJGm9",
  "key45": "4aoAqZRrCqfKsuxFb5aQES2Yob51WcpAYd3fBoCAG34F13ruC6Jdc7Yt1izRvv1TmjL4UbMCHK2nFFMUmoZrGV8B",
  "key46": "4xKXub2N4WeHH8gAfHa2tpm1dJE7HS57yGbcUBm8meB4WPaGhHauPp1dTDD6CHrXWvop51idX877zeoc5t8EGGxe",
  "key47": "2EseGNba1Nv2kuQwxw1UFXyYr4uH44XxFyrawK92fGXGccYfNpRaEqHUo9kN4S69CgGKeJWb3YqupBT4MwD84dmM",
  "key48": "3sChmELToP9uMvPeppkDemGpaQKczH8ikaLSUEfJSTL1nb6vGSpgZsGj3evc9ZheoJTdtXERHCE8qbGyo26BaS7s",
  "key49": "5zyVpCbXRXkKDKTTSpk76tFKf18UHYhh8B7p7fzu3TE8MPJhkv8TGLH7XFihHtr4SFN6eddM2qrVfnYcZd7REcPH"
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
