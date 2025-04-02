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
    "3D4FC1fPJpjg91ECEhLWetNmQfNSijKff6mYcUFXpAQTVQ9ZGiacXaNVi29hhAun67TmtE21jYkqHBfYBnF7Gvad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHyT5UBBHV3j8QFmH1eEagmvNVhea9jm5hR7dnL97tv3T2rdFgZLM4Ko5Hz5TvPGctW1L8UKF1vLqhBXwhXY9e1",
  "key1": "39zKuVeyMVPErWTvB1GorLaQ678qqhEgj4prAK4xaLcjzkzUTViphVenVSX1jys6KCpiEM4aXGHRxNfhq9AN26gW",
  "key2": "44zfq5aAZxLrpz92GKfayn44WxdKyatSs3N5xmwJ22ZpUUM51VNvjHGic5Cs4gM7oob8aG4PiVEu8sZEp5Wj7j5",
  "key3": "5LKQtB2gTJtq6mLPbUwFrSMft4ryhgXCvKf8VdAm2jiRjreD6vVVDvegebAXc5zJz4131fnJW4vVUki5tT1gVGBW",
  "key4": "3AAH5xUqWpW4cmZc7rH1fELEuSkx6YGPK1G49RvWUa78bJxrBj4LtqaF75VGYz1c8XySftr7S8sxWTwtmU4LJCzp",
  "key5": "4NRWJMM2KHCWSNqsRAjgUUejVcqkh3NF2cLEGYhk8zYeifjU3tzZnzEGiZErk7ffmMh6K7TQehPfc6JMbBXAKMJj",
  "key6": "3oWqVmeCfG5JTMDcFM9KBLMqmEPFKxgB4uJzqvaVtTPcPyWgQosKispv8tn4foaCP58ZfNtHCApp6xWh4SUjeJkf",
  "key7": "5VJVLMS58nrhBsdCV1VBewKah2oa5CWs3doUQbfabmaJERn2SFitH3Tf2qmeGTbJip1HBaMwU25yEg4F2hf7MXgR",
  "key8": "67pD7J5DmtvXPVK7eqeW6MHzLscVBN5eYBezUtDQARXKoqtLwCf6nbCo6ePUeAg1Zp5oEq2NscbH13r9WymoUrxw",
  "key9": "5tUfhG9KZx6MpPCbBZE5rd3H2G3c8A1rug1ycBpX4fM5EjjC293fjKJFZ2z5QRLdeDJzATb4jE3qzTEY5eeTQKvW",
  "key10": "5Bx2GWmLbxaJYWG2RjNQUGUArBfnqyoytKWJ1ZxYTWZ7DZtFfWNjBe5Ki3L98uZdCkTQHKXSRRHffVXXoVxRFDrq",
  "key11": "3wBS9SpgX43j9xA2bTmn5taU1c97AJuBmmg6YyqhrJ7pjfHm4WUoAzWPmqemPKx7iu9rfF3y11d7bf5BB3MBbPxn",
  "key12": "3pqxTqXYa796NddbmJcGcE9EgLf2prDgnVNytCFfXu7kRArNRJVHUbwZjoy3n5QLVZL8fAnX7Acy61chNQBujb7F",
  "key13": "2rQsCPBoeSTnu23HREsf3QxugspEVb84WPQjinaUYfTtHL9QENzVPXgYU84QZCpr8K2YgjMreqbxtLJujuE6DBaU",
  "key14": "Nncdx6UcVuZJndwvhHQwAyEEnjDZ73FBRJ7eeuwF7JngqTptinhsAn3f5FfbNwdBPrhjswMdNxzT4cfPAdbpQXz",
  "key15": "5qMx3mjqA2n46RgMxK747oSddVTXuGKoyNnkckkSdYmm3umwrfEihMCxRuMzeqTR3sLkw1iH21vZmKSTUMaGcT4e",
  "key16": "2YdaGyPUjqjfiHbT1YaKS23sunX8AMQAfAZvCip1He9JuWBWs67xoPhrmxrAjWPzxqkC3m4kK9JZet8ALZ8JayWE",
  "key17": "5h6SQhxzLgSqivVDZ4m4yimA6W9YV7yhsdwHAWS4J6igXQBuqGQwmYLxGchyY4s4FaEkfoty3fDiMukCwiZ9uurm",
  "key18": "ho2eoGGtRxpakgrb4oWLcaMDexg9oXr3FRwTxnChBZHfNA8RVTL8LiVvWDVmU5wC4iRbNYba3ExGq5FgvGyqGnZ",
  "key19": "5sphzzNMwEJkAMEjAQ4eBYkuSxfpt8yGKxe9fyBpfW2MSGHwWGN3JNwHu3j58C74cadfD4uREbgL7WCHkSHuTuat",
  "key20": "2RhWedb46TFSETzuZKTSMjTn8MgLdHMrP5JbqG11vDvg2nGMGrkJQ8bQ5HzsdfXuHV5PXyDQBnbyftoZj7GrTNMD",
  "key21": "5VfWm1r5whkdPBko62iuGwErJzt5UdqsoAy6eiWTqmxHdkCYN9uYJSKjBL8udLaeJseJisFBuowAKe3nBgJiVbVi",
  "key22": "4TM61xMiaSiwuxgRWfomCc3ews33wzJEsT4FUFRzJHovhqvVwRYj5LtntR7vrn9o8bjbEnYom9ZfLhq769rnjrj5",
  "key23": "2hB6ni9ceaUo3aAwi4DgfVpxE2MrakkXs4Egk5JEpKtQ9HQ2Z6eDyu417YmPAfbm45bfHeCJ9styfkiduWjvLhPt",
  "key24": "MwpyJJoMstohskSQL5N3oJQDD2mfCkRP6JqMCcLbjpq23PAFC8JQCnck2mU3UfwvUipRGReZatpTDzQ2pJgRix8",
  "key25": "2Sec4fR21MyDbZg3FCQjD4GGQjvm9qKJ8QQY34yoaxFgXTVRd3Y2ykMtt5frBbgiEcfFDUJazsqwvUGdagK8Mr2j",
  "key26": "vd154fgZSuL7z7o5JCFt9DHYfJgkfnG5eYRcZyHyjARecSkQGaikV5ByB7UiBF5mFTQWtNiwXzreEbgCo43bCqB",
  "key27": "2zYd8embXY1NCQvoUBvS4A1cMEMKPuPGSYgaKp2w74esgRQayL2v5eZMgqmcrkgyFS9gK2yszQUkrTGjCDQoqM5F",
  "key28": "uM7qCDJxA7irnNVsom9nkxJRZQ4WCKtLH9BPDUC5jLs3wSoc6nBkjmG5hbrbY8HkegzxSFa2w6MP56XBjLcodJw",
  "key29": "4gfESKc75ULW7UZJzYvRXyN8jNsEqJ6Pz6RZ1iU8MPXponoLF6ZbSWPKso5EvCHPSsVUYfDfPXdshnXb9hSEZ2g4",
  "key30": "5bMEahkQGh1n1C7CvFG8TjGKfZLJpbhwGkxg2PD562F7YE3rgHDPu3pLyxtf1Q2J6xmz6buFLHugkeyEfzr7GKbi",
  "key31": "NAgaxkE3NyrG5u7mY6DtSWQpL59SM7vkkb4veJsXTKZF3rX8p6Sy1p3XBsn61tiZmwnoS7THFcndQNYaFaMmoG8",
  "key32": "3Sy3emLdfNjGcpDg4BXH88X6Ey3ShkzGLQ9Udmei1WP4YYhEzXycCb6iw5TDRKR4WHvLmTmP6pzDJUBvgU1t7YzB",
  "key33": "fYaAG9GqAuEofhZaHVgL5pyhPXo3KgFo3vBXomcd5LyxLAK2nuuF4Kxgmzdfu6r2WnUVypTaVQa6ENDmmaLXnU1",
  "key34": "vTNpmCdgmfwQN9k4q5f8axixGjyr4ep8oGdUBFdaPQnqYz37xC4BGX7ksZ9GxgqspXciwN6irSfZTqG4SnYJjKd",
  "key35": "37s4hEXf3xh5zwFQPLTUDpqYGJjmo4Najkkcg8mydKbzdYfnmZc6PHPAbH455MgLtJcKFMPMBAxSW8BhXkBGXWfK",
  "key36": "5aPKrvjcU8rjLNqRPKBt3s2LgoUec5xZkGZDJXPbabZTmFsYsxD3eT3Kn853aCK4CUyFojnkMjoLoCev3Wpp7Kao",
  "key37": "3BWC2ccHirNwhcnyo9Wuyy5F3eWHDFDywCYhff6qarQghoMHKnu73Wcd5uPkwb8GBZqvMh7NTxieZ3o7i94ij49W",
  "key38": "4oTTsVdYFWuUpC1iA7dAG7FV62Evo73treGLLXK7Sw2aXC87seC6eirmqhJyKJZyNGSh3BH3vxag7ky5sgMrdjdg",
  "key39": "551ywvvmP8BJNcgcGmGcEBSpUA3u5Xv1mvJWCJQdeBZ7YCShcdREcJvrdos9s9VUcKsFvVpMfm3NaKFC3HFqL4pr",
  "key40": "5WXBkUAjd2eC2uCKM3mm41Ck4VksyaxBeXajZwWrCX6jW3UBAD5UJo5D2TdJWRiAx1xAquwre8V1TZ4hPwHdZQgr",
  "key41": "5zv3NMsu1zrFjPxHUtvXXrg4Xfjua1a76jJkjCLwGiqS1yddgeAmseqmL1RXw7uXd1AmxNBcnt7VBBNBbPVajX2B",
  "key42": "3pYTcZvMP3i2TtQ5rV8UTz5TjoK95JKamWd1pEnH5vcNUxuDm3aUumoPxNzvjRXbJ7ggWHKcZ55DGw48wYMh2jUD",
  "key43": "fj3Eu1HHMibTv4PJvdhT6ArV2Gq59oVXEbnBybX93ZaFEFCya2mTYCQ4kpkTaz28j6Enu3RD4Me3JCTCmnWXbft",
  "key44": "3qA5dvx4N7f3mvXTJ4hEtye8ptA6NtE69MxGCo57dvvx4WFXa86XAZ4RvYkVPBep39U3MXxz7SzxuxFRupP6YWJz"
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
