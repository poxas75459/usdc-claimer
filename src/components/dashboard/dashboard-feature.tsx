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
    "4YBi2TMaDej3THEvTWbTCipWZaorSc6onwKxcy7zG3akG6zdKYqnWzGDD6ngAycVMtQbVaijTi7yue7M1EMPtLkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hyvWx35Q7TSCna5bRoP4pv3emEPrgeXwLf68Bc8KdFKihwTsXm5hnPnapEUyemu7GhRMaxsEaUJfL1izr7FyigT",
  "key1": "2Yotk48usNzT7v8tCN25MEvdFN132kZ64xBebaBMKsMBWtRqy25A2ccaDgdjk7MCZreJutK5f85tHbQpAEp3joMN",
  "key2": "HzWtEmpbSDpNDKKF8ZB3beevZMCRCEuW6GFbAJJVzgmQRhthCPbc1rdSpucU1bBu7LhQC3RpvRwk1vd9gT6kAUt",
  "key3": "3a7WHDhzQv7nmPpL3ZSJiVfPKEQQmaVN6XbgU7ZkB3d6iHM7uKyTsmySzug51NrWFHhNY8s528Sz52yYKUgLxc1w",
  "key4": "3DmT9PpyGXZh2co17qW8EikvMRfF8hCLKT5UvE9N5Muxty1HiSuXnanHnB3XGXu5xXaGKttUzKx1WWpriUWjMNH7",
  "key5": "AbJLjfts5vbbhmjw2HYnJewVb7sw7wMkAq1oQMqGdD47dMQCNT5aVxURxEGNsej9ZXgiave6FCs8EkDpePFUjyf",
  "key6": "hbsxa85WewuKRsvaxEbAufm9j4tLY6XVUSjzQHs7W49pX9ZSuEDWqqdYcCB7WK8Vzgbr13Ce7Pw4yjVE8ySBD66",
  "key7": "5AmVWpr8FfCSu2PF2UzUs1gziVMJQo9WWTfe4uZ9dPhkPbc7D53iyYwfAzKBwFR8juyCaLvZsMZnaq9vV1afRGGU",
  "key8": "5wveKUtbw6arYtg197NfDKTFUQH7d5fexdtsicw3ftsdhZ8tf2dp25PyD47ccDWdvasUxXorkAAqRSg2bRFgCxqr",
  "key9": "4d2X4ThkXj6nLi4DiiyxKAg7dA8CpcVkNjWB5mzDCgWXSPjxMtwYbSAoeYtpdW8vxtYgw8MvY2jC5D8iKvFaxvEs",
  "key10": "66crgtXG1nABFUazVJ4Qt25SGbjQgEKvpUqicPugjJrVF1KefQ6NbzuCbBsggGiNVrxTMSh7Jy4uVFN4iivLK9qR",
  "key11": "Nm1XjwNb73oUDzft3xTzZXbYYxSBzq6gGFj8oWUNud7avWSPoqtyq5E2tkv7dHJvLPyJ6p1UDtpg8bV3WVeTabA",
  "key12": "4v4qRvg5DzRFcYwVHQCFs5MfACPsGEvpfg7LGwDYCtjEWL76y8TQUtn9ncP5T8taVwdmkXo2o35cXUVzjZe57Vb1",
  "key13": "2rPsYprqSoAKxKHJ4dDBtDjtXQfEbA1jbHmsqorLXp7sGTVbXwwjpzbGuBsYvWZhtubc7gopL2GYPGH2YhYsimvF",
  "key14": "G8doNkzM9wMvg6KSj7UynvaY2gRxQ7xyxnyyvRcpiheCKbsivE5g1bH1wmFihjGSaeUNDgQzyrPQmMD5oUgWezp",
  "key15": "2yLDPECsPdGCtKCpJXanvhHDvUXVNJWuXM9ncYt6iese3JMKhfo9bbEUej51wu2iFU4psUM9V3Qvnz3EyDvS1yx1",
  "key16": "3J2zMdft5MsA9ZwQVwmCsMh5v1sdmKFtQ3mmVSRAvdEFY1pRt5mpak1uhV1SnLhehnjvzBNSEhv7CoSAXDAKqqM1",
  "key17": "6WzisWuekQ6Qdv9EUareFPru32gZjfbgazRQqzccVeCXqfY9hymWXS4EdJsAuHSDf2XUyxwWzT8SfVK2uToCi2e",
  "key18": "24iHmq8theQpwLiBEkxjxbJDBWddZNtnjBLX1jggeXNb8g7LFsPFhghHeA5cGztVSwN1LL3CdMZ6H6GZPHbZFPqs",
  "key19": "5PqdKe11P1Tw5Y9AaAkcsU6JzRMRgsAVzBCWPuoo1xKsGKetyHxKqCHdC5kxpeeC2yh6pNWKwLftd568dLQSzXdq",
  "key20": "4u88LFh2yC9RsmRmemdGeEyxiEr8zWX9JhTgrFNut1Sczeit8QtgCZQVDceGe8J2UPG3VNoHifbwAdGFrgNGE8Xg",
  "key21": "3Y5EuYE8DSKW8RRfZEZmFsSeQrhv9ac8KFJzopsJnh2v2QpTzUy45yHANGSje768yVTDDs6tZ6mXU2kHR8ipJGfN",
  "key22": "5jE1SEUjEWeegTZujfZHULRg97EEVaYJoKfXHzZZ1K83mBNPj9M8opjpHmZ3SBVJjnScQ7DgCzpEmAZUGTmcFbZ5",
  "key23": "3LaPoUXMdb3rJCDHgPTptVoKRdBQvNoWNZzkuHReM4hvfNX1YYWXi3gFYi82q25CWbgcDdzG1iNH5cUHZqVBDzdM",
  "key24": "3sno5A8RY4mKX1Ca4m9DwFsEo4fkx3RQorg73Vvv2yK9vjKqtwqkdeCqYSrMWTyvdbCc62ow4b5t4Nt9QhYtRaR7",
  "key25": "2YjAcGLuxQjo6NSshiE5wmB7TnPp2hexNd4gGtgJ1GPMdpPiKGZwFfvHaJKzcMHnhi2AF7y8gU9ibY66XQZAKqdg",
  "key26": "5Mu5L4psykuRNTQeMLcoqadjWbsdsuYPNotiPM35ChE3oKqBb82AxMQ2oq8h5H9kQujDMrBZHtLWVW9pWyYgu8gM",
  "key27": "4RphC7oQnQvAxYTwUfuEJaZto26bDE3aBbJFpKqQyvdWtqyr4tf3FgiVLMZ3vXFMhEiAd1zN2WHQKkvEs2dmG6hj",
  "key28": "BdA3XmqhNjY8ec7ncPCvPFYxyYwdjyHVWtUEFvE59QQsyjrL51u8FG4EFrfZb97LxCKNZj9wwyK2W55UpZUUTai"
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
