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
    "5XwuR3gQwAN9oKDTJ3A6suDxvkbK889R5cViWYTAeoXvdTCF28oZPCB4JPAccj6eUwByb5CCaFWzMhVrge6GRYp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pt6zA7KAQwQdSi3a9ykCWbqVqSrkcS4ikUPh9YV1WcrAvKQgGyCJSm4brYCkm7RdRxZbZaHoSZ33MQj8Yxg3Y8",
  "key1": "2njfMXV6LvgmY9fvJTsMfniUXRm4af1bAhYXCmcd26Fvc2dCyusRKQkAb7riYMcCNmu1hGCsKruzY7kpXYhVxMKg",
  "key2": "5DsxQjzu2HutHtXAkFufZQhN3YHGb8xHY1RKDsRUzwy2zf8gzsMRYLGoYVqz8LpZAg4B7mFjG8eA5tTxCDQXHoYv",
  "key3": "52vTPXG3GYLXtKB34jb7eju5aC47qEZ2jpsxjPKkLBPzEbvMLNrshxiidAvBrsvrhfqKzu325mTHqnZHxhLLpQ2X",
  "key4": "CjLWCqH6shQhjqLK2AZQhxq6EyNirQ5gy2yA4va33TTMyGiqVFqA64m3UakqtKKFBEnZL6xsZHXBcxkASKsCx5r",
  "key5": "4RwvaJDNQZzToAXJ7rjod3CYraACpK3pxPQvkkCYkaeWZrXawCAWAcKWgLdZw6yzgZuG47yca3UkWD3xKvwVWZMy",
  "key6": "4PSw1JqesjQBfkdLazfn6zoMhSy7S9ys56sVMVkeDP9UmahduukaoeEHdR7x2LZTCxVtJYJE6hRztZW4GH99dfCV",
  "key7": "2jVroGMP5utp4DBbd1iwApwRBciprGDwnpBDtzKmzHV6cvHjnfhE9N1Vg16fYMug8R61o5ptNNektmU4bhjFGPMT",
  "key8": "j7jy3UdwvN6fveWQF2NdcST94Lms61TD7SxCtK4Mv7QfTzQkdFSPDKTvYFp1HjxTQVBKZMxMcuQDUS4Ku39gKhM",
  "key9": "5FHRHUPRtAMzb68QPQsBqo15G3hbyhgHyJVFsaSKtHxWxSumHiFssxujghwcDj3qiDGNb7aeNM3wp5eJSgvUBBvU",
  "key10": "2t8dWN4SULUS6NUprttLSqgAL4GH6L9rGiB7ZVBd7qKNtDyh5AtqPh21TcnXcg1ZFauUzLt6Ax97pxYv1ZmwqY2Y",
  "key11": "4wd5L4XW7fJWJk4PWMAKqk6wQ8bScb4B31YJgMurNjcuvKn99S6zVS5dfDm3pMjb2yh61uF5MhnJtP9VmqJ4UEEG",
  "key12": "2SL92ku7r7Bg7i5eREpMTnDV29XMNaqEr5tAgx9m6e7nDd7d4QVNpMuSwHHDPxCR5UbpooDoDRCYNv5j4c1SYhiw",
  "key13": "3Nc3FL3xcejnDgnsTCcqqcpE1c7gaArGAdsBZ1dCP1v8hW4baDEmngEVvKbYTBpYxBSLF9BT5ixYNY6ueEZ1Smcq",
  "key14": "5k3wYqkopwhcRum6fifyXqrmd1ULNqpFd24U4anNjzFawNDokxNURKQFgminxK1RJ1toYnvT1wRZKntyt9Awbtfg",
  "key15": "2fK6gT5ofgAGzd5kGmpXHpLWGWNDXvRMwcLizWBfFF1PoHQGw6nhZBEJP5t8hyAF4p27g3VN7FsebxpaU5vaz6Py",
  "key16": "sUHcWQALHSrmbq8kURAK5Sn3Bwmaxg3KHSDc6UERL5iZjhpcn7PNL8oj1NdwBqWoVdKwh8Sat4eTJjUtfqaBvMx",
  "key17": "2Co6sZrkgLtGTSQR5qoGi93KtyFXuV2L6EEcqqQqrSwzvVL7o4Zxa5VEmVTYqDqkgsFUU4gBBS7EnE35jDWyFg8K",
  "key18": "4UeaqDVsJtrpqQMqBUMCDtpJmVbZVdoccLwiHRbkX1A7gLA2xQ91yieLjhT54J2ESXBD72reXMR28KdvTaeQsC1b",
  "key19": "2FNB4d5g5BV62x6vQbJPH35Tn376XGSrw4WSkxvEXnuVpup44w1DYXvABczpq3YyvVvFHSdx1NHvbbDEt5X5KXoG",
  "key20": "3tEW4121haYsqsgxstqVrGZByqggqTGMBhzUTJRPUfdxiHHX3CdaKNNxsChpWHvtk2qzeNPSsCV6XPXQwqdZV5yy",
  "key21": "PjXJXNLagPggeu8fwWLh7YyVr78Tftrqaai57rY9uGP9VYjHTi3yCAoBTsN6SxjTxFY3pSWCxohMdLBWFP7k4sB",
  "key22": "2VkcNLqNPCyL2wmHQfScvSEwCJiNWGZgj2TE7hH4CoQR8eqayQbccWGfatWq2fmaB7doBuLn4cmXc3BWHV8xMCG",
  "key23": "3iaquibLujAUsuuFhU36Aw2R3HGG2w8wZitckKEgQeXNZd6cNLs5M3U8BJJDC4ooAtbeZhf5CJSYjsn5TSyASRYN",
  "key24": "3vVyZcZK5LADbjSjkaApGEkWJ7E4mA1z2CkhQodTDuVCafKiirf6WxARn3m3c7cKiBi2SPTLUcne1FKkpnvTWZFV",
  "key25": "2nmrScwTpqnicQiiVNK4pauvUo3S6X18ScEeBT3uqSBbozmLujcbMsFA8qKGLmfjSJDaDEturWmy5CvL8U4JxidQ",
  "key26": "2Ar7nRkzk8dpVUTf2zRA4R1S67k7eJVFMDPX7rSv2revWs2MzmfKDsjf1DAuvSqR9uMFhcDSvFPaiQZxB6hPBtBX",
  "key27": "cUhZeiAhFiiwLt3zZWSNJWzu7iRdZ83FbCVQoUr2TkVvdvoVXiuFybDivDDzqH4YeAxLmuUQyprkBHKrbzq6mHh",
  "key28": "32kgVUvoiL5g61tc422M4bdAX25YVAqFJ663zhpTjEvznb94tdWZcSTB6ohU8xUZBXpHCUid3AE6jgtnfbVb9PxJ",
  "key29": "LSphestvAPfCUCm2WCCwo6yFR6DPAdG4Z5B3pzuMmT4ampvDT5CFQ9C5t51Vn9KtWKwkYUcxpvbhiYmVGguhmcp",
  "key30": "3TexjLRbowFkC2YTXxZJrNpjbCo7qtbz7B4mDHoaExVLjW8wsFNmxo8ce4Uzr18g6H1mndHJmYxTDqTXyZHff1iB",
  "key31": "29bQRCggYi6BGeQbrQQH1szidUg2MD3JP47i3hRHt6Z7CFeGRSTRSfWwwnrnjZYKcC67jqXuhFDVGL5QRC1s1XGc",
  "key32": "2j9F8CCBvB9x7LBCQtssDMzN3CjiLXsZHmzPfHAS1W6RppL8qTRymS6cNpyuxk4RBoW6MMuXt2T11UsdmfsL9Ckx",
  "key33": "2kMa3Eg2YHLNeuPDBy5SM5bKDtZnaNNAWjp8sRUJ5h3kYPNA7HA4zYhppFxMi1ia2YrqybeJq91XXZybMXPXLL7S",
  "key34": "GRCAXstPKMoPKNobNoW6e3n2PoD5HtZwMXJxpUMh4nXxkJKWr6nMrdcW52jL42VM51jQzGc7RNjUWdWDRK9MoMM",
  "key35": "2YEHefAVWNBMh7E4ZPbyowanVYgttL3FBJGt9UR9kXFDbfLbs3vCF4HZmexj172LfUPdrSACjZti87ffKYPjSkQN",
  "key36": "2CnHcsNSimjBxdRoZaZ8kW9cN4CLKvv5VpEEPdQQjEMJuw8ZcGsjn1JBwTA8tYTqPwofcM3RaRvQxS5KQcSQDuCA",
  "key37": "W7QjsxXFM4bTxvo8aEBBTTwpwPPKrUL2uX2ZUoEWnSyxqBuFzZwLWjXoLNYVY13brDtF6Xuuux6qZMpxqV63Yyv",
  "key38": "47SHfaJmep6EQHyYfCS7izygAHVCkfP63SxC6Gw6D9qQoQFtXaHyejmsiKJvLKRdCGFbNH4NSBp3n94ZBztJ6ZyF"
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
