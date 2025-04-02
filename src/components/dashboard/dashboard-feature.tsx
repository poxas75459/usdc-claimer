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
    "7FHWqhPcwi6aNNWthK5qsYtsPNZyedYyFXcHom7gcjnyq336g2o3hozy87Ed9dyuhpEeReG31ZhEAJZPe9q6zcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zDymwXZogNW5o6yM47AFxFRniZYZytFmwDjtHi75L4pztijv2SFrSoTwJsSf4kGMvYLGt1cmrcoE6m4hSYNNSp",
  "key1": "4ikH1uhfGeELS78Vc1PCfN4BUxyda38wCQS75Uk3LgYYXPwjfpQC19nfJ6bFgBWyGRdehx6D5hJgPfS3QQc9qxyy",
  "key2": "4ixHDmXDa2w4C7DfNxdMq36QQRFuWdj4YqAQsH8nSTquQz1JxfzbC8j6vn5gK3n7UPWjMvryJGWYr3Va4oBjDUpw",
  "key3": "4CkyRkvsvqAZMkrJLF3UWe16WXDzrfqAoidyXhLvLYMnwPDcfAmtTsacGtt1QvjBc6DqsRFzWVsEL9pbgaSu6ePU",
  "key4": "5M9cd7SUjeAD4xrEbPgfX4uxCHwvnVqzWdNHvGWxnSkYELceg4SbftWiHSJpwPE8ER67Q6qzKisBBSbc54nsqG5h",
  "key5": "2M3KdertpZTrNS62GqQ97unjtcFNca9N3aq1X24dDkmNGwprdXUCJqmKdeuKMKBcoGPsNQieg9TPWSVZqJ6RpBjt",
  "key6": "2UF159ZqfzUMGd9SY2SnVvof4PMPbHTSteWpgjeXWnMTjMYePtyBg8SJUtBZC9PHJqMXgaBgrFGR9Hm1WwdHwuBF",
  "key7": "3jJ3FfAKFKtZDY8LcxXSggrytNZBeBbTUqeK3vTQMu7CFj2NMey8BNdM7wdJGrDWiAL3sGr4YyDeVZL4yJqZcaAF",
  "key8": "2sgopAa1bG2MrK4bQ4V2RfD1ciMP6ZyDh7arJeA6TfJKkNsuDeVcPTvqoqDXnUS9BiM8F5cNDYo21JZgvAGwMRkq",
  "key9": "2ebX2jVMMjsKUZxqMXxGPAvCgCoUBkD7K7TPTwnYXnuySMuhDQdNUbeHUTYsoxokmNiUwNh7gw6a2rnjtfV1qVmR",
  "key10": "62ZeTdvzv6EG6FLiArBkMCHCLTfeSWCeuAcNSw9rxNdCnsJVtoJxQ3fPPkfYZJJpcE1kU13FZ6i44mWqKZT6eYY8",
  "key11": "2FvLqvaCfgabiYxdkVukydQdPQgVFureufDf1xAzkcMUeStgqqSn9Y564fUyQhZrkgdJjn5HHfYjRnv3k4tp4urF",
  "key12": "2c4cb7iDoYx99ZgYLHuPDNYbBGzpyJv7PtHgqUsJSiyktbQAPBPr6WpzDFL6JBW8xkqEHdNpB5HxBjeMjTzFug9x",
  "key13": "3mXM3sFTswAp9V3M8qNY8cGYYC8QqEW9m1uXPo9gt5Kw9VsHpHVq8Byf5KDj5Dv3mqJEiC4XCJA8yUKXdxt7Wni3",
  "key14": "4vepwWwST3URUp5PihYaQBK6A75gsXGJwAUqsuQ6KaeLu4Xd3LF1pQTqJTLWy9336jmYWWLKTjv8v1yMoqxq1Bpj",
  "key15": "3f3eLqzYwmdSCnt6HEu8pU92UJhpe7sGsKY8mZqt4cNSaqUSEVshPBRe81Pfqmm5EvzaoZb2rGAcoJbftnGkvLGR",
  "key16": "2UhfuNyPTP89ULtmJWf7WD8woehJ4xHySvsVNWVNL53NcczK2hz63coX21nT1W7h8JJmFXHLV8H95K15tpiZ11Sv",
  "key17": "5Mdp5ihgEqntWPGn79K8aL5fKfHx4xrAvbu1droXs1finfKj5LY6ZSmXz1WPKRoU1Ek4WXWw67RMdhNxuvmbhMZu",
  "key18": "39inxUM4Vv8jcgT4U2gWoSdhyUbp6yNRUAzqRtHukRcQKTc1J2fyyHmFKr4u9qpmxrFFDvvQdma5fceUvJvTkvpy",
  "key19": "2oL1gmiH5EcaupjR3RU5Q2RtVkDKC66gdJmWuADi2BvAMgd34QGpMSn61kSJFgNSFTZEZN26BF3BnZLoepPhd3qC",
  "key20": "5BRED7DxvNMJNe1Xhicbsc52PvRivFnPHBne9QziWMQ3eB1oEfaGorhv2u6CK12eax8f17LT951wLvzKp2P7QG4m",
  "key21": "2XtjkFFduABYqubESP7xk5bTzsXB2vc38R2oiHnP82FVkV7yBo9uCGvCVPbFGY7dBErEYRNiRX4J8ww6REXaHA2K",
  "key22": "jBX8phTEMV7o3RpUmjsitk2VvadPwWS14ujX8kHrXV49hHBdcEWUt9MstNWKkfukJ16Zu477HtahV7YGjndVPfJ",
  "key23": "4N7zucy7TfZCFC2p6S3TdgxtapJpfzRNdAuVeUwaWxsuRtMDM7h6zj5958MtSTj2XYFUhtc4pHoiSkEGErVpvbVv",
  "key24": "fitFgJYtgXZDdubpSSgmmbeJsMEbPdDH98ccw8uAe2vLNNw9ynGauVL7KyHdECqXn1nmoujGaNZCsKFEb1a3qvs",
  "key25": "4kiUEXUKXGqB6xtAqadFksRfgZUfZUZvciGfnbAjy4H6cZtiiGvPZw3Gy5J6cNwgr9a5Q7kfermbK7nAkAo93pvz",
  "key26": "951KdXzjXUgFSezHMeyd4KvTrQYxKb2eZMfte1T6JhZqkqLHH4u1eoeDmTv43ePYrMe4mnb7dJ8QiN9FCvhmyVC",
  "key27": "2qZ8kBTpb84GHhj2G5hPzzDeaqKaebJZYPp61Pb3eCHgsdEmNUg3jj8DdBMFmkexMQuXt2HkrAyS5wDhNY5TTcz3",
  "key28": "5EyHLEqsUx6S2cuvGUrHjYK3ws6kFP22t6vUJkD3b3PgaKcHDhtpaXVMovUjnX5QziJjoN5TSGr8z6uG6CNFLUfh",
  "key29": "2bVgFZ6hskvy5mwZaVvRoDT7k7CiFwa14oJUPMpixqjbLwPAQdXm3YspUNZUvxA5vYJimii3nZJYZFSfaGw6Pv8X"
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
