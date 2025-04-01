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
    "3zxyzEAYYfXzSMAKD3H7ip42M1ZVa6atrvhcY8e8kPmSeuhNxpKa52vkNN5UFdmDS1LPxfYFXtvGhnE2u3pPTBDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pGYYYzriRWuR9bgie7wyGyWjDDYaaU1qfK1DbnsVpXLnkf4Q2SA5AAR8jLCtH4UnFi6i2C1ij7J3wk6xV5YmDAv",
  "key1": "ysubrFAu9mpLXcFXL2WqVShpyV8FPvzn8iYHMNoqUxFRxF9Gp3CXEfbeJA8nPYFPBPPt2QQ97nifWtoWkRQ5d7f",
  "key2": "28iuqziR5tExudiRAJFZgBMXFWv9iKaNwJrko1bBXNhKCjjfRuD93i8tNUfX8uoetHYeUZDKhJMptGQtvWjnaoRs",
  "key3": "612xSniWtBwGTcaQNbsBD6ciqpLKAah8No3yuvTSbvwSttzKYyCDxwv749KEBWiESqgE3bTmpGJKzhHvjYHrwcJd",
  "key4": "2ASUYk3FNm3Pt8Y9tTsg1BveiPYKGFM45d8mEp3Pd4LGNkk1xoa7sZTDGXXFmfyRa9ti7mJRxdPCKKbvoZATkoLW",
  "key5": "4uHSxdBXtq13PCbgKxd7r5Cb9apAPZgTonakaWUhL1nLk1z1ABtHBojqyUnJebKGU45GpXUPuswrX8wFAsMSeX5A",
  "key6": "3SqRhGZsUnmDdn3skKAmRAZpP72iJAAoVuwfCjgBVqKNHEGYZKCYAv4DGip9jgSL4gdGQzeLD3wioz8F4BwKRtA5",
  "key7": "NrKjmuQmmvmqk1eJdRyqgYHyzCwYt3sHnGDEo9QqhQ5sHxR1AE6kZduXRpRdoBsG223kyEjnToxoq8cXsBAM5HS",
  "key8": "5s7e5n4jvwEKFF2sKdhTu3YFhB8GHvQAxzTqBPzu1jBiQS7ZmiXUCMd3nr6CC189bPK53BoGPvTAjz4CsRHXJyw2",
  "key9": "5eUXyLDAJCyY9B9PZ3aR9Xs5iaUVzBxGiBYf4mNMxcfF2VCpKps26uM73hLtUq8VjPWhF5hqVkSckd4XGNesve68",
  "key10": "V82PdVuBCTn5MT5AqJL5RyHrezXzsHZFaGd1tr56nK3svo2reCzd1zchjYXuQXrMfBfqcTknnY8Tipc1WXpzKQS",
  "key11": "4TLvSq5MXGxLiUaCKJC7ZAWyWonBtFLi2h2FsbPMrUqoXLAnrfUDzo2FvVAnVVkZs1NEqhYaP2ZHdvMqR6oKxoEq",
  "key12": "HD28DgTJEDseS3bDZePBWZ2ScbxmggAQRvzkzpwK6bFTT1M9yLWDXyWroVNHELLCMNE13iu3aby5tVkSZ55ZTgr",
  "key13": "7nFkzxm6XGzrizcYx9o7cC2aQhAjY1xeX5tAy5tSA5bwJJcM7KuvUKeQaeiR2JUbu9f9jdh7Hdp8g8NZnCQANmz",
  "key14": "R7BML9jPBF4T44eQ5rk8oRjz34Q2z56ShoxMzhRkUctvwyG7534N2o3js3RUGZanxJ9FaLaMMrhybgJ7BhLVtzB",
  "key15": "3SJuMnrFebCMbEzrvsLfwBc5HUuHJ7JnSLQggvP5m1SgHqcD5VigK28oAmdV8pAojiyFWQ8XXBvLUxMXu2sPUig8",
  "key16": "aCHpkNENwQX9rNqjBrxwBwaNQiUZA7p1BUqfQdHrz4wVmUEYqa2TrvnxjQjexoYWtFrgKat4U1FrB3bms2RuJFM",
  "key17": "5oFywq8r9jeAcYGAch8MAJjLc6RvtWmeZvnFUMxmfxeFbxPPAk9ZD8HaUa616qpDfGctQ6bC46M3dCeZF67uHzLf",
  "key18": "3zQB66r6dfGffL1D7m3QZPGFXRxt2GGU3zWWDUFQmFo61B8u6ww6bbZdHjvpCu4NYToPVnHRLsnZWw1Dk9em9u2M",
  "key19": "51HJVa94jRHQzwD4EEDvPDx5s32zxkMUrVaEWHHHvHLfX7aFymYkEfbU272yse2RC6tV4AF7SzRchuxhBrVWeTPB",
  "key20": "2zQKBGtU6Tx1rTtY1SL1gL2YYBN56Uz9Rk3SYY8sErHr8wRTtSSx6mpYSEJZYdAKtpzoHUKNvWMNhwh9KL5chWn8",
  "key21": "RRXQ1seq4NaSkA6dKKNg4PgAJKRRUoVYb2VMF9WYWrtqoDUtsTLorHVgnEZVJpNAkgyGHJeTK3cNPUN16qtRT42",
  "key22": "2DuRxvAD8KZjxg69fgf8vzs1aaNSuxvbBee2mXarxf1ijH5EXfjKzQoAoQoC7WbAf6NTkYjmxnLoHWaf77FQmeBx",
  "key23": "47mjGC6HiGR6swtZTivRYboW71KTqy9poq4jCntvSXXDrfptPaMs32P4ujhS2Vobwc9bUiNissZTp6nHp6cSzJ1k",
  "key24": "4XfQK93qWBcXaEGFrHYDZ6X6gxiQ5kmuCP6ZHi2uWDgKJ4nTpxynCLptZfo4sW8bdMpLBuJpZv9zR2uDCRwYSUjo",
  "key25": "3LeTXTWf5rhybK2R7AZdq8aNwiZdDkFpW4dgYNcHTTXRCDP11xPDaeq8ysWNepraNW6BSjctqqmUaabVnHd3oYBM",
  "key26": "bDVfEVepPk3BzHdS67kY3cebfD2KgVnY4k4FBBJshSeeknUfKnFT7ragvrXpbUyHK4oB5jFcMQb1JwELVbzQopN",
  "key27": "3yZhew9Zu9RbagQB8oico9g1yCda4VJepnHkV1oWWrwo2KJjDnUGenZMouamdA6RigH6Z7HqVHpkeK69nhNotVaJ",
  "key28": "3xEztisWkuaMcYhJRm4wq9acs5H6NvoumNaGqUrCqoCperfE7fYdVBGCFU3ebwrbAqDdpoJ1s2ikYskYAo7a6yUy",
  "key29": "4YTc3iPErBkE4kMBMrxbPzpCJXHdaT7FTtu6DZTe33S63axyniS2PxKLVvoiZgE3pN4RV7UzDyfVrc8uzQFXhWwH",
  "key30": "2PLfUVrfqVqAhpGzMoVUMWVatBj3nnUaG2qn6a1iTtjmXfjMuBjJxQLpj7UXFhMJgJyxAkcpk8gsFSN3sXrx2r3P",
  "key31": "4Di4nTiXjpfAHeBuHwcARafHb5JUxQ64CNQjYVMiZeQhzN3XvHCwy3Uzj6jZ38DqhJNiio32oTYJj4mTfipuVwsp",
  "key32": "2ZnbQzqrxCPU6i8wPfhESea7nU1W6BWg8DyEBgBNsVximbUDQcSW2VDQ92Ev3fjGQbgW8SX9jjwd7nY6Gg3EDXeT",
  "key33": "LPK9HaMpXHyPyTKm1nPHHLXk9vB5WATuuoVeiFZtJiR68dcfuaT1oCgock28NshoP5Z1ca76z5NBF13P5Ffe1Tg",
  "key34": "2399hJtuxJB8hbHZtAgGem7t6DBkvfcAuEQbRPPg2tBzcJ8Y2kHqp4N9GHD69urhbdRpPbCQqXL4KCuowqdPPXMY",
  "key35": "3AGmVEhtFv4HjrQZLTNRMY2nrhqzbzwx9rS62oZNq9T8EKTR9sDrR8J1tUmBNd9EmU5mRXdzd29DjAYAveeNys79",
  "key36": "4tUdNndodZJMnbXTeBAzZQjNz7uNaCcgMMcUxKpGKLJyTYEeXvAvVXF7RooEs5Fkynkeu56LrpVMhPfdW7z5aLKL",
  "key37": "S9FRhGRtUiXuHV5u1465D4wwFzBrYKxkGiBCshuvGFAkwkN7BnGCcJopAyQQ621KP743oLvx6an6vUSKYx9xrYp"
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
