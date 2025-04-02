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
    "4MDsxuNbVfhF3w7BWjFvLGnS9zsqEtmTzUEoyPvujLXu5H8tpSVUn4F1RxAQPMtMBgmZWWzrDfezQ2LUeWH8cEPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ruVoQ88S4RqNC6dLjyJznXWvFVEwikj8kRWPYFYreqovFQPxX5CbdJmTic5iobQacFiMuwcq9PUL8ZcNBroZsDg",
  "key1": "2xebUvfp7u5XHwBPDHAC7jf9PkMkU7izQq1R47HY4ZpJmqg1N6RTPjPqpBw7u65mk71wfihrRpDjZuTWFmUU189L",
  "key2": "4fNpvc6fyDLE3XW9ZvhLTE8wzHsEuw3iimszQ92643PFA4tjnreYj1NG4t8sEUbZb6qfFGbV1TJF6UJj2me9HMFq",
  "key3": "5qAEtZHtmkJ2TXcPRrDJAtPmjk8wp8BK5Mku8cmYJJn4YNMx4WzEZYLDjkN4QNhuJ94CcwHx21ReS2RKFWt5N6UM",
  "key4": "2MmAEHv2axi61VYrP1SCL3B4mVetnTrZB8dDPTEL1eWSEme4gtLT6Z3BJSyTDdics5ATWvZYn7pydr1Pj82kamJ5",
  "key5": "Qxbx6FjZq7A5bgBXN65DcPr59kJBAhgCXs8g5vLsvUMBfz7uM4Mh71i3SUFVaFGq2nCAkGMUteno6GFRG17Jzft",
  "key6": "3xDfWZTkjooRWWvCdm3m3TRGgpfEdEtgeQejTuifHgw6HrkJ3JyqhALBGzLibJUWTKnNLj4sA4PYefsVuveu7KAd",
  "key7": "2gfmvpgapcWXyVcd28faVxWoNJ275unnbTXPzLhb58PJ1AjSDEBQxSSfpPGxL8BeqtuGr9JLwtmkxqcmJcs7g3x8",
  "key8": "4SgyUNpro2Ft9s8Vqow3KTL5mwhcQBgugK85DGZxUCccXk8m6JfxBBN5VWaigxKcEW6p2aiAtZdzkQhtrbr31LoX",
  "key9": "5QGdEXyjG44SV25k5kGnkcew6jmQAsDB6p4brTvmjCijedZZhR5WP2XBttHhMfPbeH7GA9febwj3oHLfNhZUdBap",
  "key10": "4cnYYrfFkNUtpkmesPX4KCPciwgDr5SP5jBwTRBjHL2Z2cNcQcuGovdFFJfswEZwqGXqbRJKaZ4g3WfpJFDhSU5k",
  "key11": "5eQiT5Uwhn78j5YsaKSo8MSi4viz7iLpmobNSAgVtjzcMtZzNWpk5P3RCpYS9vHYXxiDK761viB9GErbcfJnbyhv",
  "key12": "277SFgx6nRJmXnXikVV6vpfAjsiS8QoyToDYd4Nt9o3VGfLoMQhq9fCy2MRgFaJ1U6wvhpvfynG4THwCd1nFaapx",
  "key13": "YUFs1p6zS5qPqnse3h8Vwmz77PoHwov5ewUeS3vBuSacSeje7K68oKVs4UZb9yg5GBqhAwY3DvtsZzZ5YQ6d7sy",
  "key14": "zp33r2UaakudvLbv62HyDdjaVYQpP2Ew7zfDini3p28bYoKceyVmkqkXaCDDbG5nEtaxev4d1HyVVzX2mzyh8PH",
  "key15": "4GSvcgidEhUZAWJL8ry9cauUFbt1KZfVRFJun6Vc42DmiSMiE78PjDYJ9bwbo2sWY3yu9vdEz7S2LNwiFU7WrvpR",
  "key16": "4Fmf5dcGF6LmX8Lz2ChnJZTYnqjLzf3LNcQeLTH9n1AfC6n21eHtTRMSxGCAUzkjJQWrm7eB7q25p8oUfZb7Vba6",
  "key17": "4eePnkYb28L2ScfQf6Wey2SfdUuKSbfxjpJ2Ce3YKMHQsULQJHbztxWLnGRfERysVc3arqfPgYUVK7PijbWBnjxf",
  "key18": "3hvfvxXRCskqaJNuzSPZee3Ehxf2irmG69QELBFaszYi2Z4CHRggQSpyJG3P9Ejrb96pSdTpmvpFUxyfpDySrRKv",
  "key19": "3PYSPnSE2n2ecCRNNG8KxrBC2qF8okvMRDG4iBNz8vMAaquDNYpcUyRsGXg4rDzLoJSyzQwvCGZxdR8w96zWgwqa",
  "key20": "2TA1TimsryBzEJfRS9vApyM3sNbkB6Vxa12LR4HgchH27UF1sDUYXVYrMBmm8jYuPHvX1i3bzz1ckeuz4ri9wxmi",
  "key21": "5fft4C1FAuKvkRsWBWPWCPmRXRB1tFvk5YPj8yzEZVhyQ3mc4285dtwdHqtxEmnDWyZw9V6ZQSdWGcQmsPnmZ6D6",
  "key22": "4KgT94oakLWMUGuvvHKeosY6RfmHw5usieaMLG9bzsh6TZ3mZ1dTVutzqvzyDPAEKgFmccC5QyJdxPY34ncuNW42",
  "key23": "5VtUaSJe9CQveAuHPTm4zz3rmwbYvGD3aUrXxTY2KdR7b7b8p5qGeMrcoL71TvL3Dng8QLL8ZTbiF41ghzqykFJS",
  "key24": "3okxBvF5w2YYGDBsRNPh2TXErurzg11tMijGbwBao6KaPeTXNZWBxzaeRu3akD7oYgVWZAo6jo9ZQYUktMnAAAeg",
  "key25": "5KEJeyZpGxdWAU5a3cbKLHifBBdHrbHyh4y8hybztbMpLizMfFVLmHq3qsAGvfMTaFSrse3vbvW4mXG6TAqbR4oZ",
  "key26": "3EHcP5y7wxQcj7asBDdTvVe64ug3P3vihz4CftFyXJhHyyE3DDHEjXjEnp5eVtA1qLsT1EtE95s89n2jYD5ErRZT",
  "key27": "2DWKXBER7L4sfbwXDgmxAHkWRLTGWsYXMtykbstbjzNTE7RLbFit6mYWvjU2t3tqVoGLpuD4vL2kj7nzXCvrRtFs",
  "key28": "2kCq1srWerDpiTJZZwYVhWbDHDppYAhFi9Y3vtAbdTnvZLxb7Q9qS5De2Ynn99qudGiTCER2HHDbKwgvqWEfoaoC",
  "key29": "2opC6T1uThRcjyLjui1xih1gT4ivbujJ8iWJNcLA1VJWNYyztBp5n3R5fLyuwiy7sQJsrYv2r6kph6jhDbtwLisp",
  "key30": "2HBh6rZz4QJX9nCHPNBxfNHmQJYn6CLAJokK3DVkpumPRQPJDtZXXtu2EgmMa2noPGTi6sYKPbPbb8QyHwpqEJ5S"
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
