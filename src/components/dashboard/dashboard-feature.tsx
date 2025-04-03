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
    "Ud7R1eSKnMrT5bysZ1sQ6kYf7q9jS4hcbxQfr8kNPrgPB4AzbdMrAVPTVEoxjcLmSoiqMqJUdEGq9dCPaGeTHtH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26R8hfaQkwc3mFac8dT7z8Uuq6RMexoh7q2z6n1YKCEn9wJMWa2ooh7b5HEwXRJXpYw8aZoNuh3RWvnoYCQikDpU",
  "key1": "2n3HuihwFXvumSJdjiXK4YZ9apvzTa1t7XLid5STYo5rtPYHEAr4182w7LsyaGC2biYaCCNsGyn7mWR3vUDj6SAN",
  "key2": "4g1sFxFa4dFKSypKrfHmp3AjpyTy57Rrqth8BS7aZYEXnEJYqz76x3xJieVjLFZDgGXeReoiPLoUULHcAU59ZRSj",
  "key3": "5BXqkfhWTj2HwXrWLs63Y7N5x72944hphdyGwLkQBBVWDU3EH5zgZwbNTms7pmCk9PXrKyVWgpyEq3BgFU1p85Rq",
  "key4": "5pTTvVY4BE6ULFpD4tpTo1P6JtmzP9LRg8wMwTkydhwB59RL28QQ6kfRj1AXWuUKvSQM3EPEQnvMmFY2xa2okira",
  "key5": "SpHrMKL5TJmXYM55bsmnRBW6xndExykU3DgR4Z9s5txF4Qz6itME1yzkkab7qzZUK6Gk4WNms3vVQoPqWgRCcQ9",
  "key6": "4oouJsvrin35Tuqq1fjuHycjgJ1qQtHgX2PgyCUdpxwjVzwPmyUeXi4Fqh352zFyXNuYwKzanjtDteTYhB3DfjMh",
  "key7": "312r6U7nu7musZTK6izW3RUANewzissi2tVSSrQiXctQJp3qjAgN5g4oNr2tBWS9YhRtwvfzPYVDXojnMw6sEPSM",
  "key8": "2cNkFZ5mjZ7x2KpQSmhA9efyo2qu6Qza9i5V4hvtup2N6Qao9jUzNDYWwfYUfbVzYGLj7WsFySgRSueSajQTCdUj",
  "key9": "2Zqt7W1CEsQW6cdzzqHBHef9YJ1V3FsyZUaTvvZpwJH8Pafbj8png7SD7gnGZB7moYzpwShHaLQvuH5mNScFJAob",
  "key10": "5fCHENjDdqTZd1AzhAWn8wJsc5URzTkRsHrGw9Xrp4vZii125s3fuSfHKiBTzwAgbJaSjo4g82BvDzhcKdzJudMJ",
  "key11": "5MiKXcEnFsC5E13Vtz6rLR4bJ251Dw8A13ftAiNXtHQ4V5Ymq58HFszzriXc9FieJRKTq34N6deuSn4Rgif3St5G",
  "key12": "NCiigG1n7yqEWghQ9PRbVt4aUd4E3QC2eEH1aWgLCx8SqfeLqjDZD8DPkPVsyS5oBmNXK1TxTMuNjgEgJBqoKYE",
  "key13": "5bkLSmmopLK55BjmiaUPWsqi7cHQvrF3jSvnp3DRKYzqoZfkZjHC6hAjxjNvMUPwbmkkxRfyL3sjWhAqDCiZhETJ",
  "key14": "4dAjyMKSVVC9ewn5cVgWo9zUWRGZ8ZSYmXYuFixRWdjti5mjwHi1g1sz8ertrnHedYsgKLiHiSAT2pZySBe23Zyr",
  "key15": "49KfMH3LXmBC2KL9qdBqM6BpzMXnNWZvRRsB7adeDCGaoVrpJZes6rGcFN9ndACMj7fsqZW5ZWYvWkw6igBWfKwC",
  "key16": "AptsT8KCjFKJCjcRYW8K9TrHhpSLG2YUooS9V5JsiNnn4As58kNnHcZ8JvyHchXpgcsvmELkeKPHnwoe7kP4N9i",
  "key17": "2HEyMQeyF32daXhj9f9UC1Xgyrw9yNmhfLWN62bC3fB4njwrDdfZePiqsYZyhj4vXrby4vmLDD4uDrurBg86hfHw",
  "key18": "2douunJduhmZSQkcNMbRp3bSQGHnULH2gZxzayErJxaiWisQSwZpd84K7xo4ba6GBzvkuDa2u24nR7YTBQ8X53an",
  "key19": "2mbeepJQ7LcU3hSB7XsUpCVMFGfLZ6V6tx4uGK3bHPPXyFrkp1uPix2iPDZUUaqjaY9Qhth955T5UGmQPSwB3sZH",
  "key20": "29o5zeNcNhH7BE3Aq4x4Twz4nvAv73Kk7JWrpTWLpisYHEbctcF7po9j9BkX1HT5YnfKhrFjyu4fAh5EN5ya1kGm",
  "key21": "2dugXLUHEDoa4faZ3yGtZ4eMFurikWALQykYLLEvxLZCS6rnhhjJxoMbLrVVwr1yocJ3inSKSqHU3CR7tJxQSqF7",
  "key22": "3PS4xvxSt81RDZJpghpfh4214WP6kSgjMenZq9roGu59g3AGszsbU4XXkv2hAU655QTxnS3g3fwBbW3NaK4UN4T6",
  "key23": "UX9zfCawjZh3RC8yTi1xpTyPs1cNVuSM71Vt4ribPpVsCNbg38aH6YqaJ5bToGaK5yZvg79Csuj4eZXk1kNVDWV",
  "key24": "2aWaQNQqJy1ZjbQ8YWPkKpZPgrVfigTHSyTjudpfqDDkMmpjyAazWuV9jVwQrbgMNyADvhbc4eo9wynv2ubX2Myc",
  "key25": "dMH4Rcj6CMr8D12DwzmtRvAp4XVdHyUKwYXioHVhACJSV3dqC1ojbXhjMavkM75bUxgX1HBstwrZC7p5K8JeesL",
  "key26": "3LgjLrddHGrZmhZ3R3NVLxHsEDuZhCQjbHxvtATyJ38HT36qb198ntvQunfyR4DVzp59bteVGMjhsCGdXCyDBay7",
  "key27": "5KK3DhGKPFJPsSrSHaKgZtxyhESM7SztQAgeXvkBNwsYF8s3dMrByhDDqayZP8CyY6BF6oMf14CCaUTTzobVTLnS",
  "key28": "3MQecCV9VtaGwkTyA5wtPbMu6wkm1p1w6HLpv7xEEDT1fdYYGFuqsMsqBEmSBFN6yMmKBTdas96XEeYzaLxHKxxr",
  "key29": "3yQEYu5dnbiJH7rL5pZshAnzSeFAg2ew9U4o7rRvK1NhYxf6wQATQaEN5PZibR7yiBws6Hw6jeSyH99BWkynGAs2",
  "key30": "289UQ8idHvWrDBvP6csxRDJPP8wQdWo5Dvvj7U8KZGYxYtp68z7xAhQ9aoq42BJMC5T35nk4SDp9EMbSXEBVctv1",
  "key31": "XsLLfY32XsBdcNjyeG7bN9g13ok8RJD6wpv1WaxcYZAfN8rM7c6jnUs2Yg21kQGAMqEJmcQaiQAeg9DsoVjSe6Z"
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
