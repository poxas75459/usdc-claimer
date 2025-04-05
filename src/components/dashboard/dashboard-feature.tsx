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
    "5qwA7J5psjDkfpExYnCeCETyJcAxyiBz7KKKrVhRTRBkLb8sAyNKFmJuLUhP5TEa1jCQ7mxFWsEwS3Wcmd1faUt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kpT2RsZnmFawky1kSjr8pJPssBDbvaJZjvCaGyAiRhmg4SDTnJzUYWAK5ismrDz2KS1YhscFmuBgjJrFigvQgYx",
  "key1": "2NNg7rcPrFbHKHc8FxX5pcgE8GtDXir3zRVm1MX6QzXAPcAcB1neuADQhgP4Y74gyviHnxsiEzCV8wSNYUyiGKsK",
  "key2": "4TNW7zSR85rbN7eupPRQzR1HcHxcUS9i3RUFcHDELzHeUUTvZ7hPFYsiS5ahxWHSz53MnG6bdNHncUfwaiHa7YWM",
  "key3": "2bGruaV78FC3MpWA9VySgmaVEgfUdFpmt6kvZHyZ8bUxsCmrV2KTaZaUXcnHBRHPPg9qpXXusPSoUcLC7ghkVZkG",
  "key4": "2wt22Y51gz6LJvbPJ9LTZFRSXsroRyXEpaHgKXK9PTAsiLfvfnwRPP1UujfMqzGmup68Tv67oYpufWahNM7jvpgd",
  "key5": "5vCfwyuY8mrfsYyhpxDyuMAxMxWVDVikpPygTGxfsSXEbZgAhvXARCsJsNQG3MAT6dobkzfJHg5J3NGfQQj1eJ8w",
  "key6": "4aU49SWnMzJNYKrqt8dS8DhN7jNA4Ldke7iqCHa4sRZ4gkiXLvsgHTyL9RiG7XbCyGss7PD8Cbe4hj9661Xk1x94",
  "key7": "4bM9wuSmF6SLfBBoz4kmfsTcwwR5xraX1b48R4dLEgNfmuf7RAFi4D2obMsoq4cDPcMPhSekJDtywm71fXFCXLEk",
  "key8": "2f4LK18oBjjMZQkWyN5qXiQFNs8eRhm27MnmDppRiniJYmmdnLkEd18Ba4tBxxtmWrHbFkLUC3L4ywJauEeAVkAv",
  "key9": "4ra9mqRMyosvbuwBt2WthrWpRehACkdWyYpA58qjdTYNKKPQ5ZMpqREu7gc7NyeMFgU3JoJDt1dUjHfrA5pChZQ9",
  "key10": "3QtccLXWGV9bjPSHkeQ5XNZNxChr3cz1MQ2TKUFGb6ckHr5UqXZydHy9rMFBhF1rWMfUkxPFJPribEtBj8ZSigQn",
  "key11": "rmgobXR7VDuuqMyRpVToDvyNiNdY6bPzbFXKRhwdcgZuU6yXtSZUYQomErPPcV7AjxaTRf7CbBEAFgVFsFLUghM",
  "key12": "2P6v9c9j2qZbF2hP5yNpoPexC8rgmtViKdbeEgQgtSEG5pWUmiZrPfX726G3vemA3k1Jia5rd7beHxZydHsekgoW",
  "key13": "3pws4R2pQ8YvSK5QsByQbyHH8niDgaSFV32wsaDdgfatof2CjzRRyrvyaf1F1wGgXodnUSa4Fb9Ai31ujjmszPhE",
  "key14": "4JxjhyEjTFZymd2uuit54gqCGgKYC1kf2UE1355fhEMTW9NrHURBgrBqesG7ervsh9URVCYuPWpKDBeGnn1m87qE",
  "key15": "4gYbCoWgKbF8sUXL4cdTt51frpCs97Y6he3CLTAXRef4MauGs8G45WYbKxscKT8LXavxiVXS3LrQJNdoy9f68rHF",
  "key16": "3xNEka9c3ozcvVfiwAUf9jhkmVPPuYuBNazAAD9W4xgoL1cQYMEnc4xWBVxSank2Z7F8GNZdQDnR84m7816brq1G",
  "key17": "4hvXZDCbH7TGjU75dbaB7d2Mxckba2S3i7m1inRhEjdo3SAnxfHZTyH2Cv5VBniHvB8Dsnfd21KtntV9YVeJMCMQ",
  "key18": "3B74LYFDYEAA2gY8y6cxwUQ8wsk6QTiAegK3Ej17wZGQnU9dfZ68c6GvfF1FZjTeGMsYpaTTT8mnD5WRL9Vt8Jmz",
  "key19": "5Txo93Fcc7LW1i9YKDozfAHV7hyTaQKhrLKF3G1JuQ95ureFACsnhRSvCqTkp7GBRy6hJLMazqxJbmXy7MikYphd",
  "key20": "3UcTi54XkCwXcMx9VANqMR3BQUQuBppwMixUYgYm5nxcRJnhu7ozWR83rCPXuAwXoG2sMAWuLMP6Qv41uVJ1rvMq",
  "key21": "4U8rBsrpP4faJj7RMK4YprYbxffgM5NdsSShddWRQXV2N2PcmkVmmanRVXB1GBhQ89yknJSWAgFQ5tSH4mSMkAwe",
  "key22": "3uyFu1XneKgQ1YKLb3UYqVe5A7SKwLTcHBWx9Ht4HXkWRt7TsTVSiZ2cqREaNYhrHCapzeJHpFQYdvVXUv1dUuyc",
  "key23": "4mB4f5opXzdAEAFaW3BocBkTku2REtAtC1o9danPQfjJdPaXUrdazW1jA47dWVVPiPgfgGnYR4J3JCiDzjFVd2WS",
  "key24": "4tEk2wGrMAFzBPQE7FLtUWd8wFA3Y8oJKzZ2oZxMk9XRcYW8A5dsahhYkMdZWPrsouDoWzRe71jeHBVJppSjiMyr",
  "key25": "bnk1AFeSZSszYshHDHza47a1SuZBcpuSEf2RizhUEivsFSZceDR48sk4vYNxQPDbzQGVunQmujZvCSuULGvwjmk",
  "key26": "2TwhwufKfGh9Uqg1FhFtXKymXssUibvA7dZmvLEm8uuX7RUGGpu9EgpqZAFEALvz68yDwKnnwDnf1tAc91h4TS5q",
  "key27": "2jo1SAx1oNBjuNpkqTXFvomZLCDGoL9ao6EszJcVUYhbJmukAsqZuZghm2VDn7347XF284KgYRLd42yz9sttNaTT",
  "key28": "27iAdM9hPWhWLtnPJ1r7Zb41UZMiZY6HyAzDaMyq8TrRvgmJT1CEeojqM6zR82EeQn2EfcMKtgiHXzC38Y5yF89T",
  "key29": "qoZ8exgdnz5E2jYS7ifq7B4p4B3wxb9e1JqcccP1qgnKvBNSPwGpWDSLvbmGa2e6egrGkuBmrqPZzBvaDiiZxRA",
  "key30": "mtrzeGYhaeFG4VRkew8fHtXNQcT5kPrUYkkqCmUjQzHy7C2zgVm9imDC7VmpWp3r6GsNbbKAPqS7YihRErKEczV",
  "key31": "4uvBGRkXuDRgf3pwernciApMuN4YpiyEJMfK9toekcoDtd3fhZSQBa37dw1wfV1rjsMANmjuXpoquRY39GgqCNRZ",
  "key32": "253wGdhVo8opRg5cPRpKv7b1FRWoZ74yHTfRtAc4k2WqomcRDK1NBo9FJ5VtYmnzX2unUmu2VknkYF2bo2jmwatU",
  "key33": "5sSs5NNwKMiW7sXsvJTJccdCf9o9mSAFf9hPZxXidPkvNJjdm1QXbNBzpYL2em615uaVz1nK3eD9VbKQYebKdxe7"
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
