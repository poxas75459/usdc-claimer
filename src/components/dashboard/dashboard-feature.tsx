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
    "5gpRBxQipTuDkHLPDJsnuYP6UsBywBbGVD5SAGUpX2KTyJsZbkz5xhq8E7YxBESzLqjHbvXLxBmHAFgKFknCDB6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axL864kvvVR5S2NJ9nYRDqvNsnhRABRGzpLep5XX2WjwRLbipRSXvLtyAHJ4iggy32XB7nU6XJ4BAjDojMUUb5U",
  "key1": "4ZRe8hn6cXoYvFrXDwZQ57h2RUWAuJhXcXtijWp4YgEJ5nQ7mbDPewSqmbDN6BN5Dpsv1Gv9Ax5BBnrA4GVR9BSE",
  "key2": "3NRPbcjuiq1w5ePwfGWt13nG8ToN74FU5idB9u73yUWaDDpV98YJL6uismy718FsY1SZayisARoMePi6DdmhYdmy",
  "key3": "4gRHBuAGc9gmfdFDDXDYPUpYmcR6bYxqmfj7F8p3f6gvy73w2w67Ex8qXoe6VfnshZy5kFzW92QSvQUbSRh1euEM",
  "key4": "81j8Tu8cqdWB2eyGgbcGbqGdKN3BE51Gobih3Ltna643RKN2HwKBH8JDzEXa6xnJMsFnmd3cgFK9LZx2qWgLQV3",
  "key5": "2xc4sMkMjz26Pu5yeidi9uT48EdTmuSUwVKm1mMHfraBZAVjrU2sVbw7CKpfXLvgUt6vuULmrHXUxs3Rsyy44gT9",
  "key6": "57ZvVR54iTCUedEi4Myd4G71SDchXJ9isp6p5wSre4ehVQFt7YESXa3MPD2e2g1MtFgvebSNBUTsnWMGQ5AMwAH7",
  "key7": "rTYJw7MHdvaqkJyHJZUFvRHEnxw1BwW6g1LKTJV7qW4gMyE5nAXy6oekDh7RGBEderjE7gwmETiY9acJNHrqtKz",
  "key8": "3SWUmR6CXnrj4u65RJZQ8cDQwLsZA8SQZwfUhQWWoYNT6N5KYzFnGArTVPCRWWyE5mMXQqnhhj1poPJiuXHGQZct",
  "key9": "ngCyxfTmxwfDTsALdFGCxRf8TYTwdEvV5SeFZUAWsqhYCFpbykxSTnkeU4dPBNHSYNtZ11hPznjrKGofCAKJSdg",
  "key10": "3joQBrQUkk9M6Pqfuh5XMJNtTgFfmzeVZLoafNAQWv1CAtFmm3qzD4xdV7uk79WRC2yuNk23WKdQugaBcotqzB5X",
  "key11": "4iV4KJUHUg2fM746JWHumcVpH8HeScGVrHZtaW6pDgsLQs2TrJw3orrcpiHQzsDUh7pSFbyheEZvUgUG7aB4iujD",
  "key12": "52VrpCmjFxTGdAvpZDbc1fPfA12Ps3n2Ugb5WykWhLmAphNGhVGtUEGc4a6RsouEr23Geqh9ao18hvAddDyvRMRg",
  "key13": "4gS4oAfiCKV1L7yFmhkC8xprZXbHagdS43mCcvM4hDVkvGrLBCJ2nj5jKNnvbzDGNEtmLU7nhJEJ4fqTt8q2DzFi",
  "key14": "5LkS2L1RUuvcRnehSFLsaV5fx49NhRLQkRPbFwAKhcmXdoagU8Pu88LFy57AE4uwbrY26ozfinPpHJviQwCNJZLL",
  "key15": "abNfoktaFa2UbuLQNtYdP8KrM57CRB9cpodeiQ39pt3fdUM7F2XAVwg9J3FgoMjaXKFp3C6q52NRPm6ZyzhWQL5",
  "key16": "5WL1gKrvdF4TaFmmz683i4v65EMMMY2GnatLCvFgUaheTEeFndnZzU394KuGinRw31AAGeuQXaxb2hm7MPQunVdm",
  "key17": "3zDUKwn3CszKQn1Ra2odC6UGYp9vrV615LL3rGQY5LD7RJo6TdLpD9MKJQB2XWMwKaLW53he3MpnyG4iR7qLAQSs",
  "key18": "3ohHLUpDhB7SzSvxjvzZ2rjzY7RwWFXViMpNsDr8daeWUN2qbrv4vKrJQTET5BWtZg87zF7GirPpRshicuyLFGbT",
  "key19": "wZjssGwcMX8vtiueUbA1RDVvUAKcRrEqVYyPRSi79eBuwNB1C3HUbhBFRN5VyeK4xnFvp2qA2AxMctmULn6qkKT",
  "key20": "42bHG11bbep6PE6swXJxo9W7MiBBRmgZbc8yfpLcCJRN6any9uDkK3nAPgMuU3DY7qeMxZ5xtPwN5zaVbxM5GBPi",
  "key21": "25DdFBpcC64XPwxYqsNSBEko9ifvPvYDkZBFB5PC28cRQqfWE9f6Wr5UuUFFzqPq9bcbJnuU1WUwaEVYHJa9mk6Z",
  "key22": "2u2GpqKm6Ypam1EuY9MYGfgqxNXk1T4QSqYDobKRL6GL2cgt9aPoyYQQUiynX9kSP7WRGBMBExSCcEtKGvRBXLxX",
  "key23": "5zLXoVwcAqiGfYn6pkUjCqY9tKeq4wP1Fc3f5XPaDD9c1YLJ36BPdy2rLtGN226J9iGvCLjEq7fcoRcWnThfx26Q",
  "key24": "59An2QGXQXvvrLFceeSZTdZKJ6tz66RRQSRKkBMfmXCZ3rWFy9J5frcMnGt4iJ3PiZko6j4E9n4rzLDw1HYiPRYS",
  "key25": "3ENvSyzGaP6dVRWzPtX3wYNU3FbwGJdPs4MbhrQNSD3zBHZW52sQPm91s1j4BBAsY5mCRVLK5wjiSg2VYyVbwhpn",
  "key26": "2Fh5U48urrHzoZJspJU31R3NtqdJEK3jrQNPmjPZP8RDcE9y5FQ4LaCgWu3og9Xe655bPwW9sJbCpEryWvtsk9pE",
  "key27": "4KzsdPcWWqCPV6KixwPcSvFjcbsUPge143YT4gnQ8fyhTvivLCL63Rasg7LtBMW33dmzM871mP2WMWUJxp7rQPv7",
  "key28": "3jSKHiGN1dNpQ23nZoBxK6vKaV3DhtBjqd35vy4JmbvpYvEQHVBEMPPKFBU62F2NuhND1es9cczkDfnQXoTTufqY",
  "key29": "FC6pvfn2AkY833Dk8su6ioQpgFtKG9xEdHtsShQWXzJdX9ZGMTrgsHPNCM81eUqiaFkxHiA7sR4KpE5Jhi4jCaS",
  "key30": "2tFRybPAygZQ76abu8dD6GijW9bZhTY3zgykZEQMFLn1D2QD2mNgzgHBdhuXq6qvXNqXxZ2bj7cmtqjL7vH4Prcx",
  "key31": "4UTLHHjvYtVU2MrLRu3YJR18kbj7djDu712M2MKGVCytzVTziSYXhAZkdhmVpuivEBTW2LTmoRCZe2GGYVEuMFhx",
  "key32": "5LasUCuRzFUEJgr6JdaiMV4yy7tBo2bcgmXNHef4AXumkcyt1Wvgukk3wsj7Yr5RALiA8rY8zU2vCsMZS3cN4XDk",
  "key33": "58X8HQMxX7UmF1BZWqC5cmhYBuUAaXkqVHLaJZ1W2ENmJEfWwt5yYX9zwNZoKCzFvU6t9W2ctbNWRxujDSV2EiwF",
  "key34": "2zmD9VYU8FgsdBcR1axU7KYQC8AeoxCccg8rRys4GjuWSUyJFMFMEM7VWfCivzgGiCuBdxBUhjFZByc6CJBeazom",
  "key35": "63ABnA6r1zyGyLDqzAzAE6dcNDJhvCv7UMGaMeLLBDabYATaQ9YGYQkcUZoAcXEjSy9GaVTgZrWjmEBwPKwhPy7X",
  "key36": "3SVUYdRQiJ6AnEnyVoc4fVfguLSWK2JoM5wDpMhm7b5Mvk9omcSDyVQJTsrfsDp8aQXz9W8MnY22impRTpozt3Kz",
  "key37": "5PNBCSj9Mbra9DMQGwudtohXDPxQrxDZhgq8GrFufhXDxtSuyDLAN2LYwDWiCMvaPDATCNZCSkjmEQb6Zs7C4ADo",
  "key38": "2MN5deqCYgHHbrg84599LHrMuCCp2X84yVcp4LUD1uSaUBZtmwidttwJGx3QftfxsEZE3iYMtKAF3sWPo86wgbbY",
  "key39": "4oMpMkz95C3e4JCQbXouz3Fb8hHfJ1ZJja8bNwEEdUNwH2j9ZSKtZKJSRzUwumyGiAPpY51RFgEasURGgofEUmrG"
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
