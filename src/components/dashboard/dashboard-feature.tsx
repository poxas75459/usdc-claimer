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
    "4ZEEaMHCKoVXftFADCnCT6TwU1mQqXz8bcjDMJPimYptKRpcDJHsac1QhxdwCG95gzLM4WyrutebHVYxi5KWJs1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGecgQZMDsn38FrVUsLykYQCXtQpkbvt8SJkRSZudKAiPbvjwB8ZRe9YyVCKs6pXHhMJEpesHdQc2Ly6ZwR5bik",
  "key1": "mEzAG78ckRcfBcALtEyte9TegrNf3QUyJomD6aDsYewpDjfc4CyRbdYncBEK1XiNzQBPqxDhwR9MSc8Dg4SDzau",
  "key2": "4xQix4e7m5kVEDLiAhJk4UXDqBU7qxHWvqeHVXLVFRjmAntMLKyb8LB8TVpa2tEH29eP2tg6XapGFu3wniVvbU5f",
  "key3": "4bMkevMMpu31UQtkNXUJhQCZsFZnng9VjNJETztiHzkLoFoN94q4xkKvRzNqQ4sUc2bnrXrRnJjDUPnVSq7uzFtj",
  "key4": "3em5TchFk7ncUdUZbrEgaBDrj8HJkTPWBhLiNWZSbFqydy48gQypAXDdmpftuPBhQd17Rhx8YAX4h2tK7mQrJFPA",
  "key5": "3nXF64BZvYLYgzDyu5ZiLM1NdjUzazpj217KV2W8VLZ1BKcL5B7ZJGxdfiryoos5ytwkRYwgzihEbWRmoUCQ4P9e",
  "key6": "4ZvsxbBmXAsFokWcoGh74AZh8xbaWoTgdXbMAeJy4JMp3DAraRQ6GKoQLs9vanmKuizWPLW8qja9Tb1PyxMwDymW",
  "key7": "5UVRuNUWe9NTSrZRuzQjGBCqozigTuX7Kfp88G8Efrr7FFc3kNAFuaumee2mpF26BYZZRLAzeFf5gVxUVv2ckZ1k",
  "key8": "4RHrrMGQyz23yaKwk7t3gR6UMVFT8AnhLyZ6ep4ayMYPEFmso7rKiTbRQF6yP5c6pDVBGxW6yZGT1LnFwseRdmK3",
  "key9": "2AfvDpBTh5eLFpWf5ZGeCa1orxjQspc8wj4t5MPqDo8JBsgEN9nXb3ZuRz7pAAgfCeJrfdVxW16RWwrDsLJkguA6",
  "key10": "38NAEDwur2jFFHFFSevuNn4k4b5vHbZ4UF1MiAue8AjuK1fkrEFAmx4Zy3NmusM4zNw7kL2RwY8cMW2jEwoMYgGK",
  "key11": "3AFTeZEhyKuZ2BZNpXpoHPRNnM7pzY4SXb3R7hhc5kzcw2HHwSx7tiUYKBv5CD8dbcUW9c3YJJ7TpTwQFoVjkVvB",
  "key12": "3HZQZk39P8hnG2es3kA5JBuv9Zvh8iH9n4WxdsgoJsMND9YoSSMCjxasH5Q8ogDYu6ib2MhLKvwo25NEDtWGDXUJ",
  "key13": "46MNfzwDAQ6Ux2J79Prwur8Cebdc6xMcxysEhdDV7CNqf5QezMHvAwf6kKiw32rw8H5n36LHVccmVUYcvBfbFQom",
  "key14": "3DGQox1WAhcujqPxYn4dTUrfD5CQ4WkBb9yWMGCK4vnnawMkWCYqV2nA3FWLUCsuvwkwJU5eXLiRpLVow7N4Z3XT",
  "key15": "2fTk5SVe6MYZqjizwUqaDuDHNQo91PVDnX9JmCKPNwvSropykAtsdxxsWfwy4okqZJ5MPdse1QhFLhf5aTGqQ8o7",
  "key16": "3MaUN76qAvTNjJk3ac78k9hP9u3WptV4e3JeHx1uXKE88YXph5ukkBNB8JAHp8bVk1iRXmoyhnw2NxnmQWstnq53",
  "key17": "3oxytwcHDnbnmYscdx2k9Udkxu4d1cBHewUzuF3itsVExX52J21ku5xdY2g6vNyZ5uHBmfSXjzK63ifLF6Tzd1Pa",
  "key18": "4fjXyZeVTZQ6oqyUtyk1q6U25id7ND5BQHRSVKA157DPL2gHRMNrambyqtM9zMHhwf2GkoLhGVT2cZ4gdmi7ogeY",
  "key19": "4MekF9s9qucRMvz88jooAbY5oYZxpzMRQrRnrCnm5Tsup8Y1JYYE2kjcXERKSEpg3fH2R5ztuaprydnYg2YmPFze",
  "key20": "2iHSbBxwPXYXAbvd2y9No8QWWGHcy6e8VYDCct11E4gtvP8dxPBpPGFpQagSaaehYCts3FMaNcWC93vH3qihq4yD",
  "key21": "2EBAsbhYiaZLxzoJ58ZHUcKKFJy1nmrtcyJg5dBpvD5DBvPQmcoxpdmdV2gEXvRRZYnTssAFujCzwMzcpbpiZkZk",
  "key22": "en7P5N2fhyvhFJDtAdVBU1Nte7t8V8mhE6ewVgXtCyVwTZBxTYvh8g2TLHC6oNz1fqRvx66SayLaeHZTy9kziSY",
  "key23": "25ynGqhcZaCrm4CxjW7T1xbEsyjew5XZVJ7hKCizgBgYJ1au6dBJDn2aDDaoYoRDHMfAVZ89853UHfv8pwJHxhte",
  "key24": "5NJ5GXaXB3c7nenaqh8TR8xUBbSYcKZwejMPE7TYd4DZLUWTMQNkt3sPrxP8Uaxy3WM2inkEbcqEtBz9U3NJsA45",
  "key25": "4198BxULVskGoeNEXk5UMsQMADhw2Qsffhp7W8maxAGd9fEwEwwDjgDajK4zAbHnqFnvjovkM8C8fhtkQYqdDdXQ",
  "key26": "yNoVPxnWm5dv6apCXxNRs6kSgtU1kjReQG96AuPftnYc8id64RpUtmHDZ9tsvEy1Mu7yiKt4YRHeN48ak26hrSM",
  "key27": "2AsMPTgu4NBFc7o2msSUC1JsnsiqHPUT232YDoGr4XuiTceikZwo8jaFAdMbQMoQAuy23fZELkY6MEk6iBcmAp4v",
  "key28": "4v6Cktk89DHGTp9TbxhFctMYTEFruQFwUpVdsdg4xQAvuFhSeTM13c38WCR1ocoufgpsh3kkduGmzPTiiQhRvw3H",
  "key29": "43vZxvGqH862oLzkXvsXPPsCgyMUvu1gtEtkuGaxjb9Y6Zj4UK3txPE8NYx2ZcBm4YnmHCwPYttLoXZdoexFFfsr",
  "key30": "KAv6jpaJ59ggJhY5jGVBq2r1f62e4NFsWVJL7rcg9Snqt8ixPn43nP2QqhHcfvcbWHKGvhQDLHkcPN8nSi1iMAs",
  "key31": "ZfCBNEthRtWZ62SKLYd8XF8X38NyVVLzH3xrxhkzWzs6za4Nqc6Cy4qBeDLxfBvkE7rduqAz1JY1Bn1BiAaHxyt",
  "key32": "2r4WjN7xxt2cvXu79QuMDe4EkPKTcBDtdgR57tR5VBpAE7heymEaimyddSQmzw8ZLBxvzKGi8NXxLjspHUTm4uAz",
  "key33": "4zm6XnsDnk4uQ32CD5t3rWsFsJhpWLTZq2Jm2oD7Lm6KJuFf8FknvffaoQKzFss2GD6nxvYrmbfbq9kzjJYZUFwB",
  "key34": "nDAbA3dP3dHC112n3WerKZHA5y7DGhSaWWwFJAs4oDZWdPGMhDPZdiT65CUqWUj6o4zYS8RRXPUruFZZLbyq3h9",
  "key35": "63jGNxjbToGNmd6s9MXxFtAcugRDnwLNxydYnPCvstepz4bg9Jg3raAKzaYFQ7zwVYNZkbWM8Nq9raWdjNM8LLo6",
  "key36": "5Ri7Nu69EKqYjDY1PxNWv71xaS4NCSyaot3L56kJvHLHzGVVv5xP89eAfPd5f5HwMzrT2euzuByvEi9rV46Gxyoj",
  "key37": "4UaZgoc2CWG426pd9Pvd9g2TfGH7PHAFNxG1C3Neu8iJnKtmDHGpgd9oUCdnAPh4pEq8fVzV2ycmhvV4PzpUSrkM",
  "key38": "bgJ8uwYihud33QPn8rWKxCNNA3apAk76xe1QkYgBw3mGWAMXoyqHN7y7uvuFcZeExLZfPvxtf4o7VWeanBuN13T",
  "key39": "JiZffKhzurcx6mqUB38F2ERbD5xq3J5WFFY78oQm4XcXrNJXtp1nrJ35v9VK63i2tAhoCDagFauwA54D8vUGMXC",
  "key40": "f7PJd1ZTr3QWoxvcT2SdSGB1RkrpQJ32VyJ6vKESW3NHsxY8zRR7PzVLrDFGTWVArriso7ntES9uQvUWYxvpzfh",
  "key41": "4NpW5K9n6QU4bV1pDDMBKyr2wX2zk6D2d7Q3LCg6ErSTXi3Bm5mNJuv8Xp9V7Z9y8QCrrehP9s9o9dqVpVzjQP4Z",
  "key42": "hzRngxan8nqxH4yQBA1TXQzYgZ88bMnRbCPy2r1shU3VX9HL3bpoRPuPsEsaLzVybx1a8ifJsiDuSxPTKz8LvGT",
  "key43": "29bfdLpeLkmzrgSVedfvvMxWb1HzoR6Parxb2DWj19QZjSiGJoHrXStSEpXwyCRY9vncQYNw9tfJr8LqpDj5iu9u",
  "key44": "2vWGcaVmcfUTRhWKkUtZ4ZqY2ygVUUQgphg7Qvk3VhgGeU1ns5fNjeXFkjcoj38PS3mGKDY84EVAKfVcwVW5E25S",
  "key45": "38KsYvwq411sJKxwVrBwT1TQfMQqQU2xKMywbYLGM1wLJawnwsBcACMhCiEEq9Ko2QMwAwic3VjErwA56wZmwCEF",
  "key46": "37FkDAE763bGhfBNsXccPwNNY1h16Li5ULgWEhm5N748Cmuym6T3HZ7TBKA4TCfSeJi9RGHTgmnXqQUNGUfpfRDs",
  "key47": "3aKujsLxr1TGuiesi9omD9EMbse7u1zwqVfmhSs7xntXg3KYtCukbB7FJikeCKSYqc96PuaYVnhTTDSuUrH3cCzS",
  "key48": "WpnZN1cXr43oi9yK4ndEFUSpiXZ5D7TTDpsuiirdWZwTrYZaNv4GEPTR483pW2FUFoS88WXeSzyjRWnt66BxFL6",
  "key49": "3r54x46dvurWZsXpmD4h8xiGoWsU3bs5SCh61rodpGEYe9YCFUMzRcDtbBogXS11w5DAzZUhoHuRHJe4PmnMrdKj"
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
