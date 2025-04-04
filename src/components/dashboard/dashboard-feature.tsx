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
    "5o3NdEJZgs3SYcSpP1XZLUhy1abvDpsdtp7rEQGCe3HfUq7NCHLzV2ZVL7EjpbaLKZhooVPvzLLXua4DAW3nFwDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wbpr6gEKBzjQ3u7J5q67CtcrFbndiMjAi6yZ4dhDm1hGsGFnZ1cqNFnn5i3Ph6wVgvKacqA3tbeAB7FB4X1n99E",
  "key1": "33ExpQ1CryX2bao2tAiWpcYbj8bhCLQyKC3Gs3LqCYP9FWci3qvGiSd59WoiK55BxpnLD6V4cQxCSPMv2MCu6whz",
  "key2": "5XEjwkriwpDBRzvru4MuTbzuJ28zsiCUGCsa9nWamzHGERpzskk29g2wh4iPtUDm7NJjF9dWAp7sQbLpBhJMoBCa",
  "key3": "2xvmq1pBTgTH4NfV3VxfhjqeV3NH5vy7C3qZ8xqHTtpAwaJo7aepH6UHqRohxuAeum4yRrhRLaUmUFrrE8bcjAJw",
  "key4": "51UjwNuQJqHoB914U2L8nVqdikXd39aSSM2fzGZrWi5XLt1asGp5xSRrSuqigDaeYBjJXShbsK65iU2aMzyE5cBo",
  "key5": "RHdv9d2SP8y7jZMzEWHt4C1DaRHbReJuHMFp9wJ8qonwBuNpuhpqmJFvtnAcPTgaie2yNaJG6GV4LT3QukyhKRi",
  "key6": "5Y2GDpAEz9yRNL9LbH7reFg4GJ9g2RrrXMLzh4CsspSbuxBruL1N2rr76e6yV5hapNJWPcLB2b6T3VqfBU7fY6AU",
  "key7": "2LiA52L7rwpWg7az4gJ8E68SEvjscefwLkBuG9K7ouCEWXDUaMAyLeZDrUWxJsFYxN7Ad9KxY74mW9wv9o82hEjp",
  "key8": "3LSFtqqavXCPzib44tdyant1njy7UyC9BTsfm5nfbqmKBTBFWaCTN15zUbPgqoNn2dLUTXmLybNPyJhhkfwuvxtB",
  "key9": "2XRa33urLZmhEJbfNUiCCqsQdRwy2xLJN8258UeidTDFwDvxeAx4qnmaz1eM2axAZeWb1cbX3rqGNXGE1KgyqeMN",
  "key10": "Cs72EoiYx31fmNHUu7fFPeuVZ51UiXLQKFh9ZfnXvrHbVXYXuXbiwCyZA9Qkg5MiAXjmbZ5aeggy82cK6DvByVs",
  "key11": "5c9XgdW3CYcpYucJmEfM5wzpDpkX3qgLiUSgZmMWNmqSb2ePQQ3ZkDLUW2Jg1fgp42R5hcegM2BRmRM7p1AaoZFe",
  "key12": "3EyWfnzic8EfrnSUH3LKAb12kXVr4nrkKfQRMtYCQCM1f49YaVYgqac86a4Af2E5VK3SFDDzRqxrVHHfqsh4MALm",
  "key13": "2JvMxN5nZMj916zanAiw3MDB2gh4pZnFwg1x6bZ1BRU5TCMrvmNHqbpmrdNhQfiKZKnc5tJY3ZoX3ggPXxumP2GV",
  "key14": "2KDwDAYXCB3jhyjAkyoDVt3WATGoTqm4F3DfFcEjttrSKngnk3uHoVHPX6r7W2n3VU9uFTfWYa9dYjKzZVeeYmg5",
  "key15": "7CxRUqbF53nnRxKNnYBUhMicKqLa6Tp7e7kPJd7XXNzVu9kX1DNJ2Kh4az2AagVsJpWwB7xSQGLk8z18PSMLBbq",
  "key16": "2VkNwaewgGo3oxwaW84PtRGW2mDFJxyVsWvTxcM6usR98r9GcoPSDgyPQr3qCEoZjA3ioe57TCUQUiauk2cM17Lt",
  "key17": "YNhmXSGdyMGb8h8E5DswXVLYSdYtxSPqgZuffWav52Y68CQEaKAz4xyh3YfuU12EeyFXPKZsuWsVY1rkcnh9Bp8",
  "key18": "5XfjtiMpiRwr1MaYk5RPSEceA6WnpQZZGF5JzUwhmiPExHMRRhgQ83TtNL44LeQHo5JnFbxSBUvN4HNVYCqmv7QF",
  "key19": "3bTFLB7BjDaHdZd8F2mYw5mbsBwANByB9ABkdLbVzBEsnGbii1YGwHNYV1MwPjb9v3u1VP15ty8PU2LdNjkS5Zdh",
  "key20": "4TfYiPcQ6K3WtLFd5H9i7pARCg1N1fjGKYtZ2W4S3j7sW2JQwJxejuduQdgPT6HybHZMuVxAWC2VckMd7F9B7evH",
  "key21": "4NV5tctLjA5gxuGJLtTUjMPXgKeBTbrMJgLVnfPEeunh2HgaSnpUFry51s5DsTrEmaACoqy3HMfGFLPLh1TDu95u",
  "key22": "2D4ora7pbPXE1roZ4tLKCxhyG9RCbJoasGmesC9Ngzf58sesQ1and8h9BQi1rayuJsXvSt2vFmjWMUv1APMFshb5",
  "key23": "4cGjvyzcVkZPUJsqaR1dmJSWqznYUfV2CHp8izeVXYh5hXV9ZamurGCkzXgdgX35CRBR4VguYrBXscwVSyTubnbY",
  "key24": "3urJkpJA999TDjLbfjrcHzwnCZYvB8xFBa6zyqJxdL4GDAFP3HnSgbZx3pfCFoLeBSqx8Hzoc9thDYwXNPkCzys5",
  "key25": "5NWF5ZWYMJbD7H4EgNYmTKndpAkDwvsGBavJJaHkJU42cNt6dARwGmaUJkdSzZeYAwXHkXYzK1G3T1Pa6YNdaUJX",
  "key26": "3oY4xEjRmAAnKrakd1MUTVCUjNtzDJpakFL1qUg77qmd26NNHSg29qKLdsoWg7a7VuHzLvLyXsjhWx8FzRoUmZNC",
  "key27": "5tuyEi319zz3aSTCqVmxLoiV1TvB9ds2oj8MJDyekirTwiW2fMxDV3VTXgXWNKuTgENBcA8RJeMVyDuXBjj3djYB",
  "key28": "3oJAdmECYr63VTi4VnJmAZHvw8G7mr1pKvN4cZCjsoRbpEC8Aqss7HZBADN2M7QAP4Y25KDGY1y2TUsQT8ptH6f",
  "key29": "129iwFYNSuVg7aDSntm3TdrYjDhaGeLVhdb83TVnCHg2kPCd7XjK9jLtMsLypskyxfG44eys2LHoDqRy5Y6yLZjb",
  "key30": "5EBaXvQjaVGFMycVPjVBdBfCgGBYE6gjrhki4328P2TZqiAEMphvLCKT1KUn2gkGTrkRyQ3hntbzZBxApmG3W7aj",
  "key31": "3MkNUaF7J4qrJ24aFymPXPk7CsaieJmXr95d21E2S9q5STXwECgUURYjHbQN1ZoM1wt4EB9ka2rnRcseCQFMoKwP",
  "key32": "5q69i3q2TLukh6497bzna8rZ8jchUGg8Mt7h8z117UvgFQewpUeJJh17LaMfGmfVAYxZyWNSmwuKkjreBNysQZTK",
  "key33": "4WUGfS6qjQGGk8AtctQFoho5SrhjWtJ3Be5r5teSNfCqVKooUsaVMFWgbyxTBy8rHKBgUu9LuR4VwkH4k4qjn67B",
  "key34": "5sP4voZo89rFhAd69Qz3CappJ3bHcYqJGiMkw1Fq56ypNmoSMJHShANzLfSKpHTaq8bAoqPEkkpT48afCRJLgQNf",
  "key35": "3sqXmZSvxkPP3eSj12YxFzxqKu38CKHguJcBzuSBuhJwuXBEkwDbFMgidBEpnVAscGBFjcVhX3ZhJya6CEtyiudB",
  "key36": "2SCrzdk88PjUyjYNDdLTqU1JTFhAE8hn89KNHR3pg12UNv9rkg28yYRDZFdAmFcyJoWPdz5JjtVYUSSPhFDdw3mx",
  "key37": "229cTSYRfjPxrUYWzUt9v5tfNvyQHoqduLY2tMxAYr7Zr9kF6dRsMyxZfxTP926EqpdWC42ybrvpmBCKEeTMqwA6",
  "key38": "4x4FWSZqLFq21p1GA3kLc8q4GSYpcefTWX8E9vVfnDjDYwtx94gfWquuffrjQQR3WV87DAdVSmmw9Xx91ErUPEC5",
  "key39": "5VzqjsYaHussTJuoc3r55dQxVGeMQ6Z18y1JjS6pdZ749W6Z6scSR5EnLKsaWMUJDsnkCfLSWwvCC2DnruHSmPH8",
  "key40": "242xVPFH9dEfEZLWe8Yu8ApVqxFvkAZh3vi6Uco6odzA9z6tQMKbALwUMvYH1ReQLVvrc6dgZ6TC71PixXoBezbW",
  "key41": "41gtVkhxBq1FJmxVzVd9AbugsFQBUUAx4qg7jcQZBdCv68ANG3Gt6y91yxdLBrShjEKtAGJGoUvv5NZriBtNZaCB",
  "key42": "5SSVSAZ2J63FNDoPnb349n8xhs5tpUjLmZKQR36BuDD2evx1Ax6NzRfGvJg7yKbBAt6pLY1o9VNHg6xAcEsdkJSD",
  "key43": "oG9AQgEv5vNvw4ETtBEwbjNPXrb2tdPY2WPPMWEW2DWksAXM3ukm4CUXERJLezARbHuHoN9HzWCxfQxuCD47txn",
  "key44": "4YBz7cYfHNXAcEj8SZMBqKwsqBwUTWXMeWYrQ2uWdPTfFFztq9S5NpCSRuvTNcsdq2HrTefwa8JC9CWw29ejpvto"
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
