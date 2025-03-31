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
    "5n1a1Jm5tJ9NEcJL7YNq3iwhJxW14XJKrMUFLoQw4pDy8aVWBSi2SfpmAnqqyXGGUkfnQGobhafoXtq1wpXeoo5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lz9mYMrAPPRPehwC8d1QB2djHo3YRf3ggY5dqMxQ2EkWizpGC9omMLWBEY6QshpXzL8B6UHxQuuXeG3yLChm7yG",
  "key1": "3edjjPraJ6oNXZG67SMs3Ab6MRgBfVEW9rRf1nE2db2Gfm6Y2e3kkVmT4FWsAdYS8cJZYw3oudmFehbUFRjQmDSd",
  "key2": "57xeiVJsDmTq5FQ1UF2wxn7nzoeVG257YCv99f7amnDzHkwWcMq6AqMzmdtEi82tjk5fiq79ABpLt1LbDdYGoc1",
  "key3": "2xgs6vBYw6RNz84qYbDQuVK9PHyuZJp6EQeJSxoxCkhDfnp377GExU1Lv69oE3NG9Bmd56wnyk8LowwJs5VN1SNd",
  "key4": "5y1DaPyaUaWLiptQaTJXgfWrgQRkQpZXauBy4rPx4Z4Jb1WxP7DP589CkJnQ4R8FSQB2qpLoDgGV1rptBPr7Trsh",
  "key5": "2vN6uMauwnkhyJrdqSaELBVCYHFzRhtqBqPjGp7JKnPqZfuHAD3gyWxsJpm4tkVaBfY7AyaEkq6G74PvZzfEgsnK",
  "key6": "2AJYNgpFnEmmE8h3SudVTwaJXBceCnxKFj66pvBcroSqHxcjgWM9eaXihviXVw5dUFq2XscGCLew8Vo9EyrVF25B",
  "key7": "49NGz4SkJaFXABfeeEmqdUtZ6sb9uxiDRn8cFj63Z7DpfSk4NgsAYw1D9cqYtAsZTD4oCRAfijNkzXXiS1oSW9W7",
  "key8": "2kKnZtWjeEZJC3vrs1JWyCBcGDf2npr3kJYoQDFsrAGsa6XC8qaFg1sf8ropCfboUYN2XVFKVi7kZE9Z2MJ2HGjQ",
  "key9": "5PDtV3b7J6uBbib8faSHRLrswYeKSBgbmGb5Bcm12h8sund362XRDskq5PT2sSwUn9EX6NKnnqoMh66VAP19hRby",
  "key10": "41ZCsdBtF7kCwWaMXuEwJaJe5zuF3JD8QaDDLvUv3XMJoiqp7hK7ghFC7DhRKDrNmmV99smERZZUbpTBd8PxVn5C",
  "key11": "5awRfDugcU4n3K26RZFuZKhsqqFHNMAa16mz4iSvS6r79tRuYbJv5AU61DciJFnWDmuEbwSMtDHBKDHUSdZQfWQh",
  "key12": "zGGyo67We1p8F5zdJA61u3vmQcQprpfEyCKk732xU88i57wQs3ZV3DFBh5xJp5KJ5cjudWT9yxNCHzvRGk4Pu8Z",
  "key13": "52eGsN3VQW1Xb7AYAjgehfT2jJ1coqkreauxXBAgkhLYBLnB62H6APnGZpVbbgY3B2rLE3iiv4AJBL4stg4JT9Mn",
  "key14": "3nSfmhR6iNd8hco832RNLspE6Lky6erUfoc9AY8LZRBnHsgmmckURbQ3yUahLSnVwhWg1L4pBscX5jhBgDyxcZub",
  "key15": "2vwmd9WGzXtLFbCbrfWHwv9BDAmtDKYug659KtYKX5sKczKF8UyFsMwC98wiMvWLPyzKqSdiXgf3J7dVrCKb2YkY",
  "key16": "2A6MH98HqzhpCW6EShUban4FCxMfYfBH6NZu9hpqv24PjARvyhrQEEogAyJ4PwJDbr394EczXi7PyPsme9vJRAFH",
  "key17": "3gGEoLwNVbb3QfN49tr5KmfAX4hxNNhKSARPfJh994MjpaPjVaoTSZFbVEfLspQ5x55NRb1yLUuHUuxg7SYHJrmu",
  "key18": "4eueLHca5SBmwDmNv4KE8HzWuzrevB3b36rfcqj75yHQ5ED9PGQ2845EpRBCTB1XxPKZv8wyGbyXeKfNRutmjK19",
  "key19": "4a1gxv6bnZKZV9nv88HjqqYUDMQskArqAu1MPbSWD3NoyqQSc4oRoaB8Bxryw6x6t2q3o6vGjVoTjwZ7F8Ux47g4",
  "key20": "2eouTCcwfYhJWgY95me5nyL8iPba9deTNZ11SebeqTH7aPZgR9Xq2pipLUxJZnyUQNj2DPzwFZRakNAU9Rkkgtyx",
  "key21": "58vaBYfk6a3Fh4aYpH9qUggRs1FHQuuzGZenia2zaiQSLcqPDj4PAgTx2jaMgerkRZGznK4YfGg2NJaSsrdxNtVL",
  "key22": "5SuNgXRMZt2nrkqusB7bzHwzqavcyimi3EP9XKymRCCRBWxehhu3Dac6RgbAa1MkyhucGAsQNkT7qdDmgt1pMUEQ",
  "key23": "2oZFzjwKfMyM3wHQiyw3K6a1hUKqVd5x9xUA2eb4znQkom1VhHuLC4tG7kY9nP4GekyvhNLovhQStn1hZQn3W8as",
  "key24": "5X3855LwbSHr4NsSekimayH6aQ7VsqpqUpDRm1AsxWxokBQr5W791TGCoRu2RrT9okHDyv8YK3KrteUtopoLbouk",
  "key25": "yXiNhz7x2PodcXLRDXgkgrcwkYiNMZC3imJTEV1Y88TFwsBNQKA5CMepx7DCs2hQCHdpsxuriJj1whGHQYXD6tz",
  "key26": "3dhNH3MukVMFEkZFRhwMowENEtTGpMua9h1d9RFRY3bwkLdM1VUpQKphRbERBHULrZq8F79tZ7scdH4YwDRVEcqj",
  "key27": "4F2XWzrwaszD6VWhPW6yzu5hPNpYvoVcT3UqVYjYm51o51HRFU4xFYkdJ5UTtjpBqCS54KJaUshAgeLKRDESL7F3",
  "key28": "2S1ue9v81RtmNtb3Ko3YXoFQtHrK9AqKB5THkFR667exXRdiuhwEirtx4NCs7Y5kNn4hMxkrdg9FHNunRcvYB7Kf",
  "key29": "id624U1dtbbSjS7ZfRzdEC6tWnwzpSs6CQNMuXQ3spijs9JWgMPqWXWN8vVKGfgkSG9oDJcmHvKWR6KwsfJ9rbd",
  "key30": "4hxzzsTMVbro9nqtFUBbLpehdH3LcHDEJqPdWvdn6rz8wwHq1p2PYAwZkgS9DmaBU3G1URqdK75kCmN9eLWvtgVD",
  "key31": "5rBsVAoCuB8WmZyxDU6C46uPhsMeshRnS2qFAwv9ujLo7EiFgyuvT7T8pW1eKRsaTzPrYW4Gk9LYfWfZTYkw6HHG",
  "key32": "5ZLF3yiSHbA65n8XTV2ZuyMFVM8PZUiMMrLGwVHtu6XYcC4qBXXh7trPYYJbNTbNi6fkr4Ty47ASRFeyNCKJLW2e",
  "key33": "52MVnFgPjWkV7jSLWJ3d6kMJdT5v3gzm6XA47Tm5FrRdSMKHzxwnx4GgA8nCLVbrup6mndyk3LKXtWFcc5dExtMU",
  "key34": "5h64j6KDcmqvKBNEnSkREStkg6rVR64q6WumJNZCaNaW7zUakwY4douLhvesTVBmUdKuvrqEPoQ8AUokEaS42c8i",
  "key35": "WDSKhoQy6b1mp69fA2R7EXtucT98csDmx7LhWWXeqQS4QsFDj7hjsZCbrTnTuuAGgUhdMmvFNCYQtkXMHqoTAA7",
  "key36": "66EziKarrqzYHATEnY65yE2VE6ovUDC4L2bfwsrowHrq5wHE4FT3pv7VWbyZcUcyqEH7fYM2TCyJGRhwe9iZthPm",
  "key37": "5wXxaD2asKWiWPdaghGjXVx1UrtzhXsXqZ5goSjyNS5UjGbVS45R3DbKESE79Ha1P7kptY5WrXDU4nQSoTHdzW64",
  "key38": "2TxJY1ThwmGyV8pmmkyaGbuYvtcctRL6usPWx5PQHSdnCbPaAhGUjBKXD8RxiCQXei5RtzSuTGyaCsKGMS318kRG",
  "key39": "NjZhxsSf4aSuSSAbPzncHeZWjAcybASoYJhP6BuDuWtVgAPju624w8FXyYq6uTK8kdvd71kWjc3tmXZcHqyPKGH",
  "key40": "3GghbMY76ph84T6mvXCs74okidT2YLY64R8SgZ3k6GALyV2GEtBCi88VLmFxfbhN1KEcPZbJ2P6nBMdde1WFg7iA",
  "key41": "gTFDjvtbWSa2p4WCvAiknQyhyfa5kMieAPQDuXNbZ77SRAKKApaRGPrr7C87kNKEdQv789txuruiuKu2efPvuCe",
  "key42": "4LjcHLDQ5EnuPmnhH7DQwWKj1ParWT4zkhosi826uJU2Lh8DtBoXNsMCL3AtBMkmxaGEy9LV4BnjDb1ZmnAMPUGJ",
  "key43": "4vjJF8ZwsstpN7F92j4GXwbFUBGGnCpcXR4iSa8kmUT5gxS3aEmhdUa3Jw76j8WuBpJSrHFW7egVW4m9xRnNUUn8",
  "key44": "2g4fGchkv3USnV5GAzSjHty6u6NPmancCHgA2Wt8yX2m6bmxqkAHTWHc8Q85hYqwYQ2cBG1yM1Qsp74Yqm652fTw",
  "key45": "44PLNGtToU9HanjWpSy9KtgEMy1KAbVgGLzpRkzMGBgnriZLG32yGqnZ1XJM8U6HjWj1gX5UtvPdLUwRkPraNxaJ",
  "key46": "2xR5eWVGZyitVJ4ikS89uZKfKMsB9eTdWyYtKPJVzXzMvNBeeyRRVmwhUyg2J1idAWGdYCZdHyNr5YXg4XQtNung",
  "key47": "3uep5L52dgKSYnfH1WVEKBfF23ZT7xQGXNZri6bo6pUDJj6AueEykF7YvRiREfg5wp5sQGZa63ja5VPpE261GmKr"
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
