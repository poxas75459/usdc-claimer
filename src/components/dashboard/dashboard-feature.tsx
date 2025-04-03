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
    "2ncTr5kVzntaRs7MREmDdufATyNJaRwjHich629NUuxoK9VS7fatFzScSKNFu4MfsysmAfxnv79ECVVRnSZzArqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pEHy32mqqH4f5oVUMf3SqSGbQ4RX6bXkbe9XhCQEAcLT7jkqUeF27Su8VMHzmkoyV6VfBPDncN9YGm7pHffjmea",
  "key1": "2yP2reBkjmRRofia7Fkb7pj7sYEVMgi81g55f1eEconQEW288JdkVp8T4ip1ATiut61JgEih8HG11PxQvwcMD5m7",
  "key2": "4yZDJ56iTymNjwH9wr3WNjomDeksosaA2HYNo6RxG1HMY3jjuzq8ATnW3o23LujXVJoNWGxeQaqQc6p9X5GuvV7Y",
  "key3": "4Bm1Z9V3PUce3kQ8TRTaXyCTsNVuPK2rjupVNuzRoKq8UUZFXEfuVuTAWUxm6qYMQqym8vREtyB9fVfsEoqcuxwm",
  "key4": "EfXd32bPpMhBvDxz8dAGxduhj2Bi7FG91NMTHnVPhb7qBiZuGX43RuuFYRSNM45cfdBKzmWTrYhvc7uXkuReGwE",
  "key5": "4dYmPNLbNwLe4t27DTMNnnFaoENHCua3rWe66QcSnQptWv8jF15oCFpYtCNs1DcLcjGyTVWVL3mCDSnPPQ8WTJ9o",
  "key6": "31pVWHXVZCHs1Co7mRcaApPfJHhBXhsYiCCffz98KnSAm1TP8KECxKkistVQfuMMd5wSAW7ZANTFn6VWCwFDqtBf",
  "key7": "5bnJdgmEvvdsFYtVgvNXfRvV419duVpPMxhAYbhd5U3hVhzTFbEcV7a52SdSpDLTxW7jSgEC8TR5TksQcg3nhXYk",
  "key8": "58f3KK8gf4mdzHs31cgrqVb9TgJSabBHHCLcVJjP3ZVmSWMvjjZpDn3cDZupofznZUfA72mkQMaQihw9Qb12VKGS",
  "key9": "5qsQULssKdEzV2DMLeiQkHXxc9EzggnpLdte2tZRXHAvzgJkXsCRrRvVxN7qkjqFaM7VgQMosYAbZEWjA5oLwMaB",
  "key10": "5o62q59asMkY7J34aD5PEjHhdAztGX4gxb8sVgKBc6QbtbXX4hv6oaqRZTHARJQXE9BACZed2yFydspdHMCSyeSc",
  "key11": "2cnE88Np2P3XnUYKJpXEKErvbbDtEt3t8oZKrMs421ot1XuQono6pePJKmcW4kRjJynWDzzQ1fPQQEhEpxwaJVaE",
  "key12": "2VaJ1Lbuwwo3anNtB8zoakv9FqgTq8ecWfeRPp48DVZyo58At1LY8mA5nELcnaBpHWaakz5MU7bAFELxAPJ5hSKf",
  "key13": "21t5MBZvGjqz3VkRxjd8tcbFvGeYJZjGgfrjZG4MfwJM4Bc5RWy3hdwGi622neHxNyq3yszTxNswuDZx984i9MKs",
  "key14": "4QcAKxkBFG57RbN7yP9Eh6gNJ7UPfiJsW5Zwwjbpzi74vmGCydx8zA3cGk6vpVxmvaqKqYNdL2JBdsQosLNEcMrM",
  "key15": "KSPoo46kUydJTEXotsXihJJMxCCWSNn7GdtvEEZkR1XRffNv6dEAyqpCtqJPUv3C65xTVvy4HZAcXAeCt7evC9S",
  "key16": "4ga8nxSB9TxcA11EqvpkZMKb8dBYP53tjcusMBbRcthefQX59Nwzi3E5RqQ8tKLMRd7jDEeHu844zMt3t8uo9vb1",
  "key17": "3fezNqHSGARgQ1FF9cfqpZH9enoHK8JKSTa7T78B2TeiKjh9LtAyQZhL6y5arxWJLwGZsyvgAekaDGQ2s4zv8zLT",
  "key18": "5Ayx7pyebG2DW5KEmmCnz1vuAiMTDz9YWi9QQbZsVWsu5xrrw6tGczAzSxBWnMGX2UbJiPjsAa2QrM6VM48YgDM9",
  "key19": "4KCtYUmCt7bE8s6zzG6rejKWkBWaTTKejM6G6Rewf1RWvum1urtAy3Ppmhoodk8vhjZEjHfQRXe5JjAg5VweUbTX",
  "key20": "4sbDQWp2ZaLzYawsn4WR5xtMby3AgCCruQbr9rvWhsDPB1Bp3LTMrEnXNGsvJnh1ng1unN84ErfXBtZ85bMyUMjJ",
  "key21": "4b8ywNYvNRhk6jAF68d8khnNFTH2Wjmo8cDLYHDAdumkKWaibpDriYg84j5DLrgsatNMvuHRj7b7S1De2qHdaqnG",
  "key22": "5VowbmY5TiU8Kxy6FyuT3T33Nc6cM199gnX4VG6EzCMCS36uyqVAvz5XrwbqFfyX3CJYckV2o7ox8YgRbwTr8YXm",
  "key23": "37BUdWpGCTdvmPgvNHDx3L196eU3UDiCJQb3K6JSypSdUumqaRgSoMVxu9XjB3EDbLdQiSTfC45s2HhqgNmmWaTq",
  "key24": "2iJw85P6FZYJ8GuCYvxkuApiDdC7AwEUAUAugAxPvXZAFuYf8VpLqSoK6Jbh1VZb1LawoZcSMzM4NdqdbaEPteVt",
  "key25": "4upzknRtgkUkj8ZEGsRk9ghHB1395JgS3bvk2urzKTSAV4PQTaUgFotisS3TVotbEGNyCk8ftYipFv4KkxdD8V8v",
  "key26": "2KUSDmm1sVFMHXLgU92AkwiMPvf9FRbWaLg2b5UH3PndC76W1fajLy7RT7Gj9Aes1Y1vK9NzZnKDda31XRffjzAW",
  "key27": "2RR3FLSVRJs2538a3CfDwxDGy4TERabrCpyFNr2cp37k4TB7Nf8KEUp9XCguZMa3KYmzQu1fnGBpkjbADJsSK6zw",
  "key28": "5uJxLRiCfKbRWeoEfJ4JnPjxKgCivt9oaMashVdcLkSH94xCm8ewg9b1BWkPUzF8hHstoShniFPZBFT9y655Srn5",
  "key29": "2j7VyKzzEsKQHJJ4vnFrTmxrPpPZjXHS8Pbg9EDURtFA7cfM8wYT6dnsqW3Rfw3xp8A34szKv2PuPURSnUqUNqQg",
  "key30": "47N2p7z8k971p1M6mXBJuJTsZc8vqoSx4xCMdqC2yR7xxJPgEprqBRRBtQ4DTgZEHw5DAZriuqNNUJKfsDdtmpka",
  "key31": "5RRiCZfVYGEyRzMUCJtQEmhqJDpUUHMjBh6PXnoUsSgihUdYMQ8qnTd4PbD73pxXdP3gwmPMZMZMSJFFEHre3cz4"
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
