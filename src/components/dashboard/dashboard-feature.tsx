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
    "4Sg5Xh6gdx2ZhAQjz41N4QQ5d2xGq8rBi6XLb6DyKiKdnwHswGRpah6qXKgRRd9Ctsw5CPN3obE5WoJz5yrYqhRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eRP9iH1ufVzACQqfVydL8wVLKzvagnLuc2UXNDoFuh8qt9NhG1F3yNgjfzaxpWB5cZoQyehNJ4y6AXjBSXRAvST",
  "key1": "Ss7BJELJkNzicMVRr8hqtn9CdMbWXZEKKoYnGQGDMqrrumraBEUzLNh31mME8TPAUs5QERr2wGH9SjpwKrYqrUT",
  "key2": "4hRv3B98cbctFJhNTtisFM3fb6VFP6noXiX3jmCNfefX2H3iMPzcufcrE3192fRe4ZLsR1NS6pKfx2eSMxuBsDmx",
  "key3": "4bLvpZNHmgWHJYmL9x2sTZYMpESDPKo8WquBknKYrftwt3Z8ugRNLbogq9z3JLJNQUdkkAHYNoXSib3xpD6uKs92",
  "key4": "537TJmKqAZaNQ7FEbDUSrfQkNrkAPbAVzoRP3BLPdsBcKDgF42MKEEuDCZjGcQfpWjmuYvVXPZeYH63EAA72Yn2d",
  "key5": "54kEo7Kb6EHNv4zcoKHfp9FzbsPrZk5HwFF2HrgZSneFL6VUGhmPm5qKJemijtm6A5MfRtFXoM5amEnqjhSdNHVv",
  "key6": "2z66rBy8atuxbnGiVpsSJMaVHnX4rHP9NcjxxvZ1eqhtxZz9uF39yjw8ogiQxFu45ZYLB375g9adamqaRZNU86p4",
  "key7": "4Qn7D5PuyhS3NWfPaPUkbGpbp9T2m8hhZDspES9s7VLsFCHpsZDf6Z7TNqDS2edbDw6Ct22HBuGdnJKgg3H5HuTq",
  "key8": "22gWv3BjeWxzw5nuCmB1UzYcPPmyWSwbbH4Rncu4wXsAMVMqu4YctHRfaEQT2pATpsLqJqotrBhQSLqExSkSpW8V",
  "key9": "3LoHXwJXP9UtWWnRG988Zm8FjfYzKusK3KuvCaPYUMXbbt9G8tPpHKjBM2aPJvz4YpsFspuSuJcVrnd9Dj9QLAJA",
  "key10": "RSaTYXgWwPiPbreRDFhVTPGhZ8yw4aVHCmvYugDYuW2ZdcKb7Ey8vcxyzHDk8c5ZdP7zAHDpaSg7YMGXEdBcMkp",
  "key11": "hoB5bu8sFJzTE12ENP9eiGWh8yKtX8FAPSLcXDC9DEGCQpn6VEuCQwuiKJJWjKT2DJLDcEz137pJzXC4akUmFi1",
  "key12": "bBdkmXmaukUgSrQojjnKHXSvmVS9ppyVfbf5kppcbqTX7uSG4Bwy8ff4eSdYX9iYAi3kCdQffSbxZjkAfGKKBeN",
  "key13": "tFyug8Fk5SVWPzGNAjFgZaQPDUL2QrrUcfkvmAKkArdyHCJEAgHqhdZNfTQ9Ykrp4UTXuuJBL3z3PRWEugwuEUH",
  "key14": "2BMbWk5LYgYhuCNhGYZRJhkVPJQnfKVRz19wJ8kwhfDXhuEdqBXcBW2v8mauk7fMaubVzRc7duYce5H3L82pZiMe",
  "key15": "4NkW8rZ1BnPA3FGAWa9Tu54foVxpxog5yY2p9zJEQnYoLKVofReWMqbLMEqj9T7kB5ufUQsFo57FUQESPMuS4bMN",
  "key16": "2myrRLaTTPpoBcVkDaS9wicyrZY5u26T8EGBUZ8wZATTYkgEPCHefLnkudJt19czef6jmMPsZZh5X2KYx75ZzYw",
  "key17": "46vDPLgs8MMBh85BzgNNaBXBFJH8qGpeY8gP4HaifBnAXy9icn7JsJWdcUyBZutg8Vwe3BSb4qTryphsGCz2TSH5",
  "key18": "4MmykrVXFMmkq19JBwjPgAzoS9mCsV4QczJ5smmoG9W7Nj2Tw1WNRDkZsx3raN7YZBjcPTodPWEaEgCyKMeuCxwP",
  "key19": "2gxnRHWVxXCUroHzMhxFSxCDa7e9tfnpVQXgi2xebhgEQULHKaHSYmv2zBey21hLPHLBGBvFJZdomdZkvmmh2DtH",
  "key20": "3xPp2G4ouADeY6QWvTRcvMPXsV6hfJjvfJ4RjujS15sfBuWh2qp5SA8E7dm6fsFT1hmVNcpm6SntjUFaDTAz5KtE",
  "key21": "Nct8DnZ6gd5pTi8nZiEYgEBb3Uz2HECmB9VyA9uTkhyj9JjcmLXcFVU4VLcP32ZUwKcwb6UtExNJDmbt3ci7hz6",
  "key22": "2A8UBoWXTSZqUEV7VKMKmWugS8B3SdD8fzcmtuLWuZL9VrWunAYXEEfm7LgFXZzffZ5u8Y57CqSF4cEEG9kGjxND",
  "key23": "4v3e7a1EfjHYJdKNvWMT6QSyDcFLephuhp4eutFqn3RChsNJFjPjxkvwSmemxZU8XVNaMu73BpRrFQbWj9H7TiJc",
  "key24": "2ne5eg2g5zKZS4Q6k1vJiyQ2wf8QKyiyhr3gcqmACZRo68CfQyFtNVMsUhgNAjcqxuS73DacyTC6SfUUmuwG8yWC",
  "key25": "NLsxVG27fyk21yb54DGNMD2LECccR7WHXzZepeN7Wom1cdvDph9HCRyJAXz45boCTQeic4CaV9rn851kGYbTM1Q",
  "key26": "3PVYUXYzb5frwPMuLzMiToY7BfXACVndU7Uhj6xduF1n2zLSRxtL26euEByLrGjKPJKFeUpofKa5p4t9Hptpkeaw",
  "key27": "2g4BF9s2MRC7d52romqybb8xpiXHkbxbbSPoVgeKftoWLGZ3ED2V6BCfKPu2TBoR5nxY8JHeHaPk86pbLP8tgK1Z",
  "key28": "uZc2uKgP4Vz8XmexY1Jw3PTyvVTFnhNfq7wgzcNBuLhHB5VXBEKNR9e3bFxEoB33LVBruVTN541HZusVdoZKnQp",
  "key29": "LxuAsqFGh9B92CjrADB17Z7wByxZtYhdJ6ASUsdCSmZzX3riTqSWUWKvJBiGgCNBZEMU8rUCR8ZBziZ7VmZtbfy",
  "key30": "1TWTWMiLmZWEzpchFieeHZojtAxivTmuKSej9HNF55pBbZkRpoiwN8iA2s3vwzNYeRMBsCu8ffWoZrsD6XsG9Sp",
  "key31": "129bsKEkfBQBgAmEq2BauMvy7NqptNLV2iJBkC5KghZZNKTcAX3a4zprkgUmHtzgKZgSae1XRn5XwEc2UtDdHo5p",
  "key32": "5kZ7AiVwW7Firxs5b18weH8nGbXQCS2puYpAjBBvzpWYEDodtC4rnvDTikamBLYAcT5Q491EChKxvrcW1NwTLMSP",
  "key33": "47iXVkXsmpK8mZi2QZBMTBCbFVpRG31AexCWxAt8kPPJiD9oUSvu23yuiqPbHdyT5UwxgNhWFQMZ6HaMG8xXcYh4",
  "key34": "4HyBzr6cgNDop4EV25BgFHbrZpFFDyDd1eoeiqYsuuzFqHeo2c1bawiPJ2adRakkGcqWwtnCkABy3HjpEN5kNSYn",
  "key35": "2h1dnDiYHNtHomnKzWdKwoSTh5qTpe8tW2XiD1Cubw2cUD5zwUZRmNWBKCvtxZUBmic3PxC4ek6EfKzscxtcn5qq",
  "key36": "2MxbV6J6fgVDdtbxAjJJv5W1TrnJZxKzTiAjgJGFLG1iKswczuM4biXAgRwp3dWfVi59HuRZsvCj53Taodskq9LX",
  "key37": "3HvABjHNUmj1yuDGZfpojK3oKbL6y2FdnkuMHz4NAj4K2DNzoKLWwsjBwf1zZSzEAxxUkWVNXY64qvULoEArVYFm",
  "key38": "3oDLMKkrCUyoduDsJYfxzqDFPGdC4U85oYvPKqPBgvr44xjr9wTjseMidVPHZrDwzdFo5XHTsBsztJ3UnXrTG2JU",
  "key39": "2BjfVe47Cx2PEw5T26QB8UZLbwtc2PJuvWayGJZyJxnSBBqiaPhwssvj5wszvF1WaqrhM7JP939WfabVB3GmcXE7",
  "key40": "KMBydkCijBuRQHB7t3J5dysDvQtkbSj4YYonxfRVCPrR6bf8ReNP7ETXiBwuij2dM9CF1wFPWd11kgZHWSgWdoE",
  "key41": "2VfdzNNSAeWLzNNR1JeRhv3oDZa8dwkXeF6Cn1SZBBGarDRc3vLkzGSVHTyipN7QfQzCNFgXwHDQXttTVu5jrPJQ",
  "key42": "3P3KqFQpEQi8HPZ3Dn6dEo1Lqg5EsBMkbXCNJf8cbhwRSdt4zFxYzTBbrL9YbqN3NZaB9ESfKJncYAoCMDJMQRcP",
  "key43": "AMiRGGMu8NUghJ9nkVXXB1M14fs6DiaCAm7Cv2ZSGXQAtaf5i5S15Ep846SyJQ16D1V5up4GCme4mc4RB9pTxuB",
  "key44": "5zzqjBYUHodh9Kq7RfTvoLtRtVrvaYkC7KcFxbuPVPJswDvsLx9X837DLvNcPxt59XBnfsXLiJssfZgekzAZJmMr"
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
