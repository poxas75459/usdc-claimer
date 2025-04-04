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
    "3GvzoNyyVGNuxSPQ9FCYHky18929dFhmuwbShWKXuY8f2BmA9ijyr5KLPSHjXKHVXigYfemdzMUbuSXVoLX8UcGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EzzmDbjS25hGYxh7GTRwbpd1pGXE9R1dJZHM8gpcryEjgQbcUD7zr1v4q92NsnCGSR13w2D5TBHucvNPVSFzu5t",
  "key1": "31UmKq17AKsvqhjXWrxuqEyKRaqJujN3WUi3UMZMAgvtieTQGM3gZJYqHgbL3CGy8UDE8kxTNXhYZh3FTKzPptXR",
  "key2": "33gJzoU6jJGyiqjqhiRxyrHH7b3nrTscVYr9Eq64JXoHUbUCNQkngaGjBCWXRDNv1dfonTsetPSB2UEFPQ1G6s1",
  "key3": "4chdjAMLNGu7TW33oPKhKPfQfzJPgvofzX9wXJUKWinnpAGoeNuEq7orGJaJ2QZ6M6tC7B2f45UaNe9Ys9HTSMuy",
  "key4": "4mePeiWzPrAVQxQRYGYyG7nzDpCEs1Cko3aCJ6q9bLM3ZHL43Sog7Tm52ZQKHVuzwws6dDoPd3UpTTWTUpvHN8FJ",
  "key5": "3t3BYhXCTxcYE7A8eGtwvDT9adkNdUJgJjofHrnm2mfBwN5Gdi8BM6wXp75smLpgRJHYWMJYf5M4K2fi1vhRr9Kw",
  "key6": "4yc67jxJPehpVujdjaVr3QrJ7jTgYCcew3eaKaoofKtwdL3VxHevCWZBNKZY3suS6dgnMYtyGKZnszAtcsMhhVbc",
  "key7": "3sbzwwLqNpjCEe4qT6fJ2pdUjzTn1uq4fNxFsVHnRHFqBKxXK6Zpv4cbbz1LoyGTdygfMJKLMKRrbos9UvTBwusJ",
  "key8": "2X4Z4AyDUgYmsBrqRKuPFzxkFXkKEjgiJLSgP1kYg2tPxLhMwFujkopdzTm3U1UigJNYwSp3awN3GsL3WgUpmR4p",
  "key9": "4Gu4i3L5UXaCj8nbuNUb5pFFmiDCorsiYRR8Y4LDc5m1PffzGa2ch1RCa76RGSnpc7fSGws7L994Ld5HKdXbf3Kn",
  "key10": "4YXUg3G52g5Szb7uvReqzmVJDHGopZjvVWTisPGsi6XWJGzN2rGoCRnb2FkrJmkrnqkKwD3fg7kGeNbYQcRL2sd2",
  "key11": "4gTxgztHDKCcNwPtARsfz13XvC14y1QVH1oqiyuHskTxjkNRd8gZLmgfoWSd7tExSsBSCdLTpz4ekxHyzif53QMS",
  "key12": "4WyyKEoLQUoMD6jB12MY2KnK1TrhrTEdvKva3Ny89S5hmm97wubavygxNgVUpQ7XeENC9LjyJtv4NZf5UkFuJD93",
  "key13": "khcGzRjmp4DGvfUJrNG2kdb4ZhzGp7GjLWWE6fya7MqzN31jdH3YNVJZMu21hzYGUu3SvPbvRi4xPRtUTz5Z9sh",
  "key14": "3rUWFi4kmLCcvY6FfAGJLKJ8BuDobLNmFRTuYyAnUQrbiqbw657Bqa2XYXKfeGsRzMNHAxZZf1wM8XmmuT6qvff7",
  "key15": "34TSFf3PnsSiRsJRBtBbMfBCEhsSJWXNU6YwwyHWZ46XwgCCgnGzJFnRy7qwfiTN8F8Me8FsShNQYEbcCiA8WDRL",
  "key16": "5QWUAx5LeLMrP9DsTqAYwFfRC9hvXhQfFfwPH7JGGy1Kq6rb4kjfKMjcqwbu1AzNPYVDanFQympk8QHmxHnZvGdW",
  "key17": "3MxMzkDXSF5D9D1ELmoVZMHdw2QaQ9WJKLgbA4CS7qnsBEyuTGikYQVgpuWV5pwtv8cfJQexrizDRsebQebv8e2k",
  "key18": "29yxX2nUffRUNF78ff9iZ5z7kMYR8w76oA8MUrr4A8LQwYZGTwqFZC1sSsd5Rh84jMR86w14VBKakufx4NsFwvqD",
  "key19": "572FTUp3xC1JKuEZX6AYqJ7XkgDzu1CZqVRR64SLqivBz5m5gn38Nmm1wsGREfwubYB8tXnPDvpKo7rgZYXQFRju",
  "key20": "4DCLvZchFZAibCVRW7RbPcszshgNiK27XvnQmXwYawANoUkgjGWs6YThHDDJLQYgy42Vgu5mohzNBibH5MBc9BSM",
  "key21": "3kBDHo7CfWNVSRf2kuspFBpemrici9dLVEFsiwQcnzwUmyrTUL56TDKHWy5RgBrN85pWZXfiaGEWfsa2MfJ5iW55",
  "key22": "3MDfhmibrDRyCAxfVWFV3Sc6MprjRTdwvoy2B7h3GRakUR6daC5BhHLvLQh6PUXrauXYLvRYeFva6bKzVV6Tgsc9",
  "key23": "2gaFQdn2X7qacbLZFyk5FdtQJWGuErVNsuXsxU6eDs2jmB3rcXFx6j3yzWYs9mrhcQRdDhubCpJjtokLqHRCccTF",
  "key24": "2MU2aQRZcqmT8hyEFNfaSpByXBqzjkXQpZH7xosGMXSg8115oUeaS8N5A5dgHd8eB1QVxUQX1fAiYuqPPx2iJVzq",
  "key25": "3drJm1epLg39tA9BgbN4hLEU8GhTNV79iAgAWLHJAtoCGzvRvndJ5P7D5A7BknjTkSdzoCXFkJH4ZcCyfS3V3KUU",
  "key26": "4L9AG6LUSJRBVbSMgAKEeemRMMSeVk5px1HVYp2A3UsEmQ9Zwgcr7d6KEvjurEKGKTjWp6WbxXrbGbiFRwbyM9Vg",
  "key27": "4BX8G7kTJiJ4bdoT9YL7rTAVCszyA5vHMzBL9aXfpCeiKozyDuKqawTzUsxf67CFnSiBswzF8EVTDLhmd3Yj1o3h",
  "key28": "oNtRZk3Gw3USRf2yDdH2a5euZ4fLssNXiBYFqFYQ4y6m59XGCwvMgWndwbRYrojr8TdVBJ7ndFAncJZar132ZrX",
  "key29": "4HQXE3K1JyBw5vVi3dxwuoZANoqsVEgu14JuHNc8M1rdwp5Y2dXwH9nV4fg9TXdoezdzvi79VW1SExUshXfofR29",
  "key30": "rGu2Ufu9CeG1ftPd2v5tady5SrdQ8sDMLD4NeqJtcfrtTRpMexn7RtsYnUE1nYeq98zqMwS2pEwyNxLLLKtcKGa"
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
