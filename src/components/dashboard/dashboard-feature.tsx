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
    "4MmxcNRZBZiBCx9fMPtBmuNpRBCCTCrujzqNYTMRG4yqmjag6K15fTWpFDXefj9yyUP2uqrLAjZ1ZNQzJLgoD2hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M8maVY6BUyWM5BXYjVb5ydLf5arYzx5oYToS6M2pDfFBpN23VYfY5ZNKiPTBwm7nD8hbRgxZHe8tgonHpE9eXqV",
  "key1": "vA2tbAbDmzd6e69kT7v5xxxjXJBJS3DkXs319u3bhQdD2uCHaSt7jkwh5qRjCJBtvMZaK4ybYE78SPWmnuooHUq",
  "key2": "2fMXePrKAE8WviwNW3Ac7xdsr36gWCkZ2FYdyVUiE9pHv1snCr94m5xmfKJDtgbTijufe9HfysbfVP7nMUU2tv4k",
  "key3": "4w8UgGS29hLV2UdBnNfPmKcreUTQYHXbwBjHhE5bFDvXfKRwUjug9HUJ12McjK1uhyePYUQaVzC5rqMMXPvMATnf",
  "key4": "4xo28tXargr8EEWMzd1MB52iCR6XrbRFeomxYq35sC9RfyX2vcxsuY1JuprdhzvCn1WQtigGfa3zB1TY7uKLPLoD",
  "key5": "5j5kUtBD11sTaS6kKETaVeqh1BMfwpudy1HzpqsL5NbdiFbeKPQbQZ7qBiyZaVkckKMjx2agx7pxSeTbruxVymgo",
  "key6": "33pQsUYsBU391Nf5QKp1wzf1edaiZmCkQde58TUaVjXxeejXawXShpXNwMjJGjMXb5aQeJfhfNhUoLKoG5U51B8b",
  "key7": "3AusQvhpzn7SoHndWMWeA2gvDEJSJbRw5a6G2s3dT2ysU2v7XLc7kFryLVCPM9WFUYnXwhgXhBhPDHvp57sjw4qc",
  "key8": "2twwGV4VRKbXCkP8EuGQeHGCz5fQcVGCLDwsyX4A9j5E3ZC94kMJC45WRLjfNihEsAxxRY7cLmajWi7f2tACnx3R",
  "key9": "4LsyRRWeBqtDyCsCABwbzugHDw153Rtysr17yCUFvdwQARL3uz7gRHeKeAT9uFM6cx4Yf529rimnjKY3Hmn1DBLb",
  "key10": "U96Tzx8KaFKi3SXnaD1fXnGhQrjkjWcEW9KM9v9SXx7zTSTWPf3XmmtVPRUz43rTdn7bDVptp5SPVUNakqfMUwF",
  "key11": "Wx24YoyRi86GkeodKiMKVfUQKrfc3TVe9TTkQ1eC7AGy9uG5ejyesvqjDLZm8APRkQbcBqeXreTS4kuB3xCzS1R",
  "key12": "5yZJS3DaaZ8hJP1FdWAqacofdKCdFMTFgndv7PSiqnp5WQVveUx7CbKzyayTXYgiMRxv3gDh57W6a3UBgVwMKks4",
  "key13": "2fjcVRC5o2sLvmqBeZHGvzLkr8mhq5nPGmWr7kN6oX36gs1TEDYSf33sKcseJR4qQvbNZLkPgyF2FYmd971Yz776",
  "key14": "apo2MujnPXDEiHfbSErrHwA13ufDjFGV9zE6dFBfY5HnrBV8T5QPEnhyHpkBAjGwGLM8GAmL1Y9RpGUhuwJMaqS",
  "key15": "5XZHcEBroRHHcE19GetbsNbcpApLbCn7YDsszxAACocvbQww1DkLwB4rQWXqCizAy4mauLL2sWqaD1WZSTUr6bwS",
  "key16": "J5afVGHaRUfjRvjjfSTQL2xpRhByQDV1F5n6XHXTShQWNCqzhiosJpyHgve2EJsVjgC1Akr7pxYqz2BMm44BpNB",
  "key17": "2xXaGSxJeeZfs4swA6NUD8h1D1uNS1xz5RZwpeidci4Pc5QBbtJgNAp6Vi57KZcZgnwbvKuMDB7NkZLFouzoCHDA",
  "key18": "eWJU8cF6T1kD5JXbaMzGNQ2CovzpttWUhF683wyQiiSkFFsU6e8sZdLGPHoAvwRQ9Ghs9ULeemp52gWgUCdrzsx",
  "key19": "5pC1CeFcXoakWDL86iG7EdVBjWwPFPEm71swrrW7HLDCFUpaz6KHt2GgUmMRkqrc3PdjfC16Lb2LjxFbuDS4ZShA",
  "key20": "41nK6mTv87UBUgumkccEssRdtS1eEsEtezrp2QRTu4ajDtZFb6kwLo9CdRx4WxoQBGZzWvmsuzkqEs3TfxrTh7tJ",
  "key21": "32CNcMtnKNpRoZUdNiL6ZgpbUHHjrjFkvMEg9j7cQdRKKJHrKNhAgrbqfMNy4WmbUVTNGgEUZbr4demthnmr1APK",
  "key22": "2J5CEhAb2eTESJRMdnGdPKSjK9xu8DEi6iCKMs1d1cA1k3eQaeQ8aRUDV9azMhGkYYu6zLVY1nGf1sqac9H8RMKy",
  "key23": "368nCckS5Dk43LY1votMmNRYHYY3QbaoZDoxVQM5wpH8jGqHeLn9UT8f4yqD7XycS2daZThx4MY26cxH555qHGdD",
  "key24": "7h9CzBKPJSJAnS5y6pJUEpkU3nP5Uxbb3KkMxHBfbguZWbNDg9G9mygfJyAzQzTLrJ3uxBKSFE6286Bwu4WBmrt",
  "key25": "992aUKaG416fXXfMRuzi5L7ZLLBpK6Er9FoQqpL9dv82AvS4FfKdsmDHXE3Zq8ynmgoJQ27aZfjzwi3BdcBsZH4",
  "key26": "31rmr5gi5rg5RVN2heL1BGLLRRzuP2TiaBqrPW7PxRjgrUMP4yXXjbWYZBGiCfMXwagqB45PtdF15rFVxJYDGZqD",
  "key27": "2YZZci5sAnw1mpPeQ3BZNevxUdkVzwrwAnQBZvuYZ1KGLQiySVGMeHxZMaCUUz6gRQKi4XcG8DdVguWSECcH8aRM",
  "key28": "4GVjFRzGo9cB2ycTyvv7YHu3AiBz46yw4CWQcv1E2j6eDS9DpP3tKo6RdiioVTjvDMeXhYHDnxRtum1QFTYczUF4",
  "key29": "39Rha7JoMMEpjc6KhDZtBtb1EieAMNv75hoscmrDumTJ2PQ9BvTGAZSzrDdUifPpT1SBgMBcKVCNNQEkrqUVdYH",
  "key30": "4oFygetHzPpgUFzdUjuDQNFYE4gJcRe1WGx4x6eVDvnMrTaTsy2YXCn7JWgw8B63Y3hF6TzKxUk4Fj2TaifyC9qG",
  "key31": "5GaNAz1pibH1DGtrfeMF6yttft9e9UjV7jNG4LjTN1JxwQJ6SXAHMpr2EQQqS62FkixHZvdTx45JaYCN9VECGiUq",
  "key32": "2jcwL6BM6uPfp85DpQZQqN7apE7rsiTmCNxdfgScxVhKLXutjUhuurpPY2pFqfScgZpkNcnoiQ32sXdGgDnvB2w2",
  "key33": "66wM9Rh8oZ8V3CNkFqHYnrs1wuvKPLXCQWFkisvk8yw1J8jRdmihGXMreTtYZCgXcgFFRufjDdDm7fpDH6XibA8w",
  "key34": "5Cb6xQtvsi1Pk5n8jefQ65f9zoXYHcTygMMoMPh6aGiRSvGixRFR1xRUPY2w3ezpXHjU3zYE6gesHXefR87czNC1",
  "key35": "2LqnT1DTA5bLXUUrAYAHFsiYRgfDKrnU23JjNh9P4itaFo7WqSkuzX1suwgKXEJoHNfPUYbYphR5xSyqm3FJXo9B",
  "key36": "U1qzkTdwsuZM6gaujPb68FLehSJNDH7BekKmjYgsugf17wyPeiqyoRrFSGtPk3Lhj5pKv2upLW8mxR2bGwPrK1K",
  "key37": "4w5iakzz5xjhyiCipUuzd7sEbbj9nWfGudo7L1A5HwuztWETzKUm5ka6LWbJcUt6C3JitAXxvaphYKDAFJv9NP1k",
  "key38": "5zGEeQfdvtrZxUKcM6bfYxVPgwYdgdTc38T5LVQjGNszxgDH5sLFYyv2v9EigPByBJrv1ucXuvAWcA5z8SyivtuB",
  "key39": "2kCpUHjjUEA99HjDBewxuMuRDMxAGU9WQxzZr47JhWfCYqidhMAeFFAwFazXmeVcZVmgrnhBmK3Lsv4u494ct4rW",
  "key40": "fLHnQPUCmnGZn4wZJR4XfrA5k28yxcSPhSVqyYDBoL9HbVXC5Sd1GpYUSH9EDjjAHhmqpqNYEnmWAm7PbVgLDmZ",
  "key41": "4n2ptWg5qMWM1egfaJNgT6bPEyZne9wem6fSt1E6FJxvWaChYdb7dg995FTjKtoLszPtLh6bV7UkYRjgaR3VWEXE",
  "key42": "2eBuZtHcigx5CAweL4aVsggtN1V1rk95uFYCzevB2Q3dntYvTeJV1WxBE2J9SqzDWvNC8kcudtzCsd3YHDaVtrfA",
  "key43": "2pusx4GpiPrAPyyvhhZrS1Sj7ms9dgp7SeanEfx76pMC74CTZAT85G96Qbvw65wRNym6q7Z2ZtHFKopLAxVshKM2"
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
