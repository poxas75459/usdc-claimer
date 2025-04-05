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
    "22ewNcvYCo8LHZBjzc83fNriDgaB2MQoFbboXk53HgzepTeEgmDAV8PEh5gnv1tLVf9deq3g8U6gwTgMwtUwX6oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mP34ejNcM9D5VECD4zCNZ3MVGSkKEYzMpmKTAqCApAYppt2bFPY2R3QTdPiJyrMfRXAsKUYsgqFPAeuu8DnvcW7",
  "key1": "Dpscp7ucMNfbbZa5sAt6fpkEBzH2pv5WGVn5LgsBB5BcoL56J4XUENaTNw85nybKgzB4o8ZUyMGawgTaiLTmdY9",
  "key2": "m4axLUaMTcgn7dEznKqyLXr3Z9HLoLFVn67UmSYf22V4kZHXVJbPxNL25jjN7nqzMq3bBEVq3cZkuNy7owsog5s",
  "key3": "39AfsJeMJmmpHoGjW36W94NCcnZk1PJ5HmVi72Y8FhYc6VChersYn3VFwwsCDS9gQxfFJsgoCdxermEaNkpAtNji",
  "key4": "3AGVFuJBwinNtHxdmBh3JpgEBSq3r3gbTxd8Rj6s9oYDK4jzMDtRGZxcuB5QmXKcvo9QzjrJRsXDiALVCpDZ1ccM",
  "key5": "2DXWefin3jx8vQtRqrE1dq9jDyvQ5tT3d85c6FdGmJkg6CMYLmsALkZXAufx3m4fVPLsxNUJ8zkLQCiZrTSyg1oM",
  "key6": "4V1Hc4qf3B2PDkvuthi2BUXLZpkJL45GQF5zB9PE2zw1AbsWB4Qb3qjLfR8khPvDuhbduM6DNVhr9ssPpka3XibW",
  "key7": "2NUTfqw8pn9MRr2YgAEm5ekfeEwB8qxrP77NFmRB5eVEXWkkT3YFarv3c4vDakTwtRxgGWLhHHtegfEr3x6UeVbq",
  "key8": "oEB7yLDTTb8sRUsmbQYefhKprtTT4RcnadKZmmgdvVUGjVHWS4fxbbuBF581tThyM5YvG5g3vbSw7yo2842pWY2",
  "key9": "2udUfVG7g81h19gqXNf1PjfqnPyTWLMsD1kgQ4yQW3gYS2n99yqvHcgnnaANqNALt8YzwkMX6TMNTiECGjaEArRc",
  "key10": "RU7SZYUHWDxCxU1D9thHmup1vwszTfJt9SaVYwvpNZX79Kc26CrCmwxKAFuMGuYgSaCdtZYfBgvEZGjC2XGmeEF",
  "key11": "5yo8tdEejTauXHZyj5b3U1Cm1N6pJtEMwHBx3uBkwsiGDBczXjsevbHcztMdTfQkwRs7bBysRtkZTTL6Af5Y2Yes",
  "key12": "3RP6vcCUaD7Wo2DeND6qmKfpzy1KQL5YKd7PPYDma8KB43Bx1PFULDjVKyPBWwVoxoUkizwYVj2MRFm4W1YUzzR4",
  "key13": "3FwCU26QJKabfcjEPwjwM6eRVSLvvQW57pCGu3g4fAnMCx9fr64HKdUZGk5Pk3SwAuedHYVKKgSnmpEPK8Yj9o4M",
  "key14": "3mqeisAjMS65J9QrKTCkEhb1VYGHGwKz3uc8kenNPH3PA9hDast1aCy5oSXTKyvkXwrNM8Rq1Ba8FhzxiMi7bFyp",
  "key15": "3r8LgyfBY8HwXp35EjwqpiC7jJiDmaf219FB2Crt9emeVnnbpyohQbp8m8CZQ9kfErJUKp4LDa1aY7wabMekr3cP",
  "key16": "36DvU9CoLaizsMo1DBqR3FcX8kaPVwSLgnTz3XoFdUaoT6wPF1T5K8v2AqCicajZ7y29ryuT46uikcEdfaEVBKWE",
  "key17": "LBQNT1vaqkwQsnC16Yzq2UgQsQycy657gaCv5nRBpMcrP5DcvpU8oqGecCMXG6aaTpWgtKCEQkLQFHh7JHqjafP",
  "key18": "4uC7gCyNmFfgBF5wtbCgUCXdyXqqqDf3jxYbDVwKEKB3vxx9ZwdBNRTyavuWrGQsDeem8A3PbDGWUU85JbuwRXSg",
  "key19": "599YepsnF82BN9Krd7oxkLE34kSj5c5AqMau81zoek5KE9rYg44VRVJs87hcvhtN7rrvEnCr3kqVHvdaRQjzWwvt",
  "key20": "2o6F9FqFUUn52dsNyF8STKXTFoZH263BuwcXJjdJh5g9zhjq3YkfuVV5mnJn3vbCTsuo4oSda9qeyw7jWC71GwDb",
  "key21": "5f74kGtX5jgegkrcLi3rusgc5BL3ujZhuTtLdBkj6uvBkhqniT7zxLqV7gZpyg1iLakCEHU2jRakccGspU93mFLp",
  "key22": "3SueuT9ysx2eYF7ZmrLeipBCP8TuktpyXEwnzUJ5esqhZthtkewsyh4xnPisXEPBKK8G1jz4KQ5pP5VECBCht62U",
  "key23": "33AxAXVSj1X6qrFUkLfnnYa7hUdacDiSTcFA4cCPn7gULJKqhV9rD5oAf28e9EDnBvxH9oS16NM5foaoDf86wWRz",
  "key24": "2pj7dVZafptqSsugzHXS7tUduPBpUenf6PvMb3GwUr1Y7QtrFaAozvrVXYWNGjHJFjXsL7jJYdeba7rtr5LzCECM",
  "key25": "21n1Usap17Vy6UgHYQy5bygt13P2caGvpWPhkwiGa26ZqEgQGmxgLZpFcUh7bF9a4vGjKxzvWKdJ6kJYkR2XbuBu",
  "key26": "xA8twik7UcN8kYZomRKXpiMXoCvXng6Stkb3RYMFA7pKMp1uAjou3dcAYJLTt8pMz25B5pHJw5F8AtprktcURXz",
  "key27": "33VNr52jS34VzUxhiDrd8cpmb9p28sv9xWfUaKuVM6sE8eFHG5pM95P4y1PByH3bmdray3V6fpVWbWujjQ8E5eaK",
  "key28": "3sJc7JePS3sE5oBKWy8AEvwWwV2u9A6eDdFmRXxTZDdkt83u7K5ts9WWsUnpWx86mT6bsTopcGM4DTCortQBh1WR",
  "key29": "29qUmCHmby7pL8PPWzaxy51jYmYBfgsbmDdNdjJh1M7QPDypxLErx7cveSvFrwCjV3feyEsQquvT1Pk1qMJdDZeC",
  "key30": "3pnX62wdATNQDPhyLWYSAfSm1ELVrUEcjHvZsuZ1USRzjPnBEaLm5hUiKSVRt6wDJ2vxvA6VAP8FRRQ1kw9kK3fv",
  "key31": "XBgcLW3cFzaEfw4XxQrLqw7xopWrqh4HmD7Yk1g5bp8k5kXnFP4iiGXWYzS7QNYzNthKEULRcMLVzruVrAgLJhE",
  "key32": "3dDPBMBLjauaTFZSfNB3G6KnaN5n238XoQmySDWBqV1qvNSHviT5EGCVa4k4vkeAEnxuHUa3yDEwtZbK64VND1vo",
  "key33": "4SZVLuXrK2mJGAWKXJ45MXVGGkeHc9ettXMtgvGCyaDvPDxqLDgkN6vr7MdkHREjC4sZn1sdRufDakvU2Te4cYcn",
  "key34": "3aHFa5Pe5wve3WtmNubejNSmEkMDnBWpjE6N4ZoNZ2h49ppjrjLpKRkPPGjrk2HoEBBQf87mBKeY4jpKFP4a9fcA",
  "key35": "56uB6iZ6CxLjuiMXP7szK7AL6i17zY3KXqp3KvCCs7ZQN3jCaoKL9dUKavG7hyCfGhaUstYXeuaoxyPPzK3vaEx3",
  "key36": "21YxWJzThmtB4N2hLAUVzKdRugr756EK28dYAT3rfDFyC3tcu5TLXVVwixhHNd5nqs31EbFpDAQ7i4PaXUcAxrvp",
  "key37": "AWXKBTkvxRQeSbcr8q2jq1HUJV4bUQHuiGiDTgbA69Nwoqzt6bS7c6Aq4xsYtZ9sqgmYzKMDDzL4k9n4o29yhMm",
  "key38": "b3bB2GugzCWfWmtz1WMJpdbu1AnxR6A1bP7sQ87JbgRtFRsksa2myikC6UmTjmt3pEoaCPsyTNUnAtTsRpatZei",
  "key39": "223RRFz8CmsuTCAeL6d3FNtbU177d5an2kcyfu7vNQcEpTsYSjAAk1foZJKLkrk1cBMBxsJKnKKgviKpXozzCqh6",
  "key40": "3Xx9J1mBtYgcjwFzsPSCkXmGC4dNJsdW9eeiH9AikWRGvhjU5KxZzqsPbyhKsMAiLKVZsEtKQjQu9dgUEc2wddp2",
  "key41": "3MYVg7UaTvA5pWW6vwVMzi3QP3sxtXxxm5WkDRgLAEaJ7P7syRKi7KYrjEAFtcAoA1WvXW2D43nmfcotEh4fUU3v",
  "key42": "2gV7iJ8oPDEyRsdzCcDhxDsnCYGAhoEoCMyjGWpqumsK6EaepigNZBTN9jDyHa5efVG2wXWhtGeTcQprkVXc8Wbt",
  "key43": "3iSZnnskcfwQrU6kaR3hiowcvnUXqvQGzDf4XtU7LheCu4ymD6mtEWi8Ykk8AUJ9VjCAAHPhjazAFhL77U4ChScb",
  "key44": "NY6PYMvqmqJT4jCZqvCdC4cCnVnjodrfphq2mY71UER8Ryqt5dSp6DebLVeJP6ptKB2a4PcukM2k1hZqYhPq1eP",
  "key45": "4cB3KyZaEFHAAGmfHrYaGnK8aQEufojXP4eMED1mDv5g62fSSot1dje5XgUP342cUaVQyJnSASKd5Bex2PowC7VP",
  "key46": "2ewycgfSYRetWbHiGfezSn4uN1vRxpUzeHPhq5F8S2CrNFDhNGT6F3f86wqfnf3YvWwW8sqU5dfYibvkmWrcXsrY"
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
