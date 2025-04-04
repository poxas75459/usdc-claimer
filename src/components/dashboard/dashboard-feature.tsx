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
    "34mNHXH3PuSAkmp7biT36d7B2LjwLf2Te8xodBdZ3Rbyf132Bawk8YdcW1C1Eh4GTUuLecfN65WK4rjtNy5qZvFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26W1QWpmzRYyAhexYg4ymn2nZJtNemEzs3UzByZ1tPNHkkQKm2uPV1fgRnsMSFddjDE2AtN9B8JZVKDB4q5n5G1U",
  "key1": "4YdfFe2BnVQMBWNctPwN6Uie8YujgzYUxSrY4bDYiDHFbB5pdmcoo7fqNQ2X6BB89kDXsxCaaPCdroE3ZNZBRyT5",
  "key2": "5v7hkZVeMsz2DMN1g1YZQSNaoRtwPzcw5MPcjhnkmi43HcCYJKEqxuva3WQeW56C7DrF2PYmzZmMqv3hyCRv9mhc",
  "key3": "5GnpK1GpxwnvG5V6vv2u94T3Kn9gcCZjE8GfZmfxuDEsPSaRGDJ6UNTYMb8biepuV5ALrNDxSXnYPh9p5ruwJKaa",
  "key4": "wyfXxCagPk31A4mgRjyi1qYcGYMtpDDc6geTY9ytpSBEnucGEAhx8DnXGgfktq1VJqb5qbqxTkm38fYbtXSTYE1",
  "key5": "32qiSs3eta6qfDHX4cmRvM6mGZb77AYs1uFLsmdqAvR6E1HJpyoZRS6ahLfYzuUu2tL1p9c7KwFCYexuP27NqFi6",
  "key6": "5CC2meCC1iRUvkP4Ba4yGbNMTnhkXYvoZVcjbEoTUv4R35vvtHzMxkv7npxUZB7HPjHy5S6zckuruLJbCYzxwG84",
  "key7": "46V1CzwwVDdd193nFjjxJeSA1dggCJAFN591iwMvhtuBFrqFmU4uRKZX8XYxJWVQShBVySdCrkLPgKTebtv3osC",
  "key8": "2LMgmADVqCGSsxPYKpT6fzYfpRCnPL1fpQXkuDRYFR63D4FamAjdGK44rkkXMvWSYMz9UqceLDMpawK5M9GikUkP",
  "key9": "391tGVoK7DpxQmKuUnw1tsg1HqJZjerL7tZNSeWv7E8FoHHXFYZB2ZDx7QRAtz9Ar9o6ZsQjYv85S4fpsLAp31kV",
  "key10": "kMghoWeR6NbfWLSf5TqS9Xu4K46SRWW5VDvmrtLpBF4V1hS5gPSsJ8zcgtdn1SPfZuB4vvgAUjPGRY7fR6VhDr9",
  "key11": "UkSyojnpxCa1XWW4CohFZUnFGRS6kEWSUYcGmVdGZJSxskt21mVFifgyYHe9XPWUwWANTTsaAQ8dhioFRAAPqh6",
  "key12": "63ozium7hbgRyQaCNrtXaFfFohtqQv1sMdf1x2GoAe7N7DjKzEYXViY3XTk7DiZnK4oD4Wt8N7ZcQuT35W8H2oUz",
  "key13": "9bVkFsJU8o3gU73DLfxmUcNDv3j6iiVpWqcUSMWQ1ckrnFGKRvwoufcpkDUSJSg8WxMnPRVnmcT1ZRJPQR3CKCC",
  "key14": "43bXZfUf76QNbnvpTYbikdv1eszbzDyzAaXuNhmfHTPHSYH2WKiziVcdRM631fCKUsS5wiTbo5gUP8TRT81oww5Y",
  "key15": "4ST3LQFHpZ57mJnMAdAoFGLqyqZypmKkibjsHVpX6MkQ5bdAubTq2wm58zRQr3f2ZE6vGczoNeoHsSPkhyx9TVJp",
  "key16": "JJ1Bjbn7VSR9cX5GgQgtwKLExie6UnKUtRRNrQ4hxa2rT18vERsMufqLXaLd9UDe9SvaNeEBe8Ah74LVmehtJZ2",
  "key17": "4cQFz232ZRSDaZcJiLx8LGouArpHUo6xXiQqbZhBHG5F4h7FCB34KtPpurUUuXPYfNeboDwqpQ2zjYzqfTfFh9S",
  "key18": "xDk5nAUTx1Ksn9PKvW6uYP3oE62gNgk3pR9iH7L42yq8qfctA9rHEF9eWyQ9wHbPUwvJZBC4WV4c2WY26DB11SJ",
  "key19": "3YDGienpoLHbGHHtnr6tg2Rk2zUoxVqMWF2ZtQuhRPt9GMbdXR8fME9pPhdyxsDDCV11kH5j12h6LJBD692VXGzj",
  "key20": "uEZEmNKbZXRYz6fk4ZaFC1KebMcWCZPzXqohWmubYPn2fBC6YN78kZ8SCM3GxLncGzR2bhj3M1S1zzatxpqBqAA",
  "key21": "4PGea5eDzapcsSbmziTPFaH2gD9RSHDkUPFZyPti7fstgLUaRRiUB8ttzkA8mw8VdwPKM2vBnC3KsFEmVm2vVCwR",
  "key22": "3BztQXuhk7MQtZ4ibrnYyLv2LV4oixuJmVjhVmsWT9pNZ3WD2YYx2nnpeyuxeNwgBf5YVPR2VKLygrACZQ6pCY9C",
  "key23": "xWzTBc8AaDzPSnLZvgYjudxbgkxQNjsxW93JFqMiksQGPsnYcTaHFc9XtYVDyCnx4vgZsxL3MxeDWt1gUuaGs5E",
  "key24": "4BVTxHXNoJ6fT6FrM8ZHd1FHz5niHHEb5PeGaMkx19SGVnxq8Z1MbhGJrcATb5YnvxBgtf4mRo4ZsSh1uafKXX4x",
  "key25": "31Yd2VyeYaQR1TB6iNE8SZcMWSB3ePRpgPr1co3fEgbg3kWpBFvdwhPVDB4rFrDJ5ScEyc24qn4Y9xKdcLSkUuDc",
  "key26": "2rXHkStcPg5jCnX6W75SozELkfjNxA2uPe2FwVaVmtYhGg4RkWqfV99aybeNf4uuHXYZ2TenLX9sN5LL17CcfopX",
  "key27": "Kv54zEhTnEEyEzreovkhqbZHbNmZFoT3yosyXjuSq7GnVu1yo6hsjwyDhjQ5DEzJeihYtStpQA85WRcXrX7EUN1",
  "key28": "g3Vmz2jgR8wfV2boq3fBNhVjZ8jczRhbLbbd4LXTE2Sju3ZqSzeB1dmJ59cqzegbok5Mf3RidwhBaJXA2Nb6qu2",
  "key29": "4reEH5ivj5998o3RwuX1jS4fQepFwEFpX4kU74pVqVkdekqQQswjcBEEWQWFw3ycFE9cGQiEdkM4Haz5f19HQHM9",
  "key30": "4Dq6Es6hgv6jyZDCf4XYKYLdbmNraAUv3JrtmuKsmDUUvX5svHUNXXFmNCyWwtsY4xQ6hRsfo3MUY6ntA9YZovwv",
  "key31": "2rUC7hnVtXqeBziuDszvoAgdQTATQCpgfCLu27vERaKJnRarWJyfQnUpLS3amEMV9DJznjbxcuFPqpaheV85Eh2w",
  "key32": "5LU79GU2oHayk2TBVxF26Zx4D8wveeWcr5fygGjwgNYraJs31iNNBPBJ3tHm8iw2f3yUAkePqYQafwo75PjsZKJG",
  "key33": "4eeu1xRDGpQCX8uvbZzFXUnm86wEQRMPisyxyQPn4fkXdvzoLWfmZo8ugvqZHufHfZs8C1d67kiJsXAusLZQG8JQ",
  "key34": "3uJjAqRVpYnevg5yDJ116sGTzNFWuSnpx1KU9uZNm3Jq989BhTQSN8tmXBpRXs75kAaFBrjwpEquXjkCnoJ96645",
  "key35": "5Kv7hy1hpydDknMpESCVAG2grxUdc2HnJiSUXYckJd34E5hc6h5p2zUvkvB66S7i4uar8LjtfQqwtePmtK7Ka992",
  "key36": "5KQfwFfXHbZAWfpKqoUdacx4RxL9siixhtAqSojyYbAR9ohMKKJTaFWUM5BEm2vYeVFm1SehgqLZmmWgvT4EC57N",
  "key37": "3Soc21kTDYSDCJiQt5WysaWDLiPuJrhWnoDuNVw5P7fENMRTmBGzpLaFZ2Tn38MBB32XnctkeF5ANtnQ9eyq5hTU",
  "key38": "3yRZy5py1my5v27QWgPCwp3BHowUPEFnLjw8SVRR2CP4rYTJ92uPHTaLhP8Bzyms96tRXTjJTqe198s9BqoEZQeH",
  "key39": "3wcSzCYT7DbTVdPma9dog3DfEVytJt6Kvcg3HdacnSe5qRD4XgRsVMueE86PGZ9EuBcMKxqskY5F5Xwg8fFvEvHz",
  "key40": "65dCHh7tFL78eFCn2SJkJjaGkWKGbpkQmLjbdhe8dY3u1p6Ns2gCPCoTjDjUKwM7Hho2hseVTAWwLwXhHDpsQNPb",
  "key41": "675pYN7dihSFa6c22dFgj3DLWjiwB78vYaywDVoCkxbW3szy31cL2aVru6YDJWvaBLAwXFdbNLqM5n8kMyTd9Sct",
  "key42": "2pq48YtATRFJCFfoCzHGRoHgdUErHiXPsueboFKUTgrLFtUTnmSiC8FA2mxuqwJ1XLPkA6hd16m2wjVf4u7gETEP",
  "key43": "fFfL8ZMCPSHmm7pymznBYVAFE9eJWMAaiAs7AK1B6TnP8jJ7axvz7ugEHt7Jmww1YnUrH6R7RKEHta949Rqfy3c",
  "key44": "2JVnkLSgscvPDJAi9uA6DRTuTr2P5G9J96UfsLkzSXLL1CSQMUzygbzwMP5wwk4AGbtNQbXc8SMF8qRVkqejoRJM",
  "key45": "59rHopbqJ5z9madYp3e3UNeExwBeswCpDKzRQhUwQyE6GfLeEDiJLeau4DXNi4BGo91uCTBSzSMPgiXqqogVudzr",
  "key46": "3EL9LuBwDrYBwQdHuyuU46AtzXjKYbavM53SYWgUVR95ABdrR1kZsvD4tQuV5NBFiHW2TxNQ9LDhoZhNuxheLZst",
  "key47": "3SVRw7Uj9XbVfxVWN9ffsw1LRRqLHUP8fRThJ156Rxo7xCaARPZ8CFLhR7n9xTbjjX9dDxJ7QmUxXMfWX8iRQA8z",
  "key48": "4nhFEfofBZX9kBfLo5pbjeohHhYmRbLyRJAQZvfRZL9G9fgZWUE6Zknd5Dw1vFJrG4DFpES6zhXxPhEr8jf34qVM"
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
