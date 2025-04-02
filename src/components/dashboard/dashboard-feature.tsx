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
    "5RPYRBsXT7pZJaQBFYMhwxEzkKWAqKQfwYfWHDFaS4aRqskTb7DBVsrRogqogRny7fSxMk2vDjYTcBohANP68DWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LF1CDtVJCuvbkKtNaqnYzpBXTrTt773SpkyRwSzVDir6apfHjt7RK8xzrLTgY5oZrTBjfxY2GHviYojFAE2TkJv",
  "key1": "4GqR6BD6841csCQfBqwvkZ6QSY89AhdtmbZL6bjBUmS4nDSXGz1W9yaNvNJVeCUSGyTniCk18N6N8fPtFDj5Mcro",
  "key2": "4Lx4uvbSYDPHEymAtiALW9GJ7KQxJngupR7KT11wj82kTuxpfrMopkq6iqc9Z4GUEjr9yZF4SCpRnDYZHCfzts1m",
  "key3": "2rcdFc7NjngxLWzHkyonQmkTTtP7akiRM1iFcinxVDLYP7FfbvHW5u1wS6hnjTELmXoNSb7n6kKjfpC28jFpNSi7",
  "key4": "3xPDbZdUc2UQM1Xh91S6Uz6V5K7Lnco6pTyF2R445zkpBfmPCvWaJyoibGCnnsGQBQFT7WgKaq5uTxYrV9EZAgjh",
  "key5": "5Si5634DESyTy5yvcMTJ2hiJNS1mVjSeUxjkvpzD3vnASqUxddrqmp7yngGFyf97jtQ4zwapvYKJfzJihfeA9h5G",
  "key6": "3uuiHbVJwUHCXGoQTxSWAjTiU9d1pPnuqMpkwQdUpkBPoKQdNXDfWskvSJT3eGTo73p2kumovouCvGPnxsTkn5CX",
  "key7": "5HMg8v4udEcuT2WByrYmobqarsdnMywm7KKXdfrD7PgEFJhwxmzeqzPpJktR6YCzFDLQrrw4RZ7xBrw1J6RgsXtD",
  "key8": "2b76nimeRVe5at6Zv1d5D2dZSQcpRkHAFax4j1PAdxf9ivixrnec9eiQNbZJJAi3Rg5TGhecN3sqMUAfKxMcM5jL",
  "key9": "2bwNgtJv86GGNr8eDxPUVmqSXdKyKrqJqPcBUjwXbMR97VpNThj97xZq88swDutpMq7XT3KCgjTySNgr8jLDYFzZ",
  "key10": "3K4tmNCxV597AXkHVr8CToHBG5c3enTnA5UozuiqP8UKiPx48mhpC49bRUY5PhVRJKCgR2uGuKeAL6MtmkLqvwCD",
  "key11": "3FFQt5Qqy9oYFPoXNyuFLoZPK4rdh37GP5DCLeDJWLc3ohnVysVEqvZQVVYUWm1tmqZWy59UhjY4ztNksExczCjP",
  "key12": "yNLbpfPuNzHgw31x2NDdM8h6VgqqJjeW3Z9bpkqGrWnHccBtskqBtPBxF2YkDG7CjXpUpeA3vXXcKDQtAvVaTgU",
  "key13": "3p4Awp9KQwvkd8Zx41HSc2fWbBwqvh42StM51LzNhxRs6JKZgb8dTLQXa9hUXeTWPVyrup3JuxP9z4D48QGfcyv",
  "key14": "2NPSrmn6ziXwHWXx5Axt9cBzKe7KDfVxrqqe7jKNZFDkAzHWCjTa4rhy9huVmXx2nW5MsYmfj6N6LNfPzUdFHwYz",
  "key15": "5AfGC8ER1dcVDt1HQGGx7mtsGG3MoDTNvGmt6XGJ2sj9VGZjSnYSSc67DwQRpz4qZoS2EoRWrzhjLnN1aPA8xsNB",
  "key16": "4nTYydyjJhcuiwYEXGf7So9g9M7b5rGwBVWBeszG2d9VCcuaVdvfpCgg9nk4pza96VHov7kvjKQXkEu3LvoyimKe",
  "key17": "4SGK5wdVPYnex9jekJQFg5UrR2sYGnT5b6fhfuD1MBdZc8GxiSRjVvhaQ1K5CDhHECiYi3fSLvWkE3hZfVQq3fw4",
  "key18": "4eJVwZpApL8sMewJ3E6T7486Zn319aUJqbdBwM3cSQZkaUgapTo6B1nCbhw2z6zWCy6UMmbSmyb5jrECq5at5s21",
  "key19": "3cU5UQdfpgwKaBPWQH1yiF5GLap8PoDjiZkVQnohLw7BK1wvTAvZSpUZay4Fa4pJr4SYw7D3d1gBy2viWS1UkuLp",
  "key20": "5DUR9FTjy95ReoK9P4mSj9tUzb7aBQ7bP4UWcvTwpcJuyVyykjpsg7arZg52jbMX1gDQWUD8qV6bzNTsMtf4bV9g",
  "key21": "3XeQ8sd8XAtuG12BfZUMdnXzmuMa1H6ydftqvBuJWtz2z4tHxkMz6zfmPov4gMbgvH7evGZ1EzEknBa4e6YUKTTW",
  "key22": "5aMgmoWFKvSF6x6AMtaZ5a185f85Y6SHX7ErWgNATxYXTo4CvzJDxVTjy1QjNeVtfrLD9VFT1Lh5L2GyghUKCep1",
  "key23": "5pQXYkxfCnD6fDe7qw26dFgkBZ4G91dVi8GLwP7sH858Mw54V5yN6wbhMemYLMvStNCyt9vaWBQ2Xah1XeV3dkKM",
  "key24": "G2PKfd8eitTXqftHvR3rYpnHwuzc4AdgmoWDMPcihqvrKzTaFaoap6z2SEFLv4jBF6ovxkambxpr9y1pyHGwbRC",
  "key25": "5H9z9isn7gojuFJrDiZvGEmbULtevNUPmnHn7A1hFZqAXYpVv8a5PUWyiqZgpp3B22RVVgqgP9DXvVXvBMzzVXoT",
  "key26": "3WSCwAaQPrWeuyUfJNY61suhMmauprQnruGy7S5EDwRXHLqQzpcaf3699uXUF6q5Wi3HRDJoorubC5sRdWk4tPF6",
  "key27": "4k36ZWL1dtGEUUoQAi6nPN4Foshfjnn89GCQj4meheuC1dodhsiptYwmEMpJVxdvfHn2oNtP7KqrcFvbhTKoURCt",
  "key28": "2f6GgLzu5eL3aYs3UbAKjpHWyQiGAYCuMs8FvjbCjWX6kjB5gif6ihrg3CVeFZrR4xK2Q2BkGiXYsVzVt73EoiMD",
  "key29": "2uhwgFYiSkt2bQMJUuPQjtwSZhVTfaMYFhZ7KdE4P2y5avLJ4fh2NF6HCyMsMum3TJ3CxFGuSPTwoYj1HfpVEW33",
  "key30": "5k4zyjwErZa6eKmXhJYsvHSQP74AgAZAcebNpdvcJXixgmMKLvCMmEpVYTvNXjtm4YbNejVdp5W3f8BwE7YBYXVY",
  "key31": "2SWJqeTJmLtarUhrBAyp2iYM9vYktAZxp5FjYF6fnKyQNchFP28xPbTyBMpP5gN4tcRS67ngGpbq63G1cVFyrJQS"
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
