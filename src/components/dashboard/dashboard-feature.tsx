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
    "2HkS15TTCzqiF8NnSZ4RT5WRrwsbXWHFMGV5jkxjcYCrtMqscsEieGjZZXPxYXe6qNu4iPsVwBHBRktj1Jao2XJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ga3X5ff38cPTNvr8N5Pj6aC4MhCENcLdaKnaUcBVq3PCijNUHY8x6ZsK2EbaVhf4yYeBuUAnXVpoPUZAzUNkbCH",
  "key1": "44xpWHk5SjoGGQmuU8FEQczcRMTffDRwXSpbWkgb7WvvK79T9zkPNHhNRf1mM4HDeLuszdNUhkaAZweN6pFTUnuJ",
  "key2": "3ZN1YHCEDnZe1EDy9etZcioUbkBYTTEnQQ3aAoGE8pKTL1Pst2PATSzuWBfvP1RD5FFSesSkrQqrAiTJXQc4ZUg7",
  "key3": "2YbJn3tiwDLEHH6rgzDMRc2tjUTXxHV9gvtTDEGiTRSHKddY3MxZ97isfxtYj7qFrKGRsPGP4g7JausyWHQaE9gc",
  "key4": "2e9xPEpwp7epawwNqvhCoBhZwtLuThzq4MrEQmx32ufRKCedmc1XG4dHCexzdZfhPSpS6SmQ94ug2rnWG4Wqwikg",
  "key5": "45P8p1w18hqc4LLhwF6mPDn4KMi7a9YeSHff1DDsqwkQo8PQDFDWW4uZSQN491eBiStbsosP1HKRVntAtgq81qba",
  "key6": "4yRqqnqfiJqW6sg4TJz3ESwC7Kgk7J7eLC92uVbtE56AVzxyVYzzdJWpYr4jjjT5no1UPbCDvHyR6yisz3yFVGV",
  "key7": "7Z7kXZPCm1m6fbeNMytJrHi4ZZPC3LTTiLbXhdRzJRcgYDGm24KGyCSchKYDzCTWyK8BznYKE7KcoVJdRkVaRWs",
  "key8": "2TMhof1xmJuqTBxenU3WNfVqFDd2ntF82LTYRi1igqpvyB39yRjFCbceUjfc9TfnRzYfvCX4h93Dv54CHthRUSSG",
  "key9": "4j7oktVySasGFxWezZBNXutvah8azwhs9ZHT2efavq8KMsQhuXNq41fEyKrLUYnd6GXqJX2fHayzeRjsGgrDkqHw",
  "key10": "rjtXXg3aUiunG9fBhZBLrXJFQ6BNE3E7PXFXTJuXnHZ4cwPa8gUT7LCHeCpVK3a5jLBQ5VXWPM4WgjhMLeWLtai",
  "key11": "2jRPyZdJybDbD7EWMaSPiHH8gfxKiG7dnfmcVc4QtGRXHGhMLgrg2EJVRcKR7jgq8oJadKhintRGD4C45ZJuy2dQ",
  "key12": "5yEUoPNpgneztfqrxFmD6NjhnCJhSAmXmuQoEYmXxEM6hLCPgMDGxztb4EQagqGeWYNiVSW1zfYckM1zxMarJtK",
  "key13": "3cmeY1BvZk8rP68ALQTjS4oV9RfhLKMVuTKoewWkMmRKtZQVXnxz5q6LAUCvd77jkghonrATS7j4zQprHzE5kSAD",
  "key14": "4Qh8sxyES3KAZ9FkuzXUQFnBYq5U4DBVNQbv8ojz8VdCxd4cn2pvz7ZYXFer8i1HBKYktY6iVKdkfC249Ck6TFXz",
  "key15": "3HoYKKE69e878mH5djJVLLrqN2NTwNELSHZPPZdUUdFNLi4H7S7vUbgMgNY4eUQteMvnCRw2dDQGZpzwaEdTmzk5",
  "key16": "3GXFZwXyq7rJPT8dPLXQSX6WBmVTD9zNQR4GHjYK7VBB6mVAfR5op3wPSSbXHKUbaPtp7mJfaDhQVxEsPT8n6wMk",
  "key17": "64NDjBswMtWk2ooDhc8AJazL945U673oUW8k4HF3742rn8CCqEqniNkS2yaQAmbFuG2ae417xgvhgvbGgVr7Ktbq",
  "key18": "dkhMZQeQRxAc6qJt4CTMmHSbNSadySX6tj573mj3LuavoKzKDPq2ZNfEjHQwbTPAgF6gJBHDqwoKW8Gpq6TFY4R",
  "key19": "3ACW3HMnYZLm92qQfVAH3Mhnb3izGjn4qMYKFNnpuF9pp3JpCspoFY3EzmHKxHSFdFz8t7bnfTgNEPamcbNyWvm4",
  "key20": "2j7DEX672C5d4Cajn8hfwaEMSYQQMfLZQvjbUmqARr2JFVjLyJwtv2ATUkxTFXJpNadUrsCcX2QYFxawAF5QkWxL",
  "key21": "2g4tPWGEVtWgcovFHdFLV6gPwo1WGMLsXNf6x2u2t8n9HvfHxHDwfryZ4oAKU7zcFWiqcbAjBxPXYD2L9imZTs6E",
  "key22": "WcMw44KpxrBQ7AJvbKSQbhs8FBXWkWuS3TgEeF49wRMF98orpBZH144o55mjsbzLsCEwBbpD3aQATyBm5fC22tE",
  "key23": "3phzugx4oEtkj3bkY7uqoCdwaWGeok9A4uWnQtgtNneu2ENoMZeJiExfFQyer5JqXEdq6MadPBPRVn7i4KheQLfA",
  "key24": "4eJ71KhBZUFYWbSDWK4owGX1UrawJaRVWL2t13mR1FndW6QM7wR3vMtQhDJTfRpm6twVNA5braboNt6vTiDjLvku",
  "key25": "2Qg7Dbux2qyBiGTyEp2iE1gf4vFrn5iriZqbCVA1LneXmCkeF5KTae8xPEbyMGeyDJvvjfgqzspm8xreHWqUEghy",
  "key26": "3DJuingPB5Nr4KvFPCAWth2wyJkSq7eQnCwsXdg7ikHQaQN4spAtwhproiSEMU5Yuvvkt43zqUJGBfAD4VbcCq9t",
  "key27": "BLXWSUWuktWHbc8KdBnnUL7QmWMSKZpDQ7jZDY7cZzXDLnEPpr6hjL2gsD172Y6fmPajpsHL1ZubVcbaYkZxgMe",
  "key28": "3ZYbmcVe3bz1AFNDdKMCM8hhAY9vdLR9wYYqpJAM7gCJBwvy6wesq23oowK1A2B9VZyeispg1B7KUN25VWPJQx7o",
  "key29": "3Tf7NNCHNiFPnWi5b2BPLwdH29P8Qv6ZVANrSYC9rLDVsKaEh1DR32dgeT7VPP9Qc4iXHXqEhwLYuH879agQAtuc",
  "key30": "3avzmZXs91J9fB2KHogLu7uKmC3eADdrprNv6gPf7VvxTGpqRjKqGASgdzeSEK6f3TkCQ42sc1TVoeFXqVCpmESU",
  "key31": "9iqf1HKN3a2yGLsEbxmrxhv9dPG7CWLUj8Zh4e7mtey9487d1QBxKkDV4iumXzCVZZcmJk3KcyaK5ushFSQq2kp",
  "key32": "5rDSRcQKfqUy4WSgo4Fgh1Z3Kxd2ZrdNLDaTu46Cq1prQBh3qYEbpnUCF9Du8t21dGY4aEDZmYzwPN48PyiXY38m",
  "key33": "3mQfkULeRGBprbGHsG7pxyjWjmt7MQt42pauQtDf7CJx7tnLWvDTfd8oFsw51cZgh2Np7nxvDc7vnZWoXP2SSKin",
  "key34": "4C8DwxYJraRmFPgtbVD5c72tiQ8w2LzhDd4kp9nX8Sr5qhnEv1gYpqt3Fwh5nyW2t9D16hgMn8MxHnLzXsLC3Tps",
  "key35": "5Bj4HsENn4MJUaDz1Pch1ReoachWXhgUiSPjj3MzB8etYy8B8v5Y7Pta9khNMdKqdCNvH55JY3WKedhf1QmmNUbX",
  "key36": "oxcHSXWLfVsBg7h622KgQKmeEM9cYTuHqDue86Hus93f1T6f7AkkqLhkgLrzTSSe1tDUnJZVyzXwVJTwrLkLQFa",
  "key37": "4EmgD2dLHPUNeUhAPD7MiXrwLv4xz6WSjmpPigZjRLhA4PfPHH3sS9dL41kgS61LfD5kQzx5rBFswK1xQCCft8GK",
  "key38": "5FirJGgKVByX38cH9YCGu9noijQ1dhaFx9itoKjRPM6RZXCuTn9nfzwekKePWCh56HxiQoX5inGwckBH4rhErLVE",
  "key39": "2MaVTaLE6xeng2qYv7bp6cRrCC1gVYjzEZupSnE9ecxeBVvFD1sbxSbxBSWJi2rnzz6qxnPHdNNSh8M4XntVZh2e",
  "key40": "9P3eHgE7uZyuJhkHrwqU9FEVeLL7LDTuRfhSrehrUWZKXJYhLW7aGyozL8TdnmkeQ4RAYguCgBVLfPBnYAoVLCQ"
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
