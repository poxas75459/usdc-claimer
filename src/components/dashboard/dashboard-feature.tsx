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
    "62CeqSLNUvL6Zcc29GQFahs8Jzq882w2Xsm3J5LzesamWafXptZduk5tAQtSGXwrmmnPfissd6LifVhUYDYFXk2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdPVH4JpN9oSZTiePdL54u2Gfp9UsFoiFA3b4xNbTJB99aYSRXYaxVBWLAy2bRmDuRMnAV8GTh5fsjmT8iQePJq",
  "key1": "5o8qitaUQmT53oNofRoSjbLTc1N4SKpV4v4TCkWUXEkF5yNScbkTUFziHe1gxzpRQkmtPVqX79zd7932DwAVHjZ3",
  "key2": "3MNhuZur44ue3dEKK8QqGnQWf7jp6AjUgNJPQNGF6bAfgj153ktHkiAcw9ycobNp8YqW7MWQZVaZeZf8CY5VRnsS",
  "key3": "57YfhP9oYXnukVGS3bBZXerTzwNZwtQqqSfHXan36BpoEHBequBmb4uAEcRE8aq5gJBya2bsJUybV8T2YofpX8vg",
  "key4": "8Zr7oQCtjRsVXjb6d96vJfvyeAir6DdFLWgiTQHwW4BDyZ69JspaeTqWQ897r8Le8PsaeU32mzMFiV5vnWEpQ1L",
  "key5": "3kMm14oEvweGhXVSF387ki3MCpQHjcKWdk1vwK1q7QNTiWmDgfJDpgrAirCSAjn2651BL5SiEZ4wjEZAGNfFkF1A",
  "key6": "BJsBUsaVrrkxBK5xGM5ZQW2zdUcCS6xn6ERbgay4Sbr61mWgsi5b9nA6c3w77sM9A6pkhFtmGnS4ShLyZ1FNHsD",
  "key7": "291b2nWG6JtuE838X3KF3xxwybjoPWLNjyc2pAiQjm2dtnXFpTrU6VxwTCUyvPWiUVrsP5XJWoP9dqcFh2Ufme3u",
  "key8": "fFGLeiKWKhPfagoQx4mUkXU54HNtLzzzhWtKKsPNh8yUJTxRRXKdSHBWbTZrAGUFcNg58FsY6z6yNSJf1XAzUhT",
  "key9": "4QRN9iZUmf17Yt5vLrdzK3eDH7pQ1PgiHTdLp8ZepYsN5mrH5o8S3a2nct1SJNdFgZQ7nkoNc4b5zpmJ5ncBnuax",
  "key10": "5GFQT1BhNJDXtJhDyjGmKMPxtj1dpveFqnhgEQMBGBkCxcnqJb7rMvPnbYxyz1GXirrFcCfdZNckhd9UeL5NQm8p",
  "key11": "3VA69Xf76EVAGcXUXjLEpmivxpGcXrkRh5NR4UyoJ2FgNsRPdc9JquGbzgaz7wYBzgNJnEx5gAiQXS2Z55fciX3V",
  "key12": "tfKVrocjvgbesFPJuY89FJfVHPn5kkxUhAttT6SnfRDqQpfrHfPL3DgeY1XEUA1SVP1yjauBdh4zmfS9cdvJXrY",
  "key13": "66HoVEhQ45BMYc4cuY7U9hTQYjBZw2fdpepjgjyEqwYK53PtqMCV8PdpiNCG3EbUMgUZKhECjyHwXGdqE86aMq1j",
  "key14": "TABmPacgbFm5ZG3dACuurr3vGRHZNoivgmnY3pmEHdXBkLENvVr7bLtKSHL18FXdaf7UPSCaD2nQBjViZnPWVJS",
  "key15": "1xwAtZYjhSRweqiDpS1pwuQ3kqQnzHytAZJf9uxQiULebk5BsBRBCkmy3E7sV9P3FFYYtHkgHAgVmquUWJELANp",
  "key16": "5ocYbDKcFsjGRfxL4XVsaC3m56fRr5hipKP3BLVeAP2vD5McphWm6oT5faya64f4dkfzwtV3cmKn8uPntRTzJEYK",
  "key17": "4vru366wJnADKqkHfgjS9VfRZwYWZMJyJhXe9Y8Etwi9xQBioJuT5ZoHRbXAFY3S1PC5AW5FQXaf9PtGEDMsTdz4",
  "key18": "3YUU1YsdGdGvpu73NYsxE5WVUdj9y31Ckeug9UHLeSDBhcMdKccAf6qNkZ4qMcTgAD4kEB59H4y3BvR8GS4pTJnk",
  "key19": "2j2ZfR8VdnaiwJgD9MiiiGGy7ZHV1TXr6nzHD6yTpVQFjySGndfUZT6GNMQUrWtxhuSeJijwmHBtyXp7y2eGomHE",
  "key20": "4Np2RgCb7YDaZ8PrXyyYQGjBwiM8GrqYqMxFzRn1p775xahDqYZudq9m1pxjnkRRi28fyTzLe2fmGKUXLBujuorA",
  "key21": "X8ExYpFNX62V7bxyVAHbrCa6VW61rs6nuQEZs5RPx31q4GJw9iyqvSKv63tma3dbyb6kT1yXM4CgqsAj5oeqegr",
  "key22": "5Qi7UPh2Y191BLYtoVWxWTR34oi3FiuJieWL9Vu1dS6pZqF4yDKQnUsi8aZpkiUsoYSmNZKtY9fCZqMn4YSwf3GA",
  "key23": "2o8pLKAJDKQSuaLYUspS9CzbyhFqbCyCRfZWMVJ2moCRBdyMuGhzPWSU5dbkuGqEmz5wcWR34x9C932GgxraF4E3",
  "key24": "3Hi2cVgKfRZBXx2wiPWRVDXC8UJrqncEjYMes1MEkgha1PQgmUTztREZZQiruA4aUGaae47y2nBhRPDmRvPHFVZ8",
  "key25": "5h89Uo4UsBHFFCjN9VF2RAVv9q2NNSbXu1kCxKhHDw6LEsKaUy2GvL8zN9HiEuoX6z78ZnP1nw6dnJuYiPzwMr86",
  "key26": "x1cSTcLSX7DwMurenop8uK8p8u9y9SXmtUduVXfocKXNkdmXHjYdukFDBU1z5nvtRhax8nq5aVVymgKPpeFTxWE",
  "key27": "45szv5cFn1Sw1QDTMmn3jLgFQ9sK2q3SacTgGRd6KdeY9rhRMFmHjLUSUGsJQJDCS3o2nejQs7a7Yx47A7T4bGxS",
  "key28": "5RVCEvErTFXdaza3Wgrdzn25asnoeC6555mjTFBJcJ3URUHqaywSHhBzp8tdRsfYFQdtgFCbsassweqRVgrkdEaK",
  "key29": "5PJk5bRsBUesrs5sUNWFH9kS5zRAP6ky5TTZFAk5PnCdwTSexhdoCUXzbj2HYSJwG3TsZBSLeC9st3Xge8Ps76xC",
  "key30": "44mvWECFtUJkpLRv2cZP1Mx9wfV1eDro8fFjMq3o1M37J2tX62USw4RrmCSbSuHNbfKn7ddwhc6EG5Va89rjqnAc",
  "key31": "zudmeoMSCmGxcumhDoKmrkvHrA6bqxfYcsowmHf2E5hW9ZrhvCNmzevcvZkG7gDQSxtmG11H69NJNGzxvX91KNU",
  "key32": "68MS7zaLiTHMJxF29uB39PEvgjRxibnFZS7H1VWqx2E7dKbdBbcXnuiThLi7NhnFQgVXj8CKZmhFUdUrpujyyu1",
  "key33": "ZqP6KkmXGgv7boKFhjtZmnzCChdRTJ3Y5tMfXhogBJ2qGWBMrf9z5KD79AGNwkdb5yhPcFRNTNo1wYoNHNSDY73",
  "key34": "QHNHjq8w51xZVAK9H3i9KFrRn5MhvGvtyXX8NGyGFKYTJN6u7tVC8pZMsp4E3pfCStHrGQuTUQByMeu8CLBGXXY",
  "key35": "5iTu2c8JMGs5ig6batGnww7n6F7xHEVvrnLCtkRe7Z2xQRoUrd9VXBApc2kawAhuXHfkfJMaS6YZeYQak1qFv1Zv",
  "key36": "5HgZSXXakkT9LX6bszduBgK5VPpepQFB2ko6ZNZs749du8zE9F1HyCFdPP8UDBHEGhb2MefH81R4GYy7ktVQrhzp",
  "key37": "5viGhYa9abhryt2HSrseX91VfaJ2u5MuEf4KStW9ezQGdZgDgr2N9pd6TUYv876fr4ruNPXXD2dVuzEtAon4XfG3",
  "key38": "P6mZDLCVkXZDATn5RYQvC97C6HRfjdQ4uvnwHUqUVgjw2yaBXKBh8H6vdqy6zExaUxjAHbRhbfQb44TVBPWYpxn",
  "key39": "54GRxvmE5jSEk1aLvB9QG2n9dqdSa8dXLiu1GV88LnVu5or9ERxXhAXwJAJSZ8VTFnLJFGzo5zopacijQyMG6Z1d",
  "key40": "2zAKpkDDbxEfG6tqNoJ79eaUnBkYPoUKdrgnwfmbzaSi8xcoL1aSbv7Fhs6VfXaPrmdE8gMQuP2iRiKmf8RSLA2G",
  "key41": "2str1Nj2AzWbECyfJcwbXrLn81icTjkypXzFAMVf6C2meeW7GMkPQLpzvzbyJQP56mVfX1Rs5Po64JbLactXuEoD",
  "key42": "U2HFYxWVcAMEnMkXk2FaXfE1wpNbqKHVvUr8JRTnN2qM3EJEgHrrjDoRzh5XUjLHqnScxMbzKWYgm7kmcpuN4TQ",
  "key43": "4MZVujuXX38tJTod1EcZseipr8x5nMKsPVsfwfhrqNHdsETTjs1JqXWxzyETQuTNFc8YvMzPKRZrwP5TJb4LE8y5",
  "key44": "4f5b4vJfaouVkyGKNN1T3NwVG795Kv1YQSiZ9KE8RVkqhvxpstBieg7Ls71PXRv86txV99mmZiUcZec9UmZCTjai",
  "key45": "A1gLq5nwj4phwfgdRD5LvJsLAobMVFecDdmiEwdqe2CuZqprhV8mE52znJuQQ73yjLQaDDMtJEygbGw7zQi5DCA",
  "key46": "5zx5nrqhUbz4QBtyhuzsoqkasM4UwRZvySe2bLG6nWw19ww8YPW6KaKX84sEkLKDsvWoPZ9fXW95t2f4GREwefYX",
  "key47": "5RSw9GJGo6JrevoQsQaH96aEqetpEPN4oqsWYPXnMNWhXayn2vxBAK7RCQfjPAarpaB278fWbXyDa2UCxkJqGjL3",
  "key48": "fEkCEjDK5CxTuRgGZ1ugvDprAtL5S7Pao81PqVidmbVkeZn7GRC1zNRN73rx5FVDuQZv2gEN7XjvDFqQGY3T8EU"
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
