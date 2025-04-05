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
    "281VcbrWDWnsbDJQJnVCMWE7m6csRpA11gUMSei5pGfG8whHLnvjchTUS6uSEM5kfPSEXT4E47KeSxeBbzvDXDWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edUKEBjj4pW9VsDm6pPLiCsccEaCR1uCCY1cg7YXiroWoJkjse1jPnN3Gz51Sm8Ur48fywL3WU4Bri2RG2UMWFV",
  "key1": "4EX1WvUqVTbnZprK5Bths3GfjoK1kDLUrJtbVdhxNq2wmtQc87NSS8c8rysu3Bu1ttY8pNQDzjfmXkCUniHTqYHa",
  "key2": "64nNbvTcT1me7mj2hvGrMtKRKzRE6y4V291oFAVNawC4NAwzX5QhzGgpr3nuevNsUfiN1wAjuMXaq6bwP7d6CeXL",
  "key3": "W8s9PgUMaUTCA8yhWqQzqdwayUmhwKdihi6BocZLhe4sjhtMp7MWYseUsxA1MBGSURFm7zwvoowUdXXvVdrPCGq",
  "key4": "36wzT7c6nNSm69zZcLBSJBKbUziBpEP7ikvxAKUZzuDAxktDE9MtWKJff4gfX8sb4YeHTbXFVDft5xVHMfQZcvrF",
  "key5": "5vy7DvQ39CW1FSvsfqVxdV5sWkayxALBGjMxu7mgLbt9REehfjbXEXaKkNrYDRFStKanr9zLtC5QNFqwzLNDbSFT",
  "key6": "4hL2HX9XBGXktXaQUBTYPTm6E9tjdGeJ7mRvzKa1FatntQjSK2QrGrGHKQ3hiVktH1tdAuoZbLg2J9VvUJMDL7Xw",
  "key7": "4e4SENuyDkvwxKL2MGNKg8RTfQ8WWeHbPWL4muosFWZJaXjx4MmjHvidBQkSApgkVXuU7grn3yg5ruEfuyrhfXMU",
  "key8": "3GTg2FMyQJnK6ALtmidCHRiaAmBreQqYpjNqAmjwkDMw5kW88C9z4R16CXh1pXKgFNNXdceLxgdpDwTiJ2eVrSWj",
  "key9": "3gFrEutKcUhAkPK6khfitz9FLm4Zhhhfzdzu1w3TFFkULcpBw3pkLLZTjpm4b9idBRPFzdo9vQkggPw1LnBFzSGd",
  "key10": "5SUSq7jMq43wkb6owsXpUoqDTpsMrrnxvXdoqWxfVXRNuiUdJXEmbh6tPoE2bmoetWuizYUFKCDUd93fF1CJ6VQs",
  "key11": "4Kgpt3fZDfYjHycxoTk4um2dZsZQsgvGrYDnW9ockg5EYpRNBAudcH6DQ47sMGUjge8vGAkGjX57t9PZSr7TJQZX",
  "key12": "fXU9i4HmYCoWepE4LXXw5Z8twd9CWyNN7qDm1tSwe8MTa21t6WRLVuia9BcExyeGmEk5d4jKRBbx23JM5QkS341",
  "key13": "38PCg1rMpbXBXW6xDaeG8YBErB7ppoyHfQF5ST7MdPettH2vDVt9McoXWYfc87wkSzfw4kUXqWToBCdvo2KAynZM",
  "key14": "42YNrT7qebbTypNaX4NiMQUt5rpyNct6ZpLCkUKcFpeN1DUec2B8ksEUYoMK72JGhfR1KRFn5HL8mCM1Y18Z7ZUX",
  "key15": "3JnmtjjdoqeuZ7FXTDhf8QgKY3kgGmJfc87Mwitqt9xs8Fz3gzYNCDJY81nqc5CrdqoL9tPo2Z6qYpys1YUUvPCx",
  "key16": "4kS3dVT5sK28zNXEXLEuL7Bk57358KMpg9pemSLHCpBYbUHV2ep1zBt4o89Y3wveWzF4B3mcbsxnLcPa2qJ9oEMf",
  "key17": "2q3c4cSWSaLDiKhAyo9uXrReHxYEigtKnB4oDfF3DYQnuYBEDhfWLwEQWeM8uoqknQVrpsiKtERgZ4oAzrGGrDfG",
  "key18": "3Sz5q61uxTNkFBp2m2CNVmYm8utPNo653kCJZoErF61ZT9Jy9MAeTqA1vmHdktAth8T4LSPTeApAQdFt4d9iscE6",
  "key19": "KMkaxxj5wz4ze6kQ2HVMbaFSDWmYY6WdnvoeAdyPjNfiMkBxFjh3mniUqKfFysBSCGVwxnWgQS4tjTeQgXMqpve",
  "key20": "5VQAdHbBhWvNH23ksNee2rPxaSuwY9qMidXvDQDNJVy8ct5rrmUtV6q8mbctNUvMS3Z3Jie7X7Z2cch7jeRFVcWL",
  "key21": "u4WGwWXtZ4fVBWpfHLde4Wrw6HaCUfLTKJn8M4bZx8frGTy81pcCHFbtbFdjrU1qGoaNBnixonECcs3jpEgKoZp",
  "key22": "4ABZKUpXp6Vz2p9td5pCrwkYk7S6Nh4pnhJTWgzP1JLeJ6TSkFbUK47DeGzfPioze14RzC83PXnvtNmKrCuNhRGG",
  "key23": "2MnM5VhPH4MmtMxpoU6ws86VFzNPXfBjMiJbLM8akqBV6jne84peAEU86xLfaMcM2xFG8vEDcS4a54RMT8KpvcDk",
  "key24": "67FUS8XyRWqutDAnd3YMABnHURchhUomCmu2jNvtQ81J7obwohqM5wMXPFdUUmXqadPHmNmGo17i95B7oqD22AbK",
  "key25": "4rRs6WHXChBwvx1VHmsFVL7CUfXKxftU7MZnTEi8ubtn6CwTarBr6gEBEL6uhQYWhXWDWANuondSHP5TJjYgCg3m",
  "key26": "4ThtfKetjd9Gqo2WYgvEPosxBg6LFNquyZhtj47G16GaQySt77zsf6i5Wqge74729ByvU7ShoaWcjakXNxXX6iwf",
  "key27": "5NJY6LK5ep4Gt1x4PLJ6z6uybE9UYs34jRcQdxvoTZvxDK3YYEhCrweXTpW5DeH4Zcc3CKQpj4Fm8kaDGnjjsjBN",
  "key28": "5FFJRGLGiA1K734ZUm9xVxnPguxPL4SDSgHiTgFJHgQV3hvSdne93PAS6y9PHHegoPtzZ7YkF74jwVAMkhwA2jAc",
  "key29": "wKqsL2w1qarg1t39LhEzSfoGDXTfceVuGi6eJ8Zy4dKdnYA3mwZV1pFCanTRchYjS5Xs8NeeeuVRFsJrTHyUaX3",
  "key30": "4MDMX8ZWMJ51pHvCnh8xPRg35iLWtnbBRLgnrtrmDUdAhpq2k9Yo9zUPGfCcfCnhfJ7LknFfXwRsYTQC2tC2tNrR",
  "key31": "64UsPdM2GJixPoYUomU8LS8ny5BvBuNpz3KgrmFZ1XVxy3jSFeCqV2qrANiwtcbUHKUTbUYrb5bM8JDcKbxwR1Vr",
  "key32": "668e4KkFoMiNGPkZ8Kmvb8jMCsG2XFY254EjiEXuYHovbJ1RvDoPhz457V8jP3YuEmJJcrDmHoUfFk5DhUMPeTiw",
  "key33": "31CLkhsYoZA9GbGUyYAAq8VTJQdtp3R4FpSc9AeYK8x1rCzsATwB4zj9RNvVjQhF1Q8ZbyC14nDFDwSwXJNX7f9h",
  "key34": "29aVdSFxx8mWZ2cnws21gpmQKHREyA7mpHbJwnGAxpmqsXJbyf8UepGaW9ZyU973L67gdhQY8wVyYwMEbM1thsc6",
  "key35": "nEPCYQPTf9D5c2QDYJu9pfBw9Vz4UY3dypTGqV1NrefFpswMVwesPDmyYBY5N25v1qVQUcx1UBN87bzMCd6buy8",
  "key36": "1xpdkmU2X4mNrCYhtpwsC9Kj4fkMaGyvnKs6fbWCuDhRB3vp9pdHSXRrzLPryXxYN1d7sjeYCyv1ZpT637NWir1",
  "key37": "AJt3jG7KLqARQ4zVdqjYDnWRo2unAUx762QMntvVSK9mvmzN3T71TrqpLetbri4jRzkFUeuqGKexSVgZ1XjABHr",
  "key38": "4vXFMrp5Zyovei69CE1sfDf8ocbGnKvBBXd6cdfpZNbUyf7jpXUUW6PAcZqz96GRrtbDSwf6TJZwF7nu4vE7xdGJ",
  "key39": "2qnvrmtc6JMGmuoZYkWXG7kPNXg6YJwb24bvFvuebarg3C6bYXb7jXt5mW98FN9X3mCKnyCqD6ajqadCyMWkcojp"
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
