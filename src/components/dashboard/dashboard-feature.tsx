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
    "3Gsi5UWcQFtrnZV8T8991SVaBZByKgW1WLwt59vVws2bQPuNdjq4thos9zMuqcaP5MR1kYZej7XS6qTRm1GJ8eZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxU5ZtSArAZ2jBzktKFQpYYEYAm7E2HaDu873xUJLevpxR6Da2CqXcGvTNcSR2MYb4fdzBGk1zHrQjL6tJn7FsD",
  "key1": "4ejE5nZsV2P5CC549ysWQfwLkte8AoTiZXiEXWvhYZFH4yHfu5yCKJWPL2hPM4Zn6jfYB9mYuqrWaCb1X9w1zg9E",
  "key2": "53JFj6yDeg23Y3xZKGYE27g8D5LaXVxzwJQst1u6qqSkzwb4PQ3F1rG9wYM3EULhCvXoLWZ34kiA4jW7qG2ZVHrN",
  "key3": "3ZnUEguitzWqpz3WTvQb1FvQzxZNz5HB1MCeKbiq3gKNqBQmq16PHZGMojkWZZoxJZp8kUx6LHpVqnqoW1LQt5we",
  "key4": "2cGwvm7ioY5Ubu7Gv3UTRkShUuENnbjt3s1T7TCNmKmd7TStQNbtMgSxk1XHL7edu3SrameqnFXDzhzpC7NJ91fk",
  "key5": "4ZWFG3SC1DEY2Wi6RqCLUwGX9ZKvzRpoXeKgHeHmjgo8y6iS25JQXtPxeDf8n7CnMBpN7DQ5xxLo9s7Mn4T7vWGY",
  "key6": "5TdQ843fQDKzyYD9HvnQQN3YrVxmmNqEfLcq9JiUKbjpKoaQPfU4y2PX7SDL3W6KiRQxuSykkhWQFcZELtja7Z5c",
  "key7": "5nZ1Bduxsu54yU9My5TFh2hXnJdwMtbhimQMWRWuNoVkDFkjrPC7ETZicY9fNtLDD9fSFXKQZSaSXicy4TzMGfKS",
  "key8": "2gWAV2cnxFFAiWweBgjUVod4YTHc1wFoDewkMrxwF8KQR7mubPdJspzE7dBoGiZSccCegUkcFhHwxmtuZoCi3Wms",
  "key9": "3grHb1FR8URbdP2xK9WCeVqXv4MXh8MQar5GZVhmCYdSc5TTk8sHXcYhtL2gcGByqB2H4tBabhNSK4jPCwE6ytR",
  "key10": "5WoAuWfD8jXsLYymerVaAnf5RcjsdCev9jB2pPvp1W7iwi4XJnatUjyQVv61GuSmr6Hby4j1quFkkEsBwMCJbkEx",
  "key11": "4RDcAxZraBq7jREWcKqcj1qUEy2797viPD81tifH212CzZwmwn416UdhWyHLjYs53gopv8aVeCRuYq7rVpC9bgTx",
  "key12": "2FYBda6pXiq9YkyzpHhAbvJLUzPrbnHjxjjZCvCMYkARmfamMzPLB9wBPcqL9x2vy9BHgQLPnEQRVwxoYju5zBCL",
  "key13": "3LKQHjJXatMhUVW5w4EDq3t2vQkpLyvff6CnnKFxEi5iSF1jHYc8xD5mpWw3FfE9djJeqTdYsEwBrKVYaAquEDPB",
  "key14": "4L8pJQngzocqFqXT7bRZ1qwqDkfg6tgF6dmqYgWbTrnLRuuW7MX1ZTd623Dw9LdgwbLRxN1Ta2cSs5tk8suWdoYc",
  "key15": "53URM9Gbbsahk7yMpsxPMhBrfKRMk9wnxNGhCfU9fpaERNhyGMp3ms8cwjc3eCKDv9gNYeCRsxevm7osLW58dCsW",
  "key16": "3YPVRCJknUjFcsjv7r3stAruR89vtkLDcGEpyy1EVfr67CDootLXR3761cqQH42rh3zDFX5vad1e7V3CacYAMxdE",
  "key17": "5ETQfQYQh5wnqdbTBu7WSKcf6nX4SMjnctFgLT2MzwmkEnvhqXFhyWi2FqoirYhQAypb6QRn9cFrsC5uUL5GrqJY",
  "key18": "4A1YR91xruJ87Pk6MaAeCiVLPcCsHmchcMnE34TJZVzc6hYd7AeNZ1Gvj68PSjZyjvM2prb9gLoGCCJgkwF2cWui",
  "key19": "5PMGg9KttUQFijs8DqF1rNFjGq1yydRYtyBGzUcTJYgWkPq2jwWfLdmzVFKQDFSmMmkfzTeUzgY5343LEg2VTKfm",
  "key20": "5jUEHyzZB7gvfzu41k6nEiW3sRUYJqj5m9N47yXrk5x4m4BcHMwe6KuBVWYkuokGJWfU3MMg94Rd2ESzsQQc9KL6",
  "key21": "5AvjxZQR3Kj29CkWxMrG97uRbrosXCwFZf75yBQLZ7e996FGekJx7c36yMz4ELZmsmAGuAb4hqwYhvr3B59xkCb4",
  "key22": "5DmHGcYrLovDMXyyBYcH9oFYfF8JsrNR54Uhsb7X7iMe7wbh613zwxSM2kcW8LNu2TKeSNqiYto3Zzv78xmLNtsM",
  "key23": "sNsE357yk5WodyhyqpPvyPVsLnNE53PT3mTn9Drm6XAQ5NjRSLzfRjEEu6acGKpBfpvX7azjJfsdB7YP3q99e5N",
  "key24": "3F1mLdKcTk2GJPy7yF4A1xMR4U3mQaHVwpJ3SMhw6jpxCqDL85dj5tSuW5Mv51mivVRQf8FBL3dy8RoAcce6Pge6",
  "key25": "5PPWPJKVPZbUS3xcMyiBJwii14uy5SEq8ScDUEcXUe4r6DmhbmiGj1zLCVdVSGWP7p2C4gzpaQtvhxAmw8HvHHi6",
  "key26": "3gzrkdoUFkzFh5PZNjvbQKNL1v5fHehhTFhDKcqeBciDQDd3tawz27WEx8YLhVMgZ6zUTGe9Tr4aKVDepak3D8Jq",
  "key27": "2r41nKNUy8c1eueSDt6C7jvRhwY6ZoKds2e4rzMWfMhtn4ZjsRr6v6EkKQsc78cjqQcUFExDnnkZiSNurgoWwpPg",
  "key28": "scMUZa34bLcdj12nSVpewpeZinaVgeNYcGeWbrFUXT4J1dMRiR6zcvP9aoEqz7kdJAwvVW1pqu2qhF7gDKngVvF"
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
