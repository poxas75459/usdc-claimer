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
    "cDRtsFtt86su8yq51boy794ZwfjJFGFS5eK7g7cT7HubR6xTsS4rR2gCkZoMVc63VCVQFxsYtvuffsYBQJbsSPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eVxnChFA56swTbQchqaK2xmYAuGXbisGNCrijxdChF5wYdxubWZB3ciYDDmzPFDuzPB4dSbiwYLeaRzSDPb79hE",
  "key1": "32vjrxBh4YcPN7QpfmfnNCG6VWcF1TXnFSQT1n1Kgq8bFKJgqAdQp2Rn175khFN3zsyF6HBDvHvJTLgbAsVC5EgV",
  "key2": "4Nu12DEUjpVJTfJGeGkLfRtjSopkRaGaH48ioXzh3ThVJVhQmNH2UdYMP5Cvgz1eu4u6g98GKQKNdhDfL6fDfDcA",
  "key3": "57Aec3duqp95AF8EA593ZHZZwvEsha1WorLJ7CvR5kbqAYsAy52VNvGes7PdQcrAkzEeAfRoQx63QTjXGPEcYWP1",
  "key4": "JY6CBgW2miG2euCDYoxQ4kcHktyEmvmeZFyKZAcewJrTPQibrUpjvttzUBeUUXnnh3NkNGFVMzWTN89GPBkXEfB",
  "key5": "5DRgRCTin9vPZ5zCfGGqTjRPVznXJAYaJngmvNtuMtDXRKz83BkfiGPooTBFgS5DzuxN96LJ5jDnT5RCjEkxE8MZ",
  "key6": "XoWUtV5n1WdMGEkBfTrBYjVVaT5y7bCyZaW15dH4fiaegXMFTfNJZJZQdsgSRxXCwX4KxZkvoLUJWNStsX8HRfV",
  "key7": "4o5NcyPKCHoWWTz6VN5bCo5b62H3qsemCMyjbCHSLh4wT3LfCAAL9nvd8CUB6nN48eEQtktW9cN17ZARd8GKohgL",
  "key8": "br3LTPcnZTz6S4gHeEW4DtQMmQgG5KyMUGC81p5vCFQqUMp7b6b6rzX3AfoNGbB1uReNjzCkqRjYvvrV7HhWQSu",
  "key9": "52yrb1pGaqzJGCVTvj1gnDuP64LKDUpyUoaHsGyPWAm17TtATuFy9jGzK4nQ5wANzbs6A3zdRyoQsCcwUtSm7CTD",
  "key10": "9tudmQjv5XvvvV2CBWu2ZX2x7H3BT64MgTfHQcWTrBWRUzgyzxsc6SNyudJD6URjcy97dSQwa4dqfRzbeVkn1Wx",
  "key11": "3VCz5WZTMQ4PaDpfsuRnFRyTRzsCcwxV1Nz8LEZZeb6VSx2BoQsrmBwUX9ALXwJ3MyaeiHPdxmet7JQHJyy2pX8m",
  "key12": "DYNVZN7CTJmAPX7aDfVuCBSFyViQEkPX8Jqb8KT9kPr6369RCCGXsGGPFS6q8WX22ghaELihfX6HQU5GVixNnFQ",
  "key13": "2yadUETVa244opLBTQKYFkJ3AZW8Q2xZQKpcRRcWt1vsMhFGuyWBtrvCXrMTWrF9BVPwpq9Zia9aj8Hzdc2Gcdg7",
  "key14": "2pBdQ4dqaJwwMw3Xxto2XLPniChMpbfe4RXC847f6SZkfaeNsbXaAqAZc7uzGjrzG8sQZk5sfV4DRFofahGVkp9U",
  "key15": "4WMJAFwWAULB55B4EHJX2nLzFkVbik75WcwFEWftnAiX5FBhYUWSL7MDt9gAzVPD3UWhUQRrUopDKko1bKhKDFsw",
  "key16": "24fu2uecgjf9dE4zKe7koAM9GNQUMYtPzgZWcPj6cNPW5i7Z88PFRyqP1VB1xYaQ1mLjYStKfqTh9pjvCUXz21wM",
  "key17": "5AjbLUpF25MV3ejLdpAu3GRFkgWv5HjHjhJk3t75PjjjXu49KBxetXwn1ovuTpQdNeeQFi6EGHZVbWEBphUwSgZV",
  "key18": "3Sh3wf2C8cWfeJ1eqBA9SSCLkDJ6mUUhbKqx66i4TWFn8BjVczQhef9hUcpBpjZuRWjdtr2SnZRvoAUmN1NyGmGX",
  "key19": "2fiDo4eZBxwEwmu2rZM8LcJ97wsD6ja5kQWmwN7yhq2M8rxXRa8U1GXWKwCc2ZHdVbmQy6w1oetwzJ985f1y6UjZ",
  "key20": "3Hv9WPHtSccYMynzGw8RNH5N6gZxMc8L5wVViQeYcEZJ7RArC7is2p7FdPoeeCY1xvQvfoSq67o1qhghTJzwctRQ",
  "key21": "hduNynYRuzDjcuNdAhkps8kdSmNkLsHuzmMvk1fck56bEbwstxJz5AXuS2NWbL2v5noRhm2z4fETpTk1C8oZ2vC",
  "key22": "3hPYmQGfNc9YznDh8a4LVRmk13b8hasUi7MDH1x4TW7GSsuufktXiJ7NpaxH3bkdF3KVUatySwb6PMJ7dFk41cAz",
  "key23": "3bAEXydWM8CE6Y8XymkT7i1sHeoWwPhonn5fUxpX27nQU4YPcYWJ2HHvAR1dZCFDQEAyjf9hEnTmFWtaprdMhPpr",
  "key24": "2Vmec6wnpbh2zRNFoJALqz1cf914T5skKE7NNgZmMADTSk2LCyGC9GJ8KSvinhUTEuDKWTHLfAJB3fmw158dzfwy",
  "key25": "23j3iWFfDwf6PSFEzmFSvAoZnEfctWYP92vNNSoEKPLKCCMdVLb4zPG2NWkEZbs3Q5muh95ATKpGSGgb9Sky5gB6",
  "key26": "Ai8fMtyaNuZRvgPEU3dkcNEkdMsR8qsL7mUDCuCj7rPDCGbfGcSpY9xVfPEGzDhP5kyPzsf2xVhxF2cgHFbvrEW",
  "key27": "tS6cYnNZeZVg5tW1gMXEacaS3Gb9nnEAsPhGk6TCQtKPBtxhpA57TnjEMidhS8yyrU7xTBX7EY4eK6vKqVS1B3u"
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
