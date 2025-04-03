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
    "2G2MACuwWREHsroAEZjP66AqpNbw5YFEXqQb8k49863zGv23CTo5w9cJPxm8d4RYLa6VJjJscgaTzTEnSQ5JhQ5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kk3q26mkifLLfLpnC3xM3gQ2eTH13cQ6DydTQSnfGaPgzYVx4QYCYthQQTmw6Ejki6Z2wGzT8WhENYubEPP9dpa",
  "key1": "3XJZAExhnySPT34ak6jBtYwChCzkiPXdDMN1qR3UjAqb3PDHJv1uY9TuBmZnGETr9wa8FJNTdEz2Rw5EaxR1moWb",
  "key2": "4VNengv66wYZR8tMQhbgcWaF3fqvdFSBjwFVRSGKJ5udwgLTVFiTEBeRNHEcyr96wwLBTqvmVhXgP4BactBJRgT3",
  "key3": "3CpcKnT4A9qPmAUFpwEuvUJZQdqiXWhLqxUQUNfYfkg8zkcew5SZULfTnP6SPUop1TYKNnmjdg2u1tdtjn9gjrr3",
  "key4": "2ysrUBn4mDEVwUNiFKqpLAUJrLd72LruJN2muUBMAx8aH8btyxVhBdVCFG7GCH1rYBwfWYEswM7HMvT8q8DJQYrK",
  "key5": "bkZ8LNmPue8edKW8utKnZChuQvM9SHmpMfyAJQ6N98eEkSycNHPAqXZ3mG2jqHefH7idz1THsGAE1zavmvCr5vA",
  "key6": "375DxQfYwi1hunj6EunvWGEufjdaFiWrSCtiRi2o8oiDmH8wSMkSQVuwGiskptGTevBHQprvmx6jwZB4VabtEzvf",
  "key7": "4HoQtzQ6zGEL35xAEGgTEHjN6bJav8Qvb7j9MgqRjPaDkVny1kCo1EoCaCaCBDMbqcZd7gCoSJNE5ZZX9S8oyXon",
  "key8": "47yXjDWu7M6BoVh1HeauBcrbAFuvHkJf1AQTiqLSqb7DR6XBSWsb5VBSQR97gtvn9ErgqpdVUt1NRQjU656wYV8P",
  "key9": "61axg65ei7XAJ8AYCgoAFmp3hXXbBc83qadJSF3CaQaAJHuEMa1Yq21baAxJSXSA8qKdRqXvvwNDRXoMZyccuZEP",
  "key10": "2CvobyxBevp8mWTkM4jgyq4BcZzn9h8dAorDMJc8zAeZF1Poy6sbGjXu8r3a9QA3DHC33hS8oYKYyugVe1AEmE2t",
  "key11": "5ZeMqMX2CFDqxsMmwpveECGYSHz56YwnjXUJNdQ1J2nx7qr4HjDXCWATEpKaFQTZDjbmcqpXrdZdNCGT4AWJJgD7",
  "key12": "2nH2TackQ5nZ1PJQ6CqmaqLCvmxtAnEaHnXELEyxmVqnVVzeYdoLK3G1nLsuG5MxA3ModFahcoZmtW58hBusLXfJ",
  "key13": "2yunsMRmw8rR9Nw7dv7NZQNioQuJFkCJtRZnSi3xw5nWHeGoEvzbYW6Y8sMEVfbPw1faB5BrBMrxb67ATxG9p44o",
  "key14": "633qYECCVswCivDwvcB7DiGHKfgTrwMg1h4nKMaV47LDAxCQicnSZx3up1rE5Mcnxne3NdpM47DpMJVPQoL3RyEH",
  "key15": "62QzdsCkt15J4cSrK1L8GoRKhBWvyfjyRUiDE314pZB1fASdVotJ33jXrbb6Qfy8xa5fh2tnV1KnuawpFqA4XT8L",
  "key16": "4Yq5gGsPX5YKYK6pjneJ8avSkHWXLPW9VpPyFRTFjxmzeAmN6GZLDxsUH5kAB65u4ZSx3ydZpoFJtGT7wmneqvvd",
  "key17": "2ENLaCFYGMKFnfFocCWJ1GjvngFeyND7hWHnEiqL1V3yKaZJWGAMFKLTTyW4j6KJBZ3FVX8edUVr9wKFMk9x8Ssc",
  "key18": "5gGEMpeHvxvf14wHntdkdkPz2PQC7eUCYyfzRfUGVn5whar8vTsdZF9ugWESkzo9jnkrDmnbkJo8M6quT1u9SNx5",
  "key19": "5z4H1KubKhSgDW8eR8E9ALPH7ywYFmquv6kbJpyQinzL9eHW8nTUL2KxQknvnCLZfe9PWMN7LD4aNz43wL4GbBSG",
  "key20": "47cCNuzaNw8wLBybBFGst63LjJSfsaCEFFuDHFEjkyd43WQhfXTqD7UAhwaRirx8fh73AVibRDk442iVctyJ1W41",
  "key21": "4jXvKFmAud9FzRAQDqe9de6X5BfWd4KkCvRvRWLTYcfF2p3ZeLjGoM11WS7jK7rQ4CPyndAJ5CfDJHU6wUxsyim4",
  "key22": "541B1XsXHKD9bVkJPXHQBWdpJjecxBnaEontcv51VyH4FPZdA8ySpJcuz8qdWZXJUHF68sxHDubZ8Dufesy3gV91",
  "key23": "7E3kUXi9LXje4GcdnrBj5KnhV3wbvWzkWAEehDFPhqsywcqQ8f3cKM9jtMc9vdCxJw7WtPRyA65mpALAfB7AWHH",
  "key24": "4o9zyUAQE6Bcns8TbqSdymXJPs4FCcBv57rExfpTredwnPPtVvbbvifmrWSEBf8p7Lqa1DWLMEanoK8LupNnikRr",
  "key25": "1x7MXe7fZPQYwubdtiMGz9wKhFpykpZJYLdo9zGVhKVUzMWRh9JC72HFeMv6xFYfYq3FATbJQAezZfdCfhaQm5W",
  "key26": "3eiuRqLAy83vmszVuQK5DCAYhgdAZuGEE3fsJ1xvc3NxXGi5zFWhM12LC2sTh8KZzw1CpZhmZR2xV9mxKiByWjDF",
  "key27": "3641roq3Kwp8WanHKVFbtP3BmuRnMs3Eqt1icjCyJxpnvqxMqBZ22V36oLQZ3i3oNqQ5bFAWRZ3DEQ18VrpyRMs8",
  "key28": "4ywA4Vp4CAbqUEmNSZb2Kf6mz4228iHy9ykhSg9ycZfxbo8jUpS1b7u5heKixhh9D65EZ6vEMVvX3MTWrFNTiWs3",
  "key29": "2ztPatNV7ZKAgqeSH18FHgvDzkGYB3vSppMWJ76VsKQTdu6syssz9QyiGSckEC5nvJ1u8Sy1RW7gRa3PnSMz5GtV",
  "key30": "oQoCr7UUR4tRRzSffd5gv8k7uK4PcExBmjgQG2zPZnKyE9d1H5unQPpoA2gALgqbZi6rEyLmybafLJvDfYiwmmb",
  "key31": "52FuQKZJ91jSr1PWYQHk7XZtna9mWnZHgEdQajCeWjwiRiUpxAfUjVkFg8gRg55n5SzjNbcRhYCSNzHkKKAaLFLH",
  "key32": "JCU9pGWLXtQQg9jzR5KyV7LG5EGEtmjgXSYquRt2JT4DQxS6Jo4DEhb2iJRfsYCY98UVLPYSKxptwQ52PVp8uCP",
  "key33": "3G72eQTwVJRb64jt3G3JSNo3a3DECG3nCpgnbyExGTwqT8Qc2v2swKakayT5t9kchWG4t4biPZRUFL4LkNZbQnET",
  "key34": "5PZXFypHHZuERfCvnHLXVSs8DfsuKFSBeoVPVBVmfQHWZqQowx1ckB8p5pnkvr7BiJFXKFv7J3HvvRF3LfFD3kQ8",
  "key35": "52Fa3TbvZr9ABEcbEB8qvMEo3ET3NAvB3Jq9KLBFVKVPcVUc4LTtAMcbXc4A8kVSomchuLN81YA6pW6ZitLzQoNe",
  "key36": "42trBiczFUM78wcUQYbHwn4AEZ1MAvfFS6VQYtiGLMH5eU4k7gQM8NAYsLdDeVz51qRH12ubwL5DrSbbdU3pgfM9",
  "key37": "3mPFrzRQjPWRRUy18KyewnPNkvEfwpQSTpcmGzn74mD11s1b8adu8fv9KivnZW4FQYRNrmdERdeYC9oQmsHEmuUN",
  "key38": "SKJYmRErssJ5CKHJWMSGEX3VsHHj2tRJQcvuQHHsjHKmyPEQJGEXzF79Sc5GvZbDfTiRo3RrYZFsKBLpDumRVaE",
  "key39": "3cLo8y3UPcUG2bRr5AQTdGKiAXHUx5YZT4ZdQ4Xqoq3zzMuAjFJVqdwE8E2LPrio6AgvhgD8RChaNqn2DzDBFMaH",
  "key40": "2WXLs855EhYQ3ZiMPv5FNvu7WbycsaJwe4yR8MMmYs32oe482aYrz1A3coSmAyXZxYm7NxBCT6uRiGtTxuM8AMwp",
  "key41": "NbXQ57WMUSB4iGWtxrusvPDXrFwZVCYjeV3jSkUmoivpk8JDYW1MgS2hf39xkDUEQsPqBjvLPdgYQ2AUm6WxMh8",
  "key42": "1seg6soiNugyLuwGcYafjgY7g7hgv9ggRwvTZR4Xh9RYaQtvZL6c8gYDfap22WAWvWGVXds9dfJmLQwYdcvvfgK"
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
