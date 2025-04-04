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
    "NeGrMtA4p3S23K1UJ6yRcXMgkW5bizJH9yoJCSv5SFVMpvrdCtHzgPKSR3GwQ8v8zeu4Pr2t2TgvtVCoaGYCQyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XmPLPjzCv2Zwj6iomSpxaQzyxS97GXJGGfjFCYf2UEFnRT9iW6FXwWvrgN6CjNMbA52GTqEvDZUEKBzPbT3GsSw",
  "key1": "rKMEXAtJq1GiWKkSThPtXtewxmSyiTEW4nq9E67JnPR77KKeEHBdGsMvvxJw1gMhriYZEvUzS94MGMNN4mNTHgx",
  "key2": "2XkXSLPh5qhPgnpwSCDddspCeEzDz2CgmLttx6876hFFf6mGaDhVsJeFkFUZZcQGTqqzigTbS66sNyhXh6444ztT",
  "key3": "357y1YaqQuoZaSQ8XKzhGj7NJBpiCWgi6A8XMkQ1rYiUt69KGrYVPzduAMbvPwQgoNQMLG5cGcCeto41y4KLSuxf",
  "key4": "5r5UmCCvzyenrBwc3AEacru6nqA3bEansQngdifDs4TyigaAhoy36DwEMcHTaEbz3dQXvBkbpcUEujxvcHT4midn",
  "key5": "647WAA4dJr5BH3gVzTL2CsjefbhLrVWQidgZoE218dJcXqXTqdz4pqeg5kuK36DDzT6sWwYsRKmxKkdGj1b6bMKR",
  "key6": "5MndgB6PumSazr6GqEbWe3QXMTJkk3Ds6P9GMXZrd3N8k7LhuHjrEyiYJT8xjh9rTjzzjLepxHceqnd2cNvqjLnd",
  "key7": "3SafSKvCWAPt8AYXkh2S95cEkUDoaajwCW6YKXxvYg5RrCQFkxvojbX2ZTjJMgWyJhUkiiUNHztUSELSct3fwtvG",
  "key8": "4aVM61wY27gVcQJUDCJrSjUkjYaGaeMRMEzksmkrWShuiPdoSE4MAp3c2AcBD7z8SD3Qge6WVAxPLCmSLMep8bP9",
  "key9": "wPHygux6phQDW5VN3vXvuhsyk7ZcvHefF4Hk3f3r4ZPMkxMpWjfSVqt8gEdqH269creS29qo4z86Jif81gtS163",
  "key10": "3XVR1uqUEUcczdx9htWhrvzxJK7MQQoQkyWTTSzvC5YZRJzhTaeRtdzYkRN4EgzZciZx796ruMe72AGRAyFZeE6h",
  "key11": "W4XyMUky9eTJyTEVzuLB4LFhTVEv2U8gdaTL54dXUv5CRgCsfTMSLXQZqmx3abRsAS2uNmNXUXhMiPf6kV1nukF",
  "key12": "2xJrmnQnqJWrZU23L4CQscUZcfZUYzxAB4Ji7jJK69RgJTHbi2Q3a9JDqP94QTBCqM5MN2gtjduZ7GeHg6NWHLPf",
  "key13": "57KUytDKCbeGPcpDKQvxZW3aZxwpBwPXa1wtMY5fWdknqxnrm5RjHJfwao7DmZ9tqyAu9aDxDJtVU8WEFM2gmev2",
  "key14": "44QiYPqr2W7UHbNBNADM3QVa7Vs12ggo283Dxbc36fi2iPmA4139cFLSVz4ofFyydbUhv4N2effpSDAc7hm4qCvd",
  "key15": "31P5tBVpQ3MygwxYzaiyCDDsjUY11JdacffR6JVNcFFn8zFVNs7ygpHhCYdtZxKoUCgXxRYrW299UmHBJASPehXf",
  "key16": "38WmaFy4aXPwL6D3Z1KkxhGmzYrrNNuRDyw2Z1jupccpfUSPAhRpzy56HFvzWsuj4SS83L4qKTk6niUfTRVmLdzC",
  "key17": "4wHmLBMokwypSSWBfJPuum6AX6smNU9fncGhKgBzxrvHUEARJ3GBzAsxkGWLMXu3DCVuNzvi8PLdkxdGHYAjDex1",
  "key18": "3aPYcfxLcHsMLdoD3SC4UVhMJztbDFW2St4E56yR2vbyL2ehHHMEbMZCp3pefhrmZ3YVXcsPi4TgkABf6TYJ1cmJ",
  "key19": "4atADKFB4W57szBZ2MmA5HKMK6eUcPHt45edErESczNFsmrJ8BCNnMLbT6RmsdiZTKVT9tE4HN5xMYiEHdsiJwKh",
  "key20": "61KTBHT6GU23WQGVYzvXF6Nrh9GmcrQFSPuSZCjM7bNpk5PyrxJLFC36BcU9SjTZPxPjhTW3Ns6c2KVsmkGe6HGw",
  "key21": "5XSsczZGLUerErdA77NzxJgHEvQDtGBvgCVHcSpjkbMGDeB3Nqd1k2HVPhhSjVUyk8BZY29r3qko2gsuZTFpwVoS",
  "key22": "4qBmf2p24rw1q5oBbHxZ99ZqtP4ZYtJziCpQ5sRyWKKqgJpqujQtx2Jx4sfd3kfQQG3Sy9YfVVX26TWuRtQge7k2",
  "key23": "2rbdj3VuNWJSQ2piVDPixb5YoxVwsra4TxwWvXbujm1q9qpv1XyvFyYC1LPGszQeD6TqYwcfXP8LrZkSdKToY3Vg",
  "key24": "3vz3arXbTBsXP7pgXLsoykDtp4a4ocHWhYivrWMHPipChB9MTG4DfvTT35ZLKoBKzTGpjzA7xfotfqwqqCRFhBf8"
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
