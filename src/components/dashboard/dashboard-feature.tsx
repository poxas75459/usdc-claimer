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
    "3FygAZQPF8XSj4iTZBXuNRjMTs2qceAA49nrLFd2MCzCW3sY4QrUf3P968LbztiUk7SGThBL3gdzBDZL9VDNN8A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZC4AWWd9HkYhzDASFtxsuG2kiEra4F8f9gXQGdLhCpqmSKTvixrnvnkNz92rVcvgYCfFusP5R3eZ3Gi9ac2Keha",
  "key1": "denoEoHCCiJ8EQeP8vevbZXxfyHFb2QJqdm42xKVVwsfJKvJQHMjVvyzkdqswGNx2rnGrYV5N8hEUutxEqmSmHT",
  "key2": "4gwsunqgKXpxmCFa92nxQn3pL9ai3A9osoaBZzhF98d1P82DWTrryF6zD8D6K5eCa8GcH6JTGBoW23WKCrmKvNi7",
  "key3": "21ySM7t9G3qqh1G1589K8rXAN9Hu4K3bNkr4MxxxAh6dF6UQSag3izutQAurqk618tWWkWgHaPaHWt4Jjf3GGfdn",
  "key4": "4kToXMKnBAYLLNUSTrrL8Rbh7yjzh4ePATTF99TsvESepWWr8jhhyWmZ5H9Ngyc2wuGJX3K6BtoptToJmuPtM8D1",
  "key5": "2LLLCpY6SbZnkEjrteWmTd5T3gV6Tyr2JhJa2yAhKsqtYinG2SuMjBuM3xBer4qq7f5eVE3M84N9oef9hciysrA",
  "key6": "3YVKcv6vZG54hPJYrmxjVEeSpKhT62Kii5Bd5aukxsJ3vpQepazE5p8CqbGqbofv229BQCVDnTyrGbgyV6a1d1h9",
  "key7": "44CkyZxiFyTEMCVDZ1oizJ2BzsWTa5pgQEAu5JUGMvq3wn6EdYXxypcknuhRbw8j7KtorWrryyZWJ3GWR71gWJ6V",
  "key8": "3ftsZMBbmCsPs27LbYaKrQThAPMRDvbGGk7oiuXiGs4tRXjsx48zXhUUFbWBbF6qN8PAUEt36tUxCfe1G9sbxQSm",
  "key9": "rGVAqqazHFWxvJbzavLqGrZCGASGnh7FQ6Tq6n9MPLJNLE4RKqkmuzk6qoBfL17jLKk8PW6L8YX2KouAznVvcrk",
  "key10": "38nbvBvFB6WDkBwPddtRYKLswuAZvhQ7HbwNi2AKoZjHHuNbgNsb142J7qjvSjSrAeGGc6D752kzgHUZgXmiKKfJ",
  "key11": "3Q1CzWJeyswFEBHrfJmoiW1DuYSaagFunv1jy5jmw2bYCEE1r5H3m7zcspuS3V56nq9D6tcqKZHs1DiBqJ5hHfC3",
  "key12": "3ES83Dj9P7k5jjAFBWaPfpzM2eiGBZg47nxfVpQmD6upCQDY1xbQYmpexTTSBMugrrF1meScypWexKZyNdz6GXrp",
  "key13": "3dNmify5vMwFaExC9FXVWpDSF2uwXKSa3mcM6pSntkb6FkWL1YWjrDRMuamGMteqnTompbtH4a3hTcwp84uzRLnn",
  "key14": "3mxBGtUQhNhBH8jphMAuLC2pDASv3aKwt4qUkL6VY85F5aCcDn6J6bYXceqaTiZS4fjFjKJXx5QpDDHtgGMC9g37",
  "key15": "5pnoSKDoPkqKS41U7Wo2enR5hZbSfQf4mxk6JczkcogZ5f3sQHjCiJEpFNkcF4r7bDerWE5nM6d64VGywtah2nAw",
  "key16": "5sKoZty2x4uz14iuuyC5NPaze9wqd4wtnbxDmguKsQnL9xXZ3ZhaDac6CkUDmkcsXBY7tf9AbRynEP75DF5QeZ44",
  "key17": "2HUXPgUiiZUSLdhczWN134jYjHqWd7SYxXCduTPHRNgKDnAjRJkbX4yDrsRAztd1C5vZinRykSFXFbETUgdGm7W6",
  "key18": "87ZfB6iB6vQYe4cFUi7biZAEJDh5MsbG5BKdCeTZfVKosN64xeNn61CWdkto54p4KbLGZYTidX6g7g7fFUdLU5G",
  "key19": "rQMVE7AD1cmWs5DdDGLC2mWJMyCDCCdp3JJNHEFL7RsjqC5LQf3VjHUPt4avkSH8uuAZ2fehQU9R8Jn4bd9jfBG",
  "key20": "3EJCm2LUtQSY7gykNPpPq1NKL6LgDTEznjpcuXsNewVMgtgEdq5RzwyK8RaVA1EotBtc2Jfd4pQBQkkRqpg9xTFD",
  "key21": "3syzfdtj6SQseNrkUnJsyf4ZY32iJ4Sis35MtvLQkmC6D21D9NrfjQMavNXpsN66LVDrPvhUEi5WGzfmHSqEvmuA",
  "key22": "2rbrdnNdCxDY474jsqBoSELtfdpt6ydbrc2DfFM5SmAAqSMM3ENYU8dK1AqM72hDfv4V9iNgq88mXbYnnxRY54HY",
  "key23": "39Nro5AHMLgLa9CL8tr3xQ5QdG6KjizdUTrnA4uGe6bPMhWEDQK5WA28QxCdvwgpdf1e79g5cS4TepXMtRciKCCu",
  "key24": "5vBNjmuf3WwUKid9rHqNcsNtGdX9vLAAhjWXJAzUL2rYVjRsWQECaNnicH7SoUShTmydu23Ke7c9J78oErsZWoyf",
  "key25": "4Sd4NvfLzFmhebThMY7HBzY6t2mjuJruRZQuGHrfeh5M3TDz6gipXaXHtVHWWbhThBg6sj3E7YEWjBa7EsV5qUkC",
  "key26": "4K84RkQTFUu5zc3V7noUcAxQGcLx8DAPdJS8GBbXTPRu6PSbwfX2RT5odvMLX5ZZ6njjBmi5knnZ81WhkCXUyb67",
  "key27": "5vsHbgMSNBVz2WFfQ2LBTezQHGBSHKqnc9ybBMfuHg9VfbRERsuZePy5bLvEzoRx6qemwjFJbvHLoqHrdkd2B1re",
  "key28": "5bEsqNL8Wc3Dv2ACSHfJtNGUoDPgS8YBKDhbUJgS944h7et7qzQeFra3YnHUDYMR8LiBGCTH3vNAUn9CbxjwHQAR",
  "key29": "5EBxF75YiDGrBjhZt4zZdpdMHnhvajvs5D65Uhhsweftu2DaoWbmURnU7E4ofdiqDb5rpgwxJHbxEKDfBiUVfV6Z",
  "key30": "4r6VPKnRo6ETEfb6pTqxKWQ1fjnMTZGer2ccXjnipNEePVZ3V5UhpBFyySZKVB4KvUsxZpr2pNERBorDBXt6844e",
  "key31": "3tprPtmkwNUYaSH9jEKKi44ZsQbMQ8Ha57iGDhHbaBH6rh4hgFrcdeX55LVdDy3gkkbTxesinBNipTeJyJArFNpD",
  "key32": "44iRFcyAsZGQVPK4z6aSYab1qmdNgckU8exCEVBzFiiDrTS26cy3vuaLE5qb17fH6Wmxgi3SVKue3geYHxfGfvfM",
  "key33": "1pL14W9gVJ4H1GPDFRkqQzWzzx8xNgk2zzYuNLL26r9UHsgDbWvENK75qphX3CWGRn9BALfHHAcUcMHUfaj2w4h",
  "key34": "4QEEaSsjtYe2ZfkvvRgpgFhYDBYwBQCM6nbwbmPKhSQtAxDU4fGkZf6JkjRFgf8Qg1tePzwpwJBxvUgHP5ZUxT2h",
  "key35": "2FAu9UW9dwSztesD5UmQanPJSY2qrAzjREEFDUvydpDvH2TNghsV55P3AzRkn1YiHcaUS8EYCgM4TZUno4KrSSUX",
  "key36": "3zPd6bEoTt6bgwy4AnAxxPxB5ZR1hH1HAGiF2q95sc6NzF5RBo3GGd5bVmQop6DayF6W6JhL8iX9tRwwfKuJpnz6",
  "key37": "E4fusy6Ztn37XLiJz6D9hUoUkApXStZi9e3gpQWG2NUX6cQEJ35jLHnVZYFiy3tcf1W524D6jPhQCNmrkhke7XW",
  "key38": "4QMxBH1BVmRwGpdhjtFZHqyhnBMBSTuKbzWa9bSKE4ar9f8GEyVkBECqnkG9jGMTvWtnC5ne7vneq9MG1KQZPwhv",
  "key39": "2MztsWBkUCdPF9RGu5kYnQL12iAmFCdhRP6KXvx19F7r7gREvoAfBFgT6WGWy42Trmkn2kfhHLQDMYdEaj8vje8X",
  "key40": "e5igbtdMY8NhXWhNHQYo7VdiCfgygfMpsa1LZWHmXoaPr6Vggc1qsorfQ2oazViKpNwoHqM3n6S9hHwd9Ww1ZHw",
  "key41": "32zpDuZUBcXqrHCvC6PXZftAzrruWwLJJDypBwSKq3rM8ZJEYky7ArnJXaNpUq73r7VoNiPiTbQTeGAsEmNMozCm",
  "key42": "3jqqRVA5mDSY5KFYNqrf3nmkERYvBZkSAyS2qHbLtWkoz1pe3Uxj1Mj8QPKLoYGzAVfHZCGomHd9KrWGXrr7W4kK",
  "key43": "4cSokU9wXc4jwnAEHsYChbrWWBbZmzCEpQEufQ6dGdQxpLiR76zoxy1Um5AexyY9E4c64zU5niUn5GDFdBp33iiK"
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
