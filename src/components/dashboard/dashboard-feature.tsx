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
    "3RXg8aHYAhWdtWcW7qJYRCMwqTbtvhyGDvvz1UYN5xCbxgnTaxfjqwRT6va5YHjgStop1y5W961wWENU7cqsyRqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJw1w4JodCqcyRUQppHXYCJVvaQhZsPz6RXrDD4CXrqSLWEwE6UTQdt3iY6xmDh41fhq5rgrQVV4zjwpcZ8A6Tm",
  "key1": "5deWWZwg4yAuNjSaKsx9GhzVJSnNYxqKj3hqM77yQWZGKdMTsVMez3ECJ8ddxxzZDbZ29NK1E8rxYjXpxHhp4B8A",
  "key2": "2VqP2Lpe4Gucp1HbpeL4EpRij2PZiKCNAoPyc6J2EqAWAN9sz6wE77dHTRz7aYSmWqEGSWEma2pw1oARHDgELUez",
  "key3": "4T8gfY1ra8b4wbQVdAxSwf2Dkvt8NAdHxL9Qm5zxUJ3ome4W6eqdYd8eanhSE3JJi5e2SBkbaDSSfjRPWxdAv29o",
  "key4": "23hppdu6nrg5F9JT4k9pxKW9ZM5C1ZbkGJj5xNXAWkCTdxB4JQG7NGbgQZmXYLQrvR1jBcPArWJUjHUFuF9WsAtK",
  "key5": "4vDbv8zNQE92Cu3st33D1z7WmmM5MHqAok6ecw3ATpUpBRrv89C97habwcrjcBQuMvKUNsek1txW434TknY5DXQb",
  "key6": "a4hGjvpwrhv1TRC8TWh65kp1JHViRM3ypSuPiALt9QEBT8GFL8VjhE6hKrwiUg3hB1qoiLy1w7Ug85Xvbn7rAnN",
  "key7": "2FqxbLa2WzgLFSDmnye5tCzXR2w1naATo9K49K92zatm8PiCXp5ZoU1wM9bX3MwaTnNKAXK2i7hTtJ2ppPDQTTEQ",
  "key8": "3UeaMNpyfiX3ijdaQ53nw7oE9BmF2Fp4touRCAiR8LLQQrbGqnHxFi7YWZHUQVJiPYBxfmoZ3eqpvKqskgkaYSYf",
  "key9": "4HPqSn2nwesxe5eyUrBbdDAqQFEaVaEmU5bfkp5TdMDyHmD6QcEpjJWgY68BSC2YAeVPUzvJxcbExx2eSSsjeXM2",
  "key10": "JRt7bubDnzHTVvjgCoQqXKmrZ8g75v1mvpK2FnMHV89a2hPcTt6v13B5QGtCo1K4mTbeHCUzkM6TCSHrefbDRxM",
  "key11": "2iYZ9oXfj36cC32qCqHC9yjRonWdfGpVC1HjApSd1DUn8nH2LqSQSddsEsesdncXcDMyJ7ZW8rMGjHFPkHYuJCkM",
  "key12": "5YvTmVC8HkXvHJX2WYiK4pMfBSwRMz8HTXXawVnPPZ2tg6XaXo8UFNXWrxHSQAwq2QXHbpS2SYSB38P8BspeUNkX",
  "key13": "4nKcrWzqyRpKzpiLV4QNqpc2vUmRCAAW98eUoen3vj5o6qs9jwYJdiwTpw79HrMec4tLe6nsYT8gykAJ3CrPKcwu",
  "key14": "3N5nAQYg6gA61KxLZJFpqp7SYcmD6sT9kvTbw5HsTzpWYGkcfbRBrbR6qDrxVYprFKAREJotUaGFm1uR2a63kUwx",
  "key15": "V2fbezbTJ6ACXKFGjMXNVmhaV5YoY87b2vUJ5Zjad8u3Cf4gADQ6bkjUXQ22Ss5YLTrnUTtXn1WHMNvNzzHmXqW",
  "key16": "3Fv7nmYA4bzo3oiBSRCEBbUQDxqqoXsGbetevREU6bqegUvgW1EfJcwjBUr7WGBpWFXcxfpP27jc85f62FB45Hgr",
  "key17": "2mhqdwBPRxdhXtXPrBzbVhb4NdAbqvRqA528XUrY9PXQ2YxcCBxT2kgBxhMHnES99kwiyXd22JR4iYJ1hXftuQmS",
  "key18": "3VZJBn55wmm8e6mAZEyNuU8t16vbHsV58MwAgMFmLoTTY6igq5ppWFfUmbC9TuXKBQmUGaJZznnqwjgFacZn4JaN",
  "key19": "MjFt3HCTRTCqqE5mWrPbyF4BCbremZcBzWALHWmzNJYVrb5712MUuBT9K4xU9mjMFBnza6QJfbjBYrE7MUXgaXW",
  "key20": "3R8z41YfeyGEJHu5Da3qox78UFGjYoKCkbj7hdPKk7yusjUGqj1FRA2vSKGq3rnyemQABtruzKVWnKossMeKiwgL",
  "key21": "3hqGwVhGgsFWK7W7oJAQ6QCLTPGcz9JDYumZhca2ERqr8aueqHQbX6Yhp8SBinkXpSNhiZENi8DzVLzmdoQjybRy",
  "key22": "3dnwfyjfXxtN6tX9n1pLj5WA94FTVZC615jdaXM8u2H5TQ6cfMmtWnVaibz64AwMUZnciJv8eKteCoHhNfHXBqpw",
  "key23": "5nxHKkPR7dg54eDj914mAqz8nGeTdu5j3HwJXXffoeUE3oMaf5aXWbZkvQ9bNS1TRqNmUJQTAV6fxjUJVCSKrpV2",
  "key24": "2T9P4CKrFcs9NBqab53EEdofxRTyMAnXE57kpiDiwcHkjCYgSGEYgqaGvimZqqr6NmbAM32zdUzQpqhtU99eKwa2",
  "key25": "41jGBX8FZnkK4K3UGSuHXvvS3W1JxFUNpaVS5dG4MB4ySXSWRj6pZSMhLn6jZEYYuKqshT22kh5TLKsSQsj2FLGJ",
  "key26": "5skU182ZSFqGK7ovWTpDshHm7CeG3yTys3c2j1pRQYgpKUqPNC8Hv9S7RFRdErcPhreJ3iudk2PTU6JQSj2KUJLR",
  "key27": "32n2MdfYCZmGAujYzEYPjp3guboRsCXbUszXiZjmewH9x861mptDR7KkZRrjktSKs77xuboz8UFesKtJ5BPxKxpA",
  "key28": "2g4YjFTeieN5YbeUQceWBYoWYmuoS3Sw4q9qj3JE6ibxzuH6Spc675AE85Rxfv7GAiUiqPiJ9a1tFtBjowySSAQp",
  "key29": "2bC94BSp6smdCXKMCm1z3VUNs6ZTGQ85wRo2TzGEicc1QwZFDEMe5GiZWZabwpcrV2YhBd7P1GG4Wfmj45Uv3YGT",
  "key30": "YDnpmCq7sSP9Hhg2YdPRn7j37Vy9WJcu5NN3FCimoRtz4pGpphZaTGJ66sfc8moed5JsVA53qu5SF8TXrUCqgHU",
  "key31": "3cmktaparrrzdbuUevU7Qorwv12W82eupxYuzerYSkD1rjbPXaFpubjRt22gHcZVhLrzwYvPi6i3SouEJ3Yetd3h",
  "key32": "5PLjo7fcrA3K4FBG5ktiC4NbG4E6KqoymWfJxvDUtbsCeUgxWQv5DpAUMFN8kneiNqnHXwSBa6zamR3aVSwdGXGp",
  "key33": "HJviGenf6mVSwH7UePwybqDLFVtPfFBknviR3Eo7aP788knChrM7EdK3SKAjSxWKUCEy7oRh5uT9CwrYbYdbjhp",
  "key34": "5xAWp94umi2NEuUjET2t87Jd6w8bg5JJ6UmsTcfzmTbSiwGpxEK15PHWuXmLFRGsyCHQgUsjFNq2bCU6VYb8KLSU",
  "key35": "2iGvgABoECcubyY3uczMajx39PVV37mJ4Key3AohH3bMpctBNEkknNFcBwqB2JTBZ949KUEeGx9ZSq6Nskn464Xb",
  "key36": "qZCkwHm9PUKKkE6u1xiSpKD53hUzYWWPJUmQ2ZGaY4Vr9F6az9LM43V8YsJzwzjcvxBFbrrXPEWPsynfHMdvVGm",
  "key37": "4SbD3Snz2awfRRcfuwJWjw1cA51fFApJ1TTmLGKsuoRgGEa69T6LxUk3Qc2wzh7nqyijfuJA4TWxB8wzo2sWwdBd"
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
