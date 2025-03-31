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
    "4ZEL4ruDxvhGQch6AtayDNnP2B3Z9zZPh3qcbJRFFpsuxwERTpHyoLNV9nkqrEoYePJCdHdfJG7EAWuBTYB6koBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mPFK9XeHMqaD4xkLnLE7MVAXNya4Nd7pSuYWWSACTKHQPTVuBYEssWXA6CyxcxFW9BLXs59MauzgXXdUkW8F8Za",
  "key1": "trPktV4rJNhMWNGrMgW2m4qW2kfSMEiHGiFyqs6HHCfsHRgwWN2BnHWuAfQ4GP5mwwY6k6gqpR5GRin34KGBWjM",
  "key2": "61mPKSn5AfNwNsabhqXCd6vbetMvTSsb8H73L6vsFNpaKK2zDwgDdDJgRJEnmjDFXTJiFrvhSUVxyBDJmdxTA4Ru",
  "key3": "3uX4RvbJAZb8LPbuvAYg65tjQsWdasV4HGSkgDQ5QhRmH1Pp1UW2EmcS2Nkt2xafW76QP1ncRBFrxstCBoALZ8ZJ",
  "key4": "3WPWEFfZSTSW7mZKxA7uzLhUV6VU5tgSK4wjvSCCquJBvpBVUwDAGpzKpgptERwEXCWm948vDVVgmY83amRLCLy5",
  "key5": "4PDa1Ft2Hgg9N8X2AktQHDJ5ZGpTiyWXGcsCQSMzgHviPxB2Bxg8TR3GgqsAi5ggoB5k2T2T1SwNRHxafFw8BouC",
  "key6": "3UqnYgMm6pgjCgC5MTUM6KApH152JrypurjmoJJ5xaEdrMiSnaKv3YsWfFZPtJUzwoN2FCru4LaehRU8U5iVSNmK",
  "key7": "4b6BeTFaEN6pt7v5KTEDyzKbyJm9UVC3SJaeDkZ1S1Ug7FFRiXetH9ZxWLqgxYA9xvMpcJcD7P7sL7UWHBLEcN2w",
  "key8": "UXXteKjjM6v9LMoVX5noLi97xq5gaS2VgSuh4LWh3gUuQk79yj3gk3miEGinkfm2LqEhEcaoPwQRK5p1tJXk8R8",
  "key9": "63zkV6W3cJp6hMYUr5iRuHutZBzeQMqijFA4Z3tH3fNRJt3VsyUvqYvng6U258AYkPxE9KGhfhmsH71cBdbxjfLj",
  "key10": "2J9yz3cB12pZ6D38mJganaVvNXYVBdxWYahffb949TYQbmi7jb9ssVxNMdRXVXcfS4MxS4oxtGiKqaEG1RZfhpWK",
  "key11": "3tifTRqLC3ZF5hXtqcfAWRGCuW1aBpZcS7aQAoq698LZ8zPKE1qYfwpGx7qTKbSmkbMLA5bNuLsa1V9sDckKHJS",
  "key12": "2AsYQ9wppXFsmmK2Vwa993ZveqwrmwScjtA5hMy9c3sWtcupQEc9GqBHjL5spqmWnrnxzwMMJYWDDqUJ7i5k1riA",
  "key13": "2Wm1Pc6Gm8zeDi7pDgEPpNZZxSdMTuY3acHDGhm5rv8WATb9MZ9F4xkBNPRWdgNK8s3LUfDTdQD3TfR9QjzzjHaA",
  "key14": "4FkgcPkS65WGhxsuYmn87eEm7bP5bSo8K6ySv6iheQ9awjJ5xgwLJWmFsHdajHUMU2FQdmb3PnwSmZ9pzVcVkA9P",
  "key15": "5R3BNB6hxF3g7WiTTWAuSMPdzPm6nHDvVKS4ZjCxVpJaTFnWjnaX6mdRnBWgmBCsMvMFssyZCoyLFLWcXCAMG8MS",
  "key16": "3XyRAozUtYbNtrFyh211YNyTPhEsHVxSX2p8AS9CiKvEtNbEfJFtgyv5n8PbbAWzLWvbAv56HTBcfWFpH1WfTbrF",
  "key17": "3mC3t4VQcmsFZJeTRt39Y2ze1e5xX8FazvMFm6RmktGcuGucBfCAeo5ZtjspYifDRbHJF1iRe5vuamsbBVKr6xAV",
  "key18": "mLoYLLBddgSCkcjwpn5N8GjpnkE5TwmoohvDysHFFoP8JV179Ss2LjUT9nWmEwyRpMmBFgGL8X9rh9PTNdz9ScS",
  "key19": "3szSjqu6seWbkxH7txkCQdHyZ4NyqyYogiK2rYj8xwDdEe9rRqKkCQuwV6xuXsYRTsWeB4q3Tem12M99RLhN8thG",
  "key20": "3J3sJEP9oU4dsBC8CffA7Gocsdd1xWJsqk7xjFzF8Hav5qZdS1748r3nLmGbbS4BYhwmCAgc3uLw48xK6DYrUA66",
  "key21": "2fPFhTxrdzNZZqxAcgVhf6EVqYMywY7zwxgXuAbkr1267k65bU5imdmrvJSBmmK5qpoHmPRbveKbcuidGwMLEWXf",
  "key22": "47KHhPvt85KDkRvowhEEYXXjbeNa6UNxX5gScfKKnezDKioB5PDrXmGCQnK8DGqjYKKbFCjBL4JDZKKyAuaVBvxf",
  "key23": "4ZZHqUC3JMifvPyLsb4FF78B5EyVjduPj8GUmDiw7Nx69E3ni8dCDmZSmQ2QAkeMMPTg8MpWbZvwyFUzPSsFJweP",
  "key24": "nZ9PQZR9cquGVCq4uqmergVXQstUcd8Hi5E8j5NqPEMoDUwatiKphD2MGqE5PUKP9TtAHFtPdqDqm7MhLcr1ijR",
  "key25": "4cC7LhSBj1m1ZUtWFWePfyZpFHmewVnu15RExxxgWtdCEqmKvgLXSmgjiomndmgduHbbAqdoxaBJoRVkNxkdums1",
  "key26": "5ESjmRvJGCzaRBktUK61M7z7hyv1CHZoN9bYTjpFx9ELsmdbpaZ5Yt3PWiVDydDfVARfbJiivbaLSfGhkHKaMjy1",
  "key27": "3ULnnSrJrvEauzojzktVbWa5jFLj2UEsZ9LpT41qnTHTC6An5sJjiPppknFomPsWYH1FXcGFm6XSKooUyywG3L4g",
  "key28": "59gY3dkWk4EowLTG1DRLYje71ZVsKJU7DvodAVDPTzs52WhWGTcCXA2HMnDcyqpqG9uJ8jGmwyRgBdmiXDbu9qhP",
  "key29": "4d6nfGYUtQvv6KMxR1816ze5aqGyyBQEu42NE2j7vQpym7smokCrnRBL57tqhsfdemJSY8ETUbD6YGUfut9PR3zF",
  "key30": "e7jLNPqCMqeYhhD8Jk2T45r98RhEzRXYafftrW67WNmkGwcH75tWAfipugQUdwx4PK8jgLDw4XHN1VQhneiQ1Yb",
  "key31": "2HDz8rB5qbrTPxEJzzLgsKn438W85cYemzj9btwDzDjCMZwhSBUw7oJsaGBox9YuftHu8nkqxADrCJ3hJbbmNioo",
  "key32": "JgS3hK2hyvVpsaKZFMmkK4cN8drSX42oNCBFxbeXiHdYGa58Q751rox1NR4ELVeNV5X7rk3viPzqtgyNkSnj8FW",
  "key33": "3yWxHtofPo8tW82WT7JaNaJLZgduJZVveNe81WyQYusY6pzsg8V1iuEuLbT6pFUmDDrih8Cyaof3C59HYPNQqjfy",
  "key34": "4ea78TVS1yuCdXVqDNERiCFZ83sPcyv7yNMPqKQ2E4D3tNrMXoeUdYufgiTr51cQsZuMAm2EvnmwjSpKz9Cy9RY7",
  "key35": "4SB1t9qC9ccniTPbP1GkAeFR38n8tPHTsCR39UaK1MWgoEpJGPJJ6376rP6xJQqQTJEJreun6XR1XXqj6UjCdp9K",
  "key36": "4h9pFhtTUASFbvB88C1uEMaMdppBbwBkSeqo2UEpfFUe1C2dsGuTdVxjy4JDYNbeiodrqtRwoVup54XSZrFA9moH",
  "key37": "SJde2YJYas7cm3ZWySJmb4ihiyrprs7huJqJjqdwVcK9Z4eYe4Yn2UNrcn3Ht6Xp3oEbEMV9JHgCBQbiZfxPFKN",
  "key38": "47BjQMowqqM8xWw5DmFzX9Wy94wh48T5wPVqzTczFv4ZVAFJc2vUDXerRbt23EKEXkUjojwDpN1gw3Yr16Rgi4RS",
  "key39": "2Pr72VohaCjncLihPSaTpBmHQjGAjpXgiQhwQ5jh1DG9XwhjfGKYkG38UqQG267oMUK9qrVhLZLjMJLsnrE9fDgW",
  "key40": "4HkvGEHgqnmDkJJJPHZDQFRhxeAtUrKK9ojncsyYRrfnTj73kUXfB3Z55Gu6nHWgdmF3QEWVyD57DFYAuzZXjWgM"
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
