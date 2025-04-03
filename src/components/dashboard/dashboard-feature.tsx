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
    "67i4CjMDY41uR874QYPR4VxwKXd7cgJL7SR8GM6PFG2F9n1JcFDLvAUS2whKCBYuMUKvMNf6BrkuZfBeiY3iCTuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5837gDnFYXwULfpCpNR9H7LUfBvXj8GLE9bXY6Xw4RevVFnWVpPrY1367ENGo8MtvaNTAbX9M3WALcXYkMq5K9mt",
  "key1": "5tH75ELVwAHCjbiD4wjeedJMJoUsYy6EBajRyyas5Pc6PJTRvYk8nSB71cET4qBWEus2AkbXbn3btbhkPaRiY1E9",
  "key2": "3PM6R7cQoddFtAaeMPYjC9uZtVfpo2R9ng1aT1gJZiBjeyQs5tpjVcpbmKqf9QWKaAA7mzqUcp3NmKHGHCP2eqf1",
  "key3": "2xxxgHhNgKbj665xKntnv2zG39EXVAfMowr3Su9LKzwPzcCQwYfK4XWSPzgRqgoH7ivuX81kRyXrBZbRRm4Ye5CU",
  "key4": "53HMmqRxhxUJ8WiuF4iJjFTqiALk5khJQsoBVzZWhVydmS9Ht3vZtgxC7kbNVFUvY4xHBU7QjWHiCMC73W31gmPo",
  "key5": "44Duq8eD7qeEFfffE3TnFJDz6WzL87wHjssjG1w4BRKQximAzX7KcGK3VHRP3McFYMKqVUevLsf5SNPpF22TopFa",
  "key6": "8NWoVt7YuW5xC9xm5ye89885BtWfhiEWaTwnD99218XxRFkrnEpeuWgSHt6EEUxqrocyjbP2K7b8Uvnyt43GuXC",
  "key7": "4PYzLxcC7J6ZPzdZ35UEyzvvwABVnZgsp5uSGA51ihqt2umcuCqqyiXWhkXPKVhwLP43eZeoR8wqyhr7PABrqcY1",
  "key8": "3ydippjm7t1qbzftRn3486CJkVH5GEZrC9vrv6rGjRVBwMw3Bqo56KMXt9LF6gWK8gCAXnjBVShSJxZTosTGiBpJ",
  "key9": "4tvAUAG9sxB2L9sC55jaeiyWKnC45cQ9NRyb3KvMEYsB43MMKpzK7BrW6sDdidWr8r3pYjEF3LD8ytX1RgYC2NhQ",
  "key10": "24k8dbz8S3SbpKmGesxV5E1Y1ZApYvpkCs7jfXw69BVbLSmxD39nHfmP4YvDqgNHuWyVWsGRS7szULW2GjP4TvqM",
  "key11": "52iiguaDFQfXqaTkpiGJqibqsVWefJ3eAvC6wAWi9sHjRjB18zFCpvxoaRrvsF5Gj8iK4tcsf1AW3fV4NUypBfCD",
  "key12": "bbMqkQ1RybasrtbqpMNzZGVjUBkDKb9NvnE9MjpgZHVCzJ5LqSTWgzEVRJDNNS9MK5kJf7MP3kX8gDxYJQaiLnB",
  "key13": "2KFStUcaz3pBkMJnXh1tKhZq221h1rs9pQ4LXzH6nm6mcvCUvj856brBn6of15qHECPWwHAAw8MfoX9io4T3r1jU",
  "key14": "2j46KKsRMBuAt84j1NLBEVBjwxLnkdGrMHM1jTzUHAE8JZ9hYgmzi2YciC7yBAVXrHutxQwMYHhW2UCbhjm5mcKY",
  "key15": "4Mb8EpYA4z5ugaVYvALxdx86PwVKnqBLnBwqNg4mzdvmqF9DEVcwJc1eEBP3nxF1Fg1DtDenE6QXpM6WxaCBYdxr",
  "key16": "4FRscKdUg5MdxoTF5gdzdmr7sBMKx8DVoxMZCgSCoUQQ61uBmAtC8FZRhYRi9gBWWf73PQaRYaiPLgbmVkDEXYnh",
  "key17": "ET5K7ozDHrYtw3JxFYZ5So8BKVxsnDH46udoDg4Rx9bSs2Hq5e3B3yTFPaTREvjmzuh4kWoirbNAsweA5M76DL5",
  "key18": "3JKbUQY2fYhBpA7NvrV1pkE9DEfLC76iimBsna5Fv2GxSwsKYKLxiQCSxRYAJie9EE8qgpAvKXVSU2eAyVvQKm83",
  "key19": "23V8CGq7FuY1AnzjsQjkUhkPNmpExjRwYYXTrkbrFXhwd6YeVcVVBGPvCpScc4a4FMRnohhxHAt4cZwiiKPJYSxW",
  "key20": "4S8Xf1Y6p3T2spBL7HDVZrpUbm3tKKjW683FZT22SDsVSeNXP6z8VjgD1Map7J6oGecsmvQ713uMo5wmUikZ4Rb",
  "key21": "2ZZqa7qmW7CcJiY5ccxLKaXhuF8q1f4uQoZq9iT62BoWGZkrrkEoH8H6t4n3XCydFsk6pMaeqDbihkaq5chF5wtD",
  "key22": "qBZzDQRHrBFgpSBMm3MLrkkehEVdWtXpcZLkC6UHTwcUiVJ42x6dgoHJR5XUPdesRBpnunijfeMKhS5F79NyBCi",
  "key23": "5BMmQ2XVpJnLckRCoFMGAbVprg5xciJpCfYcFQa7ZTDj7nebBdKqyYxAUAjHFz7RT7BZqpGnUbmiFzFR1aUJf4q3",
  "key24": "q2bCX9j2SufRfEvEz9xGtViCK649M44jByZWqJKRtjeMbPpTQx3DrnjDgK1u9dJuQYFgV4QTfrWMdAVBsfSGBuv"
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
