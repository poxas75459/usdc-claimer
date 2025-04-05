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
    "2H94M8KxRbKAgJm9V1XLMrre3tK5CVLFijZE46r7z3rctHYWnXdcvMJRLPSau6zQVa7unY75g9JkeYpKUrSUQ1xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r9avo2RBz4u8EYzXLhrsVYzCgK7apWcB8A3XT77tieeamz5U3Nr8VKY4rvMgLH2upcQE1UintHHePStVSZpaD1B",
  "key1": "4NufwA47e2GVRkKZ7yph7LQ9WPgaQ67wvWMsTpNpxU8ZaEDgHPsK9oEiXxaD5VnwQpf3TNCh6hCnHE1dXYRikSYm",
  "key2": "4a7oZ7EvkJ4AvVGtpz5NUUoCgv8u1gJE1pxw15aVYV4CGG5LELZjBKVF8mVwyfbKefibJhEo7DHTLZBCU3ubGATc",
  "key3": "5uVLUpXz3pHMYk1z2RZcsbWZSP4HRjCyJAbJ9gJRHUMS7pNQ3v5BGAECVnxmZQu7uCdFzPtZzX3U6asF2n7Wsiwv",
  "key4": "4LjP8mjPB5g366ox2WhtAkkBLVdRArZcbnqAfJZArYvgsWYtPBQxPV257KhCgaM88J813tDtr43AckimxZAyzuXy",
  "key5": "3Xsv6FQaZ7ZUZ2qAfbB6JHo4nsoNWBJHgiZrewpvBAgFBcz2UCvf1G8i26H1H5VYVkyUWz7B3BTj9eJLW5y5hrrs",
  "key6": "VzM7vRpBM9WGwrZmMELoVyyidEzmaxHUeH5dzLmKw2StVPLpXPygagHfBodc8AFdwMU1nqDqaB6F7gWhqkGC67w",
  "key7": "SNuyZWWSJ3ABSH4wk5GzyMpudh5vR9TERfg3Ci9DwNUZrb3pZbgngu9mzyUW4jnhgybAjpy9iNxxwkiGScZD2UD",
  "key8": "3Rwy8dLgK3nqJc1RgKzUmjo6LQe7bzua1zqGxHDkaCC8tjVXJAeR63hBBLB5iqbmnP7CfZHCVXZ9TeXMxMaVJtK9",
  "key9": "5S3BYYEHvMSM7gGHQxLTpN1mFBhF6Xe5agroi8ujtVL46TjDtyQonFGJXuqvBXCjATHoNZMZvqL9syxuyVDkjDUk",
  "key10": "5dm3R9B4DPMgDKWsi7pRYTg3wfwvKvkLzHgkBzMa6QZDvZwkZkzKrvmoyVd2ALVZFjuY9bDoufpzBFTAFSQCT8VC",
  "key11": "21G1oYkezXzPTfbPAhUtXHNYH8wAXVg2nuLBWd4ZnbHmCAFPvHxJqs87eRrwD7N8tAwEamL72MSJQPmmMbEU53sa",
  "key12": "5gUjyDFJ7e6ikXEqU3sshVf9Hb6jCvDn9agGQiX39iebJLQSn8PwR3QCYeLZCKgeA5syJswrhMBq43hDgTNVWVNP",
  "key13": "2bQVsTQ6mnNYVCGh7QHBrEuhy5NGayjpi4oPsw54wepBb4UK7xZMLqrfsZ9kjvxYKewHp1EHYiHQH8e1YZ7pZSHw",
  "key14": "5y1zhPjAkt8GqjmJ13rkdDqmZZD1a3K2XVYNTXgUDPQJuhDEtPfKik1vGAKBu5HfyWoydXEpEPEqLX2G3B8BFQFv",
  "key15": "61Dg1j46jME7aftj2wK4WXySofkWnibt44pZScwDZ3hWZZ3hwJct5hpQb5MGAo31Rpm7ebdRwQQes52UwzTrbswC",
  "key16": "4vNdb7docrbfAGeoGz41z3UVJFKazVM6dduwfrj1tV1K2ngfRr7qn24QWgKfQEksGCc6LMLejwwTd7QKka8iqWT3",
  "key17": "3emNcgUZEXmiauvwJtCPHA3iwZU1F3q3JjwLnADZCB1SPMNCdHoGuJ5afdaaEHF9ku2Xh7cQDZxBiRfhpzBonKdt",
  "key18": "4aDp79JZ9Bvh6pBaZWTex12SkBNLpYovk8Xnfvw86BcwQXjP9WmHHa5iEypHZhBy9mx6Gr2ZaRLAex5o6uMCfQWV",
  "key19": "39dG2rWoWbVkxEh1g8GQRVbFbpBbW7or9yDXCU2SqZKmMep18CgF7ZCJ72X7LwPVXoR95W4MuQRhg7HoCMyi4kbC",
  "key20": "5KLWmPGuYUyJfekRJ3xbU2LmaUE9k8z1yf7DoopiQ4Qg7SnfXiyJ82XsRz4ZsKMLsSPwtGQjy68W8wf1vpuSVK5y",
  "key21": "2pxk7SrsMn7YytYFAVWtK3KA1MLstWZgkWGC4tmp5Mj4WdZPnzG4hg34Hk7N9RoKKz2X6qthgxjhkCY632as47vM",
  "key22": "4qX7YJueBH6SKm1QqbcumPS31rkqfccHGa49ajJsGyZ3yUsw79BQCaaqEpkdiMbdodCmGF49xpAqW2zTHSV9rZ7s",
  "key23": "3wJzpzbZVgkjVzmkzbAycT9bVP8vBuJHYG6hjWpdr6yqtSYYfYF6HshazAk7KYW52LyAqm42zeKAvo9rCnbHXmNf",
  "key24": "57vM3LwZom4agJVRXCD7DzTUaSufRwtTBz9gt52JrQz882D1qW6DS9ox8WdZkMq95twnKhBbRiGHs9hVuDyq6cbB",
  "key25": "5Hws1KiPswJn4DsyhK7bo69uh1n3yH46zuEd9BArvSrxRbpf4YQ1x3GcQCTM4mxKodteFzVd3jD2a3GJ1kbmousf",
  "key26": "3gYCH4YeunJwSh5areaZqQZtPbXrWSwVu6JErnqs6u1S94ZKbSD3Wb6vHaGJj8rUwFwghmnStq3z1Vk2SqoGf1bQ",
  "key27": "65BBaSKSMAWgJ38Yy3RNkCXv57j7zEUULWjTQDrzVpc4cCokPmsX19RKTnDQz9HAxdyLyukcUmmkMveS1wVPenyJ",
  "key28": "bwmB2HCaXuPYKh6eQ6Jg3EJTyPPjnFMmd2G8QLnpHVn8Bxgd19nPdsc982zLoWaiFwCsytxy7Q7HLM2ZL5WxL7E"
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
