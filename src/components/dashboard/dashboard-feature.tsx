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
    "oox7jtXsC37w75UaKKmfKwXq2dRhwQre1ztRMWpHx5getVAVDCXSG1NTxUJAGz7sqDjiuwatb7Qo1C3es6C2kRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZmi3YLhz5cFtwi4KiweQ23sTNs5HtCarTXZPz4A9t3cijCHT1fAKcqWpCNyddGwz1C2BJRPazBbJSA93VpxhWz",
  "key1": "YPjRfz2Nzo6NJss5zi7B3bgSE9QwZcxzG2BRwZL1978YdEf1nyi4udX7boTcbN5Hnyi5hLkwGehpxCCC5XSXdFQ",
  "key2": "4r7yrLWQCG8NpuxBaTWaVzrmkzYUveuNCwf7TF2bAKXB365a7KZ9x27TbVSEdsuFMqn26sTeqHWqK9d19Uviys6C",
  "key3": "5wcvT9goNBYqAWYgf8tC6APZvntcCLx3UuqWXskXG51gWFKZpXmMKZc9mwXUokSwAe3u8SSPNjiGvoiSx1FK3AUQ",
  "key4": "2Bvdf2eQ7nv6e5pWAn4ACFaKmzq9wuQ3bcc9fagMtwrprqrGyX4F3TxvobmXxyjotXHcxTNSTC4ev7XgeT4qpKHS",
  "key5": "3EdJyfoLm34i9qUq3qYN9xEzzdvKHbEBJr3GMq749Xd6EDNsaK2ZbfQJ11NUnkXJKvnrkwYZFuQjNpdQG6AFTGyX",
  "key6": "5hbaF4qA7N51iGnSF3WsvTNd9EmkLqPcQeRNdLTTJbbeFKNg9M5QWEA5MAPrqYYj5ycT1yp5Fj8Q1wL67KKMPsWF",
  "key7": "34kt7CpJSCjdHkmwgnDoaPt8XTb7UzbNwcwNL1xyMfkuyPmruFqoNTd2fyDeZmgtRCZP94vmJbofjSsaLNBd6Y2L",
  "key8": "uJV7ZvxRHJFab4tdAkdyprtTzyxZczGvg9hbJYCh6VH6RPrKzX6zBZDQ1Eqj7eGEfCiu4SCguQrZgfBXvbtKWyM",
  "key9": "2bkQQZzqGF4qbeQUqkVs9uwRq3Cxy3tjRd4kMy68sSqi9Kh8TJ6BMmm5XJUA1Cbvnh9E96mHXfYCUhXCFPC3Z78U",
  "key10": "2BPBitKVzTNSS6K9sDXmGoGtKVMia99TSyjj1pQ2Xf77BPwJsf2zgNMu3RPHLjUxKQojT9fAtMBpLhuE67p5yaVk",
  "key11": "2juCeEAUTB6VvcgXbhowxNhE9pME4FuZuYRkk17d9Mf33SqKKqdaNrtfhPytcoV3Bu3KnzFMDPM2GuQAj57qj1W4",
  "key12": "kwjsTpsBJEQm2BctvyVVKyei3Yc3ntBA9DhHuvKvWU4MZx2YcXhZQdVS5VfYDsBmMkHTMeQiWiXqstuYvENMXdF",
  "key13": "496wxkLV77JS94w6w3HF1vAtVh7Qeo8fK94oWexnEcHxgZQN6NepYr1VT5jZJbZe3K3LNXZ4K71coEUuzLNk9G9c",
  "key14": "2EAtS5K7pKNwRNYtbjLPMXyJQy1fjr2mns8gSaUhuhDF37WRcmYJh4pbn8eEbmLegxzYmpwEJijBXzjgx3XYxitk",
  "key15": "5DAPC8odAn5QkGHXUsKmXJafbr7A3xjRXAQbUaSYd7b4w8x3uFQqbdHaChsJpjK7GyFudepqsYT7ZZHdW2nLWLz6",
  "key16": "4oF7WdSDeaxPUeVqizzEAzKRVnTvLFHZpZMDxUXFGJb2WFhKAhjMyFfne1YXSqwozKah8rqdiX22TMDYQ3KZ6j1Q",
  "key17": "24F95Fd2zx7LFGSCMfvDe3roM7vEyLATidAkX88Z53aNfEyfa6sw8mtBNvAAtot62weruFxuR3D6XxjysNJHPHsT",
  "key18": "46JXAp17BsEMgwNcdi95wDiNkn1PiXCzXYFSg7HwLAYutXBMdxCfqgwe24ikL8eCzhkdJy7QKFhcaEAgZRJLpRPh",
  "key19": "41HwWLG4VvQguFZDYJpEU4BeVyYGfiKWsgxLDDxaSPAjxx5JFJAZ6ksCsCPu3HR5PRyn2m6KuEAN4rgFFJoUCDW5",
  "key20": "sar9UoCsyc8mZ2jMvdjAfeRW8HuV5cpUDjPNmDuYUXfFANRF5cxtdUg3xXhaWrTY6JFxQ3NSu8XUe8CXLuKSRZq",
  "key21": "2Wixa9NVaTMNQNahZrpT4r8ho6Mo1ZxhPHsmwt6obYYdxtxY1eMuuZT2D9yNsgwFbzAXVfJQvkAPT4QNQdZDfV2U",
  "key22": "2Uxc4WWzbHzaukcV1o2MeqZWkqvxMtKbKTkXr6sEf7wUQpe9mQU8uKmBgAiR11hNMyrbPcx6R5e7Bjvfzju4nfC1",
  "key23": "6SoGm3RkzkMB32HcYYidr8g56A2oZwY43UGJxHAoh1dme5tcV6uk97hprA7Af2LVMRRQoqjiU2emw1UEZ8DVwKq",
  "key24": "26Z6Amd3bmVtCjkQR2V979jgADhsts6ns2AdGmVLxqBgG4jyUrQqpxNQCSeyB4SwWung98TU6WJwJzxC6SXe9L8G",
  "key25": "5mUSthngbdriERTPaHkT8L3SPKxCL3LDvpPNxqKq4webzpBtwhgjc5cj3HtJnab4gy4YeAwZY82JuEAm15fDWBN2",
  "key26": "2nFRkzDvXafL59ZmekXwysH75ajzxNgsJW7couKax7DfGvTsfBmyepbwhhQW8gE8DL5Pqp15RAP953bFXW1r2Wyj",
  "key27": "vj5NxTgUWBQ7jPKNehrNtovBnEULwc5cArCneDuFhLPx2y4fgxXKcB6dcSQKUarQosekWTwEUfXeNcRJWoRfXRY",
  "key28": "5BAp7jSRRbCr1kwoFvnqNQ3ovm9HypFGk3k3qsRUnJZK1f5i8CmS1wwqAVjNe7iQ3xQ6EU4JUr8pM3Awp85sSZSy",
  "key29": "2c5R2cdAwM17nDbYHqDYetQbNQntpsE5zU4jxfsYtjrT2iprt4A53iJwFYJxctMYmqa3SzSeGXwW1nKbk965kqko",
  "key30": "5gSjm5FmMoiigk7hrqLcTvRQgoDPiWiYdUsQQHr7RtbHDG4BVxr1v8VYdycc5n5AC51gDw44QCJNvi8fUNh7Gg8S",
  "key31": "5PZj9kcFMNncSpc5fTjDaMtWDhB6XA2BctRttZDPn1UzzqJNo5ysua85qP6jnYq4eH6WidLsjpeG7p51osMuzN9v",
  "key32": "3zZNwaF2AYH1dApEyfBYxgL5dunuwDVbrcGj2RJcXgj55MiYuVjk8f7hh2uCNcroQfFXTYuc14iW84pEW1o9pRgW",
  "key33": "4iA9XEnjqALKVQaaefsNf95gf7cKtMTaMui4QBkLLYJDo3zhCZGZ57YDyowNJiQQ1ZyeEGFmKUe5pTow1YRQreWx",
  "key34": "32w5rtsSuchL1oseYP985FdjF4L25w3hHRFj5evHUYxUyvNHQgj3twJKje6o2AGQ14hXqrvPMg3RCpXrBxzTnUzg",
  "key35": "4q7RKY9zyxRHVmT1AVdmsbfkdudQ7wokPDi5aRXCnrwD2swhu7T124Bz3tAAU4tKpeSusEw4D6gCD4a6jYaDJf5x",
  "key36": "zorXv8y4M93LzstD4zvHu1dMs3YHwvaDCY7o8L7uwSc74huDvTAmDcvQpLmzVLhiUF71apM8jZyx3u6P49FfiLv",
  "key37": "38c9yDmHTrfHLnctadgf7nwJ3Lzxoxe1zA1j2dCkLqbBvDJLSDJsPN4tnCXP44LHA4KhxumbrJMnwfkEjmpBatyB",
  "key38": "4i14traVLja4cq8EAp6V6Jtsqc2etW5uP4dv9bqfCYZsXwtBhLVznCMAY95mVybEzuTriPNNeUMjDFxPXfcj82FH",
  "key39": "DGseFPqektVQZS5JyAJuLduZqmm235e1QMD99u36s8NvsqB17ezF6EwMQLTKRDvnfP2BMv69ehjbFEcWEV5jDC7",
  "key40": "5A2Jtx32sDvxAentZrHvHNDqJJnMmze6Fj6SH3yiVuQeiEbhXaXAnjQizcJZV9hW8n9T76utXq3asarzLkpnWyWW",
  "key41": "4ntAnjVVSR6LdmZQSsfgQvQXtWhRTz6trcS9F7MJwCNKBvXVRorkFrK7KBdHqZk3eyxS5z49VVxEoTypXzQmPryC",
  "key42": "gxmtWNmCdcuuvqHmAiezRDgfV1sC2xMMLFPZXswX52VYHhJFE8XKxYWUTNjsYtxkn7dMq48jqbEQoQGhmYh4FEY",
  "key43": "2vYotJPggzqTX8qr2ukybHcptKZj1z3f57VWmTiWndaSn3tFDBwiZdZAcjeVQXJsW5UnV3iXLnzGFUvUX4NAXuNU",
  "key44": "64xE1y79GocToB66fGino6Hg6CNcbFv28JtDu5CGzpZPabYCLcGWQbP7P2KzdRhFGiMC5LAQm8wcF95QTcNQ4MNE",
  "key45": "4tNABvuCHfSp6K2w4JouibE6JVZKKcTfsb7MiqnW5iybCfijcTMm9DPAG6AqPCyqxevmftP7mwsaaWgRYQ3r24oW",
  "key46": "37NNGbDW6QqrgSHCnQjYSD9mkypjR1L2eHjjqXNBeB5eUQSCXuEsMjomwcm5uwmH8WDBG7hGg2QP13x6cFR6JDFu",
  "key47": "Ve7HwysTVyNPoZGKeoybW15HowrfcT8iV5o8jg3pXS5j6LS1kwrQRkAtoDb74SSKNTS7TbvdiYTLKvBsXbY9cPC",
  "key48": "63bxX33dsd3gVd5EQBR2GhxCgG3eMjv8KNvEsf7j6y54Cu8E6pnu2oesu6E4FVASXUbLXRtkn1c6ynN7pDTPTohL"
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
