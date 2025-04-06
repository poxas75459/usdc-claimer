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
    "2t62anuMkbcxkf8uiqXF3GHZNQrmhFRa2rgojDXPcGeyEYti2rSMQjnziQFoPhK3xDQWSy7Gi8NdwFgom7yfi4iY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yPHNdoLKNvxzrFfJdZLK1n4ti3sBJqKcCBeVigUVbZsf6SoBu8r3FFDcFdAvQQY1U2tivkVWxQqxpT4zdiFvFHw",
  "key1": "5GEXZCCAZnZCWEuVL34CFFUXeexP4jWGrNiEhXJFxbuEf26uEMYXmEELpkDSE77w95oCRRuSHooW61q7LnzKqaNB",
  "key2": "4YBx9MKTADu7FQWfZ8yyq7D8Rf5aBiiCLLkm3idthQGyMJUSGkWusirCJLvwY6XVHgjCFmP5DSKq5anB5SroGqey",
  "key3": "5FpGCACL5AQq8syWXwSKNBXVubVEihTAc1oJF5sWyF49TWxxjoL8D6hq7rcjDYyN3X6ojuioQzA7WRUxnjJYxTkj",
  "key4": "5RLqufgnWksmDhyBUZnXeiCuqr9GtW1aZEYTJx5FLrG3edqjbyfBywsgbbPgvbbpvvUdiU1GT72z5cRYesdi4ndu",
  "key5": "HqaYNnHptkNd3q2jkt2Sf6WGEuwb5UttAJaVxJao8so8GH8smpEaNUjZTv29zZh5vix2wv4pdNEZKQsuPSZ6LM9",
  "key6": "qJYcrgzgFDjnHp4okNKcuiSABgqwu8vvBZuokhcgJsBpceMdJcoCw7yiDMWZ6SkUVmzQTMDJdkdhi2vAMB391KE",
  "key7": "3HeUDA9avVM3YzJa5DUpjEC1N3QcjiCdkEGob3XyrF4sZoy2VPKDfW1xroPJfBBxLx7ZSQz5ba7x2DXbxCtbCPTq",
  "key8": "5i514zTiRJDPJEnhi7qdpR6R6xBA8Am8k92kqJTTMpFjjRvrAyRYXDhzDoK8nr4CmhvBXVgYNAWg28XNoQnhwhbi",
  "key9": "zeSeHmWuwuxaCcUkZQaYKa5sYFr2bjnY1Z54jmMEy73h4xaHowPPZJE1Bx8zYhvAUrfpuvS28YdaiFnbyZfZbut",
  "key10": "2NgdoAdttc8u3DpvBaeeB2i5F492ZRNijvVDguisTfJKNcuyTpmGC7413DzyA65YjseQMHDA5MjVZo9Qv5ETQFnQ",
  "key11": "5sALEyh2UVMzXVRadF6w5pPwHYJQcpp64FLmYjkWGDrmDkoPV9gBeDtuJwFGaSK8Ay6zoofPCZ2zJdGit1SGwQii",
  "key12": "5FFxmkmRrQgFkcy3F1sT7tA956Z8Zik98TrZ54MNGWsGfj6WAuh7LdooWgc39S34o54Gubm9iapuTLKjp6NYNrBm",
  "key13": "4VyKDQ3TJPh4tBnyHetKCdpWEtX1ZBYBqysctN4cNBhnm2P8Kn9y4VNGdhAfssHKEBkDasMMMEiKJXswNFdS5YWM",
  "key14": "3LJY4pqDVU8HW98peExfq8c1PaX9Kd7QQ98eexU9Fq4Zk5jdFEY3mjuDrmDXpcZshHgJv5KYMeArX1oiceo1UVD6",
  "key15": "5Cyv3yyhkZJ81Xdtt2QUQF3E3fi3iLHDVWjBY4wYxtPUdmLwZDywyLAjohk7E4hCzKNxzH5H1mEKxb8UEj7bdkho",
  "key16": "274Ww84ZuCC7t1KykKxdr1rmeiJ72rTjsAdRk9bZhPuFE3JfL7jY9j6oK1NM7usUrC42HZV5jFP2n8W3fzN9cQHK",
  "key17": "4CQvf8F7HEwEYMncCZspFtum1TETNHua75QQtegXreTrQVVHCEptAaFCPMRKRgbkihcZM6CzNw3MdpEpFtxJJTQb",
  "key18": "HwAV7RVmmKTddRykw2ii1sRvQC98VZRjQgawrusVp5viF8UcjRRTpJoCoQNR5SHDk6M6WwSZrpBi7XW52oDdupa",
  "key19": "5ZbE9jGnxV8SGQW7Mp7TmpeE4WRZYwTwjbQAQUNZawCKeqDHq3SknLoS8oF5aC31n7tTWc7hNxATUXNZxTgSqaTZ",
  "key20": "56ky82eTKCKSiLYkpuh5vkJQKYC9snzdjDvG3VjiAgnzxgoYZeRyVT6t5VPrHhmPcB14fXDDQT8oGXkx779AyDh5",
  "key21": "4cFyJpBZJs88Eyxe5Ye6vW4JFFRJNDqdPHCGRdG1Y4XdCi9nHuPA6Z3GkQ3viMLrRJAYDcqzGVu5vK5Pqd9cUu6G",
  "key22": "42UmUY3S9b4ZdBZiuynkQJdG7WdLozyoXjEZNWR9okRxxYqusWocm5fQsRQTjAPC67QF6dCJRC5eyRfko6PiYwZU",
  "key23": "3aGasbqHjYWg3wiPdnaJNYMPYgfwz4wEYrji3jxHmEcYxSBS9ykTsnPyTnoKQ5fGDUhdM3pwaoFq2gtdnQ5hN7ng",
  "key24": "3vN7u2JnRgczYJrrAU3gCQ9kPTVXHS7ixXvpAue4B2CDrN8YRFsuhstpBfxTYF432gQBwxuQnYSS4yfphrQB3M2U",
  "key25": "2XffWsJtr77CBvy4PzMoiyEaKEVVtLV46f1JhfLvNA4p6jwmRSarrnkz21BfBxtS3Hdq8V2HqbiTvXydiam7ePCb",
  "key26": "m6qgn7M6PcicyfR2k9c2Egnog5ZHxc4mpuJgLvGcot5kvVQ4ni3BdbcvkqsVK5jq1qpY5bpwDu6Drt59F3tVzV1",
  "key27": "8mnwwvoD634Xz9XJsvzphv6YNXB2S7f6C8QyGhVotm7MWTPJ7K8mNK7eK1CpjLHKEGf3R7fju9xEVkFv2qspwcs",
  "key28": "5L4vkZiQdKy1W48jaBnxmouMJ5iMtVhNwQaAeXxJyF9VHp7KbYQbajVfS8LAijpswU4JsEK31V3pSV3V9zhFrXt1",
  "key29": "42wtjvXNGjyCThTXTmKuSREtSSopdVUtF4zpPaQYgwHgrFPb1aunboH6Gdn2nSfre3VPGKRDKeTmuqHPvTCVSiPe",
  "key30": "48kFBdZ6WMUiFaFPdfetAYfziFGfQUrEXs3Ku2Lh1guHATrkUZRwmjg5rEFp1tyNNHwyXY8LayfBW9Jo88dyg33i",
  "key31": "3VvqAwUnBupggUoLw5RmF82fnbUjVsvZtbfbCBxfCSc8CqwEkGdVprs1U4t5bRYWQeAhXBTYwSmt8wvNNHmCvTof",
  "key32": "2CLBdTdCXRcD4d9auKwFrC4UQVTmZWjjdzr31JRjv19yqspJKznr6ARqypxZtZgMaNK2asizV2eqFaeHEcut52Wa",
  "key33": "2crsYkQNinSiJkV3K5kkpaGc1ZoBKEimpVmfozNkBRSPVqRdFz2NpTVXdXBMgMFPnKx8DnH9XGwx7VHg68dRv5Xo"
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
