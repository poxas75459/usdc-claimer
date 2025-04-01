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
    "5kYB9cF3gWqonH5zsre3xfTtAc6bNXHkWtQYZj4FHEFa4vh5rHc6awd7JZu4EDw59fvznEMuzzWzw1NcWz7SisYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3akvHPjfZdadTyx5eXUnCRFLHHPrALiNaQKN3oK7AduYSchWEU6nk4i5M4h8zhKUMP87MFYqAxhBg6U9x3BDVnvj",
  "key1": "2zNCXCueYuc2jzismfBazp94hPDuCLxG6R4u1QtMZGww9xjvjSWgvrjFaJnnWMfB93wFs29qnvQMr8HpoJUgEE5j",
  "key2": "2Pt2KjEp2JgtW4Wbu3vHcHegpVVbJ4oBU6vLEbq3hJ73qYV4qVKUB8jgXDE5XJPtRCXRM4jB3ckCraaodPhotqoK",
  "key3": "2AmAhh64KQMCjmmLte1gR48SeDqJJYThRFrQXM3v1x47BhMMjunYLDXjni3fkaSRcNr2Am25SHsnSjRYpbHJmhxz",
  "key4": "2LtgUNbWFHU4tWCV44mBpUBPmgYwChNQqJdb7XXL2embiogFFQA4rqyHr1Hag39uuUeEQ7LoXWnSu8Q3LQCKe27E",
  "key5": "2eB8eZhjgJWfKuykmmx4n1gxrPazQzRiA1uYazSLys4Ki3bxCntFYXhdMTaQFLQKLk2pCk49SpGDGSqY4pghuyyy",
  "key6": "3KBtnG7ck6JR4fZwSBe8jh7zQvPTxRGuZPWURUHdcJSLwnqaV41omcAbW3R9TY86FnxFVAMimq6Az7Jdk6cpWqrq",
  "key7": "4HhmX9caxMwDXtL5JVUQmJYVtbW9eVVWj4HmQfzkp56gVG33zxhHJXnPRBRxwsY23yVxovtt4KoozmtMByTWinr3",
  "key8": "2dBhrGMonPnTpt51PKobxY8cQcKRB7T8KJA6Ld272ctNiR9nFbnytF4cgRtzi1vJk2UqAqQVEhnfXqmwP2tSCukZ",
  "key9": "2L4VFZdeArkunouNbsuprUKhw4nQzjSoV5SzDUD8isGa72fuT8eRFuhSZByWceEZLeJ3TPXCscqFNUfxCiec7CGG",
  "key10": "1f6DZ5S3qFuHmCwEyhqKbgrq4o3aym5oALs2fDHJ7cHLi2kwd9HsUzNqjK6vZ8QZ4wPp7aAHTofLTHyoXC8rMHd",
  "key11": "5hFxbrZQfvKDMiXT4kVavZ7nJWTCqZCgMc8CNN3nysGg5cwTxqLgqN9n62MaPgyUXAu3QLHHqnLQSwjPXoaoG7w1",
  "key12": "5gKdixEaqCV15PHGfhmKncNURK7VV61LdzUF5QM7WmKH2V1J9yZsTd6HzdutD6CtnPgzbFp2rCHruLj3CgBS3XVy",
  "key13": "398ogEdi3LCPL1pWvDoK19mD1Bkzqa96ADYnuSnAJafuFmP8coQAEZDBg7pUtaBKKrJMu867vPdZqgzcCZbg72F8",
  "key14": "3PwT1WbAPqUrxSPbUP4RWftg5ZENxuhuZVnfdeoLpiympaPiWaQAEtymcSBuU62JZtiFtWc21CZ88q24NvNCcy2T",
  "key15": "2p2SSXrjo8izM7W7wderyPM5uCqEe8UiitW4yNpUsdsg9ehtABgvBkhU7wWiyn5VjXdUSKmAV9zQiKDfj7QHnLKQ",
  "key16": "4HpbPxFZoH7ozLQFuDYcjvGoAxAz8kTgrA4fDEjTZDbt8d13DkEusXmMPkHc6fBi1icqAbG1zKw4ZYfEiVCoV7a9",
  "key17": "3wZEDi9eaeeX8QMaUewkhi7y1iUCsvnXwWWZ3u98RaYD3zUumVbmnqscDcMHqZkM6yjpP9XcNmJFYYS7Cxx48ycb",
  "key18": "2ZQEW1c9SSh35MXCH4ZTCV2KZs5yKjxk2j9YgzgGsadPbwT4jwLaPm5jesdpovdfVcqbtpnshzoHn54aq4nkR4SW",
  "key19": "59ic11iUtxLXDR2y7tgEwm5xT48xbmEvtpRqJH3HvwFKsQr6qqG3S2UKK4m6U8EbH2AtgQfch1nZ5Pqwpa6UB3u7",
  "key20": "2nsNxCusv9f8uXEJpteJavMBHQqFT7G4NxSVd6AxYTthk6pv48uNChyUstY3nhkYHa8zKCa3DfrHLV73ZfAcRigX",
  "key21": "X6whakrwBCGs211rFTi2jL9Vnt6gGsUX5Sy5tRmijXhM46WM5wicLYFvSCoRwtC88nfwL33chKFrGP5qL41e7oG",
  "key22": "sA3nbhX7F68Lmcx9cvFPyGcjUCrnp8qdtd8nQ6CKaSj6r6QD3xJYX7VjURZBxf71Feh5bqjjoKw9yAjxX8zt418",
  "key23": "4yD4t52T5M7F5CuqETgM4569aib9SuEjuywYzRnWsyXS2Y17UmKq4JLVNukpXy1Ya7Zjf41bqdGP3LxA97CFdPww",
  "key24": "U7pTZ9LvsEyE9PE4SkKAas4E51ZRrjQwWe1mwwNS4B9pPe8qc81MHY5cKucmZCnMmDbVtSUncdNmgYESkWSfcPA",
  "key25": "3M1yzPjL4M83xBBgrrRqM3XzZrkbiuypgo4Yc6mfd2SGsiyz9G9WLerMyQ5tnUpDcMXyaWHcP5HanjubeGByQuoT",
  "key26": "2yrXygNc6BQQTsv4j2CXW9rzfbm3eFQVsFwexYFisiZjVtSizcy8GJQMEPJ3NL42gPumm6gE62KRadHbPNaQj3Fi",
  "key27": "2NojHy4d6jTnbwrzK5fs5S1R45ExqrWRkFa1UgDF6ZCDFsvzh5w81khr7TqbbiiVtGsF6wd67cKwNNHz8W2dML7",
  "key28": "2K93ag6pd377bz79PQXu2ZvhmWy1bAsyHCS7HeKo1YVp3LP2t6AUvs1543VvWD73Cw65jTrBeLEsGVUGdm9s3ibx",
  "key29": "3XQZF67GPu429PJc1bEx4bveDm26DchMwAZpCUnBtFqitd3uDAATW8mgLNC7tG4yuKXCqdLwrK3Xy5hAoESMhwTR",
  "key30": "2pRBhhC48Q4spMKQ85nChzBLvSty6PcE42SJtrRGujSAZDZyz4LzBD8JKAsePxh7eou4NKWt2qUut9Sbh5sCsnqw",
  "key31": "2rTZtawWSpERMJWRaDkckLeC5syNSc5WZBxVcKzu2YceahcoWqAo8QqjG1ijHK3wYKTDEFxxxgMKygg1fvua771V",
  "key32": "3wk73bUC64UTU5HSz2wv1cHs9pspSix8S6oHCxSLhxTs1uiYoJxAhoFG3Fxm9xuMKpzzqbbW4TvhH3kHcx2KwpVH"
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
