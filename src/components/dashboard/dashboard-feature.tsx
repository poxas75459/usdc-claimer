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
    "4K6kP9svpcYcYvdAEN7qyp4RU4RFDU9kpSMWdvAkqNuCtHhhR6ZvA4GEf2x5gKBKqEq3X6EpYUmZRZFYo29We2FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEG4dRMErNdYnMCqY47KuwbR9Ne3QY1JPWd2Bg2FDkx9uY2o5gpTk1x6rQqkPNWrPmBSTkbhjc87FiSzqAZHdDa",
  "key1": "3u9mMFZq6JTent8VuRMaFY7D2k7KRm6wLNeeSPMeMrPNpmLTQGCXSRdiYnQ4uY3NuCRd3UeKYQoTKA1tMPmrAaHv",
  "key2": "wgoxfFRMtyrQiUSQ9Txf9hLLESMYHhvd5oSu2f9bAkuNJ15gZZGty8DPK3rf2Lh1WYys4Vch76coFhmuSRSthzM",
  "key3": "2xMBLqxXpuxaTVd6mD3fup1ffvEpexLqtmyuu8d5Y6i2e1R9g7Mip5pU4os2kRMc6AMhb5E5HrWbWqadV1FQ6TXD",
  "key4": "5YnL3PMdDN7NjFQRV8Vft8A31rDejqq2VC2mtYbsMvFrEWc94dSgXEqs3v57q28PZsJKpYGwkRJw8hmRdFwzsWko",
  "key5": "4VRPZF1oujFBLztet5BrtpTbNF9MAoRrgy7wLpyVYyP7LJwnwbXgtQYhtMjLz6PSgzCCUgpoohbrAn3Vcp3eHx3n",
  "key6": "3R5q8W7ZTwL9BH76gCYDsaWvPjk3UATooBJknarV3UPb6dDwGB7jMf4WmC7ZBYHEhW161gLbrEkfCMdwWZ67QP2f",
  "key7": "4Y5fvV5mP5RxftapsS3fYucCY62YR48Mz1SZDq3DXNXAX6cWJ9Y8v72cftAU73qLskNiCPEAUdk7q81Q4qDf6Fn3",
  "key8": "JxAzyVqig9DU7zRAUQeWNNwuvsFKwKi71NrDc3cKsq3o8QAeExgNbancJFzWwdWZAxp9faco31WBwZ6gXfbwJXQ",
  "key9": "5rhwACFx6xgz2yomXK3SFx884LDDK87i6uQNvfBun1QFvLrbMPiLgaCbZWbXCHbrDwdwRPLPKAYd8kkJLiczenCR",
  "key10": "fnzeXBV1fUARpqtHPzCAeT3vDBHEfj8HXs9hN6qfcQSDC4tcw486pweiu2WCzjnR5Je5A8cVp9aRq2iLHJRaBVZ",
  "key11": "399cZv9MdrW3LKSZ4yWHrFsRSJjSKuwjThCahM4dCxjCzTmkRNYY7SjWfzwTovA2QXumTBmGEq8n3NXEuZWtVnuU",
  "key12": "3jtK93UrKyzCzPqo6CuraTbmz78wG7rnUX2bCzSRkETvMA5Z5EqqDT2Uu87BtcT7V5XXjuijPgPHAexDc6xTimD2",
  "key13": "23Unu8foAzrJot16M2GFmRRerpS63CxiMyqkmgwN56n8zgRpMGs1VBGbbe6drXScqJ64qbeRt6sNSi9aybm8Mjo3",
  "key14": "3tT6SCnQ1qLrGXEUMCUCTc9tQy77ZGBa1mzvjZaQiyo2ANvn1NH4hh5Sm3gbWb7M2rGsqvvM9s7vsji7hdHvs2eL",
  "key15": "4jsXvDcqwWzhAfkswjDWwXX31XE8GEqeabujyPAPNwRY9NKCC6Rdy4A9gd1dDFTQtyQBttRMWJ3E6ppiHTmbiM3f",
  "key16": "3YZtPPSg2yQ2mq3eemgevAYG3veCBwNpKuW7rqGsMof1rGmACSaFbMMjD6FAdA6h2r72vfNP6Yxtmcz4WcNKJcYP",
  "key17": "3pGW5GonovbUroHW4GuJtRaknGLgGkgnYmFNnntyu566afdx7mCnhPeUibonpSxc1Y2snkumfPRMcAPsCQ2x82Kw",
  "key18": "4KtYWGCEgFvE841XLM2JR679J3ReNobwviNJiUEJNhLCb8yJx4gBBPaUBZ7DQHzW9GN9QrBme9PkB2mTR7MacbyJ",
  "key19": "oNVzquoz9qbYgPJhMmitaVEvz5nyg3akC2WzSkRYgQuLfz2dDFrXGiNk3a9nKyqjpHPyPDK3YWkXJ1mmsercZLx",
  "key20": "2BaXNUAprWJPWBE8zhcpmRvByLgqtpezn6LfvASffG9ntWmWGcQAAwVbtNRAWPRxh5S37t24j7L77XhJZop6Ax1S",
  "key21": "395hGHV281mRJWmgfLRzkRjoDGhe59cbApudxfcpcJwGQm9RpBtN2G6qHxtyEaEzBEaUsCkPr1MgTpMo8EgSbNhn",
  "key22": "3GieT8jWUn3qDRwzxYqDJrpgjWugdy3kw1FerSbWKLNcms9KPVuZnWbuWYemhozAyrFe66ryC1CN8az1D7jjLxkY",
  "key23": "2BMWFR7xRji9cG8Hh53P8rWHYSxgTrNdPtzAwb6FLg9nehCrFTzPGpL65PoeiHAawBr2fmF8t7nmngXwzEwxXeWy",
  "key24": "bNDYob9gp4bAhJPs34Spv8Ve24ECV9QRgqxYxukejtZHPG9VYf9SqBkkzwhzi7hKWG9jbPfmEVEtGkm3CZyQLzK",
  "key25": "4Eo3Gnuh4UfbckKqQgHQUGyxdUVjYwnYf6eNkkibAoy7SEp3r9mWips3feLUxMRuuzRWUCLGUZ4M77ugoxpLuWQo",
  "key26": "26oX9DFRe12ZWrQCtsBLRJ6sZN1nnDxSSarH4RZdXC87MSm7BbnzZVm4CjKgzd8yjRAAhtLwCfpL8YxUEw7kfc16",
  "key27": "4DN4twLQzkmmq8sEadNPgD4vfgs5P51tdBpg6UrCbnMDgPquqjfk97toAXqPmwbm1wPLHhuqy4YznmRd8GAmQaMX",
  "key28": "5o9mTFbeTmM22GePz2TNZ1nJH5Z2BscCQ3bwmZKfdujggvJa8cuzdfFPEUanP1ruDTR51Yp6YCeZAXF3GKeSN3r1",
  "key29": "3x5SXczXz4NKSJzN6cninNXPVojeH6dZc2EAPRRo79GKRB19BK5Gr9hKQboKUvsGkuaZcUK9AKpF71EhNRF5zKuF",
  "key30": "4pGVjA46tzuvfNbTBbtkgLgCNQ59F8fTxB1VtPHU1rVg93gLpGFewou9UeKHXmuLdBn4jfWKGEQRrxv6UoBjdp8j",
  "key31": "5sJTv3XWzXiBWbosmpAKdkVQmzvmeBT4qs82ShZ6chpKgLNL7vCEdtjTNgbcafWkqxnUxrZ8EPHM5yUDd6pXZ9xv",
  "key32": "3CsdZJvnQxPZbBATxMSfRV3FYGCmD48p6hHapR85GN7uQpfPNPJ2FFsWPakBfuzJ7zBQnChRKzNuN9twmKbP5aXy",
  "key33": "5KJx2kNQeVPVPqfMKnQhbBzZTrKYNjcg4hYgMSEUJHfc8dqbVd2ZSzd3QycRjC9AEu62Z7PucUtF5Xg3ytvpSu73",
  "key34": "2XVaz4ZucuDABfBXRJuf3azWGFLKVog81Dzv3SuhoyCdfRwzNdu84s5TxvtVUc1GvrvaqKn1gEH16LeEjhLTr7NF",
  "key35": "4cSyQ2pXWsrCLg7wVsdz9tYzk9e1hsEpDJNTuPzZhWTtPyirSTkiZ51PEBX7Ze8Mti2VfitEgSAXoxUM3UHA2tNH"
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
