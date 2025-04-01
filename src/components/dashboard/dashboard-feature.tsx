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
    "c1nZ2EfDuSJy4s7cQJGedY5EuoK1f7yCXaFxAYfRhtRJjZVoQRNCu3Y2W7raAWeMGtmRihyrw6D7dieaNKXg2u6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ke3ktyVxtWkdByytzBNgnhwR9PEUFKL9n6skpbCRcPLV1uLbMJp6NMwHtSY46APaU8h3xiirKGNNhyhED99WaXi",
  "key1": "5SBej38A773D1mGcpcFJms5fNRM5Yt5g9hypqtQ2JNVgz6LMvSH1S6QGcSGQatN9k2tLXggxejLopLCdWQ81YxG3",
  "key2": "2136rCx5QqVePnny2mWPuxQZCbfEdb4YGjcLE5U4qiQbgfMAbNee17WvLgKp8qgZhHuWdExh3CCVxjre5qEhQgqX",
  "key3": "gdwH9ZD6X3YhJdpKHmhA7NY713VqkCGPbabDYnJSn5HzzZog5emoHM5JxSwc4tmrk5XLuR9AQc6NMmYtRGAcWtw",
  "key4": "Zyikd9yyUkqXLtpW8VY21ewBRJH6BX6hjKATmxSjLyTdJQjmRT8zGDSYsfusAvdKHCDRajekdpFpvxkV3pxPGEr",
  "key5": "5tsCQEarcSmJkSAh4WYRVwmWznjs8TFqzAAceVdHZiK67bgYvigVosWV3sTApG1E9woSozzuzLyED7BaW3mt9ErA",
  "key6": "2rD2dNbKSm4vaZ5w9R34cmsw4nosjAha2JBdqzRoeQdeF9Hp4DkffH1NF7gZS4Qit2xS3AEL5NQRMg8pufw9rtjs",
  "key7": "2nPPQS4HzDRncXkcyKLoeFoR6G12msZwT2PmHr6Ey7f3ydigg6MhVt6TfHhKKctuEhCCsYSUVWYMhSmVAwWr6rfj",
  "key8": "5qtiiiPYFVD8STaq2vhShR3Z4b6tnuoqQEXrocPk2S4KJDvpRPaZm976uF7AQHKQFpZx32TQMqmU4NdeNtPbj6ZY",
  "key9": "3yXUfqpynxZwyqgxdKQ5C5GHsetkXikhwSsGxk92peB7hDB6QMffumBKoXfRCAm33mLSD3Tffs7q7hpMJDJPpGfu",
  "key10": "5QraLh4Pu3LrjrJM4QzpEWVGpNscXpfnptkWa2ejQJRjMttW3iSsCByftJ2oYiRfY3z27STK237SfHdi7RkX6x6C",
  "key11": "5tWAANsfjKq2i6xJsVTbgypvX1fRpbtgMb1KuraDT2etwZZ7cxmbmV9DbAPYc1LkWhQNBfgvyfaqx35owNUJUj98",
  "key12": "2kGEd3NPA5SQkETX7HyHGevZKMz1s9vM33ESzyzSCab83LjGedCvLFMDVMvmYGxPTRAQnqHeVzBzP8istLUMmobE",
  "key13": "27mT1fwSwcNgH3qfMyChPG6LkvMKEgwLPmZzfoQPPNB7vV882PXjLjSw9bVHhPR15W5QvpxJCo6xA9ENUNjoCHis",
  "key14": "57JHpbo2JWXmh2V5XcTXpqxdzrjZEj1GMriBrm1mdg88gTLDu3AkUePTuBWyu4eq9WsvojToxiFJtZCRCms5vhrs",
  "key15": "2xgtDWVL7J64Mj9G27n461Q7kCunyEDtuphyFz3jphkQHtT8FwfAXtdMFmXbfupy66EdUGcSZiQPBzg6Mh3kbKng",
  "key16": "4eM5zCL6ywCcgz39K3RUzX3hEYLxEPu8oxxfy1Mp8TU2DtHvacvc3Fm7yvQGWVvAKPKejfRM2Fw3PybN8kLsMNZj",
  "key17": "4GH5SqwmM7Ki5Wwctz7eeA6d3iTAj5xnRX87kSwWVSL2U6tYJZWEEAyHqexiLZGkyBZWShJefDAUA6Ynwz6TtjYB",
  "key18": "5xtCL2uU7Skoe7NEweKKaunyvP32LCzMmKpnPTKaCZQxYrKSvcqZUpiHHQUDtSbduWqh66Nmbi4s13yHzAvCVTHB",
  "key19": "9Wb6YypFTidgTMDjEwb9g4Y1ZfJwNZx3LTQC2FyvvUPqSP9r2qnLwnqcqb47oUokaFrBU1Zm8yJA9PLqegdXn8c",
  "key20": "4AoD32mneaZeKbRh423ddLMf1RUmUMk9sFcnUGywq9XWfSMvRJbnPTSLoHtbNJD5zMBdWeKqDHCye8LbYJxzyjDe",
  "key21": "5F3xVbutnXf9miQJBo7WLyYi1rarRrngTbPPU6vghBfzyYdS6aAGbA6eztYopXHM1QFZPagPdGDkX9QXKoFJcZrx",
  "key22": "5yYqEwKbpPMkZN5fPEJSXSf7LyLVLSVMp7UjAtuZRUrDePFsfZvnytG5eeqEHBEKdUY4tDPviGW7BTAJUtRtgELQ",
  "key23": "42wVyVxBSaGFrLPueozqu1kpA7A3NEtw4r1Pb5CB5jg6o2iQJ2oNHXAjxcS1hwhMPNbcCgQKZ5p18QBbXA1H2xeX",
  "key24": "5GbaxxhqPpyxKpHFon1af4UryjNKAGDEQChJkLvJDWyG2fYJGUgfur7idxRHy8o1vXpvJD5YstqcK4dmb1stc53C",
  "key25": "3f6tFJvXCDUqboEiezmGjhwRmt9SCDEyZzcKVHQuZEXahvBiDU9yBHWy1T35avZ4PgGSHgrhMBKptG5jxvKkx7or",
  "key26": "29apbHk5UZoppqsez8VjyHAzrvoG2LXoY1FywNphwVKmHXK89vSkY39ZnPTFytqHoWc1pX6CQwPQ9ohtAVmdwYES",
  "key27": "2tTuQVqdhfP4Bv2tCPB7GEuCmWaFNeFLDJY1P37gMZjVUkc4dd7KMxHPHQ23dNmx4WoNwh6mjiZRVF14bjSHge22",
  "key28": "3WmKTLyk7hzq7xRTGcZLMUecRtE54iZhgYa4EQq8rTEbAFBifZqG12e25YJ5xnz4s9Zz5yiD3WxWvokA2K9Yn7qv",
  "key29": "5X9Tv8hAsqZTLMoX3qY17P7edByszEbDhooYY8s91FW3frcVrgKNv1KMpvsqvv8EX2LTq34mKtxttDMGUXJgwLw9",
  "key30": "2mKY3bX3hzrE9cU1xuC7AeJoQAzBtsffiUfYMSeDR3AtfA1ozotC5ufy1FiLGQ36NPuwSUqMnUvY9d1gtaSZvPsm",
  "key31": "3xuPXcbpEfbGNpqz6fWZTD878ATL9C2L9oLtEoaSA8EMp9evHzuQKhbG2fNrT1eKBaPdvnNaBv76A1X4mpWBoG7q",
  "key32": "5DEJixgjVNGSFsVe9guqC3i7uEy7Upt7hDGNtn7soqQEjodEEaHrbpQvGE3ZTTDUx3A3Yahn9QU8kSpamvxVRhHe",
  "key33": "3st1SLSiDuTeD5vRjVA3tHTnG3XXK8nxEwBS3SBeanQNTaCB3BsJFopWeQcyPUhSVqwoEM3UrfRM6zuZLX6ekzCR",
  "key34": "2tjsndyit1AEMMU3kS1CcbfNGjUrNVKfAMDyPMXHC4vRbNaq1C91Xb4FSV6UwAPizk38UzRCoFDHVzbFKCUDBZyH",
  "key35": "2zvB9svuTNjBrfCZQDqq5EbXfCBXq898G259JQocLycNnRYED6yieQz53CztASDPYJAgRkcojmZYALyjJRSVFZWG",
  "key36": "2mrMQcCN9gS9tzDG57VZSyQayfWf693DdAXmy6UdubhipnM7MX5oNcZhwrRuSN7rvFdwebvyhYsmuADrHJAJp5xq",
  "key37": "5YZ3393qDLdZNeVXJtdkpUvxgMQUdYaSjHdUqWbfxXW1FzbQnToMNksbnyWUgmkFLmYcfYZZw8XamZDp49Kzfw6o",
  "key38": "DvjsduN7PRsSffmZJzh91wDJVwcDPx7kTAYgp1bE1spMpgmckzvFxjwkBfmg6E3gWvURgVrV78N1THHXvCt9gXL"
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
