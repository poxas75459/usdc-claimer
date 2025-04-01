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
    "22yqawv8yCEYMX2omj65E7MHiqydkSw1nkc3pGgbVeyigiXdvPSjm694fTmWnod287oX9eqkNBeFNc1W1ZE4QgRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1jaVv5gQU3TLzxDuG8CgETbJx5UBej8Ruo9QRERux8yMobpovyu29gQ2VPiCj47iNgtkEhnNKzto4RuC3jpNBt",
  "key1": "4KHMN7HQZG5raTLVPxNqPbmkGxj9FPxpFrxmogEwW8RnhjK2aRjuMvUjZY7xF6EkKMcNxNTgGEWuD7p8fucnX7g8",
  "key2": "5tchd776V14qHeTgtk49iLdAFZ3dA3ypxb8FsXnEKSB9pJkzSPUTtBFmZfJ5SD3Wp2mo6hi8amDncFH6c3Rqqgr8",
  "key3": "n4puDcd1z8pEDo5GSLUZXmkdC768rKQ9voTX6Qs9ZACCnhJuVpmvfYWSGNxnz8MRuXHE8bG7aS2kfyqaAF5Lq1Q",
  "key4": "3kS1zQ5oDk8rdMUjxZknshUVZu6rqpUreRXGh7j63Wg9erHGtA1vyhquBznc8aL6jZPcyQv1xU3HNnGEXCT5dW84",
  "key5": "2ZZUVrzo86gUBRXH5uP2SCQV9EhXh3ESgDCmTnvuif6RZs4Xj8Kdr3hWsfzitBFozYAYUvFik4vkzi3YDBWnyqbw",
  "key6": "oj4QxAHk95Wthvwx3AB4fGrnaTHwhoq95UsvgbHnerDzzABbq92LaCKwenW1W8Ayx7L9hs8AqtdPH4CqbSeaKM7",
  "key7": "58hg9kqTBL7cGdU53UzME8VWWB9uC9ak7g25Z7ybYBnuUGMwzAGVemeEVYbXiBoiXrcT3w1VvpufTKUjiAoqeyNi",
  "key8": "SHBP9mr9kCDHtfXCZfs5GZyLwfV43nHJDRTKGdWfG7gptSq2QGHPSQb3bPTpUq3Kf2JVKWgBbk4J7B7SGsXoZ4G",
  "key9": "EwxW8uTTYWxu2SnKWrwDaNgSKXaS9L5sD4eHdn2rUwiwqCsbsJkVoejmFFPpFkmT2BWLksxFTPhhSEcLjqYtB1y",
  "key10": "45dAakRT6am6tekMnVi2UtbQ8snRJknsxxcmQKRAP411h1a3dUGWnFunMrqUtjVgqGPFGA4PNAqk74MEf4gCh9Ev",
  "key11": "49r6uSARnXXeX8ncERKRUeYXZE2FAJWQdNCJzp6uYEAw2HznFK6XTVd98FvS8DvScxmYsBTQqBYWBRqoY61PJWZg",
  "key12": "5a5ZymuowJVRSefvLLeHr7o3kC2JGDyj29hqS4wycCrJKWgm7n5aYxoEnTxavT6HPdYSQxWPeynbsvsG5rkc3GuX",
  "key13": "5uQfbB9q48iMRJ9Pwn9XmbwKe8eJ1SWjPytyNejCeMAF5m5vEdruQArJTK19zmAdDrcfu2Bj9BEdjnSE2AVkezGi",
  "key14": "anzzPyyDiZnhcuoRJJDCLdae98dQvovRAX655rgTKB8AjXqUWK1YZbuxw3NL8aX7NvohfnDrZmKBd7uBWmKzbBp",
  "key15": "4M9iX9PRRKvTkCpiuN6QGUCviNzbqoTsnnrGoGNom2iapJUxnvjgQi6m4SYcAyF2JDKAHjK5MVVYSjQv47QuiCP1",
  "key16": "4nPACVUgZykxc4zKB2JvpB7QTYpezGNwQGTeoj8VJHjffJyBR9AXurCasdfcYTjyvsaTApUSn7Ube8Zxv5qTrXvA",
  "key17": "2CQWoUEyFfSQgupN6VwZwBBd412mxYfBVsh9c8XQZQicMeesYR8NnZEYE7tkgCEbRkvsa16kPz1DcZfeqVup1AMw",
  "key18": "4NT4AhGRJcTgNSdAEQYFrJSorRArgBLMKC6o8AKbbxRUeSRVfdFpox8cDUQnzggQnFucoj2Qne6KWMZf3FGM5mQG",
  "key19": "5jrYH58XkatmdTf9P6wXihDEU3NYB1BfzRSrd875q2v7HZBSf5zg1sDhZXvCbjxCii8oddgK7yMhdaL96dnTHQG2",
  "key20": "5dEQiSqkmYL5escW9HRTzBYaf5UqTPKCBZoVbqTgXtr8V9VZEYpG4rBH5oyCCQhwBUUcFEDwbR2FTHEMLXg2awo2",
  "key21": "piL3tSEaXTY2gKkQeF6S2h7gaScPWvtLeWXv1C1yAJhsUw8hVi1wR1w2pisVC9CNcWDZegp2iuNUhq8FKvBe7x1",
  "key22": "3astYH9q4BrBmN2s4Mqkv4PYhsuEybtC58Qf8nKMXs7GS7FsnAWs2pEbcWBqMae5PkWVZP7PYB58Uawbqapvtsuy",
  "key23": "2wMJZhf2wsXHas2ciMw9ZiZqVo4ArLLB3JZUpMnFaufkdxDtuvdhVarQ4ysWspUKd6MehUCwUY7ishvXg41iHTFk",
  "key24": "63mhL5ZPuZz2D3V1yBSSDi8jwsJX25Q5jC7jEwNhiTffnUUxsoq4MABM7pgsg2dkPfodk6Nvf8uhuEDt5LkbQ9QS",
  "key25": "kpprmZbuaJvUTGhUGQQDoUKwB4pgvuaGCxRzUjUPGhMjXdoLkfu4FXdxKsw6fiR2bhcouKv7bcgBLvz6RJ5p6HE",
  "key26": "3Ua2MgEjhzbMWHN83RDH4wNcN8qsGzkHvtbWGVw4BH6o5UTFPaS2Xq2rKxBg55WUahsiqGXqgvtJPS5Ex7MUx6ER",
  "key27": "6KpAMDVenqmEpnRuomYgewk6ZGBb6SSa73qDt8nnzMhnS5z79oFrPPFYFkjWQtxnrpqio7zwVXc8r8sjZf14chY",
  "key28": "4wJyzzYNqmbEZFiAMzPoSvRT8CP3y79ue3SYFaBqyLzQFc3DUcJajv3SwSzeA3id413UuSLMWBNp2mBehEsEnYCP",
  "key29": "2M4kZW34vdR2qz4uAUStrpZyBy6biZmwwYn6m3ynSJSMTj1bm317jYodqhJJS1wh3qLwYRqh5CRpoNDDVEJQXRxv",
  "key30": "671Rr65LcpQnpr5ndV9GtoGtK2hC4jBAyKsfDeo1HJqyRtRh3nkBXB5g82J2W64faFxba88rD7WAjx9ft8WdqXaG",
  "key31": "58upSs1Ga1Qyc2Wj4khfAkLcbiqDn2cw34jcdEnVRjefeTNT5A6Pd1Nb24jVZFToWuCDs7QpJ4LmhnzGHmWjgPqv",
  "key32": "vMwchMvUoDpD1GubHxdtPy94QPCzoMVGXdn48stC47p6CsqKRqGw66BzfVs53sVP8p4dbF7U4Lm75LLQ5sNFfsD",
  "key33": "5RWS2CgqCpmiJAcW2yZQiZzsBzZJWnWMU3XVdRtDLk4q1EH2oWyaNaZ3CQpVUPKqVr53bFpn3rH6V5fLUfYeJ3S5",
  "key34": "5NsAVQrRh8ND8wAyeqbaGCZbBqM7HWC4k6UcCKKmLaiHhEwrXUgM8KRtoqKFmp19dmMgiPZYBR3N4UJNKABhJ1ti",
  "key35": "UhQLPAkjSNcNbLLgJxYqrjWDHm4keUCpaxuB4RKtGQj2corNMuKdFy6to1EL9tGw27ErbUaq4W488X1ErqSrqVw",
  "key36": "3N3ebyukBHRfHeeenwEkx3YdciW1AjzHysDPDGU9Zip91bmxiCfC8eZAVXTwcRn3fpMpePLrYT4vkqvRPsXe28Ky",
  "key37": "3Y5ZhGu6jdjE4qsjMmdC2d9AXAdJkaX9UV6VkPfm8rwLTzferUuEud1epW8FWcSgBKankqC9hwFkidos5imog6MK",
  "key38": "7Zzd2RHppSDDyPDi2KY471Jmgdb6jfY7Bj3qs8WHXQMKUgrGesgz9vj6EGYV6BDrwy33dnVw8EJr5C7vdAjf1nQ",
  "key39": "2AKQo3HXKudPS7ZmMoztLf7RSp2PTgUSxMQPbWdPFDZ5RfMqPVP8it2GbvvCuVNSwQueVudYAWBhfFxi9YrhmVvH",
  "key40": "3msmsxjPsbXz7Ed6Esu7hRRN5UTpdYjtGJVBWnWzPkeid38myBKAt9yuck6s2SRUqmEKCLMQEfVBQ4hXn1gbz2wv",
  "key41": "4kzycL1XgQD3U3uhKPC7ZoCa45qhMUUNd9rVHLdi94FTHdHxVYtA1c2jFsbPJxqYiE8QzpMPyjEcumVM7RdaE1kM",
  "key42": "3W2mBu7RvZHRUa3KpK8xxzWW3iTEvYjeK7iW3xcMzkNXTmDujAbiUJu46FMkHsdCyrUujn2vmJRSPWagC6U4Zbvg"
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
