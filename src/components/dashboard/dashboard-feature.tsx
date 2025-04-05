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
    "3tg5gJJfnxQkv9wixF6774WKQ8vkja2YzSTtWyaa5MhpfFfuQ1k4RFp4VbR7DfD27t2oTLqaG4kerseb3xjApDc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43AVVzqvNdzGP9GAT4bhn5AjvTsUFEHrXMtH9BVQi4h3X9da9Y2DFigz6cSnYNfDriXAyyfkSSkshzeqCdb22kDJ",
  "key1": "55vfqY6h41tCpRwgTtuadbmXw3ej46fVb2BProkiBvCmFbTbKwJjY3ZzxVLsb3TTdYBBNjo2VbiiQti2EfZKzT37",
  "key2": "pw3Jnro5zAP56nZLzTpjkA4oMqM7LHwyrazwKFurp5bR3DLkUuxDwDSaZ45qxqCRAAuarMibyfB3GL9xaBSUDgf",
  "key3": "bt5PHaMgEBjNZeiMJZuDgC8F3MqnKzJF86R8Uhk5wesiX82Zs7Vaxj36U9EEmtqzNbqVqsHVm7RMtRr2RAoBSZq",
  "key4": "GjisSNwCCou35vv3AccCx6YXEs998rZEzbATH4rcf8LJNGJofh1PFxQCm1gppP6P8ATLcYVH2z4L5wVzHxeGKk2",
  "key5": "3LZiTpc7ywcHXH6rTenTtGEjS4Hztedc6AEbdmu5Bqi8uthfKtTtSvf8j6w2y8vKVEmDRJ1fTqSuPYromAdFJEH3",
  "key6": "5mUoziGY3DNfRwXMx4DzN8ssS5YgFJGN1d3epbHgvjE16nugdUXcPz8RqGMzHu2wtgwaMaU1ayv5ieEz8CPEw6AP",
  "key7": "2a2NECAK3vPPmGGy2cpb3RzumqsghAVUe5poivELcKBWYWk99XLxVUWr4fHimWdx4FHCkhTxCDYfGZHfexD7vQbE",
  "key8": "3oRZFWwHK9BU3BQCeKFMZrtkwK4rU3nJdpHmEjSjaWZ3CohoVNSSXWtrTMUXSEFD1xyUPgoMQL2SRdznMFszKcAR",
  "key9": "2Z1rarQhax3DxNfEnELKmdAtepcRsVGc3yXpZaS3w7P1Y2uPAcuh6yxb6ceRwLEx5SadZYMekqFiKukCgt51JajB",
  "key10": "4JppmzYPGZBJfoy7xgPvtse593ZVUwc7Qedt41fcjrTgpCh1gR1jE5qV62XJwBkNuZegJpuQMfr9EjZhUSyTXKdJ",
  "key11": "5T3whbU71YaCWZwRwdWnNYk3SBrVMf6KgooLc14aggzgsmVZ4vkWdS2gu3ivBuqWPP6Eogf6vTwP2eAnqSSgUHS7",
  "key12": "3w9LmoyTqSLmwwCAdECghkFD89xEuvp8dvztzZqhTCTyzZLZQt1MSkQwy2fzVGZa4Sh9r2fH9AKHNPRCRQ1y3KBd",
  "key13": "3HkwoEafD9uHLD1VUxM7XzWnYvDprqEdyhC6dNyG3fy83QwvcPTNwaruMNRrmaWwwibK3GmkKQVuRmFXmvLYYSAT",
  "key14": "z8j4FnrV9a8Ts4KRT4MgjgG5CC2B7j66ngj1zskCcZq8tLx7zZQ1TubZhdq4W7jBagtjJ5s5Q6aLzzY1qtmWfF9",
  "key15": "4PuHjNjnSKh7RWeXVJ1aJXRhicNqDX8KZayWvqpmiV9FjGpXPYfpBpsgjtzyydwDZbJa5cnJbTnGJEG7jSUxZokM",
  "key16": "3wPwoasBPp34LBDVngztsn9QTiGt1w4PjQLg5iiU3rC9VW2pzqZrfgRW8DBWB2wwNPfRezCMuwaGBiWCKinijpZ5",
  "key17": "cS4QNdSZgQT9raD2pcAryvTigYQN421n9CTPq7zfPgqCGHKPyMCUMkDU8QJZbS2AFHp8fVt16DgsJEjn6q1oDzk",
  "key18": "2RXsqCte7rkZqgevmRyn9jxn9CMbBS723RHRvEaFWVHZ7qBoExBJ57EVm1oci5a92uXNg1QJRLSQuRWya5Q1Cgpi",
  "key19": "2CS4eKDS9AVsyR5cAakGLjk4jQgR3NU9deaCUYUCppLULJ9X5VGbfk9SnFQkZrUikTS96D8mAkY5cpnQ2XWeZTbr",
  "key20": "4UCzDFeE9BNCv9ftavtC15xgWCDtr777Nd2qsmb5hvLMdy9CajSkyhg4Yu9XA7Eey1odRMYoJytiavYAPAMPwsbf",
  "key21": "2K2FxhQCnzw5s6prCmtHLmdjtJNKSkRwrHgfiBBSDkyjhFpnqfUKtTKDZDbwNrgfao7pGnnPBLGut6h5jtfhAvio",
  "key22": "4ir2qUPKZtfZ1jRNyUwNrN47yEuQfyour3wwjZThpwg4aG1sazZGbug1Ckt6Xtu2AR91zp9xnaJSycRqw5hMy4pe",
  "key23": "65Q4jsSi3yHidMCwRvoaDjJNXSzSjLWr3f1B3PNHR25s4kE6QLsvCADs9AjdyZyC7YzWFFxgmBTHFGSCM4ev78Z4",
  "key24": "2wZXzhkERxE8szPPNAR1a6sQUUbQ27C5qvkB4wV22CFVpeihUd43oUYS2YpVmmFgeqpty5pLYxQgN2z7JBguMrQU",
  "key25": "2ggBPK9k4wd4ZW5kS4DAGH7k8YUP5KdiMGR8tEkJoC5x1qDCf9xBgazBW3YLYtUsAEL5UTLm7Fq2WwbWDg3Zw2Qy",
  "key26": "M22krkYPYLfG2TVj6JqPyEfKNijhPfGC5WHxAeKptoC5PbKSi9D98kvMZgGkdX1AK9jpXEHYhwPEPuHJXPTkY4Z",
  "key27": "5RHjAg5HBPakvREGWGNVtNMtctLcfjhQM5jmrV5afssrjgeZGRGRTHB6pCxaVxFvdvji4wBrg1pBroS6r2F7DpRF",
  "key28": "ssVehr3Hcfo6pyizDDWcfZLXV6ohcZKo2hVAhV6hoHHsXtdFpira9o7cX7nPytvBaieVvwdN7RT9VZo9u8j2X6a",
  "key29": "zTwB5JYETT8h1aV5zp7dMukkHbfKhVibE6HvPjEMsTALYPS8c7z71ei8uSZePLFdPZAZRbuMQWi3K3veothFPp5",
  "key30": "4dvobdLBvYNwHtzLbkenesRRy8Y8yKPr3uz5ggGVNzsgTp7fQbnhWafzHPckNP4vU6M8vZ1upE5WHYwcitRcu45V",
  "key31": "5mYjrZfDkLu749WAYbhm3g4WqFWyLmfyUzATfzKcAxAVPaz4aqpxEG7H1oSbFxxiiLLvb1WurxRYbm3uoUMrU74M",
  "key32": "3rRVTRHGZfL3QDCnH3WSt8BpfT5han5ANzJQFWaSnK6gLTcUmraYGJCF9aHVPmB22ojHr9Qqqd4YNbidVUfeVMu",
  "key33": "5ZC7cetwrftfnaqVg3FktmepsR3WF3VsakAqR5FD9pqrj7UCZwEzhKR7X8ecTvGUGAoSQA9E2fGHLxpvorkgqotc"
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
