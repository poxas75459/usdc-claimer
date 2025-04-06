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
    "WZmxiYJyinbVZJWSXgU4e2JQq949qCcH1f9sthQKpj7sfLWYGejDLiPD4z4LuV6tnRA6QKUEi75eYtUA3kpHua5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFvHhuXddTbJpSqn2dUkKDuQx9ZPvKoQAoHbjH8SnpjYCgHhct2cMG7L8zfvi4NSQHVESBX42Hao5Eqvg9wCf7B",
  "key1": "24Lnp18FvrHZyGSYfLWSvRoX4SNEod3SAApPot4L5zKcH9j1cBgWtPfJaFU6Pju2txyCrwYFTz5TJzfuhByHHePB",
  "key2": "48QQkNQniT5PDCyCDdH9Qc4JHGWLgQotAs8aqYEqtBn5Be9kBgknHeiWKakBWUXKonw7vScp7ZibZemSqWBvXdVg",
  "key3": "4Pp2LsE6b92s7ATEyCEWxgiioS3mSswtHrDGX8GYy5SmyP4TwjChv5Grtb64SUuVDNDNSPhFcE35NCZooo9kkkgE",
  "key4": "2EwctjNXT6ATjcDFiHemj5tUmf7giidtMxFcMNzfQ5u2a8VnBgtCrbBGvtWDny3H3urgfeXdEoEzqSurusTSnkUo",
  "key5": "1JqiVVYkcDmgv7GyHBfvy6wMfVV7UdpkykvGaFYppbxHsCP861HFSqXT9uYV1oR8fw4kA9m27cjGB16jJZwa7TS",
  "key6": "3oxWFQik1riXm2q15z1aXVkBc7PpQGoxzLb6yw31a4vcdM9cVCava2Rrq5LGkJvenLKNyiQYCJVb3bip75SP6nSf",
  "key7": "5bMgoMnEkTsPr85ySyzKMoeBtQz3gxwuRfpt6bTC7jCAmvxdyB7cVbcMc66EpyMCRfvAFKbiShfgTD7VVATF4MuF",
  "key8": "eFqZD3R5FFnyQoCrLPTLzS2sRUd9q45rrJu82SrjpRN7xj9hRaKp5Nw5WeDBDVb4cttsM53cwzU2p9UWToys2xz",
  "key9": "5GUVMV2CLSK5EvxgCkpbvkpGTSkxdtjjXVkMd3TMKt8qY7rAkCmGqKcrHUgSUgt4FVfnkoYynYySacZYutSJHvSn",
  "key10": "5XS9AE444bdwTLfSg7mrWdhhhvvrD7DBsh91fk1bBVo3hJY2JvnJDrEU1xidy3ZyvYibpPJm2koedtCZ29tZa6go",
  "key11": "5gM1NKcTTMy3htyV8FJK7Rrj44dKg7VQ68bxHLB9tgTb2n54gj8qBQDfmB9r4c1DiyJshWhtdjzaPxrH9W6s8jNG",
  "key12": "aUr4CAd3rsTGBLsK3xDkbSoLsbYHWTCeqL3ekgiEzEjj28aijs3qtNuD5kidFfhHPktgg4AuHKKtpVdo95Ps4N8",
  "key13": "2yY3toi5EHEkGx8nVCeiFKTLCM6LPYivWqAYXLcFAGBmUAoNYf9KsvWnkSt9yNAD54NiAPyq7X3a56m9cjHjSto8",
  "key14": "2aMMhXM3u3QgvqbuiSiS4QtzNmsGij6Bh1DmG5T2iy3vhGXSRXr4BCr9FRzhh8bWAb78ag9mbYBqPoTtHJT5jnd7",
  "key15": "gdSKR51TAakgerWLgUdfqyFaAMsoZ57o2upgAAyNSrwhC46rHByBMGi9WkmHpFSCmF4u4xx86s9McYjWNJ4J1YC",
  "key16": "45pDLv19CVc2echkSf6GLZp2gRKJggH423aM7ewSzSrXZDXfDCSFkvxMnbpqdbhVabgRHNhEEPPiUUTb852Svd3B",
  "key17": "2zkba9nwQPVKKFWYaJamqi4sjVwCLMdJUa4fQivGRZH9tgbBCL6XrwhXp3469M7ydXX7UNYbJdvTcfj8iPcFQF2X",
  "key18": "2dEM4oA3RTWv1Co2axwgCp92XK4ML2kUHSMJgAovefC9hNBtFu7BXtg9RTax226sVTk84AFMNKPmQwcXTyPiBP1a",
  "key19": "o2sXDjrLLyGKnH69ArbvzTNmXDhqHcARFXPnHUB3ERnXj19Ru3b4BpbKieEuL9DhGs6oJB6LK7uknoj4Cv4CXvw",
  "key20": "4p8xFfvioAQ9dFvbBKph4m8m2NHoAGdGuHttu31rQeiWpEg3VuDVgffrPYaBwZtz7CM8FKeSWb2fXFxSY8oapnn6",
  "key21": "gyUXR72hry3thv2LjaLoHxatGsZsSXzCsqVN7YyvkXMVJsdr1BpaRGpgDViuEAnNyCx9FbsAUtqgAHC27UDnw5B",
  "key22": "3DrnQg7EcrPpQCfsiBWdApBi2ogiKDd11Sk261mHCC9hjuzdiWAiRaF9Bo2a8RqvvhJuJu8jk2VMPGaD777x3Ke9",
  "key23": "4q6yPR1PNVvxHq8kY7QB9xhmKzWLaLNBsm6C81Ymw6HKLU1vhp7SUyY6bZBP1K9bCNcFvUrcogwwKZHVcRGka873",
  "key24": "2pRVmxBguYBF7wTAoSXyHLQrUndEisu2MzLxucEQgauGZ6WqAd1nhaoYWDHhpMxZj9hc8LyotTt9xyi1cPX7yHR6",
  "key25": "53B9GdMDiwErJGmNLrZZ736dzqSLo24G86yCoesztWP8fDUhnEtUECvxbSWw73D8dMyC9kvZeTxMUSekYwXsGL7K",
  "key26": "4WSKxNu7WZVpBdwnzpKfwQuyzDsfq6na2ohGrNCsKTQAiViYhgfVXTvccYjahy6Drowc4TKQEaJyymWBGW9bNWEj",
  "key27": "NPUYrcM7GsFZDWEx4uiEsykZLoTWRJqtLFfcmgsjGXQhbWLo8WRh1aHSkmXkumF1cnRmwZfqiyH3znWbAAvrdsN",
  "key28": "58SZS27b4YMXykJYEjuGrBDUE8WpP19cHxbQnKNQtSGhAnjrhsLJMApAfsxaAB1XjLryLpaEnQ3p5zLbBrxkXaN4",
  "key29": "5Q9RcZEvgNfLkNeGUmjKzKsM5Zw5QrvRfE5ACZUqBgieCSsFc4KHzabpniw3ThenZcsEqr1oN8RthRoq9vVJfGu5",
  "key30": "3F6796DZJ4mF6wQbDwCcXoUtWd6RcfTTfMuj2qehBMcmeTzommyN3QSFMTy6qYoWdKNzVyeqMbcdvxfisVafBjJK",
  "key31": "3cwcr2uW267Z4hbPsoNJVGXPHwMCEERwY3zJ4yhhPEoGuv7T8caFXwf3dLM5nST5xKDQ6JCFMH2mxkURsrrK3M2n"
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
