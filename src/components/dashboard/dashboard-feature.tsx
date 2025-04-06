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
    "5FK41MPWKn8gJJVKRpef1e9XNYEYjznPSuetHL9RP7vRtzytHL9XzwbFnm6cUKaJQsoLXHCyGtagdjUH31HCPQXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzNBXoAieLnPDVEm8DtpXZCLgu92JFTHBy16LZMZ2ASSJRSVBaF8cG64nG2qhKStfBLW3MmgxiovAUGK9WUPJb7",
  "key1": "3LcHK5u1fuVvDdSpo2XrtA64Jq5GMB87zTHUnfp2fnugrs6bLUHHrWfz6Y8EAH22jW4XLe1o4ag27krD8EtMTtBL",
  "key2": "5jsC1ZTbFZNYbZXhwoLHxNHuavFwLvXgUiGNT2AQYPiL87YEbnTCsRSbTTZRCgYsZkZxtBenUJGgGuhFeYTwwhwq",
  "key3": "5YB3LXw4KqvmMTbGH5yXeEibeXK2CLbQM8GMygZKV6Fc4GaAwhyEztJHKoUGpfhmmxc2vcB7MkZqV4PmPTG37YTr",
  "key4": "it2LpFvnQW6f1dupTSt3T6s6p5hHkHNKWqU5Qboedtv3EkYMbWex2UGWGfVrbiMruwEwUEQxYcvvwcdVi11VF73",
  "key5": "2dTdUBmnXaGVcuMtdHNYh1GKBhoEcwSPP2oAZSQaEpAHEXDwyco5NBvmGTs4VfsJFGey7a5CPkTzw9cBKFa4mQi4",
  "key6": "67cLThpxSftpq3hDXCevytQcKEdRd86YaReeFs2zePtScx1BopB7Pz11XdQjmiz6W6AAvpTLtijs8K2P6dHCLVdd",
  "key7": "4veQCirAQXvKbW4e1zSCUHxs9kzBhJcjfqwaZq2gai8iYETiPZkWyW6JqrmgFVU7uQsJxiTodmdaFX2YeomWKieb",
  "key8": "5T2AtG8PRYTwGSSkBABoBdkviJYUfBaKGLMcTHK2yPqgxzhQD6hhKpwt6LiAMXxwEYapx9Cex9qo1Z21ePcXRivF",
  "key9": "2PxFayMTkS9Sg8Ka2tTJ9AApFNwZiEKeMVdd6tFvZiKyuEEwkve6Wts22xviyQFHXjQ3wBhtmCLUcTp1yd2qURdf",
  "key10": "4GFBQXTtTj9dEyJc4Ck3dA2nbmte2bmzpyvdT13MzALZHb93AKzXyksEm7afqESkQxbd2jZRqMzWBZssMWfJqb1s",
  "key11": "3AzenCXD4tYG2x8BXhvX2sm7rDB79XQCx3dDDisTkQmimW9ze11tAZgPtjJHMLTVhXLDAvqpRcuUcVzZJNqGiQgN",
  "key12": "pCiwZgJq3iZVyEhRNetb99VzPB3cPgLb1nnE5ttuWxqd7sX9ycs3nk2oTBL5b1hUTs7hf18eVxfkZ5GavzSuLR4",
  "key13": "JS6J9obqS7TZUVbdqfGPrn6qwzMDCwFv4yjJ4vgbs8Lce9TSCAXaStu2h4TjqtxmgYYcKuYZCowddChd26AGqvs",
  "key14": "xg8Tvh7mGTHfWg25kT1RqpMpNgpgBvddAS2CnSNHQgstdL8CjgsiYKresQcejfgopkwR5KPGm3waFj7gtYDAswR",
  "key15": "5KKbVPidzgoczvatLdbxStakk39EJiwunXqgRCNgufEknfi3C2XGUEccx38S7dEQqLLqKadP2aXowptiJasvfG3R",
  "key16": "3n1NZq4TGDBwEGBaa6a6to4CpWAwSR2wMPxWCQ6FPnsx5SLJvG94WCVc1t2wmzJuVmmKVgPWhnS6Ude2pJNvtB9k",
  "key17": "3GQvFg84zpN9khJHpUHbqy4GVv7jAKgBfaF6V7hYDcFsM7LERfd6kjjSxzUsYWB5GrUh5rG2xzvgtpiwCsBsKZL3",
  "key18": "24PBforbNhwV1oCuVQF8HziUbwJxpwpsgEeYAFk76RovgEUFhp8Qp8VP14yq82QoU1beXn9tvbcZysBQ66zz3EFm",
  "key19": "4TW21bwJGBY9sLdz5wtMrPfGNaAgBTGs7AaCWB5sTo15TKcUsfdqvN42pqgcvfvR8YFrSrbHxqnRWdMFo4fs6Zcr",
  "key20": "517ncVXGfZAkW2CQfMEMPcuvgZUcKiiwxWG1RkdDW2rsJKMPxad9SA2hVmvEFrXz2HmW9hczGFXeQcWgDtnPqLeC",
  "key21": "53bG24cqYpS7EMoeDER5ekAZLk362U82JqokT38ED8bRiWSfxdgxHFn9XzPQ4aEudF6Wz45z3bdTTNDaNKKMMa4t",
  "key22": "54Goer91NR5zcmY5HoJSBxzQcV1TrgJpfa8PPmDWDzsEDVhnkF6CpMvtftHSvvPoi2KiR8nNUuSXd6Z2veRDQ3v7",
  "key23": "21wXS5GcVEi9cxxPCaGNZskwRDxYZ7oKV5E6KZVDNZxWfY6Jb9z2UnKqVxwVw17DBaMGsNw6eNQvj81JLW2bsJVJ",
  "key24": "2yNcBTvL6JPPYzfzgU7dMm5ykF7YHzC7GAYqa4pn1euyGhvCy4TYG9aFuVZ3Wpu2XrD3rtLrbeHGZXVKAr9HyvDk",
  "key25": "4gS4EarAeLVNorgFJzBod151Ey6aqHbynHFK5K134WxfF78iFfkRavEkgPjttUiUQuzkHutm1ghgifqmmB9PNr3V",
  "key26": "2em3vfSnn2wiWznXAj5tmYHA5y3LdErgLw8zuFsYXnfsrbXFnbhRCbtkoih2zjURsQC5EhLsgrdecB2L7qbVu356",
  "key27": "4nM2B4N3xgXoj7WStqabA11LKMzPLEScvoLcsNyKn6osJmZNqJiLyG5Bbdw8BkJXZVzs93UrxYdTZS4mr68xfCkM",
  "key28": "5LDG3xfsdNmaw8NFCSJvjHo9ALF5DfvpEnf6f4zn1MQZ5ujNLmhU3gaLVEzgN8HFnxapNCJEhyA4LiMWfS9m3JrL",
  "key29": "2RBNvBiyrN68UfGWARuXruUHPLKNBvx5dJqQChzhUmWk2yyMs3DxFV2cLydZP7dmSxVS7kFU1sco4WE4dYGHsEaL",
  "key30": "21Un4DTUjz3nY4ugn89KWCyHnxq5BSeGeb5QS7CyWSCJNXAKcfpQ629ztqojxgDphxmVRmcCUVamR5pKgAWHZtn7",
  "key31": "393eA2TMSv8jY3ZVbKoUC1vh22rQ21pLQma5aekt31ftKY3Y4gqwN7MGFV5Nk8Ce1XX4WyTPDuDXDDjiPyMxqZC8",
  "key32": "45DFazxA9Jazzsx8ykCNz3BAvXWAdALc3QKp4HnzaT2yHS9z96NLHcZmZbb7FbYPoYhxpoPSyNQqF4Mrcw83Y9gA",
  "key33": "N7Vb9Yii7zNYqG68SZoMhMNAkMopxRGZUok897DfMqozMKj2gQjqQA8pHy5v64Nceru653as9S49CJW6fDn4L9v",
  "key34": "2rsELjSMzxATf3N1UsHqh33u2xJXvvQNqMKu2qHuNYzrxENs9V5hLdjPZMK5Uw1vNNDsNKzBRtydmxr6EpLC5z84",
  "key35": "HhAdDk7zsiDPasvoQ3PoZHDavfk4DPZA3sxAM1aULfYtWDKmA5YAc1zLWuGsovTMqrY2jWcKEFXhe2za1vAR5Cu",
  "key36": "3p3a2jH1sJqFzpXfa4DNcrL5s8snn17cuXhwJSg1DAzvquyN6ir1M2djMucacJTgqDcQ78mUqhKf8knVgwNp1tmd",
  "key37": "5ziRsTLYHBTyVyxkBDKyxVFYxepKuAV5x54h4uUqvTjBYFwSRc3wZXezFQWvPfKr3jiJNp5R6iHNMBdVLbGXdhXJ",
  "key38": "3s821gkjAmsbKCSKyuE6weQ7Yv2pSvmNraWL79s9SZdNPCJM4rkq4fhkS2KKrvdRyJuZmgFsLSdFeC9GridXAk99",
  "key39": "4Wca6NnjVVYi5sbCiukQqpByk2wwLU2uXEhpCSVYhsy4CLkpH4pATtsTrjr3epHkpnUFxYTaa2cN5QnoDvQsuXJF",
  "key40": "5J6LSKqpZdBx2Qbh11BZseYn1hVryECLsvMa8NLquaE1USDDjUFJamkzRWmYv63WS44WAVJnBfwUGUYZYrW4DxAi",
  "key41": "SZmM94YUziZxSHjvBHLPhfktJSDp2vkLn1bKcKaCBuyLjjGochtoAw1cT5hfbCm9k8mnYDZAvqDP3T23ryDAyki",
  "key42": "tTxgyDBhjLq27QX14xiBABsM36nZRXNWCn7CUqifvqBgW1LYCgfCiWYWzSFjjpmhmLjbbZbqJrwvzfDP4JD9EgC",
  "key43": "5CrsMtsDMyrVTMhHz6nhzBhRy2vT2JZwY5UG1hCU1M4FPmBwGEGqaP4Ra6dXtH9ow8UftNJ4q6f22LJLMpiwKm1U",
  "key44": "5veMDHd2mJGnzhFZHb7Y6PyPWYVVikdYfqMwodmAL4qQmqGqRcNQ7UDdFfPZ2dB42fWW6VQVZspoACAB4oUR69d2",
  "key45": "4Tzb3aEKiAxCRvMDgnn5fwqa6j9Mu5kZMpviWArrToksZZhtmAWof1xBMnmkYLdo44aAbHbiMbX36sUP4QBwoBYC"
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
