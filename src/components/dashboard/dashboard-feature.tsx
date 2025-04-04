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
    "64Cx3mkaq1Q1ehpUDJRQ4W9joST9KkDPFxPsBTUcPC3fjzsKm3RV2UXSwLF2wWYhcVZFiHjd162WnbhqatLS6VGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27rkuv55mCQHnUWNX476CLvvuRNW4SQtpFZyWWoe7cFiKxvnCkivQm84uhVASkWHwjnv9ESWFcfgVadmXq8zD87K",
  "key1": "3SmpAo5oJcjz6HBmgZ6NHs797hwoXVxMShZBwQVB3k3jWFhQhr89bVZCyRv3CGGKHFJ7BvFGSGnJdE9k9ZGvZqNM",
  "key2": "4jjcZn9KaAmgVSxWfjyFMNeHufENoArozSa4WP7Bzwr6AAZzHMWNGmp4cRVQ8xrNAeKtcNZTs5j9BSEokwCBPWZu",
  "key3": "363sJ38ZPedkgYnR5aCN3zh1fs67eQW91c4rmEXAdk3gtvxz76QfRj9FYxC5X5eUHXew7WAHydfvYLSRWqXNSZkF",
  "key4": "34rPwPwnnEK622hexpkQS3UiM2uGnLkMYun9bLLjHhNhYa31AnB9GCXcbTxky7rdeMRNor9BzDyMhbFX8HHYxGU8",
  "key5": "2qwBni8q1BhF9cyohWCmRrTV8QfjzG8urZsTR8ayVtzPSTCykN1fyvMLgjeLUyWo9tVBpxwPM3EkEpVBYcuyTjUT",
  "key6": "hcgAeK6XJDZbmkiGUnrSFwJkvi6czxjfTM598zxyVacyn7s9oU7nVtGTm6t4fRMSPon8GWzKps6Rh8JDtc6Xotz",
  "key7": "2BqeEq31VkArro85k5Rot4KkhPovmBuY5ivvB2UrL8JJouASRPJZNpWqqpgvk6DKemmzUM2BxwMpHzv5bDDGWxGJ",
  "key8": "4eF8k5ZuywFennuJraMo4m97PY4YGSKp6eL294xTojdGPwxwNRUiSD4R7FbUWDaJ3H7Xwt6LHpRcfB488tdvZisE",
  "key9": "2ek2XHsdwhWeX2WnYe9hW1y8TvmcjF8DsLrj3LUyFbp6dvGzB25xawpzZYwdbeS2NBY66JMjbN5ztPHzwR7UnBg7",
  "key10": "44GuNDs1SLXCFNzsi8vXJgPMwTdRQmFMcK523czdCduQPZYbJNPHytkRSg99Q36W932EeXqwPUvVzRkEjH8Ywhvg",
  "key11": "2RVsqtKrh7vTDmLbSQc7HiBN9oYYQJNrKtTKz3mt1E6H3RRzpBNm9UfwCjbQvvq544x57vPzRbHRpdFM757mW972",
  "key12": "2eHhFXP835FtLH38QQWG47a2q4HmuS7JdQG3xRk9wfJRvHzk1b5nCFWxXvoek8HkiUgbhra5JQAAmVpRatm2ZykA",
  "key13": "2WQuapbjjL9DMC68hgDojCFD3GvMzXQyYoULz7kvDwyhrarnpSd4aRtqEtDTFsW2whfsJk9uen97QCQHznSQh3WQ",
  "key14": "5ySoYrWzzjjBrWWzhpZe6H4Dq7mKeAqBnr2RReUpPQyNevDDGTzU3ih456VRHXioJ4K6UrA1CPScVcYPKFrGr7x1",
  "key15": "3PtjiYoi4weDq5v3hkxg1YHj87q1WUkVd7Nvq2tPS2enMuQRFMrCKqzUC3Y3t5iCHMu8R5dfE2tPdToPN1cBGag2",
  "key16": "3eRgpHDcWmBXzgjCwH3Mjf68oCtQp5pjmJWUWmBitQTJCHsY9swN2iMG16B1Y1Q7A9Bjj6pkJmEZq5j4raraek7p",
  "key17": "3QPKFMqPNso4sNKk8sB2EenMLLMZMt2PzjCNjVj7si8RWezkvMUwLWUtzMPup6rch5D4SaTKvuggix2dADdVyAkv",
  "key18": "Hh7q4vfWBVXDAm13466tLxw451mmEqv4TkChCSwB68A9gFccDv5fGTYnuVEyzqaoKMNyd9XoXSSFPG244zZYSgp",
  "key19": "58yEP9snbUc9b3b795K88MgaNYudLPqdBYjcnNRrcLA96Red82pjyfsce6sLkfEd8bDNtC18WcUDQDnEds2cE8YK",
  "key20": "BnEUcLCnbEqy7uqvfjGR9ksrcuGKpxXW22fU3eGbH32stEs8EUJKh4BBFimzFFxuYUTubDMoDjuYpACwgrRA4Y6",
  "key21": "46c6PQPy73etPXHbbxVD9uEtGwn9TgKS5QZQYQrXfsbx7heLpwmxgMjEK9f8YAeCWG4e949iGSrMXVMUE2oPY6br",
  "key22": "XTKPzxeyTzEmJzQYtT8DhxMET3Xvm7bAEkJuj1jUzCBUi4Azu556KgM1H6wVpkQ8s52ChcBQBsyn49tC9gfDLAb",
  "key23": "1H5bfw5YanzRwVKwPdZVH9toHpev8E7eMhdfFBbb3EGiSdFDq1a6gEQJM6bNJbQSgwmzQnEjXNkRNo6m5pv75sh",
  "key24": "5hR1eqHfXkVpjmrhSYMtsXt6sSGZaXVQqdmwkaZQNTJGxrGi4xgaNhYt6a9bqEvW9FV7HQkYJV1kPSgjk3YbQd9U",
  "key25": "3VtdAeKucArnT3XgwKwSPKpTVoqaFLY5YRHVNAibBt44DJSQeq5ishmMHQrGpnKUzib7iHSCaM5Lpsc9xweMAgiw",
  "key26": "4Y1Nzm4BS8hMt6WJA4bFDGkRZ54teP4SYdD7QrEaVBLKYPLGAVqFvHBWhcdabc9X9jAHbLx7SBfjyi4eDe34Ldp",
  "key27": "5VnZzeSQqmMEoRLDFGh6FtDbP6QsvnD9bJuZvz293Qmnb9qyZi13oLhM56x4RfgvLM4T12bn8CxgAF2tmTT2hWAh",
  "key28": "3n1L2SszutBkVeJYeAktAhH9qVaLEooCZSeBqwQf4nnnEiDv9MCLh4tiXejMzNt2A24zZiRDH4ohpqsS77nW6rUm",
  "key29": "v9H4EeJDxcxYXjzm2sn4ZBMFRxSdXQ2vbAn9DVv2WqhcZycA4PnvHcGaEqssU7doYy1btP9ncDLaG5rs1F8DgFs",
  "key30": "uKQfExMYcp4z3TFqmUmAL1FSQWJt5EAkkVrnpvREfFgX2un64tTicG6XCZAkeQhsMV3BVzM2q5ZoNSTmMYdxcJh",
  "key31": "3o4iBNxRXzpKznwUmoanSwSYrmMxWFy9SQgAz1ecZW3CQK3GYqYqmQ9ivANA6gh2kKm6UcB3tCkUuzGhTBNTtgVW",
  "key32": "4QD32Yhwg3ftSnKqiE9ecuBYBjzm7KEe3rdVznoJ4WuxNy7Xm6Mm2jyS8FUqVnixTebvnFDjNHAYYo5h9mszgCSf"
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
