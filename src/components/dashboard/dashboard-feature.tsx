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
    "2io7U5NJLQFE9FV4E6EMrbRsU4v3mcjpVaAkX3nyj3tCzDBKtfsAqWKJwNbC4QdJz56Q2jg5HFr5obRqSoZQ92MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKYKNcacLNNnt2azJ8jBPXBSxp28iP3vAbLWjxsVkZwx54eFKA2n7D5eNmLA45tZWTUsYNH7gVqnxjeupAjjNrP",
  "key1": "2t4cdKxftR66ECTVkYV1fyM1ozdrc6yj96VWXDiJtd8mTn9kHPWAFFgLG6NVtthb5dbDpVEE8duHv3uuEYb2gkde",
  "key2": "5mqAxsRLHbdEx62BXac2orDddm4pndSwfBwBcDuV88Wa5JpFdqvzPHHVtgEPEfbfC4ZALQdfnojmfk9CvR3Qkwbf",
  "key3": "4BVraSvcP4qw67Zf44M7V8RYcMMBfHbmUWb4cU5LSMP4GSc8xMzQqpFC835rrZLzR8UubMQPX1ESu9k5zzTr4DDw",
  "key4": "5A93JyLN17CRk344bwvqysWyKAoWxbRY7iarrfffMsSpX1BKgZsgEqZzxrQqd4oNpGBBjPwBb3jBAE2inBjqVPXL",
  "key5": "5uNCjXQvE4i1Hsnik8eKxP5qGtKUJj5KWY4uX5WfDrjH2i18NaNsMCTb32KSzXPThQqXjSgD9TJxswRk1ZdCyV3E",
  "key6": "3jY7pJBmPzAjn9Sfd3F9kE1DJKgg7jGGGqX9NdUvEqmsgsL32JgsXePV8YyQRYRsv8QeLnyFXfhmzs3eTRgbd67L",
  "key7": "L6mLjTBPExcr5Co9bcqEhwbiBviFw5VNasuTHWxv9DHpjf65rPdRdq38jf2Mze9Q2Eacyb2zDAKYFr4DS3tEoKT",
  "key8": "5BPHCSWdBUn94pD2PdSwytVi9AMPoXF5odHJgXvc1RrHGP5Kp3uHtLsmCyJbNLpgJfj69cFwphg6q3EoWUqA3Ag4",
  "key9": "3oD7MghrTx9hGzdjivmqx3MA9E1aXRZWhXr3jq1gysCMEAzTde1jCUeEfqWc2uYwo46QwUQ1YREYvrJkiGzjWL2a",
  "key10": "39mVcBHFMDZ82WW5TTQcY73d3VYZDQkzR3jQDJggF2DqsHohH5XJUoZXfVCwgMdTKE3kP1XRk73rjJeqDMjjFyoH",
  "key11": "3FvEyWirFq4o1PGLXKwvC9XJDCG76vaH72mR59S1uJXn2TNfmhmg9MvLBfWRbSvva6n6W1ZsujeVHYAQdYMJbC1o",
  "key12": "3mgFmegpNVr4rjnCipd4gf3SdQEp52wGbzcTAEkWKpMMQnfmSHaqbX25pg8ga6uhMysBgn9aqQYo6GKja5pUxVwi",
  "key13": "2XPsabZHyJLQe4Jb73sRmJ6wmJy9VEZnS4P77RJpuvcH8B6A42cuzfzqTi9Hb7ss1uqGi4NU1xRMLoAmhEnTZ7Y9",
  "key14": "3txRpJKNfLUSVMB6pafAuPaJcssWo3hAsQukCww4bKsGDrjizckRvGEEP9q4F3WX2f6WMFuMqfPTQMjXeNcTtwGv",
  "key15": "3HpPhtXD7avgsUq39bZKoS73rgaoVfaobmmcvHAXgJwSyu7snghS4A3KhAv3qSNzTTrSK4aw7mW5wkJ6tdULXNpr",
  "key16": "3NToyCschaNubDUTaa2fUdiYeUVFCRXBgKSBtmgE22TRbSEs8SZSHhYXHDuiXWTBUzqscBHE7TfrdrcU83uvFmoh",
  "key17": "2wyd1cHq99yX6M7rCi4uLjiCoMyDFE9FWzF69WbGVuSGSL4vHSMQXpkwmvKzUbkV5jEhV6woTRRmv68WRbTwj17C",
  "key18": "2nbmK7KFYPMjUtWLXzSex8ThDqem8J88aWuTs9sGnDvrSFjx3ChPUQSXy9GcV8PQ3n75qhjbMqRWJpqPEdAeZYZH",
  "key19": "2jSk5NsPUFYgwdCYjjvXV3PUkfBzQDN3MsJkq9aYe4qX2J7iamdZXJ8stna5rUxhexU3aJoYSvo3hrd1jjwdfq7h",
  "key20": "5dV5e37uW1K8p9KZUaveyxByo98SszTpJqZVGQtj7RUY8FNRLvc23eHArJforZh7kLgmHjHJwTAXN3ahmDLrvioG",
  "key21": "2RgjMWoL67vGLBDirBXhPwTGrccQ55fYmyynHUzvzuvaJdvQBifC6wDV8nphBeUynqDtvu6eN6wyz8Xu3Uq8eo3s",
  "key22": "2ZBApC4dei6apG3dQZK93C9mnKe6GcTtSaKgDcJN3U2bgtVMk5cd5oPNB1zNdgrFv6VUTbwY6enXqa3QumpGhbhb",
  "key23": "2SaYdLkvwwdGEr4evszh79KYopPKPvuhVVJf5vAnNshrFVpK1bctc5RsqSa4FiMrmqE9NdtLS3YeBSzquui2cFG5",
  "key24": "5Q6t6Hm41ZQRPsDEEbSGwJKCswYFTQkEhv9a1harnKFLfPXZ7sCrZZJtCNjbuEgQM5g5q3e4gBAcrC2kFAsXdu1u",
  "key25": "4f49efGXxtqF2fioXjLiPVp3b9N1vufAnhw6NVLdudeGkYZKuA1GtsgUW5GY1MeL8QHeMsiTKZ9GU88AVixMqeav",
  "key26": "57z9dTYVjwYtHmHHaFW9Sh8hX1YNXxexUZi8Sz9r8GjqD94VJWWkXJgk5SnF9GYfv3ncVhbU6zFZuzscvvY7id4b",
  "key27": "4U4BZHAif8GvQkxZLgw8yeCtmsREopuMTdPb1EQzN93fVfXCwSn3fmvoSqUMuaaGK8D92Rxic1To1dqWwdWoYByR",
  "key28": "2uWgfUPmCXJCRkkuCSwHGvANm9mzL1HzfTk4tys6prPzX4ZaPoCXyFuwGAJGdcAHeyY6mmd15TparhDxx76dQ8uL",
  "key29": "5ehDX2p7J9vYg2UaNvvKhujrXeTpCUJHKF5oiSf1bkwjnnpgbH7jgZJPQimFowyh2354Qe4LuLek3RUau8TzJrSC",
  "key30": "3Dj8DCz2LeqfQyF8eyFcAhQxAKdWR9SUcqtLgjaaRf6ufvgwMP6o6Zwg7wtSLiA1sUv1HVrqBNP2MjY413mgTfiE",
  "key31": "QdTaATGkbPZDCnUKGAc6DPGtjd7ic3JWFNC8rnNtJEWLMBdMPKa2MnKtWLt5Jhu2NCzcnPcLtLuqnVRnG6ePr3g",
  "key32": "5zivAVp8xoKZrgQm6E1CtTVBGiKB4GPD5g29NnXCqJu4d2Aajz54k16VZfs5U5UYCJdQNXwCU4jXtobYrkzCQrwR",
  "key33": "5KaQ6HnB2WPdUy6xLpQ7SNvLmhceVqUbe9zYdvSXWzrztZKEPMHg2AhMrB9CmVWB36kzSywLmZGPP1Dhawpjzuw8",
  "key34": "3Aan8Q1GNTxLxHivRoh9Lp3nsjQrvk6ezLUanHdnnTF1KMDD9Z9w8Q2nxjN2Nfrfnox8C7HQewhYJsP5WB3L3YzL",
  "key35": "exCTUGahHczVcPqgmwyYRAE2Hq9QEqprNqUdLyte3QypspGXvZXe2TUsoCK3iUeYaQvVrCAbHR1yQBuJXNHGpXN",
  "key36": "2GFitPpHeUZmFaiD6Ng7nK7eqVGF8v4aRjbagi1W9uPLXhYmdWFthNkrodemXxAVgwhCYzh2LQa6cPv9YcQSWwBu",
  "key37": "4quLum2P4BRpCDy4LSa2XyAqUVLPUEqskgpwhdA6iLqdBQeKyMKaqo2N4v6CGDqoiAS2ssuQbn7YXVDriSkY6daj",
  "key38": "3sVLvzMPafCx1YSKhVjA5hUYjkmSnbUYqJJwKuYh3sBQCtyd487k2WXfgVoGk7kguV3zPAkB3Mdo8VC9hrzomHhb",
  "key39": "27cQGtDX8SfNz5JdqhUg768vZ8jGzKTficRNtbhezTevtdvNyvEMBGxMuSmBHPDRkwoWdV1bdfoHPeSjf6hsV5Ar",
  "key40": "bm7a2n6PagNc54wqEiCK9AMsjmeAiEvraw92S148uLyTMk4hS4yjS7er1aTwfgBc5BAkPj2Jb9GDw8wATAoU2sr",
  "key41": "64mAZ6Lfybbmpc2PFHiv1rp8XwZmp581Do8vKyr4Q4M5HQ1BnKcfRVtRPWb1HuubkXXepGEkbPW8xgN5H36pK9bf",
  "key42": "HQkcDiybgHUz7GZnZXDDqRvg49ar5DgEiVM4x9tX6Hygt4AHfm4C6MkNLR86nF6sr2CLK6g8tczNjamP6Hd8JmT",
  "key43": "5JJUXjwFLcqfDZUhckkK45YbWn3c5v5BumAknXgMAtd7wxXjhYMGXgeJEWmnNLvfqaekbErfkUDUrnT9Fy5v9eMQ",
  "key44": "38s9RDkHc3NDPNBtfiMSY8tK7UVAuAV5Bz3KDLUXdteRx5qyECqsKtzsfAC1P7UwCWvPUSEgQKgVXdwmTW919BN6",
  "key45": "4fpPi3seGEMTe2nUhzKgu1sCUpjKRK8U7LZtWpHSwEgz2YiEYVH5yoBsZf5Z94YsKVps6ojQ1gHrcesxDXD7j2ch",
  "key46": "2gKhCL4CLsATjv6GYUGDb5E4xAJqKb6jfsKDg66uF1SiSydBG1DRvec4bkzow7WdPwrsDDkYTvW4sc3SxSTsoEKQ"
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
