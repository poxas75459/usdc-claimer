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
    "4G4wXoAsaUm9yw3neCzrFJwRYu9nsZyYJ1D3StrtLgqvokTasvGz3p1V4yXXUwcu78nJRDiReXFBFuR4hP2reQ3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E8ianB6mAgqZ6k6qqnrAhY4WV87mTG3qq6AS1j3Y71LWzQGEsBSB4ytjGWURcBpcCm6LRog4NbzWdRQmqu58jXu",
  "key1": "5FqVnHKip1C8RpVvJeQ2BFwGdUevcUjMUXVFhTiDJhGbYAkH2NR6t8VmaFnpH4YnbtU66hRocJ5MhTwGdptp2HBF",
  "key2": "5X8qGzdaabBXsMkGHNaCYvrHf9E8GfFtqhFHLpX47cGj5jsskRC283kyMSpceXNZM1WNW6C9bHgMa6KbgwfksV2E",
  "key3": "37AdPUWF6FuU2GgTt5ZLjmZoQ9AEqc3akNJCcd9UnUSZtrBRu7K54jnv8ujps97KEBGyYdkdXtLzEBJDw94T7uzw",
  "key4": "ViwYTpaaP6vMrpUKSTNNzsE1e6zVeRytjrzDJDkAX6Ny3L7XpgfqFWqE99mnY6XBGSDbzvQEZ8353EdyxwJbFN5",
  "key5": "3W3p31s2wsLQJvpSNZWhEdS4Po6GYxGbyrTELgdDBDM2A4F9oL2U5RTjJvcUF6fAx4vEh1Wu17ujrXoDsDbbNgQG",
  "key6": "5LXLeDxyvXgMfaSpwP8xN1e9rF82uwECx3hbCLkJGVdUQFZ5Rv1hnh3ZDw2qu8fTQFzkAuGVHG1q2zZcig1Y91Qt",
  "key7": "4kXtKxADUE77duMerX8yZgDRY4q8zLYtUdUxEPTHdqqeL6z1qquP1Pjd6gxRMyaeJnz2YpbbnM17hdf8JZ3DBKWG",
  "key8": "3EwWiDXDcdUQLMEXwXyjw29PV3cbQqo94RD7gM2Fu6F7muq4ueLRYxA2VwqhgtuShJsThPheDgMZxnZMAmjWuKm9",
  "key9": "15NmSw8GUugW1WZyPNEX9XPFX7fFLLBmmmSzKawSVTeLkNqYDQzryR2tUEKhPo5RQHZz5HDwc8wepBd37T3oLbq",
  "key10": "5gVUvYWpRbcozzv41o8QZmHw8HSk9oXkLp2ZXZBasrZd7gAf1AAPMeVAKsexQxBB2J3YufMfSVTpCDqhpJNXyXMb",
  "key11": "3ETUFedG8RJK8zff7v4w4PJbPsQcQ8JAontPGQJrqER7fFshfFPuYMz63M7zBR2CJ3xLPNp2rBrNoNccNA4vrqmr",
  "key12": "5VyTFPa5mBrLBQbznfVq6Z766crCsrmTKAHKaxYkesL37DkFzL5hm46gixCSuk4Tfg3vYyCLTdZNKEDApCirEjZd",
  "key13": "3JJUrB5E1FQoiRS6idF4cgSJL3fQpynM7Q5X9pTpQmD3c7MmNVQSXqH4AJTqaJamGLFrFbPRpT19WUQg6NK4WaZT",
  "key14": "4tFUMJpQuR3qvEYCTy4yYTQSg7DLJyqMTZuf6HzsxYe3HLDLM3kCxmes7qcCc28TFS2ydjrx3XPTqAUaJXtNF8qV",
  "key15": "3jSEPv9jo8aYZuxeFcVEMzBXH9zdRppVv9ch2B4SKinwkrKNG1yX1TuDFHWB1pHtsDqojiqYT56Nsm5XDW96odLy",
  "key16": "51njLnCGGwtCokP9kpvD2FyDpnNpDB3Dt1mrzDFJXFY9aeNu2Ssif54btmDvQ4Avnf2qNpB99xozLfgxxzCkSChk",
  "key17": "VJGRuaCyKi1NaVp73QE2uinfxnY7KibbFJreJxA7UxygnSctuQZe8vZ4i2EAFwcqQA4vwaFKPnhMNaiDXCXX6Wd",
  "key18": "4qf72Cky1RU48AwMuiWG3CFBGHNA8eXs5mjP5zDVzofuDLLpiL5Geqn4xKtRbtJEN2cDXNmP53FbDwaDar36TgbD",
  "key19": "Z9Fm3jFPrCnGUzLqtfFXT8wE5hCDh1Szs862Fvjv8P7Q8xxR19Sa1Xgp8Uv8KTnABvCcWFCyxHf9FwcCE79do2x",
  "key20": "27niS9hUk4KZsGsmEo4z2BXezJ4BpcCcY6MMvwhpGW2p2BTNeDz7aAxgyJ6cjGsLfU77k7kbNuXB6uXhSzZsnm1p",
  "key21": "38Wshzby6oVvxViJ4cZnwfEmfQCeCdAtZaPi1ctomFYKw9obJ4JKBq8L7vvfD4nRgvkehAh6aWNLs7CnzU94H1EY",
  "key22": "PDgkFVDb61GUov71rfLLMcr5xVsXvgMg85pYDCNWuLLqSK5mH5qCRnjaZ24KhSKKydSp2m8qy7xpDxUr8tWBvs9",
  "key23": "3xYrwKY6sUm6DNKGN5L6zGActWHN9tR8xyZHqnAfjNHVzYf329HotPWn2Q5ryUCyemSpMuo35XvA18cgqjkTYDE",
  "key24": "3TtgfKFXtc1Sn11mVHy9JPyg1bBcJotyJA8Etn9iYV9Lcirpe9fKW22yE5KEKjHgdPpdk3nVBcEzwM2YbjVFe8BL",
  "key25": "3kKLGv2grcAwwB7AA88UA2AVnAqMPmRHg4Qjp6hy6naw7PfXYBitrLfFmvTmuegXKZeo6QvfQS4PwjxdtHLHFwxZ",
  "key26": "5DdbiQiZwDgpEq9ZQL18s2rAEfJAgNcriJBYcVhRWzfaxUxZbrGqF57ZWbtcXnRQ8r3gmjTz7XJ8vENvJqqXtKr6",
  "key27": "QAfLBj9MJmYfdck7gUTZzZ7vBMzwDn4JsdioZ8ktWmjRUn84mUGgE4r5YFMqKiJHHHRPnJtioL3NWtYYfvzhc6e",
  "key28": "2p4XprSLSRJx975dnMC2vkGXTXCeaQnX5CDj6Uu7YT7M9ctargomFDpEripyxk6djpp1tvWoAHTSen4vrwEgcvc7",
  "key29": "27jHQUG7ZDSXB5zwyndRG2ajJvVAWHijZQCuESQ98sphyN1o2sVBkx1JFzPvnB8DtVf9dcMf1TuaTJAzB64WYexH",
  "key30": "iXjWxSWWL4V6vfX5WntYzC33QUVCYuc953bAwxRTo2EFLUjdYvumVhuFvamMkabeRauC9ACRZetE5TGDusXFpgD",
  "key31": "2isv8eRX7SJaHraJEcX8Jpu8QugJtMNgDe8WnwFXkSD1nkeZhFk2toU5WmfviyKUSMQTmwW2eFVLeFTtvRT7jchF",
  "key32": "4bUyDov9biGUTxQQRLJhV9AT86mEiyV39qioXQn49CUg12CymGcLpWQafB3hP4WYAN4LTXSB5sBGXqL8Ti4Y5iS4",
  "key33": "54wWZ4j5xJ6nQ7dtjSDp4YhBVPFR4fif5wwdsPNoK7EgT3N1HLKN9p2KPGDb37qbAL6xUz7z9KkR2tPoZiSkM4UJ",
  "key34": "34TTFGxV2sfYdBT64m5Q4F4nmVVCip4ThgjL9kxqDpQjnS2wcspNDnzxdHobP8uWKYMxoHe3wGRTdgxXRPfV4kgU",
  "key35": "4XnzY9XPjvRfYJ9Me4iPoJJW8KfCuxbWejCM3nCJZWhEzBhwdMBd9tmQUAtoNHFmhpPrGv6tNHbb9VCG4aw3omqX",
  "key36": "46K1xykUcSP2Rzgy1S1FZCySXP86AHfaas2jNXVgJF8bYjtBsxdY3inaPQi8dadxGzQR7ni4SqEj4Cb1HNgt1Uv9",
  "key37": "PQJTcAUL47qrPSb73tm2mVfhadVaHoUGiAgyNq85ojmcad3TS9Y9mvpyjzh9tWinjyVTTy3snaLyWcWrwqSHKSp",
  "key38": "5MASGePbHaNtGm7sieuQA56BdjrBqwzm4wQRvjmiX2EXHQ4wAeJYtgaBKqjg3agxjeUTYvfuxSwwjpHbaTh774jj"
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
