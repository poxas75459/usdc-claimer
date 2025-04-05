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
    "3ERS8RiCxY9KeMA2TGvzcEUiUDKzA3WaaxnrHddtcLUa6hzq42CDLBouJYS3XZDMyUFLAnTANs6skevbjCqrwpCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p4hKtRuneKHa9yeKZKXGARwRXftqdCHUYWEkCsVF22qxHA9zLWuCdDmXZxYpLAWAKBUiJrdfq3CCHn84FdMdFdV",
  "key1": "5bMC5F4LvLnS7eS7W8SJg6xgBJoHntAGy78h6TKXzZcbeKQ9TJ34A5H2P7Jy3r1rNDNwJmdEZXAuRuBGdvh52Mgw",
  "key2": "3qK4LrDaP1QqntE1gYHk1ph9SJfthzgSu1JQxR22RmBsfQBq3MknWqUxZ6GjvL9JpXFbW2znY9ftz4e1ZwmAcFxt",
  "key3": "55KcyzKaj2x5LqnSYSqua6eTuV7jpx418NnJjRfDiQU1xpa15bF6sBuDp7SRZG22Uk3D7MZwkw23VscDmGq9C8o3",
  "key4": "3DkrC1yAwT19i4geQhwh1XBRtAuPatEkq2N3CYVfPSqgWmdSTJim38NUanPyWk3727FFWkG2cPvbDvjWAudunTde",
  "key5": "jZrqQPK28g68jxGiTWCq947A4f5Nrc5dEBWRcS65FoZjWmUryJn2XQhzBXFg81MznWRZcKXv4wpQarnLko1jKYZ",
  "key6": "4V8zTL7acPcireTTD3d4ppYqYUosMvJBPwDYLcA5oeaiUidnuozyaR4RYYo1vaa7toNazENJANVima72gTFUZURQ",
  "key7": "4jTMVoigCgErcDptgHoxrPHTMCNg6ezFY2JPcE1Fz21X4KKv14Kxrmd45SjF5NtaeNbiFqdNKtywpgygZTpXtyg3",
  "key8": "3f6GBf7fp7ihoz9LXfdsrcJknXiLNZ4F78GVVNC3oH4RmGS8mXAPyNyL8QDCF5xYf1CuojfDH9VEcUEm3ayeGXKT",
  "key9": "DBjSDycYSGgZaxGyd5oWmauP17cnnbr67ATFMGbrTLYQFr6sZ2AFMJMTmkGJErkJ4JH7L28LAz7bSZxbmzBuJ7T",
  "key10": "56Mzn1hgXocRh3QvyXBTYbs4LYurBEPmffpwU4Y4Cr7ywiAb1fgizoRAGZx6SahH3KZ9hNjXddbfprKbiyaLGoDD",
  "key11": "2Qsf7kAgweK6JKeJYuQ3b5GQHL9Z457rUB7cNmkDrHDVTYVPwZoR72q8Xti32MZAvCJkCx1HTadEgEr68urK3Bu",
  "key12": "3umZZG9YJzArXpSQXXzL4ZhVj6DuMkxvPEHYZCWMKY4nB9avWM2kpFGZw5vqa3AB8FC7SL6kM9E2wt2zL6a7X3Xh",
  "key13": "iw6QGDTiuQuAa1PVFtn8KF2qmqRJNMitb1Eown7pt55FUp544MQndYcNGM7gZpm6Ssu9BvyaXEkBpN2HqJppzoj",
  "key14": "Mu4yjFF8kxQJfHFiYQoB8EjPxQz4ehaGtrLrRV5V2pWuErWHVpCh7E8W2Zf1jFfsYKsMXMuueKfVATcEmqX53kC",
  "key15": "q4w1bRFVGjkpBUiVUTBh1BsQtYKCmjysS449ouJqZm4xWBEsm9of2YooWx9GNSQxgjL6GC4YgDGsGPUxXXVqmrW",
  "key16": "3YXRtw5b3K4AXNFjoimMcbttcHziJs18zLriozA5vjvpHTGrX7XZ7x9LMEZm1WyCJzppv9WtYZ3cnNy8Dh318Efq",
  "key17": "ric4MjaEUNpmvHKqLvG9Rz59ckPnCUSCAfYMFsM2Rq15kBgZiUyi5VPBfzooxxxkobgSuQHYSjwz8fH5vnjAggv",
  "key18": "4MuJBUd2TaKWkaPriqFG2MSAE7CPkLA9D47UKP5oupBgmkLHQMJJUs67F2dxPZhtH3Pncg92q6h2Nt4s5LTCHwWz",
  "key19": "2ayeJwxmNY3zWmmWvsL5gUdDGXjDs5iF6F2vKTxanGzWo2TfyUNYqr4tYpxtHwjncQg5aFYYL5LQfhJnDJeM2GzA",
  "key20": "3oQopTsW16F9mCk4ZjrjeHvmfgdB2aDc28pp53fZR4YxhfFQAkyzYS1JBCzjmQaRECC6FCi7bGUL67mGT77vwK4M",
  "key21": "fAQZ9FtgenZfgDTuqk1FShzGAA7FRPAyhVDGvTv3vtuDfmGEGkuPBXdArK915Uvoan5MTFmJHC7cWGanFAirzAH",
  "key22": "3T2NM86vqgxsVG8mFiNxXPm5w3LwoSonMR7EYQRsNEtdUkPiMvPT3CtwxqYcz89EyXgwZ3XReeQXibxDXMy5rWw2",
  "key23": "5dXzz5VoKWTG8caiHitbg6KBL1FyQ2LfEEgTyBNpaiKiDCjYJeutLF3nqwa5YNyMzz59Mdgw3vPcKbr6bhPeRHC",
  "key24": "92iYxd1M9ykcGBChrAPufhd95yfgyb6ynsd9j9UgiadecXEaAJzyLTdAwT7reDNyvUs4kjcKLWLnBzo2gPWZiUB",
  "key25": "2mEffsATXjgnusUkti8grQK6BC8NKN22W2RgsiZZJjJEmtohbNekW5RSBkh5ZcJR1EW4dNp5vFmsr6nuhXvu3Brp",
  "key26": "4nEYv6VJAdaKFg1MV23T6vcvUNABFhZxBje1QHd7P9edcrPyYrcVHow9v4fTrs4S9d1BQuC7ci5B2vHpcejC8N2R",
  "key27": "42F6XZDCJ6cYTF5bFCoroTVgK24QCE5e7sQnnazKsCnMGe7EcMiBm2wiXGonLBNXim6VMmZPguJBgeW2sDYGGAbY",
  "key28": "4EdR67vFgsy9rfaXJSACZGrUBhUs2TJ4g9SFnaR8fW48BjDE8qpTBJZgaXMaoA9CR5MAtZNJddBum3xQ7Sh1M9rq",
  "key29": "WbVN2uzurXy8nDcpYoyvgnXTG8ixAtjAhBAGiN77yY6XzkwP42d2eycLatqes1B2BD3N6HTRK4azieeKzXZVsjo",
  "key30": "jY8aee7D1SytKBtz77BjaPnq8QnsMnLULE7YcCBctnXRn1ijZAbhraB6uemFtWTuqKrTFoagMopARTrG9iJYg19",
  "key31": "kikNyb5xTn1qUTTAjRCMXE63sV1EdM9iSHbtUptzaS6HxHXUD3fDVFjxfaCYNWDZ21JX82xXXdYpL3zmWV3kay6",
  "key32": "3BVS5iHQfGGizCiY59Y1uAs7JVR5c7dBRJrSx7k8nudUKLjs758Q8Gzan4giTYQp8jDoV2PXfR1dbdTYNfyZMuWu",
  "key33": "sDfMumNqjEbmW39knPMrvt1hsqb8u35PvtPiHn6sNfF6cPLqRFKqZMVnRoiyJJ5FkQqHqsNfdSk2WxuAQZXFsUv",
  "key34": "5TcA1Kfr8Tu8hZGZGWSfg9oy2GRzgLhSoWYprGk9gEAzX5pUnuuufML9Y9pnsvA3EcX4hEHpSmWFe6GAx7WGaYdi",
  "key35": "29k8QStnvLS7SFWFammBKgrdecuT4aJxRPcHi65u8Eg63frNVaS8Ys1nbrY4Q3CAdaG3PTJKT8TuFkoYsMJpZG9d",
  "key36": "66uA6rKEqpJ2csdtgnDrvZsUap8zamXFi7PSVwUbogbZB5Va5xYhXgcNem7ySyWpeXQMUvfpiLEUyazYSfk8zFsX",
  "key37": "5cfp3q27c6bTaUvw2ECvmXnH4SGq5ctuYVapDpSaDSDTSUSejESmhAGFuA6Jwpwurc8zPd5CATjFaHhZMFxhGLKV",
  "key38": "YLpCpNunEe7fsUVt5xYaRey3iMUPSv5ZtPtjNF34VidPxHrHtkcqfPUiULiQ51xSvQxtg8qTKwLEgPwewmoz6s8",
  "key39": "2wji8a5Sb498ThRyf79SsLTuxLvCTm5KoxttA6ZzM55kvV8B6EvzPxUt1TXQJsnYnQZfZheqb7jN5RLnDKhxHoZF",
  "key40": "5CbzMHqjkwsZkovYZxvQ82mtQfVRD4Watyp3WsGkkSunQXHPwPg4Q62BKBEByQCz1YVsp1jTLE4vJymovHooDEDM",
  "key41": "5KbY1CSSisFhL19MSfoZZuNtpZ6227bFAmqK9w6GEYYFpRjpdTrqvctJSPRHxFcVRRDbHNNTyYWjeZiKKzCdSjgq",
  "key42": "4udmDQ4Haf36gmprYHVBbjzPebTpoBBJXbjBswS7h1yqfWquaXQ73RMn2afNB5WvHpzT3xR98GCHqkXJATEXktvi",
  "key43": "4TLNysCARXASgWdNy4KKHCP8FvF3nytrSvM7PMhjA554CrbQHGkV8vPe9Q1pEFqcNkjSoF2S1yCbjHjMTHrJDzZ8"
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
