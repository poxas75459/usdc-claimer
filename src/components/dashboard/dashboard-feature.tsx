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
    "4qy5dRhbahFhbFi5K2NrhWWT8CcdUbRov2skbC5hm9aQpkA8PmwCKkh7n34vVnvUUkBrLb9ZvpB7wMFoMRkzAHqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m8Nt8GnXxHoTc2i4hoL85Wh3LU2tJaUeREbztaUszPwxx9vT8YwQHSa2MHTVayNvtWuyAruy2J7xP9QmVas3VeE",
  "key1": "T25VhqfeJZ69B11RA3F66HD9QWvDRAFSPFq6piZ7wEE751NPhu7dgz12b19kn6QedZ3exax9aw78Hg2W2V9Mc41",
  "key2": "2SmanHW23k6vEnEWBhWgzW3sANme5SSEpX7fMjBh3SsHkxR7ZzxRkZpi7nJd1dp8yjpdFdDBMUUMBThNqMNqZiHV",
  "key3": "2v5xjaLANxQ65gDYZgtaPqi86ALfUkVAyyd6PGkLxBqGc5eM1vokk11uffsMaieGR6t7bRV3jDHMrzF5BxrrUac3",
  "key4": "3jTpR7hSD971dVHh6CzhFtDCzYr3ZCTLoGdurffCUa4rPr2zNzHHHVkY6neegkrvqDNHLUuYxSJ9ANxs7Spnx4Mf",
  "key5": "3fv4FcuNJk5unRcYB7C34Ufip9Jjz69bRSA2LkWZfRbpywRBwX8kzCpLYPChRsReK76esgY6gRk3ccdWkZU1FNDf",
  "key6": "2Q1xougjHBYc4HKW9j8TeMeUzWnqcw3i4HC87UoQ8GURfXQ5JugHdjpvsjuhtgkU7PLBzDQEq2jNZbM6Z3mVr9zg",
  "key7": "5kh7XUK265WcE7YV6TSKmTrNXkmTfYAKrdC7MmU98JPhg12kze1UiRYZhp2aoV51o65pKMyYuJbBJsyc42riuceb",
  "key8": "3L613AzvWKWLuxYpRfLrRo8cHetFQBMScFpSmFyEPSXLexheSq19RCncKZ28HkK7V5izkYzUJfATqYLzhLLiXRQg",
  "key9": "44viQXPHUhLn87KJ2PKQv1HHVeBYpXaWmeUrNn3MLej5QP3ZX1Q2xvWeLdgjdVo61YiCmJy64kAwjX1PuUFhatds",
  "key10": "JJMYysW8sK1oRDX2PoV4dpzKeRXRnH6bKF8zKKr9VTvQR9ETkkov5sDoRCLnkF9PxPue6CtXBV2oZMcg3CbgC4q",
  "key11": "4vDdhtRZ5mXCiHRpVhDFvPxZsE91itPzGjU62GxGcwzYzg5aHC2cgaTPdQCiDcai24aeZWGK75CFcL72BDdPg8jS",
  "key12": "317SRa4WH12LNEwhnf2dcZWkP24EKGdroCRWwuF53amhpudG4Cwm7tNwrS6HfiGaC7L44HgPG5D8v78hCfT6uejF",
  "key13": "43tMGc24ZhXufF8EfrDHzYeRFU4SARKeVsDiiduGsgo3PXPiMD18CQUpotLK5ZvsVL3K5SUpumGEW2u5JxK4ewrp",
  "key14": "5uxf4EBUpCH6Tm45DjTBeuoqvgo4YFLTfcXEU1vuZ7JvZu7auD5JH2p3uEe1Qzotn51Fxqf72Y1SZxN6Q8bGRqS3",
  "key15": "GooRsrjU9poJcbiakMghTf7PVKWJxJQSE9Qyhj7bsQ5Z99wU2oDNhhdkPsXMnuExFnNu4755JY57EacC86TrBbW",
  "key16": "3izSq9bbAGqEQucz8BY4LNNL6c4aWf5p2rMAwxmNHW71nfNbCsV8U1wee3sUiLqELAo3Up7AoRierUxQdZqMUWBR",
  "key17": "yWiGb9HvK5tr2Gy31ei2UX7o5gLEQGb2JsqAGGaRs5Ddnjx5yknoJupnZ2sZ9XGrRRbTeEaU5XPiHsH3JxRrYAb",
  "key18": "RCznyYBq6k4TkFsfXoaoawEHB24dFsxZU5wbw232Hou5MwfEDos5JWLMys7DSuuw1ZtAP8Zrm39xqusp4kfjP8x",
  "key19": "KJejFXMJbD7Wukgokw7YkEcaskvuhTYUycYaiAnp3yoSSLhbxguRNdU9H7WeHYaNqsy1GbZk3fekEVCqHccfsMe",
  "key20": "2MmmA5gyWTZTsu7nmZD1wEcWdzuZLbvWrT8catrYH8GMYPmXTxdBrTfwyHeYYpDbo6XjMMu9VAs4a3k8noevuTzF",
  "key21": "5wfSQTo8ZFfWVtoGja8prG87Kqvk2VzbYi6oQSYFzwKpXt9ygFzaY4cdD8nm2fzqsxG8Zbdj9tjSGbcucadNep4V",
  "key22": "4v9v8KYBjrQa2TPBC4ZBUtgmuLBTSi8zhaJiDDLrEwVK9fJ6mvRTkgJa61rD2mmRpGenGaitU1qRLGmzdZXhvchs",
  "key23": "haktavTcWtq5w5ysRscAMnTZq5xpUJ7Dzft6MaBVb634E8fsqxwmehGP3nsM3vZSMGwzXkeAjwWTRLhT2hG6fyk",
  "key24": "2ExgcLkGP11HvhPbrq5HD8u5Ho6QWMZqnaXe2A8RANMzhPLVEWreRs6CzxXD6U4EKMNTrGd9reH6p3G9ZgMpTSBM",
  "key25": "4QYEim2HNZah8iRGvRqJKdefK5ZyiGU2b2TXEzDQ5Di1nU5Y2bVM8cwiE7FnPHsyzWtdviiFs5rcaQbbDJCN99DS",
  "key26": "5Wzs47c3oWai546VYR7UoCQNZx3ESyQKvx1HAYJEcWQ5TM86LnHok53tpaNVcMs5JMj1G6QCZTeqx9VQijPgdpCP",
  "key27": "33gHhY3Xe6hCM4eaRcvhj7giC3GSKSNguUi3qZD29rxa18AC4Qx5wS97NhsSAw3ULyTNfC3zR1RD9KHQKMn5UVSu",
  "key28": "2YnkFbt4B1xKTjXHUUWUXW19RkyZ4CAvaQd6q2ccgvVKJk42yEjBUwcvBysmTAShaaAatZPZAiALMdrM7jy23XVK",
  "key29": "4JamK2ZcMjPogKv71vNJQPqF5ctZKtAhXr49R77RS8JT7sskuCQ4jgmANJm5Q5h5HgU3UenKYfmM5ico17Q9F8kw",
  "key30": "5edfWiLtGfmMAgd6jRBfML3xcJUP2CmKRzZZeXMgtXbXdQFYtcnTAyysfa4NGnBib5rLqzT2NXY7T88vzp19hyJK",
  "key31": "65r8BJ8we61uzn4UbXAzbJGqTQnHzy9Zwq2qC6SHk45DRDKohEEasvxs5RXzwDohLm3oARERaDncYRCndnPikwqq",
  "key32": "5a2ugdPus1TbZGkD5tWGUbmyvebBZHZTo2C7TvtNh7s5iETwYFGwJUnxLaqVGVyYAjtLSrKKF9r8EVMWgYsrCRJi",
  "key33": "3hQkS5sbrHqSamvx5RUZ8NT3Wri7ysFF7K4iCVCzndUnacAcib6LDg6pCsCzYgFHuUYdHCp9jNTpCm5ziAk6BEJ8",
  "key34": "2caMwpG8MPWmxcDWupewKy8aQ9TjddQ7AbS5R61j7cTbkhnwm84ZCo4rfFJkCnMkW6NmjTBM2MhNjBV4giSgAR9a",
  "key35": "67GzHdoEYvEELixcp2Zd1mEkspyNs5Wu9X6kFxMEwTZFzrG2vfj3tbyD5a2bioUB5E4DDK1iNgBkc3Pmxykn9tkr",
  "key36": "5MWmxzE9QYdQ1JAWwtEkHQQVfvy7yw3WMRMMJmNv3bXZSDXeKorFcZr5C2btUz4Xo59b2dA6V5wppktUT4PyQ5gs",
  "key37": "5Wz3WmPSe3TaZZXQci7KiXf3mgkEwaxd6tu5Sjrm3YcytBXYoze3tWcNJyxPAGQndDkhVsxRCeiEV1dqdkKtb5mc",
  "key38": "49zt8Jt1Vw43sK3dp1yvTfJ6fcH66s6HRzsFgcVBK6F9474qKFrq6q61nQik1VhMxhrpfNjWzyjkMR7Nq36EwiUJ",
  "key39": "5kd6jnso2RduD1hxiHjLwpHx2bnQxGjWusWM94megyFM44hby3gZq7FP3L9eGEcYLkvFQGFs7nJoqzzo2AxxYjVr",
  "key40": "FfoxosiqE29Ts42a1QbR9jwmkZRyQ8FRzZEdTw2SVnYkW2HiLpgqSbR9ezSxexQxBVXNsTbjdmPS1cnEhpXPY36",
  "key41": "3aG8CohWeAVcyybVTdJqtM3dk6wkE2SKeujv257oT9BVQqpQbpnKtQg7Fh5VLL5CrGxLJ9zcPtgRksTcHouibovD"
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
