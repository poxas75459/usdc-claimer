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
    "2UpAJ8RqCasgWKfYpabXFJ6RDWgWvqKjLskQjvvcxLP85u1iShuoMYq7vhXA6wB5AkMFrmYo17e2iJ12X6kUvBYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnBL3SS2ox3Ejjn8fRL1UpVwUxWo5mtQPyFniW6rBFiJkW1eEb4wNHFZramQFsv6oM1xVzq3BBd8R99Y5nBvyTK",
  "key1": "4nk8dujsyYyEEVobk8pzoefjQWQ2jsYNeRm16xL651t72eCRXcaCouEpxzJ2yDUAjs7E2asJ9qBY3mSrmMZyBqDb",
  "key2": "2BpHSrnQUXn6zUFc9KmLbHgkWGkmm2hWrYkmm1AcP2ChmARg8QyCLkp3sJcy7HB3xaF5D4tibU6BEiV8J3ndeXhp",
  "key3": "nwu69hgGcQbYZmJeXSyz6DgyDwo5h9LDx28BmzSs5EtWdfHTevkkxcrgczPA6PargMwMT83ZcsVfzyDdca2aodg",
  "key4": "3Y2FQhFpptGGbVJzPJhxkB5Y18zgjZx1EbfthweywXEKj9neiPJR6E7aGSccL2FtjbtK1p2BDgC1QPoR4CQcNmR1",
  "key5": "3Lf9ZdHDgnLXtPLbENDHtF4a7yPJd5WtNSiP22NYxzxY2AvQUm9GL8sNsyYbRUDwWAPXYunDfZqFV1qe43qnifnL",
  "key6": "3nFwSLefk57uhVwhDXU6PqL2PR7hURQ8z6xScmQ4bZdnGYBKAWJnEAi9cHNPA8pMQxrKtXLzaDwwBNMwUzHHpQjy",
  "key7": "4KsZXjAZ7V2xaRBfLTesZmmoKFsjPQsykcAwN7j2nwyQFNU8jUZqJiimG8MjJ1ZfSvi4bgzSPUjinb678KyKF3Sn",
  "key8": "2LzLbg2Nd2oXQr1RoKAN7f4722BHqqjNa1ZJ6fW5D5ScbdEMpSAu6wphq8dpfvSwso432KevNAZReNPP6MQNL3Ua",
  "key9": "3aY3gtTbMUBTkf23c3Vw6M7K63Vugyks3cRj7sVjTi4q46KhwUYb2UpUzD5wHKTFmZDcYciC2et36e5brgVhsGoH",
  "key10": "xfFJYVtNoaHdRkmj14bkP55dv5CvTSBo3SEw8XPwDeJQYsYGjBzBwsy4gDEd4317TfGAiJRbLqZQ71sxbPvcQDi",
  "key11": "4vWyeoTQYfbpZGQ84EdP7NPuP5Vi1U6TdGLUkqTJ14sV5KEPFtGAbkNpKq15NQVTfVuoVdTw6XawezbCzrBvRS5A",
  "key12": "5dWRm6T2wvsTgdtXL9KKPvYPjx4yDCKGfThX7QYt86v9NGV9iq4ZazhQh2j5FZSbosS97921YtEDQFm1k7APzGMm",
  "key13": "5sV5bmPjA8h23NQmXV8gtHMw79CiMe2tEXp4gYfyENpYbsNaPZso7qj9VijoRwM1HNgemPFnn8ZzPQ2vuvzWBEKi",
  "key14": "3NeAGQ1FcsvkSaqug58JgiyGq4osY4QzB7KuX7ngUdy1T5NbeQirqAFYibQaoVVSRkPVshUzFAZN9HnmRXpbcWej",
  "key15": "38RgcCNVmMcdGpwewH7kWzLFR8LDzEG2YcukvgQDuMfvKmdGD6UR4Yh2dMCpvp7bPh1dogPc58PF914TWvKo1MBF",
  "key16": "5DPV6SVwn8gTJWTnYeYvWtMyNdRDh4wi6HTyC5cKdKCQWyB9xetN9vuAvvkSsYiSqi9hSg39qQ93ogKiHhYXwuaP",
  "key17": "3djgvavehwsaRDduxFEF6DUhiHtX1SQLZZ3837L3qRWVc222KFRQ6VCRS7He4Q4Ua3KuacvMuiHZXSQpfije6NXr",
  "key18": "2kpCrfVXMUB9qPcDqwf4DANqrtuYdwizRy3E4HfsWgnodzS7jqRqfZ2c82ubeirKWbqj5G83YnnhgDgBwJM4mC1c",
  "key19": "3qMmpDJD7v1WDMXTCATbyzbDeaU3x76dvspmvJt4gVuXFFEu2SAtWS3kBHxzzW1HCgf89Gy3kiVtogeDQ2cbj5BW",
  "key20": "33RT68dprrpwdRSf4uhzvPqJ6NnrtJLXEA8mRfzhohGwBwac88K5E968PBgTNEyrgrxjHp4q7xwTQCxxq3Jd6njW",
  "key21": "TsL93xCTRQSSzk263gKfnG9PDum3Uh9iTY5jW81RAKLiNzFpYNWWvbVmasyp7xdwXZhg7DwuYtmNCxv5oYM7DNf",
  "key22": "28emnSxnVuy1Hr4ZnisSRx9MXnqqjTfYHPwNCv28pJL1eDSD4coPsUano5oiyxdgZn5PwU63jrvs5KCjrfabfjG7",
  "key23": "2fvK6iqAg67aUZHE2LYxD86i2X5RQPtJESEZdWqg6X4zSVkY8DnBnroT6EyoyR67g8Zkm9jdjHUspQyHXTa1Xc18",
  "key24": "3quHsyPwwPCRYqZG45BoogRiWwjbJT14i5oA5GXULhTHQ1rNJRMhkShpaQgCkVumj4qppERoDj6VbQYz4XWPVfZp",
  "key25": "5qB3PD9bLXWUovpBUVSrv45saVyaDFYrhUJyBLJntZyKDwsSNMgruEK8LBHJtF4hYtANy34dzXPzCj4RbEGkiQ3X",
  "key26": "tAqWqYn2zgXGUY5Vkjmtgc4vERg6i6mDoNaL13DhuayEJXUWiREJw4BjecLhCcuxv5PtoGB2w9o2Ws5pzvks95A",
  "key27": "5CfhJAnQbiaxvhkk7wjRr5szwnPwiQykaBt6zA1AneBWKXjUcV5ZNKpEekvKkJd5JrtefDb2uw3CPDQYS85W3Q89",
  "key28": "2VgCCxgywdfmFvZHmEG8kst6NBt8B2ehYWCxsHJjCTjyXvJBtgpo4B64YRdiBQ8N58K8jzBjgWGf9uRbtH5eew8r",
  "key29": "2ppxWwAAqspeD7HEgFr4kuKff2XydL6bSvWProNxt9RudaYdUmuh4oQSX2CppWg4Nr9Dah7RERzRp96tkTzDh8Bq",
  "key30": "5FUNvPKUQH2guKocgKkr1ZPU9YYKSXEgPfGvEFQrq3j8Musefsh9YtD5q9eDoBKNsmjiuHX3yiU54JcJ2pT9XVY8",
  "key31": "5m5DD8vNv5wuHffkhwgwSh7umSfZoX6BLHJo7vhL9hfomV6cMD6g47LrMFUjfVR5VbKmD5PHx28WSr6ycXcF1ajP",
  "key32": "3Gq998mqNddCWcaBLnvXvR65BRKTiYcXKYCW7JQAZRcvx1aTTigyHQxnBtnYQdA3JbPbGZaM7Z23kQvcj9Rur6xv",
  "key33": "5xM71hjAFxW77rpPRxkTGBqeHYmpx9oxcW1bTC8278bszyqDkMTAW56QUjRcfsBwHGXhU6C4W3fukDdX1ijD24g9",
  "key34": "2BYuoRdAcEt3rCqLhdQTBnAzd3uX5Kgwa5FLfhpATyEKRvrWC3VcR6AcVwTKvTUeBvC5ZdMDVVVEFHQER7gt5nJo",
  "key35": "5Ty9H91y1FfkxWjqve68gCKmkUrgqeVmzb4g5AHRVCwCgrtohRXRj2nUWnPqCmK5p3zBNcdYaFgCscNfkJad1W6B",
  "key36": "46UzQXvnm7CvDe3TR21DtC9RDSXBUFhvmNczxsjVfhAvsEaQiDfr7wuP9MV4S2XJy5ZKw9eC3bwrFJo59KzUBG7E"
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
