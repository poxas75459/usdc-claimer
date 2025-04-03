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
    "3nyYgvkcRt5nYJCMTfP8wcFuRj5zki6d9R9hbFKnTUxSqJzerxvwyuN5TNiB1YF2xcWUGyXxYfm13SugipNxugZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B9U6UPzM922Dv5RHfYDNsLTPHhG4M9rVLeHdW1NeiACPQ9GUXHCnkMqcAK4gXzyvPAZeFqt8vBdiHdYQLwrK2HJ",
  "key1": "yEBWLbWb8UVnYW6LvrcyZP5kFrPmQzjjxprjWsGbaafo6QZ6P4oHCaG79xwcPS9ammNbDe7bh9ZJc9Nd9uuctp4",
  "key2": "38M1ARVs1Wa8cVrh6NtTfp29kw5FFDQG3bWwkyhc7vXQLHKbTPXHXbxJ1MMovWGmRsM34vECx2mq9qzfnyvhuxFD",
  "key3": "UuJw6D26Wv5LLUWkiytXBdMbE6aty31YT8F3poaWia5ZZdXB31bQyDccbfHfa1gixj83EtW1nq9NnWXFJVjhdpi",
  "key4": "2UnaLeqbw2wS1BTMCmNXZ5DZJbiw9LTDHrTqBDZew6dKVZpt7BeKwobozp3Jb6aTyzEPcRNNdZSpdfHkR77kvLCD",
  "key5": "4X4n53CRTBJrE3Riwuvg8qixVMnRZujoByN4fxhY8vVryPTsPpSZMxRmvJVAGiMgYpkXQb6ZPz9TRy974FVH5KNi",
  "key6": "o7H7FVJVxX2zuvZpHAHNuRzFAusR4UVKhtJ9t7jUHo5fzV5Rjt4kHQ6djCkdgDrNzJ6iZ6a1iiucLqbFeC2jkbw",
  "key7": "3PtWZAcwhhSvWVXo4z7sLiSftx3eRudmREubMU6mWXQEfmN6Uu131H2dq5ZKyUSYhkT4mLsRNSxHMxZ4DSvVkdCu",
  "key8": "4W8qy6qaaonKvzLwubQumfXwpVAVwx5hSszVnj6T1QEFiaAxKbmqmVD5a7pd5uL4ienkYaj1CGiGGikU64suzPvG",
  "key9": "2nkBGbCPzD6duMTEtPWnVFTwGdtd8EBnLrTyovt7LaEsq4WrAtddL7wiViAxpoRUnfWrkPQnYnLnEn4BkQbebZvp",
  "key10": "ub2CY2WRQ8ghoA3Zox3VeeW8hhif1Jaby1uFNs96wdZTFZ4srrocjEBXGgoUnLUAXxX7h2YAvL8XcKduKn4QW7r",
  "key11": "4ASETSFNTpSDjKaVaRiJxNGMiTQsU73h4oP4R3eVgKUYXseSM77pkRkDBkWUf1iomab2ruwrn7KdVDvvXAKB8rzr",
  "key12": "5s24NTiBWajf7qFPLyf94Frwq1fBtZsALMjjkaUhZmBgVXVJ8gN6B5UhrfbwcmB3w9S87RmMJTyKrxYoWCh6VFCP",
  "key13": "3yNJiH9oxCrqx7pRcGNSTzNjfiXmvqHsjCQBbY9kXFVFzqiFoApi4zRTurrDu5w5HFwpwknyuGQWzChu87if3FfT",
  "key14": "3AvoD5n3GUtxdEWMRSphJivXL14smRerqgMj9o3p7nacFRpwE5nbG7cwjKHhZjag3bDeWoZfcj1XU7zAyEmPPGQY",
  "key15": "38mBSuBY7b8ZV1CME6LapNLxJp8cYfRrrVNM6RSysaY3ETeG8UnBjRNn4R6sHZsrZWTEeWESRm9H48agahAS3KsH",
  "key16": "WKJemoYJWL2LupJDi15gNJupKP2rrqpSBAHAVqQj6io987ppD2DP3NSNAKjJ9sHQqDeypRfuZ9QRwAPmtY5gqhv",
  "key17": "w8TojPTZyDHj4o15gbmMSuY7VfHtB3Tn65KN98toifgU4qyMcgZiMBFjmC89ynDn3wpcCXHrqUMM5p2x1TPfvMN",
  "key18": "5DqGXdGsvjdZbnWG6qwAzMTC6MSoFgxKfqwpCK9NcCWT6wMeEVPwAGr1ZRUWqYUpytL3ZGPCPLGLJ8Vh8XUK9HtD",
  "key19": "2SCzZnQ7XvD41HKd5m7Az6NoPxE43b1hYSwFEfJT4EBHZsX1Duzg1gF2NJszCUES5pijP8bAoaozG3yBSoykWFyk",
  "key20": "59Nh5EHUJCGsAaLrQe2N6FWmWhourUss1R2vDosFm8JPZqT8op1f3GPTKYYK1uNAFsNo9VoA3HhEFa3u4bkvwn3g",
  "key21": "3pWakqwzrqXsuPigsrSPjg4MgJ4xvpzM7X1FEb4La9KHmp19LqSm8JA2iyGwoZMHcWvEQNfYGyZNE8Ri2Te4W7Ce",
  "key22": "2Pu9MNPFDEM4c2JcuHSzoSN1yCswo3fxL4SdgJMkbsxAzaf4jL21no87jTkMq5YAon9o1GPHWvY5R7RsaaWc7J3i",
  "key23": "3tQJmaEQKnyVsd5MAhBTpF2Nn9EeZikexGrckoCYtFQ8G3UKSb7JgjozJZh1htqgQ31Nfp8Qu7hxnLDmiHiAQwB4",
  "key24": "4C8C61UBwqaYZC1qwaDnbTjQENfJk9NbUijf97KarhAe4Jy2wPaekhVkxPCvX2RKDFGQMfAkENxLyE8rAHE68PML",
  "key25": "4feDV447vACjMPqbgUGVz4cgLbYK3wMNQkYFwh6gaLKkXpudpasc18Q8UhgVvxkmvLfUjjwffW54Jwg6Gi6mYyVX",
  "key26": "5B21ouJAotYhmNsXwyytgQUUGLmdT36r9zFhq76DxuU31fvf5zk8JkJzpYbpkssoPFWnnEUf76RmhxD8rsETf1wt",
  "key27": "WPzt9hz8Xj6RgrKm1xtGkoZtr4NJpVXfLJEZK8xTSpuExAC2YyoYxaGNkfFpjKTBKGYdBf5o7bKxSczAGJp7vhu"
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
