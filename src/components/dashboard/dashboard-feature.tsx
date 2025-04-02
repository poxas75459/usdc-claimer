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
    "TyoH47VtwGs8vsutTPRrcyEdvNPvhg4Axm52W1EJieJYD3Ph76xhJPPyoyMw3s3ney9Q4uNT8fNeNgcnSdXmwbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35vwRa6rChLiguvtqePfkr9QfNaKxfGnSDmAVBACBYnvFHp5ymv27AT7DPQw4AcFWNnZgJm8g2QQdKbKgP8qx4u",
  "key1": "2upSgNZxkfEgizCpV6R794FKuAJsZjGggo4y53W4gdcyttSwqamA7oMnue7FnrnZ1eN2nrqvdMrRqkRqg8M8kGgf",
  "key2": "3T77KMYAzugQbD89krq6iUmjDJPwvhJWkiM52YDcgvoRULMzugds6shQUUpwG7Kt5h6kTswt3Th32FATaifT9y41",
  "key3": "XXpmYyQzKYirsicEwvcNXYJYRoBcSzWZ8YVU5PTDwoa5pMjSejtmds7sA6tQVJ27PitpWjjmPi9WfXzsGmNPGrH",
  "key4": "5nN7hYEFJBiWFYKRtAZTscHCQHfU6opekx8pKZH4d4oUtkJFKkAGyc6PW4hdsmaDqtfU66V2yxbXYruLB8jNPGgp",
  "key5": "3ymeER7GZNodLiBJ5Z3aMLtB1HCqp2G17JYcu49aatYJEWngBaN3mU7BKDNHMtSzfpjQkjzGisu4DnEnTA9us4x3",
  "key6": "53Yx2yEwf7wTEbEgA5g7zKrt5duUJasycc2MP5nq6BMmDbfPrtcVyoa7bYR24umPsQ6TwaNpMnizxDXs5Cgn687T",
  "key7": "3bivnqPSqUFRqmsuJr7eRXR57HMP1K9ENQZ6zs43riDTygZ9yWPUzi6dcQM6kkRz7iV8T9BrhSYGqcJh4XT6LYFe",
  "key8": "668fKXVjjjkrEbsb5GgBaiGMH63CqWWSsgMDBMiXo5txhuziLfwYu45pQyRZFiqy1HGxSc2iUotS2gfmvPg7WRrj",
  "key9": "2N6tNQfZzQxHPCPnQf5AYvWACsyL7fAmyzC3H29W75cZCKnMYwSUFbkXk4geTUU4L5CP69sVVgw5RH1U46sJWmB3",
  "key10": "fo693rNn4hipFnyW8txPDRjE5TEvGtfSNBd2LQLvfMmSkUowyKywZbovLcYakXL2bdZC7B9q24N8HvsheSrn1RK",
  "key11": "3eaxSAs64VcWGnuEJ838ZnbkCHuzmGDzTCXQRdm8qFyWkKARH36VuvwgjbHaF6eFSBZVLYiNSQLhpr6BLLRy8HRo",
  "key12": "2Xdb1JXbpC2YV2R1215MMrNKMKkuFoAtiZyrG9MsrU6Pn4NL3tiNmQxtuH7roFLsXPSf6DzDqMqgkiJZRdAEVizv",
  "key13": "4wsBemM6ETmDvctaCJmFdfPinHdPjceWGD7Tk7G82FRGLSKGvQs6Eqv99Uh1oVMhmrPj4WaXF2MRnxj7vadRnqYe",
  "key14": "2f8aa165wZUVcdsS4KAsbjqaf3nGasat6vxGggSdVxQATCEC471MG3pkD1mAy6aKu5RgAmboPf24VQnDwXeVCK1N",
  "key15": "2nPLoBGyXQ6uhfVrSV6txKJFvdnzTfR6h8GrbuUCsUZRt4cLxVNp4XEsGGkoDuW5rU3L8JXB4QqLRsXR1ferEBaR",
  "key16": "pG6fJmtKhBn8pyYu3h6XGBnGgFth4Z1zRp2oA2bAW2meXT8mJiNS6i5Udg3kUKWXAc7EcWHMdTTxN5ph8mTMUoi",
  "key17": "4z69snzHPSKsEqJuTaYvPGBp6hhutT99BKSAwEeYBKQEvaDrh9Aiy63PLJvKzCseo8mW2QAxCFwXChzeBTJeuMM3",
  "key18": "5KNp45iak4vcU1KwHCZjnUG5dEV8uBZW9FrqJLjJkvvUKsK9axzoT8N1kuKQghQSY6bzP4XQLKWYm1HGq2sXvUoG",
  "key19": "5tfEs55a1fCXnLQn9WFgYHYksRHnLv4QVHGhy2hveZG2CqEwPPVFkUmSkW7qSHTQ7tjDVezYjJzi7Emgc2D4KELX",
  "key20": "7ZcDA9dMnKXxPro1DGU7RZGXct1yzRW8JmAZjoAReW1A9TckJVJqxeFcY5EE2ryWRSSDE3oFHuveJSQKYVMGKqZ",
  "key21": "2SLS91oXAuhATH4cEfoQbo77ysSyMhv6tGGECsfUt7qbA3rYqu6AMYdS8D7ZsgouiCuzSfg2KAoNc93x1pEVwBhF",
  "key22": "NhvQa4hnoeduijcgAvbCdd3gQ33scNvxbdH6ZWvgdXQFg2UYxWeuwzhYQmLt5QV5iCxroy1Rryykaj6qMnU9w14",
  "key23": "22GgPKAuX9QZwLwXcoJta94YQJ4j3AsM1jXmfLMz9ZXZ8SLz1EAsvu84RKdtb5uEFaCwJaUkq2ysT3Dy2JfKAXq5",
  "key24": "2odXJCXKA3xJPC7s6GuTbzDSFZr2YjAR4sUDd8cPz667ec47SypXVqsRjY2Hs43iUitqdQb1S6BkhiKxg8483aG",
  "key25": "VhE4YmjAbDaNZK7U172B58cfcaQcCrCnNGtuH1vJAj8Mk8Yb6j6x5RjFSqPrYg3LLPLQ2HSP8p417LfoqT5iNFb",
  "key26": "333XvFLg4DCHBKAVjNEAEug6dyfQU5Rp9snPwuNdZdCWz2YQaQJqSr8ynnaCgj9ma6w44H65BudZhQhbhynkqY3X",
  "key27": "5i3TtQpUF5xJHdohZhwYeB22oKD3vVgmdZA5azFMV7NXC9KQo4ftuFvctghPMMDZofbZLBqefjGbzYsBMotEC6rZ",
  "key28": "XRbDKbgDc8w3NXKHkdwRF7jXKLvr9WFKwFXs6rbngRzu158QWzUeVJbutrYF8EknTRA9WAKS62yoT16YSMCBD5i",
  "key29": "CdgTn1uv1Gf7a9uSWuV2mACFgrkHsTdkAtPpw5YYv1UoGeeuDBZMGr4dmVbYKHUTXh9mfK7zSWGASD9nbQCvYBV",
  "key30": "4kNcX1CQEhk4jAFJE33Mnvd7Jnc3CVNLE7UCbFp4fUSA6mHCF8DwCNa2zn5S2j5emfhntgpa63cszDt7PMZAezaN",
  "key31": "hvJ2LJXPSJGRBuFGYE6FU6rEtKZxi5cCz6NHHXc4fVLY6eKWLT2ucD2ui7pip8d1YBXYs4Q6ZufRtWaSsPBphQ3",
  "key32": "2BUzfSgxDZ7PcqTEJUT6vsfmGC6EEjQMtoztKyYJKLEdyeiwMy3h3RxCY9i2uiTkPAQY8aSmrudqMa9MNiwemJJo",
  "key33": "4inVHU7bmTYUc5AQjYGa9Y6HD2EdCiVbjCgSffzz5LEbnZ2oDiLuZtaG8DT26U5GzsK1tKGYmsAH8QJ3guR5ihcd",
  "key34": "3KmwW8uiyShYrystCFrBRi9r169LGhausb8d1HVqZ8TrdF3aKR8mrtvBSxiNPRGrBkTQYcwzQ968VFBbV7LeQYhk",
  "key35": "4Vy4PAojJuAVXPGWfHYezZpiQ7mNw6YfN2hnZ7KWaa9p6PKpn4CYxpYsdpriXJEgzeDVHoEYx21C8PUaZRX7pqCq",
  "key36": "2mDiq8muHsue1B7VGqePMdnwEyP8V4j2d9rtDquVM8Zw4gSmed46xfX6QA21uVQejDjWWPcgRrBD6TtRUM1bUftW",
  "key37": "4LFgrszWCU5hWhjFpSbTGEmegqjqJ6V9Eh1mBww1NrvUGHW5HHztjbA9XeF1CAhHwTnLdpKXQrrevwTRG8j6zHXy",
  "key38": "4rz2MHDpoSkNxq4CzMZ1rLogbGeudr1bdnEzYw6wrD3vosJB4otsuZn7aS7Y6Wp1GNTk6toTcGbg2FNigHGBS9M5",
  "key39": "jkWEVKcZBvi3fXTCVDBcorgVgim8ofAFf5BmDwoacfhATx5jXETNBDbnzL3XHyJ4taMWPtV5VX5NKHZioXCLGqq",
  "key40": "32LQqZrzjbzTunWtNeyok5pB4iZaRJec5yCeCzm4Bc7kJJmaq5cu3Go4ZfsKPzbcZoYG6CgU7rQenhk37nA8Kd6S",
  "key41": "3YgFcgSW2GdAG5CJSGwrCKwRJ2cCXwchDn82MDpVdRroKBQfu5J1qiiqrD77M8sCtVHKJCXjUFHGbKBEkbwkmJig",
  "key42": "P2J8jCnYfoBG2TqkhYioQgxQjZ8dhQ6VRPNhYzL2yDyr4hjVcajWV2w4D7CMLZFeJK91sgqMKc9GfEe8N8iNfHw",
  "key43": "3BqGUjow7PMnNrX3M341NUzaVFD3PYBFWoE2AjYJWQ5CNbXNB97oueBtXANBWvv4cxfFyrUqFWHY8arxzSdxwH7a"
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
