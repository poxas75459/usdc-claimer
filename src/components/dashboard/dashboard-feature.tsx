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
    "4zNd97H4MmPHuAGvHpFKQyqsFbUWFiz3hoLXcJXJ6r7i5qfnu6afhcPvYqctRU65ddoSqyGbf9E8gH8BX6mUES4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jt8kRBotSoVTt2Kf4jPrsSrejjYQwxhXGtCjCMTTjPTqyAHadzUjgHXTVmSjTMD5k6sjjWHG1WwKi8LNYptke43",
  "key1": "5zhtqZSv5CSJ2KmkPjeChyEkuYszBHwhhGhphUfFqXQXo4QFsK1bFnWV1hTVzGNA91njYrksyp4atFS8MnJD7Hj5",
  "key2": "4Hwae6oeWgHVaF8P5tLsy9v3zq7fcz6t12NFH6aJWrpcTFBeoD81cdbARrvYhePmh6asytjNZJVxPjVbCX4KeYdj",
  "key3": "64c7KUQCikYjk4ueQb9zEZXFgBTCXdDh2kxhycBaoHr7R5qUwTrPC4dR7G5GdBKrVyFq14Zni5u9JTFyN5BGsWqm",
  "key4": "FsrzJghFNxCsVH11wKC2hovLuXwx3GhV5WoHaLZVaeGsPdaSGkv7F3QiJ3iDXfZnq6wpo5Aw7iB5uw2uv1MEGmj",
  "key5": "5dJiXQLneYVvB6pDvrcK9fxfgRgE5t4wnxjsMZYRVzsKg6dZaKyzbkqBARVnRojVxA1WuPB6WvMaAoRpwv19NSQp",
  "key6": "5Vebr1zRyiyYKvKkuV5Q61UVqg6wCFbPsyrWrdYkzFLe6EbY8w1RaMTy3hiorRPb7ZraRefVpVJwQvT259hjEnAo",
  "key7": "3hiN5yK6ckxnA8ctmqUrennjGdG5UJxeSH95fhCUvB5cTDum13xVEahcB7WX9kgT6DQjseHQ55ohWPM4fEF7kKyU",
  "key8": "2qf5L4rwVfHwEKqXYQxUer1hAXJWvd2aYKUPJGmEpCNsxbyYM6QnhKKMWpYdGQVck5gpq4wmEcom9BVebHpVe6iT",
  "key9": "5o8u9mrymHvVXkFjbiAkaMGfYiZXGLvuxhpMD7UYWvGfTQS8PGqupEbMFF6NZcDRRNWvmyCGKVAuszMZ4cFUxB5R",
  "key10": "2i1hgRE9z2gU52bSoVEt1DJT8woSYYNyxbfKPqeUjCKUqC7K2iaZqkmWgeVHMVkDArJZJ6gMCRuz6JV4A8pihVu8",
  "key11": "9ckf7Jg3DVQAGWu3qoW57pS825AauHzKLxEmdVvEU3S4vFvNp3w1Nas3wxJoKem9Kyd6hDwdFELW8oJUXH76wHJ",
  "key12": "5t8HyxJofo2axK135LPMfCvqNk2gfNPSBtmqiHNkWjTtXSuNPJswjma6Ksc8pmVC7mGiFnYNySkrXL8Nmm9Ha2ZG",
  "key13": "5jmTWTYLK2XPd7EVNg768DR3FZ2frwTTveWsYMz251NAXLDGQRxWXuXudrz344hawKBqhezL6dLoMfj2ykb85Vta",
  "key14": "4wmJYwvAjshKq6VmENN5xwBzJUh8MHxN5Sv82VDw7Dsu6SPSbrVPmFWT8mRNNpQZJYBuAPC3sNJV4M97E1pTRMFq",
  "key15": "k9eRq5yteHq8y5Vfqks9FAwvKaJwGVXyocjyYmJia7JAYyNSNLoJ6BigE4qnZFqPSXaHXtM2CwTfaK13QJnKHcJ",
  "key16": "ae7dfH1nhUQ1pYYy1tSuF7U7sK4NL7RS5RF9VN8NiDRvS8PocGrKaadK6GSXxwHSkSEVLzujgLpwzAGZrTY18BM",
  "key17": "aB57LwCbWcmi2hafpCS8YbXjKiKCwf7UAJZcZaCnNXZ5chejGfZr4XYihWsqqo9Bg9uF9Yoqb9XXJDBT8p275XX",
  "key18": "3PJYxJxqfrxNUM8a8sD6V2CNgLCXiQetKJ4dGkHysor6Xzm71ARXVmGdyyKfyzzXQioAUFJHKjNKjum9saPVgqK4",
  "key19": "nUAxJ53s2gxjeoAs41x6wgFcWK5fPnxHD4pF8NfFBLt9AZCcqMFKDpPL3gVt7MafSzTHmHkoeLjocm3BFERgVyn",
  "key20": "45fnWDVDxJyFQpswjtmKpsvtH2WFu7s9Zc7KXDRngJiPxATE4itda3BQft3mgdDeTUR9G8sMQWFizxXqYpkYhkPV",
  "key21": "5ewAENVfHG3RCEfXHo9q2D3kyf6nJE5oS2kZ9jzYWmYkQn9bBi8qYagqiTGHhL3J4GHo9FaLtZiHssYPZ2onY96N",
  "key22": "4zH5cBkdoNty16SdeBmT5cDAQwh4vuECH94gTfy9rtngxYrY7yRwifCsZhrL341Cduvht6DN2TA9mRRHbCc5x2F3",
  "key23": "3m8NZU9kXBytfBWuxJR5HAtcP8ysgMGpp4wTkAT7gm8NrNXo31pd3erXqC2GH5JtweoN6XBit38BzXS8ZmxTJyNJ",
  "key24": "5Gp2vtpT6RoHS23GvqLHTfE6DkkX9xAisryCUD3DKHoMWN6nfFkBA97dtd5NsocsgpUm3b9ZwtSkMGnum7RLKn3L",
  "key25": "2W5Sx42RBZJRnj1kcLxsVQRmgpZx7GHzAz6Kx2yYUcVc892vwHz5P3KGkK3TsBntsL3AvG6JLMxBVAPX3Mn4NXZ9",
  "key26": "i2FH6uQPt3vB35unMiF6Brb2ceqo4yB3wEw7XCpGSa64g4d8q97Mfzgvz61tkqJfFDwR6GSA7PBqKPfb8urGrnQ",
  "key27": "H1CKmaEjGcKpgPPor66TmA4gMYe2HTqydqYG4VKVnXrxabEus9JSBFjUZ2HgfJfUZuPKdECXgi91gNvNQdmeKhq"
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
