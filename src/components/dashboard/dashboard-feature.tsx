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
    "fky6h9xGxR4PyVvdGU32RP24xVqjBrtSEpCdbnRmtfADngP4BtjXExMLhNHxitXuEMmaQxvXt9ngijkMK1FNvzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xs1SvJjirT6sPZMBtRByEgkNBU1UUTLNhxXt2nLAmyXNNbQmgFRzBpkuTVh6XYmXYjF1mVByqYeiieNutW3cn9S",
  "key1": "2CqVz2ZjWMcfj24FaqzLWJN7w8TXbe5PLoeX7HWkv1ZwFnrFNVYFzsEgzudn6QUYhZBfwvSwxsVdCsPdhgGYeXZ1",
  "key2": "2dZsdqKuP216aNAStCBG4ev5irs244777wvdLaNMFpvgTRRForcg3rZL3afWosu4kHtxYXpx3rrTV2S6SSyUb9zB",
  "key3": "qRek2jjD4yQp3FjWuVGMadievsGQtJcjGBhuBADXCBSdK43UGrEPxekWV6ccqETp5AWbz6Xb6tQgqMK6Vhok8pa",
  "key4": "4bU7JTf7nLHL46bWZ7Fmuk7eCg7bJdFGeZjG4SJvqX1j3VkEt4qcSddjV9HodofCdcLY3uwPpaBoTqSGGnAYRqGT",
  "key5": "2ot5dWPTVGvhUCxV6HYYhSGNEFniwWwEphwgA2gxHNgimAg4JeF4qzkRU9jhx7YZtLw4cEZXcxG5wjfsxaJCjjCD",
  "key6": "565Eatx8cmtDMjD5W8jQjAKuWuvXYErjVa7XkKwEdqDgLBX74Zb44Aa1UtAp4uhbk7tqhym6WK8zaKGHhje7TZe4",
  "key7": "561akYiStjkWeJTo657iDvSdi4HuTku6hiyHsTnwisbu1q7PpvdZY73caej2HWD6MHba65FiSPBugQqSxcWZPvKL",
  "key8": "3nidgaBmJV3NNwV5smgSmGQM5V3ZTFv4U7rzAaEeAduYw9A9QgtnqUWFYKaf56ECEZSr3tizqmsyzfjHefug1HsR",
  "key9": "2mgTmkdub5XCFeD59immd5oB7YNgFeqGEzeaBUKZjHuzb4enYBCMdwMD8csyWYJSan3m5fStZfqGxo5bDZUijckX",
  "key10": "5AQhCfybwE4MiA2VhTp97pcDm81KdvjauKsrfkx9nuAc7qMiv5TmCx6XhnjfygYfg46nBdeSmwRnJ5aJbXZwn96p",
  "key11": "2gafLLGCCpcQ1hjWeoacvfUcE5BKtUGRNSzPn4nbshmfwLUjd1mAzi2TeFPqmfZL6jsZnkw872qkZd6eZQPLTk2M",
  "key12": "2e1kFpBvn498zMWLhLXGTZUpVcp4UxWQYUSrHBJyL9PLdx8ocMwQawebrqDD1nJKbNadMPxny7ya2TFe9GUd5U4C",
  "key13": "V8SABwagG6Ek3r2FpMFoCKdQYA3WCGtfZWviSdnVWiKfszddbD2rXhJPSzaFRgewfzNTEQcddftDZSZ1JJjw6hy",
  "key14": "2v4QkY2b6W8prVHhtHqh7HuGoZ1RNpfL6NCh9cMLqbfByBZP19ThBeRx2dBJbkD7KQ12355e1B6LQMBiYcaTyQG2",
  "key15": "2vfeBzMUKA1gbgDmhKC4gRAaVxgbwvoupZ8JPdQQxKvTgK15h2LMwa73BYac1Tg3Yk532aaNuQ2Pi9ZWGkoaW5Gc",
  "key16": "3RK2cQYaEK3gsS4Rb24JK1XKQDeGQ8VJWUnpCVgd41jMmPKmN4Wo41V7zWphzT6eaqPA2UQ2LgwWPm3wixbw1iwc",
  "key17": "3TAxRcQTi1YWYGx5tUAv8BTVasnJPU21B9UGrSz9QyeEvy8Za78cha987bBKY8TuqrFF9CZs7hZeLu4n39S59fhH",
  "key18": "5oLZnFWRZLNB4ChHXapBFD1R3y8bP75bjTzto8qZV3ye3GG8ySguNfgNN8d1B3b5LafSW68giPiVpo792g2XfC2y",
  "key19": "3khfBYzj6ZbiqDmbZgAzRwWtRCyQK5szRETf5PNBfTvcUsbPfmgVGK5buuELsA9yJojxCQy1Ug7avaH3fKUxEmeP",
  "key20": "oeahkTEr8eX7qqmp8MTGpmymwRsMwrfNAWxDKZkQL8nj8ayTGcFSJ2kmabvDKLFDhNMY8jgGhcAwcMPw77qT627",
  "key21": "5ta9J3q2GjEnqDfrS6n2z5Whjiki2gmKyvNymFu3L1Ms3qm3wqRaBU3krSocfKuLiH74vK94w9qR2u6wG7QCMCrP",
  "key22": "bK6PDLUorR9wRaU3sn15zFLW9w31gkQWKYZhpVyEnbBLa47My4rF2c5j9AHMgDSwsD3b7AnPJ1iAhY3WtKa2H55",
  "key23": "3J6b8xrvPobzHeNL2WxYM2mQsPvkDPLe1YnyDER7vjMCbiUZsNQkvhQ87m4ommiBgDk23P51iqARUHJrskvGkqN8",
  "key24": "2WNEk81cRSSTUNNUvKqhM1EDY5FokhJnPv8DuLRWtPG5fiTfWVj6RbCFnP2k6bg8o6YhAN8tjjhSB2xyTTk53Lin",
  "key25": "3pHhhjv9t2ynhGJKVEe1ZUPo5kh6fqoyZTkX58B2YCqj66bQ5xqj1iJFmPTyS37kbiXiBaCVJ66RjxKiLNpp8UbK",
  "key26": "2tJ6N2q8xEWzDZhdzSnm5xU4amEuTbd8VqCPfo8dUAxQ3ivj3Gyt2ZxmPSkXCvvBoYRX6Q2Vipw6icw8MGjRe4pB",
  "key27": "55sauqqBFTKsZxsRPNyG5QbdcoP6XQ28rrx93L21zm3UUvmWt3jVFhyZSuvDed29FAsiVwfC59hkBnNr8Qudzn8A",
  "key28": "5zTFWcKUmGapEoU14nGGuTdFGj7NeH6mjCXxRUyDSWWaDCCxtHLbftzk2PU31vJmmD3M9A7JF345a8UJQWfjzFv7",
  "key29": "5Ahrhf3Xq8t8f9fbki5hk7DkkD2RnVTw8DHGqZ2bL6Zw2TUnQwrCG1LD66L5C5pjTpcmzyEFxCucYoUdWNzYAfPk",
  "key30": "5hechahx4zgys7J1cYR2rNt8KwCTE7ChVxo2bNGubS6tPGZJGdQjsKwhBKzLFZr5b8f8mF1UWzrUGWqZ3cTUnD8K",
  "key31": "3Ze1tDfEdtKvYkMxCgZfsNwnCx1VFMTcZWWppN7LJsKqDV7s6N4VoRm9C3R41o6fu1qDEXMqDcDw7Modr9cr3gSv",
  "key32": "5kpsJWckRDReg959LL26rEYpWwTw7yzftmwNAKHCdwmzkXyNviqjpiqY6a4FokLTtZdQ1C1w5cYYxAq7VTgZzA5g",
  "key33": "3KtWJ8Qny4yfG7ehgZeAPLLP439hwzqivptTdN66SgFWmoBMazsygXKeQfb29ziuupfu8Aenws3K28ybrJTtoyMB",
  "key34": "4G1evZkMbf2rGmSxVrkpnMaKDLBqv33HecDTg8XgdYppmMuc36sTKdUPavJCN5MNJRSBAbttuoWU6zcvq5VkZzK2",
  "key35": "455kC8NTCuzfED4aNUTfv6zrbwaaBA15taPG9NGtUinYDdJU7ocdTG6naYCddzkD1LRad7hGSkCKxwmRzUyUEQHh",
  "key36": "2UAsPq1t6FjQH8dsYTDz2SbmGQ3dGFNAJDcQcteTMbaiwKyX67PAqSn2oVxzipqHtDVGBWpe1WLnji1QPae4TwtS",
  "key37": "47hP3vM5pTT9SXBqYK6rHmCYGz6qWVkR5H9ovmBs9sEXeAmsYL4TaFBiJkqmVi43bn9ZRQaX1WGV6vcCTm5qqcRG",
  "key38": "JJAitV4Cg7vYpcfhESyKqEaUqAnZ9hWks9aadSe7cQeGuJnJw6sAr2jNASRZkCHSWHbXkWDT6yoxUZjemt5et3N",
  "key39": "24b3xeT5ea3WtJva8EQQN9jaSWUQtgTTyz45gc8JGpRDL8EiF4KYyBLCWHXAepTFfP8fTCvJdqdW53ZwsDRqKsQT",
  "key40": "2v7DGJuZd3h3ApVGxACrtM9tYhTa8bpCyjDbRYNdCL8qXS5QVETwt7QM3gCXApU71FkUme1ruiDXdeX1utPS623y",
  "key41": "5ndb6F82vXWHKw6RTy7Fb4tRfg2HzsZHpbknR5jEbhXwMKXMeiSsUEHsa1rqwYYJwKcPySfVeFpTLkfbFn51BK4t",
  "key42": "4wGyRaRcwqbTDYFsa93yStmZfJJgDeP18ZMBUAiXPhR3pFpUoqTL2wDc6S6c5EKiUFXKBeL5GVzJCVHJfr6igYXd",
  "key43": "5fXzYf9C8PBg1jPjSJpmrpsWmkRJECZ83NbVSQFo7w91JJCucjSQz88cXud4ZCC26pYwdE9DUU5GwvGeJicVvqU9",
  "key44": "3qR6c57fVnGhVZkhdckYcEFTvdsTKeeWVoYFAFxUPtZjLyJKAYkess8ymUPGRuGU1gxH48E5tRD6Ztzb9ZJrjQGe",
  "key45": "4L5tgFa1HKhcc3HUQe2yny9nJusnd9UfVFWz4QfxaATWPFqN7CazEwqC7hmZUr9VcQGZhu45fV47iecWVtwadEGb",
  "key46": "2WKRyzZjrSZEK65PRtQAekk3UMVjx69Cx5t2jfQ8wcADLdzHosgPVm2Hu1VWiTmUTAU6qQxNwCJmUVzn5HgwD1NM",
  "key47": "51HRq2SEM9XGt7XeoV3UtSZKzs5QMv1bnHTSZHcrvJZLC8kQHdeMyrPojjx1uf6JnL8KJL25W6akTy78rHk9kkKd"
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
