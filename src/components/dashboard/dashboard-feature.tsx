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
    "5QiUfioQ1LUdw8BTsdycupRJmP8C1nhFkSwzufCXkwCvq1HX7jK5mLGzMkN6fyzJt3pEQg8ppe9vsEKGHDnJ5HPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B6cC8kj3zBQDvnJhzTD24H4KtYqf2ZrEZEFVmW8Gddw1Nf4ccxg8h6LxahCZUxaLe9vAWgmaYBVWZ3Ru5n9Ubye",
  "key1": "43hCPzNPjjDgReSuFeWwX7mBczRcodvTUpA3myCFfS8iRVjZbxAVmizkxxEXTUb5SYXTU2ehZehZq16mD76o85nE",
  "key2": "42ucVEzgP1T4rke57GCzodXeESh7EJzQt9c8EvJsRSR4EgpFcpaxSuGGG7phTjX1ipLP4jJv9wr8RVWh8BgSAi9Z",
  "key3": "3M3qtz3CbLjAJMzhd5MG12oHCnFx2EMEqz3ytoDoQEWMmCY4yQYH6imJQ4KwsGgEVNDgDWzkNND8A5D9YzdrkFFJ",
  "key4": "25FSufvBnRbW44YBSKiaBuKgysDj6cnA5VZ1NwsK4Quc5SUgu5dTJy3p7XV8peiFGhpuraredjbAhe33brT4YYzE",
  "key5": "4CRP2Q4TBEWefvskUPUKyjgERGRrJfLfk3rER8Q2yMR5cYiEWxi2gnDVgeXw9buyf6g6xFT4sRUFirB2thjFx4zw",
  "key6": "4mpBPRXCvcMF4TKccqKC1MKWdDAFMTVFfUYUxqErG8BoDRiQDFXenFKiAqem2HBeJE9YcatLeNEhLePmUmvnoMnT",
  "key7": "4GbkjGBivaEB1oxXkGoXkcrWeLmpfXe2FCiTojRdDNGmn5H1kh4XFAAvxiLkvqxXSdymyoBVkfqfTcCbskPmWrD5",
  "key8": "3jiqYXShnB3gsDh72nU4zSfUpbjvKMYE6Di7V4oDvvemT9doYJHibWCDnQwt3zpZkiVsAHq85zfQ6TtVfwUdEHkM",
  "key9": "2WUDzEg7u4pxEttPB8Ymng3eeXEy9M2PKTxUMHQKnJWxr5CdHnT2UKGsvGyDquWLXAEjKU2nQZuGxBHbDQhzZyLQ",
  "key10": "4TULySRnhhg9bpP3o21eraWhW4QQNYk3F1ueue4yafb3HNkcjS7yKcbt7isurJgzZAaQGAHVXUuCSa11apf3MQ6u",
  "key11": "XREyYxjJAYh7RuoazqbCgahZ9sG6b4129j25FMZXMC7GjLuL99oCTKPT8MnDfmimztSM9z9ywVsPyVMzkxxb6wb",
  "key12": "3m2hm6VXSVCCLQAaVizfTJWCCE8ahaXnZasnyKTYnCu8VbTDsCbcyCFX8nkYatdZ9yisERykWwVPPeSkuhmG7KGq",
  "key13": "2gN9jFLNzkMCKxuGRSpZUpRutsZR7xXCD7weBaiyEzwRLFPQpSL6V66nhR6GZRtQfXTae6kmBioC7965gHGBkCVn",
  "key14": "2HyjbX9YA9uk2QQQGDxkMUsrfiK71YjVL14qYtCA1nFuTNAwo5ymRcLmU3ex3Jct2JQ18v4A9unPTXPA6fjwXMFi",
  "key15": "5poiMBqx6CpHzoYeisQBwcQ4pvv4dEKPHkYTVSAFGKCXmPPaJtDdJvSZ5xWsckmfgYJadgHysuVtmJGsvfDEA764",
  "key16": "498f8CVt1NT2x7u2Pkps3r1bF1UZ63mhC1H3KG6CpnibJBFmRortUWP7ZqnY7cYjwm2AVdzY9BNY55SZPZfmCyEK",
  "key17": "5tGc6tLuvq3UoKk1PYuhopKLpgTs8q8zAAigTov5uGh1wKPrEduPbgEnZ1VgXrV79wdGVtdXsXqiiYkqExQEwCws",
  "key18": "3QXSqSiynMSsFG2mEY25Ev46RCs7T8wBu4Z3CVne5iLdEKRUzRX5MEMg9k7xTUbSwrwie8BbuofhS77A5M3zxKL4",
  "key19": "4yCrBimZmqs4hQ5AFDj8Qt5kVHmxYT69TTh2buopmMnLAziNWiiTtPJXHXB7BCSNdvkPpi5THtnpYCRivUkKkqag",
  "key20": "3AC7VQVSsedurarEMZzUCM7CoiagMpQ9J5UQicUc1BDgnhnf27XEvPpggAnC43XXTq6PiUrghsgAsoiuPxEvSm7E",
  "key21": "2rd1eAJDje2VJGyLLcfxKbHchyspSeVK9sRPVrimSs6izotnddqvwkA7QxSgA1Xras8QgnNYv3VVMLi8oDYdz7Ft",
  "key22": "5fuVMFLaREx7LtP8iKyukFYzvVCga3VkzbjBzi4DSAWZEtuwzv8kUN48dxyfnp28CbxDSDob7oBatTpZgd9CuE5C",
  "key23": "26ppbn9gkF5SWXRRLJnpPEc7Xm12FxdH6kmuqWQEfurcFcaDdwnkLoKaNz76kVgPCJYLqYpZiKA7kppme348aBgy",
  "key24": "K8dyaDJzibGiKVJ7aKGh3jz7MAa1LARGVz19qqkwEAnkC8xw3FUTG1w1fz6JUdrd6wHLTTb5ccxZUDkk2Fnw35C",
  "key25": "4WPfiD8HrkaaXivwiaLGQsHseDkiUYNMrTBEAgKqgM2EgXFSy4KbCg74gxYNz1HVF3oG578UBVimhMjZDbnpNeQo",
  "key26": "5WFt8QHUK1Cq5dUHN2nC3BVhVtdx2JbJnxMqzDZ1dgwwgXedP6ZjGJs7ottQijwz3xVLL6dVz9Xzymmo8yY8wdgG",
  "key27": "649Sn5BmLcMWnaHmp5dwKhzRvhXn5qKQQcxKpB2QKx9V4NV7baHKC1LDzY1yRupeMLN96UHDSYxX62AVEWGdThuU",
  "key28": "5wVw93wiSb2nzmk6hvF2Qq79AoCpRUouQN7bNJcmsp4wvJYXWCBV5BKSYvtzf9bRFBTV8oND27TRMEwgp4ZZYgp",
  "key29": "5quVKkeNvNA4mNsQTLW3NTbz3VpiMjzKJdAm6EB9C2nvDa4XLkfk35zwREzFt9xDFaNUSvQu1M7NW5tyviXHMs41",
  "key30": "wy1anZFhjmj7Ztj9z25bdqBPTAZ9mkJQsETu9myhPwMdZ78Qb6VKbTp1cxbUKm3HrpfHzs5SAxoTT2iAkSyEQ1a",
  "key31": "2mQfuxHPhBvufqtKnaz9tDLvcwvnN2XDR8ia3sNoBARS2oU4nvJjEyVtXXSWg98twfdw7gk4SxeDFz1ZvoPhPq3V",
  "key32": "G3dxdgs8gMuVSqhj1obqwP8bhvAqKzS6gkLPA8TjSMdcW5cTUGWBL89PN9t5otyR55gHREoq8r6R5TWU3hsyJkg",
  "key33": "5w3R4FWnJckAwW5f4Q6YMffMzEoqw1v7efAyHDLTFziZNz7yVSr3iob85QLkg3tVpoAhwAPNHKhs77YqHPSVCNDz",
  "key34": "5StWtfp6SZA9QyRQFW3XJ6ifPoQQcDSuy6SXj116yUPfRJ2dBrW2fJmZ6yDUoqqRaaRYsifkUDtH9ohwG3N1AeQ8",
  "key35": "2pzvS9doukmFn7BLfHnTnVyCwxbrz1Woqi8QuBg9R8hGNER1kkzLBjZhCT8GY2eQWBHtN13fSrwE5dvLTgtvu7um",
  "key36": "2eq2wf2NZoaHUHZooDkLAAHCVG32JX4hNNS7G82hYTrFiDwZVZQey46TUhEULTiJ1jD6Gj5PpvAktuAtKstipmAt",
  "key37": "5jTqxLbuX87vuo5jrDmZ97EdHNi2yZE6sHjqDmiRfD4ZfcbZ2gHvnEiig8saoqMgukWY8oXrkGMcNit5YCFHZQis",
  "key38": "4TgkKgqn6Wn25jmdHUVsSsQzeM7jUtH5fjSRD9VgNTQYN8c44tLmZ4b5CRtx9uorNWLZ57ucGMcPiSv7dpuMrnMN",
  "key39": "5RfmXqzF1me3jp2dDLbZfYcHZsjxbxgFu7zBnKVBivwRk4fofm53suxZbyB7GNR5BApJHZ1rEMB7QKS7rNPBrW2S"
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
