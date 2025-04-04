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
    "457C4DzQmnxeozr1De6MiQmePRGMhhamXUc14XTrhhsMpmfZWLBsFnTHYvQHr6a4XKmf2kUJhEYcVUKwaBzYADUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E5L2TU3UkWiN3x9sxB5ALww1bz8i3mJ4zURwFpJB1Lh7uERxq5WEnodXMMNNGoUvQLJ8UhGhBYL8XwfvEgW8fJU",
  "key1": "4ijfxK8d8nUf4kQAM1PM9YSe4h5m9JA5t76Hqz6auryRc82hawCkrwtBH6RRA5kbnXnLm2AETUAXswnA7HfYZobX",
  "key2": "4HPRXcRyjUv8uCJDy7EYgAHu3kKk353V8mQmEtfb4fZSNwmdZEeoaNjVwYxs6gFNduFgci398BxFwHYf34F28qr2",
  "key3": "2KxFuJaLDELfprZQjNbcVbxoP1Fo4V4Du3pLNLn5Vp7LQCcPS8N9GDthSdUYXAFy7R8QfLP29MUPye4V2sxmw7NN",
  "key4": "2QZ1Bv9hGrxjJ85UPw5BYAFCbRaexpRcHS4M7bfobwMHvT7PrjzK5cktWxVwkJm9irz8UGFcAuexoKehm6mGJsB7",
  "key5": "3zhm7p3dNU2uiF32J9nrvpkdmrmuNjarc6L3fxJbqsNHrPoCFGXtkxuUYTsFyoe53oT277XYuVKwDEM7tRNjc3YK",
  "key6": "2ARAswrKykoBCDMwWd7SfF2hk6PeRn1c3hq4XYj8RgrAejXaXroFHWxeGg2sSYNm5oTPri34PiPFu5eQivTtVtUq",
  "key7": "4r1tSdpV62jJjkZmTQa7wBMCSqbY7j6q3UmGb1Hc5RuepdqhFoci9acEKuJ4oJa15nU5DqDBCaoz4X2GeRxAQ4rA",
  "key8": "2eMTgk58PhtxpPB4yX6AqiqncsqytS8qRqQWVrep2oQT9QqV2p4D7c7wxTkmHNHY8FKQF4zjcxR7mPUFPrs4Uwsn",
  "key9": "2pezPovjgUtzzst3qxRh141D4r3iStH2tXVwSrvLamor95dMFrbcMDnJc6gceh2wvUs1rshm2DkF2n9D8oHznou9",
  "key10": "4ga7nLMc8bbY3tSzpC7FUHrXY2bvHehLRzVaGhf24URQwoUBkaStfgttDf1mWJDe5qXdreaAgrcPF7xHzRHrV86X",
  "key11": "27nJrFKgCAAft2utAso2nsgtfBgXNyGi9khYGZbJatPYdEq5WjLkmwSFZqpM2emNqamQjWCEJFaxu7NPzX46vppd",
  "key12": "23NeUZHfvRVzn9duquN8AfdAFAMUUFdjzVP4HUEWcHBUjogT4yx7NXV6DYkmf7ymVz3uMf7uvid6Zn64oJa2NapS",
  "key13": "3QeY1swB4bnaV31s3hJYRZtHTbBN1xtDqnyrCbGNMfJ8MdKQx1NhaYaMJFwY3NDUmFMDeb38SzhY2dFuBvJ1WbS9",
  "key14": "32AzGYxScoeHJTWzvujFbxMxryJzcNLaoBMr4J1JbaHyTxKXqXXxoyhBRLmJ8c2jv5NetNeMvXsvgEo6xBeqmazs",
  "key15": "5iaNmpEoefQCLc4dQrQSHbZT83m5nzNqaPzb8VZXMLAcwtGyLoufUxDL9HvWdqsbGZBMopRq9iWzRRF3P5AvoZ4Y",
  "key16": "3Fd8WYKMFJjdngQ4ejwrD1DQzJ66ux8MLaVjcedHH5BsoMqiBE2YVRn8gLxLJmNDptvwzo17TMxJXSPHF1XoR5xg",
  "key17": "6uyeYi1awvMXZMs13EWq1Di5WjLKErnszYA8JMZi1ub74SuBSDjn8t1htez7tKkRcTqQCwbxWbq8PEtKCv9gy9J",
  "key18": "2zrkeCN8VtwJmFAxGqGiEFQD4EBnsJcTHDzs7z6DWmfBBfAjCu4SkXWJBxUYc5B9e7FxLKe9uBi5iEbz8fuH6xVC",
  "key19": "3oLcMfLFX5pwVQusynBvSJgSpPo2NmkjBz4qnXC4tzQjAKsnraSrHcRfPfiA3zC3qc1eCoFqjzxcBJKvoq95UhEG",
  "key20": "iTMDp1g8oKdAyo2EDuSKn6QHTWXhpM4fAtFwTAVLFix8FtT9pSVg74wT8hEJh8MoaY7eRMwLFNFahoAyzQ2y2Ce",
  "key21": "nSoLNxhih4QqrCthu6pazdKpfmJ6eWUmKunCHiKFDM7uxG74g48htQaQJ9HPiBUfA11xQtWNGAVtzGW381VCQ1q",
  "key22": "5xk1Cs5kvyTuov3JXxAsCGqdCsrUFmLxucoFWitgQWoMYas594wNphtATEdR9VweuDoj3KP53fmHf5oXJp8zdgTF",
  "key23": "54e2SpH5EGUwRKaSkyTCdeyCDWUDpTKrbF1mAaT7nGJNY8YfgCswrYFaPVGTPStL7vCoi1swEKmmvHr7fGvfdNeY",
  "key24": "61LeBQRWWzkWaqobrqf78D9bRr77dgYt3Rk2rXn4WdkFPcTRXWztbYXtxXQ4jwoTNDp7nSAebNqYzdPZaKvLoVd",
  "key25": "4jGYopV87zYtbwj8xfndG1Z47DcmhqgbUtZCeJdwycybJm3tj7CFpMEJu58P76d5YWUPWm1NgjwJ3kaSinKoM4st",
  "key26": "4Q4sRJUSfppVFmLTHcs5AVv726eKA15SuCHCVKuXTCsTXAbL7DVDe15LQDVhrM8ZxrADRK3bQ1JXUaDj6iBWVHi5",
  "key27": "6Uef1g8NwGnF6vARmxyHRkvLAQKLGMPZW93NhSETTR9gjKk63d7MFnsktrP9tKjQe8wARpwVjWyBwMkXndPdoMQ",
  "key28": "TgHPW1yPmPHppSeuAC1YNWcywWmPsH6Zj3BUn5Liz97WjczG7BF9HDSrrPSMTujY1u9fRRE45bJreUBcey5nxNY",
  "key29": "bSNBS4sZ9292ovukt4sbu4GQ1ZmJjvUPrVEoa6Zj1QGD6Yh2CBMG6xt8GB2UHd3yf5HjpuJWredMRxfzzFU5SYv",
  "key30": "5gmU9s5QFguisoDMDGxWUHwj7GurT2jgUfMX89itSiUvcj4d66mauc6z6PPhjXj3PSUVRzto5cwyXeZWLm3ejMtB",
  "key31": "85kajamYW1PH3ZRAJMKvm622pobX4VvLEtrff3wXRvVJNjqR6wJXhqTfN3CAQycmXtNcjbC9gVdAqjVwnyxYmEk",
  "key32": "5U71wj6VcFb4pPYxuraHjv2HqB8ws7g27oKiu76KVFxDSUVS48BS5rdn2q4FkUiy499ZrJ4cdDN7YvRaNZgsvMKm",
  "key33": "4Z9Qkyyishzh5SerHafWQTUwR9Keg5ZpNCeTrPSVKGos5xs4PDWpENDq9Quf6wuiiW8VHckjezdfvLwCJE4NFwUU",
  "key34": "4TRPodauZmecHsX4bDZmXHvhqezDANnbbnQgw8Mx9HtJTHnYJ86wLBrGoADBZY1bKnnKB8ta6CGFiwWRWj5Zv5fp",
  "key35": "pNwApV7ogGh5bNLbsLYBnWWu9unhvwG3TKo8V58d348Yay6eLarXr5CGVLCGUtvZqDi2NeCsdHDyXo4fDEmZQDT",
  "key36": "33vYxuGLCyXxGuQvfhai7NffsgdqNCi7nQGDBWcQfZuXyf6g6RFsZ2zMoU7pqAjKcGPNWqFAVLEkCG14Z1RSrFEg",
  "key37": "56THfZvX3WuEquwkvLRp7DBXGudrqRrjU8NAekNEUgFTnRcusM1jHV84bv7ZYB7cfbp3uNEELpUsAx5UEkHkgMrR",
  "key38": "4qsaA7YNzPbw2o3NgUUzXACvfzrK9K646WKRCWoPNQLZk4VBhdniV5wZMkr3mkUaWQ9C69bkH6PueBoX5qAqae6u",
  "key39": "2A2UFfiTjFcLyzAbvYfeEefRFDVN2MyKweNhck9yeL4SK9ovk7p16uQiLPjcFbeqsyPVWy98QPWvyyPDTX2VhN46",
  "key40": "35ui9ccom9UeweYimVHtv8fs78aeHEGugdqp2hYb3ff3gf1EeyeJyjMW2XynoXLJFKnxVrWfyiSfF8CLxH5vtxXP",
  "key41": "4UWGi8rfz6ePmoNXLCN3zbx8Z59MWj32QBmKdqYJBvYdbofwJfzpFqTjNpGPbK7u7KzDkdtE3kB82uZ134qNmXGY"
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
