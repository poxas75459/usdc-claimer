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
    "3U4TKgS4TKDcfF7fvUp2NYAwvJfFfiag46P56eu9Fs5RyaqGJnbPQMwGAErMdhv8ybNHYbFwFkFXU6suKXPnvMVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x8eQN8HB7MA6aW8P4EkrVx7rNeRmUkigSZehkF427zNW1Y7uQVZvTRhRGcuSyBTanh93LKmFnJQVuRQVfqeZnDv",
  "key1": "2J8N2R8VTFQEe4nTgFtb33XrHFBNe7hZcQHCZQRqWpbUeHRtY28q7tEuraA8cAzccqx5RQdLu9bBKFTdWARbPbut",
  "key2": "M9FTrjFT4bsXXwxwCSngH3EsRs21Jt3MhqqBrq4CbAtr1Cq7mv15t8aJCdYjkA34cS2saVk771QfCYCHTxf1t2w",
  "key3": "3TUccsLji66GDdw2BwsC967cXDdLz572bygZeE3MLjKKbaCfEUHYLt6T4gMs3YiDzq78XeYHytsxMMa2svDfaRsW",
  "key4": "5GeqhFJUadwcXDZyxsYZwaMaN4KEPk6miQCj9Dt59Q9NrqQCWQGEgV7tA7iaP6cfT4SBzSi38Fi4HDPs5Pe8HTak",
  "key5": "5uJaa6N5JRdJnHVvyHYH65aSUhPHNbJgRgNLtFQF6MNiiRzbKBhmuUnH32gJQS2qdDPzXuUxD2Jmu28uArt2H78d",
  "key6": "4bNHZt5PxrKHMGT11EqGprM39LS4yGLPFNkGMwYQkhnJ9Ro9uG1PRrcTd5pQtzduYxv8hFRDTtnbyuPAtCag3CoM",
  "key7": "J89T2UAMa3Pty6siMyByAisxPpTY9d5kS36CqonEbViPoBKy98QA9AJ4GELQzF1Nkx4qSFEkNZngzjb8nZBC887",
  "key8": "3ea6zrQ16zHuzyQDY5w2wo7ZFojCW7jBS9t1fnozvBe7tXeiM2DG56jHTRigzjUnjCmgKDDPxPN3M4SCkBsyZQDy",
  "key9": "285HHsoDMHgU2T6mZL2xCENscWRYUMA2mYcnTVNHRRDxyccLPbzGpZ4tgAJ75c2fBrq8dZQcjoHbVk3gY9nhe9wN",
  "key10": "2cfthZQLSK8ppV794LLLJnFZcGTZESxVGrFgQi5R3PCWctgvtrjZz13cY658Ehp61qFFwxSLadKtpRzrVYHjn3UN",
  "key11": "5mwwXo48D2JodKf5kEHW3h7hgAoLuBZvBvDYZe98Kfyh8j7dcqwL3scFd22NcAadAuHmahAhe2Y9Jrm72JHsxV8w",
  "key12": "XZoYkuPDU4frPk2gg1HjfztYcmNCbG5GuTJWaExdX6xh8g1NWkiQ3WD2sjLctYXLnYiiBZxZFejG8ESQifgsDgY",
  "key13": "DdVckcxJ8FPndH6aPCwZANSbsd4fFaoYzBTjN6bVvgEuzdb5VDCSVaRPaXZEZdG8v3pfC4RoXdTDyLhmhTuvwfT",
  "key14": "zinT1hx7XWj5wam9T1pAmuFk1ADDX8pWRSY1Y4z4NnssoqUeg8cF7HYWr7sZjHgzAL4mMv7beT7XJ6nE4jp3EPP",
  "key15": "5dhUNp4xt4cMkTc48mNEKc8GN3m4zBwZ3LG6JnsevFGeRcrtBWPzmBahoLqqQf1cZqQa9HTNrB8iZfLAZvSCoE7r",
  "key16": "W4eAi98NK1PKjQq2bjjZ2onvhkv8LJua4r45VCkf3RubMAUmHX4RQvVUjx3FkoGboTYTXuXVGhjonqtkhpLhGmM",
  "key17": "4ekA2wGJQBHtQGtFmtxoncVwEytK6fDNLEimqtGRH5Jraq4gUfj88Mhnz8hHVwLLnLJ4qk3Z2W6s77tPoqVMngr1",
  "key18": "pijyamxs7fHEFg4bVntAYLVbCPAPiZrQy8o4jPtbE7tkZS9FLUcx3rp8NxoCuDgsNe1VPZQAqXQAsmkVqbzPURb",
  "key19": "3Hei7gSjVakKr7HZKJJZeSg93xsEC3FBfx6g8YEY4vMicuSjamF5xSmkpAh8zEs1PoARVaYoAKwARuJ38S91PMWe",
  "key20": "GAR6G5z3Up5ZMZun1kCgo9xHzLUZhvQ8MZTxyENcSMb9RDjdqDiQeJvWaNJEDnud4WaskinA3duHuxRCjCrELVE",
  "key21": "5DU33C71eD5SSEk61Gs3rdGLXVtJiAP3u3h22nKGRpNjNPKnKeAwBsRXXiEfFNrqjwz134hjJqJ8WMD4yqeUyhx1",
  "key22": "2GjbtS3q5KtzE2GC9YgiaEAnU2TV7EzAy6u3bGzAzgek5t6TyPh4Hx2msUu6pZbPA5FZY5ZY8UDDu5i2LYjFVeid",
  "key23": "5p7F7VRuNdGv5x833fc7kxtaaVktJWBTwudgZKCZAsURvF8YcCwq6c1bxkpJsrYFT7S4ehFf5mdNKGZBaRCt5WWi",
  "key24": "4mWtmXMhF3r4DgNdPgwx5XTs1kx1fUJDPw2XMmuLpcQBnMPUTHHndSnY5HnmqTq7nLhYMhGNt1z3VTm5b67cn3mY",
  "key25": "3wEFCR1mkav2EE4jw1Sre1upWNNNipXnAGofzjpwTk8UtW8jSvhqBZjD2RcedtzdH7cnhVZZcXHUoQvoUomSd4fq",
  "key26": "3AC6UxvxjL1KEZxbPAjwAEoogvWwic8PcrVBQeiM1UXCnswEgUMHivQ9DKMnZBcrsnjeTzL3oTwsSUYjkg6YzxRz"
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
