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
    "39yHq3D9XB4MsZP83VD4nmZfACgGpU7bK5dKoNe1BnkrZT6ZfY9NKBSD1NRAJ9Vn52LgKy9ALT2ibLvK5dX8J7Pc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294kMbS6jmjSaoZrY7UzuN8G8mbESM8QzYCezGLhgL6qWfbcJNYkzPTaKwmuEEy78cfsHwKae21UiTtucrGwdLsS",
  "key1": "62zKxSMccxmSu5A2T9sMNniHQiDRv37ZHeGs1zxub3ZknEDmJuGYxBjtqFv8zDExpGCQRshrn3S7ijNKfejNzjcY",
  "key2": "6P6JwyPyQd9DjywAfxviZdDNneheJmHGVSsiX3wJwgkavoBgW24UwXn6UGheGLDSX75T28ANnURxddh6i5TrxQj",
  "key3": "3A5chDPZGiGTSJxa5swB58xgGpmrnzUF7pdkSEBfYA5pJbUVih82MedB8LTYE6oRJej6J4Cwg7tTc7SrGr5posRM",
  "key4": "HQGS198csMwSTxLFLXB8aqr6m8KzBwRDF3aPcANo5haP4MTsF9SLK9QRLtzoiESphuHe9ah4K5EdZFB9zvdza9K",
  "key5": "2cE4ufm5sR8GJ5EqLy29zsTCBFRzQ267E5muarNi9qoLmmfBhRcHGb9icATsabG7VbtVmc4KQr5iGbmY68tXQCSf",
  "key6": "2aRgZqzKgdgsLTkiet8wSVQPsvmr1LFrWKCuBx6XG4CbaCSNghPtHqz8rnj7Ly2bteoXzFLYvpuNVYWRb2buAa4r",
  "key7": "56t57N26pR5gEsReJZdM1Hae9JNFjvXJKhNWugH8mVnPNKSADUmBJDpadXq7AhrQKCcMeDJHFaVaHYpPyYtkWmcY",
  "key8": "4FpacgySMaezzTneEFDXdcQbYCou9jPQW9mJ5a2L7MW9LrxAJDH82xkvfMV2w8pPiRzDZUxoiFGLWQ3Zp5FGeZ5H",
  "key9": "RvK2DFQxjJ9jfJkTfjH4A5fKnnr64eAK5qQUFNvNsM82MsmXSpxdBX8bJYsU7a8Kzc3tUaGv4Db82kkueB6jTQT",
  "key10": "31BpGLq9LY2oJAKCiVFh6q9cBJDTYTXBYwEdX9Qz1Cv578cXEPEZvJM64Xs6ejHZcM4dUc39LUgSqYymde5DMoAX",
  "key11": "4fznEP2BWwDi2vWmPxNYWYQRAcVFhgWVGrvzZLMhGdBhoQc3Go5SrZhTTE3wvQR3gF7JReRNoh3K2puKXKfemWZE",
  "key12": "Wm7YQ1qhijKr33em8J24pkx6BtfxsGYSY6RSQ87HhgHR3sDQubnStUn5MRGTD9wq54jjknHjT1qnkLVJNx86UmK",
  "key13": "AWhS5YysbaWbdJuTA9SLHnd9PejawrZmGKkZ4P8wKPteSyjZr1JPPpuw8xZfxLRYo6JNAvNipoC72DYY13hzpaH",
  "key14": "2VXhCd6BZdNHGGwnk62xQCaFKBHjQ9kppjHktQYp9NvwkagAJQyGVFUgBZmxCCKSNnnVDuzwYfzEUg1D9bMx9HAP",
  "key15": "Hm4rU2uSgY3Wyz37Topwnc9jVsMPdw6ijmuAJLfjENfgMHRKuShpWDx1uhCCCp8Kio5ii23kN9gN1caRbBZW7MP",
  "key16": "4BgctY45dhLhqXCNzMne8wtQYLYLjDqtRjufu2j4s82x7fwTUjsw9NMPfrZtzbjYddYwggFJxGi9kgiF83xfGGQ4",
  "key17": "AVwVxmB1eph313QC3zTpvgvPD5n5DPDPCkMrMjfyiNM416qjhEc1sX8suNndz54Rc8S7ywza2qrWDry6WCkfeJF",
  "key18": "3wpaVBJehvK8tR59Pf73XmVhd3KJQmbDSj5nB95fNWEBHfFiwjrJ3BkWVqNdT9MyaLztmokxAoo8YXSZpiRxL8oE",
  "key19": "3D9tWRKqKTmy9X9dxYmp4ZdLT8zsKxUH8dUhdzx7XcsoHPGAu5F9CsufwZNQPUDhCwg7TkHAKf4U1TRAK6WsHZkT",
  "key20": "4g7JymNpz7LScx3PESYnKnfrcYdtzjByQHLeCVunUjLZFWvJcUTJJMkoAJjxpEU5qPPSU1Yprph8rEPD621zTqh8",
  "key21": "45wWxAktn1qH69J9VowfzNqTsfU4RysgNaa7cDrGrWniKpvGW8buyfKX14jR4we9msWmLMApB1CbYhzD7yqJeTPk",
  "key22": "4c8QJJscYQFuygiaFodKzCPbjJfZz8ygRcpzhKaZX2qK1qs5tcaneCtLyGg1FMnhkgtz5nifG26YfMoVe4R9gZrZ",
  "key23": "318NMtqB7YT4kVHHQehwLNNEbpkHaLHeMjYwnLkZbDnTdh4oB7skicgwgCr9RgsJWD5iuZamdJ8jqgBNkBmUaK1p",
  "key24": "4ihAkCu9BVQ1ZfUFUaopKMjRZU7BnT1Ep3cxyuQ7vsWZKoQvcQADFFZTAdCUiLKPzwMU2qbBmpDtuD6PA4Sw4iiu",
  "key25": "3y756jqhcWhpRZeVSpCugAAFkbTGjLe9S2UToKTPFN5uxsDqybFJeDqGkvdQLZpQMgtRazQ4HZ6PVVW6UpQF1AW1",
  "key26": "5YcobyHWgNuegEhQ9Ht7zLSTPoAScmcNygwuNy5Lwht95TWy7UuupDV48FcKuKBKMRiVJ56ZdXYDcHSaYnQcienW",
  "key27": "4TRiW4qnhCP9fF6E3tx4cQvZFsq8423S71S35xGNeJJp2NVAQgNMKCo6JzCcFu1FN9w11pwVPXUnsTRACDa4DxT1",
  "key28": "5NbJ3MvRfH7K8b9F56Uw3ip96TEpgmyoZwxu7EVwRnk8vdmTg2hEzdNoLQpbwabNiVWyEEXbCGBqEx46ifbcuP1Z",
  "key29": "2Nrg8sWzs7EQjuyiwuqSka7APCD6Pip5p8yAZH6qjaXXacfAUjbKPtGzi7ir1vo1eftL6ysUAGfiTcVLEwCuQppb",
  "key30": "2GTmNSzZm9Eij5GpvZqhnExAorYAe7z6PSvxaNRipCEJ4rC5Eut77gUHcmNRN6TfCGq1pC2NLNaZAe777mpzM7LA",
  "key31": "3PBuPLHfy8HM4YdnJ8DZW4tiLnhNKmXzESum5BdiHQsbQZ8VhYKGHTMvEccT6BPiuAfQsF9SUC3geHz4aaHL23d9",
  "key32": "5CgvQn4iJiqdoMEW5aSvJ6idZFcm2QYakApkRzWwTZufJzvj323wEGjoXf4Tv9RDkJA8oB8qDiu4yj5xB7aj4RZS",
  "key33": "38wYzmMatuHwEtFDApJ71Nk8hHGCqubZanG2BawomwktAkB3YtzCM1jdFhHzvi1ZrAoLMp7ai5jfrJfsNPzBv8Zn",
  "key34": "uJ6yKVtfPHvbvGXtL2m47Q2tUpqBRnrEqtAX3FEmFNav9prdPKn1xqfUsS8PC2HWMhKEE3qxkLTZ2yx4jBQzFTw",
  "key35": "36tjiHjqYvZ8UsugEitp1jRspw9gSdseJgL39jLwKPu9npLzoM4o21LpKQNBmNqN8LyZ52fjWwuiFAiz2oqCTXhh",
  "key36": "3utG2hgiYmRTE2kqWW85augEwUVtdcBQpg8Xmmu7BNtC7FeyBiMuHKzp5y4Q6J4VqUrpAUiexqhjgC7VofCubtaJ"
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
