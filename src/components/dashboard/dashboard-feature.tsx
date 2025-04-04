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
    "5fPvrpn3nCYxJ3bqr1hQa3nYjyRVg92jxYd8Fuggpjd5a36YpFfDwW464N5SuopcXd9Q9U18z6vxZ58ruKpVRHdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mamt6KGYt7Zp6ucX7UwHVJE7ZVXPgL2YZCDL2qrDpgyLwBCbBArVav1MDbBFwzDyRwWKzoEuPgsQoC6kcFZ5oUr",
  "key1": "4nHJSSVzyHJnemjvAvFz9h6CMKtp5tjN4fD8vptFu5mtgoiid6MBR7YdjoXETe286ooTTQbrtEsD7ydakR1eMyCZ",
  "key2": "49PAasEL2xuprWeHdwHr8g5tahsBk7hHypZMNGqYTJgWDxfVcrMVeyjSz3v1jFWiKTFfTd8N5ucLN6dtWsZWDZJ6",
  "key3": "5uJcKs3HkMDpTXD8jdhU49GZriLcMz4GXD68cqDeP6phRnY4wiEqJwLZPiu1h4CjjHpU6xoTkaH1WHyKgv62NATu",
  "key4": "3QZQNtjNPxbW26P69CHkMDV2X1FNqnMNtjbR8MkvDWAYivp34B26tbeceDh69jovYJpd9SLe5NuGRtSm7wm1BG33",
  "key5": "3kNexkqYAY8aoan3ANCvvPqjaZ8CkRfWwLNA8zAvEaiL5MywBDTzSFu1KpYv8v4yYh2L1zXE7YZwV3HLxybyReFS",
  "key6": "23CAhyNrLbZhoUPeDqwiPSM6pRhkgR36omifFDxG8DZWmkUEeAK2G7aa7bBPAhF42cGiJFUCQcaHa7zmUQnPSE7X",
  "key7": "46Gm3EEqVXBSg5RcKEeRJAvVfACxiegPkmhLxNbHkeWFMWQhosa7U3UPSE72w25zgVH21NMxhU7zvbvvRmZNzpkd",
  "key8": "5LsdcmJ46RAJiAwUZ5u3zBR6UFByDuhCPsfTLY3BiVFqSqMcuXnJHJk37CtMx5XV9RVZLgc7W3mCGxzewidDqLzb",
  "key9": "2ezEJkTtpa7ZSrFZhSh26y5mHkdKg4Lmk8RGd1tT4AkepjvcftahEsi9f2BPEhhGUAzyUW7L2PWLZKauCqZK4vFx",
  "key10": "443ZEvWZwwT68hEKXDesaRetwygQAR9PvUFRWhsDTiZuwqgogcTkbUK6qQkMqKPUMevQfiLHVhjS5csQjjpAAD3f",
  "key11": "oz66nyzJ4HzxsrWohBWFNEwWsoMFfVFmkmWPWwiFPYtfaVCrxdo5TtaKckEoKi3EEF1ZeweqgvdEGyTJHUs1V9S",
  "key12": "5MmUY7gXUHmRyxNrHsjFeTzVfJ7ASJE52kCcQfw1nqi2oCbr8ryLaRNNGrHDZQMdK1EzJBCanxK8qeHzFardYVZJ",
  "key13": "62G5hUk2fydTAgDberZ9P98CfB7tiUgaEJch3MCVcw2Cnz95tNpxc9ZCDcDy6RUGvqjNcKN9LqhYALTobq1kjumE",
  "key14": "BPX7Hhb1NpqMecuWYpSAwBCFzD8RBd88rd3o5hqCaGNRRQU7zsBXvpM4kXEv81Dr6z1FKDgcn2Em5K9hZmrzRqv",
  "key15": "H7nwRLgeuik9m83G2fEPcuM1HSxAaa1npwBNdtvLW88128ZPJ3EBaXuiGUt3hHzMpAZVC3ci7an8jM3T7v3sXbp",
  "key16": "3hxJKfcX8PtaWiL7kY8dy23jysZJPPYCpJNbmxTXvcEZ6RYXhDZrdaAb7waz54boTYriozbCUNM2HakUsv5YGgQc",
  "key17": "4uiGyCM921mXgz1ygd9w6mrgFGErc2yNJVV1juNbEJhhu4rYM5sJ4U5qDf637TK5RKAgppg6QW5fAu7bh8RErT7z",
  "key18": "4RGrx1suMvyTsgqoMX9nU1UoB5Q82NYPGP7Li5xZ8KaigpkApwumeKSAd3n3s5AGrSG6QDJCdqoW2UwifojsC2nd",
  "key19": "D3oGjNrSDgnjaUe85vyxtF6LWdiDV7Vy8RvaojtUen6YF6ADP76zTrcyktKbn2X2xWPs7VCRXbrrurh4RVzQbda",
  "key20": "2Zq6nSrHDZJvBiPAVHqZM8hrT3bBNFyouZvas61wop7UbVxYAjKskmdxafWMHkVToc3EWoFN6HvdG9LdK9kTYY8E",
  "key21": "3qTcvfobmqkYQh26rWk9ouVCmAD76M4ozoXvdWM4zUxhmHXwJjgV9UMoSApR6YsA6qrtcYUWxyg9sV8BmuDJ8pYT",
  "key22": "5ZGMoNJyK8gf9Q87dhQ8x3m3RKcaNtZJLrABqD15NTcyJUjfw2B5QkbEG5eUkLFUTTgE38qtx5eV3PQnXsxWNosf",
  "key23": "hhiVEzjZC9mcwRRY14k9z7SyxMpks5SPe3yUAUSXgSRDT9wRtvZwqSnH1VF45sejRgqWwNmt5GXpGjmwRgjL2HJ",
  "key24": "zwVcYbJCbDu86pSxT9Hd88vZaFDL2h5gcispQ6zyjRkRcnBERur5nmyPnRxBirHtPfw5Z2WLr2qDxXnfr8Lm3zH",
  "key25": "3Q6RsvfWgCQvuTY93sunT3zdMgtmBb4g7heZkpfurcpaz5RuJvYsWi4NGzJQqrjHVFsfKSF6aog41YQ59LPfcxG2",
  "key26": "2p1efw26QK5pZwMhXi1wDDVdgf1aWTjRvFTQ7SuDZMhnN85c2fcE9nNMDN6iEi2D5eGirjcCoGsP3b51hwT7nZa7",
  "key27": "eha7j6tmveMF8vRhaQ2x6FtpATvKqwRVB6MCiNEAFhNYid3WZMnspTcU6CvGV8JiHfNL3of7JNW5HYMR4SGH79n",
  "key28": "5Ca3H3Nmws3s9WBppJoRUecHAvZbcjNL6Vy4rbYT2Mw99fzc2fjkfrRZAHN9aTBKDzgrucRaxWDVHpwcJm9iTfBP",
  "key29": "4AbkqfondVFEEij2B9hTsGAsrnwvJrVGEZFjb1LCQUbQP1dppWpAQALGZpf6c3hLQgM1W227WYUc6UQ6tgD3FQu",
  "key30": "3C8a8YFGQD54wEVjBp98WJtMhdrx2Dw95atKSNuroh7AoD76MM8B7p6CtgiaGQ6pJ7px8XNrpChXJJpxwarWCdSe",
  "key31": "3yB2M5v2yPZQWn5tENmYY56DCxKspP5mLEn1L8cWhsm2PtBkc7HotoUxEk5nXN7rV9ujrFWNrJLc6W9NHf57vvme",
  "key32": "5KTBTd5E7Tw28C3kHG2RGqkJK3hgUzCt7jVdbHEXVXNAFjfeYE6rM7Y7mjZS8FxAojBq4QABzdQg2EGNfqsMqjXz",
  "key33": "2dp6tHs8aHKkM4T1KWGcjMu92767tnT55zCTvXAkV1ZvR5sUdwUKZ7xLoHdoXfeZ7bJtFceXJ8fMpo65xtWgxQjg",
  "key34": "23Ta6as3airjuJ89o411pr7UGg9aM53komvXh4r9Xy5Ex52yTJkFj7mqzt4QVbTQ1EbnJdaJEteg1vMwi2hawL9B",
  "key35": "VV1kMUGrLrCguadj5eoRi5qkn4XYWRhKDTJP9wHeHrCBaa4bJ99SHii8YKikDJJ4eg1fCYEeejAYkhdwjmyxkDr",
  "key36": "QnwQzAESiRDoBM12hvaUBYBi8HmLzADJvqyEVc8zZaVWcJ6ER3GMfrkEfG8yH5PdxMWwLXXF5u1WJEEEHPfeCuv",
  "key37": "TePGYoabHYkiA5BSd2JcAZdxZrvr6jhrC3a1LsTCQS9Bx3gg3TQ7T5f5TyDfZ7WD4A9R8mjhmJC8ZUAezPnqiDY",
  "key38": "4BvbsYcjmUxJfG2zy2suKHM158rBKBdurTcZghpRLY1L7wqS7aNZFWhhX3fcT21bK3mCFA3MnUr5QZ1n6u5xKqyT",
  "key39": "gaBr35AiWHYQE4LANmxHVbsWTcgJqjYLzh7dQfG2YWeatj31yncDMnYoTuo5mxXmZnfEgPAvYB2iZj2PKx6Bok4",
  "key40": "3yrDY1T4zjRasHGA1i6ZGcPYTHFf2BAZnj81SpMc4YkQbDk8MAoZhLL7crJxr39FTkEh1feLbS5Zg3wRDEnbLdjf",
  "key41": "2kpSkaN4i4QpeQ1gf9eZ6432XorSX8P6XGPL7N3qcmKZymCM1nnqwLViS4nLf9G5ho51sBWULwVkpSGvre2G1K2G",
  "key42": "3E27qQfxQpCUJLHMpHaRYoTkagugYovHQQQdyq3U76PeWiy2qmQZYFt8Hn6rxUXycjSgrTzMnfWz8SvNSdhGmTjC",
  "key43": "5ywNQvBaH8Rkpjs6xJhSWrs83PDkwx9uaf93be8d76JkXV1pLDNo7gAoYB4g3uP7HuG8c66NsJKYij49rddpSU8g",
  "key44": "5P13VMN4x5Kn9z477WqEQ1LPxSAcZzjMndRuq6Bu5x1dXcD1QiMzq2pmG87m8T3GNNBnfHFXz6Z1QW1yqZy3h2sg",
  "key45": "53F16bGQjmpAXafRrEGEYL9pgW4aFDxSHZ6ADcjXtn5eNngk12CJdxWvuzyQh7JbCqRcYur5X9CdPx3NsVNRVoq7",
  "key46": "3Gw8g4dxcL8K8nd3ztq8vdqayfvBu9yCsHmcDBqJSNzZmxVBjHXPgGQtwjVYYoGhL6vXLKuKtsLEYsRPRyjKAV7r",
  "key47": "f4n4C8EyHtaEVHYoBwMHLX2N6UzLeSstHzmJRRUUuJFWjb4kQURoDZr45bZNPiL1LA9KV7MxQNjEQhxJ542eyhA",
  "key48": "42FBdn5HBwQhnJCVvbT4sjxSsh7k2mJSwtdoHwUvFvYwouSS1npw67HwoZPaS3xzC2p3NnzRS7rRjnU7F3CrNNf8"
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
