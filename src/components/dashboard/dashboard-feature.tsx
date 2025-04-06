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
    "5NoX1gxiaMMXs4arUG1v8CGXps7SHigsvoEdBWSWDvTJRbFKyRrNhbtTaFJsFq983WWfyHTmd8bMWw8xw5VqJezq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d4aCfrW6jNWpVZ1HjJEvorE3xmpCWdP2XkdfeUrzgGU6Dg7938dYVh4ohPNamBedb67MmmR4bRcRLkwsyg6s3sz",
  "key1": "5Ymt51t4maWP4qjp2GGR8Kz5nHVQFmPR6PrnYjGWMh1k7YpchsSHhSrHMqRVgi3kmCBGhBXepyug5bQknQFMj5zk",
  "key2": "HSnD1iPB77KW1s7J2e8UUn8aBbt1F8Axzzn9CpkHn6u8tbuKnnDyFZhTjHCsQa4KJDLLBL4FdQE2NU6Vm54MdXt",
  "key3": "3budKezJZytHwMTxobQWghNtH9kqX87G5ETENUjb37HhkyEQ5qPgofGBXb5UbCrJJqWg2w83ZFi1mnTGN6Gynnof",
  "key4": "4iSrx1pZ6dF9mjWNb31BcWY9T1kEgtHRsjJNq2e6QDfzJ54yib29xMjfMhsVXf1m558ZBuYxdDSuDxg23RbJi2Sq",
  "key5": "2cyRHHcMna4TeSXy9DSmfRufEBBhM3ZacbrA42i4wXS1M57LqpDTZhhyWhWp1yHwPkLiiojwFnzUdUC7sdkjjSXu",
  "key6": "2PYs5feKU9fWTpsLiLgYKLMnh4jWsZfktW7ttZg1QrhMPgqjLTfAdFCq4QbKNDE5PusGaLG6hZKPAcdNwUMWAfc",
  "key7": "4NuM2g52dH7LUhZti2jmo8gk66CXvpD18RSYuyPxmG1m9jvgEEwGpDa4U9fqieMENuaDR5xNb7vtuTZuneoAdk8r",
  "key8": "3NGQeik2XieSNcWKRWW2eLQxkerP7eBAJDf6xmwUcPpvnATHvwg9YBn8x7NkKv2EvZFnyUNDrvyzZUG334fqnAwP",
  "key9": "2duNYTSuLxoPJDjtCairjpeKn7e3NKx7JcXaRxgJBnrFA7HYB12JMqxTisgbLSLXiphMuHjHqxMswaNjVpaoDF9h",
  "key10": "2oZGUY5nqNpz2e876PmAsdGu7BFkfm9u3jJDBPpQb35eoQwXQsvnQ9y53rESuNQvNjn4hAZ59mmrEeonqmn12G1d",
  "key11": "3gCg6mRqjkjZomezbVxssfNi42mqx2Jny5tGy7K6wDDnZk4NRhk9H4jdTRZbGBeSbsrJss4G4tx1Z2XC1hCuju1n",
  "key12": "2pDXh4KebXdtEDeUBnmVMMiYRRHYfxpKcSXo8BbkEaiSUqXcLddBGDGEuvsJMdLnmUt9GXoq69NeY8gxJF9HSqWq",
  "key13": "2owwNjkGp76Hp9A4dLhUAqcbHq6jkGQQH831u6F4nfCchhK2uEKHZsVdKPDpjdkuQwruAJjNJBFXyGJX9ZW3xwT4",
  "key14": "3r5W7eLSFtzdqRWYCGB8zCsXUTDTRwPqd2aDYzaJgxrKMC61zVyBks6mMYpRoPmmhowdbLgHicg8t3YngxKsxGqX",
  "key15": "U4Gghdvv3zVHN8dkXLBwuvAMWS9zB7Nn8iVvYWrcbTmKjrdnoRPRKJj6tyAUtDUMpX1ecTcnfQYuPor5qRNZS27",
  "key16": "62yYpgjHdko4cUDfBPUUKZieFh5bFTPY6hNwmr31TQgrkWKTAwTexEa6pLHpzdkfpTBRAWnjntWmsvcJD3NgDfCC",
  "key17": "4nvTG74mUvchnigai2vYRkE3QhtnNw2k6jPRYS4Qvk96UddZZwaTz8hEJQZssoVGNA1xutU62qkufMKBEuPi4qzt",
  "key18": "aQVCre2uuF12cXvFq84iyGEQd2oBzbPt7fgYx8R3jw5sY1vZ8JeM9tsL3NXApyjgNFSsTmxsMv7Qyr3FFuXija8",
  "key19": "5wRDRBwcbeRH9MikK4UghFnwXjNjsRXXnmwqoPCpVDfoNPh8QCpTjZBxKn8FDPRsGKkBwfCmEJWnqcvyESNJ1Cde",
  "key20": "4r83DFGQyssfVGBkiSGLXcvyMu9Jm6DQz2X9jHKzDmDV2zq74DuhpSZQDEpnZ6QdHKYL3ogeqsahqJHbNZ9f2Qo1",
  "key21": "5U3ML3CxALUuLV2W48N9Jp4yTDFcdqgLV88gxu21aeusbxX8fb3R6bzBLbisBYnpYCbJCxApy3n4NpJCutMj4CKt",
  "key22": "47CsQ9XwFrAUKqj2ZCB8CKr7b91G4mMd2Uo953Hwy7SYxPnUsFrHhhLQ1Rnxbi3KmZm8jhDnXTsAzrru9nXQ29w9",
  "key23": "5ieHDoPpcZWAt5eETGADQAocYQRgugphg4HSgieE4JjSZzqQZpPt44nmVk6dg92q3nSnSbzxbcyg1ZryyoWAP7SJ",
  "key24": "24ZV7Y3boVAbcJ4XjFribA3cDdfBKMmyeUVuoUK4xJSXWanUBwrmvV7LskiAnoh6nq2zQtSAuia55aUb7QxbAKGH",
  "key25": "5jw9yzLMHqNHpBPski83VrSR4jjWBGKqnv5QCSsVR8MHSvE9n4esn5M17kVphPoUJ6iPUJ4pxRiqRfZjqndiY3K1",
  "key26": "ThWwCEpjLKbLreHYLo2AUiKVkrHrksgtVcuDENuPExF1SZRQ7cTPKDTw6j16w7jNtZ6dArM7JeGYKz8LeEwkbrC",
  "key27": "45fLdBZEoU4Svreu7gxDmo9z6jQyPTLYW4hvV3DHvH9KVQ6ELJ4my96JBupdXyb1yUHEVygeN27BijF6P6uwpeqN",
  "key28": "3STLiNU1HoQ4PXL1gDQ55jCxMbdVn2EFDFe1eJh1mnfij1iRHuhpAfxXF9Q189YvFZL2JGofhL7mkCsy8tQVR1KN",
  "key29": "2GMHoTXM3KJxF252y8HsdRYFKsj8e5mmuM3XVrtoHWx83WpPxBZuPxuo2E6i8uknjPUvq3RB8r7FL2zTuaNAroEi",
  "key30": "3UNs29Tw6z9K8nE8UKbx6h6Z2tEuEojVK7x33adg1sfjwm4QxQaq2xCPL1cheEcyhpxZxtMP2FfNA4BuJJWHYSpY",
  "key31": "2TVXcajwvgpnXrPa7tZTjNM3ch3NswiHMjGxdyjBpiLnvWWf1nGJcQzzpJygLyZe5z5X9oETMKgJEkZh2pqHBnGP",
  "key32": "3rLECTRqRooCWmi7odRZVxQHaZ6fEziR4u4f7qezfMudVFQSyMa3LbzCHJhhRB4ZvkEzN9urFQdRk82EV8p9pode",
  "key33": "462gu2TK6ogoCrXfTTmQLyadU9MTyhBSMcaeh3uRcnTTQAKqQWvL1NKeXvBonX4fmQcd1FXdsaaJhyjxPGAsSQ9v",
  "key34": "3Y5TTeRts5fsrbCZX5FBRHqH1TFTAD7GgwN8HFMQJ8pbrhms8HdacUHJUeTh5GufKY298KowqJm1EttbzScvJTWq",
  "key35": "HifqWs9mQwezYpSzQBWDeWbXrVy24wyLZX3D8Nt1xZ5H2iRSHSJ4F9H4Qp7kobRMrLiZnzveQhsCsLL814zQsN5",
  "key36": "4E1tV5d2nKr46vL9dY5kEkbHYS4zGWQ5sJyZBvPPXt5o5y5BXt72fgZdDy4v3fs7eAfHnF5ozj8J7kwoqGjHyGEm"
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
