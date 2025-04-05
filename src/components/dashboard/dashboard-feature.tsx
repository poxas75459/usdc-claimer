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
    "54AoZzomr7U4JgjgqXikWYrtaLFz6U6o1GTX6GS6PuZjK6xbsQNh2LDm5YFyenQUsnqMd2psVhLbneHSjiJzVS44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvN4fRJyBrUtgS74Eurh3eauyN4WV8qs4MchBgC6AcaZzmXaW5NSq8Xm3mExD3de7AsCwEgT9wSJLjnQnUMRpm7",
  "key1": "3i8MYvip3N3BmuopVk35nYz54EP3u33PVAQgam1BVAXmdCY2pGg3iKaQfQeZer3Tg1grkeE4gmzHPHczGHENEfbQ",
  "key2": "5tYdxfEfTCkvKiPXcrbiw8Cj93zCkBGd78qbofU8bPkVh7tPABDLWASaRDHPK9qaDkPHHocX4xwfSH7PDHKNu1Va",
  "key3": "32PjK5Gnhbz18N6daArBvpNrrmEC1Rc8wnFz9suhjn2ZoureTfcaSrwmSsorveMxQSWRPFderJ9tToAuVR5vjDJp",
  "key4": "3VgqSygEY1mmojrQBZBRzXHXXMHxTC2rekLUN8KTfRyDy3q41eu67B7N8QucEQdBNgLGGYwXEq18nAwQcXR9vzzv",
  "key5": "58mZviKKBrwTrgcNKdKC8XBZgz8XdKQV7FP7KyxHWkiRF3h7CHSnsPKSPozDBpGcgi2tFjudVB2CCWCoHhAthHzt",
  "key6": "wXWFCY9rSosDFG45AuL6RbC1Z1FDa3n1QqJHdYjBY8YMffbN5mKGNiXF1kxEYZaW5C6X6AWNB5AJFiHBifCDywR",
  "key7": "2qWCmVfzusXnjhoz2SR7jJsmcHi4MVB4KwAtxNHdu74gUJVZAzMiaVxWcaBu6rY8NsLgiKX8gRjS9JSS4wvcL7jA",
  "key8": "3if6DVhpVu3DyCuWrpwS7QewxdKDKEYEmYUVLQJs7eWtmpnuJpxEHByy1XGBYeihFvdF3PAAocBbM6chGmiooybW",
  "key9": "2b14TZPkV7FAfzD8HCFiLM2vrAeJP5ZGNm7oUMFmrpTLjMTqrtGCCezZjkvzQxjpEwKxvxQrb6iSowVKwp3U7ni9",
  "key10": "5X6Su4ZfbB9M2Br6PopkNHjAU5t1aov1rzaRHqEeaLeajKrasbSDNc6DMRBUn7hd2LJXf3Yn5UQgMen2UTmnmwAD",
  "key11": "55e9yVMAJ8r9feKRcXKKVehy341rnmmHCKWtp5fTPngBRqXbKXLhXP5dpLH6j3Q5YBhCn6Dg6yBzRYPHWLWYRu4B",
  "key12": "5t5WRNGDhyt5FLKkpnRoSTyuF2XcYyKvUKynf2ry3JdMDfwMzw3tUV653Gzj6K3fimFp9jsQjjQ2j4NPCzMB4HmX",
  "key13": "xuuKkBs6PkR9KcBRuwXFy7W1cn9az2Abn1zNRVu8Mw2PMD7WPUhGYXr2uKQa6aS2RxTRByUoVtu7YWxn1QbuPVF",
  "key14": "3mMLzBHtV2bzpxiHUE5hKwJgUwcjB2zcYL6F7fieBLCsUjTrdv6Uk4rgGt7bZZwELDyxnX4dCj9fBTNs5P34has8",
  "key15": "4BbU1mDJaucApBqXaSTwFJKCFPwroLtUFfQfvmafXbUQ16HRHK22Gthv5No7MVDFFLoQF8YLzbzRJeYqwXV7NiFy",
  "key16": "4yo5iPzuKXm4DjP2sCWUva2tiM2xUvPLYUjPhmU1Y8B3M8kWc5b2CcYKtsoiqUo3mP8Yih98vaPDJZnLiqv1wNoU",
  "key17": "4iNceiPLXPrPU4ysLVh2utJecyqigQb1AJqCZsqCWFAujL4YuEnA7t5VNofhhtSFH3qPeeEVCW88ZsrKs9EJ1c8f",
  "key18": "5zJ5tcfGxXdGUpBoCJ1vETuSTcFwfy9qePQ792nLbGHVC5U3fVpZojsoh2BsMuR9wtLFNXCApx3rTtjTtSRqcA9D",
  "key19": "2d1NFWkZVkQ6EymWT23jomVA9r4VNaDqhdejR6aTxS5sr8EqFedCyoxMyFt1AuYw1EhujZEynGcrNAc8mcMhfcrS",
  "key20": "3yhiFxRkXuV4WhfVno45q6F8o3UvR28nhAhTeDMooSX47zPPjZSMJtBjrL56EP9sLAoH5RYrdPM8mUFBssaA3PcX",
  "key21": "23tySQUYvRpo9aQ9aHeMM5dBPFa5Z3cUxstpqJBkMa5b9nyduMHjqFGBMf3VuY4XvajLGXFjdJEQ7oUzwf29ugfU",
  "key22": "2xDFzzuFk5kUWx8hBLLusYV9fPSbfGSgEDQqo4tneGUGAjaJx9dDVBtxwkh8vRh53Bm7C3gvBdHy1i65ur7miy5R",
  "key23": "5aQcn6iobjogmrfB7hiXo5XszQmp8KdTZgbkHRL6zFbMkeU72pTvRDRMA5Vx1JEYVK4c9ZaA6yocsKTzek7mr6oM",
  "key24": "4rMDacRZRUZRaa6NckWktGBhHAgxmXsGsAepgXuwnPLJGDgbrq9DE8XtBP9JP8bvKhG692YTHEukAs454gQ3N9MW",
  "key25": "3qc5qZPMnD9nvnYyfv8yqW9zH4yh2rRTw6919wAWdacKXJiJB9c5BxT2uDdRQ6SRkNjZiLq8dquhPpJA8gfSqJz3",
  "key26": "MkGgBzZikKLfzN9wDccfUJv15fN3vn9VED74Gt7MNJKmjLtSXfHH3uHXSuQ71pZj7Cq6ETB5A1kCdNBNTJKBTcd",
  "key27": "57CA5VaWpTCaqNhkVE37qfxSAgCc9dCeouLHxCkVxUepvKwU2y1k2MTGKXmLvZScNfNhVDoiiK9H5dru3hD3sTLb",
  "key28": "Up6N7ncXHpVksRYhoxXqbTxbhuavfeNY6ss6bnTb6E5DJb836YF2uZK6znMa7jVBju26DmTM6byt8jBXjjnNz1D",
  "key29": "4gkkK3e9DrxGMaV2k3eWijKd7ELc1FBjQZYTmgqATEnRj3qzBrHaTnyHeK9z1qJaCYf6oWiQoYty5vqLpjwUCQCU",
  "key30": "22PYXuLRsVm7mkZwxH6XJLrhX9RX3zXdmmWwF4ecdKDw8bdQKkW1cfzKTnq8mu12wEGVSBZFwaLkKVEZcC6T1YK9",
  "key31": "3ZDTsF9Ha8WeNZhRvobrZdw2BtXHbxbD63duaZgD4XkVzTMwEhMawiU4ST8dZjFHp57DBrky1rPFG6ogrm76bSPj",
  "key32": "3hE9PnxhrpXQhXPBvcXreayFyWS4L8gpUNgM2mP4JzDpyHXYB6LtnxapiLDBmCwBYctJtWtUY2qSnn6o4PE9HfXn",
  "key33": "2zS92jarLv8whB1eC9fGvnVGAZ7FtMNiF1oHyWtWpVgZMhM9iN1rLBc9yXFCq8ED9rAvg76jwpaRe7ARSPApUhn1",
  "key34": "5FMacQMKaLoSVem67eSPVJEgFp5jL9c6F5LajaQJtHooKT9Pn6HySKACCFQB1qghFoeUKnyUAXnSFbawAWZyJ4MA",
  "key35": "ZrjYALBGY3yFcLNBkGPvTY5Ysgj56ut7NJvbKWjfgcSc4TzUAL62ba91ZdzpgfXJJ8Ko1d3g9QEy9q3SW1sgwLS",
  "key36": "2CLj2T23iGYSvzduLrktvnvQdXkvkri15CuuPXM715uTBHZk4joj1PcCyRtnGpDgUqwKa4cUZAaNpdGAySMajdJo",
  "key37": "krGE9Dj7WcQHYGXxWob2VpahzMvFKw2yzQZeZSQgt9AmGFooxpWGqXoojthzmoHpabfuQm22zNsNaeMrtbAkkUU",
  "key38": "PpML5ZxjqpcnC2uFCxH5xwk6hsTFrU7thtKHBDGytDfDfHKHTz5i5jvTvTvP1hojkLWHBGqNRPp7PQKNGX7U8ER",
  "key39": "34HaYh5W1w2VscrgTmyER1ZATkpZ416yGjY2nvFureerUERKvV3qztDMJvnWbSM4NcjtLaK7g8J7qwjJGuNLCWLz",
  "key40": "3a8zCaV1Gxmr1EYazP99cE5LSMQ7DLmA2ZnBYPANMpVYeJLei55voNPGWKBhNJxWQeEgK7z61G58Xcb2bPXQGY4X",
  "key41": "237uqj7ogvo2qtstKHT4dLmKVNN5nXiaKAFTiE5866Tfk16LkMXuvSYAFUbd16JgdpqYqB9fDLk9uFxDSE1fWKQ3",
  "key42": "3dgXWQa6PUjfWzZr8a4bHfeDv8nzuWaitGuNioRfMMtAqayvczE8vqv8RWMvvVzSzZwUD98cy1PNKkTBLi4i6cf8",
  "key43": "56tv6w21t3NV4y3BkLpZnHwohnYzFYwpwHY4BhH9vtT7o1X4dgh8qvT1KZ6n9vzBaB3f5H4sFUAQH2QLTUwUpPry"
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
