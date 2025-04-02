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
    "5q9DBBveFXLAVxvFCXVrfbBfSQopQPMnSzqmnVRaRDwa3owBtBXJNPM1quRdGq5fpdKRv4hVnDLwPrDbfDi6zsge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aDokJSr9Efh7wKoZeUA3ktQdjawoXDJ5cAW7oTkRZnyQyx3oBb2zhZRHqKvNYmv5vnfgJFAXZ5zzkJQQvRouPyf",
  "key1": "BSbwD8Hy45PL4aqHaeobbyTrB1pjE7cTHAL71FZbBwYxsyARgdpdkfLMq8DxL5yKhiVdJdEQnHY1Nrc6EQ7zbuf",
  "key2": "3TDhCP7jCGERxQB6a3G2LkuTCmvGQYWuYfoGLgvgavGQ8LpMFBHgFryRR7iBkunok565xbw3tziataPVkPVRfnbB",
  "key3": "5ZCpFNS6fBbxksKfg8Q7EqZQrBUBpUqQAZuEmRfYt8avHjPs2Wt5GNRyEZRofJNjYUUSw6mK78qh5tfaa8EYaRqY",
  "key4": "32XfKVdroRThwWmCsB7UuzBYT8F2XHELvD3TFHKw3erjewpKSzi6wg7ev9K3PYnecqWrJSehwwxTjtnPC2PFgLtA",
  "key5": "65GAEwYh1MbFjxV3nrBqiZD32Mcyvz6ARuS3Lsk41k6JkniGAuE44smonSZhVFAuGYwkXZzrAnpDVoagBXVD6tT3",
  "key6": "2oaRtXmwqC9jzpQXQjWLbGdTmJHvCJgSgQSE8tjsPSxjUpAQniqXx8Kc536aWbu74KoedjZKkfNKni9CJBKry1PQ",
  "key7": "2nHhu9f9ec7UPuHFiAzP61nGWY5oL1QXCDrY7Wfjwd3hx9D3rWCMugDKyiAJpFguviPQjDdXjzv5wRbSUusGaLNG",
  "key8": "5CoCorgSpQdGk5RoSh7JK5UcG1mr7WJd4ALJtNbv1ScWe9ESKzHX7efsAHauTaXx9XwbWjbfMtVDPUCu4Ykg8R4P",
  "key9": "K7ABR4k8AaUQoLUyG9degavQABwTN7o4yV9Cmpes4jYwQgV6vtZajvN4Ypye2iKQf222Qssv9rrENhu2An84kLb",
  "key10": "5WCVPz4stsFas3QRnVXE2jdpPUrYBBPKPCn8bqWpm9ukoKRCKvGZFiU9iAfP9xkrGHuMb3QjGW3s9cMEt3rZzPEK",
  "key11": "5vtKgvrMpqAtcsh7DdCS3Er3TSiMRDFc8RmxzDd1FcHNy7Aj7yyhWfDXXxKgquG1yV45C1WFdDe2dZiM3oLfoMzz",
  "key12": "3fdFXA5CQwmCMS8ZLjqdub5BNE3Lo4Y4QcZRNTbBnT8RnbpoCJBuayaGdnJYvSYCEb7pgDHXUCsagakCEXcvfYvC",
  "key13": "5HGn4GTJ5B78MGip6Kxs94oNzRZm8Cgg7pEd1PFq7MXdWGmM4av61wzUMusvDkgwnCP2p4rFJyrSDki6o8skNNjD",
  "key14": "5MQpK6KDKrxAHai2bchjBKBUqp9nNv55DfLCjYKkiKqxscq8GZH5RVD2PxnxcSUVUAbYPxK9cJZQkCiBoak3bvu",
  "key15": "2WKdcbn7xFaY7TsCTupstHPATVzAm48mbd77JZSmua7BwZifWSRPtcTjq35RB9aonaUKBhsCQwCvq2URsgVbmcnE",
  "key16": "3ma99D2QwgfbpDeK9996ZGhCNXDvx5yKSWtdnTDJYqaH93cDMNcKvVhgGQpAEyNrQGNwhjvVQAsdmH49SAK6CreW",
  "key17": "2GNDzG2dyRiGufGcjsjQrk58ouq9vM3AdhYDgE5PPj6nY5hAB4jENXFNMez8j1PNXt9JaEaaMLYBJWikcMNq1BeS",
  "key18": "5UhVChvsCvfetGeXmCuQnwa8rjLFXZAxW1Y8E352YNpzQv5xup74m6N7r2NtdqCGgbp8A2dws3H9gypbRbyYvegX",
  "key19": "4uMtuuEx8y5hBy67T1jhVc883qfryU4UZCJyneMbuwTa8j1LyRHPVEFqRgRcg7Uauwy32zcGn9VLNDnJEyJWJkdZ",
  "key20": "5UscWZ261X4b2FAZeUDR2Y4AsWTdCaNhLuN4Tkdc9ZbrriUhn8ufdigmZxe6KBGZi3KRqiJQaT7SfokTezwJcMij",
  "key21": "3n63j3gJFfeP71jQ1JnGWgWLvxqv9wYFtgoicRvyB5mKxtZjs4AxgaWXRuEwdsY1v21C8dsg9HHRYYFvpjQVr6HM",
  "key22": "AaJD5PAPncqFoDJrRzwAwQ88rD7uLrvfWDdLg6KMW88tr2AF2t8Ud6v2oW8sYYHrdsQE5F2m97vpT62afWuoEY9",
  "key23": "5CHq2cWBLuMA36K22TjDkChMdjtbuy8HLxiax6ttxxp9YYVGoXZbFyBDqENodwt7smjp2re5rB6kdrpRZ5mvJGjo",
  "key24": "5AaijzpB6ATpcybF3JHpe7bf8cgMwJdWQvs1ZwxAop8zvvTk7MtEhRxn5dMUBL4cotZLKviBaX4Sp72PZsEG9GYX",
  "key25": "2TrnTrB45xUsoo5RMMZZRjxZ318a4ESkqCGoMQ28f21x6CEgSB8v9cY1YCAfJhtJgL9Dr6p3uJLpjfUhb2SC9Bgo",
  "key26": "2AbiDQ13w4U3bhYh4Xc5wNC2BY1MHB5xX89joDSihMhtjEya47cBK8EZrTniEeAPMTaZecCfmmL69g3R2GhAwBy",
  "key27": "633n5V6SEqNDnWZxEVdaM3Y9jP85PG8ryes8HwcoS7Jf19Rjke8U4X7ncW3dhDdtwVchnzX5SyNuJFBy1Rq1Fycr",
  "key28": "XiBMAKwG7wxeEB5hSd5H2AyeHsRgDREvNhbPcyf6zJhSHpNirdcPV6ro6od3nwpB1z2gEpTDc3jdnJ5hshg9MKx",
  "key29": "4mAwPLzQ2oesdREYnqMYmxAPWQ8b8booU3SDz4uRjFJkRUQRA879AfJ2NuAKcQVgG6BvgqK4deuqo47diQJ9yk99",
  "key30": "58T5DPnxSLyJbrYxu1Eh4qXqFvCwra8p25KmeKoXSkeGs9Vo5sRcYZWgYQfRYt8fSNtGYM4mj38vq5PLAXX1EGUj",
  "key31": "5CkpXQXjwcwZ6jHDiPKTFWWesTBWp5GgfY3PaFqRy7bZLU4tEGdCQojuRrP4DcckF2P8GP668jKQWvUjHm1oHMW7",
  "key32": "2SE5mZ5p9cd8CdJQB7J88sSCk2gDuPsXNBmZQB29FYoigjTqf3XyjAJAcPbfYqbJZ1Gmf4rXxyrtAtaUznz42fu9",
  "key33": "22bLNS42FjQwowBpatBbSKdRbBqPthGAhHGV59212maNAjz9U6u4TdWwQDWgcf3PuDqHXttf1CFeL2gv9wcnsdaN",
  "key34": "67eur3RDXg9dP2KLEVCXixmVYHZguDRCU7rzoPs5jXkwYGx4pS474nB1QpnGp5VgmHhBuHqK7KZ7CSCyVdN1ySmk",
  "key35": "R3Qqpn3YW69gf5WnoQkY1RpBEYVyfmYeTgqom9fMwMjmfTEAuaaQz1mvUo9shkWTwBMBD5Ci3NcYGHc2PvxSPuZ"
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
