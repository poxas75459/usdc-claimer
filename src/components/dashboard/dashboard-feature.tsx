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
    "58y9Pa4Dmk5VLy8tiuYvoDnaAgDCHQqmP123eqixhiz5QQTnwNSZsSHMtGEMZoJDBE5f42tMHVbJbgbMfxXfFbBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z6Gvt6uQ6voqwBVoA3DiKMvzYfZkf5qXmuz9BfeQTHAcJ9GP4WDcM1t6N4viAVNcAVN57Uy9QQ2MaUUpbF5831y",
  "key1": "g5Vgto2SdqrbqdaRBbZUf9ydKsavx1m52rub1ncNoHfkjn5kogyrKJxuocydEAwPs2tRofnALP5uXhpJMLQC8Mb",
  "key2": "3YqscJxjUYEsNmssf4j97W1cWREYywjQ6BALEK4ANFq2WLXc3ARpPyBEQ1zbQE7fBobmjsyd4GFQJgUbJdPjqC8G",
  "key3": "2dAkUaxXa9tHZtAY2JNZRXXLKD39czJNt1o3kHiue91Chm9jaBRt6eWcrmMzXQPP8yZ3DAx2zEXDsxsQEjQitGUo",
  "key4": "34pF4ZZFoeWY6zUYjZpxeWyZVNtdCcePHdsbxrCK6CRHcmWbw7UQFotic7RnmbcPjBiPWm7hHJ42oPLpxKyrCAq1",
  "key5": "4jcAWzcJ8W8EbE4WHfZGBexaNJVnAk884er3uW7wRn6vH2WUvzac1b3zfyKwa5cwtYDM1v59313x7pNHLxLMB3wB",
  "key6": "RuWaFqKJabSjZM4HSjsbkYKMR8Z519QXRmP3pMhgjayLz9ER9oauzRQvbLXMsrS76ucuo34ucSME7CJhp71vQoH",
  "key7": "5dA8KD5HKffxu5qBjRyu9HuMxrwHt82Y7herUyzZk16i5FHF1Fkgn1xvhSHSbTKfUBjYnBXuqAKM9yujVTHT4izW",
  "key8": "3Y1gbwRqU2JaV1PEWktAQEnczgBALUiTGUZJVKovKfVqUCmeedY6ZF5dGgV93jNmp75B4dm8GbEM6HyesUYgiF1x",
  "key9": "47kxDDJRCv3hTYP9RpQCxGcHTK8BGQQcMt6uScRxub2G8qbarizAFEshme1w4NPa7boJvgRMjHRC87RN4K6JT9jH",
  "key10": "MaiC4ZdLr95QiTPy8f2fXCBEkUKgFXFQosso8txFmbVzXPU4jSz7R7tCKjUjf16w1S4H8w5qoMv8c8WC3PuzRvf",
  "key11": "288yFKYdAGZQE1ADDBLKMDRHMk29m2iQ5o4KJJ3m7MeNPWD4WDQHzEDJTsqU5nHUA3ivrPrwXRTVuoByFyycV5aD",
  "key12": "2HgkL8uukiXTDDrzXX8p4BERMaoHrt6QqSZfz15MNonHEQFxh8M5qkBBW49vZC1dSpe3ktN4AaL1fNd2k7Piy2VH",
  "key13": "3voLNYNGUNyn49A2U2LdwmLBXQgPWUhWygT3YmVphTeGWMdrTPejV7L76U5CPwas35TVbM9n1X9fddEywTVzqgpd",
  "key14": "KoqwTVVcAVqLaqfcyvHQNs6hxrc7uW26BFz8qkucVdYiRoknhc36QQQ1dQiyroN4RXvv7wKrESGVdwPANDNQNvV",
  "key15": "4kpcZZsaX2vYc9BPxJwmp23fUbGdnpM3cDqi9hLzjxK3tm8hr6nuxiuC58hhRmw8zC7K5yzKLRFTYgWxw1kEhziE",
  "key16": "4xv8EZWwTrBybFXbiT7CVHzqVweCTE76McWauGu438JJYixh8Um5oJ5KhemeEe2QgA6ruSHHxdMF1BmAnbxWGwLe",
  "key17": "3sqKWqeyufGzSL2tkB42GcSyUSeQ3vpXzuJdyApVa4YptdY6JFHB1CpsiyugZSRZ3hFRrxuyheR7psR6bprmAxbv",
  "key18": "4i78K757ozAmYDaxX4XCyQkoPnFEt3zZt48c1ATVdHGmUMzG4xNh6R5T9sXe1i5EukiMPchUBu5XSxkxNuj12A3r",
  "key19": "61AJKiSNJBPV7u5572ovUTh1shQ3REkL2XxFBWopAKNUqQSeohWWkkR6dYbnaPRypjcAYziC8SEDPf5BfPsixKKC",
  "key20": "2N93b98Be4bjakd9WEkmXzT9UJ8dyRxH2qkJGHGaPqQadpBX39HeE2Z8sGTvGLHzE9cMoeJ3xWtq4XykcNe4yjnE",
  "key21": "3AphG3SLQpwaP8GzH6YoWaYGr963UKA3G2PVNEaQEFKxP8e7xUAsN3zhAYMmcJzkEifoEFvagiHVLTy4SUQRdUoq",
  "key22": "4f6FscYfQaV2xmtixeFSnFLQoQTW9SnNJs1T6nt1HgiyqFr9YLPDfWwNRi4uSeNPBiAiDbeubBAN6qDSrUgToME8",
  "key23": "5PcEyNzkK9wkJ42gQY9fSGrz7dFqjVSMBMsZ1QLPpXTSS2jJT3CunjCzRqMqAvVdATmb4RV8CUvCT4m429WffmN3",
  "key24": "51pipvnWWNNZ9vqcPhwPxrZbmfEddRZzxtsfrCkdLZ654xqT8qr3U9njrgTgQ8A9VM4op435tubf1Ydab6k1Ty49",
  "key25": "gHWaVhdPqVR57tBWt9Kt3LQbHa4qvbfiZT1Uw2rmjg121hwtaBwPTNDRHpsMubNyYuejyAMFYyxeyCetrzJDmkF",
  "key26": "gGKsstx7L8qzkLLdit2ioyg21PtpFuW5kVHrwyuPJHcvnK4AsM1GTRV2B6hT2sTWu6vPX3ZspEjYavhs56BgwPG",
  "key27": "4PXY18qYMnzh5wKcKmn3nzmrTUS5BgBBxjPk2QJLPaFsSfbbb8QrqNDcPPDEkBhCsvVPrXs4Cb2Xey9VJMnF2Fa1",
  "key28": "2hqZmZVqfSQxQEqhEpS6TjLa6dakx4Zery8Ch2XKhAEoR3XaA5M3TvhkDwx56cgrhscX2T8YKWD1atEspVLwL97b",
  "key29": "24HPwLKdFZKCSsJwx5qD3rY9mA5UprsaY86mbyURLSN1avhizjrGrUyLnnceKtFf3cJhv95jtqsaNdoVGdyZyNbA",
  "key30": "koy6o1wCYm8f8CDfA8b6o4vi93Q1rTS98i1dtjS8JS96NbrS1NEzCVDyzRs5qiDgtnq3zEfadPsCXMh4n8rD3Kp"
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
