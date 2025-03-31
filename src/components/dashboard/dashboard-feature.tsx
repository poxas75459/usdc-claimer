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
    "bHG8f2vsi1QquJbgQYvS6MrY6WHREs68XCvyY7vmf7GCevwqjS7F43ZvPE4ihmSrRFSSgsAT9hG4LG7fz5E4LYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTHq8DZZCfFn1grETCr6r8Hs6zK2ytQDVeDREzgXBtyBTLUdiKnZsH3XKbeJEAVmnftFQAXsCPVUeusR1YSp2ZK",
  "key1": "3HSfjL3JTamVdyQbJCYLewaCnJvoWLmxR7ttKtumouy33VMU1PNGLWH2AUz66SuXgpY4292zwSctZwEE5PC9JkVD",
  "key2": "2WUAFJGsBhAk7qqqUVPt7RiTR9wKJkFPzgGCnRpU7B14xhfcsmaQrd9PooeS11CgFSt14vuCnAQBU9STLzPUwDLy",
  "key3": "1BVXYy7Hc9iVRyLJ8kHgqg7uVzPuYRT1FPAUHPdqjjQcBaiqJrQxhQJEQfjo9qx7draGJ1tzZzfFDtCU63kJXcV",
  "key4": "2tJPsyoYyXWNZkPAxdz2AvYVCA8fbAGuEykybWVQcvdD7Jt3SKgN31zv6VkgAAqVVHXnhV16wYDPSfmZzHdDQbUe",
  "key5": "3JWz4ukUi11QCTmDUJmVALbu6MfkAV5urPuiKVDfAkMVyvndhCwhXgy3HW5PMLLHPuBcCJfTT56gnreMK8aD4G2x",
  "key6": "SuTypDSEqQ1EE1WMRmNS2Yu3FKHNijTGEitgSUhRBAn2nCo4yLwQqXz4o16DKRBeU3Gq6hTTUboanMaYygskBpM",
  "key7": "5vQ3nq6hWiwGZumZaRHqw8TNY8VLPszFMrTSrMYs6y8V3FeS5JLVntfLFs2BwrAcokSPLiw7QfUy9gYjumLFuVmG",
  "key8": "2gTY7zSsY2ienWozM94X2b238Hm4DbejdKCiTWoRqUwNuTnwgRmdmYPgdf3ivSaGbMucXeStnRfvrCspNjMo3Rje",
  "key9": "bJJ5eQ4fBXrzAJ2hwBZFHLwbyhC82gzMHXtTbnwV2vDthhNKC8NW2okfqGbRRPEih4yUhuveaH9NDQepfAPteVA",
  "key10": "5DMagbK4Z1GkNTdvVtbEG3TW3TArx9KP9dT4CN4dJ4LqRVvxb87bA6j2okbEDdwVcBpRwU3EmqqtcUD8ULusX2yT",
  "key11": "48N739EjswA5MouNBEZvzYXEUjvAPEZjVgqjUDd8J75K3z5aQNv8M8q3EAXH15xcdHjMhiWgQ4spAKk2zb5CsfCc",
  "key12": "rGGS59psTMRaaYXkjGWzHPHoxkQKZVqPm8vydRUj7hUhUj7E8pqautprbd7PrPKDuiQX2GuFiYduXMoHcbnyjM6",
  "key13": "23r7k6zyYgjGCPpuprBtVCSv2fzxVZWE2R6J7sKk3qyY4mzV22MbZCgDNRK7SHodwoVYpPTTKonTBX3e1rzH8A5m",
  "key14": "54PxfM97LHrynBcSNS9U33wreqhc5Qhofci9KZkNp3NrKvkNrroDcf2W8Er65tiThTDoaEhR7CkrqndCQWTdXXN8",
  "key15": "5Z8skamUuDZjA3yZ2Q238QTPirCLbHVvR97pVZvYATUcHwxQYj59obM64uzQkCnACUUUFMFbBPQALpoj425CykrC",
  "key16": "3hc3TtEFJNmd8VsDxmHCpSJv4AggEbntkjywxtBvXJMZeqiaacYpsDKaA8f9MUuTuwdcWAcNgM8n2wPDqLsga3kt",
  "key17": "5bz3nAZxfuXNuepuUUpY4Xu8CMcnUCXQjzR8KstoLhYrjNnx5Q91iqPcBDNhoHvjwFutXta1jw6G6ezuxWHjxivt",
  "key18": "N7rbyztdq9cyiP3dAaaRSfrwP1Q8orZ5MBrfCRMvhACQwEXK4kYXvByzTCScmSzDpkqC7gfkxwhk9ocvUCPtEQT",
  "key19": "5sBT4YsrL7JFVtx6F2QnYD2LEAiA4bQQhzY8vnWaM8tM3JnLJoZvb6yQZikfCrG129qRB9XbexY93KF9ocXEfmRd",
  "key20": "3MpjGdaMThRGhosoASwsRVPhPvGBTKN9xSQM4qmVzQZ2zCu7zjYkHRCBy7NuyNAaKH4WBaT6bAfJtFQGbgrBQ36k",
  "key21": "4UkueaqDEXmpZJoAKJ1cKkBcjwLW9Nc5WWPPzGvwRLSjYPMLXL6ygv9WjwEQrtu3ZFszABZC7ECjRGn7VshALWFP",
  "key22": "26z31AvVEgJLSV8XCnUbVFqUPRx4gw4ZtdbXBsv6uzUwWsqYsXW5mECV7TjbbbMPgJzRXMohHr1opKKZZCNRG8Pp",
  "key23": "1aaudAne84Bvrk62xUZdtqfyWPhhvAVEeFLVsuv1wgE8EnXxuawewGjFhArsjZmArUPfBEW2WzcvRFZQbQww1ZC",
  "key24": "4CUrRQ9TwGVQCwUkhYvWNZQidSegm8ZW9KnLvkRRBjJuvCqPDjyWkKTbqkrN2PhWZkkrXcfHd6B8maQxe8gWRe6q",
  "key25": "5RhwEKpvvS3HTfQkHmup834op5qYqrGGaJfKRsMgougjqP5qQpC5mVYicQNLDrjvuCmQ47vwcVhRQbL1YRE92S1e",
  "key26": "21oYFct3uexM2Fz24kmgU4YpT8BsiucxoJmCY6Yr1NdmH5GenfUmFeFS6whqfaSK3J8fBgiECz665LxcwnBzXm2Q",
  "key27": "2VGDncAMbNRfPzKwoFyxiAT2xcWbgwE9Jejh9Wpm8CHk9Kkz9NxAtbqabt8KY77trN4XtRmGD58b2YEsLTjeGZkc",
  "key28": "4Nha5uYU6TAshz6v6T1VCo9Jb9V4C5j4WngAUbQK36wGDmZYY8VnNrLiiyTG1joJhWTHjNhYiKozM5Gx6oqqS2f2",
  "key29": "2Y7aKcZLyuTPxgiphbvWSU91n2XMcCAaDYux5U77wtUiGUxsiXCqRbUe6sfZuGUtuJPxMiwsW7ZsnjajMY2e4gYb",
  "key30": "2cCXq6ieAua6sDVnYMc8YchFifd2bZVmxN7pBjGAtnjimhYxaUrNszfddHmLd6prpNJKiLnHipHFzdWbXathLxYF",
  "key31": "524iPBejkV84tmXNkRR3caaXkr6237BMDZDQfRpW3XYUoqqQQpBn1kMc2FdM35eRVcUpQnshZdKUVAJKTrsR6RaM",
  "key32": "2ogg7Zt7PnupiD2MtHbYLKUAhk1TT2Y3JC7tA3gUMaXvbZWX1hcCX1Ry9Hu4uFu892Cdqr8waBNWCRbVKRwe8FUB",
  "key33": "2LktAEhHUYKuNZgWfXGCSGqQFxwNaJLVpjSxNo99q9RXTdbuJsJgmx13gbjpnP4k6dMnkKtc4JXPv9JEMw7PbC7a",
  "key34": "huNm8t7d6Lv8ciQj8LWU1KzAYMvUzvikKXSSJwLaE8U6iwDBiUQeFhR2HE6BmtW1xvcViAdtmR9DDRhgSvfKwGg",
  "key35": "3V4vzrwc4nhg93iJgaweijTacZ1Hy2MeunhmFBBbrtFVZBy8TTduLdrzMAuDDh9FaePygDrFZx1zj3LMkHv8H5xK",
  "key36": "BxcNBaxQ39LcqnEzhEhnEwoG6PR9n29Cm3X7Fo3znJPDHVZBTfTLyrYunERnvxyRZnAAkbPKdx9qaHJVy6ZAh9W",
  "key37": "vsmA15JrTBzuMiRTz8inS7dDxF4GAtdYCimFhpFSS9izNw89pvC3oGTzwDYGXtcKcePhRi9n7oZU9kACsCJwJ21",
  "key38": "2yNLMqZVNn3smNhwuaz1N7jux3bcF6MXBvfVfpzvu3rFoAzRCVxXAqaq1DWzEaxi2LDKQfzmrykk29QgckFY2WtX",
  "key39": "pJNpnNunxpSadbz17Q9igJiA4VA7M4oAotGaybcBvLdybZ6DvAvCDLhk6r4axMshYjZ88ovwLSg9CnfdvwfRxjb",
  "key40": "ueNwoNxcx1Hus5jmCaygUuzJZLJSoyQQ8jMd1cCSTNBiRNpvpbgvDZjzmWAZ4BZFPaXNW5WbxE3XA4NtZa5anTe",
  "key41": "a8u4VVdhQA4w9v2CWnRFop6fvkdZiuVTtynQMtdEeioa2uE9c5GMWi6WtLmKjvVGgEgSPFBUtC8Gj1UEbv6XFaE"
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
