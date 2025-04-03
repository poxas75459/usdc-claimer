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
    "5V3wWWJNRKM3KfvzbRfhRQm8c1zMAWB7aKLedv3has2qMf1Ts854U67JsrhobWRWM3hKbJsiKC9PmpNCt4DjJnvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pZW72dneqXMgawKLZ2LyBufsyxiMd7TvxLVubFMGYNYiD8tXsG7WK2NejSJ194qfEa4YM1mniY9cyKSDme27Z9x",
  "key1": "48GbyWEqymeQhdKGCLJ46BgH3AtsiJb5YM4gZSd7YKbWcTjhYa6Ef7zFP6utW5qbaaC7V1Hvbbxt6EKxpHRkT5GW",
  "key2": "xoycxRcTkBLdqC2rX8agexnHmwzTw13wbxRJj6fsm2PbFczgqjoQFmiytGuRKM1q7U8D8MKLs4pdhXZbLPMo4oB",
  "key3": "5QM25G44McvuCKGyKscRZyTFz8EeZkPBebKmBD5AhVCL66rhPZs9e59c7QABmDMvUFWqVnYcq5iVF6MqmGq35MZU",
  "key4": "4yiR7MyDjiz2L8QkHNAqTVHeT3pjydPLnKDEsvcu2org3WV4H4rjysyUTbuqHmkwmNdgTTK3Q8XXnvVw5JjQpDPa",
  "key5": "46iiV1TpHsnCp2VCZrTLaR7wxqk6XXEutkxnPpo57w5h2FT9g1bx4XWML3Zp6b2kh8vC14S8TzBg9NdDuk3jes9j",
  "key6": "epr4dt9jLJxRygojSfNcPpJZLa82YK2ZYj7kozZnEcpZput9TGSWN86jRJkjUWNYBY524rWoPtb5iuWenvEFHvx",
  "key7": "5Lg4bLWiUqugbScDe1tv5qs1oRdQqPZrpvmfKwhnEpbEEvE8Y8CcSyEnzruMUqcsJUqEd4nvP1FGHfua5qLr8XCP",
  "key8": "vzXKyNYYhrDc4fsPLFVe92W2T8vuLWenXFmdVBKDKnsSKUP4C2qTh4nZ1DakyifknrfzekE4bpwB1cbDV732D99",
  "key9": "5LKhhe8MTh2R2V1pCoZknHdCsNE3zw9dpXXLTWKAS5CdXbmsyWsUTkh6e2Es8iapZTFAqrvUgqgSyMzvAsvJKuSb",
  "key10": "54x178CAi8hJ1nkmi7ttDUUuA4Zpe8ygQGdPkLt2yxCweXoheDTvpQVFKeyZAcWeAh4ohiXLDokJL2bCMT5bkS44",
  "key11": "3oR7PdpGhj2LJ9gMqjqqaoesZ2eDWCiaL8K1kzPAAohASBH3E9fmAdscRxKGzzjU1YchC5qQGmP6xXN93wTAsH49",
  "key12": "3VwSfPWgxvHJkqbCPLDQSwQwoziMiRHi1BY5F3h2vD5dM4rhU2bNtWpgcXkUL78gEfw2A59f3a6Ufx7zHubEe8EC",
  "key13": "5afwTTf47DA2QBw85H92wXbQFt9Ev57vbSodzAt59sj9V5tdbHHCjyiYR2kTZDaYwYyozgUSL4uUJuPThAUBGtbP",
  "key14": "2gpzU3UatL7gXhu6yU1ppEu8H2C6fjPsqHovxci3UP6kQAvUGKL27fcEpFCPA9gtiGa4jmdvEZm5LhW6R7m2rJmH",
  "key15": "EWp8duPnBT3bvmdRfrqmZtzsuDHDvQuhmyETFWqKCdxFmPdGeND6Sfm8pZofBpTGZwheqmbkouwDP2oCRejvbDW",
  "key16": "2dPkwe2KB3a3FKYPbLYgNCFpBLXFo6iCicDxdBgeQhfxXBPVowDs9eJXX3Yg2pciMZzXMUHuy7CFzVCgRJpK4XaA",
  "key17": "C4n64x8yDHbQvqsd31HrbDmHbqy1tFJFQfXx1PJA7Q8STENJEoJU4TrMVXMEzkyPxYQPLNdnXtcRATdz2ymVqhs",
  "key18": "4gsv8KMRizQdv3jdgCPZddxuaKkiQtKp8NbcNz65eT5pUYwWaPA2UKYkk3ExJWHxzNduxHN143o5QFAtwQYufp4s",
  "key19": "48dcxoQti9bvy85ady91W2hVCd7D4DeQvcPJ83F1xxSD8a3Dfgf5L5pJgupKhYvfhNwazbme6TpPvcC7RMD2vQnV",
  "key20": "4RkLzsB3aopnFjUG8WT48ipMijprFM9dg2GX2KEtsAtyQrHAbhVsUqSrSvUBELd2aSNUYyCh6vHQJbpfBna76r5U",
  "key21": "3ipXVLpXKfBP67JpgCS1Bg2CSTKh1m5aLXGmUCwJLbWCJcbfAPH5H8WDEmHcayrjEoBw66WVx4GYDwVbjrihsjvC",
  "key22": "4LCjmJNRNPpWVZsKCEmrqyWoPYaEmn6wGF66cdcQ2z56qyQ168ty6WsGpLSkS7xTgLkfjKFpPXYoJZ6cLdKbGati",
  "key23": "4Zr6RWKqJ3cQE3d4JgkYZTjE4oBZM8yCyibPkxommMd5VtXV4QMjWDkKHEjRibq61sg5yB7HFNoxYgazXoC4nDAG",
  "key24": "2Rb8YfuJXNupBG3tJUPjco3XD6brtpz24Jdb3mrRJKDAPfxfpEeY4VEYhrV93fRsYeUQnrrPS8ZWBydTxU5bbjWw",
  "key25": "65bHxvoraRGWQy7EXXeBazV8WNmy4ccCwuYQUUTdv4qghNSGkCKBdYcLxbNXKmoLF9arHvjuRRbJNCNE7pwxeR5",
  "key26": "5hLtzxXiTcuzEuWZVNwg4CSyFxtfjH5YpjmMfTbJNqq3KscvUj5Z4yEaMSFQuX7SZzU3sq5R3kdxc64PnwhQjnM2",
  "key27": "2vvnhTDoUDqYSx5gxidHrvcmfgFcMA71caZyDbBPZfRpZFHznWnBMnL2eRYc2GJUJRxiNffYYiyun9NvbAQYPQr7",
  "key28": "2JDDruvBxogLKeCsTfx1kdFSbFCcdeiU9JZdcRG3jRZgEwAupWbnXfnVTjxaPn2d3ixSZN8yFC7Ghp1hLkMSxZrj",
  "key29": "5kQdAhYsH46KLeyory1BBriLc1PkFRMYEUxV3xy5ZihRYfsTk1uBJfrxQMoz7nsXg3KQVnM76arKMJTrw1C48gNa",
  "key30": "2ZY4UisgJSt95R8GhWiQLCAejXHAyrJNEBEdXzfWYN92vP5kmmiZ9DaNuFdFCZmoemppL5CofvmpWMqzTD1gQ2db",
  "key31": "5M7fxtxkVDp9Ve7xN4hvTsKckH8kc4NKdMBVkuuj49AeBiK73VLk2JSiuh8yjKj44uNvshkSeRmFrtRPihR9uJve",
  "key32": "5KeziY1ALJHRRampc1zWZY8gtzek5KAK9RF4xRGE3LKcBzPSP3cGS3kLoXr5Q3MaMNRmus96bZWWiYzvXUUQrNLD",
  "key33": "4FiMSvVdSPwMoqbwwjJ6KZ2Bg9c2thWkuPP9XQSohRbrBKLspoJfChAKQx5rawWBkFckTaLhhrHUjkxMoHme7CGb",
  "key34": "4K1cvSu74fwfhopKVkvLVuiebhVFBGVbBfxEZUkSV354avZmgBUv5KDi9482oSeuYdNdXhZjJvDzAtkwLh1bBGsX",
  "key35": "5vPmfEC5yBz2ZtjHhbMT4QTerKLZLkxHVYDn3BHZvcWQWM2ukqZ1pxqCsmbsJpi2xMDRs5fGooxsDsi3RVSsHeGq",
  "key36": "5N7Aq3vkffupbAuPmAstTZvcJv3zYBnrK7u4XpCnG5vxtA2rhL9KzJMmQ4RVzgDkAbqNpPgyKK56CnMGC4RSsLfe",
  "key37": "29XdUMxXJRrXG9w8hMUWjzobbAqh8MmuZC61AryjxkZVCNBq5PjtTR6DyLzEBnGn67AqWnG1wZhCyX8CSd5B61xp"
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
