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
    "4XStLkX3WiQYQxmL3qosHkAbk95547XyhVLevuETpkRy6L7stwKCyorJjZmMqppSRLFaTjuRvevh1xy4wV6Ad7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UtCU2K8njp7TzqH6zJCXADzjvKsBupDMj5Vbcmp9tpMmzVxVtN1CqJp9PWpLeEJaEWv5EHNoGZLcVtxdb7AxYuV",
  "key1": "5KfZLDjtrEBCszQ3eAmd5XbvmPmCbd9EChNQG2KxcB1r847DtfLqyACdVRKBPvXqrVYoVu49XMk3rMs5k6Ecwdmb",
  "key2": "5GyT4HCwT7mYy5wBETwvgbLDwfCxeHJHhDpdi8SeHLqNGmSJZYf4d3jwwcz8BMRBYEELURP5n14pvZN5WM7Rqxvd",
  "key3": "Dfzuo6yYTATqFcjfstNvC5NRczsNrvLTbxTFS9c7B9kr41bJtt9DHXqAeoMBT2omqzQYqXpFE54tREuM1bn1QsP",
  "key4": "NGczRuEuUTYusM4UCVF9NrMbmfaNdKEtMeRRF1cC4JbZB83BZbDgSmwtxUWPCDKcZHrE9zXb7bBsNnco7C2Drn2",
  "key5": "23ZweMp6a3RYbmq9g6q6XSWkJVBEaWf2dz6y7iQZFqPcr58EqACQ7zLWzj6SUU5XwpqZZ5jb5pSKqZBiKpJHfUNj",
  "key6": "2zciGTKgWoV5qXsmbzEoXL4fcpoL8ds47A1uVVtw3N3GyMoG5sjP5mt5NxaRqf5SV35wSWitenjjKd7r49Ax89os",
  "key7": "4Uo8ndFXC7Wfxd6YEytFR2TvWoZH3tRT38PbKWiRhf8NVLj3onXaqcTHA1a4vrAatG48JJDGR9yNEbQRfU6QWHN3",
  "key8": "2QPjbMx3u85T3iLs1RUjNqJ9thsVL5jfiZbYr5BRjdKawQbduVeWuZFXZrNZjCWX7e66sNfhmTuZDwbrnx7yrwop",
  "key9": "3tcw6mvjnufmkFc64LtQW5u7zEs1AgCHkd5vj513TnqDC5SDszU6N67d8uxhkfChhYyZjmsx3V4kM459nsZoXSWt",
  "key10": "5ZvsNMzRzvsA96TrZUZZVfz1YPrisgqU4SYHP1PMo838q4RABrp3YSMbSK48aZwyVxdMcsuUTTDvWmfmC5hDn9Mi",
  "key11": "vcPzjELbMfwE7zBBywtrkA2TVcLmF5j8PSsoYcLDBJeCxayU7Vkqx86yYWbvgrNsTDn7KhT9VrdR98HQUp6ffPS",
  "key12": "3WxL8GrhptDYWT7kvPHg2ut1mwdeZiv8XgS6Am5QRXF24XGosXASBNQB1kZm3sXM3JXEujYxJGVGwoS92L43czUK",
  "key13": "3ePFxo6bV425ME7EkorAc8NRFrNm9xJN22uDqDJawxgSFXVbMJ6WWpMaYYWup3jibo3sqoHu5USt5jmtASF88Fnn",
  "key14": "4wmxqkM8VnrPNciGAhqqwTztS488P89HS6WbinZ2CPyAWmnW2QDwkeKTHUjURinsKagtoAgwCkEEiYNyg92S1A28",
  "key15": "3sgco9Kejv3mevRmMY2gH8G9j4QvCgdrYLTRiG4zY2u5VfHkdzMoTvnzWhLJBi2GnphnHJqeBUrgmfkHB8pv3DHT",
  "key16": "CKQ15xKwz7uV8say36iAJCSEtmRtSyoYAbLEvapprbGfa3owSf831G1jgRCutGcmGva3ByBjSpVxq5SUmpY1Us3",
  "key17": "4MKkScZzCdiHxvh5oSUtDAzxUShun1SNUFukmgHB7V1DooXHaHXexzumJdLrE7Wzz6oGNLzNGEBrt3y3U5X7aMtM",
  "key18": "4XPT3QTJnvnZDeGwXPgQ2X7otiVWG9ypSkwsXFNd2SQYvS4VxEWJNB2hLw3JRH3DguM4GfpnhHLrUk8ca6MNpRxX",
  "key19": "4bm1QDc4hDH1QdB3iNGqNAMesYGzzEp8aDTjo73PfwCjEZw21pRK6EoDA8FtRyaht2x1Cv3tPjGzi5NjrP1bzBzB",
  "key20": "2a2RhyRK9CX5GywKZwLtMHLt6DV6PM8HE47Ly3vzZzuoP6Ldz9DywVwhZRdtPPXasRNJVJSrNFmynbxUEsih2QXV",
  "key21": "4oFozzQeF6wGjmm87RLNRy4o4Wzt5E48dAeogSv9p5utuDfV6oDU14QemXGNoLN3KhetSbcvFLWHGqVw1Nj2JM25",
  "key22": "5ukHM8pKM35CMekik78yaRz8bszoRYvJssK4mLndMBwGnrTSsLwixrUSe4yUrGGfcHS9UGjnLfDn4YhwEjY4fbZy",
  "key23": "4GX4qLWVtcGkWEpfyzJvf84whZkrfbYV3ctAQCfAHBAowCU2s5rKKS81ebCJwCNNrbscKuusSk6qEtuWeHwA4LYZ",
  "key24": "3xFY7F6JcWYkCZSYVkXKabihSarcwkwGcee9S4uTSytKPUQEunwGvPFAK7LwTxGB8ZyxadgZguETPApwtX7QkJAL",
  "key25": "5tS4vJpsngS9HQivqEqSWirZZLxcT1EbVMiH4TttQcvgqrFgM3J9x9PE9174pH2F2sjt3h3qd5trxzn8NZrjR9SA",
  "key26": "5LzjqykyaJj61yipjiiqsFzryDP5BVJEzsnbUDPQNf7side7UyTngnK2fN6aYoBBsBjVxC5hUKdczYA6KJ98EAhK",
  "key27": "5o8NMTn9SsM2sTLv95iSiNhMmMgkLCr3RSHi2qmpkm8pAC9mbXHTS7Lh6LsCuMn74xiDA9XqFUdYV4xNR75tTJTp",
  "key28": "3rtQQnDs1WceoHEwZLFb7Ym2PMdF1WzR2KWYTFgjQTBSwptyyayFMJWGVuT4sZswWfJrC37XVEf7VQe7wXRDgWag",
  "key29": "5gLW3KfzXLyY33aDGZzUoY7LDV7apH8DQEK2uBLMYFji9biGHtqB8vNfYdvBJm5AsmQezs2nPfz5fkhJdLkNVTyc",
  "key30": "5ESXr2XKAh2r4vUz9RooaZhQogdGnh8TBekaufFcJGs6NdM9CpA1esQTaZ4T7VWnA6XRNd2NN14TkiNxTgwExpPS",
  "key31": "3afLVhLcnoGtw6WXv9iZtbVFCTto8APdZ8AFor2zLixe83BvYMLb73CyLF2qucjZDHSkrqTHBdS7CXtVQnDy8DAi",
  "key32": "3KoM5hGrXf9khfgfKeNfGycLegyohnEuWKxBet7NM67oShzLUbk2HQ63vD6P1246HXEfVgWCfR3FZqvnB67JN2W",
  "key33": "5GbnJFJ1HgoesDKht9sMtaFReaeiuZFTeJo4DBHG8JUWnhRdJnBD79inyjNSp1VyjrUhgYQ6YNvGAuMyCAGhFprF",
  "key34": "65HsYkLQ8QcxM64GwSb1sMcCQDGxJNzvWhu2YAQ6a7siH239Wqx93LbMTELvpYQcUxruGDA1uXX2WdF7X3ChJh6j",
  "key35": "PhyBahi83Y53JxFVXpCmFUko8YzyWsx1LNDjBshWdrA63LXkdY3Gu6Rqwfzq638q3mm8L431oRLFTBCPgRKgN5J"
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
