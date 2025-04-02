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
    "2SiyEhAmobdeE6Qr7D3aCUY5nCkR7wBkSABfwmuZEoFwT4au72iVd4Vhc4wYDbopZyShz4GsuzuHsyyAfsGdVYuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xiQ2pjZ1WxyQZgU8e84kpmkDWfM9X71SV9eZmRu4kSQE2nYUt6Dg1ZVCfZvbCtMnqTDeEqyeGFrTgBy92n3XD81",
  "key1": "3sgRHA7jGzctEgB2iz8GL8STWpj88HQAVQ5Fo7RdcKJDAXycfFFvkbkH4A3wM5q1RceEEYbShaEPqn967qnULKFZ",
  "key2": "rxmqodVn76baFE67diFtWGX9NjBvfCJX46fkCr98jhFQiEZYwEVmG8oXBVhDh2bEWpKYg5geQmWeZgbo355e31V",
  "key3": "67K4cNUhtu77XgKwCnwwHicU4Uk7Ssf5e4THSs1mMTaWC3bqZ5rYS8Y9DbUpDdEAmRaG5owfeA4Gkp9eqHGEjffm",
  "key4": "3dj3SPc6PFu17MNwvCHurWHzNGH1Aaw15GB5jh4kxpkMum8haEjXbqMqoKajUgTpzLNUXd9TyonTAT54jwNsYAyq",
  "key5": "3LmbNi8u9M9zgkTw95q27Y6m1iGvBTFFvkfRVrr5oC87ghgXoEiPD76sw9eVZtkVFbTeWo48ZGCcqZE4ukKrw3PM",
  "key6": "3Gi85QBqWDGTFBquLCWtfrjWcaiceFzgKYXdbXE3hCeAmKhWoz3KKhSoVVnmDjhMx2bRXAC96UddQV3GMPQ61HMU",
  "key7": "25JWsrr1rHsCyioS9jZ8dNjfoCpUrX5c6um9daXdraM8D8XaTL9FpNdxPbfLo5abpCCmsPWWkGEMu3uYUSgAaBoN",
  "key8": "3YDi18CcZmjPsKJv4mRTqgY9wR6gkznTFBPFkUtan6UkAX17AtYBDPeKEL4St1toqjCfncvSb4krLKWqeoS4YYiJ",
  "key9": "3okggxxNC8TqaFWzuRfBTBRPYpUQkdDnxLQPzqaVritgX8apXdXPAftRtxNctncUcBxHMCrXjBJ6e2XZMAR2nbyK",
  "key10": "3aTDZemWCERLF4yQfDXDyy7iVhyFTD7Qi9uG3XcZNVokpL5cwnV7GVWZc9jmdLfkmRcKJkmBkqXhkRrkkqNUG1H6",
  "key11": "3NGEmCZALa82TYthsUWjsvfUtc587ZupeXn9LtczCvUeA3mztBN9Tiy4qY1x7H5AoVwJ6mtPCvJgeQp1J1WAbfyx",
  "key12": "267KnLAMqvnMnZnHtUNmCBjTZkqjRwtgAQ8ZSTwpgLnBnyYPohFsPJbyeqdYb1PF2cMUyAEXERrSdepGh8BxcFzL",
  "key13": "5spvnTVPjKnGBAnxM71iYPUhmJVVmheV4E4Bk4bczG9oCDg9fqnek3mYPQhiQh3UgEqGKk3GFpBHoWxE7tZwfLaQ",
  "key14": "5cBDcEQFwCgzFpXURwpaz9gHJttdJEeiz8ZvCCJTTHmXrEYoPEusL9SH1LSFgQfbeaN9dfv4pN8RaGvqHGXHbnFU",
  "key15": "5fhvAB7ydwsPmLQMbzqyPUnXCWAZ44dBQXetbmqgX8qZ3eWGghtnN8CCHML79cNkjFpGKrs7fRz291KqcgDwNasq",
  "key16": "1gTftKhFhRSd69Ceaer5XTNGxVDd1gFmhHcJ8jUhscDZPjWTbRHbVkm2j7ZfsDZMJgmEEu33yH7pxw5iBaN9bSy",
  "key17": "4zKKVsQ7B5qKT9hXH4A2iNcZRWbCA8fVth9VKjnpiVYfoaod8KePX7Y9T1kbgDBRJFs2TLHBFULjsxcyZrdjHXbP",
  "key18": "TW1QNtenp1ZsReLpzXxTPUGC1i38DW5AGXcWAuf2tkeEdymxc6hrqpT2rokoueEJRogiv7HQ4CwscCbkcEgmhF3",
  "key19": "QD6pQd9LbwTb75GzUmtoikZijhkfhTHuzDyVgvu1HMUvP1NXSW83oj6ZEnDD47qHXfpkYDqcLMYFmhDNFEE1W8M",
  "key20": "4i1cw6iW59xkc1VGX354Kq6xv9W4YgcxfA6ZrmnXKGXmhKVVM4txgpmixfL5z83vtMeoCtf5c8ZHMyfis9X4kimZ",
  "key21": "46cxFJn7WTiHDPRivffNkv1R4t1V1dXeGEzwLgfoA4jVEfPRTYKhqNcKzpk9ZNasNxzKB1fv6Fq5vA7c6eG2AVHF",
  "key22": "4B1kHxoYvp112fMjgM8ViNVQ1pwXFFwbSsyfrdiasSxhGDJfkTp3TwMUyUURnUWoMRonPUvuyJocCGrsCbN3uv19",
  "key23": "3mixjr21nutDsHYWmx4b7JReZDBt7EuSbJtVeF28dsXrzLHE71sHiUjQUZ9q1TRcLALhoh6e5DNGgQtmQmNwkGKX",
  "key24": "WCWYRXF5G9wJtafK1aFQhsEjjPTijjB3TRtHL3D9F8w7CMNxzrxm4ghEEgyKRQm9arPhpuroTuaW7KAtfC9CoKB",
  "key25": "2euAZZ24Fd8EoDDjRgPnraS5G6tzj5LQfJXfQ2ksnoRcCSWumuv2QdxRTWHwC2DFS9dpPx7yewg5h9EM7H44PK2R",
  "key26": "2v2wnpVkrogzrdVNsEJpJWT1KS4mnfPVRwnLNdZCZMQH6Mv4qH8vixHEHiQqWoBi1MiuC1g9BptNhuXevm7GwXwW",
  "key27": "58AVW2FnYJhHHwhXsUvnyucGgY8bADSVYPPwb5J2gtHLo4vmc8Q6Lf7fHxNrrYYwrWYALapWPKW26zmmbYjKvK5W",
  "key28": "3qSknv8jyWxujwECJLoQGSVL7wv6KiC295NDZnzo7suniYJff6AJosMsZLV9opYcHL8qPFFysQ69nFrhL4RvENEe",
  "key29": "653aJkFntsZTeM7LAaXMRo8q4ZvJ6tdai1q8KSDoFSo8HePN19piWk1BxMPHkCfMevuURZZCmTC13boNP4GEBr9M",
  "key30": "4N9zRjHcvHF3i4v4YALxb1PJ3tbM3A9gzTxMaGM8JfMgmnMeeKP796nkspGpYzfX4VWFiFSFDBeuyCrCHez1dtRk",
  "key31": "3Aqd3DqrhUguzK5MjBSwgKokcwLGHpcwibm44XRPk2Tt9jmr4TbXNd3ZqxGTKy1Sm8ScAbS6BQDsjrmktNbHrssY",
  "key32": "3Xu92QuHkXfdA1LTWwqxKqu9n9NNf9eDwmfhX7Q8c2RLY98uA2aQYWED36LqLwgqZm7SHFWEYmHttrdeaAY8ioB1",
  "key33": "2nfynfqsbfxAv6YbvZJE6rzzyj8LAoH4uPnyL8WBxrqK5h3hmMSnaivnXX5XxbatMkuzcXC3HYzay4AU364p4XqX",
  "key34": "47UUqoopLJdDP4zdaHaXCg76wSUGscXNVuXXEiAGXLDzCxRACjgSpYGCvpLMJKMMTkHrVNLDdmEgikssksh24kPr",
  "key35": "4zG1C9pYo7dcg28c1rpKKDEhas5mzEzPfLnvT9XEG7vEq5KR5z9e1yWv4JRYKEWB6XRp5QcTBe7ySkqHA2ebYUgo",
  "key36": "45kJBuSwoxwbZWZowWqLExZ48KZGyLkzzXCTuZs69xK8smuNbtcdz4nGAVWgJuEadZu8qevBYvkyjE4JSGGHJF2U",
  "key37": "pscRBp7piMMsoATARd8yGhZhoBcB2fwFhpUEfa679d7N57ewfS1R4Tu48vuP4kkFwZjiDcNoGFQqWC3rCumewcE",
  "key38": "tiMBd6rfCBSEyQc8Mv98bEMoSRwSRHPZcxgteVjYFgiFBjj8LQvgb9wt5N3SdLeFnq6GBbPZfNKEfUV3Z3qS9hA",
  "key39": "5VoqTPMFRRCQugaS5YEQYbatnH7jMmFC9MaXnQc1R4saQ8zLwHMK3B5Lsn92vYcrRbZ7LkfGvBVNxhFdpsBxMXcE",
  "key40": "FvLy9ccwdPqCmGWudFYNaPeq69Gm5QgqbHswFQPFyvJPznJFQKeZpTBpnxiKge2rMCutab6VNZfEiwQ9Usan5yE",
  "key41": "4Esma244aqZnQstu3h4PC9AysWoNzTy9mpgMjrkYbYHvdxVyJEjw7UqNAFzfv41vM6gXdg4yKVYvf1UkFBhpfJiZ",
  "key42": "5LeaiqPC9FggWTjTRodoc67bqno1ckKyUwndxzGcFKM7JbGGngpLnK17mDwzCkmxfMjCmnnXFb9QzAnPdTMqhL2b",
  "key43": "65oGSzG2S28gEtPKxf5ViX8LBsxtPFDssqQA7RDq8BkAZYU566tiizjbDPdrDGfNVmxGfDje7AFnLP3KjU7KVWef",
  "key44": "5qkvTzC2DBefXpEQhcTT88gks4AquEz2CHeUKPpQfvRWY71XuGf6Xxdu8fF1W6wFDKrSJfbJpqf63kGwgJe2o1KR",
  "key45": "389skEPgv5gJkPZUCHaY882zQZz7JUwqLkLte8XJmg37yErhQ7n8xbY9t5izZfRmsYg8rf4HkHEwz3TfgNrTWK2X",
  "key46": "5B5x4zGN5M7iqFC9nP8Sq1PQVferoYV47e9tE17QVquyTmkFRD2uUrySSLbpmKpybUPqUyEk4D7P51s7VyA8Gb4o"
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
