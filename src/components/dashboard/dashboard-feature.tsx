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
    "49bnut7CmrjXEje6fSrb1UD3xY7e63qcqm6kNuPXzg1DRD8fhjaj1k7yQf64jvEQruShnfiSzi7wDwR3xdFv3HJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGgRJ13hhyoCnEUUZzWtziLxxa91QrKhgWVKhzFjJPJE18hyhtSu7vZa1NRGHvHr44aMhkxyw82x3zR8oTv4QgM",
  "key1": "5GzeaY88WiL2G68tHHSbX915RXHVVqc8SvWpQHY9spPmY1iiamHngmiTTxfCXdoRJS8xTSfP292L4Q4FMWNuYYEw",
  "key2": "2dHiRWH9WP5VeLrcD65HF2d3cWs4zU5xuuKQ32PX828H5uQADvGNiw87b8iuJwvBGRTyK8PomhNEC51Q9uypYDG9",
  "key3": "3i7GqnWfre8S7bqXTxqrqKy8eBAGeov2bqtFZzsJqsHyzhwBkBBiK5mVAXqUrtgNzqheSeJ2eSaNVXxF8rw9TjBN",
  "key4": "5r1uD8pfSPeWREn7f8N1ukerBaidqJYaxipeBuuxxHba6jrAn2Ym5qHCXtBHUYZ1S9VZe878aShJzt4RAVa2pNxu",
  "key5": "4qWcBtu8L5qy1qEiBBxqbtHrxuZ1nRfQXXwRjkyXbW7R3tCKxbavWDNaLeTQTBfBTLMReWRaYPHVvRLpHqer8eif",
  "key6": "2SrK9i47FcxUVzyfQBq1ZZW85hZ81vh3Z69E7fLp9pg7ZAmD11eQ1idREiaNRLkdVvDrA7foQhPLCtPapAwH6Q8i",
  "key7": "25SgnnyqHpLNbMTxsCckauGhNaKaNJoJNmKJYxtX4NnPv45WJRSZVmYjnruAH2NGGDE98FK9egutznNTbZvmxQBk",
  "key8": "3V8L2cRN9nDHZBqBv5rFsXd9teRiBUyqATBWEhsL93p3F69GMQQRN9EiVyUXsZs4u5xpw87VRatKPvXUcmGroeck",
  "key9": "2Hk9Qw1mAoJHZysPyf5WKX6chcYjFWGt1XumhrKLxCcL4qJGsELwwLfcWnxhVYT34jic86S26G9yDYAQ1U4TCXLX",
  "key10": "T6FWgCfuuPD5EVN8R7H5o3Uix2FSFc4QTma8RLk4VZnmRyGRdcZDZAcECcD4EaJnHyyJmMRymg2n2QsNenArAoZ",
  "key11": "22jRrvV4itvmBMVXM1zzediJBj3zjnptAKjmowGzMCRe7Ha4nrSLabRZjTU8X2ZaQVZNasyThgu6WQeGgT7z6xcm",
  "key12": "2LWosTKWSsJxcQ99Uk7KUXvxi1tmf4BQGp7G4RnKsdJdhALyiac3YEiPztrnR3Z7y6TZyNn6nyN7JB4Qq2BD5Xpk",
  "key13": "4bFtWrgAH8Wwxs8appT9rRB3UQNU1yB5WPzQcAKYquBcTao4kf8NRjYtxofUysqjvk51sZic1nWsPJGVRqhNcEKP",
  "key14": "45yikKXxv3JGhVL3eHZxhUXyfy5VjUQ6LPdYPtGfK3sU9azKoic48dVkN6nK7CbUkm276xTu1xJmSpr1UpCAffcA",
  "key15": "29qrjuXGY8EDpXf9K9qXWvMHm6dDtgNvgkbFLNP9Z42vuPK2JcxuuSzCc4eGmeq3uH6ufUuVpwwA76NvEs7SwcdU",
  "key16": "5pPgc7Gs9hiqovygiwvttNs1ndkM4bVTEuR7RwimU7Fz9hMrDzJ5abu4qxQrkp5pGDjdq1pqe5L3b3pxVAuBJBGa",
  "key17": "4v1xqKuUGARzEPq3yeqD3znS58ovo61DaqbhLcu6UeVQQ6QsT5gPYZUQT6Xkhq9TYp2b6Rpyrwh9ZoYo3QVQXHkx",
  "key18": "2KDgtyncTHqQG4w4KSWn2x5WEf98usx79imX9sDiBHdQHRJza2gBQEmwfBFsNEMiXevomvZVs9a3b1aih8mXgkjX",
  "key19": "2z5JyvvGQH7Ta1tGT9BhQN6NhD9twGn5fHGEEyNXQgBQbFR319CKZ7gT3EPhj3E55iNW5MAcmue4NwYM9c7ihrjJ",
  "key20": "5sHKKLKWhi8r97fMwK8UbzhtmW8JjXf563A9yPQFi2YQkPKT2ZrW74FyQ6KAfUPQd1nZ6HdJUQGCZgeMajJfXZnm",
  "key21": "5DAxtx4YoH9YAxnfZYoAyXeCjC5SBCCD6ncaAQWyiUhGs2p8pH3tmSKAf4mbqc1MVxkWeL3MWaGZ5nJmkXj1o2Su",
  "key22": "33muM5X7YPi7A9JtQPPYmjgv5p47u7iHg3NgcYrf2QWEDoEn9Labmb4RniXPLNQ7APCgpNxzqyugbpWKV9EUvyXp",
  "key23": "61JqnXJNiKK23k2RwJaz24JcVq3cVRo98AthYWytmRVPxBDXphrpUM3N2nyDZHoPSNr7TyQqt1LssFrzZbR7v1Rm",
  "key24": "4MMxz5Qg17m2ZytNa8bfrC7ofnBzA7JE5Du3ZHGi5kjjkaybntegq325TsBhX3YcsfVri467RxsqUZAMHm4nYHnc",
  "key25": "5wS5rf8oASD5V2X55gsfEM7xXEDQtUFnqQFCo97K7wG1EuH5mQaqCJkQsNiBboDNGd9itJXGvu8tECn3TBF6qDvC",
  "key26": "2zpUfq3CD911wGjb58oN8eSCCyCz3K5hHRjUpiVhiAVc23rTKS9aMdGeTE7SLY5zHEJqay9HkqAYtRx7VdGqhFMU",
  "key27": "WEkTQDEdzKBa3jxP5cYys163c4djq75GMvVPuvGX2H1Y7A1LXb6f5tLHR9u49nymudycwE9SWTUzYgsD7gfF7AJ",
  "key28": "3dpSPcZJvfU4qSKdKWTdFMJ7PqxQwuvg9dJMHDvWLCJ3XfsRCt4orK3CxfgXgkFkr7Re2hvDsPCmJVHvyhcGamye",
  "key29": "2uvFNuSGKhAc4re2aCkn7JyUaj8ZdRMj9F4n2BVy1D7SE9JbC6mzy5c5oJ3MCKA2iEdWmb3a3K7wfwxXEnZiKUd",
  "key30": "2hWX51Zkd5BZwqGNjTfFuk3iT7SyKVz9yR2aDWopHCTeFBJYcynxKtYETwfYzvTF3Zn7f6YRdSA8UyywwHd3wm7a",
  "key31": "2BVSrgxsBD15AD8R4GMVRkiCqg8BkNTYqUSEnUmHwhoVNsUtZS7daZkivphbYU1WpRKzXLGUSZPWhhZC9RAQBynP",
  "key32": "4MdX1AKB19TH3gpLCfRQQbR7xZjxDbis9n6SA5QvEzQ29Nzrv4Rvk5PJjbeQMypQ6ZfX8eWWe5gfh8FVg6QXErkF"
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
