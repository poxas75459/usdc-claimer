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
    "3nySr5xPHdgQsv6DfD24t8ZMmeqdAoXjfhPriVyC7iyePLNWp6vrz2qVF28eb7NGcj7n1YnM7deVDw6YSFXnHCHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNR7VKAqFnexHoaYMWmd18AG69ZPR1ZD8T3zeCvq15ViAYFxceoGgZatKDdXMuSWZrbP7hYZ5xDcRXXEdhTUdeZ",
  "key1": "JDAj81NdmKdNXEtjCEatrD9fYt8WPZHv9Agj7SgR3M8GdEwW4H2ygGJAVbURqckHFpSJ1tW6vYpop4NTTRrsM2S",
  "key2": "4yeBNS9EgBZ1Pzb33u8MqUxxXNei4xNbiJmw6PSgpwuYuNjZXDR3MoUyckcjpj8Cir66RRfXD44GkL9kejYsv5AR",
  "key3": "4p9AfPWiFXqDtcU7ZUnCEjEYHdY7y1gDEPVLajGHshQYWAoya9Uh26kUMEwEhjmqGc6osnELTYCTenzRGdpV9kvA",
  "key4": "4Bk29jQDrLTDkhrAUJqU3xgA8oWVfDe6t9rzSqrDsgaLwyL3RNophSobFVxUPXhnrBkjwe1jVXRHFjgGhoxJHAuH",
  "key5": "3WRTDZqr2ojEBcZQQzhEh85ym4aUztD43LUYQwiBJtCx4fyGMFXox5Hc4fUfEa6pCpRe7WpEQBGtdWUtH5MsAVST",
  "key6": "3EJAHvb6B4XqEXb7Zz7UmrxnXjkjvbvYLAcxngjxUKtJQ1aqKEJ1LLLi4G2vyLoGvABfyLyaLjhTSVJ3dSqe9PBt",
  "key7": "PE4fPkTBUQgPNgBH7ubFFjY1aHZ6bAkrD8XFmrZLq56tGHyLRcJQS8CwyYY9tQx7ouB5ykDA4EZKNXtpW9Uo8te",
  "key8": "4YKCfubKJ83DkLQWAGVQPXsBZ4FsrxHkcMfRosoTTETKBGHVgooJqDFVKii45h1sttYmuv38aTfHSS8Z1UKMVY8y",
  "key9": "2H2HfQaQzDHVRzFcBQ2mHFW91a69vgGveci2G9VWrFaHacp2az9KsJKxVH1GDSCoFi8y5jrDrPGWWGtXvtH6hB1U",
  "key10": "4rCfuEG4TEjvVM7YJdnR9EzuxQnVTMGm1wq4128yfPT4UusMFgG5BdoUvY7342xu2QHHJuz9njyGYK2Rbb1KLfFG",
  "key11": "562VoB9bqGVx9ukCq7LaJ8tVaxBnXKJME7eAGUoJRh3EhLHFVSBm4JCYx9xMQdq65B2mnGjgYzRwTfjcHz2LkHot",
  "key12": "5FQB5XJcunvNJFqmaEimnzgvHhH1cvSLkb8o1Yrhhoa1WYpt2m4bwhpbCGWe1HdxUCMWpVDsYZmDBnJMuWm9Dpsa",
  "key13": "2PZkXAGzNtE7CGCX8eWk4HbgoAuSUCQ5qhyJz9iu1Nikb7opzAEhb5DMeKg2hUnCLtsqFf3GZtUAbreApNvZT5K8",
  "key14": "2WtCHXDyzVc5P1ywbPQpjfVxH1JJBfjdwG7J9WpTURakofqZB1rmrMWYTXtZXccyZGt1EsHuDksRwtC73Spz3fBi",
  "key15": "28D4vQ7owBd9J6t66MNZohLy81GMWSM7ud8aAxan8vxjCyHFQSNuLrr9vdzWSminxLtAukFQia8wgHPXfZRRcF1Z",
  "key16": "2fcfzEmeM6xGPWhYLuLcfjjENwMCb3Mpv5Khbu2jthwLpm8c1Xm6ibQZjKde2Bm8pCy1jGBb1kTr3gNqa5hzk42",
  "key17": "5NhC6fd9aVBtwJ2Zq9CHCXkhPnWfE5kg6WpZwredSbWR6fZcMAT47bGmEhbsM5i3bZaGDxFYpUs3CwfzoCwNLxrG",
  "key18": "24XNqvESfFCnCufNDjmpJCj3g84xtTdYAZYiZrCaEbUoWCcDkDTZJNKw8fyfmT4m2x7TttUMAiatY9c8RYNNSAbD",
  "key19": "2ox4e3vmHwrMeMzXixcQJY1qsZeXPVNFEBMpXckJkG5Rm3MWr6EPU1s7vVq5AFA5BfCpNpJUDNk5usjFKG2mQPZU",
  "key20": "2bKYN75tDVQzqRRZQ8DNR66jVbGRAdLbghV5SjYRVr3QtXxBPfqHbaqLF8JPrMLpfa6vRbaFkFPTqqytPtEjcQNC",
  "key21": "5rW8Lh1cxBkA9k5PptYBkisZguZteLzzEhBv6pnEZW1UD7kwbhNSUyBBP8i8DM6Y6etLJJBgvch9koYY2MG1Wknw",
  "key22": "5wpwUn1uBXPU9NpX5AMXxReR36fLCmyqNQa2PLUjCAs8TYKVA4TWEdLXVY3y1y1q4jfQLQFGsTgnsd4QYHALXMm7",
  "key23": "38krhv8iJNg8WCX5exdgpyLL5oFdGe44nDxPUmaK5vbLMyEoyZypfMSoUasn6jTfTGCPhvJpScdJR8WFLjgzdusA",
  "key24": "5nzcvDCnps8PyzjgMhxU8fSUZ2PT2i56zULFA3qXRpk8SVYDxe1wWqnBSbr2NAQgB2m3vDqvn9P5HsXKdvVU2aUv",
  "key25": "3ZvTsDUDXCHEGSM2XXeB3E3obDCMMuFGtg9u7dBvTTZp8XJg6VD8KPxGQ286TsNzA3A5xYE5V2KHjLgw24o1MUYu",
  "key26": "UKsWCZCjsiwpmCcvExLmv78VvkpnSNnbYvDATowKqUAF4B4uQNL9gcNN1fTVTfCW1B7qHvRd1aVeM8BWrpghA4j",
  "key27": "vtk7YrocZ122emeiwewkUG1yvBz1jckSqdWBsVJvgtzDZ4GQXCswwXMRPrLxofiandRf8ypMggoQV2KaVimsa8c",
  "key28": "58SMuHLj3A7UWRrB8mHNWMWSPNhzWm6mYRsLgqHpoQJxK2mtj8fRUs1KybLfvMtu67BxeqPxsUrCWzci2AyQeTi7",
  "key29": "4Uouke7e37mfNTvy9pLzENrhgGj8q8UbqxBbSbaouR9wtawa7Xyjrobjc9Ac7BcNere4mKPxowYPgUyBVXdYnWey",
  "key30": "4kysiG1Efj73rKuLYgs7EtPor7X4yYjfodA5Qmxo4cgVgPTJAdcNfp1PAmztBPvzW26DSiRBK4TXrygViXPvfq3E",
  "key31": "2KDw7t1cXiK11daULnntqr7xbTeJqvzouPRQzDBGnwKBUoYFPV4h9E1bez7f5fdvXYZDkdandAtS6Cbq2cS9Tshh",
  "key32": "47ry7Le7egrFYusZqiQYZWaTwc6xGAQKuofu1Siw16txduu5Y73UQfpYtuSM7cUUPmFNXJxYMUbHBDujsuuXf2td",
  "key33": "5vKDh8LdCVpB57d17RZEEh2ywi7L2duHPFTEkSvWbRzRyNnds4QsiKGJKHWWmQq5DB9wVDoT8seVdsmK4GRHTVt5"
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
