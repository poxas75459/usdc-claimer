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
    "2vv5JCf7bfXde4sFXoETruKdpySXicU1pHZdP2YSaUGfGCuNEsbzxs6HWHHwSD8iKFjb8F3madiib4CXeYHojmnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wy6kcqMvW7NBwwSjCYDVCDGKW2WTktxz9awGvq7XJAq5KYYe9eS6uHePPn2ujMZNqdcSMcx4FKjwavNct4d2bHA",
  "key1": "3zwhez88RPixCxvXpJ6rjXHVxvMjrPusESh8yqJZWWUpfh69ycUhD7Vd4om4QV7GhNjvfgMvW2uAgpvB5GqXMSZq",
  "key2": "2eqgJD6dqmRGtf2ErAsgP9DpPj4vuLB1t37h1xZJS4srfrfbT1ovEteERTi2wDYMH9Rasnspey85xamz31zcyazx",
  "key3": "2HcFt7CNq3VEBZhMXkP93HKhri5wSkXrYJxxgJSpEytHYGNNRrAgRxukECVhXBLkVYHLaCCfdCqRnMD1PucUd5pR",
  "key4": "2asHds3nFeKCVJGsoTnKmbn7Zg7j6dcBzUmhqKdq3Pj1cxyo8BoBZxvfHHoxRxYw6iswjdumCxCzqcht7yuDL7UY",
  "key5": "29Dn5DVAcNNJ2DUKHnpGHVA8XU4tCWhX8gfQfErwG9q9R9yUapwk8C2WcUU8vf6auKVMdeBPxZsLdQpidTDzUDqD",
  "key6": "5a4uVTE6RKiThaqxDK4BoqUvep4ZJgRyekMz4a1qbofD1ZzbiWNmH2i423Gqu7GfBgbmbZzw53qcP8ZLXuo8azVn",
  "key7": "3tbByQQKm34pCQWkWZu8aFBV7aqvu9NASiFZHiPfZKWkTP7CixnGKXUrTKvkKdNyiy3kzcRNtTLiiQN9DSfTPhKb",
  "key8": "xHch9GaG1XjgEvhqLPcLr9EUtVSckEHq63BbLxsfDvTLEyAkRq9BD2zA2ZCDxy3c1GxcYNVLsMrZVnMKHeV115J",
  "key9": "3uAyeodbeLTgavTYHS7oYocumu7nLT9popXCeAotMxGb66HGnbranBtqx7sMdfdhWgEmGKpjNvv4MKEMxinZ4rdh",
  "key10": "2vjdEXaVyBbvY1rJoc4HR6PsnBbE7wQgAMqN7DDhNHSixDxcetzT6uwPoWyb5RNZi1QsqtUXTyPXyxuU5AsApnF8",
  "key11": "5Th1JmJ3kEH6SvwDmFeZP6ygHkcrcN7qWkLTV5aD7FBCJEJwmBxS6rEKSsvf3SoJymmGEmS6JRAsWtR4H35kBvMy",
  "key12": "2UMgageDyx6o4QrzRsg2e2MhSbd7y1s9VRcmHSTx3k2tBq5rjFotPMiHdABeiT2cdng8TzQDg74fx7fmYU2o9TwD",
  "key13": "5M5uGB8dCNQGgZvFfX4pHSK3ih4haiAFaF9L7XYKotmZxtALB17GdaKYsaHzwgXfJhRGmJxgHhK7AVQ2TnLtxmNy",
  "key14": "6ZRSNPHgwSmsRnrPt9prh4qYKoZ8BfU7mGSVWchrH1GYcNdyXK2gzg36Xfd4qWS2PzVp4kS5dnLSjb8NKosjN5J",
  "key15": "3xmTgLiEQewPKDGyRXMs99ZELBb9R39XRBd1Tkmk9MfHpfkPHwEjVVGc3FEKyZj5ohBrWwddSMsVULu94EbbKy96",
  "key16": "2t1i526xBWvAcGAHTABW4Uaq23SEg7UcSYLLtkiPG1u45opF6pNxMRpNbxkUyGJcZ8zwaz3oSSRbBQPYPUbr1YAt",
  "key17": "2baVdfi84PzofjBEihnfC3mSjU6pfHJi2ZDw7sb9WKi43fiYAukS2t1knrqfGbRV697u5AUSqzod6TCtzFNzGoh2",
  "key18": "r1hy6uoDXDJgGHa9m4P1kpF53DKWnrAoSYmBLyiGVfMWs4HSf1aSCxBKZiBuJ57ss47i3bd7T49FTVGxJep9maY",
  "key19": "5ejaFpXwquXn28pXAG9CpPbmHr4rn255Ys8ZSCo2JNZD1Ekyfc3vB7BCG9hd6uPgtEqQHiFSSAcZppVRm9jz3vDH",
  "key20": "5mSWws8WyPg11LSbeiVQ2QahFdc154nnVzcsXfMqA8goNi6BfcmppECoWfD6vQQJNJ8AxtVezibh8E2GJaaQZ8ze",
  "key21": "4X5auMfaYNB3HTUguEffmARry9ZtpWhiF6ZuCkvxea9RST1hX3qUyFdUjkdVgKrL2rcZMYP8H1Af9F9d8kC9WAq8",
  "key22": "2nH7tn7kQqkt1NoS6RMgDs3661rxu6EA62XpiTgKBdxPP9NbKqFGHseujkhabkCgU9zRYsLZqwjLbHh37gV3dpBQ",
  "key23": "5VHZ7dcFCb3SQtQUX9AtmgGNooXNH9MTyHpQHzqR23P2GKDP2KDdDk52zYi1hq1zCN7nwdCPqWRfsqjoVa1UoHpi",
  "key24": "2C7V1DXv6UnSqhMFYK3JxBUetYvR4WceoKrErZVSG7gK2kCYZoAadmc149MZLwke8teKEZTyKwMZbW8D76zSXaSA",
  "key25": "2TEYx2P5882rkZ2WxmrLwJmUf21Dbccq6Bn9Rqyd7m3koXu1gC9dUctc4R6sUgQNRMMjHyEGwst7BeQuCnnshAmZ",
  "key26": "3rPHGvyHdSvT4YT1bvz1zD29MgiLohgkN2P5i9G972M9mgQDyEDVWjK8kb25BgaudM9Rxk6E9Q7QNALqoF5FeN5t",
  "key27": "2Q8NuaX5p55VDnuYYwkHNfYPuidaGcoQVMUUSfwwNhmu1ZCMQCRE7z5tMuDbXFsgPocM3WmUhE7VSyHzS28dbYnp",
  "key28": "g6SSyiqvBp8tXAhbuZMsP9XdCWMcNgPiBAaP69cW335JPLwF5gwfG6xJRA7q6mGapSCmGcUiT1wgq42cs5irvje",
  "key29": "2q5D4LWmcji8XCTU412RwnXFVRorgM7XwNB9eToxuF6vpGar5zgdbTde5YwsMmQBv8rN9w5Px9DQkRHFRvsTYGU1",
  "key30": "4cQrymr1DDUAjY8mYZNNNMWkgGP8CH8yUQXmzUBvhwQxj5dL6R1iWXWytLAR9ipEL6RVRM2gbGxQCgrK2vn65vCB",
  "key31": "5q6bjxwdtrFuC7j5RDmtAAu8CctMVq4uwBYshp93eY2rn6qtbZ19ZXJLvWKctWonAWxpS8UznqDbSYzjghnKuMNa",
  "key32": "SMPuT59Z4U447R3DeXW4WVSmqjxXjBqGsnFtjYqcgH9C1B3qgUsmSx2RX4yYuDYrMJz44QHKL4waTHaY5qmxwJS",
  "key33": "2KJfF3oZ7NnpfdHRN85Sxf9mS35caVcKgTbwPk89ov33KSVU5p16Cw9EvS8CW6mHvLPdonk6L9ASjDVHaH3Atafh",
  "key34": "5AS748KGp9mjroT9VEmSsMEQEDgAb1wFT2LJBEUUpAMmpckxSQ2ceoDwjhXzfj4dtbKbCcpuMqWVKQY3thNf2Fon",
  "key35": "2X5dYACYNR9YkypU8EpCxYkAhVXKBMeVtkqqo967872ui2nLXHaJj1DUiUfk21ooMN9vnxaVrG957BDc8Pk8Yr84"
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
