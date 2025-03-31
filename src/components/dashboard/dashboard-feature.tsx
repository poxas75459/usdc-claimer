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
    "31MhmXLMUZjUy6MmKej7zKx1kRiCQEVnndZL7LuGGoyuKKGn8zd6jePGNi4sN3wzE2on4onpRKE43hdPcwuGoVVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hzbAxRRaH3G39Zv72oypkFxefoEMzrn3zBVMreAZK72iPbgWsuRGGpELffX7RvHGc1Yrm1JVBzUXL4nEeH8V11j",
  "key1": "3s1UGBtDpfe9xUwfheSoJiugsX87o3vgQpbaGnatwKYVjmafGJpLMbicLSsuvydd3Vt5MDCcFWC1gaitzUK3VXZe",
  "key2": "pG4XS9By7FeBGzQurr9LZZ4D4aSxjrjnwAptn6wKfCUCL4wFKfVRECz45EdNuPsTP4rBUUcJ4ib8hTZE4d8fWk5",
  "key3": "4cr22FaBcPfkHsQXribmRt5tC83Tn2YAdzb913pdymhFTksAsnujpco6R8UVfvvx7oWFecLS1LFSpkHeAEVhqWJA",
  "key4": "4Vc8nv5AroqT7H3aT57mZar32mHjvMmRJZS9w4WSdf4HBBR87ZvJBu41zrUqQ9yZto3xtvGRrNdAc2swvTV7afs8",
  "key5": "2r2NVMoXhSLCiZ7rPYGVNWQdZLy9nB6sm6vMRH2eJFqdnYwPiWBi5kFXKK3dBRFv4rtaxVrzP3ZbrPUQsT3hyCkM",
  "key6": "5FdXodGD1ZoNWj5Gv6U4yvRE6pkoqJk39PfHuGUeJyoDnJfvZKTN33QemWBKWRvBfG1Zsr91KxvCVS3ghVPVrACm",
  "key7": "5YufCLgBNUvfnU3o4ztAhEL4a7rMtDrkUwFzew3SieVJ5JpZV5VVSBDDUC64PPk49aXRrgNnPaXsB9XLGBC8wEdF",
  "key8": "gMMHMFmGuZGxL8DmyAbnprLo1CfAZARtrEzZErbbe6dX3hMxYzPpUyUyFwxsCL6FNtXUaRaYYp11aPY2x8GwQEx",
  "key9": "2JTERNbFW6eAXvJBzJkGiPozzvAmdeRovaMT319oLaGRgqJJhXJjmyM5wkAELfT76z6XqWCQsrGjwpYnhvtmpDP5",
  "key10": "296o7x7deoF9ZsFP1yYsbj4opvCQpfrrwNSLdyD3M7DosW8tzcXfbG32RjhRqzZiwZXxZdbZjuVZfuhSB1r6rV9W",
  "key11": "5moLGxQAFGSUPaHMv3GrgGeWjfU1c7aq9wYkT7rize862DhQoByX751PQBWf4py26pZhWpxe442iCwyeQ1fnxUd6",
  "key12": "57zh15Jsr16MRBuKHFQ4J7PqEg2mHpxS7mvT6wjw9aAxk9JA987jirbE1HF5hbjrEhoDs3BmXqaz5UWwZz5u2ZXf",
  "key13": "4uHdGS9jwvWovUZBs4i32ua6vU3mxvf3kiQ5yzZryHY8xF8Zg4ZJdqeSibJZDxcHd2Chx1U9LRwzSXi2rdom86bB",
  "key14": "mDd4MXuQn32sofC92oA8YZYgXwbrZenAxe8KrDCrajdnZq6LtKsq3acDiSNqCH1fWfhpBdjH8WT1EnGWPMTPAYq",
  "key15": "ULMHbemv1gt4h1bENjc1c2mTjFL4scwQCTY86ibi9nFbBVx3XnDta5fDs5Rebtai6PNp5g64XVMHLVGxk28iMYZ",
  "key16": "31tuSuHaMszJ8r2iz84DTGRXKR29h44CAQndWCXKik6DbDJMVvVKc6yokXvHgiZqZ2BmX21VKFeEKJnW3gWN9LpS",
  "key17": "Wm37JSwVXav4oqEttiBc4esReMrsUAXRf9Tny7tKKHqyQRuiDx65Z8YWvbvUPZBseHNQ5sruyCmCudcZDFTq1tB",
  "key18": "6du25xxE6tqJcXG7hnZYnaW48qYL7CsF8YA6jXD9JdPT2sJNmtC5iiG53WJpNHzBJ67XQmMnreTS3WuMURhG1vy",
  "key19": "2mzrJpnfS9by2QZnMcqDYgYDawSd3EhTbxz2y9diAQJnX6wUCNnKbfw6rxWyd89FUusWc1Y9h6ugUp5myHqiHVEF",
  "key20": "p8q44ZihVWv5d6WhExBG3RumT1ZUeT6HabEK7Qe9usaaoNrfKiByHPRbT1dSsFJQEXuQs8StW4BVKQd26xc5Znm",
  "key21": "VTAak3uhCQGf465BCSz9JmJpeVJVkRDEgYwRn8iQ7SVgia8cifcz1b7cRXSCPdioGWitSNjS2YfraWskcEwd9Hj",
  "key22": "5gta7xNms4fWk7n1WMKvkHTz6Q4dKqHFita9ZQLiQ8CZMoNG6BgueooD89qFNFZAgb12jNoXxs3WMyWyW929U8Rd",
  "key23": "4MTm4Mtx3fsgc8b358dVXvkmCHaXhjfJGWQdjSAKD3VwxwTNJ4fRuYjXB3PuRizm6JP1rD5BSfMbXdDS6yXecjf8",
  "key24": "5Nm4piLB75tkrX2KUbVq2pyaUN6C2DK8DfHVkDoDvm6ZHSf2f3Hhj3TuTzYwy8fatXNuvWj9EVzEtzvmxfmScSmo",
  "key25": "2ssswmv6Yao2NmwhrMTwWkqAmw4Tw2VjwzQxK1gc6tx61RWtt1ZbJF792j8Gky9E8sndenddnXTSREZVp5F2ofxX",
  "key26": "5aLq7ERLvJPSUF8hKFdGmfpgHnoc7tzVoi4QV6MvsvhFq9fTQaxHtesTedZhFQiuK9NYMAuQAqj2SawyRztpyBjG",
  "key27": "51aDDBfMDf8etUVH8a8FjbX7FBksfgsGz6fV2qHvEbiKzGwr6Ay45WfPt3XyWiFt2VX8ci6HG3PYQGDV7brC5Rz7",
  "key28": "4EX479PcUY2XeCpUESZ19xSj1HscZyzhsauYiyskEiCRtH1hLx72UCwZdncH39SXhqZ4tATQ5rXt4xMJj4s1vJmL",
  "key29": "2bJPc3pr4u3oZz9pvzsVAMe6bguG7CjRK2wU2TSbaujbrpt8DLECVKev1wna6LPA9bHNwN6XvPbFK1v32e6iwYME",
  "key30": "3exEB36BW4vhVaWozSLrHLn5Mcyg9uwjhZekuPgp5bJLRDwaeYJNGvfW43PjUqXWUnq2bYhYyNwjbSCErZi6Cnge",
  "key31": "46Lv9oenRUSfbpTTMk51ipzKnTkNJkW9r3P7KR4FAC9SXXkrJP7vQa5BoNov8ciRWnrxepEe5hMU7xQewGUqpgk8",
  "key32": "2tJXA52Ems6voLj9eq7Y38FCmhebDCwGpnCdc49HD6mXuPHSyPxXPWcGP99zj8vUAVP741pT3HZKmQiBebRm9wWZ",
  "key33": "qc4arQe2Lc3exGn5xzPXY13t7yqmWzrsEy8MWbCPiYKuLSoJxt172FY2UrVtEjTZiBSYieLxeBDo2gPVoM3QPqk",
  "key34": "5T7ZYf6kYVwYQxV2JineUoQCChpPMcJ8JeDouGeBUPtVmcdZUo4noNeMjZZFR258cz1BsHiUeByUYtirZZKDRvo6",
  "key35": "3zhaDW36Q8LBURbKqtEpLSvqBUkxbGgqmUwtVkN4bJcYJEd4URTj6AjgxEFMbNykZgfVwVnbZpdzvVduWmAQKhdf",
  "key36": "4T7ZFLRapNJSVkxkHG4ctWdZ1aQTNACmbyHhZKnYzdRCJ7bYV5oCA5PkRk8JwYFn3eugTeFodmU3ECEdjmEGLKeU",
  "key37": "46M8sw6S78AMRfx87KE85wYTcvmk9Bta4UN6AwsPrPZGjb8NfRSA6fU7weLNghAGKoWLnv5kPNhN91QC4peR6k6X",
  "key38": "4TYQC66o6tpAtFMznwyRVjaHmScGT9zxMWhFTDYb5v1S6xyQuMJxaoRCNiJ9Jt4cDyWxWSgHqE9dDvNqqAqDbSFa",
  "key39": "3EjVpEQJ8tj24geBppk7Lw5hTMhdgwx8KJS5N2JcYNKqyS6Du5pxbMuSL9YpGZVvHodRUzkaVffchMcGfv6bvGjo",
  "key40": "5eroStcJgCnscFyoyHTbjGc9eokbc3aGdk7hMk3C7VLFAVo24uNqeUu7LfUSaJmM8n2EBujZAdkcWrDy6WZVSTUF",
  "key41": "mivfSrdWRfuBpa2ZQBS9UBeLwqdv6zSg9B3RxJPR8eNtFssBjymhrsRYBUtELQjGSjFAUtTCWRcsSp6XZTGTdpt",
  "key42": "4r7wVH4ThjgFSEkuxmcSg6bGNr4VmpQ63aQk9kDY7u496SeBjqxJo3xgfaQoqcU1kX3V4RmkeT5W4NKzf8WDHxkK"
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
