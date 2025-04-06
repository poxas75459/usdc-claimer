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
    "3TkD8L6bbqa5vPSvN19fuSziNdjp64iLGqQDGn4GfpHidFK6s6Kd2jDBBNrNzcpswYCSdXErzz3DY9F6S53nFU6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jzQsXyB6HchudRj9MVQwYy82MUvWhWY3f88tAiJsfAEDbXUoq3zUiHfugdpw1V9SL855bXeq5RVjUDhDYFb87fx",
  "key1": "th33MGh36yHe63Kx3656921Msh7KTi8kqM5hMLcRxGPsCUuga9QGCR6ckwGCBkLCpHxQJCwWa6ATEmAHnX3Yt7d",
  "key2": "Dsgf4dXBx63CGKKEg8SpKSA1BA5Wkf6MPtT7SzWJRcCaRfGJn4MwUxevJvcZ4SYJ6UftDtmYfDUdCDCEfnA261F",
  "key3": "4jWGVuJSZMtuJFP1Yy3J5g1EgYtF45kASNYWSjGjXeHVbPzWmaUiwtyhrpQfanMrZQRtwcegjs3NGixJTds1zZ7A",
  "key4": "2fYpXBa77FwbZuBCrzuaGYpS5aGBuRE9TVHoVM6XiEL4UshcX24FhnxsdrySkVXPK8gRFATuzsXhGJFxTvhqRKRf",
  "key5": "3V5Z9HQghTvizCwU8Mxh4s1wPtXUstut5F9Z4kBgaeHeUSkVhFbjNMKpVWDkug9gXctvxadNjREz3yuQeisZyweW",
  "key6": "38E83UySyrsh6HNwKyxw7nzq37FLsgLVU5JazNg9QRZJiMKquA3iJ4kepCziyuMCBkJj1LsvBdoX5WrUj75ko3rX",
  "key7": "3wGdejuWf5T5U1xNiunkXgZCLcSSWG4wEiZJNQZwxmD9YeVBehQfme47ifZjjvv32EdVwdSfB7xzMFtddTFbAab6",
  "key8": "4gBiH1UfemFNLKjck55iVdzB5mkKNbjmyeJKskism1712C9FnxFaJN7RocUmSY4dZvTWCKkHzpgstNvWPy8ccDgs",
  "key9": "2cQHXM18EkKae2mcJ4dpEAcAx9NqssU1jQzPR2mFK53cWq2DfDemePY7JL55amVv51ovSezQdrYJAneGhj6Z5E8e",
  "key10": "4vWKgt1LZ8w7A1ofvdYB8cFg2BLkWeJ3YptcW8bdVUkD2HbgP4QfvTZcV5Qmq681Xgf29iHFZH35YSztB3u9onpL",
  "key11": "5SnNSrSH91HwA8dMyF2ok1jkoQUZSj3MQKjWSvH8oPZiswitPNLZe9Tx91u4teeKkfSgrzi9BRFrqCFJvBJ2Y1Qa",
  "key12": "5hxcgUKmxLUti4why6FtmgrTT1VWUXeLsf2jkLeuNhsjDKSS9uTMkehSErbQYh3V59asjJmpQsQhFH8vfJRQPfHL",
  "key13": "3QAmMpHHtQAZfZha9qShmWhpkUgHhkCEHustssH7qUMEoRzPgLvusFBokQNiJopSo51cpWc4e2XcaKBDecW2HRN5",
  "key14": "59hzxdAnJdfotECjKoB7FKWwX9u7KkqzYH3BNLo7UJs6uDGSuFokKy6sfGwEWBWfsSpEp4pgaXM7KJz6ubhecfMT",
  "key15": "D2NG7AJ5qet7MGHjU7rss15sitxfbjwmTtvgzyZysawd7YQbVDbH8nenu1jSd6afSKT7KiSzVjRNkYN5TE27ufX",
  "key16": "4Rt3Wzq8gy8DtiEujAjruGJZTynirDUiTboBFNd5WDLNykoXv9uRrnEao49WiAR1Cf35UevzUgm1v7Rt76Na4mXh",
  "key17": "62wnVGQBQ4Rag3B7L4W3E9zrqkENMmQJc9LEFseHGGHtM8PXUfLds5J4WbpBZbXfeXbcNgNJrbYj3TDM8VX5c5yv",
  "key18": "4qTVFrcEcwk94Y72m9kHu67epprKCMLYQxX1xgo6wujHvWctJEFU3coBTp4P4L6XpAu7nBMWyqBWVSV9FwUGzk7f",
  "key19": "4ZJDSTBrAEdsXHSaMnzZZbL2NCx8KtqRFMYZFSNmRezh34YPrFtHTvUgWMuA8SR6KJs9Wbp1VdwHFyEAr3iEh2E8",
  "key20": "WfEk3PuQbAbJZdEtP6Cm7XGXtjEpNuTSp8kPPXbyF2RH1mW4gMjzUBRrtfPGS3DVdVksgSJ5aGeAHXw7bdUpBqz",
  "key21": "2VYSeQgwTuRd6fpj9vuaQ5XaB3iUL1gxpwsFE3DXQdodQUzXQXtoG98ZerWphd3P8mawsxScJPTVcgU3CDDMqcdE",
  "key22": "3Y138noaT8ZFBD37R9tXCamLQDJgbQmzQCJGAR8DWk82CeyqNnZhRLcMjcyw6WHbYbS7DdGB2Ps1tQp5wtwQdrWg",
  "key23": "3QwYvEqsUB5vFDs6B24Bc8CPgK9uvyekkvy2Q1n4WozjNwoYf161AXyTx16rKVFZxiB5iz7i3DGvBrQyQophUZJ3",
  "key24": "3r1tt1yTXiJonDTdJvRcvggF2NaBftw5NENw7dYScitfexndBVrJPSB182fJYzDpAL2sJjP1MANeJ49F6daBhZgK",
  "key25": "4qdnpej1uKKZgLtCaerHvJfQ8PVKMv9PhRUHLwdvZLkpvinF5RvdLXChy6qrLqyMhtzejEbUuhpDLTwEqfMgQCAq",
  "key26": "2k3b2KCQoP8JK9EYAkMziSQS9qbHLxPAdfVuUTcNgyrb39oKzhVyd64ReHPwV5uttyxrtv66933uyq7HA61K3dND",
  "key27": "2j8dNsDFGdKEvnjgK2pNjHsVPUATf7AeDfChfEYgmLamHWAgZvYDAieStqiHiXJc3mimottDTeKqdHgqMpwrboEF",
  "key28": "4aBTez1gWoXPosrJeYQXruDMgV2RXzxHz8L5hF66Wxzv7F8iWvWtfWoomuCj9tDg3Vo72Ue2ZbeQtoy55mEUzS9h",
  "key29": "4Aw9QwhJbXfUL5gzLpPewiDrcn8SJbuakXnM5DcGy5ZxxfdUcqvkv2hmn2i1Pg62i6W7MEkfa7uq1LKAqpMgBwMV",
  "key30": "311Co91Dryv2Z9Wi6xgGm4TYVQpK21kck3tqPUM2Rw8EK8fqBjpkeeGvW2wkszzZBjxFwoYKWpTAZeqHXkPHPpLJ",
  "key31": "2k6kMW6iqXoFxA48YcyAS94P8b9YsB93iZbg6QE6S15MmVE68aV99i7QKNwi2vg38AhckBeZLqZf5dPP9eWCUA3o",
  "key32": "2FyXvKHeAbGPiKBVSCD6eC8nYJZ2kp9KusCUAk2LCrhKGu7PFyT2ccVURq4ZKioJoY9BG646JaUikGvf3iL9886B",
  "key33": "3YT5aiU9SXHyLsVcZsPpbAjBJPnCXw3HoGHPr2ja67Nxw9onD3uRpUkx1nEL4s4NJkK9T39E6E5yY4dfNmMnt7EW",
  "key34": "22fPi8eX3wtPcWE9SJ6zi3ouy15trvx6AYRiNYLPtY2dv6HzxQX6JVQeNCi1aEBk3uQKhaDDU3UoXRb947yyFMAh",
  "key35": "25fEtseYwhZUmtLKCAHACQUtVrHiCYci2GC8FwZ6Wyyvp6iWT9CcxDs9xtPcTRjM2StWmzXudos9VM9S6EbiHkue",
  "key36": "2SSXG7psfTXhBGVWAqWk3mezYJNW8Js19qKS6ArddfgjaiF2gwynUpMugetCrjemm1X5iYszaK1F2SvrcEPthX8C",
  "key37": "3cfE3fUTF8aa5rSkVecsBAcPU3agqAiiggZ98WjkZyiEVbsa9qzbtmDBUXRCVbEgksF3AkGYoWer7oLLtMiPWqJM",
  "key38": "3THoTHHecQ24uKUcKM6TJJV2mzDXMXa5tzttqQUskYAtampMS74yzsT2MyqqwfjcFvMqHo68KX6kDQhPNrsyT33g",
  "key39": "3dCjG2E3jFH8VgUSq59kWx8MhZMgdfBkDaZ5anwkXPFKkry8zKp6bdJx6juw2YMMFi4xJ6GiWWxuvBGGp1Vju88C",
  "key40": "5zAP1aL2zc9PGsM9eA3QQgXLiXrWQzzEYczxg1hpnWfcUGu1aBf4xSquohgmcJr1CbYsSytHYMe5Y4PPXkvezu6g",
  "key41": "2e5zxSVRpaHGhA3wWv2SbEvtKqxqRDrqgV9oor9Vv8y4yQLEwu43KidTeiBM4ZMpwFxJZRbNq1qBHruhF5CjzuCH",
  "key42": "5jTrZHsNs96pZcJPGvMdFmLy4KPsQrog1KHYpvtr5MpzGMrU6qNA8qZjs7LzjtC8AMwhmUnKybSDzRK8KWXgkzfA",
  "key43": "dEkq4u2W4seoiSLwqcmwe2f6qdNgeEXXDbWqm8umz22aETFDZ95aECDzry66VtMEmYJrj1HMzQzLUgW3TtmjdgF",
  "key44": "5gvKgAsekZXRYgUVksK7JLunrKvaAZDLVYCsrGcK1kXu4gfzn4knPc82F3EkHFLcWpmrZRGufcWCYstJR3k3YuFr",
  "key45": "5YZCSoRhPGBxbfjrPi1TnrLSGA6Kv8K1dDtfj3Qs6EBYe6KDjvAVzPinoTyWtKgJn66UivNFXfS9dQ85gxdLieQJ"
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
