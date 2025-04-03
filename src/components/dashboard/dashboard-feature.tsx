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
    "4Nk2g5HVfteW9L6yUQC9yTDt9sUuozoWHLmDjvkr1JL7MbfD8UE9aCz3W8YmtwbqhGWd3CNDgRHKL2DTYikFvBrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzu1mt4XYmrUEztNpuKcWnBvvcp1LCDzywq1bHn8sKzfZSW9sVLWRrFFKKzuyRe2hNJQj81Kpv8wZ7gDqR84G1o",
  "key1": "4YLMmG8fLmZCB3ySrtgo2Bzj59sEKt8Na5KNS8bp8HiW21GD7XUvF7ZWCGCozkEJdHkgHN7BGGvHBsEDck8p6i6q",
  "key2": "7FEzyR6z1bqmvqGFAPMayornyzx4g2uf9ZPCfcBqSLsYJq4p66tDhM9VdADh5v43yFnuE1Y1cFkZVz686fQ9mcA",
  "key3": "3QbgHkp3QBGLPJ2fxetfUBW3brzvrMmh7Rh7jQyKUTpyHds9iV1qWvcQunVqMyRNiQgGWoUuVh2JbtPEhYr3k7Y8",
  "key4": "2uGeWmY5aGb5EACEU8cUcsxA8267SLkpJWum4V66XHPGaWkZVNXCB4UxNqHpEYWxPqJ3utfrG1viFiqrBF8yj3RL",
  "key5": "47qE9422ypJYasArssWgfe75K5dUBamVrNtiWqX8GGXw9Cf9R5BgWzazbLjHitcf4asRMFUKCogdLT1Z2SbGE76S",
  "key6": "3AothT4XayVi9vhKa8sroTfd5TeoXvk6RyfreUDy9kn5Rhbsp96aZwVcJ5msMZaiAf9d7dDv6w5hvP9tU4iuVj5i",
  "key7": "5FeNyeBBdM5Z1kyAG7A1oy1JeFtUiyKsnjdookrSgm8cRmdNREWxKQ7J8qC9NytsTf429CuJBQkaJsFrRoawbgZn",
  "key8": "axXFRoTUP2bJm1SZ9ATvebg6xmzTZH6S65yEYtFCPUu29pBFvDCpwUsQErFkD4cSAaM1AWh1tNYuNF4zmjuTq9Y",
  "key9": "7r7Yo4g8sTtmNQBNdge8yhYTjAN3Yw4iakjYq4AgnbSYAoYqjAQZKBPCXzgoGxFmDEzyWMHpqf9jjvJETP4fWA5",
  "key10": "54vBzJzt5mK49DyiAEbYGXFEwDRDQUzkhN9Z1qwR3AgMyz9YbQF699mDp4ZEn83Joz2BDG8kYhXdMMihHBnEPWoY",
  "key11": "2Ddw4KFAD6xWE1aXkcdM3GnhydB4hyHQ2qpwVFrcyD7zSFhCsu4jmK7DSNYRdRfbKt4mPaSUW5HDiniUgTsjD1Gr",
  "key12": "2bwvrzCyqXS4oTKj2eHP1o4vpPPZHyR5y1Fz5ajWuysj1McTYmZqVZWZ9g1CqN6wv6PpDhugaPkKodRnhKJVrL2X",
  "key13": "53CdFfVJ8VthL5h1Zvjy7BQWNsf7khNdoxtk6TUpZae3wr6gY7yWYaCgogJiCeKqgbRJqc9ao1VsNk3VPeRM9yvM",
  "key14": "HwWAd5BswD7ji8JTzT8CjyZHrxs6FpeckV8yyxAnvvXd6ydZQ8urPv3zd2kJqW5Vf7PprrHT15kevyuTXhWphTk",
  "key15": "TWHpnXE4caG8ce15NFvFvTbtKyvBvrHbAsKyWQUbD5WvNP7DUhQCVuLu775WyJGFUj9FoJu6QTbaWeEeTmHVGNA",
  "key16": "3Bvuo5xfxgWyMeqgX65KHJNpYoPDHimLVEBr4ZyyW9ugDvNtyMTRVkLN2FoqkXYJRxJyBFfktiFxR92wN5WqtTw",
  "key17": "3gfB1uJZEYCBF44uWPEbkFiHnEd5BALr5EZq7MRmnGqcvytqQT8BWJjoXaNPCiiiQUEgdXnsQadV7GCmHwUR1Shd",
  "key18": "fYdcZKxbMjKGvNPkBrfHtz9mdRsM2XNnR1Q1oXbxpzjrncGWqxZ1w7pVt1VXUEVL3iQCDr3yPEWJgjJax9mXRVC",
  "key19": "3xbUs9RNxwSZ7M794h9ekBYxYVabf2C85ycDmVDCdS7uxVFdtAXDuDnZybUeyAnAjGrmPGKsNTKj2pGLvTL7quAe",
  "key20": "4nTM4EosEZf2nbURSj2LohT7oHbb5jF3BipbVPrAZUcdSQkEgTcD8xTdpT3i3wNwN2VVSQsMUg192EzSkzQBwftz",
  "key21": "3hmdvfr6XPAoJ3dL34Mb8xvBCfBtT14RvWXWZCsv5tLXePHB9gVsGn19PbLKkWeCxkovD35tBwiCQjCBsYMfjJKg",
  "key22": "3movPymdwxmWKGZpkym87UQn11xLRx2kdDoDjUkeZUYVyqt7URfQxAxgandSiCUMzkYLkiJR2Xtii9HMGk1JsjZA",
  "key23": "25RYkj3KerkmCnhvkHkKtPGCKzg68rBTGTdDX3EdPktri3sBTSK9HvPLV1FfgG3z8wCU83UiqsrpBiMPoAUU5gAQ",
  "key24": "4uAWysGKzLeFGBtDB1vaYqah6QotCDhWhcdwca46gyf3bM1tskdSVeorWU9xwdnoqLdJ9acXvfPZr1o2ekNvJuii",
  "key25": "azubVfUBQRXUNgC54SYFYAw9vTG4rLTe7XSEdqBegqv3KpFLbSasX8EntDwQuzUWEs4Jc5gRyVR4XR9zcufVpqj",
  "key26": "5c1V2nvDTy5uBqso9MAaQKauJJfvYTpyveJpSSwxD3k2mooUZyj6pU8PtQSRj5dVWNiARt1TLbtJKbMgsebUobzb"
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
