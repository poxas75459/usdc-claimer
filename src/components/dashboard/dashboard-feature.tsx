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
    "2zXEuphut7SctshieZdw5SGr6qe2uaJVRHh3qtK3Dx8Xr12CtMpLHmjZDTs8akZGyTK96mcVp1MRZKbn1Cr7hBEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cEKYqFjAMwXVhwLSMZr4bUGzwGCgjQmC6rkqhbCWSggfKwsS67oufvErgmJm262Mw8ETaW16MUoacMWVSQKsnfM",
  "key1": "5FeJ7AtSgGUzc2btP1MapNdtYGxAeG3ofiZ5Bvs3qDvZGDvz1ED5G1oMZNBmi6shcc19dFmkxcUU6qtkCtBMYUgn",
  "key2": "3wXg7RQ2tEYUVN6qkTcdBGwmYxxoB7mzgboKahBtcg7payVYeDZLfGegJLNdLTtqDS7JCcHeSK3i4XqpEpwgQWs3",
  "key3": "32F2ECAb1MQ7uMfW3YCqg9FdRBdYbbXHY7C9heMVEq4HAGAp6K1Zj915JGNR254T27VyYRu8uSrFtnRVJZuASsM8",
  "key4": "63j4EkmL5W9A5AWeT1oRH3KnnDZoL5qR5aqNT9zxAQB3vTLwCWHm9XxtcErEQh6JwHpqQnqczZRegemGmE93aFSH",
  "key5": "2cr688bbMvVZrsNiMw8MZNBMFw4xKSEdQBtmqWwWYrei9U7khwtRMCAzLrFwZubd5Zjx8gLz9ioPFUEuhxXogyow",
  "key6": "3cXZKiHYrd9rR7EDqEGF3aPfyjUC53zPwKNmMETPG2UH9fCMk2fBV6a1R9Xr46zb46p1FTVfCJp7RjJ4hmdvxPrs",
  "key7": "3ovNtMQf7UXY9wSG25Lk4LEqSuzA86AUJPdRLgoYnL8GZoZQBuwzgZUWqyNPx52qT21QGoy7g3tz1hQJwPS8n2Ag",
  "key8": "3QSWreoaEH88RSDJgUSUqHWGrUQGWPaRS9NmgtVg5Y2m7d9JnDKuGXw26r8zSEcatqoPYqS6mMnvBMa4NiJxST71",
  "key9": "3DHvMrg3sDUJq3Ye8Wy2MMCVQddndMCLWXwrrAmrQGxffSqnYqeHHny6J2XRB2BbbER3oTmu32AdpyKviaRAkEFq",
  "key10": "4VUsNp1ZfRjJv8KBWTzTjnkC7vF7z7MYgAg9kt6A7Kdp6t5Nzu6Sws3qTHBGV8hQjucNcDkBxwfFfYeLYuCD1axU",
  "key11": "E52eCNLVCNoPrNE3UXmALusYCUXfEuJyFsJMfhiAnURt6idEkjcRjB1hM2csoN7LqFPNdZbzM4k3ngKvZ9WVrp3",
  "key12": "3UDpZ7iw3tHAY4UaTq2WZ8yhW86XkdVJgVUKaZNTAeGJNPYAjHgAqTeTuqi91vwAC15GUNErHJ8N1rtFoyAEKSDa",
  "key13": "5xN284tmhHyqpxtHFCQkX6DaUhgNsf5gRgtwEyQjFggor3uXkYe4GG17LiLRCxzr26W19khSBv26nfvLyfsVRFfH",
  "key14": "2QxFhiS6pZPQXY8qGWMkMoYRwfdNFnoSP9DHWVFB8Lro3brVP4V1rRDqPY3Z2xFbfKMb2oM8cXPVWoUhEbfYhAJa",
  "key15": "66o4LuZW8ncdPPotXbNk6XrddkGpA3xwkXHUomaKBQnwkGhbbM2BjwScDxZo6xvqHvzMsJwPQfvnsHKYeN69jfxa",
  "key16": "4QzFMzoV6aU17zPbGTdc7P5sjq9VpVhLiLfFVMtgT9MNmSMXAJdLzYBdQa97fhPBfL5ePX2er7T4veHknCdayt5t",
  "key17": "36txfH3vqFRwTidv5JYUX1RKgJzHohkptK4PqT4XQJhoGE7yVMfpxnhZvvTTufdpkm9Wdysw5yp3saaS2tLNZpAh",
  "key18": "56n1tYAici74cLk83Kr2ghHJK9i59PTirgsxC6MsxTLkP4BxdjuUa9NjmSgN1YSCywd5XZYSwzCtBaLJPQ27fA8b",
  "key19": "rfnBR3MNT62wJjS2NoRugJ7Ksr9C27wDEJj5ma5CdVoMYGCfwfgnptiY2YrJEX2fbFnWzNGSWYec8WzyoaWV583",
  "key20": "2Qth67gAJShE9poAKmDArmTHckDxm2p13vrFvYpWmTkjVF6YyySfGvJ65b99wrqrf7FtiSJuficUYmnSDV3Hc1W8",
  "key21": "2j78NUP7KgoWYhgj5bodsDVNsRRKLhCtHNGDHJLYrLejnrM7XK4QDHaDfvimWjZU1tTp7vR4BzPkuoW7TxSwUjbH",
  "key22": "3fWzZyy9LNW2BqXyCEeX4paBtdV81zGKJYfzGceRx9mnbjpPPTayJjDNrtR1fzjRRmcsMvxQrdvU6X3qM7GvgaQ3",
  "key23": "2iwYbKjeyucoQtbT1pBANhVjmzXLDwc1FShYu5CDwXbMRw4gNpW4K2hTmEJsptgZw5JkkDMfc5ibWfu8A6YqP6nr",
  "key24": "5QTe8vhogidcebc5sb8WnqcAVPionQqWPs8g5X12gXa7cqkvjfxx6LCpBCGCPejtSYP5zBcEbfhi9nZMNnD8CLZw",
  "key25": "3yNJEkUYWd1T4DWLXBm5pTBisR8AhEgYMMEqboztmBZqngvWorg3T22R1oGLZijVGAcLSKKMKsrzULNjLvUE9c5y",
  "key26": "4xDuwzBKT53JGDfAsrspphEGpc7L1iBgp3F6E1Wjdr6QprgPYHjYA5B1UMrSey2729uUqMVUgdNtxQsTzN4onzbZ",
  "key27": "4qVxDgdBmRMp5cbBdSzSW2H9NtyHYTRn9DKmVDkpnt6BtVxXo8nuCngrkXUn7GnEDNg2wH6zhzKWFtCGbocCHnVb",
  "key28": "SepvLTy6EKyQUjQyc4GitUJd855d6JjEBfjCMczP8WHoEyKWYU6T9hsqPgpePQiD9LzzrECC87y8ihFAg9a8bkV",
  "key29": "58Bj3yKVnrZnWQmi7BbezkYv5FeQP2kg3EL9exC4kqnyX53Y6F5nFs1YGADHxUq7vUJbVPrKq7zvD22crgEGBCXQ",
  "key30": "vbTWnGBKxuBeFBLd5kgfRdEnyfQneVxN2BZd6RzDoigapmFs7KPAmzSj9y7vkkAj6qFZyzzbN2kiQpsWwW4nRJd",
  "key31": "34b3t1wuPqVFSNmuaHdtAYmu1iYm11nPssYPtVmcSb9zEzAV5yNbc4F8dashhb1Y1iZA6D9aAfjJrG8xMVrwZAoh",
  "key32": "wcRaikEPodmePCweYsiHgHvr7quoTAWYrMp1JPp2sBrkNrkkGXYqDywNHuM8EnyTrmh5j3bPmR5jYsr4L5cYe6H",
  "key33": "3qNFSZKPb1wmNpt4SxhDSzscMe2dfzhxD75kBMqvpzMW2M2Ey8Km2e8aE8H8hBcdg2SKLShx5rJ5QJuSJb5eF1tL",
  "key34": "A9qVnKP7bgtR5ipHoW4s5paKroHYTX9VhPEiEwAATPZK2taoWC7FQfio2nPwDFAamcCFoWqyxhhFTtCdpNFBj3B",
  "key35": "5kBkvSbXgbhA1oDtDPjHNCvpPZQWLNEVstQp7XCeF6t3w1TB1hWJeJrjuKtV2eWXsDoUKpvvBXunx82N5Jng4fp",
  "key36": "3BCJiSAyjuopfYuwiG2scdvv5j848pUC36t9FiyjxXFdGpKUHxbNz9bPSEDm7WTMeNeJFg1NxYKLehaDxJJtpjqp",
  "key37": "2eZLSs52WFed74txjKybqJ6svG8whnTTXzDGVucfWCMJG8tDuQw4rynmAZn2Bp7CUExPcFHV7DudLpMF6j3FsQum",
  "key38": "3gGrf9TpCUUubRjBaUVkRgh8ozPEh9oJra85ysVhzMTcGPBT9NU9JCY54jwqnyqLPyfqX7LR61h8rpkaFPB1By42",
  "key39": "2xPqsjJht7xRfkyHg3DUS8h7p5pxCqYHRUMBJMF8w6nAkQEcNGRFgsyj55hrVqDQPkURwVzFG5N4DpfQ1NViNEkC",
  "key40": "2k2USqaunofsfKxCKv96q198Ss81ZzwHkxrxWJ1E9nMQaAH9WLcmMknVv7iCiRPWcMCfpK2UiRJuaotaTFsa837t",
  "key41": "41LfGLWEtxGqaGgpBzSVbRuG4dX7vMVni3VQhbqqx5c3q5YuvJ2EGkcHW12TuXNBj98yjwfSf4SoBFGaqp3KpSTF",
  "key42": "2BZBZHvPBK6fngQDYu2W6PSHzdQS6h4vPVnpxCbaJGYd8AjBdJjEPWNZZyXb2NQH8pQSqNsRKCucZ8KYGt6KFVwD",
  "key43": "2FS8xP7FUjAXJymAYBPf9SDQDuZEYPYHJy3MZb6Qk6LjSy1df6UZf6C2CThCCN5mF2JbyzUJ46Qs6SyFv4yv4i4k",
  "key44": "3LQaxHaxCfweX8o1xCaXbuBS3HmNikS2kJ3UuejvwJ4HGXcn4Pgyg6EuaXqcjLfkYjvsBs3fBGJDRwNSBpgaMjf5",
  "key45": "5ptcMrrTcUZTrcHFU13rHupvfbbqfp7fFNWKbDztCqDurTUdvwjRS3AFijtp46zWMAzLY7miVJgy8Z3JYyiAgA8d",
  "key46": "2YiEAm46roEqhYEJwHYfUbN5qPCnGpUyEvrvEW6AFBqxaMNtEktyYs2QLqH51DkpJWbTLVDMam3tKoYWusA8CUs6"
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
