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
    "2KGMiedvVtBSo8x1UZyWK57eBmZyvsLGFhq7KoTmUpcUb5o8vns2noEfMa5eMq65ssBJMBiQFfmr52H7n6evBjyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MTq6L7RNTsnxvEazaPEpMU1g5XHUaLf241QyD9unj8j9yFRQ47C2qdWwYh6Jqh9ny6qXwaBz697ygU55QLtwYGi",
  "key1": "5EpRihR475JMhAAJSdCND7eNbJcXZGo85Fvqv9PezyTEW9NH9FE62WgWjHjfDqybLwU8K6MuJSDCyuPCG1GU1i3D",
  "key2": "2gXGZVoMnV5w7ihCHRbjdrjgzvYXPHDVWzAYknwiAuEToKWgX8P3W2riM6fLyy5FfmJbZ7Mdbr5Ct3HdQkPVwjbn",
  "key3": "5rMNt5JF2PEPkmH3MAyKT5RDq4EbSQqAJKNefjbML8TaqDTa9z4UQK3CZUzPHijAkDB3V46Pzaqa2AyRUjkGKdaY",
  "key4": "28hW2Tpn2JeQHYjfnRkJVYmJDj24P5yLciEUMNJxGsXKURiY5dzgr8mQuQNTEJxD4esDFsP3SdGjBrjBDwSstc7k",
  "key5": "2VtUxSm6hSFHsmLto6FYTSakeZyWR12W6ZkGD8e6GuM8PTDApSrHdN4gsywkDLoFMM3Q6mZhGEQ6cehWBhRhcnEQ",
  "key6": "26cnY3bsJAfSF9frN5Eo8CFGRwX4z2o3FYcXGWi6tk9K9NTEk4bx8CCDu3AwUtwZeN9Bx6FPjpQcUTmp6GNMrvJq",
  "key7": "ntBnuEeC9diziTeYsb82x6SdGeQanYHJpJ5EGkeYSdSzoKoMHdfoAvHSf4knwrt3GcTarNon6fKjVdMtjnLpNrb",
  "key8": "46WAmwZFW2FxCFZHLmC7hzvktd92hVi1X9F9zq1gB4P2DUmga5UxjhvyhtqJ8PdTzUX53rF7wLzM7tbCB5uZmZgq",
  "key9": "BGX6deNCjdziVCJhoQ3C4Tyq223zFrTFechqy3hQYzAE8yLXFxR4DsnuGxWQr6vxnvFKqvY9P7LjQcRcTF1YBfJ",
  "key10": "GdLm1kCtD6jq6pojQLUMPryj7tJZSwgMZ5L3phqBs4y7WcUSsoAjtUxi78Rc9yDtpjYvVNN74cgyB7so8MXtBYw",
  "key11": "21FwVrSzruZKFK7aR5RxJEXQR4VGfhx4FxgKmNn8EsNT7oJCruTU9CxEB5TBC9kNCJp9aVxDgrGiZxvL2H6SPCUp",
  "key12": "2JJYn5EiqJpnsXrJi7JDU9SYH2VxzRDEyuspZBoAS3e8S9kYE7QEUNuSqkDeDuCPVBDM2cwgiqaRDMwD5GdwXnyV",
  "key13": "3fCpWikmuGTR4HPz2yt1fBF5d4mC6WcQ6j6GJMxDastsqEGv8neGUtDnAhyRPcVEpz1PuSx8sWti7adBS9yEQsoX",
  "key14": "2ToWQFCbNSDfMhK7nD2KPzn4X6Cwp2LR8u8aKrjJQVXSfpsR9MGPd1KP771kSotxUXpKPaCmChLbeRix1EeryxAd",
  "key15": "2Zm4YMFYHJmuYPpJLekUeyf85YAmDdKvDhrc2Xo2NVqEc6pGT9YJvehY9tJPQZ7msFomyyYpkvrvgtV1gDuyjxvb",
  "key16": "3NLMDeemqWao3omouefvYXHzFruiKBYYwNaHd9Z4tY8HwydznZuvXgr2MhvRPuYMR63SMKSSESYiv4Jfjwn4kFm4",
  "key17": "4pmEi83XD8NPHV9JLrZKiCPC22byUoKd1GAFaPdcsMpJVJus5jhovrizW5AW2QajthHP1xZmZVe2JLL6Rk8V7DDq",
  "key18": "o1ecrmPuCouUBuF8K2Ng1MBvmcyzX5266KJ2RL6Km8GJ8kFDX6mf51bP99SHcPY1VDs9VwMGfs1Qp6Mc7jDiFVx",
  "key19": "2h77YbA66F6ReA4EpooqTC4AaDmRYRGE7bioSWy3LyJZPhBNEKgE9LVN7BD4rFns3JryWbXnazAef5zaMNSiSXps",
  "key20": "6rtVKvMwG8DuvbFNih9SqAoi1YtAvkDA9cPdnWwz5LHCRmfKiStQxVYTCp3hvusrDaQ2id4vVjXG8H6XLnc2ftZ",
  "key21": "3XTYj6YrwG8fqQ8oif2gpxXNexoisqfz21U9NXvKmrqYJLFeBNRM3MP2gpLGApPbGWr4AjcioSrmqEjG86ZwVNs8",
  "key22": "RPKzc1r8sfJgec8pdcbrjWEECW2LW66FNcYeVeHr2bmtyF4Erwxe5J7y4wXRZFn6RD75Yth4arJeZC4tUp2Ms7P",
  "key23": "3SjJk2Pu6keTcyKijqpAiqq5nWMxdRxPPUKAw9nTHvWoTjuWeuWq5nu5wVobdwLhWGgR5n1yPzfjsxw9GMuZ3Tm8",
  "key24": "5LuRWekLExkKvUmUmBRFGrfSM4x81dv8Jd7W2bjMnjoCUEQYNh6bWSPHrMU29PQnKh3DvW5uAk4z7BiiZnUUUbdK",
  "key25": "5n4VMFqymckzs1HKxmDdA5646zBYh5CBn3tRv8evX8xgTPgpTY32RHjVKuPVbJi8BMu9e218qtVzLNk9ZkKpyx9b",
  "key26": "5BfuLDk8mEcKUMU9eV8HFF4FBvRmH4EZCcqbjJUemtGs6vWCg35XqnWWmnuKEBNh4PWojoKBPjGdTucjcs8F6Gqg",
  "key27": "4E4zovpxuQkqJJ2GSf4iMy3wY8ekN2XKqhTcENafLtiSAo3otbaZn1LaPTZ75jXnvgf8PTuRXSKTnt8fEeWjdkxF",
  "key28": "4hAXn1FR9iK9LaFJh8BnKzoa5eMFortKbXcTk5XNpBcTMuDv8PFjKj7bjpDYByEY7gVw9aim3Ab5ddBLMRGGffpB",
  "key29": "3v2j4Y1tuRY3DDM4YPi5aSuFKXBf3Wz8jcvBxgkBGqDW4i9Z8E1hJCAfjj2zZZBVKnk24tRWia5h1XpNvCzBSYd3",
  "key30": "66B5xkmjBmf5wjJQZNsgjLjirrXRjXvkYMU9v6JBzJgJ32X8WTYWFHEsQsy1gAcMZNVRohRioZvpVMQbmjix9QkJ",
  "key31": "2WcwhYf2zF3gDAuWvEmpwQoBtvHqBpApStHefidWZMdTQPUrUxEx8VeDYfVhjAk85Ax1HD5zykvZBzWRW3XbWyMc",
  "key32": "3Cb37mo13h9StcgNVeeR1NttpoC9ZCcir8rei2AdYQXgE3mQWESbQrvWZ8rop61wTigF1rauDfDEA2eKd17V7UFk",
  "key33": "oViJKvmxcnPF2ztv8LXVg8QpyNnaUJEdFrnCTtdxCQtVYTJ6VKqGKv3ypdzkLG21LvMqTp4wxCTxwsRdEXUPGBA",
  "key34": "64mTiJPYexdLC4Tmfufjy9M22YZCdpRiUMTQgvozsprsPeqeYcLtpKk3A7wc2GzSwKeCXzo5iESCNQ78cDNcHWw4",
  "key35": "5oCEpcj1rgFkQ4yLEoJjrmxjxrf3XrejZAdk2JvdNxT5f8QNS9isPaHib19ENtaxGQJfu6Vgwtd5Y3KwzPVyB79Y",
  "key36": "35tuGb7rhepPZh8aY8EwqHiQuxhYL3ef9oP19YNgWAWCt2avcnjxMQxdU6kf8hX8QNEe9FANPPqZaF7x579wmtDt",
  "key37": "5Rgz8nW8T5vBvUNdYTwwanNJ4pagVCyQa27NQGmCH5fh1GWCSxQ8o95bY4qUGHEVeSHZcYpiH8m9t4CpaYdRTEde",
  "key38": "42f2zsXuRfFty7uQQZAf7aJijhb9ru8eAiZS9prwHvb8sWSxpiVu2sdNriF9hxDBTNUkg76puE911EixY5TxFN9w",
  "key39": "4SZ4yXTMe9Lwq92Ufe4CfxSKRmZsKoFrygejv8iVjmkcobUaGJYAVc1GR9XRFA3gZuN8SrK5XYma92c8X3d6jUyr",
  "key40": "5h1S9e5Bmfv23DLaYE6uBT9SXrWvd95RWvGRXkKFXUbkQW9QWivzqw4oR3LGbz6nYLqEbT6wX7dLFxk2QV6bwjAZ",
  "key41": "3DHvSoHi8QcPqKomzyhm9onQi1tL1AzxA6LisXRugdwg97uAuyB95DYtvrzN3oTMPEG8UoreNGYcCG9uPqnH1Jpi",
  "key42": "L6sczm7mkKsGUUku1FjGCwkFWoV6GiSKrbo6mVgfMkJT9RneLX1kJs5SUyVPpc9wpUgJ7csrt5ZLiQJooZF1hHz",
  "key43": "5BVPg25JSVEQBfLW43LNfZJuu3w7NxjLBXcAfJC1MGx878uTggBmqRsKrCZzwPviKHXmx5UN7bdFQo3VcLTT326v",
  "key44": "3AguFiJjouRmU8NjyrGTLnb7u3Kj9ZuU6Q7QuiaHSJcHciFyxa2UKHdgo8Lw8Ac3F6czQunpDFn8bLwGVw13ebaH",
  "key45": "qY1oKPqkgSSTbCAFHFChjQiFvn8mLSR5bjU6gNMXsKCyVtjmHfNjAAXPu7dEHAN976BeKWkrLZAFJv2ELnyyEFb",
  "key46": "2Nwsq4o2eMYHZPAUpstKQ3mJs4NLgeHuKYyjsvHYTfdqeFcz2x3dDW5PZj1Hszc7NUQkgDRGSz4Q4VxruXabSA5y"
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
