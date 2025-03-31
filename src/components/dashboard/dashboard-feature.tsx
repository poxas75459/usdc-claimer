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
    "4SyBzZzKZXmkGnm1R3nnE9TeE75bcMEr3bUZEn1jeCzaiTkwnu4fKnA2SegCa7rcyCzK2aawo7S2asqBNw71QXV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n6uvzmgv9ZRca8M5W1oNo9QHHecty1Zu3AWH89eJBDWgDFNK4SAHoDeya3mtMVTuLhGMpw1MUitnaxyGK9qJ1wY",
  "key1": "JmG8YidcHtDszneEjGnm38H3cozowB8SeaAGCAZjXBa2XFZk3a4vgBAV9NAW9bsDWmvGm9v6h9rggjvNoHU9isi",
  "key2": "3fQ55FiCikVCvJQmevNfACtk51aPspEy5Mm5Qr5YzyJNkG2gLDwxKwoZZhDyZc636VsYcLByZuQKtB2gSfjscHcf",
  "key3": "38qnR9Fj4dirfWKNNfxTU9sw92W4xQhhUdVB6e7m5F2oD9SgRcpePAXvKd49P3agcmMA6wPsZTvYZVxr9ForKQso",
  "key4": "4hheHJKj43CxNyXaAPv9jHrDiF1ne4XRBqw9ud34nURYEFRriyjKDGWNQooyLoEyGqVmHzfcruuzAJRdfVefQiHW",
  "key5": "5qNEvNuN2oD1BLbECgRmfcXVcaiMXaFsoekQzNaSvKWAT6sReuv5mddCd3yqzeHzZcbMzdVsFoxAqcYQQ7VhWLmP",
  "key6": "43XmzxiH8ofd41Epmyc4hNKFkvC7W7TMukMyCgot9PLYFtoAGJHpDFkMLTdzwVzTfrwHb5LTxeagd9mfSZxJPnrN",
  "key7": "4o8BrBb5HTN1FtGXQ7G6uZoqtPSUmf9AVpwWquLBfhnZEcts17FX5H5tNFGzdboPTGfotNQYuwJwhMFUReWzypcL",
  "key8": "dVDyegzvAU5ztri9Gi6emAuoMVLAtaFmZSuyh2hj4MmxiWLvdWfvnzf46e6gvWqGLYcTCsRejHKx71CZsWb6Zhs",
  "key9": "8QnZjAFRnmWHaiK9Usq6JGbPCDi81vwj2H2ZGSbhELQ53Cfzo6LiKeQg3VZLpoheKabCUNyLvRqP2uhTxECUoco",
  "key10": "2LmqRWX5byBZizBHU2EyyQFD7suU46Ycg5aMJ3zgRes8jpwbM8MD5sM5osFAR9p5Z6yP5zPNTEWJzvPPB8Q9Xb9h",
  "key11": "T1DMbWqKocc5qfNdW7mpWvYwxwjFsAutNq8dbZUrVfpPs4eRw98fuAsYiqAbB7FNbchu6LUPTgVg5pVw9MzJusD",
  "key12": "3JUAGTbNVqTQ1CFSbomowPKWptbLb1S5nJebpw62shtdeucnoFsCKCpQmkYucsEXQLV8refN8RPCGc2jyEpqNjQ1",
  "key13": "3TRKv11EuMYCn6Yv4pQD2h3njFG1hoiTwNx8v7hw7nmU3UGhASgHS6DTS8YLdR574auNEqNtwLLyzDdmtdSMgfry",
  "key14": "nGKFYQtjxJTAVDoJR5tBX5rfJxvsLGXoNRHUgdnepM7pXnF7tToWsGfDKN9e5HDkimwnaxyiiEQFq886FK7pTRz",
  "key15": "2p8izhrRforGxY1k6yJMHUFGig5LqWxEkhDvAEsBFw49fwWav1nM1vpiMpcRxvPn68ryV8J1br3nQUuM8dBXRuYi",
  "key16": "5BwBKU6hD6TenFrbMs6GCYBvKpRM4jYwsE87VME3kSEsX1dNwsExo43p7Ro9zzXYZzBsxaYoawJ22ifDox5zTbk4",
  "key17": "3SqEPEiUkK221h3vxz6aLLf2TnsK3mBhAnqFD3UiTLXdWBh51tvZkEVUieJqsqyAUB8kfqYbkaYkZbDPM8wRj9Bi",
  "key18": "hkBCMhwqAef7TWNSbg4SX4jsPgpeJ7FpuH5LKvDMe7tgTLGPFdqrJL9ybntA9goWMHXGNFPMtExZjMSFvwP8FUp",
  "key19": "9SGfJu2brjriejNRFmEPsu11PNrKm1fo8DL9ymZsasjhy5dzGARojwNXunQFKDGbBbr97QWfZE1EuiS4hJvjPKo",
  "key20": "3gqaxhPJXwJ2wyqCBXR2zdgSDJH1Z987ZjxUHUXn1uedxWdYMmBAwJHWgThZ5xr6fE63zbLSr63VsDLY8ACJu3rv",
  "key21": "45pGrauUtFQm9UcgrDm16fvgF8sG4JhowbU9aionVtWuG82Nae7Gq5jncEMajsyRwDLrQkNxh9ebCX4bn6iY1nS8",
  "key22": "64as9GYxTt6ppTMvcDtHbCBNXMRcxX497qJ2zmKwV7viqJoaWiPmA6wL21RwkKMAw5T3ZWWKiTMHAunV1MLiAFQA",
  "key23": "2NmPGqX5wmjegSfwPMc4dhPNhF5RRdpG7PGvtLiMbHHZ4uhgRABhfhy1ZjhhcZLLW21CXPWb3hh8UyPikYD3kXGw",
  "key24": "25mXSNFMh2Q7tE6S5qh3fhhnUzoHHK4oHZ2ungdPtYvMeCD2fLdwDGMNQhBf6f9LJRyV2E2Zugkmxbc1XcJ575rW",
  "key25": "5WGYB76KeNQUqE3LWXkr5s3rFqEpxz6aQeLvwUek5ZRT6VAP4eZmuzeqJQ9J7TLuTzgAtuGU3WnYx8yHU88cKWek",
  "key26": "2NCsLiZ3PXKs1Mv8moyQujc1J33b2qYTBAyXfYoSJgXUrwx2TxFumihjjbFjkkTNL1ZVauZLKLEyLARnMA73tnzf",
  "key27": "2wKsddxyZyMydzbWgDN96xt1mcS8pb8CrhH6p4ThtRnGHSXthVrNFpjfaK6Ue7QQkzXUMtSryyknSuzmSVBRH6k8",
  "key28": "24myPme3nPjcAqpsg97DhNUAX2U7ZWCovvu3Ep1DdeCKrJsWbqUSEzhrqaF6t1c7FryTFv5XUnxaNu1UkT2NTRZP",
  "key29": "4ALmE1f3rhMmqTCAHv6UqnpduNu9wEY3TLoNqZradVrYGUM5Vhat7AHR6LQPoB2rnYT7NqVmyWrjBz8n5QyKtXuK",
  "key30": "qr4Yp3Y4HhWpeLZf45SaJRA3doQ7HkS2hDwHdSfTuRL2bxCSibn7PX2yxy5jfUBMzoVhKCtRtizrMCK8fMVyrtC",
  "key31": "45WRtU9KdwqTaWqHgd3B8ZgUJV2DLur3d1H2CNrjNvCn49Rx2ykEomErntUszVgaSdhx6zvKzpr1hJWLQcuqQWYX",
  "key32": "2mRRtUwQpoKs3Rcs1Wf6E1MvvF25ioSbVio2hme5T9uc6T9h4t7tFrFNDRVkjRrmWy4BKoLdLTy2c9KTPgAiRAz6",
  "key33": "4BhoUJFPjhxcdJpxkA5DgzcYL77QE1n8RV7NCaGpd3SjJNvU4yNHYSevjGcYomkprcWYEH7ZCdpM3DivwK4biM3n",
  "key34": "4i72VP8N7ZJDhYkMNe1tVs11q37e9SSCeRipirHxFuEK4wqSsx9BamwgnZwAp89b5GQ19iDUikB5HSYopCX5HAR6",
  "key35": "58c3CzXFcNv2Qx2awybbsXt4ciWjLoAWLx1KfCmx17kyDs8EGd19MUWqTeaRkzEWDWuchbzULaKekoraS5KnPWT8",
  "key36": "5Jk8aDw4okmeoFjRCUEhcvx9my7aY5M8z2YbmHcFfRLzA9gGaUFmVpFED34gPRFiTQSiDmcNmBjeuy5uN6JWUR1v"
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
