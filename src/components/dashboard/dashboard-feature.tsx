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
    "2WZ8p7YZ5oFBmQYNcbM2RgYgrCyPbPHcegRoBDatCWJfSyCvY28Yco7xtqP2CKe5RNNqrAQbJ5Ptf9KBEVNxoSLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ah9mH3Yb2Hy9K9zRjLVyXbQQSb5NAXDyTxW4qgNAtvZ9UWEvV2k6NJpCJmPdJ9StXEfYBFCC38yvkjLU3ccdxp",
  "key1": "3f4Lutf66RKG4BA15UeTfjnPQJVCybCc7yEwcrpV8kYc5pQ6yVuEDote98cvFfBrHznMNE2yadF5z4iSbJ3AT5s6",
  "key2": "4myLohK2wG6LgEBdeWPxPYFmFMeUe3gswTCpYRY2eXgaxhPr5obWoBaRsJih1Q8YpuECjMu5TgKvsZEbM9PfAMqw",
  "key3": "5SH8tvL8nCtKtNjtGK61hR6b7VSykLuqQr21gL14vMzVUH7usBcE1pmby7Y8NbJmUqmcg4yc38ELBQxgrPhDNMtn",
  "key4": "3cok5u4jMhznP8mh1Y2UoaPzv222pmkZNs1omgRpkuKXJYccmvsQFxvi3nXd8F5tSEmCaU7ukEiQZswRUsphWSTu",
  "key5": "5bk9bznka3NkRC23BcdDhxwqaZgPBqVQ3KjcV6WXzE7aGRodpSeub68kfLVN1eFxwXnarcAC5e4Q8ctLiuRguVtq",
  "key6": "4DeCHSAR94ahfwUYT6ddxRnWTcbTiQWqmQD9SqQY6CuoESuoqkFs9nFTE5uzZmrtwwTAA7MxyyLojKEYMFeh6xGc",
  "key7": "4BQxc3Jg5sp6GAKRUTynu51S6ZNXZkV6LV2muY4ogPgj7ATkpzn2psPUAFTFbLHpCfwx61iNxkF75F7jL4Tj9RCW",
  "key8": "2wnDL1iVGw3bj4DSpsvVyCsKdUybk4AcewLTZ29msxyEJTBcTA3GbUb84pnXAjBJJv8EvTe6pvMKfBifXjeH5bQt",
  "key9": "525gPc5M6k9XwFjV2zZ1dKK9WJ8h9o4n1YtkTojjiUvM1Z3HcpmHZvTYDoMMKjzCAPjesvSffBUtzdcCRCeNBRmn",
  "key10": "5hWgqckZdZthZVPJmMX7Yk57FXiCT2qacuWQGDrwWHx2Dz3nZ2KXLvRdiGWomdy1jJYni9AA2VcP24PDPbD8BTUA",
  "key11": "4HLLXqH4zG15ZdUvXGJW4JwiHUHLn2tLRVW1E21W8qX3i36n84f8r4UTYXaxGdBcnZRst7eXzfQEQGXKV44XFQd2",
  "key12": "2kCkmC3FE3mzSzn3JvhRAGk7BWMooNLGfDK2Jkx4mb3v8o7EqkGvXrfdGMovD6Mtmahi4B4i1rDdPXSqTAdvJ5P8",
  "key13": "2AypLK8wRNtdbJcqrRXUN6FKNBNRT1bbFPStHZnLo8PefkGnarb7xHdU4EiQ7LKjGHvpspZuVsGacuMi4Dt17mzd",
  "key14": "5KyVLCUJYQwt8otW9g1ojBqArXZDd31HCW53qNDAfSj5V3i8WeUMRxwKWrTcGknT5DqQHhTNxeLnnSuNYS2Ku6RH",
  "key15": "43CssXsoYuXFwtuYP3jmSuVTJhyywMYA2DZDaWcLXH5CJvuEQ6SrVuDJsBsJNhcBv6554vLx9SMNs4wTuKje1Pwj",
  "key16": "5wz2V8te8EkYzRo4qJ1GgR7ZPbzrnVqiKgFLk1ERZbrtaqUioUbiaX8WpPAb9fq5mUG653BwQjMjbUUe243wqAJ1",
  "key17": "5fYzic4n2nzJ6P3nQzHzr3AjefJERq3tQRYxyTY9qALWu9Dp1L894gFRTq7LyHDia2i3u97of1kbkozJCYcJTWPU",
  "key18": "YCBYQnJUXMg3qbpgQ5hkysRRSGADUGEAHob1HFjnZWJdL5Ptpek4NAsTzUhVFiTS1M4KDpMsy59hLbzfUv3MRPD",
  "key19": "2jE2Vd5NbhgCeM4hAg5pji4TPWgSfSr9dtEngZAqXc9BFFSn6Ade9PL9GtJt7RiH1fMtZtRjvectFjoEeTt65mpj",
  "key20": "5iS9vrBGd4w8CDVToxubDoEPQf5DGfERWXEbDbUsELresQcwdHSMjSpX2dLgy8GLX2bM3astwcg3c2kpahMMxTE9",
  "key21": "A5VKfDWbiEXLoYossMgyBmGSsr8NqBYb8Se68oj8qyFdaSrA8YDCA4wYYiw6TzTJ5f1ejbR6kWEzCwgtfwWwjuY",
  "key22": "38BbmnxGtFch2KgXUp9YDKFvdqVNyVw8o5UWKTcwBx5N99D9Av7pLskVwNrmbn9DjSYzpmpNZSnrG7M4nd4Kaqa8",
  "key23": "2B98fS3Vfsak2YyC9DkSco5G9t1N85cZ73oLhxc88P3JLjYu6PRprRXbfj4cnfAZqFQrrq4zUpGUBHmocBF37MvR",
  "key24": "3Nu9azpBkByqKcBsNPeMXNMX3BzvbPB4WU96aC122LaCKruoHhSmBGmwiLUZ7i8tmPaQ8UkNirRpCdHfKYBxLzfL",
  "key25": "5AXAQwcffDgbcN3o42ixJyyWgwUepmaCL2q57FCaqmSxK2AS5dAk7seqkDfWwvz4HcPZ7gHdgaot94uXNqKbkdTy",
  "key26": "4xhvvcWrRq1jDzb2BJnizMz14WTWjBiATrssJ4HTpcEkgTYrJCN4a3mQytcSJ32wq8ASjvWX911os22K781zidGj",
  "key27": "2gddqJ7DNJ27ezHbisgbnPVdJdZFcN26hv1sZHb4RVhB7B1XnzGimXUkb31Wp9s66FtBzRwwaJiTbbJ9tonsa7vc",
  "key28": "4b5KSMSRZWbVbBKnNVWvzboBQRMG1QLqE5hAQCbjuPiFsuWMSLpGZd5f2m7Ejp1L7nUa8vTF2Lq74aycRdoUjrN4",
  "key29": "4N1CkYtHK8TfFCM5L6g2Uimtz3pkbth8DcH5rH6X5z5QMtHRs7fz2CRn2Fzko9cZXEKifQCp94CRV1suzmdr4pai",
  "key30": "63PXXQj31qkZ6ZXFRcTM8Kkof9As7YQWw6BnXTdc5rSBeQzD1kR2iFW5D9c6WBRUj23jSgzYqy7Yg1GuyzaLVZUq"
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
