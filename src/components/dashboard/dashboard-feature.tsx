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
    "2n5QewtntyMPqMBrSeTC5PWdoPQdrVJVgGYM8cZqBHmGKjeEwm94Ty1Aa9Dk7xmje1ZNh5sWPxv1L9wuUbq1dyDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggWJKQy2UowN19PCHdGUJez8CYng1LMpXC82fwtJ85gAeyAffecBqEZTiEEHKgkP52rYmYf5HwUys9JBFp4M5Km",
  "key1": "3CBgvNiWmckWT1bCiujQPpSCEbzceXEsLiGA5k8mvntXH6cauUz3i7XejaYBvG1omrpEFVs2hsYhj2mvtu1TT9N5",
  "key2": "5kiektGvTuEJNDxXBjXdDKfwptFML4FqosVJGxiiarBPwQUEJCsoRRZCu8rkzaD1Wb58BPk4GTep8ACdDVmeFddF",
  "key3": "3pTcnGanBRip9jrHGZHky4USZsxNciFg2E7nUrN4HKxHoepNqHYuVmA7ZevXmrhqQQEKU5KwAeh9rQtGeAFMdz8g",
  "key4": "2evWwoZkNZ7cbnLN1XwtX9sdcgeAPwVFhs9ZGQ8ADKmMnpGV2kL7SD1L4msY4uek2ZzoR7yAesnbEt13CKZ5Ge8v",
  "key5": "4ZAzu2S4GAXCi2PvE2HCCWmiQA67tgqfoRbcX7fwQsDBct4ottKmZH2Sy6SGWh7P3fgta4TJ4ELxPBxunvCmTuWy",
  "key6": "4m4Kj6VKCwgFZcGL82ige6FXexQeLgEv8nrNJJpKCtMGzDmZ1p6yLBgLJAfLJRzRHqbvBGmb2CoPyY7rhyj2g6vp",
  "key7": "3BqDbqfRa6wHNCfCxifoSKTHgV67Bq1ehCiKm33u6FsadoXUtRK8L2PMyv6kp1kd2YNTRTtKGnQjsyxSf4jqh8E",
  "key8": "5ps9NzrDCQFVzjVTG98qUTDmQxavuHR9Ucc76M1PgfZGtP8JgdT23rbdZ4ENPRwNnUDcbumksnvJdM1MwdhcrZ8d",
  "key9": "3LQDuWtZRr8teqUovsjsMat39CnVFayKt4pxyD6bNLRHtp3B3qDVLBo5Fbejw1NPdfCLHgbfJJZkQeG22zSdL8f",
  "key10": "41WMXbVbPx2SLw3Fd9s3jnsJ1F55vwsNRneACat7A5hXRC79KbNQFXbKZWcNTCw71hie9CPENmQwvAKaMH3RVTpX",
  "key11": "24k6a9zVciu72PWaZiiHQGU3mkP6wuv31BB6K55mA9VHUoZsiE6i9r91FCPFdmzejm9yc772MXZz2bviYUCrzxsT",
  "key12": "3jEnS8VGDEKPZZPcyPnNUjjjkQTJTaR7QzUjzYsn4Pypxstu4BrB9Dmzst2JhYMLQf5koYQ5ewo7KaXSaSRdVjNh",
  "key13": "2Qki3vwvVH5ufCjtqj2cmbntmqkTEPQChKyJv35RUhTq4vdWsfrzmQMTE4rf8v5erE9dpdZq8tPCotfzfwHs4HLd",
  "key14": "NidFgt8SnAfzVuL7rLNmBAS7VZmp4PDuprBQauQsdukuuMXD2fQtVmjJQv8XDBzkYEZjodzJLLvek6KSjdNGGL8",
  "key15": "Qbb6t5s1SsoRN5eSR62p7M5ZGTC4ZZAsh5wwq3UZpZ6vADuW5hQpr76NYZQz9CcXTNQrdSLaSkvaxtfLtbddxB9",
  "key16": "WPueRprXsWQ3goMN6WkGMLFWGqbKmQPWv1vtup1WtM6UitQMYkw6ogEA62VS4tnH8QwvpCCaTUaxgCodrC1ujTc",
  "key17": "MxcY5UzLDDxLigL91iB4V8zTMMFwr6k4GZ3GAAhUNnbBjDvU697oGhuMh9HwwNsTgN4iCXHB3uJ7VHkJn9mobDZ",
  "key18": "3eWFwLJrH3xm3YUTDZnZ9sSpfN5azFBLdvdcsJZfgvjANxHYYecUaHtzMjJz3jeAs3cCNsCXCKsKiB1xmmRtPYhR",
  "key19": "55RcxzgXyBM83QJ2DrY6ZT5ywjJTJndqoSqJbWXr7JsE1ErALSxbo7AooycLExeTqt6EJPgAzbD8mx3Xcfkuiadn",
  "key20": "5M9vjZS7uPoAxt9zReQrxBS7k58XhnwTp5zao9oRwHJrFnaJtiVDP2keq93ST4bqQX95FRAhYAvXq4sRrLX5wPhN",
  "key21": "5wLU5FMhTYaninfdCGGZZia2C7qEJUYf4iyhnFqVvQZ2gQabWk6izQ1Zoh2zwJqSU1CQCwC2w6pUrmPvx3dX12jp",
  "key22": "26MoVE2D293PEaNcVrAR6RG5zD6gQK3wiQCPW4JHyA6s5LbVr3ttGSDbJ4H8fMQZyoCYatuVes54vrzKrLfBUg9c",
  "key23": "61sVzGFM1nC1X443MWVM4KrBoiwgMVqMu2DTNXTGoGqa5TnvXUNQzpGZcCDDGsDJ8ZKxHhBVSfXVLfKmNDatVXZ8",
  "key24": "31KYjXKg1VsgeVVg9L3BdV9zboVa7sybDD9n1npM4QhqnSieotdxKFeKKyTQW3kmfuCy8Yg5tSU5XrGxnL86RXUX",
  "key25": "3desAAfYUP2C9hZ11m1t21Hz4rYUc8k9jEqSaFkFhy5yrEvoyKMKocosHxBNMAdZ3MhXVRJreXkBB3GdkvcknrjB",
  "key26": "5yCn2fvaXdfqTZQRPvnskPC4WKqUVtJ8yJ1GBjY5CVY4V2jezejnRj95xAZXTjbcsZCN4kkNjnd8XZfDMZbdFSSN",
  "key27": "5RuGQWYWezhwgAZ3UZ3TfLT5uoH8daehnCfAJZkSmK2gY718UupjjzZZ9HcVsDKXdrxtFrbbLXtTpzjfLhpdBBpY",
  "key28": "5D4XYyUTjKL4Lw9tGYeHcryokWfQ8s8LqX65aehPU6pCi5ZFgxpbFzLACq58BmAb9EixCmzxiBKabYFbhZMCoPQm",
  "key29": "4Um173um8rpVkuUUwmrmAV4th5vyX8YeC1u71GpaH2dfGG83WU8wWtUnG89hANFbbCgtHMhfRQjUMmdShe6nrtmj",
  "key30": "5ATK6v98xy75a6AUR5CkE6Fgp7pzfL3dmVuBLaUzhLPybATgz2tgVCW5xJW2BuWjpiWrEoC5aqmsv1fdmCtHuBkz",
  "key31": "3CZM9kYVGgkNDUoV4uPpUR4h1VQ7oQHtv2SbrDcyYZusauVkECYva5sVGSJumDXUeU7u6KhjpuWJFhUj58J9MuLD",
  "key32": "2A15JEGgFshsvAR9sPTXQuBqEyqpFmrkrxcJCeeggSQxjZVhqnjFP4BfzkQTwTkPHdbctVBqjPLET82e7ftrc43n",
  "key33": "5EeamxPZ3hURYZBUaw6BWfKaffxf5nt2w7yTdH3pMhYkiDibGbcii5D9sNNQT1Jba5NrsyMEi47H54kiUmqwtdaj",
  "key34": "6WEQTHHqpo2gd59KBr8ugbeuhYaRY5Aeq4VaBV2WBEdckWwCVjBF4LU7y6awnp8cf6H5zZiyaYAtQDmZQX6cjFV",
  "key35": "3o163hfKyDvrjwjUGTVrfz5XqBsRa9nfQ6tun2DHKJiuZvdLXrq9xQjmDvTbHduSNBoSLnrosd3732k7vuVsWdKM",
  "key36": "615afq9EaPCbmHSTRGqnjjz23XDRswh8You3rU8BiUBE3hozXzRFUdFYnL7TSM6W61SC1DhDtJoegpdCjufsMwp7"
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
