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
    "EEkdhNvqmePQ7T65PMChxHt7pA8m9YjD8n288bWErFGXgQXTkBWKLjNhgGbAJ7xxGeEQrFz5kT45We2Ri7jdUQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJiMkSCnfiGpvhMNRGZamUv4Cz7is7vMdLtsTgvWiYmfZQrws5R6PX8DMXEmimZy3AFfusgcBGVTAneHAaaLehi",
  "key1": "5tww43Zcre5jNHmp5jYodQEYZXfds57ohY911df8oofto7pJraMp3f2vM15TS3N68obKzPwSLc1MWNgdgkJMUcSU",
  "key2": "2ceB2RY5pf8RoTUUyn1yNsYcymziKzDw3ff1J4UxWe34xgGrtuqj9yH8NPsQwtLsh8ExAgzbVRDNGjskTxAJd3Kx",
  "key3": "vD9Sp3k84KrCVA6ie6Fu5Ldjh84GwR9EM2F4Re3oFsGSVhUVJcVCfAhWLWF1Z1NeCpdarLrpX7afSiHn2KZ1Edg",
  "key4": "3CWAAfs3YLXSre3scnAVLBfUpQYwo3UmAZYkcDVjGVLAKfUYpJ4LaHtpGDmo9Qq59qHymxpdRNKeMdaRCBPstuf2",
  "key5": "212H1dpNAwNXRj7QJrbBoK8L3GvSxjqeW3JzPeBYsMCpqkzwFKpCdakKTpVMrTPyNEZhSV6XD11QmZNGbXGPm8GF",
  "key6": "3DovNeWpbqEkN1H5qzoJjV2yqdtFT2NujQArADQDAtXanpG5baNR7RdhxkEgo3hPGKfHosMGt7hPND4Fz4xj4RE1",
  "key7": "3ZTAxE9TLNmhSDR4ud7MeDFVmMvn349VxTfC8mdwGPS6bwEyR647f2WWLAoZzLnkr8QZDUD6shThv3i1uC3r8hqD",
  "key8": "2Mn4gSLQq8V13pEsZYB4bMEFq2NPmMDGU1dZ87jtCFBX8Ek2EynAQgx6bRaDZcLRNUB8vRdsUprwP7GuR772pA6E",
  "key9": "2HRAmhcNDfvTEpvXZxqDVTQA2jpwznjS6Rbn8u9TGkRXiRB4NfwW9uEvU2nTRk9sSpBqZSZgGsA1HouHzBCk2ZXW",
  "key10": "5HwXEm8JRQZpHFcErhV1xVqunhQYtQ3FNLopJ1cFaFDeyPnAMiZN3axHvKVMByTz5JZbrm4iv2af2Jz1Pgva1xV1",
  "key11": "636ZspZDtdY35Mh1J2VJRag5YBPVRH8KzXVJBoCmCcYLQ6ZaNdEd4ReLpGcErJd2yATcph4igqHkVxzrWq4K6hmz",
  "key12": "K8biX7GkY5MmvhT8ZkE9VBdR4a6i7Gbk5gxLkkfFp66anpiu3YKrhYacvKNVYNMZvrxbpGfGvjyrt2bcaojyCDc",
  "key13": "c2SN1siujaXmP1pC73GmWGbJfrDSEecgwLyqudewhp5yVcALaqosQwHsWKvCNHebckrRodzGPKu7Mun3zH97f2h",
  "key14": "nPQUDZ3yt1XzJ49GPUEg23xkWTaZSoKCiTcFCYd19oVH63DDbFhpHPKwmimAqeMR2Fp8A4p3VDg8zSfA43uYc3u",
  "key15": "2fDpkDi2V9jSkDKXgth7KYeuyShfbYswtGgF73scEYLS311Eth4hCXfbfA86SABjuXZWeqtmeypJtFhzv3jwXVy",
  "key16": "3pYr7FmrzeM87oijSNKFuqest8R98z7mkVeEzWy7ujqYKigfCNggHTdj3cGBTqVCEfqEtkJKKoWKqFqwDmEmQCY6",
  "key17": "4qBFha2w3k2KnYtfYyFHMSCyCPoFpvbXPkRFqdkELXEDo1QL4CcSZWsAQouv9FAaFprCL3UCJNu9ULdYrg1ZVagi",
  "key18": "3aPFubU25JwxWBUwbghtsdTKHsHvg2KEijKfCpp5k5RZ5RQNSNT2hj63MznZpoL2d7BwBrywmXxMZSkXqxo2AKmp",
  "key19": "4AMwaWHzky28h12oecLTZcoFSn4mKXkq623AYmw5EQbnBLbR6uMm58zXnmGsJ6B37sYwmxSonTULWJt6KeETybct",
  "key20": "65bpnoASBLK6UcfyYRhCaxnSiYdTCKe6xojXi5v8dy2YDrWjdxayYPepyQnGBbPtgyUbhJFRzu2nqP1xhaeha7QL",
  "key21": "3Qk77ZYKhqtzNMnHVutHMYV4wZVJ8bEHmnkTBCDdX1EYgz9PvDK6ZHte61kUqa48D4aTq55vxoBAf8w3CD72HvAv",
  "key22": "3Yzpesp41F1ZNBcAbSVYAxRAbvyDGFCQch9CBuE3SafN2hpkctMHV6YctZnrt9sJcdeFMsqdvCYZdVsX5xoVowqa",
  "key23": "zbHDhbpS8Kb9m9k3iHzZHhczs2TKCXjoNzHfPka2mmjV3drohHkkd12Qi8qT7jFegcA4bGq4nsHJt7MBvHkGhEj",
  "key24": "4qBUqkuhUPXUBqLMsN5nPG7WfPJm4T7LcLmARrCZimf7zkt71Zi4GooQWATUAiSWUa5XdRqbxuKRqZwL1h7T3dKe",
  "key25": "5TCDgKtTqMKXN3VefKQgBkmXQQBvbhmFUuxudWRDJMM9WWaEKaVmHEExuuZZqHhQBpKkQPjqUYf6tMDwvfN9uDF6",
  "key26": "3jJYeK2GfMTHToZyhFLynGQyT9NGbmBHZ6UVeZpLAzigbE59Ysu739Lj8KhZFxSfY9WWhnX4vFd8RNvZsofSVh6i",
  "key27": "jZwUwb8Q7WYKnvdvNdtiiAVQ8q72RuoanpVW4W5pKYGqZP4Pf63ZoPHHZQduFJdB4ngtQuRsGrhyoPhx6Xj6rbi",
  "key28": "5zFQy7KugvA8onFjhSweBMjzvJLrRQimYVVkjYGuh3t8VZoPq1SHZuqh2AUx1wvfKSKkJiNxLV8vEX2xt9MWPZPC",
  "key29": "3ubvz1i5TD2BNvQ2ahBvMDapHafwzm7shcei7zExm3NXJ8ULfPveTzXgmEXYT8qAJBXoYe4z9enkTCkRUu9Cu4cF",
  "key30": "53EZRp3AhNQhCkvyXW9sMWGF4TaS8C7Tr5fijtjJAzWSHe19cu8HiD1Lf4PMHJgYFvJL1pn6TUNYZa9ntwpwSx96",
  "key31": "2ugeTD74ku5zc7C9Zcv1cF4M8kKGLtxsx1rpu5JPWqsiQiyaucPQNXzp1yhH8s51NCXfRcw57vk22Bsdyf22ggeU",
  "key32": "3F3w9bmi2nrVN73n3ZNAgMJ1VKXhnrwkC31wh5iVLVoTdUD49DZVR57frt5s1ei6FnXHuJSnkmS6po76th6mU3wT",
  "key33": "5S7oYZkRahxn8MTRHXk2GuoHfmTyKgd7cFxivhKCQF6JAbQZeLBdp3Nem1eDjKJWBSKW4Ayo4Tq6oXuHZW9j6KAm",
  "key34": "geU8XQwiUtzK1pQoeh8wVBjP8ZmjQx2h8tYooihphe1EczuQJFeDUqBWBJrjP5NLFdhS3YNtMMh34fcGhDYs6NU"
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
