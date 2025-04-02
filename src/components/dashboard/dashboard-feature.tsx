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
    "4EasDhaNKVXszX7aC44pPfnaY4iQrkxWxs8Tdmzx8GA4GXZdXDtPViZv8wbzge3Jj4mMjMKFUEQk9fxTP4xmdwjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DqqFJtnAe5T6P7UMp4Vk9fKiZjd6UoHGmUqcivUuJw8mHsEixhtHqT7MVDvD1evhZ7WD8og2GEX7fdrMhjfRfcB",
  "key1": "3TvPjywxg4eUb1ydr99Cj6nHCMaguEaW9pmuPUmanVtDeQX1jr7xPJGrzmNNwsmtso3vVAEyGABwRcy3rQSRdoAF",
  "key2": "3mx6pGS9xg4dp6g1YUigoPiHjZH9H85dnDMGVHR7gauwPTKaUMCLHg55EtNWrhAeeNrQuZYMttiHRxuie6u1hnUe",
  "key3": "4BnnDojqWNwGsECHZ77zerzm7aMut5mDu1MvsKv966MxvYZioQESszArdQo8GhLABN3mFBN4wQQwHHhYihMeY9bk",
  "key4": "3c95QnmRY7Ajhj49tVgiGu8UNSWTYiwNeYFiURay9GcUm3sPsMStMLDpC6nRTBmqi6y2sTrzZjJVgKESyGxjAtfC",
  "key5": "4SJNuRzAxQaoKfVYQe5gGbG1ephypDkoYg3nfKXav98wpD5iZ2DyfqFem3Vq5Xd4DStyPUcftyKhNDXWJgxR4fik",
  "key6": "4a6m8ganGJSx3CeYCAFgRThFs9GMb3h36Q5Ndsjpc21tY8eRBVHQ1zwZY3sUccbm6cQbpbS4pVHJKJBciTRjGreM",
  "key7": "3RNipq3K7mMpicAHSo1FrfRB3dHmBh4ZzznASSTFXhdtk2252FbkyWSFbkNPdQipziAcLmRCWGRzspxPHEU8PkEx",
  "key8": "4o7b5zuAf7icpcWR7N63ip4NspD4PyTcUWgab8UfCrm36MgCkeDwKtnRjhbGZeBgMjFU9xuFHE1N3qhkbiJxPMwQ",
  "key9": "3jnw1pDTc4FHcw9bSPPBs6urcLMY6WWYz8YDkGCicFPA42jKv5yYBRbTrJefqaALXvUdQiFsynwRzm1GbAgQFMyS",
  "key10": "3kvKmjDFhi5THDLGX54TDJbKYARJ84N8WJLC7qo3S8dKAWYPbTGxMsXg2Ke1jGBzr8CC1Fq8PGTHrqBdcGFd4J2p",
  "key11": "66hiTvxkYmsQ7U1HKe5L5VjAKFj2TXT6woiU42aZ1K7BfW4KFqJ3vczRUKd7p592W1qTFVKSpkKZmyxqaVCGhynw",
  "key12": "2n8FHQ1bM5FAVfHDN6hTJdvArc6Sp9x9vWLRFiaKMQYtCge1P97ZmrbCEGv1kHcz9RuZyf8K7hihZkvFtVFr1Dur",
  "key13": "4x7jVTsCcKqNJywoy7fFWBF8T5AkJJ6EESbw3zDLgCo8ktovtm2MQD4BZq1DYi5HLF5LJZ2oRatZPhTdoVNTjbdY",
  "key14": "4wRoHFi91V5zhDrN6hmrScHAJK3W4A3ZXX8Aky6oGYLCn5h8ugM73Qdj334vKES9W79AvD9BPCWocr9oH4b5a1hG",
  "key15": "KGuhK7rG6pc9UnySMt6cRU3isnqKvdf8nFumuoL1SPEd2TKLwfwxbpf571UprwEGrzsNzMpiHgBjEWypZnfrHgu",
  "key16": "2vjRHaZDkjwPdmkyWCtTf9EU9CLcdw7GujcfoGe9DAgWAr4kj3PibdRwEgi58LouB4MozDFJqNYZrWy1a8WfqtXB",
  "key17": "589Q9cYKpEz5xRZeDeYrqcPB9otSCaiYiwoibuzWgBT7iQwidaanzATSRMVBwAkapU2Cbv2QdZke1UksnSap13yg",
  "key18": "3puFaBKSyWJMiJxKjdA6ZbJYBhu4ikjiw5w8bHKJdwAqVcnjZ7iDFwUoq9jgwcLC5d5ErHmYJW689H2zMK2MGdk6",
  "key19": "52pJ4JRSR3d1THt9VeyxMyvq6JvcLesNNM7LrFRaSdsCSFkFP5w6A4Jt9EyKFeMgrkaxRGSBjkfz7hmRZcoK4wwm",
  "key20": "2ENQ2quP6FHrJ6JVFifSja1PXvpcFLE3Jc2e3DxBqHPGcup5GEvnx4q66JTEZuS6Hj8ZEcPYnHPDwzxJin8C7bjC",
  "key21": "5DhZZha3nn7j66REeLPDa6rCQEPUBf2tCH1DjpbP82JXHbF7KbxRE7SnecAcCyMy9cDBUTqfe9GWjoYgMcRQQoPK",
  "key22": "39HGBowsQrwTSYJRB7AidxGsiuY7MfrVSp19hhz7d9HFhnDAoegMJY9nyu79YkcmMwZhw4iBgY39yKjCYSfC4Xwf",
  "key23": "2aZepFi3op5SKxwejq4KRrQCEMBM6jNg56NEcoQe7s1QbBfGVcq1jz1Mt2GgQu6Bve2wnFbryJE1sbbGFqvTbkLg",
  "key24": "2earCtH2qX9EvFvuwCvexBSZpzERdnat17iNFj4MaT5ZJj519ovGVyZSs1Cpo7tdQUjduktqSLKUhKWPzo3eMtRM",
  "key25": "4Wr2VeKSLnt1L2jv2RxuGifkyzLQxQV3LgtUbW52n3icZ1WCwij8K2fx4iAxMP4C8czYrM65NSoYef9iu82XMDAc",
  "key26": "4tG97iy9VmhXN7xjqW72JNZ736TMLURqiMVNa2cZh7fVFW3SBQdWX7aGyM54CYk4hxdVbzmouGqremjunBUikrop",
  "key27": "LkMtYiJpCS9sXjkFkD3htRNUzQbyFo2Tdy7tzM7cFkujxxCEnYDTF2oc4qeyfPtMgi1ZGYcKq4ov7gCzV4M6URn",
  "key28": "51JhuHojpiuK5NjJ4DjaPNuMp6THeYkst6K4dKDEeKMEzn9Hx5Ey181Vjfbbev9j625EReRv2xEK66nvzfmtKX4C",
  "key29": "4ho3GwUvj61QDDPJ5oP2h8y7Rn8fgBvHvdmCfjUTwgBuzodbq8P2o6JhgU5hJyocG8euF6P2mrqohR8JcErFRc6n",
  "key30": "3NpaMdBR4vNZvcGr6vKfApGx41vEafAytb1iY6FE2AZK6r4eok5MWXZQxvZc7A5HNW234ncEciPJQQPMrq24a4aW",
  "key31": "xyYjKXqYiRyuS3Ri2XPgHE2NQRxoojYfhQcb4PVE4J12Kt6vydUn1ZWhiQPip8kL6dFL5TEoEZPrvfMKv4QqEiD",
  "key32": "44KjtgFdax3UUxr7iyrVBNLR6v7wYcTXYX2G5vnroVvewaVGkAbACcBi43JxNt31Ax3nxE7hjsSEmh2bTGZqfktz",
  "key33": "3NZoQSrRDMC3XgutWWEh5bSbU5qTw6bzZgx8e3EubxnMf5YJs2vnnZhYt5SjTdyEg331ATNSb5cqViPbj9suSDjW",
  "key34": "3uoG666HUm4iqS9FoqFGYZbJYyBzaVfya2RKTmkLsM91ZeMfcJk7Bn7KutHkdN7NVyfrRa8F4LcVgej1W1TQys9U",
  "key35": "4rnzF9HpqpQVJSVWZspicjgEUSjzAtHEecpHgwnqSRv8hbtAVgVDG95nmpUPZnaNUQXbbkH3crdg9jHDukt68f84",
  "key36": "4P3BGBFHhwBuUFs6WkkikSSTvCmgMKyq9dontehgMXi3iHnDoDUrAbK4433Ban7eXKJ4ExE4b7kJuToW5oPofWmz",
  "key37": "35wbhPb6JndnboarYdTwuNqGxPFDxgPfkZgjzVTPLHwNMHU5njaeFBVpinUj2BZKqSfhYXqPiWWpjKRyUV8cogof",
  "key38": "2ParuTNBvZUzBGpz6yU2J3z2t518KoZFzt1XUxBmRuP6MoYthpo5gaR3ikrNmxkU7HTCrV1KCLzVgH56UHQ2zrzL",
  "key39": "2Bjtv4rZt5D4nAUsTs111wXJ1WHUdBfiVpHvUMy982cyTvWmTM92a8yqwGEHZpgeqq4CTm8sXMmgaFRPyj33ymva",
  "key40": "662Y55sQv37rGinbh497e8YoiXhsQqnMatUEDiqH8yrGKWBdwCVdCLUxBMYCuSU2WQ9iv8mvA7RvkBZbwMQ3QyGb",
  "key41": "4T6qyoTKBz1hWtbQi6TCptKDaSfDgan78ysjBysgu7EbqXnYepQqdksgPD58ke3zmd9CTFWxHk91rqfqAywjHmTQ"
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
