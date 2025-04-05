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
    "63fNyS1gx6cBwCnowrFtbJxaRfv7m254njZku2hSeZk1smwLvVJ8YAXjxa9eEo7keTq2PvrcnRvm2KyWJLCdQryS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFWt4jXZJoTdhi3UwjuqGJErTQ3t75gqSu26HLKacho36Wn7Y9JvsQGJZun6vPC2S2CohLr4SxpJXhuN2KxmN15",
  "key1": "4BoMDrn9kMDZQSewmYFgJ82jfzwPd49poxdDjDabaYayE8FdCJMepXDyNsQTsLwByeV8Wm8jmVeQPfdcjZGvsjaA",
  "key2": "2i7rYXEJcvkYvr4Q9J4taszQdtwqaLR4Awz8Fk4VnMqKPckdcBhYgxXVcGnHvdUh2SfWBLzL4KwaKreTtT4q3NQJ",
  "key3": "43gfa2cJf6K2bbwdGrjJiBax6cGstsCapbT4yRKmi8keWS5bw4hgUKuDCJm8hsX1zjmADHyfF7sykaK4LYj4TdHi",
  "key4": "2jMih2sZ84V4VozNi9fPtKKXAEjajcR8RsfKRnt34FsgPP6x5evoKrEcULpeWZcna9nuPdNHJiTLRDeNt57hau9m",
  "key5": "3tTxWpXvY7zRCqMyfoYGLvvVt5HXKGxdvxag9YsJbvYaWLtYNb7EoVbQxgDhSxBPz5ReVc2v6uYU1ctKLioeT5rY",
  "key6": "4q42Zo1agQMsoSu5hjTYb8WVPp1ffKM4DdkHCCVwggNxzjjbvsvMV49gEH13f3SQQtguZoYJyYXAV9YCb9MynXmD",
  "key7": "5Nk2BBPDLepoYY9Fzw2kmvtSN6vHPmj95iXpCy9PZaeVzMZXika7YUMHrgzuRZeJAWkzwkks5ZC6eHZH45pcGPk5",
  "key8": "5PaGfBJAXbijjBfhGsYnLgwKDCrgNJCd6eKdcf1jZ65qx2JarUcPwq3TCmRmkRyftfuvDBbDks8EDLVtYYCrHDdS",
  "key9": "xdnLwkM6gw8ARKCFAHJCV9yLAgYESXTEXqEZnSWR9NrGKd4yPnajZ3WADmKvc6G8hknd3PLr88hS5WvWn3yAtuK",
  "key10": "369MsdRdoBvJN1RJqfDvHK9wt8HVRh89AFNCGJpv54SQLmJVp2p2Y2M37vA7fSvmryQBvNFP9NqsQvYXqvKVFpCo",
  "key11": "3GD2LKZwQp9XvmixxmDTYRa7ixrczXZCidcMk96pUPirUzc3XRz5HceZ4YCWnaPTsqVNsUuYNTAXihYSMAxAptGd",
  "key12": "43NhLLe5nw8jAzPGBBKudHABz8D1TM5JHErYogPgPHzwBUpuWcHbxVbQrHQZqbxQqdzkszfcDLKQfn5hvNiytWqT",
  "key13": "2fBkVYmSa5Y5Qz69jFDFikaYaS3yXL5E6LkVjx7utnsfMKJ8i5UkVB3KHYJmrKAqvGgFcKkkbkPYvaPCQEbkYkSW",
  "key14": "5pEa2oS2EbNachKDmxKC2CXDnX585mu9c5MeWS2iSyTAbjfLDiKFK47bBEFdWPb43AszgP74yWVf7N51BFQyo4x1",
  "key15": "3TXb3AKkZ3dBu2hrYK3qrjinXGBBAQBgWJDxtH1Trv9DFh12aUs1sob3AYsEMDJG1cUda4cB6MJvtzfPTeFiArfx",
  "key16": "24TL9EiUPm5k45MPcfnBhrFhAAeArtG8jWocruRd3QwTySxPktPptL3936Lq74bz7D1SrRhoj9BEouiJLoECKn6w",
  "key17": "3aoybtWkCSYdwYoQq15STYsfaaG5ZM8W63usu3ZR8SQ7NZtuVepo93oUrQuBkkvzEMQ3obyC394HUdYqfCidPbpo",
  "key18": "3E1Kpo4i6sVpH6nCmNwvgKx3qwg5zMCE4VoB45nBdE7STfhbXzdLzThhhLfFUGnMEAaapETMHtQt5KeMSHX94aMF",
  "key19": "3JotVB7H61G4FyiXGLAMmkrbSNRemxY3EbynZpM19WqtTXfmE7owZZHQ9cwKGWzykDWhiue6SG3YzDFGofGKixFG",
  "key20": "4dAwLANwpwKJtfQzUPKgvn14tYkhNapa6Qi9fUrZhpmS9MqmDbrD3Gbuz9jRUwiVgeiVB7B5ryaLDevZpbujKKwF",
  "key21": "2mf8faMLb5EYycxBwEdo6ZQ1AcwLssYBSLaH6Q4SXbMsc5WjFtRsHcbeAyvAvf7nu6vvxjaPLRUv9LbFQXEezyZa",
  "key22": "uEFKf4HwDGQMp8XYNz8gr7qBtSyevfoe52kjBMBJFmQzj1zgToVKpEvzJmDfWZ9jjaodQGRgq82vuWwJZRu6NUR",
  "key23": "24TbPWmYGGPGgE4JC6mDhFywqEsdaUzcjCTfjkR5hYETCnZuczkDzyRh4xs2p67heVjsqe7zAgWzUGaiRTq98b1g",
  "key24": "4cYzwWfborPVXToQKs6NX1a2HHJt9tbbKYpfdgC5Q6tFMZofNdWDJYcopcXpNaRz7SmecQZfYDbrpRjukxrug1GD",
  "key25": "DRD4wWctnMMGD5smxSMyiyArVftoLND1QbhNwayWWCq2Mmg2WwwrD3tUWMMxi2eL2DSctnxn26Ercyg28zxgKZV",
  "key26": "4TKEkSiagRV44ixbsAfojf68KtWLEJwXK4Pru4uHqej9qmDmyTebxrifMJqvDUatqoLqBPVQp6SRA4vUNDzqmZPW",
  "key27": "2iQMpQHWvxa3AG8V5hCCbgmiQoDFYRcq6RtsKswScCRKXfoSV1oQgoZKK1HqMCvgyxBMqrVNv552UR54cTbJBgd4"
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
