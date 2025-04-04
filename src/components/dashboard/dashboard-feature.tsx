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
    "4JD2iwovuxdVNeFeaXYLXRmRYsEptGxVYgHnpLxfVxdndaPMpTCkzVZesfyMqNpAGNjiPMiEzGpcR4wCurBRcaKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ipBcbdtv1eEmtX3WF1ysfqTBkhD7AuoiCXgu9o1pbriNQJgNLNmqDuS797GzXcJEQEeSp8DLAcmmvdDwssb8GDm",
  "key1": "4QRUV7KXoyAc221S5SyhMkk5LjHghtmC7bhL1SiCQcgdvXuudAzUaJ7fuWDSfsM7wTxD3xugLyLsojLfEJyH1V9w",
  "key2": "2pJYh438xE4ES9GLcSFs3z2ji2RrEPgaxFsSDrGTkydJeJBZCJ8333zFEBTk3AndL64b1TaZ6NhzdpgiqHwtczeA",
  "key3": "4HC6R5K3wF5EehrTQkq3HyB6roMj8r9buLvYMxRTjmuRBduCdmnosDPbgw1CdqB5oPyeAx32JfbZ8GBMvG9juw6S",
  "key4": "23oYE1PM41Kp5VMtsus8EfSus9ZtwteBiXkz26g9otf8ptS3vK1rVijSPQfZMqhpTXvzhMUHrJQo61r9dJZZ31ha",
  "key5": "5fEH84yxTm4VcDthBPQ2MLmaNHagJt7HzT3JvyJLrnFHuztUMQmTPZmtvx9zcqjqB5HRvgT3YzB3vhAgD3gQLygr",
  "key6": "4WerPqAkaiqdXtf17MhT2kKQ17X2qJ9ti6eVBAkZfhzx1vRz4Axftjn74HKZgGsf8wVzFPAnXiYRM5Kh9y7DWBEZ",
  "key7": "3BZpkfEU5edmd1Y2ocKPQKFwYFR6tHcMekt9bVPnJSJgzzoyn8FYvbiQQt5LiViPK1KSfkvbnWAtEMdNKbahXndD",
  "key8": "3p5cW4oUFh2E5mZxWSAssvLfDAajUBrWwf9pkCgY7BJvZABctZf3L5LQcxAwCX7f8yM14bYocTBp2AkzUFuPEkvb",
  "key9": "a4pzpSymhbtc4MWVa3xjGjeeYjzvS4JCQZnsbiH9ZCYikdUizNia34pdrV8R5hQREUQ4uG2DqCokM6EkKy1kJex",
  "key10": "3BEzA6nxQ4QJjxcjWfbchmBQDECNAeFSuqiM6Gn9tFFDesisXmT9tZ65vPYNnoAnaSR6L1rCzybbJdtDe6GZR1L3",
  "key11": "4EnwTDsGVjTMAoE1un1NP6ckcCiDcvJrNSpaDMLYjYbkePsLcw5nuS8oySKpZhBKVKfnLBWEDMeic4DuCDsyvKJr",
  "key12": "5hyprL9Ue5GhPjoPSGXDz5ShPRu7PBS3DpsSDxGafqWdc2Q7riW2QEHJ9H5ngA6iuVnxHmzi4nyk6qBGaKADdet1",
  "key13": "2hNEUWyTKDZeJ2pUMCymwac19uFu6L1EEGzPnbxvJ1v1eXEahHo17RHwuy8SXUtAmb4sKuV333n6YwmJykXUrptF",
  "key14": "4SiHPDeT8FbdX5Fz4hYMonW2r2feW9BAMiuKHe213hf9LMSaLBLad8788enLhdgWWQCt3o2hhwvNQ9tqHibXyVCa",
  "key15": "5az1Qo26WE3CMY6R852rRBSarwARSJbGK9NDUM1mBKcRpkq7u2PoVyHeuDjeyZxeCZv1GKFJehFpH9BCHteBCrpR",
  "key16": "2Z7TwAGrtcTMV6LYuBgkxXreDru1JkyGLMts3RfRAVxJS558wi2o842P5rYL5eXpLfwSMZ8krcCPzEP1dx4VYqBd",
  "key17": "4U3Zua7QNLQjVfg5d953QeJt7WGwbVJH6p9kEEnsc9oyvqZY6Tsk4vtZCMYyoqd52cmYfGj3pdhH2LcfhCTi6uuS",
  "key18": "4CVtHNhpjt3J76TrjUu76oZj27dtoyhLUgr3yuSukiQEQ7Yt2uyRa4KfwXVxYjKfkT6XGEwG9Yp9snFx395p8YFu",
  "key19": "3A9EhRBLNih4t7zp9SyuM6Yv7rY7C7yzvyk8ux3dzDpHEo8Xd7CeUPXCEonAaBbDFKSCRkZoZhQbsVkHkeujhrFe",
  "key20": "45JRunGtBj9anZ3D4cbH62j37GvnwGp66YM5v3jQFn6KRZaLqzx1a7P2jhuDaQiqAPMdyYqQL5uxvs9ni5yXduZQ",
  "key21": "48E7drc3wBicosADQEe2tLUqJ8h1BJNNBw5Ze9mNwdksFfdBj4RRG3KLJwhsAaHdKZaPAdrUJo8TEhVbs2QT4uts",
  "key22": "2Wi8VdiCT66WfXqqLjUvE2qvVJzMS6Uu9e7dncnSPV6gmryz4nCszDTXze77oRkgiwoQTzbD5tB8kWf61hFhipbB",
  "key23": "2gJNBvvw2SHyFhYRVoqDrTgMC7A1vW1vT1goxsMqp4a6sWTjcB3w8uvahMeZLcbximUhkpEEdRbueuhiacwipm1c",
  "key24": "5Qv9eEJjMtG8J6QGPBn4eKbZbTWNpko7xJwq1n9hA5EW8EKoTizSmgx2yC9Re9nCmNFwWq95CgSpB11w6TSQQDtc",
  "key25": "qHQXeVZeueRcEinjgPXMLXNTNonGs2CvrVag8Xs5kxme1BvhNCYkPkjbxSGAsvk2mwmhnANkSGESx8K3itPF4CL",
  "key26": "2Q9DSDUr7Mx76X5AqoLvooqSfrpnQM4AxxeCFkb5tUjWttqYWD9XtQot4SQVL4UUJdj6ffYAyih1RXiC3A3fYACB",
  "key27": "4sZQBUuk6e7V85bUNoRkCHKn2MX5JtkbuBCGwvHK7pQYgShn8w8d29wBZoUgsKeuftJx1nogcTDTAmTaaVtviewi",
  "key28": "217yGazyvrZtcPKGFg1M42RHCoekPwNusARRiVZ714rxhYoFce3jxBakWrezTg1cQaVS8ZSTwJ8DQxUkX8QLEDxb",
  "key29": "3byirmWNTqaDdAn1SqZxoGC6eSHzog47vk8rC2h5tidMmWaYcVwiL2yEA3vP8CDoicuMRfcmq9mm4uyodg5yiSnj",
  "key30": "3TZnK11WHX6uAZr8GkNvRVuCatcWyZ3nwk1a5bPNAUGR6UqvMiEk69jUpzNefhjQqqpE9BhMwsGeCuAZoSZiMtsC",
  "key31": "4MPyuH8VcW5PkB975V4S6arWBPMihXXoyzQ3NRnPT9n9YnpT6J41kYSP1guiwwxXQSKNA7WqmHKv7GeNZEsvBnj"
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
