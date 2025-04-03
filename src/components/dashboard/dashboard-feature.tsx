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
    "3MYhgAWQZ3G1cjMHGimg2YhgEmMyf2ndvq11wcqyjfnfUTqv94NZ1mgeiHPYgZPveAczGTvofewKV9xknkesP6kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKg6nXSu51qEq8oJrmaVnFoCQatE8ZLV775bPQkkbgJMDMoaVKW3upWXFk9rmfYMM4FFByc88KZWtjqkr5vxh3S",
  "key1": "62CY7ME9Svhf5ESkLPsTUnkkNUnxuHj3ACwfweX9gAwYvKTm3ShNxNfQctEeBVZsyjQkiB3TfNqbvi2FoMX4LA8w",
  "key2": "2X7e6mkgDz1rXvpPY24Hek85sKhfb6opJ6LqYGQAU1iQhR3vmnk53Tm2B4Aidmc5X6nx9YnZjwoAPUNoruNqTjy2",
  "key3": "2ZTBYTh7GQK4oAyjG2G5mjpVmmotT2UokmbSEP9yVau7hC5zpoi2LdJkJmyQJb9eYFsiMUvKicZxLqjbzqK9Ta61",
  "key4": "3VttncAadNDYrLH6f71g2RvzFqaJ9QBCMCjEL8k393P1g8vSceoi1R4wXsuxe7Mv2hBi8oaFxDwBYxYkydFL1zK1",
  "key5": "2ZfMqK8z5BQTsFkgfLkVArg9mTxuiHvAcL9Xk7pziYQFDVpPepGnNWUGZpggKBt9rdWgdPnZmZoDV9VLrDtP1ryn",
  "key6": "3FBuU73TaeuiYWuj4WrrorDe3pMEBmyJJFnsyRPxgFENRP1TDRjASCxYrCPGnzospC9h74H3J5k6oufEgRdPq9Uw",
  "key7": "2RC5nrBMeTaYKtXph9T4ViKMXxMaPezyS7vdGyrii1eiNhQSR8EmWkWgNu53KiaRRWLTiG8zKU4CmniLHKm9yrug",
  "key8": "5a2oaRcVn9gdePM3K8upjdiNWZYnHocR2y62ygJ5mLVhffbLhG9nAwq2fYwWknW6ijTa29K9sfKNPVMzdXrtMe6T",
  "key9": "4s5pVWz3ut5omWCgqsiaab2MUJM1LDnVBdGgumb4G7t8crQwtrCsdwYAij7f4xs6nTD8TgT2ieaLipPKwNAuLcA2",
  "key10": "4YXbxrD1TtzTR8MRFuGaJ8ros8DziYAq9bhhRkgfjs3s4qKZ93vxXftdqrWn4BkeGgV6pmMFLteFj95aL12LtAZ1",
  "key11": "2ZEJcVDs1mnGYgaEvRmUD7SDChJopQHFcaVcPa7aaUEsajne23uM3myMc8yjox92RFUzBKLwTKQjrsUBFXCmJeoj",
  "key12": "4Xc5Gjouiv41JRWgtejuW3Mc3JNtePxjB7kETrWHGSsqhSxgVZfDTakEzyZnNhNfbN54avKHnYhrD21zcGSovzWU",
  "key13": "5d1r88n1mwZQ8fbz4ZdYevkwT8LnQK41fkmPsaW8FoCmAM5NuYPm9RMiBnZyuM8Rj2BFRMFspRkEhagKXG4fnyq9",
  "key14": "GrT7nqe34A88QJCwW9MG385JmUu7uXNcKak7dfUvndUQjVaVzL54h5yRG5egRJ9Emt9aZt2d8XSJJPR5Z6Znfkq",
  "key15": "5CBrFjvoA2QU1fXvWsVxS7oruhwB7KQk5WPseK9TpSWtToCXJ5BNmz7trH8wBxj2PcoUcQMSwGgsu9GEmzLdKNkf",
  "key16": "RUhwggpPQx2euf9qzPvWG9aWRGZynyAYW7SGxGSyojWizhhny1F9SdsXRS9DfrkjkLwNwc3dJvtGnSG1kkPq7Xx",
  "key17": "2oFdJSZ15q3fchT1FqD4sLZ5jpyQLt5Q5SQrzHAdLXhu6wRkjikBZ7joSX3MbNoFe9jv9uakECEP7ob55XAzkH3q",
  "key18": "zRhfNH3LmumveGTzUVndxQZWhshKr5TjxnqfzbHLfHLS7Wj5mgPixr3tEBMZUF4bGMgUNRQ41WnidFbnThtV6hz",
  "key19": "29bKxU6nrj9m18LwZ8W5ahrmuL8YtXE9KyiP8HJNRQBEvxKGrB7tfdEBGjJQ9bPMQomKg7zy7hGKpqWAfEZhwyFV",
  "key20": "4jFy8P77Yg43qkrvCca5MgyVdmaBiSMgguuVLdfUTuRY9pPa7s2HjaFKVQBVASXsxPefBKjB1hJUUAAKovx85pao",
  "key21": "2A8mcFYgCB8MbUQwzT9ZQLsUJ3LnpCxMTxynu8xXjNtASnYXe2zJacjGzLVLzzCDApwzsWHTZwU2wF6NgDZsDAt9",
  "key22": "2jHrNMydcVTGC5h8oBye6wB3xUAVJrSf2SMkvKotLLAduzaojmy6FjHUBjzBAGwYikH6puVsDBsxvnLx5JKCbYrn",
  "key23": "Da13tY2ccrd2DMJCUgj795G42HveRXk9fjBn94F3RSjdxa2r4Kf7BYGAEt2b7w9QKJvzUVjpdCRve3EGQ7zk6kU",
  "key24": "58W5s9fvkqrdAjXEoL7QeJyyZjNNY943yKnWLKZAnsMMc4gCGLQk5cq3K2UKCs7ic81RfB8nkh5dqKVYngsgUH8i",
  "key25": "4SwA6AjRTjGaS14KSecMoCQnfvioGydwymbrPqaiGwaohUtQcP6j5jDyXtzdAeZZfaBkniQJB9GgRpvUgfLvF8oq",
  "key26": "kwZLnYcz9riT3X65kwhSbc5FAFJAmQAQYap99GzrYAzKZKD4uKWbzU7AdAQ7R9Nn2sYnLUhpsuihnBF3YaLfJpw",
  "key27": "aChDMrLRoz2jzRFWYgRkakty3nc3RdTZ6B5h4sCcceA2mfG7xmrqZksZJwMNcuJrRiJZzP6VTWws37VnJQ7X3gu",
  "key28": "9Yauo5Y9WjqQoDyd5PgV8FtAyakFmQ4uv9tHgLjngvMYWULrx27m3Ckh5jkLUSvTXYW6EsQxSnSTEsYe5LPao6w",
  "key29": "4PZgkWMqNc7AR6Gny1fMCzNqLDxRsRPvZywa3VsBRFsmSbGXZCRPwVdMtpLoTExAjpeu5R2zbKeRLeUcbG5ta2rP",
  "key30": "5fo378SFT7nz7H4rZkL8wxVAGSzSd3FkjAM5E645tDxYWS5mkk9HcHnpeph59Vesj3xgMik5DayrxdcxLtkvsTS4",
  "key31": "5eVREGWEcFwfr5bzsWhZbTQLYDo2Y5CRTK13GRJAwydT5r8Hka1xCHGUBCUwethfxjD7Lnr1dqM4Gqo9DBxF2fKh",
  "key32": "5vWuKDrvW4LcKXaF7BenBx4jBjYhTsuMeyNPbKysd3Xc5cw7cFKXnJ2w2N27zG2YsLFmeFovgyd45rqbvY35fyS4",
  "key33": "9GKAdwGGhapt3cv7MSGkoeg5GF3roDwT1z3mRtjKcXssYAbpT3chRxuwtFLML82T2p95Pd4i4cQVfeN75n4sv9s",
  "key34": "2QC8nmynuN6MHSLMp2vYtnWZjWhW1xMrr6wyEpeP3KoMoavMyP8YrneFbbGpNcuo7A64nWQGx7FMcmtV64x3JMpt"
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
