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
    "5gaQiVJXqTJF9UUEhnDBuixZvZoLTrVioGEgCJH5K13MnVSsQCQ3EhAGWnKgYg7654HXXCdQxXVnZorhv7bXuf3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33jZXPV1hXGR5Ts7PvwahFtd7uDPCJVXZhf57haqWARUPeQmpj5gxtf3WpoixZH11Eo27etkuJNGTCpAT2EKi3oJ",
  "key1": "5xT4yXL1BcDKJYjapPATPPSdzfwRns1UeULqpvm1Jc6aPymrPfwN55HMvEQq1fdJ5951rNcnNPQU6u7MyKTznVxk",
  "key2": "285qfwiG7zoYD1xjU7mEfxMjjvKBF3tw9d74LViVTss6XWCXvTWSdSvmT7s1EMRWzzGCdruSKZW1kzPg8TzRKWgs",
  "key3": "QFfmS5Bb5aP65qgcyKfnVSwk8MWYgq8xgUFbd1m3i5T3arh78YqgZWhfz8PoHEP8EyMqn3ZnyZJUYRW8yjJ98YJ",
  "key4": "3gaBH3bxyxf5AGiMgp835JVdkXJCDThEQyBXUxUXQ5pEvwy8V9aDZGpBDWvaUoq3eJwbWJyVBT6bUh3eMBq6qQZp",
  "key5": "5iBDEZ5s4MuX1AGxkp3UViFEUUU5NeQrFHyxvW9rvsXvcFf6TKrYrYW7St2QcYHhp9BTD8ztC9PAktiDG4Ktb48m",
  "key6": "3nAbFuS1mLVdnWismABYE6XCzsb3yNy5urSZBiBoB3B8xcnewPrydCnB4xd1dw1VBM5hCezLbKxBR2fstvScCfeE",
  "key7": "oFwDRzpcnFwf4sAmsAhGKVTbfRbpYdTN5juZD4A2gDXLEtFAAx9ny7es5DZ4ZfsofuZNttAXsjovfcYgDsnTUTL",
  "key8": "pybQoV7aY7tFp1rTTzdmSja7K2cnBkcs4RWCnqdm2Z59B76a4bkwZfmZ8PEfnL86n5pQkRCBquY3yxHe9TaA5dk",
  "key9": "59NanXWtEDZPuaTvQykPRxne1K1kA4qQMQ1qTDswhP7ciatVR3tR65smzais4vzVVWwtGafFjdN8tQLKLKQPyjrE",
  "key10": "rriBs2MPMoFk8jpBxdqUWg2Q8hVTVUeaG5pbzWEmAKGqKsn3TwWZfzHQRGuKrTP985pJWB8rfBPXyRvN9LVnQii",
  "key11": "5tnH7LeF5GTbJiPNNw2tT2sCSCjJCQgd87emyaVJmtUBwMhqXkLsV4hfAuS2WaqxoMvRUwDM4Gg3KK9oB3iKzFdV",
  "key12": "4HwMG734DR2FGAQrYeMM11o5LmVPjVEdr4ZH4gxSh7gYBijqafUooiJnh18wfoWvQ5pWGS2bJotuY9SCcqcM9osF",
  "key13": "2xmAGwzaze2eBPLHeT2bdKxkQkeMW5ycHkJHjqwFZaJSGXxZDfgGJ4yA7pfRvTeFJhtmgbG7Ar5EZzt6CZYXv2j8",
  "key14": "3xGmEmNLGP7VRm1gHMV7XYTEQDC3bryesTNbtksVKJpWGAS6DumTzLUZH2tzRZEU56GVRcXFftCAuDr6CkC79BKf",
  "key15": "2MLDYZS7UxYdcPW3prYCnzAH68xJ743pQUgBFJURAAhNNPo5cKLVBjiiP2ZRA6DJWhcbGyLwkmb1K1v49F8HiTU4",
  "key16": "3WKepXSH7y78oumiB5son4B8suhoZodpVTQKiEUwNdnrZgiVv59APS41uFaSJgky2GBG7UpHj67qyMpS6jDD66nb",
  "key17": "3FsTeWuqDgmyTg4qDfQ4V5y4wqS83syGJ9YKTHEJArtQaoaWHp42wLEpa8PvHKUxRuYUkNAYzvVt2mQtot3jfv3x",
  "key18": "5iVS3HzcLbDFfJ5BHoy3Uzcy8iGfGAW94TsyWjWvvUTbG4nvsa6cmdmXHmj1L8cUL8PmvnydzF3jcUXjkq84pSo4",
  "key19": "46oYUrafTCvgRjUst8ZUNy46CyufHKsy3VkGxKLqgKpA32QfgRxFKhgtGXDEiLeyoanPo9hZoiSjzfEGxBCVHgMy",
  "key20": "GfV9UUeJGwtQugnScqVnUaagsycWiYBh76mQNAeNfKoCytKAL3M6UZxP97eDTcUKRUeugjb4nhVhmWi3BxqGAg3",
  "key21": "4sEdPztVP1ECGsMwcfTNFbHNrQSCDsNTRkH2D1oQayd7WrnLzveHUpAHRpBKVLQy11hm4qZUrzP1gXMA9cZkkHSE",
  "key22": "5jidnBBnzQwFwsQo2xWHusPe2rpJ21p7CaMwCM3i7ebxYyr1LSRPV4KVjhbc3LCpWfkZrVq7eYCs9c7iMgK5LebM",
  "key23": "5Ax57GMzziZyYoqUCPkQTE2Yz7WLvpBw5kAQpfCos3J83bbyQpHJDczi6HdCYHiNdEwyJJXEwPJ37nPVPXbXECg3",
  "key24": "3SU7eanCugdAXtUxnceBLJB8JKLySo4WybWFqFmvEqvf6PLGFKmFYak8a5NdtRyMMX5QLtdNKLNftxSUUuJkgoq6",
  "key25": "4kR372kKpzPTUMVdnbeGtr7ZfUA4BkqYx4pBz5Xmz5kDg5U7nuyygWmEYQvE8eFv66RQoNi9WDHA46vcy2yjegZE",
  "key26": "4E8XLNspLPTeUz28hXfchQG56jnEMLvKFNziwicKERb8aioiLoR8qR6F4g6P92AiZRhHHT89tTQa2Kis37D7t2fU",
  "key27": "5BiJFoL65cb3Tmg1SnLTbLSWo2fUjMgjfmu3NkfjvXmoGnu4jBDk6nfBeeheZTKbeXKC7gwZuD8P21Ljvc8PSBJb",
  "key28": "5AQKJ4hF91DE9NQSNXL8KeX4qwqd1DMNRyYP9auvsT5aS6SBKmugkbB2CTF6vskCZSi87q5sFK38j58XkmVWhxKf",
  "key29": "5BWqS9onsdaxmtS5CxSfNvy8n6LN33tNhAzkVTmj4Ge7bavnZtARLACvJbREEeF8kWE9MDq1ovGJyx82cDcTk8W7",
  "key30": "7Jo4fFXbYRcw4w5e3rodty75cFVsvcM9Jd2sxf6A3k32oZaMSsJ2gn22Ase3HHcZBp6fHqaZzn9aKrCxD5kGwcv",
  "key31": "47BhV4s2QVhxeuwFaFBNXwDSmmRhBdwtSkfzBJxqGtdSJ7HCffjMHLQWFdQi7RKMgVH4JAdQ5pY7gS4X9SsQCEGU",
  "key32": "Y1wpcaqQKz3dHfKrTA5EYd8zB7Co4jQK4og9t95khiw72hsH3RJMoS5bpeyBP4yBjXjvEKbMn9kWMktP2P5oYP6",
  "key33": "4BtRghrZAc7XKfmGmMV8poporP75SkqZvWrjZVtgLDG9WGs9JoRb8D3Cw58tXoW8NQdL6eKNBQ6U5Me4zjVurLLY",
  "key34": "37Hgpwc7FpV4osmnMCW3ofpWncEpCddMeesB4bS3vaP7uedxxgYDY48KAPztZ3FGv29zF7395KXW8T5Yj31oecA1",
  "key35": "23PssBB1DKTtDaLotJsnwfmUyNUtKgyCAxs74vuTAB43bQimbUURE5yCQoNBUptpwV7rNA87HzFEnGmftShPSrYf",
  "key36": "5BgpPDBk2Ax6Saf5EsP5dKGZgpFmNHY3An883eUdVJx5PbMu5LqQZ8a3V97XyEifupbzKryr16PrXsnSq8M8N4Ly",
  "key37": "4rXZk7PANuh8LHzAZPbuw6w1oWMY9pS8r95e3feTAVFnW8K6xGmTE5o8MqvW7Q3ctMzxBbarJf5NKJm5eiQp9LSw",
  "key38": "3ipW7u72bWaFnMZkqSo5rjWrLZB5HfzAsVKweJ8isQVBg4nDJMmcfx9g64yTS5gHpAgng7pPD3ETe7Xx4oXNbCyV",
  "key39": "4D8Eo9YyMaBw2j2EsA88WmLRe24DNpBSJWsjeNingRSoYMcEPJaKK88oWnPcaXx38ZVKmBQHbQTYikvyAVk9zeZU",
  "key40": "3pqLfYYZdzLnjKJ5MnFV9EitwwzCYHKzsa2Btj3r7HEcuoXTeEWYpXnTz8fqh2Rj4TKyGtxCW4WSCXQ5pichS4ay"
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
