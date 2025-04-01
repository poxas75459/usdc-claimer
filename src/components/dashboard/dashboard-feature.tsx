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
    "3smWzU3sKGPnSBUGLRiwpqcongoeJu6bpU9GAMxTCDM5HfAHTtjmL3gGWdPSuiSq9PHxDQJHpjdZanj8CBvZiKj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaM5huvCVgsnpcsvLhbZ9zaqBLJVPotq1GAWpjUz24K34d2JKBxHNSv79Ss723gkAExmKo5F4XMNW6z2CWb9bYt",
  "key1": "37yiusCJSNstap2rvCd6uodwYtbZYx5rhGp4ef15Br9TPf9QaLYiWi2xwWqmjf1kVrWhjv89FfaAcHyA7S2Gc4gh",
  "key2": "5ggME6daG6hHbUiGdYMFYCtky7pEcZDmYJJ8L7AatiDdxiVVLJCPzFoZ1WUCqroNRp7CQNaZdLdgyhJiZSKCDgYq",
  "key3": "3JpVgkKtxkiUxfP8YK5hcp6S7NwJpG5e9xET2RDMrGYfRqd3pKhDeQebsLKzVa7X9y5Sm7VNa8obuQ389TDaRiDH",
  "key4": "3p6Xgh8Vk2zndMwgfrxrWo47D9HKsaxbVJ8yHFYXaJkhLpXB3ManDqYJ87GiSzqkf7pohp3EdYY69ppsUAba7m83",
  "key5": "uS3QDHmtEYcPvA5U2PJg26QeTFVgMgpQbip6FSjjTHQEf8STZbqPugCBddVp1Dgctncb53K7h9kc9TNispzvPaP",
  "key6": "4iVYstomvSimFwAJeaxF5VwbJcTsR2RcFBVVhyu95PnfTFbt2yB52AJxKWo8Hhmy93ZbuJxHb4eSdJMh6n5UVuJE",
  "key7": "7QVYFshyiUruhfKTFapWqBqiwc59Che2SDxZftt9ykBaCCjUg96XHXQb2p4x2wL4EwMtcVa37SWjF8qrnXBAyam",
  "key8": "HZyK8LP17j8fvBjiNhHWroHV6sWQYcPCD1haEME8ZbuCm5c3CvzhCWgZHfRuzXBxruXoAPhCYxFFMdDetmuXPFk",
  "key9": "2dAh1fuwEVRAYmvdU8x5pKCLTq38mCf1HSGxz2RfGBeRPQ22y5ughb8v3s6CysvGSdN52o6ry2fT2QWGEMwGyby4",
  "key10": "3poL8tUc4tz6r4iNgJEzGFGkZ5jQpww5hJGcfeDTotikmhmFXfzk6DySaNjSnsvhtDWHwVCpXEqWY73cEUkGQeXn",
  "key11": "4x32fV7gEc3YXszoxAC6KL5TxHVJarBZceGiKdQwsJQGJqvxP8W4EYJSCiNVUGYjZgt2oe3ssrdexTZ4wLhhArRW",
  "key12": "3LSStFL7LgC1pkMz4SkzpBYibUPiijkucEsWatfhpL6edzp61AwYLPF5uZ51twyk27xvjiVweLQ1KWMQM1LrDm5K",
  "key13": "3y99cxQ8HSz3ASFDHjDeZa63PG2HjezX4anHhAJbskiFQxUTwsB5bdAaiQYRaJgsBH18Lt7vpCKFGp5QezN7Bh4F",
  "key14": "5NiKsTbAq2BZSke5pmv7qvQTXT6yK2Bb1CGBwm7NCGbvvo5bdDZuaMoQ5gPSVHrWrWm4A6Ry2hC3zdrEyHUK7LFa",
  "key15": "23P1u1LbzVg7vPKbm5yGrxQpWdfHMrqvBrMAuQ4ccQnzcT8KipqvCD6h8c2iHSkm2qfaMSgwfgBwX1Fr1ui12EVw",
  "key16": "5HyZnLuYNSqBEg3otFUMD6v776LbyQ1837fEfkr6uzXouhbxyp51zQ3FaYzEadoA8zt5g6bDtvuD5Pruvy3M1aQE",
  "key17": "52WGTUZqF8AyWpJVES6k3E65g54ZZG6tP8fQBjngTbfTAX9fVSyw4CDLce2HZhRDmvwe1ehqYhjVK8x7LsQc9mF3",
  "key18": "2KSFxU75y11WAfoLKHbmurJCTfwrzADPmJLcVCaiMdsz8E1nK3WT2VDT6EjY157Nm5PT5qGKMcQLrZvYwnPN8cz4",
  "key19": "FBPJrHJzDDWP4CkVjmpGU56X3oBZPFackRu9RzLwxp1RiBeUZuTYD1CtXcMcamffkGbv3oCSuTyffBSGTWcMKej",
  "key20": "38Y65e24nfPTmi6HDbdBoiTXHc1TAkNgLt4wVuueaQJ3MQR5erKAGqtebcCFtiynqy7PoEZNNgXakEppNt1RyecN",
  "key21": "43K2ecHsy4BnPZeLYeXwiQYUnn6GMojJR3BoHMGu523korGfbFR4LFJv1t6HypEqjujArn3qdVtpCcHcmvFbjdMD",
  "key22": "5ccT6EamfmAVHi7whKRQ42xuZ7TSCDJ3BPy6TFmtTNWDZFELuWDMTmUopYnpzEccJcx2eDtjGhF94R1iqHoWxcy",
  "key23": "AkZDNfsWJERjx6GcTbCidHx3sDFsWmAhjtc2D1eMruNiJK192LdpLmFCHJ1irrvwDJUSzXKWzTcbHqpTKSpNNnM",
  "key24": "5YP6QMpiQvXpDLm1kymqKcgYG8nD4ehvvkjYzVBmj7QvJtN6VFWeNDzWmQdUYbweptwynfawf9N1vofZUZYDxxvi",
  "key25": "3QDUfw6Dhx2KMpK9juP8BJvS1N2SXz1mxFUrAdiXipbEHBwN7CcECdz674w6pT39vH6nubi9PheSCHR2idEFzXJA",
  "key26": "9St1VUMoCyaDhFmgHiqjYc9DvgBxYwfFjDM3ZvPQ6Lbu5PzMbHh1bnMZVWiRrtY3iyAYkFmVLMM9RFoTaw4ndeX",
  "key27": "3eFz9r9GWKr2QTRZUaNoxp1phFEim1wWY9ye4CFo9byX3pBPBxauW5DkCijnkKDewoeb8jiyhm7qdi5n811CD5jW",
  "key28": "5sFoTopxRpHaXcPrdD6Mcgvz3n9C8Uz8PLDQeSPh5D6q9U8ToRw8FAzqexK1sdg5i2V99NZNE1FhitTcyhEPRQBR",
  "key29": "2Ykv1e9joGx8F3tqTuyWCHssJqnyLoHnzGAzGArkxL39dQNsJsNvF85jEP8hsV1XkPWY1sShudr7CSLLSRKuBngn",
  "key30": "3HHKbNnPwwrY2zBWvYjhdD44h5KmFyRqTmFKwLuuuZdXMjYvVFaVDuf8qzGqc2pZupMbz3qXtu9yTXmc15g64tqA",
  "key31": "5wTPtDwMb2stoUohN1iQQyHuLBk218DTTpDruFsQGHomo7h6X1CbkxemxV6TqRwQCebQ7D15zSt6Qs92SGqUUXkc",
  "key32": "XrWWRexcpUAoaKuXw4WHdnc6NB5maBQ9Vd4RwSTEnvhe3k1daTQQxtBLdLHuf4eyi7dKTm6Drc1gQzYXreGnSS8",
  "key33": "3nouU5Pd2Crr2yVWNjChfNvA18c1XFg3513vbseoexdEx2TS7Q9CcdePyaWRyg2cXXnXQC3WPbpwosZEJtipqpqQ"
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
