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
    "3NqjpA8RioMbZCy13FRdGPQH3NMCJQrPMXXap3SJ9qycUkGrX9txkeN2gXJ9fThj5Avxpj52bH1STqR6gsxkPZfb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JRqYrYaoYeKasCK8Tp7TL2oD67Vd1QCnyQdMafsyjJ7J3cNSjzNiiezo5ovnr7YdDJ52XM82hNpeUaFDXDv85Ba",
  "key1": "ue8N6Sz116mH8jJMbVL5Y9F4ojrB3ariMng5JsQZUA5y65zPjD73QXg8zpc2vLJdZLsppnvvEcMWKd3ErD8Hmfy",
  "key2": "5FwB6HegtcFn2KiH3mF6GAjNyeECCs6wHLP5a7BgeC5rDwybkFpFtvFcEkstaWMtJrYyMwuErJ7gDzHHb6oV1ug9",
  "key3": "vhTZkLeo24ocpxbBxxogGWCcsdw3pg7wmoAyoFLeVyuD4w5SRVE7DMCCJCFBHzbkogzoxi6PsDYzmdyYf1nzZYJ",
  "key4": "3KCsM246swVYrFgx2KgberEUF1QfUCniswaUxfVzEprxmG6u1mvH8jwjGZTFMceFPTp2Pchd8eG3TVJPeNecZ74U",
  "key5": "51L3gc7gDPtLFBnpMRxgbUK39ETLourNQFrT7mNVR2Hyqs4YQgRuzXuSeQJxLofGes2mMKBjQWx1UnNHV2uPF7Ez",
  "key6": "RuPyvZLiLWT6yz1T9cYz17Y6A7R7UVB9rA2BCXbcRMnhLrGgURB1HVFj6M3m8Tuk6oxqHZAVtUWcVBbtxM4MfYj",
  "key7": "28U3buHVrxXFqtZinD1qNJpozu1gXABDVxDDpATs6z8VyDpKpRx9qwjhPJrdSY6fKzTLk5LuqAGQccZgMNzAE5C8",
  "key8": "3cCkiKCm7JiLnP4NpCQ5SxFCchknXC7X7yJH5zp7oXwAEcazjGdZk4N5DnrN6AFbHbm7oa2eMDVJW49XcrpLSzqq",
  "key9": "4XzN7KeajjeQPu3ivfsiX1xF38zaAToB5m85atfAQiDNrHd8NSRqWZWh7ivZfwKTLfkGNdFgyFbHaRqoxXYSfKfD",
  "key10": "2FsfP9tLrM143Lz83Fdc1enunhcYpEcdtg7VykWuEKnhrtyMSHS9pMovCp8Mj5jPFBq4ihQwBF67EFbhvLFK5pFk",
  "key11": "62hckpy3wCiwYKQH8TQYshAGe9tVrfwSjUeAxzucUx5XKkPKCYBKeUztqjdm42wmdQFF6vsaHF26dqN5KwkzZJRV",
  "key12": "4KumG6SRBzZhze4cQxwGs4Pt6nVSBcuBXGyAZGgdXPazxdzYZybarLuwYRit3qWb9RAFtezpLu5hnQVf42tjZKcK",
  "key13": "5BfqQHpKXNXjtyeeBjAYCkB3zPLgTwr3KMnTVhQg9cKZaqWdHz5RqPzP8HU8aJi9gsxgrKnfYwJKVeeeurqULroy",
  "key14": "4EXsGhxWKGkANtGAmGdVXC37ZiAPpNz2m98kq3Lmwm4DgNygDYqGWepEKVcC9jL5DE2NAgThEfU7DNUuSKsRbuS7",
  "key15": "5QRKHe5QqwgE3wCVkYdu6KNDAoFzKJAmLLtrdqUBvR3cfQ1k9n1XcLQmw9ks85AECA2hdpDtcjVxFgdWQPF34Zs",
  "key16": "47mM7yDrZzn4WGfxZqNd5AtbxbUZG7bhHWrGkPxk9f3drLHzo7hZN4H2V5VjtZgb1MPDb6MR7ZRLdD8DMCp86YAp",
  "key17": "z6EGxS6yShwu73dtUbxQHisESKsVWG9yJiVieVqdxTSd4wcyhXeG4djPkX3B5RLrBMPtBYSirxPCDaeuBCDAxmk",
  "key18": "4mge8LdhGgXud35FsDNiHj8GYLwTCYZ9bMEi2XHRpGCaeAkDruciEEsB26EdCApCCt4Hy7H4AycYadvQfXuQZhh5",
  "key19": "2TEQwXazcGQ36X1NEK8c3eMf7MWq3k4MNqYioV21mw552x7voyaqy185DUjGqChQ9SUHwqnWzuSP3aWDoosMAACA",
  "key20": "4ueQRsY8yK1U2EhYub6kaXYzSUz9AdhdYtrQVNhzyPBdnQsBFoDKmNJk7E4PHCW3UZytLvJApvKrGuSnvjieq3Bx",
  "key21": "5FmKH9BqLUfruFyPy9ShkDEP75KBGjBcPcF3d21gYDCTBpoeVBumMpRWydsx7FV7MN6j5U1NP2Vcw7k7PQUxdWLw",
  "key22": "2LN87R5N6yFYtu7UCN126EkRCk8jfjwgqvE9Bja4J7mADi5cvpZTBDCDqEnQ3jvAtxCmF3xszS4Sa5Ae4etHnHa6",
  "key23": "4aSNhQueTjcY1Bvk3VfbWGRW2oPJybeqf9YVFXgL2tx871CVxu5k9SxrVF8RasDNSaX3yMhmjneaPm9e96pB4pxm",
  "key24": "4UjjCLKcVQAGoXPDC9nBFfVAzmGMEJ4RpgvutMtWVKfVNbUjyF4o54sEiWaC3dhgWgFCzbXxyyAA4qtawzxsq6Dz",
  "key25": "5pmfx8iNQBZxgYWLKPL8pTqEjdYi49R7DwQpBEpGnwX8K2yf6njq8RwyyNRAsjJmaoBnZ5dVFrWa3AQSsXpUhDkJ",
  "key26": "2Le1H6mjcHH1D6JUniKJQTs5xcSFERdsPCmQiS1N7dw3QdmYCVa9MDou3AFLEwqjPNqW7tB2HJ9xZ5hoP8SF6dya",
  "key27": "62N1iEb9w6j6Rrkzc67ijUfNp3eryHffCvfQSChEW1Lw1u233xXsUCYhssQstYMhtd2RvNcQFadAAPavfmmfw1TW",
  "key28": "kUK1QLyMZPEqBDHrkFGjQXq519Vim6Uqx3dj6AjMcjpW2fr98dYW8rcZyGWcE3k2jFb2Shwb8KKFAmJTGqi7ory",
  "key29": "3ZZ2S9BBuzPbDxGyRaHJhi5wUkZGNpVPXcjCjsSFMUkdCPos7yhVqfrbhLxhbGpqYNGEXe8NwYzYmdQBHAanemAR",
  "key30": "4vW3zbfbFXFPKoFRFzDqRM5DgCjFMiD3DBTkB3WEtrCEZJvVnrokqwZa2UnM1XRXCE7immy51h4jxTtHn9v6hk3Y",
  "key31": "2Yb7fsJp8fee9faKjLYymJiYEvUG2VC6qj96tDCKgXr4aPNCxShd6KGGWMKtEG94URxmWTud7ymtFGKN9NiDjB7T",
  "key32": "3mo11Ue6Y6Jdy1F58qbGxAnBYGrQtTKNYHZ9EMszcfPGzmvpeViB2fZv8rjtpVYeSthCQzUfuem5FkTYMzC1475x",
  "key33": "ZSBRMWYM8d3EDtGAHhNaZEiv4N5sru9nyifrza3UUjuGfw2GcSHQpbFSNvPrBiEwSz3R7YCoNoGBjtQyDsK3D3v",
  "key34": "4F4zXvJBs5mxwR3f3i7zkBpoZVpJqCnhqWPk6C1ZDWxnvwU9KjX9x1JWxesMx9uN2UFCzqstb2VVd75wWAnV7qck",
  "key35": "5hf2hdEKMWR5BtXkqtgbeqa4Ea7YpGZJsgqbibWibBKFfnNiDxgXM3grmLutiKFrHdvUnSU7jyNY2bPrGuP9UBxk",
  "key36": "3A6hBNyvRdJPhzxpecsbntpiEDXBhUSBNUTrawLBNABjHxF277jynYvPQGZoAPzw14Cz9XNNaoj3QS96ke9P4TT5",
  "key37": "4PgNQftvxpis7TMSKnzGRXZb59YBvTuu2UwZPU9wKWEQE9u8TjHxpvhgPuiB4hdKaBBsYzLLVaFMZ7BKybmM5gXx",
  "key38": "5t3v2NyJRe28nr8UZXNx1CAUmU4LwnZPY6MFy1ZWNYT7ihmgAY3wwaoo8X8nftv9VLDXJSPYA8X15qLGxtX8QjnJ",
  "key39": "211pviVvEGiGySrV1vpsHo7qszuSYbDq8Xu8RZZyTp6p6rd1mXvD3FLqkAkvT8L8KQiAri8KsjcL7RaLAyv9in9E",
  "key40": "2QF6josPBRKRRwivMWdYrQxWXN9d4vHK8pRjGA1rBVr8K54dAQhuXQDVAHcFH32FzZi8u94x6qXXiRjAadRjMEhY",
  "key41": "RBHqjZMTNEYoecTTybhVMbtvYFi9pWyBjsznJ24k8KMF1R2qxenB92qamEXpW2iQxhQ6YFAybxQpKgsWiHMCj9r",
  "key42": "43z2SKmve85BgUkEhzrC5Q1114F7YcWky4o5xt9kxseQutEUk9CGFuJEPWRX8bZxVTg1RhiafA5Sgcyp5LCjbL1w",
  "key43": "45BkbMmbHWWhGiT7ZpkSLnoMZ1qFEztxChPE7zEe6Byv7TNFKJU9SMiJLGTPq57bcQgGbyNiS6tAs7PzuA5KUZBZ",
  "key44": "5SSnn4TmJnh3z6fUpkCMDwCd7BSTN5AYF81esySkbo86xEWvmz8UCBiHCF5SyWcYX4d8kc45YgJk3fkqLndYpkT2",
  "key45": "4BEGshHPdBsAcjYPq8oaukPvTSHeEmQj1s8P7Nri3kbT8YtcM8bJ6TcjpxKxTEKU2uHgi4PLDVBXnNhcnWGAiXJu",
  "key46": "2NCZFisg8nc4enJ9wpR3TwMRQwWhKJGdNDXbEwSeB327gQeMoMzaUfZqZkgGcheNqqgzTg9kfLJMm7TNTTNmQ6EP",
  "key47": "4vGPPzaWkhc96S2dUFEpy5BnHzk5m1CSGL96yzhx3XHVFTuZCdBpgfnKzKdF6dnzDcGmBkuCKpUogMvRUrMgTBBS",
  "key48": "2W9uu86qJeF5ZHCkVtBpBhe82a2o329gMbLuD4w4crBRqT257K5f4WVo14WXAj518p6t9kdBAZhBe4xAWLqhq4TW",
  "key49": "5kD9Y1jqF71skewVVMFVz6V1mVkcQJZFNHzTgk7vwVqQPvr5kMBxHbasQp4xDKFjgZghEujdq2pdKjupN9oFDim5"
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
