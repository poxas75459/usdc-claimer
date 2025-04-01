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
    "ZL4qDXsuaLuAdVoKLFZ33aMkQAkPAJV7xCWiKHXtqvqRGbozgmMNLHexgfswW2fmd2HhmEEYzJFzqbnRnVeuGb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7vB1cfpTuCy831EsS58VEA586zMEA4UCQPDFQwuyrCkSssqxSgjVQM6fZtvbiBqAoRyVpbQv8PWdXgXNvzWxVX",
  "key1": "5VacDDQpaYNZPtP58xj9Zy8FscDEofj6c3qqv1Y4J19VDgFcjWiFKkMPTHJH3B1vQMnsnSg1JJQHxHEirwy2ihcB",
  "key2": "2VD78MZXU7PtDA3vFjRMHjy1SeXZyuPMz3FXBhAXmS5b9kQo8MBboEbwC57r88wsNaUcE7Y3KPeJ1Pkh3kqv23Ay",
  "key3": "4NvMHGeJcZAxHgDH95kyrCr6VvdeLuDNc8cWdpqYs18sr7H7soqbmXAZ5BAzomV6hmQwVkM4uu912XxsQUor6cM9",
  "key4": "zkbcoYWYMN2vgomzRVUtm2bPYaNFRE8HfYYVbdyqGTtJxt1BnzhpGJYdF3DhwyuyZducpa98pc8QYuvjyKMQQ7F",
  "key5": "52XD4wUjMPmfhcy98GHvtW9FSmwvsEzFe1TwmKnG2Wkxhru4jGwVaRZBeJYv7K4CBZSWoUzcRt4L937FcWpFKJs",
  "key6": "2vkwyREXgRwp5Hr3BmYc9gK9AkaiYdm1k93BWrJp1yV6tXqvTWthLCL5REsV4tAjBHrroF1iMEm5EPfBsBFZRJPV",
  "key7": "3JVXcasmnn4hLeAeHi6LzF9z5giFf5qAeWwXYk1NvZTZBm4Ak6Fmap36sNH1QL5TeSc3zNZGfYYvif3rMyug84KQ",
  "key8": "x2eSZxK4n7DVku6iqxDWcxsiVtBgwPRQ4ue6KE2TqAZa24NYghFUNjnpQRPyRH4WVV5F15Lc9FTUiirG4L2ribF",
  "key9": "2L43Zi7q4oE1BfhYcWXyDZ4xeSgWT5tshBi1AGUpoFbrTU3ht9gXgQ52KAWenJLGEVrHzLqz3AuiamfwjRXgEdcD",
  "key10": "2YPynVS3TijrWSVthSm2Z5cZw5Mrwe2AhG4pK7z9mF3NddB4wzQQww1UFnpnLQA8K4NCy82PU3mMUitvNwT8mgMZ",
  "key11": "2vKLHPpWFsj8AdRR9RmjMRLAtEqioetMbtuTRYcfsddXrnV5kxZwurBtgo76Xs9CSqqDEQCndB6odN27VtSDJ9Dw",
  "key12": "4VwrMYugvGRu4SkxdheuphvWADCEBDAguo7fZE2HbMuQiaSKCeX5sQWL1Yyho21iSHmBLLN9uy6B1Y5DBo2UMMfp",
  "key13": "5JgJwKuzvMy1UCarWyiP4Zy5YBrCRd48pwJZb1Gn4gkXDhijGdMcZzAu8thv4VwsxWqqsp1Bv7gWqNCPvCUdXGGt",
  "key14": "5yeYJbmy8Ah9VFQhjuCFbQboDb6CW9qZxe4Y2gce3pNqBU2VRhRpyM294RKvX9mJmbkR54Kv3bxy5baZhAdUVkeL",
  "key15": "4niaARMJJj1TmeVkKGe5NBq91opt9pSRm7HeLkydtsZWwhZSvX4UtbTjZ2L8Q3MDZQpUGNVFLHoxV4SuBSUCHGkf",
  "key16": "5SNF459Gy7y9F5MUFpsoYbvCfQe6PK5FyqziAsyFugYJTqqN2nAVmWB16dT5vzWCJqHzT54LNdgWR1YEABMQC9C8",
  "key17": "1tbvrGR9xQYxMxWnjvuzxrx3siew8PeS5uzKGscjLAuJqbLsQNPtDQ6CQM3sMYVwmbHHZxoQ2cvkh2Rw6rdcbwg",
  "key18": "378dT7knAg2fe2DjTKMnZ4TkYThF55ZDFqKBFwDpj7udst8HzY1STYscQrxoDzUTGfjs6RKfTGHAxhkm7cumJfMR",
  "key19": "2X6AMnxffxrry5GnFWhuQ4PSQXwuda5JbdG4K9ytjFDZBbrvZttL4B2bSuJSduXTRZ2YTiSYBefAqsRpVrwftrYc",
  "key20": "AxV1Jn97bm2FiqAHq71uD9GNmRzevbJ53pD67mt84gBEf1WdMRZNqNtyi71fdCSauMUVv1kiDsqUjTjY6ER7c53",
  "key21": "4o2QMT8RyhtuzXRu5ADJr8dsinUs61B6LDkYx5yNXBXtjKeHQa9QiYsdDbgD5UUvxTbhSpjWrY9fP2eV1mzmUbom",
  "key22": "5UfC9GTT62oCVumV5NPqGt5KxpM9vKsFZ7GAdHvJB11GaPkeb4TSMUqZ47nbnBVkjVhHzHZsKJdn9FJuy31W31ZR",
  "key23": "5na3vSexnvqTnXJH1Qrt2izMvB4WBcVpXVkrPfDEKCe7SCHhVag49yArtYfH7nXdkURD46L2EZ1U7Fs5YxUVspSv",
  "key24": "dA3oLAUhJFLFtM1irNYBshyuJR33fPE7Z44iCk4g1L6r8xxcQCnVSWc7v3QfyDk3XzexHE1Dt7nLWfRSN9ufWtJ",
  "key25": "Br1pW4as9KNX5f8Q1LKbR5WCoXnRmMUeAg1rUEB55K57qwc7pde1eg1KiHteumoca619W3f7c4zzFvPznGPSvPW",
  "key26": "356wT2Ac6pCX24qPDqHTcNnHbR1BwDfqksEKjMd7PNaJASeopMcu9HtfBfTmLJNzgxnWg1a9GNNgyqbpNkvrBoCf",
  "key27": "5xcXRUMRU5hTYBkFmmeCqWuuy8Kjv9rJ2WhZyHqWGgSkXDtWu69rAx7kBKRVTGEqQMKAhveSKetiMuREhd2tAGY7",
  "key28": "5cJgiV1qumiFHdsGQEhHVnYjktCMxtoUpjkp9sJP5M9KzSncqKaSo6ys4qV7UN1fsbdqMYR4Cbj6RXafkyb1Z3m9",
  "key29": "5FYjqPxbgtxixbpxT8YFkKa2iCz6QrBdK1Hekgu5FsdnydgpMENMpceDkHJhcPYkRMDRHY48XBKeYuDAG8WHtpFU",
  "key30": "R4WqqH158FzoSFF8oKUHgKPXqtg2XUVyU8GsjKKnw8cQ1tda4V7y4zaTse3xdrECQsuJzrRkeWss9gdVBKngJSx",
  "key31": "2mxNQLwBhD1CiEC7qUc4v1vEkXDGuQRRqpMckFLGgVTxeLQFBK285GWfFxCM7Yhx6YkRy8rg4ERAvoLYxpsjFqjf",
  "key32": "2eMPUfuTvE39KV8baSYtfAzp9aTJ1nQCicWJisZnT2wgDtA1BFohquMYhkBEZNeH5pJANZ47Jv3kWmJ8x8GeaYPZ",
  "key33": "2oPTjYQMYS5RpftpqmqFRJJGaV5XNJSoaqsX59g6tAt7PNDhqMMXwQbvZ6bijyDM8y47XSuzgwEBfybCp4ds9RVf",
  "key34": "4LmBAQe8yohS3aeDTqTa3xbUsqgXryPzCbEJZyRd7VzkqSJYZi6v7uqhBc4mH4q6NNBpw3EDyE2m7Zz1pBRJfbCh",
  "key35": "4gZMXZfqMpJP2A6mdpa3smmhY22viupMmD7Uh76Geg65q7F3KstASDQk5Z6dWi8ghTxnovnDv3TWTRbx11QgRcjN",
  "key36": "2YkCuxaLMHDLzL1zQ7XX36RUqcx8zvsduxfbAtRFsxDq35xrF9vYwHyzHfbDTcGDXwer6D9ciRxgeypL3XrLKBuj",
  "key37": "5owqQmUNiJWcK8tYeqjkRgG8BkF8iqGX5uB2CgNmn4T74e3G4UwasgbzxRhfETBcgQszcF6giR8wEHJprETk4HPe",
  "key38": "643kk8kvfuSjns1HBXemXWv6iyEjuwmiFuGmSaJLQmzQyQuPgqzbGtX75Ku8MjLDkan9hyppTMStQvACLawDEzx4",
  "key39": "2XwXyyVbrH2i9feT75bFfnMuTm7DtaHijZcSfTQmdswYmQH35WBZYCLpPMJ3nVgrVSCC9VwXxFAAJYSeHg8Qh9tk",
  "key40": "5R6G1rprZow16qhMkoXRW4sMLHzvsVMDA1hR4dbmUcFhvPAuR1GQGWY26LnPhRXNy4g9X9yVu76TPCoJahn75YN",
  "key41": "4MWJwxGJsb3bV6ReuCpJbUGJAt7ewSqAh1oWagqy2Me3MJH4qYyCbhNCYqZTGUe7XS2dyoNJaKKes7cFBKMp898e",
  "key42": "4pUMBCzyaU1UviPWQsn58mEbpVuyRSQXdZ7YaXgAzHt57barSnzUhL2AeKXwgc2jBpZyzCyb7vN5RJTKbMBwF8vU",
  "key43": "22KqdU1impwrLPYHgDosxCUJQJfDML24PuvCWJP9NfmmAUUKGxd29W53u7KmVtdsKdYCmPLgit5zMRQNsp8VFZko",
  "key44": "4QRwgoEzGz4Tks87pWHNm17Le3eLcCLitCpNaWPyptgRht7LHmA2uXANQqnXieHcDZf2zUE7hbx2XQrhdm2344AM",
  "key45": "iAKGqm1e6W5kpv4SnDg2JY7WAmFhk9j9CPgAUb3hdS2aUJW1ZbSNRKgTqPpwLAd8pJhf6J3k2EJgCg3gcDyQnJH",
  "key46": "2U1iDv1Vr39JwRnuTeR3GF4NExDnUsdqpBM5PqaqmRSE2sUUPpAQvriZGXzqsoXM8NQJRr7pk9QmAyf1rXyCzLU5",
  "key47": "4yNmeXwEw3fKc3zREL73YudVsRM4eaBuynX3nomf8Th2U1nJDfgKJP4tLLdWNw3G4Yxvas2T6meGZ5iNaPH2QcEJ"
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
