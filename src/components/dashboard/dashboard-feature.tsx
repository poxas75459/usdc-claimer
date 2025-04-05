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
    "5364BUAq64AYWLCm5oyLXKFhzAUM6hLHQguTjd5JVzqi9hc1733sLwc7x7FkoFxUVuDzHQGS5Jy4ZnRTY27jopxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ju6rVwEQFvQLryU9C9iHnZjSHyKZqUj5AzWWwNMJ3o4y7istxUdr6wKKa5DJDZ7ZLbYaUgXdyQWsa79GzgPLav4",
  "key1": "2P8UiSYpDKibFqV6MTz4HDWRMfj9arjCCEQqhdGUx7VmSiaiodVoUsZedcQ2PnFV24V4YRPTxdH3kvKBMgtaiSkc",
  "key2": "MZPThZTGzxEdP8NF9sLj95ovmwZbRunRF9myJf2rRMfMg5WbGamcCDKxHjtS4v3douFAHzPRZ5EcdWoTjmwpJSm",
  "key3": "4Fdi49k3GeqT8rqp7sig88pw45VnD5xNVWU61nBLeNjBEU7s7RBsZwF6jhtGjguz3xrcpEfNQzHudLHFnDRUXRHn",
  "key4": "4WSxsjWcpX5tcaW2VnXhqg1QV2CfSQgyLTasz67qteYhfqDrLbwix8aY9FdBnQKMBwZuyLmFAmVvc5sEb8tdFk13",
  "key5": "5B7AEnH1ZPWv4zv3k19kKxs2NBUaG922kNr1EuJ7HadTBt2LkFfXYcJoMKPMMz2TRq2HtaTSUYbVLhHmiDh3bHYt",
  "key6": "4HU8GCPoWSwpRN5G7RPHzCbeP4RanYdPtCVWFFbj6kKXNsh41j3UAy9qy15GLPyNqaZYtxXTWtcdwixNV79iJQz1",
  "key7": "SqqGkHLCEvqnBDtD2niVmfoADDmh1Xe7inhUBvLd6qdSN8eMwTwf8t4SfjAW2W6d8GhDBYLMifcDLveeD4G5L9h",
  "key8": "FmREfqpUP9fWxxW8YLitBrBRicP1WtNTCzZ1nUH1G5QxwSGeHZMsjEDoYgkcywVNw4sLKjNwyD8Th5VjwLuDBpY",
  "key9": "bt2wWh3yerfbcVTfss1yZ6mJ4VfWsdfSZCR3ZzuHu1i9WpAPEKHKeiZuzgMovpwEsbfCkuyWZg6gTd9ZzNu9gbw",
  "key10": "4QnxNW9NdpH3WEVzqzzRy1aygHURquf2pSMi792XCguVAxZx4jq8wSsUMir8wCwtpAyoBaZKNXyj3sZizX9XhXfk",
  "key11": "2v9X646AA2S1WY4Aw5CnJ8MbPbBqetyVBB2ddmeZeViS4SZuVx7KUBCD1DKQS7usMoMYDMxFHZyN1ubk8dvDzAww",
  "key12": "2wKiAmbSmqHon91oM7rUSnB1vSDPGx3WcBfZoKu2zsvvwUT9PgZpVgvxiikqHvkgW6BRiEZ5Lktg25JEFSnHPfaj",
  "key13": "479hjBdbwrtFGoRU1tJAoFoDinz9dqNJtbqnAUQ7qsBEDVVp453pGme2qQZJ6VrRYcf3cUbKDwZiFHttJ3BqcpFf",
  "key14": "vC1Sv29Cuf5o6tptJtwZZJ1L97Jz1bkTh6aqEGYvJYK4wKisnH7AuxciLLDrSwZWXLDmkTojkVJgc6Nc8Q1vWBD",
  "key15": "5eLkYmu6cJPPdC5AFxZ7DQuVkCVrDUjNnGjNfvqBwGvwXiUEJXMHqgFcKnPA2fCC1SRn8F5Kt8ikxrBvPYihhT4x",
  "key16": "fKEK5WrWADiijXzNMB2pRGr9dLAe2diosxJTusYtx2F3AFJqZiehpJ7WrGNjJyVJf8gRm2E82ZU9bn9XQyXQREP",
  "key17": "4QwXZmtghGb2tyxoVuck77jvcm4ZQLFcvoS3SW6jV994NZ34gnXZWJFhKb8NdpLmxGenCdFGdiV4upp3cwGH9dyx",
  "key18": "5aK48aRrMNfGYhpUskwfzp58J51AubxtxLzMNXTYQkRqq2sVW5TqFDDuAG8kvucSs8MFbcWDjSfWQwDt5sK7tTVo",
  "key19": "4TubmQV5ayPfoLvyL2h8RZtP9E6kUddDs9Jqj7cqpv5AeRQyi34vYgAhBehXvWkZGMUJUeRaDm4AWuKsMVrdDiSe",
  "key20": "5fYpUdQAdN9Pt62prDH43SkTjR3i8dozq5WADTUXdu9maKoB3TDiJF3RvYsQ6sr1kbHUaGmoKqqWNwkevUfu9JcK",
  "key21": "2fvALUYm7fqDCp5NmtsXpgCmFK2UUuKidKTKPkhSSGCoDedGjQPqiSfyPvagD33b7jqZnSPfDB67zFviWz2ksWPa",
  "key22": "33cWcJa846rf1agizj2VG2vJBhytV9wGanQtgnrBRv4na9cMkaqpDet5wZCU5LGzZCS7VVPeMy5oE1ZwMcHSZdKo",
  "key23": "3kbSUdzCj2B4tUom4tFrmZdAuLTvetaSejs4HSt2Ayntw6ULyyA8JNe5UvGF1zwRpZCyDTfHkh2tg5mmSbbmd8LT",
  "key24": "5uUxucpUZx3X2xvrsYAaACQdVWT7sFTqde12691ZbQGDPetpwWzDG3eUinsiiizo93pRFrcZxUYmVXGHHL5XWGCV",
  "key25": "558y7e5JaEX7gv77gG9Bou1BPnjh1SufriYdDngQUBQmRc453qx18EPYAAWxBLN7kgD6sU2emiHFEFQasjB5L423"
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
