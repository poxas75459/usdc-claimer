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
    "s9kXEGsbawRonn14UgogetrVXNMGFdCosceuidwvUUQfCu5fRQ3jiZx2hGnTRNn48baU9rMQ952vM7x8advPBFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWnkXWTcg9zNLKheQ6MiEyEhkiEaM37V7a1gNoCmAEsaHaWxjEZp2zTkUvEpLtGvvFiXNkDboAJrbXzDrgxK9HX",
  "key1": "5sKjpkcV7h4o6wmM11QixR3tfis3UZSMeqECPjUiTxHZDsYuXDhHwFn145Gx1oWKjyBLNQoKtgT3QUe9krZ2KNKE",
  "key2": "2Aidn8X1YyB1GaZrjCGxB1jKWPKiniL8ZvvvUZuMhJrf4zkbGmzrD17dbL8U1S3Ty92N7aFnAruJFX4h8z8fbjFQ",
  "key3": "125PNT3FMW76MNmPhH37MU8xcp8SD6PaM9kBfxrCQQzwmGCZQpzb1D3aEKbarRc2QfcgMZxHdSjF1EUWpovrAjgZ",
  "key4": "3X73eNBzrLEEGVU8Mf7mZD4VVxRSNjhDiw6LsSfwhTQpYHAfVWwb1P1Zi5bFj2XPCK3m48QftNwMiG9htA45a8vW",
  "key5": "5B7gJTntTqTfbJXPYmQx6UGoYsEzDrY1iHdyYYkwMLSDJcJz9ThrqW8xoLXwMRw4btsojD4T5cnPACAX4hENLJWQ",
  "key6": "3dZwA9rpWKsmWGtgKwJ8yq9hbopXchUEmU2ERULJ2ogJMWq8DeD6Mjx8F2TceaVFGtUhC7QbEDDoyYZj6YGBrKKq",
  "key7": "5awWidGMWsiDGqAvyweEPUqj8abo8UwuRfQMS5aXFeaxDFxBGkF3hygjsxkX4tkjdnbVRpYw2dnhcQpxjKttQnYN",
  "key8": "4hXreTbJmvhekzNi9E8LzJmHALXbEvSLgCv6dCkUzFN7FxVxf8PGeveBNNdWbEtkADFjenmxPEbXvFiKdB3ZLRVa",
  "key9": "59PAPf6NBmqTy1eXDfDfpyw5uegTwuQBGg6tQ9dUvtBHG6XX6Go9aZHecGFojKHKSJ6bdB1KhG2X7ju2jruhi8MD",
  "key10": "44AxsCsaNFM4nXisgkT6MfojJifyu1WZ924gFhngPzbAFNrm7qkR8uYBgb3NPKaKiWsC9atR4PSGx1fJVLBVLJfx",
  "key11": "4VZ1eKxa7VvZAwi2vB2tgv1VaEcEHZnvXyfnbUDUHRkHEDRqmvpxLHoFG43KqtzBepksfzVBgQ2Y5X7o4zNscsLL",
  "key12": "3kXsq9ykH4HFhufkWoJ1RGQ7AyuwU69febyM6jLi2iz8MEpY4ndTNVYHyYJajgUFEPUT8eqfT81H7LEHApFNFBxw",
  "key13": "5Kx599QNnB35MpsgCyQmZKoLm3GBVnnqvw9NEBSC2gVY13nsgfCUr98Sd254V4qLKWpEg4wtSpwBhZvZk8sirLz",
  "key14": "5nGtbWifqfs2o5nXkoHBG537y1HjPsY8omt2gSdpge6ND9iKoNFnZFxTDD4d1W17qpfi7C17BEC9uLipfzgPso2K",
  "key15": "4WuqAuNDkoKqK34jVVpcYBr6138xkWdBex1mtfTUcCDfYrsV1HVEZknQSgqF9qjyChMKsVCuXtdURwVvTNbqpErJ",
  "key16": "kL14jseYj9Vdw7B7dRq1v97yagrhutk86XW47uhC6MLCVCUyLZhCqtbJM99XxC59NddZwkkjTacwFH7LeYwybok",
  "key17": "3SLko3zdgseYTNYXj3KLUNig4yotCQzyWWbNJwjZ7zwbZ4nxP8qjBUhpfehCJqHFKEkYKEDQnFqSURabx1PxkMV1",
  "key18": "p98P6ZentpyiXbv2cK5rJZD4oXgnkdVCGnuvAf464FidZEHMWkqd7vT5udiHPmsAzrskQgthAtAUM4ofkGjwXBX",
  "key19": "3FBUkhwxhaCpvMCPwsPAz8gL7ks9bkKUExVdeb28diQRkP47bnZ8zqMbUAyoYy6yt63KPKekUweVWEXygsgXafTM",
  "key20": "5FYsMu3aa3Md3bRgD9GfV6nUcoMbMA8EDvt6csHDkA2s1TGm5nbccad9aQL4QopoyWD5ZrY4UefEUgGy1sZe9E2G",
  "key21": "4u2MRbtrthB4vZpcHZnzubkz1wkT8yy6zU4dJiKhCbvRE2iyfUstKer2kCtmBRecMPtqBocQ1FyVKUMmmB1p3QSW",
  "key22": "5LwDx6buL1o6BqrdRvToYkx38ozceVHrr3qvLwycWcvnyGmqdNT6QHtzbaFGrxgk2NfDjAdMw9LPqtnthLqJ6sK7",
  "key23": "2fmzSGfV3faxvxN5AzCQweTPgKGPxMyeoBRZqUK9yL9yoKUBEjQZdzRZAkXtNrzFogDpoFVL6grHDDksYrrkX4TK",
  "key24": "5p73cqWiQ1tPbisfDEabx6TmgGzu5rq2QmXEwMj5eeexMdAoKrapCxdc4nD7RUc3gZTSJi94DBJMKJup47aE36mZ",
  "key25": "anRanoLswu6QGCPrBhrz8xHBDswbqtN6mMVajdz2gEhJrRJbgqmy7vyFums9Hrg5p3hkhCuhwVWDvpREFQXTQaR",
  "key26": "3vE5CHiKfhGyZ416ukoM99JcKkex45GcXJRiDnqzcJ6PyUSXNhdhTqgSCSg9RTDMqNqr4m8hwLmUwjzm4riufoYc",
  "key27": "4JzmqJai28LbAEyUYJtZzozPV4rzx1sux4d4BUqpEoKJDv2FGZJCt9HbfLwi5EzUCaFnvSXpviKWudCsAoP72WrF",
  "key28": "519mQHcw9KWMcp9ricYB7mTucRT5TyrFXVnEMkeKbsTnfgiLFA9tbr5cyT9SqDVR4jnwCVCYVqDuP2j9MyJK6paj",
  "key29": "5knrr8d6GNExyQKpmZPAr3RpmcnhgXk1ouzWxvfntf5c5V9KLtRvnPq7tEijeedvWbWw7pzYZ9FmX6snGR1QQg1E",
  "key30": "5D5xkKYwfwwz75KqDzpp52MVZPqNuLUHbEbmzfD1NjtdW1VdVgX3bcvpmBxB56XZCfBJZK4PL1BY9pJrJHgfXG6D",
  "key31": "pb8Q1TEKeEyoBNYtKKURn531b8GSKmNAE1heZmFvVa8WbdGXwrTaEfFRYQp4SpMvfTc5kae2AqVif3zcDhHLjhU",
  "key32": "5Vdbd5fQ5n9818wWb5XF6LW5E36H1cUA3DPM9rz6DEeHHGVuC7W66Ss7iHZyuNQxvHuqmRMN6ydAkRGCmhBMkiZE",
  "key33": "eGJoQVGneNRNm2ykvnHf5u6MaQA367RvCRSYLtVCmJitRFMJXLgYeoZuMgutoEk9SLYyNT1maJyKWsLpxU78VhA",
  "key34": "4hYqVjYtSbCT4bY2SLh6AKBV2JABt6xuhwE9hi7L7r48y5LiNm5atkqcLpseMuTsEjsyRkLoWk4Ci1C2dhUfquYP",
  "key35": "2DqAnpUfc6LSMcvSXBcbJegWragzUbFhYYvkGKkyWjApWLT4j9rhEWPjweZqrVNNbnC6LYuMuFie8cv9rck7DWii",
  "key36": "5LsdfkYgRmLKCpXvQincAgZScZTxpNwQ1Phyz6yZt6qfXjgKYHSaar22TDiFXK8EV7zgBWXX8vo4xtYiVQpP51DD",
  "key37": "5ahxsse8pi3mkYuszBFxypWb6DgoQAz2v8grwjWDeu7Dfe9XKh8s29i9ViSZxw277KVubvG342HjJwALnAqEeRLr",
  "key38": "hwtmVCbDHcVQomj1jQuiVD3bugvC1xLmYfDpuv915GXtAozPw2DRdk9W1XS7LzZ9X9q1FHes2vEj4b11WTYzNkA",
  "key39": "3xSGUr1rfmF4RUwnMQ1HhSuU2CZPLWNM5aF6HrXh9jkGM811YknK8rDoDKai6Z4QRp5uMwgZbsuU6Lrdj1nhFnwH",
  "key40": "2tqDssYmkrgsAa21bD5DFL6qcuGjhEuD7RmQPYM5UXEo3tSJjPPrX2mtzSkQxzPKKmCQNetmeJPHdkJmVAwdp4jY",
  "key41": "64LQmaa5wyXxuWoAtbHfeC4DZgzFQfhta6iUZQqLjarZmoTgE5KShfNsAn54cjzrou6Yfnpfv8qnS6XtHVjqbTnT",
  "key42": "55dMg1n3PjbazzVsg4bEWrk5CpuzEKx6P5jhSpsMUK19ifhZNLmYkHKfRdpA5Ae8nwWFesEmNaCeaBeTihnLF6Su",
  "key43": "WcFUvjY9x2858mKrwfBPeggFKMUFMcPbvxEox8KMgvhaWVQBiwtLtxXfTW6jXxA3LVwTGyFTY3M9rGmcB7oy1b6",
  "key44": "3RhMkNKbiak7GhFW89h7smE7H4SxuEXVpRnJaaCzzHivEVy51UcQgpqrBKDzFMdN9XoTz4VSdECko67Q7rXPeDTQ",
  "key45": "3piyJfirT5Vri37gZ1rM9TXCD7Rg4LVhZu7N2hz9U7UF1n65ntJ6zQcWCPx6AL58aAjaMqwSqNrtHNLHgHkaC3P3"
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
