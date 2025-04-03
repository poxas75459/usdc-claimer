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
    "5gvgXrVuu1UYxNgJ5M4etbM2CDCnXbfXYfP9VSPC5TLJuEiKc9tTujkgSezoX2eMjKjxJC94gsi2A8AMdRXUDtnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "msa74sfD63mmtp1VURjGGM9YTLWVd7JbqPCmsKS92HnFMiQzqCLWyNiXkTjJ3HKgoEJscA9CHTXaidTY99G96eU",
  "key1": "bpy6nJPL8zinHTT7jFsqoy9CNh4hzAvDxvAYikP6sU95AopoSrupuToxgJaqbBgRXHikrEpxxtjv6qQrdUighEH",
  "key2": "61r1jQbQYdW11QpeAoG9M4M9TaRcnosiKTYcqrrZehKgSY8jC52LL4NaD7XavqGGwYr28E6fzZm8AGR2SGMG1u6s",
  "key3": "4Kt8soC1f7DHRA9aupFsu9zQeT8bBtnPcZXCTfXE3UMiD1BFyq798v3K5g1hwc3oSRbX2EpfiNbZyFKDJ7UernET",
  "key4": "5EjEMcGbUxN2gSGvvWqcV8XPjkz7KMyoYRWCGrGVpDuuHeuoUjmX7Wdkj1qtUAp3xAVRWden9V1WjkBCZuLDSyeM",
  "key5": "2hmzsvtg6Wks9ipoyhC3K5Si4PsnAcrFoaxTNHDDpstfc5FtSKUVXE3W5BwcPtwDoKmcgtbAb6Yu7q8vjciH6vH",
  "key6": "7UWnKDnfwrw1tFufYRz7sozhXjCqBnY5kTCnXiZFenq3vBY4EbpKzzQc8hYJzhnkN5ShPyy8R4kJuFDMVgh7FzP",
  "key7": "4gCnGQVK4JTA7iPSqLqBxB3L6yEiX7o38X7EJnEkFZ3AqPVpdjjXzaypByLmv6HEfy75MzMY6458pxDdjWzPA2Pc",
  "key8": "5wx5iJnFPBiaSziogVUdycw4GNWGmSb76mNT3Eu3JcNri8L5SiyVsH5tqQk3ZahcJb4NQPQCUBk9oQNeZQLBGZ86",
  "key9": "4Mo6RYMfMPhfKd96synE86XFVzjjapZi23WiZpfk6aXTwLCSagKCurSbo8DQW5dQJdxBFtWb17kEu1XT5HkXkSkb",
  "key10": "wLrND4GGpHsvUaJrVcuVLQZ2YxUbNFJ4UmK87Keap5wnqDxADvdzoz7rqHFr6YU6DcoZuS8RZmgwZGUpCZ2BfU7",
  "key11": "2KLfo41zDca9yuWgQqY5SXnACSpFf94QrT34JdxXWFDqjh994QE6rCcn9gqGByd4vYPPsTVUBwENwtgNZCq1yKmx",
  "key12": "qjKgLZSjyhmP7wNV13Nh62quvY3RaDPcWr4z5wuZYxUP7JePcX9B8RUtZcEwBQugavzqhftCeNXbd99pWKVPuWJ",
  "key13": "4VDaXnEfdW3yzYxbW4obkTGbcphfh4hoJo1MVYaGigWJZLniuBAjBkwcSH3ujzqYArQiXhYZrxZLtj1HSg5PTtTz",
  "key14": "4qvMy97DbNBtWWFW2YfEua6NBakqpMHWincy3XouCaLG6gijXb1sx1MEKSMCLfvaFCDRUViXyaHaNCZZnPkvzuf8",
  "key15": "3YoGHM6N7C7evXmxyM4hBJKjcJQ7t1DXrADD8HnLKp5r6SoiLYW2DVKK49GvGZohru9RCErj5myXMauEf8TW9ehj",
  "key16": "5GeoUvJxj9uGeW4M5dCmaZvJYXSbmxGEkU6Xwf9tzD4VjC6poGrR6dDK5CUsfHm9EmvfSJ783UBhgPNsRg5Jz7JQ",
  "key17": "47FnvJtR1Yr5eXKcrT2mKna4f9HnvDHW21VDQyuQRtpQdLd7AVndqVHZfYfwdvR1AAW6LHR3jB1KXZcNXwvJwebh",
  "key18": "52mSJj45m9RtqMynzhxWL2X1aAKWeXAS8ghaeqtujE8RzsemCYynsjC7ETugobMdojwH4bLd9oWufv239oi7KZdf",
  "key19": "46xrxGDpZuH8vyN2LqrRbxu9zqiLQJfB2MQbTCeLsVidZjghUwYe7mKwHoSuk8xAACNrfsBDDaSZhot5YEnqVFQt",
  "key20": "4yERkR41wnR4zxLzNxzC9C1QvJTtYqom6LnCYock2TQKrG1YFF2cfMkz7fKiSTFhmhxeb3noFGZjXav7TVsPugoh",
  "key21": "5q5LRHxx9mApAJftZomUyXjj9uhbiZbSn3ZJXqxDPs7Dwe3mgQjrb5RNxaaz9WWZjjjxAo46MisWDxUU6yPqA2na",
  "key22": "uE7o3n6d6FqL6aUWiQpEnzeo2ZVDi5uXDJzkKuRXDPqt5xeUgSt2cVvveXG3BL1QnS8esBWcjhmorBC7hPHe3oR",
  "key23": "3yi9MTqKqz2GAr6GtzYgw9NT1YSb5LtZfhyPzqYdYMCxsmrU8jTsxg2x4CoccgaY766qbnq2Ggqd8f7CvNqn3GTQ",
  "key24": "48K2tXXhEQBzNbSZD38UWKrkMvmrj9qLocogRDn9eyN2T39WtySUb2EnBMrSeNxusqm6urt1Y5huUmqf4TeW1K6T",
  "key25": "3YPRAznGd6qND7UGnmkQyJdLPJ9A446DaR4vHjYzk7BVaLHh2ZaF9Dv9KgQzqN899RHZaheW8GYHsCLNTzLsSc8s"
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
