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
    "5xowqpXLvjyVzFZHzp8Dct3Uin5mZ8xFFT92uNcjWbKUSCyks4e3x1j22ovMuY8KcA78Xwu8vjkWeCHixxMoz98M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mMS6SMaAjKfX3As68h2cdPRiG27GW9sxcEGettytfgqHPp9TpWukNwG6rZ6bFEbgyRcM42ftdgBi8zy2YRd2u8z",
  "key1": "4F65wrzDYtaRvFV3N5sDoVpi8otDa9KL3eYt4Pg7KqGc3c4asAidJuEvVhaARYrzEYkivfnj4t8B1WnLUnaUrkNQ",
  "key2": "5e36ay6ZTjBfRuYRLq6P7pwnHCTcX6tkjeGT3HHR6Bdp1rZZkEzgHnLwBZMDPE7bVpZx3gmdqpqtJw64tezgcZiR",
  "key3": "2tS9q1Ky3VW2EQkzur3vGHpynYWE5y4AxhR4M2ggza96eBHwgisgtJAjzYALSSEVAxjaCafaP15ZR1MvvyvBd77T",
  "key4": "5TG6WNY5bRWn126pKoh1xwUwwez85xjvqii64WSimEyCqzbpRYgxf6zc3jSX8HxQDbMQmdKAcw4vTxKxzjf1t9fJ",
  "key5": "3Y8WHKb9cxCpPDR6VBryDrDBEjR5b3QfxLjpRrFQVipR2hm3rQ8G478E68Y8phFnXDgRbTRFqFzbLTZgs1vehJFT",
  "key6": "puKaraPgpkDQyfBUmMVc8uQ9LssD2wideyQrGk83UA7GCW6V1N5P3Cw7QMyr36TYiUPLRpxz8gQD3xfoYgD7JVH",
  "key7": "J5211WCMogLWaPAKADd4JPzf6PsyqJcmJ4m9evmiiGHagmWvsje4Y27xr9Gbz5Tsgyd5XdCHFRCAx8X6fhdEXHV",
  "key8": "5K2b9XuapBMB9tn2wqinpWCaKhsLfPEvVmmT6cBd1U7ZpsH6tqxQxY51UWbXr8v5SA88yBxDWD3pZE2fU5PdARTW",
  "key9": "4bsPQG93Gb2UBhAUKPQCHd68bnjqXF33V5KEFKQWh8tCVk7ZtDfHuE5EYDTwKq9UStTaRBFrrg4mBtDLbBuMmYV2",
  "key10": "3DEUPGEFVvjjB4veVVk1yeEjVo1hGnD4oumqG5RFSsuJVHQjZJo8385kU4YodijnH5UYSVeZFY8GqrLmN8mRzNdG",
  "key11": "3gDuH8qNVwLMzmuqFz2HpaSXrUAChJ5kwDAQipQoSSkkBdmsBuFet21Hp43kFWZrCQCVZ8Vx9dL2Rn8iYkX96e6m",
  "key12": "5Kta1XhS5WAdkweFugYB8gqCZXgmyZ2xAhRn15RQXLQMXFFgaBWtnHkNedzrfnYDrXgVjuj58QYBYnUCtwszwUUB",
  "key13": "2cg3fitaVP2Z7kLeJZYjymeg3JNHvoxKyVYhBCksXp4ZkG4gZaU2DRQSj6Js7P6xXDotSp1cnNe4vQXFuo7ExQTT",
  "key14": "E8wtrXjajcMJTSNKmekHuwfyvXF5pAsXL3bFBCsqwp5REwuczeC3NDGafqxuEryE4CeBQ4FuhEwnPxDX97P97db",
  "key15": "5bzbcAWjZKkBbYQRj1n99X3wAM7bvkVym9i5UTmmQhYqGLjSJBwXKQ82N4ZNcVwvN9ioHA6AVnLH3rzSu2DjX4tV",
  "key16": "3cYhp51tSmBfYpfuARBMCj5QairUhefYhcYwA2GFYy1H1n1wrw7WhsT34Qy9E4aHb44PTpGQoU47dMVoS4wULxCr",
  "key17": "4NTzHhpoWQGGDR7BdX8piGxrRSRNar9fbKL3uqUhBegv1GrtmFnioFNNCDELQi2Zoi5JNnPzkPNzznTWJT5XCANc",
  "key18": "3fsxVTnKgfV6S5KzqgnweopJB9oTDLqnepEpJCcfVkSLCZofNzfwKasAznUCarPGYEFUhYmPar68VAW1G9dg8qca",
  "key19": "4sB1i62N8y6TCt1gANy9F81ZWuktyAUwJSfRuxv4ZeQEtmthnuZvwuy8e4SywpJqMrCe8JNyhFNykU9XpBkLn33W",
  "key20": "5x7sgMr2u7fwenNjL9f3QDpFgUQY6kbkFqYE3TpejF5t51mNuWxyc9r8NQXpkLEpKUnwekY86m8mG5cmewK5xCUu",
  "key21": "3xa3vRQaiJLGgp3RsbTUH8JjHt8KoeSfYfhkCh3naKKymJWqWW5FRXGpiNWvasRrBFoyhmDcvizausn4W2xHnksX",
  "key22": "vXfweqqXhjQoeB3FeffS7zAqU9shtqcJWqn4RD724ytvfUggriJohKHNX38PojWot5fSyS4hCDmudppu5afFnhq",
  "key23": "2hfAK6DHncCGC4vE5gHsE6c8rQKC4NznEWXGYNBAuvk3xa78y9oBVxy5SbWQBEA6TKvkVFM5mxdTFa2uQhkNV84o",
  "key24": "uj9W3tNVuogd3RZn3m7eNZ2VqzZQhcY4iaWTvKnrq4hBL6fufpimpxkeR1qrZn5ywdVjpx2MStq3DXRV5cQ2m1m",
  "key25": "3Q2GHNevvjpQU5kFDj3GGKijmLnXLsm7QBHw9YPNKKD1y65bgcjSUKqGWsxjZcLk74w1AwnhddnfpokPzp6J8QSH",
  "key26": "5kCqaK2F6HdHc62pSXBFA6SQGxyt5GcZhBDSzTnwGpTqGfT5hZGEEogP42ABo6waQVbAxCLVQogyGo3ccfmNgmYN",
  "key27": "5GtGY8k888vJaNoqdM276NXWVzvRPqDwdnqy52ccpJWHg52PrUo3HpLrkHysaGEczaKsyQLYsW9rJfbAvvFgZ8Bs",
  "key28": "5Z3umDjFkjo2svTGRnJVCyLstQtE87AxTZ2YYkTUBpEVaiXLxA3kJtLo53ZeYZRNgUEF1da5H5nXPN25BRp17BZR",
  "key29": "5QPmsbwmUa89TuYgXLPUfPRJip46sazyfVEEwdpSgcjJZodpScv7WaQqz1FhtT8QVihTXsYk3erFhdsB75StCk9c",
  "key30": "5hj25DMhUN464ppsx14AuQwLBqw6JEcejoc6T54fVHd4Qn6KHwXPdVsSNfvnL9fbcHVrhDNEcVxpQspey6q4Thtd",
  "key31": "59NZvX9cs96GUCSxmzBPMEvPSfWC6V6KvRGKKtVtNczCaAQVNQL1Jrmew1LUiG3de4dchwptmCFHS67jdjGqrLMC",
  "key32": "4cMt46Er9VzkApmSskSKcM6b1yv7djbVgMtzjSVAFuiHtq1NCYd5AmdJGRLoNT5CD5GzijXAupzdfcn47jVZhrt9",
  "key33": "3XPCRrU5rA1L4oc3sQ4QWercgn9koUSMyqgPZsi5KRJh3iMr3x9UX6B5i319949pe3T9d7iJp5Ky6eH68DAXUydH",
  "key34": "2j7Hw2o1YXBHTUa7taqX1ZBXQ58d82aPEkpWzLD31gBJo6cQ5JYvbk7cZu4KusAz6QmbRdX2FWgQWE4HPZZfuUe6",
  "key35": "4rbnBstQ4UqnB6MimLvK9od9fZVPXs3Up5ZLEjQkXWrQNZykrG52cPLGptdEw8Vi2FmJ4Up25KxwHwYHZqhHy1Ht",
  "key36": "41wybWKCvS67WG6C5gAyeSLmPSocMusweKSB2VuQAq8E2bQeKnLQTAAzXELJ4X43Kam9hK3k61ydtY3UP9RgyFNh",
  "key37": "fxU93A2AMF9MKXmmYLPfGjmUXeYTpX6EiZSQ2HKD2nBe6iT5NEcgjFxTcff7f1DAMeaLWFwoQpnxoYurAcYpt8o",
  "key38": "1HQZcT8KSFjexo6MBcCNL9BTPQ7zcivrfrAAxKSk4yF91GvQeeQUKXDSeQyJJhM5mwtRWFb9V7YqMbR7UJVrcrX",
  "key39": "2b1N2sSVQsAc6ATza1s5FydePWBKzWLcTRfrPKXwL13E2f7UGhDSaY4HuFW8HGeFtw5SQTUSMzgp9fgtoQ4jmuDQ",
  "key40": "EM6mV4vKgTvazHFrQMqRpQEpA4cX3oUZqv6fGSuxfSEet9KL5m5PrbY1v1ncrWjt8q1MG7t4qxo3V7r4Uei3mRX",
  "key41": "3hcFA24hUv4rojfe1REBVhqyTiG3fHa4JvbRXkoDqNAR7ockntsViyuNJXo9peHVLQ931N7a8BeuZAcdBw4CwV7c",
  "key42": "5KMinWbVU4EKSenWhLcibEXiBZSMozBpKALn6PL2LbzFQjGrsW5hWRyMamgYWWs67bazr5gGdWGrWbGcUtFX28mH",
  "key43": "3vcs6WDXubtUXXW6avzVACWTLeoakvvFr1HdtfbCUocQi9PvUnnLCgZfS3qWHef8sNPSKF6ED4hCyWtEXm1E8E4g"
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
