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
    "cbkYHbU7EgiJktSWfQb47xLTXVwVhxaMgX9oxrzBGtoDV1fa2bYPu4hh6mNnVxJuVoYoqAWqGFQLqcfvRw9DjG1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ReLF2vZiqGpkWPrAQadfVQJf2xQCQJtkdvtqVMuAkMGzeGUAjDHQGfDXNzTbYbKmPj6vssKE6ybdqgadNvAYkNj",
  "key1": "z3gD92oALZRpyEHd7fTGmmk1RCGCC5q4DT31TtiWHBLvi9yGoqFuukLP2G5fTA9wity5MsUQ5NBXMYv3GX79Y11",
  "key2": "4JkJSh47gsFxfqTsVAiNY4UjCbjnaPbRgZ5YGnkbwqpxqLH3Gd4zNZM88XWiWBaBoVJbFbHvmbKe9C7L116bczAV",
  "key3": "4m12WCr5C7nP4WKHVBA6kwy7DSMyCoyGFjo8RhUvUyxeH39YWDVKSv6erLqXjNryZ6zF9dute8vX612GqELCQYk4",
  "key4": "Q6De1cBk6kfeVRmhQNPEnm3WnCJNEVS6JXwjiAC2eZasE8mc4T49BbXCy589D5iUXVPrCf8WLzKmzxVpY2HUmyc",
  "key5": "5LjvYHujpdV7ehAfGwpKoUcEV8me9ZSP7FSeLBGsmLE95yHSiDR6itRP11c8rbkeCBdrYJoJ9UzzTk1ktwJFaa96",
  "key6": "2PzBcXaBqCu1aex3NLmRwpVuX3cRua7DLHNv9VwiYNtwKr9zPuW5h86Z6PMiEuXte3NzxSUdb5eMpPZT817etwTA",
  "key7": "42qemX76yVWNV9rQwSCeFNcFo2ctJgdnwcPY8Dxjb9mfhm65qhBetAp6rYmbfWc6bEqbF6KaUvJcDGM7fvE6pTbr",
  "key8": "5Bd88UYD1NCcB37yiUFNdmnysXMhWaC7KQnzax4vkNoVb6uPeFmfyN4fybk7BqqKJPjQt9zzWEe93SaWuXHQVptL",
  "key9": "r9eWHpi2hGkqomSdo2E2hvkBJY62RUwmQ6XFt18koEBHN6a9U5eJtytJKAq6pA9EPR8f3Vo2GeiqEtxf3z11GF4",
  "key10": "55y8NHW7JoKsGi9HbHCG9ypZXEHTrgP4RPkiRuKMU2Vp63Zms8vtzr7aWFgMDpmQyciubhuU3AqtrJ1dzX4Y2m7m",
  "key11": "2n5zjb2NHa1LyJ5JA7XzmnLcJAE6hE9xPrZcMZ4A4L5ozuCfE271xJEV18oHEcNBZtqTCAY6syRD6i998QLtx826",
  "key12": "5sdMTXHCKgcFQB4v5AJXEfWcPHAghLbeSMVJprT4qqPqQjXsV5v6jxrjDUMRhQdo6def1NCqEEQM1cQnXAtCFU4y",
  "key13": "3uLFg2DkVAmR3CNwrKS8Cwt6yjhgct28BXWrfGRdwe99PQ94zict2AfbHxNEcw14zRQJHKRPtmWASCNa3eM3WeJU",
  "key14": "S7gUQQwvW6u1gNRmLLHQzjq56PEVq41JYRfpKPpwyzyepGhGjcXWxSfSQ8NKmBuzvHZM5EcoLbpix6BQg4TFK2U",
  "key15": "2JwKt2GR4HfxKgT2LnnYDUKTaMuJi7DPSeyfDPJbx4j5AC6XGcKLfC5773tTVBs6g1gV4Su94woJf7GeyfxdxmVG",
  "key16": "44i4PfrB8umAhZq7NLP2YpeviVTuqM7M6qEWJxxfghizH8u9tzc3tgLk4EbwhPCrRJUZvbZyd1s78BC6ZWJ3Vm6q",
  "key17": "5hRKF6eDKDCAssr27AHcKLk23QDVmAjXLwXh3MBzkihnntKL6rwfgGeiLbZEFewVp2kPu3iGYza1RkYovEC5mSuA",
  "key18": "EPku6rcHpnxBKFRfMNm8jQcKF86FcGRP4aUvSACDv4MaqqR3ePLvkQB1A2fKtkDC74KMzh5BL2grZ7vkV9BgtjM",
  "key19": "EyKy2A5pCANg6oDxZWFcUWoWeyCujxRM9oH9REduVBjktmSA5VWNcyosU3BLvv9Df7LdnUZFvdFegs5SAQfTeFQ",
  "key20": "32DHoGchphmWmzbRfePC9u3Bee3ro39HqKBmzfgnWSW6kBrqZk9r6Uyi98KxefXSwJHHJVyyP1sdrxH8BrynZiEh",
  "key21": "4WvLAt7JQ9FDfrPs25PRrGL5ZS1hvMCz6PEpqZE2PmtpCjwyVBv2Y58cP3phrkJrWmR5QkdHad8gEUQ38cXoMacD",
  "key22": "3pzCj554jQ7HWvbkD6wCBohcB23tSFv9iYj5rfLGBaUH3daxPYarvgW5GMEAYvgwwvP2rWYGWMYAqTYF96vCW1cv",
  "key23": "3tikADrnDFqpN2iJ32PuqTxtRVDWVzgqeoZ2Ww14hUhfZKJnaHM79Jn8Mj9mhUNZFRZm5wT5Vy3Z3wD6zQKA9sZy",
  "key24": "58hKY9oVsWqarmFZYnuUKS5htHcLpsmMSfYh2AJu4rZtLQWWE1PLuiyhWJEBG1zRVdcYfLAhTPxN55HHUgXKe96e",
  "key25": "4MaboEBuRdxUFqK5tNEa3NZTBZiSvHPdTXcQDuFtU1SWzJ38fipcQ9JTVg3rBeBw3LX6tSacAJe8X52r4Chxy8Ye",
  "key26": "3Z4xzXMi667cCG1RCo5cV2KdKdXaBGJuvjNUYwBQZ4SgPZ5cmqiGDdSpZCNQ5f1oa23v9Gfe7DWQoV1wmybP514G",
  "key27": "5eA1peNZayHfzxJTfxjEwLGG2hNy4Rk6ZaU6NMf2WAQzTisQD11D5DzpGdgzmQUhK4xBLjPKzb2ugVp6TLA9dG7s",
  "key28": "5A4c371K55arCDQm52fFQkyRa78ibPtjkUcCYj1HVwoLZX8F5neXtxUH54YmKMwok8AX4g6KrwgMWZC9rZWhoBtY",
  "key29": "29aXTJPEqT9NkcY8G8bovT1xs7skNwBqNqLULeWpa42bxanRURgYMSPz73hQNhj1vrCZAHJmp8oKDFyRzSoubvJx",
  "key30": "2ErAUWLmsoeUZmdahPTidHpvydGzGvxpNiHVBYPxWVydYK9GoKqKUoUaBr2waHA5uW5YgguxohnWP2LvrF2bKHfX",
  "key31": "3TuKC1QShuKA1m9XdtLWngjWKoDSvrmJHiTzDfrsRiD4PgbKvDpKjkk4XySSERnFk6KK4q8ehqUSRfb39ZUdbvKC",
  "key32": "2Hv7rUt8QqoaLkv3KrXot3RD9NT2n5cfWdgkijd6Gb3j4HsWR3RrT9SARND3aP8favyp4AJ1ncJqWwaRS6yTBD8E",
  "key33": "3PdRcpWutAyM9bk6V9Ku13iKmWp77z7b8RiWWrTfb73E7egdPVvFBnJsiq3t5w7vdEn69dL2fDoAuJEbqkH6PyY4",
  "key34": "MTTPVSf78Ept1cY3oPKnX8eyUFo7SYjgutcG9hATCkxoBYEBeLmZV1rGSi7Rw23y6cMF5eqGNb6vhA38dX4Q3ou",
  "key35": "4uURNxtEVirfGH6uU9kvKCGrcFbBmQD24LdrFiu9Z7Vs9iXcR7Ad2pt95mFpwNUmtrQRAeF1MpmnXz8beBfeyV7y",
  "key36": "3YLBEgkiyEPMppwXmkUpDYqQpg4Gs2V95QyQVxYT1RgUDXHYfCSNW2Xv5FxGtaV4DGmS7a7cvfAmMiLwvjmvFDjh",
  "key37": "3Q1R7VA6e3mTjEtmFoDfHx81KTvhxnDf7Jn3LvfGAxWUom4YmQfyzJt2jaUVa8GVzaVDBBXHLMT6cqCsUjNejWnN",
  "key38": "tBUUwWbpPchwphFA9cxgCE5pzYy4mMaWqX7E52Jq3JXRATsMw6LcYFx5NCUZ3frh3WjBPSP1YNKNkvE5p4TQJBD",
  "key39": "2YknoNrpXnvaYgFmH3f618ts2iM59snAUJYhxTHnqBWrLRDD2LWeZcaYUe57ao6FK6TM7UNDabvKAeFfTo8ptu4d",
  "key40": "2LdzL5EVyo7GgFYWSKGBWsNNRR9HTjVE6TWctLWFdzknSPahxb4MP35iUZUgS1MgVwjaRCSQMeCRsR9qFf5EGaHm",
  "key41": "HGHZtgMyRS3Zk4DN9pKzuU6buDfXamR3pj2VcsrDdmGohqRMnwNhbLg6PgThWNF1yfRNqgawPQNrSx2Ahn2wdiQ",
  "key42": "3Q6k18e4atcFbdxNSEa8w34sGXUJ6wY9cVm5vx8Phz9vm3vFdiaxUKHYP5ovjbcohA7Wwuk1wpptTDcYPevuzyUk",
  "key43": "9DeuXy4xmqKYFLdMqrbSxZofhsmZj8zTfdYjAyHmSt3DkZrhMwxmX2Nz95Xr4CNWUHTHvyKr2KmSF69wRa6VjVQ",
  "key44": "4TDSHJr4sxgYQmxMGTM8eVaKFt6KKkwowGEA3YjGdYTGarF5sYTbuPxmV6b7bnugH1oxpXRvE6FRoFAhFUbtLXL7",
  "key45": "rCqASDNB1QK5nABikPLKZ638qEsnjkj2nRjMxsoUfi5FeQkgjTMtnb2gLSg8X7GySw6NESJmea5LozP33w84892",
  "key46": "5oNoPBUNF69AXXdNXig4S6mtTzr8vSRepRv5s9bUQcAeAtUFmzBhuwTTiVeJR8VmUZiNGkuLUuf2CuHbeWscwyak",
  "key47": "HZoypBYecPt554fFyMnaaPdeZvFV2jrgWMk4EAEc7L3Z9h3ZDHGBBA7sfZD8PRu2wCX6zXYRLDYPLMxNJa49ZLM"
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
