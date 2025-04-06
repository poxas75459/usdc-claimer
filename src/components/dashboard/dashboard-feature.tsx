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
    "3co2vKgwB7kPyKdeBDHeNpfYQbDpQBQYDQqh8GqYz4XqqQUPHmmeoG8hneMqnEjrt5DoWpukuEZx5KVJpWGPh2uz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1RfbNR4x1QgXPkL8CoXdp9sBV6x9PReqmQbS78KgyjuruH5iJurTyVAeiVB9A4Qy16V215UZpsDMcKHHm2KraFk",
  "key1": "34c2JhS1mZBmr4GvD84xXZNJ67mUtqAkTLvqrdS1QYuY2Zo77Y7GDubZHkEjseU28LdsNnjJRUS1BCDiZC5UAuCg",
  "key2": "2z6EEJ1kh2Tei6mrS2Q6fy17sG83Fs9bFxW3eaV9VHcjA6xgpayNypcVMFXA5vaJYM2Wocqtd92LuUByQx6BoQNy",
  "key3": "ADzrtx46iuQhevmqXE6jzxs7DmGu8YaRaqDc4pH8wQZMNWrmv1qgTEvYaeCscRfEruXGemZqntiDoeJacGTWCpc",
  "key4": "3fH7xbwY4KDUuGFFRKuxAakE5gQgrEuFqqrbMkcxAcEL1NsnUh6Nm6MSbYaFM3tN99GPDTXeh45TCAiLuaRunvL1",
  "key5": "3wn21MDQ1o9nQQq85yFuEUrU2Tqt3kian446m97KNHmiwFWWsVFqxPxiYT2h1mdYsdvYFuSsjW5rPNdtm51pqrEe",
  "key6": "1bTELYymWTLk4zk3C4W4G3y8pSTCfQAQWhhR3gCNJD7JT8Sch28QKZswiUSMjU7FLVJcag8417HNztCUye4sMHV",
  "key7": "4i9RqBYGBCDDdvMEqhJVZj19PNhYim6a6bjqXpbcZoAGaKrJR8KF1AckZryDXF9wkmnqb19S7uaLpLpBTvfqZd3T",
  "key8": "2c4kQ7q1w8CdgGeEiNwhYdK45S6aJdy3efMN14NU8sYW1dLti9wB2FbEczBiAHhtUqP2gwpFEcDfozjaxktWpe1o",
  "key9": "2AHh68fekdbuQuHNZsHydX6CoYDb4bgBpqMMzmLv4h8MBFyYGPXXFzKnLLYYGJdWnr7g9qoojXPYtBeWFrVQzv5W",
  "key10": "2zVrUPq8NtdWSdL8WBgFhJgzS2aZXt5sqBxa5cf6JBp1tQSUXgzvPWeT275weCZCfNsYpa8wutoe3TWwtTt1MDsH",
  "key11": "3U2L5ajqcJjHAwq3DgewYgsiYZn5ezM6X3r2yAQdwHDZG65D8uQWMerb1fhFtoFmQQnUzMC9vLQN7rxjRcmEr6iA",
  "key12": "4q9oNXxqvdYK4bWHfnZSteGgfkoPqHirdMSHXB1k71YamLjrms12tuiWJzQ2WRVt8p5JNHBKprHgVJLdt4FtB488",
  "key13": "2HAB1oBULPk2Jzmk3mQGTtrpo1sxQFPVhihjbvRt8Ey445SqrRaRbRY7S1BnoS2Mazu1fkqm2yhveRZT96ucremW",
  "key14": "5LwdC7yvzcfTnaWFeHm2PrEDnENb8tsJot6BfpsDkFJdWS5cC3wK9kG1u7tzs8SogoetiBXM9UW7os3pGvfuWs4Q",
  "key15": "2RPzxUWwbgiJmuc8JXogRZdfnqQfXZ1MPoYHUWaDTjsmAeG7pTWsfRQuCbvc2tC4h94eXtX4qiqgQ3hh7KvTTjdM",
  "key16": "stj5jTqcFxFAf72oHjwMwZUHCwLGvMkZpL48St2LgRUdGB24koo9qU64XH4UutaxWh78gm6TkKZzpubWaLUpB4Q",
  "key17": "5BNEqAKQQRhrSweCBmE7b8uywdWH9L1wC3JSTLnuSG7Yat1rFiE1EqDyWLX4tMWzRrcoq811DDzQkP6QQpXFuJVG",
  "key18": "3TWj9HVj1wWtXRVrkHeogFygQZoNALFJXRr7JcEkP5ThBWEsY39kHkW2T874q64Jd9S63VH93dneY6if1G99X4HX",
  "key19": "41gMt8RtRmGmZJqKQuUsHxyRmio2BFxkoDi2U4h1ZbcoTyZp9UCLubLmAt7cYxpqWj7w88iLGsVeyCk5NYbRamDs",
  "key20": "5T5mVjonaKFGkhgVjjjQbrbVgHV85pQzkgQ7VfY3SBMXFxRkoZjCRaWArqDDykQkXQvqmV42w9wycF45PGPxExq",
  "key21": "3etmH6chAg74dBFiTrbNcFcrghgFE49iAcVbz1217tmsNELbMXMRQxoZMVTjVQpwsHbHY78iNWU7a44itSJWLrDk",
  "key22": "iZR4svrFZEduhs5QayQGw3FXnqNVb4yioY3F6sypdMwucoXu1YeKhPCftW9Cw7PLPpVXb559My2g33xbN3SuHUE",
  "key23": "3pk22X9FSncrbHGcjkwhXFiQ53Sc3z6nmNciw5PNmpsti4bzjogibwugpekTqfAJV9oYbpAw5fWjAib3UVUVzFCW",
  "key24": "3scAWRBzvNKRt4h3PNhW7B1YzEdsKTcqMFMG1fezUAsUxoyLqtoh5J1oaCn43hR1V6nSXdnKdajdGjMVhFkLiRPd",
  "key25": "3BirSqGa5C4bcGFvB4F4Jj25kBq7vMKbgaxuvNGQmVUZVSgJEYS1V7AdoCDWXFMVh1kNGUcpSidGihVzYoYwGNYh",
  "key26": "5Ku21PNicr2PWvEGjxBc5APxk3D9brpsr2g3MHQ4Np4Kohxhtzzhovi1iNdFR3drUsWk1nvqy754NfzC8JE4Mb3a",
  "key27": "488CVzsBQDQ2dgKjhzQVpb1T8kLdgL8gNwkvb8YHA3RPsYRnx5RMQvaAgvTnukfteHZcRQcFjLdoFgtEaiP367B4",
  "key28": "34WfTCG7uSgPeAQfzsJTWoSuH3FRyMtUDq4N2WHp4Af5D8WmiJXowCaSPyCwNmqMKfrjcJym4pAHXYSsuXEiQoMd",
  "key29": "2A6VgQDovr1aenNE7zFtrPJjQCifn8K5re1Y6B6i2KXZFkTYJ4SSgrjRi2jn1qHFVSHMSr5fZD6fssFAUxUPxQGy",
  "key30": "24yAKMMZRke43LTqBSRh9ZKKM5XUDKxhv8aicswdAWyVr1G8YGCdQ2TADA9X3HbXMfmsUfps87EXadvpSDwdeKDh",
  "key31": "4wVyeo6dgaSjCTAbDwotpsW1LksZwsmCUqWEQyBBMY81vaBQMZ47gnBoSGA1F1BUgKKSVQY98TusrWcgE7Ye5X6m"
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
