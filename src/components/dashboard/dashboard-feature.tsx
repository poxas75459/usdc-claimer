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
    "2yNjAFudSZ8r9GDGTPKQV8RitvEK1MWn88SAo1yUUFqCdXA1SosotLF9yqe6sFn52ZUvDD1ELQ5BzjD9Wu141viq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eax3VDDTN1vFLrcx6Sc7EXi2kcb99Fe5LCS6qd5VfAD7wEh2oxcwKniRStrnsGyHiKJwSL12Wa8qWwjmFfQNUfQ",
  "key1": "4ajwqDKfbuXzR6sNnZR5mm2aM1h5h7vXMc7Qj4oXwuZytGaktNWNsvPt2WtMHgKbE2Fvftpt6j4T9nL2EtiZ4E62",
  "key2": "33gCoaQUq9VJb681H76MvTFHUQ4VvTmUY9Kq44ggHbVVFZrJKEr8bmsXocW1XJaUxa46AZAGYZ6oqx9ab7nwD64z",
  "key3": "5gTHL6auiQoGRp4772bKKBHkx7wLJBxuXDoEsTsJeR4KyKxbjBD2EABTTYjx1V96BszZRuH3Aq14vbUUXBD6ktEY",
  "key4": "4CFX8tzh5KQs7KzZj7RrEpu6iHnMP7hdTAonqM9Bxk99Sm4iWugz9hm6uxuLJo8rMgrkcXw3QwGS5JQekT6ogKDh",
  "key5": "k82EGMZqJXnm2Le6U7b3mXkwT1zkS2hoyJxUimGTZtzoXmLJCdejknY6AcHvdXTS42t7a8cBE9vyCmGbj5nSzW7",
  "key6": "2Us7Fz7D2mFsnyeU7uB57dPnzkgCzwmB59FRbzrguanChqQtNvb5ScwrFt6bSLJJ9jWY866bdhQSbz6Hq1fpbcXq",
  "key7": "5vq7HkaDCRNGUSS9ChBMriGrTBvFVXQrPfYBCPSeNvhtH2BGwLK2PoYAru4VsDtr2qgjacKAcjwsujpr45CPhT4e",
  "key8": "5mYoyuGgN4jUFx4CoZxorzxMYiUCXvQj8QE61jKPQjTRRMGYjzGXv2rtfA7cSExafeLkMsggpqvuKhxmKUAUoNKW",
  "key9": "5LkapUW896bfU4QHzzpudT7fCVhhMN1F58r6JSuv7uJg9qXwFLYWoHcUr7NRcZbcaUP4w93UQRXCK6mzSBNMfyd6",
  "key10": "szv9GQ8z3KR7bG7hSS7uQRemNgCzSieGgEtbedVZfkEEuofVHnvZS84KXp35JKeLVtWZTC2X7SNjGdBVdzZxtF4",
  "key11": "3XFrgt8xJJPsgJerdvSdJzTPaVfhGfjcQJCwXNRDBWaysH5nmDzSW2a48JsxNcC9UPcWSLY9KZe8MrrNv9d45pn3",
  "key12": "44XqBZTaDQ6pfh66jGuTk65QvRKtY2qkH1gajWdj9AfYbNrqoJhpsaZTV3AHRCniwGVKzopYYcRe7fyPQibjHuXa",
  "key13": "5ZVdaJbvJYJJmiT3BML7QY7S8vsL3VPt9JTwXyT7cn7jshSx2qjC5amoKANMu5L14mKynAbLkYQMYCNyYu4gW3L8",
  "key14": "2rxaLmGrrBhAnshipMsnKdkiJamkN6mFocXkqLf7Erjy1BYBQt7kZqn4jjjwhKMvYN2zC9azdUHefQbQrWCvS7od",
  "key15": "5iJUm8mDPnhGb5SYDNuhqCN1994LxmXAHBUukJKB8UPQDxLnUyCQfBSgR6LSygWkJbrgiQNQsqXb8buTEUVmaR27",
  "key16": "3gcuGmEneTY7EwcLX8QvVsy98smM8pDa52bwnCt6ggUeeqi5REv6wt4dGSd4LyUcNtpziKUgZaxgeT76Jzk1YEUc",
  "key17": "4VrGDq6DiMk4Jeq1PJxjBLPRQD1wX76L2tLPX72E2o9udZxe3FYukTwTDuHBbsqvjZMJeEv7qHpjxBKP6AP2nNCU",
  "key18": "kpzopAkTAEMSBqP92dEvxNJUmhvsDxQaiDsngVzeNSB6SDxVHJbqovLVznMccAKADpC7tXjXcYc1XUB9JfoHdJg",
  "key19": "eqRxNMtmt7NkebfLyxp6XAM5sNB3zG3UsZ8waLUCtBERUvZH3ftvBGpQ1zPbEfJPna25oJsrTqixcK9JkvnQVGH",
  "key20": "4KVd5PxzKaoRqwssShmcARPkmBbkE5FHmd9PrnDjDmthFcLnTCnsvuWeY2iyuo28z1oAUa3p82KeqdACtPYst1ZR",
  "key21": "58HgDAnroZYbs5kqJ1N5BTwbAs9JPbXAo1Fd67uDeWx6WvoY95pfPfk7giBqfvkCYn3sAqPxfhM1hZJjjhm4EVhc",
  "key22": "2qaLLxWi9Utwx9wehiaRxxhkmBctwgqckzFVY8LRXDL5ka9hXTDy5n75RvoETtGJ6RfFQdUTzVviUcir5BDeutKv",
  "key23": "5QLuUs9wYEyDEbWhPEEHrVHNdg1xhmcnU2H3H9AtBU1GrhMAEzyNSoroA3dgbe7dpgGToT3k8PJDqifMt9VDyWn5",
  "key24": "3JFfDfNepomy2d1YnAjdbDNHhTYWA1KSiHEUWce7i8XLD22dgJ1noKsoX5kLcU33HmiUekYgb3EK5rDVM7TdmzKt",
  "key25": "5ARQ4BcvvgdoSmDFzUzRhAJrWWMFdhdTea52nDSgMig7ab9sZoSE4eetFoGe7sb4ZqVfJvjoLBjTenzjajiXvR2B",
  "key26": "ZK6xD8Jovjku6RCxxdSPEqNkth3tbW2KHq4o5nQArTz7BdFa8Co9XpTK72LCg9b1voTnDznbYsmyEGaBCXLRwEb",
  "key27": "2HdvPQgs9sQmZipjehMTkUb5e95Jiq6oqixQwbftUeq2BFzE1v9yMXyK9cy2agxaHoef4xLYPgd9nYrJFyxQBzhY",
  "key28": "5DKPZ3sZWmKyED47S5GZoghbYBwNf1sKjzpXEihUxcR3yRvgJngVYM3CHYbjTGg4GCZtdpQezxCFJ4u9XNXDQaTa",
  "key29": "47XMcE41rw8VERwKA1V54LonGV1CB9HKhHESUZnL9mzDddqTtwKKcYqC4hX8s2JQX6VfTvR5YidYPkuku8sq4jrh",
  "key30": "5VXwMufooh5AKKSXRM5tpd3coM53NakdhcESmHUt9pcbTktqrcEmpNyGWZJnf8Swvjohn22PzB3nD7712Et6JjUc",
  "key31": "5aByKgDQaXNWZcipzTdPsYBJm1sGb26iPz8pgZUvh1vfYUtDCRPyYbw3y2yALJoyPUPtUnrnd2icy2AaXQtHwJTZ",
  "key32": "2ibU36rDRchtQhDgoA1W4KgvmAqFAhVHMut3S9qXGr9LbreYBKNjcVERAVnTmY4JneaZvHNTHLxH5zQ9QvH1uU46",
  "key33": "ViMEgMb178ckeh9p4Q4HUgPCBFptsgEwHnQmXecRWoKh3Yd4qXXLv1TfYyHVRGwDLdA1i9hxGxt1KPu1ECWq9y4",
  "key34": "38himD6BD8SUPckeRSKfpF12zy7pqqhyqcsUCyEhknSddaWeSCWqemrVA7GEav7X8xaGSWgxwERnuwJVWotkJaAr",
  "key35": "5iaCAn5ooAwNwY6ZuCNQQAgEDma6S1VwUGU1zsyRDxYmSuWgnJwRU1rXwxr8N9aKt98NhkvtSJWZAvd5spRZ2EqC",
  "key36": "2pEAaaZc4M9zfz6GqjSJPmJqrUYtSxmoXWZ4BxNa9iPQ49FMJ4wCGd53BPBWxeoAZ6pwwBytvcqs9DTJV9tkMNrB",
  "key37": "3dPAzbap7wZrDEp5P1mBchAGnB8Vg5mLYygnBPYxW4KMCFpz6JbRjNRW89WhcYqZmNaCGPa12ucgePJXP4yk1dNG"
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
