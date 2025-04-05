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
    "4K9WfCiy4fMxSLLfXogMaVsPuE8iuyrMw4fvSe7HLWFsewUSHYFTDHggB3GmmJvZxCLM8kJvnhkSN2QfPMQGvD9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyseoGaHzygos27tf5E8gvag3gxpiAdXYF1TzLgxKxiiNk4SMpuvmvzRq772CNZFFVHFPQT5u1sRbnFVZNj89mx",
  "key1": "BVpozez5TKnJVfpjoTagNLydZzN5BM6oBSLGPpoWEsgdy1cW5UPV13hSLwjHF37bY4yHFeD4saJAKf5cZkRkLcS",
  "key2": "4sfskBP8fdiTJPToKja4YDyqKLefsUtZCVoLQtdpD8MMfFLbVxJJdbSeQe2HDBGwqL48WpVoyfiwEox4zzYkzXgB",
  "key3": "2w8e6xKQUCdv5pdzMG7bXJEJihgs7A6kaY8UXWnRxA7BLUoTRzBW5x9vs5D5bLCYKskMSRDZjwyJr4vYx36a6uMT",
  "key4": "4MRx7MBFXp8fPQtvoX9uEpXbGxMkFjpGPGYCtR9jHwXCLjrs9q7XbfUUJGk9sCaqApqnqFTDAWvvDLcXjRuVKADv",
  "key5": "KyqiUEnyJvPyNatRRsVZbZK9EvzVBD6nG3JKrt1ix1hj6H6aceeafdUq8yDjNnnFaKnWiKhTG327y6KvYtNqLuA",
  "key6": "97gEmMGyMJR82WqX3YS8zxyJrE1QudzpPBhmuoG89VuedkAy8AFKC5eWZcPQXoszyt9KtXPyzNxGzzcPKTLdjcA",
  "key7": "2kPHz4RFgPBPcFz9no9CAUCom7Wh359PrCVMXHXwThUMdZipntFmrTVDf3vmyocaLbnKMZGL2XYFfhcjTFoXX8fQ",
  "key8": "44jYaEvNAeJDLKjWc9JxnhzfFUpAsNbutCiXqWMR7h14jsbGFWs8auoG8iyu1yDqpUEYbmkHJU9ioWaFKHDQBY4k",
  "key9": "4sjSK7wHhuELVZgmg3p8jTKmcS1wgNG9ZMfGZ62u6211TgfaMHSPf5u2JtDh27QPSFKrXw3gtEczGbo6EsW5Ab49",
  "key10": "3xunSu712nQLoc7ime9D5TxxN6DKBGNPSy7fcdudCJdUMyMxcycjZrJgCV9FTSPJJoB2Nxoxgi6EzTcP1SLL5yJv",
  "key11": "2MebvCCnvnDaZKZGukHaDHgahsUn5ahRFse8FjyXfoGxbsEdbmMapYSRrjouDQtmWaiTWGkzesKVbCnsU9bsn19Z",
  "key12": "hnwvDuCGaytJAjjffa4KqJgiq6VTvwo8xhq656DNJLb3jyu2F6Q9y8vfh6CNoXLUkokL6cVHWQGzL9cyxJG26Sv",
  "key13": "4SVLPLM1K3E331Tez3Vtjar7AiicGCyCNC1SreNnHL5VV7ku8GCjPShd2oDNSbTPRYG1XiRMtKiLDarEbaJgKa83",
  "key14": "4rmpcDfMn5LEAY3mh9nWLLMhDKaTuYHKPSHTD5Ns94P7UFc1SouAv8KYerKnHinm3Y8nLDoaZBwKQAK9aLdwPgQF",
  "key15": "YJCbh9BPHsKJqEpn6M1dZDbq51cCQaqk2SDccHMo4D3fFyBDHj7EW5QtxBmkz4j7yjXrHS9cKmuFRM23nKL2xL4",
  "key16": "3viET9bF23KqwQjwteSTJ6cAvHymC5jzcGxsHmT3djjq5r1oPbUPrZXeethJKpq2Z15zRUR8ShdXfFtjUofLhhyk",
  "key17": "5myfLQqhUi3RSid1GXdfnGTdCtqufcpbh6iHo9TCX9szRdX3c9thbTbKFyh93Wbz46NBven9XYqqvw3rJiaPghrr",
  "key18": "4rViPCbipwx2jrTYc3Dvgin8uXNCEvAe6ie6GCP3NubWPfromBzZ4w2pbbuKvRQEyXLskhaS5iaAKnknYuiP5iki",
  "key19": "3e1hjvZNx3y33EnUHQNa86t1ep5etUXtckwK5Nm2JUY2dtVsryTDxjs4M15o8D4zZRqeci2ULiWvLbpZDeHX65Do",
  "key20": "4GdWLshYEqmX2Yb5g8k1ycwyUo5GxnvZQDk8Yhb3cwj1yL1Xy749cQxm23qnBEeXqUMGrq1GAZYc7q8ek8hr4Yzg",
  "key21": "zKkPMcy5HnTGyvEZZY9cyA2g2a6PVz365zR4qK93oHKmpyyqtYrBNokrSYeRX8XoYbWqPvEAyay4AZ7yZmNARg4",
  "key22": "4AQQhRDSQh3UhwdrrnuDYiqttfSX5S9QNKzDTHDrLXLrJPbKkq4nQ2ocMMVxfMCtvM7nSGYp1q7NUbEVPCBENBN3",
  "key23": "2BjK38qFa9m14Db3oGPDpyvRZ6q1nhugm9woXY6th5w2LASgFKFTYTpkHbdsKUpaZngfsPMzcYWQHLCkn5Hhvkdf",
  "key24": "611C6Vgmbk8Rmt5YXiCbUM7Gk1nyKCEeZgPy6cfAuYyUQgHKWqpuPxietJLrSTbBZ1wCqtVSzyPgvU4UkHTHjWTd",
  "key25": "5LWvAyKdvvYiK1qmmmtNP8UT6pvufnTsRaqqAuzZTG3V818Bx6v8yc7K4myJgTYFzbVDJ6ZiwjsjetEZNTPxRiKP",
  "key26": "49pZitJeRdPNZKezmmbSkoyv1hg4pjnbxPkxRGnHmUs4kZNd1nxZQNB2qnfeEv9r6q4zyb4kpgQ3RW7htyspKHqe",
  "key27": "3UkpR2xv6cxBxfHxojPh69VKKV6jmKiNxduv6pSVQDuC3hoBWwVbDcjAwM6cmQ3enAHk7DrtdCcSqqPZdTnyQMb",
  "key28": "SDEhWKMwzhdhnJp7aBq1zFtydxvwpBQpWP8HAPmgKt7fFbATDwKMPFrnehbYJqgnmMeC4ZDYufkZotNXPFvLiKL",
  "key29": "5NF7dV8hRRhRQL1vUG5v6DVFm73gLd6dr4NMym87P1AQFFxJ6gLk9byy4BDPTTS9b6iZ2x6PFmNZQKKQ7aGMWXdW",
  "key30": "mdvWuAJPaP7fDZ2E5EhnMzJkKZJc1YMxSLgcf7sBuihZjhvEh2SCfVv9AMhxERFM2UPbX4TrgUrSCTArCC2wa3R",
  "key31": "VxFknAq4Ff5TFWRTxK3N8HUgX3YSj4sDnA9fPMEpY4ZB6xuF16hnHvpDtZ5STcSJYbQhAveG1onS4doNBSQCZPm",
  "key32": "28edgc9NquK4gJmt4qbJ2dnJjRaSxxYe78kH9iZLLP7MuErdQvJRXiF6WrcycyUC4i74wGXhVD6CsbvYehT8VPGt",
  "key33": "396Y5wPW9QqBvkogMvmQ9rVyKc7Mxin95FX2DfK4ixLhMP5S3UdMo5EVDXn7wEzvcp7CdAkyFdxnfPi5WiRPwAgZ",
  "key34": "5jBsJ469FEukc3ZabvWQvAFMSGCtLvZRcPio2GwSN9Nz4L6UhMZDpK6YdoyyJ7yaL1eLFgPxXpMyPvFQVZ69MTXV",
  "key35": "5dae8zrHRdEKoUMrsU3uDFAxYF2aYcwbXaqn7LMovHzjNTsfARhyvrrY37sZTXKiHXHJyGz864ipupmMCJbrZvhD",
  "key36": "3smZy8wZCqRsguQdkfr3ZbJyJHWghfskRfqV1hoRphaK2cKmgQ2qr79PSisBCUHQShM41P7HZ1MNJ5echujnWdUc",
  "key37": "5mKtBpKrnqjn76jodKvkY6Fbkay6r2sN2jEHrMmG7EKdWnpjCUT7Pta4qPvDi7FJ9qsiFqRTkKg38kdUYMRZ8E77"
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
