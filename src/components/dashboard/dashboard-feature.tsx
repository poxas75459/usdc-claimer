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
    "4ogVHEjsThMDTnhKLN4XqcHjWJzVoX66zyqPN24R3FeNd2FC9A8wZ6RJmJcXdhLfXDtqtD5DgUpFNJVAYFexkWxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pN2Gxdrh3G7vaimjKhFNBX3sVztxyq5RvkQ2uFjkq1VKwcBhdFZTpYYZ4DDEJHLbJqbWe95yKgYdZ6RkVZ1DtMx",
  "key1": "5s15TzpcNscrGG18KsV6Y5QScZedodnCVCzDV3FiZa6dAAtCuNNk5qipfJ4SB2D5Zp4a9Puqz5VhnsMb7cAxU3WV",
  "key2": "tV8EtNwC8BSgwnvsFpker2JNL8xVLFzFr87ecL6ca15Wc1hiAPDps8NSDJV7XDpBAjXpQXCqALV1aKe26xsfuUK",
  "key3": "vRB38f2DQFyUUc7ix19PSYdgzEmAuwB9Q1AKQRdKBQiMUkr8RnwX83B6qd5KVPGHaSQ8jsEZeCe1mx15WqqEwur",
  "key4": "2uSFi8j2b2vfWVqDk1GmxLWjf2PPYK6Drv6nTWSJrrihZ13P3He1dM6YrqYDic3GYBwAX2YTuRnAdKyv3K8fuXBL",
  "key5": "5becgtvDZxKPE9XgG6s3syUXMPu6A3M5EqPgcq7S4uLqGEPAsH53NmGMVt9pFQRyMBXtAXs54eDF7TgRhBErQEoZ",
  "key6": "2yeL3ypjjT5C9PhYXLNZ8Jenh9vVXtmkbZ1KHefdicPcbYxJwpe8hc5BoNvfDcQxdQMFFB6xMHeKaJ58S2oWR8fp",
  "key7": "4rnJU21CbAimiTvUcrMvWyVQfASypCY6PRqpeG6Fe7hoehRyKpWzVqaHMs8NXMJEEoUXY7Z6xj33oG2MEz5J7vys",
  "key8": "RRZ9zRwswQQ1K9Ddaa6dTKhWx6gN4g44LcPqTfgEi8vthgCX8xvfoQ52SCVVuwHvhjVguye2HgbgaxqpdrEx6zV",
  "key9": "2gT9YpUuCVoh6Vfq7jF8TL1ubPdkfGdZzk8jCgHbPHp7vLamGhgBcPkEyL7ckkp8ydzkBL5QLqigZVAV994Aya2k",
  "key10": "SU756gyD5syJ4KqQMyG5Q3viV6xi8H4f2nzts7m21SWuZALwRu6Q7EK5YMP4Q84mghBUScW4k2HYtE1SeiUc1MC",
  "key11": "3R5NUqkYvdb9ddSTsLhG3DEnPv9fubPfDxvQzm7BtanLyG2s5dt7JMDHqCtsJQjAujR7cpi1zPZhZUWPCVpwQETf",
  "key12": "7tP4AeDaSdyyRvLbxQAihBpUHLBrfu2N1XP93XToj8N6EZ3D34THo6oxXL3J8eqHzDoDhL26gGKPd6rZATnrouo",
  "key13": "2hqGr88ZiwxWe6AZxRNLND2QLjQ3AM9yHXY9BAL6LdqUAJzWhZmXsq6wFWfnvyrcMYnjg8FueVNk57nXBjJXKzYk",
  "key14": "5oduAhX6Gvixbc4SgLawukAk8xRvsB9dnWT5u31cJZsLv58BUL7wgfs7HqkuKLkC4mjBd3dSRR9UvqDPUtrMMzqC",
  "key15": "5JmWYN5dgaALFtJCe8Zf25VX1xBLASX3pF2f6BDNn5ZsRE9b1QB8jzJG9VEH8KSfzjyQdWRJsKd23cGV5m3FoXWh",
  "key16": "31ARcbtFMxLXgy1Uno5Add7DstLKnpT9GYPyxLo23Xr7xZwUnEMBtKU5EHYZbv8C1PiGqBFykvHdgNZcjHNoFCfX",
  "key17": "64R7ErKnUCCWHxcNZ8Q3xJUjNh31zUNYSaTNZGe1oFCwE3bKNncu7psPq3DF9FFjtKY23JzquXzbhnQ64Mjrz4BD",
  "key18": "HNShMcQtMyaX9prBpSnmQwVqanHG3Xn7tay3NFYkd7qDv27XXV1bdX1aTCiiF8x6WiqXYhvEtntKvUHrhxuXBmR",
  "key19": "59TPunKwXPHUC7BiBTf2CcMV6CNaEA1mV8DrcoDp99AuLbaNatjhgguAv9cQS3AYHE1NjYTmSJEd2n2Sgaw772k6",
  "key20": "3HQ8KoSeUa13rCXWQFNYqV3Cr2yWr4s5vCaSrSFzuxwLdyvictaZN5FKHSDUYhQSWCBFwXE2Do21TtsaWpYhsgXt",
  "key21": "3TBDhM6eM8tkywWXy3y4kSWoWs9YdmsiB58rdF34AjGkqpAxxiYimZNtSY5pgRT8uK2XkZ5m23yaknqsnbQBADmY",
  "key22": "4z7nRP9F8XAwvaGYj3sFQwrGTj84anApDHAGscwVYS7rU88seiGzFqnHdadahaghN3z7N7NtgG7o4ptBkorSNjbV",
  "key23": "5GsAxETj5s3havfYZYW73cXtCk8QT4TNqnnTvUWDj4czjN8hbQqKYwZNec5Zgn5Aj2ic3VzVw63wHzpgkiiTnb9Z",
  "key24": "4ztjNzcRS7ot4pNmw4hVDHTn4TTbKj9F3X3GFeuX2tbZSSMb9zLXjeYQrRjyAnseiuc8VFMsbReWcbV1ujKEucb1",
  "key25": "2VWNawdMfRMp1jav4pCXP6kCnQPHGp4PzVqK7XpBSZmJ5CtuPghpF8z1eFCtqwpMAbe7Z959G1uAdnrfXQcyaA3B",
  "key26": "2TsYyxASuMAbRgtosEuKP9f26N8wV3QLFNRXckeG51q3aa25qjN4iWz51fPxGnBRNwFQTsFNx4WH6GhfHhGFHsXG",
  "key27": "43nUd9sFg7dcp8L8JzQEBpxsZ5vuvEPhGx2gpH7nP1N6ZsR3fRA8EEthQAFi8ZgfKUXdJasA1Cet4uhRd4UueAFU",
  "key28": "3U9BCSe1yD7dknGEc1BxJ2YgHBnEB8W5j3g27dnWNXo5qLd4rtdQaWpz8hMXfxNuemeQUQQrisC3RM7v5UBEFTeF",
  "key29": "xGmDM2x3oXRNPgMZx6horc3W6txb8kGN9iiVaGSw9QkUaAod6u8FXoJyGvbLjntUi3W8UPtXy9wVWhstTbZaRc8"
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
