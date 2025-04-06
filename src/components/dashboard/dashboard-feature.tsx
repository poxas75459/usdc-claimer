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
    "29ey8rwWctRncxg3TuXdBsiijS4BgUEj9uw6ZiBFCVTWaSaVdpo8Gwy6QB4Htex8t1wYnhV5HQGP1o8SBZXkQTv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HsppEqCbsNbhzkBgQkPxNxCXB6BuFJDCPganvbynJKqikKrYMBJYs4AmZ4ZmxiLaLT4dFj7gRXaQn3YahuvagZt",
  "key1": "2QK5DSkakYR4mAqgcJfs4crffBQhkqGC86sJCWGcNpRPTS8mgtNNJDirDa8MfTjwEH8oVBESKW8VadjzZNHkaxAr",
  "key2": "4tjfMMWF1sd5sHU4z5mhLnECFFdvL613Miv88TkGyUC2Q7djcSP6GYbupJWyPwBgHSRPkH3jaufWEMdsKrfUBNRS",
  "key3": "FPAnYZL77E4aDgrpovtMG29z8QHthLaYCoThy6yiPjwyKiq2o9mxfeig5H3stvdkoR3bGY77RMwVkWgtpdVCHCQ",
  "key4": "4x98wNNMh27pbgzBqsXFXc3XKgQEuiiHsJw95W2BZRuBaqnXPw5GZFxv3rujDE3vHqgGtz7p1YztMt2n5wExB7a2",
  "key5": "4c8VuYrvz7EbAcpvt1eUsjUFsGCoJi8R9zmavpPVsZimTeb4zchbLWcVKBRFywZv3kf6fkxi41wmYffReDyGV6Vr",
  "key6": "5aWwVE13YUBW64h7qeRNvZG9utAh8v3DKv1n23XCKVYh9Nwdsy9tpufasXLrzeVZh3HiSrPs1f71rhLK5M2urQtP",
  "key7": "5aXu1FnoA21TdVzFDWcmtz4Cn89ehDkcZPzfBnNuGGZMsmjnTKV1PurHi9L7atLQtELqEZzvYQkybufyV3U4kcdb",
  "key8": "3zZa3wYgQJmFJ6DS8RGmePQvL7hXCWgX2SX25AjsmQpdkdVB1boQDXDqjnaioLbk9bLTwQrEhqz9Vd6cMQEp7myZ",
  "key9": "52PSBX8KdP5iQLo82c9WuRYAVfg7ZoL2xqkaVH2s5cjLPMDswXcCEmmouQqnNiv2NZSNuDzxAoFBVqjmQDVeL27h",
  "key10": "JLN6Mnxq1wUcoVivr9bW31CQG9Sat23knq3ZjiAPfxrjFSS8KyDDuuqGZe7PpqUVqYxXSBq4t1sy37E49vMZFqb",
  "key11": "5ykPYoisWPUgsvhfpJ6PEDsPU9CWtaWTBzkr7MAfaPfko7vxcmiH6ASCavHRTKA9KmvDA365thBXbwmoda3wZT1s",
  "key12": "2qm8vev4HkEW34MEn2i9qJYBpmuyFEUt5q55MWtaaLVn78LaXMBqsRV1wHqJT4to6n1uXYCuCMiqdnaKJ8rihTyw",
  "key13": "5c7eLhrKejptdBknZgYtKrnRGEaM2tiQ31MoTjgCdsBxDertBNfVa4U9Em8hX4ibKHbtuVucGdrgt9g7xLyQLpp",
  "key14": "3a7XxBewvkQNhXS8zFR8tzEPQiQPZQm92tG5RzPLgRyM7iGfYwS96nV7yuHEuur1iPQYj9CwxQYTXdLKTKsj1RfX",
  "key15": "5cQY8th3y8559bgDLrKMfuj63Fu2cvEN6iCf5v3mnot3HvcaRVbEE2nnZxiCLjhCkBWYZyEsNpdQTtQKqfxJ38ox",
  "key16": "2jJNQBJLBYgK4AHCqfiJ1uemUMKCBsULCp92Bocmw76JeQRm8NKBFQboDVgFLmMVskQUHQ4XFFts2xuQTHHPQut1",
  "key17": "Lc1Ra7rb4u7c1UM1J6Hkv93yzTiqDTbqvmtgeQDQ88CFu7JDvpPFgA24HPXNUyHmABLhZztMCby5sdpekR1ku9S",
  "key18": "34WRPJNEspeVaRV3QYgo79719SzbKZiv4qmXtHotV5yX1eVtkB9hKHZoSJA6hiuVyvdycyXowwo8vAjksMqBE4sp",
  "key19": "4ifhw1WycBjBDqYbh43LChLVBSP8aGi3x47LT3WGB5kBBssUcWUPy1zYdpwcP6YdkRty6E7621Y2B8N9itTdh6jn",
  "key20": "3JVSyEFdpAUJBHGqLQoQA197jEczeWUsF49HTuFGyrqeu3YT1dbjxZb9wYCEkj93RdEjnACUvrNLDUiVNZ5aWP2B",
  "key21": "4yUjybEPwp8Nw21XyVfT54qmBbGaTw9z1g7W3c8LhbJjFNz5MEq6D57pVBnsZVugSxNkozsyUc5zDAqBEmdJ54fs",
  "key22": "3EUnBFCXhPyNQAWUTNZMDfv2RPjCguAxB89ucHnrdkwYtjP2jhqio5v6hK89AT2sNy6BuwD6fjNcWy1DgKgoQQXN",
  "key23": "3LBn3PzyFVxYbRx477FBNJox9a5oVUXDJAhq6zFHENvWBVXBb8Jc78YBPHHHuz9iZMk44TJW9PuovVKeuKgD7N65",
  "key24": "q5qQRRNR9KncAf7n4ccrW5o66wuvKx6WjPihUSGuYvTLnpDjMHTwjwAw9kGP8DEfbSFnCikmvA3a1rpy1sP83hu",
  "key25": "4BV2G2ytZnvXCxT686pmBKH1HTpoaQkWeTLk6YzNgZz5cZwfGQmmzKcmqNfETTwa8X5ZNTS5QmyUSBcFn8DbLMiD",
  "key26": "5vLWDErSVH2Aecb6hCQXrPJrYhZKa9Ep6sCj2V6PZVPvZYtam4w56hbTt1UNqayDhZDKXxYbukuZ3qEZy7aq7Nth",
  "key27": "3z3TknvtzvaxSTaPSHHHHabBuHj1EMHK9qyKEuyUAdY1F3jV52u7K8uEj3Zj8HgsZpawzDBxpkBumMwZJ6rTseJ4",
  "key28": "3azns5u3z8YnshjecYZG6ttKy4jgwTAi2fG7CjBXfzw8fNEG58QXXVPuoVi9B3bq9v5hYBJuLxufapk4FfBnwy6t",
  "key29": "4p8nJmUJrGv7TCptkn4zBR1MvoE5WUQGanCYoRLFQ1McahBJsouUcTMiJNvapzKmTgr2BJmTmMhv3ba1SkchCj2R",
  "key30": "4ZMpKfbwAaJJpbdHYyQZZ4wRA6ViGZUEy4bf2aQ2xLpidYL2pUab7JqiDdq4uLkZ76frQ3Qzu7wfuSV2hRoCxdrK",
  "key31": "2PrTq5xm9PUq7sa9AJRyngjLiQTRc9YQK6ux5UqdMXzLdRk4woZoerDwQfm7aeRfznYhY3AaMa31rj2qe1BccT9V",
  "key32": "4rnWUPr4Vf1ssVMQKW6YvgtFkvsqRQ3s1USCmgMU6FpkGnYQ7sNd6FFQiRKYBRzMp7t5LdrgE5LLWsRZsNDbBmLu",
  "key33": "4DjEmbMMrGgmJ2QURq53es2THiNshGxoVYCgB7FL4iE4p8ZFwhMqVCvrsT72hXKhSje58M3LEq9GrJGoiDUVfeuw",
  "key34": "4t5UAG2YSNW3hWMivaNiiiXZokWhEFKHo8mYPuPrUDEYkFpAomPsoQ9c636LQ29z4ooCGe55Rwo27D1FPHoeT79K",
  "key35": "2f9BoTQsZ6387xaAhE9rELEHT2cfUgF4FXUsK8Ly9fvHgWAsimNQCRhLeCDSk8EjVNrzHNHyosyLXC51x9w28f31",
  "key36": "5BGkJyhbpYB56CBb7u5A9hgJnFFWyjx1AG1eQSHymjARWESc6Xtt2sGpfcwoocNifYpcZvFLhWcYTZ3oENLfdcmD"
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
