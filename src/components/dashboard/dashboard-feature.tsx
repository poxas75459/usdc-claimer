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
    "42UL4w1MKW8LYaR1QoEoyeC3TqBr5v6kzrgrZiEN9FNDR7izsFoVmZgYaRk8sDRwyBzhenmimYeSDpnqtdoxwcUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWqQDUUPUsDgLAGXmK4QmSmyNVYSLMZxbMb5kRqLBENLTVaCvA5GMdsM65moESykDcSnQzH1rpYnEZqBaJfBwPU",
  "key1": "2ezQLJAconXZZUH4nNh9gojNYVvNhzWHP4r8wgZo9WvZmxisK6DgV4dMrGJExeMwbDPnhu8a4ULAm5qtT4VueJF",
  "key2": "32R6wDCk7gNRj465xrypQH4Lhu4ej16p2SQfuPcw3DQwCXfKefC6EuGeWzG4jzFDeUjBvdxnJXUEV1LHC8NVpjHK",
  "key3": "JRRxthGwSMtuVx5LshAB2xfwK139cxC3npUnsDyHAdFbcBaKJnYpsY9wo3sCgReXDyB5Ffd5qQ5x7bk9hUEbFT1",
  "key4": "D7Hnnb87NdNaV1814wHuMWBH6DPMq5MkSL1fsaUmt8BiaATSz12422TWsSKiXD3AsEAufNdXTypt2U2yZwcact6",
  "key5": "7YJx5QZndg7LBHwtoWvU9gopqZxF9PHWN1ToEguXSawMUh4iapgJWyCDksS9MaovJSJmgHkkjdKF1XhCpEb9462",
  "key6": "3MAdcsSZk2Qw7zupQ33B3nYL62QVdqYvc43GA97C4QVyimDrExKnv6j9381Bu1ZRj9dsTKryuz31k4D9pfEocgwq",
  "key7": "2c29m3F2JkuPDFrgWTs3RVGKggwHmUDTyeeCq49wEEpEWCv6moBN9jHXAeKg2di6LNcWh3tZjwPhXFgQikHdri1N",
  "key8": "2Sq2bqEFvXYqhiSWxFGgBqkPJyjoisBWii1N3jSHTq3kff27uCSU1L65LZhNf6ou5Mhjzzaopj8BNmATSwhEL2Hj",
  "key9": "34P1z3GEHJsh1hgfZp7TbHgqSTEYnMetGtAqoqspFsJPVQxprfLtjpqouE11pYx74oWuubHJRNUhVxTCv521VnKi",
  "key10": "Zxqz6scAb6TWz6NtVMshohwAhHnDSxsJyATzoHBSmemtboF9hKbKSm8HzFJw78rus9MtB5g3qrazaJ8Tyu8scgA",
  "key11": "QETdJKjVFFB6qVEKQzkViE22VdGSXGtc8GGsUfrRryD64oaE98Jm3Y8Zvj2ErXVWxaCYyfpby34tKRPWNvLZ3oZ",
  "key12": "61KKLN1VJxGFYu1oT2B8dxsbHYaHS7TqwGHSMBmFUSfG2wBfj8wzmPAXwZrN2Jnpe99mz9W8Hk4iqMiFpk1vy3Rh",
  "key13": "549icgJrAkmfQcv1D5nmjg4M2e27bBGgbEnJ8FRAHMjtuzERo7otxEkBMM3aNiaMcVjB7X9Xpj3hktUY62trhcKe",
  "key14": "yS9g6AX2kUKiBJ5BXVPrALj8esG93nQ8VMJHf9roZKSPNPxbvgCuJ9oifDzsc3RNbbytTrzUvw3Nyrj8mb9iWpo",
  "key15": "LqYiNhEKFMhyCuEmDJKc3VBGf8Z3U6f9gdbNU9pjiS2YpscCTfEDeuJAPfCmzw46wzxsm585UdUgJyXspeLaToe",
  "key16": "2CM8x7JhKjzwmXqqxicuUEkkUzRvQaEsrknhNMDUfwpSYPbKLGRQbEzZtQYJNm7Gyh4t9oPhceAfspZnc7HkaoGC",
  "key17": "3yNgfshGDKnHFaRhCsBVHvoXcBoLfGg3HgQ87uzHyWv9vBhZ81nUb4ooVs1MeRGGmMFDLAADY3VHpQkyhfvCLbTs",
  "key18": "4EvA8xfqtFEQtCvipcmV6PN5hmLQ5ptJyiM6pZaGqy5QuShoHQh3jUrnRHhwmyLWQbVQBLAhB69rNf7ydzRSdhUS",
  "key19": "2kXv61RLYKMgScgT53uaR5kwKuo3E2Mo6rhaHejo4WKXdWYpA1Fw4sAAtwgE86z7VGMrP9jbMfgjvBoXrLTq75Bd",
  "key20": "qE3XT8XE5UXfxxzGao5yGrGHv2Y37JtZuytFSNEYHpB5Nm7guGk6LfW2kBM41gUcZxrWJoggvsAfo78LGxppbcP",
  "key21": "42dEog5quYsYepQGqStTZ4XkNTU6yYk6Azp6mZBcKYwyeHtbwMDdERgAzrrydfox1TVFmWuVhGuFxMyRBBFmRUDw",
  "key22": "5L1jzFvyDZqUvEUVN24dLCiYn7Es5RWZ8B1rgEiFZ6xwTEy7dgR4ie8iLRRofrSp11jqU5Q75opZf26Tktp8imPN",
  "key23": "33sXXWTPq4TQanASfe18DGfsMiSG1m6PEqHs8okg9NmffMZ4Z3QoQJZ1WjoUgKm8tEsWb28AYq7Sm1idk6DBu458",
  "key24": "4qG4UiBkAwRdMmmfcrasMfx2cma7SS4MZooWufHx4BFZKgZAhMhNaFLXWfBEjqLr1mu5fs9qXyawrEx9BaTrEe3G",
  "key25": "5D5nHekhMnsc4nAyiSNspvGFcmQCeihkHWW1s8JiehgktieDfNsgJMSjNwttMuTrkvd4BAKX6t2ihnTF5jTr5NNd",
  "key26": "F5ACn5HM5xPFZiAz9vRaWTQ41vEZWmYfRA6nHEds7cgA5gVCrK4tN8MCq2LrZXNtZbCBWjU59JRJxvmETZWUXUG",
  "key27": "28sdFVbPZt6zYdi1MQRgmoFD6k9xqY7iSkPwwVtgrHYsKRZETSCeg3qRdHp62nLVnUMGzfibRcEnVRXiee1pBwKR",
  "key28": "ZY2LCtFa3zhVYUKkTGhKd2PmoM3JcmV4QYuNgQKSkPdQ8zEHMxfGNvMikeBLTyEmiw9VH4AQuZZK7LpnfHMJw8Z",
  "key29": "4C8c7B6pPBpQAjLY26hKsShhJtZ9uBdHZDYCVhz1m8Mwa5sRhXLENXQ27Po3psgG47BHgxy7F7tRo3QwzLdGxYWg",
  "key30": "2iNa5sqxwfhqfQ2eC75MPSyt2jLs7UcjJcgyApHBgryK1ufZWhmNYUwB9EP4wf7RF6bjbCPN5Cyzfba8xSZNSZxh",
  "key31": "2AHJMR4uELxsnvbh5t56tCbBcmDjFD56WRCzdFiTXTwpUkcjKutSx21fy7WCoTb6k1J65gBgLS28SWEHrCCu8cmb",
  "key32": "GL5LjBkAscbotpxsKuamBCUykXEXNgvZ5SZVTzcS3SfPBJCY6P6gXWWA29bW1v3my1NdsuGo37cRoXzz6w3K7zY",
  "key33": "51LkoQ4YPzeTdAjEA5Je9fxh1ypFcbvKmos14LDhrGZpaJ4Q4jHhmzTi6DNekydT9WeDiRHjdmFWcfFTfsvoyETm",
  "key34": "4UrdBCzaWQjbQUNAEK2VWAzE9eKFrcnxx5fz9aBK1QjHpF47mqg5zypxNuQck7nAwzqnJD4xfvdSqMWNEcPegBhm",
  "key35": "3RAkTZLUTm5ghbydxtfu5S4Lv4oNoFGXFjcuseYLgD9WHSXF5pH6qXUKivCtBkmPhbjvc99xZ1iqF1op7YTX1Dw3",
  "key36": "32dmQ5rCH2g3hBF7xS4qixNTG2mED7jkqgiZDYEv5H7LqXtvbCxmMU3QRH97WwkSESAMSJDABVwXPDtc8bRFiar1",
  "key37": "2nAgnRve67vUVXkN2AvYhA7GrxayPKt4Auy5oiC4CQ7k3hTreDYXxkdopgY3PowsRjWpXkGT3C5XyDmA9Vkxr1Gi"
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
