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
    "2C7kaks3W3eDkhWoajQSyLg38EyUChEkWKxQVsYXUqrg6aw5jNDnyYHx6eyfK65L6oQnFBzu4dKRLAxkLfLkkHTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VE24RvJcVvcRRQuhupzbsETqLD8qHaXwqHXq7F6nVM76pXmNvUCNYXYgu1e11K9tj38Wram5Bhy2E3b4FR2xVDU",
  "key1": "2kmSSPaFdbpZbkSvmmBBUXuJ2GgAvpF2GenUbjtDvhS9TR6tnBRpQVVomA4j8PnweVtr4nZDU38N13PzcADUrwWB",
  "key2": "5cmkmZw9DLpFURhXc1UGx1r9wyZPfeznFoV5WHe3RapiR7rMJE61e7qpeyUXDH8LyRu7P4RaqyFy7Dp5xBQTyMHE",
  "key3": "121qSBaW5R47y4gTCTX7tv38YWjw9yhe7vsyhzb14b5MqcvQVy97sXZvTYsB6GAu9J2hYPv6PJD4saxhFu4P1MNm",
  "key4": "5AH2p5mc2SnivEfkYghnoVjYEx9oTnXUjMjTLPb4KZMmaY9e6rGWvKCMzzsRy7Dcp4LqyrWJp3JRtUAySeTK86t7",
  "key5": "SU4113vddndT6e6xRLiY4o6ecuL6VSnVYCfArQsZhc2n2u27hDcqWHmafmubHjcyQeDgNppurhxiPQ4Ym53zDT8",
  "key6": "38SX6EKWdgvK8oBtN8Azz5kc1zCLvSNWVQWebXVJH3iLSXmHuZdD9tvBChzZD82c9WS8MdJUJQ3pHSRHbiausXn4",
  "key7": "CMrpzBrsgU2AYqdc5w77wRjDsjRHmWmYJg47i7rNWPsvJo62TWnXwpc86Y88mJc9bozCcSfdVN6BPopEksnrfGA",
  "key8": "2crZK23PFjJWzrTSfABTYeCdoEP3Rvg6rwdZbczvCRiYjLQSM6mSUUkUDEPE8XpsRXCxs1r12dG6can5Y6ib38SW",
  "key9": "3qSjLxRDksJ3vcTa5nxDm5cRpdcqHaXogWrgs3XP2nx484WZSafJ85pVXczAEBJK3ft5J38VcownPXyzNNC62kMS",
  "key10": "2zYZNwE3GBdB9q5uoCD7o8XK7zC8nVXN8USquUdXj8186bQoUtCuepijD3Dg5Qv3GkLfRX7oBc8Y6CFyybS7etk2",
  "key11": "5Y4hxAKVMWwgRVw4K33tkiJZRorwGzUVxrx7KeAjWcryoveCrmKSExcaD3YvVttdERUYammAtY3hcKHxVfU78Vfq",
  "key12": "3ZAgboiXAMaFYeXYqkHdr1vESi5gwbznLfAj5gtsr5SiDCLFDw9iicPEazZhVZgb22crHUPw3uKiw76YHJGnaDVK",
  "key13": "32E5JW4YHEEMYMzxe84XoTSWrs8BYVPQkkbvNuYNbQnmVFiQgNPfraxULdWZjfEhdYfa6r8KWvL7QESYugArwqcy",
  "key14": "4uZ8YzdSDt1BSxunp75pQwD23HvJQrZBgbCPVDtHnRQaGHF18ZttQ5i3tJiZHVK8ePWnCgDeMZrF9Xz9tFwqryP7",
  "key15": "3yDn9oNVAZxj7iTMrwyeda1PG4PPcq2vieXCDG8v6fHCTwATQtGEHAjNUycbCRcYDFnaPRBmTfXsH68vJs63gMnh",
  "key16": "EuPKDLYY1rcPKgF8VLz7hcAxpwVhkogVQD8VDHSvzpRBh6shjeskwVCnZzcqvEphHMsTuLib6FassMXUMcFmPhq",
  "key17": "2bNvNzFaYu37ducoYfAtLNnDChrEzGujdrmHN5xaG37PWZ9T5eZ2BsS954bPf6W984xefLa8zmuMKyGmebZBXArr",
  "key18": "4GfwaihXVomG37HNVD4vhFAarCiJnVpaCjnuva2m82QVzwiBD7uDbwA4R3CabwyLLdBoAb62uvHP7xY6Wx9NqFzE",
  "key19": "4ij3du4WtgEG6pRFkbuKp8yUL9BC12b8QB5EX5EzJvx3UuonoKGz7CTRUqUBgYkfLebB1Fwe6zPNofipFLNcews3",
  "key20": "2G5VaH4RPtATdgiQTP2EoUfpFjXnFBXCDNc71GfcKBKdd3QzwroQ2gXJw13NWpxApkeCAHJp11twiQ6Mff5fPo7K",
  "key21": "i9yMNXJi5R8Scnvq89bXNMTXZ464Q9BMxawAiQBxqdG5A1cW4r7RHAC12zeBTxY8tkhP2fjz2Js9Lekw7Akfg7b",
  "key22": "64Vr1jvorRFKFHyn1ppsm7psmTaJBQt21xbFReYSU1PcBJB5ZQjRCT8LHtYH4vKNnQeuka1mFWiLLroPdCfuxuA",
  "key23": "4wHRb2SMJ5bUXd5ezBXSkoHw6nkz8HWLmw7rAPRWEMXhzJabUSD89BvZEuqU5deg1iEaoamgwMaoY228eQTNyaaW",
  "key24": "2mMnPhqbBYT5qMaBkpkd9MAy35pz1ckL7aHhvuDQQuepWHaQ6zPye46zC9yPwW9A9SSRjkUv7Jjf9SBuAScWhMuo",
  "key25": "4aoRfxTJqpnVTe7JNwD84LVL85y2FJoSLpFUAScD31vTjKoLvyZHeZur7hxBQtEjvq2ZkrCjWJxXKzfB4oC8owvm",
  "key26": "45zUGttuaRyMDLigxKJyaf4uqb5b2LGmv6Kp1F7VfgxjtUWDVa2C3awhuHrqBHSyRVrdit6Mh3iwKyW6EomTJS5D",
  "key27": "2f5HdbVuyxTzVGzvkSkEQLRE4jEZ1Yn3CuW3iDjDnVKtEjkzN6U6MtmaFPZ29mttLzoqrypM8gV9k6sBpwUT6EAt",
  "key28": "5iuiG8yEsg8xqKC9e6nazi63dDnPMks57VJSRSzMkRVjRTMQEHEatM75oJu6ncGcXujAH5WX42KCTxdxeUbtWZuw",
  "key29": "2kaqKVKc9giN3dHPcDo3fTPvtR2HFsS6DDLG9Y5gSSsf2chCjyY8FCUFZDbYBzWPrBeoJsmiW99esjpKNnLZ8KQr",
  "key30": "2tFyNQFqy1PScubZkGByAPVSZVAEnzunJjvdYQSugP3vpCQ41dWqyXYzMbe5t2zfd6juabYz7evUXWMMpypeTYiG",
  "key31": "2MJqyFHVvtRf26deBkXoMZU8HsV4H7NCt7CFFRRGFm1yhyNAtbVveus1D2Xfjc29vYS7gD8RtC6x4uT4R129yeg3",
  "key32": "3TDAQgPS2iqseBGYVc4dy1e8WSNxGg39SGmuxLYbtj1DMDzye62TY5EFt7mMjgZ57gqsypSAH5ZLk6Kt4Tv8TyRf",
  "key33": "5y4RcGCMaCDbdfT9k4VmqZRtcxhcKGJgLuXjwLV3TuHEJmMBNhSezWz67fkhT31uUktexsF5g4oAvwKPCQg6TLrB",
  "key34": "5m1nagh1AumHDPBGS5AoBBQn6zizD78xmh4m72ZevWJUXwYwc7DqC5ituhCxis6E9BrWf4jRuQ5yEXFnM4NWomZn",
  "key35": "3w2tqvkp3EAjhWL7jXP9rG6Vv6soBf5MxSMwfkEkyXPft6VMp2PqT8CNoztMTcKBFgthqYpBtosuCwXTtc1nzhFu",
  "key36": "3FSAhnesdA56c1PBeFp5cDFvEwVQPRbEJiNJasggn5gxKsMNJGqKxaoajtaGJtYCQJ4Q6nyEBHuDD9bMv4XpDP2N",
  "key37": "5SsS1j57mh2xiSE5BLZ8modbtv6oQdTQ3cTL9MddYdoe6rpMY3r2mpCsKUpuYnps4dueAwsPXoomzBhrieFYfeva",
  "key38": "5Ns5Z88ZTxCbeXacMgHJHfzQRjWGoxLeyr8jAcdDcxUex4pnDFpKqEdJRAPUsqps4Q9DNF6TapZQuwH73AcvXpDk",
  "key39": "3uCy7WeVZRNEHwgA1um9fKhrim5rttJQKssEJiXSLZZZDzkJ67mqGBvhkewLJfohSK9uax1jPsdnEuP1BRunmHA4",
  "key40": "2UhJK67HCpRswzE6yvFfzQKEb8WiyUxagKXdwA8Xy4dKMWoAQqEqFKGEwxvAFoFoaphv6dWYDcqJnbbfGkGPmFJD",
  "key41": "3E5rW3jbEbMUrpyM1tbmyQbqD6ATC5c5stzLytBpPBUam5uteUVBCHsjRTdD8w8wjxA1BPzuq1eJWW1xgC94fgRK",
  "key42": "4ND8KkRucuRbQwpkGBf3agMnfW7bqFHiUb71grxvXLiBTACF9rAthxhMo2xXVqfaGbXFFPxu8gCxntqMgCr6NTy1"
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
