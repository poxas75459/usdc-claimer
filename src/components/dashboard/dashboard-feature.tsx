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
    "auDiM4wfLURg6zY6N4Ut8BjsUs83CZ28aSf7cVNk3prb36NpEeWxtUCVLwUW8iTVSKxBUiyeVdrjR6AZBDgBj2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X6SV2H9TBtZp8STiyvAMa5z8yJ6Tndhijps3AqQvFUUMeac5fhByHsiPARahN5CZZsMofTqcFyUqTqwwizimjod",
  "key1": "CFuohN6PVzLgdZ1ET6o59oYHxq9hZvLraT6HLqDGBFvCkaQ11XMwN4sPvRKqGzPRAa6KFnBuJ22APZW4evCm7Ag",
  "key2": "4mg1WTK3wuPPoB22r1Dz3L5HnGtBMf11jxFt7G8xeL4JNw2p29wzRCSoLGVNFZou5v2F2HoU64Ynb1521LFkYPCe",
  "key3": "5JvNcy96nTPLfeGLUsgYXhxum5bQv6sA9T2HxzC9gkyU3T1AiFon4Va3SVZjWpZ8w47ZtazKGQZa54UpEV7oz8JC",
  "key4": "2YaYhYx5U6fZUYpFwTAJ6AnwXD82aB4DhWydwu66pcCBTZfEeUFUCJwjzxSaU4ryaxSbXSymSSXy3LBDWJN7i7YF",
  "key5": "4YJyePnN1iReT9Qxgf2vcmhvuew8TMVPGeej7XESYdUPPHkD7x3ZiwgMhan9ddwd7vZqEPBPr23qzGbEwmknC69i",
  "key6": "5ybvJ7wo7vDvhCzsBU7SshJtUySEPKLiXTvhZyoS2nh1Ri64gGpnBLLTb4iQXU1d1Yuoe2HbxfUXFQe3o3HGS8YV",
  "key7": "5vhdoib8nJfp7hCq6SKUNJcWS6HnrayWhFiBmwAGPnAWZ3rRsWKgvaZFRP619enHhuumWsECaRXWeXNb41gwuoc4",
  "key8": "4sx5Q8LoANKB3Q5Kf6TG5kEj2EK7j2dSvE5mqf4j2MZ3n5gFLdjrKLgQyry7uUUS2RCiWFD6qbTYPPWpYyEgAULb",
  "key9": "5yqx4br8kFWX7RSNjdLwP2M1fmd5fNk36e1q6ufyLddqwd6nMAX4WbmZ5caA6JAP8edfkBCq4B8KBTvMADZo2Vui",
  "key10": "2vvTBVCeSCbAwivqQvRsJZxPJJV4dSYV2yoPMfKiZdCaApY9F1oZbNcVVAHipn68NXeJ2xGAHj3qSrmJ2cTWSHnr",
  "key11": "5vVRZSLZzvD4F2CgHenc27W8izFfRcjBH82EekMrXxhmkWDap8TwSfhKvWZbC4n5zdhKzU8DgmCrfnp559xMEvPu",
  "key12": "5HuVAEtiRKXtsdiXnonb6nwrjh1552ofTXH1AHoXvBp4QnTTuVG6VrmrQLwtydSzuj4i1MyCCvZmhJkzdf9hNX2p",
  "key13": "3UoVoehHKeKqNP5CiGHW7s2PJHsVRf7oTp1XyWyfET938e1ZGwG9MnWKkksHPf7qzQ69zMy8tswGFP1ogxEK5eKs",
  "key14": "4SvD2MtiCtPwf3y1V8UXr6cN4Xm6rYUYpdmaPyVtCCTaQ4SX9qob9eUHkcrEPT8ghWYKQA3HxPzuvBuekqmkWCws",
  "key15": "eBdAP4P77iPKUheKea3JkLuQQ88LQuEv4mrF7Rczqc6baWgMuypgnBy5Nkzmr9cDDMHLLScth2YQ1VbZwMiGHvX",
  "key16": "Ep3UFRFZSXSknH4UpE6F3zd6vQ7fbrCNpB8aj2gxtBSthfSdea4Kn6F7VkzQAizhxKzXAmF4z3HPkmj5ZzucwNX",
  "key17": "5V6a6Vc1nYDPzg3KmSC9AWFJS224VPPstT7h6hKDe1aLrwhDNN5od7w7e1PFVkhyjrSABWVUk1kuWAFozp8PGpRP",
  "key18": "3i2tcC9rpAsgqnXt1c9PKJmGDtM87BmWeJ1qXUEo1MKgWVFM5451eeDp1AvHnenHUB1A8rZyCEMPrvub47Yrnrua",
  "key19": "4SDSD19aePDSK2qFrzJE23JYwRsguDNa7Ae4uJJr767c9gkiRf7xkQSnvVk1b1vvNgS6yFhwFhd6RiAPhRgyPAx8",
  "key20": "2ZzRmqDW7mJfG35dkc8cALTkUtFdH1iUowUswM2J6JQ6rs8pSnEW83yVz4yqaXvdBQiR4BYq7iEL172Lkqd4dxV4",
  "key21": "5rJUvoRLMXqPeW6rEKgp18W52XL7a66aTCFbN5xYjqumwxHa3W7SdYfM85kNhkHiewWBY7h7hVEt6ruBTcsETkaJ",
  "key22": "3STSik46bwXsCnmH3UjBjhRVjUB74VDc86jSC7BFv6fPV3jYQTfwXn3PURgsr5FNiJZ5FKUP3QD7D9i7DMwqtaJ7",
  "key23": "MMchwv6yfVVVJFS28cQdK6Qt5EVeHJMLZGGL3r1BCHLzi9yFmLjxYJJ4Ko6kUi2kVPqb2hPFKJwWaN3VJBwCUwa",
  "key24": "auUCKQPkPbE5xBxF6Yx81bXKGhNR2ty4dZbJPinGsCMfymMzE5EH7oZgcCTzdwv6RDVKDD1vwssqSQJJyzJCPTc",
  "key25": "6urDroVtfkBWJWuLABjZmzPMWRa2MCjxdPNARq25WoeW8mUq7TLvnuSkg1bMDPDfenbmLvdiVgTRx7gH3sk9zVF",
  "key26": "5nzrB6kXhJJgkhp7WxLBLCesf2u5MTL1X6zCeDjzQHb7wFppfrqvZqaKtNq9Q162Mhcun6fLutuzCL3xJwDbMmmN",
  "key27": "3AwHkHEfwLTPuSBenhH7LwKdy1N73Xw9KcR7KX4WkMnTtg2nfMyXY1tvQEkcwJ3kReyCfsDyBz9zgwNqUeAdXp6Q",
  "key28": "5pbeFmPz8ZeVp9LCWwhP8qTW57vyg1CWRPPenwtdTBhHdkmijST8aQxyS9f8zADPu1XmE8p6coGoWrjyrJ7RK3dN",
  "key29": "5MEab24HGgfxbvhFoko1xiQcA2CDws9ZvwwhXL5ZpRKrqSkxwwcRZtNQEhQvFCwoZRWWq3aChYubrbFEsSrsJZ6g",
  "key30": "oBqUGP6EnDNKocdhWWJ2X7LptsDnGiAfkYcwpg6iqdn2aMzhJH4DKj3ya58XHMEoTHfhDXW1fpGt7eKV7pB98UM",
  "key31": "5ZKEkuYV4R8VrqHSEuzt8Hh5DRA8SduGvKDnenvjHAREZ6TfWtKf9Rxb8K8dD7ype36MjmLGpfGTjQAiK9LYETtt",
  "key32": "28hH7GzobummDADzkmDQnP8QdnUpabLnmuDfhEJvzA7cDpFtLJ2QT6LMXmyjM8FgEW6rG3Noa9fMf53KxQtPbJg1",
  "key33": "3uWiAsbZx4jZk3UuDGaAZj9n4zpnomf52Fou83ZxRNi5opYfcsTJj191EUYAdfgwfDdwT4Tt99kj4vLNCvuCT5fL",
  "key34": "59XHRzzDVhkQCQJHgGLM7oEwKMGNqvRbGhkXc74hbeLADvMuyHx8ECmFJbLVMm3W2GuxVSs9JHyhM1cuWZ2d9Ahh",
  "key35": "3ZvfJdZs21CVjqfX4Ecn6SyyFGKinZhN3kERYyJybiB76j2ynQ2YWZjoc6kyYXQwKjkAoN12pQrigdMER3XSop2g",
  "key36": "4Xb6f5agwxJHawQGceBZdNHnzBk879kT2rxBiSnXmhMAvcP7GE1sMT6WsrUXUT2jkVmr4LBf77RzoBPoAX6U7Dgq",
  "key37": "3qybQNVnnr1nMH5naLFh1Q1hPcoodvtw1ZTZuBWxwBNq1qFsKQmDiDMSHHpWqXGAdZS2qN1EpVkagndn3jATS1uK",
  "key38": "3kjLtH8XgQr6nXGczMMfv2fafyWB7eqW89qxMbyfFEe9aRpj1s9iS63VQ9RU5HAxRpaDMQgi9aVZNrC1WbgKp3w2",
  "key39": "4Zh6zNSsXXuPnFz3mae3Gtb1PqnqiuGQGHcdpZ5CcW8T8nnycTK9TrFrJ7mTexoWdpvZvooYBagUxVA1jtcSjx6f",
  "key40": "3RkYWtSUHWRptQ5fvfReJyY6q5pKsLaYqiyWTHje6pGWe1BsLaLfZsdxKGZaLNHsvyuvJ3yVhPi4D7tdsPodkDiz",
  "key41": "5U78ykrRBdJNihohdUcv2YWEdfTkUtX7X8B46VNKKuDGWxgWHPL4JiCmGJW51aqHNqe8PZ43BrEhZoNJ4G2v6BdK",
  "key42": "4GbVckSTqwxCCewzmD3996LRFuTseLHzKd3gzPzZ1UE1zFarnyvbX8EQb65k9xhNicw49fNDK7btuvw7MZHerVUG",
  "key43": "244KrLBhtCSHmaVX9vU8kTgjSzzCRLjCFSXvip4pgMrXJhNqqZrGrzNosrJiyYs77dF1QHRecpQhYtKAxnRqaBwp",
  "key44": "5qxN64qRJaNQuJwQ7Sp78vg29aCu5v7b1dWZ8CeYakcHz5Sg1d2Xcsfh8KzmmYdd8DyPaf9vdsBUJBmKjwD7p2Qd",
  "key45": "3oWRzc7mNuLm8LhywLqTqsgjzw4H4vetWaAHNsBM19XxEZKigJi6tUygcAZ8sQUBJ4RBHWQiteQSHuJHEjde9b9t",
  "key46": "FtqWfi5XsS3bvhMGph6QBSwCEvmAxKhF8hNgzMyCgc2V5D327DrScL14b5FwQJVPC6jiVLheX5UVxyJgz7J9ZnT",
  "key47": "5aySawvFCF2VS3vNNZW2rPD7pZDAGJbnhTWyHMsc3gSaVfTHyGK2Ud1LVDjAdLNkq8688DNGFTmf1nVDnmX7SprQ"
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
