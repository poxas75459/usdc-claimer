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
    "53ujKeyKeiR4u3zh3bbxVy9Pnt19TegRErygQp9THYMhorChCHsPttHB74kt2BQdc6hy2WxLFuxyBE78y3VHJxS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V4fY97FrWMqYFZ6bkEjyzn3eHgjtvAmyC5nrXyUPf14sJfR3ZFSBH5zWCAQ27fuL55wMyufBn9k9uywrKU4LXCy",
  "key1": "5p2Zt8eLLJJ4Faz5kVaUypTUGJuA8KmNUtcgo4sAgTsaxNc2rEC19bgTajun3GZFWAQ7gV9LnhWRiD1AWB41vVem",
  "key2": "5MVPA7MUHpvu1yvYrekgATKDNeJiAWaaKLRcifonq4cLygmGjKb6zRyNpNUz6Ud9hZNr7Gcgckm5XRKsq5NhWuGR",
  "key3": "4xF4ruu7VKzCsbp2PqgcG6rf3kP5PaSPVKUiKy43zdiSiaxfRbQtsS74FqmRXFjJBMQvdmNLqSSuaSLwMwakZqcd",
  "key4": "3eTn3TPv3Kv26ze2DiuSnoecgoegxDQEHdvhgQcnZHVQsqYwkMxDGecUyVs2SNausfDfXZFnKpNtLpwJSqGKqRvt",
  "key5": "2d1fngujGa4mdzTnJRXzJfwEyE5f24DR83kAzeyjHfnGMpdyw8K6anGiu8fiTendWegK2BgK3pH3ALgSDbt9cRTS",
  "key6": "4sKcksNQjFBDTYFvmYA8j4H2jsw3NYE1ERAj7CcYHGdvzb5yL24HGxAe7qy9HNeWv5wFrMk2Dyjnxd5pXdeZS4RL",
  "key7": "3pbwJgkjqWvc816BE9PUGFmappjqqvSPCp87C1CdE54pwuDtHwiswzCScnFJmP4RYLR1TXEwdErLEYdDkBUCewpP",
  "key8": "5aZQn2cpvFroo8x7uhf1ukEYP3TViDn2hGwi556buco6j3TTcVVkX2xJDU3A78D3B2bdAKpL9CFX6KCkxXTKEsYp",
  "key9": "4MjniMVtPFtPaeTxXgjWpGCPuok5xsHCXxJDcbeoyrUCsZPcG2yWsPtetARFCLuMq55gws5bQCZxioUo3GStDkJ2",
  "key10": "496ZE3x8PE8mF46TZ96ioxeT2tLQ1mr7Us477uBk8WWRQ6UHFCxB1ntBwqaofqUTUYMFo2HdRghFwnsnZuWD5xM4",
  "key11": "nWBANWG21yNb8WT3MS47xZhnfi52hQhw9vtTBnAEYLpTNjxrALppNXYdc62vAVUuWf6yjzLoAQeebj6jSou82oz",
  "key12": "5nxrdip2XtCx5EpuxN721ekhfpRmQY3yJYENBvF47f8B6fhKdMthFYkqnpXwQ73i3bLVgnTX83Ebs8xdFX2tLdfM",
  "key13": "4oQpS7f6DgQW1hFXEEthzVVXqUxt7k5qiWuDAhZQzVwAWhXefo19qGFLX2FPnKBBBVvCripTe7PEjMerhut3sFoK",
  "key14": "4ZfWg97XFvPtPTnW4gbb2Uf8G6HkkwBjapggJuyD2W1yNjbBEXDWhZ1zX5eiSkcjKGrzN6awo4iKxsAmxXgAP8MP",
  "key15": "4ksMYgfit5vYAMAL7wMj4Hxo6ytqqcyNRViPb1m2RjGBUM9fZeTNYqF2BwsX2QRFrcRgzZ4Cgp1fU9EujQgm1dm5",
  "key16": "5NK6Q3bcqfrfAyBSCwh726ddw1n3kqcspr5qWTN61oECrZocK22xmRkSM89GM6fcEZtj1hMBf3gAMWraEkpDhkTD",
  "key17": "411ZcpW829srCfmryGpvYsuJGhJZ5gkHNkaGswnmobK5w45fR8M4DFQm9aprz5FdFvvy27b7xx3WW8GT3dg7twXy",
  "key18": "2be5F9d1M596gnrQYV33j5qzQpir5mNigUw89JwdKAJ5EbSKE8e3A4sZ33Ruim65rfwXsrBqaqQwuKnpUnyEG2hA",
  "key19": "3tN94CCCBnxKWKjeqDCbsRXwXKeoEpETkpywkAsMRkZDbuyU5oRCpUgNNgZzotXDyqJjNnA96AT1ausE4Ja6B4Xk",
  "key20": "ktq3QypihWRzBDR5Mq5tpRjK6mwSJWUvq1hBSyYYGoCMqjmfqXGZespoVibSEH93CXSPsiidEam7iJrw8VqQvgj",
  "key21": "44cMDYkNMub9kNh6XGjB8qZZkP3vRV1P54YmLwcYDnUeWrcNWSrcXL7itQ8WCCMAqKnQHzpWcDASuBkWY1gZomLL",
  "key22": "3FyUn92qBD2AmS1fLHQMoESKAgoto636E7wzS5CJ96mNUbieV6ST1KJ4HPzZ7EjcnnuravG7ysMCFpgUCP55mEkC",
  "key23": "389qkQMFjgSwVVN8jq9awX6WN4yfSVmvo2c5c19AJeKvBEfPmfHw3um1CHfQjny8kCBYad3jzh1Xj8J3c3WLpgJB",
  "key24": "3rTpQXwbQcWqDcsaeQKU7URaG2cCx7LuEz2AsJeu7JieUMJgSUmCmmFBx31hDiwgnNmKL2T7KYo7JznojbAFRxzZ",
  "key25": "3BG9rc8oRh8pevANvUgd1Ku7PwjPLxehy6R7xMmTdkuL6cEDGYPYzurg78c7XCVDaG8vyy62CRvDQooMgBxXx9mv"
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
