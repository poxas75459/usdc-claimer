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
    "2w9738CgCeQcbk94hY8apy6ZvZqEqKvtRQJcgi5oYbcLy3Tk6jeroG5v7nDF3R3pEvvxNNYDS6Jm8GahL4y9BMaP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4akBS1bxMiKVtacradFo2XsAufcW9fMnUe2Vw1r18ofXWtQc2azc4cBcTPC7yinu54HHztRjyQGSg9uGN2dNGdhd",
  "key1": "SPG5CoTDeMz6dVNWowbCfw7fGyYn8KS89foie5aPU914xZRSRWzP6mMJNtAYZjxCuxTFfJ4BVp6EALNZs85LiHt",
  "key2": "LtUU5RQDxWgnS2XiJka38pmW2SMnHA1BNSRRvJnWonB2p5YH7Yy2XeGKoe39k6KxbFAX27pJk9PwqqXNAiAL67e",
  "key3": "2ss3rDHxvkKLK9GNACAB9WGBFV4zYvm5BZoz8XHaGTxgdJ1TndRxgnHL64jCQ2UxAMHRzR2eqyTmca8me5Yum8Vu",
  "key4": "2jU7ApQXzxuJpD4SzQq2jQUr3TdKGQnRGqcsdGZZNkEwewenBGja2jJSYjoxXC7KXSiHFSTL3hXcyF5G2xP4r5wc",
  "key5": "2FKQbzrotRm4E4LvJVCJQViEAGFAqPBesxqNnfZ2RCMFXyAx63VY6kky95FrksbLj4N64CxeqTCDsEjQVvAcrEJ8",
  "key6": "5YD6dDZw7vsEzpUXWeFHywAnKLQHGW78mgs4vZw5n5SQTrhctzz3r8K15rhSHn26Grb7JVKNFXaxKLSMRaBrE9b8",
  "key7": "321hycGzJBzLkEm6tuAr3WKbh5yELaqi8WwKemNg4AVct72e1q5unY5bFTcf3P3Ax5Vu7tEhCkUFVmLH4BoKXowL",
  "key8": "33KwA7GaFrFWk8hj5QUTATVgsyWirYDPQRUAceFHoGwRprdMkCYnGWsR9wkWGPLXwQifwqGcA39QEgzBPWqosQ9s",
  "key9": "QHoigEvbnTkZ8jVo7XYjG58d8aQ1baMJFjwt8VJkM5aYs5jeVN643NQDixLdjyfocsLSj2xDaDLf7PgKvimdAnY",
  "key10": "5qpwpJU4bG3TnVWXVhA4DZYNE5MckNek9abXktq3JeFuNX3Ubv5taUCBvShaXjHMXXcQHkjwho6c3yvmAFVX6byY",
  "key11": "4TrzerXDgCD4H2cHYbvSz84Aj8q5L6rej9wFckQdngBhY4rkYxizXEZLvBJDhYmK8rMkEV7kxyYJYC2Q1Xecmpu3",
  "key12": "4tvmCUB2xDwdZKxY6Y6xtkLyCf54PaL297AXi49iptbpa9iNwbQbSTLSywYuCVYMGb1C4yNMhh1FozYjGDVBcfDr",
  "key13": "kR4rJtGqnN3WwzWTaMrVCgtao6H4rabXt4XN3sTKJ6dnBJWcKGRyArRBMj6gWKvM8Gj3v9d1CkbgYZZT1DdDxP1",
  "key14": "3RPFSG9Yiwr4p2JFtbSFWLFNhJDmWTYGbkuCdrsUdwmFBKorrdeo6v2z4T1uoHYXRYDeEdSqbzEB7Xici3SdYRA7",
  "key15": "652s9TSLvu8WMMLWBxmxyiKKZZmja7cE3eaRXjw97nCDGLNtCSd1rLt1UtgGdxu8K21D3QWra62CJTrCwZzmEZuN",
  "key16": "2xBnwBx2DmzezFQPL4wzqMxiajceF5ts1fBvSdHXySYxWUSjSTDWbxmzsBm8eTrZMMjundPFTgTc57eGEdM9z7jD",
  "key17": "2ajNeCMg8qcoSaNbtsJahvuBV7p3RMbtJLcx2vtryX5fbEuzy1uEWEAHHygTv35gomsGw97mppbVqTGUPGFEbRkS",
  "key18": "5zZR3ie9JAv1qyJC38L2ffheNze5z2PijXYnHz7whqb5KKhPSbvGU96kw6TzUskBG41uw1e6gGMh9da3EMrNYUkD",
  "key19": "4n4hX4F5LkgMwYT1Wdug2DQAY9gzJMvdXknx7pjFKTjqZbMg75xSeRUbJnBTxKy8jLsq4Ev73ke8rXANoAnMejpR",
  "key20": "5Aw81oAMsM3rw16NHMFov9excTH9dV17q62etJexKxkrVBPYh3Kgf3Ygg52ioviWyLvi443dd8NhUtXFCHxPJ5YR",
  "key21": "3BQsvUFeE83RzNuVd4fBDegq1zKZfEQFBd2dLZQSirVwwYM74YhP7Hrd8i9FxrvDJdiRDbtgH7dg3Pq2UZQBKxMS",
  "key22": "4ekkKrDeQ4SHi5ihkEfgLo5XoavjcpVxnwZgwgY3hwm6jZhjzttxHb2RDofhtvkuCYj9JxNGs5nLD6GutJZHowVX",
  "key23": "2CrrNb8ffNRAY7GA7emNkp5yg4uA1g8eKHGhz9imub6re3DHPzb6J67nQGdQXw6TdAdvxvMyL4VLozeRNXwpwSAu",
  "key24": "2j8My3NMTEBYq4ByAcqNY1haheQkZEQECyea6GqQhwudZaTv7zGmUdG3Bc5Cf7QneGyiBDer6CqzQW6gKMfQ9AYz",
  "key25": "627PVRBs9AGiMbgXh4VZYLQTdLaCvSJQKowhDbDJRLAif4uzMBVbYurjTJMZK6S7uTtTQKvDig7Pwn22ZfD4sHaD",
  "key26": "4g1mzwndXx3mox6UbHWaBZgATWVoP8EPQ2LidnMtikA31rfVRMQ2i4a9mFg2fwLAwYsFBQYwwTNFj2HHEVKYnycU",
  "key27": "qvqD4gYV31QvxAmnzA4X9mJ3tb7zWPxTDkfniUytKFqRnSA8ZZ8w2zFDkakTrHBpGWkxbeih6TvB6xWj1y3YopZ",
  "key28": "3iV7y4QmKMnZyhu9D7a9UP4PFkZKLpELkKMXkGC8QoapArR83ydbXx6GNLaFNoXyAmjPwRAmFobTShdgoKhRD2zV",
  "key29": "3bssjtoAyp1jHGXi98KbNgq8GN8RVwfeHDD7C4cQwCnWmmce3Tx6SEQGhVdjwnk2LNRmby4aV3CEbphGRjHUCFBs",
  "key30": "4JG2H1Ckf3uZPkYw7Ue5dTcmBz7LvBpXrd9UdUG1NXooTF5cVSZiC4YLTawJnhZq1HeJbrqgT52fomvHxSzEFPTb",
  "key31": "yEVWua8u55cQxpsC9Ce4ZwzBGAGz2yyBNVB8GFEGHGokJSqT9ZW14PvG4Bxgwxw7FiTuJVLrxAijUCe2pTZCc4n",
  "key32": "3XYXKmzdL8Cuq3C954tHrtb3N71PxNGGZRN5ZxK74zdp7h6s5EqKxb2TysHUcTktCTBF5cDKxfpZv6mHQMfqZuqm",
  "key33": "2x9Fe6jY5wT5Not6rRAdDWCwyXyWUVmXnUZNa2MaYfFDdeXgyx96sxrioie5BLD7hDzV2n1qfh2QzQWxQXP1hAkC",
  "key34": "64fgYzACW7jpeZ37uHWaM5hinhB3bW5sK8u1567pDWC5tfTAZZDyph5uTu9uEtkizhnwCXKSX3D7nGDm4cUMD1oJ",
  "key35": "4QWUstKsD6TrmYBFHcjHDTj3pj35REnj2RpAAyKGzyfSDbneAME3QZp5i179wZbp7Wdw6NH3LytnPF6KquSyVFXf",
  "key36": "LaJBi7VczgrgyFRTcYsVgSu9NrojDQFxDEEYu38ZhRkwySr8C3BcAwH2ZfADiczZ9q1dCRTCFV9znQyaT485hMN",
  "key37": "3CgHwnzRirchqwLwmU2KFsrXfAWJBMFA6kzYejHPPYjqFBQLb4s5TF2P1jLt4pqkC4EoVzS6BGFzs5nM8UgdvNj8",
  "key38": "47zBu9V8WQsMeFjL2xkJ1jhXei7WTBs9r9Gd3WvhGy9eNajRhaQPNz4U3PjzVDRpszzdfkQvAZSLq4EXKxCipGpj",
  "key39": "34v5qDKahyKgkKdtwCmB4wFSm9kF6Y1ZR2vd9P5c12TxEFQLXrV1JrH9XJBfWQJKKCyCUmc4U8FtT7twuLaZM4Di",
  "key40": "KvQHun8XdqDqX5okzwftUUiVNeps6sx8uYM1B3YtTLG2fafrTPb143XTKZyKrDptAmbbEVHwXgYVyvcKRpTExyL",
  "key41": "2nwBVyLLwkXe7EWsAoKrTxnqyNoXehppny1gvdgaKgj8BgjjT16vx591GPkhamUspNh9RXxZk5hcFpZ7S1nqkEPt",
  "key42": "5GLaJ4EXTyuExreCPeKTj1fjmbJqBQ828DJtFxseM7GicwpQPLRcmFhfRxEv7KGLCnXCwRHy69NAQmfQ1cmY4YMY",
  "key43": "3cbsAAsizj2z5yrfirYEoDKAXpLn19ucF8ApYSgweRZ8baGTosNdi2hPXKYsQcNmhJ6Tx2WqzFPSQqFxTj7ajh8M"
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
