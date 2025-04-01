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
    "3jBmJZu1pPBYfVUD4XZGCawvrwG1qw72j9eGH8cFmv8yqd883i2cqqn552k4sb1UqdASd5mSHhFcgjg4JCgZqHbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zGLKnofwJeLcUingmQN4q2UqVxZUE94GdGcQMYEA3tKZyFFte89DKWwnFuqAE3Yco4WDGFKduyQZjQ2SpLs1zY3",
  "key1": "LmsBv48atwXix1eDLjJQKozCs55u7YURBX4ZEuoEwKe3z1b4JiHNALqX7YMDbfvq2CBiYiG5SJ5q7pRXTSPpTmj",
  "key2": "41LmjVEoK9ZWVs3TQ4KiVRW5vvtp5qU4nzArXpvHfmgBDZ1PiHvBUpdyVq1uoZz8nikm6K7LobWjSPKh9CkyHVZN",
  "key3": "5jX8oZF5GQDSGozqzUHWFyBLSxY8uaa7nLgMrZXBYHhkE1gY7TJRKFvRBPrfHzUZ5C49jUqYUTxxttcaAWczQJBu",
  "key4": "5UuECeCVNgD8yKfEwnaJfjoXhipehb5FpcWzZpywHX6keoCGbLLVSEvxS2NWnvnxgUhnDu7XDwHkSzH7wwdiErU6",
  "key5": "HZNXgy4bo8mp1qBfJ66jWeXKRPZQ64puRc5mYKoLKYU73fLNTXYudMwhiLvR7Zw2fqNLto3WEFNpK7WjENUNTuv",
  "key6": "5qo45WjEfqo6yDrYhpkBTDQp7Nm12hEYWxqJ7fPYjG3mi1sQyvvhc4ZBDMVstvPCseSqHbwLQBSbAc5EcSaAMDPM",
  "key7": "36JPFFb7v4fTd646xHCNzdcYLoPUV8vQy3e8YzvSEFPWrPqMv1ZaJknoAVUaWanCQ6YSFQoMDequiDtBAxcbCMwN",
  "key8": "3rYjw2s5kULGPcLJdyqRBLAMKfAZTAsQHHkmToxuw1UQ59fzw5ULdz79gTaZMFNeRfm6yLwrrc8H6kvNtgYp8iQ8",
  "key9": "4iCgajJZiri4besDW1kmEPY5gJmLxVGRXfKYLUHWWYKxFKPJpLoHUfzhJrN4xue4zutMyw5BPkxeixrW1E1GhAUw",
  "key10": "dr8aVom9XPvBsYCNqdY3byYx6ViCP1km9K2KbREUwT68mMFH2XwpVSU8MCpvHyay2pem5QFkWSvf9BySaUkUTGF",
  "key11": "612u5BTw6ZrjmiwvTE7cJ8DLFFDrw8xH5iBfFWGzGx7WVB61WpDnUCahwxQiMns7sgcxYBotfigJh8TmrZ6q6Jci",
  "key12": "4fC9NnxJ3QoDxaQ7Fd285aBuFDBX6TjvR2JWNfCRPhEvL3YeDzr82MFhPtn8b5RQGBwpiUMhhtoQ8QfuhFe3wris",
  "key13": "64mhgcsoDoYvFqQfER8w6KaddRYfcBPptf4pConQVsNo9rQ3uJNv5ZeDkpqzthi3p7Su1jNY94zqQ9X5cxPDmuRu",
  "key14": "63u5M9W3sa1XkYd7S5hAKL5U2AdRKghabLf69vTe96UfCi7vH5ifSQpZRkLqw39LDjzjpxMN4wTCu2UpbMiCAPfH",
  "key15": "BSsZTroY4eVfyFUwPC8e2osdQ6L5Y24tcoQNBBCusj6oqSkBtAxmsUFKs9Vg23J4iEVbHiJ1Qs8L5vS7yrLEct2",
  "key16": "2NUBdLVZ6huNjPWteM6gDX9oTkaFU7Y539aDoJpbiHnsDMcyyTSMsqx2usGXpXDQdvrnqNMWg1kd7X2RNpNCMqGf",
  "key17": "2ncHyu4wQavLguZGpFfasPc6qjarWRYW8xL6qNhzqUpTwvGd8iKbCkjRzQ39uqP4LxdwRsbw5z8ZoHtXzZ6v5ynj",
  "key18": "31G3KhCSaWL3AutcCdyBnT7C7NvZuX6irktSbjZyDyvNbu1RrqzhGwVG5bWakUULm7Whx8ftjtScnUoibU9gme5M",
  "key19": "3qjUEuwzTbWtF9YAG7D1z2YRyayQVjufiPpoFYEu9fQfooa64WPjxUcSCxHdERg7yrtybLtVFp3DFDSZVGDvms8y",
  "key20": "5F2zvFB16f5UfE9iBXkcj8EzraJzHbQ44e3fSf1ZyxguFnRrKZ6EHgqUjuXxfTV69n5Ji41bFn5481bBmwqD4W35",
  "key21": "WGAqowMyDduvcMf6JxZhP8J18bYbpD9rzkWDqgxU9eW86hn1zHqTcBPtBc2rnH8A2uTHZCoeRB6m1pG3CEwKUuh",
  "key22": "3NzjPJk5k21A6r1ZF7nvxrGnRyjgSKs85QT3T8kCMMgHHohoZtoUDmimwWB7e7THt2tXmi87svzj5pgR22nQeybY",
  "key23": "66F4qhefYwQVCcKbLRhjy4weq9g7FjN2bFrVSkvZ2ewUGTXyQrMoK9RnzVdsgBHBN7G2VUvJuAkp7ds7GpGycN7B",
  "key24": "5kyu3oAhrTat7MY2yRhkYXxHaTwjcKJpWJNwD32m5KWF13WMRa8KTJsHm8rSsMdn5xSBXf2HxaZDzKKM1tK53Yxz",
  "key25": "4hyWoVTnBKuNtEBMqXLzUEiKVDDJdzrBgyaQtGuyrsN2AjZRA42xZQz9bXDJhknD8LzgnLECaMwuMPZNxc7bQbvo",
  "key26": "2R7U1Z47bZEAhzUui4LkJVzAV9bZY6Tz5Xjj16AnXmEPr2Np8QswnhWfkBd66pQJ8SDSV24U7HKhWnNih5MXiSMH",
  "key27": "5LRCN81fP7HdFWFwYgLs3ty8CTAuNhBqsVAhsUWspF8xXWE4s4JpvAUujKj8R9cBYpVVr33xFXvbMmW9NgPye4Fc",
  "key28": "4XHUW1GPK5xYeE4daUb9qsTDppa1KepgrHVNQ4yy1RkkrkgyQB9w3TbQY9votvbWSeBWpkvecirT6BiT1sGGGmdp",
  "key29": "5SqcrrMTxqV5TQ2Cf7945cHqYCThADJH4SgGnFJxuboHx3yqDQCZuEMWM2JzKxxLqBNFw5AiLrund7DuEuQmdJ6j",
  "key30": "42xaEaoa8on5PFvwrrJqcpZwwWq7WwzT5jptozRLoABh2fiiwmQSHUNL5hSCfRPjmT37KNKf5qi6sFTHce2Zu9i7"
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
