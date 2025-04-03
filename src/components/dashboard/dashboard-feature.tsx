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
    "4yZ83GPzFDYNvL3igwi45Yfvi1TQNXnxCqCJVA8ziWgkP9euTrpqXcKdX3ENd9URyDNhz3bVZW3gdzgATzveQYAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtmKMtjouLhEzuNQ3NdDTdBL3VvhT7TLVcxXAFXm8GysTsjYAjEQwoxgFvNFb2ngjaPv65gi8Je54b1MGenmbb",
  "key1": "2ZGenX27DrQQ1yCxtdWLdbCij3iw9RpoTqwzXtjeaVa9ZKeho7GR2VUXSUVnfcq1yPg1U9v6UcW98v1cZVyAgY7U",
  "key2": "5R3vzfG3UKBvKewiqdAvoyKg6KKzAGSmaEP4BjM4WH12voaudb5VucM78uaYKVm6K4uNBXKw1tbgC4a75QYyEh6w",
  "key3": "2iJZzxzFW4PjpZFQKq7NMdNpYMwUEHu49G7KV4svVjK6Km79Gtzfibj71kBB6bECeNCQzD1kugA1mBQgYA3R8tB3",
  "key4": "2cnKWHibK5UddvUemuE9b8UxV1dVfVBKSpeRoBbG7uRDP1rs23FMQqhXmBrMyydeHXtXsQpUY4cYN3rcUM4eeUgG",
  "key5": "5sFArp9nfV2jM6eWC4bRgPnoJSzjps5NfonAUUXeaUywVNLogShTDi2kPFkpKDzYmAs3UahKxVhmwZdASasqYpJP",
  "key6": "vYZi2qGHq6GzPP7Buzp2QNyF9F1nepTGBg4A4wANgNjNYT8gVL5p5kux8XzBkewAaCahDRC4tnQGF3zNUc86t5z",
  "key7": "3hewiRKf32C7ZfET6i6VoZfWPrkvKLigsV4oB7iqAm9UAfGwyhahaAfYG937mAJYRLpqeMyazbcJZqiAPnxUwFaf",
  "key8": "48WB4iFw72yQDGx7jTDnUTWUq9SA8qZZGf6hVEC7vudnA8QEnBLQRTGdYopSFaYnHJwurF2sFbtkUL11gkVUwsGr",
  "key9": "25b63yT9UsMkqrmWJao6r4TMvD1D2fh3Tci1WpsiTYdjZQDQREN22DQvfjJnqVu4KiifmuR2mVVnHxPmHLFMqVYK",
  "key10": "4PghXJ416zYaCyD1ZuDjWWC4RddyRhSeajV8X8PmKuVcd8b5sY1kxBpMh3V4Jmgu9CWivKPE14uFmyKPLWoKojJt",
  "key11": "2X9WFbuPtGDS73mD8zBxqV3t2141dD1qrR134SYU6nk19qbGouxX1xVW18mdmVhBqJkMvMN4iwkTsgGH396X7bkb",
  "key12": "2YWBLjrTBkQSUEWTKdjqp3nN2DYbf8SEbrwj7WqfCoLXUiXGpKnaT375P9tJipy5NH2haN2NmMTwb8rt8q8HxQdd",
  "key13": "3c3ywbhrRFn6JktmYu6RjrT22vPTL4XMLToEK9q93pH9hNsorYVhJ9dXR2oVKnV9Ph3ufsygs9Vy3bAF23aCgEEF",
  "key14": "4HBaRasQ8Nq5GWoUy2jmHqBa4H1fVQRz6joF1PnoKPpkiHQV3eJF79Y8aMzHDoLCtb4t95y1yJstc7L1iCJUaC18",
  "key15": "2NFJVJrCibZr94XsujSa1r8kWwKS6Sf9fMK1WdhJBVWCWTiTfvvKwNAiAKPfPMnMsdoNeve2B4Khr1EwzUm14yfz",
  "key16": "3DdPdtCPdV2KXzWbqKvN5qkTeKwR2y4qETjpQxx9t9YDFFeYpeQz3sukQ8xb3Zpwwct6g662YeLMUVCgv3tfGWdg",
  "key17": "52K4BLRidsHHCYuhhW46ovVYoAwyXr1Vbegi8Y7EaV4zqQbyQW73TrkNe2wudNGS13NYMzV1X2HWq8fsMKfCtLt5",
  "key18": "Dr3SvmVJyYKEgtFvafTGQV6eFZRXDx1ZjLDMdKyCVF1bqDoBJbvwm6W4VoFVZynsPdQpM9CxmVi64dNEhvegvMk",
  "key19": "2EMEehNrDCCGdtv5aDwbqta5pPNNUC3oKH8LY2HXJVCXW9eVaSJ44k5kJC5gGo7bZHkHZA84RVsGDtJWgggApj74",
  "key20": "5rAJzCRRE5FRCpFXhWBEPJ8yBTgYGmoiUKAwYzAiXQimSn6UKV5NbRZooaGgjnbfNk2u4HDPkvFp9wPwaixZSg2r",
  "key21": "5tiGZ3WvPUn8y3dbrbPYZmU6jNeNemVGWKUYUb1nd3foPtkFyLEqM68zs7atJDY4JpunWQZGYrMDyeX9jkkDePxU",
  "key22": "3arosB4asVZuLpmA58XVG8SFL9GcRgBpMrJKL5Qs4cUQShwScMG7oy1769P1j54iPhbUCaFjmwV9xiocyxTLa2NG",
  "key23": "j7G66cED5mKWwqRfimVcMjR6sryfmqkvfCnVGWXymzfNszZCZhw6RU7PtPHnXaauHemZciQdVSq5oR5eG7WzFX8",
  "key24": "2vE7vsVQ2tHYcJBN5cmvPTPeSK5FyWraKt4URfodwL6aGXRPb3WmJXsAzi2Se6jNF7hn698dk4UvCcjGbwuU2rb3",
  "key25": "3XqyXX1gyHW2zoctmBckGergGSCbLYanhbRShZJ98w7JAf6Sr2fpe75FdzyYRMkU7GmceHicS9K4SfArcnD9gEkn",
  "key26": "2dnSf4Cy6QZP9PQ8KuZxLWVKbjMZfxdWhda55rDQwQG4zEAmrVbYNAypKioSvFj2uV6CT7VY5BZkhF4yfxAAYMKd",
  "key27": "FBtCrExokGLfjMtqU4UxhP1ZFwdrLM4EJ3L3PRQyR5oXrz3mJ7TKu7kiMKsbxAPH8N3CnPRBgc9fbpCTus1pDzv",
  "key28": "mQBpffKfG5MYnbA326gAhScfGZzkSYGhUSDTWMmJEXWo3aqNEg9Q4SgjYptoABfjPVtAfwUKYwVXHo3PEHRJPik",
  "key29": "3LgE9v8aHJFXBgTWyVv7GM5uSqXzqZ1YbRYGjL14egnRCwqMt5pvop3pWZCRPS7AhsdfeseQvaoqftYKHaJYA7vN",
  "key30": "GVr6nFTLFDqHPasBhwXzi2eFGEvQv7Jm8r7JZ8g3KPgdoeuukdkXhfzCaBZq3DqxxyA3Y55fpsbtZQtkjhno1hh",
  "key31": "264zqNPwpmsaSh6f88rny2ct5FpGPJdZbviDUcuXzpMLdhkpKS3YhLwPnJNP77fGGhm3CqwrZLeBDxrWQKuCzSv5",
  "key32": "5qg1E4LtMoV2WqY9prSP2ANycSL5nqtumjVJN8tZuciBniVYjcgcQ91mE7UKDUzfE1tdC1677QLZ45BXvhfK9Tvs",
  "key33": "3iytFtBXQ6xavnhkMqcJ9qzARusKR7NqfiuxxidAZegVSVkRaLfMbDekoREMjHfNYhWhttLYGRkLFBg7xaRBFnEb",
  "key34": "3kMnCG3UdnPSgaf7HEH66H64E7is8wVZ6QsVRBMLLg3PS2WN1uLd3JV9VZKyu6Jys3HXWQM6Z9fjyDxbGf4xPWDY",
  "key35": "3CZh8Z9EZKATmSv7fYa4SKEvE1NF53fiNuz1WdMFTtkjZ325QBgR2cdnkRXvSVsxm8ux2VU7Kmpxquh6cUyrhCDa",
  "key36": "2QxtDrqmiwztttJjoZrYes38CqixCvd5Duz8NqMbdEz6jxwNFZLE3SBh18nA7zbmBE48foEL9VG3AkMs5dFqWZqd",
  "key37": "122XnTvRzy62rcG1LBtzyeibFEBo3pUUiyhXtq1fczHJFYA5e2NCYAtX73WNB6sBgxYU3e6KcGDj1wqbVRHH5GpY",
  "key38": "44UqwznBECvbEYA8HPyHroLwaZJ9mq1VL5nRHKBKf2q49ox3zmzPThuXbAqVsfUdo4AySn6RGJGN6ZbhbbRtMyhz",
  "key39": "4cYeh3xFGnGdHBHR9MLVRygAWZvZwWupWt4obXBZtWpUghKgmeUxeRgsuXb6wtdfPfHm8pB9nfmmrdsFwd7rTWE5",
  "key40": "5vw97rHv7BXEuBggzJd6BoEDKsx3jVUhZq4dKrUtcsCp24EUi99u44hbjYmwYKzbDneQzr9SmUe6hBLpowovkiag",
  "key41": "2E7gEGfgTCvLvgj8xKUeMB4MEmZdN9KBzaFMYVNeoaasCNmjw75APE9FkVWMy1UQa2ky3ztJ9gCbnT4RZXCCEghg",
  "key42": "2VDxe5XzX4qBb5k85VLWXEyWDz8yhMjS14q2qvnUVs27GuMCspzkFyNsfunyvEGKGSNUTxNw3SBcGDsZh1ahHmZN",
  "key43": "5PauW5WwhuBtywPmCNczYRZzrwepqVYJDe1owmj5Cv58xZiMzSd2U5GB52BemNrCXtEX9weaZQwqazzsvftH3G3v",
  "key44": "3HXgKxs47s7vppeypuLXLNp2MKw5aELUHqpPfTxL7JTVQysoPTsVL3qt2vcPy45kUFNTxKb27jaYjwSbLpr1zF42",
  "key45": "5gcwiu5LFJ19hhpHTG6rQB4J9HaogZ4BViuySKdNWuZGgPujiPpPWQMCgtXroKqjRrW5WdBkLnKSSxZoYSiYfxmF",
  "key46": "335yD57uc7t4cmXQfRDnqvoJQ49qYysVdeq52JaGo9fvgBXhRwFB28dTb6FsC4cM1eYSMdvVUaEku72p9Pxb14Nw"
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
