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
    "2UHkzvgsHkQJGSVFv2mTZps3eR5nXyzdurY5oyrTKQz936zbtxguHQMBvXRiELXfndLyTygRfg3YUgYuXc3U6V93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNBdMK7tzGqhJjHq3KohwcMw8mX3cvRjVAZnyQjCP8MpVn9TQ2CbX4tcJ1GCbhDa1qzYXdhWmcU3VcfBnY1jcDn",
  "key1": "2ovW1d6sMTFwJ5N64LzR35HPeoDuCiMwe4Rx67WgJcSaGDYANGMWsVSta9xVETzzfBRwHjEYLSLeWdcaYESjNrVC",
  "key2": "4Hn6C6bqLpcnZUL1qLzCv8Y3EEfz3Wyyr816r5KSGB9926AGE5P2cv7ktQ43oDw94i7cg6mHy1EtArso9qyA5nJq",
  "key3": "2mkEBKpvLcwAm7MNFUagGiuNNQSz7HUUqAhA2XAHj5qVBhnoK9rxYF6TFKARgySkoKiYiAHLtiM4Kw571huUDtsV",
  "key4": "aQwy8bzZiBDwWgFt5vhsLjqRVcgqXCHPYb5nLjvzdFT2Lwrqb3KPajRPyjgsizvyyQkf67MoqBDMJWsXk3TyEmV",
  "key5": "62bbESWcpivD5RLr6FzjxbiLCWAVqYXQV8dQ8uYJvtKWqdnxF9NDcDPnBUxRugPZJnJEHXvTV9McLVPw1B2epRXs",
  "key6": "XfszjBAdTuaYpbTHgQipHReev8ByfDknmNoTKRsXomD1bxm1GB4wqaUwoCWVmrEdiXXVZHRERcXkahUXDzGVcXx",
  "key7": "2BFZKiUEdAPHHwzXTmTNpHsnuN2BuM68ED7JRqpbPQp1sRAipAch8pX9xApHprDqU5mHKgJT6ieAJbKd9GFAJmnq",
  "key8": "2MrTYwnAt1g8qGwA5YuZiXV3aBorenaQevo8XpzqqJLMRsyKyf6cGp5B6yNd1mzLryxKMByPdBDPUken3tifL2g6",
  "key9": "XhbiwGprWetWCzKeTToqCdCTJsRqrCerXk6YgDpsXnQXqB5XWaFC1gxVBK3PH1NSfFgSy33D763Av39NKKCaxga",
  "key10": "5FyXCCQVjQbF9STBqXfEx62vQQBbty6FXYYkhypP4JAip8tMgb8hL3SMGtNxYeAswxGkLd5K6CCqnnBbKFa34dTd",
  "key11": "4f1YgFZZ88t9RVNXzhFiiYQ9b3M5X9r7DzuvuZH83rLJ49DMBuTC5wPNcdkRHicNVBAkJtDviYwVttzUYE4gTYgx",
  "key12": "5sFovHTXL3zud6iRFY2GxiELwQspDDVfYZUPufXfvHkE8zeoAJmFBBWcjAPLY2uzEJQKsXDoJxwgjsvG2Gm5FPZ2",
  "key13": "2SDfk7kA8PwDhZ8Xpx5Skszn767Mb9CUAH76Wp3PinpUu7v82VX4covdsW6q8nCMTwJn5ifYxxzf8eJHkDEmjguC",
  "key14": "3v8N1p7Ac9wm6VZrLce9e6JN9xmefvNzxxghXrPxw9WRQpL4zQ3vFhzbb3MWMRcEhN94sLcooMeLovfSqww1qXRY",
  "key15": "2Zdi2AYygxgtAKU4Tvwwx5ZPqYH5hPknqBWAuR1PMAtbPvBr4hSAXeNnf7JFQRSK7kAX21nN5XREdNUqhwEoUar",
  "key16": "36XjwMA4kjoDFTUJkVZRZ9CJCM3cCEAZCJFfemiLcVx2qFZNNLoMzUwZjZvUvBmouqvYSbYnw51x4cANsy9VZBwU",
  "key17": "4mNGNco3nQ1B8HpqhRdSNNexgSvGq1f8xxmTk93LEnAcz9h634gqK5KuBZdrXisb7BFp8EDmwzeqEJVyHiKWiEZD",
  "key18": "2rhVtsWNkUPta8XYVW5tb33tfpz7H1sMmcCkizA3ZdVA5SYsuKumk7L7tdQEeZhBZqZPt5DD8W3Nok5HksiqoU8v",
  "key19": "5hcCj25Wx5vVrBkHjB5cP4zuDxxutSzyCAQBaDFQnCsUuyrSTEaAUKouMu1rqD13Y5NhynL8QBHNH8WaxC7txmKB",
  "key20": "3o1GUJXF6QvABPyeGYdh9kiN4Zy8VRGV5EUBuog9EJfvRP9gmdFwbU3xR8jVB9oLWJPixEiwbn3TnoErUnHp32Sg",
  "key21": "4rWVLi8JSExLuCRiU1zNwtSf2zCi9uBnJJXqECWDB8aN1S2thG6aF46DeTRkJ7tCwATVLmrLHAL6AbubHoPKQXNt",
  "key22": "3x6NQtbQz8Wvc6E64jXrbQr4jL6oNNToUW2oygSYA3jEsVBtDuNq4tAGA3f3XDDVVeA9Yqy9R62KKLdq1aJAwzrr",
  "key23": "5orhwHkfXS7BqEt7VESo97L8vJdHDUqPdeLhDJ9YoKAjJPJafsvffFMErwb3V8QKxE73yfpTyXExmAxgnPbuNGEU",
  "key24": "3VGN7YY4nH1AMtb84zMA8PogxEajurB2LJbRTMDjX5HH1zY1uPeXwuDujqAEt9TbbNLW6iF2SVS8yZw8uXoucG6p",
  "key25": "2WxX1AoNbqjn6PNp9BHTLSaizVLiRSknqXrQbxXEk5bYuVZqn5qsvyR1nz6RNvTmUBDMVDhWf1EQvV7n9w1edXxM"
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
