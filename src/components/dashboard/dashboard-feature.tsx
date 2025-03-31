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
    "3kAybLBTHcjWSNmCGXRXR8hso8ySkGsDeGYDf7ADXTfg4sBqmeNBZFLxaqDt2REu2mDqr6ZdMLi9o7c1vLi7BHTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p2BZWmkWPkndADXsLcGQhFxQcis7StgKaqYrsxvLAWYgkFFNeqWrt8i2XoFCDZwEkp7YnjpmZ4BHaoHUPGwHppb",
  "key1": "5tDpLHqw7TWxz3n6jn6XP8p4xtL1EQn24AbWWHTDcXf9bwdkh4vqLwR4BgWxeuyhqHGpJ5FBV77uGrNDFVH4nvNW",
  "key2": "squwhc9GYAPNvqzXrjJUeQQwDVpm3U6EU41A312iP5XATgjWUBaiRzaxFYEqP9dhdPwYsNDr12xhfc5MfXBpGWM",
  "key3": "4sJ7LdyScMtPgHXJaRV9xyQv4BMLRzPB4BnGVHY8y2981SXw3DMAAi8ypCwt1LU7q5Bwev4tdYJBncqsPBFXdg8n",
  "key4": "5EW2BRnyFvSdTKCrJDbQ4R3YrJjb5QcbK5jJZ3vQEA8Q88Bfj41cVSdHkBcUKHpoSUzfkYixmH7bJnNwqstFd8S1",
  "key5": "3QpKMrymnFuSC6Tah6JKN8YszNVYuKLj8GVB5T9K4ak31deS1DdfyCeR3ELrJaPVFX2MxKbjRvuW6Sf5ZAFjzLCq",
  "key6": "6NVfoJkK4AJa74BFrHnDi9FaVKQw7ysrCxiE9eAZrLetfKPvpmVYFRDiYwFHNuw8Bwzz9reVKi7GmoPVpHVQ9Rn",
  "key7": "5zjDCpqfvacxwBzAhndknccp7egX5Xxn54Wy3WfLj9aDou151C4GDxKWnkUmWHtjGEAPidPpQ36cew1eU3dhGCHV",
  "key8": "QtCQwF3hkpHCu4XWqzbZHu5VgDkHDPdeEQ9TJQeG73rsA5peJkTKvFUQRTgre1kEQCMYsJXDw1cLgoFmP6RwDEm",
  "key9": "35RnSKMc3Qh8rdacQ8DxzUYZsWrczwd8VzvxnVsfAJ1X5wdDQt1uwht7QiuTfYGdgatU26uVSsMES4ioNFGrjKpe",
  "key10": "HxB6Lxi2uWXinwqVVLLcHzRk9M3xHm8RX8cNLhR3uHWw3UxH6aLJt8ZriWmHLPyCXZs7dzGAM2qrEMTe66EWLQE",
  "key11": "6Dnbm2jPW62W47xjSSvWuxHWw6JtH18qkCZkKCwCaHTE3ea1QKCcW9FNCjWB4QB83j4SMPMo9oLg4hVYnw1QsZK",
  "key12": "4bvuzsXxoh32qppfp2b1noL5gNZvNCsCe8JGHzBWRPsuXZA4C8C4thF628KFZwPJk5cbANUgNfQzJJybqiMrWKGe",
  "key13": "3wtG5NAGTGB46CfgZLpXSJWGWxV2zfMawRdG3YB1NCFBHtg9woT69e92H9EgDvVFG7WWzHtvqB6yxEEY1PKrMutG",
  "key14": "3aaLGKg9pJS8soEjGtPrd7M1qNPDy1LxcNYJ4HDuA4Zq3zDMjPCbi38ejbc1Xu22NPtpWUm4zTPxFeD6aj8HaTCj",
  "key15": "2wnNBZWxMezfkmxP7671qx3Pz8Wq6gtQ2eofkBLqL6zWTxuxaMzUKVgRaHTB42ybZFmEoN9DYZty3Ph6bFL6sjNz",
  "key16": "5STGaQPNRk4Z4cq6dmSjrZ2QPMig1YpLp62TTuiSkAE7MEEVkgcpeQM89Mjh8fxNaLoLok3qyoKt3cjt4hXfnYtw",
  "key17": "3JRDjURWVP9nPnUrf37TLKWGw9xpsBngjsF9nqrvaqcQichR6xh288Xm1sk1EUUTm5W9pi7HcVuVhxCBWa3ptsHN",
  "key18": "2UHstXaXw7rewXZsci1Xk4MYLLWi7LR6zDUbp3bmsQfR7RkgvhTFvwcQUcjUT47DRPioc5ytLLusa4M6LGDBoVuM",
  "key19": "2TmwsL5mQiEQG7XFAfJWwcyMrF22eZJruPBfUijWQTyDrpym3iBnbnBNbMjiYZdacU42GoVhQdeDuxnt3kM51yta",
  "key20": "4b8Yy2o7Ts3ZV5HH9uGz326HXTDvrswRjU6KaqcXapNRpUgbKh3aQnJgeGaGbArVTENRzS9vTDNYuYFU4zdnaXy2",
  "key21": "5fxXw7Ah1HJhQAkHbGYitTPtgKzvMGQzTuAwRQnMuPLsLJuShDycoxCB2jZmR3bHtpSmcMGfNnr9aMbkTVHXWkNe",
  "key22": "3t5nRYsi9M8GqvKmd3RQimfW3aVj6R48cpeH3we6GZHKYqWvwfSugNH4448GYhdGM8UaWB3TqdScmCUr4niB1HM6",
  "key23": "4H39KRtpaPNnPU9jVnWZ5qY4tbrpVQ2Dw8ZAkg2gpYxt6zKAACNeMttNhdisjop2qurkNXBfWdjMFhmRG8ZTZo14",
  "key24": "3MHXEoYcbEBGAaRDLKbzLvkZE5MEtz8CftfQowQG5txvfg33PCjnKQWsTdQGU9JakSb3n7yw5Ef7hsnyp2WAKq9f",
  "key25": "3iwtNtzRRPU3Ar9Tgerki4rCFGPsfKdAhTHRjaaBPspw8kZ6k6s7uYLtwUBH1XHFXYWCA4rbW2aaGMnLmNbpSFh3",
  "key26": "2Tg2u46mEM6R4UtymDJiiid5AnNrkD5cMFZxv1rnRmHxfFrZhmTnetBpAmDC1xs8feAJcnqhWHHjnJwstBW4mVmt",
  "key27": "3PfVKDai8Kk6dm6N9LbxEhq95fbbGGxckZBjAASa3qYJ8yAKWLBNshahme1pk2Nctk5Tswc6Kx5a5Ewmva29NgdG",
  "key28": "oAg3twhLAjxycnkTtXc2BWKUoPWxpd8BAd7SkGYqk5RT4rZG2FeMmT6vu7jXVSWU9pDeDZSRnPBwcp2cPWWeQ9b",
  "key29": "3C1J8DXKSaBdEZTQDVehusBEwk67nz5gMPe3czyjhXCF5MjBkTPtE2cEvy8f32kYJJM5VdwbWkM1hpGTanYFQ9qw",
  "key30": "4Y8NF9L8C4zkMQJagr3WrKrH4DAWSDFVJHXvLNDFT3wGtPfsGG9EYAuUzHZtj7RacL8Ep48aQ8FJgfH2J4xPRnKY"
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
