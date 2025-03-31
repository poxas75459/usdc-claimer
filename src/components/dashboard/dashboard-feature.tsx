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
    "55ACS4XF8ynQEBSLkrYSBmfvCMvEhTz9Wkq14LyoCWMD611VqeLipntnbVgwkJrhJhy8H9HLwBALbMTLSe7SdwAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S92shjnhZyCCkombcVGb7oTAjGVcAnDRnEzYHqkpfivaWop3he8WyQ5q2how7r2HFWsfdigovYbtDdNxD4mvok1",
  "key1": "4s5RnfzZFCYCYRfUybp6AiGvXZvmT2bNoaPoBXH2cL9MNvNuvoUeGhrS752L1r2ApRT8DPTYVoFPSDCBQqK67pGG",
  "key2": "3KYgu2NDWaC4Nvp3PenQ6wvsEAnKXvU24CjNEKGk1v8yrXzeJb4jHpVuRSBtz7rFxCJkav8iqp2Mck7uog2WNYQD",
  "key3": "3ggHJ8cNfYgQzzJ4neKCJKfQ9MBYgfaAyUBt9pBjDCBDvMiPrygKF9zF7MU1Cp9WE9BMhJn1cUNn3JpZZ17czaEo",
  "key4": "xA9EzByBdjHxcDUGHDqKbZAZchje8aFWsgQMBua95WxfT7PqBWmhuCZbLGPB34Lgp8ERdVaZVj3DSjrYNG76Bcu",
  "key5": "5JZ2iGEguWHXGzz5FAegQxNz1KRZ7uNBUPaBquurHY8GszGhpVChNEcYFvDHtgkV9NwUcPaaxzbjghxTVKRjLz9R",
  "key6": "34PnnUk6EfnYTHeGrrVeopoKLWnN8utGmzET8g2VGtfwKEE9DvVZP3Sc6S7Zp7zAfEA3qgrZ6zh1DmgGzNjamKFx",
  "key7": "4Dwst74KiHFpT2N5UDYyTUz9q4SigHE3wTioAWNFtGJUnGvwGH63jDN6RM9jvyuVzcGj6doxAKyrrMSbZq8yf3aK",
  "key8": "HfGEMuELEbjosCM8SwvFYj4f9gWr36TiZaDykMYtyq6FH4WobZQtC7qHSU8S6mdy7gwUcnWeESZ3Z2eN3AmqL5k",
  "key9": "4jNg53sXoZG9ffJ9syJK6QVtcKS4E7XfYYDuCeCRiGHC87mJsNfNMEcwfaBxsinouFqojjGvPURrvceDfWvQwAtb",
  "key10": "2v4iXib7HtTWH2RQKxEdfY5q8Ko4VBEkFSUp4rxthMNtF9Ph6vs6WoKJvPTPM814LWEr3f9ZkbnbwpaRjoLf8m1D",
  "key11": "5r5Eaeni9H2FUmmXr2jNUqaWxAifs2m4vWJhs68hTzuByJBMfGJVHrLp5mhbHZxze3XXEUchHtQ2XAgCQQPxDZbH",
  "key12": "5QC9HF93pFr4caDgK544NuRJbYm6Fsen84LNoEonXVy7szXyFvL7SYQzZGP4NgqdUVnhchYWdwM23BHcVic3xpvy",
  "key13": "5aUxov3g5xUDMq7QJozwVfSm9WvVwArmv9M7X29hEyEWY2r4MeVVXAzfmGUojZtxiHWWvCaiTSjQQsWKqfYghTtt",
  "key14": "5svnz3ZkiQ8L4CPrMZKRBZaCs9zRPwoEMV1jGrMxguHFxJJ86zThCGGdSexjf7uSpjkVZ4D2oyJdPsQPU18jRuhN",
  "key15": "LqhHEgkFoHG9vqyiaWTQBeLTtkF92bU6toRREYsy8HfZ4DcmCUwTZVPNwFSFnLUpXVgHJu6f2jeRuPcfCGn5tbw",
  "key16": "CTfRL3TdLPPgsAfxVZPTVwt8dquyzLG8kGQjaeUBzfG41BZyngNdEE5Wg7f7hFRwKCE1fLCGbRwyFSSdL9UdeqM",
  "key17": "2jvMVmfp2yZwM2gWL8Wjdow7vZ4WbQb2sz8jTzB1vMuuqocM3jpQLZktRoC2upeAJTLb4gCHgGRwPa7Rrxhho6C3",
  "key18": "5cun6e3YNhASsVTyq6EjK1S8SdnTfocafD11n4jnNLRt2U3Y5yv86HmxT4WsrKeX5SMRMiCx4orYZWf8HcrxwqGp",
  "key19": "36hTF9a9JqHJ31HNjrGqFsdqkDBrFcsv2RBjPKxnDKtmtJ7Ee3tQATsyYkDa6FnvpJXD7XX8AbNmy38pJ1cU4Z6j",
  "key20": "5S21GcMj8Nr3yCphTu9iqbGMiz3mn88zb6Xmk56ZuufGbBCj9hvnyvCznqiZVEGvkPoQYs1LQAkefwYpxwhPmdmb",
  "key21": "J399uBrUMQLJJfdzbN2PqR45fxzifspejAMTdXTK3PeiHpxqKRWBLBZSPuKCcv6a2fSjyCrz61FFdRa5aESrksv",
  "key22": "5Mki3vqnuaECYSfFvSrdJEx4XVdov1ujDfkD4WzUr5ynGiZwEFadeTrZ13sRJVi8JfkuFyGGY82xZTabw1TeNseQ",
  "key23": "4nJdPayXWC7WMzr17QRvjn6fQFqcLhXrzVfgVMVytrYiu6iTUKCrHhKA1AyeBezjRonaVhseARZhWx2E3vqqpb1o",
  "key24": "5sHb8Ba2yT9vPpfZyn7dUXDLYKzcpAo9F2pgg7VrpWSdpwdxcLyU4MfCGDy5MzfCLsqKS6x4wahsdM7gx6UrAFCs",
  "key25": "5snFmLyePxfPKzfwj48cWYsWrFYGHsFrSvexSUiFPbqhcnAFNXY95YC1KbFwK1diYWEK9QxRSXYV5qhZZ6brU3pV",
  "key26": "2gWc6HwebmFJyreKe8gprEbk7KJXdeVSaFaujUWkRrJAbfwvVJ6AAZaEKdfm9CfpcqWi8Z98SP6G34V4dmsqDFaD",
  "key27": "5UmzyCFfVGg3st8N59USR1Anqm5XtX2QCD2BUGFjtrA1V5Fe1aAhBGMnWUAxa5unf3kAnDFJRLYeEH5zMoDmTxGJ",
  "key28": "4tQvvtaXzPYdVyugEYUpMZH3PEcHupNV2KQaWbfMZiuvzo7FA1Z5oEH7C4Njo1ugeXhZfShx1sCLLGbJB5FoRsAi",
  "key29": "3jPkVD5ema9hvPoj3Q5NA97kyunGgfAq95uwvLfWW5NLP418979uVbDpYAV1JGNDhnAtht4ATgqaCVCeYwbvxPYr",
  "key30": "3aWQCZLUvKRDTskuvjAYVKeWu457oeEHu9h5oaKuWDPju5JWWzJrRtmtfZqTCxsfLkbFNLVUrHNiPYFzKfE6rioq",
  "key31": "2RtqaxtBvBf4JBzw8hnGeJa6SYoBW773Jxuvwk4jHE7ZNkoujQwSikG26fCaL9mhYKhMJBba3M5RQhw9k9nppqC7",
  "key32": "5T388BqVbC9iQUmtRCUoFhCaMouf9giMyPLYKT5KznCqcBtpzN9GFm85uXyv86DZ2ZLVywaVcRqKf66TipyLArEs"
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
