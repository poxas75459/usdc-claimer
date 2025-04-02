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
    "5gVwqBAgvueARU7c49UcbbxwyY1mbop5U6usZ5X4oDAEXgypkKSjjtKixdEdMZxquNQY2fhynhGzrACppqAbv5ZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSftNpJVxtnKtiYyYZKgu3EqvmBWN4X4gBqasYeXBehqSyiYLPCFiJRoTTt5tfBVGKsmcQtiVo7izq9wzUjs1Dm",
  "key1": "4R8SiUnbqqvUHTvJCb7wQBi9vuBXwLc1Lw5ZJ6JoKpBJuTXWwzwTi3iwceKFUanYnbzrQiHTatgzfeEejnHQHDvK",
  "key2": "2hDU7AtabGk8BnrBUCKYuJt8wnMphr8NPp7Pa2ydTU5QAYhrznD4cF2xpqhCRPu6zA1wyuEwCrRPcQCx32qvh8Ew",
  "key3": "37EU3UvaUemukb8tAVfJ4KE979pkfCWibMH127NkZ8VvPWM2kn4fGfxjb81eEeq6PYDq1AckX3xZD6isA67ACoEa",
  "key4": "2cSMAR7DyTtYXJ6ReNLPGurMPLiDpDWTp96C1g7MUAXDqNSBXxQEi4bcH42dZc5SMoa82hbCQEKfQUHTGDoMFctA",
  "key5": "5ehkF2q22JNWtDnjLh2nizgrZFuaw3nJSmo4jxGt9peUMV7VMwc25zisioETxrK6VUMZkY8HVWaw7FrmfFey9onv",
  "key6": "2i4kYtCd3RtaVkfuraHYcMo4JKirjpZLmzKM3McPKEqXEBcMf3nm1P4AuT2wgnwcxtioU2KcvAyxx2g6LP8vivaQ",
  "key7": "5ya8o22stUkiG1M9aEZC91b8h6S7iEx83Vk1NyXGE2a6884EftQFq9PAfvTG3tJnYHDsmoNj7ByFMjc29ot8Wyh3",
  "key8": "2ZXhShQW6VTUquhfk1D3RW4CPs4ftSZ3fR3JtyHpUByLCCUPUuyy8zsoLspSeBbkN8f6FEwwmZoZnNwMrFqUNau7",
  "key9": "2yNqm5YnR12Ku4NXGkZzyp2R4PB6tqAiyxPQu4kQEgzNuEz9hcar273EBH9nTUm1Df61f57Kf3rfh3o75KXu8aFq",
  "key10": "5eTdCzzYsqPrRd79cNrjJ19cGnj4b1BL9VjBuKbkj8PRsHT3DZ1xb4jnEtjEbtCJpiKVhfUwBKEiEH6MEfjxy54Q",
  "key11": "9qStoEjwhmZP5E3J6ZT9MsN2aL4GSQGm8K9HjKvwyWEhpV5M7jizK7wJrfjtbfZudsPZamxpXGW7Am8r3Zwv6eh",
  "key12": "2Q29SALrHygNNhzudTRpefgTJQcivNJBmE2quQsU4NcRtKdYWt1rKvDndrkwJuThW8iWKDEkCJ1hWDknifu8kVFv",
  "key13": "5dKVWcB9meVh3K9qm9MBAT7FmUwR41yNMYzL9gdkXUsZLTBDfiNw3P1tb7Yde3CTxu1b5ckrZCNrSnWJHX8sXUpd",
  "key14": "22cVyuGpB2yxCv6jUqqZgsz9KCXLNtVAbiERvCf9oMix7QqexHMNUcvTWWR3t67TTF4aCRLUdBUPqVXoCJ1iWMzq",
  "key15": "63Z2ABqUEkqtsxAN5cktNmsTejuzjiviBSfxrvNtCSmVrXN5cSNtnmAX4gtc5qPdp81YoedfVDHtMyM2jBGhuCmJ",
  "key16": "2Hk33RCqvfxsg3kyNXgausGXtTdkF7VgoY7ve3fY3wNAqhbP6SNwRjzjhZ5yTmG16dqt4X2A1Bejc8bbuEV9rerA",
  "key17": "2Y8d6cJBTLHuaoL8dw81xa14fkJGJYsRcMHqtcvtCiufRSwuNXVbBjW4PEamgcsA8Yzi6hukCjNsdKnNq9uJDGpn",
  "key18": "2xFHhB5x5i64CYurunADNdC6UaEPyHDGUTG2e6WvDmBU5BbCYrRFUCaipy2rRzcKrKkTZEBDWPYA7qtwZENoeQbM",
  "key19": "4cxGsDAGnRp1CU4yRc4dLgCHY5hn9Y8fsSmScQaT9NwDTHXti7wXmUAwSU36e2qNsvYasCiC2xk5fczQKPYxubRT",
  "key20": "62JuNm5uVFcNCUqEsJwCKwZ5KSBhpP61oyiFAnf83zFfXDegTefUv7TukDQndRZngptHPqCKXPHuX7phViVLJajY",
  "key21": "2aknbqen4ixwWy31jhReY9MQPp1WUZ7wJUMyqZsNCrgDxwwtHYVgZiZRpv5zWo5vartoMHbfAyS5x3vt3FAm4MzF",
  "key22": "2GRMTELiRK8vTL5X6XDi4pJFsAuEMvdYAvwrNa9QMCysuS9wFNCroogKWhF4NBPjiHNi7V4tEQn3SmV3RSXRxacp",
  "key23": "4YaUvvWuonaHHERqf6BJsYznb6mV9LkS5CBytnmPbKmyso4Dg8MR8SuQbkMJP833SVVaJRWhMtaBjQy32KgVzVML",
  "key24": "3F1RncctaqvRkjGN6oM7WKX6AUTsDja1VtTEXP35ibA75tDMoSLGaASYK1cy7hqvii3NT5ifD9hptsDr48Nb8n5o",
  "key25": "5vw8QyBFEsmmusdds6KoDAcBKZBJpxgGBcmo3X6WBcUTQLaMBmSmYKvasDTtfvQDLrpkkYsxmTKCvzQswa3u757b",
  "key26": "2VUAY57NAWQ9Rv82MXKySKzbVUywoBv8CREqu2pjAwadmUb1vyyy7godi4iSBL5sJJvVVRes9xnuvAp33aR3ZiyY",
  "key27": "62YAXVZTqB6JYeaEVcgin1budNAcA9xwHro9ukqSxGE1ptRgiWwzncy9Z4TnDKff5p71VjCe9nR6KsTZGra7hPFD",
  "key28": "4tjbbrxPWXCvQy4GGJhdEPzydCNy4KjWi15KVP5RVYP9SmjG9MnU61VPiYEUgN61axqZxvbigDeKT7kEobPq6CgZ",
  "key29": "5yqJUbmqUrdL96wHwReyEAKKzQ9Sm8TghHYFSDGX7H68hxbNpfk3tvwa3mhupAbhgHfgn78Hs8uhuzGmwvRWfaAt",
  "key30": "5nE8iwyo8cBGPKM7ujrDFbnjScRij3RUSK2H9kq7ZwabThGsNkZWzoHk5FHNkBNnesJsgkw46r2gFfAAKouVGMdy",
  "key31": "KPYKrLLy1B9KBVqLAf3ZZtFKn8wngcnh5p8ENj6raD1vvcY25dRptFerXHvNHqoiqZokhThwPF8BYC7tQUE6FsY",
  "key32": "5kEt5XYrJ227en5Wxukg5xkNnk2ohZicUnCS8s5Gtd8K4AEYvicBJeGPxANtcvyrS7omHHdGLTb6XDotwjkZ3g3T",
  "key33": "yjfnXtvbcgq8dSTmAgrmx99abYJnGjiLRjU4y13RsBiEyPNNyB2fnMuUpeHrgwS8eq9Z1Z77Ugy8eCTTcBkUWcc",
  "key34": "5ruZojunbWB7BMjtv3XD27GejDVwtsafc7narPNE6zmD89xA9ABjfyfd8Z6zVp1VRK1LFNbZXBu8dazefDwh9n8X",
  "key35": "2aEwFk2yuscNNHM8eNBkU7mkkQSyc94Q2jgwzcTfG839w67a1xpvwxPxgLkPPLK48TiB3erGmk6SCpBvUZWawqeg",
  "key36": "2NvnPaPCAnTuvPzDZAnvrim8kF1S2JJcFvbaZ6X2ENB5if5Sp5aaFSZGQa8XGG5sb9b92JbfK1roK14tLabKVGS2"
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
