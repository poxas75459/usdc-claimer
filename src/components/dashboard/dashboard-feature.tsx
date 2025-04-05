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
    "2wwoQcZLw6ftPdw7WLzx3imEtbHDZF9cnA7tzg8A3BkkcrnUud3M5fKw2oHr7GPDAp86UcAD8B29SKycyaVVsKVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uCba274rnfNdDNDJtjszcvzVr7XucBQc6EqqZVAM13br97yQiW3xTYf5NdQCXwMeE5oXZK4Qt8e81zJdu24tpwC",
  "key1": "2hHMm37J9pq5ZVyXG9bZ4d5wbY5Vdr4KUk4R3Fzdk4sYcwzSrZXouxNT7DfVVYLhkbMBHJQH1X7oCmhuiExV9srD",
  "key2": "3djXfCpcJ8oW4qpDeuu2dcpQyAJHqjmLjhEDx2RLT8RgF4B9wCBjHpJZ3S3UXnm27W3VdH6Ti9yuCoGRN9Z7qxH2",
  "key3": "2erhEXJyW6FJqzMfUtMcEQtP7tfczXWqPUd4pjxdQoXPr6ogtVJr7DLiejB5MWv9h1i8JsBQguJDXRL5Fk92AKw8",
  "key4": "4xyReVC5Zhs8GyHXRc5SEs76LNnYxVN8k6gaQHVmgvB5QochyQoTYTXGuihTUuJ6TCkHdmRN9izCyC3vecKyaW4M",
  "key5": "e1VuH6P4qY2iS9acTtuAwxE4haWS1ToG4K5pBkZ9yozR29gjGaUKdizmJ3iikUUGDTSBwvDS2g4YFgfCDwBtXUW",
  "key6": "3J6EqXzDmHCGjYwnLsJKkqJufuxoZtzVQ37aJY5yjTTfJBnTHt6LyxgqjoC4McZ5PKd48ankXphXaEtXA7TxdrHd",
  "key7": "4FgEbcUUw4qNtUv52hLwqPxdqFk7sEEUumhRfcsVTok7dn8rzHBjz3TDsUEXSHcCdTERCDJiFB7xZY3Dfo4GqcGm",
  "key8": "EbwAkK3g1NJZ98CbyfuDzzQijMseSSwwQk9HNKDxBcV3NzzoWwRCSX9jGHojVRa1h1kbgZ1Dxa8ZBVGPDXdFu1o",
  "key9": "2iniXyDsizFn4B1boioJtz35n9rmECTurZvb7tWCwVn6zpabSziosifgLEKX47d52qvWb9ekEXWZ9E2JCFKfgpCx",
  "key10": "5iJZNVeWbYvJRpDet3wnJWjiFJkg3B8rT1ceNrAuUPsJMdoWA3QHJMeMpbCFDqZQfcKRLhhoenicoMGJQPCNS1Nw",
  "key11": "4VQkayJsHQTTWLvd8MT9yvBD7PcEmjkxHxxLxjRYryLgxQp7wUGQgPHTTVTabtktzPPTuvWtLpFwDURqTR4mfy8",
  "key12": "2RsPFCMpJveS6YmRpanGPWUA8d1HbLmcKV5FBHC2ceZBU9SqQMA8vn6fPDxHCNDv8oDCXUUTE9wsGtDohLh6o579",
  "key13": "2PSZFgMVqq3SuWwHFhzYQrt6VxqQgkijWrurs1grbWZu13Jice2eNVYU3BVS37s17sZeofzabpcRKj2jvP64KxKy",
  "key14": "4frWMX6JJvHBQKtEyJXJju5jQ8LqnsfbkoUxwB6xQaARFpf8noDd2KP4ptDU71MXwTZsbAh1rfpB8g11dC7UJXoo",
  "key15": "dRyHb88ca3wu2c8SBpQuMAJ7rCvBLHKTxwseo6FkSzA5tHXbg57EXjxXKAz1dt3dnDrZ2nZDFEt8WS4EDSe6LRi",
  "key16": "2nrZDYYaFwYiPQBLVTRrgeSkX3LvLtp25BdKFFFEuKPqNzVLXnTLeNhFpCmt7Mu7kakqn7vqDGdDBqeb9BQhjwjr",
  "key17": "5DjscafZeXzC1iPPPXkwaacC8oPTjNc3HiKeWRW5MHD21t2J9npqQRJErCYw4mnkjFSGVJ2aGDxJGhL1LTC83Azo",
  "key18": "S9p5VaMBqD3gND99BxJ87XMrM2TxowAgrm1tuQNRrR9j7yos7hiDgnfYZkUCqySmvnt5WfQi8T9CYPWLR3xrr8N",
  "key19": "64VZ9sTo9a21DXtxRNmtxxeapryTYbjbZM9DfmHytirM3cy7dRy4pZSmNykm5GLiMo1wRT6RXpeczp3o95aYoTRj",
  "key20": "3vGgn25TXerbj17GVUUpaierC6q1hQBSZYK9k4wNtAu6tt1zrwDFhd2mhCnXhLxhorhjfbfsrgxAyXf3GcNa42LR",
  "key21": "JE3j3D3pzE8bdVWQ2F9NBzDmsmYPG8tbh6tU5DLDwPyetxmXciLnPFvdcjRB7VjotWzaWuLzDRuApEeDRZTyRFw",
  "key22": "3edd7ociiEAYiG9x4MjvQcQte3nqupLaZEQeMGZMtD8TS1WhAGCDunBtUxCwu5wXXmPiRcFDUU6dxPsQpfqK3Lgd",
  "key23": "2EScTCq6PmYMfBvMp1uSRKWPsf8mZ5bZEA9U3vBkN2tX9a9SETNKzwdNJV1cKNhxt15miEWRVNXjsZgR2Tkd6DE9",
  "key24": "3eGNdncpHLoTvaRnRkDovwqMTxQoYjftAzMhYZUNA9bS2j4RKvUb7uY4E21hN6StGV8YV994hN5ySSNf4FCBgFpG",
  "key25": "2ZFM6meA9djvQ8rG4TZdRo4WvSuyURcQJmnRthysnRQuM1XTqgNhWCpNzebma4dYPCKo1yevTkL3Ye4QRUrN1EJn",
  "key26": "5E8hC4AJ4F2d7QhW9UsNXA937cXS2RNCMBsUXcSKKgEZnsEh8tjNHbsWw7kwTsrJT91hmKPSD31fJxYK8PNtsVWc",
  "key27": "25LhzdFhRZmiu58hTBqEfUb4w76gVKt62eAJXgR9ZcTsvoa9jYMjs68W2RLhCxghNWMrKJvY2u843xBc7gL2mS5o",
  "key28": "5yP2VtJEsjMtbeZHnoLLjujprf7DjwGyfb9yoPgNgnQngwAbVkiq268CkzzHXPxRuk4eDn2Pzu86gCUrp62N36vU",
  "key29": "5nsGY5BrFK4jhvzDP7QPYL7tK4Jdyf8bwUwUVnQb97eYqQpccWyP8tCouKnxY1GnbT5YxtsQb4V3NmCxP4d6T5dt",
  "key30": "u64hcBSTE2sfyB77pZ7mboLtvzhPS1UM8iYKE45mYBd9hA76zDdKCfUZuPR1VMbYA1VKRxy7hq2EER4F8Jk2e8n",
  "key31": "eCqg1HfsHGNbF2CpnnezVsLCvyZrLgjMZkMd6wtDDMsMQ2mBzNDtHTo8PAzHnv3qmWFig5fKjfKHWbQ52FgFn7Z",
  "key32": "qoiHcc7nSuf4QGHCC63NpofxeRxMSjJZdc3ZhgGC8EUrJ1kSDVAAxWXh6sCQhnT3ELXx2ZsdjoVqgRxdSg7jPCT",
  "key33": "5h9uwchBYR7TmCGHKfTAdukBh4xWvJtoHKsTXSjMZ2dS1aSR8kJxDqJx9GZbkBC6aisNsbxosTDkY3ho6ACz4VL",
  "key34": "44p4EHTjpN3eykyRXaXoboH2MuMtCKDUYHC9VwDgouwAjbyff71azkNVXRvbLRDPB9siLHGYgSJLRyeqoTfn2DS",
  "key35": "frFCtKeDGW5W6YLAYF48DbgLXNSESC99thJFEDiuVeLbsDSVBZpzYGofF3XYmveU6GvP76ZbHN6DQBW3Rr2j28T",
  "key36": "3tF2L67SJQCYKotJ7UrWnWvKDRkv1JEUC8rHFk28hwYQuBzr28nUj7XJHt8cTuSFgvmVitctF41jf4SsJZNYxxa4",
  "key37": "3q6d7uPUeqVBbavtGSfau9FHFeGcbic5rSB3TBqKQp8FjyXgQDDBhcD7Nu6pPxWqBJBaQaRX3nRBv4LyGHhWSPn1",
  "key38": "3fJqwWWN6V9HVDxw3kCWdcrwVESfxqmypVAW9z52GhuYddxFSuLcvcYY9N4WKhpSoBhpyzba1wUgsHJYD6nveB5e",
  "key39": "5LqSbZnZLfPvPTPB3rPdbUmwzpfDV4mpVvH5ppKFvbJACsQyCrp25gjuuFLCmjztHepTp7jtr67cCVENh2Hppq4w"
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
