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
    "4HHa9MSL9uyVw9T7xS7E5o6e9ow4maUuQyZBrtn2yxUKmXBqPdP7Esa2BaFT1MJpDUYYkKXBsxaK8Ni2wrsVTGdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgdwPykfx9ZWqqPUZbVy6xaNeE7DKrCiCJNP1Pc6RSAUC7DyEZJc4YoHNyAfcC2dXdp8DAe1z6jPXbN3ovcDWJh",
  "key1": "5SPMacTEAGph3Z8CfJqU7o5bVJkcoNN7BFyMmad61nrT7UBnFyXX3ywn7fQ3BP8Q3hcmdLD72tpMrWKGUrYfGpxQ",
  "key2": "3es4MTKiPD2uTxdjnrobL8cTZRsTnPoE9JUst2Q3RcBVBtMDgrz2LC4d82cDfX3fjCWzudSegm4vghtzf2eAr4e3",
  "key3": "2cFsKf1vfSH86nfdzf9zq8FkjSKjyj1JLCb1Mn1uKwEnJaeV339MTDjUoLVtY94qCXCpfga8DV4r6w5FyaPLYB1x",
  "key4": "2GdFJtsxrHPo9yE59NuvqTcn6VSgQwze51RzD71HTee42qhb2y7iKLQECdnLVJ1pWcVPRBPDcCBn4RmuZs3Legua",
  "key5": "zG3aWMrq5uNYW6EnBG2SGKNRms6kjQUWDRAhS1iFBc7nTS4AASwFUXdUkp4ZaNiTVYugKajbLbBGATMdq4YW1jg",
  "key6": "2RxJduestndSvKaXR8E2pQ1Z2DJaSLrBGy5hy51GgavKpdC1feCJojh7agYP3XD3LS5B1x7rhJHDCzKnw7s2vKWR",
  "key7": "4duZc6SQ1fXNnurdAF7uuKNMPJKdRof3kKVTNLmgZXm2KsKP7q1J4StwUYNXs2K9vhpHpb3cBNoiiQ2Sgc4FwTN1",
  "key8": "2pecnReDEdBwsKFFfhXMXrSwpjb4xBTXDQtKriciWVCPDXoM7VhaJRdEtxhtwjnoLvjJBce67VeCH5n7bZQ4GXAH",
  "key9": "49MuJWK5qH2ocdct3DS3CiEMbszgy9Yqd3f3x21m1BWeiBLRGpB6ugVVddX6JNTntNGM6W7qv7cTaz7xinEqCpgz",
  "key10": "4wva9eM28ka9A8r29AG9z3a7vDNDzrHxepAuQ3mgqcApbdPpxPgKMVyAKsVneqz5kKaFg1X1XpYmcGRLRx7XGHKe",
  "key11": "4vMzAQxUc2TxxrG1c6Z6YsNJnFVqPxHZQEZMzss1wfgVLC3ySEJbchTaoJHNY7y3woLXxTjGLkgV5CcZBNGEU8yc",
  "key12": "5HH6zaaXKrbc4S6BXQtjcFLSpzBycUUanUmfbtLRwZV8vEoACHBj7qpLUvNdbRDaLppWXT1rpenRZjknmpFeMpio",
  "key13": "3p3hqhkfBZ9QhzAhX1XJQcFvjDFXA8T5Ndv2TzKpRaNvUTRPtYoFxGeKS8mkQUsyKmHXYn6mhhZaZqbmuXa7VvPL",
  "key14": "2wA66aSPZbLM5V7KtrHhQpW5zCfYVA8JebzEGvBvYzHGXaME6av4EpZM5E5NUHDreJtKTEv7mPSCP9UiCVWScGS2",
  "key15": "4FqQB7Kywsu3Luksc9kXRfugXb6Aj64LiG6ozwbNAhZD8uExXeMdrwY1uJ8CoLZ1wjzAEQJZcfkm7dqXV5yFR1Lr",
  "key16": "BDhz5bXkGHAzfF1oFPkwptnQPR3vV45qxMeoby69mik7tekfCe5UfBAHShQnyL69mBGDtX38SMuwpeJQQpXVQcA",
  "key17": "ENFSyFHLcPswErxzSpHLN86hvz5bQ5PQFeHtWHJYbjTHn5mzNhLH5BRB5WqHJJamdRz5tW2DeYwo6hoUebwZCxT",
  "key18": "Mq91nQ52qVB8gmHWcSxRomTVBR8LgRDKHL8kkXkoBhvFkd2RA1zGVhsxP96wowy9e57GLpVUicboZpjPg2yq7Kt",
  "key19": "2Yqquv66vW3sAbLfJMxWYG1jExqm2uqk6N25qVJZUVPDRet4uA5yzQhXfGbRZ8zjLydxDUPFWTqMgMka7Sh11Xdh",
  "key20": "4vq7sfbnbdPzZvMH92dLLmbdtDX3seWJaFanSyARshfZV7fj5yHaXhtWLXYdX5t3vKdCwrdVGcixmxatpStZhzTq",
  "key21": "4r5H2sSE8QsTYK2mNiFkaDYPa56KhYeY8TeeyBumZh8kUKvJgzDLSsjpsdK8NdFEUzipm2c4b1WUKgG92MGkhpi7",
  "key22": "48JND7QmQyhj929yMUYVufb7oKEcju8Uf2UmULpjqSThB5CzniLogPFca5pqankVbgmFvkq1UWB4eeLxkY7amu5Q",
  "key23": "2PYTtmP8TrS2ciXzoxtbJXTfbpAc1g3J7m9i1BMdhhBy16Nwvm83AtZ8VHTa2w8GLr4aDft1Y6Hyc2qLw1jXg7jV",
  "key24": "3Jq4htY3G8hHAo1CHu9pPwMNswWfP5egx5rqyAJv2NkUVgUYiQZ7QTAfWPAbV9EJY1MfQmPuvgufFdTsbWnaRFct",
  "key25": "3WrtC5xLZ6gkBNnDK8aVsDjxnsFVS3qp7nH591pc9qbqST7QN2xp3nR6SCdQz8CyFn8icMsNbfhqER5Fz3V1GhFL",
  "key26": "QU3tismg1ESdybym7cbqq1riqWh6NR5wLgCZRxmo1ETLKoSNUKDjvmBGu4MJsG3nNRHiK3MRwprHqzKz6mS5vKH",
  "key27": "sbiJXvxkKG3rhvUax9eCyG1RoZmc7nXvxXkQdzmVauVXUGNaEKAaGkSxH35S77yLhv9EZVoR4SoF8HeW68Vukxh",
  "key28": "7aVaDJ6ZhchAHcCx9V7potKywtBuQLk6CnkVKEuUamYwFTtk6F5r8eC37jQYc6QdhMNvWQcyuZEPzYXp3mM46YX",
  "key29": "3VoYMB5HnRpo3ZpLbANcKFda3hQnQiXZuc5UtW882D8x8Ffpm9bjKiC9jmXHhGS1eZi4z2mJtRS6nUDptUrkwuJe",
  "key30": "2FLXpKcmsc1WyE2aQEvNaTn8KS36Eg9kN8sMNehH4Jc3caDPyBXKNbDMNeZSuUN9GsBhwuuNRaW4u2XUq3BnHs29",
  "key31": "4rZsxH5rkKuh9ijUDY1rn4mxyHubkfP1Whym4HQCjWRYcJorXd7u2KUqWCBzBkytd8vS7kL3z16uyTemyrnaGFmJ",
  "key32": "nv1SfCVVXSsitaqYpa4Vf3vmhYNKcZRXxoQr1VrUYRN3oX5HtaBm6xu8Ry9KxAjd4YSXSvGwbUNz6sW3ZCkSdgN",
  "key33": "SzkzHMQ5rFq7YJafzAaJi1nDXW2fW5XB929mkCwyW7yMKci58X2DyXamDsTPjFVdyvi8ekBZ9zjV2KLhxeq9pgg",
  "key34": "5qqFABcjPy5PC3wRmktSVE8rCbErTqth6DmaVgihzdTCN8KWKNigCb4Psw7ovbd849CwGZKgWNXBQrYURTASpJKb",
  "key35": "ia4ZttabaM8nbRoXTZRMKJDLKxAaVrfq5TNaGWpdrCG3HJ6uHzCbaYLiQk2VFd4pD5yubHrXwLWvtJ4zJgA6WSD",
  "key36": "4ps1yFwWkzG7QGSiGDnMp8WkK2KGhr3U7eJGAJUJyDpnGuUBBgFc82GWooS5HLVXXFCALkDfZQjzEWR6fTafKDCg",
  "key37": "3RQCEqBdAVm1Ev1yB3PzzmqbKzFkrECeG5KsR8wSWD8Acu2GKao6T2bBdCS6JHfPfcXaMRwdPcd3XEKEDyanAiqE",
  "key38": "4bjsxjtgd2GbteoSecNJy6T4WSYTL59AQEi5tWpgfWo9CjHZ4rW34WYumnTUVZqNj6Nsj3uytMZhAnszCzWhiKJw",
  "key39": "24vGEYHvL9PZyhb6LNQk8FseKTrzMXG7xoNMrQQcH7VRSvJUyPNAquDLEP8xivfqp4yMX4PQgW8H9J9oQLB2yGAF",
  "key40": "2QLaSAHcRfYAQUb6apCY3tj7PbyxMwrRGuZNMFbBCC9tBeHVUokmzkjD8xawm8eaPAz1EshMCCNZkF6vikkF9YwD",
  "key41": "36GXhiEgG377eH5tUtTdKGdqg753wiMFTWYnSU6sk1c4Yoy8PxfjN82TFSvMTD9c4XAmHC7ow7UxRxeZpMUmT53D",
  "key42": "5bapSMRPSeTEpx5sigW6GaeojQd9WKvwTki4rVNjpVpojkgvifNyKE736tCNJ8h94UF5Tc1tZhXzKsV3g6NrQEUf",
  "key43": "2dD1pwKXpWhD6HEj924AW2y3g8ZbMehECcELJX8b45QbGoRK8HZ9J8PQtnebc8ZhqwgwrpJUPLQQYPs7y8nfqANa",
  "key44": "sCDaxVBjNFaEHgaH2WvoDRtW5vYRzvo797Smid5JhLoMM3MtpFbKUk1qXx7xVWrEvFUVmuv7wkJKrFjF7ujao9M",
  "key45": "meZiJ4JHjfWkKXbHykv4Po4wRL1jwtQJapkgBrs7dy5k64QMgSwREyrL9n3jVryESqZnRrHwsNZGvA9C6n8Mhud",
  "key46": "252qChQLu4VMYXG8FmwAizuaL8cEC814SrtkCe5hpv2KzLQ3KaL3k1HJKJHnAu86ZY2LhcyCf12zaSHRfUc6BHsR",
  "key47": "2bpk67Us6MJ18RY46EVf1EXUZ9AA4c7anPzAjurDb1Ec9t3hEDLD9QyLjF2ckrPttvzK1HuuqkcRwXNQukZCWKUb",
  "key48": "32trz4dT6eYvQRHnnpJtGcNzNVudxDdh9BZPsspA9zsZdMnPME1p8EfNw4YyiQLnki4iG5Fi29c69fUKksXcwHM4"
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
