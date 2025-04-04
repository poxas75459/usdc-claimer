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
    "636WznZTHgmhQCwDiAdQtDSSZRt9df1oj2MJ7SrwjwyCAZd7UPRJqsH3seTdBHtjjYo422ckMxLjMXY7YYcrQDYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KTnK6Vw9fbUm9XGrZd7cSGMn19rHPavKXMS2aoxUEPvA6ZiX2cRYzgVRvqgXJw3DA11QBTmj1stUyBZVrmmPxR5",
  "key1": "2XYUtDdSyA9Ghos11wKy61DdguZ2UJ3xCsJtvuZGmFsbHoVU6c9cdYeqEaUpWjktvRNRfhDymgkd4JcuGBMCfLrz",
  "key2": "4bzHH997q5DjXqemMnGpJ3j378N7xNBMq4GeGDmH2JqzWhUqzTr68YDAWgQn4stkwgRDGkUYqwzRK7FGet1pmqhb",
  "key3": "2EP7HnhQatF4g9ec6T1rBVBJ651cVvVB4tWshL72tatoY2Hr8ZWKuy7sKa3g7dFYHy2XqjSS6UgiNVyGAdXEPDxY",
  "key4": "2NcoMMrou6pSrJ4qCgFB9CG4ccMyLLnzgS3bKggAu5wYPeon6fYohAuyYsG8fcc3AMK6PRFhqFs2fo6hbfJxzaN2",
  "key5": "2ZE3kuqCJtfAVXan1MTYDMMXsSg4kTzJwQ1xMkRahowSvNut3wDCNhZAvFbq6JYzu2BdnUPQ9AR7PM7AmJQgcw8s",
  "key6": "2KP6yW1WUeX6iJuk6yFAbAqn7LA5Z4LmorVBLrVRWzQBNnKESGCgpZkQHfmLiJRK2xcFjF56kutNF1LReLBsLq77",
  "key7": "2wYKeauZp33PD7yhMwfPxK252YARws5MY35Vwz3LGvzWpm4mFkLqSiDrdjWfFWC9hZfbLatyhB3KRetvpxtbNCf3",
  "key8": "5raQqJzuz57w7gfN3yReCowjH2pRcWhMivxauhYZC3KGBCDrqGrTrSa5G9A9pebquVqFmjcxtidmF9nSjjmWyaR2",
  "key9": "3yccDstiwpYHSZCXVfWDZYse7LTNG1MCppWMjKQmYKVfWaSTZ8ctAb2Dy6ZKksjc3A9Ui3F5tujbzhj1xqPdnegr",
  "key10": "4B7wtHmWxP73qbxZCHEcbD7wZk2jYpyrjFTegUuEtpnry8hRbKXHaGZfn4MQk7DfQdDh9fsZ1oWVdp9qeJRqLvve",
  "key11": "3MByqk7zT9pqHdJ5UXbSqLU9i1BQp2KpzjYLKJZhBM7WxJQ33PYwsBpJd5nRkFS8D85z7rCU1KPc1B9LFHyii1vD",
  "key12": "2G7i96KFGCdMmEmxs3jAFiA5GSFau7en7MdAYk4Nv1LkHRMnfwTjJjeQaFttUGMkNz9csA2RM2ge8cZW8M8bcdg1",
  "key13": "5rEYUJAqbZwHQYErvxgGbgSj5pEshkJ1Jhc7o5NqPpccfuZZyKaeCPVBVkk6ruWcj4txJ3AfXkgMNQFYfrEt4vWJ",
  "key14": "2ZhyqcPUYUbHjzp8qnFMsd1PmAcWVJmzadWj3iDocbKtK7sRecEB89mh5DcdTNtxotz6SnjnVhChXFVRsGpV2ssX",
  "key15": "3agCDwKk5eSxxCFd89AbE1rQJkt2RtchqKghDhdat365abFxS7byiPtnFFhTmCLdKsrfpNS8vySziTt8skZ3ZoRh",
  "key16": "5b7fnHvUN3K4GhXHs2AN7F6aMXXReDewbiCHitPiVqTuwFijaLm52W1LCUHNfdjqpWRdDmXWntKpsP8cbTSm77ko",
  "key17": "325swQ6brg6xsqKu1pgrFfe7wXYsMbDVXZevXHw7fpwbm1ekFZXAXkBU8ShYWSp16UTkyS33s2dGZeHmHMaBn31a",
  "key18": "5k3BJ1HDuSnywEPAcET3QHg2keUGW5B9ZksJSBZLDVZzr4FfTscJDHz9xLbAv2UD2DhfwxPzJLiYrfGKUStEgX3w",
  "key19": "CiyiitzNJDFeNdcMufBE5T2omLsD5BdjVhVc9CnPevaZqVmBLFrP3GQNteCJxxqtYiNCd1PaA1tb7ArSb9Hm4g9",
  "key20": "WvU5g2DGjcHJ82gKmZpsdAa94eHEbvdvNN5uNgkMEBWqVw9sjvppJU3DmBpP6K9dZPfjQtudLzJBTic65frEmeG",
  "key21": "2ndVNaJE3X1qFU1fC8rrCSDRAhc6h8ckL756Yz1swZyjsPUnKaeRLzt5XpeXgPaQmQ1k47dJrmj38PPxssmkBaPf",
  "key22": "uepqap1PzRXgS65kdKnxJBvBjMfFC7NSb4vYDwrorEytfCriToq7iqg6AenVb15fzcQX8yMrf7rvgRcETEqVyAr",
  "key23": "56xxKGpyhWSdMEr1UsZS5VU8bJDU68sxfvjibGGx2N1i2zKJhmX6fXj2KSKTzBs2DpRpbrbxn8mnuCHsdrYLwSFZ",
  "key24": "3wbfaNxcpFPjBLoFKv85nx2yhDq52NuezkzNfZqw2EQrt8a6FgL6Ecxo66XG5eN53U6V8Eorf4hSTaor58pwMPwY",
  "key25": "643LEq82NAxQ2niDXtLU36hr7SQxL5hj5GpG7fcrgR8QJtJnuCApiLTW2jcpnEV7UUmpdBBKNJpJAdBz93a7sPd2",
  "key26": "5MuHofds19gSo5Q8aK2GycKn1p2FP4HvfvLAZedMpAogA3tRtCb89yNqPFm7K9dyVf21TBNAuQC6mw9ncHECCmC",
  "key27": "u3NbcJGn9MuAHrdY6xqjhWH8hY7u8ohQBAbeBRhjZ5Jh5aWinFEhyXwKoDVHyEdbYBEJQG66PGFB5bS15N7s524",
  "key28": "2rgvpUXT4x9EmiGj7U7zwekz8FVKquu7bNdwdiA5wjeuBZD26TRV2AF5t3Q17R85w51QStRKHSGRMC7DiZfeouMV",
  "key29": "2pCiqH4SbtZzsFyjZXeWT2ZiQeroTctphPJM1Tok83m2Jf7HwjfdTD98JvYcu7fWCMiYMnihNgkYFQTDfRCVP1dC",
  "key30": "1KRDgELBKAAgYVn9rRytPJWM8VozhY59MYA4ihKcGtQTXZuVV8HXP64JbuhSkm4VMYEayRSzCSHHWbLCwvUUR9N",
  "key31": "53V8UTNk6ZNvGpPfrRa9ZHBhY5RfBnrmM4iip6zMPV1aEBr1DPMcGMp4ee5VYDkVCy3fbenHbUEx32e5AXmZ8Y7u",
  "key32": "3XrZzgoK5gkf9zAWPo9qYu5WSaeJvxTfpdCjDfKW18B2y321zNr9iLgiQSzmwc8JEZk18hZUj1EoUB7A9PS9oHsT",
  "key33": "CoNVJz135hWXVbtGTnXHJcTemmijDQD4d3NYrRs4LTFxPwRTfbC4Mjp2cGYPxhf8nyM5bQwn3USse3aSwdoASpi",
  "key34": "5MsLdkJY5CEef29VDrPtmwy5foDCFDdvifZRVpdaSe2QHipoCvxzcHv2UAHAhGwT7WEpzyv2mQVr7wRSuEePYrXb",
  "key35": "2CaRB7AWRnDoXPNjWuaiP4GhM127MYdTsNWiF6bqRq4zsxMtqt2dd1KXapwq7DUYS1Sf5Cib1CjQwUBizZV7f5pk",
  "key36": "5zM3pqd2oWkvQFjrjr2ATEptTMZ75y2RFMjV9RiUpHvyasTbkGAJnBxV7rHVsLFSYhZ5Pc2MSuftfugh6gdk2ots",
  "key37": "4HLVAUEmsv3SpmG8ePLYAtqTfTyWJWRoDhimTaJa3i6X8psk6gB7uUHfD4RTXvn6GQcXzGZryLrgnevD1ofLQKAx",
  "key38": "5xfZWhFRpKPteNDoUuZ63CqKVmkN1SwDqsUhTFpvZMJeREJUtE5tMUFza5xUH2xEFoDC26HH6iuSmqgGDK6jo1K2",
  "key39": "3krwM4DM7tFbrU5BTkK9ix7f78DVaf6yrRp9H1DLrnrvH5SkD6QbcXjv1JHYCttQwhDw1BVhPZEE8qejoMQ7otDi",
  "key40": "2sofHBz5Wm2kiVoiuyjW6Zs5jC8AA9AfzuF1mzyKW3AnpP4M4pwHHiDaWH61889sJzTEk1EcrAQTiXBHpHg1ADta",
  "key41": "4txfnui35RJADu8N13n2xvNs5xCiHjSq2WS5r16AfxmzAecZkCVMKrxuKB9v373hrBAKv3DnnC7yTaXr68arJJs9",
  "key42": "Pj9NxwTMzt1aSYbWWoa2VVYm9S8VZaB3X6RKsv13fvB1WJEmP1d1G72BzUWhqixu22oay4uEft31GnmkhvxuxGW",
  "key43": "3oo241tYvnqD1nA2epUvGQPS7dJ7EMhcZZk87CYadojkZcbX2GmAPCNFG27v6J5f2prY6ZjvN5LxE7CdJ9mEXX4",
  "key44": "5jzJbd8WiXdv3QeYFxtR2vgWZosBK1XoLqX34ZcsWPqtwWsHQ214LYd7AaEZy46DmtTZSyLe7XiTXpkYFMBmY2PY"
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
