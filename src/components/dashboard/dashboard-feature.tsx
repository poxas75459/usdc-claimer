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
    "4HrTZVEndZC65K2ioAvN913Xpya2MhtHVapHRZXPCX5xs67oePAtg8QdBtqzz9EJRdterrNRvZGbyY3tz6Zp8nPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UvMMVbiFeNHGxuXubqjci5SKCP2n5nd73dsovWwGh2oLs5KWjx1bB1dBYhXqaWJWDww9QTkFfYbYfHrSWakimzj",
  "key1": "3bvn7N73zhkbQU3i7b4TZjnqJCHGMGZThkkRvAv87sa1iW27v5PEAuwkRMnWaL9AMyM269GxLBFBFU35HhdPrF5q",
  "key2": "34bc6XBHSa5meTPG1iiJQm3zAHMeyK6SjMsXYV9N6jeFsWw1k9ptRCpJvAy2pCEJpJBrXeJXVUov72aEfztJdivC",
  "key3": "2rz8GFUaAjRdA7biZQVPBHH4yB1Q16DAjFzsJ8HDuKcE8sxprLW6UY7w6ku5L2kB8oC1uXkX2DmJWVYBKUvN55HT",
  "key4": "2oFAShvvw2FKVQicqCMJYvKvqSMEHcVCFFMMDwZsAwx8V17VMMEo2mfmQjkNkdVxKp7haGpXBwhGbkZ4Ws5SmF9X",
  "key5": "2HH55qiTcJGdKvoFf5myq6F2i1WrmESo5em9PA15rFryN7Kpf6zqbseYDK9W2xGQrugtw6xhK2R3pCpe7XKkdeZV",
  "key6": "5hm5PD7BXXeUc74qYUnmD11DRtcNCYRZLSC35fHXncd3Mt46F9BfSNQvNshgkktLS6MM1ch7oXV8DyNNQRWq46HP",
  "key7": "25TPM8g3qUAW7iFGQmDt6ijbCHJUT2FAYF7WW1vnBgxP843x4cLrSvCzXMoBRL71EN9i79fFLBNubeBML9GFWNJy",
  "key8": "5RC3v9HEeEpKFRhAzxfnGbTSejahmfynJUZvVsJRNKVgksXbsHjBX8Lv76eyMWKQg92XUL8NecGFaYi7yc3ANQB7",
  "key9": "4ss3DBeq69tyYeZZS5VqLvfDwicP3xZ4kpTi4XBYKKcA4EgAxNh9bthcQS2rd4HBkLyf1yLHrZe6ahNXbVF7As13",
  "key10": "4vpzNKP7rfQv5FoTP1CvHMMjKoGRJxYMV49tA5yenNZaf1TCoabQHw4rJL1ePT73mDfimMPZwubgXb8qE3NZERpX",
  "key11": "3RiRcNTwV7gqH17aq7R7iZmApTDyByvCenQttMGXW9dsreXVwJfaR1VvVCWWnmDM6JQ1De1KqjPo7r1TBjqzLLso",
  "key12": "4L6CnGLQvz79p3A7vGnAWRdCoN32tiufB3JBRDu9To5VLK6k7vufKtZSmjd1B87tPBGmUqTwB7PaGQ2vjUK71SPG",
  "key13": "4JRTVJqHBcuJiZq7Yq1r2dY9MD3vNRaKGHNf1z5dQSrMWBofSKA2NaACVfiREdfjG85C255XBTorNwvhxSDaWDzo",
  "key14": "61T5JbRVcKLdD5gC55djEhiBHG6uRZGnFtbJ9H8WRVjVrw4QXDQYoTdWEXVtkCX1EBRmdittKXDHfxQ1n5bpnbrW",
  "key15": "5nxKDeEzqvEbnK2toSH6bUcNrTkwkPuNWb72bRJcv4uFT8roBnpciMVyfKRaHMfMjthrUHK5DdkTzHKd4mJt1y3x",
  "key16": "mqHAEj3A6j18cLYPtpPnWr2ybTKpVJWX5USdhU4LqfnPAQ8D8qtvsHegrnrSoMYbawTSGkq2Fpd8vFrKBDCwTqX",
  "key17": "5o5RXwFo3wJ6VqhYo66kebAC7L5oJcRPMfNTAJktaf2rxzkwtRrJmiTxNR7MwPKpaGQ83uoGGBnauMNCg6EEWVPv",
  "key18": "2BPNTYbHdhJgHfZpvzpBjoLB1bcmCZq5Ay5ebW4SFnCLcuYDyCQBWNTHs44Qrq2k4SJYsgGV2keaPCEq1Cr6LM8G",
  "key19": "28rQW3xME6pnrVQ2fhpG1qaoKkpyiVxwEiJBHXqvaP2chZ32JujdjKC9LmgXUyv5M2v1RqEn7LakfRJH7EuCphfS",
  "key20": "49z1wV57UoX2pyeftzypj41ecjXgUnAGmiAMrBRqhfPYHf8ZVvFpQjkWYjqhEPNgjx9LyJYL9LGC65B3MLZrADog",
  "key21": "3ddDvpkwSWWjiftnCERKedShFmLbkhHnZUYjRCq6iFNvofxQNeoFjgDeaHRyjYjjE7YYaDHkxL3pjBvmchcGdg7a",
  "key22": "2YssfKXizAT5676EXZA9Wbr5ZkUN43VAvPidMsKgzzkioAN36kqkcCLx65ZmjKGenNa1gFZoM75hpuYv3HYRbYyJ",
  "key23": "4W76JJG1ofs5sN7KPedhGCfkUK4EZUek6BeG2xfj8NEwxNU2vZB2neximSTCUVTUjpVUSJNe2BjdubUkN7nNMRPy",
  "key24": "2CP38VZNeQRkFXpCZTnbf22bVYSbD3MiCoog8MHkqHeQ9PLqgyLWakqScTncwJmpv7nvMJpuzCDBWM8zxtdhUjPn",
  "key25": "5jCYvoCUhNTPB9JFj5FXfj7RTb4Sd7p2hHcyirsHuV16P9ffHeGtW1gXa3jCJwPLZYZQUnX5t2pRgMmEk8AvSHJt",
  "key26": "5HpErUxNyXduvyHKm7gqXkwDuxFH9VSJuK1RBAgEyfbdSuTvzwRkk3XUj1mk5ky4J3YrBR3uSqdnun36uva5EipE",
  "key27": "54VimWwhXuUwCWZrLWAPmpxwZq86YrWKPRxaMQLLnejudqiMqzFC3cf2vcvHjx5tpQuB9xYGTWkPJNnuvTQBUzPQ"
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
