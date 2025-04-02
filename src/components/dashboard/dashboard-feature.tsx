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
    "2V3x1jREG8rdTzaog33dSd92nVxwCCnLNJuYCpWWiwYtuUrM5A9y2BxzCGfV2hsNCbKWz1hxPAsj4eQtQ8NJR6vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKMNCeFSwtSje4B1UGLQRrbdfMoTvaF3yD1m3RxMwZXriEaDR1vB3dwx7YKrEc7Rq8tNza1QDNsUZYWzm13QvhT",
  "key1": "4qjAJ7aeVdbM2m5ux9HjAfPperDhUXgCB3pnRopqchM3FqpSADu85esSx6HRByCgYZwxF1toMnTHfJsyAhSk8k69",
  "key2": "4HGGmioCfhbUgvSsqCQhFy7ah3gJ3gqN13pCoba4uEdR6cre2uPopQgVDfyJaJAdpEN5Shyn4wH5cZJRtXmRiu86",
  "key3": "4nHmcP4Ugp1CGFeV8bnJoZDC14wN5MoM8F4ZhHJoRhifcmmqb88puJXcQ6fwoWqpjX8Vfpw65HN2K54ZRHhQH4AR",
  "key4": "2PsecAG5iAvbHNp8vLp226T4pzvScti1H6m8DasWcS988SinRg9CFPc6qimjw1xZSYdkp8xUcWX7WMMzTrxmMAfD",
  "key5": "siVH4VQnY51kFfbuKLFZkJ43xfaipy8uCPh15YGhQ2PKzL4T9Zsa8c2wXBBtkcZVfkU7RFsqefF8dHonrahv6Lu",
  "key6": "4rN4jCBgAZduXXBnDBSKSVJqcHyPcZPsnzzuVJr9icKectvjszjjEPn3ppgcv2eZCkt3CjZEW5gdFNnSsQCs8WUh",
  "key7": "5bA1q5PRPD41VxGukbzi19Goxy1JxPwRsqEN4fqzNiBDMrfDu4G7fVpn29Ygnv1RVSDhyLMD3ZJadd77Xs3tvESu",
  "key8": "4eQYtUs4Bx2QkZRdJ2g1V2Xh11Pn56WFLDsGUNVM6oPVFSxbMTjX8REQ3d9Wi1LKJGiUye9ArdwifS7oYNLGELoV",
  "key9": "3aVozkzQF1QxKG9H9TLWD87NgyD1zuNmwuxWmBTjYYiqaqxNnJVJEP5t5nJ2f4z4M5B9EuzW14jD6bwbhV2rrYNK",
  "key10": "4V6XMD2RVuaVH3A5m7nmG1QENYCk7cZjmmDBK7ruChGtMJpMb4S6WgfwbT4t9VyPSEg5cc3cVp5i1EFTpAaWJ1Hx",
  "key11": "4UrhdaLeBxqbJKkwKDKmVwqsXWcRHnxS5Zt4sr2WU9i66TXtnEbxEvYqeTtPEUKDq1M19NmhG1ckNXYeRaryTpf6",
  "key12": "2XYKEoey59vJPWRWKCshc9ydquXBGkxvGtzb6DcEgSStJhzrxg1AycB9PQLfeLVMCHcfFXQDVKXZ7Epu9FnPuVtU",
  "key13": "2nkpVM5qW3MjA4A6VHWCn14mHFuYKKUvY71toctwSe4AZFGEy6RWsiaog1QVtHwseKJh7cR2kEQFuqTTmV8tZBLa",
  "key14": "3WLwQTS1QqPxncnKimtpGZDeiXRTHzogN9eoxLX8uJ3VGBxm4TMLGDQekRegeRJr7RcoMQjP9oQC9zJdaVUKyeF3",
  "key15": "4nwXCJKuFKdzntp6pegVGdgzPtoooB4w8fKKec3HSBvSmajkUCTFs14EP9yFDwqToQCGSRj1LZ7QH7XdRW7HpTF4",
  "key16": "4zM4jqnQjfAxczagJtLdd7mmf6MKDCyjmMgnak6KbbijF6J58oSyEYbmoNK7nnRAUbEeK4LSQXL1DSjZv5GUTQW6",
  "key17": "4HC157C6hKf5hd1wiRcqyPHkcPBhDjFH7JzAp8ZzMYE3vdBbAMs8h4xmGHXjLFkR23tPFvqBMK8x1Kq5FFrMSoE9",
  "key18": "2y58FrSyWczVxQoFoqSqzYYJiceQVeGr9THgWNvhA42AufpSnpsnf112aCQ2Pn9FTHhAfqu9U9qiNawNCzgsKpjJ",
  "key19": "2XMo2QVm9xXa8Tx4J4EbLtZJNCjhfuU31bUXq2Xhf1XhBrw9sEjUKzhVXHW3u3dg9QB6dqSZCWs3b2wBRMJtxXVF",
  "key20": "3gphf5g5ctpxcuvhBqPKowwX3PP5crPaLYiCysE15MmCZG2Q8XusWtLqdsEqA9E9hSTbt1JzutcCsqDqHKMc2PFp",
  "key21": "2SLLFsocssP3vgbnZq1pEj6B6SWQ9r4a2eavr5c1kuoXPQ6RuGpdwVWj3d2wdjTdmimQZBTKQtdQ9QffQxitcqoq",
  "key22": "5E3SjgdeeKE1a2fGTDTbd4eDMKTRgaaCtoJQXgVcwEBbPBTNYEJfAJckR8QrFwzfnSLgfxJ7EqTgbMU8SnMXFXYm",
  "key23": "2q4bi8CdaGFQjvUM2ZuCfsQuFqLNJ2sXprMSrMHZ3HB3mEiSxa2tmvHEvQbBe2dEkarTsTw6xeiFUyefZAqoJSe7",
  "key24": "o7nojYWLJGdWsHrLuTU5bNrco5d4Y4GEDgg4DJeNPBfmAwyLW5frs2Z9f7BF2A4yy23pMM3RnLuA9KR9dEFkTy5",
  "key25": "TMo3ZokromijyFKYv91n9n2Zk2BCpWoP4D6ejnjVX1QKXc41u2Vgtb9R4bFCDsad9PTWD3SY1YzULBjwLLUaFNQ",
  "key26": "3WkSgPQjAYUWMUHZHyUaxac51PVUW1eNcrL3kddpFjUQ8PaCqYBY2bRozjWEnAQerHztBeZGpfmHC1ktUNtiy4r4",
  "key27": "534Vz1HyHB4mGvQvd88i8pFFAi7GnCyYiHY8Lua4z8vP7M7Jz2eGVWnkRx5iMae4smAxC25tBSBH9pnVk52wYJ3Z",
  "key28": "3HqSQKq5dvs37cXNF1umLoYvTwYWQwNsySdxd5Ks2AP1QpYnH2UCkfVXrK4wUaYy9Ttbakj8hkUbHMoN4SyQVft4",
  "key29": "3HCY69aNE2h9TrfMz15NQ63mfkRrFvMfZzEz1xJ2nw3hnf11A7FCcsDdMcAdinfX13ppp4cRHv8A1GknkuJwSPXj",
  "key30": "63bzBLeoWvp5D2HstU5MZHUEDg4eQcyvPkUpNcHxbRgEkYS8FSbKh36CaihLEJGE733qGGwvN8Ba8z9CBT8iBwpo",
  "key31": "k4SLo3Q3SigP7Sg9aPGyNdb3VfXzPvbSt761aEoHkL9ZvzmbJLDbZ7YEuzS9q7Y289bodxERz3CFh4JenMkeraG",
  "key32": "3QpHp6P5ZpbjE9nttBNoHx2KFyUurdzroGK6TCS1RR458RmWJNf9m5wwRGpTnfch8PvLiBbHVFT86zeZuqTCL6Mo",
  "key33": "4vLKgD5A6UZqCWgX452T5s9TjE6P5Maem5rVrkPAFF7SAMUA1LM4Z1351phA5RTNJm3CNBkeko3vbfu3cfqyoQmm",
  "key34": "2FtsHgW8i4CfzpCyMBHT9rzmUQiui512PnQC2anrvPHm2BXJLfKrk67MFyXYkZdrfJ24f5qSMmVMPE1qdTCJcYXw",
  "key35": "hNgnRFa85FdF5uif8oP1K4BKgJbMaq2bJRxmDjtumLKMpyCTeaeTFgewdjXvgEoVori2ddPoPzmRyDjcCxGbHZV",
  "key36": "a9ghdbTSQiscn3KdgaNvRG3wJ4ho4WfZjGgEskWTpr6uKY2DsimemwP7eaCNpz1G6bB15U3M5jDv98i4qbXEBEf",
  "key37": "X2E3tKVxUqVKm1aJQUq3jSi7Y6Yr2h9VKkKfa3EhGuJ3u7YpW8M7RZPnmPUCrLSF261BkV17sHZG9tkKA1Z3iYq"
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
