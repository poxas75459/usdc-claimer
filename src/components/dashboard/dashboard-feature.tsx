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
    "2vwMM2WMEXwqmm55SWpsB8NaZ79FRnJPGXQZYKh2spdYCYYQbwJQcCPPeB9CMMfE59paXqoEYiKvyBSkNckav3Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zii4r9GS2DzGWKeoE3Ejg9ZW69tJsZ9KKsBF364d4pZzxCkNgjfXMnX8JFi8tSrXrnVFnzzdejghxiupgqoZfW2",
  "key1": "3qJp45UHm3pPR41P3M6hdhpAqxuMoqEKpfuf4u8CjTehikJYYgawqjYTBQU3SDhRsixMFhka9q75qqupjuQ36M5W",
  "key2": "3EhCw5bM3AHPPgPwxCJ9azf6uwaXnjkACqQH7oEoKFvzxABRey5z5iu9QpgCCDQPVRS9dKfrEPpdE7xuyGYzttb3",
  "key3": "3ihK4G5SxQkQLCTTjCYvtfgRJT9ALZXW6r1beU7XhfJARETT7BJDu4YMCr4L5FuWpvM4XYbUtmB8ThbuhWYv5K1k",
  "key4": "5qiytfMJUXnmsVD8Rc312rhRCMLSPigAGeoph15Ybso6eqfFzLrFT6h8VUTdvsjzfV2vYkG32sNWGvHLQVpYdX92",
  "key5": "5k6w9MjDPXLtyKKjnvzX8v7e7t51wuzzGuhBdwYJiBB6xgzFGkkXaCDGTApX2kTXKTB1Wi7kYWrdVvDEz6JQWZda",
  "key6": "3CnXtDXsBUWKQXN5LaMboPMdDdqbQhaEa4PUbFScXkwfMGUnyxMksDdEmnht1TKfSZQv5wsdkQAwwJtBjxXMfsfW",
  "key7": "3NAQp4YXGk3MdqnUbwXwcjuJNZe3E2N3sTGJpH58xULXmaAWYAKjndW8tiDF7GaLuhx4rkxZugwFsdkaW6sS8dFv",
  "key8": "2zNmefu6uuBpyrFMp9gu678AZm28Luo8adxtiN82j5NtAyZY2Y6fo9RcKWozSKyLdTSTZcXdERz2nR3CUvd4wEAy",
  "key9": "UgWuYuprVyeUVCsDu17fGyUbndpeWT6nFA8y1zJMewbR1Z8tV8u6Sm6dA6sbssVBn1gYsEUXx5o2vreZMhQiwnw",
  "key10": "5zM2w9iXL8HMD4DP4Dc4hjBzK6xfX5M8yjFKjy12QM9YMkCema3NhhRrMkgfBqHhFbRRAkLtDwZipLzTnB4dwpbu",
  "key11": "3UxnT69u7jknyY3yV83nbyABn6za1boQkS1fVsVHtQMpPctHsZNGk7XTWcQsTYoQP64KzDacYhHVHDm3pENaspGF",
  "key12": "zXSdb4JjYsyuSNYPkRCFuunxzxseGD4FaMpv64ELHV3ydHEE52WBzTqQ51Ldjjao8zKhubDbrwLxBMLyKLaa9dx",
  "key13": "4kmGqCgvH15H2QMALfUebfM1qfUX9H7czy4xWFQ8wMZkRFVkbfjRxoZUe1kUiMhdtBqSXstH9VJhMVEiJ8hondWw",
  "key14": "jaRjqKyRtWaeHx3HEnyb6ParAu2FyA3XmshXUQeqWL7eJFCBPBdocxfZRKLUtNX4bQnUYazXnnjwyaxgCYp4RSD",
  "key15": "3Ns6eBAEtRUXgUqjni1JfDLUdzvssiY7HaeX1vhcSd1z9XCWgLvJkNTmfjdL76NRjzcnAFRVN3cAf5g3UVw3Zk6L",
  "key16": "3oM7V62nEv3EUnpNjgTyPMyxQe8JykoDMbiW45cBvyU1uu2BG58JVKp2Rv9D8GTiURGaSy6ApRvt559q5Bz19N6x",
  "key17": "7emerjtF8Kkz4m9SrHDYmC4zHwzso2HEWYFMzL6ADhmZLz22NR4ChQvnsK5driV984n7rCMd4KmUXcfpJNXy4yv",
  "key18": "39bTWhnzywA2F2jk4vHssSt1AA6cqH9DtP1LHJWKv1RHfjnBLk3Uga2zkL76Q4HgqqtiE8wVhSMuEvVkTpasBuY7",
  "key19": "5fqBcmTjsVoMkkRLQxH5Vg3PSvGQm5HRKkkR4xxnHfG5UxwQXDbsbaWxvAKLgE2JEfRw32JkbxfT1JzGRDZHrbEG",
  "key20": "4JvVg46B65tSjybVGwrf1XJ36UkWzkXGocQn1F7dAsQWvzs2sWc3hwBcrDsMiWxmeP7wKj2JtsBLzUriNDtZXvjm",
  "key21": "42ysbcMoE9ggbw6MiucL6obock1zGhGtwi9yZWx5MgmGgB5CG3JqeGkXiVDbosEgSv72XvSEQWoqtGSej5Sw1hrR",
  "key22": "2hKdK5ZM5eZjZErjDo3RKysfk7TWmy3xViVjhBkNJ7cHNoMzg2MwsZF7iG7LhwvPVPUR9XCrUxNRAutiRfK171uN",
  "key23": "5uz6GqyXU2M27AHXqhwnmGQdpYqKAHCi1kX8qBHKCg7GHcWMHDyk3kPq8egShpifaH22B5AgEVMTfciV6rvaJAR8",
  "key24": "4uu9suzBuLyUSdAoTr6FrKMdq3ZpSMor7TgRCdSBdAD5Gda23X5xduSoeTJHJduPWPVDMz5ucvnZpQZXjHGGnH6o",
  "key25": "3MXrqfTheeWy7Jo3jbAQ1srCvbC6z5R883pPmrNsWKm4hoGwFMUi6DYYXg3azkg9wZZN5fNm4nhQyPc4gAWPmKxS",
  "key26": "2cZsUBTF4KmaCZqhbtxnFGso78LJ1zRN1UsmavT9PSoS6th4D2ujxx9dvEYVWADX51hABBNZYwtDPqc93Qtwcxae",
  "key27": "3FKhJTFEjpdLtGzu3fRWyjdoj2WxJM8uY8wffZ8yXjLz3K5wCwSZgt1R39rR7fj7ZAh2zMS7unxvg8S659FsprwF",
  "key28": "4UEvt9DAG7yPw5EgBVNPKvorXwEcntMKwGtrHumJaNz3NCcwNEv2K7cYBMysc4fVxTTiBwsCay2rG9ba8weLtJHY",
  "key29": "2n4P5v1fG1hwuKmFD6PaYoD12KnWgWiMvPFqnEhdzg7g17LVWZ1rtwnR1acAL4gUZq6WmW9fhgapAyHKz2KM77Kc"
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
