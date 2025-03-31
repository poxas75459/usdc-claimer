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
    "3btkkBQD8PaUT2LBcGCwn1X9zqHKVeh6W2pyG9shbY36yCBXrEqBQMhay7EtSPZHggkdCE5KthA1CcPG92TcHT1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37XBRHfxQbBzZq5YSrGYZdkUDnPFnDoLkoTj9VDsSo8qrvKb1TiHut67KTN4h6fP56huyhaxBfxUx2JW1SijDnyg",
  "key1": "9SdvKFeisbJ7YGjj3n9nvQdzoy8dteHsWCwC63bi4bixvGA4RviXWYzySTfFmvvpHmTVVt1Xm69vFjgT8FK2jej",
  "key2": "49KJnJTkBCWPiDqwixCAHr78q9hW5vzEJhsLD9nZKTZsykNgWnmBE46NGPhLXxVcd7J9WfPvhybLxQYWpaCsqpxS",
  "key3": "5wJSPHk7LJyPKkah91uEZKPL7wADrkXU7DjeYPfF9Chi5UNhYjptmyoa9qZ4eAXHXhk5qpFgqjN7ifNtVY3paJwX",
  "key4": "3uBWRZkWMjJyTpjsasdHS5jfqZbwmQhzY6NthHhJZkNK4eMDLet78f8FkLct3iLjRFfcLRU5tNTyDVYy7k8rY5nC",
  "key5": "4WXiNyeyS8VsgYyMmTrPG9RtBugqKBfa1RJMuYaShGoYT9hcwGX4nd1uqbwMcFZxKQCXcGc3wmiyj2qTmwCh1AYv",
  "key6": "8dZeiozSLUQ21a7CVciuWGoztLZy2igZPqm27x8naQvTMmEQL3BzSuDfRo9wKFPAHCrmwyd1D5d7bCnNw4TZ6zQ",
  "key7": "5MfPcRv4DqQ9jsmgqdmASmpSsQkXTdu8fXcnYn8ntNA84TPtxybvautzpug58VNad7uxRPoPsdmghu4pFUqBxVeX",
  "key8": "xbvyePgM8FLQ4PGCUqyXEHMtEKmLpBTX8AJXhnJ7t7tTxZ9vSbhFuviPq9gaDR449LFLaAjnN7FPtn2niry14Jm",
  "key9": "46eWgwQuJ9USpv4fqWhi6J8vTNk2FkmYkes987hFB3aMjKECRtg3nUcM6mCfsgeFm1ic2r9MJPA8dv814DSFUDdY",
  "key10": "ZUJTTvfyaccoKZ6D7HHCFbeiFJwbiVLW1uvZZ9nqyrXFukGhbTdQpdPwy9CmmqMqMiRGR6m4oJaVTnEPECN777o",
  "key11": "3xEszLGwqETnaATDoUBcukd7i4qN8wKQEukc2zaRnHiKF7DsGm4RQavbRnUPoZkpNE1UNye77Y7ogEc67vAxvyE1",
  "key12": "5JS5oL46UNqkrmbKPdeQKtPVBQxtjZuo9BLMb51EbgDT53hKuoMB3DfxYLjxtgjVwLyVmk38Mr34Gszd6s2gGgtS",
  "key13": "37BawYQ7WCxnCUoUphXYn5FnqiDgCSHjaiKCX7883KcALcf5b7fsDhaKKFi7DMrNCVS9qSGX6UtqzUrBHhjhcdAm",
  "key14": "56steWrc3hwiQae82oHWRUuXJYaAUBnngujvjyMTgHUwbcFKv1q1E64HVzwGXpC8JT2yCAkpuq8HozKxy4R2L3zj",
  "key15": "3tE7SaUQPcyBXwq2yKfQL5ApUKQUguFkivmqfekEKTTFNK8AZCVAkXzLykizTKjPH5bSTETKrbZB3ix2sTuuTP1B",
  "key16": "b5S8mFmGNeNooggtKpuTrjYCSKu4WSMFqutgCLM6H2n28QWWn4Qew48GPD9pPBPw9TbdVWtqPYw8dAZan6V48ce",
  "key17": "4jncGkvKE3ES2bBs9UkRGxf6RwFFr6Gy9KWqzjCaoG948mNCVDivqpYirGt6R2hP4LfXxGB8LSC4vWXgnCU7yccc",
  "key18": "9GinbX3urEQKTvzbPcr6begxQKzpsS2sG49vibzMKBVNR2EdqQtg8uX9wuXXT6HX2yc71yfg8ef5UGzqVAJSRa8",
  "key19": "3kcZHv1cJeNsD6kY2kYNUzdXyUxLgD2VRsNtxfQXpoWW3G4NRorJzFBi2RADRiERiWA4eavSUHsSuKj4w8v8F6zi",
  "key20": "5LivoAfLm8d2XzGmsDMKm9QEy7kyJs7bo4Jppy8DSUFXtKtGLAbqFNfkkJ5fPyTQZnhAb82BrTxZQHgkuRr5DMn3",
  "key21": "5Tp7tdfsiHbLKYBKgMAEUkR11b7pCAQTjDpCrfWiSSmxU2xB9U8ReSwQgyNVVprPptdzqVaWSGfAw9TeCXazo2hY",
  "key22": "LKnzgsP63fxRHjAEp3bQzLXg8uzwLQRvYiouM8vjcZ9zmA3iissnEBBuAgyNHFMH3Bjq83aHgwjYSDjfP8djomc",
  "key23": "5DNcGMHLxZe8HDiBFDkYv5a3Dr1J1bq7Ajrpj6QLDrdARPbjtPgniGi6DnUqxALxxyDmm9H4ohnQeMYNtT3RGVXo",
  "key24": "3GLqAtVFNZCqgLvVvt8yJiLdZgckQXY7uNBj1gEeLYH2j2eVR4EWzwNiH4nmvrsEpksgt1tzwm3Y1hNorUntu1Ea",
  "key25": "E87mmnAwmfsoRLhHsoerqkXb1dDiDroU5f6nbefXZWdHmt34bLGuxdsv78rd2HYpYRzdJnvDyC2k77RXgJH9Cag",
  "key26": "4kfP9vvMsgSi5YLMN9fpQatWmEx1PaAcVi2T88cjgLH4LFCNiL1AEvkzADXqp6dSnEJYEnyCQyx6nRWkqvcRKDaA",
  "key27": "36dudW1EFgP9CobFPn67DuGJXWEtDPkMvk6jFEo2iTPcRDTjNcxEmkTrLj3TyP2WNuq2Wevb4rwheJDP6gtqKTN9",
  "key28": "3ZhdfcpHxLSPgCqar7BVz2tiBuPaieVQpECz3qtab6qASC8q7YyUGcw6e3asac4hgE8ZdU72nzFPvnJe2w4Vtz1",
  "key29": "41bJfTLN39xpA4AP8dj2v1WRBAPSTyww4Cmf8aCMCoqVGZDHUK6isvRKzwnaZdUtBbDhMrw7vo4eFi5MPcEwgWZa",
  "key30": "36Nvq2kAAQw9Wj5aCnXwCtDnNFjUrvqrjxHV6mNz49Ea2wHcNNRmAoxrJpy7JLV4rJjB74BqZshCUEQKxNsNVLAP",
  "key31": "C6hE3rRUsrGSPCRnMSg3fPto542MrKcXDqmN1pQxsSpX484usRWpR5Pkj1k383X8xmdSa23KtpYk5RtactWGfX4",
  "key32": "5Y1YWH2mQgLYvsAeXMhhi97ZesPmb6shLUsrcZazTHjBf9HP1Rs6Bz9WxbwrSvTcC9R7RoizdziYbUdAgNCeUssA",
  "key33": "qpf1NDq2JiDCC1spgYT9tB5mjGcx8mXJrxqPYm5aUcYTeg2Wohn9UBzv1Kpztg9iCsCcUXtrS6TmP1AgUAHPG6J",
  "key34": "2KzEf4qJRy2qxDhr8AgZCvbdFSx2qPwHjmQbSQ2wTuzexyCnDQ2Wu6e1uCsmMWFGWy4NqU2J3NcBX3bFDxDBKDSH",
  "key35": "5ptKAcDcpq7aqpSjjPXrfAJFd9s9f3zZ5QLVLbT7N99X7c5JZRMEJeyawfP923XgZ8jUmN22ZTtzho9gLPLGDWX3",
  "key36": "2geNvUKNPn3yjddSX8wvx7Y3gWDWD3Pixdg9tnTGMnC9hPHrepcvobuA33AFBG7GPe5FaA6tzBjAA2vtPrdjLJo8",
  "key37": "67mkxuDTCCAnXfGdiqfE13f6AyBK6nUGdVDdUWisyY8trTokyxyZXUmjzE8GsGNUspdUgBoYjFLVktZV2Z8UqM9i",
  "key38": "4Avq7TN5Wr99JerTdCWTzUUvm7Df7gmvL4ErJrg7tEHT7TYi8LxEBvZhwEcV1W5ECx41g37xqoMPiaYR276h5afN",
  "key39": "4Z2vUV4cfXtobEBsyiZJNaG1qTyJvK9DYG2HeJx6RzD7ER2yAyuW8TWfqVaZs7tfMaTTNZZAveYxJLLkRXXKGwzs",
  "key40": "2kLpZo3swsqBb8GG4jHthTAUaeSYJu5L6pkfPx8T9tjEehCto7LPA6UX7E4ofNGTmpxxC89rt7TDx6TNZDHNzXsL",
  "key41": "26ApoD4oo5eRs5LPyuRvwzpFTFCGyJceB6vsGa4tX45A5WiNcxS7Ap4CPSCJzy8mKF2MTm7ww7x6ja8XF1UuL4h6",
  "key42": "hxV32pz9CtUFT4RmWPvZGMoiDRCKF6qqbDXUiNXJBEpnsgJWZnj1tAHoXTpwzB9FuT1nUUSHbbL4TU1HNW6XCtt",
  "key43": "5CtfZAZKjTnxgabcRhjoPS3Ancpyw5WiaLjTV8W27fM8WepMEp8Q9tgMjBnNUNJBpD33QK7hWAr4jd27kpaGjVy5",
  "key44": "4e6qpdXPFjyhXQMyGe8xmSLLuQ9Hkoj6stH2ak9SLHq3uGroYmo7DzQY83D7hMPJsqbQUugZmBagD2c8FBRRRbkp"
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
