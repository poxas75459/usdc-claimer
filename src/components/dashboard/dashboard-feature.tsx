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
    "GycowrcQkyiADrHMqq6LEuw4JHnW7wX38EW4ghKdfZjvDM2Mn36UwuGZcGTTrxYow5TgT2RKFt3Zb9isAcsdB4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PvgMJAddGmt8P2mMLZZKKsSQuhNejHETgUz6KBaQZ5vcWvwfBrRJUpqA28YuHZmvAesCCseeq3rkUbF5eQkjbd9",
  "key1": "4qsYfixrvSwaAWorCE4ZNA9ewDb17Ti3WNUdXKjm1ZgJqLu3vjVCsvdqvaf3Dm35vTgWAT7n9pGYVbGpThN64LKB",
  "key2": "4zTVbLDkNwETAem3JhfupRTSACbhGU8VYrsY2ErAnKJGwNa8UKQNT1XX32Xs57DwtWHiz1WsukLDpPWVVTeNB3bn",
  "key3": "2fwXx9CfM4uZBbBKRtzaWbtaxSH1bMwtvmkb1keCNz3tUuhB2ffmSG9zwYXzGnA2cAxKvwW5cGsW2UfSJazSvaZk",
  "key4": "2vXiyEFnUBsUEEjwogha3tq4xBe2SQWpNRzmuiNgGby5wE17BbEUpntx1WcbydUJT8QPSbgptsrknwYwE2Ft3huZ",
  "key5": "32QZgz1FTiohvcvmbkCrG2rVKdiCcScxun4FE1yDrUJGndaej5qhgRRBGzeSYeWeENYmeTJpKEHyk84WFE6i2Nzk",
  "key6": "3SaDSVtfyAXwxaZNvjRLkR73ChCqNEfzm9WxWgaZfQDtgc3FEtWmuTf8JtpLkEFv5FPkZb1MKVhnzYNVNDQFC6aV",
  "key7": "5x6nBNQHLrYN2SgogowEdhgS7fq7YNe7bcJSZ9KSHeoo56B8fb3Nv9jZdtw2VF9AYZFRikQzmL2MttfQyUXbJ4L3",
  "key8": "4CG1oEbEMUhA4fE3UjE4xC4eNN5tofUEDKh8DuBbk1VXH9zyeW6rSvbwiG5q6TCzcPNPndvZCnCCsBJptpWnxZ11",
  "key9": "3L5wmmYFvejDnDQggUVFG7rWGEMCS3ffDnzHBJNyKNToEi3JtfW4ViwuByB2jZENW2PCPuoudagGiJ6YVkxJtxF5",
  "key10": "2SduGpS8gr2pKmp5d1gjqcrxM5E2WhJbSiXm28Aj6Ftd1htkLKTV7fEmziSZCy4xYxJrFFPm5qNRsveuGvxcQ7s2",
  "key11": "h9css7FMW4C2vWuAGEquec7x27pn8jEfUPDR8TLE28mJPHqUCGgRXEWHz8e2PoARawWsGsuYJ9oLL8PJR3A53Sz",
  "key12": "2nAoyjnsocc2LZ4VUoLPDHWSwQmXnFFnPgUfGYFAYVEiJcPEzLZcZ7wTirgC6ySjNeuw9WNLoCR7pRwf1dZtTeeU",
  "key13": "3jVSFfANhQo54hULzEvAMPn5FTr9mASdRJHL8n4YgGfEtNb2Nq2YspTSb9yAxnkUuryYdDNLXUyNCBSoN4253iqU",
  "key14": "5ELqqorRwnSwZf2QwjGaKYubMwV2RYzycdDob1Rz1iQvYuc5vtasTJLYuVE9bASaR47T98gyVZHJFHHSbfatKGH5",
  "key15": "LN5XRJ4gG5tz4YrHwYZvd4TCuUCqzVi1rn5K5GEvMpjJbN8A1Vx6kqyqHeuJPqYT3Cgh9xrMxZ8YsuqFFivuxZz",
  "key16": "5sKBLf3Azc4u1AF73sgoawPYPr5o5PdhaEG4RBDHG9T9tqDJZnrnw8GzMEvrBnJ4g4z6kBGCYBiMiZ8WSBhwNpNR",
  "key17": "4pd6sDJQno9a7x5XThnVezzaPzSDHKP58HVmnTjzMYP35SdgfU6mMHCW4kjW5LMcPT4ZG1qqSDeLFSxsh2weCxui",
  "key18": "4XVtDKnNeRC76PZzWMTvMCqY9FLwYm9cbRjhnTGQs2xoAwSoQmQLXSD2V5SkGRfaVnyg6iQnw1TwRXVd7Y9QtfFo",
  "key19": "22mq274WiQ2ytX14Ahyz9UbKdujERGQj1Eces7hXPGRu4PvUPYE1Aam8nFAYGPCKv2nmHTA9rLPVoKXh49xMijbx",
  "key20": "HVxFTS1kF1rm6TeSPek2EG864yMdrDuLMguyUu2X1HrXBXwW2nXerhZqySVtTrmjPKagKaoHfXzfYYoZDcaRFTG",
  "key21": "5jK7LN3rYLQ1dMpkpiUjou41GX9LoSPNEKfn1XF1cef5JqpYeSKckRNDbrRUXkAaodAXPTx7AMJPJK7mQMHZiv2x",
  "key22": "mA1FGwU7jKygXAVXVuPhwGX5kWzsWx2fsZAw9Bhm743f4MbDyawJcgbaUEEUEY7QhbgXBAFAjNQLDMEKJUes8gT",
  "key23": "5FyYtVoRxdANjUYRzSTrHw9mrDKQfJZ7z2PBQJDcAmKk2df6TLy4SqWW1dvT7TJNdFccj8ZJMBAvzycjtp3hB5Si",
  "key24": "5vNKhVnG9cfHaAQnySuSVh3kyuELeJdk4885rAVmuAUqWDd22FpH7EJU1aGwCTyN3kQVypofV1WXQV1JtegSoskB",
  "key25": "BaqZvfGVnELFjqg4kC5MGcWNP4P6xyfJSzpSLt9ZZSXv1yYavf5kHnMVoZFvdktkHhNuuadSEh7r6nre9G9g1SU",
  "key26": "4qCAYAzi87geDHfbg9wsv94zBVrQeQMKqqShB3C2f6diNb6FNe17Cci5cf3VHe6mfRd9LecqBQShbUftMzf3hd1o",
  "key27": "zwFye4mSB1xqFx45waJBSvGj7Fva2yqfk1y54Uw4JaRYRCGkigLbn9MNGwaWTcyodAuASvzwD6s6yJkYzAcFMys",
  "key28": "G7MKB9Q1Z9MHnXPn3XjHaYm6qoapDddQbNACbXPYE56g4UwURQvJdbyzohhi5hm6tTrgMjmL7m1wcSQooqnWMUd",
  "key29": "63xAgsxumFdym1ja15AAunfMkNuPCo3JKFgTzAeX8JZuDLdScguhYLXApvx1Fg7SyeJho9VAmaHpD95aPkKz5HpV",
  "key30": "joRxFFHCjBZ5FZCsL5GbtuySFLeS1NnmskqieeuZ5YTaMocARLLGUN2c4XBkRHJo3atKXUWZYjzcqyz4S2pBZH1",
  "key31": "5t8RofALiMDMz2FguzBsXTwNPJEWrPSopG6UKiSaen5SvozFVuVgRLAc1kVR4xxHRLoGj52g6BmDF4HaJNPsaCq9",
  "key32": "3BycRqMJVWXG5qQzaj4kmjAn7MTCYwwu9G6gk4XbL6DDcHpwhY4YS3JLJjsTkohStxnT6am3EUPwh6ohWHRsajDh",
  "key33": "3s7KLXSMejnb9UL9YwQs9UDDKy8y6V76yRoNwR8FbmidE9L1jcrRmmUY86xQPYVSHFce9HcPJPt9ZoAXDBcKjf9w",
  "key34": "CBwJK4HbP3gAcZHSgfHR5eMsk96jRNJSb1Mm2ykz7gemHGD171BYbbzbzyV5eS3veMPo9qkA4gHoGXKdEBydX51",
  "key35": "2C4o9jkqX81YDoPbyQaFoRmSQTK8XjoibiDR4tF71bDMz7N69L5qaVvatv8Xaw3KSypa9bhbAZskMYZGqEfY8RBu",
  "key36": "3UdC78LzBHPkwqGhMpFF5QKK8QmrxQoSW88u2WCBvQ4Qgcg379e5wg87mQ3ZCN68YLGBT4hW52fYEQcJ9Wix9TRt",
  "key37": "HN6ehVueV2ccs9K3qP7XZenhkDuPDkizPXJKcRSadqGT5kLxAS5XDh14zRa1bxVuNuc31Y7c9Wta9zAbMEj3kL2",
  "key38": "ANcXEQXu6haY7yHWCqVp4iTfyBehzNrmNxfNtTE1obfvezq1wfztyP61C5RsMnYQ2VrEBqzZEMsZfiKBTD73LLp",
  "key39": "3FzZVFoYAYiD2od7a1AJ3xjUWFk9uTxnd2JUtfp26TbpBTv9KEGzDTWxog5ryog6msyFWeTMJCD75gwHRFh2dXq8"
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
