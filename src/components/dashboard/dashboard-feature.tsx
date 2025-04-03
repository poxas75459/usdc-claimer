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
    "4Z8JXo3bTNxBu179Bjy2Jxcqqi7uUSvduXAyeU9yU5LQRPF9psLg4Wp4mxJdueqRyc5TrL7qtVgRUvSwubMSyU3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ak4VozksZJkvSSQVQ2diFiK4YYeNLVDkyYfQcLAH7B2rzNNnQYfp8KAchVYj5ic2hMorWMDjmFfNsh5gXFjR4CW",
  "key1": "3bNNfe3rP2C2p9dCnieBiBL1qVssWXBVQPCNMW7zJsGp1Vwgt1N41w2tsusPDpWc8xbK8TBFy8qDouo9pkHVPvyi",
  "key2": "466bKsB8qa8uWLkuqxRv4WDJLGhrq49JdXcJgk91n6wigcKcDwq4yJdfMTZEjPrh32D2T9zJSfNS46j6ZPdoy2b9",
  "key3": "3Pu6AnfdMasmAnNKKMTaKLCYGRxWUz8MZzUaa52miBhXfJkNNDvpxY7NMGEYaAYKJUT7mgZ3QxxgWTKwn9Cx4JwK",
  "key4": "3dcLcF9fxU4jxBNESK2MnFZ8Fbo3rcq78vkuk7noZLBRBGHesb3pK3gm8FdwweCKJW6ZYEm33TRiCyU4VVNii1mQ",
  "key5": "FuaUmMZZaFP32AXn865CS7Ba2i9Z68JB86CTVJmDLcKJhV1nGgkYwEFNMGtoxFBEFCXcswwER5Max4KaPt9USuR",
  "key6": "2mxeqUVTBKSnAvj2fvWgstW8eC8DJ28DWxXMAkkNU45bMmiy7opPDVPUCbbf5oRFj3DYasi4LzdLESLoW2yqWi4d",
  "key7": "3J8QNxHoQC5SyDajE8m4XHZnNygkm1GtMLGTRE3uMPZnuXcXcUgWEDoUhr3gFnisY1RPhiDWSfy4FTF7LNhB5JYx",
  "key8": "4jk69vYTFiw6QpMnqiJvDyvVYdKnenLALoUw9F4NjDs37MqgDwF6sezEHT8LfDBFswv9SJyBL3su26g9PenAndDd",
  "key9": "5w2PQhvCuAgcdDErhfWH59LrNpiYBtQKc4Aty2bCaXLxoCZ2y7A5mTEo9wEKB5ET2eAFdYuVjxCtYoAYgzKmUNq7",
  "key10": "4paVka9kpzQZPBJyUCHsAEBbeFNsCaGjJXYUqK3WMD8ndwTojScBpLvrp97iFZHQa99ynJQUyJsHoZQLtwDqSTsd",
  "key11": "4i3UVNbVBrB42zTBU9uoSsSXzAgFV7zkTPkmPvMLuB9LfrzA8V4CdyCKRCwp2zztKp5K5bFgMpsuCDNC6o7YkYps",
  "key12": "4f5vLXnwFWynQCGbzMYJzKoMaksrm1exrnnX2txfRa2qxuxjtKzCgJLAxktyV3jSR2Tpr8cFyWCkE9qobhTNHqNj",
  "key13": "4vYFTJ4B4xWngZMVmijRhVH1KRhJaWHxcFL1UW5jLewEartn2BPLabrf9EhQ8Joyhz2AMMfS7H6LvPWKpD8NbAmo",
  "key14": "3CMN8YasJvMnNSNxcQ6gJNewqoBG5FG8EifxiPvyZvCVfc39VSqRVJvF3ACjTnmhDgthqYzrdx4FphRKS4vnjJnJ",
  "key15": "pGWULRXxVs26GEj2dk63WE9Pg92GLS56osgbBdRWxsG1PDV5a6MMqJpm9ML7fatXntLXe2m19p4XF3k6mFSYukA",
  "key16": "3sWKWsZG8BujkzycPuwmtYonco2fdWH3D3LHMt1icnUfL9A3Q37XKWC1YN9Dn3TrpuBFMSEUJUjrcWSxFD5UGRxH",
  "key17": "B4ephPjLKE8jSgwQ8EZRvmCnddsFNm1JukZmUj5bHgwhi3pkEcDEiBpcNNb18eBWhoDRcWtWawvECiZ7NUG5m9s",
  "key18": "UM7t8o2NWPpTzsw6Kh18sDiLWgHvwECEr3zbJA74xSvqbFQybqVFkQfnRZmZQ55sA61NppG9Y4kPE9FUtPKBdum",
  "key19": "2FeXjdcWdyndtk9pikKcL2pmDwCmWTWfusV4TDMoS8BVfudonWfTxrnYLWgfCis4xnxHrfE5C14bi1Ct7MJwmcoj",
  "key20": "41MmgG3RDe2AdX47SHFybDNbsN52tFwxJjU5GaicJNScevz735WRzwxK469hLBdS9p4eBZmNDUESaQSaQCfJcp45",
  "key21": "57WfAugYWanZY4om3D1wXYwVfEi3K8rMcw4Z5ACjk45bR1Ay3aAhL5u6fooYW8k4XEP2dEcow7roCY9Dww9LpWdu",
  "key22": "5JPMK3LEo1jTd4KjXWEbvyjL5WrhdqFUuHfv3pifTy8MohfDqwvPb3GDSJcfXKF7Du4fT6EsaxWVWZqCtEiwEA6b",
  "key23": "2KbrVBmGuinTF6ngovtuMXnNFRwuWLiqY1zPk1cLwJyM8Wh6sjmFysZ2g8wYaZzQzFya8Qf19rMCthpt4grttMBq",
  "key24": "3mA1F93pA5ZZ7FAXdCyoMKHYqaumL6AQJNf2JWbnEy2ATFYudb2yFd42WKq42r6xfKZUbcEUUdVkZEnC78DAx8K4",
  "key25": "5zUWtMJUh2okGfKPFae4bDfKzLr9DLT3wXY41TV4SbFvu4tPQTdXFMSBXJjHr8tTwRxpKeJWBhtRgZ1ynPJ6K6Wg",
  "key26": "5QbL9SUwh4Qy17uYqzz7epQgZXLvvaEbFStVNv6QRyuNcaNRWR5wF15Ew6mnWZ2RFmqzUKFkc1Bpw95MsKmHpwGn",
  "key27": "rZXNUDjWQos3pXJVB9KJpYgxnwZsbrhpqCcxUje1eMvHPzXQNspupxCvXRNmk9azEqdmmzAqy9vQgeVBh2AcSE3",
  "key28": "3gNjWndF8VG1aTTBpWgfN7R3vQyd6xx1sooFhVgEFbvS887HSWFnkQLYwh1xKFa9Em2JFAk2tPJfGYzaQb4DKf5q",
  "key29": "42cU1YBofuN22DcwhhBfDuHy8vqjwfmruSnh817gQcZR3pidQPaUTGYCvQKENARL2GyzkeqCqgygHitNp416vv6R",
  "key30": "2MPppD3U5LYBvk5y4n5fdXJQGpBRL2BgQappx3SJ3fMfiQYS5TScYzELJh3ukopHHMmevgSWWZF79vFdyCwPFdfU",
  "key31": "cqxuiQMyss6jHbowVjZYfyaVxf8eUyUVo1BNa6Vi5o5bL7i5GNwV8ZCrbB8tVgQ4koj24wZ5Vjej5USd7vQP78d",
  "key32": "4uHB2DPGCtdrRNyz5c7qocuckFKKH4nUgQudC2Gb7Bg1aw65ygqUiHwH7r3cpbdg7PKuHyRzGLq987XgGTdLKKix",
  "key33": "59ki48m4BDWXnYtudz9EZAC6fDqQXZfcp26Z9SDWAt2sczD1BgkLgbicvxpw6ZNtk1XQt7mbh2741EE5g8z9kHMH",
  "key34": "5KT9sdYV12GD6FyM4GK6iTCeyurimJN8JpP3kYAmh7pV2hPAkHdvwqQuzHKHLM3pzLSjw5QyGWaTJUnNyNa6FZCX",
  "key35": "4JA7hnWpEB9nDTC2t4a2XXDr1W7jWNeXdqE5DmnDJJ1WpVGufesL7ywNwMEgPzUARZavXyujSz9x8hy1sbDBnDLv",
  "key36": "SSLVnm7pLDzghTTD69ZM3EzBiFz6q5UXnCbNwbLV6GrgGS88KQGHV5inG1w7vcqkT5vfo3wd3ucStP2ZApijshc",
  "key37": "2zZaWkKyw3EtRvFiEenieByjF5wwVnesBSuyLWshmyB45yUz9d49ncFKupuXKh1PU99ajrTtDYgBu63BhYUbs4TA",
  "key38": "4kAUh2YiEvuHo5bNWCfZhGEyaQ6cieKfokvde5zH9PpriyzrocZPgqeGkzxx8VcNGNhvYu9uhVhAAJEozSGTDAQP",
  "key39": "kx3nahbTxGP6zN1iqQGTN7Lj1xAb3hwa31CJWpLK33bcKhE9oixkGDfgSUKwctoPH2LyUQJacqUpGveNL8pywEH",
  "key40": "Dv8ktc9Wz3fsgvQ4kgn3A3sUd81NPq1AGaBYMy8JqKGnmeX2hXkcLsL9cRqCRmbYM5fpmCj4AbWCGRSRPzMD6La",
  "key41": "49edYoKZAHC9WZQ1pEa5brSjKvEbWDv1cv7SCL4ijz6HEwfR562pZy5tJiEBjBAHMN7c1HjQVFPxuzLGuWUuPeGH"
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
