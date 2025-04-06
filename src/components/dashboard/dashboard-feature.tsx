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
    "2Nan2cZm9mss2e5v19EbHjPrmMq3UBE4hS3sqnTFSVXSqqQoU3prWSQwyKfFRxVHXnWKYCkFkdvLr88Dj7QejATA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tcJo76qika5kBYWsF1xFhi9w8teeDwTAyWK31vrcdQZwqVZGUDHi7zymje2nSAUUzT9u7Zv178U3TVHiHasT5Lx",
  "key1": "3iiecZFoCXk7JvEa8w1GzVxy9zMW7sV2oqmxUGKfDgd1LCu5TjyDgnpPvFVma35QmsBVRb1rMizK4mJvQ1hJM5Nr",
  "key2": "21agT1nvK9UzkkbMxyQ1J5hQjCoFRvKP8A1vcZruFcqzRewJQbEqDFiwgyfKVEEamqpwHjW1pJKT9FqiscMLCPsj",
  "key3": "4rxFQXupkozRJQibR3MyDQ94U2jeqS4rwYpfsDaEP2QBHc6PBrFU35heoetZQCsERP2ScN66Cfg8ZB3jbDrZeuvb",
  "key4": "bijUynFEAiKiUeFHsaGYJPByvCNPu2FNv6MPLq9e5WxLm5qWhYthjNm4J9JwNmNcf28k1Dwdz5p7LE1HVZ19k2j",
  "key5": "m8mdgCiDDhERupkLNqGwtG7X3ZuLWfLE2JbB43NtJaS3iHhBkJaxZHVy9xfZHLEU5ht4xzxXfwKxXCmavngmcwF",
  "key6": "RdXMzjxkMFETMGSLDVS77mHR4tr9TNPyTYvdqFKmixAsoXnaJkPwYh4cCWdkdivX72qavGr8sjfsEpV1wD5UWdr",
  "key7": "5HNEor7sYbSKPRAJwDQeavtqufhrrUdDGty6k19viUEGD2aBvrvFagyWt2qcRQLvScR8VvWXwtgEYKeqLwS4Zj5w",
  "key8": "3VeFAHQK9F5Q6xJSdN66i6XLXZhW2B8WkkJakS459Lz2aSsXucZtuZtY6Nnz6y6B8n98veVXc4UKWrL2oLX2eEpx",
  "key9": "2fdJhrg7KXHweHSafxATwEmP2ycCcnJ99sZGHygHmveARXxRx72pTqkV97z13uVjpjNH8gvaiRd7SerejQZ3zEEX",
  "key10": "67CJ3rj6UEiLaVaSGFCqmHEdnynM5JAxnRCi4aHjXBBy6xJF1xrV6Zv4gKnhyVoL4osizSNpUzdRCpKoAZ5R6wSa",
  "key11": "2zZTYknxSKGnsiyVdvVpyFdEHokqjXuqpfzuxjKw6yRw3Q8rxrVHGQqi5X12yPEib4Go7uUyM6L4ezQSTm2ysK3o",
  "key12": "EeHa5xu5s4rf931PCQGLiGSXbBa2rfzBQ6Mm6wyAxYWoE91tAzuZBxYPJGZCu1sRUz84jjhWdfT3zseU8douNcj",
  "key13": "3MgsUCWAMm21LGTCqopByNav1PnYjssfrCQkZjwFqYNq4DvjASm3vzozvdaDxwaJYKJrgPGaNneDhuanxhYcrMar",
  "key14": "3Fm1XXWz8mRCC4vFLWJhsTvoWPAeXSP6nEM9qgq4ovEhcH8rUoejRVonyyZwExNqPj7pNGJ9N2sPEoMcR74Yhtbp",
  "key15": "2mefckQTmBLsz7UwrXN1ukBG6bxbCrs9b8q8uS2EhpJSDzqpSGtW26xfhhW78A5aNxBwbucm7Pzb1roa3wtvf76F",
  "key16": "3oNxu78qdkAh7sTC9oBbKgqTGBZJpuy8M3qHwt2eqhaTE3YxUK76DVKwgPrkAzUWr5rUJyV8tcSHvxzwiQqTHsAB",
  "key17": "2jiC8hdvaFGXAKBwg3MZhW3nomLG2aiwyWMAd1mKBRGE4q2Wr4TxSddnGbTVfAzFEbCLf43dLd2vrT6fVXUwRAmK",
  "key18": "2jGJyJACJHctsz1XKjbNjGMDiySqi6k4ztpEiFE1gx7ZN5LuqG6XsAByYebhrkmRJEpJ9fd923HMpyCELwLXg4Ww",
  "key19": "AnMnaGqjdoGgvP7yF5kMmpRdDcrrhrzc8pPC1ZeY6h6kXz9bRLymvr7QaCdKG1EfXjuxVyRoT9J8NbYvJQ9xUys",
  "key20": "BLdHSa4wWxJnNTsP1Exjd434RajQDX1QotwhkSQBVeLgrPyDFCZn5hxedmP7TooznDnETUc9o2zRykxW78uRF4V",
  "key21": "2ba9QKv3tPkFcFPKVM8rPfDG5pgRHHWHvVjBoddJARYfEcDMJkd5ufDGe7vtMrpi777PkpwxNHJCq6M3Se2ea76J",
  "key22": "27rsgn1bHNuyeKKYmbqZiJwG4bKJLkDCUV5iatERqkzJkwzaor6wqYtSYLRRZmuzKGXBP9cdDBYco9vjh2xcnHvd",
  "key23": "5jLwBWu1heG73ZJqNr4nBM53MDc4iJ2Jqua8XEb8o2mkTLuW8Ad6GWiN3tLfYYe4Wrk6RyH5DKAiktEAfVm2t7eE",
  "key24": "2ZcqDATYjYRBFNGyhPUW2j5po98bjr78peYmXvdthe9GMvtjHYEmsjiN52GHcBUXjUjh5nwEDdAUxvThGCW3juMi",
  "key25": "3D2oZ6LMW7mnHCwChZAjiTMvcATqLRkBnd1pCmr53rgBERRr5FDmCTe2cgDtzibGAx3ZuKwgGdLmuWGCVMP7bgJ4",
  "key26": "5WXokkejgPFVM7QN5KxRVpE9vL1fnSzrPBpzwCWoVWKa8D7mfL1j3DETjJBqwiCRxeaU6PLLf3CTPycspFWzqWQF",
  "key27": "44jRzCdGzoqtVyvm9Q5135hje7T53ACWMhSssG3BCZfD2oUhVRzCEGP1vZtnpZWg5tPAfa4G6cF9GeAmSeTaLDng",
  "key28": "2imdhGVRAJWGQPJUDjohnVm9t3tPxiuzqQEtbHH3pLZMwrq3FCL613Wnkkwdkqd2bKEfxmQkUH4qqhi16oLBADzL",
  "key29": "2cfeHowNaNFxTcWCTbMe7YeF4XAzrN7VFMD3MBmwXsSS4h8EFievT8kHA1anj4XcQZRZBKtdnX6qCtJzQRNEfrQS",
  "key30": "5QP8m7Wop8ofJfibQKSafmWHEiDxQ35ipN1chEXphY2xJ4jFMjuueVTAERvUgJakD1Xjv9ZnXx1zEdH43qg6A9uN",
  "key31": "mybd6Kp9VDynqPzXGcERH8E2ym6jp44KYpVmqq5tSadnawZt4pGeaMiRWR1XPTtTMETvrMweknvsEE3EPFMS5Sr",
  "key32": "fLe9uAqo6VLzKWb47NVduYdq2UXuwKscsyZVvdxqou5KKZ9svaby6uvZ9UAmKcwz3a21Ret6sGv6b6FjXghUGWM"
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
