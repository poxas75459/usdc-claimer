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
    "4Ad6Py4fLVsuatehvhEhGbrg5zpxFFudvDSF2CUCYyQSHqJNGsWQhng6ixRkBTd2VAgXks5BQixkKdKwiTUcYi3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GwrMaivXxDBj3YPVDNG3zodGdFLpbTWuUCwxJyF1KnxFXq6mFwMQuqqk7FxnD9abFuc9qekUtV6CxeRpG4bVQdx",
  "key1": "2zdQghX6u2YB5LCfSSt784q9e6JKMSvCcoowon4h4mcBmNqWrhDHX3zLUSmfpckMXixR2cbmUKhBMGSy5vfuyeYD",
  "key2": "2sEbuzfSHrm9Y9qRRjFzufYw611utgGjupwBsPnqqd8Ucfz9Vb67FkKLuqhUnTsbFsF6BWWZ3M5ArWBx8ueQLirG",
  "key3": "3Gn7WQYDbXYKMrHb8HHUAP9w31ALqqWczMSMTxrMCM85UnR3dkzGu1myh9pdgiyK3Sr8bbmbwHBXDvDrjUVFoomu",
  "key4": "66ZJ32awugU3JAUAjGTUzLr63YVKqSP2GLxTZB6D4UCrJ8uds6wGknPi9XsxRXraF2SehYX7wadugAhPFcd6D998",
  "key5": "3oQLqqY1pvxcGczPAsi6PJynGS6ju1FXc2dhoYGospMuCcsMFYCFZZUuvYhj49srQMVtPaTmabGSgbuWhSQv3Ycn",
  "key6": "2ZHvg16FFDagFpv7EKNBqQtCbZz9QQ9npKuJRhNFXtip5FX4N1hQEuGq7W8eTwiMHamRPdxmK9fgVtQDBTES2Zjq",
  "key7": "5o3od7Lj51eB16UPDShGzJMQ4dyZCfmPTkPycEvCy54YBPsMqYBfjfhVoUV2aQJr9nPpXcmd9WCyXhQWgNhNJQe2",
  "key8": "5susyjpHZK8nrw5D9Bi4PTGs5ugWM5pjGvCEo2R4W2nojYHTjCDjbXYA8QbAiSgFk26dU32jR857Y9LPnH3eUJW3",
  "key9": "3RGfhLWJXJjZ3MxnQfKvMLoXKqnopD5pz88HQ79EKe2w1oTkHMMZ9odRuMv7ytLodgXjVsuJtXPyT1ctHQBmizVq",
  "key10": "wYQBFepywhbNBS2ASLcqdNDS5hYXrAnF3Vaz5sTGWjBF7irLCLnRsJAsnoLye7Y1m9okXHd5eTEStWe7cCNrvxB",
  "key11": "3Dfto7XYmfGK7YGuFUc65tApqszZZK7KEfEEdEtKiVfbeBDHXgNJX8KYdRHp5S9EqFZgLfsx7yURcB9qZkLgq6jj",
  "key12": "4TN6ADz7FF17wwjSozFqEFLZHs1f71jGT3zgP5GwbWP8bXSQG9sZWtdQBoRuQSJUuFWQaCvpuiaBqL4xV8PKcsFf",
  "key13": "66FGoSCeafcwn9L5SJ2sos7f1gn6W6ykYQLwxVmVvNrAVuGMufBTFoSvYhNjqfX5pcouFpiHkWLdCggP6kLw5Lxg",
  "key14": "4LskA4KNGmaTjVqefvcnqikLZBfhhxvVN7ib74KJA5yGAKg55HCZySkzpzbdKKTJj3g9ut91MnihGqQ9xMFXBQzD",
  "key15": "deprDfMJC97EGw84bHvzHBK3cRVpujCTchbYc8JzBU6HGCYghVkryoqXEfKJ4YYLSsj5wsyAt4Zz6Y14TWvt8er",
  "key16": "2jEDeTw6FyRUmZVFFvB13XJz1PPmQG6gRqe8DHXWQYvkGsjkng2du3aBd7QHJ5cVQxDLHYoBLMgRgS5WZqZLipww",
  "key17": "2t8EfXYSyZJ8bUdAJE6eMCAHT1tBsSKs3m5W8wrFUFZ6By1GvszoVuw7QKQhfBALP6iK6STJ7jzEQoeWPQKyG3wW",
  "key18": "5CrQi6ufqD7c24pRkrTsweJHva7cDqmWZ2Hj8VCbtdi3kRXfsgk2EDD36gaK88XBRKXNEZZUTSd9WRnZ8xnuqYaK",
  "key19": "3WsGTrbjzes6269aKgm5292Mpdjhk81DMBo7MecP1RkkUrXj9hpYALBqf2qMRuDLNDg4cxtfYLpkLxV1n7nFFngY",
  "key20": "3CdZNKsR39zZS1uvQkpS3fosz6vJB2HfQ9qKTfUNbXrz64Ruf15sacsrf6kHKehPLsnpw7SajyjpvYqG5f2qLEGX",
  "key21": "3GJw5S5w6wk2qomESsWVweanp7Y9zHKshYQjdzW53zRj96iTmM2z3oEXK9kyztVUwxwHaJix7oqXvZZZJkvDDcXh",
  "key22": "4fYKym5WyzqkgrC8aDPo83RQLCDb3Q2qz7w1af4shvCuNoosSw4VLyHteVH6AtPQrvGyU2v3gye1Gt61UrtLtaNC",
  "key23": "53a4Lc75YmK8K5TFKFxGuGPmzzZA7kMj1Bt5aEhiwc5uudWQDyyP4GFtdkq8Xu42skoW7h9pnYDdZb4vBosPxSdt",
  "key24": "3vb9jDbjB6pM4s9v8nhn8ghuKDjC29z83RmMssuYboozKW3se1QYa4L1aywST2aysBCeG5gu9f3mq3m5737mCFJh",
  "key25": "4JDPoqgwuEv4PPKzDzjj7zHhUfsCnpi2ZtFvnbXfUYJNk1hq25sWumyPjzywYU6f4KH7dTdmzcQ3tCyg9KPh15XF",
  "key26": "4Hcg5AUpVRHRYiHwpySRrgcYdfmguJiJLrtnuL9BeV1NBCYBPm2NPjHYoqNHNsEgAdeWi1jnf3S2kUqJRYP9eQrL",
  "key27": "3uopC17j9d6EuH2YeppT5HZWY6sU6SBwigZ1C5PE1TGYDP9SgJpKUuLYsHTrFegCCC6bvGr85jgDE2XYL1gGpfnM",
  "key28": "2v3AG8coJ6yPSDThjuK2YdWGb6UCSTc82s8o5r1M7rxcimTeceMgrUVujFNxg2nmkjn6G4f9nnPS4gQsbCcYhrYy",
  "key29": "3num99fKLmL9AfSK6WMzJd1jKkXzBATZCyfc5AB6zRnP2RUpvDefBqN6vGCxcfP5ppp3TkHNp6WdntE21pTA5pVK",
  "key30": "oCCx2vdQqxk9MV64SWCg3o3jv7eyTeGD5HBdiswHnF3UmQm6mfPKrEoJjFuK4JTj4ccksEUekZwbmUGwfUqvc79",
  "key31": "b4pbmKoFjJLiWwQ1Ken5q1UB6yKkkKBLEuvb11Nj4JbzyXqFTok8Dq5a5rje2DhBtBBUZrGno97PMsuXwNs51wf",
  "key32": "rv1RDdruDS7yJaf1g5hkN46eNNaAYwAAVLjQQK8hqBQvpvP7YaTN8jZd2HkgpNf5c1gufJkcG1SbZsmJjsroZkz",
  "key33": "5s37UnhExHVJKssBiqtgQSYZYxXq6UyNtuH45djVn4CJ1NFjP7785ev4XgHC7endCzqYRTr9T49tezgJkPbkLsVE",
  "key34": "iwfkTzZymBhYP4TxtTbLKbEsFA16esHfHJdKwteijyztu8yNMNaAfqVBkmYmH3GpMS1QkEKana21TTYbNUL8h7Z",
  "key35": "5Z36FinDNonC9jrgVJd7HRYKHyzanK1uPGYbh88YvRnX5rFAxERfzhvzNBN675iXt52kvEGaMuzYKvyoprYoqodf",
  "key36": "4nkedNebHrcQX55BBm8Ub7iYBwi8w54yWHEFgAmXLonrW4CSu7yjX1oBr32doteDUiiehJAv7WarnbngCaYYMd27",
  "key37": "5npmYMCBLNHyJ966mJGPEn3smcksnoZJKqjCaegXEstUzAz8Pf3GhenehpFySkFERzAMmYqyQot9YAcW61NCV8Pa",
  "key38": "2W13PpC22YSNEcRjEg4Gcs4PiYRNZCBH3F3SDyoQmSRrp3fBeGqmrx48WHc9sCvDqr1u1PG2KBQXcryruZgcf2r4",
  "key39": "5ZLbaDnoEnmnKDcDxbW7ogkjs85726PCN2Veom1ppf6RNJVR1aYiX7Qhfrb68owb6GmoAvdeJZgsatoaRULrhkJz",
  "key40": "4z7EMM3PkFqmk5yoy37veKxNi7F4aPsd2LUaixzNpnbppsDPuuf5uck2t7qjyDzeUafrsJkYzqRRjsUNppu35F2o",
  "key41": "65V6N38dohcBttzWjXbc8GK7fxjCnfYU8arKFwHHQXpQH6qAFiREaQ8Yx7Xg1irdMQ68GyKzcZfvrdHJALNdYiue",
  "key42": "2vtmdfygNoWjKTjdFtgKNxmnLpSWXYM5EPz9eDhNHsFzo7ANMTcg7SagFogcFfy5zqw8wjnCYUKG3NpFbmhvFJEw",
  "key43": "R4RhkV6ZjXQuMv24MofYZRbJf5qwb9jTemrr1XeZHc9VToP7bbpzva3P4kpmrnCBviEGbD2Ykq3UyVFvZVYU5fu",
  "key44": "4CD6qi1grZsEAvzjYvne7wFdN7aNhbKCQumDi8RjfUH32mXVvTiuVAChNL1vQCbFUgTuyP9khAKYaq1PL5DTt2dU",
  "key45": "47ACyQARsc6J3YRvNmZFfwRrcWWiXbLwvGWrQ5QtUKScJNsTjUrMJ9CmMgHUFWSZxEBRf5MeqAAXGpRmPbSmxzwh",
  "key46": "25eN2NdMfkSmA1C6qKtXV6t8EkskQenc3CaDFY1LzdZfpUF88VTgzF5GwvX21poiei5vTXt9QyCHVBaDrFxMQ23e",
  "key47": "5ixr56yGEftDbGd7przF6F9yi7NjJfJ1YiadLSy9G6DEwWxxrxppBq34yZBsc87gokFZ1s4uBCV359jaPgELUnAA",
  "key48": "CsgwEdCk6ddtifa9LbsGBbTR9EZDBMEY1YitZ4WUh9niV39gYjFmyUpREeTDqMmjnusRwqTr9WjsSU2TjXgmKE9"
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
