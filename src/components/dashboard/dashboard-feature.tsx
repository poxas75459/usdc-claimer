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
    "5ajCYZ1ksaMfQ9Y8FnxCgTkRxHtbBFYLmJ51bPsWpo6iD8VcFNS66Eog3Yheomk9gSbmYwVXUjWGBNooRZUrg2rA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ynvm5umbLLZ5VZNpMYFRypUYgUqHH4ozsJWEenEtsjXjJnSSCiCrTCQdKX42YGdv1mq6bgGVvLnf7kCVyRTrL4L",
  "key1": "3DDFb6oK3W5ADd2agp13GeSANFTRBFPVQjz7pFaADqEnQDBTQ45EWRJ1FGGkBSXbrGP3eU39p4Wb9HdeFPNyBTkA",
  "key2": "3iizT93S45GxXz5bz83yNsUaoXCPEfTedzirNbEuxQmQq1FvYKkjPNUcKBjbTc77JVSXSx3V63QdwqVpeHmwzLKW",
  "key3": "34ohMeFseHGDbiZLvrUN1r2VARMBqt5kHdP6jxqi8GwbRcLszqiTDdzug5ZDnrWbJGtWhHFpFKbJ6oHgFH5ThG8f",
  "key4": "aksJQcbQgHEZjkuU5WhxxU5rPSvAoCEtoKyMRmtM4C7xWR1hEntaUWTcJehar916wJrMfEj9UZbu689rqzT9GSV",
  "key5": "5TLjbEP9eUQMSKEMJDc6pTxvQsEMY1dt6vNU2Mj1P3D471BEnB9zKSqrvEAAUTyKgc8JuDWjDmcr3Bivd6kiqFgm",
  "key6": "3qvi41MpuABY19g2V7ieZToatBESngGco9h1Z9w7wpKZmUPuQdudGt7PK6NMdDyto6PSyp221LLaRduf5G8kaQjp",
  "key7": "KVnYBJ3D5rZyWvocUSN1x9mWhgmmJg6G7X42eEAnys2rLrRwzyvp6bswfiYi28VPB41wP9LMVN4BzTtgKPrLw5S",
  "key8": "2iXni11RXQK9vYqnje6r9vwKW9zAaYykaAtVa97eLYz6iFXYpE9aVnaRSXDxV2dCWH7EotMDrz1NCFexWC2wWhUT",
  "key9": "4RdeCf9VTkVhQpFpF5uVFodwGHr8ifA2XMjzUTxJ2sD8TYN7R2kpGGYAuZ2YurM3kvtLneAknCVFLaAFnsWKzCVo",
  "key10": "5jyH2scM8yf4PyPSARangFNJMCG3ed7oLXarJJ53swe1584pPhhAPzQQKAxGh8BPgzTmo9aVvHQk7Pq869KwKyNZ",
  "key11": "38GcnH435VN5gE581U2A1gyujCuWDzuAhPrxqUCtaPf4XJ9eiVfjrBqbGRKLAZ9fBrcScCvjZs4uGWVhgRiyiw7A",
  "key12": "3gXnsEHM1eCFKZJXA6Fjxdr4JKAUMMsGQt8hQjB9ZrPDfqDYRGvsPMR3H1u2bHWwoRDRBaDH1QySasVoVq9nu6LJ",
  "key13": "3FdytSLyhJELdouEt8RA6s3PenJSz8ZBo9BZdBypJjMwXSGFTRdiS7X5mghc22Cm9bWoGkMyiQPiAhAHQkdZs2yA",
  "key14": "Qq3eDDJBS1AtVMX9iu7CmcvDSiES1D5K5u6UD4TKP3CZK4yB7EPcZam3PpUKB9UEBntYB6Z7jcPNmMdW2L4PsmK",
  "key15": "2gu2UimjRD4uXPGRSnEB8mZhtAQwrJ5d29VW2ye7zFsZYvyqvQJR331dJxXvcPo1dWagidAqAr1b1tLsyoC9qqtK",
  "key16": "2uk7g78N71PzKF9VaKGbpipBb1SZ6nt2DmBRHiVTTNpEvTSgVadCCrCNfsUJ5Ptf7MF8XftXsfddLPEwFnJY8Cf2",
  "key17": "2Cy7K1yxAr6VSiVzuUMgx43dspafNzHdR6hQxRVW4PEVjir47EBc7uwki9NybTz39G965RZ1JDjAqJoXggiTvwFM",
  "key18": "3eaYJt4Fh2coCUfdyUFtz1T4kVQvefXxFpvgBRND9AFzzCXvP8GsVaLfworgp5SHwdedLKiwyXu656MheJAgWCHU",
  "key19": "4cvzDv9w9qBMiEzps4y186XFsGU4au24auRZ97qyuvwuxrAg6Qa93ath1h25kTKSJhd2RMHKgijwZMttiZqzjasH",
  "key20": "fk6EB9MFpGEnnL8zpriSVGiSmBXgBt3e1RvkqUWdRTnC4KeVSBKdxJRQ2CRcDt5B7CGcxPvVgjXY26a2sMxy5Qj",
  "key21": "5WdY7fTcZAxzsTLxxss2NjECT7r7rXyCWr1aHVRQzxb8T53dpNZQMcjbGfnJHdS45VAH1nHNdn6fqNEHaKsDFUvi",
  "key22": "U1A7zneo1Gx5agQN3skET7McxuhdrStuFVn7xfKzxkUQR95yCTP3BLjCCGtoRzaD52LKPrioCTJwXvpx1cKnnyH",
  "key23": "3GHAYD3pBUZSLK4FXZNGyFy15FkVKPjqQCT12jMvrBTFyeBJS99ycserN87Snvsvc3NSbY8CVuMu3pkoJvuzrJtf",
  "key24": "qQQuicyjTC387WuFXSFTquqHC3dvH8NAeNyQKC6n6Rxgt5YzM2Gc9BCKSju4xC8wQ5DjDSihKA4gokw1sudfytE",
  "key25": "3cihogFL11MKtGMSqaiboWv4DdjmcsXbz13Fhu6hYrLKRpAknwAimPhYEzHGZLfLkPYfoWsPJQQD8UUPaDiQ5UqA",
  "key26": "cuKKfHGQjBrcyXks4FS6dpqCuagtkb2LqmHo1HJWsxcrybEJFp4uTQ9bKRMMCDJWdMDdoWytAvN7nWBtRc66HgN",
  "key27": "2q322t4BwZ378QXJQSwh13hTKvJdXKN6CwBVJgeUXuWrFLirtsZ1J5UYAgZChTJargmdkGZnJGpyhs4yiQ29XiWq",
  "key28": "pT22tCZu6fL2vHNo2642G7vMXhW6L9pA9HuBx12w44KGNLcdEmJD4QRNrNsUKodjjeehk51FaUP78kvcymZ7mQv",
  "key29": "4exgJCeXnFBwUVPHkCGg25p7a9too9VjSjXSMVY3e47y9NUPZgJ4NVVyb4WDS76DZS968n1JFv9ttspnKYBvJwh8",
  "key30": "5xdUH1m8qCvQXaGfH4ZWF3PPz4ThDERNgsHyvdeNNT9KbSjQyK96YWUb6pxK3qRyjLqPjDR4rvebQFewrGWauA4v",
  "key31": "2gXYkN72cnhnSyqhwgAevrfQJvehuhxpTWW2vKRmTZZryaLAuYcs9k6gyc2gGjhQJBmTj9UxZAHmRhfLfRGskTBL",
  "key32": "2FAq1JESCfHeDwr2vQbaGqsjwBVhe3on3XtxHKd5XHygazXU8mewWxqLhQouA79T1fV374LpphKRFWyk52TYuVKW",
  "key33": "4hDQQUTrowWVkzakK6NThFeQakSc2MbyfVKSMHqByhyn3QMhh9t6fX5YL6hXbritkTgmiXqUJd7psKDZWixHabA2",
  "key34": "fJ1jUKVpfYdn7LBjCnGxGUKgfsZHfyiYfT6Dhd6QGxHKnEHy4eLNhXFXjTDJNmZYr66g5eRKCwfgZJwpCYz7Ftv",
  "key35": "yUq2TtpsfsnKkRCM5vGBH9nnPpxCG8MbyyoSD6XojDDwXyrtANNnzop3n9UqKuZzvNBAqSmpo8g3YFZoZqZSkYe",
  "key36": "ZDtgPbukgNm3sU1YsoQ4cd2mKFM3irCurvaNfEkrqC4J4eSLL1MSQaBJGdhs6nqWZJUaU4aHGHzxs9YPGvFh9M4",
  "key37": "3FbnJmDiazhL4RXLhe2HqeXeHwDngWnce6F2JZ3fgG7L4YsLLzDKBhQ1NsRCGSWLUHdsY5w4WMM73Lp3yzQq655A",
  "key38": "2mpQTXjwwXo6Z4fjC2PtggFcadVaMT3WKt1rYgyX3svx8VSsT1t1xaqbYZZj1pyhgmZvcUDc7bvauwJdG91qugNP",
  "key39": "2S2z7sfMoX3My2WGySWMG6PgcXtNZUzb1r6tSvorZUTyobqBLyJM5tzcKRV1xd5bMksp6DZ6wKCsE1RSkUwQSNQp",
  "key40": "2F31yQDRq6GqviFvRB6xMxT935uH51QpFpxwHfoCB2BRhFxkfGjuTV2ggGdbziW8E1atgYPcd2v2RVqRqztkR592",
  "key41": "2pianRhVQQjoamdo1MjsEQWDyP4t7DJCYxFT7UZHxJaUKKaYXBhqyv9a3JEFknZbESJZaWVMZj7AwHuv7DHUhuQt",
  "key42": "2QkdmhKCJKLdqDTc1RkxbXYRK7K7669tkzitTsoassqgkTkuRhz5neuAXJEQkGpktV7YPZPwTLo4Np5BbwxLyLzm"
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
