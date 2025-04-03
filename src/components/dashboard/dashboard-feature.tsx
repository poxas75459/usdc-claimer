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
    "4z2iWLUy84QmL4g19gNf4Kq48fndn9pAivAfFCtYNR2WeytMyF5MB2nxVX7bdMrsmB65RpeAdpJqRwVph62VF1da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RmFy912JvvYQhLkFhoESzgqYCrRAoGcejJPz2iKjHY1Dxt668qfUWX3h6Noz5myENr6X6RZUBVQw1aucEtCrrXL",
  "key1": "52yB36v2znBDV4piAw4A1rw8KQDo4ja9YdkCpHKqTob7X3vu3tpgMz9J25T8BU6gtjDDNMn615QhQiZ91KSevW8x",
  "key2": "4E8kb1GQTY9quT6DpVugRpukJz9jYNutA2GiqdKGP5UtH4d8HCqWQSRK9U8h2at8tRhapWhsgpvPm94skduYtSaX",
  "key3": "3N1bJBNaPsQstJjPxR8RL8P5wowcEBcFjp83wz19vhmuHnbCJPMPneWhezS9vS7DXs9gBfjPegazouvzgH1pKHQh",
  "key4": "2sCfefmxrWgEYvzpZv5utyJ5CFtNC35QUxuk3XNAbPVmroHmUvoXbfZvp26E95vCopivFyCvi7mA4vtQ24HJzKGg",
  "key5": "jsubsnSdUjNoaJJk4GknnvBCNSaFCYZ6FMtr5HcQcQsoD7dJSLp48FWtAGfSUhkXY27g5x8mDnKFk1mRsXCmVbG",
  "key6": "4SHUCfYQPWpTrYUCVhkMWRXSKCqAhfE49WGPityWagWdjnMeqyAntAUUB73Vg9EuvFKHU63tEB5jUoD922tyL5am",
  "key7": "4N45uG2btJtcsiMZkLnuBSoq3vJB9SgovnfDrvB4XSoYfBkr6NURvQb8UJtgx3X4TfFraRuyGttovpRiD9pUvLDT",
  "key8": "26uBqdHHxBJc6wCsgZabEhwjcZBj3VejZQBtFNyAQ279LzLxRCnpM33WpuBzxRQhjzdqFQRe2KuVTNj7dps1q9Ym",
  "key9": "2e3iW9XgTJcrXLBZty3UUFxjEHLKfAaojPuu4FD3yMNhQhbwMq7eTk34UHBUc1ADvS3G56AWEPCVhQvyMfnaAvWJ",
  "key10": "EBAVEXcuhhFL8ri2ie9WjjGEoWMLWY1eRqpCNkaXx5y7GGECe8dWRf5hn2ou2kPVBc7y9LQGruabjxw1X8MLSXY",
  "key11": "vYAid5wiJvsyfNWqz4YD6N6joCdCQ1TxPMPTt6YhHtkjgCc11aps8U7ewsT4SJVqALUtXu7m5UjXzvkteo6rkBk",
  "key12": "2GScHbnNvJFkFUhvGdmprHd4Yb9sdK8isAE7VSAWqMAQNDvchXNqcVYAuYySXySJSaeac5T82zik4CNdyr1F9i5s",
  "key13": "4HwiJXHhuGV8FJEkyYdwexrCsMKPJDV4SCzD2vPPRSQAXsnwKtw5WMHygfH1rszaihfDqR7pN8UVjy15Mt1LHLio",
  "key14": "5cggUqdTBfBKemN5dUY3ULC8sRbtzxuxdA8k9FfD5YKgbGNTLhuvThg1iSak9KHKpPyBEk8Ysx4ECmZYH8Dcdd8h",
  "key15": "mf4PrTUfgm6uhjb7qXRGrTk6TAdxgeFsUVexJfsPb5b24Jke9qgbrvy1y1X2zmGrgKt9iLjZWJCZ1V68fS9ur2x",
  "key16": "4Rg3bdzrbU4cuWT3sfsuVr5ns97Lg39iRRpJTrFKiYsPZ7VcKYkANG3kVXBmvAdneso1NwDn1Y6HhTcwJiUf89oa",
  "key17": "2tMu7YdDbDyyss673FZkx4FVRALKgKbfpKxPfnShk7xDKJGh8YSKbSFLkgj5hEhMYbgvrx6u97sFVofqLAotVe1R",
  "key18": "3o5euWVFrsn31yrdreBxkiEh9s15g4VYLyUZ2N7fVAARxAWdnrRtgzANJoURYbnZREsdqnG9WPbcAPDujZwsLZE9",
  "key19": "5YvCzohay9f3Reh7WTntc57fwvyEBZWqSXR4fhTt9yPYjiRNxoP6aYLGo4UxaQrwQgRM5KHaAQFjADPnfbuidaSm",
  "key20": "5R8jyB1RrunozpWRewTQxHu5WpW6NjyYSQjPBwhPFGJTxSKvVotYypCQ5Rvh2DPMo9tpam1cktxQh14GHtWb4EJJ",
  "key21": "AxAQ3fiN4BD9bgE5z2RRtJMRiRAYrhtxXPxjDWzYbsEuzns3T2w9MAVfA3gqorAfgSEihmyaqhFQ5ikU6bob6aR",
  "key22": "65oAHupvKPxMCnGD77ZqXNx8HszkCw2RTwmFTD7P2WWZK4RJ6FP9Xp9pvLXMEfijQuuwMKHK6SR5aew8VS8yTVUf",
  "key23": "4uf6Dbx4LRvmMrRR4pgQwRJ14vVux5oTEo4tvuFj172RoWWMZY6vSRuEfmjxyoy8yALiJjxaWq815w19PmBJyBqS",
  "key24": "3aYTwszCeSEyYJrZKSfMLTojGqvZBTrCtCZu1NyFmgKoqnWVtPyx2BEiuy3im6BVX7L8ADiLkpm37pKXqMf2wLXy",
  "key25": "37hP4TXJtUdJNiCJcWN8bSkzt55cUNqRAmQSCdAegLvi6YjDJjxvAkLNFxdbct3WgJTEHkN7m6APpKh1KetwVvPf",
  "key26": "3N8YSG4ungsxPgiCs9my2FA9iRdHKV2bQZkHWUYonkjyc3ox2ovG8temsAfrV9U9GvW7j3n8Wz4ktva1Y8jYLhMA",
  "key27": "2sFGTS8a2LPU5nWGAJUTTqopWEh3wQ3Q8EhNp61eAn1tho1hfEGdq2iK52VUfvpiTPZpLweHMrnvi9tekrwVyiJU",
  "key28": "2jnfyg5yXR7QjnJkfZUUaTQkPzdbPLjJ981fk6GSX2c41nSjW3rbSi39ziX4FuvN5JYo5FeezhjeAnoDVKpQNobS",
  "key29": "2uGTe3HKDqKQ15ACiGPuFw3wnmU3GnXyxv4FegvjBFE8tXd6ukV4xPEm7a7Ak7ivMhF6wJv9RfgnUKuGfTu1hM7X",
  "key30": "646fxwSHhtcFeYeJSXNyBkBYnq8hrhc2j2nRQLcszoVnnbXpMYx7zMQQGLE5FSEoowsT2waxJxgAUprauyaemjq9"
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
