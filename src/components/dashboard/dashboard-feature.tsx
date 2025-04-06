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
    "2xekjgvqY7cDjDz7TXZMLBCihM89WTkzRMiovVxam7hjbP2VEP6cnb5j563un7zPVR8zJdNJZXD8tUdthrTF2Jpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UgHievXfwhHZNiXc7dGU6nwHJzsk3F3Th3N7KyAmEVu3HMWC428g2kXYssmTwb5iZyX6W3gNBUikhfGipGQbtCN",
  "key1": "CRWgmapLKwB4ZjanFeRRFXp3gSMYJaLVzhNsZpmNKzytJQQgN8u1FA8TzVWczLyEkWTHz7u69yQ8zXdpXmUEDRk",
  "key2": "43ddyZL9U77LVWTEuughPX7yJt15xFSJSQhg6beU1eeSyVqKtN3ACDfYDQ8t68ivdUkpSs9SuFsv13YBmqstG5C7",
  "key3": "pZy3WHa9eiQqy9cASAJ7WP61RfCiHQnDW1C12KT7fPy7aXBqL9XHvvQDndSRq81wJfy2YjNzQLogiJXUVbpYC7A",
  "key4": "24FZeSZ2Am8LG7n89DWJobpR6vHmrhurYcdyAukufpYN8YBh4bgJrrnBwG5prhcmLQ35tv7tz4XkpQASR8b2Jbpn",
  "key5": "3a2ZbGHW4MoNwnfpWYkMy4vD7G2bMKWvZLAx1mHB1ZDHLLqFYvyjBxZkpVH2iR2HGLTk2vVqJ8WsPZEThbFYHFo7",
  "key6": "5aQ3kQs4s8E3PLZJ12sKiDsTBDtpKH4xar3RsuhaXzguR1Lkq3fKjBpFMU2LiCx2UhJQY7f5cJnxoK1cMuyRYzmD",
  "key7": "5Q5TvNVpmntfvRBTG1VM3DbY4pUdm2bUuHFCAqVSEdjQFvKizJFd22NmtByFzaAziwZQHzvJ3mwpMCHTEkH46Cki",
  "key8": "5rmCCs8EWeQF2MdxAQhKDVxBEUpWff49BAegBnhrLkCQ6hWapRdes7PWWrUMah4evRZ6W8dRa6MNcamZt6mvGNkb",
  "key9": "2UHdX9rjhRsGYE728BuNxMVwPQN7CmQ4oZ8JBWi1HVZPdMVzs3tgaUfcruzk61r3PnVg6pqPPdhDEMB88LZMA7EX",
  "key10": "3xakhMkidRQwQtEzkvGDv2PSc39dmMZuGZu44gvZkikEUB3AoXDReL3Dgq1JPzFFHKSAx67jM1impHGbj6wvwz22",
  "key11": "ET5H3w5nR2nHR5LwEz3q4hQSg6t7yvcmz6Q1RV8jHMYxQmehagjEpyFqu9A7gYHFmmwtMKmoV335WMVh2pUAbiE",
  "key12": "52EQ33w9DQiyR7tzsiMndvBv7EmWfHpTusGkxhDdbWpvtnpHnUWgq8GWj1uAAQHQ5rMJxKVKphKNFb3VChfswQyb",
  "key13": "5kWkhM8TCtfhMkuh27hbMtur9iCiscah4LYxvHDBrhtLvgQsQKKrb3U6HCScgGrWJEGSHAFQvi3eL26w1p7Am8kj",
  "key14": "4L3V5MNGnQLRb1wXoHHRJk8HfpGLZotfeoZhmZFzGUMFBh9G2nve63xjeaSGbz3v6SNA5sdKNjX8rwynEqGNChfM",
  "key15": "53dFHxNoJaM5KKHu2MWZw9P9iBfTQmogkWJYZc22XE4sh72jazzfyFSwDLcjqt4H3XbBFvPS93saZHyAvyaEUPCG",
  "key16": "4pWMqkz2toFXtjp9FSmGnC9BACxz8zz8x9spHTTHXGGf8pnRxc1vyt9dipxh8SmGpdweXVghtHsSDQnHetr14Xg5",
  "key17": "gBVEnWRQ8sg3CDJqzZrYiXV5pRYrhBVCfXvotJRn1e3tv2WvF7rAZJyUA9TqcBs7RJXwY6wU66qEiq5fNQiEayF",
  "key18": "5cVg58cdaixKKiVPxA8CCp1DWXmzewjJFaaNwrYwYKQ8ybnk966RkwNaup2beeWVDACwFi8i8ArNvW9CewVoTvkh",
  "key19": "3mHGGfcLsEzhu6FrRhxz475LJstsEHqWDBhhNxfVWPMRBbi2zbVo8Z9J5ZPDwcPwUkYby9xPGGb9VfPoJQJ7Q3QM",
  "key20": "5EuTf2DdpbX9nPfZav5MKDp8mxb1Rr9PsCZKRsFwVMc1j6aPBwBaBYhqaYndLcqjvpMLd7bHLAaCWgCTD7a7DUqh",
  "key21": "37QR948DbytjiK1cRZJBAeUvmUFpJVakwUSGNCApKPDoVGXDCPHAj87xoNxDZgZYhQz8GzLfHhsb9ESYTnVEBU1",
  "key22": "5VnPzWm17VxLWDpc1kp5oQASwv5E29qY1ZHWoz533Q2mTyK1HCCxm5i8Rn6VDVDGKC4BB6GukDqvwTtWjkY2xK5Q",
  "key23": "3uFwffMo67LC9nD5Etg2J34KpcHvwvAQ8NeiM8wmaarVqGbjD1nPyKsRmWQdMNFbJ5tc89a6WTtUCbjbUiRyzsTS",
  "key24": "2TwSc2b6wxxLaiwz1fjHjLCYpcDcW526h9YBdKawpBUrZGdt7cQ38TMEEbKTVoTwA1jbD59Tg1ikcJnf3U94hhPY",
  "key25": "2BrK8gMTV5cFd6svf3PHZ6uvKM9XJiWq5eNc6DZgABARKqMsuiguamMmGtf9crQDKvVrkzQGqNZtkQqN7DCT4LGc",
  "key26": "2t9NJdDNHiNn6fokfi9KR5N7JMe7eH1hVW6dU7c3zXK2VfV8AnRv6XMLDmPuJ3yHrb1VJJrWD8gcGr4pXC7KLuUL",
  "key27": "6WaUHjK9qucrzPGSBfBUZL6sqWEzq2SsdTKwsC6kmckGaR9nYuchoXQttcZH4LfWdVKZNCyFbs7dKzsXE4tZy8W",
  "key28": "4pP2kXXGZteUqYE6ePV5UXH7ngXXCZcSGi537CiJTqsxS9GR37Mn6gQLi93GP7Lw2HwxGPbZFSYBZTAAZwobq94F"
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
