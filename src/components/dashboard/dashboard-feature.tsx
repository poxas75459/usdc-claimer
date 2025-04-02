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
    "5xEhg3zQQRDQnBf2eTNU6xwcAQoNMk5NyxX42AJcBQrivQst2Qp6kEB4LYayd3KqwkRzoCvcEnRZ8jSekVq1h5We"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZGfwVewt5z8MmmUQYRfHbqofDUw6sjLqSTbd2yZvqSL4JeUVx3EDNNoZjQf4SPaD55MP9yCfWxtFf2BWDPYtYb",
  "key1": "x9SJiTTN8XTL51TRMaCXQEs8ZeN2PpnDz1kgztvwpGYzkD3n7mxZxTntZQVzAeABnXFEUYuVK1gsD8gbG5jUy2G",
  "key2": "4kR3qUAgYJLqU95UHRVmtNj7pHFfACdQqi8QEtrVKMWrRvSxMYWgg6vwVCZzzvnbNp4WZjMXThCdgGY5eaFYUMSL",
  "key3": "4ZfmwwwV5HXz7iBv4c9dmsBLFtsAGFtPGQd5PAQuUfTSDNjcHsE9ZTF4YhSSfQXSnqW3Dyd2sg1BuaC7fQxJmL2H",
  "key4": "34zvGjGRzL1HLiGtMxiaxKYb8TUCzNS5GigiuE4Rn7tqVYcEzEqfTwqao3CMeifLidYDQpfcTmSrz3Kvq9YNp7FV",
  "key5": "93vgVUrzrpg2Xt6bHqRAK7LqPmWvsnHR4VUhSavMeE9pSb63Szhj3cCH1w9D2oL35g72QHcEbgeRKJYB6zhqHyE",
  "key6": "3aD6sMipFYVYxZrBpzk4cYH86LvE2tGshpWVfeziNGsGwK38yU9pycN6DFwpKA7KyUec83yiWugXPctsTP5FtveB",
  "key7": "3ypnezCXw2vBevARDed2euyqBmEDbtgyNhQexUTRbfZq75pa8VyzR3Tj6PitBGNxDPUKn8ffmAgatfoci8RqAYJL",
  "key8": "wdTBVD3Lj8kt1qy1jZZtq6UdWaUfRaHHgEWTJw5c1SBvNfhBQFVgceafAp8KSPgZ4wWeaPXuXV715XUPJaSuwB9",
  "key9": "4oTVeJRe9tiiBX2Yfi2cSiD16UXRSYCUYQaoSqdw15NfTgqb1XCJvV592FJTEVw9Aun7cnMqfF3U4GMbG8UQ4P2Z",
  "key10": "2cSjxAbDshbVj5FZztaJSqxh8a14KyrN3S59PR4PTTnAf8eUJsu1CiGGArpebSExaMYJ2DR5i7opFwnvXfAos818",
  "key11": "37ifu43XoHd7WVRyujQHx75gPY3H8V5UeEjz9oMYarr3TzafznDwuUxcuCHjBGZkiEt4z94S1qpYiNd54iXZm8Aq",
  "key12": "67cids3ZXoCnFG2ETLPCqwmTX3avRK7xGYzrNtEYb2bVqRNCuXqeyhTZ8Ksi77rpKXSpBhssYB5neRKB9oBaMjBX",
  "key13": "GuHSFUSCQX8b6AG8vbqNeAwDAQc4Mzy3K65muakDLMSkCUYnGpaVPXXjgjco9ACRtK9R8Htp9ncUKLzQT9GxHqF",
  "key14": "2DjZbjwVzvCeetrtXwTgVgBnTMhGBoP7Z2AijG4A7Q7WPKVkFUNtRWmm2YXzPy59hRG9EQ5dd5n3uBhXHfUzMxV4",
  "key15": "e3LgG1ZjV81P3z8wzNmGZ5qDtH8wSgcXpFm323J1QGKLnzGipjDzknUGPHCmBpC9RXr4X9GaZYfJtvUhGxUkM9S",
  "key16": "g9GUZ1Nhi289JvsoEPSsnvnNkYYjr9Dw9dwpmPKXET5Jt1VU3s1TDqvB7Up1yQSWMfUhzmeTZCKj3qaotn9U3KP",
  "key17": "4a8NrWtnXu1928ZGvf5aeXKP6B8bMH6LWky1UoLVz8jpCRRnq19brZ5VUEJC9bA4uBvrGWR9YJ5FCZigrxXzYiPv",
  "key18": "67H2bBXC4PsZ2uWEuSavwvw6sKYTG9AbgX8EnhMvDDUEXCFBu6NyQCtaFuzsVeS6awQ9HQvmH2at3qrrbM27pAjK",
  "key19": "5MtqkYL39zQnPE6qUgs8FaepGb8dhZoCFV13eFn5b8LQgHRN8uDUkjejBDw446knRMqhnEnkTDWLRtaJWarjNMQr",
  "key20": "Vn41zqQJEJif46mJ5fyV93m9WHVsqVr8xBox5MWZdEZTaWQCKpFN8v7ufPJC5TVhm2GyzditXTe8542FvHqPX7U",
  "key21": "5NGo1i4xiVBZk8UzXivSAZqgHCjVYyL5meehyBX46h8saf75sBGs49q8rAstW7QeiEWoSiG3auckieFstoqbNA8G",
  "key22": "2CL9QiQdwor7bmPox2hb1dyMWwppU2PtTdoL4g6DPhLi2GcNBEZSwovdZi9ddDbrtu6g8KQDMkq6umo1o69r6kJ1",
  "key23": "2PnYtRZSGpKn1SoaNsS6Mdbyfo54sUYbiD6SLrNV9TX9FmiQ2tRi9Wx6etgZBLd832AzpyoWmPZdxDPZnFohEMtq",
  "key24": "4zaZctBZ9nWELQn6pkaK8eAUp2TU27gWP6V2snXn4Sw87TkYKQkftLB9sd4D7B3GV7e7eyxB8sJnEKToHYkkBZ7",
  "key25": "3zjQ44MuERPg2odAexNWPj7qoTYYsfbRxedNYZYXaErVETkNDpdgSAkvxzi9rWd1ByunsNbrXQDWtB9ACvgJPZHD",
  "key26": "QdfQtaTgcqLSp4hf81SMyvtkzwTTNeB9RzobqFvAJ3WdcmskBuwfLZRZyvzTYjGRGJ6A5GpGpXySBazcr28Nytf",
  "key27": "2jf5YJYxVNJomZp51XHFuUGUpBCpLWwqwRMzwb8DKZE8wHpL9f9XXPnhEqbWYYkCyjR2td5ipTHf6qgrynBU6Pm",
  "key28": "2ywwfN6BDbpqXCmKXQsp84wyDXYGowWbFT4UrZGgUBE6r82VNB5qEnvWEjgNbUqu4cQSFQH5RTvqv2MsQkfXU7WZ",
  "key29": "26h8Xf2mDUpYk2EfgGCFiiaHvWtTn3u1reekQSsijQuywZkXgcCb53nF1azvnDuN1khWw1dLbeBTxvdKvmc4xpGz",
  "key30": "2u6VXCt6vq2oshyQceNMeJz1kV3kadZpiVkTtijsjAVfxcAUDzLaL2KWPHT8j3wGYZjdKFfM3UNpMm837RJHZMHf",
  "key31": "2Ji557GKyeVihp74ypqRLLXn8umw5ok2zmkpuHpzPnrbyV8g6iauHLzz6UvwALhnYcszJECRa6QXL3wR1HfUFw6L",
  "key32": "MXwtAJFJoH3fQDmBjbHtr82xgmzBxAdsGRyF1ZRh16REqYxdXSL6c7LhHgtdfrWT67C7hALFxrte5wbV5x1sdnq",
  "key33": "3RNgDZRQea2ULWvvaZ5ffGY8BJhhQouBPUypQ1GsVB7fs7mJ8q7y9pX4MaUXT9FZhrTTj9vs8bd6EQfD6grcmE7x",
  "key34": "5gHvYHxibGVBLzvQ5DMV8EG8qaqeh3vBctCvowCKR7XTEeZ2kWhks24B47Xfkn8oUvaeqiZFYgymVZVo2qsWHNhC",
  "key35": "J8v7mrwjn9KQJCtS81RCnUSKEKGojn6HWDHpPpiiY8TVvVuYC4sHWNHXGswoQeSFMV7inZrhmjziXoycsh96x5V",
  "key36": "4c5z8AyecibFffPdL3ANMPLZiVvheFUg3Va7CCAjtrDHXGcJxvwXtmuBcoGepw7pmGcNjp7Zqxvn8H1rPpqNR8gY",
  "key37": "5JJBnjrZGgtZsYESWJT7vxHhxQLE12SYBaZQ68bCp6eB8fzpzvgZPj3aB7W1iq6mJ5z9mpeJYLjqT4AYriiyjB8U",
  "key38": "3cF6YyruHCi6vFnBe9yJMuUFiy2fZP8SnJYcS2JU81NphNPCJKifgh8pS3aonMZHHXgjPifzMdXLZAD18GrH9wgR"
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
