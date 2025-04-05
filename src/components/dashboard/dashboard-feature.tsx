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
    "5yWtsVY1EFmzWpHjA5Gume5dk9pFVqqcTT6Cg6nabYCGWk4iRRGr1sTkdFTpcBq5RRZRtjDovV7fg3jQoFsieLYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KkWU1c9g5CAnxW92PEgJwojSPjTVcdLHSFCefGudLhbqahmuXN7nMqvK4XSYNx2Td8Zs8HBGDCVHm4ztSWf4qPG",
  "key1": "kYfSobaotMbCE9JzACTpPpzvmB4aNXb6hqLXcPeTLnVgcqxsMnCd951ccGUpnbHabavpWJDPnt4GiQGYWfNgGLK",
  "key2": "3ERkoPXSaNYR1fX2pMx4JVqbxE3onzGxNkmGzfs8iVTooz8ihJCZSftj7aCdGZhsaQHsQ3vtJzrVeGWj1UMef4Gs",
  "key3": "NWHByR9BqVppaq5AGZvvrVrrqxaNvLo6Svt7PgeFnt55QbWJSLpdyKtZqaEcnSKxRufPvttBJKKNorfkfPMY8ve",
  "key4": "bQvspGHUE3WU16M3iG7CzWYSY39bxyJZLLVpqatHVHyvN5LVJyAGaAM4YHjG79tmmQbZVhmSqAKHj6x2NzQQrDz",
  "key5": "4wpPoEFaZgB9yYRbaKVVzj31VxMtLe2uvRaW3GMF7fKFUKBqBcdKW4PEGotY8mBWJ7iYtA8hVzofD9qraR6mTEuY",
  "key6": "3dtBSHW2HWSbwRcEspQQpXg5SuaVrgPtzUjGTH1uHCkmj1yAXNdc9ohbxrFHLDRRdocm2mxp6dWUietRqQsqRHpu",
  "key7": "65gHXjJomz8Dd8F1Yh5TGSNKaLdVDWXtKCtKzHXngXBJzDxpQxJdETVoxxV4s7XwMotBLu8n9yYYugzrqLL4BDkX",
  "key8": "PEG5cMJyjwGAhHzrszvFbrs2SwuJAmBfNVU9xfrGwMXkVVCoCKhj1tjJ2Ena2eUwrqYyCYvvXc7Srcdem3voDbh",
  "key9": "3AZQ92FFN2T9jWy6naqYhbFXqGXn39Z4EH1pDst4mDqb2Px82J5FiwCKCVNC5cphAQXKLwV76tmRXeEjuqEX5jdd",
  "key10": "2TWszG7xF6rbDyinNhu3WisktyHNfebbQqBNU8XVeM7UvtoQphngpdBRxWEgjeQ7iMGLGh7vP2KD4MP7QbTg6A1S",
  "key11": "eKPj5a9apfD76qWHRF5hReCYtgbLVWmD5xzciR4byYkoZkfdpuCu4Wtbryz6LmVFjMn3wsdYExfCrJr9tb2JXK8",
  "key12": "qxSpUJwrrVn2S9RANQSCTTtp9Y5GtfBYRXZnKBsKdA5GPVp3JBkPsPQ1UAUSDNZnjBy3mBKjZzcXnEgGe5NwzxT",
  "key13": "4m7kRaudYAYtp6UvrMrVeeYHwGR8kPg8v3DiCauAQEpNzYLEDz6QN6CE7FPwLFCpGq66zVtJzrMgRrXNKZ5PB1D2",
  "key14": "3RyebnQ6QQkNcQEvjyMPHUnBgVFh3jadtdjc7xVdRQj1EUm5aYawYUtr8RfuiGDczFtF2qzTtByp483GN87wanUf",
  "key15": "5wwh1FALqzDnUyw3S1MXjcx4wEcyddkc5AU7TQxfTD2P3kaTDpy9JeLJQ9xAPYTuku6wwEHiZxcn6N1tRY551YWx",
  "key16": "669An43GiEghLLFaTgLontgEqAjcYzyH6t3dtMj1pzHxraiWRxMws1X7nCZxyGTEPngH1Ub2h1A7dNooCUavvq1r",
  "key17": "2n9qiQ9Yu3QYYdqXncPcuv6sR5uFqEKNrRUwaxBZXFdA7A4uuQ4b2v19itLT4J8KpR7526grmxjyvxCdkuzVnGdG",
  "key18": "3AiUHsUStAJhS79WLEpjwUXV5RFTLkcVv2tkzEZZmR8JZ5oVp2zpCSEBWA6MMiVp7h9ZrcDmtTqPizB5w1JBPMY2",
  "key19": "3pCaDj8ea2vJi4VfxBGCyeLRz3m6V5XYX6a595Z4VVQLbEkiMsvkdXNt2DkjuTacdkZKeqZySSRAbwijDoNNmag4",
  "key20": "5eCQvyyKPqemMPqBGsBmDWvgLoH61na4jfHForZdq4qiu2gautF8rq5JW9EYKbRXaJLLqnHXucGSWXSPiGcHnoYr",
  "key21": "yhxDz7HkSfz7UvbQfCBmzk1zHhfZxWxfXgZ7vi4ZKmr4mJjbcdxrdLWn3DrMdcrjShtEzsr1Z5K1Ts6rCEzhT2k",
  "key22": "5a4L5aTRxTii7NmcWGfJDc7fcgZ2kUGSdfhrs3SnCKr2g8ssi4gdvTVJAiRTphSVeDRPTYN1xuinUwjHXGwPPP2u",
  "key23": "62VxSak9G1SYzfts5HdTTvAQFfPLqUvk8xg7h16HsQtwiMJc7Bc9XTGnYQmqoQ11CQdPA1c8Q4X8DULfu12zpUnV",
  "key24": "51rApX7SUBYQG11mrjA7JKCbUVJiR5mAv5LL7UGUhq76RgpmagjTPh1v3BAwtMM6ToTuASpe9GnD7ZDEDYXVudCc",
  "key25": "5Sf5YGt3SUehwwibF2YizYqUbD6jrmw4EW2J1VA5pywtoX4NBHd9jycMbSZsvoHujmH84MHsCPrujziBwQWUJFjW",
  "key26": "67dPw93jvkFFaqdsnvVrFPoQtC3qJ6sZZxcP7osnJTBaJtn2DWsWWnuqJKYvNcmUNYsKpEcJt2gH7vuZxgqWFkDU",
  "key27": "j7mwZewbJu29mx3XGUV2YFdH4ijZpLTSRG4jC81WqXyeWT4K813vHCjTPq4dqopjM9bTJauWGCBKCJiUCijx9Na",
  "key28": "2NogpELzEGBhtFNctbzGYhcMe5xQfmkwLNc49884AgNavoipEB3VyTDk2kzLRragVfraAQJf396XubLqsN8kxksb",
  "key29": "2FRPuqVVHMe8F9WZf9n9EYYy2ArKzvQaGa9VmTt5GVK4i9BepgGVAJ6ckaQgFQCYDUiwo4qo5EgVWUVhz4Lt5qyi",
  "key30": "4xUL9gUGQt9zTSYx2AyAMk4t2WZXfYKDpRgKgfAuTuotAJ9yDiSvnRVjETHMwiWErQbp2NzR626kfUHs43hACGQW",
  "key31": "52afFQzvJwHxkuviz58EsoCZwGYCjXxAX7BAReAm1zFjxreDoa34Fdcy6Xbbn66ZfTYQzBze2XS4jMpoe3VgLwSP",
  "key32": "3F7ojPGHNLufjBi56M5uxG2wDdwJnhiuABfwijs8vdKYPxK1qgxgLwYHgYxX1fjtDpzMST1JUgTH3AW75G8iingZ",
  "key33": "iF3XLNCHKS29eWN8aXHoCAgNmGZRByR5JwhsgYgo2oy8boMy17bUgg3tZfZZifD9PcX5WZEY2NBwBBQ2kRz8Vzt",
  "key34": "aswadWcamRPrFxgmDEhKQZ8MSQLuswD1H25yfCcVRSxVbya4YCjfzvXv3jqvKDnMnQ3FooMntWE4EWbcfBACy6K",
  "key35": "2D55wPyi4DACnVeLbugyWxyiHxfUAU8vMhbFqeUwu4p7HCKdyjpPc8S5jvJUWhUVMQV1Q891X9fy8rXSGpA2o6H4",
  "key36": "5a2s29tKr8AanhNpS1wUKSgc8UxWgPik2wcUpVnRNJco1banLDBqQKBWaf1aDwZ8Frb1TnpRMB3bUgF5xLFMNEqM",
  "key37": "4mwvvJHqBN8nvLbfoyCowci5rCRBRNgQQnkT1FwnWdXiVZSmgb3Y7zbc1Bp5H8vLU3EVFPFhRurtZPo5FCtbmubY",
  "key38": "2oHG7SJfaR36ZyxZRg7QF1LSfngnyBVHZYStxUV9cqEtTUJwY64txTm8exa5UsmtxuNDv7ysFFdvGN6HJQLKXQKF",
  "key39": "4MzhYqRjxJWrgYLCCcUA7MTGwVuJgj8ghjYmKJEd1wMnSYxdjmo6NANi4AjWwhwUj57dg5avT62sK9BqU2wUYGZY",
  "key40": "5R2BcQ81Bi2BZ8zrNGZUPFEHqwsu9SWM5J5NS6zBDPefruU4gVwuUJL2CTcgCZTvXPdqoRu5eBpbab2ZX7ebNZk1",
  "key41": "4T5t8VRSthe2GnynH9CZj6wt8GpLxWT4YCLWZbwg1VctuoBFb4cCTfEm4TMA2Q1nFu6TDradKJuVem4X6BLegkHw",
  "key42": "53frqLWZJ4DcL4VA7n46J4AqmeLqaEL3817jMdz2iKZHMnQiKCW3zCGgjn2B5kLmUZq5vtwZ2QWPEizXNCx6XJtC",
  "key43": "UogEZqUPDvN7oxUEHPNhQgotsm5kmYqwJbfEumvTCRDFXu2GgQJMsPSeK6NKsReMkTezxBJkDKJVP6tPcLQFzUF",
  "key44": "3hXNr2WaQ2o38WrdGqQju4CERJkwhKRuSXdv6L4QbZHqks6JVd4p8BvRwja62JGj83Z9EKU4D6z8P4rg1NxZNzUm",
  "key45": "4iEwRWWrCJPKfF7prJbj8ERPaBLpjYTcazCFqAz5RknSzyHhqyddyJF4FN8yZ3W1z9Po9RbPF4UWpKouyTHmxzvb",
  "key46": "41a29PkWRptMUxWKsFottppsMt7BxZLEqcdeurxvoovjUtZUfVMswDTKF1H7p9nQowH16mhBpAFWr2Rrh6cDid7w",
  "key47": "4Vqm3amu3rDgSESicEWbxj3nQcTmanAnQhfSFEhKA9232xfxFUkBWvnMKCLnWzp2GMcDgYT38FU7jS9YPuxf7XCf",
  "key48": "5ohbjPattVTBZM24wHNvJDd3GemSn6Rbk1QpJSLf5mrXhsAMnYp898TB3vtTJkVE88iyc3tFsoMCzeQcS1St5SdU",
  "key49": "3X49oGFt6urhTHoqyMxh5DkDWxM1rkyjrto3jeFckznsHuNpzBQ9CusVx5sPEZmC8PiiYPTrDGcRkwDRJihQMa9t"
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
