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
    "2DvvdEFzmYN66eiJz3SJNeQU9XzZjm3bryRD39h171GFrDvHPzaafsfhifRnc4ruseAjF8F6iT8Puw1NuKqwhveT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bVCqid7sr4JWHiXSUpyVP5xwoggy6jGkHfE4HbmpA8chrKkES9pKuLudNChaMisHcipUfWRZVoC6yUZJbLZPwuP",
  "key1": "5adMDjbJvMZyJf9mxXUDu7ryra4pSFTqNhP56Rvb2BZvzVBpUUJzdD7eWv64ubwY7yDn9xkoYkW6q5iNfhbUB85V",
  "key2": "67bMpoa9dVLpuGUKoS5ueAjReeXuXHj4rZ6Q2UZu6DoJRzH7SknwjAxvhukzfY9G4WUG5H1qSKh984BNtaxJwktw",
  "key3": "378Unz8N2SvCLfUE6mFZo2dNLmCqRfL61CEpRAQZXwj73zy2fUZNWDxZFWT3RDwYLEpCaTx71RTxVjyBm3dYeNt6",
  "key4": "ZuwQ6Fy1TbLExqNiwCxvXDBDddZSoH25oXoXjHd3YD4aqyNWXsGkcEcZovEmPYLY5qwEkfqpUbp8PvVUoHskG4C",
  "key5": "4yq5tscAmC5qwGWvvtcEYT7QH7JWgSVbsJXCzWk3jYhmBouLPXZe9oLFEXQ4mbmx1NsfLArZumGtNGZCgX7rnvQC",
  "key6": "27CKSUdzaoKs89ngb2mauVVA5SpCCkfUME7WC6oLiRcZoQiesBGdMd4bu8AjZqmqn3h4V9tBgeAtXRm3Q3Whz5No",
  "key7": "64hv8FECQ6sxkzNurZ93ZWjuegNLZLXqDLZeQU5gHP2SFYz622mScJQNjbWcDwZbo4BRGfkG4UYKaX1Hm5oanP4U",
  "key8": "RkFCYJQ5DWrpCagwp1jGqwK1SjJ2zdYYzZ6Gfm2LQ6BFz6za1awGSFY8AUboHvCNJDAKqfVxSRwizpEGmY8ho2Z",
  "key9": "feJtY5289WXNi4JzBBYPfeRSNLwpE672zqrXCSz7xMZje8Q7mo8ufiWWn4nUshftfkFuqaSQuUnP13y6UAiaszs",
  "key10": "5a2nzAVvCYxjHX9ZonKVvtuzp6GC8F8eyykeKqUUJVBqiuW43A11KayJEGWMw8uxPfqhFuQceMyfRw5rRCtPEDA6",
  "key11": "2MQUhrP1QdFJPJE2gi3rWMLgyxsQzHqCYi3aMWMwsbKYeY5i6cpn5ydY1neCC8jNei4EjPap3T6UFX23osysYUTR",
  "key12": "Q6MU9cFzHwMzq7WweDWMeN1ejJXiK4fAMHYUKGTogypoHfFeKGom1UJuB2Xv3rrRxboJ3nr4EuPLggeqPAyjJbM",
  "key13": "5EZisd2Kanv9aJZsTtwSvywfptqpFvwVBTzW7FEkPA8TgRzTPAgQZf1HAEr1BTcaTA8twmBJorjZCKxkqYq4EZmv",
  "key14": "5xbP3E54XYn2txT3rpSHEbFhUaRwCU93edQ17nBvF34qfqG2xpUovajnW7BXLRbfX47dL6W77KuQpRZwEZF65C68",
  "key15": "3n939VN88pG7TA2FyCdAVKvmRMHRuS5FWooFjSj9jyNimyV3GGUDzjtfA2thQAizX7n42V3posLGLNrMfQnzEqPm",
  "key16": "4Go59HMYYLU73X8W4iaMCYUCNyxmcYmmXDkLkorU9A2pR8eFWFb3aAYPoN1F5CSttxCPF9pqcwaiTdMd31q2FFpS",
  "key17": "39zxrujbeQuYNiAsGgFL1Me69Atj98LAjZWJ51J98EZAfrE7LuafzxEZYdMCh6YRuCvNZnBGVPdkavfqzxNemyKC",
  "key18": "3ZqEKmC8SV9sEVeLTMs6EtfeA4M7HPtmncbDx6ha7Qeykmv4umPUemE5jqBKUqqv48GvaWpJTNL1KLH4phCEKjwy",
  "key19": "62NUiav2UieynZoq9F8FxuwsLhqSKRaSH4VK1MyUrm4HTbV3xDTRKPqfwFmmjtfEHzYKk4YwwAsxFbYJJaRAFsL",
  "key20": "2sq1SnuXjHQUeyzGgF4t1h6MSMYcxhBpEZ65GbnGUT8rkHaWTxcfptULphjKZTfeY78TUfpBemqKn56ToERLd6aw",
  "key21": "5mVkjbja8F23bZp1xifNobnNXnJyDgPvfd9FzDwfvUfxPU8zQ6UNF6H5zVZ8AFKc4hKSTAWA1EtmAi9PNuaLFtae",
  "key22": "3YzLkNMPfXbK5tyS1ukjnKLVcRcQajM4utDejjsh6ynLgYNTZEcpihRw9ikjM8RouGLxZurjhhUpuiBwoBx1R1F3",
  "key23": "4H3JKP4W7Pk7AQ6JLJHooPUDPFkRQiDYfK34uhZTqCYgd1zy5xsM3mYYSeNN4DYnNCGcGU3bHMdwisfYSZogbQvF",
  "key24": "6y6CB5vjmPwmCwCM4i76ANieXdHKrSNDjkL2sssEyt8hDCu5NJbPMvomQxyigz69buGLK6QPmooYctTbg7ZXpQQ",
  "key25": "5dSCzzfciXRDteCTncQBbpd9EvUVBauJ4p6JKAvUZ1vHGJHx5nEHfjNdFz47cS9JikoP8b94hX5QFAK7YqitU8g2",
  "key26": "654vkLbKsST62frMyAsWYcF53o1d5fntpHYzd7R4r5JUffBzKpYEuWgHyNPaYmxzszS3kmhGGGUvb61cSBvTqD7V",
  "key27": "4nvFs3VgWdjBXxm6uG3eW93U1BrEhUkjJoesCY78RssZqyc7zmoN1gYcs5QwaP4dZaXuYbgymbgSSfGWftBsab7t",
  "key28": "3YcE3xGFVPMv1RCPLPryj9E9Hsfdu2SaFwXysokRicpFyJBncPb9EPzq5X4WSNixoTqHB4rCiLQgkMRSrJvZ3PR9",
  "key29": "jsXDD1JnEajVQn2eP8D6vd4ov9gmhhTfQjHymoUMunQFTTPqRcjo2Y1NsqNS5XHw3fQjoQTrgx66KwRpmdrMwxZ",
  "key30": "2yhq6gaM6sCGAGmVJGJu7RHXGuBdxjJNgAr8CKfxwNi9zyZLfjcnGCHo39Mr2rrg1KMccFV3zESgimM1GHSgD3St",
  "key31": "2PqL4AriVbUv99gqW6wEUmdZ4kmabLB27AVHsppn8puJJ2nz1j8fyoa3NT2725jUHPYpmvEGAx5jJ1XnHB4cjLHg",
  "key32": "33XExYnvEuq6HVEEJaGRCw7NPQ9usRoPY6LkbCr7xhDSWVB6k9JAuVp7kyjio78vuhsqvMRyMYM6hnPfbSrHjWHt",
  "key33": "1dUP4ZdHZEF1BvGVuA61YwYPFtGHBjNFoH5VmTXoQ4zDEDPjuxTGVD3jqERPyZC2uEGx5mtdzvxgLt7Sqs9VVoq",
  "key34": "2YNdFFjHL4Kh3wkpYSKNq56rop2bT2Q5t1yJijqR9MxMpkr1wyDGUpxcccJzmdeTM4Gf2uwx2bcUyPXhVPuPMamd",
  "key35": "4FsBQURdTEjWxRvsdMbKJLUCDiaNMC9Vjo86D6wbEfASzF9UANwW8MZqYF6h976diZVhMAcJPhU4ZL8TqZBtR1Ri",
  "key36": "5cELm4eqxqam5JceHhJcpmCAoiibR2DaDDNnbSxH3v2v2K5nrnHhKiRac1hCR7gZD7ggVbVUpjwHRPihhgw5c9y7",
  "key37": "4WXMHiGn9V4nmaUn2iSLZEKxQmYTUvXXN6p2VHCxQbKxsSbTPaGbwYmZH5kLXhpPQZo3nBQvuN7MrqjmG3KtNdYo",
  "key38": "5ADXBvhSZLAgi5Thb3DryeLUYpEWCcbdxHMMRvEwupgqTxhjmUSHuNSp3k94KNmmxzhFVxkXx6HyHcFzsfqrky4c",
  "key39": "2KF7FkXmFaiavxdb1WmcmkfQX1oREuJFspgLWDDwWPxuGbBdJ63gybPw7rEEhA7cVJbg6tR7yCGeKmcsvD1NBFjC",
  "key40": "4cbfH6xaEg7487G7ZdCRX3Ax4B5Qv7yWWdLSZogrXMk5BvKVnGANX8gHVJwPBjME8BXtwqYACCRZ7Ati33vyLzV6",
  "key41": "2qhjzQiDwvSJcNQ5s34YcKC56ygmTUVFFaZe2RvsfpFukvTxnbthhfdmQS3CCZEG4SF7piswR5th4JjWQUcpL6gV",
  "key42": "4Nr4UKtZ6jrgYmkywRAsmpSXRgMKrCWNDH5RoSLxjHGXDJ5LL4bK2cbxLhciVYRE2JJNQsxFqDLz13458w8eegUn",
  "key43": "444DccC4HEPqok3mUZMvHRZtUUmGVCYAXyq2PiC4FYxjhKSnRYsRwXHn9wDByMxfWK1pECKZx5uUr3rqiNC1F2iK",
  "key44": "4BGLsLdvfPpjstjxRufzNUw8TG996v3zEMHARL4JPUfH9Qp7QLnLQBWSNvAdDQ98u4LXcof9vXiyGh89fFm1JaUM",
  "key45": "4MVgkXjHxNVVEZR2Xz8vuG5qvRzdnx2S6QpMCssGRAx6qs3ZKgXPh9WJUdrVQt9BjBYPFHpRGe822X4vhc6fPGca",
  "key46": "2FpijyPv9jeU2K43upmC4y718Z53BE4s7AH65tW16ug7SzPxUE3XKuszgsSaGF1yCxQgr1aBz86ZzxNecTpfbrNB"
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
