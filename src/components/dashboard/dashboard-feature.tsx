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
    "28RVmZa9JjRZrS3n5U7iBtUcB5o7bfqn6Y9Kb2LfeMFuhDw4q5U4bUXA7rVq4RBRVm944rtECCXNm3Gdb7bWAHuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMVkKuTfCrM8gwpdArcaDx2WNFX4f82JAuWQRZmjhn99VQ9strmofJWcz3Kws42nRKy6KZLDPHPRTG2JXaCECgU",
  "key1": "5bY9oHM7CH7kMaK8gz4M8rcY73xYsxvhsEcjS9bBxughTacBdc2nm1ubxRKLv3iFmbUEprdQPpG91uH55KswVeCQ",
  "key2": "23kqJnWaCPXXthvEmr44gaixu5JrkgAsfaSapKb4pT5zWC9qBZR3xZx3xR9eqRM5wYdr3TN79ZfwkzLytAimszkG",
  "key3": "5BK3YbUwN3nXW6ufjzMXvxxav1VXfz5qRZjZUx9T7D1rNkCesGQUv1rUcTzAUvHUgyPKMEwiGy8muqqcvcqP68eC",
  "key4": "5qsxd1H3Gvd6fwufiGf9yLKZbm2x26mYbxxBYoL9Jd7E2QD1qgno4zfDZEtUNbSGX1Cn3miUfcRHAZCtXyBw3Uy2",
  "key5": "QV4r8rkZAXYNwpiASAdnMe9tpVzUvYUrKzjJUdFw3qHbE2f5vCJ8y883LqdJhz19t5rX8g9KYQxizspJueHBhMT",
  "key6": "5TrS29A7XWmU44FBfqRKK6NtDMwdQP33fqANRYYUu6qja45RjZXMdPoVyZYDRFvA7nxWVvxha3Bg84oqi6aWZj6a",
  "key7": "4w55vrHhR7SaV4hd65QiYsqd2cnAFcEbpggfLNpPLzz3scuBrahpjqVSYEe1gZAsx2ALSVKczSt8hEiArt1HMz4M",
  "key8": "5GVEMy7kFTNZzZ9fSQL3JxtvhT8hbXvsXvrUKYHJ5nMrUKZfLFu7AyamHAny9AfvvSthMixNvBW1KTh6qUAoNxWU",
  "key9": "2Jou41nPZfVUytQkVSeE4y8fmfdgTPR8bU4PxgsZ7khNzYPELdHLdNW4NzdDXo4DVjoMQ5M1YTHzrsR4wm3QYroi",
  "key10": "2zJYC19H8oh3zqSmEw2ZdUBXciXQiUN1y7wMVicoR5nKKBrLLLUCG8AYrmNgjcUL6EvfzkboDQsZVq7CBd8yE58s",
  "key11": "3Hn6B8CHr7RfHyvurfWsbBDteLBqEPQTaRaenFLmZr1uP7aeYJkKaBm2uSmqkAmM1AoZmoxicpaMjPWV6bdmU3Vz",
  "key12": "4drM2uXBAfbm7S9cNDSx6Ab4kSvNtWQiA2SR8LAcroNT1RWCzowQegw5PCTsjgS89hhFYtGfbRMDBjds6mMQRM1T",
  "key13": "2ijfDqwgswgnWxuRVsP6YNvDFRvDHGCKx2gw1M95SkwSxQBeUJCaGapVZkeaHGYPeXnP8Sgm4CSHCwCHbxE1YmME",
  "key14": "wWWi2Wi9JmcJgUx3noCGYuK3vi6cfoPYbXwJP2SxiwmLeVBJrd7JECr1GUCo8nZdXVq7TYSxGaeC5hWZmjEmbB7",
  "key15": "58HKr4PMThYDU4PLgczd9pCR2X6yMqdVNPrv7SxCGTKZzNTPXVmYwdieiXmMqGancPUvYX7FYtPoxueFcjJciRh6",
  "key16": "2aLhUStVrE8TMCmszTScpv4MRQ4mrZdyNHhkqTH9qHVPcxN2xDmQLvPoD8AcwpYHTToo6mWi6kXqXMdeK2rVgkaw",
  "key17": "3tMtH8HiEUNuyhbiabQJUmrrVKdxUv2enKeYU7tYkEntSAks17LErmFqv9Nnn6Ny5xH3NgSK6vrSC6Sa8Ynbc1YH",
  "key18": "2bm6eitj6oMAgmVts7u7BqmMPJc76dUpRUu374jwHfvGyufWvfcJvYoDZVDB9EbppeTtdSaE6s3uoDaDk9Hm6WL6",
  "key19": "4v4VDAgzyUMMQwHEqLgPuQEEFxTYmqtxbtcxqp9uQ4nk2ByqJpaUWBsBqe3sPzLifcD4hdhfGEaeFkai1fXtGMHd",
  "key20": "2w2AQQnLfeZcUzSJEt4EsHe1wJYq4yQF3Nc5UWUAUbupdbJRUvfo9J14u8XPyhUd1mLifpRWrMwB8j66NyF2cNGf",
  "key21": "2T34KgWuvypiSArBErQDHyMAgP3oWtucmmhtKQsvY8gu6B2ur3Fivs5SDrcw3YPue9uGSnYbcZ7LNJrMKD18r7bA",
  "key22": "3y3yqTxuPCQFP32z1VauNugwp5gBscyCKsieTmqmZ6RwWKc2rrvD3aRmUbNBrGPsxj3enTRQjQUFzqryspBsVU5J",
  "key23": "4PGNXHtzoSmdddtEa6mrq8kCwsR8v7TZeYN2sQowePv5tb8xLpFPTVeLysvXF39v3JwZqz1hUTZXmq3QTtgfCNU7",
  "key24": "4EDr7MaPZod8maV8yT677dQFt9XakKccEgpdVqYqPw8mmXRVkp8m3kxcLGd8XSZDzY4959i6EjiqGH8UraQ3Gtoh",
  "key25": "unT4mYKEfnhFnhihR21iP3Q9TKrhdBLq5pHVAmYgisAXtLwAxr17THxXDRy46HgczGNrZ2B3jzChUJBjiyiXwTR",
  "key26": "3NHUk3V6PJV5umYWK9sn9sGYWVpX3A7tFgHx4ngEzkNDsHqALEVRByBT64L88cRrhrV1FiJ4y4fT8wrkfDE1ptRu",
  "key27": "sz7HRgUdvumpLvRT4KJcHcr8c3wjwabpdvrLgYoiwYSs1cLCNa1BMTDzyNGQKfTtdHC1gwCYDeg69qj5Me8LHG9",
  "key28": "5NtGzh9tp4jpNgr5FcibLWScHHHeCU66fA4W2VpEfP73HVHz6XmYK1i7osmPMNnvgXzGPMTNyTWhxoWxc2LJyA17",
  "key29": "4i1spmMM9syNHX417cW4iHH9ST6buBPstjASvB2huKJSnLNWbnzWHPno9F83UzKAvJYdRgKhBZihwDsPAHdx34Xq",
  "key30": "EuREsMo5vnk6Ez48A78FG2mAuoe8nHEqvQjk3nmGmy5zvVkhJjf1H3twXGJGKVfmYZCSbAdsSAhRLGTKMW64AoA",
  "key31": "2xWy32pZH8zAHZ81UQSuPe1NnguYKY7u5NUbNwaRKn5AXfZBhSEhUB3qqJLWydG4pEo8p9JU7ydfyo6V2Hb7WiuH",
  "key32": "LpjenRzTFZYFvsoLSdYrUryv4viqqgbkjETWG4vMPvHxerQdafyLDDeQCRKMp9UNyAHw52ob7Ts8GT6rAh4WdZr",
  "key33": "2cJLpLEBWbDKpd3jgPZL54kWc2Pd1PUkgUPgw8ZVCSGY6G57fSJQ85iivo5eorpgUstBuBxzfsHErrMt8vnZfEbe",
  "key34": "2ZofLAfGL6ZFm5xSjE7Cfejc5F3WRRYCppqVnN9uMt1dmkdcCwwUsGzpYLRFc7AWF4Wx6FSdx2BJeat5JnwivKkb",
  "key35": "5ewJCYoVLRTGZRPQEVryMgXYyTvQSFeRxqxa2T9t6MWoHp7a4qxD8Y7tJHLxbp5rT7EECofjvJJLoeDc5hjcYE8V",
  "key36": "4eUTKZDumwXdKs3CsDG6bogDscTr1RisFg7Nh5HVVH8tvfLEXx7RyxxM4eZcLWsBmKDgiiUYBGSwD1hZwpFWgbSG",
  "key37": "2mD1MehQhwNADoihVmNQD4SkdLChKmuoEbk4fRSuMcunDKE5ivqRmSDxhqWaarMjvmQdAm3cce6s8Pe4kvy6Femy",
  "key38": "575BQgS8KkHDxtEJZURzx4A9PEdLD73hxrQafXJp3c7qpUfDQoVhvAft5ptDxchqMAhwEeZiwDuoZtdYcP1o7hpq",
  "key39": "4p4DuGzpz1Drg4Z3QVooy6NGaj3Z5AkJhMSpVFPrrwVjDE12xVV4Y5jX4ebZPhwUyoL9bQMWLrHP4jjd4jVdjxfF",
  "key40": "RE7WDNs1RgHNAUwb8FhKmGw4JkvPLk9FAxDSU86XHfaJpRUZbn9cNa8yUVpMTd8ckdYCs6PkWASd9MvyssEtcS3"
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
