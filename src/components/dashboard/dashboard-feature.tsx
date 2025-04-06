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
    "3M5REBc3KUA8sML3LmLMPbC3UiMyoeFqyQu8FiDWvvCmKxzD9TsRSunAaKg4G6Z9HctYwmmtdhjg2fr3S1NEpuC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E5Y2Z2AbHHB1ZgnPq7wEEF1rXGGALtZ4S2VGymNRKxuWNCoKV3txuMYhgsp2ANpScPacTU8NaXGk9aFVxc8V9NS",
  "key1": "SXWsjSxVXuwyXRGmV18eaYGCBzthuTzEgCPTFzsGzR85FuPtQAFHMSXtktfB7djWGmt1ogo9WvSFKTxdCUQLPt2",
  "key2": "3zfJaFtPJwtqvGqrVpVdtV3zhdup4fDK1a9UfZpJCwA6txD7YZ3Uj1Q5faQBfZ1LmrnUZzfYkgDrD8RpdU2z1PEM",
  "key3": "2ep32m2BPQPSFRFJu9FyJrZQwTGzLwChvWFC73FVTHQgXNb5KQRAo8A2mXqkvBk1gmVrr5iBfka1nN3irf86BZS1",
  "key4": "64D7oYPYWe7g1H3zWM7Qwjk95ZHDVjzam3pmcU7Mj9eaFAzF4TprFMc3Fbvp5E9gokUQTYtZP684FfDuqhmkxUMT",
  "key5": "2cmwhAyiE7ZtaPFXJK1j5GBKfSatBAQG7ZrYAqrc2a8f6k65nCaTjguvnUyXfYYo9bksbTrhGUWAacUsargxdgFD",
  "key6": "4ttWCBxAdiwSADSfdsfrhG82LndgYDJgL8WQEfesC5FUJ7PZpWrMqmtVuzFPLtunwZJEC5JAHbh5t8XCg2nwfLnX",
  "key7": "nfZTnJSaEeVkVVq94Vqz5PSbM823SEbBwf31KB3H8FbrJcYA1rANzjsn3XscTSAUivpMmd97HdtC4f8vs2UYCy4",
  "key8": "3fEAR1GqPHtgL2pZGG1uG2cG7TdSHYDtJEMmf5SWcrNuR9cgGpvNvE8LZagKTxCZKGAdhKKkWmiRuHzv74yARZVz",
  "key9": "3z7VhJ3QpDMQ1j9mFMyUFTCLXG7Uq3NaW5d2QHJRpLHHibRGzhvhbS1Q3Y2v13Lf9Aw6Xn6sBHRGXNvkuxnm5Eav",
  "key10": "3iXQ5HMVK5t3yMhPY3o6GD27GNNdi6pBQymN2DH78opP2nDJJ91vo8xHYTAZ63x4uxDAMcxgv3exJHtaeFWqsfEM",
  "key11": "4iRAWMagh6EVBNA9LsHS612qLZVsRmqXqWh5vK2VA4S36kQ8FztiJ6UeMM5yR2a9N5pjTsF2grjtCsq6Ne4LTwZD",
  "key12": "4XhFcr3cVoW7VDJrrgSJFK1VQY6xmzHiydsKkkt9Moz95JuVnrpMarwGwg6ZiEnh1drgJ5tT3AP94v4fYNBqp5ff",
  "key13": "5wHqiNaob7RPmofXpugXq3ywnjoJWY48ZFvhPvKU7eiyagHjCsZhAyk6PgiwVxy5TsXR5PcKLyJwzcq2bwFiuD5d",
  "key14": "43nifqxxQTz3kiKWgBFxPkchw3gdSiLCeKJ7xJQm8BNWL4nXRXcpxZUDhfeXmBA5Jp3Yxpp6gDrZ5QDxQuTd3pNy",
  "key15": "4hiB5BwYZ4E2veuKV9cWmyT2iVQhv3G7kEv16LKY62r69kAbX4bZvUVyFDAxWnbyaEAtTFzvwMJUPQgnoDWsNrjJ",
  "key16": "5pxm8bqoctscAmMEaDtRnF7XpxfhsKCBNWpfiNP6nZQDBN8ptXz4WgWLQCLaQ6SH6BwDEwtr79PsdJrjokKvTo3k",
  "key17": "5oTFMgNP7TCusuzcZc8LWTWjSDAGhEpYoaJpghusqhKg8tQsQF27riH78XzHgaNyBLMXQrDHMdS7RfhzH57r7vCP",
  "key18": "5cpTqBcciaKoArodr6HvceEeeV8vKAUsU6jPvjUKJtXSwdgqCg9jHWWH3CH8n4U8NAcK8dm9pfFJamEPvgPVw6A1",
  "key19": "5osFWdDAdhrWkNF6PUvLiKEbc5x6cUjASpYNtWc9Fj6uF8fdmVFyfuwcsjsyQd7DdAuPdXgQGi89uPNs4MhHkn12",
  "key20": "6LDhSbwrGijxQDcD1h1v59nK4KjATNqccibzp4EH2C3QjtK2jMJgMuH8bnjdbZsUnmWdj7i8ASyyewoUM7WaEqi",
  "key21": "24cu3nZn53KYSbRvCMDuWPwZVqZFgZ9CSx5pNMpft7X8igp58fyWYZnTWD4cCU4C1ctPJpEdaA1EmR2vYRZjnA6w",
  "key22": "51CJNn2JkfMq7DiEN9rrSStcJJMXMmT36h6gmiMq1d8Q4uRTyar36vNsxykYAK16B8c1Wg81f1pC47XEunEFJaqH",
  "key23": "674zMUB6yTiWzm5EFSRYZNDFSVmyvN38nNRfPmw8EfCg85aaovA58u2rpcmnqGM8NYUq3wpiC8uWPSC7bh6saG2i",
  "key24": "3AKCt9RR36AaYPY9G5t63L6C6RMW8JWdq6S5Y1v4PW6pcYEyzQ5GqMC9fnW7UFMKyaoSmbxwAXt49arrvPQjdWso",
  "key25": "3qwtTm5ZrTLWBSN9CH54yNXqFPza8gC9AqJK7vBzHB4yGx5vcpyaZpujMbPpV1RpcbZnQVSUcUmVQPZBNaEisbCC",
  "key26": "2v9NykVUGTEBU1bhmrNuCCWTj6SnaGUZANFFN1WxytG7XvvzLMEwGATqwDRnr4X3dbmFFLWDiNcWAy2hs4BMnPjd",
  "key27": "4Dsg5XMBaH95fb3R8YV3YQAiMwnak3JAGaP3zVZBSc3cV2BMPURiWqXTdkz2mBsiXoZAUKTEW4C9vF7G2nywzxKq",
  "key28": "2VGbvkFTeM9W7yb7UTjMrfCqNkWJH61iHgP4HQxwXvV1aEXoF4PGZrDd17FTpieuXZZs66coN7Cu3W5Nf6TSV8mc",
  "key29": "jABFXoowjnbajJTsB8ATh9WcYFCTqdHmirSqYoSXxaotyYDqTmh46mNPywgcABWyZnSKZBNUKAj6q6McAKbtqWh",
  "key30": "4rPaeb1ctwD4ZmWB1zGhbee2LXK1rNEy4CqGeLmvqyiKyyBEf4ByNHL5Az4R2wqXis4CPss5Ja1APxGMjRxF5BiB",
  "key31": "JZ7KdT3mfPyrLN4xYj8bMQyTVmuxLTCNT1rs1K1DY5CS6Vb4XAbDa4143FkqkDKyfFdd4kfYxTmPxTC5bRdG6zn",
  "key32": "4Ro1FFnXufgtQHCN8D81ES2i6YyKErrcDaBVS13K5THaaGD9Fo2xTUDreWkTuuukNu17797QzNC4HLGJRtcK276G"
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
