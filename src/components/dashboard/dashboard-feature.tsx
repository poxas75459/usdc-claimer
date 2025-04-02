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
    "22ZRkt2d564vZ5r8vbTjL2o9herFRckci4HBhz157QpsUiyjNA5DBfVjEPoxfABhaspRcRTCifqfqM76SH4kNZCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PfuqKxsKDXRgpMzWyRc1NCAmrhxR2E3L7UA2gzoCF5FXUYUBSA2xxN3kxJB9YFF518edjHybi4xhvai5WJJFKmW",
  "key1": "KjARS6oJ3cZJFGf9DVWTh4mMaXMVJ7aVaC9JzfHSN41GExLAWs7ui1HDJu1C29ZpneM48PqPsyt9UtNMasoUTVh",
  "key2": "4MUGKhzKkJPaJd6p2dSoc5QSuhvYXN71b8THeBFsSX3Dyr8PXTNZjKpVicTnF7DkdtCQ95JpeDWRDyYdhcmjVV5W",
  "key3": "4eXfyUbKSSfLA1x7ojRtveDah5kaXWCqMCo4rgb5hf5H14cCBs8YPUhKRTodgEwnsz1MGySpC9Y75QUbvf5VuLdK",
  "key4": "4HDznjat4c75TnNpLFNdiLuqgigAW5hHBUXKvmWpj1M7zPvJgQYwmCjvGof3qnnanXw1VbZ5UQAQUte14ZjzW7nC",
  "key5": "32vcEwidaYYg5Sab1m4bCRZS23QqLQBwLt3RFDjSKQJdkyESSug6ZW8pVK4oME12mAkgc3a69v92qmUZN7euzSqG",
  "key6": "kwxagavnM6xnKok2CLhQrEYJJVXMiqwDz5v7LXGfnvk9AC35d8CyvhvDXBTrvwVFigDtg2HQ4NHo7tDvxzSEstY",
  "key7": "7YqJz4MTBJqCdEQDwr1NDjGeV5iMfob2bvFsFLrfqGSSfvemHubNFHLh8pPt8dXQSuxDrEY6PFGBUFVVJkKvT83",
  "key8": "66yuo1cqwexUHWGiMFvT8fGcEV3SRdaRSisJYuPjZWPpcRtSTaMmWpgHSLQBv6uHEDoxkXGQHnJwS2zsn5kk5x2W",
  "key9": "4BaMVMnkqj7vKNmYbLC1qXN8CFyLfdxyjmXW2p7VujJKwdxr998E4WMWhDvJmi8q2LCMgQaEFEL9Bp6Kr6rwN6ci",
  "key10": "4seZ13pUXdTHATkQjfvmx6mHrYiGyrqMMZGcr1TzivnwN9myy7vPw76yEKN456iUhBGA5ZmUSWgoajxtn21Z4uyg",
  "key11": "2PDBC6VXaoJAa56hBx8AXWLG4rEgLSmXGgngvhL3ugbso6HAjpRaVXW6MJ3bT9sV23Fr9PLcZbvBCHgq518jA8GE",
  "key12": "2HK96FyuX9RB9xXZ4W7hmxU46HpdavWapKUkrgdV9tUaCsU3BAXS4LJGZjrcPUaXeTDrYkohueCZrFzevfZZ62ra",
  "key13": "5Z1F7ecF2uaJBsFMMEXfbUWMDCKXe9WAtghnfQtEpGvSYP2DpXD6nQuvAx37DEqk8hjuYnXwhJWeYuH1HZYmVHA6",
  "key14": "5s1Syb6FeGQYAdaoWU9YhHKQ168NsjzpmQqPAnc1xhGakGcotrngaVF9tJdV7ffp4VW8dh2QeNoTtHJFSWwD8MYP",
  "key15": "51uLPSHoyQxdYyiHFCGTF4XNSZ55MtrXQe5qRCkX4j1EKaj1D1TLhiepqwtJi8ANcgtnKj7iKqUTy7BaSNWSnRjX",
  "key16": "5GpvBFYVR5uhsMC7yuaFTNTeFY32SUiFaTsX2o3c9UWZZnJXWpPh8hehRji9dirz515f144gVt9huJEouoejYPMC",
  "key17": "2ia9jiu6ykfpMrVd6X8NY8z7WqKb6RswhfdepceJHTudxhSaUoTnZwuJJxwhNQZ5Gubz4j2q2zomMYbYqaB16Bvt",
  "key18": "2p89muxbbx9iLRv8oH6eYCTsRfWrKv2ofkWoZG1uPcJQxQSzUzZmnuohTqQku6h43EKBXo4eLioqpD5c9ZQwRmPS",
  "key19": "3vSRjESC57wbRKtqhJHWPbGThKryVCHNf3xDFFwDbe1uNpHReL42v84hK5TeguNWxrAAbHm49cfzsBqtCKRGATNQ",
  "key20": "2giG7nGYojkxKbAWJjeDnmyXv6MxH9nxKvc3SUmGJzimG2EUATBmUw2qCbU9yX9kpLjF1EgBsyD9qrnHJPKhf4fP",
  "key21": "2jQsGVF44mWLGUB8mze16iA3MeVipNU5voiSNr5GfBHzYHtR88v8DBU1yF7c5cqrMz7pqKR7AezNMBYjnpkjbdN6",
  "key22": "jt1ysL23fUQD3fGidDr9gn8YheY2ziPjMjAdLmpNBEbaBLKJ24aTkBDdK5TbEabbe7foZnuE3AHjCk4uL6iAGet",
  "key23": "4sy4m2atMTTGq7XyQSBtwPeTZVM9MTRX1vsMMLpBfeNco4V9cHAvuWwk39K4XMnJWab1quKq6YSRD9dYz6maq4Fm",
  "key24": "2j3p3u8T5q1NzUvg3vuPvtYfJF4k8WS18byxk6zPEcdtyh4uN4iM3ocRQoANPorzDhcfgLyJz6iBwwQFcoWMATkq",
  "key25": "3BP55ZQzKxJBXREV4MZtZZKW2evqHQSfyUH9Ry7gFVdw6qftPrGcpcFFuGKR5DK2N8XTRNHbHh9iy7RLH4dqApuS",
  "key26": "2xydfzj8bky4tdYvSuz7Gz6y2Mry8p6fansjB9USiR9ieTR1RoMd7725uC15w2hxVqvELCZPN1nqt4vWZMpKVfrY",
  "key27": "2jCewmxbVzjQVFU5XusHpeG76C7iZwakZcNakWrxxG24a23GcaPqemW1t3ddVE8cczDEjG2Nj99g6iwBGeT2rzRT",
  "key28": "3zygW5483HRN7i2DMin8zBXrKwD7nXhsz28MueZbxYfnvPW3okqDijKYZ3erW8NZ88o7uE3iM2s4f46gDQYz7YQH",
  "key29": "5MXceU65DnbQsdgfWx2P1JLWqVPCYzsuHXibtuRJDKSrtTg44mTqq5xqju3fPBE1T6J9mXSMzST7bpquW5jBxyb7",
  "key30": "vABoXBZJ6YCXTdgCEFbmZTEep9UZiVBAYBMoryPqha2Fi34Tv6xG95JczcmEMNocc4ConYrjUx5LTiGcW5ys9DM",
  "key31": "4S7MAYZVRy3reSAPsw7WrfLvjE2JX5ZSRxJcRtyafUX1YM7gfbmkw9EFiQQpjkHDMfo8uqftLwc7UsKCAZgja46k",
  "key32": "2FFz1ShgtL9iXweJkw3aRGJWf6PKqtGV6pX6SQrqiePCujv2AQ22kRt6ULpTwF7HRZmgQyB6h25HExWqgEixWDzz",
  "key33": "yzvAE3yXFajpr8dqCWnaaAACEFaUWgYiEADyMYh29ULB5JmaSK7jn3oj2TQ6Xfgo3k35dag2DNt56ANCjyKZEYD",
  "key34": "4m59NVPYJQM5V8jLkXfUPQGKPADPa6DdZXUq7xamkpbeSL4eNNPKBvKtqVYWd8k24XTvStiS8YR7gX5t4WT8NFFy",
  "key35": "HoJGw2FyPk3jqUHLiE8NgB8mTbu4viZFTABFbY846p4wf9jQW27kwCB2Ew296zzDtEzG6nBkVyFCBKQN7Qsgafd",
  "key36": "bwc4soGFmtGHHBm7VwZVPA3o4UzY7zwhMnG6UPaWxmR8Wg8Swko4Kmt7tDryEKwc44UiKmynRGoWznZxbNpeMcq",
  "key37": "3kz6ZiBx6QCZnW2MQXNfuZzVXTRMEhMTQhHmjhgJ916mMJ73Um9bA7cbaBqdP8PpZjsG2GihdmvodQsZRC6oauEF",
  "key38": "2eBXPFRSsCJBrqqKWzJiVxwFrT58Gkirg6g3FFyqFFHiwtSHo8MoZ8E3i5JoPf9g3BSxrWzqbgdxJjg4AiDJzdhC",
  "key39": "3NRcTcXFDYPnbi46oETLFZUM9KVdRm63RmnndUvS8MQW4PEWdPu8eWtRzhbcVB6mewpN9MRwTNiF5281KvNoddXg",
  "key40": "3bsN98GA9kUCgt9SsdetLSJfYS7Z67a6n6Uk7weBshaGgZ8MS16jVuKbW7SsoazCAW3wh2HE4Y6kLkzateMGqRmB"
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
