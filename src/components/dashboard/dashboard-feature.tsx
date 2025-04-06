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
    "3HULR9CqdEcnNFfZwJWQv9MygLKcwsxgBP9m2Z52saZHbs3oWKiwUsT4vZomcxXcNqULvCBsHAQ1ZDe4KKvHJtAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mbanVVrCP3PW1SeMYTq5o6T1kN6S6CPG1N3UK9m6xWPWXrUWnkw7o9PoPUeNxYU8qgaQVk3j4wZD9YUoHzymCRS",
  "key1": "4LTXYRqAfAFhZoPxUn8qnMyFyFWgHqu8PFE9kFgQRtGoGHrDLHeHBJhZthkyhf4xdSA6uT1M9znkX7WAjk6PPXSz",
  "key2": "Wsq8qDThXfhgPC4zP4LiZbYhisfMY9mNiER1ER2s2zeuEJitQHr5dYn99o5ALEKZd9intkD2ruQecSxkhC87QrE",
  "key3": "5itYFJWy6E7yqE6nzvp7fqxNjT7ms44UFmDN3sCFzCou9gAgb6eanxd7t4XKn28TtKZ2dNjsQVmQjZE5U8t36Ugo",
  "key4": "2S1QgYiTa2iQAU5MPGhtcSL4VY74Q2yNwetVYSKmUGHuk6xX7a2tNoVk2g2zdaAfX6u7x3CDbFYsoNpwT2zGYJK2",
  "key5": "5N4TMshsjK7Z3pxptQ8fcZ2QBQ5BGv9WcdtmMgi3iCa5hE2pNaAWk6cGrzBW5tbWrSwokHSMNGiZq8CvY3wpexEU",
  "key6": "4ryvgSs74QR55BQp7gP6rwkSaRTCuCd8LLCJv3857BaqPk8Kv5wQtYbYmAZ2eSjz95x4gr6dH69cpwQa6KuUBMdi",
  "key7": "5Vo5bz4dWrai1A7RMdxEFAMxkUvBK36o7HZrYq5voPCNuzivGdKUaUX7XKf3PeSqjzGM1RUpyneFDS1m4KmzLreT",
  "key8": "rown6n6U9K4DBqEx5QNDqojr4bZxfp248jkBmQwnQKYrntKSr6K8kQRJ7kTsC4XCNyJFjmUxSxxM1p4QmiRw5nE",
  "key9": "51MXHJGhDaqSAruENkDk7RYwGmfHbKG8gFJ5e6XsfToJd38J62n15rKU9rv2emx9tKPf2jtwGkbHH18ZRPcFR5i4",
  "key10": "TFQx7piRXf7ga4WYa4VcYhze45QJz7CpZMPM8m5EuJRkuB9pXWuy7Lqy9rjFxtMsoxThaztK7gkT6L1926wYPy5",
  "key11": "2GV3jGyd7FQH8X9GgydNP4dRtEoUUxvcQcmkNq1jLUsQs5dxPukBBkDzZRhSwZwP3ib5fuGcytbG9nyTdRrZFjLH",
  "key12": "4XB6wnVZE441vxpsSdJSEWLyi4mmkCcbNS39W6hKiPfQEMWH8RTZ3CGcVjWUj332mfvJQDi6BRk9Cam9B3bJ244P",
  "key13": "5gciEtqwZdbptG9osgTj9PHhrE4EyFsyF9z344G81cvddcLYcVyVp5PWN24BmfqvUQHL2BYSURd6gPN4c6vwdJCz",
  "key14": "4t2XrP3PbPc922TiEDAZL9BuVu2vToMF5tpjN3XXd4Pk7udCYcSmpA6mhzknAMdj9jaPouqaxsKmiwUzrSSf6Ft2",
  "key15": "4WhYTf6w3Mv8r634EaGpPg2fJtFMALAxLeszMcq9cJG7b6HVwBbjTtgwnatCFh4rreRnQBxiW35SRtpkRFqy4HXF",
  "key16": "2ymGk49mmLHj3gQ1xgwVCGgZ2ktp7NGUyRamkC7vUgDssjexn6ThEGw8kPkVhUfSirogznXv8zsxC2YByDaqb4SL",
  "key17": "63YppvoyE4Hv2NeEGDKTwAZrA3ZLXYsS8c9twnAGxMTGfWkGJ5iUcwDFbsaXrWNrtdrFGC9nLqfFCo3tMaaYxQ6o",
  "key18": "5FpemBTtgYe6rrMLHu8zaEMnceRiX5ukruRqTfMkBeo3nMBwvUpscAY5GNCd7uzCsgHmgqwVh2dvouFt9Dm1MxBH",
  "key19": "WK2mSg2YXWRrd8W3oajEDB6ZFxoaRwWkjzRKQokJZz3mPyVFDucfn3VGwXWK1qk2YGPTwmMqShUWXfWUXVD8tAd",
  "key20": "4K8pzeprJr7eTekTmE6EkE7FiMPPKBJZXKPrcUHasTTx66ZuEjfmTkRQwiyRdup7S3BzryhvKwR83RnSGcMCsYnA",
  "key21": "o1rK8cGVwWqKDYZqztxeTukWkL8kep48c942VxaiRyejMY8fbGQijpjrq8aSeUkpLhjXYFigXMTzq11ChaKRFHA",
  "key22": "4A41GfwBLmYkX43vKxigheECQMsd8XFCjRrmRurv45ADX6NSsZYADF57iZhBY8A31ExQujGFgSCbo9uCVZWurakj",
  "key23": "2UKCDAykAYBGm6gqLe36Vr94fa3AZS7zHD9qQukHE9w9Skkoo4ErMXQUkBmCQQnTkxGNKBcmXwNSuimPzf12A41c",
  "key24": "2UxxasZNJMXkjcs2K3ezdAzRrefzPoXJwtt9wjxNyWvDi6YVfhH8aUgXodUqstpQbNxXATAJsJm6nMs1nMhhbnMZ",
  "key25": "3gh9Ym8k5sV7yHfx2sdJE8gaEXbbGZW9MB4DZJb7Yt2TBNwWkXNr7FpbnMpPAyzaNE6JNMKi1Sa5EdXu4HE4AYKx",
  "key26": "4QDwMHZFPfmXHWJLjbu4pQtSswFDiZbtV82h9rMYVRTvWTZQ1QvkBTcUr7gvaDUxyE3DW3BpWTPd4Mi3rPCq2cj3",
  "key27": "Q8pqyrUtGgi5Dxewp5BkbhtcXPxT4iEHcFceErgsQzj1SXdfwkL4fCQvKAjdAgno3iM4HSnrv7tgGXMDZCGgNef",
  "key28": "64ZmYHTA3kdgQ2CYDQcsCyyMGJSMLnmuM3GE7JAMq1pG4JYR7dhRYKUMs69LFfkhLmJGPRMsPWLzET6dTv3RgY2e",
  "key29": "4Yc6M3tkmf8bqnKYN7nNBbmgSyk57uaHkrN4StSgg3dv5GJ6k4sMh1CNjtuF3PuqCJY2s6w3BArjdGoZtJ38q2v6"
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
