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
    "5HVujmBAgdDs8LdvgmL3XK43HdxLQjW3g6CpCad59se3p7a3iHpryiGb7znLyEKr6h2PchGHU1P8qeZUxMPFschS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z5k7qTPyGbxJEZzc5sPqX7Gk6hffDPWYkqsJx9DQbfcbKbsfXa8AMDXiL4oHt1xVreVoYr3hXNctG3uj6dVawjA",
  "key1": "KAoyVX3Yj2RknYKM26hBTDcpYt8vmRpLEWLzZKQXopPUn5zvsjudv37j72K9BKgUkPLA2YHdbVPyhNRYiHdApwi",
  "key2": "ZcmhfQqbxoLHDGT5hwqyabXi72xvJW7rZuuBcssLk2WiaWi4TWfkLYSCtyktX3LUKErgxCk3bVvaQTofAhDFMGJ",
  "key3": "2Sh8rGGMc4wr3QWmjq7vciRn4zu45DvFbfY4tsp9NWPXmTiqG72xtbgPGU5cTDkWmzf5CcuMHnQG4mWYt279CGGp",
  "key4": "3LawcJtDY3GBxZhzkVc4inz2NG7wRthdDPdJGVtKoXYjLyYe2wnJDKVQzXjfKnCDusDrxnjugVKq7uSEJRxHFF9U",
  "key5": "qxMG89bsNC9ggN7R8A6Eeup4Ysjp1jZP4YBtTKcYrBjXEDdnoRtmRL78SrovRZVzRGd8wS9rmSp3S2VCgHDtG8L",
  "key6": "4V4TEsfAANzADYAPRLuoJTyxGaFyofKZsWKAiFiTT42vW3s98nLvgbZ4q4yjtj8RkRAs7s8UPd5mc2WYwAssv8xN",
  "key7": "5YGXDMrVbTU3QHRfm6Sf4Xk2o5EmkQQ1FKjmK5nHWP52swYSpR1BX2sdF8bkf549ibHcRZ3fKSifFUxGmPF1HNmF",
  "key8": "3cu58mvJWGncvbK3T9XjaDsUjgmHUjy5bLwZ1w5xYTaVVpFeAP48xSbCTCiULGjig7hhqZJmPBH8oseLbe8LAceu",
  "key9": "2NFZvDnu7TPQWLVJiRrZgEPwjGXWHN938AR8UmJ3nDFbEsztyNiiQ9Zvnitu7VseSSAxT6g5BDVCtRVRdpoFXaVB",
  "key10": "287VUP8CnLMVaG8zAtFoMK1dsZMAf6oWT5NLdfkNfiKnfpU6jiq8UhPERUPyrEcopARcfirUbip1rUAiVn6BFtoZ",
  "key11": "2gBeZdwwuFzZhKGJHJLZRqYSG3D43VMSaHY7y668paC8xXShm1Xuh1eB4SDrAKJc7aUSeCdTRq8mjueSNDna4RNs",
  "key12": "4UP4X3WcUU67CwynMhTq1MTQPqt3dfryTquTNhHhEv2PteUgZ7qsywTwikiHikJcMJiTMJf62KK4fPjNQrzPXDCt",
  "key13": "4xhq5DeuYqgHtkYoohnJ3fHcriLP9DmGiukHJavTXncmsqcRY46iW7TXT5SUp261wtCMUZjWxvoCto8nYp4NRf3z",
  "key14": "4g8wGmHWYkMs1T3cwBWc8QjoQSokJdqpmmvysMD8FFR6GNjU3qyFsGxuhbgLSUSku9zXcQnJYA1SyhwGb5ZPXm6k",
  "key15": "46yFuGAiyizban3R8CpTZxnhfkTwsw7jT9JWB5bdD5dF7d6qTzp9ywKDwUg4YMzLtzRLGGbV9KPRozjjx3nqtCse",
  "key16": "cqKcyY8vk8JRhedZk2ec7tsmvaXdSmYUujTcdpikJqKxuXUTbTBsLzizqEj2xZrWGVdHvWuMK2EHYK2ZfTKn2Tr",
  "key17": "2HD3oBeRVsBVEy26tKv9WfSvpLwta9VhgcxVP6zgygxLj5ZfAAxLzwkV5DAm5mpZZGChkeB8GSiqtrxTQXrwbRDn",
  "key18": "5ZAGP2BFZNbjYq92pz4UFEautZAFY22M1hHidBvDAUsKqp5jkUttMYvahNsSKWUZTE7oYF7994xgNfjf5Z8EPc4Z",
  "key19": "4MercmVtGtmEYdhdYfqzMM9Js1R8pnUbJuKHm9RR7MAsbaBukN2igkkvbq9JyMsgZxmYpvEYExCuscozmbpBEnRd",
  "key20": "2Uqq6XpkqH3xaAtsSYu6K9imtgCh3oqF6jqDKdiAy4yfpTbt4tyy1yECJKqcNEbiY5KJWAfRXa2YtoxTLgkv5BvZ",
  "key21": "4g3Ujb6Z4fVrYrsnPq8urhq8rCVE2X7tsxEaFCd9kpgzsux83Pnm3J478kDf1xVYW9gSYA8gv8DVZhgvLYiTtcHj",
  "key22": "3RX2cNHnKMJae6KUSRn31pshL1sjcAT3Msoe89soiPKT7FDchBTRoojCx4cYYzyW1JNTsqMCUsuE43q9EhkrTxzm",
  "key23": "4pSAQQciKQbriVfLr77s9QQRp9Nex7vXYcz7Gdf5StXsHTjnAZeWHjx4BSbzLFYBZrrNpyeDXpMwLNZ18xJdm6oh",
  "key24": "2qZG9jQ6iUbLhgjFYay8rfr3QHSjcUrxKH6iHU3Q3M9Sr54pagDrFWUQfKzpYoKbBituqNHB6emq4AG7WnVz6BiW",
  "key25": "49gBvgLKDfzy7nRZKjqQmiBWG1FQPfAXCvR8zmnPZapiYuyrEG5UoZj3denPs1WTHpYEjFAc8Cef9f654ig2T9w1",
  "key26": "3jGHaUAxMvx7Het1F7bnCh5wWEdoSrYpdPfBb7Gwz1CXFoG7ThDxM5X54UHEYtSSkJnFbgb2k6er5hFo5hgmzJMv",
  "key27": "4MtjErzbZ5pDXLJdjUSTLMY6VwZaVqSQKNy5KXYikAr4L1QPuSGMD1Dd1s2Xo3e69CAMH8mTxKU79U52s4yZeerB",
  "key28": "dqLkMtrTdnhFn4vSjCzEH5CZYpcQkuQRbdX5Yupydd3zZaXcDFAfjoRYTBs9FnEY5BrFXub5o9W1qUZFcFPVnDa",
  "key29": "3ZuJa1NvEhRTa1WVgqr7rNEt7c7CMCHw1Q5yaNpaDAy2hkeZ8cA2eudHbyohX7Sb7KfpN7ZfRpJP9JqCZ88Zp9Vg",
  "key30": "FiT1Swnfm3VQRcLQyGQzMqas8P7GHkJTBhmJjqh6hTDg2MbcHCyAJ4PK3U6KQywsiA9MD1rBwJ7LcYjxm3fdRv7",
  "key31": "5U8vUTwhKStq141fMrrbWho7vPq7MgqJivgyjuQGeU9FxYDq3RD2xVkAXyaLkhaBXmDYasdrm8ZrEg6evnL1soF1",
  "key32": "45XEFAwSvZLT4JHzb37JQKtqBc23x26ACfQxk9ziQx9yrLNHThU5UT1Vo4NBDSr5afjgE6mXBveu7Gh2XmqsgJ3g",
  "key33": "3F1Lenx4fSzy7hzMC4VLTyrm8CQHYwmpSa6DTi2ApHgEUrFTxyv8KRnjaWV66yrmNPPCGNNrpdNTcq9zzKmcDC7i",
  "key34": "24M6HgBCdk2VrJLjazs8wfWLbiP8GAGhPUZvcar8dY1fi5xoDU2vd4J3De3wnFEqgUVB2Mk9y6NgY2ssCp6hQESY",
  "key35": "2wrgq78dT15TKmDgPVLv9aXRNSCZbTa7eMgn585ExQjFeWxTdSQsJ8V9nrduupAsDdMrawV2xw7GefwwJkhRyGVU",
  "key36": "2fFJun7dpw6RGgnix5MASzswXZjQ8xzjTGUuutbgM1wSFpwRmE4iLUhdzHt7xuDv6aGW6AtDTuFmAezNVdEfLEtb",
  "key37": "2zF8e4FmF3VpRQJE64SMJ6ZtGFud37B3sTFMSpy4WbSrWRmf3tpY7SycF9YLUC68Vpw84pfdEZa4UJjckdWdbx8w",
  "key38": "5JTfBEG7dxLj3Ppqh4k1KqHiB6bf2UMqhAWLfK1ESjJzUibXhT4QsE755WQZwJukUSbQpFDNn8Zv3c4nRJCsuvH1",
  "key39": "228XQhQroxHcwag9DQCGxDd2tnuVaHDcCCCykfxk6D3fioMhE9S2F9Z6KNuc8XewtakQdYGnE6Qtp4pEm1jBdGwk",
  "key40": "CGEsqy5K7KDKnjjJJkE5NkUhYNBQRgaRyk1FzaY8jm84nRMmLjJGyRJhFyGqZAuxbmB7aZM52UiaZ1JvHHyLJBv",
  "key41": "NprUYd1VZGKqmqZB2jLCnoSJo7ba3xzaj9oMQ22ge8qzSJeWKPHuAFuhptKZuZjUWc9LeSTZoYmtnEuFGhghtgV",
  "key42": "27FCEG9Fa3RsoktrUCtUusfNChNRWpmd8pHA2n2sZrY3P4q8oKnm3xY2SmKs5i3HEQp2WcKLeEjFxDCZXLWjHrtB",
  "key43": "2wg93xA9cCGatr3goSV5yWYm53dmBwgBdnU8A85Kq38uKXAswujEw42Mx1hk86W4HgaBxrfXqr4yx546kcc9TUvJ",
  "key44": "LLevamb9RbR25qdHHYALNDnn5BBEmNDDQDnRxntFcCSc7J3DbfhmtDeX4FigYUczz28oN2jsFFHeCk8j6wS4b1X"
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
