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
    "8eMsvgu2x5zmuRYJNu3FmRdAsH6t3Cg1wr9CKwCmowzoRuoMd3ydqWMeam7TktNkbzBPcZPRjBex4s7Z2xRPMMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fCTabzrtqUwgjRnDWn63jz6Ax2hg767vZgieS5Z3VtcYkqQVR5CMiTJRzBbj6FP5PiteXJ8HtEMVdUaL8fbKNv9",
  "key1": "WnAgLzDFznAELZZQTofyX9yS888VB1sM2ySwbDg8jBCfVkpVQAP3Ff4JQvvb2dtQbp2gGe6WehRQki1WNHMcVxc",
  "key2": "2ttuXxhpgdDcyvkA8xrfbsfenkwwUFqnivMAJ2Sa1TYhCYGsyfaky9higGXiDgptCso66muhmEt3uv23LxzjWjGV",
  "key3": "64sVftAJxqFDcDn9RWRzfy7HadJVfHNGNiK3UPMrDp3iXdb8MHeEPZnUYgSufLQhTZzxA7PX8RqB2GSknynvxoX",
  "key4": "47CPTJFSK5TrZi7vXUAvnaQ5tjoAB3szJNpYqzoTJ89qyDcPpSwDUzdWqhnUozmthoxKrA8uzCFwDfzw2JRoZMEc",
  "key5": "2SVa3cfCd63yZVxtxmXKNq7cPZhf6bPxNazVu4k4NAhyptBBfUTDLbRus7BF5MuuQ8WbtMTDGdBwt6hNNfbyw8EY",
  "key6": "5GrwAfDrN1G2GpBcihKAYUwt5tCa7d8zbbmdQLdJ5Hm2tJ3cPcMbQ7qdnK5LpeHTvvcYsSz9bhLCUUk5gYom2FB7",
  "key7": "CU5h9cSThv3FfenkfgSVTHyYuvCVN1LL6Xcgaucxrfb3wpXv6DbHrBfncnDdyQZxv9uyJv2fSPjAfspq691ncS7",
  "key8": "3Uv4crqRw7o5zyhnVdpj5qaB3m1cPVMNScnZsxEZLZGeXDyWnLRkPCkFhZMJeJHqtiFUUDnCk5WAnbgTNX1NXs1q",
  "key9": "4Tv5y73sjUW1zTVe1WfbNb8gyHN7XccHrU9nQLnCK8ES21Yg9sMJNr9JyjGZToC8ujn9CiidzXaMd62XUpvm7qn1",
  "key10": "2AHFMEfm2Bvd3Qd8QTfKJFAd3mCWBCQ4LYzeRngSwnbwCT3sCXRH8TQ6muoeSaJcPQw4kxCpiCVDxRvy1zhP6J3S",
  "key11": "SAmd5DJHpi89WdHFMDDFouQzrNCCQcqqh7AGJvRYTZe3BZeQjiMfAmDStGg4we5QK94grJmpsSQVXiwLF4Uccjv",
  "key12": "2HpgNAhbMwDkUQMDbcZ5frZWeL9Q6QAkCxARgqjpaxmD53WgutRyNQMEWMYmVUep1vm95FmDrvq2eAg2zLUQ6b55",
  "key13": "4kpyhj39JKk8XdQvSCMfWvEnmMkUR1dxp1KAj3GAWAESZjEjgCejGvAZqyg7YyjtB2DVZ8oJpnejXvTk4AwyaMHb",
  "key14": "4QEfJhqqqypuoxrXwrrJiW9Dapheupv4jTciKczssDP8bj5cFAd5xEGWpmQ6gJu75NTD5CPB59SHunjDEe8upYGf",
  "key15": "L5KkDwUcU3ySfHhv7gN41gGR1WrJ32Ubimqn8tj3xsg4YPyTs9KwNcZN9u1AH13QSBKcudXYKYYRXnSKTKFRuzp",
  "key16": "2MnePhyUQtf6aNEN2fpPFBo23BTWYyodfe436Bb59fvkU5o3MRgAuVNavrP6UfuJFsZTHbBmFAk7ZM8Kt3BCxjgg",
  "key17": "2iivYfkmnFVpG4ksq9zrRC2KJ46DkQqscVgvie9G4JNF8puHNa1oNJwh1YZmtCnp9wVzt46KADvMYv4zcn27Qdi9",
  "key18": "5Za1rNLwqvB1p6oYfAq47NZNknYcRNpjo7MfHvkh87UwuXyLTc8fjh3q7iBRgqN5g3hYhYpagPAa4aXSkgmmi7so",
  "key19": "5NhT7zDzEHh6YwSV5yMh1H1Xh7moh5SnV78kUYgPdtWFSf56Tun9nVRMPj7a7Uhft5F47ukY7nWvGBXmYTPzFwjF",
  "key20": "385YjzJKGUPXdZWhd9v4yhNGL87jREsgfgdX6e3E25oG472LCW87zxVZrofoiWTes7BpY9xvM1gtaYLeFyEVbjPC",
  "key21": "8PD1xXyQNsGuuaHeiXVVdjer8RzwsSXCBjhoj7nwKd1HYpBZPLdNYT7NoXvWdtoApJUm6k5rmVYvd7bxwCXvhHo",
  "key22": "4Rd5ouqsmCPCXpkpBiiYco3jfG3kYJDmTHEsmaiqDjPUn6xzjdq4KtRx9xyZBqZ2AUMoQkrYmm7JrjJzSbpcizkP",
  "key23": "3sPQFqaYPFHdXLP9MvpdXp3YT23szrAK5wGgJnBfyvnieVR3e6MVSTf12156DuPced8q3Np1wbuDAQunSYrJ4sE9",
  "key24": "2RUXe7SFSaCfnf3itecEUZ6hd87x7H4Pws16CxtFcPe8tyg9YrD5VSxeYivrBHx49LVjnvYPZrkYndmzjcN1BBvY",
  "key25": "2Xe3vXvre9BVPuVGh1x1yEQwKeqKUFQtutsNLExebneQT3X31oCsSRLm9KEo6RwuJHGQeCkEqBeavk3KrkBLjAcc",
  "key26": "jAxwPRLj6rbDgrdpm46TdqLNLxPrpKwmfgyp8k6CAuskqmn2AF4Ev9nLfbwWtFeCXoagKB75PBT3fkEiEQmBZTq",
  "key27": "4wvbhZuyrRKALj1rk662wWcPzzKmNubt73tGfVhsRCBUQNYjYReUsM2ccoGeeub7VZ5fx47N7XoE6WqnNaCpaJJD",
  "key28": "2vcRXAkUF23pbHcB3aisFhyxZ4hscgwjBvrf36jd3f9CJuJLSS7wgbfRRyLBkqW3J1CpHvEz6LbqHKv6BBdhBQHj",
  "key29": "2rDAQimcAs6mDo8r3wD29ao8hyhdtV5pTWxk7kNSB7orcCqcjpfFor3CwT2YxmC4YW2ZTXqYtvmjkzowvkhc7yr9",
  "key30": "5ztLerJ3R2uwDCfeph3mkWn3GLKLtbnQc2JTKmMGqoawaanfdvGyWRMiCZ52tTg25VynKJ6id5sabgHxQ4tfmV2B",
  "key31": "22khZagkKhSZHay1sHtSH2LkRji5a6qMNkJ1e3nHbR1eJ4h4b386ZwpeB5vP5H245WDCynqvCPfyTtoVJMmBpFQh",
  "key32": "5RJaN2sLxeDVRxcLR71Nu7hp3odjM9PJ6sttLqYnERZVATuSXYgLpgTH3C2VeRR9Kp1TGmS2tjWCwKQjx1A1dG8R",
  "key33": "3qfLDnF8r3cNEKmrmV9tTv7Y5MLi9uD3qnarEuZB1Zs8XNsAgV3gxBK5wEGSKPkeptocWCHGrVWE2CEjQWHkP4Vo",
  "key34": "4xx7j8NMNdG8Q8Kr3YCtNLjzph9oj71GefthWCzgn9TnPFpg1cm9gkmHovqVHiPNGf2iSg9WBNzAnfzJmubGLgN4",
  "key35": "26RJWG8A1kAeWnXZLDGnc2WUtjusFYMiFbrxoqqDSJwJiffUsvSzWXMDn1pPZ7fk1tciZAeUgpHhHxdm8UabN51e",
  "key36": "38zLUxove7cmQSjxbvVGRot3E2WKjeZaGTLT6ZkECXN74eZg21Uihp2Lyojb7qcWkeHHSpAFVGwdJJmFPzjtJWC7",
  "key37": "5zBuwCo5J1qvW3BNQeHSGyBNd822E45Fwx7z5KJ4BR3P6A4UgW6vBxFXW8x4t3W3uXAHYDuoGmjmjbg1UkHHBME5",
  "key38": "2af6uyKLEnyE7d6FBEjA4miJpL1PdUpGnBZsoKAoJZVNb6pArbbparECDot1TN27JCdGz7pRKdC8j1PA1AKhNusW",
  "key39": "5GrrwY1AnPstrYrRacBKWTXPFoJ5YbEkELQS9kF4wNWnM8AkLq2TxcP6kKXuYg2LxJNmUD7cMgmp6vb6WaKixV4X"
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
