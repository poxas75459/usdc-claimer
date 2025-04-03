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
    "2EGdh8NRRWrF4TKR4d8bW4gpYLJJuz6i2E1YijxRBrsu39BKChJ6amVj7JEt6bfMGJpj5v3e7E8Stu56RByiJBXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3TVRq56sbGVDZPCpaKMmoGJhxapSrbWHnLpAo4CfYU89LuQKtWm732HEKZ5v7ZS8yuhS8j9DcZ372ixBr7cFtm",
  "key1": "3788hSjSbhaZvjzRvVaX1zTxVsigxCkiiNgGnZwX1ZeznRJs6G4BT5dgqgcELFPaPtNj6e7H6UA8Pvsm2wudTUZt",
  "key2": "aP2DJSidJh1jfoipDS2izEL9Pk5Lhj8GhNdscdenBpWTBZcGtowr1yS4mT2ShvK6UEhsX8hEhSBNMJ4pGw3s6Po",
  "key3": "5yjUevosDAGe9XwWqQKqtbhBEUWZqL1MjVV3piQaArQEFufmiQ3s3LzufBR3xK9w85zdX3G4yo9SKkz6MkFtKvg4",
  "key4": "417ybnRfF23qedAb4DYHuv4DY9RbXr1Z6WrR2dycseRfCMTRzwStXyJ5A32bjccZoLkQgWdDoAfxeGQsp2kZm96s",
  "key5": "x8LQAFAQcAYkHmP5SRJjYppBgPCo6dbcLpbUXeGqmdMoLX9JAYTWDB5kNVGfg1wLjfez99c5hiZr5K2ez1niUBz",
  "key6": "4rLbjay38VsisDVRUJEQMUinEvEQGYWCtVpYJEXrN9VrKPeMFyoUEtuTR8sJP4D8k7LCLtNhyXmp3SweyhPrBag9",
  "key7": "4daa5ZcRepg1Z9PqKZ1V8YZS5BCBFXdW4KYtpZG5bGE7cM6BpwyBsSb53J2k7ytb3XbzWkGqHJajsRwt9PzPX5Di",
  "key8": "2HxHnfS91dgMCCFYiFUXqsEXaUBBGgEgSDtQ16ZcYyAQN4J97SJFmgX4YyJw2gnLRfK5FbUYGzmwi1W7wn7Lr6V7",
  "key9": "5uPwgHoaa8oAFEE166nUW4MKVZh2qzHKo7iD5KEZDg5vhVE1oazqgwYsH8vLBvA477ogiTHvi24Hic32GSB7xbRv",
  "key10": "5RPzy4dqxVPtXfBFJbPWEebCbBtmPAvJohHJSBG9NXaSDN6N5qT66yLJaDtEbX5f6wvsY13fjmk5xPSkumWqzftU",
  "key11": "2CmjtguvwoDw7FcJ2piVXS6NYRc7arfr9zvPBWmFMGoK34okwnk66RVBMKC5Svck7vmha1qoRgd8tJS8bKdTkDXV",
  "key12": "3PnqgLgZU6SrKtTNtFsFNXrVtw5JoNcQ9QJ5VqdKah9yuA7GvsBtg7XeazAJrZN6usHaXLHPftLZ3LhjngYc2Gdd",
  "key13": "3NPQYfygvzys5r3W6RifM5EuW1jKx4HC73ettFMXJ7AwhgBntivnXnTNcKWGEiXF3ZRSuELFpy5yc5vsB8uD43uc",
  "key14": "5D18qM5HaX64J9yunAnig5z99TumnVLMBR5GJXf6iDD4hfX5NsmTBt91Pt4dWjqRREmKLzQ3euCxaK1mH5MpX1SY",
  "key15": "oC1Wav6rjcEJupXNttv3dYN4hVepzLENfpcmf8LmN97yTqaYys8HJu6BAvU6p4HPJdRnimuBZYD4hj1SfAt6Mje",
  "key16": "2JjBy3VHsVN4phzQ7nBZejxzjiyJ2tetBuyaghuPKAX1GJSx56gCcpC8sFdS3nfw2RB5Mzexv8N2dWunzP7H6fBQ",
  "key17": "58X4eLCbJ4uMgoskDbGu6XajGrxamwW3q8SwhwnGqZsoYp4zHh5HfLGXL1DDBW3f21Zm6WngqCQAQjWmUDh61g9z",
  "key18": "51jMzmDboJSQFtHcre7HdT1xR2ECAHXKxjXSE2bzvbVsc4TA45XsxcsHkiNdAtANyu8rQvFkDMNwpYegAVSrJcea",
  "key19": "4qHSKYZsWhda4TRUdWbv8V7PUSHQhMnD1DAmtbhrut6XYJ1AJRvkCBEsYVfKAS1Tru2n3gNeFisNTF3doa5RdGbK",
  "key20": "3g4DU2yyVzaZmS7CATgWmdbCHGX2LEa6wL29qGLUH5SbzXACb8n3Dyj3xmXgQP4iHZiAPzQsJeUZBPzTbbR5MURd",
  "key21": "4VXsvUDyTpwNYD6qNCpkYWFDYtSQxnbvFnTEEU6BW9GHrvvvg6wkbwvipD2y3XMqUeeeymbYg9VtjC8eHgZYXVLw",
  "key22": "3Kfj3wjCAbTN1dVN1iHNrnXSp3WBRn1nxncYXWfHFUECuqENQSiTHoSd2H4ZPgVYYCCzREhpdymVLeXEzFoadCrJ",
  "key23": "5iQPKZH4mHLuo4KAxRpTciqKGtUkH8pX8BsuxX6DZgiugZHQBmpCRaPkrgWJ6fKGe16wydoKXsManvqzCnxCDXFb",
  "key24": "2QSpPZzwDBKj66CFAk2f9NMDTnT4JdYr9GAij7tbWHzJRADCLcKNmuFFsk2bpsmT21jxiRC3ziC3gkRMQhSyw6jM",
  "key25": "4G4eFRAgMzAWWVT1XirWN6iZR4hWcgkrsAeT3XdoVqxmBxPxRTzyRzhd7wzTKQYRVsbPgbL8if8YFRQHQQUfpLdj",
  "key26": "5ZvNKzGsmzmino5SRapVPDSrHhhABZbD15ErxRyirWEFiEhTaouXhpipGyrfCLS2WXD4QMP1JPB1ASLyjJcdyWQW",
  "key27": "3rBUtZpHiE2AeTh9mZnUPzk9W8guQu6XHsnUipE6n8qKAwEH5mfdBWWdCyKLgtuudPGsuLC3U7qjGzWWRiGZZ2zc",
  "key28": "3rqD7KZkMuLMcajykLLtXYFi3PB17d24Q9BB1Wp51hk1ng4qg3ZC8dCPQnKvFiSasdPLtmzc6ANWwjmTQ7KgZ3Hb",
  "key29": "2xbRT8Aai21YX2RZMoYtPeVBSicDXDASPb8y1ASV7NMpB3xwc2W1xJmbAqeq6cRFa9ikJry1nbg3ftgm8o5ZkvP1",
  "key30": "3Fr5eGP66W9L3h76pmXd1m4iPk6nZ74GWkZj2PwnPv8re3WjUwdjLiN9H2PxMqvGnzq1fV441FmiG9jGKg44PKfS",
  "key31": "23ufZFg9ZFSSHBnWcs4FQFbYmeP5w5t3Tgi7JhcJr2GDtXeUwVjhUnMaVye6huCZNiYKAw6B8umWfvS6ZFk7fme7",
  "key32": "228z2q5BYyfyeHC8EVgjK8B7LNjGXL6toVptUtDkpA9wtxwwB4ceC8bXfwCHeXqVPYBdSrf9xkFxRtLFtbMKUpa8",
  "key33": "4afTLD3Q3unNg3ZTsJNPN7FwT4cRr9DNugFe1nbNq9tRUfVwFBNg2JXJaddjQe45Rv9KWeM4f3dWz8xmkKkMeLUE",
  "key34": "2oaWd5iFjGHm2NB57AgmFW3ejp9V1RPZQdPirraeWbYEQnEgfui3SQ2atbXDMTq6wEEzgECuEhnVB5681aFtvJiu",
  "key35": "3hoGg2fJpao7DNTnhZ34LM84XFeP3WLZULws3XXfJYpRKNb5Sy2mZF746CugZ21SeGyGJwbW9s4v5d3YQhjxpJRm",
  "key36": "4mnUjfALVq3eYWPsPUEixh1QaBhXLeSZz1HkfBLRXCmqpNmcVwAQ3y45GuhJmsiP9tffYKiwDRcST4LbprMuSFsV",
  "key37": "3od6nnkKxhXj7BBpDQQNvw5s4EjssXtug1Sr3g5yWB3ZX5RcUyivq1oiWSz5H474wtjaL5Jr6A7TmyxfXDWZqEKs",
  "key38": "5eC3RtouKipsZmb2o6pouvZkr9BvyJumNAucLZ3LmriY71rQXjn2428vtJobsZf3Rp5UrL8vPvkzgZKks66Z8PU9",
  "key39": "2c3hdomf5A68xpE55kLxVCtgUNfiwZSXrR8smHEWGdUqWmFQuXorMJHoqTHeSA5WrQCfJERWvvxggCECzorFDzKL",
  "key40": "4UexmjWARHc9e2q9iSHNQDhR8yAaKPbm2DzcSr4jGGZ7tYLzo5AnaB325Vt5qRQRK2mgFzEeUWXd9kMnK6sfakRw",
  "key41": "5m7xMkKRxsnhCZ9Lmf68c4uUYknehC2ovSQjGamBMUkkZ7mPapzx1XK6pEHgVb3kTs9gM6xqZAWWGcNVVHyMNU1M"
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
