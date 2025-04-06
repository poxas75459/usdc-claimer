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
    "5kte2skXUhHt61iJt1ZZkNShenREWMSq6KzkWwmU8HYW4cvQEuZ1t6PBehzTG6caZgx3vvZhFcnJhZQNkVEpoLzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8LECVHCYS1Qedp89aZSfUQAhQSifcG5hMqvj6nUfXjutzj8pFbVv3SidUKyfkEekxLnT8LsLrNBZAtGncw5xTf",
  "key1": "5ARmCviJEvevqPrs5Qh7xazNRAtrJ1YCwaQY4Y9HuKgVdRAXzKAgBFrG7QuNCte9CQt8cNQMEXFQoJChuvQat32S",
  "key2": "58E7v8Vb8rVL6kxdjokoqx1XRQcz9xzqLdW4xBhmTFgkgSr3gxgDNjnTUonRztWirXaxcNgurRqQ7nkkjkws1Pat",
  "key3": "5VJnZdCNDjHKsEShqE9hCusoAuxYQYwFLqzPYJTFACMPFXnn1RDa1DrN1tBKAWMfNscvhjZ7t5h9HLqDBYmvXR1d",
  "key4": "5fRoJaWLYhxXRrGDkmnxWEziXDqi7nQaoywxmiPFKa1vYuDzMrcrT2vAif8heMtAQRJedm2ausSJXHGQBCARi9RC",
  "key5": "2zt672mPBqUi7GwckfwogxbDYUehHQWMJ3VxefkVAUzock5S9Pb4AajFQLgUFZ9gtBJZNMZ9Ynax2dDuqhqicBBu",
  "key6": "5wLAP4i6s3YzAXLEYSkJVPwfuRuLdufeMtU4GU2yugN4F146eFMX6qpFwdcjmJaFuQMQ67Q3KFUVVA15XdzTQ1QU",
  "key7": "4FjbBGq1HnQw5Yrdg9rF1rYiAuwjXrfYkb54BXkvHU7QdBQGF7QwYyzJhZEZ3qJFFBhJJG1egbDsWavCtthqkgdG",
  "key8": "3SQhiAhQZGqbMbn4dsjxE7fes9XrKxTP4j88WaMeJv82XoD9nfXMPeqog41R6iYhqkmKXVugkuKGEykyRthezvkh",
  "key9": "2fZFLftPmTf1LW5hfGW6oPEEK7cseEB2aVvPcNKCXMbgDpQkkg92TyXx9hZDQ1zqy4axa4MmjyTZCfNmssnGRe4H",
  "key10": "2ey2wNSveqbcuxTUtFFwdUd9jKB8zG4ZEXK9ZpaVWGXnRPMCebkd2kvPseGbbZGTMm5JGSp1nsP3cCiarD3X748L",
  "key11": "TZadVFX37g5Fwmd8zS6LhtbjEundGVQ14hXZEum4Wwi3Up3H13VzUUA7kX4jNXFN9hxEaex6yMGM3PmdPpCoGJt",
  "key12": "3S4SErJSSsqc2wtUsXiAaH7onF45DkXPZkNMVxnsV4QixTMvyUrGyfVqwc1YwiEoejCiKmNSsRVE1BeG1M2LLoWR",
  "key13": "4En3oVjBCxVahkjLjnjAX5yYbGQBvuSxBN7n3guboVa4hjXPTbgGYm1UB2mMz2UjGm227fNNg3WtKEHTBT2gCwMk",
  "key14": "3XXcnv9Py3ErGtotpetoatuE1Y4NzmwsANT59PeqfmsjFHtyKe1NyxJ4G4CuFtK3j1BZqxxXvh5QL1iE43prk2ev",
  "key15": "3B46HFhu99TdoXj8CDvkaH8X5PcsVPT3GwujrswxiSwuykUC2of1smzwS5RBBqYHekEUsz1ZsWJk2gcYLpn9yr8T",
  "key16": "4YBkJK9YxywgKpYPgBezMQ4DTJNpZWq68teWR9LE1To9BxTEvKF3rRxpfgyc1CEEhPNtaKnHTWxW1ureQizsSr8H",
  "key17": "7JP7XSqpqfmpP2TLFHKwuhwKunVekP7AG85M8NsJ434kpqhJ83ghCKQN7DAznQ7PqH1grqu1JK2mVAUqesobtuC",
  "key18": "3MSJ7r3okqJ6fdqosiXgbg9Zif1bVcPLM95J8nEb4q7yV9mAUbAWrqtXsBbFg3bQ8DRsJATFj2unuwkAGUHKCAqZ",
  "key19": "3B1cF9hckTJomHS7yb1Zpw2ATaZduUidjzQUozS9dURpbB9Nqn249k3HDRRF7csjtSz9YJSXrhcxCAK2oqrq7DHx",
  "key20": "2a1EjGRoRTZLXxJ8exqpWnPGT5w2XiT7E6LTapwERNMFNzxQ7XnsfdRLEQMWTB1KEKAz1vTQuCLLWm534kre3sG4",
  "key21": "2njK86TiQCLj4zDcP7EZxi5Xin9nMCB2GHoqMqHR3SUu5g4zmpz22KCePG724k3WcXtvKBEedWL3DaiJfrwuZ3fA",
  "key22": "5uQmnmpmhfUs9Ew4XNEy5vPyakLF9ZpWqUcr7on7cSm9dAZvukYYR8gpg6dEVuFDc2fzo4DDsACCRRRqARi3J9rr",
  "key23": "BLdi41SsxPaP5K5PL8cTAdFjJzA4QNhRuoRfRuHUd7zJs6uzSUBDimY5FmpC26KxvJ7UUe1c92LgZYQicikRXE8",
  "key24": "53Y2SRtAdWvf4MvB2jkxT2cGTu8be1TciLcLx9jf95aLeKGYec7KUXQ6VnrfLETegzHukA7HBaCpuX1czHgSWdVj",
  "key25": "Fp54q18DVuyxaYw1vukXrtdK6S9zq25NhCmdsXKgf8wT1xWyQBqfx4HEsDQkPKWdCDJoGhQG6vaCfiCA477gQDT",
  "key26": "2scrYZqKFUVnDi3hCugtN2Ym9e3ycJ4ig1rdMqDiGBLipqbQ2VfdNoaJ6xZnJg1t1yjUqKPi1o6yJZhUjXuKn7cU",
  "key27": "wQ9iUCzUPeAqCYEi1s5Go6RVekMEismfuCYc5jixtws1MRTYPMH9etyzkm5cYdSW9XXhQUVYVpj2Eca1ymPGQMz",
  "key28": "5RvSwFGvwkmqCySwaVqnvcUzU95VqGZhAxEnrftCTpjrUMkMjZkHh52THdfS5y9xucbXU5enRTFExPTn7KNzoXgS",
  "key29": "31EZpYS2GKYFMvvHbJWLq93CPf5UvZ6RjeKe9Mq59KJRgWUz8NqfWmAH1t4aRooef3UCVmKvXBhagQVRFjsU16H6",
  "key30": "4YNHA85iqGPc6A4iFaMhaYi4Mn2b56WV6phGzR1kEajWrYZgrSB7R1qjpeFhqjBFsaTHwPRWKeiwevXVi67AVUrp",
  "key31": "4DXwfJKgAKqcKMKdjmYQfPszv6tiLaK45Nn9KDEm1qwRnQMEuT67kuJ5T6aMkELtX2ZDz4ouzV7snLootLeKsX2Q",
  "key32": "dVko5PNfQqzygHZbH74vJRe3ajYTZc8VkqTG63SvY28GEqLDqPWs7ecXBGNsyRJKFzSQ7ShCTdXoG5Ux375SvaC",
  "key33": "669AR7DCN3iD3bRNE5PJjT1qxWEt6VxdUSH7ey1ZeXNCMGQ76qWHudfNotoWxHxWEPmqLH4w4BZEtQF9n1D5V4gn",
  "key34": "2MCCAjq8HX5LycYCNfRi7TTsmXdGwzCnZ9BjXSuYLwt4RTHEfPj8Eei9kSLGAugwTzxi92FRhESgq4uHTQLtCUWV",
  "key35": "36wGa1Pnkfq4wev39KpnZ9TKJJ1L6kXLR9TYDnAFna6M62kD92PnfeMAw9NCsWUDupAPegb4Pbe4qHvEPtPJV5bR",
  "key36": "2w2Fk8RhHN4cHXuePprjmWfPrCLeApZhTPfZcgXaoFRxnigp6ekYBoTArhL2pWLjZpTLbPtHFe8aJ8LFYxg9N893",
  "key37": "5e4XW8evGD25anZAmVNNgbpbqKRokkxSjfyyN6odnJSoFtHRNHezwjH954zYCfMypRoguaD5aLhbTyfHtXUsund2",
  "key38": "5cxFdLyTuMK8bSkA3mQDcFRcNekfmLFJjjKyMor3eXPPjviojsaQiwfa1pww4q1wEyN1z68Dcuua2G3CfVtpMXvF"
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
