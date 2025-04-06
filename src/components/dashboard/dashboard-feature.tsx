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
    "2k6mMkf5bbN5zy3b9oqZcxDabichY7DENqLCUkWYD8i1UdbpLUnRMopqYLv6Gefec38BuD3VBMn5Ja7mfXiEiLVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47eFxn4p2kr45JvdZqLRrQKrQDYeze5rRrGb4mDBsBvgrwEMqpDL5myVy58QrcEo4Bc2rL4jnBvvcZvE9mZULfKF",
  "key1": "5tNV7gmZ4E11cqkpHkQd3fMeDrFeh6T5JsvBUyKL1gV3Bqibq4BioypvP2dwAMmXXepxpcCgKoxmhQePJ2chCxVL",
  "key2": "26pdjPNTsrCbiAt7QAqCQ1iyRZ2u2uqVDWTYHW9m2rs1qzdGXGEpK3FnhKvtWBAv1gDFan48ijtgSc17W35eQK5E",
  "key3": "4eUSy3gbcAAz4iQf715nW7t7B1TKKDtLDkuuksrXtMaeDDVHCBFJPSbV2LCrvvscoKuz7zp36eqD2q8iyh2bk2cr",
  "key4": "5Qfo6ET11vAcVbNHPB8Z6CKCuNba5zpg2Q2LDG8DQ4dcoSYpsjzPQDrS6d7HDJcx7UPs3DRnTerZc6nFVC4r7TVi",
  "key5": "51fEtzK6RrWkXAYQ78T9PYmhWqRKg3LiCLhusrzNhZLiCucuJPRKyz7ZYsCWfhHZEZ8c3brWrvPM1QgkxAiF7BCQ",
  "key6": "5vdwUSVbbZnrZkBd69M8Mtetcc3JcBXbTr6GN43wZsSDMLHYT28Fhf2ZetBXa6Yj1YzYxz4oKyBmMaSPhLivdoCU",
  "key7": "2q3uvEEWNtM7VN3nkYgKPJTzjiwn71ajBgKKinKz7auZHQvmCvkcB6aoL1M3xtT7iFzxgMw4f8fs1hvYvpSHvVcS",
  "key8": "4VZYqWzy7tBHoWzAGVMxDKe7jbR3RfW5NCyeTAWmYYMo6TXKgTM1CR9TzBtSCFmpP4iEqgSnoiAuWy9uTTk4HtRW",
  "key9": "4nJ8uC1yrsmuhYQNLdM1nvBTAyH76AowhjYFwjJCBkkCGdjTzZa1hT4uhgWzBFRcRZrTqi9dQgoHM7epQCCHR941",
  "key10": "xvLZkh6qdd4ERdtZwrQb69mKz7fDW6McUcQtAZhbkRSWKZTWQXpZkhWvXQvpX8wWa6NPyFuPBXw4Meb88oq1Uym",
  "key11": "69ZoR2PcEwHexEyFTW7yfQvy1cStupAdGsov5JymKCvXATAxt4sgcTtvq3rsh6NzGGnYAj4gxA58L2ShBEtb8rQ",
  "key12": "5aPYHDQa9dnwCnywHaTSDrzZZut1UamQZXQbbnsNt4jxPQdEfzsNteMmkTvXZRHjDTzLjjqhMNapMa8TkPchbY8q",
  "key13": "1VR9N8dVy8LBfdkigHCDuhfsm6ASc8BFde8oUuywptXQGqjXX6aZhdrVFFSq5WprdhPAEtrPYyGSqvTbCuwkRS5",
  "key14": "yEsGmkyR21kC4YKqoLYxiiEd55A5t6GidGRCmX5iiTh1YWUWqdBa2vtz2GEiwokx3Sh1Z2nACvUAQ22hYMEp6JQ",
  "key15": "27F7Q7Euz7wa2Bob65iN97xZTFyGjWETMmCN8huwDPQM9LAfF2ADVZYdCBXejdVXQuz4NLzLHFa9WqV6npXZtNwD",
  "key16": "3hhLoaEJGgzJsd69x7y1t4i2kUAguc6YH6TgHFCKztoB1dWJE1XvKUaouCBQmJHFDb5cAqCpmT3m3kYw2JKEKtRw",
  "key17": "2JAfw8r8JgFqWUeAVw7ioJQiqYq5Gi4RVXKoQySAtqZqXJwXxCpXkanHaTQCtabVNQD1r77HXCq8AhkvzozAhhtS",
  "key18": "BPSpEXpRxnaFYFB3ViVLkm445ne6yutq4RbEymwrSGiNAwbcdFpxyEjfZAnpPaET7aCEv6iMm8oqa1GEswoPH5o",
  "key19": "4b9NdQ22HN4Tu69twwinYR3BFm8jr2fZrBwwNAjwHeDEE19ecG3GhZ5TsGHTxHze7x8HXpyBTscakwC5wmTpRBiG",
  "key20": "32RjieKsAptg56VB6KRh2hNcodgCPwSs4TTjApX3bjZnJH5y6erouPAbK3dNyBLyRSgR9E3hzXN5o89SPhFP2RDq",
  "key21": "4QBcAJMP5k6pwxWFDDnCCZw2c3S6WdgGN8DRt5evtGs9mL9jNpjqx1amXDS8chd1Q1XqvemKa7cWeDqZLLFPpiE3",
  "key22": "Uez82b8EyXUoBeM94NRGfasmfB1MSWcp9VuXb9p1AKUheqzAXM98gLNHV3VJUb5euDQLdCm7TYuPhGHt1N3skVB",
  "key23": "4Cs7cdDDyGw3MjMvtWqr8xRgZcAQH11qvPetkauNnFNeFHuQWNE1bQso9KBimNKv1jCuCN1giKMCBVtgmqC8CMQn",
  "key24": "2nN9WKTzbPPPa6YiSKpVqaTiQyBVGmzi6wzu98PUSiZd76mGhtEMbNXhjrQHKba9i5wu4kU5F3ydD8iCb7e36xvZ",
  "key25": "548Wwnd5pJbE71kJerydeiNP9zq1NU3XeFngqRuyTQHoM88z75JNyuyrygPJK5gwWW8mtfxJS9fDXQqpxXDuNsxW",
  "key26": "2ce88GD7RFs6YnXQX66a4T1jyztZ2hGw6zg1JQULGTD5x8HM7NQ9cmqRR6z18btdVs14Q9YJC5VJdYmq7Gow37q9",
  "key27": "5KTQEMWSUxYj4rNRYF5XkgmiPc8zFw1Q1Q3VNKCA3485tShtnxYK4hGUN5hmVd8RitkrP1n5wi2GG6UX4PpBZxxQ",
  "key28": "33P4JvrKvG5nosznBDqC6xsgQAWFUdDvwjGriQpfj4XHDjqhGKyBTnkk7AAt5Wr3MvyfFiLy1UiZiGqGoaVs1uBs",
  "key29": "63TyeScRyEAcRCbzFgahcZyheyQEqhEnCmxhQ6TazDz5EsjXe59Nm7HjjG1gj3rtg9GLaEx2NbX9JdmHFZFEPJnE",
  "key30": "3ghrNQbecUNvU95bDN8fohPdHTcWub7PomWqJ1LFY3mTxWGGDK7693NAfA8uc2BskSVCii9Z5hgJQRMwRs1zR13S",
  "key31": "4Ahw1Ke91tx783rg5bwWK2uctGnVSKsMDBTTq9vgTbeu8frsWfBqD2LKYdHEN9hBPzdVzvPcRHjDjskqZic6znzK",
  "key32": "36V8PdKBtcDnE8TsUdoKwrhE6dXpqP3fxD34Mpx4FJg7YuoMVWibtwn3DkET7iDu5vGLEFEAytcwFpStt1kuADRG"
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
