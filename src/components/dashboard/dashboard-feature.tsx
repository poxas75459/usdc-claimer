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
    "52vJATbWS6ckziXBXwsiikXUHHBu6gGm4bo16R4EktiHcJ8ynS8TdqDrcG4e26sH2jf2V3JhL6qoSCpKtG2mzad9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHZMfrMCo7dPik7s7UHEUGZibt3TFteVTJc5hQBDFYfk9ZTREFoeY8VeZPKEfZrXgq8rScbr6pNVHugMdrNSz2h",
  "key1": "nGmBi8Tj7juNUCbwPChNxRpw3iUt9NuvMohyrcJ3nG6XgJpcxeK6n2TfcnYoZMNt9Eho7R3W8t4G8bb7mthUod5",
  "key2": "3XRybRSdivBz3RmXkZxsDZCLdPFsZQicVpDXEYWnmywuEhk63yfPgimUnkG8k9QvqqwyCRdK8A3PZX1GRYaUfRXG",
  "key3": "5uek6gmH6ozfcS3pxfwaXC5bHXgYnemyZah37iwYdmqoAzzrUPEFenM1Zw1sjAVCWiWsmsFFMfYcp9YtmQ3koMuK",
  "key4": "62UXHfaSyXiHdgbaNfZr2f1wWrS8shUwRUYi6RfnGLK2eCCTuQmn8HYoirMfv3mVU6a7ZtKXw2YHotMeE5tKd8ve",
  "key5": "2HZZFbNBDcA3RM9Fi5rRz2YKmrHL834Ki88Yx5xsJwnLXiJSRt3YKJNXDF6HRYZeeNn8USEsNtyYqZZ6DBYQELL6",
  "key6": "3Nb9ywL2PR3rkGrNVr1ecwy7D7gf3HVnnJeE921oJP67qoMW3BT7KB1ktcAf9g8Ygd1hiUztFyGVsKyP5PZgE6PK",
  "key7": "4Yp3aFEobtawLqkcjAZj3utJJ47LPKeqJEGhVmJr1FpKxNKCi453fE3HSKnda3FuJVHP5eH94gFg3YZNQ5WppdXc",
  "key8": "C9BVMu7i9zTJsKU3mGKpZTdsMaPxeNtCJdtwBB1hM7bGoauj14ZpZUv3WwAEpa9AtfyRvgkRUfqELKM9SSqdA7D",
  "key9": "59c2kDdbw5t71GK7AxNbjgT3LFNizk5SjUoPSUVipoXQuyxaUfBemwCDjWqnHWXxUkWHqCroSe1Vv3kVM3yBufA8",
  "key10": "5NqgshFTzewDoJypoxqV5T25VjPp631519oJQ4Ac7PdC3HE8U7vpwMQDoXqnuzJDdhVyTTUyRgTKiQjiWQg3zG1q",
  "key11": "f8RhsLxiecVH2T7wZktioHNsbyKzvH2BEZLBkecAMraH79stZ1BhTtFHiSk2BCtkcMtqLEm15H4gi4QuAAqq19d",
  "key12": "3achDoRYA74bmdmU4z2XPAhYMkJV6pFusjikeymGmcpLwqAmNFU1sXcxDpQLBjhUAmE4zVJVZ8S8rGeTgoEpDrjb",
  "key13": "3oovmqHUHRtJo59e9TBk929H9F4xkabNSsctyNaqEmc5pPGf5aLB9uruXE6HTZuj9UsaeTZsXBQDyMBBWsgQy7Ys",
  "key14": "ZvkJ8iDM3NGcDfDf4ak2TPaHWzqEJJb2Neqxu3aSnPFN4diRhNtNxjcpoPTWnVLWohqrg1iY4SCwqSEgLyBiCEZ",
  "key15": "r9RW98HLWQnwf689zoxbvttaQEmjahVhAyn7fLxGTb8gsYpF35BCLZK1gaxtUPmDX6YEyGRBHVGaVbHxydrj7dp",
  "key16": "kY6PR4atKtRA95oN4zK4QpQooPAydDy3MAqkFKdcg3z3PYeVdMGktNmorMitEK2Pg5irfnn5gmpSnNS9t2HD7Q3",
  "key17": "25xX7u4ErPyybXeLaZTL5hRA3TtFYJeKoLwdUznG4oFE2RAn3rpzpDe5eQNBQ1GVPtEZ26G5BCFVrHtqWESSFmy7",
  "key18": "V65evxjMjRDTq7DNXSqDTLHrJ8eu4M6iUigqa5ueZgref3A8dedQVFQKsDsomhbCoBw6hHdjJyNPW11yz6HWCPR",
  "key19": "5wkUxKCvEyAU4gZLYTpCziDMdW64brUxNHBE5YD6bnmuHfXuj3by4j1w24Nxz5SbWtfcejaj1ELAMtKeH7FERCSB",
  "key20": "24MYQ1DpvtvcPU7p8ADidT9tXF9CjtKVC2do1WA3UpKkjScg7v7ANQrVLQTvXRBnHVyHKhw5oAGJqX18xXiH5w1M",
  "key21": "2oo3qjChdWVHp7ULu58fkTF9NXzsBKWCsvq8QcBhxRKS8w2nJf61HasGLZTJtyzPPABjDWzf976mMjCUANMRhuGN",
  "key22": "2Z6z9bEKxVzqdAfW5W1VcMSN3Qum1TXKWQA1NTmFSfExJj8gF4qybm6Pao3r8tksyWHAK6FhtcQVmcmf3XLk3Nrw",
  "key23": "4WAc9tjvmF7wEqMdLsdXzpwi87YvBFep2d92tb4trzV5qty2nM4zsfJn8goeri4yfX5PzBH872xaEYUqMpBHY9aK",
  "key24": "4bTRfCXJcyoVzmSFxuw5gWqpwVaWdohDtTTPvb7j9FzpuP6V4ZQDh21ZiKrUtMLoU8XJ5jRYdrXUQp7LKoUfXrmy",
  "key25": "2sCjVzXDZV9u7crfw4omDmAMpdVSCiHxz8TiFp9zKDi4j5X1L3cmXUEKrKxGxqP2YzNoVp2EML4m9n5ETLNkGWFf",
  "key26": "QK4LSd3rE32SP9ZLTuUrALYmfQ9Vd296zDotv7McTb8eKpncV2wEr75XwKsni4V8jSnd94aNtgmoDVZ4qx2EFru",
  "key27": "RG3heUYs6eAsQ4AEg39PyneExpPQwXCuS7jnmXESgMsJPcLyjqFQsP1Gi9AGuwRziT28zSCvgsbVHbxM5cJXqGg",
  "key28": "2u3jDyWsf6xZDisfVttucobpUW93zuZ3ASSbaLitz5mzcjNi1NwFS7o9Yo3m1vMkXkobT4ojbAvYQPkeRqvbicfK",
  "key29": "QxZHXV6JceXGfEBGDxMGNHkkh6pvBhL76DEUiar5XDGdUoKG4tDQVRV5QioiscEykoBdziHRrP5EL886xXGJKye",
  "key30": "4UP7EsQ95dp1GweQ3uZbq3F1jrywP5H8tSGSEuP1sVeG7vRYH9oG1cppJvQ8E9AM6vZtnppg67DZv4LcbxUnfPZB",
  "key31": "3tWnzXwXG5wYdUz6PTT8ZXG3WMWvwzazLQBMX7YgeFd8kTQsz7HfEGP8MDS3PNjkHemfZRmRxKPoxnP3RfRupzf3",
  "key32": "5bWyHaHRUTGLyn5VozsAashDkVYaDPiGb3FkLrqzqPavjcd46uEiUbCzYNDJzMNZoHGiSGg1DLRTj3YJ4kTb2PoJ",
  "key33": "4exsC1CQBHkTK71HSmDv3Y4Z5fQMJkPqYfiByzJCCd4sHKN2nPBP1LqZwmBaD4AowMhRuFzWMqDMoP6ggY3m8sLu",
  "key34": "kJvQsAbCEeS6uyjxbjnk3fGVLpa7o85jTZR1xhT13FtweSazqhxnSPrshzhU3MjH2Ryzm29hFyaK6HE8MyrYsDU",
  "key35": "5YYGhzBJea8hMwK4f9xSkauziNE2ki12VeBfVz19i8DnW8hLKFtFj75dqZmztZZ2gH24Q8k5MvpimZgKJHYDut7J"
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
