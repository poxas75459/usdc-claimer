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
    "qW33rhnqnMzvkAjYPwkU2CYu64fweSdLafHAby6B6nh5r2Qf7K98e3tKvwWA479xYvWaSjWqgKoKoWZXGaWANVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pHMxoMu31iUgBUmSSWrE3SjJpRcXK3oj5efgzTUB8Sa8VNUf3MX4Tk9zRaqFc6XLjf5G3FpAZXnP7t2fwALDDmz",
  "key1": "5YasHQSyJVVcnJisqZNSLHsHVcBqc3cyVmSBtAJou8ESRaCzxCz7mgZEbkznb46hX5wns6N1MafDxhzpgFMjHQFj",
  "key2": "2cqQQ3XoJKRySKms3ExbgBfu5NZ5n6yBjW5zvikjLAKN4K3vdfPPvFX5DMCc6cBMyKZhasGsDN4PwuhroovEPYDR",
  "key3": "PTZU7QwztvuxtNk4gMjkqq9e9LfpVumNYK6AQEuVU8CtawXdCBkfRArEKWdETZVmpug73pa4UMXhWFf2SxpMz37",
  "key4": "4jmZqiA56SpCoZpe9cdUhHppHsTqxUW4cjnbvUDHgwnbtwyTBTzXY29VLUy3Bqu2uCou5DpHMUQEyMhRmDTNSVQv",
  "key5": "51u15SkC8vnoKZCThJzfTJ4w4wA5z5sZiZCb11jdhKvPaWNi5UVr9TUGZr8tm2rnJsxhpkKxs3cGKfqGN9HqVB89",
  "key6": "23WFHSyiMwKgs5kbajWNafVk7RQoPdLohzKfRjqr2cjQafoo3FFU74fuk9jF5kDvMpdFd1fmnWhg1wE2E8LftW8V",
  "key7": "5bBWAxgKrbA6hDzzSMF1VxBErKSywppYQH8XkiS5Gf8CKuA1KyNWzVV4KGKAajeLHxv3YdMw6kddF5MVJmeMNJLk",
  "key8": "27CPeHPGAWuX3y21nUhRjcLaWKZsJdqJLi3xVuidh2hSZu4z6BMHHxS39hea2951vLP9BBBiDroQFX2NXV2ECJNg",
  "key9": "34zW1T2v61VAHVqakMggng1DfMyvhittrTUBC6G8zqxsVDFhrFm2WF14P3Z4NArfYFeX4hVVGWrMva7QCaNW6A6d",
  "key10": "64Cynoyi8rkj2x1ux7utbFZtDVQDHgEvJrvNEhZqrzG5Vi71CA9tnC1jghENN2hgCtLv1VYyDSYuYrRrx9KLw64F",
  "key11": "4P1FW3bgjhuACGFoa5ZPfNGzp9J2L4LrBbSbnsyd1Q6aChsoSUNSCvUqFrANKkQGXh3rJHdR1V25mLJ9UbURx8tM",
  "key12": "j38Ttcjy7kn2kMW19uW1Rh3KCvuL6zwzqX28umvQ5GrtTE3hM7c36qoT8LGs47mLDBLHMrHASH6YMtRaWBrgnLr",
  "key13": "n9gw11JdL5E6fncH5q8pnjkB7gZt9GCDCiM4XCvuXxYXiq523qbuHBH5pppMRFEctHGzKaEFKbpvzVufNTjeEtK",
  "key14": "4vXubfRkgJmjcfeC2BAbnjQMPenMBDvA3N7U4V15z8yd4J27KkuWGkeCT7Y1qttdf5qSvqg4g1RgWqPskEoqECRY",
  "key15": "5y9JxkUB9bhiz9DhE1LN7Y6HzFiq9wFqpF47MEohdMBd1L2WtBknmsHystgkhm6QtnZS9W4EA6XzGLUQYP54kdLV",
  "key16": "23BocqdLfQYhqwD1VppghSFt3kd9h5MEfjxYCtBpUryYt3LKqacyNivFdhaD5gxqg6wqFgN6wUrV46o7ed3tjEEG",
  "key17": "65F986XWXcVeh3fezpLSmMjEibYCDNdmhqqZmEfTtjBHabgftbwAaqtX7mGbZBRJi1MvwmRzDTk9zk8EuKG8p5q5",
  "key18": "3r7XtJZqmhk8cHbUdo6iifbUP32hruVi9zxk8vjFi4LQyLWbbfBhW2LE7sfAKVPycXBcKFgMikBRkQLWFZUAZMXU",
  "key19": "5wXWyM2WS72n4mwycUV43qVTQTqB87Lkf7a9ASw5sNNJ2pyDMnMncZ1CatcKmFn2NGnRqt4SkmvUCv49XHjJvKve",
  "key20": "5e1sK9s3q2eACJg5NznAhksgHhobg7un4nzdD9sDArC9A5oHQaRtYUPJauLaftRB54DmUfMZNXqbQPF5zgw7wUyS",
  "key21": "MS1b8hQqkRTW9UbxCWrh969RqFT1QTJJrtqvVPcKMu9EvZyEx4PyCtwt8QUMtknMvnCEva2e9YuDm9hyn63R6Ki",
  "key22": "5bu6tYjXvsQ4HPvCFq8advV5SbTyyHmg9cRvTC6idcW2gnDFACJg2BNTstCU4sCGmsyuGvLLQQW69rxg43RcsJsZ",
  "key23": "2n5iKZXa4Ebrp3PTrdCFWQ1oo5YxxjuiCJaHY5yJ9JYs7fmiLidP37DVcKM5ZFyYa4duJsPQyCgjhgVYp6U2fKmt",
  "key24": "5s7jNoA9vhofePJRJq7cmoq9Qe1LMF2T93WGNa4GD3iv29pgPwgHEmYXnjPRfWngnCuUyCujU5Y8rzvPC4o5Y8Sh",
  "key25": "53ASKnY2kn2z6PSLKNi2BCRKdFFy1Jus8c5p4jZTU3rb1Xi8Qemfmddi3K99jB8HWW8x7c9fvFJgmuHRnjhToeVG",
  "key26": "25Y7Y61A6w9is8xi3UWS6t83cKC69Si4G7znbgcKA7N7mvHDaZqnkZU81APH2fmB75RpqMvKqSVsLkzLZmmWSoFU",
  "key27": "6FTuaVLo9rtqqUZafFMzeMvZi2U69aoQ78dz7amCbzYfMAGrAw6L6htfk1MRQazgExcapVBLi8TRpzZtCt5YsBy",
  "key28": "46a5gK63xsgLxbevUi42DcgsEDt9oGZ3tNfKFYkCgXUpBiqHtbfdSS62jsRRnEETRzj9KbLURfzARyMyrLFr5DaK",
  "key29": "a7Fqzw7CNaUP3HhTLGSHHbSLqWD1ENtC3whuCVVpf164nmXror2VDDH9gGRk6NwgeHtTrP9zNxe85TA4nJw76DH",
  "key30": "3yMRDRANkMFTJGCL9MScMVH5G7GpSfFKSVmvjdZTjkZnzQACHBSr3m72tBHC25QULPFRHzfcXJ6uUCVdZBF3wMVH",
  "key31": "pWgzo8mM816iYKqQRDSYTGFhGsoApTGtfujwLgnXTYtdyEiZUzKmYWdduUrnVw8j1nCqwfefCajadDREgdYBgN8",
  "key32": "2MUVsKZU1BRux5mJoRRc34V68JQwcjikHEARUNU8HKhP1oerWyqkZi5rUSmA8xrPGE6hzhUsfuU9gVfGwiS6KUuU",
  "key33": "4WXE4meNnucUX7HygK83QdNxYQaCKi4fxexHHcH6iLSZnB8C3CEFjBdcRwTwusxo2TpK6bzjsyrULJXzkC3wdPk1",
  "key34": "5bKmPgjwM7DhFKsBQkWMJaSM733ajAUR4MTb34PY7iCJshV1szoMzq7Y1mFmQxe3sd64EmLw6eitZJPBDZpW7bpk",
  "key35": "4846vQKrofYKjKLzXY9qt2ViPyKHpSHCFjuNdBBX5wrvvdKBmRcs9SLkLsWF695H2cxfPj9VHk3pEiQWB6BudCd7",
  "key36": "2nHgKUEQZkbrs5hgSmC2TKP27vn1z78WeWUhyXCrgK4x8S5eWWCPnYfUo1hp36KCWxzayp4TDc7Ywmu3V4WRmgQW",
  "key37": "5N9mDhVwhGfmgKzMg9tY4jkqPN4K7ayMymYJEG9CC5V7wCyDVUfCWGTgzWGLVoR9NmdaS74SsYbNvqwHjngwgaPh"
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
