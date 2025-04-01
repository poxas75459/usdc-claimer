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
    "2iVBN8UBjas2SrfT9cJhgPtbWNgWqFvSbNbRy5WYtRGq9rAbPFYXfFZUrpzo14Z1gd8R18BzSqaQuzXnda3c97Z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wS1uZJvay7EKZrAVzHi5i3dsw8XKdZcuTGbDwNjy6P6PoHzEN3ZtMeucViYKALExExL9uR6chhBCN6zNyst8DGe",
  "key1": "47CsGey3VYzXevX2MrsqhQgH7Y7iSkxnmbpWCa4cNEagX1z5WVyT7DpD8zYX14RjaS65YGPSg2avpppiptbwpNbp",
  "key2": "36ttGGzrrxv9T6Ujo46ZsikNLLgvtGVy4DEhvUwCGxQorSXPWxpPvZb3umkbFLjP6RYHfFzHfG6TGNeJRm5omMVG",
  "key3": "3RTp56bZhRSGyCJS3VuWjCAuQYKCAhAZeiA7hbhuAG1z8Amud3MpZkGnfCH25xJ7gEJmJrY7FrcKFEe34o72fQvy",
  "key4": "52mh44Xk5vXKjDr6Ny19htpEUS7F1DoVenNkcYE21cpiLkDcg9kQ8UuDTgTKBx3DrZm3nZM2zBRVAZZYBrPTtSBK",
  "key5": "3iqEgCBbNDRE6ih2Lg59zc5PhFYWia17Fiznah1pX5u6UPTEXfBi8P3221C7iH2KVU7jJ2BaWw4f3988m73QgdKH",
  "key6": "Swj7E49ZZ4mWMQWVxphhqYV8VNF9XcJQbDaB4hurjCoF9LJo6MDoqifKRPkbJw4dbS4HZwGfUBHBhEPXa1EA1dY",
  "key7": "i6WPfa14YUERXhyoE4G8e4dy3RGcj294stq1z9XMWMxVJmprWCrMMBRP7E8rCmeBUYPg8Dtvag7b75mw3MAdipG",
  "key8": "2s8effpNKagsPTVtoF8HDT1KQ78qyEHXCChmj3TZJfcGawHkhvRLtouAKvRVRTwCAReCwW3oC7fmNH87epsBWN2U",
  "key9": "5RvhxHGrzTjNLaCp5bvyEaszZS3qXk1B4op64SGwt3NPJEiJBYSb74hyyUwda16sSsmJYgEEWepkZao14aYi4oH9",
  "key10": "4Xfzn9tB5A6L4ynkNH1W9bvEB4b25UTXkhGGewF38GWkjoCKBDGV1ysQhQQatvJcD4qzDwTVRoDnShzwQCSzZQQr",
  "key11": "4qpPf1RL8JVBNrjZwfe9gJVBVoqsy1VtZWdSErMsHF8TrNtqa1U3553WtfK8DGF2YD5LvRbEC62EMCXUxYwAXyC4",
  "key12": "5r4pxBscRvu2NFQwycuHtZdvM62kmaxM4WYYAzuuZB7XWNxUiU8sXcknyNPWYPmsraNdps3q42DejEKUBwRoA5eK",
  "key13": "2qrWaEVdZEth4nXb5frcdfzoQBbxqyQWeYiAXTLTzWx2Qo7xAu2uAVSVG9t5MFQzHnsYRZKf1fhL89yRoGmK43Zj",
  "key14": "3CacbxJxkwsNMSgiMBGPoi4eZKrywLp4R2X6NUHHwuipcCKqRq8cSKtWji9YgG8pjZm47MTKJCTWYw4wQ52NbLF3",
  "key15": "Cpks9nFFFwqPoPEkEUHAYq4G8asCDwiGkUBsDAm5hdYnEokUUMtnfdhUMmBUWTYKrS2PFnpQJ4t5wHfFW5ixFHG",
  "key16": "2rZXEyxkTd5LdFBVuFkrJ5RBPmp2HnP4XyYPHGxiPQJhCzkyAc26fNcKFCAigwBG9Hx9dQuHeFj3diPaukVVB5G4",
  "key17": "Gk6DC8iWoicNHBdem9ATv9s8FMT9rTd1gkkwPeuQTkBbfdhVsZDVrL8SrzeNJPnHtJKvqyuXpWaVMCHLaLCYYpb",
  "key18": "zQoScUqMezeWHCYBXXQxhCKejZWiUVZho76PrqFWXJ3YLnLF2pLwQWu228kPsjBjrgrjn8rd5EnFppzjpgQ9NhC",
  "key19": "2a2H6JK2wqBtccFvtHUSsBwFxXaYE6FPRi44LGPERHZPrYvFohksMQW4UmcU38GCnskZjmcYZBLHFnjUz3Tu5oz8",
  "key20": "3PBGbRPS3m2AzVBHF73zUndhN4vzF1ADrCmad3TW3GpZvMDBQEN9Y9HygAawDGejsXZTysexG56pr6qiotnAq9Eb",
  "key21": "3BQEJMfJx2yyvTADEWREXL3HjMMTGQAD25ETBsX28EV8V7dViNqs7gtnjjsMGmW9Au3cisLxZ1fPv66dB1T21QCP",
  "key22": "KaMtFUNRTePzYfV4WH912qLbDJULX1pCtJjPYWNVLEkNspyLCjoyvYwocZCjouaBN4DBbxt9XyN3dHXn6fAWEop",
  "key23": "5CKtRU4kDQfTwbR3yJ3K2Ho9QDuG6q7NNTcts5yHpBn7DV7bXD1i3jGfwVk9uK2HcXcQL1y6abbkrNf6WrY6623k",
  "key24": "5hfrzWJiCiQNcgjvnoQPpHMCTcrGRHrbJh9RqcnVSrxV6LXE7bcyk8aK7FaEMtNQBzv3SnSbBFhhjQx1Wr5DR957",
  "key25": "2fayxwo11EzG4p9fyq4qKfM2MYbnfgf34oHP6Eb1jFNrMqsggySMEhptjVVhLqgXmvRQ7ECUpqGk6mEHbjEkkowz",
  "key26": "482UoSGsvXo3ixe1cqr1NKGuoBwzzQC2iLVj73vLbYk8uA2Zs8HjjQn5mL6a5BrP5REqm7qojqBUDW6Ei3tfa4o8",
  "key27": "2F5DegEj7b14Nm4Y4g44a7VFJ6rmsEVbbrjw2haSgT4wvvZdVors6BvzQd1T35BaAJPNB9Qpu1juEa3bTnGPfABw",
  "key28": "wTTUtViv2HpRqSxxw5MccNHxHM2ivySKrB37HbhdWBiyherDFgWiwog1VwTC4XVJpR3bExJHU3bsYQLnhYB2o6J",
  "key29": "4aJpjJk8exsjerCGwm4o1PeaSv3T9hBirhsZuPW3g8iuBiGTjFwED6DBJZuwqnYv6C7u2x6MwQKvCU6WLF3qzuDY",
  "key30": "4LBDGQ9U338EkPRgyBWeRYpf26wEYsaiJNidgyeUB8ogb5kF7w52zs3QL75QbFrCJggph1tXHmN66PyZqpJaDG5W",
  "key31": "iPijE3Yabnyrey4MjpFgkZTq8vXKtCHpvwLJJfpjRei998mhrDoKWYC83JBwXmLKmGRQnsYPYvdrJEHnQSCpzPo",
  "key32": "ZuXyT7zndkeQk7UXkkUiKsTHnnjoz19vFC3Si1W1waEuvCzDMRQP9qJYhWnvW8L2XSv2cVHRMNoRZoVCDxViFer",
  "key33": "5AWbKFFcE2UsC97uPLsuVvJN7vTg9BiHUR42xZCtGanzTcBjbsrjBDPJmqzBLr67n4M7KA5nCuMRmiV7ZDQJG5JG",
  "key34": "3QySieyE5xSJu79zrayqfHadCBLbmV8AZ8d5MoHJP4nFroz2sFq6VWo8N4Rdq3eBGSWa8aAhrVLKxncdec6AYZNR",
  "key35": "48i5Zzvz34H6wPYKXXeLaU7Y22vP3LNtGfBP3K2iVUE4DhypYBqPv9yYQ3oPSqYCCuw6EYWnRwZHE5VtggxNzhxV",
  "key36": "4QiF5c7ikML7aksYquYnMAPWBVLziFJ5eJTs15djfcpehjzV3A9kbop9PiJ5tndqBv1s95WyvRAkuSfxW9XiEpBH",
  "key37": "3SUnAe1xM65JvyiZ6pXECgBvdxj6CgXhs6C4q8khkXzHVJvyWBhaBpmpHM9aYVQZhy1opGumn8D4W561zVa9Dnde",
  "key38": "P9XjYvihoQKbN6x8v2b1iikZ4m7QBMFVYG8aCo3EZFSkGvpu4KSvHBbyxUCpQUNbZak32F14rKno9Sqw3D2T2Gn",
  "key39": "6wufsHib6FsqmMRfazppiJWzaZjAL42SXYwqRm2qP34rfPF5mwhApx8jhxCL77Jvsr4Mondm2iTs9Agra4aufnv",
  "key40": "3B2YzPf39cXB96NSmwzvwDgwg2DJAzLgCY7LQYN9tctiopBDGMS4vVhoG3g2PVCThQbThiEmy3mieEK2W1e9skmZ",
  "key41": "4TwwPFCCefrqLCmWyiBGa8EhjQ9JSEDa55xfN3PW9FUTS5Ca3SSAULNb9Z6WpkkAask9geUWTZ97LSy5dCxZ4ze7",
  "key42": "4WPdWVx7B2HLyKjeHyDF5h18DqgcehMjQqHwrv6BR42EW9jGCMjB4drmnyStmFdvsrFacfge2UgcWMA5geB7LCmu",
  "key43": "2VYEdnaEEHipYiNCMySg2smYMbnABAokSmAxfhd6EHoLzd3gQ31LmBrQyLS9m397Vgt1Lm6MEhchSrVQh5S3DS8p",
  "key44": "62Vt7ZkrCqMXGkjF2u4iqerB5PBJ5xRhsA8KDNtst3oWHvUHB1ZJpmxjdbKYmAAhGupcjVSbjB2bVNmjfFkV6PGn",
  "key45": "5CPC1jeKhB633vGg7U4m24qw6Djxmbdsp6vHw5tUir1J7sKdS3rCZvupAXk42uaSrZZbvD4ZHzpFr4sUCxoQxzuy",
  "key46": "4v9xMxoB7ssbrADpFBmQBLcmuFrgousnoAmRYm5WsKMAkFKvTA6fezcMLk8vWd6mxwPSyVtnzs4vAGSkg2E6tJ9L"
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
