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
    "2DwUcaHrhW8cgWzXA2qo9wJXeLGD28M6v6tsRCPnZJSmeA3eHVEnkcX6GNjgdPJ6J7Pq5jYDKBEJsYHWAHsjryvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqMfrTq81WwgABUwQrNsT873FFsogw5EXxhEP2B1BoETi85g9V6nSkSNCWWFMk6puWb9D7pQ1P6DtLTr45WMgtw",
  "key1": "5x7rSaiuxzvZfLMxW4DMrMbtr4MoouPuxzVWP3H7859BKaLMSff4doFMjAodNRrFYeiEvaBK4EFFfr4r7jBQ7zSm",
  "key2": "3FYxEc1iV96K6a9s1XBydK5DAoaa5AtFQoYyvq1w4xs2Y8rGPoQk24nFpbEjGSeNFagNzGhMw4QLN5QzsYdE2RUp",
  "key3": "4uD5GDyUnMdv3L7FgKdrsDMpikFeUNFEJt26bMSY9Mhs7kRgdTG4bfhMKVCC71jZWzRoLCVR4nZhJJhnphGUXH7s",
  "key4": "36oquuMbG3XvmEDDwnErbRzhojRYzrpJhtAs76WS28TvX3DJtFPz19cRrE9NedV6ejRXegkR6MKPQJQ8nGEgxsr8",
  "key5": "3DYHkeAqf1tqqdjJjVp5y7A3LCG9ZoCdiNajyrSoQgmsuPzzYSg5Ch32fdUZCpz9TuBCCn71WKQPJMBqu4Rpaw7M",
  "key6": "5agFFqy3MMZKLtWGvrw3xZxuDLaExbUeGYJ6gStuXrQMiXdgfC7zb4UoxsFZEHp3XNXiXZbPjNtVQXj3jFJabTiu",
  "key7": "5TQ5d6g3ZQrrUsMCzRKFfoixKaYWouiCNanyGpsaEo7XfKYq4DvD5k3ojyMY8c6msovGk4bpDWPjLmCeHVeddxBi",
  "key8": "bcoWpA9ioqbv4JbQh8jTHx4NeTDqycrcieATY1Qpaf4gq8rYQicFwEKiFWmEFQSfPfXtQRdjWKQXswKf4Cpsxd4",
  "key9": "4cvHgHK9ium34oknyu84Wsu6obaaimtNnjeWQXrtpaHDRaxf1z6MLG15ZPDC1vRdTfALJprnk5KkuPytN73SCt3w",
  "key10": "5MW52xzQG5o2KUMXZqhdaDHsMJxeYTgxoqjgxmJx23oLXc7gUnKPoRG1HabGTwtgnVZxHXBQWsGTVS1S2t7tVE88",
  "key11": "28UDVG5H3YNUQ5gwAt8TSUeLzWUzz7NeUme5HtZNPDMirbTik2bQy7LJ7hSdwpuD2jhFrMH7o8Si2t1eKKKZkafR",
  "key12": "5weZg9B8thuFUCqoBgo83W12KoEEfaW1qT8HyuZb8dtzpvorLHxmtho7FTkSGhXWooDSG7L86obZw38fHQwjnkBs",
  "key13": "4NrQcZ17U3e1EfHRd8kbsU5aJA6pZCkNmuFNWW4rXorevzyBio1492z6VyANKrbBn3eB7kk3XUaq9xo3E1cqqC3M",
  "key14": "53sXWJMbWrbo6ddsXNYsk84C7pd3MV8VswbRMgnPLYBWy2SKUxF3bj9boVz61u8FoNnJkznqduHwrnWxFSvYrJLt",
  "key15": "36Ja97ieHpeoB4bamSix2YoG1xsvfdUm2JTSweTBGTBhs4khpv9kPqrSe84sRBHkYEAp2XKbqeQxZN4nuvLp74H6",
  "key16": "YRSy8JSV3Rm3HRgC8vC4VTWa9S1Rqbm9G7L9raUXXjTQZsnDvNEw4potZnfLocxUFXLk46TsS7s8haGouoZ2u7Y",
  "key17": "4qsPhx2VZHPi45fyTDYbeRbZ12yh8nNZUfNPhZajFjJfgNbNWjfdzzfMPcuEUbmZRZcoeUqWtyyUDe1BXfrkfGZN",
  "key18": "2ieEPuRVinChrc8wFsV52KQCWNB1ztLNbfUTibym9Cvgn4UVQaz2S1tkRa6xYikuk2CQQUb59MTsNrNCjjZHBerx",
  "key19": "5zinDPksLGrZdVSegNd72vnAHgSYC9cH5Um4uSX1RxL2YevZKT2vsSYf6CmTAfax54uyAoGDyVjqV4MwijqsFAaA",
  "key20": "4JnxJ1TV7YkEDScUUZy9AHP8hLrBdCqkvDgTteH72GHFTh8KB1syovUjKYNzan6frJJtRnwRfnjaecLw5owQyAih",
  "key21": "3V5gCPBJWfEeD3GJAxSMgLvySBAZ3HeAHvDyCdKSeSABtBFhGpiVdBd1EfTpNXfqs3oHzFMkhmV4PhG31xrEfwHb",
  "key22": "2nm9PosZR1TFgciyBac9ywTaWxP7xyWXrFbjH2v1y9rQSihVzK5A3tFjfszb6SdkWTwfTpRyUwLX5Y2qBf7hGLxq",
  "key23": "4KYHhP1hbC7ML8v5RVLUFjVY6ifYwJWtPPrMVCuAT7gRxXFFHt3iCUMyLf1fn5VphxKYAkGWAD7PVzYYCMNzAz1b",
  "key24": "2U5f4NbWeGqnr6ZFort3qwE5Enp5FoGHUg63DeUf8QSAuYeSEuWS6prmRi2wifvZvot76kC6Vb3jmWMfvsAQvHG4",
  "key25": "4whECKumh2nVFUEqvwasdcVvdi1kKrDZcfSuPK2Yfmhnge46z7EH3mLwEgNgTKDKTPHX3duadubixoq1CkaYw44y",
  "key26": "58g6LuG7NqCYneqTK2vyEeDXknETWoL7NVSXeM6QSn21SzFQFxvdQazJnRLTxYUywnDhLmDRdxV5DPZTJgxPHGE6",
  "key27": "sZPScF3XM5LCbarnHjF1owZMctbAUgg74oz9pa7Z3qzWuXNEgrWJJQzWf1CX6KKuUYVCQ75fYFQPx7DbSvWjzcM",
  "key28": "4RHHk78nxj43PE6KkvKK5erkZMTDzdSviTju5am4yTTc5CJCoGKF3yc5YGQgYxWZiDYsbkfUBSWkkrGhxL11ju64",
  "key29": "g9TUJWq5STJtHfioEWNzNwLxcJrHxhPVwWm6k6vnFpZQJqrCZjSvmeJMWALsbBMWut3KA5sKN9JmQokcKd9nyiw",
  "key30": "3hXvQsvyVW4t1gPEavKyGwDq6u14nRt4Z6v8VMhUMLpy9Lm8oUqLDdZdig7qU9tq9tbuBwDLfF77eyqZuDfN9wmJ",
  "key31": "65pt8voTwGHBraVzRJCKVaPTGsn9g7Du8tsauQUFXrKWsHMknTGVnfoEo13Y5frk1vb6BvUNekN9FCY4mYmWjCF5",
  "key32": "5D8tRtRzUCjcpYHkTKS3C1MoCsxW1cqXHLkhwkrNMeUgTAVWtv1zFGE4KoAjZmjPCd6qwWxFebTUxFJJ6J5dnR8E"
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
