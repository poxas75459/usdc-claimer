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
    "4o5AJJmcnpQ97BR2tpEGY7pko9pkfauJpANjCEZFhmrxq167YGBDxGMvMD7ZhRtSZu2W7rBPBgzWc9ycnAfahHuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49oVy6cTGvjoGVmoJy9ouB3QqFKjdYyg8eMg8kXMJXu8eh4cJffVSWPGGXXzP8yWW3RZ7zY6G122HaW7DZe6fY2",
  "key1": "LqeykqxosgEospBNkkZQ1iaBJVQF5ugkKBa8hzxMZ9cH3yqGFPoqWDNcbS9yq2UtWjTxCUQ66pdZt5vBaATnCoD",
  "key2": "2vR2PbedjCXN2mj7MdcLXS3WF2tJ5mwTjApFpLJ8BEt5vBQ6X16u5hWJkTEW3CDbFpWn5ix2nfMxCkAb3mjXFbdP",
  "key3": "3texwsSjwoG3qiLccnz4KaNW4KqAN6iYzJi8cRicJ8bHFjCDm7DBTN6v3v91WLtGUojq15fF3WXLfmF7HiexZiXd",
  "key4": "5FGwqYd7K8whGigfcs91ZjcQaQ3tsKw4vRBjxFb5RTiq7N34J4jtd79XT6KiLmJkL5yHjWEFTymVVWjmNWzLonvQ",
  "key5": "4hw12nxc3rUhHS5HDmuy2kcTzHYeofrLtXV5ZGbMjXavouNf7Cc19xHoDMy6Hnr7RRMPYke8pz52Qow8VXGabEJ1",
  "key6": "3W2JXetSEhQnvwDRSjw6uBNj3VDNZ85b64WABFhLuEPw3CQPSGBoP3wXjJeRhuSb5cbrW1bP8bv5tNwVmBykGYLF",
  "key7": "KAC7Cfjjz3fVhPSY9Lsh4918ckjXDo3wHZKfm7aTbRCWhQ9tfEmA3xv2Dc32nyLwcexQDQH3XRK2NbCDfyUhEt5",
  "key8": "2SdHMcQCjgxEWBA25pZeuNjxiaTaLZ7K3r6yrqDeJexwhQsozavADfgt4vgFNxWFAC7Wx8evUtkCp6dnHn4s7Ehc",
  "key9": "46uDjt8XJ9KHFkd7Mx44BfhFeXWk66qZSG4zoZZEMGhcGKWuBemtqjnjn7DNAN3dYtW5B5Dde4ANdJNEiuhG4Jzw",
  "key10": "3Tn82EFgM6QfQkVQAZ2yDBTxUkMfH5pZ216wiKDcnCk8fEMLi6GFLtdiiJqLGWDnhMQywnYiGhVzp6xUKP2eQHqw",
  "key11": "4efwSe5h2EDtukvu2759f5B81LxdAKXXq8i8KRxGv4VC4N6qejF5WpwiDGwCr9CMvQXTbE5yyUqjDBpE4W4h9qKG",
  "key12": "2mWmz5Ye5cXfmQxZMu8zHmPKoLATxcM3mpU1idVfkmA3v1Z5hqDU7ig1p12HbVLP2rWmzqvSkDwA5YCDVMC7z7VM",
  "key13": "3n33Tqr5sFbKXoVQBJbmjewX6RWtsQyjuqs6NTE4pbbbkX4eQkZPjTZ3smzVmgG1ezYLzJJq1CYYZp63oka8XS9f",
  "key14": "2vatRW875g3Jauj2Mq2fvLmBHnekWzqto9U9tgS271GhYTCfDk8EGnV3Sfty7gnjava6LuRi8erKGKHXL3SBFpZV",
  "key15": "5k3Y5TTuL3Hi6Gidf5KgDJbRzj2QE9FWcqreNKBVocujRzJFLfmTbD6A7rKke1UYL5UjmbFukdWiAfXnxpZorM41",
  "key16": "zkt5NXEJ5KPNGTQMKuRoU5XjuHjJNU2AuefMnwDWAnkLvPxGUexQLNVxZxBG3JR1mN2AN6mwVsf8285qFDQMWLF",
  "key17": "3TtNGoFQzGoksEqYc9DTpCWRoMrpBYPVaPDE7UwrvwqEbgKwefEnYQ8BHmBK2ban3AMe1pvtPqwYvyX8AfeTSETU",
  "key18": "4bNZGfTYSdEZqb521nHoSpD2ao2j41btZfBmYdXvnd6PpdbUJ122MJ1YPnSTZyyvowNCYpLAAsSY47aLnCGfdqTc",
  "key19": "2VY8nG4oQCeHqNQqFC7xfQDotsH8ud8k4ppFurF5FcQDKW9ffTXkdBachT5f8s45bHKzKXsnq6meHfd2wGdk8kjH",
  "key20": "5bSxDutpiQqK2hAK6zvBMWL8HuNyEigKPfsTknrPNsJfH7xcgYH8De9xLJ73TsjcqgXPrHorbg7Y2ags6gt3rC7F",
  "key21": "59NGXYmk9YV5MSw96ww3iR5mayU5Qyyt9wJp6BEBeMMDGcrGSbqsie5URusibsozyJzJSREYB5VgqqTt8Gik1Hs9",
  "key22": "2uqBTqBCgAKVG5KTLGFzBNGekeaaz4TAxqCRw5yAZV4aFDDHUAZ5mNTmykfYG2sxTaUA4EWuyq7TnkWrCudV3Nfh",
  "key23": "2rMNcuJdPJWtCMLmRtLmBi5x5H3cUn5tb6YfNQGNEetxbqH5YAFPb5WrPLs81jqGEA5XBNo1CtnoHhTMt91ef26F",
  "key24": "UjebNALvajeigDtJ4D1khqDJRKzSBcVkNW4iGPtxiPuBxCDeWDWuDb8YWspE6TJN7Z4MfczBzDuPhg8nxMMeJCL",
  "key25": "4JoPKJPAECochpjVTJYUep4WujLLZmfMzw8cHVBcJHB2XY5udaXtDWrxxxymtwcfo4J49ib8TXY1E9yHxhdW4BQn",
  "key26": "4LEBLnZ8ubZCsp1ZRFGqYLb5Z2PgZPnrtNxR82xsWdzaTBRFPNodSBN61K5JC6VMp9wvQnpYgex97CWLX4uhvMfZ",
  "key27": "4wxxMDW34XfwaFFMiKNdaySBwJMBQqrCX7PcRTvCJsCBvLidoQmqpbgkmGVPtM8ymSjGT1uDUmpL8SnUsrj4bfEF",
  "key28": "3RdgEH1kaVwUSRC5D2Na6SqtU8qaW3o38yjfuUfmvW4WgG9fUnJJnwrDenMVMT1wiUEprABwQk2vzk1n4FPQan9E",
  "key29": "3JJKRBN93TBbRwfoo8LkZrbQhAgsuESva19QCMrKTtLLaCg2TZ7X8FenX7785qwjzWNRkof3ffAmxn5qTvWH3GPc",
  "key30": "2pbfsaY87GqvKYh6qCSKL7Hbh1aHgPxKv7UZ4GiZkyyupDz2dpaWBzGt8qZMaR8giiS7cpFWeSrzVpQae4GwHHyJ",
  "key31": "24MeKp5PzRvekLeP4C3RMLhzD7huscnXqpFRPskNZEddgR16Vjf32tWe7qYRJhxV92eWNtLiAFcJ5UnXg8mfur4G"
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
