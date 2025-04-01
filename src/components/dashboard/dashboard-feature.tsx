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
    "5MUghsdVppJvEuWgEGGHwwwGYdNvuCsQ186HZPmceDUaYQTRVP9EE8JrjHxGfjhyu68znch5aqEt4UoxVwDm2XJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A5tgQoF2BDfw2ksbzFNYqw8Qnjw3f2Ng4svgpgGm8QakBknnMGALaKbDzDUh3nK69kh7z9tHDrqdLhhBacMyWF3",
  "key1": "4VQgqzF9Y3an3K4rsnMfEi3WKfSFnHzQE5JWDkmxpHoYu8qixbbqrMNpgbS3vG1A4kbD3ovR7Q5AwjPn2KRgAvbU",
  "key2": "Xp4JmWJYE3C1onw96JFu1X3QcjJKFyymVafVmHoNBQpUfsHiUkRiNiaTh7R7ponZa95pLQV7yktzaJpi8272Rmy",
  "key3": "3CzSecsqoCAkuiiyypJgUGKqU1XZFtk8kKWQusrrnnaU17ZZaDaFUnZGE5XnhBHfDdu4LvL6dPLaeBNejTWNf4Qs",
  "key4": "4PuU1djxDKeSp5HGCT5U5z4wkJJoE4PpYbXH3bXxUHktL6w15kFAoRweVZEBqg5vsPZR8WYepRMeM9J5PdbbRPqY",
  "key5": "5zgpvvbvngZNKGEnvJLwYpYNUaEh9T836pZEHS6eL2JCELSjQaLJhoGzmh3D9MvkxN19B1BEj1tJTWBStXj7WjfS",
  "key6": "4wGWVqoXTVX6n5aUTSy6YWNHrQEXAghMQzwWwyttZjh4xN2p7yEgv49Efzd4hvSFpuCv4r3ppVUXiEf3TThcsieM",
  "key7": "4XhaM7jcuB6jreK3UsZicpP2L9bKZzjgri2mMUkS276yy3sKRXKyqjimdqgwbRELLDQusr2zhwUCD4mbD96qdMLs",
  "key8": "3e5aLo5YVKWMvfxhjBwn8Se2XENnLvJqgEKFDWaABYzkJJnLVMUEJ3mPT8b3tJKpAYwGukJVgoLqXBQdk2noXE5Q",
  "key9": "51TeczK4fh8aNi7eZkJ5CY684TYGpZRNXdKbrAEGrRWZAqwnveDyecwVXbJtP9kXkq9WhtXGz1Z6fbmLhWm2g29f",
  "key10": "4YBNzG2df7VyKwM2XXj8ivJMfFjzkvNiw1NVKL5YHru4oXYZZRsx7N9FWMb7EE4jN4TBaykDadbeXgRZPAasDkBQ",
  "key11": "2ssXMifV7BXpfeqZ75b2NXn685kwRSzJz8UBjnQGzpxBCjDwaRtxBaJKrWHV1KABALmnSNZCd8QrjQ3LetTKQfk",
  "key12": "5CYVs3ZJGu2kQT6VLKgw41jV1Dxr6gVN5Ek6HMwwcZtviPixXUNXmSar5Tk2Knrv33RBhvk2TC8sNAwZhV9HvX1E",
  "key13": "4pXW5HJn2JiJmG1YMNfrd8yAzAP9mbE5zAYQe8FKFDPVU1fWnLJ67MbWEKGqK8fYWQFsWGw9vTqfobeu9jSdQh26",
  "key14": "43UyhHihRiyVVG3hY6KjAfY9KJxvUbykSN3nRtXGYguDyfTGkh8nQERpp428QvfnFX62iZtEKnLKJqyh4HtTQwJk",
  "key15": "2hzest2Pcqx6HDvu43cN2DPA6krm6Q5VGcuPXx97rFULfTTFtuLCbYkkYfCzAgm7QKagdgbPrLDZCKcmWatcJX7z",
  "key16": "293BUQJUsdYcbZsuvPCDWQDgC7PJiXJQFbAyYpNpZm73fiQwGT6wx4RrnNS86SUxYgrUhtu5Qu3u7paydTMgPyx3",
  "key17": "Zkp4BBviSQZVpr2eLTo84BpCqthY3jje8yj9T5Zhraejtgos5GPPdBBh2zSCUuH8HACxE9ndPcnsGFgEwqfp28Z",
  "key18": "3L7MraZmvvVWzGH7tKyMnsUQtrCu6JEwttUv5JVseq7nP7mqrhzrJtPvtJA98gqttTHbNXkY6p3XdgUPG9vAHKzE",
  "key19": "37yvNAgh1aTJDBG4QMVD1ZGQUpn17jp9dRnCUgWkKcEKSZiZnYr4v1RfXexDGco6QQekt5wG8qttYGrjmTVKT5MK",
  "key20": "24zQDMpAJwGHPzK4pve71ENzcS6n4KLuJKereDnJ5HuhQ1YpvbMBaAoHBSG4AaCzzEBjQbvGG7jMoLDDdvxRbBSn",
  "key21": "3NYyivoTvef9WifZnKoFA674YM85mZJmHqdaUmYBUtEWsDH5Ax6cJRnXnk5V9BPt4zqVLgpVTgos2eD36eug3gTv",
  "key22": "27sDkKpdU5kobgNnB5StmpW8axrigVTV81CPjeeXzYgAfrzgRrfnpqJ7RPh5qy4UfhtaNAQHLeRXhFHz4e7GUCUU",
  "key23": "3ViLdXnFBn5GL8DLiaWcReq9b2MBrbi88uqZeTBK11iFMeSLEvhN7EmoBvZPDjiPU184zrWfk2d8ziRfatFRL3xs",
  "key24": "4DTysVyiwA2gmF3RwWT5bWSNqMMTq2Mc3cYKdHnL1dfDFqqoycci5KqoUnq3LrDpRgvZjYdyQEg8noagSZ6yAjoF",
  "key25": "2Vz838M2myYdHsMPiKst8RxXXnjh1bnjktm8MTqZKBobC6bbUH1c6z537u4bzguiMNHhQk1nDzZSotuLvmhxhyiE",
  "key26": "2UGrtLqa5LnhQVxUAisUgydfcVNBpXR44fCgxfdLmjoHJRCjbNtjsWfHkHr57HxN33RW3Y8WiPzwX6UuxJjftNe3"
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
