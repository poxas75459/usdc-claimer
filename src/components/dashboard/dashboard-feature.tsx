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
    "4pAZL7Ncvt77qxh5mUwVusXzUw6LMmvmEE261aoTtNWHtVUwxg6GuYWr23LDEah3NjJ7JCdD1rLgmMUa3pA3Nfzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "399HRBSVWeiHd8ho2dTwSrE4cCfoqzZbnGR8pNBHRQ7rCChjgRYR8Dmx4onmh9Pdq63j9kZfSH5REa6Uwt7xnNvF",
  "key1": "16QyKFThJtrp3K3H484zGFjssu8Zdf4N2TDwZQGxFUW7nCjXsKbBkVR8BjEz5xv7aZm2Y7tPuA3Mha4K3oUYSq1",
  "key2": "Naic9vK7TRKXUFR727KKZPBZmtzPnVnC7mZHKdkMBGzGsWvgqjAZue8u6HQPZWuhgSAqeuk67wupVtw8JtsCGN4",
  "key3": "4nx55LU3hhyELFDm27N2QsVAm5QQcBXqSgnCEWeeLCG9Vn6pLjVwuq5BmT2uJ7RA8w4CMQAiLxxmPqETvaQVNEW",
  "key4": "52ZTNGJVTnbop8YzhPkABtKAVnD9BCzdyRnQSSg7DDenXeJRL91nf4fyH8H6R3C2s1LDAQXE8x4NTa1KLmknHVqW",
  "key5": "7Seh71XMn3do3MH36QVAfD1JsZE57EpRrvELtYjUKJ2HgG5aF4LVMKmWDTaQoyi2FUb8jgLnDPBNBhjosJmMDU3",
  "key6": "32SVE36NQ7EnmQjMeajrz6xUYTXmcjFDDiwhSrZETjwuEw4AnSCM24FSu2q7Lhqsi4n7XYz9da5avemet3FFam5D",
  "key7": "4cCy8RZpmQJJg7oHDC86pny5TTAMstNm8hQxzTHmgJT4GY7vegDhu7yJbPgUjjKACuf4TXg2TvMtpsFznh1utQXn",
  "key8": "2oMA6HmiJDMz1pqZh1F1ykrora2tk3uXUB1v7fY6e5PB6CxHqDufZ1KWeVs26WVJ6H63tPe3We52jV55Z5WvrKuF",
  "key9": "4GjpHDYzncpZQxVddt1p7q7E862vRGpJZxc8B2wQYknTehAY9wNfUrk9WGtwcpneZ2y6BWzjkyZ3TunyvncSVeNo",
  "key10": "29ysY9Mr1ehDN4CZRsTMF1gbREvHeteH8YtB6aqxJB5H2fvFLJEZGkEG52A3Qq7iMfc2enoyQVwEWtPQqtn2qYQ5",
  "key11": "5v13dQtrdopiBd3m8rCgr96dHvGuQzHMcxRNtsgffrARBQqq9FiuKa1fKgJcRwxfh1h4LcWNRAfj5B3T4q6JMzts",
  "key12": "8B4njaADkSSMvtnQo1RgbAuh1g5mKAjUE8UHvCwsrgew1azAiejR2cxATg6eJc1GENwaKEjScBJQJ6ap8nH6q93",
  "key13": "3mM2PsC4AJBwbG1RpHQqpj48VBEpZw4pSndC7S2gxHiqQPQVD2rJpZc51UXQ2gHmg8gEKwnLxnnN3y2bczbFTeEg",
  "key14": "62tTEKsCH4DjUdbs6ZAUiHPfwec8nDyQdu6jq5ELHJGQwUq6b8ZYFPQuxF55kQAUZFyRs59HWRmKrQknsitmmhhj",
  "key15": "2BGbB4wmEZswVSuPPwLppbxjXDY2v8UQP64YJGgHgoithwASphQ87i1HjmrCQtnnwSXJckQwBejPwGu7nub2i5QB",
  "key16": "PFngFQBihKtMin6AbQ43rH8tcR9g2YMb7VjJrKjjZtumAWmhVdq94C1N3F64NCkpf5GS3vbDskKaquNqunE1UpY",
  "key17": "4b1HQVU6PWA3heJT1a6VPNGuBHT6MBbrU2Ky17ruyhkW7yY4BqnoqgNqPZ96G5tm4Ti6fAJKzvpHF6EGr3jfYZ6f",
  "key18": "4N4ZsKWUXWHAehSvSvGsZWW8euvJ8HVSL9d9nGyTw6DKVYP34qNbAdeCEKQ1VombFhFkBSwZWRpEvnyBE1YqxDLD",
  "key19": "EiAw1qfabPeH2CgxntAQSpgawh5NN19BXmxxT8uDh7ENsid95Hgfj5EY9DaUmtiugUDWV3T4cJQjnKTHU5yzccr",
  "key20": "5eUAqefhRk8pSG351L1rqb6pP5u82j6jHFgjQyjgtrhQgGc1jHBAj436cRZGmC4tQkcG2mBtMFvi9SPjgJtYm49R",
  "key21": "4nXz76A7tjcAuSo5JTi1TTGRHRhjkTGTxjExXrtTNUxAFWLapNYC6PUWAHnuGYiKgxb61CVvqLQ6eXAwTDCABmCp",
  "key22": "3S6u6tXYFUhiKsCrqs4VqBnNvdUZBc7BMw8WX8j69CDETFK3Ydnddn2xDevXhpL5dBQyVogwxdmVJe6dqxsKrCYW",
  "key23": "8Z6wnxpbMVTEunErB3Dj4de6X3KqyrbYw3FX68J8w6Uyb3XEkJK3CWsBiaREvpRzJASer2qb7qgwj4P52uCUZp9",
  "key24": "3J8HxVtd2UhroGk3CezCYkGFn9VvdCsJ6Ho1yLzkbadzM4WWnJW1FwV23PHyyCzHPAh6ARVhB8e57Y9Ni7R1JdMC",
  "key25": "2aTWKG2SYZ5RUW4mbtHVnpbA3nBLJG3h9mLLwNmG4rKZC6mCSS5VHxwvm7hjCYGZoEyHxZAbrEn4m2sBLUSc3xXY",
  "key26": "4ahmHztXzruVgNVqqjR6eEdPubeyRtNXCCKcPKk8Rr81mQzSnzNiwV4RCAnFJ33dhpXQyuCTv6WyhLA2m3HHNWfo",
  "key27": "3q3SAJKbmYrVTR7zY8o5dJu466RDF6CkwyRp2ekF39c7Fn1nspKoxozGGd6MhqQXbf5KrWmEy8xXyMHm7F8mqoEf",
  "key28": "5ubX6AffcKR1DiMV9mCQnVo1EWA5QcrT24KnEdXteyVAwbqxSg6ZwKnb8vDWFtsSHo7Yr93GCRV6PgyhpjHVnSHH",
  "key29": "3mFJaqKTixoR4Hb3bF8eXPaqopVeQdZPGgToe8DoPNLcNr4VVKt3Vb5Ls9Mim7NA332VNguXhyBB5gygdJkmCx3U",
  "key30": "4uMdwGrEGUrsJNoxdEWBuT21kb3gCs4Lk9EHV6Rq5gt8WR44fDeZhev75zE9v1N8Xf6LL8iG2hJVb9HYouuCXFik",
  "key31": "3fWqW2qxyaLse8kFug4QvUNawLWVaKbZqFEapLPwLcaN7VFfzJikE1pea9fJxdsuhsj9S2rmm1hu2WMCW4YWBMN7",
  "key32": "5wFH5cmzLMFfgoYvo3K3WvqoANXFttCjV2HSHT4x14oHkuVKWTNuS38T2PkqjdH4DwtphmVnPYy95Xgcr81nfAot",
  "key33": "3UfZGo8bkjoRbHe7UBEU7CacK6HmNwmB5KUp2BNr1BqqWV816Zm8h5vym8XJ5hGAHR5M7UbevoQUf1eJD5XaH2Uf",
  "key34": "49swnmRS2yzRTwZzrFCojTG35nwQK3rGtLQXAunZ2TmK4RtDTTXQBwytmKYSapvLRfFaUGqaqxY7f8Lm5KyU9kfK",
  "key35": "2HKH7pNcevkDmgj2786np2ty9ydR4fVyTDRiBB9wsiY1n6Mau13MGK8oGBvC1mnijRBJz6cdqUzJTUhzGU8FH9UW",
  "key36": "5NHbjCjE6jLsVapNKoF2bczTL8Ev7PVP61urq9c9mVxnhfE18maXPEfjCyQVa9tQKhA5KQCJt72tKUFt3DLwfbmT",
  "key37": "5uKQPwFjDjkLLJKLWigwmxMUgmcJb99dNY39eTEN6U98oP1WtNHtQht1qyf6w14wb4xf3wjgRpirBR6YcYFjSeT2",
  "key38": "BR5VW8jw1Fzgk1UH5Lxx9ABYKRcuA5nwrfbFbbwRbqM4WtXv8vwdbT5sk2kp4MDrbTNT6EPg85fTT2MaXvjUTRj",
  "key39": "v3kVjL7zYujeLdA1gPrSfs2JUAQDRZYsTN2ARmrffhHmUNMaHuWo97Uo7KnuD6EH5kmgTX3J4hJvjkaHJZzUDYc",
  "key40": "2DvxnRvimw6MfPbHLkWFgJdk2JxX3aWTPFmMeiwUzndo3Nav8v8e9nNtVZbk8XL6cnVW1fvCq7TFK2N7JWT3YDTQ",
  "key41": "45W55ygvjcYZzPaN3uWYxMYYZLEdyXGMYJtzNywKADH46hy2ciLk53qAbN98CURnyU1UaPoVU57Vt9PXgPTqaFP1",
  "key42": "VJ7dqUxVKhHK72JYmiwxKiCNmmMCg7fR8L7GZBC1tjEjahEaGtGw4Q2bJTqiMQDzFnmvBY6yyhd9csN4ipJkY8f",
  "key43": "xadLrguufF1TUF3sRcuJ1ju1UHNuG2q532aCazCGrETifAJC4gbZmzbFax4XeAHdyBxe3awbjSuHM5CgVxVJz1J",
  "key44": "2kGvDpRVXGJpEfdJ7VhwX552GRjXVgdry4mCuwQ5YtRHTmsfqarTXKkPQJ4Cv2uXGwa6EEAEgEHMbmWHNzk5Hchs",
  "key45": "4TLMSDHMNFjfFwGpdRzUGQxBQmjttqvZv1tqt11XYjMbQ5kunSa6FHWXc96KDPfHjcw4LoSs9GUKb6fqbh2f7hb6",
  "key46": "KDSvCsnd6rp8Y825dC1giyhi12itmozghrqYnim99BbGQsYrWtgGagXu3g6bXXB4skwfcXR22A6cTZCaxSRvUVH",
  "key47": "5ZVSb6hy3eR7Fv7rMiwEQaVc16KtKMWX3TZK3NJyZ1QBU1oVGB6rSwMzePexWpaq2dPvX7F4zfkhXx7Au61H9ydr",
  "key48": "5KuLs46BNA8KfPnuGSTmhWCBaCKya7KSpxLRTTSx4GFJHrnsW6iVK2gHyi9BtHumJWEtwbnHwmyhkgoGwBRoZWKu"
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
