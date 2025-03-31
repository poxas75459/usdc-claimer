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
    "3coEdfi3pcXNR6gZDwdMZc8eZqBSuEnxJPzatRYCt4mPMzPqHyvNnMGtsGbGzP9g6BzJ1AmefQgn9bWVC1BQTYH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5ZGcEuVoVDV6TQatuXkFuNcE2AH19U21kNjajXwpZHmMxZ6dBvgUk2h3hH4Qc7RLVJtHLETFgKzf9q8ZFKxRGP",
  "key1": "51FtRBNiuzPWQYj259bgNdQHVqL8jDsXKiwxx7uPjkqVnEjyDyRYA5gc64ndFsdgHBVk3LEveYYXKRxAuf479t1W",
  "key2": "3dPThsPhChZusyBHnR4Mh1QJvZ9ZRTcFYpUa5pwqBBRTfBiDBB628zTp2Kj5dgEQNpvEXyZ523PUUVaFUFZX1gdv",
  "key3": "4hGGumwjJSsyJU85FH97rTND29i3x8bAt9PdM89VsxM2K2E3dS1aDTCmLdd5jsWfcWcuv8p7dMZQab4YYfLYWu7h",
  "key4": "2Z2t6JEoCq5EEQ1bbXoD6aqGFDo6BpRGLmDx4hdWuAyDh21HcAYQUSoRKBVWpF5QmXNwM5Dx7ju81khECQFVh7Yx",
  "key5": "3pTv55Nw1d37gTstGUkza5KH3XJsyyr7RWK5xYggwJoxMnZgDtLCu2a26tNW1Q55wZRXCtGdU7LjvSQts3jXfiEi",
  "key6": "44wtUgZJb7ppaNoxdnjQH3YX9JnRAW3wXESoWgy3uVf7HcCpguGVTiemKygvT72Zh5hrWrswfAiQZeNq86LtG8iD",
  "key7": "47hCDEt2exdSZQZDz3UU5fCMHod21wJCEjkPg5MjPPGbiq5YAV5XJceLZ4geUhJxyrN196zgEvyWbfCPrSncoyLZ",
  "key8": "5oJKnFizuehdQqhNvNiqv5AFHgCWQWhWQ3mA25LRxuw5zY9P2o6aFKedQPmbYEuPzzCatCse7pryMMWQne4p6e7n",
  "key9": "9wmGMvuiQPWJbHwpNvcpqyCKpg6bfwhftia15NnzfbRebRzfShLvxfwtU9tzbVQypR4VCFUHnw2JcBZQqmn8JJU",
  "key10": "2uVW6HptGJbbBXEaQwk382aJJUyNe93QYiQ6Z6pNUkgGC9gp7rXiRX1ktxs8TKcEagBb7ZuQeKsnufV3d1NNUKPn",
  "key11": "4735KEtNdQTkJzz3QfXKtEWpgCo86TsahHaMC1tkRdf7kVyEGnLLFVEAxc3g74sWLLPoVfB2Zv9dJJAh7DsZQjSF",
  "key12": "4uSfFMAULxJ8GR1umBrbENwpziXk93gZeT5LGrJZVhwKkuLMFYXFpLEEDYzgRJHybsMBo711LzokcwgG9ZADVj4x",
  "key13": "XCQEqvdpEeMY9F3UYLCafF3q9FSqtzbXumW77nEQsSGzaL2AjWY1UcnBiXJF2ogvhoMKHoCSiTSBwqGSJ7A9Q6Z",
  "key14": "8HGU8hRRAMvfXRTD6XtJ5pYaWTWcmpu9NLKHrgK1ABdENYoRzKuXNvCN4fFnhvAM3YdrBYLqEhLLahhJUA65Yet",
  "key15": "3z8kKQnH896oDKfNej4iNwLmgw45uTUk1nsvrWJRA4rS59XUSFuknQZ8o5Laq921eyxJue6D2v1uv3VzrajkYnhz",
  "key16": "48byYfDpA1MCCS4ArAwiNeMWi9DLQ39sbbzFpuR9cTDhCXzeKraUturSshQrCgKqpgbER1KZ2ekNxnxnAurqZVUV",
  "key17": "5oqjusWy6FbKEAYk51XhcTa9kUHwf6g8a8uxhmXNLdmm7xFBDH4apMshn7txwsfMmKPrSZ8pKNvLDocBYohymQYR",
  "key18": "5xgQG49dhTEg1SgQxFGGurMT3xRFrEHgsqXcA1GJNLtJD9PSuJDo29LHfwpzQhskWDpTmWr3TnK2wB4CvCuSQQWH",
  "key19": "9LLGHvx6XG79C6xacvGmL6pHmH6tKvNWTECUHaJivWHMmxkr6ZGo3bE96CRj5VVCtkz8JFf3Sy1Mns7N8JhAzDU",
  "key20": "4eaVp4YosBB3aiZ7pBzXRPUZ7ExuJqB9bSMczMajoGwgaikR9aSFc1cvbFYHntJUvDEfFTYgdWzjig6NfJ4Kyrk6",
  "key21": "5dm4ZeSEjtQb3eL5T2M1JbpQAv84YJCFKsfPJk649jm9qkTEbsAHrZYeLyMTXvj4pp6QoyfVtD3mmtPXqet4VTuz",
  "key22": "22kZEKqCkVb77uFdfJGwhqgxfL4w4xtrTp3ugquw3GdXrQ9XdhjJYkmJ6k5e8yLVGRBijEWELuoxtJK6xU4oLsYs",
  "key23": "5YZfCgeYr1hMEJhU9j94nTLARQ5NhzYCyJXRSe5ihRVisnXxVLSp1aMxfj7uoeNbKRthvW2AQgfH3TSnudxKQifs",
  "key24": "2SgJXcmJystS1Tr5q9Zf8eUqUh4MhjUUYd9mys4jbxUZiV4WacoP3TH73pKEh83Cj9oVtjW2RnGE1cZTjx6Zkqc7",
  "key25": "5brKdrzK8WnKJHvZZcBSHD8D4KtcJ9b19Mn2NVdVFGM75TKKExNanMxRWeTi3eqW2cpYcUYLx6KnQ14EFC4LesDv",
  "key26": "57CrQijgds8wiiyd6wnZxdLF5o543d7cSUVe33WJngJuWJ9JPcsE3GEXgjpSmLZtU7LJcBxMwJt3KUHnfq6MAbZ2",
  "key27": "3x9n1FwBkph14Lxqq6m8gJ1hAfNtMnZz9yugzbDPa8RPCPgFCyLtTJPHW9ojs4PHtJWq418gPchron94gxFueWQ1",
  "key28": "54HRAZDthTdnhUGXFtGUZ4FjH6UrAUzMTBpPd6QfgBSMZ2vA1LDGnecn6jKigxyLboEwPeynyy53GXQjp2AyB8si",
  "key29": "5ovAL3TNyyQMJkjrsr6HRTimGbnHgfVPVTWuzHuwY1sxPpXz9xNWMeCQWmHhAyUiCiDEgvJVfPheztu35TGjVMhs",
  "key30": "5ikWxH3fSRgU3iy2qxd6VtwsTQDFaV3on5BJ9NF3WD16bVsNz1Aqt7eMwWVsD1HnCaY3Rdyq7WaYCQ4aQGQNz2gi",
  "key31": "2xJiWyymSoJLwdW7QbQP2Lc4iB7Yd9KdYcanscJzryfAx1SUNw2pAvGkGe4KeTRHBrwYCvxAUd1moWkf9CUs9TE7",
  "key32": "4FfsNjbEwhDaBNjQmQZY4WheFojxYrBGLt8Szj6CKX9tAV3WcVbzSyJHC9dj7pBDEPZ5wz6jJcJ1Xct3QLB7SEKo",
  "key33": "PXkCFSDXfavBeV9MqT5YqanM52NrxeLLsqXds8jRgxzeNa2i83di27VxrzLzKRZj69UznizNKWdiuv2L4kuYVXc",
  "key34": "2Z3TvfSbcGisbSrayDwEh3Ex2tmamnyCqSgguMncM35CqcVj5mNnyrstrVpByTcny75bb9JvVheKVAoEZLGAZWND",
  "key35": "33gerpE6pjYfxT3xL4J6ywMJNhtqR2R7cEPkexcVsyLNYEzsbZuuV6RqbB6dEmj3Nwn7TGQuHZM5TzqJFWjk787X",
  "key36": "2FjSihgSA6wTV7QZ2mcqeeiQA1DeWMfReDu5nqXZHd44K196L9LfKTenNV88da5CN4wwjSDr77dbgGPpz4bUP2Kr"
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
