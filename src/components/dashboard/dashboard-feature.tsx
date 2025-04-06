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
    "4fH9aUS46odRiC3GrNBrPuyZetGKSpotiRgT3yQansSx84dZkqnwa86gifZgS1qxWrQcN67gpH2o8LJzcWHRnJc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fjWvonorDEm3uTTG1VJrXCLsaZD8LH8f9kRJjLqtpjnkr7d5VucoxBJg6GLptQ6ZBUrvgASyHY1Bhumv3aJ6Zqw",
  "key1": "DDdLecxxGca2VurCfGDQMdw6YVxrx44XKQbTLgEFaYG6uvwTmLnAiSBs9G9Lma28vkxncp5qpMDHY36jdxqkypq",
  "key2": "5JXcGFFjqCYsVUJbzg7bpavSwNxFwezuWNj14T4i4Zi2mqhH3mC3tM9qAPFB718aLeWxXT5QkjqEBWw2f4JYbfZm",
  "key3": "4P5Aaap2cnYVq6et7D1U4vvUdQGvwAYsaaQeggNF7ydT64PhjdHctXiH2rzpNjPq41JKCMtZQThuX2B3n7WBtYem",
  "key4": "DFSj4ZnhFsJMJK1Fey6u6fXV82NapikzJMqtGXC7swnXpGks7PQAkzAuVmAVpModJ5YnwWA6zAriwgkT7PMZ1pq",
  "key5": "4a8v9iPY6ywFgSzdgRU12mFC8LvEAZg44EKw3GwJuWvHh8MrJNUbCVQStKdAhSmX5f7hMRAVTg5tU8Pcvyz4Uuqw",
  "key6": "2RoUEw3dQBYhcnCQNm27n1qBdAT5PdMbPwtKNSMjQFuTeQiLz5AoTMgrEWhuFAA581CfPabFWNyxBbfQ3Q3WeHui",
  "key7": "4Lh27o4S8TMToYWTUASSQ3fdqcDPXTNM2F3SJzQvYKqPjThSGeJtydQKmcQJbWMVWfTnMYtR7G19eDytJ6x9cEnB",
  "key8": "2kbooVFieTv6Au5aJKJZEC2UShEJZ9Pvw8u9r4UriHmeq7KtXMGSusEpxNNmtqDoYEoiv31dRw771d5qG9hUtwUp",
  "key9": "4yqd9CoKE1TKqkPfU5PVC1Nd4MZr1LuYAsZHZyqWjYw3jvR4a3JwN4aYTEYYHSxqb8pioiwJFmnkS1DmUt67RhiN",
  "key10": "4o97Wq5XqU6zvwkNSUwueHR7bmFv4iKSKUff5F1cfaFCfz44eeSddvmhmc4JWyViANpwR1ViF8KpeTttTn4adeym",
  "key11": "5CofbvbxFkipHYTuDQK9SWWW9ovTmCrSGhpiMiExvvzSXmvp5kfAewaFAUz6AaHVykEEfpP81uYjEH6fZ1Rv7uJ2",
  "key12": "CoX4RHiYrqJCqSJ6p1TeLe5Np338VUGFVeqengrjVpLr3DsST2vzzLYH72W5zyW6at8bopesvzNSHCPMYgte1e9",
  "key13": "3bd6de79k8TkAfnLzczJmPz8RnKoZ5hNNHFyvV7DKW3i29CCp4RGdTh93XpPBHpkXk1BjUyuRNdW2yaDzXVXjknr",
  "key14": "4FdCf3Va98Q3pwQmhcAAXmpToKfLtBDJ2Me4kwYWYP4H4LtUrTLBpTePtELL18MqBRvNdPrzgr2bkJ2sowmqrKSo",
  "key15": "4JUS38p1ASVQqLYj6iYMhdWxJHQDK3VvdF8phKLLzgZkm45ZPpmtgbuF91Mk9afLMQEJ3Wqzdi9eGmcPLUmFkpXo",
  "key16": "3L2rj5D2nVUCVTQs5S3Gc5qPXnTyeGBbon3RF5GuPwnQmWZ8YXccmpeYkXEMzfkFqLM4tcbHjP9KvgBYaVyfqri8",
  "key17": "62RYUAGAMwET8tKtXCcJxeCJN5y1H7vt69mV5nEsnjDiFX94A4o8HUXKzZ8GKThzQGPGJA8oZj1qzsAv5gJF3GKw",
  "key18": "2sgKQM9TKDK4BWV48y6FmtU6uS7m9Q6AZpc2zrQaHcofA7WtkWDYnm4LZCUFqJhY7S4vGNenxAjGPn5N6vQp8i6S",
  "key19": "5H99JUt38kykrc1dKoS3UfkiXEVRFcxJiLTv9qV7BCCzeUctavi1TVBi8CB1UtDWEiJwnAkyofjfhvcbxC8rt8GA",
  "key20": "3XGh9MNM6QnncF3WDPcMhs25aZ2BGSCf49GSC9DL5VMUsW4MS1cdbh6NicQK8MXyDusmUDHYaGf4wS7Ye5GdbzaY",
  "key21": "WcjwdmHvdQWQUcCh5YSrzcJnKnbWVTWpGegiyU5KyjPsNPj6GMqooHzQ3zmFTs95ka4UaidKzegyLFBJZjL7fW3",
  "key22": "57HQw9bN1Y6boxdv6pFPKZRCuWHxJDJq1rtWLy3TsnDzXwZWLNbmVBKfKx8gZERVdqgriKcQCFqyon4QU8t5Fs2d",
  "key23": "Soyky1VwFYWL9oVeY921YtsciNx6ytw5qecDS7aC1AxHxX6CEp6tUWTPVsSxixkcv3cmtWyVVyqGDzKKVWcmYfe",
  "key24": "4g6aiJmdSTw1AcTjVLnh1oRsYgsSj2bXNXwMnDtp8yjVZmEpK2QsrFhCuEqFES8XPWCmorKPAQDYD3D1LVsWNjAC",
  "key25": "5GzoSYGaLP53PeJXXy1XDujVm35X2NPAhhaWi4Yt1jrX7wZFcZeZgzQEoKYktG7Y9cZuJ11tDEHrDjQL9ZUxx8Lw",
  "key26": "5jK1YgGHMy8td8xKtFN4Ue77ERZ1dpg5bTNjhfvytKpjEEDRNtXAv4dDnznxFiLbD5KA3UhUgmnJhMVh7LFXLrbF",
  "key27": "2LWh7o8U1Lccb8sGySkVXjwc18sVgti5DxRBZXD5T4bMF6vXQLX1xrmzrKP7V2PRd2ThGt8QtAjfN6ZzWtzMwCDb",
  "key28": "2F1kmt121af9iRxcWbsSgud8jQThohFBLRc5TtDMLFv38Uhbf3RpD39w8Cx6UQfg5GCRkzwggn2vwftmh4P3WEQi",
  "key29": "4pMBYLizR9qr1LNDnn2iEQvE4M9jrhwVkVaeaWg9S7rAoWwXMJBrjjdbxv8jjghoQzKe9Vid8TbBcNvYHMfZhEtv",
  "key30": "3coSYo1X38xd3HQvQXkfgZen2TCnzaAJ1mGgehabWDvURWFiFtKbHwAvNyrKFxMGPt5TUps8KvF4dmfAGWr6DwrS",
  "key31": "3MuPrcWjLdMNgrndkwWa9bpnRc7MDhCnixaHEyeA6i1BA7GkxhHYhdcxKP44YLz8ks8h8KVtMTZ2MNLGBBsAeGwo",
  "key32": "5hGRzLdWcKjNwxZDAwieXM3u2rNyw4Q5jUKrvxcMTHzChB22T46KRQiuywch5HTvAXEsUSi7g2bWaBh5vj6Kx2Jw",
  "key33": "QdeiSPKf3vo248G7qpnGstGhqSTJJ8Ar8VQVw3mYq1TZmjQGA9xZ41aHfWCGrpMXKDr2LndyLGkfyYTFZXrx9w2"
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
