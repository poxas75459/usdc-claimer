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
    "2JXyoFKTWGe2ejzf1KcVbpq91dvx7YZDYVRUvGgLoA7KVafBvoQtCgSTxsCCyQyXmvDMY3Ra6XJLpaXk3g2X7UTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRhb31FLeDMHWgm2mfNFmoRj5NToKvomNNwz5XCMz4UQ1LHodECgXEgkMv9eCke8rbifgXYh5EoDVFoND7ahY5p",
  "key1": "4xDu6MQ7CnR26nXWMNg6c8rgwzAoycD5HqpSp3YKnihBxSPv9WmLPVEFbGXeA3TMCE4qWe53ysVczdfrK6KppBBD",
  "key2": "5CAxGKR8Fp2iyBXMoH3x7oUSqVtmfMikmGS6xPBRDwBNLXcHHWZrWPAdcSeKNU2E4rEWBZgsDXcrk1dQWz49wnDd",
  "key3": "5VStgUTTAkNVREZsStHutkzxUi4Rp99dNsbhKz3Ny9MASQKYNvPTZKEJJoe5HgqFS1S3nyN53Uqya8KdrC9eia7X",
  "key4": "3cZhSmDVj6QyLdhCja5rEsCARHPtEqq1sx3yT9R7ArdQzxgMU63q92GWEAMij1LGghUdAsbTZ6T1ath9ecRXQi3j",
  "key5": "36U2qsmiFjGvibc9d2J7JrHbAgYmVvoBJR3ajGxPz6sDoQ4Anezt1H5Bc8LpEZiHTac6UVrKWBHFBUgdPvCyQWnY",
  "key6": "4d1v6ZEn3Z9wAkcJRRTMzpQB99H1FQ4xfkYaHjXkC9epG6W4R8Wyttyx3dAjjFr1Q7aTe8K1ZK8Y5DEEuqwnU8hg",
  "key7": "5DHPwka5YbgvgdomPyP2CSxdZN6Mi5NdnFn47iEq7g9VbLqjMNpAdSS9hWRA9epXDjSYUysPLV9TWmuwvfcaMtsr",
  "key8": "1buYzmzZVTcUNiBPsbb3WLGucyGgupf84SUwbK9VEBiiHUBBaEQUqwg5k1zEBrp2dBULnv6gsngGsAHNbEHDGBx",
  "key9": "4HW2p8QaN3CSigHL4FX3Jrbkg9mg63UFVVkCjFix6tyvx843FfGTb1dQQWUzsuhqkq5ey5maXNhvBVyQr1tdEMUd",
  "key10": "5dibf3mrWDrvv13qa99eZCPLcCjaNeRCRXDAuSppgazhMG4igaL3P5A2Rb8FaitDojShtPKXZGTa85LZ8wQGdHCz",
  "key11": "2QrEPtus8j2JKPJvx4X6Ftoc1uC5mpnCFXJhjrmPJEMLuBBWmApgUVr2mUgoHesrmHLXdicfDTKB8hJzdDPbVtaG",
  "key12": "4n6ep5DETvaZpMsrVYq2eaLjvw9zjb9fzCAeYfyuCDqMAS1Hx8SmUitcZThoG9PARpe63DtueuEm95L7ZvLzPh2Y",
  "key13": "3HkVEcW6swwS5Vv2XDJTVwJGt3F3WHDs1oq2oaJuJv2ZjYJ7nDnX1ZhryeX7fApLCdeo1cDbViFFEzqNdQbBysuB",
  "key14": "3YZ5HwFrmj25M6Q6yUoQ5ar52j8pWyHYh9FQ7cvSJk3kXqW5R5MJaXP2RZRPm4M59d5Ksmb5JFVwfQiRPNN4knsm",
  "key15": "5pW5damKQ6GMy2agVk14fomFL1abZ2tBnXUyEjrPbzfpRfazS5UroSwrR92SZ7cQSYs3fc18WvEEqEz921P2ApLi",
  "key16": "4pswa8NvRTVfpY5AnhqnaPwofMb4EadNryH2tTXPVpvrTLMZaR2cgpWZHDjozEBq33w5BpbFkpfrCgQw9VGLsZ98",
  "key17": "3bJYQhfPTiPJB4ikoF2LMN8H9Y3G4UmKZEs7NuQBKwPG4qXHa8h9QhNbgJsWKKRZv3LzFVV1u4XmFd5C3VyGP1ut",
  "key18": "3hXqVpJ5cWrAqWCyvgDrYoiHzkwxxGCsMx6aJX6RvM7pNog9WSzjdSAWk1KtN6CZsDx6QnDC5LjtEZKwcqfFzTF5",
  "key19": "5Myd5HUePqP1UiQMRULvjR9kNS7okfsy42sgLr1X93eBpnEs6LVTCDhNWENsCkwWr1NsiNK7ozqZHmAXMf9yhLte",
  "key20": "vGUVbS8PCUpwtkoWm1yJnuDMYcnx16L22ok2uKFjtneqxWLFpYXYNjR1mKdZVXoqXuyhJbFRVVhjxk35rwPBLvU",
  "key21": "4bizYMCED8Yz6TiHqpd8bCnYwckmPrz6yjwEXDByYcRGhacoLXgsUSbhHpmdKLECBevFbKEk8Qqw9th5JCEGwE8J",
  "key22": "6GjJxHt8Sp23gBnj4E3VnWqjE2KkNjgwmWoEJecAPfuwwFsu8BMrdF3hNNJeKvJy49v2SH8XDGXNWg7pfWpDMek",
  "key23": "4oFFj5kBcp2gPxDcP69CLxq1P2eiHuWwZygJYcQBF8DJXK5euTA8Sek3maNt32AtHMW4nmE6pgBdNcrYfFToHWfX",
  "key24": "2n3krn1xutAZUrJP9zJ3MwABK9HjCaKU11Byz2px9WZFfohpfPiFLiP7GyuCXocmeTcMo2ZN53YAzBGY9coGBMvK",
  "key25": "65TjYUNqUK3fiHv2bSNsxpywUcpBMYzoEgohfm6uvYYskpN9PLysJ5anU34ZjLro2nrcUy8YsmWV1wfVM9RRPdbs",
  "key26": "2PtsEUQ1jZmLKECKACU2ZvHoGrUgdQ8rFsDRvDD4HRUMxKsg84kT8v3uHTC5Tb8bYGhQvUA3q931ap1NRpzni4Vd",
  "key27": "5BaG5RUuJsccwwB1tzjqN8dNPrEvTfHnPS8N65yuEHs2v6KtZsXpVUdAoe6uZT7UvG13jayZvgUvbHb69GtQewCq",
  "key28": "5N4JimXWLLL8ApHkDzuYxAvEJpichSBjSpGjiYuefPyWsfYR9HdGJRwLN2yhRrPwUs3ikyz31qJJCLU6HcTnHJci",
  "key29": "3Q74QQK1ppFouUVatAXmL2MPE77cDxPvHV2EDLcCzpGGCYshJvoRh6M7XTbtAovbCcyBzeZCb7pBCo5hw6Ns125p",
  "key30": "3p7FuZnicbJxfFAfThcLWmmyggqbDrAF7yZJLZXdSwEJR6ozSd1eSXWh8cVkVmRyHWo5evzbRgTmrXzZaFi39hvU",
  "key31": "5HQg5vdLHikC6TrpGpjFeyqrk764jFfEgJmC4TKzbKvfR476RZYkSW4GAkjeDctyPtVwcs53H6SM5kivMTPefa9G",
  "key32": "e7fx7uEU519xgyUXYEWuz1RFBdUViqjhsFU2MLE316jxs7m53XPd2C6jDUbxuKew6HA7zZxTrpF28tTUtWzctR5",
  "key33": "5dQVTPSiCYG3KxSUD2VAfwnaMhddLb7NPyiqyNVMUmRCQPyxAM9URYGryJhZzbRxRSLzBUZq9E2fWn31NLBa7A6C",
  "key34": "4DZmSfqhyjAH7LgZzZu2FJLLfjV7g5uorbHEquMtDTEzRXuBNTn1njJzjJDkeYXwWnDj178gsWiqKURfk8QE1qVz",
  "key35": "34JESqr2VjFyNK4cxK5Y24ETsjyt9RPQKjhGKFexBVSHXakSMSvA9Pjw58Xq9NJxXZx14sDfTc1xVa9HzoHe8Xsm",
  "key36": "3i8nx9ECuCNxjyQKZ7jFk2CQ8vZcfKSPwcymCFgr6ZZ2GmWRoXEVCty6VjNRisAeD9WAGHcVUkfh6GywPrDwK2qs",
  "key37": "3zTeJshLF73Ff96s619wWvEFtZSPqoQ6GTECFPH54sHuBiDigiQrqCJiy5nznWFBqUGiNf7ZbPNXaBdw8KRbgzy",
  "key38": "3LyiCZuFghoDb4Ey8xnZRteVSN83A4xHdTe4ZkQZoSu6rMjJbRF5vhWcGWyyL55uhffFUCRtgRP77CvwWtSHqdwc",
  "key39": "5UX3BU7KxDbJS8dnmoSKh9SRUtjVKRE6jAWHimoJDTcGp62BoDmn6uYyvhtr5bdef3uKq764wuXDpgDfUcSUJYXF",
  "key40": "RtdRaTSRhp3VNHVagDTz4KRb1Dv2k45rwArWb4oRWzw6pRHwoCP3T6xjfgamfRxBf2xKHTsa8n8oN4vsKxptgQn",
  "key41": "2bJ5zTTgjiASXgc8fJjYZCUCGaV9eYv1Upvuf15fvkJsrfoHWXh9Bfet2vXxjj1KGeJbNcWTthCHjmwYA7tHArKo",
  "key42": "4ZkKRjSpfx1WWELud7pC72FKa4ctZVEgz9fhVQrKt4q7htD3cHPTYYLd2RRNBAHx5csY3X1Asnf9fAvC8n4Yc85Z",
  "key43": "DH1LvVUsRm1SnXtTEaHgHNvfR3NX1pr6SobTf3mdXmWqpYJPn1RZTpuMePCQPKDPzpUAG1WQwzQ2fZgSHjvT37C",
  "key44": "2Y2zqCKsk6sYMgSX8fWaM2xvcyFkRpKviDTZGULG2zMxzU1QxQKVFGcq1pHJ4As97HE2pM6JMrwYPKMNHoHTetri",
  "key45": "5XijfNgERtZY1kbhcKSY12o8JuixYEWmTTpGKGXSZoWfm7ksiXi1Af4kC6Yh7fveb4DWteA2JSb6HGPdcsFYtRha",
  "key46": "6mXfzxnhWHBhYoGG9jN5sVkdAKKvhmaadofnhzjoJEge6KZPpL9zgNanxJk7LmJ49xh5XDTQ27iAsL9jPburWPY",
  "key47": "5n6qgsDZ7GLAjkXdFFoZUjMPNVvJWTx9acv1YEsckiJD4zWy5JYCFhRUHMh3C7dn3gLvWfnyEwAkJhxQnSefXSV6",
  "key48": "3R8uApaJE1UKYrLnu9YWpmwUoK8Yn9Ho6CVSmgSUi6hQxQjcyn9z5WW4qc3SXmwxy6zmqHM9no1p4UCQ6CWXSdzg"
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
