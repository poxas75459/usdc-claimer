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
    "2iHqWAe7HB6HVFF455of7krKVSX7ggoHBwdW3pxWqh6ywhKRbpnrTnnpMqAQQn4HR8czyfdFk5P7QDVd3qDdwX7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wM1Bx3y92ahzDn5gKCA6WbjakKHe61tuFLnN78umB5451dCzgvFfmTAqMnqR2zbfhAj1irTNs8j9j66HycPgy6J",
  "key1": "5f7Qqr2BarT4dEcWDg5NPDf7ouh4xsWDfUiVuyHoZx9RGcD3NWETFQkdnazzBukCtec4T1iFAhW1Rofk2wey8yoK",
  "key2": "2Gi5vUBpoHeSdKvnqJahdfzthir9qJKaX1N8wtTmR7UJKWjh8irWRJrou9AzVBuvuEZwmHEnu7KAdptYSagDgeb4",
  "key3": "65gFxBdFj8uvZ88WvhRrPUwLpbAt3XXBSqYCsCtKJLJaq3ynYRz58rNFLZKZAa14Qrz7jHD6DTsu1cFfooGHSwBq",
  "key4": "2CJJbgRZnjV6Q4GtMafWEYsAeT6k2yohkYQ3izXwxSmDWTs57WsWuDAwVRVvhQ9374h6U4xg2jcboD4YeRmVUpjm",
  "key5": "5JFqiopSYx8x3joTqX8HFZvnCzxYeHKJC9LQ5rutNxBAaDeGeQZWdzW31JWLgHn71BmG5jdtxbLncsX35txryW2T",
  "key6": "3MMJRkeRMvFioy4deFfL4ppMTbZmA1Tx75ZfLyATJmpAUocuS7BjhivEPRfjYKrgADd6A3hRFcXwTuKa5FqMpbkU",
  "key7": "3x4Nt99zSzKjyCaKriSeGSFwid1CKF3WC2TrViSRbU3FHHioTkP4ngCP75CLkmpizktdDuZJPiJedPsKzBqYbNZ8",
  "key8": "2bfCxbQuxF8ztk6PpPZZmdkXyp2vNoZxzuxvKP8rUjyCKCAYmTi18moHGnt8J2nMWfdTFk4wj9nwnUFCTTRBwL54",
  "key9": "2HBZVfQuzv768MdM64wxLygYsVKgqb3eGQAH76Di96WTQshsjJMm18hVG9P6uHMyvZPCV6ewsMDZqzAXBbVTs5Hn",
  "key10": "4vjZmQk3Yt8X7gZUxe2cuemvtmZtE9ZctSXXrrn82azoTYubJetUty4V8HLV4htkWCnXmRzr1t4Hhtq4oL4vE9B1",
  "key11": "5iGvgMW11bvGpbiUiaxPQ1MyWsAbjzatXiQcPTHXm1Veb7W2KtoPskoqBZLyJoapHrmQ72eHFaGU34L3ai1jzhpm",
  "key12": "3KMVu8HRMeWmB1cfNuvqoaRcGVxLxVRPiR9cx48VbM1nnZfBTdgaxZjWNmDye8e3WmQnSrmNkzx2gdacCikEkCZr",
  "key13": "5iJbkqh4qcRQHUfqWN3VUoq85m3A9XyMRpBJTZtN9uDs3pT7M6scwDXHDvyxbDEvmCERt5uZSyaKqpMGzDwjqNLH",
  "key14": "2sdEiSSaC4FsHqhkXji6EiPdaJqN6bT2sCR7R63CtgmjBTPY354CjVKguupVyg5pUfdeEiP3D79LqULubpdrg27b",
  "key15": "62NhzkW6jWmdBrjTEwrpGiSTowRxG5vNsD5NUrw7pJbRJk22njkvLWsygkDVM3xmSHgDbRsjCMhRmAVWSA7j8V8n",
  "key16": "398LnFzPvzgzs4A9w1f2zyHKhqrh8Kj5ZFVZscDXFniXb4ydYh9K4d8zUGqqz2CvfB12QcSi8Bn4n4spiGm8Guks",
  "key17": "dQ8KZUn3JxgebfjnGM9QKRBBe5Mp9ybUCaTbRE5rMqu8SVePTGinvPSqQRbHV4A1wPoV8UnzWTh7R18UFkfV2aB",
  "key18": "bXR9Z4GpQnj4n9Uk3vSRG2L7Ff1FKaRqJwwYU8tiKekj1V2nBVLyitbUhDxwyranX8oFbLc4sP4Ld4XoBZMEpWJ",
  "key19": "5E8c2qaRNKZfXgPHfisdqNkuckGbyRyoQugTdnfvEERrzrQAg63aHbfWE6SKgQcbWwbMEBVfjdXZudSi1D8XWa4k",
  "key20": "KUScDL9TpnnZVXckSt7ubZmv4gL2DZekAHMiVLgJKCH92yGGcn5ikWbV2nou7JrEFEdmWEFNUafk8u8Ghx5zmBJ",
  "key21": "49eeVuVoqywqrBmB1Thf3x42XaFMFUgnL99uEK9FHwPTHADpW1CJHS3BrwvEVim4Pj4orzgVurZQ2T6s7JJGHRQW",
  "key22": "2XCGjeAWVr9X15G1SKA8NPyoJQxB66uPHKsQeC86oS2B3TVb8SLYVgT1RcWHa83cvahkCNTAvxH2d3aWbWp7JBWF",
  "key23": "4me1rSeWmiTXHQfYNncPdvRQ85J6jNfrSJjHMKQXoanVjPDgKi3WZJPYVFa7Bk3WT9xT83fmNNsRXGsorwf5PtPz",
  "key24": "qYrZnCxahxJ7w4oKMYA5eRZnW64AQdBVFehyuxaNSc53rX9g5T19MMQS4YoUYbimjFy17p7LfVf2c3LDtx3vxnC",
  "key25": "k3KEz3KNKqJxdrDVdutrBzvMAh3Z9qh7YnCQamPciecSt1JQTvSvTmSepg1gkfVzu62xp7gWyeTkX3swBgKtjsS",
  "key26": "hvP7wsQrA5t88Wcc7LLMK4zF68gqLQBEffNajEKp7U274sYnSgQNkUTCL1HnzrpGFS2uo8n8wmkhQXPnNdKzXNZ",
  "key27": "3LoPtfdYj6TPLacuQh8woHV1Y2BGT7nZwMFpFwaKYAWB7e8LX5fxX6NN2XqtMHLT4MzPfWn9giZ4imvqMQwXhSBV",
  "key28": "5V3sRgpyiYykhMt1WVG9ZkDE5pZWGSaYqk2f39w7QQHrEmNkYW574WdFQwvr5QMGfstaZ16rT5n2WXokgCxTgcKc",
  "key29": "4jxtAsJs7vLKqnoe62XSfnuF1rcThHezbEAMizpqnruXFL1XD9c2XoZHQpeGU9hF3jyDzRcezUSrnhGzFSpeEGr9",
  "key30": "25xQS7d1pmPRdY3dfkYrDWesz6GEDpbw5xP1BPKTYr1nUp5Q3NgohQUjbyZHfTwjb7Yb53RsPGr2T1YkiDFit2cG",
  "key31": "4jkdqVho9yHBWCaeU61qt3t5ckwGKCcNqyMdfeipwDr81iAVsXGY6CJCPDrTp3bGemZzGuDBVM3HUYL6ihgzBw9h",
  "key32": "4ypK1zh1ezTfjpnbrsoXhP3UN33cw95dgaA4MfWFTVVm4NLAS8eh8M53jErsAsnt5fiEjVAYFLByuQdcdfZi8TjP",
  "key33": "5JxF1eW4Gu54PGiSBmG4CKPigQifW7bANEp4EebP88qQnnoJ8GaUWLmfQaax6rurG42Hqff9cMbpu9XaQq3wc7aa",
  "key34": "5AQThUayFvnrcJKtyfW7ichjVETDxrzVhANSap9CfJkjPLP1mWhadpsT1fkfsxM7dmpW5YLUse5v4TVX1MvZut1N",
  "key35": "4E276xWBj2agiKAqk5VE688sa4Kvq9nkJcYDn9pukESQKiwioCxjR51ACjeLNUV4pQgKt1D7SEktg2XDMf8aqJGR",
  "key36": "4sFkisPXVLoFuMejNgkfNUgkxG7pPfas6XKvVBb3pSjv4j4sGF8kyjm3kF3GzAM83ShhXTxniFGT2z6NxYWVchHA"
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
