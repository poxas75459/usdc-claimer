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
    "MEmSuhwioW1jFVavfTnL9v68oBoYcRNtS1xP9FCMTNE5YfteP44176cZAiAkEiJSPdiAtGzsoiJNtAmFVzLMPGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YVmQ3VvBDoVRj515qGHr8hy5sCnyq5UjUAHracSp7dSyR9TzLEqUCUJpQcUJCDfY8aXHwHrrLGRXeGWPeWqGNJy",
  "key1": "piiunmPcscsxqufneTvLDqhxnFafKnZF1QuB8SQnm8DSTRRgszivfgTjn58wfW4VJ76D4cMFySHhKuwc1XjzP3P",
  "key2": "3Ykz55C33c8MFxvkJyj645ktLhjzZMDL2UtjhFkB8PWnLAgSi8ixgJPPbYUJwRvJ8CGBjsjqR4bD3B9m5hU63RQo",
  "key3": "SCJthyPbfRLof4ujz1wzeYNKzo4MrDaH3ugAySreZvwnwgPfrVpRKbmKyQgG5JtnjwbGfuPh8d6VjtbGvKyKKPW",
  "key4": "3peLAQMG9FMBkcxjcit5EeVcdh8MQWHdBZQhL6Jd1vxwkR8AApuvgjHQ9VR6tBYiF8GnJnebgLUkGsX1PBk9Fzkg",
  "key5": "5EiBYLP5D1HPvpjJf6erbiXKNCdvR1xNXfvjwH5GxKoYTnfiGGBBJbk4DCmJgNLj85tJKpg4UfwCoKufxNxwDFJ2",
  "key6": "6SNzvuaPybbRc4RBX8MamoNo757r8fRHfaSPv9YnJyBig1Y8bA7YXLUZuTWruF2jDLaPXzsgotvH8DQt65QjXBM",
  "key7": "2xrNbh4Nd3RJDsLXiLcxjPQXXB2cqoLPws88Mi5NR61f8KnjTPFSeXYnUCEm3ZN3dBNYqk2oS1spry1ffta583zE",
  "key8": "3jNjGgURnHnMhQxqtBagsv97Zx4UWthzWvdqLeaWvNG5t61w9tqCSzuQBEUQBcvXEpGtGbdBQreCveXHhXCyuaVc",
  "key9": "4yiqdCpmb6cN4u1biMJnhPDdX7EKF3Pu8P56ZpsrwbL5ebkP7TznjuFHKGk5pqLoxYQf9VXgTk4Qkxc3zQ4bmJcJ",
  "key10": "3oZR5WoGJM1gLtcxJoFCySpPQ1MgUVZ3gHuLbWPRbmhU4yjZVuK9u7VPC8wz7K1hCqfPQTXpVFWekV4CLqYXaW3L",
  "key11": "2symD1s4WqMKBZVTAZeee6Tp93mjy5uaNEhbqUbo7ZHNFAPVsawvFG8bEicoKRgHSQHpABLnQem9MrKWdNkyysAN",
  "key12": "4SrF9xnJNdCDXrb8C3JgsRcMFgHB4gnhNgWHgR89QDAWpuNYjDtWEbiNi6ezuoDBdaYwJ4CBfoB7NTihzDgHugV9",
  "key13": "4nYJRQcqY2VQri9U1abrewRmPB6VgAc4krz8q5Tdixxo8MF1S4VSREDsZyNuQWT6pbMVeboqbEoui7YBMzdowu7R",
  "key14": "JW1UkEfBQ1nx6hBapxxrJcrfhV4nZqJC6ftpkCeT3VrRWrK3VMF1iXXeaCtAUvugcU9dVpssXiQ6848vL4zj1k7",
  "key15": "3gJkhsfR4JEBTBNHE1UFqnxgM1GcUSDaEX1hg5NPRBpCfhnvnFps9W1gmFzmc3yRKyBvAbnn64CAbbiVf9Mijh9p",
  "key16": "4Vv1dxLCZP6RqF192DkeHBG9gaefSwwSr3pzaPHoYmBt5j13nQnGAdtMfZBdJoNdH1yV1A41F1W32WhCGkcXp4Rd",
  "key17": "2QeNR3AXZV2Y2vRLgrHSGvDB55rgkjZVBX1YWPmabUJUSPvie4mE4j1ix8msGxppoF6aVr6mSjd6MUSEvc42A6g7",
  "key18": "3gguGhjaQtTHqLQoKBUSz6Dd7Jdkq4KHvYoAPEm1dFJL2KierdkCY18HdYhwwzcJCZkNkXPmaMQztX2cyTruNosu",
  "key19": "2MCYnEmXaPy3Yzqnvg7LrDZW6VM3yFG4AH2NPk4fewMCi1Qd3xC3oD75DiXoLE8JRcSmsMVKcnEkqZyrBtZSw1B9",
  "key20": "3QZPvAkCyXzMxbMWhYtJurjPbfVAum4S69QazVwTZVpqAHzUfwYMGDNt7r2AnHAV25ziUD6RnAPx8hnFm4CR1imh",
  "key21": "5sq5CnAq2gwGLScvXkRHwzVmP1hkNHfpv8xsnLKkjUVLCeqw8asHYZqDsvSXwjxrxPGwnoh2VqmuniBRRn2jaB4i",
  "key22": "4RN7iujgLZe7PDGPm3pbkkKgsAQYD4kQWs3EE6bn8cXuw1c1Bj6wCP4erTK1VWcytTU2Ng9HBp52qRfshDUFtQLU",
  "key23": "2PYVoVUWhG3maKLFh5FyUggDopiLES4iiHBN3t52FYB1xP6umCftRmvSD9rKf8Gv5kNCyKGWkDW3Z7Z54MndBxat",
  "key24": "4vrTaGND4mpyy9c4ia6WWvcL8JXSRLxtB33ow3Z3tWUtPYdCCuNnkcncCkfDov3xyzbmLc3Zcoh63Y8jbtH3d5SG",
  "key25": "4ZpuyzLmfmjaH5SRA7bPPt16ye1wUwvNwRTFA6ATzoxsKpA1qytdjzdKCPfFgXNayEPFATU9uEEREmCJgPsH5FE9",
  "key26": "aRnYm6ph2Z8GsF7xnhUT61gayTB9kbWYBLfeNMJ8b7nqVqSAgKLkvgG6RJXduKjiN8enRam9JJKu39T8D1QFNVE",
  "key27": "RUxq5gBHevkcaWp3AzJy6cha4QXQu9cgE55w178y5MvNL8KJxDoNmkKGrnp6bHwBBprNCiqk8pMCvG2zp9Fuw2E",
  "key28": "4E6et4BbF2dVkMM4uCL7HzsdAjt8JRHbvyzb6MH52QXnYxU75xxXZSWmym9s14FtGr6UXgfRRLKcxVpxBuzDWWdL",
  "key29": "57sLeMwrB1zuLoQ7v9qzLTCtgPe88zbr3XAND7NwH25aRfX265LcN5Tc5i5odeQ4ZpRnsxL2b4sVnnXhdp7RTFn"
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
