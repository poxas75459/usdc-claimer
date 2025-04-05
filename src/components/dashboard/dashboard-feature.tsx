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
    "4hJsm54BuMtuVYB8nrXKm1ZbhK5vQaF2AjWre8N34DJkBoDaBGYSk9gNor6aVHy4ipyxpRcnyWxmPA7i7ZKVRq3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Y3kLHv2MvhBYvibpm3s4kUBfwCPiKK7zE8PYFea7UUe55JLUFMyrec3A8Nk4owCkkj3ChgRFnsfaknJ8NsuA9e",
  "key1": "EY5MLvWA5TKkVpcQ6rbT47hNMeEYCppFaPE5purL1454UwPbYBv1fJzpbJXFYpsmTFnNSoJaB6YaCvUCMQ8CKrs",
  "key2": "4Q1WsxSw7E4zW3djTF8Qu8VwmbkmVoDuX6ZxQCQRfAJKwm2KCGjkKMj6eMS5z5JaGhF4bY4gYfyYrRA31UTiRoT1",
  "key3": "4PEpSMgz47h59Zkw9AsnmHRxoBBPP3hZd8EfESWxFxSZMWTLFVT9NxAtt1YvvXhPDitFG1HmCXGnUmukECyVH7wx",
  "key4": "3vn7jhPXMjJhoJTqeNYEzD499A3XeP5vx6Z6cZ8EMF3YREZT6nrxmJLTCDXy6wJDk6rwQQKf2AWzuABQsDSaaPiT",
  "key5": "5Z7pcb7BKoNah7Mc1HNBWpkEHWG5QWdDXq34an5T1vmXfk7YHJDtdp1ZJFhdu9WWXdjHrWpTZ8oEaEbhBQotLqJM",
  "key6": "5TS1q8AMAfwQyGdshFo4p8FBbdxJrWu1qXfGBY3MhKXKGQWM8gvXujh6zjGBhhue2b1J6YKJz2th9i2JQhyvBg6b",
  "key7": "aiv8ua3946yXYggUgTHKEnxMqQtbJwpz3ffY563DFCMJ4uFmV5kPKnuBEHRyCFJTkm19E8rLqmt1dAmYBH8qYZC",
  "key8": "3cynTpjsXZe3Hy61yDcvm3SjM6pN7NZuRad3WbgRg3gRLhkBLtiM5YTCbcQ8i7MHZGe5h1GbYbXaaYrTA953BY6N",
  "key9": "5Zpuetu1cetQMToDoMzNgrAddT5fMrRPHdtbv8D2wH7FGKfWRJJmq3fKUXZhYx35TsYtHVgy6e7tRiwGU1LdEzjy",
  "key10": "3j4cQ6P2k2E2W62pUbVXNozW9NW5VnWZcdDsUCmkWfUkf1rFKms6oX5keBX1SJDFWRsEYSBqBugScXPJMyhnPB1Z",
  "key11": "25eEKSXLPPF2k3ajkisxBWmQ7Pyz8ZkmvCmQteBm5a3byP3jjUSgpXs1fVL3ZhrtMktnkMfuNn2FRKmWpB25KU5i",
  "key12": "3f8gA6pNXKwdu4HHA8YH2FpTFcav7WWVJwAAHLPaQC1fcPn5Aj2ATHjF3bftwBZUgyqxZfoNf7PMEUkUMPsSRcTk",
  "key13": "4bs6ygCVCYWrvbCamtVSzhipyoNGsYH44gnkqxkK2JfyaQkdK9f2rHiGd9yxnj9qiDjMEzSTq2ZXcAEFKNFtnkgv",
  "key14": "5oYw2J1CvGVkQzdHcwP6BCjFpvEACYin54dTM2EBpURpcG3GsQ6ohguvEMmxsdUDNtni7HfipDFczvj4tNhJyKvg",
  "key15": "4cFP6AatCLeATrKhRXj4oeu9jdkS636d9Tfn2Vnc1X3wHxzMUhCpkPov2igYRAKsPeC2MRoxnxyace1UuibuL8Ah",
  "key16": "4iWFsjp7vtqhoEkREkZcdVi1Tqc4VkTy8RNtg6r3gpPfEx2Zw9CpNXP685dDdwH4oFnXBUQ5WuzcZJ9pX764MZ4g",
  "key17": "9k65czRn4pfU1i47QgRqB3EMc7JFPxH8VEeAZmT36sxaKEnQc1iUQiqd5V7ukvwbqdPPiZfuTKVSDmzoAHggPiG",
  "key18": "2FQE1JbFwhyRs3vXrFrMb7PNAZry4mhst251VfrBZDe6DW3x2SSBTZpUoMrDcC1FE1rbhhUTBsk4Pfza8EYXQUuF",
  "key19": "Lq4FKsntDcSCfqTRwvSeSrsyn3zSp4pLC2FfG8DC1meeWBLkawHR2UoMxcMkqhmcJovdvfy6zxbUUgMPQqiriTp",
  "key20": "2wieCuCbtFBFjx99ibBLs1Joh6s9czRRRPQKdTe4hKnb4cWnNX8squFJ3qRC2kQJjCMoDAWdA7b3J5M6wscHYQme",
  "key21": "3t5Q9njRnJmdxsAu1RnMrGPXA9tbUEWsgUdTNvhm2bWt1dyLwdbeHGyqVrhQeQ4uFdYeXBQj8XqCNe1jLbuNsPVv",
  "key22": "3j3qJsvDv69RUuxAfvaFeNHfvKW8RTWz6aQtrXKQWq1RCExnda8rEftQKgxEm87hH3jY2KCoeGGRmWkWgnyZvuTD",
  "key23": "25nrPPZMbmTuQgxFQiFmyV9iuc6hCL9uyK8MvtR58ANbu3TcGdB7f3dtQYaGrNZUY3jExP97H2PtasDJgsV5GaPs",
  "key24": "4gmTM1kx47in3mwLtoLqJWtoMwZiHZCGR2Hitb2PfvDQurzERAanASk2vUAyHVSPzrP938GmEjk2BR1Lny51GbmE",
  "key25": "3xV1jmL5pfgZ8K93tS4L1BR8A7uGNKG8UPjaUXMkSKyboaiQkKJxB3XGi8Hg3H7GeiTkLoiZhE1TbtpwDA5nmpKX",
  "key26": "5sgBF58ctYaCNrx6a2un7yg6xKQhK7aBbAPu2PLPFFq8MkV3Hy3mGjKR3YCSQUHC45462X1T344ULPPNxmJN65iN",
  "key27": "46pEFdbZ7GHAn3HkJ9voXufGC7UTuyvtNAkcNWXAEtJcCuPinAkFLSZ5fAz6RMQr2gHyKYhuDxWG1qRtCCyAKSga",
  "key28": "2jmwXAYS1YKzkkLeLuFG6LeAp64Zj2JdbKAVBD9QhhKjJppMxkysrY6jesAfe6nPLQKXSbmAjGeaivqN8SciVmjw",
  "key29": "5tYFhBx2Q4SkjcUx8oRXkHYqho9Axm2H6qtovotbkERzESfLJC1sExgK3e6jeoGEnh3SVSDxqKRgyZRgY9VKQnbj",
  "key30": "4kmrSARrQTRh7ZXsYDcDDqF7RLiuNDHw5JC8EcGw1CECM9PZ6VgNB54WjSBEtCamH15rzjQK3arV24o7AbSDSxVS",
  "key31": "HA3RSAyWW6VQQjp8cZdV32boTZtmpb7UkqQ5zVNhX99pPCwgv9QGMPANFDhsPCvLYMHRgzdhPw7efCDsbGqUsmP",
  "key32": "3D4v6MAf5swS1mjcW4x5ZoBHxnMSbyFsHkacoeJhLZA1bQFHBGpXYdxKCxPRm5EPxhq23A2yvuTcdZDhgoBBsQQC",
  "key33": "2LmtvE5DQtRpJ1wgTCxdAeM2hemmK9eTyZiWL9MC6QxRap2vEsgqmDziknzGfrjdSJqSkoYB4bJJp35DTXoNY9Bs",
  "key34": "2qe4P2dVVrFcsoTGT99v6Q1kLz5A56DF7vpo9J5BwBaKC1o8pzfJPMF2ytwtUVcGBspVPktdkBLKNP2cuu8H5LoD",
  "key35": "5BtUQkRsaa854doTaBXjk4cZmKhKC8xQEWAiKLBNZDtjubxnFYuZqPWKRGsMEtnh1ttQSz7dHYCtPruSRSwRpdux",
  "key36": "57e71VApDB3LScE93TpgR2a8u7czNYe1myr9HUna71FnupGhmfSKKNmdTccPvedt12xsXitMfjDXQ7Sb2LmXB59m",
  "key37": "418cM2x8XB7VPryhQmUraW81NdZWbqXx5v4uW5GgMeDRNB18tsKTRcNzP44fExKML2SkiX4tanyVts2vX6eGbJTL",
  "key38": "3N2hR1xvAYUH3Ufcc3m2y6p2JawMh4RmPSVJ9Rg7vRJj3ezk836qYPr8PE39D4UXQSsFeMRXg9TNM9yWmrJjS1rf",
  "key39": "4sDC9BdbvREubFcgq6pWZqgnWWgdHNK4qZLP9TKXgQd6hSndycrQMZbrmQY8HxJwRFLJtUXnwysQKNEmGgSS3kpP",
  "key40": "5iHXirXWcPHcCUpkZePLB1prZ2ZedqU5qLnfHh8gvcs2SGNzQvZhVKc512ySEiwiDgfhpnmaVGQjmqS7YBFLHhhU",
  "key41": "5Bhg1SeYUymHTWnPFSmqWwmogW5us8ij9PD7BpD9bag2SAhzEbftxKH6L36oqrEdHvdDFpqp1BUxZ2fuMaF2MCs5",
  "key42": "29eK1jzEtWMWgsi3oCGX6yXKhbYYqiwPa6ogCxMXE49yXF73fC418UjSqQkZg137h5MzyhECntKqBYLg4d5YnXvS",
  "key43": "5iNte9dvZ7FeH8vMhNX6vaxFJuCZRVhFjwrbWL2TpzHbq7PjegoZeeiELKjpUUaWe9epjygjMY5HaywL9tumJa91",
  "key44": "4KNV8JNN6r2nKDqgRqqc6J8h3CXaRY9fzsNRgwbHmfgawnF28LFBuratpZaDNFtr81YuJwzyGJcwjUR861c12reu",
  "key45": "2an2LbyYzEYpCXAJEo1yPSaGvDf15d4CfNNfTvciB8sVgv3E5bAFVtKx6yDBj3cYmp2CD3vtcpxVYzh994xigrFZ",
  "key46": "78w1fWoSsxk9P9qaWp3rU7vxeadvc2591NuCkqmjfGwJg2saategxHo4UYC1coDP2caqmT9jbEA9Kn7ZW7gAqZr",
  "key47": "12ACW6CJo4JtMEWYeRgYJUjkpbSTTMuHmgSpMMZD3S823zYTYGvU8rizbvjUTWepWjZKKmsus3meDwD1Hb29Pi69",
  "key48": "5YFgYNABG7kSXf8Tfi7ysLumhpdXZzHYZ1gJdsMh8odwUC4aGyU2qWdNyCGU3CkRUG72qy5RikKakP4aDv2DPmFt",
  "key49": "4DweDodv5BDxBDBrqmo9ic4Y6HYWmEzocjCHS3cAn8nWPaL5xdTQ6pB2xk521Rnoz3vwGoFPXNy7GDLhjYtnx2uG"
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
