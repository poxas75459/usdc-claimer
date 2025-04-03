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
    "3TmhdGZ8f1jmbJxRLAvnNnbohZ1sqnodWArvWJmQp4D2JsuA8xXVMadkVQDTseWAFguFj4Jz4Gi3jSnPdMfRmwRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LmdAd3DascSUgx4NKUmdy9Ng8Y6vaSJLa49dENhhW4VPsNSRAVzgVzgC8SpDwXiEYLom2CyuwL5wiVJv9W6wzbU",
  "key1": "3mVYtpAqw243zbvNctFSsaZqwSAVAbKfGjddfxFw4YwkyoyGq5m4eVUhNct5DhqkfNMLLyvbGnNm6cWYjVDV8gUQ",
  "key2": "2Ebi3KuNtzwUm15i4oCzotrYzx1jhzwANNZJ2uUBKBKXo5c9BX9wCej84wcnzHTPXR6hD6EsEp51TkpfuydYfUPK",
  "key3": "LwwSN6Vf5FmcaebpNAu1nFjQodUy3f9u1K6b1XxyjXwzhWAVfZYToZjPKHQUBJc2kM8BY8TjUKbhUn6bWtGtxDj",
  "key4": "pBvMG6sa2ioKr8MiPJUVwHvgWnvvWr3QsiXCPW6AinLWAaJDsJ1ZAty7bHUqbuiNgPKoVdAk3CsYX17UxLt6jFS",
  "key5": "34yxWSLrCjZj2NmRvNmsFToarptzNVPiRBykhGzvvFyS2Ysc3WtQkoomun7Z2HkWLFwwcWnHEPDoEp7QMoKEPEeG",
  "key6": "5Y5jzDYXifzmfxPGvoni4XUPMQvmNZgXQcspbqj3sTRfJLTY7p37rqvQPjACbRYYWueZLVfCtXcF9ic6uicz6Mr9",
  "key7": "3HEiKcukn1ac3EQRUWRvUCG7qWVpURmZ2iChXVwHNmfmWAYySVVVu3f8r4jtEepiF4Wc9Zmq42ssLsGczjzLjnZK",
  "key8": "2Qy671kjA4eyu1tFmFdkXBJT8Q67ZivCYQ9xWpXiK8QPBoPxWtQtSJL2wdVb7D3G6UZqvc4eWj8EF2mnEoRRyVp6",
  "key9": "NxzJheHQFhPvQ3GDwWB1BzEPUEFbB2LCD3XfH8SSk4Z6N8f559JVoBHQsuvkdXT6ZNrTGzkHds9fJc83NdEcHNr",
  "key10": "35mwxWCv3iZ8nUCeacYZLiK7Fafc42NkV2t6FnYGWR7TDSBLS9D3Pf54pApUVEe5WpyvKgy3A55TxrD9iUbUuibb",
  "key11": "5qctMNWs5iuy9X2tfQaUUM3VkWQ1rubXjFAC35RCChD36RxGzLZjimnsu2RtTsHKaJJWQ3Nz9RybbcMjRanYwKYi",
  "key12": "4eQWvHrFSTwTrGppjKTnn2CUja1sNDuxRjYkfuPXNxfYc1CMxgWHLaxzRXguCiyuHfT9xJgfcZhbCbyK7GqLAmyo",
  "key13": "32RYxg5Yob717Z2nxtXZvGHttXYUkbXoiR8wMsPwiV1hmoRYNiCNDagxg5wQJVym7VKiUo6EC7npiMT13wFn8eMi",
  "key14": "4iFPd1qdVgrja2X5AVNivKB4EpRJH32zbM3CS7BiUbu8ZfwR2vcmxZKWqxu34HWVYNW4KufKGCeuS3iLgNDF3kpC",
  "key15": "5rucMs2XcrFYyoobD8hTwGvnXSuuBoEVov6aPorTqH2qcXyAZREZKKQDfXUs9KztynaV3xqGsxBWRRK8Wq4N3zAG",
  "key16": "2UXThcpVvqb3QhfJ4RXj5pLAZk7yJevupDwhJALaGYi2VGxZLLoyXXamQikjYhCcYxK138UYQp9NUAC6dH2YL8uH",
  "key17": "4inu5sfmGuXCikwVNiiqcbncYWMnmX9eakCuZW7724FKsX2t7jjvk9TmAQcyZJstXmjm1Y69XEEBDgxJbXwma9V4",
  "key18": "4jtuHc5QC4GfyYjktAT158Rjvw65KtPgJFzab6jtC15bizR2mbw2AgzVWRk9SJbJ7Wzwk76drpy4iP1SkoTSjs4f",
  "key19": "3h4bihDo2oBTYeasJjJJEKgvqAS6F6vSt71xtth6c1mZk7GG7hpTB2CtnRGmBSxzriyetdyapRwXgisSBXnqrEnJ",
  "key20": "5mcGqcK9V7XEEtuVoAJosqEngDUjEbARBuhNHemYkZr5zgvUJw18rZTnmNnNogNEyTpGXqCBeNH83dXA4dd6MAsV",
  "key21": "fzTTXWQzFzjfPvKirkCddFM8GioRmS5EAqPuhtmx9HsnpVdw2Ft9VoETFcvSgEiLCo4JBgtG1Tzc2ddsmqb2D24",
  "key22": "5mML7uy76BqEYC73bJtVvTp9iS6zE614Bz7WJWWCU2YdSAtGsfEratFnxnMB3z571hmXBocTkagnGpHyvqHoY35t",
  "key23": "3zFCzm7SSJVFSBb5amGiV8NFF6mZw8BiLi9vMbko735mSVGqZze5i3phDmEmEkNStzDV9RrhjDXiATtFWvqax8P4",
  "key24": "22zsz8Y7Mj34QEhtAyNGJKd4yGAWHnMPBnF5Fs2wBFTpgCpeiEidnrhJFPDbVrZ9etacYZe6446YmMuornBzGsQm",
  "key25": "LxvCYwh6zbxt9TCFrpKRCXbPB7dhEFidLdUibjQhfTh8tSDzTy7DDxUem8Hu7VJLMmb3VKBVovjXH4uvnNHwpd5",
  "key26": "AVv2HkNVfLdFz5jWXTe8wyrpo3Pi39nRhw6iMKzEkLV4hBKt794Av5SUHacpjfmVezxGeyVErSqHFtXgSiHYEE2",
  "key27": "3eUjsTvmck5nTYV9e1woKtgsPmTt18CvLuXiRSVYN6d1Gyyzuenh7VzQBzEq9wqsXXXKNFf4ea1LskVwXVEpfQtB",
  "key28": "47XRBvuSkpHMCgx59di1MRJK83KJGi1pZMrfg5A8L1HE7ygRmaukdEnXew9v74tpHT3kUCsEgzDxkKozTrVK6wJB",
  "key29": "44x6yVKanBZQiB2PtRhHYe3265vz3aftfRvMK8ouaDBgnGkazrDtoPEaZZCjBTBLcDb71dw5xQZzUBVTz2A3oaDU",
  "key30": "Q3B2KP1PRRWULevrfQUVouATTuhfQJbbKM4LgeJ3d5ZzrXBFRhNCmQxRKD5p4q65BLf4JVaxp2EbDLoMcrvipjL",
  "key31": "2RCgYBubrToWoiV899VE8YwLKwYdt1bx2K8NWLfbbecZv9wyQc8wZFBbExHdCY9BivYn6R1pk4r5hYLnVygw9GfC",
  "key32": "5JJ9NoQejmGM94h3Z4rrtgAURCaEpMYcm1grqt6ZJpRTQ4uHcb4baj4aDYVYmy7QD7r8ve4pvGvK1VuwvR6JerKs",
  "key33": "21ZaE8a6dxpb4htgNAYYgJcd3AKL1RHTdfd8VGUmjjWPszqfQwqiMoGSXrPusXYCE8CPne4iTV53h2sV5Xhr4JDq"
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
