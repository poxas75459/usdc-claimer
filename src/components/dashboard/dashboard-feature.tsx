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
    "wyTsFWj5DJLhqL1mkgTURmnf7L2n1CvxXGJrGvwsvEg2B6Kynd6zWbQkWpUUvnkZyRJP5nvepJ2nALfZ64DY8T4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCmu6P2TFVzCqZCPLPv2QZfr5QMoxVcsGJDbiCJMvZXVFjhQG8dQBFHXqif66xKQ5xJ1QakKmDn7Wx5WT5xR85f",
  "key1": "67KK6K7HwqG9oVT2vprHnSu8yMnqGZem4Fx1m5mzmYAZFaTDkZPJUA9ZDRKpfgqYN4eRdmWFvJZfwgHn5J9uE449",
  "key2": "4T74YY5nYpTCCYyuSgu8V85AYK564PmzCwJ1k5F9iJGRg78yjmkC1Gzcx3UNJPCVg1ncg77yMCxLPRqyCTYMHBDQ",
  "key3": "3h9jp48RjkFM4HTRciXYGJ3zFEmsYEY42yeXCxTvTbcmqqNh9ZbebgLsTioxvQcQjDeRrNdFWReet3S92VfBfSaS",
  "key4": "59jFzUXrRnptU6BExKB3UfFea2KKCjAu7jKwFDkHU5JHdHrfdwzJBQAa2yZ1ckSry6z5MG3AesgRgQQTe32gLXp8",
  "key5": "2uMaEUYuZktQHHTHwhBximRRZJTeGhuv8hW9T9mejLG8FkFMFj6KJj74zWGmRzGhbtjAAsbE4YEsnEeVqdLzvKwo",
  "key6": "2peZN97sVzC2H9aWv6dmYPbmQyCnF8adX3XFsgJMUXfWjjgKqKs7rP8QKmjhZjC5WLTEsoyP9vsj6iQDCb3Kqo15",
  "key7": "X4pPPjQ6zoJwW3Tt4iTAuLXruj37Y1wWVWQXZFG5HrEZDe54XPvtmpn2R6NWCeJSN55ezW1FMUz8kYEhM2LWwDe",
  "key8": "2Ku2bG8grrWXQ2mrTXwmD3MxvP9fDLqGDpa9uTZqhvqwR7KyxB3vLQAMRmDHH7qZHRckHZoxLAKYg9xSynyrJL5B",
  "key9": "29boFUbApqAn4a6gG6WFUEmqvaJ2qT2ZpWTi3CsnPLXMs3Qb5t4p99LJjEeMM69bUxS4xmhrfzrq9sSkibQuExNi",
  "key10": "676zxkMFBWaUCvu4DUhezpe4nPsDo2GXD1eH3DLXc92tLa99ajnQ7oP66R1radYz3rST19YQKUXoZZnjKNvpcFTk",
  "key11": "5pcHYdSLyp8bjxPzsMkLXjPXa7nSbm4SjnTLYfjCnm73gmxk6PxKd2P6fEFB3Ms7iJz6pv2LiTSnh7vjH8GiP2mM",
  "key12": "8gMtLh7TM1sxewvdiq4NqijxechnoPjVZCxYFSFNTba5owad6H4uYBGKuWkM9vsr8eoSPkFyxNkX3GypBgZjmkP",
  "key13": "5L9qfxhNg2CUMqUMmSs3sGPwVT1AvajbjdZgWYR9R8rc5BWghEJfF4q4HXpDWnKRjeK4u47vHsCgZSQ42Ts5KM2T",
  "key14": "Gr8dkduEuqw4SUshErcVchmL4wpmrXNFhWMt2bkk7b35gDu7hoEgp6556AzsbW8z88hEBNEGpgdcMSZMujUvdAV",
  "key15": "55pth5RV3iX1erJTkqozwbkvqMpACwV4ZmnsvC6gPzeiY2VxstrfpWUNekPPn9L66n4xFP2k2BrKAikZcgat1KyT",
  "key16": "3oYvPgzcdwpWzKW6wjHkXkmVnZpRis9JTe5Bp2zkd89RbXt9UsKii6x8tKMtyzjHfbbngY9hZ5WKdd4coYkANAi8",
  "key17": "3o69bgDJuA3zUbrkqfVk8cibmdanqCAjS7D41mSs3zkY7thdVmLGUd1fhJfsQYicDC7eZTK438Zrv7GAestoyGii",
  "key18": "f4XvyjMc33ghNiJfkNTMsRBZtUnuzFTCUhqSdSNki5X1gDYxq6PpKhqGJhm4GyWCHHLju1P9gJEuwepApE83uXT",
  "key19": "LLmi6ZF5AumA7uUEfWgxJU1ZsFe5fgM7SVNEutTn9rqQPNeDPWrpFVt95hu2Hj2E3rzSqox6HRy5JbK1UEEqkDj",
  "key20": "29buMYZzbEukyAh4rbL4iJLPNY9sm5L6hn9yu3JMoMdxVrfyqR7Kn1yachgbtrms3VVTMs2e4AiWthKGPRHNQ33P",
  "key21": "1b5tLE2DHmixnQu9vFq4LrjbAuXgGwCw9rPT6TMuTBwTSeETKw4dT16CxDEJ84miD2jZCre6UBwKLsPkbXbDnzJ",
  "key22": "56teJAUeDLcagPgpJ1ooz1hRW4vYeBUcSaUUZqq7KbrTRiNdVGCFJzthQT7HDrXBdfG7C1jrS4kcYHvM3P1ZpquC",
  "key23": "5mQfvXrx6K21J43FMpMNjvR4EZ2S1s3BzDf7ta9tTAhPWFfYEhEF47h6JcQGc2VvTcaRrjoMdhrrNbJKJYH9wJXj",
  "key24": "4mBpnfk862Wij5x7ojTur1EYjPRpKfZbWLZYwn153tVyywLQ8EXrBqxPEn7mVuWQs5YVjvgxEy8iFVYxrMWXDz8o",
  "key25": "2dhTLUS1jeXngk9rucAyRMnN4meChF9DAMLCkYB4ypNEaxvCubnP1CxrPC5o1QG28NCWSDJW4C8sgJqtpnVyBruD",
  "key26": "3jB97P66ZMb9NQqrgeQA7FMYQYHNeA8tX6G3mSc6TXEUDcwvjqSmXFPN8c9pUNTR8uESCypjDBL8GFxeckd2D5VC",
  "key27": "33kXQKBqW92aLtHfCoA4w1cjxptsxGA5NQY2DY5DS4A6pDvRFbUJEKpyB9gLjxCxtroNxxDVQUFztXgSWgNbvzZU",
  "key28": "6542VfSpjaDi8va9GTe6dATG9zQBw234mAPQdQBAzQWbzbi9hifjm49HnSyj5uhQ6vy7k5rKHJSKF97LYodeik3A",
  "key29": "5TMnCnn63Ac6AczaVth9YUPLteiVRgWLSERjd13m37i77REDTca8xxCMpoeM2LrrdMtQdCxv9TQZDbYg9cJztoZk",
  "key30": "2x2Qz9njtn7cYUmd1HB5z2PLH4ejdVtQYCJ2dLzqUK8m2QsbWqFvRRtijzxnsQLyn699WPCfGMRSjxt6W5TMKAsa",
  "key31": "2wFKpHnUobeZfBghkcQ9BKBvo74VPzBentJjVoNM17wACh3uymTETAwxMzJCWGfsEycYWobJDcq3UA7gWGziQNLy",
  "key32": "LMM3MshCikNKnLX2YenQ63H8ND94nLBE5F2VwYJiVjBj1YeRRqdEGGGo2nDvgh4PjN8L9VfD1JKaCk1fnwyTr6W"
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
