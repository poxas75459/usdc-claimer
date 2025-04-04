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
    "RZcFAZewpnLtvSgPyqEK3zmx5TaS4Fo3viEbuWT5Yb3owyfkXxAd8jEid1e5otVNbzyGgvCyZCWdemXENGgXzPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CAUJAc6RYzAW3bQKDfnXoTfPrXbDCoWsXeC2Niq2BBD16rAQRC2UxxdUYZhGGsVWV8VGi9crgvMJ26V6d2Ujt5z",
  "key1": "2UVUGJGK7spQkLYefwnXGsbCSciKzwVTDgaTvinE3SZRsTSqW7jR1SNMRhT4aCAf9EmnCFGGwfW4iVLzLKbG5ach",
  "key2": "3ZHZ8eXXNyWYoxAWiKcXMydJ8GYK2Mny45a9VPotKTGwNXLCkA47tB9K1dpK15BgGgE9E14Ab9kjJKTTWhUWjuTg",
  "key3": "3ECiTf7jhQo53i55wYUtjeDr9QALkbds6TkznoAUaTstLHUqg1d2zYE4fN8SvDB8N8pVnCX5owWUUiy9m63He6n7",
  "key4": "3L9CExVQsgikacQyPKCLqxCdH6wvhDSt4a9TCTNqu9JFcWJvE6a76FzgFh9xQhTKg2URxSHEFMyb7FXbP68cvtsH",
  "key5": "3vKPL7acxRUfygLiSF6N9Jd497zxXjWZMhMx2X3SKmsjbEBLmULn6LSx7btrA9CYagLXBZgnVV4YcXVHMxmmgsxR",
  "key6": "4CEQfgjp7oCDm1zgThiSsRx4iNJYrYLPV3kQvEg93JzYuN4RX5EphJ4FSidM2qRhEkYME5GvZv2j1DtLEdATbaJ6",
  "key7": "5vEh3guRhbk6nPMyyHadeTxGPSkmdDH187bYmFn7jKDpyhLFFKYvaboyJeEiCy3kw27xLpqzVLZJ95BzLb3VrYDt",
  "key8": "ZsNiv9xy1KVnuyJquC1mEUzr61Ycp8GtoDLHsYGHpXQdSJGWsjpP2TW3ExLPtd6wmgJDJjyHK8u1FYKXxVKCARY",
  "key9": "3bXCyTUYSitcAFJuGge2yZ7Vtx6tE15xZWfUJvmwh9RTPwPtc1kTJPejbfJ8wBHuUPjYoGUUXiQQsbLCUhvhf9Ld",
  "key10": "3WicKijQte1vgVdEhhkGSmw8zkNrEdFQeVZ7NVq7gLAcUbuiCYyyJHxv58pt7T62HUaEkgTNGva23FTpkndrighQ",
  "key11": "aVxt6pdJyzhLDTGwGEcmg8R9me52biShwsAYswHEEVk6xmqGEpYA65yfsWwdwrLnd9WWSehjM3ATK6UHzzrYjou",
  "key12": "33qxTpak2hCgexsUBmbvuq7i3UPa4MFPTGw6Y84tnmavTwQk97qwFnbgGFqt1c48Rb2i69YwUC4d82LB2rgQ7Emy",
  "key13": "5NmV4PgKD4LNDbYhH4SMnXGnT7ezFcPTBkyqsmBYkupCmLTgJVT1grNvvSS7GzzRKy7331pUszoVNevZnU9srQH7",
  "key14": "5yvtvE9YAPnQuxX1ZJQAAphZgNzgipdLKu3sZYt9qopdBeoztNVoxzPktzNCbEgK4mbPPEgr9jwuL8Qk7uFNnC61",
  "key15": "WeogctncTAEnGjM8BW5yeMb6QM6TmAMV7uhxa5wqQrwBXUEs28kqTdx9sTm39jt9cJow7kC9eYs71xTBx4K3T7j",
  "key16": "2tXKryn7fZRueS7SgL11fQMw3MSkyGhbbxE1LBZ45cNEdyBRSx6iuSbuK8rkH8uVicPNsxA26NzR9RZYfkQL5asM",
  "key17": "XV7sKP9vAyKdGqCUuTiE8Dr6s9Ycbda2Bg6kMf29SGP1Kh42phrNhnKNWhNUFFr1SyvaLYBd2uR4XKKf6WsdvSG",
  "key18": "2JeguS2reHf6kpA1EP5xrDaetuBoH46ijyTycNCC4BsH8Ue1XQUyh4vaWjwkRtFvco1k68nJyw1RX52w214LFh6L",
  "key19": "4wA4h2VBLsgmWZzZqCGfJq2PHjzs3xAWdU4ErCcZexKFz9LDVX12QAVWgeJX7NZYGn7uHqU7N4eJc99BZCgVFgEW",
  "key20": "5L3tPVJTfhGjKkVtgLh1J2eBEgQT8nXFNXreuKUB9TnGaheGPN6kLtKTFXjsL3fSuQaVrZUoaXh5ezBj7wfy9e1F",
  "key21": "26eyBK5nTzoYZU6Pn7ghyRnSAQxWcM7GUAXMeZ57zwZzY4whYM6sJXnNmqcK9gFZzuZvFERWsbNXFCw7rH4Y8svH",
  "key22": "8Dc8VVqgyVXX1SiGTGhKJ1mkXPckqAFB8E82XWtCFjQXPdpuEZ5KfD5bX4Ybxq2zwNKaBNNfYG6E2e1wvUd4YZZ",
  "key23": "3pnCCuTn9uzeRWU3K9weo75QXbs7jYxuCtUqntkNW3M7TUpHBfoMH2YXwb9rV4hEHXSpwFzRvB8d7KFeB2uPQwts",
  "key24": "3NN7SvPodLXB6w2vLwZo84g8DawgGJ9vsfgev4dYjFr7YQFLU1DWV6WcR2J8FJt85wyfNsYsbkoh1ppABQuABhKM",
  "key25": "3SvSwW4v5py8cXLzZ3AvB5veuaAjjJzqxCgXjo5Z5QfPKDqbGMuPe3X4M9ANLieuumgfbA35tHzXf6LmyBQXZa4A",
  "key26": "Q8EhNZnGGLu6sGGJ66F54F4C6ESEK9xB3bbBFEfp7kRZedU2EhkxnHNiGSXqbbjszcDNitUNFERRCmpo35d7J2e",
  "key27": "kodNyihCiC9iXHLz4nGqeRgkmBTh8bD1GXYumj5jeNBroLcQ1G62S8aumbHM6bZCrF9PYyPdYKZgss3TXFxaBUq",
  "key28": "2CvZbP89K5h9RJkM3GNMSEpDJPwEg3owC13KDVNTXy2QA6MMm192sRpeJYyVEs7oQfQ1n24knQKWK33yAuK9vmqc",
  "key29": "3DXyt6e9yawTzDo74XFAsYrd1UzQnqHZg9xuWE7HTn386TxQrEMcste5aNm75pBXqPnp8fmsMEu7zdHk4AEcMEAn",
  "key30": "2s4bbFQEE5wb2NbwXpuizWhnszH99MR8q44DGMq2iBTe17sW1w5bBBnEkwTFxYLoZVvSfvuJSvGc1PKt1Sgk5teK",
  "key31": "48fEZR6x1unLnu1eRyJT1eoDYXAuoNz8kndjTvLmGd4YiMb1jXSnkHpyicEe3aYgsqG4ZwkuHbyxKbsu4zN1nVxf",
  "key32": "2HjpCU1RQqZzEqyyErvnyfyFDRum9VpZAx9CgKMy2ica3jXLAWwghHkByFAKZhw4oDyJtsHfgrDshc6u2oPkgD5e",
  "key33": "AqhVZpsAQaQ8PoXKdT9yPALFb1jWFV8uFSi1L8sbCQ9gNrums1eaka6eZXgH9BMdTi3fbUU8GYt7vE1jfYhp58p",
  "key34": "5zG71aTxHt92ksRViFk84hhRd9VbRpw8MBZbBxU2HtdAus9aCZffBCq3Bs6iskHgWbfGzzryFY7qtsa73FHBwrb5",
  "key35": "U9FcsGq3RytNs9LizeE2k4fdq6FqYvhAzMvhBrZCNi3h9Cgv7xNNzxxTB1JUZ5MSFaEbgSAxmgKJhfHbUcUi9Sj",
  "key36": "4esNabvscZUyPizMvXjzvNMhHNwA1vX7rbAiMa4hWjebAgiRe9UFr8Dgh47Nadr8fRsutMgbdHVwmqWu4hdQBQzS",
  "key37": "K9Zy7eq5at8h8iDdQKorTKN8wGGULpkaocnkH7dM27CLiUbYzT8WYdAxqq4pPfPEttufYHiAzeP4Vu8Zp3inxQt",
  "key38": "4YH12rndzFFdvSHsBNNMjrAVSMrXxJmM39gBaHV3RJTDm15AKJYm6GW1EUJAX1hqyAFwBWTYNLoturGz94UHcn56",
  "key39": "4YwST1QVKZd9Yb14nd97PvJQRG5nLCd9rRnRzatVY1po9rfRTPmfPNJkvEo6UmD6bcpaoaSeKa5Wt9YTfevdBZsq",
  "key40": "4MbAbJx6yutUTrYsmbRbdByts3sZ8Y1nEC6LNNwxEAnGPaE1x9D3jorJnStXbsdvti5rm6iuKXtykECjk44BuSYm",
  "key41": "4fN8STBDsZHGgsj7yvCcsGLZEfRtGVQ9XKfY7frk768uJovcPmiKwoWcq1U7L8pgLG8UYckJ2R66vmPoU34VSfop",
  "key42": "2frojSMwA9wYH2AyTz8QrfjGnVrEV8iSauGhnxPe5G3QbcmFcKQSUK4PodLeHc9ig189hpn8hfjX34jBBPp1G5ra",
  "key43": "438Wn2iuUaCUq75uKAsJyM6nCy7MtvqD4UzyghtMGaVaEyBSzGfcj7YCgLgB5goVuMtvDgrq7TUZYnepok26k63a",
  "key44": "mBoaL4tyXDc4ubrG6YAwkKb8AMBYZoJWbK1iFgpp9jbofnprAhKHZe2pkD3qpgyEsqokuE4XFFXmwQqJbsodNer",
  "key45": "41CLfXHDAF5EGRjsqngoFYLARBj4KQHGFEmKgbxrpqhKLxh44yenc8d3oaSSe7FZsGoogbnMUKmzVLxi92uQiMMK",
  "key46": "2eGhKe91KwdX7jazfLFQQHMWNeYqBf1dtttmxVJ8Rusg8qaJUJh8dYPX5TWNGfBgWTvb6jR78vUQTcE4g1VDiENY",
  "key47": "Wa2CFJzz74KP1hQgC8SNCy93svKNa6qhHohLYedxqwX8phZvB5F5NnekF6YtttSbGJokDdmUTKGpcW2vxDLfZ4z",
  "key48": "3r73L84Aomn6Aid4Rz3bknMr4uxfCX3Pb4UZBht2jvaYXZe44Fy29mkqU8x62wkhEVEgU9TVPE38rrFk4mLmpUTg",
  "key49": "y78kMZVrqp79EQ6SXQjmJL4QEsDZFqfB7t3eMaDUVL4xeAwvjFMC2527HyqhaXwQ3eAebzThsnUcm58SV6UN18T"
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
