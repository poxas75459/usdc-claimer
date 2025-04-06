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
    "3mre72VtisCDufxTwBYg3vcV5tBMrDHmsu6NZURrRwaWCuE1fdyNX2iMsVoepKb7QiBsnQvXBEvmap65pvoUev6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FXAN4JUzS2qZAP2oMTu6BcVmGDWPjessZStVamLvYRtisPJKKq5qYXRLuPETyyTkZjMg5i4Uh51EuktJeMXWWsL",
  "key1": "4uqG6qoCc6iEw1TaFA8EZQwgKrKLv24heDgv5EaGRVv35hiKN9VjN5ub3wWNiHrkwsYN1U4BbpNVRU9PbqPwz2NV",
  "key2": "3KvMMNFY1VsZgvYcLuTkMtWsdoRqG9HQuyu1wwNr12jQwJha23zkLq71g7wteTzjNKRJwVLZR3VJVYcHAj5aLuo6",
  "key3": "4pEUTNgRFxpCm61t8qecYqyVXbhgSBh1Uas8WBfDVMRwhU76JjHVZRi9aQSqTC9pdPu5aBYUZhS9FvZYudMkGqVC",
  "key4": "62SKfyuEu2HXXjxSDjzUR9zL6vhvQzsSHEXDaMqw7isKVDKgmJnxNqYFSiHtRVoiSkXAFiiTkrvJV6MWfUW9pcwW",
  "key5": "Ryex7MM7Zv7GgFSeMeNLaquxApPJamjWhgTTj96DdyqVXJWKUj8UTL8Lfr6vAbsio6y5J39Yzx1Yakk7kuMvUbh",
  "key6": "2sK56EKbED4WpB6HNRefybfVttgTeF1XfFokeMStuKit2VGjjgc29NSFnfYCvtpo8R86sWReg6qZfh12QEv5ZX5y",
  "key7": "52vjJvixYS24Knoj1zHhKHErgCv5m8X77SUgyteiHLPjnGLzHFYYaRwk4ycJHgo4w4Ao96sygmpn1ynbrxBvwruZ",
  "key8": "5J8dJNaTLBR3gNCjCLVP5b2rU9aufuBNuY8DYAwS1mCYEKiTiQdZygdbAuwvwSQzDAF4phYzVhzNHgKkeosukojK",
  "key9": "4Fn8pr2iZPViNxFVWt6CbMSxHNc3iwi27pskHJeJUNemcERiEz5hqdDJvvjCgSNknxXnUyKexZBLqbYu8gEB4tup",
  "key10": "5SLXCmVrXT8HeSWsyAJUJwXEgm8MwKVjzvmj6yKFW8Qb7RaSpgt34djBNo6U2B39h5GCCgxYFDrXVd45Q2xD3uYQ",
  "key11": "22nkHKzcgbEKRMeHR29SPhTHr8FywtxDHKa4m6iGKmWa4Yd1Ad7SQcQNf4JEu9T4BqKF4bBpVp3vEZzFjm16RYmv",
  "key12": "39HrDCzq6brrdH1YmdDgy3Gv9HWVKjARgg7kQU9eXdzwzVXsaZ5GLvAGkcUqSfS7FrhopyQuNCwmMQQh7AEtE9nM",
  "key13": "5az6rehR5vQa5tYNJNqQdf9Di8QXd4om5d2CTMgbPcvtEBxbPaVd8xmDftyrkebCzKvzxFvbcaYYq8gQeMq3KaCu",
  "key14": "3uWXmjUsBgSheDL55auxQdAcYwu9JWek5yZdzy8yUEhgd7aXe687kKBkqcYr8JYBck1Lt36iX4ghX4QGsLSpjML",
  "key15": "3Q9viF79Gxn58cRAMxQUwtT1JjktcAgDJMyYUq1jAoCpgnqv5hXdLswvqt8pRWWip64GqSgcCB6m2RWmzdRT4AKq",
  "key16": "5BZBFjVw98a4vwmrLjMu4NM6ZXLwEqCegHrnooqtwhsijYV2tRJ1f21hfD56AhLFUzErYWDVntqUPnQceP3F8aie",
  "key17": "2z37vqLy3wRvNUNvw2anaWLRkrQ2JvjHeZKRBXYjvBKvQnd7r8wudULtzgo6Wp7Ao1VoX3HVpWQ7YAk8MWF8J9dX",
  "key18": "3UBuf8LQgQyTqY65zYsMMRSi9RkAR6UYLhaz4ekqRPv8iPbcjdTctyKuuJc1JjHyMfXLTbKpyngBWs1EAFbLF3hj",
  "key19": "5zDsAvDYxMAztpJjxum4YJ958pVNhqyEsTXydydw826PWzogCsnAZ3Jx1PF2i2Jne85fAYgvkX8mReeTkx8DGL7M",
  "key20": "4RNHJrBPiVxvsGXe2iy9ER38U64UKqYfNamhHtcJB91Bs4cQdP1C1fzHNVSQ9YNm2EvBREbSKkVxR77Ug44px4Yu",
  "key21": "48ofjh5vkjpRFhkUAeVm7Xao54HMdwfrtzsZ9DwL7Pm2yJVG1ySwbnN2YaovMyZcZcTdhb1KRywQ5ocFPPATViFo",
  "key22": "5JCaNKvzRY5eM47TeBzw1GKzpJwGCWuwYKVHmJZULTG81qK2ZCovm3ddSC5x848MZdzBY4HT3B65bG7uzqjnSAi",
  "key23": "3eDeqTzf49BFxrG37ti929nG8ZbiYJyPjKSCs62Cizv2wHBL6bWMc5WJsPW9GhdvAP7HdGwsfgbcR7oHVjH2Wb4g",
  "key24": "5yc8Uc61UscoRE6d5p5NuaQeCjQJtcqtYJWmc1xvamkfdJamPBZ2Mw4JL4UyJPFmg3b5pKWye1cigwEaPN72UD6Q",
  "key25": "285PqmUhbnM5VwCzacXEcfZwyacQR9qNYuH3D6VoYzje21sDJGnweFJAqytcY2DDjkHVuV2Kw9nq4qn3vsTYXtZB",
  "key26": "bPDyh11z1KyxX5oAU3NqMjL4JBXaB3VTTT1eUke2SY4iC4X3NcKyAGsSxn8dnkTJeL6DLxjDu4NMXPU7uu4ARjk",
  "key27": "v4dQncopq6YXgZm64wUcnD5hr58YR5E9WF1a61uTepWYq3Yv7z8xbw7zuALBFn5wzrrRWCyLuXCEXzMk2LmTPUZ",
  "key28": "dDj7kkPGKcAM6xe76BiYgrf3TR8M6WGkYby3HKrvKf8fzVVsbSnRCLL6o1iTkxNP8SvyJ7sXc6eXoWQBEZdAUXD",
  "key29": "ykZDjieE5zwWQ65eXYCVwQgxdXRH9kVMrt9PdUZLt3vcSUY4gDhDjbb5d2g2EbKZ9pe2ohNLLrBuFmWaKR5eWT5",
  "key30": "3urWVGa2Ra4VnhCutHY3mE6v9zY2mq2qxMcsJtiTj2yz6NqsKadT3WsHhwwbsFnTkkpmyqk3qC3N3kFcKvpznvv9",
  "key31": "2d1BKX5xxiu1SxsM2QFiGHzkNfpShHZHJRpKvwqpbxrGgWbVNDorY2jGEvs2TZiewhtpUpgawnEndEG6HoAcwmCG",
  "key32": "2T2x633Hs3Min9mbEU1CqjypRoaoio4hLdSq33gvnvi17Z17wTNB426KrNWJuxe8C3vBWiqLzftRN3nHWNxvDDtL",
  "key33": "2aMLT5nCuvxRPrswfj3X5p1k5RrtRFhKgaJhnjJRvcYwJ34jEq3b865iqha9bNVwkczJDfsEf2JbdSQqXaTJbVtu",
  "key34": "2TmY7eyWXP9tixs8E9TuYKJJSPLJraWq9Dx4YYpXgUvEJggLxC9F6aDh85oJDLuN7koZmgKA1iTA9iPWHj1XNF8f",
  "key35": "4WtvyvqdKUUsf6f1YeastxCrEzNE4cYoj2F2Hz6dQpNk2QDBmZXKZSpUc2qbyTRrNdC6L9T3zkxoi5QGRPiDCHwK",
  "key36": "5wPPbQ9TN7dkxzf2qjcrUowRu16iFMKN2GphFt8rhQibBr4Z2iEFKLYbxNB9Sm5xjosKKxUkNcdpxnXU3CxgySbi",
  "key37": "5ZeU6syp7e16hWZR75gEkxggvmmCeg8jm7ULxWGaYDCtd6ymwxf7AWfq8D1Vssb5ovGMnR9Pgi6nyivQ1oNGduqL",
  "key38": "5ADqgU1dsU5BhxAW13uwt3FkZcPwQ8mtbccR9pN2MjJux8uRRHvripsDLXAaaDewurpfsncaWojnpsBdLTSY9kfq",
  "key39": "2KDwsbwWhuKgm7sdNcTsQVzYStd7bHkjob26AeacAzng6FmvtBwsekKSE85C1hAfGXBDNQ5LbVk5VXLBHdA7cFpw",
  "key40": "3a4dtgXd7woEBjQfDcs52MrTs78aGEknNy2Sccix5L9gzWTb5fHeG4BcxTZKCToHDtCdGhDQxjDGfXVNibJLGYLV",
  "key41": "28FjabBtkavbjx85ci5uPfYSFs7Tn9fymVQXmcyr9HvPKSEiEV5NK3Pb4Q8KiBBgLMKRisvUy2X8qBAPuD2hHPcV",
  "key42": "42T8BT9ubQkCYxDy2B3Eg71V8FPPxR7ky73nPqnkH8F1GyLLBPV1TdJTJZwSYJA6f7tcCxaf25g4Sy79QDNrWE9M"
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
