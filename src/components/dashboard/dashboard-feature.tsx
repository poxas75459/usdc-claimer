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
    "3qwfNBusfUiUQzWBtwpK7kUXJchJ6zZhrczTBo2HXebA4YYLZsXQ1DfTNfnd4MvtgDpK7KCqVfKJpxu3Cz4n3Krd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36FZx6kBbDwTjL9DBbcD5UWKiW8bTcQZeoVo7d9u1noQ33P4wBXAihGUTYVkKTnC4b5rVGbPFboJa3p3qfyrSQce",
  "key1": "3XiR8nh9Xz6wT2djxGiVL8gKDNE3XSM48k9iFAs2RZ9HUriuT4ea5mY95mWjLDwgyeWjjERXAmFfwX3v4v8EXKDU",
  "key2": "FSE8m2xNgk3zNi5mHrdVNXWRxK4Q1Cbma5KFoqGs8ZAZhiSLZmAHkEWQASZKBKHup2xAbnkRB8TtLvx8oz52LUc",
  "key3": "2MeUgkLjrhi7VMZvcczGiUtGg2CTLMnXqStC6HG3vefn7tDfPuKMp6X4JgyXT9gGhqFFJNC3puw2kP1yCQpu4kQL",
  "key4": "4dSazL9U6YNSW58b9gpEjgw8QMQ9j4hazDsTSEBpEm9V9LqG9Ywpq5suag4bUvtPSRAfaBpyT6pWWjRuCz2o6JE3",
  "key5": "3HFRQdc1nSq1hiEfK8e89m7u43MFxH6P3CqG87NnK1iXy1f77mW9fGjWrnE1DvVXpauJdEWqd12S7eoerB5V1MNS",
  "key6": "Hsvp1XVLAT3dyRwoyvoPcrgKeKLgiTUwTS7mAsZBNL4W6HDUWUu6kMxbqCdGuUPELJKiQWfWvuqoaM5QPgxjsXp",
  "key7": "o2oJN9g2KixkKhSZPaZKins8PdcbPPjfDh6xMMQqwYR2WcquPeashjeVLow8FVnJ7FJDRL6i5jC7bWUocnQVSfL",
  "key8": "65gnQonVYj7t1thZBPyiRvFTkj1P8FWYQiMLpDqEc6oWsPhinxtV14eVYsheoMRdQge15D1RqRWz7mYSeVXs3qKz",
  "key9": "4MfzbMNRKKLcPyNi396VeLhmqVBEEhorLTAwFLioU2TPiM8JaPQ3Nkg7CnTbYkrcdBjqASThw6VCjdM3JUzceexg",
  "key10": "4cD7JdTsQG7wfd4t3tmr7Z2KYt8sKNYp4qdvSEvEoQFd2KaqCAMyiZYzyqB7exgvr9dUywoCvk7hBf7zkFkqwy4e",
  "key11": "4tvv3aaB8HYHZ4s2TjWmKrXuHsdWRoQDPsuiVcSUZyHbFgDfKNHy1zBhoN4xseXuTPjMbEaKcJdRZy2LaoMQ6eCH",
  "key12": "5h9N7PaCiEJ2f4ftKBXpNGsJYUvs8qnwtV9k55YnQ9pVSTkwCD4EPoArHHKJkdaSDpzEAEb6p9dZBraBa12oLnqa",
  "key13": "4o9KXLt5X8SuRepJkYsmknPPrhHB1AFy96RMh58zZMv5vPHt4UoAhnAGX3hABhPpZe92vND6erjfrvtVENUVPL6f",
  "key14": "5d3UZxRbLkopdEf4KkehEHvoePPEqWZ1XyC2tvmCz7RnntfPNs8KtRpk6aq25TLydNxwycLPLfqtCkzEQXKcycJc",
  "key15": "2GYG7NNkqNLVmvM3q31YVv9UBenNEoLNWADN29Je2MFZKvwp6QmYQmUWxrntXEmmLJswMaWsE9bEwXMEfWKRU3PU",
  "key16": "HkrcZ2p5PfosSTeK3ZDYngHAFgZARFgXdkpPGAJ8mAkDg5d31iFKjEyHbSMzWJN49vXNRpVP8ATUt6QQiDiJL1g",
  "key17": "3jCTQGjfxAN3cRBK5znH8uHu1jyFJGRbbciuohKou63zQZKv8uDkTfWZNRTxKLZBc4Y5TQdJ1Z4kUyUd1WaX29NJ",
  "key18": "5v7FbuWedWiErpnmy8TycdMG8QFBXVxmBwRmxYqBkBYKc3qfj4pEKwJ8Dy9stvKXpRZVzkDs2rS73SRKruvArpur",
  "key19": "5mxVT3weSqxL6QQKHh4qcdWAcadAwSazDsHMECS4L3px5txKkirdpwtcsVRiqCtbrfacqWgLdQnRgtQR69iZN4Vw",
  "key20": "28atfcBM3BRH47NPARyqGpB9eF9urJECJCSwg4XxDKz2BFYCPXY9r9cbq2PohEfHpPUECck73V4DkbiqGcu4BjWN",
  "key21": "3oH3LQYqgfCjnBzm4t6oFEgVypLCRHJb3jhsGSU23typQp8jtdhZTETJ82zfxQ782RExYPjFxG9yTe3FecyBRqdK",
  "key22": "2RaJEND2wtSYFNsbTFe2Xjs3wbbozSHopmeHvFGVM1zeC3NW3oURYBfQ2UpGzJiU2LWRZXhbz5q5DrM5vpVTvFBU",
  "key23": "5gmxNHTZhCYdPQAdUc9BK65oiBRfVtLSBSsjwXAGFS3YfX2yD7do1bpm4RhUoScSVshESoTWfL1wavQ6Ns8XLpnr",
  "key24": "3ow3VD74n682qa9xeHLhXBShzcHSMHSWxE8PRyGmZLjkJXeucsdxFbroSh1yEMpgFJieoE7YXzuRmX9ZgS1VZ76d",
  "key25": "3QGkmfErcLZZejW7N4akBgxD6dZmU7bC6LgNn8aE4xQ7oBrhfS1c2BVVQDH5TPtoAwq4odR8Gm5KaxtyRzQ9XCZ5"
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
