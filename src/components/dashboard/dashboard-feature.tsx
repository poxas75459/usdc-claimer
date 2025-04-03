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
    "5ssPwmfVjzfSDeD9hn8Pdu3yREPMSFGBuidtWSAUGP28dyTJLFbRWfSNiyoKSrq52uXTpDUHo3zZxNz6J9CVESNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EozG1XSEacHBf9HqySp7Mjo7gvYpZ4TXVBm1pnb9cndJZC3x2HErJAwwtHvsAFRswfecNBKM2macAJqGtUMM4EB",
  "key1": "iK6E5hsXHBhkSXuXwiDRNv9h98Thd9gsCd9HgQQmo24qTiiR6fGcCyGLtHvZRuNQKNVMmtxCtJJbAd7PnnJXeRb",
  "key2": "2yATgJvKLK5nKLB3cGjuxbAmkhWx6jZxRMb8MbS52AZUm6cjD8xoAzPnsJLjAaz39vg4aiMgKXWCgCRZMk1veNWP",
  "key3": "5WfKmreubdumqxFRBTYX9WtVaQKa6ubbDZTbkRqFL62s7Fo375Cg14vriYDgqjmDtawDUqUN9EKbXcWspjMMDLXi",
  "key4": "2m2AuqntTwFpr3de5G133sma2LB7GPV9CxBiNQY7Rn9wD2id9WjgtSQPo8JL6iXqhbQ1MoU1EWgh5JHtfMosEq6e",
  "key5": "1uPrpSGdxBKVpD7zfDS6ShsQnvNCRYoGsp69GwTV8JXCCMVowjqVENw8xDo8NpgzjLqagoP5qE9x6d2ncxR1LEZ",
  "key6": "55HC4XEhQR5ZYcoYRrou4UqnRvURmR1g77VJypNF34ZivmEAzvS3ddWZUHPWZoVV5e5ujkwYVp9zZsGsDq1za4rj",
  "key7": "2DRziQ21hoGHKErDjQXwTeoEr4WVoELWVozxxsg7qCzySNeNtz8a4w8GMBs6fLSoh9Dv9ncd7V4hzSPtCRujg2zA",
  "key8": "YDUXLHPeN1qzjpuCYKJUx84s2XhWiXcmYun3vekvXwo1w5LXt3QR1Go53UyToRTCT9q6kqLsQXsMx9gPju1G4Xv",
  "key9": "2SMtiEeMhtiq1ZuDC4LRgFXV8c8vUGxA6rkyNuLKW79rjdGKpwnzpz3xyh53F7LtDqcJS1F6g7f4dKhbCkcGTJdW",
  "key10": "4CxDtQhwZtHXjTrurJXHaVsC88EXezXuAEdcBJPLiVLhZ8peFWsXzkLKgrWfZVrHkyaCcu6us1sWaR4GviPPvVAy",
  "key11": "PKBeyD3Rd3GxdxwxAuCjJjmHXCF3LsuqiNgjrxRW7qP62f5JYzLaGpnh8ZknSQuT5J6iBAXj4d1LRAoTqmXDTM1",
  "key12": "5YyfaRRtMtAAYRCrzu2LQufHYFiAG4zHxNBwy1Z1g6rgaFrjbKSAVgAkYkoPp6jEfTFHGD8bw2JdGHwnKNPj2iNv",
  "key13": "5jFu6AAydFLQyWmWQZvEcSA52ArubSt7ewdGkuVjUqKPkpBjDA1KZR1fKZCT6abSns9PXins7vi98gGESqnGZJZW",
  "key14": "5Fs9yjkaucUCdWpBTCLJzBzspeersPqeLeEPWdv7QxJpjAy58iNQoMMMqxtcyCrMXWfHhrpRYQrbARhrhHVpGKYA",
  "key15": "2zmw1ZjZSj5pev8CXuxD3jn3EMzck15bKJELBQZpRTncuiUPYYhqW7b2nKZCveKPkgkdKa1Lay6AMft7vffAYHMf",
  "key16": "nSvYgTm2L8uuJ75PhbSHEFUavYpE7zrGPRbTZMBnSLdWVdCVNmpyVg1h7sbAZu9rphpWuH62sLqdB1bZLp5sp8x",
  "key17": "2mUZ7am9Kq6rKGCdPDgAXzLFUTrpxuSfbK4sxmHsUbiW1gD3WpWNbwFH2XrF89AyBfKWUevQ6xieNpMkEgzqoBEC",
  "key18": "47c7WhEyVa2dU9iSoQb8FS5RrvrXDDEp3xTNASPxR8oyQQSyo7DkdRbmQ7Li5P896DbyevmmnMQnBEzd59a7BRjo",
  "key19": "r8Htz1BbPzXz9Sh1MJN95qS8i61ceq11SZsoMj6JPXtvGEsWYdhvG78K4cVebr15KP53ZoKL8yrFhzXWuNnUSqy",
  "key20": "po2pK8xDRVeyLEikYczsVQ4tq6NpJkLRtQBzrCuSingTS2U2uxLQGGrbwFqTdXFiwVr8pXsUeUqDitqjsHJij9k",
  "key21": "4nuo2xDK63VLtWKvizRpYUcEJUeQKVMrVTF3DCpUQpy3fuV1ZBkU7fVbs9wgrbqghHPwXBohVW5ZsnHqNWzypHtp",
  "key22": "4HHJr3WeZcEHs8RQsRQ8J93gn7wPSjYdw7KVD3hsSLbEcJSFq7LYuZxSKY7G13ksg9ddU1pNJpYbKLaYKjGcjSc9",
  "key23": "2PUebM47MqiHebiSg1u71LF8b3eYtu4keuT1DKov6RH6qhieXwZvcDdFC2ZeAD9E3Sg7PDwjTJ5NoLozZMQQ5cKL",
  "key24": "4ys2kFRqySY8ACxkdCJB1GcrWXW6e7bfNJ6LHv5QihwkKfYp8NJECiKjQPdmdRxeLKaY8Fop9N8FdFV8ZsqcHbZc",
  "key25": "5Tty5D1xPvw2bnfZ5DRwuuvcv1axz5H37Ng7WGQJPJDriaXBXprgQPnCvWMZdtHXwQpkb4GBNR6nYoZCjMk1MS9H",
  "key26": "qkj4hktTDE1MwuMNUmrbDqt9ecyoeMaGqBh24FHXaCUqoUXWgKMPASaGVyv5AdJP1K31J1qaDwUmmBemh6sMJVC",
  "key27": "6162wft48mR9wfoc3LRbdkXtKdfsZ9suBbaYFbtK9WZs16DC6syXzYK3EQZGmJ5FGL3YebrGcRNbh8yqb2BZFJT4",
  "key28": "AFgwTH5V5fVJxJUwx16yJRKxW4CkwWjPZergPPjhV8e5zzSDApMvS3BNAGwXWTaNokACLw3YxThyjW6Ztgc5XGe",
  "key29": "3vdGHbFwWS9gn2jRvKpBSTAqHouw5uKZCtfDomo6s4yVcvjutRwW5cbEott7X368gxcdA8XyJWxNo6ks4EqwC4FB",
  "key30": "2QzcD4F9vdEiqZudqoSGZbWN2B3vSLZVVAUhnoMcmFCQDkcPGEEjZUqBtWMtRQLnf4Qkm5fq1av29zzU6zVwKC5o",
  "key31": "3fM9szU9juTz1b5sYvkTcpmiByhAWhGmmHuzup7hicFAXnvoDXfcDrv1yGtXxGgV3NvAprZoPfYSiSoJAipTauae",
  "key32": "53Wbuu2Q6D395kyq9Gsx1XygRFET2BcKr2i5VkMmMT6ddewPqjDBASAxycE5kzGSUj6HRpPE81xmWoG4kiWcHP4b",
  "key33": "5hnT9KPzCa84cqxzhwcAJDkqJFUqK5HhuMiTnMajCKuz969BSt8dqARY3xLeGEkKTuuF7wM2HBer2CzyVGwFbt7J",
  "key34": "3TFCnwJv9Yqgk7DhWbS3vfoCvpTj8gbbqzwsAFvaXFtNZ7ryU6K8txftYU6VJF6y4CFEu5EUrNKp8ULsB6Mzw5gZ",
  "key35": "4vh97uELEe7RGB9Hieb3m4f8GKqF5x8pC5nNLgKBo1Rb5AhHCNLMd3epvjejahHvK6FVrs32faSzMzAZ97uCqVax",
  "key36": "5942DA2242QM3eeiu83APckDm2HELTsNhyS67Qzp5z1yyP1ZagnUj7t5eTQ83idXAkc5m95kJUtnUoAanDz3t221",
  "key37": "3tC6XFqa8CKKYHMsSwdQyir5fPwk57DqkuY49rmszVz1YXgTWHNy6bHaxk5sGMB19n2CzV98JhgU8PTd8LqVNQp7",
  "key38": "4sGPSGwP49yws9oaeW9cJuVALfxrbDpag3EEBPXmR78Fcc3ALrgTDzDnkUV5yE1anyVVbW8BiMMWkkwhKyaUsCiM",
  "key39": "4rp6Gpht4MqfCPtxjCnDQqino8X6qf8mGXcHvxDAQmBEtNEVGH6hbhp3L3ZosvvpEGUypingtHWaRTMCx8rgeD69",
  "key40": "5ENdbzNjyGQ3pZpm2T56dPLpb3KmD7wt9N3yPFKP1YDfaPdtqRkbWsPVd7jt47QhMmgTw21Zvvt2h2wcxFe1pgpk",
  "key41": "65CStNnwPA8krNa2zvuQHPFdQxA7xUmiFGSpGUd9wW6Khn3kN5fauEeHTNGtUXkWPb8nJnhbwtHKHiLMAQKNARM7",
  "key42": "4sqney456XUGAnPLjnwTRbh2e5UAEsBbcnbhV4F8z6bHtksLgmso2CKkvLizWwAWdGmCYfDTnEwNb8rjYKpCK5NN",
  "key43": "2TrSAxvRusBeE33kgMvKWf3Eu4FCfRLTrbQcKmyNTqiW8PLy74iztZUV9zW2Qi73mYyNk2My9DUpH1mQBsnbZKBq",
  "key44": "4kZonCCrcAymAMwHHbftXX8xvviNdTu9YwbpMYYWJSyQJ7aJrezn2TSxTWhui9jgBxFK1jQ782JNhHXMAvPVNHta"
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
