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
    "5SoqQQxijHpCVFgqxhgApKS2bgammysyEqqnMH3JkojvQAu6AwGJfvnQarYQtXKmQkQ3N6ayTD4mDBRra1yDEKQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AyeK6xZ8QbLXWSvh96is1221eHmWLytxJBTjJMv7Td4LBzBa34L2qYJzbEvhSPgFsFniK3XWnbKVMpwKC3nTy1u",
  "key1": "5UbsDZxZtmrrvMRjkdL1umCyzANQphXnUmSSDbJiqCWmMPsBzJR5LkuigfoB57HyJrwUkpD3fppDhWeyqFARAfKG",
  "key2": "3d7PJJ1vDdJtBBJ33w9wbjwPqVAuMfqR9TPaj6nWdvVEAAbdyf4L4H4rQ6ysqnmS888baMLRxq3QPnZpHb6HH4MH",
  "key3": "45p7Swvh4Tn8k1VVFLzxL31TfRAKV28XjoUXq9j4yEZrZDKQqw2X4A71jkQrydsui3pEQ1RmAGrvoFhZHkKjP4u9",
  "key4": "62PZrqg8SbN2gt5Y9DF7j3gmCJ7SG1tLZBL9k4Vjy32yQ1AT65EWYAQ6PYSKqTjB47sKQo8oYXnogSkwQBfKXUM6",
  "key5": "36VutXa3RHCEURMmtBehjAsfrb6NaJrKWvBRcC9LXnDrXc9446cTZYFvLPUen8V6dWgQrWaRi3ULeFXyUwk1BMnJ",
  "key6": "VPBWGeHiNUhxLMoQfN9knxjPswVKpe9b5tUNrzc9gvEuQGFxoc7XwRqMhuZtCrvKCeoQc6Xx5xQn3SPjWoFQ7wJ",
  "key7": "3ARrMM27AzVDfpby9GmfPFp9QCAWTkXpeF9qwTgdrxzMMoruBVyeVttZ7wV1JjWaELyWZZhyA66ZQXCSoM4A3Zsr",
  "key8": "5QxTLMDU8Z9LdWHz5Gr2CFt4wUt2mrArEyRESiSKfgfbebnf9xY1iC3HuFszo9ij34zm3ifnrFDtddv4JHRRbLdc",
  "key9": "4mAEDJCRuHBFqXJo8faD4UFX2QAX9dxqSRtM2ezaoEk249DFVqoPBohTMVC2cokMN6ddYVs1ykcTbtbobumksV9A",
  "key10": "3YZYiSEVdRxVzGDx68WosB8u5TCMYtDXrEP1VoXh9YwT5uMERf8fQpEkBJM7PijeosvmcFoa1qS6Htd3Nn2b3M28",
  "key11": "57RgtC4Z7LvQu73xaeKh5XKXN5E8J6Maw6wvHBqHbyaxd9fjvnXMVq4cS8xCU2SdqeLBXKhAZLa1UfnJNZWVXWdJ",
  "key12": "BswMsjqCBpB8t8aCJ2c7bBxJcXwVidq4KJu6kd8yqhr4NnR6esToYMgVkcbRJy1KbqnJem8RknLJ1hqEQvq2C25",
  "key13": "26kJS4wfTT7cA9eNCfsA5xALwyU74MzkuWpu6mf6UtdJUmGx8jeVCtjc1zK5VMFaxgYTo6QMzAmsoXVGk6y4Jnju",
  "key14": "Wg1GiDsXTmuA8aeHX2CriM2vdjzYUFgi7beQ85Y1rvrXP2E9Y6Uod8ieNajVVkpg1BCV22EriJcqYh3SVb3dyxN",
  "key15": "4ad1TNcXGum4p44ZSuK7KFdBXgosFyFeofp1YwV3cWtwyTeH8QGAzmgMNeGwuZ2Tz3iBhYeDXVJ66s6i1g87TLUu",
  "key16": "DdWWCoZuQNpYswyb9CHEpsNz3WNuoYRFCM2N5iSzA9uCo3Xc6omkUqvy5KSs5Hd1WNLUS97tt2pw8pQGdvfsPHs",
  "key17": "62teYKw1DhgUG8k7cHPm12rU82sKZZr1HdRQxkoQ5kpve2ftjLbCarZ93z6j6HPmjf1F8g6rG9zSQmcimhujYMK8",
  "key18": "QCHHed9ESG6MrGUM7M5GfYJRzyboZjPY38zGEgw2zJDGvSowN3STCohyUdzMKGNTfHtnYYWygFoCMdvEHjrZjRi",
  "key19": "4Us16PSLVyzZW5A4V71yjF1tz3hdPyTwcP8DFnaKRePZazKESAfHbPFiyysbB22SXroxQYVbuhrD9QLaCJzee9QS",
  "key20": "2b4nUARYpHofjSP5TbrPYUetQiXcKNh8Gu8HfUeUBGo9C3LV3GvnTsgLwe3Bz8khkhRtLj8DRUoG1Fd54zztvuVV",
  "key21": "3QfF9fzTLanHVnrbdZYRdoH5aKGszgbvR9THsbKc78ArzwD4Bg3qvTrZBRMRx9buypW8XTFZmow7mZJqqeYpZThw",
  "key22": "3RXZHXX2ea5oZkKV2Ck14tghBX2FMuaMktN5xDbxcyb2KWZzJJpqbgZFXRMSmuJ7EdtJ3rHArvApd86xfDCvjpFn",
  "key23": "61dirC3NURHJKnjeJNFBBCVe3gV79FezLdL25mxtLzxSL5GincBQxLFJtD7Jr3qTSCEcQxzvSru7xj7kfYrkpEK4",
  "key24": "2s7SzaWqy4i2KeVL2vGL8LhMeBLkSbuB4RQ3wXtGPjPKDmPkDC4A28ZP2tZtzoWiB1QjdzLM6crNRPFrV6deMuwd",
  "key25": "2Sp5kviALdzSt44D4RNrrrTz1HFCLozwdELCUYYxnCyYmaeUKCrWmbj8v9jvUeHHVPoqXBZeWBvPmkLjtksnRP2E",
  "key26": "5EPX2ud7QiHksj22fYxfiLyGqP3h46GKxzh6cVxzbt7DhALBqCnpRMjT6HHrYqzovmW1CqkEs2NRu5MQLC3cqB7B",
  "key27": "XzP75SHaTPqs2R2RCwWRtrDCGLTnXpCLrKtD8vbf1BPuCnzBYRNtbejo22xALezUFZc1J8yBHnZRjn9Wu6uwwxw",
  "key28": "3PnkpD6KRxqQ7QagdyLRDsFwvFqhuoZwyDytBufztQUjNHXmd4GuSwKQ1aYZH1nhzn7MHn3WZhmhDE7PmX3nbcMB",
  "key29": "4Mp5fa4Fd242jT9e6iCwRUudYnvS8RATfy2WofnCJSsvRLPSsjzRWrgbZXvhSo9LMfDrFqYG28nXLybPRa8KuboH",
  "key30": "3pYBSKdFUzNhWDbFvcCSXHGiKfZ3mPqPyLTg4GbkJKG5EpmL7rFA2GGSVjzptvkKqVUGompfHEgfXh4ZcMGKtonz",
  "key31": "45myjmSy5rVWFBqCT12W3UNYgTF3U47AAnVZBjjPyqa6GvtJ5hhn11vYUpb5kTAhMRVLtmDeHTuLE1HBRhjobtS3",
  "key32": "4h2AsSKzDYSxkXP854EuxM8RkQEw3eFDMLuWVmPeDhUckfe6ZLRp6VMWgLhxMXwWhkrK2oDFGrcdvXxjMUX89HcJ",
  "key33": "4dczZEXKGRrgBJBkjcSzuBruJNuznZpamfAhTmCieqmMm8Mq31g1yf9PWAzA1hnEiT7vNqctoVPb2YCYkYWQEoKx",
  "key34": "2jgMYPYa36FCdtnV8KhkyJtPUGgoZQaXn597pqNVS4FNeYRe2Xqhdx3QVRevNLAGhQczEMTtq96w76uzFLAAuebs"
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
