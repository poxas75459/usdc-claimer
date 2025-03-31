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
    "5pQ6zepvzosWGwwN1SsybBGWQQrixLRuRBJLysWkRLhkayBL4suvgLUCTrmY3Gu4P2BmVo6n7iAytrF3T3zZtzti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMhfsuonZsPbjEMp4fgYkuuAekQZDTdHjPd4qBa3UMaHq78oJKDhR9YaMmyNUCG8zhVmScuGGxqg9e7WaATQRjp",
  "key1": "2iLGJcdmi9ert4MGQ6vkUShmKZh1EujovpEWPgr7FMXUzqZUhVyLZ2Gr2482aApAMsQhdjgppKCetAJyXjwKjMYY",
  "key2": "9nNSdQ7tGCMbxb2avUTaNSK2QyTTu8t85giEBaYgxjr7Xvogbf2W3KLRewRV4NfcfAeorAmgNwavSPBKwzdsURw",
  "key3": "2Lw1BNhpJWBuZeXwddM4PzmVE8jgEJHmjauHq4US3ukTaAWXR1xQrenzFXZT6y9CVC8T3TQLYSAa4QAV4jyxEvqz",
  "key4": "noZejhke7yNrhStEzVvLTPResXNJMSRag6oKhfcztzdxanGANWp9tE2srWuGebjabhqd36A25JP4Ayf4aXLVCnc",
  "key5": "2ZieikiYmgmJ4jvwBbU6n3mGM4Szi4Jmocqdd2VEhgatGyNCYXGiThL4hSwzt1pvbV85kQwea4b74kWgDyjnZqjC",
  "key6": "22cmF2Rf7p6ZmHX3FeHMrNVhZoDvJo3hY44a34eeqtUnn5zm2FgwsMEBga4RBb8pY9mNS7musm4JzbCmv5zFcnzo",
  "key7": "44fLcpbRppEb48bNpusWBYoQ3ao2tf9GE5ZjLJucaEWdU3i9GLYWQpYAsM7tu3QZ2nkQGbXHCNBPyJj3dAhBRskB",
  "key8": "4K9YszoKbQFj7G1pbxQwAsVwFAGkMLt8hncMGQSosBjiGy21wRiGJFdEkL3y1s112P8xkERYNoXijQMrbQewwKhH",
  "key9": "41EZ8yG3RdXJXsEd94iz9TLpfjEpadS1zLQMVsukya2XjDwtpCyjEgDe5Vreybq3d6UiAedShA1mdqbjjvBPYrFE",
  "key10": "41qBs3rkM9UmdXBYnbE4vgrH6j18QNnr81Mnbc5q1r752fsCyMdmoFBAWMP8rBjc3Ne98gvtpzqd9qciJoj93wgk",
  "key11": "5QycJMQBrYCzHukxzHFYjAvqwhZsiikoFBh4PvYb55Unq9F45Dfon7QSPtyreybVVR8NTTXuL4ZTdUPAfkazw3me",
  "key12": "2a2UdiajFQvLzhGZrwyZTRZitWNyKaEdYnzSq8YJ6Z2FzvQ9yC9XEZPZz2TvNtyfid8WD2jT6QBpZN46iiVVuDwu",
  "key13": "2AU6oFsnyBJP14A4wCNcpLZk9DhZgbUkzz4mkJ6VUWmmVy41M5S28ENeKYygWkQnZwPxbNPPH2pM4pNjULfS9qnj",
  "key14": "221MgCwdesv377sEg662B56H2qib5Sohq4B3JM8W3qwgjv5p1kcAVhZLoXAoR8aJuqGixG5tDKAhDxrea2Ge5AvW",
  "key15": "b3KDjH2TiE7xaTnWnAyhgQrJciWaaz1AoZaUkboSJhRQ5LMas98r4VcgcBksrdf6rdRoVq7JBFsGrE3Nbs6vras",
  "key16": "z6BSeHFxwgc5y78uHpZkM28mHVQMp4jaJryYoBFXcSMd6qWwqinKUW6CjWgrfcZLuc34iHFbTQDNZKsJMRJ4y44",
  "key17": "5X1FgREGBp9JsLmscRB5BrWs5sKofbdU4V2o3z8ZJL7qwG9xeq6cHNWu6kmjnWLCQ2UBG5ptoJcs8fk5i9DaHnqb",
  "key18": "vJEMJBTQwtVYGAhaBHJXdKAtsUgfBvuSUdhwZokLZHK8fsebUc1STxeTQR3rrnZefUe2qFneL4tRRAxbR1fPGBp",
  "key19": "JBSGsvPJ2rTYqJZqw8Z92qY5u9xL6DKkFATqZwCMA3GWeHtmccP6Z5V1ePVfA72rGnJMHwMMva1JGhPtfCVEi1p",
  "key20": "5JsSgcY3Ny5vATWcvav8sY4PG5uEViDSVZ7vYeZXXfYbVWWMitNC9mfFFfMXdBaaPeYmitwkGnCLinvHWEUtikq4",
  "key21": "2EAACy49m9me5kfVxNoxW2zQ5zAk6Vw4xLrpKmmumFVg3NCz8pETb27gQ6QLnWzSDcrWU7jKMc8jHkYEGYmHbirw",
  "key22": "5aFpwrBCMpYQb6bKqnAY93fGZfp7y876ZdfrQ7bYuhtDaRsuk2jtFnhW2MsDBkWKcNmFdbSmxX1sW48wr8FvFE3d",
  "key23": "4HWhwqCeSnFbHLgdUxZeea7No8hKxmrPckR9ritBhahYChuER5wPHCgZkEMsgYwekT3UiQosTy8tFcmpoHsMpPx2",
  "key24": "r5eAZnmpJRr1mwpk8E2GHKzgFtJgU6yFF4G4mtR5Zts9PXT9GCBr259X64aUHVN8oniBXMCxqUVcswMpgnEYttj",
  "key25": "5QbbGRMNRQF22fRVcRU8L7RhFCSMsdkDFHW1bGzAdSCUvK71RxWaW9rW7gQnmPN3dD3ycn5pxG2avU9pQPivK19j",
  "key26": "4Q2vyLCPDjNoBCyZZQ36EL7AyLvijYSmPmhjadVVhHcdygzE8Q8QZWPxGr3pH8wUsEJwqBhfG3MoRR1BAGYFjLGi",
  "key27": "5guQuXpFcEcM9wS5U3qD1UFX9WDK9axnC9d83b6t6MCaikHS7TGhzRspyMc7UR94xyjLYiYmxzY2CjwyKPAHgu4D",
  "key28": "WDAzJSsbaxEd7WWzBNj5XeXXiYGjqnsdF2Tj3TpycSdecgRA3SxFVgeXZL1q2HSrJGLkZzuxN8TSLgd1814JLeW",
  "key29": "4KXdhou4jPV2Pf5V731yfU1yZecLKgaNqHCr1WjQ1c3qmtpFz2YbvBakQFGyTeK5bvH4AGbZLsSfb1S7rt6eWrrm",
  "key30": "n2ppE3FUG1o18Jm2BP7t7XaUwN6hUkP8N1ZdL7rXtgqgYZQnj7sRJh78jptKWgkXc8nueBc5T3udBPRhJHcNyz6",
  "key31": "5YxvHqnUG9ZzWo2F2i29aj4rkWLQpJHsSHuwByjwg7jSNwS88HnmQeZ1WQxiF5RfuQAgjhHX2yLYmG1qhFpcryim",
  "key32": "5USw9C4PoFJoebx3xh86pM8DN4SfGyzRMUv6aPNdqAjqSQys2Y9eVwDq7oYbTrdafXVhPNU7hSzQcLtz98d52omC",
  "key33": "LZG6GA9SNm7EBi19YN5ANdUgkAsaCzZK6UaXzSsP97JEDAeEyjWJHJ3ENj8srWmEWGtNX3WUjsm3jTrLP4WQg1U",
  "key34": "b9Vf2bjbJYcXVcVmWZrn7A7h3qCyvS9bNnUnvqaVzLB7QeKDBUbRDHFJMmsR4TfuyUVZKmqsQAgj4SQG5HX6Sni",
  "key35": "2QyVHrhzqdNa4VthmQbARer6zkZnKMn2FyrcV4BhrT7Zho5FP6FUWeWAHcNGnC2FzPDVN5JpRJuEH8petdJDhpAu",
  "key36": "67nmMCsSh4Hgjc6o7to183j4mS5xfYUQA1jDA447jvcvmo23mgGPq8psFHueXsAVF35T4LN2EeuA5ekK4ZcsSjpj"
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
