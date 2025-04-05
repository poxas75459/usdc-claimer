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
    "4Np7foHBg4ejKUW3TCHTKjqgR7DxuWUi8gDanUyVkecYSj3qWBzsm3cq9d3qdV4ivtj8Y7V5VuDxj69PKwuvnRc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifoX91NYmbrWmqFhSZLBFWCkwxsf1tmjnTdQZZijxxnqNMf6Mv2SKEERvHf7yRZFGG1VokuRhg29rD2MDwhsuYH",
  "key1": "54qbkRogbJffmi2ivqmBGc6zhivGkDQK9ov8xS7i6LJdsrpVK3n6PVmfjk5CYSDzCWurMuhKsNh7JSL8FP5rZq4K",
  "key2": "5dvVzNuXX8mnvEUJjNKjgFyM94VJ7KTde76eksacH9FP71BkqfWWJV6bkdFB7Ef65DcDbHbLmhzaLp4vDMrVWDZz",
  "key3": "AmeskL7koLQYC92f37u6RYLRLSM3wqwRrdgMG4N4ZdJ5D4hL7C9SkP5Ds9eNoEGN3mkirZZVTKb5ADnPotqh1sj",
  "key4": "4V9mnMMfs51mkE6UKZazPrXMHudxDmDyk5RJSifAiruXdBWqGZ73Db65ecSarMLgLEP8zE2ABCqa9ketoYLdq61q",
  "key5": "51Q1VxVJcZdL8GfHyZeXqRe3MLs4qKmjn4JtiVE8xiLhq26ZbnBNHGbCQ3BTmSG2M5oYNm6CrstjN4wwfe4oSchz",
  "key6": "3qiDLjFhD4p2SqiTmTHciDLFZZT5h7AqDarrsVwh7BYHs5LeeqJ2H4jGaJ59and3YTpdFXNAu3WqKk6AmHBrd6de",
  "key7": "3p7GunG1kGexcPDyVn88S6RYP4PKWFdg6X6uU3srCG2xEahBCpKr3Tck8mdg7kEgCdxeC6eJtK8gkUeKfAKeifMU",
  "key8": "4shuAfXfVjA5hrtEVEc1GAsyP3SL4aPKcYYcc5dQsiBrP6MCBXrh5eQ15LC2V8jTmL6DA5aJfFhTsdjJc5ey51aM",
  "key9": "UfjHzxWvFC4TWNRdiuYYgM4iKUXE8iMcPUpD78u4MQwX9r8TGw8Kn8zi4MeLN5pWZLw2iFBsNJg3Q1HX4jPHG6m",
  "key10": "ZKKSdZw5VDkX3RZLKXFk835PVBUTveQL9Ek4mwCMxy3Z6McfktiT9boqzp69CLrWvCV6oWkUdNPoE87u4yrkFEA",
  "key11": "pfWKhWTLniUwkKkXhVQwEUktoCDePgEJonLzJQRoWkpJSu11oWE4peq41GXGHXMiboezXhxLiwNEsvBva8k8ffY",
  "key12": "2AQ7asG9AEmGf3HPqy3rDhGbVA6XEah361DZ7HH1eL5kcgo54Gh8LSYNNq8GpxAxECospzJFrPSXKvB2sWckP9ML",
  "key13": "o1Q2jRs5yRQm2Q35eNtELRxpFcugEUdz6UopSUTQMhaYX8mWPvy9CFg7yL2A518mmDriaCADjnA9vXrBZbc4NnC",
  "key14": "7NHvHKPHJKWPfs239QWx1h91aGyW5xe6fcNfz1LaHXJkuy5bj3AVhcbMdpiNrARQrpB6htBdPP2pyKmaAPRSkm3",
  "key15": "2EnWTqEbA4m6njuPaRGkmGL52GsxKSioywJDD29fBK6TS3L1xQh3zY6KZ2PGcqF7zjWPtjCLUwXLPXHQd8s9diAA",
  "key16": "2upCrd2EWK47LjaSJGDmuZJPBcBJVoCioqXGCnTLxwxyRdiyiHYL5D3RJ1JyyJprT4xdRg9mEkc3XUBUY3j41n74",
  "key17": "5dVeyudBtDsq6u5eg7fuQYP5UVMPGPdAsCoVpFqmi4qZqoWLoiGtMHgn3a9NwJVGeEmGzZdoXvRKZBwMzcQ1E2R2",
  "key18": "5sQ2nSrnD7mGnKDaEM9zWWcjxEco9gfmyk8xvmki96N7QzAsd1dxLXpW5T7Td7pDXKvf2zpZr44if6FaePbD2rX5",
  "key19": "4mLwojpobZm7P2rtwvDEAYDZKpCw9gmehmCEgR7riLTxBAVR2aw7zJZTFrNMn7TZAvttQczDozv3Z9YyTmdp1SAo",
  "key20": "4LqRdnJxhNtKLkY6DCCBuBYQVgS2WK2H3C5yDswB5CkKBoidMGpz3UyHGxi1grmS6tRJdqg1yJHSA2Ph2voHDoaT",
  "key21": "31erK3Vq1hZmtBXiMemEtqBqMjKH4VCSm8qCWj9waW3p2x4yqCDKXx2dhpuqRb7RHq56w4ZQrfGvTFwJ7pD7u4xW",
  "key22": "4jSdmrYbEdzgEvyNvVCmyAWKbnJM6h8szMLfX6jVUaCR4DgCWEyHB3yjrvNGzP5ne9taNyt5H6FZcVNYfz3dPWd",
  "key23": "5VnKLP3BmqLBn3MULuKZwn7TsWVV5YpyAQhvVho89JyKeaffxegpYJCVe5wK1PGogxEbAo6JXNVzK5jUzJvfBQ7Z",
  "key24": "3XUPdupPiQzSBFrWW9zrNTritos5stbSAL5ptkzQxaR2XFYYMFuQ6cLvzSc33DYHNpTQgJ6kjwxfnXrLyrBRwBmf",
  "key25": "3iiW1VToPChChQuCzFUxPdRdbWF24VFvSVdp7eVYazGfKU92RGvo9qMDVqL9vPGsXJquY2XaNTMyS6gBESceJXWu",
  "key26": "2rVpB13WyfVpsncGaSM89qLm9S8TMeWSk3jKwAiZD9RfB6a5bQoJBPuAEhavrSmygYRiGDVJUiseG5kZevMer5En",
  "key27": "2hheDg4tZVMQxCzenyFtXU6x6m48kkShghuZvD25QSZwtEEptM5i94YfJimxnBf7aDPNaU9MkdjbomquKoqiNJEG",
  "key28": "fRqPrFKw3JrobxZ4P2a2MzLjF8vtujtdsTBzMknykX5sEedHLXDBwoMzMauGcYN1jDqq2XryhVhJkay6VvjJqzW",
  "key29": "4jqoxy58SP7sNKiLe828y1a9QQ4pVzvB5pQLBaGEjDu42PcNW5XB5RvgSYxJjn5LNvWvcUiCBQ5sp4KjeSBjjc6N",
  "key30": "24nt6JoE5nytHzKF9ntFw14JowgfzBaAypHyQhirXkg9837iFp7AgE1v1aAYZm2DJGtJYgHGk4QSMCRwdU89wMoJ",
  "key31": "5LKjXUhoEiZ7y4SHNh9cku8q69wkgNjF82pojVLHzFDPE26bzaPgza8dXXPBRWEdnG3cyrkHa7DdsPDVxDwYeVrX",
  "key32": "4LYtfi6K6BukAckYMPYR5oz9GYKzXLudqBLC9RK87YMLPiR7cNyozXtV4otiEmmeLsbrr2LZpJTX3F2pJKqnqvoF",
  "key33": "4Pj3MyuKwkEqBnfovtFuGUPL86FSZTmsSCNgg5bMwLdXArPJqET9uHeDbTo69VVQAq21KTtKPje4F4QZGwsp1S3w",
  "key34": "35t3R8bXKqc8UbDd9qZSCkodJ4casJa4Pz1Cdb75USpc19UwEMrmuM2T8G86xPH5DuFuyfNy9yADoKd4dy9B5iPF",
  "key35": "di8sr9HQL1B9oawzLrkemMh8azMXb2MuPpZedSPACAv4xoMcw1YVPw4R1cAKsdUnaExn4e3VxdtvZuqCRsww14W",
  "key36": "5ccd8Z4ysrVm1YUeNG4YGCDHhPhAFN9keNndCaXyUfc3zr9sNhpppZNi1iR9Bb6xJ3is3E3wmuuwFouJBQLuFRZF",
  "key37": "5tEhZYqfohD4F9iLpsKEPHwbcdDAkV2UqGcMBLRqCRC9KX2PuQ1kxi5iwt4yc3pVDvkePHzLNEFq6g1RJe26FQuY",
  "key38": "3VaTfesaeoGfRFr7xA6vsHmMEBAbfdXQdZXXvx8okKVrHtQy2nyBKyejc6jNgtPm74wBKCbLn1Ds82gEqK1eXovV",
  "key39": "5DubzoX9L7QVio33kZDZ2UFrdPQqUCpVDfc7jZwwgviXYYrMd622RC22x89E9J5jMNbnJrhVSq5aF2suVEkDy22b",
  "key40": "5K6KGYDiwQqBf49VWgAppczvRk5UASkWLbxB1GPWUDHd5VxQoZihDi6Py1hpTPvCX5dAmepnAtYP5byaU2nHE9Mq"
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
