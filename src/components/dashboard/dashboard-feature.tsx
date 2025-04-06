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
    "4YMXfi1emgNT5YqQfqsPj9xfJq5tvnTchHPHUXPipi4E4ujwZNntoiwot3qr5Pa72eznCUsoWcgHh4M44N3tTogc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccf1gyHwgELYxCaYyV3bz1z2PZV5zWLNCQ2gnr9b3FvfGwk9Lbu8TABMFQLHvjTNUo4cUJaEZXCKU8TQ9bFf2aF",
  "key1": "3AAjQKsS5JVEC8trikHCmvk422du4WwDy8k9kUW82iF51SeDorPw4qrJa9DRLMGHQ9A6MooRWabwwWt8EHHhRjUJ",
  "key2": "mBYWaBVTnrVz5hrNHCgJLUpjsvxx1c81XyeR7Zvv2rtgj3tEHf71oHQ8XdfB6aFvACEi1SXo6mjh2rXUMeGe1A9",
  "key3": "5AoHZFgXJfgbn1tmpjGYpup2XY3otp4HhFrpMgh5Er2y3LQcYwWNfCg5cqeb71s3v8SM4ft31bidLguBP5Y7canm",
  "key4": "3ngkqjc6nqmXMGsW8kcUoo7FNm2iMEM1ytpoC1F4M9czm3oXf6DJMA7Yp9BhQ1mVd3nbqFJPtjcc1s3UNcjkLswe",
  "key5": "5cLtw5kVragaMukHPd5sX1jj2V7K3ncesu3KP5QPQQNFebevq54Y5iR3qF1w1MB2VajGRJjJjngrW4XRHhgsoRUZ",
  "key6": "67mdGVRbAyzLT9J2TkBueAXr7WfKgs6udVBd8s4i1CnGHx3i2TVN4oe5zFrAXqdMJ1nKMFvWW553ETr2dbL5Fivo",
  "key7": "4PDs5o5fbwhCf3zhLQDHdJ5wugGqLc4S7A8UZAysCHnaqLMsCKNxyFHuFH7ESqhzV9aQwXQ4yt4XichLM4bBX7iB",
  "key8": "2SaiChDETvq2dE7HfEaWeujxzgzRsSVsx5H7cWLp4voHeZweV4ykTTB27PsuRM1FSWH4PR3afFxHPVBKQLQ6mKb7",
  "key9": "h2dZ4Gmgp71zLECipAai8hqehGbV3iAnyGgLuVD74iQVqJ69TrBcBR5Lcbij954uav6q6bngaUkjQwFmeGrgzrC",
  "key10": "4RMXU2UWXffn9Ns6caA6Zth3H4mw7S6N8pjhQRTMcfS6E9yGLzoXojr62pQZpzYXvBTcfprZPN6cKFxNSNnEQXWC",
  "key11": "3KwkPzVUjrhqhzdi6xcvzEFwiKnY59ynz28ztWQ1Hi5S5FrDLEaiGDKQ7Fgf82kRtQwpYfrkh293BZZqJWPowjpP",
  "key12": "521CcXbPpAeH8fKkASncAJeMjupEpWGxBks1LLMnrxD5EgtW9pYQHsUwW1X9ZB8vSMsYGqqbf5J9v1nJKBm9QMwR",
  "key13": "ux8A2GqRBeVFJe8hZ958RkJ2Jpeb4EoJfb7v8S6vFfHReoJnapUygfTETEnWnVZg6TnL5zbMuiCdUQtKC186mUP",
  "key14": "4Pwe3kWBgfYeqWeP8NTy2KyFcqFpdun6JCjqAxCmhzz5Vwn4zaf8oKJsstgHBKAEMUqDpVhknuPLFNp5QSF8va9Z",
  "key15": "5XGWrKfWAGEVL6m4duUqGJWW4L1KkfPRfzdkerzVJdnA6AhUkYKmvwGMwhw6HUx4fGYXTcVfWGc48TJmp74rM1hj",
  "key16": "3hh6zrDNhuBdUsrakjB4XAEowJm15K512GGMsKzJiJNmNbpAtM48GWEvKsYaS6W9gmmpMgayX6AZk1FWWhpT7oyp",
  "key17": "4XULNLVbVw3o21g2J9GNc2ie8Mr3s3CgueiXfQSAUs9vEr3pGnMaL6v7TuMfY8huboCGjKSx16RX3bDYGzhH23hK",
  "key18": "66NyNf8tZqyJZATpJG2RjJJyWxiiLzLrwcdiEYPtf3VtkYYNBviirf1JPJDgitMKEwDywgy6swRgx4U36yeEJm4x",
  "key19": "5NjYPGtmBqhiS7cxdNvn7G2w7E5u5F3eQuyDoh53z7bENVVM2ZMm5MivkQChniniyQMTeNejsdR4NjGPeaVifMco",
  "key20": "3tDe7noq9xEXG1M9EEUZQaG3Gm6dTJJvMHaWihrf6nrvasa8U5ukQp3x6kJ8ZYBBWsTujQptMDspLoWkwxHjNWTs",
  "key21": "31MLjt5mCWbVomeChkV9fXfAH2a9JMY8RA8R71NFFLBySdGcjJ9SRdMEEQyZnfnhvwATpdt1uz5QJpz3EawDRhTf",
  "key22": "4rFADumQKXn5zZciNdmCjX21sisBCVwgurgayJsXwZrmuqoLHdXWxKhh8R8VK8CefHEK4H83h6oLHpiVFWNiQK5A",
  "key23": "2y9yY8V1cTsZqfg6SbRqcRaB6vww3nwypHhYdMb8zDstbSt5gQfmmoKD2T23AuNahSXi55DX8co6TGNapNDzYZA7",
  "key24": "2LAm9qvNVYtcEQASDvpW71BcbVALweon7zGvmPYMRH5WzCcuBZEMkkLiNQ4SvaozYvpCGTZ45U7JUBgheXaEFvrc",
  "key25": "4cent3CwM9pcE8C5KFod4Gph7LrjPxygfmgpTkKnqn25RSq1sgFxX45YiKtgxUDZ4WccCTCtrvxLXg9HAEMKyZ1w",
  "key26": "1TEMuktALGqxvQnkT9xNERb9v5DyUeJehLM88Xd9rvhtVYdMRY6tPMwaAxqM1TvwX7joT6BazxxV2bXP17j7c5g",
  "key27": "3uxQKoG6yevsudcx3NLWNQb4g2kHdtYwqkYaz9uy1dxsDyECXAMm1sv4gT5cxjHobfk5DpxEBEGVLmvwaGreSbar",
  "key28": "3gZ7KJdZBbuArAtudmX4e4gZSC8CS2DXWAwKnefDhHesRZPWTUMG1WFq99okD1iHYsMxKLQmnNiEoQQZQQd9seUK"
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
