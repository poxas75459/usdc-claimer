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
    "3a4t9pU5d7iP3RfB9TgE4YAC1ZxqzPYbZFtMkaWLBekZX2r9XccJkmLj1NcKCiTYW1U8aiYz9a3eESmzRmVaUjhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cfWoyTqDKaAufBcbFvoKvGTVKL2SaAu2438YuPzSk4LrmcPg2xS5vYqbMru3gNosTdWmwA8WJKd65Rsq35CUFZd",
  "key1": "3xqm5gjuuk51MS2cC5sUVqQdeedzgW7ojTK5RkYcBVeEeMoqNvVwmGLrDho6TaizdwEqQeUUR88aKjJDa5UPhLfQ",
  "key2": "99BV6xJej3vaTDhrFNr4AGWdCB2r5N3Fj3MXxVCiN2h6XLvPUHuZsgcyA4LarVLbu3mph3EdhXrMqpHh66618Yq",
  "key3": "5JZtF7aErQeDf9mkYLwi4tnLjnpJ6DgvGZwg6PWLPn3Vv3zhxrhNktKLFiaPVb4vRKt3vEKHfzUJheJAFT6GxmgR",
  "key4": "2SSatYNSToQLxGnZ9Mckr1Lwv7TxLNvW77NoU8cJdUgmYKcY6GNv1Eu2rky2etJUYwbm7dsBGpG6hx4jrqTWmPUb",
  "key5": "4N8tSU7i4B15PfWEbBzvNLMT5BJq4NvT6dnxS8bden7M3ZTZg9tTyi4RGPxDKWjAcGSrFdKw3DcXKtn3QAYBdjQN",
  "key6": "45AXLCun7pXPmsp5EcZ34Aq4s3Rp1KYVk3wEfgCMA821qZV235yzbim8qxpe1Ux33wbSxQW9Vsrm5eJPs6Kp2Gu5",
  "key7": "5Ysourk3H2FqW1WojyCD9LLkh9FHxQnJqHjsP2mrgUcGuSaEAmpeGXaxrh66pJhrxxJkbcA9gCf5Wee8j2BttqwV",
  "key8": "5aFaXoRPzmXWs6Bvq49MTZwqYDtSnQpyUUGiYnmqDXHAez85TKaCrFPYZmVsSfNNeEKBWimJde2sq626LSupLRMU",
  "key9": "FmSm5ysWADUipcuU8g7SghaC2jhg4H4NGMHmgDfHpRHRKXpSmB2bNXnHB4TAT2sGSGCWHc2a7G8t7oNRDcDpQw1",
  "key10": "31S7uiPY8MrwBXSa5qn48HMuq45DgN2KWxB2LAwc1VXPt8EyhXXdSuH2PZQzGUTw21ErvkRhvv7JMU1SZBkfxFfv",
  "key11": "4CsAkbDhEn6eNP9nR9YdFsXVBuMXjAWvkHiEt5f5kkH667L8ZmB6QJPzCgBMcLQSycwuQqLwf611VKkJojSTyAxj",
  "key12": "44FRoCWquNQLKTsjmZBxupqJfgiT7dFuPzKn3PP85Kw9m9ZaxE6e2ET43jery9MhQ6TEXKzL11XUf8C8i3GjT9iX",
  "key13": "ZpFZhhqykbafP32yFmmDtEYhrzJf8tbJTJwCe1aD9SsLmxEUYFpdFg8qTt9R3GSLZAg2WpQxo6c1EXzrPYzFrZm",
  "key14": "5gsvTm31pndibsCidNu4kPLNz3y7QiK2Lmc6JVxbjYb5ue7hrbNC7Ki4HPP7XnxDiCB3XgWxKVNP6yk7kiSLRN2y",
  "key15": "3oDeRzeq5vbxUaRcEcZSuhKY2uyQFAzxCQNJnmKvF4mMbQ2Tkzb132U8uWWgXdokfynypagSmxCT4p1P5yr6gzfM",
  "key16": "3V4WdRjRuWer9D7VnnSqD6UUByagMcRs3dNfESxDZdgX1pjDEnoubA3kPU4nC6CkUczAETjeBjtxuz1ZGSoJLuhk",
  "key17": "3N4JEdCLqbYABJaCrexB9EGXoMnXZJhjgGUNeHevdYCC4yphHoX7i74d51zcZwS6ECxAFaaPjoJUPPVkGQm8cuG",
  "key18": "2Z4QPJTZS6nd7xELJGc9XtHZYXxLebpdmfGc5Pkw3BfXtgeGfp95vjKq7Mkb699SbQjukhHZKQ6V5MXyvWKLiQEs",
  "key19": "4aeerx2RzKCLMV4VaXCM1jNXsF6LgnoA4Erz91T3zDgUUShHWFqnYcpBe5sFCBP5cRQhsAcoZPDAFAk12mWS4yaq",
  "key20": "wTfd9UdBiLmQcDN6MdqC97zZNmyaPk32PuJJVXXUuo8LQGwk9XN2bvmfN3DMCBy4acZKnTm5raJBM8iGdCvXihN",
  "key21": "3DimxHTLsKZxfT4BB1QnM1ccHRhyr2YTFegg6WzZa7SQ8JKsxaJbZkdzgrjCjeTkdTFhmjc531RHPNkx1RYtf8Uy",
  "key22": "2V7svnje2Lzbd3goquZMV3enrYoqitWW9xxEZ7sgF2s6RqhfCXaEDqe5huxq7kpNTbmFmzvSRPhmZ1CsBEfqTWFo",
  "key23": "2gGkW8doCJZByPpBUe9jj2761XHJyKTAsqPSZ66nqc8gEfQt14vGqdHFybCqRufwgC2JhkpMWTAjbC8hVi1rzG16",
  "key24": "4Hj4aUcBpyfWZ61QNtnRng2QpE78gByhN4YGiPUGK4J3sXCjScxr2FDG76G7qHeSMmZReR43Y4sLiEuXR5rxAbNp",
  "key25": "4p5Naw4x2qRWnZKjXt3cJaUUgaKh5aui66kE5nh4ED1TA9diHyxsXNompdTefNCjbVg9Dwx42tJQ4NMvmWZV9XE4",
  "key26": "3uNaYjh3Pj4TRbMZhRWi9BZzYQ52RtHCDYqW633yRpCECuRDdGE5Q8qenPxyQ2yq77dy1jk3zq2V73bAeGDozKtt",
  "key27": "5is5t8HMX3gwqXFRyDDhkKpcGGavVL945TPSmJwnvB6WDf1YNVKj7kq8fMeNu7x6k8LGYuKRBdLZgZ32taYkjVtg",
  "key28": "4w5RKrLaDmPq8mWRpmiHx9WesjHFpzBvNErMq3g9oo3fek2cQ3mMH8KzRPYkfg8igdLvVb99HdrPu71RY6A4Bana",
  "key29": "9oCyRYbo9oKuZ7R7T1DB9hUKPsWLxH5sjxeFw5mnjZqGpvXcXvFaCj6sXJj4VkQhvEmUzkLYmwbPqhJBnY8BiBP",
  "key30": "2yDGtaZ6za925ZVoZqA4pwN7D5U5CEbctviVF6Dbxqx8JVmy2etuSCAjYFRoejq3wcdqCSY5ZeEroCt5i6A6r64D",
  "key31": "33zfgctz9YH9yZo8ieHC1w7RvzKqJPnBQ6RpXQamoeWbmV6VjTEXckxrqcPANnoC7cGgLLdFEPuPchs3kGRACTpd",
  "key32": "5YWZn4eZJ3bkF88xy15qN25ToFpp8QtJojjJgzh1LAWcyBEePvUEsAkE4wJUiirsrxZv1NAQpLSCNieR6uLgZUHL",
  "key33": "5xNt3b68avjAHv2q9BxeVR2KKfZDktRVmFjpsyKYciL79Hz7BMoYjm5vUAuN2cN3NfRigNczJCEeQWNEXtgyzrBJ",
  "key34": "3LqYEAuFHPLfzfQ5hGXUHiGAnq29yFF3Abu8cAg2h3wLYXXLui812a2UXXDdAW7Aopm4gSa39VWbtfcy3Zg66N3G",
  "key35": "5tRYLRJvGaUwHB5W1Rm4aCUJN9aqLFZaZ1E6KyAnjdTtcQJMN3DLxSZ7HEkDEk1K6Y7rk2vD5BpB9xGxpiBKQgrD",
  "key36": "95Uijk4YkX6yoatCW2jbxTYcrapPYMHzNE1zGC31EUArRj9VEBP9FFy6fCzqvvRM1aKVThr68PeFtxpvy9F1gHF",
  "key37": "2azwoY2Lds7dPEyrBiTcCRAvqSNfnJygPtdzuiYhL9rfufeJbq4GRvy5DHCiC1GVLCj3Du8Y22NupC32UsdpyE7L",
  "key38": "zBQYomoBwMju74V3YS2adcTHxkwXGFHrawZ22gTiHXojUHQWuhQeHoWMpkbidVbqbR4RQ79jQoyxfYxueCxZTiG",
  "key39": "4ipLZ196wjLHsYB4sA8Lnh7iABkKwwEjFFDbt3LnMYLubTG9vTZCGdE5RQtW6eQYupE3tQGJubJBRzqZa5C2iw8P",
  "key40": "42NUhE7bxYUEUsTCF9M9QhUUigHyVop3n1aKWqkmmzYFdPHAB8JvBeq5arpwbsEZUyX1EuwdtnNqYqczuSrCPbs3",
  "key41": "3N25Q8UAw2HQR95GzBTw6AjaCM37YmAnrYJiAp7SEeJNPqjU3wgT9A8erMFffMP3pb41VvoYCeQjkSMjR8RaATK8",
  "key42": "2g9y7n8K6DNMJVU3Wfa9o71B2T5yCj25fHw2FxKKp1VZC4wRq3YepKrjEDZZQ1doXsaFSgFiHngmur3HyAeQ1xua",
  "key43": "3q11Xeb5vh3fFBt5wL1QZs8kYeC4FDL6LUZGPfamAxBHsJoexykhApMaZGtK1hRRuPZqSqoxe9uqBs2kxfLCLb2C",
  "key44": "5VbofghyrHXwM1FzxT4HEPACe3CvDoZnzxoGiVK2YV4GpnUe42LLNrNPBpCypBoqUMw8EbhikrZWj1CfbtEgiU8Z",
  "key45": "5v1JAAyGb1zRhteTWQVzjrAtFdWQGHVVrQc6PhkSM8tkCHyLZSPrCnjbQubAEVph535Sm4ZfZfuTqNJzgq2SncEt",
  "key46": "4drK5KuyqCJPjT4at6uYdBkQoEN78FmG2oJ9fxnvN6uG3mZSmNdrgkcJH1wk2pHxxGZLe9LZGAqgsq5moFg956gk",
  "key47": "4jQCLNywLTipR8jSQP86aB9vYRmALUrRkAH1MnEDrci6CmTuuudRpLqEABLYP5N3WXE7u7TxUUAEXwpVTaa7SFoY",
  "key48": "4yQWd1LBKKLHbVRjF9LhEiHZeG9QAnVdDVatjGukpXDxjD2YQJ2Mfr4frixSQGfkMMqCq187RayBVLJ4UeEXD3tC"
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
