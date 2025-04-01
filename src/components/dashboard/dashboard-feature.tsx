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
    "2BEo7NrbFf681vGEj3XrD1s2HAhRbwNRoYz4ZASPJf99pXEpzfu8FezBioaiKm1P7rpLZ9L5rqt1PmBFVFG1t1od"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PXLjd7gzRVfY8XtMLdWiwxgJXvCLBzgyheQP2e8AcnyySMhvXj2UW2NGZ9FWHAfYfKMnfoJGFYNrR2gzCfR73Vh",
  "key1": "2FhzkHvGYt749qe8XXEnqg4gRL6dSuDdS7UXPseeHdnxv9xrRNcwoy5LwrYYL2ynsJzfGp41XRD188X2ZPiKPBQC",
  "key2": "2q9Tfgd35edyECW566x7xg4g3Mm2mV8jPgxyfamHKja8YsAQsWEf6Q6pDRZLbqqUXHAQ9qYmopKMkNa5w5E54Boj",
  "key3": "5mHAYEA7vUn6iabosEk6qwx8b4YbqGZxQoL589Rg6Fchid9gcEJrBg9FUSd4hUcG7Mus9V7CpAFeCZXTtA79T5M5",
  "key4": "4cyV8SsvJ5esZHrBqN5amwgBF1C4xbC4bTH5s4UcntdetJ18AhUokFTjFBzDNzNV5oLsjRX4muA2F2NZyGXHWH4J",
  "key5": "eVVtiaGXgiKGKSwJCVjDgY7SAtVqQUeDbVK8t6otHj25arh9hfHMCsE9udgDhZpUqtW84RuWnfSpfUk7qD1zRYu",
  "key6": "65afUFHXgmjYVjavNYvGixwhxfp2sKXUWJJiRMxNadu7aFJb46Svmi14F3o35X2LWVU5F6wBNdcCGzB4EGGyrgVe",
  "key7": "4GyNXi9LPnoNSHXV1wx2GLeVpYyjJbttffrRFL1L7UFm96z9SkUiDMHDc3dGifFG9zeAQ2pZ9mwT6aGTu37bJE9E",
  "key8": "3U88swsbmQZA6zbdeeNqMo3JRCyQuWkeTbaLs8uxXQkiLzViVxzvoRFyTbvQBCfGN7fRHPiPhUoaqydTpYQJvDdF",
  "key9": "4MPSAt1TWb7g7fH1bNKRB4xvqpeBtixntx5CVHuk59ffKfUR1tucrRE3vNLvnmUkoYMCiYbEKDxivcZ5NAoSJQj4",
  "key10": "3HGUMSWmscsP79qZ15Kq9ZZRpVce7KNuNYhqsCd9BWTgm893g3QbQXzZFHLy7iMD7f6rJoUJ7GAF6mufHWQ1CmKw",
  "key11": "2xWVYNeYLjYg7QU7yJ7s5eBT8qnKeyES5Y2nSwNTyV5q9y5SeN8F8QTphkDqqw5aKvbdBkYY4xjTd3HYfxTgvEQw",
  "key12": "5uEoZUW4L6kQN7Lh4UFe8WMfU3gCuiDaKdtZobDkdHYFPBPJsSSvPJiXRkL83FNSb9j6AseWXL5iYnxTPsT7Jyx4",
  "key13": "3PDKrAUmetcFhRbaHi6s7q5kbaDDTESp2ouhavTSo8W8DryhUALirHeP1p5dE6SUxnUvoR9vMCpgwsSekfwUYUmf",
  "key14": "JZnnad6b9wTyEiqwkQmLRM9n72oh2WCZV1qHAqpk8QHVt2Z9UcDuW3H7n2pDc7dZGt28th5kePjUNjy4LiDAJFB",
  "key15": "5fn4QLqqZxL1k8xPQHTvgFMMivPseTuh3VaQTpRrmaJSRC7gzBRz1eBP6JdSTEZsLakjWoMg1GJDALerLc3gPjsN",
  "key16": "2uFC6sTVB56EA43uaHBersJrC3UKs3EHS5piJZs8SBUGzxaAPFnHXDVm61rQG4HEZJJz4a5Dwf6r7R2HC7RvEVUt",
  "key17": "29e4sLCj8D6hvAJsv775HsqZVjVxkkkZZnC5148sfysivTqYtLLZcxi1xCX9anaBGaLQ3LxJX9vyxs2FsqyTFCg1",
  "key18": "4wcwm5Jev9WN7rB4R6EQjyeA9M7cYY1yqxDFebir1VQQs9dTtF5PRgmgFpAHBwrnHZeaniGYuCKVvUJ3GJiRKVWC",
  "key19": "4or9p1njDKAbVWzLAGu9YGMy7ByS7cpDsK7hoiB1HS5VSksM7rLX2f4b194P2Bg4EtQBSdMZrUbkpDvzcepPgnP3",
  "key20": "3WFK2TR89NYhjqi3RB5xuKXZbxkJFhWRZ6Lig6UoBAaFAz8Dob4Scw4pCVbAkLFxwcGq7nbwQKV1zBbzKUidwR4J",
  "key21": "HRJxLU6CYLQZ8sPgRhGBDWUwqaJ5sK4wusn65CxdAEyPQdVDV5dHoeHCvsshzYjUo9X2rR5oswbMH32AGL35NNR",
  "key22": "3pjqt8W97FcNUsfs2hxejJSHTdZhMZnwMoSHC3m8XPx4pj5cC82Z2eb37cjbdLrUTbCzXgRappksWhmYzvi1z5E2",
  "key23": "2iL4XFDihTTxDAYsSiSbaW1F8aJ7P4TCNfebnthJRhzhhS2shQeXrc5SbCUVtYn7KZQg2hHPZaXbi3hYwdcSLuFv",
  "key24": "aQ3D6EECWS5e1qy7iXDUMEXoZ8nyVEH39kKQPLdha5LqntrUErzmeRTEbBk2rq4UhmTztKvbRPX9jY6ajzhJALn",
  "key25": "b9N4M4JccAckorpLe2bmqwc7tRJnCq4yLNuQfPfTBiZMHSeWvFPBWvCVY8fBUYxwjyhzbWQ3M7hrKJzQA5SgwZv",
  "key26": "pn9mYqX6rh9ecRnjKYbv1RekFvB2rSwcbdcpjpohEtmmJKcesjkTnGkztaxG5ZB9WxuHxLiURSAVepejsEBjEba",
  "key27": "36YMKWS47rzqmFzyb2LXYgKpx3e4kPoFBiRTjLuCx8mNgtenFDUXYzenjq29cqtYuUG6S9B9L3teSSWej9YiKneY",
  "key28": "2HN9kvJQP7YpHJovd42GY7iyZWFGLDWtrT9Xgo2cpakUXqmfQ3D1o9fAxsWVHbdqUbPuHZqhyco5ARn1YEQy9yXr",
  "key29": "2ZUdmCKd9P8KpGsQfLztY9egXq7Vrfdek2KUfRZqrRtW9xNDyDe6QFoSXqP1rFnGNGPwVo6oEh2JLd3XjWqYwugJ",
  "key30": "q4eZmY843SeN7y24Rm7J49iiHt4euSifoYq9WWGmwZxdXaRY1r8f4fq9cJEmGYJmHvV46EnCxC4JEX4B1R4g3MH",
  "key31": "2mtMUj5vdc71o4frEjTWRAaBzpGuE432RCqkVUSrTWN8d1LyM9pze8kC8qQ5yshzW4AtaBZsj6oo54VRTGpmcagu",
  "key32": "2WmC62PHL7bejopZM485ZCT1Wvto7WggCBPdt5hqFFuDV3czWSQvPDNhFgYes9BA8YciZu7ioFG4iRRHa7pTcerf",
  "key33": "4M6vAs4vejR2AB4Q4w4oMWv9PE8XQTfk8uKZVs1hrYqFK2DXVyor1rXpYhxhNxfw5TKjqzDYKnRe7a5MAz712jDg",
  "key34": "4ThXfDkkgb3G3pKwW59aPmacnFFnvBjFDFDPr6pu7AQHGDRV5g5zdEDT7HEaPgK4P6GMjjq3F8yFjvQ2Cz35qqsf",
  "key35": "3FQ7fhTRtQAkjw2zX4QF41SWmKXh42wKDye5jT2dQhVoKLiSERUenQ1jEo7hnLyjt7zTkFUUubLvfFCMsqidhp5k",
  "key36": "4rg9L6qV4VbMq2GcugneGJWc2hfLooGTmGJ2BwJCzD19C9pXkqzyB85uobXLFentWoxoe7VRZsbbr7LtMSj3Vwm7",
  "key37": "2itMDg8FG1XuZHh6fhhywk5nH5nE3VUcGaqoUmiKrW7TtDWDmdXkfora2wWviKKAq7EenmiDX6u63WHXunnjsz4x",
  "key38": "3kiT5XsjEpv9oow4bNsjBXYKYDt95sXZij2cCrJ8QvuysoQGkQ5Q39ZCYxS8fNCnmoyoCLdPVURRrCaUB5397BDq",
  "key39": "3hBB6TsqQuuYjVmXia669qtjZ4iEYJePvh2jkHzJQUsuGd9ytwm7nsDizU9zmn6NUxmNdaYrwUwJ3W9LZff98z3e",
  "key40": "DxAbZJKjqBRRs3AiFRmNfkmB499eAXJqTVrhTH5voAr29kBR3bUm6CHBM7doTPR9YNzCukxHxWknfd1ZBFtQCxh",
  "key41": "3AcwwCYsvWMus1CppcakcJcwK6wWgueE2WSmdt8YpjVEbmmQxpUr6kKjW2odBrqMj7JaLydUKfgDL3bpqEzRT9vj",
  "key42": "2mEinwmUeNqoZ2CNu1ffPrAMLjFMq5AX8dAN9LV3v9LwHF4qxGfiywbvE9tASUnHKNRXeiWmRF2T53xnrRjrAZXE",
  "key43": "DtAp8qjkAc4iCBpoSFbAPZehTh4bNGoLs6Tawu5oCSj4g8c9qGJweuHUUhpVdxsTVGDXLV818oxyfbrfFcqJPM1",
  "key44": "4HG5fKfpWbpfG1qiQrbz39ajBMm1L2FNtoVp9TY8g27NgQGfgTa1AtUofmgYx5Yzoh9CDUf5uTrqHXjafQDMVxvz",
  "key45": "2h4rXCbwskddSjVEEGVtY35RwC3eic9U7QdQBj94Yr8h8TSSkXNt5g3Jx83EeyoAW6isnwAjZrq9r9Wc1wPQ8jin"
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
