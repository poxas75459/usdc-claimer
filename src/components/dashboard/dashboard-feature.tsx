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
    "3xownvV4tCkr9A8ygfGzW7aajtrW5f4VduZShcoKX1B6YRFcjgp5vY8BPNNLLxvFyF8mvaixqrAEbBgQkaj3LYHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbrM6AGxDGsJUtXMyJ4645o37FNjt5HNHdchN5Hz36wd5PdFhURsTK1Z9D3jm4R7Ajra8u6tWXSL16MnQzKp929",
  "key1": "F73VNzjd5WDk124F5UHAQJKKPWq3udqUy7ELh9LCev4jBfm91z5pCUtEJH3UmugsUtJZy1SvNs8t8JLo5cVHNTZ",
  "key2": "2342rF5PPyx8jichpHFPEVKYR4p1YbBDNADT8kSUhMgGLcULtQQasC84L91MRQmEuhPH3RcY9McYrW9UBs5Yqwa2",
  "key3": "67gvgXh4xynbDmmgkHAUMfdLwNoPTjaHxfsRioLQM6zgj7qqZgWdDrJEZDV6PmBPk8XEYfgDzkSS5zphWrAMXCkT",
  "key4": "5WTeqjJoS7EbAMfUmzCwoU1HUGiGZFHGfyBRFa93DbrX9eBGQKNRQyAuPFNKn3z5imiRXjMv8oeWNHsKuXHnH3E",
  "key5": "64TR3m2B8sQYaVVnRoH4ogNnkRNyWFqgu9bisvWUSqoGo81dWegVZTq91L2QtfrcHEjBznECcAkEJtrHcWTJ3UQX",
  "key6": "3uqBUkRS84EprF1sYuydYZp6Xi6KhBVadHZ6AJvPVfQeQWepWCMjyqcmzdNpefRwUzbzoD9RghGtS1CLuEENM5XX",
  "key7": "2LAMG5G13iL53E3c74CpJFMCY8fdAXWt6bpzcwccC6yWaNnue2VXi96Rt85FtNxPqMVw6Chg2iciMCGa4zxhYgay",
  "key8": "2wR86z5AmVCQtUurpztxBmqrZnVegBkKNv1T2XmhwSNUzt5LQKPKtbg6jfsjrTaiMfhQDeT9rWmkiiVG9XFaLg85",
  "key9": "5VwhqnoBkaXs1CtdWBwJ7B7kE2E1KpXNJYT7SornQNFEZdyPVwiTwLtaAxnEgHQhRdkqrqpnWjfbryuPJsS19uET",
  "key10": "nDiA44jAhfvC9A1dbc7CR4APLmdEF7rR854NMrgzMzMYQLJY27byqA97JN15K7Vcm1dTt6rVw3pEBTqo2kW2JDC",
  "key11": "5buKA3nrMV3yyn1D6Rt6cTSGGmn3R4pFMzWMJH91DsJi91ugmp4D2DwDZyP5BXW5BUENRwZEWrzYwvaQ1kw6y5QV",
  "key12": "4Pu56XN7RPQLT69zEJxvR7qstjB63dHfJhj23ax8YRyumdrpU11KPQNPSRfgEZTfCKkuF7mFRCn6mUayzqw1P1rh",
  "key13": "3bfydsoFjskmHZcyD6jfkjtFyBZuFVL9Qvx6ZmsUQrv7J46Bt5WT5gqFog8rR18KpotZ1W7WqHdDm2Vkqj2mirgm",
  "key14": "Eps25JhbMF1JnSE7VHL5rGxKNYZxMnq1KiBCmFEtvkt8K2NygB4KV3wdJ7xwhR1wDXcvavZCAHZdVLouY1f6dmZ",
  "key15": "41XC8tQoUJRsMqmj2vbdT6ij2rjYZHXwhjMQn3XXqbCZKUimBBg6kJUVDQHs7dwqbYeN3mNgzjei6dkZRqBASZFt",
  "key16": "5bAu5rGmz3R7uasyPNzLCkGNGNpAZ9bVepSb7QbmeK4ueJwCTowcUMy3HKeftuqMPD2iA4XGjzL5G8pr9JLAyHsK",
  "key17": "3BCetnXN1zSqS6tcTGea6QwXfX3kKVbRmHi8ySjCRNAX18BzSRSrr2G4xUCdNmiBDwVo51jRocdmGT9h59cjZZ5J",
  "key18": "2q9qUiJkPuGMv3pNq6ArqX1yjv9VuAdFoRYBNEHL7ZDfjr1jiooy6cEfiMC2hJg92mUuqQ2Wj19TaiasRsc1MZ7i",
  "key19": "7nekB84Arbuz48zkpmGwTfLz2SfnB15N8y5dzwccywbHoy6kXeMuWrTBEMFYFQk887mWdEZTFFdZ1pRiYBoyxAP",
  "key20": "d78DWucWRzptVnM4YN6mA9LauhF5pHuzjCtGV3th1g836RVJ85K1Js4z2EtRiT7jnbob8DtzrhwBQNLYbkA5tYC",
  "key21": "3HLx31q7djpG7dYpbENm3vGGykRLQtV3ZtMMu7t5iUuQutPDCZH26E2Xm6r42UMtmMDSfwdZ9P3o9MDPStaqyKhh",
  "key22": "75uegFf3BP5iJd77C1grn671JToPpakJGm13F9yRjKuEfCrtiy6VzviK1gPNxSQc6WxyPiXX1h4AY1wRKqHr4Un",
  "key23": "5gwpMiaD3uvdCPqMvCsRaxBrro7ukX6GoA8hG1KmD2ySGENufrLad3PotXN9TAp1dDabFsTHuRNuQYomRY3MH9ap",
  "key24": "2j1o46CKXLoVzWphunqoo3RQrCjKFHVJEuq5Q5mE8FiQDFgmPTcn1J3V8kBVfcY5sNNBptpGT4w1cSPm5sfB6VGx",
  "key25": "4vDhK65JWs2H24h5GcYpTT3UiEpwsxrZH7Mz5ekkhb2JiS2S81DXc7TBGVp5ZvUh9cxAEzBAQn8CbCzLG1NWmLRR",
  "key26": "eV8M88wjKnNRQG6oJz82xhPbEFe8ssWqcEFibLXo6LYsxLfQTK3W8LQrHBp2zhoB7PvnuL5poSb5tLP5EoRQvA4",
  "key27": "35TfLvBxAgb8opDxvW7AXgLg7mEP8SSgMEgzFJNzpLj7SDXigS89Jb1xxZoH234HyrCpbjFXoz1LYHJ5wAggP8b8",
  "key28": "2BHBfNvJDXsp7u2pzyWuqJTe2CbV52nv5kbtiKvyQ1KME9rXczNswikgfQysFtjYoQ9153DMAdypYEgofM3nNsLE",
  "key29": "4rxkegoZT5m1Kp2YDUcCMsVaucBCLFqK7gg7ZJmVKCjgQYj6mPZR7GvG4r8G6tG8TgQaofwVcF9NcMrzJzocC9zr",
  "key30": "m6cd93e5tEMXaeKN5WSb62i2A2kwePYZEdLLM4vKYHbtVSEokCWfspBjKS8W8rrDUSQk9jkr8EzkMpSktbwzt5W"
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
