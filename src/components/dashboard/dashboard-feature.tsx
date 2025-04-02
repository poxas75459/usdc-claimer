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
    "4FKYpccTnnirJfa9dqx5rXLZ8NXitWv1Ra9BTouxyBh7nSfbSsyrDz7xEyiSNSYVLhhpro6TjwPXfuDoW2mhQd2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h7a4V7Kr6iqfc3U6niVoGp2bwGNvn5C6ur9sRRPUati1zNGwfWJx3uknqR8y7HYT9ueugs6ajd1mLL41KxvamT9",
  "key1": "4wXLK42xhiB4dbxcuyEdTq2awT9GFkwyK53M4ZrKmjYqydi6jEBzpEpsgtm8r2BZzfxT7ZbWCQLWUKkSnP3dpe1J",
  "key2": "2twup7VtwgePeu9pPXCkMDaZ4fUGrBsRvrhrb3FgPMs44Y4PXK8j7jeUyasDV7e6qJZ81VX7jXhioGxeiZAHfU4f",
  "key3": "3mfAAUiCv8ouKHfjd3aNuiSMAjaUjLmdNPmpTC4AAdkmqqXwg3VEDdxXtxH4a4T6mZHkGguNJwyupWVRMjMJkX19",
  "key4": "2Q2uia2JnZHA3s2CvNu2yhqwD43eqBvj5zTuy2gz5P5qSMRvNRZfUu8MQ5kMCwgQBUfMmk4KnZQ7uiDjL3aVXhgG",
  "key5": "4pWViBhTNi1oucvDctDpPviqvwfVM6fiR664hGQu61jPMcrxtthtxrMsnKWbSFvtAcn24dLTXdu2oELUhj3aTmQ9",
  "key6": "t3pMUt2CHLwtZpojYRM3XUEfjmuW7jVjRq8Li2fwY2mBib8oax2WfGwVDAB192A2WJvjYsJF4D5dKUzVe9vFg4G",
  "key7": "39tStjw8LBmSF6uvTwLMMD4T7jnSpPx5KXzrr2ipDJMb4Yv6rWmNtqcDkptDK6BP11Dv7ucNVoCT2astVp8kJYS4",
  "key8": "4VHARJnotsqq4TpiUCWVYPKoT4hUsqJ4yeQteAFfiDbEMRroZz13udHAJhnpRAmkvgLrzVg6ur2TX7v7j3HKU519",
  "key9": "4Npq9PhD4VcsYGzqUFv8U48b1ykyt41v1d24TYoKUBRwMEJn4o2XiKpcwhVdeix1KZGMGbFwEb6dCiyATa7nG43F",
  "key10": "26mbAurFaN7qW774hejQ61Mgg6v2PcVDr1ZKkDYksmHHYGFqcawxhyM9qMYGL9fwJsTUihMTpSFNju4tYv98jijM",
  "key11": "2zEwkBUpRWng1WJ81qyWFYZzJZyGxCczDycyRWeqzMGGm3G51WeCWTm4Mvx1ikstfykcGYWbAZ5GwY1Sv51hviYN",
  "key12": "4qEz9orBv9qMEueLEnW4cGvsfote26sp9eFapD1EiJijW4u9751xtuiz89jkAu3cXpchuZSSN9ykCRMHaBGbodQz",
  "key13": "56HmH1M2xj24fffrtJksPmuJfdmS9Tcum7s6gKU6XXerP5KQjGijLHcBUSz7QqwwjnfmEjbAJVLQjMJniUAFfqUf",
  "key14": "5MW5qHguSXYBJ5uoDtFxPHUUqLtZHBvCpRJnqsDcWkpMb1SWKuD2ooypcQTg74MWFujSrUrQeAviztsBpmFYM3iY",
  "key15": "4vmQm4X1yBV5gu4i4D3GVLju4Ab2U5huPeMLRjJLDN7k2wWtabC3LT7Wzg8FocZVm1EEUD6J8kU876nCD9X39uhu",
  "key16": "GT1dzyyknReEAFZ8YABsRkWs1C8MRDtLitZaBkMtP1wHH4vKfiRchoyHW1Bt2cD27psgLHSjQD7ewyoXnx6uo9t",
  "key17": "2RXG4ghakrR5pHuCEne9geCHwBfPAavPGnnzA1czgzz5pMSLMWLb2WhS7zeXykFcCxHynZpjiake3fHqb8TQ5Scv",
  "key18": "125MUWg6HL4EBqEghwjD1vcEhNZwYPW5gPenvU5wrTSnqUtmzfrRTuXhEWPUuAL5JfKayuGM7iYUPkg6BNBdzmdd",
  "key19": "4mFUGii9YHHYmZET2S2dem4bvJjEcD7tyVA3HqXKTvxRV5yinvvCHLp4MEWq1fCTb7CwBM2RHDFQArKxBA8PopjW",
  "key20": "2igVqPZjuGSgESk3G3WXmYPZRDJpCiaNSYrota4KyRCqqXVDCqDnQavTDqb6vcMJQ4kiPicfdMYV4Lu1DFr4rYz5",
  "key21": "5Kj6phumxknyigKnvvX6uxBuYbHThxeBnNF9psDL5LzBJfjDeBeWXa7UyKAnNB7J351M53qEG6XPvWe2zVTovyFa",
  "key22": "4BArSJ3ozUrKi7fzfFRPQgqBwqtzHeJbJB3EVM7sskbYtCeppKj3WjKAAcYeLhu8hK8nEvxHsf54Q2n9C5JPsPBL",
  "key23": "5i9EUMsSfEkKjJWfU9RzTGkZpVpkRhn9BixMo9MLkA7iCCMfxeRvo5QsqpFBfnWUhGiY13WyXKB6amqPWwmm8iG3",
  "key24": "4r2d36hvvH1LEfABipsNgTReiogGamuLAtTesm6zMrwywc44KuNC3EggvcXhL1cE3HNCm6giV1HbKZDw9LVpk7Sr",
  "key25": "4KgZZ6pu74zteRXWnKVTsLnM7b4kQUxQsS5D2jLt3uwUnMF7V31bHRTm5Q7enDsq1TfFtGsutAC5K9ehsBGZgoge",
  "key26": "48cEMXcKB1RF8ULax549bJuVoDWjaR75tZwtFZhyxBzQnNa6P6ECRCYaCtZiyviZWYnVYirJxbQuuQ38cgkB4tRM",
  "key27": "Vx2fNGgQ16CrpXxMKEExTbyZMqagwTMHYc5db8AdVqmX3dEjXAVYt1Qb7Y2KSTKA8SyuHavcqaX3jtWyedNddnM",
  "key28": "fg1Vn3vHep7RPYT3wE1N5opSkCCCkyvKKSs2mJ2UEVF2YyX5TdqHbDo4Me9mVEEkiTwTx16n76HeJxJtsmATE1E",
  "key29": "QTT4TixB8NT2ZeaWBWna7iiEMyo9tbbCTETC8ozcm9ypAE9s3VBvcMShy6ugTYMS5V11TnyLhpcATpMADJxKkxX",
  "key30": "3hgN1MDr4q18RTq6Txi4nGgPRzBcEqGmJ4F3TccVqwZusGQAZAjRmzmb7Yh5xDKWwdQ5gFkoprGSn75FUeAmK4VG",
  "key31": "2TfU4qb4esMa12SM9fBfLPQPwRhj9mVT4yAxHkpTNHxKoU7gNzhJtpAjBDDN92rKjppi8sehoRqhCUC2rARYHPW2",
  "key32": "2eGzqyRxRrcXBMoM6htAw64ArXwkr8u3arDEmEpf6WTzSM1e3W44MRGDGFQZCJzzakMnZoHDExgi4BZnKFaZ63aV",
  "key33": "2wUfr3LNiSw64zjQ68HGoAPua6kEo8cAKCVHwFHDfe9pwjMr9UPSuSMQ2sLWk3frhrAZd8gckDCsLmHPUPL2EhE3",
  "key34": "59HuJa4gCzy6UxLzxJc15RKFYdWXiu7dJYuNRRyRfTAgXoaVgYxV4SjiDstchxas4PqyHMXs6iVM6bfw3R8EGJzE",
  "key35": "4gMw1MetZTvk98fqDxQhwMXfhJULfVgPTtTq6oFkZppn6tuiqG8fg1pjCQY8ED49q2gaLLEBHo2P9WaYPTbJEi5v",
  "key36": "389wnPb3EZSLBRtA9XtBevc5z1YuALEGsUbuJhYFyh1ZK9LSaKUmpFY8aXd7cjMokiFuVLWthUxrymKGbLy7KVrS",
  "key37": "5FiNusZNnWowGvgP66gmbDrQHNdDaM4N6uxH1FNGYSpKTdqRJLWmz4HV1faiRan9JVdFuw2PmaPbGkmVYEpuakk7",
  "key38": "46r3Ecw2HVszQxwKBEb5q6PhjeitXpQN4kcBz4M8hJ31xh65GEMZZpAr9EeriAkScaLhRmb9WsCmj2w7amtJ7Wn2",
  "key39": "4v3E2WcXaWsefGw6VHRQfaB64dTb2YdZQE8rfK5ztJFYVqGaaVM9y32NytsMdN6eUwtxVYGXGKhFDPXzvysWkWNt",
  "key40": "4HJ5kW1Z5YExBkC6TZeyGpG7CngnDp4MN4BnWzsma3U23nVaTL3RysKHALbtzPN97dyEsK6TeyL2D8k7pTgjWtJG",
  "key41": "5qy67HY4sqPo5ExkXyHNHcm7uxAMSrRfdpXYdP4kBjR9qJ23kzuDKuUszxWbgPSYfBUnxgzTLFJrMWFAUQ4jkcEc",
  "key42": "M5UpUmVpLxj2j1hzMmTJNw2wht8BJKggzZikaEDLv6jDDiSiuZsAEFRAjTB4PufToNofjbjPiM3qyEnMA6W5iHR",
  "key43": "5QjbgGEjbDgVhCvjoiWEK9mgPtXx9XBrwdyqqHdGykz1myWKS9Q9A6QUu1kYgoPo5C5kLa5UN34nCJCEMraSXmSg",
  "key44": "4gjA6frssanyJMKxx1EDcwpzqzwFhkWJRP2AKdJtFJQK4diM8BHJpDx2equ2fAYT2N8msmPYeEzKDtYq9422u8qQ",
  "key45": "5Zp6ncmEB8CFi7xA17gKDrEKFvQqDRAMy9KLRN5BY7BpCiEaBEmucTRBS4TrJincz9kW6zNmmEJwZnpd9n9inQAC",
  "key46": "2dJgy17HQnvAvt36ctYdV28kBX6i4ZP6Zs5KPfWdZyFY6ufFvPBtqZmjo5CkEHnzEy5uVUEM2owfmQF5h8zJefa3",
  "key47": "2DvBdPwiZ9uYiGYa8BAr3NrBimoL6hjpvQVqQd4vJgVMZs4ezTzJxDrS1K8jMJusvcSJy2eSb1XGmmLWHLA4ks6q",
  "key48": "3k7Vnk1q18ycG1dSCP2NPR3bEq34Re4h2dcNL8cBuoMsK6zLtBBzfeaqCU7w1mSUY8rY7T2tkosTLwV6cemZ3qtu",
  "key49": "3Em11pc1WYibZqY3M2Dr73dXCvUQmb7bdGoT3F6ux3vqzJmGe6MagK6etczko7r892NhrpGiCPhnsQ3cCfuDSCA"
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
