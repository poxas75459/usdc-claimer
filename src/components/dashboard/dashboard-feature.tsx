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
    "3531KqJZkx8nU2JQJD5kujF6gRuTSSXSqhANFAuyBXHDbWfm11HNdcjKBo3SoRJENrhdb1Fg4sbJSeRLhUo49aWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HQkYns52BsJaW6KdaTTsakPnXSnuNEFogb2WqirwYDfTZHfG1UevxbTm3GYDbH77KP6QVqX2avdHqhrY2UnKV1x",
  "key1": "4zgca8sCPVHgjvUYi2N1AGDwvHGEfSeUjYQjVDax2c7Hty5Mui9Xk2JAjpaHfmTfPbrDEhhXSfK8mXdUgoSRWi1w",
  "key2": "5PJMDb5ryPYSjid2FWD3uWbBiRfjyrP5Nbii4SGW5CjDk7xxFYpTPvvje4mGhnGi19x7hM3EEcpjK83PmSFxecWS",
  "key3": "462xC9JRbcK2Fz9DiEzQjhU7hSsRy8DeX9RvUiR1WJtHSs6jQQjPvUhBkiDatrdm9KmBK9FMb6hjUJkSz336QBDt",
  "key4": "4FtY4d2G2bjwhP7sanPskK6wREq6Z65cEKE6bcGFFPsNiocbAxd35RuXD56Yx3SUa6xryPRAQ4zES26R5ykBh2wk",
  "key5": "5o3iyug8MK6qbRxQoq8h9ExmWuwjGsAsEMoeQzVrsJhBkfxBzi5aRMVwdjFaGHxM1jHSiRh8vU7LV1QaXzMiQJnY",
  "key6": "2C1Jb8oZAbz1mPmA2eAan7N3RKfnwvv4Z1APkjZxCBve7J9sS4JG8ybHcm77RYaJXQg6PFo2b6abrTp886TPyNDE",
  "key7": "i5ifemhHWzKpq6xBE9xTz8fFqB2Tt3JesmVUSKZiQ4pf88mi6oTw7Fj6Ggo55ZG1zzsTUrohFxgomq1PXvTa2nb",
  "key8": "52cDFhCd7W4MiaevD78YY9X2ZKQN5Hp1CH3Xde56jztzN6WyKP65KD2G5apYWvCh48VJUQyvvZHTyUqBU5safURN",
  "key9": "2HFmNqXVwaGQy5A6dqG9oBZG1vXDCi7162pbFBy9U11n1mg4Fpdi21PVqnUqh3QnVeMkgYAjU5JHRCcLD7REsYRH",
  "key10": "jArewdrMY3jiG6DxwcNr3ec5XitA5cTjznEcFfVmB8kayHCroHcsoLpwHZxZzppTJcjvsJ8kcuNUCYxADa3E8vq",
  "key11": "4bjhpnZQTCMzQ2v9dgV73Ct91bS2hfEdLT3maWChDJ5PCXxdCjhMTjiVs2Q7f9Y8iqJdNy33mKsw6jvKQXKjnznY",
  "key12": "5tJBZk2io5wUUFRNey8gh1kMkpBtgG5gussLkcRskZdQcskyvRwZfgWAfpe6gvd7H29JxLFTfTdNVL4BuG967Z67",
  "key13": "5jmpMtVGqqGG5e19H6NqcDiWxSvs6VVjxXVJxbpUyXcU1NwxDwfSBadVhWHru53CSVUoUrD5CPWq1Y5M7mJntxjA",
  "key14": "KMdH67nZ4KNq3EjtToYdJQmb7kmQzZhEfEomon1gZMGETfKJ4EDB1FUR6gzPTeg9p9Kw9YDg8dNaTsdWNHHDBbX",
  "key15": "2WojxNJSoE5EAkiXexg8axcNus3KCp9zZvA3TRCthwYbq6vNj7an6RjUx8CgE5ka6sGZvNaD4KpfKX7imjGCkLju",
  "key16": "81vPThrcRmtGSpgj8dGLyDYCnVoEpTnBaKL6vWWNVawjmcbTDHT1JSHC6DL3wWPJZjMGJ3Lf4yuzVsTboeB8hyo",
  "key17": "axYDGAss6SWMsRe17KPfD14WTBypeTGyyMfxMpRwhDcJRpfgdMS4eVBeCbE5q9zSWkzDgRUKnfWPU8EKsJQHyPt",
  "key18": "65MZ5STjhU57QwQcWqC1n1h6VWFyvjaFC3NY8uukxXXmatbxnbRHtZmZbScXYX661QFADpCfX7Pxk81CeZEDBa5A",
  "key19": "4HgQ1SkWxgsBebxDYmPTZStnj8578PWqt6NsNxJQLfJaYucaFoCoWYMg5L6PyHkUkS88whPbeXGfan9cjXD4Shv2",
  "key20": "4CmX57FFFiLUd6PpVEZUWhQ38n5xNZLifhacP6TSpVauUzYASjoFRsSeLEn6gMK62mNXu2kWs51oqEGCgfH4neR6",
  "key21": "2uN3k1t4qtgdb4RV9WbMFJh2xNPNcUrVz3jDhCSojMQwvrpSDa8rhcepsqFa2sTJRwDRBUXen3EcfNv8qt4ttJn4",
  "key22": "4D77Ffip6HqW7gWTkacgYkAZ14fSun6magvi82n8oa92smzt6svYdhds6Ksaiqn7SbmT7XodNAUp8PB9QKaqtRuW",
  "key23": "K6UrNCAY5ihPCLRUgjH4qRf9q1ZLCMERGc66bqccF34w2PyTvfFgEzjPUVEh27H1DAAss9pF8a6JP6jZDyCob8G",
  "key24": "x1L4cxfmXFyJLetYtZV27Hkr6Kr8Z4gRw3bCJs1sskKyPq2epQAERN6p3TyKuvCAzdfqnHtjQqNMPx9zfdAL9hS",
  "key25": "3Ri9wYMp9WE3sjdx5BuH9vYd1LSGyw4WxvngbkYqMFBwBcvT8cdz2MJ82Sk1p1QEkmjYhB2Dkjj3iBg9VnhURjUR",
  "key26": "3739jo3Dq68tVWuBbVVBPSVMearHPemVLiMtH5SRcjFf3LTJEMUG7JjKwRwWNULAtawHuM2bQnV1txrz5ZCvKkvi",
  "key27": "3xQftxfosfHH8xfBbQDX6oEfTKBmAurKcL3nwanShsRgWueFD8jefGNsn94F6vRvBGrbvTTwJAscDbMhcetkgcsf",
  "key28": "THZKbdAwuBYbkqtV3aiCSzB4U2rmeNYGyTxdTiYBZ1XViTswpRP5bSuhJZWoYvQooTCb7WBBkfCLvMs17a6RLeP",
  "key29": "4YidjcXT2ffG4FbxY2QW6u739K2ubtsz6ym7m4GP8kkfztdPme575NWGqw55Jc52dZyL5kWJw8XZsBx7wqBhrzpf",
  "key30": "3G1URbPi7Xq83NipiDNcTYmXkWF23sSzquEbtn52Jwyg5CkRTYoDFUa5yZqzDejfyEQypCC4b9pTANV9JRPgtq99",
  "key31": "2JMhY1yuWhsqe4x3n1Z1X6UsCvugEjUzS9QVEVKJLDES7E5iYo1irD1ELAoeuwWQ11bd3JJtFKtW57rgDsgvCjSi",
  "key32": "3nzwy1amb5ntejsZpdvdUj682HMCHobvvTuV3Vsez26jaSbUU3hzWQgfpTK519JNeYFCmPpqucMtdeLCcKMW5mpJ",
  "key33": "a9HZcJSTMYBEUV1xzLzM4Aws627AXMCvijPs7fQF2haGgj9JRKiCqZ9uEXFizSTCBRFU3XsoF4RGg234AwGP3hM",
  "key34": "3AaBSJhuPM8s1Q17sK9spse5eEUthVgG6AgmUBsekHwsostSxxEUkZ85wNicmN15D2dSKneNicJxB7wr27KSr3U4",
  "key35": "9y6DRx46v1nFeMoFDdkT5mHvwb7voHuTB8oTiwURs4Mj1U4U4uCtnPhjU5Nrt9ys2Moqer9A2gd42mynTQCBtT4",
  "key36": "4sDi9xcU8sboS2mN3ZSmgm4LMMaUfn5XBULg13VLAsWdLCmXU8YANvmhuzbBAXfHck7HSfTWgehq1UQDEvVrCqHU",
  "key37": "3CPdb9PoQnmgbxsGwbuysEuCxSLRS1Xdmbu1kwLzxJpohFTXbPuximXBLSF4BQgwdsJfg1kS3N5JeSsr6XQN42Ky",
  "key38": "TS8umTqxka7L6VWm1TrUS7Wb9tbxRAKv2TRk26sX79sDKHC5FQSHcB7SzU67znRykTZKZHtuYjsPQNP5T5X8n1A",
  "key39": "HKhu3pZdmmuzUvMBY8aRPczbbMMTzpFxcSMNBE39yhqBwKsbupBaUhMTSC7Q8kz8M1K14eAA4MQPpqR6mEZVpSH"
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
