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
    "4L6pZ7uwiUCmLBCQK7ZefU4xdCdwwKjLG1YYyfJ5DhZ2sPggR4WWqfbXGpjUd3fDLACNJ2yVhAcDdCWEdAwmj5i5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MivAR1dSnQ45jRohjSgibR7dEZBpZVYShZbNnGx6RgYtgf9y5U3L5YuHEqEZUNP4RELdFBUaqaMxuyMdTTcQKYE",
  "key1": "R8wSRV8Loyjn1i3PfkfTmSSkdZEfR1fpKqKtwdrmxt6VoriKKfpXi5HKRjVQCV2oEK2U6PxgvPZYsX8gzGzdMQQ",
  "key2": "2qqFphLkY1GYKM1LUHLejVWekKVZkU4XqKi6itSJbEUWm1djiibh7qmikd6PcVbZfySxDagfPbtvyzjTTHMnoE3E",
  "key3": "2fpCK5p4EhjCc52GfwMmfs6rXLQ4tq12R3RQ4w6aH2sxYkywpJrPSdmHkXZE9rpeCYftTUuhp4rjuMXSvkNB9ox9",
  "key4": "4dXWzDNRKpRDAmUyFrc3UTeoS92JuhL9MEnm9xhtRhci5hGs1sAE5v2enJ9pnZN9pftmGftuxiEAeJsKnppBnBPi",
  "key5": "3VDSYvriq38366fkFmUHdejHdqQAnBRDkPd8LJRt2BoUp3Ap42VUGoRfSHBWQPFXzM7Aav2ExV1Vv8HGzhbXjnu",
  "key6": "2vvB55jCMWMVnN5g9pBTvQherURUzk99qTyDUBjorZjSLPsPhdaPev3zsUpSoDxU4xa4XQs1M8YaR6XfEU5HTpkU",
  "key7": "26etgw2jaHewSeN9c7LS1eHktBbNQPU75NW5PoUqwu7DzSeT4s81AkvggS3z64iA7jPYkfWXCZjAhFn1iNLpXUfu",
  "key8": "39EdHPVSb4r3x6meRf2HFR86Zuow6iFFbixvQFg4eAYnmvuzCbQzR1UbctsBbDRHAHhcFvNWGEtcfjZQkDqpAGSN",
  "key9": "336yvSCYvSZnyXK21UkMJLpiMrBrVBee8BhVcs6vSCodd6NqHSdS4Ng5GpoJx3kDu4zxY7FuLvmhzxS9rZCPXDY8",
  "key10": "5PBHUtuvJK3YbVjNcHtmj5J8YZpYkmKNjUDJcxw47dmnuYGvBdBWRomzkjDLaf3X7ciPQmmzMKg74a5zH5xiM7Xo",
  "key11": "HHkyzW225188BqykxDSJV2aAn3CfSe8aFr8ECCMgvBYcKNeAdct7e6VbDp2PeF6ubYNbnSe9ZoDMaZkeR9c99M5",
  "key12": "4BKRSDeg5MyiHRvMvtHiXMpNu9s2vgt9wpgAWYhv6Tb2tcK4D2hWWi7KAZmcwbkvKnRemr8J4KAkKAJCwEGtyK5e",
  "key13": "5nJnVq8YReu7qBRHQntpdD8TzCNdGymAovtzaj2iA4NRz2XmUap7n3ytcer4JPHLu6akHZgRKXKwrL9FDtK68K8K",
  "key14": "3WPPwmJkdgiFhKoLCN1yiNuB4wGJkbMbvPduhB5X9poHR94Ji3vd4ur73ZoqgwtFNajVwcfGJxoaKGeMNUGviTag",
  "key15": "4KqyeVDT1dAZyXv2mRrMdWomUABmohcccML7RLv1Uh1FuPMphPFodedAdwVjdMaYPjUMUr9d2hUfogHmkCk9FfF7",
  "key16": "5UCYrNn94r68dPZWuHqHZ4cXHSxEyLTtXEx6EoZgrpQFz49PhCFYe3xWnz1jeYSkq77ANpkvAijq6AXPmqoEcKgy",
  "key17": "2uzpjW7SEJ8ayrVRo9EXSt2PCvgUHbNnEhxLvsHwwk143zSnt5uGFTusT1h9oR3adBUvAZpTqzDLCthWSaMz3fCM",
  "key18": "5eKLtEGEvQ3Vjg5u9x9VeFUN2QX8wufsr8Vgr4oFugTZb3s4mtfgETwrQ8z6RPMq4m2HEj8EHeizbDJDh7YH4zeN",
  "key19": "dAGGMsD29D2FsTtNPvkhtx3caPuEmhGkhNSLR6qQdtvY6LGw2ZtFgZxPpj1ELRL5bsSUJprnrJ2HQch4r4dajrc",
  "key20": "JjrCUaDVriStaiPuN2fWxAjzeMrfq5dYWiYe7Ts87q65QyXTC6RZTMzCSGB1KJFpjgLFn5ZSoT1Wt3Lny8zsgbY",
  "key21": "3QRHYfhzWkriZRbBmqwFEornQmSbbnbp4LMXbg5d8wmw1NDbi6YYGmV1pSPMNC3bGrVj27u48mnYsY18ZDP9PHDu",
  "key22": "4fF95DZTzgje8PhbdfXn7ZBSGBAqWYEgc1mfxWzVy3b1wEZYisXoAVnUqZ3Hpp7nQGFTdAQ8MgnsSDZYtvcHFyiT",
  "key23": "52NGh3iBVKkUonPnvATDEZ33LFYb8NtTpVsatkmDJMYbzZ4kj7PNvQFo6QSK3sK85w1ZyCuqh3KDc6e8Rafy5Edw",
  "key24": "3UDTkaezEgXxspy7niLmS4LLSypv41X4ThNY6CR5itzwQkUKDSbs6yUh9xfbYcUBHDPWyxZof5yadCVKwU8gsKB9",
  "key25": "647epT2EQf3wmRKQfzRQVS6wnqDwBMHLZ4nMgA1fn6NEMq6mzRQUTcwgdTADkFRSDuL51uLSG55kYL1gozidU1NU",
  "key26": "3ptU17zhhmCtehTXxpeA1qJS6EB3DG3CuqHkwac1neEbt14JFuUm5xUDjAaEks3X2MNwvyrgGxLz2aJCiydF2pYA",
  "key27": "3c7n1uiSNq3etXyvsKWy5pxQxSVjh6Nz4q8zUTvjFwk1DASBgTaEiw9izpUVBcqNeCUgcrVZTE7vUuCzLXR2wsUN",
  "key28": "4ys3AherXJJDF52JHxBpCecxEdX3R7eqZekyPkcgLCRCwA2LJqeXDPf3ynS3wSvL9UE9yUeQZDfNg7CQ6VC6nbSU",
  "key29": "4E6b1NmriLCmhJ3RcUaJnkYDsJCwkCTsTdDa7SXNRYVzycdnDw9hh8eJPHjhXLsYRPW85bffQprAWyqLLgfXATN1",
  "key30": "42fAwDbPf2rEFjJXjFM1TJ2LY1rMBMuiSycGoVW3bwWAkgh6Uk6bXtP1KxfhaimrG3LvvcPNfpMMiQ2o8dTyNzhC",
  "key31": "3c69hUVQbtpiZiQKsibk1Vh4v5UJTQpV7ZBc2ZB5NYJZTthmfm3tyRd389a8x1wAgRhdqA9HnjpGFoRksAFqkAjT",
  "key32": "5EvSxiezyown3X7oA2ryZX6spaX4ERyq7wAWkrC85vJebmF5eniwAADkJ9bTCERuCWwBVXZAqSZbpMNzJdqNQ2nw",
  "key33": "3VWLGbyRw23dn8r2GV1pQCFbxjgrosKJ6CDYQ3KnX4kZxABVG1wp22rSgyAPUCMNCd3c5mMLsn2ZWX9rxpJRuce1",
  "key34": "22C8HjxyBn9WunrGugZjXxmp7qQHJuBTFH4mEAt8FaB6FF5LAWoFNkFwSUWcHUtw2duV3RiPNvv5b5RfmxAWGSnV",
  "key35": "5L49uHVzWw5KQUL3pH896di9PFtWgmdqKFaNZtjZD64QHLpYzY1UaFFky6Agamuc6RUHbL31bEjETAiR19bqw5zC",
  "key36": "3g37hSURcXxBYLDULTzb2ci2myJ49DyWMuy4Dw2DoJNatuGWyQ2S5HhmYu2nmf46Y2FCtLUkbuy67LXhUsxnKwuh",
  "key37": "49Tyy6vKRkKwP3NcpXSCfMmbcc7wNM2ykb4YXJL1nYgVs7cbzbKZaueh4VC5ryLLtcTarZbwmzDPeQ3dXDSTVFLZ",
  "key38": "5pQBpFc8GyKbNA9avgxAmYnmrZXVczyUhxQCciuBzHiXoAUBrMv1WUTY41HgcSqSqDo7y5nwZV64LmJG1RU43U2R",
  "key39": "33Dr7kPPAQbk8HNmzKzo5K7L1Ui3Yw9prgkG8d9JtDY4PmWwzPmf5GqDmSUajzFm7KcGf4xovWA5suj5aWgTVu1A",
  "key40": "38cHBDEx7TKE5evyzvXeTbs1Y7c3LSFjKFLcUpGbmTLdf7iK2XxSAY7CXC1neggq5QctqfNLxEvHqHdVZoA8EwvL",
  "key41": "WN6QwNf4o9N5519KpzJUcK6BxK2JVZjapa1AmzzSkR164MYHgxNSRGrSrJfse8KW7uQhRMNSYLPJbvM9Rof6FaZ"
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
