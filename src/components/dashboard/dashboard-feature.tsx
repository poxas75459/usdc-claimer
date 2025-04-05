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
    "UUyKk7HPMPGJsetinxrPaRS1rCw7arLSCPdLzQ1hp8Wwv6Zg4hjKw6AohVfxuAZ8CyAFsvfqK3LyE6oyWjrFKVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kytHp4zXap9hM5tnbPfckwwzg35XzjWiFa9nxmKfjUgnyGrx1w8GMVUqAacQ1g9nzrMm7yhux4cEfCyx2FL784a",
  "key1": "3MaKRJFWCdQ5zTkPg6emjiKA8sKxRnpnzHa3FStWN8azzmXCxcbzkEfgmGrUhYKmLYYdzDAKMwaxqhqpVA67VDN6",
  "key2": "2TeFYdgF2g9oihojL7r93YzvVv9wwZHegDzgd7SFwyXaopUjpFzLzhbjwhz35LowzKwsdjXLDfC8mWDoVVpVBHQY",
  "key3": "5J9T8JVoReGXwQtzwestVKPsoTqWy2PTAdsrQSTb62CRHEU5P5qC9TUfLx5wtSjZuwXtHo7xPu8WBtftDZdFxBG1",
  "key4": "543Nu9UMsKxWoogcdEf6RqmX91ByA1JRZyHhkdeMJRvZ34cwNXWgocHVwENwuAPa1tEBzrfyARw5U9v7nMX9VoLF",
  "key5": "4jf7Qs8cTWn1E1QkY1EVqufograU4VaY3BE2Q9TsM7TTvrRKvDpgEsFVSKDLa6pqKo9ihohtLM9KCThZYHevxJ3m",
  "key6": "41FFzKGYtJ6tzFfCo9gusM1ReMUAK1kffkPwpozgdc6ShdUBCvYbCkP6yq4HWdaQ1XZJyx3fL9Txit4kvjzkSSLB",
  "key7": "2199PVBmVEASLrv6izZE4P4T5TBUV7gHo9s651KAB3F9L2Wzft3vQq9JFeQ35oqH5E5rDMfVo46wLVCFmFzD8i8t",
  "key8": "5LkDpqyM9NkDheUceph9xVudKREr8wogjaMhsGk1YAjE98t1N33LGLooDZA4oCKHndkshk9oJiux79ijxA7ZG2uu",
  "key9": "4TEwFzWLcZu1cGGkyY4TWAo9EnLEKvb8jDebjFwTe9zY9a7HTqU7juAe6x5f59GnaQ6h2RFU5ytzzCjbR1MxTeaj",
  "key10": "4jyjKQSkcBQUQxDtSPC4FJqdGVijPqvYFvrsPJRhYWtC1e9FCX7gv6mk2nzDzfYJKMaySmVB8QRMYCjAS5PfNKQR",
  "key11": "4qo7MsvqPxXX5BkGjNZCopryfxXPXQ5y1XUZbTGntjPP5vTEahYaKv3mZkKCurjCe14mtuqyw7RyAZQChGimzN1L",
  "key12": "4P2aTE1G9sNKgCv7EBqUx7JdR5JmxF17ZbHy5uF8hN5Y2HfFEaithjNTZMncfZkpMd7ocfbo5XrUDDTj6Q9Qk9Zp",
  "key13": "53NuawKCDrP8t9iS7XYKsqD7cE4ScDFkoqERfoP8CdLRBrLNVuAKKAUhh5GQyHBbmPahAA68WWm7gCEpBVtMkLHd",
  "key14": "27cxjP2hXKXD1cQGZEPUh7sJEuwkkmr8z4i2rwLi35PQjUX4NbbCakHbHccdh7saoS2otHmrNWa2jwXebhkH4B59",
  "key15": "f1vbDBgNyBRJp7RUbKT1b9qbNktr8Qa2pWN8QfeUBGWpxYqDmsViKW1cqVqkVxDgPS2ySQVDWhcYKePNWb1ZpNj",
  "key16": "tQQFRqCL3EcYVVpQqfek4u649GUxQH7PetefcQbzKzavP2dCPRC3wWBkjreVaxnx8sPVygqNTv6KAivspjPhFLp",
  "key17": "Xq7vzuwg4JDWwpeBYr1SasTpuZeoqXoFV2fLVC4GfT44smr5JvsKoem5qiqacwuHZRtYGiCpHUz2DFxckao7GqE",
  "key18": "4AgP6JgrnL7R66SbMUkX9uHC9PMa2QDxMNHcm2zVshEvTgXwmjCiXJp5B1MoUo7gGXJeNWhygmzcjhaHsySkqQR9",
  "key19": "2gSJQE7vEDxqgqLiaSr5d1y1BEnzni917mA16dXmDHCsL6KTJ7hndihREbs1QLCgo3Bgbyo4jtzQnE1joyVQwa8n",
  "key20": "3gLaooWesvi4qqhPhBn72jDNdu9hYsDhxTnhiwTQRQmRBneq3aPzXdEGjgem1feKgS4qXWgJMLuDMKMcmc7soC56",
  "key21": "3WyYSz28VdNhEwMS6pVADmfRuqoB7g8kcQogvUaJxw1EX5pwDCLfie5uaZZxMeCc8GC5mFZEQHPV47EFELu5EN9Q",
  "key22": "44tbV1YZkJA3vnF54HHpMvQxdXt3qBgoESxmtYhrC1CfEvyumFphvPhWWYajgznpcdF3x3pUP7u4ppAjPKv3b6M",
  "key23": "4teV7oEZT98ZqF91m6p6ytWDP678P8wJX1oQrBVuC5ZRM5h29Gfm6pCWp4rpP2Mpq2aGhTC7NKMJJqLj9J1i499q",
  "key24": "4YwvNkKuNNKVrEhP9bxVgrwsk7uhRivA4zjnswj7Lc22axbs3h6qWXwTVhCq2PfXq4YJFqn7uzfwh988iDiQetDL",
  "key25": "3JpVmRns28c8CnQXCyuVHq8uxNE3Ku2NFATe42Cni6tUkc3TEkbnTc4vr7hdacBgHqQSEzJaPJWcu2isZHLb5t7X",
  "key26": "2d8Khiq8gHLvW7EDAeYr6JYurNptLb72GQyPNsFmAg71aEbu25sGNtj8kwCmJt1fQuErzbkTyghPKh7gfvYsBfot",
  "key27": "3EdU7G6VxeKAqerD367X9cX5ET76oP9MEGuSqpYSzcgRR8Tbi5Abda1teoo4SXiBo57p2HKuwaefwEnMaSJ4rXRe",
  "key28": "7kJtswSwnNDQiyRruasntydvAh5RBQdYwiP1aJaMehmhSX3FAzk3dpxrQ5hMHSxLcUDaLs3z7W1Stadhfhwitmb",
  "key29": "3ynZjCNhtniaVjXaaLHfvNQdhLD2pMaRQFKyZAa5syMgVRXHanNk7oWd31LVCreLqa6uJCj7RxvmUDbKhWcMfbfE",
  "key30": "2bDHJGfnA1kCFscoFVwhFsNraHs4JPwNQt6utDNr61XK5xQntWMPZQaGVUs4gtbSM8jpWDsY3xb5CF8rXd43bxd6",
  "key31": "3y5Yi1UnvZ8dECcuoYejeVcoUoZvtMytzwZMYGQwYGZ4jPNHLD4YvnebwNt3PGWxHaKYUmaJ39R8CZ4wQug4XZP3",
  "key32": "5W4erso2xYPxyjZ6u32AZJvRjLz9PZZLCySf7DL1CgoM79UAkQLPfuGv2C2Qwg2rjCY4zzsc2uEt6qgWa8UfJaFG",
  "key33": "2tkMhKA6YGkHQMRF9XpKbdkqZ47htsTWke3pz7xYzq25Ww5ZSEARwwXepvZAMx3F5GZSAH1mWQVSPgtv2dakZ6ye",
  "key34": "3GMAoypgF4WShZsz8xHot3kpYAxhLDgjvqvMakHHJBsF862ZFjynnuEJj48WQLdAwh9xgvEthHMuNMqRg8S2nJg6",
  "key35": "28ZtwWUTqP1FQ2uXXhscBWdxjiZuTGox988tRKnQkq5674X66zWA4gzNPH5BZcTjKQk7Q4eELiBVwzmnYY33qTxZ",
  "key36": "5bTZMvEJNA2SczUmrS1nCsvQRwmoLzzp12WGV4cQE9Yxysu7Ndxmt5s4Rdpb4NcuqdqkJ3C2W7mde4fxBUBMAVVs",
  "key37": "KByWZtwpDGDCJevgsihgMw89QmYhjD87NSXjtqBxx85DxzTFR4TXeX2nEFYmE2BX7Pi7ZvL6PUi1kin1N5P6p1w",
  "key38": "3Puhw9XmGMm8VWhKzNRDhZQ4pkywdSXd2JuV5o3xH4rPYyLidpwuTHqJkdBdU5RR8VinSozYRBqumbwmXgQpWqVX",
  "key39": "4q9rH9bNz6gnjAX7LUdyGbf481sGsK1b565wDR4DZHpNmk4Qs9iiCh1EPH8U4WZkYnHHL4sjsttaU4id2XcyKnD5",
  "key40": "GtEBNPcYisJ4FfBuCxo7PSSDckfTfkWtPK1YPxAAPfVT55QNjQHLYiG6mtPvkN6FEG2cVL6Njv9WM6QgUdK4sUj",
  "key41": "4m5JNLMitkPX1hg4825dgeVxCi2YYH9DN84v5NmZSd1cTM82V3GGLMsbeuKCw7T3w1adK6wKp5zLhQLQmMVhAwYx"
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
