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
    "6c9YabXENVvXmo5XtJpHaEi47Sc135W8NFvS8NcYcefhHmunfFmy8B413bZ8GjUdKjWo8CiHLW7JdCN7xvZN3b1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "267Qi5eetHGHLxmVeo9RRUpYMJFhgb54da6mLa6JhYoEN8UKH6yCP13VgnJp1dF2rfVTpNj8uVJvet2gnRYXy4ay",
  "key1": "4XPQofR5MJ42LmDP7JrdBqCpohreo9xKvBUfDBWU3RaM1TbMVwk54fnLt16LyTLT1v3oakZxGh1UBgq94wm9zjGW",
  "key2": "66CDiWvsXDRvQdHdmo4dCyGifRBdhrinDnaugEmPk1SQs3VVay9PYo9ZBeqSv5qhdUPYmHK3PdEKJp83As5n2GHF",
  "key3": "UAXG8grZ5SwtUqYb6PK6Lv2Wx45TnFrjvt8iCPMA8qranqRYAJ1RaKJMZXMv4ZVEjbmqXFDSiueDY4TtXdYvLRK",
  "key4": "5Cj46WCNi4Qyxb2aDPh7cZDmq3LkM6KECntLAyRzjSpzop4ApyXhehZwhjbhHehM2ZqdMJHuDQidTLwvQAgeSBTJ",
  "key5": "3q4me633iAT518mUEnZRUdYUNq64vYihxMiAAJFowb1ApUd1HaFvyAWcyKnyqZwtjJnQVhGEhDHAvPVYsPcN8v1L",
  "key6": "31QyKwsMm79YdhAcfbNuViz35bEipKAyZFKNX8Vh2CzA4f8tTWoZo362DQuwYjuuqDkrK4rHfX7u9p6NVSdbTXEE",
  "key7": "2NK6MZ6wd3NYTy1fqCGQstf7gDyT8M6F8hPH9fHYQmLLst1HtCM3GsjBixPwMRf6D2q2StRM6aF1YfREdaBHZUUt",
  "key8": "5B9F6yZaQrTr9xsFwcCFm1oZtUdohX8g9ouv8uutBS88CsN16tXFSBRgaTjjxNV1oakAviDQAjMTYceZpD28AeJj",
  "key9": "2EZm4PfqW639mJHDi2sbngwmY8QLHjvZApWfXu9GVxwX9M5mUTtMnzxNxuvaHzEjfyLSB1rwgZqs4y7mQLQiYDVt",
  "key10": "fiVeC8r1z89yroSY59DvRBiqesy9TuuxbBGEwrnyUpyjBPLLWU3p6ToauoMp9AZcLX5nrv8dXWB5dG67w4aLe5n",
  "key11": "575yXTbh8qkH2VDyZYtkDprDupucyJNVvhytsqDP9uzpj1VkWVjqNkEBfZq6fHENBue6ZXX29QAyriLB8rxZ8xEt",
  "key12": "28FcZY1s18AgSvgJM3mAyvX8syFPYc3ybgWxRUb3C7gtD6LVp57iZfTHTcMRY6FP3Xd5z5HYVqSMr7zjpYuTWwhs",
  "key13": "3gmb3ifqeyLEGmLXvUK6oECNSwfgEnjWzqbvwqoJwmuy8gvgZPFznrAeySKdMHcz1URdtdtzhxMS6E4U5trUPViu",
  "key14": "4kgxMNFwhcqxadL5oPFFh4TKMmdHaVWhhTNqaHaz1MvzAi3LgaXsQiVBHGpzukjYv6jLFJwFbbShLWDhZB2GAYa9",
  "key15": "3ehNEthF5a7teCxRue6Lb7ZoqETQM61m4anHMuabS1ZUbu3wRebTU9savQedoCvZJ41AFMHRDmjyZkJVUpE8V14Z",
  "key16": "2H8tvTt9BtEfsvee2Kwk1rmv49fJrzzu4yxr3A1XfpCVqzcjHYVf4iSFTjdqSzeviryTc1wHqUCNaSTYzcKGRr4q",
  "key17": "21iRLeHEL7N4wVUk6RT8Rc6rZzm1jTYPiaYf9eNAq2icxz1SPMQDSn4LaC5jLjzk8dCJ6mJkFnMaDLJDFqmyNM1r",
  "key18": "XJpA2ujd4wRFhcWkr4ijzaUNbW9bzHEcTsabfjzCwkviC4P4iiCntZ3wjXGbMUi1yfQSLCL3TNh6uibcT7yKX3J",
  "key19": "3wYhFhTYhwVNv6vQe8ebyP6DQ7Bkpmx4gem2xnQ3FRE5GDefRmcsUzRU9sPaf2iRfARb54kv9zMtWfCcXEPbxtev",
  "key20": "FdZuc8MUqPjC75higXPRpAZ519mQdqmdKpm524hVkKUbnqSzJvEbkcwB2UNu5DGhG7dDBHbcbgxBncc3af934Q8",
  "key21": "4RVPKkToUWXrdRPhjHxZXDpdM5ELoppmW14wWjnvM6oqitykuAqTkci3SoXhhtL231i2ToTPpoFsRz36kMDJ59rf",
  "key22": "475Gw8XXKquveT6MEujcCNxr4wnHfi989xPYzj242r67h1PMRRMP1ozaNvuMirffrz8tXYNDX1pu5n49Zrouf7sx",
  "key23": "A6T5424Agbqu4mnf2Y6jnYMHMrwcXwJ5GKNDg2FixUQGYpzvLt23UGe7GQhG4HrraHYz3mq4hPufMbkgcsLxQwt",
  "key24": "5Df9D697jaYScjsNjbwjYWZfXHY9WoupFmvwVM6mEyjGaXjXBbMZG1VSKoZFtXCfw9tXSbKtUTyDjtBw5R8e2aS4",
  "key25": "4E5PWPwqRA9zrY2MaA2nkbgPB6UJ22oLJhQNSW5ZEYTW1VvaoFaU5W188pMttzp3Fmh8uh6VyeVfwbKgH8tcCTEk",
  "key26": "239kGLxkaM6AFU6NmsGS6iSwnrEQpJ2GNSM7BTojJEfWL83n1tUzgpmWfU8MoFy6kL1wwJQiG29XpL7Rj11SGByF",
  "key27": "4zaz4xGw8SFfYjJ2NFiCAXkhCZic2ZXQAvjvVuv2hNv3hJ84ftdXpw6kRfZdKQBue3athhMWh95DRqXY9TByEwqT",
  "key28": "4dBNE3YRqMSD1CQ8THAeb7XNSaMYhKX8nDo5zgiFvtcBHtNMWrj3NMcDaqHaj4WTP1X3BjbTRtaxXwGfPMKWfGVA",
  "key29": "3373ku4aFbxz5aVXArSA94HmQFdUtWFgbECwfd3DqJ5tje2ggp19J6PL1usLEmcMqNZ1o8fRqZaK54nGE4pvBcW2",
  "key30": "2GBasz38Q7DCpymdSvsBw7viyBMPQVt86hdJYrzfyWwTdj9cZrXBwVTeAfq1N3JeU7xz9XKUnZfaqWGoxKmVHMcc",
  "key31": "5rhXTaUWtyLJxTqtPf7pNDQ9mBEKm4onMDiRh458KsdmfzVAdPF1AXSd6YdFttvtepxSRrQ4Ry1HNMi9oN5iD6jv",
  "key32": "2gBXT1VJiPV6ahr3tchMHGdQSs1ABGGATHfLMpRBVXEZMVYy6TpMDqjS1EmnWUTLnNgXx2iYJsUkALeWChcbfPqv",
  "key33": "5pSsnqf86nX8gh728yb8zrsDEmqaU98Z8PQ1C95iHGYPFbTP4G2ig8diiXCvT4uhNtTT9zgdbbCutT9xZwJbz9Qk",
  "key34": "337UCfewfxSWhgajJe54on19t2DagPdE3Eei7jZ2QVqxTcc26CRv7TxGqg98ZeRsnnyAatSnZfYrfExPkUCGcwGX",
  "key35": "2LRKiC9rG9cEnwc8TgDzDrFrkdR7vS5NLb8tePP6PNkzu5BaHFgZmJfRu582BhpK7vKb3YLgPQc1VhUDUEXEcT9z",
  "key36": "2BPoXcTP9Y3PLRqp82EfPpSU7vTEAm2nvtJ1QFNTvLJchBb355cfJYC4fWf67YbPnzumrwqiXYT7TzCj3t8PhTEM",
  "key37": "3msWig8ZbEgMNrhPZdGgNmaEzVEEbbfzYU2jFodvTUhiYscC6qqyQUuQYsXueQKyLCw5utZoLQhiT9QNtadYe1ev"
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
