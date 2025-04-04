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
    "3M7LMkHwHuECeXpoeLBGyrgGynByVSzavFJSu5zJpYXBgFjkXXFkqfhkHngcW63E6qcwEcqKCUdxQLXTc2M5MW3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xvke6arNwtP7xfkke4JjPbDfZC1PJwGXDKQmDor9C3ENSUYHR1JFMQL5RYxnmdADZsFLRi9wmMHGZuyWSQedeCv",
  "key1": "5whfo2sxGpKxZAnzoAGdL2A5s8ymj16xr5uGKtfxqRPJk4KhWTzDiaFLaSxSuaEu8j8dPHxcABiq5DdPu11kbLRP",
  "key2": "5ru9Zots3yHTrkMmmoU5ZVXpB4cQak3755K7ShoCLwfCSaqx3bgouF4EaMWMnqafbEfspPnsyUkVu7xJc3mdYTLV",
  "key3": "2TnLr6dfQ9zpFt6yq2vbp9H686ozYL284RtVzL6AmVh3i5UxmjgKVaWTuBdaXZd19RVWeSabdP133Y4ZrdFtNB57",
  "key4": "4ghoY2htKxw8HJD587F8JV2CHqY1JDHhs6C91Nkv4rD2GAdBWC4vwePX5PgGJ4DQeToxzq6szCVxnEBufWAcCZ3J",
  "key5": "2V6Y8VPuBxCpzyZ1CoEbPM7emRBKSgTnVcoHdMnd7WFPQH9wKmGZzbVRwBkQrNELBvpsUotZSeC79T6VBnLaCVqH",
  "key6": "kw4Fbrxo2rqjy6midRju6i7vWbrkXjmoRYRiNHfo85fvkAi5Y4K7binaWaAA7z7qYMEN21H4xBTPUEpXpsmxdkC",
  "key7": "FzWpHPg1qsXyuFSyFr1bYxF6ucwrg4W1bgSz2qoKNgPzb84FrGDeFAjqfgBKYQV6x2XvM1yPjKYDt8XCqiNmaFk",
  "key8": "4cEPzXReY2F1dDm1Sa9zymBH6HQdMh8DeJA3e9U89DK41NpMHREWVSGf3cULXrGfYXYbpcWS4ybPg65KP1Hyr9qs",
  "key9": "5QTcZS5vKfcCemePSJnZiyZpcTr1cpiQzjDxoyHsTzEdaWnDg5zgKZTJVqQMGnxWh5uejzYNLkMvXpurtWe9d3NT",
  "key10": "3dGoLATQaLNsMKTy7BexAysVWsfaYKNWLiPqUR5GkKSZzud167CpYfB8AAuZHn16jmSrxx6EG3kqVFTaM8aMnB4H",
  "key11": "9giBNkquxeZm2KGXfXnjLog3RBfyfJmbJ2pFbfWnWtFrm3STBdcnSF2VKLqzmassJSms8zxrvwyDZt6Abpdf3oz",
  "key12": "4ZBWMbv54ecAp1LrcefkvYrDmPQTEWKZdWgTxx2mcUBY4xYZsKPcrPPz31UeANutf5yYSJuBgHkf4DXhQHEvWsot",
  "key13": "2KE29MQc783acmPToFQWwmCQji4TYwXkQkyJDHYN765M8XSXAt9SJwiPARRajc82zfVbcjKCcmMKo14KhvuyWgmH",
  "key14": "uZFF7Thz6ECDJJAEPegW5UgNY2yVXrGfWtF9iWviKRSs8E5gra6BT7tg27d3BojsRLALJn26uwAEva72DLmVSg4",
  "key15": "Bv8xx4zwCmZNqvP8zEVQKR8kiKqHYB9Pp568HFQ5pYubYXUeQqmVrG7ts1BAJ1wscfri5qjJmTCsxb44DF32Q34",
  "key16": "3d6821Qn1AGPPdYLgqZddRhVcGgqXcXfvQDf4yH9eJBnoL7mfFaRRg7GJ7PX8LaMkBHwENy3z7ZNrnJ4E1B5oVZz",
  "key17": "3Dr87SHgiBzNX9zwuzkZb8ZiLYgzXmjkrNNmKizBtHi2HqjnhJGbN65dt8cPQSiZrnX65tGHeL4XikfCQfAD8pMv",
  "key18": "4nKbPBosiD66VgpsgMYDFjZd6VvySGx6WukhPmweZuT9zdMyp7ASPgB7q8pBJGvNQJ2gAC3PspVrrhWV6jZYh8VH",
  "key19": "3yNMyg3WH4g9gBFVud43f3vMu63NFNLTMbgKau6yxtejuCSuavv89XLRDUUnaEN43ZUqoWFtuBEx9N5Bc2JHue4X",
  "key20": "GWaLSspRgz3ia7xo71GaqnKiDcaVApjSuRTMRqQ98kEETygdUCGktVQEQ7zCVLSFyUwX6wTrpZ3H1M15LQHth2F",
  "key21": "4dKeC6pzgJWwLqTrGXUh6XCrnJQwJE4ppJBCojsE5F4yCZ5fMgXFqkJy73B7nwVUARu9wY33PjdYSB2DeQxZ1Lms",
  "key22": "4FnfzPPq2qTHrCgXJfV4GQvx9t6V3uR6pjrQqYdvmCXYwnbA83vCrkKN1pEKt163cLVor4NJa1BKN8sAgzFRFKGU",
  "key23": "VkpcVy4CFJVLpFpXmB9wuekfiASCAwVNGpEEAM9aJsFHZbx6QZQaydZxDCS1PU3QkKCHDCW5N4hR2ZrUqGGf1BY",
  "key24": "4DCy1kTz74sWe76WRBB1hLg4dvvhjUfrguW3ki71o2vgFrMEEb1gugPJjYtCAWzoC2LD61p1sWCexrG1EdRrEn4r",
  "key25": "5RNjDirSDX3BKcqAnJouagGZBGwbjGcMPMsqeKaRbp6t86fdwhW12hBinyqsXGKKA6CgM23QGp6zxyXWY8Nud5Ti",
  "key26": "4oeb55aFtAadjYA2psBwV37NGXF7gQQd1gAzMam6hRxppgZ95Kzv8DSgtgSmriqCu6uFbQ4ZjD2utCbZkFDSKSDB",
  "key27": "29yCPwTBgmf8XH5o2PjvGD8yhcXoEG5Ch4casiS54Kq8jdpzNoDWKQPBY6J878at9CRJHyMU45PKCkZzCmuzGsNs",
  "key28": "5AYCLaaTTPzkAoJ3HCn2o7jg6GyRKuSXcJefFmwPGNqmxwVW3PjXrmkU3c6CRU1ZJgFQvDdgcptkK497tMSfwv1M",
  "key29": "5nN2zCNSpNueFCKcTd4E86gn1Xy3RXXSicm4L8Rgc39ata6XxhKiDDRYh7xUCF5e4njCJZmQ2qQaBC2cgfVrksAy",
  "key30": "3XaDtfgSaQcYn5D19kDgjEMyfa4nVpsmc5tW2f3TnYLrUFUDEcNTDbptvkA6RQfeb2qVurFdKk7tEexbFip8GxRU",
  "key31": "2G6WdJjde8JvwMeSpDUqioKQqUSX9B7gyLjL3AcPuhN1MatXRviq7LrLSGKNfMyNhjiqTBjksBevZ6YqpryuZe2x",
  "key32": "3Lv4PWkeRP3LPKj2QRtiYWYgr3CFGX4QYmo96b4eSzn2FwK7W7xxvtNFxD9T9GTyTde8BSy1TT7X1ioVy1pCZ544",
  "key33": "53yUKEgsk7eYsNnK2FXxbBFVJo1LEUoadAtpf2xNfBFfpuch5hnu2isMHD8Mepi28qz1QYgbvDHArvph3oRhonsV",
  "key34": "2j6ShjBuf5xaSjoCZxhtb8dtP9swoU3o7jbd5T4F5ksdLjARcqdz8BPy3eTHFQUCW4nkojsvG7jw8k3P4nUcdpgY"
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
