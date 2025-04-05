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
    "5rdDnvkW8F4JbcUHpC57EcKQPUkDFnzzto7M7nZR1L6ct1nMmgnF3pwAKFagx4XaENxSt8E4ns2cJby73FMzRYzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45yQ4xtcBQWpAYKniRWGZA3nZTnf7AceSXLC82SJ1zb4WxeD6bqWc9QtK8FNGTnMQ8Yp26gFv4C6dbq4FXjKg6Jf",
  "key1": "4cXsxynAC1Pta5CMbjSiziRCYb2H4fdEv7Ri3AKXnu5VcNxwPumQkq2quRao6upv23f2c75E1uoAt9M4AGCxs8VM",
  "key2": "DsKbi6DJVxQR2qq47wN1GYdyAVVMMQ7Xz3qdHSkni8BwZLEjhvycJkNXMmLCWh3h69vbXKbeEGu8VKbAsrFPWcb",
  "key3": "2agDKWc4wYJFpv9wRphRvKcs3hjvQj2JFtQSYtWomd9YdrLTHAoDoeSDxKiN9LJCMYd7Zxxdz8WL5A8ssJCJXCUj",
  "key4": "3YyvMW3B29CtbxtW3A4XWVt7t2oiBgYSvrKajYRaVEAkm28rGxPwLu2V7THmWAhuGCaG32mat6NhrQMrwXFHJmsv",
  "key5": "3Gg144Y6YyhbfZDxEVosAms1iuXuJdC1QB9NCruhzibTAEvvxbDPkb9VnZ16tn1xAYUSTtyqYXC3Eh9EGn5NGZyT",
  "key6": "DAyXxW2rxTjX2yVxdvALrUCzLdDQmLqC1pvPXR43yWg7g6wpWcjvvtK1AywuCf6dPAwkmQG1gmMBBJYVNoVNzSV",
  "key7": "62d8efkqHHrRxEfuktFEpAQV9KEfcyfLvo8fbr8Ts7scwkLW1nqSrbwgqeJ4i2SSFrCYRW4EntT1UCdTNXJmsBBw",
  "key8": "bxTHSXcLapC3fkptDzPXJ8QT1VVEiW4c1Xxa9Mo4JFV9nz4nay634oiRMhb6ncXwEi4HkGtzKJVMowfWMVzMA9w",
  "key9": "3pr81neBMXvYK1i9S1cYtqbfYoRFGUjN48xGmnC8TARaE72MUgZ6bUzNeQkdwEQLAenCTsggydu7gDryhuK7YZKB",
  "key10": "47mviN4DUXhs6FY6aomwXBR8jQgPjCrMVbCdFBoFsK6vVX2LCMSMgvjmCvsH1Gz7jrCYofY3nQu8BnUgBMZVM8Re",
  "key11": "4eGmoy8kMspxaMMxFFEDLKPhbz7PS7xdAuTQSSxHqWKFCLQbNhzusboxrnSWqud4Evq6LQiDrAScKhe4e6WzxaSr",
  "key12": "2gufZfhwrNzM46fF1NTAnFeUYrCDSuYQkp4sx9feiR3wVyUSYov9YFTZiLJ4yezH2p623TiVqfrLkcE7z9T6VGFh",
  "key13": "3urWfRhiHzaxvW5bGvnkc2pbedk8q3UhNBdSFMVYputBRoew1GV68NL4NKJ5tdMKrk2xcB8NwX1mhFBW9bHfPMLh",
  "key14": "5n8KvgxYrweC1vx8z4jQe2E4Jhzx5Q8v9f5guhjj44hys5gS12566d2D7a6jDbVd9NgquTaSN557pXgqwkvLMim8",
  "key15": "3NWmGaMKSibrznpSNtgmV7Fh3wSaxxLVyRFnmobRaRtfWVQaSQW4niDceruZnPkeMZTqvK3zjoEuS6T1BjXNPRFi",
  "key16": "3s4e9hiyj3o9ua3PG58rtdEdufA8duA7Q79bS5HuTeUfUuStfZYbs3fsLUENcF8axN3ukACEwbNGQww4nyj42Te2",
  "key17": "2p6JBFJ9pPmfAfqx9KRDmADE7r8TPHmcjok6rSDePUHTuukJGrcqKAXZ2gDUtENTHmv9N6RJyVxKFBSXwwGUXd4r",
  "key18": "4epZk3nLSFBoKroMUr4wSJMa1omuLq787VVH3WXb1KyqBcGqCfkgRonwpzCQmJ6MMckLzWXEgTQxGDBvkjtDegxc",
  "key19": "56nNDmpiT9nckBtCqcU2pb6Po5VHsKQuyXztJDxM8mWbRdjSoYddbWbUZt45MwjZEptggnNY9kmfEVCwvoiDpWbe",
  "key20": "24o58zn9RxW3GCZ1oQ88mtQKNeVWw7z9hnLXTGABEkEc1tmJWBkFixfReR4jpwU3D2uF8aqMg95Sbpdd9ZxMhnKM",
  "key21": "9EF3CMBNom7pGdr7DyFDmbJ3fQuygETZBvF4Z2448XmLWr3qrD18DodYw6m9CrMS2SS3dw3dg8pzTpUFYyw3yEw",
  "key22": "3NBfxDUd97Kj3CxxLeSrLhCXob2NCcPrX5fcehJHKJ9LWkGwHRVoGmmA8xYiCGxT9AS3DHpJyz3NQSZPaAbtYfF3",
  "key23": "yyF2Smci2CPfHsVWbNsYdFb4hHLfgCdKrUcRRynmpmbQbkbf6iJ22d2PXBKbrbdb8oVb6b4nGddMuxkGponiEY5",
  "key24": "2h1Frh4nUvU2aVjrr8nfsB3xGwK7LpD9ef5mWTuTdjERuEYUTPruiJa6hZREZCozkmtieGpmBXvm9ZqRm6DffFZY",
  "key25": "5A9uuNfaXLzG6SdWyngrWZk7FuxCAsJGbjx1UC5XpLzPUq9mcPvsNr6RbBoH3cVn7CfGkGr1QL5irbMHJux6fDiF"
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
