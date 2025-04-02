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
    "3Zph5Co2yNzCti5pUsr3E8iMGfHjvXm81Q1acj9PpPATST3NGcoHJ6mdaeLVnxpa5Yd5z5s5vnBV4Lrn5kpg6vpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4proWELoM8KWTHc3zdkEACwrcYhZLyQ2Ncm2Td4sL1VVqUrw6qhqf7S7W8k8cCPY7M5opHFPVqucyKefi4oAXK1e",
  "key1": "2mt7Z8xbyRV2qnPj6ozpTpowYPbdq2LmCJJNiF31NtfuBZ5CTjAXCsmgXpxRRKsnsuZDkyzTaAiVj1oYCHSQ3swD",
  "key2": "23F9gBU7VEY3gycExsExGKVGeDNokZZvqsQVbKPote4cRYfzEPMYEdXH4gRG7it2bm4qbsnBtmXfoW7naN62J41M",
  "key3": "5S6wzPG4zur6CwHAtsXVdRgxZU88HWVoc1L65t9ghAuFMjLGQFNDPcwJuWz8NmLhTSAgZWr7V3A79YjmnQe4aJtW",
  "key4": "4w6qHm4wBQRZ2KxfxMZ5gvjoawKEQBmubG9mtL9o8h8uW77oxaLhB1mrFof4pnjHi5t7NHMreXcHBfN2eARoayq7",
  "key5": "5qQgYNQVTjZWk5gAcepvPiuPWT21PqFgxDJeQRRheYwpPJ7t6ySQ37D3jQSHuZNGwhFPLC8fUEwEWTX9Phzkv7Yg",
  "key6": "384KG793Y6Qt2ReDG2fyxJWjBTQFCTqKLU83gtZoRcNoEe2xm8z61eS35fJ7cCqGaso5pA4Q6HGyTkq55tU3dnUm",
  "key7": "2MGPCxvycW5jWhqXEmBUg1TQA1xPSFKr18PWiMYTbHPi4K2WxHrCRhKqfbkZrZ1ZKpquRA2oBPHgA3ZXuUiFMn4J",
  "key8": "4mTh2KQs4hi5wZVxX13gw4kRcyAwdmiqQFeZvnGueWeXJy8zuLhuD6HKo8M2hWvnx4KXkqZwJp6c9irRgdjQyySn",
  "key9": "3nypzkzWDDcnUvo2FdyoQRXSMCqCgHpRMeYRbreJwjwNuGrtxyRjapk2Vk2EcPBE5dSBQUaadS6NJfzg2gTiQgYr",
  "key10": "4EkJVhvPUvfYDWdzECNz7nCU2DC53vNWVN26NayLR2F9txGUNjJjKCNKeMCSninnmEivRZjbK9ybEbSc6XH9Qe5z",
  "key11": "N3HimAeRxCjFMKtaHAzm16nC8vffWDz8Hittcy1xCTBpPcqZRM5jFinYXszqEiTMhnzdJm61HBLAUKqroA4GMKa",
  "key12": "3kGTQ97opH2Qft44cZwHd9B86f7ydpuHdoxAx6NoCjEgWizbNu29iusrUeiodKbshg6aFZFCGZEfDZnQXWRf8iTT",
  "key13": "283pfaZRhxiskZYnaM4RidnfVfXJqUSAbfM6y6DmiH6VNnyHXDjBXx8K8uy3neGWCc3D1otRNMDGYoBy8voXwf5L",
  "key14": "225vNayxfPyiKstdMRUxwftJWbvHQksuez7CxRszdVvkVR5oALyF2bRmF5qE61NfnpnRnr25iGVxgKDT4ATndEqJ",
  "key15": "3jAc9phqvNZrYtuTRCVZW7s7ENSx8RWyREQuGo6qCFHBf2bwC1iEpCHzHaJfmFhU6WdsAv8uJq1LmuBkpTdz4y5T",
  "key16": "2PF9Q3XpHXzAn5mKfKTYUBevW3XvEbDjsuKKajQ6vkaJwVXkwYeNSFk1uCHYM9zTkQqAw6QPcVz59ztbULo5LCXE",
  "key17": "4RczB6FeFLgkZKeUpvog3k57oXpEjR2bZjPLYMDYxL4esfToyXnG1GLf5WoxJN8j53bEHQmUhC2hEKrh1gCSXjPm",
  "key18": "2R9N24y1MeWJitas99BcaFt5tAboUpwLJJwEwEMPKr5K7faJy7G6xu827m7FH91avsNccnLH6h5JTgk5TdFYc5HX",
  "key19": "3caNdkR4q845mFZEbNbYuAHRHm9NeDpiejxJUDV5BUD4yuPUa9BPqPRCu3ioEv1wP2EnzdVqjhA7SjT1NfYZp629",
  "key20": "4VSNfn6RackLbySeSkbSC1GtoHoXyoPbzimyU929CVEyXP51FWGyhybGZp8zF6AkUiZ15FB6vQDP3dTticWq8fQb",
  "key21": "5S3ZvE4xng4bWJr16sEQm2GPn3bJbqCM6WaX2xVnjKXKQQeX6mT1qAqy9pTE6cgqoiyUtCsXCAM4nKc8VWEiEjmD",
  "key22": "3TLse9AneSw4QwXQSELR5iZHpKAKa8ToJu8V9BnT2HtncULyHJLwM8ayCX9umQme8ZpiqS1Za36z3xxQCUhbt8FY",
  "key23": "3opgjBzfJpTMXSxizU4pXKgpkaazrAhQvRKHr5yL7ravZkfDL4kQiq9e3fFhRzaqe8gLfyKzN8h3Po12ys8yH9jR",
  "key24": "3niSuQ1Jyz24dbzfyeVCXLv3S3X2uvpxW2kxthT49FYTM1c6jY3W1yxLn8zGXkHhPj6TDredjDQTXdLQhahGmnJD",
  "key25": "a4dTMQmVYPRuqPZUwRdFq8cRPKfGRpMLFvvd4JcEcz5LCGKTWcV78WUGDh6q1cu9nz8MAFMsYWuMdQypxYWDbns",
  "key26": "5qDkAcjisf4kAUvKtrKMBTPNJ8tmJuinsFvbJtQgM4CgJ3DtDGGY6kf2HugRkx5zFULbvEU5T27tv1ZrHRDccStn",
  "key27": "c6bkp1P6ri3iRGyrzMkQS6EEeqqqw915ciN5tKTg4L2aTKQedfuy6JYhcmDuqSFgkkiDEzivd84HtjcBYmeC2yG",
  "key28": "YK9XADLJC7AodWhqx6eSBWS5tgRM2siVUwMKxAWa7Ku3PKj77CxbpJ1kwuxxfAXgyYY3RaFsy9iH2mceMPm6uUg",
  "key29": "2vWZy2wSQUaFmmZgwfFSU8UoNYvQpnecpQkG9mB28VvAZWiWNK8k4qMyp1xQsMRUS6VijKqwMHxtno8V5uUi74ev",
  "key30": "5HJrGUdRSZrBLpd8N3CsuS23b3iMjj1T63RKZpcxn7GMsTRZm5CACXnRF9F8Vx7DmwRWp8uHeNUcXwAVAbAh9eJ3",
  "key31": "2hEGFXcKfDN5DNVWq2rXNx2QcZsrWP4nr7phhtzWmEPSX8LU9MAsjsvC5mmbh6b2DZ9jP2K1iSHFWjhUEtxEumQS",
  "key32": "3KPeS7YqYaC7G3j7x8q9qR4eKy1YLw4jkPpCDdp2oFFsoxthTUcVAiBMBW6qAiZwGCvAig8L37dSHBR8Q8eKW469",
  "key33": "3z1waA3tiu6f6t2JP5LM1M5VAXXHrnN5zD7PnFBnhLngAEghMgeMkwRNpEvBnyEicALK7DMqRrHzT7Tu978KmAmf",
  "key34": "4JAbrzx3hLoAZJc864iqk98M5z8MqxYs1oJzbvnbAEtyJpcS7XSeqsSFESb4uAKTAiEEEFzSHf84VfKwEF2XrQsM",
  "key35": "5srQnshGWkzjHtubHBWPbkbqohjNERJtjLdRrWR7QNVx8iTD5Kf84rNLE3fVQkHeWQjJEwYz2Lh8tHTxC9XuyT4C",
  "key36": "3hBdmMcB2S7CWcJKvzTAvSqkvv4wkRQAXmrRgcUMX4yvDkQh5YfXJXGyXv1rL4Xy22CCFumSSFP9PUopeuaUUfm1",
  "key37": "2VnXds8nD6ediE2ni5qECUAkVUCZv1ihrpsumsrBMTfoEM7GFSccgAkTU7hyKrMYN8tm7kEUs6SiFU8odszb7ZkN",
  "key38": "1ZJfnyfyjx6nszeFQHKUszjf6MRJcJ3imNMw6YFarYktbxuS7bEcaHHT9XhnGzJHUHyG4n6Ckkjewd9pfcuMH4b",
  "key39": "3Xx3ykXJtjkR29Y341k2bos8icJwZGjagDd5qZpzubtsS9Sqm1p1XD453KzUiujEAymwghExLRabCY7cjk31cy9c",
  "key40": "12Ykbsa82yexjHP6dBcDAHNKaNt2rbez9NHg5jN2vMPpBgfjxY3TysKJb4cfaknTakFxYAmq4w94Hvf2y7Kg3Wc",
  "key41": "2HwBEfnwke6Z6PG7KU591hHUiS4NdyGqajoUC6ubnzRp1yTMbQiP66SzfiN1hhCDZ4AcJytyArcMqnNNMgpkVhTF",
  "key42": "3fXgvdkQTf1zCbyXhvhAvN6nTjsERf5Wg2hndZWd74uD6Zf5NaTbaeEmZXNn22WoKBjyXFn6CitCTSrjhzQDMJsj",
  "key43": "39xUmNvMCTfrChuMcbe8j4SAx9RX5ucY83fBeMgHNNp9Zf5hJUgcgWZR3zxrHccDom4epdLnq4M81NhYWzv2ir7U"
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
