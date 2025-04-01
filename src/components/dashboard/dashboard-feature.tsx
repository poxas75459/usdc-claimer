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
    "5UvE5iTgFfdVH9CT64w3XfMVnpNTe6KXvsajk7tSAFW97YL9Y4Gj1K3quCJbREztPYune1TGqYpq1D83K4Cnwvkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vTGKTLLj3CaPWtHBG45kkRWHQstaE3zpRLiGVzSXMkTVX2RQkWPANo3iq7NjtKNMezvzz4WmoyzckH4GoSCgKD",
  "key1": "34n6j8YAekDp4Rw8FfQuXuKe7s4HHqK95XPmcX7iBhDsFJGn89XPeGgbHGiXDGhcHM4F9iPECACzWgcswGQkRpbS",
  "key2": "2HaKRDKQ9nKFsS65Mi2cQm4egHd6vJH5PGg8yWmUt7iG1T2uoomhZWeQNeJWQyzoZH3EXvpXQhJyEhz5g7aMZEwH",
  "key3": "5GZAZZDypSwKarxjdLsS9sUETVW5h38G471eUZ1CgX7VKDackEeEoVmny8yTr4RjVZAa4EoCZvzfUEszy6Ldi2d6",
  "key4": "3zwpv4VjGDrpeByvZdEcKNQUnEVFLAJiabUKE88Aj4K4EssvNYFQKpizDZwhYCGSoj3NaNhqjpCn5aFL84XeAUC3",
  "key5": "2TjLP6ww2n6wbBW6btAEWn788Fd8W31AxGVciY5x2euyvGNTbvxeMEzVPAateEL59Z6m3kuZVrHe5ag1rASJ9Nkn",
  "key6": "5c6t2k2n8AUzydTGLJGoBT2suXr3evHa2YKbDGiqA2cX41gGT5yHjomFSz2WtaqUvR7f647rhXdJYgtaSLovA43t",
  "key7": "67RDNxDWCRP2XkXUuDsk9B5hPiimhpkYgKJYvGuysi7TpgwuV7fARXvp3bcMedJVzUcG2g28soWR2FVoSv55X2zB",
  "key8": "45i9ZQaPUBX97zrKZij5UNEpZqTMi7VR8fSt54sP6V7mmmpwTKab79kSKdZpBFY8cBLkd56ipRzvjJHgsuNfUMnW",
  "key9": "22fs23bgL1mET2sNXvEziza2jD3Kt2DVmKX6gYNKUxdyBqZKfN1n2wKBMJBuWbQLj5zxGtQKYs5bfgVFWV9RCuUz",
  "key10": "3Z36kbcJBBb6mpkrWbZnhNsZoY83iQU53G61hsH9dmxFK2gVa5oeinoE5bksULneKdkyGbxLkkezzJTuv69gM2m2",
  "key11": "4WLLVrxyFi9MW6tBSQJ9nhNkPrJR9xHGNU19KtyvwpTGCB2nj4HRA84tMVXwYJQ3QwUVz8jxUpFEYQZVYkzGsC5N",
  "key12": "5WYmra2ufv7Hjzo5BJWUSFmTddm41ezGFnJTa2vs2ULAtmA3XowoxC13K6e4VHhpgGobLEqLdQ6awJA46hp9nB2d",
  "key13": "28dwbY2ZDLCMszWJmUxEmjb7NgxcZeR6xBTjYrbgBC9bT8c5YNFMTraeEH3A3i5G9W6ne5RcpAkxDVwuMrQgDFXZ",
  "key14": "5YAboVRwoQtgrQPq3MJeYaswCaDCrwxNuiqzPi6WZwD6cWACbpHwZbY6eouw81WyMZ54VrTLDPX4hjYRh9dd3ogv",
  "key15": "5t5mfV4Nch43Gm8eqVeiFjDv5nA8tRcdQvGksXBQho9J6A267fPpHk6W1psVGEoSgz9hYNMzYPUbXSaGW9QzTz2G",
  "key16": "ikTSune8iXjSPDRF2g6zTE8UxgUYayzHq5F6SQTZ1WZzw5s74mZWKUveEJmzVCkCapMHPirqEW5m9AfWNDqCSHM",
  "key17": "cyxY7pGvPS2DwVzib76AYDWrW6SaBQqjaTiNuTkXLNm1FneYcDh1rZWMn7tMA6ttVf2GStqFGcvqty87eJXgTbm",
  "key18": "2yErLXDxMihNQHYM2QDinXk1QRzc5Ho2vUbWch8NHcCLc24jf4Ce9nyCzVBdUTB7Rs8Fza62bLkfWxRMdvGshHxn",
  "key19": "2X3C5Bm1BkbFvAiaDpkt4pEQzS4643wrrzJbfptcj1mdCZwC4YxX1mJkQciD8wyn4xb1dLy2HsgZdDPvYWXTymc9",
  "key20": "gy2FVq6r2v7GpzJAn1oTeYguH8qF4egoY2mRtA2K2QjB6dxqbcHnKdRThedTWhDACbWuihEEUcbguA4CoZ3dyFd",
  "key21": "22jcAMbqoab9gF8h5KW2qnrrZ3spXsA2d6c1r8KhG9UEQnG3o7ZEMPftTRBWjodWNwp7X2HEn2MA46Pb8Rv9JWtk",
  "key22": "3TxcxWS7sEX1e5yV9eMdS3avPq5hxMXNhviFJq755916G7j6h6vacshFYteHgDXUGYtVwGTCPY9aY4CBWSEXmsEE",
  "key23": "2YzoeLEstkYc6uU7NVU92eUwySUop1x9CL2jBiiHPpjwnJwMQqq9CU1qDyJwWcSFp8SrHL3fbeUoWAzapJUDGH2o",
  "key24": "4fdj5sc3AAxftJqbYKrtRRwdthXKdXgrhhPk8y2hCtMRR5qStMCPgAJ8tqiN1RcdVUL2nQ3Y4ZSWWAgf4bjq4NRj",
  "key25": "Y9vnYMn32mN3g2KqALS92bCGTq95N66KUFYkZF3C4a4aipTYxT3SYG9SeiY7WSjUNZop1HeCzmRBvGfCyQ775rV",
  "key26": "4zPBo6jfNSQgKYJBequNVNDd791sHNxhx5NLtJL6aVUbB6YDC6tpf8Z6NUQbCqiER8qEwTS66i8fsHgn72m4WgVx",
  "key27": "2LWkobuH4ZE5Mk7J6Unv2PocPJQvFckv9AYRP4EQj6P17GsEQwKcCZgWAayRATUQyE1hjPYW5MNyQHtSn1k3pAoM",
  "key28": "2R846SSxCHsNVGSZhzxFf8hN6bRnbPiruyHKFfE4aSQwaaJ6hE4Qhg9uMfot6VDp2AYkX3gYcmVVN88Lu4jpVztL",
  "key29": "4WKGcqQdQZ35tomheujotELrEDj9DWyNHTnKezpLaVnUyn5ev51KrZ1C2tTaRKAvHoZ9HRQmjWoE3za3AeECgbkA",
  "key30": "wrpZ6TRRe6iBWxAQj9ojxKx78LNiH5njdM6wShbCECua1LHYWY7PtCnEP6rwQg8Yz9tTaap7CbQSkgkoX1PiF4Q",
  "key31": "224zCChAjPFdkUg1fPcXGiYycZyZ5EVYe1KckEyJsfrRtyDxpkxCczvDauXCBi44pqcUbFbqsLabsD4KDEv7dU8s",
  "key32": "2vNgST9FroUYzJ9pfbVX2RZAW7b4zGniMq8qgvZuykSUJfySEMBJkaqskzJjF7H5qzkVAD8HyNLdzapZXpZZNXFr",
  "key33": "5SrTjCxMNCvXfPUJNnkqgxE8wYShyYsWw3U5VAppP4vnzkHTzJFxDMXazm8BRevQ5FEwuZQgP59HPZBuy657aXXn",
  "key34": "5jgTv7kB98Xzk7mbJ2QFPHKRP9ZFVf2Q4Zk5c1pPhbYU5qZpznFK2s9MvQAz9G6yfmKavduDSK3Lminfim6eK2nm",
  "key35": "3bDunycQ1quvdacDULWqyBg9w26Z7j8kWie8trPr71MjzwPWDH4L69bd5vXFpXHHSHiopm44ic27vTvBMANd74u6",
  "key36": "3pPhMmQjZ4eWyNYk4eNQodSHpQL9r3EqY5YTcfvubEaHG7YDinuer8iV7C2424K8TniS9aGpoh4VoDtThpRjJYLb",
  "key37": "nawX6B5ETVdANHUeXhzsMS8eY5n8hTn2DpGUDEufnPBbUcu6T31S7Qpc1D1TzvEdhJjRVhSQpTiSNfhvZHLeQvv"
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
