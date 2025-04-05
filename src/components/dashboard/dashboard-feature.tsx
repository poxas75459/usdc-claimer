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
    "4btSx9NYPVSSRBArU5HoTdbRttju8NsMsTgwAiK4MZq96mqihEmG68kTGEraR5ci4sR6wVMtJjKVUUfFzMazbHxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBxX7iWpRwUHj5EyRndLFRa7LxKXWjR1R9FAZDJiN5iQH8xYuPseRaXEv5APyVa8psvdmw2bwe2CMqhFcD4i8H3",
  "key1": "2D56mokmrnnXUh277h3f2hdevTT3qcHzGpZva1218umjVDyRYhkJTBfFK7sjisrSwbCrXgzp1miWmXVL4VFS7DVy",
  "key2": "5eRDEBSfFuPZaYV6rmouL9Kqtfh7jVpvC4og6G6hJJrwMFMRMcgZoSJBitCVvUyecgYjZsn4gGB89uhvJFuJ67Yc",
  "key3": "41CTRZTKtGtQenmfSdnkZ6eJHEjJ3R3RhGT2GNe8f14MUY7pV18axNEHGY39hDzsCuyiuaADbMQzD62ujLkGnnsh",
  "key4": "4CN3pQuqtmAjuKYqPn39U4QyqBR1wAM9xSKEGqDhNT7ScRJM5KtaJapSeMCTuBmfkPpskExYiq9v96VBHWwXN8tT",
  "key5": "3yvBckJ5CqgBnao1SiLX3zuLnz8kPdVzLN4jvfanPvT5359R1LukeC7tvuC9Qx7z21Cump4V887SJGt7hRGKUPM2",
  "key6": "3FMXHPUzda6pQuNxaDyXAhiazUhsEg5FQRRfKqmyDVB5A58Sp1AjF3ezohZTfVxPzhtB2oZxSJDWrbdykNDXKAhB",
  "key7": "4SawVuyDirxyqK9FNJwx5sDHfK11fbgjxV7hUpYXGj4kf7M2P2kikogkLq56R7VdPQQqYAJ9k2KWDjEU4yPS2UHK",
  "key8": "4ZPF22qtnTBgY5V8bBWMQLGfWxWBivdcYahn6B8GAhT5vLGqvfGuSLZevUa1UqrjnxohQFrhcaH4h2HaPTLfhJPS",
  "key9": "2qv1k1egpss15TBxsnM8PVigDxuJUGrM5dz4diYs4PMrzjH4nULAijVHZALzDLJys8phejfMUUYWMUdNKQnTHKhr",
  "key10": "4ovxvRf9N4fa7mWhqtcxVPA3peU1gkxN9ZbVKcu4aaDhxCWNpfS6Hr8JSWbN43WHepM35hudpc1PEGpm1zCHPnm6",
  "key11": "54TCezLSQ9LMSxqPbu1gMznbChz3pMQDfmGJ2d5ybFVTw5PLXWi1Rx2p9FL3rThHhor2JMWAvY7S4Wj9CUsUxuKg",
  "key12": "5zRbvsFe7Qf2UuKUFgYGnYpwaWWPfMpv3cFPr32d99Qqbr2haL1BppzzACTykwkxVD5v89HBMbfjFoC2GFnfSGeT",
  "key13": "4BSSXcDDp79xAKki7XJoVRvSJsioXLZwyEhGcWyKgGPhLifnuCuY26BJS9QZhpq1XYS3TfGmQU8d7tZWVdK8xsjT",
  "key14": "tJma587XEd2GFHE2oqwL8kb2LTRwdDnEcLEWUMt9ixnxTkXh7LbXRKeBo7kbdRpcey2Y6QKwGoMF7LuZyTi2hjs",
  "key15": "4bhxYe2BgoEVJcPxJSQoKKZW1kSLyu5sz1MPWScMU2wSrVc8txzdV7Vpq68y8wM3XBuBbrgjrKP7QET1rniY7wya",
  "key16": "5zQjC4E913butM6m8SjxFV7UxiaFWaX81AvvzjUpJFG62EMnmxQg2L5nM2PGrAwU5pQ1qx37P8YzmLPUpsTx8Qh",
  "key17": "3YfSGwgk9wvTZzLRwSiFVLLPqAMDr92rMRvWYKfng8CVxHi917wSeVGeY5VSXjfpBShvD2B8DmjbuGTUjosevfr8",
  "key18": "4T1MVR2HMwCLhsx8hbMQs4RXKLQnVYn7RXtDSWcEW4EDc9Y91ZF5TuRpNzN5LpyAqbEHiaugcX6xPLnaZbUPSzuJ",
  "key19": "p5tHB8ZABpweX9srkoHoTNdVHUG2bKyMt2bGfmDwXdUtEJGisEVNe8bTivwyuMkUUiVirt1MBHtsEbAPv4TPRkR",
  "key20": "En3SamA5hX9PKXqwAZXWA6eyxTHYq8DSThrodt1TbH8k6n9tFE4Z9xihv344vqqGbVPfzTZpG99ok98QnYbL5bX",
  "key21": "sdogFvhxZ9iJoKacpKP2LUtYX3sHTJyQHwDtoMWxa5ETq8yxeck8mD7PNPACjg87adXpLDfH8WhSdNb8XnDAwkW",
  "key22": "HucYTVqNCWUFHAVear5LuGKJJMvC7Ajjo3hwXJKdTKxmvLcWkbkTDGWGXYMzM44XDXykd63wSuP5u24TsETuo4y",
  "key23": "3o8MCEXfSVNK8kEoMbdsSpmktym8R157AUYDptCFQYxJEKGfgzSxdRyc2YQxj725c5c2Pbe8juJg5awnSmLXcSwk",
  "key24": "3QoBM3YTAZD7Pvh759vPrAcqMFnU6UaHfLrWQ3eiSY8BHw7SNycEsKBdoCYjNgpSDbWuJBg3gm7Qf17qNMmFb93Q",
  "key25": "2o3uWkLs5CqhR7QWA8FJRJoibzMjMjLLtPWNEnwvLroiHqcZaHfWuH9LsZb66BSeUkUfbzcsc99UbzPtip3rjNd1",
  "key26": "KXo9vddRCUn4wHhbrswSjzEooxVXTNXAN9W8ART7J1Nu2UWhWLKTvm9ZXwx4UYcArmt6yt6t5v8gheCMo6xSzpf",
  "key27": "4GMYM6FARNtfrZx6QLwDAk8NtwBPe3JJpvcshuAd6e5yrZmBbNj8UAbDxNEsnn76QtDwBJtn9otdgrEDHUsVsvmQ",
  "key28": "2VSGWZ2rLHnyWQb2wRRe8pJnDtfgAwLeBUUy96zM1LEUG7jUEMApj7jZPFqk9zfNPQKdXKSmLsL1o9BCdkHBZhnT",
  "key29": "4nCQpHFMCpNNakLyn2BU65q8SzDUgPLLAJaEQTNNPJ7e9YYUzTp6gEP6PgLLwsWoc5Ahjvm9tZtm7i2VEy8fVBsV",
  "key30": "3xE3CJgEPwn9bz3bUwCoVKkx9HUhnhE9M8uzTZF2z6SHvkXKrmC7YhTnFCnrS1cXfTiVHtP3aTREQw3RZ2ZzTsXQ"
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
