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
    "5SEkcbosUYXgdHF1pAoS7TYMVPpsg4Y6swbfSJEPBySxSxNkZZqxmqYW3T1hWi8ZBLq9fKxNxsoTm2YAJA5RetuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HETkeuRFfCSRjTVxCnPonxvfCy6vDCMvLtvC9JwwSk7kXUJCLMseQUrKkovb6aVRHD3HfNU9VdDiB4zmEngYZ6g",
  "key1": "5aaxE9MvFvRhRw7ez1Nbn5zY4uCLBFxj3nbqU68nKanJZZuTG3bTXMt9NseFvBsSL7f4Dk6SDfK1B4pDLDkhGNVQ",
  "key2": "5LW6AMD3QmSJu2WB8QNwbBw8eRoBA5jXtrZ48cYHnE8pcoH1ZZgun1U4K9aMDQSe8X8JACAsn4dZNmBM1DRnKhNi",
  "key3": "5eUsvobhDF4TP4mYLtPhPR5tsFWZTWEvhjKsAqQKpG8zSvNEKJdUT5b7kiuVzphjueVNSEWqnUG6YmX15CDpbsH9",
  "key4": "5Pbtqt9ErRfoqZFQUGHYYgZrQCUSuj7QiRzg9LEVsnsRwStYXvP2uN3ayqi8KrM3H1DsiNGHtHiFR825E3881arN",
  "key5": "62Mf7pLpYhRT52C8ta2V1hKXG4HcRZ2VSZwGZcLd3xd4ouxySjvV6xCS6jozCAYZemLBFtaQe4oxurYLRS3chpsD",
  "key6": "4hUE9cFjiMHZSyj9VnWFz5n6CsJxxdySPv5cTyASWGxE9v6s2tNyGR8yiXwzDyjeP5Ew2WnZLcorhvKFuidNDAF3",
  "key7": "5qExTNmbUYpxVjWDpLJUwKbxLbxiXoYgU7G1f2gYn8DEmmc8q6abZsDQCZGGSDaDSZYxMJZAL78ZkKHrSAnkgkAj",
  "key8": "3uNfQiEPckoPr4bn57JcZR9HQXRzFmHz2wKWFWJ2DjqZqNCEgm9uhwcbUrxUu5FoHBuwgjvreTTjhfkqtHV485S3",
  "key9": "3dp3ztTg4W7DetdjMpzjXs1V1VXXDaKitMeH2DKfGzGZc1Py5s487PvwoyvdsVnx5nbtAAyKFf9VKUYKdwXaxYkd",
  "key10": "3E3BFBTAEdZ7173B8ikB2W17ZvT5wbsx69XRuQeNwkMYbsdz9srY4tR6gMcrZRXJe1QcLXsCBt5miaWpqpLKXA4b",
  "key11": "4NmKAUEAdN9NhBornSEH3fa5yaYrRDsC7UYDv2yamp349u3FhqKKwsn8vQ9HSf1AwKWuLX6a2u7PW73FLvLZ3sMN",
  "key12": "ob6bCsbUaam2JTEcevpWRJpz2ppaWfk1YdhgjDQ7YAo5s7t7mzVw3Lqss5UctApeQXxcLpNUn8yaUk4mRvq6k3f",
  "key13": "2t3f8MoGYEk3Vpnv3yd4QVsemMt42QesZvv2EytcaTMtHHeGvVP7nQWK1wj8mpvbsdMAjsMkii9SMGsJMUBx8tCz",
  "key14": "HwiVsQejiWNJZKrP4kTWjxkQpuHLq8oVgGNyzABEbjxiCqRPNP9XASWc3WFrXkEowu9sfLLmGDfctkgDzYz15k2",
  "key15": "NfaocMGfQieusJeupNC3qdDFcZznE8Jsc6eG4zHywuiyoLiWvChQqpFpHhGHjRN1gFE9rmYuwuuNcLL6v251mLd",
  "key16": "2Y26CyZvT6fQZyjNNAQaA8DBNnz9pQK1XJdvLFb8HwncrMhWuTcMAh7vM3WqQNsghGG8YXGPuFtgXkoKUqkrsT3S",
  "key17": "4exDbu9n9eq9KhL1hnDNt7av1wpedp4fmf3LR3zg36t7qcRcmfH99QkKJKR1hGDKoGyaXa3NqJf5VF9yFRscnzqg",
  "key18": "2yuKzKpCnmCsHynQqSMLcjDrhbdgaKFFg5kVroEw18dz4h5z6uThph6QNhjtVQyToymVNUKbQ7n4bNrA7BBASRhP",
  "key19": "5mRJsUSmnPADzaj4VDKuXwe7CNmUVbpmmd7tZrFx98ZMAxWkcTrEKZHr2BCK61UdgN2sitbQcBGt3L29rW3VeZnj",
  "key20": "UxeQiekuGNvAq9YPtwF6CMEzU9fh8BhH4JtivL8SDcGxSZZ3WyRBNQ1yqovSfG85yNZh9YukaUevd8DGzWBw4et",
  "key21": "vvEY5C3Sdqk5vMWtKWCF237QouNPMSd9GwCvAkttvK8xgpgtNmVHL2VAUXv4zcNpGojq2seZiDGbCXevPPQs1Rx",
  "key22": "8dQeMoKnoxg4VTKxTEdUMbgGKBj3Lepacv9arJbtpacAf9yuD5JprwJi8itsiT9uYQpeEycREaAZT62RPezJVgq",
  "key23": "4xHtGv2aCW8M27ef8mWzLXpfiP8fDojKGKqX6JoFm27YxgeNL7ooSPRSFvNdP32UvGgWfQoUAHWD5z1Y7pcBKpzT",
  "key24": "36ofPPmjnxHDfUYuhafjv5QRTQgm25g6RVZZoRRMNAyHKT5zyP3wDAn1UCg6uVjYRNyZFNfY7X7oqkpZgcEV8CAg",
  "key25": "2Lov4ydaS1y79mkTzfuj6etB3X77SRoHFx7xMeSrM7s5wsaxwNPC6d5REqpPDedyj1cXBbHSNhBq5xcKG1xqU8Rw",
  "key26": "tPHwpGNHSgbMgzBFzP4VqQxBwJ1KT2Xry5A93espedST4XBJeJjHvmBj2mDUydR7NK9fidZbvYb2HPv9FhEPMmQ",
  "key27": "5hVG7FVvzvUUCSGqSRytCdABd8oBCTbu2samRotfWdpzARWc6b6GfWt9Q85TP9exz9R5AHxeRrfHw5XWmMgUi4Fh",
  "key28": "4DnLKnKkjfoGF9nKWV1xLoFtYJ8JJSZwsrKcktC77VcL26dZ42vS654AKT3JVbh4ZPx6oP3pnuDf4EsjhwzGbL9D",
  "key29": "3MUe4WxcBi7vfu3zVmEgcwxNRTCRZt9QWAF7k7BAMe1X9iB4xU8xyXC2QmjGjwsTeC5Hui7YiUXK4Edxu6R57gVi",
  "key30": "2kWmqzHLwe4GTiWS53fP9HkdK4MxfRSg9kesDmgHwS3EEPuHrRJvphDM2ruTnZ8ADU4nFSXseSNbuRcgLbEiUpkW",
  "key31": "3AJDhSU5QDFq485hSWYYVwyzT2ANVDUTAAtiBPfFv2SGmPLnYPfqrdv8ofVeoTAEwvEXFGU35o86hJaUV6aysuxo",
  "key32": "cazUzR5jwaXZB5zhPbgtE5mS1dV1gpPE2oW2oAsDYJUtSeM8dNwRMWptQN8hhwx1TPqy75B87RAGQ9665eTnh61",
  "key33": "4qqQpmWV8rThMBrpzeB2njQobMdrs9x8Gz7WJJVesYGzpM212eNpEojLQ88AZ5YMEPD9NvNGJYCLQE5wFsNVuHJV",
  "key34": "3pC1fGvX45XcZWad1XKHZ9rRGzp54bbHAjtH48GEEHgiaGNezaN56Zft4C3XNZYVetpBYPiF9D6vNAtNEmzMhxjo",
  "key35": "qFtsNts1bb6cFYcDTkitX7vpFaAH5KAzQDuXxJTP4CgFVxswcm6rDxueTzjqS6TR9aZENcha68UErpNeQxekgaS",
  "key36": "3tTMsMQXwR5e72EsGQkAuSqsjGnxmUpDFF3ZoFhUEamR8EeX9c8djhNpcWFtTaJm6azWsazFVprCJorRBCjqn5y1",
  "key37": "3uzE7r7crexNXV3AsgYW6GSGYi8oY8jynqPUfddze91Z6rFMTFfy3aCrWqBexe6RsfFL94TmCZDuCH9cHRwuJbnC",
  "key38": "49cq2h7tiD878ZybS5TgqGhx343f4EMUGPodZdpQwKGuYArTdsvRjt7Cr9g8a6U2PxCWLM4NVFP5uNdn2P66cwre",
  "key39": "Zvisra688S2QW5U21Frowa4fr5zujhDZudr35zGverSr2KJbp2RpMLNrSDnm9GpeqWYX4kkPwhyLTED8qRBkxVc"
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
