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
    "uTd85H96VM3yo67Um1PE9J1wYc9ndod1UGw5xVmkhRaKpWntFV5oJezH8tibLdUeN2ZwjahqgSkqCqvXSNWeiuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HqXEjfEV3FpD8rxvhsULi3UHJeKuaX2xBAwxCmd2oUaPdht8bi27KSY4xfXimt98fTur8kQTqBjDEc4SwdtX73F",
  "key1": "4Don4hqB43GyGWt3UuRko3YzDuqvko723CpNPYHbtdaYBXGjqSKnf6Jg414drFAMZg5E2UoVEPpvuSUVRzBNYFpf",
  "key2": "5Pd9igMWbmr8mnhi8xeFU8rZadBveM9i8vwjspbVUD3YSE775AJLudcrXGhvxLHiyQmkuuDWteYHyNmbFXaXkehh",
  "key3": "tAroAGBgZQ163DnK4L6CVgWnbgh8QY4JThoSQszdBHgKunBjP2ma59oz2sv5p8dkTz2i3Rfpa2jH7kWVTaBB2xp",
  "key4": "5zPEhRV6y6mWsdeXYpbyuwmz3MajxSJEfpaJ69jduZuxdMQvfW62NKRF8RgmvQ4PiNuzCstRo9ABxAr2p6zNsL7U",
  "key5": "5kEKEQ4ZzomYB5bbWbwr3M23t8yUJH3q7EQpSKa6cfFFif24bHPqF8uLN7wUum6kZBE6mVqCiuuBHPMjD6u5ccKC",
  "key6": "4AZq8AiRVYQWm1V9iQRwmcNNt7jBh9XUTGjq54nJjEfuiWttjFxbi8APVssrqQjuWeLUWnyEmgS8DK3GeyV43CWH",
  "key7": "2Tjo8g23Fmc6GUUTLVkBVWgtBPW9FGnnkkpC651LH8PxgccGuxQYfin5K22rugBjGrUefESmVAf68U2Tw6PPZxdM",
  "key8": "4eTKkRbin5jvaVuj7Y27AdfxX3VrBUNaqXGyrVa7b4tbm72BVESFMLQpMCo5oA5TMN47mEP3sS757JMzVaB2qK3V",
  "key9": "ubMBADaCyE7Dm9gNvGq3qDd6h2RhYkTKybCmCqAvSuysd8K425Lkpyih43k7K8o8jqJL4HLWmMPQy8DZeriN4tx",
  "key10": "4ntjRLBhLXfescSS2bMmMqrxECRc7E9oghujukECM5RiWSxT1siv4Tb9yhev1tz2goAde95jdcSkHRTercW8yZ3f",
  "key11": "3xq2sdcrT6D91w7WnF5rVKyxQk4hst8UKiqM16tc2fo4QFRxvyNQbhEHZsgtubheP8ZjZmDL4pQzHySqmT5FbVbU",
  "key12": "4vLvFy1EaH3tNabEKLSD4oPEFchnM6WcbDo6qoDXGMvdubz7aWV4fCekNhbq2gXh2WrJEfYEB3ua4bomjFRvRP98",
  "key13": "4q5Mn9ZrwSw26tnnmM5zZUP5XiidMVwuiSiHzerdzN2DDjw8JNzACT2Uq5BGwBNGX6iSxDxGYpbyhfztfVuvEMzN",
  "key14": "3Nv2h8tR3Zie9XiDAwcXweuqnikeGfWWsmGc3jLJBoCWi35CQDrVvYiSxnegQQscbNZsX7p5aL5tUmjeAZQLXhe",
  "key15": "2zuf1VdjL2sg49aC3AN7pKqThML5biGRvufkg4UpozYRdP2Nd5QBzg4MTCXSjXEf5PWeWo7dkKV3mLUhHzBDB6sG",
  "key16": "2Dp7Ef7cdoPUnGayWhk8Enshxz5V39assUh21CTMp2rt1xvVPQUPNjh6KYMRnVr9GR3waPtniooKoXYhjB1bEc9y",
  "key17": "65YGFwYf7UZWhjmWM3Wyh1EwkgkaYkxxpe6MiNc1JoQzAUVUJJ8Nf9CqDX4hWeLPsxCz9sbN4gJSsPcBzhwnxJou",
  "key18": "3VMNsaPZA1EhKT4ugdbfSrJjenWHKWsNXYJ7mYH6Qcggg8FRUAm2oyJGYR5aE2p2w954bJnraDkhkXPaFuyBYuUp",
  "key19": "2E8fTKx3g9VrbiovfbcPBjYYUSNdANtPVb7SYE5Xbo2KrS6Qdib2a1639a1MtWgGpYLN44J24K9WjheKgArreK2S",
  "key20": "26VqDNpVaFQaYhWfpCbuastdHADXnt6g8HzG6i6QfbyNiA4rksYFSKBV5r4Sxq5MTsKJYAetA9mt6Q7RyEcVv9Yp",
  "key21": "2y5F45scJmXwaCjpZ5vr3ayA7bintE7WKJ6Doeinp2v73347LgMJL5ZJLUbz7XNxi8tTSkjPj7PHiAMpuNKiNBH3",
  "key22": "39rzVntbGEa2tKcxwknmFtDsLGzBLinxS8sujwrJ3dAHSn6KnwnuGh5XymhMpHPLBrTBMMT29PbcTna5nyhw9Jm1",
  "key23": "5p7rGV3xDRy9m8Hje8UMsHkXv8osdHMFVrUtVGbTvSXqHNjfBdU4mMhso3DGC1veS2Kb7hQmjW9yqtz5gd7myici",
  "key24": "pTyP8Mf4yt7ufm94snDiNeejVUD4WKuSvPNdPLmxz6zZuQbPhrS3epUk45DSGq81vyPMBRwvcUx7xypi7QPEgH1",
  "key25": "3QfCaYiXpwVXfw5t68JJaD8jDz7URKryUq9A1ez1NwRp651edVkmj5nb3sYgZrGtTaHAr7NMZ264H2MmJhSp53gV",
  "key26": "BgErXwKFCzHUJgW1dJMrys6FHdJRTLvFUGH6YepoEi6qzp6YnsRRbUxM62v1VjXzoGfKqTvSV2PW7SnBAkdo7gd",
  "key27": "jdQrVim8dayHDDywkGJ9AmDk79yp5McSXgVajKcNvSz9g9s5gxn5aEHDCoJmvFsFg7WvzugGXLXVYfm2bJVFjGV",
  "key28": "4QAgR6prwQDUMukLrYStgmtpThNKxDbmMuzF6jyEzZcx6dYCWnJn4wkBrewaU1V5pC9RxtkiSdWXbWvUNRg3dw9Z",
  "key29": "2C9vV2gcnLtT19opGE3FhxP1oxXt127ZbZENcyULtTYqKFvKcYceGJ84VKu9QMK9bkgBF1SLe6g8gXbioftzkzXE",
  "key30": "4jLSL4oRRmmFXepRXoKoxo4N7FX77A9FKcgoSMipc9XcfWw1xDn1z8gFENhqDAK4vtQMTgtLNyfsCBRE2TFexCxi",
  "key31": "2kLvJL3gqwn7BpHqn5YQwWUewTP6WhwZqFkshvvBVu4mu4gJ8Xw8mQuCYevQMLuFMyi9Bpf6ED5BYMrYzYVV33Fb",
  "key32": "213bqMCzPr2rp13AgZHCA5kYUPfrym3QCh9XtWenBSh5ShJA96AtepMFr24KiBwujhny5GUQAkBQotSfPZamit6H",
  "key33": "4cxrWZX9Hgay7PXLm9rqjPfKp1gysRxxzhDzyQenSSVdzAVASkxJB8b6G4qExQHVNS36FstPW756wJr431hyrX7v",
  "key34": "5r9TWvzUaeehH19XrAU8BpkS66qaUV1KxXz8WehYee6Ch7t5PNazG3mUr2gyKpHQ5hwvkYYDa9oLzgitVArG37Vv",
  "key35": "5D6kQBfYS6y8jRTwZMAie5ef4XJQYQQnnUtNXHDxp5KxoUDqGHEFvo4HLpZJ5sAUckmWVa6ViSs29LDuCEQQSC6N",
  "key36": "1gVAjDtLSTzHg6VKNscDShBkGKPpEUuQA4F5vvMA8mktNyacfLZTjMLZJQDhSHdyJq5jypKci2zY4Q2RGzDarr6",
  "key37": "cqEaTowgQc8hu7cvas9STeeu16AZ4RTQLxMYfq9cvFY4WAj1yVNoqUzTLFFTyY54rhU2UwQuKSMV794td17x1fm",
  "key38": "3WRHZrVihisrCeRddhLfxuTsmawbx81vnzNq6PEu96z2hzV6fYXXjj37uYMpSTBihTDaWqEH514t4Gnr9E2fYowd",
  "key39": "5HdJwALtVAMM3ifRydUx4aEX2GsX3tf4R6ig5tvVcrejC8JsvVrDAoX1wgGGWakMqmoMsbJe11gBsPyGsK7SviJe",
  "key40": "2x7KFv58P9C81tmJqyhFnE2HB7i3s8WQgvS9R26ytCn1bSwvLRJwKV6Y1eHJyZK5FLijHF4zmbhcuYFGVCtDKWDC",
  "key41": "4B5MWDhaqkk6HJ6KCgKv9z31KN1LySTdKXnEMJTs45f6D3RfS7odi39cWimn6Nak6rXDfAJqzrTg9N2urexoRC6u",
  "key42": "3UvtC5kocjtVDzVxuHVEc9WLyYLRem9TE1dezNSYzVZByB4AftG8g691H6sPJRpicY2SoKAAhWzgzsAokwUxWRvc",
  "key43": "3ApPXxjPKUZgSncdNi1xxxYLS2AdK3h7tiJu4AVaoCqWM7SQMtottXLvoFRRc15cfMRAjusP9iCL5wkQShuc5ZWL",
  "key44": "aGAgr743DLKoHV7bXFXFMmL5JSksbPB9YizyaiyFYkdtf4on6GSmzsUrVUqVkjzsq8z1myJjruzRGRwXCM9vrfY"
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
