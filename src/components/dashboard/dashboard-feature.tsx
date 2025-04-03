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
    "4ndztfMR2s9Z4kCQuv8AnnGePkrHdujCnhLxzxttedmbtcgSwBcxvS4xV97pABXL3cAu4hrogaPn2hT2AaayfuCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoExnNkw3NXdvps4T6KizKSDvenAKvnYmF1ATbsSfCRqYju6hWvxkuGiYHq9M5oQ2LvQw8M2FxrkJVBefWJd6SU",
  "key1": "4QuxK16Ac1VvdWtm8RJJrFZMer7Hk9Qyx3psSEP1CTofbzHsMkfVTkyQk5uCCaJZkJLyniKLYiphgpdCztvknyTr",
  "key2": "27mibH69ZWmi3dR4BxZe5hEb9wQx9uckYcAgCM78QCKJcziRS7QusuASyivhnK9jyfgTbe2e8DgMNvzXHjAsFVh9",
  "key3": "5BuMA59X2cisysWHmhumNT5TEKeFdFTkFLaFFNeNducAcXsWohtfFL2Q8EUPVVLogFusCvcW8dGptG4apPNKnFeq",
  "key4": "aLd2Vdwo6WLoPitbapZZLfFB94AEB5Rjeo4i7MKGw3Qpi9dQKuCnrsg8PdxkDFDsMjSyFgzxbpmeJYaZTnqj8PH",
  "key5": "5izja4oXkHsjiRCyssCJLQftufjdJvEdmyZcVxYkq8FYTssAsPrbuqCvE4zCZbr2AYAAD6AuydaMw6Vy24mGaUdL",
  "key6": "XC3QKcLuVqiQD3xfxZ3fBWT4n514kpEZgACa1WMMFMEvjiDrvQM1Uy5fQxPhXRzqgKXbSVZqDftJkVQYxv9dkys",
  "key7": "2AJEomCijjG5nacfjmdzez41C1Aebq39v9xA5QYsMTRsLzv2JKAHe1hyh1Gx1R8VRMDBTgqhnp2vBCrmhyavTUck",
  "key8": "59rR8nAZmraPe1qmmdn6xh5zdCQ2kkmwvsU7DiDoxnGrf6AhTYYwK8rD81j1CK1xsTavQJTkktuNFeJvNuSrYEfi",
  "key9": "5k56Q5PN2dD1jtDRGNZFo37m3KQMRMHCAReTRDy7rYvondEUfpL9B9QMEpacy8hzXHEwiTJyfgPs76UA1V8sddxF",
  "key10": "5rG47PAaaXyYpmmTn4KV4AqTxSKqNfwLLz4a2XFsKizfz9L1TJL7cfUsnt1Egp13XHpdJE1MuqC5tQF1RZSa4j7S",
  "key11": "3yjRBe1fuXgAgtHE3N7MZPxdZHaXgrDACENsYPRk1b8kMc6zLKPZyJdGK47Sr3Zv7peKBWj3Z8QH5Ztrehb7nqng",
  "key12": "4qHtER7zZEm3oKyS7shpDWY11dgcizAmxhMPkhUe97uokUVyhVEmYcE9wwHSNruMWuhMqLPnRi45KEmchuhVfCTn",
  "key13": "4stGkGaFtzPhmPWAvY9wnoc93eag5zjs2CYAcKcerga3ApmFWwnHESVSXCRgsNVo4Bs9w4EPnarg5DkTAAiN7oPG",
  "key14": "3yJ5dwnBeRthV3DHXuXQNV8iWkE7mty9E6jrhPguKV9S6eQyJMpGSwoJLb6t1jF9QfmKZDK2n45QBaBwW5La59sS",
  "key15": "wtjH6qCM5zHeeLgj84PayHVTQZsGsb3MKFXxDKPYLWekwQXbdba1kFxuSvrbfGFiqxSmVDxetE6obSDcgzckDwv",
  "key16": "5F3jZBUogcoep67gFBKGA8E94hQGVk2FnB7dQCg8sJpiN1AbxUNNmHACypZjStMeTU8gyoUekL8oiSSGRfqNczKj",
  "key17": "2ULwtqbAfq7VN5UdWuUWgZQPzRg3z14GZYTgRrcNrV5JAGsg5idSKSyb179QJiu4wB3pPq4yKs7eji99wnPnAC4y",
  "key18": "4mTqjNFVLVQkWAknkmn2uug2nK7BAn2GCSNB3R6hykYP74RR1FKA26HmhRoTfQmesPibd7yDpjJHSG7oNmEBVdLf",
  "key19": "98c5cPm2GmtdbtbFRYkZSUjwe2A3T57koVaC8c51EFZxnEKLqEo9QtbpEJKkP3STki1GPSTBjqRui7xFUhG8fdn",
  "key20": "5WJQG4rFitw6spwtaEcg49UWyA9jx23a67AdHDn9WiwAow6QF39VtGsqYCsWdvVDC4dkYbueF24K3k5K5ubMM6qx",
  "key21": "2Es8fRavqXx4JGhASuGTCkeXHRbX4GtRUUNnQhaXBZiPXncamHmUnYbvvBpFJHuGya8ASSGGDHvP6HWecMon5ipX",
  "key22": "5hDaKkaoDtjvZ3cD4J4id3GYiUG497hNhFDAwax38QHb5wUW7pebcUucg7JvJWp1WdG8zktTchuqhj6EuXLfzwpc",
  "key23": "2oM48UuzLkrxQd9qm9eyK5mVCZrYNER92H9RNmTP2BeTtwtDcKyjBxoTM8ggQC8CEZ38zNRXYC96GGvwmnDS1Fnk",
  "key24": "3JcU2KGacroHEwD8KS14yCYduj34VVfqr4es8rKgewEnT9GaNQWsYVJSge42hJAreQ8CEtmpcGoqDji48jaUFhcd",
  "key25": "ZTcML2SEd6zcppWF8CLGHt1Qdv9GwwQZDdr9mg76fdU5yZsShwdAGHkncBzufTvC4RFPhdujGuuxMhhQNwLGq3j",
  "key26": "29sdu82hzTNajtHBXWYPRo9TCGuFqbQXyQqoVpnhakkLimwB2B3cgHyYMNnGQPdtpAofwCFggzuvX7FjVPLRuXFg",
  "key27": "4tZiv5A7NZrHwTCpDckuG8w5V3RzdHrSqdVQTUKjhKfqZ4EyFpzQ51LtzybHoD9EfPNKmX5XxxXc2LYr52TTfXUp",
  "key28": "2TYgphbvF3fkfxEPQWcWxoPycQJfpG9YzYSz3Bt7JZN4g9q9Roxcom31K4Bgey9mRsLqmoz9sVP71iRcicFh9Mtd",
  "key29": "2y1APh6HV1Y2XwXjCaJ6JKFotEshPXPTSRHFcLXsyAGYFxQZyKNHJFPT5p83o91KUyMQjnEgTAQTP81MzRs7KXoP",
  "key30": "xUkZV8bcE5PU1RekzJGZr6CMyuJGD5L7wbMySqoBNTLLE7WAm15pA6m7Bb4sEEP8aRZgrcvghTunBsfyncCoyg2",
  "key31": "4hnJJNqtVhX8Cd7TQhpjq3Q698HB5kEQbBr4dssuur5uh7PShUhjoe9jzw2Fs3VPiVfFd3d9VzmVPMe8yi8Z1qoD",
  "key32": "TpcVuZwr47oaoZ7e2C3ueb4Af3P4pxreYtPHy1DQJFniNW79xLt9zTmD3y98h317HceDqGTMbCc9BGsYnvU5quF",
  "key33": "54aYHfhiguYb4hjUyz4GX24Ki33MKznZ24zApKneoXTUkdUGfDCELqqVK2VpPUTy8MD6zcVDQ7VvuHnPPHzz7VsE",
  "key34": "Ha4JHyyqjX8PLuqV7gwuRUtbusH4UdcpBTUKHBj4KRuEYABSgZSuCmAbG3HoiD9gYhJ3zExPZstt7TY5aT9h9Fi",
  "key35": "4896kQ7G5RPnDvHLYRn6A65ySm8QEokYGt2esq4JWJgtEfCDHNV7cCpnZtmaSQFRV9uXVArCaHBVxncoZwRQbBTk",
  "key36": "3ZmBHrkCz83oTZ3R5guQwkrgP7nZtmLfXuxYKKV69uWmf4ZNuzbUMRx3jpWqyHD6fd21Z9LAtpSZxqohrfUqd8i9",
  "key37": "4dmQbvdQxHpC4pg6LQYnRMjJrk3xvFL8sjcD18upYHskoU8XqxfDuBQifCKAS7sVRH8SwwHxwzoo9MDFfuZ2xhCy",
  "key38": "AjUDzfsxAwNjW2QoGspY6aP48TaChSzwakF2EijhVhYDWWEKFDhPBmRaeTeemVggGZnXYSQuhTwhzTwhVSQrt6M",
  "key39": "41swiumAeppSWQEMj2YNjf1EPzq5mBc5A5sJDYVfRGmnTxzY4oPGzWGYgqaUkEU8PqvWuqJ3hvg2K7mxiCuqb1Tn",
  "key40": "52F1Q6NmAgG7T5NPc2QZBSdBKf6PGGuntbzrqGnCpiAdQUaTuPgH97TjF3xbsBb4AcFyxnfSZ4LLpv8uwb9X8t3b",
  "key41": "3fVcPQkPB3TkTjeW5trUL7MocYE5RkuX4CufLfe6kofMmrKks6kGfzFV9KqdpPxgGRc3cMFAZ3nZ4jk4NbF8e6Yt",
  "key42": "2gB1vUbDYZcLL3Duef4WyHu5nGLYFXuPMiVoo3CTyV1VSqWUVjeYuKKMAa4aENijJAy4tJd5q3e3zUje73TFbojM",
  "key43": "QvEs1EguUPRdZm8iZnPejeGQunfUcWvqouksYLE3PGkeYmYUeRNpYrcXEa8mnT7EyET8E3V2PfMMF8WJ7q2NHvW",
  "key44": "5t3BMaHp6Sn2TYqChywCMGf7rzFhx9f9Ted9Wap87LGxE1k87FwKLM22VF8iM1Q8ZjhuwtgLPZAMrnywG3i9LWSK",
  "key45": "34mZg6yndZKJnvcT5E6kDQSR4bAksirsmsepFqr8MM6yqD6jz3xCUd2FiFybuyAAfiRxb6mCHPf33ijRWLaF87iz",
  "key46": "4681EFh5MnVQxFq4bPWeQeXEKeboMVQL988PkPnfEKXXvb1eN99GMRYVUWVkxSQ1sRvNSNWNN54PBeTwGPHDeKSq",
  "key47": "4vcfXaJCtGoRdAB5cZ5FfanV1mg4JnqVeKSWPXHNQx6fyH96FewTtpf5zDy2h8CK71barVsm4gyJ4TL42gWqrFFq"
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
