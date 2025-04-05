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
    "3wpp9eNyLNKYSsi2NNK3DtYUuYvXzCfB22JX4sSGV2hwLn9GgH8kd1TiP5kY8PJ9fGKs6HzyMK8671GbNoqoHX2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W29EhbLRg6Nae5CozJ5tKUJLjw6UmNFcS42M73ngcnhsT8P7ihEAmCVrDBLbkfjWVs9mqNF2ngSuAQUvp66mP9",
  "key1": "5x8uLaATbpyn97NRJX2T3Qh3CU7HnwYr9ac8Fmb6dVjHiFeKkBWgCDoaU3pVVYY82RCmkcR3qGoK5b5hV81X61tD",
  "key2": "3nGMUaqLVaMCoCFRBuuAKL3jcqnFWV8W4FNDqB6F8sUavySgKPGexZS4nh47CgozbDbVuQfWFXMWbyHnWtnU8ztG",
  "key3": "3fFybhRUPi15T9z4n6yoaha7xZLrRUfz9gFQqRWdkhbYpxugQJjE52gmrkhi3oZT2Rv4rm77naJZLYXLo7bh4jFh",
  "key4": "ZWCwi3kBKtdpg4RqgYzYSC1tYyeW16VpSfB7i1xH1sULcmJp3Sz2SeZPe82hk3hfXnmKqUCH6g81ErKz7EuXPcN",
  "key5": "2vjZd3bCQz748UYKZPFKosiiSatTrcFQZwgtGYKQddG6GQxGSTajF6WwJj8FbammZfaHrorSWbfa1L27mnUsiYFv",
  "key6": "nyLLa6cdEDP8bhddtH1CGa8ZtBTkknfde4cp9XrpUhUMm8WEcBmL9xqsR3hFDw5vgPxSpqnaPmRpCDhCaTQDbJh",
  "key7": "2kSNff4X17Tj2gcYRzEaVWgg7cFh6MgFMsm2sfPkFXapVbx9Wt5f5cXBSwULK2LqzKZwY1Gc54GVy2UnEvenPsqW",
  "key8": "3qN1QNi1rBxLSKrhWzG6uA7Wg8ggzkNLdB1TH77UgVBigG529NPx3y2zd8oboEHwchcWu1qd5PQQ6ThMyfA5mqsv",
  "key9": "3HttMe8Z6n7P5Jk9Ysd7UQmLp35b7gANvjxEWagvBg4WXYgqDNMatodENPFbDnVSdETXyWtQdqSePd3hscDUHkxe",
  "key10": "33VjJEsDcZ22iUgy1wNkGFpajz2YRa17CoRbXYH6whaJueGKpHpjLVe7TKVXroGg5kM1EgqNwmMMYQbqPAV2WtdB",
  "key11": "2uARzxEmJfbsa97G8pSL98bgAKaJdSBPnqwewMAwgTr4RgkZoEU1Qwch77LzFrvKU5ecKfKNa3VnrrcJx633AyCH",
  "key12": "3ksLqawgknWLH5JZZy1AZj5c91JWYtt9w9Fvem77VGNKZyPizkxGRwWrpz34tjyxqkamJW6wMf3rtdzfSfFKHGom",
  "key13": "sdJ6paqnW9KGysx2hqbWZvDdXq4C5wisLWVJXskTJRgN1b7btnxov3kmwrjw7xkNCqkU9vR35i76aYH72JaQZCC",
  "key14": "58myqDvETXTjd2DqX8DGULhhimhRqMETjpky6QrRTYoUmwLT7eqPugwa6PK1Avrv2kJDL9d1VMKVJDxpR8rGbpPW",
  "key15": "2Vu3CFL36kULyYTuMYtUScaPuH1kWixzM2M6rLMdtTJ844rg1LPNtiBxyQWEe9hyR3izwXYaJ9nRCGms4uhipb7F",
  "key16": "2fwJq3KPUgHgcBtr8SKo48niNmiut2SPgCfqM2C7Lbb1pWrtsd4VKzRLgogstuBRgU18L9VF933Qn8vdtxGuXizZ",
  "key17": "2FWzynHF7MYaXyXVeu65W8wgpHjmCxdBD9uyV88QcditYugPZ7qX9hZyEendFHtM5Mq5Ed3w1BWtMhxkkBPnB2TM",
  "key18": "4k4zNk73BTtseRuznqxdQqoV39RDpF2YgHegRjbJ4RpvEfGuo37zh9DvVtCpTC6et9Dwfg2mWhfbsYvxgzRczhUc",
  "key19": "4XE3TW7faW93dd8QDCxqeEYTN1gQpXK6ti5GXEdWzRYZXGbGNhhfC49674MTZUV919BC4MGu9V1rUJwJqgFpcsAk",
  "key20": "5WQ95MFXJ2piVR43ZQcrMQ3LGDqQfrAykMCk9ncfLWSjn7KmrKCkaNMuytWCowk4EPi7d8Y9QpkjBCqzZPrK6aeM",
  "key21": "5gyQAQ1BQ318sjMSXCVZKE7Af1A2QzLMTAkykBv2p6HqAxMrGhCQ6eE27xnuqnaU6s2dEnj6BwjLYyGqWSNmBe9K",
  "key22": "5j29LHU5HFuuYG54RS24KkpifEcyQms97TWkfD2Bm1hYwWQ6snVtHuFXtDgUcfGNYT6Sn7uCJpiZGjxEX31BP36D",
  "key23": "r165a6aeRB3kD2mUQ736cu83veREo2sGXcFXx6tTqNV5EfzFYAyyh6UQXN8WwKurWRAkYsQw8SEdH8P8vkXFnjb",
  "key24": "41Lp3baoxW8SyPqWY1wPPBg35SpsTtNFYc4u7HNyEKU5GJZCkfj9DuCaoygMSsbdXchpU81zny7vrTgN9Z9SqDrA",
  "key25": "4LMNLnEgmNykTmpvi2bsofDPK8xjqQL1Sv2QpFeyjiSbQFhW2AFdZ6xnBAgPuFj3LhCpz5fgwJKSwYTcANMMu2ww",
  "key26": "hx2LA9voFMSK152tU5q8DNgg9KEkKYFG3jnN1xzATq5yDW8T2QXr8aiHmf91tSmsEjCuNEmfMDpvXEMHxVXvymw",
  "key27": "3JgrZEuBeqKHpR8Nu8tUZovMtdYorKiwjUEVUnejerYj2oUnwn1bsM7Puo5cVSFm2Zz8sFMFBer5Xhq5peY7qYWB",
  "key28": "4JpQU5hMUGQ4J7FWPgkC388FY9dbK7tRJ7pxZGvCEPjpU5C3feo5YASma4Nk5cVefWeWiU2oYCPEZtdxE3C77Xgr",
  "key29": "4kNEo16KGtqqAcKrt3XmWTeJ66qqYB7Xk8DW89oiBNFVWAUqH4emjnYd96PafK22YihuxYd3kudT9dnQ3V9nWr2S",
  "key30": "3cRAxSfr57jsmtCWQEj8Mc3CJxVi8Yr8Q6kiQhh4oRpV34kFoZizXz3Huh3gboKuZFUZqRCQQ85RTguHdb1vb4Gk",
  "key31": "5updn8XCNyLemf9wCQLFja4GfRT94wKCmib7iy5MYNgk49jnwuCbPm5W2JdLRWFJ3tfLmv9L6C1twLtUkeERGDM6",
  "key32": "2qeFuAkpu6z27SU93xR8jnLZN7btvCt59W131FbJkW4GAk4A8T6qpjFfzRKi9BtgCVzpJjf2tLExwdRK9zmncJL9",
  "key33": "LuskTKCda5CAvGGbxgJcr4jkccmqqDt8FKrLiBdscNnCZufQZ2PZ4EcaH8GADa37FrR2wPBRaDNGDQyqo2hb7U6",
  "key34": "2ra1tH9MKspXgKBFbjUqS24Eas5disoPd9HvLgvgQgt5w8HNAn3At42txXGT4EAy417BfJkZr7Eoqx3cLowqd81D",
  "key35": "4uCmPLmQjB2wawM7dwQHMLqTxM8DER5XPKPqkH1LYV444JvudZJdiLdYLgNrbDRDcRra49oyDY9fZ6kYRqZMBNfN",
  "key36": "4fNSJamvvSTG5TUS2xPaTug3kDEkQsRw1QYdUdT38r1wUBp61NwDxY3kKgi5TLe1duEEc7n9qJovsARMUZTf3Urf",
  "key37": "5bHubVLDv1UPNoGGnhkvZUuzNDxSUdPD4HMAHUot9B2DG5fE6jckazXD3wV1scc4djfSFxgxQPHwTAVg4qyit5oJ",
  "key38": "tXULjDYfyMygKR3P6UVFiajd6vH28oTBDmMufzM9LvU77A9XvpQnis8VeJQy9ZBFCnsfHagvhteAu6Kvucne2hB",
  "key39": "21YPP3mF8RHHerTrecoBphWrz2QoehmZDNFFbGVZf7JsQRdmEDLu4D35jXhNog67utTrFYboSQdqxewKaGRcXvAn",
  "key40": "3bb4GkCBJeRQwjspH4yV7KU3X3mLRUwKjuNG537MLiFXDar1PjEHcy2LuR4AoqEALN5D8aH8cYvX7Nap1Vb9yhr4",
  "key41": "3ZuhcC3KWn66VoMgWK7sLGff1nxc9iorU1RsBFzgQyMjStZmW3HHiR54jr3KvNRrffoKT19mfBmYYD3sMAF8NKrQ"
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
