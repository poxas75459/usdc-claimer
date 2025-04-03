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
    "4e2qNRXkNumK8qjPthqjJQxnut9KkDLwTcdHFYe1aFJDUcZeJW2pSwjQ6wX8hs6uu7bcijxE9ntCaRi5A8yPH3iy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Aee78swqAtfdPCq4oGG7GQm4Mv6Wv3XewnBqDAEFqs4uPDZZVTk69gHXcwu5AgJjiuTeFTNXgPe5fp1161bntCy",
  "key1": "45qEdAxgcC2isH1UWkQMBD6iSs9fRkSheFC684RNcnh1GbG1VtbfDwtg6JPQXwaP7qWF9CM1syLuirq3ERZdoK8B",
  "key2": "3285ctfcpdWKW3dLnKuv92fVWF6125yP9KJvXUHN76NJRSdtGqKZCmxGvpq2JWXb7qLGCoLfsTBX5t28nuCGXrrN",
  "key3": "3GA4KdqJRiZzGadzMGEi6LqzwAXsN3Z2F544awk7XHttvh7TVpEvLsh3nsYg1ZQk3kH7W5A6SoJSFTgP7NoSMcje",
  "key4": "4SynZHFAfLXAK4tdbGVAaHeGSvqe7JjuNx62NwvJdvJHgDtJXPXKSiufiJtNCYTZtPgNHrS9XpLr7t6PC5VAxySB",
  "key5": "5wasdMLk8tieAhZ7EaAu2bnNr5VZkwBWTsa6BizUrFSpUPAYL9WhGF9vUDtaeoqoizV5zjc52HDRhufCugYu8aw8",
  "key6": "28P4HmZPEKb5heXDNqsamzx3YXEeBTz8JMgF1rYnoYgbxcC6TJPmtHLe7HmWs393nQzdUSiDeCZ6sDDmq4NgcH6s",
  "key7": "57UrDPrRn9h85eFRbKH8811gr9oQrCS2R4tHCwn9BWrdo8wHVK6qBLq8VhCRTQ5V5eLgSCoJHTC4moovYvgwhnWK",
  "key8": "4iPkX7EQigNNAGnj8PqyqmRYrFY3wFhEKbYy3oASWLGwTPSp1s9D89N4aiJjuYdjLdVKMGbLHwVRXGGKt38g5urm",
  "key9": "4Mi4hNtjjfDqmuNkWQYvCxkQcrNUjiRKEdZyPrURegCbsAL1gCfD5nnhvUyhb9sGooYYD19FwtQnFPejUZ7PgzhR",
  "key10": "KtZUt25Vd4R6qETP2RazV5KKicTtdNU7DwXf4AByArn6KQ53nQj2aFSnt5SemSpYFaji9K2KFtobVz5XW2NKMoG",
  "key11": "2JS5vRYNM8ALRtZGNoXTZGQRJMf1w4ADoWQbXaBbDXEmsrmV6PsdPvu86NnScFPfj4E9dN8us6m9PqxbsSMX9aw9",
  "key12": "5gCJ1H5KkQiSahttL3Yh2SVGvYy11Af8nfGeiaytcpe8X4mX6aPryjrpP3vAiaiTnjDnJwKYDTKuHXLHb5eB8pAu",
  "key13": "5nnAHb3F7LCihDNWMcm9HPttYGvUDNm3CCRRWKyRryNP8cP2AZEXZovEKV3CezCqwTrrWKi1i4rPnmNhmtqYwX98",
  "key14": "3Qjaf5pJVeF9jfEJxVbfGMAWd8BTzaZfJCDZCjXeW8sqYPRs8rY7YEbXSRpzqnXRV2HCRJTc2pLKc9oqnb6Yb4bn",
  "key15": "4hkR6z4jS4L86NS2usB951j8FJ8pDCB1Y9ByusaDU9bf959KQJ8eQB11YZYLo2EDeAEDto3ZzcQKe6trBwfWntCj",
  "key16": "57fdhdsMQG7UDD5hB7yif3GoojdN2Kd6tQcYTcaaoLFy4MPZGDwMqj8uvurCqBVGVwXeKVymMxHhrdaEmDPJY6M5",
  "key17": "4gAEnDe1WFniB6JTeHcYJszy2LRK9Mf57j1KFGqnTf856HcT8StveX6ndUCeeQsdtRkB6UKYnc6eWXL1QpZYWAT2",
  "key18": "2g83M2uWKiUijjGiZsoPaai5ErZiF4v6CbUbJaxRsFWciUaKk4MoyWMMdzYG2KQWhrYNqaU7VgMe3X4zfj3m3vDk",
  "key19": "8AKBcjgWTLWrR46jvDo62Stufw7AHRxXffyVJEusNtHPof7ZxnCpk3iPhu6cFXMJ6aLMG3nXF4BMxoap2fAd1n7",
  "key20": "4ZJXJqJfj4DEPmHQRynLUJfiTFmkeWmRng6QvZ8pM7wEHJwjPjPmTuL9j1iqSrSp9s13TPsBthjeJ4Q8nuAkbe4t",
  "key21": "5cGFfbkHR8eRTxrYLGY7TtVAYT6GgbCFKSamSHSbG2eA6Ta1ZLK7Hcjhpsvdqak1u53gAgfQws7Eq5TgYdisCwx8",
  "key22": "3eqfadYTryyKQJaKbcJ9nFcwqd1xq1avd4gVsDik6yqDLjU8mXBkXs4zmPFDRmo1NcM5A1EJZZQL52FP8Uw3Mq9e",
  "key23": "59CqVpP2Hy8Dsvhio3fkZPDukh1RkmNZHVvQqRx9qqkWq4trDTj6U7uz6BnV3adRYeLaMhNqNaAwAhNr2EipRkJx",
  "key24": "7E3D6QK9pbcqL3oK55m9RRV2ETMDKQ1RYLvbmuq5Gt7qKBQdnBVy3gwBJpn7S4thWhiFNtbeUr7dwhWUJMQYd76",
  "key25": "44gASRzx6FRYtRdc5zkvxtTNX8ddEoJKbea1KyhQdohvzcrj8dfvSsZSBJmJMSEjubRo5psasMrwvqW4SJmNr8a4",
  "key26": "4kveSgwQ14m7HvD3eXbFMRUAH84gfuQZz4NyrRp97AeoUj3oaVeA7af81D4nUfpMNA6FBHJm8S1V5hzLm1PYXoMh",
  "key27": "51yM6cxqkRfwmQ8GoiECeGhcBqiwa48T9mKAQnWwdtRMxwWEpnNUQbNqWCwrCt57LunPqtUNzXNkN6BAGDZjvoik",
  "key28": "3oEZmeWV9SbbEgVsU6AdpiNb4e55EFFPwikhus4QwQEW2L4GfQU6QL15xmyv8r3ZuzZUMCLevbqMiegxXscGEbPN",
  "key29": "4xiLLo6hzoDkTCC2TwgpegY3c15TqEamdorRdyST4L4H8JDFhXf8r53EvyVEnx9b1FtqhMh4gXQH4qUYqAbuMgru"
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
