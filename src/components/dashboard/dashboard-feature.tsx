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
    "4oS76wLQp19kPrxBSjj9F2oQdQHh1vZtGGRuinE1RVAfYX2GrvrPCftMhagyz18Y5vGsrEwXUZK2wxV2CvJy32AT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WDhibNsUdCRcx3A1DD5kHFcXX69F8BwaPrJvjB5LCw1HQ3cKwV6ACNpgaYGisPS1vB6pUJqhcAx2cCKXJofxjKN",
  "key1": "6194SjqzCPSHXdMMNyC5NSjtpN81naA3mZhtUDu8jMTi9Rm5rPtr3qCo2KbXBbQ2Zttesw4EMmZ82Kciq1ptmBCP",
  "key2": "3L7cFqR3LM9JwZo2Yn4jPrtrUctdxZwmcMusPrGRzTCd9cehgUpMkD5BKfFTMuT8NoV9exwCVTKC8kCsgg9cgvwW",
  "key3": "G8Gmg7BwpuDfBqSxsrejZGULApjz5ETMoG8oA3RALo2smnPtmD8X3Pic2bDfmf6VB6EfDAQb8vwZGdjVNJmsNJN",
  "key4": "3kLqnSLraSKfgjjwcJZhNhQwHagyQBpnYFX5fLFSBfU1szJiCmH9NVCxaiqHsLYwPy9fMs1buJq7h6yNByZVLHEi",
  "key5": "21qzxJhEi9QmcpognwFrcgQn2uZHjuAtDMTZuRDnB7PDeHjCXbd2VznoDg16qwhxHXxA18gWTteL6PMKpV7JYueL",
  "key6": "5VJ4wSfPrZLKtMUCmbqFZ186zE75DyroT5863SMJtdfTusA5YL3sXc8oaG3RkoDogWaKK53rZ12gTKDRxHLJciwp",
  "key7": "v8fTAH75rPjN2KqCbeSyE3C1aUapn5RyneytUeqQfopZYwDSx27z87A2QeyfkJvoZTbvCYERtb8KEh5wLPYbQng",
  "key8": "674fCTXKafSUZXPsfV8DM8uf8RpGwfaQGbjV1jM2oX2PiKQ1vSoqU4jCAau8Hi9ds1QkvNRT2rqAo8diMoUXuaeL",
  "key9": "duEL5EjbdGgpdWQXkRXadhjhEwVeKT9BvtWV2MDjaugavSuNLGLHZ7sfS5JcfY54YNQ5tqcoNY2EQeDK4LJHRyF",
  "key10": "3fqbHmvJrEubXKNfdPTHra1gbQBqUawfERLg2151qBF2Fn2yND4NbvQqhmVTuQo4toRnGYhxPaC5osetqEgxUMag",
  "key11": "4ypTMTQ49FqaEjzrMqdrZoSJFGm7kUAMgtzqyvckJ5LH7JJX3s3yrfcNsp6hdFn2jorVavsiXrwaMwWgr7STdiwN",
  "key12": "53cyJxGc5HHsERUTDuQJcVU9S3JotuH5nSd715LA4UxoEoADm6FRK8qveWGBQVEWQYpNMjrx1Vxi3AnRbagXVHER",
  "key13": "3mZwxvbYrXdk1oo2Q61Cac3XJ6Vm3usiNvCKq7Nqv5EtjUnf5VZrAwUP13RgYCfwEnMZ3mY13X4PNVMzXTbftruS",
  "key14": "5yBMsPNDQoDHrENZ6ckmZpsboXyjdgs81McX9jwZpcsAPmNyS4fTa72Ldu1RuBhuxbh12WvycPQGfU9vh1GPvF8L",
  "key15": "5xHiHqgDVF1dTf9TyraMKM5FvFhTWuGkgqjwSJPSR4dEbCNqnJ89DmG3PAhThdgPAGJyP3DLXWUnE779kxmm13qj",
  "key16": "2ED7tQqEme98pSdiYbDvYsBAT29a7SyHvCsN2QedsxANtmnW5uJDSEULzSA3zg55LtV3zVr5W8ftosrnjVJBGhU",
  "key17": "kAj9y4wTMjb6LXa9rYvyTpk9FA4JVJ6tumt4fvtjayVtpvnnSJtkv6Dk5UeL3KR68m1PPsKnRz5j2BVRVSeT8cD",
  "key18": "XjLE8NC4hpiukQQa7PveydoUdhKRQYtLpujozVmUXDa7kNwKUaT6LUnTVymF9aL6fzHBiWTiKP9McTf8mESHpjD",
  "key19": "61YZHoFwM53e8WhPPBm61wbBmLBV1NsU24ZJyMD2ytwDCzccyNy6cbarULirnPuXkA6KDLoBrZcHv5qe9HSRtBDt",
  "key20": "5bgeEtDgarRNdrXpn87zptU6RUAD4JCqAAcNoA2h8Laww2agGp7MwS2Yhbrf2oyDjEdS59c6KE4QjJf5WiyL4nzU",
  "key21": "4gtT2gaMssRUeq3KSa882DdXfTe3Zpu3j8ynBG3WYJyTfwK7U6n2wfRCwE5fDsGpTv6F84JNG4H9yjsiroF843S3",
  "key22": "Wn64QHQRiXhF9qSrBMFMKNFjFukfSKtwUztfTZYtLtoS98CXrr5jUPfJEiYafFRDTjEPNmMsXv2rB1jsdrXxojn",
  "key23": "miXc64Unr6EZy9vgenKt51Gyjvc6eyqts14SN55TqHSX64xYeiKxeFRsbHbG1aPEGxYSLTAZSK8wJF1wvEzzB1R",
  "key24": "2UMC5mbQkCFWHgp3PxYiE1QxNifDA1zMV1DhzWQ4sAfyqe3YCW1Qq83t9VRm9Kt2dzDXUcsC7c6fcyFEVzNicZ81",
  "key25": "2U3Jk1U2ThYa4tCtrsaLRkDmnmQhoZCsTDZQnVeFHeLkWZZUVTVDo9A12SRXT6jnLWJhwE4nAB7jijCVBG7AWEtZ",
  "key26": "5qio2HizSFvqikgwajNy6kEKA242zJ5WUELNGBEtfkHZ8QaQh7Qs3CzcqqzPFFvDkqZyRizG4R7hBEAy9LDVmh3S"
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
