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
    "47r9FTSzWs5mUemAzQuudqGhubc4p9JBgHjuQ2yJtfHKN6MnmQ7uUGCFLsEFCR9jJR2WAjZkBoToXY8vqQSco2Jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gms1tzToXSe2uqfZWJEo9U6VsBrHu7AWovTp69Uvfxc2GZJW5XGEpGcc431bhUMrvQPN8FPG28dpbbWU9aEW4Ra",
  "key1": "4FPvqkuyVtYDAvFagGoYeGYnc2ZUYBEMqxotyb16cJhsbJeEQczLHTLvKVqAg1qqrjFsuQTtm8XaDau24VSTRS1o",
  "key2": "45CiHfZqqZoAwpHdBCWB7R14K2m2vvZqBei8S3eg6gLc4BdxrXKfWe7vxYZBs5oidAGwyxKGLGuCmKwKMZuBAENU",
  "key3": "2wVRPnVE2PCGciUqtYaEm5c66RYrSsa6eGdVZizQcxA1WYyjCPhcXDDBCwjnyJa8sMjrKHD1phS9HRS1NZWKFMxf",
  "key4": "2kz5rAT5XnZQ2Ra2uR4XB3y5cnnDT4PrtouX7pCR4GZ4bjKLH2zcBfYPp27U4vWtsFkSSAY3Q8jaQEkz4YiYZsB",
  "key5": "4yPcid3kMJUgUbU1PPwrPJG7QfP46Crqmw1tKtCKvC6MHEe827xwGUrwr2GxofGdH6FHbcfVuCAHe1NMCRE4K5UM",
  "key6": "YsRLhjWETHKqsQNWkezrvZwVumssvKTCaaUAx4v1RykmHKq3YGVjP3D4pfUHnrXenGEHmB1v4ad4wPePbJTNqLm",
  "key7": "54yTV2B8vFbxZ8Czy9bNHsk7D5QwjvMCzhPGxzb8io2K4QTn4dWrHS2bxvRD8q7HaZaCqMEzLKaBYuxyFqeoSKwM",
  "key8": "Rechippp856KbC2tto77aHk6tHCMy3AwraMxDxgMCiALysZMULqQdbLFhsocrVQ7JfyxySGU4sDHyxfTU7fe9ej",
  "key9": "44kcWy1xG4RDb9iPudGgC4u68zs5et65SyM3bXKvzt7cU1nige6G8pCi7ZQjBEsQNU1ZQHsbjSfCZXbUi5FmpGXK",
  "key10": "4puQnBdJsrDPGBgtPCFmuCRFXrBjAAafUzLrxCabTyyhgdS6zzUPx8hJEQ5BvJQZNZGzqEbw54B6SvKpVKEpKK1d",
  "key11": "5PfpBpmUQq9RQukCM8KQ4pHtuZiiafRsE6W9zfG6crU23wZDiqED8QWy3s4wHZDWrQGSd9nfFteUsg5FcV4vysi8",
  "key12": "2t9JsWicAy4BgQdeY19W82PcqgwukLUAdAfBkkqTwmNthb2VaHGdV5vzSkoJVAx5NoSpafNtvjMWwQPpGjTo8FZZ",
  "key13": "3B9qhBsHGReA8Mdin51Cq1UtFxvTxA63LWyDk1iAyS41fDf6YbaNA6FHE9re5Dp4tmyGDL6sqSdT2Cqo2SFRZtcE",
  "key14": "yyTbTjZkq2mkaWjqDamK1hLdhwKyzzsXxg9W4ChDY4vGmEgnC6vvVXft1a7bYr8Fxp7yRzVnrYBjiBmrgxKZq7C",
  "key15": "C4nz18NQ1C3iGTtBPZNJnecyDf8V49QkXwRmHyhhKL8Y8fcUGW2gYM9vz9Eq6FnZ44A72paLp64JH489PuQbvDK",
  "key16": "2JBp3ZwD5CDLHLjEQ2MbDAGuythwbEk1sPBon6qna4iNXVVJ6Pa9FEaVmChXPHSftL58x6ZwJhBNWb6MhivhKjxW",
  "key17": "2GxAXCJ7a1Xx3WgPFchDV8iRppHdK8J2z71BSdYLgr8TwdTo7mjSF86AwtBhF1Z1uEVL4Lb2NbduAKxWBCz2kkUX",
  "key18": "2vAeRWXCPtK13VMqztS3o8srVPdkREon5ss9Ddy2UvBY9XNAhicWzyWh4xmuGpTgvNr4emdUckd8WMwQ6VNTLAPt",
  "key19": "5PijfmaZfLJPHLW1FBvrioFQV9PuuAJbWYD7GEyVxJ6pUMoJBf6j6ct5yHdwsKPmNRfUBJMDdBZxQpx8dGhmJY7z",
  "key20": "CoxVdQy5VRoYP2YhLZ34NGmCuPBZVWmTjdGZSf4UDFn3tR4WVkFpq7wTxaRZeFndUyEK9tM4yxfop5eNjCiJhZC",
  "key21": "4PCLndj4BRtPsy1BGmoohdf3DbsxMnZSHZx3fcWcHrBTKAhVXddsRaDbQpM1K8baCRs9Lu4QkmAtRAzgJY2iUU6R",
  "key22": "3wqQhhr9KXgfcsAtYyvbKtscHQSWerva5B8eBFVXxRm2vrttV3tXy31Yn3mrFCNwqhU2Z6rmu9868hVh5uVi91Zt",
  "key23": "5BkwqrSwk358fwQhdtswnMgdS4qGb62gsjSczL4VwqyUincAeC5XQVMrJvLDgQcxtY8CyF39c4B1iULJPKSJKdas",
  "key24": "5QheKGUVW38a28SgDPghCCNU2v9CqHbEbxLLgZUnif6q6V6uAtayrHdcUyDNZS8zcKem2yJUvH5xxysCkNaDMcEY",
  "key25": "ZZEqfnCjr8E5rLFnerar8RWpwQ6dZftPJbMzpiJPLhSPF1Gi5f7hHut9vGgs3TvZg1vw3JdAVgxRrg6fk8Npbwy",
  "key26": "5B63WQY7XT3NfHBHVz6hECZFvjTaGVin4dsWHt47ZiQ84LPWbw3PaxyJ8uYGYDFQ6Ld4uJhMQBsBKKxi9cGz4m6H",
  "key27": "5R1DpoNZ77BD1g8r3RZuDqCzLyqHesun5PEMyzS6tgNEjozM7zPVELGqu7tTh3h91rMfQ8zLjPekdo95K95RDk5K",
  "key28": "63REVXqNbA8iwkf8eW2jGos6VamnFfrSNAwncxKSSstteHgW9ju1YkidRHmdhnTqyPQRkMr3kATHzdfxg4r2HzES",
  "key29": "3AB7Q2jRaJCcsZ51sZmNbdLgHz947fewRJp87QVgmQxguVedAmnAUeh9SrD4EkiqHaCzH3LxPghAonie6Dhwe3nP",
  "key30": "2HpiroC4XMrYMGD8xWoEpZzdupHzkhmhYtHaUFUgaUs64KE9aBsEoBKB69oTxdBbvUaP6xqGsbgw27WtaUcDi6WF",
  "key31": "xa6WrR6NL7zFXHP38BKDNUZdZiPm9JftUQDTqaDuRPc6os6dzxGpqo88LFYsb1wNZp3KfxXDfQNLNmxrSnLmZMo",
  "key32": "4UUjYcgAJqQtX9gkRd6VvDU9rSeRGVX7g5VJeFjQ8PjsczHv2ErGnJWKDLUPhRZEcTvo7iyTpXSTaqBYka6whRxG",
  "key33": "ULz9s4Ytp7BgLwwRMPvGvcMZPVRQ3u6xnKmkbUvpLwFFGsQJnpfjp7VqQLqKYJJzHZjawNFtS3Wqu6is5RPBAWw",
  "key34": "4wiPMFSQJtbZkpWTSDWCSigLswZkt85yLeuooL3ezCCaS9v6qTb4qquduD3B8b4NCR2imEA8ww6tmVpnh4b5Gp2q"
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
