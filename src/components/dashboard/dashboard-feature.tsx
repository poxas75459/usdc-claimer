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
    "UymWQKbGdbCfk1cLKDSRRsjB5efKLMJciJLUH2b5qpr5MNFPwBgS5ZSHw1mUVCKFvYq8T7hLgXqmC8JzMY6G16n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1YEy49pB5MC5bEv5Hn5VFoYTnRMCCrKkhnHtPhrQMPL92M8CWEJjDRMncTf4NejWcz3uG47GPKcW96dXN9XLEif",
  "key1": "Md2H86m5c5meTi6MQ1jBuKH7hmGCeKYjDYxsceBCzkdDevogS9uqvU11Uv1w38z319uSpbaEHEPgbUEa5v4RsiV",
  "key2": "XFpvBgd9rZyg7TJCk8YDPzd5yUCktpnxPH7B7M9dLubk1MGcZiXfcswbeQteaGcr2SR61hTZJFT1kU8EDe1BVtN",
  "key3": "2FZBo1BVgEcuTZf7wJ9y9XokZLmPoonGYH9dggZnZYf7d7bXWYsh1uRSc7C8fb7Lh2ubUTdj5xmw2X6ig5jRGQQY",
  "key4": "5uMCbmnbZMpRBpzgviCdRGAo5ZkcuCfMSDVXhxQnN3tQJDnXCKRtQwo5gxKY4J3dbDp7EhDYWHHHmhBspRfVCVjt",
  "key5": "4VXTBgphTuqkxtkPcraakeroBrRe2tMU64aULbGgHCmAXZbuZHkKpjc5dB9i3EhfjbbjbQ8cK5Te2eLyhYVNpWJ9",
  "key6": "4SwskFRpZxv4fehEXYRxuZ64CU7vt2gNbcNsKKUN7yEgfdcn4X6rn7C5S9xxm6cRsh7MkN2Ec79CeQ79L6EXz9Q",
  "key7": "pm1BK3oAtqpWKSXiA9io9CKmqQdNDZ1jgVqPwRgSaWq8c8b1VwXa4my3qyDUek44dwyn8cPpxzC3NwYr5Q5Qvfq",
  "key8": "ZrN2Xzwd6SsTz36vutxfJmwvSv51T1yu9EydXJtQpGYfN8oiGGJaNWzR3fGrYAg3MiKFauVEvLw1NXoGuz1yVqd",
  "key9": "4WucaV8Q9xzwXZbW4Qukq3uGWbxQbZWAzFVyDnast7LxTFtQpaeP2ugr6vDmDFyodQyZJmnisAJM4wfmczLuQvgy",
  "key10": "4GsykUb5UyEU33kPwh5v59NvYEDdspGprRAB11FkgfhdD6AJBk7ipJDQTBPXa51kScoCWPpsPisjE5ep7Q3K5333",
  "key11": "2AYGsoJACaqSCUnexquQruqAkLzXCDqYai9Z5VHNYwQcLawZXeLVkzdmYK6fo1UDbAzzTNFJkUsg5vjU9TFLky1x",
  "key12": "5CGZjTtUF95fyf2bFv8UvfEA1w1KkckbyW5kgBfgWVPvjm5bmphjH9LomxBbirTQULrR4X2MdDiihA1emVR4m4fz",
  "key13": "5e2emfmT3XZznK6iKuH2qBNEak9v59HHdZAwWUKtDwB8tQWz4aZ4AhJFJL9hSSrboUSj6HZPXtaqieMm3jBuE9wF",
  "key14": "2gMchvbQ8WYbYLNBqhhdC2Kp4KRz6hSCFbW4KD5Mpca5nqvF68iAKLwrQDzRjqyKV6B6gDNbMhjppSnREQRAXVr9",
  "key15": "4gnZAoEk43pHEAyaF4o4rmZUwBnUkSCTMMHRDyKARrzLSZb97QokvCiZKiVXrwvBdF8KpGqotKEWjFB6YgLVkiuk",
  "key16": "tLbpSq4dkEqKuAo3mE1rHg56aUc8bwJyvfXf3zWc8Fqd3p3vyiEfN5jtdBrys5D2oYxfCcgon5afHfDrBbpoFGC",
  "key17": "5XsfRyMzTdXqXARZkvguuVtRjUG9ifXZtUEYNyaZkkR95ShgjGHHxFoY3YH6D1VmhWnWefteBodqfFuhPnCvJiM6",
  "key18": "44cJu8C7fbiB17tKc6HvJRVVqKpiMw7H9PEu575b277xqqjbHRPqheLCoLSWFVRepGKNDaRM5K2nns7m6NRntwBB",
  "key19": "61XWwyS2LjEuuL99JLPuPyVtwFddZFTA6BzAAgiG6fFDsRUMoaVNhuJTo2DMaCcmFPXBu3cT3kRgqdSzhC9tYc6K",
  "key20": "2UkA1T4zMobCWY9VHQRq67VPcqXhT875w6euGvSTT5V69TznmLz2gE51LM6UoYy6Vek5L7FfcPrTAipovKRKQCHL",
  "key21": "59AsG4tAZeGKjcyRpTxJNpPUbNYH8g1SjjSzyM9SLQvt9VH1WVctDYoCStQvuiqzj7V6wq1DQYYsJoVTHvjjmo5Z",
  "key22": "2ccqAkhnp4oiutoHbjRHzMJLD3GywoQ8QAqmYWDqioQ5D7HoVWDjRGLyqYLA3pXiYRRdxy4RMGrkMhA4Jd8PHpfH",
  "key23": "5ghMwEtyUsvqRxHXskYbCuPg4JcF2xPNKSXNZWt5MNxYxKBLHAMpNDYNbvyScd3A4xBkXCymmSzHYpNXg9zPe1go",
  "key24": "4RaiwvN9JTuqLjPAFwhUUcMTTRdLo22q7hS85ThKUwdeey8A5DhpM6533gyoFFNpu2Agp2V7N9757z5kr5FTTYhW",
  "key25": "2uweHVHj52S9fRZXryhDRUNV7JibkEYELxomV59kbAWPUBkzLvR9E3osiwjq358iX66zpJsdmj4VAQiQuGsKcxhp",
  "key26": "2zPQZXto4EwanczRcD5cBuXs386NzHAFEGN33AD6U3evoLTm363j4tg4TN8Btv5Hb5YF8FEbD7g9JsxH4mC1jrUS",
  "key27": "3nojPwnFNbp3jWCqDXnThKfjrNEimEUSrxzUJxbEvXgErvoPCGrNxRB52r5WCJQPEQrnaxAdoiyQmSG2o81pWbiB",
  "key28": "4RK9sNpwSW93kBuw72zhxXRXH5CcCE736TcPt6vR1xovRiHpftyv2tzbXzn17y9Jt6XeBj3cSanKRx2N7FehwJQp",
  "key29": "2eeS9BFoZJ2ArWdnWSfUX8geYyLbCqGqcWC4sfqtXahnEyvcXwJymRWHsZAwAmxhUSfQVeb5SoUToRVBjYpA1Z3V",
  "key30": "5c8zuJdJZVmWc3JphMVy5gL9vPDDEPA8eWqsKQUg2iwSo4PXfvhnJQFsm4Vj55tA1KsRUzY649eCKNejfyQVCWUU",
  "key31": "Twmm8qoHHdq6oHFRfdoxrhNGoqzzf8dtZf9JUvwWfYqGqiPsTGn6wmLTGYfCvWvHmE53i4j9rkTka7Z7F1oxUGK",
  "key32": "RKvuwyFtjsX4jz3wPKkgUD3QpeSqapyHeX8X2mGgz4dnE8S9xNXoj4PDiz5JH2AML9nj9acFChW73XERv8tAZjY"
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
