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
    "3buNcr7pLy1rT5TAj2SrYm3M7hxhRLiUpv4cyLKzQCA878FCm4Eo4DY1KY5xG9XGU6mGRiedk4siySAHoth4JEYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJ5uHgqwxHQjBfy6WD2v1qZUZYYpAaxi8M6oN4bMJLqCmRFBTN9b1EHyXtJUcgK75b1sWzrYcnJU6e8MV1kDQxY",
  "key1": "2qNqGwXQrqXxe991RCpm2nAzT82k4cMfntM7itE1Xs1yxjpEhqWMW3ShRcYrfUWsZ5hd5W5XNaaRDw6RD48Tsdfz",
  "key2": "4ZEkM9YJcWMgQvefdjh4u6hWzLngEgCTxeQkJ2RhqjBbZx9vNwq1qtwAWpZeLw6pAeWQMjrpC9SNPt83ZHJAzsbc",
  "key3": "eNmZBUvHu8ECehYvtkf8rNJAeDP1Y9BUoALYaf4yDPi472EGuTkC679Dbrx5ySpxC53ewTxVYiA6wrWR8DbiAvw",
  "key4": "3wSBkQ5SyWpCwZ2Rc6C2JtFYg5RyPCrVBzADNQThsV6TFrNUfwcqp9dV3in4hipuojS5276hpKY6pLueGYmxXAFY",
  "key5": "YqrCxmvvB4VTcACzcv9fkvYNBduySm7djvP8E6rV9kFsUS6g94h21uaZukxfnLrddy51UNEsmmyYfDxZXZnWNe8",
  "key6": "4LjvR2TD6grnXh5TU7utfgZH9GK8z5CNk8Z8GUHKFi7VfbdiCtoHo6HDvGtFBBs5DWqKWcTwET6n8wxYwbWxhMjk",
  "key7": "3EUrgRgGiShKjjKH5zxPtxkaUKDrNMEPLMvYX79JNn9wSvYrC93n2PvMAPXQGcc3MeVgLLgpH9QAtN2YTskBKB3J",
  "key8": "4R7hjgNivG7RjCgXwT2UNyXTJqWPJ2Ji22SBoq1eRdBf4Rj7NzdoLzhxgXc5TLtrT1B7P1UCVa95JdPWtwpp3f1g",
  "key9": "JiLp4xgDUWADnbszX6wLJMx47PrmFPEbbHb1WEoqPkTmGPDSTZxLzezbSUojKahendNHzV2rZn9UhnSxomZdg7h",
  "key10": "5PHQEr2uam55AWvpAUUHq4fEdDHhLKSRukJzZGMGw5eUfkzVW1PFgRzHpmB1o6PVxwkdzSQxZmTZo7Far3buZZkT",
  "key11": "3k4n5BW88AgAiEvefvh8DSG4Pv5S99fEuQLR2AghtoFvQXsUuFgnuBebzAH2VdwebZTG4GnqfemJXhRbDauk7uJM",
  "key12": "37HQUxZDUUk39dQCE9XPt1LnZ4pH4ybf5NfDuxMEHU1KNAfMwkKuLCQmoADQQPsD8YF15wP7r5AhrJEzsmN8ESPW",
  "key13": "5KFt3f5iUqmsmSJ9xkz8ze6BnRXVXhrTh5PiHGqmvQA75uKos5iQfMxSsvbDjUeeJ8z6ytisH2mvqfvaZRtun8LK",
  "key14": "3gAaar7MEaayj7gE7JgDbdhaXCC5tbyzSK6psrdL2VbCmFp68ZKXZoZjLhg9tKBcaqz88uFU8UN5a3boLnNCathV",
  "key15": "5XVvunYR2jtmqrtSWJ1c67S9Qvdn5C7yqUv1v9qt4RRTBVmq2h9iofwfAvCNK7inusKCLYyLNLASzNxhH6bbs9SJ",
  "key16": "3TRtPnmEBS8NZpAL4ro7GFH11xExuKxq7ZvGWtKo6FxeT1mGDDKhNEMFtVXzhidgAnt5vUYq8FSUJGZL3ZoqT3UD",
  "key17": "61fAppgrEWYbAuhvKpav79DW72uV17dJcgfeh65f7TFVH9qDRXVY1dfHmitpc8ySG2XiLt5S3ewzmaM4Kxk7ev5Q",
  "key18": "2rciCvdUAHb4ME2ToeH6PAkt7znHhAqdvRZmsnZw8WibA23ruA4y2Z3wvduRKxZDuTifmZ5BahbrLnQFBCZGLUza",
  "key19": "5xuzTwU77W2qsmcLfq7gSunDbi6gei5726ZGpoP4BLsfL4oVgb3jXZAVPpPJmjkgdQyxKvto3rvKasWqrtetL8xN",
  "key20": "7en7CcxLfQhYRDA8Bsjbgf7J4ewao2BSi2JAN3AGrLEcpiniqXi7XzjRVx39VrECUcWzrTc2nCNoD8NvcrNJtoJ",
  "key21": "2N71o9BFvAztQtcYr5FowAi2p1sN2hfxgcrcGJ5FJtnNNQ76NFUvZ787DbMun4jjPiZJpsq94Fg9ZvJCRJq5pade",
  "key22": "jvdeLXE4GoxWvK8FNHDdpLR8LCpu738wUNG2LuUDGGnj9JLq5yngvcT48xXeJEF5TsKvmYaNWLspa3qE6NayR56",
  "key23": "2k7xQXTyDChJFdu12rA9bx5d81LPSVjTohMZuuQfGUxrrt7tV29ZyA1z2xcdHqEZxZjd3EH7EvRA3zrAbJkv2mwS",
  "key24": "38SV34q6NcP2KqnLDoX39vPsz3uuR8GNKRitfYeYy83UDQNA3LqTV9TsP8ZFraTrB2MTTHfP9x4cFD9qUnGRM5v",
  "key25": "3UTv7s7BYtTHnHeQ9Y8HZ3SLbK8ec2b1ZEGuhkpG3pYz2q9xH6p2T5JL64HcRZ6HqmYdCTqeijna2RCPLU6sKzn9",
  "key26": "3Q4iwb6arC1fisiiKfnHZ7oqV8xPmvAkorsU5qyMSDvXFf9nKCpTugedxPZkvBY2nGepmipxdHJqffJo1SxDXgPX",
  "key27": "2iNDe1KRBYJsCtnMCWkxajwMZPSPHXy4yhfb98ELrhoHemv5EB4iTDvFSZyqHXq1v97wDEUqrN3hXNzuqttfLBEn",
  "key28": "63DNCQ64MQUqoVgX9NAzGtA4Mi49DXRGznny3wcY3drgpaPrRzWzwsrkWu1kg5EYg5HsUhk8NVzrpa2xHvy244jS",
  "key29": "3XkoyS2797tTtHSWZiLqYyMTJZWB1GTw2n3GF5HT3VTvqHNic6zgsAyPGcBawW78p8MDxxN7VR7Md513DVyWwWLM",
  "key30": "4pJE1iEGsadx99ZbBQVFzGNwfkf4CXttebGbtLoX1ZzQ8iVLx61bKWf2Rm53D9tg6SPK1EWTjKtjvmhPUJLXpBqV",
  "key31": "2pT1XTVZ8SsdhiP9uZxHYftfiHtQLPP2ZWy1iXxL1rU2ZHtmCCs4T5vBTdo2nZaXdiUUDsb3We4e3fG3qscMEBJi",
  "key32": "5MAUGC6MqFXRjCVR46xT6hbWc8fqQvp8htGHr9AsYJG3wPtGzKoBwNBpkwCPkeuifjGUnNVrBYYsto4vNnUYANPw",
  "key33": "e2GgpWdYAHrSchx4pcxm44L5WDhfCetopA1vvfqChdJuNwL6SM6tBmFfjPoHSZftyMDxZhDb9MPYdWreu62Ui4C",
  "key34": "2c5zDqofGpu3WrPUeRqBaTzFzWVwF8No6da2DSgivEi4XRjoZ9aLTvebMFMiEb9eKx4FFMhSMM56ujWhUz14qQqq",
  "key35": "4WDHQ62E6Y8y2bremScvCQqPUvBAZu1sEqunHvHqzzeFNN3BMgG2wj5G44TBLkGegwvwq9eqoFemY57hHjFQ1qTV"
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
