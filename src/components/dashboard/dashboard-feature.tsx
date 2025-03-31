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
    "5Wky7kddoXBSP8nuc4m94DFU3TED6E8KWnwqjjz8B1yQD7ghCSSYb7FCMtsTcTqi6AyB8hYhMVLEFMZM9z7LWbmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NU2rKqpp3VxaY2Us3t74n296bZGHW1cDYPp7uCzqPXA9voLnca6VivTRso2LcDp89kK2hVZfPey28ia3QAiArdZ",
  "key1": "5d37LjDs8chx4gSuShY9Q5M6fznubUfrrdN5Vjgwp9s6Y9XJsNU8HhDdF8ut7ZJ1U5bpro3LjgHnZgdwCSsd1Qjy",
  "key2": "5SiicHugadgz6QVhv1sKp7iyJ1wSbukjHrFxnsAMLtw3GDAD4vMC1kA2GstWZ2cgfnFCdP8EcNasBHBfbKMZfpvT",
  "key3": "43zSBF2rxiAhD8r46oRAyvZMy9XhTYLAiauczP2iW4Pr941FKExzgpLpo7DUaYS7CHB2NNfdwpMkCsfRVNtEDSq5",
  "key4": "4M6g4C8Tf4LN7DME1nkdwxzWykYfbE7zRgzB4izTSwe1ZXyQ96N695nJA143x1fhvbP2sBLQvjUXnBDEJoqjXa7M",
  "key5": "5ReCMg2DqN7SSLBdGmdfUMjPiN4Ktai54yJHKDHcz7S3mq1fwRx4awqYUxSVp7jvd5JEnc44DNsFGy5VYz3W3u1H",
  "key6": "ZbDyycRRcCsZxTxcmNUJJAkA4TENcYNPZCJX6hBFsTaqbfVCW44aNV69SFxqYGxgE3M2A9sPiVNZo4q2FRUjWzh",
  "key7": "PUvUmJfXvMsWdDSPRBC33XHLtfnJHjDKg1h835gMCtTRQBdejZsXTaw5PnC62y68cn1BEdSaS5y1Q2XFeAhbjzi",
  "key8": "2TZTgpdM5miHjmPDMAhar9vDc6H4HwFZbndWBswY2defuASrNww4mCK8B9Zg6zAGnyRPREM5fXuae368Uf16nWEN",
  "key9": "TAG8EfCUB1GiWbFMxRbrQFEFR4HtNhgm7UPqi5kShppRvMtB9L6DVAY9wUuNaNmsZtFAibmtqk43VyxVnnprcYU",
  "key10": "3LQWu4WwD7dqFGwLYkN38UQGNn2gD3XaDvzQ2DqrmBxrwamFUvCkue6K9WQ5LTx9C4KL1VHURjnVBsy2YZ2CkdBe",
  "key11": "42ewpfpCpTrCk9ZB49FQS4F5LzSbms7fK5hpcnGqTypR6xQWEJZwwEpZDPhMdt7qaewvKU9FsnR98ad8wLYPmUx3",
  "key12": "6hdzjzyRp3QksBumdnFd52ivodAt85PpfhiKT6Uk2j8mu62m6gSdtYg7hhvPash3tL6SzysaKPYTRMtiGePyRDN",
  "key13": "QpHC5SgoHDSooTmshbiqNnYYCXqvRXvTTe1whuxX5XQFcEUAisFBVBntktyRoxkV3TgyyfT2xMtKVBZuZD1GAP6",
  "key14": "4Eq2p8hHJRLAmV7Fd6CsMtzYTc2MH34oooWacMX91TZp5x5hKhuHMk6KLBAtG5mwRsfjf9qiurpFnAuWwosGQmhH",
  "key15": "PGUYeg3UmgppY2aSjWp7KpAcA9fcDNitmmCLMRWRAziPQazuyDzAHATmXtopT9JgkEREpWVtzK4HxausVhw8L6s",
  "key16": "3L3ymqNTs4rTXGKVinzLK6R9eJtDmWdY4GK79utmRdekNDQGCj7DdJp6R6ZkaHLJTJBi3BW2ejcFP32rYSfVWuaS",
  "key17": "p9XAtk5tSYTBg4WXmAumhKwy1oTVfuKMk1sE5S9LKfAAx2wqavobmR3bD8hFPoV7nk6eiUyYgsyDST93bmuoLqZ",
  "key18": "4a1rbyH7X56XNuMw4FgMisLFkqJAMPmE7D7V33McBbSVRKQwCUpmuYkNHG2qA7YVADtw3ctwGFaxiFT9ErSbhkXB",
  "key19": "3G7XYJQi5fqFcT7WcnS9aqbQedKvhV76uB7X9RBxKp3fBC7sJ1YnZXQ228FHdT3UvLWgYeBWALKbARnGvKFLrYAv",
  "key20": "4XhDopn5c1hUusFPJs8bmX319RyPmb8PywX8jzMrRZSxhkNdRhRLi6LveboEQvohYWjugkD9EkvEYycoqvQDaimV",
  "key21": "Pdgyt9y9AgxNZN427UwNABRwoy9MeTNWLZgaP3Mu3n2ZX7dYKQci94RGbyujLEgPhnY4Y61kGF6EkaaPGzFMpsX",
  "key22": "4EaNwBSoKmRZHm6EUc9vXGXmFkicxNkfMr6B5CAA1chUGuh8kbnRdEqUHKNK7U6NLGFgAJYYNWvds4jrHzTcJzbC",
  "key23": "4dzKGLoMxJjiLiF1MMx8QfS9spkDv6AEf2dMKTahNJPm95x6MPntbD8QpVRXArhy4cNUaixUx6FSvmkf2Tw8aiLH",
  "key24": "3LKzKM43iAf4NYok8zx57krsjyKDE8v97r2odBz6y1ffTFU5EipYtM3BaxuW3hs2FVGujh61NLkw1gCzEeP8NH2Y",
  "key25": "52ku1FGZFkUoAjtmiPdJPTqYigYRWveNPgDsv5yJLhBkbS2BM4zQAhd4Jvgk7DQr4nJxbr7ynCizi6YHZ5wLae6m",
  "key26": "4TFcWSQh6pvRWbsToG3V5wzBopjLH5FmqpeHqwMsShFryHMKEmwmUnbvaKdEJG6PPy6tagG9Jzi35ZnV4pdDdgLC",
  "key27": "5mYWUbskGHCVWFdFpeUfH9xsFaSjrdCt9JSQ3XXEAUD5QU3Tz3YqixQXronU8EmwRd4bKsPSMmYJgNTTYfqatJDY",
  "key28": "4YXDEswrxCUJwq2544U3yxWsvw5xJpF5VCTWwWHKEpcUtJi6pCVva7HrzECKJc7ER7nT4GnqNgsbtwiPJSFKrfze",
  "key29": "28ebvgJsjyEYWR7EtRzrxohgAnHCWX6jrNG2NhWYCLXKh9PdcP2eMTnUphibteTgyFwkcSSngW5DCSiFKKfAn58n",
  "key30": "59nHSXLAQCL3NNFwDig9em3gyioUmJLs6196tmTrg3PhXRNnWoSJ6QXgeMTkRAM6WxqZS33E4hC7CKmGwNKXVkrx",
  "key31": "3XVPvBT2egH98msWXzdrGnJRVfEij9v8ANbnoc1szvE37aWm7KFT4TnAxL8RL8PMfk42SyQtwdBDtDy3iRP951zi",
  "key32": "4Z9j8aj69eH4tUDHuQ9RhYxkt5WYB91XWEQEMWy6czM3cb5sft3PirdxKLQZoSiRXfXZXyJ4Zh2kF3pdBZi42rZc",
  "key33": "3kANFZVo3iRVkSG9PFE3qycjubGdUp8L2yBVptoKsCsXEKcr838TamtkAjX95pcGJkySUUeDzSJ3uJD5wzH384gD"
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
