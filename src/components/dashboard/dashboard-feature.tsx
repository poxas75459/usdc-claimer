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
    "5EicoCSw6PtJYYeevDvc6RDdTVAHmrJ1ddvRp9sPGUDjh7cvgC63suMRNZ8B7cEnkaJSvzSmF4pUD7kaLqRN2Sfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pAarXa5DCmEDq8DoTzSTK7fGgxVrzfD5ZmJrdLqeyPug72Y3ho71UZqspzWnfRhSaN75a1oigfn6pQgzJi7D4sW",
  "key1": "37GZAY4dk3EmqBN4Wxh2JHmqe7F9pzVxJXK4CiG6nSX5F3VVuNcwhiRzQSz7ov9xxRKLa3Ra621Ey5BpMKjzah5D",
  "key2": "2msYFQZyBpgw2KB7JZcNd2pmcYgYbd55VCQ6cfMdkHt99VHvkLvk7DFVHSKMNyNk7oHzxzzo3Ds4DgQenr6Y1Kws",
  "key3": "2fY7qUU81vP3dYFUp6N9cioH7FcrbMjD7zqWbLw7CkbPtNb58kSDwf1ebsEtXLT8tcFxs4HrqfAd8Fnjz5bLdj8j",
  "key4": "64cWC3sNGviKdd1QWRAZ7dBHi9w1UaAdBLXsFxLhEj6RVjA4X6kN6EsvEvAM535ZH9tmMv7PvvsVxzrsH6kPqmsi",
  "key5": "5SNiQFCpd2teCtdGGZBJhBq2BYhbfbVpZiK96ZYsg6V1LpHp7A6NqS1yeBWPd7cBYggdy6tkTQ1J28cQhNKMQDNM",
  "key6": "5jWcY83z5jm42BnGBAJXG9boTRKDpzrksG1SLbaT3uCo7mBQxza1e4z3PJD9UaRh6Bi4XBr3gnBr7rxLb2ao23qb",
  "key7": "2mvaA8Xq1xJ8QrDwWVx9KoJNqMKfdSKgAYPSUGFRbdRm24XvKQEfP7pvz4MRbgMKMXDqe1YpfS8XkHYLTUCsTbeD",
  "key8": "5LTq5NHFCgs4Z5kyvrfyTRWBpZV4oYoU4i4ar6dRuSkYhEsaybQzu5UUx1hT2x23aZkyfK1AmNTMdy9YT5H5AcQK",
  "key9": "5Ldo7rEjG8vYUDb48fLn1umvE5qtgm8YCgiHtpSyUrQ9b9rR5TtqAmFa9J6Kc6GR3jHh373eSgLfMzwe4ucNg4rW",
  "key10": "3x7oXsyi7VTFq8xis2keWuq9Fs3NjwWJg1TFd5cP5vMDgJYXv24UWTKo9cDYPoiihqKB1fbSZeW2Eq8DTU5SXboy",
  "key11": "F8FDs2heukBSYsDtgmJS7Z8fGLGw7TRVBZ53ZD28AnjvPwYk5XfigefMEVVdAHjmxkMfbQkhFX8qydTX4rU9qQC",
  "key12": "5ubeMXKrDaS1JYFb94ckRsV2kGNVQzenKgm9EHKvEL1Kf8SnohycnkmnPJsFrtDYUSCrURF31iunEe7e7mxh2DHp",
  "key13": "8kP6WZc3jhz1KjweRmxszVTic6sGjwRVmhwejHpy3hs8ovbJ9vq27iHWDP5ZLPtUFj5jKyQwk937Pve5VtaSrJX",
  "key14": "32gv2wqURncwpTdXLJXzrV9kyJTt2niC4Ak9CLHUUD1jvBfrr2iJT4jJDbUq6noweebgu9h34BqNGSvyhLQxk4W",
  "key15": "3mznGvTpHKwmzvztDRzAZKJPkXWNdGNAFfTaAjk4eJGg4KM2y4iHwnVzuXxTNvrmTLF49Tn2ypqRvgZim7ufxLU2",
  "key16": "41TornyrMq7S5614GdaPa4QpZFaYaw4DNLauWo1wctD9xysQskbqEUSx96r9ZHEGkSbQwXa8pBVqxVZgFWEPBK3N",
  "key17": "3jH6Vzkj4vseTB4rTKCRD4JnkXJmcevhszjRutYYZGjorcVMmVYNYjgSJtDgbLd1tJGCLv4Fxw3CCnpkk8pgZwr4",
  "key18": "5ymD8WUwUa4UtthzLEkxsvnA6fzRToxu6AAnzdgRJHp4ozop4Dg8TkN7NsAo58njQWqf7ANDtBfQQUcVf3ZfkWvm",
  "key19": "5QpuSV2GmQLvh73nyJ5LF5zCjn5MAwoaanw3xM7AY8qr6ytYn6LzAKfoURweWXXGL2a7w6qsJQjrtkhpLJ4Uk5FE",
  "key20": "AJAUrdopjYzdV758CqK8yN2AQ6mT37orsjXJ5JDqyPeC9WPrWxcqzgwJqCigvyRWtZyfLGWVZ1UZornVu85j17N",
  "key21": "3sUxexqKBBziGVQtZpZyAqqhuWsEB1KQfAt64m3xzXJBW3G91HunVAq6dfC8r1iqU41tint67UyhzkHTViWa9o7N",
  "key22": "2qeBzGkeMpkXTZAdZwoMqHpJ3kJNv1o9djEJRLbLh4kbY61gFdCHrYt1QTnxmXoa8BFH69xWKdtLeRjReYDQA3u1",
  "key23": "4QYUmKSPesFLxkA71n26AmDfAsdCK5Xh6KhPgsKEwzaFBBHnSuuv6rKVQYZJ2eEEfxPN6srhaHnE2woWipZ8x4Kc",
  "key24": "j27eDvPgMvVmchbGb6RHP7dqsiA9upLXycTtv1Q8hTaRM4m6BxeGq48ggwYxRFTv81YaR5UaXNqx6KKg2MqzC9w",
  "key25": "2j7o4QoQ25eRK7r8krEFMQ9Kvdtkeurr5FzX53mcV2VkZHHwdpKp9Cys9SUxvpUDV14YaSiHRjM6KEVwWU9hC4QP",
  "key26": "mBeAKSaKbL9CGXJvcsotJv6VnekEg5bQg2tmBAUR2dBiVdE3CnVpG2T4fJXNzmqrnDUTBwEvUpeccSGYdHv8UFg",
  "key27": "5hPYwmFJrA6iUm5Lf7MkrJbT6XfKzc76S61HZBVhLP2Gy6KZMKRFQw8ZVChQF5kwFmFN7s5XB42zGqGi84oRHDcJ",
  "key28": "4mLytSJMeSwTtdjo7N5qcQxqegEGUjWEPA76ozZ39BDdd8yMtZ51u7Zk2MhkZwxec8W48K78S5ZtTwewWLXnLtRH",
  "key29": "5k93hqyDb3fv8uXuo2HL9kYdJgQX9uG3ykcGiQxv8qS8SAejts8EgxswzSp8r8nyz5o4peB9duYUAqmp4bUsoZ3g"
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
