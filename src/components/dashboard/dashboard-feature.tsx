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
    "4sP6yd34BqjmqiMmQGjZ4RqQ4TRdADZvx9NtX8MXxNisLviGZjyBWsd8S5Zr3ZdNeKUj2o4EFXGTLjJBe5yKjksV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XrjpvSVsYgGPAu7AQjNsHoBvkSnZGwy1GhFqhzque4Zq4chbWjKojHLz9krAUTyWdeysnj3JXu2Fm2LrUQ6WCuL",
  "key1": "TNNb3pcRuTo8VxekUppbiEFUe6dJ2LnFqvjSNMcKJ1Yg5GY9aBPX38Pva79bn11j1Ey7X1VfTFrryxvAT8umZNJ",
  "key2": "5C8QnkLETFjgyp4WcNZ5ZGJmtnT8s4tj7PrURViSp9CePBePDSXptQ42FVQaYHJnFBhiF6odRuKSHn8GCkRKKHjh",
  "key3": "PEEQyW9zeDoBmjrxWWEjneTW9s7Vd9E5B8CCM1tuJs42RAh9qmeb8JDK7vNLZpWArQ8R77UeR2ehVVH5UXG9J6t",
  "key4": "3XtdnCc9XmRksdwQLvnB9dq7p8CDQXkcqxtG8XS3ALciinFWj2xVrWrL8iSD9thHd9f9B2sfd2nJabeys8U9cBSE",
  "key5": "3mQeNxyXdLAkPLo2sWh7Ww9ugV6vemzhLpATK7NxqBNH9mdQqRqNwFGPMptYabHtVpdJWbSz2H5wd2rg8axJ2z7D",
  "key6": "3dTpVpuCR8d72BXJVSs4P9z5aZtt3B27Piq4DPXPzFGWFygzAwPsdoSoXMLpyVdWsHq9PRng8pPk9Zwe8dg76wvY",
  "key7": "5zfEZCn4hEwv5kq2sM9rUL6LsN7f3aWpacEAX98hUznGcAc33EBNnbFFaE2rYxSv9khYzbL7UYECdmHnteuziGLu",
  "key8": "jQtt1HzmkQau19gYhJ3hHXnqhFddbGx2ktFrTQiptCdXGvk49PqLmy1veDx9JCmTg89iAREcnHGs3NFDuFWciTN",
  "key9": "2WDyPMPm9AGi1zoJiP1XnqrFNWynptUBMsxCGJsN6d3xzw5Vvprt349pvXYFwVdHYY3DRjsWbUWEkUBvPrecVndC",
  "key10": "2FQfrHsahjLCE59dKbWRFkcYQETwWBWxaPKuTgqnNtco3YDTdZiT3CiNpTzGUwew5mp5dqt4SgX9QLUtK3TbFxfB",
  "key11": "5KQqTdzSLVLtzcgpx8LzQL2MpHocjTGJrzLpdxMgUn6UbXMXRLYgd2gQvxhJJofpjw2SPDZxdY3TYxFdEDDgDU8j",
  "key12": "4h2izt8Db29NSAeC2FDjci75txoCR5r3Pgx4RJaRrK7tHqqWFWRN2YuZ2M1XHTcJ1V8jcwNtdNJY9FTeNZbiK2Uq",
  "key13": "5fRz2NVMKSHZTQpKFVcFYFABdsu6PP9osoYnJMSnjgpU1mDu8325qBx8yhyCTzhEiXM1fxcVvXyp2b6pJ2yHFjpj",
  "key14": "59TaLuwvqre4BfzAzMsn9yGXLDtu4a2Ecnym1812HtLCvUW82MduzkbP8wCo3uPBAVy6drLKV5L1cjdxri8mtdaN",
  "key15": "52YLWci1RPVuL9Pzj4HD4qRRx7ULfmtpRtuPu6iEXEx8rU36yzmzfwrJ5LvLoEJXkSfiwrmAxUTggkzFFhqmiTuM",
  "key16": "2XTpPjhWzTpZzpbdoEtzy11aZo3gyxuW3M8xh5Bbxnv7hViGJytQM3ZKpbyDQQTrBMSSgGqrDv3vDpfyDRZRQdDZ",
  "key17": "339uvXiG2n9nyrwYocuX5jufgxwtXACZYa4kF1RyJCeJhBbygLMjQDdkDyrioh6tCKq5tcqK6FwmsyrzzR8qmftq",
  "key18": "4RK5xvkFwEqcX7EAxXmPfuWdRGJbWXtZjQfDZSxwm5Z6YvZ3VgDnRmf7p62pFy56ekrBSSteMxVcdZf5zRVbopdm",
  "key19": "3jPLLLJnDUvuU63idw32bsmHPdxvGCczkomZ1uMPof4DhXrT2SqnYJ9UrK9UXjJRmfqsFjR4W7AXTzf3BvVkv855",
  "key20": "4eDAvgTDr2XqUxZGMxQ7RA51JFckufU447eA1Gn1XX4Dm2ofVrZD5mJYEEjyG9VAjfzU1MTZBk88hpe2w4Q7PRwn",
  "key21": "5gvR9sfLLuoLtQj187q1wDfHAtjDLd1XgzAQU451oNfYFDQ7n6D47qViEfpvKu5pQDgh5f5mHTLDxWtGJ6gxbKbF",
  "key22": "4bfS4AmP69YUQheW9Y3JbtKmKsHnKxTSFxTfsCyt23yLWW3ofhFDgV1T276BPZUNB5BzpaMdffkyZuLYZRXufp4w",
  "key23": "5DVWHWJ6Yj7b94g5xVvasnAMFL7tnKwjFohPtBVpw9vuV3soNRbKEwD1erCmC93AYmBjXgzpUwFHrCR71NHHa7gP",
  "key24": "8FAV87DzpPFfyU9pcQwQQ57p7x2hs5Gk8aYTe9w42c7U6hXYoRi7Hh3gy2ZKzjG3odLKJgQF1Hrj5Liuw7NdzsL",
  "key25": "La7tEPasxc2TSikGkT2o6iAVcQUcypczyQM2ZqKaLA1wZ29Yh8rMcP6Zd9gMb6azCUF1fc8MofYxcNmqYUNJiHv",
  "key26": "6S2vnJQfGSFsPCyCV3YxbRrDE4NuXiwcSmcBAUQ1DmDeY8gKxXarXRf8DHajuyMhhu9ihHYpLPvM6eWJoXYcoRs",
  "key27": "5x1dwKxc1y9LnTXLxrSPLwyKHStq3h4BDs76Xnbs8mqEV6VVZxFscQzNumUuYNsgb1zor7ccg6PDCr5Q3FG4oFh3",
  "key28": "4a777tGTd68VZxWh1pEhmdiZKQshxg5AkvhBGdsFjaPPEUNb6HNjmaByrYdLdwubVd9LCZ75W4x12AnU4AZGZS8W",
  "key29": "5FbR66baCcCVzQHE2k9HUfHTXnqq8J2wz8fn4MYVqkf8qMTZktQjKWrSfdL1vcPoB8yYYtZ8NnUY23bqXW4SPabb",
  "key30": "ukT4HoyKGVNFu7ohnEMAzKr5ToV37yaUY92Uuh5eUyvrzjqs9UDoPuyKahaX4YfYA5QM6yP74VXDypp3uyt1hja"
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
