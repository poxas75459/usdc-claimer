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
    "2VGb9JWh7v1tTY4fvoSEXXQUSe8y8dqWD97cRSomhhX1mNpUw2M9LcVduFNSV9hrJUNBwYZTbZDM9xX15sfXujyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cQn4eTTwfdpV7FnDSv7k7GnvXjtmdH9CN8ts5kBCNB6kVFNJWwVBNwtT3kBx8rSVoh43nAmrdtzzztUSqDrMkLG",
  "key1": "xJWMTa9koJJegnjipFyFhFNyp6TXzLpuTVqcU4eYQYUVsHZQ73xwvMbu5uCSmHipK3e6JRQsyVK3ArY9w8aic3i",
  "key2": "4bGzHNhuuphhtfCZ46BYk2dff3JNhTEryciRpR42fPs4miJzFFwK9HUF7TGptHeeBWST8docDNxz3B38QUX9igvu",
  "key3": "4nr7UQ2SvtU3DBQRRgj2PgiWNVqAV95gdTpTjzqUE3bnfg3T3rNPB78K7pmLUBgEoSKYpC4kZ1NUnrckbaKMCEUS",
  "key4": "48n7UmJSAsAsWhFYzjeyVz8Um4Gdp6XeGBLo5bFgmi539BPujGN9hKDR2bmm57ZLmbWFBUjY4fVSMuSkB9dsUur",
  "key5": "5UkYu3dPBCy8QnT1Egcq2UoRMZE7wDvpmduPfuAwp9oqqScXqukxKKZ7MJXXyFXQwaJUwiuDJsM8dkDFzxvsVWVZ",
  "key6": "JD9CqXR9GngcX8RQeq7osHXY7XwAfsNKEve1WhPppuUTyyESbNN5JcvPwphUK5tCTpJ2DSQR7Lrg1SHqc2niUq9",
  "key7": "2vxkPvygeWEbcjwB8TckH85VBNzakMfRfQ4MjxNDWGHEKQXR4tbwssHKzoas2rHJhupu6w2NJf4utU9A9Ga52mNQ",
  "key8": "pG7NpNeHUj1LfRfbwJ8tBeWEZYV779q5wtFuPvZQCuLm2sbJbs3UN6TsXK4kZg7NXnqpdqkXiHKj1LRWu7pPjZp",
  "key9": "4wM4W7S4cbHQQdPSuMUm2t7bge7bjHZyjH14aNUpPdRuz8CiUHkfsmNUzZNx4Cdijdo5ZtWXwRu4w2V3Q4ZyUhtF",
  "key10": "4AqjqWW7JWiBEyZPjQtVsWi46sTqqyAbbvuzLg81BywCQsvahKansUe2WA8z1vApap785Ph5zneaCWFvRntvFRph",
  "key11": "5mKRE7f5NUkN33CYmk7hkyVsiaNJu2namBHDnAM48Zehzx3oQmQAd8DYWuxnB521nXc4rWc8QrntLK8tWV3gJ7UE",
  "key12": "5jWFd6jcsxKoSPyp847DiRtNCLQUbsPhUUjX12t7WrLJG3wHgHu6XikHvSZVmBR3g49MFM8nEpuZYN9mZK9d9Wxd",
  "key13": "deXqLT344iizv11DtBUr8iHE6YhiNL6i6E4UWBTUT69Zk4NfNW7KKGHyzmkZNARctjLGwutTFFXq8J1usTw8Ye3",
  "key14": "2HnK7qpGLB88XZYPjZ8VhGG8hKaFYym6Sz2oZuumqhTmGRfNdmJsNLn1zBXRY6A9Z11zYtmjPWpcEW4iNSkLkh6d",
  "key15": "4ybYPdcSMWBBZ13z4hfRcYrM7RKV7bq269XKf3Rx9Jkn8vN779cbyzu2HDK2wEB6DhGZqsrSL8QNmfdkyM2zSM9V",
  "key16": "21LFB4RmwFxt8cBQ5j6eMvJ4Nk6UKkARxeX1eLzANwJPhNpMkCuabwwPLgHWU256V6gXmUQseQrAgKxWREYTzrzX",
  "key17": "4SkmFcp7Dq86XnJk34zfTp6F82xq6vfEo9BgfgvZ4sXNpeG6QyoFj53noZP4EnbXWQBD6Ymx7UPaDjX3XpJh7QpL",
  "key18": "4G1tbNrBst5j7vR7rpJB47HyETVQMHq2jULmXuPLJg3s7Sq59adjcvhXFFXfo9bUxnk2TR3a4jNMycQGpjaEpoof",
  "key19": "7MmR2brd2K6ZSL6QBe1Z8pxCZDNDoMtyyajuwB8RshAZWrx19jgNhivbta79AGQVUsusZRidgooyECYFKuYts5Z",
  "key20": "5B3dTpUZnwn2FwGb4txQdwyFZTf2BwvsKb1bAye9JyCu7go5xZUES8NBCGuJondKRDo9bcpDfXdpJLHyFYqZr745",
  "key21": "4ZAUmWsnAvJ6pqcMMVdYREg3k3H4pHW1Wo6ryZM4MtPjH7aa4pwxoXJ6ZeAnc7aYz5RUN3S5iB4qhftA6iVHCyhR",
  "key22": "26FaCWoopgCrq2HMqs7sKewANSjx2xkRxVrtKPbq34LNyoc28LSuczofM6YD8dQBCRpiWUiq3PBxrwtqzMRaW6Mp",
  "key23": "3Myp5xeTjezUKui2on4NrDqaXnzpaKuXGbkZCBgse5Cba92p5rP4JUoLponaTS9tesXWqJsiLob6YCuHnjZRxDtJ",
  "key24": "4RTakAtjh8JFbmVmKRPaQ7m3QwYZtyieEKkQaHkjp8qsTy4NqNgymNuB5SRLUb54Kt6LdmF98E5ThDaQNNiF744q",
  "key25": "3c8JqfJAn9tiQwVfm6jbtbLG3CUg5XT3pUZWZUTHYZTS2kBgNjCjKxdvpT2P1DisTaggeSzsHWdbsVgVGBJWEUbA",
  "key26": "2DLpWGvoeYnouKtXQYXWmbh4BX7x3Qhve5qC2HqbYLp6BwcNbZ4LQRZLidav1tL5rE5UexbNhqHzwsgbFZF2QxBD",
  "key27": "2fRFp643SgzRFWLe9ZJQMYp2xHikPrfcmHRQPo6js6GC1RxBpUh5UphFLj4daW7gXyS6qmruBeyfXgs3Wm2VZvgb",
  "key28": "5KFKjZoetpjPm8SngzGxVY8ZGrC2HE4pHAbcG9N9qFpUApx4kNoMvZ6HUaZ4CgkZhXRxJao4mLkYEWQmDZ7YZAdL",
  "key29": "23ZTxtLRhK16RhybWVECiSMycPrV6KFsN6eCfnMHEGxR22TLwoMt1AnLqpDDMxRusvs72FtSMcpspFe5eKuJxXqP",
  "key30": "2dit3TCfpZPj4p5xw7D9y2bVLFWr59tVHRPkW34do5QwcbbdRGhcMhALMLrL8QjUEcUncNd5gPJA8zGtGULezLHC",
  "key31": "3ddS8m6XEBEcdnZxUwbDLNmBvnY46JPMNT9KdbzBxPP1taAFuqFkniim747QG1YkyhCdmD4bGnVQeyHzXJPqAWA9",
  "key32": "23vVdsukkqoRwcRBF1bbv5vw5zB7HBrwppy4cNeNn5gGJ6N92Qq9dBmTXWiWssoNc7XBuvzPoUjymLAgpTbb6HXr",
  "key33": "5dG6uZJHW1tpxx6QBWXhXjsE2YCXEgNAZbMD281jVxGtURoYVR9YqWxe9zarLEVKK6pRa1vj5cjFtAeUEKvX5avU",
  "key34": "5dhyx8NLtDi25TuDuiiPmJu1MW7q83f5r6ZrfjmXtgmjzPwAnK7XbvNMph6aRD6JKcEw6xdpsBBhDxfxFoXXJCCk",
  "key35": "2JBnJSBCWkaPisDBtQDnmEVgh87tsdsFPV6pj5bsDzfHCgAgB7XMVinBcnButxzMacZUMTdR2ERCbRTEEWbPZEMT",
  "key36": "HDLVWmu6RgCprRnfsGT2tdFanc9FbCtkShPW9dob66XHAukuGczEm9x14kHT4LYDLfckF9thHeK9o5PWG1UAk9T",
  "key37": "QYNu4LM34x2UDudtRaPZuNGzesXZeGafWkBR1VJGzXvxzzZPdXsuVJ7AMAGerJvCpbHLag7iyQHb292dtq2QNEf"
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
