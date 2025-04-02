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
    "fpvNfS6qxFdEapZNP6qZf1QSZCYRbD3oHbFHYKBxxN2tvVKJZn2toRmnFtKTQGVgSoodCFSqVExd3C8fbKi3KbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "642Gc4QfBiqdCNeg3tb1RYpAKYBWHGcfJauBbCH93NzBPhYXoNP8zZXfMGRW38i1fq2zuhpEvoRjBSJJ1SqyMvr5",
  "key1": "4TuQuMiHVYaDz4qJumDFbz7jKU7HBe8gFYJP9UMVzpPEHHgD1NSwiDJq1gQ4XZpizxjrDe5YwEmZRj4zMzFQ6dPR",
  "key2": "5eYJuQYNxRyfuXmVHAvo2gY5nNqxuvgDYb4UcjPobDc4zK9xvkEDQJkHeshivgKGCPgDxrBEKSMgc7idmjT1SQKg",
  "key3": "3n1kJySZ9HcNxwvWMXfcWguJ1WDfj7K8udyFnj3wwk7vPBXFj2tehVS14bZQy8RxTEXmnZtkDrA19u8cPWPqAqX5",
  "key4": "hhauT9UmySaRgCMWw2a6nvBThUYCs4ZVL63yrzhTgt6cxSwK3WzpMeiSrSZHrWkunTmX2aveQ92S7oFL3rXqoHY",
  "key5": "Xw4GCBUDuTa3PxF4D7goDAMy39Y4GrSmJfAGB9oC36zVXYy9rhBTJR23kGhhB6DMKPFL8FX5KWBYYvM3wUfZ9tZ",
  "key6": "2mXYVtYWsiGzhn9s8zvcMmRhc4WcsJhfYRAFp1e7PJMFBSykk3tvQTR1KdCvLTMmmMFM9GeNdK3cCrviMmjJdCVS",
  "key7": "56kTxw8XnPUFEX1cCCEX9xBaRH9ujmnA42G4FHda4WKF6uwR5ozzfNj3aWWKorN4RvbjHQxxzagciSA6Tp7V8u7w",
  "key8": "tWtfAEJGtmPXDYpn4Ea9jMQmanjTkroLvbPkraCDrqK5WP3St3uxULw3phfpwdDWJaUaxfZgsTqcV9e5qX8Eh7M",
  "key9": "2Ea4iFiUuCZ8Xx2jozQksM4ePWvY1v5DQAydEHAYdrqSq4nuwZ276ujJG3hCeg2zxLP93eRr3xMGwzSJc7MwuTCe",
  "key10": "3HEvMxp6uv4ahnHPTRXWzCUWx2DKVNQ8t6HrYFRaMFX7oD93iNrQoXkU3r3Du1k4WLPNxNdAjwiz5JVmNaBeuReD",
  "key11": "5tH9yHeghK36rfHbzH7My3mfKX1XE6oUCHThU7hx7N9MopTt6qxB8bHyGnxTWGRMXYH1PWsRadYWsqxomeLvvfXa",
  "key12": "3J4ABkspigcxz93k2BDzhcj5jPiFYhDYjfTVe6pYGXSVfChsWLTuEUdsHQksBbzMHRZEyFhpsieh61mkZYwhX2B1",
  "key13": "3cMzQnPaBvPebpXGDMwWs2YZRgLm2ECQf6PsDDAdFHWotW9NahFDrPTdwgAaVCdErjdGKd5m6x9tV5uZDJhyYdVE",
  "key14": "3TaqEH5W9RgMrXghZ3GDeZoZ3mV5iuqwehuhNcDxru1kfjX4uzkXQrvkgLzkjk6mg9NgiQFUWfQebx5xaYEgLLPd",
  "key15": "3t7uK2khYNXpgBweKxwDGV3CXHwKGmTuHddeMLVB4P7UcX11dTeCkVotdfJGQazHGLqa3yzCrHsF9z4oRMxScE2K",
  "key16": "2s5isxPhHZe3NFGWmi3YsMxpQUfthtZszsR5L2SuzTG6ie21LGGrvt8EacMJsknqfzJn9Z9qj2nkVwuS7xt2xVMt",
  "key17": "KKEVciXYXQQdde4eKAnY3bzf3p7AiPt7wx5jMo7A5HH9hSDE6aMApCwzPf6TYtgbpashr5SiaqrvEb1bhHAwc2r",
  "key18": "3ETB5PmrLmrEDvQtx8M2qMtxCiLEQpLtNmgt3ngsbt6kQw8u2JUxBTnaF6og8SXcxTUzvkLAKAZBoLbtz4CCX2Tm",
  "key19": "4qQXEHCPSwTaGpKfzA1ZXEF8ceNMrSiYQQyosX55TiJ9vpoBFjMs9yBDxEQmqAMSCqN9wSJe4521d2VQSfe9u8aU",
  "key20": "2HFzgbcvAApLirfm6RvF28k1vrwKwAC52dbciQ8vSE1oBYKogjt85VfVwttPm3pJ6v9A8uVdeWq8iRn9KJE9FQTp",
  "key21": "3jW4ayMEcNYyZfPKpZKy6xKDf6Jo4BBMMLghnKRwRFZNPPiDNFHRYqFxhj12diNzZ3RcNTkfqkcsDLQ7FSXLjRfM",
  "key22": "27J6B36sWGdTefVRxgVqLgQvKRVytXPQAXSJSAYfzxFzKoiKeadB8CKx4GXEcRx7LUf8efSoktEyzw8S9rhaaQEK",
  "key23": "4HFkkf2qbhyMTebbiAbrQdTpcAky691rXctmmD9yh1a8DD2VRMEqoUzZpVwgA1PW5PJU9maW6aybghfZwkyQyv51",
  "key24": "5qpb6W3k9UX1XHUt6LQovPLPvZmf5sHqwjw1tn8gCHTY9SfKMZwyFmZNCFkmGK6gZJy542gmmXoBuvJrMTMyaERV",
  "key25": "3xEaV3jtyqiihwZdja3f49TxYr59icb8eN6n5FMAqC52fp38hYha3xF1VdtGr42hbHhGv6EihUJPtaH73rMN2D4N",
  "key26": "3MAZ8HqM4gLGmJE4yci66iAHSG76KEQ9ALdDHYiGcdMPFvWxNGJvFonQkroqYemLxHfisy2tEVAdKv6aVAhvkGyK",
  "key27": "33HAdigdvMccnxpJP5jg5LTwYBivvtf4Kdovi1vF3qf3EwpCFyAGgWPCShstCVmxBNprc6jRECNfd7LtbYdKzEtu",
  "key28": "5QCjNpUjBwoBchLQWzvYnnfyJ8eymZRmGkAQicCPfk9Bb8uhwhWbUVWB7EqdiWJJrSDHu8wXyQvHYcrBtWnfLdhd"
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
