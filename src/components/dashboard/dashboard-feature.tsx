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
    "4LyKQvJUXSLtq4WvkvqqBy5f3pkXhmGhTG4hjCXNPZpFfozPYmREW5juFJahRRgtB8HYhXmTuTZnBvXJxLzrSu3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "587UFxVyiDfheTk83W7MiMLVZDdCGDQ6cMk8cUHpfBxoGdufB2Ve3XuFphiohvgdShH41re3163n7zV8FZDBwD6Z",
  "key1": "3r7e9wgQJCjSPdFZYb4TH7TK81xgeLrzbNiCQ3NkVCfogAmc72a3oomV5jzhzcut4qNGmcwV9EsyBcVitNTwQDoR",
  "key2": "5V7C9xgmV3boBFHo2JVnVmdG5E7oGXt47edTMUhYys1mQ6Jb2q9MYzi96gCZ47LhCyQKGbXYtFKdp97p9f3Lg45F",
  "key3": "JBzCAakqo2V22X1QQB8kTxW7jAoQrpdyQFDcXd952fME4YukShrXVprU1tRWNqPMEMhkQ7zHHPU5gkeEfc4s1iH",
  "key4": "5MCtkwFg1BVnW7qZnX83Ti7YEHymLqDiiWfUh3X6jiu2fBCM1tHwPmtGjMvJpryVNVmtTFiw8Fsxo3jQc57hu78K",
  "key5": "x2hf79kZ1qtJYnfcuVqpjus2E5tHjUMRnogfUcdxBrx5kJNQ5TQiVudosysKNvUPwSeKLScSDuVANzUZxKw9Jeg",
  "key6": "3wWEcELbNBPV5VXUKfV9bLTftchEVv72h9SQc3ht2KLnJKYva3T3F4ijbBQE8BZCHvLrgQP18Q1a1R9zQfC9JqX1",
  "key7": "DLkw3bmwhyejyG655gQxF67HUovTyAhNfFuBRUzRRQu1fr4KDzYUxEp1GyHwcYHXHCoYchSArHGsADZHErDbrCC",
  "key8": "6BcSA9XNJsjCvA4VazZFx2zx4t3wrTQHUYeC6JYEjGkdccZe8vC6hNQBcBhVaeDV48Rum6Ri4Y5CGL587PcHxDb",
  "key9": "46SyD1gfTdxYoPWNSbCRMYsm2xvWGeE4oBxHc6oG1hJBJuiKtvKmQRPSZiyy5R6p7rn5UN9RzBqUYdDZ6R2qW8Ls",
  "key10": "5Uy9Wtu1wKNuyyGcMcnWhYR4B4QWjZjW8dSnvJPBxk4mUjuRGQr8GQz5rFuHvw1hqs9TRuCtRsvskxixqe6kwDTp",
  "key11": "3KQABFAXoaSf4bzuzsfL32QzKk8cYarLefcJMfKp9y6UWTR8fvyky1uRBNSUARxVgDL9ToNDGQ5Wwh1E6qLioHcE",
  "key12": "3L3RNvM5RjefqaVVovTCx6EwfvnvHA2XRF6FKKjeWqR2dcYuSoTx4PwbDxPLWVGfoXgHhAwAjfmz81eVyCHSFSTr",
  "key13": "kY1K6VznT3k7GvqHoCFT6NZxQYJxN1TNRT6zcwSp57CNBvQCaFQfFxik5XDngADpZ11a62P5uVrpirLv2g1xuQ1",
  "key14": "oHL7JPR2ryNgSZ99XuT6aJUP7XtpWkAchdnyExeKCjKB5yRf5p3eKUQ6VRz17yoHPAEBzVXN9WmdJ7HY3fJdMGu",
  "key15": "4eiyzugnXyzGLAkq6efe8BqVnAqkCk5pXgGEgNSAns5U5asDa4ZoqP8qwDcR1gCYTRrBqwxaeegMYn7HQt7TUFGB",
  "key16": "2H71Ys8WeNcKdwY3w32GzEpEas7QtevNUbn3hLMjBD4N4c7ExNSAhkJ4hvpVNjLCmLMab7MHVVdejzZQ4XnQoeoR",
  "key17": "4aQzjxDsntNk2DXANmFiu2bfPXn6KHXu5T9NpAAYPjPqWUn69GRm6Adm5QpuNsPjNijv5M93ShCt75Nym6E7zd56",
  "key18": "3hX3AyqeVf31Tc46BSyert5Wob8hfTZo1FAiAbpkE53btb5m96hCJpF6WjCdFGzk7kayp9Uv6ehkxsWuK8JJGCTr",
  "key19": "3DXoHs53RW7tqXhBACAvRQ5Ybtej8yKWpyEzSv4FQGC6w8wxxxLVLveJ5bMPi7myyfrxv88GZEd5JGXLK41VKh91",
  "key20": "2rbwahUF6szwNqutse9316vuapHd7JXKYd5YFuboec6E8Mv1PbfunNErWEFYJVLFfHnVtWWnw4127qZQ2Q2QAN6z",
  "key21": "5V79FoHAWwGwpRiDg41Wb13VonZG3P1PUAa1p39Rs6p5vKzbMUL8UpseeW4x1mW9MQ2h4JaC4JPX1EapFXLkm14D",
  "key22": "44M75ygMFA4dDSLZdehLRCa14jsaZpFp9DiMjo3L75QeFs12mjs8tdFD5zMD72UNi184e5B93E2GtVFeacf8Rf4D",
  "key23": "3sYDKLNU5WsBzKqtU6r4EBuofC6BWn7vnSCjWC1KXjAPCPVB3yzVn1hyzejGXoTS6Nm5nkRZMUjqxq5DxUaqaQ8T",
  "key24": "3xMBrgMXxNACV3BC7QRcM1RAikKbwXz6mVuy4REAisLmkTcgmqtTHP7qXHJS3gCCgDfniucbmmbi84ca2YBfJK7f",
  "key25": "3CHUMr8QBipuvHvDrjyMCyFETipcdt8ye2rPDR7sEjiV72oLawC7kyrfU4x8PKRzCbajMk5Dz1TGSuziuEDcA9rW",
  "key26": "VfjRR5fjCY3dk43ZeEZe2SY1tFqgCFYzaN6H4KpjZXdH9XsN45nCrVWXJD9wQ994SEp6VPpN2xgHfTH4bwPzddw",
  "key27": "5PdujdmXD4kHuEH8iBofKcS1tT4ihGZskF4BD9gY9HPzohtuksmFj19fkzkkPWuLZP66rUXUB58gJUNF4tbtPiR1",
  "key28": "41ekV5kbJFwCKKdEKKQrHkMPsWfr9AzjyULRau8wDgEztNpyRnHcMqWLSKAy5XAt1vouEGUpxMJMYsE9n6LoCnyG",
  "key29": "gPxLanayuN1wjDwyjibHSqFr3NW9wTPJvvBRpCkiXWTcbNniXYyf23PWs583Tphga3G2jey2HN6SQothDqvWhjE",
  "key30": "3dSaooJCqbdgozdrtFhPXFNsoqx7ZZ8RVdyLTvz7ZnYbu6pZHoF1SPsxuTVGNve317L1m1j8nTM5b9ozjuRaTMaJ",
  "key31": "siPd73reB4FTo2vug3M2vdAtMtq5APbmw559pF1u5Cw25eFtNsNsNGTz7WF513E9HeuYXXjok7wU6myiJpg4QbW",
  "key32": "5dFUpTv4TbHmUdyemRQHtPPgdkL5g43eJcoTydhaKdcC9g3Sv9MHgZRq9wZ4vLoyaSi9zc7zar5upAFURmAHWbA2",
  "key33": "t5cpY3QJkSgbv2c3rsLpJDjcKtt8T3dJbKDH2P5561i7HJoz4Rf8SGeTneC7R9fZCvw16WocGHnMYHfqJmGezJu",
  "key34": "4P3BPzrFZBw4rqo5UzTpYnrE41RN7sxxcjMn7sJYXUSTBXJPer9b8vmEZFR5bCqv3Ag9teFr7Ky1arLqB8ze63kU",
  "key35": "34bcpWZEcZ8AkjsKxDiGdtMT6CgmN6ALJQbL2UaABu4QhmDSiTsvwBDhSce2P1dCghoopkk5cD2ugqLZzN1VP81u",
  "key36": "3Z1UYGymyS6d1Zv6U9RFNrDfai1idiZh3QdisxmjkC5mLBQ3y3bVjhea7sAEQAMeZXsh14ogP7K9GVrB7ocr1V5h",
  "key37": "5rCUfnhxKzKsPKWSztSd4bYyVG3bk8jxWgmA3Eo4fpHZtmEfvGsVWrHR3VMffcDuXgPN946Tu4WzGfBFC5akHbom",
  "key38": "JBmdJ44HY8111WRN6jRiTLH4JzEkWLR2y9JMPb9Nt8fqdpvybW8SFBLRPYN8fJERc9XJJQPRHoXtazBsSLcxQ6c",
  "key39": "2bxV1W475wxCBpPMW7ZkK9yj6w4v4hUHktQb32NTBVFLqifsBHGysyYg8cXvbRgdy3sRg1dhSjXQpjhn4wQXRC8X",
  "key40": "563ZXSZUYUaAQTXLV9pWG9nUJziJx3wjRAWkJrfz8KSq7WQFpdrqCCg9Wi8XBVrVSf3HiUHnrwmqs39iZFTQfDCt",
  "key41": "2P71BLrp7Ebftbt5DJBmG1yGHRZQeqTLibKyDCGHT6gN2wXZpNbHmMexBuSUB2JqGop6jz1knDyFWGPdh2jxTbxi"
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
