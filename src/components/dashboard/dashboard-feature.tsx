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
    "H34jddGyGq8m3N8JRb6P6AXfMTuENXpPZ1fgUunLEVrEi4ovKKuzcxCB1CxrjaafM8o3y1yvHPeaNyvFCXoHbTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zw1MSK6xwKktCh4VGF8rYt8VtDZfYtQzjQMLMcdxLspFtcBS7VbVjZXoeJcL17iCR1JxH6YQzPWotgZdiJAksNQ",
  "key1": "eLkjWXP5DjNjWUgKqDaFqbgix4uEn9jcmqwfyHG5b32Eg2fuVwL3MzUMstb2jVcR2NLj7Ywbi9nxgCTW6V8U5wq",
  "key2": "4tQ6gnzUkrdVwj2TcNYMTZ4hdh4a7zrYEKq1nGRsXFCxXNc6n8MPKPNZPEnbB4E94411ZciZuvLneN8jMRA4Mio7",
  "key3": "4ouDuSQ2BTnoHK6XfMyuGmYzkBPbxd6hXHhyL3RZbZhUZiHdBKfq6gDr3r7YKuXCLVLLVN35sV2YyQZvkfuqsFQq",
  "key4": "59P2WWLGTNhsR9RuazKNVxw1u21zr1a5eVSTEVEHYPQJt23LgCM3es1GSx7cWApun3a8pqdskB1FAnMEP7aqnc9a",
  "key5": "5J7U4dv2a4TMm7VEskeyBpzoDA5qkjK4z1mioYR8bquo7U1Kv3EhBbssZebF8pKqoAYHKUg26CfHBp6BqRTgPTj2",
  "key6": "3qYt5d5v827mdWMVKqcubuTtawtqcK3cJx9Qidrpif3zBXczQFbvyvY1kUcLf1RiimhmsKzQAQtHSuSCNUTHnrdH",
  "key7": "G6Y7HkExKBYrtcNCawRQYaTBqnyKR8NnYLLUwnQawJSCtyyZcXpKbNxRvazmfKWe5pw9AAoQgJE19bk7LugZ9uP",
  "key8": "2ar74A4T6REsZqXs2SE1fjKSWZTMt5XnQX96KM3WvgiwKKavWsV7CqnNTNLiA2b1EXjjUmazGhVXCE4GkH6QmRKb",
  "key9": "3fFvcCQ5zTsn28mNws3P8BytTqeLEYa33YQBL5iMjBv9NGFThVZ87Rvy52aXygeZExSztWULRZKcawRvhawotpup",
  "key10": "MdjNgFj75A2ragq7XmGPDXCd2YxVtUkq996PsJqDmazqTnBdoXUBDEgWapZcMPJujdbT7QEQwkfypZEc9RTmHnM",
  "key11": "4R9Bb8UThkWgBedjH6bk76kF9i2iiQpbpe384pGz3Ji6ZpCKMCnLymNWHhf4wZaqrnov9eBxjwS81d198xPBeLQP",
  "key12": "2XtcHRHauUfqZWVPAMksvD4XrmbevDFmujkhKTmXxc8axRqktPVG3h6b2YTnP9pmV37ZwD1dDQigdkRqVDU2T9CS",
  "key13": "iBryJVkA8pYLGypKDUjrsqhEVtNDw2wadVM1s7q3255dzHEBNTFGmyUnUXLvUETb9PBpuH2AkPbztnpFz16XXc2",
  "key14": "oCJuERsWhVFardTYGBp5Qohi1U5i8PVnZd9CHa6n3GrqcNPwAF4dVYpxdSsNuK9dvutWeBfrtL1BAA1NnQLBVNa",
  "key15": "4YwvMH9BBHpho4EKx8fAgteWuC11rELHNxyji1duD7Xd3GZg4KHjgVhAjdRg3u897kamLnBUyxntPjiYjZguqdhn",
  "key16": "4MhEGUmwpNMkC2fWWUipeSxLRRbcv33uR8VqLjKHwCHAd2o8RsyBYxjdj9KwUSTo3oENPYBNhZZUxT41JWpgTKyD",
  "key17": "3zQ179Dvc8bxYfgRYNPCq1VVNvN9Doax1nPT7DHXLdHfB6zPuyqPEu9gn43XTMTD7F9SZ61kVy9TQR8CdCD1zgb8",
  "key18": "4fX5gVHtwxTBvvLGVuEhp5BtPViXooBkgRucLkW1x3jmawGAABZ3gVuLYLbZeNQbEFu1ABBQkFjGsreH62ij7fFT",
  "key19": "J9xgWUhJXZ41wkS7NY2BXWryjC6JPv9TPuU889UNr5cqfNgiwvG2oriJCZrHFP6S4joZ6dWJ6jJZ6unBdxzFKsf",
  "key20": "tHbARGsUkQZwcAUvq3YsiJng2agi3UNBLaCjojXwX2tBDMFEM12NoEcNvvCesjSjA7FycFYT6dPVS2vDDbaoBwt",
  "key21": "3QzcvSVYXWywH3JHj4v6i5tUJNMHZgvZHQpxvLgbRcRejB2xVEWTGudthDGZiZRpTWcgT3hru43wpkaXPKiecRdq",
  "key22": "67oMgZodQRAcW7NtXnqAbwSKw8UjqYyTt5D7j3QSsGbsUs185pcYwqv5wmKum78XsyLUuv88o2iTq4Smu52ZzB2n",
  "key23": "53oy7VU7YBhE8TcYeGPy99jbmmfcN1S5wH2M93otSUL74xSTZrGkes6pg9YuSLKAz8TDGJfcNkHL9azgGai5FyK8",
  "key24": "sbozqYYwLNwJCu9pywq3MXnykD1rxa1wTJ51LZxTEAkbRvL72UkaAYfNf5g7t9bWpD366VCEkXanjc7E2WU4KHy",
  "key25": "4TPJhPgoodXGFf9Ci43Dev7XcL8pUDpzjLvKeFsfQ69JoVoHix48YaxgmePhPG8NLLW1SZ27kkxtKxNpdRgiAkBa",
  "key26": "4y7R5H1TK6ZcpKCCkYK26EiobWWz8vUP8VNdSbVbMavm94qXJ6sbAxHQGtkTdS6yWxot7ZQ7xewKLZMpUdwkoTFd",
  "key27": "5dzDrKojcA16Kw3mSsDzb8mQ8ZtBE442g2hUdQ59ffVWooxGb4erDxrsR1WQGV8SAMDTsjCQvjXw68wXTpEinibr",
  "key28": "43FV1HXMZku14Qn5PKZShXyr94i9HSNWhjmdNKNcghJUKYDh3MpEZGxiikVm6vv2qWqFTLBVLBi8AtAcchjCHr7a",
  "key29": "2dF5FPxErfjtx9jja7nzsMW9dXMsqWc9tYEf8f5aRdKMRUQmZnh9WMVfFuMwbmhXyQhrUbrpEDdYAKR7oMN72DtS",
  "key30": "47YrM5957L9oC47ZCUMawiS8EDz4ebW66cn2Wz93djqxLNkRRJaeyi4bqyk6t5JWxjBfPEqx6iyqDws2eAMHmFZp",
  "key31": "5AJgHRFNAuP8ST2Krmymo2Y4Tf8UVZobABzGibLPJUKBkEopNNrTJCWdfdySfJZYRr1Tyy6GF5grpWrW4666R921",
  "key32": "3XtZziZKiqLkXfsTkojxLSJ7P5EQVo8UztMU57ZBMDp1btEVwgAcvyjzf27XwnzoE4BcppEu71fQre7uSF8axwh7",
  "key33": "7LKEJ4ZkUpQ6AidH1zgHrKu9agQjC3TSPvTpLcrUbkS9RjzVZFj4VP4sHFWZUsQNYEo3w79mQKuYMS2jtQzqTK9",
  "key34": "4JL5W1u693K1RejZkHWTQxVz6QaJMTxk9p4DD8mpxCZiNGAkXYk9TKzScAJF9vJPiwVuLQNGeHp7UCEnBXzeczZd",
  "key35": "4JGfcxqPmsoVNaRdQ5JFytTfZJDPQ8tbLuoHVrk68GLfUzwKeG11z1wx9Ce7LPtGJLGcktEDodRymhq3eKXnwSZJ",
  "key36": "2WG8d8whNgY7TaaFz1C7KdJqt7Qsz5HeSAwdaCXjf71VLCJtuhPy9PgMj9Et7SFceZ4bvb9vefbx552kk8gwSJnu",
  "key37": "2XdvFXrMpZVJa3ZbECZtsYvny7Ck7WGswoCtLbaCbtcEbVBk6WvuHvZ7gXjGpboQaYMguBsBK6qAYP6rT89afxjJ",
  "key38": "2ik9JdXjCjwaHBRPTuxUfSwFLqxXrcqsDwNUPCJ7WSPFJoJSKfUtE6NQemix923vBWUFLnEVyerZp35k3viY25w1",
  "key39": "4apuX1jB19j1PWdgFzfC8NCgSUXajSMzcBArX5P6rCpuLy8uZ8wXDmct2CWvD4CVuyZG8enHN3j2dFWex3RCeMBN",
  "key40": "BeDd9bcW5ftmiR7arrLtpFhu3edYyFbhYNZVu5iGbWwVdfvJoviX2AxQNN5EzjqezJhpdri9kLe3zruuVuB6nim",
  "key41": "N5yXq2AjwLYCAmxV5bLsFiyGXPd4yNneXAqUZhWrdvMnX7z5c6tNcZHeNKkzWs63cSaPKXpqzoSQtQMRmWVLB2t",
  "key42": "4hBap9EUn4rViWEMkp6YCei4dVPTpcWanv9qoAhE7gnmHUfgWjbGMGFypXiw8DmoKB3cibeYzsqWpTtVfxW8zS1T",
  "key43": "vMwHMGJ8BRNBRqcThpHf3gPSxeZ5YUu5UfSjTXmYVJs673kmWmrW51o8sbB3g6qyfd3WfQoUVcPLups1h5o3YvC"
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
