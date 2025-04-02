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
    "5gUHpCDyi4U65NBxrvG3uJrzxJdAhUNt7upMCkdvk2Zvm3Byi93Qtk5rV3Gvj7WwDvmbrnhjNrxjNJb1XSZBCu3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zs8hLCg7gqrJnoP4Q7xHLkJDw1wUtNbiJM9kjEDSFm83cTeku3Bj3VPcEtQwdUkxMP89W1veC4oqWcX8x61aax9",
  "key1": "2euNR46RXzTVro3xqcKdDTUPui73ksyAgirmDCZg9m8q2g9mMe5DUPLHqNNiCyM9fFWdSpZo9FPvT1xkyR7gVqwJ",
  "key2": "2yvW4yvpw5QfUJ9qyqJg8CSfM6iiAyhZSPytntC8MGins4kubANRdEAJEFXXUpvkRACfcpdCmcvbop4b3ikBUQp1",
  "key3": "5N5Rhz8YgyzYhZgUejARVAcpF6z7pV1NdQBE6AvR3ZXks12LLjpxutnbZVGj2H9NwkNsoS5rtKYDNftaBEVkFAL6",
  "key4": "c8qfehw9aAbYosFVsuZ4hoy3NUwQjHGPo68XEitgxUpYbVTs2Ni2LJjbNDa8Y5M9Dr2svS4uVBghYM63LV7cULw",
  "key5": "5isxXMbLwFB58cGAHqvEDvzxZVfoCCv6Wqv1EStQVP5ftjL46Zwxwas766yBjjfqApgQoEfqiyZvSsAkXm36zTk7",
  "key6": "2kXHqQrGg4ZcfvffhmhKPAZWUcztxH1i7qGDoV4E2stpoyjL61xiyV5ZZxuzEyqQ7cRWuZx1bpTHuQ9Krj2kZFWU",
  "key7": "5qVK5EmBxp7EwqDyVKf3536wPEMRzwN5wSqLahKESGUAMFVf4u22sAbukTPKs48tXkLUwA1mnzNbfce9Dk2ZsKDS",
  "key8": "2V5BkE4aFQPqhQ3oqRbha3Z1PCVZGn1TKuBnztPfPZ6R59zBojSH4Tu7bt4tWFM6SbywjdcMfNNwveMZ3Uh7ZhST",
  "key9": "2FAKifQyUEdZQCDeRkoCPJ9cWAd7uFME7aX4WDXnab2YVYdVuHiLzHR6ap2quL9ucHKbyPdVSJSAP2prsahS99vq",
  "key10": "5zCStgE6EPZt4UsCs4GYnx6hiRBtucykxVLPuCUyMsrLjrjsgdJiYALVegw2hGKfA9wFfQRNKrT2Sc4QKR9tdcjV",
  "key11": "51xY5k4J9mRcFQZwXsYhmdMsqTmHB5UmcVXg2BB5jZpDqWpvWXWfQpDJQnmQv22YWecz8aAopnrN2FiYg7BrEMYX",
  "key12": "4d8cyQXxiKoksJCcNtmso3vC5ZL13Nc6LVTUw3gtYNqJtGqEc6Ak2WinbeKsnYb2zVgpdK4xbfYr3Ed9LNavyVuD",
  "key13": "rpnCza5ZeGvoTsTrruHZECXZEgcKBPpG21WMc58mEDKgtVDc72aJDr35wcaCoox5YNzbyMKQaoZQFBeaKcDTPTt",
  "key14": "5akpZPRVjVFZY6bsutHGqPBuusbnBmzP66f2kVbiacvNdjkdRed5ZuEyL5CSvSRthWJ56c1B6jfd5E5VKcr2j17p",
  "key15": "PavMnRXXGHwmAMt8LdjYt8sFfDWFr8y3NbPu3DFjxRBrSeNe9MiqczJAsqSXo5SnfDiwtM4a8ReTVsWNDcm2TnV",
  "key16": "vQ1nd15EkrmKFjyhaE8KwPLboqWzaXpQiLDYM6mLWCMiWY8dtbtVQXFTsc39VSoQUHszDQQ66mqCG7MzQLqTKrT",
  "key17": "3C6BSq5eA9uovzd8bDPFpNDmiRUd8eRzssn7gqjxCiWfRGeZUvvSbVUsLUw7kTfWusE7xTERWFAZ9p5jrfBBYy2E",
  "key18": "2Fhg4u3MFJtsUF9HGRFMfWzEWdRu7CiPXLkxNsuvfMUQPybsx1chZLk31CHYT9VApuTV7No5zBsQQF72JH8NN5jV",
  "key19": "4a5BemroeYTzTYSmTLbjNzJXHXWLmCWmea7KhgZUtPttsS9zD2UnwatF17Nb3avcshZRrVDsPgdnCnUkUV6pjmDD",
  "key20": "5gFqASPA1VfsuvcvF8bWgKdVFQK8qo3EQpjKK8ySps7SWth7iQka6vfUUyjSWkrxaob64ZhR1XaeYkvydpm2mRGz",
  "key21": "CjdL5CN2GwCqky5a9ibmq6DCFnqKYPYvPWoJ3fWPa5KU7UrexsQDroS627YjoTW9uX3vYc95EygoPKDRYSV6Ecf",
  "key22": "5JAGt5UqzkBNaXHXVQb5n55JGQ1x6e5T2QsrYo4XEQ7QHo2afZGEZ9siHmoTCPCUfz57gBvQi3J4RzRjNQ8QSAFQ",
  "key23": "3KpBRiczfHcBAivq3ZZT7z2hUSpQ8xLr1ivKrqA6RWyaHtsVYvEFHsCzufgTdWEv3Ci5SwiRhg8u5AgvrSjSRQGg",
  "key24": "4vKTmXiiq29FkgjFncfuBRA2CA7VcveWHo9FNfUXvAJiwCNXruRXpdUXcnnnBbEUqptXxtKBdyoP5kY5iC9vWcvz",
  "key25": "5s8tAtLVgMvJD5J8RmMtotEBCWXzmaio3mbae7CrjGXFeBVaye6pMWjnrNbLKkAMhQCx8GMJ3T27rV34Lud7w9v",
  "key26": "5gPVYeWJvefxjheKXfrrTK1bxyEYFwgRU2PLUygMwoW6PSgwoFGBZL8r81tyo6Ax7bWYoa3euXvRAtPiFiQSUp5H",
  "key27": "5avSduTbWLXZr1PrujBc2gDePBNGgfPg37f9aSWxiQaMn8RS5JYdNHM9fhEigTQ8nURw1gnabsyuXq7oB8Tyfika",
  "key28": "zbCHEhZCfwZ3h5e6qMj1NLL6oq4BDUj5rEfjY9UzvB9ezuB5tozpaqURZMp9rwiAEBMvXd1znFvfhtsXQ2eC1uk",
  "key29": "2HGyuAsMPNZA3mhj5pJ4vqC4b2noXALLPDK229zVr4hMJBkivo5WFE1umwM4izsPMf9tGsSGWv2j17XWFmbiCwY5",
  "key30": "3NnkVao6M1cqXqBVavKKS7pZQNJHP1wtVVxBwjvtgxH86vJLG3U92d2a7iomzQqwV9NqceiqjK9oz2FNZzpThwN4",
  "key31": "4Xq4y8QWhGNoTgVHzeoDiR6kPWPcPoXVoSq2znfZqdBUkNdmf3XhucYWpGG4EsdNizwtN2SUx7xEvskehRwN33tT",
  "key32": "58MGttrCTXQ5iWHz38tMReq1qdEfYYvnckqiLYuXnY2EW3X6Mo91wdgRk1npYf5EML52ZNutiNG3cjPJttyuMEem",
  "key33": "2g12xhsk2n3wxKrVpdRuVSbrSSy5Dv8KDMrdJW5x3WkEaxwk1cEMxC4NPcbnbQFqhYmYnTNjHKK4fGmDxeWi9gt6",
  "key34": "28EuHTCkfxA4um2gj5hFXhyAsHpVU9QeWLbmVTyLz75qdGzye1UB8YoCtHiE1cjx1EkpgVhBk9MA6q9aGim6tTKh",
  "key35": "5xqyauW4BVpLE6ZLQT7boXd1CJkaKxatGvW9QHWMGjvxyXUyChCnoToeHky91ng7W735UJc4yYbMjsHtDzTgpLKd",
  "key36": "5Pyxcfv6G65njj98SFGvYsDRS6rW56HRpskt9T7AB2UMwJQrukV8ZMtuhwZjxgaFFBVSDYUjSymjFADyMad5CWqr",
  "key37": "3Y4uwTrhXCVCfhPTWvXRPwjJRtExNsuW8Nk9RnRLKPvhzr9PHywbtrNzSspxPxBG585Cgorx1CybJ6H9piSS6kcc",
  "key38": "7UHoUQFFR5KHb6xP7dhJK3r4AVuYP1upP6R41D8CF1AYnVjJ2bMjz8dDJaA3EyrmYzVvpdB6ym4YP7NvZxRZSwC",
  "key39": "32aSzbaiEiioXuheLVpCK5wAfhZLytJ3Xsr5Bu5ZsKLvFGm5wLWdMGun7eJZjba4znoomQEc94rvdwzSQz1DRUuJ",
  "key40": "2GFrSzq84fPMycdaxz94k4yWpSEmp2Lfy3aoy7apUQLZUUvneDLrkCpDTdoqjs98cmjTzbot5NPqULYzfixjcxqu"
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
