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
    "45nt1smhJbduY7mNq1A4rs12B24itbpQoLGS9LLfNTqLWYRV3cD1Vivosc3vJZ1AepUP4xFvbPmH7Ffuuzk5HBsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSBxmVej89Xg4BJxyEcpoqFBAX3n6sVrUbvfQ2zmovZwqms643VUQ28872ynTnRNeR8mg9pUUiNqxjfx1ugP8qb",
  "key1": "3PUsgxsMx1KdF1gMFDW8JYLWaxXJcedxCt8pzsjj3gZqK7PweXcn2izxq1iQyfkGSQMtms73hq3Goqquj5LzTZo6",
  "key2": "2RRspQKNGakLBnv9U9pvyYDnB1oouE93SrjpAd9gArpE2xUPnaYnz7tzeoPnpxvNidZ3GgojKUEYCWUEV3e5V5vj",
  "key3": "4f9YkLmLvCkbVqAgkbsjPC2LZAGJ5a1oR8nu3JF6yo7t63XaMSGAtKQZHPVRBJABQnn6aYY3mygaUsusZdmraJWj",
  "key4": "4oVqxZEH5gnDGMXgzEU7sSPnWo4hnexy6KwvdDQeWU4YTUSGGZWmQgNXeuqufFsCFLd5Jpqotf8mwz9bjn7qr1LE",
  "key5": "5aMcwG6ctaWaP69fVKYFdV3EX6y4tU85VC1Bv4TZpiue8Xs9vzH3ReV586txqc6YHUvweYd81KvSneFTjAYDVaiJ",
  "key6": "3PaUd4NcDMpyTtHkgKpzSoZdFxLPpoUkB7GtriiDKHkgWBkwD7tnW9uA9Uttv47uyJdNHiU9KA844WrDnM45mLKB",
  "key7": "ra9iHReQthSXx4yaauDNZG7shxys3CSZtbTraD3smnhmow41Q7jRRHTgRxLtcAE5SUb7wkEYc4iegUr5A52b6wA",
  "key8": "4ecoX48bBpQWsaDv1fFa3SeFSTaMDQ4339QUaasq8z9WDsKfUxCATUtw8HicwgDBcNRzUawcSAJPeTKw3UsXYLki",
  "key9": "2k2mVDzr2JnZmybjpvpjHzESdVGe7WyhbvUbPdb243Md89B2k5aw2SxaTePFwZchsXFRkJvempY1D2MBfHVH7bZQ",
  "key10": "5S1qnY2XDAGbuEehv8eM3yHin7nyhqXkgpheKGyCTjCipfr3SoaGQ5kGb71Xi58RVHBbvr7c13pz4VKo9uT9znb4",
  "key11": "4nrTtnoX7ySAntxaqisQ7fzATKb6XmVNmquKFb7zXjj8jv5YHBEJVBNW5Rr6XYYfJNt9dE2oqJkFsBa4QEebyVh6",
  "key12": "5bfLKVZ9oyapcZmFeJZeu9yiiZZCM4A5UFb3uRxasEiSL4j9WVFbwC5H2XjdZcoFZ8HJCA4iMJhyuTAb6oXRwpRb",
  "key13": "8M2FSVEfraetiQbFd6wYYMD311oZ2jwkojzog9hHSbd3hvZK7mrJ2ckezBK9F4XATy9REzQeusJEBekX9Nu8KMo",
  "key14": "3MHZ3nKVqBeXS7rbkMuHFn4c9aNuL2zEuD2B8PAT5yrXAUuxMJhfnyzLUMenbUncEfzGGWPJKT6UCinnv7SGtpnv",
  "key15": "4iFWvsqcqPTr7yidHgoFHJXANpXSb1PqcAnpmaYnRGZypFeodg3TanWwWoTH5oa6sAYWNmyPZRDxdmnY9NJdW3mX",
  "key16": "2w1YEUnHD8avYztxKBmzVhydf9LSsiXhEx4SoVjv7iy42QoEyxxU78KnnqyMZsBwcY5tctuXj2C1uvkd7Fmyk79K",
  "key17": "3ZVZkyeNiK6AL1EwautavHXyRkswD3bV992SQKCd9rYfQiqXXaZGARZubeemio4xYHSxQE7AJ6EZJj49YVtVkhF2",
  "key18": "46VSyPhrmYqf4Dd7oD8FYjYEWCRXzbqJy6h1C7TF2bJzeuUJ3UdLHDbtttxfsEFJEkVncVsSRMvYHPvWHZeYc234",
  "key19": "5pQ9CHYfwsHi46bZt11mFfmjC1U5ibUSChjLaZtH7v5P5yV22MMd4hLrBjuDPKyoabkzjLFWs8rVpLBpPUtvbwb3",
  "key20": "5pGqMYeycGJwdD1TsQSwY8w95sN1LCmuJeDQfBYfeihshuZz4zqxLPnogn2FFyiW1pWReg4vq2KHUwSS6V9XGPxH",
  "key21": "3Jjt5nwzpNNYTjGbE4YmKFixAiWve8feAybAt3KuPgThBwdG2oToS8hudAkD6MYwGywqq55QGsYQEqT5g8BfQMnX",
  "key22": "ca3NGVwuQ3qWZdVxbNK8X9A3Ug3y1KyFiRvC6hpLy5WF6e1ggXCQ5ysphyDCJw4Sa6gMehbWQmk1nPdPmCXhea7",
  "key23": "dpHff6GohTfrnQJApoZ8GmsbQEEEWg82PfjFrmbCezwigyYAGbrkeRUY1GdHVBwsaedXh4ScGgVR9xEjE6e59Ja",
  "key24": "4tbko5tG7g8bqgAN4CwubuDmLpRzU5v5z8qupqQfP44qLy9s3oggnmSZvUkTSAeR8FzEauh2N4qsPMuFh1cQKSqa",
  "key25": "336GVgoEkXyFdgbrrJXWbVJT45Hy9s7hRvjfQ2E6erxRWa4qb8U9zq7vMcokGsrgqFpnKiyHbWfjmw2HuqE93ucM",
  "key26": "2Et7yh7Bz1wZGUfUTTs3PrLjojTKMFHgmE16dPkAKjny2X1sfLd3vhS2JHPAfhwzariaJ23mxQuhoA4fFoSxYCSX",
  "key27": "42sTT7L6TFWzwagi1VCLtN9AGg7841Cr8HgogVWoeiJddVt1M2X66gf56XjzNum1Mba6SPavNfG8mK5ZrnBaK3xs",
  "key28": "b2n2XGb8hMN2nNH622wjJsEe6qdxBVR6peXDPYVZ1tLmuj1jVoKU1B6ZKj6N8zf6hTwJMJmtQ9wDQrPBBdcFJ52",
  "key29": "3QcLZRfW8eWDb9o9VyovKSD4NE3mFbH9NqPGYZgpvHo9QB2RcGmmpsTKKvMmTzZtZcVh9ZNwaiwtWYR1E1cMfRFE",
  "key30": "5RGb7W2aiz36JdwuQQkyJ5UHz4adxv8UCTZWKZjU4LWWePfF1RHJLKR69xQ1T3z2GttqQhinNdJQQKDVjk1tf3rE",
  "key31": "38AT8x9E4moYNNHTV11CM94nuRByK6HuBDALcT5pXRmr6WcXEhhKKrsZuovg4CJC3DoRuaqLHKyYM6c7631dpxwY",
  "key32": "3QKvE687iv12KXn5r9NjA3vL7ypk43of3oLHY98TcTryVthUR71igme9nbvtCnBQGUdoYEoCj5HmLbpgVm9TjuLY",
  "key33": "4sdK4SM77ihttAKPWTZx3GyngW54CnFhgaVhUvkGs4BZ77PR53FDSS1cj7LZtajXJnonTR4ftTV6Tf8RrXUsKy2J"
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
