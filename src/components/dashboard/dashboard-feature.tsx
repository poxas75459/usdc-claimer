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
    "KfkB1Jb32Q4RfJyF3cyaHTCWNsqBhBpYeeqhiTag26Mc6KjFfWfhHs8BTJskBd41Qg4veR5SSUn6tPuYPpqr1NJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtCndt1oZtjmDFGQrvsejXa8Bvx4umeY1ycMWQ7AaFL9YxJ2RQsUbVjsueB7uodcQoz2Kdw6sTXz4D7jBQyvEHF",
  "key1": "4P2AYgZyhHDkyriWGFp3y6eFpcRN4aXtEyfKLSaKQoZ5oY3giZ5FMADCShifZuMCuEiwBrZpwkYA6UxSVhTeJftX",
  "key2": "4pnEHSnxvdfKeNhn83sLfkwmetvzYa3wftCfzRuBpRxtcgT93Ht9g6i92uHkgCQp5gnBwsKD2KtZcHXfmNDgR5i6",
  "key3": "5wUYKPKGWCWNCVw3Unit9kD3LkABtxCUE7V2GXpPSLVsfYTpyhWXKePFCwXtL4YFGR8RbJoxKNungY1H7CRAnjoA",
  "key4": "5cd67VgRAtmiNCU9QKxv4xT4nSFZs5HUH45x945TwttdLWhS3ZXdGwzeBGgagK8i8ma6oRdgqUTmjkQodXqMrSgH",
  "key5": "91KLZHSZBPEUNUTw4DoVcrtY1QRfoo9L33pwvdaipG2giMJNEypyqVSWd9JQ73Cr6rAZBkJnwEnUX6ejj9qB8r9",
  "key6": "64oTnmhKc2qQkpH1aqGKt3rbbeWNwq2eg4ifqLM7L2NDt1Lkkh3VWYVWrYcEVQTj3neGfhiYuZmmjTWyqbFjqRHG",
  "key7": "2tsUJt7hMAAiSBK1tRsLAEENmxjuxnB9fNbhkxWRA8pBPZU99JkSzmDbWH1Gjd9efJKZ9EaJLpqYQKJWAx1ix2X",
  "key8": "58LLRGbUP7bjAQpo2kdbzJxBLCacDoLMbujLMDDmziMwXTVhkbhxK24tQ8dxZUmfg2gKTMfWXgmZJmZZ8PntcxNY",
  "key9": "4bKihJ38izFyLuGKSQjn6A1FwhdjPSVbWTyHBdk6Ppty71reJXpQBq7C3SPd51EMUvDvPc3wtejnXHKUXtEiVibR",
  "key10": "zav835uBgv8mX7PeaC15T98t8a7zduSkj2HzjythUTeYpGFycukWzJeeiZWJanB4so1bUnkZupd8sRN9Yk7aPgA",
  "key11": "4aeZQHgAM39XuSitArEBUiHqjPdJEkmYoepTDFWxjcQZY5JXuLWnwvZ7G9FMqDRLuiZVEw4KTJDmGMubN5BoSxwH",
  "key12": "4RwmsPjQxxiep8qVS5AtfjAmqqbERS1ZoyK9jKmYz1ymNS15U7hALph6wBbeiUropT3HBTZqn3Zx2NJa9Tz38ib6",
  "key13": "2EKUsdqEHZhhGwqn4R8j8MPf5cKuf9ky3vCw1kD6ArPhdDnteczjmKj3igojo2c3uLjFLAEBCeSPfaRu3Mw5Ce7B",
  "key14": "5XPHwHiFFLoCT9tqSGFg3Yp4Gkf2wetpJjhkK2S1EUsqAPYSkbaRX2JZx51nzVrh6LCsBc4R4f6cPXfpz5UnhW66",
  "key15": "2DvkQDqgHhe2YVQUTJpZdX2Zub4h4RAXqnhiGxvX1ZpQfQcTivVPbqxWJAo7VVtfCXR1JLLFMREVqnDZk5htG4rZ",
  "key16": "2B6JqurrAkMGiSBPqCgipVuMnqR5AbXDoASdMjhiHXWjntkCMx9BkB8Arp481pAv9NiTcSB4m41M5ALWhz3ymvg2",
  "key17": "4tNZtP8o4ZTHVcYUBBYJJiDfBPSiVM151v1WScB9HQ9r8BNjHrSQgjyG3x9jys6ADMsU4hguWYeJjTsCugPsfPk9",
  "key18": "YpzFn3TnxEsUr7SVuNSkghQAnc7dH7yH5UyrCUAN4y4cDqsUUtCYzy5rz4KTUHdd6WyWM3D2ipCUMyBHurkMs5z",
  "key19": "dKpCGrUKebL4zwbTwesENQG9WdmPf9YoEqQkDDN5evVBPoC7d8Si1n1ecuMyq2kiTHEaPDeMr4BpxfsYi4cMb1v",
  "key20": "G72DfdpJFoyqjVgr6NksajGKY5ujtnrBNxNgYtpxMhLNTPuqHfvVhvzWNyRYXBax3ve8KKzcvwb3ozayX5abyMZ",
  "key21": "2REqKHQgRtyfRMHmvR3wW7pBdHrbpCc9KuDBeTs6bdSPAcVY31GUJPEnhiGt5aYD1RJpVV8Zc85pPLShhw8EapPm",
  "key22": "f8SjQnBkQtzVrNPXM6QBtJatQBmhWQkzYzaP2PX85aih3bKAHBGs3ZYHY8ooEML3WhjMrk19HH1uBgzGfX65a8i",
  "key23": "3wSMTFmZtNFXc34L9bMCu4W2QfP4j1g2bycHdKJxCeKbVdaG7kNA1PdwWcLUWgaJYu1Rdy1mQLNJBqQb7MYZhUsv",
  "key24": "25Rm3wHfFV4iFhAs4kFToyP5dAt8jda74tCYcsCGKojG6K9qohkDLm6LcuH2nvXhviCpigEjvxvYugH9w1nUaxrb",
  "key25": "5rytmcT4c9jKLcuLR82LcFxLnZcECJFLdcJcPRuNWN6GhRmWpFVYj6DLqBAKEnoPEQE4xgcdWRRC2vE62UkrK3xZ",
  "key26": "4yNF4nFnsiT7K21gom2TEhbiVUSPuoC8WRqBFFkMRwydH4PrYEAPHFZpyDybEE6RL2TSG1m4BKq5HZBiKpgSQ3r7",
  "key27": "3D9PyHu5HxHqTY8FEWbuJUh1TADsWWzUnRv4cP96b9VL4uzC84VyWHZNwkXs6e55oiZ6EhD6TXmAmT4ciYTbJuLV",
  "key28": "5wNTT8JXX86YqtQVGFF3UALyorDGzSm4wBX8jU56CSprgUiTHqutFNnUqxy1yVuoEjxe93kgfS93BsBsGpE9JvNM",
  "key29": "2jsYBzX7ToLyxexqESAR1jv1i4Knw5sQDMiuZShURNFkGQb2PWJwb12PGUa5LSma261A7qiKYFbq1yvC9rkyQpzx",
  "key30": "5Bs539JkN9Mj7chdRecviqmEAs5aPmwXREbEFkKN6ZRX54yHD9qYDHZyrBEwHotErnTHfDBGQnjWxwGEvNs1u5KB",
  "key31": "c4p2AeWt6UNbTg5eSYEhxC8mwpSvxTVcVsZjd6cU2iRctd9qujt7Kx4jxw7TaJhDtWpM5oLkewmYBKBcJoXTVxq",
  "key32": "64JSQGTpNcWfS2x3UGpd63Ej3aBcvSso1KZSAcyd3BojxaWcnzpffwJhfWadU8hpKrk6JqW34MfBEUhpHipQD6t3",
  "key33": "3uiTzJ3Z7iWrCG1R9Y7YK6QisUDibqB2v9ShRF4B4Lj3CGztjcVQBd3xApZHKEnh6VzcACDUy3EvsEp9xMq14NC8",
  "key34": "3UuoPMvBYwXb9QpWQKyeRcAz4TN5e7VkyVw7aULdPjtXuniBSKvvBoA8Gfkx5uADvNXdcC9WCecagJfX5swKxG5N",
  "key35": "AmG1mVasR19XqoeKcamHwAUNfMzwY72TpXscormhZnYKifQV71cTGogmQzFAf1q5Ebtd9GGiaPs68oQTwesqpya",
  "key36": "3CAyjZa9UU7YkEmpx2pxYRFRFs65cZ2LrRpa1LTp8CDTWgmzFGw4vLbPhP82jM8xVEqbDujDpPLX3YQpdN8UVeY7",
  "key37": "3DCGiRV9k5HKwjpRA8Qye6FMDdS3JaBp46bNrHXi6HqSdtRedZpVTh6taFrY9wit6g8kt7Hu2648TbfQVveTkn2B",
  "key38": "4Tm3SrwVeyiRjNC4fmFoncx1UsUfoC5LzdvYJvU6TGgpbxFznJ6izy6gm4AX6Jh8VbqKVipKWnFQzGnQxtQHQkEH",
  "key39": "66n6WREv3NHVUHVtofNp3YDRo1WDzFgNztqJ6BV2XQMvuKu7wvpnAqDXzh3AagFHYUYzU1fBWZUeuWyePGn6pVkL",
  "key40": "5G2DLNd144SYczPnmdxXtWmLSpRLpioMtAC7bzFkY7Pj2tVnuyFSXWCkvosqcTEyM1e25bNKtPCMYVHtRxhqGPdu",
  "key41": "QxKvRa5J5ZMbaAdJqcVUJ7qrXeygULKuHvy9YhA42s8x7zu1voaKTXSAJSrmTNMMsusjy1GYbv2AgMfLrurQgCW",
  "key42": "5gh75gd3oHjKxwuy4t43osZvyfaRGLVDohY5DWXkSZ55PdE6CunQczYAjKhHYR4af8Q5pQXQc5rT4BTb3gjrmf3F",
  "key43": "3UDQpLAKZe7W5gnrYcJk5ApuwC3pVMPkzFhs2pGntw5mpBEBQHYgKecmLqr4out4Ko7qaffPiteX19F8CxJeuAXQ",
  "key44": "fJozF73rDcvZF6GxEW2WHgJYxH1bvVvfirNaUtvYpQTq9VUm9HYmDZdgUEkW1XghNAAW3nmXU4uWDZi4NtcN7fC",
  "key45": "5fMgUGeKZph2xZ1vLGJ9Bn4stmpkpVzvpi3aaX4KK6An1YYw4Fd3nLEKT2EAMhk45sJPoXcyT5TqyozG1s8kr5o",
  "key46": "3pEusH2NGLW7tf1iYo3V79ozvsUXQ4DsDhLs33Ji3EgbptFjww5EpaNaYHCfED8hyyznv5vV58fPmgVcbGv5pCk9",
  "key47": "4XQyT8QT5anPhqyqB8yQY9wmpmTyuw8ZxnAViPCn2txkyVtH3uRRzQbyBrmeEtcdXioSwTVn3XUCqDFW8NeqWjjX",
  "key48": "d8VZLB5tXZ9vCGPUzmm1G6AAUEx2JoPCF9kZnbUdT92aN3RWydpzBp5qF1DpaJfzTaSGk4YehxVp29DcDQjYX9G"
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
