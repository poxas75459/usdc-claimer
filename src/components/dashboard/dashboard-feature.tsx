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
    "7qsN4RvyUxo7fyuLAaeupjTPSCJ25dYrrLxLuu9V8XQjLTCBTEK4Be6RHSUF5DpeuRFYLMJxByCnqUXpmmjxAaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ubwLT2MtnixDxVrCDC7j2DPRYdTxTQUyhgGmaCeJVwSKWz8EXs9J83Amp6LQGBroeFBRYYR626PJsE388MyTFLW",
  "key1": "4VLyKr8EHicb86qTbw75nnB7mt2B4qcFZs8WuZc3jTftVkWo5nCfggkcBvNd6nwsxCqZZCNY41ei2tpe4NTP2VEk",
  "key2": "5wNue4nMF4Tf1VrfGUWw4Zyp6zXKvX3KNFRQD9Sdh9VZuR6rZjV1Zm4dwvG8o7SKk5iUh9fX1a7isZrAuUMa91Te",
  "key3": "3v8r6mju6UPu9LJiPgjjs2Qahgmt5xMAzTj1sg97MF4jUMiE8inxSQsThg1PSrhjZFSxCGi55sCykB9MBRosz941",
  "key4": "5gEuQNQYeyaYC69YeG5mt3YErzdwq4TZ8JFb54uZ7Zppjfpf3jqv9VuCnT8pUYA6xcwwZoopyMmwV1geyj7QLWHz",
  "key5": "5CCffJcEwU8nvi3gcWSLVcUgS9FonSirdKhNEgkb48F62V3MqczfYWPRx4UTh6JeCxtptrBqHPRKS8ZHUjYidjFC",
  "key6": "3ft6tWtMFFnzj4fon43zn4uSNv5SGFynH6rQquyeKPnnq6QRBjxXrz97vpxV9pAHgwsBvrHXuc53fWV41ddkp2iL",
  "key7": "3JjNZSV6kAjnhvwdbqobMtcdafQb4tYeUgGfkEcQfq61wScE9XUxXjKfQQxSnRbCuXkD9UaoJdpPjyKTUdGJwg6p",
  "key8": "5tGi8JnfmDWiyvZ3CqY14aSJatXDD47eth2nf8Jy7urrzAKZcD48DEbPsmTpHoo1v7XnCwRfgCkbC6FN4EEvsMnS",
  "key9": "4g5AT2Mzt6navSCzf9jvaLHhNSg7wGcY9K8gmc2z6LrJQzFmRedTY3oDVTrKWhJt1WyK55zxQ8BvQQmzEWiHYFhb",
  "key10": "3cjzzYm6zGNVYpPmews1geLS1Udnm889YwTgadB5fwH2bxWf6nSqk4D4NA4GQUcqbSKG9tyrrgkdmjJXssX3KF1s",
  "key11": "4ava8HxBSGUAmxKARPQMAXs8jAKWGVxtfSD3kgMB3g5NseQrfU5d7vFk9djQ9EaugW9FSbaBisZ3Fbqb6tWYdkyo",
  "key12": "4kEoxhWpYZrZyRy67hs9yvK5MpuJh8pDSSD1pLciyQsCc33ubhxbwB2ScifAQLoX1BEXZXHziz8BJwrhwP5Erurs",
  "key13": "2a62KHQDYarZSfYe6LQvdQAkmrGoTNPW2v99C9JsJ3AGVKNUvQWR7imajBmF6K5cLoDRTrH4Hq8hLmBKiSeeS3h6",
  "key14": "Fjp76jVFo6UhBRu39pP9DHxUTUjQ78ccXvznAgThzcPGPXsbZiwNk36y2spDehYbPN4oFz1fTwnzkzsKMkopyxY",
  "key15": "4PJyqLLmAzTxv1Yucqwm3bEoWZ7hoFavLk9QEjhhDzb88uRTfJt9oZEePrbtELfLkg4WdkZdAan8STB2g64G4U7y",
  "key16": "3vf74T95Fs2sRp45j9P873c8LavBtqRqcVeA6xC1oFWCvKhWiCWwJyTr3VWXPhgqDgCZktvyNq65cxtwaRrKnTQh",
  "key17": "61nQTAVZERSKTLo4nDyQKNfcUQsg264uckeU3K4LTrr6ckpHTJcKudFUJGECtW58WBgcz8Y2dskYMDZ3WHcpBrv7",
  "key18": "3Gdu3XEzXfNQPTmuWLp6b7qXGSSGR3WJUiaUgBzU7tu8GRrgfkUU4ihksajp5VwwaRVa1mwmPhckv75jrMCwYRQ1",
  "key19": "7647wpByY2yqeRKjpRQ5PUcLBCgY9wAs7ALPrvJFhLfs4PfJpTb4bpP6ywko9Js9vTn21d6J2QEQgc5mrsSzx1i",
  "key20": "42riJiMPgzTMFUbns3MPgQJM4dJCAqFokQpkM4UzpSNG6V5kSpgFQQq1SwV76V4HbpuknRXy8wdS7vQs5a3ri7pi",
  "key21": "5UTTJPXMCoEFLtnKE8YfcXJ1nZbjyuXtXNwRBL5VN6xbp1d4HXRisdXoYiz5sTAcEjJguR8pYnM8xFPmp6yfSfpS",
  "key22": "4RTM4ntKQXiu2YUoL9yZv6ez1b5pX5a4ZiXdCF295NhYyyx74zg6ybaALVACQDpJixjchqvxCLYqtHpdn5nVgq9d",
  "key23": "m9Za1jgWoWzLodwPj6Qr4rmM9vAN6uY1Lqt91S88maqMp3RhxACNQZAzRXBxodtFioTZjV356ovv7XZvtijqqNH",
  "key24": "3nrr3sSdH7ySxMssdM8bzasz1x7G4uK3tkvVFcpPqJdvWCS5bV367A3Nzo6A4PvPPvP4Xv1En8f66AbMgbwUvzTS",
  "key25": "KTwWQSJN9ZKm7SL8oTf32Wq7aNhKzM5PMGHdwaXR53v4ctzdGwiWKtC922QCHiZpDD6y75eNDbrHTgu8wFuWxDa",
  "key26": "nuFrM9rr5pA182df4o22QV4P1U2As3P1NqMX4g3FFqvbgQZmUizTdzjE9TDmqgyQ4yjZ8y4HYDDrNytogfgBJSq",
  "key27": "2V1A9XyYhCQhN88yrf7dXemHHqaoaQJu2tLWwaamh98itLMzQetZiDE2zYedehg3sGfkCsKVqTgyia6WvEyNJNDn",
  "key28": "TkV5NZCTQWp8oj9w5hQY14Ywqi9jUwyXhC3UyrzZE2rvatGkcxjbPDCgJDfkqz1CZ9dHfnjE66Fh4hF5QS6pbSk"
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
