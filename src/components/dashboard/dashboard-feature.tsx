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
    "bwGiodbtEvYKsveh72J4zm39DvsZQQNWQvvPGBk2Yww5x41bEb7wL7UvfLKuWHEtV6i1hV5KknkQqhvBNoW7tEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3chJLGjt8Cmb5dYjfNFXX2c4iBMbHaCC1NGrcVBhvfJPZ4RHvLrrQhe5nzMoeFQ6v8dt7m5JVLyEZzx8q1mF7H",
  "key1": "4KLggqNFoFz3kaJtHo27ihLbdrmW8pLtc7z6fPpAMjbSC2vXMU54gwNxuwJBMLHPWZK4syY2c6xTqYVtuPg6zj2P",
  "key2": "3tWfsQS4rZTmnssCKGhFYGFThqVCDdpTRYscmuzwNTmypfgrsZC6CspyF4Z1hLHJ2mSHf2tRktxSDwAUFR63ftnT",
  "key3": "3agdyvNfKAt6MeTTpDD6qsC6hMrxLfi84ywSAwPba4zvvYkSx2qQn8vZxsHHWYZo4k7VifYGbEvupGv8BAU6XViH",
  "key4": "4wsaH1jia84CcQ5XrrnFsKh8vKXhEA4kvgQVbK58bHTg9FxZWaEhKgRZmP7gWhGd3yMtbKUAiRGBKF7AJbLEw6Yb",
  "key5": "3kxxt8tM2dDuEKmxC3yLBrUWg4zxUZFnhcUpMG2pmXtt8CE7Cg9ZF1SHh1FD4YuKXJNa93XQ6yRBBXo2SRiL8bsF",
  "key6": "4WBbJrko37m7pGi6xoixN64azt7xSdtmjMWPsH7eV2fznWn2gTH2KaqXYA1vSELY1efLWkfQiXGuAWMhDSPFyXD3",
  "key7": "eNu6kJqUb1GQA2oKJDBYPN8RTpuhJ9JwTd9khLjFjjtJNbUqCbi5Sm5eUjr7tWjvycWHsh7tGXwTuYmxUnH8k78",
  "key8": "243mEJrFSzPoFCdCgAPpTczWhoktU7qXTm8vRaWp7q8ThErcRFbtJxWDswkSCgGs2sJvXnUnmtPj8hB6DgqtGsZN",
  "key9": "LNADo9aUuQgYWNgVfsGzRH3RSDri1iqVi2XLN7nwLW7L2ZP6X2ic7d2riY3KzUAJ8L2grQRKqqtMWdPpEGDUCZx",
  "key10": "65Z36hFVkL7S3dqJXvsunZkRge8WCB1ZNx8vowFFMmjSZnQmavwJMw26msPZ7VtqDKzmfawjuyo4GoKYbfueeUNA",
  "key11": "35RjfbPnU7Jhe2WRcwHkQ22FFcuTcmMnAfZBxfe97BmCPBKXn6nG21Q8SypQLFYygsLpdxHC16X4PB13N5YMRW2X",
  "key12": "4DQGmhBVdDKKD1YekxAmAW7W4rvaUZQeG6x6NN8SoXNk6GXmqzUFs95NW1bvvt7XXJ3q9jmeaQrKVHo5xHhR6F2C",
  "key13": "6yyAyWyTZMv13mP24JGXecSQMwRPCMdvmhjP7KVWs4TZRaTh9uoRMfyVQSZv7c1AdgqNS7hxSrPJAXwv3aJsL7E",
  "key14": "5PGWBLLXpuYU7d7wrjvXYbLEypyT853He7hbDtcFSHBviu8k4sWcCJxMHiyUkdgyohG5RBGzZLzRPfUDTPGo4cmD",
  "key15": "4hnYb4yiDhdQmravKXCwQM8y4yiWWvpPNoUq8XAoSC2Yc2Fy4S6rCzQs3Uwt1zmc1mPGX74kxQUaxZwEKqov7ZiA",
  "key16": "4XjwvSgChrGRDJVv7ontRWQEkXx9fdNUPm4gd2Xf9otmu3n221Xzmwkj7csagoyBBw3Qs37yt2WGpYUcZv2sa5CR",
  "key17": "4qCz3s2PEKCycMQyGa9yMa36ojCvz8cQkv4q9HR1b5YZJogxpPUbZ6ooVCiLtkqFDRQHfcdwjJj1vg9kLAQmSN4k",
  "key18": "2xBt3Tk4GMhLFQSiT8rYEnDVMD1efQicA9Hm9AM3DnG2Bu3mgZG7Zx8XCSnF3eHa2DyTSgQdGXgysr1jqePUHPca",
  "key19": "2pQtD98DFKK7sB14hZEHmAotgCHX2Nju7AkkYG7dyTdJTEWL4pgTLmP34AfstbSra4DDzFheNfCs6SgghSB8RwPZ",
  "key20": "3jJgYVyvdBVpZvrxenVN9YwvBmwGCDiyvTjk1TvZsBG9ovCj2SYV7kKDNY4p338kyQSv1bfooF975t2T2uFEn5tw",
  "key21": "2oiDT8WFYR4TEBEYCprFd5JPM2eY5njejaivnVqPScusQAxbUwfwE7hvwtBLV43ct4iqKqqwSkjMosu8sppzZTCJ",
  "key22": "3uHGoCTCmcCZNv9dkwQnSYUFJKDHdiqTzhwCQPFKT9cASadJ3rM2HEg5cvuGbTWE926uHeqbSJ7UqFUPFU46cf1X",
  "key23": "5FQCbQWtuQoWshBYaE3MdruqYupLzT6VuMLGWbBBhgcpwSKn2DJzMF8TX9r3xCAfBHaLpLKvPKzzZhyQfc3ALSLC",
  "key24": "5g34FAfGKBsRoHAPFmfpF2tzdgPDZ6bZBDyGXBohPuivkbZ6UYHC8ZwJrABw8KmVhnZaaNdNMoQQVVi9PDeYXJAT",
  "key25": "3MHJs2gaw7TMo7MRPB87ojkfnXfVhqvHs4dcAboaeuUQwf3puiZB1wq4x8P9fqxHBiVozhJ2JeTLDXiMEhHAeMrH",
  "key26": "DiEVtS47S8dth8cRenGd68GapKacVTxexrM6DpuRkVtkX2AB1fdcaDwDsty1jUDsnn7v1W84RwmxeGyFm967bMt",
  "key27": "5fLP3SDJVsHchp3KrLX37R5QgQTpnxnKdYikCdh9pK9a4B66hCV9zi8fNLoqc4w2bdpaPLGP3FALwXLc6oDHjBXy",
  "key28": "jW1CzJmo6NMSL8YYjGPBCgioQFhNPCgz5Hi2PRjTNZ2pc31qMziQRc4MR8tzsqmhWQGAzjHL14FpnzrszmakcoX",
  "key29": "ve6hCPr647wDhmVHzXjPL8jWdQDt5zXnHhYm6FHCLLmLCLwBHeXBeLqr1XrKuKruvFUtZFNvufpWNJsB2wYPVPe",
  "key30": "4sFMuvXubVXdLymzRY6phQVBvvwRmthvRYru7CQoG6QHBQCJ2zJUKeKLgGNDm6c27rLf8xH1S6KUu5tYcGoPEVSi",
  "key31": "3Abihr9TyT4xyDTt8cCUhj32ho5DxH5zcaCxTsU9PfrGuYfSDaTUKV3EqfCwiueJbRbrnfVzSKLaCW3rSynEifQn",
  "key32": "4AAeUJXALWLfbjFAc6vSYQ7hjA3gTUig6fnFibDNSXAGjaXZrjb5yeasGdYJ5nvyiKuBqwBmGP3MgyaWjf7X1Wjv",
  "key33": "3yyP91fzJCFcpsExeZQteVAtWyfVDLkegm6tDws6qA7KUeivWKhD5TKg7nyksvz8QBQLjCtvZbzqDdFHvVE9kfWr"
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
