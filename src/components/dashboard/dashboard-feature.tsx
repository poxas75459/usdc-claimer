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
    "2sy5EfCzYg1HwgTXQGpdsuED1bRZEgwfDo5qoZUZF5v1ooq5o5VDxJTZgwnVqz2cZmD21Pnk5Eu7w3cfVH14JPJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1e4yGuwKjJH7sL84qvtYqSo1SdTTL7bdyZAXf9bAK5hLq6EGQ4gZnjXodpCCYSvQM4oQSZWRozjz7o1CFaECF8G",
  "key1": "5mRgnF262uR9UCE7q4AnU4ftrrBgCWeXiGdNjk5rhpY4kVCu8cPsuuYRrL5W7oX9CxggskUM9V828ZbiPyQsuyZU",
  "key2": "2t1YGRfsyjACcFSqr7TaCyM5LWTh99Y1LZ3n9GnAgmY9sMygV2468pwnJvpqG8j8iTBnmHng41SZL1vubhiNUgP6",
  "key3": "3jmYsMYKhxG8qZ5wsfymkuJ1TsHapTJkSLUf4WtnTBtVrim2bQzHjR2GF7AuyHaE4h5JBsmjeUR4vYfMqUyWoQjp",
  "key4": "2aCFs3HmFte8QRHnrR8EgYnZ5igcDtQoxxydg9eE31rawTDQuG3u9F5HFXrHy9XZFfJVECen7jBRP2zqaTR2C8hm",
  "key5": "G6HRzmoNuWtDKUf1JtpNy1FULRT11XqUwke93KpCryrxjDH6UndmDLWQgo46Cw8EAWPuy61JBxqhUyH2FWGq2fa",
  "key6": "3MQjLFsjRCSsqnD1dzuuxwidiJB6KCngVmadrEDnepBMATgRrGqef3Y7ZqR3eMoov4PNifCoKQ7ocLp543dpjTvH",
  "key7": "4Tq234TUck258hpFdYjeASFB5WMfeRBUouLCcwT3SiZ32tpe4AJhcZfQYsxt9mBvpuxbVU4FkWa59jQfU6dEeZcg",
  "key8": "561SqgTJ359YuVMgLx5xib3QX4Kx4mHSNfZMwMQ4eig1hN5E9sCvznGxUxUpKfWscSHM85MaJrCnBLmrUofnW5KF",
  "key9": "s1mShSH8VpuH6haxSac15CiRDFuNoQFtPGEBcfAdrGoP7HrmqZZ6yqkpG9soKpwP4KSviXphpprPDMtFjqvKzao",
  "key10": "4JbqZD75YTC8udchDDoqAtLcAfUEEWh5ipRKHwzwVepnY4sSjMvfRKCnRjBtdTFCT6krEunANgGtyJEZsxSo46aQ",
  "key11": "5nkdx3Ey2K6nAKLfSCBGPiJCfdo1Y7t68z2NYD1wQRQGj8jBUzJt2u9hpTmbM6VVebNu8333CDkj7D6rYXHAQTYv",
  "key12": "1QZViXQv1EXCoezdSDoSu3E2KcVxMMonqbvGKJyVwYGspJaSn2Gq3kxFmfStgL5A1tuDYCvUfvUbHGgUBT5L86k",
  "key13": "qMWZZohFNSX9nZYuoFN87WKyTfTEkeq9TLuHsafbCdJcsgjmroRBjqXxDDAMG8CMXjZwrTgpubbT3VfbfwbjUp3",
  "key14": "2dopvUJyKB9BuYgDAY6tW4Jd6S7B3hzcZZ3J63rGNwmuaTRHqyRXymchcVyhr94kpotj2CG3oZeofUa44UV5aARs",
  "key15": "4R6U5yj9RUfApcpf2CUhe4u6wUQGtGBEimJwcYXJbvEsThrvKUmF1jdCAL8gKqnma82DEgbhs1Kv9stRgHAWPtxT",
  "key16": "3MsHyM2Y58U4Gk93eMdk22p9qmL1mbnLGVsiFtx3YPJUNbYLjrVtZo8Dkzt76PNz8JNxEehEfHYNoXuHY65fcbRw",
  "key17": "4LidpZ8mDWMvozrgf17J8i1mriuU7P67EJfVr9gdCsqKKzcdN8K1Vd7H8qnHAxEbkvim3ZmkgaCxRZWXuyVHJQHW",
  "key18": "2817FWTZZbC5uyfpW9sUEBa5bujHZ9c92FaXymsUTzy8w4mRw3prwYj8TDxXKu8KSSF2QTyte49k86fdzD8swKL3",
  "key19": "4LqYVUbHYEKCC7LgUf1774L6F6mws3HwyHYM1hY57qvs98xrjzBE2GY5qLfwYkafJY9utf7XSh7aVc9d2BaeuKjw",
  "key20": "2XKBQApvyi8yjyYM3qUnGR4yK4nFvAcV6vyEMPx15whBdnLMbaXMLXgwu4kHcrYJ7RBLNBDWgZ7We6ineKudGUhE",
  "key21": "3D4u8drsgpSDSa7oAzLr6kCmaKHEFKnvdq9D6L6ZYEWVetb2sYj2VPJUty2f5vN5vbrFjV4BZyMUoMTDuFe1uhMJ",
  "key22": "2q9TMo2g5YeDMuxGAaD6y8TSJJ4hvAVT7UjPSFACn8Po35fitQgqhh6LzGmZNPDPbej7tGMgJwCzyLcf3TdUW7g9",
  "key23": "5PJ1JCKgxFV2pt8a6dWJzvqijDaK72KpmbCd7EmMCxCH19CftF9DeDSwAAGB71DjBmmss2hfj5nQBHiJ7xyhcjx8",
  "key24": "2GDWRy2XxwpjMvdxNBAHTz1hvJnkkp22fXre2dHgNfTBs6Rv3kedegEsYCjVXND1UQkddegY9m3u1R85soJSESJf",
  "key25": "SA324bWW7zCg1HGpRbccC6BwcuqyB5e3esHCKfkBMYxF3MyLwXM1UCvAK7R3Ug2d6oB5Ma5PBUKMyzSd2k5ckue",
  "key26": "7AqurYBo1d1Pvx8a4AFCzY1esapKoxVKtodjNNQaNyx51SSDvh9aK6gv4JCJr6CWVNUMwN622gjaZGjYFC5io4G",
  "key27": "5cXdoVNrsqeRNpmCWWcYPNZzHree8eGveagbnGBgDnh5kegcYPzRGVjZCh6rh6hLYjec1p2TTzyMmF3eqAeraDW5",
  "key28": "Jj5GKCLe5pY4KJHS4uXW1WcpnXtLFqXtK4YwW6c5W9nXKWvyA1SfBAftwBLDE4qDk9FjvfRzDHh2oJk5bFj4XVi",
  "key29": "ksPeTdmpKekv7TEtZt4AQMbL3HAXT13fZKnk5rKhRpj9WSw3Jhns5f42fjybRWMniYnGec4dz4eHU138bQeakP5",
  "key30": "vCnFTkMyBPtuMumaiV4Hs84ibUWKmdSTVd2Kndds9FChYe4t14mgKahUzjcivNwvB7ecjZPqARN8WR6NRmxFgm4",
  "key31": "5ik5eHzJvdbs8DgnqKYKxQ3aXgYBg3tcbxRwFgH1P4VMmmZkYGe1PzWrkFXnwDaCYxQYkBWw5TsoEBW3pR1xhthA",
  "key32": "27ibEeu3DokLhS63gEREVUrZudbEYSAjCkACFPwQ45Vy5VYSizLXd3Woqv2aBKDs2i4d6HuJVDNM9TuBQWMMk2dy",
  "key33": "4TZvANGT8xrS9Bv7HRqgTG7zimbEyAuQsNWimfuh4osj7X12trxNiC1TndmP8veW1JHfBkoY4qutQrDbYwdXhkTc",
  "key34": "2MiKhj7hn6Sk5rh3f2drPgqz6ZRUtxgdB7MbydDaxP88zQQPDZ5KKSvYFRZcrk4HKpvnVNCJR2Pd42Tg3KrWkTh8",
  "key35": "4VRNKM9juzNjYtvLeh2hkPSQ6TYcxWSairx5176QmDY7bDfxE9cAQt4cjD8QuYwrKgQ3fqm254oa9ED8b26DHg4J",
  "key36": "4u7CB7NUpfVWi81Hj1G4ace81SBAY8sj8bPdZQyZ3aChFuCsfJJPCffZHu3trToUMrU51aDKdSmLLBymF8CFSbDY",
  "key37": "5R6DqCjrxjioybAUM46YfG2HhNsXZ4aJBfqxgfTEd2QDZAwNJ2Uh63388wnmoYX8r6gj5ZE43WjfD2veV4dfNnNF",
  "key38": "3a3whxW1wdREJV3cUAHGLBh6mebaNfZdqEhWXiLEdGBe5gny13AawgK3GCyzdGojuL8AuZiwwDLvnbyFTJrQLmmK",
  "key39": "3XcjE2QkgbwKVqr9esAMT7Jg5U4BpZDjkhH8jHpxrE4YT3chQXgAs4T79QYtJ2WAzAeyZq34Xnhnm8ENqkwk1YUG",
  "key40": "5gXTQnTn6MrfLmzwHeBZd3ewWx8vvN1FVknRF2z759zkEDK7syGdRpEtPKAP4Zuv8mmGzRLP1ccbKhEiu7xwsfmX",
  "key41": "4vN2mx9GX2JgTxGCNzvPj7SYhgWJKMdZXgaKseXin7N8ePwnmkQctKN845JYib4qwd5F9DhiqP3E5NdrxHk5Q5Xm",
  "key42": "7JzWUUHJn6JRSSvi7FxVpgfHVroQXGnybuHRFCTviAFcNUXyH2xFwFrdjuAN7evE2NKXvRTwzzKypFuJ5uKJf6E",
  "key43": "4WcVSJVHx5hFEEgSRDtWYqZ2rpwYgV6wNMspCjweXtbvHqPEB7fCHYFXsNQWmPMn65cXZxRjrWQw2ccphJitCS82",
  "key44": "4K35RhGFBq422GQi8rvYMQaA2FgopLxMM1B3yiyTcKPPDKWLz4UqMmXbBRtWbmDpNDDtkmgPGgh6NgqTdJ95xPxf",
  "key45": "2kkdVcqeBZeDp2sTnFPRj16TWEAExcqgcUPg5Y5TPCrUDnHHAJFNMuCzJECdpfLmrRS3FSoa29Zwn7rATeuzzoNq",
  "key46": "5vtgLi1fwp44nsMmV9QrYaS4fGAaisWVgmnzqP9qxyiZGbg341acVcUPN1NdphgZhencUJyeL2ZhdBbGWXX49Eui",
  "key47": "4iDapHKKmXHYDVSF1zZfKkLCVXX897dSJDyTJnpRsjeVZsSJj5zFwgs795bnjko8UvocFiyRedZHQRvFrxuc9iU8",
  "key48": "3VA675epQxAAGcpnGwVqRqCLQVyYBJ1eWMZg5wvoNm7EBGjHA7oJojyPZr5eyKEqscM1g6Qm7pUyHVTvaPj5qeLC"
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
