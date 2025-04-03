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
    "5SNPpM2iAPFBG6r3Q3Nhya8j5AzXnSy1ywtonwfTowPHigiMi6HX5SEhADkKkgYgmitCWrDJWoZXeRzW6pmsA1CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XDBdFxw5BW9ZWeHZYA6wrtHZPgo2cLGv9py2v6XB1jzQfGWMWCVZiCZQHi13hGvD8XHFxTgHNPB4EmN6YT5BpFX",
  "key1": "2J9Uf4448ixj5etD6HdeAMSWZCcM9ZyAwm1HYc3ByLdqwzk9qVUbfXAcPZ5oKR8ADNhDfABJQHXGubhuZZDNGQWu",
  "key2": "2kc8vhpDxou3gn41JXK6YCZjo8kZMkgz4WgakKsejewAGySyGa5x573MVsNMNBBfLUQAQJL8aFnyWj2mwGy13zZa",
  "key3": "2BbqY1fEt8tuFGR9L3zBHSdFfkW5xiMJm4Rg9YmfZDaMraowcXAHh2oiwALMZbYFhCj2bzeMEPhxGwHUG5tB65QP",
  "key4": "c14vEUeRM13UNm5jKqASXCZcpTxwE1VBxo7Yx41mGMdD85u99yzsb1e1h6iEB9yhbidjQLxcTuWVFe6yzmHPLmH",
  "key5": "35pwz1zKibYz7rb5ZbF4Ux5B8tdJbWc8mJcy53AXDAUC1sZ7X2he6c5suxYdeAR7taZvfz3W23nULrduZTbj2c2i",
  "key6": "3UHw3HnKFmzZDNMBtXv3eR5j5C4FPPxgUwrRM4pb7cDbPQwnmndKbjsSTUqmTeB5nRwXUqX2Mq9s6jFiNSNfoMcg",
  "key7": "zCxjUMdp8vNwWtUucLcApKU1vodoVeJr7smf8JAW5FvRoPT16ybNnfqFjts9FF9Cy3Yamgg34L2cakPSVQpkXhH",
  "key8": "2SWNU62aBh6MN9WbEvAeUkHvdwWmYm1GozXWHu2AEWcPJXjgDZGR9fwxmzvQt6jfdVsKcjwQBZcZUta5LXnYsSP8",
  "key9": "5S2zgcbpTCEKEoWyMa7PMsSeQ4rwupMmxRdJCLKqrd7re3oeQhYmLx6mnRgF6mQFWEwvYUAi81SUZaJXYnkX4NX7",
  "key10": "4aEqxrLztNJcub9v8kKrviAZbGyj3P9QNPi7MB7wp5ZPzDf2LusjbgeV1Q5x7PTurHD9Ueg5DYdSKkvXUkSmAGkK",
  "key11": "Q1oJF2Fz23iVvRnv9fjbXVKhTKaxuj2Afv2Aga4dsWZzg3pQrxH2JJpjfu1TvGPrsrzoF9MU3ekV6YwsBWrVx3i",
  "key12": "4UAsXNjnbNvmWLjh1QcnJiXWXjvGA8hMcZ5h3KFwVQCjrSXfCxgV83CAWr6b6PMJjaWqiGr7pQcxsfRAGDbwSRbo",
  "key13": "47rUELSmtpYq63oKvqEE8APDnRZ1ckNFEjDu1VeYVAAHVsvMELiVnnP91HkrUtLpx1q4RgeHxWYMzJrLDbJ6hwMq",
  "key14": "67ba5mfh63RXcQnVRX575h61YN4Y1x6a49v4upafCh9P2DWRVU7D9kJ8EkVvuRGg6EDqd4ETCJbraqkZmHsUahG2",
  "key15": "5xTN7yuaZsj1LEndwqTMsefjd1Pp8dW2EM6jYQMWHmdeWT2Ly6Rw1rJJ9zLoyUGUBiLhCfpsVDeERfJLbCs67vGR",
  "key16": "3p2TG3ogfQYyw9Xd6bNwyvRT2J96Veb9iz7qgf9RwmrijKPRZZ8TfZAP55sfcfE62HA63cSjgJJfb37YurCJPT8W",
  "key17": "2WhUWvXY4biJcqJGC2Tdk9grQkkgYiaybHH7BQ29RciMP9cDDU3J56s1uwaPXs2EyWibfzxGfTQSRt7U48VxXLaQ",
  "key18": "3JYy6bgQS94Z4JaHvesXFDehiEV37Zz284kGQAJnucGYj8V4GV8rAXWDzuVDT1XWvZdFCTkmC45DPdHgYfExDiio",
  "key19": "3GKBWoFqNWSztq87CbD5cxfDktZ8ReJ72EWQRzCwRLHEmvn4QriQgYYgFEwkA4bFVVtK9tzLFe2j477ep8cmvpzW",
  "key20": "3o7pdNXqcDNNcaGHgZ5rhkuWYdLSyFuHAuZtrvKdZSvZnZfgESpDG1J75hFJhozmBc1MTnpEoqgJ8kfXQ3WkH8Y3",
  "key21": "54qeb75hjzmz9t9c7CDkemNJvS5XEwqZNaxc9NmBrhvP9jMVQP7Yairbdp9YGSbkGHW3YSFoUZTmtiWEBAc7voxW",
  "key22": "4xX7dWz6YbViyMXzoiJHGXDLxs3ocfjEauNjXCVnVVC9Tze3AfXdkBbMoQrWNUAUgYsDqNtUe32mQnKwx33yusZc",
  "key23": "4Cor5R2FKTsrSGkb1NBgfnWSqsbJzMovnQkoiUoMJ48XNiq7pTEF3WXSWbaiuCstBibTVEJYzxdfZhryHD3jhV9e",
  "key24": "5HQifkWhm2STKR9EayC9Wzow7DkXVcmaT79UjqnPgCm3gqPSZm7uVQnnNbK8RuYQ5YRHXvrxRo9mquDRFoEbGbSn",
  "key25": "5awLPdHC7zt9m6aKSY5o7FEdJEcswG7hg67T2PJ1dP8QBQGJYK4FBQ7J53YHadfaFMCW6gSyooeBXwHMNJEvc2dQ",
  "key26": "hK3RDcwcH31u6tuERurs5aSAtfA1UhMpS1fTrMdCPeN4VPmTyByvof4jbf3UtD7zaBFzkLh9pm3ejkReJvugW5N",
  "key27": "61Bkr9GA1ZFgofCYGLdyY3dkAACgX4qBzwPJcpRgjao5TTRo9Vk1sjHTx9CDtoUh4RJad7vx8uJVHox6pLXTY7dV",
  "key28": "3zHEGHTCCTewWde6BNJViapAfVKsvjD2seAKLx1xEAj9kPeGCC3u9mASKe2hVMRGHwXmfSTcxZb8Kf4bwdib2tvz",
  "key29": "5oMBvKPhhhbyuwhg5fCBtDyc7UGu5oKdbEHPDHr4FQEU4npSyXmVNRao9qcSabBo2vVg7LMks2ai8vwY95bP7YXp",
  "key30": "5EURJvee5omNuESrd1GsZwSmH4vj9ckRWsPqm6oiMkckVHNieCnSNwcqQ8QbeLxPTbrnz93X5vDxZVx6wWKbikSx",
  "key31": "4KZniLyTZ9p5FY6k2wr6S8pCCiiC4BrToPwxwGJdJKq92aX4cQL9daoHxFwD6XPFikbwQtPa5MPRNHHbskF5oPA1",
  "key32": "36s4udRenRT4kJXMR9f8KGhp4jGJKeSxJKPghYEaMdN3VunzLZido2hREq2DiSiNhfqsZGmdBJXSzDP1MYmUPYCW",
  "key33": "4Gi22DTbceHyenXNZfPnZ1A1xZ6x6bLfxBM1Kd3xUP7ukHZAMuGKaKoZrBrvPLqGUYpDtsBZz8QiLRsPTbd1mMnj",
  "key34": "4DGXWLr7n7z9RJZDKTgukFJtpiYEFTtn3So6NvX6PUaM2yQk6JXcDTv8JP6WFFRsf9K7Taf7pQTZtS7Yk7PjWV5r",
  "key35": "2DdPxfJsTtZVzVGwVtXcACD528Rugo7ZTHUViPgWmhWEVLmSUWvzqGsEyumst8kyFks4fJFQk7nzGTS3RwrGNWgp",
  "key36": "4KT46Boo9DytnkUhsC6rYw5TBsUS9BnbgVe87EUVbybvencaF4mHJBwe5AHcqqmZ52EKUTpWVpgGqrbh8jCdEG6N",
  "key37": "5AXs86GHLiLkJsTMcjemK5v41HMEoa1Gw8icxeYubqBvw1Ty92Hh8suAXasmNmpEJZp4EB7itdxwrPjBkzwcsmEN",
  "key38": "2NkDJwse8VHqxxxAQQUmJN1JiE45qotRn5Wvvnw4cVML1FS3JPtLsrgDV6GYz8PqgjHY22gjPABxhVm6dXkf2xaH",
  "key39": "3hwwQBBQrEvQAdosq6uA7gLiWV6yv3SKGHk9FpyEPBivho2JCs8qMse7Bare9G2kAfKnfkYUjzBfy7MRU8htXCT3",
  "key40": "5TRMfUD2VsXqq5ryHVjBmsZ4W4TwFxDH4pdNjPkN8GLCwrboceVsYQNLu29b67GNKyhxHdNgvUKJZRmizGAHXNC1",
  "key41": "5KwNnP13GeA69SsSYvKDoMKG1YHmKmqK49F3GUHRq8pFbQPnLt1soC6GjvtHj3RNCjFH5waTQAGzUTeYL7yoYV9R"
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
