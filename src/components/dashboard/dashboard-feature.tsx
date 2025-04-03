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
    "49PRn63gYHkZ2QsXyu3p9M2SakKZnqi2gc37E7ZopzowCn9G8QbHqN2XpGSg6rcNzC9T9dsnHFmBVkPZrxBVtBsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c3BBezJtWRQwzG6vwqbcwdQ3ZYtMvCsixv2oDd7PxxMcBuv4NCkux3ZyQZFRj76nDTDJHPUKGXAFSHWhrzGJhFo",
  "key1": "4L7qMBdn39bPWNQM2CyXdgRTEGPWfkUR2t8kCSFz6RAfzoiSKKVyyfaWtpcHypgaBrAeNKJZdwvRA7cUzqUTSEWS",
  "key2": "2kWKSZxE6fHUGCNpwKPgyiwSx2JKRmwjEfgWa8mRMnKwK1EGJKUhvA4qB5eD88ziEE2TZyv2QZzhhRryPEjbYHaw",
  "key3": "3gYb7LTLbYCra11HjZ5iKXN7NG5RKY5M93YjiiXnmK8TpjezmRQf1JY8dNdzx8fYMykQ8MRZSbuzCYBKex68NudM",
  "key4": "3e1HVFLkzwKP7sKMWNaVHeY6q1EZ5HDLJVqC5PeBvjBpNkPPp7DWv5qUPUqXZQb5JYDFkCmFdc1orWrijhpeeiga",
  "key5": "4wsDYHQgCyMU5MZLXhJ8cD5mC3erEWdrsB4MurXq7XM8fxgX96kqwK94GKqt9odmjywrdnPueWoXn5po7SjqbAy4",
  "key6": "5DpZvt5MKKSb3KsbkC9JoEW6BWYhSGsdrbXWwE9t4sDdJk3LhZu6bt9MYiYbWAKnEW7pvSPBNzzXXSmpAa4JAGjn",
  "key7": "59eTNyMr5jEzMhpTPMdc9G9qcqx9KRykxTZ6YJyp2NAi9byiRUCUoMvuVwjqMm8139o3J7bViiAvmhAbNW69SuFz",
  "key8": "4cVCLGWLphAzdcx6mBPv8vi5sbH4nVwFsi7p7mvXEXMqyHmSwL8WNAxygXRZnXcV1a5nHtJJ7tXNnnZNcmMGKpdR",
  "key9": "3kDRkjMfRnnVr9gY8RakZesFCvq7MHMUGdJ7DUHAdMRAA73jGyCPYp3m4o5VJVukmQb5ucrhbYH7RTvseJQTR46L",
  "key10": "5SkVE43pmMAH6eiTafyjdRnC996ErUufv95qVDSJA8NhKegnM5V5rAuiZ7puTBLu2JZaTrzzF6xBHjTAbC1tF8pk",
  "key11": "3dr6JU2bttjpBio7uFx5j6coY3FPdGwEqAZtQw3LQJttWB39E3sBEfLDuGXRcWxUzAJY39q2FuwM55M8uvRspRqV",
  "key12": "4a1vMYg4YSqAzCg4PK22yb7xqXXVEDRE2gPjYmX6L7zdvCmqtPcp69rh8po8ejzgFAWFoDEdmVY9zRhxb1ZwVERy",
  "key13": "5RXhB3D8sezJHwUS2hH4UKTeDqp5YGMfv3jtEtE4BGQxd2u67hcxecoz7wNBCrZyRB1ymProGYkseXjbCdwUkRrS",
  "key14": "4DVBsmsvwhNweppV2Eg7F4knMNwcxszbktN6pa3wUhuALBvgZj9Qm4youaLMf9tJ6qSrKsey2atAA6TV33R4ALQT",
  "key15": "4j2CdWGQyf3TCV777sqVVrbE4sPx6e4gwXuvRcCS3mxQVkJxAM3BeW1g9W5B2aGcsmjFbEBgTDsi8EQhXAPPjN1x",
  "key16": "pJNF36oidUeGrEyogMNGmv8f2nBRws6gSEffwwXib5xKiLTAaLtjPTT4KXYm2UcEgYkUoJdvWc3E3ogi24Qsbm7",
  "key17": "56Z3hrpPSmVZ5o2ttJaTSVej3o3ZAf58vpKzcsFACscy6zcfbFeGEY1jvs3KyV6TAVGkdAZskAgozPrJyNGBsRaz",
  "key18": "4QQXZMqb3UqMamhdgwigKnG119j95DjmAv1AiTGQzRZYuZCneePqzwQVXwVT9tGZmZdKr7jmDqtiUgoG5HJe5tuJ",
  "key19": "4kytyZxrNEXZmTGBEuC21ffK5XhZmuJLPSeBwXNXy8wc4towvAouw97sppjosYtoK4upTrApbWbU66DjxNHfe3Fv",
  "key20": "2r7tN4vhatxcM8KJbVebBu7qR89hQxgwmR5CJWmLaTyu8LSHb2FSNHWrCHCJFnNNp7pF2jS8zrp1NwyjmsCDhyQd",
  "key21": "pjx8Vk7KUgApHjLniqYb9FVpFKJrsHGaYptKxvGphRPYHxG5GtwM233ovro4W3sjfvRkUsJHxntDi9N3UphTKrd",
  "key22": "5tEGVnGoY76udSsbyXeZ8fZc8pcBGSRBG2XoGXJkRBfLRC7owbw8xXcqVDQQQqNM7USwQct2njZ39Dgut11aRbK8",
  "key23": "4DmSBTskkhtqWsifiVzWV44whzr9pZsH845Sk3BcCFVwaeb4ajAgP6f5YHak5QmVpzvaA7mHFggmPmeLBb8T8ue",
  "key24": "Q8n95nZpDbpQn4ExtQgVBR5f8iw2vG1tgs6ydDxnX5i8XDhrVTUzHt2ZzZX6nYGJhxfgvwMVLYhsgvN3C5TWJ5K",
  "key25": "3ztumBLz2F8hnMYfbojrHWYb3tkYeBAf62Siw4kqA13AKyt4AAkV6WSKw6J5Fb4GLoEdmQnAH2j5uZT5idKyDnFi",
  "key26": "3CCqy86sspdZz3d5hWsQrdq37aigHNh4AcmXxB43LEcTFyQtoeMNwvXincoSo7PKneecSHQy6bCBKP5sfPfDkSEP",
  "key27": "5CbgDxydR6imdCt91bRVwqUhtvwrU93Hw5XRdQeXSNeriszJb6eqy6h3sw3neXWu4Sk4hVY5UuEstgG7UDBbupBY",
  "key28": "Qh3yBFsJG7QErHTzoV4Fcg1tSAFjj9SMvdXw9BEb5zHQvsxSgwvUedcSQvKyM5fC72gZYXytFGxcM3PXuXvDf7x",
  "key29": "39VnCjbbXeVEERP4uN5AuMrE4wWSEXVFm67BauafdKogA6jUbkfMthZ2v5HJZ24usTrNEK5Uh3eHM7KmE9hg4L3R",
  "key30": "4ShStAVSrh21RTiiVe75zc9JB6dkY3f4vWtencqweEkzwa8jrwjfBTYQmth5uKEuyHMaJgpqhh28E7L5k4Bx54EM",
  "key31": "3TrYerpAXJXegdSKoNMX1jcCjZz2Rj8nQCBJ9W3NtmHoaVWvG22RpDM6Zgqc2jQKzWN4uhJCWu2nvv6TubZPxqZv",
  "key32": "3ynXbii3xTzX38NeuTkW9NzpGb16y1XP9waVxJHtHEL9Wx2aXmt9jwc5DsFaetNnNF1mmS7DyJvJSUxQEZQW1vJz",
  "key33": "3zFkKtDGWttDVEBukDLs5N8zE9SrHbMgPdB5Xpyep65NvPAHkCCQPxinjHYDWv8cod534thc9Qfme6Rd6WRsxhbJ",
  "key34": "4BEwTc6CMYbWS1kFoc5Fit51PmR2J3CJCGWWRR43iW7CSJVFEP9T9ueWdxHmhRNCmfdoPcqCFFo9R8jPvBtTe3W9",
  "key35": "3DWNzugMyATfLSMZT6ns2aGSVGSfnA555ynUMztU48eehVqQsYBZVU6p5uidazqi2uxDK4kyP83wnQSb7q2LkD8f",
  "key36": "4fPhViA4rUcuP3JabvzZTgdGfCETqsbQJkEV9KRRmqjLAJX6nDsUupbt36L5rKdqmeBBtG7iXfhcZwobEzDSWWgG",
  "key37": "4Xzm8iyayaPunEJd8187UQcvDkRUpEDEptZ2bgtgfsrheLLabxDieib71jAT3XQpUXZP9753oQk6k4tgHMsbPTQB",
  "key38": "pjPG2uqNYsU7yeKYcB1KNCrishwnKKh7KsJfAgTYR8GgnTb1GNbobc5AfPfyVShag46BcLebDtJShZcLxkWUuw6",
  "key39": "hXB1QFnAN8juJpNmejBtS6ncbCFN8fzgFC8nWDo2zkdGxNG5J4yggSZPX2JZUyVWbtJgxXWXPFiEZimtgZL1dg7",
  "key40": "2GBj3vQwmSvsyAsVTQJ3LfqCQ5drDskTtXB8roddDDaRGzE1AR9BkDa6M18Vd2X1CDFFUsNAEEE5hwjg2zjAziVb",
  "key41": "3my5JNtBu1nsFxUcBi2N8oDcmY8KCgbGWTbKb1RCRZeXr8v5FwzcCUFcwLnN83hNS5QMvk5JGxpFuVgAzdSjVTzZ",
  "key42": "4aVruwMnVkdi34mBoENjN3P1MV5ywfSxpt8jKBPjderLBgxSXUKQW9RoY7hkABgvT3m5V3HGDdR4qPdFe4bCFdxq",
  "key43": "25c1r8eXwx4Sst5XZjDrXkA3WkVvg3TPWbsZtM4BzqHBiKoyZZABdJ5tGNQ7YTioyCeQCXUrDFwmyryZCymR7jM7",
  "key44": "Hb5v2UGwpfnNXQtk1VbrY5TaNvukLBamMrWPkjLBbbUP4K9dbEUaVcvgCsJjpKn9QoMM53tV1Kz1Be83Th9dwmG",
  "key45": "e6JMjxhfhPvNQPzHahTf8nnyT4y8srnJPANPdAW31TxWDquPzyFkkz2opZotXFNnJPmnw8yGfomqQFX943Ca6Lc",
  "key46": "5nb87u5N4CqXx7BSrbdczCFZ4wKpgGtYXWPBNzhwZzM1M6un1baUdw3ijAmvtxqVYr2KwM47jv7k3nDk851wGBYK",
  "key47": "2Mysfn5NJ79tE7Gy42Ef6W7fpxjEy3hMhxWzxgdKm99mdxj4zLqSYPdAEp3FTvNev33D7MVQsk7vxbio2RZmQirf",
  "key48": "59XBT2padFPiTiUsvtymS2XGfNTdTx3cw6q5GEF2xQ328MknV1WJv12Q91hjri5Ft8bj8UGfKUivyeRkDXpbnVFG"
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
