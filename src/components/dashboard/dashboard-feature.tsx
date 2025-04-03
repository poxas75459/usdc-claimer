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
    "2xqSr8aNSGRb3doD51rKRAbSWCfdSLkaBNv6CUzaAKyYvND8CzcBbpU1AkQ3oGnnGcN7DX1RhnerCXAuoRSJE5ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BG3etLs4cok9sEYQ3rJ9ypv2qeSni3NaxhbJn4poLo24ShZfaeSrnDfub8tm7bcBmm8ALXM1Ac2hK3b9c7ic6Qn",
  "key1": "9M35CeM9kTGciP3b68LDhPRj5XyRGVL96Kn5M9cHs8Lko7uPPE681Gs1pecQnLRJjQXwYEWJeUDBdMQgNQyoncS",
  "key2": "CH1oKZuk893Hd631KYnn1SrWLcGdJAgVN9Zo1VY8XAJTLrFG52XSg2HAwGBVQhUjY7wRNkxccUVr2KwgFZtQirJ",
  "key3": "58cyTeDQQn3Hfqz4TVHuQhZz8rXKQdKNNrECKRSETSwNvKBXLaWVoEk4phnTmeJtKw8aerhMShFzikPjW3AYucPJ",
  "key4": "3sAghkNfa2Csrxwv8Tyvgo2wkh5JPkD1Z7Th9yRtCy1kQuG7sa6oQbRUo4LvTAW7szH1VbsY6wxhxSWNdfhAZXR6",
  "key5": "4rHkqpxkRj7hwAz6sPSqgfTwdvoMoGUqfrGHcecVEfP9hu5MaCJAJiX9ahRm5LoEXgG1xPCPKWTv7nZMzxfN3BK5",
  "key6": "UJ7317qTjdbJ7yp2iofbigWkTS4j7DShTGu132uyWtf5RqGhsCzFPxbJwHwkGqQ7JsYwP8hjXeHP8xG3oJXN47f",
  "key7": "5qGhUp7H7kducMexkbhN4S8MaSBjiZY6UhJFrQ3fyBKpr6bE8t83TV2jdZkfUPWrHPBje8prPjKVH6EZxEJpoUBN",
  "key8": "5g6NmzFBxjRtMEJs1rgXhQE5WMvnpBMz8ffKFu6d1Sh1HJygyTcfwMMT4cUoqRbZBVgPQ4cSBDqsB8KntySEmDpf",
  "key9": "47M3EyZSWx3eSrUi8tRNWPirPvmas1yToSbXd3JBKJs54EEXyzMoi9kmUNokxKv4MeMMqMTeJzxvGFRyvNWFzfwn",
  "key10": "2fwoQ7hALARyKsQJJXv7torWUqXqbcf7AF56qJR44uPA59wfjFhaabmQbbwRqsEWoLcFps1b6Zjwye7LdgSpYTF2",
  "key11": "5GCshCmjjoALWgoRvXsx2Ev7m2Ki53dY6xuofz66Np1F8jh2jPoEPDDNzd7G5Ve8HsSoPhucgvbfiZCQRXdKEone",
  "key12": "3eRjyvqMURoqNr827sAm9LGS9ucHK3vz3fr82vPWruiAMQQzWZcgDbX7ya8YeeYVwDkxa49gg7bRB1CSN7aq8a25",
  "key13": "4gLD8ERSLK4HmsYd8qLboVjvf2MrkspmoNSQgdnu7e3PhiRv48tQmEgRCiT4in6JXgJX17unQXDwTL6ZPtdKNp8R",
  "key14": "2BJ31sN2avAHtGVW8oJSBSvneVvph5BxLUSuibGHACgKXLPWKVMiwjM3upbC22nbu5xZNLxLY5NyzEvjPbTPCBHK",
  "key15": "4ZPmwrkF1WaKP7fDzyhsScuLUrGskdDxnYxYdfQ44otM5JMiF219iimq56dMmFwR62mQ8HFAvV91mKPkogMKsFvS",
  "key16": "3oiFvJkLPA5NVBFSsfoYGQTW3eEmKpzfSRkCtbCD9jyRm3fALoUuwdmEsrwCnC7hsYYobi98YdL6vfKZKY9YRWrJ",
  "key17": "46BBLjxEFCT7i7t1vBD9KoPQdqtf6jYd9FzQ2DWJh9H9bDGvmP7Yq4owYhHLy5Z3N75JJgPn5poBdxHSnQPyRTST",
  "key18": "61PadpNhvHwib7gPHGZPNzGRkSKjQ8Cmon2vqymCMKkTjRAKxUdLo5i1njrreh3Ygmo3HySLULcj3cyqA87B9MHM",
  "key19": "62LZ5JmDJxm9WDTU1834RxJKtabdhWUdgPn1dfEHDZgQLPYPjFZECinzy2hm9NW21ivVqcZJUjooC1TZYVbWjhse",
  "key20": "2qRL2ztHaBXbXrB3on79wzxKmhc2tNGWe6FJSSbEYum7m4nX57Bhsf5fPpYrt874wHjw5tYV8bEw9tU5V8s9mNJo",
  "key21": "3EDh85rArW3Lc5pS7fc3GBJwRS9c3VpLWhSXCVVPXvnmfMMwnPS9Dof27bbX8ifbdD1tN7MpQq4mfb9Tt9LfF1nY",
  "key22": "3ZW5V7YDa2UPWTSxtAjSvP2T1HkdSV2A364fNEVgFHVtRNxwRVdSjNFQDh8WeRm6Rui33ysN6S6WCTRnfQRK9ahu",
  "key23": "2bLF7cWgytXEyH9by65RZ8xovUQcit1Xupy8nFtCfwE3QjHSznotoqfoaPkFgieb4QCq3Lq9UGQcvRYJu3M7fmd2",
  "key24": "231QsxTHFQrQXKfkoCHGdCrN8ASG6hPCvUx2XJVcrY7XNMfMzJASpfq8fCpHwvzhw7W9mAkgsiHYcwBfFjHKU1bn",
  "key25": "4do1iUXjyd3bBNo7sggvfnbd3TQkuuBRyp9B4F1tagvMhFh7NtxtQH2WARCNRRAxH1W1utTHXvFswiQvL8v2uCma",
  "key26": "62newcUvSmQcHV3NisriwdZBd588g62UNb91BtU8VkGrjso3MyKTrtt7sxac8NzWpkxRGjJsAUMMmUVEGy92KVwJ",
  "key27": "s8Eh7VpVvXPYjHv6v9Su8UQK28BHJh2HMwGWysYue2U9LoWZkiMnUzSc8KBPJKtPqzb6JJjh7sqNR1cvVToEZNW",
  "key28": "2ZrRiiVNuTxBFCdpMDK158snP8nnCFTrQVSMsairgUUbNu6CcnGx1YaYXgBcUoS6nZjPqVcREb7PS8Lghi7JhSMZ",
  "key29": "5pARxscYyLx3eTLgHYEs8wiqF2Uq9EUVcMBJ942YBVG7m1BzXxboPA3eu3BPxCB4NkzikWnnaYc7F3Ltk6XRsxuG",
  "key30": "4f7TTrn3DmXpskk2CgBBEsh4ykQnSmsmir7rdQa2xLre148c8ykSUc7K9kdfGZc5Eoue2QDhv9bXaQ4b4vhWdF8x",
  "key31": "2HvP5PTxhsJ35BBNKBYny6W6qgDvWQoZUCKsiQea8FNYVBymT793yRbW6qR15RwZb8HtHM7AjN4PE3ctumy92Yoz",
  "key32": "454LZzoLaSEntqgJFwQg1x8C3DdLb4WdVb1i4rjRc2DH7x2e5zS6fNWX88sHknwZSf8Q8G7JG4zWHw6G7AZ7aRQo",
  "key33": "3dy7EVfYgQbjRFhwesv5jCs6UoeS8qrPcEeqeSfR6ujr2JosCmCwMxgewW3kdHNUSCPAfrjigFZZDUWJBxAu1BdP",
  "key34": "4EahZhF2Q2Ds2Y8kmB8N9tAogaLzuAniSAAkvxUuKgbke47Hsjyjcc9tjQARP5iquUL7YJ75TJEY62AGe4UrFm6f",
  "key35": "5dMfbZCodsYdRRzyzg2743zF3Er6ibE7s4s3Zop4AxjfB7WCMBpupAfYSM2CpVQJZg5nanzGcwQerz3BGnPA14QX",
  "key36": "4QRVHFx9L7bZtQKep5xzkt7orb6TdG8CB4gnCmnaqr159oojcAPSZoCV4U6CZGqjWQSNYjaQfU6kNP5QTd4YsYGU",
  "key37": "5i5eVXDwqkWM9XnoDJPaZRFpQLHhw4kgth6n7ma1tJvBw9GjnKF3jPsfKtX3qyjsMTgxNmdkF6Ria7p1QEVoo5ro",
  "key38": "2zpKSXZFETDk8FUHEN5Yu8sEFo9bn9zd4L4Xs9rCkHK1x7UyW8YZFhrfwMSWpLrr8azTNV9TDDTbP2wVH6g8pk13",
  "key39": "5abeEbFD3vQzncGK9TRb7sWrwj684xumNi5WRMxWUhGTG4H2DjKrMFGkbv7rX4b9E8yzpau1cGdqBCuuk7bx4LVh",
  "key40": "H23DDo6ikoMsXwHSfiV3DUeK5oa6a58ticFYponJNijiGVoEd4CmmV55eh3PT4Qw7tUVnAr5gRsfFzyLkmHGqVY",
  "key41": "5Wv48U36rbgwCJDafifMFR7Xn1HDAXHakPd4zQcDotQk8r4BZiTc2nNq3mM8jEWH9EPR3ZgrkMj8YP6aywiXYbas",
  "key42": "5EKdwf9aJQJwtCRwRWGj4Wd1AR8DTXMKod4BDWAqmZm76nGLFPtH8ngmCfQq9JuVFxGFgQLQyZghZwXWjka9YWCZ"
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
