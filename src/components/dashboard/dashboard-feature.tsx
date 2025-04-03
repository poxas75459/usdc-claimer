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
    "Lxanwo6i7UfZxEFz6wS5XwPbvRuwmebUR2D6s1TbuF9Prr2WpatkLJxneWVdDb4UgGpPRyZ2XUxoMM8tApGrVi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wi494u5kHynfTxXjMwMZuj3mU4NYHivMFWu3SdBpozaKm8Epbr74HRMyTW6MM8vdqHNGH2qEgmJMEPWyYiL85xP",
  "key1": "52GxPp15SpApvYhA66JyoYdg5cwYpUKU13oJwGkp1dUs57i5HzLBgA2o8NAE1yJ6eUtBmmsZ1bGk4P8ZEVRKbowp",
  "key2": "5Xgdh5B1Z3V9vRwQzrMsK2MFYmB9fDZwHRWWGpc5ovhDu4U1SxKRNoUuzGzvzVo8mAdHGQTVNoAWVk3URJ5pp1SM",
  "key3": "d1NamKRkK75bg8B6nB2xxSZ99Aw1gL89LhpGuyum2GPb63vY7yj1vRPQZUbCqzK9186jdHjf2SzRZhmW1rk5bEk",
  "key4": "5F8F7RbySMVUxmwxQNoSAPb8nqbVKEcjsETA2fiETdHUptPLLBZLDHxpGMJU4TwDvVZAWtTPUAms6yxi1ahRGF2",
  "key5": "3i9X3dLnHudchMhPjaCgW6jSDsQGVV7UgJoaf6eyMH6g9ezfszjs49aa2k4D9PS6jKNvJ9EypeDBPjCzkNAuRnVG",
  "key6": "2JMXBr2eWRJAEcfn8WD4TPwAVHdVado3AtmUwYdDFzKzqAFfAGybXd161qyEbtFxStQW5pdxPiVmmHiqTia4ReLH",
  "key7": "558nXvYrErKqGW4PuxAYqjSTBkLjFGGbnYjjus8jjWmYSys3irjw5ZkLMuTxAmN2vLwNHAw7XMd9iZK9x8VAN6Vu",
  "key8": "4ko9znnMSBmkecet6A4zxNmbwz1aJtkSr4L9VTf22noRc1AvPHLujvfasWrzrBtN2xtqRYqzHaMR988YCt4kZSvS",
  "key9": "2g9fEjyWetcsgYmGQs3cgykAnRdYvngMpfb1h69Zkeg2ahtXJKo7XGqukHwW27MmxhB8rSu8cu7TpWapLxd7xPMb",
  "key10": "nTcVF9g6moL2bbikAWmPN5SMYyG3PtqbT1pSgqKKgkNJ7DwqJHR5iLAGkhPbUga53oHW1KLbU7Li9f1Yi1pajgF",
  "key11": "4vnSeFxgtiB9pVGEcnidDUgf3wBZU3KHQGkzXzftHL6cFHKzhRH9UaD2K9vL4Dcr1PjXVrZKpWZBdRtnf5qwGM8W",
  "key12": "tk2T5kVFuUG4TbF9anwuVt6rhiHJpDXVWVNJqHUJY9a2AQxPCPEMFroZJjyPcT4xhTWPDWLD1Rt9kfwPGCuMex6",
  "key13": "4oKUkCk7dhgBCzfzteiEtDedKYadGxKSKgbHuZ5mYbjrpRCCcvcbiPa7aygxggn4HK7ZMD9QvuN69GopgefKYa2C",
  "key14": "23xEHqS4Tdn8sGcwc6jwjDCwGpL6DMrKMhB53BeCWYyCVxX2Q5tjCAgVg2WkerSaSkx7yoF5oqimNEfDiFxxepNk",
  "key15": "4SQYabtEVG9QXctNcC8d3vjs8DwWnt8DBfb7PcqKKAznce2FAYnzT3aHTPHLrcrTK7LTZDt9XLhSJKkESVvkuNqK",
  "key16": "4ayL6tQ2cknbynv5fVyFcDhmfp7TTrjgzoeK6KDUbVz1AkzTDAt8snnGKfWdLwDdTYWx1vCFjwX9fEuK6xwhfNnp",
  "key17": "2afztwd5HrAXTzJ8nh1YZ51mL6BkdQbNmA5UsoDGpPBeXoR6VqMrmPKD8p3Zuu5XH5BbDCbe8icN4Qqj53geTxue",
  "key18": "4hbnixED7LQGzkWJEYx5pacTLSrgXGDhiPABvpfTQyYqKEJ6TLLMAVXFSjU6ZDVXNctG9MsA9grfZx3CLYdWp18k",
  "key19": "3ewaA3H7jKH9H7N6wRJKcY47ddA3W7sTJP2LGMPiJKy1XdCVcLqWuZ53wm2w3dS5YftusUeaMqgWBJZDK86MK8v4",
  "key20": "2ZMjBzY2xj4jLrsECfiGa3t8QmQSsDKXA1grTvxuSHEqdQBT6iyyynZrMLGjuw4faW7LwaqhMwpJP9nMXg9GXSJp",
  "key21": "2Wve32XABcSk3j6aGidiVAjqX9ELMqQVBnndSXDzVviyQ4S8o7WFY9AoVXsS9Z3ktouB4QyKkJJgXbBACah8eJHW",
  "key22": "34ayVahUsGCFfdjcpLwLzJagiu1c12wCt9NvQ9Jd79bSXJFeUSkYELVgHZbks4gWKA3GdYHNNHXwGtqjaizBB3Kd",
  "key23": "55AdvdXyiBRkxiEXBKZ8kFVZ5GDH3DTpUExGtaHYNtBvn6bUQfjc7w5sA1mh59mK5jkBZFv1WqxpCHaM2DJqbuRk",
  "key24": "524treixS4YQ5gzXaER3VdEXwwyL8XTmh8wdbgp9kVFaWRi2Huj1iERkQsHFvn16nvgHLBjKhc4NM87GQcN8hPC9",
  "key25": "kjbyv5WRgsueYppCP2t4TF15D851Mkwh1LMwnMA2w4GkWVD2PNgkgqbFAqhMqL9ytXHDs1FQjgarahwBCVFA5ZV",
  "key26": "66uhWXPY7YghpwrbQgy6EG9McNfba41kbfChDJJ14CMDXfwro3tXcZM2x3tqSjxMAL9SAanPox4CQh93cGzcQtqT",
  "key27": "3PSBAvF3h7tz9NmkhmXSbuyeRdCF1zjidWJuYj62HWDtfRLM8bUuVg9Wtp6J5BHqVYSQRVDZrGCPU1eN14Dm1XnE",
  "key28": "5gaWL1kcWQ6yDeUPiTLK567UCMfwU2kLEDjrPJSYzHhmywa4kPvYenVPLspiwy1xrhxBsVhnntXub3BTShEuoqu",
  "key29": "KqpeJHEdUnPm1HugTmhTCnKJ83zJaYU8DyLXRqwqgSazeZC3ucj96YcAE4qMwsFV7PT5uoYPqgQvEXjcGCtE8Z3",
  "key30": "3c3JYUAVG9ZpKxqmFCDU8PhymZAsz4Nh2VRuYEsTX8quPB2FNNeTUH92CTTU9RHkPUyAa2RS8gaHgVi62NA71UN5",
  "key31": "eVzPoThe5dBzKV66ie5ZyPbJ1q1MABXi6Y6as82qtrqCwtX2P9zmXQsS72oaPCNXRTU5aKzX9kJvcEMUnqWt1ce",
  "key32": "2fFEBqpAoZLW71mmzsPeJqsxyK9SH4vt5cDTSwhN8vsNhsTt3hDGqmaXZUCVWyxexGTvhLfmfpNRvFcQ4xg7eKQs",
  "key33": "65o2vTZXGWRHEBoD6sFjgTHmXvvqG5s6nWndmj9UE3yX3hGWjCwYWAPSDPVpDTwYXzDNtWKPypjZ9sdyYqEJZUbw",
  "key34": "2wTacYUbaHGcVCaNTRjkEAEXUatYZnTi4xy4e3YF1WXQdCqjgfphjb6KuZHTS4f5DCoVdSdrwScpBNEr5gyHE6rP",
  "key35": "3gtH2QuPpeksh8zHqBNQpRsQuq8BRZ5bGuaJkdZXsqGwrkKSqzm4NTrZnF8tvf7v67Gju2bDduNQh1x2TvZpRz42",
  "key36": "3T2LSAaj7tvuRcAatWJaMwkPmHYdmesqBPGBY6YeYmK36CsD7LKfJk7Shyn77vsWS55h3bMYtTV2Dpc8s8vK85CN",
  "key37": "eXRdoTmVdCygqf1zmSLupNmcDkMZmRFqFpthBSEyvDwE18J4pFfkbzcyrMn4LBFNbCqRZFwfCfR8pXLAadznkJX",
  "key38": "38iydWm4ZfkKEjNVDVM6qYy6zjjHhKJfVw6r7vUhYxxcuoFPnZte8KdgEZVHcktfKEe1dFkrsjvbQPaMEvdnt1qp"
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
