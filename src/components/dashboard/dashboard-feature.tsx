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
    "54MNQsny1h3RAfkzdhiAN8R3qjLSi9CEuZzGuLGtqWdFkF6qyyuhjeXcSC4Lvsbvob7mStgAYD7qdmtNn817Qvcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tdeZABMzR33Wb8ifsupbhu87tPQxNiumenJSR229rm9ccFgCr7ZzRBETUiF65m2oxnwCuRARa9u2cVUBkuNKkUq",
  "key1": "2G5XguAcznqvX5mcuTibseoh6FgsrpvnVTeycz5bpTxAwkFLLqFg1sV2nENSS527cuQtW9GhnsrYzAgBHDJMM7DJ",
  "key2": "2PD2qK43ciEhgbDT2HGgGF8e7vKBJDVRZphEWWPpg3QLBG1xdj5mbFkrqwRrQB4Fmw8AyNa6htijb9w7UrEA8FUr",
  "key3": "4uay2bS6MnTeG9uXX2h8yeahkNwe9w8gicGKZy2BTCsw5k55TnSZjYFpA4U1rxwkNq6fu2v1Y6YKey6YV1WgmmSA",
  "key4": "22J3kwqjmuWdv6vo4UhB59vuu8j8FCjb8MZ621Y6VLFaRLofH3nNhpXLPymKaPUnq6sgzDce5LpfbvzUu2X1bf2L",
  "key5": "jxhVpsi6AiNGLTMJLRSLinPE49Jn6C3B7UET9NpK2yqDBgUsiBzBTW6dGPnPeMq5r5qQ1C757naMABzR1ngp2MV",
  "key6": "38B359yzetrYT922Q7Bfm2iSA25GxmdFWShxShj7Vn6uHhVxjh144rwpuGXmZ2Wh2Vx6yFrh8HJjrZE7XkuhNhhX",
  "key7": "62EGViFfMLUYBD2zPB4A6p83oUrP9kfA8ithN8sNb9hVckjGa64eT5Pxj3r9j2ZbrvWy6K14iP5mHrmAcLPetSBP",
  "key8": "3nj9uCoKhhd9Rx2RWXrvR3UB8QduUKBh7HXMCCAaKEtrC9vK78gCrL21njMw6FjJpbzbKnwkDjoXSCLmLjPtg2Xq",
  "key9": "3JD3vntD6UvA99eDRk7yBJ63eoqycP7ZcpveqAXoz7pyjVyj93VUF5ixh1h6cg4FdracYFBXBQys4uZDx2TPAQNP",
  "key10": "424ApnK5qbMTGRMTc5tCM2AstQRdJBTMSmqVtoCauPZNNzqfeU79Jw6dz2DXZMLFLeqNibcZXovsgykMXKjz87JX",
  "key11": "hU2Nn5cbxL1ZSrRPeSRffDG6LaKmWvDtseg6jgV7d8Y3VpYTjPCqPaXry5e9iYU3bbBBsnybp835bg59jPALqmY",
  "key12": "65pjapZKKvtj7M3KdZo2HzF7nStKbkiybigNP5gNBAFuyp7qbwmTmGPzaysGrzmRncWuga8cmDX65tX5uoWLhMty",
  "key13": "5ypirJ3qbMma4xFmZ4CFJDvR7MAeqh6nVByPuJkRw4cpGLJWdGZBHKchuFfZoV8cPVHCNjGaWRL9GbzZqUdM9HC6",
  "key14": "2p31GUeJj8uAJcAGF4FidXzRznzkVbrvzUdJC3nvFxDEvEHEcV1VS86u35Y9WyR2Pzg4GLYmsezABKhVwjAgkHUE",
  "key15": "4H7n124TSqhpcH75NLTeb6yLxANCpyyVVm5MmrkSUuP4FJFethKBVacZsNddDTJZT9rsZhF81UfVmWSsnYzqfgfJ",
  "key16": "3jbduc59vw2xXuD6cpdPA32Xy9gZJnEDfCB8g1rf5J1EU69riLEka5q1NmhVqipWtyXMX8DKEACkyMDnqvhbFWLZ",
  "key17": "2qdyN4kjwFBhZjhRvkgAYxYQZQHKZNBFkVdpVpUamyUnbPr3LG9bKHBft3PHwDom65FCaLtSuK2eKzvyuJquUo7T",
  "key18": "2aytr9Rdbma2jiqixLSVtFGy46on4BqXohPDYnNXmTtNdoc9JqtJTqsfyLGsuGKCzHLchaTZXwjyyA6tKHNgMm5i",
  "key19": "24BBQT3xajxCTjvQmuhiX67qD1otP7YBG4aqa91VEdnR7KDRSLMw5EoCEZuJtEVsw9bPPeZUn7gxT1F4YXijjYRi",
  "key20": "5pd4sGtzK7Hebk3p8UEUTnRZZwc7FSRDgwYaAxYT6mtpMTZhcqxVVZJpxjPd6kMNVcq7RiQBXE7QZwGqX2Amy8Gp",
  "key21": "2PDPF2QH1EVzc94mhEERjpNFUnZvZwTxPrcJCB21z4gr6mhaX6FK1HaRNMo6zWRPkKhvtCArLZtVSmLtDAanVQNc",
  "key22": "5MTXsPVqEmY7oPGoqvVN4W2MsCVwcJTP3LCyAzFftmDsfMnLRsR1ePRCjT2rtKD5UpQL4QpXKmqEzfW15akKVugJ",
  "key23": "kuecWN77KFe1tKTV4qB6r6DbsqY2RzTqxn4gwhsQT9jgKB1x5CRn22hgnP8aWbWYUyduX7cSJHQBQ8wFffJR1J7",
  "key24": "5Sf6cma24RrJrTEjkxyUGLHxJ2vfdZbmySFf11EuRt7Mpp4FS1EzPmJEeunVZwnGo7ZhjCotgD9o8aBdKD7ma4sj",
  "key25": "5WSSHpd2A87TtUV7h7CK5jdf7X6xPEyQNbpeWPAKAW9LJuSZbmDHkUhRvUZwAmYzi3gkhoLRDdQYuFRDYaERZF5j",
  "key26": "3RQvRQrfKgsSb9cE2EPrjX6W3zDpsc7ykW7jxFAZnB4rXCtveVBvKt3buDT3Nv8xuqNzcHJTfFk7SuiuAk7oqXS1",
  "key27": "2jyfrvP94i5T56Ejh5MxjFamuG3oGsx7UqJPxy7spFVjQ3MfWnjH83htfh1Ngf3ymQecgxVZHtGzmhbBqqcqXkSm",
  "key28": "259VAtQ99V2R53C2BaxUyCjCZABAXCZBrMDoRfhPFPz1By3vsRt1HybLCQ5CA9p7sX13S5mkzBAming69wB344RY",
  "key29": "4XNwaXNPsuM3nY5vEEBYjoKTYaoPfazgf5pLfYMyWC7tmMXaY5Km7fAZjDDKbFivNCabnxDhZyH6XCQVWsDNZneZ",
  "key30": "NE2msmGNj8xY86WCwDbVDRQ24A5DuG5PtkV4SPGfftBVXZLrytE7yKjpi4yZKFXfPsnqTbuFYBf9QmxtkjkZyQx",
  "key31": "3kCb6EsnBKkniR9Z5B51EJiVjTJodiSQFKh3wLvSCmhxodaBvLoPohVYysVRuojTDszF9WU5CJqFY3H83mrhDbEX",
  "key32": "31h6BZFwW7JkKXJ79tdttUeRsGpUkhvnfMoycJ6v6Jy9njNZ8TrREQb2JLHebgM3xX21gcMt7FXbnULYxtBh2kU8",
  "key33": "3Ax33mK1gWA6npX915ckGEgZabVELrrgigc9v9Ve6LxQhqiCXrKRm1EgGLXXToFbe4EuhbVFqHZLEeoATtVEgmPh",
  "key34": "4QQenjxdPsJUf88cM5RBbs8XR4VuZCe341yEUfNQge8myabF33Dw4QwkoDddnx5ZBvRfVdvMuoEvGzivi4Ruxscr",
  "key35": "3cgaEAAa9xsj12W8kXmj8bF4n344x3BYMLPtCkNGPREJYKA57yWjQHAkxK6wC3RoReuh1wRpM1TWubD7Vc5dA7aw",
  "key36": "29cW9bsTrAvxYv6X8Eoq7AjEA1CtorM3Lpznb2VdPoGoeQejTi2fiSGESGur9kRZyGKvqPsGBGJviPTGDcv4L75U",
  "key37": "1cLLBtduoBVZWKwY5DPLyLKCdPD92QXTWHBYfVWGVSsJonYfdL6aJuWDH2WTvsMabwpovYx2VefaSSjyFD8jYxn",
  "key38": "zUDRZ78bU6MWxPSTmPKEzWxQWYfK2BjioMB3juYQoXP1BTQq4a3g6dCPzoUnnHTb9uwuppG3MLsvsuYR9YRk1Q4",
  "key39": "32LJxjW24PEF9ADFKGJLQ71KqpnfaksiGrrvq1JySoTc6HJgmNrjN7SUG69h5LTNeSU4ALbjjH1gWehBEuqDpypm",
  "key40": "5bg3JKux4AmBtaVEunwb7gSAecHuY4ZrxLeXS5qra3LXUoMjevwz1ebw88kjE9kbmQofMaxGnojkYkTHdukFgyTW",
  "key41": "3NZqHpfwMixLVGFfDgKCR995xxQfQuiGNNotzBZ6griFsceXZ5uz4NyNQ2MrdydW1UzfD8S1gwFg2wQoaR7Hn5kT",
  "key42": "3qvwaj6wSwkYyfeRp8HoApXwpBXw8qxKuKCFCEkqGBaDM49Ga2Vv4D5idNichgVeeoTNYrzu43NrCamZ4vFotNFm",
  "key43": "RDiAVQEsMN5vktvRrwgGghKx9pjJR7J3MP2DZyc2C2CbcUv3o6xrBgo7kzrrPApLbfekSTxYaggN59mPAJUbetp",
  "key44": "3RR4wFgjQfwY9N3PXXqyyTmokVHiXFssxqR3MMyebsGbjnDshQoTrsP1GBkqoKynDgQiNa9e6XfHv4g9JBZyz8mP",
  "key45": "5LuKfTLuF1svXsLxRQ1g17y9JfgzhqusdtNWFiXScW6mKRasQ1k1hMEZW85p9gvthKhH5KzpPajX4qVRVdUTr2nT",
  "key46": "VBCFerrChNBbedEEyVFiao19UjLWGtK8MzXCGgi3ZwMmAaZfhygHBTaCR5LUMUNmt426k7ux14nq6Gnp4x7ia66",
  "key47": "3vccG2iufcKgAeDQijFaBuvd5fDmAKWtqicMd4QeEXJ2vUmhSoddp7QMs1beTaoXeouQL6cxEjx4w24aaQ9waTYh",
  "key48": "4M8EAZgLECQMThZroaAGxSKUV4k3qit64z5Q4XLQVvPNc4ftj9cMG3YkmoDS1XgMDMpQp4P4Ht32HycszrW5z7uR",
  "key49": "2XikDQvi2XKDoaWvpHdkfpxTKTt8StSKHtw3wuin3GGjSSBEYYFHFN6oau1zh8WWzCcza7EzMZQ2k2u18J1pyGLy"
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
