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
    "2vFuWkpVCRry9Tp4GsBTZLTAQe8PW7MtQfDFhiFrzqmb1dQDAzrgXQEHyv5fN8xn5gMrCt5dd12PcenfZfqr1aeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57A6yRL1TzgzJ3rLyx8PTKUTKXoaZJjV2eoSUJB3zPJNYEWXAuFhEWRhpVqZyj1p94iSfXhWoxHzGwZ65iTe5zWd",
  "key1": "5tKNLBzAYvsjMBgf4d9Zmxj7BPj4FwtedsHgg7T8jADzeog8ngrETqJ6rm4tWScdgz2H6pHfdz3ydeYokVvzfuyP",
  "key2": "5F1Sqdzfar6rvf23P5qfoJtWcx9NPMis1KUSQB7DziT1NXu8Ey7EYB9xSUfyvRaCUfE3adYSsQyDZYcjZs5KYLeQ",
  "key3": "5Jpir65qLxCS7Rv6RvBEE2ghcp4p4bDKPsnHQtibQfPND1f6VebfAZWBJioJp5e2j2ptxeoARWGYEkh2fixErECv",
  "key4": "2HE4b6m4VtHjxji7mfYkqUPAG4bCAhPsNitotG1SzEz7M3awBWPQZA41WosqxHE1LPUXXGdeWPvNaVh6i3yYMNWi",
  "key5": "uWsKA4h1iYUMYQAFDZj2W3wsZVtvXAyMXKTDPpdgyS6La7v92oqCpz75B3SpXE7sFc4Z6jyTUb5t3Aseaz1c4Pd",
  "key6": "2e4yqq6ZkFr2sPeh94EYmjz1ihDfEnpzNr255MwX5Y46o7aoYtk7HqdPnzo7RkWpNFWsGx7yGwtzGdFw4sbJVcsV",
  "key7": "66t1Ex2U59SDc1WoffNV3u9PuwBKjHse5NBL7fAsfgTr1UxcjFSPUNzZg8wnijjYW9CZzxmu9qw2Z54KEk4WgjeZ",
  "key8": "54pofhY1XSUwGnVG3pBsXeSyRWpJva5EJCoPzxqMCpmqX2WVtDKRyH4eiRRQ1uWc4Uv9VCJqexPqBdRxkwAMWnTc",
  "key9": "Hc1p5JHJiFXz5c5USu4KgNuqw52RwXoB4SBWmg7JLtLpVQ2fGAY5WHgstvvKciWQn3avv5YFc7ws867ZPMJzRGC",
  "key10": "3KDGzuP5c5FPAqyJsWtstt1DBLBdgrFPrFUsgPbt5MSQfvzSbUYhKESDqHhM6EnVbwoE2ht7G77C6nGcaH2jciDM",
  "key11": "4hxDu3V7QGQsrtUePdfGewSm1Cf7rzThvhD2dZiwHY1JDgXyvvHL9D6qeYszR7n3Rce8GiMLCmvJ6KDqyUiNpdqM",
  "key12": "3edezVr9z8D83sR6Zh9mWscbapZ7oiVLJ1pUrUJhyg778aHGC18TB4d2AaWmYkUJes2m3xPw94kYRxXtKqG3TjCM",
  "key13": "2b1mxKZ9TSWFqkuwvykQ7UffRGNWKCBUwRFMuxXjGfCFdea86LwuZ5hEhxA3FCneZs5fpvNh3J1xcxCYS7rgncvP",
  "key14": "Xf3hSCRVN7QHcaKMmmeXpXTLh9ihajAKyeckie1CRMCYocgPyjGwtvLMA8xMftoZhSmZfxbwhBtwJKKxxg5MfMt",
  "key15": "2CvwfnFAU54gHThceMgZnsA7CzhiczV8hunayGuCyceRwe38QSvF8TV3YBT9B3f2dKJWttR6S9S2Fk8K8sA1Je8d",
  "key16": "58wKJza9CEtjbWtKXtnaKH3Y1K5EPC7NEG7nBYP22fSkSp67Mvu934117toAyujKuwyj4SQ5iq5BCv2paxDmVbAY",
  "key17": "4QMSgykZjK1UFo68ppWM319aNEnUjWzSC2c6ex1EQuRoaugBY8C2PrxH5X9iGLTCg71f48FT5GvzJZXRkxJHyyQv",
  "key18": "5znYVMGZCkSUPmDPQZEac5ShBBF6u9tESza8tQEmZNDaCfMyt4oMKo2WLFr34SuneN6ieZfQcNGGyYMXBXVSv9nC",
  "key19": "32MJcbVJammk9jtoV3WKUe7Ekr1WQ3tGWTUZYd9TaVb9Q1QgifQfZoBSfrYxH4V5BGGbVvNSVJFPJMELg9FFtX57",
  "key20": "459Yum4AAoCu9eJQA1c7pMhZkaABT6JoNm6akiuy6vzjqeEfxJd5mk5SPAMqeicpvGMSvchgAz86aqGZBXuJNLu6",
  "key21": "2JXHGobZVc8giyBMADvCmRowHqkZG7TW643YaPMdwNEjcfAagzU49TyC7pTYZXjgMDV9suPsc6mCFnSbAZt7YVt8",
  "key22": "4EHoQ8AiKtU5PkrmZoV6GCAx3dgE9XcAZnJBh5FijnqJL1TB9icUNiXoEMvrwuK8yz64i2wTHy5Kh7P5iPjhagqo",
  "key23": "hS48vUZ8VZ4shuFPM9zrqhpB3FoJpjh9inF9CYpEMPCH5ZLtAB1sEMwnXWggTFFfq8yYkyz2a23y6Hj3nije9rk",
  "key24": "5s1LSBwF7KUPgyS1q16wns8jVkxxRREMZHDHDVpMmDrvbaRfJ3GKCxx3K5niVeVYrhG1eqquqcgvGanwTsG4fLH4",
  "key25": "2DQ7Q7yrFNbEoq3vLMUmfJRobvZNAf6P3qYP2ncPUbUdoSjr4iNYg8cNnT2xr7J4p4MMCEgdAMXFbzTmrKHsW1Do"
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
