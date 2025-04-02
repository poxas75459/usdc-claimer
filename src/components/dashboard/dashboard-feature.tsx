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
    "55gFmtnFwpLevrDR72vxgY92qFAQa34BxL3R6w6Aj9C2J4g2oFdMoYdrxWfnvk7pSDjDb1niuiZDwnRzgZxn8WpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mD5hxvKNyEqdhUXMqRbM6BJsNFJ95a6V1nBCGSLj482bVUAWUZDRgL7PNoBCiTxtfQshvEip3GKYxAbPfM5R8FC",
  "key1": "4x8LXZY1pCYyZfL2kA1nHsE4YVj2BDKYnQdxU5SvejHNjbT12G5EwmxNxNhvTvXbtuD6jhmohdVUdzA73FH7bire",
  "key2": "5A5GggGd7PzVNLuSxAVhTzNfRz9BM7NMZZmHLqdr6Meyd6Tv66dowTmdndNg8XWsXHWR1MvcWNeX2ECUFGbH16YD",
  "key3": "tiQLvDGKm1pRZkEPmfeyJYvgcPS2TRVqyNxRxa3C59wgY7iF9i1h7SxiiyCDgdNZSSjoJQi4u159ZtgLgSXF4bx",
  "key4": "XLGnJx3hJG8nHkzbovXnukvZZJnVqpZWkqbhbzqrhAbSzTVFE3cCx9PAPpPqXxDrx3KBtEMzVywWfkhVnZHuzsG",
  "key5": "rwHhjNSibtHScAoJD1XZLYpRGKz38uTxQmNarCKc47nvqXLCeNo1SvWsRyFyy2ne2mKdwuBWwTvkVNvmgDQ8nRP",
  "key6": "2o2AWyNkDTCRUFGCYyj6HSZftrLzq6e7X8KnShpo83sFHYwpKnpeNqJJa8m6TDbLzeW2qYfXYiDNRBhhJYrjhmcz",
  "key7": "64XfMN71wtj8CRVnmv3i6ZQ5KcSNgecganzkCyku3kQtYjWKgtBkfSJWr45LJnCYdKooH9gD6aTTCwpNSX4ZQnQ6",
  "key8": "5WPNkFYmzyBv4czqKW5TAumnQy6NuHBnip4dZkGkyCJxpWutjyPu1k5TEu6XggrV798QSZPq8YA9EmMd8aaCmzTs",
  "key9": "5vqZ6UcpMSsZUUMHbTCKGPHFy7P15KHXYVaegyPpZBQczB5SFSUFmewofkbU8zsrEAax23pkNjJK79uCtpie8ne3",
  "key10": "5SaoijpBMHszesyh7z8M2UE8RCx42i9pPq4cxUSXpwCci9ncpi9qrQ7PhA4kmPsyEqfbhjYGCKohpjakyU9fEV3L",
  "key11": "3qK4GqxVeu4gKCDAgn6umba7ATkVuLgyozi2SydTtSRizv8Xk1GnaCkM19REX76QTFRqxwB2V7tJ2HdrLBngvXuJ",
  "key12": "2yPssn6FmMsKLynQPCGAYvjwaRZJe7PTJsDET69wyCWY6G6zzB7S5cvo2WM9Typ77ybQQTGqTWnyx1vhLtXgsLay",
  "key13": "2cXYj5MsACVDka8m9Zf7yE7cPf8zffqSJTN5cN6qshsHsCUznv4dCyh1e7fFNugE9uSdYMexByGoBxJLsryVB6AM",
  "key14": "5CG3v3J9CC7f44eWf9uMMXaecd6CbWTRcCvJjPMaDbDiuLyJCovNxu1oBpJEXbDG9LYzEkMQJvCvUbtYttuDAMhe",
  "key15": "2e7FFwfeLqrK9kji5e5rQtvpCyohpuTbfYRXkYPcAnfTdohype7zubx15mTDEo8eCsfn2dC7iF8CD49K2bYmPwRm",
  "key16": "4BJiox1q6QzGCznMM4KtqgEWZpRhvwmvJHNzuDuYmyc7gk9pQ847AhMpGuqhKDidExQL2NH8NmgziULdAK11acj2",
  "key17": "3rT6NqbuhRHzMNrHRW2YBUQY641Y5Esrr7uSncnw2TazZaZcjjrocW3UYnMLMu6b7HAqTt2WUqs1YeATMXKg67sQ",
  "key18": "2k5fxGkorgAXZFfC5dTUn1twLrGpYMz4EzRVeZ8SRfCiw9vqDBDPCscm3pJ1B42xFknTwALGF3dp771vKvkEVVyy",
  "key19": "33gQxkXqbbE9swgVQ4uAU9K2T1LwodcaDSinLy4LbWCJazNwtDtdrhdA9gTcYY1sVteFVbtSYazpjmSNLDJQAkge",
  "key20": "3Co6F9nmx4ziR6MivMGtY75mFJZJBeW3mg9XA3CkusmGDFyjj2r2EQpwUKBzhtf6zVYMPENcpE4gJkvsFXQGkW1j",
  "key21": "24nCjemjogmfiBH5MHNNfPHacntjZ9YKZFp47Q7FXAEDtj1z15MrBn7Csk2PwVw5Ud4KHicWSVyuW4BBJfvik2xY",
  "key22": "2CExayee7Lu9CCL6nkdosAFxDEuZDhBs9vcZu8cTCjRLhNWp3afSRfKBy7Pj2Agh5YRDtLz6xGWLMzr3CtDdN9ca",
  "key23": "2o9xGPtoe84ajqhAYuBqVUSXxKyvGFGTSfiyaAMHVs5vcqvKSCwTa9dSyBKPjkxsT81mGxF1PauBrQmCBGP58usH",
  "key24": "59yLtGfPW15xe1M9ba8F6Li8g41sHTTeRGiTpaARpwcanveFPkbp7Ahe4Cq76T6a6QfmChiGfYKmkgUjhuWc9vqb",
  "key25": "2XWsnz6uL6qkv4sCMExn7YW6VvrHPdz7Znmh64dMAEozunfiX6oRmdmKogCFbrH8RZLcqq2MFi2hwicXvVN8WaQx",
  "key26": "Eu6rZRmWVEZW4YDCzeWmTAWXBgETKjgy9wTR7zE4zu3HfqqcB33Mx7dMTPui4eVdjRNdSEJ3QtFDtWEwREr8Akb",
  "key27": "JDr2DQRzieV3fhxJqQpauF5mgPvNfaEaiWB7YBRQTRrCwoqGmNSnAHPUSaBxZx9CRWrHjGCvaU6182Xfudqr7ab",
  "key28": "3f4vNzfoQAVvvm8zQd7G8bx4WznzTdvw3RmPeNWe2A63nYFfuVfkpz88NkHCCVxDk9accW3pKwLX5Lbfyrn3Lp9S",
  "key29": "5XwHCUJXNC4NzQjHCBUuRVn5WcVmGm9PLL1JT81hqpNyNkEWHvukhpVAmd6HEzYGZ7VTDd4xGL5j3FordLXXbthK",
  "key30": "32rjxqDCu11xuF9QYUssFVFP4iyK82w1WKYYEBmwpc4pgidp1jYeYRVLPoZGqhNSGrg5cSHGEwfrVUL3cDco126k",
  "key31": "2RuZERuDYzY5dpo2wPSRjioA7KuZiudrynraAkMACCtxMDg3FFbJFwD9SoSkmcxoCwfNA6XYa8k4V3rM7tRpSMEK",
  "key32": "379Md7eoRnqzSPtBaduL1LPoFnZ9bqQg45NU97hSdQYSdYPiE74kKdkDgKMSaN6v3dmPwH7w1c6H1uz9M7btnycT",
  "key33": "5Ea5ZrZBTuZW9FGjTFY1HFWPbvGLgYNd8YwnkSpstUfGAvHFVyXGumvggbKYqjNpzdMcwF57ZkFubQ4Sm12gwf24",
  "key34": "42srTNAR6CRWbYSsb3WbZH7nVcwdG1GT3nfiCLArpXkQrRTFhtekqkjNTEuG2PDu5PFdkBNktYNaNW6vdDwRkub3",
  "key35": "5NNDR4XvCyqZwmKwxcx2uvk76DUQZeAJPxaPEN2vKrPUFgyf31qCQraqfmBbaMvEtJ6ZAGj7nE3Fw6SoxH7dwQH5",
  "key36": "4Usm3JfzfL2pMEmR4gsnAUpfAoGM2rULLFGjQkDDg2k5wXX4VVtNp736wHZUJ2H7qSwp43r7f9G8dCpCUp6KxJZX",
  "key37": "3YSRY6e11RBGBo2pHUS7eNoGzEMoyBzLbxf8DNVMSg1w6WiCNWbbKFLPoWGSWDKYLKuJhVraeGFAVVJrALfQ46NY",
  "key38": "cvuc11TztC5Rbfo2nvUtATu4HyS5Q3gfu1KKZdMAgdagMXFFn2Pz8E8TtyFqnhdUiRAZ9F3LSPur6jLUaiRfk2s",
  "key39": "49gCdRAMHna4EFz2s3pCguJ5yCeoJd3RD3H8hRFVNcGAPV4VnVwCHbDty66ANapuwBqxWhX8HH5Z3ysCE9pVanzC",
  "key40": "21F1MWjHkFv37NfFBJpFw9YznM3Pjw1uk9ZSiX9r7sJ1UoMfrnwW57BuQtgfxQSYHu7JGpP3fGatHoHSemKJ8SX2"
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
