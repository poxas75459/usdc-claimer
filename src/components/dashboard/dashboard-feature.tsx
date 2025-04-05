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
    "2atCBRzyS72ekNmb9AeZevNSj1uRUv8peX5JxzWrZymtsnP2bFhFCtH2SQvN43a8fx7GfzdCWXMiqGfUTZZU7uTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kRpkFoRWiwCTcf5XgDuyo27C8KKx7oqrwzafjcNGVw8JesgTD3WZmUdnCm9C8eDT1s3RmQ5KGS3wqwCFU81utZn",
  "key1": "HzXuJwpw5HNxA9JUpDqgdaqgxaGhpbHosJLXJd41hnLSu9qUE2TYTnaGXimCEiuMdSS2nCs9XqVHmc97rWYxC2i",
  "key2": "38FScd7NjEjXqrKFdehuiDB3HsQ61f8GdkG6LsBShepeBpnh7VeoaaQmQGKvr33gDcd3kAsjGNVM971HesfMuQ76",
  "key3": "5GApkYMz7ZnrKpdJmzZzJ8nZV7JZ3gfDF9h4r5WNJnt8SaRH8cfZRvSK7cPBNJwsuAgdAGQhA8xcunEgfo5R8zA8",
  "key4": "3dkKDzPRdk1aNkzgQQkp6TbeSzrRQFfkcGcMtEvmToRAFHHSefV5wZgvdY1fCJMhb4vEpAQXxSg5LT7u6xKXTADv",
  "key5": "2xm3DbL5Y55WzedqQBCupEPdqxx1YXJdUyjGmjvWoNsosiGAitYJJeNkMisaHA4pvo68WaVZX8n1hERDteezHU1P",
  "key6": "3m6LomcCAE6yFJc9DfX2YtXBM6G22fi8sNuxN8Yfcv9yNYy75WGy4UGYfDx2MNFKQYu15Q8QTbUSG8H5aoz2bwy3",
  "key7": "4Rs1Cz74dVsSdHPJAbLgLNDaZTZXVw3owFXDs781cgpuXrB5agSRjGAoiA4aATEgPv2pkY4ppgSBHyzGwZUKXoip",
  "key8": "xXhM336kv4echSD7nMR5hitvQR3k9G5WVnpCi8nzB6dpX1HH42EXgT2qT2tR5M9CC416e4K3iHD2Y7Kqk812uHC",
  "key9": "6bdNmf7nd74jiya2iZ8pmoTCKtrPktENKYjrmbdb3q7qripxWX2pFriKwMg7GyWr7kBiuwvac4xfGikDvMpaLkn",
  "key10": "4erAjFcCmyKSKKNh3GVrAWTQnryuxvg16BCcQQHnQznisBd5mrdxaVH4BFwkAeEJAtn3GuXudqcwJsC8vgMiTgu9",
  "key11": "4WgQuAh8Ng8asp4ueYd9a9vP36GNfpkZs8Y4uoZvJX9mVMRHKL2t6A1cDVBBuaNZY6WiLR52UrbvwMryTcE61T7k",
  "key12": "3Z1M253DqZop8mzRM8sSBii9A13f8njavjshEUZh7kXHv6dMNXaFwczUT71X986Csh4XmejP4UJg4Q114dor11B4",
  "key13": "2ckkqdaVknMzEFvNkRkjT2hNgu4DWdWU5uw4CTcCDHu2HDZnXacNQxFtHGaGQ6ci7LYuhDRc8CEyFrNswpBa6fEY",
  "key14": "6ccpiq3piPThXcxfGA9nZfnfQEbiqB5ZmDhWjXfiqyzw1ZBnor8YXQAc75gXrFPi1acZVwVyZ8hRRVFkx4LB1nA",
  "key15": "v8ayQUq1Vdn5GBAbR3RDBvGGq5dfqHzGDLTnrhoC6HqtgRXGqoa4rU2csEoSkcBdDxxbm8s1QNi9EXQUxEPHzHh",
  "key16": "5Er74MTLtoFq1eW8SZef7d9xG4vGhh8uw9xXUm3LbMtQKPKZjmZps3QTCmznS56TR4N8JUNSjMkbw3XiuFRwvxtH",
  "key17": "21pnVyXGTB9S83zTyVuyWEVEeuW5tmRjQ7CCteuBWTsKhGxZ9GiMYQQmwEE9bCqjRYfQ5YUucoojsoStGbNHyAcQ",
  "key18": "4kCGgRVE84qdm2xxqevV87BCkX7fkJ5pHScXA4iFzXa8t6tbME21AE5D94Hn2yxXwhGTTYPJQw5YXDxdPtByPpEy",
  "key19": "TAoRCAqfS7oP3M3no8NQQtzmJCxegYuZdLdBxU81ww9okKvbC81WtRWKeJRZBJukviezp9Ykczjd1mYKwQovpV6",
  "key20": "3dNPoiBkuwVGWMMh2ktnqaV3rKeC25xjhQCTCXeinchcYh4Y9iAwWwznJTRnDNxNFh98B36VD1S3ftBW4DEdq2cu",
  "key21": "wx2tjfH8dZTisN86LAhAum9Q91mHXMzQfoX4d7ydmhPuaMKWYHL1hsxyEQusZXBFTxea19tW83zX5tpuE5CbLLB",
  "key22": "5Zj8XYuG9wn5EEPctTwNYTfHaozUXZBxpSxLw9h4MESXPjXiV6DBPtpREGpLwT2jsvQjRiHcjyZXhJ5C4nzdaLvw",
  "key23": "3Nd5SbP67ZrS6vHSNJt5JUxpx6rU1oft777zh5v1eV1bxRCh1jkuNVPn97qJjUV1kKjrUBeobaKbKbya8J9bhsop",
  "key24": "2mvEX2Z1Vb2wwT1kLBjws47qPDA7A4q57ofgKAFMUnZfyQt3u3Qy85TqN4MLYvgBZFpWSdxMwQqPRs4kWa4BP2Vk",
  "key25": "616a1PorrsWDdjQGfxWCmkFF1PWjxiH6yBqFVXwM3MAbQHd1c7saRUTdpMn1BqfZNGabyZf5GMTHykCtHJ88cR39",
  "key26": "4E7P1RXLGADvVdwSMSMwUSxpAEkB8BuTHaV1N4sLhUStPqmykBBGEAEeqW45cGoSqRMRU2kPyXhCYFMmvNxJ23LC",
  "key27": "4BqpNLrapniwj7dLJjMPfmRuJ8AWc7YzPb6pAMLHXRa9xQ4LB4jhZEQJJJMZuGB9kufqpXoVUR7J5LML8dqxm8cR",
  "key28": "3qnJv7EVjQZKSqDGra1dTMbStVJuNPg4T3GsCWghkEKb4Sa38HpZDLhygEQftgu6x1EXbmso6ZLcMRhVVbdRXoJS",
  "key29": "4AqM1UisbV1azY9haa1mjVvG3VCBurgFE1LPyLvXB5ypj8S1EpKgMNp9DUWa3CYCzrxpA49DZdNccFj1zkDsBig6",
  "key30": "3ezf7ReZt9CbSk7cYxKJux45scCTt3g1M6N9Cggwe4am5yjc3wYCJptcqJ6VsPCfFnE6p126EFtLaNRGkSBWu5ut",
  "key31": "4VXvu8G57CXBLbtMP8htMMmg7BFFq5XV7a6ns52WsiVpZ1a2Tg2vUtW3suFpVVXvZ1TjreRsBKF49kPAPQdnoVUf",
  "key32": "3qmne5bv17Xbgdp5k6T3mNxYNXasgjnXeEwN9b6YM8ZetyD3rCPCKmEC62Q4ChFcpfJeWBRBLHyWTNKE8TB8iUWz",
  "key33": "yYMf3XmLDxZRtoSRDx78zv73dCUQxU93QeGhDveX7e8abdxSZt5JemngMoMekC6nMJUk1kqu8znUv3AtgaWZA4p",
  "key34": "4S4DdCA7jYozHKYMeucKLyYEV8fNkcubvN3dSurpPquK21zedY5eF92DjTRJAqZf4PjadYBA7oLGh4192nVKjrxa",
  "key35": "ymFEsmCdjjpNHUxsZQtuwtEchwMjFHet6kr1bTPAhDUGhk3LEFnPQGpddf1meNpot3BhWBYk5NXEG2i3GDTLESg",
  "key36": "5j52sRE5khxxDfeUWXVbHkwZpgVifodsVGRh2tBaX22tHcWVNNQWpyZvh9YKtVTrEfYaQeJj2kpz4JaN9Mca5uqe",
  "key37": "2KngT4cjgdahxFJcDc7e5KPFqhrVQgAdy6kvt8byoskk1oMMAM9vh58Ei6DVBpfjkr2eF56JDowryWvcn4gMsuTD",
  "key38": "5ywXAH5Snxacq7G6kppwJujeDkTnNHFEWeh3akCQsNHZ3TSDjfWtr6eANi5w2aRdZY5ad7v9R8NanH3Pe3Tdc5qH",
  "key39": "3gH3ufc29kM8PCMU4SncJAh92QR7Dfs9oEgSnR2xWCK5xKmEN6hmjoseq8URBfPTfNNrfPek6v8Y3qnPk5HNG75G",
  "key40": "5DiiWKU8ET7cf3qtfDLMemMMTuEk3sWgi7GmFCLfDMNrxUVdoNem5ojztvNjSNgdkEHe1LR5Q5bYdea9aM2fEKF",
  "key41": "33cK68ZCS4AFFuyZzmNby6Z1DCaZZqSevzwT1k8i1GCjys5iM6NpEPfiJFSCg5d5VAcjuAWKjjvFZyoDycF5kgjs",
  "key42": "5XoXADLTKwcdtwtzaUYsU7LaedLFrWPEkuxW8Qr3T5EbF2rRjxzV7uJGbwUNDJcDqkhuzefMxcHjwmHroEGJ1XFT",
  "key43": "t9gaSZfB9NzrWuw9KrPmghbXEurKyBUeXjntXyLyZo5gsBE73QwTPsgjwAX75RSKVcDUQQ7mAynigtx9ve1NDrR",
  "key44": "5sPKkWLJJTp9vPyx7m6DzQx6hWGcpoVUphZwat6rPfZhdSpx275mtjYrygZwcJm17GHP9Ru7v1iRZbaPqwTsxgXn",
  "key45": "5NSfQUUXqG7YsaSvGRwEG2cNngYko8nBpmyipdTLP1X5s1ZR9WsYqRvXCow85xPiPJCZqYNMs6fPR6U8zvFuy61c",
  "key46": "49xQo2nDwpjFmKEGuScc2vs77nCS7v4DyHd5YBWbGYd1pUrRhTVkSKx3tuwfoMJaHqHBatE2nDYgLmXCepBwUSD8"
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
