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
    "3hgygWuC1qFttTUZnoNJt6oYLgsuxu3BnUsp57giKnQN7pLxZcieaQDLReew7socVbii9XqvCEj8qt52Qaq8RQGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wf6fgQAkpzQDWitH6w3rbpNyaUhsQ9XqkzPhXZ7gdi7fa8V2vPNWz1Y9TELb5dd3YGSyKGeKVm7J7oDMB1xXcT4",
  "key1": "5FsEtu7YzVTUFiwJRcmW4o2nvU8gyATcygqXkVYnfDQrAh2wmSyQsdNAn5S6kBRHkCMzoCxespf8WW6c1z3JJnYy",
  "key2": "5VWM964dJYHRKWq5JUSbS7V1LzKm7sRdbBoAyTBpnXTiWaSs6eNr78QyP9SsUvXMvem3mwLgc5cSG2Bk5nHFUdMM",
  "key3": "3vmGZE9Drfw2PFTaTAmYNGQ7PSJigxc8CV6myPmJB1QBMipdrbWL9yMsA91H3QYNBLXif64qsXze3q6s6PNVorDX",
  "key4": "3oBAur2PYQBJw4U3VUYGmewduFuihCny4dBBVALg14kx2k7kMrdoQLVvG6hbRthLvoDMX4Y4VgtFefZM7HbZSs4G",
  "key5": "35YcMBLewfsD4VyfUkd5RJzkL4V7SVM3rW5FcohkLS6aMvy4s2zCCZ21ftSmLfkciM7thbRuyzYuW3WqToHgVEwV",
  "key6": "56D8YKHXNVSd8MN4hsGqL3rUqkeaojkwEGu5eWZpPBePqsmMZ3RLqpYBUv6JQ9i1bviSoe5LkYC4kMnSWu2YiWVX",
  "key7": "4QzPMMohCVfs3dsyBTdJm3UqeeWzw5FcnMUTSwUoYiDEAQGPtHoRCyEXbWFwCKzQszxMjGfubekpjYedkuo6884F",
  "key8": "2UL9nDukBfuYNq6LFrGP7R8fWw4wS9B7UUkHBiz5Z8u7hYGbJmwav65UzinLWX6uXeFiupqNjnsT7rigDUwDERRp",
  "key9": "3Cy1Bb8ejumF9LFvzc2UGcTfuNTomBFpJKB5brKjR7BXrqjWi22qBen6cLKFMuhePNRZWyr89ThodPjjKVt1qhR2",
  "key10": "1PXqEWUqetb9DN4NsjwfEtCDMTcAu3ubsbPErZsMqTnoA4rfAAa5DJE1pDtd5Qfh2Qw5HgsJxqShD7hPreTpH1E",
  "key11": "7KbmeVFe7RxzUi8XTniaqgQkb76rRoj5giWZim55u6ca2xqnhAabT41LitHZpTrDsZ2kDtCepiCNDmsLvbL3CGf",
  "key12": "4swXapArh3gjsLc7NaR6NpCMgUC3w3ZAqV1dsmDuC1kHBpYhFkFG8MmQkPAn4RS6DJnU8LNiNgZWrdyV8prFMQWA",
  "key13": "2ABL8LfLKEmYQRHvWrQJ7KF7b9hnfBjFo6DESaYdKst3gDxR2w8hMrGzt63kdp9XiH9n6LNs2Cn3qTjyw5wyp7G6",
  "key14": "2zbkE7nEmW5WNR1v7WeHUEmUo1pfKxqv86WARHKnd7geEAzEYFgxw875Zk1BeCtCgRuf6nDQJaVR2vKRoyvHifg6",
  "key15": "2LjVS8stHPcXs2RsJ2idG8dRhaN8cY9DAJ7PVx8WPGaGuuLNmjpCmqb8tHEQVBoySHzNyznswTphcRjWaVGYsQzs",
  "key16": "46kmsUYpLipBR1uMZ9BMUenRGKtc9CzJ9xvdPZcCknk9V5n1y2ap5VGov7xq7XqYDu3RFvStobBqSCvXQuELeam3",
  "key17": "5PwXi3JAQtP3i1Jj1XzsaT7fNerTJxmnaeNZG7yXFfTxib8Ep3fdwxQRfdBnLLGobo3J26Jg6mjV1akLrM17tzsR",
  "key18": "3NuCf4B3n8wuCZPJ5iuqWtbwqJsKqkbtsvsYyaUJsRG54L1UqS3R6oeWjHyFHi7zHaT8wgonkWdyXUmSV4A5gScL",
  "key19": "4RthcfzPhbtAxmkHzgXPWhqA4ocfbfEbf7F83vXhnBBi27cSEodAtx5tq9FUzHxFcMTxmQShvSdrbP6Y5jAEfXqy",
  "key20": "MJyKwkUvtsYudoi7iQA5wUsDQxe49i81Yw6yMvuQUFgH9YfH6KMwHipBEgv2rzD6SgBHafUPxRFa71iMsU4BEbu",
  "key21": "4qtAUSh8j988qt34xv9FCc5mQdTAo49bfhPf9iv6zGYs4eH5N9WYm7GTZprmpv9LugboBo7Z9KNFM3QkwPtdTAro",
  "key22": "5unMdo4sdNf92NEFh2nxD3gtbPFAZNsvZFwWUaBJGQcvNJYzRdXCGDxACrYF9TqEu4dqKahB97yWTGFScfNYapoZ",
  "key23": "FFdKnBBhNwdoogXC3jgx1XReX7AZ5dhizvAkoLEKLJhQw4ERK64vDA5Sow6GduorBn6sXBfqR7MAuybyaimDiVn",
  "key24": "2hkNRJiLUeFUvDD6TkMf6haZwve1kUiJL6QQDxbcuqdaSmXGsaNJ5VR8yQRJ9vyYi7YWX3uhwvNRLFAoDN5aCQzY",
  "key25": "4KAq5huT7qAjCLNWpkKDq9A4XHBU3DdqdqdMxAboPA6Chq6b8YekXsp3eM5L3XLvLUCHfanvkHEcrHtEV6DXnLY6",
  "key26": "4PtCh1qCgsuh8uGG2hYG8jfi8bsve9RrcF9DtDgjHYVGNnbEku9cF9uNFf8MftA5js85jSnjv8ANyF3GjqAozSRL",
  "key27": "2J78hqXCZjH12UP8EZ1J2mM2n7CTvoBPcpLapCkSsTLrLpChNMj3tPq8wvQfNcnGe7hoG34qLfEmHGxk4rMXyTLc",
  "key28": "4ZyD94U57fVKtViQPtcTLvQ8xo8a3pjwkykWizWNraE5qBCb1rwoK2qConMe8ypUUxb7piAGAvfoVi8uRtvoNYyW",
  "key29": "2sNhhfuM7CapiH45g5dhJvhCTtSknbbeEPs3mvmAF6Y19V642UX3w7mA1jscEaeuehLKeZnzhzFBhb2PhuE7XtSc",
  "key30": "3yinokeYgP5gcJeThZnyCPG7y6udgLvZWto7EwXqs1BHrfoqFeVaYxcvveKkHC7LWHBxbtgywFyhEnaHBung43WX",
  "key31": "25mN98LC6rWHWHcA19TJcppgNHEDosTnb2o7mP3gKqYSMZaBWGEndiEWkz8E2yUvzvrr8AHYGG3c8RnmkXEMFDmh",
  "key32": "3enhB5vmQHPTXVbeyDCrVmYBNCyHe7kjkLsqcpuPazG4jWUgwhPfMLc4TdoEgL2zjjgCFvTC9nAdaqxBPL6ebUkQ",
  "key33": "5kCiaywFkztcQ71ManaS6JMEsSJE9uoZSeb7UP4dNV6uAHocmKquDFMHyP2JmgCADz8EP3bDz2bPzQTzUCg8PCWN",
  "key34": "E2DY6mbqj8CY4EbPLMgg5fzzvmtrTWniRg7DdikhhdEV3bqVLnhA3gMtVZ6bythufQH8JfREMJsjxizU3ofa3Ru",
  "key35": "5vJoKw2TaSqQN9nhHNzRuj9WbnaEvcAZt1UrWnCmwvqZv59MsGPnPXjtwGVGTaTMdj25yJRisHVNMycSrMKKXe25",
  "key36": "3Djj9ZgLdf8D3rhiwB3nHVwyTsjf5r4MxbeTCYJVi7xW8tEXerbE2NKDFyw1bzyBGcKpGbb6M8UpbZ2GykgFW2P8",
  "key37": "ZY9a7LFpdmjhpZM5EJ4r32THErq6cG95bmSW9HyFKZZvt2Vg8Yzhq8hLu8hHoZgtR6M6AwVZi7rh7gt2YpTyMch",
  "key38": "4wcdwEAeuYBnwkr994C7zpDYxk5nwaETy6sfxjdEZ5SA4fJVE65T34JpdCRiRtu7tnA5Qo7R7d6h4aXg9Z192gKu",
  "key39": "2pZVhrL6a12AMUKsr8VuqScusuQXRLqMDyxLBJ9N753aTz2tod9ga2PHP9WSGDGJFGzHjUtF1uz5wpo4VWj8AWNC",
  "key40": "ZP7tsUP7FvwdQ2ExDHufKWv5zKmTwjkTAsje1mFN7otivorFSugCqjPh19CAj9sC5CFer4kdKUCF8uNBcjRXuqG",
  "key41": "wyTSHbWozT48c4i2uMJhxmpdmx5aoGjL7H1mkEN9Z4wgiAjJ6kx7v86SJwBhB1J6fu1zAQwm5rUP3u1BArbqo2P",
  "key42": "WQkTVj2L3yeeGvCRYCQfjhEGxCpFGXFZYQC2cKANuk1BQ1KwRZWme87CsvTzWvhUdQ364MUgGTteXjiZgiaeKw8",
  "key43": "3CJkRJzPoycNAwENkwDs2NuEpNy9jK3DSb66kjYw64Zu8oeLoUhwCRct8fKcqvkFC4o6vQne7SU2p8GEqu7VEuLA",
  "key44": "33erkhJAV27BD1sCU4gV3N9SBrxi8ZKk6aLaEJtLoxHQiSZJcSuizuuvRzHgMNj26uFXGwmWiQa2iky2MMtQzQn",
  "key45": "8DGmQQiWNX59mqgdaPPkkQbdegGs6KsrGsoqLpqr3R2L6WTwuadmbiNxSFKAnj4RPcET38sPBthER5mZBNVAoQC",
  "key46": "4EzA1zZbseQuQqcUtsRsWZYNjZaeskUT88XrKAKJ4KQ9wGydbsvF2UhUgAYQqTaogYNKSGkfT6UDKv3cShRmkhJe"
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
