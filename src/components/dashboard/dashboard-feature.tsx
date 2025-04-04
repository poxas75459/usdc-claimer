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
    "52b5Dv7PxUbjBSTQ8Jafm3tc5XJT9uvgViAy1jaVhFTTKUuU21fd3T5AKdzRpV7rNqbG8JEHrZ6ioDWJzfTjWLQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38nhK4XHjm8iz2qnqjGAk44CVnGcYLp3eqt4fCvVHGwzqhLGACGFKWDTQAiHSrpgvJb65tUWgEDsLfZGQ6SH2L73",
  "key1": "2MJ1aYR8Kyct3odAx38mx9UXMB5eixLocSd8VAyLrFncwjEVx5Z7kVzLUPiZfZ3WSufw6mqi7hfL5w1WY6wsBfdo",
  "key2": "5hYxzj82RKh8fusBCLBKg47ygVuJx5BAmUW3DRzkc4mec84xPuLkhQ47GvBj1XqWUagMRAkCLeJnfRLvkGzE29ep",
  "key3": "29WbUFnPRj7Yo588fFZneitgBMXeEo5xH2Jb397PQZY5bKba7PaG1cXivoMChj5UBRHUzavFwNFE83d3HpZkuqhh",
  "key4": "4FnSj7Ht26FUVonWjAYgVtVUWSp24xNthKG7gJRyDfGR79xV9DydPfiT5J7D6hUhXCuEUevTHHC78jVUHpLzH4VE",
  "key5": "4JiK79yL5UJBDAYqugdFGE5bbVtnZgsZDqJiWNtM96DCrhrJ9i8HAnxBuumEvkEct2tiTFnaNwYR7ngV7TVKia1u",
  "key6": "zGHQSzwy78LLbywRTjU8ZY157NH3CbtzUfMbR2Y1EPa74aMpZKy2h7SE1dfT2zLvwkJ9iw5eKmboSrRxsFrFJG5",
  "key7": "29ZUNazzDvqKTc3MDo8vscxULJzBqjAZWg9gtQHwARUckrVrqk3TgPzsjdfS592FFEpY6eiBjvEC6h8tfrwLjYhu",
  "key8": "2ZPjEGrvAZPPpzeBWs59cczDHQ7ub72TSL1ypPQjhAGWN4WV4gBfR4kQC5W53xKyMQFRKSeRivyMVucgXuxbaYkD",
  "key9": "3tykiHxNSjbKygHfCuFZMFpGYsrFU9oH5uZs4Ks6TLjeuEDhTHiWcQbn8QZZJppJ1BpDg7d54Pis4Tsbq91NdmkP",
  "key10": "2HcCkq9dniwaErp4mExtGL8LvZLpeobYbxUv6hriwnePDcZEzDEu4No4gcjzJddswoDSvPerQ3MHBoVJ2MSM8fJQ",
  "key11": "5EZLuwD1KiKHC3NFtpLnbD88aNezyLH2LiXabEZnM9b9eXvFK9hSLGghY2mp15NUNpAZ7UuSpG8k4XnxbyWVJFMD",
  "key12": "22o8mJjACTjMe5ERmxt8jRY34ctyyBW2oUG5AhjNBHpXxuhRqFUtzqqu5XPLnPrYEjCQYDdsG2cqF46j5pt4kNPE",
  "key13": "3Cj9huXDxZNBq391D5CzN8VZt1sanBA1yiqHhte23onTyF2TcSoC1Ab63b9nuAzkgkAcvLJfQ4nDptks48VbQbAC",
  "key14": "2jnXhvwBgxw1vaTw1M1jUgEwZdWgpvoVvHWaYwVNuFtEme7MDLPzfRHsnQd5PKjFMGsCDuA7R3rBUxAFDvesRDD4",
  "key15": "5b9PqZWEGANp1A8QGGCbtE9zUFvqs6pU8EthovyAu8DdtaopHk7pqsmg4j7DTH1YokZPLfCq6s9ENB6P6eBCoFcN",
  "key16": "V8SV1uV6aB7xFPn6GeXrXmuRJ3tZhtpNPdcX9KFQFiMAi5L6SNsge2y2zMjKu8Ei1B5r9RvdRwNPEpdvJgfZgc4",
  "key17": "2JGHF4efoH9goHg91LtDbbo3wqvojP9hRaDQpir8fn4yhYpLXGYWxpPX37Q1Hz8LfkMgJQL3AoimK5cXkXDEaUYE",
  "key18": "2bcYy5g2BCbAvUzm2s1h8MwJVRbsvrY2PGrYFhUGCh2DhJ6VxT91bpbyxuDsEBSm7Dqrg8zXpfjbx7TasyP4wQri",
  "key19": "2radMz4Up9dXmtbDhcTmxD8dQxCyqDcc5hD51UnKjoLXDdCsafvEAioU4U6c9vgqqr8VPVkdkA8yHq4rmCBy3Qha",
  "key20": "23EnZqReo6FLdNjtqJ3bJxPcvmmvQpPVujXAb9sJWQkvm7zYSLCEoeC15K1FCUuuaDk5jQJHXFfgGg5adQLYS2QZ",
  "key21": "5TEs4Px55tMtvjY4hMFSotTMos7yeoK6oyWm2tN5GtpgdtHs4qLXZ2fpPWCj437UgcwaRbEBHaucd6bZiSErcFKC",
  "key22": "4aBmb1ssAjYh5rnLQRqkjZdGkodcYc4NFjwpKyjKJaEAWfiewLhZEdqrJzmFmCTPPCkqE17wJtzFji7YB7nemKZV",
  "key23": "2UYLZ6YV7JnR8r9XhJxgFLYqP3bGETbddiZC2uHdjfhT1jpbx36cQdPxZSqPbUBMVVY8rzDu89t7s9GbB79GCerU",
  "key24": "21kKyoNrfaUPuqwGsqs6fMy7c2sDQqMQcA537wKgTgB6qXJjXKoipgeen4NdiZ3wy6rkgNHa2YksN13h9K8HMgDd",
  "key25": "5ZokBCVoJscuqNZUpvgAG9aozemNHzGRrnY7EDCzXwVRnvqUhttXCfndYQM823g3d8qwcoYhF11BFFEpgpxzbrEt",
  "key26": "3134feXL4KEt6bUnEBUxg6gVL2gSDagcXa3WLdzewn77LkHbdQcDiSkxkv1bE887w2XAmiusTHeTex2r82yCN4yt",
  "key27": "3r3kncvVQTrb3x2W2ZRRCkWka1avVp1pYzSeAWKtMFGLpKvfWouDhQq5oZSj1kuPDXSUmK7X4CRbPXkakzmYbY94",
  "key28": "289sssY43boASK1zx58L7uTpy6EUVPhxGCeRcWgik6ckXitAyW9d75KA2DPXoKoudnt8RbPh1dBz1hHVUGR25tLD",
  "key29": "3zjd5hmJcxjv9CcFsrV9SfbhCjh81DwFruffoKrUx1F684sN7ki56TY3bgionCXeX8T3JdAVoWcbEdkfyuMEfUs5",
  "key30": "FHUApT6ih2i7sXGrcKDSjCGqoPBA1KJJDJ2sEQTFxBpa3WuPvC4ocSoH6vS6b95Kr7SQgyv2bBjMsdZ7G28ZRkQ",
  "key31": "3aoH3e5tjjAzCwBxr1T4fC9wSFBPXs9kYYw7GBa1df4oAg74RN1gxrLE9LfSWZF2bdswVmEjc5oK7ARzjvezTMxJ",
  "key32": "5DuEyMNVNGXRoZYYY3RnNRsK64UBfemsd1N2kYAgAs1TecmqU4qgMhpP7X2RKuyodd8oVxyT7pwyKY6LsyHTuPy1",
  "key33": "e97DD6TwQUrKYbDmLuPUQBC5bkRxwM684yGizdKj6BsKjert9g2Q4FSCyVFoemuDJiF8jhKMa2bqEzQHr4t8nPd",
  "key34": "5F18Yado41MVVLE9HHC5aSTf9H2mQAvhvbjdS9GdGHAXUERojuso2USLMPWDThyrydZgpj2vUvTY7Fi178reHq9J",
  "key35": "2zY79F73X1zUg4XawKMzKMho2V9LV1m64887UatQY2tG2VGX4n87xwZV1FrKuxnYFkVYrRBHDo4KbiHj1yVCVo4L",
  "key36": "4f2Yq5RvN7ETzkikCFPawC6jsACmbL9tTADY5u3GnBQNp35GBWFDwdXd237KWV91XZXm4LEpTRpzqmKdZgqmrra"
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
