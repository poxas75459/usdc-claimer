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
    "48gkokDyEmbLpCugBpqttMh5GsTYFoJs43zQXFoK3XSFnALqXcCxEuFDVLtdNa1ghGn1Zw6MAH1vfacHtvkx6X1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5yeRLqQdgSnTnAoZJvnFxJrQHL7pWbyXYAHLVSHhfhBY41gPkGVKPhn4H3s24RZ9D9zyf38cogEhuTxD3eBnDx",
  "key1": "Q2E4PCAJPGMWJiN5PJ41nESEmQ2X3L7TLj8wgUtmrVTGUQPH2aBiPUUHR5W5twPSR88guTSxvHhBSjGTT33ttu4",
  "key2": "BUop5H9EQ4VKMrnrTmjx3u8qkyzAXMKtp1V82uN1Q5hZT5kPosEoZGxE4DqYaWNEKnnSfKceDk9ykrSsU9P2WC2",
  "key3": "4xDHx8hE6T9HsZeBWXcyLovxnuEYZHECfVp349LkyYk27M9t6J2wwZBoJsbPzVS3PLbPSboKuJXKjGsz4VSLUcTe",
  "key4": "22SU13Vnu7hmKWqGCoRw49EkVDsMxrx3NfuuXTVau3wRudqGwVWAcEauR4iq3t4WFiuxkrCVZPNkXrGnVVgDwSBL",
  "key5": "2GBMfcuPHLFfb8wDJAB5KFrTGQnQxEkAzn7g5qutXdt6txq89xjZiinqxuoU3bUNUZ6yzt4GeY9MZsUyBLzgRFS8",
  "key6": "3pf7gUkbrGyY7XBchPxG4CXpcHzFM7ncy1zSpzo6gfmaXLep7nnEuE4oAWk9VCUjGUtanyfdLE9UsvVwfmMq8oHf",
  "key7": "j5Smckm2GmDedHAbPLFFzJ7pf5tUTwAZmZT58vv94kHpPGtwxh3dk1mNuYMigyDhrBB3fXFCwwpqo2wsB9qh6fn",
  "key8": "3FwZkcen64MAaPpTQHU9bixmyEkeFCWMqQrR1f4mzrA8PjK7u5czSV319pcsQwu28fvJ7jgcdfgPwVjaLmcVaTjZ",
  "key9": "5yHaQZoNfJih6XvNnHVWZbQ7fe6qL5ToXbicfWEsp6Ypjvyt8D15rCzKe5v1ojA2MZox6G1msx2y1xDYAAiAXn8F",
  "key10": "ok8Rz9QiNqJfoRbhhcBLNbVBGAs6Gkx4YxrQgMG2Fmn4SEd9hciBHGAnHANedvxg23jK67g8kRujpLumekSvjgy",
  "key11": "5WuLFeUAz7TmSL59qEDHymcaGMHcEP3y9p2PeNJHhcNnjTSsXNpvYg3UKSpStQxmUr22TP49aeRsktvJzm5SJwvd",
  "key12": "5fwGYrG6cH8GcNthE7GzSH3HLeXJH5BL5Dn8KtmzPGHXYkbMCoFbYUGQKXzabDnMTJzyBo8FLHGGKyWwhR97ii1R",
  "key13": "a6CmmHr6UDfDcLb7eSWYc7FYeq2xzss9tEBgtr94yK9KXi3kB2KtkhhxQgZirvhFTzXAguNCmns5xs7JU9NTUXJ",
  "key14": "5VJeaX5CeC7TUX6tampRehtwPHAUigXHnBSZP6346Zot5Cerq4d7KJJtF9W8nqU5A9J1Hq2ZXWRzfA6CXBXjsnYz",
  "key15": "5r5dYgbW4AdiDVBeKTN3YkMp7sT9eGuv3YKEU73WynfMKkz2a8j5YxkFDTHSBcP2MG1CuxCMzXbeSvkv89UZhudF",
  "key16": "5UFPjzpK6EbuzgVkkWoNr6w7FtZvqnCkWjgLjxCPRSzGCyuMM5JikcvL4GdJJWyfLHxdA6hdT3tDdDrTUz7PpuAa",
  "key17": "3zRWewVd6vWyV3YUUVjRnzzpz4S1GmhieGhnqGKo5jx3EYZ5ryLcxz8srwgxmij3CasqE4HnzZEDVHuPLbR1b7bh",
  "key18": "3U72DF84iYXDSrfCXVCu2vq5zrgtmY6BerMgn44ykHgigBukpR79vH7bfRpDWb1XedufuqQYJQ5BGKpMyddg3q7B",
  "key19": "4EXLBLvLuDNXZAHnVBfh45GbQRj5ZZNbEwWmbh8drL6zMQiumGWJi1oFzviCJRPdqu4zDNaDDtmnYKCmRAK5GQSN",
  "key20": "5DPcdeJHYCFpp9G8ErQvKi1Haf9F4LbrCkCvchHf9hRAbvGiHRTsjpHYeyp4q2u13h9YVWMCGoSRnZ5HbYY8W9Zd",
  "key21": "2rmgq5VLjjpPstMnHrfA2YHbmP7gY2WZfrs1bvMKAX5ySVk32BVbbu932FMsqvFXaPezhFDepFDuDk1pMB5tKRT1",
  "key22": "k4t8aJAadUYz7bHPYWgv5g2BWrEZpe9KsggjXHzreWCnXP37mGonULqwmpMdv5tbVh9xdckpLNwaiXrDzGNGNDv",
  "key23": "iXsUMLNQxKHLqsN1zj6tA5XkyKzCYLnBiRNap6tf9uBsf6gJMYKrUik8UQY8MSsY6nJFQQLVsxcMRoHhQJ26LWQ",
  "key24": "2yXBSvbFJhGGDcbD5zt81Tx4KJXCVTsfkDfMFHL8HmbYNbRDyYWhAB4abuXa4hcoGV98hbHBnx1kc5SeSaBkQb5D",
  "key25": "tUw7xDz1pEGK76MJZk21oUUfdza6fQzffg3s6m2NYjziUYMTgUF9nd8UK1gShXdPxQATeG9zrumFMbT2qqFZa6t",
  "key26": "2FB8XhgvNcTYjbnFH7XjbKEx1gHg5HTm39KTV5hhjWN3uhkrhUrLgc2fuJiUdxZHxDT2Gi1UvWTFppopCTSFn3Xe",
  "key27": "XCi79v8ULaE2w2tZMCYHs56Ur5WAxrHQxWDjx1jJWQmKezytPqPE7EG379dUvmKZaChpDPdgkWpHaeAbvvJkJMA",
  "key28": "51sg5jbeere2oUu3MTsamfwGbFAm3QAfy4xb79xMss32Ly9arUewPyw8pFeH9GHy97VQjP3xbzhL11LoiPK7Gf5T",
  "key29": "3bADBsY64PgLuHJSpK7uBvs9MvipBKzLKh9MqsgUcjqipRs68h4GFaQ15ahmWMdoNXEFVbSRtF6YFV8byfQM5Rtx",
  "key30": "5K8sVuxtSBiJBi576F7zgD4YTihk1WUap8AdataF3ULeFxtd73je9ufEY1MCw9NHaebjpaXTt1NopsCKYNnJAht4",
  "key31": "2aFsWLnwLtZLijDFYtNtD6JH79GS5NzHs13iPrR41ivc9EuGwH4sy3CGbFCbMxFfv3xk4mMqHWbi4vqTXWwZKYcq",
  "key32": "2xz93k8o2FZEX1M7szbCxHsrBzWAi7QMV4WfPMmiXUWJrco7fnEUc8crMHNeEZ3M1cQcduXrnEeKKgqkhUKjLYSM",
  "key33": "3XcrFzvowcaKqeZBJ8fojLZtaKTtZwbdBduhPkhDzzKafju3EvEePWVLsudDzxke8J6j9Pk56adNL7HFSUgUexhy",
  "key34": "3EmxtE97V1Sfyv8y5haZvhNWAWBV9JKD2gEgRJR7qhb6rbeQGUksTweNFN3omSRrCoMSY3RUvSW4GtvntYKFuwYD",
  "key35": "45SHyLgALA57Eam6Qb45Y3vNEX4BER7dLkFw9sLyxzqBoEgHyQ5xitY2tc9KSPfnt8VvRHHppKaGmQMmhZHBhYXS",
  "key36": "5LZYykt4oasic3xu9wzJH9LLRYGBRWDYgmx8R3LR6mStELagf2Sx4dtfjmh4pgGimBqESUgXw3wdjmerCwFKp6vS",
  "key37": "63vF1REjMnoUogPwuQ5m1vdo5ni8rAvjwvTN9QEPV4zNbeFTK1sjShJqchbuGkbw5JqUFyKtpdbqQcaHLrJLkrv2",
  "key38": "3iT2x3iRnwokRxsYFRWGLfC1LodSPsuyhmVFg31sC9Fm2XxvxrPVn8UueprvGh6gLqLzQZC661hwQVLsuvuRx1iN",
  "key39": "3aBYnCLse7vZMaQESXbfPHs3LBMaeQjDrAxmtktaxSYASFXaAMaRTc2uaVfR6ScMPVqgvNp8UUHLnFxri5iBV2ip",
  "key40": "5CgLsiUx8VQs1qXULzQxjTTyF8tzeZLV2kcFBHhjRZeseJg7r26nnkp8hxP8UE6aYHeuJTB3qEumzVHosejnWsmM",
  "key41": "4RonLwyYejwe9yxJSys6NzpcZHburjKrw3Fjx2wkz31rSxAWrvNensxfqauimUHH1dXmDap4KCdrN37eWu5kmnpc",
  "key42": "2Xqf7GNPoLyqXxfewDvvQEicvkXaXm26xesoNkdMW4uNXhkZ8Krhukq1iiB2TAkQ2nCakVxnC8f2s8rG2VDNU6gL",
  "key43": "5L3A65dGrh4SEJuBWGj97dgKBUbUNLfy5hM3SMvwM8FAxYMrdKRWA47wpakTKkawv3Pw7Hz5wtku1GP8mvNUgXNw",
  "key44": "3ixG8suALMLu3vTopHP9eZcS8YNGyEucw7f69xF2KXi7wFRSFAUcZhZQEgp2LrPMuTSUA6foLUSHEU4pREwCFoj4",
  "key45": "63H7wWWDQEFeW25TxAKYL7G5X3FdR2mGWhKa7fmXx7WcUhKkRphQecMhPD54VaX7SbwY1HLLi5WY4E5j4PbwwmCH",
  "key46": "22v9HS8tFSZPyomgXjm5fX2vNWs1igYPC92g5bQBVD1KvQJbQnvnW7CPUapwuyuK1k1yJxBStkVb2NG2BEGmABQ6",
  "key47": "55bCZ6VLPgtfBz9rtPRtiRRm6nSR5muHiv1qacwvgEM4H1E4aeD7kFTYuG6iL5r6iaZkXM5aJvi3HQ55L4iWnjM9",
  "key48": "5R781L4UTEyjMvuvo343PnE6VEAqYWFUKnmdWWVmMoA5JZMKdLFKfjVdsEQsRR7HN967UVCuTnmi8bD38s6xNyMQ",
  "key49": "Avd3V4qXJYaeVYrnpEemiT8RWprhQbULV14E2tkB4FmJ8uZFqwabzwEGhNcUN3uD3Ld3V9uL119wz6CoUPn97ED"
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
