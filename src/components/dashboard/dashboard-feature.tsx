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
    "26wCqXC7SFmexrwNDhrNqymorFiQyvAwS67tqMXrscLTpFANedLWdz2EXYgUaZdUFMjBYNwnfB9tM5DCJMu5HDxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DuzEf5S2Y52MsUkCh5zSd7Y7arhWGnx3eNm2qVxUJ7qgZfyTRxj4AcNLMtq38Pnv3o6USzNyjrv6cq9jYGtBBDe",
  "key1": "yw6zvHb8o5WykTWdzoN6shc3rYW8LizPaKvPz6uUNv3vkRsC9DYSSY46S4iJx2c2rFBmYrtSGFhQ6eDEQrTb2jt",
  "key2": "5eTVPempuECHFmNgfxXTxnzgoB5es2J7doqFCELaVxg9uhTKTY9GnD1o7DVRk1H38qdw14W9Egsmz2zkGiV6trUn",
  "key3": "64auCCLWCBUedBnGsyEAV1EpAaQCeBKwYHTMN3tLLBp1BCd69ttMKNYZYFN9WQDKcPxKQA3hXtQAsvjKwYAHmsJE",
  "key4": "22wtXTUi1qnncTBKfkPnaHkeN7vsyGGgF8bbbHnCzJAMkoDgdSQ2CTfD9Erfvaysw1jrYtyxVe7HgayJXLXVgbcv",
  "key5": "3aXAyHwFCrH85XfdWRsMWe82vPbdaE2n1CC76x6Y7MvJd46S21TpVoLRJHq39aBczRgMAnrJpocMXeGGQPW21k6V",
  "key6": "2rV1KKQD9hM3noHhTTZAkTt4WTMaDwa5BVJr94s3au48Eej1XbE5mSLxPRA4EbG18hB4ddRRue78433pLd5EgSfG",
  "key7": "4pSkYF27hB5kXzZtNGSkymDYVHDVFuvVMJbSSAUBnVZX9Fo8T3hmXwokvQ9VL3uzMN2PpjB1AZmDUdK62CFoRQHG",
  "key8": "4Ub5u8ArdMMbDKko8GS5j48UQe9cjFRHxWJijP8WZsSE9cNgw9bFwKGrHjiAwoZpvZaPmr7X3RfAZnvb7xZvweBa",
  "key9": "eiBy29wczjAQLv8mC3YLVoyTpwds25nHg8AcqEMTUJ7PKvPqAWmZcRcjRpDCCogtcCpxRHnypwAspxGmSQoqMg8",
  "key10": "5fcNyqhLLJykimTLPjQsjkK5bJQqHwhhqYLqZSVk9K7JMVMxC7t5533xMWHNrB7kcLHRVvSQJyTA7NpWSCU8eArE",
  "key11": "3CBxU2gb1uhWrrMKFqQ2aMvdgJiVu57n1x3DwUM93avBw1f82iFNt9uW52TtKK2eMdd8bnZXZSnccUX3bUkqCKQB",
  "key12": "4cUPvnpTm9ny6C2Fs8AP29WczGNKGJ4qFksNa4e1A8Ty9AcJ2Gx8JFxB87jkggGcBzqyWGc67V3XwDm26eeFEYsQ",
  "key13": "5832VNFE8oJs6mW2n8dR1M2Jmj7g6yV5hx48kL4cVcNDC5mMqodJkGZgLwAL2S7E4yBQupy5AANnK6jLnKpexoSa",
  "key14": "2ZwsppGxTM5QjMCq834AGE4MQ3VBntJrQQ8jabTJFAXsZR8SXZCLxbPctxmba1r5YSS9gK1Xa2eJujvBEp2wKPdi",
  "key15": "4GLWpaGrcnZt9SpjYQBv1gQ97bkVxcaLAo3kQwJjJvPMmdRv75JMFvdhniam9wAYqXb9xuhFoM7Gn1dmDA6GywRV",
  "key16": "2jPLyD3UePTC2HSnoqeWVdsUt7fPFz6GVfWMqm1dt5KAybxkGMXopDY1Jyri7PfWTSFanuktdfYokjy6qw9A1Xo4",
  "key17": "3ZCnfSVZWf2LRSfeNszhVpbKm3jYfXmFxxC33WPT4jt1jGrUJrXtdg5jXd55dZwqcMJnw8rw83PACkD2DBDuK15D",
  "key18": "3FyGf2R75ywRmT9mRVcpsJA9eJ7V8akMYYGswhCazwb7eC63MkUs3bjHUyN6XpgeZtssKGeTgk9RXoUFNZ4cXNn1",
  "key19": "5uiJBE8egsLp1zwWrk9LvPzyu5JCVimaMSTS72hdviqatCp9HttgpfkYDEibR1Nspo5uBq2bZQDCbnpE3mtXvS8k",
  "key20": "xxCXggaXsAatmMWfUu7adsAuSGC8gbRFgNWS1ZujHuT4BnmvTWXUGnCo1jRguJ5R46jpEZJDxG14dQ5irsjtu2A",
  "key21": "miDYrn2mR8xVQsb2SqAqF3Nh195tNLXs2wWG99ArQd2AMHHH5SKUiFxrnWP1vZyNWqeKNDoP7fkNp1pnCBwcyeF",
  "key22": "USfmSJ3nUBsxc7L7Hpr9G2WeAVmK9rU38iCZaC79owNeQuPpNZLoKJpuNfFTh2UMQtgTcvoniiNj2Vckt8iJrxd",
  "key23": "29t8EEivktr2dMmDv5T1Tm2dheY8aagnunPUjdFXEuQU12mF32aks68DBkDtdLJ7bBwy5uQ4XUsEFZNYR6hXATKK",
  "key24": "3x5tUiMystuU2jwDhcyCKtdpXDK8WdnecVKAJXdWZbcKyQS4g2dmkJwDs2sx1Hw12o65uxKgbVvCKjHQsy42NfsZ",
  "key25": "NthuNW2SMmH4yCQ8rn7ggQuo6ykJbPJcmWKmAtwvKZFHbZVDsKpvvNm2Fo3Sx1dSkerxR8SP7GxJDof5PMySPHb",
  "key26": "5Emw4uCxmUTAGL62PRsM6fN9mcqps4fVnDMHBozoruK568hH956oAhwDiwWqBHhdkHmin6gXer5QNhfoC2QiJVyz",
  "key27": "2fRDL5Che1CRn6125SSJ31vUANrPBSUMh44GsgrXNa3TLp68ebLyq6VGtKAXn6SkcxKdAeTJFrJHxH65oDzVBLBn",
  "key28": "wd5EDNEuGsPjKKJp5nssk9mzqg2yoYT7uTUrQtJiRVeqa9LyzJGPeH7jrhRbrYGAA1AojRA3fdFsu2qvrvyj86d",
  "key29": "4SYjgnMrMAsPhAVfBDSbqNLnKJppCkx1wSRbGwTT9yb3a5P7UGL8S2Y9XqwZNShiyEcRmLoLDbYRgZ2u9umgoAa3",
  "key30": "4MyR2c7jnyCFms5beNj8eWTxxrn1xUVFUnBfAR8z85fjP21rE4A4V296F647vzWwoeS29hmtRVs4rU7MFtGwHUq4",
  "key31": "31uKKF3YfT6zSoQbkVwv4zsHVxFYWfMdsEK5MVeMviokQ1SSrGC2FviSPjuY11hGVhQTktUQmXkmcssG3esrhmpC",
  "key32": "62jgUEAEu6ynEFLNKWLhXjNCNUBKC2ubCUCxS86R7Uq49nrwAghUkUfVkNVsacUFrhRqh9jmqdPisLBJZap3X2ea",
  "key33": "4aKnoaESsji6P24tpyjqGyoqLUX9JF8yZDtuMvMUo1qEQybcPv13i5ErrgqD2EXXZt8f3adm1TJuQevQZFzf4rnh",
  "key34": "5xCHeHVKPHjKxU7RNHrBiaCwf4UNYrM8QBCP4CFdWcAPSLsJGVqY3yEoPMMNPdjNdEkPGbfSYXgojpLgAi4uFDbd",
  "key35": "iGhiNV4JfQavu79jnwZJ1HLnbz73K9hKbwnWxUbawvXPDDX6ZxdSeiNiCXBWB1JHUGCrX18bWeXTSaKmxfxHRBo",
  "key36": "5u5agzaMqkJfZonvNa565qHZVkPPKhRsDhw7NqeadbvSHJwU5GBXG7E4zSN3djSph8HefkyacC2KDkRS1fpLzV3b",
  "key37": "3TkRWNpt5vjfdrYnyYzNj2x2ZFLes4RM6idujZ5JKpfkkJnuwCZoZE8eQYgFMZwF4QG5Ar2GDX2i4RH4ksL7DA3E"
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
