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
    "5pNM5Hq8ZPphxEBQSnXKxrp7t4SnpCELX7YrhU76t593oPkfkh2bt5zPRscmXVLk6eXYx6iU5QJHHiZZK5qcfEr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UJ5e5QcUG2BT1jVUvNKENZHLC8puoDNnLEnxsp4xtsJ8iH9dEMrKYeVtBgToHKbLXxb7UYdTTcn7Qzur1DMyMb",
  "key1": "3kDbMFu7f9Rd8rAQbv4x52MYhfj5oE88ikq49vQ9gWmwjd1sXMnoCQvVhrbx1et7bc8KUrz1hezrCyk4Xj41PGGU",
  "key2": "3CJa6TUQhDNNbKYnovUYq94SpA9UcPHG2s8TYHD5AmhwGeHDHmZ1FHv8zhwjxDTaUmS1PCALEb8h9MXojkVVNJH3",
  "key3": "2ASTQtwdrcSK2A1eAhvuV6bsKxAn8ATTXxiqKSaYM6CMuGDiUF9NFm5SQWfpb3j3MPasAvsyzQJVBQBR9SiHqgNF",
  "key4": "3ifp9TvbzZWLhydaUmof1Q6UegD6JwU3DHAANWWrHbkP1TvojzQBwwLKy434t72GQfAkg94TRRatXjsRtn8JSpM7",
  "key5": "2fKnAvSb6xo3xmp9noZZ5YZ3oaaX2PWtKhK84z9KD1b1RJPyyL7d78hXJf3USduMWKkEFfS2fMiT37aitqtqZGMa",
  "key6": "4PC5qmH8vYCwQ1p4RZjuks29g1PAracYWAkHjnwNamRQzUa2R1AWwNC6cQwTL1uyeYHsZXQVohuGA2QgpF2c88UN",
  "key7": "vymA5A9XDH85cuddZdLUV2ZLeogHWXWawm86S3dheGWPvjgroAPZywugXBr6phKT6rVaHPzLYfufGw2QttumjeM",
  "key8": "5KqZEMq42EdUEtFyskHY6rJSGoWDeCFg6boNep2Fx83nKKnZaMV4PDfUwwpgUVCvU54v9ZQYrUTthjZdQqWNMXg6",
  "key9": "2UJFEVkKWyti2jqAuGicdYbhHhYjW8UxRNsHPGTiZCwmWNHGnpaGKeugSNXkdfi5f7WZnvUtBgYVv9mYRVNFmQFZ",
  "key10": "2LrodZKR3Lk3dsU52AiURBQrLGE48KGFphi5o4xLyajxrG51TW9MHLHVKikhFKCNLezV2hT66xFrijWUKugmXame",
  "key11": "2H9tbos9JHdN9o5KC1mu4CFFryBdLzBqU3AavE641SM9xqQ65YXj8oWgR4GDjEzdnu3NPtsu4exHhbe5UnJQrWPS",
  "key12": "HsQazPDkiMwbK67JzrwJLcDPuszJGUu8Aqi1ivRnVm3rw31dtfbQkhKYmruRahvzR4SPp1Sqysy34rfDCTK7dzg",
  "key13": "hR4gyrx4nfiDN7Ne4akVFFjN8aasTd1xrbgv7AK1zLw4PFoNFYpwJF2utMtB1tuPNMntEeWg5a6wkRxWnmFi3KU",
  "key14": "y4azcasxdH3JDvjjBtvCmXRP17vheiPZzYCpKgoKaX4Ssh6CWVPPLJUpjXx4jvrY236e7116GEBnAQRYoncwGMc",
  "key15": "8cEd1XT4KC83f96cR165EMN48o7YiYchvrMdovkdxTg51R2eqGXcdgYsZzpkCLiU5PkvgqY1beY7ekawN45ZR3E",
  "key16": "3WCXm2Aj54LqBo8E275rCYmRiW3Yiw1gvGcjGTyDA2ttLrwVfJuDp5YuhbkrU2QpuyeR68MHR3KzaLU8QHckprJM",
  "key17": "5r1adnKAaE1Jc7zDYnvoCiz8djXWCUcrFnaLzW2ihb7g4nUF3ACPRwu5ZRCgJV6kDMnYkUbgEK6eFKa2jJ7PAx9G",
  "key18": "36m5sWx9iifPzrj8pPecDU5dj2ngcsB34pSDCsjcVofaBvAyT8Nn7TPwco2Y4QN9DmSEg1DgJ33aKYsNYNHuvU3R",
  "key19": "nbLCpf371Y7Cq6DXLKdU4zPr93WQxNfL8LUvERvJmfBgqM2sKS5eDANGwQqDbis795Rg6CBDVPzCxcTHqdr4p78",
  "key20": "2tHVtPRiSYsjcikbmyxUHkK1mucKWWM3FfeRbgbHuRsqEeDwrSPiugYv7hvXZR9APXeTaQU9C67H27Zz922EayTJ",
  "key21": "3qgvdzspHwmmUAPzJ5wJbapKFrqtKqziSM3SoEFRJASMa77A4PZJ63BZWaoC5Fg6AGPAXnggGgfa5M1JjgCvkbfH",
  "key22": "4sFSxo9L4MgwBsj8njGBvruCTAGoyj6PHvbS7SPTWhLBFsXjkKEQbgvt7ZbEYktgaitrjV2nxB3VQvJ4uKSbz42F",
  "key23": "5FXaeESJHLeXMu5Y4cyji8u5dr9uCKEfVdjnUwVUUQNhcnVv7Pyt1ExtCqxuEQCvwKBtZeq24WAXVEWzPARP2uT2",
  "key24": "3VwQ19eYt3Pfgnvd7WGHoXfgipFNCkTfr7pRXqXGxC3fbFMXM5ueCU948acBeu71V9dVDgkkRbUFpnZHgg4cgXxR",
  "key25": "3MpGbESH9Xd1xgXQhTixpKRGJnjgFUyGCSLK5SeSKUxdCKMeNeg95M8qHguQ5Bc1cv4PBuCd9XRTjW1tqUbw9fbj",
  "key26": "3WdC3iGsaUjWNw6VNfP71HgvTXRW8xYSrW5BQfn1ZwtvbvNhH4wARdg4CfyiMSPy6UZLUSmMTmSofzHxj1itKw6a",
  "key27": "67CyTWv3fhQNDLAX2qVhXDEtpQdWfAvehfG1Bq6XZqhQpmADksfsFovWxbVkfKK3rHe1eBHUfzTNC5ZmDL7x6Hs9",
  "key28": "3G49fy7cjWFbjd8Bf5Lw9wBMU3kLEKQ385tv9kS4dJVVNV9h9PSGGh6dyJMyuANxoBdsnhPwAX2ag7hm9z9qRWp2",
  "key29": "FsQS3Hfa2o3yA3ioHvizhhYeb9rzYzapHoAxhNHTGV6GCRedNk7ix5S2h1gTTSwu5xSMsKkKKjwso2YnG46Tbbd",
  "key30": "46cHLAVXURgqdDCk2M37gVQxE6X1JzHfeNYXD5TDbimJcq1QkRifEG5HPyBYSSU1XjdyrrA1QCCHDoYzYqpYmAvd",
  "key31": "221d2yYwGvBnaRuGB6XPEQ6AgeaGzaYkQvjDjV46tdcPQUAHtussJKyS9LXTsfmuuxhqiAZEXv2DT4h9cKaQ58R1",
  "key32": "4Kj2UAuaeKeJ3QQ5YZDFeEgTYt3wHJyfQRc8hGCnvZK9Msp6JHuCx55YrxhtPW1sr79oM2qsGwR4hd6gPUiQddmt",
  "key33": "MdNZ4hHMXLNupFYoyJSJTXgk96bFaXZjuUtRjHuy2ihcEi2TygjSb1Ue9ob3Zex9aS2q8gRJRKc3V7PYe72zWs9",
  "key34": "3Zqmjjp8c6xnLjsy4SKafijon7ymU8MRLyXBr4DSkB6HLbQo7T1B18B2VZm2RBEohDTEQriawgGvJvktgtVdAzSx",
  "key35": "2M3dLHmwPd3JBWifzJNaDokWC6qCRzRjKz2npWf84k4S6dHYv17gmQuZSadffDdDJiMmsjpasHamzHwnNW12Hqyk",
  "key36": "5DQXqnjf8rofd6TZ1t9ESxE87Ne5jnFmUfPXoppg1U8igwHQDSEiCkCpHR1n71XB5UukKZHK4QGNjDPBVhz1MwVf",
  "key37": "4R9BACmsfSeDCB49pZqN15DSa8bC4SM4xbw8ecDo29cyn41Wqku7nzJuirQ4sPpK9AA3YoawKGxMFJz4rEFFdLzS",
  "key38": "5ip82NQceaZFQWGf6sCXsH1zFRiEcuzXckWX3arbpbDsKAXmNoC6R1516meaU77AfzxZtMc6BRyh23T7m1ii4rp4",
  "key39": "6CycBWrnC8MdSdhWJLjGQDafD5ow3TuyVsF6m9Gsb5U8mwqkL21Xzf5JF6XcjypK1s7kdpJK7PbkwkccoAD17eo",
  "key40": "5PS8k7bCVGpwmPiuvVE9wXx4txfXgyrK4fWEy3ssGoDxf5ujyCgPMn8J6gxA3qUpB5jwtt22RgDy72PecuMSarYs"
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
