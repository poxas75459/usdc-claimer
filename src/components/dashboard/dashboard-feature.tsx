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
    "5UQxtyoR55bms4hLRB6g8RLqVe3bA7gBbZPjeTiar7n7TKoeVZMJgiDxaEznyqyCkUaZ7aabni7LgHcuRPBuv7Pr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KoUrnDPYh4pzyxMrmxWmY5TTTG9TBqUZK9ktZh4VupHPUeGVvHdguG3izHECQsZGRvXfaK5yMj67y2PA7DaRXeN",
  "key1": "2AJBQGJocnsuMqpmNiFj2v1we9ax8qQe6DTDu2U8tVakHSoN5v8zKYmAURUENqbTnfFf9DP35LHfDcF3KPnC47EP",
  "key2": "5VZyE5uMJeXQaT5tuoAshANzoTmfesEpCC4hEcUWJ2eAMdGVMuYpJNGFnMFPXm2kSKMVBtFnpMvP3CvgKHfAnbNF",
  "key3": "3BapNyeVYVCfhxnos9QeSnJfUHD5iuCGGAp58Ug6a5349hBnkNo8pYMznXDfdWeGHTYmYxLYFSeFQWGpnDBmGfnB",
  "key4": "4oRE4vkpAsB8rTjCMLpq1JKutjyG8QkcC9qTHNXTk2c8KeSNQhxzewJEjRUkbswkKYPyCoKT8rNhx51XpzcBkx3B",
  "key5": "2avvLXrtFSyCafvZ2p1vHhdEMMq1iDWKL8M3V2mQiLbcpB3gktHG9tPBMgkdJEiYWsiXWN5koF2YcSDi9jMWJb1p",
  "key6": "4tizUfkWKDnWpxsRt3WpxUuWA6ZBkbK4j9YZTVZEsJJpQqehz6kwLyx15cSf5g47kcj6e5vzEuJS59wLmmTV6QP6",
  "key7": "5geJHxjHD3VEs7KzcAkhCNnV7jUyvW2K54uu3DZhhnmjMZKLb4efSAt8ns6ruPN7tDTvEqgqS8QRAdCbJoJQdS51",
  "key8": "5YFPncQ9VxRJWC7yBWEPvBXSSCsYNba1Wo8LowJzzFBEmVU6FTkxPTbsAMbg4L4CfXAM12Qis5mh9SWyfXAKYcyW",
  "key9": "JBGkYbVJdEjBn1nywicat29Fa75zUQmrxTjytTrE1hHzGTigTnmTgn2sjmumQX7MhSuD1DadmNw3DpLRCZM3t2L",
  "key10": "4ZEpaQT6X14J12b688GQEe6RoT52woVyGCRS7pm2eH71c15LHE3q6SnHEPziBbCL9FLbTsoQtdbZPmQ1jt6Yvn2C",
  "key11": "3hrmUHA4824WbtaUzGok8i1fdZ4ArUCDNLK5JCioFdEgcosD66JFR4wry89nGuitb93X7UsA8vLnWpQKC2kXGKjq",
  "key12": "4z2XgK1yhFY2gMERcpAKgxP75ME4iBA9V5UeDuAB342h7Xm9g5cQYVdKVuQYBayJdcUKauCii5vtgRAdveyukSSz",
  "key13": "5VrSxWSvo42N624Ya8xs7Gf5Y4SwAwke95SeuTXzkfvD8zmkVsz3KLSbVCxuVSUZ9e9MkpJHSrAToFtjZZ8BmiGX",
  "key14": "5MWpsakiudmb8LRZT8hwg8hm2CKTqbZgupiTMBRGBgbirUNQM33K6CC1ZX7TymkAYEDu4MvHwe5ecYTiXP2NtVwQ",
  "key15": "4QEBcvszyecesNC67Z7LudL2Mock4uemtYDPBQBmgHzY3E1XSWpRvQuVv7Kk87CAkARXRqovcqvPN5wzwCve4k9q",
  "key16": "3fRTHh1TQ7ULoEcqs1ZSqH7TvWzPHvUp6tgcAiaFDK4epJUVWaT49sKNrK4AmJKAsWzf4Yv34KV7oodBDutxTkLZ",
  "key17": "4j37zm6P8nL3TdcxD3KKq5tyHaGShy4qRaTDZiyMPpsxcR8XSToAKNd6HxFgTkUQtQchBz4JiTMrrpCS85GuVQ5X",
  "key18": "44PEg8sEv1pHPxJRUVAyq58w7gV3CVERWcUdK1EYsqvhi19S1oeZPndbXzjHsdf8sGdnC6gFSANRmy98hJ6ctUds",
  "key19": "A7MLhRDWo64DjmMKxRUCShsm9dnCjPZCXDL9LrpZ4mHkyh8brVwSZxC8NiEDPm69aa4EppkHaEmCZahvseQ5SUS",
  "key20": "3CMb34VSsvjeYKvoLozXvdUKc8zB933fQkGikSbNTc5BToZb3N4Q8ewPK4KSbnQcfFLB7sNkZ36qkR7dP6s3wiQ5",
  "key21": "3jWpSS8QcVb4CFAXWHj3J6utXfThWSA1StPUudr7rLLNc375wfD2ff84rFmyisBQjZhUfBC66VzV5pGx6FinPByh",
  "key22": "24yrM2uqehYiZwCCt16aFcmtLd4cPo2VnzkgeD1vTrgcErorZQcPUr6nxpxftp6HtNiCHW7RrMSJntBh5NH4Aosj",
  "key23": "3AnnhvJtYYj9xu76YxKEbrCyv8eHQ7cc3FJFDBz9As1vrYAkVmbWMRMvSLzz69SDWHEJLdqzkvM81NjqYKYPW7Zv",
  "key24": "2jL6nguVVKAoDPkevN2uKRq3YPivj5QXhpLD8umiXZfvaYZkKaoccVv3CfXD8iqtwdTb16qxbLqfMLG9LjdYfzdU",
  "key25": "2UxxUEQbANmXmkDU2sRZx5wUHCMTVngVFqS49GaUYnsEQ4aKVwi42rbzqgNoqVGGV9wzkeNbjDxg6nLodgWeZv1C",
  "key26": "3sVSQNUi9RpuzncsFo2JdNvTZaDixJrxK8JB1zpiZguoNXKwHWsFUmstDFmyyAyVgX5UjseyvGgHFqjQvooWp8Ab",
  "key27": "157QF8hKJ783UHuna871Y2sa4HY3uMUhYdGNUMGQ1KGeWmi9tL7wzt1AheJoifdM6rbgigHjER59TKMcQwQd3YA",
  "key28": "5KSDmLgoLvG1GjDaaJCD5rSHzAzRRNrrDdaUoMqSGuT5eizfmnse8Z8Rze8h1Ey9bo6Qd2DHXaN6cvbaHQzNmJhV",
  "key29": "2tihMTsmUi8RzFoWZXk5L9SUEzHFkMWJ75G67BJFcEQU6w6To1edNXShoXfv5k4QBN1T3APuRVfsnEZyZ12M5dt",
  "key30": "44DaV7GXSNYSkPR7UeeBjFpnh8Zie7BtRggJKGcPbPQ7JpyYH2eH11UfouYBCXqYp4orT2QacsRZYCiCVL9sEniu",
  "key31": "zmYNjY8vSCoRVMsiUQAcrYGMV4FkP4XxkmE2ft1x9tcem9Rzi3U6MFAKd2TXJuMnpupesaocAo8wRH7s4P3fKvG",
  "key32": "4wqhp1Y8MNTJCyJMQ8ELwDBeFBvYB23AdvyZvXUfqm7WcySmXDgU3nRfJKssZdceb61RT8EtYZ8sUN7jGSWLKvRW",
  "key33": "rTAwjEDmZqcejCM2SzZMGvrvPMVhZSfzD3zRjSoRvxe4L9tdc25mH1aRoUCRBQaomJzwtZHZ97iJEQ9jnWPvsVC"
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
