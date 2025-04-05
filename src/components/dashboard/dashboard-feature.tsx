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
    "2ESgPrbq2mz9FqrnByHgCchW5emUvjj8RkaEamNfVDvtnxwTzKoaFZYsvbzEwCPQYgZzwkE13qL5k5P3KRxCQ8Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HM7uyajA6EQtTLehynqkjjrywwZKnGFNgFZUKLTzWY7zhpp7SBZoaX6CkjEceFZ7CiaefppP4pM8v5t8JabXuQn",
  "key1": "5vp9Vy1zyaCuq3U889SK27Ym6xzurGbE1FTjtaz4qYdznxRox2AfS1aynLqp1xuJTJ7gRF4uR4mm32xY6ge358Bj",
  "key2": "321vhaNstnCVtfrFjmBAqXCuegoHFPAoogBpURRXDgWG6e6RZDqME5dRLFSr2V3R8gCQ5RcXZLcaZp6Sry7mqXxQ",
  "key3": "3Ft3AfnbLQqYpesZPbGo3PLcShUu83LY1FSWSNumpZnKZVAvnNBPCuSDDNn4Y2dsfz8YSVhoP5KsQR2BKphGcoFm",
  "key4": "2CtbqVPgVaLr5cm1VQxvDwLGcrnP5Xc2N9H4TiGBufcByVQTrVABeRdesUMUow1dbE2zh1aTz49gZeHG5Ak3JAuo",
  "key5": "3KxgFxdGo9HXyg1a385p74w4g32mQ843MMuenqtP8W6MvMbnP5MeDAu7P9hw8KXRuQiEcXknHgQ7zKKBHi815Fkt",
  "key6": "U3LWoaeBzjncGR9fopTUmVqpwKJhsmQoKK4gP1o48nsoTcyqfXkByywJnM1x6rZuv8xu4jpEmPB1duBREGSaL4A",
  "key7": "V5ZAMmD4127rCtkMcW1Jwag9T7Ss65jHvuZRML6LFVW8ppp3bEmUQcytUfmxxD2h4V8w71z3veoCx1vEjq7ug99",
  "key8": "5DALoGrxvus6GMtihyMVWf6h6cvpwNa7nZTPaA1x2JXFqxiqXs99cFdb18TWt9eLpcjPDDiPXUDvEz5NDuiaeVQp",
  "key9": "59UPEx7zBa7RHNYWwxbhEhTbmSKCPt3VStGUozGNdKBjbNg2b6Nv96n3vWJjJREphT6BP4mtyGfng8fqqpMrVdLd",
  "key10": "2S7YDDkT1GBHajV5Tfzx4iPN9nVABmavvG9bcFCii5ysWRL6DhEmL9ewdhkBjA2NZWnPCyoweXLtY44h19QZA9XE",
  "key11": "4TmJrFDsB8YeFEB49DCAqJQWnyCU5JyC6j38MKotsJSbeYPag1mxANm5sUBdKhKfQiNMC8Who9udgcs8haDUiuP9",
  "key12": "2VXzyW3dd7L2ACV22GRyDGQ3keUPNqqe58fkLTnSu577QxMq6WpQ55775ekgzySiNqbpwc3zJFfQ8kASfHkPzaCq",
  "key13": "2FFxHDMSjsaBCSUvnmDMzDuTpsCjpSY3muMv99eSk26somCxJYhkQTAtZ1SE7Je5itsKfChiVhQtPURGoaWb5seZ",
  "key14": "g644fxyaKLoLHVJQHuV5SQiXLTn3HGc7TjGbNeXjVLLDWh9bQpadKh8V1oZpmUifYySAibJfMkhxw3eFwA69qNL",
  "key15": "5KgDyVsAbipuD6N8j5kDeYWjs6FvYz39vkW4M7mbfHLivvPWq8rJaVreLqFWfjDdb6t3CnEcVmJuzM3HqwziRjxb",
  "key16": "5LpjkA4Zts2qk4whRTsBS9xGWECK9xub16YEQUbNknvZVJZtF5K7Fu1Nvm8AQA5ZekoWwW7NtSRUC9hDc5qwfUTK",
  "key17": "3mMSu1kQNYQciJS8aTNdnuFpAGn3xJnanDqToW738Hs5oVaoKqmz9aPfF6WxrUemERBAD6X3WoWSqmPGYMnffGjM",
  "key18": "o2a4LYDERKf2LmHdP2ksKqjaWhsL4DKVf9cRmeuE3V9VoCC4weLhfRAbdu2d7Macs9Rw5S9xUxNvk6x34yYoEF1",
  "key19": "c3LoGF81hK9GDbrwetijmDrXyy3TXirndPtGewTQEdfb7gYSvv1KMuzp5Wn1YzCEfwBi4Qn3CyLaUx6qrUERk1t",
  "key20": "5t14VD7DoyEQhFUon9JAnCx4AV3CLmFiYbm1EAi9VTdJk86jngdRRoKj2dSmmGE3QF7y6s6hYib5G9hNSyKvBbTo",
  "key21": "3BBvvs8trYhPYRctRakPDn6EagfsB4cfWRy8UYXSBGUa4G6mTfmwnHtTmSiCicR8CpJUn6A8rBcumJ4WbEvkYEra",
  "key22": "2MAWQXWUgaRzM7GzCMnAzWdEMq5u4XDpocBE9FvFJRviytS3eQtY6TguZubnykxeDH4xMdeFxa1G383HFchmSECh",
  "key23": "Vw8osFwBHk34p5WwTihmSF7Cb3SvyrfTv1f7DKQihVR3iQZMQ4qiC2GThEobwmGDEgjARmXxAj6Z8RJoM7CJoF6",
  "key24": "nhSHcbGseciS6i1PqPx1jtazZa5iAshnPCMx1G6dSYA4iTVAuC5pJ9f7p22vQoJtnKTdWth92Aog8bwvoWqyBmz",
  "key25": "3jvkfA4iDggqNmvBruz8m6QrmNNYagkUBaH6zdGrRg7Gdp9m79iX4u7gA7j4WKhJjqcDP2wwW6GacrFnYqerUgZP",
  "key26": "2bFWnvgrQdPdFfFD3FnbhxKabRW1W7CUR1LKSPEsfwQq86b5T7jt6RhHaDarvcBTrjToMgQwvQKZuqVcGmvxHeAf",
  "key27": "2BpKACjLjjDj2diWreQrfTToKC7X9C2AU2QWaSBUXmYFpve4fbpPCRwATgfydupbDgwffHMHxMTrAEQ4ANy3WYnu",
  "key28": "PexxcMZ5Y5GYkn7hkLoF6zZ4C7W2cf3zqZqZYwuCuPoV453z38EEAH9ozMbtkbCqDFLTvsBJQ1SrJZqJkD2eExQ",
  "key29": "5uYp8wbWquTtcwvfdJzy7xevy7JhdsMxS5oNbkSYxex24J6Tpf8Ud1a67hoyTFVyvB5fjr2AXcATKhVSaeVUeiNW",
  "key30": "2p5RFy1gTBssKYLfhMr9ui33MpqU2giwBZCAJNkXFDjLFVKS457XzLcZNGHaU5eeR4zgrM1CtYJtTKSSvbnfK1pq",
  "key31": "2DTuFD6ymHXEq7xfptMJwo6Qk16CyGC7fsndWRLnqJ6CWtYLLaEhzcbyaRZiFk2LuKgSERJC5hZWrLYnRhbDKP6Z",
  "key32": "4EJDg383mzZL5AwijkeUdfAokceGBUbDbux26ZKqSNEfeZ3dfZHxVgCyDVhx1EMnM3t7ZdJKcK5vAN74ExgQye9M",
  "key33": "5QZqTAc6jtVFQXFsxv9JUGevwGH9GT3Ax1vHTk7wqZ89nmyZ9wXs8pSoFicrejukb7C6Fmogtph253VWi8fNkZof"
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
