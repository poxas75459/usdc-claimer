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
    "5h1YngYxbZ1HqzaMqpNrYsJaT9p9TpPnk8ANjBG9riVJzeiL9Mn2agC2489H8WbM119RBobvQa9js8AUew65Kaiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ANmNM27kWx7NE3nhbjuhEHkVPW9F6fLMPVgTV3tgTaugBVrMhTPNqFte53CbvipkZCt1chQH2sova8SSLJYTEt",
  "key1": "uwBE87Bryi56EBzc7FdcgneHtHmA63ZNNTH4NUu7ffw4QFiySwNEMJQDQE13c71U342ff4rVr7GHQxBStKcF3Y6",
  "key2": "2aNacdrjBVXAEE4543vBNhtjrhFNzrwVEpTTjXYbWAVDjP2DF22RGq2CJRTpix1qAyM1SznpoSWNMrJo4RWmp4q6",
  "key3": "tiYeTPxJSbvFwNrmjKUJaeEVinKvsixMpzbrfQstLm5iSy5Uu3pBAZT8YPH8ttbDGqukJZR5e1JJUPRYsPwWWaZ",
  "key4": "3ZU5wnaNcBxntuEHemMYxVEj8HHu7YRrZMNuqnuWQDySeJFcnnspxHbSWfDxQe6CST5jxq2RnLTxYp57Row8dRxg",
  "key5": "3QMNMPjrwNLQnqTmZzi63dXbEfHmLvJ1y3NXP1f56y3vTr8jAjF9KhdNpwoKs1rCyn7rCcwRNSaPkFmYqL2S6iA2",
  "key6": "5dSvQywT5FT7hVRhf5FmuycVXDGTtKcfmCcpLEbp9SFn8yC1NqqpG7eUnhVAtV88BLwFyMAmRzxMCBbpM3K98D5h",
  "key7": "4UYRnf4MDMnfrAT94aB1gAo4rf2GR2sCei9nvDH95xseBz3bwirdi7YhCtwCEt2H2h2T7DpHED3mwFuAXDGgscTz",
  "key8": "3cBiaj7fv2CSAsMVKdVLNN3EWGbzU4MQ5U1sLW5W1Ljm2UYJvuxrQNP5CFdRoidG6tvw1J2zCbh8oQC8mBssndAC",
  "key9": "2fDLsFyTxj2qu3qmrshsqmYwpiQ82jGNnzryHNzdtxqoZ8WZdfKX8353VErL15qGa3Ldxw1gnmtPwf37LRsyD9kb",
  "key10": "4hfdpAtAMPc7z8fsxbshqZ1aQuH486QTsvjHeNzifZy5dP1W6D5BiGqtm23qRqtRNrihqjqbGTP3SB89nbsZp5GJ",
  "key11": "5RcRmA2LczGjA6mmkVSJX5FyruHigd9uCNkJ2h5qQrqJVkmi1bmJuuQgB9Hsuf4pZwyP5MZQEyXSJrD76jzH7aFN",
  "key12": "khmopaE8xLBbSJX62f6qHUCGtEuJocrDgvgYZRMd6E1qJ9tz1adNhXehqPpwU9JqkbzK9UiRSueqr7gVrUPcqXS",
  "key13": "3YyHZcsGyFsKNpNpgySbVhK7M5XKEBo8ow1rQFNopiEHomfBsvFmunshMKaY1CssUUidk6vYLBBXYmdL6TbgAmyz",
  "key14": "ELUrNMq3zUb2FZ2YH1u7R1dnqdLYCeijNKRwzNqjXa7PFGkV24XbszmAJ9B8Nvsnc21RqRzKxqp63fYyPYZEqqX",
  "key15": "fCaGk3j5ZyxCRyvy25YBj785Y9gxbix25Kbd1fxN9mKxEMqCBiQ7uYrhy9fibfW6dJ9iTYnBuTXyjnf9ysgezqm",
  "key16": "PTeRkFCVg6FdkHxxPcbMcd7ZqYvRaXQVBsi1yML4KeRfTMzcWNyzbucL87VMHBRTZSyRy2Xk93Z8ffimbK3crnS",
  "key17": "4XRXHRANaGb2QW9tZr8sMhFJ8F2ukUohVFR28n1gL4LnaHnmBCc3iLN4Lio6ho94FGWPRAHACtsEqpxLieRwBjCr",
  "key18": "4uuZ132habDbAjjKUL59jU1r7kipjwevAicJRJiqmKoyjC9fZAHtgRXuuyQZG4FaSaYdzWaK38KVWETt7UwuBnxS",
  "key19": "4RtduGVDdPQ8hKvngUri1Kxnj6XVtfk66cpDn411dVfJCxDhFfAZrNDjNh9kC7wi1qmPTNUqKoqTN2mH4Sw4wPkm",
  "key20": "5zBAZKye2m2pSaay5VtwCE1RWzwLYyQ5a3PSpu13kbDxAmYCyJo1nxkRCKudTrFAUu9CRzGyfj5VJn5FVjmeMMNL",
  "key21": "5ycbCscmTygkLqdW5yqNs8UzCvV4STpBdj1SeQanAYpzxZiWfPmNGjM1MGjqc8uK5gYGiT6TWYpDfczBG8g2bVAt",
  "key22": "2WpuS9ZCd9Q37C7DiA4m1mFGxT7QCeciWUg3Fk9ooSPLCVnW3RuTE3Ai5KVkQiN8PMyfHxqXj4oPDPcbxVumCYMu",
  "key23": "KzwCu3pr2dU56Rn6yTuJCy1q3kBZ3v4PMA1nvSSbWeiLkaLXKcQhVmLu34P12DYSmyg2jtaY48KqasqqCtBRj1E",
  "key24": "5jbsVnKib5jPvSrWwKP4npdRYoQrGBvuChXwXy8S4z41Tcgcp3VRNpRpZAfmMjKqvX3yMhr1taSd3g7SDHUTakYa",
  "key25": "3SpecgRRuy9eEKk9nBisgXB4C5FSt69cUzkk3oPzC2Nx9dZdt4cSS6oNW7yjoUaZpfRXx6y7QnH8gGfzxqiR61JA",
  "key26": "4DNuL6MY6HXKdcPxJ1j65dv5pQ2eTkRy95ELw5DRy46e7RhThb4L33cJuWc1jVtW3SfmdSEHBmJ65bw7s4Hf7Wpe",
  "key27": "5FCqW28gzvYij2KWfbFNk37TBaZkBABMCV2D7twnR8exLQYXk5CZVsoBp9tqMobQ2rXT3Tgsdd9nzHCpdMdSv668",
  "key28": "3hf7UpLxGUZRimhHKx8P4VxvdC1NgA7hGC5rtccP51EQdgz8EsVDTez8uE8j5GuvEcRbGU631ArLUM9D8MhQAXwp",
  "key29": "4tP97EQU4mjTdq7cta8aW82q9z4QoYecFHn2QhW12BFo6M1AVBiWTgPevjAwDe4CXbZm1bsHtPApMHznLwRaCoB2",
  "key30": "5f1JRc7WussY3ajApMN1LZxf8JehMVJdvjZ2i28LND6matZLLVMRnXvmXYs9beAZKrEttJyFziejanjTtfX32REN",
  "key31": "5UE1RSpXdEpDHKHhaJYWJ1ohrW7ySrQF38YdrhZMwWtirJSzwZnwR1b6GwghbkUmCzyceaK42VuEB63GFwcbpqz5",
  "key32": "4CBMPrmR3bhUTJj6dH9VJrhmxJARRprvWLJdS4DtBZwDxA7ox97JZjGzKHD9hgG1KXbBfnmBZnGpuvh1ZegRuu3V",
  "key33": "4d9wtvsqTGoxaSWCgjnzh4vstakkuMC8E1whkF3qU6zBWMUuHHUFPuS5nBkigg2QnKQfo6Y5rHFVqVv3NVv2XNq8"
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
