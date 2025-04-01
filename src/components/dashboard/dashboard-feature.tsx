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
    "4C2wCJ52jXdfqPZsG1ZDmn2WFRCVT8T1zfNUUwJYAS5GpFu7CTbr7hnV9xyWg4Tg1t7mFpoQzHMHFnNbpEFdEFUk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mXMGzZSATi8eLeqk111d9yV725UQuJomhx74Ahm53RtYFKankFdFBKNP2WSQSWC37wuZefTBRH4YammWj8Trqmu",
  "key1": "5DMKiyRRjvGoFhWf1K2oi9N2d7Z8hCSF5YXGAtEijeaRqpb3M88rs1ikryAcgD89vQP2ruCRAsVEskkMTo55NCUN",
  "key2": "5E5KbQKiEimePsTpoiFAjb3ynvrKiwAm8YAQzqKJGYU7RFMuDo6U5jTH4ZfqYAzYLxUv1zvbGcyEF8S2uP2AMtXB",
  "key3": "3AXQWZe9bgM7RKjh2JoYDB7AsuTx1BnwpzWo2tpUb8evFzg8ji1ka5DAzsYY5nr6KT55pXXg9ENBehoxEeoKjZN5",
  "key4": "2EFNXb2MoLXuMHmuRmbT3r4E5Q1Rub5VFn6ghQhXNBkqUoQBPaYzKJwe9bWK6Bkvz1m6igciRopiorUXZsfwj5u3",
  "key5": "3cYAodfMufr5N32KwS1q73ujDBvTr8E3FYhLwKyLQ5me5hMooiSF4AcWKYp9W7r7iHWXr69d6yChhRcWaKRXBmSf",
  "key6": "3j6QoWDFs1PqypvyYeMSPLaiDizGv52ktHedkCxvrCDsAzcfr2M5zgJPRbjW7pN3mAfzWNaXZcpDqTHBj36KRJDh",
  "key7": "54XXUU7HfkocNRCLKdrGqT7CgirDHXvdqLTBWGrgMVJRTnLGvdZNCa9mkQWkvjHUU6KCVM1KaSW75mr4B8CyVmBJ",
  "key8": "wddzRPbTgex3SFhAW7yNHCoTdKsfnBAi4VVS56ez2TUyvwLoAuNXzh5sSxuw5ohSCfShXLCe3GzumWqKRaBb83n",
  "key9": "55sWJLeUCDSnDWS4VeQZsyaTJNdrNMrpvfKUrh6BYs7ejtWRsLydWudG3vXbGRacHM7vUYfpdAXB233o573ddgGA",
  "key10": "2gritfN5Qdi4Vg1ZaAm2LY3cYZjYKLQDALJSZ9GgLhHsKvEdfgLSmQSpvxf9m89nz7jYF4PSVzJKJ4gd2NsoAxrf",
  "key11": "3cLisDUFKwzKik4UQ4Kjrkw215AVx2zPspsAg3JoNk9kcAgK85e2uYLcT5bgtD31ZPrQRRarYvccDytSN5jE2wmm",
  "key12": "3TVTCWwcz6TaWV88MB5ZsRPMBs8Ew61gSrSfm1aQ6jVYqU9Mjjk47sc3qxndzMKgQoDLNCMnFGYUHoGXuUAJ1GdV",
  "key13": "2zkrbqJmF2fHhW2Hq7NE1zxjkPGJ2jFzQ1o8C9LqB7n7Fz21tFk1KoQCcVmhnyv3hGfHyv6QG3qM2DWtn2tdqmEx",
  "key14": "4vigW2SPsYG6dfZL3zkwMozwPc2h2XFTqBtaDQGebVTZxXxdsYwJg3WhfBrq1copcQt5abUCnrHCorHzPkRyYZKt",
  "key15": "2EJU5YwbSvzzSTKCwmBHQSZnTYuV9ejdStGBj1FL4qDbSRyeCqcGnY4gnwLn3CnufcPnURmEq8DXQAMUva5G37ys",
  "key16": "5g6mF2dYAKNMeLZJ7FfPsiDe6ieBoa9dJxxExMS3wfjZBKuUcNktZpVD38EAZr1qpozKVj25bGWiPnxrGNs3VYCN",
  "key17": "4oeMnaLgbB7VwhYep6dVs7ncUjLBaUysUhRcnk8HK1oc8jLd2KT5FuN5MViFtcvDbK9oZLJZwkob81hU5y6a9aZM",
  "key18": "3gkJEeUZovmVqia1N1aeQKAiXMEPhWagUzQK4TWUxeP8BRzh22RzasZSv2z3DfGZvWs5ifhEpyRjFDft6T7ZZhFB",
  "key19": "3TT4Bsw3Zrox8b7XgKTXjm4aUkLiGGqEvTzmrNygSKwoZQJVoExgvH7NMNZstY2BjDbmhw8rsN7YmzJtJecD19q7",
  "key20": "RTrQx6hNvMhE7ADDdd6EHsKyyDJxWuxkSs27FmUMW45QD97b7HYtAiawv9ETphumoBfJKxo5gC7xBNyUV6S7Jt2",
  "key21": "4DCQmHANQJ7VVNSpooMYqTpbGfXM62B8dFEqkdy6fuBGgaQkGKbZ9JMdqwakTJe7qqixe3gZ38jMpo8HKi6wRUHg",
  "key22": "4mDqFhbmJ2YWe8r2WmeYdssw4ngVrZLeJbdoSrRwoXNknRh4moHDUuaV96hPdfpqq9uqbGqFgMNNcNUdizkjiBfR",
  "key23": "ydf9E1AVg8ejkMnStH8WGJz1qpnSHWkMaUAtTZnnF1fZ5mCRsN7gANbhs6YVPAGcZPUsWn89xm4raV6a3R1Ryea",
  "key24": "65ChcgjN7Za4TdJtXecDbJ7vnQcFrxbfEPu2aUxptkJcLUCe1eTBREaR8XdiptGQsRqr4BdhP2C2BYGRqLePNBQu",
  "key25": "2TxS7s24azfzKAqicjahJURXL7Gcana6iPMHNF745zFqTkdGdMyujP5ua7RLAf6ToVUz2rNMXGHcTyrNQGU8MmhW",
  "key26": "2U8gyMZ72w156aAwjT6frdEMXDir8GSFKZz6zHBqwjGyWVqgKPmJeeDyueddAZPMXxgYNE1KJFxsL6M7kMLS83Sr",
  "key27": "5iKTW8LMSnLb9FjQorM828HsYCoTpQ3w2iX2L71JwBYepZXRTFxtMa53MV8v2BUJJSCn56ZGiEyB7vvYEPtQ5fhQ",
  "key28": "37BiEe3BRBKLHA3KPPs34psNBW7fHiRYnqAHdGM2HrvVgedUNucY9d5GnCdHWHr2DMkqf9dpcwTk5rid1gMuGTiv",
  "key29": "BSzwCosLixqSRNdEdVsVfDat9rByL11hc3rKz92K2BbikM3rQk8ppGFgt9nMySPVDKm9tn36znho29tnS6J6zfB"
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
