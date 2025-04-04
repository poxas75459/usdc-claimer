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
    "2qfab9d6v3FaNkW5cmp3bWYVVSAE9Z8XY6v3qiguq541YRgHKNR5WzuYzoX3jMnJwFWtVXMXkVMXycAYKPgsvpcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3fddcqApf7F6VtxJtLd18Phhu4syU3zZpQuMCuFh7MSSg31NVjzGHs6KNw21eSc6VUAzC8faqrnDQ379Qmiijp",
  "key1": "21AH7jc9w1HzDR7QLTgcxHYcCsuKqio1PGUhPDDdRS2E2psMi5MK2DjxwXM7ba4kMre3e6obzSwbpj5D12Smopy4",
  "key2": "4HdkfMPwNwNqXr7rBaumwKw8XHE8ajS6ECT4zgnnzBM7nXdyCFtrGavMnDvvHwqYWQYfvA7tdxFgxSBJ9NixhrB8",
  "key3": "5sQMn451EWxRUyGjXWLyT1Zjbu5WnLwEGYZenhdtBRkjPUnaJVVGSwuaYpG8LqmkZmVy24U6mzTx3M7kdW8CFUrL",
  "key4": "4UW5f3zNDa4SJPHjyUdVwabdrt3BEFx7ggbudNShbE8kw3wXhsgfuyvssxkpstLECkZpjBfwcLFW2gp6NG2Vyhjz",
  "key5": "4HKrm7ZSDXz9VzNG6jayzg9UEMxstPAwYdPYx6sQMVbG2s48wn5Ud8x7HFuovVgesdbXsud8n3MmY8MKBZ9axoHV",
  "key6": "4yRGwW1gwzpnEstPPXG8m5yHChkmnHzQiGDh97B2tgm2BTxdhcDkCxeZvUkMF3vMZVYkFuUrDEQQ4qNJSdqNsXR6",
  "key7": "4Y5XwPVqpsrUBVAUMEd87yyY9e4HCnHPkhs444HB7VdahsBdjTx1KDtEw8ynWbNdogTPykM5rC5DsTT8NccTDvRZ",
  "key8": "3wHK6viX6EHP4JBsM9eTGnbfbNQPSMiwvACwcMa5vTFJUjAGcEiWdQd5MZUN6BtzNZXfAbfNXTktHNBMWnnycGiw",
  "key9": "2BU47Xs4468nrYd7SvrfFVV6iEcoKSu12EmdPBQzqxyGR33gkNy4mbraDEPmgiBDFqMd6YvM1pVstymxhindrYus",
  "key10": "47aXjicGXeF5Gue7Cp9BqT6dwtbV91APo5Xx6UdvixkRqJzvYddph6c9XAqyQcVd8v4qGsNoGyAVCynkPc8MMVxq",
  "key11": "2QvgnUFBChJ8UybfsQWM8Z9vBteH7GN8J4bvh132eLTcUDKyfJFzzewnTMdrqrvcjmz9y86uP3K4Acaw8ja9fLT",
  "key12": "sVGSUP3tjpjg5NWPwAKyauBXqtRLXZCFC7VYDaPm8kB11sB2Aa4hwW4cpZ5ixWTXHgeCo5E7AGwQP6N12YiZfLC",
  "key13": "4vmkCp5jEyk4W7JZEw7LGv1wcWEvL5N3nL622TbVQvN1vzaW1enSNdRwsGjZsEeE617wqwtHxNG69kFGEYoSHQvd",
  "key14": "29aNwM688motduEpbXUQqYzJUWd7VLNedu6xNvuXBCoeet8VomWmeGFEVbwst7fHQ8vMqBzuyGkpxNUynnjZUTyc",
  "key15": "2TrucUJPE9iDMFgC3KGxN15U9YuDSa3LKk8nU2aERE7zqPmsQMWJerdpnAv92ZHkWVo7CbAmvwuBzvwkevRH17ik",
  "key16": "5xda6qvuPPbGGTZURkLgowkn7SxJ42gvVukK5o6d8RZLSMtFbrBancDR1kK6THq28EctzYA55PiVSP8tygr9b6aK",
  "key17": "3szTLWyjafF1xfF8F2hFHD7u3ov1haHRpDE51RD2aD9fNdb5fjYLcq5qPNwnQQydEJawfKvettGWHbS3zMFkdaeF",
  "key18": "c9dwDo7DDwfBfSaa8ijYdKSX78LdGHeo9mFQxiRnkaGMaQoDg6HZNDaRYjLqPFSUSXoYDFc7UxAraoEiRnM8uEa",
  "key19": "2gABAuDwMcQb4J8hVwqeRMDWEcm4zWCT5WQB38TLGxL85GEau9v6ixQSfrF7ihRy46nT6eNkAaYQkLbGyqSHV7Dz",
  "key20": "2TwhiiqxzgvkGEbKAqWoHjRoPqjVQ6kRYc9LCoNT33oBmXgDQqv3gVSSrL7oxVwmQeQvXLY4vTekiMxGwipRCh4F",
  "key21": "VsNNFTBABDF1Mk4PZBrDNdDsnDfyxdMQJjKorbYCnD6QqT4SPEQ22m3GHXEtf2Zrz1u2S6gwTg96yG5Mvkgry5X",
  "key22": "3Hyx9o8SoaD5UdsXQxr5V6JJdsekZrYTP8H2ahyvXvpww5Zp8sVodJWn4BGw56kiKH4dnJXihWPYfEzFzC2RQDF7",
  "key23": "3C1YYRvm8mNSkebgZ2Fz9i7aA4K2CKkeM3KDwgC4rVwxfjUMRUYcjKtAyKvvHf9MwxXrGZvRZz9kZZWFdgnkPXPR",
  "key24": "4CSsuPBpaZ1GHrd5JoZnEo21so6RjQeBPX6YT7tjCs3Hjpp1mGhXUS5A2PdhAQVQYfftpAycR6N1aHoX1P931mKY",
  "key25": "327cJA8RRynt76nTkctDfDDUSnDMUfFVHmgYAgZ8qifzbJfy7EBDfgmKg3ehKdF5QyZu4S1zDAYKWaDxsgtXt83m",
  "key26": "3VNntdypGzicCocNSWxB6w39TSZTPQktPYyXkQYnTmYa1fiuVTfdzHZUV9287jSfGRbpHJfKVdmiVNCDsJctwTM8",
  "key27": "3snt5RuxFrT6E3zJc9KHVpRvoNWMgUEnX6dqACZzx7Y23qfEFa1cUYwyyP4kHpzCS8PisEszYkvy8m4W4rLT6jRM",
  "key28": "3GGUxNJdiJKJrNUEGyKR7WZYKT8LiDM4R3T19WvquKo1wZBqiZKCJ7sem6sP92nDgmbb4yZaUJdwFMX5KwJ1WJDq",
  "key29": "4tSFkDobpQPLBTA7aoYfZzbCn2NUoqWFPWL3PhWtFPyyW6VUR16xXKZBiYuQnAyBpmP7H19NCEAGu3MiULuyK9o8",
  "key30": "2m1Wu5h81ZadbvsBhw64554ehV8YF4JVqrTpP3XfTGTYkfV1n6tGGEJSmoKyzk4eLchsHDzFf3YjbLqNNC6uQAyL",
  "key31": "2tWc1o2xtKcaNHmiGQArVsD45Cqhmyf4d2agytpeaDWK1fw6fqgZCgsFnxzmDx823EEBE93DQGnWqWPJ3mU4VJsm",
  "key32": "bxuwLPb9Es9PP5UUnquMUag2Kos1hhQ8NKCUdbCNNYG3TjNJZQXrqMjPPe37nXxYdMvkFXEaTZ8UMfqKzCBkWeq",
  "key33": "2JeWKPnbFuvNkC1DDNqHMcn42rCeQebSPy7dMNxCgFkux3DsTV5WUhMmG3aTHHScNmJ7cKqHHxmEDp9TRwrBUMLT",
  "key34": "4CknGeJqCMYauw2Ti9ff9jXvvmmqLwy12Cc1V7ewfRggRyzdxUrHRtJEBS9jJXT2rWvQifdhR8f1bD16WEvcw3xA",
  "key35": "itN8ie3Ar4i9iUTfe3fYMpjemUrt7aaKAjcBEHVe7E53nkrz4MhExQHM6brVU6qbMxAYbibEVprTi6ikQKEvnk9",
  "key36": "4Tumv48jYNbXsCQw1fXkubjGRG3rUr2mdGd26b5yecCvPurxce7twRmt1gzhJ3CVJaoWa23HBTsodQc3C7WCwT6B",
  "key37": "2fWA9shWHwS8fULt2N9o8xsjefFiHqqVz4AdDBVTJk7xVuv7Cz61kj72iqNn9uh9FCQ1Dq6kXdiKQzmtND4KG69i",
  "key38": "3rbv79EhFgRFAMFpE3LZZv8kbbVpojab2zNYaPXXzp6uZ65ykwqhLZtQspbz3qnkoPQt5RS82FhE2bmqSUccaEnB",
  "key39": "5g3EjFno1XqTKpuHmpxGcbp7apG3oDTgVEnNZ4UGmUn2Le6NTwYN2cNe7f4CUPcPK9UqJVGYPzYwhZiGy874L34C",
  "key40": "5cjuZvGfmLPYt8ozXH62qrFaGCoVMg1RCheqU8t8URpjzVYYG6XvT6p8wCbKSjB1rzEe7woSYYL2UTj68WpViUYX",
  "key41": "PVKb9ftQVcmvVS8vr35CJi5kHcwmtzp77CmD6awKSFp18fYYWDyHYbVqh1PxWhefK1VGrwM8cAS1duCa6Nd8hSB",
  "key42": "5QL77bfFSrTEmZ11NJru9fkKuuevkn97GDeEgziYGi5boUG8MoFMWUBMwqx7ACCaWaqerc7EDkEH4dyHGY8VVj3Z",
  "key43": "4xcjP77outhFaNuFneSZgqhjAJmxwq1YbvgrMvV5YxuuxHpZHj35b2v7VB2agsBi6KmiYCtahc3DZ7DtXFqcaWrg",
  "key44": "2DQUvUTVLKQexBATD1pXEQDErmauMWASoneFjcuSMpvmfK8id6LeSxGL1yj55wwsfwiyJpuYzAoBh6EkMUgw2Xz5"
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
