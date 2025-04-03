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
    "SeshSRyMLQk7uzk7qBSHNtmzRdH8j6F3TSEMS2rpExA95kjdU2D3FKwhpDymFdufDoH9m4d7SuRRfAKyigmU1ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XAeUK1RQvxByJCCtdtsV5MpFzBa3oTmS6fsdbxh8HecGhT4gwTzX9L6BGA75N7uU6XsqeSPTb47ZfMrm4LU38xX",
  "key1": "3AzYKAHnqS29yAUCqndsDLzz6uut8WBCJktqrphHoK9NUbR5eQqPKo8Mcne3uRSXyD8CfyhMPjed3U2rUGeqwfBK",
  "key2": "3hid6k42nEnHSn9uDrTJgHpXmmaFcCP2XdZbuEoLdne8sCnhnQXm7mL9jzD3rA8Zi3erhCJeTkALQi7JGjYvYPhq",
  "key3": "5iuEjpSppzaWJ1Ja5d9FNMiRZgUM8dhivpiT7A1YfHn1EKrGfC5QvJ7H8G5rzzcA9VoTzjN3SDGVrtEb3gzUnxU",
  "key4": "62FJMatizZvPNj5qeVwrW2jHM6CJQbM6VcsrJPF2HwSvdbrrMQA8hrSt3Z7Q14TT9GggSonvWJMhZzSEyyVcKP31",
  "key5": "H6vRdsJpB1QH3rdZw3vrSW2TR5MCATRVPNV57enwr2DqYWYV28EPyB88FzQLQJ1qxVwEJomPuRhY1vqCiJrMyyG",
  "key6": "sMeWeMTCc8297nMJyxDoyfZpWpXHsEigWYPQL2qgKp3sQ4qABR6zp1jicPRfjBxNLeUk5G2tvY8BDFvKqVguwrj",
  "key7": "oAHRw6PDPrG9oHQxz7so6m22Zt5Q2BhwgGq1yCVp6oeBezKkNDfiKeDqkkia9Ay5SxXv1SWxY1xjacV228XfDwM",
  "key8": "G6q2YoAvbGi3HLjRQFNS8dYvrZN7SYvRjgVHkLcVuiEUNstur59fCVN92Eft7hsKQTFwkSpJizuFa3UhrXR5cqq",
  "key9": "RMUEcLA4Lqa5iBY4vYNffwjGuB4k6zj8L7NWDuEAeiw62V7hUafhcKYBP2PpUPUctL4tgLAPhmGE8bWcTgpxVZY",
  "key10": "2EMzzHk13vpNbz7SfeYMqHPZxnJadzAWZma3DJsD1w2JBMKRfquqHF4i4PDpEi6MTDBqr3UwQJ28VLVHtd6Sp9q7",
  "key11": "2875CPbF74PVkymGZHVWgQxd1FTAHwPptCJyzYFJRHNv3U2XTAvr3sCgNJsR1HvLxNFrogD74fUtkYrWDJnxcjuT",
  "key12": "okjnS85eEuTtchpQg18qzo63LfA65cKqYaGmtw38gUcchtwSD9nZWQ3iarQPuXExLgWYqt8jsMh8t7sbfNxgA7o",
  "key13": "5KKEhKUkFv1zv7gQjpJX6pG35SPkffvwkbjakX9EXR2aPVVri567xtchpmD1GBJtfB1jwGnoXF23A1eoYQTKg9YZ",
  "key14": "5Ms6U9cAJR3VzTi9LkPrPgdyTge8rKgv4taCmsGLik6yWA6U8GhaMjjwh1ua4tksWYQoET35y5biu3JZWzipPFh2",
  "key15": "4VYKTN5pq7UX2v1erLs5sNy9RMAyuAFZEK6fT1dFYWwdHu9NSfbzr6fqYnLKRAqddLSyDjS7akxdQB1k2Bhd3iG7",
  "key16": "3Gcc8koiJt3ZdSLNVaV5bT9KgR78NZYRu3SP5rYFmFfqLoZkCQrafmXykq6CjxDitZn2oEuBi11L7JevwJiHMzpz",
  "key17": "26sb8sbVHT9dCBMwze44Z9mAGxydqDyHFDp5enaJGsWTRUtiZEBhohKH9r4HZyBbAurwyFBwVrET14LXWQyDzUKw",
  "key18": "tdb7xjdfqSEuWnb5XxpfqkMfuPYVP49mtFCoQBZRFeQfWhVqCJ1BwGxaX2mYzESdnrr7iDfRTRQXzn3h2kUzh2W",
  "key19": "ivcRBbzibAgyW7FiiBXRSPxJSA4Rxmc4wEWENMJCGBrQ4dQ7FAZh318NheVNvnH7BPGNDomF9YjPwY1PGTMx7m2",
  "key20": "5tTBwsuakNPSwafe27xy2ffN2WLh25GwToKzCBhZyrkNZXBXnPT5H9zKtjWC2Rv9fvYkZvQX3jtGCckL2UpvV36r",
  "key21": "5YNPDoKTJkbQEx9WjomMKpeU2Bzw3GMWyCVX28iJ8HXTKqLhdDNr31UJaueMDgQ8yGcZvAhqeu1u6jwTBbsFajZw",
  "key22": "3XHdfScrmx8EqLYXQpZAM2UH4QSQWBGwKX3fEcwqSnJvBwF7y2Bjp5vWSyUQdphoNxodxAANfDBQVbamyjiqyaW5",
  "key23": "5m3XfVEvxxynN8w5AyXP5Z34ufuN1QTKk8Zvn2k2FzGsAGPvvoQ9FvMepk9HAJqmFMtA9NpikRCVfK5CDmvFo4QW",
  "key24": "5LCWMoVceBAQ3hoSUcqBVHkMyEFQPMbYCCoHs3h1KNFJD5A5YzrgzRNPDQ1LsJ8aiSdBvtwnQWNn7F8T5bjzhZkE",
  "key25": "4tEz5jXvZ4WvSXGyvjUHjtxPUKVnZd6kXizViu1dApmATao4dTCZTJUk3awpe32CAPFsgiMwy3TmFiXwoc14WJJs",
  "key26": "4VsqEJqe1TUnzMA4eWA9EoE1GaGJwDkdbtGo3gjGGeTGbQsvTFWFZvYj1sEcf9vTmJAw5LfDkok9tncUXoYFtWZh",
  "key27": "42EKwVaD4wf8zj1MJc7V8JD7HwZAJHR4ZAqanpsV8yNMzKykKXmek3LMwB7BDvqheXJyLxDy7dnPq1geT8ZmrMTF",
  "key28": "2gLBYdvZ91tbe7QGQnyU6WJVrUpe6XUxwd3WeEczdqxZAJUouhBtyb5KWb73AR2YhQPA6M1Pvvewf3juzYFTXyZa",
  "key29": "hn3ovSmTZ9UMAdsN1P9ZeS4zH6FJuoq554pmpgNfNjraVjgdmmNGuHAS4bsizu4T2GPtxKktqa3gVftsHmjBqqR",
  "key30": "w2sjb91jRrSdLwAHGjHgfQGitMrCMaw6wbZs1wUNSEZixYJDj4DSHQfWNRmSAKwTxR7fXAHaYEebNweq43aErs8",
  "key31": "5igSn7hVbMw7akNEDm1hfgJuEV5knULMVVMvHXUJdVxMD5uMYiDNRhxugfB182dkT7od3YjXXaKvDLbrgDMEm5Zr"
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
