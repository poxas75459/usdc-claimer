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
    "4i2Fb4TyNwU4R2fXJk6hBBLwXkBPQxC6CpZq8ufwTSVS2Rx53p39UmBEDTExk4ELrNK14p9t1dwmULs7rfLuGoQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42qJJTNzJXYxCovzzvzMDYhXYTRchPfC3TDuH2piofVAJDi29mhQEdC5EpSr9N2Hk2BPZAbjjRzRy2SDu8AvyvX",
  "key1": "jdqtgcVi3xE2oQNQzWLgaadA8fpfnWi9UxHqx2eijW6fdaj4zo4nVzmPam1uhN7bBkYeeLR2z741JwoZjdAivNm",
  "key2": "8YTz3zr2odJPiZyZXGdCm6ieNJxKzbv2Cudb8EJ4WVBYgthmmdeud5XBsnpyDKMBm1x4WwnEEx2nozJDCuV9H8G",
  "key3": "41GiVh8FDNN3kQagDnkp2Yj4Bk6dhi9gZ4K4BijQ2doE5Anghkf46fwqAm8aoKxhoCc47x5a2ThoRqpMv3aSD4xC",
  "key4": "Lvn5SyCG9ewQ3dN7x56ajFrD4oFgyPbs4YaXKAXykZFaRzBkETE2zvzHzCLmdZPg63UYDXq3auEaRzsaKFVyK1N",
  "key5": "2bMoTcuybgSdiokFdR7Ci7PP3Qe4jffwNBBhFuNreMuHgXS75EwQCL9FSjffLFJNFeuYJHLNWKrb7zr36R1jLNVi",
  "key6": "3DRWxrrF2sbigvSc1dAoKXuoDeFanC4DtUDt6WWrcBJoktk2vyyoH2RWAVuyp67TZBGrwatWbTW2U74vmcbAedkh",
  "key7": "5oWPqBp2o3QAx1iEYSDkbqHbk7RE2xFY3Wzi6agBRT2GjDdvyRr4z9Ys44MFtX6qt9qcQip7guddXcYjirh6oxqV",
  "key8": "2bPTr974Z5PbXUUdiC6x4jnhKq2AnRDJM7FyQ46bXENjq7aqBLscCtZEm2Wc1Y9zj39R9taYPccv67y6EZbzuLx5",
  "key9": "tfSASSRJWP8hpqzqpeYpWQkQWmiBi87CGUDgb8u4ZdmSDyJHDDJe1bS3NXvNzaJoCJZEENQaYGY4BTFCLr6ScjL",
  "key10": "5EwDG14384X3Pb1cTSZLasCCcvu1HyLDqRzrYzLtamT2yB52opEzwa2Fskh34zBKJkaUgWavoZhvqCC8i3UT6rAh",
  "key11": "4Uq6MLjae8MLf4RJ6Ty7hv4NMZyvpdpparCLVmSGnsA74t5wzE4QSKfmFQuGxUEtmteVbDmc7kaKmceMrz2DYpR9",
  "key12": "4NYJvFSjK7ZZy6RaT4WZEbbcvmoA1H4LnZHBHkn9CQ6JUb7rDQfJ52ASNoMgUKGNG8rUhFD6frYtJTJ2V92kn8Nh",
  "key13": "2gqjRxY5nScyFyCkT1MuDhTm8nVXPp6YiiE7moSE8PqRWkevnriSept1UGpD5gJKYTYfWXLaxoSJSQENGEN3a2Xg",
  "key14": "55U7pPSyge398Q7u7Dm8YmdEDRzAgbfDqJsoA5ZsdqSF5T9QRchG59oiTURYyhEQq2uFxqb7dTY3Yuu7Hrx5tU6V",
  "key15": "5XBKBCGEBJCeTxmuyDiWmJ1bAisJvvcyZvSDbn2mPYevsksDUsMUnstaAb8WG2oWsEHwr5xcDuxqB4gJEH1Ezpu8",
  "key16": "3m5sZhYpcir1KUgRNLkMdcXGHdug77m4FuWMyc8uy5Xpm66TVSK8vafF67XhPmZjcnr2SQD8Tm6XMYLAV2qb5zpc",
  "key17": "5ndz2JjPtHaMZF2bDxWpV4qek8MAiNy7kQmWGYEMGCvSf7kqLML3be7WpK8MzTRfJQYWh9gSqV1BgeqD4atB1NTz",
  "key18": "PpWTDhy7mzhjDkyMWX4HmPHQ1WHrdEBTVdNGgw6czMF23JqV344771M7n8QwZUg4GgBKXXFvyjGebKyvTfocqxG",
  "key19": "5UueynK9tXJhEUfhGreajPZ93pShma9GuRwM5uadpep2E3jsJTkMCY147ocp3hnxwe4wp6Qia4BhHJoohKpLdKQy",
  "key20": "1y5TdksmxtMyyMViixp9XX5MRWPABMWp3s5ZfrMZvJKUkDNYLXEUDGNzemxRHuEdXHDdT6uc4ryB1eZDwPgWgGm",
  "key21": "5dF9Gj5zdP7uKnxocTSRvDLiM56JKJB969pUHxS9BhHbDpQxD2a1afWX6SuuYkv2BzSTYEuzKPZ2CHM9iKXbFyjK",
  "key22": "3UkAs7sbCQe8Y91fAd54WQxckW4PnAA1Y5Eofkrzkuk2CibtjHoPHxGEikGi8RPa119kpnsrAcQTavEzjybDSrsn",
  "key23": "27W9MNBjgroW6ZAEN212MsU83XR1V96aRCvDfi4ysb47EZkQxfEVNnCMfxWvuJiiDFQmtmYb1VXZ179jCbNfA4LB",
  "key24": "3w7k6tUByPqXsy2d4rYC6uipjDZ9trTA6CH1pWrn5dfsMFm1PcU4viN6Ar49tiQEaPnrwHiCUzP2LF1SksaqGrai",
  "key25": "2KFMxNTRQsWk3bKA33rQLN2R4z7HsrLRxD3VqKetDix55YbbcqUmBSWnvvU2UM3WQ2W9r35fqiBWrZahr5eFZhzm",
  "key26": "2pZteYyUKJb1uWLffPHEDygLzaMSKNX5iBuR4RUFbFUL5wxj1nNuFGvspfLH5RDx1tA56W4PCe5j6uTXNKmBv27G",
  "key27": "Wg2USMWwyPDguftfPVn1Qfxy6WVPeVev4W4NgdmXYr98hnP6JhjmBgy1XEdRH1qsT98kDqC4ouVfUcEbJKBJWMy",
  "key28": "4YhLuzarGeyLnsYWYQidx9DfJF9KmH2Enk7Dee1RKqS7V2XMCQwEKzdnHLAhD8TH37bLdYyUpWJQJAAvBJoK4us3",
  "key29": "yQoNqRngUpRvKkGdJ9xJggaPcbAhaeJy9N31x55cVdpPQ5K2LUbuKXe1wrHX8qRHEnWxv1dLTGbo4fmc97K6NcE",
  "key30": "u1NhEaqjPpDqjhCLMYAiHHJ5TyQLfKNuCNQsmoixUqWRjRQQJ8qHpm7qmiYZEJB6k9FUyhKiRLGoJNRnmLhecv4",
  "key31": "55bLRcuVKX8Jj1AX5Ehp1hZNRh54FPKKGEXZbwkYSoWjkVFCSx9NDysRh8emp11YrctvoAdn2guG16mpnTkugZjV",
  "key32": "d7nyjUSKsQR9J43zr2565JA8RXz2esHk5xKap4Zjrq1RhYaTsvpdUerezq32fKXL7fUPbhGdVrbSvnCvT3ogu53",
  "key33": "2f3vUh3pFWiVySZnxaR4LRRU8oPkBnwASM4ihfx6Ne3xTZ2yFSaxWfC2bcqjmLFbnhuLzPDy6kJnd3oexF5GbaXz",
  "key34": "34fGFxQfFEgHEKqU9f8UBGD6E6WQQTBgmyQqq4q5THEELR2XYUm657pb5DEyqG7MnCErEurjdqgDJanb4Hzi15Uw",
  "key35": "5kkppy4bnAURX8U26fZYB7WX8yX2ck2eZuuzvk93hQyLUCx9PXHtKf5199XchBirsdWxjKNAdLrwzVQADFM5CiwF",
  "key36": "2dK3MVrDf2sQwRu2gEhqNR9cHRMFeGB68tkaNbRQSNsat7BVtorba6R8JwVTXCmvizvpw5heUnhZhHgFc8JvzQtR",
  "key37": "4JTh2Lu8QGiAs4ReYE4u4cozkKQznKkjXTAnZSz6LEXB9jPrnXix95yUBBoZ922kyyXVJQ13qi2GLkhWuEDt4YT9",
  "key38": "4kDxZsH1sBUUZS1QB66ocC3aB17dpxU1aDtDdfCUKfnqnEhESENU5LAXz8kp6c3QuVt3uHcbZLSSW6zdfRn2jGwj",
  "key39": "4CN65sYxWSKqssuLcPdt5BWxXyqBDmAkcrBYmyPxXxCKhsrWVhYYwqbKuBbK8qwRDZtS6tgzGJGiaE4zs7MJzsD2",
  "key40": "3AKbhPPBKpLg54mTzebACAkkrSuf4zpPisPPtGwgbpaFnDYjVo7fWKCRP4ASh1gHTqrvysip5Qoh3zUBGFt8Ex5o",
  "key41": "521Q8TR9AMwL11YibbqfCGjw2xexby5gtbhdU6CJwNg5x3NxEkzDnwdbrLi1WCcv2ivoh8KcbujLewEap7uTD2Ue"
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
