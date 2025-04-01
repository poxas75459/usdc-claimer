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
    "53d7R93afSbCiXH7rEnmRkFbfYcqWdBJ9PuNKRhhq74dYzzbAradEhVWMwHKqS1KyhyCjR2t7BoRjecsfbdscQ47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AyzFRcny91wqC6LHgVZQrVGincG7a98NeiEA4gDZhPPybVdH65bKDo4UaZXRa1yXqRQemm71yB4wh6uTzx3b4QW",
  "key1": "3Ub9EffnG24GtXYCrcvsvTbf43vMtLHUzH8znAAhWExctNLkX2LCKwXQ6vp5Yrc89GCRjXKfvL8iNVELtQ5a6EPS",
  "key2": "5CkZqU97ZVf7oRrq6B86Ck4iS6xdPysYeoovvUAfN74jbPntjDZXphSWR7LdCJuwr3mKaKHSqeW4yebT2RuNKCTY",
  "key3": "4gVgSq4QkPLNWLXJ4kexLhwrG1FdhFKCcxTjMZTCRE66BG6dMp3Rq6vqMBKrkFYct3DDPEf6sL7Yz7ZTyuoW3Ksf",
  "key4": "2wyf2j3k4w9JtjhAPaHeyAeRw8Wt2NpPd5HrLCzmjYKq14cn8Q4hXSE6fCAFpZB62dziYXvAkq9Pcu5SYAhFzfFo",
  "key5": "5ocCNVGMRKYXSF5VVy3PKWgm1xrhXZYU7tnX7eMcBsuy8LwkzFse6nEdz7rUskna1bS39VbdWP6fWKHR19rv1gbW",
  "key6": "4jfdUtjCz1ncfiZwWc1TNnhpsGpUtZZkX8PREaG67LfWcfwTzLqkT3xTDSHqW6kWEEXd8J8FTRwBFmbDQZMsLpsC",
  "key7": "Qh648zxgpCbAZdbkZY6W98dvhAWhkBxhawSA4ey1ybzQvMKaJ3jj1y9ZrTCCFrDA6YNEXLPVpiQLwNN5X7hnMP3",
  "key8": "2GWwgzFV2wAQ1R2js6z3MFAxS4emexaJuqaMcdiT3Ty8XyAYuNyoK9ceLpZpwshhfaHxPkNTBDBT5Rixd7sqpMqo",
  "key9": "KgdU2h3RKL6p6CzsPqvex46p8WiWztr6HDNs8V8F4huL2Fz9bSXCeBosA3dhx3bcey3Z84Cfpn8U5pwxKQ1Hook",
  "key10": "SwHnXucMR5YrsnPHsekZs3VXhsbwdoQijiXj4YQfBnpokQJR7sbmJ8qsurHM8j7TnFD4armXsRmG9p9fxaGTKhe",
  "key11": "HNuJd1xtSGs3KTMEU5D4NjJCzytnoK1Q75JW5hy5G2akzhHdNM5QB3vMwMsxnq871bYXKT6QGruA5vUsE4XPR6U",
  "key12": "KEvwq4jHt542j6ZyT9MNpkY3CreyEC44hFoccnjfxRZDUnizJNyLoy3M2tjqoj13SfcxrRE2qGDwSE5cBniJzN1",
  "key13": "46FZFJmMuHdyQ55oUdZD7B9k9gcJ5yKWfwCrcRR2jWtJ69M5oJCPe49EMHGBVi6ofhZxGazsWwHo7pqP8Ai3n6hm",
  "key14": "5XaMC9LsGLvSEh1VaUbPQTFaS5QhGJPQjrDxYEWKhoxvvU7h8r3kzjsLsN3w5ejEBNNwfBtqM9gZRhffyHw2NN78",
  "key15": "c1neX9nwEKgHc2HQ6MTwAUra7UgeH6ygcJ2SYPALagiqtvaGijcvseU693y2L45whnU3ibYXwNZ7T5uCf59KNKw",
  "key16": "5rmeFn4Cb915rmeKM6ha9T1i6ys6dewZ7QFhMGZFin54VZioXMsoV417bF3oSAHYULjZdyRoGVfmEPvfjWCFXPmE",
  "key17": "2EgWKm7NWLebAVvEwVWHHfmMzWcMhZSddwyDN2Kv6oMZFaiVAdY2dhN5fyFVNLqsrMCF2C54DZPstMC2xsdvBJFX",
  "key18": "3WBVTkDNnCHukvDeK3uFeFAaNjvVYcxQ2VhPwUzCMsVhTbQBbrQbKomE4bdZZjLhxAeN7KhdDQFr4JoqF4P2FvW8",
  "key19": "65ZjXTBPFsMw8ER4b2kYQUEpDCPdwyhgCCz6jFnXyMb8S9miTX13DTTABwN8KZQvZcz3HvUqyqXyux8wGC8kz6fz",
  "key20": "Gz7oBgTKFdKjTNNcW7dQMhsFBMyiNvsV8G1s9dAJJ8FSsMDSBzbXcb2ebJy7JptgQLV8LqoswfrjT3Pa34R3tJW",
  "key21": "3BapQiBCUWb25KGoyJjSoGjmQs7kvYEscYdnqLLy3mfC3ChKgdtjeoboGMvBGh86M34qdMpr7dQArdjPS6K91rjB",
  "key22": "4sLr3Dcjou9aMWVVMvDGWqM6E9mLNM4cqukhJjwuV3H35c526wM4ddYgmkkvVhSVEvfrhTisevuyFVtcrPchUPqm",
  "key23": "2mbUDhZgtgikooAcNSCeiFJ7RKPLeTt55zVkij9hn9B8XzSxrHbWEdkhimhg2cyerfq8zaqq5xYGnosAsxrvsTq1",
  "key24": "5SkkJe69UBXEQtP5SCDFMQPdfiafyw7ZMBvgXEUwNTJrbZaNprmHUxAcnfQCTdQJdCNjYjZ25o6BH3QrSK5XdiLv",
  "key25": "K5THFG8ynVLWENLpSjrCB2eoXAd2QNwbyGKBk11PYmZDUr5FvARB26euWdqPEmxQ34aMLgEKKjrA8JtvXtvZ5T3",
  "key26": "3Ry23tBcPd5Zz4cX2DtJPUG81kLTKMgUfZv3S4gw2hrmsJ6yhbSHdgQAoMbVXopu3KkqfHazrqUL1Ymvb6HA63c9",
  "key27": "66syNPfkBkDk5fsMQG6fizEp28hy2WbTA8rvfLSxJB5JbNVbeLogZ6YovMx47GBDik49MWWYrtqJccDY55gsYdPG",
  "key28": "PuRauvoVwswuGfi1V9ehqUW8fQMq6R3Dy1nNFdZnDa9194A9eoMuHY5gZowQhUf4dJpJSPuW4tpe7kUgY6fApMV",
  "key29": "3SnqTxGQ63SVbCihszUM7Uh7PfU9YZgTskZAyv5yjwQj7ovcMV3ueaLCvwyyYFV6whFMUxSRRpAF2ESXR7ots3Yn",
  "key30": "2YnGWfD51MAoCgvj6hjwytJvHahEm4wiYpwjTJ7nBPGdBPWQRNamQcmervaj1NqCCnowfxZcFauikMr3BTo64M8R",
  "key31": "3iTjjnAYERULWaXG1pwGsFj3nFA95B42PZFXJUpuwgwwDPcWZqRSqUYuQPqxuXo5VfPskPVuW4ti1ndZCeFqSvSA",
  "key32": "67fb5iF7ne4MEFhdQmNpkbwFbbE64GdyNMVb5CFvRswsjdvKL8CAFpBBgCLDfAyon9yFTMYwv5UNncp8t9GjNbBG"
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
