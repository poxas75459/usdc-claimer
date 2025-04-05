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
    "2pNTak8Djxug2ZDo3T17ReDW614jZ27xQKC5vqx2tchRBagG76mSApqYmSSEUkrAZaiCdzMjvaQ7xwGvuuScKpaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvXCcPpr4tPDpE8YnTZdQr89WncaWxycheEDxDJAhGYBMxeAx9LmFF4HB3QiSWdW8LCySEAkePL494AG7GbH1Zn",
  "key1": "3QeVEkmcLP3UBTcGkhbpa7ZeYvY79x2QhT4AL4z1KNjcHfZCCJG5CvmKQ1xYYdHBBoTWyen7MsWisSPj4t1PtFp7",
  "key2": "2NHHETYtSitYGcs9k2kaepzxWSUu3RNZmXx37k2bsPvn48NDNJW4F8NsNZa3dv41uqniG3Qo5bABiUaZq5toevQH",
  "key3": "5xnYzRUsjN8FzPRkMR8fEVJ2LnZH2pUhds5wC2SGUhWFayE34PdbjS5Ae3Gxfxj5XtgioGvWKb7h5TrMNxGQ3uaZ",
  "key4": "4w5p9EqQTq1X6QGnaDaYy3wcmVrGF2YNyqMgsrW3sNkgSau5XZc2i35BfLBYs2erfutzzmgA1WRwuZwvjzCaG8im",
  "key5": "U89GN4vxf9K8JFcUWEGfVbCndXsHkJG4nNS3dELNd1J9PG6Cov8EVMyrdqVkPEr7TuhJ4QBZuEp3avzK4afCzNR",
  "key6": "2zcMnUpdykzi4FQjPuuhjeBEiDzv2vZGbnaLvzVz3x53tscWDgZNDAs2aKypx1Aj51tcQHLjhF1gnbocEN8yLGC8",
  "key7": "czAiKK6DAKYcGuS2eGda38rQxySvEhqkrJan6pWkWBcdBmhgbjARrs1yuqjbEki86xAQKJorSfeeAK3jJqY966H",
  "key8": "423cyMdqvoF1sQ2wyrjZ3Tw8EpnGtf9j3zjTcutk9wBNCFQ4GBg4htYh7sSDWgfodGgMshTTh3tG9J89DgyHDAb6",
  "key9": "41K1hxCuoKpzVnWurnf7rMvFdnTkuLXGueXP7Rcn7yAvc6cdA9pd5miWDe9Y5TnY6Ur32Yv4wkfxSKYEbAeGNbyR",
  "key10": "5WM6AhK2hXjcDXdQsYAbNdRB9mgfoTHM9pLyJL33L14QGJEcNBFBjqJ3M3dqWy6TxZw5VmXnKzp9Z4YxMuVC1cd7",
  "key11": "45sM9cM6FBaCVg7HLv5GqkTwv4vymQhkHFy7pjvTa9G61Udxchf1hHDqbRKJASVHhC8H9pyMEqXhM6VJUSZenCLL",
  "key12": "2vdM8S7t9edUGhBf4sjixMnssUubT73sdGU9usVF39DJunP7NPYCrWgT22BLTxgSojeG43scjg3Q2EAsbgFqeeKZ",
  "key13": "aU84u2HfQRmK9ZhNLe4eiabTFn712LrzRtx7TP3UU9SmrjnfRr7QjHRWbtt6m95RjYRquPbPXc2suvprRkxwRmU",
  "key14": "3cAgznRbjTy8KhnBthTCeyvMgznkwiBgGoKQKAHiZdcgQrZJFNcD5KMdvPLTjJnMLH7zHvhrJMRueDxwpBxXo1Uh",
  "key15": "2Rodq3M6btbCvoaakwYtXmA2xgUNHsP3W5bpz1MjpTYxu97wBGUgbJPVB5ZjhwerqjXjeo47bmM1Gs39aKixPMWi",
  "key16": "431nyzmxdGQFqstqXq7vmS5pbp5YMpkC7tA9kt8zyTvJKGx45emiyD522Zz9VVNXkrYByFEtmREQVTAz7wC2S5Gf",
  "key17": "56WTt6RUWJUua978paU3bGww1J92aDnHmag4esuomhS9e2pQPj19y5qDqkpwXrKpCVB6Cp6VH59ZUkybJHsjhCpn",
  "key18": "2XHLrXEZykCzc1nACcxWPhCYEzFbpe92sra81Hskx1Nu6cmDvn4jbAi2pZr8htg5XYjM8GAKfW4J9Ee2mKo3s2nf",
  "key19": "2EasqFAWhXYdYpUhpfMgMxDRMcg5hRAhcb11J52g3Aa7tAbzF2bPyZ2rKpQY6pQXRFd31SQRnUdoCJdV9SLZkxPJ",
  "key20": "29PJ4aVmKsmd2XDABLYMUyhAbVx2w6QJYtinYKK3SNduZgvyCdsKCP9Xc6bMHjX75xAqmStUYFyQrKouhppUYzVM",
  "key21": "YUZeXjZcBaQcouQkDajXEwwwXL52K6KJU2A5cKB4EyMkSc679Ee97w9t2cVaaXMTZZULmMqgrNmoNsSb9E9tA4p",
  "key22": "5zhjJ8KwhvYM1h24sZNYYcxLuYqFQrwTf67SEG9whEapKUX3GiuuJDCu9HgaTtHyxEdLmq7475JppABdf4pbdMB1",
  "key23": "4uoUfymJA62VARF4afRz3fp2UiqrYRxjDjf1GAiGe9cQxsBho2L2dtPJudoG6yd8LHXWXAxLhasc5j5YcBBTRX7h",
  "key24": "76RusLaV5xH7XYt1xjyJ4aHuwQqPm2gQQkUfo39kd6pt1ECnnTV83cnWQRXDAusGSQFwX4X15Xt4GvF9Lj2VwjS",
  "key25": "2kbkZ4Rh2QLZ25rgtHuE81chJtveFoQiBjfpkPhuyhPRqmRDenEKtYNAjHZ8QaCiSVYAWMVjCaYpiEFYYYXdWowD",
  "key26": "5pCd2AVqgnqxX8q6Du3o9h9CG8npmx42PpmduwKzBZD8erBFNZww2XQQo1J4ZkRrtUqedNWau8tBXqpkeyr4Crnw",
  "key27": "4os7RtPtaBnCuSSH38hT6i8Tj7mNjM4H7eNHPGK3EaMr8oMxm6pZoMTuw35oXG9545PwEPVzL5aZHNNoLFDDa8dS",
  "key28": "32p5WucZJV4pLA6nomh3jAb5T6wJYmESHXVgLWerWHs6oGokH2jTC8zC6URNMrjBsTrmwjbpYy5QLQifwfzUzgwz",
  "key29": "cGiKBAKsCRhAwHNBkGWKbpjpjKTcq4MNqEie54SA8doA1eC1NyRdpfVeukmSy5S1oVfrDcGj2x65CbhoCAw93Jz",
  "key30": "2K3DSLvxBjjvtVfyDQQ7yTXX1tC45Kd5g3tTVT2b5nnHq4Be1uT2vhZVKaQ4pkD7pUHSkEUptXVQB594ARxm13aM",
  "key31": "ifeXBzi7KP68aB5uHET47C28qHRS2CNZXh2SD4LjWFwYErb7em8sJTAp82QMyB5UJGFLH1WMTYQBUnnMCtMsKxW",
  "key32": "5Z6E3W9pcCzSuHfPwgey6duzQuY8hGT8biEre8JdhFaHusRuVYgotH5ahX37dx48aDezAX6nZ9DnPmwHFek1JvTJ",
  "key33": "42U65DMbiuRnKzD2tXuDXq1DDxZvVVmkzUnsUex39DFqqs2CA83zsrsWxv5ZuWpjUjdqeiAdXpfZ41LApCowsrdf",
  "key34": "4zggSBPQRMgFsVT253aiTXSWgUoxxhLUR5fEFLWu3477PZa5ii5MS9AUP7JkzvpUNjMN9cayPDm535W63yp3XQ2B",
  "key35": "3CRs4yQQW2RPv2rjQfFXos7GdZ9yzSscZJkScWg4arztJzyJ54GHuzF6zeS8fBV3TDBNUVzaL7pWYc3medZ5brjP",
  "key36": "2ciBCApm8iYHhiFUZwX2D6M6XUCHKY53dG5t9as9c8f4Pj36qheXWRzsTeEMYJWqn8gHLzH8Zwn7HBTwHGgdCwia",
  "key37": "59fr77wXgLExyLk4dpZFjv7VnXnTV3HRXXAgN57A5rtECUbbxqyu9dJZ1QsMinntWRXykWFpWTmv8TYs4zDtW2nQ",
  "key38": "5mRdZGMFWYL3xRkj1ye16GyBd3sAdRBxNew9Fwp1ZwMbSR9k7kFHBRpGVGwCNyCgQJ3VJCC17UTBy69jHEGRnZhn",
  "key39": "295vqwKZ6PooawoxJEqpzQ7q1hJGShQQpgjUnkEpnAZtrxzu3DJZ4kx43BNtvjnQyH2JiN72Kx4J9bZZpogzZPaE",
  "key40": "f1d7brzUG1Vz6S7H3wmtdjG9wLG1TqcFMUyWkT1X88Skw3YdYvn3Hjrb3qNGj2bgMjyokUzA6HvPZHtSYL1bMsJ",
  "key41": "2ChNcaAz5ZPqXRDFAx5tufrNstrnFUD6cKrur1QJSHmYRNoxyCehni1nYeQXF4ZJAd59QJMUiDZnw5UVvXMS4R6R",
  "key42": "3xGXmystuPfahK5MhMcZRw8F4naKRCGJbx28voLAPwndN4raRWV5y1UjJouKvLmpkrAiT9QTCwFGsQiwrsLjsLC9",
  "key43": "32m9wfRKgJw6fmLZaeCMyu9dfSPXAo8rAQ4GQZNESsrQzq5xprpncUicoiGbET1yPXuD1NE8Vg8cQRn9jtaDs5Xs",
  "key44": "3UnzTgzece3KWssThucMF8pQoWarer45N7o7K4Pu9XuYroHYP6Wj2i8WyGVgDoR6zaiBNerw5V2WxoruTSK3JEDx",
  "key45": "8VESXbHtRNxpVYksYTUu1eqbcNW1xome8nXiW8bd8d5nM2oVJnNoHNYWjry4wiQxERbgf1247uVW1pmvhzkSdNy"
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
