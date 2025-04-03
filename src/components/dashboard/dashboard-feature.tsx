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
    "QbdhSy2j8ktCxaMAq5WPmQxoLou5ykVEBzoWWGgtYzwKPc196jRs77hrkyZfBAJhVCuiTt16dpEymggGwCSQL6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adbTCf3C35d76q1ykw8oQhrBdfiX4wuzStuC4oDbbczES8BygDjB33ksDThPrJbzPpKGrv8EgFkezZpWFGZhjE8",
  "key1": "384J5Az4t2vB3wd5DdVuWpRNZHZazMSq5kCZmbwgoPk9g5voPWtmLAmZMe7PJmreEghyMXdSa32hfHHzqaZeMVUs",
  "key2": "nq1T7csNEWBAxtonofq3va8uMbKtznQM8J29tdgiwTmjS5vaucedhAhAxUQUBaSc2jqagw8tefjaen7Zk7FmuNq",
  "key3": "BjXmxFBKWq6aZqVdo8huX749nqhvyk9mrHFdB8b5hrprtYdDBd291r8hpUtTQrZJo7PNUwuuU1at5KH2j7o97HN",
  "key4": "tcM4ZiFAZafr5TSk8hbEMbPbL5XHNekw8tUBbjpCPufyS9GmGx4e57bcEqrMVaBqy4T69CzPAXbMsQ1KyMPhRdt",
  "key5": "LSZA2Gr9ewexZgtrssNZSW6sBETbx1hkashgN9uKx7vpHGUcYU7reNSse6XGKze8ykUbXtgkuDHCuXHjhCCNhYK",
  "key6": "2rLxDZt1shnjXadyCYdCADSoT81Uv1mELHiy51XgCb1A75BAjhtFdGXMsVF5w65DjufvWEH9zkw841zs2NomrS7Z",
  "key7": "62YZo32rvBQmxQunQBBQ5WhCHexa8ktjQwUUeZZHswLF4S4XUrhsfdCPLUk1QGLBt7bzvPRk49QRsXTgK4tX93ap",
  "key8": "2bbWK7J3xq3tuzxNZzf3BcBLtxukscKRaHT9JEiX5phrRBVwQB7mVnMJujbrQ85bkccsY8en2phVRt7LoZJpMtry",
  "key9": "23PUPmzE3WkfDn3DERJMmjRGxyK9ZXU9YdpC6WVqXn3YJkGorvmNhwKh5kwtiL3MVxWL6B3u4943Ry4iygAZh2c4",
  "key10": "omvQj4CEGrJwv2vuCKdTYdCjvSENdKxTViV4KM6wJAtHViPemRXyWPQE6uzqi47fFAHNs8UEuHmjR6sfRkUsyBJ",
  "key11": "5eXgdDSrdRvjqxap6dY3izNMCT3xu77TUjAdx9SWYh2T2rg5xHahTxCVNqhkvvmPg4nYsZSBurKPb5ru7REB6ycX",
  "key12": "55vHDdsLbMqquX54qJjRQwv6WfFuxB6fPVzXc7KzicJD7EcFnBhnK5Vikvc6aej2JXJiqFF5DQ1ykXpoDV6bGTZp",
  "key13": "2oYbiECu66KP3aY2D6mkefrPpJGCKQZmTBmcvbjqs88gVnU8fXfEnYGHUH1EjTAPpNnvHf4n7gebRzjaK2zcr7Bc",
  "key14": "3Asehx9t2cj16KdAfgwtCw2qefdS9P5sQRpEZA1tQEBSudidFQP7AufCCWh5qtZPkQA3JPCXsB77xGR9nuUoxs6n",
  "key15": "5NRsw28EFNtxpmSiN8AEHiz4vKwVPRZFCZLUhQ2or54svHFzkdKrWirW9qW7wxkxxVzSmbh4JRSbq4tVRw3vcL4v",
  "key16": "5vWXpeJdzqLUahVoMTzyiqWgiaj3B151Cm3bSnUJBqKi4AP4DFakG4u4V5AuvWSAMLpbZgt5nBpDupryTcroomBt",
  "key17": "46oxFBqHbuGkxCGcBtTzpyvyDNAxfLC8mDpBEpvqWnvMEU1Qbwe4EBYQC4NM3GXAzNmbo4iZmzKZTU7xHkiHWWhA",
  "key18": "2UbswqoNEM1dHNQcsiAg7Ra4iujN36ffQTyd1rZL1QsfD69DL9x1sBZ1rCcPEDEqzf7zdaV2gbpmMqkeHu3vDEYb",
  "key19": "3GXLv9zKqaQXf9es6ic6SuwPaVc3cW3C3PQgx6zwqCRV2qmZwDbNsG5emgwa45wRjuUPvbePXniGNSJPA4sMmUhz",
  "key20": "LbthdNXEY2tUwrBqHfg5KcKPBGt9F1V4VFpT6Sa8K2UXErKbfKYSztpn6xkBZBrLzgfxnPSMTyuJ6hMZLptTY8s",
  "key21": "4Kd8sZRVkCw3kL8opq5VQAZGnfotUzhMQMVAk7uvL8EPoGVmpNgTS4PNt3jGp1qY4kwDg4VMjY9fNqL9ugEh8vqG",
  "key22": "3Xu5aJMZ3xrqwnEvQMNdC1MhToYQCLptaYLoPk5QtxFARY9MftKdCgYwCqmfUeA44WkMsiroh3GQpMmRiaxgyzXo",
  "key23": "33e8NuxvBiyHsAeaG4WF5c9tqvngS4EHii2BTp973ranykx9mmEYvnkHjUwjtYF2ATdoMK9k4MUGojHbtS2vVRf5",
  "key24": "eugFkrD5oU7V2L5HNRvqkk327WY4CZu5FKVUuwsGZnT9FK99nLZifdZKdXb4afa8wDTahZ9uqkaBv2DaT5hTbpn",
  "key25": "46RZhAD9HhdCb11SB35gUM4U8VFn6UqtNBqMPfTgdX1tGs3KJMv7s3FnL6QjnV81q6qaGDmfran4msDZVdViqAEP",
  "key26": "3kED3gPLG8ep4UPmuAA4So6qcitp2jA5DuJoUTCgsghg8PrfzvrwQosPQ7uktzwCxBssaYHqW3R7P1siQy5C54XU",
  "key27": "oMUXVDbgPJMYp7newcGocQ3qbLtCXG9dMSTy4aRUvhEwHrsNHoXuJpy5SykDuxdktr6sGzToMGFenNidQmfBGBJ",
  "key28": "2FCoxSTWb5YbatMqBZ5854e62ts9bVxDtr3XwZTbzjftGvCS8S7YCKUhKTdqhsd4aV1Mk3BkU9zQbyUZasZJFpUK",
  "key29": "5WkkRqP6Qfo12bNV2H8dLJpcMUt2R7nm5Mn1fBRvVkvisswCmNXUTRvp33hEz33ac2VRHvvgQRDcruh4CS2tYXU5",
  "key30": "43F9YJvE61k6UNrisNWTpQsgSuviaUgnrLPY9yNUMmNYfyJPow3FSFs8q4U4zvYHsmgCMg67kUKciKwLofzEH3Pu",
  "key31": "2ZMzAspoqqswSLPkjqdi8t1p6MGzDyesAPZWDtWYkgWsqFfTsD1jzHeekAPFpVZXLi8agxZ2gZejHLAuLpAEYhqA",
  "key32": "2Pb34YS2fuiwg1K2c9HQZSRM9mASoRQ7tfJCSbfrQsfD2q5Y4xjbbq31aKhsUbinumtR2UVPimpHp3NmpSsFpT1s",
  "key33": "51fk4QdLw3Mru4PX26bxATPgy5PfxmgCXPToXW4oQCHi3M5uR7HK3XQ6SepChcSeAmFjETntffSoRHP2hJCXR3p2",
  "key34": "DSEuiSm91yvRaFr7U5hAvZkVdTufYza4CYnVeSdsHrVGCkEQL5cqkovB9wuoXPdL1DuMRn8JvR6KS2RPsxwx8u2",
  "key35": "3kKAnEzjfWMcZqPgw4kXjLh3vmeEZEUmNpvKJyE8emWgLjrArSyj8Q8mdWzicU2LsAvjaCQCegJ2dnvaFSnzKe2g",
  "key36": "59bpm53uQeiDrgcoqJU1qNjZSSBFU4Tr47VHjz1bzVszRLvUJ6ryEZKjUGfTbhCtXbTvSJ67rEe4cg2hbtVY4ESg",
  "key37": "Ck9ve8BdkwRSZuBRttDrpNyMfLqZujRD4gpqUqx9pxCmCZwYqhgBGERm9xEeyJQCryS4Kr5vTZtMHQmPAoVeB2q",
  "key38": "UC5GNypJTGVYkWjRxdWScPgc3igxwDo7QJ5GX4hjbD6mrherkSR8WmEn7R9QwxdGyKkqDT7aWmktKJ1ARBPgg52",
  "key39": "2o3HPajJzeGzifMbzTvjEigpHtAV811YPuBc7hTxnMGdTNfaofzMHZMdTa67Q6pY4mEky4KNKtdkBG4U5vXpwyrL"
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
