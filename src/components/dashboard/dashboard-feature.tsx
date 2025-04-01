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
    "2NxuXUXZQCkhfhCZeUWaG1U8duSHjVGRoV8B8SfDxX4qhC7cTyDETShwuY8rXx1Z5WvBs84Aizx71SLx8Dxqhv2i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4WYZa6cLX3TNF9bUzkG28TqKXFgGtcx2HNoQB2ZHG6S4Ukssq63tCeoKA11rAqiAdVdQTbB2kRRvDrxpVxLTpJ",
  "key1": "bZhddmCqGuAC9uMWBbxLzaWEqrZz9KpWPCcQD4wQZF2PFcoy9dWXfJZxN8Cubm3MCrxdiRVK2PAYhjaJF4VzKB9",
  "key2": "EEi8i7DueD9Gacc8xU6UsEHsUmHdyq8x92kX8ixQ36eMwAvUSrW4rKcG64LSLBnJMMcir4NUxR28WADHtiEc1KM",
  "key3": "4wxxEe3tRLUXjXFDyWEGGoxMqzcc3bJuZZhM7u1wTA5L58cyeq891NF7n7RsHxU4nyngvb6cnfygaupgWz4v692j",
  "key4": "4AYLtEGwPnwAFZDQ4KnKxNxMkWJRr2eRWnmkociK3BDxXR3qntEcP6sEUcN4Vng8cGSunq264HjS7XDeKE7ZRZkT",
  "key5": "3kggXSdF4azs2TK83mTXp7pGhKiRBhSvt6qauwQRnb1Y1X6njhxXWCjnMEoyKPX13cneF1o39FUGLShVcvrQEoi2",
  "key6": "4KYYmPyknEXUwUCQbf1gBk73XqjXbffz7vEm8NdmfFarw4Gi4vVmi21ZiWNfyNsrRD7yNiXDyMGy7jh1SErEJuDV",
  "key7": "53TKX4NURfTA686jRa3TXm8sYZToVvFz8SdrTKwzdfgXzRfKbNZKbEeT9xVD9z8DrTXLSk9DeKzBGR2LGmL5ggsK",
  "key8": "4fzfygdzR35URScJEFMinwDzGzsM3DgPjnk1Z6UZE74JexYVapL8kFsyHyk9JqiegugBkCbr6khw5hDcc9vL2Ecd",
  "key9": "y8XYLp2kCgdS9qcJi58iTQqEK9VpNWGHZuKAqWp2skHczUfgAJB2Yb4uhV2fjuF6yJqkv29R4duASdU85gdGZFx",
  "key10": "2vKCG1hhnFAYES1JmQk1ghN664kKDu3bzeXu5AwQ5JAU1HEgxKepm8utAJXk5qnicXqG3Zop4SoqFyRUHTcvdXrQ",
  "key11": "4cjZh9vh9vaP1mtestjn4tCJT23D8JxRqhkiMiKDZh8Q4A97G7MdJtig4KioeLXidSDWdPizaxRYXBr5cuSsSyfD",
  "key12": "4i4jm7KwtbjRADyQyJ6SiKfpmUbGyW77VA7ZHJERWLU1uoYPZ93eBbGicRaoHGo9eWghdZambq6p2x2vvJDeh9SF",
  "key13": "5ZMoXVyufazEN4simgoojj9ngzNS6j5eWJzPJXYBF3hRjUyG9gj9PP6WAvc8SfCuimArZNVs9jWGu4aivY5PZGzu",
  "key14": "2K597WfcCLmSBs3xSdCv6DPZLvu6nQDqEvgYscr8BF9fX1AAANa4c9VMbswrsCF8UVVDMLcQux7JJYgwhCZCCK1X",
  "key15": "3eHPhgVkC4HZCaDMELs2CM2fM7fJaLNNjEcUdZwo2V5tzaVPwGiY7AFkpdWQfZBsXy4TJKhrYPri3h1w9Mt5b4qT",
  "key16": "2ouDeSGuQvjWGHhiSB6N8YfcFXDs1XDUYc7F6Qr98ovQXj7MpK6Dz85mEBWdkpsR9VebCnR47VwhLnVjLsRoVgfo",
  "key17": "6qCyiunjj5S9ScYXtg82EW4sUKmFR9vSfdQCAKXcpYazESWBGC9pojUYcirWFbk78yNk1DFn1YWx29oXwCL6zFD",
  "key18": "5hEsC4ssxv9WNFrDGCmmSJ6RLLQSqL5p4C7NwnPbFefRnx8cxgpdTGdmHBP9nJnYCWJDVpHvLCuXW7YM1DBPGK8H",
  "key19": "5GmH4pqRWJxfGZL1nzR6U9tnTVFpC2mGWsXkFdrZVLhTtmWY8jMDa47sVdXHm2eocDD3Yrk8nvfN9qswjEBLa966",
  "key20": "B8RDqd29bCJ4fmLZ8dT9UxdZB6uzGDFnReAPmgfFass9ufoP4wpNcNbQHyRadg8ntDoUG1wDf5MJCcBr3crQHS3",
  "key21": "4QNWAfsPcRdV5KUJ5SevB6hJ2ExztRQvp4npB5NuVcW9hidoYbb6UUnvRyYCfWzpwu1VtTmHcXQ6pmMnVuAnUxx4",
  "key22": "5E5LhUBmMGpUSwf5MTPWMq1KhX3FvGBk3iSBVGtXAk8YFuBfGi1BQctfK1UfdErjApEGzz8ELpQXqKD7HA4SAVU8",
  "key23": "47rRc36vXq9W3PgswXBgdyFRnr4YWu9JdeLGp19mdoQLJ7C1jaEWzTprM4izSNJi1iWCofxVFi44o1ULy1CyJiGa",
  "key24": "JV2kBSptMhADKqi7vxC1Ej84oz1fL7y8zPyX1R9AxVg98GfeNPiv8Lh3A9NSWNPzGwJQCMXBUfxbQxmNEdqrCvq",
  "key25": "2ckbn24f5xV8RLj4XLh11dYyhMcGvhHr6RNJWumyaABz9zrh1sCrznjNGiog1rkJU2TYNraJ4G846vvCabhhjAv6",
  "key26": "4mDvDP7xtNPdeNwEPLMPye69AcsCeZXos1VzMMGMTXcCyKrWScUohC5EsrGmv1nzPLw5h8hD4MtRVYDh3mybAByo",
  "key27": "2PXn9uWxq5WxcaeZNd1XebG382z7TLSBDTC493ihf6XAAMtvkgGVk2NdU849HkUWyt5TxLKc9BuK1RB5FzmTcLzX",
  "key28": "3GFc1ZgdFZ1LUPC8Lvo1MfXJNNHEBfiBfMzQFgwrNm1nwH4J7aYCTxpgSK1gUWtmYikMTWdX6vDN9nasS5UZugaK",
  "key29": "3wJ1X6LiFFzFDCr69FqJ9dFhxCGnfqfK3bmM5NmBw8D4FahtXsSoouRCNWY9NwoCH8HyXGKMi4Udk4uYZdmV6Y4x",
  "key30": "2vLqagegfo7yApotTU1uT4gh1zyko3qJzLnZu6tdmfcNinqoPEJG1KAo2184sKvX8SqvpdnP4qW2U6V1m6uokMCS",
  "key31": "4UpzKZbQ5iRtdHc4arg9bJKvmqQHK76ZUY1aPm8fFyMwJnJSXr3VeCPvMMvTn6aJhvYGUwtGDpLgN4Q2y4kfGFzs",
  "key32": "5YnrnUEUdhrQPKchTAr96AoWxZ9iWUyRxDg8oCTv2qHLetXvrxziNpGqvso9SwLkZxvD669m4syQwhqmJeku1jSx",
  "key33": "4u1tNwaxvkBrzZui14A5s1eaMnvQX7Dk2bCYG9i1D19UdGMF2BDoZTooBJERmMpJ1THzcMqUxS2Z6wKv8Z8FhBW",
  "key34": "4grEbVt3C2JsPrWBtfZXd38cWR51j4oQpxVZQ2oH9wWB1sASrNzzeRd8G5P3ADBTpfvAvo536xB7iMeGf4EbXxk4",
  "key35": "4d4qe1R11va6XWRcQxaJ2Pv3rUjMCQe7wr1MaVGZY1emwEuBQZDubBWWmVe3peHrg9EnJ2MB9a15AoUkq784F1jB",
  "key36": "Ry5YF8ZkfdmBWFzsC79nEvY1UemBaAmQcRDqpV64dLbbWt3UXjP8KkhtuLCCEkqwBPb4kT8suXehisUgZdtLKBv",
  "key37": "4b3emEi3S5FX8Gfb2eUs9RTHu5kXKvQ7hGBxi7KR76h4tbhz9ibGhbf2hP7rZzG6UTmLrRfHRdJ1xL7gZKk6Xqs5",
  "key38": "2QmRXJbE7yGMbjJ2LyAPq77q1PEZhDTgAZeV4ht6GBXcZTvgoN27nUf9rTzTHthJhdj1QACTYPs3G6vsyxGh8mdY",
  "key39": "2WfLhfiXKuBNPBY1V73UyM589LcJLcA3si2fwxgXBJw9RiS7UEBVokpmC1aQSHjQdJFUoR3hc6hyVEEmoBUSG4e",
  "key40": "2dyiRFu66y6XsUUPcNnaJDoNtnyhAPWhQExoocvJSRXMdYkah83A9KCY1EEqSLMnZLJxxPoy1jz1bgMbFmvJ2aEj",
  "key41": "uLvZZEDTNw382oCJd5YMX1QHX9dtLm4CMJ61f5rxkYtxf4q7dyenEqv5jJqL6bNGY3VuSuTUwVYCwrkickf3H9F",
  "key42": "5MCzi9QsEgqEPLjw1kZ84gB1QMXK6RcYURr4sLcyGnxLmucm3CvZvnLw65LNjK8EqKfSLZk44aG6jheouKizsiCN",
  "key43": "HDC8hSgaDiQwhTWPZ1rQMYkocutBXjy8DZKh1FPEhwQVN2hBU4CXQs8sYujmV8TdxVkxyQQLXvd2yxgDQcon9Ne",
  "key44": "49ppUkmrae4qGLEacRNtGjJiCopCBcmijnCN3fTEMCLzsw1j2No8e5zYVwbSY62DBwwYFPKSq49gb11WjH6riRBM",
  "key45": "4FgFmPTbsG4dNLmCmd3PDgbTHYjcegP3QKHN7kz3Pxk4833rnmjxWFxDbZi6GAVjj4CK5hKiSDUEPPzsiKTv4gf3",
  "key46": "4auyaDnwssM9VRSd7e7Z9ZeCwVF57CFLC1qffi5pBi7Nn4NzvT1ByaZD92VRRyWvAsHRfxoLoqsEPd8ioEQULGHW",
  "key47": "5zDKdwaeiZE9LSwtSPmhyNaKE99kWdQD3GkyWE5DeB2ModFE4KkUuNrmWpds7YE3PgGx9BACbr7PjF8hZ9q8GJDv",
  "key48": "nLdXAfn5awEHwK3odAdftXmiqnatsQ6ckkz5yWQRPuQud2cdZX5PCaaAVs1judsxcT5ZMAkk4U5NdBqokLcigi6",
  "key49": "2NTKiMDBPbfY89HYmgj4eKFKeuPyWYwRVUUTB5uHdhExHC9cw7YoSVa2vMC8zCe3SCUastmQqR6bddU8SHe4Q2bu"
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
