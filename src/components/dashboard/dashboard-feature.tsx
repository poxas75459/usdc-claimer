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
    "5vyixUiGygxnCdfZUE8ww3mqGF7aJny3xyrnsszhc2KyHj46EXK7xHiRctPjwyHn9nWpGPGuFxcYPY5sJHMSmx6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tn2VPHBze3EKRd1J2oDe5psh4odgV9YMsQTBszrKzfE3R5HovZDi9QBhtn9UtVDoZiH9BVDsyQyyzZwdXi8n2g5",
  "key1": "SkyvyqW4n4ZR4csMSiHa9kHzzduEpTaKvTJeNuhny9shMhZUQ7iNLbsuiiPfH74q8kmDMWx5dbcZCtajjpircgt",
  "key2": "3DF3QE7VxGPWNjNdBwr9uhHgy84brwPvzxQgcNyqbmrpVFSm3uFoEyHRqkmaF7Y6eTQLS118Nh4uY4T4oo549yT6",
  "key3": "41eQG8gGnSioCTMnwsk3Fsr4vNdNnFjnEG23nZs4GR1yvvSNK6poaJ21ZSF2gDEA1i3Nq3MGU19C3Xa8RjRSxjoq",
  "key4": "2yjRgNCF26j1Zf4egR1ipoejSsdKoP7eig5x3n9okcWvv4VcssXat5RxZL5A86vgm9aoppPhoKrxHTSxzPTUpXNv",
  "key5": "2C4T3P98JgKpeRfnr1ybkfqNHW7EgG17hWddfuoEZHrBJyNqtTC9wXhMindcGZwdXQh6zF8CVWq2EMwuYVfjKC25",
  "key6": "5FTTez9vY5LaTG6tAYzfHrW4oeDnAvMWr6YzQGuf1a6QkbJF4Mq8hG1miwa9PX8EmxL9fevvVpHkiRd1fVfuQA5Z",
  "key7": "pFzRuXKva5y3x1NDf6sPMoAeGf9Nej9YfJLvVRgNogNvvBDbVaozsoh8y26ZJHdGspqQoUZWDBRPQ4BQ2disJeA",
  "key8": "4VcMXNyrksGTsjxDr2qkiGTdFvJNkihSaF92mChSz83kV5AYsn7jdi16b26XCNq78JUKwy3ZZH2a9HtMe9iJ7Bdg",
  "key9": "4Q3yAJ2cAiNFwd9wZJ9wXuYprwzMRhwFhP1Wc5izEDpKsJf2bLUNMu8n84rZxEnWErgiuYHW3cg5HtxseBJNDVad",
  "key10": "ypBb2e5Xr1DJ1PGrkaGuMcpkmETxCAn7EVjAZnajjo8MmiygCv8buu9L7ydXZxY7RokqEoPw5PFEv5wWEXWWNRh",
  "key11": "424q9m1wvhymn9veq7gsHF4bAxKn2uZC8iEaYrKHCtxSwmQJXjEkqFrH72hN746gAZp9qhJF736PHmxqd5zL8Drp",
  "key12": "5QovVaXf3tVnsmryxcYf6BWdFLJJpTAUzarbb9YVKTgBRK93oi5TssoRqRvCWLN3wCU6drPcXgXhwYaCv6ju6y1P",
  "key13": "AYTFtsjFV9xBy8PTGfGYRBmUScJLXJd3Y8NSecBgs6q8EVeNVFeQUyQVLpJwUvKnHmppVhgEmAbViTH7KfQgmNZ",
  "key14": "y4ys43JikgMTzLfGabdW5JcxmdNZs2oCaRRo9BKXQZRPz3Ry7YzJD3Uc3XiptBYksvQGMQeB2xu5TFuhB2uq5dp",
  "key15": "dTS7NKxyHGAKTzuvvCSafa9KaSGNX1wtwhFhJDS8aVxEhr9RGwV3ZGzK5B4AV1hZvv4yLay4Hgi4eYwqvikfxkq",
  "key16": "3ThtWnF9uN9JsCUnBDNeE8r8cdfAwp5gt94chCmmi81xjiZFxqxg57fbBWCUxUrcrt28Qj9gM5R1shBMMNYXUzdH",
  "key17": "41LvGnXZszfapT2jhHrjo5E1ry4SuyWvZxcm6YPTYhWTmGHyE5pja6gRnxTk8Km5BgLg65Refjxzn2mVXkkU3MvC",
  "key18": "6LtCT61XC3MQiossRSDffWX8SwUy6cJTuU9TqHYtc4QChT6inFT8tijmvsZc2f6q9A4KXoyzvX7mzJDahde1ifd",
  "key19": "3FYWg6Unw55M6c4VV7b7kmDfvnWoQJYtMmmSnoh3dGsbpsuJrFdLP3dcNFJU8fzqmvRGpdwghWgtdayx8Qxk9GEL",
  "key20": "rBfh1rif3wBq1AbnwvXfCrGYZL5R3fUL5Z8GZ22G1Q94SWGNTXVZUibfzLR4KxA86NUNVNctGzMtAf4USyXbvGw",
  "key21": "5dwrXQH8aMBNiz5JTo957oRHyTkyi664wmHPHG7MAKswKJNCDuZWsUWPTu752Pw3FpSQVcNxqqfvULryEMqpGyAt",
  "key22": "zzWiueU9JFXq1aJQw3F3woUEU6C3WX1eVXGyRJy3aYXUbcZsL6mveVWnWTqpBShTjoMgvsj3QtquZ8XhLPQZfav",
  "key23": "3tP7DigMBNU63Uw9prLGMja3kSCpZw9zSMGJhAZjJAg4J8GCrPCiaEAkEUD34X5rCKdiT97HnZEPtJRTwx4LE9u5",
  "key24": "28wGZMCHXWCNPiw95NMz93Mm1rhhTLqjsNH1xNpYiHPAyuo6QGzRzPmYQ4zmtEfdhEPrQWrbFXANRviC5acZRnpu",
  "key25": "2X2ZCtNYLGSLCoB2GyyUtW6icuZx1CJTequ88M5KtLGvvpckrJEhanHsRKnBWiM2mvZtKDZTavNyY4VVeVsjob3P",
  "key26": "2Np9rmxPqA5DB57gD9keQGduWS9qV9yToMP8EMbn7N2NRUZP9zB4eW421fFe6owF5vJ9v7tyXvH64H474s8hgQgE",
  "key27": "4n7dP7SwkFTCMpMVwckwDAmhBgiEU4TkeBW5NbuofzmTdPiFjbgGG4vmCKEqbvNiyVEdbbBFw7YqbLCG872wKBKx",
  "key28": "22UhLU7eC44eLKJ7uYFiX1oV2poG7zaXYJD1pfBWsFyUjR612jjUsPnekQeehw2RkzYUR2YbtiTSrcqUuQyNiegL",
  "key29": "2fNfW5iKM2RxYzuBmB36bPYVqhbyEpSMpu3SNTUUUcaRb9Gp7QBQrZR5K649nzc6svoaVtC6dVwa4TkZyonpdsfD"
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
