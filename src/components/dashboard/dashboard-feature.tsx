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
    "64ospv3BA6pSfDvnPaZAL7TciCVrjWJ5PLsGUBn7CTmGtaaLA776PgrST3F99oWqoBH9wwAfDNZx72QwAWPJTtZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W8tGtUpXfKfU8w1oWHD1tp521YwRMSvPCH8wPzKSF3U8745fCFwzZy8cRVfXjfA7JiF2p5V3mD5t9MsFrT31bkr",
  "key1": "5MNkZZe1xjrdQ9ELG5wXYsxswq9YT4x7vuPiBvVbN2vJjVHFnWDaMVFUCon94j5tSjY9UHnqSwMQ5vDwf2JDBhG4",
  "key2": "26JSkVgENHknnx7PCisDms34b7pNVqTwCme5mEgHU19h4cuj1CRSgF6fLBf3R9EjPibwfSUnthxkU2B3D7jwKouL",
  "key3": "5Yb2crBjEh4F3VUEJfRq9Zxn5Z6yqGFf3Bb6iaXoSPWYMnvjJQQqvBAPiuvYruZmS2w3NviQczi96cncbBXc4nnS",
  "key4": "2mwa5bpCWHMDQcnJfRhxXaL4xq5jEhG5HcWayd6baoCYK2abgKNqob58acWHgbWBz633HdXWtzByeToTBSQhfDbF",
  "key5": "45y4x2YmDx4EMw2YgfEDp49iDfyvJGaVvQCGNuZyWVQkog1tq3GprBmkEU7FMAmCwHas7ykNgBGFWfFtBGabCy8s",
  "key6": "VgRki8axBvdtWoN5gvnwQx1ZFzRgxR3CpBueYSys1QJ2UDuGtgm8Y114BZjjQqN6At2RMGzhcdPwjbQUhLyxk3f",
  "key7": "5FczM6R9HpaiQCndQTT1FknegtqZoPt5uJ7hXECQxJcgutHUu7Pjmfebd2ssDiJ6ZiuErrE7ioCoGP3uAk6b7tYM",
  "key8": "5vb3mkC1vQvzcFWMZSMot2JXBmU9q9WES7P43d9siTpRd7q7YG6XE7Lx9JJsuyMT1e7b4ZaJ5bNJZMcLwWGfJmte",
  "key9": "QUrH36h3NntctQ2FrGd8GvT7SmvuHWZtyTb3gogJzbXJ9Vr65XrPdxHd6rCmCtd1Dhxvi85aKkXQXy1iPLs7Lz3",
  "key10": "3ANTQ87Jzdd6o6SQpTWDDFqcav9J7vyrBDkKY8hxCTJhN9UTAzqp2KjTocp2uK8cXBfpSAaXZbqxTwPZrMyyV6vP",
  "key11": "2iKWiSX7DigLqLhCqZnY6ErjShBX1ntMnBmM2PmPuQcbKJhmEx5bhRo2wTL4f3GxJwrJtqyNmDZehtez1b8LJPdh",
  "key12": "hs9KMBTn7fuXg9g8UbJwTFGKge2ZuBACQbmp3MBzSgP2kYFeVC57iDFvzJEpCxfNUZJ1z9rrK43Xqvjw4pigVTS",
  "key13": "5J3PVDcJHJunoYGkgU2545G8qw6T8fsmcE3LiecEhdURFUb3TLaofZqMAQ99ifHuHFQbCLxZD5FG6rdExNJsSRbZ",
  "key14": "3jB4fWNDTKbobnmt3XFD9E3gtsBtPmU93tP1BCGukCSdDgXXUq5YCHdBdoTkXiDf3rVEbxHqu9jPN6dyMqcUWSZk",
  "key15": "54GKzVPjwYmXXyLXyhU6voxcduJjc6pLaV7rqpP36zXcmM5z7B3U7KEZRjKCitpcMKKWo63s9cLCvyhCAPbQ8FVm",
  "key16": "4j2cURMJhbPEaGDZyRuRqZfj6ai5XRkRVFtM5PKJ5DzMeezxyzwqBZn9eqzDZzkN4xJW3HkH3YMaUd7A4T67rAVc",
  "key17": "WRJSDKbogXcof6f3z9t3HdGBL2JC5kVzX9bibXdRA32CjLdbhxmActjpyXC8CD1dsahA3iBAAQXQmRD83EcPxAw",
  "key18": "2iYAMLPvQsYFcR34cZQjAxSRFWuJTKdU6c395fKC4MbEYk6MJaTPnKyFzsccPB1diGYTrWL3Jj49MobHz1TfMTck",
  "key19": "3rDkRSgWkTtAm8ftoVZL8BwNceUUBx4ksdbFyoZsZm5R9FF48mMUiKMCQ34sJjxzg7ULefXJBji1mFE5DsjKFVvv",
  "key20": "4MVKqTmE1DBXgRiDmKHeFjpKbE4xW3xkrnF2SVtZeihhVuWxRj798eVvbnhQ6d49G3RpmGzWfnqgwpZ24CjtG7Sc",
  "key21": "2gcmf7TBjZ3utvLmVoMjpUYJHYejTBiffNpVfM7DehkpSQkdCbS4FtjW6bKTy33hQtYCzrhopiHtAa7Uj2vzex6f",
  "key22": "4XDFJc5fd2wSxsT1XfsHqBgoPM5MTHdn2fKP9nJWfML19kwJu16qUAmLsoGsMvc6nKM92NCfDiqBxm3cPMLQLFm6",
  "key23": "2zPF7hkXVH35WEt3GvJ1q6qkEGk6mGrb1zep94x1EL7LMukE4Xt9YqPX8yPxgEXoKRDydKYMQpFouxZ7QE6zBUv8",
  "key24": "5xJjgA6vfr9Q8H4SUNqJA6dzXLbuHfUaFDPPjWk5tyQRLVaNhGVC7nTUAhY7Rpg3cFeNR8cF9LpvqWZsP7Yiv3wA",
  "key25": "4iDhinhZqgQACaJ5i8HmrY8dhYY1H9kT9iQw9JjNLuxuMsFbBL5USXWuDgpxbvp1rqmArT9hcmHfqbYx7zGga1Fe",
  "key26": "5jd9o5J79bF6yYGWKh36S3rqcwwBDsJ9NRhbwZnCD3S1duABGiUpWQJWDttb3c2JicaF18Tgk7bnSoCtNYebCVuK",
  "key27": "3bgb5gb9kboXgmGQAEqWcWQ7xjgkdxVkwH2CWp5JBFN579E2YXJs93Ef8r7qVJovdmw7oS3JM4XgJe53vv7hTdY3",
  "key28": "4Lev3yPwA4ijaH7MEyxWNgAtrSPEx1bnHaBuQagAmW94ZgwNpNp6PSoYG7U58Vhe8gsayprDKYVPkZmP5UahzCxt",
  "key29": "5guBw94rXJo9ukHtbb4q3sjs1k3o6sYsrSiAt5WQBvZcAjFg4y2WsJJxDbwRuchEkqDmMb5j4tV3dyQhZByyKZR7",
  "key30": "5wcHegneh9f7rcxVjdfJi82tiaThkLJE6YqU22dQzwjgLnQzzes8J74SAP9S47mCSSb8vLpiqndpC39eFxsSaReK",
  "key31": "376mpSMqY4WVBi28pwCYyEgPxRCQUHeAardvaYFDFZw82JLLSks4qrgvurfHAa6favNXydgGiLXo5nKYN6SZSfmW",
  "key32": "2n2ZTExZkKm1uedDxTU5mkh1taHaVGQmHzdtMtmywRb2ArSPG7tUXhcsEqDH5qjxwmFztR4NWMa8uYyj5qFNJRr4",
  "key33": "sMAfbU67KvFf2NKzRBPnoEAeFDwej1kKeYvAyKBqDa77WLwV3n56qpn3tES1rPscA9EJcvMCQk8JT6f2RdncCQn",
  "key34": "5XjQ87c8w1B6hcgUw6BBJFtNeVk6pXXz7HLghED8ygsrTLqaPL6oCDzHpSC1tPCLDUBU3WrUZRe8drm1NQ54jChi"
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
