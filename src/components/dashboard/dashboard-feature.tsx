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
    "2i8PtiDrcqdAxpAD59XMrGoeeK8YcSqiwkUynit3pzCKkA1SMqxXvM5Gp82NS6aSqXDF76qYKYcjY59peGbLpTZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPbAaYv8Bz3FVozj5nP2KKHrF7axsBC9Rnmm61Cmg9X6XrVMH35qUSUE9q5mskHpm3KNdSzjiL3yASvPrA4TE4o",
  "key1": "3xa8uB2Mv2k27vMW41ZvDsqMjSmgUg8qNuY2Uvm7ieYe9MiWPrBRYUcFs3wXQfNmxgY7QmnRiYzrfwQ1SKQFVnB3",
  "key2": "3zDa6pspjv1SNVGmk5LMr1bfPTPzoA2KU7iS15VPwwjzNKQ3mGFFHQaYp6VD2Z8uT6AydiPtxzUh2DK7KpgYzR94",
  "key3": "3najmhNzXFeUhmfPdw6Fzggmujy59pyqEDzQXnY7ZJE5UkEg69c6FhibmShVCaG3TraM9RbhauWTkBAw5Tu6QPV2",
  "key4": "3MeMt7QEUwrBPwXM9iXDa9BzM8RVyWiqxGEcg3qk6bWvQRj2tsNeSqdJDhjUJqZAasRUxPq9RhZ4hw9MBNRToeNo",
  "key5": "QhwSJ87M1RwbEoFz4pw6jP31tRaSB7YMmDPiLTrPm9X8gkfNz4zBu72LaVftne4oMcecdxCCPYGmZCUYRqjn4jg",
  "key6": "4sci33o4A5ttQ4hPagUY6LxTkT4VJmJnaStgxNqwyxgzgQAMTh4WKn83S6dqsMCbrHMRpcjSkMPURYVyNGd1nhvZ",
  "key7": "4awDUPdYZorwKhG6aJzu4PvkCejPGHa4kApeGxhQjd2QPb232quei8Bq8hSczwU84ZRvbsvf2xra4nHNLdGYEKB1",
  "key8": "3LaLDJT6zncR666mRkUc6paZ8DJpX5eCy71tBKsqi9ed3Tx1vAKSWGuDtasYuKpu5omwrzXPYWYZuYptWRuruGdm",
  "key9": "hA9kMyCgm8fpqRuT7BSHhUQ3YwJKS4gFffCDg2mhAGcAH4JQCrGxWCcWVJuwEWPC5X16rWf3Ms7A5rY1cHcXnyA",
  "key10": "kaV5DdKXCNfpS62MigLh4h69BKvnWj9nGScJ8t6i9Q9EJAboD9S9XHMWAjiEf3GbmtPJkui4JFXqKywgu8eMa1D",
  "key11": "5GBz2vaLRSVikZ848UDkLwurhABKF1mxAYYcbxds7EXWZLiDfDeW8RU4yobN8oonjd6VYyLquYUCzoyf8BUs5sYa",
  "key12": "9Fgum1znkmQk4TebccbpruCqfU2rsDLPZU8JP1VbCMo3drjK4iPv4a3x2PbdMzzgmKNbT8LiQNnM79QoULPaasc",
  "key13": "QA7jn3j5XVW7tztR5suMgiRcyEJQ3Lb5SzBpQJJcCKN21uzZFpB2szVnWD5vCgPXrzKyDLkfQKj9rNsCDyqPA9T",
  "key14": "ggKUJVHxpDtiWQrx5fq8VqtAkne4xxuUbecE3zFqCxBTCoVUAz5qNtdEyvsQPAY3gGtdDhSwvAkoA7n59ZA6Kjq",
  "key15": "4GmtmDfd5LDgJAGgK4Pu2agCW5YzajqbpqymUpDSuydf4oh8MmuBf133HGYZrynF3e4kUz5AqECzZuMxpqu8tzwb",
  "key16": "5De7YxJnKrL8mFjT3Xdofdfjv4dvtm6n2eXEoPFbvHddUdLAHhzFgEnGUsbwHMjmfCNJVJFxUBfxdzYdXRwrtHke",
  "key17": "2vGDZjz8EYF81xNVYrEgrgwT3YvDsGGBWNhHqDQXwoKkA8fErERfwdLjmXJrCpHVUuuXMGHLRtTNFd8wm89wQPnS",
  "key18": "4znxGFfHsiSWhb8WKZjxxw6xagBsZNCn89fzecEFEXRaVvqM9auFgFhoUxwcZmBr3AbiaRmJnkTVVVfjnEChH8wR",
  "key19": "5oYikxNUAQxRNKXQin3HwMaZt9ypPk5uPyy74vtNg3N6gTjzePypTzJ1ue2nfkgzsw2juQVcTyjcdUy7P7rwodRk",
  "key20": "13seBxoVMcvqLRGZq9PNxPjAiY7rGuxeP9vyemyCPJaHDPwKGL8SR7DAwrcGCLbamSDFNg8QCfBnxMicgq7NnFJ",
  "key21": "FBVYskbfyCWue83LiH2L8MjmFZUt5oQUx3cMTdeHvx7uAFquKrC57ooWzDJJQw1Wr5wHpTe5k1hMUhuUgJkHrBu",
  "key22": "qKPEzDa1kwpn1CrH4E3Jf93HdvDavn2Mca2zrqriMsc5GD5bY1umkaUJRkFknksMd2xgKRYHwgAW9LA6Mj7uazH",
  "key23": "598yPY3TV14ZWf2eJEnCLJBJBNFpmVJbybK6eAsPSUt6SnoimeM5HchAoLCd2RtegJraLV9dbUQVf3Auk7dyVfVj",
  "key24": "4buFR5Xz1JinyWktRZQwsTadZ3p5DAmZatnHsisZ7wX762P47k1S58g6YPnNW6jmVG5xQAdWm2AppJa68LQhHz3d",
  "key25": "8jB12LG8kZNzecuXqqDuqnYqcu5KBoqE4NZ8SK1tqtS7krkGs7Hd6by3AB7hBnuaEbKeYhQq1PegtAETRnki25q",
  "key26": "8M6Lo1F82HerEd8dXvsjv7KCpDVuniDKaUEmczzXGcizQ3ZVR7aNQqYj5Z2cd4BFZcFQduWSBrYPxPc9teFx9dR",
  "key27": "nZASTbk6T7PBhjrgbsPNoXwWCT2WNhAzxfTa9u7iSTArWESSnwDLbj8S79f5mdGZDkkoz2crqeogReJWtiiRX7s",
  "key28": "4WBPk7kRU8A1HxVCrJbt983pF9y3JUrE4S1GqWugM6VmnVyiZ9fFVsRtRsPBY85CRDDJRuUyvj7guvn4vW7N8wEH",
  "key29": "2Jz6NMwDSti15ApT3T4P4nGz7ygGw5sUutghat5T2UXfUvYQ6tPu9hK2w6Ut7dqyLT6e5JYo4J5LUf8L7KLzobHD",
  "key30": "3JmEkrKRdgWmrSyj1XL8CDrKq9ZBZkcb7FfBcsHxzeEV1QibrwB74kx8tudVaLKe7mprATcdybyQ6wZfji5yRH5z",
  "key31": "3JFUTfVohbWHsD4WSvzECruqWcyz1zirWxUCDoPfXHR8RiYp6tojRhwDNFH7zJTwzEB8yQf8VKYY8WPvHzNXGfsf",
  "key32": "4zgqEq4bBj5C5p9tbAa1DA8EZzyYot4PspHWYdoxgCb9b19jP359oATF4FT4qmaG4ppGRk76xNAYgeihxowpb5bJ",
  "key33": "3bxKh4kb3LX2uxsFJ5R97FeEtsk59gMR3ehsFAisUia59WvNUpiRJhTcjDXiGP6eD42kDp8ZYn55uGhUwbPfd2rV",
  "key34": "45xagzbnV5j4goPC6RGBSrTExsbjMSqPH6eVYgso9bm468dgBjamcZCtZgsjd9cK5BgH1PtBZ9UciNv3GAQfRDj2",
  "key35": "3SdNvBuXzismAjheDuWAAtUmmEACfGegn2UP23RKjTUSuHNMY5dZZxvXvWD1eGWqHwj4NfzDiHDn83HkGhbe7HTQ",
  "key36": "yPwxpLiHTD1zVPLhEkqsKc2WBkqJhSp3eKTGnxHYbHkQJYQXD49H8F1tFFaXCBDEeoFfNfB4yRbnV4JshEGK6JX",
  "key37": "2fiCjZf3hYzSk5KaLhT4dc4VNRTFYqUNbZGjph7KusQv2N21JGXZXeAgwXpJV6NNSrSiDVsFRPVEpBhQThWifFfA",
  "key38": "28cbCP6ADUZ9o3XxxwEK1iewFHfJL6tRrcM6SWcGkak7Q66VutuMUi1PTUQZqiDXFv7hvzqJNmzX6wKVC5DW59km"
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
