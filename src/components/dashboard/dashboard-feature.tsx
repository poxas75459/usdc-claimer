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
    "3RXjwKLiWQpXKjZmhvy2x1iweVBVNSqHUfCmGKKEraMSLyevMTyb7kb7LhVUEWTTNKoFLD3s8h7Pai5TLrqA4Wm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21prAN1UpU3T21XYWSHPp5xvyUKuhF4nX2hwaj1XHx3bPZeEHYvHciWpM3oCehtJSiyoMmUhYKN1Uqf7sP8S2PNb",
  "key1": "5qtNMHM8GCHnQP3gXensHJQnvZBE1SLY2Bs9ptSEMQXaVePk6QYSM2T2FrNC2Vy92411556Qx7LFqi5vyLSqvn29",
  "key2": "3jRU5iJPWTNgzVj4mbP8btXZJcsNcXewWspap2DdsQJfXwVQpvPsPpP8KwkSSP4ayxZcYpq4a6HqoD7vowNvKXMz",
  "key3": "5mZ8dp5fQTjFoH3SQqLgwxQVN3EnGfZGmiNXwPbw3j4xaaVbRdxRfm7h73bCKiPN3TQMeT2faQYi2ehABx54ey2Y",
  "key4": "2LyTUuKac2dR7eWJfQ2wiV3BzqcrkUsmRFQY47uUf7tHU4mTEEtDtTinx4P8oK928oCC7bFMrWjVyvsp7Rbn53Kk",
  "key5": "63fBAQ9CJKt3F9pfTKpVrRzxXqNWygg5QXAuCJLSQtMKzCy2vk6GAksJUkYzQaN51gKLu3szt5bAZBeN3qzYirSk",
  "key6": "Kj7pZyfwudoiy46bJYWVby5ySCzcNh9zWGcRFZGmnKSqvpFU9LQmCjcgjZhnC4rDZvj6rHcMcj7BJyvnmWVQYJa",
  "key7": "4oyDbGEDd3VWaiY9cCar49bCGvro1zBZMGzKK8BNXPhJgujXWabGmFokB96MRJJ2U5aPHkoV1FDJq56WovCbDDuz",
  "key8": "HQiiFev6apwELs3JXSVU59dZiDsHW4gU53JHVvFEQW24iSV2gTQBYXmiGr8PxwTSUGk6bLc9DdpK2rVB6VjYBnS",
  "key9": "254rnpX3zCXZpg9AzeNrLCAmpHwcAHUX77xM8SNcGiZkMYgKujg3GiyjZMVBjLUREzprjAhLN5ac4gbgUV2x3t6p",
  "key10": "pExHCNxLtWbejvpvKQfcBMkgjzFxxhG2uCJUHLQQhjat3VaNPit67BR6DGeh8zJExvphXH9LLj7enhf9apt1QMg",
  "key11": "4Mzi6NPozRZpX7YmAGgpp6etYKZVAKdYzooAZ2PMgS1hEMW7frC5StLp5zpfrRcDpHKtNBMRZ9Fx2WVqKof9mnQc",
  "key12": "2HHBME4sMqTT9EpaRAwVegxmapdZHXLQLyHVCUgjididT1tbEJRGzG6rCQtzNUrbvgrFXZiNbZ3Q4AqBovmF1LzB",
  "key13": "2MkXXsrf2hBrmGk4T34h5VojEeHKQSnHLkinrMi25TuRfmeXMMGReQ6ZJhGPhEHDGUSbDZqFayUdowRZ6WpVV7oa",
  "key14": "5BP82xCecwpBH5xkhj8sBUtFMC1h2mWhfp4Wc4Czq643qRMrYC4uAX8Tm66q6BK38JgrRoGFWtSZoS6ES13nbvmZ",
  "key15": "36Y8tJmm9XSwuvhpT3FEo7EpPKhdUhxVexWyLmrDMGk8qaboASoRRteuvvGMtNv7t74qPvfNUGcd3cRF28B2sQRx",
  "key16": "3T7VGrQW2b8JWPoeMk9G3FhCxaV9KBK1nLuwEB6SCSztLWGn6fam5EF29T2PqnYAqzyU4DRkah6gHPfA56hp3WrC",
  "key17": "Nfn3tzCG7cD6otHShdgxJQmASaMKrM8VLKAGGyZozKYvoTgv2zSuQQyp7aKuxPUyCbQF3ELuuFpRcmx4PGKyhzD",
  "key18": "5g9N3YZZnRQ4TQqpAtCnD1KGUMgEhLnHhD5rzH5odiH2Beb6Wt3keuEiJeVPANmyUPd71JMs5MTeLhB5e7Vvn1at",
  "key19": "j1jiLNwirYpxBEtv3JMeH37bny3Wqq7fvuB2XVuyzc6YTzKdcpTEZcMBXg3SVVhc84djpg3rb57YjfAuD5rm6kj",
  "key20": "52Upj2YVaZyBPiHo7tpAS78uUpxabbwdAx7ZCWk8PakyiuiGmDm85SdifboosR8WswbdJYgk3dB2w2kuvP68onrX",
  "key21": "2LcH6hPJistnp1FHKt7Wigz6QuA9psbnB8xhxJwsiom9TvCwqPqw85rMza62fMQeqKht4aWXyqLNLFgnsGMdGekX",
  "key22": "4sRJcKET2QtiWTYMpFQ7mekmHVkQYjs1JVBXrJkCf9iASwuy1UChkTWnWDGA2AkzA7Hq2qfWmkv95RKXSMaPTZ9v",
  "key23": "4kVhfQbCYbuVhBoMdPKjWArQvKmjkwDSwC34NMzgJ93wjDaRpd8gxhMARwY83MDsSUp2j1qnxT9ZWdtqwWoAVPiT",
  "key24": "24Vh6PRXb3dKuNz1GGm2u3bA1ZgU3nvRRukM8ZtYKtD2EgMwDGnMk7Z7v6McJKc5dN4Q8LB8dM15rG5Yt1ynF1oz",
  "key25": "5QivnDT7DgQKLzxdWVGgVL7RHjZTP6Mj1FCV3UVPvgH1pj5MTcBNhThPrqcHogzzJ7Equ2T8hs9c4g3nvvR6djdg",
  "key26": "XECJzuJayzMzzZ5HM2jKzmMapMzqhSARcTJBMvWwUgadky3CH8qfvNphGJqBu5Vqj8vodVuTm1J45CjmkMrzUJ6",
  "key27": "jrKzCgGeYVWZ3iDskeuqdF5bdBTq151cdN8qDx8McoAEqaZyF2WS9v4rWaNFLwhJ7rmUDcoQL3UhttvzKhWXNes",
  "key28": "Yx1Q4CNKeGFmA6XkX2CHxXaFMiK7HeVkYygNN27PDArVmiKtYkL1doc5N4PRReowHAUNb2VzZAzc47XhzaBmAoW",
  "key29": "3MXhSChjVHURrvgTVVaa2WqKFRagVnvLYajjA182pWcAR8UC5sXvNZCHdM8iZJ5N3hi2M5aDZRaikzkv44813ji2",
  "key30": "2GpuwfG4eqGVA7LpwHz7UmtcUNgzESnysjKJ5YJHs3ViU5EoG2antRoUdKtWuruKUs6MNuFRwA56MuBtfeHiy2kK",
  "key31": "5riYPe49qJJQTBw4imvvLvTSrKXKzEpLsNbtdkv12WN2MfeWnzYTc72ntWKXvanz5NPedBT2DQaru6DUdG1RkGwK",
  "key32": "FxYALj9ynUNh2y6UhXinunyXSCQ5HdJy4Pjiribe43ubVDkgVK3JfzSvad3SYAyoWTyDiYqBcxFFHeXeP2K5kZj",
  "key33": "4fdFRg86WAZeqoK1iq1UBQQKsKNDeYdYj1doEYiVYeEaVx6dmm71QVskWuJhxhnkihzz5EQJotuGyL94RcbQyN4B",
  "key34": "3zmpK13xTqDizrvhvkqXWyeQaSnzFtUf5TbihHcXYLBzZhMfaUCfDgj5pxGKvs6q3JYaN6NkUJvxWCPVrXN4D47K",
  "key35": "5YF8vEjN8D7dmAKnppq1K6GQreV1UeCatLC5WLb9ciCkA3vyHqsMbjLsajavmYwgKeJmmwv63Bo8o8NxvaD5wCDk",
  "key36": "5wjjaCSK4pwHAdWdVtoseTVaMRD23ZoxuygxWx6dYQ9KVkqR5eF4R9UnhEDLUepdctz6NRhhU1zEpKfqxMd1qeva",
  "key37": "5sScxRJouQiRfWwVqZv16DZhS5QCA5ScTiXTsg3BdxiDhUbb7XcDUAgPNwfV5efrAo21AqJ3YKZDpzQUujG1ryDa",
  "key38": "2ecNesX81u9wbPg47J5TTfmu3wk1VLQ8UrFoJxLHSimt1mS2Hi3SEzP3ob83YX2Mvc3U4e19LZ5YQz5sNDJqhCNj"
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
