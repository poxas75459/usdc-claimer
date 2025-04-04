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
    "5ZpiyzwnrxiMwTeQC7KT3ZcWpkNTGgoYHJQfCptVmFPQxt55TysFMkx3CEBXmeQpuJ1zRRgva7mchWvs9SdUFW5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xgua3jNs1YpR4t2WnXWqwiN95Jj5VxEFPKwk5UZVxYP882nWr6snXx93man4F4RuEQJ3zrRe2i6r2gdc51soRxs",
  "key1": "56SGenMTG7aksYGtK7NiqiUKtqHGp6CJp4XP6r8xULNU46XFrmNBPCy1rT3d7GXu6GzgrsrJAvJctGtsQS83iok8",
  "key2": "3A6w8168yoyb4g3Whb1KT7KFd2W8odKYERThv7qwEQN7RSYcdDU5Ac7Si4M8XSsuUhVxkV5yg7GjSDks4YEr1xBV",
  "key3": "2xfK8JBmkaptbggGasfGu5rE48KQzNsnBZGGZAiQmia1M6qqYSfEdMsdm58JTdVqzNd5QLvoyuj3EELxPxJDhfyA",
  "key4": "2SszBbgP3B9LtV581dYpJLnyUL25Kw4c5PYdmQDEbpvgFKBFxrfarEueCYCHvp4iX9N34MHBrRyb2KsNbF3Pma4Z",
  "key5": "5U2TceYGWs8n1bx3ocYhaMCsXhogETZBPZZggjtWSsCUcAhDTcDi2UJprdzJEaEzyf9pr4wX3ioVd9REGk8xJE5H",
  "key6": "4BSbaY36NbtX7QXoMVjmxtTWiZf58gpdvrQxLEcwHvD35HD3VddpkDM5YF2V2CwWKUs55eBEzhFeyMixwYK6getC",
  "key7": "5PJzbTAfn3rwGhYZFrKzvxUyxLP7LGpLc7z5YstNJehpkwozo2zs46CTEoPS6K8fdTec3St8Ws6eUho44VWfbcBk",
  "key8": "36UfCEHsZrJTcjx2UDsvZ2Yw29D1LkNbPQyRygPaJHh76s4GZokHhstzjjtERSVyXSW4TSWJ2WncTHpvqWRqCM6u",
  "key9": "4PEqNk4iD6rGBMYSPZiYiNCh7jjGEmfmZGXLu6Tk4CEBPYoVHQnnSZwKLEeX8jHZoE5hjUHDyLbPyNFak5o11Lq4",
  "key10": "5TU99VM5hgkcwGjU27VZcUTfvCGhPAY1XwnxTR6Xrt9o1KShCSUimifKvcKyZ6mrqtWXhZNo5gUu7tMsgJQqoptf",
  "key11": "4hpPqzJF92XwDQekTGoHcHREURRuYjD6u7ccnK69wZcd7T48SSHHX9SCBCXC7yXguCVMmJGcUUPLCegbghRvqUg2",
  "key12": "364285PAt8HgW13NucENyZABC91qb6c12qfTBunsK6yMBvWZ12zuzznJMq6z2N2t5YLt1T7gceWMPyb7YaFqqLM7",
  "key13": "FNo19vxcCWgSepjz8eq7s1QXgymbzvRBpNvd9HAaP5sfyGuMfu6MHGRDGadwA9WAFyzoKoUbX6DjW11czakE9ab",
  "key14": "tGaX9ZWqkGMcv6cy7DbUFfcxSfXY9vCxrQ1AZMuP2QBMjPKnSLXWQXznZSmaXChitRxVaK3jdLZVKHctUXV5PCV",
  "key15": "3Mfhdd6zy6TSrDMQV1Meu41AS33bay1tX9uJ5Jx4YuKTuRSsPytBZgjw1kNpX7iLxi1K3W71S8gUTj9jKjeANqRa",
  "key16": "4NmcBqxkzbNk8HYpULeeXiWE1T8XscYyLWk4YspRhnpn2sxeYtzefCZtW5a4pFYCiPzv2Ega25zuDwHGhhMHQTuT",
  "key17": "4v3ykwZtG9sGaYwXqmB6PYN3cmbHY3wYFtgkurgc2jmX2iPqwyTaQBeDCx1TVAx4Kub3W1mMNXdgc8DwRtDQnV4f",
  "key18": "4i3L9RnCTw8s394AB6ohGSA5xfxFFsukLM6rud5sRBuhME84eiyqkHGgHyeXxY33CVaA6hPLQ2Qyp56NACqmxicn",
  "key19": "trRS6HvTFHM449Z1pfeMKbrgVCnfQoMeR1V4MuJin9RHfjxWhPjFGvpKzbhKP6gfZGSsnucX4eivqPrL3LsTrwk",
  "key20": "bCEANdJAX7b8tEJSucjufJcFJ7CNetZ64KKwXuXGUsFXydu9kZ2FipWgFsDcS81ZrHDm7DF6ukqhyAh567NR5Cq",
  "key21": "2QSeudVPNFfffyNAXAfWmTBR58ExWDxwuVU4mvgGzt2EVoaKFAhwmupmXxX16jy1gSrTfg6RtZ16qTjmXE2rYdsk",
  "key22": "4quDYmVfWk3yoyDfAqCbx24y96TdGcqgHVcEdt99wMapLazAYnboBNYVzqzrybR4AcnHWz5rmrvRZ2DZYFUDP6ri",
  "key23": "2d9B6qrkAwkwCHXgb5VwPDz2WcVGQFt5poZDDQkGXQF6ax9A8ryyvvMb7dQw7GVck35CYSyyFaoWvFbTWzHGJ7Df",
  "key24": "5bSsGLUvkTQQ2bvovHBFmdM7qdMDaeES2Ze6o6PxzGbQnCX1oeQnzs5QGBoQURuMUiqBbUmYDTRKPLY3Mrd4cSHm",
  "key25": "4N3TMAQgfC6scU4hdjyf7RrVj45PjfWimV4YRzJxdjt1xDwsnjs2WWvWBxmNuC1Hg361kz85kbXqyy75RHCotFJf",
  "key26": "4KAtEPwxwtU4dUFA78Wu7zrLrjMaQ6MhkhV1yn5dxXdEF27ew8sasUT5UrELeHztbcT9Jb8yzDgHaUcGUNxUkJ76",
  "key27": "2peUSAnYd9Mc8F1qXXwiHRxxLeM1fVTuU39tpRTMPhHExtGPhd7d9qorHCzjN1WqUt9HsEsXF8Us4hP7ZAdLJvrZ",
  "key28": "3CxtVUkQFSiuLdC2rWim4ibSrnUL8XocNV2mzZFGCusLVhwSnmoKtE5w8w6fT1GV83Gaep67tnADQcgrpdWjy1jt",
  "key29": "4DLVB2roJWKpHJuRnYh9o3xajzpPmTJH4QwirtkrtybYfw15ehCSsjUa91hU25GVvqQXNL5VQKNgkuWN2DwrC4qV",
  "key30": "5MwkvRo6fh9MQ9NQ8RtWdxDM1dLkJwLhr5QnTgmFVCBEcAuvXq9RLeJYBiVqQVn3uMMJzAG29Vt2aDPWQorWoRY6",
  "key31": "3JLAFgSTtADouWFkmXFVeR7q7Pq9NSqu5jJLnpEa6jX1BHriu6WZ9yVQb7SwW3vwQepWYeiCV149xYokpimoGTuc",
  "key32": "4WPRTuWXH36rkaBkYyKjgDfufgfdghLXgD5cQw4rs6NRTGZ1UiSyN1UfYcQjvMSPp54PWsUKsPw26EveruRit56P",
  "key33": "5yiaPauouuQRqTKb7WLofhwDBQxNEjMiABjzeTcUy66y1eaXh2sFkAWLtVh2RYfcirJCPGnWtZpJ5V5p71sorec7",
  "key34": "1j4Rtu4tshyEhfBBjqqnEynXWK9Dc8hstchMz7E9Bt272Ked1yVU6BdTqoDwWaFqSehmhoF6HHkrgyEXjLTeXuX",
  "key35": "nptVQZxkuZ4t7SppAoQA39owdD39dgWiQRQZPZbL5YPtLBt1xjTs7AddMvQLBFDwCMDPDJAjXi1xEZMThzNPjk6",
  "key36": "5EkFBc9rwutnmqetnzMron19e2t3NYZeZHWRtyHX65Yf6TqUwv3LKAtkVLwX3QvspR8ijtfjnzqZAf5aw4Z1285K",
  "key37": "3qTjSeHmKenwkeZV7iQAE16sSrULzURdjRB55a3RKKF54S1teQwZ6G21F9NqVxa6UCafd5yW1TpZFxBh26jxAzmu",
  "key38": "3BDyBvJ3mcvTcYKvQYU5tZWBpCS4n4qHDHnmLxhpCZJTSWLLFScynygCRJGCaFncRcDKn24Jq7W8uKtsbiyLrUG8",
  "key39": "4Y1Lpz6bFyrwDhhwNXaGSkXCHNLA3GPxtzTioFEKttN55w4V9cHyJ1XtpCX3EyzyaHH1RaDPE5pJehG8uwquegoF",
  "key40": "49SRB8QDTA9xCCuWL9FrUGaZDgzyZ2BhFFbmnXpLkt847a3jvA5Bq4rRRDKZKp9urMxES7UvvMbjD3pkEiznGJJ1",
  "key41": "4nbBEwTckRTwmtNC9Uyfi4W9W5y5HCjQxcRnH5enuQzG61JS1GcMWThcbbVXjrpxSGZiZEYYRu46Y5foLkN5kRQV",
  "key42": "y8Xgt6uFtekwv86j9g9Gym13bffV263YmRP3XrCGoVTYxjCkL3BuadKCWdxX82VmAFizjNJQNPPLgBTrFNino9E",
  "key43": "hQUJnidRtJc3TGcseiX6EjQzg4PY9xnQQSuCqRVPcTwtBCAwb5igFfTKCEEDggPuyegP3hyNSTzdzb8vDRWEpSw"
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
