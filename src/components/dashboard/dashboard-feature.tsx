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
    "WmapzT7dkSFhhrWgmhk7zdFxhSYQLo57SW6dRCFYpDSeURof79z8ydcoHcbPQoQ7pdKejZX6uzcXuUJechiTLTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RChdMkggHkFJdMaQZ5n2DxgBZfv6Ks6Bh3C5p1Bj9sjPhskcZvGMj4dXnHdLLGtSJLYyuwy6j8ofrV66MKeLpGd",
  "key1": "3219MKGD8ArPGrHCWUUZzYWcPGJJXD9BdQm6RGA8wdsu8coUEkC2SzJHdLgSGX6VXSgE1khXz5ZCsZeN4Csgb2zq",
  "key2": "2NzkeR2v6zfpdKBQDqVWfZMFRSvtcE3LWKxZZmw5U7WdK9HWrEZxZe7Q9ZFH8FW5Q5sVCHDTsjD4LGF4yasiQb1a",
  "key3": "GxTc6z6DLvWzeQmYP4zrNTQpPPU8HCqEmYJ1w491J5x4dGBNB4kCyQyhu7hzkrL5C3ro8L2rA33eiXfYo7HqZyn",
  "key4": "4TDtZBuDjfENM3pmDZDMF5c5EEAXBh77cJ8tumKexMKSX94cToPCTwjvUTe3joTYNsAamECLqwbD3B4RCzeocs47",
  "key5": "55baBfJAKr4cp7y95Nw7DB7So4PWbYotu8ecfyuf9b4vjwmXh5iKi3y8DAzvTideRbwP2FFcaTXfe2ahT1iChnVC",
  "key6": "5kuAb6vUxrwa4bBwFZmSCuwkJVns8DNBLnosrLTfzVt5BnJ3bFZUVoqKnzF4UCuUgJ5enY9ouadtTJKeisGdwngT",
  "key7": "5vgeD46ifMPiqaNU5PrR4NYAzDgsTY6AuwaehoL253sHrxM33h7VwLDK1YoXSjVybN5HNGUCR5of75Bpkg4QWBx5",
  "key8": "LTD98BjfxhEwThh8ADMjv3zuFnheDr39sCyjjeWfjyQDX9mKQRdS8cbTo4cZmCmerWE7VBHVy2UWn3qVdnkA9Re",
  "key9": "2TGqPHAAdD9mJav31LRLKdCVpdxTWJJv8BjrEA8t39fkECK4r9vSEYoFj7txyMakSsVxXWxJc9fh3bgY9pX56SBV",
  "key10": "4uViatohcVNfG9j2E4F5uBGdiBRvR9jaspD8y5bb5do7RQkqe7UZPF9xUkDZ4c9owEfBScynZ2MJpTA7GMPi7U46",
  "key11": "oLRbGfaxMHnvA3HHL312awHnQGVE2HjBTj5Wu9gUhc5zHUUqxpfyzYfY8vnXrasMmPhMrrKuAb3vJ9tX5QUXVau",
  "key12": "HeRzT2hFZ7HFgYe6NnmT5j6ER9mYFoHLppeX15DtRXgHHjpemVyh2WvF13bhJtYMv2jHB5MdQskySE6ngwri8WM",
  "key13": "3ESLkcYXu4hLgaKiiKCBcfAf2eiPZ2uspmN2R6GntYaK5edwC5XjTFHfyDej6EN56cYej3WeL4YKgs8x4s7i6VtT",
  "key14": "5dfkedpmNiLjo1faTfNRuvG1Rm8Q1ZJCgKAY8b35pP5vDop4NaKmSGYMsWNeqBJ6m6MfcNycngSNYdLiaZPL5ptb",
  "key15": "3bQnd6L89vtGiMpcPjmV56etoycKuptb4ukARyKQC4zi3V2nJpD9XH3WFJJhYxjDr7KWfvAzjy1X5J9KFepfoCBv",
  "key16": "5Ho6jPAfyaiiQLXaRmNXnW8pQyGZ3VNAaPXCy5RVCntidvBDhQM4kH9wmASnKegM4TpvbFcFA9AmHvPDiUfaXDvL",
  "key17": "nTkkTLGuvfLvf6kb2NBoAYibojUPrGRT3zGv6uAmgS29iRedwZaZHxZSZvQdMaBaHQHfMfbCtL6iv1MueJ5tbuP",
  "key18": "4Dtzz6qfMuPQBSoc7tzdHpE8PwaaAe5buhrPhu63vb6nVU3TQZqXWJwNLjLWD32mVUqroMLwc3R2KKNDYpD36t4A",
  "key19": "4hCZUd2GxLR6fM5i3n6EAaYozKXT7LJAbfRt2FCdnKuBcKL8FRNxJrnHEPxdfiBSviKne3k8VhW1UsnJtJ7NG1Y4",
  "key20": "2r3adsf6N5pL9SghJ7tS3bMi4ezBqCdwhpcuKpAMvauGsdvpKnQwcNtY9rDSSaSPpYj36cjZXxKhcfzSz3DbM5MX",
  "key21": "2Dsg3PF3FztuMHW6dXVEYoH1KtYw7CeW1RJH3vtULy26HAX9TfH9Ph3PAjT8CoS8ZsKR3yQaFbDwp17shXc98S2U",
  "key22": "4gnfZAkvT3q9gpoxfByADy9ftfHHRgstGsAN8iMzEbsZnS3nqJ3LQ4AWGXYcp9VuVedyWu2HTTaGupzSKv8LvUuu",
  "key23": "9jPAX9XSZGkjFT2GYcDdoMyngHJwswTPEpdmBEkmcb9ntVwGakuKu2BdMEYkEPYKMhRuJwVd8bc9iLtyeJZpx1F",
  "key24": "3gqhb1fvLGcM7zUz4Mj8Rb2z27kDitFc2dDJbS44f5yYG3jWrbqjJvotobFhgmcLMq7S41fX7h2F3N3NX1w7YqUQ",
  "key25": "3rQLv81Kn3nj7k1xPgF4af8sc6BbpUnQxAkGQVPM1SSQ1BQAaELwFLLSEvBg3dnMkx5bBJYG9hYUNpnBjkgMz5LM",
  "key26": "4zuruAEW378Lvm7sYFMTnYXTrvdxfmiJFgsvtLB22SJb9RazunwnKFVAGfb9YuPwTYRZZYwMxrASvryomqLM2mLX",
  "key27": "2NjHCTja2djg7Xv4UZM4wtdG1Ev1JbpibUYXDtSWAg8pLUfL8SDT7S9yCLVKRDqtTr6d5FrYfkCHxcZRKyWihZF7",
  "key28": "5NYoJL6UU7g3kgB2oUfm3pjoTkVEup6AM3w5AUusYCka6wLiy1iuFuHGBNYTwmvnFU1C2g8irdHVq8WBasnTFFcQ",
  "key29": "EFMMTbFr5D17X5wHoVjnSvWPLvmBNb3f4nNiiHaVstxbzn9C1NXGhpewHxxryr8byg3HfiiGxbwrgfB7p9eUpTJ",
  "key30": "4heAYSCYknJQ1tz865bLTFpsFguhynxGFRYVq2aQ6LjHBkn9vkbBjGRM9rvogvCweiQbGMvb72fMcm7Egzrk6xYG"
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
