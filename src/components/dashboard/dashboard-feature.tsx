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
    "5a1uYc63R5Ld8Luf5cjZ7K6WWgyqnkrDBWGYB5aAn2E7hkv8u9oLGdUmRvHmdoeZiJ3E49rUxX9VYHoL2a6HJa5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XVQmrKXt8Y6MevDxTPQAuVVADGRcVcwEbHVncXXXqHNXqiRp2f3RvErp7VfsZceDB4RnNTmmW3qVf34i7VEikJp",
  "key1": "3K5phzgdRBKzufFXPBUCUFuHJaqKkSzXtRj9YD8C4e48QSnEgktwV9fiGKcuG29oVV3SFpgAwrbq4pLtMDAbjDrA",
  "key2": "48ddJSE3w658tJhAgZ8LavymMzyKfoj9VYkPY7U7SVdgwfiKe2udCfGBrY1Dv6ht8p829jzoyydnswgaMUE348Sv",
  "key3": "VFgTnHeD2pkAvTuxbS7uHaSoPE9JoAee58Q7D3vcMmgre3qpBAjb6VTmTB86jVrjxezWk7bpd6SFbqFhQDqi2pQ",
  "key4": "4fVpmRDKMQ4Bo3KG7jFEgK8933wctDT1z7Qa6xxLDt9c7CtcRW3JDZ7SscETfezP8ZnTRidNeXpyNp7vHc9ouka8",
  "key5": "5vF8yCAt2cJJmQa8NBRdK8nJF6SShoTWqd76zeUbiWwCfNXxsxsdnZjS94AQSnUgaEoxKWKbYP8PCZqqfrPK6XNE",
  "key6": "46FXF24KXUBDZRYhkFTxjaeZRkYZxNwjuZrmQjsdj681F78BCw5SqkWkhrEjjeBHEBL1gfJt9HceGP9wetTke4MX",
  "key7": "3hBDqqvpakdTeP4FG1TAJWhwoCPpMofjvqmzyn16RbkfBxDTZWYwpP1TQaT3rEcvkyDT4t9ZDJShsn3YAuoGrW8n",
  "key8": "2tpKFQ9bkdGeX7fByqMTGtLi5odgEhHzaVc3fr3eKj72jq1M42sJxe3eWhXg1HrDVNDNBjq4KZBC2mBZ3CpmQ1T9",
  "key9": "5o3qpMpV355iLBrBkyXrxMUzLDoQYG7JxUR2mwyPqYq2xkUgnJ2pVQQh3p4pyNkC4nqzismoemZGRmxarLttFKVs",
  "key10": "51QvRhKAE4GfpTWc1HcLxrvNcpWBvfZ6zsyVd9yoC7TPxgiomBvgWcuLBckShu9BKA5bBxNNRPxW2WbkYWS8XTk4",
  "key11": "426nJQ56GkwGh8zLjUTpMKKiDhXqGtknFxkA78aqwH4FfdCaSpwAVBP13emLZNbeCkBbZJuwmijeKtha8UJqS2UP",
  "key12": "5LvgYgV7NPLnqKAaio5ZZeARsagfwqmFyuRwHDUsKdscCdhzaMXFWo1HxKEH49fujZrfCfCehxD1uuMDxsNg4sw3",
  "key13": "cNcGL9QUrGvZopnFxpWna8oMiPTrJF9oSZ7AzMSer6DhCCLJ1D8CPzVw94HEpWKkpsa7nTjUAhNJMxZDbHmxF81",
  "key14": "VvAGjCymjff7CFPoqu9Shujff7NKe82ksQUwFE4TS3GBkChn3j9BWWf6uktx8zKJnxLsBaPeeWYPd6R4AfecgNN",
  "key15": "4p4bx7YpAhzH51y4Ss9ZM2McoaDgt7EvnB1cPocKbqaLhvfdqWpgsYHat15CxkdbWFwqRmFXbc2VW6LxezXZWa8V",
  "key16": "3LKTeTwFdDT2gSRcbQFhphYQgjP9mK2EsgyBLeojko8cvwVKmrC44A253eV32orqr2qA6CZJreL7uPYmZ9u69yTp",
  "key17": "Yu4pzEZwtuWyC3NuRGSJ9axFmZ6AyfajFdrYUUkE43nju5FyyjPMTTr6qrkCSYo81pb8x6bkgBDp6SBU3VLcpKK",
  "key18": "qZ5HVaiDCZL9YZUL1JtVGuUN558ZjsWeEciUD9iTX4Cquu4Fun6FvhizLPZ2eQrZthTfjgRXMWPmZX2jr8shJti",
  "key19": "4Y85kzEko4qrdwFs435B7NZ3GQmcr88FoJEH3ToHfQYAAZyUyuE6kgBtYivMqXRTpCjxm2bZfbQV3bDyUbzWbVo5",
  "key20": "2sg77KqyvAH8V81qMDdB3bMv6vwBLuh2aCgGDRdFeYVHiD3SQ7aQhe1ZPfu54hjdw4tmPQnv4EDn7H73mtyTwft",
  "key21": "327jFGqRpnHisMd6zgZRvg7KMxPuHhh3Xyqv8auAD2HawKRBr4i1BBwe3Mgqrz6Vqdo4a9TKpP2mdzULDVk3fTFg",
  "key22": "crLzfsoEqEfpLZpXVqgsNtd6ErzL5n1o7mpS7h3eWpQgnUVwVfHcoDmTWyxqBvSqt1DiygbVPtgfh8zdPdxv6cZ",
  "key23": "5d8N6L9r7o6Y87ovUkLVoTEnn17Py3QXYgjNY8aBoiXnG39kfmQF62vVgcYq8rppmSYF36EzpEGQyYQnUvma7rkC",
  "key24": "5ytCknyszxLJhMfEhXZ8o9QAqFNwm6WWjXmpXQpKqXidmUY3aM6yc5pwnkHRiv8DWRNcRDoizGA2m4q2XGQ1PQib",
  "key25": "4T5U6iSNC3AMnwHHdFpz2Ltk47xkbMiCELe2P1Ktuh3AvtDcnu1JuoJ8fv75T6Wto7ZHzdTfLMbvfKug4kR9BsCZ",
  "key26": "2nV7k83WffitjyAdMdUjmiXLKeLohZGkLyN95EU1ksJNKrdJU4eJJeTfdAVWs87xdfACkK2UqnZtdUkuBHZfFZjH",
  "key27": "4XFtKBhso4CHMzgCG6LkDL96aUJWXd3S4XQ5rWxpGwtbHWk8PyE8NqQr5ZnAp12QxeXjC3Fa83pKP1GNs6woRP2V",
  "key28": "2Puxu97sTooRaXWgUx5Ztsqaqitku7GYMwy5HE5qmTpiJ3GRszFNnpgxPLKPmqPi9FB5quwYP33yQdHdyUxFNpzK",
  "key29": "5poLv7Hgha1viPsxB3hehF8amYzK7naAyvJiGXUrVf4jF3V92QN8ozqbRX4uFWxaUvFZXXmh7pMsBSE9qFaqUzAu",
  "key30": "JLvwrqRsh7keumnK3QhdawptjB5VkiyGHTRMPVYhpPFe6LuP3GUKpGKPnPjUQ7hQCjtDvUmtiFTwDL7jCSG3jYG",
  "key31": "YgzLaW3D5wtFY4RxRKsdrmpWGCHXCR9CczXUoe9SYDjZfnAfmythYESFcCesQXftHvZGCYkv5E5cTBCtvLVKTwg",
  "key32": "4VtpK6pnhD9SkAi4tzEGgRytn2XcVcyaved83L6spXk59BsbdvcjWdNiEYrVmGoAJJtqiJPNobPCEWopqipWFrsf",
  "key33": "5hxvdvyFDjRfkp2nMA4JfLssffSEPRpXg8gDPsVzCDRBsvZQaAkWr2uazjeQrCPeL7VGBXHJFERiSpykcnp4FfBq",
  "key34": "3as5RZUZHgZD8rKjrzMRM2TqY3wWDDvNYXpsDAq92eWQCN9kNSBehQZhzXjV6dGBh8MaoVFN26Fqz1WrAvtmVXhr",
  "key35": "62hiSRXCsXgU9Kn4tx8WjrWjnUUYLuLFtUMVjY2Uj7N5vejAzCZPrcZEBC3hC7v9UpRFxwfkHWqU1ThHkVnwrtaK",
  "key36": "5VyXVHLTPbMY1zgs2Vj61hvABJTp4VTKwtgDQznQvL4qzUYPdxuhyXQG4w7bUYReWpVwxPCv2EYzmUrqpcqYo5Lf",
  "key37": "4TRR5ahvm8sCK1MdhB796qoqraSKcqithoC3L9TfUmca8CSMGsJFDPyeWRNowqkNSyFnh8AZYHcdY8KDcX4hvBLN",
  "key38": "kg2RBdRf1YK2eG1aiJu28JoUSiBxX5koeoCqiT1W7TbjCr9zUQvPLeBxfLtTa1ZWeBqiTxUPbRbshnJWin2NqAu",
  "key39": "39h2di67tFYsDL4Yc84aNJK7qEQFvbbCZbkJsvG5wbc6FvDPDn8EPvNyoDTV1H2dRjS8EvWB2kssU8tTaVF4wb1t",
  "key40": "42N4AhTExna59zBCYDFPeSXH4LjfLaLKWYPCabZJ9TKvqB3avJpGetNfqj8xyn9V4m4c1tFf7J9d9VqYL2A6989s",
  "key41": "3RRx3VpUuCMzSC16PkSKUJW91QcGi72mPP3CyUcUHoxg6zsJz8J1evqp6NCSxCCsFKbh1fHXL7n49z3rsGJWgbdL",
  "key42": "2VGvCrugi4Hacftt2nRLZrQB4sH7KDGijdH1DB6KmHxXmvE3VoCCu2yXHXVp8MyCzLysxueU6vwjDZGNGjJD3hPg",
  "key43": "5v2JizUXu4aUFaViuvRTfjSBG8zGSomF2WwDR9CYascMR3ATrZwVuipBcZkRStba4eN8nADun2bYyd1JJy6zJsG2",
  "key44": "4KtZEUg7Z56rorhEiV1bx6P9bUqCWsWJ5jgLDSyss8UQhBQ2aUpHwz6b9HUb9jCRkrmCSTst9Xm2dcvnEg2HN2xp"
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
