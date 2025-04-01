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
    "5YK1qtZ8cUimCrnB4RmGuqyRrfeo9gBfttCjowqJE6JPHLivzFkBkQM1crT79AAoYerRPkjq598WWRXBfVdMXTHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JocH1rej8Fne7EqqiocHr26bK4XRwBH3NsZA6QpNZW22YVi8FigMtqLwTFk9juV6NiPDg1Qyew8Sv3EsBqeAFNk",
  "key1": "32kssPiPRTQogJjz73vNrStCAD9djpWBdWUFfoTLaWgZkcWCG7k6T77DncZY9BDSckAsADjwC43CyENWE7vwskLt",
  "key2": "5ZkC55cxkyQq5R2SqiiJSE3jqv1UQCUa5eyWYgZDBhBAtidrM9jP9oUzHQtpXTAJjTsvn6zepuREJBhyP1Aabwf5",
  "key3": "sQ2Dhoq4dM7if1u6VChXYkPa5mNREEmjoa8YzgESKyLPPpRxySZHJ8VVEJPdbUjUsF5UWxNvhmWt9kCj35qmNEZ",
  "key4": "5aRnXFokBuT44oBNP816hxtgLec7brL7dnSi9jHGv8d7n49LhXCUwXKsAEewqLuffBuo5EZfSz3FDKw7HMzk3BTY",
  "key5": "22PBrhVqaJZZivaf1yLwCD4T2Ymcmfzgc3KeKrMbB2VCuttTtLSMizdyB7n5Zrv8ehidejDxUnzY9yNPAdMwNoNt",
  "key6": "4NMz1Q5rzjaaoQuetLBRAGJ2BGDGxjLrxtK6HQof9iRpf4N4zEqybYb2Pmq7xGUg5eVYGJDgQ47p3WqAuZfr2o6r",
  "key7": "4RYL7tUM39554ysdJFSkqYVbeTydGN8tC2ixi3144dp5yoBHfS3m2EFqErmVMyEd4rhYmSXkwSjQc6hK58xxKKSZ",
  "key8": "64AGd68rpRiKuPAnVaGyJbGFME2ZzyK5D62J8cackd3HaqbsQxdxtx9WCq2J9xxQ485ct1riDy6jXTZL1tKwcf4t",
  "key9": "3pUZLshh89ypMyaM3ymrPkhPXpvs3DsbaD2p3fi1NfsV9NPzMdrM7w3a52MmXzcGrX6QXpc9csYHVjaAXtBzTfSn",
  "key10": "C6rNHTKS6WYjGVm3ACaDLBjSiNpbCVfCRC2u13UiTgynC38AJ2YkiKtyRJnesRrh4HeeK6AnBPPABkKFynHZJfC",
  "key11": "h2TK7xpeiGcYS2WJomNG1PXrQBpmcxq5VwUkMBXdo5wv74C8VgzUhsgoWuftRECUC6KSyiA8hLBjvm4t65kP4Au",
  "key12": "5dCPPXZm1hnh1Qjh6Pmqp1WDQCV7Z549aKyRm4EuWwPXB4s4B7YcSbWcGjdNWnRB1Y3CRWiboeN3tHzKD8PMkXFN",
  "key13": "3Lo817e1V8mUL3xSMNcEkBhVZXDxeV4hMLLnrrU3SdcKSFCgLmvYuEJrmdinDkYHtoNDegNgbzNq9tZtRkb59nA7",
  "key14": "33p6avfnKG91PS5cFBXnD52vJDKegp3crF12bCyeDhs3DyvJCZCn7XH3VzepHrzzuocE9EYr3TveEPW1g89qi5aG",
  "key15": "562TAvxpuTAvgn368wJW9tzruVGJZ3iP8P4ufewKBebtEYytstZGbftDHsgdrseRgLentUyEsQx1R3BJ6nvZWi5E",
  "key16": "2g22iahxQNYF3hSC5A2r1Y14xF3NBdw5TV44K9CxbfaMZJ2i8eie6qtd9T3PQeH9SaAVvUa7kvk2Bvv8xMCcjUBf",
  "key17": "58TamMzAtZkhFPwmUoKhvCH5as8oZYYMejLwpFaaEMVKFFwexmKH3Trw6dBpXs6LLEqUFHXoFyHnEkiEojiUqktg",
  "key18": "JQqtXvfDXPrTfQBC62Aw4Vutxr4gGVe7iJJH4rkueyzkZEXJZt8mnrwe7txcCbfEFHvUND7eeV4wnMz6WpxBXWh",
  "key19": "EsjKEmvkwCG845jHrCR6cU1m7Z6JSQ36dTryqu8RtiHa66WyZD2amRhujz3XbGsL9yxAXkXtJHTMfswXR4Kzcrt",
  "key20": "5nXwveoJZnXSJkh44ZtgTsobMNtkkds4Ay5ENLPwdbZuUvxJJTbQ5SxDq6cJ1ZA4d767sgfuNbUz1L6ppCSBntgX",
  "key21": "4LBTGgSAW7Y8WAX9sqoZyaxE4VXDEveaLxnVkhB6a8GifYPzowqiYsSh3uDtiyunWkSyXARewkB3cbBZpyf7viTH",
  "key22": "21GcF2d6KZwCu2vxVykdAawKA1yX3GBuASCNMQdXhA1kSyTqiV5nbC9nUptdoPv1D9nFnmWbP6rxWxvQ16P1QQ2n",
  "key23": "5m6rJRrrn3JxVUzrZqUfMMZV8KuvQXEUgLQEzzGnsSXLy25FthMwiN52zc93AkE3LVhzVPm44hzJSHr1St6C9aFK",
  "key24": "3Ps9cpfdAaEYppcez3fU3DVzR1RThXpD6RwZ2fB4NULYHFaStbMb5pAaFZHsCtLSnxubHQH8KJ71GucrWY8dZx7q",
  "key25": "3JKGqe52tGFigKJe5xX1nohQGmTrvqSQU7W8qR8adnyAfXQAUHzMGZRG59dbqqCtALi4kfFsH3r7BrrXipg5q3sK",
  "key26": "2C92daQTsSimsxjk6jL13rC9J2DCuX22xnvPk85dZd7rmJiz3Kj7uJbDRk1hNQ4BAECmXEEqHc3TvdLyKD9krftx",
  "key27": "2eFcFEuFFjhZ5wT8LZ1XfAjSdvsT2c1su6QguHg1U1Q6UvemVFAU7yZndtCBoKCX3osDLD95WXt3ZVqndoYWqqLU",
  "key28": "4VCirh89mVtJGAtENXoaEU4NYAzY7mZUmntGpBfkCKeGHCfHjff5qy4PmDXYYm78D5iVRe9DVM9UHmYiLXcGtuwn",
  "key29": "3vPTbXc4rcxBxwQc1nfr659k2m7uiWWx5SEJyBWvVsMdTre2P33mLjj6cY8EQj5Vxs2sRNyaaCZSz5434GzNZqPY",
  "key30": "3Qy1zw3BnTW4fiY3PdHFGjTsAkwVoEu8GRtjZ5DWBNndLgpEX3UA3B8dQsBcujyQ3av5g7KDeBpvJ7NwwHivH4hE",
  "key31": "4nip3chg8rQk11Paj97cLjTMSYT87AnV7spBkfvQHduvB1FyXHBv3p732CEFSyRMThBvMUYRRbT9wWtguZL3HpRU",
  "key32": "2hQinWuwVJKwcYnPCsQWGkeC1GAzfpLqibvBiBMhfJvUSmnSPkRaVyUjdbGfQiBD7q59kyE7TW4Q9QHrCiDXuTJw",
  "key33": "cHLifMcpvvbXqjneMd1WiGxdk74Tkwm9wUKDEyyCNHNASAMQiKLMaahRkoF3c8qJGzNky4yUCMg3Jqz36UZ1JnL",
  "key34": "3JSYMbKZT6FHqngjStLFhLg9yX6hb8qqHgAs7Zvy8crGQY46ej9L4DZG5LXjCkiGkrZQPg5WwLyHQoXWP5tgHDwF",
  "key35": "67kKQTnge2U1n3DdbVDeUbKksaxvBSn1Y7GwGsjd238JJRCteBPbudkwvfzjmabRH1EQg7gt8sN9T2HmYzSJJBGY",
  "key36": "tWexHpfU28fSf48cryWtvF23huVHvMqFfJibYkDFAnhEk286wAuen59FBypJHCChJmY3ciVHy7vUeC8HqMftsFZ",
  "key37": "5xp1jSPmEAHQi9gBAVfPU2SYkXoW6rhkGKeC3v8ZdBtvT1BfuAeP2wCxRhWgs2ZpBTnpFnkVTZ1Xyxgsf17e6anM",
  "key38": "4KvvgMqHVDxBff1Xu1LmCCev9DXYVP5oLREh3GYfk76NBLSC6NoaLxApXX5SUWuKgbaSPqTcXBbBYxL8xGR5uLFx",
  "key39": "2tmLWqop6iKANUPQdckuDQJSreRRi63fn3q61A4jnmnHJTP9Zan4bGezummK9zE5DgRaovXmaeXhDteQSphdHBxq",
  "key40": "5c1nTMEC4ViWvwYCjwuMJ2Pxu3gurdPQCs61GWWRiVKXxYLyXJ8Bvs3kxxLp87ST6yCk5WEVCsDLk9fFCYrZx8ec",
  "key41": "5hrLBmwoMMszCqAAvHarfDo2Wbn9TnBrmuw8sQHws3AszsvypWMSW2rdu4NZLezk2vubxksy7twoKodJf4q6bf1z",
  "key42": "3HnMMFYFTpgpkujPB8y9Mw2vCv4vQCfEnAu2G3gQSXVsepu98zHjJkwoa22CLvWYAapbximoXeRcXT4Zd6ibhZ7k",
  "key43": "22MgbB7sAZhMuZoATHx4SxWyDewQNCgq6miFGgB2XaacuzDh3LuCjssqisC6ZaU8Qopqd4YSmmQvPy9t8SKikTaF",
  "key44": "218snoa4Y1xk3mWi8c7GsWKYTdubtzaWuxAwACUfXner1PNJ5jaigRtk2zyqAWGp2dgyVXrQcCVywsLoHcxksHLS",
  "key45": "4Gavk5G2cj1CKfVFEErGsXMD6X2whCY1FxzefibAjqetru9wJ7mGjxSjeHHk78PdAku6UgAtsN1xmzzyMYNkLttB",
  "key46": "8jYP9935jatCZE14w6HCwmqYyaGotBANddBub8STwX6KdgfSAK9mDHjr7zH1n7XVdyW2fVfr4HhnRX7vv7tkGsg",
  "key47": "3a6UfPYXgDRw26SvDDtXCVqQX839fgWjAkHBrAaoZD2kp7LnoJrmqxTUJrskXeR4sJpfPsdF6E4N1yrXukxbgSWp",
  "key48": "5ZPdniCkpvdgG2ebJx32iZy8rz4WP3TmYKAuRT1CE1Kn4sQeCQgx7DCrWR7TMW3Ncmy1TPiv7LjRunUWgmjTa1A7"
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
