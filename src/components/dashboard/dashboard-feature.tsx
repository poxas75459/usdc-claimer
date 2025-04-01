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
    "419oP4YuT4fnXsmQMLcePp2MPwXhBUFe1tUvqvFkYz6YZMHRAgzdCVkrsawbCzdAKy7XFsn8qSUH2r2wnhWTyk7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EcPTTG7CzAdwmz3rFMWRDPqo3hGjyQ6TwY5gx44TFjvGCGL1pKnwCdv6nDsakNaLie6jpuBr2iQGYrWDs9a553q",
  "key1": "4qJCuDRFsR7iM4v1h9YSgcG9edQLxF475SkNdxKd5vNp5xMyjh9YYfGNNbB7voRQMoKM8iB3hq1AxKvwn8cihen2",
  "key2": "4nenZ6xRYjzpuuZWjKMXzrMxSNJA6WyhdzUmScXixAaXubfumSfZZusQLY4kLPhMyrQ3yr6GR8YA4gT6zbKGp52p",
  "key3": "qfBTMZUc2K8zesJfQ6DreS33goYK9zd5vCPWZBSRTbVTgeNY37jdmVTp7aP3Xm2HUYcmfbdYXwYK6aZisjPHXSC",
  "key4": "5DBSTzuiYxYhQkPtcUsKWJVZRpH9e4aMZZd6sDyRTdkr2vUhmEKm7YJw6v3E5XLsnNA3h9nbcdoxHPPL6xfx9i9v",
  "key5": "2fkVbatvu9QzjhWPqUE1z89hRqvx3izRfFQK7u8B1WscrBZF6Kw7hYiPRn16QhkLP2LRHdMXaz4WwYCKtFKkChcc",
  "key6": "3P2vMuNXhmQcuKd9krDCFvfkzwpAyKJL874HUU8ntjLWgaBTLFe4QEMQ5frYDwHNZiefUEk2c5Nv1Sy5qQaGHdj8",
  "key7": "3GR4e75awmF3St2g8XvnVfDx6LvteNerBK55t39hPrLch6roXtjTxV1stLcEgicBmtJbgUddmoZUGG1kQFnsTSK5",
  "key8": "5tkRD3KLVn6tZyKpBhKo3tUDvbHkpZ6sZd7xp2c3BySpnTrMiL64tC87beQztsZFmWnCtcgwpyWMuzWsd5RNXZYK",
  "key9": "3tnrLmtrHy8oZFqsYYRmnAPZNBQpNHXac9ftw3NkffDBt8W1sPZthDXnZrPEkRGnw3HFNCff4N6Wpq3ZPbEFYTbh",
  "key10": "63cgd4Sp298aoM9hW2KJYXCbcKgymok2jtZotJGAohNRFP9yWhmKRBaWfUcGjxix3W8ormcHP6z6baii86wj1abV",
  "key11": "4pLv7Dg239srYUBTJigEoz3D6iZan7KbzauJ88pTjs4uMWdsq9UkhjiB5yMuaYxrTBYw5qo5ttp5yfkPdx4Txg1P",
  "key12": "4ThRCncm8ZiwLhEprYmcJnasKCsvLPfREtfanCTtaQiPuMMQG1Aa5tphdNK8WEpvdXtYsHFZTBde1qoYPdWCmUf4",
  "key13": "4EMR6w6AcwJ5oAboEa36bssMhBdikDTX8semvTE2dmmMSG51Q3hAjeN89JkReFNfZwtS67V8tUtuZRhZD1GzVtXj",
  "key14": "2F7oPHDX4cb42rZYWrrUQVn55EbydRvvv13MESneU86GgDZzoTrQmRsuGciUtnB8EYpAVMWhHtoq79RGMC8W9Rpf",
  "key15": "42yqJzzHsG8ekguxLBfeAVRr9Rrh8TQhbHUsqrSTdJgLb7UiNADnar4cHNpDLTCRecnBwyQeWAgRmeEnRW4awoSg",
  "key16": "55YtKmqtvM2oUD97oJbm9XP5WKhqNpYZJLqMFAVHYH8ZtuP5z3GTkhFMPaFaEhHL2AFT96HpKfnbiGo9C6tux2LZ",
  "key17": "4CAeSktHWki1qsfZcf1XxfQXaQt8ywW9xvCyup9eAEMNxPC3mAKSNbJRD2YY8e5L7e8pE3iySian9E7dg4mtyhBs",
  "key18": "5p18R7yeHB4EbAXyvqxEqoLnLKvaPgSTgCybfZBDFB3bRZqVosSgywAayB237Y7CLP8vmDf5MkBvvAt7hFMnfvNB",
  "key19": "2Vtuincnu2TCgkXDi38y8RYgDp2kwY5gzTEMyL87hHjYJWnUjxHHt1tw2eKnuCGq8VuekjzmWSjhCt44JMuPumcK",
  "key20": "wexhSFHjvu3M7sDiDaLJRaoK1FP3BoJak914cNzsQt4CmN5cPSLEJrRUBdD6FDYHytXnGhQyBt1PVVoHvg5iai4",
  "key21": "CE7b2NXGqtw4g9KVdAozpU5MzWgY4eLsG879uEWH3ujkdiy3NjzYufLJTwVdnEWH5XoFeJh6bCkR34NGk7FLCtv",
  "key22": "3L4HKM4yRtfCq4jVDa86zcFM7PwjauDQtuGo1gUia1pYhwNEqG4yH5px4ZW4thhXFHhsgrPHZUCdjryJc6uYpzBS",
  "key23": "cNo2VkGDNQF8teF5m1FV1LrNp7aTFodj1ursNjFopPe2j8Q2Z3yF9mUSLh8hKSoKtgEtvmHUVdSWN3VqoBnnPAV",
  "key24": "3THqArbZNbH3gBYqFebm6nYqjseQz58QZKDyCRTNb9uHZV6QdEWkHQQJFqUphWJi3qbRdi5Ac1gdAhrmLb71LJaF",
  "key25": "5YAE8z7G3ufehm45EQFe9TRMf94pM1g1gEAVMrWzrNQKqwC9uc1D2SFTMPc62xp97pP8ZSjYvdFQ84LJEhJiVBTu",
  "key26": "2JHJzuwCSX1QG8hi9kZVcFV1CSrZe4PZ2aMZLUGSbJ87DamDdPy5Eo3utkfKTo4DbWYXEX59nwXhaDWiLk8Hn4is",
  "key27": "5nfZB5qbgJPJC9cG5sPncBjxxJEM7dtiMxGbgQj4W85tdxhJAZbenRQyYYRhE6xM971aZoFC6Mw916Xd8g6sYLC",
  "key28": "3ii5dFYTeKcGcXknhcodWstxrfCDy2eFDdfradiV7hJhFKTbHJYbLiey186KSLjWpD8Bba2m1gmCi7JLfA1DKCGj",
  "key29": "5o1Lqnr7kZQoEdufczypkkLgDb1QcHGTvyDT9d3oHJ53udt3w8Kf7UXRgEA44irpr7qPXnoSm8Wn2xrNkLjhmjF9",
  "key30": "5DmcZgYByMXvUrnTBSuonSn38MQGTs5nYBjr55gSwTV9Ldn299vtrDU5tYvFEtA75GGHLRzSTpmdvEDmvftPBRqj",
  "key31": "GZVdtutYf6B4xxEFrRpfscbVib1ssiRLEJQyNUx7y7B8strN3WjdtC5jnxArDY5FEuji9wh4gRpwGDxByQ98ieG",
  "key32": "5StBcHvLCNansdEofWr8LK6r3Be6LKTK9odeh1Wui3NJvvWc45zBa9fMFih2Yz4MKcSoutqBhyDWpHfN1o6hqEVL",
  "key33": "nw48WtUyovH18yRqhYBKBNGEoCcbpsxtMu5LPWMApDnYFxanHUu5P6LdFjqnycP9XopHW6jxZ2JHTmr49GdYPN5",
  "key34": "2HDjSEgMqUskV1Drdo3s93e4KQc8Ttd4nzBhYX2RisrMXBpw54ySBQJTwgwRwKyuC2MFQAjmPPcywdwgewt3Cjj4",
  "key35": "4N3i6TwZ4SeJB86sdKzVbWH6uWnQE4MtyZqcoRKxKreryrG79q39zZUH3tKdeP6FX3oSgR5jWXm1Vjbjoqxdj8f7",
  "key36": "3pveA3XYhDhBRh1uXcgTx2hgnDRjXUw4QToWqudz9Zrpi1uzfYkUXLCr1uhJvGxt8BAXinbHqz62QZWkfPbQoNro",
  "key37": "3wmE4czV3yCmBXni2cDq8wpcqe86DA8Ad8cvbXqbQBmQB8FxVx9mPiPzHymMbys1Zm7hf5BmpQvfSW86KtQodZQs",
  "key38": "5qVGzp7DCvLiN6rrHBCJrn1ccba4DcRa4HwdihiuJuou5X1w9NkKofqHZq19kWzci5dtD4qSmXugHdden1gHFYRw"
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
