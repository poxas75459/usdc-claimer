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
    "3xozoJjj6rcYEvCvtsNkfkdRLdznWugPXgpoc5MdkU7hzwnadpGwfVdLf2Hrq71F2zs9hCX1bcQqpzXFdK2etJKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b2RB41o8WUKc2JfHAbZHP9i5e8ALd1UiXQYgqmzUyeKcVaokiTLmV1a9Uhh1CgxLt4jPExLJMs4aP1PzkwkrDkd",
  "key1": "35zQ7guLDZbzj6JTqyRTuB3mnaTnQNJczQJiPGooJf5pmSDfEKP1AwCSeXBsVqUsmBgYPHrajim1hUzYaSLVP7y2",
  "key2": "2hbsKHhbzC9RNwofErJgZMxLgffeDfizYP2novWqBDJq9EHYHWb7rz3mUFz5wBay5QoKeXDf2LJQjN88JDKbUTms",
  "key3": "i22UJBSeveCvQN1XBeniaWTBGQ84V3QdpMkaAhdbkSer5c8MxzUfpAGwFUMWuuevWNJpmJq8ARdJ3SpkpLGgZEH",
  "key4": "4iejvjzXCrTRSdPa6ykv8X1hY4PL1GmaS18xWiduAybPm3ik7AT5QuKpQYJG58jAvA9DZdEeCXn3cxNdyZkGVcEX",
  "key5": "45cGhu9CzwFNUfPmrqMSRJHwZs4RiTE22Qzbhk6Zt3TfeHmiw6WHaq3BwQnHe2dHtBkjYsra3TzoGqUMKjooqMuw",
  "key6": "53Uq2mSdEBp6ySsbwmqGEUYxi6WKVPZ2EBTyqaZZ9SzmFAaH9VgS62QnM29kPUZKiSyiTA3ciKe6uiPJGVPPa3qU",
  "key7": "5kw5CyxAjtpbJv8TzAMCSVAukqianjWqUFpWXtWEJqK3SRdYoF6FFQpwn4PtrC8rPyJdgAuZgbBxaCxxur6tHXfW",
  "key8": "3Ecp4pNsUxbU5rrsY9keYiy3eJkqaKJZYJKrV2aoSgtnzW4BrUH1oxtUL56AngpgHNsP7y319Ldgn9LzgkwPUDMW",
  "key9": "51b14ds6qy2Yb4ZgRttg486uAjTSMY7FhVAjn8TqZv5rEXF9HAM9YvqfJV9Don6Cm8aQ3d924rXraJYbGQP4iAhm",
  "key10": "3fbgqStSkDHHnszdzi7wPLduxAyeNsUe1AE9PLpgo1Ftkz6Gpy8D99h7M73kf5mGocUYydXbUUvbQup8WWn8oWqk",
  "key11": "24b4EnkiaYQp6fVxvgiPHAuhDTa5e2VA8QXTg99NC7a9tyaRTjg4zSns7e8BsjNcWZFdRAEEhD4kPsGhU8cbyX47",
  "key12": "3N1BACNPMRcCY6Hq5CDDqDkULz4X9hkBDce51YTXnAyEFpnNCNdRsWt8nS9dinokxL9WT9453i7XqqZTeyA8odFU",
  "key13": "3EuWqLmE1XtQaRJtfT5JA2C5QRS6U2krKn1iweJaSbxLmRYkrH44nfcihzHjTwjbaH4KoNHPuFcD6WhrwybgAoih",
  "key14": "rz3UXdq2AGuDQKAPEwLY9nRZP7Cxa8UgFFRi8AsAgKTVX7V2X5TdSr25hy4qk3B5abZDhcjSywdWUXTW96rWmFc",
  "key15": "3eLZ1z4CqTrmyFQNkxBtCfJXN65ht7eBuDSj8H2vjT7pB2NjsaK2ZidcUzdo6JbcuhYfK5MxPcVzLfunGtmv9grp",
  "key16": "5to3RwxxwYsQfymDgzUZxyLsR12Q4QKhQEi1Fb3VvxJn8qMP4V5fo2JkvUb5m6sKxRM1zo7ZgpAMLXVVsg31Nt3E",
  "key17": "5u4WheadnNLWkr4YwaFTumePQ2LXQtndNd836M4CBB21j95UhM7coXLD5pcYvUCgJEkCseJjBeLAjS1Pb8CVj4wL",
  "key18": "5MoFSNYyVTAZg4Jqaz6Z7o78WU53hqjGAE1CaydxeZHCqVPVXctmEEnLre4Cg9kNny1hn7v3K7qEz24dQSEWXzLL",
  "key19": "LshpBgPauqTX8Daf5aCwcp16vxiw4hoqNKYL1dwieEyzz3W6WfTH4oXHw6Ng3QfeqFizs99QXcuZMspPQNa6wK7",
  "key20": "2jhpegMX6mp32xLzFeFfpgq332kPNyL61CjQXxyjW424qZXhhUZ4YLk2as8kyaKHU3f5fV15mNhwx1B2F9GdPK2C",
  "key21": "5tZkuDPUzPMwuBEjeNxoqBCLWCoq7YMf487Vkgh6oXPAfNhw9uSqKeUJqy5yvyRM8deDrsx4dup1SRERjewZ2E9D",
  "key22": "Gt9WxZV5otRjKcEp1MDCAbPByUDtK1BwJyVrf7fEFLffybWtsHqzU4aEevDqgUSE7qJTpDkA5V2seNW5cgfurJJ",
  "key23": "5DyiuYuMuRkCZUeiQtEKjBGDzyqvBfobF2KYxDFEDzkpsYTfZJ6o2m8gngxaPQiaJAb2RQG3QJcqAKFG4ihSTqtV",
  "key24": "4YWNe2DR6kTVgnXssNhwSy4pK3qxaaM12pZeNWnAaQn3ECufGUvZYC3SYWNWZRDkwaPhZCqDR5tra5HFuoURZoXy",
  "key25": "2nzaZpHDHE7Qej8GNsMX2c35cVJG836HrvDUbvkna7hGmsXPTezfgc4AsLJovW7ktDYXP7DD2yHZXz3ytrqiLk4J",
  "key26": "45c1j7Xy4CCu3W5HwjpEqXuMgqnng7FBSAoBXmqvqcUdeXEA9HpMsUT6n6yyoq5935BBTrMWSA34J5EUHeQJy9R7",
  "key27": "2QDfpJp7eyKvKm81oVS9B8vZHJcbVjxVXaLSwU9n6AadBfmx2NdZUH1zrS9y5qzPvqZKYa1UgxdbYsrZin4vgaV3",
  "key28": "K53suhUyh8hWU8wARRp2pifjjCrmcfVsudY8HCMZ6hUHZ31za8D5dwYau4k1qmpncDNZePhXSLN28Xsi7zeLCzC",
  "key29": "3iNqsHC2aevMu64uxB1ojEjJfCdgY6e4i2vNnQd3f856B6xP3b85LxRDkjbvcvAdVxvPLjh1kBGp14KYDHG18j95",
  "key30": "3kF65okcZ8MY39ebVgAYvU3wt64aaRutpyfHFEDyrttPkRW81v3Tt8tUhgjPaSRjQ8WFMi7Uy5fzCC5ki5WmUScz",
  "key31": "2o3BPwWv8M4G8YXtHNiiKAu2ApyXQnfHKzMB3DyfTU5vyRuZMkdCHmj9RUQUw3eCf7Dh5g6ZRy5iVMks1azqydZN",
  "key32": "3ZhFLibTqHrt3JkbNnkkC1PrxZPvGbZTd8Sv9i99qPTqiuid345YhwJhqjVMrAiWwUQX5djqt7uEwXyBWieDmC4N",
  "key33": "4ukYFcwRhaBofkXmUD5GfACkJEXyC4Mj9VMdtWpmGLVQBSMAVN6CapFiAiN195fKnNarHRKpEaXjtRD2a6gZ5f3J",
  "key34": "5ct9yFsfhnBavAnb3AUuiFGehaNJFwJrRQ43E68dpLVm1nECVym1ZjhktvLjNMjyv6x3SD2e9u3x5bN6ULxud3ns",
  "key35": "ERxSmRsXgh1QKB4Etpby4ziEBVt5VfsESzna87nLJgHQw33Wf9Xiuhcre6bPvtu7qML21sNX79xW5ZF2Zf5F4xC",
  "key36": "2VzigbyGnUH9j2Ft5FzTin2TP9xy9CYf9iw2NaUYSdrUYxTVi24B5zaPaqXfrJyckcPFaQ2c6LpvFmXdb3tpNLW",
  "key37": "4aLKUHVz3tykik6MDu8ZB5dHeBihK82d2ToEEcFE2A36rhK7drvcQ7CMScKzAk4MmZtwra2wXQ84YkpyaBSmkPVY",
  "key38": "67ptiXeCbw1StAEC55nPG7uERn2sbZGqHNswojGyqbPje58717BduZh5T2Po6eedx1jxzdXk9WzSsRsDvBiEgUq3",
  "key39": "jtPJE5wq1N7HmcVADSd95wqE1QFnf5b6vVHrKBjRvtB5ecn9jFEwxhqThfPpVFvaiuMdjG4AXQf6eptXKzqPRZJ"
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
