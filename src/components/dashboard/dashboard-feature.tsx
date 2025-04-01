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
    "wvvxeeXGUE5sgpq16qGzRwHpmQCZXNVZF2w9752icxEQYj34jjWneYheWhFVdbktdooeCMdeotuyga68PFux7fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMJbHsf9cHZPp4jyreWqrTNnnAgCJkNpZLWkZYcHWSTLkfbeWNKAmeKZXaxH5bRhpHuHRmXDgT3orVgHK9J2hnu",
  "key1": "2sTj8w3vnVqHxnEAcz7Ly7aGnnJ5JTzsSEFQ1p4zvLKxuqqmzQwXx8A14s9MTY4MCofMKh8fFtJKHKgyQVCg6LtB",
  "key2": "2Js7Diji3yPddzKR4ySu5acz2DfWTLzaLxangj62x16bYCP1bHoYycp24XxARrW3yVuzuki6pF2t2u2RrMJmA3oY",
  "key3": "HpjJ134fmFivG8xiSKGuhdgo3m4CG313xcD4jWXXdRhDmUd6sDGKrRhTXSaw2dRUvirRJgK2xRhGLTXdedP8KNL",
  "key4": "3ZoLsx548hmMuGVndRWXigchTLoVBujceroM9JihxuRj15DXNUc7Besvs1Vct1LWmcNrfV76ECMUY1hDuhWaFS3C",
  "key5": "53gYebH8Faxr343qaV3Qozbiui7BScyAPh5UVrP4oVjDZ2nXvHgJwzxAMxEDPbZBeQxAR5sW2T1XQUi7zyKqc4Hi",
  "key6": "54x6MztFzD8sBaiysJQRkcHPpfXLaDgndQ4puc1kCJMKUqztq5q1ssDif9r1yJPrbDeXWBTM1kfPU9bfSsEmEDqQ",
  "key7": "4SXCZ5snbcxuAfbq1bkWgRLmu9Ygw3hNcMDZ6grYAdWG1ZXagMiEqt1pTLzMZiiMjiCtQewwyuSjWCfQJZmjckz6",
  "key8": "4C1bobWL6MvXEMwDQhpMZbtESS77QXhb2BHNa3yJMJdqa4eqobqCWJeTpEK5fZiAS7C24vM3idh155AvdcSUBHrH",
  "key9": "5jSCQaHX6ChcULqA4WXJycg6BNCgZfvX67U16xHGvqBUKNphYoUQuugqmn6vd4Sz1uWocymd7SDAL4AhFQqcVvQN",
  "key10": "5qhcPX5WoTzjMaqNApbLy1uyiU5mNx5VVBVGpM5qbhGs5fY6V7ab4tD1opeSeZUAiqrs9HLHWFGteGTujGx98QPf",
  "key11": "6v5E6Up9TgxhaguqnFgctiUUc4AzvadxQ2XuDGQ7vMv4vSWAnTcd3fSy1Roee4BKETsxHQAczD5SuEaVFCCsHjQ",
  "key12": "2P1dzQqHaiqRGQmsj9HCeCGzrHmXSFBUpwy8C63kSpMT8SnLzrmukMs4iSARAC7P5m8tXity1oAzm3niobZ98L73",
  "key13": "3VpZWRnuHHY33ZsnCV1FJJi4d2VDoaqzd1W6ou4qfEJTCZZLHPJbtaEHCLJ6hGZxnSh4fqXMWkGbc9rFKjXD4FfK",
  "key14": "5MTNg2Ej3EvBvky87JE4TH8rGZsDsm8mxrbf8HTzRPeGfAfspWxcTYj42UqPeh9JCmmnUtCKGfdCktVbCEvcG1SX",
  "key15": "87BxvCk51LGnj9L9zzuzzwgAfegHr7PPV59bwHtnp3srrd5ivbb1sfKJAdCZvsu8dwxyJ8HxKqY8Ae8iyexZEKG",
  "key16": "2WPeFGUwHzB2rzRGq8oza4TBxNbBDLMZYxM53TLHwDYBAH5d7f4EUudXcVjq2iZNpCb4a4bUQjZqKVpe7piHYp8",
  "key17": "2v2YSw3dMTebyWoia6aMFwH718MCFuLtRuaLjkusMdFnxGWKK7qyTyK4imTr4nJ1dZmaABfULxPnrt7WPBST2cCv",
  "key18": "5AMuVZs22dk4bHVj4Dpv8eHT5jRAUibuxjZv3GtJbgdawC5yLcum9mfudJvcz9YLxuKWti89H3tvsg1WwSVhPhoU",
  "key19": "4YYqfAcp32LEqsX289w8aJRuKXmSDxU9RBU5Jkzqseavum9FUAVZ1ug2AEWCQiwwcYJvfNz3WBBkxKf6m6sW1jCq",
  "key20": "4iNAw8oEBFrTxtKDhAUpovcC63ChFfSP1oXoksZtJdKbZbyBPrDLAXBqS9UvdxcLfgsbDgzDEPZoyS7KDKQJDQju",
  "key21": "2SCFgpYQMugwpKs6kESG2A3QnBTPE4yeRuVx3Lg6djjHrSdYNmy4jX8WuznPRCGBeUo2eVLhpNYSDCFrh2fHBh2t",
  "key22": "5EqKM1UmrfWFe1NijMRdWDzVzcnycWeEjz7aLKcM6BZZJCMFUNKjaFyhRqh7o56i9rUvmE3DPQJw6ErRZ9VBMkMJ",
  "key23": "4nG4XHSSnkSBzMvkXZGJvMbuv8GkSSwPTSAuv4qiCc72FoKRecSY7XHLwM6tpPU4z6U625meFkMLteVyPkX47CYi",
  "key24": "2JPuf3pMbjnmASpY6TGow7Mu6i3ZLZMArCoXZFThexndJh8f4Vfs58geZW8t6NFH7aXGLi8aFS7j3BNk5EeipXEA",
  "key25": "n6wwmeQnWxMFfC1vb8j2bFBgDEwDn8fbPRFSyRUEkqFuLkPqsCGcfnDJoyvjfAcN6AYxiSNQ9ppoV1YaazCNv3Z",
  "key26": "2wdJJGn8aLQGsTR8YhMkL4BgMcVPD9pc6zjNoeS2ysAfvJMCwiJacgkaWWfjpCd5BUTcPJByuG8neGnc1wo3Gt1B",
  "key27": "463qwZiHpLPw13WDSFrSzAAPch5JbPL9pSuRkj4YfukrWX1DEtYBTaA3VAFy4tUEDyNJJ6YHemaBBow8pnsHqjaG",
  "key28": "3J3VdNXnFsAaBypQkehq66ESa4zrLzwtHv2hzEcBqWHaBC7fkeWXi6D4jnBSYpCFhWZMXe5t6umix6DcZvQBXZNQ",
  "key29": "GQxFc9V9JT5cDxHHWs9QGLb7zcFjag2V92YMbddt2E846oKtWJaV7WY61YQyHrKXenDjT9p8wqQEwREZiD1giV9",
  "key30": "3fxpA55zNRLi58ih4iQ7U83YU8xn4f1MPJFyr63jMi97F8Fzn1iETBZ5gXzyn21y5kkbF8Mqjz98PuwsH7o7FJqH",
  "key31": "rBQhj6J8WdDs8mN8Vfw3PZbZsSq52UM7EiuQdxZbrQX4grSS7WcS8vsmqdo16y6N9qgKBmuathA9jFk53Eqno3L",
  "key32": "8cfeBgFaGtNz9BWTo5nRdpJZu4NoKDPKjHfZhxq4EwybXfDTN9Scj8Yfj1nKnTFJ4Q18meNuG4YFKXrMfi2S4dD",
  "key33": "59un3MUkUdPiBdBd6vdbMp9hxF8eUZbncAg4YEFvqF5QVo292ErXKK5JdBWazPEPDHmE8AM89X5fY7WkUuCM3Vr",
  "key34": "45XgkoBWtC8UfGyn3Uni9xa1T34kGJuRwUM9mFxGhm1fUPw7gv4rm3DKXhXwqdahJuok25Nr7ApgAL9BXUBtPsJA",
  "key35": "39ANnJHCuE9LPPPRgih5AYaRJmoCH11v4w3bj7pUN3xyEpao3H53phMtakBcJexAbcffZFjbioopidBfrrF7VLcR",
  "key36": "21a6WgsFM12MXK76jR2UPWfNYSg1Ta1yMS42wBC9Ab8rTtdCHMCzJJHACnqhU5Ec6BsZ5Bm1Ev6YHGX3Rg9DhoA1",
  "key37": "28veXxJHmYzpSsevmJduTHjCey3p9qK67Duff4yBipJXEWhshjinjz2HNAvuWZMPwpnusTSgefJPzyob2cwUXaja",
  "key38": "3U4WEMPLsmRcFKYwdxk4chNLCtnQnrQxszqMdPNeGNYvCvzvDGNuRAek6BbfP8JLp7Ggy4p5PMgmZoW8fpspn77U",
  "key39": "5vhC1gDax93jn5oqGwqb64uGnEW4jEnHroMhYyUNRtdsN8hwhhppMQgofTKYuKQ4smoCSGWQ8GC5hBpQVKzYrbTi",
  "key40": "Bnr4PodeDSqmvZaN6yKeGLcpegcJAbN2xLATvVqpcNXxLbT4nfjTPWp5GTQo1u2uUGw4xdKJTFW4B8wQSJMFnDB",
  "key41": "4tKbBwyEFwTwUnz4iK3xTEcnM19nyPfJKFpYAJ2GEyLkENtyjgGR4tjGEjz38eELyRS1s6ZBC1DHtsukCn4QLKgh",
  "key42": "3sGRRcNErQzpAV9Jgp9QLSaBUybc66CbUnzMuTSwr3gYiCuX2Woek1uDs7uK3jKNE5YxgdiCHNaxHSxMhAbeLZ9T",
  "key43": "21DGAESTkb8GvdDu9AgPiwCmfwYMkiFw6pimMt8ZjUd1X3gxtSM4rEWybMxXCZ3sSwDkaaB4eHSAUiig2NuakTs9",
  "key44": "55iuwWHFifvgzFzzJjXrA7euSgbFoKeFpcEzRNaU74acYiJQuesG4eexC3jMFV2mrg9HrrRid3nFAUPxdRy7sZJs",
  "key45": "32yUi3WFfHtCciCdLgQPWxbJi4q7RxZ6b2Va2fD9Kjh4u3xvmdxRm1DExFwXKpXng8casNtdpQshFDJxz5yKBhDd",
  "key46": "5N8aKFv85nHsRQtXRHQwr6bA5cwr7ztSK2GX6TJW3u1No6ejwEcdp8NxJs6ayeJwtJAGZgtz7T9KwqqEYB7aJ4Pz",
  "key47": "478RQhhJPp2a4wfWfdpbQ7pVdKWBvRKgGQQCkWh9jfGSYTRb9pQ5ia3ydiEcicCMALAg9nehtACF6pS7cxN1Eb2h",
  "key48": "4feN4wmZJNhACimF6BVut1HzF5VsGXnJUriPXSgDxGLMzqUeNVsce39WnYyGCXwHwGf1LyqRRX6MQe8SmvCEP7Lo",
  "key49": "3ffgByDfSHWDCtk3AaLZiQ7FGcNo1PY797XjJttgjSEKVtZxKvmhbCbDB6RdSnc2Sk8AMT2kBL274GBpd9FUPwbB"
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
