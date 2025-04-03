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
    "kzQRpZPrXT5bx8S6BvddrRk1DQfGSio1XKw2jWre9GRDxGbZrwCHphfrSdrp1ydTwyHQr2xtvXc8awzDSzvYkFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9gKzyndeVFXFKcL4DdUK1E6zXob99UfQic6Mg8h3xHRAzbSeBaFSZ7nYkK4YtGCz9XBQJoch2QYBrWvpCcuGmXL",
  "key1": "27bhdWQf6AEN3XGUcmcsJz1PSFwtBQo1MC4fGFbkMcu5VFTkkT8sHFSxR1nzUiTu2qZ4sQ2kPV21uXhGP1tqKyQR",
  "key2": "5FTdKpMn2Excg4bBGzXLzr1DNHfZVEueUVTkFvzC8tJmjZ1SWxww7wrUSffCKspNDJ7ikFCwFBHDn4KmaWFzC8r2",
  "key3": "4jVjW7XiWeEtTBqdb6VN9GdtLbWWgrUyZgUbjAYvtNGAxLwBiP4GJ481yroQy3B5xht4GfYM78j7UCz6mLKCtYWZ",
  "key4": "2eFpAUsb7eCXKETtYuH16U4pRZQsvWGkWUG3PyLLQwTfiR4P2A1LXirdBWMBHtRtFfGs4XHLuuApeNEzYkiE8DxG",
  "key5": "3UgCtgw3nPUD4oys8uuMdrUfuysReyjeFWWkj6cUdPWyyDAMSZHqKRhy61VkvqB1cYXEdAzn1PfirwSWc7U7dRFY",
  "key6": "2djEY1McYDr2jP1eFYj1a2fFhsjqbyuSB3vcmjH3AvWPH36ZjFgFxVV4pzZorhPu95Zety8ACgkqfwZCE1k5JjHm",
  "key7": "4nx3uzkgQY9UP5XQfsJqzkPgwgrbjB74J8WnJjmiQ3XjiWbABXGoC1KTdi6NS7X1pdzshsLUDmVHKt3ktsymV6Zy",
  "key8": "3iaNrCm7jyj7rhVNWoVLsHmsa4FbqKJ4dbvQJkjikv24sTZr267Hqkrn6Z6nZgZUDTUqyKQpFz58PY6XppRdmAW8",
  "key9": "5gB1LEujBABeFgeC4YUTnJhBhjnymcuiytusLTVjbUbtWonifjDvCKELLRmPBWtprPietAYTe4Hy8kHZGnxrQzq",
  "key10": "3MNcBN1KK5rXWbgZjQckN3aE8EUYZETMqeyuaws18qhmWUrBbDydfAMS4EYr9moA7qENp8yJNUvkZeh6TE1e8JqY",
  "key11": "25EXeSZL5oPo1eNesshsk9KgFaZrokfM7CKCPPERcc4ScZEzWz8Eo5pPfo15dzauVr6n7bNLgrhDvTWV7XyKgjc6",
  "key12": "2mGiPZUACcNywJ6AGSTvdf6apFED85YH7askGjKRLSbDpmfmZkhmNdRrftBQA8TmDTNznnU7HWPXDNgqgDErcHZm",
  "key13": "2Qp1iXVyKSJunX6tp9NQZcivq4C6mjFucu9kTKAmMp21ceKgWDKFGnzKxpcMZKQoNLNLELoG6JoJRGwnuGiDSYF9",
  "key14": "5TjJF8wkU54ur4kRTW85uczDRneuBs7SSFmND2k6KarAop1UkitP6SFMxJiTBgtfjCCCs94TMWq2vJGTEs3FJZ5j",
  "key15": "5VjFvspjjxuifHLNBgiQtX17kMgbHiebBhQodtrGbTQVBBmSc6MhiCJdAGT8DZL58r973roNJ56NrWUJXtH43ih",
  "key16": "43zkKHn3QendHKSVGM2xrYzP1McaAA4v5YQLEuDjp4NHGWrh4HdSjCAjwF9fdXXg9k7vakh7Wxcj6hrmG6NcXGJu",
  "key17": "5TejkcK6Qf2C2zraZCXr6p7c3BQNc8tPwWzdm7AveE74ASmm1GYXZWpfsoS7qKcekDswWXxabywGCFS8unS5GeUD",
  "key18": "5cLCje8QpmZZaQDcLFFT2ygEAGDEVkNiRfYfjj3SjpsHGXhj6aTBtvoCsCU4T972Bh2gFJSvKTvsbA69am2LE9Fz",
  "key19": "2QHGWyfmvLYHVen72dupCQNtQZcmjAGUeUHQqcfAVuRctHhPbqzNYJfZTjvyxWGTd9SrsuH3h9pr2q6UESebLY5c",
  "key20": "NYYawWhmyYPrgm6hcrKCHsZJkGoahcY4SoQZW8A5H8HLa63Ea6Z35H9VZkxdDnxTtDZNsrcW5jKkysh6YJdnVSg",
  "key21": "5SCZnpN7HMY3xGpreX9uZzdxaZq6dxeNTHobqgJ887tS921HaaaZ41D7e2gJ31aaJ7gCAygU8sx2L4fUa6z7jYrA",
  "key22": "EpZtouAjD7tmB9CeFG19SZRwXDL5h3xPmycke5kXcJGa9ZCmfq6sAn62MCy9WStAeH8oTaMQAvCu88Lj16tz5B7",
  "key23": "2mj4RYEnmKFzBteBJMXJN5AtRJZCxxtEVdVf9fW4XcRCQyaFrLqt5WcUFfGAwaBrX5NY4PpwAEKpfLjEE3KHi4kN",
  "key24": "2ps1rMyQ491HBsrY6R9ScQj54cx6ikDXRhvQ1QesCphKuzURKfJHACxXCm3kJ1w8sSSjs1SMAX5V4pRpQiSE39Pe",
  "key25": "3AvjxW1c9FVWVYpQnWJ8dXruQoSEYVgjdycXAoCtnMukZat82cqQXcxpy46HK5v9NDip99yFr8zMbGcY6Bzv3x1y",
  "key26": "54whZpbm4gXV8e5Tg73eLmkseNAGLi1Q7E2FJhBnXQN7ZGizPCxXaoZzEWMRPE2jaPg1Wo4NSV8PSARWw8L8iMvV",
  "key27": "5RaB3QPXsuThw5sott2J86anCyXhoSfkkZGpUCi6MqPFWaLgNR6h1QHPoN1P4cYEoGmxrwW4YWqNQwZzQy8G7Q7N"
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
