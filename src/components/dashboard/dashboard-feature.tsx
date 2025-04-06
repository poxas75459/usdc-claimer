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
    "3NCACYnA4w9N28NYHD3vZBj4q98P9e2JE7sm8Lpt9XuCCKdZ4o9469yVVf9k6H3BFhPSvH4FFofWtZQeFPSHdZFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSmLUzTfxHhyhQkkTSUe8jJkdRDzugDtJi6FKECQcau9rrYdmwn88MFHiJNLqekyh1E6JAUtNxAAEpgP8f1JgRd",
  "key1": "35JUGp5Hik5ypANcQfZjsVGGHT2hHKSJGp3yWTvvZ3vCJDw7ePfhPp9dhxbxHHZFW61TVKqjt3oZYaDBvciWtTYo",
  "key2": "4oQAdF2D7y4tnn1JbYDEM1x1az7dmtqDJcCVZhBAVfoceJW7MtPsRi8Gd8F8NXqQBjnavWM9VziRtowRZFVyyGYf",
  "key3": "2pevRkkpsutbbsbaN6sMQJT55Ln2d7FbNnP2uo3Uzxz1wYE4Q83nomZZykeUDhXumokW321UndWuUis2ZKhkXdwF",
  "key4": "2ECXfqMhmVb6An2cFdNjjgjPb9wMzNUhArfr9DfE77tdb8c2FgWM28yEuLAsaMWgxuwunQekyB6Qcki5ReYRdKmE",
  "key5": "z9pqFFDLVS8AjX1Txfa5wV6DZPboiMPswYRnFPscqZ3ajBBxVgJK5SeTofB4TH5nU29eKLkZ7oBBYpCr59cfxSV",
  "key6": "4L98UtasjAGg9y8cdPP467X6RRWQimctiq9BKe4xyoH74hQFDzVrK9UPAWQSbrv8HCrvWj7e7DGDts9bGuZkGokP",
  "key7": "4mAqy4ZvaabzZiWkX7nrtccsrLf1TEmjiREXsu75jdreMs5Uik5PSqzPWtJKgKYXW1JcVKLneweFkbTXNu2XJh13",
  "key8": "kBJGM7jB9BWp1igrjDYKu97RgC2oQB45kpRjLGJUiEThRprW7n2WrR21Hsv37dcM5kRyHaNXCT8pNRc6mFnqwoB",
  "key9": "2eAHiui5PvYb2NGb7duHw2UbkezKPfUMW73SKV4Y4mLqkeLSa7ffvF5U6jszNaTpnDTDEFmrPRXdZo7r7MrHH7oS",
  "key10": "4jJfUhEY1zxDi11X9fnZst3UdSPbHhi8jkhw99FyhhsVy5frnuWMH41FD6N8WngqbDZekxPhe7AfvUFqb28ddRrY",
  "key11": "4QSkSbwHCstCziTuKkxy3KXGwsKfE4mMhY4X9CWuq4CWyFdQCNisXAyveeKSEHMbTmGfkL7KPCd1MEJfQUXnsKcn",
  "key12": "FtuhogFga85SM9RfbDDy38NQfPd1RZAPpEthiUCdWW9pQBRkF1cLTcuy16xjntSkweVQSULNUNM4cnXALfS8nZH",
  "key13": "3vwAwwzydYjRK4dDcEn8nDai2oGQuJpDcFi6M4rCLcthYnaUfdAspD3wZHeoVhKwjwrdW964Meddpme7STkr95Nx",
  "key14": "3QFbgk8ViRnsQQEJnScCpboo8wtuJDkpCWZELkTr3hdy8YQofd7iRPY3fLqSv8wYXW3RBsmMHqHkFQuqGWCdPHAA",
  "key15": "3RnxivcX1mK6ykdr4S63LMcrroAUugifLiARYQLRRgXSuGA6Gr1gnBjHDxjas6wmM9bpHSvcZwXoZejKFgWuPW1W",
  "key16": "2e7epn8EfzXCtK81nnwSZQ26gYkBZKrDCcVCZhcnM4VxYVmGgHYg2ACoBJ8zradeTsQLrPyf2ApVJeHvHayNKGiZ",
  "key17": "Vxii5JyBRim5jaPPyfs12QqyLhmKLfU6d53yUQHJwEwzHwStQ8YJeyzX9LoMMFAkrUyCRcbTP9CdBZxvHWNqoGV",
  "key18": "GHg926zathKL78SHn1WHKSsa4SYpXW8Zmmj5HAjMXS9qd4LUnGVNqAuyVPSdkAuk7wLKPmR9B5dbuVhgGBkY3Ao",
  "key19": "4oxM9VB51iqbdmjwFuTN6oksPdCgDUhAxTtEApdQiXkujdhtbBct949gVoJHDJSkGstUQToicrQXKmTEyq39B2Wm",
  "key20": "A1igW6zT338Y9Vi2mARgqLKGDt9ULPNtYSLDFcuVtVsHSnahujJ7hzPj1nd1HEj3ocRcnc5D488EqiXLnLXZFeL",
  "key21": "JH6dho5miX58WB2TXXakvgCLczEyxnC6r9rCSBg3KtXVMUW75qdkYvitEZjafDBu6DCaYY9MVKXHrxitXtWq6KX",
  "key22": "4Pd5tPJ8yk2mEKYdf8uSnztSqMNASSEDUbxfMGeyhPdiJL5QKJvyTk4J1eCz7wjz5JqpuARcw6zTQNpo5dVprsg5",
  "key23": "2HJ7xtm9A7aSqZXUVtmjfA9JRoJw2GRmZq3pDd1K9ggfQM5D5H23xJf8mwZCtP8GS1uSmNbtz7LkxUNdBZXLCghH",
  "key24": "E1DTXkig5ECFhdfRikQ5vTnCJEU7iKSvmjryUDdQPMGteKnCBcTpMrzw2S6FLTQj6RoFna6DP4x2GYN1XbXnN95",
  "key25": "2r5fGzsWdhzvVNCDUGXi6RzCSgbpbRY6YkVtZQpF8RLdNuCV8C7ZoepZymnn33eESWZWYnHezyFRB7GdztpvB9NA",
  "key26": "5Db91SbC11oVPmyyCkK22nxka1onjJWc1r4uahgf4hzMrZViLioYPwRiYxBT9aqWq5U8cAMSDUtzC7CC9t9PwVQS",
  "key27": "43WyYzfc2wDmS67QxKtpsgXsfRUTzF19JFSSHMS1XAs6tCAKvYiE8NX6Q4M6xNDpvTXdHVC1o7KPMcNqJ954Epmk",
  "key28": "5hDQaCWJthjEMSz7qFYC3gSiMmXw5c33Y7QnNT2s6CiBx23k6YxGN23HLfD4xbNnpGeBtsXwYXvP15h9MudquKoc",
  "key29": "aHKC4qAAbitk8X5o8nUvaeQmTso4CvRFxkJCkmjnQZRtAxS24PELy5RZCANYA8bZk96V8iAL62ao1aJ6dhGKMFB",
  "key30": "3LFxzGBSozzRCCnitQnzdtbbJz1zD3DdqQPLqitH3dXRDERPsgHmcWkKevQQ7oXyysbbRwgaYUrLLcsG65CKoai7",
  "key31": "2oB9TcYbkzB6tr3Zr1hfHTgNxgYHFNj2Uz7Z26XsvggxkT5ezmRJ3KPFNvrg37apMxJdhbXMjpYUFTMutsN4tNsP",
  "key32": "3RRMSfPfUfEJmFV8jaoJjzFzGu2wMGTH27oQwazsntwEHv3NbV4hweKJPrRneDV9QpN6edL9dM5QWy6iJbZa5UeH",
  "key33": "5UaRt7kb2wyJyuPiS3rLo82bUcLSMoHghy177CWc3rNpWXyNfiUZLroQsr4BBM97LAZ42F3hSprMgNuL1x4gr8oo",
  "key34": "29bztJFXfeGafoTutuEYpyowUbHZhaCKv6qqdcB8AtQT7dsapgrUzFLQ84m8ZqUWFZT1BMro7DzJ7Vn7xA8qSoLu",
  "key35": "4U9xTtJidHtZfmukVipZTN45SvK65TTQ8KcoEfFVtj3SvMk7kEgc2ZDxzGT9LHWR9YwLHVMhr7eYGQ8Uq6xhgGDS",
  "key36": "5Vhy1TpbEbMjDFCDMRPQd8PTMeZKHS3d96sqbLgo6yPh3Pbg15D1GhfKNTCMfo7jbgRASMzgBLvd7pSdU3s8uEyf",
  "key37": "21zZ7HaGktUi6HgLUWtJsu7TPtUR2p5L634dtVk2fSrw3vAx5JQESN9mCFSBFRWpu8joX3VubtzikGc6HyXWqEEa",
  "key38": "1SRJSUwupcu6YzXWYyCGmAKBs88nLab9G5eBKNMRVHpZFvScbdMCSqiMfwMKEqhkHraebhQGxumDKaQNTmexwoK",
  "key39": "59rMDG9CPS7mP5F5N1u2WFPihnGPjzatPNJ6iC1kVM2aZKr3JBAQC5ihXU1oHEh4X2nzTPcqS3zENjAPYT2vNdeH"
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
