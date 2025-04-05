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
    "5SuCSbu3jU8sZnkw2E6s6ASYZUjLQAAaFHoopmf4H4oZMYuNFTbV8MLffFEpHco1efVtCvoqHQtV6FBsMPDjPaxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfkHPSReAs2m6esN2PHrbFSChkF8nXDJAar2Bue7JwzXWh49sHQVvRhSDr5r8acdxRdUhFhW7TqtVsXy8KE2CMA",
  "key1": "TxTVujquGoczFYvPCspWqqzLH8fchrgzJA3BU8nsdwQFWSDUvhsQKmjpe2ebGKnxtzcPfpuPhgKEWCDNcCa7YZh",
  "key2": "3GEFstnGh52UfQ7SzX88VijVhCKTtLTTjLnpxcWyWZ1WR7htJHBPUPnRgovrNhUDwrHs7ioWcBLYFYqY2AxW6LDQ",
  "key3": "2EwTH5qq9U1699EbpgmMHkDW14syAMxfZNc7FhevZ9vxCktqWaX1vszCxCbEGBTQDosmS1MoMCB7i9rVE97pFMeF",
  "key4": "E1mGjdC56drgqMHNGGRFqmsvo9g9UbDJdwFXwoT7XCdpRRYdHxSKuFHK7YNMTMSnc19HWXkTpFm98jM994H8oUo",
  "key5": "4sj5GpW5TGkp2JWgnvv3QiFxmYT8gUAtTW4oLpmozJjc4iFvQn2aVKsLQATe3chCYHEiYGrWr82Mw3689QV571yx",
  "key6": "gxFBETJMPRj3uL9YwNgvBGVAxiCP9ZmPiWbtybhce7QV4vUpT47khaHuaCcFHi9u2zE88zwh4acCWBTwg674ayy",
  "key7": "2Ne4SJMFxiqiyvydbHcKsJ2pe6AGjAWNrkqMh3KCkFsHdGcgJvtD64NdYWUGiYEwTupcvAVBbgNEWd1UN9xpbrbK",
  "key8": "5BtPFxRVfY4rL6at1iAj48wZnTDDPaazjAGmtLgm2k2TgWGGgQSesM49PVN5hEJgfjCUkLatS2HJWgkKo3cs3hzV",
  "key9": "Pf8XBAPL88kE4M8SJhZLHmz9AhcsVsBezYXRRUgcewgh1gNQWwwSygPDkBVfspyxPsmbVxPMaBiRe8zmhHWzeug",
  "key10": "fmrEebUhqo1yNnwsps6PcU4VuXyiHE7p5jQN2vV5Z2DaEkRkT3UYy9QyWm1RhjfB1cT6Kj3xA2XUn5gGjE1KpcK",
  "key11": "5P31U2yejeQtFiU6durA9wQCcxJGHnCkJ9CD3WvJHsE3ygdkLksU4CCfB5e9knzCwLjaq3yL6UY2tCG8v3stFum1",
  "key12": "4c5PnTeY85c3sYpQvLDVhkjRPxCidTEVW7FvKT2WjXfHjiDa1J8YoinoRa4ZvGhYMdrDZ4RrKfKQ37FrhbzV9ggs",
  "key13": "2bTViyY7mAR7YNiouCa94TtdP5yEpV5jaaeovmC5n7YFCCcPZeVGua35kK86hVUnr14xea1Uq7qWaWMXrrpCbKX8",
  "key14": "mNuuUL6NswdyfnEwgZhravqSXwaJAtWDZve3Ln4HCmPDZdA7nquUhsh6UekoojyNqLzfyx5cALJfSbboQFfbQTY",
  "key15": "HenCHZuykWEwEroSpqhUUCuu5jKfr5EA8KSUjKEvUzWhT5BC8oi1LzZDuVXYeMDQsvQ5UkQGZ27vnEZHHnnWVt7",
  "key16": "2x7bMsZdpZL1pAs3rw2psuYEewSJwp8EEQ2hXrGjPts5RoTMTWPnimmo9prQuuYu9pAf6CryX5SDrBQBPgNEv5dH",
  "key17": "4at4VuUUQS1nhJu2VzQYzdEwxRXvty9dtUVLirx2iLrZ37tfioCiYx7Qn4R1n4gjmLJPQqNjMH3p7QqTCnvhffkf",
  "key18": "o2HegLQBw2W8iZWaTcz3nPyt2Tv7G8kaeMEvtiFU4dNhhsi6C46RAgWy6rgzXjNwzUqfLzVmn5arJ6CTADzCbuR",
  "key19": "2qpumzVN98RU2xZUXggD5o7UE4LRYCMsTnmhP1KZ2G1ztXuGqCrxNXFfvC3fE7YdsHcryznSqNKVTUh7F9NJVYXr",
  "key20": "Wcog7vimVUZZehAQTg6ckzXUXhYJsYbGMCAJZb1F5twLSxeHZxMthZzfiay7U7boTpm3MeGkV5WSDNmemBmoFJP",
  "key21": "27rwz4Bbj3jgA53NwDhBDsQrKbdNkbUqDHgdwsQfdUZ6e3VuqP5uf87PrWGA6pVvmrTM9QjNTJUcigSpua8cDAHW",
  "key22": "3XL6zZ8g3gBs8h3hBkSC4g5imEZ8ymq84tXowQasRZoJv9eYE51GZvBEZSMJiQCGkncJQ9859iEs2Ee3hsu9Cj98",
  "key23": "nR8q1qkLgRtCTbgvMDNBKmS55Ah4NUNpyaMCS6bTeaXBXb4nm9d2WdvKuUN2aSAfkLPZEXaT1aUhGfSmvVfkeHY",
  "key24": "2gAMEbh6EnfjdCTXav4LakyFC3WpLAtDaRR6sg14d43hWSiYCMdDexj7F7WEhMQoT5uePXENiZc6PDiK3pr23ZZz",
  "key25": "4aEiXVKvYbPsdNAQJtDDQxZKjm6MMsm1ScBnatEHPyd5janv4AQiYrA7ejWVq3bo3rcTGFn28mBo3Dx8J5E5fUJ6",
  "key26": "3PDDw9JfKaZCx4TDSSDcda1Z89Yf21oFMYsi3rpNUkdgP5wN6GP2UDjmR6TQtGJxWQDraY8atxjGUkTKJLw7RX9U",
  "key27": "2D4jfGX3BGCnPeugNTY96brJzerV2mcpNpR8WRA6hz9vAorkFqWVRWGU4Pa5Xj9mqPubsT8tqPZuEEYvhm2yiXZB",
  "key28": "HfMPbFXFm68xvo5zQDvkWzZWpEgzFsdNbCHgAAEH8AXpScpC8UNL79ncQaiRLLir1Ar5XLywVPXWjo3zfdvm3Lv",
  "key29": "4vFZG1Zh1goeS2V2wcYsJNb14gXFtQVz2Yg8qiQ4ioaidPitDtRxMRawR6AtmCGEDqjwPgJemUw6UycQP2nCTffC",
  "key30": "3RJG7iDjNJdQMEoDBbM4osd4hKY5cNWX5WHWszopsy6ENbVujgRBrB2Rca93vaz4Bt5XHKWFeHTuauERWFvrGYMa",
  "key31": "4bnq3sxm3YJ27hBHDPmhw6nGr84MSuR97xPkjuXRWWk3Csd5Xg87ddGzDWpJGAH3xCQfHgUnWRewPEwUJiYHmiGQ",
  "key32": "35FvAyJbZbZSV1sDRyRAHKMqUXfn3MFDS3PS7SeQZW6TTptjcv5mA1fJGntG9Nph7WnLSgrcjdbXNcfa64aSrWgU",
  "key33": "5kNm5Qpn4wfnXnrnY1xDhvzrHZyyXjGX9pDia9stJyKwBFVz5FCKP1y9wR6rbBh7cU6FWRjfwCF5RwJWRoU4Sps9",
  "key34": "3eEJhuYx76XWp9MzCVSebGAdtw8jTFEKjPmCM4xmVCdhTE8E6rYih9kpbUCe787nSF54e8NLB3Mgu9Tub8qtjMwu",
  "key35": "mDK96JTBW9JeUcJR1MTWDUAuKrVdg9ntPtUw6vUcJdJews3DVbAAc4rY3koVEvGvXGwnECMFsgQPChB4mQbzwoV",
  "key36": "aGSK73EZqf7BjANcYDrYx4QZZwxENC49Ha5ftWZhq24bhmVFWDhEnboxdAgtG2RPfNV6sX8f49haUqgBzBUKcyU",
  "key37": "4jyrvTr12cav5QYGNf7MT2bxsKc6jbC4GUJ9ctj1g33R5javhyQVPsw6pjTHR44id8y6qbkdKSV3BJ46pLTkrEwg",
  "key38": "2a3zo48dP2uD3uCdJ4nHxp3ratEeJUCVBgGSPgo44ow6AwnKYqJJ7SvTsomeYku8Sj1vxETroJGKW29Vepp5VjoY",
  "key39": "4KYkg33W7P34k8fwosdcmP7pjtZkGsquXs45RLzEDnZUk1cP9zmKyBNmFWb7awroCnyKt1wcVfDPPzj28BXFQpnM",
  "key40": "2KmRwowKcvsv4U5yWa8f6zk8cMYMTLt7qyyQtuNfcnmkwQEi96tA5eyZRbWGfxxaiK87iQTaqLPD3jeJTsw5J5Pk"
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
