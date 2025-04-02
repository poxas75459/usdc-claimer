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
    "Ac3fzhKCLPUPbfzrSGMn7Hef5eYCH6z38UuBy2SDvzEVF3vsfM6AEbyGnnL7jDKASgSMDj2b2NTKYuXLL2QB8qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qevHZP1JJkEARy8LVtrsdjSTSDkujDx7zwcCvDBFujrA187qjkfZhuQf9PS6SbaoPkbAKi6EeMsWxpBFNkH99X6",
  "key1": "4RuJkgcvP1W3QV9tdCpumUf8mcjS9SRB4aNH4aURKea3rqFDc5C37VjWuKAPJxqPU7EY5XPgXwL7hCTNkjNqbb55",
  "key2": "2pMvwabQmZB429nexm82JSiqGmHoDyTX7mkzX5122WXZTtcVwve8sdCnzJJVfBdSdSBsWn7P4hW18pGERQWBncS8",
  "key3": "44v1ZkJRLiqiZXzjDSsk3hVrDcvH4adHL5KvJRgfrkpQ1rB7CpmJ3eY2yuXKhGmjqG2u9Gs3H4JxmTX8DHmZZxvZ",
  "key4": "4Qznfr4NGYba7xSjD5niyU3ZvXHsFZa4CRoVaLhVQeqPoQGmRG32avR9CBAXWqaQ7Jx49RZcw36tPh3neHAvyvAY",
  "key5": "33Nes27xVeqhgnth1eeWrjY51acekEDyfrZfFM3svdvhpvYCPfUhcsDBgKho45iB9ctzSDXj4UK1XcnuVsCQJp2p",
  "key6": "5pVekLZBCMwvzbBSYrEXGgQpUm5WYzfa8PjgU2AcWYby4iHzTJyTt1eASRJGcodobr9c8HjCwWMAWuvt82yzTcaq",
  "key7": "3xsaWAvm26ymS8KJUiqvF5pg8kjrVUwc2NNBSYLSEZkmWvMHnXq19Nx22xP1vcqAZcRR63kp1RpmxQTrYS7d8q9q",
  "key8": "59kXiWtxyNmggkYjXCmFTtTw5tJhZfFpbCDjqHMUoGjwbgzQECosRqmQ9V4rsphM7uBTNGxK6irnBwWpzz8EGXQ1",
  "key9": "2Yav6NpYEQWhvyVkqnnxjveesSscVoiqnUJe94MnYk35vPy1hzbDBmSAQv3TxThD8m6WLhKhDLBmnuKdJENJQg8f",
  "key10": "46MTZFysjCnQe2ZCxo6rwAqK4HEdoj4GkWdmdU4CdZ2HhAyZ3DYEQdSaaud73KGxafRdnQMrmvege7ouoWBZ6Go6",
  "key11": "GqvFaunFaQ1Aic3jZwcSsZD5YYuTwgoKXYxvvCSvDzTQ2B1nad1A3aDz6q4FNeMJ6cUjCubuBz3kaW8v5jHgrCH",
  "key12": "2ZiABsdsT9YGza2u5q2zFnRmpcYjaeUdoEvxZVQeTHZeEdXz2wgQkgj4JM3UcyrmZMbfQexXjHoU3MRBeiDdDBB5",
  "key13": "cSgMhULeoW8ckbSbjMpactWfvU86pHDcZPmF9DyNmGdzvHEMw2ByaTK9bwwY1QQ6CoN9ZvyYdY6qjGLv8nqd13U",
  "key14": "5BP4Hn1pD7ksehhVeRUBTLoXnooRbtV31LTb33EWVembUCiW6KCrf8iu7vgvjNczeozfdw715ee8Fq3KGKziknud",
  "key15": "2RAvnkwYvR3q5g7VVt81Du1ZrEHc5ftrG7h6qDa9NV8eHLEKWXV5VG9vtUFgEGNThHB1u9UCqPjiPg2mN9pT1wPi",
  "key16": "4eUceF3JziqmuaNEAy2UUeU5qwBtYvJBoyjhjyBhTi7YRDeNooyRa9i6NeSabqNjyCkmMnZBYLH3nwvyFnC6iGcM",
  "key17": "2NZ1wf11ABDQXdTxByEbhNuUjDSvKopv4jB6fn6jeTJ3ycNEkqZS9c4zP7B3okFBmjExXUcvKeA44w8rihEk8Gw6",
  "key18": "4a9jXciVof3Edf5PMDH8NFBs2953BR1iHqnvCDsxv2iM2BK2LMeozZ8Jj5yLTJUmygUD9gd6yJ2crkqHXEMwn1fU",
  "key19": "4qDequBeBMi43XpetfZEbQ4nSBdoNjQ7oZeShj5DRhBWZGCkrgX8W6LGVGRHDq9UZm5Qt9c293totnL4NSsZvy3f",
  "key20": "2fFi5yc7cCPYzC1C2ycoY7yiQ9SLea4sf39YKBy7ckBjcndZ23AFkca5q4xJkgsYwneEcu57daTPMyAQFhYsiqsD",
  "key21": "4pKBoLMS7nHKuzjAQsyAVyUHDC1VQfYedX3bqEzVqk47UvAjHbwzPX9poM25UQrp88YwSZ4wzjwDWxHxvGT2PAnB",
  "key22": "7FdYczV9UnRh9AxfUGgDTkZQXi47sgnXdNyHDESTFoYyFkYH8qz8Fr1DL9jGbKFpGhemmqvVCRauadhtTG5Zbwb",
  "key23": "3BSetmkJAKy2MzL6a26sjWNqk5Dy7VjzEbcYZz7FX2qacz5F4Y2SHdwJFXFuyfiCNNgjWCiv2MHSJ1qBbYP5TYSH",
  "key24": "3LhyYUGfTgpjL6VjLJtiXsNAVSXDr4c7uyNV3y7Cf4RJvTD1nx1KdFznFcXGV8V9hcHsRdNFCiwHMutQy8nDdBko",
  "key25": "5HeZZof7mimuTrSWdt4yFFYhSzotWBuMmHgk7QYEiCkTf1XwFVju5nAMHADTcb2Aix6aZvvMfXnJoomJMwLK3Fnr",
  "key26": "43Lc51K4WJ15mR6nUZgbSnPZ25zf1awWFCQ9zZPtAEaheXZseEr9Be2TMXSSLzoghuGPkTPA9RhzAdkcVBDQRjhW",
  "key27": "TptrJtwk9Mjg1iKnahXVYb8NUeqo8vZGWujNgzwrqf3EzuK3dvQtM5a7ZjouAfkyfV1h6VMae1uyVZxdxRdXnQU",
  "key28": "4VbqBSWU9extD9g3HqfHXsvtKPRPZvMdbpxe783ikUeNV7Hs6NujzNLCGiF8A4mmETam5jaS4nsY7SJdMMNXqBnp",
  "key29": "4uwVQNAoD4S2iwcmWNWmAxymhPVxXw85YMiPvGWoUpMqDHfWHiby5Tn2Ljm3smijdoPoqVSAxW6nj9Ftx4KrU7R2",
  "key30": "4NhMDr6RdBbTKE9Xh3GNUtvkvCghFCqQfLM4GZgvS6NtuqQ4SmitACitkZrzSw7jdGZCSV9agg9mKS5kZcvGGLzg",
  "key31": "HNRDFkmjBBzyCW6B7Byh7NCFvvgPigDF5Jvukpr7b5fYdbM17ZSHUSyA9U9PLvyKiKdpyJqEH117DyaZvLkaP6c",
  "key32": "uCjJoGUms2dbCa3hkshYzrLQUUSXUVnGd6ANS2vz8NHnuM4fPXUh6MXdwE6TaaATUSTxbRxh5nQNeVGseP6SCLH",
  "key33": "4UBfA47MMScAYN8HsRgxjJKR8jaSH67krBj2azoMabYomwvdwetKnzJww7UK66nrjj1FMXWARKPrvVcZs4wj3JtY",
  "key34": "2XcLrAiFxhjo9AxaKTDhp9haGdvnGmyLU5VbRkwehxw5qcFuqkYyMgPVjANqsQu4m3KnJq5YxWRiF7TGw4bc8yyD",
  "key35": "36rjSwhvHeJ4aznKkjSU4fmShheE4a4G6Q8ev2RyaArS7C1tSt4wzMgyGUSgzmEhTp9cU3UvosVBGruJ5tpPFNJ3",
  "key36": "2yGaeN6j1NNXLRxaZGkD4WWfwf27oi8sYVUzBxWkEpimFFfSa5rRnyr8K4GKdanWENc7QNEVqcExYA71SWiS52hk",
  "key37": "5DZnEzDRuQnSFpKKLdzCFgaGvHdDinJ7KvwBY5FCR4W2q68og3cJnZZTBNnGznBN6RMneQf79XkAKW5v3AXhAH6R",
  "key38": "4ZbZYWtnHHJZSknSqbBfLweXVmko4FsVrT38pmyTpMkVNZSsQqSzWsB4Fx3LDZfXxN97thsLMUjb8LMDNpBmp6zQ",
  "key39": "3msbpgL1hQkUAoPfFtmVWyfKqJMBMAcV9aehkh8jg855jMv42s2sC8QwYbGHwq1tpQf4xhffiRHqroDNShGJmQUB",
  "key40": "65GaEYsECR3sRUesmHQVBLmTybJ5TqjHTGhZWo3kQg6Rxd75LJeMLsJYBTcJ5NmtUQKzYu7hf8Sb5qmScSgta1cc",
  "key41": "3bupuPrskX5PbVmCwkR6NDNXzAoaQoGJUqwxqkLJZg8jktaCZ1SiEMo6dCsiNfM92zKRLrNYgRKzvB1qSC8zNLgK",
  "key42": "2UZDeKDTK9RktkWagEhkQkWsb8ZRbW9NeKtG3oC26ZXV9qKNiJPHBpKVXr3iQAU6yQBfwyPLVtdr2PDGCUMbCSht",
  "key43": "3tsHH3UoYUSavTHaKL1Qvk5bJxn1C88GU5gUuazoNY7KffLCTBDeoTXvpsM4Hsm2Y7LgRR7XUGgyzs2VUSJGYQmM"
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
