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
    "2YYGScHwHH414k5ma4cwrrxjJn7t2v9vbPvqLGXyk5W1bN4gGgN1DJQp5Pt82qgkVocvKqTbBQtWY5YnUNqpStgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RH2NK1y5AbXcfHcskXtgA3TU49fDEaWEin9UjjmqjqYiQuJhjUor6b4PqRGVJowan3WCoZWBAcDb8DJ9thsD6rz",
  "key1": "2gPtdPUCxgdVBGRWeUXGQWnvWjPJainNo3S3mTeMczoJSApSVmzBEtUMzX5THY82nejbP3VEyyh8fPHfnXtVsHAz",
  "key2": "4rg4AMbt8MwH4YSXwV4czui4VVTYMrCDv9ysuWhqWDeiroMcyBtMx5Pr7iGTw1k71h4UkPUUiM9gBR5eTVU4aoZt",
  "key3": "4RdUkfSst8Ep5oGsmrvPKmM9un1HQEw88JnrMiABHhomn2xyDjHLE6RdZ6yWEe96tGrS6m9uJrHkuCefaC89Ksyc",
  "key4": "pbrpPsuaPEact38owrqTmVwSoyeHTr6S2hFxmsrMKm6trAynG7uE5SFYoEqK7b6kMj6gubQX5XA4mYCAjdKZgW1",
  "key5": "3SijrAQ5B8c7hN7CfaVQFucHAsi4z2buqPn8DMNAsCrHDotM5ijBvoCuvEy8dhASA9rWjzp4gDubkoLonSBheJg5",
  "key6": "28APThGUxFz2hKtxDmcrkt3pyae1rid77sQgvzqyvCPHu4kDuDxV3uwdR5iM6LPJwASzeA3624us4G2f2jb36gT5",
  "key7": "oFFpDg6eq45xYTpgp2zUo9AX6MSyT18NWXQrdGCTpSaYpdNBzjLurdTTCA8wPztJExRp7dgfsUsAqrSSiuV39ij",
  "key8": "4DuNZXUuasaLPmWE9VL8zDmFevmzdeJALTrYba5h3ZxXZi1ichQMm5t3wA59vkZje8c9rbtMDhnJBvYP3eozDVgf",
  "key9": "3URX8CaBeT7Jm3rYXvo4jPgDLYz4vb6PPsRsy23e2qETFYptR1sgYUbWswES7kF1QkQFNwufBTnbCcWPs2isqTCL",
  "key10": "2HBkfC8FyeNuVDUJmcqZqnMLcUbjBWGfXWhfEX1rKBQWyySkNKEbCW24n1V8JgzjvqtQHKfRzr54au74X7yrNphg",
  "key11": "3EwCM3dG1AeNjen9EkrxxZLAroDJuPPvSdY4t35VEbQLVRCTA2ATNsWYBbBaMTmSpLjyDnrDL1rgpqJxSUpr4XA5",
  "key12": "3krza6PpVENzutpdrDBRiXWzUJMZxkmmsmkEAF1e6aA5NNCWTrVcVbXkjb6C2zrxVSdmhNWrPwQS2ewhM7kNJZqL",
  "key13": "31bVZFztmbzniDmXZHtBtZhpniTEzeStFKyn1a8vsak855ebSq3vMGgXDRBfXjgCz48vEdm8dTHt9djvzZXX7kG",
  "key14": "2D2q2pHonGjGiSsj7MuJTNohgpLGjLa45v8jNNvpLJp7VjPsPDTkPUkYf9x4HXfYvjnXRQMENrm4Ecx8PotknJYr",
  "key15": "5qBQS9VPTBvWDgzATrFJXiLZFbtZR6DpPoyVq761yQct7oE6Pw7LFzoiqYPViVBPJMePN1pjGmYhfKJF8qon7bd4",
  "key16": "2Yb3aL8j3P3YGZvWutHpy2vcJM11U8T7cqQRqgBkYAjocCjLRRRqhvMgKStLCLDYA1d2reRtD3Y64dk3iMKr4ADj",
  "key17": "gKEUWLW9qFRQQGCqCVPdZ3X9B4okUtxi6QxsFK1SRsjTLk9C8wAAyKg2KjshGk7Fou4u1QTBG2t4fKrZUn5XVrv",
  "key18": "3trzMydNQQWtE5FzWgwmmULbTss1GUqZSuZC29NQTaqKXJagJt8Pw74tdCLbM96qPKubtkrvw1UfZXFBMU69mYSi",
  "key19": "4CLtvfkficmJqsTwSbvPuN4eiKhDo9hXnFT6Zy9kPYVSMaRCeJ89ZALM7gfPvvyPGNyUAFaDUS1o7rUSMu2rTV55",
  "key20": "2S9P6RckDMcS3y7WhJ4kxx1nfxWmgcLZDkgMbEULJ5Npjad6vNumR3QadovSaN62q1ZxH7a4NVovbWRjm6Gfu74S",
  "key21": "4s91aUjFdRqYqa6de2dyovvagiwL1JJaEfVoFekntwaAMPte7yo1fC2NfJJFshyo678Kc8TGHWx8vtnHC46a9g56",
  "key22": "F65TH3hVGw3bwkY3tF3e56cueMGq2N4ng6ekRiVEPsZrcmgmMn7P3qexp9TcGRNVVfBpgbsAcsma3p19Wc7rFzi",
  "key23": "5NEcH5KXtb2xQBM8N6cHSoH4TzwKFMSVS3thupohBnPtWss4q5KTJtRALnDDmjmb9dm6QSd9vd3sK5QS1mz6iSzh",
  "key24": "4cHxtPdZdUh3cU1wpULLCJBzkXbioBYhizN36d1wcJzDAs4zjvWpUyQVmqJWhbdK9JRrUtXUHvV3a9ucsnP7eF9s",
  "key25": "4APxBDpBHUouU8rbrrNQ9HpFoZGE2je8cuL7pdWBSQCAECv9UA6N8kBz9mEQi47TG5sW2pfhYb3Ya4SJHKFaFi9F",
  "key26": "55aYK2P3ubBY9eLFLjAvqNh84PkEE96o8kmNEkoTew4M1GZhWxMg1FZW1fZkgDfk8YTxsMuR3ukJWVMgknnr5Uas",
  "key27": "3UbN9bFoEUBhf5dQq5PrxCLArdFPp3NzXPZJUGQQwtSGpNxrPiYibG5GSU35nNySCJc1VYb9TrPkaUEVQXRCsoR8",
  "key28": "xmCWxJHUEeTbuhKkK41Wc2iFrBptW3SrjXDCZw35A6Dw4E6Cn87cJCvjTcqspRpJheZL7chSqr8Z7vv4XhuAMGK",
  "key29": "35TDQ4euhaJzutnYxfPpZ7f38HZ4MVZySVswgdWrSDSfK5gmgNctGiMShmW5rAR71SxxCy4KAAVjfshLvo3725ZV",
  "key30": "3bPy6H2ft95K8KTAmJesgJnZyJaiyexgUZs3eBaSxCMLS61yHvsd9zw5Khca8RL4pgWbyqkNTxbdC1fitex5FN2G",
  "key31": "5MBtZM8pK5seihXvjjAPjw4E4Ke86181rMemUyv3aiWPaE8D6z2WtFn357vcCuzNJ7bjbb2nK3FAC2pgcQw7cpCj",
  "key32": "4G1Mr3GsxzZ78ktxkCM6UAeWDGfPzrZ2MLkaTjdETmuWpqQ1dtDzdHzEKNz7McYpj8FZ6qsY5Bmg6qeGuyEg69qt",
  "key33": "BkYsLwbzr4wT7ZecpoYnHMLSqEgA8fq4bEvUq5csXJX3uYPFZLqSY83ZzHJx7yH9WUysy1ZaHZ9rhHre3nyknJz",
  "key34": "3NDZ887zuUzeAyV9ZsKmz5MtX5jBT1jb4uhLwb4zm5uUALKh4fCPg6gK714p3tCQYDHunCVhAy9SkW5978HwNiJ6",
  "key35": "56ynGQWUZayjUVkhzcdtK2QuWYGNwknjApvXLkGf43TRYQgRKzNhHM7P8X3Y5pw7nEfXkCKd6oY2BDGnxRRA9n77",
  "key36": "5uqfWb8C4KyJQe3ni9ADvRUdcxnFdQFv9AnLTP8WnDKStyB2VBikQMLEanEKoUrxJ9DVHAHsoJw1PrgDBEoGBzZT",
  "key37": "5PWM6BSh18mJGvL7LB7jbe8Pg7xroaJET5NbwWcjDXZcHmLDxSRRExekSceKwrdxaRxGbayYCdnhtyq2GTf4oCJL",
  "key38": "5GVRFLi7wD4TJqGEwV6m7Vg7iS2FSriaLGPBkeRVvAHmUTKgyCgMDrGnSUmTSejVamMVJ9an3F6iksLjFN7Q9Fik",
  "key39": "2WGu8cZCQubERhray1PpLuMN48tPaQp4WJDgFziKZcz47kkq8oe1vJQA1jbrh5CmbNT1SXyDARjU9mJ3ryTx57UQ",
  "key40": "2GDxVMNQwcBSmJtmMWAeVRVR286qyjLRktKvULkPFwf3zdMVrimjHL8TZREiLkV3wPEHcLVbTajHgmxWoYxztbFe",
  "key41": "3Ec4g636rWWq3mes2rJpyWfwnREFWuioGq8c8zWvb9pLSGPXiib5cFhom4FGVexWgpQnsxH44ZEBvtZDJXV78uKz",
  "key42": "4iQacNy4CkaZch1ryH2Ax4yHaRKwfHfGcHFKFQBEfnS5MRrvNS3hnMtEvho1oR2QBC86givm48qS4HsjhFh9TUeN",
  "key43": "29NAvpqa2rDcD8ubwonLHQ5evAXi7KAbSfTNe4A2kShDzrKs8o6TKmmBx9vT7rY8k2RnCNAboKdVnPVysifFNBP2",
  "key44": "4jX3t7Nk2VQkSf5YDDbjwuPbMq9hYuvk1fzVn9LxMqk6bMZuyfiGcQtyEbTGi9LQN1xVpCnp6nqEUNho3DiqQUZU",
  "key45": "59XTAnpETmBCdNLxSHx6HfutfHi7EDnueow38QyQxKN8NY1pXNUr8dNWspP6VgUJZiLV8yDwZYMBQGnxY4L8beMN"
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
