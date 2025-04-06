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
    "2u1QW8AFeMV2DvCu3oZkvQ1yJrxQ2SBVsWDi7m4cJ5yWfkezTZNRpfANZHaqLFso8YdUUnfKL6dHwwwrkxsudysY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Twf8EzjmsgKEgVoqhWuGijDiTC2G6UdPhVU9tra6JRvLBREzeUE4Y9TXq274cv8DQZZLpfs54NoWRpJcRhSc5PX",
  "key1": "5PDQtnZR2YxhCrYhv2bBDoocidZyvgR9ZFEDf4sEGh71ewDcHnJrjvvYGSPSzamB1hqGihnu1E3m4HHom5TBsCqv",
  "key2": "Acq5cXw7WDwDidYHejrBDYvgWn7gu1wQynVPN8ToAgLzVQ1kFsLHgLuRj9Lb2vRdkap6vz7c1ur3WCQmvzjAjTi",
  "key3": "5iAr1JeCZHH7gndBTP5q36U8YYHpcXnfur4hBEncwLbyWRAAmmZo51mfJ9wvY43TPnXsaWXUt4zR49a8KN7ZAwpb",
  "key4": "2c6padBcfZZF5581ihg7CXTSSGghThTt5Y6p7QbuTJQaLr2eWUUPbhv45wtgcFcnQkALDexE3QjRDRmkD2vurGoH",
  "key5": "4Gttq51Xu1B63GpAEZxtRR9Q7g3BFoNiR5PuVmhdzk4ff1aVr8k4Q4tBNqhCpvptoq7XNuqEYR23mKCx5fNpVEHC",
  "key6": "3AAbfGp9Vz5NNTx31LKwePCj6zeQFajgxAveHHj6GYUb2ockNTt2SWumaQHEBz3hLEakiQAMNNQ5C1yMSTgi2EnF",
  "key7": "2Mc2Y5z9iyycp9MZYLkoGGAWguSyYqCLe6eRCDDuM1G5cEY1jBuUaS66fGPzGwsPP9ScMUyMpJKfs8yb5aFDCYP7",
  "key8": "4s4iDqJXfmUGS194FvGpn8iULkSp85wFAzcDMGdSXz4xFQcRqrTQ3iSDZKcB179oxbv7tczaLV7igBduAb81QZjF",
  "key9": "662qtkR4x9feNMWyem5gBkBYjRufVDUqsXcGU3t37eiimX3vx4MYmBWoT5PsFG4duYos37wDioCA7hPqVCW2Qd13",
  "key10": "VXknkiCXh6vYDrPBd83d1JxrfBU2CviW11n9UJ4gBgXjkK7tgMeumXCNPaPfqhB5b9T9qE72hXh69snt3qba5R9",
  "key11": "6SjCLP7e51UwwfyZFqnRMHbfsHNYYVZutdqyaaS1mrJNBjQ1KH6F4yGJXWZjTZDUaRynXjPummaK4625FHwqHHS",
  "key12": "5nn37o1v5Bmz5QRwjikkXTFmCv9usbAHj7TANbcGFyKrPWrFU7Tkx6gzfXjX9pMveiYVrUxXLFuA1UGHjiEgqLdN",
  "key13": "54EgfCgsHejjmLVANkXP7rzkEdejhsKJb5X9EqyyqKrp9Mtt1jBDcCFdEPa269Nm4CjvVawfte5pM95BGuwGyzCF",
  "key14": "4d4LGJTnnXuwte9ZEwY67Dr1N6NuiLFXsB5AfJWfJfNN5Pm7GpjbuGx9Xcn7KRWMS2UVqNHYuaFg4YXj4Yy3xUTW",
  "key15": "4soRSmPaNUZmmmqKbVzRng7CBNj23De7MGJgrZGcv2hYnmydrqZFW23NaYqct2jRamKQHKJmaDJwLp5srhSGjR9h",
  "key16": "59erfkWokUfowmzpe5HsjtEHNsURWpinyNJpPfT5asAsCFysCbDbcFKfYG8U5CzobEK3nbnCCiGkaCbKssfF7EQJ",
  "key17": "39qRqY1bzTZaDaLdRANuNhpBVVvRCMkGEsFvps3WSQkC2ruRcUiZD1JqdEE3Y65WFW9kF4MCoinjdgTEj2qCDvMc",
  "key18": "3jesmbwtT9mNrP344ztNBChwTqwATPV6ah8whGNQ2LnyeGpRbqw5z2rzD6kbtV3JiKD2oYkNFbybzwd4FPqA5cUm",
  "key19": "67EoGGyJbqQko3DofdJC92HLuYYfVzf7b4Erp1Ep1NQZax7kvuKejH28ZMvfn3n2Yu4xvCWqa59ARK7qLWhwGVWL",
  "key20": "22CUtP972anWkqKZ4iRVvx1UpxiYuyiEw2s3EfRFaHw3FRZrwWejALbWXZoCXgPWpHwEdPF5FdZRejjbJ2Jm92jL",
  "key21": "fe3KXHNXygbaCwBHDBygvyEXAftCDQGyKe11HzbYSM4CvvWTN4WEHrkFhXJUu4evnW8PkyFEDSgtoJKK3ELHhwY",
  "key22": "qzLKpVsyRiHXifxzsJxKCnjkKzXzu6hQxdw9ez1P2rcv12tYmhHXKSsoXU2DUMzRvPB2uxDXbCP7Wj6RQxUVGFt",
  "key23": "2UyuqkfAyNSTpdsNnxDdfhCKhGfzkizEpf5gaL8X3ifQP7LSB69JW6ETLsjpLBDg5LkzPvEpNikYze2FUKHqvYqV",
  "key24": "DTyaYcKNbEBQoKwrfSQ7Er1ZZjLANwct1tXZqGM9zp31KNYLYo3qJtS6crwABuzNq5znxa4caFm4C8xmohA7GAb",
  "key25": "666ZxvpHSoqbmgvPTHNcEQ8MoJcQvvddCFmNW87cLwy2tHmo5suhmSfCYfPaW27qqEHV3SCUdMpeEY9ybeH6paf5",
  "key26": "5yxvENt1ZXyceocsMedyZCtSa4h35wP5SbYGEbnZzheoaC1RBa1nrvZFgzmgqFNAktS4LyGdJP3um7foRbUtxfDd",
  "key27": "2697u78CvfnZWM1NZMQqXF8DahEsrBKBamHMU1cdaCRdDgFAd95vyPLYa88Pr1srN5HGoqtfVtsq2SUE2J5ubVhj",
  "key28": "yZGvVxz7DCNGTa2MvTwEr4qzHaFtupGAmpBwY6rnYti9XbZnzRzBEb1qzHZsJfTfoMwkeJqQ1L6Rm7PbhDkF1Zj",
  "key29": "5H2ULNKNqTTHRR3Txna2kbMxEqJgP1BYncfFtHRGHjNe9fzcvxqPPmERuPi9CJmDtjQ6SiyyRbDMf6Txo4Si8uPs",
  "key30": "36xfDqdrj1amf2hDFHb7CKJxVZhdLo73wN1iZ9e6XoK6kifs1oUHWBmRZzKTwFo9Ui7sxpW2LFvowYPCw3qtBZTA",
  "key31": "28Bgxn7VMxd2y645M7XXe3YEuY84eWawY1ESr5EvtbebxjkH1F36Y2Fbv64AuEbE43j72Uo4fCa4Yib1eixJy86G",
  "key32": "4h96PXbCjMUNwYLACXPYYFGVok6iqgCZRevdQBpWDkvSHW53awoSCy3f5H8EZveKFttfFhTDtLzbf2oMUmWrTttq",
  "key33": "HdnALrZNBPP4GWdqwzWCabisTNTDknEdfh9To6ESNpWpHdDunuEt8GbMRJVsQbxKqAP5tGL1ovsGe11ptiS8iJU",
  "key34": "jrWJfjDdQYdkwMqUH23ah1KezwRqVWXTtX9iBMTVZCQtYPbwfKfQN2cFFLuQENYiQypnH3GCDQDKffXCpFShZq8",
  "key35": "JEuSv7QSUnvkiQqsGCL6zw5X1LJJHVs83yUNY2VLCXtYuTVP6wnJ65q5pcej6sUvJvgbaEZDfh2A4uv4RoHecwM",
  "key36": "4z9JbUpzWoThprE7nMRx9ZkxtWWJk3wzveMXC1FPyc5qnu81t88h8wNQyGNH2JCWa6eLjV14gHEfLPe82iAEu1ed",
  "key37": "BJPBpnsTmxtscm3JQy5CwDWeXWGrFdVT1SnYZrQCj7xvRVX4jLY8WfVnDaewgri82yps6sUvr7hp3UeTPvjBUNN",
  "key38": "5uJospb9CHkopJFMQAqKrYrQCdY3na1R5LYG6caYB2szq75P1xhiDyF6DdqdNU6KNWkXJPJLTFtgv8bZa7UUX9Zi",
  "key39": "2bMBcEqsj5Hn5toXGoZWZxtiTEMW8ivVs29WRuNgkXDGvmz26qzSURtuuBfr8L6Cmt23w2v77PPFWB5MYnAyzFkB",
  "key40": "2Wcm9PPtmpXkiNo8ehydQ1MwgEnxAYK4WmbgB8v3Q5jgCYyYFiPnjx2gZkgUuP6tjF5b5L9Lp437jb4hEAJo1jMt",
  "key41": "5mGPARsV4EmEAWy2AbvsZLQsc7ySjAfGGHievcEAhkjev1Nhxdw3tDppVDB8SSRNqCDuGNv4c5dfw1m5tXDrwDUc",
  "key42": "25ejgDuW3orHmyA7LxEqwp3tnHSUFfBBaKz16vqGmuRNxEcroWUjLqkJiGuA694P4giFviMdgpvRywPZz82e6UZ6",
  "key43": "5AvVkFo6hrpgSzGkqeSG5SpUdn6Z1Wf5Ni5RRcpVpFNLUmkRybmkvXpyTJB7s2LcvfUeSaApqFTcprpzg4uzpNF6",
  "key44": "2CBdy8otzZqjUX1ckfDNmMozAoCHLD8VjaB58pgfdBFRovrhnMLWxvRGECg6dhTtApMtKWBJtHGHpJy9pNaMkQp7"
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
