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
    "xYGNi2PcuKthgFsnx31z8mm4KR2HCgxQxWe7XvZfLsnzpww26eDAK2ZQk4MhGVNnMRp36ku2qRNnJYoRHLjNqj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PAefC2JzBZVZ28kT6isMVTCGCL8Paa3FTKeVWKdfvuxsCkCoUvr4ZjFLe1d4UVqniBqZNJtsK9HcVs1Yk4b6qZ",
  "key1": "8xMJ3THBia1j7yprkXveG2eRgfSZgWJVbxVLeeNGqbogazLXn4c6DeUhVJjoPqPMKf66MMvFsxDPYvpimfBDqzu",
  "key2": "4fxRuSrdYznoaBtxhexWK58WabHo3JLvFbBLittud8vc1QwoFQEQFDG8xYG1hiejWTrcPXnYwwyw7D3A7UWjLAex",
  "key3": "5o8UZyc4DuZNBWYz7e4ps3u5MvGCrSWgDWdj9PemFebD3FRicA9CYxQvkRSck1hR2uhj965MhkksuC3LKU56E7tJ",
  "key4": "27XyKBsUhjo5kVfEod2Dk3PDGkpVb4cdXVpqS2ruot3eVM9xcEdPvxg2YvTS72Vtx1qeMd2vUkS4pCwSHWx2U3h7",
  "key5": "SkvKJQjWe3GtVSjgqM7D65Zg4inxXD2daai1qxAKAVEPdWFn9CrTFxei1E4t6qUXcJANpPZrfFN8tYeJT3phzFF",
  "key6": "63LXA67zyD8FgJgsR5sKS7Zi2uin2tCV3BJHZXwsRtweEfxwavzbCiJpaDfnSCxb8yhBjHho1ybQPf7q82TRLNgA",
  "key7": "3g1egvYH4S2dfrfFTwPMPDzwa9CPnqDoT9s2Z8SW8g4V5nHPNjnFypfPQRcufzgeycyabnCsf8ZbY5734zBDVqmy",
  "key8": "4XZnVA2Ya77D4hyBmm2ZLu7FZLtZ6DLmuZQ1vqGUQah5Jonc1QwbGBwGLqZ6FBTLhzaZAQ5h4TcxEogwWfiLfryv",
  "key9": "37dbeHmZs5DFCmSA8hDEZ5ryjv1HEBMJFfY6aa2nV5bFFuANHxbzbrfnTDn4AZjbo2Ts7pU1dFMWSJmeyeistX8z",
  "key10": "5ZFbYEjTKGhVi759xmckhmidcnU9aqiwEoXzWFoBT7hRcRThJnRnV8y8nyb1voCtRttrMKZPhLKJhJt5i23UV3U2",
  "key11": "FkSEqgXH5VhgHLnYf2iATVt9wiYDGAH9ophFyXqbBskrK75rBfegFnztj4WKB6RoGqz2Gu349YfsNFG5fCZkzCn",
  "key12": "4PcbGWQV1Pg6b7hJzykAAkhEMnjfLn4oVN9rNXnhWrgtbm8b3fmPBTb92GsWwDo9PbDEzNTzfUjwvBYBV8iS9QRp",
  "key13": "4Jbrr9oGdC2FzBn9aN9m4AiY2Pvz7oDvzNJsgcVo1bXq8td8NMK1WF2SNULrN5ACGyJXjqZ6vbTFL9TAyf2SCDAC",
  "key14": "R29Fuj38nZXm4RuAehhQb2SrLR7YKdeNQgjvJX5D8uaipDbRLB4ePsvfSC7X4Y7gmdzpWRCptjov2RCeGV4N6BX",
  "key15": "57M9XgyDGACjQBuYSTkgZXLMwUbMsMZX2jyUjG4eWqp3aBQV7qTwL2Dj39uyFRstW6aXLt6dsG1iVbGTtgDjB3jv",
  "key16": "3ZDz82QgUWkc48FZanpn9jbLkP5ACT3dJbYX5gNmwkrScfAxXu7DoxCYMGRCQmqT6DCWE3udVXeCwNnFeD6AciKJ",
  "key17": "5Dxo4kUuGJfsb1i4Ak92eEpTi4JEybiWtE5yVD5Mjv3z1smxUuhamAT9dN8oPT3c3bxoRRNDKVgddXTDeLvLV3M9",
  "key18": "CdJP2Zdrv9fnQUd6oBewGf9NDS8GZGj7TAGbLG46MPJDeZvKcpzgMfygZKWumCQbdTZjd8ZAoURPPkoX9m3CwpD",
  "key19": "5chhESTiLekf6RG9JiNGh7RCjXDNgGEaNnvvcLSAKHtZkibq4gwptfR4Bkj1UGePWXK8v9skuKs7ZvxA1X36RusV",
  "key20": "41bi7WeDEELvJRzwUi8oLvWtvV4SxfvPXNVPcacXjNgEcRyDnx5oAV2DHDznzQsTKPas3eGTzkvAHrf7DHWjuh6d",
  "key21": "621nQavELzVkJRx6BcUncNDZiKPs2RsNC12nZ4oXiyfwHurH65FQYKxi4F5PwM8x3iuzHg9ZPUrWQnz8txwHyxLB",
  "key22": "cPJVnLW9Sp9VhqhUJpjfQmPtYTB8XQPtCH9YtfQWmsrRoGA7SEfvDteTqnXFQtJgMr37WtahUGUbf5VYPt9qH1P",
  "key23": "dXuoDuyJ2CSEysYrZKKYfrARgFsPfMmkKMR6aciuiXwhSXb7nSMUacEUiKiBZeqcP8VR7WQ5Cj4TGpYftAeyGaH",
  "key24": "kExga1Pk7H2Mh7reTz9QFNNez5cVvGxfarNU7xJLeLVusMULTNCQvWndcNt5hAVaSbHKUEyi8cbtc1dRfetSN1Y",
  "key25": "4pQAJdyZLpxwqTSpJNaj8vdiVcZH6ctsog6XUW3yFqgqgDyY2egAyraibdVZw7xeQLQmD5eNiu1VxG5CktQgcumM",
  "key26": "7QTzgmPX9SiWVBx13cDoP336252HVdZKUXutqw18iVdRKTLckGacnsKxmYicNxPK9rjngSSW8ddxZNXKDeRWPnC",
  "key27": "3yoHJCcF5nHW91pgGEDu93kZo4HMmYc1novZALdkSo8CjCcnyBPSUjJuWFMfWYWPUXSUp91FnWBDhx1ARSzPBYFw",
  "key28": "3b1xN3PurmZXJAojZZdmSFNwCC6GLXU1mUz48FvUBAYDhM1TKYdwSne18UD7bie35zB7EqPVoer1NKwrHyfbnHei",
  "key29": "2nWpCxuysRxscxNf13VBYFQs5dLQan22tiYsMh7BaM5FrKNzvLj28M82fCZSBoce3Jc6mbqQ2UUf2Az8vtQECxj4",
  "key30": "RXTEXHitApxpFztAXeasrQRYfM9XW6bo3o9tMCasmLaTB12RZheaDAwGYsqofBURUNTKRLkmLiA76quYpxj9M1U",
  "key31": "3bq4L2rWr6q9Nhjv7oZEvZv5KK1ht15Fnj1HKw7PVd8GixKa7oBUdWyAVSgE8hpTBvjos21LGzderCQShoKzWi1B",
  "key32": "37TWjc9s7T743KXn6rrzQnzyp8FStg7GWn59nFAPJxPaB2Jv2yjSAWQKNYKEdVYPpBaovoENvhoH61ZKmawYJLiU",
  "key33": "4M1ydZcVRkevoaaLgp8xyiKe5csRiJAogdxto51Wo2qvbwdNnQSfg5GvFfp9JJXhm6pfera3zvhv1hLWNJVJhsha",
  "key34": "FLkZWAwFikHxX7sGhbjpMd8paJf1BoSNw9eVp8hzrtybYfEUpaPRd1HcqDqBZPHcypqjLD6jpXzAqYF32XCo6Q7",
  "key35": "2nPC1dJ3xjK4eCEwcvsFct9toJqd3iZ4WgChr8uu6gLZqVepzz4DMH6TuveFq2DVAM2yMcbuUG36mnrisPQa78r9",
  "key36": "YXFknTTP5T7EfhmyHjmJduejeREdkoWkXLnEnUW8a3dKw7diQFeZXPCKXeYJP4p4K49wZKHKGS7uyPd73fxpXsC",
  "key37": "3CKajybVRVshMWyBX4vC5DcXDiy2e6eQpv2jKUWNXPm1LWsCBpWVKc1orDYw4TkK8cRJ5iJWm2ZDeYvtyr5gjoib",
  "key38": "3KiRuS7TRJoM1oNJwTqomsP3tb2PfW8xdu7bp5jL7tH9h4ccHb7HoujKGEEc93tEjNKLab7ppY2GqtvshZjMvTcx",
  "key39": "5hxPrQTResRNTkxF4fCZFjxn1aSnAHo5uGUqBsEGbHGaLtRBVb7iRwGMJJnBwZRjhPYSoXy57pyhpJyCaVgbBAe",
  "key40": "MUwLns3g4JdpwYPkaEiwgCoRHSXgQDQh5nMdJ7TaTwQ298ESpx7Gy6Umnzbc5vTJ9DAcVfCqVrDXBGSGeDjpP7H",
  "key41": "4J3qZrM8rARdtAWEjmJbjz34Her4SN4ZpKtL6LgT3Eh5biVyQ6jRnejSVthVuVhdBbprtGMkth7U3CCJRTA58dNM",
  "key42": "2xiFMjYZG9ey26WgrAA46USaw8X8tGKt1PMNmBH6tGac8LyHsh1PZNa1rvtGda5fzKrpmEePVHuNJFGiBwfFSMH4",
  "key43": "4k49ag6dcoq939TzD8iDbUKBBuU2WuoKQHd4RqsGoPmdCQSaSbSm4NTSAV6h2vVEUS7hBVGgP7kMUWBfDM3ugMYM",
  "key44": "63y5Vm6RXVKMj7VqygBEJgx1VAzjFkZwLwgJsVLQM7YHqf3FQ9MTLw1BwppgsLErB2jamXoq5CdEmuovf1RW6nSa",
  "key45": "2SFaCQWtd6CbyGHxtu3MwX5L6BpP5FxzufHBzhbCqt3Q7QLo6iK2PA26D2QyPMRNjqn7kv5EsTFhRQyp772qPNnF",
  "key46": "58Jb5ombNiY2wCW6D8wS2mHmtFAskffY4JTf1foQU7MFNCt3Y2pnYdZUbuuNsz5DgAcGj4h59Mcqp4o9uymF2nnj",
  "key47": "5xtgKrbf1BvXoSUunkGRm1JZ41uaN1rdt1en8KSX1Bp5DodttMHKtHa7a7w6bixny5ivpEkvhXy9zSfifsxLp9Tt",
  "key48": "2QUfQnytMFFB3FnuPrTeY56dCdNNLPU2h176vMnpKNFREkfb8HaeDdsKP9uZBuYpmSkK1F1yTGLmf6aQf8tyM16Z"
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
