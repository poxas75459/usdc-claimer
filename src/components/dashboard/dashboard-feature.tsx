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
    "4SYNyzVdTTWg5ZSq7JVkBwv8uq2G5jf9SyiGigFDpdGv61yXj4hsh6bz3ccg1zAda72kCbnvpty1YQaHpzWkE8ec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WvfL81NRMdwr9eoRyzQxPzXg2TYnuyyaHYVnXQnDE8cuvwJJpuXaTCCcYPEVRPqB4NEgGzkYW5wQ93NnpB5ufxq",
  "key1": "4CfwvTLYqpcExTRUGNkCtLdMnRpFdA5EeTRFTmMoomDWv1vzeKHrKAbYKzARyZ89u8YLHp1kAxLk1EXnDyHNLVmf",
  "key2": "2gUDdqjzBVoMPu8UEVVwS9JPLbS9XcCAruPXRcGzHDQZPuQw2d73tWkejVHicTXybrqLbvtcjai328hEEmPkMKsx",
  "key3": "2PNHFexTyDbquN1oW15SBc8YQQNk5TT36BNTu8zKNkoiA4YSWrKD9YPumzohg71z2HHrSGzzkzRDUfEM1a42Wc1F",
  "key4": "3WnJvBxNy3tK45McuSgKXhSY5rk1YzWx6PSjLtP7tyX6xFfgbbiviTPedG7DeJHGKxv33Nu2an8C3a97Pp9Kofny",
  "key5": "9xMVtgC7SevjPELJTg7UF99vJcMXbap2EXvJem46Kqgzvjh9f5H8mbfGswF5auXjnDV4EJdFHL5ho8ptUzxtJ7e",
  "key6": "53Zy9zRFiFLC4Heyc8VbHSpVZ9xGXbPYzRWmPwc6pFpmDVb9j2yQKxpY7cbFZCLk6b7SqmCgasYjPP3LAR4tPSki",
  "key7": "4UJ8vH2bJ6SUNwv8WLFF8LWrs1JqzxBjZqRsNtxKk5AgqCJLdJ9uXS5gCwCHWsght8vfcgK4hLLbCTEAx9hVzZSj",
  "key8": "3m2N3C5hm8UfoqUg9fjjBVGhcTrqmmSPPkNaVBywn2npK4JjU5vrZhPmZEeGXy6tAaSQjQ8Y9fiqZthCNygP99pY",
  "key9": "2MAEymx1uuc7jDPQEf863K9rz7TLLx3mjhEPY57EaFCKny8QojKtKYe9RaoiEcSTyQvBewNnksjSrhK8ErsXexUF",
  "key10": "b7FfLwtv9EU9HV6iZsFPNgijvzrGeRzhhZmdgscQxXD5zW6KCaPqaLoGtGrY8jKSohv4Ya3RLdE8d28o5BodJmL",
  "key11": "5RoNUjXVg2nicyc94cSQB1Fr415cUZ9h8YBhA6XHLZvThU7Jw5Suz72uf57znL1UzAXSu8RGbDDTpb1vJzc7buqG",
  "key12": "bx3r1pjrqSw8tK9yyPJMeQo7vqCJY7CLX6r71AFZwXoqUUGVvZBbTx8bXJ7v6ccTuMdD2o84mdpeEXoYM5g8Hwa",
  "key13": "yXGCVKftfwuPF3rCk975bCz8hHhpUjVqwRXNRYuJysSGeTEBWTWSE5nvivx6BR7fxNnvBoEFA5AT3Yi3tzbFChA",
  "key14": "QJNRhRqr7BV7TqFLmQjAK8Y7LYvjb2E5YFPzDzCwZnMLeJw3ihC2QRUK6imgwwbzoDwgDoVJJAMcgDyF21eqqYz",
  "key15": "29mxqCzvqe9f16vkYtodwm1ibftMqwWkHwCg5UV7sSYSTGATyHGpYwBfpKEAj56CZz3tmsRseimhthbyUJaJyv4K",
  "key16": "4f3EJ7eatphpMTswmV2LtXtio2da1d3bW6H2DsyTbdjWY7f3efwza1czttL6NiHQMG3vMt1LkWKv1aGqAHnMj148",
  "key17": "AXNo4aFjcfeCLCDTS88d8SpuTS1JYfhWv5jhqBhNMecQmP56ufCTGNFaFvqqQcAk5ZhVt9FEY1QS4NYiYZb1HBP",
  "key18": "2w9AKcBVwKMuZHkAHj7Nt3bRHfytGB6W9XKWnPA6ZTws63URUgnPbx3nepumKvBeg8hLLHkvvfPsPoDvAin4TMG9",
  "key19": "5yFdeUsRMLBTYmMdTEWXbYDZYH2A7TqfRPDNugeKuR5JP3ZdJCoCum49XCZycUSD5GqauyiwGnV2TLXy8uzEYe6H",
  "key20": "32spwhaKZtNifaGCXSmxBXVdMBAKeUSbcwd6MSiUyPra8NubRN82Np8Pc4Nz4zXhyKRiTh9zeH5YGRpyvCM3rUhm",
  "key21": "5cubDoyVoz7iAg7u9GHeQ7JoA7EWLB4zFvu3VfTXRvBqcNkGw3jyUd8VJcSSoQn2WF2D1s4gpjYCiaD5GCi4quNr",
  "key22": "3GJJiVqYNiqLThdzJHN4YcND1gAYN3gz11KYrL4o4suQ7Kf2D5KpfrDPoHqAdoBz4b95mvkN9tjz45557Va3tSXd",
  "key23": "3cYXQjriuy75mccRccoZNYcxoFcJTHXGfqozPCHvSk41qHvb2GKRjKBHEdSvcJRprMLYcxr3iT4oYsrGCDaCbn1S",
  "key24": "3ogefRtkYifcfReT3H5PQ5seaHvJk8d6iLWPqpRHGDsG7XXroV49VemrFreH4uxSYU6HSXM14HdD3RUiEWUxyZvc",
  "key25": "5PC97LsmjjvkKAHHwcXYVUX16PauV5jqX7yA44knDxLKvBRUZj5TRVkRoy5tJUqZvRFJknG4No5ZDGs51pTE8M37",
  "key26": "4dq8Sj8ngomnuys6zWhogZcqF9UkLvTWDbZvyp4dMX5z2wABcQstY6g8o8f73QjQB51nycTaLaeVKrm89rBg5Zpv",
  "key27": "3mD4eGVWndcwQyEaFW3ELMzYYzjCHqLuLxcH9TVVntgtx6t6xxkEmPd7zM3iFX4t1XtCLyS3dVX7QoHaPePaMXQX",
  "key28": "2PzEoaevmTEyhxJq6a61vH5TUqtzsPjqmanPkn9628K1avwRoLUvPYiHy3MpSArw75q3wQyApimqC7mACwRxPaNm",
  "key29": "2n5SPhK6mCNaspZndJkxgMzq5L9QGas8oQsgbKDgYdZ8UYZApccLi2Lxpndhudt6NanmDHJy9n9y3zUv5wXmRjoT",
  "key30": "3KiEzAxnYtSkjKowzqEZCdTZKBjVVafx9DDEeH4r5RqLSXaYA9csu7hz3jxh8qfiq9JdjZ76hcPfkSBnbvoRQ27i",
  "key31": "429zHWkXuC8HSVvDbBpFWUUmHZEK5rpPNQojC2vhev7bD1tNxn948oPEKZz6Y2TS2SheeEbbUiorZyEd3s2233g8",
  "key32": "5kKAMU6CgAjYj8EypF2GmuPxSUJCtXs9QQgW6bwkZzQRKHoi1JZzeLRTvD8bPrvUbyMZmxX1P2GcsDWcrZkLUXVS",
  "key33": "2TbXZy3a4zCz8aRhWuGwqVJhRYsXBf3uRTAaw2UZ1Wi31nUX5wZzjKK2sLgDNTFkvAMnfMzGZwXHT58eVtVGj14s",
  "key34": "TEuAU8xz2fDZ9kov2Zm4Hut67FaieRRzberUpD4oVSvGh1y4Zgno3egHttg1fqTk1Xzj1WGKaZecNrFVrE1nYsE",
  "key35": "4u7jgfxEZTZMeYExgmNkkYVeoztBNtgyrEPy2PddyPPLvXjfuoFji2gDgfUySteDkstrW2dxAzkUJvgoLbqUKNuN",
  "key36": "3agNJAfEsrGeGAuYcB2XZM1T5F9seibhGFUDD2cupY3wL5ZFV3nhdU5A9nGqxVYCHMN2HHPPvpfSEqiprrpKbyEm",
  "key37": "3q5897KK6oARVRjhSVSuN7WGs3FR2mXtykLcSnzt3tekKooAHR5JMQ8VVRdboC5zKuVmHDFZCr3WLRAvaGWxSxs",
  "key38": "4fLeuDpztz2f9Ld9M2dFjDUWsdynPtyMzy5MNvZHtQ1Jy7bRUag3gMJUTNyi27XJBAhZ97EsnLVxkogs8BBorPKf",
  "key39": "66hHQkxb89dm1VmeLJhXvrKhC8uVmL5GHi3uWppYWoL9WwZnXKtE8CTXaSqgnuhiBZyWeqh7RcrbAAyeaHDKXYLW",
  "key40": "59hsonrZc1Ks5gkWW7AAUUYfttCn5Zgth8sDDmsKBb34XosNMkizYs6dUugxUW5ppFvvwdh7vhtgMFU1Pve2iHcw",
  "key41": "hDEDV4xU1MzQikyho5QTbT4zVGNaGvF3bTv6XPuMFEQRNB8HDWygcem5jL1KoFuTNtYxm8iUSoSz4xRYqZcFjeA",
  "key42": "GVHdGwtCFjbV5MtH1fjdKiV3ESepmZk7dN8riXa4kGpeVhc3fe51cnzjDdxBvp5vfXCiU3ggCEr9iRYW8fFoC4T",
  "key43": "3UGR5RCeAUQaZyWoR8x6D5X1h6GsqfjgwtSsZDKUDYZUhc7Rew6w1GNM5FzcagC14i5e6MzFS7HoyMBBGCBh9mX6",
  "key44": "mprHebkXc2ZJN9JNbhT3QzwXhzhrGayyvBRiZNmy8bgHEGqYRzxk8T46apmfH5kGLUdWqbMCBnUDLKam67zNXk1"
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
