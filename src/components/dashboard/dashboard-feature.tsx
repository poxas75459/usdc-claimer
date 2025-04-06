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
    "65eWrbqbvUQTW3XNPnYwNmEMQGYWWLHqZCPevtS8aM3uchqXkkRWc5Y7mqdLVDGANZ9KLTTChXHrGQatSrdHqcHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcdgdtS3oofpDGfDuw1KHGwKe46Bbsow2NsLS7BxLC3DktQQ2BorHYiMGDFG32HsygJ95GYBSH4bFBQscsUw57E",
  "key1": "438ZgRMHntyKPqbEdDiXkhXNhFkBompK25uth1GrQ4NfBrGZGwyP3ZGsgGx5iGZ1nbS1NvzTwpfJro3Rgc7FDHbM",
  "key2": "5CafvQ1i2yRGRtQvsco9KYF79A4MkrwDkxYuNHXfz5Wzziw6KPdGBhhHbZKPBnvEHKAuRP3NgdaMHXYY7j8PEXTM",
  "key3": "2r5fZHjYi8u5FYUKetFL8kBEfsFwXE4CWzv2Sn43zhDWUMTYKXpHUnmsxYd9nc3wTRR1NCVvj1CnjYuGHKkEmtiS",
  "key4": "3TVnmre6LkP65Kqca6K58LdHX7YYzHpv1N76L8j5CAPk3HG2JRUBv6iF3c9Ajg2GzLbrBpYFX4CcFCXfYiiiTrfg",
  "key5": "oDG14vwEzEZzVNNm9j94acZa71NyAtzBwJZGJWXrHguW8TXeJYqdy3iZRZr7AhXjMSiKSVau6YGAmrCTqGoDk8n",
  "key6": "24ZzBj9efBDmFC9xhzMUngiDh9kURJEHYhPiNg4XrbWxPoUMunU98v1EGiKejHuVbnoCcXSmExEnY3tCbxWDkjsg",
  "key7": "3kwfkyWQ9twiNF5tNP6yA3aWVX5Pum2mNef6qdwiyDoD1ZrUqMyTR6cRs1rWCTSELAtwXJP5oeBicH1E8kJMMWXP",
  "key8": "7kkpU2eHo7QoCtnazwi8Q4maBso36GkZb1DXV4KWtbcncXfNvLpRjPkStA4GumLNnXCXi9WzqwgTvhGt8HG4DQL",
  "key9": "4TbyvJeaYHtSgy5Mv2LouRyme7ToCy6n8c37wqAg4er4Y7YJjGggmMmwiA557KBGXw8LPqjL9fc4V4VYE7RR1FuX",
  "key10": "3Yh7ArqqgJ3FxTnEycbzFcyBQrNUntEv57wzN21E566FMV6c5778uRWArV34SBFrgKHFMMwCLJMqSvJHpJ9ZCEZQ",
  "key11": "1GkGJTzeabGoL6tqei1gdGNuGvkbteeCAdpr4vHQXb7t5R6x3mXznuM6uAqwFCt6cTFggzRQSXXjNnMr34KoYyh",
  "key12": "5asQRqNMYsipDbjJJqifdYNNxykbfZK8FvhdqPb2TKgKrBkunJ5hRbqjoggBkk7Z3H7SnEFyXxcxEbei2pEcJVY9",
  "key13": "2kmJZK2ZjkyhYeLan7tXrwxfy7NzEFQdHcDEnGuDaNxa8ZUyjQaA7n1jSqYrhmctV6Lr4EiEwAgoTUHWKCWMuGH8",
  "key14": "DEN92C8M9CGxNAPD8ScTqRfSWjo9kST6XJdSC3y6FydH2FVX3wv392gSDeMkfQUk4HyGaZY3CiMHu5YbWT7fBBH",
  "key15": "4NtQnJLFSDFZUeHbFA9GDvuPf5r8r14UPzEbyuNBf9XdyoDGfQcS7DtXxFcxAoxHBaxEw9jNfnGZ8Ux9eCrYkbG8",
  "key16": "5hkSHVerDZLNcACDRQkxaHPDoyn1qvg1SRfkv2fMsmx99zHhCoNfvYgoKtPGMJnJzRtW68W38xbaRNGsPtkmuHA6",
  "key17": "3ugLHx7SfmXEvTD8boYYuXsjxJewbrXUtLjEMqbKu8CMbMoSDJr2HZY3XnWxebsJU8KSLjvTcWCX3YXhxTtkVRzW",
  "key18": "4BgCZz3FvErMMueLmRXc9uojjfy5makzDAPfY2DPxMpeqmtsXZ389QVUChxdrA3urZzur9shtZ4qUvVE1Nr7ggCc",
  "key19": "2R8dSYR67AahxHMeEt3e1s4Eg9wXRUa4a39DUHG2XV1oz4u1gsNK6Qp1pPSUbYQZKFV2SPpiEe9pfSJVksg8xyqn",
  "key20": "4EXvyqzeZqTzTdcpJrthCXXHRSAsgJCSxHfLPzB9KxbzuhFs3AjJFcoeA8AxeB4yftkj5F6zyTmHtd6y5LFuTq9A",
  "key21": "2aamAjJuVZE1Akk8khjS1M5JytLLGevqvjhCg2fzDCHo7PyqKQVWTAUaLUgBBf6s2axTy9nbPkPoHAfyxMWpnKkE",
  "key22": "4QTBeAUFU2tonjpVdtBph4UZnTTNxNFCCmaB3dsSfT5DtjJguouNzcpnFdvMdGojSTNiP9rTpo648A1aD8gcHbXh",
  "key23": "5PbQv88G1QFXrTRPN7ydeEKwRGJQEjDtSK98QQAT4kmMBHVn3eZkkTCnGzSWtt7EcBCbDks1ckCMfH1b7E1cuWka",
  "key24": "5chXr1uQG6bcdJCJFa43svaRRkiY22dTnUxPdgFYRK5ZzcG4kJb6mviazRaroXAUwXB6Bncw5DmjfdwSnnTtDu3f",
  "key25": "56A31mNr5X1YDeZ65iWnnkEsbMu6aoYrzhRbUvqc7rFrNHXPdBv6z7peuqeySKxF61QuTM1iWwSRT1DALEoJyXFD",
  "key26": "2csANLjyJ47u3UDkDL7mJkzpRyo7L1VLa3kK8YcoQ8PRSf41UtNYF1zATE8aT4BChxmVVqaVAiGNeziR6Jguvxre",
  "key27": "35MgL196ay3tAz4WEwyeQ5sntnyP7gucScYFc8Yqh5aDsVFzBajdjrZQHv7yHMsjg1DjasQaVaXDnmxZWFwevziK",
  "key28": "21iFaMrmFmMrWtKe6do7XR9VdU3qoTSwtpC2vUNg7MmTnQnwum65zmhL487wLFBNvNFwFAmA7CwF7CPYDKPWjDMe",
  "key29": "3jBq5KmrhqEw7BG5g3DeYR31F7kVDBKcJtJLGz94iXngPw4HYGLHgmfkdHYcHF17uihYJ6aFXWZDJJmjiERrM2Bi",
  "key30": "3G7AEw13XeH7PYQg7Bz8ArUKR7kCBcUKGKaJtCcMa6DpSyzAAcMoBP3a2t8VcRnd8PNmVCRhgGMLm25q2j4dh4r1",
  "key31": "5gRpyqM2d6B8jwa7pn6kSvkj6mfjeimBKbSZZgrczakCEJU6E2ns8Babm6VrgBCD1WbDZu6YNkxV2zAwKi2aF1KR",
  "key32": "4m2f5dqRVQU2yPM45prWt9TDpBsZZ6AnS9zZUb7R9Ys2cKUf7oonXVVgg25XEoPjnSMWf43nDwoJ96MPbb6d8ZgA",
  "key33": "3Mm11E7MZMJNG4ZkNHdoPgyDWasanW7ei6nMmginfjDDqzq7ebbJ9Nnv4Gpyei2qfmukdBQpDJ8WZYTiYf3SPckK",
  "key34": "jvpGqQ1wGyu4PswVmFb6rcgbArbktDwdRm3q6FTy994qQX2QmPKp8wiVWC8z2K5VWvuvK5TeCWRjSJjAAx2zoTf",
  "key35": "4RsQhyX6wtg8UHigWrYjmgNMXfgCZkArFoTALpgsQvvX1dxVWsmM7Spa8iEfDpd5x81gY4DFmNPgKrAcENRbcQdG",
  "key36": "2vsuNjjodcDDPnM6qxdNzLxkZBR9tyNdNpn8y5JhcU2mw39EWTkuA2NpspEKKjEyd9XQpErJoQ8FXety8nfzvVU8",
  "key37": "4Y6nE245aKKn1v1mBpTALuZm7GLQeaUF4PyaPiAmsuTkLZjX1iTRJS6zzpLCJ2D7hc9MnKgn6y27APRR12MBK9G1",
  "key38": "5FUSjtm9BHutQ9s7NiVcfKWYX4a3bt36oukSc37wPUTpSYyUmo3P1BoDE5Csq7QzCc2RYwyKe7r9syzVepeMb1Mr",
  "key39": "St33AR7nEDuoDrTFc81SsiYYnPK7U42r2BVnALrqWNHuzLCLKZGYJb1cMkXBaRrkTNp2vncAF89STdN3KpcimQq",
  "key40": "2wqinvJsvY5qpfCBa7PnpyNUBNtnRnqWDeH6HrfrqkLruLueCK8fF2xx4B6EaZTyAZ6u3xSfBfAStJFtbCnficAF",
  "key41": "5kYMsLNEdzSLKscmpkwb3Q6Qg571iiXaLnoMqGoPe1nD3Spf7hRuqL6HfMhEv4R1JsSpGckAZv2FNvcoKVsJPJ5Z",
  "key42": "5CsaLC4nA4Liz2vvvZhZhp7qs8aLxhHmhGfE9j7vF38dXjAEzkPLLkybXLqi8bpe8r2KtJkBAsjgCT3YwG9uEg4q",
  "key43": "3fTdHhWtAvhpjt8iuUv6AXeZxbEjahSCqTd96EFjBRj2ypABr1HufUN4YY4MtwD3qZHYccdWKsHcZ3MLJEoN6MHb",
  "key44": "4MrZf2k4QZgX4jpzHdXabW8H7GntRgjLk8KV3z8Vrhb79E5BEMdHQw8Ct8qSuRsaFaNgp98dmEVw4SNAnWfMe1xV",
  "key45": "26PSSz19wgx1JNDnW83Z2EWSWzUxVpq1yRK1bV2f3vPxrEWf65btUaa3UPQE7rPDN8hA13Zr6tGRC4wGSsMv1osz",
  "key46": "R3x9KwtfmdxKoQFaADudzzFrFNHn2uV9o1Bm4kGJ7kJnPHqDHw9JvKgBSgp3KRW8eNm1GzyADA7qFsvZTCaSixj"
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
