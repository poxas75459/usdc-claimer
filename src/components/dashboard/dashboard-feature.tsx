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
    "9BYFtZXp2xzMCWZcwe8uKw1Gg5yJNmNzanSKZLNxE1xJAMFtkdZbTwnXkiGXk59ZMm1FhwuS4qhfaGDvAeDxEvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DF8E7E7V8ik2x2QaD2dCSie8mfnKLR6ZRxvu3UvzfqTV5wQa4XrNEu6bQD9L8LfZEvgorVd463x2bVxZuojVPA2",
  "key1": "5iP5hZobxMMZtJqyN7jhYKka3FmSM7o5U1t3yMz31ReCBkm6ZTQ9wYJibzEoUiBAbX371fTxqjD1cnL6xtuFfUGU",
  "key2": "678scat4Hc5PUntwcsj57Z3hPLvarJDUKrjzTx87eqwPQH31FuhHRcNnySp6fXXmYRXSdSty1g7ogbFG8psHkdgK",
  "key3": "467s76ytm32ZD78CzLC4eoBwVezGFEJ499qWkVDJ2vpngJXuRCzSVPhvBwBPE7qkEDTySp6xWcDQH9dardc6jz5a",
  "key4": "chdTaxmtz6CMAdHo6XQ1H8o6q9JYQrYLDj1RDJHkTBGu3eUTNY8j7rLTRXKYsT2kkoVv6732PdTT9AGarvggSQP",
  "key5": "667PSUjUixJoGL5a6yqPvC9J1jiCGSaRR76fa9n4FJUBj6KgoJkyvPZkgPfLybRT2BdTyLkto7nBtzpq7khhzLDk",
  "key6": "NkEwRtTEUHnqXrJ4PY9znqX1RcM9Sse5F6TtqhfSeWmszGCHfpjEnQPPR6qLAdqsTXgJz2sLR6cPEiKKm8tDbyY",
  "key7": "8WCNoMAmjTrutsREWSzgZ5BE5nuvMqCQRPzjmet3sEC1b9RyBea9CAx9HsTsTyQQTsheGAFwFWQoyDU8xoh1Vjk",
  "key8": "4AXms6itZYyBPiyGNqmWvEntKMbHjAtn8w1yHcYK2QAWmg8A81EZ3EC5xVZK7ikzJdjbD4P9bm4CUv1yKcTjozY4",
  "key9": "2DYwEQ7GA4puMAbjKn7xjWhuampnWYvWW5r1ntSAMeZCg8JSjnDRDnWmtUMxgkf24VgQDSZBVcQQSXFvxGGN8YVR",
  "key10": "2uqdBeL9iaiG2f51qCTu14uxPDLiSYzN18PiCgM5uBSGgG6BzijepKHjbxbWwRZpVPxWGnYRgiK717NHAgfR1H6N",
  "key11": "3bQH8EbynN2nVo778QsYYaWTfVF3Tazg526vtMDmSFz8mJqwiwH13Gn7Ytx4c22GBdB6mCBa22yeNadgfDkP7dsM",
  "key12": "626qbfzbsuY75SfbBEqWgazirELADdbV6T8548LC7dk5ore2bd4RQUxMAAddDfxBYzx6DryyQvpnGiWfq1E2ho9F",
  "key13": "2AF9Bzw3A2QsYAzgv2V7aB5k7YZYouNyspvsfFP8fJWexg1jyAaqVEoVsv8n9rhT7ZmCbDJRxVmmrByVL4bVh7NG",
  "key14": "5heCTr9JdZ9XQvRycKNCGnf3wHZDtLiJjLELCbYL42KXZiN635f4V1t7KNcTiVUPRcSRvUwC6iEP2zxNQkmyTHXK",
  "key15": "5GqGmvDyHS7hvcq1DDypS5JxGQ8BS1JKDqdH7jM4oUZGSxMSkf8wPfaa6kqTgRAssPq3o4B3tQQxyS78m1YT1T6x",
  "key16": "4npgZf7e1LmwcPaVKUYfe5gABDQmsBbG7GRPbXVp6HmGkHQSM2UQyDzDkn5LLNPb65iDtu3xQGFjevvvcktku4Jx",
  "key17": "HaVkFbmVrbiPwvhtkSn62psQZpQT7WGSJ8f83G7YW1oTb5dSPZJ7m18Upta26RwmSEqA2ihP6DRtDpsF12sFxxZ",
  "key18": "psQ5U8QJr6SoMQmVVsXPRf2WAsP3TaoEv493ep24QVAX7HeEvEZHf3yvg6PNCW6atxV2EvBbPjtBzB7RAxHZsnc",
  "key19": "49k619YUzYLUmPTm39X86xA59FKA4D6zzgA7nLSM3UP4yTarW1rBSMpBh8n5p8RKzv9vM5BaEx5pyyYLQ7EkWbEF",
  "key20": "37PutwRfLV7fisTpQMcJ1WBg541GRSwyoUQLaEW9kvUntkmTuBt2nunU1JoKNZvtme4m417XXLXyCv19huV9dVcA",
  "key21": "43SzNxovZSwTB82QnmVhU88uJjYKpgpgVx89sUBpQHzfqYYi4YNGBEuHjTagD1nsySgW1cHHaGjEfRVQZPcjY4wG",
  "key22": "4mSTqhDoic9NDnvwW1Cw8Pncor7rVq1AY2gFQuQkiadMg22F8Ec3KvD1w9p4GXLxTxy69mD4NE236LiM1BpABmAt",
  "key23": "5dBy923EDbz8cB1HjJVTACWZLZGsV5rFwVz7b2CuUAeWjXcfPppVDWu2cwH1xSkR9kCDMGhZoy1cphW3wCBSpnLg",
  "key24": "66ViE6bvUKGfPaBy45D5P8JFRxeDb3Ai6CDrxcw5Xh6CxnhdcA47sBMFiHwvxdvVAJzHFMQk6FQE755z2CwujumG",
  "key25": "2prvhsdSpCk3J2W6a5BHpRR6ecB7JgMqk78mqHKbcXvKhkHsJAj93DuJrUT8WVgnQm2ZSoZ1GsE1x9oX5uveww5a",
  "key26": "4Ng8ZYFkT39RyJmzkz1wBGKzWyDCS2JjrRSQoXTDfMTvKqUKAnHxgsEPm9CWmM6fFFb6YLzXo1Nwkqnt5ormdY2E",
  "key27": "5uxg4WHu291pLcg9vCE4kAfmuZCsSVggwPHafYq4WEihmTVPqhDDN2x3CJbJ9PcbSc6SLearep9Xese2DDuThdPp",
  "key28": "3eVxws97EkmYkRSWHiz4H6h1Vu1pkTm5puaTWfxPbuc2aTo4awQKsmBk7DgMYTTCmB5dw1RT51fH95FV4eVzny3q",
  "key29": "51c3fEdbHC9chPvZkzy4mc31wYxMmLQ5HFb8UBeSfBx3Fy2XJ6u93h7hbgdyCsoPrUDdCo99qijRLZqNkyhRz1Sm",
  "key30": "YqhoC3oUnoedj1yBQC5UmwCmj1E4khnL8B7YLSwsSn1W148iRBrLHFeNpX4BpFEL6anSUnaXF7ukmdj97BtDWYF",
  "key31": "napew2Th29UsAspcc16p9otUDZ5NYv2XqVZVi56UCWe6N5G6HZnWUjS97dnu2rDjvdQQP7gYXAnyQ1uJwtALZSf",
  "key32": "yY9XmUQTbHMyTV5tDjz97v4NmJTmBcuWWgj7Yo1juokQQJjaPvZUc6f7hxiFRKAGXehrfdCWiNUJ8FKXb4wQXBo",
  "key33": "4uZGcVf8vmm84dqVWYuTjNd2F81wDp38kGw3N7PkvKd4sbZo4ZCBmPjebWo6ei89tSCBia6kSnvbXDoMjUPAmPjc",
  "key34": "qoZbQS9qog8haBCGyzNn7EtTyFg1cUyAX3ac8dwF91dcVaLVY7aQypgJ1HkkkjQAStiFYoVGmiia5DbtYt4L3Jq",
  "key35": "2AtNYFD3pCMBmUZNpw9t5NuZRRc9ydZHcqZXfuk2dM3bCJyFvThTUbahKuHvrnTJCAwhCz7SEudr6RMsttjC2wEq",
  "key36": "5L5JiXvAeVGYQgPhbXcY9jxm6hBfLCdjAAT3h6WV8pi93pMp7dehj9FS8Jee7uiiHv4NGwpKpuWTrDCbHeWSAAjN",
  "key37": "4tJjTcfLqJhgY9R1Ckfnk88wzoLW9VgFUtR6kfQNb2hxQMunjkPGQf6mpGvpKJUS5uRC5saWvxakv2FF7vbDKQ7e",
  "key38": "kXBBGRnK8AMUobLZT1apLtHXdrZgK2HFV8Few1N7VQ5jHpRSU1gmnN3k82v9GCQY7EkgaVpzCtfmbc5eR6zjeKb",
  "key39": "5cw4RFudz8tHQcFpmryei18GweUJdtYt2PTKwiZeKfS4UuWtwhbNnEkByVcY5q8EMoNrAxmyUmeDbWLoAKNtCtw7",
  "key40": "2YPLEBiMNisWmNa3rHVNbx8epJhK75A9KTEpdzspo3vAmGdPkBQcybnnTnsfXZeEz8q7jdxTCLGBRAxz5EbZfHzQ",
  "key41": "3QUuFSTWjgDzowEsB26P12RjsUkGYVVnFzHwFN4rB8okm23Nikwy4Zvcv1pSRNZ7fE4hca7tsmSJrqpEMYnBdvNL",
  "key42": "21XnAbhzuod68vq9imC5WTZuM8p69goAZgFkCez5oGV9oikaLQ5eX7p7Xn9mbzDdUTWS9SVsJTAKwRYD5rQv2wCU",
  "key43": "RzgPzw7rjrA7pyVbcR8XYjo2UEhz1PXXsdRJAcgQD6Z794GVUfWa7hNhZnAZq7T77ohYbgqQDvjqbvWzAx6ppgU",
  "key44": "2ti2VDJmVW6pt2ngnuL2JydHj7yZZ5xWgEQGcktLLHdDwPhK3EohM3wMQ2QCokC8SEtYEa8wUPuomo6wf2DNoCTA",
  "key45": "YnSxLM9bjpER1CoKKuqnaZfcVyd7ATfwRpZNPpxTmVtpD6y3HX8oGsupu4o3XWwh9exZge4jzyaDwNibvqTT1CP",
  "key46": "3GKRuZZJscFeqrnYn1KYHa3zWtjPKfWVJi8pdw2KvkFKpYERqMbNfv33baD6iVrrGZULihMj9vrHupr21jnn4MFH",
  "key47": "3jAtU1HHu4HVdYpUkuoHXXDSPaRPHpEfx1QeKaLW1sULkZgGjEfydiqmcEcH1AjDwU2tde5ERsAtenpGU5NGX4sS"
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
