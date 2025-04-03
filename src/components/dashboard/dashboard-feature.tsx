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
    "36pkwEBUuMfLqoNWpZxZbLGApkNLbSy7b6kf3D9YQxYctMXtXmmu1jX1wAfeYjVrtu1Sa6rFuXUz2hvgJw2esopT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCfxCCA92j9RB7dckmgQUzs5h1sKZqEmfLMwa5AG7ZUTcnWaJTYxf1rpsDcTHScZr8gAqrABShiHRWBuFCW3BTw",
  "key1": "47xJTwpcYtbCpcHWjgp71RdXR4bGsAoep7vQPHWETpsipWxyEfcfKgApoB8j3Mxs3srLkfvBjRremjfuZNeQoVbW",
  "key2": "5b9ypeGD1bHLksfd3JDtdE6XYwtxsgHEziFbSHVEYjtV6ftVaaaqTCCq3BARrgBkPDYVtmVtvniAuP8FQRd7LFoZ",
  "key3": "SqRzB4b2rq2NS6JdCnijDCJYFJktsAHBrivNCFTXhTDDbdYMRnQGF2JMgQ1KHVCfmXweFzBeEBmLM4wbPtndCsn",
  "key4": "3uH9CSZdFbJYCNZv1xck4tYSiUenVRKNmfbDwsiJa5UzsmfRVdACwSjwgpQLXEGc92thi4m4CCA5Z8REb5dnua6J",
  "key5": "5TxWniaZ6zEkEtEd46HVsLatsd4bsovn9uXSHguu2AkhAPYmfBXfcg5T6c5ZDdeqrqrkG6t1coVH52eeevMShwKu",
  "key6": "233hXy1kBCMFns4mbzJhB8KP7kP6T4XzvqAuhRSBMVG2vXjWLjtzZDgWKtB3fzbo6q4EBdCBwS3L7DVBZoXZ2qi4",
  "key7": "U2dNRCLcM3iLP6T5HHxoS31JyFTfepRM1zPkc5sYmhqxboLE356nnG7aL2JYJ9hANLFKFAMVUsxydirQcScXAPk",
  "key8": "2Qf788jUKQqmussF4hYDBje8q8HfT2TqnL1TPQjQHHKHPayXy6XZzSaCuhcCgXSA8jkwdjG8meuuCNdzwrP5jebr",
  "key9": "5B7AcVMLhChjbBa7dnpcG3xGVAVXq3DmQkt9Lo17cNnLGU6GjraTPptFkUxzHQcgXkpVXxNqQfaWMzapkHEMWbwE",
  "key10": "2t8xKTUXhkhV9w4EykNNTfrP9gDDrufvdngbviP34GJh5vE6EUaF8LiNj1o1RiWGjuVKFpv6KH3oq65woCgQHrL4",
  "key11": "iP7JSx3Qur5rK52w5mayj78zwj4NGytFVcnYFweWsZYbeL77YJKyYshJo5fue2jNP9mGxc6yrr31kNbhBDmoMDy",
  "key12": "NSYXMeLCPyBMbPEECSNxu2ric9QDu6bTR8CM5gk5jqfvnq7n4kt5ifxS2viQNk6TLHAPhstLbZZCHgY9SRfk87K",
  "key13": "21YfUzJnNHmZ5nTJoxDxCB2FHWMyHaoFCPKs5NsS71zrifFfSJrk1rFzyJMdTZ8hGTvfDrfDEN1hyWdu4Y3Pbh6z",
  "key14": "2fFLYyB8Tnod7VgihDHTZW72Yyo7UnFRBedfWhRtEMT6tMEFuf7hD1mGV4653X52vcR2LE4vbgA415ZkWKNfejrN",
  "key15": "3Sji54eefnMsUFr8PYftiHd9pUCTs21ZeDwmyRLzdprJoDNDqj1JHjzabUwiX3rsLzGYGq1fW1fxZcQ26kqvWgm8",
  "key16": "2ZZVE9LUftjedFMsUPEUUqF7aAAf9QMY6316jE1KxjVFb9ZfYJdyLDgwuV6FV57J9reWpg5DgGnb7ZNnsCGcLDXf",
  "key17": "4dCMvdwBAPbGvTypP7LTCCuq9wpvr79hjK3HY29AL2qneHY2oEfpUBEpvqVERntEkjJctN3vvp7Nvkr8sBTFQBzG",
  "key18": "2t2m2nHNkpsJsJp7myr8ns4ceCh5P6dDSngX4FeDnFWKWCNjBfmpJYzLbhgvsKjWaM5TzXwNUzpj1TPMPoJ3kxji",
  "key19": "3hagF49Ce87nMej3EBmNnANhovECeh7T7sJVb24KP62BVd6hDLGk8Gp2YXXFtchSg8k7Fzg72ZrtqozTZuYcjCRQ",
  "key20": "4H6SvMHPHmnpv6Uzsvnp66j4CJgPNgyVdfbFEtq9EtWHR5pcGCNBysPFcSsiKCmb3EhgxrjCgTg1diQ12UTFsq6T",
  "key21": "4K2cz9YP9VvqcthFNQ5zoQSw3oT4cZ1b1Hm8Czbaye1TJJ1b59Qr5zo2akTKy7MznhUJk8v8JkhAf6CV612yqS8a",
  "key22": "56LM9Mx7MAWtPfcke15R2m2d7jyuu1gcZVg2s9523F7QkAfefd7LobmfB6aHGBprkvowE57o7aVox7D57QtTMoNt",
  "key23": "5eYyUfaRX7vQZiudt45Q652QtgfJSgi11Az2gxotNQBcEZ9rkfGsvJAvteJeykopF9siTEpqnZS7JYTKEA5Aokjy",
  "key24": "3zXhXWFV8AmSGUD3EmX298Tuv84kGT4V9pVbj3e1X8vWvst4UxnE5FMpAg6WkLM5EPbuxigmAkD4C5nkEBSjjxXp",
  "key25": "5d2AMadZadECvegdBc31pTB1VPKHW2erU8RdhPSst5rSYthUeCUvsiz7nfQfpwW5oqS76JVjPDbXbBrGj2vmNVde",
  "key26": "5FA7ubCcbhX4cgvkHgXv55Fm19UcAM2vL8GruFzC9U6EhZ9kD6GWkqjp841a8VoTFPBMtFghhCfGfEm1jykPGw68",
  "key27": "2iKjtYN2LvDwzZqb7BMwhibkSGjhwmUH4i14Lw1FZDRwZQ9gRWNAgsubEfvazdTmZshtaN6hswCFMQ9VF6dPo9HV",
  "key28": "3qGhF6J28Xk2vnUE5rMpLSomnK4kSnJmAAikYNvaeQKuwXePHwCRBX6bTn429ZFa51JL6MLJcmHcBmiTLHYrY8wv",
  "key29": "49NGdTzTFKgicjdXqnyVwgXJFpe9eoXFTXpjcm8Lrgv9pBicSt8Fakq4HYqNiDC3y2iAnmRRDpsD53uduTbSDvci"
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
