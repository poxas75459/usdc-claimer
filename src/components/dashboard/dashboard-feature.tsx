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
    "2e7iTNRn9qyeVD95UbU6bHjuje4NqmRAxJmigqYbLM3hCnustpWKaKVs39i11VpQxZ6PNXFUg3wtSdEJhES3W2zQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QiMk1FUAkYtAQd1SVZJ3sQzkZaz6E7FfgWQ1FZYf298LR6xAQkEuE29Qofjvv2wQgB2Uyi4eevPE6e4utHGvPJb",
  "key1": "2PQEbn7uhmpvejb4NVQQ6YQ4m9Rr2EbbPR3RvdeqDvWgMkeqwna8xrQkTtSCM4ZReJRRPPKYQCyAZJsDmnpnwYzs",
  "key2": "5SsaBihpBWP71ubsy25uNU2mqpJDgjVKLhQa5TaByyjfCvYuAbsSvs8MQrMeaNNiPNY985aNWeKcoZxqhUWxerjc",
  "key3": "CJEKkXHs6gGx7o1Tg91epJXJXhSXqYP9tvxAMr4VTnjxhn3L819ii3ibnXH4XFap7CJKEX9oaLMMmEsSyCU3R2R",
  "key4": "35ho32FgTFqgkg9m2ZakjHsL6QLL9AdMHfUg8GL7qpb8uhgBuREzDpcJ1NsqnZGGgdCbCWnuaYDdZe9Sw5EKiwLY",
  "key5": "2JPC9AAFgPoVuG42jVpgRiiDND15P3cUM23ADEjkVwjVcsJDrieCnerUL7CyL2syA4CZZB9yPSbrSsT2q3UhES7o",
  "key6": "287W1Fh9GXRFstM99dUmoBEW3ZJdeRdZ8fRFhaaAQ7UD4wCxe8aNEbqj6ySz36K3ys5fT7iif1pp7jU8vhs5nPCw",
  "key7": "2t5WouuUwwvWKwyCFWNS2aP54sUDyuYXiA3x7qtqpX5N676NDMvL8zzHxKJdv8MKkX7bPohGG1fdnPgZ1XFyBGn8",
  "key8": "32PL1h1EeEfL5Qqu1Em5NJJ8ybgaae87wCtvgp5UrgH24LeReCvmNK69hxTYzyh5UXkvmPJPA5DW78tMrJr6woFH",
  "key9": "5wag96DUPfWECeCXyfANDiAsyGKeaZDmNnrcVtfiLTGddh6eTMvhzXrNqDDuroGs8o2AxMuafuMByg1dMoz8D5G8",
  "key10": "2XuWPbKDJHcotmc1H51z5zWBorC9GMy1H67BdffYvFkT46UreXRtP5h7SBybUV9daZT9QwEkJmoGeb4zVPZ348gs",
  "key11": "2aAZxXWt3P26K8gQ2uzg4DSf7g7Ak8mdi7G53iyrJVJskCooFGBiTXXVz1ha31bQKmKmcSryTS8wExZ2gQH7KRVy",
  "key12": "2h5mH54DjXAqqZ3wMyGQp2vEjrAf5uKL3RsHGHzjRXmiPsHqeJNUuWqbc93HnKcDHJmXynBU4qyKhYW4QKao6y1k",
  "key13": "4nKsyhznCmDJCrRPGvb2GBPdtPcxxjDkJG1Jv4PK1EwEKRcFdeyYSoxz2X5eAqFgAehnChLNmtxMb9z1UmshUTQT",
  "key14": "3KfaoqhSYpXhygcXgctX1DQxnAvkhmuUCA9uXTCFhS4utRnNK36HPGMMCeo5AsBFNQo9gsUFsuhhb2LtXiQA4zAH",
  "key15": "5AfSyym8iFSdwQjdMSTW4sGCiBoAxSEQVMr4unYTqiaJADfjphdgEhDHnJjs81gdds4x7AzPpK5mqxbpacZbJucp",
  "key16": "3cYjhGgFhVhCfh16QNxhsZJn52xJtcnbxVvdvbsDFAvaNyuxoMrR9kBvbgUbedMLQAv3zi8Akh5kWUT34pebeGy4",
  "key17": "BEnZ7UjwZ92KLdVEos9uhuaC9ekQTW9w2AA8v4q2M6r2xjx9UDX8RBkis5ZCi1SuZEetik2P8K5bigXem4Dthe4",
  "key18": "5UcEXFyK4DVqSMJaiCQAk5DSWh3DP6VhJQS1gCzP8Q9pq3yxamHgNrydY1yT8YXKqPtS11kBUZdFina6TwiJA3iy",
  "key19": "383MNPbe4u6kUXKSCKEnwc7V5rrBPYAaqCv2hWKxHbQdCHm1JboSLpfDXDMHYx1F42wN13rf5YNpW2Uh1gVhB4Sg",
  "key20": "2dGqF2TfFDobVoPSZyP36PXg2zr8HUDtYJ1HnGWtNANo17f3gxu833qqExbZWmKpZe7aneYx9rNmdWGSxyQTWabD",
  "key21": "48zc3uVSspWzEggrM4Q6eA3Cr9zLrpMQQ8e4rv3s6sTT5fKjPa5v5BKjoSQrX5pxrth24vj8R5E4iqfAeVqakW1B",
  "key22": "61ShTNVbdg1MSSQGhFCMSZfGBxeCQWcXRcGV6NTZQFy1pJjApJMYUpm4AjgQdNZZ3EvyrjWDpsetLmLNSrhwEK6D",
  "key23": "4sW91o5LcBqpL49x6TzrjHRr7dqFdgNvrw1EB4Qq9Q4meCWSfxjEr6JrbkFYGtDJd5h7Vi3FuhVF9TjMyoGi633j",
  "key24": "3iP7oThUHiLBWkcNpG481nLRYoRMvQykiXMoqAk8NBEyuorTWjrvCwpNdB6FhWUbgMR3p4k1mznDLEFKKVym5m1j",
  "key25": "2jPi4Sqfx6eYCR4erpGDySt7vzfPtxJMyrnwhN9GNWzFAFCSGByTCyeKqipncX6gCfEQUcAR9Tw5ddkzgnn4HP8t",
  "key26": "BgUivPN3oVhoAJ9pWHTF35G5HT9hakE2qUEN9xr6H9wa5o5BDZrczMadpoBADCNKfr1ecwGphGpquGafYG7FQCs",
  "key27": "279NsPcMKAhSup7yJcWdN8GPHeJLosCr1ZQhY1iEQPmpL5mYydoMbv11tNmrKQ1yBDTieQyUSzWgUj84teQd5KU4",
  "key28": "4hDLDEbChYG5h9syM46SWZRamPSisjpa81HEvk7aunAfZa1VJBWM2LWHG1jccy8tDbmDauupFhMVQjnNMwJk8V9r",
  "key29": "2xa6UDThtj3hZxvCM81YXo4Ro1La5s8ydLPPVM5zDr6mH5mhqaVUbZafAQF8kCaQimenVE3QpDPurCmtQNJCge9K",
  "key30": "5ZJR9ueqbSpr3r5QA7rrAJSFPFVWNY8AgY97pzBap2E9NuiziejuDGwXd3TpMkDp2dmK9LCuHxaP1AxbYd3ymswY",
  "key31": "3QfSi6DWWT7Psf9GhnrC3weKaXDtNBkmSGuuPtixd19jWoCh2vfBSYDFbq696gwvLgAZsMRN7RAgD4wh3hC69Fva",
  "key32": "5mrV1KwBG7WTntriyQiiZEyj6SphBTH9R9yxVBX2e4JxZtoSyoW2LkzmhshekPNb821MHrv7oMSGDXTcPpuhAicV",
  "key33": "qKn95W5vuYzHphhmawgsgMoRFR8qERaAdL3xV8sPRykPkznuigyoJTnX7nVXJSybSiJco6qNSZmoL4TctLUg3sR",
  "key34": "4ZYZ7Bt4PBGhYhgr2ERER6BZtAyxjtZTJE9Z7LPm8SpCmXgpEpQASfYvHxnt3r84xcjXvULAHRFzKbifoP1eySnH",
  "key35": "E7FJGD5xyvbu2C4i3FEoSwUMEMPAvjSBB54azFJ2A9bBXXJoDuysku6WxcXd2v21k7ejG4sLPATwvtiVhW6orEk",
  "key36": "2xPEGH5A2XeW1DvacyCQuxipkDjRyYDGL79zFafpWz6okCwL5qxUDAJ6j7q5nUW7TDpLSCpvQakEwDjqLPymGsYK",
  "key37": "5b8srQ8BhJ6LuLsUv4ANQkyG6e88JAdHrMFo2ZGkPHEZtBnFapgvwauCKJNdBTvS5qm6gJdvV8Tr1XqEPmHLY8Jr",
  "key38": "5mxgBqZLZ1fxSUg47RC79haq3FMPE5i4sMBqM4pzU6EvE8MZnbS4inu9BfpK5Pg1U9pVbRYVP2XCRoCRzQNnrPmX",
  "key39": "3x7qC8CRewnv5MuGDA7MfR3GGt5Kj9FYvNGcq4G3dSq8YM75GZevvdcmXX7TX9vnG1HR1Qfj8tjWT2JXiPUPF3hp",
  "key40": "SaES3jnv7qujueKm7SJ8q1XkmrzZAmzvGECecvTJZcaqJQhvaLFsJ6KX61eAzH4k6atLMFYQPrehhzf2wcdVgjM",
  "key41": "Q3nQm3da34dUCK82Z5WnzMFp6bEBDij93H3rySCMCapsvzufLXyxuQEyuhK7LGfK4BEURmoDn9paajtp2T5woTD",
  "key42": "6gL1uvdsbXn1HyqwywugaD6uLYctyVyGCRms6CxdW6PvhZpsDYj1eyPiiCXurZE8J3oeGd17xu7kQyHFGStq98N",
  "key43": "5HTKgJfKwuajqLwBgVGTwmLqZzjcNgu5ct9wum3WXt9QidHtCEsPTR3pWpiB36WzW6YSk9VuuHz4qFhSggNU1q35",
  "key44": "zLVdq6Zi8yXzgfaDtGNzxjTZe5TQNia3M75zq1SzSjcBfUMRrVxjSvsyjKk25NVnKV6AqDbxnJ3HUbXP2aN8NWb",
  "key45": "4AM4W3acShwGGep8i3TtbkqRpHx4jXTmVk1viBivAL2nBYocVB7FwUqUTWgqLs26NY75xQjfpLLrKeJ777R4zeeJ"
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
