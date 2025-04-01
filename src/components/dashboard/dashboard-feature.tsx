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
    "EVfqXymPwDg3dfCga1AHgAdFLipxpAKdjBDCZadc1awaws81yBFiE2Czt5Exmr5DHoKshCYRtUxMgMEHrzs1AFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjzFiyzEQad1zEgptqT1wGg9wJ2hNo3zqmuwSuBvpUgGeHdEEsq2K9xGg4em54tsEtSWJfRNWoKKdcCe1rnR5G",
  "key1": "5bMZAjV7fg3XGjDPpnhS4SPZJYqYNrzwHtao5maKdGW2QWV3YH5sHpJ3QKoGmJJyK4jMtWAnCJQocemM7RbbX9Q3",
  "key2": "5HrRJ7aBTcd9tDoD9X5gQ6A3uTD92wr53rqU6oaEbU9GKGKpQDJSNVZ8gEXzHToNi11xXKmSogDsqnqCNtqTxam1",
  "key3": "5YoukeTJCjtFR6ogVroiAgCujb4JYJ5fnfMC9J4J6cWHHhMXxtvNScuhXQEZxVTCFZbWdGMrjAHQcEkDMq9asTwG",
  "key4": "3aBhdDB6KskyEFFWuo9sAZPUrqTehHD1m4ezAE3gVT68xqNutRwPgKKC2wmm3pDPCiGrv389ejt9Q3Rk3nczhHef",
  "key5": "2VE2q5YKCEf71wiTtabANaW4MdoFe2HWnsaBFnN236FazbG5ujoKq4a9GFjRxVVvLhzXA8U4QB1BTSg61avGaFeo",
  "key6": "rAiVkagA2iMkjEULu2hXCPjvscs8HELHZNvBE4pFw32PJCs4HY5zhZ2mYXCnGEWd6qumtjCB7rNFJrWSGRArdcs",
  "key7": "57drAGmvTNwW37bq5gPDMASATN6ZqsY8ismBC715M1MXyZahc3hJVdh7yrANS53Xaftm6QseQnQCQBT84uGJMje6",
  "key8": "5v48psFatHvtMSMdcU388BFZ6FzrUaXWxqrNJwtAYfrgexC9v1Vbxav6qm4U1NR5W5nJuRD2RHTNpvbAMmyTypwX",
  "key9": "2Jjo4h7KqVtSpENN7PwqcHnUFjt9tM6gP3BPAXcoYSGkmddyonLEa5zGcBg89gCf7q4HypvCTKR2B298WsTQssfa",
  "key10": "2TZNUJPwYhssDiMtJL32JkDPGD2SL2vyaemHPF655RhVHA2ejq2g3nKSqFcvFNsdHDsohUa3LPGAYzjrPwUdWpF8",
  "key11": "docMwUiZiVAYARgucqGV8urggXueotHQ9ytnc1r4aAYMHzjj1VjfmxbZMFmrvhz5L85aCNhWuTGrhm5RdhNg4xM",
  "key12": "389ZaaHqNey5K1UM6LWPXyF61xxo5oEmiR8tw8sjeu1mQpvEF8vv5pnZBF1kj8zVrj7dvVJ5yByyFLnCUM9AubXa",
  "key13": "4HvfXkcLuRiYb8J99RPaiU7K65JG8ZzMtcRS2oWa9C16KpgbHBByB9x6rRmYFCT7o5Koebitd9keMugGJfspYAxH",
  "key14": "5dG96KbYqhNso7D6VMagVkUcz6YwkGtkxhcX1xLuxWFarutN4raf4TbLD79pJ5QqrFVZ6ucZ3iTWTGWCrCWN4HZJ",
  "key15": "Hm93LRqDYNNDxLFfCZxhAAxG4fRy3sWLuuA6nGyNaeHrB72UcZKaNhf1dU7UttWrV3G4oUKnVEqXqLaWjeVygZi",
  "key16": "51vptexN5JNnSPq6WmSDu9S8bC5hHxKmcMZvs4kv8Y4ruaKaa8sHYpBGze2mPbbGewdxuL4yMyJrobVHFxi84wxc",
  "key17": "5sCwiGvc332DQtpwWjFyc34dTpFyafQw3g2iGdYgZUv13c8SRKnY67ejMVV89H49s1Y8XLFfQYWt7SVWMqZP8ynC",
  "key18": "5GerQiYD9UByhZBjuKBVELLUpCike1iLgiq1WTa3sMYdNyDyjunesbGJnwzDeBhdFhYxicjXhtjg61DbHYRBUM3A",
  "key19": "5sC3hCyJWeiduCZJoGJd4ho9YKiSuZcXKCiHUuGTtS4vxfFN9hjJiqivqfVyvapMLvgbuNxuKfbmrycGtsA8Yiwv",
  "key20": "EzFXPFoPS6aLkMcUWk6E88WtZ4XKYkzzrHi66tcZWjxtnN98sjZP1HpMXEo3rVCvZ8Bo6cjHLsD4YyfXeRhZ3KJ",
  "key21": "53jtgsXq4wE12dMhLmrb2bY58AV3kiHTUjyEUvvNE7jJoWehnfjzrAbhnDLFxwxU11mHNn11ZyyLo7yyJPpdMr4a",
  "key22": "3xovuY8hKMN93xdN86ZkvGEqgHgN45wN8SQEvVDRU7ojfmsMMr3SEmKpyyPMtbVUeK5XtCGBE23Cp49vnYWVn6AG",
  "key23": "5RNa9zpqEmjqAxa1JGs5CiXmZfL5UaLj3DPcAAnsMDeemwjMu2HtWMBDEDQwvsJ4DjyWzu56VbUhNDxBAHGiZVny",
  "key24": "4Fg3mgghWieq8nsYx8E1KWKqRzjUpwmB5Dm8UDeEzkcFtF7pjPUp4nZyMvSwhHTF69qwmzCSmFAvhiF4okCpeC9T"
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
