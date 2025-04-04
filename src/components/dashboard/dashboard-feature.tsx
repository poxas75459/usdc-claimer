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
    "2C3xJ9QBGxvVZtiNkJnn9vQVNYNLYHJMTtpuvXz472ZshidJTf7qhBC5ACgjoon16TPUztU6b2KXj6LdwtKoLdnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rEQL9CcyHNyuVLexG96AJ6GKb8WdAq5hZq2S7R85GPNDiGFsrDoEWMkER2SZ2GgQf6h5WcqaBHWHsJH4ufC1jKM",
  "key1": "2WRDZGdpUXQuoqke8PrpCvmdXtRYwVC2TjaXTvHzckGTg5bEZBmmKtZECqKC9WbeeuMryDiwFaNMoGDJYWAVXPz9",
  "key2": "5767L8pN6eSAgzn4DJTKsTNh84uBw57Pcr3AjhCNPA3ajsYLcPRkYJWCUyRJk5BKSj7kuNTM6XRDa7ktbmH8UrSw",
  "key3": "5BG2xqrebZVSenGCDL949zDuWpEEev2NQ4LTtav5TzwVrvAbr3Yh8BPD2CEvtfEQdn9S1rJWGzxbXCTQSC93c3tP",
  "key4": "2S7r2ZHFPRh19vufAPUBiMtXTbntUpQEhP5uZHDzbxDbKJ47ymWJT2Mca4Bov75qMNrNc3HdZ1feqTDHTZPm3uEQ",
  "key5": "2aMMZxh4xUmna5Zzoq7XBJUG1D7ypcWWjWBxwcG7wzVEUSmcyECScB9MN85Ss5F1wSEomWFq31abDXccRS686ieG",
  "key6": "4BpbnjjBhKsXfWnLy74eQ11jqHfnvGEqQ6qseWNgMq4ECurnAke2tLLQS8iQS4oyEy3oE5DeUvUqGr38332upD1g",
  "key7": "5QpqsRrnmb2sb6t6U8j4s3vPKPAPWAYaR4agvqG5u88d4VckErShv7n3NRn2MgbRzkf7jSssSACoz4nWfkWCZPz9",
  "key8": "4EDerA945rVjQ1NZwvMMmAmdhV1UDUfQLjDBZ61oJxHbKxkPnNjxYyK38kfoTNX9oz8wiZke7FZQCURvQk3Z7cKt",
  "key9": "2rCkRJJ5ZHHpZiqLWWNRC9XrYfwVjMMzZBmt7efqvCkqPvyUSwqUXFFB8RBfp2jGwKEWocss4VURwbPGa7uf2ycg",
  "key10": "5D9Fe3txkmW37GBhGj1nLNKwoP3533xkvY6tts8jvDk6adYD6iPnnPJWoUmmvRTCyPz1pmem5qcmqeivJUPQsQBU",
  "key11": "4rCdS5ZkJXfWMmNrVGQVwhWLtNMw3A1Rbypt9B2pNWDkHRhHoKvCThmxCod8G8TUZacJFFxzLxL8ho45c4eDd1Mp",
  "key12": "5UabUmb75jQ2LEPDPMWNZoSPAYEt1jFCUQ397VaYMdapGU8ZEr4RbbRehEXMHBcRDEdGySQMwb74CSmfb3dV3CPZ",
  "key13": "5yuUJREamTtad65YghXZPenZt81xpj3dP62o5TDQ7W9UzBbDkVQQ4JhCN2K668tLuzMCALiibAEPPifSd7xsp5hG",
  "key14": "3o4Kei3Aq94vVBrW6n7i3GWMn2kLqQQBehUho4m6SB82USffd3HgpBoJf5MnY2ekm29RcrQYQRLxkEPqwXx2GQJE",
  "key15": "5bbiQkoMsK7p7UCHkNVxiefxnQLRHfYfJ5LSrnqz3a8gMnWQBhpc61yEuG8CnY29x3LWh9X5GR6RZ777FXQyi5pU",
  "key16": "S56bHG48Pgp8HD1QGTEDSR93zTvnh9ULVFW5QTqh7GbZh2n9LoacyQaKsqFdjEq72S71we4ntN7rhu7X545mqsM",
  "key17": "51eNrKav6Ya5XyinqNXBkEpcytzEP4YrmNtyxUVuDM4pUSwMtJjATivgqZPQgwc9EAg8scMz2YSPrzk47Xfwktdo",
  "key18": "5bmo5APo9ZF4YWVT5h3MyhnB7o4JbXvACKf4gKQBDp9U51dncEsYyd8RmT4drpQpNgf8ykUH5K1nQWoqSfQsWfAz",
  "key19": "5QGF8ggR3xuk853PBHSQgcs5mmqx31Jrnc4M4vhPzE652ugPJnZhzxLX9FWK9PxQHj3GVMrQxX1safshdRMMipLM",
  "key20": "1ZYUkKP2Zhh5GPEvD4vf8zW1HtTQMgcyX6dM4EhLd98HW9h4dhvC79m6ESHkvdaHAbrkP7qCwyNeUPLvkxQQE6T",
  "key21": "1ZcL6J7Tb53648zVQfYSgJ5LVhAefybXzrJ3Hz3BhLN84pgKaAxrh2wBAy7MSBBAKjs3P1E7oUNQetu6EW3fJjo",
  "key22": "5keSr7MqBNj6yQ4yPVR7p3cvaQAmt2L9o4iAvBWez7325jTYkKg2fiYsKQuxBgdiohq3E3dcEpt1sZAPJNBKXBTv",
  "key23": "5Xi2DdS6xuzPZTpp1P2fCjwXkdBTk6LpHCsakgGaqU3iQWNhMeaowhN3Ar2xVkfxw7rxNCwRayr7wPK6QuuRvuB2",
  "key24": "2LVk1H5qMxeRaP5ECxphTdSaHBHWK1jscksWi8SxfBMmnDfxtBdMtmbvQ2LrV5L2c1byAMj1Jbk9Q9qEbNWfvFEM",
  "key25": "hx2D91TCLuTEzubS15mLcRmN1mhasb6HZcdffQtD5x7Y6usaDEEegRdGU8J1zJ4Dn9zL7mbPWqvLQoNctugyTPW",
  "key26": "4Eku45pUiDcXHRaw2WqgmA1FiHugRdb889WEUsUCxCSvmvdxdSkuCw3CHCn5tn7YReuCfGDj8u28WvZ6uAv136KA",
  "key27": "2PoExYKWUGrKUPdvWWg2RLWXJHeVsRFLH2nNMmfVyXAfz1hdDcDzJNKjzfdeDupHdY9h6BQERGzW17aHM1afTHpb",
  "key28": "2WiNe9mVpzjiAH57sAcxG43UmhXj2VDJdPYQfsBLFc3wWox48S7ebr3XVV6rtSVs3FA8EsLro97Fiw4yF1nCgM1A",
  "key29": "ydQYW93DkcmvnXaGto5PaJWyM8KjM4opNetTKZQbjZ1XVb6sbNRCCACFAhQMX8CLprABZwnEjEwwUZSvs41pCdB",
  "key30": "5TnqgiSMyAmkcvy7grkEcDtxMKG8cy3NhiQsDSawrPK3rSyQaWkaHookiHgUkKWwNBcSoCMvF5JuD3gS2Led7cTd",
  "key31": "LUE3PoFfrxMtRi2ohUTqB7rbEYUYeZDTHKoq6i3sX3Lb7iVxE59pBDq1An63RuF8TeDshRwVUvtVBMJEf4qLMS8",
  "key32": "4uFmZFFbEhZRnDSFsYjo7wyq5xvwZgeMzZdNwtUjs3NfHZ3q5MfGfevW9YokN4CLYMVi2KhYEjxxT9RpYEBGgyML",
  "key33": "4KYDEF9Ev7DLPQhzzv5MzTRTyXEC4371Md5o76TU8zA3Fg2HxLRJp1ii6VNWXG3fUrVHLPJp7Nw7viJfJuUXafgt",
  "key34": "85STeDWuWNQVud8D9ByFzKLRv1ghdc7DnRznfLyQmwssrK5Z61wnwmLpx7QmBeVVvkH9CKAW5Htodzmztc3s23J",
  "key35": "3KqSBJ6SFiw86KUi3Zda3sF8MGYuwQeVxhciMmetFnNPvX7LsDeRBz8qcVap2aVUGmM2KEZGd9HXakkURrvfWYxN",
  "key36": "3EVrNZaTboZLLURj4Hgvf1tvVbDcXzT6yvYkLpbK4HYEEz8tdXsFMkRmsE24EYWpEutxFCgRXLbLx7P3TxEgHBPC",
  "key37": "3ca3onTqY37UHWKD4D8ujFnjGEKjQkNmvNjtxXi4wydUHWZwJ6qfsq6avCNLoTmPGbSW5nybnpBKCG6DyLSLwAsy",
  "key38": "4YAtKT6SjbTS4gyLE4VefuAg7Wg1aPJV9JytKyUuUAQyAT8ygCucKNFS8KdRad35NpB67dLE7oKUV3z2uDwYcXgB",
  "key39": "65ryz6kYeLfDPdN6hJjqNS5sUmP5e2vG5ziT2qefrhUBxR3bffa1MvbZ529qnPdWFYHqnGtUmrYSav7m86mCtBNo",
  "key40": "324RXs4LZJjfeskg8Eksfp2wcmHrL7TBhXpavwi7CJVsKhPkPK6CeCsqCB3zYvhugMyX9Vn4Py4Hok3zjjV2Myny",
  "key41": "3129vykb6KW5qWVXAHr74FzAqHgsWXqyC7wcrUmWpoRL1DY6b9DiDHPq3DuQWDm7CvHV9oFsd3VFciQkGSrmxyRU",
  "key42": "pRRJpvELDXXdCX4QC7QHDwECRAVcvevXdvYwEq5N7KreEsgjmnZiwnHA4rG6jeQfJfDvxgrTw9QbniDMhinLy3Q",
  "key43": "kpnTHroGa1JXdaVLimchRzQfuJUXSapgfUiMhAZ2M1M8zxyujt7ig7jTLpAG67cekZcJ8hhJSZsDJoRb5fYSh6q",
  "key44": "3fSWbnt6y2yQxLMCNFXt72xHdAbY3uhWfT1FtwkbLjkVeRQ332yAMYxtcoG2okxuNLE8bF6qWuXJs8RtNUQH62m1",
  "key45": "WUisUNGXSk3dhyouhDwgndbjvw7SoEBW2m354oVKK18uooK7p6uWdTFvdMBS5SinnuJZNWYFBaoz222exGrqED3",
  "key46": "5T32t3PVx1DKCim5Wfp2RzSPebf6wo34D1nH6K5zhQJw2VJ56jyVWQ5B22cnCrUS8Jo7TiZfWKSvg389x4NN5aCo",
  "key47": "3D9FVKzGX4z532thLNstsRfXNgyRV9jaDsgXfmjKQufvdJ3LSBKgGzY8Qnsci8maEfjSV8S9zmRiSxZUWVEh2QTb"
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
