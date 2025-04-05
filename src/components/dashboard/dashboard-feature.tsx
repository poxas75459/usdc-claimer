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
    "5H5W5VyNx4tq3YdFYN5bRHN36nqNUf4EV7RkcgFfLACPcbgAVwYkk4owFpfx5Sc3HksbDCJswXeFoHQV3TSPJTJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6FM6DxympJWimQyBx5xn7y2fsvMBbSYJA8uPLqFLTPDWdY1jqHShH5Lp3q7fCTwns8CaWp1hYPSgto2Ky7UVSL",
  "key1": "pL84YdT1unkQe1sBBZzS4Gc62b4EvRuJG7Nr6iA9VpNcxmgFMx4GHfjbqc5op2AjJNz8MvXHfW2GSqNkrGDvZd2",
  "key2": "2HbyzNmqFcUmQRxukHnL39jmR7T92PNoj1s9HKVhpQLv2tjEJkRaAqiPFnPsYthXYv4XsESRKp1mwFaBPtSxcm1M",
  "key3": "346FNEAFyuPoy5yXAbiQEudR2CoeqkDg78Qabf3QdauArAkWR3KwUXqx9wPSdriVcWJSszvVFUP7ykTCpz4JtNRb",
  "key4": "2FaPbbDGwoXEwHjydyiT6Y6SMNaZJ3TFskYXXWyRvZ3hDCewgXVXYktz5tYc2GLei49G4oSrsn5JRcSUg2y6h843",
  "key5": "2zXHW9CuZeSreq1ki19UitqDPfEuH7HBsi3UCyHxEfM48GiiCNAjhg5PT2Hmb81iLrYn1yDTBXXMGDB4QRpEeFZw",
  "key6": "34b6wX4XwJzFPhPzq3K7M33UMCqXrmYpbfGXh642Q5ywYf3z2isPaaALGupgGDfWLW9mFWrKtJqrWBDX3mcr5MLQ",
  "key7": "5KpJJTvKoRsioX9uMQRhjGG2gJ6zThbi2RdSbbqMeDsMvgChdDMQrtKQLY19NMeb8fG8kG5PQTqGWCz6r896ZPDt",
  "key8": "2uoZhstM52j7kQi9QoN5Tx1XYuXAEMFVd1kGkTqnpFqBvRqQYs98p4Z6K7PYsiNsumqe863LARnt611STEaFJS8r",
  "key9": "517gpc5M5Dh8U2BskFXBTtf1GEsDrbGcYuA8Jn3fuQHQ6vpAuW2kEmuko6FgdSJtfBKt8vVnFCAgT8TVq7dAgFSj",
  "key10": "DbpFmGkr6ogkutuhKwMZVu9qBBfY3yEWF1HXPThpQCWiayCyMKe1d6BTYE4aftr2tMqViq3mT2fCoWjsf4RLmGw",
  "key11": "2pxVwREL7oRa9DhgeMgTVnRf6KdqwwR6DsCf3C2kPsBjNcWjTRDvyAYNQtzscnXjhoJKGa3YZGpbs5EiryXfCMhg",
  "key12": "dCu1hxNbxgC6QjFKK4c3uyW5C52Acr6RBbo5S7BGL5TLtQAnMYKimzWMC2ouUd3YouNLfsQ62brkfDGp2yoc8hN",
  "key13": "4U4D4d5sfS54MNnVeK1hXjaVM6WJh3rf5vfBMVsQ65cGabafhNKfkZiCURG9Gom5qnKRA28B43wTjPTy2PEvC222",
  "key14": "4B3SZbw8nWsQSzDouytVQL4C4U5AypT5h6b5CN53nnTZMK9sXmbuJePQJu2Q4L89ihmNF17X6Vu25u1kLT1zfPz8",
  "key15": "2a6hZdcgJrv7FNmJNcjpH3kRs4L6VNrKPxvce9UbK33Y8CRivtkAr9XKAa1gd8VCcZ3YvU8JafnfohHUA4wm6bov",
  "key16": "4zGtebmjxL3EBafMDf4zde89eN2x7qJmk1eg753kKKyRncnx9WbiaqH7ymfGDJQxyptuDu6uM4wDyVPxp7YLzqFa",
  "key17": "8z2MYzCTQSCnzN8iUsCZotv2AJ9gxgTu8vYVboxcsq64MYxdEy7uYE75yfL2AQw7z2KEwCXWyxGtaeJ7T1RQB8v",
  "key18": "2e15ANsCEYyzybY6ZPTNLDrdSyaAzXA9HieuTWiBbrmWxbGuhihgG3KPiSpHaPBVLawnM33s2HsDwuhtmUgAHgwb",
  "key19": "2PMbu46LqXYsmfR3KKdn9zKcb1GcWSEnt9VVXk3iUZ4tA4FKx2zj3Ju4PnMXGjD7uucdCpYNCi6HdWB3R6YBSWzs",
  "key20": "4jJzUf1jgiC1WxAHq47PKF6AuL3cNAqeUGVU6TETVshE8fKMQv29Ygm9WAgiU8vb16WJtJc1nauNLLH8XRP1q1Xw",
  "key21": "24m72vBC66sN7CW2S1bxBvR7ekALGuD8R1uLVZ44xzC9M2hobvnJ6LW5rceY4a5YQYKkFtwYNyZo8u5T6hozMjmA",
  "key22": "2uZsEfjixPHTfnQ2oLrqd2ppHQe6bamZJYoQDWjcBjAVHfAsMKFckbVLKbxwdt4a14LFGcQDHrb8skDMo7FcR52Z",
  "key23": "5ntwctyBiwbPDg2J6MqoBBFKwRM5HTPFNx3BvRzX7LkYR3icJ9bGx2XBx2k6mrqXU2uaBkE8gRk3MyLQPdMDQoYM",
  "key24": "28PBc9zQhJtpg6i2fjVAETswv5pgf3L9fcmgzWR1SApJZBUL4TpT9LnnH5RTW2TYbKGSyb7ro4cM4w1fTA8QFwZ9",
  "key25": "5hznQ3c7d6nWvBa75YAVmQnrkfo98roqgXS5qKyDXkE2BNNrk8zdJ9hvFb9evcnWddEZi5EFg2Utr1vZCi9UsbvF",
  "key26": "58rLSRzJpx8z7QLU1QovKkRTLcTX67ByFVqv6DY1PeW2qw3ShMCynHz6sGM9ura7jjxKkkJCpx6aSdvTbZerxDR3",
  "key27": "4LPWgPqCFZQG2rAHN9Z6TsNii6s22pcrzQW1ifv9ixZ2DkxchGxC1VPNbMjciSR1FAW2q2XvA7M2RWxFENREogH5",
  "key28": "HHpwLoaXMRBkN7X3WD7BT9PFGH6sUt41Qat9VHKmGioBqFr4C3gHuBj8AvewJmDZMRWP3GBdDzpzdHYQ8UJgiqu",
  "key29": "5PDYMHX2LuHQekLa2nSqJrYWTR8qWxw6YbppoED6JdfxkoSsRLmUvWnvdBx6feNy5XxG4tCSkhj8gUeET53HzbJG",
  "key30": "5Ckw7jTj91QasEPXnrREKbzDXAwkovKCZK9mzjixPjzDwnZkRDZigdwr238bNSqETv3f44rHhh1ezv9LqENdjJQa",
  "key31": "kdmEZ9hUGQK3S1rEvAVo65aHnZzvVnHTWQBSV9g5f9VeWQPmaARN7Lws4LioETqxpGcoT1fZ1nddYmnc3Ly1YjH"
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
