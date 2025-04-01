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
    "2ZuQk35SMEBzWzUMqzrBCvCF84AnnmLXi9KydPLex2v8jBaiYMLKxTuuirGTBXFkx5ijJLHd4dD8gD4G9Qn1pzrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CuznkEakZmCs4TP88aPxv3FxxKKiWyL9vjx5Wjm6NKL6XbTydCNj4UsYvzqF1b9d1VURtLWi6C916HWvrnw65YN",
  "key1": "2RgxJKH2yFn1VUmf8btsMNpKLCwaJXHfxNo7HauTaWTUBkvne2J1oGRPMbbh1xtaV5HqeGkWmQj8F4TGueTnLuE",
  "key2": "4ot1Xgk5ZyJMQXYtNHNsNFZa8sLzyphqpsdJaUDaYqGi3Uf21ebWG116DqjuEVVJ4stKqSLtGLEeNEF28mYWDVti",
  "key3": "5zL46LDzid9xjbkHMhaJ4TvSMwcKnmX2GCrvRuSskyWWkLg1uYY8LxJ9hqnEKVZeTGj57bocCWABypLHRj4327K2",
  "key4": "REpk6c7juSaEcbsjoAQANMdMs2cxVBDQsDeCSyNtNtX9knsZAJFCDRcnFLcL2dT7hMfdezwh3pWosawRRoFJVe8",
  "key5": "3UPSEu23cvP9TtawzXknCM8Lo6huN6QrVENZkvCUgio7bNjYpro1ZXCfesWgUL3qtmvNZA8hYGmTsCup5fjVBrJS",
  "key6": "2G1VNdWGJPSo1Q1n46ywUB96ZdCQ3VgtTaDqU5jJVVjL4jvGLH6mUoRjpJdSfu9S1E1T6jTh15k4dfhg1GeEUUaX",
  "key7": "4mbrC8ANkXTrpCLPGnYUKCQnZsFBg7TcfeouGohdZbeXJx8h8q6DP3ZjYUJqd33Rk5ych2WqwJpFUkYLSebXo1b3",
  "key8": "VFMQLp4Bv4zk5P8atgLjDjDoX61vDyrtwMjBeihDQ2taozH5nGUeCWUVWTsB4ct8ekNTsgCXTnMurEi7vK7dV1G",
  "key9": "2i5eJckDk6MV93ztYmQo5HqmJAERsXYXYBaKv1ystkZUotMtMVAr6XyfdWR2LPZWY6FLiB7VTvTVfAU8oC1hv71o",
  "key10": "5CRmYZxRQp9rrKLxi9sMHxPvfLoK85BDePgVx9XFHMjCGYjfS82mvBN6SotWUeiMbHTsVwBpZWP7k4HhfZjCVozo",
  "key11": "2SSY32LjRFhUHJVBixWPAwgNvc1QKAGwG89aXHqnFo1YzWLAogk3u5zH1o1N23LNQf6adkTztzozkpuZubRZtuAd",
  "key12": "Ci5papfw6MmuhgmkfpsJ2hRbYZWJGVwguigedWMosbNqULHLfgGbYPh6cmGEvXW4ZSybGuhqbBPAnHyznJrvo5n",
  "key13": "KvFCaGjRLWq6UgwdDiKFpfWh5AHPqQXRp2feFz8hR2pJ73s71ksj8ZekbCyvneoyMESjeP3LzY5VvM4z3hwcQ2R",
  "key14": "2C33vaT4vAhsGeK1u6pbHduxbEPhM3sMt4wupznmQZjKE9jwbd5X451jNKVV6e6BKSu6M7SMQCoppEuP3RHLQSdM",
  "key15": "3sGGwS3KGszxHPMofWET4hhAUX8oEyVv9JPaK7i7GaJr6k5wXvJe2bKp9jVd9vyrvQGRA53uHKRqbEtLtD8UzVfn",
  "key16": "5Yr1mLLiuEXKeJ1FoHy9T6f1XNjZAjjHQAab3PmDiHPfgpRUbjqEKXsvWNRL1bZFvrfmxnpJeGUtJUYwuNLyhSpn",
  "key17": "3UuCihRnZofQALkW3PegRgAxhWXKxfdFpyYECi8CwbQC7FedCHec7WisovamCxPhDSy5RUm57zEX2aZbVKu8bkZF",
  "key18": "3WDnwGyfMAorbPeRy5BM2qZMjDhZffQ37FYbnxNBMk893GxoFWG7HbbYUYX54S3mS155wk2y9vyYZvUjZL2ZynTe",
  "key19": "2K8ppRKEjtk2a7LRgQ39kP3yexKXTqDqro5dsrbVGYMJRFUfvA7u1vjdyR1aatEQxGPZRFfN935H6wufBTrLBHGQ",
  "key20": "3WVejAnctvXzGJgtFgcFqVbwzL1468wbgatwq64nmi6U2idXqSVATc6Knwc16Hoze76qqpvtbZwWeWHhseVJ3byr",
  "key21": "96WhHcNKhZLuxGZjMUC8ssgpizVwJanj8vPfw5jiSMCLjusxopVwG8UTyV9QyFCiW9WBGRYKXU5qWzHTbfg8DwU",
  "key22": "4MBBPidkqi5Xutk6gnQdaWDgKDv6fQaaoRJiddC2kk8AXVngg3bu9J4ewEnich5WHmf3pW2kCNbctwXbH93Fa6AU",
  "key23": "2xpi1ktaf9i7KkVSYV5xrohCHKm9Tih158P474CW9SUBJad7rngst7QHFT3qDQsrQZqZNV4tdVZto7shvhes1iWE",
  "key24": "3kZRtf7JuVLmZYsPEQ9s8XfmDwWsNzaAmmBVXPpD74qiNgWqcx7h8BLwWmWx3ntES4CWdFXeyQcf5nvs6uNm6Nho",
  "key25": "5MWtREQy2aEKdRZrvoQHFDm3tyFMdnbPx4jqtwzwbvTr4MEgzwQyWzgNPMTt6RaZASGxJCQBZMAfbxUFxvUbkrQC",
  "key26": "CzAqXCygjJoVxgRKdetd2swM1awnJdK1wQBhcuHLN51axJgTxZ9j6RAt6S8tQYueWzHssxTHC51ZmTMsDYXTMHS",
  "key27": "2f1kDMGHSCsAwYxUNzunDSMEUC5BwPRnwryJ1KzJErpncF7PRCvz4p2yyUDoFnq48euxbhGVTL8EDq7xfzm2Ed5X",
  "key28": "2gpnUXMyqwUiU2KHwAD4X1XmwiMsRPwkQkpcuSM2VXJM7n2Am1n17NZ554jiRphWkXPW9XNg6Ji92WQPS9r1VmGY",
  "key29": "55CbaDxB8ZN14stjW84U2ByYYixaSxeBcRwYWS2EEogqRNn52SzPKJbMfGTuc3TZMDApRNqhMUBnVAg4gv5wjCGM",
  "key30": "4ZcQAL8TKxaXGn1Zotz6Zs8mJncZ3r3kt9pnPXincqXMYbrXRXEsXT16X4HHqrKaKhRxyZ9AtBpJYjgZ9Nd3YKP3",
  "key31": "5m47YuQ2k3z1w9dy51zNi6ocSiVStkYPHtEADZgPFL9z2WCCnLZuZc755vgaRBZWFQ6HuBrcgoBXirVpgBCY1ZeH",
  "key32": "3MQ8jz5YmPTiuHFgRMvVggRdA967mVE1nAXKa9ASgajCcQGnrY4RFejnVfN4ZAfaWXq8PmPvb7H2ike6StvoCibH"
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
