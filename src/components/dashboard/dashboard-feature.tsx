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
    "4k6XjDrYxnpaXrh4fv4SVr5nqxK2xTmjsBFZARsw6DjNCC5LQLixLGAV8jdBDNLknKgaawbak4MtYCQsimudvVya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vMp17ucUHdnFMk8YhKB2q4HtH3tDHRXHokwXjwzrNYVJos3QJY6uT2KPAMW5pe1x9zRkx23X7TepfV3hihW18fZ",
  "key1": "2bhUuzKpU9cSJFygCZcot8npwy48XketqJH21soBMQTgL3iSE4UZcriV5hz1CLYZ4txjDZThZqCnaALtrzWGU4t5",
  "key2": "4vTHhb4PvxJqvkEZE5VzKGzxn6uhtbX8fpqv5tdRzVP7bjpBADhkzQnmQY57EwsmUwzx47ypPRfW7mTkh9B7EbTv",
  "key3": "4W4sQiykatayaKHiPc2XuFfNCJfpqvCxePFrcSqDUxNfndKUnxedYUVLxGa3WxDpjditUeE2KothWqSeyYfmH2jm",
  "key4": "3NkCKhmPfESyFdSngvE1zdhbftDvmyWqLWaJmk8SngfGMjya5khNhm3kPKYN6CXdkYRpU818wUZjVTnd55Mi2SqU",
  "key5": "2bSi2uWasQ3bLnZiSkvW3RSaQFwhAb1rdyJa1eSDaNXwqV8ZWapmCD9AooJwZQqusinEZ4M2LC2dZPgTXVXsXzrY",
  "key6": "4CVWR9k2Fo2TiBvbrDYpvaQUQAJZqAh9ELBftJmQEjDeWfZ5WBFYDfnLvhcetoZ7TZG73do4jGoa4YqJT7PL41Vo",
  "key7": "4sjUPxyaAN3GnQ3dpE5aRnoA8wJ4jmLWZyd4sUGevnw7pTPGAaycFA9jnCXYo8ZfmTBkRPUzY8gMssrTmVohtT7v",
  "key8": "2ceujRUFUDXejHpiVZQgHY8KmQ1e1ReSQSAxkCDpShY7f5S3z9uV9bRZAExMgzN3KJiwxdYu1w3m9wXQn5drUnub",
  "key9": "61fmfd1TtW4kApAEFPxrBz94XQdGDbghysk5C1gYtGSyty54srWMsKeQwAncakrrLSL6WKo1i5NqfRwahEoEeDZ7",
  "key10": "34JDWkYkxocXeXsbLt5NHwnvmyNyvVpGg1A45kjwmSuc4WgHTehc5neMqaAEZ1B86ZJTKAo6egZwGPvB3fbc971v",
  "key11": "24mpzFkNcYhz9NnfAt8AKPF4tLJNMDRbnLrUpDBLPcMJtUXU2Gq3P9zktTGmM7vhWEJEcfpyGzGAv2SYwdtVsHjx",
  "key12": "5jHmnFBda5BacJAad5rGPiPXZYGZzz92omKzQLZjoPtzuRFan53LRBWVHF6nmSMvvyb7Wx3WoepK41pxtgJCxUdv",
  "key13": "4rS4xwAw5au4vAGcouojpE4jbxtDWNRepxQKcFagZeG1rzK2NaM86s5j9USNZFEKzN7jo1EpdmH5pvUC1tpvzpAQ",
  "key14": "2iFcbrTgrqq9JfTx8ZANjyx1KQuPTudj8PazPsojbwEa6MEJ6GLMAXMZa6bnxTo9WStSttnn8RHmUSg2drDcfuCr",
  "key15": "55oYJdgJKPi5We1T5NizXZvfxX8pRo5RyoKE9Q21vpKXTF1AQAKbUqpa6BRHgvH9avUDc3UZpSBdZVfLSGF5UDa7",
  "key16": "42QWreCiEYFRsci1TDzH9xvF59p1buFWfHAFRWVP3raDbn8aN4DL8KkTGGEfPEfC76bUm7MBkCkqfgPZDe6VybBp",
  "key17": "2HFGBYjqmWv88zRZ6FW1o5YUWPK4nJkkDJd8ejK31vQy4PL874BP9aofLe7k7tSjZyvBem51qYdyPfDDznrtDZyL",
  "key18": "rUjQbJr8WHEZ8qgHNaWMgr4BhEJ3TvZraEYCzCUB6pesWMFpvFYHB9qfies7LrgVW5QXcMzKgRx7wZQd42P6WqB",
  "key19": "2Fd4NTwE51izNU2jXrE5doHQQvgKT2pXb3ftZBgBsMWvVXq6dWe58g1dTg6t9w7eioR2J1XuM84ra6b3aecbRAQe",
  "key20": "2ob4MnNCz7aioQvHYkPj6oKToy3edX7R3YfkgFmXa29JyN2tYRUxwj77zHuCqLduHTrYtqCxkQ66Q1Zra3GAtFsg",
  "key21": "2ytjainu4gwYCzRGSuxCS49SXv8h8JLvEkd94sgdLfFoSkfUJtpWoKA1GNB1WzoC6Mv5qW7NajJ49Re36aEvVcFA",
  "key22": "2oQsfcmUqV5aKCGHHA992TGMSLQLYc4kU2aByimxgfww5fhJz7SN6XDrCYJeh4hTnN62ThnUvqkLbvb5MHXTrq4p",
  "key23": "5xw8z8yGLZ18tUu6CadC7oNU5HMftRR3WwnzmG9X5D9qKNvRgBfzznkuhLk6rARZMbYZsqFNTwdxBQSq6punXKoK",
  "key24": "DHKJCWDYac7SsrypoHSRzrQDngE9MYUwEFkC1Scga1YXJprGMHCtVjw24nSC4E5T33L9aMZksGNyzjzMG1KHW9s",
  "key25": "3LMC7yGUQkmbo4Kk8E4hZCZFtZsDd5ycfs3G3TpcN9Z3YYimtx49kZLYxuQtGqkBT4GaFkaddeTpmCdxy4cv5yJY",
  "key26": "43Y3ws9rsz5ZL533ic9ZZePgywpWKDBsFfkYQBv5Wxubky6xjZoUBHbTnPSXVXPMAbCr8wV68GVXJh5qCCKHk4ub",
  "key27": "47TyAhEM3Z4yNQ27XM2qVk3gdDTSGS2Sq3Hvo1dN6ryQ7yyEFPcpE4vSv2Kra7Aa3JEigHPS5svEgJmLpYnjMye8",
  "key28": "4iSpZAqhgVoDqXpZQqH7mYvPK1Wz66xhqVZ2w13ZTS3tbP4zd1ekRw3HSAbq3MUxyguoUj5UDoWMDvqCLg8qEQ59"
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
