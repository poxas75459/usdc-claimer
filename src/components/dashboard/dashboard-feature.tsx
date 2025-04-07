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
    "2cksjkgKKJqya13KMvf6BgEpHgs1Vafh4zUAyZeqD49gssrN5g2FbbhbXfsnFcgB5Uu76XkiCeyyyFYZtBEk5qS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22x3vWieNDB2n2H7wyG5pNCSEuQejpNPEA1NHFAUtHuae95puNqPvzGxryqrGTgWiMV7vn7VJ8zdoPBGhabENhNq",
  "key1": "2sRDBPWMKRMMcCavFLoP6pNHJzg8EQa4ssKJ7AhenLWcxnJiAWza6LscZrQrGwLfdzdVY7UcvBDtdtadEj8Sbofn",
  "key2": "48jV12TWTVCs55SnjjiiDKCymcAdH4bQVMTwmgewDE8TmF3iCqK178zz497vWey3oVXALc94pNxZ21JdFWMZkSi1",
  "key3": "3q9J18miNuFy12DdHXPjzWMyTVAT3UGTd8i4n8GaotTj5VjXCXkV51YHHCnD6XXwNCWxoCfipCV34xyMCXdbN1xM",
  "key4": "bHMbPu28sLWveBQScurYT6nqaNbctkhfszBjpn9MWxnZPEYiQ5oXy7UYVZs8WEPWL8QoPPqGVBsQitWhnsidksb",
  "key5": "4MKU6s153r7UuR9k9sijFRhb92ZNpRFbcVZMgx1NQkthksDppAUXjJkj4PUnwrTAqnP5uSw1gmLerKNLzwiE2WRi",
  "key6": "QV15yXnnUMa8TrJM8MvLBaVua8W7ZHs69BPsGvYq6r32kAaN9XAbDT6JdKk8HufupqpCd1yvnKD41uHwAMypXqW",
  "key7": "5hBwVMaBtTUbZUQ4XJEhUq256Y7zQoFy589Btu5VyVzMdauAd5C33Ry2ZR2B6ueSnmGj8DQfhKGmk27g1E7SXBy8",
  "key8": "2hR8jr8DwHXhfxPKBzU12rxwKj8rk7iEyvMP6fyK9vTwMozmhhfHuvMoDatXS7Vtc36rabUNrkGzfDNvqL5yTboW",
  "key9": "2hRxtfswKwXaPzcd3cZnNt1mufaZKfnejnbuLVxJy3yUxiCstTuxXq3yrQokgKd89AtBqupyvc3b5K5JFt1WaEiQ",
  "key10": "322dJY2rbbPCQPui8xg9bKUHoU2s9isGFHKxyz6EtAboK7AeyobZifdHNT7PqmyEXVKZ1mujJWJSWU3w2gt7fHt1",
  "key11": "2mwHfefVh67i8pM3SEe6vH3WJ4hyPr7rhA6Hkjj39iPk15RGXCEEL6TWpD3fewqdFe7jTDkjjx4QKeyswz5KCuEe",
  "key12": "4NpcVvXZdBgGguiBxx4Vsn7ezR3obW7TuAmTmYXdjAacv3Gx5waMcQuAZo1iAjXCPzeWrA7gn7wRGE9UJos7Txjc",
  "key13": "4ZMsxZHH88QAdy3mbmBisb1D3CLEeXb2eBqU7aVcUw9oKb679oZRn7t1RBPxhugnGx5R2aWbD4t73S1ABNivB6rD",
  "key14": "5W8BTKP5AUivxB8pDDgRdAKLdy8EdUPhxnRdQ7skhxXTTuf4EFwpZjyNKxwhCZW2Fej5T3U6sgi5mqFnQ6tEbd6k",
  "key15": "2expeaeifoBWUuSmCQFNSEq98omRrCsNZUNNLNgXtD6rhAxwHPS7Ajg1KCjrnonfddaci2KPVbaVygjqGHVrcprf",
  "key16": "2VMhBWcccRMNxjVLUzUtni7CKEvipdH9zn7RkEGnSJpKYijxXA15aAwkwgU1F7Txb46zvcgqSQ229G4foBNF6XmX",
  "key17": "4igHpBXrp8QBezJxQZqwtcucVzAEQ1aG1ygW2h34cb6qGGqH7vV9DwtMgjmufSPiZ7Q51rxpREycTSau5uyCHPUL",
  "key18": "2L8rkSYHQegGciwtY3fYWADxXdqpCHruFXSdCjSn9SShTetsWDmZ5fAWgamMwJLs9yLzYh4coTs5i37Na1sUEM9U",
  "key19": "v7KW8WmtrFkJfnup4NewRmxCNwRYHmiSm8Z5XpMg7nFwtsWync93QYx2qPJhAni9utgXRCFC9irJj9Bgkmbpqwa",
  "key20": "4R96jf3xwC5mHVZQLp9Y6TeJEYHsSSfpKRq7iYbXo98ArKnSUNUJBpYj4mPgbnk1Yo2MZzPfbHb2QXSMyrjdtC2B",
  "key21": "5XN5wxYo2LqdqM7vvG5Fj7uJVtTMh6uTCT2yuN46dfN1kq4TuzHfvx7xM4PAYHJJ1MGSVqt5gPGCd5Lr5cFtBBKv",
  "key22": "2H75cyxLWGoXpL8PjWTHmzC6UWX32ou1PsHgmcBSodk12GSUVTP7bPpf2cWwYAW8pJaz6FAwnBmUbt1kSLK4FkN7",
  "key23": "4nCVveDNVBDNdFiA9F1Z8DrT1Q97y65QuJG5ZZT8QVVtih3NkJgRUSn9mGhHMr668bxiQZgydCczMTNfm3trsjBT",
  "key24": "3qx7NaL4bs6b5Gn6ZSTuLRFEJ6KmADSRgjyMXj7LAw4X1KnRCdPCxqzCMp8E9HH6m1dJaD77nUK1pbgnLdEfubYs",
  "key25": "4cnLGEhfhH3CmTj2aNjTK4Wq456p4GtAMvCjw9rMHmbD14uvKVaATx7QqKNEbHG34bTcRVRjGPyq7rbK1P7cnDg",
  "key26": "2oe535rvVE1rDC4m9qXPjiZQqXiabA93R8bN9vEggbfzvAgFgk2pnwA4Yv9mGs1zpaT8kd22rmpW2x3aZZdTNupL",
  "key27": "2HsGGPMEWPTVs1nhexCKkXKXHLVM3NncWStCEDbP9NWcun8Fcij4a3Z7xdAFgXh3GuMT6Bi4UwteMuGatQ9CymKv",
  "key28": "5PYD8BUjoiCJo3AGb2n2VgkQV8mjuQiqyB44Tqwf5grLGvp1mSbAhWTrxiZt62Jc7qnTqUqsaQT1oSKLn3Wyedsn",
  "key29": "2FpHEkR17WFEzGunvvoeVtyLavDEc8LQrDwbRrAyQxYdSszk7fWTxuZ7zJqVPCmriSrT19ppKME3S4D4VTcj2tMX",
  "key30": "yVFNzYyAx2t4bWeufwMmqJSxZGfZHkoJAs989JGmEPx8hckc7T6KhCWAZqTk8CoZDCJfMjGDZfujZWJi7bGFjso",
  "key31": "dXwPp84dTNi1HArDy9reFQ3d4L1dWFbsNBZj6BnXi7gs97RzMRE8u1yS9vRxLWTTdYBo9sMS3BpU7ZZq9gPjSD7",
  "key32": "4B9xx79hhF5bDC2ee6YvCQkY6nEKqYRYimGboUKt8FtQ3aq9S3NZY68DqejzqFbQd83pfuAuqF1irPYn7atbAweZ",
  "key33": "46JcdroW3Rxo5FWcS2onX8z2zQqrc2yhxjGgR61CDzSNmY2NCRZYA8oVcWPn5ze8VHRMKv2nXwEDvDr3KTQ4C91r",
  "key34": "21GigDVGsSJpW5euJ47W1iCX4xG5eNfdwVJCRDw2BFX3rRpD8CULTSY6gBd9LSejppQeMP95EtQLVokR3JM5w4Gk",
  "key35": "2qkryKCfeuem5DWtGYGitKEJLrk2PLXr13yyekbZBhBY8HukE9xSZkiBWKrKmRrbaeZDKdRt91u9DndwDA3nzppG",
  "key36": "4mmREfbdTXUzqy7fqAECKSC3bPc7HbgYm8q9hq3LAyghkRsFYosjdCARHSKKCwy9bMMc7WgU5oyyFYAnDoSngACc"
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
