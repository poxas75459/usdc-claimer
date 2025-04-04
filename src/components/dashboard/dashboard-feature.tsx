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
    "3dpDduABAeNLUnnNKBi7fdbRqZCuoWqX1ZYnmGj69EQUrzpgocFUt7UT9RuhB3YKN4BXYM8AjdAgt1n8Bq454sdR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L1c3J1kqM7zDYhnm2huT9GzHqU5aHgkAtRbCwwo3jC8r2S27F87oh7bYyyrRRG1dCkrZkFxuVW2euir5KgTkAba",
  "key1": "5nSFmpGjWd6jzCoxxUxc4BduU2NSj2qe4eL3yyJTCz1goo3YZqRoWaXfTQ6BxiskR7bTCyrw6eCkLZotKGeiEXDG",
  "key2": "41jju4w5ErVWhRCgSLg8Z8RbfXAHQPYJEJF2afv1aE2S9YSGBxS4ffQDiP8Aps8U6Xdq797vpu6iAZufpC4jLtHP",
  "key3": "2dnq8NBhYRzE8TK2yVbRLkDoEBMysM2g7HryBTYeWAZox3FkQsFLGKqfn9JtRuDdaY5nYhX9Mdb7mr23Czu4wAz",
  "key4": "52phmTcJt4ZyTEFEHoUTuPq2PCtzfR9J3KVN4iAbT7Rs7wAEjhTnPgdKSd5gzPHoRSLX6TeaCb3kPTEUSNmpZjwc",
  "key5": "u1EbHYRTGGQMh5X2iBmJXCfmVziaDNcQCRVeg7MGcXJMtEXCVgNNW8KjMtBB4cCAT87qF7NAQ9k2bjLJ59HmoKk",
  "key6": "5gL2xwFfDGdAEj1E2jGSX1x6AjAsdrRHMjJeZaeXkfno1xd48StXNq72szGjxzT7kzqfMjW1sF93jXM5U8r4xq6H",
  "key7": "WoLFbxKQ4eqrWvp1WHKdT3a3MwFZgk8fG8BhEL3yuf3Ce5gAWJEegkYhFKS87q4Tm5DTgC3EHCuaWyNvt6G6CMJ",
  "key8": "QWG7Tun2gmTRX4r19JyUGLdHiFCmx1qnjcsYvSB4GEkZtvgHEwoAGFFFQb22RpPYyZB1EJLuxFiEjtZE1zFnLZy",
  "key9": "5RXkRZhr3myEnBs4PcakTDpKQQgfpA7q7EeayaN1TDMYLgz9rZTDvBqbr6ZHnxznc1Et8UWNh86t1gH8NeJs6m8t",
  "key10": "3b9vxoSid4xDuu7t77QMEoaxD59JRroRw8cMrewyQgkpzsUZW6rcCwKkm1cd8DaZ5ajnVxaHXmdW1msZfz5ncGrR",
  "key11": "5a7kxVCigTo7PmZckvUFnPci9sWEfuKYmTJQF58QHMiRwo3uxuqypDE3Tf6Ht4YMKuuZTd6fE5vQLwd28addMJA2",
  "key12": "4fmBmLcivyFW6koRVXDutG9muXsq8b7mNioxp8oT5Jyry8pubDnM1aSAAfmdgeMhaG7DL9krf7aCg1w2YJPniYFT",
  "key13": "5s9AzZGhVbabRkR5Vz1r186RHh85Zuuxpt46WJQg9xsz21aM2qc4VYRMKyrdkZNsdEiDH8sGk1e9DVXnCPwUm7U3",
  "key14": "45csNEsYg5AdGb2pawFvp1mbqZqN5ttigajqRZxLfzL6Z2BDYB5smkYKBfyKDSGezVyAJbR83kcbaUyZuPD98H62",
  "key15": "42RVBcWbFifqsDVdKTR42FJxQqtDnVWyhKj8VCWJ6DxSZK54cAXbYjMMfk8HFjjchifhvSwCDQXHNsR8CtgzcLs1",
  "key16": "5EHGskarpYd3uX4YfK82qfmpVjAEY1w5Cho1MY2sAtQoKNhuwRqucqC2zeAykyBb8wzoYLWmSTiLsfGxPEkDuHWE",
  "key17": "3My3hXXJqa5SvRpFhxi9LUxSz6yE2edV7u5QWSBLuRnj9bY7PVwRvyrmK1jhahKdYfqYANSBDM56ck7xHC2uNUqv",
  "key18": "4FDfaHAH2iSV4C3pYPmR1szxj9ALKppcKpTFuVSQHWVsAwVYtY1ZJK6XdeCifki3mq2FDu8Kr9fK4HfE6TiMeX9Q",
  "key19": "3hAkeHFx9b5M1ovEpMbULVNx4kKRMtqYV3oYXMpDC24TS63VS6qtUjedjsb3hJVGfByDJDd3F6PQDs1cgC1nQTmn",
  "key20": "2NYeFjLwTSJ2jXk39fi5MEBdmQcV8bnH7biuXeUk4Gs8CBUrSZJC7WM5azJtN5QWJueyj7w9wBUSARwUBZ2Byy9w",
  "key21": "3Eo54J1mfKmrZ69HGKA9VvDAVYU1iDBYi6BhFJqiM8Y13Tua2hZXuy2F5eWEnZi6jgUgmSeYunA6VcbvkmnwuNZJ",
  "key22": "6JHm3BvWHgcBqLPZLVPb5muAY6MXThUqTHW4W2vdDQ6MBjPvRQSei5LuMirKNFNpVHNmHrqdN2xH4j1VRmQkui4",
  "key23": "4tozxGZsSNUihdm4JfCZDQEs1sVqT8Nm3N5rR7hjZwaxR9sCZZ4Q8W2TM3Xe9Bpb7CZ43BYDayPLhfVbKcDypKuX",
  "key24": "5c7cS73SWJhyJs1KdHczZYvTYSGVK3enjGBczBPURehmYWr6EpWQsJ8zDtUmJ7MpcWN3MiQYjETej4S6x2Sdtdtq",
  "key25": "2V5wPLeGwgBRybxgsuRQjfPVyV7kto8tJyke3PeTUAB8AeWqmuhK3dyQNC1edDCi8x69BnjVeZmB7MRCwZaCc5f",
  "key26": "49Lzrt5cBJ7aDhkhkj5NS2BXtTaEsikQj8GveafBNBA5zKRkThPGHCZCz9TjPPA4xFUZ22bKbaKAXg6156LDMfub",
  "key27": "5bsHGqp4DuWPPk5Dm88gty7siKk1kYExHPT1DAe9tLsN2RRDepT5mfrtj3R5mXjb7SW4qaRLbF7rUbEjo3QshWnN",
  "key28": "iPcZEVmvQXJpqd5Gxm4RP18esLmc1CFGSBPJ88S6f1E58vhjyfwnms5VPouZ3dmFxGiRvhgHGdTLcPUtFxzCiU8",
  "key29": "4xEqsh8UtRUgbeyBsTGfWCVfpqfib9hsFS9s3LarZbne5B6Xr5WRtXLgdNQmi4NkLoyQ5KXcHZ3BJdwM2njQoGEo",
  "key30": "5jvnQTjgFtGspvPVnPQPCRS1QRjCXh4w58h7NTB8pNmTJFwNY4hh53oyK2CGMBnuscrXpESta957tBw1u6R3Cy25",
  "key31": "4H93id51Rzkbw2ixpAYjYS5MTQMsm2DPVTQnjjhRKhnCd8qdQhDGP5fwjWEKyjoyCRyqn7AWTSGu2B1xgSvHppyv",
  "key32": "2f5oripChYEcYhrcRhRVG5ev5E4kh33a7HBMb47UA217XSAvhqUKsXhdgshdTqBpjWTU4w4zByQJxjKCxCp7vB2a",
  "key33": "2wcEFX5H1AyMW1JEuRoVueepJ691qK2Pn4v45xwjLgsTFjjt8aipTyuP82LjocibEG42mLBzadjtsuwx9Ps8JQNW",
  "key34": "3PWsGhRkMLhUbMmZJvYXH76Rn1vad3bi241roZvjoAeQfgGTWbwipfYfcbpi1HwXRyM7vhxuAXpQy3xtPFnfDFGX",
  "key35": "4EsocaYP4CMEsAQ3X7u1kowqDUukc4Bnrmgx6j2mtHckB5paWorcWsvTC6r3ShTqggW5GyK5ojaUaXxapk3dBZJd",
  "key36": "3u1qruZkJ2Sqa1GiuSNaUKUFFD5MgTDu3rxgnNSQpaaYRAuZgo2ijTfgugbmtctPdGaorAToD8D87N1XZYsj9uTe"
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
