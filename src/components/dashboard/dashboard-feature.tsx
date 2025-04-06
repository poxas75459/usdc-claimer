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
    "48SS57fZB2cZUGoJ2gDDxwnMiyP9CCfXWk1aJwPrmH5vr1zK8XN7LmavbCXcjYTAL2nUpesfoNg9EwHSV2KyoZd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479ejFnzJtbv7v3p31PGTLoxgrLnMonDDJaUNptGd4v85Tw6mC5easBeqJPGh5ZmfN79jMq7VFHLtPSiLtv8Qi9H",
  "key1": "39Y1zhh56emq4iWGV8Q7J2pGBT2LWkHxEWnyhe44PaJqRrpgoRhrLhwz8udTG7EjnJASLKmTXhSfUnpqGAvmGhkX",
  "key2": "4QGxEhJcjkxKVnFUgRhgdXUde2bKHAycBtEuF94hyPTgCApXSrYFXQ23WcdeHkTnkEUzoK9fKh1uycdAkf6WobwZ",
  "key3": "RYwTR3Eyos3PinfDGpdtNnjUNryMMUYN1BxQ9xjAGZvMUEGGfknf3fyFGF2hCxrffaXkZVJ8vBUgDyMym3RVEVd",
  "key4": "2BPdqGwF8NBj4F1Pq3kxV4pwZz2VV6WT8hYpSxVV8ijrkizs3YeYoHvrSdbcQdaWBptuWHA1Pnmzhyf8GEuzps2M",
  "key5": "3woT4aWvccjSQZa9WKiZd8cB3cotTacMLtihkaNxv6u6Ern68zmSCPHfusJ1Ya54s9gKgQVbtXJ42ievdVkbSg46",
  "key6": "4T3iKrnmEhDdv61mhEg7w4x4owZ8147GoT15N1EYPMNCj5AyxaAHxZeGGcENBHZLcN5aPR843rCNmByizuvidSLS",
  "key7": "5CRHNiXLr41RCx96vC21cvbNvTgYA4m411QkrdobaurmNJJHy2tjaJ5utjC6JrNQZawudUCgr4aczcggPVbq1x56",
  "key8": "2UyWH3TbwN7XHHVLPRtYNSC6tW8Nvy9e93Uim4Cg6PaJ95yoQsxQr3qhoGxRuYKn7yQKcojSEzNA5wgsci73SkxZ",
  "key9": "3WciGT98AfRGL7KtPTkKwNTDAAAZto1cxfThBcP9ygVwW2RGrAiih9BjShbuAdfRck1RXM3XDKCPdiDbRyvNyqLW",
  "key10": "wpE7vM8qJYMgEFx27WitmHBZMKgP4rNwGdkdFiVZfJKpccfo76eTZucVELJNsV7fAYYqTT4etb29ySQuApfvkuJ",
  "key11": "5ykH97DvohkG2V5y2aY2gvoAzJoxiD4pTywbXdfYo4Z8y5Jk8p6THqHKBNX37k6fQPZrdpxUp6ojCJdC8XW54r4D",
  "key12": "4tunEkrDuDmpav5EZoB926Ljc4piP4YTrzb5UA7VWpgDzXJCy951YUcobjCnympowUmGZhikdc3AV5jhg4JZg6zw",
  "key13": "27jCktRsP7p8oWFERcXnRXanDJM5o2DweAwaURDPWtrLapyo5kVoKvoE8e2iMeompbYVnWTRsGUQx3yFGS3Y4dWF",
  "key14": "3AZbw1EJEutm4EccXuHHLb1YsmdsueEy42S4hzwPx1256ih5iqK18nWcpGfYEvSvfKsyNp6rt1Bdq764Xq8hxm3F",
  "key15": "WtmdvgLGPKRdcG2CDjFFiAsB1PyxaRh3SWkyNUydsJeqgX7mUKHMuioyqtxXBvX8RmasT2wHVM2VdB6DzosWVnA",
  "key16": "4mb1gJtMRBdA1Wb3R9uQcWq9VtF8sFH3wfnrC8tmmPFSTPYj7YrNF2n1MFd6xJUTfv1AzinPCsj6m9MhNQYhwbA4",
  "key17": "35ErjMpqBUQeXqcLywuwHE5Fh7PnupXhxZgvEAWWMCoBoeArY3eeQfSxnGvm4TkrQ2rw7dNMetEficyaJuLrtAsG",
  "key18": "4dFJbuMCWbcyYkN8SDFs3bhWuvV2qQiaWEPUQAsqt2gxoBrsYFcgz4SUb97apjnSbndCcsJJdNJNAnGp47yP3Jq1",
  "key19": "4bWe1Z9T6NVzc38BjwKUFCVo9ru2Uxtx7nLnBu6gsw4zz5Gi87WmmyfA63MJBdDbzJRWUHcBLFYmEj64EmHXPa48",
  "key20": "4NNLyo6GRvfGHVRXaknC7TrPvZ5rKia9Su7Z8rXPSXQCz9gkWehLjDJ9iyj2adUKjJuh4GhC4SuarhYYqnLSqDUo",
  "key21": "4uY8dyZwL1KK9TVfpBB4kn54RN8HWxFaZhQRHFVEB8CPCxm76g1ofQVENS3eRRnMgtZ6mFAnVnHNnn72Yy863PHK",
  "key22": "uzU9MrG7t2uprLYudJB6KCWf2S4hSTk2qSeRMzKrHRNuaq9QT8Lu8voGchcuGtxcEovRWv7BZpj3meBeyZk1aPm",
  "key23": "835wKDXmrHUJ5gL48eRJuwPxoC9bFcmL69ggLidS6DezpQZGbHwz1RsWES3JjCUN7WNuyJ34Mz8bgWByvvosdQ3",
  "key24": "eiLLZDV6F2LmYV112sZ7BkKu2F3ZG763m71YGTmBfLVLKBPSrPhDdsFCjAoWFEgyhntoTWcoLaiKcYd4T2Qtbxp",
  "key25": "2zy85QVcM2wJ92feC1UtVuABKU8cYPwnBh5h6ijMEjL5Ymud2zPENyNZMcoPRKYKErtC21qNfxqudeAvB62JziSa",
  "key26": "U1xo4Bu8NEcUWjHfQ1iowbAT2Wm7uCjrSseJxhYDLZRnrU435dwUTXkvhdZw9hjLjyeQGK1KmYEtsn7rt5k9aMw",
  "key27": "2nyzu5us9bXs6p8Z5ce3NFozY64YPUp2KevKNLjVEyqx8woYk29ur9emUowYgsafLE7GpsHX9gqaDapbYC4rQ8Po",
  "key28": "4PJkJsMBXZfGG3oDTHo5wxNMx2dmHxpfcU99MMbKWAdoRwBrSHqCbuscBFt7T8uRKn3Rz6Q5gzPFaj52VsJEwHLk",
  "key29": "5gwKnnnJMXcyTGtrfPjh9BZRtxBSUW8GYryLDy7nioi9MmhVSPoiSgFFfTtqJSUoAf4MLZY6Fzn5rDfqsNms87oR",
  "key30": "4pmXVbkN4jkv1we5yKCVUxzJD9cJsYhE5p674iNN4nXkwrVLE2QzfKU9dJoeFP9niL2jS2kmJ4eDpd5huN9Fc12e",
  "key31": "5AGAmVrTBbRFaCWMBkdCFLp2pqrozg7Z4k7MEXEHkhBKoKKUydzhw9miCUotWd1RW7mFTmDcaUhutCACY5hUFbWB",
  "key32": "34UZXvJMx6iUYfa6f6o2nSTJ6nfchkbP3SbMmonUFth2cjFeXabXJwB3peVtmesrZyqS7WkMZ8gSzeLrwv6g1LV4",
  "key33": "wuXvGASDWkWVvyDiSJ3wiyEbfb3ezxyohM4ZasbP4MqJTkzDqX7JSfWoPJqW6k3uhhxwcLmbmuZ5SLtWbjScfHY",
  "key34": "r4F2KEGUand612JgN5eKyWr8qA7odSebSWFJBJ8PToHdMtHEdvpszsjVT5GnexT23KHsDjnDiznf3by5u4YYYzK",
  "key35": "2Zcx7pjKgQPehpBFFN6sDUZAC8YmLjrs8WoqjZC9dCe95MQQVGcPbsU1evWzVP7DEEwNRDAFnLMXE5kSV87EHTYm",
  "key36": "3uCm59SE2jbsF1RfSZWnvEeRCGP1DLC2vwcQgx1RAGtpnEQJfEse2QwaaE8SMSTui8AFbUv9K3EEpE5bxhveTAUE",
  "key37": "24SLLtxXMYxLRWf3w87bex97pDTuTeifeujrAZbpaZTaaUkVX53T9q1CnwWahkhpVBAzNRU1V2uBnqfguuTKVk8c",
  "key38": "2KduHsG963hHcG1J5rbu3cwiRw1qd12PCcQs2ZBadsyHs62mYS4gb3TAzhTWXzSuKsEXKWykkLTa3Nd5LH7Tpqm1",
  "key39": "31PujNfnpRXyjnpoCsAtX4sEMNVqpLG4Qo4jWySphqdnZS6y5ddYfs5t4gcJDNtDEZ8NZaNWpzgwtTQrUVCR9oPZ",
  "key40": "4iTepiTuGpoMMjUVSzhsSz2SqrTUFyg5DDBbfRkzL3dFchqpjuDJTeHjUiGEAB1MrGroHg1XUqcfM6GQVgTxUyLP",
  "key41": "3PRxkPSC2Rdt6x65FmMDWTKEhrUqjmjreAwFhkkWoZffF5cUpU6UQiAv4dpoKqvzgiURcqVrDBvNhivdsF1LpYVm",
  "key42": "4Hg1oqv4xcEvDKS3GQJTJL9KYxxDN6zEf41vhtfLzX7gkR97VtkzDLyWj3shEdZGsYLMS6rRceDJDu896WVYPoUK",
  "key43": "4KCmt7892rMB8PuWnRm4qKXLUjGVir15P3NcLTu53F4XAe3VSjnFSaVM5tp28XanVZ5HnzJXPf16Lrx5pgZozHCQ",
  "key44": "4mGdeD1t6MPjpV7mKbYYKiUUodGU2xgMCos1JhyT4SSQahjnWPUsUwGmLUTGJUoDnfptLje3WhQn7Fjg62KfpTPy"
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
