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
    "425zYYPD2cdDd8fogEpYPqyh91bGkJ96MwN1wHjt1YoB9ekQdqstK38SiC9hPjJm2ivQsW1PHM3X3XkenLbe4a64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jm1XYRtwoHkQ39wr82MFQjrVRjqWL55TqE3RbDhvVk7AByeF5FMp7pWRLX6ebyyUocPNXbbYTiBBwftjh5nLm84",
  "key1": "5yQACvooX5SFmNU6LTqZ4Dt4mq79m47xXfqkvivx6ezN1wrKCiw16R41KoFVwsKC8zEz4RA1PpqzHxyET8M9pgRs",
  "key2": "LtycoNgE89zpkZ1PNpUUkVtJnht3UroN5ygaEd5FZ8fz4Dtk41TWoUVm2jstUe9JBivHdYbmo5aLkrw4T1mC1oT",
  "key3": "7mZNk4vxTxFRU4BkLBeQrcKTTLrRDCHZePcsq31itv3h5ds2VDhZs9iJS1jxa8EvnPLLnoCXL8X8B9a7yhqGQVb",
  "key4": "3fBC1omEDBYBbFkkLv3RSD9t95wUas2eYptSjKj8GhLBe57WPvcvoBTvt23XFzFWMtBBbyM3FnkJn7nwdFT1ePUu",
  "key5": "dvv5dUrzyooWoov3ygK8FEkNWkzXoGwuZ3qHpexaT663L9yWnYVVCKpa5qGvDFmpreTd9WrTiiQ3gxWDX2bcaQ4",
  "key6": "3cysMJoWvH259TuKhJiNTMfsqpcdyYv6ENL9jmWvfkopwDksmKhC6wvwmm1cEo7BKZUFD6MTYDzLn4qxsf6vHrDU",
  "key7": "2VZ8iBWoumppqt4swKXYTQJ6EUwfqQtBXDTdYAij8g87gw6QUUB82TAjFJG2AXDcCGWRMC5E4yHLTZsx81CuJcdS",
  "key8": "3VuJj1xjaJSK6DxiiQETjiHLohgQ4jSx5ZmGL53tTqBH4cVi8aufnfiGG7y7awQdueKPoYp8MXtEgjKyHhuBHobL",
  "key9": "48c1UbztuNBXi1CbY6ZxXRFisom9oHxih1YMXyzRvYZ6bbK55BHmMS8SqEzifBUTMLc9QpzwGaqQ2XUc79BuuAwd",
  "key10": "5JVXDrRaeFgM25RYe5SGGJciAbmHtEDqfCw6k8kXWuCdEVNo5LDyKNXRugwWEA8azWvP2CQ3Hd82BRojuDkZDpsQ",
  "key11": "9twDRhXTkeagSnZNuTUcNUd642aCg3r19273vnrcJzfrgHJfWGVdVCB7GMxJ3SgUeAmsghf7B3Hasg5oMw8ALRp",
  "key12": "4qZ7oC8u5ucQYHzbsjjSMQQk4gSo727etZYRDQkuxbo68NAwr3NruQS5NnB9LN2wSFJfGM2PiEubtoNDrqEnnGAw",
  "key13": "61Y4kxw1RWqeyMmAfTce7RfBbzMNCogS688eUgceJtrn74zT6s8kv9hz1xD3CaHZTeik1YsdcRvPNQ1EgPueGPRV",
  "key14": "5cw7GggdS1iZR2kq8kHdhbQpQieDYmjjRNo5qRG2cAbVwevx44S9bXMwXNxXqBktgMFMN5fNjaMRUg8aqiBTFXEu",
  "key15": "5PD5ns3KtEnAMtqGtMXWjzahQxWopHiKCBBqkWusr4uqj5jVzTxXraAeNZdVqKbe8E7pBCoY7qY9cPggLr9JxXd5",
  "key16": "XGsVvDHF5mHGXBS1ax9i29DQNSwHyU2V8Arf649dCo3QApCrxN1DGehKE4yiccrXZa1qJnqSdkr9d3XdPq8zuai",
  "key17": "2DyH9xDgTMBMyS1CU97MmP8ypod12yENXWn22yweU3YCcSHBhbAnsnq4ngW9bUXKZ1Y7DBckpJXyBKfSLBHMtULe",
  "key18": "jeGtbf4vtBhJpcKjQR9LrrEnUoUzAW97DqpTGwRmqkMsffbcDjHeL7383LC7LCnSFc7FVfMpwYvYLPoMtNckyMG",
  "key19": "3etiCrbEpMJj5bG896QU8wHpDMRCTFFdCCJf5uK1H5b2gWSvCt4zZqBXonVYjFtUqbmCRYNZu8dLAtZvrzhfXKPG",
  "key20": "2pHoqc4YT1CdC1WJBPZ76C13nqVPTU4pkEo4xjEsPS5vPFQpaVZnmR7LMw9ci9r65YpZcMgTM54dMJsDYuRHciA2",
  "key21": "4NcR49GWmUWVBWEfMMRHU8r1EPq1QRSUmXx4h2yZzdUYpVGJC6TBNaJhUSciWgvXZ9ktGk7KghTomVs8deQT717y",
  "key22": "iqruV1gb8n3uXewVGTKcTgpKbG1PgLHxgdfYkp9xK4ftpsGnC3gem17ofdBtzb8uTLEDRPoUdy4fSQLZs7ZsUuJ",
  "key23": "QTVpYhdmrTXRdPuCHwQLvj23KPxRQW2S2Tk68e8adjUkGtCfkdd7zqAxZFiu3y5bjoFHqMkWMZbKdu6PGUaZ8mc",
  "key24": "3hhprNPvqZAUXbCuF38zsFAjzvHd7KBN6uPzt5vUr8KHQwKDAQfznVuEWViuoB5LN9wsNcAyXzYUJVAvHbXf3chh",
  "key25": "4jxRFinjk8iL7wPf96tBtzFW6n2LdTPAfuq6kbFKPp18YK2McETxq7YEUi8Bio1GyqZr2RVsfir6DDNkU6YX66pH",
  "key26": "2ZnyLfR9N5myLMpkXJXwd23NtJe2tvC9YN81SVmkNPVqc9XtyBn4qg6ckzZG1Gj22Q5k8qpBB8gboB8AT7FVBKXg",
  "key27": "51CRtqVBvhv6Po8JEKecweBbP1xs72pfswFE9BXrTzfU4ECEpMR7w6Q9eDXGTAdvLsWqDDw5Fc9XPgm7cHZB7rb2",
  "key28": "2H3NUQRUEDpLenVKuKozvULsbobURUSgW5cT7JbQnoipwmesxkh6EdxTd5MurhmdRQH43G2S96L6yeqjK1jAACGf",
  "key29": "4qbwa2DEXovZ3L41PHSoCv77W1AnNeNwHT6ptDUKpNTxWb3jMLxbvwiATGo8QoA3V6duyxujXAdfLmo14e541KX9",
  "key30": "2K5EvjTYeJ8TvNrCiAkhg83NtD3caCsdfjbbbkG79AoMv1fgjEPShWymUXE49nx9Q4yD5EAYQkefcaKmtkG98EnF",
  "key31": "3ENpafVdHGxKX7bzcNVCKx9i9pyQiwY8K8YBfjgUnQGnZjvebuM7529WrnsZ632NeHbA4zFDEtYttoEyZbyQxGjk",
  "key32": "2hcrEN59GAmgrEQwgNvqUh14DMN7SdAH9fzg1eLWVfucUCic7US4qZjWD8DizDbocqCyE3RZ1XDAjfRM3pYvSX8s",
  "key33": "4HocffyZktQ6eRdmsADbNFubiBCKG5HzVncjX2yxsFwBJUy4cZwWJyaWtqyRzjSYNGohknfTrP9nGuQd8KicERfJ",
  "key34": "5tUdDVcrdyiQLLgqrUS6rWrQMrMv1rRyoKceZnGyvjDzxNEW2SkXQUEkcwUpimfN66VY3RtEuAxrP48hUMRDuFTH",
  "key35": "3o6mAJNX5XoH93aFHesUYqSHMSao23BTA76T2vU92sdPUB4ns6mwHf8B4pT2Wi9au6RYNTLfPCpkMRLSX2EhhdRE",
  "key36": "4yVG5jtwcxVPSr7Mhiu5Mm4qHsBtAX5zgDYP655HVTxeWJ1Mjr7mMo9rpTt3T8GsVdTQv8QukQryCEhsqnFKa1cL",
  "key37": "32MnwWFkPRnD2aJio8VmsM3UC6fmUbN6ncLQPbF5bZfLA4juB1rABGniQeHqCrNQ4pDXPsDVABRNavzEUFbRLtw4",
  "key38": "3RwUnqqGpTmf4of8KoY29wwTH2qEC1FZCAQd9SRAZReZex5uSWcAsEGPR1pU3Qnzk6YUtABgtqk4RaxvdRxKWyPr",
  "key39": "4hYNXcthkQRvERi4VQs4DhqGoxiBMHRNecmoHKQJJ4EzaYWcX8mTwiJsmr2fUj1YeFQsHKVPbQU5DtKw6a6dRXBW",
  "key40": "4WrGY6BuYGefD7Z3UPT8FKW3s7RRBL2st1qvLpSySHZWYRfjRx4Xfbpen3kipwY7cYANfaLkjeRbzupQEfMPQLPf",
  "key41": "5bHNEUBaf1i9bH38dc31nySHaDgmCtomcEhihvyGaYdZBvmKTJGdenX74dX4vvtLbsqbYsAmyKJZjsBdhxUmgNvs",
  "key42": "54CvL5jgUkkoKPv1MWXSSQNc6MM33p3NmudAvA9kXeNZoKj5G3nRJrp7SWMaJnXkDzC6sDetL3VKextb6c7mrwoE",
  "key43": "vmTokb7ejoXbCkzwmaPiMyeNnggcjQpA6GvPyVP8FoCaJHisSvxBdzL6WqarjC2btnYMfcwJC1ZX2PUh7dFdqc1",
  "key44": "UL6fkQ16Yo9PHx415epYiDheKFT7QYgbd5h7gUBsHp7kSCoB55ZfZtjk4PnZXJKmqPDJk5Tnb81UEtH52Gnpcw2",
  "key45": "2reDFkPkB2cMUh6rVwRnaX2br1Z4jnJFce1dVaUFzKEgbVpmL23cqr2QXvYcwqsCUbap7k5bq5wdJoSsVaiSSvH4",
  "key46": "3Rz1zeNw9afALK3hNk1oknM9Ph4DwyU9G7qLPGyvhYzKiSVkAsP5ZmWDV49AuWGhP3uwSuNJjxabfodZjVKLGfHX",
  "key47": "26iwsFdcQdhS5eFWSUxwwyLNahLdhWPxAgXpRQ4kPDWLapnJEx17Ckd5YrYDG5gNpfSdY1qHuncjGXNASw95gMyf"
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
