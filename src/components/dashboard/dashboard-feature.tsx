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
    "3vkB1D5pSyRvFT26MTvbUfGETv4gK8o73k51oC81rGQwKuSGBQroPnvrtuKToDJyomToR6c6PDJigy2ePcVrefqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YSArMsbzjTL61fZQkRh51TARrQGrVv3xkxbUpwHGw5WVjxLygHEDD7mJPFuV9YC5H8JQ6zpTzFxcN96v2UYBHxQ",
  "key1": "3VW9xx7uw98E8x5sAyoeVhTdCaZZ8jnLiytzjyWzLYA68cDMsWwx1hL9BSiWw7jDeGtB6tMvk2xpncgs1jBipmHu",
  "key2": "2h5JgSCcrtjTx3FspzHa8uBMMcL8mFUU4ruGjMBsHBxMDRkDqGRBWpTbdwK9ZinkAAcZXddJxcjqd9DCDLVmv4mm",
  "key3": "51EoUwJHWrJm9qCn4CSTo41WCKQ6yGgEnePyLdDsHzLvRzMcb4Xqxmg6nduNatQWf35XYHdU2ftevSQLTE4EkV2W",
  "key4": "5MsDXASmbLrUJWYoZ5K1ShjbdbD42iQLedNCDycST7xD34EtV4opv2ebofLEWFnf8b4q2W3SR43KnZatnbj4Yx5x",
  "key5": "5ZN35gT4m3qcqXE3Zs6Diy2KDpMcJ3aDQGMUfJgeG4nSiF6Qk8UcZmMAZ55eC6XGZA5u4SBfGgLJeqNFrTGsowdA",
  "key6": "3Pe7JvWxs5ePMhbak3LrtE31Zfh2PjfVUqj9y8wiuxv29vyBL859Zr7MCHY9bS19oSQFqVUK1Po8v3tDhyr78TuQ",
  "key7": "iXgKgCUtkN6JKbXioEg6rWoFeVkbLZwFBhguAaA2scm3omWayJbnMD2XjmuK2SaGCj3PGkQUAz26W5Q3bDx16jm",
  "key8": "4fTdDMEp2XhSx6Jtnmqs5GJNq47CcR8BTyujrjHFoZrNmLTFe5zyb8GZJzr1Y6M9DHNxgBxeqQY3TSQMSbFeK5ay",
  "key9": "3zPF58teXoWRb82bNfUdHpW65FXS9MutRUxNQns4EekY5CLj4qZGvPksRtRcRXo1Gu1jkufreinGyb36nYxzfu1L",
  "key10": "23wn5di9btErtJW8wXXpFMWxzqQzkVezxPr4FUzi2cfrad1X1L2EPzZHE7fnzLNvFJ6VjjvoNA1fqabtqdhdzER1",
  "key11": "5oHNGfvG8MGeJF5ajxmaxsz8RpQ7hsXeyRZMpuJpM4cfTeQa6vKFWy9dsS3zjoGeFFynYbUfH97ntRTybxyfERzb",
  "key12": "4buEkCicy7D33nmzKpxGAEToYpsvsb9dzNzywRExS1YhT7JbN5aGSmZ1nzBRg7SGMQjAGuuahYHhZrY5djP7uXzv",
  "key13": "2zTr5vNuHEkK1iWRa5oG9zUdSkBD94vQNd69pPW9aJTHETbz5H5NsTi2mscf18PggTS5cYUc6tktZZLZ1uiUGwCb",
  "key14": "62FahNncR3oQXN2DVPXM8D53aizR9VXiHmSs1KdpbGDruDwd3o8wAFfJUio51JZCT7kxNmzA753rH6CwzBHeyEYt",
  "key15": "4ME1wBBRWSC6YAG39yPkfzrKFnXQ1akz3wFUp4ALbPsrrLjZPQjWLfp3aXub55ZQrwm26ig8NFvecXuC6vcdN6iL",
  "key16": "4MbnTF3tSLFxuJBR8N34DvqyoHyNH9KDx2h51QEiC8y6kEsPkZocNQncqeS8uQgDVEdSXo1qphzJ9UqzKnF7BGfn",
  "key17": "jL167TrEoRLWCSC9MSdphXHZtktmTVPCgfamyvLLw7aZny7Nb3dkfHNLbhPmuusdEY8Ri9bmX4A99yUqjC43ngT",
  "key18": "4Xx6G9YJESUwKaDcySdRohcZCFEJaAaDLcrYiPPRMtCTfs6CCttfpepTn4EoQL85xnef7K3u2wR1ZvhvyTj6kNLm",
  "key19": "2EnrsVreUqjzU29raywokAVZtnCdCd8NhX9MSsvQFnVkfZDJUoHsGfrEe4GcfvUotiyabyXZbC22FS4iSpq2e4Lz",
  "key20": "5puJAxjK2UM1Hr9MqFybMsUMNwbbrenR5eBR5BcDPBWiedgCKnX4VWp9h6XPeBCRnLxLBuzFbf7ZRWcdCQqz4RXw",
  "key21": "3nWmpdAVsAN1NdJJ8aXmmsRPmTjKAtbtq31NDpj7NEprquW11qEPkiFo1yABwqMCBMYEDu2fdm56AbG1pkeqCPeQ",
  "key22": "oAoXf4EB7zTTKQAAVXHBgf5y85dhVU3UyExsqRWb93LAou8sZyYrSB5vx13wYEBkC43nKVSMfB8yX3Ymmz4S2aP",
  "key23": "56HbKvDT8Vh88wQWhajdfgzUemRfAe2vu62wQes7He59YBbuML1YyXcv3y37WDQcAwMrbqDv9MdKCdkMZWc5TsdK",
  "key24": "2KWECegUWwLWP1Jr6ncRATo54h13tbZXDKM5nvw8Ttzn543gnPtg53trhxQQTZHJgWJYxD15wqq8kk7fRnWpPdGw",
  "key25": "3RXS2wtnScaQUFy6f4hZ5UND1z7twYvCZV4Cw6LTtJMAkE49CsGSKqdFF13HYS9DaVmZFUeTtosX66kAbPjFZiwh",
  "key26": "4VN1LmcZEdU4XKmDbhhReQNzS3RpXpUoj2HEeLX53Ma4z6x8z2LgdDiR8Xi6f98EgyNtM1arBYZQQFQdvBetXx37",
  "key27": "2qCa5yGH8mpq9VwQNuguVgnWkAYg5A9xQ3KHNmNtQG32X2UnUdfDKYGX782FKGqY8BX6zhLaEivqaypsbfob7UjE",
  "key28": "31qM19VDgidAxbW3DgvQuooryZLtpT2p1wuy525rbxpSWwXygcYhPXJKD7rbKUP8CGCs55i5EcHi7dabUUCFuasX",
  "key29": "5SURXhWifhEY8xJ3sQfEsgEVHKG17p6qndTqYrTJq6KAe5X5XKMEZD2yg1E1UPajWWGkHPjXmD335BoA1i7S1EMT",
  "key30": "U4p1ejrDg1rrgFJ6fD74xRrfJrocJx4VmASUDi2GsasYHMfRB6rZorVEw1k8LkUyDSDhDqgZTCdMRtoH5tmDQq5",
  "key31": "586mUVhj4S62VeaRb4pgSoamuahTfXzxM27VMHNRN3yQD1ug1kCWjT3gsmCkgLaFdJaj1z5DALo6CLourEiNvBRb",
  "key32": "dX8URA9ggJFrV3WmnXcNx28kQnM3jwCeL1qrHCPDQVHXfbVqrgh5H7yXBfxVkS4avsyZPWqbzH4FPrvEnpA34jY",
  "key33": "2DZK7KuNKRWGMRtkEjiy1ns9YnMsNruBwVJP2WCT5BiCTQ9WLKFAnk99SjdsfRG62gx2bCoqHhGgnTHpKigXVEAw",
  "key34": "5FRX5UTa7fW7aTFGe6MVRkgJaVsQGz9uiWsNJcKWBRdMC9MjnscS8B1zhjmbVtditRqMYnHkFM8FVxGHpESgv7yW",
  "key35": "2YwMNkp6bJGDCLj7fkbgvPMWVy5MaKSQggM39PiPmm3zFBZbnWpr1JeM6Sr6hRKGxLvpdejqkXfwHwStX9nCw2mw",
  "key36": "GgzVH6VQzrwm1L3sjuohpiYnA7CcicTgPu324gn42ibqVGthhJXVwLkmmoYvXAg8AeiaMGMXSEEVWK1w3YuhCYG",
  "key37": "4bZVQ2fKtZ4RX53zcVVfhJmwMJt7W4zdt2Vx4nCdMxiDsVYzJHJYSjiT7fdftHRmyc8qTsSfgnCDgf2rCTqKAa15",
  "key38": "26yrENPXUSuFrnwgvDpsoM2dgxQFBHqSsmF1hhFMun3bYw9sRHcFksKXFGrmbbMmGuS6GspwGxo5bCoyvKGBxakz",
  "key39": "51w85aoNbHVpvEUzv8PAFdVRXhomqBR5c9r6UZwRvBnmENbhQD7aZkijzhfNfGdvpiyMmdhivpBb7gPDLnRCdevf",
  "key40": "Sj75uMM8YBQfD976x8htvQWiHz6FGPkPBqHZeL8qS5eWjkA6HCNz8ama8HJsbq5rPQKo78V1vcbBVqJncw9ywZB",
  "key41": "2xS7Km6xwghqdZw1bUfkJt2cErPUwWTYntVMpddqLRAeLCEwrPyqpsc8ZYbpQgVprie1UTMv5HvSdvFa7rkkP3hz",
  "key42": "2YGtKMryTXfMkTfDd6vWsUzJCnmsdGAWJHJsgtZcJkjygiMbNcVsjrUzXE2MLgZ76dgoYYr13ycdYgEGhEok3YoE"
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
