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
    "5qKVoXCkP3ozMptZox16zfCXNbusifJ7vegDB2dYvBQ8zavejv97JUv1CmoWtTweDT2YH3erBZ4FM4Mx7uwjJPhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xE2mHdcXGPkCRRECJ6uXmjSanr7NG48JCFGD9gyyLTm1xtjjvUzL7TqLSBCzb1a1VfrAxvhwN59iPhvm77raASM",
  "key1": "2PaPhXFUpQqR4gY3ZiGHDrbHpGu9EJ5ADr3Vnhxb9sYqrMdU9Ssmt2V4bd86vS27VWP6g8ZdmTGpVE1fKG3PAJmm",
  "key2": "3kP2X2sKAfDwF2fEetUNSUpTuW3wYgtwNxbPCoyJeirwFbxhVeJuBE6oWLYHAaxT922tUv8ShWoNsifXDnVaPUsY",
  "key3": "N7takxSwtVDhwdKqMBoHHLEB3AykjJAUjjbCwviNA9HNUa27PDQr9RqvSj2c8WBrr5Lqh22ZbmB5SK13maVzs31",
  "key4": "53wSnYjCzmzELM9u67nBtx5bPC1CXP1vH2yaZc3m2XZ4KvMfaEohnKKU5mUFc8tbWN4ReEje6EdTLLZfs8sbCxU7",
  "key5": "2eS4BHLbVYm9gbAbJ1dJbhEmF4udwmX5ipdr3STMfdbzcb6WWwMMowyrd6uMYfUrf8koje4N8cwhphTxtwe2dNDt",
  "key6": "42uVwacARHYhNv8LfZR4zM55QTcbf2xRWzRwdYx9xYX3ehUmcmyoSvPPtGMFTSacEfuodtnp6PS7FC14EQqGnWsn",
  "key7": "51r3TmkDfNh3jHiBEFsDsr8Dkytr6kAVUcYPmHdpmY4MDrUHvp6cGz6hcFSw6Xjqd7ZS39n2kCMUA3effM9GUjKH",
  "key8": "27MbdAoJMcox7dzrpF8zRqM1G9M1wd3bh5ooYZM5Vp7P18BnRU6ioRLH7E8Gyrw4HY5767gwYp5N1yMzTsicre4b",
  "key9": "2o6zRQKfauntdtdciwo8bEAFFzpv5aLUfKPatn4QbFbudUktFsFP1GpA2KkGVyJ9Qm5g2ZmKJNXHZqawuH9aTF6x",
  "key10": "2h1DdVELDPcJATurncmwqxXYvpFaiuCd6ThBpgFx8eAMtivfNW8nHUagLywz284hVpYwjifqZgY7WJVNtTcM5PYz",
  "key11": "4YR947hcLPDSJ6sAmzry6bUcry9jSPrqKcYciez86xXHefa4jHDLhkPaz9oXfTET2x3oogi4boC6QhLCkk1QcgFN",
  "key12": "3tz1ipHiqBeeytLmq5dqUmoPX8mU3SthnYgUTh8DrycYZmrkjt2k1vWjBXxUN8G3qUmxYFV63af5Gq9GT538AT78",
  "key13": "3B9dD6cre9w83KrRL7KG4Fz8RSzz8HWqd7JeAST8bRD1UrrXP7qvVinrTc4nrkajYRBV5Q9njC7qoPqWMVsBVeyv",
  "key14": "55DFbMD3ANA95aSfBZnuMhoa8vbvj7jtDoc44ywoLVUuG2BfUvNgEXBDXB3yxTtFapdf8TcvQaGyFV29HDaHD822",
  "key15": "4DbmQCbXdnxj9prKpXakpzbPK61Lt3YUhq5SCJN7QMwTFo8fgsHa2qcdP8XUY2bQKWypiWsYZbCinqVWDH1om4it",
  "key16": "2gyHYQiTpomMTb2stGY7s3vHb38BcFyTNCtWjnPQDStj2t7T2SWDH4jXRapSzHh7fQb3htr8exsRA3JpknvgAsDH",
  "key17": "b1BL5D3QLTXErGxaA3KmpVduUQ9aHVwZoKEqTwS2bB5yuaFm2xgULozY6zVsYFKQhdnWzd7JEFyk67UxTzsFmQ7",
  "key18": "5pzBZJZsS3KB8J9Ep8CYqYfEppsUeM2hvjAJKxqs7Psk7N8sMCL2g7btzXj8JkWckmZnW724XhHN5rvZqtj6fMNc",
  "key19": "4rishm4J2RB73yGt2KA5Vghkf58HXuN8pNE6y6ca9KG2bN1K6GnWeq79EQBDEDqrQjVi1SAXafEHCJi5K13cFM69",
  "key20": "4DLNFLPqbdH2QsZBbcXgNeCmE4ZA22CcbTFJbqBVkqhkdnd21zf2Exp5gixSyHPPPi4WjEeb4kNqeCB53SvrFFC6",
  "key21": "3B1gFGQEEos2RrLWAFHPS8tXznZrm7hjtKBbepD17cW2dwt5mAcGcfPkT35MTv4Sg5jCN1fKHAUfgAW7gWTci956",
  "key22": "4ukEriyBi85GL549gPCBuRoaREqs4FMSZ4frV8TS5CqDhxTXeYXCaRxQBqEeYqYmnyQKb6TQXt2s7qVaT9QxnvyB",
  "key23": "4GKLYKw5NB1BVdKJtCzyB75VHKfcw1S4C6s5ZF1Zd5Nb4ziXKKDGpDSL1NWsVQUDdDwkzLeraKtkRdToDoQBNRPU",
  "key24": "7cH6pGXHJ3yA8FiJiCuhvX6mtb92oarw6cCyHVXoHUH1F5YovcxkoZfdmFDWT3DaQGLLMCdDC5ANDAi8otrH7Cx",
  "key25": "2bPS2HJdan1NvfkUKszUzF3v5MeAP9xgkLqiCM43PwWC1fejhmRifG5qkAiibZGZFA8CHMH4qSXBo1SvzqwREASa",
  "key26": "3piGtSkgUQ98YKnH4x7JjNYgw1eAnuCS1LnNkKuQGpLHvbYFd8q3j9DCP2CsreD1pLp82tgZRKiQFe29jVSmBXSo",
  "key27": "5edyXKxRHHET2fZ1ft6NvhWmZaHd42yWfFoXXwfPU7HJiRanc2U85YsKsCffpZYEtANxSebZcCNGoE6owvx1MWHp",
  "key28": "4kBT1rytFSWKTLCJtEaxSaVjgT4bpYSLMwVci39FFsDxBmEYRVoQGL3FPTugfKngC2uh8pLUMFmx2Xu7VMNG26t3",
  "key29": "2JEKZWzZgdm8wKXPjy3tQzRpaZMGXm6EmH8tyW6MLaekucqAHjFH5dtCZd7UyLoNjrTssFpNF4A7hhBJ8aLqEEq8",
  "key30": "5ed3LAuPGS4je9o92TeujG1ZfkkAC9yFH1W1gmpJbG1maZg9e13DnFo5tDXupW6d8MxzJot6HK2ZKqkZMCviW3h4",
  "key31": "5UmQDPW5cLA1iBma2mqxBYeyUH4KHnT3AXy9EF5HNxq9ABUaSME8Zo9VKwPPqvuReRDpJPjiJjSj3gSiRoVGVVtT",
  "key32": "4iY69heLJq7Y5A2kMkb66WbEbpv4VNMjhyoJmZ7xjhWwbdR3Pp6rCRr5MfaeVUMz6Us4Xe9sZkVWWBVeA9iYLxpd",
  "key33": "3L2nVMgDNEDdKompkzWi1obAcHc98TYUcVrDkp6NgkEWPx8Sxy9R33qSBPxt3usXga7BLY28RAifPkyS6HyeFMGe",
  "key34": "25cBVktjbq4EYF2bfxvrH9P9SdrtMZ6RohNpfnfQLJSC2vMoQegV7GByZ7tZUg1Ez7T84RgFXErpE6wVUTycnupx",
  "key35": "63rfCRXrB27qw1qJCafkG7sTN3B4ie1pVJUaFT2bApjBn4TDLYREhuh2bPJSCTX4ymxAD1muiQkXweF9rn1nyNPm",
  "key36": "5R5C2dcuRueeSw5rq88VbczuBwajyN9gpMmnVe68tzRFZGjZ2GSpvneYV1k9Hiz8gRdk3UNrtwUxjJEuu2SQcUCa",
  "key37": "2yH9w99sV2JE4G9DXf3jmUXqCPuDZwYZ1TYZ6cJutNVRC3cpPKVVZB6nZMzz58BA6WfM9ST3VDWteN5g76FhG5n2",
  "key38": "3kdkb2VFhSSd4eWwF9cuoe8rrVkwfektLip3Eq77KKddTrV29EnkjS5KdFn92xMEzWmSWikY9JmEyV9uwF6o2hg2"
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
