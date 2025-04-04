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
    "37Rko7WUkFMTQmTzGSBfUCnwNtCjeWDtssWeKE1tCYXrbqa5JnsCtTSi2K8HJUkibgv92cXWFiGNbctT9ZJpUXYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WZB1CabWyVeCMUzYhe77XVvP4ZdAgrUJGvTKVCeHhk5kSeKat7PoBiJg32hbWkkrWL7bASbNBxCJDZ8ytQ17Vps",
  "key1": "5UaFUaoSs1bHRYC9ojZQHrga7ebS52ERremxnyfPxeH2a92FV31X1D5fZ3VmKb1KZp1ikKhdSUeuqdhcx2s3kByg",
  "key2": "4tsRxK7wYAUFRVykBojXYgpjA1T4fCo8Unv5oXE7YzdfgYuCxzaBZuSMANyxqSNakNr5s6zhEE7iGCga1karobbP",
  "key3": "3FUq87uJTDkK5vUwgbLBCEzhrm4JddBSXuuk1DZiAqE4GZPPc4Mrx1voRP19PkF6bDeDMer9VzMGYL8M8RrDk1AQ",
  "key4": "2nDVheoCbQpxcCDQ1Qa6zJgTrfpruZwMniAinuvmErAMxa7Z2A4WqKWaUaEiEcqkirkAosCWu4TPxVQM82AyNjev",
  "key5": "suhRhg1QhPPs3Bmi2XpyZgkxkRBaZgiiaCWmeShTv36iUeHiZPbc7PUsVeC63dbDeiZqSxtaq2tZjk14oso6Y2v",
  "key6": "59DvrXiBXVtgMAGCoireNN7vXRYfn3zAdrhQZ5NxbD2zzKxECXus7uwwFsvwhzB7w6NA11RwdNT9LuiQkoX3FDyi",
  "key7": "5fh8oA2DUaXVCicaxDYwEBbXqcDSSXkXGfsb8qrY6nSzSwsaQg6Bwp2t4e3vhMLkYLjnZAxb8yZzjvgZwexP8XDF",
  "key8": "4LidaVvMH6jEVpCKPsCSmdUoFB6eQPFhqkQKP9ngALHu9FfNQwFTchnqLW8x2EwuYAPpZfm7M6N8SnYprTzh3QDV",
  "key9": "3ByVZ7WUXsYL55SwrD5saSQnn3YTBBQbAYWjmTpLHsBghS9MpUsEgdQxDDXEowGzFmLNPGFuh5n7bpuFFnzLLnYQ",
  "key10": "2K1uok9MfiuvginEi2yJtJNQ1Tj7d4iZDzTXhTiSMHiwiuPMt6DAQQCoSRNoPfVUxGLPmNRXvjBKWGG5D5pabDrB",
  "key11": "VBCN6uFcwbAGJKuaEqsmYFE8MdU11cggpsHZukDZ9YT4BwwU4Qxv3jTVesTXuqH7P4qGLmwiVEYemkMDoWRHX4L",
  "key12": "5ftoxLRy4ndGMfh8GNpTXhva23e4igSVW5mn9V3rxSmfATERDuHeR9DkL38B2USUCmTRKU1cK6QeVKY4v8J7UF75",
  "key13": "5C6GD2ij5JhCAubYJ98ZuvQovg9zskkfYBVgmsc1f42taTLzrgAAhrYGe9MvhMzWC6hBh93H2LNBxUJv4anKPFKm",
  "key14": "2n3KqzDHfRzfN6gBt1bGa7m6LkdZRULj5AEtMA8QJEAcbcN8q9RGm4xCaLqcQP68ToBD1q9xCmBhkxPL5qZxvjga",
  "key15": "zbh9oNNkqMTx1f9cWkGAZGTgNPKyDaFUBKvVwm2SrznpJM6sTrDfxVGhcXThtrQt6gtLbZNzFtaAUCFbhJCxzDZ",
  "key16": "4cgvLZa6G6pY7fivZFTw4kmsHMU2A33BTVmax1rb8NWjrqmB748a4Ws3n2Rv1aCDiEBi8ekZyw5mFNRQGx3D8UBg",
  "key17": "3XXwhMWwaFBdVaJmTjTavQxqvbnk27PMYpnjskZBXtzuzrjk216nx9y6Q5bkfnJfyDsLHsojJ1kKKZFWcA1iFnvJ",
  "key18": "21EyJTzXiEcyfhe1cZq5QyGi5xDaF8BwjgVQA5rvBL3FLz35NbKsmTuH5zoPqBPFViq9s694oX4DendcK8FzPjsJ",
  "key19": "2Azii5HKYbfRcW635HU16JBB6xUaUJ3AAKetEzgyyto2XFG9jQC6axbNWPJg1SXFzp37DMqJ6DkWzCEMYLbwGdbs",
  "key20": "2Pb4uapmNvykPBeo7CJykdx9bNDUT9BcDPP6cGX4htHPiXQz9xSF76NTenh67HhL82xki7W29GLvydMgbxdb3X1S",
  "key21": "e2GsFzdv9H64bxPZ4YPN6pRmFjvjQEiFYnxLVsr2awBYP4wvF5G7RqqyfLTzYqV3RZgtZUZr5gxpZPvyFs3ov1Q",
  "key22": "Lb6pnkWNnvpGvz6XtSDiQqfqkbRHWiC7MFxzuLLVPfB5QYsVayuyGpoxG4D6LxFuRfVijdmXrBggroTWghoTSZ5",
  "key23": "5wYyGoptYN2rVKmT8vt16LVQrmvWvoUgxJ5mYhfVAK99366XuAdov8sprfDJsHr9SAhiU3Sam5aBErQ4WD4sQYNz",
  "key24": "55o886mof3WkacatuyL82nkJgGfGAePERrMT388QpDMrMRVQgFsx4G9NHNRsAnTJtrfddYWXVRg1ynqregqmQtY7",
  "key25": "3segZtQoFdQ3DFohk6w2jatTxAmJgA9cDi8sSugAbxsUrJ7hh6b9oMv1zYqGjmsLJ5ux7SRpdwSthtsqeujrtmFg",
  "key26": "3EtgJbTcW6TcBF6PEcQibbhGkBjZSY7K7eaXohMt5gneA1KQkChYvxsDrLJhGYUwqkGGs3o4PUQMDxM5KBwAetZd",
  "key27": "5qtisZeGu6FTiSjAmTwhFMP4uQ12zfvoSoUo17rPBx3f9htidrUycvQ3rvcmYx17k3w6myyr4ZGbC3T5idMuNpmh",
  "key28": "2bM9yTg2fPTGxyb19j5gu9MBUs6CEwDweNigU5b4oE48H6sJmeUkQrTTVzZPiGC6vGRRKNKrGALL8Vxye7k5cDy4",
  "key29": "3b6CNUBqCqpv2FY2MU5eGn9khPXYG2vVfTpGJ7xPSohbhrNuiErvJAxrVeywacERGmb99QGELLRrdANBT6DfGQdE",
  "key30": "2jddqPkiALK9Fb3wVHUmvW8YRb3zxM5trdc5Q4xYfc5TdT9TQUR7enFisfma68QW4XnkULWkEjsnytonXeSeBjXa",
  "key31": "4x9ExkkuE5GMxQVtRJ9Psd2E3K4K4pQ6KuwvdR7BMLuLt3qNnTe31FjmMUec9iUfdqfyhqhkwjSgxN2uydbSdhoG",
  "key32": "2AdcuA1CnPM2tJv3hSmaHDzZHsNpkGtLpogqJCWtege2iSKZkK3sentrfofTTpPL76iqn6weAi7cqtZZw6hXr9UY",
  "key33": "5oNTqRN6qeFcktiFcoeFv1f2xooevdamvGr1PvRQr4tGVanbujxaDdLsjNXNZ4P4nG5aCvMD1x2mD8WeKN1147wB",
  "key34": "4GQorEovECbNw59mUyR7tURsjBrUFgkw1p81MaopKryDnGdJVvZLR3jFd6vUUbednvMRQsnmgogyCem6oE8p3FBh",
  "key35": "2ZcE2V68wrQvbFv2FWbJ9VHbYXhwzivDyVfE9r7Xkznwwmcmcc4549iTMMA9c3wAgoEXFGYHmvhJA2uKpygyPpCQ",
  "key36": "5MJzkxGwNcY1J7XsCffAjf24k7cLhP28yhWhSigT1eMdiETQahXGe3C81nXqzfnXBQyKK3rCdpCzdndMnmiFAKzi",
  "key37": "3weegw591nxWH4cWzYjmWDN7nRrCJ1hW2ypaMxgK5XrRErfKzk2WafC5G8GBc6a4sNe4Fw1sdT2waU7CvERMzR1W",
  "key38": "3oiiwVNqkurMqsPYspzhcjziHBZ5yrJWdBXbzaFNghyMPWkWyYPCrcUGxE4TGGbgfQtGutAgVsMaK4m6qTsY6MKn",
  "key39": "2gRrzTV7TyGBY5P7PQUWBpqotdFag4wNZ9RSC6yqPFV2efUj7LiALfbmPgNB6YwFbMiGhcgrzQd1XGLMPQLvoGdM",
  "key40": "3HcDoyJCH9AMnqzCPH9paR8e7NcCoB4uZy6jRzxPLmBe69qfadAePZudnM46BBGR9fspyTF8UiJhN5nEdV8YqCaf",
  "key41": "5AAv95kWcuDaUot5ssfLcHLpVp2517hpsDyNLjn5oV2hVptGqRe9Wu8tnVJjLpEo37b4Um93oZ42a4m9kBEv8rDD",
  "key42": "4CdcS3t9K7ewVzxBTkGR3s3BDv2zEJnmTHr9RVoufARKgyWH4A2aWTE2ZGiviGVg7Jirsct2MD2sKZ3iGXAsDbkr",
  "key43": "gv94XmJdGP8JQjUqQbRJ6PHU1JyCrTgLtWpXJAgVjbbYW6i943itv7sXkMpzx5Sg9snCHH3rvtCNVY6iL3xW3Ar",
  "key44": "FwyPQpNMXyVJoLEFtQSD3ikmsgaziKEzYaWo3URpznPXa1EaRzPb3PDWoGMP8bSikbZ7fg5iLL7ZrGtNRU9NvTV",
  "key45": "szSCND9cqpSvMWCXT4sSnsoe4qdcUsJi8dMT6StVMQ3uo239qhHVnV47A7HyCKgMm2HQ82DC5fNbCMoHn4cNEnx",
  "key46": "64HvwpP51KHRdHFcqVqKxm3WcNSC2Wh1HoW9uP7W2Vp55nEEYSR6T6BwsPJe58fv3eeNrGDdsFV7cLtrRPXUVEVU",
  "key47": "56tjwuhAs7jMX42Uf4N5k6Fk9jfCnF9ywAMhTtD6myy7X4xGEt5HuQyXCGbKxK6ACFN88snZkUyevTiZxEQaoyyY",
  "key48": "59FiCcP2CYjv35mbDBeBqTjzrBchTnH4ukVUTHhLFVUSVPBscuwMnZb8isgP1VhcKDNtUdAAB9o5b693gqkJFd5x"
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
