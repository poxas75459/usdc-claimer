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
    "GMFxTQjYWEBVEG111yP7A7xam2DpJRbarfgBxUE5bHTUQF9Fj9ZYvZqHhxmBGHHEwQtb3kp9fAagGXgXJw6LR1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFH3dfjUsRhAk1fvfTCTBU2hSueQxdmM1PFLYF7LX5bB9Uuc7hNcvCmb1MsRo4pmtT2LcWL2vwuKkLcb7S76aRV",
  "key1": "2SSgfjz8RFfTHxezqwtCzzyheqCpMN3qhGbuy9GECA9iTiNFYXPALPBhqLs1UU3uEuwEHwUopz5UsNSHrddCH6oL",
  "key2": "rQSUAwYyiJ6C6FCBU2itX5ujrbCdJof4UybCeNjRGEq33P3kJ8ERiz4PrNdTiCNG8pHrHsLP42fXfesYN5mXP8f",
  "key3": "55RtNuumbDai4G4wx4xH9R2iJYyXJWPNkuBbBEC6RRe2tLTSXJN268tQTwb3p6etUhTjFQnKfBYcor91d8dC1och",
  "key4": "2NLuNV3Qsy1fozk3bajqSgp1A3XHgmYgaZDt7vXvzD4Yh7pSHnAVU447fYheJyUAkoMD3YPYDMHw1WMVpAHdQp5i",
  "key5": "3Msz43bVc1i4gRb8G5LfmzrZaRp9kx99NQpLwSS95iiFRi9P568eMRFpLoEBzpTF8J7WJU5MPhTkhvzDZKYBGJ1D",
  "key6": "46pkN5pied8MtmfdUuRYKAkqgPPgoKuLMywPyYFgvAAALAGPJqjzdysbPR9qNz7UZPRxnVCt6kJwmhHtdmTw6dCU",
  "key7": "1285HauB4sY3bPr96RbvSZEvVX9WUHcdMu3hporzttnhnhQMb8fMoMwutuiuGyJGc36Z9LCXnaDvqEQdbwSQvHZZ",
  "key8": "58UK5v9LqopWQTj9FKL1VoAEzsvUg2MoSmpu9rotTUsAUS2UNR2e7RXEE11wMgAAcP53aQZdgqWZdPZ1qfdGCi5R",
  "key9": "63DwMyLXFeASEB4UaYfe6V9HVw8t9cjZBoPNWF3Fy6Ei3yE6dPBkVyrhVsN29w8KRiCHP4AmisFrdcrWtN4AJ68Z",
  "key10": "5tNAjsLBCUiD2vX9KM55ho2mTH3qySTCJAAYvxoBLJHwUQWxKgc2WJu1bhhaz5fDdtCVavBh7XvSnnT33haHq6Ew",
  "key11": "59bTu8EX8gxsWGLn4ht4VhyzHD4wydRGUTy8NVH843ZFjj86LV81sCgMJVW81qMuQ3jrPQ7XYRtTnphiXkxsKgDx",
  "key12": "qHfQf8myy4TeszekcxnxxLW5cgHDoajZ4pdusE5WwtvSMHCjG89ykraw1DXofDJCPZvnefiB5woe3GSEP1k8sfu",
  "key13": "of6hdKUZr4xfkz4gaNWTGzZwcjHfViVEQyEhgHZVtdRoFPB7GEgV4x1z7VAprTHqrKoqj6V9HFZPidhQxXFyQAF",
  "key14": "42tRs7Fhju6t7EJFRuDRpH1NkJbMrDZVB1MefTdvbsSHCo5CZ7zFnAeUsbpyk2YEV9HyJEVWKYbkkDoWk3QT7N8z",
  "key15": "5wHqxkXutgb1RdmvUdkbAuYqnvj1wjTKEFbXCE1T9CuJ1PJULc4cx9RS4RECy352fR4PXn9zY1t4r8HCRPYy5CAJ",
  "key16": "5Xi2PvQwPFgiK5TkaHEjbkAx8BR28umxX7W2vFdoozTcJ84uotYGsE1iYJ65S8F58txsg8cyNihz1YxmmFkBANTH",
  "key17": "3ZbiickYxaqLVSRyRnfJobsvGG3jTRMRNcr1Mio6BQhJRB2uy9JJLbpwrXNU5iEoKJzCCYKTMrTVCnZMWxf8oUuy",
  "key18": "4t7yLDdkuDdhvZpFCNuBfY2mCFzjfBGxCaTHup4w4Fp4Z9XbGetzLhwLBebauCGBqEVKpZJ7xnf3WeKpz5rkYdYR",
  "key19": "2ggnyPF26ztATk9Whghg6FFPygFbjaoJbpjf2yCLcdT6YGK4NY2W9seEgkRwmVLsKtwZGeALPGuviNPUuoSvZmgn",
  "key20": "ByMcXah3GgeWvZrDVbK6ozLXwkjcsPyPtu2XAhY1iTEEFRNPwjgpwnXvCNs9MCkEUuDSQ4e5ucJxZPZhaBigj9v",
  "key21": "5bXiovKq265jnXch6u6goip9sxUCHtsWXJSQs3ZPXzAypJA4xyXbdyyKuvFk5UVNMARWLweqPN5nzWwSMEdDzVgN",
  "key22": "5kCgd7C2w6Y2J3ye7LVv1t6AFyh8mqv4dmCkYVJp4YS46ARC2SRYmRgdwJCvfrsz4xzNWXcQ4bW2e8FZc33QrXUW",
  "key23": "iVhNHcAsvqAp4PAJd6NCVaM4hfQbWZKXJDt8PMsJCNoPvjGzDujESV66xHQBFaVBv6eWsjt2SBbefhenwj4MPT7",
  "key24": "3pgf3Vtfb3h4iNvvipReEguM8Fh8JUt1reEzNYjQhPZ53n7jgUfnLhjNMEN5W8ynEgjAWTZz4N9kkrRkQXiXB64q",
  "key25": "32sy6CVAJJJSTaBtqRRsUxi3NaSWeSMeW5AbVYx7FQWX2B9begR6mFS2cv7KjdLcGwo78Lm2ZbszA1B4DeWjdYCe",
  "key26": "2NuoajKry2Wi1E5AX3XknurG5GqdVq1BcVWZAHpJdPFyfFh7mtehAQknt41uUDLEqQ1ZyepfecoL72j44Zq9rTDd",
  "key27": "3qx7Pw1pW9AN7fC236rJGvuYBMy67BB6c7HxzvXMDcqS8UVy6Xu2AjdzRZWkipY1gDEnU8GKJW2RYYDafeoBeAAw",
  "key28": "W7h6jAoUwMbie7NyXYaSpHqim2W8hqLJjVbryAB2c1hMG59uHaUTzb5LmR3SEp7EJ7cX1zxQXLcNTRW5hz6YyKy",
  "key29": "2wRT7pcDu3eCmMs4RoB3HCo3wXf9Rf3siS3e5G5e4jDUTf4dPLFGXjyyHYQKF9ynv7TdMxZ92APX4byPwLe5aXzS",
  "key30": "3aTi41Gz78C4UNu5KnA6Jpzxq89yAc6NaKfYUr11C1nqapT9XPwABikSLnNRQMfiTQz4Zz9pD7Vk9PoLA7jYdeVJ",
  "key31": "63H3LJxxoeshV4nopveyeHtjupakhpzBfSCsEq6fnMCKLt4RLYuXKK4dpHADeY3ncSQijucdhNzkTb3U1f1fqXW7",
  "key32": "9zHo5MogsvW5pw8K4u8JjnRZfzvsizLyFRNmMMitYnaKQUk9SPDRuCy14SZh3JFSUkqGq5ZmdRNf1fYUNuDSHBm",
  "key33": "gQaFJ5aX1YtHLMgE65W1qbJd5EQq7PVTpTza4xTv8Vosxg8gTjYjFhnb6PqZ7Mt5jX5v4r7kfwZ3R4kHRdpYkNJ",
  "key34": "NZ4rwwpLJ3Anf7Yyzh4ZXPKzBk3rLWPUR4LXWsqBZhUw8AusdynQ1pzfaZGT9LyBLYw8JwjGvJzmm1txSyNpp8N"
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
