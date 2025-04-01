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
    "5vB5VebouLNSke6iX2S1B6bLxrNkCUSEr9EoDJESSqAyACVEvUzbHPJEfiHXgB6sY3sPDCm19GhQFHK8t9atKYqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHPEQXSyBStRF92ra2pELirZUXQtEaA6SYK3Uj6M3TqEukBhr6ZrjRS7FMV5R7ap6Wjr7RZ1zTtQJQEsKV88Cpv",
  "key1": "ZYEnSAao43MqMVVKXvWzQqnfs2EFoShvYtYbWoExPQb3t1PasMDbBxvniZXKJbiib6WSgH2DPDB9Chmk4QEWpBv",
  "key2": "37rjGxrcjzmG2ak7eKNito3qQx2FdGHpbSW7SBhtab1XA7vVEU7nHP9Xd9cK5U3NUDeTMA3k29EPD1Ere2jufHjT",
  "key3": "5ERhHWzudZ5x1gcJu2z9Q25uAa89qp4yj5RFmPvCrGhqY2VotwuzhNmkibLpmiTUppYkTR7wfXuLzHwQAM5xAU9w",
  "key4": "5r8HP74Y4EbqquniEQNkECvHosdpZcsQMq28fMrpDGehM3pTftx4c7sfrTppiRAzCY1YxyQ5jkqSnWyfTc6VkrLx",
  "key5": "4WGKoifGW8C5C9jbKkbxJL6z5Yzf1E3A5x7BY9VhkFnhfTwQfRzXr6WMJs7EFKFw6Vi21arNreMwcZVK2UjSwDmC",
  "key6": "5bD7VNEx31oy11dJAdisFwQfzwTq51gxgjKrWxon3532V8yQzusaXWd1r8EdrqZHgKyhxb48fanAfT7PWimfWpfF",
  "key7": "2TxKGHTrxBq9CFPZ2WbkDJYDModrSNLGWb7dKuLRMGSR7AeuztXSSUau9KWHV4FSb8nYEmT5sPxVzkNqHEumDpck",
  "key8": "tHRU8FVjc77L2eznRmkjfvi4ER6RQ8KqMxP6HaUxrW8VLkLATzRVYd3mc4YaLHasWzxnqkRS86esspx5bvJCpCg",
  "key9": "348McwX1ykRz598qfmBmB2NHuTBwf1CqZoFZZoTyEDD7QLenykuBdqygMQi6VvwJfHtbCutipajVqYncvgUNcWiN",
  "key10": "4Pu4LYTwvkhFJyB2PiVM3NEDPFaP9g2PhKG94NgMvSp5ArBPUttn9KT1T5W4aADf88E1vz2xHHRLiXh7YSanrhjr",
  "key11": "2KBwTtBaY2a4xuuurxBs8PFR4zGNdi9dYCSE8kBvgP67HpcL1fajRnD188j2TuK2vQ8pnKNqUzPPjRjKNZBgusYi",
  "key12": "4qHkeCtbPK8q6SEAwc7C9NwRTqoQmUiF37toDrTY5yhniNbZMc44noFA9sQLmgPAYEqvvT8MDh5QookSTbntnR76",
  "key13": "61dVHDUTnKWkPyBEVZxHUWdDiMkR7FpWh7xsjCGRbzMwS4j3HHBq5eyVZEMe7qNptLn7zf4Gb2542LHRido7evH3",
  "key14": "dm4TsqZcnUW2zat4swtRGSLQt9ZL5Buwvzhw5xmQD8MUz8oifhXdJ3rQgx2TLu4rBW5oqWEyF51kMXu71ojir9L",
  "key15": "5fxB1vz3REvzasz68JWZ8SpRMH3Y7VFWAWxJsu7i5wb1S8DuWXoYaDBotFaRhutjZmqPPdhSc9MBQauKTCdrFyB3",
  "key16": "53nAHyCc4W4SLww5GhdgnQ9reDyBcGz51a39g2H3r5K2SV2YRzK8ZbjniwzZbBTpMgzSHaoVyAYUUMNP48Xd1iGb",
  "key17": "RYpP7c3PcAdedcA4JBAZjSWADCWEzNJwB4EwPiMd47KM94mccyutvS2PnB4Z35DEUudhFNUbbxmVR4C3y3ex7wY",
  "key18": "3LztHsVSmjdZ9dEx7H7cpJRYtkMViJS3sTPqZ5gPa1K7goLr4wFyTMPDWaTS28j9FWZppnEShMqB19DQ1q4fsKdJ",
  "key19": "2HNpezBhNq6d2bGAZSTeYkvK28pjrP1QBKMCvJMQNWsbzJWKdd4mshr6annidvmbr616272cA8MLkPbSSNMoeA6v",
  "key20": "AShiHkJg196vSZEAwDa4nPfbm16xuUDCJFDHGay6xa6swnzbsjESTPZJxVPeyZm4frGcU4XFndBK1gkz8wsJyhU",
  "key21": "5Dvswkz5A4bRyXEU2D4kMYmnGwTL34rnDemLkkwVx3W2S4oHgLvnmgt6brKL8ZCnkr9zzX71swimfhihX13tKYGg",
  "key22": "3podtFYKWReJH8RMRZ8vEMSCQ8nQTkU7sn6NhssiMVPXnqoisoUP3UvBL5nh2jNwBrC6ZNfcYvcCanDG9xpdmFtA",
  "key23": "2HJajL8icUJtGVq5n4TRffKLP11FxUzjcXVPRRmJS7jW1vKanYYZC2RQi3sdHHyxxhM31k2bUeXUfUHwG5V2Jjwn",
  "key24": "4BuCkLAcuGwVyZb9nZFB8RRjur5Q5LokkaTPmUmq2ecdLaNhKc6UpnJykYMJJ7ZGeP9zDTDsAvFcfXvyAQPQd1VZ",
  "key25": "2qd5GG77mu22xGFdDmUUB4xqZg3XC1hbLjB5cbCepumVDnP4wsmsXfnyQUjxmKrLMBba2tGgF3RNoBBLLgbdCeM",
  "key26": "5u2RXxKcyRkQ67Anrshefoj659QCVZGuM4xX7HfVySpND2oGbYcwC4df7Ngbxdo4QbhDyvRD6cgV5aQ2uQ7FH19c",
  "key27": "2PNZmYRqnXvGYBH1xDVkHjYs7YKMGC9Xpq5gMYquhC3PY6sbXDKDncrCZfuP6PXjWvghYALzno9v1DmbyAPb7Lmq",
  "key28": "3hth5dQ4aUaME4rAHfdRvWvrque3NePTYQWnhj6baPjpBgcgPTXNapvwmNU9ufAVScHaDC18bTMzWHmh1FTjyhvy",
  "key29": "NbbuGsuPhVNhRYB4DwYnn25d3SEFjqd9bqK7uviZqS9vQZVqrabGs4jCHYuJrCQY31176hYvzegCaMpJYppP6MB",
  "key30": "4n2jh1w9yC6s1UHhZZhz43UHaMJFyrXkL1hxXr8tMNZXZoUNpgV7UpSgv3eELwyEkU4Ng7JuozoTjnRx9QDEdTgc",
  "key31": "26aRohZmDQj9VqJuASB94RU5tGLNfqUnE1ZjFzf3SioYKhbB2oPwjGxzvo8R9xHF5AqxSNCkr81dpV2etrYaA4hD"
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
