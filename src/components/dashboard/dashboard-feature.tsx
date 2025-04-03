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
    "2KE55vki351ERGy2oH95XuZjDT3VVpFXmPGVTceEwtQCSsmrtyHaBfZ9TrvE2C7HqoeqNuyQGtQjSLost15F1SgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i2kdcFEG7bsRNer84vJNAws4VkZDoB98iQiHem7x7DpYWvKxhKF6mqLRctHm4LBGZW2FnpejEwc8v1b6xfSUUTR",
  "key1": "4h5W56i6p3qywBTsTNRQDjQK8j4ymtjrMwnaA5rAp2F4ZF4QKsKnawqNjE9FkCgDCAFhfR9FqJpz4VXpD184zJMv",
  "key2": "3jBhpVm8tZNqNnrXiiJBKq96QasZiUo4cGEwoDbGjS7TAfuLYMndFnrGJYzHhdAw4Hb3BEcALwKHtJZToXAnoZB4",
  "key3": "5SKsTMxVscrpR6CFWJdpALcAgmeqiTugzTAzWGmUS2Ndyp3onxRci1AfHaMgXFztScPjNkSpAb9vrAt9NCXBXf8E",
  "key4": "5986aivcN73VceQBEDJrbDSWgkNF1mi2bexEgey8jKtVcAe6FypmVS2f3RrSXV9vom5gx77aguS6s46DDCrGAMUU",
  "key5": "2NKLkbovskXSsRmyVU4JTK1L4KbYDutdm1MajhMCM5EjfXw5TwB1hcUC9RXkR94F5RVMf3nLR2MiPw9P7eR8ZJUS",
  "key6": "3FupQX8DFDyyPYP1WeFuzY9cr3DNcGaBawtDKAUGPuHg6CnKdsYLbJJi9Mx7PtamccqEJtx6EksFQhuZQt8W16x",
  "key7": "1daPhn67eoagCZRh3EukyuugoXaQbikneUERYzkvZpMbbUeq5cmZWC6eTXM73qmTnRGc7NzZxMzTT5GH7XGcjmY",
  "key8": "3xTW481Nscm39bK7wUpn1cdr9Asy6NijsdQmdNhvsWLNU1BHXvLKTZ1XRcgCVQGP3M8SNzAkD8wbJU1uSeUcYknW",
  "key9": "349yUh7Fs1qoErwh19Hd2ArwE88N1HQgUPRnPyjJtuNZvZxGD5ke8g8qxtCQZFj6265NKb7KwL8Sb9Jvn8ZPJcTs",
  "key10": "5tPHVPjEd1TsypwmM25wJqtszSwMETWiWfwzNy7skkBehZjgoybgYDnLGc4Jj2uzqMvhKDW68NWQBHDjvuGGVS7U",
  "key11": "35fHUCv7ioTbPCoj9Fpfk4VqgWmeqG2sxgdruX1cLzsAwKztP5LF2vjfRR314LTA4VPegSUHH7L5UM3ZQ7iFHqkB",
  "key12": "4eFnXPM4Hz42xt1bttXoW1nndMt3DW6HZr3MPnsXHqUkdnuoRwTJSqhLffXN4JZxv3viukRLAoXyvK8snVkZ7Syp",
  "key13": "6c6XPA6b7YstJyTUhTHJRyscFNodSk4qSjF3QY14veZxrRoZuZF4Vr1DR5pFxjE8fwp4rQyWcGBv171p8kEgXqc",
  "key14": "7jU6KNbPrHqzKAM7GFiKxTF7tSZYJGCyQwgMESE424xfwPBFtRf9iNitPMcntzoaKmk58BTTsPgptrjUpxrhpmj",
  "key15": "2ye5dGQko31zczTacPisBPyxbVrNjGqjGZUQShFwkfFCvetFRV1fE5sUrZJ1y8G4LJh5baNzZZj3WqCmmHgGkofd",
  "key16": "38aKdKdfJfEvuyqtw2y3ev9A6uWjCWk6MN3JFsY6U8MbwzM5jp5kbjX4QtcWS6dNUb1Z2S9izbRhdpYJXBivd7wc",
  "key17": "Ct1mZR57y1QXye4vry6nmxzSmaXB4qd6856kY1b4c6tWPzR3a46ZkBjXrpv5aos4pPtXtixzuA7EGayMnp7VvCP",
  "key18": "5BpkdNSVTs6pwmJAA1Y46DMJiHLit28jDJiTGwH96rkAAwFH4U9CTcPs9pzZX6LD1UaAm1LyjwaCdDaw89cgSEP5",
  "key19": "3KRubwaAEt6LBXD9uHCpivxQYLUaxsys8fFHeizgJ6KnfNAnj5wtoByM1VNUU8dePWio1hinSFyVh1xKKQNcz6eS",
  "key20": "4EmxGpqWGJsJKFU1funDENCsU4BqVDtu12wXwGVB28DoG9mEVVq66LNDLctMzsTyW1KKYbUz6sFGoABRktKyHWKM",
  "key21": "5nR4hYmAm6FXt9iW1qKiwXekGFysR2kKy2KMnGU2eFymSF4PswCxHzzyZVF3tnAHRZPSovxk4EKVBXmZ5SiauhxX",
  "key22": "bpAx5KupPBfHTJuz9VjMob39NTPaj2skyMUWto4g5HYVAByRdB8DAQUBYidyBsUY5imLTAvXtEJ4BfZivPJoNSk",
  "key23": "2W9TBTWWZSJr4unofXAR4QBrJZmw2gD8enSCxAggJvP2gLFemXxXp15bAFbC3mk6efza1vSguo6fvXhr4p1TKBxD",
  "key24": "FZyk9FWsYAo7S94H59g5RPk93PicvhxwKZmXUPRyYD2PfeyznUsd4qykSzHuvQG8fDdugp9Tmn3BpCwp3TwMBgK",
  "key25": "37uFZduDccS3HYiJNTVVo2fkQfweiMDK71YPWZmDvMDEz89riEJdULV2gfthcRTivJBUkysbHX4oiAAsTHuTdzks",
  "key26": "5WidSUrzKknC8ccL8BZsNp3tknCbhFHw2g8BfNuTmsQDioUXnFF4CLy36nDF5UDU7KHGWqVznCrWhNj4xm1HdAmE",
  "key27": "5w7iQJstqy3DYfymVQAzvfmiQHTSoekjCuxG482Bb4g7sUdwJrVYKn8iDPUHHXiDEiDV9swVa1HaLy7nC5Mkwuih",
  "key28": "3hvLgQYwJ5gpHnVJph8mWKcgvDPSeSNkRrVCTqRs7yb2HWvefmyXM5KR69RBp4cTE4AGCi29BnNwfMo83sj6eRkk",
  "key29": "97TLUEK2azZ142gURo9bu2E1J4nfxHABXwAjtN6bHNBNbHHSPRyPv39MSmuKjrLfUfTbFKtVji4jzp8Q2EsACRw",
  "key30": "4rDb71VpKwBAsaZvnSm6j1G9fWKGZ5upqBZfncKfB5CdmEXTHFh6Pe1rBAxWPUxoQ9mRp8wTzhXPpZ5kECBmsbhB",
  "key31": "499FWNtnpJzz9YbTKbCcMhxxfeE5yTVykhapLrsJbyussmkZEpNaDzRyFCPwJ3W16yKroizoEyUqNB3tLDR5CWxR",
  "key32": "4ecwLu9yjvpRf58XjjuScpUy59qwmxJq5KaJw1fUaiKhbxCrz9h7VhbKi7rK3tJj8PoiuG4e6AS5ptkARAYa9cDT",
  "key33": "5BVwBUniU9NVK1jusK4bbSPPtmfkiS1E5BgmdY9FLcEmKiMufqpsGcSH21sEBNAEZBanyhgVzkqkKhzkh3DbPZFF",
  "key34": "Yp541gZt8VigeGGYBZHx2rN5iqWeN6hr3fmTHz1uFPvV4jphTsYFwoqsGhAshwdW1cD3HQevYkdf53mHAq2MQsx",
  "key35": "2YAsNDpQKNxrTij6Tx9Vzj1exPQwLT7Kg8HzGnyH3s3Lt1PfUJkaSZNGFZtzKXBRaHSQ5hyknW2ExCkkCo2MGYtk"
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
