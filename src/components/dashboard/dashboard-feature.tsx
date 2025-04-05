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
    "4b2DPXnjsB63oanPf4Mnkqd8a7a3x64anf3nyFnj2AEgSdkxXKbjH67KtXAKwrhHEXbQE8vjqt53iD1hgneRA9vy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwiyLoA3NEr5KyVv9ex457hj27BUZ3x7JhtSaqRx7AzrqoqoaxAH8GhYbkoZmhNt64L2W7uKBpWmTQT2p8TTvK",
  "key1": "3nAPTQYQrp7sT69CaQ6TzGvdbs8i6d8vznTS9n5FP8hUVHJXWnykB6i6jKuwsVK6XcXMcCGMxrSnb5ZppXbsWooj",
  "key2": "4BveGuEFvhajyq7bRUor7yd764QDURCH5hq64eLJhiVubmaxZvCbyQa9zQCTqVfYJsq5PkCHm1CnJqzVS3XM9Eeh",
  "key3": "4FewcVQjMNV4HCPggnfwTQmC1ANrVyasQG3KSW6JkuWoxiU2Puqn2jCoSDBAGLXsfk2cd34rxy1EQf1VHbrSQmqb",
  "key4": "4adL3M65iM7og2ndxGgmbWthW7d64ggPCG6PacVtZKNqKUTTinNX2RfoMRbQ4wxB53ntWtnfFrBH88ahh8tSPtLJ",
  "key5": "5FnuTf4nfLriyFy18zq46HLqm42vakhco1yHNbHN9F5DZeHKhXEG6rrLhpp3r6HkSrCM4xZdn7TfJPEMoBjuur5q",
  "key6": "5jJYryLS8EXAA4hrxXEn93WMJqDjCQ7zKzxh7dB1mcbz4VKMa3wKGu7F2PsoACEziCPxANWJLcNqn3iJeaqdKyzY",
  "key7": "3m9mB5srSuT6VnZxzTmJiMUBz2wrKrukcevNv2KNrebStgkdjHhUnGvpD9WvmZtqAbS8vCmJ7BWbMHY3VgPQwHYc",
  "key8": "2JpmsmkCCp7i9M5rXrrgMeU4ppdmLdNnizRKXWen3ifRcysh94eiAY4seEKcPxrhXyF4y1PEFepvih9PXm6Y44NE",
  "key9": "4BKrduHdNDkUXQYbeQTRSgBsJKoVZqjeSiuY61cz4612YsBoHvRf49o6Yf39L5fKJm3xzMQk6R7VUk39LTZXssrf",
  "key10": "4KFv3oKzQzvbi3enhCrxQZMzXGXhrXLCwpJTBcourXu22QTGrZTrarfvCtzcWy3G8mKwH5uLz9FxHAZqiDn42K8e",
  "key11": "2gzFhoEtG59rcb7KraUy1QEqCgfaPc3poJJzk32j6Z23AXXFWMvuKF6gcxXWZiScAcfJa8AGHw4km6DqD3yM1CSd",
  "key12": "9pQw3bZoWoPqhNvcaZUD2tXfyMrtsrMbHF7N1QaZhc3SzX5sYxV6uEwUvGa2XiECAYUNk7G42HGyZFDprzNZbta",
  "key13": "NgpbJCsrZiqvmREzctXwfwJDqMihV7XRz4aBHQ2S27vEoDcQj7etetHvLSgfnaynn4k8vdTRS2kYwXb9iHsAUzT",
  "key14": "4jjocuKi23Wezzg26AKu3Msf7TxMQoytm2y7oH9NW9qCf8Qx69pGEMBcUaZPnp4WsA5QkenBML7a3GCJHnrLdySY",
  "key15": "4SwhBCSyTEMqRq3Ad361Hcqf3TNwPqiJDngKvDTPLREeBpQweoj8raWq7dpUhZJfzCeeLzY6uVeeGDtpaWJkNK5Y",
  "key16": "3fLSqe9261ie3YEetwverudgi84oHgSdZHR9bb2PA5cmSk9hN3aZN8upJKduEroYyxt2JaVnfZ7A6wdkrFLymxXR",
  "key17": "4RDyHF3Haxe22LH37wVajtWxBxZDJrTLmtqKRUk8zkVPYgCLe8Y2fA9Zrx3oPaNLcpYHwcoBjbzHxPvPEFebFaFc",
  "key18": "5JZctuaaojQaGbhkR9WTvyaWorxZxeZbGf8sDzQAKNpGhCgQkpCfeqWz4tckprK1oTmLLvfeV4vhkfk8aH8VsZ1Q",
  "key19": "3WzBZHtDKUzdLGfaEcJ8p6LkVY9wBP9QDf75BwiBjdMkQYCDuvWCh8ecCBVURNqnqxdhEpPLw8N8rcwNLQBfYz8q",
  "key20": "2MNVr7c8pfA3Cc3dnhzbtJByzae3rDtgU75deTRF5R94REHPAM7pBnFLAfzTtq6v5BGeyLb9jyNfWLm7BJXGunsT",
  "key21": "51n6mZe7yutBvs6GXruTMpTPAd71maeiRxmPUAJxVpk3W4pzyCavj2J5woxo7ZYyu31ZKP3SURm1SBXm2QtBoTcK",
  "key22": "4ZcpasPtn7SW6EfMEpxZwr8kwxMw2i9whdENCowYoWCyhZtuFguHZPrSTgWREg7uwSim7WwS9xRiY1sDbqepb3m2",
  "key23": "5tFRAmYVufhCYrM6rt8r7C8svRwueNQxB3UTjQ6yXi5PY9TsEFXq9WqUoz6aq84rf5pyiMqukgdFmkwr7nHvQPWJ",
  "key24": "67bckCnCVaXgqKVWa9EZmP8ZRRwFDNnyeGu5NtPt6YXaF5S4bMFo4ZEmrtrUmDn9XAFHqXtvYDThJWGNWhTPvcmw",
  "key25": "5mu8Fatzm4tWYVbunhtMiq4j3UabwNJQSFUdHHPNNuQeEiyyBZGdVugCCyzm6pNM3b9KvvzK65VWRwLJFx49Q8v4",
  "key26": "61afvSG5TC9ez3Zd1w19fei4fkKSMp86o7NJHm5QDsFZGRF5xpC46dzEPcqJyubn6V5LAdp9eBXZ7E1ZUoLUnsfh",
  "key27": "8ywQVGTGCKnGqoag7eTdPq4t8Uqi85vfbivgVDH2MfFeXYxYrMMWDnNgQXaBGm7MFayTv11u6twi4Rzo2J1XLc4",
  "key28": "2kKqJprdAktU2zTVq32Anc9VyiazaRGnxqFX5U1Ltshmpjm7yfC2epRxDhW41L8mpQKugLwGRccSiM6SGaWazut3",
  "key29": "CV7SYqd5TAy4qbvSAFXunjrvrcy3UnzLa45cbaWoEFouD6aSmj8pSW28tqDSuwbJbh3LdDiP9YS94DtJYHdhF51",
  "key30": "5WyN3crVbfRqGhQwzZfRmp8VnFkGsGpxLU2kxQW5mpf7QY5Eep3GkFfqhBZWUosw4FregcPVeMxr1ZfCSirownid",
  "key31": "xRaEHYHjGcKBdF83nCJbe337D6t1LXcJqhaw8SgxAKR7ehbTa6kpg7RYpxYUc8uH6WfRUwJq4x4Q8rjyQT1EewY",
  "key32": "4C9RgjAn7GU3QfwWpiJets96PHzzthUy2rzAmydr3T881SWCbv4WqQESLuGBmzdp9uwzUXL5wo4N77qaa6a7T74r"
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
