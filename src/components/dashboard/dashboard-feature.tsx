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
    "SdBYgLvaShsZ9dcNtRUvztnUoqH3T7LzXABAHWJ41StqnUFX6byLbJVmKe8PpNcTMk9zszdsXJ8DUgk2Fp4LneK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dfDZG8nzc4JBVL7zRJQiWSCsAcK2pKt5q85jLyCrGwwLw3YLV9qEzgD7Dt5DNRpuRj8uw5L1A68ihSYukPs9Zb",
  "key1": "2HRMx59YttrVd6hsFycW3fA2n3VEF3Ay8hySpwvzmLPNvZWmsphtkpMDTQsMdNUV3agMVg5Ki8oJ25BVJ7syPVhV",
  "key2": "2vQJL7f9o7zNnQbhcVqdccNvb6SywK7UXdS1Zw3BjSU9hYzAR4G7QkHeZsfPfbE6BFp9CMjSZCo3RCJKKbdG5WkU",
  "key3": "D4VQSVQY7nx7M8vCPmshnknHqeujxhvC54wMVWMGbtKzo8PdV5s8mfvL9QKXGmKqrvAPo25bguKdKqprYxffkCU",
  "key4": "29NA1QBYj2a19ub5SKGB2HodMAAfpR1RdiNDAsyMCY7ecrFyToGppXcDHK7ND6uHSqDZMFdoEVApSt2A9Dv99BgN",
  "key5": "eesga9U4qs5AWmfwcaGNT4SE8rMbTdLzDeam7gbihF1TcoaPh63bKCHf5CNJebQjCvXjSuUr4w64dRhQQo3sZ3P",
  "key6": "4kktSR3pb6CKyMrK2efYkmBzUPvxdXhxkCRpqd1NkeY6NEASuovnyNuq5y3fimRm5SQ8FbKLP9wh8yaVmjZiAJ5o",
  "key7": "2JxL6MrgVGPzpFbqaysr1M59iEzM4eyYPoo4GURorhNfKeCoxidzyyFN4vLezXziH5GrC9ewKKGuUnppwZCfyGgZ",
  "key8": "4zwATdAYeJYLnHUHpqYQwGJy2nEYSj42Kud8hCwkeuyqFmUcoRPPPenoLJv1FLYKdFNBssQpUp9SmjsV4ZGYYc7X",
  "key9": "2eN1geBuQpj9Prtdhbe32Jzr4gmg3jcYLz6iNZkeYTodFPpWyAoeqZNb3NByCzUqNT9zZnPSR6LLMgPEMsSAfzq6",
  "key10": "3eH8qi3zsMVmfSKVHvhAZdZTJ9nUoVp9oM5nY5aE8ebB4MDwwUriAUHfsecRsZv85GB3TubZUukPon5juyZMaUp7",
  "key11": "27qXL2ktUveywdhjD1UY4skJLctwcp1Kji6GRxprcdDkAhBhaunKYSi4vU4Ns8r9qSvkNE3HySSBnD5zafCmf1cw",
  "key12": "3jo3kLtXZ5pAeQ6BBpj2Lp5CXqP3d2YAByhWrjrqea5NCk4eub4hd2LNM7iaarDNz4RhpQNGsgPbkA7pSzx9bq6H",
  "key13": "uDZyBVfRsdCa9RQqokRN7P945AJ1r15VezpEXzTSDS7Gf8J8RggGpQs8p384SAMpJRuaytNgaupdQjDTLVzJAxu",
  "key14": "5qt3cBqko4v6huNKeaEt77J7FYPsQBJ4W2eFhvWgAoEV5W2JDAs4SmEX65fTKqUb7HSm7rySgXHcRPDmGFi2CEHR",
  "key15": "3zMQeAicGuKqmntGqrVvwtgpPLUg7tydR7es7MmUAkXU9M3xCRjbj9D6VSUDksPa62XdxiUo34ErgwesFu3dnStu",
  "key16": "3qtfGSV8CU4bY6d5pTYvTLoQfqSgq2RoirRgLRCFtUyQ82NCnrzqFqdtRKs7F5MiTvtWVMUg6n4D4b34fSZbCRmT",
  "key17": "gDzCspaZdULxKizgTPX2E1ftTMvPYjP9AX9zziNNsHxbTavnArESb7p6KpsgzgD7sxGt11rjMQ4B4KpdiSP2mMY",
  "key18": "K86vBKFCHVYz7Xf7jUQEtEtmnPKmMnoNhe4nauxxvgGwrxDckrou4u8VXjkevoK3kMuFyrMCxPYbBMHXQgxhC4H",
  "key19": "jfJNnsRvojET3w3jdpASkihhqvQeKGQ17BDTYLUQKRSvrGwRyV6eSvzJwnhCtR4NAqSPxZWUV4eLZgTxEEoDATL",
  "key20": "5nspUwkcHEpUf5jC1SjznqReLinEY2CydUkTxZotfRpvxiij2ULVhABAQqtiRKvthuZ3YgZc1Yqrd5RG1pdgipYA",
  "key21": "56ZDHQHiMmTZ2DTvf1AKsF7nEXtT2ooKXhBuvp5397u4KwBVq4QRHf7g7Hw3aPNUNTnfw6WoNhr2m9An12urhXjw",
  "key22": "FKec1LiNpSu26uyiZDaY2nv1esd8UN7obx9vza9Qt813k2HaZ8CceQLXehwf3cSd2sa7knADDJeZydLFFCHxmeW",
  "key23": "64Z3XMQjYsKTtGPQyFBapFH25qLRosmQh7tSNks7sGgKH2ybZPcU2jvuZ4SXgha85NUGvyHxVvaXZkA1tMsXwNGq",
  "key24": "4QkhWJPTwfMTxjbts7pLnxQX1nCyFQ6kSA9Gqridztbf99yiwZwt5JG3TFikm1i8tag6cLdp941Y1FbiSXKzkGDh",
  "key25": "5VNDSUw6b1ngeydgJdBW7xDeaTdBcJJGCQEGB1cXuvnvsLyVrCvuqztAchSjTMH5YNW6ycVjiXbJBGE2XTRJwCyX",
  "key26": "YWnRNLw8bXVL98BS5JrgyLZ3VJ4H5XTjhkHSwJ5hGCwYKahjWn2gtD5EUjBgrHz6k17cNe5vXaaP8cxB2KRnMBd",
  "key27": "3eMuzuPVL9YzqHounyPZpToKv3yepQacvqJDKpefjiWAKyG4fw2u5jLMEcSRwEo3MoxiLTef9XFGSe4cGArrZ7UZ",
  "key28": "buuJzASSmvaXjyMP8xAKATpjwTpgz6vf1QHBCtXjHpCjaBFE21ZxRoQ7GRQkfJndxMDMMTz9WFiSVZTJVE23wRR",
  "key29": "4MGZ7Z69Ho52HDyEiHu4XDcS9L4Hem2bFXLjyieuad13Q4gUPdBdGv4qsqyMEa7FmFbNmTJKZqvNWXFiGH9acJwU",
  "key30": "5RPGaRusxKVtziAYV2D8NePTEWrZkV8JDRmiiXV3hwvWDcCjxRoMbht9TbT3DsPCaBELxEYiUCGhdzF2FDCN65BJ",
  "key31": "3zqiqpSspwfvEpEGk2w8XWHBDQeFMrp1SL1utoBchdzk5f8qqmtepabXdYydUT1VnbHQyMsvwqp62mjWoZGMfAEG",
  "key32": "4esWqFqWi8uULseiF5LAdEbcpcEoZg1js79Hapbc65sjq4SDrws6THBkyGmU3HKGDXeyqL5FPDqqkeqdihXoW5Tv",
  "key33": "1EUNvmzNA57BcxjQ2WSLUrsndQ4gv9hsWeymYwn2gKzVx9KGwDvNhf32QQb7EMvhffEtQyheRaKL2wXmUzo5Ufc",
  "key34": "63sMNSLsoZRsNj7UfB1CB9G28nDmYUE34yPJX3q9DieqQzHEY4LpSQHDw8fz12EKxNa63GDS9RNw98xV7Fg8pf3x",
  "key35": "iXXC9Vmh5Bm2uh5ef4LWqgsybc791vyKFnt8cd178QEeQGym6vooonpD1viS964YZYzgb4UnErDGXZhFnxnFAZB",
  "key36": "54CESuh2dj6a7LmNDASpJbvdznha321weRjidizHSpn9UA2N8ab7Bcmk7E9h81sBURCWS7NGfidSUubh3yjKAoAz",
  "key37": "4mQHTRfu33S7hmsnZaRwESZ31Qp95iXCoAWXm8tT6NTPUHfc9DyeBBbftQVe6YQa1nm5qxPVPcBnqwN72q2AwWXo"
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
