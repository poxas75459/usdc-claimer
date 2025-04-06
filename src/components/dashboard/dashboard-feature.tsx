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
    "4d1CTuAVXZbgiLvA8jgwtdQpE5UezrPegCQs8Bz2pwhJb5D34aR6xVF4vYKaP3ixrP9DmJJYmontjoK5n9TtxKCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ghMbxREqnN5rJo9u5qTcXahaVVbAexNM9XRHfqxNAEZdDUwofKa1FVyr9mbdrjT824UtEJMawYzzVJSJHrJ4UD",
  "key1": "4mYTmKj5rjr1ty7FD2QKcfuoRoWH8yB3dZmL9UbuB3LSybQFRNBWy9Yh5gMJbEooxDJAHXEjWVGS8WvurpT4H8Km",
  "key2": "3sywuroewwYPN8YVKD6tcnUfpdqLE3rbrJZPzeWQpU5fyWT1x88m43ouX9zmByDKFfLgp2swXh8NjR3F1BP1Y4Gc",
  "key3": "5417TLycL68DVykU23qnwp6yBtQuTzkovnF3nbJSWqYme1e2JAkhG9eCJAsaBHnXATAJA3HbwGUcwtMqkW3PBiLY",
  "key4": "pj5ftcbgLsjhcKGJpCtBWvU6CTFXb4i1BjDn1wju3ST42QsE4VtFZqhjXguSfD49s88jRu187DaXKQdsbzMXcqx",
  "key5": "3H9hutzK6jYppw2rwDTEbC8PCwhjDZ3qzn4kF9Q4psdnV5aHozZ2CdLuaUSivLpToh6hJaFasUPsMcrwi6yugBD7",
  "key6": "3NUZYJRDkYzSt9EReqm7cGoCK75SShqQsJMcbWToNzLiaSrXwpXukhuzf7wbRc1v5DtbfUmM1WvBuYN6x64BUHc6",
  "key7": "3TQTHQFRGmkVnsi3cWj4S5QXfsTNkEMTmGNvpmwJqGUojyctCQCLFRaj2e2LfG2Xf3GXzYk4NNpcjxpHZiKstdCG",
  "key8": "3QFgn2wVik3bgNWsoXPAbKcuDgq5d54YdoEERaPED8dbdtNtRJ2NVkM5U6S6rmz4UNckJWhnu4cJ3iS4fGPhWeFk",
  "key9": "2CopDWLeZsv24JJiDoBn6po2WmhP2u32TekLoFK5o3BkcW6fSs6mxU2dEZSk5j4LcxyKNW4hMohFcQdMetZsvdwP",
  "key10": "61mSjGTR6tPxidXXnMqBCe7CJWJ6dzRiasRwYKdSaz2177Nnvo1448YAPTZYDVprur2bRj92bsqDMwZQHVu9qbfK",
  "key11": "MFeHpbTVStxTyRVYvhu8YDxi66Ura4SWbTZWbG6eewYgwFCEZU39Yjgc34jEjwAebgaNQRP7FCKagqSGeUVJ2W3",
  "key12": "iLofauPgWdtkihat6mny4xE8PkkCuN28SXtCaJt4HUArFr9UADn5AFPXg3gv59TkWsBJFgF3G1jtgmVnW13K8Ey",
  "key13": "3c4sGJNa8suFxuzaJc65jxzDVwgd1ZKw7t3ZvBpgmGCc7wPVFZKZmw4yx7shjkmDxpmCBkPzLs9YQSZXf8pRTrN5",
  "key14": "howdF4WqoHhrvwQSy8ouaWsMBVJPedssVB8FiG9adAD6DR9g2nn1qhsZaGGmYAZKKi1nmLqHgeyGZAf8fFyK4mh",
  "key15": "3d5nGzv64DsTL8JBrFYizLJ9XchyFvdo2kBtc3TnMkCmB9tEaqAUe4DW2DyaurKmx3rxgNbevsSKUpZqxEHdw1Uw",
  "key16": "5geWzYjYD3fWq17JuaiSoV9xMiYTYMfnwSt8LenwFHfULLrkhtSQaLpC9zSgQvc1rMLS3rfVfZBLJUgvDxXw2kth",
  "key17": "2fh7fYvsnk8oGTDu7SpqHdFEoPMwQiWdvKiCvFZdNcoin1uxQzXvdubCAXv1iLNg3eAoYAKdDDLMFxFjhMrJaFMu",
  "key18": "574RDWTPoC6m6rviXwynamZAGf38qP9NMmegKWmZzuW5hErU8TxpNy8i9pLqfUyh9MZdud4oJytiLuYGkr1VnW4Z",
  "key19": "3VCTXXxVsSfwZfufdQXX1Nn7LizcLU1cWqpo7DgX3xwRufhZx76HvidLBko2LVC8F4cMESVnPSmSVtcQ36tMu66U",
  "key20": "5Wae47vdDddUGB6b1TForsQtFKeiY8az7q8ERoA5tN5DgCjHc2vbEDDCq4tgRgvh5xYqTWwVfHAahUMdwvkCZZUt",
  "key21": "2QLkhZYPxHUHSaD9uf2NsBqHbmH8g7Uc63yAG4uWT4GB1Q32ixjz1aPm55rL9XVBQhj52CvXZ76AWFV5TobCxKsa",
  "key22": "4Uv87zZu3J6n7nm5Fw8BCZAX9osVYNCwtpaeCBtZFw4msEKHGD9hPGFsEU5awH4GT2kdSYQ7u1xjz4uvLNKr5Knb",
  "key23": "ezHh9SrMdM4Mxm2aNeULNUHSwkpoF1HMCv33tdjbsZ5DB7F8thvwop2UFHhnfAYWpUNzktkqghan93TowgzNBwL",
  "key24": "3eP42KsxJaq2hKC8p1iD16csMyu4JNXqStsNB3ftzWgcyzWpJw1W5QBumA2TS5K1AzksZedgPZoQozhj8oYe8zof",
  "key25": "2N3AVQv8ogmTSU1erYKS61wgtfd6UyLJECrZnt4a1quLXuY9T2MK879aAcQX5cJfPdKA7vrVMKe6UHEJB7Sfy1Gv",
  "key26": "nMF5QD75qWcCGmurW56Wk6KtexS6rjy1NxA4NWK8h9LS7s31RKqrasQdEmdbredJ32km2MKNhGAgjZeEfVsVaR4",
  "key27": "53EtQEueW4PHUt4tTGKXfkBJvsaBsHHq6Ec3EQEXSqkbvwdzprvCJuui5qdyzpgtRcxZZMFVtCNGQxF8XzYhnBLk",
  "key28": "2ip3Tbez1piQRXNEPdeAvfRiNfPTirDpeGrr9R4ckreqotDuQPTbTYQrQVVns2aVPpMgrX2fGz6eSQc78mUikAL8",
  "key29": "5ZQoLXAbEY9nTp3Pqg5KpKTHexnDc1J1cKtxQxxaEPP5rbyB8XXnLnvNWyeXhaVcBMV7GaSFxrMtK8iWXAdoas7T",
  "key30": "2wKxhxujqFjeYx6m5egcYRVBXNtH4Bnya8fYXuaGx5KfGsbzdmiyTJUEHEJim3iT8LTvDpz1S8qFDziY6Ncb1992",
  "key31": "5S2LxchEXVqYQ4M3BdMbEa9vENhZdmw9ekgWcNfBUHr5updtTVYAwukpWcgfvqCGmK2PLa1AfdviUZeY1XeEzPsG",
  "key32": "2fsfQ3pnstGL2iFWVnTtnpWPMB4H4DyEGmqboMCFdR8P196YwnaC3HozxhgrincmuoaxVoiKBMBm5z3oyhRn7vrU",
  "key33": "27LrmGfsJGGEbrdRfxd7HA4WJhLQnfoh1nLVADgcFzdoS2BUjRRS9Q2PNFYBkZo8zeAi7tDTgfJAwd7X7mvAdBBC",
  "key34": "3fP7ghQ151Qb5GQy2Sr9dBUf1hHeQBk5JPYvSfZsqdbP4hNn4Fmxr5BjMyUbsTgH8ew6mFyL1LqHTo9kxwKMQW7q",
  "key35": "4K5ujs9pJha4Rc1fA7B3hrFcosXqAYmnpYxwckxbCiffEk8MJtEgHufpr3TbTxwyPDjX5oPFYMYRApPb2Fb5qd7H",
  "key36": "2c5zxy12xBBXwoVbFc6NxmbigWr36JT6WGzYRCMyCouphynCzDYPTGUGnxfdYnYnVXvFNegZPgQYApoUiGAhnZyk",
  "key37": "3sLKVuLCFjjHXSXbSkQoUj43KfooJyva6sYQn8gb9dVvHyuvgqUe5PnqGEwTz3jEvKjS8KmYG3bcj5eSu5k2tLsR",
  "key38": "3AeddYtaG2sUAcXwbPcyhnALUWn5vskCJNLLLf37PGoXuH8as1igjbmbH6MEhjqcUQeVWbhk1vXc4qaTCgHF4Nff",
  "key39": "2Ys9wzTH3ieRgbc8ZxBLxihbghPPDzVZ1SLZ9qhskeh9tx9YLQ2vKDv1DyJ9easuBSFdjSRCSuwFjYP1LRvWYC8H",
  "key40": "EB3zhDyF1hq1S8UjdtdvsPbwCkqRecBixVsdTHyteGkw1aNrGU7jDPqMoFgi2hfy9evgWCh7SXnzMbtp7eyQSzs",
  "key41": "5PqiHTVi9A5ngnTEjgQLyrkViQ6KQbEM51na1m395dXiVVrtYp86AvM2k3vYyzszDEunW3HZf9DREDCz9c6RGFFu",
  "key42": "61v7ktK4fQ2dMDd69hmFKkhiENGE6mMwFAbZCSUX1VxyMFWRGtApVi7DrXBMzUqY2468w2Dey8c1Wz9vLn3G1C2L",
  "key43": "4D6Gsoocsg1qHFns7dYm2XfPgrTA1RiboMceiC9D3arZHnnogL4R46YvFaymffcU6Lbfh5PipwLxZrYiJHoUWPmS",
  "key44": "3P79doooZu4pJqcJEQUHFqELw6D82N69XQJsaEpGJLApd7WTwwmfm4BoUCehf7SqnJLwJpKGm1ic4GQXY6HL2KJv",
  "key45": "3LYqACr8PZ2voRHXK16j48BPYibW1rHUJ7pRocCuFNP4GTecNYcpa5wpViqq6KQP2ybis9jp6uq6eMzXx81yJULm",
  "key46": "i9gVyjW7QxoeSYKwa6X498DfnbG7Qk9SL47v8xAuCzDC1XXEkLRUSDhMajTCVta71GgjuHszec91aG1YCq6WQEn"
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
