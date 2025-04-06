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
    "ibaLAnpYqLudXpgj8E5YCWWFbyymAop4PTTLNiDXYqJr88TgcaLLv565huFpDsjV8cqvVrMEuk9BCMfFXcsEzup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yffKgRmaUb5xFs1VQs974EDvd7d8UV6t6NVj4T55MNANV82WKczXRT69m2nDC2jTm4g2g45nD5Ee8cbGJvAwXdP",
  "key1": "3mtCtcUggNDdEbnw37U4MTvofQNs81iKqnawyaH9TYcVKgMvWVcCFF92YucYaPVzEWHYaMRmMfZRAmqwNevDawhd",
  "key2": "3KUAQTckAeKNDPaiq7EwbPVYAs4qc1AbKkoi85qy5dkXNFkJE2MEKt1gFrZpUvVBvzKxrmnwAvNjgAVi1hEv9ovF",
  "key3": "4J2PtfDXzz2qyTkMpQk6e75AJwGoXzsNqjYunqMpnYGtrskRp2o9azYCSy4PZA19vdFHtnNF95C4ktMCCTGiszpQ",
  "key4": "2ZiEPhHAB1hYa5b9Aw5nqU27t1YXUFcqTkK7zFtPD6A4ZUuMHSVMabaa3hEGPNMFkdtMX7n3r9NmWAszjXs2jSvu",
  "key5": "5ugjfM97JZZRE2Kn2VsyZ6g9czVxrLNiAzQwBjt47ciiNztseJkfL53orTBtG31eJZAC3wwuWxK5y9LEuJfwdP8z",
  "key6": "65eHjdAmsyprQzKD4fCJuLoq8wqV7JQr8tEkt5VxoG7gVJgqE5gihvSkAHTBdR36jJZBW2xPr7VJieWXA7ecq1ku",
  "key7": "2g1aVrMk7TQryFcg4WxaFLTwKLVgd8rsP4AQFx7CnX5QNYzgCtyJ12LaFE9xg3a8y3PxUDej8YTuQQYZB7L2Wn7z",
  "key8": "2emywF43pjgkZE5MSrSP9voTTKJ8bDVRkUZLADphUgHENJRieoLXdm2caYeiE9E5MsgXXhrhcagw18n3Wp2k22r5",
  "key9": "3CfResDD51WR4pogBLHrFeCtY3VRX8GykHqg5ZTndm3QyweWa1o5estUbJi4GvEUYfrxncdM3aVtVUfdWe32RRoS",
  "key10": "649MEuLEhXUpHmQsWsmEtvqMRSJEKKRLRgx6zRJ9hHDm7GA1hF2dcSXf8wC9iRLqJ9rUATbE6diDSi6PnJ53GY4n",
  "key11": "3ubnu8bBC4kocE8ycAJyrCUwNMxJTSf6JucrfT59L1qJ9V9HCufNZ3VFcyhiGJwScResf5Qv2QcAAo2qHH9qruop",
  "key12": "4XamK7p3FhUniHiG4Y29LTBy6vshxKAo4hyn7yEpDYRJqomD6rx3isUPdHWkgFgon7YDmR7pBBNJ2ukwBMSnMMpz",
  "key13": "4Bb8rUWxEjcyZLzqULXb9nqtHQZb8iWqrL1tnDZz4Qt2mfxRVFmvZNC1bb8f95wVk9Hn4eBfB4ZfHg1NJb6H9tHH",
  "key14": "4tYM9KWQixrw8UznnfhEjgUnEt1Wam9wHz7CBoSRTJkkF5imAo3MszS1hL4KHmUs3BdVEqmmYbg3gTcqX3FSttW5",
  "key15": "2cCiYDgkTQJa114y1iT3yButxcQrncDCtwMVbzQoKBhSHp4dnikUJHaSLBqJzGeafEYe76mEKde9dH3dGAEYEHDA",
  "key16": "v4pGQRAfpVD3iQyohC4DJc7aoNfn57tBNz61dAw7ygVRqpBewYsprP6e2MZWsZ81GTaLeKAWcwrTfaxQye2ab6w",
  "key17": "4kRmdEZcQmnrJEo82RN2wDPXPr4BATqkiPb5zebaRgaLpFCPXe9gmioJjodKs7F4yJF8UFChskiiwLSEfVfaKa1Y",
  "key18": "2TFSExdPQL7J5VUk92fCZCYtX3VV1CxZkMp6RRCbZYhqQbUt9g5xETUScohERctf1dF6R3ATdiCrKootcadqRdiK",
  "key19": "23mBeUDS1QjRK1AxismuZSyUfrFSxwZu6iq55tVju6ViMM9mNoWmj38qX9ZbwskhJnULwP7H13XqaKfV2R6Gmghd",
  "key20": "5LVTkdvuDHYrTz7kxpNpML9QWf44FtwFjqURh365qSbu12EXdC6zTFbDgFF6BxZbc9rJaqC5UaMen9WMYrMMjeGH",
  "key21": "5jVcp8xduobpHYYGsoCNxD5eVKYqxtn3gEsWFez4FYk3L2oruarFsVfWWs85SAP3BAJqcEYZBq7kPc4o4znwZ1oG",
  "key22": "hmRffcG9drRpqJNVC1nqURnGtW3wGjpYu1KQptDgL63PoHwcYz4AM4A9joZ9fbeFMAsK2itEdDF6HVZ5eyHWuSd",
  "key23": "28wrUJpMVkRCQRbW8NSVpH2ZGqthcEgNeUWW4hd7kZwweqa3FR2WzXBVyPQmPrAhXLXmSoAfFLYJ2fdNi845Y4Gy",
  "key24": "2UsEuYvpRGwV7CQp9dSztXc1v8ZptzybjHXtxEEoovNf1z5TEUwMezGSWET56nutGiXNwF3zdHKoEyTwLGgLJY7W",
  "key25": "5oRzEc92sDJR8F3WwMskvdCJiQxSChUgf9fRJkiptcteifFWthhzWZXSuBhu5aHRUjq4UmMF18Ap1xNPAzwChoEY",
  "key26": "3w393XmCXrx8USVS4e7i48C4JL3Eqkr1h3Cq7HGtymXQkQviKpNRyjN2euDrGedDkZ316afzhG6rQ5QYMCBq6cr5"
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
