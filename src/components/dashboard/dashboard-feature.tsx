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
    "P8GVHQEW5D9jznoPEjH8yqncaf8QdGk3py3aBVzSJWxCzF3XdGY9232xqd56rnzzhyZWeuNFZgrmT32VHjzjXKN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XUhc6F4KSpvBEpCi8sEUK983oTLTzResF1KfJQhg3dxu7RrQEUvKiG2Lw4cS59UpwUWbiUZfexe6QJJy79om924",
  "key1": "5mZGBD8QZZCTpFXoEw6qAR2vwuXMq9qP6yv2WKHmmW4i7RtWBeUPuCCwQKpnBinykQTu9mWFDUWPF9k8ccUUigeQ",
  "key2": "5is4qmufnQSxxKyL89jSbd8ayxgowEBvrPejznUBGf9Te3fSARojTZXGW2uqPCRmhFUqN25MKCnF1ERV5AbSWBcE",
  "key3": "5SRWrsST8UcvBfNdeC3VfCDb6RBzwvTZkJDsn2urFYhhaoHUZponKGi2Cu9q1hnxiyGPa7LEb9QQb77osysXFavM",
  "key4": "Es9BZVBWT4E82tuDsSzLeb2pZVjCJbioGCC1Y2AhUAoATcf2SWYiKkiiwoMpQsF63mLkRhE7TFigkM8ZcyfVNtp",
  "key5": "4AnEHoMqiTxvWsVvXyUFGgAKjdGgEHtcNiP2w6RiQJYFYzJvwDPohBhEetXNf5gejMyuo1En1s2hh1LQ1GimcPgQ",
  "key6": "4nYPcabw6gpaAyBBumVnVMR2zaaiZbQfoxCKsAR14CQ2xbM6wykzjMfRUyW9cw2qs5Aez4qBTR6MDonpL9qx9KB7",
  "key7": "2NB5vyFS5LR864mfD8xwjATbUC3prXjvRZpT1vVtVhzKthS12c8mPnvv9WozW4BF2qZ37ynDJ3Uikjk81waGuooL",
  "key8": "42wFt37L7cPgbkd5HxpSpNFAMTous5Eg5gxi5svXRfpox7u4w2TnVkdFsZ77vqdaMMHLJpwFCbAMXg8uNUxNXkZQ",
  "key9": "2TQBS1QqpqVm7n4LD39GxYxEGXnSAKgRbVZouET1H58zW26tGh8wFXt4CjGzjejJpk4iMGTQz2zCkPHR3Dm8QEqC",
  "key10": "4KzXprxfwUE3BedurBoR8YiarS5frHpXbZSKVVD2CCspt3LPyfpXHWKPNLpXNbca1ppC5tjHDq61nC4eRCzDTddd",
  "key11": "q2GZjxkrf2prUVyDfmNm2X7UPgTFi2XEWJA1u9NBcj3HZEqDteFsrXvzDCZqe3gXE4qmidE8ti9rY7Ux6SZBp5B",
  "key12": "ZXUeQXhREekJ8RzCjpZL3sQu9NGfa1hNtwd9Mu4wsURPTJQdy2pPVSrX9p1H5acGXXNUcUhgEZLwjhdYXk8T7jV",
  "key13": "2wDctsFQGrCRkQuU1hU4MB1R45KjaBPi7NT88rNbTU7urxiFuotJhPmRQuyKXYxFRSsh8UY4SWzH3hoYYgfByyW7",
  "key14": "3seRv3SzaoVDgzmx5gjrpT4asL4h514ADCTxJisaoaaehaPUDLjTe1hVcQxcx5wzHX6gWk9fREraTcuR6HyrKveU",
  "key15": "2JMZcezzBC2MdkAXsNJREYCAfraonx2NsrEVCqP6a7oNcS6AoXUdfCJn2tW9AMsUJ9UaUsUynrEg32dkcKonM7sz",
  "key16": "3uhURhfnKD8EbzMvCaS5bNXN1GDnR81eAuJhvJwYWmNqLc3C675JEFu9bFsMN1qQ7Wc4vwq4btR6xvnSNfUwK36n",
  "key17": "4y1V26vZXbdRgyFgUhXaDYxdAVyB9wmpSn9WmSKh1aY4utVvrrDy1fFkgQsYYEnzSPg8cLaY66WnGhJppP8DKwgw",
  "key18": "3mFcKHxmELseCBvJbG3h9RBEjJxMGN2ArjGg32CL763YC3osHX1Gzb2ifazeTJJggxKMUGvDGXfZAYTg759CFFBE",
  "key19": "2yBePmUT1ZeaF3RhnVVczXvoA4qxfAdgwKDe9BG3YYbmZm2ZFaKvRBo5CJc1e57RwMzJrBucafGV6xtta3DbRmTh",
  "key20": "2ezWEWtxSiNzPWjQKiWzUi8mR4WvdFL1Bgti8Y5bQe1iSU9t3YTHNFuQziUhPQbsZZBoiPVbSUG673dbYdjcHi1V",
  "key21": "DehZAyNpyQrzAt5veL6nvMdYLyBqKjXSPGQmHeySbeCnx7aanz5DhonHgpPssNjJaB9fViRn58JaoAxEGrS31y8",
  "key22": "4E5VBFu46X9qdxgCK8rHR7abUVQB98xGDrRpDfbRB9K8khW6xs12fNrNp3ir2SJ4F7Lv4u1HoK9zjkbj4EogvHoD",
  "key23": "4a3BwDs1k1nmb1uVjpkgFQjXM6GadJjLxBZXkEpVDsrdAcfee9PdSEWkCdnofnxwqGEkPKYAZnotL6vQdYJcG3xx",
  "key24": "57QyUFRUrmK6N19bK5sVpffSt6nDuC9Xq4XPUBZCs7C2Jwpjh5SMXsyuApsPLovRGWsd2fs5exujtPZaN4H9NaKE",
  "key25": "4xbdPTDTz5KbMNzZvFZxsbjTx15B8F5GNZBRtGknq7Zqof5jePBnh4YWVqcNkKMoim9c1QzuAgvsgnarEKpQb7Mh",
  "key26": "4ZHZixHPkNAwePjB3q8L7GvT4octXWYiRUCLsRyVaM2TQCWpppYgqBNozV9DAcw4hdZSjz6PCYB9cFREFSx7PRPV",
  "key27": "46BhP5D4ThD3vCNgT4otNMfMHBcWsqc5Pj7CRYmzX8BsUSHP8GStL3SZZUCM7ASRWftKhdvgbbpeTyaVju8GPVEx",
  "key28": "3wrZ17VgcuZr43kGJqt9jJCKTb4zqF2kX5w5dRH8zeKAjz3z9961VCjVwkbt5H7ZNvMHY8cjqc6dVecRW5Fx4kJa",
  "key29": "9vSiNx6fXHGidjaHQF5SRstyVLgfFQUSpN8uoM2YQExhkJgkHqYoS6gd9kZ6cp7XG1vHUYJJKcemcXLFwQcHpjK",
  "key30": "38eSpMCK4AyQJUKGWFPWyeSsmSaHJ9GJ6u2ocjUk6Hx9WA6XX4PNwbMRiMeAEV22orJUqRauaHsgdUn7xffioBLD",
  "key31": "2bLY66p4E8Jv7F2rhXdCkxhT6BtcdfP5FLd3upSqVA1DBe7DnEcc3ZqLfPYS4mdSU8J4rEECwkCNMfymx2SUzzPh",
  "key32": "8KBEUPDhwJcDtqFGNpxF6nS4mQvaq7jic2CGPzE8EupHB7dqU7pHsasFNpNcodC4Hh19Ha8ndsoLsGgVGMLMugy",
  "key33": "4V9tth1ebC2eEjKexzqQcsxAHmXPzbFu6npBzXtmkRPadgzYm5RzKF9aLjSY76TnMt3XutvkCZx5FKCEtA33Lq8S",
  "key34": "64EfKb4FwPDRNwM1g15khYE98AKjzSDaxMHJEMosjn963VSu4Hdf9YiUPvqsZhnigfAE8jXi3A6yHsX7kwN6ekpG",
  "key35": "3nHpR7Z9puotFStXUAKCXrp4A3JnHJnJmpNmg7EcB3BBJRVKSm2hStnY8ffiqWBCtyAH3DU99brD9ZQoNs52yDRg",
  "key36": "21oHaYn7eMkZktvNV8x37b2gbMnupahizr9dTYi8r2cxCmW7BeNUVfHnUCXnosXmNjc2BasekG1TQavTm7R3bQKm",
  "key37": "LVUWaidYfMd3DGdQheaFeZpmq4Pfy6ieuZMPkdxwJM5okRDyazvZdMmvgVLHS43AfWEy8yutEY5urP4SUkvFb8t",
  "key38": "xbuWTSiNvvK2DmKhUtZeoRU9zgxNBfQn1SCzsvvyDPowRGFj4VhDs6Mjic1Aiq7FUv62CkiQZhR1oD4YG8zvUz1",
  "key39": "jZBtrchmnHGnaiFSTrm784u8CFwRx6tFPG9UhjTchLyLZLT4AhtiVfH2qgLF6zMztRR83zLHT2SjBr9J4zfzjiT",
  "key40": "Rqi7vwV2RsKnipHk64VvPPZ9WHvCyLqAHZT3jFJQzWi6GzBKs1AiqvekdTZW41uqxeX48aJB3JiDMxLBhFersXN",
  "key41": "2bCgR95pZP9tXjSdPYfZ6QmZiGQvfLbTZSccDx9b64tgjZtQXzyT2ATUP2doHA1x9wStbBEJg7HSHSVE1dLHU6G5",
  "key42": "5qxhGn3v8QUXL6xU4QwRfM6UPVvpAbknF7wYV34CeniR8ZHoga7kc2mJ2YjfbozvtqC9VaSuaiwi9TxZpFSWuZLp",
  "key43": "M7xikA1maXpDxPNy7cfJFcHdJfiAeJwsCrckNn9LQSAV3c5jB85RH4WdVQw5Av5FSq1km6RtN7FZD4YRfEZkz7m",
  "key44": "5zvrLe8EicGXNJHyeNFQ5JDAvgPFTvvTFsGPKRPNtFKtowKw7H7E2d2QJQsBpaNnxJdtbxGUXd8XgDUNgESsFv77",
  "key45": "5TkbKArTCeBwyX8ztbe3pkwag9W7ck1f4DNyqgrjjMP3H1DFrKQG5CsPs2EdNunKc1DERhCJw39kgaycLEmtT3ij"
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
