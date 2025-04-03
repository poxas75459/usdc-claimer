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
    "3xVae1A1qLChdNVy4ZsJo3wsHeKoZ8iEZYxCpTbJJ8JSF7bsieojgnR7cPap4b8XPkhAzZ8z2e1hJijBeqNMc7aX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "544qfUd3ikvhbtWhLQ8ckrhqu4qz4QrzEJexcEiGobnSs171iZ1JEm3ajQNj6JwrLLe1McLmujDkxLxNTxPjgTo3",
  "key1": "LvMTXgdxDaR3xjvFk7KoFhRRmr6oXamB8aSixpzoSWh2YpQzvGBJWMtdqUoAbmbte5sdJMmfeiPp8zeTWXZKoWj",
  "key2": "26mThi2yrYE9TKEHZ1jEexJQnThQRYjXwNm4hND7YsSdBMNyawapnpJ67fRBaHQdhETeorpbDgcKTTL71R3aZF8p",
  "key3": "5rhj5qMQ6g2JJE5QZK7JaokgiANaTuTNWVEFDSMYssYJBqqz3grUAvCQoghUdyHFyPgPeYQ9Me9CZPfKcRj3bmv9",
  "key4": "52XVceAuzYAWqWQXVrPN7NyQG4hdy1yS9Z2W1rvh2mcZxgAZ82BuiZCyzujxFvpf6dcUAELXbePYx48mxNd8GUFU",
  "key5": "59AenDUdnwbEZWWGU2Vtceoy6xqVm3NVrGcs2KMFCJA62wQfyp5AwueW7Zzcijn5p9XQQzJiYGqf6xaKuJ2AQ1ks",
  "key6": "67JU9PSz5EPXH7pDHx6GM33MYXf4G1Y2q6USmWR6Gv2D42Uhgv7Quh37GTCS6F2e3tdgxoeoC8s8Nxaf9n3auy1y",
  "key7": "GJoedHcfEJHJXzJtPPafDrYy4h4r743LkXBWLM1Zqq3uv6otk3AjxfUsZiVGoADD2JB9dBYkHjbuKdSqdK9RXcp",
  "key8": "4aHKAtByokqHfUNnprZqKg1qpneX5LMp3GAgDKRbuLC4J79K3ytBUChrtF5nP3puSbYYmLZYjdYaWcjvmSCWUQj2",
  "key9": "3c6yR1rJ5ZEtr7YYdNqkLm1Y6DJjJ1Bcd2GD1z9rqBE5M68Q2n2dXeavLZjTFSPgFZHbDzRV9uyXKDmE1pYnB7dD",
  "key10": "4yybseL2PN6qCpC63wtEYU4dfzfiUKtQt9MAZXoqZfY3YsPPoS8vc7hrtzBzaDBGBmKDSzpHrxaam2JWM7XvKW1M",
  "key11": "2LJkcjiCkZdpUETVLMJfoqkzDpCLqMs8BgJVEtV4QkAPKVuNvraoweSGwZnT71gfMKV2zzHhife4ridXGXTqGoae",
  "key12": "3y7rXcxSwTwnY28CwSUsjtL7JBuEEhgA4HaQsTPoaYe7oJ5hQvGC92nCCGVJizqyDBbg23Mvqjjt5GoiLfwZ8q8w",
  "key13": "3hPxpWwNcssVQbo1jfBRJRVftfsf65Q6vPZGcHQgZ52BBDiDWw6R5dsLLxStTksTijYWD6qDzRXfU8gs3DhBEKUn",
  "key14": "629jM21PZQjeTxpqBUZBJxxhSVga8tqJfuiW8cZ1E4ixHFTgzYEzDw1e2zAB4BCLjUWiL1gEoToWuX5bGp4KMiT9",
  "key15": "3NbVr6bMMEpuGapUpMT3GfwoQxMZ9iD8BuQWbEFn5MgRLc1DQX2fouGc9FK3NnWKiCksn6FR7CP29gCZWjp9yxCr",
  "key16": "4WBxJEs22T5YPD3GR9mRyReBsTCjMNPm9CBRv2NjuuM65KEkUh9AVnyfLM4meGKaaZEZkWjSNnx5Ln84oSrGvugd",
  "key17": "4GW1DjauHp41AQr9KERLskahtCHbYqGEeThHxqZupBAs52gUnNNQ9YLuptrhELk2LTNqqJRV8ULad98uCqRDpWVf",
  "key18": "5M7X5wKP9S5M4tt4GrD5vtXXAMFGeFzsuSVjbVbR5RQpxJtQEUvmaSp1zCRWu5s8vJ7kRyjcQGCTfjn37r6hundQ",
  "key19": "5Thm1ioZDcuWD6sh3gnt6owQBq2bHVESfvSqrURiPrU1dMDob4EANs46hRfmyfcPomap1VJbC767Q6bfzUfuxLHE",
  "key20": "ALfViXr3Xb7zpG7cGC72v4yucyH23xvu2u7i3vzWhJJayy9EmhtrTHpYqXkmo6A17zNQpw424UNdYaXJ3hQryyY",
  "key21": "2TTr5ERa3TiKwpiBqAdDgNUfqK2PWnfbkj1moopSYX4JH7m7dA9i4QtMsEFHEH1vw2gjTVyjFxExKMcFJP6PUSQo",
  "key22": "5uuFDsDrQ3YZaZmyT3McSvaUQuSJ32zLCmQwpWH2TQi9xbAxLuWCxKJ5TxG5ix2gHa2C5QhDxWuNfoi2hn73iV6T",
  "key23": "fSgxvzupWQCRDouteZpNnkCFcTKXo2dX2eyupUQTrwPB94u7FxzqzPVHX9ky38UCugjRK6UddAMxH3hgXEXdxa6",
  "key24": "3rgp8Zd1r36HL2RocuPVisLmXiZfPmjCpKWKZi4dKn9gHzfUnxpSWD88qJ4QG1q3AqTueJ7XGeD32otEcSqdeGEQ",
  "key25": "66ixVjpCKQUBBcDb8RYDdj6QAgG5FuhHLMio7SiDRMuvdhhkTjA9Nr98h12w5m4g9R3Gxejp84qVjmsUMEeNPzVr",
  "key26": "4JqDxKcM534CqLYyB7AZaNm9DYCUqApEjufabWukJESM9MicCTqGCuPChX9mK5XzEvqgffKsZ2XDCNXWPN6UjEyC",
  "key27": "2ZRM3zqrU5uS1f4Ue3UZLazmVQSqqb2ePcobRsS4sSghJ8wSKRXLBaTFFUVo6zuoZ5hk5vtXvzPX32G286mQn1X7",
  "key28": "53jjc5K578GzMHGGnBXEmTBAfVvZDXJ82GPEgdEeXQkoE578Cfd5jQVmbKw2nXTi369NZZQuGQKYMNArW3QdvhmM",
  "key29": "4nLLi9kLS9tDMDTAF9ixFMAzJmDEK5cnVFDLAC1JPA8gLLcujRSMZJmC4NaQ1AYPgfHh8UyKd67X4DZiHWVAAMYa",
  "key30": "5Y5SFCWbwNeCNRR1YCpfHhj4ZpkW6pzxj3QAzr6XpoUQo2TCHEwbLFQ2jgHTiGZMiN9Wr46DapDBCjBzbCU2gbcK",
  "key31": "5T4AGfeJiKxqU2S9Hb5J828jEC38BeMkJpMbLvSy7fWMn8Kz9WSYEod1aUK17Rhm7M9F8CBK65uoi7pmafsmivgg",
  "key32": "5uYi1J8ZVtwNDusKHGUVJq37q6ijmwfoQdtB3jFzUXSEiKJM5vqziT6MfeFqHDsaz8CUyMEvGpecQrJodbXD8mEt",
  "key33": "5VxLhCQpymEGL2Wme2A3Wr1kAoPvnQb6MjbKAaswPSYzEi99hP41ydEZmLEs1eVhTRxc8r8avtTESzAbFr4ezQmK",
  "key34": "2EAhdbMt7m3mqmq7RDdGc8zVic7Ti4BkqfhQed8r1bFKgxDP4dUewsPqmQhQKFxhhVQSyuzRQJt1qwFSn7tYf2U8",
  "key35": "3kzkFoVgZHFv2DLQRpR3hyQpPVyU8SYksPYhxwUSvkUXuKj9WvLrmCzSw3pWaE6uU32pjWQHWZJ4ihBVb69S1tby",
  "key36": "bmBRpjdroisNdpdLkEvstS9iVPAQtV6QTsJx2An6NsQjraCTe2p7GyTBWS58hFiUmfpC2Y78PEMTDZ9rQyrff7m"
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
