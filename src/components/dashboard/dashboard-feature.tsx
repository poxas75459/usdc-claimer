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
    "4DZMNvKszwihHSgC3iyxf5Favs4MSsRMwnb8UCGhoKdr68CuCPFxZtK4k3bVFodYT7fs69nPRNWeiH2auUFqCRtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C5oJk4EcTTgKcCJPJrvNqDMY1Yo3w9TxNnmqVvajJjJfATpHvZufss5Z5vjgS78JxbjqjrQ3KKpetk8kzaR5SoV",
  "key1": "5JxRwq1W5M9hx9jieyY8Djq2SpL7pHXftMiSCmCPymacjQCSsp8ZSKhPjKuACLWBBQ8XZjFZnqjQLK8cRyeaPQt8",
  "key2": "2QFofkHDf4yTioWGmKj9sk5YtDLvxeyjs1k2XaUcWHVagj5Jq9QN72RYZg8ScMHSFyYFaArHLp29X6kE4RETJ3Vr",
  "key3": "4dfmSxNXfiLo7SoxP82XSVWa4GK6u5tiW3Hx6m4ezz2AnZRZH4Z8tvqgEGiWk4xbGmEdN8oDKwQUY9Nvi75ZPH9E",
  "key4": "4YtXECDkq4XgMVda2dzC1AdSKiPgWwaYQhu3RMfnon6nHvybcV9cR2irPBiT2wtqKF7PDe1zTpzXW4uCR4NjLPEc",
  "key5": "33QnMUpkdz44r8BoGFN6mSSEBbjW7FcvXVrpb2kwC3HN27RGJx3do62ZZEzCguaSx55Fdx7AgfJraNHWNaXVKMMP",
  "key6": "3CV2CFiWVddozWYkihFcWqdMNPfGhbM4r7CU1vv94STojZQUBq7rrTcv8AuAMatbU3KfNLYRchfNmig2csnJzshy",
  "key7": "36NfAExVPCVpDMRNzwLXdp6dt6fTwFxnEfsimXmzgBfoBKwX63B4jWrXn2612MA9VmWuJ7P1Yvu1Lrs4dRSHz8c1",
  "key8": "5e6Nunzitticveb3H7AbhepF13Jh37Qpn8QnK96Q2EAcTdi726moQCH9BLpSLapMnKowmFizPX7oFB6YnAZ8k83",
  "key9": "6UrvQkssHMPVh8Q9Ywosjk2YHfVdDRYBpLSGrSxg4f5J9FNtwoAKFLDWR4UXdsWxDT4ZHQgGZRxv4zdQKL55Qhb",
  "key10": "4AXQwyBKoJTRfiH2qXoyyVJFj1ZTB6aGbGS63WQfCnU8zeJmWX1dSUgSThrdZLCxw1iarCCNy9qkstRM8Ui4B8BZ",
  "key11": "5MXYY6KqFqkBycWByuZGyt9wN5ZzjWp5XCd2y3KhayJcxAAChgDEm3RAdfjEooUei8pG3Q42ZNAPZ4aSJYLZeMi6",
  "key12": "4WMZbtLN6FE3upixApMFKnBuPZu1zML5NBN1iu7s3FK8xBxCHgMcdMbmCfAs5dMSwanRsZe9EhTTp5tFxs59G5zV",
  "key13": "3CwbnyiS8khL879dEzmZpzLHbqXA8SsNJKywJ4AkezThoV1DrZy4tAznyqLoAYfxDfBwRTFiGtwoE4Hh43VaAAh1",
  "key14": "4kfue5wHE7Sf9LNkVKYrcMuPqrSc1zipnJH1JwvU9HFEMo6Q47E9oYrvjxgnpUpEgNFGJj1utRsiVEC9L3ZQSqpN",
  "key15": "39SFn1awPT3VCFFRC6J3qM26t6xmYaUjZRZgCDvbXLEPywEap7fWeDYfRwqUqLTTwfzqpySBRtpj38NM8Pz8ErQ4",
  "key16": "2pehUMXxK58g7bdFCRfDCjSfCj6sUGsASwsFfiR2eKyPhyvjG8pR32dHexgWhV7qZNE8968PGtWzVcdLnyBb6Bth",
  "key17": "4jM4ZqJD7xcYXpqWy5WPgVienESskq3NpTEiMPaU7i1oPjjGuLXrHtUFvpCZkef7WQnW5k6bo6F3bwuuM8LQyJED",
  "key18": "3DqTQu6LopFg88ocWcsHkzEvQJCWz6LbNU3DV5e2HhQiSndPCaTjbDCcHJ4AsCjcp6WDucBAtXv4Cnbmix7c5Yar",
  "key19": "2Z1QkgzT72HPVDsLeeqBkcFdAvWfatZXeWb7DXAUurZEc1YmtqGRSjGXcAx5W8QtvpgJGwaQ77cNi9ox7PPNXHrk",
  "key20": "52xr5zBY5v4X2v15NqotFL5R9iRWNi56J8Q1pr8dg1SMsJ9VQ8RtMecUDkwxNRfnp8rmTaTBxE88dxAbsuWFxEfY",
  "key21": "3RZFHQBT2HS47UbKjYWkgCZitXBLsPWaCSQCz9eqxkTtbAGnt7B5xTmk2jKosFWMFE2DUQBxdSVELAfLVK35Dtsd",
  "key22": "8HxB5RNXnAY65xNZNZ5C9L2kJvTTzdpmKKcZbXkgrEReXSD83KVmXag4QyuPXPNMR6YixJGr9o6gWg495gHfziN",
  "key23": "yJnB2QQ8PDbGX81xguBxZG4FX13As4wUqvrnL6JuTMREaqSW3iWQBbykQLAqTotsBmgi6K8FGL1pHxVLDJEzkKy",
  "key24": "5BcgZVr8kQMjFggVnhfoo7TmyHNukoeoZPK8j33Y6jStVbGWm6n5ceRJDiUi2VwdiXuFpG5UTYqLdvEW9dWysKgU",
  "key25": "4jeoAe7iWKrZgggje8XE5kwKgLxZkjSd7cLkw9q8QTV4yj3swuVp9iHU3z2EmW7m7ze4BZUCzwG28UXtoMhEGaE9",
  "key26": "2z3Q7gjauvKJB7wJzd6tufKUeVyPawy6nA7tQjHF8wT5ibfUZPAn9bX7SpPfbGZ4ugqDj2mTDHQy5mpB2TzXnkHh",
  "key27": "49szF3eapVFERkvxuoASck92LqJBk5jBcxD3Vij7VRewzUoxQ22dDAdmuK8MrL4u5Md3K7HJ5CuBMKpYuhTnB4GK",
  "key28": "59SCh6kX6j3kgANzY7UAFARPMVZvv41viT2h9y4CPKSkLVfBeMht4kCFjUeuMZoZqWXFA3oSVQnErTthDvu3XpF2",
  "key29": "E8HmBFcjc9nwkKemuEn8unAPbfRnw5CoLfZ3dCKbYs6FzmUqueuU64ySmbtdsvSg1Qck1SJJJPzfKG4jzejzmii",
  "key30": "5RRKqPyopd3jn5sNDvgvnJWtpPEpTDAmG7npzqGxtxQ7HcbwGj3EtdvMPwbV7MyGcLzu6USY4v1oJqdwS5DwRDRR",
  "key31": "2Zf7Lza3qsmh8GWRTUeg6gmz3oh5Qs4ZAnyvFGdjQoSsxYfyx7m3SiBDfFdoSGeVRFQ79NSWBQNYM5F8eVgdEQST",
  "key32": "23i4Qec7H1bHMsXTwe2VPWNuDSnWY6tdZFBicKHQBnrCPEt6coNHkA8eGnA5cn4fZggqvZxwWvpo6ZP1rymKUMcC",
  "key33": "4exZywuk6Rt3Sjev6gv2mbnmhd9KVVn2Z8ofEUhJVfURQeJasabst4eufcdhiDU94TDsafZDanKeCGBhhncjVLb3",
  "key34": "k69TgM2hwq4YKNMsXbnSnv8cjo9Z8sR6UfTsmfSceJRnPLZ3zpFAH4riy3DyfBDNtbj2s88d2KKueqsTTh5wuBh",
  "key35": "5gSaqg9S3afGgANYytEpH98t99hjvKZyNzv6r3rbgraFXpChr6SjntsACufbadnavSuD6YcyqT3eZktrpL4AStX",
  "key36": "4XAUZYKwkPgAMtjqX3xt5aqKpxvUsGCJ9oUN9WrxAgM6LJQjKgGRL2qPjQVuLV2ZFJvtsZs5vzdqoTU3sFfLNeNz",
  "key37": "2aNmNVd1oMW73fqQs3wF7SFmC5Y28qth2QQhDWNq6dh9vrNSPLUpCWSArD5utyc97QuthhcdoNtAGaWP5oJ4Ht6Y",
  "key38": "5wSTEQhP7Rg9wenCPD5PGqkoP6As8fUDirXqChfhL1RgLqxCJPTvFBq55v4RM9PWfkWAMLa14StjjGZzyqnSNdfn",
  "key39": "5amw21BgKPK4sidbPbWjkcjvoDqSxQenKZdFS8LLum9vyUgCmeWc7cDdcLB7G8Z2eKepSag4bav9EVkpavFbR5qR",
  "key40": "HKjq9hzJosD4qe9zW7k8MwkJDC5hwrkL28jbdUXegSD3tw5Aq1p6EJNCD1ahCroEC2Xo7BNaK3kBhudc9EeYjxi",
  "key41": "2aVa32zi1fTxXrJS4KLTJVVJZjm4vMBDnBxFuYA1KpAisPBn3mjLcnKFBLr7JNvS6qNzXX7DZGSW2T7tgkgs3LPa",
  "key42": "vHLdr2UjUHTGmYzYjW4c6RDn1J7eB7UJiK6To9KWWYgNqLgrtdTNxpmgaMMMiMu3oPDajYiS2EMfhvvdHUicKMM"
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
