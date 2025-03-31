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
    "2wWhTEPuzCKQmDpguEXueGAMxtSNYdvsKaQJ33TweCxNYe4DJKVmt6zVHpecUa18iT7y6zxAnsDsW7hi5vJFe9xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sEtRdzXCHDbBNxcJdUZLhsqNaqMBfmxugXuURV5uCgtWrhCZ2bp6RLyEKzXaee3kUXKg5zWCfD96jMCmVQMAY55",
  "key1": "65g8iX84GkDRQzoMhHHRyRsqmjxDomWMBETdFyY9a1G2xTkMsNV1UX5qjcFNnZCHRAqMGGf9cZa1QJn8Ziff8JZv",
  "key2": "3Jd83oD2ASJDU5irv96KfNvW5LpMX64awYrcWmysb26Dzzqo3Y6JRz2Qb3HsTvSPtDM3TJUVmtfiZLMP3wW2TNrM",
  "key3": "3TRhHCx4LjWrc43bVfDEm7PofEaX8QTbrMr4CjjwUvpVniEap1rdMDnCkWkpFrNhpjaHEZfMJQ9pvwnUZwsSnJE",
  "key4": "5B7bP1RsFmcVtrHfx7wCWKxkQZ6P6HJpSELFg5B9yyYQYDRiC9QbwhZYDiFoH5eqAvSWkBwarhup7NpTSWieks4t",
  "key5": "2Lz3Xaz1vzaQ7LBPLmdrkjJ8n9Bpw2Mef2fhKmygtWf18DUuU4qmKxGYeoRLzbhSyVvcy4YwA3Ceehd3KHWR4wTr",
  "key6": "4ZsHm6Y9a9fVBBsLvN4mVdTi5qLLEMEjme3hrxka9fPKG5SKfCQTUTPQG4YYUGrnVdafZX4C5ioGq27R4QD84352",
  "key7": "2Xt3Lhtw7VTDnw1ercLXtBjRMDqxmzanhYZXSXrVneMsuT4zArkDEg75cAf9P25HdHNjEEb1pzKZkWMLukbv19F2",
  "key8": "2YnJZSTkYmJRFFVeWok96fdbWP4KYVq31gHUu3Bk3Tiys2susWorKNo5xDV1axLRVF6Ef3wxPqPTSYAF5yrXdPLj",
  "key9": "4EmRVjQjPm81ZxdBVUfMeMqXziFiQenP3GB34FKN4f3Bte9SbH22RTRZw3uNpWXXBxgDSAUYAcYG5S7r74TGscqm",
  "key10": "3XK76JxBZxDo2CA1ASGmbXK47hq2oNNM2rwDTFjT85bECFa2egEX7d6yiFyTmijyhaSGjXdjkjxGtB6dydEG65kL",
  "key11": "4rN3yKzGmxaG2XXiXA5DS1LPRoXbrNbmscFztHkxNh29snVw6SgvbZgYwKDoTjLzJKTq7XzUViMBhoDHaDdPesFa",
  "key12": "5LKwgiST5A8DGZdvmrMnpbsdrXKDiXGheFtiPn31ZiytqGXpNKZNrS6hDwmQK98dCjrT4GRZccYmt9rusB6DsJai",
  "key13": "3YfFBS5GfZKgyHJCcQEBibsQwhAATDght768qFcPLHQQmdYKtBY2o6QJxKBwdzfgvn6VdVSjZsQhmvNq4EFhMM1o",
  "key14": "jqKNqmewdX8JwMiauyL339B32B5VezNcmCEeCKrYGxeJuAYcyfdjU7JEj8HyQnLdAyciwCaEuEmoRbZqiwAbZDn",
  "key15": "Mi4EwpxfQoyfqk1cMrnxhmMNytaEynmmcaJvmK83NomYYsXVbDWvuGDVSwzo6Pp3zb4RjQ5DAjmDf4tSWmpUJ65",
  "key16": "2yMoQ3mLMXZ87HcMtrHzH7YutQXNwzajwZdH3aNqyzoQ4JKHQT6r9J1YkNvxreJTh3KK8uoJcbpwSX2aaiTszEnu",
  "key17": "2ogLoQfQXYMfLf72F5KWrjGv5g934P9XgxdVYf63TzPW8X7MkGN1S6z9L3weQY6TDjev7szYGdYG9bxeS4aVHGMf",
  "key18": "3iVnYXnVrKqx1DgeVdSxRqNFUzAqpqQwfWLPibc629RpUzabafgVwJYVrrJJ4CBYNi9Bcj16LgNJd46VWm535wBy",
  "key19": "3h32inbTh9a1QUYYEd59eYdtMSiHLnfh4MgFub1czTrpnJJHS6ZDao29tUCeSYRPwgAUiSM63pppiipXpCKUb9Fz",
  "key20": "65XJRsHFSWNC8ihhjU1pon8aPMp1U9FdDETsuUKxGoRir6RjmryK7V6Ej3ws1pwLoBNe6qt8A4kivraxTvkpxPf6",
  "key21": "4z3FweHkoBXb3Fod5pCCpMvLRbLEMBvcw3BWiQ6ykLvL7pKkKX3NZz13LDXUPjMe1iFARZxFVtHijmBpXdLLcE3c",
  "key22": "5jcuFiHLeqDM4dCH5Pc3DkG6z48zvUpzjrYXLtUdawHLRV5yBZchLSddE3X8e8PEwyoFWkbToPf5HPmAHnsZHTrd",
  "key23": "38PRDh5hXjMdoRy9Wmg6jufiXbVifTJWeK2LU2Agd9no7jgFL8fzpABBuHNRfX88utLSJ4GJiQBKNXRCpePDhVp",
  "key24": "4pKoaFJgxKyj5D9Boc5TFtpRoLD6iB7BUqZUHiEJkvJZMnzKoEWG4ie4yCPWuHAVaKr42QZQkvzhSEMCA55Rk3GU",
  "key25": "64V4Zw1k3Dic4Mrq7s2V339rZTh1ka24ui7otum4Z75842ZDy9LqaeGm3unvFVjLieYERH3sinrmdhjzWmXjqHfK",
  "key26": "4grZVH1TTWAQYM3SK6C4TxnwY9zRBUn7esLJkv5KVg7tXnvy7M62cu1U3tiat2BRBMbnX4m5xjFEkDd8NRjLHfB6",
  "key27": "61cRHqASmPySQvZULhYFyhMF7r4BE6PPBqeu72Suoca91kmdfckU3o1DwvtaRDTzF4rsyUKmZDV8MHvviSRrSjzx",
  "key28": "A65ZqswpBMsVxAzKbdBvAQmxR4Jg2RkyTspvDngxbJiV63Dm3gjH3cqMsToPfPHbG1CkCWwxuTcUcpY2r6DC5e2",
  "key29": "3A4N3rsDqNdKoqEcGxrxc2o5gme1RoqyfETRS5HhAWVnJqjVpYsSv7CFzebakxfRYSCLwpNpLdfHzjMBZLTEyPzd",
  "key30": "2pPNGsGQaz81jwcC65HLq6eGbgSVikiV8C7D9CUMzyZCJym85KRkfietQ4UfarYhXB1DywJwNNoMmgaVxtfWAHbb",
  "key31": "5mpmBNesRrCogSy9nRnRXn2EkvVAb28NCWS5obPVTRkbtPDMFpGwSWSfojXih1RbUWnzDtsFig9xHaERVXvsMavZ",
  "key32": "5bStNK8naaek2TLYRMHJ1vTt4zwpKEFLyzDA1JWofTffnCmoQeTMuTFfGzWRWhTVEwThtAW2GZZS6CJmz2sbPjCZ",
  "key33": "4kqftNKLEoMhLBfvKS6R5NmxpXJkzeNW5CL4kB8AKF476SLqqa58f1dYnNXXXydh5TxdLHfBJdrcEhDTa5MWyHTw",
  "key34": "8jXm9jHrAZ5qJA5DxkvtNVVfBBZqbUrJihzcxxGmKuPD2EsDDAXxvtcfYznJVDtt8YHMUbw3c4iQVtSktYvzxp4"
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
